var AH="186",B7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},D7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},TH=0,BW=1,_H=2;var c7=1,wH=2,o6=3,M7=0,D8=1,oJ=2,$9=0,o$=1,S9=2,DW=3,MW=4,SH=5;var a6=100,jH=101,yH=102,vH=103,fH=104,bH=200,hH=201,xH=202,gH=203,pH=204,mH=205,lH=206,uH=207,dH=208,cH=209,nH=210,sH=211,iH=212,oH=213,aH=214,rH=0,tH=1,eH=2,kW=3,JU=4,$U=5,QU=6,ZU=7,KU=0,WU=1,YU=2,V9=0,a$=1,r$=2,t$=3,n7=4,e$=5,JQ=6,$Q=7;var r6=301,s7=302,AZ=303,TZ=304,QQ=306,k7=1000,t6=1001,_Z=1002,B9=1003,wZ=1004;var i7=1005;var X8=1006,e6=1007;var Q9=1008;var D9=1009,XU=1010,HU=1011,ZQ=1012,CW=1013,C7=1014,e9=1015,L8=1016,PW=1017,IW=1018,J$=1020,UU=35902,NU=35899,GU=1021,FU=1022,j9=1023,o7=1026,a7=1027,EU=1028,zW=1029,r7=1030,AW=1031;var TW=1033,SZ=33776,jZ=33777,yZ=33778,vZ=33779,_W=35840,wW=35841,SW=35842,jW=35843,yW=36196,vW=37492,fW=37496,bW=37488,hW=37489,fZ=37490,xW=37491,gW=37808,pW=37809,mW=37810,lW=37811,uW=37812,dW=37813,cW=37814,nW=37815,sW=37816,iW=37817,oW=37818,aW=37819,rW=37820,tW=37821,eW=36492,JY=36494,$Y=36495,QY=36283,ZY=36284,bZ=36285,KY=36286;var WY=2300,hZ=2301;var YY=0,KQ=1,$$=2;var XY=0,qU=1,t7="",Q8="srgb",d8="srgb-linear",HY="linear",uJ="srgb";var OU=512,RU=513,LU=514,xZ=515,VU=516,BU=517,gZ=518,DU=519;var UY="300 es",NY=2000;function vN(J){for(let $=J.length-1;$>=0;--$)if(J[$]>=65535)return!0;return!1}function fN(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function c6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function MU(){let J=c6("canvas");return J.style.display="block",J}var bX={},n6=null;function c$(...J){let $="THREE."+J.shift();if(n6)n6("log",$,...J);else console.log($,...J)}function kU(J){let $=J[0];if(typeof $==="string"&&$.startsWith("TSL:")){let Q=J[1];if(Q&&Q.isStackTrace)J[0]+=" "+Q.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function r0(...J){J=kU(J);let $="THREE."+J.shift();if(n6)n6("warn",$,...J);else{let Q=J[0];if(Q&&Q.isStackTrace)console.warn(Q.getError($));else console.warn($,...J)}}function ZJ(...J){J=kU(J);let $="THREE."+J.shift();if(n6)n6("error",$,...J);else{let Q=J[0];if(Q&&Q.isStackTrace)console.error(Q.getError($));else console.error($,...J)}}function l7(...J){let $=J.join(" ");if($ in bX)return;bX[$]=!0,r0(...J)}function CU(J,$,Q){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync($,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Q);break;default:Z()}}setTimeout(W,Q)})}var PU={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class M9{addEventListener(J,$){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[J]===void 0)Q[J]=[];if(Q[J].indexOf($)===-1)Q[J].push($)}hasEventListener(J,$){let Q=this._listeners;if(Q===void 0)return!1;return Q[J]!==void 0&&Q[J].indexOf($)!==-1}removeEventListener(J,$){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J];if(Z!==void 0){let K=Z.indexOf($);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let $=this._listeners;if($===void 0)return;let Q=$[J.type];if(Q!==void 0){J.target=this;let Z=Q.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var P8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hX=1234567,m$=Math.PI/180,u7=180/Math.PI;function J9(){let J=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(P8[J&255]+P8[J>>8&255]+P8[J>>16&255]+P8[J>>24&255]+"-"+P8[$&255]+P8[$>>8&255]+"-"+P8[$>>16&15|64]+P8[$>>24&255]+"-"+P8[Q&63|128]+P8[Q>>8&255]+"-"+P8[Q>>16&255]+P8[Q>>24&255]+P8[Z&255]+P8[Z>>8&255]+P8[Z>>16&255]+P8[Z>>24&255]).toLowerCase()}function qJ(J,$,Q){return Math.max($,Math.min(Q,J))}function GY(J,$){return(J%$+$)%$}function bN(J,$,Q,Z,K){return Z+(J-$)*(K-Z)/(Q-$)}function hN(J,$,Q){if(J!==$)return(Q-J)/($-J);else return 0}function l$(J,$,Q){return(1-Q)*J+Q*$}function xN(J,$,Q,Z){return l$(J,$,1-Math.exp(-Q*Z))}function gN(J,$=1){return $-Math.abs(GY(J,$*2)-$)}function pN(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*(3-2*J)}function mN(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*J*(J*(J*6-15)+10)}function lN(J,$){return J+Math.floor(Math.random()*($-J+1))}function uN(J,$){return J+Math.random()*($-J)}function dN(J){return J*(0.5-Math.random())}function cN(J){if(J!==void 0)hX=J;let $=hX+=1831565813;return $=Math.imul($^$>>>15,$|1),$^=$+Math.imul($^$>>>7,$|61),(($^$>>>14)>>>0)/4294967296}function nN(J){return J*m$}function sN(J){return J*u7}function iN(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function oN(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function aN(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function rN(J,$,Q,Z,K){let{cos:W,sin:Y}=Math,X=W(Q/2),H=Y(Q/2),U=W(($+Z)/2),N=Y(($+Z)/2),F=W(($-Z)/2),G=Y(($-Z)/2),E=W((Z-$)/2),O=Y((Z-$)/2);switch(K){case"XYX":J.set(X*N,H*F,H*G,X*U);break;case"YZY":J.set(H*G,X*N,H*F,X*U);break;case"ZXZ":J.set(H*F,H*G,X*N,X*U);break;case"XZX":J.set(X*N,H*O,H*E,X*U);break;case"YXY":J.set(H*E,X*N,H*O,X*U);break;case"ZYZ":J.set(H*O,H*E,X*N,X*U);break;default:r0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+K)}}function R9(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function mJ(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var y9={DEG2RAD:m$,RAD2DEG:u7,generateUUID:J9,clamp:qJ,euclideanModulo:GY,mapLinear:bN,inverseLerp:hN,lerp:l$,damp:xN,pingpong:gN,smoothstep:pN,smootherstep:mN,randInt:lN,randFloat:uN,randFloatSpread:dN,seededRandom:cN,degToRad:nN,radToDeg:sN,isPowerOfTwo:iN,ceilPowerOfTwo:oN,floorPowerOfTwo:aN,setQuaternionFromProperEuler:rN,normalize:mJ,denormalize:R9};class L0{static{L0.prototype.isVector2=!0}constructor(J=0,$=0){this.x=J,this.y=$}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,$){return this.x=J,this.y=$,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let $=this.x,Q=this.y,Z=J.elements;return this.x=Z[0]*$+Z[3]*Q+Z[6],this.y=Z[1]*$+Z[4]*Q+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,$){return this.x=qJ(this.x,J.x,$.x),this.y=qJ(this.y,J.y,$.y),this}clampScalar(J,$){return this.x=qJ(this.x,J,$),this.y=qJ(this.y,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(qJ(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(qJ(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y;return $*$+Q*Q}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this}rotateAround(J,$){let Q=Math.cos($),Z=Math.sin($),K=this.x-J.x,W=this.y-J.y;return this.x=K*Q-W*Z+J.x,this.y=K*Z+W*Q+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class UJ{constructor(J=0,$=0,Q=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=$,this._z=Q,this._w=Z}static slerpFlat(J,$,Q,Z,K,W,Y){let X=Q[Z+0],H=Q[Z+1],U=Q[Z+2],N=Q[Z+3],F=K[W+0],G=K[W+1],E=K[W+2],O=K[W+3];if(N!==O||X!==F||H!==G||U!==E){let B=X*F+H*G+U*E+N*O;if(B<0)F=-F,G=-G,E=-E,O=-O,B=-B;let R=1-Y;if(B<0.9995){let q=Math.acos(B),M=Math.sin(q);R=Math.sin(R*q)/M,Y=Math.sin(Y*q)/M,X=X*R+F*Y,H=H*R+G*Y,U=U*R+E*Y,N=N*R+O*Y}else{X=X*R+F*Y,H=H*R+G*Y,U=U*R+E*Y,N=N*R+O*Y;let q=1/Math.sqrt(X*X+H*H+U*U+N*N);X*=q,H*=q,U*=q,N*=q}}J[$]=X,J[$+1]=H,J[$+2]=U,J[$+3]=N}static multiplyQuaternionsFlat(J,$,Q,Z,K,W){let Y=Q[Z],X=Q[Z+1],H=Q[Z+2],U=Q[Z+3],N=K[W],F=K[W+1],G=K[W+2],E=K[W+3];return J[$]=Y*E+U*N+X*G-H*F,J[$+1]=X*E+U*F+H*N-Y*G,J[$+2]=H*E+U*G+Y*F-X*N,J[$+3]=U*E-Y*N-X*F-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,$,Q,Z){return this._x=J,this._y=$,this._z=Q,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,$=!0){let{_x:Q,_y:Z,_z:K,_order:W}=J,Y=Math.cos,X=Math.sin,H=Y(Q/2),U=Y(Z/2),N=Y(K/2),F=X(Q/2),G=X(Z/2),E=X(K/2);switch(W){case"XYZ":this._x=F*U*N+H*G*E,this._y=H*G*N-F*U*E,this._z=H*U*E+F*G*N,this._w=H*U*N-F*G*E;break;case"YXZ":this._x=F*U*N+H*G*E,this._y=H*G*N-F*U*E,this._z=H*U*E-F*G*N,this._w=H*U*N+F*G*E;break;case"ZXY":this._x=F*U*N-H*G*E,this._y=H*G*N+F*U*E,this._z=H*U*E+F*G*N,this._w=H*U*N-F*G*E;break;case"ZYX":this._x=F*U*N-H*G*E,this._y=H*G*N+F*U*E,this._z=H*U*E-F*G*N,this._w=H*U*N+F*G*E;break;case"YZX":this._x=F*U*N+H*G*E,this._y=H*G*N+F*U*E,this._z=H*U*E-F*G*N,this._w=H*U*N-F*G*E;break;case"XZY":this._x=F*U*N-H*G*E,this._y=H*G*N-F*U*E,this._z=H*U*E+F*G*N,this._w=H*U*N+F*G*E;break;default:r0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if($===!0)this._onChangeCallback();return this}setFromAxisAngle(J,$){let Q=$/2,Z=Math.sin(Q);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix(J){let $=J.elements,Q=$[0],Z=$[4],K=$[8],W=$[1],Y=$[5],X=$[9],H=$[2],U=$[6],N=$[10],F=Q+Y+N;if(F>0){let G=0.5/Math.sqrt(F+1);this._w=0.25/G,this._x=(U-X)*G,this._y=(K-H)*G,this._z=(W-Z)*G}else if(Q>Y&&Q>N){let G=2*Math.sqrt(1+Q-Y-N);this._w=(U-X)/G,this._x=0.25*G,this._y=(Z+W)/G,this._z=(K+H)/G}else if(Y>N){let G=2*Math.sqrt(1+Y-Q-N);this._w=(K-H)/G,this._x=(Z+W)/G,this._y=0.25*G,this._z=(X+U)/G}else{let G=2*Math.sqrt(1+N-Q-Y);this._w=(W-Z)/G,this._x=(K+H)/G,this._y=(X+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,$){let Q=J.dot($)+1;if(Q<0.00000001)if(Q=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Q;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Q;else this._x=J.y*$.z-J.z*$.y,this._y=J.z*$.x-J.x*$.z,this._z=J.x*$.y-J.y*$.x,this._w=Q;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(qJ(this.dot(J),-1,1)))}rotateTowards(J,$){let Q=this.angleTo(J);if(Q===0)return this;let Z=Math.min(1,$/Q);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,$){let{_x:Q,_y:Z,_z:K,_w:W}=J,Y=$._x,X=$._y,H=$._z,U=$._w;return this._x=Q*U+W*Y+Z*H-K*X,this._y=Z*U+W*X+K*Y-Q*H,this._z=K*U+W*H+Q*X-Z*Y,this._w=W*U-Q*Y-Z*X-K*H,this._onChangeCallback(),this}slerp(J,$){let{_x:Q,_y:Z,_z:K,_w:W}=J,Y=this.dot(J);if(Y<0)Q=-Q,Z=-Z,K=-K,W=-W,Y=-Y;let X=1-$;if(Y<0.9995){let H=Math.acos(Y),U=Math.sin(H);X=Math.sin(X*H)/U,$=Math.sin($*H)/U,this._x=this._x*X+Q*$,this._y=this._y*X+Z*$,this._z=this._z*X+K*$,this._w=this._w*X+W*$,this._onChangeCallback()}else this._x=this._x*X+Q*$,this._y=this._y*X+Z*$,this._z=this._z*X+K*$,this._w=this._w*X+W*$,this.normalize();return this}slerpQuaternions(J,$,Q){return this.copy(J).slerp($,Q)}random(){let J=2*Math.PI*Math.random(),$=2*Math.PI*Math.random(),Q=Math.random(),Z=Math.sqrt(1-Q),K=Math.sqrt(Q);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin($),K*Math.cos($))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,$=0){return this._x=J[$],this._y=J[$+1],this._z=J[$+2],this._w=J[$+3],this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._w,J}fromBufferAttribute(J,$){return this._x=J.getX($),this._y=J.getY($),this._z=J.getZ($),this._w=J.getW($),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _{static{_.prototype.isVector3=!0}constructor(J=0,$=0,Q=0){this.x=J,this.y=$,this.z=Q}set(J,$,Q){if(Q===void 0)Q=this.z;return this.x=J,this.y=$,this.z=Q,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,$){return this.x=J.x*$.x,this.y=J.y*$.y,this.z=J.z*$.z,this}applyEuler(J){return this.applyQuaternion(xX.setFromEuler(J))}applyAxisAngle(J,$){return this.applyQuaternion(xX.setFromAxisAngle(J,$))}applyMatrix3(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements;return this.x=K[0]*$+K[3]*Q+K[6]*Z,this.y=K[1]*$+K[4]*Q+K[7]*Z,this.z=K[2]*$+K[5]*Q+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements,W=1/(K[3]*$+K[7]*Q+K[11]*Z+K[15]);return this.x=(K[0]*$+K[4]*Q+K[8]*Z+K[12])*W,this.y=(K[1]*$+K[5]*Q+K[9]*Z+K[13])*W,this.z=(K[2]*$+K[6]*Q+K[10]*Z+K[14])*W,this}applyQuaternion(J){let $=this.x,Q=this.y,Z=this.z,K=J.x,W=J.y,Y=J.z,X=J.w,H=2*(W*Z-Y*Q),U=2*(Y*$-K*Z),N=2*(K*Q-W*$);return this.x=$+X*H+W*N-Y*U,this.y=Q+X*U+Y*H-K*N,this.z=Z+X*N+K*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements;return this.x=K[0]*$+K[4]*Q+K[8]*Z,this.y=K[1]*$+K[5]*Q+K[9]*Z,this.z=K[2]*$+K[6]*Q+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,$){return this.x=qJ(this.x,J.x,$.x),this.y=qJ(this.y,J.y,$.y),this.z=qJ(this.z,J.z,$.z),this}clampScalar(J,$){return this.x=qJ(this.x,J,$),this.y=qJ(this.y,J,$),this.z=qJ(this.z,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(qJ(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,$){let{x:Q,y:Z,z:K}=J,W=$.x,Y=$.y,X=$.z;return this.x=Z*X-K*Y,this.y=K*W-Q*X,this.z=Q*Y-Z*W,this}projectOnVector(J){let $=J.lengthSq();if($===0)return this.set(0,0,0);let Q=J.dot(this)/$;return this.copy(J).multiplyScalar(Q)}projectOnPlane(J){return mK.copy(this).projectOnVector(J),this.sub(mK)}reflect(J){return this.sub(mK.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(qJ(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y,Z=this.z-J.z;return $*$+Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,$,Q){let Z=Math.sin($)*J;return this.x=Z*Math.sin(Q),this.y=Math.cos($)*J,this.z=Z*Math.cos(Q),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,$,Q){return this.x=J*Math.sin($),this.y=Q,this.z=J*Math.cos($),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(J){let $=this.setFromMatrixColumn(J,0).length(),Q=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=$,this.y=Q,this.z=Z,this}setFromMatrixColumn(J,$){return this.fromArray(J.elements,$*4)}setFromMatrix3Column(J,$){return this.fromArray(J.elements,$*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,$=Math.random()*2-1,Q=Math.sqrt(1-$*$);return this.x=Q*Math.cos(J),this.y=$,this.z=Q*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var mK=new _,xX=new UJ;class HJ{static{HJ.prototype.isMatrix3=!0}constructor(J,$,Q,Z,K,W,Y,X,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,K,W,Y,X,H)}set(J,$,Q,Z,K,W,Y,X,H){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=$,U[4]=K,U[5]=X,U[6]=Q,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],this}extractBasis(J,$,Q){return J.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let $=J.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,K=this.elements,W=Q[0],Y=Q[3],X=Q[6],H=Q[1],U=Q[4],N=Q[7],F=Q[2],G=Q[5],E=Q[8],O=Z[0],B=Z[3],R=Z[6],q=Z[1],M=Z[4],k=Z[7],V=Z[2],L=Z[5],P=Z[8];return K[0]=W*O+Y*q+X*V,K[3]=W*B+Y*M+X*L,K[6]=W*R+Y*k+X*P,K[1]=H*O+U*q+N*V,K[4]=H*B+U*M+N*L,K[7]=H*R+U*k+N*P,K[2]=F*O+G*q+E*V,K[5]=F*B+G*M+E*L,K[8]=F*R+G*k+E*P,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[3]*=J,$[6]*=J,$[1]*=J,$[4]*=J,$[7]*=J,$[2]*=J,$[5]*=J,$[8]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8];return $*W*U-$*Y*H-Q*K*U+Q*Y*X+Z*K*H-Z*W*X}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],N=U*W-Y*H,F=Y*X-U*K,G=H*K-W*X,E=$*N+Q*F+Z*G;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/E;return J[0]=N*O,J[1]=(Z*H-U*Q)*O,J[2]=(Y*Q-Z*W)*O,J[3]=F*O,J[4]=(U*$-Z*X)*O,J[5]=(Z*K-Y*$)*O,J[6]=G*O,J[7]=(Q*X-H*$)*O,J[8]=(W*$-Q*K)*O,this}transpose(){let J,$=this.elements;return J=$[1],$[1]=$[3],$[3]=J,J=$[2],$[2]=$[6],$[6]=J,J=$[5],$[5]=$[7],$[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let $=this.elements;return J[0]=$[0],J[1]=$[3],J[2]=$[6],J[3]=$[1],J[4]=$[4],J[5]=$[7],J[6]=$[2],J[7]=$[5],J[8]=$[8],this}setUvTransform(J,$,Q,Z,K,W,Y){let X=Math.cos(K),H=Math.sin(K);return this.set(Q*X,Q*H,-Q*(X*W+H*Y)+W+J,-Z*H,Z*X,-Z*(-H*W+X*Y)+Y+$,0,0,1),this}scale(J,$){return l7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lK.makeScale(J,$)),this}rotate(J){return l7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lK.makeRotation(-J)),this}translate(J,$){return l7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lK.makeTranslation(J,$)),this}makeTranslation(J,$){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,$,0,0,1);return this}makeRotation(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,Q,$,0,0,0,1),this}makeScale(J,$){return this.set(J,0,0,0,$,0,0,0,1),this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<9;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<9;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var lK=new HJ,gX=new HJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),pX=new HJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function tN(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,Y){if(this.enabled===!1||W===Y||!W||!Y)return K;if(this.spaces[W].transfer==="srgb")K.r=t9(K.r),K.g=t9(K.g),K.b=t9(K.b);if(this.spaces[W].primaries!==this.spaces[Y].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")K.r=u6(K.r),K.g=u6(K.g),K.b=u6(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,Y){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return l7("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return l7("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},$=[0.64,0.33,0.3,0.6,0.15,0.06],Q=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:$,whitePoint:Z,transfer:"linear",toXYZ:gX,fromXYZ:pX,luminanceCoefficients:Q,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:$,whitePoint:Z,transfer:"srgb",toXYZ:gX,fromXYZ:pX,luminanceCoefficients:Q,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var RJ=tN();function t9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function u6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var I6;class FY{static getDataURL(J,$="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(I6===void 0)I6=c6("canvas");I6.width=J.width,I6.height=J.height;let Z=I6.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);Q=I6}return Q.toDataURL($)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let $=c6("canvas");$.width=J.width,$.height=J.height;let Q=$.getContext("2d");Q.drawImage(J,0,0,J.width,J.height);let Z=Q.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=t9(K[W]/255)*255;return Q.putImageData(Z,0,0),$}else if(J.data){let $=J.data.slice(0);for(let Q=0;Q<$.length;Q++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[Q]=Math.floor(t9($[Q]/255)*255);else $[Q]=t9($[Q]);return{data:$,width:J.width,height:J.height}}else return r0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var eN=0;class WQ{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eN++}),this.uuid=J9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let $=this.data;if(typeof HTMLVideoElement<"u"&&$ instanceof HTMLVideoElement)J.set($.videoWidth,$.videoHeight,0);else if(typeof VideoFrame<"u"&&$ instanceof VideoFrame)J.set($.displayWidth,$.displayHeight,0);else if($!==null)J.set($.width,$.height,$.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Q={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,Y=Z.length;W<Y;W++)if(Z[W].isDataTexture)K.push(uK(Z[W].image));else K.push(uK(Z[W]))}else K=uK(Z);Q.url=K}if(!$)J.images[this.uuid]=Q;return Q}}function uK(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return FY.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return r0("Texture: Unable to serialize Texture."),{}}var JG=0,dK=new _;class $8 extends M9{constructor(J=$8.DEFAULT_IMAGE,$=$8.DEFAULT_MAPPING,Q=1001,Z=1001,K=1006,W=1008,Y=1023,X=1009,H=$8.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:JG++}),this.uuid=J9(),this.name="",this.source=new WQ(J),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=Q,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=H,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new L0(0,0),this.repeat=new L0(1,1),this.center=new L0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new HJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dK).x}get height(){return this.source.getSize(dK).y}get depth(){return this.source.getSize(dK).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let $ in J){let Q=J[$];if(Q===void 0){r0(`Texture.setValues(): parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){r0(`Texture.setValues(): property '${$}' does not exist.`);continue}if(Z&&Q&&(Z.isVector2&&Q.isVector2))Z.copy(Q);else if(Z&&Q&&(Z.isVector3&&Q.isVector3))Z.copy(Q);else if(Z&&Q&&(Z.isMatrix3&&Q.isMatrix3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Q={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!$)J.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}$8.DEFAULT_IMAGE=null;$8.DEFAULT_MAPPING=300;$8.DEFAULT_ANISOTROPY=1;class lJ{static{lJ.prototype.isVector4=!0}constructor(J=0,$=0,Q=0,Z=1){this.x=J,this.y=$,this.z=Q,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,$,Q,Z){return this.x=J,this.y=$,this.z=Q,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this.w=J.w+$.w,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this.w+=J.w*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this.w=J.w-$.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*$+W[4]*Q+W[8]*Z+W[12]*K,this.y=W[1]*$+W[5]*Q+W[9]*Z+W[13]*K,this.z=W[2]*$+W[6]*Q+W[10]*Z+W[14]*K,this.w=W[3]*$+W[7]*Q+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let $=Math.sqrt(1-J.w*J.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/$,this.y=J.y/$,this.z=J.z/$;return this}setAxisAngleFromRotationMatrix(J){let $,Q,Z,K,W=0.01,Y=0.1,X=J.elements,H=X[0],U=X[4],N=X[8],F=X[1],G=X[5],E=X[9],O=X[2],B=X[6],R=X[10];if(Math.abs(U-F)<0.01&&Math.abs(N-O)<0.01&&Math.abs(E-B)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(N+O)<0.1&&Math.abs(E+B)<0.1&&Math.abs(H+G+R-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let M=(H+1)/2,k=(G+1)/2,V=(R+1)/2,L=(U+F)/4,P=(N+O)/4,A=(E+B)/4;if(M>k&&M>V)if(M<0.01)Q=0,Z=0.707106781,K=0.707106781;else Q=Math.sqrt(M),Z=L/Q,K=P/Q;else if(k>V)if(k<0.01)Q=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(k),Q=L/Z,K=A/Z;else if(V<0.01)Q=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(V),Q=P/K,Z=A/K;return this.set(Q,Z,K,$),this}let q=Math.sqrt((B-E)*(B-E)+(N-O)*(N-O)+(F-U)*(F-U));if(Math.abs(q)<0.001)q=1;return this.x=(B-E)/q,this.y=(N-O)/q,this.z=(F-U)/q,this.w=Math.acos((H+G+R-1)/2),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this.w=$[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,$){return this.x=qJ(this.x,J.x,$.x),this.y=qJ(this.y,J.y,$.y),this.z=qJ(this.z,J.z,$.z),this.w=qJ(this.w,J.w,$.w),this}clampScalar(J,$){return this.x=qJ(this.x,J,$),this.y=qJ(this.y,J,$),this.z=qJ(this.z,J,$),this.w=qJ(this.w,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(qJ(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this.w+=(J.w-this.w)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this.w=J.w+($.w-J.w)*Q,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this.w=J[$+3],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J[$+3]=this.w,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this.w=J.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EY extends M9{constructor(J=1,$=1,Q={}){super();Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Q),this.isRenderTarget=!0,this.width=J,this.height=$,this.depth=Q.depth,this.scissor=new lJ(0,0,J,$),this.scissorTest=!1,this.viewport=new lJ(0,0,J,$),this.textures=[];let Z={width:J,height:$,depth:Q.depth},K=new $8(Z),W=Q.count;for(let Y=0;Y<W;Y++)this.textures[Y]=K.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions(Q),this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.resolveColorBuffer=Q.resolveColorBuffer,this.resolveDepthBuffer=Q.resolveDepthBuffer,this.resolveStencilBuffer=Q.resolveStencilBuffer,this.storeMultisampledColorBuffer=Q.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Q.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Q.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Q.depthTexture,this.samples=Q.samples,this.multiview=Q.multiview,this.useArrayDepthTexture=Q.useArrayDepthTexture}_setTextureOptions(J={}){let $={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)$.mapping=J.mapping;if(J.wrapS!==void 0)$.wrapS=J.wrapS;if(J.wrapT!==void 0)$.wrapT=J.wrapT;if(J.wrapR!==void 0)$.wrapR=J.wrapR;if(J.magFilter!==void 0)$.magFilter=J.magFilter;if(J.minFilter!==void 0)$.minFilter=J.minFilter;if(J.format!==void 0)$.format=J.format;if(J.type!==void 0)$.type=J.type;if(J.anisotropy!==void 0)$.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)$.colorSpace=J.colorSpace;if(J.flipY!==void 0)$.flipY=J.flipY;if(J.generateMipmaps!==void 0)$.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)$.internalFormat=J.internalFormat;for(let Q=0;Q<this.textures.length;Q++)this.textures[Q].setValues($)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,$,Q=1){if(this.width!==J||this.height!==$||this.depth!==Q){this.width=J,this.height=$,this.depth=Q;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=$,this.textures[Z].image.depth=Q,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,$),this.scissor.set(0,0,J,$)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let $=0,Q=J.textures.length;$<Q;$++){this.textures[$]=J.textures[$].clone(),this.textures[$].isRenderTargetTexture=!0,this.textures[$].renderTarget=this;let Z=Object.assign({},J.textures[$].image);this.textures[$].source=new WQ(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let $=J.depthTexture.clone();$.renderTarget=null,this.depthTexture=$}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z8 extends EY{constructor(J=1,$=1,Q={}){super(J,$,Q);this.isWebGLRenderTarget=!0}}class pZ extends $8{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class qY extends $8{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class QJ{static{QJ.prototype.isMatrix4=!0}constructor(J,$,Q,Z,K,W,Y,X,H,U,N,F,G,E,O,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,K,W,Y,X,H,U,N,F,G,E,O,B)}set(J,$,Q,Z,K,W,Y,X,H,U,N,F,G,E,O,B){let R=this.elements;return R[0]=J,R[4]=$,R[8]=Q,R[12]=Z,R[1]=K,R[5]=W,R[9]=Y,R[13]=X,R[2]=H,R[6]=U,R[10]=N,R[14]=F,R[3]=G,R[7]=E,R[11]=O,R[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new QJ().fromArray(this.elements)}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],$[9]=Q[9],$[10]=Q[10],$[11]=Q[11],$[12]=Q[12],$[13]=Q[13],$[14]=Q[14],$[15]=Q[15],this}copyPosition(J){let $=this.elements,Q=J.elements;return $[12]=Q[12],$[13]=Q[13],$[14]=Q[14],this}setFromMatrix3(J){let $=J.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(J,$,Q){if(this.determinantAffine()===0)return J.set(1,0,0),$.set(0,1,0),Q.set(0,0,1),this;return J.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis(J,$,Q){return this.set(J.x,$.x,Q.x,0,J.y,$.y,Q.y,0,J.z,$.z,Q.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let $=this.elements,Q=J.elements,Z=1/z6.setFromMatrixColumn(J,0).length(),K=1/z6.setFromMatrixColumn(J,1).length(),W=1/z6.setFromMatrixColumn(J,2).length();return $[0]=Q[0]*Z,$[1]=Q[1]*Z,$[2]=Q[2]*Z,$[3]=0,$[4]=Q[4]*K,$[5]=Q[5]*K,$[6]=Q[6]*K,$[7]=0,$[8]=Q[8]*W,$[9]=Q[9]*W,$[10]=Q[10]*W,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(J){let $=this.elements,Q=J.x,Z=J.y,K=J.z,W=Math.cos(Q),Y=Math.sin(Q),X=Math.cos(Z),H=Math.sin(Z),U=Math.cos(K),N=Math.sin(K);if(J.order==="XYZ"){let F=W*U,G=W*N,E=Y*U,O=Y*N;$[0]=X*U,$[4]=-X*N,$[8]=H,$[1]=G+E*H,$[5]=F-O*H,$[9]=-Y*X,$[2]=O-F*H,$[6]=E+G*H,$[10]=W*X}else if(J.order==="YXZ"){let F=X*U,G=X*N,E=H*U,O=H*N;$[0]=F+O*Y,$[4]=E*Y-G,$[8]=W*H,$[1]=W*N,$[5]=W*U,$[9]=-Y,$[2]=G*Y-E,$[6]=O+F*Y,$[10]=W*X}else if(J.order==="ZXY"){let F=X*U,G=X*N,E=H*U,O=H*N;$[0]=F-O*Y,$[4]=-W*N,$[8]=E+G*Y,$[1]=G+E*Y,$[5]=W*U,$[9]=O-F*Y,$[2]=-W*H,$[6]=Y,$[10]=W*X}else if(J.order==="ZYX"){let F=W*U,G=W*N,E=Y*U,O=Y*N;$[0]=X*U,$[4]=E*H-G,$[8]=F*H+O,$[1]=X*N,$[5]=O*H+F,$[9]=G*H-E,$[2]=-H,$[6]=Y*X,$[10]=W*X}else if(J.order==="YZX"){let F=W*X,G=W*H,E=Y*X,O=Y*H;$[0]=X*U,$[4]=O-F*N,$[8]=E*N+G,$[1]=N,$[5]=W*U,$[9]=-Y*U,$[2]=-H*U,$[6]=G*N+E,$[10]=F-O*N}else if(J.order==="XZY"){let F=W*X,G=W*H,E=Y*X,O=Y*H;$[0]=X*U,$[4]=-N,$[8]=H*U,$[1]=F*N+O,$[5]=W*U,$[9]=G*N-E,$[2]=E*N-G,$[6]=Y*U,$[10]=O*N+F}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(J){return this.compose($G,J,QG)}lookAt(J,$,Q){let Z=this.elements;if(m8.subVectors(J,$),m8.lengthSq()===0)m8.z=1;if(m8.normalize(),G7.crossVectors(Q,m8),G7.lengthSq()===0){if(Math.abs(Q.z)===1)m8.x+=0.0001;else m8.z+=0.0001;m8.normalize(),G7.crossVectors(Q,m8)}return G7.normalize(),sQ.crossVectors(m8,G7),Z[0]=G7.x,Z[4]=sQ.x,Z[8]=m8.x,Z[1]=G7.y,Z[5]=sQ.y,Z[9]=m8.y,Z[2]=G7.z,Z[6]=sQ.z,Z[10]=m8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,K=this.elements,W=Q[0],Y=Q[4],X=Q[8],H=Q[12],U=Q[1],N=Q[5],F=Q[9],G=Q[13],E=Q[2],O=Q[6],B=Q[10],R=Q[14],q=Q[3],M=Q[7],k=Q[11],V=Q[15],L=Z[0],P=Z[4],A=Z[8],D=Z[12],I=Z[1],d=Z[5],f=Z[9],n=Z[13],X0=Z[2],v=Z[6],y=Z[10],u=Z[14],b=Z[3],r=Z[7],m=Z[11],e=Z[15];return K[0]=W*L+Y*I+X*X0+H*b,K[4]=W*P+Y*d+X*v+H*r,K[8]=W*A+Y*f+X*y+H*m,K[12]=W*D+Y*n+X*u+H*e,K[1]=U*L+N*I+F*X0+G*b,K[5]=U*P+N*d+F*v+G*r,K[9]=U*A+N*f+F*y+G*m,K[13]=U*D+N*n+F*u+G*e,K[2]=E*L+O*I+B*X0+R*b,K[6]=E*P+O*d+B*v+R*r,K[10]=E*A+O*f+B*y+R*m,K[14]=E*D+O*n+B*u+R*e,K[3]=q*L+M*I+k*X0+V*b,K[7]=q*P+M*d+k*v+V*r,K[11]=q*A+M*f+k*y+V*m,K[15]=q*D+M*n+k*u+V*e,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[4]*=J,$[8]*=J,$[12]*=J,$[1]*=J,$[5]*=J,$[9]*=J,$[13]*=J,$[2]*=J,$[6]*=J,$[10]*=J,$[14]*=J,$[3]*=J,$[7]*=J,$[11]*=J,$[15]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],K=J[12],W=J[1],Y=J[5],X=J[9],H=J[13],U=J[2],N=J[6],F=J[10],G=J[14],E=J[3],O=J[7],B=J[11],R=J[15],q=X*G-H*F,M=Y*G-H*N,k=Y*F-X*N,V=W*G-H*U,L=W*F-X*U,P=W*N-Y*U;return $*(O*q-B*M+R*k)-Q*(E*q-B*V+R*L)+Z*(E*M-O*V+R*P)-K*(E*k-O*L+B*P)}determinantAffine(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],K=J[1],W=J[5],Y=J[9],X=J[2],H=J[6],U=J[10];return $*(W*U-Y*H)-Q*(K*U-Y*X)+Z*(K*H-W*X)}transpose(){let J=this.elements,$;return $=J[1],J[1]=J[4],J[4]=$,$=J[2],J[2]=J[8],J[8]=$,$=J[6],J[6]=J[9],J[9]=$,$=J[3],J[3]=J[12],J[12]=$,$=J[7],J[7]=J[13],J[13]=$,$=J[11],J[11]=J[14],J[14]=$,this}setPosition(J,$,Q){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=$,Z[14]=Q;return this}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],N=J[9],F=J[10],G=J[11],E=J[12],O=J[13],B=J[14],R=J[15],q=$*Y-Q*W,M=$*X-Z*W,k=$*H-K*W,V=Q*X-Z*Y,L=Q*H-K*Y,P=Z*H-K*X,A=U*O-N*E,D=U*B-F*E,I=U*R-G*E,d=N*B-F*O,f=N*R-G*O,n=F*R-G*B,X0=q*n-M*f+k*d+V*I-L*D+P*A;if(X0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/X0;return J[0]=(Y*n-X*f+H*d)*v,J[1]=(Z*f-Q*n-K*d)*v,J[2]=(O*P-B*L+R*V)*v,J[3]=(F*L-N*P-G*V)*v,J[4]=(X*I-W*n-H*D)*v,J[5]=($*n-Z*I+K*D)*v,J[6]=(B*k-E*P-R*M)*v,J[7]=(U*P-F*k+G*M)*v,J[8]=(W*f-Y*I+H*A)*v,J[9]=(Q*I-$*f-K*A)*v,J[10]=(E*L-O*k+R*q)*v,J[11]=(N*k-U*L-G*q)*v,J[12]=(Y*D-W*d-X*A)*v,J[13]=($*d-Q*D+Z*A)*v,J[14]=(O*M-E*V-B*q)*v,J[15]=(U*V-N*M+F*q)*v,this}scale(J){let $=this.elements,Q=J.x,Z=J.y,K=J.z;return $[0]*=Q,$[4]*=Z,$[8]*=K,$[1]*=Q,$[5]*=Z,$[9]*=K,$[2]*=Q,$[6]*=Z,$[10]*=K,$[3]*=Q,$[7]*=Z,$[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,$=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Q=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max($,Q,Z))}makeTranslation(J,$,Q){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,$,0,0,1,Q,0,0,0,1);return this}makeRotationX(J){let $=Math.cos(J),Q=Math.sin(J);return this.set(1,0,0,0,0,$,-Q,0,0,Q,$,0,0,0,0,1),this}makeRotationY(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,0,Q,0,0,1,0,0,-Q,0,$,0,0,0,0,1),this}makeRotationZ(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,0,Q,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,$){let Q=Math.cos($),Z=Math.sin($),K=1-Q,W=J.x,Y=J.y,X=J.z,H=K*W,U=K*Y;return this.set(H*W+Q,H*Y-Z*X,H*X+Z*Y,0,H*Y+Z*X,U*Y+Q,U*X-Z*W,0,H*X-Z*Y,U*X+Z*W,K*X*X+Q,0,0,0,0,1),this}makeScale(J,$,Q){return this.set(J,0,0,0,0,$,0,0,0,0,Q,0,0,0,0,1),this}makeShear(J,$,Q,Z,K,W){return this.set(1,Q,K,0,J,1,W,0,$,Z,1,0,0,0,0,1),this}compose(J,$,Q){let Z=this.elements,K=$._x,W=$._y,Y=$._z,X=$._w,H=K+K,U=W+W,N=Y+Y,F=K*H,G=K*U,E=K*N,O=W*U,B=W*N,R=Y*N,q=X*H,M=X*U,k=X*N,V=Q.x,L=Q.y,P=Q.z;return Z[0]=(1-(O+R))*V,Z[1]=(G+k)*V,Z[2]=(E-M)*V,Z[3]=0,Z[4]=(G-k)*L,Z[5]=(1-(F+R))*L,Z[6]=(B+q)*L,Z[7]=0,Z[8]=(E+M)*P,Z[9]=(B-q)*P,Z[10]=(1-(F+O))*P,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,$,Q){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return Q.set(1,1,1),$.identity(),this;let W=z6.set(Z[0],Z[1],Z[2]).length(),Y=z6.set(Z[4],Z[5],Z[6]).length(),X=z6.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;E9.copy(this);let H=1/W,U=1/Y,N=1/X;return E9.elements[0]*=H,E9.elements[1]*=H,E9.elements[2]*=H,E9.elements[4]*=U,E9.elements[5]*=U,E9.elements[6]*=U,E9.elements[8]*=N,E9.elements[9]*=N,E9.elements[10]*=N,$.setFromRotationMatrix(E9),Q.x=W,Q.y=Y,Q.z=X,this}makePerspective(J,$,Q,Z,K,W,Y=2000,X=!1){let H=this.elements,U=2*K/($-J),N=2*K/(Q-Z),F=($+J)/($-J),G=(Q+Z)/(Q-Z),E,O;if(X)E=K/(W-K),O=W*K/(W-K);else if(Y===2000)E=-(W+K)/(W-K),O=-2*W*K/(W-K);else if(Y===2001)E=-W/(W-K),O=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=F,H[12]=0,H[1]=0,H[5]=N,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=E,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,$,Q,Z,K,W,Y=2000,X=!1){let H=this.elements,U=2/($-J),N=2/(Q-Z),F=-($+J)/($-J),G=-(Q+Z)/(Q-Z),E,O;if(X)E=1/(W-K),O=W/(W-K);else if(Y===2000)E=-2/(W-K),O=-(W+K)/(W-K);else if(Y===2001)E=-1/(W-K),O=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=0,H[12]=F,H[1]=0,H[5]=N,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=E,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<16;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<16;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J[$+9]=Q[9],J[$+10]=Q[10],J[$+11]=Q[11],J[$+12]=Q[12],J[$+13]=Q[13],J[$+14]=Q[14],J[$+15]=Q[15],J}}var z6=new _,E9=new QJ,$G=new _(0,0,0),QG=new _(1,1,1),G7=new _,sQ=new _,m8=new _,mX=new QJ,lX=new UJ;class L9{constructor(J=0,$=0,Q=0,Z=L9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=$,this._z=Q,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,$,Q,Z=this._order){return this._x=J,this._y=$,this._z=Q,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,$=this._order,Q=!0){let Z=J.elements,K=Z[0],W=Z[4],Y=Z[8],X=Z[1],H=Z[5],U=Z[9],N=Z[2],F=Z[6],G=Z[10];switch($){case"XYZ":if(this._y=Math.asin(qJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-qJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,G),this._z=Math.atan2(X,H);else this._y=Math.atan2(-N,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(qJ(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(X,K);break;case"ZYX":if(this._y=Math.asin(-qJ(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(F,G),this._z=Math.atan2(X,K);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(qJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-N,K);else this._x=0,this._y=Math.atan2(Y,G);break;case"XZY":if(this._z=Math.asin(-qJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,H),this._y=Math.atan2(Y,K);else this._x=Math.atan2(-U,G),this._y=0;break;default:r0("Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,Q===!0)this._onChangeCallback();return this}setFromQuaternion(J,$,Q){return mX.makeRotationFromQuaternion(J),this.setFromRotationMatrix(mX,$,Q)}setFromVector3(J,$=this._order){return this.set(J.x,J.y,J.z,$)}reorder(J){return lX.setFromEuler(this),this.setFromQuaternion(lX,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}L9.DEFAULT_ORDER="XYZ";class mZ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var ZG=0,uX=new _,A6=new UJ,n9=new QJ,iQ=new _,_$=new _,KG=new _,WG=new UJ,dX=new _(1,0,0),cX=new _(0,1,0),nX=new _(0,0,1),sX={type:"added"},YG={type:"removed"},T6={type:"childadded",child:null},cK={type:"childremoved",child:null};class SJ extends M9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZG++}),this.uuid=J9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=SJ.DEFAULT_UP.clone();let J=new _,$=new L9,Q=new UJ,Z=new _(1,1,1);function K(){Q.setFromEuler($,!1)}function W(){$.setFromQuaternion(Q,void 0,!1)}$._onChange(K),Q._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new QJ},normalMatrix:{value:new HJ}}),this.matrix=new QJ,this.matrixWorld=new QJ,this.matrixAutoUpdate=SJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=SJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mZ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,$){this.quaternion.setFromAxisAngle(J,$)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,$){return A6.setFromAxisAngle(J,$),this.quaternion.multiply(A6),this}rotateOnWorldAxis(J,$){return A6.setFromAxisAngle(J,$),this.quaternion.premultiply(A6),this}rotateX(J){return this.rotateOnAxis(dX,J)}rotateY(J){return this.rotateOnAxis(cX,J)}rotateZ(J){return this.rotateOnAxis(nX,J)}translateOnAxis(J,$){return uX.copy(J).applyQuaternion(this.quaternion),this.position.add(uX.multiplyScalar($)),this}translateX(J){return this.translateOnAxis(dX,J)}translateY(J){return this.translateOnAxis(cX,J)}translateZ(J){return this.translateOnAxis(nX,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(n9.copy(this.matrixWorld).invert())}lookAt(J,$,Q){if(J.isVector3)iQ.copy(J);else iQ.set(J,$,Q);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),_$.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)n9.lookAt(_$,iQ,this.up);else n9.lookAt(iQ,_$,this.up);if(this.quaternion.setFromRotationMatrix(n9),Z)n9.extractRotation(Z.matrixWorld),A6.setFromRotationMatrix(n9),this.quaternion.premultiply(A6.invert())}add(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(J===this)return ZJ("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(sX),T6.child=J,this.dispatchEvent(T6),T6.child=null;else ZJ("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let $=this.children.indexOf(J);if($!==-1)J.parent=null,this.children.splice($,1),J.dispatchEvent(YG),cK.child=J,this.dispatchEvent(cK),cK.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),n9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),n9.multiply(J.parent.matrixWorld);return J.applyMatrix4(n9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(sX),T6.child=J,this.dispatchEvent(T6),T6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,$){if(this[J]===$)return this;for(let Q=0,Z=this.children.length;Q<Z;Q++){let W=this.children[Q].getObjectByProperty(J,$);if(W!==void 0)return W}return}getObjectsByProperty(J,$,Q=[]){if(this[J]===$)Q.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,$,Q);return Q}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_$,J,KG),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_$,WG,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set($[8],$[9],$[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverseVisible(J)}traverseAncestors(J){let $=this.parent;if($!==null)J($),$.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:$,y:Q,z:Z}=J,K=this.matrix.elements;K[12]+=$-K[0]*$-K[4]*Q-K[8]*Z,K[13]+=Q-K[1]*$-K[5]*Q-K[9]*Z,K[14]+=Z-K[2]*$-K[6]*Q-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].updateMatrixWorld(J)}updateWorldMatrix(J,$,Q=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Q){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Q=!0}if($===!0){let K=this.children;for(let W=0,Y=K.length;W<Y;W++)K[W].updateWorldMatrix(!1,!0,Q)}}toJSON(J){let $=J===void 0||typeof J==="string",Q={};if($)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let H=0,U=X.length;H<U;H++){let N=X[H];K(J.shapes,N)}else K(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,H=this.material.length;X<H;X++)Y.push(K(J.materials,this.material[X]));Z.material=Y}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(K(J.animations,X))}}if($){let Y=W(J.geometries),X=W(J.materials),H=W(J.textures),U=W(J.images),N=W(J.shapes),F=W(J.skeletons),G=W(J.animations),E=W(J.nodes);if(Y.length>0)Q.geometries=Y;if(X.length>0)Q.materials=X;if(H.length>0)Q.textures=H;if(U.length>0)Q.images=U;if(N.length>0)Q.shapes=N;if(F.length>0)Q.skeletons=F;if(G.length>0)Q.animations=G;if(E.length>0)Q.nodes=E}return Q.object=Z,Q;function W(Y){let X=[];for(let H in Y){let U=Y[H];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,$=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),$===!0)for(let Q=0;Q<J.children.length;Q++){let Z=J.children[Q];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}SJ.DEFAULT_UP=new _(0,1,0);SJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;SJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class AJ extends SJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var XG={type:"move"};class YQ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new AJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new AJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new AJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let $=this._hand;if($)for(let Q of J.hand.values())this._getHandJoint($,Q)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,$,Q){let Z=null,K=null,W=null,Y=this._targetRay,X=this._grip,H=this._hand;if(J&&$.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let B=$.getJointPose(O,Q),R=this._getHandJoint(H,O);if(B!==null)R.matrix.fromArray(B.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=B.radius;R.visible=B!==null}let U=H.joints["index-finger-tip"],N=H.joints["thumb-tip"],F=U.position.distanceTo(N.position),G=0.02,E=0.005;if(H.inputState.pinching&&F>G+E)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&F<=G-E)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(K=$.getPose(J.gripSpace,Q),K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;if(X.eventsEnabled)X.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(Y!==null){if(Z=$.getPose(J.targetRaySpace,Q),Z===null&&K!==null)Z=K;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(XG)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,$){if(J.joints[$.jointName]===void 0){let Q=new AJ;Q.matrixAutoUpdate=!1,Q.visible=!1,J.joints[$.jointName]=Q,J.add(Q)}return J.joints[$.jointName]}}var IU={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},F7={h:0,s:0,l:0},oQ={h:0,s:0,l:0};function nK(J,$,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return J+($-J)*6*Q;if(Q<0.5)return $;if(Q<0.6666666666666666)return J+($-J)*6*(0.6666666666666666-Q);return J}class y0{constructor(J,$,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,$,Q)}set(J,$,Q){if($===void 0&&Q===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,$,Q);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,$="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,RJ.colorSpaceToWorking(this,$),this}setRGB(J,$,Q,Z=RJ.workingColorSpace){return this.r=J,this.g=$,this.b=Q,RJ.colorSpaceToWorking(this,Z),this}setHSL(J,$,Q,Z=RJ.workingColorSpace){if(J=GY(J,1),$=qJ($,0,1),Q=qJ(Q,0,1),$===0)this.r=this.g=this.b=Q;else{let K=Q<=0.5?Q*(1+$):Q+$-Q*$,W=2*Q-K;this.r=nK(W,K,J+0.3333333333333333),this.g=nK(W,K,J),this.b=nK(W,K,J-0.3333333333333333)}return RJ.colorSpaceToWorking(this,Z),this}setStyle(J,$="srgb"){function Q(K){if(K===void 0)return;if(parseFloat(K)<1)r0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],Y=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Q(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,$);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Q(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,$);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Q(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,$);break;default:r0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,$);else if(W===6)return this.setHex(parseInt(K,16),$);else r0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,$);return this}setColorName(J,$="srgb"){let Q=IU[J.toLowerCase()];if(Q!==void 0)this.setHex(Q,$);else r0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=t9(J.r),this.g=t9(J.g),this.b=t9(J.b),this}copyLinearToSRGB(J){return this.r=u6(J.r),this.g=u6(J.g),this.b=u6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return RJ.workingToColorSpace(I8.copy(this),J),Math.round(qJ(I8.r*255,0,255))*65536+Math.round(qJ(I8.g*255,0,255))*256+Math.round(qJ(I8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,$=RJ.workingColorSpace){RJ.workingToColorSpace(I8.copy(this),$);let{r:Q,g:Z,b:K}=I8,W=Math.max(Q,Z,K),Y=Math.min(Q,Z,K),X,H,U=(Y+W)/2;if(Y===W)X=0,H=0;else{let N=W-Y;switch(H=U<=0.5?N/(W+Y):N/(2-W-Y),W){case Q:X=(Z-K)/N+(Z<K?6:0);break;case Z:X=(K-Q)/N+2;break;case K:X=(Q-Z)/N+4;break}X/=6}return J.h=X,J.s=H,J.l=U,J}getRGB(J,$=RJ.workingColorSpace){return RJ.workingToColorSpace(I8.copy(this),$),J.r=I8.r,J.g=I8.g,J.b=I8.b,J}getStyle(J="srgb"){RJ.workingToColorSpace(I8.copy(this),J);let{r:$,g:Q,b:Z}=I8;if(J!=="srgb")return`color(${J} ${$.toFixed(3)} ${Q.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(Q*255)},${Math.round(Z*255)})`}offsetHSL(J,$,Q){return this.getHSL(F7),this.setHSL(F7.h+J,F7.s+$,F7.l+Q)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,$){return this.r=J.r+$.r,this.g=J.g+$.g,this.b=J.b+$.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,$){return this.r+=(J.r-this.r)*$,this.g+=(J.g-this.g)*$,this.b+=(J.b-this.b)*$,this}lerpColors(J,$,Q){return this.r=J.r+($.r-J.r)*Q,this.g=J.g+($.g-J.g)*Q,this.b=J.b+($.b-J.b)*Q,this}lerpHSL(J,$){this.getHSL(F7),J.getHSL(oQ);let Q=l$(F7.h,oQ.h,$),Z=l$(F7.s,oQ.s,$),K=l$(F7.l,oQ.l,$);return this.setHSL(Q,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let $=this.r,Q=this.g,Z=this.b,K=J.elements;return this.r=K[0]*$+K[3]*Q+K[6]*Z,this.g=K[1]*$+K[4]*Q+K[7]*Z,this.b=K[2]*$+K[5]*Q+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,$=0){return this.r=J[$],this.g=J[$+1],this.b=J[$+2],this}toArray(J=[],$=0){return J[$]=this.r,J[$+1]=this.g,J[$+2]=this.b,J}fromBufferAttribute(J,$){return this.r=J.getX($),this.g=J.getY($),this.b=J.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var I8=new y0;y0.NAMES=IU;class e7{constructor(J,$=0.00025){this.isFogExp2=!0,this.name="",this.color=new y0(J),this.density=$}clone(){return new e7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Q$ extends SJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new L9,this.environmentIntensity=1,this.environmentRotation=new L9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,$){if(super.copy(J,$),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let $=super.toJSON(J);if(this.fog!==null)$.object.fog=this.fog.toJSON();return $.object.backgroundBlurriness=this.backgroundBlurriness,$.object.backgroundIntensity=this.backgroundIntensity,$.object.backgroundRotation=this.backgroundRotation.toArray(),$.object.environmentIntensity=this.environmentIntensity,$.object.environmentRotation=this.environmentRotation.toArray(),$}}var q9=new _,s9=new _,sK=new _,i9=new _,_6=new _,w6=new _,iX=new _,iK=new _,oK=new _,aK=new _,rK=new lJ,tK=new lJ,eK=new lJ;class u8{constructor(J=new _,$=new _,Q=new _){this.a=J,this.b=$,this.c=Q}static getNormal(J,$,Q,Z){Z.subVectors(Q,$),q9.subVectors(J,$),Z.cross(q9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,$,Q,Z,K){q9.subVectors(Z,$),s9.subVectors(Q,$),sK.subVectors(J,$);let W=q9.dot(q9),Y=q9.dot(s9),X=q9.dot(sK),H=s9.dot(s9),U=s9.dot(sK),N=W*H-Y*Y;if(N===0)return K.set(0,0,0),null;let F=1/N,G=(H*X-Y*U)*F,E=(W*U-Y*X)*F;return K.set(1-G-E,E,G)}static containsPoint(J,$,Q,Z){if(this.getBarycoord(J,$,Q,Z,i9)===null)return!1;return i9.x>=0&&i9.y>=0&&i9.x+i9.y<=1}static getInterpolation(J,$,Q,Z,K,W,Y,X){if(this.getBarycoord(J,$,Q,Z,i9)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(K,i9.x),X.addScaledVector(W,i9.y),X.addScaledVector(Y,i9.z),X}static getInterpolatedAttribute(J,$,Q,Z,K,W){return rK.setScalar(0),tK.setScalar(0),eK.setScalar(0),rK.fromBufferAttribute(J,$),tK.fromBufferAttribute(J,Q),eK.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(rK,K.x),W.addScaledVector(tK,K.y),W.addScaledVector(eK,K.z),W}static isFrontFacing(J,$,Q,Z){return q9.subVectors(Q,$),s9.subVectors(J,$),q9.cross(s9).dot(Z)<0}set(J,$,Q){return this.a.copy(J),this.b.copy($),this.c.copy(Q),this}setFromPointsAndIndices(J,$,Q,Z){return this.a.copy(J[$]),this.b.copy(J[Q]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,$,Q,Z){return this.a.fromBufferAttribute(J,$),this.b.fromBufferAttribute(J,Q),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return q9.subVectors(this.c,this.b),s9.subVectors(this.a,this.b),q9.cross(s9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return u8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,$){return u8.getBarycoord(J,this.a,this.b,this.c,$)}getInterpolation(J,$,Q,Z,K){return u8.getInterpolation(J,this.a,this.b,this.c,$,Q,Z,K)}containsPoint(J){return u8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return u8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,$){let Q=this.a,Z=this.b,K=this.c,W,Y;_6.subVectors(Z,Q),w6.subVectors(K,Q),iK.subVectors(J,Q);let X=_6.dot(iK),H=w6.dot(iK);if(X<=0&&H<=0)return $.copy(Q);oK.subVectors(J,Z);let U=_6.dot(oK),N=w6.dot(oK);if(U>=0&&N<=U)return $.copy(Z);let F=X*N-U*H;if(F<=0&&X>=0&&U<=0)return W=X/(X-U),$.copy(Q).addScaledVector(_6,W);aK.subVectors(J,K);let G=_6.dot(aK),E=w6.dot(aK);if(E>=0&&G<=E)return $.copy(K);let O=G*H-X*E;if(O<=0&&H>=0&&E<=0)return Y=H/(H-E),$.copy(Q).addScaledVector(w6,Y);let B=U*E-G*N;if(B<=0&&N-U>=0&&G-E>=0)return iX.subVectors(K,Z),Y=(N-U)/(N-U+(G-E)),$.copy(Z).addScaledVector(iX,Y);let R=1/(B+O+F);return W=O*R,Y=F*R,$.copy(Q).addScaledVector(_6,W).addScaledVector(w6,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class M8{constructor(J=new _(1/0,1/0,1/0),$=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=$}set(J,$){return this.min.copy(J),this.max.copy($),this}setFromArray(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$+=3)this.expandByPoint(O9.fromArray(J,$));return this}setFromBufferAttribute(J){this.makeEmpty();for(let $=0,Q=J.count;$<Q;$++)this.expandByPoint(O9.fromBufferAttribute(J,$));return this}setFromPoints(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$++)this.expandByPoint(J[$]);return this}setFromCenterAndSize(J,$){let Q=O9.copy($).multiplyScalar(0.5);return this.min.copy(J).sub(Q),this.max.copy(J).add(Q),this}setFromObject(J,$=!1){return this.makeEmpty(),this.expandByObject(J,$)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,$=!1){J.updateWorldMatrix(!1,!1);let Q=J.geometry;if(Q!==void 0){let K=Q.getAttribute("position");if($===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,Y=K.count;W<Y;W++){if(J.isMesh===!0)J.getVertexPosition(W,O9);else O9.fromBufferAttribute(K,W);O9.applyMatrix4(J.matrixWorld),this.expandByPoint(O9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();aQ.copy(J.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();aQ.copy(Q.boundingBox)}aQ.applyMatrix4(J.matrixWorld),this.union(aQ)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],$);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,$){return $.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,O9),O9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let $,Q;if(J.normal.x>0)$=J.normal.x*this.min.x,Q=J.normal.x*this.max.x;else $=J.normal.x*this.max.x,Q=J.normal.x*this.min.x;if(J.normal.y>0)$+=J.normal.y*this.min.y,Q+=J.normal.y*this.max.y;else $+=J.normal.y*this.max.y,Q+=J.normal.y*this.min.y;if(J.normal.z>0)$+=J.normal.z*this.min.z,Q+=J.normal.z*this.max.z;else $+=J.normal.z*this.max.z,Q+=J.normal.z*this.min.z;return $<=-J.constant&&Q>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(w$),rQ.subVectors(this.max,w$),S6.subVectors(J.a,w$),j6.subVectors(J.b,w$),y6.subVectors(J.c,w$),E7.subVectors(j6,S6),q7.subVectors(y6,j6),x7.subVectors(S6,y6);let $=[0,-E7.z,E7.y,0,-q7.z,q7.y,0,-x7.z,x7.y,E7.z,0,-E7.x,q7.z,0,-q7.x,x7.z,0,-x7.x,-E7.y,E7.x,0,-q7.y,q7.x,0,-x7.y,x7.x,0];if(!JW($,S6,j6,y6,rQ))return!1;if($=[1,0,0,0,1,0,0,0,1],!JW($,S6,j6,y6,rQ))return!1;return tQ.crossVectors(E7,q7),$=[tQ.x,tQ.y,tQ.z],JW($,S6,j6,y6,rQ)}clampPoint(J,$){return $.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,O9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(O9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return o9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),o9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),o9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),o9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),o9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),o9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),o9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),o9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(o9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var o9=[new _,new _,new _,new _,new _,new _,new _,new _],O9=new _,aQ=new M8,S6=new _,j6=new _,y6=new _,E7=new _,q7=new _,x7=new _,w$=new _,rQ=new _,tQ=new _,g7=new _;function JW(J,$,Q,Z,K){for(let W=0,Y=J.length-3;W<=Y;W+=3){g7.fromArray(J,W);let X=K.x*Math.abs(g7.x)+K.y*Math.abs(g7.y)+K.z*Math.abs(g7.z),H=$.dot(g7),U=Q.dot(g7),N=Z.dot(g7);if(Math.max(-Math.max(H,U,N),Math.min(H,U,N))>X)return!1}return!0}var Y8=new _,eQ=new L0,HG=0;class tJ extends M9{constructor(J,$,Q=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HG++}),this.name="",this.array=J,this.itemSize=$,this.count=J!==void 0?J.length/$:0,this.normalized=Q,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,$,Q){J*=this.itemSize,Q*=$.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=$.array[Q+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let $=0,Q=this.count;$<Q;$++)eQ.fromBufferAttribute(this,$),eQ.applyMatrix3(J),this.setXY($,eQ.x,eQ.y);else if(this.itemSize===3)for(let $=0,Q=this.count;$<Q;$++)Y8.fromBufferAttribute(this,$),Y8.applyMatrix3(J),this.setXYZ($,Y8.x,Y8.y,Y8.z);return this}applyMatrix4(J){for(let $=0,Q=this.count;$<Q;$++)Y8.fromBufferAttribute(this,$),Y8.applyMatrix4(J),this.setXYZ($,Y8.x,Y8.y,Y8.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)Y8.fromBufferAttribute(this,$),Y8.applyNormalMatrix(J),this.setXYZ($,Y8.x,Y8.y,Y8.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)Y8.fromBufferAttribute(this,$),Y8.transformDirection(J),this.setXYZ($,Y8.x,Y8.y,Y8.z);return this}set(J,$=0){return this.array.set(J,$),this}getComponent(J,$){let Q=this.array[J*this.itemSize+$];if(this.normalized)Q=R9(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+$]=Q,this}getX(J){let $=this.array[J*this.itemSize];if(this.normalized)$=R9($,this.array);return $}setX(J,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize]=$,this}getY(J){let $=this.array[J*this.itemSize+1];if(this.normalized)$=R9($,this.array);return $}setY(J,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize+1]=$,this}getZ(J){let $=this.array[J*this.itemSize+2];if(this.normalized)$=R9($,this.array);return $}setZ(J,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize+2]=$,this}getW(J){let $=this.array[J*this.itemSize+3];if(this.normalized)$=R9($,this.array);return $}setW(J,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize+3]=$,this}setXY(J,$,Q){if(J*=this.itemSize,this.normalized)$=mJ($,this.array),Q=mJ(Q,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J*=this.itemSize,this.normalized)$=mJ($,this.array),Q=mJ(Q,this.array),Z=mJ(Z,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this}setXYZW(J,$,Q,Z,K){if(J*=this.itemSize,this.normalized)$=mJ($,this.array),Q=mJ(Q,this.array),Z=mJ(Z,this.array),K=mJ(K,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class lZ extends tJ{constructor(J,$,Q){super(new Uint16Array(J),$,Q)}}class uZ extends tJ{constructor(J,$,Q){super(new Uint32Array(J),$,Q)}}class XJ extends tJ{constructor(J,$,Q){super(new Float32Array(J),$,Q)}}var UG=new M8,S$=new _,$W=new _;class w8{constructor(J=new _,$=-1){this.isSphere=!0,this.center=J,this.radius=$}set(J,$){return this.center.copy(J),this.radius=$,this}setFromPoints(J,$){let Q=this.center;if($!==void 0)Q.copy($);else UG.setFromPoints(J).getCenter(Q);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,Q.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let $=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=$*$}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,$){let Q=this.center.distanceToSquared(J);if($.copy(J),Q>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;S$.subVectors(J,this.center);let $=S$.lengthSq();if($>this.radius*this.radius){let Q=Math.sqrt($),Z=(Q-this.radius)*0.5;this.center.addScaledVector(S$,Z/Q),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else $W.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(S$.copy(J.center).add($W)),this.expandByPoint(S$.copy(J.center).sub($W));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var NG=0,t8=new QJ,QW=new SJ,v6=new _,l8=new M8,j$=new M8,R8=new _;class bJ extends M9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NG++}),this.uuid=J9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((vN(J))?uZ:lZ)(J,1);else this.index=J;return this}setIndirect(J,$=0){return this.indirect=J,this.indirectOffset=$,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,$){return this.attributes[J]=$,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,$,Q=0){this.groups.push({start:J,count:$,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange(J,$){this.drawRange.start=J,this.drawRange.count=$}applyMatrix4(J){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(J),$.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let K=new HJ().getNormalMatrix(J);Q.applyNormalMatrix(K),Q.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return t8.makeRotationFromQuaternion(J),this.applyMatrix4(t8),this}rotateX(J){return t8.makeRotationX(J),this.applyMatrix4(t8),this}rotateY(J){return t8.makeRotationY(J),this.applyMatrix4(t8),this}rotateZ(J){return t8.makeRotationZ(J),this.applyMatrix4(t8),this}translate(J,$,Q){return t8.makeTranslation(J,$,Q),this.applyMatrix4(t8),this}scale(J,$,Q){return t8.makeScale(J,$,Q),this.applyMatrix4(t8),this}lookAt(J){return QW.lookAt(J),QW.updateMatrix(),this.applyMatrix4(QW.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(v6).negate(),this.translate(v6.x,v6.y,v6.z),this}setFromPoints(J){let $=this.getAttribute("position");if($===void 0){let Q=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];Q.push(W.x,W.y,W.z||0)}this.setAttribute("position",new XJ(Q,3))}else{let Q=Math.min(J.length,$.count);for(let Z=0;Z<Q;Z++){let K=J[Z];$.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>$.count)r0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");$.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new M8;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){ZJ("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),$)for(let Q=0,Z=$.length;Q<Z;Q++){let K=$[Q];if(l8.setFromBufferAttribute(K),this.morphTargetsRelative)R8.addVectors(this.boundingBox.min,l8.min),this.boundingBox.expandByPoint(R8),R8.addVectors(this.boundingBox.max,l8.max),this.boundingBox.expandByPoint(R8);else this.boundingBox.expandByPoint(l8.min),this.boundingBox.expandByPoint(l8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))ZJ('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new w8;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){ZJ("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(J){let Q=this.boundingSphere.center;if(l8.setFromBufferAttribute(J),$)for(let K=0,W=$.length;K<W;K++){let Y=$[K];if(j$.setFromBufferAttribute(Y),this.morphTargetsRelative)R8.addVectors(l8.min,j$.min),l8.expandByPoint(R8),R8.addVectors(l8.max,j$.max),l8.expandByPoint(R8);else l8.expandByPoint(j$.min),l8.expandByPoint(j$.max)}l8.getCenter(Q);let Z=0;for(let K=0,W=J.count;K<W;K++)R8.fromBufferAttribute(J,K),Z=Math.max(Z,Q.distanceToSquared(R8));if($)for(let K=0,W=$.length;K<W;K++){let Y=$[K],X=this.morphTargetsRelative;for(let H=0,U=Y.count;H<U;H++){if(R8.fromBufferAttribute(Y,H),X)v6.fromBufferAttribute(J,H),R8.add(v6);Z=Math.max(Z,Q.distanceToSquared(R8))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))ZJ('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,$=this.attributes;if(J===null||$.position===void 0||$.normal===void 0||$.uv===void 0){ZJ("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Q,normal:Z,uv:K}=$,W=this.getAttribute("tangent");if(W===void 0||W.count!==Q.count)W=new tJ(new Float32Array(4*Q.count),4),this.setAttribute("tangent",W);let Y=[],X=[];for(let A=0;A<Q.count;A++)Y[A]=new _,X[A]=new _;let H=new _,U=new _,N=new _,F=new L0,G=new L0,E=new L0,O=new _,B=new _;function R(A,D,I){H.fromBufferAttribute(Q,A),U.fromBufferAttribute(Q,D),N.fromBufferAttribute(Q,I),F.fromBufferAttribute(K,A),G.fromBufferAttribute(K,D),E.fromBufferAttribute(K,I),U.sub(H),N.sub(H),G.sub(F),E.sub(F);let d=1/(G.x*E.y-E.x*G.y);if(!isFinite(d))return;O.copy(U).multiplyScalar(E.y).addScaledVector(N,-G.y).multiplyScalar(d),B.copy(N).multiplyScalar(G.x).addScaledVector(U,-E.x).multiplyScalar(d),Y[A].add(O),Y[D].add(O),Y[I].add(O),X[A].add(B),X[D].add(B),X[I].add(B)}let q=this.groups;if(q.length===0)q=[{start:0,count:J.count}];for(let A=0,D=q.length;A<D;++A){let I=q[A],d=I.start,f=I.count;for(let n=d,X0=d+f;n<X0;n+=3)R(J.getX(n+0),J.getX(n+1),J.getX(n+2))}let M=new _,k=new _,V=new _,L=new _;function P(A){V.fromBufferAttribute(Z,A),L.copy(V);let D=Y[A];M.copy(D),M.sub(V.multiplyScalar(V.dot(D))).normalize(),k.crossVectors(L,D);let d=k.dot(X[A])<0?-1:1;W.setXYZW(A,M.x,M.y,M.z,d)}for(let A=0,D=q.length;A<D;++A){let I=q[A],d=I.start,f=I.count;for(let n=d,X0=d+f;n<X0;n+=3)P(J.getX(n+0)),P(J.getX(n+1)),P(J.getX(n+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,$=this.getAttribute("position");if($!==void 0){let Q=this.getAttribute("normal");if(Q===void 0||Q.count!==$.count)Q=new tJ(new Float32Array($.count*3),3),this.setAttribute("normal",Q);else for(let F=0,G=Q.count;F<G;F++)Q.setXYZ(F,0,0,0);let Z=new _,K=new _,W=new _,Y=new _,X=new _,H=new _,U=new _,N=new _;if(J)for(let F=0,G=J.count;F<G;F+=3){let E=J.getX(F+0),O=J.getX(F+1),B=J.getX(F+2);Z.fromBufferAttribute($,E),K.fromBufferAttribute($,O),W.fromBufferAttribute($,B),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),Y.fromBufferAttribute(Q,E),X.fromBufferAttribute(Q,O),H.fromBufferAttribute(Q,B),Y.add(U),X.add(U),H.add(U),Q.setXYZ(E,Y.x,Y.y,Y.z),Q.setXYZ(O,X.x,X.y,X.z),Q.setXYZ(B,H.x,H.y,H.z)}else for(let F=0,G=$.count;F<G;F+=3)Z.fromBufferAttribute($,F+0),K.fromBufferAttribute($,F+1),W.fromBufferAttribute($,F+2),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),Q.setXYZ(F+0,U.x,U.y,U.z),Q.setXYZ(F+1,U.x,U.y,U.z),Q.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let $=0,Q=J.count;$<Q;$++)R8.fromBufferAttribute(J,$),R8.normalize(),J.setXYZ($,R8.x,R8.y,R8.z)}toNonIndexed(){function J(Y,X){let{array:H,itemSize:U,normalized:N}=Y,F=new H.constructor(X.length*U),G=0,E=0;for(let O=0,B=X.length;O<B;O++){if(Y.isInterleavedBufferAttribute)G=X[O]*Y.data.stride+Y.offset;else G=X[O]*U;for(let R=0;R<U;R++)F[E++]=H[G++]}return new tJ(F,U,N)}if(this.index===null)return r0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new bJ,Q=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],H=J(X,Q);$.setAttribute(Y,H)}let K=this.morphAttributes;for(let Y in K){let X=[],H=K[Y];for(let U=0,N=H.length;U<N;U++){let F=H[U],G=J(F,Q);X.push(G)}$.morphAttributes[Y]=X}$.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let Y=0,X=W.length;Y<X;Y++){let H=W[Y];$.addGroup(H.start,H.count,H.materialIndex)}return $}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let X=this.parameters;for(let H in X)if(X[H]!==void 0)J[H]=X[H];return J}J.data={attributes:{}};let $=this.index;if($!==null)J.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let Q=this.attributes;for(let X in Q){let H=Q[X];J.data.attributes[X]=H.toJSON(J.data)}let Z={},K=!1;for(let X in this.morphAttributes){let H=this.morphAttributes[X],U=[];for(let N=0,F=H.length;N<F;N++){let G=H[N];U.push(G.toJSON(J.data))}if(U.length>0)Z[X]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=J.name;let Q=J.index;if(Q!==null)this.setIndex(Q.clone());let Z=J.attributes;for(let H in Z){let U=Z[H];this.setAttribute(H,U.clone($))}let K=J.morphAttributes;for(let H in K){let U=[],N=K[H];for(let F=0,G=N.length;F<G;F++)U.push(N[F].clone($));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let N=W[H];this.addGroup(N.start,N.count,N.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z${constructor(J,$){this.isInterleavedBuffer=!0,this.array=J,this.stride=$,this.count=J!==void 0?J.length/$:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=J9()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,$,Q){J*=this.stride,Q*=$.stride;for(let Z=0,K=this.stride;Z<K;Z++)this.array[J+Z]=$.array[Q+Z];return this}set(J,$=0){return this.array.set(J,$),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=J9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let $=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Q=new this.constructor($,this.stride);return Q.setUsage(this.usage),Q}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=J9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let $={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return $.usage=this.usage,$}}var _8=new _;class L7{constructor(J,$,Q,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=$,this.offset=Q,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let $=0,Q=this.data.count;$<Q;$++)_8.fromBufferAttribute(this,$),_8.applyMatrix4(J),this.setXYZ($,_8.x,_8.y,_8.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)_8.fromBufferAttribute(this,$),_8.applyNormalMatrix(J),this.setXYZ($,_8.x,_8.y,_8.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)_8.fromBufferAttribute(this,$),_8.transformDirection(J),this.setXYZ($,_8.x,_8.y,_8.z);return this}getComponent(J,$){let Q=this.array[J*this.data.stride+this.offset+$];if(this.normalized)Q=R9(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=mJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+$]=Q,this}setX(J,$){if(this.normalized)$=mJ($,this.array);return this.data.array[J*this.data.stride+this.offset]=$,this}setY(J,$){if(this.normalized)$=mJ($,this.array);return this.data.array[J*this.data.stride+this.offset+1]=$,this}setZ(J,$){if(this.normalized)$=mJ($,this.array);return this.data.array[J*this.data.stride+this.offset+2]=$,this}setW(J,$){if(this.normalized)$=mJ($,this.array);return this.data.array[J*this.data.stride+this.offset+3]=$,this}getX(J){let $=this.data.array[J*this.data.stride+this.offset];if(this.normalized)$=R9($,this.array);return $}getY(J){let $=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)$=R9($,this.array);return $}getZ(J){let $=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)$=R9($,this.array);return $}getW(J){let $=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)$=R9($,this.array);return $}setXY(J,$,Q){if(J=J*this.data.stride+this.offset,this.normalized)$=mJ($,this.array),Q=mJ(Q,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)$=mJ($,this.array),Q=mJ(Q,this.array),Z=mJ(Z,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this}setXYZW(J,$,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)$=mJ($,this.array),Q=mJ(Q,this.array),Z=mJ(Z,this.array),K=mJ(K,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this.data.array[J+3]=K,this}clone(J){if(J===void 0){c$("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)$.push(this.data.array[Z+K])}return new tJ(new this.array.constructor($),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new L7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){c$("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)$.push(this.data.array[Z+K])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:$,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var ZW=new _,GG=new _,FG=new HJ;class e8{constructor(J=new _(1,0,0),$=0){this.isPlane=!0,this.normal=J,this.constant=$}set(J,$){return this.normal.copy(J),this.constant=$,this}setComponents(J,$,Q,Z){return this.normal.set(J,$,Q),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,$){return this.normal.copy(J),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(J,$,Q){let Z=ZW.subVectors(Q,$).cross(GG.subVectors(J,$)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,$){return $.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,$,Q=!0){let Z=J.delta(ZW),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return $.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if(Q===!0&&(W<0||W>1))return null;return $.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let $=this.distanceToPoint(J.start),Q=this.distanceToPoint(J.end);return $<0&&Q>0||Q<0&&$>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,$){let Q=$||FG.getNormalMatrix(J),Z=this.coplanarPoint(ZW).applyMatrix4(J),K=this.normal.applyMatrix3(Q).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var EG=0;class v8 extends M9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:EG++}),this.uuid=J9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new y0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let $ in J){let Q=J[$];if(Q===void 0){r0(`Material: parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){r0(`Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Q);else if(Z&&Z.isVector2&&(Q&&Q.isVector2)||Z&&Z.isEuler&&(Q&&Q.isEuler)||Z&&Z.isVector3&&(Q&&Q.isVector3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if($)J={textures:{},images:{}};let Q={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,Q.blending=this.blending,Q.side=this.side,Q.shadowSide=this.shadowSide,Q.vertexColors=this.vertexColors,Q.opacity=this.opacity,Q.transparent=this.transparent,Q.blendSrc=this.blendSrc,Q.blendDst=this.blendDst,Q.blendEquation=this.blendEquation,Q.blendSrcAlpha=this.blendSrcAlpha,Q.blendDstAlpha=this.blendDstAlpha,Q.blendEquationAlpha=this.blendEquationAlpha,Q.blendColor=this.blendColor.getHex(),Q.blendAlpha=this.blendAlpha,Q.depthFunc=this.depthFunc,Q.depthTest=this.depthTest,Q.depthWrite=this.depthWrite,Q.colorWrite=this.colorWrite,Q.clipIntersection=this.clipIntersection,Q.clipShadows=this.clipShadows,Q.stencilWriteMask=this.stencilWriteMask,Q.stencilFunc=this.stencilFunc,Q.stencilRef=this.stencilRef,Q.stencilFuncMask=this.stencilFuncMask,Q.stencilFail=this.stencilFail,Q.stencilZFail=this.stencilZFail,Q.stencilZPass=this.stencilZPass,Q.stencilWrite=this.stencilWrite,Q.polygonOffset=this.polygonOffset,Q.polygonOffsetFactor=this.polygonOffsetFactor,Q.polygonOffsetUnits=this.polygonOffsetUnits,Q.dithering=this.dithering,Q.alphaTest=this.alphaTest,Q.alphaHash=this.alphaHash,Q.alphaToCoverage=this.alphaToCoverage,Q.premultipliedAlpha=this.premultipliedAlpha,Q.forceSinglePass=this.forceSinglePass,Q.allowOverride=this.allowOverride,Q.visible=this.visible,Q.toneMapped=this.toneMapped,Q.name=this.name,this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Q.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Q.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Q.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Q.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON(J).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON(J).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON(J).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON(J).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON(J).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapRotation!==void 0)Q.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Q.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)Q.rotation=this.rotation;if(this.depthPacking!==void 0)Q.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Q.linewidth=this.linewidth;if(this.linecap!==void 0)Q.linecap=this.linecap;if(this.linejoin!==void 0)Q.linejoin=this.linejoin;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.wireframe!==void 0)Q.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Q.flatShading=this.flatShading;if(this.fog!==void 0)Q.fog=this.fog;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function Z(K){let W=[];for(let Y in K){let X=K[Y];delete X.metadata,W.push(X)}return W}if($){let K=Z(J.textures),W=Z(J.images);if(K.length>0)Q.textures=K;if(W.length>0)Q.images=W}return Q}fromJSON(J,$){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new y0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Q)=>new e8().fromJSON(Q));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=$[J.map]||null;if(J.matcap!==void 0)this.matcap=$[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=$[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=$[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=$[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Q=J.normalScale;if(Array.isArray(Q)===!1)Q=[Q,Q];this.normalScale=new L0().fromArray(Q)}if(J.displacementMap!==void 0)this.displacementMap=$[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=$[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=$[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=$[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=$[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=$[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=$[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=$[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=$[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=$[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=$[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=$[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=$[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=$[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new L0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=$[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=$[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=$[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=$[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=$[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=$[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=$[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let $=J.clippingPlanes,Q=null;if($!==null){let Z=$.length;Q=Array(Z);for(let K=0;K!==Z;++K)Q[K]=$[K].clone()}return this.clippingPlanes=Q,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class J6 extends v8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new y0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var f6,y$=new _,b6=new _,h6=new _,x6=new L0,v$=new L0,zU=new QJ,JZ=new _,f$=new _,$Z=new _,oX=new L0,KW=new L0,aX=new L0;class K$ extends SJ{constructor(J=new J6){super();if(this.isSprite=!0,this.type="Sprite",f6===void 0){f6=new bJ;let $=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),Q=new Z$($,5);f6.setIndex([0,1,2,0,2,3]),f6.setAttribute("position",new L7(Q,3,0,!1)),f6.setAttribute("uv",new L7(Q,2,3,!1))}this.geometry=f6,this.material=J,this.center=new L0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,$){if(J.camera===null)ZJ('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(b6.setFromMatrixScale(this.matrixWorld),zU.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),h6.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)b6.multiplyScalar(-h6.z);let Q=this.material.rotation,Z,K;if(Q!==0)K=Math.cos(Q),Z=Math.sin(Q);let W=this.center;QZ(JZ.set(-0.5,-0.5,0),h6,W,b6,Z,K),QZ(f$.set(0.5,-0.5,0),h6,W,b6,Z,K),QZ($Z.set(0.5,0.5,0),h6,W,b6,Z,K),oX.set(0,0),KW.set(1,0),aX.set(1,1);let Y=J.ray.intersectTriangle(JZ,f$,$Z,!1,y$);if(Y===null){if(QZ(f$.set(-0.5,0.5,0),h6,W,b6,Z,K),KW.set(0,1),Y=J.ray.intersectTriangle(JZ,$Z,f$,!1,y$),Y===null)return}let X=J.ray.origin.distanceTo(y$);if(X<J.near||X>J.far)return;$.push({distance:X,point:y$.clone(),uv:u8.getInterpolation(y$,JZ,f$,$Z,oX,KW,aX,new L0),face:null,object:this})}copy(J,$){if(super.copy(J,$),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function QZ(J,$,Q,Z,K,W){if(x6.subVectors(J,Q).addScalar(0.5).multiply(Z),K!==void 0)v$.x=W*x6.x-K*x6.y,v$.y=K*x6.x+W*x6.y;else v$.copy(x6);J.copy($),J.x+=v$.x,J.y+=v$.y,J.applyMatrix4(zU)}var a9=new _,WW=new _,ZZ=new _,KZ=new _;class P7{constructor(J=new _,$=new _(0,0,-1)){this.origin=J,this.direction=$}set(J,$){return this.origin.copy(J),this.direction.copy($),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,$){return $.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,a9)),this}closestPointToPoint(J,$){$.subVectors(J,this.origin);let Q=$.dot(this.direction);if(Q<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let $=a9.subVectors(J,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(J);return a9.copy(this.origin).addScaledVector(this.direction,$),a9.distanceToSquared(J)}distanceSqToSegment(J,$,Q,Z){WW.copy(J).add($).multiplyScalar(0.5),ZZ.copy($).sub(J).normalize(),KZ.copy(this.origin).sub(WW);let K=J.distanceTo($)*0.5,W=-this.direction.dot(ZZ),Y=KZ.dot(this.direction),X=-KZ.dot(ZZ),H=KZ.lengthSq(),U=Math.abs(1-W*W),N,F,G,E;if(U>0)if(N=W*X-Y,F=W*Y-X,E=K*U,N>=0)if(F>=-E)if(F<=E){let O=1/U;N*=O,F*=O,G=N*(N+W*F+2*Y)+F*(W*N+F+2*X)+H}else F=K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;else F=-K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;else if(F<=-E)N=Math.max(0,-(-W*K+Y)),F=N>0?-K:Math.min(Math.max(-K,-X),K),G=-N*N+F*(F+2*X)+H;else if(F<=E)N=0,F=Math.min(Math.max(-K,-X),K),G=F*(F+2*X)+H;else N=Math.max(0,-(W*K+Y)),F=N>0?K:Math.min(Math.max(-K,-X),K),G=-N*N+F*(F+2*X)+H;else F=W>0?-K:K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;if(Q)Q.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(WW).addScaledVector(ZZ,F);return G}intersectSphere(J,$){if(J.radius<0)return null;a9.subVectors(J.center,this.origin);let Q=a9.dot(this.direction),Z=a9.dot(a9)-Q*Q,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),Y=Q-W,X=Q+W;if(X<0)return null;if(Y<0)return this.at(X,$);return this.at(Y,$)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let $=J.normal.dot(this.direction);if($===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot(J.normal)+J.constant)/$;return Q>=0?Q:null}intersectPlane(J,$){let Q=this.distanceToPlane(J);if(Q===null)return null;return this.at(Q,$)}intersectsPlane(J){let $=J.distanceToPoint(this.origin);if($===0)return!0;if(J.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(J,$){let Q,Z,K,W,Y,X,H=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,F=this.origin;if(H>=0)Q=(J.min.x-F.x)*H,Z=(J.max.x-F.x)*H;else Q=(J.max.x-F.x)*H,Z=(J.min.x-F.x)*H;if(U>=0)K=(J.min.y-F.y)*U,W=(J.max.y-F.y)*U;else K=(J.max.y-F.y)*U,W=(J.min.y-F.y)*U;if(Q>W||K>Z)return null;if(K>Q||isNaN(Q))Q=K;if(W<Z||isNaN(Z))Z=W;if(N>=0)Y=(J.min.z-F.z)*N,X=(J.max.z-F.z)*N;else Y=(J.max.z-F.z)*N,X=(J.min.z-F.z)*N;if(Q>X||Y>Z)return null;if(Y>Q||Q!==Q)Q=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at(Q>=0?Q:Z,$)}intersectsBox(J){return this.intersectBox(J,a9)!==null}intersectTriangle(J,$,Q,Z,K){let W=this.origin,Y=this.direction,X=Y.x,H=Y.y,U=Y.z,N=J.x-W.x,F=J.y-W.y,G=J.z-W.z,E=$.x-W.x,O=$.y-W.y,B=$.z-W.z,R=Q.x-W.x,q=Q.y-W.y,M=Q.z-W.z,k=Math.abs(X),V=Math.abs(H),L=Math.abs(U),P,A,D,I,d,f,n,X0,v,y,u,b;if(k>=V&&k>=L)if(D=X,f=N,v=E,b=R,X>=0)P=H,A=U,I=F,d=G,n=O,X0=B,y=q,u=M;else P=U,A=H,I=G,d=F,n=B,X0=O,y=M,u=q;else if(V>=L)if(D=H,f=F,v=O,b=q,H>=0)P=U,A=X,I=G,d=N,n=B,X0=E,y=M,u=R;else P=X,A=U,I=N,d=G,n=E,X0=B,y=R,u=M;else if(D=U,f=G,v=B,b=M,U>=0)P=X,A=H,I=N,d=F,n=E,X0=O,y=R,u=q;else P=H,A=X,I=F,d=N,n=O,X0=E,y=q,u=R;if(D===0)return null;let r=P/D,m=A/D,e=1/D,Y0=I-r*f,j=d-m*f,o=n-r*v,G0=X0-m*v,t=y-r*b,x=u-m*b,T=t*G0-x*o,h=Y0*x-j*t,l=o*j-G0*Y0;if(Z){if(T<0||h<0||l<0)return null}else if((T<0||h<0||l<0)&&(T>0||h>0||l>0))return null;let Z0=T+h+l;if(Z0===0)return null;let J0=e*(T*f+h*v+l*b);if(Z0>0?J0<0:J0>0)return null;return this.at(J0/Z0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xJ extends v8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new y0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new L9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var rX=new QJ,p7=new P7,WZ=new w8,tX=new _,YZ=new _,XZ=new _,HZ=new _,YW=new _,UZ=new _,eX=new _,NZ=new _;class I0 extends SJ{constructor(J=new bJ,$=new xJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,$){if(super.copy(J,$),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}getVertexPosition(J,$){let Q=this.geometry,Z=Q.attributes.position,K=Q.morphAttributes.position,W=Q.morphTargetsRelative;$.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(K&&Y){UZ.set(0,0,0);for(let X=0,H=K.length;X<H;X++){let U=Y[X],N=K[X];if(U===0)continue;if(YW.fromBufferAttribute(N,J),W)UZ.addScaledVector(YW,U);else UZ.addScaledVector(YW.sub($),U)}$.add(UZ)}return $}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(WZ.copy(Q.boundingSphere),WZ.applyMatrix4(K),p7.copy(J.ray).recast(J.near),WZ.containsPoint(p7.origin)===!1){if(p7.intersectSphere(WZ,tX)===null)return;if(p7.origin.distanceToSquared(tX)>(J.far-J.near)**2)return}if(rX.copy(K).invert(),p7.copy(J.ray).applyMatrix4(rX),Q.boundingBox!==null){if(p7.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections(J,$,p7)}_computeIntersections(J,$,Q){let Z,K=this.geometry,W=this.material,Y=K.index,X=K.attributes.position,H=K.attributes.uv,U=K.attributes.uv1,N=K.attributes.normal,F=K.groups,G=K.drawRange;if(Y!==null)if(Array.isArray(W))for(let E=0,O=F.length;E<O;E++){let B=F[E],R=W[B.materialIndex],q=Math.max(B.start,G.start),M=Math.min(Y.count,Math.min(B.start+B.count,G.start+G.count));for(let k=q,V=M;k<V;k+=3){let L=Y.getX(k),P=Y.getX(k+1),A=Y.getX(k+2);if(Z=GZ(this,R,J,Q,H,U,N,L,P,A),Z)Z.faceIndex=Math.floor(k/3),Z.face.materialIndex=B.materialIndex,$.push(Z)}}else{let E=Math.max(0,G.start),O=Math.min(Y.count,G.start+G.count);for(let B=E,R=O;B<R;B+=3){let q=Y.getX(B),M=Y.getX(B+1),k=Y.getX(B+2);if(Z=GZ(this,W,J,Q,H,U,N,q,M,k),Z)Z.faceIndex=Math.floor(B/3),$.push(Z)}}else if(X!==void 0)if(Array.isArray(W))for(let E=0,O=F.length;E<O;E++){let B=F[E],R=W[B.materialIndex],q=Math.max(B.start,G.start),M=Math.min(X.count,Math.min(B.start+B.count,G.start+G.count));for(let k=q,V=M;k<V;k+=3){let L=k,P=k+1,A=k+2;if(Z=GZ(this,R,J,Q,H,U,N,L,P,A),Z)Z.faceIndex=Math.floor(k/3),Z.face.materialIndex=B.materialIndex,$.push(Z)}}else{let E=Math.max(0,G.start),O=Math.min(X.count,G.start+G.count);for(let B=E,R=O;B<R;B+=3){let q=B,M=B+1,k=B+2;if(Z=GZ(this,W,J,Q,H,U,N,q,M,k),Z)Z.faceIndex=Math.floor(B/3),$.push(Z)}}}}function qG(J,$,Q,Z,K,W,Y,X){let H;if($.side===1)H=Z.intersectTriangle(Y,W,K,!0,X);else H=Z.intersectTriangle(K,W,Y,$.side===0,X);if(H===null)return null;NZ.copy(X),NZ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(NZ);if(U<Q.near||U>Q.far)return null;return{distance:U,point:NZ.clone(),object:J}}function GZ(J,$,Q,Z,K,W,Y,X,H,U){J.getVertexPosition(X,YZ),J.getVertexPosition(H,XZ),J.getVertexPosition(U,HZ);let N=qG(J,$,Q,Z,YZ,XZ,HZ,eX);if(N){let F=new _;if(u8.getBarycoord(eX,YZ,XZ,HZ,F),K)N.uv=u8.getInterpolatedAttribute(K,X,H,U,F,new L0);if(W)N.uv1=u8.getInterpolatedAttribute(W,X,H,U,F,new L0);if(Y){if(N.normal=u8.getInterpolatedAttribute(Y,X,H,U,F,new _),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let G={a:X,b:H,c:U,normal:new _,materialIndex:0};u8.getNormal(YZ,XZ,HZ,G.normal),N.face=G,N.barycoord=F}return N}var b$=new lJ,JH=new lJ,$H=new lJ,OG=new lJ,QH=new QJ,FZ=new _,XW=new w8,ZH=new QJ,HW=new P7;class dZ extends I0{constructor(J,$){super(J,$);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new QJ,this.bindMatrixInverse=new QJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new M8;this.boundingBox.makeEmpty();let $=J.getAttribute("position");for(let Q=0;Q<$.count;Q++)this.getVertexPosition(Q,FZ),this.boundingBox.expandByPoint(FZ)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new w8;this.boundingSphere.makeEmpty();let $=J.getAttribute("position");for(let Q=0;Q<$.count;Q++)this.getVertexPosition(Q,FZ),this.boundingSphere.expandByPoint(FZ)}copy(J,$){if(super.copy(J,$),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,$){let Q=this.material,Z=this.matrixWorld;if(Q===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(XW.copy(this.boundingSphere),XW.applyMatrix4(Z),J.ray.intersectsSphere(XW)===!1)return;if(ZH.copy(Z).invert(),HW.copy(J.ray).applyMatrix4(ZH),this.boundingBox!==null){if(HW.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,$,HW)}getVertexPosition(J,$){return super.getVertexPosition(J,$),this.applyBoneTransform(J,$),$}bind(J,$){if(this.skeleton=J,$===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),$=this.matrixWorld;this.bindMatrix.copy($),this.bindMatrixInverse.copy($).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new lJ,$=this.geometry.attributes.skinWeight;for(let Q=0,Z=$.count;Q<Z;Q++){J.fromBufferAttribute($,Q);let K=1/J.manhattanLength();if(K!==1/0)J.multiplyScalar(K);else J.set(1,0,0,0);$.setXYZW(Q,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else r0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,$){let Q=this.skeleton,Z=this.geometry;if(JH.fromBufferAttribute(Z.attributes.skinIndex,J),$H.fromBufferAttribute(Z.attributes.skinWeight,J),$.isVector4)b$.copy($),$.set(0,0,0,0);else b$.set(...$,1),$.set(0,0,0);b$.applyMatrix4(this.bindMatrix);for(let K=0;K<4;K++){let W=$H.getComponent(K);if(W!==0){let Y=JH.getComponent(K);QH.multiplyMatrices(Q.bones[Y].matrixWorld,Q.boneInverses[Y]),$.addScaledVector(OG.copy(b$).applyMatrix4(QH),W)}}if($.isVector4)$.w=b$.w;return $.applyMatrix4(this.bindMatrixInverse)}}class XQ extends SJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class $6 extends $8{constructor(J=null,$=1,Q=1,Z,K,W,Y,X,H=1003,U=1003,N,F){super(null,W,Y,X,H,U,Z,K,N,F);this.isDataTexture=!0,this.image={data:J,width:$,height:Q},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var KH=new QJ,RG=new QJ;class HQ{constructor(J=[],$=[]){this.uuid=J9(),this.bones=J.slice(0),this.boneInverses=$,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,$=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),$.length===0)this.calculateInverses();else if(J.length!==$.length){r0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Q=0,Z=this.bones.length;Q<Z;Q++)this.boneInverses.push(new QJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,$=this.bones.length;J<$;J++){let Q=new QJ;if(this.bones[J])Q.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push(Q)}}pose(){for(let J=0,$=this.bones.length;J<$;J++){let Q=this.bones[J];if(Q)Q.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,$=this.bones.length;J<$;J++){let Q=this.bones[J];if(Q){if(Q.parent&&Q.parent.isBone)Q.matrix.copy(Q.parent.matrixWorld).invert(),Q.matrix.multiply(Q.matrixWorld);else Q.matrix.copy(Q.matrixWorld);Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)}}}update(){let J=this.bones,$=this.boneInverses,Q=this.boneMatrices,Z=this.boneTexture;for(let K=0,W=J.length;K<W;K++){let Y=J[K]?J[K].matrixWorld:RG;KH.multiplyMatrices(Y,$[K]),KH.toArray(Q,K*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new HQ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let $=new Float32Array(J*J*4);$.set(this.boneMatrices);let Q=new $6($,J,J,1023,1015);return Q.needsUpdate=!0,this.boneMatrices=$,this.boneTexture=Q,this}getBoneByName(J){for(let $=0,Q=this.bones.length;$<Q;$++){let Z=this.bones[$];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,$){this.uuid=J.uuid;for(let Q=0,Z=J.bones.length;Q<Z;Q++){let K=J.bones[Q],W=$[K];if(W===void 0)r0("Skeleton: No bone found with UUID:",K),W=new XQ;this.bones.push(W),this.boneInverses.push(new QJ().fromArray(J.boneInverses[Q]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let $=this.bones,Q=this.boneInverses;for(let Z=0,K=$.length;Z<K;Z++){let W=$[Z];J.bones.push(W.uuid);let Y=Q[Z];J.boneInverses.push(Y.toArray())}return J}}class V7 extends tJ{constructor(J,$,Q,Z=1){super(J,$,Q);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var g6=new QJ,WH=new QJ,EZ=[],YH=new M8,LG=new QJ,h$=new I0,x$=new w8;class v9 extends I0{constructor(J,$,Q){super(J,$);this.isInstancedMesh=!0,this.instanceMatrix=new V7(new Float32Array(Q*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Q,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<Q;Z++)this.setMatrixAt(Z,LG)}computeBoundingBox(){let J=this.geometry,$=this.count;if(this.boundingBox===null)this.boundingBox=new M8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Q=0;Q<$;Q++)this.getMatrixAt(Q,g6),YH.copy(J.boundingBox).applyMatrix4(g6),this.boundingBox.union(YH)}computeBoundingSphere(){let J=this.geometry,$=this.count;if(this.boundingSphere===null)this.boundingSphere=new w8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Q=0;Q<$;Q++)this.getMatrixAt(Q,g6),x$.copy(J.boundingSphere).applyMatrix4(g6),this.boundingSphere.union(x$)}copy(J,$){if(super.copy(J,$),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,$){if(this.instanceColor===null)return $.setRGB(1,1,1);else return $.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,$){return $.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,$){let Q=$.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=Q.length+1,W=J*K+1;for(let Y=0;Y<Q.length;Y++)Q[Y]=Z[W+Y]}raycast(J,$){let Q=this.matrixWorld,Z=this.count;if(h$.geometry=this.geometry,h$.material=this.material,h$.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(x$.copy(this.boundingSphere),x$.applyMatrix4(Q),J.ray.intersectsSphere(x$)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,g6),WH.multiplyMatrices(Q,g6),h$.matrixWorld=WH,h$.raycast(J,EZ);for(let W=0,Y=EZ.length;W<Y;W++){let X=EZ[W];X.instanceId=K,X.object=this,$.push(X)}EZ.length=0}}setColorAt(J,$){if(this.instanceColor===null)this.instanceColor=new V7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return $.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,$){return $.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,$){let Q=$.morphTargetInfluences,Z=Q.length+1;if(this.morphTexture===null)this.morphTexture=new $6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let H=0;H<Q.length;H++)W+=Q[H];let Y=this.geometry.morphTargetsRelative?1:1-W,X=Z*J;return K[X]=Y,K.set(Q,X+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var m7=new w8,VG=new L0(0.5,0.5),qZ=new _;class Q6{constructor(J=new e8,$=new e8,Q=new e8,Z=new e8,K=new e8,W=new e8){this.planes=[J,$,Q,Z,K,W]}set(J,$,Q,Z,K,W){let Y=this.planes;return Y[0].copy(J),Y[1].copy($),Y[2].copy(Q),Y[3].copy(Z),Y[4].copy(K),Y[5].copy(W),this}copy(J){let $=this.planes;for(let Q=0;Q<6;Q++)$[Q].copy(J.planes[Q]);return this}setFromProjectionMatrix(J,$=2000,Q=!1){let Z=this.planes,K=J.elements,W=K[0],Y=K[1],X=K[2],H=K[3],U=K[4],N=K[5],F=K[6],G=K[7],E=K[8],O=K[9],B=K[10],R=K[11],q=K[12],M=K[13],k=K[14],V=K[15];if(Z[0].setComponents(H-W,G-U,R-E,V-q).normalize(),Z[1].setComponents(H+W,G+U,R+E,V+q).normalize(),Z[2].setComponents(H+Y,G+N,R+O,V+M).normalize(),Z[3].setComponents(H-Y,G-N,R-O,V-M).normalize(),Q)Z[4].setComponents(X,F,B,k).normalize(),Z[5].setComponents(H-X,G-F,R-B,V-k).normalize();else if(Z[4].setComponents(H-X,G-F,R-B,V-k).normalize(),$===2000)Z[5].setComponents(H+X,G+F,R+B,V+k).normalize();else if($===2001)Z[5].setComponents(X,F,B,k).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();m7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let $=J.geometry;if($.boundingSphere===null)$.computeBoundingSphere();m7.copy($.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(m7)}intersectsSprite(J){m7.center.set(0,0,0);let $=VG.distanceTo(J.center);return m7.radius=0.7071067811865476+$,m7.applyMatrix4(J.matrixWorld),this.intersectsSphere(m7)}intersectsSphere(J){let $=this.planes,Q=J.center,Z=-J.radius;for(let K=0;K<6;K++)if($[K].distanceToPoint(Q)<Z)return!1;return!0}intersectsBox(J){let $=this.planes;for(let Q=0;Q<6;Q++){let Z=$[Q];if(qZ.x=Z.normal.x>0?J.max.x:J.min.x,qZ.y=Z.normal.y>0?J.max.y:J.min.y,qZ.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(qZ)<0)return!1}return!0}containsPoint(J){let $=this.planes;for(let Q=0;Q<6;Q++)if($[Q].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class UQ extends v8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new y0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var PZ=new _,IZ=new _,XH=new QJ,g$=new P7,OZ=new w8,UW=new _,HH=new _;class W$ extends SJ{constructor(J=new bJ,$=new UQ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[0];for(let Z=1,K=$.count;Z<K;Z++)PZ.fromBufferAttribute($,Z-1),IZ.fromBufferAttribute($,Z),Q[Z]=Q[Z-1],Q[Z]+=PZ.distanceTo(IZ);J.setAttribute("lineDistance",new XJ(Q,1))}else r0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,K=J.params.Line.threshold,W=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(OZ.copy(Q.boundingSphere),OZ.applyMatrix4(Z),OZ.radius+=K,J.ray.intersectsSphere(OZ)===!1)return;XH.copy(Z).invert(),g$.copy(J.ray).applyMatrix4(XH);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,H=this.isLineSegments?2:1,U=Q.index,F=Q.attributes.position;if(U!==null){let G=Math.max(0,W.start),E=Math.min(U.count,W.start+W.count);for(let O=G,B=E-1;O<B;O+=H){let R=U.getX(O),q=U.getX(O+1),M=RZ(this,J,g$,X,R,q,O);if(M)$.push(M)}if(this.isLineLoop){let O=U.getX(E-1),B=U.getX(G),R=RZ(this,J,g$,X,O,B,E-1);if(R)$.push(R)}}else{let G=Math.max(0,W.start),E=Math.min(F.count,W.start+W.count);for(let O=G,B=E-1;O<B;O+=H){let R=RZ(this,J,g$,X,O,O+1,O);if(R)$.push(R)}if(this.isLineLoop){let O=RZ(this,J,g$,X,E-1,G,E-1);if(O)$.push(O)}}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function RZ(J,$,Q,Z,K,W,Y){let X=J.geometry.attributes.position;if(PZ.fromBufferAttribute(X,K),IZ.fromBufferAttribute(X,W),Q.distanceSqToSegment(PZ,IZ,UW,HH)>Z)return;UW.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(UW);if(U<$.near||U>$.far)return;return{distance:U,point:HH.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var UH=new _,NH=new _;class cZ extends W${constructor(J,$){super(J,$);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[];for(let Z=0,K=$.count;Z<K;Z+=2)UH.fromBufferAttribute($,Z),NH.fromBufferAttribute($,Z+1),Q[Z]=Z===0?0:Q[Z-1],Q[Z+1]=Q[Z]+UH.distanceTo(NH);J.setAttribute("lineDistance",new XJ(Q,1))}else r0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nZ extends W${constructor(J,$){super(J,$);this.isLineLoop=!0,this.type="LineLoop"}}class Z6 extends v8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new y0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var GH=new QJ,OW=new P7,LZ=new w8,VZ=new _;class Y$ extends SJ{constructor(J=new bJ,$=new Z6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,K=J.params.Points.threshold,W=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(LZ.copy(Q.boundingSphere),LZ.applyMatrix4(Z),LZ.radius+=K,J.ray.intersectsSphere(LZ)===!1)return;GH.copy(Z).invert(),OW.copy(J.ray).applyMatrix4(GH);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,H=Q.index,N=Q.attributes.position;if(H!==null){let F=Math.max(0,W.start),G=Math.min(H.count,W.start+W.count);for(let E=F,O=G;E<O;E++){let B=H.getX(E);VZ.fromBufferAttribute(N,B),FH(VZ,B,X,Z,J,$,this)}}else{let F=Math.max(0,W.start),G=Math.min(N.count,W.start+W.count);for(let E=F,O=G;E<O;E++)VZ.fromBufferAttribute(N,E),FH(VZ,E,X,Z,J,$,this)}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function FH(J,$,Q,Z,K,W,Y){let X=OW.distanceSqToPoint(J);if(X<Q){let H=new _;OW.closestPointToPoint(J,H),H.applyMatrix4(Z);let U=K.ray.origin.distanceTo(H);if(U<K.near||U>K.far)return;W.push({distance:U,distanceToRay:Math.sqrt(X),point:H,index:$,face:null,faceIndex:null,barycoord:null,object:Y})}}class sZ extends $8{constructor(J=[],$=301,Q,Z,K,W,Y,X,H,U){super(J,$,Q,Z,K,W,Y,X,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class c8 extends $8{constructor(J,$,Q,Z,K,W,Y,X,H){super(J,$,Q,Z,K,W,Y,X,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class K6 extends $8{constructor(J,$,Q=1014,Z,K,W,Y=1003,X=1003,H,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:$,depth:N};super(F,Z,K,W,Y,X,U,Q,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new WQ(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let $=super.toJSON(J);return $.compareFunction=this.compareFunction,$}}class OY extends K6{constructor(J,$=1014,Q=301,Z,K,W=1003,Y=1003,X,H=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,$,Q,Z,K,W,Y,X,H);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class iZ extends $8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class _J extends bJ{constructor(J=1,$=1,Q=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:$,depth:Q,widthSegments:Z,heightSegments:K,depthSegments:W};let Y=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let X=[],H=[],U=[],N=[],F=0,G=0;E("z","y","x",-1,-1,Q,$,J,W,K,0),E("z","y","x",1,-1,Q,$,-J,W,K,1),E("x","z","y",1,1,J,Q,$,Z,W,2),E("x","z","y",1,-1,J,Q,-$,Z,W,3),E("x","y","z",1,-1,J,$,Q,Z,K,4),E("x","y","z",-1,-1,J,$,-Q,Z,K,5),this.setIndex(X),this.setAttribute("position",new XJ(H,3)),this.setAttribute("normal",new XJ(U,3)),this.setAttribute("uv",new XJ(N,2));function E(O,B,R,q,M,k,V,L,P,A,D){let I=k/P,d=V/A,f=k/2,n=V/2,X0=L/2,v=P+1,y=A+1,u=0,b=0,r=new _;for(let m=0;m<y;m++){let e=m*d-n;for(let Y0=0;Y0<v;Y0++){let j=Y0*I-f;r[O]=j*q,r[B]=e*M,r[R]=X0,H.push(r.x,r.y,r.z),r[O]=0,r[B]=0,r[R]=L>0?1:-1,U.push(r.x,r.y,r.z),N.push(Y0/P),N.push(1-m/A),u+=1}}for(let m=0;m<A;m++)for(let e=0;e<P;e++){let Y0=F+e+v*m,j=F+e+v*(m+1),o=F+(e+1)+v*(m+1),G0=F+(e+1)+v*m;X.push(Y0,j,G0),X.push(j,o,G0),b+=6}Y.addGroup(G,b,D),G+=b,F+=u}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _J(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class J7 extends bJ{constructor(J=1,$=32,Q=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:$,thetaStart:Q,thetaLength:Z},$=Math.max(3,$);let K=[],W=[],Y=[],X=[],H=new _,U=new L0;W.push(0,0,0),Y.push(0,0,1),X.push(0.5,0.5);for(let N=0,F=3;N<=$;N++,F+=3){let G=Q+N/$*Z;H.x=J*Math.cos(G),H.y=J*Math.sin(G),W.push(H.x,H.y,H.z),Y.push(0,0,1),U.x=(W[F]/J+1)/2,U.y=(W[F+1]/J+1)/2,X.push(U.x,U.y)}for(let N=1;N<=$;N++)K.push(N,N+1,0);this.setIndex(K),this.setAttribute("position",new XJ(W,3)),this.setAttribute("normal",new XJ(Y,3)),this.setAttribute("uv",new XJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new J7(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class LJ extends bJ{constructor(J=1,$=1,Q=1,Z=32,K=1,W=!1,Y=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:$,height:Q,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:Y,thetaLength:X};let H=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],N=[],F=[],G=[],E=0,O=[],B=Q/2,R=0;if(q(),W===!1){if(J>0)M(!0);if($>0)M(!1)}this.setIndex(U),this.setAttribute("position",new XJ(N,3)),this.setAttribute("normal",new XJ(F,3)),this.setAttribute("uv",new XJ(G,2));function q(){let k=new _,V=new _,L=0,P=($-J)/Q;for(let A=0;A<=K;A++){let D=[],I=A/K,d=I*($-J)+J;for(let f=0;f<=Z;f++){let n=f/Z,X0=n*X+Y,v=Math.sin(X0),y=Math.cos(X0);V.x=d*v,V.y=-I*Q+B,V.z=d*y,N.push(V.x,V.y,V.z),k.set(v,P,y).normalize(),F.push(k.x,k.y,k.z),G.push(n,1-I),D.push(E++)}O.push(D)}for(let A=0;A<Z;A++)for(let D=0;D<K;D++){let I=O[D][A],d=O[D+1][A],f=O[D+1][A+1],n=O[D][A+1];if(J>0||D!==0)U.push(I,d,n),L+=3;if($>0||D!==K-1)U.push(d,f,n),L+=3}H.addGroup(R,L,0),R+=L}function M(k){let V=E,L=new L0,P=new _,A=0,D=k===!0?J:$,I=k===!0?1:-1;for(let f=1;f<=Z;f++)N.push(0,B*I,0),F.push(0,I,0),G.push(0.5,0.5),E++;let d=E;for(let f=0;f<=Z;f++){let X0=f/Z*X+Y,v=Math.cos(X0),y=Math.sin(X0);P.x=D*y,P.y=B*I,P.z=D*v,N.push(P.x,P.y,P.z),F.push(0,I,0),L.x=v*0.5+0.5,L.y=y*0.5*I+0.5,G.push(L.x,L.y),E++}for(let f=0;f<Z;f++){let n=V+f,X0=d+f;if(k===!0)U.push(X0,X0+1,n);else U.push(X0+1,X0,n);A+=3}H.addGroup(R,A,k===!0?1:2),R+=A}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new LJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class W6 extends LJ{constructor(J=1,$=1,Q=32,Z=1,K=!1,W=0,Y=Math.PI*2){super(0,J,$,Q,Z,K,W,Y);this.type="ConeGeometry",this.parameters={radius:J,height:$,radialSegments:Q,heightSegments:Z,openEnded:K,thetaStart:W,thetaLength:Y}}static fromJSON(J){return new W6(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class oZ extends bJ{constructor(J=[],$=[],Q=1,Z=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:$,radius:Q,detail:Z};let K=[],W=[];if(Y(Z),H(Q),U(),this.setAttribute("position",new XJ(K,3)),this.setAttribute("normal",new XJ(K.slice(),3)),this.setAttribute("uv",new XJ(W,2)),Z===0)this.computeVertexNormals();else this.normalizeNormals();function Y(q){let M=new _,k=new _,V=new _;for(let L=0;L<$.length;L+=3)G($[L+0],M),G($[L+1],k),G($[L+2],V),X(M,k,V,q)}function X(q,M,k,V){let L=V+1,P=[];for(let A=0;A<=L;A++){P[A]=[];let D=q.clone().lerp(k,A/L),I=M.clone().lerp(k,A/L),d=L-A;for(let f=0;f<=d;f++)if(f===0&&A===L)P[A][f]=D;else P[A][f]=D.clone().lerp(I,f/d)}for(let A=0;A<L;A++)for(let D=0;D<2*(L-A)-1;D++){let I=Math.floor(D/2);if(D%2===0)F(P[A][I+1]),F(P[A+1][I]),F(P[A][I]);else F(P[A][I+1]),F(P[A+1][I+1]),F(P[A+1][I])}}function H(q){let M=new _;for(let k=0;k<K.length;k+=3)M.x=K[k+0],M.y=K[k+1],M.z=K[k+2],M.normalize().multiplyScalar(q),K[k+0]=M.x,K[k+1]=M.y,K[k+2]=M.z}function U(){let q=new _;for(let M=0;M<K.length;M+=3){q.x=K[M+0],q.y=K[M+1],q.z=K[M+2];let k=B(q)/2/Math.PI+0.5,V=R(q)/Math.PI+0.5;W.push(k,1-V)}E(),N()}function N(){for(let q=0;q<W.length;q+=6){let M=W[q+0],k=W[q+2],V=W[q+4],L=Math.max(M,k,V),P=Math.min(M,k,V);if(L>0.9&&P<0.1){if(M<0.2)W[q+0]+=1;if(k<0.2)W[q+2]+=1;if(V<0.2)W[q+4]+=1}}}function F(q){K.push(q.x,q.y,q.z)}function G(q,M){let k=q*3;M.x=J[k+0],M.y=J[k+1],M.z=J[k+2]}function E(){let q=new _,M=new _,k=new _,V=new _,L=new L0,P=new L0,A=new L0;for(let D=0,I=0;D<K.length;D+=9,I+=6){q.set(K[D+0],K[D+1],K[D+2]),M.set(K[D+3],K[D+4],K[D+5]),k.set(K[D+6],K[D+7],K[D+8]),L.set(W[I+0],W[I+1]),P.set(W[I+2],W[I+3]),A.set(W[I+4],W[I+5]),V.copy(q).add(M).add(k).divideScalar(3);let d=B(V);O(L,I+0,q,d),O(P,I+2,M,d),O(A,I+4,k,d)}}function O(q,M,k,V){if(V<0&&q.x===1)W[M]=q.x-1;if(k.x===0&&k.z===0)W[M]=V/2/Math.PI+0.5}function B(q){return Math.atan2(q.z,-q.x)}function R(q){return Math.atan2(-q.y,Math.sqrt(q.x*q.x+q.z*q.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new oZ(J.vertices,J.indices,J.radius,J.detail)}}class Z9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){r0("Curve: .getPoint() not implemented.")}getPointAt(J,$){let Q=this.getUtoTmapping(J);return this.getPoint(Q,$)}getPoints(J=5){let $=[];for(let Q=0;Q<=J;Q++)$.push(this.getPoint(Q/J));return $}getSpacedPoints(J=5){let $=[];for(let Q=0;Q<=J;Q++)$.push(this.getPointAt(Q/J));return $}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let $=[],Q,Z=this.getPoint(0),K=0;$.push(0);for(let W=1;W<=J;W++)Q=this.getPoint(W/J),K+=Q.distanceTo(Z),$.push(K),Z=Q;return this.cacheArcLengths=$,$}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,$=null){let Q=this.getLengths(),Z=0,K=Q.length,W;if($)W=$;else W=J*Q[K-1];let Y=0,X=K-1,H;while(Y<=X)if(Z=Math.floor(Y+(X-Y)/2),H=Q[Z]-W,H<0)Y=Z+1;else if(H>0)X=Z-1;else{X=Z;break}if(Z=X,Q[Z]===W)return Z/(K-1);let U=Q[Z],F=Q[Z+1]-U,G=(W-U)/F;return(Z+G)/(K-1)}getTangent(J,$){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),Y=this.getPoint(K),X=$||(W.isVector2?new L0:new _);return X.copy(Y).sub(W).normalize(),X}getTangentAt(J,$){let Q=this.getUtoTmapping(J);return this.getTangent(Q,$)}computeFrenetFrames(J,$=!1){let Q=new _,Z=[],K=[],W=[],Y=new _,X=new QJ;for(let G=0;G<=J;G++){let E=G/J;Z[G]=this.getTangentAt(E,new _)}K[0]=new _,W[0]=new _;let H=Number.MAX_VALUE,U=Math.abs(Z[0].x),N=Math.abs(Z[0].y),F=Math.abs(Z[0].z);if(U<=H)H=U,Q.set(1,0,0);if(N<=H)H=N,Q.set(0,1,0);if(F<=H)Q.set(0,0,1);Y.crossVectors(Z[0],Q).normalize(),K[0].crossVectors(Z[0],Y),W[0].crossVectors(Z[0],K[0]);for(let G=1;G<=J;G++){if(K[G]=K[G-1].clone(),W[G]=W[G-1].clone(),Y.crossVectors(Z[G-1],Z[G]),Y.length()>Number.EPSILON){Y.normalize();let E=Math.acos(qJ(Z[G-1].dot(Z[G]),-1,1));K[G].applyMatrix4(X.makeRotationAxis(Y,E))}W[G].crossVectors(Z[G],K[G])}if($===!0){let G=Math.acos(qJ(K[0].dot(K[J]),-1,1));if(G/=J,Z[0].dot(Y.crossVectors(K[0],K[J]))>0)G=-G;for(let E=1;E<=J;E++)K[E].applyMatrix4(X.makeRotationAxis(Z[E],G*E)),W[E].crossVectors(Z[E],K[E])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class NQ extends Z9{constructor(J=0,$=0,Q=1,Z=1,K=0,W=Math.PI*2,Y=!1,X=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=$,this.xRadius=Q,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=Y,this.aRotation=X}getPoint(J,$=new L0){let Q=$,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let Y=this.aStartAngle+J*K,X=this.aX+this.xRadius*Math.cos(Y),H=this.aY+this.yRadius*Math.sin(Y);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),F=X-this.aX,G=H-this.aY;X=F*U-G*N+this.aX,H=F*N+G*U+this.aY}return Q.set(X,H)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class RY extends NQ{constructor(J,$,Q,Z,K,W){super(J,$,Q,Q,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function LY(){let J=0,$=0,Q=0,Z=0;function K(W,Y,X,H){J=W,$=X,Q=-3*W+3*Y-2*X-H,Z=2*W-2*Y+X+H}return{initCatmullRom:function(W,Y,X,H,U){K(Y,X,U*(X-W),U*(H-Y))},initNonuniformCatmullRom:function(W,Y,X,H,U,N,F){let G=(Y-W)/U-(X-W)/(U+N)+(X-Y)/N,E=(X-Y)/N-(H-Y)/(N+F)+(H-X)/F;G*=N,E*=N,K(Y,X,G,E)},calc:function(W){let Y=W*W,X=Y*W;return J+$*W+Q*Y+Z*X}}}var EH=new _,qH=new _,NW=new LY,GW=new LY,FW=new LY;class $7 extends Z9{constructor(J=[],$=!1,Q="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=$,this.curveType=Q,this.tension=Z}getPoint(J,$=new _){let Q=$,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,Y=Math.floor(W),X=W-Y;if(this.closed)Y+=Y>0?0:(Math.floor(Math.abs(Y)/K)+1)*K;else if(X===0&&Y===K-1)Y=K-2,X=1;let H,U;if(this.closed||Y>0)H=Z[(Y-1)%K];else qH.subVectors(Z[0],Z[1]).add(Z[0]),H=qH;let N=Z[Y%K],F=Z[(Y+1)%K];if(this.closed||Y+2<K)U=Z[(Y+2)%K];else EH.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),U=EH;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,E=Math.pow(H.distanceToSquared(N),G),O=Math.pow(N.distanceToSquared(F),G),B=Math.pow(F.distanceToSquared(U),G);if(O<0.0001)O=1;if(E<0.0001)E=O;if(B<0.0001)B=O;NW.initNonuniformCatmullRom(H.x,N.x,F.x,U.x,E,O,B),GW.initNonuniformCatmullRom(H.y,N.y,F.y,U.y,E,O,B),FW.initNonuniformCatmullRom(H.z,N.z,F.z,U.z,E,O,B)}else if(this.curveType==="catmullrom")NW.initCatmullRom(H.x,N.x,F.x,U.x,this.tension),GW.initCatmullRom(H.y,N.y,F.y,U.y,this.tension),FW.initCatmullRom(H.z,N.z,F.z,U.z,this.tension);return Q.set(NW.calc(X),GW.calc(X),FW.calc(X)),Q}copy(J){super.copy(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let $=0,Q=this.points.length;$<Q;$++){let Z=this.points[$];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(new _().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function OH(J,$,Q,Z,K){let W=(Z-$)*0.5,Y=(K-Q)*0.5,X=J*J,H=J*X;return(2*Q-2*Z+W+Y)*H+(-3*Q+3*Z-2*W-Y)*X+W*J+Q}function BG(J,$){let Q=1-J;return Q*Q*$}function DG(J,$){return 2*(1-J)*J*$}function MG(J,$){return J*J*$}function u$(J,$,Q,Z){return BG(J,$)+DG(J,Q)+MG(J,Z)}function kG(J,$){let Q=1-J;return Q*Q*Q*$}function CG(J,$){let Q=1-J;return 3*Q*Q*J*$}function PG(J,$){return 3*(1-J)*J*J*$}function IG(J,$){return J*J*J*$}function d$(J,$,Q,Z,K){return kG(J,$)+CG(J,Q)+PG(J,Z)+IG(J,K)}class aZ extends Z9{constructor(J=new L0,$=new L0,Q=new L0,Z=new L0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=$,this.v2=Q,this.v3=Z}getPoint(J,$=new L0){let Q=$,Z=this.v0,K=this.v1,W=this.v2,Y=this.v3;return Q.set(d$(J,Z.x,K.x,W.x,Y.x),d$(J,Z.y,K.y,W.y,Y.y)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class VY extends Z9{constructor(J=new _,$=new _,Q=new _,Z=new _){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=$,this.v2=Q,this.v3=Z}getPoint(J,$=new _){let Q=$,Z=this.v0,K=this.v1,W=this.v2,Y=this.v3;return Q.set(d$(J,Z.x,K.x,W.x,Y.x),d$(J,Z.y,K.y,W.y,Y.y),d$(J,Z.z,K.z,W.z,Y.z)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class rZ extends Z9{constructor(J=new L0,$=new L0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=$}getPoint(J,$=new L0){let Q=$;if(J===1)Q.copy(this.v2);else Q.copy(this.v2).sub(this.v1),Q.multiplyScalar(J).add(this.v1);return Q}getPointAt(J,$){return this.getPoint(J,$)}getTangent(J,$=new L0){return $.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,$){return this.getTangent(J,$)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class BY extends Z9{constructor(J=new _,$=new _){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=$}getPoint(J,$=new _){let Q=$;if(J===1)Q.copy(this.v2);else Q.copy(this.v2).sub(this.v1),Q.multiplyScalar(J).add(this.v1);return Q}getPointAt(J,$){return this.getPoint(J,$)}getTangent(J,$=new _){return $.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,$){return this.getTangent(J,$)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class tZ extends Z9{constructor(J=new L0,$=new L0,Q=new L0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=$,this.v2=Q}getPoint(J,$=new L0){let Q=$,Z=this.v0,K=this.v1,W=this.v2;return Q.set(u$(J,Z.x,K.x,W.x),u$(J,Z.y,K.y,W.y)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class n8 extends Z9{constructor(J=new _,$=new _,Q=new _){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=$,this.v2=Q}getPoint(J,$=new _){let Q=$,Z=this.v0,K=this.v1,W=this.v2;return Q.set(u$(J,Z.x,K.x,W.x),u$(J,Z.y,K.y,W.y),u$(J,Z.z,K.z,W.z)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class eZ extends Z9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,$=new L0){let Q=$,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),Y=K-W,X=Z[W===0?W:W-1],H=Z[W],U=Z[W>Z.length-2?Z.length-1:W+1],N=Z[W>Z.length-3?Z.length-1:W+2];return Q.set(OH(Y,X.x,H.x,U.x,N.x),OH(Y,X.y,H.y,U.y,N.y)),Q}copy(J){super.copy(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let $=0,Q=this.points.length;$<Q;$++){let Z=this.points[$];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(new L0().fromArray(Z))}return this}}var RW=Object.freeze({__proto__:null,ArcCurve:RY,CatmullRomCurve3:$7,CubicBezierCurve:aZ,CubicBezierCurve3:VY,EllipseCurve:NQ,LineCurve:rZ,LineCurve3:BY,QuadraticBezierCurve:tZ,QuadraticBezierCurve3:n8,SplineCurve:eZ});class DY extends Z9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),$=this.curves[this.curves.length-1].getPoint(1);if(!J.equals($)){let Q=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new RW[Q]($,J))}return this}getPoint(J,$){let Q=J*this.getLength(),Z=this.getCurveLengths(),K=0;while(K<Z.length){if(Z[K]>=Q){let W=Z[K]-Q,Y=this.curves[K],X=Y.getLength(),H=X===0?0:1-W/X;return Y.getPointAt(H,$)}K++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],$=0;for(let Q=0,Z=this.curves.length;Q<Z;Q++)$+=this.curves[Q].getLength(),J.push($);return this.cacheLengths=J,J}getSpacedPoints(J=40){let $=[];for(let Q=0;Q<=J;Q++)$.push(this.getPoint(Q/J));if(this.autoClose)$.push($[0]);return $}getPoints(J=12){let $=[],Q;for(let Z=0,K=this.curves;Z<K.length;Z++){let W=K[Z],Y=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,X=W.getPoints(Y);for(let H=0;H<X.length;H++){let U=X[H];if(Q&&Q.equals(U))continue;$.push(U),Q=U}}if(this.autoClose&&$.length>1&&!$[$.length-1].equals($[0]))$.push($[0]);return $}copy(J){super.copy(J),this.curves=[];for(let $=0,Q=J.curves.length;$<Q;$++){let Z=J.curves[$];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let $=0,Q=this.curves.length;$<Q;$++){let Z=this.curves[$];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let $=0,Q=J.curves.length;$<Q;$++){let Z=J.curves[$];this.curves.push(new RW[Z.type]().fromJSON(Z))}return this}}class zZ extends DY{constructor(J){super();if(this.type="Path",this.currentPoint=new L0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let $=1,Q=J.length;$<Q;$++)this.lineTo(J[$].x,J[$].y);return this}moveTo(J,$){return this.currentPoint.set(J,$),this}lineTo(J,$){let Q=new rZ(this.currentPoint.clone(),new L0(J,$));return this.curves.push(Q),this.currentPoint.set(J,$),this}quadraticCurveTo(J,$,Q,Z){let K=new tZ(this.currentPoint.clone(),new L0(J,$),new L0(Q,Z));return this.curves.push(K),this.currentPoint.set(Q,Z),this}bezierCurveTo(J,$,Q,Z,K,W){let Y=new aZ(this.currentPoint.clone(),new L0(J,$),new L0(Q,Z),new L0(K,W));return this.curves.push(Y),this.currentPoint.set(K,W),this}splineThru(J){let $=[this.currentPoint.clone()].concat(J),Q=new eZ($);return this.curves.push(Q),this.currentPoint.copy(J[J.length-1]),this}arc(J,$,Q,Z,K,W){let Y=this.currentPoint.x,X=this.currentPoint.y;return this.absarc(J+Y,$+X,Q,Z,K,W),this}absarc(J,$,Q,Z,K,W){return this.absellipse(J,$,Q,Q,Z,K,W),this}ellipse(J,$,Q,Z,K,W,Y,X){let H=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+H,$+U,Q,Z,K,W,Y,X),this}absellipse(J,$,Q,Z,K,W,Y,X){let H=new NQ(J,$,Q,Z,K,W,Y,X);if(this.curves.length>0){let N=H.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(H);let U=H.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class GQ extends zZ{constructor(J){super(J);this.uuid=J9(),this.type="Shape",this.holes=[]}getPointsHoles(J){let $=[];for(let Q=0,Z=this.holes.length;Q<Z;Q++)$[Q]=this.holes[Q].getPoints(J);return $}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let $=0,Q=J.holes.length;$<Q;$++){let Z=J.holes[$];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let $=0,Q=this.holes.length;$<Q;$++){let Z=this.holes[$];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let $=0,Q=J.holes.length;$<Q;$++){let Z=J.holes[$];this.holes.push(new zZ().fromJSON(Z))}return this}}function zG(J,$,Q=2){let Z=$&&$.length,K=Z?$[0]*Q:J.length,W=AU(J,0,K,Q,!0),Y=[];if(!W||W.next===W.prev)return Y;let X,H,U;if(Z)W=SG(J,$,W,Q);if(J.length>80*Q){X=J[0],H=J[1];let N=X,F=H;for(let G=Q;G<K;G+=Q){let E=J[G],O=J[G+1];if(E<X)X=E;if(O<H)H=O;if(E>N)N=E;if(O>F)F=O}U=Math.max(N-X,F-H),U=U!==0?32767/U:0}return n$(W,Y,Q,X,H,U,0),Y}function AU(J,$,Q,Z,K){let W;if(K===lG(J,$,Q,Z)>0)for(let Y=$;Y<Q;Y+=Z)W=RH(Y/Z|0,J[Y],J[Y+1],W);else for(let Y=Q-Z;Y>=$;Y-=Z)W=RH(Y/Z|0,J[Y],J[Y+1],W);if(W&&s6(W,W.next))i$(W),W=W.next;return W}function d7(J,$){if(!J)return J;if(!$)$=J;let Q=J,Z;do if(Z=!1,!Q.steiner&&(s6(Q,Q.next)||eJ(Q.prev,Q,Q.next)===0)){if(i$(Q),Q=$=Q.prev,Q===Q.next)break;Z=!0}else Q=Q.next;while(Z||Q!==$);return $}function n$(J,$,Q,Z,K,W,Y){if(!J)return;if(!Y&&W)bG(J,Z,K,W);let X=J;while(J.prev!==J.next){let{prev:H,next:U}=J;if(W?TG(J,Z,K,W):AG(J)){$.push(H.i,J.i,U.i),i$(J),J=U.next,X=U.next;continue}if(J=U,J===X){if(!Y)n$(d7(J),$,Q,Z,K,W,1);else if(Y===1)J=_G(d7(J),$),n$(J,$,Q,Z,K,W,2);else if(Y===2)wG(J,$,Q,Z,K,W);break}}}function AG(J){let $=J.prev,Q=J,Z=J.next;if(eJ($,Q,Z)>=0)return!1;let K=$.x,W=Q.x,Y=Z.x,X=$.y,H=Q.y,U=Z.y,N=Math.min(K,W,Y),F=Math.min(X,H,U),G=Math.max(K,W,Y),E=Math.max(X,H,U),O=Z.next;while(O!==$){if(O.x>=N&&O.x<=G&&O.y>=F&&O.y<=E&&p$(K,X,W,H,Y,U,O.x,O.y)&&eJ(O.prev,O,O.next)>=0)return!1;O=O.next}return!0}function TG(J,$,Q,Z){let K=J.prev,W=J,Y=J.next;if(eJ(K,W,Y)>=0)return!1;let X=K.x,H=W.x,U=Y.x,N=K.y,F=W.y,G=Y.y,E=Math.min(X,H,U),O=Math.min(N,F,G),B=Math.max(X,H,U),R=Math.max(N,F,G),q=LW(E,O,$,Q,Z),M=LW(B,R,$,Q,Z),k=J.prevZ,V=J.nextZ;while(k&&k.z>=q&&V&&V.z<=M){if(k.x>=E&&k.x<=B&&k.y>=O&&k.y<=R&&k!==K&&k!==Y&&p$(X,N,H,F,U,G,k.x,k.y)&&eJ(k.prev,k,k.next)>=0)return!1;if(k=k.prevZ,V.x>=E&&V.x<=B&&V.y>=O&&V.y<=R&&V!==K&&V!==Y&&p$(X,N,H,F,U,G,V.x,V.y)&&eJ(V.prev,V,V.next)>=0)return!1;V=V.nextZ}while(k&&k.z>=q){if(k.x>=E&&k.x<=B&&k.y>=O&&k.y<=R&&k!==K&&k!==Y&&p$(X,N,H,F,U,G,k.x,k.y)&&eJ(k.prev,k,k.next)>=0)return!1;k=k.prevZ}while(V&&V.z<=M){if(V.x>=E&&V.x<=B&&V.y>=O&&V.y<=R&&V!==K&&V!==Y&&p$(X,N,H,F,U,G,V.x,V.y)&&eJ(V.prev,V,V.next)>=0)return!1;V=V.nextZ}return!0}function _G(J,$){let Q=J;do{let Z=Q.prev,K=Q.next.next;if(!s6(Z,K)&&_U(Z,Q,Q.next,K)&&s$(Z,K)&&s$(K,Z))$.push(Z.i,Q.i,K.i),i$(Q),i$(Q.next),Q=J=K;Q=Q.next}while(Q!==J);return d7(Q)}function wG(J,$,Q,Z,K,W){let Y=J;do{let X=Y.next.next;while(X!==Y.prev){if(Y.i!==X.i&&gG(Y,X)){let H=wU(Y,X);Y=d7(Y,Y.next),H=d7(H,H.next),n$(Y,$,Q,Z,K,W,0),n$(H,$,Q,Z,K,W,0);return}X=X.next}Y=Y.next}while(Y!==J)}function SG(J,$,Q,Z){let K=[];for(let W=0,Y=$.length;W<Y;W++){let X=$[W]*Z,H=W<Y-1?$[W+1]*Z:J.length,U=AU(J,X,H,Z,!1);if(U===U.next)U.steiner=!0;K.push(xG(U))}K.sort(jG);for(let W=0;W<K.length;W++)Q=yG(K[W],Q);return Q}function jG(J,$){let Q=J.x-$.x;if(Q===0){if(Q=J.y-$.y,Q===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),K=($.next.y-$.y)/($.next.x-$.x);Q=Z-K}}return Q}function yG(J,$){let Q=vG(J,$);if(!Q)return $;let Z=wU(Q,J);return d7(Z,Z.next),d7(Q,Q.next)}function vG(J,$){let Q=$,Z=J.x,K=J.y,W=-1/0,Y;if(s6(J,Q))return Q;do{if(s6(J,Q.next))return Q.next;else if(K<=Q.y&&K>=Q.next.y&&Q.next.y!==Q.y){let F=Q.x+(K-Q.y)*(Q.next.x-Q.x)/(Q.next.y-Q.y);if(F<=Z&&F>W){if(W=F,Y=Q.x<Q.next.x?Q:Q.next,F===Z)return Y}}Q=Q.next}while(Q!==$);if(!Y)return null;let X=Y,H=Y.x,U=Y.y,N=1/0;Q=Y;do{if(Z>=Q.x&&Q.x>=H&&Z!==Q.x&&TU(K<U?Z:W,K,H,U,K<U?W:Z,K,Q.x,Q.y)){let F=Math.abs(K-Q.y)/(Z-Q.x);if(s$(Q,J)&&(F<N||F===N&&(Q.x>Y.x||Q.x===Y.x&&fG(Y,Q))))Y=Q,N=F}Q=Q.next}while(Q!==X);return Y}function fG(J,$){return eJ(J.prev,J,$.prev)<0&&eJ($.next,J,J.next)<0}function bG(J,$,Q,Z){let K=J;do{if(K.z===0)K.z=LW(K.x,K.y,$,Q,Z);K.prevZ=K.prev,K.nextZ=K.next,K=K.next}while(K!==J);K.prevZ.nextZ=null,K.prevZ=null,hG(K)}function hG(J){let $,Q=1;do{let Z=J,K;J=null;let W=null;$=0;while(Z){$++;let Y=Z,X=0;for(let U=0;U<Q;U++)if(X++,Y=Y.nextZ,!Y)break;let H=Q;while(X>0||H>0&&Y){if(X!==0&&(H===0||!Y||Z.z<=Y.z))K=Z,Z=Z.nextZ,X--;else K=Y,Y=Y.nextZ,H--;if(W)W.nextZ=K;else J=K;K.prevZ=W,W=K}Z=Y}W.nextZ=null,Q*=2}while($>1);return J}function LW(J,$,Q,Z,K){return J=(J-Q)*K|0,$=($-Z)*K|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,$=($|$<<8)&16711935,$=($|$<<4)&252645135,$=($|$<<2)&858993459,$=($|$<<1)&1431655765,J|$<<1}function xG(J){let $=J,Q=J;do{if($.x<Q.x||$.x===Q.x&&$.y<Q.y)Q=$;$=$.next}while($!==J);return Q}function TU(J,$,Q,Z,K,W,Y,X){return(K-Y)*($-X)>=(J-Y)*(W-X)&&(J-Y)*(Z-X)>=(Q-Y)*($-X)&&(Q-Y)*(W-X)>=(K-Y)*(Z-X)}function p$(J,$,Q,Z,K,W,Y,X){return!(J===Y&&$===X)&&TU(J,$,Q,Z,K,W,Y,X)}function gG(J,$){return J.next.i!==$.i&&J.prev.i!==$.i&&!pG(J,$)&&(s$(J,$)&&s$($,J)&&mG(J,$)&&(eJ(J.prev,J,$.prev)||eJ(J,$.prev,$))||s6(J,$)&&eJ(J.prev,J,J.next)>0&&eJ($.prev,$,$.next)>0)}function eJ(J,$,Q){return($.y-J.y)*(Q.x-$.x)-($.x-J.x)*(Q.y-$.y)}function s6(J,$){return J.x===$.x&&J.y===$.y}function _U(J,$,Q,Z){let K=DZ(eJ(J,$,Q)),W=DZ(eJ(J,$,Z)),Y=DZ(eJ(Q,Z,J)),X=DZ(eJ(Q,Z,$));if(K!==W&&Y!==X)return!0;if(K===0&&BZ(J,Q,$))return!0;if(W===0&&BZ(J,Z,$))return!0;if(Y===0&&BZ(Q,J,Z))return!0;if(X===0&&BZ(Q,$,Z))return!0;return!1}function BZ(J,$,Q){return $.x<=Math.max(J.x,Q.x)&&$.x>=Math.min(J.x,Q.x)&&$.y<=Math.max(J.y,Q.y)&&$.y>=Math.min(J.y,Q.y)}function DZ(J){return J>0?1:J<0?-1:0}function pG(J,$){let Q=J;do{if(Q.i!==J.i&&Q.next.i!==J.i&&Q.i!==$.i&&Q.next.i!==$.i&&_U(Q,Q.next,J,$))return!0;Q=Q.next}while(Q!==J);return!1}function s$(J,$){return eJ(J.prev,J,J.next)<0?eJ(J,$,J.next)>=0&&eJ(J,J.prev,$)>=0:eJ(J,$,J.prev)<0||eJ(J,J.next,$)<0}function mG(J,$){let Q=J,Z=!1,K=(J.x+$.x)/2,W=(J.y+$.y)/2;do{if(Q.y>W!==Q.next.y>W&&Q.next.y!==Q.y&&K<(Q.next.x-Q.x)*(W-Q.y)/(Q.next.y-Q.y)+Q.x)Z=!Z;Q=Q.next}while(Q!==J);return Z}function wU(J,$){let Q=VW(J.i,J.x,J.y),Z=VW($.i,$.x,$.y),K=J.next,W=$.prev;return J.next=$,$.prev=J,Q.next=K,K.prev=Q,Z.next=Q,Q.prev=Z,W.next=Z,Z.prev=W,Z}function RH(J,$,Q,Z){let K=VW(J,$,Q);if(!Z)K.prev=K,K.next=K;else K.next=Z.next,K.prev=Z,Z.next.prev=K,Z.next=K;return K}function i$(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function VW(J,$,Q){return{i:J,x:$,y:Q,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lG(J,$,Q,Z){let K=0;for(let W=$,Y=Q-Z;W<Q;W+=Z)K+=(J[Y]-J[W])*(J[W+1]+J[Y+1]),Y=W;return K}class SU{static triangulate(J,$,Q=2){return zG(J,$,Q)}}class d6{static area(J){let $=J.length,Q=0;for(let Z=$-1,K=0;K<$;Z=K++)Q+=J[Z].x*J[K].y-J[K].x*J[Z].y;return Q*0.5}static isClockWise(J){return d6.area(J)<0}static triangulateShape(J,$){let Q=[],Z=[],K=[];LH(J),VH(Q,J);let W=J.length;$.forEach(LH);for(let X=0;X<$.length;X++)Z.push(W),W+=$[X].length,VH(Q,$[X]);let Y=SU.triangulate(Q,Z);for(let X=0;X<Y.length;X+=3)K.push(Y.slice(X,X+3));return K}}function LH(J){let $=J.length;if($>2&&J[$-1].equals(J[0]))J.pop()}function VH(J,$){for(let Q=0;Q<$.length;Q++)J.push($[Q].x),J.push($[Q].y)}class FQ extends oZ{constructor(J=1,$=0){let Q=(1+Math.sqrt(5))/2,Z=[-1,Q,0,1,Q,0,-1,-Q,0,1,-Q,0,0,-1,Q,0,1,Q,0,-1,-Q,0,1,-Q,Q,0,-1,Q,0,1,-Q,0,-1,-Q,0,1],K=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(Z,K,J,$);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:$}}static fromJSON(J){return new FQ(J.radius,J.detail)}}class I7 extends bJ{constructor(J=[new L0(0,-0.5),new L0(0.5,0),new L0(0,0.5)],$=12,Q=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:$,phiStart:Q,phiLength:Z},$=Math.floor($),Z=qJ(Z,0,Math.PI*2);let K=[],W=[],Y=[],X=[],H=[],U=1/$,N=new _,F=new L0,G=new _,E=new _,O=new _,B=0,R=0;for(let q=0;q<=J.length-1;q++)switch(q){case 0:B=J[q+1].x-J[q].x,R=J[q+1].y-J[q].y,G.x=R*1,G.y=-B,G.z=R*0,O.copy(G),G.normalize(),X.push(G.x,G.y,G.z);break;case J.length-1:X.push(O.x,O.y,O.z);break;default:B=J[q+1].x-J[q].x,R=J[q+1].y-J[q].y,G.x=R*1,G.y=-B,G.z=R*0,E.copy(G),G.x+=O.x,G.y+=O.y,G.z+=O.z,G.normalize(),X.push(G.x,G.y,G.z),O.copy(E)}for(let q=0;q<=$;q++){let M=Q+q*U*Z,k=Math.sin(M),V=Math.cos(M);for(let L=0;L<=J.length-1;L++){N.x=J[L].x*k,N.y=J[L].y,N.z=J[L].x*V,W.push(N.x,N.y,N.z),F.x=q/$,F.y=L/(J.length-1),Y.push(F.x,F.y);let P=X[3*L+0]*k,A=X[3*L+1],D=X[3*L+0]*V;H.push(P,A,D)}}for(let q=0;q<$;q++)for(let M=0;M<J.length-1;M++){let k=M+q*J.length,V=k,L=k+J.length,P=k+J.length+1,A=k+1;K.push(V,L,A),K.push(P,A,L)}this.setIndex(K),this.setAttribute("position",new XJ(W,3)),this.setAttribute("uv",new XJ(Y,2)),this.setAttribute("normal",new XJ(H,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new I7(J.points,J.segments,J.phiStart,J.phiLength)}}class VJ extends bJ{constructor(J=1,$=1,Q=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:$,widthSegments:Q,heightSegments:Z};let K=J/2,W=$/2,Y=Math.floor(Q),X=Math.floor(Z),H=Y+1,U=X+1,N=J/Y,F=$/X,G=[],E=[],O=[],B=[];for(let R=0;R<U;R++){let q=R*F-W;for(let M=0;M<H;M++){let k=M*N-K;E.push(k,-q,0),O.push(0,0,1),B.push(M/Y),B.push(1-R/X)}}for(let R=0;R<X;R++)for(let q=0;q<Y;q++){let M=q+H*R,k=q+H*(R+1),V=q+1+H*(R+1),L=q+1+H*R;G.push(M,k,L),G.push(k,V,L)}this.setIndex(G),this.setAttribute("position",new XJ(E,3)),this.setAttribute("normal",new XJ(O,3)),this.setAttribute("uv",new XJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new VJ(J.width,J.height,J.widthSegments,J.heightSegments)}}class EQ extends bJ{constructor(J=new GQ([new L0(0,0.5),new L0(-0.5,-0.5),new L0(0.5,-0.5)]),$=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:$};let Q=[],Z=[],K=[],W=[],Y=0,X=0;if(Array.isArray(J)===!1)H(J);else for(let U=0;U<J.length;U++)H(J[U]),this.addGroup(Y,X,U),Y+=X,X=0;this.setIndex(Q),this.setAttribute("position",new XJ(Z,3)),this.setAttribute("normal",new XJ(K,3)),this.setAttribute("uv",new XJ(W,2));function H(U){let N=Z.length/3,F=U.extractPoints($),G=F.shape,E=F.holes;if(d6.isClockWise(G)===!1)G=G.reverse();for(let B=0,R=E.length;B<R;B++){let q=E[B];if(d6.isClockWise(q)===!0)E[B]=q.reverse()}let O=d6.triangulateShape(G,E);for(let B=0,R=E.length;B<R;B++){let q=E[B];G=G.concat(q)}for(let B=0,R=G.length;B<R;B++){let q=G[B];Z.push(q.x,q.y,0),K.push(0,0,1),W.push(q.x,q.y)}for(let B=0,R=O.length;B<R;B++){let q=O[B],M=q[0]+N,k=q[1]+N,V=q[2]+N;Q.push(M,k,V),X+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),$=this.parameters.shapes;return uG($,J)}static fromJSON(J,$){let Q=[];for(let Z=0,K=J.shapes.length;Z<K;Z++){let W=$[J.shapes[Z]];Q.push(W)}return new EQ(Q,J.curveSegments)}}function uG(J,$){if($.shapes=[],Array.isArray(J))for(let Q=0,Z=J.length;Q<Z;Q++){let K=J[Q];$.shapes.push(K.uuid)}else $.shapes.push(J.uuid);return $}class H8 extends bJ{constructor(J=1,$=32,Q=16,Z=0,K=Math.PI*2,W=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:$,heightSegments:Q,phiStart:Z,phiLength:K,thetaStart:W,thetaLength:Y},$=Math.max(3,Math.floor($)),Q=Math.max(2,Math.floor(Q));let X=Math.min(W+Y,Math.PI),H=0,U=[],N=new _,F=new _,G=[],E=[],O=[],B=[];for(let R=0;R<=Q;R++){let q=[],M=R/Q,k=W+M*Y,V=J*Math.cos(k),L=Math.sqrt(J*J-V*V),P=0;if(R===0&&W===0)P=0.5/$;else if(R===Q&&X===Math.PI)P=-0.5/$;for(let A=0;A<=$;A++){let D=A/$,I=Z+D*K;N.x=-L*Math.cos(I),N.y=V,N.z=L*Math.sin(I),E.push(N.x,N.y,N.z),F.copy(N).normalize(),O.push(F.x,F.y,F.z),B.push(D+P,1-M),q.push(H++)}U.push(q)}for(let R=0;R<Q;R++)for(let q=0;q<$;q++){let M=U[R][q+1],k=U[R][q],V=U[R+1][q],L=U[R+1][q+1];if(R!==0||W>0)G.push(M,k,L);if(R!==Q-1||X<Math.PI)G.push(k,V,L)}this.setIndex(G),this.setAttribute("position",new XJ(E,3)),this.setAttribute("normal",new XJ(O,3)),this.setAttribute("uv",new XJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new H8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class f9 extends bJ{constructor(J=1,$=0.4,Q=12,Z=48,K=Math.PI*2,W=0,Y=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:$,radialSegments:Q,tubularSegments:Z,arc:K,thetaStart:W,thetaLength:Y},Q=Math.floor(Q),Z=Math.floor(Z);let X=[],H=[],U=[],N=[],F=new _,G=new _,E=new _;for(let O=0;O<=Q;O++){let B=W+O/Q*Y;for(let R=0;R<=Z;R++){let q=R/Z*K;G.x=(J+$*Math.cos(B))*Math.cos(q),G.y=(J+$*Math.cos(B))*Math.sin(q),G.z=$*Math.sin(B),H.push(G.x,G.y,G.z),F.x=J*Math.cos(q),F.y=J*Math.sin(q),E.subVectors(G,F).normalize(),U.push(E.x,E.y,E.z),N.push(R/Z),N.push(O/Q)}}for(let O=1;O<=Q;O++)for(let B=1;B<=Z;B++){let R=(Z+1)*O+B-1,q=(Z+1)*(O-1)+B-1,M=(Z+1)*(O-1)+B,k=(Z+1)*O+B;X.push(R,q,k),X.push(q,M,k)}this.setIndex(X),this.setAttribute("position",new XJ(H,3)),this.setAttribute("normal",new XJ(U,3)),this.setAttribute("uv",new XJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new f9(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class f8 extends bJ{constructor(J=new n8(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),$=64,Q=1,Z=8,K=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:$,radius:Q,radialSegments:Z,closed:K};let W=J.computeFrenetFrames($,K);this.tangents=W.tangents,this.normals=W.normals,this.binormals=W.binormals;let Y=new _,X=new _,H=new L0,U=new _,N=[],F=[],G=[],E=[];O(),this.setIndex(E),this.setAttribute("position",new XJ(N,3)),this.setAttribute("normal",new XJ(F,3)),this.setAttribute("uv",new XJ(G,2));function O(){for(let M=0;M<$;M++)B(M);B(K===!1?$:0),q(),R()}function B(M){U=J.getPointAt(M/$,U);let k=W.normals[M],V=W.binormals[M];for(let L=0;L<=Z;L++){let P=L/Z*Math.PI*2,A=Math.sin(P),D=-Math.cos(P);X.x=D*k.x+A*V.x,X.y=D*k.y+A*V.y,X.z=D*k.z+A*V.z,X.normalize(),F.push(X.x,X.y,X.z),Y.x=U.x+Q*X.x,Y.y=U.y+Q*X.y,Y.z=U.z+Q*X.z,N.push(Y.x,Y.y,Y.z)}}function R(){for(let M=1;M<=$;M++)for(let k=1;k<=Z;k++){let V=(Z+1)*(M-1)+(k-1),L=(Z+1)*M+(k-1),P=(Z+1)*M+k,A=(Z+1)*(M-1)+k;E.push(V,L,A),E.push(L,P,A)}}function q(){for(let M=0;M<=$;M++)for(let k=0;k<=Z;k++)H.x=M/$,H.y=k/Z,G.push(H.x,H.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new f8(new RW[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function Y6(J){let $={};for(let Q in J){$[Q]={};for(let Z in J[Q]){let K=J[Q][Z];if(BH(K))if(K.isRenderTargetTexture)r0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[Q][Z]=null;else $[Q][Z]=K.clone();else if(Array.isArray(K))if(BH(K[0])){let W=[];for(let Y=0,X=K.length;Y<X;Y++)W[Y]=K[Y].clone();$[Q][Z]=W}else $[Q][Z]=K.slice();else $[Q][Z]=K}}return $}function z8(J){let $={};for(let Q=0;Q<J.length;Q++){let Z=Y6(J[Q]);for(let K in Z)$[K]=Z[K]}return $}function BH(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function dG(J){let $=[];for(let Q=0;Q<J.length;Q++)$.push(J[Q].clone());return $}function MY(J){let $=J.getRenderTarget();if($===null)return J.outputColorSpace;if($.isXRRenderTarget===!0)return $.texture.colorSpace;return RJ.workingColorSpace}var Q7={clone:Y6,merge:z8},cG=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nG=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class J8 extends v8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cG,this.fragmentShader=nG,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=Y6(J.uniforms),this.uniformsGroups=dG(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let $=super.toJSON(J);$.glslVersion=this.glslVersion,$.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)$.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)$.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)$.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)$.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)$.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)$.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)$.uniforms[Z]={type:"m4",value:W.toArray()};else $.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let Q={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Q[Z]=!0;if(Object.keys(Q).length>0)$.extensions=Q;return $}fromJSON(J,$){if(super.fromJSON(J,$),J.uniforms!==void 0)for(let Q in J.uniforms){let Z=J.uniforms[Q];switch(this.uniforms[Q]={},Z.type){case"t":this.uniforms[Q].value=$[Z.value]||null;break;case"c":this.uniforms[Q].value=new y0().setHex(Z.value);break;case"v2":this.uniforms[Q].value=new L0().fromArray(Z.value);break;case"v3":this.uniforms[Q].value=new _().fromArray(Z.value);break;case"v4":this.uniforms[Q].value=new lJ().fromArray(Z.value);break;case"m3":this.uniforms[Q].value=new HJ().fromArray(Z.value);break;case"m4":this.uniforms[Q].value=new QJ().fromArray(Z.value);break;default:this.uniforms[Q].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Q in J.extensions)this.extensions[Q]=J.extensions[Q];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class qQ extends J8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o0 extends v8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new y0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new y0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new L9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class V8 extends o0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new L0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function($){this.ior=(1+0.4*$)/(1-0.4*$)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new y0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new y0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new y0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class kY extends v8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class CY extends v8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function R7(J,$){if(!J||J.constructor===$)return J;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(J);return Array.prototype.slice.call(J)}function CZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function sG(J){function $(K,W){return J[K]-J[W]}let Q=J.length,Z=Array(Q);for(let K=0;K!==Q;++K)Z[K]=K;return Z.sort($),Z}function DH(J,$,Q){let Z=J.length,K=new J.constructor(Z);for(let W=0,Y=0;Y!==Z;++W){let X=Q[W]*$;for(let H=0;H!==$;++H)K[Y++]=J[X+H]}return K}function iG(J,$,Q,Z){let K=1,W=J[0];while(W!==void 0&&W[Z]===void 0)W=J[K++];if(W===void 0)return;let Y=W[Z];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=W[Z],Y!==void 0)$.push(W.time),Q.push(...Y);W=J[K++]}while(W!==void 0);else if(Y.toArray!==void 0)do{if(Y=W[Z],Y!==void 0)$.push(W.time),Y.toArray(Q,Q.length);W=J[K++]}while(W!==void 0);else do{if(Y=W[Z],Y!==void 0)$.push(W.time),Q.push(Y);W=J[K++]}while(W!==void 0)}class Z7{constructor(J,$,Q,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new $.constructor(Q),this.sampleValues=$,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate(J){let $=this.parameterPositions,Q=this._cachedIndex,Z=$[Q],K=$[Q-1];J:{$:{let W;Q:{Z:if(!(J<Z)){for(let Y=Q+2;;){if(Z===void 0){if(J<K)break Z;return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===Y)break;if(K=Z,Z=$[++Q],J<Z)break $}W=$.length;break Q}if(!(J>=K)){let Y=$[1];if(J<Y)Q=2,K=Y;for(let X=Q-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===X)break;if(Z=K,K=$[--Q-1],J>=K)break $}W=Q,Q=0;break Q}break J}while(Q<W){let Y=Q+W>>>1;if(J<$[Y])W=Y;else Q=Y+1}if(Z=$[Q],K=$[Q-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,K,Z)}return this.interpolate_(Q,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)$[W]=Q[K+W];return $}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class PY extends Z7{constructor(J,$,Q,Z){super(J,$,Q,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,$,Q){let Z=this.parameterPositions,K=J-2,W=J+1,Y=Z[K],X=Z[W];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,Y=2*$-Q;break;case 2402:K=Z.length-2,Y=$+Z[K]-Z[K+1];break;default:K=J,Y=Q}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,X=2*Q-$;break;case 2402:W=1,X=Q+Z[1]-Z[0];break;default:W=J-1,X=$}let H=(Q-$)*0.5,U=this.valueSize;this._weightPrev=H/($-Y),this._weightNext=H/(X-Q),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this._offsetPrev,N=this._offsetNext,F=this._weightPrev,G=this._weightNext,E=(Q-$)/(Z-$),O=E*E,B=O*E,R=-F*B+2*F*O-F*E,q=(1+F)*B+(-1.5-2*F)*O+(-0.5+F)*E+1,M=(-1-G)*B+(1.5+G)*O+0.5*E,k=G*B-G*O;for(let V=0;V!==Y;++V)K[V]=R*W[U+V]+q*W[H+V]+M*W[X+V]+k*W[N+V];return K}}class JK extends Z7{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=(Q-$)/(Z-$),N=1-U;for(let F=0;F!==Y;++F)K[F]=W[H+F]*N+W[X+F]*U;return K}}class IY extends Z7{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class zY extends Z7{interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this.inTangents,N=this.outTangents;if(!U||!N){let E=(Q-$)/(Z-$),O=1-E;for(let B=0;B!==Y;++B)K[B]=W[H+B]*O+W[X+B]*E;return K}let F=Y*2,G=J-1;for(let E=0;E!==Y;++E){let O=W[H+E],B=W[X+E],R=G*F+E*2,q=N[R],M=N[R+1],k=J*F+E*2,V=U[k],L=U[k+1],P=aG(Q,$,q,V,Z);K[E]=jU(P,O,M,L,B)}return K}}function jU(J,$,Q,Z,K){let W=1-J;return W*W*W*$+3*W*W*J*Q+3*W*J*J*Z+J*J*J*K}function oG(J,$,Q,Z,K){let W=1-J;return 3*W*W*(Q-$)+6*W*J*(Z-Q)+3*J*J*(K-Z)}function aG(J,$,Q,Z,K){let W=(J-$)/(K-$);for(let Y=0;Y<8;Y++){let X=jU(W,$,Q,Z,K)-J;if(Math.abs(X)<0.0000000001)break;let H=oG(W,$,Q,Z,K);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-X/H))}return W}class s8{constructor(J,$,Q,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=R7($,this.TimeBufferType),this.values=R7(Q,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let $=J.constructor,Q;if($.toJSON!==this.toJSON)Q=$.toJSON(J);else{Q={name:J.name,times:R7(J.times,Array),values:R7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)Q.interpolation=Z;if(CZ(J.settings))Q.settings={inTangents:R7(J.settings.inTangents,Array),outTangents:R7(J.settings.outTangents,Array)}}return Q.type=J.ValueTypeName,Q}InterpolantFactoryMethodDiscrete(J){return new IY(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new JK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new PY(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let $=new zY(this.times,this.values,this.getValueSize(),J);if(this.settings)$.inTangents=this.settings.inTangents,$.outTangents=this.settings.outTangents;return $}setInterpolation(J){let $;switch(J){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break;case 2303:$=this.InterpolantFactoryMethodBezier;break}if($===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return r0("KeyframeTrack:",Q),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]+=J}return this}scale(J){if(J!==1){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]*=J;if(CZ(this.settings))MH(this.settings.inTangents,J),MH(this.settings.outTangents,J)}return this}trim(J,$){let Q=this.times,Z=Q.length,K=0,W=Z-1;while(K!==Z&&Q[K]<J)++K;while(W!==-1&&Q[W]>$)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let Y=this.getValueSize();this.times=Q.slice(K,W),this.values=this.values.slice(K*Y,W*Y)}return this}validate(){let J=!0,$=this.getValueSize();if($-Math.floor($)!==0)ZJ("KeyframeTrack: Invalid value size in track.",this),J=!1;let Q=this.times,Z=this.values,K=Q.length;if(K===0)ZJ("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let Y=0;Y!==K;Y++){let X=Q[Y];if(typeof X==="number"&&isNaN(X)){ZJ("KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(W!==null&&W>X){ZJ("KeyframeTrack: Out of order keys.",this,Y,X,W),J=!1;break}W=X}if(Z!==void 0){if(fN(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let H=Z[Y];if(isNaN(H)){ZJ("KeyframeTrack: Value is not a valid number.",this,Y,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),$=this.values.slice(),Q=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let Y=1;Y<K;++Y){let X=!1,H=J[Y],U=J[Y+1];if(H!==U&&(Y!==1||H!==J[0]))if(!Z){let N=Y*Q,F=N-Q,G=N+Q;for(let E=0;E!==Q;++E){let O=$[N+E];if(O!==$[F+E]||O!==$[G+E]){X=!0;break}}}else X=!0;if(X){if(Y!==W){J[W]=J[Y];let N=Y*Q,F=W*Q;for(let G=0;G!==Q;++G)$[F+G]=$[N+G]}++W}}if(K>0){J[W]=J[K];for(let Y=K*Q,X=W*Q,H=0;H!==Q;++H)$[X+H]=$[Y+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=$.slice(0,W*Q);else this.times=J,this.values=$;return this}clone(){let J=this.times.slice(),$=this.values.slice(),Z=new this.constructor(this.name,J,$);if(Z.createInterpolant=this.createInterpolant,CZ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function MH(J,$){for(let Q=0,Z=J.length;Q!==Z;Q+=2)J[Q]*=$}s8.prototype.ValueTypeName="";s8.prototype.TimeBufferType=Float32Array;s8.prototype.ValueBufferType=Float32Array;s8.prototype.DefaultInterpolation=2301;class z7 extends s8{constructor(J,$,Q){super(J,$,Q)}}z7.prototype.ValueTypeName="bool";z7.prototype.ValueBufferType=Array;z7.prototype.DefaultInterpolation=2300;z7.prototype.InterpolantFactoryMethodLinear=void 0;z7.prototype.InterpolantFactoryMethodSmooth=void 0;class $K extends s8{constructor(J,$,Q,Z){super(J,$,Q,Z)}}$K.prototype.ValueTypeName="color";class A7 extends s8{constructor(J,$,Q,Z){super(J,$,Q,Z)}}A7.prototype.ValueTypeName="number";class AY extends Z7{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=(Q-$)/(Z-$),H=J*Y;for(let U=H+Y;H!==U;H+=4)UJ.slerpFlat(K,0,W,H-Y,W,H,X);return K}}class T7 extends s8{constructor(J,$,Q,Z){super(J,$,Q,Z)}InterpolantFactoryMethodLinear(J){return new AY(this.times,this.values,this.getValueSize(),J)}}T7.prototype.ValueTypeName="quaternion";T7.prototype.InterpolantFactoryMethodSmooth=void 0;class _7 extends s8{constructor(J,$,Q){super(J,$,Q)}}_7.prototype.ValueTypeName="string";_7.prototype.ValueBufferType=Array;_7.prototype.DefaultInterpolation=2300;_7.prototype.InterpolantFactoryMethodLinear=void 0;_7.prototype.InterpolantFactoryMethodSmooth=void 0;class X6 extends s8{constructor(J,$,Q,Z){super(J,$,Q,Z)}}X6.prototype.ValueTypeName="vector";class i6{constructor(J="",$=-1,Q=[],Z=2500){if(this.name=J,this.tracks=Q,this.duration=$,this.blendMode=Z,this.uuid=J9(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let $=[],Q=J.tracks,Z=1/(J.fps||1);for(let W=0,Y=Q.length;W!==Y;++W)$.push(tG(Q[W]).scale(Z));let K=new this(J.name,J.duration,$,J.blendMode);return K.uuid=J.uuid,K.userData=JSON.parse(J.userData||"{}"),K}static toJSON(J){let $=[],Q=J.tracks,Z={name:J.name,duration:J.duration,tracks:$,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let K=0,W=Q.length;K!==W;++K)$.push(s8.toJSON(Q[K]));return Z}static CreateFromMorphTargetSequence(J,$,Q,Z){let K=$.length,W=[];for(let Y=0;Y<K;Y++){let X=[],H=[];X.push((Y+K-1)%K,Y,(Y+1)%K),H.push(0,1,0);let U=sG(X);if(X=DH(X,1,U),H=DH(H,1,U),!Z&&X[0]===0)X.push(K),H.push(H[0]);W.push(new A7(".morphTargetInfluences["+$[Y].name+"]",X,H).scale(1/Q))}return new this(J,-1,W)}static findByName(J,$){let Q=J;if(!Array.isArray(J)){let Z=J;Q=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<Q.length;Z++)if(Q[Z].name===$)return Q[Z];return null}static CreateClipsFromMorphTargetSequences(J,$,Q){let Z={},K=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y],U=H.name.match(K);if(U&&U.length>1){let N=U[1],F=Z[N];if(!F)Z[N]=F=[];F.push(H)}}let W=[];for(let Y in Z)W.push(this.CreateFromMorphTargetSequence(Y,Z[Y],$,Q));return W}resetDuration(){let J=this.tracks,$=0;for(let Q=0,Z=J.length;Q!==Z;++Q){let K=this.tracks[Q];$=Math.max($,K.times[K.times.length-1])}return this.duration=$,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let $=0;$<this.tracks.length;$++)J=J&&this.tracks[$].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());let $=new this.constructor(this.name,this.duration,J,this.blendMode);return $.userData=JSON.parse(JSON.stringify(this.userData)),$}toJSON(){return this.constructor.toJSON(this)}}function rG(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return A7;case"vector":case"vector2":case"vector3":case"vector4":return X6;case"color":return $K;case"quaternion":return T7;case"bool":case"boolean":return z7;case"string":return _7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function tG(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let $=rG(J.type);if(J.times===void 0){let Z=[],K=[];iG(J.keys,Z,K,"value"),J.times=Z,J.values=K}let Q;if($.parse!==void 0)Q=$.parse(J);else Q=new $(J.name,J.times,J.values,J.interpolation);if(CZ(J.settings))Q.settings={inTangents:R7(J.settings.inTangents,Float32Array),outTangents:R7(J.settings.outTangents,Float32Array)};return Q}var w9={enabled:!1,files:{},add:function(J,$){if(this.enabled===!1)return;if(kH(J))return;this.files[J]=$},get:function(J){if(this.enabled===!1)return;if(kH(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function kH(J){try{let $=J.slice(J.indexOf(":")+1);return new URL($).protocol==="blob:"}catch($){return!1}}class TY{constructor(J,$,Q){let Z=this,K=!1,W=0,Y=0,X=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=$,this.onError=Q,this._abortController=null,this.itemStart=function(U){if(Y++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,Y)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,Y);if(W===Y){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,N){return H.push(U,N),this},this.removeHandler=function(U){let N=H.indexOf(U);if(N!==-1)H.splice(N,2);return this},this.getHandler=function(U){for(let N=0,F=H.length;N<F;N+=2){let G=H[N],E=H[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var yU=new TY;class K7{constructor(J){if(this.manager=J!==void 0?J:yU,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,$){let Q=this;return new Promise(function(Z,K){Q.load(J,Z,$,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}K7.DEFAULT_MATERIAL_NAME="__DEFAULT";var r9={};class vU extends Error{constructor(J,$){super(J);this.response=$}}class OQ extends K7{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,$,Q,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=w9.get(`file:${J}`);if(K!==void 0){this.manager.itemStart(J),setTimeout(()=>{if($)$(K);this.manager.itemEnd(J)},0);return}if(r9[J]!==void 0){r9[J].push({onLoad:$,onProgress:Q,onError:Z});return}r9[J]=[],r9[J].push({onLoad:$,onProgress:Q,onError:Z});let W=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Y=this.mimeType,X=this.responseType;fetch(W).then((H)=>{if(H.status===200||H.status===0){if(H.status===0)r0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||H.body===void 0||H.body.getReader===void 0)return H;let U=r9[J],N=H.body.getReader(),F=H.headers.get("X-File-Size")||H.headers.get("Content-Length"),G=F?parseInt(F):0,E=G!==0,O=0,B=new ReadableStream({start(R){q();function q(){N.read().then(({done:M,value:k})=>{if(M)R.close();else{O+=k.byteLength;let V=new ProgressEvent("progress",{lengthComputable:E,loaded:O,total:G});for(let L=0,P=U.length;L<P;L++){let A=U[L];if(A.onProgress)A.onProgress(V)}R.enqueue(k),q()}},(M)=>{R.error(M)})}}});return new Response(B)}else throw new vU(`fetch for "${H.url}" responded with ${H.status}: ${H.statusText}`,H)}).then((H)=>{switch(X){case"arraybuffer":return H.arrayBuffer();case"blob":return H.blob();case"document":return H.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return H.json();default:if(Y==="")return H.text();else{let N=/charset="?([^;"\s]*)"?/i.exec(Y),F=N&&N[1]?N[1].toLowerCase():void 0,G=new TextDecoder(F);return H.arrayBuffer().then((E)=>G.decode(E))}}}).then((H)=>{w9.add(`file:${J}`,H);let U=r9[J];delete r9[J];for(let N=0,F=U.length;N<F;N++){let G=U[N];if(G.onLoad)G.onLoad(H)}}).catch((H)=>{let U=r9[J];if(U===void 0)throw this.manager.itemError(J),H;delete r9[J];for(let N=0,F=U.length;N<F;N++){let G=U[N];if(G.onError)G.onError(H)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var p6=new WeakMap;class _Y extends K7{constructor(J){super(J)}load(J,$,Q,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=w9.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if($)$(W);K.manager.itemEnd(J)},0);else{let N=p6.get(W);if(N===void 0)N=[],p6.set(W,N);N.push({onLoad:$,onError:Z})}return W}let Y=c6("img");function X(){if(U(),$)$(this);let N=p6.get(this)||[];for(let F=0;F<N.length;F++){let G=N[F];if(G.onLoad)G.onLoad(this)}p6.delete(this),K.manager.itemEnd(J)}function H(N){if(U(),Z)Z(N);w9.remove(`image:${J}`);let F=p6.get(this)||[];for(let G=0;G<F.length;G++){let E=F[G];if(E.onError)E.onError(N)}p6.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",H,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",H,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return w9.add(`image:${J}`,Y),K.manager.itemStart(J),Y.src=J,Y}}class QK extends K7{constructor(J){super(J)}load(J,$,Q,Z){let K=new $8,W=new _Y(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(Y){if(K.image=Y,K.needsUpdate=!0,$!==void 0)$(K)},Q,Z),K}}class X$ extends SJ{constructor(J,$=1){super();this.isLight=!0,this.type="Light",this.color=new y0(J),this.intensity=$}copy(J,$){return super.copy(J,$),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let $=super.toJSON(J);return $.object.color=this.color.getHex(),$.object.intensity=this.intensity,$}}class ZK extends X${constructor(J,$,Q){super(J,Q);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(SJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new y0($)}copy(J,$){return super.copy(J,$),this.groundColor.copy(J.groundColor),this}toJSON(J){let $=super.toJSON(J);return $.object.groundColor=this.groundColor.getHex(),$}}var EW=new QJ,CH=new _,PH=new _;class RQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new QJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Q6,this._frameExtents=new L0(1,1),this._viewportCount=1,this._viewports=[new lJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let $=this.camera;CH.setFromMatrixPosition(J.matrixWorld),$.position.copy(CH),PH.setFromMatrixPosition(J.target.matrixWorld),$.lookAt(PH),$.updateMatrixWorld(),this._updateMatrix($,this.matrix,this._frustum)}_updateMatrix(J,$,Q,Z){EW.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q.setFromProjectionMatrix(EW,J.coordinateSystem,J.reversedDepth);let K=this._frameExtents,W=Z?Z.z/K.x:1,Y=Z?Z.w/K.y:1,X=Z?Z.x/K.x:0,H=Z?Z.y/K.y:0;if(J.coordinateSystem===2001||J.reversedDepth)$.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,1,0,0,0,0,1);else $.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,0.5,0.5,0,0,0,1);$.multiply(EW)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var MZ=new _,kZ=new UJ,_9=new _;class KK extends SJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new QJ,this.projectionMatrix=new QJ,this.projectionMatrixInverse=new QJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,$){return super.copy(J,$),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(MZ,kZ,_9),_9.x===1&&_9.y===1&&_9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(MZ,kZ,_9.set(1,1,1)).invert()}updateWorldMatrix(J,$,Q=!1){if(super.updateWorldMatrix(J,$,Q),this.matrixWorld.decompose(MZ,kZ,_9),_9.x===1&&_9.y===1&&_9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(MZ,kZ,_9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var O7=new _,IH=new L0,zH=new L0;class G8 extends KK{constructor(J=50,$=1,Q=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Q,this.far=Z,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let $=0.5*this.getFilmHeight()/J;this.fov=u7*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(m$*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return u7*2*Math.atan(Math.tan(m$*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,$,Q){O7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(O7.x,O7.y).multiplyScalar(-J/O7.z),O7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(O7.x,O7.y).multiplyScalar(-J/O7.z)}getViewSize(J,$){return this.getViewBounds(J,IH,zH),$.subVectors(zH,IH)}setViewOffset(J,$,Q,Z,K,W){if(this.aspect=J/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,$=J*Math.tan(m$*0.5*this.fov)/this.zoom,Q=2*$,Z=this.aspect*Q,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:H}=W;K+=W.offsetX*Z/X,$-=W.offsetY*Q/H,Z*=W.width/X,Q*=W.height/H}let Y=this.filmOffset;if(Y!==0)K+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,$,$-Q,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}class fU extends RQ{constructor(){super(new G8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let $=this.camera,Q=u7*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,K=J.distance||$.far;if(Q!==$.fov||Z!==$.aspect||K!==$.far)$.fov=Q,$.aspect=Z,$.far=K,$.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class H$ extends X${constructor(J,$,Q=0,Z=Math.PI/3,K=0,W=2){super(J,$);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(SJ.DEFAULT_UP),this.updateMatrix(),this.target=new SJ,this.distance=Q,this.angle=Z,this.penumbra=K,this.decay=W,this.map=null,this.shadow=new fU}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let $=super.toJSON(J);if($.object.distance=this.distance,$.object.angle=this.angle,$.object.decay=this.decay,$.object.penumbra=this.penumbra,$.object.target=this.target.uuid,this.map&&this.map.isTexture)$.object.map=this.map.toJSON(J).uuid;return $.object.shadow=this.shadow.toJSON(),$}}class bU extends RQ{constructor(){super(new G8(90,1,0.5,500));this.isPointLightShadow=!0}}class W7 extends X${constructor(J,$,Q=0,Z=2){super(J,$);this.isPointLight=!0,this.type="PointLight",this.distance=Q,this.decay=Z,this.shadow=new bU}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let $=super.toJSON(J);return $.object.distance=this.distance,$.object.decay=this.decay,$.object.shadow=this.shadow.toJSON(),$}}class Y7 extends KK{constructor(J=-1,$=1,Q=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=$,this.top=Q,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,$,Q,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=Q-J,W=Q+J,Y=Z+$,X=Z-$;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=H*this.view.offsetX,W=K+H*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}class hU extends RQ{constructor(){super(new Y7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class U$ extends X${constructor(J,$){super(J,$);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(SJ.DEFAULT_UP),this.updateMatrix(),this.target=new SJ,this.shadow=new hU}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let $=super.toJSON(J);return $.object.shadow=this.shadow.toJSON(),$.object.target=this.target.uuid,$}}class w7{static extractUrlBase(J){let $=J.lastIndexOf("/");if($===-1)return"./";return J.slice(0,$+1)}static resolveURL(J,$){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test($)&&/^\//.test(J))$=$.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return $+J}}var qW=new WeakMap;class WK extends K7{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")r0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")r0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,$,Q,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=w9.get(`image-bitmap:${J}`);if(W!==void 0){if(K.manager.itemStart(J),W.then){W.then((H)=>{if(qW.has(W)===!0){if(Z)Z(qW.get(W));K.manager.itemError(J),K.manager.itemEnd(J)}else{if($)$(H);K.manager.itemEnd(J)}});return}setTimeout(function(){if($)$(W);K.manager.itemEnd(J)},0);return}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader,Y.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,Y).then(function(H){return H.blob()}).then(function(H){return createImageBitmap(H,Object.assign({},K.options,{colorSpaceConversion:"none"}))}).then(function(H){if(w9.add(`image-bitmap:${J}`,H),$)$(H);return K.manager.itemEnd(J),H}).catch(function(H){if(Z)Z(H);qW.set(X,H),w9.remove(`image-bitmap:${J}`),K.manager.itemError(J),K.manager.itemEnd(J)});w9.add(`image-bitmap:${J}`,X),K.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var m6=-90,l6=1;class wY extends SJ{constructor(J,$,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new G8(m6,l6,J,$);Z.layers=this.layers,this.add(Z);let K=new G8(m6,l6,J,$);K.layers=this.layers,this.add(K);let W=new G8(m6,l6,J,$);W.layers=this.layers,this.add(W);let Y=new G8(m6,l6,J,$);Y.layers=this.layers,this.add(Y);let X=new G8(m6,l6,J,$);X.layers=this.layers,this.add(X);let H=new G8(m6,l6,J,$);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,$=this.children.concat(),[Q,Z,K,W,Y,X]=$;for(let H of $)this.remove(H);if(J===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of $)this.add(H),H.updateMatrixWorld()}update(J,$){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,Y,X,H,U]=this.children,N=J.getRenderTarget(),F=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let O=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget(Q,0,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,K),J.setRenderTarget(Q,1,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,W),J.setRenderTarget(Q,2,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,Y),J.setRenderTarget(Q,3,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,X),J.setRenderTarget(Q,4,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,H),Q.texture.generateMipmaps=O,J.setRenderTarget(Q,5,Z),B&&J.autoClear===!1)J.clearDepth();J.render($,U),J.setRenderTarget(N,F,G),J.xr.enabled=E,Q.texture.needsPMREMUpdate=!0}}class SY extends G8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class YK{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=eG.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function eG(){if(this._document.hidden===!1)this.reset()}class jY{constructor(J,$,Q){this.binding=J,this.valueSize=Q;let Z,K,W;switch($){case"quaternion":Z=this._slerp,K=this._slerpAdditive,W=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(Q*6),this._workIndex=5;break;case"string":case"bool":Z=this._select,K=this._select,W=this._setAdditiveIdentityOther,this.buffer=Array(Q*5);break;default:Z=this._lerp,K=this._lerpAdditive,W=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(Q*5)}this._mixBufferRegion=Z,this._mixBufferRegionAdditive=K,this._setIdentity=W,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,$){let Q=this.buffer,Z=this.valueSize,K=J*Z+Z,W=this.cumulativeWeight;if(W===0){for(let Y=0;Y!==Z;++Y)Q[K+Y]=Q[Y];W=$}else{W+=$;let Y=$/W;this._mixBufferRegion(Q,K,0,Y,Z)}this.cumulativeWeight=W}accumulateAdditive(J){let $=this.buffer,Q=this.valueSize,Z=Q*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive($,Z,0,J,Q),this.cumulativeWeightAdditive+=J}apply(J){let $=this.valueSize,Q=this.buffer,Z=J*$+$,K=this.cumulativeWeight,W=this.cumulativeWeightAdditive,Y=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,K<1){let X=$*this._origIndex;this._mixBufferRegion(Q,Z,X,1-K,$)}if(W>0)this._mixBufferRegionAdditive(Q,Z,this._addIndex*$,1,$);for(let X=$,H=$+$;X!==H;++X)if(Q[X]!==Q[X+$]){Y.setValue(Q,Z);break}}saveOriginalState(){let J=this.binding,$=this.buffer,Q=this.valueSize,Z=Q*this._origIndex;J.getValue($,Z);for(let K=Q,W=Z;K!==W;++K)$[K]=$[Z+K%Q];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,$=J+this.valueSize;for(let Q=J;Q<$;Q++)this.buffer[Q]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,$=this._addIndex*this.valueSize;for(let Q=0;Q<this.valueSize;Q++)this.buffer[$+Q]=this.buffer[J+Q]}_select(J,$,Q,Z,K){if(Z>=0.5)for(let W=0;W!==K;++W)J[$+W]=J[Q+W]}_slerp(J,$,Q,Z){UJ.slerpFlat(J,$,J,$,J,Q,Z)}_slerpAdditive(J,$,Q,Z,K){let W=this._workIndex*K;UJ.multiplyQuaternionsFlat(J,W,J,$,J,Q),UJ.slerpFlat(J,$,J,$,J,W,Z)}_lerp(J,$,Q,Z,K){let W=1-Z;for(let Y=0;Y!==K;++Y){let X=$+Y;J[X]=J[X]*W+J[Q+Y]*Z}}_lerpAdditive(J,$,Q,Z,K){for(let W=0;W!==K;++W){let Y=$+W;J[Y]=J[Y]+J[Q+W]*Z}}}var yY="\\[\\]\\.:\\/",JF=new RegExp("["+yY+"]","g"),vY="[^"+yY+"]",$F="[^"+yY.replace("\\.","")+"]",QF=/((?:WC+[\/:])*)/.source.replace("WC",vY),ZF=/(WCOD+)?/.source.replace("WCOD",$F),KF=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vY),WF=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vY),YF=new RegExp("^"+QF+ZF+KF+WF+"$"),XF=["material","materials","bones","map"];class xU{constructor(J,$,Q){let Z=Q||fJ.parseTrackName($);this._targetGroup=J,this._bindings=J.subscribe_($,Z)}getValue(J,$){this.bind();let Q=this._targetGroup.nCachedObjects_,Z=this._bindings[Q];if(Z!==void 0)Z.getValue(J,$)}setValue(J,$){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=Q.length;Z!==K;++Z)Q[Z].setValue(J,$)}bind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].bind()}unbind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].unbind()}}class fJ{constructor(J,$,Q){this.path=$,this.parsedPath=Q||fJ.parseTrackName($),this.node=fJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,$,Q){if(!(J&&J.isAnimationObjectGroup))return new fJ(J,$,Q);else return new fJ.Composite(J,$,Q)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(JF,"")}static parseTrackName(J){let $=YF.exec(J);if($===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Q={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},Z=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=Q.nodeName.substring(Z+1);if(XF.indexOf(K)!==-1)Q.nodeName=Q.nodeName.substring(0,Z),Q.objectName=K}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Q}static findNode(J,$){if($===void 0||$===""||$==="."||$===-1||$===J.name||$===J.uuid)return J;if(J.skeleton){let Q=J.skeleton.getBoneByName($);if(Q!==void 0)return Q}if(J.children){let Q=function(K){for(let W=0;W<K.length;W++){let Y=K[W];if(Y.name===$||Y.uuid===$)return Y;let X=Q(Y.children);if(X)return X}return null},Z=Q(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,$){J[$]=this.targetObject[this.propertyName]}_getValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)J[$++]=Q[Z]}_getValue_arrayElement(J,$){J[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,$){this.resolvedProperty.toArray(J,$)}_setValue_direct(J,$){this.targetObject[this.propertyName]=J[$]}_setValue_direct_setNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++]}_setValue_array_setNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,$){this.resolvedProperty[this.propertyIndex]=J[$]}_setValue_arrayElement_setNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,$){this.resolvedProperty.fromArray(J,$)}_setValue_fromArray_setNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,$){this.bind(),this.getValue(J,$)}_setValue_unbound(J,$){this.bind(),this.setValue(J,$)}bind(){let J=this.node,$=this.parsedPath,Q=$.objectName,Z=$.propertyName,K=$.propertyIndex;if(!J)J=fJ.findNode(this.rootNode,$.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){r0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let H=$.objectIndex;switch(Q){case"materials":if(!J.material){ZJ("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){ZJ("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){ZJ("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){ZJ("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){ZJ("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Q]===void 0){ZJ("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Q]}if(H!==void 0){if(J[H]===void 0){ZJ("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[Z];if(W===void 0){let H=$.nodeName;ZJ("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){ZJ("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){ZJ("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}X=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))X=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}fJ.Composite=xU;fJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fJ.prototype.GetterByBindingType=[fJ.prototype._getValue_direct,fJ.prototype._getValue_array,fJ.prototype._getValue_arrayElement,fJ.prototype._getValue_toArray];fJ.prototype.SetterByBindingTypeAndVersioning=[[fJ.prototype._setValue_direct,fJ.prototype._setValue_direct_setNeedsUpdate,fJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fJ.prototype._setValue_array,fJ.prototype._setValue_array_setNeedsUpdate,fJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fJ.prototype._setValue_arrayElement,fJ.prototype._setValue_arrayElement_setNeedsUpdate,fJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fJ.prototype._setValue_fromArray,fJ.prototype._setValue_fromArray_setNeedsUpdate,fJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fY{constructor(J,$,Q=null,Z=$.blendMode){this._mixer=J,this._clip=$,this._localRoot=Q,this.blendMode=Z;let K=$.tracks,W=K.length,Y=Array(W),X={endingStart:2400,endingEnd:2400};for(let H=0;H!==W;++H){let U=K[H].createInterpolant(null);Y[H]=U,U.settings=X}this._interpolantSettings=X,this._interpolants=Y,this._propertyBindings=Array(W),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,$){return this.loop=J,this.repetitions=$,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,$,Q=!1){if(J.fadeOut($),this.fadeIn($),Q===!0){let Z=this._clip.duration,K=J._clip.duration,W=K/Z,Y=Z/K;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,W,$),this.warp(Y,1,$)}return this}crossFadeTo(J,$,Q=!1){return J.crossFadeFrom(this,$,Q)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,$,Q){let Z=this._mixer,K=Z.time,W=this.timeScale,Y=this._timeScaleInterpolant;if(Y===null)Y=Z._lendControlInterpolant(),this._timeScaleInterpolant=Y;let{parameterPositions:X,sampleValues:H}=Y;return X[0]=K,X[1]=K+Q,H[0]=J/W,H[1]=$/W,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,$,Q,Z){if(!this.enabled){this._updateWeight(J);return}let K=this._startTime;if(K!==null){let X=(J-K)*Q;if(X<0||Q===0)$=0;else this._startTime=null,$=Q*X}$*=this._updateTimeScale(J);let W=this._updateTime($),Y=this._updateWeight(J);if(Y>0){let X=this._interpolants,H=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,N=X.length;U!==N;++U)X[U].evaluate(W),H[U].accumulateAdditive(Y);break;case 2500:default:for(let U=0,N=X.length;U!==N;++U)X[U].evaluate(W),H[U].accumulate(Z,Y)}}}_updateWeight(J){let $=0;if(this.enabled){$=this.weight;let Q=this._weightInterpolant;if(Q!==null){let Z=Q.evaluate(J)[0];if($*=Z,J>Q.parameterPositions[1]){if(this.stopFading(),Z===0)this.enabled=!1}}}return this._effectiveWeight=$,$}_updateTimeScale(J){let $=0;if(!this.paused){$=this.timeScale;let Q=this._timeScaleInterpolant;if(Q!==null){let Z=Q.evaluate(J)[0];if($*=Z,J>Q.parameterPositions[1]){if($===0)this.paused=!0;else{if(this._restoreTimeScale!==null)$=this._restoreTimeScale;this.timeScale=$}this.stopWarping()}}}return this._effectiveTimeScale=$,$}_updateTime(J){let $=this._clip.duration,Q=this.loop,Z=this.time+J,K=this._loopCount,W=Q===2202;if(J===0){if(K===-1)return Z;return W&&(K&1)===1?$-Z:Z}if(Q===2200){if(K===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(Z>=$)Z=$;else if(Z<0)Z=0;else{this.time=Z;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(K===-1)if(J>=0)K=0,this._setEndings(!0,this.repetitions===0,W);else this._setEndings(this.repetitions===0,!0,W);if(Z>=$||Z<0){let Y=Math.floor(Z/$);Z-=$*Y,K+=Math.abs(Y);let X=this.repetitions-K;if(X<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;Z=J>0?$:0,this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(X===1){let H=J<0;this._setEndings(H,!H,W)}else this._setEndings(!1,!1,W);this._loopCount=K,this.time=Z,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:Y})}}else this._loopCount=K,this.time=Z;if(W&&(K&1)===1)return $-Z}return Z}_setEndings(J,$,Q){let Z=this._interpolantSettings;if(Q)Z.endingStart=2401,Z.endingEnd=2401;else{if(J)Z.endingStart=this.zeroSlopeAtStart?2401:2400;else Z.endingStart=2402;if($)Z.endingEnd=this.zeroSlopeAtEnd?2401:2400;else Z.endingEnd=2402}}_scheduleFading(J,$,Q){let Z=this._mixer,K=Z.time,W=this._weightInterpolant;if(W===null)W=Z._lendControlInterpolant(),this._weightInterpolant=W;let{parameterPositions:Y,sampleValues:X}=W;return Y[0]=K,X[0]=$,Y[1]=K+J,X[1]=Q,this}}var HF=new Float32Array(1);class LQ extends M9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,$){let Q=J._localRoot||this._root,Z=J._clip.tracks,K=Z.length,W=J._propertyBindings,Y=J._interpolants,X=Q.uuid,H=this._bindingsByRootAndName,U=H[X];if(U===void 0)U={},H[X]=U;for(let N=0;N!==K;++N){let F=Z[N],G=F.name,E=U[G];if(E!==void 0)++E.referenceCount,W[N]=E;else{if(E=W[N],E!==void 0){if(E._cacheIndex===null)++E.referenceCount,this._addInactiveBinding(E,X,G);continue}let O=$&&$._propertyBindings[N].binding.parsedPath;E=new jY(fJ.create(Q,G,O),F.ValueTypeName,F.getValueSize()),++E.referenceCount,this._addInactiveBinding(E,X,G),W[N]=E}Y[N].resultBuffer=E.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let Q=(J._localRoot||this._root).uuid,Z=J._clip.uuid,K=this._actionsByClip[Z];this._bindAction(J,K&&K.knownActions[0]),this._addInactiveAction(J,Z,Q)}let $=J._propertyBindings;for(let Q=0,Z=$.length;Q!==Z;++Q){let K=$[Q];if(K.useCount++===0)this._lendBinding(K),K.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let $=J._propertyBindings;for(let Q=0,Z=$.length;Q!==Z;++Q){let K=$[Q];if(--K.useCount===0)K.restoreOriginalState(),this._takeBackBinding(K)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let $=J._cacheIndex;return $!==null&&$<this._nActiveActions}_addInactiveAction(J,$,Q){let Z=this._actions,K=this._actionsByClip,W=K[$];if(W===void 0)W={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,K[$]=W;else{let Y=W.knownActions;J._byClipCacheIndex=Y.length,Y.push(J)}J._cacheIndex=Z.length,Z.push(J),W.actionByRoot[Q]=J}_removeInactiveAction(J){let $=this._actions,Q=$[$.length-1],Z=J._cacheIndex;Q._cacheIndex=Z,$[Z]=Q,$.pop(),J._cacheIndex=null;let K=J._clip.uuid,W=this._actionsByClip,Y=W[K],X=Y.knownActions,H=X[X.length-1],U=J._byClipCacheIndex;H._byClipCacheIndex=U,X[U]=H,X.pop(),J._byClipCacheIndex=null;let N=Y.actionByRoot,F=(J._localRoot||this._root).uuid;if(delete N[F],X.length===0)delete W[K];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let $=J._propertyBindings;for(let Q=0,Z=$.length;Q!==Z;++Q){let K=$[Q];if(--K.referenceCount===0)this._removeInactiveBinding(K)}}_lendAction(J){let $=this._actions,Q=J._cacheIndex,Z=this._nActiveActions++,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_takeBackAction(J){let $=this._actions,Q=J._cacheIndex,Z=--this._nActiveActions,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_addInactiveBinding(J,$,Q){let Z=this._bindingsByRootAndName,K=this._bindings,W=Z[$];if(W===void 0)W={},Z[$]=W;W[Q]=J,J._cacheIndex=K.length,K.push(J)}_removeInactiveBinding(J){let $=this._bindings,Q=J.binding,Z=Q.rootNode.uuid,K=Q.path,W=this._bindingsByRootAndName,Y=W[Z],X=$[$.length-1],H=J._cacheIndex;if(X._cacheIndex=H,$[H]=X,$.pop(),delete Y[K],Object.keys(Y).length===0)delete W[Z]}_lendBinding(J){let $=this._bindings,Q=J._cacheIndex,Z=this._nActiveBindings++,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_takeBackBinding(J){let $=this._bindings,Q=J._cacheIndex,Z=--this._nActiveBindings,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_lendControlInterpolant(){let J=this._controlInterpolants,$=this._nActiveControlInterpolants++,Q=J[$];if(Q===void 0)Q=new JK(new Float32Array(2),new Float32Array(2),1,HF),Q.__cacheIndex=$,J[$]=Q;return Q}_takeBackControlInterpolant(J){let $=this._controlInterpolants,Q=J.__cacheIndex,Z=--this._nActiveControlInterpolants,K=$[Z];J.__cacheIndex=Z,$[Z]=J,K.__cacheIndex=Q,$[Q]=K}clipAction(J,$,Q){let Z=$||this._root,K=Z.uuid,W=typeof J==="string"?i6.findByName(Z,J):J,Y=W!==null?W.uuid:J,X=this._actionsByClip[Y],H=null;if(Q===void 0)if(W!==null)Q=W.blendMode;else Q=2500;if(X!==void 0){let N=X.actionByRoot[K];if(N!==void 0&&N.blendMode===Q)return N;if(H=X.knownActions[0],W===null)W=H._clip}if(W===null)return null;let U=new fY(this,W,$,Q);return this._bindAction(U,H),this._addInactiveAction(U,Y,K),U}existingAction(J,$){let Q=$||this._root,Z=Q.uuid,K=typeof J==="string"?i6.findByName(Q,J):J,W=K?K.uuid:J,Y=this._actionsByClip[W];if(Y!==void 0)return Y.actionByRoot[Z]||null;return null}stopAllAction(){let J=this._actions,$=this._nActiveActions;for(let Q=$-1;Q>=0;--Q)J[Q].stop();return this}update(J){J*=this.timeScale;let $=this._actions,Q=this._nActiveActions,Z=this.time+=J,K=Math.sign(J),W=this._accuIndex^=1;for(let H=0;H!==Q;++H)$[H]._update(Z,J,K,W);let Y=this._bindings,X=this._nActiveBindings;for(let H=0;H!==X;++H)Y[H].apply(W);return this}setTime(J){this.time=0;for(let $=0;$<this._actions.length;$++)this._actions[$].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let $=this._actions,Q=J.uuid,Z=this._actionsByClip,K=Z[Q];if(K!==void 0){let W=K.knownActions;for(let Y=0,X=W.length;Y!==X;++Y){let H=W[Y];this._deactivateAction(H);let U=H._cacheIndex,N=$[$.length-1];H._cacheIndex=null,H._byClipCacheIndex=null,N._cacheIndex=U,$[U]=N,$.pop(),this._removeInactiveBindingsForAction(H)}delete Z[Q]}}uncacheRoot(J){let $=J.uuid,Q=this._actionsByClip;for(let W in Q){let Y=Q[W].actionByRoot,X=Y[$];if(X!==void 0)this._deactivateAction(X),this._removeInactiveAction(X)}let Z=this._bindingsByRootAndName,K=Z[$];if(K!==void 0)for(let W in K){let Y=K[W];Y.restoreOriginalState(),this._removeInactiveBinding(Y)}}uncacheAction(J,$){let Q=this.existingAction(J,$);if(Q!==null)this._deactivateAction(Q),this._removeInactiveAction(Q)}}class XK{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,r0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let $=performance.now();J=($-this.oldTime)/1000,this.oldTime=$,this.elapsedTime+=J}return J}}class VQ{constructor(J=1,$=0,Q=0){this.radius=J,this.phi=$,this.theta=Q}set(J,$,Q){return this.radius=J,this.phi=$,this.theta=Q,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=qJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,$,Q){if(this.radius=Math.sqrt(J*J+$*$+Q*Q),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Q),this.phi=Math.acos(qJ($/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class bY{static{bY.prototype.isMatrix2=!0}constructor(J,$,Q,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,$,Q,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,$=0){for(let Q=0;Q<4;Q++)this.elements[Q]=J[Q+$];return this}set(J,$,Q,Z){let K=this.elements;return K[0]=J,K[2]=$,K[1]=Q,K[3]=Z,this}}class HK extends M9{constructor(J,$=null){super();this.object=J,this.domElement=$,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function hY(J,$,Q,Z){let K=UF(Z);switch(Q){case 1021:return J*$;case 1028:return J*$/K.components*K.byteLength;case 1029:return J*$/K.components*K.byteLength;case 1030:return J*$*2/K.components*K.byteLength;case 1031:return J*$*2/K.components*K.byteLength;case 1022:return J*$*3/K.components*K.byteLength;case 1023:return J*$*4/K.components*K.byteLength;case 1033:return J*$*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max($,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max($,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor(($+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor(($+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor(($+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor(($+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor(($+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor(($+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor(($+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor(($+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor(($+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor(($+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor(($+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor(($+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor(($+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil($/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil($/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil($/4)*16}throw Error(`Unable to determine texture byte length for ${Q} format.`)}function UF(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)r0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function Y5(){let J=null,$=!1,Q=null,Z=null;function K(W,Y){Z=J.requestAnimationFrame(K),Q(W,Y)}return{start:function(){if($===!0)return;if(Q===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),$=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);$=!1},setAnimationLoop:function(W){Q=W},setContext:function(W){J=W}}}function NF(J){let $=new WeakMap;function Q(X,H){let{array:U,usage:N}=X,F=U.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,U,N),X.onUploadCallback();let E;if(U instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)E=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)E=J.SHORT;else if(U instanceof Uint32Array)E=J.UNSIGNED_INT;else if(U instanceof Int32Array)E=J.INT;else if(U instanceof Int8Array)E=J.BYTE;else if(U instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:E,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:F}}function Z(X,H,U){let{array:N,updateRanges:F}=H;if(J.bindBuffer(U,X),F.length===0)J.bufferSubData(U,0,N);else{F.sort((E,O)=>E.start-O.start);let G=0;for(let E=1;E<F.length;E++){let O=F[G],B=F[E];if(B.start<=O.start+O.count+1)O.count=Math.max(O.count,B.start+B.count-O.start);else++G,F[G]=B}F.length=G+1;for(let E=0,O=F.length;E<O;E++){let B=F[E];J.bufferSubData(U,B.start*N.BYTES_PER_ELEMENT,N,B.start,B.count)}H.clearUpdateRanges()}H.onUploadCallback()}function K(X){if(X.isInterleavedBufferAttribute)X=X.data;return $.get(X)}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;let H=$.get(X);if(H)J.deleteBuffer(H.buffer),$.delete(X)}function Y(X,H){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let N=$.get(X);if(!N||N.version<X.version)$.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=$.get(X);if(U===void 0)$.set(X,Q(X,H));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,H),U.version=X.version}}return{get:K,remove:W,update:Y}}var GF=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FF=`#ifdef USE_ALPHAHASH
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
#endif`,EF=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qF=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OF=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RF=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LF=`#ifdef USE_AOMAP
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
#endif`,VF=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BF=`#ifdef USE_BATCHING
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
#endif`,DF=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MF=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kF=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CF=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PF=`#ifdef USE_IRIDESCENCE
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
#endif`,IF=`#ifdef USE_BUMPMAP
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
#endif`,zF=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_F=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,SF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vF=`#define PI 3.141592653589793
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
} // validated`,fF=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bF=`vec3 transformedNormal = objectNormal;
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
#endif`,hF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mF="gl_FragColor = linearToOutputTexel( gl_FragColor );",lF=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uF=`#ifdef USE_ENVMAP
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
#endif`,dF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cF=`#ifdef USE_ENVMAP
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
#endif`,nF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sF=`#ifdef USE_ENVMAP
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
#endif`,iF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tF=`#ifdef USE_GRADIENTMAP
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
}`,eF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Z1=`#ifdef USE_ENVMAP
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
#endif`,K1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H1=`PhysicalMaterial material;
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
#endif`,U1=`uniform sampler2D dfgLUT;
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
}`,N1=`
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
#endif`,G1=`#if defined( RE_IndirectDiffuse )
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
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M1=`#if defined( USE_POINTS_UV )
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
#endif`,k1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`#ifdef USE_MORPHTARGETS
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
#endif`,T1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,v1=`#ifdef USE_NORMALMAP
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
#endif`,f1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a1=`float getShadowMask() {
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
}`,r1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,e1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JE=`#ifdef USE_SKINNING
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
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`#include <common>
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
}`,VE=`#if DEPTH_PACKING == 3200
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
}`,BE=`#define DISTANCE
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
}`,DE=`#define DISTANCE
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`uniform float scale;
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
}`,PE=`uniform vec3 diffuse;
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
}`,IE=`#include <common>
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
}`,zE=`uniform vec3 diffuse;
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
}`,AE=`#define LAMBERT
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
}`,TE=`#define LAMBERT
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
}`,_E=`#define MATCAP
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
}`,wE=`#define MATCAP
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
}`,SE=`#define NORMAL
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
}`,jE=`#define NORMAL
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
}`,yE=`#define PHONG
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
}`,vE=`#define PHONG
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
}`,fE=`#define STANDARD
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
}`,bE=`#define STANDARD
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
}`,hE=`#define TOON
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
}`,xE=`#define TOON
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
}`,gE=`uniform float size;
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
}`,pE=`uniform vec3 diffuse;
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
}`,mE=`#include <common>
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
}`,lE=`uniform vec3 color;
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
}`,uE=`uniform float rotation;
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
}`,dE=`uniform vec3 diffuse;
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
}`,BJ={alphahash_fragment:GF,alphahash_pars_fragment:FF,alphamap_fragment:EF,alphamap_pars_fragment:qF,alphatest_fragment:OF,alphatest_pars_fragment:RF,aomap_fragment:LF,aomap_pars_fragment:VF,batching_pars_vertex:BF,batching_vertex:DF,begin_vertex:MF,beginnormal_vertex:kF,bsdfs:CF,iridescence_fragment:PF,bumpmap_pars_fragment:IF,clipping_planes_fragment:zF,clipping_planes_pars_fragment:AF,clipping_planes_pars_vertex:TF,clipping_planes_vertex:_F,color_fragment:wF,color_pars_fragment:SF,color_pars_vertex:jF,color_vertex:yF,common:vF,cube_uv_reflection_fragment:fF,defaultnormal_vertex:bF,displacementmap_pars_vertex:hF,displacementmap_vertex:xF,emissivemap_fragment:gF,emissivemap_pars_fragment:pF,colorspace_fragment:mF,colorspace_pars_fragment:lF,envmap_fragment:uF,envmap_common_pars_fragment:dF,envmap_pars_fragment:cF,envmap_pars_vertex:nF,envmap_physical_pars_fragment:Z1,envmap_vertex:sF,fog_vertex:iF,fog_pars_vertex:oF,fog_fragment:aF,fog_pars_fragment:rF,gradientmap_pars_fragment:tF,lightmap_pars_fragment:eF,lights_lambert_fragment:J1,lights_lambert_pars_fragment:$1,lights_pars_begin:Q1,lights_toon_fragment:K1,lights_toon_pars_fragment:W1,lights_phong_fragment:Y1,lights_phong_pars_fragment:X1,lights_physical_fragment:H1,lights_physical_pars_fragment:U1,lights_fragment_begin:N1,lights_fragment_maps:G1,lights_fragment_end:F1,lightprobes_pars_fragment:E1,logdepthbuf_fragment:q1,logdepthbuf_pars_fragment:O1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:L1,map_fragment:V1,map_pars_fragment:B1,map_particle_fragment:D1,map_particle_pars_fragment:M1,metalnessmap_fragment:k1,metalnessmap_pars_fragment:C1,morphinstance_vertex:P1,morphcolor_vertex:I1,morphnormal_vertex:z1,morphtarget_pars_vertex:A1,morphtarget_vertex:T1,normal_fragment_begin:_1,normal_fragment_maps:w1,normal_pars_fragment:S1,normal_pars_vertex:j1,normal_vertex:y1,normalmap_pars_fragment:v1,clearcoat_normal_fragment_begin:f1,clearcoat_normal_fragment_maps:b1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:x1,opaque_fragment:g1,packing:p1,premultiplied_alpha_fragment:m1,project_vertex:l1,dithering_fragment:u1,dithering_pars_fragment:d1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:n1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:i1,shadowmap_vertex:o1,shadowmask_pars_fragment:a1,skinbase_vertex:r1,skinning_pars_vertex:t1,skinning_vertex:e1,skinnormal_vertex:JE,specularmap_fragment:$E,specularmap_pars_fragment:QE,tonemapping_fragment:ZE,tonemapping_pars_fragment:KE,transmission_fragment:WE,transmission_pars_fragment:YE,uv_pars_fragment:XE,uv_pars_vertex:HE,uv_vertex:UE,worldpos_vertex:NE,background_vert:GE,background_frag:FE,backgroundCube_vert:EE,backgroundCube_frag:qE,cube_vert:OE,cube_frag:RE,depth_vert:LE,depth_frag:VE,distance_vert:BE,distance_frag:DE,equirect_vert:ME,equirect_frag:kE,linedashed_vert:CE,linedashed_frag:PE,meshbasic_vert:IE,meshbasic_frag:zE,meshlambert_vert:AE,meshlambert_frag:TE,meshmatcap_vert:_E,meshmatcap_frag:wE,meshnormal_vert:SE,meshnormal_frag:jE,meshphong_vert:yE,meshphong_frag:vE,meshphysical_vert:fE,meshphysical_frag:bE,meshtoon_vert:hE,meshtoon_frag:xE,points_vert:gE,points_frag:pE,shadow_vert:mE,shadow_frag:lE,sprite_vert:uE,sprite_frag:dE},p0={common:{diffuse:{value:new y0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new HJ},alphaMap:{value:null},alphaMapTransform:{value:new HJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new HJ}},envmap:{envMap:{value:null},envMapRotation:{value:new HJ},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new HJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new HJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new HJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new HJ},normalScale:{value:new L0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new HJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new HJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new HJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new HJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new y0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new _},probesMax:{value:new _},probesResolution:{value:new _}},points:{diffuse:{value:new y0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new HJ},alphaTest:{value:0},uvTransform:{value:new HJ}},sprite:{diffuse:{value:new y0(16777215)},opacity:{value:1},center:{value:new L0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new HJ},alphaMap:{value:null},alphaMapTransform:{value:new HJ},alphaTest:{value:0}}},h9={basic:{uniforms:z8([p0.common,p0.specularmap,p0.envmap,p0.aomap,p0.lightmap,p0.fog]),vertexShader:BJ.meshbasic_vert,fragmentShader:BJ.meshbasic_frag},lambert:{uniforms:z8([p0.common,p0.specularmap,p0.envmap,p0.aomap,p0.lightmap,p0.emissivemap,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.fog,p0.lights,{emissive:{value:new y0(0)},envMapIntensity:{value:1}}]),vertexShader:BJ.meshlambert_vert,fragmentShader:BJ.meshlambert_frag},phong:{uniforms:z8([p0.common,p0.specularmap,p0.envmap,p0.aomap,p0.lightmap,p0.emissivemap,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.fog,p0.lights,{emissive:{value:new y0(0)},specular:{value:new y0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:BJ.meshphong_vert,fragmentShader:BJ.meshphong_frag},standard:{uniforms:z8([p0.common,p0.envmap,p0.aomap,p0.lightmap,p0.emissivemap,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.roughnessmap,p0.metalnessmap,p0.fog,p0.lights,{emissive:{value:new y0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:BJ.meshphysical_vert,fragmentShader:BJ.meshphysical_frag},toon:{uniforms:z8([p0.common,p0.aomap,p0.lightmap,p0.emissivemap,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.gradientmap,p0.fog,p0.lights,{emissive:{value:new y0(0)}}]),vertexShader:BJ.meshtoon_vert,fragmentShader:BJ.meshtoon_frag},matcap:{uniforms:z8([p0.common,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.fog,{matcap:{value:null}}]),vertexShader:BJ.meshmatcap_vert,fragmentShader:BJ.meshmatcap_frag},points:{uniforms:z8([p0.points,p0.fog]),vertexShader:BJ.points_vert,fragmentShader:BJ.points_frag},dashed:{uniforms:z8([p0.common,p0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:BJ.linedashed_vert,fragmentShader:BJ.linedashed_frag},depth:{uniforms:z8([p0.common,p0.displacementmap]),vertexShader:BJ.depth_vert,fragmentShader:BJ.depth_frag},normal:{uniforms:z8([p0.common,p0.bumpmap,p0.normalmap,p0.displacementmap,{opacity:{value:1}}]),vertexShader:BJ.meshnormal_vert,fragmentShader:BJ.meshnormal_frag},sprite:{uniforms:z8([p0.sprite,p0.fog]),vertexShader:BJ.sprite_vert,fragmentShader:BJ.sprite_frag},background:{uniforms:{uvTransform:{value:new HJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:BJ.background_vert,fragmentShader:BJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new HJ}},vertexShader:BJ.backgroundCube_vert,fragmentShader:BJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:BJ.cube_vert,fragmentShader:BJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:BJ.equirect_vert,fragmentShader:BJ.equirect_frag},distance:{uniforms:z8([p0.common,p0.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:BJ.distance_vert,fragmentShader:BJ.distance_frag},shadow:{uniforms:z8([p0.lights,p0.fog,{color:{value:new y0(0)},opacity:{value:1}}]),vertexShader:BJ.shadow_vert,fragmentShader:BJ.shadow_frag}};h9.physical={uniforms:z8([h9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new HJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new HJ},clearcoatNormalScale:{value:new L0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new HJ},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new HJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new HJ},sheen:{value:0},sheenColor:{value:new y0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new HJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new HJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new HJ},transmissionSamplerSize:{value:new L0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new HJ},attenuationDistance:{value:0},attenuationColor:{value:new y0(0)},specularColor:{value:new y0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new HJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new HJ},anisotropyVector:{value:new L0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new HJ}}]),vertexShader:BJ.meshphysical_vert,fragmentShader:BJ.meshphysical_frag};var UK={r:0,b:0,g:0},cE=new QJ,X5=new HJ;X5.set(-1,0,0,0,1,0,0,0,1);function nE(J,$,Q,Z,K,W){let Y=new y0(0),X=K===!0?0:1,H,U,N=null,F=0,G=null;function E(M){let k=M.isScene===!0?M.background:null;if(k&&k.isTexture){let V=M.backgroundBlurriness>0;k=$.get(k,V)}return k}function O(M){let k=!1,V=E(M);if(V===null)R(Y,X);else if(V&&V.isColor)R(V,1),k=!0;let L=J.xr.getEnvironmentBlendMode();if(L==="additive")Q.buffers.color.setClear(0,0,0,1,W);else if(L==="alpha-blend")Q.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||k)Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(M,k){let V=E(k);if(V&&(V.isCubeTexture||V.mapping===QQ)){if(U===void 0)U=new I0(new _J(1,1,1),new J8({name:"BackgroundCubeMaterial",uniforms:Y6(h9.backgroundCube.uniforms),vertexShader:h9.backgroundCube.vertexShader,fragmentShader:h9.backgroundCube.fragmentShader,side:D8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(L,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(cE.makeRotationFromEuler(k.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(X5);if(U.material.toneMapped=RJ.getTransfer(V.colorSpace)!==uJ,N!==V||F!==V.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=V,F=V.version,G=J.toneMapping;U.layers.enableAll(),M.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new I0(new VJ(2,2),new J8({name:"BackgroundMaterial",uniforms:Y6(h9.background.uniforms),vertexShader:h9.background.vertexShader,fragmentShader:h9.background.fragmentShader,side:M7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,H.material.toneMapped=RJ.getTransfer(V.colorSpace)!==uJ,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),N!==V||F!==V.version||G!==J.toneMapping)H.material.needsUpdate=!0,N=V,F=V.version,G=J.toneMapping;H.layers.enableAll(),M.unshift(H,H.geometry,H.material,0,0,null)}}function R(M,k){M.getRGB(UK,MY(J)),Q.buffers.color.setClear(UK.r,UK.g,UK.b,k,W)}function q(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return Y},setClearColor:function(M,k=1){Y.set(M),X=k,R(Y,X)},getClearAlpha:function(){return X},setClearAlpha:function(M){X=M,R(Y,X)},render:O,addToRenderList:B,dispose:q}}function sE(J,$){let Q=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=G(null),W=K,Y=!1;function X(f,n,X0,v,y){let u=!1,b=F(f,v,X0,n);if(W!==b)W=b,U(W.object);if(u=E(f,v,X0,y),u)O(f,v,X0,y);if(y!==null)$.update(y,J.ELEMENT_ARRAY_BUFFER);if(u||Y){if(Y=!1,V(f,n,X0,v),y!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,$.get(y).buffer)}}function H(){return J.createVertexArray()}function U(f){return J.bindVertexArray(f)}function N(f){return J.deleteVertexArray(f)}function F(f,n,X0,v){let y=v.wireframe===!0,u=Z[n.id];if(u===void 0)u={},Z[n.id]=u;let b=f.isInstancedMesh===!0?f.id:0,r=u[b];if(r===void 0)r={},u[b]=r;let m=r[X0.id];if(m===void 0)m={},r[X0.id]=m;let e=m[y];if(e===void 0)e=G(H()),m[y]=e;return e}function G(f){let n=[],X0=[],v=[];for(let y=0;y<Q;y++)n[y]=0,X0[y]=0,v[y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:n,enabledAttributes:X0,attributeDivisors:v,object:f,attributes:{},index:null}}function E(f,n,X0,v){let y=W.attributes,u=n.attributes,b=0,r=X0.getAttributes();for(let m in r)if(r[m].location>=0){let Y0=y[m],j=u[m];if(j===void 0){if(m==="instanceMatrix"&&f.instanceMatrix)j=f.instanceMatrix;if(m==="instanceColor"&&f.instanceColor)j=f.instanceColor}if(Y0===void 0)return!0;if(Y0.attribute!==j)return!0;if(j&&Y0.data!==j.data)return!0;b++}if(W.attributesNum!==b)return!0;if(W.index!==v)return!0;return!1}function O(f,n,X0,v){let y={},u=n.attributes,b=0,r=X0.getAttributes();for(let m in r)if(r[m].location>=0){let Y0=u[m];if(Y0===void 0){if(m==="instanceMatrix"&&f.instanceMatrix)Y0=f.instanceMatrix;if(m==="instanceColor"&&f.instanceColor)Y0=f.instanceColor}let j={};if(j.attribute=Y0,Y0&&Y0.data)j.data=Y0.data;y[m]=j,b++}W.attributes=y,W.attributesNum=b,W.index=v}function B(){let f=W.newAttributes;for(let n=0,X0=f.length;n<X0;n++)f[n]=0}function R(f){q(f,0)}function q(f,n){let{newAttributes:X0,enabledAttributes:v,attributeDivisors:y}=W;if(X0[f]=1,v[f]===0)J.enableVertexAttribArray(f),v[f]=1;if(y[f]!==n)J.vertexAttribDivisor(f,n),y[f]=n}function M(){let{newAttributes:f,enabledAttributes:n}=W;for(let X0=0,v=n.length;X0<v;X0++)if(n[X0]!==f[X0])J.disableVertexAttribArray(X0),n[X0]=0}function k(f,n,X0,v,y,u,b){if(b===!0)J.vertexAttribIPointer(f,n,X0,y,u);else J.vertexAttribPointer(f,n,X0,v,y,u)}function V(f,n,X0,v){B();let y=v.attributes,u=X0.getAttributes(),b=n.defaultAttributeValues;for(let r in u){let m=u[r];if(m.location>=0){let e=y[r];if(e===void 0){if(r==="instanceMatrix"&&f.instanceMatrix)e=f.instanceMatrix;if(r==="instanceColor"&&f.instanceColor)e=f.instanceColor}if(e!==void 0){let{normalized:Y0,itemSize:j}=e,o=$.get(e);if(o===void 0)continue;let{buffer:G0,type:t,bytesPerElement:x}=o,T=t===J.INT||t===J.UNSIGNED_INT||e.gpuType===CW;if(e.isInterleavedBufferAttribute){let h=e.data,l=h.stride,Z0=e.offset;if(h.isInstancedInterleavedBuffer){for(let J0=0;J0<m.locationSize;J0++)q(m.location+J0,h.meshPerAttribute);if(f.isInstancedMesh!==!0&&v._maxInstanceCount===void 0)v._maxInstanceCount=h.meshPerAttribute*h.count}else for(let J0=0;J0<m.locationSize;J0++)R(m.location+J0);J.bindBuffer(J.ARRAY_BUFFER,G0);for(let J0=0;J0<m.locationSize;J0++)k(m.location+J0,j/m.locationSize,t,Y0,l*x,(Z0+j/m.locationSize*J0)*x,T)}else{if(e.isInstancedBufferAttribute){for(let h=0;h<m.locationSize;h++)q(m.location+h,e.meshPerAttribute);if(f.isInstancedMesh!==!0&&v._maxInstanceCount===void 0)v._maxInstanceCount=e.meshPerAttribute*e.count}else for(let h=0;h<m.locationSize;h++)R(m.location+h);J.bindBuffer(J.ARRAY_BUFFER,G0);for(let h=0;h<m.locationSize;h++)k(m.location+h,j/m.locationSize,t,Y0,j*x,j/m.locationSize*h*x,T)}}else if(b!==void 0){let Y0=b[r];if(Y0!==void 0)switch(Y0.length){case 2:J.vertexAttrib2fv(m.location,Y0);break;case 3:J.vertexAttrib3fv(m.location,Y0);break;case 4:J.vertexAttrib4fv(m.location,Y0);break;default:J.vertexAttrib1fv(m.location,Y0)}}}}M()}function L(){I();for(let f in Z){let n=Z[f];for(let X0 in n){let v=n[X0];for(let y in v){let u=v[y];for(let b in u)N(u[b].object),delete u[b];delete v[y]}}delete Z[f]}}function P(f){if(Z[f.id]===void 0)return;let n=Z[f.id];for(let X0 in n){let v=n[X0];for(let y in v){let u=v[y];for(let b in u)N(u[b].object),delete u[b];delete v[y]}}delete Z[f.id]}function A(f){for(let n in Z){let X0=Z[n];for(let v in X0){let y=X0[v];if(y[f.id]===void 0)continue;let u=y[f.id];for(let b in u)N(u[b].object),delete u[b];delete y[f.id]}}}function D(f){for(let n in Z){let X0=Z[n],v=f.isInstancedMesh===!0?f.id:0,y=X0[v];if(y===void 0)continue;for(let u in y){let b=y[u];for(let r in b)N(b[r].object),delete b[r];delete y[u]}if(delete X0[v],Object.keys(X0).length===0)delete Z[n]}}function I(){if(d(),Y=!0,W===K)return;W=K,U(W.object)}function d(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:X,reset:I,resetDefaultState:d,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:D,releaseStatesOfProgram:A,initAttributes:B,enableAttribute:R,disableUnusedAttributes:M}}function iE(J,$,Q){let Z;function K(H){Z=H}function W(H,U){J.drawArrays(Z,H,U),Q.update(U,Z,1)}function Y(H,U,N){if(N===0)return;J.drawArraysInstanced(Z,H,U,N),Q.update(U,Z,N)}function X(H,U,N){if(N===0)return;$.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,U,0,N);let G=0;for(let E=0;E<N;E++)G+=U[E];Q.update(G,Z,1)}this.setMode=K,this.render=W,this.renderInstances=Y,this.renderMultiDraw=X}function oE(J,$,Q,Z){let K;function W(){if(K!==void 0)return K;if($.has("EXT_texture_filter_anisotropic")===!0){let A=$.get("EXT_texture_filter_anisotropic");K=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function Y(A){if(A!==j9&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(A){let D=A===L8&&($.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float"));if(A!==D9&&A!==e9&&!D&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Q.precision!==void 0?Q.precision:"highp",N=H(U);if(N!==U)r0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let F=Q.logarithmicDepthBuffer===!0,G=Q.reversedDepthBuffer===!0&&$.has("EXT_clip_control");if(Q.reversedDepthBuffer===!0&&G===!1)r0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),q=J.getParameter(J.MAX_VERTEX_ATTRIBS),M=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),k=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),L=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:G,maxTextures:E,maxVertexTextures:O,maxTextureSize:B,maxCubemapSize:R,maxAttributes:q,maxVertexUniforms:M,maxVaryings:k,maxFragmentUniforms:V,maxSamples:L,samples:P}}function aE(J){let $=this,Q=null,Z=0,K=!1,W=!1,Y=new e8,X=new HJ,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(F,G){let E=F.length!==0||G||Z!==0||K;return K=G,Z=F.length,E},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,G){Q=N(F,G,0)},this.setState=function(F,G,E){let{clippingPlanes:O,clipIntersection:B,clipShadows:R}=F,q=J.get(F);if(!K||O===null||O.length===0||W&&!R)if(W)N(null);else U();else{let M=W?0:Z,k=M*4,V=q.clippingState||null;H.value=V,V=N(O,G,k,E);for(let L=0;L!==k;++L)V[L]=Q[L];q.clippingState=V,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=M}};function U(){if(H.value!==Q)H.value=Q,H.needsUpdate=Z>0;$.numPlanes=Z,$.numIntersection=0}function N(F,G,E,O){let B=F!==null?F.length:0,R=null;if(B!==0){if(R=H.value,O!==!0||R===null){let q=E+B*4,M=G.matrixWorldInverse;if(X.getNormalMatrix(M),R===null||R.length<q)R=new Float32Array(q);for(let k=0,V=E;k!==B;++k,V+=4)Y.copy(F[k]).applyMatrix4(M,X),Y.normal.toArray(R,V),R[V+3]=Y.constant}H.value=R,H.needsUpdate=!0}return $.numPlanes=B,$.numIntersection=0,R}}var G$=4,rE=6,tE=20,eE=256,BQ=new Y7,gU=new y0,xY=null,gY=0,pY=0,mY=!1,Jq=new _,H6=new _;class CQ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,$=0,Q=0.1,Z=100,K={}){let{size:W=256,position:Y=Jq}=K;xY=this._renderer.getRenderTarget(),gY=this._renderer.getActiveCubeFace(),pY=this._renderer.getActiveMipmapLevel(),mY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,Q,Z,X,Y),$>0)this._blur(X,0,0,$);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,$=null){return this._fromTexture(J,$)}fromCubemap(J,$=null){return this._fromTexture(J,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=lU(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=mU(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(xY,gY,pY),this._renderer.xr.enabled=mY,J.scissorTest=!1,N$(J,0,0,J.width,J.height)}_fromTexture(J,$){if(J.mapping===r6||J.mapping===s7)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);xY=this._renderer.getRenderTarget(),gY=this._renderer.getActiveCubeFace(),pY=this._renderer.getActiveMipmapLevel(),mY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Q=$||this._allocateTargets();return this._textureToCubeUV(J,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),$=4*this._cubeSize,Q={magFilter:X8,minFilter:X8,generateMipmaps:!1,type:L8,format:j9,colorSpace:d8,depthBuffer:!1},Z=pU(J,$,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==$){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=pU(J,$,Q);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$q(K)),this._blurMaterial=Zq(K,J,$),this._ggxMaterial=Qq(K,J,$)}return Z}_compileMaterial(J){let $=new I0(new bJ,J);this._renderer.compile($,BQ)}_sceneToCubeUV(J,$,Q,Z,K){let X=new G8(90,1,$,Q),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,F=N.autoClear,G=N.toneMapping;if(N.getClearColor(gU),N.toneMapping=V9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new I0(new _J,new xJ({name:"PMREM.Background",side:D8,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,B=O.material,R=!1,q=J.background;if(q){if(q.isColor)B.color.copy(q),J.background=null,R=!0}else B.color.copy(gU),R=!0;for(let M=0;M<6;M++){let k=M%3;if(k===0)X.up.set(0,H[M],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x+U[M],K.y,K.z);else if(k===1)X.up.set(0,0,H[M]),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y+U[M],K.z);else X.up.set(0,H[M],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y,K.z+U[M]);let V=this._cubeSize;if(N$(Z,k*V,M>2?V:0,V,V),N.setRenderTarget(Z),R)N.render(O,X);N.render(J,X)}N.toneMapping=G,N.autoClear=F,J.background=q}_textureToCubeUV(J,$){let Q=this._renderer,Z=J.mapping===r6||J.mapping===s7;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=lU();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=mU();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let Y=K.uniforms;Y.envMap.value=J;let X=this._cubeSize;N$($,0,0,3*X,2*X),Q.setRenderTarget($),Q.render(W,BQ)}_applyPMREM(J){let $=this._renderer,Q=$.autoClear;$.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);$.autoClear=Q}_applyGGXFilter(J,$,Q){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,Y=this._lodMeshes[Q];Y.material=W;let X=W.uniforms,H=Q/(this._lodMeshes.length-1),U=$/(this._lodMeshes.length-1),N=Math.sqrt(H*H-U*U),F=H*1.25,G=N*F,{_lodMax:E}=this,O=this._sizeLods[Q],B=3*O*(Q>E-G$?Q-E+G$:0),R=4*(this._cubeSize-O);X.envMap.value=J.texture,X.roughness.value=G,X.mipInt.value=E-$,N$(K,B,R,3*O,2*O),Z.setRenderTarget(K),Z.render(Y,BQ),X.envMap.value=K.texture,X.roughness.value=0,X.mipInt.value=E-Q,N$(J,B,R,3*O,2*O),Z.setRenderTarget(J),Z.render(Y,BQ)}_blur(J,$,Q,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,$,Q,W),this._blurPass(K,J,Q,Q,W)}_blurPass(J,$,Q,Z,K){let W=this._renderer,Y=this._blurMaterial,X=this._lodMeshes[Z];X.material=Y;let H=Y.uniforms;H.envMap.value=J.texture,H.sigma.value=K,H.mipInt.value=this._lodMax-Q;let U=this._sizeLods[Z],N=3*U*(Z>this._lodMax-G$?Z-this._lodMax+G$:0),F=4*(this._cubeSize-U);N$($,N,F,3*U,2*U),W.setRenderTarget($),W.render(X,BQ)}}function $q(J){let $=[],Q=[],Z=J,K=J-G$+1+rE;for(let W=0;W<K;W++){let Y=Math.pow(2,Z);$.push(Y);let X=1/(Y-2),H=-X,U=1+X,N=[H,H,U,H,U,U,H,H,U,U,H,U],F=6,G=6,E=3,O=new Float32Array(E*G*F),B=new Float32Array(E*G*F);for(let q=0;q<F;q++){let M=q%3*2/3-1,k=q>2?0:-1,V=[M,k,0,M+0.6666666666666666,k,0,M+0.6666666666666666,k+1,0,M,k,0,M+0.6666666666666666,k+1,0,M,k+1,0];O.set(V,E*G*q);for(let L=0;L<G;L++){let P=N[L*2]*2-1,A=N[L*2+1]*2-1;if(q===0)H6.set(1,A,P);else if(q===1)H6.set(-P,1,-A);else if(q===2)H6.set(-P,A,1);else if(q===3)H6.set(-1,A,-P);else if(q===4)H6.set(-P,-1,A);else H6.set(P,A,-1);H6.toArray(B,(q*G+L)*E)}}let R=new bJ;if(R.setAttribute("position",new tJ(O,E)),R.setAttribute("outputDirection",new tJ(B,E)),Q.push(new I0(R,null)),Z>G$)Z--}return{lodMeshes:Q,sizeLods:$}}function pU(J,$,Q){let Z=new Z8(J,$,Q);return Z.texture.mapping=QQ,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function N$(J,$,Q,Z,K){J.viewport.set($,Q,Z,K),J.scissor.set($,Q,Z,K)}function Qq(J,$,Q){return new J8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eE,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:GK(),fragmentShader:`

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
		`,blending:$9,depthTest:!1,depthWrite:!1})}function Zq(J,$,Q){return new J8({name:"SphericalGaussianBlur",defines:{SAMPLES:tE,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:GK(),fragmentShader:`

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
		`,blending:$9,depthTest:!1,depthWrite:!1})}function mU(){return new J8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:GK(),fragmentShader:`

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
		`,blending:$9,depthTest:!1,depthWrite:!1})}function lU(){return new J8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:GK(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$9,depthTest:!1,depthWrite:!1})}function GK(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class nY extends Z8{constructor(J=1,$={}){super(J,J,$);this.isWebGLCubeRenderTarget=!0;let Q={width:J,height:J,depth:1},Z=[Q,Q,Q,Q,Q,Q];this.texture=new sZ(Z),this._setTextureOptions($),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new _J(5,5,5),K=new J8({name:"CubemapFromEquirect",uniforms:Y6(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:D8,blending:$9});K.uniforms.tEquirect.value=$;let W=new I0(Z,K),Y=$.minFilter;if($.minFilter===Q9)$.minFilter=X8;return new wY(1,10,this).update(J,W),$.minFilter=Y,W.geometry.dispose(),W.material.dispose(),this}clear(J,$=!0,Q=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear($,Q,Z);J.setRenderTarget(K)}}function Kq(J){let $=new WeakMap,Q=new WeakMap,Z=null;function K(G,E=!1){if(G===null||G===void 0)return null;if(E)return Y(G);return W(G)}function W(G){if(G&&G.isTexture){let E=G.mapping;if(E===AZ||E===TZ)if($.has(G)){let O=$.get(G).texture;return X(O,G.mapping)}else{let O=G.image;if(O&&O.height>0){let B=new nY(O.height);return B.fromEquirectangularTexture(J,G),$.set(G,B),G.addEventListener("dispose",U),X(B.texture,G.mapping)}else return null}}return G}function Y(G){if(G&&G.isTexture){let E=G.mapping,O=E===AZ||E===TZ,B=E===r6||E===s7;if(O||B){let R=Q.get(G),q=R!==void 0?R.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==q){if(Z===null)Z=new CQ(J);return R=O?Z.fromEquirectangular(G,R):Z.fromCubemap(G,R),R.texture.pmremVersion=G.pmremVersion,Q.set(G,R),R.texture}else if(R!==void 0)return R.texture;else{let M=G.image;if(O&&M&&M.height>0||B&&M&&H(M)){if(Z===null)Z=new CQ(J);return R=O?Z.fromEquirectangular(G):Z.fromCubemap(G),R.texture.pmremVersion=G.pmremVersion,Q.set(G,R),G.addEventListener("dispose",N),R.texture}else return null}}}return G}function X(G,E){if(E===AZ)G.mapping=r6;else if(E===TZ)G.mapping=s7;return G}function H(G){let E=0,O=6;for(let B=0;B<O;B++)if(G[B]!==void 0)E++;return E===O}function U(G){let E=G.target;E.removeEventListener("dispose",U);let O=$.get(E);if(O!==void 0)$.delete(E),O.dispose()}function N(G){let E=G.target;E.removeEventListener("dispose",N);let O=Q.get(E);if(O!==void 0)Q.delete(E),O.dispose()}function F(){if($=new WeakMap,Q=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function Wq(J){let $={};function Q(Z){if($[Z]!==void 0)return $[Z];let K=J.getExtension(Z);return $[Z]=K,K}return{has:function(Z){return Q(Z)!==null},init:function(){Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance"),Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture"),Q("WEBGL_render_shared_exponent")},get:function(Z){let K=Q(Z);if(K===null)l7("WebGLRenderer: "+Z+" extension not supported.");return K}}}function Yq(J,$,Q,Z){let K={},W=new WeakMap;function Y(F){let G=F.target;if(G.index!==null)$.remove(G.index);for(let O in G.attributes)$.remove(G.attributes[O]);G.removeEventListener("dispose",Y),delete K[G.id];let E=W.get(G);if(E)$.remove(E),W.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;Q.memory.geometries--}function X(F,G){if(K[G.id]===!0)return G;return G.addEventListener("dispose",Y),K[G.id]=!0,Q.memory.geometries++,G}function H(F){let G=F.attributes;for(let E in G)$.update(G[E],J.ARRAY_BUFFER)}function U(F){let G=[],E=F.index,O=F.attributes.position,B=0;if(O===void 0)return;if(E!==null){let M=E.array;B=E.version;for(let k=0,V=M.length;k<V;k+=3){let L=M[k+0],P=M[k+1],A=M[k+2];G.push(L,P,P,A,A,L)}}else{let M=O.array;B=O.version;for(let k=0,V=M.length/3-1;k<V;k+=3){let L=k+0,P=k+1,A=k+2;G.push(L,P,P,A,A,L)}}let R=new(O.count>=65535?uZ:lZ)(G,1);R.version=B;let q=W.get(F);if(q)$.remove(q);W.set(F,R)}function N(F){let G=W.get(F);if(G){let E=F.index;if(E!==null){if(G.version<E.version)U(F)}}else U(F);return W.get(F)}return{get:X,update:H,getWireframeAttribute:N}}function Xq(J,$,Q){let Z;function K(F){Z=F}let W,Y;function X(F){W=F.type,Y=F.bytesPerElement}function H(F,G){J.drawElements(Z,G,W,F*Y),Q.update(G,Z,1)}function U(F,G,E){if(E===0)return;J.drawElementsInstanced(Z,G,W,F*Y,E),Q.update(G,Z,E)}function N(F,G,E){if(E===0)return;$.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,W,F,0,E);let B=0;for(let R=0;R<E;R++)B+=G[R];Q.update(B,Z,1)}this.setMode=K,this.setIndex=X,this.render=H,this.renderInstances=U,this.renderMultiDraw=N}function Hq(J){let $={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,Y,X){switch(Q.calls++,Y){case J.TRIANGLES:Q.triangles+=X*(W/3);break;case J.LINES:Q.lines+=X*(W/2);break;case J.LINE_STRIP:Q.lines+=X*(W-1);break;case J.LINE_LOOP:Q.lines+=X*W;break;case J.POINTS:Q.points+=X*W;break;default:ZJ("WebGLInfo: Unknown draw mode:",Y);break}}function K(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:$,render:Q,programs:null,autoReset:!0,reset:K,update:Z}}function Uq(J,$,Q){let Z=new WeakMap,K=new lJ;function W(Y,X,H){let U=Y.morphTargetInfluences,N=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,F=N!==void 0?N.length:0,G=Z.get(X);if(G===void 0||G.count!==F){let I=function(){A.dispose(),Z.delete(X),X.removeEventListener("dispose",I)};if(G!==void 0)G.texture.dispose();let E=X.morphAttributes.position!==void 0,O=X.morphAttributes.normal!==void 0,B=X.morphAttributes.color!==void 0,R=X.morphAttributes.position||[],q=X.morphAttributes.normal||[],M=X.morphAttributes.color||[],k=0;if(E===!0)k=1;if(O===!0)k=2;if(B===!0)k=3;let V=X.attributes.position.count*k,L=1;if(V>$.maxTextureSize)L=Math.ceil(V/$.maxTextureSize),V=$.maxTextureSize;let P=new Float32Array(V*L*4*F),A=new pZ(P,V,L,F);A.type=e9,A.needsUpdate=!0;let D=k*4;for(let d=0;d<F;d++){let f=R[d],n=q[d],X0=M[d],v=V*L*4*d;for(let y=0;y<f.count;y++){let u=y*D;if(E===!0)K.fromBufferAttribute(f,y),P[v+u+0]=K.x,P[v+u+1]=K.y,P[v+u+2]=K.z,P[v+u+3]=0;if(O===!0)K.fromBufferAttribute(n,y),P[v+u+4]=K.x,P[v+u+5]=K.y,P[v+u+6]=K.z,P[v+u+7]=0;if(B===!0)K.fromBufferAttribute(X0,y),P[v+u+8]=K.x,P[v+u+9]=K.y,P[v+u+10]=K.z,P[v+u+11]=X0.itemSize===4?K.w:1}}G={count:F,texture:A,size:new L0(V,L)},Z.set(X,G),X.addEventListener("dispose",I)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",Y.morphTexture,Q);else{let E=0;for(let B=0;B<U.length;B++)E+=U[B];let O=X.morphTargetsRelative?1:1-E;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,Q),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function Nq(J,$,Q,Z,K){let W=new WeakMap;function Y(U){let N=K.render.frame,F=U.geometry,G=$.get(U,F);if(W.get(G)!==N)$.update(G),W.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==N){if(Q.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Q.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,N)}}if(U.isSkinnedMesh){let E=U.skeleton;if(W.get(E)!==N)E.update(),W.set(E,N)}return G}function X(){W=new WeakMap}function H(U){let N=U.target;if(N.removeEventListener("dispose",H),Z.releaseStatesOfObject(N),Q.remove(N.instanceMatrix),N.instanceColor!==null)Q.remove(N.instanceColor)}return{update:Y,dispose:X}}var Gq={[a$]:"LINEAR_TONE_MAPPING",[r$]:"REINHARD_TONE_MAPPING",[t$]:"CINEON_TONE_MAPPING",[n7]:"ACES_FILMIC_TONE_MAPPING",[JQ]:"AGX_TONE_MAPPING",[$Q]:"NEUTRAL_TONE_MAPPING",[e$]:"CUSTOM_TONE_MAPPING"};function Fq(J,$,Q,Z,K,W){let Y=new Z8($,Q,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),X=null,H=null,U=new bJ;U.setAttribute("position",new XJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new XJ([0,2,0,0,2,0],2));let N=new qQ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),F=new I0(U,N),G=new Y7(-1,1,1,-1,0,1),E=null,O=null,B=!1,R,q=null,M=[],k=!1;this.setSize=function(V,L){if(Y.setSize(V,L),X!==null)X.setSize(V,L);if(H!==null)H.setSize(V,L);for(let P=0;P<M.length;P++){let A=M[P];if(A.setSize)A.setSize(V,L)}},this.setEffects=function(V){M=V,k=M.length>0&&M[0].isRenderPass===!0;let{width:L,height:P}=Y;if(M.length>0&&X===null)X=new Z8(L,P,{type:L8,depthBuffer:!1,stencilBuffer:!1}),H=new Z8(L,P,{type:L8,depthBuffer:!1,stencilBuffer:!1});for(let A=0;A<M.length;A++){let D=M[A];if(D.setSize)D.setSize(L,P)}},this.begin=function(V,L){if(B)return!1;if(V.toneMapping===V9&&M.length===0)return!1;if(q=L,L!==null){let{width:P,height:A}=L;if(Y.width!==P||Y.height!==A)this.setSize(P,A)}if(k===!1)V.setRenderTarget(Y);return R=V.toneMapping,V.toneMapping=V9,!0},this.hasRenderPass=function(){return k},this.end=function(V,L){V.toneMapping=R,B=!0;let P=Y,A=X;for(let D=0;D<M.length;D++){let I=M[D];if(I.enabled===!1)continue;if(I.render(V,A,P,L),I.needsSwap!==!1)P=A,A=A===X?H:X}if(E!==V.outputColorSpace||O!==V.toneMapping){if(E=V.outputColorSpace,O=V.toneMapping,N.defines={},RJ.getTransfer(E)===uJ)N.defines.SRGB_TRANSFER="";let D=Gq[O];if(D)N.defines[D]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=P.texture,V.setRenderTarget(q),V.render(F,G),q=null,B=!1},this.isCompositing=function(){return B},this.dispose=function(){if(Y.dispose(),X!==null)X.dispose();if(H!==null)H.dispose();U.dispose(),N.dispose()}}var H5=new $8,dY=new K6(1,1),U5=new pZ,N5=new qY,G5=new sZ,uU=[],dU=[],cU=new Float32Array(16),nU=new Float32Array(9),sU=new Float32Array(4);function F$(J,$,Q){let Z=J[0];if(Z<=0||Z>0)return J;let K=$*Q,W=uU[K];if(W===void 0)W=new Float32Array(K),uU[K]=W;if($!==0){Z.toArray(W,0);for(let Y=1,X=0;Y!==$;++Y)X+=Q,J[Y].toArray(W,X)}return W}function F8(J,$){if(J.length!==$.length)return!1;for(let Q=0,Z=J.length;Q<Z;Q++)if(J[Q]!==$[Q])return!1;return!0}function E8(J,$){for(let Q=0,Z=$.length;Q<Z;Q++)J[Q]=$[Q]}function FK(J,$){let Q=dU[$];if(Q===void 0)Q=new Int32Array($),dU[$]=Q;for(let Z=0;Z!==$;++Z)Q[Z]=J.allocateTextureUnit();return Q}function Eq(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1f(this.addr,$),Q[0]=$}function qq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2f(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(F8(Q,$))return;J.uniform2fv(this.addr,$),E8(Q,$)}}function Oq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3f(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else if($.r!==void 0){if(Q[0]!==$.r||Q[1]!==$.g||Q[2]!==$.b)J.uniform3f(this.addr,$.r,$.g,$.b),Q[0]=$.r,Q[1]=$.g,Q[2]=$.b}else{if(F8(Q,$))return;J.uniform3fv(this.addr,$),E8(Q,$)}}function Rq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4f(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(F8(Q,$))return;J.uniform4fv(this.addr,$),E8(Q,$)}}function Lq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(F8(Q,$))return;J.uniformMatrix2fv(this.addr,!1,$),E8(Q,$)}else{if(F8(Q,Z))return;sU.set(Z),J.uniformMatrix2fv(this.addr,!1,sU),E8(Q,Z)}}function Vq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(F8(Q,$))return;J.uniformMatrix3fv(this.addr,!1,$),E8(Q,$)}else{if(F8(Q,Z))return;nU.set(Z),J.uniformMatrix3fv(this.addr,!1,nU),E8(Q,Z)}}function Bq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(F8(Q,$))return;J.uniformMatrix4fv(this.addr,!1,$),E8(Q,$)}else{if(F8(Q,Z))return;cU.set(Z),J.uniformMatrix4fv(this.addr,!1,cU),E8(Q,Z)}}function Dq(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1i(this.addr,$),Q[0]=$}function Mq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2i(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(F8(Q,$))return;J.uniform2iv(this.addr,$),E8(Q,$)}}function kq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3i(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(F8(Q,$))return;J.uniform3iv(this.addr,$),E8(Q,$)}}function Cq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4i(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(F8(Q,$))return;J.uniform4iv(this.addr,$),E8(Q,$)}}function Pq(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1ui(this.addr,$),Q[0]=$}function Iq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2ui(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(F8(Q,$))return;J.uniform2uiv(this.addr,$),E8(Q,$)}}function zq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3ui(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(F8(Q,$))return;J.uniform3uiv(this.addr,$),E8(Q,$)}}function Aq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4ui(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(F8(Q,$))return;J.uniform4uiv(this.addr,$),E8(Q,$)}}function Tq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)dY.compareFunction=Q.isReversedDepthBuffer()?gZ:xZ,W=dY;else W=H5;Q.setTexture2D($||W,K)}function _q(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTexture3D($||N5,K)}function wq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTextureCube($||G5,K)}function Sq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTexture2DArray($||U5,K)}function jq(J){switch(J){case 5126:return Eq;case 35664:return qq;case 35665:return Oq;case 35666:return Rq;case 35674:return Lq;case 35675:return Vq;case 35676:return Bq;case 5124:case 35670:return Dq;case 35667:case 35671:return Mq;case 35668:case 35672:return kq;case 35669:case 35673:return Cq;case 5125:return Pq;case 36294:return Iq;case 36295:return zq;case 36296:return Aq;case 35678:case 36198:case 36298:case 36306:case 35682:return Tq;case 35679:case 36299:case 36307:return _q;case 35680:case 36300:case 36308:case 36293:return wq;case 36289:case 36303:case 36311:case 36292:return Sq}}function yq(J,$){J.uniform1fv(this.addr,$)}function vq(J,$){let Q=F$($,this.size,2);J.uniform2fv(this.addr,Q)}function fq(J,$){let Q=F$($,this.size,3);J.uniform3fv(this.addr,Q)}function bq(J,$){let Q=F$($,this.size,4);J.uniform4fv(this.addr,Q)}function hq(J,$){let Q=F$($,this.size,4);J.uniformMatrix2fv(this.addr,!1,Q)}function xq(J,$){let Q=F$($,this.size,9);J.uniformMatrix3fv(this.addr,!1,Q)}function gq(J,$){let Q=F$($,this.size,16);J.uniformMatrix4fv(this.addr,!1,Q)}function pq(J,$){J.uniform1iv(this.addr,$)}function mq(J,$){J.uniform2iv(this.addr,$)}function lq(J,$){J.uniform3iv(this.addr,$)}function uq(J,$){J.uniform4iv(this.addr,$)}function dq(J,$){J.uniform1uiv(this.addr,$)}function cq(J,$){J.uniform2uiv(this.addr,$)}function nq(J,$){J.uniform3uiv(this.addr,$)}function sq(J,$){J.uniform4uiv(this.addr,$)}function iq(J,$,Q){let Z=this.cache,K=$.length,W=FK(Q,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);let Y;if(this.type===J.SAMPLER_2D_SHADOW)Y=dY;else Y=H5;for(let X=0;X!==K;++X)Q.setTexture2D($[X]||Y,W[X])}function oq(J,$,Q){let Z=this.cache,K=$.length,W=FK(Q,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);for(let Y=0;Y!==K;++Y)Q.setTexture3D($[Y]||N5,W[Y])}function aq(J,$,Q){let Z=this.cache,K=$.length,W=FK(Q,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);for(let Y=0;Y!==K;++Y)Q.setTextureCube($[Y]||G5,W[Y])}function rq(J,$,Q){let Z=this.cache,K=$.length,W=FK(Q,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);for(let Y=0;Y!==K;++Y)Q.setTexture2DArray($[Y]||U5,W[Y])}function tq(J){switch(J){case 5126:return yq;case 35664:return vq;case 35665:return fq;case 35666:return bq;case 35674:return hq;case 35675:return xq;case 35676:return gq;case 5124:case 35670:return pq;case 35667:case 35671:return mq;case 35668:case 35672:return lq;case 35669:case 35673:return uq;case 5125:return dq;case 36294:return cq;case 36295:return nq;case 36296:return sq;case 35678:case 36198:case 36298:case 36306:case 35682:return iq;case 35679:case 36299:case 36307:return oq;case 35680:case 36300:case 36308:case 36293:return aq;case 36289:case 36303:case 36311:case 36292:return rq}}class F5{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.setValue=jq($.type)}}class E5{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.size=$.size,this.setValue=tq($.type)}}class q5{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,$,Q){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let Y=Z[K];Y.setValue(J,$[Y.id],Q)}}}var lY=/(\w+)(\])?(\[|\.)?/g;function iU(J,$){J.seq.push($),J.map[$.id]=$}function eq(J,$,Q){let Z=J.name,K=Z.length;lY.lastIndex=0;while(!0){let W=lY.exec(Z),Y=lY.lastIndex,X=W[1],H=W[2]==="]",U=W[3];if(H)X=X|0;if(U===void 0||U==="["&&Y+2===K){iU(Q,U===void 0?new F5(X,J,$):new E5(X,J,$));break}else{let F=Q.map[X];if(F===void 0)F=new q5(X),iU(Q,F);Q=F}}}class kQ{constructor(J,$){this.seq=[],this.map={};let Q=J.getProgramParameter($,J.ACTIVE_UNIFORMS);for(let W=0;W<Q;++W){let Y=J.getActiveUniform($,W),X=J.getUniformLocation($,Y.name);eq(Y,X,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,$,Q,Z){let K=this.map[$];if(K!==void 0)K.setValue(J,Q,Z)}setOptional(J,$,Q){let Z=$[Q];if(Z!==void 0)this.setValue(J,Q,Z)}static upload(J,$,Q,Z){for(let K=0,W=$.length;K!==W;++K){let Y=$[K],X=Q[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,$){let Q=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in $)Q.push(W)}return Q}}function oU(J,$,Q){let Z=J.createShader($);return J.shaderSource(Z,Q),J.compileShader(Z),Z}var JO=37297,$O=0;function QO(J,$){let Q=J.split(`
`),Z=[],K=Math.max($-6,0),W=Math.min($+6,Q.length);for(let Y=K;Y<W;Y++){let X=Y+1;Z.push(`${X===$?">":" "} ${X}: ${Q[Y]}`)}return Z.join(`
`)}var aU=new HJ;function ZO(J){RJ._getMatrix(aU,RJ.workingColorSpace,J);let $=`mat3( ${aU.elements.map((Q)=>Q.toFixed(4))} )`;switch(RJ.getTransfer(J)){case HY:return[$,"LinearTransferOETF"];case uJ:return[$,"sRGBTransferOETF"];default:return r0("WebGLProgram: Unsupported color space: ",J),[$,"LinearTransferOETF"]}}function rU(J,$,Q){let Z=J.getShaderParameter($,J.COMPILE_STATUS),W=(J.getShaderInfoLog($)||"").trim();if(Z&&W==="")return"";let Y=/ERROR: 0:(\d+)/.exec(W);if(Y){let X=parseInt(Y[1]);return Q.toUpperCase()+`

`+W+`

`+QO(J.getShaderSource($),X)}else return W}function KO(J,$){let Q=ZO($);return[`vec4 ${J}( vec4 value ) {`,`	return ${Q[1]}( vec4( value.rgb * ${Q[0]}, value.a ) );`,"}"].join(`
`)}var WO={[a$]:"Linear",[r$]:"Reinhard",[t$]:"Cineon",[n7]:"ACESFilmic",[JQ]:"AgX",[$Q]:"Neutral",[e$]:"Custom"};function YO(J,$){let Q=WO[$];if(Q===void 0)return r0("WebGLProgram: Unsupported toneMapping:",$),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}var NK=new _;function XO(){RJ.getLuminanceCoefficients(NK);let J=NK.x.toFixed(4),$=NK.y.toFixed(4),Q=NK.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${$}, ${Q} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function HO(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(MQ).join(`
`)}function UO(J){let $=[];for(let Q in J){let Z=J[Q];if(Z===!1)continue;$.push("#define "+Q+" "+Z)}return $.join(`
`)}function NO(J,$){let Q={},Z=J.getProgramParameter($,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib($,K),Y=W.name,X=1;if(W.type===J.FLOAT_MAT2)X=2;if(W.type===J.FLOAT_MAT3)X=3;if(W.type===J.FLOAT_MAT4)X=4;Q[Y]={type:W.type,location:J.getAttribLocation($,Y),locationSize:X}}return Q}function MQ(J){return J!==""}function tU(J,$){let Q=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,$.numSunLights).replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,$.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows)}function eU(J,$){return J.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var GO=/^[ \t]*#include +<([\w\d./]+)>/gm;function cY(J){return J.replace(GO,EO)}var FO=new Map;function EO(J,$){let Q=BJ[$];if(Q===void 0){let Z=FO.get($);if(Z!==void 0)Q=BJ[Z],r0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',$,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+$+">")}return cY(Q)}var qO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J5(J){return J.replace(qO,OO)}function OO(J,$,Q,Z){let K="";for(let W=parseInt($);W<parseInt(Q);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function $5(J){let $=`precision ${J.precision} float;
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
	`;if(J.precision==="highp")$+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")$+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")$+=`
#define LOW_PRECISION`;return $}var RO={[c7]:"SHADOWMAP_TYPE_PCF",[o6]:"SHADOWMAP_TYPE_VSM"};function LO(J){return RO[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var VO={[r6]:"ENVMAP_TYPE_CUBE",[s7]:"ENVMAP_TYPE_CUBE",[QQ]:"ENVMAP_TYPE_CUBE_UV"};function BO(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return VO[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var DO={[s7]:"ENVMAP_MODE_REFRACTION"};function MO(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return DO[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kO={[KU]:"ENVMAP_BLENDING_MULTIPLY",[WU]:"ENVMAP_BLENDING_MIX",[YU]:"ENVMAP_BLENDING_ADD"};function CO(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return kO[J.combine]||"ENVMAP_BLENDING_NONE"}function PO(J){let $=J.envMapCubeUVHeight;if($===null)return null;let Q=Math.log2($)-2,Z=1/$;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:Z,maxMip:Q}}function IO(J,$,Q,Z){let K=J.getContext(),W=Q.defines,Y=Q.vertexShader,X=Q.fragmentShader,H=LO(Q),U=BO(Q),N=MO(Q),F=CO(Q),G=PO(Q),E=HO(Q),O=UO(W),B=K.createProgram(),R,q,M=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(R=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(MQ).join(`
`),R.length>0)R+=`
`;if(q=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(MQ).join(`
`),q.length>0)q+=`
`}else R=[$5(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.batchingColor?"#define USE_BATCHING_COLOR":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.instancingMorph?"#define USE_INSTANCING_MORPH":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+N:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexNormals?"#define HAS_NORMAL":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+H:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(MQ).join(`
`),q=[$5(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+U:"",Q.envMap?"#define "+N:"",Q.envMap?"#define "+F:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.dispersion?"#define USE_DISPERSION":"",Q.retroreflection?"#define USE_RETROREFLECTION":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor?"#define USE_COLOR":"",Q.vertexAlphas||Q.batchingColor?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+H:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==V9?"#define TONE_MAPPING":"",Q.toneMapping!==V9?BJ.tonemapping_pars_fragment:"",Q.toneMapping!==V9?YO("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",BJ.colorspace_pars_fragment,KO("linearToOutputTexel",Q.outputColorSpace),XO(),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(MQ).join(`
`);if(Y=cY(Y),Y=tU(Y,Q),Y=eU(Y,Q),X=cY(X),X=tU(X,Q),X=eU(X,Q),Y=J5(Y),X=J5(X),Q.isRawShaderMaterial!==!0)M=`#version 300 es
`,R=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,q=["#define varying in",Q.glslVersion===UY?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion===UY?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let k=M+R+Y,V=M+q+X,L=oU(K,K.VERTEX_SHADER,k),P=oU(K,K.FRAGMENT_SHADER,V);if(K.attachShader(B,L),K.attachShader(B,P),Q.index0AttributeName!==void 0)K.bindAttribLocation(B,0,Q.index0AttributeName);else if(Q.hasPositionAttribute===!0)K.bindAttribLocation(B,0,"position");K.linkProgram(B);function A(f){if(J.debug.checkShaderErrors){let n=K.getProgramInfoLog(B)||"",X0=K.getShaderInfoLog(L)||"",v=K.getShaderInfoLog(P)||"",y=n.trim(),u=X0.trim(),b=v.trim(),r=!0,m=!0;if(K.getProgramParameter(B,K.LINK_STATUS)===!1)if(r=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,B,L,P);else{let e=rU(K,L,"vertex"),Y0=rU(K,P,"fragment");ZJ("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(B,K.VALIDATE_STATUS)+`

Material Name: `+f.name+`
Material Type: `+f.type+`

Program Info Log: `+y+`
`+e+`
`+Y0)}else if(y!=="")r0("WebGLProgram: Program Info Log:",y);else if(u===""||b==="")m=!1;if(m)f.diagnostics={runnable:r,programLog:y,vertexShader:{log:u,prefix:R},fragmentShader:{log:b,prefix:q}}}K.deleteShader(L),K.deleteShader(P),D=new kQ(K,B),I=NO(K,B)}let D;this.getUniforms=function(){if(D===void 0)A(this);return D};let I;this.getAttributes=function(){if(I===void 0)A(this);return I};let d=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(d===!1)d=K.getProgramParameter(B,JO);return d},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(B),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=$O++,this.cacheKey=$,this.usedTimes=1,this.program=B,this.vertexShader=L,this.fragmentShader=P,this}var zO=0;class O5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,$,Q){let Z=this._getShaderCacheForMaterial(J);if(Z.has($)===!1)Z.add($),$.usedTimes++;if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;return this}remove(J){let $=this.materialCache.get(J);for(let Q of $)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let $=this.materialCache,Q=$.get(J);if(Q===void 0)Q=new Set,$.set(J,Q);return Q}_getShaderStage(J){let $=this.shaderCache,Q=$.get(J);if(Q===void 0)Q=new R5(J),$.set(J,Q);return Q}}class R5{constructor(J){this.id=zO++,this.code=J,this.usedTimes=0}}function AO(J){return J===r7||J===fZ||J===bZ}function TO(J,$,Q,Z,K,W){let Y=new mZ,X=new O5,H=new Set,U=[],N=new Map,F=Z.logarithmicDepthBuffer,G=Z.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(D){if(H.add(D),D===0)return"uv";return`uv${D}`}function B(D,I,d,f,n,X0){let v=f.fog,y=n.geometry,u=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?f.environment:null,b=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,r=$.get(D.envMap||u,b),m=!!r&&r.mapping===QQ?r.image.height:null,e=E[D.type];if(D.precision!==null){if(G=Z.getMaxPrecision(D.precision),G!==D.precision)r0("WebGLProgram.getParameters:",D.precision,"not supported, using",G,"instead.")}let Y0=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,j=Y0!==void 0?Y0.length:0,o=0;if(y.morphAttributes.position!==void 0)o=1;if(y.morphAttributes.normal!==void 0)o=2;if(y.morphAttributes.color!==void 0)o=3;let G0,t,x,T;if(e){let cJ=h9[e];G0=cJ.vertexShader,t=cJ.fragmentShader}else{G0=D.vertexShader,t=D.fragmentShader;let cJ=X.getVertexShaderStage(D),yJ=X.getFragmentShaderStage(D);X.update(D,cJ,yJ),x=cJ.id,T=yJ.id}let h=J.getRenderTarget(),l=J.state.buffers.depth.getReversed(),Z0=n.isInstancedMesh===!0,J0=n.isBatchedMesh===!0,O0=!!D.map,E0=!!D.matcap,U0=!!r,S0=!!D.aoMap,m0=!!D.lightMap,t0=!!D.bumpMap&&D.wireframe===!1,C0=!!D.normalMap,GJ=!!D.displacementMap,OJ=!!D.emissiveMap,jJ=!!D.metalnessMap,p=!!D.roughnessMap,sJ=D.anisotropy>0,FJ=D.clearcoat>0,DJ=D.dispersion>0,S=D.retroreflectivity>0,C=D.iridescence>0,g=D.sheen>0,K0=D.transmission>0,D0=sJ&&!!D.anisotropyMap,T0=FJ&&!!D.clearcoatMap,v0=FJ&&!!D.clearcoatNormalMap,N0=FJ&&!!D.clearcoatRoughnessMap,R0=C&&!!D.iridescenceMap,A0=C&&!!D.iridescenceThicknessMap,s0=g&&!!D.sheenColorMap,_0=g&&!!D.sheenRoughnessMap,P0=!!D.specularMap,JJ=!!D.specularColorMap,e0=!!D.specularIntensityMap,zJ=K0&&!!D.transmissionMap,s=K0&&!!D.thicknessMap,f0=!!D.gradientMap,F0=!!D.alphaMap,j0=D.alphaTest>0,l0=!!D.alphaHash,M0=!!D.extensions,b0=V9;if(D.toneMapped){if(h===null||h.isXRRenderTarget===!0)b0=J.toneMapping}let YJ={shaderID:e,shaderType:D.type,shaderName:D.name,vertexShader:G0,fragmentShader:t,defines:D.defines,customVertexShaderID:x,customFragmentShaderID:T,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:G,batching:J0,batchingColor:J0&&n._colorsTexture!==null,instancing:Z0,instancingColor:Z0&&n.instanceColor!==null,instancingMorph:Z0&&n.morphTexture!==null,outputColorSpace:h===null?J.outputColorSpace:h.isXRRenderTarget===!0?h.texture.colorSpace:RJ.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:O0,matcap:E0,envMap:U0,envMapMode:U0&&r.mapping,envMapCubeUVHeight:m,aoMap:S0,lightMap:m0,bumpMap:t0,normalMap:C0,displacementMap:GJ,emissiveMap:OJ,normalMapObjectSpace:C0&&D.normalMapType===qU,normalMapTangentSpace:C0&&D.normalMapType===XY,packedNormalMap:C0&&D.normalMapType===XY&&AO(D.normalMap.format),metalnessMap:jJ,roughnessMap:p,anisotropy:sJ,anisotropyMap:D0,clearcoat:FJ,clearcoatMap:T0,clearcoatNormalMap:v0,clearcoatRoughnessMap:N0,dispersion:DJ,retroreflection:S,iridescence:C,iridescenceMap:R0,iridescenceThicknessMap:A0,sheen:g,sheenColorMap:s0,sheenRoughnessMap:_0,specularMap:P0,specularColorMap:JJ,specularIntensityMap:e0,transmission:K0,transmissionMap:zJ,thicknessMap:s,gradientMap:f0,opaque:D.transparent===!1&&D.blending===o$&&D.alphaToCoverage===!1,alphaMap:F0,alphaTest:j0,alphaHash:l0,combine:D.combine,mapUv:O0&&O(D.map.channel),aoMapUv:S0&&O(D.aoMap.channel),lightMapUv:m0&&O(D.lightMap.channel),bumpMapUv:t0&&O(D.bumpMap.channel),normalMapUv:C0&&O(D.normalMap.channel),displacementMapUv:GJ&&O(D.displacementMap.channel),emissiveMapUv:OJ&&O(D.emissiveMap.channel),metalnessMapUv:jJ&&O(D.metalnessMap.channel),roughnessMapUv:p&&O(D.roughnessMap.channel),anisotropyMapUv:D0&&O(D.anisotropyMap.channel),clearcoatMapUv:T0&&O(D.clearcoatMap.channel),clearcoatNormalMapUv:v0&&O(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N0&&O(D.clearcoatRoughnessMap.channel),iridescenceMapUv:R0&&O(D.iridescenceMap.channel),iridescenceThicknessMapUv:A0&&O(D.iridescenceThicknessMap.channel),sheenColorMapUv:s0&&O(D.sheenColorMap.channel),sheenRoughnessMapUv:_0&&O(D.sheenRoughnessMap.channel),specularMapUv:P0&&O(D.specularMap.channel),specularColorMapUv:JJ&&O(D.specularColorMap.channel),specularIntensityMapUv:e0&&O(D.specularIntensityMap.channel),transmissionMapUv:zJ&&O(D.transmissionMap.channel),thicknessMapUv:s&&O(D.thicknessMap.channel),alphaMapUv:F0&&O(D.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(C0||sJ),vertexNormals:!!y.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:n.isPoints===!0&&!!y.attributes.uv&&(O0||F0),fog:!!v,useFog:D.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||y.attributes.normal===void 0&&C0===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:l,skinning:n.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:o,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:X0.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&d.length>0,shadowMapType:J.shadowMap.type,toneMapping:b0,decodeVideoTexture:O0&&D.map.isVideoTexture===!0&&RJ.getTransfer(D.map.colorSpace)===uJ,decodeVideoTextureEmissive:OJ&&D.emissiveMap.isVideoTexture===!0&&RJ.getTransfer(D.emissiveMap.colorSpace)===uJ,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===oJ,flipSided:D.side===D8,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:M0&&D.extensions.clipCullDistance===!0&&Q.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(M0&&D.extensions.multiDraw===!0||J0)&&Q.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Q.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return YJ.vertexUv1s=H.has(1),YJ.vertexUv2s=H.has(2),YJ.vertexUv3s=H.has(3),H.clear(),YJ}function R(D){let I=[];if(D.shaderID)I.push(D.shaderID);else I.push(D.customVertexShaderID),I.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let d in D.defines)I.push(d),I.push(D.defines[d]);if(D.isRawShaderMaterial===!1)q(I,D),M(I,D),I.push(J.outputColorSpace);return I.push(D.customProgramCacheKey),I.join()}function q(D,I){D.push(I.precision),D.push(I.outputColorSpace),D.push(I.envMapMode),D.push(I.envMapCubeUVHeight),D.push(I.mapUv),D.push(I.alphaMapUv),D.push(I.lightMapUv),D.push(I.aoMapUv),D.push(I.bumpMapUv),D.push(I.normalMapUv),D.push(I.displacementMapUv),D.push(I.emissiveMapUv),D.push(I.metalnessMapUv),D.push(I.roughnessMapUv),D.push(I.anisotropyMapUv),D.push(I.clearcoatMapUv),D.push(I.clearcoatNormalMapUv),D.push(I.clearcoatRoughnessMapUv),D.push(I.iridescenceMapUv),D.push(I.iridescenceThicknessMapUv),D.push(I.sheenColorMapUv),D.push(I.sheenRoughnessMapUv),D.push(I.specularMapUv),D.push(I.specularColorMapUv),D.push(I.specularIntensityMapUv),D.push(I.transmissionMapUv),D.push(I.thicknessMapUv),D.push(I.combine),D.push(I.fogExp2),D.push(I.sizeAttenuation),D.push(I.morphTargetsCount),D.push(I.morphAttributeCount),D.push(I.numSunLights),D.push(I.numDirLights),D.push(I.numPointLights),D.push(I.numSpotLights),D.push(I.numSpotLightMaps),D.push(I.numHemiLights),D.push(I.numRectAreaLights),D.push(I.numSunLightShadows),D.push(I.numDirLightShadows),D.push(I.numPointLightShadows),D.push(I.numSpotLightShadows),D.push(I.numSpotLightShadowsWithMaps),D.push(I.numLightProbes),D.push(I.shadowMapType),D.push(I.toneMapping),D.push(I.numClippingPlanes),D.push(I.numClipIntersection),D.push(I.depthPacking)}function M(D,I){if(Y.disableAll(),I.instancing)Y.enable(0);if(I.instancingColor)Y.enable(1);if(I.instancingMorph)Y.enable(2);if(I.matcap)Y.enable(3);if(I.envMap)Y.enable(4);if(I.normalMapObjectSpace)Y.enable(5);if(I.normalMapTangentSpace)Y.enable(6);if(I.clearcoat)Y.enable(7);if(I.iridescence)Y.enable(8);if(I.alphaTest)Y.enable(9);if(I.vertexColors)Y.enable(10);if(I.vertexAlphas)Y.enable(11);if(I.vertexUv1s)Y.enable(12);if(I.vertexUv2s)Y.enable(13);if(I.vertexUv3s)Y.enable(14);if(I.vertexTangents)Y.enable(15);if(I.anisotropy)Y.enable(16);if(I.alphaHash)Y.enable(17);if(I.batching)Y.enable(18);if(I.dispersion)Y.enable(19);if(I.retroreflection)Y.enable(24);if(I.batchingColor)Y.enable(20);if(I.gradientMap)Y.enable(21);if(I.packedNormalMap)Y.enable(22);if(I.vertexNormals)Y.enable(23);if(D.push(Y.mask),Y.disableAll(),I.fog)Y.enable(0);if(I.useFog)Y.enable(1);if(I.flatShading)Y.enable(2);if(I.logarithmicDepthBuffer)Y.enable(3);if(I.reversedDepthBuffer)Y.enable(4);if(I.skinning)Y.enable(5);if(I.morphTargets)Y.enable(6);if(I.morphNormals)Y.enable(7);if(I.morphColors)Y.enable(8);if(I.premultipliedAlpha)Y.enable(9);if(I.shadowMapEnabled)Y.enable(10);if(I.doubleSided)Y.enable(11);if(I.flipSided)Y.enable(12);if(I.useDepthPacking)Y.enable(13);if(I.dithering)Y.enable(14);if(I.transmission)Y.enable(15);if(I.sheen)Y.enable(16);if(I.opaque)Y.enable(17);if(I.pointsUvs)Y.enable(18);if(I.decodeVideoTexture)Y.enable(19);if(I.decodeVideoTextureEmissive)Y.enable(20);if(I.alphaToCoverage)Y.enable(21);if(I.numLightProbeGrids>0)Y.enable(22);if(I.hasPositionAttribute)Y.enable(23);D.push(Y.mask)}function k(D){let I=E[D.type],d;if(I){let f=h9[I];d=Q7.clone(f.uniforms)}else d=D.uniforms;return d}function V(D,I){let d=N.get(I);if(d!==void 0)++d.usedTimes;else d=new IO(J,I,D,K),U.push(d),N.set(I,d);return d}function L(D){if(--D.usedTimes===0){let I=U.indexOf(D);U[I]=U[U.length-1],U.pop(),N.delete(D.cacheKey),D.destroy()}}function P(D){X.remove(D)}function A(){X.dispose()}return{getParameters:B,getProgramCacheKey:R,getUniforms:k,acquireProgram:V,releaseProgram:L,releaseShaderCache:P,programs:U,dispose:A}}function _O(){let J=new WeakMap;function $(Y){return J.has(Y)}function Q(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function K(Y,X,H){J.get(Y)[X]=H}function W(){J=new WeakMap}return{has:$,get:Q,remove:Z,update:K,dispose:W}}function wO(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.material.id!==$.material.id)return J.material.id-$.material.id;else if(J.materialVariant!==$.materialVariant)return J.materialVariant-$.materialVariant;else if(J.z!==$.z)return J.z-$.z;else return J.id-$.id}function Q5(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.z!==$.z)return $.z-J.z;else return J.id-$.id}function Z5(){let J=[],$=0,Q=[],Z=[],K=[];function W(){$=0,Q.length=0,Z.length=0,K.length=0}function Y(G){let E=0;if(G.isInstancedMesh)E+=2;if(G.isSkinnedMesh)E+=1;return E}function X(G,E,O,B,R,q){let M=J[$];if(M===void 0)M={id:G.id,object:G,geometry:E,material:O,materialVariant:Y(G),groupOrder:B,renderOrder:G.renderOrder,z:R,group:q},J[$]=M;else M.id=G.id,M.object=G,M.geometry=E,M.material=O,M.materialVariant=Y(G),M.groupOrder=B,M.renderOrder=G.renderOrder,M.z=R,M.group=q;return $++,M}function H(G,E,O,B,R,q,M){if(M.reversedDepth===!0)R=-R;let k=X(G,E,O,B,R,q);if(O.transmission>0)Z.push(k);else if(O.transparent===!0)K.push(k);else Q.push(k)}function U(G,E,O,B,R,q){let M=X(G,E,O,B,R,q);if(O.transmission>0)Z.unshift(M);else if(O.transparent===!0)K.unshift(M);else Q.unshift(M)}function N(G,E){if(Q.length>1)Q.sort(G||wO);if(Z.length>1)Z.sort(E||Q5);if(K.length>1)K.sort(E||Q5)}function F(){for(let G=$,E=J.length;G<E;G++){let O=J[G];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:Q,transmissive:Z,transparent:K,init:W,push:H,unshift:U,finish:F,sort:N}}function SO(){let J=new WeakMap;function $(Z,K){let W=J.get(Z),Y;if(W===void 0)Y=new Z5,J.set(Z,[Y]);else if(K>=W.length)Y=new Z5,W.push(Y);else Y=W[K];return Y}function Q(){J=new WeakMap}return{get:$,dispose:Q}}function jO(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"SunLight":case"DirectionalLight":Q={direction:new _,color:new y0};break;case"SpotLight":Q={position:new _,direction:new _,color:new y0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new _,color:new y0,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new _,skyColor:new y0,groundColor:new y0};break;case"RectAreaLight":Q={color:new y0,position:new _,halfWidth:new _,halfHeight:new _};break}return J[$.id]=Q,Q}}}function yO(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"SunLight":case"DirectionalLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L0};break;case"SpotLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L0};break;case"PointLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[$.id]=Q,Q}}}var vO=0;function fO(J,$){return($.castShadow?2:0)-(J.castShadow?2:0)+($.map?1:0)-(J.map?1:0)}function bO(J){let $=new jO,Q=yO(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new _);let K=new _,W=new QJ,Y=new QJ;function X(U){let N=0,F=0,G=0;for(let n=0;n<9;n++)Z.probe[n].set(0,0,0);let E=0,O=0,B=0,R=0,q=0,M=0,k=0,V=0,L=0,P=0,A=0,D=0,I=0,d=0;U.sort(fO);for(let n=0,X0=U.length;n<X0;n++){let v=U[n],y=v.color,u=v.intensity,b=v.distance,r=null;if(v.shadow&&v.shadow.map)if(v.shadow.map.texture.format===r7)r=v.shadow.map.texture;else r=v.shadow.map.depthTexture||v.shadow.map.texture;if(v.isAmbientLight)N+=y.r*u,F+=y.g*u,G+=y.b*u;else if(v.isLightProbe){for(let m=0;m<9;m++)Z.probe[m].addScaledVector(v.sh.coefficients[m],u);d++}else if(v.isSunLight){let m=$.get(v);if(m.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let e=v.shadow,Y0=Q.get(v);Y0.shadowIntensity=e.intensity,Y0.shadowBias=e.bias,Y0.shadowNormalBias=e.normalBias,Y0.shadowRadius=e.radius,Y0.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),Z.sunShadow[O]=Y0,Z.sunShadowMap[O]=r;let j=e.getViewportCount();for(let o=0;o<j;o++)Z.sunShadowMatrix[B+o]=e.getMatrix(o),Z.sunShadowCascade[B+o]=e._cascadeData[o];B+=j,O++}Z.sun[E]=m,E++}else if(v.isDirectionalLight){let m=$.get(v);if(m.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let e=v.shadow,Y0=Q.get(v);Y0.shadowIntensity=e.intensity,Y0.shadowBias=e.bias,Y0.shadowNormalBias=e.normalBias,Y0.shadowRadius=e.radius,Y0.shadowMapSize=e.mapSize,Z.directionalShadow[R]=Y0,Z.directionalShadowMap[R]=r,Z.directionalShadowMatrix[R]=v.shadow.matrix,L++}Z.directional[R]=m,R++}else if(v.isSpotLight){let m=$.get(v);m.position.setFromMatrixPosition(v.matrixWorld),m.color.copy(y).multiplyScalar(u),m.distance=b,m.coneCos=Math.cos(v.angle),m.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),m.decay=v.decay,Z.spot[M]=m;let e=v.shadow;if(v.map){if(Z.spotLightMap[D]=v.map,D++,e.updateMatrices(v),v.castShadow)I++}if(Z.spotLightMatrix[M]=e.matrix,v.castShadow){let Y0=Q.get(v);Y0.shadowIntensity=e.intensity,Y0.shadowBias=e.bias,Y0.shadowNormalBias=e.normalBias,Y0.shadowRadius=e.radius,Y0.shadowMapSize=e.mapSize,Z.spotShadow[M]=Y0,Z.spotShadowMap[M]=r,A++}M++}else if(v.isRectAreaLight){let m=$.get(v);m.color.copy(y).multiplyScalar(u),m.halfWidth.set(v.width*0.5,0,0),m.halfHeight.set(0,v.height*0.5,0),Z.rectArea[k]=m,k++}else if(v.isPointLight){let m=$.get(v);if(m.color.copy(v.color).multiplyScalar(v.intensity),m.distance=v.distance,m.decay=v.decay,v.castShadow){let e=v.shadow,Y0=Q.get(v);Y0.shadowIntensity=e.intensity,Y0.shadowBias=e.bias,Y0.shadowNormalBias=e.normalBias,Y0.shadowRadius=e.radius,Y0.shadowMapSize=e.mapSize,Y0.shadowCameraNear=e.camera.near,Y0.shadowCameraFar=e.camera.far,Z.pointShadow[q]=Y0,Z.pointShadowMap[q]=r,Z.pointShadowMatrix[q]=v.shadow.matrix,P++}Z.point[q]=m,q++}else if(v.isHemisphereLight){let m=$.get(v);m.skyColor.copy(v.color).multiplyScalar(u),m.groundColor.copy(v.groundColor).multiplyScalar(u),Z.hemi[V]=m,V++}}if(k>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=p0.LTC_FLOAT_1,Z.rectAreaLTC2=p0.LTC_FLOAT_2;else Z.rectAreaLTC1=p0.LTC_HALF_1,Z.rectAreaLTC2=p0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=F,Z.ambient[2]=G;let f=Z.hash;if(f.sunLength!==E||f.directionalLength!==R||f.pointLength!==q||f.spotLength!==M||f.rectAreaLength!==k||f.hemiLength!==V||f.numSunShadows!==O||f.numDirectionalShadows!==L||f.numPointShadows!==P||f.numSpotShadows!==A||f.numSpotMaps!==D||f.numLightProbes!==d)Z.sun.length=E,Z.directional.length=R,Z.spot.length=M,Z.rectArea.length=k,Z.point.length=q,Z.hemi.length=V,Z.sunShadow.length=O,Z.sunShadowMap.length=O,Z.sunShadowMatrix.length=B,Z.sunShadowCascade.length=B,Z.directionalShadow.length=L,Z.directionalShadowMap.length=L,Z.directionalShadowMatrix.length=L,Z.pointShadow.length=P,Z.pointShadowMap.length=P,Z.pointShadowMatrix.length=P,Z.spotShadow.length=A,Z.spotShadowMap.length=A,Z.spotLightMatrix.length=A+D-I,Z.spotLightMap.length=D,Z.numSpotLightShadowsWithMaps=I,Z.numLightProbes=d,f.sunLength=E,f.directionalLength=R,f.pointLength=q,f.spotLength=M,f.rectAreaLength=k,f.hemiLength=V,f.numSunShadows=O,f.numDirectionalShadows=L,f.numPointShadows=P,f.numSpotShadows=A,f.numSpotMaps=D,f.numLightProbes=d,Z.version=vO++}function H(U,N){let F=0,G=0,E=0,O=0,B=0,R=0,q=N.matrixWorldInverse;for(let M=0,k=U.length;M<k;M++){let V=U[M];if(V.isSunLight){let L=Z.sun[F];L.direction.setFromMatrixPosition(V.matrixWorld),L.direction.transformDirection(q),F++}else if(V.isDirectionalLight){let L=Z.directional[G];L.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(q),G++}else if(V.isSpotLight){let L=Z.spot[O];L.position.setFromMatrixPosition(V.matrixWorld),L.position.applyMatrix4(q),L.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(q),O++}else if(V.isRectAreaLight){let L=Z.rectArea[B];L.position.setFromMatrixPosition(V.matrixWorld),L.position.applyMatrix4(q),Y.identity(),W.copy(V.matrixWorld),W.premultiply(q),Y.extractRotation(W),L.halfWidth.set(V.width*0.5,0,0),L.halfHeight.set(0,V.height*0.5,0),L.halfWidth.applyMatrix4(Y),L.halfHeight.applyMatrix4(Y),B++}else if(V.isPointLight){let L=Z.point[E];L.position.setFromMatrixPosition(V.matrixWorld),L.position.applyMatrix4(q),E++}else if(V.isHemisphereLight){let L=Z.hemi[R];L.direction.setFromMatrixPosition(V.matrixWorld),L.direction.transformDirection(q),R++}}}return{setup:X,setupView:H,state:Z}}function K5(J){let $=new bO(J),Q=[],Z=[],K=[];function W(G){F.camera=G,Q.length=0,Z.length=0,K.length=0}function Y(G){Q.push(G)}function X(G){Z.push(G)}function H(G){K.push(G)}function U(){$.setup(Q)}function N(G){$.setupView(Q,G)}let F={lightsArray:Q,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:$,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:U,setupLightsView:N,pushLight:Y,pushShadow:X,pushLightProbeGrid:H}}function hO(J){let $=new WeakMap;function Q(K,W=0){let Y=$.get(K),X;if(Y===void 0)X=new K5(J),$.set(K,[X]);else if(W>=Y.length)X=new K5(J),Y.push(X);else X=Y[W];return X}function Z(){$=new WeakMap}return{get:Q,dispose:Z}}var xO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gO=`uniform sampler2D shadow_pass;
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
}`,pO=[new _(1,0,0),new _(-1,0,0),new _(0,1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1)],mO=[new _(0,-1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1),new _(0,-1,0),new _(0,-1,0)],W5=new QJ,DQ=new _,uY=new _;function lO(J,$,Q){let Z=new Q6,K=new L0,W=new L0,Y=new lJ,X=new kY,H=new CY,U={},N=Q.maxTextureSize,F={[M7]:D8,[D8]:M7,[oJ]:oJ},G=new J8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L0},radius:{value:4}},vertexShader:xO,fragmentShader:gO}),E=G.clone();E.defines.HORIZONTAL_PASS=1;let O=new bJ;O.setAttribute("position",new tJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new I0(O,G),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c7;let q=this.type;this.render=function(P,A,D){if(R.enabled===!1)return;if(R.autoUpdate===!1&&R.needsUpdate===!1)return;if(P.length===0)return;if(this.type===wH)r0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=c7;let I=J.getRenderTarget(),d=J.getActiveCubeFace(),f=J.getActiveMipmapLevel(),n=J.state;if(n.setBlending($9),n.buffers.depth.getReversed()===!0)n.buffers.color.setClear(0,0,0,0);else n.buffers.color.setClear(1,1,1,1);n.buffers.depth.setTest(!0),n.setScissorTest(!1);let X0=q!==this.type;if(X0)A.traverse(function(v){if(v.material)if(Array.isArray(v.material))v.material.forEach((y)=>y.needsUpdate=!0);else v.material.needsUpdate=!0});for(let v=0,y=P.length;v<y;v++){let u=P[v],b=u.shadow;if(b===void 0){r0("WebGLShadowMap:",u,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;K.copy(b.mapSize);let r=b.getFrameExtents();if(K.multiply(r),W.copy(b.mapSize),K.x>N||K.y>N){if(K.x>N)W.x=Math.floor(N/r.x),K.x=W.x*r.x,b.mapSize.x=W.x;if(K.y>N)W.y=Math.floor(N/r.y),K.y=W.y*r.y,b.mapSize.y=W.y}let m=J.state.buffers.depth.getReversed();if(b.camera._reversedDepth=m,b.map===null||X0===!0){if(b.map!==null){if(b.map.depthTexture!==null)b.map.depthTexture.dispose(),b.map.depthTexture=null;b.map.dispose()}if(this.type===o6){if(u.isPointLight){r0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}b.map=new Z8(K.x,K.y,{format:r7,type:L8,minFilter:X8,magFilter:X8,generateMipmaps:!1}),b.map.texture.name=u.name+".shadowMap",b.map.depthTexture=new K6(K.x,K.y,e9),b.map.depthTexture.name=u.name+".shadowMapDepth",b.map.depthTexture.format=o7,b.map.depthTexture.compareFunction=null,b.map.depthTexture.minFilter=B9,b.map.depthTexture.magFilter=B9}else{if(u.isPointLight)b.map=new nY(K.x),b.map.depthTexture=new OY(K.x,C7);else b.map=new Z8(K.x,K.y),b.map.depthTexture=new K6(K.x,K.y,C7);if(b.map.depthTexture.name=u.name+".shadowMap",b.map.depthTexture.format=o7,this.type===c7)b.map.depthTexture.compareFunction=m?gZ:xZ,b.map.depthTexture.minFilter=X8,b.map.depthTexture.magFilter=X8;else b.map.depthTexture.compareFunction=null,b.map.depthTexture.minFilter=B9,b.map.depthTexture.magFilter=B9}b.camera.updateProjectionMatrix()}if(b.map.isWebGLCubeRenderTarget!==!0&&(b.map.width!==K.x||b.map.height!==K.y))b.map.setSize(K.x,K.y);let e=b.map.isWebGLCubeRenderTarget?6:b.getViewportCount();if(u.isPointLight!==!0)b.updateMatrices(u,D);for(let Y0=0;Y0<e;Y0++){let j=b.getCamera(Y0);if(u.isPointLight){let{camera:o,matrix:G0}=b,t=u.distance||o.far;if(t!==o.far)o.far=t,o.updateProjectionMatrix();DQ.setFromMatrixPosition(u.matrixWorld),o.position.copy(DQ),uY.copy(o.position),uY.add(pO[Y0]),o.up.copy(mO[Y0]),o.lookAt(uY),o.updateMatrixWorld(),G0.makeTranslation(-DQ.x,-DQ.y,-DQ.z),W5.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),b._frustum.setFromProjectionMatrix(W5,o.coordinateSystem,o.reversedDepth)}if(b.map.isWebGLCubeRenderTarget)J.setRenderTarget(b.map,Y0),J.clear();else{if(Y0===0)J.setRenderTarget(b.map),J.clear();let o=b.getViewport(Y0);Y.set(W.x*o.x,W.y*o.y,W.x*o.z,W.y*o.w),n.viewport(Y)}Z=b.getFrustum(Y0),V(A,D,j,u,this.type)}if(b.isPointLightShadow!==!0&&this.type===o6)M(b,D);b.needsUpdate=!1}q=this.type,R.needsUpdate=!1,J.setRenderTarget(I,d,f)};function M(P,A){let D=$.update(B);if(G.defines.VSM_SAMPLES!==P.blurSamples)G.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,G.needsUpdate=!0,E.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new Z8(K.x,K.y,{format:r7,type:L8});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);G.uniforms.shadow_pass.value=P.map.depthTexture,G.uniforms.resolution.value.set(P.map.width,P.map.height),G.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(A,null,D,G,B,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value.set(P.map.width,P.map.height),E.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(A,null,D,E,B,null)}function k(P,A,D,I){let d=null,f=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(f!==void 0)d=f;else if(d=D.isPointLight===!0?H:X,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let n=d.uuid,X0=A.uuid,v=U[n];if(v===void 0)v={},U[n]=v;let y=v[X0];if(y===void 0)y=d.clone(),v[X0]=y,A.addEventListener("dispose",L);d=y}if(d.visible=A.visible,d.wireframe=A.wireframe,I===o6)d.side=A.shadowSide!==null?A.shadowSide:A.side;else d.side=A.shadowSide!==null?A.shadowSide:F[A.side];if(d.alphaMap=A.alphaMap,d.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,d.map=A.map,d.clipShadows=A.clipShadows,d.clippingPlanes=A.clippingPlanes,d.clipIntersection=A.clipIntersection,d.displacementMap=A.displacementMap,d.displacementScale=A.displacementScale,d.displacementBias=A.displacementBias,d.wireframeLinewidth=A.wireframeLinewidth,d.linewidth=A.linewidth,D.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let n=J.properties.get(d);n.light=D}return d}function V(P,A,D,I,d){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&d===o6)&&(!P.frustumCulled||P.intersectsFrustum(Z))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);let X0=$.update(P),v=P.material;if(Array.isArray(v)){let y=X0.groups;for(let u=0,b=y.length;u<b;u++){let r=y[u],m=v[r.materialIndex];if(m&&m.visible){let e=k(P,m,I,d);P.onBeforeShadow(J,P,A,D,X0,e,r),J.renderBufferDirect(D,null,X0,e,P,r),P.onAfterShadow(J,P,A,D,X0,e,r)}}}else if(v.visible){let y=k(P,v,I,d);P.onBeforeShadow(J,P,A,D,X0,y,null),J.renderBufferDirect(D,null,X0,y,P,null),P.onAfterShadow(J,P,A,D,X0,y,null)}}}let n=P.children;for(let X0=0,v=n.length;X0<v;X0++)V(n[X0],A,D,I,d)}function L(P){P.target.removeEventListener("dispose",L);for(let D in U){let I=U[D],d=P.target.uuid;if(d in I)I[d].dispose(),delete I[d]}}}function uO(J,$){function Q(){let s=!1,f0=new lJ,F0=null,j0=new lJ(0,0,0,0);return{setMask:function(l0){if(F0!==l0&&!s)J.colorMask(l0,l0,l0,l0),F0=l0},setLocked:function(l0){s=l0},setClear:function(l0,M0,b0,YJ,cJ){if(cJ===!0)l0*=YJ,M0*=YJ,b0*=YJ;if(f0.set(l0,M0,b0,YJ),j0.equals(f0)===!1)J.clearColor(l0,M0,b0,YJ),j0.copy(f0)},reset:function(){s=!1,F0=null,j0.set(-1,0,0,0)}}}function Z(){let s=!1,f0=!1,F0=null,j0=null,l0=null;return{setReversed:function(M0){if(f0!==M0){let b0=$.get("EXT_clip_control");if(M0)b0.clipControlEXT(b0.LOWER_LEFT_EXT,b0.ZERO_TO_ONE_EXT);else b0.clipControlEXT(b0.LOWER_LEFT_EXT,b0.NEGATIVE_ONE_TO_ONE_EXT);f0=M0;let YJ=l0;l0=null,this.setClear(YJ)}},getReversed:function(){return f0},setTest:function(M0){if(M0)h(J.DEPTH_TEST);else l(J.DEPTH_TEST)},setMask:function(M0){if(F0!==M0&&!s)J.depthMask(M0),F0=M0},setFunc:function(M0){if(f0)M0=PU[M0];if(j0!==M0){switch(M0){case rH:J.depthFunc(J.NEVER);break;case tH:J.depthFunc(J.ALWAYS);break;case eH:J.depthFunc(J.LESS);break;case kW:J.depthFunc(J.LEQUAL);break;case JU:J.depthFunc(J.EQUAL);break;case $U:J.depthFunc(J.GEQUAL);break;case QU:J.depthFunc(J.GREATER);break;case ZU:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}j0=M0}},setLocked:function(M0){s=M0},setClear:function(M0){if(l0!==M0){if(l0=M0,f0)M0=1-M0;J.clearDepth(M0)}},reset:function(){s=!1,F0=null,j0=null,l0=null,f0=!1}}}function K(){let s=!1,f0=null,F0=null,j0=null,l0=null,M0=null,b0=null,YJ=null,cJ=null;return{setTest:function(yJ){if(!s)if(yJ)h(J.STENCIL_TEST);else l(J.STENCIL_TEST)},setMask:function(yJ){if(f0!==yJ&&!s)J.stencilMask(yJ),f0=yJ},setFunc:function(yJ,i8,o8){if(F0!==yJ||j0!==i8||l0!==o8)J.stencilFunc(yJ,i8,o8),F0=yJ,j0=i8,l0=o8},setOp:function(yJ,i8,o8){if(M0!==yJ||b0!==i8||YJ!==o8)J.stencilOp(yJ,i8,o8),M0=yJ,b0=i8,YJ=o8},setLocked:function(yJ){s=yJ},setClear:function(yJ){if(cJ!==yJ)J.clearStencil(yJ),cJ=yJ},reset:function(){s=!1,f0=null,F0=null,j0=null,l0=null,M0=null,b0=null,YJ=null,cJ=null}}}let W=new Q,Y=new Z,X=new K,H=new WeakMap,U=new WeakMap,N={},F={},G={},E=new WeakMap,O=[],B=null,R=!1,q=null,M=null,k=null,V=null,L=null,P=null,A=null,D=new y0(0,0,0),I=0,d=!1,f=null,n=null,X0=null,v=null,y=null,u=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),b=!1,r=0,m=J.getParameter(J.VERSION);if(m.indexOf("WebGL")!==-1)r=parseFloat(/^WebGL (\d)/.exec(m)[1]),b=r>=1;else if(m.indexOf("OpenGL ES")!==-1)r=parseFloat(/^OpenGL ES (\d)/.exec(m)[1]),b=r>=2;let e=null,Y0={},j=J.getParameter(J.SCISSOR_BOX),o=J.getParameter(J.VIEWPORT),G0=new lJ().fromArray(j),t=new lJ().fromArray(o);function x(s,f0,F0,j0){let l0=new Uint8Array(4),M0=J.createTexture();J.bindTexture(s,M0),J.texParameteri(s,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(s,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let b0=0;b0<F0;b0++)if(s===J.TEXTURE_3D||s===J.TEXTURE_2D_ARRAY)J.texImage3D(f0,0,J.RGBA,1,1,j0,0,J.RGBA,J.UNSIGNED_BYTE,l0);else J.texImage2D(f0+b0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,l0);return M0}let T={};T[J.TEXTURE_2D]=x(J.TEXTURE_2D,J.TEXTURE_2D,1),T[J.TEXTURE_CUBE_MAP]=x(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),T[J.TEXTURE_2D_ARRAY]=x(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),T[J.TEXTURE_3D]=x(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),h(J.DEPTH_TEST),Y.setFunc(kW),t0(!1),C0(BW),h(J.CULL_FACE),S0($9);function h(s){if(N[s]!==!0)J.enable(s),N[s]=!0}function l(s){if(N[s]!==!1)J.disable(s),N[s]=!1}function Z0(s,f0){if(G[s]!==f0){if(J.bindFramebuffer(s,f0),G[s]=f0,s===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=f0;if(s===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=f0;return!0}return!1}function J0(s,f0){let F0=O,j0=!1;if(s){if(F0=E.get(f0),F0===void 0)F0=[],E.set(f0,F0);let l0=s.textures;if(F0.length!==l0.length||F0[0]!==J.COLOR_ATTACHMENT0){for(let M0=0,b0=l0.length;M0<b0;M0++)F0[M0]=J.COLOR_ATTACHMENT0+M0;F0.length=l0.length,j0=!0}}else if(F0[0]!==J.BACK)F0[0]=J.BACK,j0=!0;if(j0)J.drawBuffers(F0)}function O0(s){if(B!==s)return J.useProgram(s),B=s,!0;return!1}let E0={[a6]:J.FUNC_ADD,[jH]:J.FUNC_SUBTRACT,[yH]:J.FUNC_REVERSE_SUBTRACT};E0[vH]=J.MIN,E0[fH]=J.MAX;let U0={[bH]:J.ZERO,[hH]:J.ONE,[xH]:J.SRC_COLOR,[pH]:J.SRC_ALPHA,[nH]:J.SRC_ALPHA_SATURATE,[dH]:J.DST_COLOR,[lH]:J.DST_ALPHA,[gH]:J.ONE_MINUS_SRC_COLOR,[mH]:J.ONE_MINUS_SRC_ALPHA,[cH]:J.ONE_MINUS_DST_COLOR,[uH]:J.ONE_MINUS_DST_ALPHA,[sH]:J.CONSTANT_COLOR,[iH]:J.ONE_MINUS_CONSTANT_COLOR,[oH]:J.CONSTANT_ALPHA,[aH]:J.ONE_MINUS_CONSTANT_ALPHA};function S0(s,f0,F0,j0,l0,M0,b0,YJ,cJ,yJ){if(s===$9){if(R===!0)l(J.BLEND),R=!1;return}if(R===!1)h(J.BLEND),R=!0;if(s!==SH){if(s!==q||yJ!==d){if(M!==a6||L!==a6)J.blendEquation(J.FUNC_ADD),M=a6,L=a6;if(yJ)switch(s){case o$:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case S9:J.blendFunc(J.ONE,J.ONE);break;case DW:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case MW:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:ZJ("WebGLState: Invalid blending: ",s);break}else switch(s){case o$:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case S9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case DW:ZJ("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case MW:ZJ("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ZJ("WebGLState: Invalid blending: ",s);break}k=null,V=null,P=null,A=null,D.set(0,0,0),I=0,q=s,d=yJ}return}if(l0=l0||f0,M0=M0||F0,b0=b0||j0,f0!==M||l0!==L)J.blendEquationSeparate(E0[f0],E0[l0]),M=f0,L=l0;if(F0!==k||j0!==V||M0!==P||b0!==A)J.blendFuncSeparate(U0[F0],U0[j0],U0[M0],U0[b0]),k=F0,V=j0,P=M0,A=b0;if(YJ.equals(D)===!1||cJ!==I)J.blendColor(YJ.r,YJ.g,YJ.b,cJ),D.copy(YJ),I=cJ;q=s,d=!1}function m0(s,f0){s.side===oJ?l(J.CULL_FACE):h(J.CULL_FACE);let F0=s.side===D8;if(f0)F0=!F0;t0(F0),s.blending===o$&&s.transparent===!1?S0($9):S0(s.blending,s.blendEquation,s.blendSrc,s.blendDst,s.blendEquationAlpha,s.blendSrcAlpha,s.blendDstAlpha,s.blendColor,s.blendAlpha,s.premultipliedAlpha),Y.setFunc(s.depthFunc),Y.setTest(s.depthTest),Y.setMask(s.depthWrite),W.setMask(s.colorWrite);let j0=s.stencilWrite;if(X.setTest(j0),j0)X.setMask(s.stencilWriteMask),X.setFunc(s.stencilFunc,s.stencilRef,s.stencilFuncMask),X.setOp(s.stencilFail,s.stencilZFail,s.stencilZPass);OJ(s.polygonOffset,s.polygonOffsetFactor,s.polygonOffsetUnits),s.alphaToCoverage===!0?h(J.SAMPLE_ALPHA_TO_COVERAGE):l(J.SAMPLE_ALPHA_TO_COVERAGE)}function t0(s){if(f!==s){if(s)J.frontFace(J.CW);else J.frontFace(J.CCW);f=s}}function C0(s){if(s!==TH){if(h(J.CULL_FACE),s!==n)if(s===BW)J.cullFace(J.BACK);else if(s===_H)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else l(J.CULL_FACE);n=s}function GJ(s){if(s!==X0){if(b)J.lineWidth(s);X0=s}}function OJ(s,f0,F0){if(s){if(h(J.POLYGON_OFFSET_FILL),v!==f0||y!==F0){if(v=f0,y=F0,Y.getReversed())f0=-f0;J.polygonOffset(f0,F0)}}else l(J.POLYGON_OFFSET_FILL)}function jJ(s){if(s)h(J.SCISSOR_TEST);else l(J.SCISSOR_TEST)}function p(s){if(s===void 0)s=J.TEXTURE0+u-1;if(e!==s)J.activeTexture(s),e=s}function sJ(s,f0,F0){if(F0===void 0)if(e===null)F0=J.TEXTURE0+u-1;else F0=e;let j0=Y0[F0];if(j0===void 0)j0={type:void 0,texture:void 0},Y0[F0]=j0;if(j0.type!==s||j0.texture!==f0){if(e!==F0)J.activeTexture(F0),e=F0;J.bindTexture(s,f0||T[s]),j0.type=s,j0.texture=f0}}function FJ(){let s=Y0[e];if(s!==void 0&&s.type!==void 0)J.bindTexture(s.type,null),s.type=void 0,s.texture=void 0}function DJ(){try{J.compressedTexImage2D(...arguments)}catch(s){ZJ("WebGLState:",s)}}function S(){try{J.compressedTexImage3D(...arguments)}catch(s){ZJ("WebGLState:",s)}}function C(){try{J.texSubImage2D(...arguments)}catch(s){ZJ("WebGLState:",s)}}function g(){try{J.texSubImage3D(...arguments)}catch(s){ZJ("WebGLState:",s)}}function K0(){try{J.compressedTexSubImage2D(...arguments)}catch(s){ZJ("WebGLState:",s)}}function D0(){try{J.compressedTexSubImage3D(...arguments)}catch(s){ZJ("WebGLState:",s)}}function T0(){try{J.texStorage2D(...arguments)}catch(s){ZJ("WebGLState:",s)}}function v0(){try{J.texStorage3D(...arguments)}catch(s){ZJ("WebGLState:",s)}}function N0(){try{J.texImage2D(...arguments)}catch(s){ZJ("WebGLState:",s)}}function R0(){try{J.texImage3D(...arguments)}catch(s){ZJ("WebGLState:",s)}}function A0(s){if(F[s]!==void 0)return F[s];else return J.getParameter(s)}function s0(s,f0){if(F[s]!==f0)J.pixelStorei(s,f0),F[s]=f0}function _0(s){if(G0.equals(s)===!1)J.scissor(s.x,s.y,s.z,s.w),G0.copy(s)}function P0(s){if(t.equals(s)===!1)J.viewport(s.x,s.y,s.z,s.w),t.copy(s)}function JJ(s,f0){let F0=U.get(f0);if(F0===void 0)F0=new WeakMap,U.set(f0,F0);let j0=F0.get(s);if(j0===void 0)j0=J.getUniformBlockIndex(f0,s.name),F0.set(s,j0)}function e0(s,f0){let j0=U.get(f0).get(s);if(H.get(f0)!==j0)J.uniformBlockBinding(f0,j0,s.__bindingPointIndex),H.set(f0,j0)}function zJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},F={},e=null,Y0={},G={},E=new WeakMap,O=[],B=null,R=!1,q=null,M=null,k=null,V=null,L=null,P=null,A=null,D=new y0(0,0,0),I=0,d=!1,f=null,n=null,X0=null,v=null,y=null,G0.set(0,0,J.canvas.width,J.canvas.height),t.set(0,0,J.canvas.width,J.canvas.height),W.reset(),Y.reset(),X.reset()}return{buffers:{color:W,depth:Y,stencil:X},enable:h,disable:l,bindFramebuffer:Z0,drawBuffers:J0,useProgram:O0,setBlending:S0,setMaterial:m0,setFlipSided:t0,setCullFace:C0,setLineWidth:GJ,setPolygonOffset:OJ,setScissorTest:jJ,activeTexture:p,bindTexture:sJ,unbindTexture:FJ,compressedTexImage2D:DJ,compressedTexImage3D:S,texImage2D:N0,texImage3D:R0,pixelStorei:s0,getParameter:A0,updateUBOMapping:JJ,uniformBlockBinding:e0,texStorage2D:T0,texStorage3D:v0,texSubImage2D:C,texSubImage3D:g,compressedTexSubImage2D:K0,compressedTexSubImage3D:D0,scissor:_0,viewport:P0,reset:zJ}}function dO(J,$,Q,Z,K,W,Y){let X=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new L0,N=new WeakMap,F=new Set,G,E=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(S){}function B(S,C){return O?new OffscreenCanvas(S,C):c6("canvas")}function R(S,C,g){let K0=1,D0=DJ(S);if(D0.width>g||D0.height>g)K0=g/Math.max(D0.width,D0.height);if(K0<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let T0=Math.floor(K0*D0.width),v0=Math.floor(K0*D0.height);if(G===void 0)G=B(T0,v0);let N0=C?B(T0,v0):G;return N0.width=T0,N0.height=v0,N0.getContext("2d").drawImage(S,0,0,T0,v0),r0("WebGLRenderer: Texture has been resized from ("+D0.width+"x"+D0.height+") to ("+T0+"x"+v0+")."),N0}else{if("data"in S)r0("WebGLRenderer: Image in DataTexture is too big ("+D0.width+"x"+D0.height+").");return S}return S}function q(S){return S.generateMipmaps}function M(S){J.generateMipmap(S)}function k(S){if(S.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(S.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(S,C,g,K0,D0,T0=!1){if(S!==null){if(J[S]!==void 0)return J[S];r0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let v0;if(K0){if(v0=$.get("EXT_texture_norm16"),!v0)r0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let N0=C;if(C===J.RED){if(g===J.FLOAT)N0=J.R32F;if(g===J.HALF_FLOAT)N0=J.R16F;if(g===J.UNSIGNED_BYTE)N0=J.R8;if(g===J.UNSIGNED_SHORT&&v0)N0=v0.R16_EXT;if(g===J.SHORT&&v0)N0=v0.R16_SNORM_EXT}if(C===J.RED_INTEGER){if(g===J.UNSIGNED_BYTE)N0=J.R8UI;if(g===J.UNSIGNED_SHORT)N0=J.R16UI;if(g===J.UNSIGNED_INT)N0=J.R32UI;if(g===J.BYTE)N0=J.R8I;if(g===J.SHORT)N0=J.R16I;if(g===J.INT)N0=J.R32I}if(C===J.RG){if(g===J.FLOAT)N0=J.RG32F;if(g===J.HALF_FLOAT)N0=J.RG16F;if(g===J.UNSIGNED_BYTE)N0=J.RG8;if(g===J.UNSIGNED_SHORT&&v0)N0=v0.RG16_EXT;if(g===J.SHORT&&v0)N0=v0.RG16_SNORM_EXT}if(C===J.RG_INTEGER){if(g===J.UNSIGNED_BYTE)N0=J.RG8UI;if(g===J.UNSIGNED_SHORT)N0=J.RG16UI;if(g===J.UNSIGNED_INT)N0=J.RG32UI;if(g===J.BYTE)N0=J.RG8I;if(g===J.SHORT)N0=J.RG16I;if(g===J.INT)N0=J.RG32I}if(C===J.RGB_INTEGER){if(g===J.UNSIGNED_BYTE)N0=J.RGB8UI;if(g===J.UNSIGNED_SHORT)N0=J.RGB16UI;if(g===J.UNSIGNED_INT)N0=J.RGB32UI;if(g===J.BYTE)N0=J.RGB8I;if(g===J.SHORT)N0=J.RGB16I;if(g===J.INT)N0=J.RGB32I}if(C===J.RGBA_INTEGER){if(g===J.UNSIGNED_BYTE)N0=J.RGBA8UI;if(g===J.UNSIGNED_SHORT)N0=J.RGBA16UI;if(g===J.UNSIGNED_INT)N0=J.RGBA32UI;if(g===J.BYTE)N0=J.RGBA8I;if(g===J.SHORT)N0=J.RGBA16I;if(g===J.INT)N0=J.RGBA32I}if(C===J.RGB){if(g===J.UNSIGNED_SHORT&&v0)N0=v0.RGB16_EXT;if(g===J.SHORT&&v0)N0=v0.RGB16_SNORM_EXT;if(g===J.UNSIGNED_INT_5_9_9_9_REV)N0=J.RGB9_E5;if(g===J.UNSIGNED_INT_10F_11F_11F_REV)N0=J.R11F_G11F_B10F}if(C===J.RGBA){let R0=T0?HY:RJ.getTransfer(D0);if(g===J.FLOAT)N0=J.RGBA32F;if(g===J.HALF_FLOAT)N0=J.RGBA16F;if(g===J.UNSIGNED_BYTE)N0=R0===uJ?J.SRGB8_ALPHA8:J.RGBA8;if(g===J.UNSIGNED_SHORT&&v0)N0=v0.RGBA16_EXT;if(g===J.SHORT&&v0)N0=v0.RGBA16_SNORM_EXT;if(g===J.UNSIGNED_SHORT_4_4_4_4)N0=J.RGBA4;if(g===J.UNSIGNED_SHORT_5_5_5_1)N0=J.RGB5_A1}if(N0===J.R16F||N0===J.R32F||N0===J.RG16F||N0===J.RG32F||N0===J.RGBA16F||N0===J.RGBA32F)$.get("EXT_color_buffer_float");return N0}function L(S,C){let g;if(S){if(C===null||C===C7||C===J$)g=J.DEPTH24_STENCIL8;else if(C===e9)g=J.DEPTH32F_STENCIL8;else if(C===ZQ)g=J.DEPTH24_STENCIL8,r0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(C===null||C===C7||C===J$)g=J.DEPTH_COMPONENT24;else if(C===e9)g=J.DEPTH_COMPONENT32F;else if(C===ZQ)g=J.DEPTH_COMPONENT16;return g}function P(S,C){if(q(S)===!0||S.isFramebufferTexture&&S.minFilter!==B9&&S.minFilter!==X8)return Math.log2(Math.max(C.width,C.height))+1;else if(S.mipmaps!==void 0&&S.mipmaps.length>0)return S.mipmaps.length;else if(S.isCompressedTexture&&Array.isArray(S.image))return C.mipmaps.length;else return 1}function A(S){let C=S.target;if(C.removeEventListener("dispose",A),I(C),C.isVideoTexture)N.delete(C);if(C.isHTMLTexture)F.delete(C)}function D(S){let C=S.target;C.removeEventListener("dispose",D),f(C)}function I(S){let C=Z.get(S);if(C.__webglInit===void 0)return;let g=S.source,K0=E.get(g);if(K0){let D0=K0[C.__cacheKey];if(D0.usedTimes--,D0.usedTimes===0)d(S);if(Object.keys(K0).length===0)E.delete(g)}Z.remove(S)}function d(S){let C=Z.get(S);J.deleteTexture(C.__webglTexture);let g=S.source,K0=E.get(g);delete K0[C.__cacheKey],Y.memory.textures--}function f(S){let C=Z.get(S);if(S.depthTexture)S.depthTexture.dispose(),Z.remove(S.depthTexture);if(S.isWebGLCubeRenderTarget)for(let K0=0;K0<6;K0++){if(Array.isArray(C.__webglFramebuffer[K0]))for(let D0=0;D0<C.__webglFramebuffer[K0].length;D0++)J.deleteFramebuffer(C.__webglFramebuffer[K0][D0]);else J.deleteFramebuffer(C.__webglFramebuffer[K0]);if(C.__webglDepthbuffer)J.deleteRenderbuffer(C.__webglDepthbuffer[K0])}else{if(Array.isArray(C.__webglFramebuffer))for(let K0=0;K0<C.__webglFramebuffer.length;K0++)J.deleteFramebuffer(C.__webglFramebuffer[K0]);else J.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer)J.deleteRenderbuffer(C.__webglDepthbuffer);if(C.__webglMultisampledFramebuffer)J.deleteFramebuffer(C.__webglMultisampledFramebuffer);if(C.__webglColorRenderbuffer){for(let K0=0;K0<C.__webglColorRenderbuffer.length;K0++)if(C.__webglColorRenderbuffer[K0])J.deleteRenderbuffer(C.__webglColorRenderbuffer[K0])}if(C.__webglDepthRenderbuffer)J.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let g=S.textures;for(let K0=0,D0=g.length;K0<D0;K0++){let T0=Z.get(g[K0]);if(T0.__webglTexture)J.deleteTexture(T0.__webglTexture),Y.memory.textures--;Z.remove(g[K0])}Z.remove(S)}let n=0;function X0(){n=0}function v(){return n}function y(S){n=S}function u(){let S=n;if(S>=K.maxTextures)r0("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+K.maxTextures);return n+=1,S}function b(S){let C=[];return C.push(S.wrapS),C.push(S.wrapT),C.push(S.wrapR||0),C.push(S.magFilter),C.push(S.minFilter),C.push(S.anisotropy),C.push(S.internalFormat),C.push(S.format),C.push(S.type),C.push(S.generateMipmaps),C.push(S.premultiplyAlpha),C.push(S.flipY),C.push(S.unpackAlignment),C.push(S.colorSpace),C.join()}function r(S,C){let g=Z.get(S);if(S.isVideoTexture)sJ(S);if(S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&g.__version!==S.version){let K0=S.image;if(K0===null)r0("WebGLRenderer: Texture marked for update but no image data found.");else if(K0.complete===!1)r0("WebGLRenderer: Texture marked for update but image is incomplete");else{l(g,S,C);return}}else if(S.isExternalTexture)g.__webglTexture=S.sourceTexture?S.sourceTexture:null;Q.bindTexture(J.TEXTURE_2D,g.__webglTexture,J.TEXTURE0+C)}function m(S,C){let g=Z.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&g.__version!==S.version){l(g,S,C);return}else if(S.isExternalTexture)g.__webglTexture=S.sourceTexture?S.sourceTexture:null;Q.bindTexture(J.TEXTURE_2D_ARRAY,g.__webglTexture,J.TEXTURE0+C)}function e(S,C){let g=Z.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&g.__version!==S.version){l(g,S,C);return}Q.bindTexture(J.TEXTURE_3D,g.__webglTexture,J.TEXTURE0+C)}function Y0(S,C){let g=Z.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&g.__version!==S.version){Z0(g,S,C);return}Q.bindTexture(J.TEXTURE_CUBE_MAP,g.__webglTexture,J.TEXTURE0+C)}let j={[k7]:J.REPEAT,[t6]:J.CLAMP_TO_EDGE,[_Z]:J.MIRRORED_REPEAT},o={[B9]:J.NEAREST,[wZ]:J.NEAREST_MIPMAP_NEAREST,[i7]:J.NEAREST_MIPMAP_LINEAR,[X8]:J.LINEAR,[e6]:J.LINEAR_MIPMAP_NEAREST,[Q9]:J.LINEAR_MIPMAP_LINEAR},G0={[OU]:J.NEVER,[DU]:J.ALWAYS,[RU]:J.LESS,[xZ]:J.LEQUAL,[LU]:J.EQUAL,[gZ]:J.GEQUAL,[VU]:J.GREATER,[BU]:J.NOTEQUAL};function t(S,C){if(C.type===e9&&$.has("OES_texture_float_linear")===!1&&(C.magFilter===X8||C.magFilter===e6||C.magFilter===i7||C.magFilter===Q9||C.minFilter===X8||C.minFilter===e6||C.minFilter===i7||C.minFilter===Q9))r0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(S,J.TEXTURE_WRAP_S,j[C.wrapS]),J.texParameteri(S,J.TEXTURE_WRAP_T,j[C.wrapT]),S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY)J.texParameteri(S,J.TEXTURE_WRAP_R,j[C.wrapR]);if(J.texParameteri(S,J.TEXTURE_MAG_FILTER,o[C.magFilter]),J.texParameteri(S,J.TEXTURE_MIN_FILTER,o[C.minFilter]),C.compareFunction)J.texParameteri(S,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(S,J.TEXTURE_COMPARE_FUNC,G0[C.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===B9)return;if(C.minFilter!==i7&&C.minFilter!==Q9)return;if(C.type===e9&&$.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||Z.get(C).__currentAnisotropy){let g=$.get("EXT_texture_filter_anisotropic");J.texParameterf(S,g.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,K.getMaxAnisotropy())),Z.get(C).__currentAnisotropy=C.anisotropy}}}function x(S,C){let g=!1;if(S.__webglInit===void 0)S.__webglInit=!0,C.addEventListener("dispose",A);let K0=C.source,D0=E.get(K0);if(D0===void 0)D0={},E.set(K0,D0);let T0=b(C);if(T0!==S.__cacheKey){if(D0[T0]===void 0)D0[T0]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,g=!0;D0[T0].usedTimes++;let v0=D0[S.__cacheKey];if(v0!==void 0){if(D0[S.__cacheKey].usedTimes--,v0.usedTimes===0)d(C)}S.__cacheKey=T0,S.__webglTexture=D0[T0].texture}return g}function T(S,C,g){return Math.floor(Math.floor(S/g)/C)}function h(S,C,g,K0){let T0=S.updateRanges;if(T0.length===0)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,C.width,C.height,g,K0,C.data);else{T0.sort((s0,_0)=>s0.start-_0.start);let v0=0;for(let s0=1;s0<T0.length;s0++){let _0=T0[v0],P0=T0[s0],JJ=_0.start+_0.count,e0=T(P0.start,C.width,4),zJ=T(_0.start,C.width,4);if(P0.start<=JJ+1&&e0===zJ&&T(P0.start+P0.count-1,C.width,4)===e0)_0.count=Math.max(_0.count,P0.start+P0.count-_0.start);else++v0,T0[v0]=P0}T0.length=v0+1;let N0=Q.getParameter(J.UNPACK_ROW_LENGTH),R0=Q.getParameter(J.UNPACK_SKIP_PIXELS),A0=Q.getParameter(J.UNPACK_SKIP_ROWS);Q.pixelStorei(J.UNPACK_ROW_LENGTH,C.width);for(let s0=0,_0=T0.length;s0<_0;s0++){let P0=T0[s0],JJ=Math.floor(P0.start/4),e0=Math.ceil(P0.count/4),zJ=JJ%C.width,s=Math.floor(JJ/C.width),f0=e0,F0=1;Q.pixelStorei(J.UNPACK_SKIP_PIXELS,zJ),Q.pixelStorei(J.UNPACK_SKIP_ROWS,s),Q.texSubImage2D(J.TEXTURE_2D,0,zJ,s,f0,1,g,K0,C.data)}S.clearUpdateRanges(),Q.pixelStorei(J.UNPACK_ROW_LENGTH,N0),Q.pixelStorei(J.UNPACK_SKIP_PIXELS,R0),Q.pixelStorei(J.UNPACK_SKIP_ROWS,A0)}}function l(S,C,g){let K0=J.TEXTURE_2D;if(C.isDataArrayTexture||C.isCompressedArrayTexture)K0=J.TEXTURE_2D_ARRAY;if(C.isData3DTexture)K0=J.TEXTURE_3D;let D0=x(S,C),T0=C.source;Q.bindTexture(K0,S.__webglTexture,J.TEXTURE0+g);let v0=Z.get(T0);if(T0.version!==v0.__version||D0===!0){if(Q.activeTexture(J.TEXTURE0+g),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){let F0=RJ.getPrimaries(RJ.workingColorSpace),j0=C.colorSpace===t7?null:RJ.getPrimaries(C.colorSpace),l0=C.colorSpace===t7||F0===j0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,C.flipY),Q.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),Q.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,l0)}Q.pixelStorei(J.UNPACK_ALIGNMENT,C.unpackAlignment);let R0=R(C.image,!1,K.maxTextureSize);R0=FJ(C,R0);let A0=W.convert(C.format,C.colorSpace),s0=W.convert(C.type),_0=V(C.internalFormat,A0,s0,C.normalized,C.colorSpace,C.isVideoTexture);t(K0,C);let P0,JJ=C.mipmaps,e0=C.isVideoTexture!==!0,zJ=v0.__version===void 0||D0===!0,s=T0.dataReady,f0=P(C,R0);if(C.isDepthTexture){if(_0=L(C.format===a7,C.type),zJ)if(e0)Q.texStorage2D(J.TEXTURE_2D,1,_0,R0.width,R0.height);else Q.texImage2D(J.TEXTURE_2D,0,_0,R0.width,R0.height,0,A0,s0,null)}else if(C.isDataTexture)if(JJ.length>0){if(e0&&zJ)Q.texStorage2D(J.TEXTURE_2D,f0,_0,JJ[0].width,JJ[0].height);for(let F0=0,j0=JJ.length;F0<j0;F0++)if(P0=JJ[F0],e0){if(s)Q.texSubImage2D(J.TEXTURE_2D,F0,0,0,P0.width,P0.height,A0,s0,P0.data)}else Q.texImage2D(J.TEXTURE_2D,F0,_0,P0.width,P0.height,0,A0,s0,P0.data);C.generateMipmaps=!1}else if(e0){if(zJ)Q.texStorage2D(J.TEXTURE_2D,f0,_0,R0.width,R0.height);if(s)h(C,R0,A0,s0)}else Q.texImage2D(J.TEXTURE_2D,0,_0,R0.width,R0.height,0,A0,s0,R0.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){if(e0&&zJ)Q.texStorage3D(J.TEXTURE_2D_ARRAY,f0,_0,JJ[0].width,JJ[0].height,R0.depth);for(let F0=0,j0=JJ.length;F0<j0;F0++)if(P0=JJ[F0],C.format!==j9)if(A0!==null)if(e0){if(s)if(C.layerUpdates.size>0){let l0=hY(P0.width,P0.height,C.format,C.type);for(let M0 of C.layerUpdates){let b0=P0.data.subarray(M0*l0/P0.data.BYTES_PER_ELEMENT,(M0+1)*l0/P0.data.BYTES_PER_ELEMENT);Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,F0,0,0,M0,P0.width,P0.height,1,A0,b0)}}else Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,F0,0,0,0,P0.width,P0.height,R0.depth,A0,P0.data)}else Q.compressedTexImage3D(J.TEXTURE_2D_ARRAY,F0,_0,P0.width,P0.height,R0.depth,0,P0.data,0,0);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(e0){if(s)Q.texSubImage3D(J.TEXTURE_2D_ARRAY,F0,0,0,0,P0.width,P0.height,R0.depth,A0,s0,P0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,F0,_0,P0.width,P0.height,R0.depth,0,A0,s0,P0.data);if(C.layerUpdates.size>0)C.clearLayerUpdates()}else{if(e0&&zJ)Q.texStorage2D(J.TEXTURE_2D,f0,_0,JJ[0].width,JJ[0].height);for(let F0=0,j0=JJ.length;F0<j0;F0++)if(P0=JJ[F0],C.format!==j9)if(A0!==null)if(e0){if(s)Q.compressedTexSubImage2D(J.TEXTURE_2D,F0,0,0,P0.width,P0.height,A0,P0.data)}else Q.compressedTexImage2D(J.TEXTURE_2D,F0,_0,P0.width,P0.height,0,P0.data);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(e0){if(s)Q.texSubImage2D(J.TEXTURE_2D,F0,0,0,P0.width,P0.height,A0,s0,P0.data)}else Q.texImage2D(J.TEXTURE_2D,F0,_0,P0.width,P0.height,0,A0,s0,P0.data)}else if(C.isDataArrayTexture)if(e0){if(zJ)Q.texStorage3D(J.TEXTURE_2D_ARRAY,f0,_0,R0.width,R0.height,R0.depth);if(s)if(C.layerUpdates.size>0){let F0=hY(R0.width,R0.height,C.format,C.type);for(let j0 of C.layerUpdates){let l0=R0.data.subarray(j0*F0/R0.data.BYTES_PER_ELEMENT,(j0+1)*F0/R0.data.BYTES_PER_ELEMENT);Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,j0,R0.width,R0.height,1,A0,s0,l0)}C.clearLayerUpdates()}else Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,R0.width,R0.height,R0.depth,A0,s0,R0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,0,_0,R0.width,R0.height,R0.depth,0,A0,s0,R0.data);else if(C.isData3DTexture)if(e0){if(zJ)Q.texStorage3D(J.TEXTURE_3D,f0,_0,R0.width,R0.height,R0.depth);if(s)Q.texSubImage3D(J.TEXTURE_3D,0,0,0,0,R0.width,R0.height,R0.depth,A0,s0,R0.data)}else Q.texImage3D(J.TEXTURE_3D,0,_0,R0.width,R0.height,R0.depth,0,A0,s0,R0.data);else if(C.isFramebufferTexture){if(zJ)if(e0)Q.texStorage2D(J.TEXTURE_2D,f0,_0,R0.width,R0.height);else{let{width:F0,height:j0}=R0;for(let l0=0;l0<f0;l0++)Q.texImage2D(J.TEXTURE_2D,l0,_0,F0,j0,0,A0,s0,null),F0>>=1,j0>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in J){let F0=J.canvas;if(!F0.hasAttribute("layoutsubtree"))F0.setAttribute("layoutsubtree","true");if(R0.parentNode!==F0){F0.appendChild(R0),F.add(C),F0.onpaint=(j0)=>{let l0=j0.changedElements;for(let M0 of F)if(l0.includes(M0.image))M0.needsUpdate=!0},F0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,R0);else{let{RGBA:l0,RGBA:M0,UNSIGNED_BYTE:b0}=J;J.texElementImage2D(J.TEXTURE_2D,0,l0,M0,b0,R0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(JJ.length>0){if(e0&&zJ){let F0=DJ(JJ[0]);Q.texStorage2D(J.TEXTURE_2D,f0,_0,F0.width,F0.height)}for(let F0=0,j0=JJ.length;F0<j0;F0++)if(P0=JJ[F0],e0){if(s)Q.texSubImage2D(J.TEXTURE_2D,F0,0,0,A0,s0,P0)}else Q.texImage2D(J.TEXTURE_2D,F0,_0,A0,s0,P0);C.generateMipmaps=!1}else if(e0){if(zJ){let F0=DJ(R0);Q.texStorage2D(J.TEXTURE_2D,f0,_0,F0.width,F0.height)}if(s)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,A0,s0,R0)}else Q.texImage2D(J.TEXTURE_2D,0,_0,A0,s0,R0);if(q(C))M(K0);if(v0.__version=T0.version,C.onUpdate)C.onUpdate(C)}S.__version=C.version}function Z0(S,C,g){if(C.image.length!==6)return;let K0=x(S,C),D0=C.source;Q.bindTexture(J.TEXTURE_CUBE_MAP,S.__webglTexture,J.TEXTURE0+g);let T0=Z.get(D0);if(D0.version!==T0.__version||K0===!0){Q.activeTexture(J.TEXTURE0+g);let v0=RJ.getPrimaries(RJ.workingColorSpace),N0=C.colorSpace===t7?null:RJ.getPrimaries(C.colorSpace),R0=C.colorSpace===t7||v0===N0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,C.flipY),Q.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),Q.pixelStorei(J.UNPACK_ALIGNMENT,C.unpackAlignment),Q.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,R0);let A0=C.isCompressedTexture||C.image[0].isCompressedTexture,s0=C.image[0]&&C.image[0].isDataTexture,_0=[];for(let M0=0;M0<6;M0++){if(!A0&&!s0)_0[M0]=R(C.image[M0],!0,K.maxCubemapSize);else _0[M0]=s0?C.image[M0].image:C.image[M0];_0[M0]=FJ(C,_0[M0])}let P0=_0[0],JJ=W.convert(C.format,C.colorSpace),e0=W.convert(C.type),zJ=V(C.internalFormat,JJ,e0,C.normalized,C.colorSpace),s=C.isVideoTexture!==!0,f0=T0.__version===void 0||K0===!0,F0=D0.dataReady,j0=P(C,P0);t(J.TEXTURE_CUBE_MAP,C);let l0;if(A0){if(s&&f0)Q.texStorage2D(J.TEXTURE_CUBE_MAP,j0,zJ,P0.width,P0.height);for(let M0=0;M0<6;M0++){l0=_0[M0].mipmaps;for(let b0=0;b0<l0.length;b0++){let YJ=l0[b0];if(C.format!==j9)if(JJ!==null)if(s){if(F0)Q.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,b0,0,0,YJ.width,YJ.height,JJ,YJ.data)}else Q.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,b0,zJ,YJ.width,YJ.height,0,YJ.data);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(s){if(F0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,b0,0,0,YJ.width,YJ.height,JJ,e0,YJ.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,b0,zJ,YJ.width,YJ.height,0,JJ,e0,YJ.data)}}}else{if(l0=C.mipmaps,s&&f0){if(l0.length>0)j0++;let M0=DJ(_0[0]);Q.texStorage2D(J.TEXTURE_CUBE_MAP,j0,zJ,M0.width,M0.height)}for(let M0=0;M0<6;M0++)if(s0){if(s){if(F0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,0,0,_0[M0].width,_0[M0].height,JJ,e0,_0[M0].data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,zJ,_0[M0].width,_0[M0].height,0,JJ,e0,_0[M0].data);for(let b0=0;b0<l0.length;b0++){let cJ=l0[b0].image[M0].image;if(s){if(F0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,b0+1,0,0,cJ.width,cJ.height,JJ,e0,cJ.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,b0+1,zJ,cJ.width,cJ.height,0,JJ,e0,cJ.data)}}else{if(s){if(F0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,0,0,JJ,e0,_0[M0])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,zJ,JJ,e0,_0[M0]);for(let b0=0;b0<l0.length;b0++){let YJ=l0[b0];if(s){if(F0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,b0+1,0,0,JJ,e0,YJ.image[M0])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,b0+1,zJ,JJ,e0,YJ.image[M0])}}}if(q(C))M(J.TEXTURE_CUBE_MAP);if(T0.__version=D0.version,C.onUpdate)C.onUpdate(C)}S.__version=C.version}function J0(S,C,g,K0,D0,T0){let v0=W.convert(g.format,g.colorSpace),N0=W.convert(g.type),R0=V(g.internalFormat,v0,N0,g.normalized,g.colorSpace),A0=Z.get(C),s0=Z.get(g);if(s0.__renderTarget=C,!A0.__hasExternalTextures){let _0=Math.max(1,C.width>>T0),P0=Math.max(1,C.height>>T0);if(D0===J.TEXTURE_3D||D0===J.TEXTURE_2D_ARRAY)Q.texImage3D(D0,T0,R0,_0,P0,C.depth,0,v0,N0,null);else Q.texImage2D(D0,T0,R0,_0,P0,0,v0,N0,null)}if(Q.bindFramebuffer(J.FRAMEBUFFER,S),p(C))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,K0,D0,s0.__webglTexture,0,jJ(C));else if(D0===J.TEXTURE_2D||D0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&D0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,K0,D0,s0.__webglTexture,T0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function O0(S,C,g){if(J.bindRenderbuffer(J.RENDERBUFFER,S),C.depthBuffer){let K0=C.depthTexture,D0=K0&&K0.isDepthTexture?K0.type:null,T0=L(C.stencilBuffer,D0),v0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(p(C))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,jJ(C),T0,C.width,C.height);else if(g)J.renderbufferStorageMultisample(J.RENDERBUFFER,jJ(C),T0,C.width,C.height);else J.renderbufferStorage(J.RENDERBUFFER,T0,C.width,C.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,v0,J.RENDERBUFFER,S)}else{let K0=C.textures;for(let D0=0;D0<K0.length;D0++){let T0=K0[D0],v0=W.convert(T0.format,T0.colorSpace),N0=W.convert(T0.type),R0=V(T0.internalFormat,v0,N0,T0.normalized,T0.colorSpace);if(p(C))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,jJ(C),R0,C.width,C.height);else if(g)J.renderbufferStorageMultisample(J.RENDERBUFFER,jJ(C),R0,C.width,C.height);else J.renderbufferStorage(J.RENDERBUFFER,R0,C.width,C.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function E0(S,C,g){let K0=C.isWebGLCubeRenderTarget===!0;if(Q.bindFramebuffer(J.FRAMEBUFFER,S),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let D0=Z.get(C.depthTexture);if(D0.__renderTarget=C,!D0.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0;if(K0){if(D0.__webglInit===void 0)D0.__webglInit=!0,C.depthTexture.addEventListener("dispose",A);if(D0.__webglTexture===void 0){D0.__webglTexture=J.createTexture(),Q.bindTexture(J.TEXTURE_CUBE_MAP,D0.__webglTexture),t(J.TEXTURE_CUBE_MAP,C.depthTexture);let A0=W.convert(C.depthTexture.format),s0=W.convert(C.depthTexture.type),_0;if(C.depthTexture.format===o7)_0=J.DEPTH_COMPONENT24;else if(C.depthTexture.format===a7)_0=J.DEPTH24_STENCIL8;for(let P0=0;P0<6;P0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+P0,0,_0,C.width,C.height,0,A0,s0,null)}}else r(C.depthTexture,0);let T0=D0.__webglTexture,v0=jJ(C),N0=K0?J.TEXTURE_CUBE_MAP_POSITIVE_X+g:J.TEXTURE_2D,R0=C.depthTexture.format===a7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(C.depthTexture.format===o7)if(p(C))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,R0,N0,T0,0,v0);else J.framebufferTexture2D(J.FRAMEBUFFER,R0,N0,T0,0);else if(C.depthTexture.format===a7)if(p(C))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,R0,N0,T0,0,v0);else J.framebufferTexture2D(J.FRAMEBUFFER,R0,N0,T0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U0(S){let C=Z.get(S),g=S.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==S.depthTexture){let K0=S.depthTexture;if(C.__depthDisposeCallback)C.__depthDisposeCallback();if(K0){let D0=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,K0.removeEventListener("dispose",D0)};K0.addEventListener("dispose",D0),C.__depthDisposeCallback=D0}C.__boundDepthTexture=K0}if(S.depthTexture&&!C.__autoAllocateDepthBuffer)if(g)for(let K0=0;K0<6;K0++)E0(C.__webglFramebuffer[K0],S,K0);else{let K0=S.texture.mipmaps;if(K0&&K0.length>0)E0(C.__webglFramebuffer[0],S,0);else E0(C.__webglFramebuffer,S,0)}else if(g){C.__webglDepthbuffer=[];for(let K0=0;K0<6;K0++)if(Q.bindFramebuffer(J.FRAMEBUFFER,C.__webglFramebuffer[K0]),C.__webglDepthbuffer[K0]===void 0)C.__webglDepthbuffer[K0]=J.createRenderbuffer(),O0(C.__webglDepthbuffer[K0],S,!1);else{let D0=S.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,T0=C.__webglDepthbuffer[K0];J.bindRenderbuffer(J.RENDERBUFFER,T0),J.framebufferRenderbuffer(J.FRAMEBUFFER,D0,J.RENDERBUFFER,T0)}}else{let K0=S.texture.mipmaps;if(K0&&K0.length>0)Q.bindFramebuffer(J.FRAMEBUFFER,C.__webglFramebuffer[0]);else Q.bindFramebuffer(J.FRAMEBUFFER,C.__webglFramebuffer);if(C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=J.createRenderbuffer(),O0(C.__webglDepthbuffer,S,!1);else{let D0=S.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,T0=C.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,T0),J.framebufferRenderbuffer(J.FRAMEBUFFER,D0,J.RENDERBUFFER,T0)}}Q.bindFramebuffer(J.FRAMEBUFFER,null)}function S0(S,C,g){let K0=Z.get(S);if(C!==void 0)J0(K0.__webglFramebuffer,S,S.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(g!==void 0)U0(S)}function m0(S){let C=S.texture,g=Z.get(S),K0=Z.get(C);S.addEventListener("dispose",D);let D0=S.textures,T0=S.isWebGLCubeRenderTarget===!0,v0=D0.length>1;if(!v0){if(K0.__webglTexture===void 0)K0.__webglTexture=J.createTexture();K0.__version=C.version,Y.memory.textures++}if(T0){g.__webglFramebuffer=[];for(let N0=0;N0<6;N0++)if(C.mipmaps&&C.mipmaps.length>0){g.__webglFramebuffer[N0]=[];for(let R0=0;R0<C.mipmaps.length;R0++)g.__webglFramebuffer[N0][R0]=J.createFramebuffer()}else g.__webglFramebuffer[N0]=J.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){g.__webglFramebuffer=[];for(let N0=0;N0<C.mipmaps.length;N0++)g.__webglFramebuffer[N0]=J.createFramebuffer()}else g.__webglFramebuffer=J.createFramebuffer();if(v0)for(let N0=0,R0=D0.length;N0<R0;N0++){let A0=Z.get(D0[N0]);if(A0.__webglTexture===void 0)A0.__webglTexture=J.createTexture(),Y.memory.textures++}if(S.samples>0&&p(S)===!1){g.__webglMultisampledFramebuffer=J.createFramebuffer(),g.__webglColorRenderbuffer=[],Q.bindFramebuffer(J.FRAMEBUFFER,g.__webglMultisampledFramebuffer);for(let N0=0;N0<D0.length;N0++){let R0=D0[N0];g.__webglColorRenderbuffer[N0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,g.__webglColorRenderbuffer[N0]);let A0=W.convert(R0.format,R0.colorSpace),s0=W.convert(R0.type),_0=V(R0.internalFormat,A0,s0,R0.normalized,R0.colorSpace,S.isXRRenderTarget===!0),P0=jJ(S);J.renderbufferStorageMultisample(J.RENDERBUFFER,P0,_0,S.width,S.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+N0,J.RENDERBUFFER,g.__webglColorRenderbuffer[N0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),S.depthBuffer)g.__webglDepthRenderbuffer=J.createRenderbuffer(),O0(g.__webglDepthRenderbuffer,S,!0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}}if(T0){Q.bindTexture(J.TEXTURE_CUBE_MAP,K0.__webglTexture),t(J.TEXTURE_CUBE_MAP,C);for(let N0=0;N0<6;N0++)if(C.mipmaps&&C.mipmaps.length>0)for(let R0=0;R0<C.mipmaps.length;R0++)J0(g.__webglFramebuffer[N0][R0],S,C,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+N0,R0);else J0(g.__webglFramebuffer[N0],S,C,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+N0,0);if(q(C))M(J.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(v0){for(let N0=0,R0=D0.length;N0<R0;N0++){let A0=D0[N0],s0=Z.get(A0),_0=J.TEXTURE_2D;if(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)_0=S.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(_0,s0.__webglTexture),t(_0,A0),J0(g.__webglFramebuffer,S,A0,J.COLOR_ATTACHMENT0+N0,_0,0),q(A0))M(_0)}Q.unbindTexture()}else{let N0=J.TEXTURE_2D;if(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)N0=S.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(N0,K0.__webglTexture),t(N0,C),C.mipmaps&&C.mipmaps.length>0)for(let R0=0;R0<C.mipmaps.length;R0++)J0(g.__webglFramebuffer[R0],S,C,J.COLOR_ATTACHMENT0,N0,R0);else J0(g.__webglFramebuffer,S,C,J.COLOR_ATTACHMENT0,N0,0);if(q(C))M(N0);Q.unbindTexture()}if(S.depthBuffer)U0(S)}function t0(S){let C=S.textures;for(let g=0,K0=C.length;g<K0;g++){let D0=C[g];if(q(D0)){let T0=k(S),v0=Z.get(D0).__webglTexture;Q.bindTexture(T0,v0),M(T0),Q.unbindTexture()}}}let C0=[],GJ=[];function OJ(S){if(S.samples>0){if(p(S)===!1){let{textures:C,width:g,height:K0}=S,D0=J.COLOR_BUFFER_BIT,T0=S.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,v0=Z.get(S),N0=C.length>1;if(N0)for(let A0=0;A0<C.length;A0++)Q.bindFramebuffer(J.FRAMEBUFFER,v0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.RENDERBUFFER,null),Q.bindFramebuffer(J.FRAMEBUFFER,v0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.TEXTURE_2D,null,0);Q.bindFramebuffer(J.READ_FRAMEBUFFER,v0.__webglMultisampledFramebuffer);let R0=S.texture.mipmaps;if(R0&&R0.length>0)Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,v0.__webglFramebuffer[0]);else Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,v0.__webglFramebuffer);for(let A0=0;A0<C.length;A0++){if(S.resolveDepthBuffer){if(S.depthBuffer)D0|=J.DEPTH_BUFFER_BIT;if(S.stencilBuffer&&S.resolveStencilBuffer)D0|=J.STENCIL_BUFFER_BIT}if(N0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,v0.__webglColorRenderbuffer[A0]);let s0=Z.get(C[A0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,s0,0)}if(J.blitFramebuffer(0,0,g,K0,0,0,g,K0,D0,J.NEAREST),H===!0){if(C0.length=0,GJ.length=0,C0.push(J.COLOR_ATTACHMENT0+A0),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1)C0.push(T0),GJ.push(T0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,GJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,C0)}}if(Q.bindFramebuffer(J.READ_FRAMEBUFFER,null),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),N0)for(let A0=0;A0<C.length;A0++){Q.bindFramebuffer(J.FRAMEBUFFER,v0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.RENDERBUFFER,v0.__webglColorRenderbuffer[A0]);let s0=Z.get(C[A0]).__webglTexture;Q.bindFramebuffer(J.FRAMEBUFFER,v0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.TEXTURE_2D,s0,0)}Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,v0.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&H){let C=S.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[C])}}}function jJ(S){return Math.min(K.maxSamples,S.samples)}function p(S){let C=Z.get(S);return S.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function sJ(S){let C=Y.render.frame;if(N.get(S)!==C)N.set(S,C),S.update()}function FJ(S,C){let{colorSpace:g,format:K0,type:D0}=S;if(S.isCompressedTexture===!0||S.isVideoTexture===!0)return C;if(g!==d8&&g!==t7)if(RJ.getTransfer(g)===uJ){if(K0!==j9||D0!==D9)r0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else ZJ("WebGLTextures: Unsupported texture color space:",g);return C}function DJ(S){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement)U.width=S.naturalWidth||S.width,U.height=S.naturalHeight||S.height;else if(typeof VideoFrame<"u"&&S instanceof VideoFrame)U.width=S.displayWidth,U.height=S.displayHeight;else U.width=S.width,U.height=S.height;return U}this.allocateTextureUnit=u,this.resetTextureUnits=X0,this.getTextureUnits=v,this.setTextureUnits=y,this.setTexture2D=r,this.setTexture2DArray=m,this.setTexture3D=e,this.setTextureCube=Y0,this.rebindTextures=S0,this.setupRenderTarget=m0,this.updateRenderTargetMipmap=t0,this.updateMultisampleRenderTarget=OJ,this.setupDepthRenderbuffer=U0,this.setupFrameBufferTexture=J0,this.useMultisampledRTT=p,this.isReversedDepthBuffer=function(){return Q.buffers.depth.getReversed()}}function cO(J,$){function Q(Z,K=t7){let W,Y=RJ.getTransfer(K);if(Z===D9)return J.UNSIGNED_BYTE;if(Z===PW)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===IW)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===UU)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===NU)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===XU)return J.BYTE;if(Z===HU)return J.SHORT;if(Z===ZQ)return J.UNSIGNED_SHORT;if(Z===CW)return J.INT;if(Z===C7)return J.UNSIGNED_INT;if(Z===e9)return J.FLOAT;if(Z===L8)return J.HALF_FLOAT;if(Z===GU)return J.ALPHA;if(Z===FU)return J.RGB;if(Z===j9)return J.RGBA;if(Z===o7)return J.DEPTH_COMPONENT;if(Z===a7)return J.DEPTH_STENCIL;if(Z===EU)return J.RED;if(Z===zW)return J.RED_INTEGER;if(Z===r7)return J.RG;if(Z===AW)return J.RG_INTEGER;if(Z===TW)return J.RGBA_INTEGER;if(Z===SZ||Z===jZ||Z===yZ||Z===vZ)if(Y===uJ)if(W=$.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===SZ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===jZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===yZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===vZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=$.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===SZ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===jZ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===yZ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===vZ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===_W||Z===wW||Z===SW||Z===jW)if(W=$.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===_W)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===wW)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===SW)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===jW)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===yW||Z===vW||Z===fW||Z===bW||Z===hW||Z===fZ||Z===xW)if(W=$.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===yW||Z===vW)return Y===uJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===fW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===bW)return W.COMPRESSED_R11_EAC;if(Z===hW)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===fZ)return W.COMPRESSED_RG11_EAC;if(Z===xW)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===gW||Z===pW||Z===mW||Z===lW||Z===uW||Z===dW||Z===cW||Z===nW||Z===sW||Z===iW||Z===oW||Z===aW||Z===rW||Z===tW)if(W=$.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===gW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===pW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===mW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===lW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===uW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===dW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===cW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===nW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===sW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===iW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===oW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===aW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===rW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===tW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===eW||Z===JY||Z===$Y)if(W=$.get("EXT_texture_compression_bptc"),W!==null){if(Z===eW)return Y===uJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===JY)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===$Y)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===QY||Z===ZY||Z===bZ||Z===KY)if(W=$.get("EXT_texture_compression_rgtc"),W!==null){if(Z===QY)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===ZY)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===bZ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===KY)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===J$)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:Q}}var nO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sO=`
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

}`;class L5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,$){if(this.texture===null){let Q=new iZ(J.texture);if(J.depthNear!==$.depthNear||J.depthFar!==$.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Q}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let $=J.cameras[0].viewport,Q=new J8({vertexShader:nO,fragmentShader:sO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:$.z},depthHeight:{value:$.w}}});this.mesh=new I0(new VJ(20,20),Q)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V5 extends M9{constructor(J,$){super();let Q=this,Z=null,K=1,W=null,Y="local-floor",X=1,H=null,U=null,N=null,F=null,G=null,E=null,O=typeof XRWebGLBinding<"u",B=new L5,R={},q=$.getContextAttributes(),M=null,k=null,V=[],L=[],P=new L0,A=null,D=null,I=new G8;I.viewport=new lJ;let d=new G8;d.viewport=new lJ;let f=[I,d],n=new SY,X0=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(x){let T=V[x];if(T===void 0)T=new YQ,V[x]=T;return T.getTargetRaySpace()},this.getControllerGrip=function(x){let T=V[x];if(T===void 0)T=new YQ,V[x]=T;return T.getGripSpace()},this.getHand=function(x){let T=V[x];if(T===void 0)T=new YQ,V[x]=T;return T.getHandSpace()};function y(x){let T=L.indexOf(x.inputSource);if(T===-1)return;let h=V[T];if(h!==void 0)h.update(x.inputSource,x.frame,H||W),h.dispatchEvent({type:x.type,data:x.inputSource})}function u(){Z.removeEventListener("select",y),Z.removeEventListener("selectstart",y),Z.removeEventListener("selectend",y),Z.removeEventListener("squeeze",y),Z.removeEventListener("squeezestart",y),Z.removeEventListener("squeezeend",y),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",b);for(let x=0;x<V.length;x++){let T=L[x];if(T===null)continue;L[x]=null,V[x].disconnect(T)}X0=null,v=null,B.reset();for(let x in R)delete R[x];if(J.setRenderTarget(M),G=null,F=null,N=null,Z=null,k=null,t.stop(),Q.isPresenting=!1,J.setPixelRatio(A),J.setSize(P.width,P.height,!1),D!==null){let x=D.camera;x.fov=D.fov,x.zoom=D.zoom,x.updateProjectionMatrix(),D=null}Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(x){if(K=x,Q.isPresenting===!0)r0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(x){if(Y=x,Q.isPresenting===!0)r0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(x){H=x},this.getBaseLayer=function(){return F!==null?F:G},this.getBinding=function(){if(N===null&&O)N=new XRWebGLBinding(Z,$);return N},this.getFrame=function(){return E},this.getSession=function(){return Z},this.setSession=async function(x){if(Z=x,Z!==null){if(M=J.getRenderTarget(),Z.addEventListener("select",y),Z.addEventListener("selectstart",y),Z.addEventListener("selectend",y),Z.addEventListener("squeeze",y),Z.addEventListener("squeezestart",y),Z.addEventListener("squeezeend",y),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",b),q.xrCompatible!==!0)await $.makeXRCompatible();if(A=J.getPixelRatio(),J.getSize(P),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let h={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:K};G=new XRWebGLLayer(Z,$,h),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),k=new Z8(G.framebufferWidth,G.framebufferHeight,{format:j9,type:D9,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let h=null,l=null,Z0=null;if(q.depth)Z0=q.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,h=q.stencil?a7:o7,l=q.stencil?J$:C7;let J0={colorFormat:$.RGBA8,depthFormat:Z0,scaleFactor:K};N=this.getBinding(),F=N.createProjectionLayer(J0),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),k=new Z8(F.textureWidth,F.textureHeight,{format:j9,type:D9,depthTexture:new K6(F.textureWidth,F.textureHeight,l,void 0,void 0,void 0,void 0,void 0,void 0,h),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1,storeMultisampledDepthBuffer:F.ignoreDepthValues===!1,storeMultisampledStencilBuffer:F.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(X),H=null,W=await Z.requestReferenceSpace(Y),t.setContext(Z),t.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function b(x){for(let T=0;T<x.removed.length;T++){let h=x.removed[T],l=L.indexOf(h);if(l>=0)L[l]=null,V[l].disconnect(h)}for(let T=0;T<x.added.length;T++){let h=x.added[T],l=L.indexOf(h);if(l===-1){for(let J0=0;J0<V.length;J0++)if(J0>=L.length){L.push(h),l=J0;break}else if(L[J0]===null){L[J0]=h,l=J0;break}if(l===-1)break}let Z0=V[l];if(Z0)Z0.connect(h)}}let r=new _,m=new _;function e(x,T,h){r.setFromMatrixPosition(T.matrixWorld),m.setFromMatrixPosition(h.matrixWorld);let l=r.distanceTo(m),Z0=T.projectionMatrix.elements,J0=h.projectionMatrix.elements,O0=Z0[14]/(Z0[10]-1),E0=Z0[14]/(Z0[10]+1),U0=(Z0[9]+1)/Z0[5],S0=(Z0[9]-1)/Z0[5],m0=(Z0[8]-1)/Z0[0],t0=(J0[8]+1)/J0[0],C0=O0*m0,GJ=O0*t0,OJ=l/(-m0+t0),jJ=OJ*-m0;if(T.matrixWorld.decompose(x.position,x.quaternion,x.scale),x.translateX(jJ),x.translateZ(OJ),x.matrixWorld.compose(x.position,x.quaternion,x.scale),x.matrixWorldInverse.copy(x.matrixWorld).invert(),Z0[10]===-1)x.projectionMatrix.copy(T.projectionMatrix),x.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{let p=O0+OJ,sJ=E0+OJ,FJ=C0-jJ,DJ=GJ+(l-jJ),S=U0*E0/sJ*p,C=S0*E0/sJ*p;x.projectionMatrix.makePerspective(FJ,DJ,S,C,p,sJ),x.projectionMatrixInverse.copy(x.projectionMatrix).invert()}}function Y0(x,T){if(T===null)x.matrixWorld.copy(x.matrix);else x.matrixWorld.multiplyMatrices(T.matrixWorld,x.matrix);x.matrixWorldInverse.copy(x.matrixWorld).invert()}this.updateCamera=function(x){if(Z===null)return;let{near:T,far:h}=x;if(B.texture!==null){if(B.depthNear>0)T=B.depthNear;if(B.depthFar>0)h=B.depthFar}if(n.near=d.near=I.near=T,n.far=d.far=I.far=h,X0!==n.near||v!==n.far)Z.updateRenderState({depthNear:n.near,depthFar:n.far}),X0=n.near,v=n.far;n.layers.mask=x.layers.mask|6,I.layers.mask=n.layers.mask&-5,d.layers.mask=n.layers.mask&-3;let l=x.parent,Z0=n.cameras;Y0(n,l);for(let J0=0;J0<Z0.length;J0++)Y0(Z0[J0],l);if(Z0.length===2)e(n,I,d);else n.projectionMatrix.copy(I.projectionMatrix);if(D===null&&x.isPerspectiveCamera)D={camera:x,fov:x.fov,zoom:x.zoom};j(x,n,l)};function j(x,T,h){if(h===null)x.matrix.copy(T.matrixWorld);else x.matrix.copy(h.matrixWorld),x.matrix.invert(),x.matrix.multiply(T.matrixWorld);if(x.matrix.decompose(x.position,x.quaternion,x.scale),x.updateMatrixWorld(!0),x.projectionMatrix.copy(T.projectionMatrix),x.projectionMatrixInverse.copy(T.projectionMatrixInverse),x.isPerspectiveCamera)x.fov=u7*2*Math.atan(1/x.projectionMatrix.elements[5]),x.zoom=1}this.getCamera=function(){return n},this.getFoveation=function(){if(F===null&&G===null)return;return X},this.setFoveation=function(x){if(X=x,F!==null)F.fixedFoveation=x;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=x},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(n)},this.getCameraTexture=function(x){return R[x]};let o=null;function G0(x,T){if(U=T.getViewerPose(H||W),E=T,U!==null){let h=U.views;if(G!==null)J.setRenderTargetFramebuffer(k,G.framebuffer),J.setRenderTarget(k);let l=!1;if(h.length!==n.cameras.length)n.cameras.length=0,l=!0;for(let E0=0;E0<h.length;E0++){let U0=h[E0],S0=null;if(G!==null)S0=G.getViewport(U0);else{let t0=N.getViewSubImage(F,U0);if(S0=t0.viewport,E0===0)J.setRenderTargetTextures(k,t0.colorTexture,t0.depthStencilTexture),J.setRenderTarget(k)}let m0=f[E0];if(m0===void 0)m0=new G8,m0.layers.enable(E0),m0.viewport=new lJ,f[E0]=m0;if(m0.matrix.fromArray(U0.transform.matrix),m0.matrix.decompose(m0.position,m0.quaternion,m0.scale),m0.projectionMatrix.fromArray(U0.projectionMatrix),m0.projectionMatrixInverse.copy(m0.projectionMatrix).invert(),m0.viewport.set(S0.x,S0.y,S0.width,S0.height),E0===0)n.matrix.copy(m0.matrix),n.matrix.decompose(n.position,n.quaternion,n.scale);if(l===!0)n.cameras.push(m0)}let Z0=Z.enabledFeatures;if(Z0&&Z0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&O){N=Q.getBinding();let E0=N.getDepthInformation(h[0]);if(E0&&E0.isValid&&E0.texture)B.init(E0,Z.renderState)}if(Z0&&Z0.includes("camera-access")&&O){J.state.unbindTexture(),N=Q.getBinding();for(let E0=0;E0<h.length;E0++){let U0=h[E0].camera;if(U0){let S0=R[U0];if(!S0)S0=new iZ,R[U0]=S0;let m0=N.getCameraImage(U0);S0.sourceTexture=m0}}}}for(let h=0;h<V.length;h++){let l=L[h],Z0=V[h];if(l!==null&&Z0!==void 0)Z0.update(l,T,H||W)}if(o)o(x,T);if(T.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:T});E=null}let t=new Y5;t.setAnimationLoop(G0),this.setAnimationLoop=function(x){o=x},this.dispose=function(){}}}var iO=new QJ,B5=new HJ;B5.set(-1,0,0,0,1,0,0,0,1);function oO(J,$){function Q(R,q){if(R.matrixAutoUpdate===!0)R.updateMatrix();q.value.copy(R.matrix)}function Z(R,q){if(q.color.getRGB(R.fogColor.value,MY(J)),q.isFog)R.fogNear.value=q.near,R.fogFar.value=q.far;else if(q.isFogExp2)R.fogDensity.value=q.density}function K(R,q,M,k,V){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)W(R,q);else if(q.isMeshLambertMaterial){if(W(R,q),q.envMap)R.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)W(R,q),F(R,q);else if(q.isMeshPhongMaterial){if(W(R,q),N(R,q),q.envMap)R.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(W(R,q),G(R,q),q.isMeshPhysicalMaterial)E(R,q,V)}else if(q.isMeshMatcapMaterial)W(R,q),O(R,q);else if(q.isMeshDepthMaterial)W(R,q);else if(q.isMeshDistanceMaterial)W(R,q),B(R,q);else if(q.isMeshNormalMaterial)W(R,q);else if(q.isLineBasicMaterial){if(Y(R,q),q.isLineDashedMaterial)X(R,q)}else if(q.isPointsMaterial)H(R,q,M,k);else if(q.isSpriteMaterial)U(R,q);else if(q.isShadowMaterial)R.color.value.copy(q.color),R.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function W(R,q){if(R.opacity.value=q.opacity,q.color)R.diffuse.value.copy(q.color);if(q.emissive)R.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)R.map.value=q.map,Q(q.map,R.mapTransform);if(q.alphaMap)R.alphaMap.value=q.alphaMap,Q(q.alphaMap,R.alphaMapTransform);if(q.bumpMap){if(R.bumpMap.value=q.bumpMap,Q(q.bumpMap,R.bumpMapTransform),R.bumpScale.value=q.bumpScale,q.side===D8)R.bumpScale.value*=-1}if(q.normalMap){if(R.normalMap.value=q.normalMap,Q(q.normalMap,R.normalMapTransform),R.normalScale.value.copy(q.normalScale),q.side===D8)R.normalScale.value.negate()}if(q.displacementMap)R.displacementMap.value=q.displacementMap,Q(q.displacementMap,R.displacementMapTransform),R.displacementScale.value=q.displacementScale,R.displacementBias.value=q.displacementBias;if(q.emissiveMap)R.emissiveMap.value=q.emissiveMap,Q(q.emissiveMap,R.emissiveMapTransform);if(q.specularMap)R.specularMap.value=q.specularMap,Q(q.specularMap,R.specularMapTransform);if(q.alphaTest>0)R.alphaTest.value=q.alphaTest;let M=$.get(q),k=M.envMap,V=M.envMapRotation;if(k){if(R.envMap.value=k,R.envMapRotation.value.setFromMatrix4(iO.makeRotationFromEuler(V)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1)R.envMapRotation.value.premultiply(B5);R.reflectivity.value=q.reflectivity,R.ior.value=q.ior,R.refractionRatio.value=q.refractionRatio}if(q.lightMap)R.lightMap.value=q.lightMap,R.lightMapIntensity.value=q.lightMapIntensity,Q(q.lightMap,R.lightMapTransform);if(q.aoMap)R.aoMap.value=q.aoMap,R.aoMapIntensity.value=q.aoMapIntensity,Q(q.aoMap,R.aoMapTransform)}function Y(R,q){if(R.diffuse.value.copy(q.color),R.opacity.value=q.opacity,q.map)R.map.value=q.map,Q(q.map,R.mapTransform)}function X(R,q){R.dashSize.value=q.dashSize,R.totalSize.value=q.dashSize+q.gapSize,R.scale.value=q.scale}function H(R,q,M,k){if(R.diffuse.value.copy(q.color),R.opacity.value=q.opacity,R.size.value=q.size*M,R.scale.value=k*0.5,q.map)R.map.value=q.map,Q(q.map,R.uvTransform);if(q.alphaMap)R.alphaMap.value=q.alphaMap,Q(q.alphaMap,R.alphaMapTransform);if(q.alphaTest>0)R.alphaTest.value=q.alphaTest}function U(R,q){if(R.diffuse.value.copy(q.color),R.opacity.value=q.opacity,R.rotation.value=q.rotation,q.map)R.map.value=q.map,Q(q.map,R.mapTransform);if(q.alphaMap)R.alphaMap.value=q.alphaMap,Q(q.alphaMap,R.alphaMapTransform);if(q.alphaTest>0)R.alphaTest.value=q.alphaTest}function N(R,q){R.specular.value.copy(q.specular),R.shininess.value=Math.max(q.shininess,0.0001)}function F(R,q){if(q.gradientMap)R.gradientMap.value=q.gradientMap}function G(R,q){if(R.metalness.value=q.metalness,q.metalnessMap)R.metalnessMap.value=q.metalnessMap,Q(q.metalnessMap,R.metalnessMapTransform);if(R.roughness.value=q.roughness,q.roughnessMap)R.roughnessMap.value=q.roughnessMap,Q(q.roughnessMap,R.roughnessMapTransform);if(q.envMap)R.envMapIntensity.value=q.envMapIntensity}function E(R,q,M){if(R.ior.value=q.ior,q.sheen>0){if(R.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),R.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)R.sheenColorMap.value=q.sheenColorMap,Q(q.sheenColorMap,R.sheenColorMapTransform);if(q.sheenRoughnessMap)R.sheenRoughnessMap.value=q.sheenRoughnessMap,Q(q.sheenRoughnessMap,R.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(R.clearcoat.value=q.clearcoat,R.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)R.clearcoatMap.value=q.clearcoatMap,Q(q.clearcoatMap,R.clearcoatMapTransform);if(q.clearcoatRoughnessMap)R.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,Q(q.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(R.clearcoatNormalMap.value=q.clearcoatNormalMap,Q(q.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===D8)R.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)R.dispersion.value=q.dispersion;if(q.retroreflectivity>0)R.retroreflectivity.value=q.retroreflectivity;if(q.iridescence>0){if(R.iridescence.value=q.iridescence,R.iridescenceIOR.value=q.iridescenceIOR,R.iridescenceThicknessMinimum.value=q.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=q.iridescenceThicknessRange[1],q.iridescenceMap)R.iridescenceMap.value=q.iridescenceMap,Q(q.iridescenceMap,R.iridescenceMapTransform);if(q.iridescenceThicknessMap)R.iridescenceThicknessMap.value=q.iridescenceThicknessMap,Q(q.iridescenceThicknessMap,R.iridescenceThicknessMapTransform)}if(q.transmission>0){if(R.transmission.value=q.transmission,R.transmissionSamplerMap.value=M.texture,R.transmissionSamplerSize.value.set(M.width,M.height),q.transmissionMap)R.transmissionMap.value=q.transmissionMap,Q(q.transmissionMap,R.transmissionMapTransform);if(R.thickness.value=q.thickness,q.thicknessMap)R.thicknessMap.value=q.thicknessMap,Q(q.thicknessMap,R.thicknessMapTransform);R.attenuationDistance.value=q.attenuationDistance,R.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(R.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)R.anisotropyMap.value=q.anisotropyMap,Q(q.anisotropyMap,R.anisotropyMapTransform)}if(R.specularIntensity.value=q.specularIntensity,R.specularColor.value.copy(q.specularColor),q.specularColorMap)R.specularColorMap.value=q.specularColorMap,Q(q.specularColorMap,R.specularColorMapTransform);if(q.specularIntensityMap)R.specularIntensityMap.value=q.specularIntensityMap,Q(q.specularIntensityMap,R.specularIntensityMapTransform)}function O(R,q){if(q.matcap)R.matcap.value=q.matcap}function B(R,q){let M=$.get(q).light;R.referencePosition.value.setFromMatrixPosition(M.matrixWorld),R.nearDistance.value=M.shadow.camera.near,R.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function aO(J,$,Q,Z){let K={},W={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,L){let P=L.program;Z.uniformBlockBinding(V,P)}function U(V,L){let P=K[V.id];if(P===void 0)R(V),P=N(V),K[V.id]=P,V.addEventListener("dispose",M);let A=L.program;Z.updateUBOMapping(V,A);let D=$.render.frame;if(W[V.id]!==D)G(V),W[V.id]=D}function N(V){let L=F();V.__bindingPointIndex=L;let P=J.createBuffer(),A=V.__size,D=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,A,D),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,P),P}function F(){for(let V=0;V<X;V++)if(Y.indexOf(V)===-1)return Y.push(V),V;return ZJ("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(V){let L=K[V.id],P=V.uniforms,A=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let D=0,I=P.length;D<I;D++){let d=P[D];if(Array.isArray(d))for(let f=0,n=d.length;f<n;f++)E(d[f],D,f,A);else E(d,D,0,A)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(V,L,P,A){if(B(V,L,P,A)===!0){let{__offset:D,value:I}=V;if(Array.isArray(I)){let d=0;for(let f=0;f<I.length;f++){let n=I[f],X0=q(n);if(O(n,V.__data,d),typeof n!=="number"&&typeof n!=="boolean"&&!n.isMatrix3&&!ArrayBuffer.isView(n))d+=X0.storage/Float32Array.BYTES_PER_ELEMENT}}else O(I,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,D,V.__data)}}function O(V,L,P){if(typeof V==="number"||typeof V==="boolean")L[0]=V;else if(V.isMatrix3)L[0]=V.elements[0],L[1]=V.elements[1],L[2]=V.elements[2],L[3]=0,L[4]=V.elements[3],L[5]=V.elements[4],L[6]=V.elements[5],L[7]=0,L[8]=V.elements[6],L[9]=V.elements[7],L[10]=V.elements[8],L[11]=0;else if(ArrayBuffer.isView(V))L.set(new V.constructor(V.buffer,V.byteOffset,L.length));else V.toArray(L,P)}function B(V,L,P,A){let D=V.value,I=L+"_"+P;if(A[I]===void 0){if(typeof D==="number"||typeof D==="boolean")A[I]=D;else if(ArrayBuffer.isView(D))A[I]=D.slice();else A[I]=D.clone();return!0}else{let d=A[I];if(typeof D==="number"||typeof D==="boolean"){if(d!==D)return A[I]=D,!0}else if(ArrayBuffer.isView(D))return!0;else if(d.equals(D)===!1)return d.copy(D),!0}return!1}function R(V){let L=V.uniforms,P=0,A=16;for(let I=0,d=L.length;I<d;I++){let f=Array.isArray(L[I])?L[I]:[L[I]];for(let n=0,X0=f.length;n<X0;n++){let v=f[n],y=Array.isArray(v.value)?v.value:[v.value];for(let u=0,b=y.length;u<b;u++){let r=y[u],m=q(r),e=P%A,Y0=e%m.boundary,j=e+Y0;if(P+=Y0,j!==0&&A-j<m.storage)P+=A-j;v.__data=new Float32Array(m.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=P,P+=m.storage}}}let D=P%A;if(D>0)P+=A-D;return V.__size=P,V.__cache={},this}function q(V){let L={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")L.boundary=4,L.storage=4;else if(V.isVector2)L.boundary=8,L.storage=8;else if(V.isVector3||V.isColor)L.boundary=16,L.storage=12;else if(V.isVector4)L.boundary=16,L.storage=16;else if(V.isMatrix3)L.boundary=48,L.storage=48;else if(V.isMatrix4)L.boundary=64,L.storage=64;else if(V.isTexture)r0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))L.boundary=16,L.storage=V.byteLength;else r0("WebGLRenderer: Unsupported uniform value type.",V);return L}function M(V){let L=V.target;L.removeEventListener("dispose",M);let P=Y.indexOf(L.__bindingPointIndex);Y.splice(P,1),J.deleteBuffer(K[L.id]),delete K[L.id],delete W[L.id]}function k(){for(let V in K)J.deleteBuffer(K[V]);Y=[],K={},W={}}return{bind:H,update:U,dispose:k}}var rO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),b9=null;function tO(){if(b9===null)b9=new $6(rO,16,16,r7,L8),b9.name="DFG_LUT",b9.minFilter=X8,b9.magFilter=X8,b9.wrapS=t6,b9.wrapT=t6,b9.generateMipmaps=!1,b9.needsUpdate=!0;return b9}class sY{constructor(J={}){let{canvas:$=MU(),context:Q=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:F=!1,outputBufferType:G=D9}=J;this.isWebGLRenderer=!0;let E;if(Q!==null){if(typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=Q.getContextAttributes().alpha}else E=W;let O=G,B=new Set([TW,AW,zW]),R=new Set([D9,C7,ZQ,J$,PW,IW]),q=new Uint32Array(4),M=new Int32Array(4),k=new _,V=null,L=null,P=[],A=[],D=null;this.domElement=$,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=V9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,d=!1,f=null,n=null,X0=null,v=null;this._outputColorSpace=Q8;let y=0,u=0,b=null,r=-1,m=null,e=new lJ,Y0=new lJ,j=null,o=new y0(0),G0=0,t=$.width,x=$.height,T=1,h=null,l=null,Z0=new lJ(0,0,t,x),J0=new lJ(0,0,t,x),O0=!1,E0=new Q6,U0=!1,S0=!1,m0=new QJ,t0=new _,C0=new lJ,GJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},OJ=!1;function jJ(){return b===null?T:1}let p=Q;function sJ(z,c){return $.getContext(z,c)}let FJ,DJ,S,C,g,K0,D0,T0,v0,N0,R0,A0,s0,_0,P0,JJ,e0,zJ,s,f0,F0,j0,l0;try{let z={alpha:!0,depth:Z,stencil:K,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in $)$.setAttribute("data-engine",`three.js r${AH}`);if($.addEventListener("webglcontextlost",YJ,!1),$.addEventListener("webglcontextrestored",cJ,!1),$.addEventListener("webglcontextcreationerror",yJ,!1),p===null){if(p=sJ("webgl2",z),p===null)if(sJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}M0()}catch(z){throw $.removeEventListener("webglcontextlost",YJ,!1),$.removeEventListener("webglcontextrestored",cJ,!1),$.removeEventListener("webglcontextcreationerror",yJ,!1),ZJ("WebGLRenderer: "+z.message),z}function M0(){if(FJ=new Wq(p),FJ.init(),F0=new cO(p,FJ),DJ=new oE(p,FJ,J,F0),S=new uO(p,FJ),DJ.reversedDepthBuffer&&F)S.buffers.depth.setReversed(!0);n=p.createFramebuffer(),X0=p.createFramebuffer(),v=p.createFramebuffer(),C=new Hq(p),g=new _O,K0=new dO(p,FJ,S,g,DJ,F0,C),D0=new Kq(I),T0=new NF(p),j0=new sE(p,T0),v0=new Yq(p,T0,C,j0),N0=new Nq(p,v0,T0,j0,C),zJ=new Uq(p,DJ,K0),P0=new aE(g),R0=new TO(I,D0,FJ,DJ,j0,P0),A0=new oO(I,g),s0=new SO,_0=new hO(FJ),e0=new nE(I,D0,S,N0,E,X),JJ=new lO(I,N0,DJ),l0=new aO(p,C,DJ,S),s=new iE(p,FJ,C),f0=new Xq(p,FJ,C),C.programs=R0.programs,I.capabilities=DJ,I.extensions=FJ,I.properties=g,I.renderLists=s0,I.shadowMap=JJ,I.state=S,I.info=C}if(O!==D9)D=new Fq(O,$.width,$.height,Y,Z,K);let b0=new V5(I,p);this.xr=b0,this.getContext=function(){return p},this.getContextAttributes=function(){return p.getContextAttributes()},this.forceContextLoss=function(){let z=FJ.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=FJ.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(z){if(z===void 0)return;T=z,this.setSize(t,x,!1)},this.getSize=function(z){return z.set(t,x)},this.setSize=function(z,c,H0=!0){if(b0.isPresenting){r0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(t=z,x=c,$.width=Math.floor(z*T),$.height=Math.floor(c*T),H0===!0)$.style.width=z+"px",$.style.height=c+"px";if(D!==null)D.setSize($.width,$.height);this.setViewport(0,0,z,c)},this.getDrawingBufferSize=function(z){return z.set(t*T,x*T).floor()},this.setDrawingBufferSize=function(z,c,H0){t=z,x=c,T=H0,$.width=Math.floor(z*H0),$.height=Math.floor(c*H0),this.setViewport(0,0,z,c)},this.setEffects=function(z){if(O===D9){ZJ("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(z){for(let c=0;c<z.length;c++)if(z[c].isOutputPass===!0){r0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(z||[])},this.getCurrentViewport=function(z){return z.copy(e)},this.getViewport=function(z){return z.copy(Z0)},this.setViewport=function(z,c,H0,Q0){if(z.isVector4)Z0.set(z.x,z.y,z.z,z.w);else Z0.set(z,c,H0,Q0);S.viewport(e.copy(Z0).multiplyScalar(T).round())},this.getScissor=function(z){return z.copy(J0)},this.setScissor=function(z,c,H0,Q0){if(z.isVector4)J0.set(z.x,z.y,z.z,z.w);else J0.set(z,c,H0,Q0);S.scissor(Y0.copy(J0).multiplyScalar(T).round())},this.getScissorTest=function(){return O0},this.setScissorTest=function(z){S.setScissorTest(O0=z)},this.setOpaqueSort=function(z){h=z},this.setTransparentSort=function(z){l=z},this.getClearColor=function(z){return z.copy(e0.getClearColor())},this.setClearColor=function(){e0.setClearColor(...arguments)},this.getClearAlpha=function(){return e0.getClearAlpha()},this.setClearAlpha=function(){e0.setClearAlpha(...arguments)},this.clear=function(z=!0,c=!0,H0=!0){let Q0=0;if(z){let $0=!1;if(b!==null){let w0=b.texture.format;$0=B.has(w0)}if($0){let w0=b.texture.type,u0=R.has(w0),h0=e0.getClearColor(),i0=e0.getClearAlpha(),n0=h0.r,EJ=h0.g,MJ=h0.b;if(u0)q[0]=n0,q[1]=EJ,q[2]=MJ,q[3]=i0,p.clearBufferuiv(p.COLOR,0,q);else M[0]=n0,M[1]=EJ,M[2]=MJ,M[3]=i0,p.clearBufferiv(p.COLOR,0,M)}else Q0|=p.COLOR_BUFFER_BIT}if(c)Q0|=p.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(H0)Q0|=p.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(Q0!==0)p.clear(Q0)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(z){z.setRenderer(this),f=z},this.dispose=function(){$.removeEventListener("webglcontextlost",YJ,!1),$.removeEventListener("webglcontextrestored",cJ,!1),$.removeEventListener("webglcontextcreationerror",yJ,!1),e0.dispose(),s0.dispose(),_0.dispose(),g.dispose(),D0.dispose(),N0.dispose(),j0.dispose(),l0.dispose(),R0.dispose(),b0.dispose(),b0.removeEventListener("sessionstart",M6),b0.removeEventListener("sessionend",B8),a8.stop()};function YJ(z){z.preventDefault(),c$("WebGLRenderer: Context Lost."),d=!0}function cJ(){c$("WebGLRenderer: Context Restored."),d=!1;let z=C.autoReset,c=JJ.enabled,H0=JJ.autoUpdate,Q0=JJ.needsUpdate,$0=JJ.type;M0(),C.autoReset=z,JJ.enabled=c,JJ.autoUpdate=H0,JJ.needsUpdate=Q0,JJ.type=$0}function yJ(z){ZJ("WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function i8(z){let c=z.target;c.removeEventListener("dispose",i8),o8(c)}function o8(z){u9(z),g.remove(z)}function u9(z){let c=g.get(z).programs;if(c!==void 0){if(c.forEach(function(H0){R0.releaseProgram(H0)}),z.isShaderMaterial)R0.releaseShaderCache(z)}}this.renderBufferDirect=function(z,c,H0,Q0,$0,w0){if(c===null)c=GJ;let u0=$0.isMesh&&$0.matrixWorld.determinantAffine()<0,h0=G9(z,c,H0,Q0,$0);S.setMaterial(Q0,u0);let i0=H0.index,n0=1;if(Q0.wireframe===!0){if(i0=v0.getWireframeAttribute(H0),i0===void 0)return;n0=2}let EJ=H0.drawRange,MJ=H0.attributes.position,a0=EJ.start*n0,vJ=(EJ.start+EJ.count)*n0;if(w0!==null)a0=Math.max(a0,w0.start*n0),vJ=Math.min(vJ,(w0.start+w0.count)*n0);if(i0!==null)a0=Math.max(a0,0),vJ=Math.min(vJ,i0.count);else if(MJ!==void 0&&MJ!==null)a0=Math.max(a0,0),vJ=Math.min(vJ,MJ.count);let aJ=vJ-a0;if(aJ<0||aJ===1/0)return;j0.setup($0,Q0,h0,H0,i0);let TJ,gJ=s;if(i0!==null)TJ=T0.get(i0),gJ=f0,gJ.setIndex(TJ);if($0.isMesh)if(Q0.wireframe===!0)S.setLineWidth(Q0.wireframeLinewidth*jJ()),gJ.setMode(p.LINES);else gJ.setMode(p.TRIANGLES);else if($0.isLine){let iJ=Q0.linewidth;if(iJ===void 0)iJ=1;if(S.setLineWidth(iJ*jJ()),$0.isLineSegments)gJ.setMode(p.LINES);else if($0.isLineLoop)gJ.setMode(p.LINE_LOOP);else gJ.setMode(p.LINE_STRIP)}else if($0.isPoints)gJ.setMode(p.POINTS);else if($0.isSprite)gJ.setMode(p.TRIANGLES);if($0.isBatchedMesh)if(!FJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:iJ,_multiDrawCounts:d0,_multiDrawCount:N8}=$0,IJ=i0?T0.get(i0).bytesPerElement:1,y8=g.get(Q0).currentProgram.getUniforms();for(let k8=0;k8<N8;k8++)y8.setValue(p,"_gl_DrawID",k8),gJ.render(iJ[k8]/IJ,d0[k8])}else gJ.renderMultiDraw($0._multiDrawStarts,$0._multiDrawCounts,$0._multiDrawCount);else if($0.isInstancedMesh)gJ.renderInstances(a0,aJ,$0.count);else if(H0.isInstancedBufferGeometry){let iJ=H0._maxInstanceCount!==void 0?H0._maxInstanceCount:1/0,d0=Math.min(H0.instanceCount,iJ);gJ.renderInstances(a0,aJ,d0)}else gJ.render(a0,aJ)};function k$(z,c,H0,Q0){if(f!==null&&z.isNodeMaterial)f.setObject(Q0,z);if(U0===!0)P0.setState(z,H0,!1);if(z.transparent===!0&&z.side===oJ&&z.forceSinglePass===!1)z.side=D8,z.needsUpdate=!0,P$(z,c,Q0),z.side=M7,z.needsUpdate=!0,P$(z,c,Q0),z.side=oJ;else P$(z,c,Q0)}this.compile=function(z,c,H0=null){if(H0===null)H0=z;if(f!==null)f.renderStart(z,c,H0);if(L=_0.get(H0),L.init(c),A.push(L),H0.traverseVisible(function($0){if($0.isLight&&$0.layers.test(c.layers)){if(L.pushLight($0),$0.castShadow)L.pushShadow($0)}}),z!==H0)z.traverseVisible(function($0){if($0.isLight&&$0.layers.test(c.layers)){if(L.pushLight($0),$0.castShadow)L.pushShadow($0)}});if(L.setupLights(),f!==null)f.updateLights(L.state.lightsArray);if(S0=this.localClippingEnabled,U0=P0.init(this.clippingPlanes,S0),U0===!0)P0.setGlobalState(this.clippingPlanes,c);if(f!==null)JJ.render(L.state.shadowsArray,H0,c);let Q0=new Set;if(z.traverse(function($0){if(!($0.isMesh||$0.isPoints||$0.isLine||$0.isSprite))return;let w0=$0.material;if(w0)if(Array.isArray(w0))for(let u0=0;u0<w0.length;u0++){let h0=w0[u0];k$(h0,H0,c,$0),Q0.add(h0)}else k$(w0,H0,c,$0),Q0.add(w0)}),L=A.pop(),f!==null)f.renderEnd();return Q0},this.compileAsync=function(z,c,H0=null){let Q0=this.compile(z,c,H0);return new Promise(($0)=>{function w0(){if(Q0.forEach(function(u0){let i0=g.get(u0).currentProgram;if(i0===void 0||i0.isReady())Q0.delete(u0)}),Q0.size===0){$0(z);return}setTimeout(w0,10)}if(FJ.get("KHR_parallel_shader_compile")!==null)w0();else setTimeout(w0,10)})};let b7=null;function xQ(z){if(b7)b7(z)}function M6(){a8.stop()}function B8(){a8.start()}let a8=new Y5;if(a8.setAnimationLoop(xQ),typeof self<"u")a8.setContext(self);this.setAnimationLoop=function(z){b7=z,b0.setAnimationLoop(z),z===null?a8.stop():a8.start()},b0.addEventListener("sessionstart",M6),b0.addEventListener("sessionend",B8),this.render=function(z,c){if(c!==void 0&&c.isCamera!==!0){ZJ("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(f!==null)f.renderStart(z,c);let H0=b0.enabled===!0&&b0.isPresenting===!0,Q0=D!==null&&(b===null||H0)&&D.begin(I,b);if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(c.parent===null&&c.matrixWorldAutoUpdate===!0)c.updateMatrixWorld();if(b0.enabled===!0&&b0.isPresenting===!0&&(D===null||D.isCompositing()===!1)){if(b0.cameraAutoUpdate===!0)b0.updateCamera(c);c=b0.getCamera()}if(z.isScene===!0)z.onBeforeRender(I,z,c,b);if(L=_0.get(z,A.length),L.init(c),L.state.textureUnits=K0.getTextureUnits(),A.push(L),m0.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),E0.setFromProjectionMatrix(m0,NY,c.reversedDepth),S0=this.localClippingEnabled,U0=P0.init(this.clippingPlanes,S0),V=s0.get(z,P.length),V.init(),P.push(V),b0.enabled===!0&&b0.isPresenting===!0){let u0=I.xr.getDepthSensingMesh();if(u0!==null)k6(u0,c,-1/0,I.sortObjects)}if(k6(z,c,0,I.sortObjects),V.finish(),f!==null)f.updateLights(L.state.lightsArray);if(I.sortObjects===!0)V.sort(h,l);if(OJ=b0.enabled===!1||b0.isPresenting===!1||b0.hasDepthSensing()===!1,OJ)e0.addToRenderList(V,z);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(U0===!0)P0.beginShadows();let $0=L.state.shadowsArray;if(JJ.render($0,z,c),U0===!0)P0.endShadows();if((Q0&&D.hasRenderPass())===!1){let{opaque:u0,transmissive:h0}=V;if(L.setupLights(),c.isArrayCamera){let i0=c.cameras;if(h0.length>0)for(let n0=0,EJ=i0.length;n0<EJ;n0++){let MJ=i0[n0];C$(u0,h0,z,MJ)}if(OJ)e0.render(z);for(let n0=0,EJ=i0.length;n0<EJ;n0++){let MJ=i0[n0];gQ(V,z,MJ,MJ.viewport)}}else{if(h0.length>0)C$(u0,h0,z,c);if(OJ)e0.render(z);gQ(V,z,c)}}if(b!==null&&u===0)K0.updateMultisampleRenderTarget(b),K0.updateRenderTargetMipmap(b);if(Q0)D.end(I);if(z.isScene===!0)z.onAfterRender(I,z,c);if(j0.resetDefaultState(),r=-1,m=null,A.pop(),A.length>0){if(L=A[A.length-1],K0.setTextureUnits(L.state.textureUnits),U0===!0)P0.setGlobalState(I.clippingPlanes,L.state.camera)}else L=null;if(P.pop(),P.length>0)V=P[P.length-1];else V=null;if(f!==null)f.renderEnd()};function k6(z,c,H0,Q0){if(z.visible===!1)return;if(z.layers.test(c.layers)){if(z.isGroup)H0=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(c)}else if(z.isLightProbeGrid)L.pushLightProbeGrid(z);else if(z.isLight){if(L.pushLight(z),z.castShadow)L.pushShadow(z)}else if(z.isSprite){if(!z.frustumCulled||z.intersectsFrustum(E0)){if(Q0)C0.setFromMatrixPosition(z.matrixWorld).applyMatrix4(m0);let u0=N0.update(z),h0=z.material;if(h0.visible)V.push(z,u0,h0,H0,C0.z,null,c)}}else if(z.isMesh||z.isLine||z.isPoints){if(!z.frustumCulled||z.intersectsFrustum(E0)){let u0=N0.update(z),h0=z.material;if(Q0){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();C0.copy(z.boundingSphere.center)}else{if(u0.boundingSphere===null)u0.computeBoundingSphere();C0.copy(u0.boundingSphere.center)}C0.applyMatrix4(z.matrixWorld).applyMatrix4(m0)}if(Array.isArray(h0)){let i0=u0.groups;for(let n0=0,EJ=i0.length;n0<EJ;n0++){let MJ=i0[n0],a0=h0[MJ.materialIndex];if(a0&&a0.visible)V.push(z,u0,a0,H0,C0.z,MJ,c)}}else if(h0.visible)V.push(z,u0,h0,H0,C0.z,null,c)}}}let w0=z.children;for(let u0=0,h0=w0.length;u0<h0;u0++)k6(w0[u0],c,H0,Q0)}function gQ(z,c,H0,Q0){let{opaque:$0,transmissive:w0,transparent:u0}=z;if(L.setupLightsView(H0),U0===!0)P0.setGlobalState(I.clippingPlanes,H0);if(Q0)S.viewport(e.copy(Q0));if($0.length>0)d9($0,c,H0);if(w0.length>0)d9(w0,c,H0);if(u0.length>0)d9(u0,c,H0);S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function C$(z,c,H0,Q0){if((H0.isScene===!0?H0.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[Q0.id]===void 0){let a0=FJ.has("EXT_color_buffer_half_float")||FJ.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[Q0.id]=new Z8(1,1,{generateMipmaps:!0,type:a0?L8:D9,minFilter:Q9,samples:Math.max(4,DJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:RJ.workingColorSpace})}let w0=L.state.transmissionRenderTarget[Q0.id],u0=Q0.viewport||e;w0.setSize(u0.z*I.transmissionResolutionScale,u0.w*I.transmissionResolutionScale);let h0=I.getRenderTarget(),i0=I.getActiveCubeFace(),n0=I.getActiveMipmapLevel();if(I.setRenderTarget(w0),I.getClearColor(o),G0=I.getClearAlpha(),G0<1)I.setClearColor(16777215,0.5);if(I.clear(),OJ)e0.render(H0);let EJ=I.toneMapping;I.toneMapping=V9;let MJ=Q0.viewport;if(Q0.viewport!==void 0)Q0.viewport=void 0;if(L.setupLightsView(Q0),U0===!0)P0.setGlobalState(I.clippingPlanes,Q0);if(d9(z,H0,Q0),K0.updateMultisampleRenderTarget(w0),K0.updateRenderTargetMipmap(w0),FJ.has("WEBGL_multisampled_render_to_texture")===!1){let a0=!1;for(let vJ=0,aJ=c.length;vJ<aJ;vJ++){let TJ=c[vJ],{object:gJ,geometry:iJ,material:d0,group:N8}=TJ;if(d0.side===oJ&&gJ.layers.test(Q0.layers)){let IJ=d0.side;d0.side=D8,d0.needsUpdate=!0,U7(gJ,H0,Q0,iJ,d0,N8),d0.side=IJ,d0.needsUpdate=!0,a0=!0}}if(a0===!0)K0.updateMultisampleRenderTarget(w0),K0.updateRenderTargetMipmap(w0)}if(I.setRenderTarget(h0,i0,n0),I.setClearColor(o,G0),MJ!==void 0)Q0.viewport=MJ;I.toneMapping=EJ}function d9(z,c,H0){let Q0=c.isScene===!0?c.overrideMaterial:null;for(let $0=0,w0=z.length;$0<w0;$0++){let u0=z[$0],{object:h0,geometry:i0,group:n0}=u0,EJ=u0.material;if(EJ.allowOverride===!0&&Q0!==null)EJ=Q0;if(h0.layers.test(H0.layers))U7(h0,c,H0,i0,EJ,n0)}}function U7(z,c,H0,Q0,$0,w0){if(f!==null&&$0.isNodeMaterial)f.setObject(z,$0);if(z.onBeforeRender(I,c,H0,Q0,$0,w0),z.modelViewMatrix.multiplyMatrices(H0.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),$0.onBeforeRender(I,c,H0,Q0,z,w0),$0.transparent===!0&&$0.side===oJ&&$0.forceSinglePass===!1)$0.side=D8,$0.needsUpdate=!0,I.renderBufferDirect(H0,c,Q0,$0,z,w0),$0.side=M7,$0.needsUpdate=!0,I.renderBufferDirect(H0,c,Q0,$0,z,w0),$0.side=oJ;else I.renderBufferDirect(H0,c,Q0,$0,z,w0);z.onAfterRender(I,c,H0,Q0,$0,w0)}function P$(z,c,H0){if(c.isScene!==!0)c=GJ;let Q0=g.get(z),$0=L.state.lights,w0=L.state.shadowsArray,u0=$0.state.version,h0=R0.getParameters(z,$0.state,w0,c,H0,L.state.lightProbeGridArray),i0=R0.getProgramCacheKey(h0),n0=Q0.programs;Q0.environment=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?c.environment:null,Q0.fog=c.fog;let EJ=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap;if(Q0.envMap=D0.get(z.envMap||Q0.environment,EJ),Q0.envMapRotation=Q0.environment!==null&&z.envMap===null?c.environmentRotation:z.envMapRotation,n0===void 0)z.addEventListener("dispose",i8),n0=new Map,Q0.programs=n0;let MJ=n0.get(i0);if(MJ!==void 0){if(Q0.currentProgram===MJ&&Q0.lightsStateVersion===u0)return pQ(z,h0),MJ}else{if(h0.uniforms=R0.getUniforms(z),f!==null&&z.isNodeMaterial)f.build(z,H0,h0);z.onBeforeCompile(h0,I),MJ=R0.acquireProgram(h0,i0),n0.set(i0,MJ),Q0.uniforms=h0.uniforms}let a0=Q0.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)a0.clippingPlanes=P0.uniform;if(pQ(z,h0),Q0.needsLights=mQ(z),Q0.lightsStateVersion=u0,Q0.needsLights)a0.ambientLightColor.value=$0.state.ambient,a0.lightProbe.value=$0.state.probe,a0.sunLights.value=$0.state.sun,a0.sunLightShadows.value=$0.state.sunShadow,a0.directionalLights.value=$0.state.directional,a0.directionalLightShadows.value=$0.state.directionalShadow,a0.spotLights.value=$0.state.spot,a0.spotLightShadows.value=$0.state.spotShadow,a0.rectAreaLights.value=$0.state.rectArea,a0.ltc_1.value=$0.state.rectAreaLTC1,a0.ltc_2.value=$0.state.rectAreaLTC2,a0.pointLights.value=$0.state.point,a0.pointLightShadows.value=$0.state.pointShadow,a0.hemisphereLights.value=$0.state.hemi,a0.sunShadowMatrix.value=$0.state.sunShadowMatrix,a0.sunShadowCascade.value=$0.state.sunShadowCascade,a0.directionalShadowMatrix.value=$0.state.directionalShadowMatrix,a0.spotLightMatrix.value=$0.state.spotLightMatrix,a0.spotLightMap.value=$0.state.spotLightMap,a0.pointShadowMatrix.value=$0.state.pointShadowMatrix;return Q0.lightProbeGrid=L.state.lightProbeGridArray.length>0,Q0.currentProgram=MJ,Q0.uniformsList=null,MJ}function I$(z){if(z.uniformsList===null){let c=z.currentProgram.getUniforms();z.uniformsList=kQ.seqWithValue(c.seq,z.uniforms)}return z.uniformsList}function pQ(z,c){let H0=g.get(z);H0.outputColorSpace=c.outputColorSpace,H0.batching=c.batching,H0.batchingColor=c.batchingColor,H0.instancing=c.instancing,H0.instancingColor=c.instancingColor,H0.instancingMorph=c.instancingMorph,H0.skinning=c.skinning,H0.morphTargets=c.morphTargets,H0.morphNormals=c.morphNormals,H0.morphColors=c.morphColors,H0.morphTargetsCount=c.morphTargetsCount,H0.numClippingPlanes=c.numClippingPlanes,H0.numIntersection=c.numClipIntersection,H0.vertexAlphas=c.vertexAlphas,H0.vertexTangents=c.vertexTangents,H0.toneMapping=c.toneMapping}function U8(z,c){if(z.length===0)return null;if(z.length===1)return z[0].texture!==null?z[0]:null;k.setFromMatrixPosition(c.matrixWorld);for(let H0=0,Q0=z.length;H0<Q0;H0++){let $0=z[H0];if($0.texture!==null&&$0.boundingBox.containsPoint(k))return $0}return null}function G9(z,c,H0,Q0,$0){if(c.isScene!==!0)c=GJ;K0.resetTextureUnits();let w0=c.fog,u0=Q0.isMeshStandardMaterial||Q0.isMeshLambertMaterial||Q0.isMeshPhongMaterial?c.environment:null,h0=b===null?I.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:RJ.workingColorSpace,i0=Q0.isMeshStandardMaterial||Q0.isMeshLambertMaterial&&!Q0.envMap||Q0.isMeshPhongMaterial&&!Q0.envMap,n0=D0.get(Q0.envMap||u0,i0),EJ=Q0.vertexColors===!0&&!!H0.attributes.color&&H0.attributes.color.itemSize===4,MJ=!!H0.attributes.tangent&&(!!Q0.normalMap||Q0.anisotropy>0),a0=!!H0.morphAttributes.position,vJ=!!H0.morphAttributes.normal,aJ=!!H0.morphAttributes.color,TJ=V9;if(Q0.toneMapped){if(b===null||b.isXRRenderTarget===!0)TJ=I.toneMapping}let gJ=H0.morphAttributes.position||H0.morphAttributes.normal||H0.morphAttributes.color,iJ=gJ!==void 0?gJ.length:0,d0=g.get(Q0),N8=L.state.lights;if(U0===!0){if(S0===!0||z!==m){let nJ=z===m&&Q0.id===r;P0.setState(Q0,z,nJ)}}let IJ=!1;if(Q0.version===d0.__version){if(d0.needsLights&&d0.lightsStateVersion!==N8.state.version)IJ=!0;else if(d0.outputColorSpace!==h0)IJ=!0;else if($0.isBatchedMesh&&d0.batching===!1)IJ=!0;else if(!$0.isBatchedMesh&&d0.batching===!0)IJ=!0;else if($0.isBatchedMesh&&d0.batchingColor===!0&&$0._colorsTexture===null)IJ=!0;else if($0.isBatchedMesh&&d0.batchingColor===!1&&$0._colorsTexture!==null)IJ=!0;else if($0.isInstancedMesh&&d0.instancing===!1)IJ=!0;else if(!$0.isInstancedMesh&&d0.instancing===!0)IJ=!0;else if($0.isSkinnedMesh&&d0.skinning===!1)IJ=!0;else if(!$0.isSkinnedMesh&&d0.skinning===!0)IJ=!0;else if($0.isInstancedMesh&&d0.instancingColor===!0&&$0.instanceColor===null)IJ=!0;else if($0.isInstancedMesh&&d0.instancingColor===!1&&$0.instanceColor!==null)IJ=!0;else if($0.isInstancedMesh&&d0.instancingMorph===!0&&$0.morphTexture===null)IJ=!0;else if($0.isInstancedMesh&&d0.instancingMorph===!1&&$0.morphTexture!==null)IJ=!0;else if(d0.envMap!==n0)IJ=!0;else if(Q0.fog===!0&&d0.fog!==w0)IJ=!0;else if(d0.numClippingPlanes!==void 0&&(d0.numClippingPlanes!==P0.numPlanes||d0.numIntersection!==P0.numIntersection))IJ=!0;else if(d0.vertexAlphas!==EJ)IJ=!0;else if(d0.vertexTangents!==MJ)IJ=!0;else if(d0.morphTargets!==a0)IJ=!0;else if(d0.morphNormals!==vJ)IJ=!0;else if(d0.morphColors!==aJ)IJ=!0;else if(d0.toneMapping!==TJ)IJ=!0;else if(d0.morphTargetsCount!==iJ)IJ=!0;else if(!!d0.lightProbeGrid!==L.state.lightProbeGridArray.length>0)IJ=!0}else IJ=!0,d0.__version=Q0.version;let y8=d0.currentProgram;if(IJ===!0){if(y8=P$(Q0,c,$0),f&&Q0.isNodeMaterial)f.onUpdateProgram(Q0,y8,d0)}let k8=!1,r8=!1,c9=!1,hJ=y8.getUniforms(),rJ=d0.uniforms;if(S.useProgram(y8.program))k8=!0,r8=!0,c9=!0;if(Q0.id!==r)r=Q0.id,r8=!0;if(d0.needsLights){let nJ=U8(L.state.lightProbeGridArray,$0);if(d0.lightProbeGrid!==nJ)d0.lightProbeGrid=nJ,r8=!0}if(k8||m!==z){if(S.buffers.depth.getReversed()&&z.reversedDepth!==!0)z._reversedDepth=!0,z.updateProjectionMatrix();hJ.setValue(p,"projectionMatrix",z.projectionMatrix),hJ.setValue(p,"viewMatrix",z.matrixWorldInverse);let C8=hJ.map.cameraPosition;if(C8!==void 0)C8.setValue(p,t0.setFromMatrixPosition(z.matrixWorld));if(DJ.logarithmicDepthBuffer)hJ.setValue(p,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(Q0.isMeshPhongMaterial||Q0.isMeshToonMaterial||Q0.isMeshLambertMaterial||Q0.isMeshBasicMaterial||Q0.isMeshStandardMaterial||Q0.isShaderMaterial)hJ.setValue(p,"isOrthographic",z.isOrthographicCamera===!0);if(m!==z)m=z,r8=!0,c9=!0}if(d0.needsLights){if(N8.state.sunShadowMap.length>0)hJ.setValue(p,"sunShadowMap",N8.state.sunShadowMap,K0);if(N8.state.directionalShadowMap.length>0)hJ.setValue(p,"directionalShadowMap",N8.state.directionalShadowMap,K0);if(N8.state.spotShadowMap.length>0)hJ.setValue(p,"spotShadowMap",N8.state.spotShadowMap,K0);if(N8.state.pointShadowMap.length>0)hJ.setValue(p,"pointShadowMap",N8.state.pointShadowMap,K0)}if($0.isSkinnedMesh){hJ.setOptional(p,$0,"bindMatrix"),hJ.setOptional(p,$0,"bindMatrixInverse");let nJ=$0.skeleton;if(nJ){if(nJ.boneTexture===null)nJ.computeBoneTexture();hJ.setValue(p,"boneTexture",nJ.boneTexture,K0)}}if($0.isBatchedMesh){if(hJ.setOptional(p,$0,"batchingTexture"),hJ.setValue(p,"batchingTexture",$0._matricesTexture,K0),hJ.setOptional(p,$0,"batchingIdTexture"),hJ.setValue(p,"batchingIdTexture",$0._indirectTexture,K0),hJ.setOptional(p,$0,"batchingColorTexture"),$0._colorsTexture!==null)hJ.setValue(p,"batchingColorTexture",$0._colorsTexture,K0)}let F9=H0.morphAttributes;if(F9.position!==void 0||F9.normal!==void 0||F9.color!==void 0)zJ.update($0,H0,y8);if(r8||d0.receiveShadow!==$0.receiveShadow)d0.receiveShadow=$0.receiveShadow,hJ.setValue(p,"receiveShadow",$0.receiveShadow);if((Q0.isMeshStandardMaterial||Q0.isMeshLambertMaterial||Q0.isMeshPhongMaterial)&&Q0.envMap===null&&c.environment!==null)rJ.envMapIntensity.value=c.environmentIntensity;if(rJ.dfgLUT!==void 0)rJ.dfgLUT.value=tO();if(r8){if(hJ.setValue(p,"toneMappingExposure",I.toneMappingExposure),d0.needsLights)bK(rJ,c9);if(w0&&Q0.fog===!0)A0.refreshFogUniforms(rJ,w0);if(A0.refreshMaterialUniforms(rJ,Q0,T,x,L.state.transmissionRenderTarget[z.id]),d0.needsLights&&d0.lightProbeGrid){let nJ=d0.lightProbeGrid;rJ.probesSH.value=nJ.texture,rJ.probesMin.value.copy(nJ.boundingBox.min),rJ.probesMax.value.copy(nJ.boundingBox.max),rJ.probesResolution.value.copy(nJ.resolution)}kQ.upload(p,I$(d0),rJ,K0)}if(Q0.isShaderMaterial&&Q0.uniformsNeedUpdate===!0)kQ.upload(p,I$(d0),rJ,K0),Q0.uniformsNeedUpdate=!1;if(Q0.isSpriteMaterial)hJ.setValue(p,"center",$0.center);if(hJ.setValue(p,"modelViewMatrix",$0.modelViewMatrix),hJ.setValue(p,"normalMatrix",$0.normalMatrix),hJ.setValue(p,"modelMatrix",$0.matrixWorld),Q0.uniformsGroups!==void 0){let nJ=Q0.uniformsGroups;for(let C8=0,N7=nJ.length;C8<N7;C8++){let lQ=nJ[C8];l0.update(lQ,y8),l0.bind(lQ,y8)}}return y8}function bK(z,c){z.ambientLightColor.needsUpdate=c,z.lightProbe.needsUpdate=c,z.sunLights.needsUpdate=c,z.sunLightShadows.needsUpdate=c,z.directionalLights.needsUpdate=c,z.directionalLightShadows.needsUpdate=c,z.pointLights.needsUpdate=c,z.pointLightShadows.needsUpdate=c,z.spotLights.needsUpdate=c,z.spotLightShadows.needsUpdate=c,z.rectAreaLights.needsUpdate=c,z.hemisphereLights.needsUpdate=c}function mQ(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return u},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(z,c,H0){let Q0=g.get(z);if(Q0.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,Q0.__autoAllocateDepthBuffer===!1)Q0.__useRenderToTexture=!1;g.get(z.texture).__webglTexture=c,g.get(z.depthTexture).__webglTexture=Q0.__autoAllocateDepthBuffer?void 0:H0,Q0.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,c){let H0=g.get(z);H0.__webglFramebuffer=c,H0.__useDefaultFramebuffer=c===void 0},this.setRenderTarget=function(z,c=0,H0=0){b=z,y=c,u=H0;let Q0=null,$0=!1,w0=!1;if(z){let h0=g.get(z);if(h0.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(p.FRAMEBUFFER,h0.__webglFramebuffer),e.copy(z.viewport),Y0.copy(z.scissor),j=z.scissorTest,S.viewport(e),S.scissor(Y0),S.setScissorTest(j),r=-1;return}else if(h0.__webglFramebuffer===void 0)K0.setupRenderTarget(z);else if(h0.__hasExternalTextures)K0.rebindTextures(z,g.get(z.texture).__webglTexture,g.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let EJ=z.depthTexture;if(h0.__boundDepthTexture!==EJ){if(EJ!==null&&g.has(EJ)&&(z.width!==EJ.image.width||z.height!==EJ.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K0.setupDepthRenderbuffer(z)}}let i0=z.texture;if(i0.isData3DTexture||i0.isDataArrayTexture||i0.isCompressedArrayTexture)w0=!0;let n0=g.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(n0[c]))Q0=n0[c][H0];else Q0=n0[c];$0=!0}else if(z.samples>0&&K0.useMultisampledRTT(z)===!1)Q0=g.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(n0))Q0=n0[H0];else Q0=n0;e.copy(z.viewport),Y0.copy(z.scissor),j=z.scissorTest}else e.copy(Z0).multiplyScalar(T).floor(),Y0.copy(J0).multiplyScalar(T).floor(),j=O0;if(H0!==0)Q0=n;if(S.bindFramebuffer(p.FRAMEBUFFER,Q0))S.drawBuffers(z,Q0);if(S.viewport(e),S.scissor(Y0),S.setScissorTest(j),$0){let h0=g.get(z.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_CUBE_MAP_POSITIVE_X+c,h0.__webglTexture,H0)}else if(w0){let h0=c;for(let i0=0;i0<z.textures.length;i0++){let n0=g.get(z.textures[i0]);p.framebufferTextureLayer(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0+i0,n0.__webglTexture,H0,h0)}}else if(z!==null&&H0!==0){let h0=g.get(z.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,h0.__webglTexture,H0)}r=-1};function C6(z){let c=g.get(z);if(c.__readFormat!==z.format||c.__readType!==z.type)c.__readFormat=z.format,c.__readType=z.type,c.__formatReadable=DJ.textureFormatReadable(z.format),c.__typeReadable=DJ.textureTypeReadable(z.type);return c}if(this.readRenderTargetPixels=function(z,c,H0,Q0,$0,w0,u0,h0=0){if(!(z&&z.isWebGLRenderTarget)){ZJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let i0=g.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&u0!==void 0)i0=i0[u0];if(i0){S.bindFramebuffer(p.FRAMEBUFFER,i0);try{let n0=z.textures[h0],EJ=n0.format,MJ=n0.type;if(z.textures.length>1)p.readBuffer(p.COLOR_ATTACHMENT0+h0);let a0=C6(n0);if(a0.__formatReadable===!1){ZJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(a0.__typeReadable===!1){ZJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(c>=0&&c<=z.width-Q0&&(H0>=0&&H0<=z.height-$0))p.readPixels(c,H0,Q0,$0,F0.convert(EJ),F0.convert(MJ),w0)}finally{let n0=b!==null?g.get(b).__webglFramebuffer:null;S.bindFramebuffer(p.FRAMEBUFFER,n0)}}},this.readRenderTargetPixelsAsync=async function(z,c,H0,Q0,$0,w0,u0,h0=0){if(!(z&&z.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let i0=g.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&u0!==void 0)i0=i0[u0];if(i0)if(c>=0&&c<=z.width-Q0&&(H0>=0&&H0<=z.height-$0)){S.bindFramebuffer(p.FRAMEBUFFER,i0);let n0=z.textures[h0],EJ=n0.format,MJ=n0.type;if(z.textures.length>1)p.readBuffer(p.COLOR_ATTACHMENT0+h0);let a0=C6(n0);if(a0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(a0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vJ=p.createBuffer();p.bindBuffer(p.PIXEL_PACK_BUFFER,vJ),p.bufferData(p.PIXEL_PACK_BUFFER,w0.byteLength,p.STREAM_READ),p.readPixels(c,H0,Q0,$0,F0.convert(EJ),F0.convert(MJ),0),p.bindBuffer(p.PIXEL_PACK_BUFFER,null);let aJ=b!==null?g.get(b).__webglFramebuffer:null;S.bindFramebuffer(p.FRAMEBUFFER,aJ);let TJ=p.fenceSync(p.SYNC_GPU_COMMANDS_COMPLETE,0);return p.flush(),await CU(p,TJ,4),p.bindBuffer(p.PIXEL_PACK_BUFFER,vJ),p.getBufferSubData(p.PIXEL_PACK_BUFFER,0,w0),p.bindBuffer(p.PIXEL_PACK_BUFFER,null),p.deleteBuffer(vJ),p.deleteSync(TJ),w0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,c=null,H0=0){let Q0=Math.pow(2,-H0),$0=Math.floor(z.image.width*Q0),w0=Math.floor(z.image.height*Q0),u0=c!==null?c.x:0,h0=c!==null?c.y:0;K0.setTexture2D(z,0),p.copyTexSubImage2D(p.TEXTURE_2D,H0,0,0,u0,h0,$0,w0),S.unbindTexture()},this.copyTextureToTexture=function(z,c,H0=null,Q0=null,$0=0,w0=0){let u0,h0,i0,n0,EJ,MJ,a0,vJ,aJ,TJ=z.isCompressedTexture?z.mipmaps[w0]:z.image;if(H0!==null)u0=H0.max.x-H0.min.x,h0=H0.max.y-H0.min.y,i0=H0.isBox3?H0.max.z-H0.min.z:1,n0=H0.min.x,EJ=H0.min.y,MJ=H0.isBox3?H0.min.z:0;else{let rJ=Math.pow(2,-$0);if(u0=Math.floor(TJ.width*rJ),h0=Math.floor(TJ.height*rJ),z.isDataArrayTexture)i0=TJ.depth;else if(z.isData3DTexture)i0=Math.floor(TJ.depth*rJ);else i0=1;n0=0,EJ=0,MJ=0}if(Q0!==null)a0=Q0.x,vJ=Q0.y,aJ=Q0.z;else a0=0,vJ=0,aJ=0;let gJ=F0.convert(c.format),iJ=F0.convert(c.type),d0;if(c.isData3DTexture)K0.setTexture3D(c,0),d0=p.TEXTURE_3D;else if(c.isDataArrayTexture||c.isCompressedArrayTexture)K0.setTexture2DArray(c,0),d0=p.TEXTURE_2D_ARRAY;else K0.setTexture2D(c,0),d0=p.TEXTURE_2D;S.activeTexture(p.TEXTURE0),S.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,c.flipY),S.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),S.pixelStorei(p.UNPACK_ALIGNMENT,c.unpackAlignment);let N8=S.getParameter(p.UNPACK_ROW_LENGTH),IJ=S.getParameter(p.UNPACK_IMAGE_HEIGHT),y8=S.getParameter(p.UNPACK_SKIP_PIXELS),k8=S.getParameter(p.UNPACK_SKIP_ROWS),r8=S.getParameter(p.UNPACK_SKIP_IMAGES);S.pixelStorei(p.UNPACK_ROW_LENGTH,TJ.width),S.pixelStorei(p.UNPACK_IMAGE_HEIGHT,TJ.height),S.pixelStorei(p.UNPACK_SKIP_PIXELS,n0),S.pixelStorei(p.UNPACK_SKIP_ROWS,EJ),S.pixelStorei(p.UNPACK_SKIP_IMAGES,MJ);let c9=z.isDataArrayTexture||z.isData3DTexture,hJ=c.isDataArrayTexture||c.isData3DTexture;if(z.isDepthTexture){let rJ=g.get(z),F9=g.get(c),nJ=g.get(rJ.__renderTarget),C8=g.get(F9.__renderTarget);S.bindFramebuffer(p.READ_FRAMEBUFFER,nJ.__webglFramebuffer),S.bindFramebuffer(p.DRAW_FRAMEBUFFER,C8.__webglFramebuffer);for(let N7=0;N7<i0;N7++){if(c9)p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,g.get(z).__webglTexture,$0,MJ+N7),p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,g.get(c).__webglTexture,w0,aJ+N7);p.blitFramebuffer(n0,EJ,u0,h0,a0,vJ,u0,h0,p.DEPTH_BUFFER_BIT,p.NEAREST)}S.bindFramebuffer(p.READ_FRAMEBUFFER,null),S.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else if($0!==0||z.isRenderTargetTexture||g.has(z)){let rJ=g.get(z),F9=g.get(c);S.bindFramebuffer(p.READ_FRAMEBUFFER,X0),S.bindFramebuffer(p.DRAW_FRAMEBUFFER,v);for(let nJ=0;nJ<i0;nJ++){if(c9)p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,rJ.__webglTexture,$0,MJ+nJ);else p.framebufferTexture2D(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,rJ.__webglTexture,$0);if(hJ)p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,F9.__webglTexture,w0,aJ+nJ);else p.framebufferTexture2D(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,F9.__webglTexture,w0);if($0!==0)p.blitFramebuffer(n0,EJ,u0,h0,a0,vJ,u0,h0,p.COLOR_BUFFER_BIT,p.NEAREST);else if(hJ)p.copyTexSubImage3D(d0,w0,a0,vJ,aJ+nJ,n0,EJ,u0,h0);else p.copyTexSubImage2D(d0,w0,a0,vJ,n0,EJ,u0,h0)}S.bindFramebuffer(p.READ_FRAMEBUFFER,null),S.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else if(hJ)if(z.isDataTexture||z.isData3DTexture)p.texSubImage3D(d0,w0,a0,vJ,aJ,u0,h0,i0,gJ,iJ,TJ.data);else if(c.isCompressedArrayTexture)p.compressedTexSubImage3D(d0,w0,a0,vJ,aJ,u0,h0,i0,gJ,TJ.data);else p.texSubImage3D(d0,w0,a0,vJ,aJ,u0,h0,i0,gJ,iJ,TJ);else if(z.isDataTexture)p.texSubImage2D(p.TEXTURE_2D,w0,a0,vJ,u0,h0,gJ,iJ,TJ.data);else if(z.isCompressedTexture)p.compressedTexSubImage2D(p.TEXTURE_2D,w0,a0,vJ,TJ.width,TJ.height,gJ,TJ.data);else p.texSubImage2D(p.TEXTURE_2D,w0,a0,vJ,u0,h0,gJ,iJ,TJ);if(S.pixelStorei(p.UNPACK_ROW_LENGTH,N8),S.pixelStorei(p.UNPACK_IMAGE_HEIGHT,IJ),S.pixelStorei(p.UNPACK_SKIP_PIXELS,y8),S.pixelStorei(p.UNPACK_SKIP_ROWS,k8),S.pixelStorei(p.UNPACK_SKIP_IMAGES,r8),w0===0&&c.generateMipmaps)p.generateMipmap(d0);S.unbindTexture()},this.initRenderTarget=function(z){if(g.get(z).__webglFramebuffer===void 0)K0.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)K0.setTextureCube(z,0);else if(z.isData3DTexture)K0.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)K0.setTexture2DArray(z,0);else K0.setTexture2D(z,0);S.unbindTexture()},this.resetState=function(){y=0,u=0,b=null,S.reset(),j0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return NY}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let $=this.getContext();$.drawingBufferColorSpace=RJ._getDrawingBufferColorSpace(J),$.unpackColorSpace=RJ._getUnpackColorSpace()}}function E$(J,$=!1){let Q=J[0].index!==null,Z=new Set(Object.keys(J[0].attributes)),K=new Set(Object.keys(J[0].morphAttributes)),W={},Y={},X=J[0].morphTargetsRelative,H=new bJ,U=0;for(let N=0;N<J.length;++N){let F=J[N],G=0;if(Q!==(F.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let E in F.attributes){if(!Z.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+'. All geometries must have compatible attributes; make sure "'+E+'" attribute exists among all geometries, or in none of them.'),null;if(W[E]===void 0)W[E]=[];W[E].push(F.attributes[E]),G++}if(G!==Z.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". Make sure all geometries have the same number of attributes."),null;if(X!==F.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let E in F.morphAttributes){if(!K.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+".  .morphAttributes must be consistent throughout all geometries."),null;if(Y[E]===void 0)Y[E]=[];Y[E].push(F.morphAttributes[E])}if($){let E;if(Q)E=F.index.count;else if(F.attributes.position!==void 0)E=F.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". The geometry must have either an index or a position attribute"),null;H.addGroup(U,E,N),U+=E}}if(Q){let N=0,F=[];for(let G=0;G<J.length;++G){let E=J[G].index;for(let O=0;O<E.count;++O)F.push(E.getX(O)+N);N+=J[G].attributes.position.count}H.setIndex(F)}for(let N in W){let F=D5(W[N]);if(!F)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" attribute."),null;H.setAttribute(N,F)}for(let N in Y){let F=Y[N][0].length;if(F===0)continue;H.morphAttributes=H.morphAttributes||{},H.morphAttributes[N]=[];for(let G=0;G<F;++G){let E=[];for(let B=0;B<Y[N].length;++B)E.push(Y[N][B][G]);let O=D5(E);if(!O)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" morphAttribute."),null;H.morphAttributes[N].push(O)}}return H}function D5(J){let $,Q,Z,K=-1,W=0;for(let U=0;U<J.length;++U){let N=J[U];if($===void 0)$=N.array.constructor;if($!==N.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(Q===void 0)Q=N.itemSize;if(Q!==N.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(Z===void 0)Z=N.normalized;if(Z!==N.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(K===-1)K=N.gpuType;if(K!==N.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;W+=N.count*Q}let Y=new $(W),X=new tJ(Y,Q,Z),H=0;for(let U=0;U<J.length;++U){let N=J[U];if(N.isInterleavedBufferAttribute){let F=H/Q;for(let G=0,E=N.count;G<E;G++)for(let O=0;O<Q;O++){let B=N.getComponent(G,O);X.setComponent(G+F,O,B)}}else Y.set(N.array,H);H+=N.count*Q}if(K!==void 0)X.gpuType=K;return X}function iY(J,$){if($===YY)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if($===$$||$===KQ){let Q=J.getIndex();if(Q===null){let W=[],Y=J.getAttribute("position");if(Y!==void 0){for(let X=0;X<Y.count;X++)W.push(X);J.setIndex(W),Q=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=Q.count-2,K=[];if($===$$)for(let W=1;W<=Z;W++)K.push(Q.getX(0)),K.push(Q.getX(W)),K.push(Q.getX(W+1));else for(let W=0;W<Z;W++)if(W%2===0)K.push(Q.getX(W)),K.push(Q.getX(W+1)),K.push(Q.getX(W+2));else K.push(Q.getX(W+2)),K.push(Q.getX(W+1)),K.push(Q.getX(W));if(K.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(K),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",$),J}function q$(J){let $=new Map,Q=new Map,Z=J.clone();return M5(J,Z,function(K,W){$.set(W,K),Q.set(K,W)}),Z.traverse(function(K){if(!K.isSkinnedMesh)return;let W=K,Y=$.get(K),X=Y.skeleton.bones;W.skeleton=Y.skeleton.clone(),W.bindMatrix.copy(Y.bindMatrix),W.skeleton.bones=X.map(function(H){return Q.get(H)}),W.bind(W.skeleton,W.bindMatrix)}),Z}function M5(J,$,Q){Q(J,$);for(let Z=0;Z<J.children.length;Z++)M5(J.children[Z],$.children[Z],Q)}class $X extends K7{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function($){return new _5($)}),this.register(function($){return new w5($)}),this.register(function($){return new g5($)}),this.register(function($){return new p5($)}),this.register(function($){return new m5($)}),this.register(function($){return new j5($)}),this.register(function($){return new y5($)}),this.register(function($){return new v5($)}),this.register(function($){return new f5($)}),this.register(function($){return new T5($)}),this.register(function($){return new b5($)}),this.register(function($){return new S5($)}),this.register(function($){return new x5($)}),this.register(function($){return new h5($)}),this.register(function($){return new z5($)}),this.register(function($){return new tY($,PJ.EXT_MESHOPT_COMPRESSION)}),this.register(function($){return new tY($,PJ.KHR_MESHOPT_COMPRESSION)}),this.register(function($){return new l5($)})}load(J,$,Q,Z){let K=this,W;if(this.resourcePath!=="")W=this.resourcePath;else if(this.path!==""){let H=w7.extractUrlBase(J);W=w7.resolveURL(H,this.path)}else W=w7.extractUrlBase(J);this.manager.itemStart(J);let Y=function(H){if(Z)Z(H);else console.error(H);K.manager.itemError(J),K.manager.itemEnd(J)},X=new OQ(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(H){try{K.parse(H,W,function(U){$(U),K.manager.itemEnd(J)},Y)}catch(U){Y(U)}},Q,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,$,Q,Z){let K,W={},Y={},X=new TextDecoder;if(typeof J==="string")K=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===u5){try{W[PJ.KHR_BINARY_GLTF]=new d5(J)}catch(N){if(Z)Z(N);return}K=JSON.parse(W[PJ.KHR_BINARY_GLTF].content)}else K=JSON.parse(X.decode(J));else K=J;if(K.asset===void 0||K.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let H=new o5(K,{path:$||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});H.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let N=this.pluginCallbacks[U](H);if(!N.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[N.name]=N,W[N.name]=!0}if(K.extensionsUsed)for(let U=0;U<K.extensionsUsed.length;++U){let N=K.extensionsUsed[U],F=K.extensionsRequired||[];switch(N){case PJ.KHR_MATERIALS_UNLIT:W[N]=new A5;break;case PJ.KHR_DRACO_MESH_COMPRESSION:W[N]=new c5(K,this.dracoLoader);break;case PJ.KHR_TEXTURE_TRANSFORM:W[N]=new n5;break;case PJ.KHR_MESH_QUANTIZATION:W[N]=new s5;break;default:if(F.indexOf(N)>=0&&Y[N]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+N+'".')}}H.setExtensions(W),H.setPlugins(Y),H.parse(Q,Z)}parseAsync(J,$){let Q=this;return new Promise(function(Z,K){Q.parse(J,$,Z,K)})}}function eO(){let J={};return{get:function($){return J[$]},add:function($,Q){J[$]=Q},remove:function($){delete J[$]},removeAll:function(){J={}}}}function K8(J,$,Q){let Z=J.json.materials[$];if(Z.extensions&&Z.extensions[Q])return Z.extensions[Q];return null}var PJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class z5{constructor(J){this.parser=J,this.name=PJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,$=this.parser.json.nodes||[];for(let Q=0,Z=$.length;Q<Z;Q++){let K=$[Q];if(K.extensions&&K.extensions[this.name]&&K.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,K.extensions[this.name].light)}}_loadLight(J){let $=this.parser,Q="light:"+J,Z=$.cache.get(Q);if(Z)return Z;let K=$.json,X=((K.extensions&&K.extensions[this.name]||{}).lights||[])[J],H,U=new y0(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],d8);let N=X.range!==void 0?X.range:0;switch(X.type){case"directional":H=new U$(U),H.target.position.set(0,0,-1),H.add(H.target);break;case"point":H=new W7(U),H.distance=N;break;case"spot":H=new H$(U),H.distance=N,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,H.angle=X.spot.outerConeAngle,H.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,H.target.position.set(0,0,-1),H.add(H.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(H.position.set(0,0,0),x9(H,X),X.intensity!==void 0)H.intensity=X.intensity;return H.name=$.createUniqueName(X.name||"light_"+J),Z=Promise.resolve(H),$.cache.add(Q,Z),Z}getDependency(J,$){if(J!=="light")return;return this._loadLight($)}createNodeAttachment(J){let $=this,Q=this.parser,K=Q.json.nodes[J],Y=(K.extensions&&K.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return Q._getNodeRef($.cache,Y,X)})}}class A5{constructor(){this.name=PJ.KHR_MATERIALS_UNLIT}getMaterialType(){return xJ}extendParams(J,$,Q){let Z=[];J.color=new y0(1,1,1),J.opacity=1;let K=$.pbrMetallicRoughness;if(K){if(Array.isArray(K.baseColorFactor)){let W=K.baseColorFactor;J.color.setRGB(W[0],W[1],W[2],d8),J.opacity=W[3]}if(K.baseColorTexture!==void 0)Z.push(Q.assignTexture(J,"map",K.baseColorTexture,Q8))}return Promise.all(Z)}}class T5{constructor(J){this.parser=J,this.name=PJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();if(Q.emissiveStrength!==void 0)$.emissiveIntensity=Q.emissiveStrength;return Promise.resolve()}}class _5{constructor(J){this.parser=J,this.name=PJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.clearcoatFactor!==void 0)$.clearcoat=Q.clearcoatFactor;if(Q.clearcoatTexture!==void 0)Z.push(this.parser.assignTexture($,"clearcoatMap",Q.clearcoatTexture));if(Q.clearcoatRoughnessFactor!==void 0)$.clearcoatRoughness=Q.clearcoatRoughnessFactor;if(Q.clearcoatRoughnessTexture!==void 0)Z.push(this.parser.assignTexture($,"clearcoatRoughnessMap",Q.clearcoatRoughnessTexture));if(Q.clearcoatNormalTexture!==void 0){if(Z.push(this.parser.assignTexture($,"clearcoatNormalMap",Q.clearcoatNormalTexture)),Q.clearcoatNormalTexture.scale!==void 0){let K=Q.clearcoatNormalTexture.scale;$.clearcoatNormalScale=new L0(K,K)}}return Promise.all(Z)}}class w5{constructor(J){this.parser=J,this.name=PJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();return $.dispersion=Q.dispersion!==void 0?Q.dispersion:0,Promise.resolve()}}class S5{constructor(J){this.parser=J,this.name=PJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.iridescenceFactor!==void 0)$.iridescence=Q.iridescenceFactor;if(Q.iridescenceTexture!==void 0)Z.push(this.parser.assignTexture($,"iridescenceMap",Q.iridescenceTexture));if(Q.iridescenceIor!==void 0)$.iridescenceIOR=Q.iridescenceIor;if($.iridescenceThicknessRange===void 0)$.iridescenceThicknessRange=[100,400];if(Q.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessRange[0]=Q.iridescenceThicknessMinimum;if(Q.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessRange[1]=Q.iridescenceThicknessMaximum;if(Q.iridescenceThicknessTexture!==void 0)Z.push(this.parser.assignTexture($,"iridescenceThicknessMap",Q.iridescenceThicknessTexture));return Promise.all(Z)}}class j5{constructor(J){this.parser=J,this.name=PJ.KHR_MATERIALS_SHEEN}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.sheenColor=new y0(0,0,0),$.sheenRoughness=0,$.sheen=1,Q.sheenColorFactor!==void 0){let K=Q.sheenColorFactor;$.sheenColor.setRGB(K[0],K[1],K[2],d8)}if(Q.sheenRoughnessFactor!==void 0)$.sheenRoughness=Q.sheenRoughnessFactor;if(Q.sheenColorTexture!==void 0)Z.push(this.parser.assignTexture($,"sheenColorMap",Q.sheenColorTexture,Q8));if(Q.sheenRoughnessTexture!==void 0)Z.push(this.parser.assignTexture($,"sheenRoughnessMap",Q.sheenRoughnessTexture));return Promise.all(Z)}}class y5{constructor(J){this.parser=J,this.name=PJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.transmissionFactor!==void 0)$.transmission=Q.transmissionFactor;if(Q.transmissionTexture!==void 0)Z.push(this.parser.assignTexture($,"transmissionMap",Q.transmissionTexture));return Promise.all(Z)}}class v5{constructor(J){this.parser=J,this.name=PJ.KHR_MATERIALS_VOLUME}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.thickness=Q.thicknessFactor!==void 0?Q.thicknessFactor:0,Q.thicknessTexture!==void 0)Z.push(this.parser.assignTexture($,"thicknessMap",Q.thicknessTexture));$.attenuationDistance=Q.attenuationDistance||1/0;let K=Q.attenuationColor||[1,1,1];return $.attenuationColor=new y0().setRGB(K[0],K[1],K[2],d8),Promise.all(Z)}}class f5{constructor(J){this.parser=J,this.name=PJ.KHR_MATERIALS_IOR}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();if($.ior=Q.ior!==void 0?Q.ior:1.5,$.ior===0)$.ior=1000;return Promise.resolve()}}class b5{constructor(J){this.parser=J,this.name=PJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.specularIntensity=Q.specularFactor!==void 0?Q.specularFactor:1,Q.specularTexture!==void 0)Z.push(this.parser.assignTexture($,"specularIntensityMap",Q.specularTexture));let K=Q.specularColorFactor||[1,1,1];if($.specularColor=new y0().setRGB(K[0],K[1],K[2],d8),Q.specularColorTexture!==void 0)Z.push(this.parser.assignTexture($,"specularColorMap",Q.specularColorTexture,Q8));return Promise.all(Z)}}class h5{constructor(J){this.parser=J,this.name=PJ.EXT_MATERIALS_BUMP}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.bumpScale=Q.bumpFactor!==void 0?Q.bumpFactor:1,Q.bumpTexture!==void 0)Z.push(this.parser.assignTexture($,"bumpMap",Q.bumpTexture));return Promise.all(Z)}}class x5{constructor(J){this.parser=J,this.name=PJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.anisotropyStrength!==void 0)$.anisotropy=Q.anisotropyStrength;if(Q.anisotropyRotation!==void 0)$.anisotropyRotation=Q.anisotropyRotation;if(Q.anisotropyTexture!==void 0)Z.push(this.parser.assignTexture($,"anisotropyMap",Q.anisotropyTexture));return Promise.all(Z)}}class g5{constructor(J){this.parser=J,this.name=PJ.KHR_TEXTURE_BASISU}loadTexture(J){let $=this.parser,Q=$.json,Z=Q.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let K=Z.extensions[this.name],W=$.options.ktx2Loader;if(!W)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return $.loadTextureImage(J,K.source,W)}}class p5{constructor(J){this.parser=J,this.name=PJ.EXT_TEXTURE_WEBP}loadTexture(J){let $=this.name,Q=this.parser,Z=Q.json,K=Z.textures[J];if(!K.extensions||!K.extensions[$])return null;let W=K.extensions[$],Y=Z.images[W.source],X=Q.textureLoader;if(Y.uri){let H=Q.options.manager.getHandler(Y.uri);if(H!==null)X=H}return Q.loadTextureImage(J,W.source,X)}}class m5{constructor(J){this.parser=J,this.name=PJ.EXT_TEXTURE_AVIF}loadTexture(J){let $=this.name,Q=this.parser,Z=Q.json,K=Z.textures[J];if(!K.extensions||!K.extensions[$])return null;let W=K.extensions[$],Y=Z.images[W.source],X=Q.textureLoader;if(Y.uri){let H=Q.options.manager.getHandler(Y.uri);if(H!==null)X=H}return Q.loadTextureImage(J,W.source,X)}}class tY{constructor(J,$){this.name=$,this.parser=J}loadBufferView(J){let $=this.parser.json,Q=$.bufferViews[J];if(Q.extensions&&Q.extensions[this.name]){let Z=Q.extensions[this.name],K=this.parser.getDependency("buffer",Z.buffer),W=this.parser.options.meshoptDecoder;if(!W||!W.supported)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return K.then(function(Y){let X=Z.byteOffset||0,H=Z.byteLength||0,U=Z.count,N=Z.byteStride,F=new Uint8Array(Y,X,H);if(W.decodeGltfBufferAsync)return W.decodeGltfBufferAsync(U,N,F,Z.mode,Z.filter).then(function(G){return G.buffer});else return W.ready.then(function(){let G=new ArrayBuffer(U*N);return W.decodeGltfBuffer(new Uint8Array(G),U,N,F,Z.mode,Z.filter),G})})}else return null}}class l5{constructor(J){this.name=PJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let $=this.parser.json,Q=$.nodes[J];if(!Q.extensions||!Q.extensions[this.name]||Q.mesh===void 0)return null;let Z=$.meshes[Q.mesh];for(let H of Z.primitives)if(H.mode!==K9.TRIANGLES&&H.mode!==K9.TRIANGLE_STRIP&&H.mode!==K9.TRIANGLE_FAN&&H.mode!==void 0)return null;let W=Q.extensions[this.name].attributes,Y=[],X={};for(let H in W)Y.push(this.parser.getDependency("accessor",W[H]).then((U)=>{return X[H]=U,X[H]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((H)=>{let U=H.pop(),N=U.isGroup?U.children:[U],F=H[0].count,G=[];for(let E of N){let O=new QJ,B=new _,R=new UJ,q=new _(1,1,1),M=new v9(E.geometry,E.material,F);for(let V=0;V<F;V++){if(X.TRANSLATION)B.fromBufferAttribute(X.TRANSLATION,V);if(X.ROTATION)R.fromBufferAttribute(X.ROTATION,V);if(X.SCALE)q.fromBufferAttribute(X.SCALE,V);M.setMatrixAt(V,O.compose(B,R,q))}let k=null;for(let V in X)if(V==="_COLOR_0"){let L=X[V];M.instanceColor=new V7(L.array,L.itemSize,L.normalized)}else if(V!=="TRANSLATION"&&V!=="ROTATION"&&V!=="SCALE"){if(k===null){let P=M.geometry;k=new bJ,k.name=P.name;for(let A in P.attributes)k.setAttribute(A,P.attributes[A]);for(let A in P.morphAttributes)k.morphAttributes[A]=P.morphAttributes[A];if(P.index!==null)k.setIndex(P.index);k.morphTargetsRelative=P.morphTargetsRelative;for(let A of P.groups)k.addGroup(A.start,A.count,A.materialIndex);if(P.boundingBox!==null)k.boundingBox=P.boundingBox.clone();if(P.boundingSphere!==null)k.boundingSphere=P.boundingSphere.clone();k.drawRange.start=P.drawRange.start,k.drawRange.count=P.drawRange.count,k.userData=Object.assign({},P.userData),M.geometry=k}let L=X[V];k.setAttribute(V,new V7(L.array,L.itemSize,L.normalized))}SJ.prototype.copy.call(M,E),this.parser.assignFinalMaterial(M),G.push(M)}if(U.isGroup)return U.clear(),U.add(...G),U;return G[0]})}}var u5="glTF",PQ=12,k5={JSON:1313821514,BIN:5130562};class d5{constructor(J){this.name=PJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let $=new DataView(J,0,PQ),Q=new TextDecoder;if(this.header={magic:Q.decode(new Uint8Array(J.slice(0,4))),version:$.getUint32(4,!0),length:$.getUint32(8,!0)},this.header.magic!==u5)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-PQ,K=new DataView(J,PQ),W=0;while(W<Z){let Y=K.getUint32(W,!0);W+=4;let X=K.getUint32(W,!0);if(W+=4,X===k5.JSON){let H=new Uint8Array(J,PQ+W,Y);this.content=Q.decode(H)}else if(X===k5.BIN){let H=PQ+W;this.body=J.slice(H,H+Y)}W+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class c5{constructor(J,$){if(!$)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=PJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=$,this.dracoLoader.preload()}decodePrimitive(J,$){let Q=this.json,Z=this.dracoLoader,K=J.extensions[this.name].bufferView,W=J.extensions[this.name].attributes,Y={},X={},H={};for(let U in W){let N=eY[U]||U.toLowerCase();Y[N]=W[U]}for(let U in J.attributes){let N=eY[U]||U.toLowerCase();if(W[U]!==void 0){let F=Q.accessors[J.attributes[U]],G=O$[F.componentType];H[N]=G.name,X[N]=F.normalized===!0}}return $.getDependency("bufferView",K).then(function(U){return new Promise(function(N,F){Z.decodeDracoFile(U,function(G){for(let E in G.attributes){let O=G.attributes[E],B=X[E];if(B!==void 0)O.normalized=B}N(G)},Y,H,d8,F)})})}}class n5{constructor(){this.name=PJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,$){if(($.texCoord===void 0||$.texCoord===J.channel)&&$.offset===void 0&&$.rotation===void 0&&$.scale===void 0)return J;if(J=J.clone(),$.texCoord!==void 0)J.channel=$.texCoord;if($.offset!==void 0)J.offset.fromArray($.offset);if($.rotation!==void 0)J.rotation=$.rotation;if($.scale!==void 0)J.repeat.fromArray($.scale);if($.rotation!==void 0){let Q=Math.cos(J.rotation),Z=Math.sin(J.rotation);J.matrix.set(J.repeat.x*Q,J.repeat.y*Z,J.offset.x,-J.repeat.x*Z,J.repeat.y*Q,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class s5{constructor(){this.name=PJ.KHR_MESH_QUANTIZATION}}class QX extends Z7{constructor(J,$,Q,Z){super(J,$,Q,Z)}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,K=J*Z*3+Z;for(let W=0;W!==Z;W++)$[W]=Q[K+W];return $}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=Y*2,H=Y*3,U=Z-$,N=(Q-$)/U,F=N*N,G=F*N,E=J*H,O=E-H,B=-2*G+3*F,R=G-F,q=1-B,M=R-F+N;for(let k=0;k!==Y;k++){let V=W[O+k+Y],L=W[O+k+X]*U,P=W[E+k+Y],A=W[E+k]*U;K[k]=q*V+M*L+B*P+R*A}return K}}var JR=new UJ;class i5 extends QX{interpolate_(J,$,Q,Z){let K=super.interpolate_(J,$,Q,Z);return JR.fromArray(K).normalize().toArray(K),K}}var K9={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},O$={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},C5={9728:B9,9729:X8,9984:wZ,9985:e6,9986:i7,9987:Q9},P5={33071:t6,33648:_Z,10497:k7},oY={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},eY={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},j7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$R={CUBICSPLINE:void 0,LINEAR:hZ,STEP:WY},aY={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function QR(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new o0({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:M7});return J.DefaultMaterial}function U6(J,$,Q){for(let Z in Q.extensions)if(J[Z]===void 0)$.userData.gltfExtensions=$.userData.gltfExtensions||{},$.userData.gltfExtensions[Z]=Q.extensions[Z]}function x9(J,$){if($.extras!==void 0)if(typeof $.extras==="object")Object.assign(J.userData,$.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+$.extras)}function ZR(J,$,Q){let Z=!1,K=!1,W=!1;for(let U=0,N=$.length;U<N;U++){let F=$[U];if(F.POSITION!==void 0)Z=!0;if(F.NORMAL!==void 0)K=!0;if(F.COLOR_0!==void 0)W=!0;if(Z&&K&&W)break}if(!Z&&!K&&!W)return Promise.resolve(J);let Y=[],X=[],H=[];for(let U=0,N=$.length;U<N;U++){let F=$[U];if(Z){let G=F.POSITION!==void 0?Q.getDependency("accessor",F.POSITION):J.attributes.position;Y.push(G)}if(K){let G=F.NORMAL!==void 0?Q.getDependency("accessor",F.NORMAL):J.attributes.normal;X.push(G)}if(W){let G=F.COLOR_0!==void 0?Q.getDependency("accessor",F.COLOR_0):J.attributes.color;H.push(G)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(H)]).then(function(U){let N=U[0],F=U[1],G=U[2];if(Z)J.morphAttributes.position=N;if(K)J.morphAttributes.normal=F;if(W)J.morphAttributes.color=G;return J.morphTargetsRelative=!0,J})}function KR(J,$){if(J.updateMorphTargets(),$.weights!==void 0)for(let Q=0,Z=$.weights.length;Q<Z;Q++)J.morphTargetInfluences[Q]=$.weights[Q];if($.extras&&Array.isArray($.extras.targetNames)){let Q=$.extras.targetNames;if(J.morphTargetInfluences.length===Q.length){J.morphTargetDictionary={};for(let Z=0,K=Q.length;Z<K;Z++)J.morphTargetDictionary[Q[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WR(J){let $,Q=J.extensions&&J.extensions[PJ.KHR_DRACO_MESH_COMPRESSION];if(Q)$="draco:"+Q.bufferView+":"+Q.indices+":"+rY(Q.attributes);else $=J.indices+":"+rY(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,K=J.targets.length;Z<K;Z++)$+=":"+rY(J.targets[Z]);return $}function rY(J){let $="",Q=Object.keys(J).sort();for(let Z=0,K=Q.length;Z<K;Z++)$+=Q[Z]+":"+J[Q[Z]]+";";return $}function JX(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function YR(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var XR=new QJ;class o5{constructor(J={},$={}){this.json=J,this.extensions={},this.plugins={},this.options=$,this.cache=new eO,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let Q=!1,Z=-1,K=!1,W=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let Y=navigator.userAgent;Q=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);Z=Q&&X?parseInt(X[1],10):-1,K=Y.indexOf("Firefox")>-1,W=K?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||Q&&Z<17||K&&W<98)this.textureLoader=new QK(this.options.manager);else this.textureLoader=new WK(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new OQ(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,$){let Q=this,Z=this.json,K=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(W){return W._markDefs&&W._markDefs()}),Promise.all(this._invokeAll(function(W){return W.beforeRoot&&W.beforeRoot()})).then(function(){return Promise.all([Q.getDependencies("scene"),Q.getDependencies("animation"),Q.getDependencies("camera")])}).then(function(W){let Y={scene:W[0][Z.scene||0],scenes:W[0],animations:W[1],cameras:W[2],asset:Z.asset,parser:Q,userData:{}};return U6(K,Y,Z),x9(Y,Z),Promise.all(Q._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch($)}_markDefs(){let J=this.json.nodes||[],$=this.json.skins||[],Q=this.json.meshes||[];for(let Z=0,K=$.length;Z<K;Z++){let W=$[Z].joints;for(let Y=0,X=W.length;Y<X;Y++)J[W[Y]].isBone=!0}for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];if(W.mesh!==void 0){if(this._addNodeRef(this.meshCache,W.mesh),W.skin!==void 0)Q[W.mesh].isSkinnedMesh=!0}if(W.camera!==void 0)this._addNodeRef(this.cameraCache,W.camera)}}_addNodeRef(J,$){if($===void 0)return;if(J.refs[$]===void 0)J.refs[$]=J.uses[$]=0;J.refs[$]++}_getNodeRef(J,$,Q){if(J.refs[$]<=1)return Q;let Z=Q.clone(),K=(W,Y)=>{let X=this.associations.get(W);if(X!=null)this.associations.set(Y,X);for(let[H,U]of W.children.entries())K(U,Y.children[H])};return K(Q,Z),Z.name+="_instance_"+J.uses[$]++,Z}_invokeOne(J){let $=Object.values(this.plugins);$.push(this);for(let Q=0;Q<$.length;Q++){let Z=J($[Q]);if(Z)return Z}return null}_invokeAll(J){let $=Object.values(this.plugins);$.unshift(this);let Q=[];for(let Z=0;Z<$.length;Z++){let K=J($[Z]);if(K)Q.push(K)}return Q}getDependency(J,$){let Q=J+":"+$,Z=this.cache.get(Q);if(!Z){switch(J){case"scene":Z=this.loadScene($);break;case"node":Z=this._invokeOne(function(K){return K.loadNode&&K.loadNode($)});break;case"mesh":Z=this._invokeOne(function(K){return K.loadMesh&&K.loadMesh($)});break;case"accessor":Z=this.loadAccessor($);break;case"bufferView":Z=this._invokeOne(function(K){return K.loadBufferView&&K.loadBufferView($)});break;case"buffer":Z=this.loadBuffer($);break;case"material":Z=this._invokeOne(function(K){return K.loadMaterial&&K.loadMaterial($)});break;case"texture":Z=this._invokeOne(function(K){return K.loadTexture&&K.loadTexture($)});break;case"skin":Z=this.loadSkin($);break;case"animation":Z=this._invokeOne(function(K){return K.loadAnimation&&K.loadAnimation($)});break;case"camera":Z=this.loadCamera($);break;default:if(Z=this._invokeOne(function(K){return K!=this&&K.getDependency&&K.getDependency(J,$)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add(Q,Z)}return Z}getDependencies(J){let $=this.cache.get(J);if(!$){let Q=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];$=Promise.all(Z.map(function(K,W){return Q.getDependency(J,W)})),this.cache.add(J,$)}return $}loadBuffer(J){let $=this.json.buffers[J],Q=this.fileLoader;if($.type&&$.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+$.type+" buffer type is not supported.");if($.uri===void 0&&J===0)return Promise.resolve(this.extensions[PJ.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(K,W){Q.load(w7.resolveURL($.uri,Z.path),K,void 0,function(){W(Error('THREE.GLTFLoader: Failed to load buffer "'+$.uri+'".'))})})}loadBufferView(J){let $=this.json.bufferViews[J];return this.getDependency("buffer",$.buffer).then(function(Q){let Z=$.byteLength||0,K=$.byteOffset||0;return Q.slice(K,K+Z)})}loadAccessor(J){let $=this,Q=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let W=oY[Z.type],Y=O$[Z.componentType],X=Z.normalized===!0,H=new Y(Z.count*W);return Promise.resolve(new tJ(H,W,X))}let K=[];if(Z.bufferView!==void 0)K.push(this.getDependency("bufferView",Z.bufferView));else K.push(null);if(Z.sparse!==void 0)K.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),K.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(K).then(function(W){let Y=W[0],X=oY[Z.type],H=O$[Z.componentType],U=H.BYTES_PER_ELEMENT,N=U*X,F=Z.byteOffset||0,G=Z.bufferView!==void 0?Q.bufferViews[Z.bufferView].byteStride:void 0,E=Z.normalized===!0,O,B;if(G&&G!==N){let R=Math.floor(F/G),q="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+R+":"+Z.count,M=$.cache.get(q);if(!M)O=new H(Y,R*G,Z.count*G/U),M=new Z$(O,G/U),$.cache.add(q,M);B=new L7(M,X,F%G/U,E)}else{if(Y===null)O=new H(Z.count*X);else O=new H(Y,F,Z.count*X);B=new tJ(O,X,E)}if(Z.sparse!==void 0){let R=oY.SCALAR,q=O$[Z.sparse.indices.componentType],M=Z.sparse.indices.byteOffset||0,k=Z.sparse.values.byteOffset||0,V=new q(W[1],M,Z.sparse.count*R),L=new H(W[2],k,Z.sparse.count*X);if(Y!==null)B=new tJ(B.array.slice(),B.itemSize,B.normalized);B.normalized=!1;for(let P=0,A=V.length;P<A;P++){let D=V[P];if(B.setX(D,L[P*X]),X>=2)B.setY(D,L[P*X+1]);if(X>=3)B.setZ(D,L[P*X+2]);if(X>=4)B.setW(D,L[P*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}B.normalized=E}return B})}loadTexture(J){let $=this.json,Q=this.options,K=$.textures[J].source,W=$.images[K],Y=this.textureLoader;if(W.uri){let X=Q.manager.getHandler(W.uri);if(X!==null)Y=X}return this.loadTextureImage(J,K,Y)}loadTextureImage(J,$,Q){let Z=this,K=this.json,W=K.textures[J],Y=K.images[$],X=(Y.uri||Y.bufferView)+":"+W.sampler;if(this.textureCache[X])return this.textureCache[X];let H=this.loadImageSource($,Q).then(function(U){if(U.flipY=!1,U.name=W.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let F=(K.samplers||{})[W.sampler]||{};return U.magFilter=C5[F.magFilter]||X8,U.minFilter=C5[F.minFilter]||Q9,U.wrapS=P5[F.wrapS]||k7,U.wrapT=P5[F.wrapT]||k7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==B9&&U.minFilter!==X8,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=H,H}loadImageSource(J,$){let Q=this,Z=this.json,K=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let W=Z.images[J],Y=self.URL||self.webkitURL,X=W.uri||"",H=!1;if(W.bufferView!==void 0)X=Q.getDependency("bufferView",W.bufferView).then(function(N){H=!0;let F=new Blob([N],{type:W.mimeType});return X=Y.createObjectURL(F),X});else if(W.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(N){return new Promise(function(F,G){let E=F;if($.isImageBitmapLoader===!0)E=function(O){let B=new $8(O);B.needsUpdate=!0,F(B)};$.load(w7.resolveURL(N,K.path),E,void 0,G)})}).then(function(N){if(H===!0)Y.revokeObjectURL(X);return x9(N,W),N.userData.mimeType=W.mimeType||YR(W.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),N});return this.sourceCache[J]=U,U}assignTexture(J,$,Q,Z){let K=this;return this.getDependency("texture",Q.index).then(function(W){if(!W)return null;if(Q.texCoord!==void 0&&Q.texCoord>0)W=W.clone(),W.channel=Q.texCoord;if(K.extensions[PJ.KHR_TEXTURE_TRANSFORM]){let Y=Q.extensions!==void 0?Q.extensions[PJ.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=K.associations.get(W);W=K.extensions[PJ.KHR_TEXTURE_TRANSFORM].extendTexture(W,Y),K.associations.set(W,X)}}if(Z!==void 0)W.colorSpace=Z;return J[$]=W,W})}assignFinalMaterial(J){let{geometry:$,material:Q}=J,Z=$.attributes.tangent===void 0,K=$.attributes.color!==void 0,W=$.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+Q.uuid,X=this.cache.get(Y);if(!X)X=new Z6,v8.prototype.copy.call(X,Q),X.color.copy(Q.color),X.map=Q.map,X.sizeAttenuation=!1,this.cache.add(Y,X);Q=X}else if(J.isLine){let Y="LineBasicMaterial:"+Q.uuid,X=this.cache.get(Y);if(!X)X=new UQ,v8.prototype.copy.call(X,Q),X.color.copy(Q.color),X.map=Q.map,this.cache.add(Y,X);Q=X}if(Z||K||W){let Y="ClonedMaterial:"+Q.uuid+":";if(Z)Y+="derivative-tangents:";if(K)Y+="vertex-colors:";if(W)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=Q.clone(),K)X.vertexColors=!0;if(W)X.flatShading=!0;if(Z){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get(Q))}Q=X}J.material=Q}getMaterialType(){return o0}loadMaterial(J){let $=this,Q=this.json,Z=this.extensions,K=Q.materials[J],W,Y={},X=K.extensions||{},H=[];if(X[PJ.KHR_MATERIALS_UNLIT]){let N=Z[PJ.KHR_MATERIALS_UNLIT];W=N.getMaterialType(),H.push(N.extendParams(Y,K,$))}else{let N=K.pbrMetallicRoughness||{};if(Y.color=new y0(1,1,1),Y.opacity=1,Array.isArray(N.baseColorFactor)){let F=N.baseColorFactor;Y.color.setRGB(F[0],F[1],F[2],d8),Y.opacity=F[3]}if(N.baseColorTexture!==void 0)H.push($.assignTexture(Y,"map",N.baseColorTexture,Q8));if(Y.metalness=N.metallicFactor!==void 0?N.metallicFactor:1,Y.roughness=N.roughnessFactor!==void 0?N.roughnessFactor:1,N.metallicRoughnessTexture!==void 0)H.push($.assignTexture(Y,"metalnessMap",N.metallicRoughnessTexture)),H.push($.assignTexture(Y,"roughnessMap",N.metallicRoughnessTexture));W=this._invokeOne(function(F){return F.getMaterialType&&F.getMaterialType(J)}),H.push(Promise.all(this._invokeAll(function(F){return F.extendMaterialParams&&F.extendMaterialParams(J,Y)})))}if(K.doubleSided===!0)Y.side=oJ;let U=K.alphaMode||aY.OPAQUE;if(U===aY.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===aY.MASK)Y.alphaTest=K.alphaCutoff!==void 0?K.alphaCutoff:0.5;if(K.normalTexture!==void 0&&W!==xJ){if(H.push($.assignTexture(Y,"normalMap",K.normalTexture)),Y.normalScale=new L0(1,1),K.normalTexture.scale!==void 0){let N=K.normalTexture.scale;Y.normalScale.set(N,N)}}if(K.occlusionTexture!==void 0&&W!==xJ){if(H.push($.assignTexture(Y,"aoMap",K.occlusionTexture)),K.occlusionTexture.strength!==void 0)Y.aoMapIntensity=K.occlusionTexture.strength}if(K.emissiveFactor!==void 0&&W!==xJ){let N=K.emissiveFactor;Y.emissive=new y0().setRGB(N[0],N[1],N[2],d8)}if(K.emissiveTexture!==void 0&&W!==xJ)H.push($.assignTexture(Y,"emissiveMap",K.emissiveTexture,Q8));return Promise.all(H).then(function(){let N=new W(Y);if(K.name)N.name=K.name;if(x9(N,K),$.associations.set(N,{materials:J}),K.extensions)U6(Z,N,K);return N})}createUniqueName(J){let $=fJ.sanitizeNodeName(J||"");if($ in this.nodeNamesUsed)return $+"_"+ ++this.nodeNamesUsed[$];else return this.nodeNamesUsed[$]=0,$}loadGeometries(J){let $=this,Q=this.extensions,Z=this.primitiveCache;function K(Y){return Q[PJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,$).then(function(X){return I5(X,Y,$)})}let W=[];for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y],U=WR(H),N=Z[U];if(N)W.push(N.promise);else{let F;if(H.extensions&&H.extensions[PJ.KHR_DRACO_MESH_COMPRESSION])F=K(H);else F=I5(new bJ,H,$);if(H.mode===K9.TRIANGLE_STRIP)F=F.then((G)=>iY(G,KQ));else if(H.mode===K9.TRIANGLE_FAN)F=F.then((G)=>iY(G,$$));Z[U]={primitive:H,promise:F},W.push(F)}}return Promise.all(W)}loadMesh(J){let $=this,Q=this.json,Z=this.extensions,K=Q.meshes[J],W=K.primitives,Y=[];for(let X=0,H=W.length;X<H;X++){let U=W[X].material===void 0?QR(this.cache):this.getDependency("material",W[X].material);Y.push(U)}return Y.push($.loadGeometries(W)),Promise.all(Y).then(async function(X){let H=X.slice(0,X.length-1),U=X[X.length-1],N=[];for(let G=0,E=U.length;G<E;G++){let O=U[G],B=W[G],R,q=H[G];if(B.mode===K9.TRIANGLES||B.mode===K9.TRIANGLE_STRIP||B.mode===K9.TRIANGLE_FAN||B.mode===void 0){let M=K.isSkinnedMesh===!0,k=O.hasAttribute("skinIndex")&&O.hasAttribute("skinWeight");if(M&&k===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(R=M&&k?new dZ(O,q):new I0(O,q),R.isSkinnedMesh===!0)R.normalizeSkinWeights()}else if(B.mode===K9.LINES)R=new cZ(O,q);else if(B.mode===K9.LINE_STRIP)R=new W$(O,q);else if(B.mode===K9.LINE_LOOP)R=new nZ(O,q);else if(B.mode===K9.POINTS)R=new Y$(O,q);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+B.mode);if(Object.keys(R.geometry.morphAttributes).length>0)KR(R,K);if(R.name=$.createUniqueName(K.name||"mesh_"+J),x9(R,K),B.extensions)U6(Z,R,B);$.assignFinalMaterial(R),N.push(R)}for(let G=0,E=N.length;G<E;G++)$.associations.set(N[G],{meshes:J,primitives:G});if(N.length===1){if(K.extensions)U6(Z,N[0],K);return N[0]}let F=new AJ;if(K.extensions)U6(Z,F,K);$.associations.set(F,{meshes:J});for(let G=0,E=N.length;G<E;G++)F.add(N[G]);return F})}loadCamera(J){let $,Q=this.json.cameras[J],Z=Q[Q.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(Q.type==="perspective")$=new G8(y9.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if(Q.type==="orthographic")$=new Y7(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if(Q.name)$.name=this.createUniqueName(Q.name);return x9($,Q),Promise.resolve($)}loadSkin(J){let $=this.json.skins[J],Q=[];for(let Z=0,K=$.joints.length;Z<K;Z++)Q.push(this._loadNodeShallow($.joints[Z]));if($.inverseBindMatrices!==void 0)Q.push(this.getDependency("accessor",$.inverseBindMatrices));else Q.push(null);return Promise.all(Q).then(function(Z){let K=Z.pop(),W=Z,Y=[],X=[];for(let H=0,U=W.length;H<U;H++){let N=W[H];if(N){Y.push(N);let F=new QJ;if(K!==null)F.fromArray(K.array,H*16);X.push(F)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',$.joints[H])}return new HQ(Y,X)})}loadAnimation(J){let $=this.json,Q=this,Z=$.animations[J],K=Z.name?Z.name:"animation_"+J,W=[],Y=[],X=[],H=[],U=[];for(let N=0,F=Z.channels.length;N<F;N++){let G=Z.channels[N],E=Z.samplers[G.sampler],O=G.target,B=O.node,R=Z.parameters!==void 0?Z.parameters[E.input]:E.input,q=Z.parameters!==void 0?Z.parameters[E.output]:E.output;if(O.node===void 0)continue;W.push(this.getDependency("node",B)),Y.push(this.getDependency("accessor",R)),X.push(this.getDependency("accessor",q)),H.push(E),U.push(O)}return Promise.all([Promise.all(W),Promise.all(Y),Promise.all(X),Promise.all(H),Promise.all(U)]).then(function(N){let F=N[0],G=N[1],E=N[2],O=N[3],B=N[4],R=[];for(let M=0,k=F.length;M<k;M++){let V=F[M],L=G[M],P=E[M],A=O[M],D=B[M];if(V===void 0)continue;if(V.updateMatrix)V.updateMatrix();let I=Q._createAnimationTracks(V,L,P,A,D);if(I)for(let d=0;d<I.length;d++)R.push(I[d])}let q=new i6(K,void 0,R);return x9(q,Z),q})}createNodeMesh(J){let $=this.json,Q=this,Z=$.nodes[J];if(Z.mesh===void 0)return null;return Q.getDependency("mesh",Z.mesh).then(function(K){let W=Q._getNodeRef(Q.meshCache,Z.mesh,K);if(Z.weights!==void 0)W.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,H=Z.weights.length;X<H;X++)Y.morphTargetInfluences[X]=Z.weights[X]});return W})}loadNode(J){let $=this.json,Q=this,Z=$.nodes[J],K=Q._loadNodeShallow(J),W=[],Y=Z.children||[];for(let H=0,U=Y.length;H<U;H++)W.push(Q.getDependency("node",Y[H]));let X=Z.skin===void 0?Promise.resolve(null):Q.getDependency("skin",Z.skin);return Promise.all([K,Promise.all(W),X]).then(function(H){let U=H[0],N=H[1],F=H[2];if(F!==null)U.traverse(function(G){if(!G.isSkinnedMesh)return;G.bind(F,XR)});for(let G=0,E=N.length;G<E;G++)U.add(N[G]);if(U.userData.pivot!==void 0&&N.length>0){let G=U.userData.pivot,E=N[0];U.pivot=new _().fromArray(G),U.position.x-=G[0],U.position.y-=G[1],U.position.z-=G[2],E.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let $=this.json,Q=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let K=$.nodes[J],W=K.name?Z.createUniqueName(K.name):"",Y=[],X=Z._invokeOne(function(H){return H.createNodeMesh&&H.createNodeMesh(J)});if(X)Y.push(X);if(K.camera!==void 0)Y.push(Z.getDependency("camera",K.camera).then(function(H){return Z._getNodeRef(Z.cameraCache,K.camera,H)}));return Z._invokeAll(function(H){return H.createNodeAttachment&&H.createNodeAttachment(J)}).forEach(function(H){Y.push(H)}),this.nodeCache[J]=Promise.all(Y).then(function(H){let U;if(K.isBone===!0)U=new XQ;else if(H.length>1)U=new AJ;else if(H.length===1)U=H[0];else U=new SJ;if(U!==H[0])for(let N=0,F=H.length;N<F;N++)U.add(H[N]);if(K.name)U.userData.name=K.name,U.name=W;if(x9(U,K),K.extensions)U6(Q,U,K);if(K.matrix!==void 0){let N=new QJ;N.fromArray(K.matrix),U.applyMatrix4(N)}else{if(K.translation!==void 0)U.position.fromArray(K.translation);if(K.rotation!==void 0)U.quaternion.fromArray(K.rotation);if(K.scale!==void 0)U.scale.fromArray(K.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(K.mesh!==void 0&&Z.meshCache.refs[K.mesh]>1){let N=Z.associations.get(U);Z.associations.set(U,{...N})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let $=this.extensions,Q=this.json.scenes[J],Z=this,K=new AJ;if(Q.name)K.name=Z.createUniqueName(Q.name);if(x9(K,Q),Q.extensions)U6($,K,Q);let W=Q.nodes||[],Y=[];for(let X=0,H=W.length;X<H;X++)Y.push(Z.getDependency("node",W[X]));return Promise.all(Y).then(function(X){for(let U=0,N=X.length;U<N;U++){let F=X[U];if(F.parent!==null)K.add(q$(F));else K.add(F)}let H=(U)=>{let N=new Map;for(let[F,G]of Z.associations)if(F instanceof v8||F instanceof $8)N.set(F,G);return U.traverse((F)=>{let G=Z.associations.get(F);if(G!=null)N.set(F,G)}),N};return Z.associations=H(K),K})}_createAnimationTracks(J,$,Q,Z,K){let W=[],Y=J.name?J.name:J.uuid,X=[];function H(G){if(G.morphTargetInfluences)X.push(G.name?G.name:G.uuid)}if(j7[K.path]===j7.weights){if(H(J),J.isGroup)J.children.forEach(H)}else X.push(Y);let U;switch(j7[K.path]){case j7.weights:U=A7;break;case j7.rotation:U=T7;break;case j7.translation:case j7.scale:U=X6;break;default:switch(Q.itemSize){case 1:U=A7;break;case 2:case 3:default:U=X6;break}break}let N=Z.interpolation!==void 0?$R[Z.interpolation]:hZ,F=this._getArrayFromAccessor(Q);for(let G=0,E=X.length;G<E;G++){let O=new U(X[G]+"."+j7[K.path],$.array,F,N);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(O);W.push(O)}return W}_getArrayFromAccessor(J){let $=J.array;if(J.normalized){let Q=JX($.constructor),Z=new Float32Array($.length);for(let K=0,W=$.length;K<W;K++)Z[K]=$[K]*Q;$=Z}return $}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function(Q){return new(this instanceof T7?i5:QX)(this.times,this.values,this.getValueSize()/3,Q)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function HR(J,$,Q){let Z=$.attributes,K=new M8;if(Z.POSITION!==void 0){let X=Q.json.accessors[Z.POSITION],H=X.min,U=X.max;if(H!==void 0&&U!==void 0){if(K.set(new _(H[0],H[1],H[2]),new _(U[0],U[1],U[2])),X.normalized){let N=JX(O$[X.componentType]);K.min.multiplyScalar(N),K.max.multiplyScalar(N)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let W=$.targets;if(W!==void 0){let X=new _,H=new _;for(let U=0,N=W.length;U<N;U++){let F=W[U];if(F.POSITION!==void 0){let G=Q.json.accessors[F.POSITION],E=G.min,O=G.max;if(E!==void 0&&O!==void 0){if(H.setX(Math.max(Math.abs(E[0]),Math.abs(O[0]))),H.setY(Math.max(Math.abs(E[1]),Math.abs(O[1]))),H.setZ(Math.max(Math.abs(E[2]),Math.abs(O[2]))),G.normalized){let B=JX(O$[G.componentType]);H.multiplyScalar(B)}X.max(H)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}K.expandByVector(X)}J.boundingBox=K;let Y=new w8;K.getCenter(Y.center),Y.radius=K.min.distanceTo(K.max)/2,J.boundingSphere=Y}function I5(J,$,Q){let Z=$.attributes,K=[];function W(Y,X){return Q.getDependency("accessor",Y).then(function(H){J.setAttribute(X,H)})}for(let Y in Z){let X=eY[Y]||Y.toLowerCase();if(X in J.attributes)continue;K.push(W(Z[Y],X))}if($.indices!==void 0&&!J.index){let Y=Q.getDependency("accessor",$.indices).then(function(X){J.setIndex(X)});K.push(Y)}if(RJ.workingColorSpace!==d8&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${RJ.workingColorSpace}" not supported.`);return x9(J,$),HR(J,$,Q),Promise.all(K).then(function(){return $.targets!==void 0?ZR(J,$.targets,Q):J})}var a5={type:"change"},KX={type:"start"},t5={type:"end"},EK=new P7,r5=new e8,UR=Math.cos(70*y9.DEG2RAD),q8=new _,b8=2*Math.PI,dJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ZX=0.000001;class WX extends HK{constructor(J,$=null){super(J,$);if(this.state=dJ.NONE,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:B7.ROTATE,MIDDLE:B7.DOLLY,RIGHT:B7.PAN},this.touches={ONE:D7.ROTATE,TWO:D7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new _,this._lastQuaternion=new UJ,this._lastTargetPosition=new _,this._quat=new UJ().setFromUnitVectors(J.up,new _(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new VQ,this._sphericalDelta=new VQ,this._scale=1,this._panOffset=new _,this._rotateStart=new L0,this._rotateEnd=new L0,this._rotateDelta=new L0,this._panStart=new L0,this._panEnd=new L0,this._panDelta=new L0,this._dollyStart=new L0,this._dollyEnd=new L0,this._dollyDelta=new L0,this._dollyDirection=new _,this._mouse=new L0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=GR.bind(this),this._onPointerDown=NR.bind(this),this._onPointerUp=FR.bind(this),this._onContextMenu=BR.bind(this),this._onMouseWheel=OR.bind(this),this._onKeyDown=RR.bind(this),this._onTouchStart=LR.bind(this),this._onTouchMove=VR.bind(this),this._onMouseDown=ER.bind(this),this._onMouseMove=qR.bind(this),this._interceptControlDown=DR.bind(this),this._interceptControlUp=MR.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=dJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(a5),this.update(),this.state=dJ.NONE}pan(J,$){this._pan(J,$),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let $=this.object.position;if(q8.copy($).sub(this.target),q8.applyQuaternion(this._quat),this._spherical.setFromVector3(q8),this.autoRotate&&this.state===dJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let Q=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite(Q)&&isFinite(Z)){if(Q<-Math.PI)Q+=b8;else if(Q>Math.PI)Q-=b8;if(Z<-Math.PI)Z+=b8;else if(Z>Math.PI)Z-=b8;if(Q<=Z)this._spherical.theta=Math.max(Q,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(Q+Z)/2?Math.max(Q,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let K=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),K=W!=this._spherical.radius}if(q8.setFromSpherical(this._spherical),q8.applyQuaternion(this._quatInverse),$.copy(this.target).add(q8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let Y=q8.length();W=this._clampDistance(Y*this._scale);let X=Y-W;this.object.position.addScaledVector(this._dollyDirection,X),this.object.updateMatrixWorld(),K=!!X}else if(this.object.isOrthographicCamera){let Y=new _(this._mouse.x,this._mouse.y,0);Y.unproject(this.object);let X=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),K=X!==this.object.zoom;let H=new _(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(Y),this.object.updateMatrixWorld(),W=q8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(EK.origin.copy(this.object.position),EK.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(EK.direction))<UR)this.object.lookAt(this.target);else r5.setFromNormalAndCoplanarPoint(this.object.up,this.target),EK.intersectPlane(r5,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),K=!0}if(this._scale=1,this._performCursorZoom=!1,K||this._lastPosition.distanceToSquared(this.object.position)>ZX||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ZX||this._lastTargetPosition.distanceToSquared(this.target)>ZX)return this.dispatchEvent(a5),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return b8/60*this.autoRotateSpeed*J;else return b8/60/60*this.autoRotateSpeed}_getZoomScale(J){let $=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*$)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,$){q8.setFromMatrixColumn($,0),q8.multiplyScalar(-J),this._panOffset.add(q8)}_panUp(J,$){if(this.screenSpacePanning===!0)q8.setFromMatrixColumn($,1);else q8.setFromMatrixColumn($,0),q8.crossVectors(this.object.up,q8);q8.multiplyScalar(J),this._panOffset.add(q8)}_pan(J,$){let Q=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;q8.copy(Z).sub(this.target);let K=q8.length();K*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*K/Q.clientHeight,this.object.matrix),this._panUp(2*$*K/Q.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/Q.clientWidth,this.object.matrix),this._panUp($*(this.object.top-this.object.bottom)/this.object.zoom/Q.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,$){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let Q=this.domElement.getBoundingClientRect(),Z=J-Q.left,K=$-Q.top,W=Q.width,Y=Q.height;this._mouse.x=Z/W*2-1,this._mouse.y=-(K/Y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(b8*this._rotateDelta.x/$.clientHeight),this._rotateUp(b8*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let $=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(b8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);$=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-b8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);$=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(b8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);$=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-b8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);$=!0;break}if($)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._rotateStart.set(Q,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._panStart.set(Q,Z)}}_handleTouchStartDolly(J){let $=this._getSecondPointerPosition(J),Q=J.pageX-$.x,Z=J.pageY-$.y,K=Math.sqrt(Q*Q+Z*Z);this._dollyStart.set(0,K)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateEnd.set(Z,K)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(b8*this._rotateDelta.x/$.clientHeight),this._rotateUp(b8*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._panEnd.set(Q,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let $=this._getSecondPointerPosition(J),Q=J.pageX-$.x,Z=J.pageY-$.y,K=Math.sqrt(Q*Q+Z*Z);this._dollyEnd.set(0,K),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+$.x)*0.5,Y=(J.pageY+$.y)*0.5;this._updateZoomParameters(W,Y)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId){this._pointers.splice($,1);return}}_isTrackingPointer(J){for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId)return!0;return!1}_trackPointer(J){let $=this._pointerPositions[J.pointerId];if($===void 0)$=new L0,this._pointerPositions[J.pointerId]=$;$.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let $=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[$]}_customWheelEvent(J){let $=J.deltaMode,Q={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch($){case 1:Q.deltaY*=16;break;case 2:Q.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)Q.deltaY*=10;return Q}}function NR(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function GR(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function FR(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(t5),this.state=dJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let $=this._pointers[0],Q=this._pointerPositions[$];this._onTouchStart({pointerId:$,pageX:Q.x,pageY:Q.y});break}}function ER(J){let $;switch(J.button){case 0:$=this.mouseButtons.LEFT;break;case 1:$=this.mouseButtons.MIDDLE;break;case 2:$=this.mouseButtons.RIGHT;break;default:$=-1}switch($){case B7.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=dJ.DOLLY;break;case B7.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=dJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=dJ.ROTATE}break;case B7.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=dJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=dJ.PAN}break;default:this.state=dJ.NONE}if(this.state!==dJ.NONE)this.dispatchEvent(KX)}function qR(J){switch(this.state){case dJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case dJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case dJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function OR(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==dJ.NONE)return;J.preventDefault(),this.dispatchEvent(KX),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(t5)}function RR(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function LR(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case D7.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=dJ.TOUCH_ROTATE;break;case D7.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=dJ.TOUCH_PAN;break;default:this.state=dJ.NONE}break;case 2:switch(this.touches.TWO){case D7.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=dJ.TOUCH_DOLLY_PAN;break;case D7.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=dJ.TOUCH_DOLLY_ROTATE;break;default:this.state=dJ.NONE}break;default:this.state=dJ.NONE}if(this.state!==dJ.NONE)this.dispatchEvent(KX)}function VR(J){switch(this._trackPointer(J),this.state){case dJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case dJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case dJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case dJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=dJ.NONE}}function BR(J){if(this.enabled===!1)return;J.preventDefault()}function DR(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function MR(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var IQ=new _;function W9(J,$,Q,Z,K,W){let Y=2*Math.PI*K/4,X=Math.max(W-2*K,0),H=Math.PI/4;IQ.copy($),IQ[Z]=0,IQ.normalize();let U=0.5*Y/(Y+X),N=1-IQ.angleTo(J)/H;if(Math.sign(IQ[Q])===1)return N*U;else return X/(Y+X)+U+U*(1-N)}class S8 extends _J{constructor(J=1,$=1,Q=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,$/2,Q/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:$,depth:Q,segments:Z,radius:K},W===1)return;let Y=this.toNonIndexed();this.index=null,this.attributes.position=Y.attributes.position,this.attributes.normal=Y.attributes.normal,this.attributes.uv=Y.attributes.uv;let X=new _,H=new _,U=new _(J,$,Q).divideScalar(2).subScalar(K),N=this.attributes.position.array,F=this.attributes.normal.array,G=this.attributes.uv.array,E=N.length/6,O=new _,B=0.5/W;for(let R=0,q=0;R<N.length;R+=3,q+=2)switch(X.fromArray(N,R),H.copy(X),H.x-=Math.sign(H.x)*B,H.y-=Math.sign(H.y)*B,H.z-=Math.sign(H.z)*B,H.normalize(),N[R+0]=U.x*Math.sign(X.x)+H.x*K,N[R+1]=U.y*Math.sign(X.y)+H.y*K,N[R+2]=U.z*Math.sign(X.z)+H.z*K,F[R+0]=H.x,F[R+1]=H.y,F[R+2]=H.z,Math.floor(R/E)){case 0:O.set(1,0,0),G[q+0]=W9(O,H,"z","y",K,Q),G[q+1]=1-W9(O,H,"y","z",K,$);break;case 1:O.set(-1,0,0),G[q+0]=1-W9(O,H,"z","y",K,Q),G[q+1]=1-W9(O,H,"y","z",K,$);break;case 2:O.set(0,1,0),G[q+0]=1-W9(O,H,"x","z",K,J),G[q+1]=W9(O,H,"z","x",K,Q);break;case 3:O.set(0,-1,0),G[q+0]=1-W9(O,H,"x","z",K,J),G[q+1]=1-W9(O,H,"z","x",K,Q);break;case 4:O.set(0,0,1),G[q+0]=1-W9(O,H,"x","y",K,J),G[q+1]=1-W9(O,H,"y","x",K,$);break;case 5:O.set(0,0,-1),G[q+0]=W9(O,H,"x","y",K,J),G[q+1]=1-W9(O,H,"y","x",K,$);break}}static fromJSON(J){return new S8(J.width,J.height,J.depth,J.segments,J.radius)}}var k0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0033,pipColumnSpacing:0.0072,pipRowSpacing:0.0076,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25,boardLimit:0.27},k9=[[0,k0.seatDistance,Math.PI],[k0.seatDistance,0,-Math.PI/2],[0,-k0.seatDistance,0],[-k0.seatDistance,0,Math.PI/2]];function XX(J){let $=J.vertical?k0.tileWidth:k0.tileLength,Q=J.vertical?k0.tileLength:k0.tileWidth;return{left:J.x-$/2,right:J.x+$/2,top:J.z-Q/2,bottom:J.z+Q/2}}var kR=k0.boardLimit,CR=k0.feltWidth/2-0.022;function HX(J,$,Q=kR){let Z=XX(J);if(Math.max(Math.abs(Z.left),Math.abs(Z.right),Math.abs(Z.top),Math.abs(Z.bottom))>Q+0.00000001)return!1;return $.every((K)=>{let W=XX(K);return Z.right<=W.left-0.0015||Z.left>=W.right+0.0015||Z.bottom<=W.top-0.0015||Z.top>=W.bottom+0.0015})}function e5(J,$,Q){let{tileLength:Z,tileWidth:K,tileGap:W}=k0,Y=$.x===$.y,X=(Y?K:Z)/2,H=J.tile,U=[],N=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let F=0;F<N.length;F++){let[G,E]=N[F],O=F!==0,B=(H.isDouble?K:Z)/2,R=(H.isDouble?Z:K)/2,q=H.x+J.dx*(O?H.isDouble?0:Z/4:B),M=H.z+J.dz*(O?H.isDouble?0:Z/4:B),k=O?[0,Z/8,-Z/8]:[0];for(let V of k){let L=Math.atan2(-E,G)+(Q==="left"?Math.PI:0)+(Y?Math.PI/2:0);U.push({id:$.id,x:q+G*((O?R:0)+W+X)+J.dx*V,z:M+E*((O?R:0)+W+X)+J.dz*V,yaw:L,vertical:Math.abs(Math.sin(L))>0.5,isDouble:Y,dx:G,dz:E,side:Q})}}return U}function YX(J,$,Q,Z){let K={id:"future",x:0,y:Z?0:1};return e5({tile:J,dx:J.dx,dz:J.dz},K,Q).some((W)=>HX(W,$))}function JN(J,$=[]){return QN(J,$).placements}function $N(J,$=[]){let Q=QN(J,$);if(!Q.ends)return[];return["left","right"].map((Z)=>{let K=Q.ends[Z],W=K.tile,Y=XX(W),X=Math.abs(K.dx)*(Y.right-Y.left)/2+Math.abs(K.dz)*(Y.bottom-Y.top)/2,H=X+0.013;return{x:W.x+K.dx*H,z:W.z+K.dz*H,dx:K.dx,dz:K.dz}})}function QN(J,$){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return{placements:[],ends:null};let Q=new Map(J.map((G)=>[G.id,G])),Z=$.filter((G)=>G.type==="play"&&G.tile&&Q.has(G.tile)),K=Q.get(Z[0]?.tile||"")||J[0],W=J.findIndex((G)=>G.id===K.id),Y=K.x===K.y,X={id:K.id,x:0,z:0,yaw:Y?Math.PI/2:0,vertical:Y,isDouble:Y,dx:1,dz:0,side:"root"},H=[X],U=new Map([[X.id,X]]),N={left:{tile:X,dx:-1,dz:0},right:{tile:X,dx:1,dz:0}},F=Z.length===J.length?Z.slice(1):[...J.slice(0,W).reverse().map((G)=>({type:"play",tile:G.id,side:"left"})),...J.slice(W+1).map((G)=>({type:"play",tile:G.id,side:"right"}))];for(let G of F){let E=Q.get(G.tile);if(U.has(E.id))continue;let O=G.side==="left"?"left":G.side==="right"?"right":J.findIndex((M)=>M.id===E.id)<W?"left":"right",B=e5(N[O],E,O),R=B.filter((M)=>HX(M,H));if(!R.length)R=B.filter((M)=>HX(M,H,CR));let q=R.find((M)=>YX(M,[...H,M],O,!1)&&YX(M,[...H,M],O,!0))||R.find((M)=>YX(M,[...H,M],O,!1))||R[0];if(!q)throw Error(`No safe placement for ${E.id} after ${H.length} tiles`);H.push(q),U.set(E.id,q),N[O]={tile:q,dx:q.dx,dz:q.dz}}return{placements:J.map((G)=>U.get(G.id)),ends:N}}function ZN(J,$,Q=!1){if(Q)return{breath:0,headYaw:0,headNod:0};let Z=J*2.173+0.43;return{breath:0.0055*Math.sin($*(0.78+J*0.093)+Z),headYaw:0.087*Math.sin($*(0.213+J*0.037)+Z)+0.028*Math.sin($*(0.487+J*0.029)+Z*1.91),headNod:0.009*Math.sin($*(0.267+J*0.035)+Z*0.71)}}var KN=new _(1,0,0),I9=new _(0,1,0),UX=new UJ;function PK(J){let $=[];return J.traverse((Q)=>{if(Q.isBone)$.push({bone:Q,position:Q.position.clone(),quaternion:Q.quaternion.clone(),scale:Q.scale.clone()})}),$}var g9=new _,P9=new _,p9=new _,N6=new _,X7=new _,Y9=new _,G6=new _,F6=new _,q6=new UJ,z9=new UJ,kK=new UJ,DK=new UJ,SQ=(J)=>Math.min(1,Math.max(-1,J)),O6=(J,$,Q)=>Math.min(Q,Math.max($,J)),g8=(J)=>J*J*(3-2*J);function W8(J,$){J.getWorldQuaternion(z9),J.parent.getWorldQuaternion(kK),J.quaternion.copy(kK.invert()).multiply($).multiply(z9),J.updateMatrixWorld(!0)}var j8=new _,H9=new _;function PR(J){J.holder.getWorldQuaternion(DK),j8.set(1,0,0).applyQuaternion(DK),H9.set(0,0,1).applyQuaternion(DK)}function EX(J,$,Q,Z,K){return K.set($,Q,Z).applyMatrix4(J.holder.matrixWorld)}function NX(J,$,Q,Z){return Z.set(J,$,Q).applyQuaternion(DK).normalize()}var IR=0.965;function zR(J,$,Q){let{brazo:Z,antebrazo:K,mano:W}=J;if(!Z||!K||!W||!Z.parent||!K.parent)return;Z.getWorldPosition(g9),K.getWorldPosition(P9),W.getWorldPosition(p9);let Y=g9.distanceTo(P9),X=P9.distanceTo(p9);if(Y<0.00001||X<0.00001)return;let H=O6(g9.distanceTo($),Math.abs(Y-X)+0.002,(Y+X)*IR);if(X7.subVectors(P9,g9),Y9.subVectors(p9,P9),G6.crossVectors(X7,Y9),G6.lengthSq()<0.0000000001)G6.copy(j8);else G6.normalize();let U=Math.acos(SQ((Y*Y+X*X-g9.distanceToSquared(p9))/(2*Y*X))),F=Math.acos(SQ((Y*Y+X*X-H*H)/(2*Y*X)))-U;if(W8(K,q6.setFromAxisAngle(G6,F)),W.getWorldPosition(p9),Math.abs(g9.distanceTo(p9)-H)>0.001)W8(K,q6.setFromAxisAngle(G6,-2*F)),W.getWorldPosition(p9);if(X7.subVectors(p9,g9).normalize(),Y9.subVectors($,g9),Y9.lengthSq()<0.0000000001)return;if(Y9.normalize(),W8(Z,q6.setFromUnitVectors(X7,Y9)),!Q)return;if(K.getWorldPosition(P9),F6.subVectors(P9,g9),F6.addScaledVector(Y9,-F6.dot(Y9)),N6.subVectors(Q,g9),N6.addScaledVector(Y9,-N6.dot(Y9)),F6.lengthSq()<0.0000000001||N6.lengthSq()<0.0000000001)return;F6.normalize(),N6.normalize();let G=Math.atan2(G6.crossVectors(F6,N6).dot(Y9),SQ(F6.dot(N6)));W8(Z,q6.setFromAxisAngle(Y9,G))}var x8=new _,V$=new _,zQ=new _,AR=new QJ,GX=new UJ,AQ=new UJ;function TR(J,$,Q){let{antebrazo:Z,mano:K}=J;if(!Z||!K||!K.parent)return;if(x8.copy($).normalize(),zQ.crossVectors(x8,Q),zQ.lengthSq()<0.00000001)return;zQ.normalize(),V$.crossVectors(zQ,x8),GX.setFromRotationMatrix(AR.makeBasis(zQ,x8,V$)),Z.getWorldPosition(P9),K.getWorldPosition(p9),X7.subVectors(p9,P9).normalize(),K.getWorldQuaternion(z9),AQ.copy(GX).multiply(z9.invert());let W=AQ.x*X7.x+AQ.y*X7.y+AQ.z*X7.z,Y=2*Math.atan2(W,AQ.w);if(Number.isFinite(Y))W8(Z,q6.setFromAxisAngle(X7,O6(Y*0.5,-1.2,1.2)));K.parent.getWorldQuaternion(kK),K.quaternion.copy(kK.invert()).multiply(GX),K.updateMatrixWorld(!0)}var _R=new _;function wR(J,$,Q){let Z=$.lado==="Left"?1:-1,K=J.index*1.7,W=k0.seatDistance-k0.tableWidth/2;return EX(J,Z*(0.225+Math.sin(K)*0.01)+Math.sin(Q*0.23+K)*0.004,k0.surfaceY+0.026,W+(Z>0?0.035:0.06)+Math.cos(K*1.3)*0.012+Math.sin(Q*0.17+K*2)*0.004,_R)}var SR=new _,R$=new _,MK=new _,qK=new _,jR=0.045,yR=0.05,vR=0.12,fR=0.14,bR=0.45,hR=4;function WN(J,$,Q){return qK.subVectors($,J.holder.getWorldPosition(MK)),qK.y=0,qK.normalize(),Q.copy($).addScaledVector(qK,-yR).setY($.y+jR)}function xR(J,$,Q){let Z=J.jugada;if(!Z)return null;if($-Z.t0>hR)return J.jugada=null,null;let K=Z.anim;if(K.elapsed<K.duration)return WN(J,Z.obj.position,R$),R$.lerpVectors(Q,R$,g8(O6(K.elapsed/vR,0,1)));if(Z.aterrizo==null)Z.aterrizo=$;let W=$-Z.aterrizo;WN(J,Z.hasta,R$);let Y=K.golpe?0.7:fR;if(W<Y)return R$;let X=(W-Y)/bR;if(X>=1)return J.jugada=null,null;return R$.lerp(Q,g8(X))}var NJ=[1,2.2,3.5,4.7,5.6],YN=-1e9;function gR(J,$,Q){let Z=J.bebida;if(!Z)return null;if(J.trago){let W=J.trago.fijo??$-J.trago.t0;if(W<0||W>=NJ[4]||J.jugada)return J.trago=null,FN(Z),J.sed=$+90+Math.random()*150,null;return W}if(!Q||!Q.dt)return null;if(J.sed==null)return J.sed=$+20+Math.random()*100,null;if($<J.sed||$-YN<20)return null;let K=J.index;if(J.jugada||Q.jugando&&Q.turno===K||Q.habla.has(K)||Q.fin&&$-Q.fin.t<6)return J.sed=$+3+Math.random()*8,null;return YN=$,J.trago={t0:$},0}function FN(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var C9=new _,E6=new _,L$=new _,TQ=new _,XN=new _;function HN(J,$,Q,Z){let K=J.bebida;if(L$.copy(H9).addScaledVector(I9,0.25).normalize(),TQ.copy(H9).multiplyScalar(0.55).addScaledVector(I9,0.8).normalize(),E6.copy(K.home),E6.y+=K.alto,E6.addScaledVector(j8,-(K.radio+0.015)).addScaledVector(L$,-0.03),J.bocaMundo)J.bocaMundo(C9),C9.addScaledVector(H9,0.006);else J.front.getWorldPosition(C9),C9.y-=0.075,C9.addScaledVector(H9,0.012);let W=K.inclina;XN.copy(I9).multiplyScalar(Math.cos(W)).addScaledVector(H9,-Math.sin(W)),C9.addScaledVector(XN,-K.boca).addScaledVector(j8,-(K.radio+0.015)).addScaledVector(TQ,-0.03);let Y=J.trago;if(Y){if($<NJ[2])(Y.boca??=new _).copy(C9);else if(Y.boca)C9.copy(Y.boca)}let X;if($<NJ[0])OK(Q,E6,0.045,0.5,g8($/NJ[0]),Z),X=L$;else if($<NJ[1]){let H=g8(($-NJ[0])/(NJ[1]-NJ[0]));OK(E6,C9,0.1,0.25,H,Z),X=L$.lerp(TQ,H).normalize()}else if($<NJ[2])Z.copy(C9),X=TQ;else if($<NJ[3]){let H=g8(($-NJ[2])/(NJ[3]-NJ[2]));OK(E6,C9,0.1,0.25,1-H,Z),X=TQ.lerp(L$,H).normalize()}else OK(Q,E6,0.045,0.5,1-g8(($-NJ[3])/(NJ[4]-NJ[3])),Z),X=L$;return X}var _Q=new _;function OK(J,$,Q,Z,K,W){_Q.lerpVectors(J,$,Z),_Q.y=Math.max(J.y,$.y*Z+J.y*(1-Z))+Q;let Y=1-K;return W.set(Y*Y*J.x+2*Y*K*_Q.x+K*K*$.x,Y*Y*J.y+2*Y*K*_Q.y+K*K*$.y,Y*Y*J.z+2*Y*K*_Q.z+K*K*$.z)}function pR(J){return J<NJ[0]?g8(Math.min(1,J/(NJ[0]*0.85))):J<NJ[3]?1:1-g8(Math.min(1,(J-NJ[3])/((NJ[4]-NJ[3])*0.85)))}var UN=new _,NN=new _,GN=new _;function mR(J,$){let Q=J.bebida,Z=J.brazos[1].mano;if($<NJ[0]||$>=NJ[3]){FN(Q);return}Z.getWorldQuaternion(z9),Z.getWorldPosition(CK),UN.set(0,0,1).applyQuaternion(z9),NN.set(0,1,0).applyQuaternion(z9);let K=$<NJ[1]?g8(($-NJ[0])/(NJ[1]-NJ[0])):$<NJ[2]?1:1-g8(($-NJ[2])/(NJ[3]-NJ[2]));Q.group.quaternion.setFromAxisAngle(j8,-Q.inclina*K),GN.set(0,1,0).applyQuaternion(Q.group.quaternion),Q.group.position.copy(CK).addScaledVector(UN,Q.radio+0.015).addScaledVector(NN,0.03).addScaledVector(GN,-Q.alto);let W=Math.min(1,($-NJ[0])/0.2,(NJ[3]-$)/0.2);if(W<1){let Y=g8(Math.max(0,W));Q.group.position.lerpVectors(Q.home,Q.group.position,Y),Q.group.quaternion.slerpQuaternions(lR.identity(),Q.group.quaternion,Y)}}var lR=new UJ;function uR(J,$,Q){let Z=J.cara;if(!Z)return 0;if(J.proxParpadeo==null)J.proxParpadeo=$+1+Math.random()*4;if($>=J.proxParpadeo)J.parpadeoT0=$,J.proxParpadeo=$+(Math.random()<0.15?0.32:2+Math.random()*4);let K=$-(J.parpadeoT0??-9),W=K<0?0:K<0.06?K/0.06:K<0.09?1:K<0.16?1-(K-0.09)/0.07:0;if(J.caraFija){let U=J.caraFija,N=Z.mesh.morphTargetInfluences;if(N)N[Z.iP]=U.p*0.85,N[Z.iS]=U.s;return J.parpadeo=U.p,U.p}let Y=J.index,X=0;if(Q?.fin&&Q.fin.team!=null&&$-Q.fin.t<5&&$>=Q.fin.t)X=Y%2===Q.fin.team?0.95:-0.7;else if(Q?.habla?.has(Y))X=Q.hablaTipo?.get(Y)==="win"?0.85:0.2;else{if(J.casual==null)J.casual=$+8+Math.random()*30;if($>J.casual+2.5)J.casual=$+15+Math.random()*45;if($>=J.casual)X=0.45}J.sonrisa=(J.sonrisa??0)+(X-(J.sonrisa??0))*(1-Math.exp(-(Q?.dt||0.016)*3.5));let H=Z.mesh.morphTargetInfluences;if(H)H[Z.iP]=W*0.85,H[Z.iS]=J.sonrisa;return J.parpadeo=W,W}function dR(J,$){let Q=J.index,Z=0.23+Q%4*0.012,K=$*Z*Math.PI*2+Q*1.9,W=Math.sin(K);return{b:W>0?W:W*0.7,balanceo:Math.sin($*0.11+Q*2.3)*0.022+Math.sin($*0.29+Q)*0.008,ladeo:Math.sin($*0.07+Q*1.3)*0.014}}var FX=new _,RK=new _,X9=new _,y7=new _,A9=new _,h8=new UJ,LK=(J)=>{let $=Math.sin(J*127.1+311.7)*43758.5453;return $-Math.floor($)};function cR(J,$,Q,Z){let K=J.index;if(K>=4||!Q)return Q?.foco&&$-Q.foco.t<2.5?Z.copy(Q.foco.p):Z.set(0,k0.surfaceY,0);if(Q.fin&&$-Q.fin.t<5){if(Q.fin.team!=null&&K%2===Q.fin.team&&Q.cabezas[(K+2)%4])return Z.copy(Q.cabezas[(K+2)%4]);return EX(J,0,k0.surfaceY,k0.seatDistance-k0.rackRadius,Z)}if(J.trago&&J.bebida){let X=J.trago.fijo??$-J.trago.t0;if(X<NJ[0]+0.1||X>NJ[2]+0.5&&X<NJ[3]+0.1)return Z.copy(J.bebida.home);if(X<=3.4)return J.head.getWorldPosition(Z),Z.addScaledVector(H9,1).addScaledVector(I9,-0.15)}{let X=Q.saludo;if(X&&(X.seat===K||X.e<(X.seat==null?3:1.6)))return Z.copy(X.p)}if(Q.foco&&$-Q.foco.t<1.4)return Z.copy(Q.foco.p);for(let X of Q.habla)if(X!==K&&Q.cabezas[X])return Z.copy(Q.cabezas[X]);if(Q.jugando&&Q.turno===K){let X=Math.floor($/1.3);return EX(J,(LK(X+K*9)-0.5)*0.12,k0.surfaceY+0.02,k0.seatDistance-k0.rackRadius+0.02,Z)}let W=Math.floor(($+K*1.37)/(2.2+K*0.35)),Y=LK(W*4+K);if(Q.jugando&&Y<0.45&&Q.cabezas[Q.turno]&&Q.turno!==K)return Z.copy(Q.cabezas[Q.turno]);if(Y<0.62&&Q.cabezas[(K+2)%4])return Z.copy(Q.cabezas[(K+2)%4]);if(!Q.jugando&&Y<0.85&&Q.cabezas[(K+1+W%2*2)%4])return Z.copy(Q.cabezas[(K+1+W%2*2)%4]);return Z.set((LK(W+7)-0.5)*0.2,k0.surfaceY,(LK(W+3)-0.5)*0.2)}function nR(J,$,Q){let{head:Z,neck:K,front:W}=J;if(!Z||!W)return;if(cR(J,$,Q,FX),!J.mirada||!Q?.dt)J.mirada=(J.mirada||new _).copy(FX);else J.mirada.lerp(FX,1-Math.exp(-Q.dt*5.5));for(let[Y,X]of[[K,0.4],[Z,1]]){if(!Y)continue;if(Z.getWorldPosition(RK),W.getWorldPosition(X9),X9.sub(RK),X9.lengthSq()<0.0000000001)return;if(X9.normalize(),y7.subVectors(J.mirada,RK),y7.lengthSq()<0.00000001)return;y7.normalize();let H=O6(Math.atan2(X9.z*y7.x-X9.x*y7.z,X9.x*y7.x+X9.z*y7.z),-1.25,1.25)*X;if(W8(Y,q6.setFromAxisAngle(I9,H)),W.getWorldPosition(X9),X9.sub(RK).normalize(),A9.crossVectors(X9,I9),A9.lengthSq()<0.00000001)continue;A9.normalize();let U=O6(Math.asin(SQ(y7.y))-Math.asin(SQ(X9.y)),-0.75,0.55)*X;W8(Y,q6.setFromAxisAngle(A9,U))}}var sR=0.23,iR=[["lomo",0.4],["spine",0.34],["chest",0.26]],PD=new UJ;function oR(J,$,Q=0){if(!J.spine||!J.spine.parent)return;if(A9.copy(j8),J.hips&&J.lomo)for(let[Z,K]of iR){let W=J[Z];if(!W)continue;W8(W,h8.setFromAxisAngle(A9,$*K))}else W8(J.spine,h8.setFromAxisAngle(A9,$));if(Q)W8(J.spine,h8.setFromAxisAngle(I9,Q))}var VK=new _,BK=new _,wQ=new _,CK=new _;function IK(J,$,Q=!1,Z=null){for(let O of J.pose)O.bone.position.copy(O.position),O.bone.quaternion.copy(O.quaternion),O.bone.scale.copy(O.scale);J.holder.updateMatrixWorld(!0),PR(J);let K=ZN(J.index,$,Q);if(J.spine)J.spine.quaternion.multiply(UX.setFromAxisAngle(KN,K.breath));let W=!Q,Y=W?dR(J,$):{b:0,balanceo:0,ladeo:0},X=J.index,H=X<4&&J.brazos,U=0,N=0;if(H&&Z?.fin&&Z.fin.team!=null){let O=$-Z.fin.t;if(O>=0&&O<5)N=Math.sin(Math.min(1,O/0.5)*Math.PI/2)*(O>4?5-O:1),U+=(X%2===Z.fin.team?-0.1:0.07)*N}if(H&&Z?.jugando&&Z.turno===X)U+=0.04;let F=H&&W&&J.front?gR(J,$,Z):null,G=[];if(H)for(let O of J.brazos){let B=SR.copy(wR(J,O,$)),R=O.lado==="Right"?xR(J,$,B):null,q=!!R,M=null;if(!R&&F!=null&&O.lado==="Right")R=MK.set(0,0,0),M=HN(J,F,B,R).clone();if(R=(R||B).clone(),!q&&W&&Z?.habla?.has(X)&&O.lado==="Left")J.gesto=Math.min(1,(J.gesto||0)+(Z.dt||0)*3);else if(O.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(Z?.dt||1)*2);if(O.lado==="Left"&&J.gesto>0){let k=g8(J.gesto);R.addScaledVector(H9,0.06*k).addScaledVector(j8,-0.07*k),R.y+=0.07*k+Math.sin($*5.2)*0.012*k}if(O.lado==="Right"&&!q&&N&&X%2===Z.fin.team){let k=$-Z.fin.t;if(k<1.1)R.y+=Math.max(0,Math.sin(Math.min(1,k/0.9)*Math.PI))*0.13}G.push({brazo:O,o:R,jugando:q,dedos:M,reposo:B.clone()})}let E=0;if(H){let O=G.find((B)=>B.jugando);if(O&&O.brazo.brazo){J.holder.worldToLocal(wQ.copy(O.o));let B=Math.hypot(wQ.x,wQ.z-0.12);U+=O6((B-0.42)/0.55,0,0.34),E=O6(Math.atan2(wQ.x,wQ.z)*0.3,-0.3,0.3)}}if(oR(J,sR*(J.brazos?1:0.6)+U,E),F!=null){let O=(R,q)=>Math.max(0,1-Math.abs(F-R)/q),B=g8(Math.max(O(NJ[0],0.9),O(NJ[3],0.9)));if(J.spine)W8(J.spine,h8.setFromAxisAngle(H9,0.16*B))}if(W){if(J.spine)W8(J.spine,h8.setFromAxisAngle(I9,Y.balanceo));if(J.spine)W8(J.spine,h8.setFromAxisAngle(H9,Y.ladeo));if(J.chest)W8(J.chest,h8.setFromAxisAngle(j8,-0.018*Y.b));if(J.hombros){for(let[O,B]of J.hombros)if(B)W8(B,h8.setFromAxisAngle(H9,O*0.03*(Y.b+0.3)))}}if(nR(J,$,Z),uR(J,$,Z),J.head)J.head.quaternion.multiply(UX.setFromAxisAngle(I9,K.headYaw*0.5)),J.head.quaternion.multiply(UX.setFromAxisAngle(KN,K.headNod)),J.head.updateMatrixWorld(!0);if(W&&J.head){if(Z?.habla?.has(X)){let O=0.035*(0.6+0.4*Math.sin($*1.7));W8(J.head,h8.setFromAxisAngle(j8,Math.sin($*6.1)*O*0.5+Math.sin($*3.3)*O*0.5))}if(N&&X%2!==Z.fin.team){let O=$-Z.fin.t;if(O>0.6&&O<2.6)W8(J.head,h8.setFromAxisAngle(I9,Math.sin((O-0.6)*Math.PI*2.4)*0.16*(2.6-O)/2))}}if(F!=null&&F>NJ[1]-0.2&&F<NJ[2]+0.2&&J.head){let O=Math.sin(Math.min(1,(F-NJ[1]+0.2)/(NJ[2]-NJ[1]+0.4))*Math.PI);W8(J.head,h8.setFromAxisAngle(j8,-0.3*O))}if(W&&J.reaction&&J.head){let O=$-J.reaction.time;if(O>=0&&O<1.2){let B=Math.sin(O/1.2*Math.PI)*0.035;W8(J.head,h8.setFromAxisAngle(j8,B))}}for(let{brazo:O,o:B,jugando:R,dedos:q,reposo:M}of G){if(q)q.copy(HN(J,F,M,B));let k=O.lado==="Left"?1:-1;O.brazo.getWorldPosition(VK);let V=q?pR(F):0;if(V>0)VK.add(NX(k*0.32,-0.75,-0.6,BK).lerp(NX(k*0.45,-0.85,0.25,MK),V));else VK.add(NX(k*(R?0.55:0.32),-0.75,R?-0.15:-0.6,BK));if(zR(O,B,VK),O.antebrazo.getWorldPosition(P9),O.mano.getWorldPosition(CK),x8.subVectors(CK,P9),x8.y=0,x8.lengthSq()<0.00000001)x8.copy(H9);if(x8.normalize(),x8.addScaledVector(j8,-k*(R?0:0.12)).normalize(),x8.y=R?-0.55:-0.3,V$.set(0,-1,0).addScaledVector(j8,-k*0.22),O.lado==="Left"&&J.gesto>0){let L=g8(J.gesto);V$.lerp(BK.copy(j8).multiplyScalar(-1).add(MK.set(0,0.4,0)),L*0.8),x8.y+=0.4*L}if(q)x8.lerp(q,V).normalize(),V$.lerp(BK.copy(j8).addScaledVector(I9,-0.15),V).normalize();if(TR(O,x8,V$),q)mR(J,F);if(W&&!R&&!q&&O.lado==="Right"&&J.toque&&$-J.toque.t0<0.7){let L=$-J.toque.t0;O.mano.getWorldQuaternion(z9),A9.set(1,0,0).applyQuaternion(z9),W8(O.mano,h8.setFromAxisAngle(A9,-0.5*Math.max(0,Math.sin(L/0.7*Math.PI*4))))}else if(W&&!R&&!q&&O.lado==="Right"&&!(Z?.turno===X&&Z?.jugando)){let L=4.6+X*0.9,P=($+X*1.3)%L;if(P<0.55)O.mano.getWorldQuaternion(z9),A9.set(1,0,0).applyQuaternion(z9),W8(O.mano,h8.setFromAxisAngle(A9,-0.22*Math.max(0,Math.sin(P/0.55*Math.PI*4))))}}J.holder.updateMatrixWorld(!0)}function EN({scene:J,texture:$,mat:Q,box:Z,cylinder:K,random:W,teal:Y,wood:X,storeSign:H}){let U=$((L,P,A)=>{L.fillStyle="#e0d3b4",L.fillRect(0,0,P,A);let D=L.createLinearGradient(0,0,0,A);D.addColorStop(0,"#cac09b18"),D.addColorStop(0.7,"#14382d00"),D.addColorStop(1,"#162d2566"),L.fillStyle=D,L.fillRect(0,0,P,A);for(let I=0;I<7000;I++)L.fillStyle=I%3?"#b4ad8618":"#142d2924",L.fillRect(W()*P,W()*A,1+W()*3,1+W()*2);for(let I=0;I<70;I++){let d=W()*P,f=I<50?A*(0.72+W()*0.28):W()*A,n=5+W()*14;L.fillStyle=I%3?"rgba(160,145,112,.35)":"rgba(120,110,90,.25)",L.beginPath();for(let X0=0;X0<8;X0++){let v=X0*Math.PI/4,y=n*(0.6+W()*0.5);L.lineTo(d+Math.cos(v)*y,f+Math.sin(v)*y*0.65)}L.fill()}L.strokeStyle="#1b372e24";for(let I=48;I<A;I+=57)L.beginPath(),L.moveTo(0,I),L.lineTo(P,I),L.stroke()},1024,1024);Y.map=U,Y.color.set("#f2ecde"),Y.needsUpdate=!0,X.color.set("#bca98a"),X.roughness=0.84;let N=()=>{H.material.map=$((L,P,A)=>{L.fillStyle="#efe3c4",L.fillRect(0,0,P,A);for(let d=0;d<2600;d++)L.fillStyle=d%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",L.fillRect(W()*P,W()*A,2+W()*14,1+W()*2);let D=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia",I=D==="Shrikhand"?A*0.66:A*0.56;L.font=`${I}px ${D}`,L.textAlign="center",L.textBaseline="middle",L.fillStyle="#c8402f",L.fillText("Colmado La Esquina",P/2+I*0.06,A/2+I*0.1),L.fillStyle="#24518a",L.fillText("Colmado La Esquina",P/2,A/2+I*0.04),L.strokeStyle="#3d938e",L.lineWidth=12,L.strokeRect(6,6,P-12,A-12);for(let d=0;d<1400;d++)L.fillStyle="rgba(239,227,196,.35)",L.fillRect(W()*P,W()*A,1+W()*3,1+W()*2)},2048,162),H.material.emissiveMap=H.material.map,H.material.needsUpdate=!0};H.material=new o0({roughness:0.9,emissive:"#ffffff",emissiveIntensity:0.1}),N(),document.fonts?.load?.("64px Shrikhand").then(N).catch(()=>{});for(let[L,P]of[[-2.7,-3.5],[2.4,-3.3]])Z(L,0.18,P,0.51,0.35,0.4,"#897052"),Z(L+0.05,0.47,P-0.04,0.4,0.23,0.32,"#a68c62");let F=(L,P,A)=>{let D=document.createElement("canvas");D.width=L,D.height=P;let I=new c8(D);I.colorSpace=Q8,I.anisotropy=4;let d=()=>{let f=D.getContext("2d"),n=document.fonts?.check?.("64px Shrikhand"),X0=document.fonts?.check?.('700 40px "DM Sans"')?'"DM Sans",':"";f.fillStyle="#233a2d",f.fillRect(0,0,L,P);for(let v=0;v<70;v++)f.fillStyle=`rgba(225,225,195,${0.015+W()*0.03})`,f.beginPath(),f.ellipse(W()*L,W()*P,L*(0.04+W()*0.14),P*(0.015+W()*0.045),W()*3,0,Math.PI*2),f.fill();f.textAlign="center",f.textBaseline="middle",f.lineCap="round";for(let[v,y,u,b,r]of A){if(v==="—"){f.strokeStyle="rgba(225,225,195,.45)",f.lineWidth=6,f.beginPath(),f.moveTo(L*0.17,y+3),f.quadraticCurveTo(L/2,y-5,L*0.83,y+1),f.stroke();continue}f.font=b==="titulo"?n?`${u}px Shrikhand`:`bold ${u*0.95}px Georgia`:`${b} ${u}px ${X0}sans-serif`;let m=f.measureText(v).width,e=L*0.84;if(f.save(),f.translate(L/2,y),m>e)f.scale(e/m,1);f.fillStyle=r;for(let Y0=0;Y0<3;Y0++)f.globalAlpha=Y0?0.4:0.75,f.fillText(v,(W()-0.5)*3,(W()-0.5)*3);f.restore()}for(let v=0;v<L*P/40;v++)f.fillStyle="rgba(35,58,45,.5)",f.fillRect(W()*L,W()*P,1+W()*2,1+W());f.strokeStyle="#9c8c62",f.lineWidth=L*0.04,f.strokeRect(L*0.02,L*0.02,L-L*0.04,P-L*0.04),f.strokeStyle="rgba(60,40,20,.35)",f.lineWidth=4,f.strokeRect(L*0.04,L*0.04,L-L*0.08,P-L*0.08),I.needsUpdate=!0};return d(),Promise.all([document.fonts?.load?.("64px Shrikhand"),document.fonts?.load?.('700 40px "DM Sans"')]).then(d).catch(()=>{}),new o0({roughness:1,map:I,emissive:"#ffffff",emissiveMap:I,emissiveIntensity:0.06})},G="#ece7cc",E="#e9b35a",O="#a9d3dd";{let L=new I0(new VJ(0.72,0.69),F(768,736,[["HOY HAY",110,74,"titulo",G],["CAFÉ",262,78,800,G],["HIELO · PAN",388,66,800,"#dcd9b8"],["—",478],["REFRESCOS",572,60,700,O]]));L.position.set(-3.43,1.6,-2.33),L.rotation.z=0.025,J.add(L),Z(-3.43,1.245,-2.315,0.66,0.018,0.05,"#8a7a55"),Z(-3.28,1.262,-2.31,0.06,0.016,0.016,"#efeadb")}{let L=document.documentElement.lang==="en",P=new AJ,A=Q("#6b4a2e",0.8);P.position.set(-2,0,-2.1),P.rotation.y=0.5,J.add(P);let d=new I0(new VJ(0.56,0.72),F(560,720,[[L?"COMING":"YA",96,92,"titulo",E],[L?"SOON":"VIENE",206,92,"titulo",E],["—",282],[L?"1 vs 1":"1 contra 1",372,80,800,G],[L?"Online":"En línea",478,80,800,G],[L?"your people,":"tu gente,",576,50,600,O],[L?"from anywhere":"de donde sea",636,50,600,O]])),f=new AJ;f.rotation.x=-0.2,P.add(f),d.position.set(0,0.44,0.012),f.add(d);{let X0=new I0(new _J(0.56,0.72,0.012),A);X0.position.set(0,0.44,0),f.add(X0)}for(let[X0,v,y,u]of[[-0.29,0.42000000000000004,0.035,0.88],[0.29,0.42000000000000004,0.035,0.88],[0,0.8500000000000001,0.62,0.035],[0,0.03,0.62,0.035]]){let b=new I0(new _J(y,u,0.022),A);b.position.set(X0,v,0),f.add(b)}let n=new AJ;n.position.z=-0.32,n.rotation.x=0.2,P.add(n);for(let X0 of[-0.27,0.27]){let v=new I0(new _J(0.03,0.8600000000000001,0.02),A);v.position.set(X0,0.43000000000000005,-0.02),n.add(v)}P.traverse((X0)=>{if(X0.isMesh)X0.castShadow=!0,X0.receiveShadow=!0})}let B=[];Z(-1.12,1.59,-4,0.42,0.21,0.31,"#677761"),Z(-1.12,1.61,-3.836,0.34,0.1,0.016,"#414b3d"),Z(-0.38,1.5,-3.98,0.3,0.018,0.22,"#c5b887");for(let[L,P,A]of[[0.7,-4.03,"#8b7747"],[0.98,-4.07,"#637751"],[1.29,-4.02,"#a88b50"]])K(L,1.6,P,0.07,0.075,0.25,A,14),K(L,1.739,P,0.077,0.077,0.028,"#aaa386",12);Z(0.2,1.51,-4.01,0.4,0.07,0.28,"#6c5838");for(let L=0;L<4;L++){let P=new I0(new H8(1,10,6),Q(L%2?"#bca276":"#a98e61"));P.scale.set(0.055,0.035,0.115),P.position.set(0.07+L*0.085,1.57,-4),P.rotation.y=(L-1.5)*0.13,J.add(P)}let R=new xJ({transparent:!0,depthWrite:!1,map:$((L,P,A)=>{for(let D=0;D<90;D++)L.fillStyle=D%2?"#152c2110":"#3036230a",L.beginPath(),L.ellipse(P/2+(W()-0.5)*P*0.45,A/2+(W()-0.5)*A*0.45,W()*P*0.24,W()*A*0.18,W()*Math.PI,0,Math.PI*2),L.fill()},256,256)});for(let[L,P,A,D]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let I=new I0(new VJ(A,D),R);I.rotation.x=-Math.PI/2,I.position.set(L,0.008,P),J.add(I)}for(let[L,P]of[[-3,-0.9],[3.3,-1.5]]){K(L,0.18,P,0.18,0.13,0.34,"#87553c",14),K(L,0.354,P,0.16,0.16,0.012,"#3f422d",12);let A=new AJ;A.position.set(L,0.36,P),J.add(A);for(let D=0;D<7;D++){let I=new GQ;I.moveTo(0,0),I.quadraticCurveTo(-0.09,0.23,0,0.55+W()*0.12),I.quadraticCurveTo(0.09,0.23,0,0);let d=new I0(new EQ(I,5),new o0({color:D%2?"#597d4f":"#3c603e",roughness:1,side:oJ}));d.rotation.set(0.3+W()*0.4,D*Math.PI*2/7,0),A.add(d)}B.push(A)}let q=new VJ(0.55,1.3,5,9),M=new I0(q,new o0({color:"#b2a27c",roughness:1,side:oJ}));M.position.set(-2.85,1.75,-3.05),J.add(M);let k=q.attributes.position,V=k.array.slice();return{update(L){B.forEach((P,A)=>P.rotation.z=Math.sin(L*0.53+A*2.1)*0.015);for(let P=0;P<k.count;P++){let A=V[P*3+1];k.setZ(P,Math.sin(L*1.17+A*3)*0.025*(0.65-A)/1.3)}k.needsUpdate=!0}}}function qN({scene:J,texture:$,mat:Q,box:Z,cylinder:K,staticGeo:W,random:Y}){let X=(T=0,h=0,l=0)=>new _(T,h,l),H=(T,h,l,Z0,J0,O0,E0=5000)=>{T.fillStyle=Z0,T.fillRect(0,0,h,l);for(let U0=0;U0<E0;U0++)T.fillStyle=Y()>0.5?J0:O0,T.fillRect(Y()*h,Y()*l,1+Y()*4,1+Y()*3)},U=[];function N(T,{w:h=1024,h:l=256,fondo:Z0="#efe3c4",tinta:J0="#24518a",sombra:O0="#c8402f",borde:E0=null,px:U0=0.62}={}){let S0=document.createElement("canvas");S0.width=h,S0.height=l;let m0=new c8(S0);m0.colorSpace=Q8;let t0=()=>{let C0=S0.getContext("2d"),GJ=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia";if(Z0){C0.fillStyle=Z0,C0.fillRect(0,0,h,l);for(let sJ=0;sJ<h*1.2;sJ++)C0.fillStyle=sJ%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",C0.fillRect(Math.random()*h,Math.random()*l,2+Math.random()*12,1+Math.random()*2)}else C0.clearRect(0,0,h,l);let OJ=l*U0;C0.font=`${OJ}px ${GJ}`;let jJ=C0.measureText(T).width;if(jJ>h*0.9)OJ*=h*0.9/jJ,C0.font=`${OJ}px ${GJ}`;C0.textAlign="center",C0.textBaseline="middle";let p=OJ*0.06;if(O0)C0.fillStyle=O0,C0.fillText(T,h/2+p,l/2+p+OJ*0.04);if(C0.fillStyle=J0,C0.fillText(T,h/2,l/2+OJ*0.04),E0)C0.strokeStyle=E0,C0.lineWidth=l*0.07,C0.strokeRect(C0.lineWidth/2,C0.lineWidth/2,h-C0.lineWidth,l-C0.lineWidth);for(let sJ=0;sJ<h*0.5;sJ++)C0.fillStyle=Z0?"rgba(239,227,196,.3)":"rgba(0,0,0,0)",C0.fillRect(Math.random()*h,Math.random()*l,1+Math.random()*3,1+Math.random()*2);m0.needsUpdate=!0};return t0(),U.push(t0),m0}document.fonts?.load?.("64px Shrikhand").then(()=>U.forEach((T)=>T())).catch(()=>{});let F=new o0({roughness:0.93,map:$((T,h,l)=>{H(T,h,l,"#e3d6b8","rgba(255,250,236,.10)","rgba(120,100,70,.08)");let Z0=T.createLinearGradient(0,0,0,l);Z0.addColorStop(0,"rgba(90,70,50,.12)"),Z0.addColorStop(0.18,"rgba(90,70,50,0)"),Z0.addColorStop(0.8,"rgba(90,70,50,0)"),Z0.addColorStop(1,"rgba(90,70,50,.2)"),T.fillStyle=Z0,T.fillRect(0,0,h,l);for(let J0=0;J0<22;J0++){let O0=Y()*h,E0=l*(0.08+Y()*0.3),U0=T.createLinearGradient(0,0,0,E0);U0.addColorStop(0,"rgba(80,70,55,.2)"),U0.addColorStop(1,"rgba(80,70,55,0)"),T.fillStyle=U0,T.fillRect(O0,0,3+Y()*8,E0)}},512,512)}),G=new o0({roughness:0.9,map:$((T,h,l)=>{H(T,h,l,"#3f9a96","rgba(200,240,230,.10)","rgba(20,50,50,.10)");for(let Z0=0;Z0<50;Z0++)T.fillStyle="rgba(225,218,195,.55)",T.beginPath(),T.ellipse(Y()*h,Y()*l,2+Y()*9,1+Y()*5,Y()*3,0,Math.PI*2),T.fill()},256,256)});Z(-3.48,0.625,-2.355,0.702,1.25,0.012,G),Z(3.45,0.625,-2.355,0.802,1.25,0.012,G),Z(-3.906,0.625,-3.85,0.012,1.25,2.72,G),Z(3.906,0.625,-3.85,0.012,1.25,2.72,G);let E=22,O="#3d8a5c",B="#e8dfc8",R=$((T,h,l)=>{for(let J0=0;J0<E;J0++)T.fillStyle=J0%2?B:O,T.fillRect(J0*h/E,0,Math.ceil(h/E),l);for(let J0=0;J0<2500;J0++)T.fillStyle=Y()>0.5?"rgba(255,250,235,.06)":"rgba(20,30,20,.07)",T.fillRect(Y()*h,Y()*l,2,2);let Z0=T.createLinearGradient(0,0,0,l);Z0.addColorStop(0,"rgba(0,0,0,.14)"),Z0.addColorStop(1,"rgba(40,30,20,0)"),T.fillStyle=Z0,T.fillRect(0,0,h,l)},1024,128);W(new VJ(7.3,0.86),new o0({map:R,roughness:0.95,side:oJ}),[0,2.59,-1.955],[-1.237,0,0]);let q=$((T,h,l)=>{let Z0=h/E;for(let J0=0;J0<E;J0++)T.fillStyle=J0%2?B:O,T.fillRect(J0*Z0,0,Math.ceil(Z0),l*0.5),T.beginPath(),T.arc(J0*Z0+Z0/2,l*0.5,Z0/2-0.5,0,Math.PI),T.fill()},1024,64);W(new VJ(7.3,0.2),new o0({map:q,roughness:0.95,side:oJ,alphaTest:0.5}),[0,2.35,-1.548]);{let T=new o0({roughness:0.8,map:$((l,Z0,J0)=>{l.fillStyle="#2a3332",l.fillRect(0,0,Z0,J0);let O0=l.createLinearGradient(0,0,0,J0);O0.addColorStop(0,"#cfe8e0"),O0.addColorStop(1,"#8fb3aa"),l.fillStyle=O0,l.fillRect(14,14,Z0-28,J0-28),l.strokeStyle="#1f2525",l.lineWidth=7;for(let E0=30;E0<Z0-20;E0+=26)l.beginPath(),l.moveTo(E0,14),l.lineTo(E0,J0-14),l.stroke();for(let E0 of[J0*0.33,J0*0.66])l.beginPath(),l.moveTo(14,E0),l.lineTo(Z0-14,E0),l.stroke();l.strokeStyle="#e8e0cc",l.lineWidth=12,l.strokeRect(6,6,Z0-12,J0-12)},256,256),emissive:"#ffffff",emissiveIntensity:0.12});T.emissiveMap=T.map,W(new VJ(1.1,1),T,[3.915,1.75,-4.3],[0,Math.PI/2,0]);let h=new I0(new VJ(2.2,0.36),new o0({map:N("Víveres · Bebidas · Hielo",{w:1536,h:252,fondo:null,tinta:"#24518a",sombra:"#c8402f"}),transparent:!0,roughness:0.9}));h.position.set(3.915,2.55,-3.75),h.rotation.y=Math.PI/2,J.add(h)}let M=3.3,k=2.75,V=-2.7,L=M+k;Z(0,M+k/2,-5.2,8.2,k,0.2,F),Z(-4,M+k/2,-3.95,0.2,k,2.7,F),Z(4,M+k/2,-3.95,0.2,k,2.7,F),Z(0,M+k/2,V,8.2,k,0.2,F),Z(0,L-0.08,-3.95,8.44,0.16,2.95,"#d3c9b0"),Z(0,M+0.06,V+0.12,8.3,0.1,0.06,"#3d938e");let P=new o0({roughness:0.7,map:$((T,h,l)=>{T.fillStyle="#2d3a3a",T.fillRect(0,0,h,l);let Z0=15,J0=(l-24)/Z0;for(let O0=0;O0<Z0;O0++){let E0=12+O0*J0;T.fillStyle="#7aa39d",T.fillRect(12,E0,h-24,J0*0.72),T.fillStyle="rgba(0,0,0,.25)",T.fillRect(12,E0+J0*0.62,h-24,J0*0.1)}T.strokeStyle="#e8e0cc",T.lineWidth=12,T.strokeRect(6,6,h-12,l-12)},256,256)});W(new VJ(1.2,1.25),P,[-2.5,4.6,V+0.107]);let A=new o0({roughness:0.7,map:P.map,emissive:"#8fb0ff",emissiveMap:P.map,emissiveIntensity:0.25}),D=new I0(new VJ(1.2,1.25),A);D.position.set(2.5,4.6,V+0.107),J.add(D);let I=new o0({roughness:0.8,emissive:"#ffffff",emissiveIntensity:0.55,map:$((T,h,l)=>{let Z0=T.createLinearGradient(0,0,0,l);Z0.addColorStop(0,"#f0c27f"),Z0.addColorStop(1,"#b87a44"),T.fillStyle=Z0,T.fillRect(0,0,h,l),T.strokeStyle="#1d2222",T.lineWidth=6;for(let J0=18;J0<h;J0+=22)T.beginPath(),T.moveTo(J0,0),T.lineTo(J0,l),T.stroke();for(let J0=l*0.2;J0<l;J0+=l*0.2)T.beginPath(),T.moveTo(0,J0),T.lineTo(h,J0),T.stroke();T.lineWidth=5;for(let J0=0;J0<4;J0++)T.beginPath(),T.arc(h/2,l*0.1+J0*l*0.2,18,0,Math.PI*2),T.stroke();T.strokeStyle="#e8e0cc",T.lineWidth=14,T.strokeRect(7,7,h-14,l-14)},128,256)});I.emissiveMap=I.map,W(new VJ(1,2.1),I,[0,M+1.08,V+0.107]);let d="#262c2b";for(let T of[3.38,4.22])Z(0,T,-1.56,8,0.04,0.04,d);for(let T=-3.94;T<=3.95;T+=0.14)Z(T,3.8,-1.56,0.018,0.84,0.018,d);for(let T of[-3.97,3.97]){for(let h of[3.38,4.22])Z(T,h,-2.08,0.04,0.04,1.04,d);for(let h=-2.55;h<=-1.6;h+=0.14)Z(T,3.8,h,0.018,0.84,0.018,d)}for(let[T,h]of[[-3.3,-1.8],[3.25,-1.85],[1.5,-1.78]]){K(T,3.46,h,0.13,0.1,0.24,"#9a5a3c",12);for(let l=0;l<4;l++)W(new H8(1,8,6),Q(l%2?"#5b7f4f":"#44663e",0.95),[T+(l-1.5)*0.06,3.66+l%2*0.05,h+(l%3-1)*0.04],[0,0,0],[0.12,0.14,0.1])}K(2.5,L+0.52,-4.3,0.5,0.55,1,"#1f2322",18),K(2.5,L+1.06,-4.3,0.2,0.22,0.08,"#2b302f",12),K(-1.8,L+0.35,-4.6,0.035,0.035,0.7,"#8d8f89",8);for(let[T,h]of[[-3.95,-2.75],[3.95,-2.75],[-3.95,-5.15],[3.95,-5.15]])for(let[l,Z0]of[[-0.05,-0.05],[0.05,-0.05],[-0.05,0.05],[0.05,0.05]])K(T+l,L+0.42,h+Z0,0.007,0.007,0.84,"#6b4a35",4);let f=Q("#8a6a48",0.8),n=Q("#4f7f55",0.85);for(let T of[0.55,1,1.45,1.9,2.35,2.8])Z(-3.53,T,-3.85,0.34,0.04,2.2,n);for(let T of[-4.94,-2.76])Z(-3.53,1.65,T,0.34,2.3,0.04,n);let X0=$((T,h,l)=>{T.fillStyle="#bdbdbd",T.fillRect(0,0,h,l),T.fillStyle="#ffffff",T.fillRect(0,l*0.34,h,l*0.34),T.fillStyle="#6a6a6a",T.fillRect(0,l*0.33,h,l*0.02),T.fillRect(0,l*0.67,h,l*0.02)},64,64),v=new o0({map:X0,roughness:0.62}),y=["#c8402f","#e3ae55","#f3eee3","#2f6fa8","#3f8a5a","#e07a2e","#d65a7a","#f1d24a","#6fb7c9","#8a3b3b","#ffffff","#1f5f9e"],u=[],b=[],r=(T,h,l,Z0,J0,O0)=>{let E0=T;while(E0<h){let U0=0.07+Y()*0.12,S0=0.12+Y()*0.17,m0=Math.min(J0,0.1+Y()*0.12),t0=Y()<0.35,C0=new y0(y[Math.floor(Y()*y.length)]).multiplyScalar(0.7+Y()*0.22);if(E0+U0>h)break;let GJ=O0==="x"?X(E0+U0/2,l+S0/2,Z0):X(Z0,l+S0/2,E0+U0/2);(t0?b:u).push({pos:GJ,s:t0?X(U0*0.85,S0*0.8,U0*0.85):O0==="x"?X(U0,S0,m0):X(m0,S0,U0),col:C0}),E0+=U0+0.012}};for(let T of[1.6125,2.5725])r(-3.4,2.2,T,-4.8,0.3,"x");for(let T of[0.57,1.02,1.47,1.92,2.37,2.82])r(-4.9,-2.8,T,-3.55,0.28,"z");for(let[T,h]of[[new _J(1,1,1),u],[new LJ(0.5,0.5,1,10),b]]){let l=new v9(T,v,h.length),Z0=new SJ;h.forEach((J0,O0)=>{Z0.position.copy(J0.pos),Z0.scale.copy(J0.s),Z0.rotation.set(0,(Y()-0.5)*0.12,0),Z0.updateMatrix(),l.setMatrixAt(O0,Z0.matrix),l.setColorAt(O0,J0.col)}),l.frustumCulled=!1,J.add(l)}{let l=[[0.05,0.47],[0.53,0.95]],Z0=(U0,S0)=>{if(U0.fillStyle=S0?"#000":"#5b3b24",U0.fillRect(0,0,1024,368),!S0){for(let m0=0;m0<500;m0++)U0.fillStyle=m0%2?"rgba(150,100,60,.25)":"rgba(30,18,10,.25)",U0.fillRect(Math.random()*1024,Math.random()*368,20+Math.random()*80,1+Math.random()*2);U0.fillStyle="#3a2616",U0.fillRect(0,323.84,1024,44.16)}for(let[m0,t0]of l){let C0=m0*1024,GJ=t0*1024;U0.fillStyle=S0?"#6e6a60":"#d9d3c1",U0.fillRect(C0,44.16,GJ-C0,257.6);for(let p=0;p<2;p++){let sJ=44.16+(p+0.5)*257.6/2;U0.fillStyle=S0?"#6f6a60":"#b9b3a2",U0.fillRect(C0,sJ+51.52000000000001,GJ-C0,4);let FJ=sJ+51.52000000000001;U0.globalAlpha=S0?0.7:1;for(let DJ=C0+10;DJ<GJ-60;){let S=Math.random()<0.3,C=y[Math.floor(Math.random()*y.length)];if(S){let g=18+Math.random()*6;U0.fillStyle=S0?"#9a9a9a":"rgba(235,240,240,.9)",U0.fillRect(DJ,FJ-g*2.4,g*2,g*2.4),U0.fillStyle=C;for(let K0=0;K0<7;K0++)U0.beginPath(),U0.arc(DJ+5+Math.random()*(g*2-10),FJ-6-Math.random()*g*1.8,5,0,Math.PI*2),U0.fill();U0.fillStyle="#c8402f",U0.fillRect(DJ-2,FJ-g*2.4-8,g*2+4,9),DJ+=g*2+8}else{let g=46+Math.random()*34,K0=257.6*(0.2+Math.random()*0.1);U0.fillStyle=C,U0.beginPath(),U0.moveTo(DJ,FJ),U0.lineTo(DJ+3,FJ-K0);for(let D0=0;D0<=6;D0++)U0.lineTo(DJ+3+D0*(g-6)/6,FJ-K0-(D0%2?5:0));U0.lineTo(DJ+g,FJ),U0.closePath(),U0.fill(),U0.fillStyle="rgba(255,255,255,.7)",U0.fillRect(DJ+g*0.2,FJ-K0*0.62,g*0.6,K0*0.22),U0.fillStyle="rgba(255,255,255,.25)",U0.fillRect(DJ+4,FJ-K0+8,5,K0-14),DJ+=g+5}}U0.globalAlpha=1}if(!S0)U0.fillStyle="rgba(255,255,255,.22)",U0.beginPath(),U0.moveTo(C0+20,44.16),U0.lineTo(C0+70,44.16),U0.lineTo(C0+20,301.76),U0.lineTo(C0-10+20,301.76),U0.fill(),U0.strokeStyle="#3a2616",U0.lineWidth=10,U0.strokeRect(C0,44.16,GJ-C0,257.6)}},J0=(U0)=>$((S0)=>Z0(S0,U0),1024,368),O0=new o0({map:J0(!1),emissive:"#fff4de",emissiveMap:J0(!0),emissiveIntensity:0.2,roughness:0.55}),E0=new I0(new VJ(3.9,1.4),O0);E0.position.set(0,0.7,-3.924),J.add(E0)}let m=$((T,h,l)=>{let J0=l/7;T.fillStyle="#8a7a5a",T.fillRect(h/2-2,0,4,l);for(let O0=0;O0<7;O0++){let E0=O0*J0+4;T.fillStyle=y[(O0*5+3)%y.length],T.fillRect(6,E0,h-12,J0-8),T.fillStyle="rgba(255,255,255,.3)",T.fillRect(10,E0+6,h*0.16,J0-20),T.fillStyle="rgba(255,255,255,.75)",T.fillRect(h*0.3,E0+J0*0.36,h*0.4,J0*0.16)}},64,448),e=new o0({map:m,roughness:0.45,alphaTest:0.5,side:oJ});for(let T of[-1.74,-1.52,1.52,1.74])W(new VJ(0.15,0.86),e,[T,2.66,-3.86],[0,(Y()-0.5)*0.5,0]);let Y0=new I0(new VJ(0.8,1.5),new xJ({color:new y0(1.05,1.08,1.1),map:$((T,h,l)=>{T.fillStyle="#dcecef",T.fillRect(0,0,h,l);let Z0=5;for(let O0=0;O0<Z0;O0++){let E0=l/Z0,U0=O0*E0;T.fillStyle="rgba(140,160,165,.9)",T.fillRect(0,U0+E0*0.88,h,5);for(let S0=0;S0<8;S0++){let m0=(h-20)/8,t0=10+S0*m0;T.fillStyle=["#c8402f","#2c7a3f","#e3ae55","#7a3a1c","#2f6fa8","#f3eee3","#e07a2e"][(S0+O0*3)%7],T.fillRect(t0+m0*0.15,U0+E0*0.3,m0*0.7,E0*0.56),T.fillRect(t0+m0*0.36,U0+E0*0.12,m0*0.28,E0*0.2)}}let J0=T.createLinearGradient(0,0,h,0);J0.addColorStop(0,"rgba(255,255,255,.3)"),J0.addColorStop(0.35,"rgba(255,255,255,0)"),T.fillStyle=J0,T.fillRect(0,0,h,l),T.strokeStyle="#9aa8aa",T.lineWidth=10,T.strokeRect(0,0,h,l)},256,480)}));Y0.position.set(2.95,1.12,-4.09),J.add(Y0);let j=new I0(new VJ(0.9,0.2),new xJ({map:N("Bien fría",{w:720,h:160,fondo:"#b8372b",tinta:"#f3eee3",sombra:null,px:0.62}),color:new y0(1.1,1.1,1.1)}));j.position.set(2.95,2.17,-4.14),J.add(j),Z(2.45,0.4,-1.86,1,0.8,0.6,"#e7ebe8"),Z(2.45,0.83,-1.86,1.04,0.06,0.64,"#d4dad8"),Z(2.45,0.12,-1.555,0.96,0.1,0.012,"#b9c0bd");{let T=new I0(new VJ(0.62,0.19),new o0({map:N("HIELO",{w:640,h:196,fondo:null,tinta:"#1f5f9e",sombra:"#c8402f",px:0.7}),transparent:!0,roughness:0.8}));T.position.set(2.45,0.55,-1.553),J.add(T)}{let T=Q("#2d63a8",0.5),h=new o0({color:"#8cc0e6",roughness:0.12,transparent:!0,opacity:0.84});for(let J0=0;J0<2;J0++)for(let O0=0;O0<3;O0++){let E0=3.15+J0*0.4,U0=0.21+O0*0.4;W(new LJ(0.155,0.155,0.4,16),h,[E0,U0,-2],[Math.PI/2,0,0]),W(new LJ(0.05,0.05,0.1,10),h,[E0,U0,-2.25],[Math.PI/2,0,0])}for(let J0 of[0,0.4,0.8,1.2])Z(3.35,J0+0.012,-2,0.84,0.024,0.46,T);for(let J0 of[2.94,3.35,3.7600000000000002])Z(J0,0.61,-2,0.03,1.22,0.46,T)}let o=(T,h,l,Z0,J0)=>{let O0=Q(J0,0.5),E0=(U0,S0,m0,t0,C0=0)=>{U0.rotateX(C0);let GJ=X(S0,m0,t0).applyAxisAngle(X(0,1,0),Z0);W(U0,O0,[T+GJ.x,h+GJ.y,l+GJ.z],[0,Z0,0])};E0(new S8(0.46,0.035,0.43,2,0.015),0,0.43,0),E0(new S8(0.44,0.42,0.03,2,0.012),0,0.71,-0.22,-0.16);for(let U0 of[-0.2,0.2])E0(new LJ(0.018,0.024,0.43,6),U0,0.215,0.17,0.12),E0(new LJ(0.018,0.024,0.45,6),U0,0.22,-0.19,-0.14),E0(new _J(0.03,0.18,0.3),U0*1.1,0.54,-0.02)};for(let T=0;T<4;T++)o(-3.42,T*0.075,-1.32-T*0.012,0.3,"#ecece6");o(3.55,0,0.55,-1.9,"#ecece6");{let Z0=(S0,m0,t0,C0,GJ,OJ=0,jJ=0)=>{S0.rotateX(OJ),S0.rotateZ(jJ);let p=X(t0,C0,GJ).applyAxisAngle(X(0,1,0),0.3);W(S0,m0,[-3.25+p.x,p.y,2.85+p.z],[0,0.3,0])},J0=Q("#171b1b",0.8),O0=Q("#9aa3a0",0.35,0.6),E0=Q("#a8382c",0.45,0.1),U0=Q("#1e2222",0.7);for(let S0 of[-0.52,0.5])Z0(new f9(0.26,0.055,8,18),J0,S0,0.3,0),Z0(new LJ(0.09,0.09,0.08,10),O0,S0,0.3,0,Math.PI/2);Z0(new S8(0.6,0.22,0.24,2,0.05),E0,-0.02,0.53,0,0,-0.08),Z0(new S8(0.55,0.08,0.26,2,0.03),U0,-0.28,0.68,0),Z0(new S8(0.28,0.34,0.2,2,0.05),E0,0.37,0.64,0,0,-0.35),Z0(new LJ(0.018,0.018,0.62,6),O0,0.44,0.92,0,Math.PI/2),Z0(new LJ(0.02,0.02,0.62,6),O0,0.47,0.6,0,0,0.35),Z0(new LJ(0.03,0.035,0.45,8),O0,-0.35,0.3,0.13,0,Math.PI/2+0.1),Z0(new S8(0.3,0.03,0.22,1,0.01),O0,-0.6,0.73,0)}for(let T=-9;T<4.4;T+=2)Z(T+0.5,-0.074,3.45,1,0.152,0.202,"#d6b24e");Z(8.3,-0.2,-4.575,7.4,0.1,15.85,"#2b3133"),Z(4.6,-0.075,-4.575,0.2,0.15,15.85,"#a8a391"),Z(12.3,-0.07,-4.575,1.2,0.16,15.85,"#8a8578");for(let T=-11;T<3;T+=1.8)Z(8.3,-0.146,T,0.06,0.008,0.7,"#b9ad83");{let T=new o0({color:"#ffd08a",emissive:"#ffb35a",emissiveIntensity:2.2}),h=Q("#2a3436",0.8),l=["#d8a25a","#8fb8a8","#e0d2b0","#c9897d","#b9c47a"],Z0=-12,J0=0;while(Z0<2.4){let O0=3+Y()*1.6,E0=3+Y()*2.6,U0=l[J0++%l.length];Z(14.4,E0/2,Z0+O0/2,3,E0,O0,U0),Z(14.4,E0+0.08,Z0+O0/2,3.1,0.16,O0+0.1,"#ddd4bf");let S0=Math.max(1,Math.floor(O0/1.5));for(let m0=0;m0<S0;m0++){let t0=Z0+(m0+0.5)*O0/S0;if(W(new VJ(0.75,0.95),Y()<0.4?T:h,[12.885,1.55,t0],[0,-Math.PI/2,0]),E0>4.2)W(new VJ(0.7,0.8),Y()<0.35?T:h,[12.885,E0-1.1,t0],[0,-Math.PI/2,0])}Z0+=O0+0.15}}{let T=new o0({roughness:0.6,metalness:0.3,map:$((l,Z0,J0)=>{l.fillStyle="#8f9a94",l.fillRect(0,0,Z0,J0);for(let O0=0;O0<J0;O0+=8)l.fillStyle="rgba(40,45,44,.35)",l.fillRect(0,O0,Z0,2),l.fillStyle="rgba(230,235,230,.18)",l.fillRect(0,O0+3,Z0,2);for(let O0=0;O0<40;O0++)l.fillStyle="rgba(120,70,40,.18)",l.fillRect(Y()*Z0,Y()*J0,4+Y()*20,2+Y()*10)},256,256)});W(new VJ(2.3,2.1),T,[-7,1.05,-1.365]),Z(-7,2.2,-1.33,2.45,0.2,0.1,"#6d7571");let h=new I0(new VJ(1.7,0.42),new o0({map:N("Banca La Suerte",{w:1024,h:252,fondo:"#2f7a4d",tinta:"#f3eee3",sombra:"#1b2c22",borde:"#e3ae55",px:0.52}),roughness:0.85,emissive:"#ffffff",emissiveIntensity:0.08}));h.material.emissiveMap=h.material.map,h.position.set(-10.5,2.72,-1.36),J.add(h)}let G0=X(4.3,0,3);K(G0.x,3.9,G0.z,0.11,0.16,7.8,"#8e8a80",10),Z(G0.x,7.25,G0.z,0.1,0.1,1.7,"#5c574c"),K(G0.x+0.28,6.3,G0.z,0.2,0.2,0.62,"#6d7470",12);let t=(T,h,l,Z0="#141819",J0=0.011)=>{let O0=T.clone().lerp(h,0.5);O0.y-=l*2,W(new f8(new n8(T,O0,h),22,J0,4,!1),Q(Z0),[0,0,0])};for(let T of[-0.6,0,0.6])t(X(G0.x,7.3,G0.z+T),X(6,6.6,9.2+T*0.4),0.25);for(let T of[-0.5,0.5])t(X(G0.x,7.3,G0.z+T),X(-5,4.2,-1+T*0.6),0.55);t(X(G0.x,6.4,G0.z),X(3.95,5.7,-2.72),0.35),t(X(G0.x,6.2,G0.z),X(3.95,5.5,-2.72),0.5,"#1d2121",0.008),t(X(G0.x,5.9,G0.z),X(4.35,5.4,-9),0.4,"#1d2121",0.009),t(X(G0.x,5.7,G0.z),X(4.35,5.2,-9),0.6,"#20241f",0.007);{let T=new $7(Array.from({length:14},(h,l)=>{let Z0=l/13*Math.PI*4;return X(G0.x+0.16+Math.cos(Z0)*0.14,5.2-l*0.018+Math.sin(Z0)*0.14,G0.z+Math.sin(Z0)*0.05)}));W(new f8(T,60,0.008,4,!1),Q("#141819"),[0,0,0])}let x=0;return{update(T){if(T>x)x=T+0.25+Math.random()*1.4,A.emissiveIntensity=0.12+Math.random()*0.45,A.emissive.setHSL(0.58+Math.random()*0.08,0.5,0.55+Math.random()*0.2)}}}function ON({scene:J,random:$=Math.random}){let Q=$,Z=[],K=[],W=[],Y=new y0,X=(y,u,b=Z)=>{Y.set(u);let r=y.attributes.position.count,m=new Float32Array(r*3);for(let e=0;e<r;e++)m[e*3]=Y.r,m[e*3+1]=Y.g,m[e*3+2]=Y.b;return y.setAttribute("color",new tJ(m,3)),y.deleteAttribute("uv"),b.push(y),y},H=(y,u,b,r,m,e,Y0,j=0,o)=>{let G0=new _J(r,m,e);if(j)G0.rotateY(j);return G0.translate(y,u,b),X(G0,Y0,o)},U=(y,u,b,r,m,e,Y0=8)=>{let j=new LJ(r,r,m,Y0);return j.translate(y,u,b),X(j,e)},N=(y,u,b,r,m,e,Y0,j)=>{let o=new VJ(r,m);return o.rotateY(e),o.translate(y,u,b),X(o,Y0,j)},F=(y)=>y[Math.floor(Q()*y.length)],G=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0","#b7a4c9","#e0a58f","#9ec3b0"],E=["#9a968c","#8d8a80","#a39d90"],O="#8a8578",B="#a8a391",R="#2b3133",q="#b9ad83",M="#1b2224",k="#232c2e",V=(y)=>"#"+new y0(y).multiplyScalar(0.85).getHexString();function L(y,u,b,r,m,e,{lejos:Y0=!1}={}){let o=e*2.9+0.3,G0=Q()<0.18?F(E):V(F(G)),t=new _(Math.sin(b),0,Math.cos(b)),x=new _(t.z,0,-t.x),T=(J0,O0,E0)=>new _(y,O0,u).addScaledVector(x,J0).addScaledVector(t,E0),h=T(0,o/2,-m/2);H(h.x,h.y,h.z,r,o,m,G0,b);let l=T(0,o+0.09,-m/2);H(l.x,l.y,l.z,r+0.12,0.18,m+0.12,"#d9d2bf",b);let Z0=Math.max(1,Math.floor(r/1.6));for(let J0=0;J0<e;J0++)for(let O0=0;O0<Z0;O0++){let E0=-r/2+(O0+0.5)*r/Z0,U0=J0*2.9+1.55,S0=T(E0,U0,Y0?0.04:0.012),m0=Q()<(Y0?0.3:0.38);if(J0===0&&O0===Math.floor(Z0/2)&&!Y0){let t0=T(E0,1.05,0.012);N(t0.x,t0.y,t0.z,0.95,2.1,b,Q()<0.3?"#7c8680":"#232c2e");continue}if(m0)N(S0.x,S0.y,S0.z,0.72,0.9,b,Q()<0.22?"#9fc3ff":F(["#ffd08a","#ffc27a","#ffe0a8"]),K);else N(S0.x,S0.y,S0.z,0.72,0.9,b,"#232c2e")}if(Y0){P(T,o,r,m);return}if(Q()<0.5){let J0=T(0,0.5,0.55);H(J0.x,1,J0.z,r-0.1,0.05,0.05,"#1b2224",b);for(let E0 of[-0.5,-0.25,0,0.25,0.5]){let U0=T(E0*(r-0.1),0.5,0.55);H(U0.x,0.5,U0.z,0.05,1,0.05,"#1b2224",b)}let O0=T(0,2.75,0.6);H(O0.x,O0.y,O0.z,r,0.12,1.2,"#cfc6b2",b)}if(e>1&&Q()<0.6){let J0=T(0,2.9499999999999997,0.45);H(J0.x,J0.y,J0.z,r*0.7,0.12,0.9,"#cfc6b2",b);let O0=T(0,3.45,0.88);H(O0.x,O0.y,O0.z,r*0.7,0.05,0.05,"#1b2224",b);for(let E0=0;E0<=6;E0++){let U0=T((E0/6-0.5)*r*0.7,3.23,0.88);H(U0.x,U0.y,U0.z,0.03,0.5,0.03,"#1b2224",b)}}P(T,o,r,m)}function P(y,u,b,r){if(Q()<0.45){let m=y((Q()-0.5)*b*0.5,u+0.7,-r*(0.3+Q()*0.4));U(m.x,m.y,m.z,0.55,1.1,"#1f2324",10)}if(Q()<0.22)for(let m=0;m<4;m++){let e=y((m%2-0.5)*(b-0.4),u+0.5,-(m<2?0.3:r-0.3));H(e.x,e.y,e.z,0.04,1+Q()*0.4,0.04,"#5a4a3c")}if(Q()<0.15){let m=y(b*0.3,u+1.1,-r*0.5);H(m.x,m.y,m.z,0.03,2,0.03,"#3a3f40"),H(m.x,m.y+0.6,m.z,0.9,0.03,0.03,"#3a3f40")}}function A({eje:y,desde:u,hasta:b,fachada:r,ry:m,fondo:e=[6,9],pisos:Y0=[1,3]}){let j=u;while(j<b-2){let o=Math.min(3.4+Q()*3.4,b-j),G0=j+o/2,t=r+(Q()-0.5)*0.5,x=Y0[0]+Math.floor(Q()*(Y0[1]-Y0[0]+1));if(y==="x")L(G0,t,m,o,e[0]+Q()*(e[1]-e[0]),x);else L(t,G0,m,o,e[0]+Q()*(e[1]-e[0]),x);j+=o+0.12+(Q()<0.12?0.9+Q()*1.5:0)}}{let y=new VJ(460,460);y.rotateX(-Math.PI/2),y.translate(0,-0.26,0),X(y,"#35363a")}for(let[y,u]of[[-86,-20],[20,86]]){let b=(y+u)/2,r=u-y;H(b,-0.2,6.05,r,0.1,5.4,"#2b3133"),H(b,0.08,9.6,r,0.16,1.8,"#8a8578");for(let m=y+1;m<u;m+=3.6)H(m,-0.146,6.3,1.4,0.008,0.1,"#b9ad83")}H(-51,-0.1,0.97,70,0.2,4.76,"#8a8578"),H(-51,-0.075,3.45,70,0.15,0.2,"#a8a391"),H(49.45,-0.1,2.18,73.1,0.2,2.36,"#8a8578"),H(49.45,-0.075,3.45,73.1,0.15,0.2,"#a8a391"),A({eje:"x",desde:-84,hasta:-20.3,fachada:10.6,ry:Math.PI}),A({eje:"x",desde:20.3,hasta:84,fachada:10.6,ry:Math.PI}),A({eje:"x",desde:-84,hasta:-22.8,fachada:-1.4,ry:0}),A({eje:"x",desde:16.1,hasta:84,fachada:1,ry:0}),H(8.3,-0.2,-49.25,7.4,0.1,73.5,"#2b3133"),H(4.25,-0.1,-49.25,0.7,0.2,73.5,"#8a8578"),H(12.3,-0.07,-49.25,1.2,0.16,73.5,"#8a8578");for(let y=-13;y>-85;y-=3.6)H(8.3,-0.146,y,0.1,0.008,1.4,"#b9ad83");A({eje:"z",desde:-84,hasta:-5.5,fachada:3.9,ry:Math.PI/2,fondo:[7,9]}),A({eje:"z",desde:-84,hasta:-12.2,fachada:12.9,ry:-Math.PI/2,fondo:[7,9]});let D=(y,u,b)=>{let r=y.clone().lerp(u,0.5);r.y-=b*2;let m=new f8(new n8(y,r,u),14,0.014,3,!1);X(m,"#101517")},I=(y,u)=>{U(y,3.5,u,0.1,7,"#6b6457",6),H(y,6.6,u,1.6,0.08,0.08,"#4f4a40")},d=(y,u,b)=>{H(y+b.x*0.55,6,u+b.z*0.55,Math.abs(b.x)?1.1:0.06,0.06,Math.abs(b.z)?1.1:0.06,"#4f4a40");let r=new H8(0.16,8,6);r.translate(y+b.x*1.1,5.9,u+b.z*1.1),X(r,"#ffb866",W)};for(let y of[-1,1]){let u=y<0?-14:16;for(let b=1;b<=5;b++){let r=y<0?-14-b*12:16+b*12;if(I(r,9.2),b%2===0)d(r,9.2,new _(0,0,-1));for(let m of[0,-0.25,0.3])D(new _(u,6.6+m,9.2),new _(r,6.6+m,9.2),0.5);u=r}}{let y=-9;for(let u=1;u<=6;u++){let b=-9-u*12;if(I(12.4,b),u%2===1)d(12.4,b,new _(-1,0,0));for(let r of[0,0.3])D(new _(12.4,6.6+r,y),new _(12.4,6.6+r,b),0.5);y=b}}let f=(y,u,b)=>{let r=F(["#8b2f2a","#c9c6bd","#2f4a6b","#3b3f42","#b58a3a","#e2dfd6","#556b4f"]),m=new _(Math.sin(b),0,Math.cos(b));H(y,0.55,u,1.75,0.62,4.1,r,b);let e=m.clone().multiplyScalar(-0.3);H(y+e.x,1.1,u+e.z,1.55,0.52,2.1,"#2a3236",b);let Y0=new _(m.z,0,-m.x);for(let[j,o]of[[-0.8,1.3],[0.8,1.3],[-0.8,-1.3],[0.8,-1.3]]){let G0=new LJ(0.32,0.32,0.22,10);G0.rotateZ(Math.PI/2),G0.rotateY(b);let t=new _(y,0.32,u).addScaledVector(Y0,j).addScaledVector(m,o);G0.translate(t.x,t.y,t.z),X(G0,"#141718")}};for(let[y,u,b]of[[-31,4.4,Math.PI/2],[-47,4.4,Math.PI/2],[-72,4.4,-Math.PI/2],[27,4.4,Math.PI/2],[55,4.4,-Math.PI/2],[-58,7.9,Math.PI/2],[38,7.9,-Math.PI/2],[5.6,-24,0],[5.6,-41,Math.PI],[10.8,-31,0],[10.8,-62,Math.PI]])f(y,u,b);let n=(y,u)=>Math.abs(y)<30&&u>-22&&u<24||u>-14&&u<20||u<-10&&y>-12&&y<30;for(let y=-78;y<=78;y+=13)for(let u=-78;u<=78;u+=13){let b=y+(Q()-0.5)*6,r=u+(Q()-0.5)*6;if(n(b,r)||Math.hypot(b,r)>80)continue;let m=Math.hypot(b,r),e=m>45&&Q()<0.07,Y0=Math.atan2(-b,-r),j=Math.round(Y0/(Math.PI/2))*(Math.PI/2),o=e?5+Math.floor(Q()*5):1+Math.floor(Q()*(r>0?2:3));if(L(b,r,j,6+Q()*6,6+Q()*5,o,{lejos:!0}),Q()<0.35){let G0=F(["#3f5a3c","#4a6443","#35503a"]),t=b+(Q()-0.5)*8,x=r+(Q()-0.5)*8,T=2+Q()*2.5,h=new FQ(T,0);h.scale(1,0.8,1),h.translate(t,T*0.6+2.5,x),X(h,G0),U(t,1.4,x,0.25,2.8,"#4d4234",5)}}for(let y=0;y<14;y++){let u=Q()*Math.PI*2,b=32+Q()*44,r=Math.cos(u)*b,m=Math.sin(u)*b;if(n(r,m))continue;let e=9+Q()*5,Y0=new LJ(0.14,0.22,e,5);Y0.translate(r,e/2,m),X(Y0,"#5d5445");for(let j=0;j<8;j++){let o=new W6(0.3,3,3,1);o.rotateZ(Math.PI/2+0.5),o.translate(1.5,0,0),o.rotateY(j/8*Math.PI*2),o.translate(r,e,m),X(o,"#34503a")}}{let u=[],b=[];for(let m=0;m<=240;m++){let e=m/240*Math.PI*2,Y0=86+Math.sin(e*3.1)*1.5,j=6+7*(0.5+0.5*Math.sin(e*2.3+0.7))+3.5*Math.sin(e*5.1+1)**2+1.2*Math.sin(e*13.7+2)+0.5*Math.sin(e*31.3);if(u.push(Math.cos(e)*Y0,-1,Math.sin(e)*Y0,Math.cos(e)*Y0,Math.max(5,j),Math.sin(e)*Y0),m<240){let o=m*2;b.push(o,o+2,o+1,o+1,o+2,o+3)}}let r=new bJ;r.setAttribute("position",new XJ(u,3)),r.setIndex(b),r.computeVertexNormals(),X(r,"#3d4552")}let X0=[],v=(y,u)=>{if(!y.length)return;let b=y.map((e)=>e.index?e.toNonIndexed():e),r=E$(b,!1);if(b.forEach((e)=>e.dispose()),y.forEach((e)=>e.dispose()),!r)return;let m=new I0(r,u);m.matrixAutoUpdate=!1,J.add(m),X0.push(m)};return v(Z,new o0({vertexColors:!0,roughness:0.92,side:oJ})),v(K,new xJ({vertexColors:!0,color:new y0(1.9,1.9,1.9)})),v(W,new xJ({vertexColors:!0,color:new y0(5,5,5)})),{mallas:X0}}var aR=["cafe","morir","presidente","presidente"];function rR(){let J=document.createElement("canvas");J.width=256,J.height=128;let $=J.getContext("2d");$.fillStyle="#f1ece0",$.fillRect(0,0,256,128),$.fillStyle="#b3262d",$.fillRect(0,10,256,14),$.fillRect(0,104,256,14),$.fillStyle="#1f5a36",$.beginPath(),$.ellipse(128,64,54,28,0,0,Math.PI*2),$.fill(),$.fillStyle="#f1ece0",$.beginPath(),$.ellipse(128,64,46,21,0,0,Math.PI*2),$.fill(),$.fillStyle="#b3262d",$.fillRect(92,58,72,12);let Q=new c8(J);return Q.colorSpace=Q8,Q}function tR(){let J=new AJ,$=(H,U)=>new L0(H,U),Q=[$(0,0),$(0.034,0),$(0.037,0.006),$(0.037,0.165),$(0.034,0.188),$(0.022,0.222),$(0.0145,0.252),$(0.0138,0.274),$(0.0158,0.279),$(0.0158,0.29),$(0.0112,0.29),$(0.0106,0.268),$(0.0112,0.24)],Z=new o0({color:"#2d5a26",roughness:0.18,metalness:0.05,envMapIntensity:1.4});J.add(new I0(new I7(Q,20),Z));let K=new I0(new I7(Q.slice(1,5).map((H)=>$(H.x+0.0006,H.y)),20),new o0({color:"#e8f0e4",roughness:0.9,transparent:!0,opacity:0.22,depthWrite:!1}));J.add(K);let W=new I0(new LJ(0.0376,0.0376,0.075,24,1,!0),new o0({map:rR(),roughness:0.6}));W.position.y=0.095,J.add(W);let Y=new I0(new LJ(0.0149,0.0152,0.02,16,1,!0),new o0({color:"#b3262d",roughness:0.5}));Y.position.y=0.262,J.add(Y);let X=new I0(new J7(0.0112,16),new xJ({color:"#0d160c"}));return X.rotation.x=-Math.PI/2,X.position.y=0.245,J.add(X),{g:J,alto:0.11,radio:0.037,inclina:1.25,boca:0.18}}function eR(){let J=new AJ,$=new I0(new LJ(0.034,0.029,0.14,24,1,!0),new o0({color:"#dfe9ec",roughness:0.08,transparent:!0,opacity:0.28,depthWrite:!1,side:oJ}));$.position.y=0.07,$.renderOrder=2,J.add($);let Q=new I0(new LJ(0.029,0.029,0.008,24),new o0({color:"#dfe9ec",roughness:0.1,transparent:!0,opacity:0.5}));Q.position.y=0.004,J.add(Q);let Z=new I0(new LJ(0.0318,0.0285,0.112,24),new o0({color:"#f2bf86",roughness:0.45}));Z.position.y=0.064,J.add(Z);for(let[W,Y,X]of[[0.01,0.006,0.4],[-0.009,-0.008,1.1],[0.002,-0.012,2]]){let H=new I0(new _J(0.016,0.013,0.016),new o0({color:"#f6f3ec",roughness:0.15,transparent:!0,opacity:0.8}));H.position.set(W,0.121,Y),H.rotation.set(X,X*0.7,0),J.add(H)}let K=new I0(new LJ(0.0028,0.0028,0.19,8),new o0({color:"#c8392e",roughness:0.5}));return K.position.set(0.012,0.11,0.004),K.rotation.z=-0.16,J.add(K),{g:J,alto:0.06,radio:0.034,inclina:0.85,boca:0.09}}function JL(){let J=new AJ,$=new o0({color:"#efe9da",roughness:0.22}),Q=new I0(new LJ(0.053,0.047,0.008,28),$);Q.position.y=0.004,J.add(Q);let Z=new o0({color:"#efe9da",roughness:0.22,side:oJ}),K=new I0(new LJ(0.034,0.025,0.056,24,1,!0),Z),W=new I0(new J7(0.025,20),$);W.rotation.x=-Math.PI/2,W.position.y=0.0085,J.add(W),K.position.y=0.036,J.add(K);let Y=new I0(new J7(0.0318,24),new o0({color:"#2a160c",roughness:0.15}));Y.rotation.x=-Math.PI/2,Y.position.y=0.056,J.add(Y);let X=new I0(new f9(0.014,0.004,6,12,Math.PI*1.3),$);return X.position.set(0.036,0.038,0),X.rotation.z=-Math.PI*0.65,J.add(X),J.remove(Q),{g:J,alto:0.034,radio:0.034,inclina:0.9,boca:0.034,plato:Q}}function RN(J){let $=[];for(let Q=0;Q<4;Q++){let Z=aR[Q],K=Z==="presidente"?tR():Z==="morir"?eR():JL(),[W,Y,X]=k9[Q],H=k0.tableWidth/2-0.055,U=k0.tableCenterY+k0.tableThickness/2,N=new _(-H,0,k0.seatDistance-H).applyAxisAngle(new _(0,1,0),X).add(new _(W,0,Y));if(N.y=U,K.g.traverse((F)=>{if(F.isMesh)F.castShadow=!0,F.receiveShadow=!0}),K.plato)N.y+=0.008;if(K.g.position.copy(N),J.add(K.g),K.plato)K.plato.position.copy(N),K.plato.position.y=U+0.004,K.plato.traverse((F)=>{if(F.isMesh)F.receiveShadow=!0}),J.add(K.plato);$.push({group:K.g,home:N,index:Q,tipo:Z,alto:K.alto,radio:K.radio,inclina:K.inclina,boca:K.boca})}return $}var B$={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class U9{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var $L=new Y7(-1,1,1,-1,0,1);class LN extends bJ{constructor(){super();this.setAttribute("position",new XJ([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new XJ([0,2,0,0,2,0],2))}}var QL=new LN;class R6{constructor(J){this._mesh=new I0(QL,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,$L)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class jQ extends U9{constructor(J,$="tDiffuse"){super();if(this.textureID=$,this.uniforms=null,this.material=null,J instanceof J8)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=Q7.clone(J.uniforms),this.material=new J8({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new R6(this.material)}render(J,$,Q){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=Q.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget($),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class zK extends U9{constructor(J,$){super();this.scene=J,this.camera=$,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,$,Q){let Z=J.getContext(),K=J.state;K.buffers.color.setMask(!1),K.buffers.depth.setMask(!1),K.buffers.color.setLocked(!0),K.buffers.depth.setLocked(!0);let W,Y;if(this.inverse)W=0,Y=1;else W=1,Y=0;if(K.buffers.stencil.setTest(!0),K.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),K.buffers.stencil.setFunc(Z.ALWAYS,W,4294967295),K.buffers.stencil.setClear(Y),K.buffers.stencil.setLocked(!0),J.setRenderTarget(Q),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget($),this.clear)J.clear();J.render(this.scene,this.camera),K.buffers.color.setLocked(!1),K.buffers.depth.setLocked(!1),K.buffers.color.setMask(!0),K.buffers.depth.setMask(!0),K.buffers.stencil.setLocked(!1),K.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),K.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),K.buffers.stencil.setLocked(!0)}}class qX extends U9{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class OX{constructor(J,$){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),$===void 0){let Q=J.getSize(new L0);this._width=Q.width,this._height=Q.height,$=new Z8(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:L8}),$.texture.name="EffectComposer.rt1"}else this._width=$.width,this._height=$.height;this.renderTarget1=$,this.renderTarget2=$.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jQ(B$),this.copyPass.material.blending=$9,this.timer=new YK}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,$){this.passes.splice($,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let $=this.passes.indexOf(J);if($!==-1)this.passes.splice($,1)}isLastEnabledPass(J){for(let $=J+1;$<this.passes.length;$++)if(this.passes[$].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let $=this.renderer.getRenderTarget(),Q=!1;for(let Z=0,K=this.passes.length;Z<K;Z++){let W=this.passes[Z];if(W.enabled===!1)continue;if(W.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),W.render(this.renderer,this.writeBuffer,this.readBuffer,J,Q),W.needsSwap){if(Q){let Y=this.renderer.getContext(),X=this.renderer.state.buffers.stencil;X.setFunc(Y.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),X.setFunc(Y.EQUAL,1,4294967295)}this.swapBuffers()}if(zK!==void 0){if(W instanceof zK)Q=!0;else if(W instanceof qX)Q=!1}}this.renderer.setRenderTarget($)}reset(J){if(J===void 0){let $=this.renderer.getSize(new L0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=$.width,this._height=$.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,$){this._width=J,this._height=$;let Q=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize(Q,Z),this.renderTarget2.setSize(Q,Z);for(let K=0;K<this.passes.length;K++)this.passes[K].setSize(Q,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class RX extends U9{constructor(J,$,Q=null,Z=null,K=null){super();this.scene=J,this.camera=$,this.overrideMaterial=Q,this.clearColor=Z,this.clearAlpha=K,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new y0}render(J,$,Q){let Z=J.autoClear;J.autoClear=!1;let K,W;if(this.overrideMaterial!==null)W=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)K=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:Q),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(K);if(this.overrideMaterial!==null)this.scene.overrideMaterial=W;J.autoClear=Z}}var VN={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new y0(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class L6 extends U9{constructor(J,$=1,Q,Z){super();this.strength=$,this.radius=Q,this.threshold=Z,this.resolution=J!==void 0?new L0(J.x,J.y):new L0(256,256),this.clearColor=new y0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);this.renderTargetBright=new Z8(K,W,{type:L8,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let N=new Z8(K,W,{type:L8,depthBuffer:!1});N.texture.name="UnrealBloomPass.h"+U,N.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(N);let F=new Z8(K,W,{type:L8,depthBuffer:!1});F.texture.name="UnrealBloomPass.v"+U,F.texture.generateMipmaps=!1,this.renderTargetsVertical.push(F),K=Math.round(K/2),W=Math.round(W/2)}let Y=VN;this.highPassUniforms=Q7.clone(Y.uniforms),this.highPassUniforms.luminosityThreshold.value=Z,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new J8({uniforms:this.highPassUniforms,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader}),this.separableBlurMaterials=[];let X=[6,10,14,18,22];K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(X[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new L0(1/K,1/W),K=Math.round(K/2),W=Math.round(W/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=$,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let H=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=H,this.bloomTintColors=[new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Q7.clone(B$.uniforms),this.blendMaterial=new J8({uniforms:this.copyUniforms,vertexShader:B$.vertexShader,fragmentShader:B$.fragmentShader,premultipliedAlpha:!0,blending:S9,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new y0,this._oldClearAlpha=1,this._basic=new xJ,this._fsQuad=new R6(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,$){let Q=Math.round(J/2),Z=Math.round($/2);this.renderTargetBright.setSize(Q,Z);for(let K=0;K<this.nMips;K++)this.renderTargetsHorizontal[K].setSize(Q,Z),this.renderTargetsVertical[K].setSize(Q,Z),this.separableBlurMaterials[K].uniforms.invSize.value=new L0(1/Q,1/Z),Q=Math.round(Q/2),Z=Math.round(Z/2)}render(J,$,Q,Z,K){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let W=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),K)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=Q.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=Q.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let Y=this.renderTargetBright;for(let X=0;X<this.nMips;X++)this._fsQuad.material=this.separableBlurMaterials[X],this.separableBlurMaterials[X].uniforms.colorTexture.value=Y.texture,this.separableBlurMaterials[X].uniforms.direction.value=L6.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[X]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[X].uniforms.colorTexture.value=this.renderTargetsHorizontal[X].texture,this.separableBlurMaterials[X].uniforms.direction.value=L6.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[X]),J.clear(),this._fsQuad.render(J),Y=this.renderTargetsVertical[X];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,K)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget(Q),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=W}_getSeparableBlurMaterial(J){let $=[],Q=J/3;for(let W=0;W<J;W++)$.push(0.39894*Math.exp(-0.5*W*W/(Q*Q))/Q);let Z=[],K=[];for(let W=1;W<J;W+=2){let Y=$[W],X=W+1<J?$[W+1]:0,H=Y+X;Z.push((W*Y+(W+1)*X)/H),K.push(H)}return new J8({defines:{KERNEL_PAIRS:Z.length},uniforms:{colorTexture:{value:null},invSize:{value:new L0(0.5,0.5)},direction:{value:new L0(0.5,0.5)},centerWeight:{value:$[0]},gaussianOffsets:{value:Z},gaussianWeights:{value:K}},vertexShader:`

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

				}`})}}L6.BlurDirectionX=new L0(1,0);L6.BlurDirectionY=new L0(0,1);var yQ={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class LX extends U9{constructor(){super();this.isOutputPass=!0,this.uniforms=Q7.clone(yQ.uniforms),this.material=new qQ({name:yQ.name,uniforms:this.uniforms,vertexShader:yQ.vertexShader,fragmentShader:yQ.fragmentShader}),this._fsQuad=new R6(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,$,Q){if(this.uniforms.tDiffuse.value=Q.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},RJ.getTransfer(this._outputColorSpace)===uJ)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===a$)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===r$)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===t$)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===n7)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===JQ)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===$Q)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===e$)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget($),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var A8=(()=>{let J=7;return()=>{return J=Math.imul(J,1664525)+1013904223>>>0,J/4294967296}})();function VX(J,$=256,Q=256){let Z=document.createElement("canvas");Z.width=$,Z.height=Q,J(Z.getContext("2d"),$,Q);let K=new c8(Z);return K.colorSpace=Q8,K}function BN(J="255,214,150"){return VX(($,Q,Z)=>{let K=$.createRadialGradient(Q/2,Z/2,0,Q/2,Z/2,Q/2);K.addColorStop(0,`rgba(${J},1)`),K.addColorStop(0.18,`rgba(${J},.55)`),K.addColorStop(0.5,`rgba(${J},.12)`),K.addColorStop(1,`rgba(${J},0)`),$.fillStyle=K,$.fillRect(0,0,Q,Z)})}var DN=new _(-0.55,-0.035,-0.83).normalize();function ZL(J){let $=new AJ,Q=new I0(new H8(80,32,16),new J8({side:D8,depthWrite:!1,fog:!1,uniforms:{uSol:{value:DN}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 uSol;
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
   }`}));Q.renderOrder=-10,$.add(Q);let Z=220,K=new Float32Array(Z*3),W=new Float32Array(Z*3);for(let U=0;U<Z;U++){let N=A8(),F=A8()*Math.PI*2,G=0.45+N*0.55,E=Math.sqrt(1-G*G),O=0.25+0.55*A8()*G;K.set([Math.cos(F)*E*75,G*75,Math.sin(F)*E*75],U*3),W.set([O*0.85,O*0.9,O],U*3)}let Y=new bJ;Y.setAttribute("position",new tJ(K,3)),Y.setAttribute("color",new tJ(W,3)),$.add(new Y$(Y,new Z6({size:1.3,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0,opacity:0.45})));let X=new I0(new J7(2.1,40),new xJ({color:"#f6e7cc",fog:!1}));X.position.set(26,11,58),X.lookAt(0,1,0),$.add(X);let H=new K$(new J6({map:BN("255,226,200"),fog:!1,transparent:!0,opacity:0.28,depthWrite:!1,blending:S9}));return H.scale.setScalar(13),H.position.copy(X.position),$.add(H),J.add($),$}function KL(J){let $=new Map,Q=(F,G=0,E=0)=>{let O=F+G+E;if(!$.has(O))$.set(O,{m:new o0({color:G?F:new y0(F).multiplyScalar(0.85),roughness:0.9,emissive:G||"#000",emissiveIntensity:E}),g:[]});return $.get(O)},Z=(F,G,E,O,B,R=0)=>{F.rotateY(R),F.translate(E,O,B),G.g.push(F)},K=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0"],W=-20;while(W<20){let F=3.4+A8()*2.6,G=3+A8()*2.8,E=10.5+A8()*0.8,O=K[Math.floor(A8()*K.length)];Z(new _J(F,G,2.4),Q(O),W+F/2,G/2,E+1.2),Z(new _J(F+0.12,0.18,2.6),Q("#d9d2bf"),W+F/2,G+0.09,E+1.2);let B=Math.max(1,Math.floor(F/1.5));for(let R=0;R<B;R++){let q=W+(R+0.5)*F/B,M=A8()<0.4,k=A8()<0.2,V=M?Q(k?"#9fc3ff":"#ffd08a",k?"#6f9cff":"#ffb35a",k?1.6:2.2):Q("#2a3436");if(Z(new VJ(0.75,0.95),V,q,1.55,E-0.005,Math.PI),G>4.2)Z(new VJ(0.7,0.8),A8()<0.35?Q("#ffd08a","#ffb35a",1.5):Q("#2a3436"),q,G-1.1,E-0.005,Math.PI);Z(new _J(0.9,0.06,0.12),Q("#2c3432"),q,2.08,E-0.06)}for(let R=0;R<Math.floor(F/0.22);R++)Z(new _J(0.018,0.9,0.018),Q("#1b2224"),W+0.11+R*0.22,0.45,E-0.55);Z(new _J(F,0.04,0.04),Q("#1b2224"),W+F/2,0.9,E-0.55),W+=F+0.15}Z(new _J(44,0.16,1.8),Q("#8a8578"),0,0.08,9.6);let Y=[-14,-4,6,16];for(let F of Y)Z(new LJ(0.09,0.12,7,8),Q("#6b6457"),F,3.5,9.2),Z(new _J(1.6,0.08,0.08),Q("#4f4a40"),F,6.6,9.2);for(let F=0;F<Y.length-1;F++)for(let G of[0,-0.25,0.3]){let E=new _(Y[F],6.6+G,9.2),O=new _(Y[F+1],6.6+G,9.2),B=E.clone().lerp(O,0.5);B.y-=0.55,Z(new f8(new n8(E,B,O),16,0.012,4),Q("#101517"),0,0,0)}for(let[F,G,E]of[[-9,12.8,7.5],[11,13.1,8.4],[2.5,13.4,6.4]]){let O=new $7([new _(F,0,G),new _(F+0.3,E*0.5,G),new _(F+0.8,E,G-0.2)]);Z(new f8(O,12,0.16,6),Q("#5d5445"),0,0,0);for(let B=0;B<9;B++){let R=B/9*Math.PI*2,q=new W6(0.28,2.6,4,1);q.rotateZ(Math.PI/2+0.55),q.translate(1.3,0,0),q.rotateY(R),Z(q,Q("#34503a"),F+0.8,E,G-0.2)}}let X=[];for(let{m:F,g:G}of $.values()){let E=E$(G,!1);if(G.forEach((B)=>B.dispose()),!E)continue;let O=new I0(E,F);O.receiveShadow=!0,J.add(O),X.push(O)}let H=new W7("#ffa35c",6,14,1.8);H.position.set(6,5.9,8.6),J.add(H);let U=new I0(new H8(0.14,12,8),new o0({color:"#ffcf94",emissive:"#ff9a45",emissiveIntensity:5}));U.position.copy(H.position),J.add(U);let N=new I0(new LJ(0.03,0.03,1.3,6),new o0({color:"#4f4a40"}));return N.rotation.z=Math.PI/2,N.position.set(6,6.05,8.9),J.add(N),{merged:X,farol:H}}function WL(J,$){let Q=new AJ;Q.position.copy($),J.add(Q);let Z=new I0(new H8(0.038,16,12),new o0({color:"#fff4d6",emissive:"#ffd08a",emissiveIntensity:9}));Z.scale.y=1.25,Q.add(Z);let K=new I0(new LJ(0.018,0.02,0.05,10),new o0({color:"#2b2a26",roughness:0.6}));K.position.y=0.065,Q.add(K);let W=new I0(new LJ(0.004,0.004,1.1,5),new o0({color:"#15181a"}));W.position.y=0.64,Q.add(W);let Y=new K$(new J6({map:BN(),transparent:!0,opacity:0.55,depthWrite:!1,blending:S9}));Y.scale.setScalar(0.75),Q.add(Y);let X=[],H=new J6({color:"#3b3026",transparent:!0,opacity:0.85,depthWrite:!1});for(let U=0;U<6;U++){let N=new K$(H);N.scale.setScalar(0.012+A8()*0.008),Q.add(N),X.push({s:N,r:0.07+A8()*0.12,w:2+A8()*4,f:A8()*6,y:0.05+A8()*0.08,k:1.3+A8()})}return{g:Q,halo:Y,polillas:X}}function YL(){let J=new Q$;J.add(new I0(new H8(10,24,12),new J8({side:D8,uniforms:{uSol:{value:DN}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform vec3 uSol;void main(){float l=dot(normalize(vP.xz+vec2(1e-4)),normalize(uSol.xz))*.5+.5;vec3 hor=mix(vec3(.3,.25,.36),vec3(.85,.45,.25),pow(l,2.5));gl_FragColor=vec4(mix(hor,vec3(.05,.07,.17),smoothstep(-.05,.7,vP.y))*mix(.35,1.,smoothstep(-.3,0.,vP.y)),1.);}"})));let $=(Q,Z,K,W,Y,X)=>{let H=new I0(new VJ(K,W),new xJ({color:new y0(Q).multiplyScalar(Z),side:oJ}));H.position.set(...Y),H.lookAt(...X),J.add(H)};return $("#ffcf94",6,1.2,1.2,[0,6,0],[0,0,0]),$("#dff3ea",2,5,2,[0,2.5,-8],[0,1,0]),J}function MN({scene:J,renderer:$,camera:Q,controls:Z,software:K,bulbLight:W}){function Y(){let v=new CQ($),y=YL(),u=v.fromScene(y,0.02);J.environment?.dispose?.(),J.environment=u.texture,J.environmentIntensity=0.75,v.dispose(),y.traverse((b)=>{b.geometry?.dispose(),b.material?.dispose()})}Y(),J.background=new y0("#2a2d4a"),J.fog=new e7("#5a5670",0.017);let X=ZL(J),H=KL(J),U=new _(0,k0.surfaceY+1.3,0),N=WL(J,U),F=VX((v,y,u)=>{let b=v.createRadialGradient(y/2,u*0.62,0,y/2,u*0.62,y/2);b.addColorStop(0,"rgba(255,196,110,.95)"),b.addColorStop(0.45,"rgba(255,170,80,.35)"),b.addColorStop(1,"rgba(255,150,60,0)"),v.fillStyle=b,v.fillRect(0,0,y,u)},256,128),G=new I0(new VJ(0.62,0.26),new xJ({map:F,transparent:!0,opacity:0,depthWrite:!1,blending:S9,toneMapped:!1}));G.rotation.x=-Math.PI/2,G.position.y=k0.surfaceY+0.0012,G.renderOrder=3,J.add(G);let E={i:-1,ang:0,alfa:0,objetivo:0,pos:new _},O=(v)=>VX((y,u,b)=>{y.strokeStyle=`rgba(${v},1)`,y.lineWidth=u*0.09,y.beginPath(),y.arc(u/2,b/2,u*0.36,0,Math.PI*2),y.stroke();let r=y.createRadialGradient(u/2,b/2,0,u/2,b/2,u/2);r.addColorStop(0,`rgba(${v},.5)`),r.addColorStop(1,`rgba(${v},0)`),y.fillStyle=r,y.fillRect(0,0,u,b)},128,128),B=["227,174,85","111,183,201"].map((v)=>{let y=new I0(new VJ(0.036,0.036),new xJ({map:O(v),transparent:!0,opacity:0,depthWrite:!1,blending:S9,toneMapped:!1}));return y.rotation.x=-Math.PI/2,y.position.y=k0.surfaceY+0.0015,y.renderOrder=3,J.add(y),y}),R=null,q=Q.clone(),M=new _,k=new _,V=null,L=null,P=null,A=!1;function D(){if(V)return;let v=$.getDrawingBufferSize(new L0),y=new Z8(v.x,v.y,{type:L8,samples:4});V=new OX($,y),V.addPass(new RX(J,q)),L=new L6(new L0(v.x/2,v.y/2),0.4,0.5,3.2),P=new jQ({uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uVineta:{value:0.34},uGrano:{value:0.018}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uTiempo,uVineta,uGrano;varying vec2 vUv;
    float azar(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTiempo*43.7)*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     vec2 q=vUv-.5;float v=1.-uVineta*smoothstep(.25,.85,length(q*vec2(1.15,1.)));
     c.rgb*=v;
     // Sombras hacia el lila y luces cálidas: el atardecer con el bombillo ya prendido.
     float l=dot(c.rgb,vec3(.2126,.7152,.0722));
     c.rgb*=mix(vec3(.96,.95,1.06),vec3(1.04,1.,.93),smoothstep(.02,.4,l));
     c.rgb+=(azar(vUv*vec2(1920.,1080.))-.5)*uGrano*(.4+l);
     gl_FragColor=c;}`}),V.addPass(P),V.addPass(new LX)}function I(v){if(A=!K&&v==="high",A)D();N.halo.visible=!0,H.farol.visible=v==="high"}function d(v,y){if(V)V.setPixelRatio($.getPixelRatio()),V.setSize(v,y);q.aspect=Q.aspect,q.updateProjectionMatrix()}function f(v,y,{reduced:u,view:b,ends:r,temblor:m=0}){if(q.copy(Q),!u){if(M.set(Math.sin(v*0.11)*0.012+Math.sin(v*0.037)*0.008,Math.sin(v*0.083+1)*0.007,Math.cos(v*0.097)*0.01),m)M.add(k.set(Math.sin(v*97)*m,Math.sin(v*113)*m*0.6,Math.cos(v*89)*m));q.position.add(M),k.copy(Z.target).addScaledVector(M,0.35),q.lookAt(k)}if(q.updateMatrixWorld(),N.halo.material.opacity=0.5+0.05*Math.sin(v*23)*Math.sin(v*1.7)+(u?0:0.03*Math.sin(v*3.1)),!u)for(let Y0 of N.polillas){let j=v*Y0.w+Y0.f;Y0.s.position.set(Math.cos(j)*Y0.r,Y0.y+Math.sin(j*Y0.k)*0.05,Math.sin(j*1.3)*Y0.r)}let e=b?.phase==="playing";if(e&&b.turn!=null){let[Y0,j,o]=k9[b.turn],G0=k0.boardLimit+0.075;if(E.i!==b.turn)E.i=b.turn,E.destino=new _(Y0*G0/k0.seatDistance,0,j*G0/k0.seatDistance),E.angDestino=o;E.pos.lerp(E.destino,1-Math.exp(-y*6));let t=E.angDestino-E.ang;t=Math.atan2(Math.sin(t),Math.cos(t)),E.ang+=t*(1-Math.exp(-y*6)),E.objetivo=0.55+(u?0:0.08*Math.sin(v*2.2))}else E.objetivo=0;E.alfa+=(E.objetivo-E.alfa)*(1-Math.exp(-y*4)),G.material.opacity=E.alfa,G.visible=E.alfa>0.01,G.position.set(E.pos.x,k0.surfaceY+0.0012,E.pos.z),G.rotation.set(-Math.PI/2,0,E.ang);for(let Y0=0;Y0<2;Y0++){let j=B[Y0],o=e&&r?r[Y0]:null;if(!o){j.material.opacity=Math.max(0,j.material.opacity-y*3),j.visible=j.material.opacity>0.01;continue}j.visible=!0,j.position.set(o.x,k0.surfaceY+0.0015,o.z);let G0=u?1:1+0.12*Math.sin(v*3.4+Y0*1.3);j.scale.setScalar(G0),j.material.opacity=Math.min(0.7,j.material.opacity+y*3)}if(P)P.uniforms.uTiempo.value=v%100}function n(){if(A&&V)V.render();else $.render(J,q)}function X0(){V?.dispose()}return{vista:q,frame:f,render:n,resize:d,calidad:I,dispose:X0,bulbPos:U,entorno:Y}}var wJ=(J=0,$=0,Q=0)=>new _(J,$,Q),T9=Math.PI/180,wK=Math.PI*2,jK=(J)=>J<=0?0:J>=1?1:J*J*(3-2*J),AK=(J,$,Q)=>jK((J-$+Q)/(2*Q)),O8=(J,$)=>J+Math.random()*($-J),D$=(J)=>J[Math.floor(Math.random()*J.length)];function BX(J,$){if($>3.3)return-0.15*AK($,3.5,0.12)+0.31*AK($,8.7,0.12);return-0.15*AK(J,4.65,0.12)+0.16*AK(J,11.7,0.12)}var XL={"luis-upright":{voz:"m",camisa:[[188,256],[0.28,1.1],[0.08,1.1]],pantalon:[[-400,400],[-0.1,0.28],[0.44,1.1]],piel:[[-16,32],[0.3,0.82],[0.14,1.1]]},marisol:{voz:"f",camisa:[[-20,24],[0.62,1.1],[0.2,1.1]],pantalon:[[188,256],[0.16,1.1],[0.03,0.86]],piel:[[-6,40],[0.16,0.64],[0.2,1.1]]},carmen:{voz:"f",camisa:[[30,60],[0.46,1.1],[0.36,1.1]],pantalon:[[58,150],[0.08,1.1],[0.03,0.62]],piel:[[-10,30],[0.2,0.66],[0.16,1.1]]},"rafa-upright":{voz:"m",camisa:[[-400,400],[-0.1,0.35],[0.52,1.1]],pantalon:[[-14,34],[0.25,0.85],[0.02,0.35]],piel:[[-16,32],[0.3,0.85],[0.37,1.1]]}},HL=["#e9e6de","#a1302a","#3e6a47","#c99a3a","#6f9fc8","#232326","#7c7f82","#d88c9b","#24345a","#d8694f","#2f7f7a","#9b88ba","#e3c7a0","#5b3a5e"],UL=["#27324d","#1d1d20","#b6a37d","#5c5f63","#5b7596","#55573a","#4f3b2c","#8a2f2a"],NL=["#27324d","#1d1d20","#6b2f3a","#3e5a47","#d9d3c6","#5b7596","#7a5a3a"],GL=[[0.8,0.75,0.71],[0.66,0.6,0.56],[0.52,0.46,0.42],[1.12,1.08,1.05],[0.72,0.66,0.62]],FL={"luis-upright":["#6f9fc8","#24345a","#e9e6de","#b6a37d"],marisol:["#d8694f","#e3c7a0","#a1302a","#c99a3a","#27324d","#5b7596"],carmen:["#c99a3a","#e3c7a0","#3e5a47","#55573a"]},EL=["#1f2a44","#a1302a","#1d1d20","#e9e6de","#2f5e3b","#c99a3a"],qL=`
vec3 tenir( vec3 c, vec4 tela ) {
 float luz = dot( c, vec3( .2126, .7152, .0722 ) );
 c = mix( c, min( colCamisa * ( luz / lums.x ), vec3( 1.2 ) ), tela.r );
 c = mix( c, min( colPantalon * ( luz / lums.y ), vec3( 1.2 ) ), tela.g );
 return mix( c, c * tonoPiel, tela.b );
}`,OL=`
#ifdef USE_MAP
 vec4 sampledDiffuseColor = texture2D( map, vMapUv );
 diffuseColor *= vec4( tenir( sampledDiffuseColor.rgb, texture2D( mascara, vMapUv ) ), sampledDiffuseColor.a );
#endif`,RL=`
#ifdef USE_EMISSIVEMAP
 vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
 totalEmissiveRadiance *= tenir( emissiveColor.rgb, texture2D( mascara, vEmissiveMapUv ) );
#endif`,DX=new Float32Array(256).map((J,$)=>{let Q=$/255;return Q<=0.04045?Q/12.92:((Q+0.055)/1.055)**2.4}),fQ=()=>new Promise((J)=>setTimeout(J,0));function MX(J,[$,Q],Z){return jK((J-$+Z)/(2*Z))*(1-jK((J-Q+Z)/(2*Z)))}function LL(J,$){let Q=document.createElement("canvas");Q.width=Q.height=$;let Z=Q.getContext("2d",{willReadFrequently:!0}),K=J.geometry,W=K.attributes.uv,Y=K.attributes.skinIndex,X=K.attributes.skinWeight,H=K.index,U=J.skeleton.bones.findIndex((F)=>F.name==="Head");if(U<0||!W||!H)return null;let N=(F)=>{let G=0;for(let E=0;E<4;E++)if(Y.getComponent(F,E)===U)G+=X.getComponent(F,E);return G};Z.fillStyle=Z.strokeStyle="#fff",Z.lineWidth=2;for(let F=0;F<H.count;F+=3){let G=[H.getX(F),H.getX(F+1),H.getX(F+2)];if(N(G[0])+N(G[1])+N(G[2])<1.5)continue;let E=Math.floor(Math.min(...G.map((B)=>W.getX(B)))),O=Math.floor(Math.min(...G.map((B)=>W.getY(B))));for(let[B,R]of[[0,0],[-1,0],[0,-1],[-1,-1]])Z.beginPath(),G.forEach((q,M)=>{let k=(W.getX(q)-E+B)*$,V=(W.getY(q)-O+R)*$;M?Z.lineTo(k,V):Z.moveTo(k,V)}),Z.closePath(),Z.fill(),Z.stroke()}return Z.getImageData(0,0,$,$).data}async function VL(J,$,Q,Z){let W=document.createElement("canvas");W.width=W.height=512;let Y=W.getContext("2d",{willReadFrequently:!0});Y.drawImage(J,0,0,512,512);let X=Y.getImageData(0,0,512,512).data,H=new Uint8Array(1048576),U=[0,0,0,0],N=LL(Q,512);await fQ();let F=(O,B,R,[q,M,k])=>{let V=q[0]<0&&O>180?O-360:O;return MX(V,q,5)*MX(B,M,0.04)*MX(R,k,0.04)};for(let O=0;O<512;O+=64){for(let B=O*512;B<(O+64)*512;B++){let R=X[B*4]/255,q=X[B*4+1]/255,M=X[B*4+2]/255,k=Math.max(R,q,M),V=Math.min(R,q,M),L=k-V,P=k,A=k>0?L/k:0,D=0;if(L>0.00001)D=k===R?((q-M)/L+6)%6*60:k===q?((M-R)/L+2)*60:((R-q)/L+4)*60;let I=N?1-N[B*4]/255:1,d=F(D,A,P,$.camisa)*I,f=F(D,A,P,$.pantalon)*(1-d)*I,n=F(D,A,P,$.piel)*(1-d-f);H[B*4]=d*255,H[B*4+1]=f*255,H[B*4+2]=Math.max(0,n)*255,H[B*4+3]=255;let X0=0.2126*DX[X[B*4]]+0.7152*DX[X[B*4+1]]+0.0722*DX[X[B*4+2]];U[0]+=X0*d,U[1]+=d,U[2]+=X0*f,U[3]+=f}await fQ()}let G=new Uint8Array(262144);for(let O=0;O<3;O++){for(let[B,R]of[[Math.max,1],[Math.max,512],[Math.min,1],[Math.min,512]]){for(let q=0;q<262144;q++){let M=R===1?q%512:Math.floor(q/512),k=H[q*4+O];for(let V=-3;V<=3;V++){let L=M+V;if(V&&L>=0&&L<512)k=B(k,H[(q+V*R)*4+O])}G[q]=k}for(let q=0;q<262144;q++)H[q*4+O]=G[q]}await fQ()}let E=new $6(H,512,512);return E.wrapS=Z.wrapS,E.wrapT=Z.wrapT,E.generateMipmaps=!0,E.minFilter=Q9,E.magFilter=X8,E.needsUpdate=!0,{tex:E,lums:new L0(U[1]?U[0]/U[1]:0.2,U[3]?U[2]/U[3]:0.2)}}function BL(J,$){let Q=J.clone(),Z={mascara:{value:$.mascara},lums:{value:$.lums},colCamisa:{value:new y0},colPantalon:{value:new y0},tonoPiel:{value:new y0(1,1,1)}};return Q.onBeforeCompile=(K)=>{Object.assign(K.uniforms,Z),K.fragmentShader=K.fragmentShader.replace("void main() {",`uniform sampler2D mascara;
uniform vec2 lums;
uniform vec3 colCamisa;
uniform vec3 colPantalon;
uniform vec3 tonoPiel;
`+qL+`
void main() {`).replace("#include <map_fragment>",OL).replace("#include <emissivemap_fragment>",RL)},Q.customProgramCacheKey=()=>"transeunte",{m:Q,u:Z}}function TX(J){let $=J.length;return(Q)=>{Q-=Math.floor(Q);let Z=$-1;for(let G=0;G<$;G++)if(J[G][0]<=Q)Z=G;let K=J[Z],W=J[(Z+1)%$],Y=W[0]+(Z+1===$?1:0),X=(Q-K[0])/(Y-K[0]),H=J[(Z-1+$)%$][1],U=K[1],N=W[1],F=J[(Z+2)%$][1];return 0.5*(2*U+(-H+N)*X+(2*H-5*U+4*N-F)*X*X+(-H+3*U-3*N+F)*X*X*X)}}var kN=TX([[0,23],[0.12,19],[0.3,6],[0.5,-9],[0.62,-12],[0.75,2],[0.88,21]]),DL=TX([[0,4],[0.12,15],[0.28,7],[0.45,5],[0.6,33],[0.72,58],[0.86,26],[0.95,4]]),ML=TX([[0,14],[0.08,5],[0.14,0],[0.42,0],[0.52,-9],[0.62,-30],[0.7,-16],[0.8,1],[0.92,9]]),yK=wJ(),vK=wJ(),N9=wJ(),hQ=wJ(),bQ=wJ(),SK=wJ(),kX=wJ(),CX=wJ(0,1,0),CN=wJ(),kL=wJ(1,0,0),m9=new UJ,PX=new UJ,PN=new UJ,fK=new UJ,vQ=new UJ;function V6(J,$){J.matrixWorld.decompose(yK,PN,vK),J.parent.matrixWorld.decompose(yK,fK,vK),J.quaternion.copy(fK.invert()).multiply($).multiply(PN),J.updateMatrixWorld(!0)}function CL(J,$){J.parent.matrixWorld.decompose(yK,fK,vK),J.quaternion.copy(fK.invert()).multiply($),J.updateMatrixWorld(!0)}function v7(J,$,Q){N9.setFromMatrixPosition(J.matrixWorld),hQ.setFromMatrixPosition($.matrixWorld),bQ.subVectors(hQ,N9).normalize(),V6(J,m9.setFromUnitVectors(bQ,Q))}var f7=(J,$,Q)=>SK.set(J,$,Q).normalize().applyQuaternion(vQ);function IN(J){let{h:$,marcha:Q,fase:Z}=J;for(let[X,H,U,N]of J.rest)X.position.copy(H),X.quaternion.copy(U),X.scale.copy(N);let K=Q*0.016*Math.sin(wK*(Z-0.05))+(1-Q)*0.012*Math.sin(J.t*0.7);J.root.position.set(J.base.x+K,J.base.y,J.base.z),J.holder.updateMatrixWorld(!0),J.holder.matrixWorld.decompose(yK,vQ,vK),kX.set(1,0,0).applyQuaternion(vQ),CN.set(0,0,1).applyQuaternion(vQ);let W=-5*T9*Math.cos(wK*Z)*Q;if(V6($.Hips,m9.setFromAxisAngle(CX,W)),V6($.Hips,m9.setFromAxisAngle(kX,(3.5*Q+0.5)*T9)),$.Spine)V6($.Spine,m9.setFromAxisAngle(CX,-W*1.4));for(let[X,H]of[[1,$.LeftShoulder],[-1,$.RightShoulder]])if(H)V6(H,m9.setFromAxisAngle(CN,-X*7*T9));for(let[X,H,U]of[[1,"Left",Z],[-1,"Right",Z+0.5]]){let N=(Q*kN(U)+(1-Q)*(X>0?1.5:-1))*T9,F=(Q*DL(U)+(1-Q)*4)*T9,G=Q*ML(U)*T9,E=X*(0.03+0.02*(1-Q));if(v7($[H+"UpLeg"],$[H+"Leg"],f7(E,-Math.cos(N),Math.sin(N))),v7($[H+"Leg"],$[H+"Foot"],f7(E*0.6,-Math.cos(N-F),Math.sin(N-F))),PX.setFromAxisAngle(CX,-X*9*T9),m9.setFromAxisAngle(kL,-G).multiply(PX).multiply(J.pieReposo[X>0?0:1]),CL($[H+"Foot"],m9.premultiply(vQ)),G<0&&$[H+"ToeBase"])V6($[H+"ToeBase"],m9.setFromAxisAngle(kX,0.8*G))}for(let[X,H,U]of[[1,"Left",Z],[-1,"Right",Z+0.5]]){if(X<0&&(J.saluda>0||J.alcanza>0))continue;let N=(Q*-0.72*(kN(U)-5)+(1-Q)*-2+(J.brazos||0))*T9,F=(16+(1-Q)*-4+10*Math.max(0,N/(12*T9)))*T9,G=(9+(1-Q)*-2)*T9;v7($[H+"Arm"],$[H+"ForeArm"],f7(X*Math.sin(G)*Math.cos(N),-Math.cos(G)*Math.cos(N),Math.sin(N))),v7($[H+"ForeArm"],$[H+"Hand"],f7(X*Math.sin(G)*Math.cos(N+F),-Math.cos(G)*Math.cos(N+F),Math.sin(N+F)))}if(J.saluda>0){let X=J.saluda,H=Math.sin(J.t*wK*1.8)*0.38*X;v7($.RightArm,$.RightForeArm,f7(-0.75*X-(1-X)*0.15,0.25*X-(1-X)*0.98,0.3*X+0.05)),v7($.RightForeArm,$.RightHand,f7(-Math.sin(H)-0.15,Math.cos(H)*X-(1-X)*0.9,0.18))}if(J.alcanza>0&&!(J.saluda>0)){let X=jK(J.alcanza),H=J.alcanzaAlto||0;v7($.RightArm,$.RightForeArm,f7(-0.16*X-0.14*(1-X),-0.98*(1-X)+(-0.3+0.85*H)*X,0.9*X)),v7($.RightForeArm,$.RightHand,f7(-0.06*X-0.12*(1-X),-0.9*(1-X)+(-0.05+0.75*H)*X,0.2+0.8*X))}if($.Head&&$.headfront){let X=J.mirar;for(let[H,U]of[[$.neck,0.45],[$.Head,1]]){if(!H)continue;N9.setFromMatrixPosition($.Head.matrixWorld),hQ.setFromMatrixPosition($.headfront.matrixWorld),bQ.subVectors(hQ,N9).normalize(),SK.subVectors(X,N9).normalize();let N=bQ.angleTo(SK);if(N<0.001)continue;m9.setFromUnitVectors(bQ,SK),V6(H,PX.identity().slerp(m9,Math.min(1,U*Math.min(N,1.1)/N)))}}let Y=1/0;for(let[X,H]of J.apoyos)if(N9.copy(H).applyMatrix4(X.matrixWorld),N9.y<Y)Y=N9.y;J.root.position.y-=(Y-J.holder.position.y)/J.holder.scale.y,J.root.updateMatrixWorld(!0)}var l9=(...J)=>J.map(([$,Q])=>wJ($,0,Q)),IX=l9([10,-0.25],[6.5,-0.3],[4.6,-0.4],[3.3,-0.62],[2.25,-1.1],[1.2,-1.8]),PL=l9([1.2,-1.8],[0.35,-2.15],[-0.6,-2.05],[-1.35,-1.65]),zX=l9([-1.35,-1.65],[-2.35,-1],[-2.65,0.2],[-4.5,0.95],[-9,1.15],[-17,1.2]),zN=l9([1.2,-1.8],[0.45,-2.45],[-0.45,-3.05],[-1.3,-3.42]),AN=l9([-1.3,-3.42],[-1.2,-2.75],[-1.28,-2.1],[-1.35,-1.65]),H7=wJ(-2.4,0,-3.95),M$=wJ(-2.85,0,-4.12),TN=wJ(-1.3,0,-3.42),TK=(J,$)=>Math.atan2($.x-J.x,$.z-J.z),AX=(...J)=>J.reduce(($,Q)=>$.concat($.length?Q.slice(1):Q),[]),B6=(J)=>J.slice().reverse(),_K={enfrente:()=>{let J=O8(9.45,10.05),$=l9([-34,J],[-12,J+O8(-0.1,0.1)],[12,J+O8(-0.1,0.1)],[34,J]);return Math.random()<0.5?$:B6($)},lateral:()=>{let J=O8(12.15,12.45),$=l9([J,-36],[J,-10],[J,1.2],[J+1.2,2.25],[20,2.3],[36,2.4]);return Math.random()<0.5?$:B6($)}};function _N({scene:J,camera:$,renderer:Q,cuerpos:Z,pocos:K=!1}){let W=[],Y=[],X=[],H=new Q6,U=new QJ,N=new w8(wJ(),1.25),F=null,G=0,E=0,O=O8(6,14),B=O8(20,35),R=-1e9,q=null,M=!1,k=!1;(async()=>{for(let j of Z){if(M)return;let o=XL[j.nombre];if(!o||!j.gltf)continue;let G0=null;j.gltf.scene.traverse((x)=>{if(x.isSkinnedMesh&&!G0)G0=x});let t=G0?.material?.map?.image;if(!t)continue;try{let{tex:x,lums:T}=await VL(t,o,G0,G0.material.map),h={...j,reglas:o,voz:o.voz,material:G0.material,mascara:x,lums:T,zCiclo:null};await fQ();let l=V(h);if(j.nombre==="rafa-upright"){if(l)y(l)}else{if(l){if(Y.push(l),Y.length===1)await Q?.compileAsync?.(l.holder,$,J).catch(()=>{})}W.push(h)}}catch(x){console.warn("Transeúnte sin ropa",j.nombre,x)}await fQ()}})();function V(j){let o=q$(j.gltf.scene),G0=new AJ;G0.add(o),o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(1,1,1);let t={},x=[],T=null;if(o.traverse((t0)=>{if(t0.isBone){t[t0.name]=t0;let C0=j.gltf.reposo?.get(t0.name);if(C0)t0.position.copy(C0.position),t0.quaternion.copy(C0.quaternion),t0.scale.copy(C0.scale),x.push([t0,C0.position,C0.quaternion,C0.scale])}if(t0.isSkinnedMesh)T=t0}),!T||!t.Hips||!t.LeftFoot||!t.RightFoot)return null;let{m:h,u:l}=BL(j.material,j);T.material=h,T.castShadow=!1,T.receiveShadow=!0,T.frustumCulled=!0,T.morphTargetInfluences?.fill(0),G0.updateMatrixWorld(!0),T.computeBoundingBox();let Z0=T.boundingBox.clone().applyMatrix4(T.matrixWorld),J0=wJ().setFromMatrixPosition(t.Hips.matrixWorld),O0=wJ(-J0.x,-Z0.min.y,-J0.z);o.position.copy(O0),G0.updateMatrixWorld(!0),T.computeBoundingSphere(),T.boundingSphere.radius*=1.25;let E0=[];for(let t0 of["Left","Right"]){let C0=t[t0+"Foot"],GJ=t[t0+"ToeBase"]||C0,OJ=wJ().setFromMatrixPosition(C0.matrixWorld),jJ=wJ().setFromMatrixPosition(GJ.matrixWorld);E0.push([C0,C0.worldToLocal(wJ(OJ.x,0,OJ.z-0.05))],[GJ,GJ.worldToLocal(wJ(jJ.x,0,jJ.z+0.06))])}let U0=[t.LeftFoot,t.RightFoot].map((t0)=>t0.getWorldQuaternion(new UJ)),S0=null;if(j.voz==="m"&&t.Head)S0=L(T,t.Head);let m0={cuerpo:j,root:o,holder:G0,h:t,rest:x,malla:T,u:l,base:O0,apoyos:E0,pieReposo:U0,gorra:S0,marcha:0,fase:0,t:0,saluda:0,alcanza:0,alcanzaAlto:0,brazos:0,mirar:wJ(),yaw:0,libre:!0};if(j.zCiclo==null)j.zCiclo=P(m0);return m0}function L(j,o){let G0=j.geometry.attributes.position,t=j.geometry.attributes.skinIndex,x=j.geometry.attributes.skinWeight,T=j.skeleton.bones.indexOf(o);if(T<0)return null;let h=new M8,l=wJ();for(let C0=0;C0<G0.count;C0++){let GJ=0;for(let OJ=0;OJ<4;OJ++)if(t.getComponent(C0,OJ)===T)GJ+=x.getComponent(C0,OJ);if(GJ>0.6)j.getVertexPosition(C0,l),h.expandByPoint(l.applyMatrix4(j.matrixWorld))}if(h.isEmpty())return null;let Z0=h.getCenter(wJ()),J0=h.getSize(wJ()),O0=Math.max(J0.x,J0.z*0.8)/2*1.02,E0=new AJ,U0=new o0({color:"#1f2a44",roughness:0.85}),S0=new I0(new H8(1,18,8,0,wK,0,Math.PI*0.5),U0);S0.scale.set(O0*1.06,O0*1.05,O0*1.12),E0.add(S0);let m0=new I0(new LJ(1,1,0.012,18,1,!1,-Math.PI*0.5,Math.PI),U0);m0.scale.set(O0*0.98,1,O0*1.05),m0.position.set(0,0.006,O0*0.86),m0.rotation.x=0.14,E0.add(m0),E0.position.set(Z0.x,h.max.y-O0*0.85,Z0.z-J0.z*0.06),o.updateWorldMatrix(!0,!1);let t0=o.matrixWorld.clone().invert();return E0.updateMatrix(),E0.matrix.premultiply(t0),E0.matrix.decompose(E0.position,E0.quaternion,E0.scale),o.add(E0),E0}function P(j){j.mirar.set(0,1.5,5),j.marcha=1;let o=0,G0=-1,t=[0,0,0,0],x=[0,0,0,0];for(let T=0;T<=96;T++){j.fase=T/96,IN(j);let h=1/0,l=0;j.apoyos.forEach(([J0,O0],E0)=>{if(N9.copy(O0).applyMatrix4(J0.matrixWorld),x[E0]=N9.z,N9.y<h)h=N9.y,l=E0});let Z0=l>>1;if(Z0===G0)o+=Math.max(0,t[l]-x[l]);G0=Z0,t.splice(0,4,...x)}return j.marcha=0,j.fase=0,Math.min(1.7,Math.max(0.9,o))}function A(j){let o=j.cuerpo.nombre==="carmen",G0=FL[j.cuerpo.nombre]||[],t=(T)=>D$(T.filter((h)=>!G0.includes(h)));if(j.u.colCamisa.value.set(t(HL)),j.u.colPantalon.value.set(t(o?NL:UL)),j.u.tonoPiel.value.setRGB(...D$(GL)),j.gorra)j.gorra.visible=Math.random()<0.65,j.gorra.children.forEach((T)=>T.material.color.set(D$(EL)));let x=O8(0.95,1.05);j.holder.scale.set(x*O8(1,1.1),x,x*O8(1,1.06))}function D(j){let o=W.filter((x)=>!j||x.nombre===j);if(!o.length)return null;let G0=D$(o),t=Y.find((x)=>x.libre&&x.cuerpo===G0);if(!t){if(Y.length>=5)return null;if(t=V(G0),!t)return null;Y.push(t)}return t.libre=!1,A(t),t.marcha=0,t.fase=Math.random(),t.saluda=0,t.alcanza=0,t.t=0,J.add(t.holder),t}function I(j){j.libre=!0,J.remove(j.holder);let o=X.indexOf(j);if(o>=0)X.splice(o,1)}function d(j,o){let G0=new $7(j,!1,"centripetal",0.5);return{tipo:"ruta",curva:G0,largo:G0.getLength(),d:0,v:o}}function f(j,o,G0){j.guion=o,j.i=0,j.zona=G0,j.malla.castShadow=G0==="patio",j.velocidad=j.cuerpo.nombre==="carmen"?O8(0.9,1.05):O8(1.02,1.28);for(let h of o)if(h.tipo==="ruta")h.v=j.velocidad;let t=o[0].curva,x=t.getPointAt(0),T=t.getTangentAt(0);j.yaw=Math.atan2(T.x,T.z),j.holder.position.set(x.x,BX(x.x,x.z),x.z),j.holder.rotation.y=j.yaw,X.push(j)}let n=(j,o,G0,t=3.2)=>{let x=o-j.yaw;return x=Math.atan2(Math.sin(x),Math.cos(x)),j.yaw+=Math.max(-t*G0,Math.min(t*G0,x)),j.holder.rotation.y=j.yaw,Math.abs(x)};function X0(j,o,G0){let t=j.guion[j.i];if(!t){if(!j.fijo){I(j);return}j.guion=[u()],j.i=0,t=j.guion[0],t.t0=j.t}if(j.t+=o,t.tipo==="ruta"){let x=j.guion[j.i+1],T=x&&x.tipo!=="ruta",h=t.largo-t.d,l=T?Math.min(1,h/0.55):1;j.marcha+=(Math.min(l,1)-j.marcha)*Math.min(1,o*(l<j.marcha?6:2.2));let Z0=t.v*Math.max(j.marcha,T?0.12:0)*o;t.d=Math.min(t.largo,t.d+Z0),j.fase+=Z0/j.cuerpo.zCiclo;let J0=t.d/t.largo,O0=t.curva.getPointAt(J0),E0=t.curva.getTangentAt(J0);if(j.holder.position.set(O0.x,BX(O0.x,O0.z),O0.z),n(j,Math.atan2(E0.x,E0.z),o),j.mirar.lerp(hQ.set(O0.x+E0.x*6,1.45+BX(O0.x,O0.z)-0.25,O0.z+E0.z*6),1-Math.exp(-o*5)),t.d>=t.largo-0.001){if(j.i++,j.guion[j.i])j.guion[j.i].t0=j.t}}else if(t.tipo==="quieto"){j.marcha=Math.max(0,j.marcha-o*4);let x=j.t-(t.t0??j.t);if(t.yaw!=null)n(j,t.yaw,o,2.2);if(t.miraA?.h?.Head)t.mira=t.miraA.h.Head.getWorldPosition(t.mira||wJ());else if(t.vigila)t.mira=b(t,G0);if(t.mira)j.mirar.lerp(t.mira,1-Math.exp(-o*3));if(t.atender&&!t.pedido){if(t.pedido=!0,F)r(F,j)}if(t.brazo){let T=Math.min(1,x/0.6,(t.dur-x)/0.6);j.alcanza=Math.max(0,T),j.alcanzaAlto=t.brazo.alto;let h=t.brazo.entrega;if(h&&!h.libre)h.alcanza=j.alcanza,h.alcanzaAlto=0.1}if(t.saludo)v(j,t,x,G0);if(x>=t.dur){if(j.i++,j.guion[j.i])j.guion[j.i].t0=j.t;if(j.saluda=0,t.brazo){if(j.alcanza=0,t.brazo.entrega)t.brazo.entrega.alcanza=0}}}}function v(j,o,G0,t){if(!o.decidido){o.decidido=!0;let x=t?.view,T=x&&(x.phase==="lobby"||x.phase==="playing")&&(k||!t.habla?.size&&E>150&&E-R>420);if(k=!1,!T){o.dur=0;return}let h=[0,1,2,3].filter((J0)=>x.bots?.[J0]),l=h.length&&Math.random()<0.8?D$(h):null;o.seat=l,o.cabeza=t.cabezas?.[l??2]?.clone()||wJ(0,1.2,0),R=E;let Z0=l==null?wJ(0,1.2,0):o.cabeza;o.mira=Z0.clone(),o.yaw=Math.atan2(Z0.x-j.holder.position.x,Z0.z-j.holder.position.z)}if(o.dur===0)return;if(j.saluda=G0<0.35?0:Math.min(1,(G0-0.35)/0.35)*(G0>2.6?Math.max(0,1-(G0-2.6)/0.4):1),!o.dicho&&G0>0.45){o.dicho=!0;let x=j.h.Head.getWorldPosition(wJ());q={seat:o.seat,p:x,t0:E,hasta:E+5},dispatchEvent(new CustomEvent("mesa:saludo",{detail:{seat:o.seat,voz:j.cuerpo.voz,pos:x.toArray()}}))}}function y(j){if(j.libre=!1,j.fijo=!0,j.zona="colmado",F=j,j.velocidad=0.8,j.u.colCamisa.value.set("#3e6a47"),j.u.colPantalon.value.set("#23262d"),j.u.tonoPiel.value.setRGB(0.74,0.68,0.64),j.gorra)j.gorra.visible=!0,j.gorra.children.forEach((o)=>o.material.color.set("#a1302a"));j.holder.scale.set(1.04,1.03,1.04),j.malla.castShadow=!0,j.holder.position.copy(H7),j.yaw=0.5,j.holder.rotation.y=j.yaw,j.mirar.set(0,0.8,0),j.guion=[u()],j.i=0,j.guion[0].t0=0,J.add(j.holder)}function u(){return{tipo:"quieto",dur:1e9,yaw:0.5,vigila:!0}}function b(j,o){if(j.cambio&&E<j.cambio)return j.mira;j.cambio=E+O8(3,6.5);let G0=o?.view,t=Math.random(),x=o?.cabezas,T=X.find((h)=>h.zona==="patio");if(T&&t<0.25)return T.h.Head.getWorldPosition(wJ());if(G0?.phase==="playing"&&t<0.55&&x?.[G0.turn])return x[G0.turn].clone();if(t<0.8)return wJ(O8(-0.3,0.3),0.8,O8(-0.3,0.3));return wJ(O8(-4,4),1.5,6)}function r(j,o){let G0=(h,l)=>({tipo:"quieto",dur:h,...l}),t=TK(H7,M$),x=TK(M$,H7),T=TK(H7,TN);j.guion=[G0(1.4,{yaw:T,miraA:o}),G0(0.7,{yaw:t}),d(l9([H7.x,H7.z],[M$.x,M$.z]),0.8),G0(2.2,{yaw:-Math.PI/2,mira:wJ(-3.4,1.75,-4.12),brazo:{alto:1}}),G0(0.7,{yaw:x}),d(l9([M$.x,M$.z],[H7.x,H7.z]),0.8),G0(2.4,{yaw:T,miraA:o,brazo:{alto:0.15,entrega:o}}),G0(4,{yaw:T,miraA:o})];for(let h of j.guion)if(h.tipo==="ruta")h.v=j.velocidad;j.i=0,j.guion[0].t0=j.t}function m(j){let o=Math.random()<0.6,G0=Math.random()<0.5,t=[];if(t.push(d(o?IX:B6(zX),1)),G0)t.push({tipo:"quieto",dur:3.2,saludo:!0});if(t.push(d(o?zN:B6(AN),1)),t.push(F?{tipo:"quieto",dur:O8(14,24),yaw:TK(TN,H7),miraA:F,atender:!0}:{tipo:"quieto",dur:O8(14,24),yaw:Math.PI,mira:wJ(-0.6,1.35,-4.4)}),Math.random()<0.6)t.push(d(AX(AN,zX),1));else t.push(d(AX(B6(zN),B6(IX)),1));return t}function e(){let j=AX(IX,PL,zX);return[d(Math.random()<0.5?j:B6(j),1)]}function Y0(j,o){if(M||!W.length)return;if(j*=window.mesaPrisa||1,E+=j,q){if(q.e=E-q.t0,E>q.hasta)q=null}let G0=document.documentElement.classList.contains("reduced");if(!G0&&!K&&E>O){if(O=E+O8(14,32),X.filter((x)=>x.zona==="calle").length<2){let x=D();if(x)f(x,[d(D$([_K.enfrente,_K.enfrente,_K.lateral])(),1)],"calle")}}if(!G0&&E>B&&!X.some((x)=>x.zona==="patio")){B=E+O8(50,110);let x=D();if(x)f(x,Math.random()<0.65?m(x):e(),"patio")}$.updateMatrixWorld(),H.setFromProjectionMatrix(U.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse));let t=performance.now();for(let x of F?[F,...X]:X.slice()){if(X0(x,j,o),x.libre)continue;if(N.center.copy(x.holder.position).y+=0.9,H.intersectsSphere(N))IN(x)}G+=(performance.now()-t-G)*0.05}return window.mesaTranseunte=(j="cliente",o,G0)=>{if(j==="posa"){let x=D(o);if(!x)return!1;let[T,h,l=0]=G0;return f(x,[d(l9([T-Math.sin(l)*0.3,h-Math.cos(l)*0.3],[T,h]),1),{tipo:"quieto",dur:1e4}],"patio"),!0}let t=D(o);if(!t)return!1;return f(t,j==="cliente"?m(t):j==="saluda"?(()=>{let x=m(t);if(!x.some((T)=>T.saludo))x.splice(1,0,{tipo:"quieto",dur:3.2,saludo:!0});return k=!0,x})():j==="calle"?[d(_K.enfrente(),1)]:e(),j==="calle"?"calle":"patio"),!0},window.mesaGente=()=>X.map((j)=>({cuerpo:j.cuerpo.nombre,pos:j.holder.position.toArray().map((o)=>+o.toFixed(2)),marcha:+j.marcha.toFixed(2),tramo:j.i})),{update:Y0,get saludo(){return q},get ms(){return G},get listos(){return W.length},dispose(){M=!0;for(let j of Y)J.remove(j.holder);if(F)J.remove(F.holder)}}}var D6=Math.PI*2,KJ=(J=0,$=0,Q=0)=>new _(J,$,Q),IL=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function wM(J,{onProgress:$=()=>{}}={}){let Q=new Q$;Q.background=new y0("#2a2d4a"),Q.fog=new e7("#5a5670",0.017);let Z=new G8(42,innerWidth/innerHeight,0.08,90);Z.position.set(3.1,2.65,4.2);let K;try{K=new sY({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let W=new URLSearchParams(location.search).has("hq"),Y=!W&&/SwiftShader|llvmpipe|Software/i.test((()=>{let w=K.getContext(),i=w.getExtension("WEBGL_debug_renderer_info");return i?w.getParameter(i.UNMASKED_RENDERER_WEBGL):""})());K.setSize(innerWidth,innerHeight),K.setPixelRatio(Y?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),K.outputColorSpace=Q8,K.toneMapping=n7,K.toneMappingExposure=1.24,K.shadowMap.enabled=!Y,K.shadowMap.type=c7,K.info.autoReset=!1,J.appendChild(K.domElement);let X=new WX(Z,K.domElement);X.target.set(0,0.8,-0.15),X.enableDamping=!0,X.dampingFactor=0.065,X.enablePan=!1,X.minDistance=0.8,X.maxDistance=4.6,X.minPolarAngle=0.25,X.maxPolarAngle=Math.PI*0.48,X.update();let H=0.5,U=new ZK("#a3a8d8","#6a4e3c",H);Q.add(U);let N=new U$("#ffa06a",0.55);N.position.set(-6,2.6,-9),Q.add(N);let F=new H$("#ffc98a",5.2,7,Math.PI*0.32,0.6,2);F.position.set(0,k0.surfaceY+1.26,0),F.target.position.set(0,0,0);let G=new W7("#ffc07a",0.45,3.2,2);G.position.set(0,k0.surfaceY+1.2,0),Q.add(G),F.castShadow=!0,F.shadow.mapSize.set(Y?1024:2048,Y?1024:2048),F.shadow.focus=0.52,F.shadow.bias=-0.0002,F.shadow.normalBias=0.004,F.shadow.radius=3,F.shadow.camera.near=0.2,F.shadow.camera.far=4,Q.add(F,F.target);let E=new W7("#cfeee0",13,9,2);E.position.set(0,2.5,-3.5),Q.add(E);{let w=new I0(new _J(1.2,0.03,0.03),new o0({color:"#e6fff4",emissive:"#e6fff4",emissiveIntensity:4}));w.position.set(0,3.12,-3.6),Q.add(w)}let O=new Map,B=new Map;function R(w,i=0.85,W0=0){let a=w+","+i+","+W0;if(!O.has(a))O.set(a,new o0({color:w,roughness:i,metalness:W0}));return O.get(a)}function q(w,i,W0,a=[0,0,0],B0=[1,1,1]){let q0=i.uuid;if(!B.has(q0))B.set(q0,{material:i,geos:[]});let z0=new QJ().compose(KJ(...W0),new UJ().setFromEuler(new L9(...a)),KJ(...B0));w.applyMatrix4(z0),B.get(q0).geos.push(w)}function M(w,i,W0,a,B0,q0,z0,x0=0){q(new _J(a,B0,q0),typeof z0==="string"?R(z0):z0,[w,i,W0],[0,x0,0])}function k(w,i,W0,a,B0,q0,z0,x0=10,c0=[0,0,0]){q(new LJ(a,B0,q0,x0),typeof z0==="string"?R(z0):z0,[w,i,W0],c0)}function V(w,i=512,W0=512){let a=document.createElement("canvas");a.width=i,a.height=W0,w(a.getContext("2d"),i,W0);let B0=new c8(a);return B0.colorSpace=Q8,B0.anisotropy=Math.min(8,K.capabilities.getMaxAnisotropy()),B0}let L=191,P=()=>{return L=Math.imul(L,1664525)+1013904223>>>0,L/4294967296},A=V((w,i,W0)=>{w.fillStyle="#65432b",w.fillRect(0,0,i,W0);for(let a=0;a<700;a++){w.strokeStyle=`rgba(${P()>0.5?"170,122,70":"35,22,14"},${0.08+P()*0.2})`,w.lineWidth=0.3+P()*2,w.beginPath();let B0=P()*W0;w.moveTo(0,B0);for(let q0=0;q0<i;q0+=20)w.lineTo(q0,B0+Math.sin(q0*0.013+a)*3);w.stroke()}}),D=new o0({map:A,roughness:0.65,color:"#e7bc8c"}),I=R("#4c3022",0.75),d=R("#287770"),f=R("#d2c5a2"),n=R("#3d938e"),X0=V((w,i,W0)=>{let a=i/2;for(let c0=0;c0<2;c0++)for(let V0=0;V0<2;V0++){let g0=V0*a,WJ=c0*a;w.save(),w.beginPath(),w.rect(g0,WJ,a,a),w.clip(),w.fillStyle="#c4b99f",w.fillRect(g0,WJ,a,a);for(let[CJ,T8]of[[g0,WJ],[g0+a,WJ],[g0,WJ+a],[g0+a,WJ+a]])w.strokeStyle="#8d6450",w.lineWidth=a*0.04,w.beginPath(),w.arc(CJ,T8,a*0.42,0,Math.PI*2),w.stroke(),w.fillStyle="#4f6763",w.beginPath(),w.arc(CJ,T8,a*0.13,0,Math.PI*2),w.fill(),w.strokeStyle="#c4b99f",w.lineWidth=a*0.02,w.beginPath(),w.arc(CJ,T8,a*0.11,0,Math.PI*2),w.stroke();let $J=g0+a/2,kJ=WJ+a/2,pJ=(CJ,T8)=>{w.fillStyle=T8,w.beginPath(),w.moveTo($J,kJ-CJ),w.lineTo($J+CJ,kJ),w.lineTo($J,kJ+CJ),w.lineTo($J-CJ,kJ),w.closePath(),w.fill()};pJ(a*0.2,"#8d6450"),pJ(a*0.13,"#c4b99f"),pJ(a*0.07,"#3a3630"),w.restore(),w.strokeStyle="#7e7563",w.lineWidth=3,w.strokeRect(g0+1.5,WJ+1.5,a-3,a-3)}for(let c0=0;c0<9000;c0++)w.fillStyle=P()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",w.fillRect(P()*i,P()*W0,1+P()*2,1+P()*2);for(let c0=0;c0<40;c0++){let V0=w.createRadialGradient(0,0,0,0,0,1),g0=P()*i,WJ=P()*W0,$J=20+P()*90;w.save(),w.translate(g0,WJ),w.scale($J,$J),V0.addColorStop(0,"rgba(40,34,26,.10)"),V0.addColorStop(1,"rgba(40,34,26,0)"),w.fillStyle=V0,w.fillRect(-1,-1,2,2),w.restore()}},1024,1024);X0.wrapS=X0.wrapT=k7,X0.repeat.set(22.88888888888889,27.77777777777778),M(-5.7,-0.1,-4.575,20.6,0.2,15.85,new o0({map:X0,roughness:0.86,color:"#9d937f"})),M(0,-0.2,8.5,40,0.1,10.3,"#2b3133"),M(0,-0.075,3.45,40,0.15,0.2,"#a8a391");for(let w=-10;w<11;w++)M(w*1.8,-0.146,6.3,0.7,0.008,0.06,"#b9ad83");M(0,1.6,-5.1,7.5,3.4,0.2,d),M(-3.8,1.6,-3.85,0.2,3.4,2.7,d),M(3.8,1.6,-3.85,0.2,3.4,2.7,d),M(-3.48,1.1,-2.52,0.7,2.3,0.32,d),M(3.45,1.1,-2.52,0.8,2.3,0.32,d),M(0,2.95,-2.52,7.5,0.42,0.35,n),M(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let w=0;w<30;w++)M(-4+w*0.276,3.15,-3.7,0.028,0.055,4.6,"#82928a");M(0,0.7,-4.24,3.9,1.4,0.62,D),M(0,1.43,-4.2,4.08,0.1,0.78,D);for(let w=0;w<3;w++)M(-0.6,1.58+w*0.48,-4.78,5.8,0.065,0.38,D),M(-0.6,1.84+w*0.48,-4.98,5.8,0.48,0.065,"#443e30");M(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),M(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");let v=[];for(let w=0;w<29;w++)v.push({pos:[-3.18+w*0.182,2.095,-4.69],scale:0.7+w%5*0.07,color:["#566641","#b0762a","#2e5a45","#7a3024","#c9b36a","#3b4f7a"][w*7%6]});let y=new I7([new L0(0,0),new L0(0.036,0),new L0(0.043,0.025),new L0(0.043,0.17),new L0(0.019,0.205),new L0(0.017,0.285),new L0(0.021,0.29),new L0(0.021,0.305),new L0(0,0.31)],12);v.forEach((w)=>q(y.clone(),R(w.color,0.3),w.pos,[0,0,0],[w.scale,w.scale,w.scale]));for(let[w,i,W0]of[[-3.1,-1.9,"#a8483a"]])for(let a=0;a<3;a++){M(w,0.19+a*0.34,i,0.52,0.3,0.4,W0);for(let B0=0;B0<5;B0++)M(w-0.2+B0*0.1,0.18+a*0.34,i+0.204,0.055,0.16,0.015,"#2c3025")}for(let w=0;w<5;w++){let i=-7-w*3.5;M(i,1.5,-3,3.1,3,3.2,["#d9a35c","#7fb1a4","#d8c7a2","#c98d7c","#a6bf8e"][w]),M(i,2.2,-1.38,1,0.8,0.045,"#b59961"),M(i,2.2,-1.35,0.045,0.86,0.055,"#273e37"),M(i,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let w=0;w<4;w++)k(-5-w*5,2.3,-1,0.08,0.09,4.6,"#665443"),M(-5-w*5,4.2,-1,1.8,0.09,0.09,"#514b3d");function u(w,i,W0,a="#202d28"){let B0=new n8(KJ(...w),KJ(...W0),KJ(...i));q(new f8(B0,20,0.008,4,!1),R(a),[0,0,0])}let b=[];for(let w of[-1.95,1.95])k(w,1.45,2.55,0.035,0.045,2.9,"#5b4a38",8);for(let[w,i,W0]of[[[-2.7,2.9,-2.45],[-1.95,2.85,2.55],0.5],[[2.7,2.9,-2.45],[1.95,2.85,2.55],0.5],[[-1.95,2.85,2.55],[1.95,2.85,2.55],0.32]]){let a=KJ(...w),B0=KJ(...i),q0=a.clone().lerp(B0,0.5);q0.y-=W0*2;let z0=new n8(a,q0,B0);q(new f8(z0,24,0.006,4,!1),R("#1c2320"),[0,0,0]);let x0=Math.round(a.distanceTo(B0)/0.42);for(let c0=1;c0<x0;c0++){let V0=z0.getPointAt(c0/x0);b.push(V0.setY(V0.y-0.035))}}{let w=new H8(0.022,10,8);w.scale(1,1.3,1);let i=["#ffd89a","#ffc27a","#ffe3a8"],W0=new v9(w,new xJ({color:new y0(4.5,4.5,4.5)}),b.length),a=new SJ;b.forEach((B0,q0)=>{a.position.copy(B0),a.updateMatrix(),W0.setMatrixAt(q0,a.matrix),W0.setColorAt(q0,new y0(i[q0%i.length]))}),Q.add(W0)}u([0,3.22,-1.6],[0,3.19,0],[0,3.02,-0.8]);let r=new AJ;r.position.set(4.3,0,-1.7),Q.add(r);let m=new I0(new LJ(0.1,0.15,4.5,9),R("#696047"));m.position.y=2.25,r.add(m);for(let w=0;w<9;w++){let i=new I0(new H8(1,10,5),R(w%2?"#4a654c":"#344e3d"));i.scale.set(0.27,0.075,1.5),i.position.set(Math.sin(w*D6/9)*0.72,4.35,Math.cos(w*D6/9)*0.72),i.rotation.set(0.23,w*D6/9,0),r.add(i)}let e=new V8({map:A,color:"#d9a877",roughness:0.5,clearcoat:0.55,clearcoatRoughness:0.28}),Y0=new I0(new S8(k0.tableWidth,k0.tableThickness,k0.tableWidth,3,0.035),e);Y0.position.y=k0.tableCenterY,Y0.castShadow=!0,Y0.receiveShadow=!0,Q.add(Y0);let j=V((w,i,W0)=>{w.fillStyle="#2f5b47",w.fillRect(0,0,i,W0);for(let B0=0;B0<W0;B0+=2)for(let q0=0;q0<i;q0+=2){let z0=(P()-0.5)*14,x0=((q0>>1)+(B0>>1))%2?4:-4;w.fillStyle=`rgb(${47+z0+x0},${91+z0+x0},${71+z0+x0})`,w.fillRect(q0,B0,2,2)}for(let B0=0;B0<4;B0++){let q0=B0*Math.PI/2,z0=i/2+Math.sin(q0)*i*0.36,x0=W0/2+Math.cos(q0)*W0*0.36,c0=w.createRadialGradient(z0,x0,0,z0,x0,i*0.2);c0.addColorStop(0,"rgba(120,150,120,.16)"),c0.addColorStop(1,"rgba(120,150,120,0)"),w.fillStyle=c0,w.fillRect(0,0,i,W0)}let a=w.createRadialGradient(i/2,W0/2,i*0.1,i/2,W0/2,i*0.62);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,0,.28)"),w.fillStyle=a,w.fillRect(0,0,i,W0)},512,512),o=new I0(new S8(k0.feltWidth,0.012,k0.feltWidth,2,0.02),new V8({map:j,roughness:0.97,sheen:0.8,sheenRoughness:0.55,sheenColor:new y0("#9fc7a8")}));o.position.y=k0.feltCenterY,o.receiveShadow=!0,Q.add(o);let G0=k0.tableWidth/2-0.07;for(let w of[-G0,G0])for(let i of[-G0,G0])M(w,0.35,i,0.075,0.68,0.075,I);let t=["#C8402F","#6FB7C9"];for(let w=0;w<4;w++){let[i,W0,a]=k9[w],B0=k0.feltWidth/2-0.012,q0=new I0(new VJ(k0.feltWidth*0.72,0.009),new o0({color:t[w%2],roughness:0.9}));q0.rotation.set(-Math.PI/2,0,a),q0.position.set(i*B0/k0.seatDistance,k0.surfaceY+0.0006,W0*B0/k0.seatDistance),q0.receiveShadow=!0,Q.add(q0)}let x=new o0({roughness:0.92,map:V((w,i,W0)=>{w.fillStyle="#8f7446",w.fillRect(0,0,i,W0);let a=12,B0=i/a;for(let q0=0;q0<a;q0++)for(let z0=0;z0<a;z0++){let x0=(z0+q0)%2===0;for(let c0=0;c0<3;c0++){let V0=150+P()*45|0;w.fillStyle=`rgb(${V0+30},${V0+8},${V0-45})`;let g0=c0*B0/3+B0*0.04,WJ=B0/3-B0*0.08;if(x0)w.fillRect(z0*B0+1,q0*B0+g0,B0-2,WJ);else w.fillRect(z0*B0+g0,q0*B0+1,WJ,B0-2)}}w.fillStyle="rgba(40,28,14,.18)";for(let q0=0;q0<=a;q0++)w.fillRect(q0*B0-1,0,2,W0),w.fillRect(0,q0*B0-1,i,2)},256,256)});for(let w=0;w<4;w++){let[i,W0,a]=k9[w],B0=new AJ;B0.position.set(i,0,W0),B0.rotation.y=a,Q.add(B0);let q0=R(w%2?"#5e9fb2":"#b53f2e",0.62),z0=(x0,c0,V0,g0,WJ,$J,kJ=q0,pJ=0.008)=>{let CJ=KJ(g0,WJ,$J).applyAxisAngle(KJ(0,1,0),a).add(KJ(i,0,W0));q(new S8(x0,c0,V0,2,pJ),kJ,CJ.toArray(),[0,a,0])};z0(k0.chairSeatWidth-0.04,0.035,0.5,0,k0.chairSeatY,0,x,0.01);for(let x0 of[-1,1])z0(0.04,0.05,0.54,x0*(k0.chairSeatWidth/2-0.02),k0.chairSeatY-0.005,0);for(let x0 of[-1,1])z0(k0.chairSeatWidth,0.05,0.04,0,k0.chairSeatY-0.005,x0*0.25);for(let x0 of[-0.24,0.24])for(let c0 of[-0.21,0.21])z0(0.04,k0.chairSeatY,0.04,x0,k0.chairSeatY/2,c0);for(let x0 of[-0.24,0.24])z0(0.024,0.024,0.42,x0,0.15,0);z0(0.48,0.024,0.024,0,0.15,0.21);for(let x0 of[-0.24,0.24])z0(0.04,0.52,0.04,x0,k0.chairSeatY+0.26,-0.23);for(let x0 of[0.2,0.33,0.46])z0(0.46,x0===0.46?0.07:0.045,0.022,0,k0.chairSeatY+x0,-0.23)}function T(w,i,W0,a,B0,q0=60){let z0=V((x0,c0,V0)=>{x0.fillStyle=a,x0.fillRect(0,0,c0,V0),x0.fillStyle=B0,x0.textAlign="center",x0.textBaseline="middle",x0.font=`bold ${q0}px Georgia`,x0.fillText(w,c0/2,V0/2)},1024,256);return new I0(new VJ(i,W0),new xJ({map:z0}))}let h=T("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);h.position.set(0,2.94,-2.33),Q.add(h);let l=T("MESA",0.11,0.029,"#284e3e","#81906b",77);{let w=document.createElement("canvas");w.width=512,w.height=136;let i=new c8(w);i.colorSpace=Q8;let W0=()=>{let a=w.getContext("2d");a.clearRect(0,0,512,136),a.font=`96px ${document.fonts?.check?.("96px Shrikhand")?"Shrikhand":"Georgia"}`,a.textAlign="center",a.textBaseline="middle",a.fillStyle="rgba(170,205,170,.42)",a.fillText("Mesa",256,72),i.needsUpdate=!0};W0(),document.fonts?.load?.("96px Shrikhand").then(W0).catch(()=>{}),l.material=new o0({map:i,transparent:!0,depthWrite:!1,roughness:1})}l.rotation.x=-Math.PI/2,l.position.set(0,k0.surfaceY+0.001,0.3),Q.add(l);let Z0=new AJ;Z0.position.set(-0.9,2.62,-3.45),Z0.rotation.x=-Math.PI/2,Q.add(Z0),k(-0.9,2.9,-3.45,0.015,0.015,0.56,"#777a68",8),k(-0.9,3.16,-3.45,0.075,0.075,0.025,"#767763",12);let J0=new I0(new H8(0.075,12,8),R("#41493d"));Z0.add(J0);for(let w=0;w<5;w++){let i=new I0(new _J(0.13,0.5,0.025),R("#85856e",0.88,0.05));i.position.set(Math.sin(w*D6/5)*0.285,Math.cos(w*D6/5)*0.285,0),i.rotation.z=-w*D6/5,Z0.add(i)}let O0=new AJ;O0.position.set(-12,0.05,5.2),Q.add(O0);for(let w of[-0.36,0.36]){let i=new I0(new f9(0.19,0.038,7,14),R("#182221"));i.position.set(w,0.2,0),O0.add(i)}let E0=new I0(new S8(0.65,0.17,0.2,2,0.04),R("#823e2f",0.45,0.25));E0.position.y=0.49,O0.add(E0);let U0=new I0(new _J(0.35,0.06,0.22),R("#202725"));U0.position.set(-0.08,0.61,0),O0.add(U0);let S0=new I0(new LJ(0.015,0.015,0.45,6),R("#8c9c96",0.4,0.5));S0.position.set(0.32,0.59,0),S0.rotation.z=-0.3,O0.add(S0);let m0=EN({scene:Q,texture:V,mat:R,box:M,cylinder:k,random:P,teal:d,wood:D,storeSign:h}),t0=qN({scene:Q,texture:V,mat:R,box:M,cylinder:k,staticGeo:q,random:P,renderer:K});ON({scene:Q,random:P});for(let{material:w,geos:i}of B.values()){let W0=E$(i.some((a)=>!a.index)?i.map((a)=>a.index?a.toNonIndexed():a):i,!1);if(W0){let a=new I0(W0,w);a.receiveShadow=!0,W0.computeBoundingBox(),a.castShadow=W0.boundingBox.distanceToPoint(KJ(0,0.8,0))<1.6&&W0.boundingBox.getSize(KJ()).length()<8,Q.add(a)}i.forEach((a)=>a.dispose())}let C0=new AJ,GJ=new AJ;Q.add(C0,GJ);let OJ=new S8(k0.tileLength,k0.tileThickness,k0.tileWidth,3,0.0024),jJ=new V8({color:"#ede5d2",roughness:0.5,clearcoat:0.3,clearcoatRoughness:0.4}),p=new V8({color:"#e2dac6",roughness:0.42,clearcoat:0.7,clearcoatRoughness:0.3}),sJ=new o0({color:"#b98b3e",roughness:0.28,metalness:1}),FJ=new LJ(0.0019,0.0019,0.0009,12),DJ=new o0({color:"#0b0a09",roughness:0.55}),S=new o0({color:"#2a2622",roughness:0.6}),C=new LJ(k0.pipRadius,k0.pipRadius,0.0007,14),g=new _J(0.0014,0.0005,k0.tileWidth*0.8),K0=new Set([OJ,C,g,FJ]),D0=new Set([jJ,p,DJ,S,sJ]),T0=[e,o.material,jJ,p].map((w)=>[w,{clearcoat:w.clearcoat,sheen:w.sheen}]);function v0(w,i,W0=!1){let a=new AJ,B0=new I0(OJ,W0?p:jJ);if(B0.castShadow=!0,B0.receiveShadow=!0,a.add(B0),!W0){let q0=[];if([w,i].forEach((c0,V0)=>IL[c0].forEach((g0)=>q0.push(KJ((V0===0?-1:1)*k0.tileLength/4+(g0%3-1)*k0.pipColumnSpacing,k0.tileThickness/2+0.0005,(Math.floor(g0/3)-1)*k0.pipRowSpacing)))),q0.length){let c0=new v9(C,DJ,q0.length),V0=new QJ;q0.forEach((g0,WJ)=>c0.setMatrixAt(WJ,V0.makeTranslation(g0.x,g0.y,g0.z))),a.add(c0)}let z0=new I0(g,S);z0.position.y=k0.tileThickness/2+0.0002,a.add(z0);let x0=new I0(FJ,sJ);x0.position.y=k0.tileThickness/2+0.0004,a.add(x0)}return a}function N0(w){return KJ(w.x,k0.surfaceY+k0.tileThickness/2+0.001,w.z)}let R0=new I0(new f9(0.2,0.006,5,38),new xJ({color:"#e8bf70",transparent:!0,opacity:0.7}));R0.rotation.x=-Math.PI/2,R0.position.y=0.027,Q.add(R0);let A0=[],s0=[],_0=[],P0=[],JJ=new $X,e0=0,zJ=4,s=[];P0.push(...RN(Q));let f0=KJ(),F0=KJ(),j0=KJ(),l0=KJ(),M0=new QJ,b0=KJ(),YJ=KJ();function cJ(w){let i=null;if(w.root.traverse(($J)=>{if($J.isSkinnedMesh&&$J.morphTargetDictionary&&!i)i=$J}),!i||i.morphTargetDictionary.parpadeo==null)return;w.cara={mesh:i,iP:i.morphTargetDictionary.parpadeo,iS:i.morphTargetDictionary.sonrisa};let W0=i.geometry.attributes.position,a=i.userData?.boca;if(a){let $J=1e9,kJ=0;for(let pJ=0;pJ<W0.count;pJ++){let CJ=(W0.getX(pJ)-a[0])**2+(W0.getY(pJ)-a[1])**2+(W0.getZ(pJ)-a[2])**2;if(CJ<$J)$J=CJ,kJ=pJ}w.bocaMundo=(pJ)=>{return i.skeleton.update(),i.getVertexPosition(kJ,pJ).applyMatrix4(i.matrixWorld)}}let B0=i.userData?.ojos,q0=i.userData?.parpado;if(!B0||!q0)return;let z0=i.geometry.attributes.position,x0=($J)=>{let kJ=1e9,pJ=0;for(let CJ=0;CJ<z0.count;CJ++){let T8=(z0.getX(CJ)-$J[0])**2+(z0.getY(CJ)-$J[1])**2+(z0.getZ(CJ)-$J[2])**2;if(T8<kJ)kJ=T8,pJ=CJ}return pJ},c0=new VJ(0.027,0.0125,8,4);c0.translate(0,-0.00625,0);let V0=c0.attributes.position,g0=[];for(let $J=0;$J<V0.count;$J++){let kJ=V0.getX($J)/0.0135,pJ=-V0.getY($J)/0.0125;V0.setZ($J,0.0032*Math.cos(kJ*Math.PI/2)*(0.5+0.5*pJ));let CJ=pJ>0.85?0.45:1;g0.push(CJ,CJ,CJ)}c0.setAttribute("color",new XJ(g0,3)),c0.computeVertexNormals();let WJ=new o0({color:new y0().setRGB(...q0,Q8),roughness:0.7,vertexColors:!0});w.parpados=B0.map(($J)=>{let kJ=new I0(c0,WJ);return kJ.visible=!1,kJ.frustumCulled=!1,Q.add(kJ),{m:kJ,k:x0($J)}})}function yJ(w){let i=w.parpados;if(!i||!w.cara)return;let W0=w.parpadeo||0;if(W0<0.03){for(let z0 of i)z0.m.visible=!1;return}let a=w.cara.mesh;a.skeleton.update();let B0=a.getVertexPosition(i[0].k,f0).applyMatrix4(a.matrixWorld).clone(),q0=a.getVertexPosition(i[1].k,f0).applyMatrix4(a.matrixWorld).clone();if(w.head.getWorldPosition(b0),w.front.getWorldPosition(YJ),l0.subVectors(YJ,b0).normalize(),F0.subVectors(q0,B0).normalize(),j0.crossVectors(l0,F0).normalize(),j0.y<0)j0.negate();F0.crossVectors(j0,l0).normalize(),M0.makeBasis(F0,j0,l0);for(let[z0,x0]of[[i[0],B0],[i[1],q0]])z0.m.visible=!0,z0.m.quaternion.setFromRotationMatrix(M0),z0.m.position.copy(x0).addScaledVector(j0,0.0052).addScaledVector(l0,0.0024),z0.m.scale.set(1,W0,1)}async function i8(w,i){try{$(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][w]}…`,e0/zJ);let W0=await JJ.loadAsync(`/models/${i}.glb`);s0[w]=W0,W0.reposo=new Map(PK(W0.scene).map(($J)=>[$J.bone.name,$J]));let a=W0.scene,B0=new AJ;B0.add(a);let q0=new LQ(a);if(W0.animations[0])q0.clipAction(W0.animations.find(($J)=>$J.name==="Seated")||W0.animations[0]).play();q0.setTime(k0.neutralPoseTime),a.updateMatrixWorld(!0),a.traverse(($J)=>{if($J.isSkinnedMesh)$J.computeBoundingBox();if($J.isMesh)$J.castShadow=!0,$J.receiveShadow=!0,$J.frustumCulled=!1,$J.material.roughness=0.83});let z0=new M8().setFromObject(a),x0=a.getObjectByName("Hips"),c0=x0?.getWorldPosition(KJ())||z0.getCenter(KJ());a.position.set(-c0.x,-z0.min.y,-c0.z);let[V0,g0,WJ]=k9[w];if(B0.position.set(V0,0,g0),B0.rotation.y=WJ,Q.add(B0),A0[w]={root:a,holder:B0,index:w,pose:PK(a),head:a.getObjectByName("Head"),neck:a.getObjectByName("neck"),front:a.getObjectByName("headfront"),chest:a.getObjectByName("Spine"),hips:a.getObjectByName("Hips"),lomo:a.getObjectByName("Spine02"),muslos:[a.getObjectByName("LeftUpLeg"),a.getObjectByName("RightUpLeg")],hombros:[[1,a.getObjectByName("LeftShoulder")],[-1,a.getObjectByName("RightShoulder")]],spine:a.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map(($J)=>({lado:$J,hombro:a.getObjectByName($J+"Shoulder"),brazo:a.getObjectByName($J+"Arm"),antebrazo:a.getObjectByName($J+"ForeArm"),mano:a.getObjectByName($J+"Hand")}))},A0[w].bebida=P0.find(($J)=>$J.index===w),cJ(A0[w]),e0++,$(e0===4?"The table is ready.":`${e0} of 4 seats ready`,e0/zJ),_0.length===0&&U7>0)z(U7)}catch(W0){s.push(i),console.error("Character load failed",i,W0),$(`Could not load ${i}. Reload to retry.`,e0/zJ)}}let o8=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((w,i)=>i8(i,w))),u9=null;o8.then(()=>{if(!xK)u9=_N({scene:Q,camera:Z,renderer:K,pocos:Y,cuerpos:[["rafa-upright",0],["luis-upright",2],["marisol",1],["carmen",3]].filter(([,w])=>s0[w]).map(([w,i])=>({nombre:w,gltf:s0[i]}))})});let k$=null,b7=null,xQ="",M6=null,B8=MN({scene:Q,renderer:K,camera:Z,controls:X,software:Y,bulbLight:F});B8.calidad("high");let a8=new Set,k6=new Map,gQ=[0,1,2,3].map(()=>KJ()),C$=(w)=>{let i=w.detail||{};if(i.active)a8.add(i.seat),k6.set(i.seat,i.type);else a8.delete(i.seat)};window.addEventListener("mesa:botvoice",C$);let d9=null,U7=0,P$="",I$=0,pQ="attract",U8=null,G9=[],bK=0,mQ=0;function C6(w){while(w.children.length){let i=w.children.pop();i.parent=null,i.traverse((W0)=>{if(W0.isMesh&&!K0.has(W0.geometry))W0.geometry.dispose();if(W0.isMesh&&!D0.has(W0.material))W0.material.dispose()})}}function z(w){U7=w;let i=Math.min(8,w);for(let W0=_0.length-1;W0>=i;W0--)Q.remove(_0[W0].holder),_0.pop();while(_0.length<i&&s0.filter(Boolean).length){let W0=_0.length,a=s0[W0%4]||s0.find(Boolean),B0=q$(a.scene),q0=new AJ;q0.add(B0);let z0=new LQ(B0);if(a.animations[0])z0.clipAction(a.animations.find((g0)=>g0.name==="Seated")||a.animations[0]).play();z0.setTime(k0.neutralPoseTime),B0.updateMatrixWorld(!0),B0.traverse((g0)=>{if(g0.isSkinnedMesh)g0.computeBoundingBox();if(g0.isMesh)g0.castShadow=!1,g0.frustumCulled=!1});let x0=new M8().setFromObject(B0),c0=B0.getObjectByName("Hips")?.getWorldPosition(KJ())||x0.getCenter(KJ());B0.position.x-=c0.x,B0.position.y-=x0.min.y,B0.position.z-=c0.z,q0.position.set(-2.5+W0%4*1.66,0,-2.5-Math.floor(W0/4)*0.65),q0.rotation.y=0,Q.add(q0);let V0=new I0(new _J(0.56,0.06,0.54),f);V0.position.set(0,k0.chairSeatY,0),q0.add(V0),_0.push({root:B0,holder:q0,pose:PK(B0),head:B0.getObjectByName("Head"),neck:B0.getObjectByName("neck"),front:B0.getObjectByName("headfront"),chest:B0.getObjectByName("Spine"),spine:B0.getObjectByName("Spine01"),index:W0+4})}}let c=!1,H0=KJ();function Q0(){let w=Z.position,i=X.target;if(H0.subVectors(w,i),H0.length()>4.6)w.copy(i).addScaledVector(H0.normalize(),4.6);w.z=Math.max(w.z,-2.1),w.x=y9.clamp(w.x,-4.9,4.9),w.y=y9.clamp(w.y,0.35,5.2)}let $0=-1,w0=null,u0=X.minDistance;function h0(w,i,W0){if(document.documentElement.classList.contains("reduced"))return;let a=KJ(1,0,1).normalize(),B0=-9;for(let[z0,x0]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let c0=KJ(z0,0,x0).normalize(),V0=c0.x*w.x+c0.z*w.z;if(V0>B0)B0=V0,a=c0}let q0=w.clone().addScaledVector(a,0.3);if(q0.x=y9.clamp(q0.x,-0.4,0.4),q0.z=y9.clamp(q0.z,-0.4,0.4),q0.y=k0.surfaceY+(W0?0.12:0.19),!w0)u0=X.minDistance;X.minDistance=0.1,w0={pos:w0?.pos||Z.position.clone(),target:w0?.target||X.target.clone(),at:p8.elapsedTime+3.4},U8={from:Z.position.clone(),to:q0,fromTarget:X.target.clone(),toTarget:w.clone().setY(w.y+0.01),t:0,dur:0.45}}function i0(w="table"){if(X.minDistance=w==="seat"||w==="close"?0.3:0.7,X.minPolarAngle=w==="overhead"?0.01:0.25,Z.aspect<0.95&&w==="table")w="overhead";let i,W0=KJ(0,0.8,0);if(w==="attract")i=KJ(0.75,1.3,4.4),W0=KJ(-1,1.4,-1.2);else if(w==="overhead")i=KJ(0.001,1.86,0.34),W0=KJ(0,k0.surfaceY,0.02);else if(w==="seat")i=KJ(0,1.36,0.74),W0=KJ(0,0.82,-0.12);else if(w==="close")i=KJ(0.62,1.3,1),W0=KJ(-0.03,0.85,-0.08);else i=KJ(0.8,1.89,1.24),W0=KJ(0,0.9,-0.2);if(w!=="attract"&&w!=="seat"&&Z.aspect<1.3){let a=Math.min(2.4,Math.pow(1.6/Z.aspect,0.8));i=W0.clone().add(i.clone().sub(W0).multiplyScalar(a))}if(A0[0])A0[0].root.visible=w!=="seat";w0=null,X.minDistance=Math.min(X.minDistance,u0),U8={from:Z.position.clone(),to:i,fromTarget:X.target.clone(),toTarget:W0,t:0}}let n0=KJ(0,1,0),EJ=new UJ().setFromAxisAngle(KJ(1,0,0),0.12),MJ=new UJ().setFromAxisAngle(n0,Math.PI/2),a0=new UJ().setFromAxisAngle(KJ(0,0,1),Math.PI/2),vJ=k0.tableCenterY+k0.tableThickness/2+k0.tileLength/2*Math.cos(0.12)+k0.tileThickness/2*Math.sin(0.12)+0.001;function aJ(w,i,W0){let a=k9[w][2];return W0.quaternion.setFromAxisAngle(n0,a).multiply(EJ).multiply(MJ).multiply(a0),W0.position.set(i,vJ,-k0.rackRadius).applyAxisAngle(n0,a),W0}let TJ=new v9(OJ,p,28);TJ.count=0,TJ.castShadow=!0,TJ.receiveShadow=!0,TJ.frustumCulled=!1,GJ.add(TJ);let gJ=[[],[],[],[]],iJ=new SJ,d0=[0,0,0,0],N8="",IJ=new Set;function y8(w){let i=0;for(let W0=0;W0<4;W0++){let a=IJ.has(W0)?0:d0[W0],B0=gJ[W0];while(B0.length<a)B0.push((B0.length-(a-1)/2)*k0.rackSpacing);B0.length=a;for(let q0=0;q0<a;q0++){let z0=(q0-(a-1)/2)*k0.rackSpacing;B0[q0]+=(z0-B0[q0])*(1-Math.exp(-w*10)),aJ(W0,B0[q0],iJ),iJ.updateMatrix(),TJ.setMatrixAt(i++,iJ.matrix)}}TJ.count=i,TJ.instanceMatrix.needsUpdate=!0}let k8=new AJ;Q.add(k8);let r8=new Map,c9="",hJ="",rJ=(()=>{let w=7,i=()=>(w=w*16807%2147483647)/2147483647,W0=[],a=0.2;for(let B0=0;B0<28;B0++){let q0=!1;for(let z0=0;z0<600&&!q0;z0++){let x0=i()*Math.PI*2,c0=Math.sqrt(i())*a,V0=Math.cos(x0)*c0,g0=Math.sin(x0)*c0*0.82;if(W0.every((WJ)=>Math.hypot(WJ.x-V0,WJ.z-g0)>=0.058))W0.push({x:V0,z:g0,ry:i()*Math.PI}),q0=!0}if(!q0)a+=0.012,B0--}return W0})(),F9=k0.surfaceY+k0.tileThickness/2+0.0003;function nJ(){for(let w=0;w<28;w++){let i=v0(0,0,!0),W0=rJ[w];i.position.set(W0.x,F9,W0.z),i.rotation.y=W0.ry,C0.add(i)}}let C8=(w)=>w*w*(3-2*w),N7=new UJ().setFromAxisAngle(KJ(1,0,0),Math.PI),lQ=new UJ().setFromAxisAngle(n0,-Math.PI/2);function wN(w,i){w.revealed.forEach((W0,a)=>{let B0=W0.length,q0=k9[a][2];W0.forEach((z0,x0)=>{let c0=(x0-(B0-1)/2)*k0.rackSpacing,V0=v0(z0.a,z0.b);aJ(a,c0,iJ);let g0=iJ.quaternion.clone().multiply(N7),WJ=iJ.position.clone(),$J=KJ(c0,k0.surfaceY+k0.tileThickness/2+0.001,-k0.rackRadius+0.047).applyAxisAngle(n0,q0),kJ=new UJ().setFromAxisAngle(n0,q0).multiply(lQ);V0.position.copy(WJ),V0.quaternion.copy(g0),V0.visible=!1,C0.add(V0),G9.push({obj:V0,from:WJ,to:$J,qFrom:g0,qTo:kJ,elapsed:-(i+a*0.3+x0*0.055),duration:0.42,revela:a,ultima:x0===B0-1})})})}function _X(w,i=0){d9=w;{let q0=w&&(w.phase==="handEnd"||w.phase==="seriesEnd")&&w.result,z0=q0?w.handNo+":"+w.phase:"";if(z0&&z0!==xQ)b7={t:p8.elapsedTime+0.5,team:w.result.team??null};if(!q0)b7=null;xQ=z0}if(U7!==i)z(i);let W0=!w||w.phase==="lobby"?"pila":"mano"+w.handNo;if(W0!==c9){c9=W0,C6(C0),r8.clear(),G9=G9.filter((q0)=>q0.reparto);for(let q0 of A0)if(q0)q0.jugada=null;if(W0==="pila")nJ()}if(w&&w.chain?.length){let q0=JN(w.chain,w.moves),z0=w.event,x0=["domino","capicua","tranque"].includes(z0?.type),c0=w.moves[w.moves.length-1],V0=z0?.type==="domino"||z0?.type==="capicua",g0=z0?.type==="play"?z0.tile:x0&&c0?.type==="play"?c0.tile:null;w.chain.forEach((WJ,$J)=>{if(r8.has(WJ.id))return;let kJ=v0(WJ.x,WJ.y),pJ=N0(q0[$J]);if(kJ.position.copy(pJ),kJ.rotation.y=q0[$J].yaw,kJ.updateMatrix(),C0.add(kJ),r8.set(WJ.id,kJ),WJ.id!==g0||WJ.seat==null)return;aJ(WJ.seat,0,iJ);let CJ={obj:kJ,from:iJ.position.clone(),to:pJ.clone(),qFrom:iJ.quaternion.clone(),qTo:kJ.quaternion.clone(),elapsed:0,duration:V0?0.7:0.55,golpe:V0};if(kJ.position.copy(CJ.from),kJ.quaternion.copy(CJ.qFrom),G9.push(CJ),x0)h0(pJ,WJ.seat,V0);bK=performance.now();let T8=A0[WJ.seat];if(k$={p:pJ.clone(),t:p8.elapsedTime+CJ.duration},T8)T8.reaction={time:p8.elapsedTime},T8.jugada={t0:p8.elapsedTime,obj:kJ,anim:CJ,hasta:pJ.clone()}})}if(w?.phase==="playing"&&w.handNo!==I$&&w.moves.length===0){I$=w.handNo,C6(k8),G9=G9.filter((q0)=>!q0.reparto),mQ=performance.now()+3300;for(let q0=0;q0<4;q0++)gJ[q0]=Array.from({length:7},(z0,x0)=>(x0-3)*k0.rackSpacing);for(let q0=0;q0<28;q0++){let z0=q0%4,x0=Math.floor(q0/4),c0=v0(0,0,!0),V0=rJ[q0],g0=KJ(V0.x,F9,V0.z);c0.position.copy(g0),c0.rotation.y=V0.ry,k8.add(c0);let WJ=aJ(z0,(x0-3)*k0.rackSpacing,new SJ);G9.push({obj:c0,from:g0,to:WJ.position.clone(),qFrom:c0.quaternion.clone(),qTo:WJ.quaternion.clone(),elapsed:-q0*0.065,duration:1.1,reparto:!0})}}let a=w?.moves?.[w.moves.length-1],B0=w?w.handNo+":"+w.moves.length:"";if(a?.type==="pass"&&hJ!==B0){hJ=B0;let q0=A0[a.seat];if(q0)q0.toque={t0:p8.elapsedTime}}{let q0=w&&(w.phase==="handEnd"||w.phase==="seriesEnd")&&w.revealed,z0=q0?"r"+w.handNo:"";if(!q0)N8="",IJ.clear();else if(z0!==N8){N8=z0;let x0=w.result?.type;wN(w,x0==="domino"||x0==="capicua"?3.4:x0==="tranque"?2.5:1.2)}}d0=[0,1,2,3].map((q0)=>!w||w.phase==="lobby"?0:w.counts[q0]??0),R0.visible=!1,M6=w?.phase==="playing"&&w.chain?.length?$N(w.chain,w.moves):null}let p8=new XK,z$=0,hK=0,uQ=0,A$=60,xK=!1,dQ=!1,T$=null,P6="high",wX=null,cQ=performance.now(),nQ=0,SX=!1,SN=new URLSearchParams(location.search).has("debug"),jX=F.intensity,h7=KJ(),jN=KJ(0,k0.surfaceY,0);function gK(){if(xK||dQ){T$=null;return}T$=requestAnimationFrame(gK);let w=p8.getDelta(),i=Math.min(w,0.06),W0=wX??p8.elapsedTime,a=performance.now();if(hK++,uQ+=w,uQ>1){if(A$=hK/uQ,hK=0,uQ=0,!W&&!nQ&&P6==="high"&&a-cQ>9000&&a-cQ<30000&&A$<30)nQ=a,pK.quality("low"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"low"}));else if(!W&&P6==="low"&&!SX&&a-(nQ||cQ)>9000&&a-(nQ||cQ)<40000&&A$<20)SX=!0,pK.quality("min"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"min"}))}z$++,K.info.reset();let B0=document.documentElement.classList.contains("reduced");if(w0&&p8.elapsedTime>w0.at)U8={from:Z.position.clone(),to:w0.pos,fromTarget:X.target.clone(),toTarget:w0.target,t:0,dur:1.2},w0=null,X.minDistance=u0;let q0=0;if($0>=0){let V0=p8.elapsedTime-$0;if(V0<0.5){let g0=0.0045*Math.exp(-V0*8)*Math.sin(V0*D6*18);C0.position.y=g0,GJ.position.y=g0,q0=B0?0:0.004*Math.exp(-V0*9),F.intensity=jX*(1+0.35*Math.exp(-V0*14))}else $0=-1,C0.position.y=0,GJ.position.y=0,F.intensity=jX}if(U8){U8.t=Math.min(1,U8.t+i/(U8.dur||1.1));let V0=C8(U8.t);if(Z.position.lerpVectors(U8.from,U8.to,V0),X.target.lerpVectors(U8.fromTarget,U8.toTarget,V0),U8.t===1)U8=null}if(!B0)Z0.rotation.z=W0*3.5,r.rotation.z=Math.sin(W0*0.47)*0.009,m0.update(W0),t0.update(W0);let z0=d9,x0={dt:i,jugando:z0?.phase==="playing",turno:z0?.turn,habla:a8,hablaTipo:k6,foco:k$,fin:b7,cabezas:A0.map((V0,g0)=>V0?.head?V0.head.getWorldPosition(gQ[g0]):null)};if(u9)u9.update(i,{view:z0,habla:a8,cabezas:x0.cabezas}),x0.saludo=u9.saludo;for(let V0 of A0){if(!V0)continue;IK(V0,W0,B0,x0),yJ(V0)}for(let V0=0;V0<_0.length;V0++)if((z$+V0)%2===0)IK(_0[V0],W0,B0,x0);G9=G9.filter((V0)=>{if(V0.elapsed+=i,V0.elapsed<0)return!0;let g0=Math.min(1,V0.elapsed/V0.duration);if(V0.revela!=null){V0.obj.visible=!0,IJ.add(V0.revela);let WJ=C8(g0);if(V0.obj.quaternion.slerpQuaternions(V0.qFrom,V0.qTo,WJ),V0.obj.position.lerpVectors(V0.from,V0.to,WJ),V0.obj.position.y+=Math.sin(g0*Math.PI)*0.012,g0>=1&&V0.ultima)dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{revela:!0}}));return g0<1}if(V0.reparto)return V0.obj.position.lerpVectors(V0.from,V0.to,C8(g0)),V0.obj.position.y+=Math.sin(g0*Math.PI)*0.035,V0.obj.quaternion.slerpQuaternions(V0.qFrom,V0.qTo,C8(Math.min(1,Math.max(0,(g0-0.3)/0.7)))),g0<1;if(V0.obj.quaternion.slerpQuaternions(V0.qFrom,V0.qTo,C8(Math.min(1,g0/0.4))),V0.golpe){let WJ=Math.min(1,g0/0.62);V0.obj.position.lerpVectors(V0.from,V0.to,C8(WJ)),V0.obj.position.y+=g0<0.62?Math.sin(WJ*Math.PI/2)*0.17:0.17*(1-((g0-0.62)/0.38)**2)}else V0.obj.position.lerpVectors(V0.from,V0.to,C8(g0)),V0.obj.position.y+=Math.sin(g0*Math.PI)*0.07;if(g0>=1&&!V0.sono){if(V0.sono=!0,V0.golpe)$0=p8.elapsedTime;dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{golpe:!!V0.golpe}}))}return g0<1});let c0=a<mQ;if(GJ.visible=!c0,!c0&&k8.children.length)C6(k8);if(y8(i),X.update(),!U8&&!w0&&!c)Q0();if(B8.frame(W0,i,{reduced:B0,view:z0,ends:M6,temblor:q0}),B8.render(),z$%2===0)for(let V0 of document.querySelectorAll("[data-seatlabel]")){let g0=Number(V0.dataset.seatlabel),[WJ,$J]=k9[g0],kJ=A0[g0]?.head,pJ=kJ&&kJ.getWorldPosition(h7).distanceTo(B8.vista.position)<jN.distanceTo(B8.vista.position)-0.2;if(pJ)h7.y-=0.3;else if(kJ)h7.y+=0.23;else h7.set(WJ,1.45,$J);let CJ=h7.project(B8.vista),T8=!1;if(!pJ&&CJ.y>0.8&&kJ)kJ.getWorldPosition(h7).y-=0.1,CJ=h7.project(B8.vista),T8=!0;let yN=Math.min(CJ.y,0.8);V0.style.transform=`translate(${(CJ.x*0.5+0.5)*innerWidth}px,${(-yN*0.5+0.5)*innerHeight}px) translate(-50%,${pJ?"-50%":T8?"0":"-100%"})`,V0.style.visibility=CJ.z>1||Math.abs(CJ.x)>1.1||CJ.y<-1.15?"hidden":"visible"}if(z$%30===0||z$===1){if(window.mesaDiagnostics={cam:Z.position.toArray().map((V0)=>+V0.toFixed(2)),fps:Math.round(A$),drawCalls:K.info.render.calls,triangles:K.info.render.triangles,characters:e0,crowd:U7,gente:u9?+u9.ms.toFixed(2):null,visibleCrowd:_0.length,boardTiles:d9?.chain.length||0,quality:P6,modelErrors:s},SN){window.mesaRigDebug=A0.filter(Boolean).map((g0)=>({index:g0.index,head:g0.head?.getWorldPosition(KJ()).toArray(),hip:g0.hips?.getWorldPosition(KJ()).toArray(),rootScale:g0.root.scale.toArray()}));let V0=document.querySelector("#perf");if(V0)V0.textContent=`${Math.round(A$)} fps · ${K.info.render.calls} draws`}}}window.mesaCamara=(w,i)=>{U8=null,w0=null,c=!0,X.minDistance=0.1,X.maxDistance=30,Z.position.set(...w),X.target.set(...i),X.update()},window.mesaCara=(w,i,W0)=>{let a=A0[w];if(a)a.caraFija=i==null?null:{p:i,s:W0??0}},window.mesaBeber=(w,i)=>{let W0=A0[w];if(!W0||!W0.bebida||W0.jugada)return;if(W0.trago&&i!=null&&W0.trago.fijo!=null)W0.trago.fijo=i;else W0.trago={t0:p8.elapsedTime,fijo:i}},window.mesaBrazo=(w)=>{let i=A0[w],W0=i?.brazos?.[1];if(!W0)return null;let a=(B0)=>B0.getWorldPosition(new _).toArray();return{codo:a(W0.antebrazo),muneca:a(W0.mano),vaso:i.bebida?i.bebida.group.position.toArray():null}},_X(null),gK();let yX=()=>{if(Z.aspect<0.95)Z.setViewOffset(innerWidth,innerHeight*1.24,0,innerHeight*0.24,innerWidth,innerHeight);else Z.clearViewOffset();Z.updateProjectionMatrix()},vX=()=>Y?0.65:P6==="min"?Math.min(devicePixelRatio,1)*0.55:P6==="low"?Math.min(devicePixelRatio,1)*0.8:Math.min(devicePixelRatio,1.5,1920/innerWidth),fX=()=>{Z.aspect=innerWidth/innerHeight,yX(),K.setPixelRatio(vX()),K.setSize(innerWidth,innerHeight),B8.resize(innerWidth,innerHeight)};yX(),window.addEventListener("resize",fX),X.addEventListener("start",()=>{U8=null,w0=null}),K.domElement.addEventListener("webglcontextrestored",()=>B8.entorno?.());let pK={update:_X,setCrowd:z,setCamera:i0,ready:o8,sampleTime(w){wX=w;for(let i of[...A0.filter(Boolean),..._0])IK(i,w,!1);B8.frame(w,0,{reduced:!1,view:d9,ends:M6}),B8.render()},setMode(w){pQ=w,i0(w==="attract"?"attract":"table")},quality(w){P6=w;let i=w!=="high";F.castShadow=!i&&!Y;for(let[W0,a]of T0){let B0=i?0:a.clearcoat,q0=i?0:a.sheen;if(W0.clearcoat!==B0||W0.sheen!==q0)W0.clearcoat=B0,W0.sheen=q0,W0.needsUpdate=!0}G.visible=!i,U.intensity=i?H+0.1:H,K.setPixelRatio(vX()),B8.calidad(w),B8.resize(innerWidth,innerHeight)},pause(){dQ=!0},resume(){if(!dQ)return;if(dQ=!1,p8.getDelta(),!T$)gK()},dispose(){if(xK=!0,u9?.dispose(),B8.dispose(),window.removeEventListener("mesa:botvoice",C$),T$)cancelAnimationFrame(T$);window.removeEventListener("resize",fX),X.dispose(),K.dispose(),J.replaceChildren()}};return pK}export{wM as createWorld};

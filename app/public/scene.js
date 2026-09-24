var zH="186",V7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},B7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AH=0,VW=1,_H=2;var c7=1,TH=2,o6=3,D7=0,D8=1,oJ=2,Q9=0,i$=1,j9=2,BW=3,DW=4,wH=5;var a6=100,SH=101,jH=102,yH=103,vH=104,fH=200,bH=201,hH=202,xH=203,gH=204,pH=205,mH=206,lH=207,uH=208,dH=209,cH=210,nH=211,sH=212,iH=213,oH=214,aH=0,rH=1,tH=2,kW=3,eH=4,JU=5,$U=6,QU=7,ZU=0,KU=1,WU=2,B9=0,o$=1,a$=2,r$=3,n7=4,t$=5,e$=6,JQ=7;var r6=301,s7=302,AZ=303,_Z=304,$Q=306,k7=1000,t6=1001,TZ=1002,D9=1003,wZ=1004;var i7=1005;var X8=1006,e6=1007;var Z9=1008;var k9=1009,YU=1010,XU=1011,QQ=1012,MW=1013,M7=1014,e9=1015,L8=1016,CW=1017,PW=1018,J$=1020,HU=35902,UU=35899,NU=1021,GU=1022,y9=1023,o7=1026,a7=1027,FU=1028,IW=1029,r7=1030,zW=1031;var AW=1033,SZ=33776,jZ=33777,yZ=33778,vZ=33779,_W=35840,TW=35841,wW=35842,SW=35843,jW=36196,yW=37492,vW=37496,fW=37488,bW=37489,fZ=37490,hW=37491,xW=37808,gW=37809,pW=37810,mW=37811,lW=37812,uW=37813,dW=37814,cW=37815,nW=37816,sW=37817,iW=37818,oW=37819,aW=37820,rW=37821,tW=36492,eW=36494,JY=36495,$Y=36283,QY=36284,bZ=36285,ZY=36286;var KY=2300,hZ=2301;var WY=0,ZQ=1,$$=2;var YY=0,EU=1,t7="",Q8="srgb",c8="srgb-linear",XY="linear",uJ="srgb";var qU=512,OU=513,RU=514,xZ=515,LU=516,VU=517,gZ=518,BU=519;var HY="300 es",UY=2000;function yN(J){for(let $=J.length-1;$>=0;--$)if(J[$]>=65535)return!0;return!1}function vN(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function c6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function DU(){let J=c6("canvas");return J.style.display="block",J}var fX={},n6=null;function d$(...J){let $="THREE."+J.shift();if(n6)n6("log",$,...J);else console.log($,...J)}function kU(J){let $=J[0];if(typeof $==="string"&&$.startsWith("TSL:")){let Q=J[1];if(Q&&Q.isStackTrace)J[0]+=" "+Q.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function t0(...J){J=kU(J);let $="THREE."+J.shift();if(n6)n6("warn",$,...J);else{let Q=J[0];if(Q&&Q.isStackTrace)console.warn(Q.getError($));else console.warn($,...J)}}function KJ(...J){J=kU(J);let $="THREE."+J.shift();if(n6)n6("error",$,...J);else{let Q=J[0];if(Q&&Q.isStackTrace)console.error(Q.getError($));else console.error($,...J)}}function l7(...J){let $=J.join(" ");if($ in fX)return;fX[$]=!0,t0(...J)}function MU(J,$,Q){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync($,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Q);break;default:Z()}}setTimeout(W,Q)})}var CU={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class M9{addEventListener(J,$){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[J]===void 0)Q[J]=[];if(Q[J].indexOf($)===-1)Q[J].push($)}hasEventListener(J,$){let Q=this._listeners;if(Q===void 0)return!1;return Q[J]!==void 0&&Q[J].indexOf($)!==-1}removeEventListener(J,$){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J];if(Z!==void 0){let K=Z.indexOf($);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let $=this._listeners;if($===void 0)return;let Q=$[J.type];if(Q!==void 0){J.target=this;let Z=Q.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var I8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bX=1234567,p$=Math.PI/180,u7=180/Math.PI;function $9(){let J=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(I8[J&255]+I8[J>>8&255]+I8[J>>16&255]+I8[J>>24&255]+"-"+I8[$&255]+I8[$>>8&255]+"-"+I8[$>>16&15|64]+I8[$>>24&255]+"-"+I8[Q&63|128]+I8[Q>>8&255]+"-"+I8[Q>>16&255]+I8[Q>>24&255]+I8[Z&255]+I8[Z>>8&255]+I8[Z>>16&255]+I8[Z>>24&255]).toLowerCase()}function OJ(J,$,Q){return Math.max($,Math.min(Q,J))}function NY(J,$){return(J%$+$)%$}function fN(J,$,Q,Z,K){return Z+(J-$)*(K-Z)/(Q-$)}function bN(J,$,Q){if(J!==$)return(Q-J)/($-J);else return 0}function m$(J,$,Q){return(1-Q)*J+Q*$}function hN(J,$,Q,Z){return m$(J,$,1-Math.exp(-Q*Z))}function xN(J,$=1){return $-Math.abs(NY(J,$*2)-$)}function gN(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*(3-2*J)}function pN(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*J*(J*(J*6-15)+10)}function mN(J,$){return J+Math.floor(Math.random()*($-J+1))}function lN(J,$){return J+Math.random()*($-J)}function uN(J){return J*(0.5-Math.random())}function dN(J){if(J!==void 0)bX=J;let $=bX+=1831565813;return $=Math.imul($^$>>>15,$|1),$^=$+Math.imul($^$>>>7,$|61),(($^$>>>14)>>>0)/4294967296}function cN(J){return J*p$}function nN(J){return J*u7}function sN(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function iN(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function oN(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function aN(J,$,Q,Z,K){let{cos:W,sin:Y}=Math,X=W(Q/2),H=Y(Q/2),U=W(($+Z)/2),N=Y(($+Z)/2),F=W(($-Z)/2),G=Y(($-Z)/2),q=W((Z-$)/2),O=Y((Z-$)/2);switch(K){case"XYX":J.set(X*N,H*F,H*G,X*U);break;case"YZY":J.set(H*G,X*N,H*F,X*U);break;case"ZXZ":J.set(H*F,H*G,X*N,X*U);break;case"XZX":J.set(X*N,H*O,H*q,X*U);break;case"YXY":J.set(H*q,X*N,H*O,X*U);break;case"ZYZ":J.set(H*O,H*q,X*N,X*U);break;default:t0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+K)}}function L9(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function mJ(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var v9={DEG2RAD:p$,RAD2DEG:u7,generateUUID:$9,clamp:OJ,euclideanModulo:NY,mapLinear:fN,inverseLerp:bN,lerp:m$,damp:hN,pingpong:xN,smoothstep:gN,smootherstep:pN,randInt:mN,randFloat:lN,randFloatSpread:uN,seededRandom:dN,degToRad:cN,radToDeg:nN,isPowerOfTwo:sN,ceilPowerOfTwo:iN,floorPowerOfTwo:oN,setQuaternionFromProperEuler:aN,normalize:mJ,denormalize:L9};class R0{static{R0.prototype.isVector2=!0}constructor(J=0,$=0){this.x=J,this.y=$}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,$){return this.x=J,this.y=$,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let $=this.x,Q=this.y,Z=J.elements;return this.x=Z[0]*$+Z[3]*Q+Z[6],this.y=Z[1]*$+Z[4]*Q+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,$){return this.x=OJ(this.x,J.x,$.x),this.y=OJ(this.y,J.y,$.y),this}clampScalar(J,$){return this.x=OJ(this.x,J,$),this.y=OJ(this.y,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(OJ(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(OJ(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y;return $*$+Q*Q}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this}rotateAround(J,$){let Q=Math.cos($),Z=Math.sin($),K=this.x-J.x,W=this.y-J.y;return this.x=K*Q-W*Z+J.x,this.y=K*Z+W*Q+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class GJ{constructor(J=0,$=0,Q=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=$,this._z=Q,this._w=Z}static slerpFlat(J,$,Q,Z,K,W,Y){let X=Q[Z+0],H=Q[Z+1],U=Q[Z+2],N=Q[Z+3],F=K[W+0],G=K[W+1],q=K[W+2],O=K[W+3];if(N!==O||X!==F||H!==G||U!==q){let B=X*F+H*G+U*q+N*O;if(B<0)F=-F,G=-G,q=-q,O=-O,B=-B;let R=1-Y;if(B<0.9995){let E=Math.acos(B),D=Math.sin(E);R=Math.sin(R*E)/D,Y=Math.sin(Y*E)/D,X=X*R+F*Y,H=H*R+G*Y,U=U*R+q*Y,N=N*R+O*Y}else{X=X*R+F*Y,H=H*R+G*Y,U=U*R+q*Y,N=N*R+O*Y;let E=1/Math.sqrt(X*X+H*H+U*U+N*N);X*=E,H*=E,U*=E,N*=E}}J[$]=X,J[$+1]=H,J[$+2]=U,J[$+3]=N}static multiplyQuaternionsFlat(J,$,Q,Z,K,W){let Y=Q[Z],X=Q[Z+1],H=Q[Z+2],U=Q[Z+3],N=K[W],F=K[W+1],G=K[W+2],q=K[W+3];return J[$]=Y*q+U*N+X*G-H*F,J[$+1]=X*q+U*F+H*N-Y*G,J[$+2]=H*q+U*G+Y*F-X*N,J[$+3]=U*q-Y*N-X*F-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,$,Q,Z){return this._x=J,this._y=$,this._z=Q,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,$=!0){let{_x:Q,_y:Z,_z:K,_order:W}=J,Y=Math.cos,X=Math.sin,H=Y(Q/2),U=Y(Z/2),N=Y(K/2),F=X(Q/2),G=X(Z/2),q=X(K/2);switch(W){case"XYZ":this._x=F*U*N+H*G*q,this._y=H*G*N-F*U*q,this._z=H*U*q+F*G*N,this._w=H*U*N-F*G*q;break;case"YXZ":this._x=F*U*N+H*G*q,this._y=H*G*N-F*U*q,this._z=H*U*q-F*G*N,this._w=H*U*N+F*G*q;break;case"ZXY":this._x=F*U*N-H*G*q,this._y=H*G*N+F*U*q,this._z=H*U*q+F*G*N,this._w=H*U*N-F*G*q;break;case"ZYX":this._x=F*U*N-H*G*q,this._y=H*G*N+F*U*q,this._z=H*U*q-F*G*N,this._w=H*U*N+F*G*q;break;case"YZX":this._x=F*U*N+H*G*q,this._y=H*G*N+F*U*q,this._z=H*U*q-F*G*N,this._w=H*U*N-F*G*q;break;case"XZY":this._x=F*U*N-H*G*q,this._y=H*G*N-F*U*q,this._z=H*U*q+F*G*N,this._w=H*U*N+F*G*q;break;default:t0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if($===!0)this._onChangeCallback();return this}setFromAxisAngle(J,$){let Q=$/2,Z=Math.sin(Q);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix(J){let $=J.elements,Q=$[0],Z=$[4],K=$[8],W=$[1],Y=$[5],X=$[9],H=$[2],U=$[6],N=$[10],F=Q+Y+N;if(F>0){let G=0.5/Math.sqrt(F+1);this._w=0.25/G,this._x=(U-X)*G,this._y=(K-H)*G,this._z=(W-Z)*G}else if(Q>Y&&Q>N){let G=2*Math.sqrt(1+Q-Y-N);this._w=(U-X)/G,this._x=0.25*G,this._y=(Z+W)/G,this._z=(K+H)/G}else if(Y>N){let G=2*Math.sqrt(1+Y-Q-N);this._w=(K-H)/G,this._x=(Z+W)/G,this._y=0.25*G,this._z=(X+U)/G}else{let G=2*Math.sqrt(1+N-Q-Y);this._w=(W-Z)/G,this._x=(K+H)/G,this._y=(X+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,$){let Q=J.dot($)+1;if(Q<0.00000001)if(Q=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Q;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Q;else this._x=J.y*$.z-J.z*$.y,this._y=J.z*$.x-J.x*$.z,this._z=J.x*$.y-J.y*$.x,this._w=Q;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(OJ(this.dot(J),-1,1)))}rotateTowards(J,$){let Q=this.angleTo(J);if(Q===0)return this;let Z=Math.min(1,$/Q);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,$){let{_x:Q,_y:Z,_z:K,_w:W}=J,Y=$._x,X=$._y,H=$._z,U=$._w;return this._x=Q*U+W*Y+Z*H-K*X,this._y=Z*U+W*X+K*Y-Q*H,this._z=K*U+W*H+Q*X-Z*Y,this._w=W*U-Q*Y-Z*X-K*H,this._onChangeCallback(),this}slerp(J,$){let{_x:Q,_y:Z,_z:K,_w:W}=J,Y=this.dot(J);if(Y<0)Q=-Q,Z=-Z,K=-K,W=-W,Y=-Y;let X=1-$;if(Y<0.9995){let H=Math.acos(Y),U=Math.sin(H);X=Math.sin(X*H)/U,$=Math.sin($*H)/U,this._x=this._x*X+Q*$,this._y=this._y*X+Z*$,this._z=this._z*X+K*$,this._w=this._w*X+W*$,this._onChangeCallback()}else this._x=this._x*X+Q*$,this._y=this._y*X+Z*$,this._z=this._z*X+K*$,this._w=this._w*X+W*$,this.normalize();return this}slerpQuaternions(J,$,Q){return this.copy(J).slerp($,Q)}random(){let J=2*Math.PI*Math.random(),$=2*Math.PI*Math.random(),Q=Math.random(),Z=Math.sqrt(1-Q),K=Math.sqrt(Q);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin($),K*Math.cos($))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,$=0){return this._x=J[$],this._y=J[$+1],this._z=J[$+2],this._w=J[$+3],this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._w,J}fromBufferAttribute(J,$){return this._x=J.getX($),this._y=J.getY($),this._z=J.getZ($),this._w=J.getW($),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{static{S.prototype.isVector3=!0}constructor(J=0,$=0,Q=0){this.x=J,this.y=$,this.z=Q}set(J,$,Q){if(Q===void 0)Q=this.z;return this.x=J,this.y=$,this.z=Q,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,$){return this.x=J.x*$.x,this.y=J.y*$.y,this.z=J.z*$.z,this}applyEuler(J){return this.applyQuaternion(hX.setFromEuler(J))}applyAxisAngle(J,$){return this.applyQuaternion(hX.setFromAxisAngle(J,$))}applyMatrix3(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements;return this.x=K[0]*$+K[3]*Q+K[6]*Z,this.y=K[1]*$+K[4]*Q+K[7]*Z,this.z=K[2]*$+K[5]*Q+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements,W=1/(K[3]*$+K[7]*Q+K[11]*Z+K[15]);return this.x=(K[0]*$+K[4]*Q+K[8]*Z+K[12])*W,this.y=(K[1]*$+K[5]*Q+K[9]*Z+K[13])*W,this.z=(K[2]*$+K[6]*Q+K[10]*Z+K[14])*W,this}applyQuaternion(J){let $=this.x,Q=this.y,Z=this.z,K=J.x,W=J.y,Y=J.z,X=J.w,H=2*(W*Z-Y*Q),U=2*(Y*$-K*Z),N=2*(K*Q-W*$);return this.x=$+X*H+W*N-Y*U,this.y=Q+X*U+Y*H-K*N,this.z=Z+X*N+K*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements;return this.x=K[0]*$+K[4]*Q+K[8]*Z,this.y=K[1]*$+K[5]*Q+K[9]*Z,this.z=K[2]*$+K[6]*Q+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,$){return this.x=OJ(this.x,J.x,$.x),this.y=OJ(this.y,J.y,$.y),this.z=OJ(this.z,J.z,$.z),this}clampScalar(J,$){return this.x=OJ(this.x,J,$),this.y=OJ(this.y,J,$),this.z=OJ(this.z,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(OJ(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,$){let{x:Q,y:Z,z:K}=J,W=$.x,Y=$.y,X=$.z;return this.x=Z*X-K*Y,this.y=K*W-Q*X,this.z=Q*Y-Z*W,this}projectOnVector(J){let $=J.lengthSq();if($===0)return this.set(0,0,0);let Q=J.dot(this)/$;return this.copy(J).multiplyScalar(Q)}projectOnPlane(J){return pK.copy(this).projectOnVector(J),this.sub(pK)}reflect(J){return this.sub(pK.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(OJ(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y,Z=this.z-J.z;return $*$+Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,$,Q){let Z=Math.sin($)*J;return this.x=Z*Math.sin(Q),this.y=Math.cos($)*J,this.z=Z*Math.cos(Q),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,$,Q){return this.x=J*Math.sin($),this.y=Q,this.z=J*Math.cos($),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(J){let $=this.setFromMatrixColumn(J,0).length(),Q=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=$,this.y=Q,this.z=Z,this}setFromMatrixColumn(J,$){return this.fromArray(J.elements,$*4)}setFromMatrix3Column(J,$){return this.fromArray(J.elements,$*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,$=Math.random()*2-1,Q=Math.sqrt(1-$*$);return this.x=Q*Math.cos(J),this.y=$,this.z=Q*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var pK=new S,hX=new GJ;class NJ{static{NJ.prototype.isMatrix3=!0}constructor(J,$,Q,Z,K,W,Y,X,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,K,W,Y,X,H)}set(J,$,Q,Z,K,W,Y,X,H){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=$,U[4]=K,U[5]=X,U[6]=Q,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],this}extractBasis(J,$,Q){return J.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let $=J.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,K=this.elements,W=Q[0],Y=Q[3],X=Q[6],H=Q[1],U=Q[4],N=Q[7],F=Q[2],G=Q[5],q=Q[8],O=Z[0],B=Z[3],R=Z[6],E=Z[1],D=Z[4],M=Z[7],V=Z[2],I=Z[5],w=Z[8];return K[0]=W*O+Y*E+X*V,K[3]=W*B+Y*D+X*I,K[6]=W*R+Y*M+X*w,K[1]=H*O+U*E+N*V,K[4]=H*B+U*D+N*I,K[7]=H*R+U*M+N*w,K[2]=F*O+G*E+q*V,K[5]=F*B+G*D+q*I,K[8]=F*R+G*M+q*w,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[3]*=J,$[6]*=J,$[1]*=J,$[4]*=J,$[7]*=J,$[2]*=J,$[5]*=J,$[8]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8];return $*W*U-$*Y*H-Q*K*U+Q*Y*X+Z*K*H-Z*W*X}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],N=U*W-Y*H,F=Y*X-U*K,G=H*K-W*X,q=$*N+Q*F+Z*G;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/q;return J[0]=N*O,J[1]=(Z*H-U*Q)*O,J[2]=(Y*Q-Z*W)*O,J[3]=F*O,J[4]=(U*$-Z*X)*O,J[5]=(Z*K-Y*$)*O,J[6]=G*O,J[7]=(Q*X-H*$)*O,J[8]=(W*$-Q*K)*O,this}transpose(){let J,$=this.elements;return J=$[1],$[1]=$[3],$[3]=J,J=$[2],$[2]=$[6],$[6]=J,J=$[5],$[5]=$[7],$[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let $=this.elements;return J[0]=$[0],J[1]=$[3],J[2]=$[6],J[3]=$[1],J[4]=$[4],J[5]=$[7],J[6]=$[2],J[7]=$[5],J[8]=$[8],this}setUvTransform(J,$,Q,Z,K,W,Y){let X=Math.cos(K),H=Math.sin(K);return this.set(Q*X,Q*H,-Q*(X*W+H*Y)+W+J,-Z*H,Z*X,-Z*(-H*W+X*Y)+Y+$,0,0,1),this}scale(J,$){return l7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mK.makeScale(J,$)),this}rotate(J){return l7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mK.makeRotation(-J)),this}translate(J,$){return l7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mK.makeTranslation(J,$)),this}makeTranslation(J,$){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,$,0,0,1);return this}makeRotation(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,Q,$,0,0,0,1),this}makeScale(J,$){return this.set(J,0,0,0,$,0,0,0,1),this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<9;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<9;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var mK=new NJ,xX=new NJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),gX=new NJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function rN(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,Y){if(this.enabled===!1||W===Y||!W||!Y)return K;if(this.spaces[W].transfer==="srgb")K.r=t9(K.r),K.g=t9(K.g),K.b=t9(K.b);if(this.spaces[W].primaries!==this.spaces[Y].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")K.r=u6(K.r),K.g=u6(K.g),K.b=u6(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,Y){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return l7("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return l7("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},$=[0.64,0.33,0.3,0.6,0.15,0.06],Q=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:$,whitePoint:Z,transfer:"linear",toXYZ:xX,fromXYZ:gX,luminanceCoefficients:Q,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:$,whitePoint:Z,transfer:"srgb",toXYZ:xX,fromXYZ:gX,luminanceCoefficients:Q,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var RJ=rN();function t9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function u6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var I6;class GY{static getDataURL(J,$="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(I6===void 0)I6=c6("canvas");I6.width=J.width,I6.height=J.height;let Z=I6.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);Q=I6}return Q.toDataURL($)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let $=c6("canvas");$.width=J.width,$.height=J.height;let Q=$.getContext("2d");Q.drawImage(J,0,0,J.width,J.height);let Z=Q.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=t9(K[W]/255)*255;return Q.putImageData(Z,0,0),$}else if(J.data){let $=J.data.slice(0);for(let Q=0;Q<$.length;Q++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[Q]=Math.floor(t9($[Q]/255)*255);else $[Q]=t9($[Q]);return{data:$,width:J.width,height:J.height}}else return t0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var tN=0;class KQ{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tN++}),this.uuid=$9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let $=this.data;if(typeof HTMLVideoElement<"u"&&$ instanceof HTMLVideoElement)J.set($.videoWidth,$.videoHeight,0);else if(typeof VideoFrame<"u"&&$ instanceof VideoFrame)J.set($.displayWidth,$.displayHeight,0);else if($!==null)J.set($.width,$.height,$.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Q={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,Y=Z.length;W<Y;W++)if(Z[W].isDataTexture)K.push(lK(Z[W].image));else K.push(lK(Z[W]))}else K=lK(Z);Q.url=K}if(!$)J.images[this.uuid]=Q;return Q}}function lK(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return GY.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return t0("Texture: Unable to serialize Texture."),{}}var eN=0,uK=new S;class $8 extends M9{constructor(J=$8.DEFAULT_IMAGE,$=$8.DEFAULT_MAPPING,Q=1001,Z=1001,K=1006,W=1008,Y=1023,X=1009,H=$8.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:eN++}),this.uuid=$9(),this.name="",this.source=new KQ(J),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=Q,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=H,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new R0(0,0),this.repeat=new R0(1,1),this.center=new R0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new NJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uK).x}get height(){return this.source.getSize(uK).y}get depth(){return this.source.getSize(uK).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let $ in J){let Q=J[$];if(Q===void 0){t0(`Texture.setValues(): parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){t0(`Texture.setValues(): property '${$}' does not exist.`);continue}if(Z&&Q&&(Z.isVector2&&Q.isVector2))Z.copy(Q);else if(Z&&Q&&(Z.isVector3&&Q.isVector3))Z.copy(Q);else if(Z&&Q&&(Z.isMatrix3&&Q.isMatrix3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Q={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!$)J.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}$8.DEFAULT_IMAGE=null;$8.DEFAULT_MAPPING=300;$8.DEFAULT_ANISOTROPY=1;class lJ{static{lJ.prototype.isVector4=!0}constructor(J=0,$=0,Q=0,Z=1){this.x=J,this.y=$,this.z=Q,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,$,Q,Z){return this.x=J,this.y=$,this.z=Q,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this.w=J.w+$.w,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this.w+=J.w*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this.w=J.w-$.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*$+W[4]*Q+W[8]*Z+W[12]*K,this.y=W[1]*$+W[5]*Q+W[9]*Z+W[13]*K,this.z=W[2]*$+W[6]*Q+W[10]*Z+W[14]*K,this.w=W[3]*$+W[7]*Q+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let $=Math.sqrt(1-J.w*J.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/$,this.y=J.y/$,this.z=J.z/$;return this}setAxisAngleFromRotationMatrix(J){let $,Q,Z,K,W=0.01,Y=0.1,X=J.elements,H=X[0],U=X[4],N=X[8],F=X[1],G=X[5],q=X[9],O=X[2],B=X[6],R=X[10];if(Math.abs(U-F)<0.01&&Math.abs(N-O)<0.01&&Math.abs(q-B)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(N+O)<0.1&&Math.abs(q+B)<0.1&&Math.abs(H+G+R-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let D=(H+1)/2,M=(G+1)/2,V=(R+1)/2,I=(U+F)/4,w=(N+O)/4,k=(q+B)/4;if(D>M&&D>V)if(D<0.01)Q=0,Z=0.707106781,K=0.707106781;else Q=Math.sqrt(D),Z=I/Q,K=w/Q;else if(M>V)if(M<0.01)Q=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(M),Q=I/Z,K=k/Z;else if(V<0.01)Q=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(V),Q=w/K,Z=k/K;return this.set(Q,Z,K,$),this}let E=Math.sqrt((B-q)*(B-q)+(N-O)*(N-O)+(F-U)*(F-U));if(Math.abs(E)<0.001)E=1;return this.x=(B-q)/E,this.y=(N-O)/E,this.z=(F-U)/E,this.w=Math.acos((H+G+R-1)/2),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this.w=$[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,$){return this.x=OJ(this.x,J.x,$.x),this.y=OJ(this.y,J.y,$.y),this.z=OJ(this.z,J.z,$.z),this.w=OJ(this.w,J.w,$.w),this}clampScalar(J,$){return this.x=OJ(this.x,J,$),this.y=OJ(this.y,J,$),this.z=OJ(this.z,J,$),this.w=OJ(this.w,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(OJ(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this.w+=(J.w-this.w)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this.w=J.w+($.w-J.w)*Q,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this.w=J[$+3],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J[$+3]=this.w,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this.w=J.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FY extends M9{constructor(J=1,$=1,Q={}){super();Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Q),this.isRenderTarget=!0,this.width=J,this.height=$,this.depth=Q.depth,this.scissor=new lJ(0,0,J,$),this.scissorTest=!1,this.viewport=new lJ(0,0,J,$),this.textures=[];let Z={width:J,height:$,depth:Q.depth},K=new $8(Z),W=Q.count;for(let Y=0;Y<W;Y++)this.textures[Y]=K.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions(Q),this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.resolveColorBuffer=Q.resolveColorBuffer,this.resolveDepthBuffer=Q.resolveDepthBuffer,this.resolveStencilBuffer=Q.resolveStencilBuffer,this.storeMultisampledColorBuffer=Q.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Q.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Q.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Q.depthTexture,this.samples=Q.samples,this.multiview=Q.multiview,this.useArrayDepthTexture=Q.useArrayDepthTexture}_setTextureOptions(J={}){let $={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)$.mapping=J.mapping;if(J.wrapS!==void 0)$.wrapS=J.wrapS;if(J.wrapT!==void 0)$.wrapT=J.wrapT;if(J.wrapR!==void 0)$.wrapR=J.wrapR;if(J.magFilter!==void 0)$.magFilter=J.magFilter;if(J.minFilter!==void 0)$.minFilter=J.minFilter;if(J.format!==void 0)$.format=J.format;if(J.type!==void 0)$.type=J.type;if(J.anisotropy!==void 0)$.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)$.colorSpace=J.colorSpace;if(J.flipY!==void 0)$.flipY=J.flipY;if(J.generateMipmaps!==void 0)$.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)$.internalFormat=J.internalFormat;for(let Q=0;Q<this.textures.length;Q++)this.textures[Q].setValues($)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,$,Q=1){if(this.width!==J||this.height!==$||this.depth!==Q){this.width=J,this.height=$,this.depth=Q;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=$,this.textures[Z].image.depth=Q,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,$),this.scissor.set(0,0,J,$)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let $=0,Q=J.textures.length;$<Q;$++){this.textures[$]=J.textures[$].clone(),this.textures[$].isRenderTargetTexture=!0,this.textures[$].renderTarget=this;let Z=Object.assign({},J.textures[$].image);this.textures[$].source=new KQ(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let $=J.depthTexture.clone();$.renderTarget=null,this.depthTexture=$}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z8 extends FY{constructor(J=1,$=1,Q={}){super(J,$,Q);this.isWebGLRenderTarget=!0}}class pZ extends $8{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class EY extends $8{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class QJ{static{QJ.prototype.isMatrix4=!0}constructor(J,$,Q,Z,K,W,Y,X,H,U,N,F,G,q,O,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,K,W,Y,X,H,U,N,F,G,q,O,B)}set(J,$,Q,Z,K,W,Y,X,H,U,N,F,G,q,O,B){let R=this.elements;return R[0]=J,R[4]=$,R[8]=Q,R[12]=Z,R[1]=K,R[5]=W,R[9]=Y,R[13]=X,R[2]=H,R[6]=U,R[10]=N,R[14]=F,R[3]=G,R[7]=q,R[11]=O,R[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new QJ().fromArray(this.elements)}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],$[9]=Q[9],$[10]=Q[10],$[11]=Q[11],$[12]=Q[12],$[13]=Q[13],$[14]=Q[14],$[15]=Q[15],this}copyPosition(J){let $=this.elements,Q=J.elements;return $[12]=Q[12],$[13]=Q[13],$[14]=Q[14],this}setFromMatrix3(J){let $=J.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(J,$,Q){if(this.determinantAffine()===0)return J.set(1,0,0),$.set(0,1,0),Q.set(0,0,1),this;return J.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis(J,$,Q){return this.set(J.x,$.x,Q.x,0,J.y,$.y,Q.y,0,J.z,$.z,Q.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let $=this.elements,Q=J.elements,Z=1/z6.setFromMatrixColumn(J,0).length(),K=1/z6.setFromMatrixColumn(J,1).length(),W=1/z6.setFromMatrixColumn(J,2).length();return $[0]=Q[0]*Z,$[1]=Q[1]*Z,$[2]=Q[2]*Z,$[3]=0,$[4]=Q[4]*K,$[5]=Q[5]*K,$[6]=Q[6]*K,$[7]=0,$[8]=Q[8]*W,$[9]=Q[9]*W,$[10]=Q[10]*W,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(J){let $=this.elements,Q=J.x,Z=J.y,K=J.z,W=Math.cos(Q),Y=Math.sin(Q),X=Math.cos(Z),H=Math.sin(Z),U=Math.cos(K),N=Math.sin(K);if(J.order==="XYZ"){let F=W*U,G=W*N,q=Y*U,O=Y*N;$[0]=X*U,$[4]=-X*N,$[8]=H,$[1]=G+q*H,$[5]=F-O*H,$[9]=-Y*X,$[2]=O-F*H,$[6]=q+G*H,$[10]=W*X}else if(J.order==="YXZ"){let F=X*U,G=X*N,q=H*U,O=H*N;$[0]=F+O*Y,$[4]=q*Y-G,$[8]=W*H,$[1]=W*N,$[5]=W*U,$[9]=-Y,$[2]=G*Y-q,$[6]=O+F*Y,$[10]=W*X}else if(J.order==="ZXY"){let F=X*U,G=X*N,q=H*U,O=H*N;$[0]=F-O*Y,$[4]=-W*N,$[8]=q+G*Y,$[1]=G+q*Y,$[5]=W*U,$[9]=O-F*Y,$[2]=-W*H,$[6]=Y,$[10]=W*X}else if(J.order==="ZYX"){let F=W*U,G=W*N,q=Y*U,O=Y*N;$[0]=X*U,$[4]=q*H-G,$[8]=F*H+O,$[1]=X*N,$[5]=O*H+F,$[9]=G*H-q,$[2]=-H,$[6]=Y*X,$[10]=W*X}else if(J.order==="YZX"){let F=W*X,G=W*H,q=Y*X,O=Y*H;$[0]=X*U,$[4]=O-F*N,$[8]=q*N+G,$[1]=N,$[5]=W*U,$[9]=-Y*U,$[2]=-H*U,$[6]=G*N+q,$[10]=F-O*N}else if(J.order==="XZY"){let F=W*X,G=W*H,q=Y*X,O=Y*H;$[0]=X*U,$[4]=-N,$[8]=H*U,$[1]=F*N+O,$[5]=W*U,$[9]=G*N-q,$[2]=q*N-G,$[6]=Y*U,$[10]=O*N+F}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(J){return this.compose(JG,J,$G)}lookAt(J,$,Q){let Z=this.elements;if(l8.subVectors(J,$),l8.lengthSq()===0)l8.z=1;if(l8.normalize(),N7.crossVectors(Q,l8),N7.lengthSq()===0){if(Math.abs(Q.z)===1)l8.x+=0.0001;else l8.z+=0.0001;l8.normalize(),N7.crossVectors(Q,l8)}return N7.normalize(),sQ.crossVectors(l8,N7),Z[0]=N7.x,Z[4]=sQ.x,Z[8]=l8.x,Z[1]=N7.y,Z[5]=sQ.y,Z[9]=l8.y,Z[2]=N7.z,Z[6]=sQ.z,Z[10]=l8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,K=this.elements,W=Q[0],Y=Q[4],X=Q[8],H=Q[12],U=Q[1],N=Q[5],F=Q[9],G=Q[13],q=Q[2],O=Q[6],B=Q[10],R=Q[14],E=Q[3],D=Q[7],M=Q[11],V=Q[15],I=Z[0],w=Z[4],k=Z[8],L=Z[12],P=Z[1],l=Z[5],b=Z[9],d=Z[13],e=Z[2],v=Z[6],j=Z[10],g=Z[14],f=Z[3],a=Z[7],m=Z[11],J0=Z[15];return K[0]=W*I+Y*P+X*e+H*f,K[4]=W*w+Y*l+X*v+H*a,K[8]=W*k+Y*b+X*j+H*m,K[12]=W*L+Y*d+X*g+H*J0,K[1]=U*I+N*P+F*e+G*f,K[5]=U*w+N*l+F*v+G*a,K[9]=U*k+N*b+F*j+G*m,K[13]=U*L+N*d+F*g+G*J0,K[2]=q*I+O*P+B*e+R*f,K[6]=q*w+O*l+B*v+R*a,K[10]=q*k+O*b+B*j+R*m,K[14]=q*L+O*d+B*g+R*J0,K[3]=E*I+D*P+M*e+V*f,K[7]=E*w+D*l+M*v+V*a,K[11]=E*k+D*b+M*j+V*m,K[15]=E*L+D*d+M*g+V*J0,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[4]*=J,$[8]*=J,$[12]*=J,$[1]*=J,$[5]*=J,$[9]*=J,$[13]*=J,$[2]*=J,$[6]*=J,$[10]*=J,$[14]*=J,$[3]*=J,$[7]*=J,$[11]*=J,$[15]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],K=J[12],W=J[1],Y=J[5],X=J[9],H=J[13],U=J[2],N=J[6],F=J[10],G=J[14],q=J[3],O=J[7],B=J[11],R=J[15],E=X*G-H*F,D=Y*G-H*N,M=Y*F-X*N,V=W*G-H*U,I=W*F-X*U,w=W*N-Y*U;return $*(O*E-B*D+R*M)-Q*(q*E-B*V+R*I)+Z*(q*D-O*V+R*w)-K*(q*M-O*I+B*w)}determinantAffine(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],K=J[1],W=J[5],Y=J[9],X=J[2],H=J[6],U=J[10];return $*(W*U-Y*H)-Q*(K*U-Y*X)+Z*(K*H-W*X)}transpose(){let J=this.elements,$;return $=J[1],J[1]=J[4],J[4]=$,$=J[2],J[2]=J[8],J[8]=$,$=J[6],J[6]=J[9],J[9]=$,$=J[3],J[3]=J[12],J[12]=$,$=J[7],J[7]=J[13],J[13]=$,$=J[11],J[11]=J[14],J[14]=$,this}setPosition(J,$,Q){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=$,Z[14]=Q;return this}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],N=J[9],F=J[10],G=J[11],q=J[12],O=J[13],B=J[14],R=J[15],E=$*Y-Q*W,D=$*X-Z*W,M=$*H-K*W,V=Q*X-Z*Y,I=Q*H-K*Y,w=Z*H-K*X,k=U*O-N*q,L=U*B-F*q,P=U*R-G*q,l=N*B-F*O,b=N*R-G*O,d=F*R-G*B,e=E*d-D*b+M*l+V*P-I*L+w*k;if(e===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/e;return J[0]=(Y*d-X*b+H*l)*v,J[1]=(Z*b-Q*d-K*l)*v,J[2]=(O*w-B*I+R*V)*v,J[3]=(F*I-N*w-G*V)*v,J[4]=(X*P-W*d-H*L)*v,J[5]=($*d-Z*P+K*L)*v,J[6]=(B*M-q*w-R*D)*v,J[7]=(U*w-F*M+G*D)*v,J[8]=(W*b-Y*P+H*k)*v,J[9]=(Q*P-$*b-K*k)*v,J[10]=(q*I-O*M+R*E)*v,J[11]=(N*M-U*I-G*E)*v,J[12]=(Y*L-W*l-X*k)*v,J[13]=($*l-Q*L+Z*k)*v,J[14]=(O*D-q*V-B*E)*v,J[15]=(U*V-N*D+F*E)*v,this}scale(J){let $=this.elements,Q=J.x,Z=J.y,K=J.z;return $[0]*=Q,$[4]*=Z,$[8]*=K,$[1]*=Q,$[5]*=Z,$[9]*=K,$[2]*=Q,$[6]*=Z,$[10]*=K,$[3]*=Q,$[7]*=Z,$[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,$=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Q=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max($,Q,Z))}makeTranslation(J,$,Q){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,$,0,0,1,Q,0,0,0,1);return this}makeRotationX(J){let $=Math.cos(J),Q=Math.sin(J);return this.set(1,0,0,0,0,$,-Q,0,0,Q,$,0,0,0,0,1),this}makeRotationY(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,0,Q,0,0,1,0,0,-Q,0,$,0,0,0,0,1),this}makeRotationZ(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,0,Q,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,$){let Q=Math.cos($),Z=Math.sin($),K=1-Q,W=J.x,Y=J.y,X=J.z,H=K*W,U=K*Y;return this.set(H*W+Q,H*Y-Z*X,H*X+Z*Y,0,H*Y+Z*X,U*Y+Q,U*X-Z*W,0,H*X-Z*Y,U*X+Z*W,K*X*X+Q,0,0,0,0,1),this}makeScale(J,$,Q){return this.set(J,0,0,0,0,$,0,0,0,0,Q,0,0,0,0,1),this}makeShear(J,$,Q,Z,K,W){return this.set(1,Q,K,0,J,1,W,0,$,Z,1,0,0,0,0,1),this}compose(J,$,Q){let Z=this.elements,K=$._x,W=$._y,Y=$._z,X=$._w,H=K+K,U=W+W,N=Y+Y,F=K*H,G=K*U,q=K*N,O=W*U,B=W*N,R=Y*N,E=X*H,D=X*U,M=X*N,V=Q.x,I=Q.y,w=Q.z;return Z[0]=(1-(O+R))*V,Z[1]=(G+M)*V,Z[2]=(q-D)*V,Z[3]=0,Z[4]=(G-M)*I,Z[5]=(1-(F+R))*I,Z[6]=(B+E)*I,Z[7]=0,Z[8]=(q+D)*w,Z[9]=(B-E)*w,Z[10]=(1-(F+O))*w,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,$,Q){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return Q.set(1,1,1),$.identity(),this;let W=z6.set(Z[0],Z[1],Z[2]).length(),Y=z6.set(Z[4],Z[5],Z[6]).length(),X=z6.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;q9.copy(this);let H=1/W,U=1/Y,N=1/X;return q9.elements[0]*=H,q9.elements[1]*=H,q9.elements[2]*=H,q9.elements[4]*=U,q9.elements[5]*=U,q9.elements[6]*=U,q9.elements[8]*=N,q9.elements[9]*=N,q9.elements[10]*=N,$.setFromRotationMatrix(q9),Q.x=W,Q.y=Y,Q.z=X,this}makePerspective(J,$,Q,Z,K,W,Y=2000,X=!1){let H=this.elements,U=2*K/($-J),N=2*K/(Q-Z),F=($+J)/($-J),G=(Q+Z)/(Q-Z),q,O;if(X)q=K/(W-K),O=W*K/(W-K);else if(Y===2000)q=-(W+K)/(W-K),O=-2*W*K/(W-K);else if(Y===2001)q=-W/(W-K),O=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=F,H[12]=0,H[1]=0,H[5]=N,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=q,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,$,Q,Z,K,W,Y=2000,X=!1){let H=this.elements,U=2/($-J),N=2/(Q-Z),F=-($+J)/($-J),G=-(Q+Z)/(Q-Z),q,O;if(X)q=1/(W-K),O=W/(W-K);else if(Y===2000)q=-2/(W-K),O=-(W+K)/(W-K);else if(Y===2001)q=-1/(W-K),O=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=0,H[12]=F,H[1]=0,H[5]=N,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=q,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<16;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<16;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J[$+9]=Q[9],J[$+10]=Q[10],J[$+11]=Q[11],J[$+12]=Q[12],J[$+13]=Q[13],J[$+14]=Q[14],J[$+15]=Q[15],J}}var z6=new S,q9=new QJ,JG=new S(0,0,0),$G=new S(1,1,1),N7=new S,sQ=new S,l8=new S,pX=new QJ,mX=new GJ;class V9{constructor(J=0,$=0,Q=0,Z=V9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=$,this._z=Q,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,$,Q,Z=this._order){return this._x=J,this._y=$,this._z=Q,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,$=this._order,Q=!0){let Z=J.elements,K=Z[0],W=Z[4],Y=Z[8],X=Z[1],H=Z[5],U=Z[9],N=Z[2],F=Z[6],G=Z[10];switch($){case"XYZ":if(this._y=Math.asin(OJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-OJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,G),this._z=Math.atan2(X,H);else this._y=Math.atan2(-N,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(OJ(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(X,K);break;case"ZYX":if(this._y=Math.asin(-OJ(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(F,G),this._z=Math.atan2(X,K);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(OJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-N,K);else this._x=0,this._y=Math.atan2(Y,G);break;case"XZY":if(this._z=Math.asin(-OJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,H),this._y=Math.atan2(Y,K);else this._x=Math.atan2(-U,G),this._y=0;break;default:t0("Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,Q===!0)this._onChangeCallback();return this}setFromQuaternion(J,$,Q){return pX.makeRotationFromQuaternion(J),this.setFromRotationMatrix(pX,$,Q)}setFromVector3(J,$=this._order){return this.set(J.x,J.y,J.z,$)}reorder(J){return mX.setFromEuler(this),this.setFromQuaternion(mX,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}V9.DEFAULT_ORDER="XYZ";class mZ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var QG=0,lX=new S,A6=new GJ,n9=new QJ,iQ=new S,_$=new S,ZG=new S,KG=new GJ,uX=new S(1,0,0),dX=new S(0,1,0),cX=new S(0,0,1),nX={type:"added"},WG={type:"removed"},_6={type:"childadded",child:null},dK={type:"childremoved",child:null};class SJ extends M9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:QG++}),this.uuid=$9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=SJ.DEFAULT_UP.clone();let J=new S,$=new V9,Q=new GJ,Z=new S(1,1,1);function K(){Q.setFromEuler($,!1)}function W(){$.setFromQuaternion(Q,void 0,!1)}$._onChange(K),Q._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new QJ},normalMatrix:{value:new NJ}}),this.matrix=new QJ,this.matrixWorld=new QJ,this.matrixAutoUpdate=SJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=SJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mZ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,$){this.quaternion.setFromAxisAngle(J,$)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,$){return A6.setFromAxisAngle(J,$),this.quaternion.multiply(A6),this}rotateOnWorldAxis(J,$){return A6.setFromAxisAngle(J,$),this.quaternion.premultiply(A6),this}rotateX(J){return this.rotateOnAxis(uX,J)}rotateY(J){return this.rotateOnAxis(dX,J)}rotateZ(J){return this.rotateOnAxis(cX,J)}translateOnAxis(J,$){return lX.copy(J).applyQuaternion(this.quaternion),this.position.add(lX.multiplyScalar($)),this}translateX(J){return this.translateOnAxis(uX,J)}translateY(J){return this.translateOnAxis(dX,J)}translateZ(J){return this.translateOnAxis(cX,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(n9.copy(this.matrixWorld).invert())}lookAt(J,$,Q){if(J.isVector3)iQ.copy(J);else iQ.set(J,$,Q);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),_$.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)n9.lookAt(_$,iQ,this.up);else n9.lookAt(iQ,_$,this.up);if(this.quaternion.setFromRotationMatrix(n9),Z)n9.extractRotation(Z.matrixWorld),A6.setFromRotationMatrix(n9),this.quaternion.premultiply(A6.invert())}add(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(J===this)return KJ("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(nX),_6.child=J,this.dispatchEvent(_6),_6.child=null;else KJ("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let $=this.children.indexOf(J);if($!==-1)J.parent=null,this.children.splice($,1),J.dispatchEvent(WG),dK.child=J,this.dispatchEvent(dK),dK.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),n9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),n9.multiply(J.parent.matrixWorld);return J.applyMatrix4(n9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(nX),_6.child=J,this.dispatchEvent(_6),_6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,$){if(this[J]===$)return this;for(let Q=0,Z=this.children.length;Q<Z;Q++){let W=this.children[Q].getObjectByProperty(J,$);if(W!==void 0)return W}return}getObjectsByProperty(J,$,Q=[]){if(this[J]===$)Q.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,$,Q);return Q}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_$,J,ZG),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_$,KG,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set($[8],$[9],$[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverseVisible(J)}traverseAncestors(J){let $=this.parent;if($!==null)J($),$.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:$,y:Q,z:Z}=J,K=this.matrix.elements;K[12]+=$-K[0]*$-K[4]*Q-K[8]*Z,K[13]+=Q-K[1]*$-K[5]*Q-K[9]*Z,K[14]+=Z-K[2]*$-K[6]*Q-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].updateMatrixWorld(J)}updateWorldMatrix(J,$,Q=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Q){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Q=!0}if($===!0){let K=this.children;for(let W=0,Y=K.length;W<Y;W++)K[W].updateWorldMatrix(!1,!0,Q)}}toJSON(J){let $=J===void 0||typeof J==="string",Q={};if($)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let H=0,U=X.length;H<U;H++){let N=X[H];K(J.shapes,N)}else K(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,H=this.material.length;X<H;X++)Y.push(K(J.materials,this.material[X]));Z.material=Y}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(K(J.animations,X))}}if($){let Y=W(J.geometries),X=W(J.materials),H=W(J.textures),U=W(J.images),N=W(J.shapes),F=W(J.skeletons),G=W(J.animations),q=W(J.nodes);if(Y.length>0)Q.geometries=Y;if(X.length>0)Q.materials=X;if(H.length>0)Q.textures=H;if(U.length>0)Q.images=U;if(N.length>0)Q.shapes=N;if(F.length>0)Q.skeletons=F;if(G.length>0)Q.animations=G;if(q.length>0)Q.nodes=q}return Q.object=Z,Q;function W(Y){let X=[];for(let H in Y){let U=Y[H];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,$=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),$===!0)for(let Q=0;Q<J.children.length;Q++){let Z=J.children[Q];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}SJ.DEFAULT_UP=new S(0,1,0);SJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;SJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _J extends SJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var YG={type:"move"};class WQ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new _J,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new _J,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new _J,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let $=this._hand;if($)for(let Q of J.hand.values())this._getHandJoint($,Q)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,$,Q){let Z=null,K=null,W=null,Y=this._targetRay,X=this._grip,H=this._hand;if(J&&$.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let B=$.getJointPose(O,Q),R=this._getHandJoint(H,O);if(B!==null)R.matrix.fromArray(B.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=B.radius;R.visible=B!==null}let U=H.joints["index-finger-tip"],N=H.joints["thumb-tip"],F=U.position.distanceTo(N.position),G=0.02,q=0.005;if(H.inputState.pinching&&F>G+q)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&F<=G-q)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(K=$.getPose(J.gripSpace,Q),K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;if(X.eventsEnabled)X.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(Y!==null){if(Z=$.getPose(J.targetRaySpace,Q),Z===null&&K!==null)Z=K;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(YG)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,$){if(J.joints[$.jointName]===void 0){let Q=new _J;Q.matrixAutoUpdate=!1,Q.visible=!1,J.joints[$.jointName]=Q,J.add(Q)}return J.joints[$.jointName]}}var PU={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},G7={h:0,s:0,l:0},oQ={h:0,s:0,l:0};function cK(J,$,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return J+($-J)*6*Q;if(Q<0.5)return $;if(Q<0.6666666666666666)return J+($-J)*6*(0.6666666666666666-Q);return J}class y0{constructor(J,$,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,$,Q)}set(J,$,Q){if($===void 0&&Q===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,$,Q);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,$="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,RJ.colorSpaceToWorking(this,$),this}setRGB(J,$,Q,Z=RJ.workingColorSpace){return this.r=J,this.g=$,this.b=Q,RJ.colorSpaceToWorking(this,Z),this}setHSL(J,$,Q,Z=RJ.workingColorSpace){if(J=NY(J,1),$=OJ($,0,1),Q=OJ(Q,0,1),$===0)this.r=this.g=this.b=Q;else{let K=Q<=0.5?Q*(1+$):Q+$-Q*$,W=2*Q-K;this.r=cK(W,K,J+0.3333333333333333),this.g=cK(W,K,J),this.b=cK(W,K,J-0.3333333333333333)}return RJ.colorSpaceToWorking(this,Z),this}setStyle(J,$="srgb"){function Q(K){if(K===void 0)return;if(parseFloat(K)<1)t0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],Y=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Q(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,$);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Q(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,$);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Q(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,$);break;default:t0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,$);else if(W===6)return this.setHex(parseInt(K,16),$);else t0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,$);return this}setColorName(J,$="srgb"){let Q=PU[J.toLowerCase()];if(Q!==void 0)this.setHex(Q,$);else t0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=t9(J.r),this.g=t9(J.g),this.b=t9(J.b),this}copyLinearToSRGB(J){return this.r=u6(J.r),this.g=u6(J.g),this.b=u6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return RJ.workingToColorSpace(z8.copy(this),J),Math.round(OJ(z8.r*255,0,255))*65536+Math.round(OJ(z8.g*255,0,255))*256+Math.round(OJ(z8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,$=RJ.workingColorSpace){RJ.workingToColorSpace(z8.copy(this),$);let{r:Q,g:Z,b:K}=z8,W=Math.max(Q,Z,K),Y=Math.min(Q,Z,K),X,H,U=(Y+W)/2;if(Y===W)X=0,H=0;else{let N=W-Y;switch(H=U<=0.5?N/(W+Y):N/(2-W-Y),W){case Q:X=(Z-K)/N+(Z<K?6:0);break;case Z:X=(K-Q)/N+2;break;case K:X=(Q-Z)/N+4;break}X/=6}return J.h=X,J.s=H,J.l=U,J}getRGB(J,$=RJ.workingColorSpace){return RJ.workingToColorSpace(z8.copy(this),$),J.r=z8.r,J.g=z8.g,J.b=z8.b,J}getStyle(J="srgb"){RJ.workingToColorSpace(z8.copy(this),J);let{r:$,g:Q,b:Z}=z8;if(J!=="srgb")return`color(${J} ${$.toFixed(3)} ${Q.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(Q*255)},${Math.round(Z*255)})`}offsetHSL(J,$,Q){return this.getHSL(G7),this.setHSL(G7.h+J,G7.s+$,G7.l+Q)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,$){return this.r=J.r+$.r,this.g=J.g+$.g,this.b=J.b+$.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,$){return this.r+=(J.r-this.r)*$,this.g+=(J.g-this.g)*$,this.b+=(J.b-this.b)*$,this}lerpColors(J,$,Q){return this.r=J.r+($.r-J.r)*Q,this.g=J.g+($.g-J.g)*Q,this.b=J.b+($.b-J.b)*Q,this}lerpHSL(J,$){this.getHSL(G7),J.getHSL(oQ);let Q=m$(G7.h,oQ.h,$),Z=m$(G7.s,oQ.s,$),K=m$(G7.l,oQ.l,$);return this.setHSL(Q,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let $=this.r,Q=this.g,Z=this.b,K=J.elements;return this.r=K[0]*$+K[3]*Q+K[6]*Z,this.g=K[1]*$+K[4]*Q+K[7]*Z,this.b=K[2]*$+K[5]*Q+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,$=0){return this.r=J[$],this.g=J[$+1],this.b=J[$+2],this}toArray(J=[],$=0){return J[$]=this.r,J[$+1]=this.g,J[$+2]=this.b,J}fromBufferAttribute(J,$){return this.r=J.getX($),this.g=J.getY($),this.b=J.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var z8=new y0;y0.NAMES=PU;class e7{constructor(J,$=0.00025){this.isFogExp2=!0,this.name="",this.color=new y0(J),this.density=$}clone(){return new e7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Q$ extends SJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new V9,this.environmentIntensity=1,this.environmentRotation=new V9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,$){if(super.copy(J,$),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let $=super.toJSON(J);if(this.fog!==null)$.object.fog=this.fog.toJSON();return $.object.backgroundBlurriness=this.backgroundBlurriness,$.object.backgroundIntensity=this.backgroundIntensity,$.object.backgroundRotation=this.backgroundRotation.toArray(),$.object.environmentIntensity=this.environmentIntensity,$.object.environmentRotation=this.environmentRotation.toArray(),$}}var O9=new S,s9=new S,nK=new S,i9=new S,T6=new S,w6=new S,sX=new S,sK=new S,iK=new S,oK=new S,aK=new lJ,rK=new lJ,tK=new lJ;class d8{constructor(J=new S,$=new S,Q=new S){this.a=J,this.b=$,this.c=Q}static getNormal(J,$,Q,Z){Z.subVectors(Q,$),O9.subVectors(J,$),Z.cross(O9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,$,Q,Z,K){O9.subVectors(Z,$),s9.subVectors(Q,$),nK.subVectors(J,$);let W=O9.dot(O9),Y=O9.dot(s9),X=O9.dot(nK),H=s9.dot(s9),U=s9.dot(nK),N=W*H-Y*Y;if(N===0)return K.set(0,0,0),null;let F=1/N,G=(H*X-Y*U)*F,q=(W*U-Y*X)*F;return K.set(1-G-q,q,G)}static containsPoint(J,$,Q,Z){if(this.getBarycoord(J,$,Q,Z,i9)===null)return!1;return i9.x>=0&&i9.y>=0&&i9.x+i9.y<=1}static getInterpolation(J,$,Q,Z,K,W,Y,X){if(this.getBarycoord(J,$,Q,Z,i9)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(K,i9.x),X.addScaledVector(W,i9.y),X.addScaledVector(Y,i9.z),X}static getInterpolatedAttribute(J,$,Q,Z,K,W){return aK.setScalar(0),rK.setScalar(0),tK.setScalar(0),aK.fromBufferAttribute(J,$),rK.fromBufferAttribute(J,Q),tK.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(aK,K.x),W.addScaledVector(rK,K.y),W.addScaledVector(tK,K.z),W}static isFrontFacing(J,$,Q,Z){return O9.subVectors(Q,$),s9.subVectors(J,$),O9.cross(s9).dot(Z)<0}set(J,$,Q){return this.a.copy(J),this.b.copy($),this.c.copy(Q),this}setFromPointsAndIndices(J,$,Q,Z){return this.a.copy(J[$]),this.b.copy(J[Q]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,$,Q,Z){return this.a.fromBufferAttribute(J,$),this.b.fromBufferAttribute(J,Q),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return O9.subVectors(this.c,this.b),s9.subVectors(this.a,this.b),O9.cross(s9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return d8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,$){return d8.getBarycoord(J,this.a,this.b,this.c,$)}getInterpolation(J,$,Q,Z,K){return d8.getInterpolation(J,this.a,this.b,this.c,$,Q,Z,K)}containsPoint(J){return d8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return d8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,$){let Q=this.a,Z=this.b,K=this.c,W,Y;T6.subVectors(Z,Q),w6.subVectors(K,Q),sK.subVectors(J,Q);let X=T6.dot(sK),H=w6.dot(sK);if(X<=0&&H<=0)return $.copy(Q);iK.subVectors(J,Z);let U=T6.dot(iK),N=w6.dot(iK);if(U>=0&&N<=U)return $.copy(Z);let F=X*N-U*H;if(F<=0&&X>=0&&U<=0)return W=X/(X-U),$.copy(Q).addScaledVector(T6,W);oK.subVectors(J,K);let G=T6.dot(oK),q=w6.dot(oK);if(q>=0&&G<=q)return $.copy(K);let O=G*H-X*q;if(O<=0&&H>=0&&q<=0)return Y=H/(H-q),$.copy(Q).addScaledVector(w6,Y);let B=U*q-G*N;if(B<=0&&N-U>=0&&G-q>=0)return sX.subVectors(K,Z),Y=(N-U)/(N-U+(G-q)),$.copy(Z).addScaledVector(sX,Y);let R=1/(B+O+F);return W=O*R,Y=F*R,$.copy(Q).addScaledVector(T6,W).addScaledVector(w6,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class k8{constructor(J=new S(1/0,1/0,1/0),$=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=$}set(J,$){return this.min.copy(J),this.max.copy($),this}setFromArray(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$+=3)this.expandByPoint(R9.fromArray(J,$));return this}setFromBufferAttribute(J){this.makeEmpty();for(let $=0,Q=J.count;$<Q;$++)this.expandByPoint(R9.fromBufferAttribute(J,$));return this}setFromPoints(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$++)this.expandByPoint(J[$]);return this}setFromCenterAndSize(J,$){let Q=R9.copy($).multiplyScalar(0.5);return this.min.copy(J).sub(Q),this.max.copy(J).add(Q),this}setFromObject(J,$=!1){return this.makeEmpty(),this.expandByObject(J,$)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,$=!1){J.updateWorldMatrix(!1,!1);let Q=J.geometry;if(Q!==void 0){let K=Q.getAttribute("position");if($===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,Y=K.count;W<Y;W++){if(J.isMesh===!0)J.getVertexPosition(W,R9);else R9.fromBufferAttribute(K,W);R9.applyMatrix4(J.matrixWorld),this.expandByPoint(R9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();aQ.copy(J.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();aQ.copy(Q.boundingBox)}aQ.applyMatrix4(J.matrixWorld),this.union(aQ)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],$);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,$){return $.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,R9),R9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let $,Q;if(J.normal.x>0)$=J.normal.x*this.min.x,Q=J.normal.x*this.max.x;else $=J.normal.x*this.max.x,Q=J.normal.x*this.min.x;if(J.normal.y>0)$+=J.normal.y*this.min.y,Q+=J.normal.y*this.max.y;else $+=J.normal.y*this.max.y,Q+=J.normal.y*this.min.y;if(J.normal.z>0)$+=J.normal.z*this.min.z,Q+=J.normal.z*this.max.z;else $+=J.normal.z*this.max.z,Q+=J.normal.z*this.min.z;return $<=-J.constant&&Q>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(T$),rQ.subVectors(this.max,T$),S6.subVectors(J.a,T$),j6.subVectors(J.b,T$),y6.subVectors(J.c,T$),F7.subVectors(j6,S6),E7.subVectors(y6,j6),x7.subVectors(S6,y6);let $=[0,-F7.z,F7.y,0,-E7.z,E7.y,0,-x7.z,x7.y,F7.z,0,-F7.x,E7.z,0,-E7.x,x7.z,0,-x7.x,-F7.y,F7.x,0,-E7.y,E7.x,0,-x7.y,x7.x,0];if(!eK($,S6,j6,y6,rQ))return!1;if($=[1,0,0,0,1,0,0,0,1],!eK($,S6,j6,y6,rQ))return!1;return tQ.crossVectors(F7,E7),$=[tQ.x,tQ.y,tQ.z],eK($,S6,j6,y6,rQ)}clampPoint(J,$){return $.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,R9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(R9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return o9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),o9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),o9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),o9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),o9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),o9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),o9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),o9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(o9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var o9=[new S,new S,new S,new S,new S,new S,new S,new S],R9=new S,aQ=new k8,S6=new S,j6=new S,y6=new S,F7=new S,E7=new S,x7=new S,T$=new S,rQ=new S,tQ=new S,g7=new S;function eK(J,$,Q,Z,K){for(let W=0,Y=J.length-3;W<=Y;W+=3){g7.fromArray(J,W);let X=K.x*Math.abs(g7.x)+K.y*Math.abs(g7.y)+K.z*Math.abs(g7.z),H=$.dot(g7),U=Q.dot(g7),N=Z.dot(g7);if(Math.max(-Math.max(H,U,N),Math.min(H,U,N))>X)return!1}return!0}var Y8=new S,eQ=new R0,XG=0;class tJ extends M9{constructor(J,$,Q=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XG++}),this.name="",this.array=J,this.itemSize=$,this.count=J!==void 0?J.length/$:0,this.normalized=Q,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,$,Q){J*=this.itemSize,Q*=$.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=$.array[Q+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let $=0,Q=this.count;$<Q;$++)eQ.fromBufferAttribute(this,$),eQ.applyMatrix3(J),this.setXY($,eQ.x,eQ.y);else if(this.itemSize===3)for(let $=0,Q=this.count;$<Q;$++)Y8.fromBufferAttribute(this,$),Y8.applyMatrix3(J),this.setXYZ($,Y8.x,Y8.y,Y8.z);return this}applyMatrix4(J){for(let $=0,Q=this.count;$<Q;$++)Y8.fromBufferAttribute(this,$),Y8.applyMatrix4(J),this.setXYZ($,Y8.x,Y8.y,Y8.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)Y8.fromBufferAttribute(this,$),Y8.applyNormalMatrix(J),this.setXYZ($,Y8.x,Y8.y,Y8.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)Y8.fromBufferAttribute(this,$),Y8.transformDirection(J),this.setXYZ($,Y8.x,Y8.y,Y8.z);return this}set(J,$=0){return this.array.set(J,$),this}getComponent(J,$){let Q=this.array[J*this.itemSize+$];if(this.normalized)Q=L9(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+$]=Q,this}getX(J){let $=this.array[J*this.itemSize];if(this.normalized)$=L9($,this.array);return $}setX(J,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize]=$,this}getY(J){let $=this.array[J*this.itemSize+1];if(this.normalized)$=L9($,this.array);return $}setY(J,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize+1]=$,this}getZ(J){let $=this.array[J*this.itemSize+2];if(this.normalized)$=L9($,this.array);return $}setZ(J,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize+2]=$,this}getW(J){let $=this.array[J*this.itemSize+3];if(this.normalized)$=L9($,this.array);return $}setW(J,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize+3]=$,this}setXY(J,$,Q){if(J*=this.itemSize,this.normalized)$=mJ($,this.array),Q=mJ(Q,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J*=this.itemSize,this.normalized)$=mJ($,this.array),Q=mJ(Q,this.array),Z=mJ(Z,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this}setXYZW(J,$,Q,Z,K){if(J*=this.itemSize,this.normalized)$=mJ($,this.array),Q=mJ(Q,this.array),Z=mJ(Z,this.array),K=mJ(K,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class lZ extends tJ{constructor(J,$,Q){super(new Uint16Array(J),$,Q)}}class uZ extends tJ{constructor(J,$,Q){super(new Uint32Array(J),$,Q)}}class UJ extends tJ{constructor(J,$,Q){super(new Float32Array(J),$,Q)}}var HG=new k8,w$=new S,JW=new S;class S8{constructor(J=new S,$=-1){this.isSphere=!0,this.center=J,this.radius=$}set(J,$){return this.center.copy(J),this.radius=$,this}setFromPoints(J,$){let Q=this.center;if($!==void 0)Q.copy($);else HG.setFromPoints(J).getCenter(Q);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,Q.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let $=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=$*$}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,$){let Q=this.center.distanceToSquared(J);if($.copy(J),Q>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;w$.subVectors(J,this.center);let $=w$.lengthSq();if($>this.radius*this.radius){let Q=Math.sqrt($),Z=(Q-this.radius)*0.5;this.center.addScaledVector(w$,Z/Q),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else JW.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(w$.copy(J.center).add(JW)),this.expandByPoint(w$.copy(J.center).sub(JW));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var UG=0,e8=new QJ,$W=new SJ,v6=new S,u8=new k8,S$=new k8,R8=new S;class bJ extends M9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UG++}),this.uuid=$9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((yN(J))?uZ:lZ)(J,1);else this.index=J;return this}setIndirect(J,$=0){return this.indirect=J,this.indirectOffset=$,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,$){return this.attributes[J]=$,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,$,Q=0){this.groups.push({start:J,count:$,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange(J,$){this.drawRange.start=J,this.drawRange.count=$}applyMatrix4(J){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(J),$.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let K=new NJ().getNormalMatrix(J);Q.applyNormalMatrix(K),Q.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return e8.makeRotationFromQuaternion(J),this.applyMatrix4(e8),this}rotateX(J){return e8.makeRotationX(J),this.applyMatrix4(e8),this}rotateY(J){return e8.makeRotationY(J),this.applyMatrix4(e8),this}rotateZ(J){return e8.makeRotationZ(J),this.applyMatrix4(e8),this}translate(J,$,Q){return e8.makeTranslation(J,$,Q),this.applyMatrix4(e8),this}scale(J,$,Q){return e8.makeScale(J,$,Q),this.applyMatrix4(e8),this}lookAt(J){return $W.lookAt(J),$W.updateMatrix(),this.applyMatrix4($W.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(v6).negate(),this.translate(v6.x,v6.y,v6.z),this}setFromPoints(J){let $=this.getAttribute("position");if($===void 0){let Q=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];Q.push(W.x,W.y,W.z||0)}this.setAttribute("position",new UJ(Q,3))}else{let Q=Math.min(J.length,$.count);for(let Z=0;Z<Q;Z++){let K=J[Z];$.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>$.count)t0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");$.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new k8;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){KJ("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),$)for(let Q=0,Z=$.length;Q<Z;Q++){let K=$[Q];if(u8.setFromBufferAttribute(K),this.morphTargetsRelative)R8.addVectors(this.boundingBox.min,u8.min),this.boundingBox.expandByPoint(R8),R8.addVectors(this.boundingBox.max,u8.max),this.boundingBox.expandByPoint(R8);else this.boundingBox.expandByPoint(u8.min),this.boundingBox.expandByPoint(u8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))KJ('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new S8;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){KJ("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(J){let Q=this.boundingSphere.center;if(u8.setFromBufferAttribute(J),$)for(let K=0,W=$.length;K<W;K++){let Y=$[K];if(S$.setFromBufferAttribute(Y),this.morphTargetsRelative)R8.addVectors(u8.min,S$.min),u8.expandByPoint(R8),R8.addVectors(u8.max,S$.max),u8.expandByPoint(R8);else u8.expandByPoint(S$.min),u8.expandByPoint(S$.max)}u8.getCenter(Q);let Z=0;for(let K=0,W=J.count;K<W;K++)R8.fromBufferAttribute(J,K),Z=Math.max(Z,Q.distanceToSquared(R8));if($)for(let K=0,W=$.length;K<W;K++){let Y=$[K],X=this.morphTargetsRelative;for(let H=0,U=Y.count;H<U;H++){if(R8.fromBufferAttribute(Y,H),X)v6.fromBufferAttribute(J,H),R8.add(v6);Z=Math.max(Z,Q.distanceToSquared(R8))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))KJ('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,$=this.attributes;if(J===null||$.position===void 0||$.normal===void 0||$.uv===void 0){KJ("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Q,normal:Z,uv:K}=$,W=this.getAttribute("tangent");if(W===void 0||W.count!==Q.count)W=new tJ(new Float32Array(4*Q.count),4),this.setAttribute("tangent",W);let Y=[],X=[];for(let k=0;k<Q.count;k++)Y[k]=new S,X[k]=new S;let H=new S,U=new S,N=new S,F=new R0,G=new R0,q=new R0,O=new S,B=new S;function R(k,L,P){H.fromBufferAttribute(Q,k),U.fromBufferAttribute(Q,L),N.fromBufferAttribute(Q,P),F.fromBufferAttribute(K,k),G.fromBufferAttribute(K,L),q.fromBufferAttribute(K,P),U.sub(H),N.sub(H),G.sub(F),q.sub(F);let l=1/(G.x*q.y-q.x*G.y);if(!isFinite(l))return;O.copy(U).multiplyScalar(q.y).addScaledVector(N,-G.y).multiplyScalar(l),B.copy(N).multiplyScalar(G.x).addScaledVector(U,-q.x).multiplyScalar(l),Y[k].add(O),Y[L].add(O),Y[P].add(O),X[k].add(B),X[L].add(B),X[P].add(B)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let k=0,L=E.length;k<L;++k){let P=E[k],l=P.start,b=P.count;for(let d=l,e=l+b;d<e;d+=3)R(J.getX(d+0),J.getX(d+1),J.getX(d+2))}let D=new S,M=new S,V=new S,I=new S;function w(k){V.fromBufferAttribute(Z,k),I.copy(V);let L=Y[k];D.copy(L),D.sub(V.multiplyScalar(V.dot(L))).normalize(),M.crossVectors(I,L);let l=M.dot(X[k])<0?-1:1;W.setXYZW(k,D.x,D.y,D.z,l)}for(let k=0,L=E.length;k<L;++k){let P=E[k],l=P.start,b=P.count;for(let d=l,e=l+b;d<e;d+=3)w(J.getX(d+0)),w(J.getX(d+1)),w(J.getX(d+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,$=this.getAttribute("position");if($!==void 0){let Q=this.getAttribute("normal");if(Q===void 0||Q.count!==$.count)Q=new tJ(new Float32Array($.count*3),3),this.setAttribute("normal",Q);else for(let F=0,G=Q.count;F<G;F++)Q.setXYZ(F,0,0,0);let Z=new S,K=new S,W=new S,Y=new S,X=new S,H=new S,U=new S,N=new S;if(J)for(let F=0,G=J.count;F<G;F+=3){let q=J.getX(F+0),O=J.getX(F+1),B=J.getX(F+2);Z.fromBufferAttribute($,q),K.fromBufferAttribute($,O),W.fromBufferAttribute($,B),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),Y.fromBufferAttribute(Q,q),X.fromBufferAttribute(Q,O),H.fromBufferAttribute(Q,B),Y.add(U),X.add(U),H.add(U),Q.setXYZ(q,Y.x,Y.y,Y.z),Q.setXYZ(O,X.x,X.y,X.z),Q.setXYZ(B,H.x,H.y,H.z)}else for(let F=0,G=$.count;F<G;F+=3)Z.fromBufferAttribute($,F+0),K.fromBufferAttribute($,F+1),W.fromBufferAttribute($,F+2),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),Q.setXYZ(F+0,U.x,U.y,U.z),Q.setXYZ(F+1,U.x,U.y,U.z),Q.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let $=0,Q=J.count;$<Q;$++)R8.fromBufferAttribute(J,$),R8.normalize(),J.setXYZ($,R8.x,R8.y,R8.z)}toNonIndexed(){function J(Y,X){let{array:H,itemSize:U,normalized:N}=Y,F=new H.constructor(X.length*U),G=0,q=0;for(let O=0,B=X.length;O<B;O++){if(Y.isInterleavedBufferAttribute)G=X[O]*Y.data.stride+Y.offset;else G=X[O]*U;for(let R=0;R<U;R++)F[q++]=H[G++]}return new tJ(F,U,N)}if(this.index===null)return t0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new bJ,Q=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],H=J(X,Q);$.setAttribute(Y,H)}let K=this.morphAttributes;for(let Y in K){let X=[],H=K[Y];for(let U=0,N=H.length;U<N;U++){let F=H[U],G=J(F,Q);X.push(G)}$.morphAttributes[Y]=X}$.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let Y=0,X=W.length;Y<X;Y++){let H=W[Y];$.addGroup(H.start,H.count,H.materialIndex)}return $}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let X=this.parameters;for(let H in X)if(X[H]!==void 0)J[H]=X[H];return J}J.data={attributes:{}};let $=this.index;if($!==null)J.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let Q=this.attributes;for(let X in Q){let H=Q[X];J.data.attributes[X]=H.toJSON(J.data)}let Z={},K=!1;for(let X in this.morphAttributes){let H=this.morphAttributes[X],U=[];for(let N=0,F=H.length;N<F;N++){let G=H[N];U.push(G.toJSON(J.data))}if(U.length>0)Z[X]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=J.name;let Q=J.index;if(Q!==null)this.setIndex(Q.clone());let Z=J.attributes;for(let H in Z){let U=Z[H];this.setAttribute(H,U.clone($))}let K=J.morphAttributes;for(let H in K){let U=[],N=K[H];for(let F=0,G=N.length;F<G;F++)U.push(N[F].clone($));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let N=W[H];this.addGroup(N.start,N.count,N.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z${constructor(J,$){this.isInterleavedBuffer=!0,this.array=J,this.stride=$,this.count=J!==void 0?J.length/$:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=$9()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,$,Q){J*=this.stride,Q*=$.stride;for(let Z=0,K=this.stride;Z<K;Z++)this.array[J+Z]=$.array[Q+Z];return this}set(J,$=0){return this.array.set(J,$),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=$9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let $=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Q=new this.constructor($,this.stride);return Q.setUsage(this.usage),Q}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=$9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let $={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return $.usage=this.usage,$}}var w8=new S;class R7{constructor(J,$,Q,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=$,this.offset=Q,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let $=0,Q=this.data.count;$<Q;$++)w8.fromBufferAttribute(this,$),w8.applyMatrix4(J),this.setXYZ($,w8.x,w8.y,w8.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)w8.fromBufferAttribute(this,$),w8.applyNormalMatrix(J),this.setXYZ($,w8.x,w8.y,w8.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)w8.fromBufferAttribute(this,$),w8.transformDirection(J),this.setXYZ($,w8.x,w8.y,w8.z);return this}getComponent(J,$){let Q=this.array[J*this.data.stride+this.offset+$];if(this.normalized)Q=L9(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=mJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+$]=Q,this}setX(J,$){if(this.normalized)$=mJ($,this.array);return this.data.array[J*this.data.stride+this.offset]=$,this}setY(J,$){if(this.normalized)$=mJ($,this.array);return this.data.array[J*this.data.stride+this.offset+1]=$,this}setZ(J,$){if(this.normalized)$=mJ($,this.array);return this.data.array[J*this.data.stride+this.offset+2]=$,this}setW(J,$){if(this.normalized)$=mJ($,this.array);return this.data.array[J*this.data.stride+this.offset+3]=$,this}getX(J){let $=this.data.array[J*this.data.stride+this.offset];if(this.normalized)$=L9($,this.array);return $}getY(J){let $=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)$=L9($,this.array);return $}getZ(J){let $=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)$=L9($,this.array);return $}getW(J){let $=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)$=L9($,this.array);return $}setXY(J,$,Q){if(J=J*this.data.stride+this.offset,this.normalized)$=mJ($,this.array),Q=mJ(Q,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)$=mJ($,this.array),Q=mJ(Q,this.array),Z=mJ(Z,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this}setXYZW(J,$,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)$=mJ($,this.array),Q=mJ(Q,this.array),Z=mJ(Z,this.array),K=mJ(K,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this.data.array[J+3]=K,this}clone(J){if(J===void 0){d$("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)$.push(this.data.array[Z+K])}return new tJ(new this.array.constructor($),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new R7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){d$("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)$.push(this.data.array[Z+K])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:$,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var QW=new S,NG=new S,GG=new NJ;class J9{constructor(J=new S(1,0,0),$=0){this.isPlane=!0,this.normal=J,this.constant=$}set(J,$){return this.normal.copy(J),this.constant=$,this}setComponents(J,$,Q,Z){return this.normal.set(J,$,Q),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,$){return this.normal.copy(J),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(J,$,Q){let Z=QW.subVectors(Q,$).cross(NG.subVectors(J,$)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,$){return $.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,$,Q=!0){let Z=J.delta(QW),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return $.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if(Q===!0&&(W<0||W>1))return null;return $.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let $=this.distanceToPoint(J.start),Q=this.distanceToPoint(J.end);return $<0&&Q>0||Q<0&&$>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,$){let Q=$||GG.getNormalMatrix(J),Z=this.coplanarPoint(QW).applyMatrix4(J),K=this.normal.applyMatrix3(Q).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var FG=0;class f8 extends M9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:FG++}),this.uuid=$9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new y0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let $ in J){let Q=J[$];if(Q===void 0){t0(`Material: parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){t0(`Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Q);else if(Z&&Z.isVector2&&(Q&&Q.isVector2)||Z&&Z.isEuler&&(Q&&Q.isEuler)||Z&&Z.isVector3&&(Q&&Q.isVector3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if($)J={textures:{},images:{}};let Q={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,Q.blending=this.blending,Q.side=this.side,Q.shadowSide=this.shadowSide,Q.vertexColors=this.vertexColors,Q.opacity=this.opacity,Q.transparent=this.transparent,Q.blendSrc=this.blendSrc,Q.blendDst=this.blendDst,Q.blendEquation=this.blendEquation,Q.blendSrcAlpha=this.blendSrcAlpha,Q.blendDstAlpha=this.blendDstAlpha,Q.blendEquationAlpha=this.blendEquationAlpha,Q.blendColor=this.blendColor.getHex(),Q.blendAlpha=this.blendAlpha,Q.depthFunc=this.depthFunc,Q.depthTest=this.depthTest,Q.depthWrite=this.depthWrite,Q.colorWrite=this.colorWrite,Q.clipIntersection=this.clipIntersection,Q.clipShadows=this.clipShadows,Q.stencilWriteMask=this.stencilWriteMask,Q.stencilFunc=this.stencilFunc,Q.stencilRef=this.stencilRef,Q.stencilFuncMask=this.stencilFuncMask,Q.stencilFail=this.stencilFail,Q.stencilZFail=this.stencilZFail,Q.stencilZPass=this.stencilZPass,Q.stencilWrite=this.stencilWrite,Q.polygonOffset=this.polygonOffset,Q.polygonOffsetFactor=this.polygonOffsetFactor,Q.polygonOffsetUnits=this.polygonOffsetUnits,Q.dithering=this.dithering,Q.alphaTest=this.alphaTest,Q.alphaHash=this.alphaHash,Q.alphaToCoverage=this.alphaToCoverage,Q.premultipliedAlpha=this.premultipliedAlpha,Q.forceSinglePass=this.forceSinglePass,Q.allowOverride=this.allowOverride,Q.visible=this.visible,Q.toneMapped=this.toneMapped,Q.name=this.name,this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Q.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Q.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Q.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Q.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON(J).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON(J).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON(J).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON(J).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON(J).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapRotation!==void 0)Q.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Q.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)Q.rotation=this.rotation;if(this.depthPacking!==void 0)Q.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Q.linewidth=this.linewidth;if(this.linecap!==void 0)Q.linecap=this.linecap;if(this.linejoin!==void 0)Q.linejoin=this.linejoin;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.wireframe!==void 0)Q.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Q.flatShading=this.flatShading;if(this.fog!==void 0)Q.fog=this.fog;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function Z(K){let W=[];for(let Y in K){let X=K[Y];delete X.metadata,W.push(X)}return W}if($){let K=Z(J.textures),W=Z(J.images);if(K.length>0)Q.textures=K;if(W.length>0)Q.images=W}return Q}fromJSON(J,$){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new y0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Q)=>new J9().fromJSON(Q));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=$[J.map]||null;if(J.matcap!==void 0)this.matcap=$[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=$[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=$[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=$[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Q=J.normalScale;if(Array.isArray(Q)===!1)Q=[Q,Q];this.normalScale=new R0().fromArray(Q)}if(J.displacementMap!==void 0)this.displacementMap=$[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=$[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=$[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=$[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=$[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=$[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=$[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=$[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=$[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=$[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=$[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=$[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=$[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=$[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new R0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=$[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=$[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=$[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=$[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=$[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=$[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=$[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let $=J.clippingPlanes,Q=null;if($!==null){let Z=$.length;Q=Array(Z);for(let K=0;K!==Z;++K)Q[K]=$[K].clone()}return this.clippingPlanes=Q,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class J6 extends f8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new y0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var f6,j$=new S,b6=new S,h6=new S,x6=new R0,y$=new R0,IU=new QJ,JZ=new S,v$=new S,$Z=new S,iX=new R0,ZW=new R0,oX=new R0;class K$ extends SJ{constructor(J=new J6){super();if(this.isSprite=!0,this.type="Sprite",f6===void 0){f6=new bJ;let $=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),Q=new Z$($,5);f6.setIndex([0,1,2,0,2,3]),f6.setAttribute("position",new R7(Q,3,0,!1)),f6.setAttribute("uv",new R7(Q,2,3,!1))}this.geometry=f6,this.material=J,this.center=new R0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,$){if(J.camera===null)KJ('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(b6.setFromMatrixScale(this.matrixWorld),IU.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),h6.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)b6.multiplyScalar(-h6.z);let Q=this.material.rotation,Z,K;if(Q!==0)K=Math.cos(Q),Z=Math.sin(Q);let W=this.center;QZ(JZ.set(-0.5,-0.5,0),h6,W,b6,Z,K),QZ(v$.set(0.5,-0.5,0),h6,W,b6,Z,K),QZ($Z.set(0.5,0.5,0),h6,W,b6,Z,K),iX.set(0,0),ZW.set(1,0),oX.set(1,1);let Y=J.ray.intersectTriangle(JZ,v$,$Z,!1,j$);if(Y===null){if(QZ(v$.set(-0.5,0.5,0),h6,W,b6,Z,K),ZW.set(0,1),Y=J.ray.intersectTriangle(JZ,$Z,v$,!1,j$),Y===null)return}let X=J.ray.origin.distanceTo(j$);if(X<J.near||X>J.far)return;$.push({distance:X,point:j$.clone(),uv:d8.getInterpolation(j$,JZ,v$,$Z,iX,ZW,oX,new R0),face:null,object:this})}copy(J,$){if(super.copy(J,$),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function QZ(J,$,Q,Z,K,W){if(x6.subVectors(J,Q).addScalar(0.5).multiply(Z),K!==void 0)y$.x=W*x6.x-K*x6.y,y$.y=K*x6.x+W*x6.y;else y$.copy(x6);J.copy($),J.x+=y$.x,J.y+=y$.y,J.applyMatrix4(IU)}var a9=new S,KW=new S,ZZ=new S,KZ=new S;class C7{constructor(J=new S,$=new S(0,0,-1)){this.origin=J,this.direction=$}set(J,$){return this.origin.copy(J),this.direction.copy($),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,$){return $.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,a9)),this}closestPointToPoint(J,$){$.subVectors(J,this.origin);let Q=$.dot(this.direction);if(Q<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let $=a9.subVectors(J,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(J);return a9.copy(this.origin).addScaledVector(this.direction,$),a9.distanceToSquared(J)}distanceSqToSegment(J,$,Q,Z){KW.copy(J).add($).multiplyScalar(0.5),ZZ.copy($).sub(J).normalize(),KZ.copy(this.origin).sub(KW);let K=J.distanceTo($)*0.5,W=-this.direction.dot(ZZ),Y=KZ.dot(this.direction),X=-KZ.dot(ZZ),H=KZ.lengthSq(),U=Math.abs(1-W*W),N,F,G,q;if(U>0)if(N=W*X-Y,F=W*Y-X,q=K*U,N>=0)if(F>=-q)if(F<=q){let O=1/U;N*=O,F*=O,G=N*(N+W*F+2*Y)+F*(W*N+F+2*X)+H}else F=K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;else F=-K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;else if(F<=-q)N=Math.max(0,-(-W*K+Y)),F=N>0?-K:Math.min(Math.max(-K,-X),K),G=-N*N+F*(F+2*X)+H;else if(F<=q)N=0,F=Math.min(Math.max(-K,-X),K),G=F*(F+2*X)+H;else N=Math.max(0,-(W*K+Y)),F=N>0?K:Math.min(Math.max(-K,-X),K),G=-N*N+F*(F+2*X)+H;else F=W>0?-K:K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;if(Q)Q.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(KW).addScaledVector(ZZ,F);return G}intersectSphere(J,$){if(J.radius<0)return null;a9.subVectors(J.center,this.origin);let Q=a9.dot(this.direction),Z=a9.dot(a9)-Q*Q,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),Y=Q-W,X=Q+W;if(X<0)return null;if(Y<0)return this.at(X,$);return this.at(Y,$)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let $=J.normal.dot(this.direction);if($===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot(J.normal)+J.constant)/$;return Q>=0?Q:null}intersectPlane(J,$){let Q=this.distanceToPlane(J);if(Q===null)return null;return this.at(Q,$)}intersectsPlane(J){let $=J.distanceToPoint(this.origin);if($===0)return!0;if(J.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(J,$){let Q,Z,K,W,Y,X,H=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,F=this.origin;if(H>=0)Q=(J.min.x-F.x)*H,Z=(J.max.x-F.x)*H;else Q=(J.max.x-F.x)*H,Z=(J.min.x-F.x)*H;if(U>=0)K=(J.min.y-F.y)*U,W=(J.max.y-F.y)*U;else K=(J.max.y-F.y)*U,W=(J.min.y-F.y)*U;if(Q>W||K>Z)return null;if(K>Q||isNaN(Q))Q=K;if(W<Z||isNaN(Z))Z=W;if(N>=0)Y=(J.min.z-F.z)*N,X=(J.max.z-F.z)*N;else Y=(J.max.z-F.z)*N,X=(J.min.z-F.z)*N;if(Q>X||Y>Z)return null;if(Y>Q||Q!==Q)Q=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at(Q>=0?Q:Z,$)}intersectsBox(J){return this.intersectBox(J,a9)!==null}intersectTriangle(J,$,Q,Z,K){let W=this.origin,Y=this.direction,X=Y.x,H=Y.y,U=Y.z,N=J.x-W.x,F=J.y-W.y,G=J.z-W.z,q=$.x-W.x,O=$.y-W.y,B=$.z-W.z,R=Q.x-W.x,E=Q.y-W.y,D=Q.z-W.z,M=Math.abs(X),V=Math.abs(H),I=Math.abs(U),w,k,L,P,l,b,d,e,v,j,g,f;if(M>=V&&M>=I)if(L=X,b=N,v=q,f=R,X>=0)w=H,k=U,P=F,l=G,d=O,e=B,j=E,g=D;else w=U,k=H,P=G,l=F,d=B,e=O,j=D,g=E;else if(V>=I)if(L=H,b=F,v=O,f=E,H>=0)w=U,k=X,P=G,l=N,d=B,e=q,j=D,g=R;else w=X,k=U,P=N,l=G,d=q,e=B,j=R,g=D;else if(L=U,b=G,v=B,f=D,U>=0)w=X,k=H,P=N,l=F,d=q,e=O,j=R,g=E;else w=H,k=X,P=F,l=N,d=O,e=q,j=E,g=R;if(L===0)return null;let a=w/L,m=k/L,J0=1/L,X0=P-a*b,y=l-m*b,o=d-a*v,N0=e-m*v,t=j-a*f,x=g-m*f,_=t*N0-x*o,h=X0*x-y*t,u=o*y-N0*X0;if(Z){if(_<0||h<0||u<0)return null}else if((_<0||h<0||u<0)&&(_>0||h>0||u>0))return null;let W0=_+h+u;if(W0===0)return null;let $0=J0*(_*b+h*v+u*f);if(W0>0?$0<0:$0>0)return null;return this.at($0/W0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xJ extends f8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new y0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new V9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var aX=new QJ,p7=new C7,WZ=new S8,rX=new S,YZ=new S,XZ=new S,HZ=new S,WW=new S,UZ=new S,tX=new S,NZ=new S;class I0 extends SJ{constructor(J=new bJ,$=new xJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,$){if(super.copy(J,$),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}getVertexPosition(J,$){let Q=this.geometry,Z=Q.attributes.position,K=Q.morphAttributes.position,W=Q.morphTargetsRelative;$.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(K&&Y){UZ.set(0,0,0);for(let X=0,H=K.length;X<H;X++){let U=Y[X],N=K[X];if(U===0)continue;if(WW.fromBufferAttribute(N,J),W)UZ.addScaledVector(WW,U);else UZ.addScaledVector(WW.sub($),U)}$.add(UZ)}return $}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(WZ.copy(Q.boundingSphere),WZ.applyMatrix4(K),p7.copy(J.ray).recast(J.near),WZ.containsPoint(p7.origin)===!1){if(p7.intersectSphere(WZ,rX)===null)return;if(p7.origin.distanceToSquared(rX)>(J.far-J.near)**2)return}if(aX.copy(K).invert(),p7.copy(J.ray).applyMatrix4(aX),Q.boundingBox!==null){if(p7.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections(J,$,p7)}_computeIntersections(J,$,Q){let Z,K=this.geometry,W=this.material,Y=K.index,X=K.attributes.position,H=K.attributes.uv,U=K.attributes.uv1,N=K.attributes.normal,F=K.groups,G=K.drawRange;if(Y!==null)if(Array.isArray(W))for(let q=0,O=F.length;q<O;q++){let B=F[q],R=W[B.materialIndex],E=Math.max(B.start,G.start),D=Math.min(Y.count,Math.min(B.start+B.count,G.start+G.count));for(let M=E,V=D;M<V;M+=3){let I=Y.getX(M),w=Y.getX(M+1),k=Y.getX(M+2);if(Z=GZ(this,R,J,Q,H,U,N,I,w,k),Z)Z.faceIndex=Math.floor(M/3),Z.face.materialIndex=B.materialIndex,$.push(Z)}}else{let q=Math.max(0,G.start),O=Math.min(Y.count,G.start+G.count);for(let B=q,R=O;B<R;B+=3){let E=Y.getX(B),D=Y.getX(B+1),M=Y.getX(B+2);if(Z=GZ(this,W,J,Q,H,U,N,E,D,M),Z)Z.faceIndex=Math.floor(B/3),$.push(Z)}}else if(X!==void 0)if(Array.isArray(W))for(let q=0,O=F.length;q<O;q++){let B=F[q],R=W[B.materialIndex],E=Math.max(B.start,G.start),D=Math.min(X.count,Math.min(B.start+B.count,G.start+G.count));for(let M=E,V=D;M<V;M+=3){let I=M,w=M+1,k=M+2;if(Z=GZ(this,R,J,Q,H,U,N,I,w,k),Z)Z.faceIndex=Math.floor(M/3),Z.face.materialIndex=B.materialIndex,$.push(Z)}}else{let q=Math.max(0,G.start),O=Math.min(X.count,G.start+G.count);for(let B=q,R=O;B<R;B+=3){let E=B,D=B+1,M=B+2;if(Z=GZ(this,W,J,Q,H,U,N,E,D,M),Z)Z.faceIndex=Math.floor(B/3),$.push(Z)}}}}function EG(J,$,Q,Z,K,W,Y,X){let H;if($.side===1)H=Z.intersectTriangle(Y,W,K,!0,X);else H=Z.intersectTriangle(K,W,Y,$.side===0,X);if(H===null)return null;NZ.copy(X),NZ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(NZ);if(U<Q.near||U>Q.far)return null;return{distance:U,point:NZ.clone(),object:J}}function GZ(J,$,Q,Z,K,W,Y,X,H,U){J.getVertexPosition(X,YZ),J.getVertexPosition(H,XZ),J.getVertexPosition(U,HZ);let N=EG(J,$,Q,Z,YZ,XZ,HZ,tX);if(N){let F=new S;if(d8.getBarycoord(tX,YZ,XZ,HZ,F),K)N.uv=d8.getInterpolatedAttribute(K,X,H,U,F,new R0);if(W)N.uv1=d8.getInterpolatedAttribute(W,X,H,U,F,new R0);if(Y){if(N.normal=d8.getInterpolatedAttribute(Y,X,H,U,F,new S),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let G={a:X,b:H,c:U,normal:new S,materialIndex:0};d8.getNormal(YZ,XZ,HZ,G.normal),N.face=G,N.barycoord=F}return N}var f$=new lJ,eX=new lJ,JH=new lJ,qG=new lJ,$H=new QJ,FZ=new S,YW=new S8,QH=new QJ,XW=new C7;class dZ extends I0{constructor(J,$){super(J,$);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new QJ,this.bindMatrixInverse=new QJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new k8;this.boundingBox.makeEmpty();let $=J.getAttribute("position");for(let Q=0;Q<$.count;Q++)this.getVertexPosition(Q,FZ),this.boundingBox.expandByPoint(FZ)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new S8;this.boundingSphere.makeEmpty();let $=J.getAttribute("position");for(let Q=0;Q<$.count;Q++)this.getVertexPosition(Q,FZ),this.boundingSphere.expandByPoint(FZ)}copy(J,$){if(super.copy(J,$),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,$){let Q=this.material,Z=this.matrixWorld;if(Q===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(YW.copy(this.boundingSphere),YW.applyMatrix4(Z),J.ray.intersectsSphere(YW)===!1)return;if(QH.copy(Z).invert(),XW.copy(J.ray).applyMatrix4(QH),this.boundingBox!==null){if(XW.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,$,XW)}getVertexPosition(J,$){return super.getVertexPosition(J,$),this.applyBoneTransform(J,$),$}bind(J,$){if(this.skeleton=J,$===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),$=this.matrixWorld;this.bindMatrix.copy($),this.bindMatrixInverse.copy($).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new lJ,$=this.geometry.attributes.skinWeight;for(let Q=0,Z=$.count;Q<Z;Q++){J.fromBufferAttribute($,Q);let K=1/J.manhattanLength();if(K!==1/0)J.multiplyScalar(K);else J.set(1,0,0,0);$.setXYZW(Q,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else t0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,$){let Q=this.skeleton,Z=this.geometry;if(eX.fromBufferAttribute(Z.attributes.skinIndex,J),JH.fromBufferAttribute(Z.attributes.skinWeight,J),$.isVector4)f$.copy($),$.set(0,0,0,0);else f$.set(...$,1),$.set(0,0,0);f$.applyMatrix4(this.bindMatrix);for(let K=0;K<4;K++){let W=JH.getComponent(K);if(W!==0){let Y=eX.getComponent(K);$H.multiplyMatrices(Q.bones[Y].matrixWorld,Q.boneInverses[Y]),$.addScaledVector(qG.copy(f$).applyMatrix4($H),W)}}if($.isVector4)$.w=f$.w;return $.applyMatrix4(this.bindMatrixInverse)}}class YQ extends SJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class $6 extends $8{constructor(J=null,$=1,Q=1,Z,K,W,Y,X,H=1003,U=1003,N,F){super(null,W,Y,X,H,U,Z,K,N,F);this.isDataTexture=!0,this.image={data:J,width:$,height:Q},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var ZH=new QJ,OG=new QJ;class XQ{constructor(J=[],$=[]){this.uuid=$9(),this.bones=J.slice(0),this.boneInverses=$,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,$=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),$.length===0)this.calculateInverses();else if(J.length!==$.length){t0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Q=0,Z=this.bones.length;Q<Z;Q++)this.boneInverses.push(new QJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,$=this.bones.length;J<$;J++){let Q=new QJ;if(this.bones[J])Q.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push(Q)}}pose(){for(let J=0,$=this.bones.length;J<$;J++){let Q=this.bones[J];if(Q)Q.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,$=this.bones.length;J<$;J++){let Q=this.bones[J];if(Q){if(Q.parent&&Q.parent.isBone)Q.matrix.copy(Q.parent.matrixWorld).invert(),Q.matrix.multiply(Q.matrixWorld);else Q.matrix.copy(Q.matrixWorld);Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)}}}update(){let J=this.bones,$=this.boneInverses,Q=this.boneMatrices,Z=this.boneTexture;for(let K=0,W=J.length;K<W;K++){let Y=J[K]?J[K].matrixWorld:OG;ZH.multiplyMatrices(Y,$[K]),ZH.toArray(Q,K*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new XQ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let $=new Float32Array(J*J*4);$.set(this.boneMatrices);let Q=new $6($,J,J,1023,1015);return Q.needsUpdate=!0,this.boneMatrices=$,this.boneTexture=Q,this}getBoneByName(J){for(let $=0,Q=this.bones.length;$<Q;$++){let Z=this.bones[$];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,$){this.uuid=J.uuid;for(let Q=0,Z=J.bones.length;Q<Z;Q++){let K=J.bones[Q],W=$[K];if(W===void 0)t0("Skeleton: No bone found with UUID:",K),W=new YQ;this.bones.push(W),this.boneInverses.push(new QJ().fromArray(J.boneInverses[Q]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let $=this.bones,Q=this.boneInverses;for(let Z=0,K=$.length;Z<K;Z++){let W=$[Z];J.bones.push(W.uuid);let Y=Q[Z];J.boneInverses.push(Y.toArray())}return J}}class L7 extends tJ{constructor(J,$,Q,Z=1){super(J,$,Q);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var g6=new QJ,KH=new QJ,EZ=[],WH=new k8,RG=new QJ,b$=new I0,h$=new S8;class f9 extends I0{constructor(J,$,Q){super(J,$);this.isInstancedMesh=!0,this.instanceMatrix=new L7(new Float32Array(Q*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Q,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<Q;Z++)this.setMatrixAt(Z,RG)}computeBoundingBox(){let J=this.geometry,$=this.count;if(this.boundingBox===null)this.boundingBox=new k8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Q=0;Q<$;Q++)this.getMatrixAt(Q,g6),WH.copy(J.boundingBox).applyMatrix4(g6),this.boundingBox.union(WH)}computeBoundingSphere(){let J=this.geometry,$=this.count;if(this.boundingSphere===null)this.boundingSphere=new S8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Q=0;Q<$;Q++)this.getMatrixAt(Q,g6),h$.copy(J.boundingSphere).applyMatrix4(g6),this.boundingSphere.union(h$)}copy(J,$){if(super.copy(J,$),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,$){if(this.instanceColor===null)return $.setRGB(1,1,1);else return $.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,$){return $.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,$){let Q=$.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=Q.length+1,W=J*K+1;for(let Y=0;Y<Q.length;Y++)Q[Y]=Z[W+Y]}raycast(J,$){let Q=this.matrixWorld,Z=this.count;if(b$.geometry=this.geometry,b$.material=this.material,b$.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(h$.copy(this.boundingSphere),h$.applyMatrix4(Q),J.ray.intersectsSphere(h$)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,g6),KH.multiplyMatrices(Q,g6),b$.matrixWorld=KH,b$.raycast(J,EZ);for(let W=0,Y=EZ.length;W<Y;W++){let X=EZ[W];X.instanceId=K,X.object=this,$.push(X)}EZ.length=0}}setColorAt(J,$){if(this.instanceColor===null)this.instanceColor=new L7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return $.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,$){return $.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,$){let Q=$.morphTargetInfluences,Z=Q.length+1;if(this.morphTexture===null)this.morphTexture=new $6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let H=0;H<Q.length;H++)W+=Q[H];let Y=this.geometry.morphTargetsRelative?1:1-W,X=Z*J;return K[X]=Y,K.set(Q,X+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var m7=new S8,LG=new R0(0.5,0.5),qZ=new S;class Q6{constructor(J=new J9,$=new J9,Q=new J9,Z=new J9,K=new J9,W=new J9){this.planes=[J,$,Q,Z,K,W]}set(J,$,Q,Z,K,W){let Y=this.planes;return Y[0].copy(J),Y[1].copy($),Y[2].copy(Q),Y[3].copy(Z),Y[4].copy(K),Y[5].copy(W),this}copy(J){let $=this.planes;for(let Q=0;Q<6;Q++)$[Q].copy(J.planes[Q]);return this}setFromProjectionMatrix(J,$=2000,Q=!1){let Z=this.planes,K=J.elements,W=K[0],Y=K[1],X=K[2],H=K[3],U=K[4],N=K[5],F=K[6],G=K[7],q=K[8],O=K[9],B=K[10],R=K[11],E=K[12],D=K[13],M=K[14],V=K[15];if(Z[0].setComponents(H-W,G-U,R-q,V-E).normalize(),Z[1].setComponents(H+W,G+U,R+q,V+E).normalize(),Z[2].setComponents(H+Y,G+N,R+O,V+D).normalize(),Z[3].setComponents(H-Y,G-N,R-O,V-D).normalize(),Q)Z[4].setComponents(X,F,B,M).normalize(),Z[5].setComponents(H-X,G-F,R-B,V-M).normalize();else if(Z[4].setComponents(H-X,G-F,R-B,V-M).normalize(),$===2000)Z[5].setComponents(H+X,G+F,R+B,V+M).normalize();else if($===2001)Z[5].setComponents(X,F,B,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();m7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let $=J.geometry;if($.boundingSphere===null)$.computeBoundingSphere();m7.copy($.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(m7)}intersectsSprite(J){m7.center.set(0,0,0);let $=LG.distanceTo(J.center);return m7.radius=0.7071067811865476+$,m7.applyMatrix4(J.matrixWorld),this.intersectsSphere(m7)}intersectsSphere(J){let $=this.planes,Q=J.center,Z=-J.radius;for(let K=0;K<6;K++)if($[K].distanceToPoint(Q)<Z)return!1;return!0}intersectsBox(J){let $=this.planes;for(let Q=0;Q<6;Q++){let Z=$[Q];if(qZ.x=Z.normal.x>0?J.max.x:J.min.x,qZ.y=Z.normal.y>0?J.max.y:J.min.y,qZ.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(qZ)<0)return!1}return!0}containsPoint(J){let $=this.planes;for(let Q=0;Q<6;Q++)if($[Q].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class HQ extends f8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new y0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var PZ=new S,IZ=new S,YH=new QJ,x$=new C7,OZ=new S8,HW=new S,XH=new S;class W$ extends SJ{constructor(J=new bJ,$=new HQ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[0];for(let Z=1,K=$.count;Z<K;Z++)PZ.fromBufferAttribute($,Z-1),IZ.fromBufferAttribute($,Z),Q[Z]=Q[Z-1],Q[Z]+=PZ.distanceTo(IZ);J.setAttribute("lineDistance",new UJ(Q,1))}else t0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,K=J.params.Line.threshold,W=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(OZ.copy(Q.boundingSphere),OZ.applyMatrix4(Z),OZ.radius+=K,J.ray.intersectsSphere(OZ)===!1)return;YH.copy(Z).invert(),x$.copy(J.ray).applyMatrix4(YH);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,H=this.isLineSegments?2:1,U=Q.index,F=Q.attributes.position;if(U!==null){let G=Math.max(0,W.start),q=Math.min(U.count,W.start+W.count);for(let O=G,B=q-1;O<B;O+=H){let R=U.getX(O),E=U.getX(O+1),D=RZ(this,J,x$,X,R,E,O);if(D)$.push(D)}if(this.isLineLoop){let O=U.getX(q-1),B=U.getX(G),R=RZ(this,J,x$,X,O,B,q-1);if(R)$.push(R)}}else{let G=Math.max(0,W.start),q=Math.min(F.count,W.start+W.count);for(let O=G,B=q-1;O<B;O+=H){let R=RZ(this,J,x$,X,O,O+1,O);if(R)$.push(R)}if(this.isLineLoop){let O=RZ(this,J,x$,X,q-1,G,q-1);if(O)$.push(O)}}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function RZ(J,$,Q,Z,K,W,Y){let X=J.geometry.attributes.position;if(PZ.fromBufferAttribute(X,K),IZ.fromBufferAttribute(X,W),Q.distanceSqToSegment(PZ,IZ,HW,XH)>Z)return;HW.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(HW);if(U<$.near||U>$.far)return;return{distance:U,point:XH.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var HH=new S,UH=new S;class cZ extends W${constructor(J,$){super(J,$);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[];for(let Z=0,K=$.count;Z<K;Z+=2)HH.fromBufferAttribute($,Z),UH.fromBufferAttribute($,Z+1),Q[Z]=Z===0?0:Q[Z-1],Q[Z+1]=Q[Z]+HH.distanceTo(UH);J.setAttribute("lineDistance",new UJ(Q,1))}else t0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nZ extends W${constructor(J,$){super(J,$);this.isLineLoop=!0,this.type="LineLoop"}}class Z6 extends f8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new y0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var NH=new QJ,qW=new C7,LZ=new S8,VZ=new S;class Y$ extends SJ{constructor(J=new bJ,$=new Z6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,K=J.params.Points.threshold,W=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(LZ.copy(Q.boundingSphere),LZ.applyMatrix4(Z),LZ.radius+=K,J.ray.intersectsSphere(LZ)===!1)return;NH.copy(Z).invert(),qW.copy(J.ray).applyMatrix4(NH);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,H=Q.index,N=Q.attributes.position;if(H!==null){let F=Math.max(0,W.start),G=Math.min(H.count,W.start+W.count);for(let q=F,O=G;q<O;q++){let B=H.getX(q);VZ.fromBufferAttribute(N,B),GH(VZ,B,X,Z,J,$,this)}}else{let F=Math.max(0,W.start),G=Math.min(N.count,W.start+W.count);for(let q=F,O=G;q<O;q++)VZ.fromBufferAttribute(N,q),GH(VZ,q,X,Z,J,$,this)}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function GH(J,$,Q,Z,K,W,Y){let X=qW.distanceSqToPoint(J);if(X<Q){let H=new S;qW.closestPointToPoint(J,H),H.applyMatrix4(Z);let U=K.ray.origin.distanceTo(H);if(U<K.near||U>K.far)return;W.push({distance:U,distanceToRay:Math.sqrt(X),point:H,index:$,face:null,faceIndex:null,barycoord:null,object:Y})}}class sZ extends $8{constructor(J=[],$=301,Q,Z,K,W,Y,X,H,U){super(J,$,Q,Z,K,W,Y,X,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class n8 extends $8{constructor(J,$,Q,Z,K,W,Y,X,H){super(J,$,Q,Z,K,W,Y,X,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class K6 extends $8{constructor(J,$,Q=1014,Z,K,W,Y=1003,X=1003,H,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:$,depth:N};super(F,Z,K,W,Y,X,U,Q,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new KQ(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let $=super.toJSON(J);return $.compareFunction=this.compareFunction,$}}class qY extends K6{constructor(J,$=1014,Q=301,Z,K,W=1003,Y=1003,X,H=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,$,Q,Z,K,W,Y,X,H);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class iZ extends $8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class wJ extends bJ{constructor(J=1,$=1,Q=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:$,depth:Q,widthSegments:Z,heightSegments:K,depthSegments:W};let Y=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let X=[],H=[],U=[],N=[],F=0,G=0;q("z","y","x",-1,-1,Q,$,J,W,K,0),q("z","y","x",1,-1,Q,$,-J,W,K,1),q("x","z","y",1,1,J,Q,$,Z,W,2),q("x","z","y",1,-1,J,Q,-$,Z,W,3),q("x","y","z",1,-1,J,$,Q,Z,K,4),q("x","y","z",-1,-1,J,$,-Q,Z,K,5),this.setIndex(X),this.setAttribute("position",new UJ(H,3)),this.setAttribute("normal",new UJ(U,3)),this.setAttribute("uv",new UJ(N,2));function q(O,B,R,E,D,M,V,I,w,k,L){let P=M/w,l=V/k,b=M/2,d=V/2,e=I/2,v=w+1,j=k+1,g=0,f=0,a=new S;for(let m=0;m<j;m++){let J0=m*l-d;for(let X0=0;X0<v;X0++){let y=X0*P-b;a[O]=y*E,a[B]=J0*D,a[R]=e,H.push(a.x,a.y,a.z),a[O]=0,a[B]=0,a[R]=I>0?1:-1,U.push(a.x,a.y,a.z),N.push(X0/w),N.push(1-m/k),g+=1}}for(let m=0;m<k;m++)for(let J0=0;J0<w;J0++){let X0=F+J0+v*m,y=F+J0+v*(m+1),o=F+(J0+1)+v*(m+1),N0=F+(J0+1)+v*m;X.push(X0,y,N0),X.push(y,o,N0),f+=6}Y.addGroup(G,f,L),G+=f,F+=g}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new wJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class J7 extends bJ{constructor(J=1,$=32,Q=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:$,thetaStart:Q,thetaLength:Z},$=Math.max(3,$);let K=[],W=[],Y=[],X=[],H=new S,U=new R0;W.push(0,0,0),Y.push(0,0,1),X.push(0.5,0.5);for(let N=0,F=3;N<=$;N++,F+=3){let G=Q+N/$*Z;H.x=J*Math.cos(G),H.y=J*Math.sin(G),W.push(H.x,H.y,H.z),Y.push(0,0,1),U.x=(W[F]/J+1)/2,U.y=(W[F+1]/J+1)/2,X.push(U.x,U.y)}for(let N=1;N<=$;N++)K.push(N,N+1,0);this.setIndex(K),this.setAttribute("position",new UJ(W,3)),this.setAttribute("normal",new UJ(Y,3)),this.setAttribute("uv",new UJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new J7(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class LJ extends bJ{constructor(J=1,$=1,Q=1,Z=32,K=1,W=!1,Y=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:$,height:Q,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:Y,thetaLength:X};let H=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],N=[],F=[],G=[],q=0,O=[],B=Q/2,R=0;if(E(),W===!1){if(J>0)D(!0);if($>0)D(!1)}this.setIndex(U),this.setAttribute("position",new UJ(N,3)),this.setAttribute("normal",new UJ(F,3)),this.setAttribute("uv",new UJ(G,2));function E(){let M=new S,V=new S,I=0,w=($-J)/Q;for(let k=0;k<=K;k++){let L=[],P=k/K,l=P*($-J)+J;for(let b=0;b<=Z;b++){let d=b/Z,e=d*X+Y,v=Math.sin(e),j=Math.cos(e);V.x=l*v,V.y=-P*Q+B,V.z=l*j,N.push(V.x,V.y,V.z),M.set(v,w,j).normalize(),F.push(M.x,M.y,M.z),G.push(d,1-P),L.push(q++)}O.push(L)}for(let k=0;k<Z;k++)for(let L=0;L<K;L++){let P=O[L][k],l=O[L+1][k],b=O[L+1][k+1],d=O[L][k+1];if(J>0||L!==0)U.push(P,l,d),I+=3;if($>0||L!==K-1)U.push(l,b,d),I+=3}H.addGroup(R,I,0),R+=I}function D(M){let V=q,I=new R0,w=new S,k=0,L=M===!0?J:$,P=M===!0?1:-1;for(let b=1;b<=Z;b++)N.push(0,B*P,0),F.push(0,P,0),G.push(0.5,0.5),q++;let l=q;for(let b=0;b<=Z;b++){let e=b/Z*X+Y,v=Math.cos(e),j=Math.sin(e);w.x=L*j,w.y=B*P,w.z=L*v,N.push(w.x,w.y,w.z),F.push(0,P,0),I.x=v*0.5+0.5,I.y=j*0.5*P+0.5,G.push(I.x,I.y),q++}for(let b=0;b<Z;b++){let d=V+b,e=l+b;if(M===!0)U.push(e,e+1,d);else U.push(e+1,e,d);k+=3}H.addGroup(R,k,M===!0?1:2),R+=k}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new LJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class W6 extends LJ{constructor(J=1,$=1,Q=32,Z=1,K=!1,W=0,Y=Math.PI*2){super(0,J,$,Q,Z,K,W,Y);this.type="ConeGeometry",this.parameters={radius:J,height:$,radialSegments:Q,heightSegments:Z,openEnded:K,thetaStart:W,thetaLength:Y}}static fromJSON(J){return new W6(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class oZ extends bJ{constructor(J=[],$=[],Q=1,Z=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:$,radius:Q,detail:Z};let K=[],W=[];if(Y(Z),H(Q),U(),this.setAttribute("position",new UJ(K,3)),this.setAttribute("normal",new UJ(K.slice(),3)),this.setAttribute("uv",new UJ(W,2)),Z===0)this.computeVertexNormals();else this.normalizeNormals();function Y(E){let D=new S,M=new S,V=new S;for(let I=0;I<$.length;I+=3)G($[I+0],D),G($[I+1],M),G($[I+2],V),X(D,M,V,E)}function X(E,D,M,V){let I=V+1,w=[];for(let k=0;k<=I;k++){w[k]=[];let L=E.clone().lerp(M,k/I),P=D.clone().lerp(M,k/I),l=I-k;for(let b=0;b<=l;b++)if(b===0&&k===I)w[k][b]=L;else w[k][b]=L.clone().lerp(P,b/l)}for(let k=0;k<I;k++)for(let L=0;L<2*(I-k)-1;L++){let P=Math.floor(L/2);if(L%2===0)F(w[k][P+1]),F(w[k+1][P]),F(w[k][P]);else F(w[k][P+1]),F(w[k+1][P+1]),F(w[k+1][P])}}function H(E){let D=new S;for(let M=0;M<K.length;M+=3)D.x=K[M+0],D.y=K[M+1],D.z=K[M+2],D.normalize().multiplyScalar(E),K[M+0]=D.x,K[M+1]=D.y,K[M+2]=D.z}function U(){let E=new S;for(let D=0;D<K.length;D+=3){E.x=K[D+0],E.y=K[D+1],E.z=K[D+2];let M=B(E)/2/Math.PI+0.5,V=R(E)/Math.PI+0.5;W.push(M,1-V)}q(),N()}function N(){for(let E=0;E<W.length;E+=6){let D=W[E+0],M=W[E+2],V=W[E+4],I=Math.max(D,M,V),w=Math.min(D,M,V);if(I>0.9&&w<0.1){if(D<0.2)W[E+0]+=1;if(M<0.2)W[E+2]+=1;if(V<0.2)W[E+4]+=1}}}function F(E){K.push(E.x,E.y,E.z)}function G(E,D){let M=E*3;D.x=J[M+0],D.y=J[M+1],D.z=J[M+2]}function q(){let E=new S,D=new S,M=new S,V=new S,I=new R0,w=new R0,k=new R0;for(let L=0,P=0;L<K.length;L+=9,P+=6){E.set(K[L+0],K[L+1],K[L+2]),D.set(K[L+3],K[L+4],K[L+5]),M.set(K[L+6],K[L+7],K[L+8]),I.set(W[P+0],W[P+1]),w.set(W[P+2],W[P+3]),k.set(W[P+4],W[P+5]),V.copy(E).add(D).add(M).divideScalar(3);let l=B(V);O(I,P+0,E,l),O(w,P+2,D,l),O(k,P+4,M,l)}}function O(E,D,M,V){if(V<0&&E.x===1)W[D]=E.x-1;if(M.x===0&&M.z===0)W[D]=V/2/Math.PI+0.5}function B(E){return Math.atan2(E.z,-E.x)}function R(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new oZ(J.vertices,J.indices,J.radius,J.detail)}}class K9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){t0("Curve: .getPoint() not implemented.")}getPointAt(J,$){let Q=this.getUtoTmapping(J);return this.getPoint(Q,$)}getPoints(J=5){let $=[];for(let Q=0;Q<=J;Q++)$.push(this.getPoint(Q/J));return $}getSpacedPoints(J=5){let $=[];for(let Q=0;Q<=J;Q++)$.push(this.getPointAt(Q/J));return $}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let $=[],Q,Z=this.getPoint(0),K=0;$.push(0);for(let W=1;W<=J;W++)Q=this.getPoint(W/J),K+=Q.distanceTo(Z),$.push(K),Z=Q;return this.cacheArcLengths=$,$}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,$=null){let Q=this.getLengths(),Z=0,K=Q.length,W;if($)W=$;else W=J*Q[K-1];let Y=0,X=K-1,H;while(Y<=X)if(Z=Math.floor(Y+(X-Y)/2),H=Q[Z]-W,H<0)Y=Z+1;else if(H>0)X=Z-1;else{X=Z;break}if(Z=X,Q[Z]===W)return Z/(K-1);let U=Q[Z],F=Q[Z+1]-U,G=(W-U)/F;return(Z+G)/(K-1)}getTangent(J,$){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),Y=this.getPoint(K),X=$||(W.isVector2?new R0:new S);return X.copy(Y).sub(W).normalize(),X}getTangentAt(J,$){let Q=this.getUtoTmapping(J);return this.getTangent(Q,$)}computeFrenetFrames(J,$=!1){let Q=new S,Z=[],K=[],W=[],Y=new S,X=new QJ;for(let G=0;G<=J;G++){let q=G/J;Z[G]=this.getTangentAt(q,new S)}K[0]=new S,W[0]=new S;let H=Number.MAX_VALUE,U=Math.abs(Z[0].x),N=Math.abs(Z[0].y),F=Math.abs(Z[0].z);if(U<=H)H=U,Q.set(1,0,0);if(N<=H)H=N,Q.set(0,1,0);if(F<=H)Q.set(0,0,1);Y.crossVectors(Z[0],Q).normalize(),K[0].crossVectors(Z[0],Y),W[0].crossVectors(Z[0],K[0]);for(let G=1;G<=J;G++){if(K[G]=K[G-1].clone(),W[G]=W[G-1].clone(),Y.crossVectors(Z[G-1],Z[G]),Y.length()>Number.EPSILON){Y.normalize();let q=Math.acos(OJ(Z[G-1].dot(Z[G]),-1,1));K[G].applyMatrix4(X.makeRotationAxis(Y,q))}W[G].crossVectors(Z[G],K[G])}if($===!0){let G=Math.acos(OJ(K[0].dot(K[J]),-1,1));if(G/=J,Z[0].dot(Y.crossVectors(K[0],K[J]))>0)G=-G;for(let q=1;q<=J;q++)K[q].applyMatrix4(X.makeRotationAxis(Z[q],G*q)),W[q].crossVectors(Z[q],K[q])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class UQ extends K9{constructor(J=0,$=0,Q=1,Z=1,K=0,W=Math.PI*2,Y=!1,X=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=$,this.xRadius=Q,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=Y,this.aRotation=X}getPoint(J,$=new R0){let Q=$,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let Y=this.aStartAngle+J*K,X=this.aX+this.xRadius*Math.cos(Y),H=this.aY+this.yRadius*Math.sin(Y);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),F=X-this.aX,G=H-this.aY;X=F*U-G*N+this.aX,H=F*N+G*U+this.aY}return Q.set(X,H)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class OY extends UQ{constructor(J,$,Q,Z,K,W){super(J,$,Q,Q,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function RY(){let J=0,$=0,Q=0,Z=0;function K(W,Y,X,H){J=W,$=X,Q=-3*W+3*Y-2*X-H,Z=2*W-2*Y+X+H}return{initCatmullRom:function(W,Y,X,H,U){K(Y,X,U*(X-W),U*(H-Y))},initNonuniformCatmullRom:function(W,Y,X,H,U,N,F){let G=(Y-W)/U-(X-W)/(U+N)+(X-Y)/N,q=(X-Y)/N-(H-Y)/(N+F)+(H-X)/F;G*=N,q*=N,K(Y,X,G,q)},calc:function(W){let Y=W*W,X=Y*W;return J+$*W+Q*Y+Z*X}}}var FH=new S,EH=new S,UW=new RY,NW=new RY,GW=new RY;class $7 extends K9{constructor(J=[],$=!1,Q="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=$,this.curveType=Q,this.tension=Z}getPoint(J,$=new S){let Q=$,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,Y=Math.floor(W),X=W-Y;if(this.closed)Y+=Y>0?0:(Math.floor(Math.abs(Y)/K)+1)*K;else if(X===0&&Y===K-1)Y=K-2,X=1;let H,U;if(this.closed||Y>0)H=Z[(Y-1)%K];else EH.subVectors(Z[0],Z[1]).add(Z[0]),H=EH;let N=Z[Y%K],F=Z[(Y+1)%K];if(this.closed||Y+2<K)U=Z[(Y+2)%K];else FH.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),U=FH;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,q=Math.pow(H.distanceToSquared(N),G),O=Math.pow(N.distanceToSquared(F),G),B=Math.pow(F.distanceToSquared(U),G);if(O<0.0001)O=1;if(q<0.0001)q=O;if(B<0.0001)B=O;UW.initNonuniformCatmullRom(H.x,N.x,F.x,U.x,q,O,B),NW.initNonuniformCatmullRom(H.y,N.y,F.y,U.y,q,O,B),GW.initNonuniformCatmullRom(H.z,N.z,F.z,U.z,q,O,B)}else if(this.curveType==="catmullrom")UW.initCatmullRom(H.x,N.x,F.x,U.x,this.tension),NW.initCatmullRom(H.y,N.y,F.y,U.y,this.tension),GW.initCatmullRom(H.z,N.z,F.z,U.z,this.tension);return Q.set(UW.calc(X),NW.calc(X),GW.calc(X)),Q}copy(J){super.copy(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let $=0,Q=this.points.length;$<Q;$++){let Z=this.points[$];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(new S().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function qH(J,$,Q,Z,K){let W=(Z-$)*0.5,Y=(K-Q)*0.5,X=J*J,H=J*X;return(2*Q-2*Z+W+Y)*H+(-3*Q+3*Z-2*W-Y)*X+W*J+Q}function VG(J,$){let Q=1-J;return Q*Q*$}function BG(J,$){return 2*(1-J)*J*$}function DG(J,$){return J*J*$}function l$(J,$,Q,Z){return VG(J,$)+BG(J,Q)+DG(J,Z)}function kG(J,$){let Q=1-J;return Q*Q*Q*$}function MG(J,$){let Q=1-J;return 3*Q*Q*J*$}function CG(J,$){return 3*(1-J)*J*J*$}function PG(J,$){return J*J*J*$}function u$(J,$,Q,Z,K){return kG(J,$)+MG(J,Q)+CG(J,Z)+PG(J,K)}class aZ extends K9{constructor(J=new R0,$=new R0,Q=new R0,Z=new R0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=$,this.v2=Q,this.v3=Z}getPoint(J,$=new R0){let Q=$,Z=this.v0,K=this.v1,W=this.v2,Y=this.v3;return Q.set(u$(J,Z.x,K.x,W.x,Y.x),u$(J,Z.y,K.y,W.y,Y.y)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class LY extends K9{constructor(J=new S,$=new S,Q=new S,Z=new S){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=$,this.v2=Q,this.v3=Z}getPoint(J,$=new S){let Q=$,Z=this.v0,K=this.v1,W=this.v2,Y=this.v3;return Q.set(u$(J,Z.x,K.x,W.x,Y.x),u$(J,Z.y,K.y,W.y,Y.y),u$(J,Z.z,K.z,W.z,Y.z)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class rZ extends K9{constructor(J=new R0,$=new R0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=$}getPoint(J,$=new R0){let Q=$;if(J===1)Q.copy(this.v2);else Q.copy(this.v2).sub(this.v1),Q.multiplyScalar(J).add(this.v1);return Q}getPointAt(J,$){return this.getPoint(J,$)}getTangent(J,$=new R0){return $.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,$){return this.getTangent(J,$)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class VY extends K9{constructor(J=new S,$=new S){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=$}getPoint(J,$=new S){let Q=$;if(J===1)Q.copy(this.v2);else Q.copy(this.v2).sub(this.v1),Q.multiplyScalar(J).add(this.v1);return Q}getPointAt(J,$){return this.getPoint(J,$)}getTangent(J,$=new S){return $.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,$){return this.getTangent(J,$)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class tZ extends K9{constructor(J=new R0,$=new R0,Q=new R0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=$,this.v2=Q}getPoint(J,$=new R0){let Q=$,Z=this.v0,K=this.v1,W=this.v2;return Q.set(l$(J,Z.x,K.x,W.x),l$(J,Z.y,K.y,W.y)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class s8 extends K9{constructor(J=new S,$=new S,Q=new S){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=$,this.v2=Q}getPoint(J,$=new S){let Q=$,Z=this.v0,K=this.v1,W=this.v2;return Q.set(l$(J,Z.x,K.x,W.x),l$(J,Z.y,K.y,W.y),l$(J,Z.z,K.z,W.z)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class eZ extends K9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,$=new R0){let Q=$,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),Y=K-W,X=Z[W===0?W:W-1],H=Z[W],U=Z[W>Z.length-2?Z.length-1:W+1],N=Z[W>Z.length-3?Z.length-1:W+2];return Q.set(qH(Y,X.x,H.x,U.x,N.x),qH(Y,X.y,H.y,U.y,N.y)),Q}copy(J){super.copy(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let $=0,Q=this.points.length;$<Q;$++){let Z=this.points[$];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(new R0().fromArray(Z))}return this}}var OW=Object.freeze({__proto__:null,ArcCurve:OY,CatmullRomCurve3:$7,CubicBezierCurve:aZ,CubicBezierCurve3:LY,EllipseCurve:UQ,LineCurve:rZ,LineCurve3:VY,QuadraticBezierCurve:tZ,QuadraticBezierCurve3:s8,SplineCurve:eZ});class BY extends K9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),$=this.curves[this.curves.length-1].getPoint(1);if(!J.equals($)){let Q=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new OW[Q]($,J))}return this}getPoint(J,$){let Q=J*this.getLength(),Z=this.getCurveLengths(),K=0;while(K<Z.length){if(Z[K]>=Q){let W=Z[K]-Q,Y=this.curves[K],X=Y.getLength(),H=X===0?0:1-W/X;return Y.getPointAt(H,$)}K++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],$=0;for(let Q=0,Z=this.curves.length;Q<Z;Q++)$+=this.curves[Q].getLength(),J.push($);return this.cacheLengths=J,J}getSpacedPoints(J=40){let $=[];for(let Q=0;Q<=J;Q++)$.push(this.getPoint(Q/J));if(this.autoClose)$.push($[0]);return $}getPoints(J=12){let $=[],Q;for(let Z=0,K=this.curves;Z<K.length;Z++){let W=K[Z],Y=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,X=W.getPoints(Y);for(let H=0;H<X.length;H++){let U=X[H];if(Q&&Q.equals(U))continue;$.push(U),Q=U}}if(this.autoClose&&$.length>1&&!$[$.length-1].equals($[0]))$.push($[0]);return $}copy(J){super.copy(J),this.curves=[];for(let $=0,Q=J.curves.length;$<Q;$++){let Z=J.curves[$];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let $=0,Q=this.curves.length;$<Q;$++){let Z=this.curves[$];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let $=0,Q=J.curves.length;$<Q;$++){let Z=J.curves[$];this.curves.push(new OW[Z.type]().fromJSON(Z))}return this}}class zZ extends BY{constructor(J){super();if(this.type="Path",this.currentPoint=new R0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let $=1,Q=J.length;$<Q;$++)this.lineTo(J[$].x,J[$].y);return this}moveTo(J,$){return this.currentPoint.set(J,$),this}lineTo(J,$){let Q=new rZ(this.currentPoint.clone(),new R0(J,$));return this.curves.push(Q),this.currentPoint.set(J,$),this}quadraticCurveTo(J,$,Q,Z){let K=new tZ(this.currentPoint.clone(),new R0(J,$),new R0(Q,Z));return this.curves.push(K),this.currentPoint.set(Q,Z),this}bezierCurveTo(J,$,Q,Z,K,W){let Y=new aZ(this.currentPoint.clone(),new R0(J,$),new R0(Q,Z),new R0(K,W));return this.curves.push(Y),this.currentPoint.set(K,W),this}splineThru(J){let $=[this.currentPoint.clone()].concat(J),Q=new eZ($);return this.curves.push(Q),this.currentPoint.copy(J[J.length-1]),this}arc(J,$,Q,Z,K,W){let Y=this.currentPoint.x,X=this.currentPoint.y;return this.absarc(J+Y,$+X,Q,Z,K,W),this}absarc(J,$,Q,Z,K,W){return this.absellipse(J,$,Q,Q,Z,K,W),this}ellipse(J,$,Q,Z,K,W,Y,X){let H=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+H,$+U,Q,Z,K,W,Y,X),this}absellipse(J,$,Q,Z,K,W,Y,X){let H=new UQ(J,$,Q,Z,K,W,Y,X);if(this.curves.length>0){let N=H.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(H);let U=H.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class NQ extends zZ{constructor(J){super(J);this.uuid=$9(),this.type="Shape",this.holes=[]}getPointsHoles(J){let $=[];for(let Q=0,Z=this.holes.length;Q<Z;Q++)$[Q]=this.holes[Q].getPoints(J);return $}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let $=0,Q=J.holes.length;$<Q;$++){let Z=J.holes[$];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let $=0,Q=this.holes.length;$<Q;$++){let Z=this.holes[$];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let $=0,Q=J.holes.length;$<Q;$++){let Z=J.holes[$];this.holes.push(new zZ().fromJSON(Z))}return this}}function IG(J,$,Q=2){let Z=$&&$.length,K=Z?$[0]*Q:J.length,W=zU(J,0,K,Q,!0),Y=[];if(!W||W.next===W.prev)return Y;let X,H,U;if(Z)W=wG(J,$,W,Q);if(J.length>80*Q){X=J[0],H=J[1];let N=X,F=H;for(let G=Q;G<K;G+=Q){let q=J[G],O=J[G+1];if(q<X)X=q;if(O<H)H=O;if(q>N)N=q;if(O>F)F=O}U=Math.max(N-X,F-H),U=U!==0?32767/U:0}return c$(W,Y,Q,X,H,U,0),Y}function zU(J,$,Q,Z,K){let W;if(K===mG(J,$,Q,Z)>0)for(let Y=$;Y<Q;Y+=Z)W=OH(Y/Z|0,J[Y],J[Y+1],W);else for(let Y=Q-Z;Y>=$;Y-=Z)W=OH(Y/Z|0,J[Y],J[Y+1],W);if(W&&s6(W,W.next))s$(W),W=W.next;return W}function d7(J,$){if(!J)return J;if(!$)$=J;let Q=J,Z;do if(Z=!1,!Q.steiner&&(s6(Q,Q.next)||eJ(Q.prev,Q,Q.next)===0)){if(s$(Q),Q=$=Q.prev,Q===Q.next)break;Z=!0}else Q=Q.next;while(Z||Q!==$);return $}function c$(J,$,Q,Z,K,W,Y){if(!J)return;if(!Y&&W)fG(J,Z,K,W);let X=J;while(J.prev!==J.next){let{prev:H,next:U}=J;if(W?AG(J,Z,K,W):zG(J)){$.push(H.i,J.i,U.i),s$(J),J=U.next,X=U.next;continue}if(J=U,J===X){if(!Y)c$(d7(J),$,Q,Z,K,W,1);else if(Y===1)J=_G(d7(J),$),c$(J,$,Q,Z,K,W,2);else if(Y===2)TG(J,$,Q,Z,K,W);break}}}function zG(J){let $=J.prev,Q=J,Z=J.next;if(eJ($,Q,Z)>=0)return!1;let K=$.x,W=Q.x,Y=Z.x,X=$.y,H=Q.y,U=Z.y,N=Math.min(K,W,Y),F=Math.min(X,H,U),G=Math.max(K,W,Y),q=Math.max(X,H,U),O=Z.next;while(O!==$){if(O.x>=N&&O.x<=G&&O.y>=F&&O.y<=q&&g$(K,X,W,H,Y,U,O.x,O.y)&&eJ(O.prev,O,O.next)>=0)return!1;O=O.next}return!0}function AG(J,$,Q,Z){let K=J.prev,W=J,Y=J.next;if(eJ(K,W,Y)>=0)return!1;let X=K.x,H=W.x,U=Y.x,N=K.y,F=W.y,G=Y.y,q=Math.min(X,H,U),O=Math.min(N,F,G),B=Math.max(X,H,U),R=Math.max(N,F,G),E=RW(q,O,$,Q,Z),D=RW(B,R,$,Q,Z),M=J.prevZ,V=J.nextZ;while(M&&M.z>=E&&V&&V.z<=D){if(M.x>=q&&M.x<=B&&M.y>=O&&M.y<=R&&M!==K&&M!==Y&&g$(X,N,H,F,U,G,M.x,M.y)&&eJ(M.prev,M,M.next)>=0)return!1;if(M=M.prevZ,V.x>=q&&V.x<=B&&V.y>=O&&V.y<=R&&V!==K&&V!==Y&&g$(X,N,H,F,U,G,V.x,V.y)&&eJ(V.prev,V,V.next)>=0)return!1;V=V.nextZ}while(M&&M.z>=E){if(M.x>=q&&M.x<=B&&M.y>=O&&M.y<=R&&M!==K&&M!==Y&&g$(X,N,H,F,U,G,M.x,M.y)&&eJ(M.prev,M,M.next)>=0)return!1;M=M.prevZ}while(V&&V.z<=D){if(V.x>=q&&V.x<=B&&V.y>=O&&V.y<=R&&V!==K&&V!==Y&&g$(X,N,H,F,U,G,V.x,V.y)&&eJ(V.prev,V,V.next)>=0)return!1;V=V.nextZ}return!0}function _G(J,$){let Q=J;do{let Z=Q.prev,K=Q.next.next;if(!s6(Z,K)&&_U(Z,Q,Q.next,K)&&n$(Z,K)&&n$(K,Z))$.push(Z.i,Q.i,K.i),s$(Q),s$(Q.next),Q=J=K;Q=Q.next}while(Q!==J);return d7(Q)}function TG(J,$,Q,Z,K,W){let Y=J;do{let X=Y.next.next;while(X!==Y.prev){if(Y.i!==X.i&&xG(Y,X)){let H=TU(Y,X);Y=d7(Y,Y.next),H=d7(H,H.next),c$(Y,$,Q,Z,K,W,0),c$(H,$,Q,Z,K,W,0);return}X=X.next}Y=Y.next}while(Y!==J)}function wG(J,$,Q,Z){let K=[];for(let W=0,Y=$.length;W<Y;W++){let X=$[W]*Z,H=W<Y-1?$[W+1]*Z:J.length,U=zU(J,X,H,Z,!1);if(U===U.next)U.steiner=!0;K.push(hG(U))}K.sort(SG);for(let W=0;W<K.length;W++)Q=jG(K[W],Q);return Q}function SG(J,$){let Q=J.x-$.x;if(Q===0){if(Q=J.y-$.y,Q===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),K=($.next.y-$.y)/($.next.x-$.x);Q=Z-K}}return Q}function jG(J,$){let Q=yG(J,$);if(!Q)return $;let Z=TU(Q,J);return d7(Z,Z.next),d7(Q,Q.next)}function yG(J,$){let Q=$,Z=J.x,K=J.y,W=-1/0,Y;if(s6(J,Q))return Q;do{if(s6(J,Q.next))return Q.next;else if(K<=Q.y&&K>=Q.next.y&&Q.next.y!==Q.y){let F=Q.x+(K-Q.y)*(Q.next.x-Q.x)/(Q.next.y-Q.y);if(F<=Z&&F>W){if(W=F,Y=Q.x<Q.next.x?Q:Q.next,F===Z)return Y}}Q=Q.next}while(Q!==$);if(!Y)return null;let X=Y,H=Y.x,U=Y.y,N=1/0;Q=Y;do{if(Z>=Q.x&&Q.x>=H&&Z!==Q.x&&AU(K<U?Z:W,K,H,U,K<U?W:Z,K,Q.x,Q.y)){let F=Math.abs(K-Q.y)/(Z-Q.x);if(n$(Q,J)&&(F<N||F===N&&(Q.x>Y.x||Q.x===Y.x&&vG(Y,Q))))Y=Q,N=F}Q=Q.next}while(Q!==X);return Y}function vG(J,$){return eJ(J.prev,J,$.prev)<0&&eJ($.next,J,J.next)<0}function fG(J,$,Q,Z){let K=J;do{if(K.z===0)K.z=RW(K.x,K.y,$,Q,Z);K.prevZ=K.prev,K.nextZ=K.next,K=K.next}while(K!==J);K.prevZ.nextZ=null,K.prevZ=null,bG(K)}function bG(J){let $,Q=1;do{let Z=J,K;J=null;let W=null;$=0;while(Z){$++;let Y=Z,X=0;for(let U=0;U<Q;U++)if(X++,Y=Y.nextZ,!Y)break;let H=Q;while(X>0||H>0&&Y){if(X!==0&&(H===0||!Y||Z.z<=Y.z))K=Z,Z=Z.nextZ,X--;else K=Y,Y=Y.nextZ,H--;if(W)W.nextZ=K;else J=K;K.prevZ=W,W=K}Z=Y}W.nextZ=null,Q*=2}while($>1);return J}function RW(J,$,Q,Z,K){return J=(J-Q)*K|0,$=($-Z)*K|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,$=($|$<<8)&16711935,$=($|$<<4)&252645135,$=($|$<<2)&858993459,$=($|$<<1)&1431655765,J|$<<1}function hG(J){let $=J,Q=J;do{if($.x<Q.x||$.x===Q.x&&$.y<Q.y)Q=$;$=$.next}while($!==J);return Q}function AU(J,$,Q,Z,K,W,Y,X){return(K-Y)*($-X)>=(J-Y)*(W-X)&&(J-Y)*(Z-X)>=(Q-Y)*($-X)&&(Q-Y)*(W-X)>=(K-Y)*(Z-X)}function g$(J,$,Q,Z,K,W,Y,X){return!(J===Y&&$===X)&&AU(J,$,Q,Z,K,W,Y,X)}function xG(J,$){return J.next.i!==$.i&&J.prev.i!==$.i&&!gG(J,$)&&(n$(J,$)&&n$($,J)&&pG(J,$)&&(eJ(J.prev,J,$.prev)||eJ(J,$.prev,$))||s6(J,$)&&eJ(J.prev,J,J.next)>0&&eJ($.prev,$,$.next)>0)}function eJ(J,$,Q){return($.y-J.y)*(Q.x-$.x)-($.x-J.x)*(Q.y-$.y)}function s6(J,$){return J.x===$.x&&J.y===$.y}function _U(J,$,Q,Z){let K=DZ(eJ(J,$,Q)),W=DZ(eJ(J,$,Z)),Y=DZ(eJ(Q,Z,J)),X=DZ(eJ(Q,Z,$));if(K!==W&&Y!==X)return!0;if(K===0&&BZ(J,Q,$))return!0;if(W===0&&BZ(J,Z,$))return!0;if(Y===0&&BZ(Q,J,Z))return!0;if(X===0&&BZ(Q,$,Z))return!0;return!1}function BZ(J,$,Q){return $.x<=Math.max(J.x,Q.x)&&$.x>=Math.min(J.x,Q.x)&&$.y<=Math.max(J.y,Q.y)&&$.y>=Math.min(J.y,Q.y)}function DZ(J){return J>0?1:J<0?-1:0}function gG(J,$){let Q=J;do{if(Q.i!==J.i&&Q.next.i!==J.i&&Q.i!==$.i&&Q.next.i!==$.i&&_U(Q,Q.next,J,$))return!0;Q=Q.next}while(Q!==J);return!1}function n$(J,$){return eJ(J.prev,J,J.next)<0?eJ(J,$,J.next)>=0&&eJ(J,J.prev,$)>=0:eJ(J,$,J.prev)<0||eJ(J,J.next,$)<0}function pG(J,$){let Q=J,Z=!1,K=(J.x+$.x)/2,W=(J.y+$.y)/2;do{if(Q.y>W!==Q.next.y>W&&Q.next.y!==Q.y&&K<(Q.next.x-Q.x)*(W-Q.y)/(Q.next.y-Q.y)+Q.x)Z=!Z;Q=Q.next}while(Q!==J);return Z}function TU(J,$){let Q=LW(J.i,J.x,J.y),Z=LW($.i,$.x,$.y),K=J.next,W=$.prev;return J.next=$,$.prev=J,Q.next=K,K.prev=Q,Z.next=Q,Q.prev=Z,W.next=Z,Z.prev=W,Z}function OH(J,$,Q,Z){let K=LW(J,$,Q);if(!Z)K.prev=K,K.next=K;else K.next=Z.next,K.prev=Z,Z.next.prev=K,Z.next=K;return K}function s$(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function LW(J,$,Q){return{i:J,x:$,y:Q,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mG(J,$,Q,Z){let K=0;for(let W=$,Y=Q-Z;W<Q;W+=Z)K+=(J[Y]-J[W])*(J[W+1]+J[Y+1]),Y=W;return K}class wU{static triangulate(J,$,Q=2){return IG(J,$,Q)}}class d6{static area(J){let $=J.length,Q=0;for(let Z=$-1,K=0;K<$;Z=K++)Q+=J[Z].x*J[K].y-J[K].x*J[Z].y;return Q*0.5}static isClockWise(J){return d6.area(J)<0}static triangulateShape(J,$){let Q=[],Z=[],K=[];RH(J),LH(Q,J);let W=J.length;$.forEach(RH);for(let X=0;X<$.length;X++)Z.push(W),W+=$[X].length,LH(Q,$[X]);let Y=wU.triangulate(Q,Z);for(let X=0;X<Y.length;X+=3)K.push(Y.slice(X,X+3));return K}}function RH(J){let $=J.length;if($>2&&J[$-1].equals(J[0]))J.pop()}function LH(J,$){for(let Q=0;Q<$.length;Q++)J.push($[Q].x),J.push($[Q].y)}class GQ extends oZ{constructor(J=1,$=0){let Q=(1+Math.sqrt(5))/2,Z=[-1,Q,0,1,Q,0,-1,-Q,0,1,-Q,0,0,-1,Q,0,1,Q,0,-1,-Q,0,1,-Q,Q,0,-1,Q,0,1,-Q,0,-1,-Q,0,1],K=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(Z,K,J,$);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:$}}static fromJSON(J){return new GQ(J.radius,J.detail)}}class P7 extends bJ{constructor(J=[new R0(0,-0.5),new R0(0.5,0),new R0(0,0.5)],$=12,Q=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:$,phiStart:Q,phiLength:Z},$=Math.floor($),Z=OJ(Z,0,Math.PI*2);let K=[],W=[],Y=[],X=[],H=[],U=1/$,N=new S,F=new R0,G=new S,q=new S,O=new S,B=0,R=0;for(let E=0;E<=J.length-1;E++)switch(E){case 0:B=J[E+1].x-J[E].x,R=J[E+1].y-J[E].y,G.x=R*1,G.y=-B,G.z=R*0,O.copy(G),G.normalize(),X.push(G.x,G.y,G.z);break;case J.length-1:X.push(O.x,O.y,O.z);break;default:B=J[E+1].x-J[E].x,R=J[E+1].y-J[E].y,G.x=R*1,G.y=-B,G.z=R*0,q.copy(G),G.x+=O.x,G.y+=O.y,G.z+=O.z,G.normalize(),X.push(G.x,G.y,G.z),O.copy(q)}for(let E=0;E<=$;E++){let D=Q+E*U*Z,M=Math.sin(D),V=Math.cos(D);for(let I=0;I<=J.length-1;I++){N.x=J[I].x*M,N.y=J[I].y,N.z=J[I].x*V,W.push(N.x,N.y,N.z),F.x=E/$,F.y=I/(J.length-1),Y.push(F.x,F.y);let w=X[3*I+0]*M,k=X[3*I+1],L=X[3*I+0]*V;H.push(w,k,L)}}for(let E=0;E<$;E++)for(let D=0;D<J.length-1;D++){let M=D+E*J.length,V=M,I=M+J.length,w=M+J.length+1,k=M+1;K.push(V,I,k),K.push(w,k,I)}this.setIndex(K),this.setAttribute("position",new UJ(W,3)),this.setAttribute("uv",new UJ(Y,2)),this.setAttribute("normal",new UJ(H,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new P7(J.points,J.segments,J.phiStart,J.phiLength)}}class VJ extends bJ{constructor(J=1,$=1,Q=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:$,widthSegments:Q,heightSegments:Z};let K=J/2,W=$/2,Y=Math.floor(Q),X=Math.floor(Z),H=Y+1,U=X+1,N=J/Y,F=$/X,G=[],q=[],O=[],B=[];for(let R=0;R<U;R++){let E=R*F-W;for(let D=0;D<H;D++){let M=D*N-K;q.push(M,-E,0),O.push(0,0,1),B.push(D/Y),B.push(1-R/X)}}for(let R=0;R<X;R++)for(let E=0;E<Y;E++){let D=E+H*R,M=E+H*(R+1),V=E+1+H*(R+1),I=E+1+H*R;G.push(D,M,I),G.push(M,V,I)}this.setIndex(G),this.setAttribute("position",new UJ(q,3)),this.setAttribute("normal",new UJ(O,3)),this.setAttribute("uv",new UJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new VJ(J.width,J.height,J.widthSegments,J.heightSegments)}}class FQ extends bJ{constructor(J=new NQ([new R0(0,0.5),new R0(-0.5,-0.5),new R0(0.5,-0.5)]),$=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:$};let Q=[],Z=[],K=[],W=[],Y=0,X=0;if(Array.isArray(J)===!1)H(J);else for(let U=0;U<J.length;U++)H(J[U]),this.addGroup(Y,X,U),Y+=X,X=0;this.setIndex(Q),this.setAttribute("position",new UJ(Z,3)),this.setAttribute("normal",new UJ(K,3)),this.setAttribute("uv",new UJ(W,2));function H(U){let N=Z.length/3,F=U.extractPoints($),G=F.shape,q=F.holes;if(d6.isClockWise(G)===!1)G=G.reverse();for(let B=0,R=q.length;B<R;B++){let E=q[B];if(d6.isClockWise(E)===!0)q[B]=E.reverse()}let O=d6.triangulateShape(G,q);for(let B=0,R=q.length;B<R;B++){let E=q[B];G=G.concat(E)}for(let B=0,R=G.length;B<R;B++){let E=G[B];Z.push(E.x,E.y,0),K.push(0,0,1),W.push(E.x,E.y)}for(let B=0,R=O.length;B<R;B++){let E=O[B],D=E[0]+N,M=E[1]+N,V=E[2]+N;Q.push(D,M,V),X+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),$=this.parameters.shapes;return lG($,J)}static fromJSON(J,$){let Q=[];for(let Z=0,K=J.shapes.length;Z<K;Z++){let W=$[J.shapes[Z]];Q.push(W)}return new FQ(Q,J.curveSegments)}}function lG(J,$){if($.shapes=[],Array.isArray(J))for(let Q=0,Z=J.length;Q<Z;Q++){let K=J[Q];$.shapes.push(K.uuid)}else $.shapes.push(J.uuid);return $}class H8 extends bJ{constructor(J=1,$=32,Q=16,Z=0,K=Math.PI*2,W=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:$,heightSegments:Q,phiStart:Z,phiLength:K,thetaStart:W,thetaLength:Y},$=Math.max(3,Math.floor($)),Q=Math.max(2,Math.floor(Q));let X=Math.min(W+Y,Math.PI),H=0,U=[],N=new S,F=new S,G=[],q=[],O=[],B=[];for(let R=0;R<=Q;R++){let E=[],D=R/Q,M=W+D*Y,V=J*Math.cos(M),I=Math.sqrt(J*J-V*V),w=0;if(R===0&&W===0)w=0.5/$;else if(R===Q&&X===Math.PI)w=-0.5/$;for(let k=0;k<=$;k++){let L=k/$,P=Z+L*K;N.x=-I*Math.cos(P),N.y=V,N.z=I*Math.sin(P),q.push(N.x,N.y,N.z),F.copy(N).normalize(),O.push(F.x,F.y,F.z),B.push(L+w,1-D),E.push(H++)}U.push(E)}for(let R=0;R<Q;R++)for(let E=0;E<$;E++){let D=U[R][E+1],M=U[R][E],V=U[R+1][E],I=U[R+1][E+1];if(R!==0||W>0)G.push(D,M,I);if(R!==Q-1||X<Math.PI)G.push(M,V,I)}this.setIndex(G),this.setAttribute("position",new UJ(q,3)),this.setAttribute("normal",new UJ(O,3)),this.setAttribute("uv",new UJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new H8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class b9 extends bJ{constructor(J=1,$=0.4,Q=12,Z=48,K=Math.PI*2,W=0,Y=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:$,radialSegments:Q,tubularSegments:Z,arc:K,thetaStart:W,thetaLength:Y},Q=Math.floor(Q),Z=Math.floor(Z);let X=[],H=[],U=[],N=[],F=new S,G=new S,q=new S;for(let O=0;O<=Q;O++){let B=W+O/Q*Y;for(let R=0;R<=Z;R++){let E=R/Z*K;G.x=(J+$*Math.cos(B))*Math.cos(E),G.y=(J+$*Math.cos(B))*Math.sin(E),G.z=$*Math.sin(B),H.push(G.x,G.y,G.z),F.x=J*Math.cos(E),F.y=J*Math.sin(E),q.subVectors(G,F).normalize(),U.push(q.x,q.y,q.z),N.push(R/Z),N.push(O/Q)}}for(let O=1;O<=Q;O++)for(let B=1;B<=Z;B++){let R=(Z+1)*O+B-1,E=(Z+1)*(O-1)+B-1,D=(Z+1)*(O-1)+B,M=(Z+1)*O+B;X.push(R,E,M),X.push(E,D,M)}this.setIndex(X),this.setAttribute("position",new UJ(H,3)),this.setAttribute("normal",new UJ(U,3)),this.setAttribute("uv",new UJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new b9(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class b8 extends bJ{constructor(J=new s8(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),$=64,Q=1,Z=8,K=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:$,radius:Q,radialSegments:Z,closed:K};let W=J.computeFrenetFrames($,K);this.tangents=W.tangents,this.normals=W.normals,this.binormals=W.binormals;let Y=new S,X=new S,H=new R0,U=new S,N=[],F=[],G=[],q=[];O(),this.setIndex(q),this.setAttribute("position",new UJ(N,3)),this.setAttribute("normal",new UJ(F,3)),this.setAttribute("uv",new UJ(G,2));function O(){for(let D=0;D<$;D++)B(D);B(K===!1?$:0),E(),R()}function B(D){U=J.getPointAt(D/$,U);let M=W.normals[D],V=W.binormals[D];for(let I=0;I<=Z;I++){let w=I/Z*Math.PI*2,k=Math.sin(w),L=-Math.cos(w);X.x=L*M.x+k*V.x,X.y=L*M.y+k*V.y,X.z=L*M.z+k*V.z,X.normalize(),F.push(X.x,X.y,X.z),Y.x=U.x+Q*X.x,Y.y=U.y+Q*X.y,Y.z=U.z+Q*X.z,N.push(Y.x,Y.y,Y.z)}}function R(){for(let D=1;D<=$;D++)for(let M=1;M<=Z;M++){let V=(Z+1)*(D-1)+(M-1),I=(Z+1)*D+(M-1),w=(Z+1)*D+M,k=(Z+1)*(D-1)+M;q.push(V,I,k),q.push(I,w,k)}}function E(){for(let D=0;D<=$;D++)for(let M=0;M<=Z;M++)H.x=D/$,H.y=M/Z,G.push(H.x,H.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new b8(new OW[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function Y6(J){let $={};for(let Q in J){$[Q]={};for(let Z in J[Q]){let K=J[Q][Z];if(VH(K))if(K.isRenderTargetTexture)t0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[Q][Z]=null;else $[Q][Z]=K.clone();else if(Array.isArray(K))if(VH(K[0])){let W=[];for(let Y=0,X=K.length;Y<X;Y++)W[Y]=K[Y].clone();$[Q][Z]=W}else $[Q][Z]=K.slice();else $[Q][Z]=K}}return $}function A8(J){let $={};for(let Q=0;Q<J.length;Q++){let Z=Y6(J[Q]);for(let K in Z)$[K]=Z[K]}return $}function VH(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function uG(J){let $=[];for(let Q=0;Q<J.length;Q++)$.push(J[Q].clone());return $}function DY(J){let $=J.getRenderTarget();if($===null)return J.outputColorSpace;if($.isXRRenderTarget===!0)return $.texture.colorSpace;return RJ.workingColorSpace}var Q7={clone:Y6,merge:A8},dG=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cG=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class J8 extends f8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dG,this.fragmentShader=cG,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=Y6(J.uniforms),this.uniformsGroups=uG(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let $=super.toJSON(J);$.glslVersion=this.glslVersion,$.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)$.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)$.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)$.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)$.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)$.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)$.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)$.uniforms[Z]={type:"m4",value:W.toArray()};else $.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let Q={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Q[Z]=!0;if(Object.keys(Q).length>0)$.extensions=Q;return $}fromJSON(J,$){if(super.fromJSON(J,$),J.uniforms!==void 0)for(let Q in J.uniforms){let Z=J.uniforms[Q];switch(this.uniforms[Q]={},Z.type){case"t":this.uniforms[Q].value=$[Z.value]||null;break;case"c":this.uniforms[Q].value=new y0().setHex(Z.value);break;case"v2":this.uniforms[Q].value=new R0().fromArray(Z.value);break;case"v3":this.uniforms[Q].value=new S().fromArray(Z.value);break;case"v4":this.uniforms[Q].value=new lJ().fromArray(Z.value);break;case"m3":this.uniforms[Q].value=new NJ().fromArray(Z.value);break;case"m4":this.uniforms[Q].value=new QJ().fromArray(Z.value);break;default:this.uniforms[Q].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Q in J.extensions)this.extensions[Q]=J.extensions[Q];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class EQ extends J8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o0 extends f8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new y0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new y0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new V9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class V8 extends o0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new R0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return OJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function($){this.ior=(1+0.4*$)/(1-0.4*$)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new y0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new y0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new y0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class kY extends f8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class MY extends f8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function O7(J,$){if(!J||J.constructor===$)return J;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(J);return Array.prototype.slice.call(J)}function CZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function nG(J){function $(K,W){return J[K]-J[W]}let Q=J.length,Z=Array(Q);for(let K=0;K!==Q;++K)Z[K]=K;return Z.sort($),Z}function BH(J,$,Q){let Z=J.length,K=new J.constructor(Z);for(let W=0,Y=0;Y!==Z;++W){let X=Q[W]*$;for(let H=0;H!==$;++H)K[Y++]=J[X+H]}return K}function sG(J,$,Q,Z){let K=1,W=J[0];while(W!==void 0&&W[Z]===void 0)W=J[K++];if(W===void 0)return;let Y=W[Z];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=W[Z],Y!==void 0)$.push(W.time),Q.push(...Y);W=J[K++]}while(W!==void 0);else if(Y.toArray!==void 0)do{if(Y=W[Z],Y!==void 0)$.push(W.time),Y.toArray(Q,Q.length);W=J[K++]}while(W!==void 0);else do{if(Y=W[Z],Y!==void 0)$.push(W.time),Q.push(Y);W=J[K++]}while(W!==void 0)}class Z7{constructor(J,$,Q,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new $.constructor(Q),this.sampleValues=$,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate(J){let $=this.parameterPositions,Q=this._cachedIndex,Z=$[Q],K=$[Q-1];J:{$:{let W;Q:{Z:if(!(J<Z)){for(let Y=Q+2;;){if(Z===void 0){if(J<K)break Z;return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===Y)break;if(K=Z,Z=$[++Q],J<Z)break $}W=$.length;break Q}if(!(J>=K)){let Y=$[1];if(J<Y)Q=2,K=Y;for(let X=Q-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===X)break;if(Z=K,K=$[--Q-1],J>=K)break $}W=Q,Q=0;break Q}break J}while(Q<W){let Y=Q+W>>>1;if(J<$[Y])W=Y;else Q=Y+1}if(Z=$[Q],K=$[Q-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,K,Z)}return this.interpolate_(Q,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)$[W]=Q[K+W];return $}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class CY extends Z7{constructor(J,$,Q,Z){super(J,$,Q,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,$,Q){let Z=this.parameterPositions,K=J-2,W=J+1,Y=Z[K],X=Z[W];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,Y=2*$-Q;break;case 2402:K=Z.length-2,Y=$+Z[K]-Z[K+1];break;default:K=J,Y=Q}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,X=2*Q-$;break;case 2402:W=1,X=Q+Z[1]-Z[0];break;default:W=J-1,X=$}let H=(Q-$)*0.5,U=this.valueSize;this._weightPrev=H/($-Y),this._weightNext=H/(X-Q),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this._offsetPrev,N=this._offsetNext,F=this._weightPrev,G=this._weightNext,q=(Q-$)/(Z-$),O=q*q,B=O*q,R=-F*B+2*F*O-F*q,E=(1+F)*B+(-1.5-2*F)*O+(-0.5+F)*q+1,D=(-1-G)*B+(1.5+G)*O+0.5*q,M=G*B-G*O;for(let V=0;V!==Y;++V)K[V]=R*W[U+V]+E*W[H+V]+D*W[X+V]+M*W[N+V];return K}}class JK extends Z7{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=(Q-$)/(Z-$),N=1-U;for(let F=0;F!==Y;++F)K[F]=W[H+F]*N+W[X+F]*U;return K}}class PY extends Z7{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class IY extends Z7{interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this.inTangents,N=this.outTangents;if(!U||!N){let q=(Q-$)/(Z-$),O=1-q;for(let B=0;B!==Y;++B)K[B]=W[H+B]*O+W[X+B]*q;return K}let F=Y*2,G=J-1;for(let q=0;q!==Y;++q){let O=W[H+q],B=W[X+q],R=G*F+q*2,E=N[R],D=N[R+1],M=J*F+q*2,V=U[M],I=U[M+1],w=oG(Q,$,E,V,Z);K[q]=SU(w,O,D,I,B)}return K}}function SU(J,$,Q,Z,K){let W=1-J;return W*W*W*$+3*W*W*J*Q+3*W*J*J*Z+J*J*J*K}function iG(J,$,Q,Z,K){let W=1-J;return 3*W*W*(Q-$)+6*W*J*(Z-Q)+3*J*J*(K-Z)}function oG(J,$,Q,Z,K){let W=(J-$)/(K-$);for(let Y=0;Y<8;Y++){let X=SU(W,$,Q,Z,K)-J;if(Math.abs(X)<0.0000000001)break;let H=iG(W,$,Q,Z,K);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-X/H))}return W}class i8{constructor(J,$,Q,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=O7($,this.TimeBufferType),this.values=O7(Q,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let $=J.constructor,Q;if($.toJSON!==this.toJSON)Q=$.toJSON(J);else{Q={name:J.name,times:O7(J.times,Array),values:O7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)Q.interpolation=Z;if(CZ(J.settings))Q.settings={inTangents:O7(J.settings.inTangents,Array),outTangents:O7(J.settings.outTangents,Array)}}return Q.type=J.ValueTypeName,Q}InterpolantFactoryMethodDiscrete(J){return new PY(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new JK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new CY(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let $=new IY(this.times,this.values,this.getValueSize(),J);if(this.settings)$.inTangents=this.settings.inTangents,$.outTangents=this.settings.outTangents;return $}setInterpolation(J){let $;switch(J){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break;case 2303:$=this.InterpolantFactoryMethodBezier;break}if($===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return t0("KeyframeTrack:",Q),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]+=J}return this}scale(J){if(J!==1){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]*=J;if(CZ(this.settings))DH(this.settings.inTangents,J),DH(this.settings.outTangents,J)}return this}trim(J,$){let Q=this.times,Z=Q.length,K=0,W=Z-1;while(K!==Z&&Q[K]<J)++K;while(W!==-1&&Q[W]>$)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let Y=this.getValueSize();this.times=Q.slice(K,W),this.values=this.values.slice(K*Y,W*Y)}return this}validate(){let J=!0,$=this.getValueSize();if($-Math.floor($)!==0)KJ("KeyframeTrack: Invalid value size in track.",this),J=!1;let Q=this.times,Z=this.values,K=Q.length;if(K===0)KJ("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let Y=0;Y!==K;Y++){let X=Q[Y];if(typeof X==="number"&&isNaN(X)){KJ("KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(W!==null&&W>X){KJ("KeyframeTrack: Out of order keys.",this,Y,X,W),J=!1;break}W=X}if(Z!==void 0){if(vN(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let H=Z[Y];if(isNaN(H)){KJ("KeyframeTrack: Value is not a valid number.",this,Y,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),$=this.values.slice(),Q=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let Y=1;Y<K;++Y){let X=!1,H=J[Y],U=J[Y+1];if(H!==U&&(Y!==1||H!==J[0]))if(!Z){let N=Y*Q,F=N-Q,G=N+Q;for(let q=0;q!==Q;++q){let O=$[N+q];if(O!==$[F+q]||O!==$[G+q]){X=!0;break}}}else X=!0;if(X){if(Y!==W){J[W]=J[Y];let N=Y*Q,F=W*Q;for(let G=0;G!==Q;++G)$[F+G]=$[N+G]}++W}}if(K>0){J[W]=J[K];for(let Y=K*Q,X=W*Q,H=0;H!==Q;++H)$[X+H]=$[Y+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=$.slice(0,W*Q);else this.times=J,this.values=$;return this}clone(){let J=this.times.slice(),$=this.values.slice(),Z=new this.constructor(this.name,J,$);if(Z.createInterpolant=this.createInterpolant,CZ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function DH(J,$){for(let Q=0,Z=J.length;Q!==Z;Q+=2)J[Q]*=$}i8.prototype.ValueTypeName="";i8.prototype.TimeBufferType=Float32Array;i8.prototype.ValueBufferType=Float32Array;i8.prototype.DefaultInterpolation=2301;class I7 extends i8{constructor(J,$,Q){super(J,$,Q)}}I7.prototype.ValueTypeName="bool";I7.prototype.ValueBufferType=Array;I7.prototype.DefaultInterpolation=2300;I7.prototype.InterpolantFactoryMethodLinear=void 0;I7.prototype.InterpolantFactoryMethodSmooth=void 0;class $K extends i8{constructor(J,$,Q,Z){super(J,$,Q,Z)}}$K.prototype.ValueTypeName="color";class z7 extends i8{constructor(J,$,Q,Z){super(J,$,Q,Z)}}z7.prototype.ValueTypeName="number";class zY extends Z7{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=(Q-$)/(Z-$),H=J*Y;for(let U=H+Y;H!==U;H+=4)GJ.slerpFlat(K,0,W,H-Y,W,H,X);return K}}class A7 extends i8{constructor(J,$,Q,Z){super(J,$,Q,Z)}InterpolantFactoryMethodLinear(J){return new zY(this.times,this.values,this.getValueSize(),J)}}A7.prototype.ValueTypeName="quaternion";A7.prototype.InterpolantFactoryMethodSmooth=void 0;class _7 extends i8{constructor(J,$,Q){super(J,$,Q)}}_7.prototype.ValueTypeName="string";_7.prototype.ValueBufferType=Array;_7.prototype.DefaultInterpolation=2300;_7.prototype.InterpolantFactoryMethodLinear=void 0;_7.prototype.InterpolantFactoryMethodSmooth=void 0;class X6 extends i8{constructor(J,$,Q,Z){super(J,$,Q,Z)}}X6.prototype.ValueTypeName="vector";class i6{constructor(J="",$=-1,Q=[],Z=2500){if(this.name=J,this.tracks=Q,this.duration=$,this.blendMode=Z,this.uuid=$9(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let $=[],Q=J.tracks,Z=1/(J.fps||1);for(let W=0,Y=Q.length;W!==Y;++W)$.push(rG(Q[W]).scale(Z));let K=new this(J.name,J.duration,$,J.blendMode);return K.uuid=J.uuid,K.userData=JSON.parse(J.userData||"{}"),K}static toJSON(J){let $=[],Q=J.tracks,Z={name:J.name,duration:J.duration,tracks:$,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let K=0,W=Q.length;K!==W;++K)$.push(i8.toJSON(Q[K]));return Z}static CreateFromMorphTargetSequence(J,$,Q,Z){let K=$.length,W=[];for(let Y=0;Y<K;Y++){let X=[],H=[];X.push((Y+K-1)%K,Y,(Y+1)%K),H.push(0,1,0);let U=nG(X);if(X=BH(X,1,U),H=BH(H,1,U),!Z&&X[0]===0)X.push(K),H.push(H[0]);W.push(new z7(".morphTargetInfluences["+$[Y].name+"]",X,H).scale(1/Q))}return new this(J,-1,W)}static findByName(J,$){let Q=J;if(!Array.isArray(J)){let Z=J;Q=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<Q.length;Z++)if(Q[Z].name===$)return Q[Z];return null}static CreateClipsFromMorphTargetSequences(J,$,Q){let Z={},K=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y],U=H.name.match(K);if(U&&U.length>1){let N=U[1],F=Z[N];if(!F)Z[N]=F=[];F.push(H)}}let W=[];for(let Y in Z)W.push(this.CreateFromMorphTargetSequence(Y,Z[Y],$,Q));return W}resetDuration(){let J=this.tracks,$=0;for(let Q=0,Z=J.length;Q!==Z;++Q){let K=this.tracks[Q];$=Math.max($,K.times[K.times.length-1])}return this.duration=$,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let $=0;$<this.tracks.length;$++)J=J&&this.tracks[$].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());let $=new this.constructor(this.name,this.duration,J,this.blendMode);return $.userData=JSON.parse(JSON.stringify(this.userData)),$}toJSON(){return this.constructor.toJSON(this)}}function aG(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return z7;case"vector":case"vector2":case"vector3":case"vector4":return X6;case"color":return $K;case"quaternion":return A7;case"bool":case"boolean":return I7;case"string":return _7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function rG(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let $=aG(J.type);if(J.times===void 0){let Z=[],K=[];sG(J.keys,Z,K,"value"),J.times=Z,J.values=K}let Q;if($.parse!==void 0)Q=$.parse(J);else Q=new $(J.name,J.times,J.values,J.interpolation);if(CZ(J.settings))Q.settings={inTangents:O7(J.settings.inTangents,Float32Array),outTangents:O7(J.settings.outTangents,Float32Array)};return Q}var S9={enabled:!1,files:{},add:function(J,$){if(this.enabled===!1)return;if(kH(J))return;this.files[J]=$},get:function(J){if(this.enabled===!1)return;if(kH(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function kH(J){try{let $=J.slice(J.indexOf(":")+1);return new URL($).protocol==="blob:"}catch($){return!1}}class AY{constructor(J,$,Q){let Z=this,K=!1,W=0,Y=0,X=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=$,this.onError=Q,this._abortController=null,this.itemStart=function(U){if(Y++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,Y)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,Y);if(W===Y){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,N){return H.push(U,N),this},this.removeHandler=function(U){let N=H.indexOf(U);if(N!==-1)H.splice(N,2);return this},this.getHandler=function(U){for(let N=0,F=H.length;N<F;N+=2){let G=H[N],q=H[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return q}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var jU=new AY;class K7{constructor(J){if(this.manager=J!==void 0?J:jU,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,$){let Q=this;return new Promise(function(Z,K){Q.load(J,Z,$,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}K7.DEFAULT_MATERIAL_NAME="__DEFAULT";var r9={};class yU extends Error{constructor(J,$){super(J);this.response=$}}class qQ extends K7{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,$,Q,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=S9.get(`file:${J}`);if(K!==void 0){this.manager.itemStart(J),setTimeout(()=>{if($)$(K);this.manager.itemEnd(J)},0);return}if(r9[J]!==void 0){r9[J].push({onLoad:$,onProgress:Q,onError:Z});return}r9[J]=[],r9[J].push({onLoad:$,onProgress:Q,onError:Z});let W=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Y=this.mimeType,X=this.responseType;fetch(W).then((H)=>{if(H.status===200||H.status===0){if(H.status===0)t0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||H.body===void 0||H.body.getReader===void 0)return H;let U=r9[J],N=H.body.getReader(),F=H.headers.get("X-File-Size")||H.headers.get("Content-Length"),G=F?parseInt(F):0,q=G!==0,O=0,B=new ReadableStream({start(R){E();function E(){N.read().then(({done:D,value:M})=>{if(D)R.close();else{O+=M.byteLength;let V=new ProgressEvent("progress",{lengthComputable:q,loaded:O,total:G});for(let I=0,w=U.length;I<w;I++){let k=U[I];if(k.onProgress)k.onProgress(V)}R.enqueue(M),E()}},(D)=>{R.error(D)})}}});return new Response(B)}else throw new yU(`fetch for "${H.url}" responded with ${H.status}: ${H.statusText}`,H)}).then((H)=>{switch(X){case"arraybuffer":return H.arrayBuffer();case"blob":return H.blob();case"document":return H.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return H.json();default:if(Y==="")return H.text();else{let N=/charset="?([^;"\s]*)"?/i.exec(Y),F=N&&N[1]?N[1].toLowerCase():void 0,G=new TextDecoder(F);return H.arrayBuffer().then((q)=>G.decode(q))}}}).then((H)=>{S9.add(`file:${J}`,H);let U=r9[J];delete r9[J];for(let N=0,F=U.length;N<F;N++){let G=U[N];if(G.onLoad)G.onLoad(H)}}).catch((H)=>{let U=r9[J];if(U===void 0)throw this.manager.itemError(J),H;delete r9[J];for(let N=0,F=U.length;N<F;N++){let G=U[N];if(G.onError)G.onError(H)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var p6=new WeakMap;class _Y extends K7{constructor(J){super(J)}load(J,$,Q,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=S9.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if($)$(W);K.manager.itemEnd(J)},0);else{let N=p6.get(W);if(N===void 0)N=[],p6.set(W,N);N.push({onLoad:$,onError:Z})}return W}let Y=c6("img");function X(){if(U(),$)$(this);let N=p6.get(this)||[];for(let F=0;F<N.length;F++){let G=N[F];if(G.onLoad)G.onLoad(this)}p6.delete(this),K.manager.itemEnd(J)}function H(N){if(U(),Z)Z(N);S9.remove(`image:${J}`);let F=p6.get(this)||[];for(let G=0;G<F.length;G++){let q=F[G];if(q.onError)q.onError(N)}p6.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",H,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",H,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return S9.add(`image:${J}`,Y),K.manager.itemStart(J),Y.src=J,Y}}class QK extends K7{constructor(J){super(J)}load(J,$,Q,Z){let K=new $8,W=new _Y(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(Y){if(K.image=Y,K.needsUpdate=!0,$!==void 0)$(K)},Q,Z),K}}class X$ extends SJ{constructor(J,$=1){super();this.isLight=!0,this.type="Light",this.color=new y0(J),this.intensity=$}copy(J,$){return super.copy(J,$),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let $=super.toJSON(J);return $.object.color=this.color.getHex(),$.object.intensity=this.intensity,$}}class ZK extends X${constructor(J,$,Q){super(J,Q);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(SJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new y0($)}copy(J,$){return super.copy(J,$),this.groundColor.copy(J.groundColor),this}toJSON(J){let $=super.toJSON(J);return $.object.groundColor=this.groundColor.getHex(),$}}var FW=new QJ,MH=new S,CH=new S;class OQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new QJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Q6,this._frameExtents=new R0(1,1),this._viewportCount=1,this._viewports=[new lJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let $=this.camera;MH.setFromMatrixPosition(J.matrixWorld),$.position.copy(MH),CH.setFromMatrixPosition(J.target.matrixWorld),$.lookAt(CH),$.updateMatrixWorld(),this._updateMatrix($,this.matrix,this._frustum)}_updateMatrix(J,$,Q,Z){FW.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q.setFromProjectionMatrix(FW,J.coordinateSystem,J.reversedDepth);let K=this._frameExtents,W=Z?Z.z/K.x:1,Y=Z?Z.w/K.y:1,X=Z?Z.x/K.x:0,H=Z?Z.y/K.y:0;if(J.coordinateSystem===2001||J.reversedDepth)$.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,1,0,0,0,0,1);else $.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,0.5,0.5,0,0,0,1);$.multiply(FW)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var kZ=new S,MZ=new GJ,w9=new S;class KK extends SJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new QJ,this.projectionMatrix=new QJ,this.projectionMatrixInverse=new QJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,$){return super.copy(J,$),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(kZ,MZ,w9),w9.x===1&&w9.y===1&&w9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(kZ,MZ,w9.set(1,1,1)).invert()}updateWorldMatrix(J,$,Q=!1){if(super.updateWorldMatrix(J,$,Q),this.matrixWorld.decompose(kZ,MZ,w9),w9.x===1&&w9.y===1&&w9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(kZ,MZ,w9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var q7=new S,PH=new R0,IH=new R0;class G8 extends KK{constructor(J=50,$=1,Q=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Q,this.far=Z,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let $=0.5*this.getFilmHeight()/J;this.fov=u7*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(p$*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return u7*2*Math.atan(Math.tan(p$*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,$,Q){q7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(q7.x,q7.y).multiplyScalar(-J/q7.z),q7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(q7.x,q7.y).multiplyScalar(-J/q7.z)}getViewSize(J,$){return this.getViewBounds(J,PH,IH),$.subVectors(IH,PH)}setViewOffset(J,$,Q,Z,K,W){if(this.aspect=J/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,$=J*Math.tan(p$*0.5*this.fov)/this.zoom,Q=2*$,Z=this.aspect*Q,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:H}=W;K+=W.offsetX*Z/X,$-=W.offsetY*Q/H,Z*=W.width/X,Q*=W.height/H}let Y=this.filmOffset;if(Y!==0)K+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,$,$-Q,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}class vU extends OQ{constructor(){super(new G8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let $=this.camera,Q=u7*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,K=J.distance||$.far;if(Q!==$.fov||Z!==$.aspect||K!==$.far)$.fov=Q,$.aspect=Z,$.far=K,$.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class H$ extends X${constructor(J,$,Q=0,Z=Math.PI/3,K=0,W=2){super(J,$);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(SJ.DEFAULT_UP),this.updateMatrix(),this.target=new SJ,this.distance=Q,this.angle=Z,this.penumbra=K,this.decay=W,this.map=null,this.shadow=new vU}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let $=super.toJSON(J);if($.object.distance=this.distance,$.object.angle=this.angle,$.object.decay=this.decay,$.object.penumbra=this.penumbra,$.object.target=this.target.uuid,this.map&&this.map.isTexture)$.object.map=this.map.toJSON(J).uuid;return $.object.shadow=this.shadow.toJSON(),$}}class fU extends OQ{constructor(){super(new G8(90,1,0.5,500));this.isPointLightShadow=!0}}class W7 extends X${constructor(J,$,Q=0,Z=2){super(J,$);this.isPointLight=!0,this.type="PointLight",this.distance=Q,this.decay=Z,this.shadow=new fU}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let $=super.toJSON(J);return $.object.distance=this.distance,$.object.decay=this.decay,$.object.shadow=this.shadow.toJSON(),$}}class Y7 extends KK{constructor(J=-1,$=1,Q=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=$,this.top=Q,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,$,Q,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=Q-J,W=Q+J,Y=Z+$,X=Z-$;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=H*this.view.offsetX,W=K+H*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}class bU extends OQ{constructor(){super(new Y7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class U$ extends X${constructor(J,$){super(J,$);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(SJ.DEFAULT_UP),this.updateMatrix(),this.target=new SJ,this.shadow=new bU}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let $=super.toJSON(J);return $.object.shadow=this.shadow.toJSON(),$.object.target=this.target.uuid,$}}class T7{static extractUrlBase(J){let $=J.lastIndexOf("/");if($===-1)return"./";return J.slice(0,$+1)}static resolveURL(J,$){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test($)&&/^\//.test(J))$=$.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return $+J}}var EW=new WeakMap;class WK extends K7{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")t0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")t0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,$,Q,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=S9.get(`image-bitmap:${J}`);if(W!==void 0){if(K.manager.itemStart(J),W.then){W.then((H)=>{if(EW.has(W)===!0){if(Z)Z(EW.get(W));K.manager.itemError(J),K.manager.itemEnd(J)}else{if($)$(H);K.manager.itemEnd(J)}});return}setTimeout(function(){if($)$(W);K.manager.itemEnd(J)},0);return}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader,Y.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,Y).then(function(H){return H.blob()}).then(function(H){return createImageBitmap(H,Object.assign({},K.options,{colorSpaceConversion:"none"}))}).then(function(H){if(S9.add(`image-bitmap:${J}`,H),$)$(H);return K.manager.itemEnd(J),H}).catch(function(H){if(Z)Z(H);EW.set(X,H),S9.remove(`image-bitmap:${J}`),K.manager.itemError(J),K.manager.itemEnd(J)});S9.add(`image-bitmap:${J}`,X),K.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var m6=-90,l6=1;class TY extends SJ{constructor(J,$,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new G8(m6,l6,J,$);Z.layers=this.layers,this.add(Z);let K=new G8(m6,l6,J,$);K.layers=this.layers,this.add(K);let W=new G8(m6,l6,J,$);W.layers=this.layers,this.add(W);let Y=new G8(m6,l6,J,$);Y.layers=this.layers,this.add(Y);let X=new G8(m6,l6,J,$);X.layers=this.layers,this.add(X);let H=new G8(m6,l6,J,$);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,$=this.children.concat(),[Q,Z,K,W,Y,X]=$;for(let H of $)this.remove(H);if(J===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of $)this.add(H),H.updateMatrixWorld()}update(J,$){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,Y,X,H,U]=this.children,N=J.getRenderTarget(),F=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let O=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget(Q,0,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,K),J.setRenderTarget(Q,1,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,W),J.setRenderTarget(Q,2,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,Y),J.setRenderTarget(Q,3,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,X),J.setRenderTarget(Q,4,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,H),Q.texture.generateMipmaps=O,J.setRenderTarget(Q,5,Z),B&&J.autoClear===!1)J.clearDepth();J.render($,U),J.setRenderTarget(N,F,G),J.xr.enabled=q,Q.texture.needsPMREMUpdate=!0}}class wY extends G8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class YK{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=tG.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function tG(){if(this._document.hidden===!1)this.reset()}class SY{constructor(J,$,Q){this.binding=J,this.valueSize=Q;let Z,K,W;switch($){case"quaternion":Z=this._slerp,K=this._slerpAdditive,W=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(Q*6),this._workIndex=5;break;case"string":case"bool":Z=this._select,K=this._select,W=this._setAdditiveIdentityOther,this.buffer=Array(Q*5);break;default:Z=this._lerp,K=this._lerpAdditive,W=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(Q*5)}this._mixBufferRegion=Z,this._mixBufferRegionAdditive=K,this._setIdentity=W,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,$){let Q=this.buffer,Z=this.valueSize,K=J*Z+Z,W=this.cumulativeWeight;if(W===0){for(let Y=0;Y!==Z;++Y)Q[K+Y]=Q[Y];W=$}else{W+=$;let Y=$/W;this._mixBufferRegion(Q,K,0,Y,Z)}this.cumulativeWeight=W}accumulateAdditive(J){let $=this.buffer,Q=this.valueSize,Z=Q*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive($,Z,0,J,Q),this.cumulativeWeightAdditive+=J}apply(J){let $=this.valueSize,Q=this.buffer,Z=J*$+$,K=this.cumulativeWeight,W=this.cumulativeWeightAdditive,Y=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,K<1){let X=$*this._origIndex;this._mixBufferRegion(Q,Z,X,1-K,$)}if(W>0)this._mixBufferRegionAdditive(Q,Z,this._addIndex*$,1,$);for(let X=$,H=$+$;X!==H;++X)if(Q[X]!==Q[X+$]){Y.setValue(Q,Z);break}}saveOriginalState(){let J=this.binding,$=this.buffer,Q=this.valueSize,Z=Q*this._origIndex;J.getValue($,Z);for(let K=Q,W=Z;K!==W;++K)$[K]=$[Z+K%Q];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,$=J+this.valueSize;for(let Q=J;Q<$;Q++)this.buffer[Q]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,$=this._addIndex*this.valueSize;for(let Q=0;Q<this.valueSize;Q++)this.buffer[$+Q]=this.buffer[J+Q]}_select(J,$,Q,Z,K){if(Z>=0.5)for(let W=0;W!==K;++W)J[$+W]=J[Q+W]}_slerp(J,$,Q,Z){GJ.slerpFlat(J,$,J,$,J,Q,Z)}_slerpAdditive(J,$,Q,Z,K){let W=this._workIndex*K;GJ.multiplyQuaternionsFlat(J,W,J,$,J,Q),GJ.slerpFlat(J,$,J,$,J,W,Z)}_lerp(J,$,Q,Z,K){let W=1-Z;for(let Y=0;Y!==K;++Y){let X=$+Y;J[X]=J[X]*W+J[Q+Y]*Z}}_lerpAdditive(J,$,Q,Z,K){for(let W=0;W!==K;++W){let Y=$+W;J[Y]=J[Y]+J[Q+W]*Z}}}var jY="\\[\\]\\.:\\/",eG=new RegExp("["+jY+"]","g"),yY="[^"+jY+"]",JF="[^"+jY.replace("\\.","")+"]",$F=/((?:WC+[\/:])*)/.source.replace("WC",yY),QF=/(WCOD+)?/.source.replace("WCOD",JF),ZF=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yY),KF=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yY),WF=new RegExp("^"+$F+QF+ZF+KF+"$"),YF=["material","materials","bones","map"];class hU{constructor(J,$,Q){let Z=Q||fJ.parseTrackName($);this._targetGroup=J,this._bindings=J.subscribe_($,Z)}getValue(J,$){this.bind();let Q=this._targetGroup.nCachedObjects_,Z=this._bindings[Q];if(Z!==void 0)Z.getValue(J,$)}setValue(J,$){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=Q.length;Z!==K;++Z)Q[Z].setValue(J,$)}bind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].bind()}unbind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].unbind()}}class fJ{constructor(J,$,Q){this.path=$,this.parsedPath=Q||fJ.parseTrackName($),this.node=fJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,$,Q){if(!(J&&J.isAnimationObjectGroup))return new fJ(J,$,Q);else return new fJ.Composite(J,$,Q)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(eG,"")}static parseTrackName(J){let $=WF.exec(J);if($===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Q={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},Z=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=Q.nodeName.substring(Z+1);if(YF.indexOf(K)!==-1)Q.nodeName=Q.nodeName.substring(0,Z),Q.objectName=K}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Q}static findNode(J,$){if($===void 0||$===""||$==="."||$===-1||$===J.name||$===J.uuid)return J;if(J.skeleton){let Q=J.skeleton.getBoneByName($);if(Q!==void 0)return Q}if(J.children){let Q=function(K){for(let W=0;W<K.length;W++){let Y=K[W];if(Y.name===$||Y.uuid===$)return Y;let X=Q(Y.children);if(X)return X}return null},Z=Q(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,$){J[$]=this.targetObject[this.propertyName]}_getValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)J[$++]=Q[Z]}_getValue_arrayElement(J,$){J[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,$){this.resolvedProperty.toArray(J,$)}_setValue_direct(J,$){this.targetObject[this.propertyName]=J[$]}_setValue_direct_setNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++]}_setValue_array_setNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,$){this.resolvedProperty[this.propertyIndex]=J[$]}_setValue_arrayElement_setNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,$){this.resolvedProperty.fromArray(J,$)}_setValue_fromArray_setNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,$){this.bind(),this.getValue(J,$)}_setValue_unbound(J,$){this.bind(),this.setValue(J,$)}bind(){let J=this.node,$=this.parsedPath,Q=$.objectName,Z=$.propertyName,K=$.propertyIndex;if(!J)J=fJ.findNode(this.rootNode,$.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){t0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let H=$.objectIndex;switch(Q){case"materials":if(!J.material){KJ("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){KJ("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){KJ("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){KJ("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){KJ("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Q]===void 0){KJ("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Q]}if(H!==void 0){if(J[H]===void 0){KJ("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[Z];if(W===void 0){let H=$.nodeName;KJ("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){KJ("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){KJ("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}X=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))X=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}fJ.Composite=hU;fJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fJ.prototype.GetterByBindingType=[fJ.prototype._getValue_direct,fJ.prototype._getValue_array,fJ.prototype._getValue_arrayElement,fJ.prototype._getValue_toArray];fJ.prototype.SetterByBindingTypeAndVersioning=[[fJ.prototype._setValue_direct,fJ.prototype._setValue_direct_setNeedsUpdate,fJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fJ.prototype._setValue_array,fJ.prototype._setValue_array_setNeedsUpdate,fJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fJ.prototype._setValue_arrayElement,fJ.prototype._setValue_arrayElement_setNeedsUpdate,fJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fJ.prototype._setValue_fromArray,fJ.prototype._setValue_fromArray_setNeedsUpdate,fJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vY{constructor(J,$,Q=null,Z=$.blendMode){this._mixer=J,this._clip=$,this._localRoot=Q,this.blendMode=Z;let K=$.tracks,W=K.length,Y=Array(W),X={endingStart:2400,endingEnd:2400};for(let H=0;H!==W;++H){let U=K[H].createInterpolant(null);Y[H]=U,U.settings=X}this._interpolantSettings=X,this._interpolants=Y,this._propertyBindings=Array(W),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,$){return this.loop=J,this.repetitions=$,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,$,Q=!1){if(J.fadeOut($),this.fadeIn($),Q===!0){let Z=this._clip.duration,K=J._clip.duration,W=K/Z,Y=Z/K;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,W,$),this.warp(Y,1,$)}return this}crossFadeTo(J,$,Q=!1){return J.crossFadeFrom(this,$,Q)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,$,Q){let Z=this._mixer,K=Z.time,W=this.timeScale,Y=this._timeScaleInterpolant;if(Y===null)Y=Z._lendControlInterpolant(),this._timeScaleInterpolant=Y;let{parameterPositions:X,sampleValues:H}=Y;return X[0]=K,X[1]=K+Q,H[0]=J/W,H[1]=$/W,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,$,Q,Z){if(!this.enabled){this._updateWeight(J);return}let K=this._startTime;if(K!==null){let X=(J-K)*Q;if(X<0||Q===0)$=0;else this._startTime=null,$=Q*X}$*=this._updateTimeScale(J);let W=this._updateTime($),Y=this._updateWeight(J);if(Y>0){let X=this._interpolants,H=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,N=X.length;U!==N;++U)X[U].evaluate(W),H[U].accumulateAdditive(Y);break;case 2500:default:for(let U=0,N=X.length;U!==N;++U)X[U].evaluate(W),H[U].accumulate(Z,Y)}}}_updateWeight(J){let $=0;if(this.enabled){$=this.weight;let Q=this._weightInterpolant;if(Q!==null){let Z=Q.evaluate(J)[0];if($*=Z,J>Q.parameterPositions[1]){if(this.stopFading(),Z===0)this.enabled=!1}}}return this._effectiveWeight=$,$}_updateTimeScale(J){let $=0;if(!this.paused){$=this.timeScale;let Q=this._timeScaleInterpolant;if(Q!==null){let Z=Q.evaluate(J)[0];if($*=Z,J>Q.parameterPositions[1]){if($===0)this.paused=!0;else{if(this._restoreTimeScale!==null)$=this._restoreTimeScale;this.timeScale=$}this.stopWarping()}}}return this._effectiveTimeScale=$,$}_updateTime(J){let $=this._clip.duration,Q=this.loop,Z=this.time+J,K=this._loopCount,W=Q===2202;if(J===0){if(K===-1)return Z;return W&&(K&1)===1?$-Z:Z}if(Q===2200){if(K===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(Z>=$)Z=$;else if(Z<0)Z=0;else{this.time=Z;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(K===-1)if(J>=0)K=0,this._setEndings(!0,this.repetitions===0,W);else this._setEndings(this.repetitions===0,!0,W);if(Z>=$||Z<0){let Y=Math.floor(Z/$);Z-=$*Y,K+=Math.abs(Y);let X=this.repetitions-K;if(X<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;Z=J>0?$:0,this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(X===1){let H=J<0;this._setEndings(H,!H,W)}else this._setEndings(!1,!1,W);this._loopCount=K,this.time=Z,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:Y})}}else this._loopCount=K,this.time=Z;if(W&&(K&1)===1)return $-Z}return Z}_setEndings(J,$,Q){let Z=this._interpolantSettings;if(Q)Z.endingStart=2401,Z.endingEnd=2401;else{if(J)Z.endingStart=this.zeroSlopeAtStart?2401:2400;else Z.endingStart=2402;if($)Z.endingEnd=this.zeroSlopeAtEnd?2401:2400;else Z.endingEnd=2402}}_scheduleFading(J,$,Q){let Z=this._mixer,K=Z.time,W=this._weightInterpolant;if(W===null)W=Z._lendControlInterpolant(),this._weightInterpolant=W;let{parameterPositions:Y,sampleValues:X}=W;return Y[0]=K,X[0]=$,Y[1]=K+J,X[1]=Q,this}}var XF=new Float32Array(1);class RQ extends M9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,$){let Q=J._localRoot||this._root,Z=J._clip.tracks,K=Z.length,W=J._propertyBindings,Y=J._interpolants,X=Q.uuid,H=this._bindingsByRootAndName,U=H[X];if(U===void 0)U={},H[X]=U;for(let N=0;N!==K;++N){let F=Z[N],G=F.name,q=U[G];if(q!==void 0)++q.referenceCount,W[N]=q;else{if(q=W[N],q!==void 0){if(q._cacheIndex===null)++q.referenceCount,this._addInactiveBinding(q,X,G);continue}let O=$&&$._propertyBindings[N].binding.parsedPath;q=new SY(fJ.create(Q,G,O),F.ValueTypeName,F.getValueSize()),++q.referenceCount,this._addInactiveBinding(q,X,G),W[N]=q}Y[N].resultBuffer=q.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let Q=(J._localRoot||this._root).uuid,Z=J._clip.uuid,K=this._actionsByClip[Z];this._bindAction(J,K&&K.knownActions[0]),this._addInactiveAction(J,Z,Q)}let $=J._propertyBindings;for(let Q=0,Z=$.length;Q!==Z;++Q){let K=$[Q];if(K.useCount++===0)this._lendBinding(K),K.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let $=J._propertyBindings;for(let Q=0,Z=$.length;Q!==Z;++Q){let K=$[Q];if(--K.useCount===0)K.restoreOriginalState(),this._takeBackBinding(K)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let $=J._cacheIndex;return $!==null&&$<this._nActiveActions}_addInactiveAction(J,$,Q){let Z=this._actions,K=this._actionsByClip,W=K[$];if(W===void 0)W={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,K[$]=W;else{let Y=W.knownActions;J._byClipCacheIndex=Y.length,Y.push(J)}J._cacheIndex=Z.length,Z.push(J),W.actionByRoot[Q]=J}_removeInactiveAction(J){let $=this._actions,Q=$[$.length-1],Z=J._cacheIndex;Q._cacheIndex=Z,$[Z]=Q,$.pop(),J._cacheIndex=null;let K=J._clip.uuid,W=this._actionsByClip,Y=W[K],X=Y.knownActions,H=X[X.length-1],U=J._byClipCacheIndex;H._byClipCacheIndex=U,X[U]=H,X.pop(),J._byClipCacheIndex=null;let N=Y.actionByRoot,F=(J._localRoot||this._root).uuid;if(delete N[F],X.length===0)delete W[K];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let $=J._propertyBindings;for(let Q=0,Z=$.length;Q!==Z;++Q){let K=$[Q];if(--K.referenceCount===0)this._removeInactiveBinding(K)}}_lendAction(J){let $=this._actions,Q=J._cacheIndex,Z=this._nActiveActions++,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_takeBackAction(J){let $=this._actions,Q=J._cacheIndex,Z=--this._nActiveActions,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_addInactiveBinding(J,$,Q){let Z=this._bindingsByRootAndName,K=this._bindings,W=Z[$];if(W===void 0)W={},Z[$]=W;W[Q]=J,J._cacheIndex=K.length,K.push(J)}_removeInactiveBinding(J){let $=this._bindings,Q=J.binding,Z=Q.rootNode.uuid,K=Q.path,W=this._bindingsByRootAndName,Y=W[Z],X=$[$.length-1],H=J._cacheIndex;if(X._cacheIndex=H,$[H]=X,$.pop(),delete Y[K],Object.keys(Y).length===0)delete W[Z]}_lendBinding(J){let $=this._bindings,Q=J._cacheIndex,Z=this._nActiveBindings++,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_takeBackBinding(J){let $=this._bindings,Q=J._cacheIndex,Z=--this._nActiveBindings,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_lendControlInterpolant(){let J=this._controlInterpolants,$=this._nActiveControlInterpolants++,Q=J[$];if(Q===void 0)Q=new JK(new Float32Array(2),new Float32Array(2),1,XF),Q.__cacheIndex=$,J[$]=Q;return Q}_takeBackControlInterpolant(J){let $=this._controlInterpolants,Q=J.__cacheIndex,Z=--this._nActiveControlInterpolants,K=$[Z];J.__cacheIndex=Z,$[Z]=J,K.__cacheIndex=Q,$[Q]=K}clipAction(J,$,Q){let Z=$||this._root,K=Z.uuid,W=typeof J==="string"?i6.findByName(Z,J):J,Y=W!==null?W.uuid:J,X=this._actionsByClip[Y],H=null;if(Q===void 0)if(W!==null)Q=W.blendMode;else Q=2500;if(X!==void 0){let N=X.actionByRoot[K];if(N!==void 0&&N.blendMode===Q)return N;if(H=X.knownActions[0],W===null)W=H._clip}if(W===null)return null;let U=new vY(this,W,$,Q);return this._bindAction(U,H),this._addInactiveAction(U,Y,K),U}existingAction(J,$){let Q=$||this._root,Z=Q.uuid,K=typeof J==="string"?i6.findByName(Q,J):J,W=K?K.uuid:J,Y=this._actionsByClip[W];if(Y!==void 0)return Y.actionByRoot[Z]||null;return null}stopAllAction(){let J=this._actions,$=this._nActiveActions;for(let Q=$-1;Q>=0;--Q)J[Q].stop();return this}update(J){J*=this.timeScale;let $=this._actions,Q=this._nActiveActions,Z=this.time+=J,K=Math.sign(J),W=this._accuIndex^=1;for(let H=0;H!==Q;++H)$[H]._update(Z,J,K,W);let Y=this._bindings,X=this._nActiveBindings;for(let H=0;H!==X;++H)Y[H].apply(W);return this}setTime(J){this.time=0;for(let $=0;$<this._actions.length;$++)this._actions[$].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let $=this._actions,Q=J.uuid,Z=this._actionsByClip,K=Z[Q];if(K!==void 0){let W=K.knownActions;for(let Y=0,X=W.length;Y!==X;++Y){let H=W[Y];this._deactivateAction(H);let U=H._cacheIndex,N=$[$.length-1];H._cacheIndex=null,H._byClipCacheIndex=null,N._cacheIndex=U,$[U]=N,$.pop(),this._removeInactiveBindingsForAction(H)}delete Z[Q]}}uncacheRoot(J){let $=J.uuid,Q=this._actionsByClip;for(let W in Q){let Y=Q[W].actionByRoot,X=Y[$];if(X!==void 0)this._deactivateAction(X),this._removeInactiveAction(X)}let Z=this._bindingsByRootAndName,K=Z[$];if(K!==void 0)for(let W in K){let Y=K[W];Y.restoreOriginalState(),this._removeInactiveBinding(Y)}}uncacheAction(J,$){let Q=this.existingAction(J,$);if(Q!==null)this._deactivateAction(Q),this._removeInactiveAction(Q)}}class XK{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,t0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let $=performance.now();J=($-this.oldTime)/1000,this.oldTime=$,this.elapsedTime+=J}return J}}class LQ{constructor(J=1,$=0,Q=0){this.radius=J,this.phi=$,this.theta=Q}set(J,$,Q){return this.radius=J,this.phi=$,this.theta=Q,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=OJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,$,Q){if(this.radius=Math.sqrt(J*J+$*$+Q*Q),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Q),this.phi=Math.acos(OJ($/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class fY{static{fY.prototype.isMatrix2=!0}constructor(J,$,Q,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,$,Q,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,$=0){for(let Q=0;Q<4;Q++)this.elements[Q]=J[Q+$];return this}set(J,$,Q,Z){let K=this.elements;return K[0]=J,K[2]=$,K[1]=Q,K[3]=Z,this}}class HK extends M9{constructor(J,$=null){super();this.object=J,this.domElement=$,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function bY(J,$,Q,Z){let K=HF(Z);switch(Q){case 1021:return J*$;case 1028:return J*$/K.components*K.byteLength;case 1029:return J*$/K.components*K.byteLength;case 1030:return J*$*2/K.components*K.byteLength;case 1031:return J*$*2/K.components*K.byteLength;case 1022:return J*$*3/K.components*K.byteLength;case 1023:return J*$*4/K.components*K.byteLength;case 1033:return J*$*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max($,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max($,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor(($+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor(($+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor(($+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor(($+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor(($+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor(($+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor(($+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor(($+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor(($+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor(($+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor(($+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor(($+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor(($+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil($/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil($/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil($/4)*16}throw Error(`Unable to determine texture byte length for ${Q} format.`)}function HF(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)t0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function W5(){let J=null,$=!1,Q=null,Z=null;function K(W,Y){Z=J.requestAnimationFrame(K),Q(W,Y)}return{start:function(){if($===!0)return;if(Q===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),$=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);$=!1},setAnimationLoop:function(W){Q=W},setContext:function(W){J=W}}}function UF(J){let $=new WeakMap;function Q(X,H){let{array:U,usage:N}=X,F=U.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,U,N),X.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)q=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:F}}function Z(X,H,U){let{array:N,updateRanges:F}=H;if(J.bindBuffer(U,X),F.length===0)J.bufferSubData(U,0,N);else{F.sort((q,O)=>q.start-O.start);let G=0;for(let q=1;q<F.length;q++){let O=F[G],B=F[q];if(B.start<=O.start+O.count+1)O.count=Math.max(O.count,B.start+B.count-O.start);else++G,F[G]=B}F.length=G+1;for(let q=0,O=F.length;q<O;q++){let B=F[q];J.bufferSubData(U,B.start*N.BYTES_PER_ELEMENT,N,B.start,B.count)}H.clearUpdateRanges()}H.onUploadCallback()}function K(X){if(X.isInterleavedBufferAttribute)X=X.data;return $.get(X)}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;let H=$.get(X);if(H)J.deleteBuffer(H.buffer),$.delete(X)}function Y(X,H){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let N=$.get(X);if(!N||N.version<X.version)$.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=$.get(X);if(U===void 0)$.set(X,Q(X,H));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,H),U.version=X.version}}return{get:K,remove:W,update:Y}}var NF=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GF=`#ifdef USE_ALPHAHASH
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
#endif`,FF=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EF=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qF=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OF=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RF=`#ifdef USE_AOMAP
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
#endif`,LF=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VF=`#ifdef USE_BATCHING
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
#endif`,BF=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DF=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kF=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MF=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CF=`#ifdef USE_IRIDESCENCE
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
#endif`,PF=`#ifdef USE_BUMPMAP
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
#endif`,IF=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_F=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,SF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yF=`#define PI 3.141592653589793
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
} // validated`,vF=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fF=`vec3 transformedNormal = objectNormal;
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
#endif`,bF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pF="gl_FragColor = linearToOutputTexel( gl_FragColor );",mF=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lF=`#ifdef USE_ENVMAP
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
#endif`,uF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dF=`#ifdef USE_ENVMAP
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
#endif`,cF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nF=`#ifdef USE_ENVMAP
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
#endif`,sF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rF=`#ifdef USE_GRADIENTMAP
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
}`,tF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Q1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X1=`PhysicalMaterial material;
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
#endif`,H1=`uniform sampler2D dfgLUT;
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
}`,U1=`
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
#endif`,N1=`#if defined( RE_IndirectDiffuse )
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
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,E1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D1=`#if defined( USE_POINTS_UV )
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
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
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
#endif`,A1=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y1=`#ifdef USE_NORMALMAP
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
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o1=`float getShadowMask() {
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
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,t1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e1=`#ifdef USE_SKINNING
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
#endif`,JE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
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
#endif`,WE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,NE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GE=`uniform sampler2D t2D;
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`#include <common>
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
}`,LE=`#if DEPTH_PACKING == 3200
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
}`,VE=`#define DISTANCE
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
}`,BE=`#define DISTANCE
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
}`,DE=`varying vec3 vWorldDirection;
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
}`,ME=`uniform float scale;
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
}`,CE=`uniform vec3 diffuse;
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
}`,PE=`#include <common>
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
}`,IE=`uniform vec3 diffuse;
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
}`,zE=`#define LAMBERT
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
}`,AE=`#define LAMBERT
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
}`,TE=`#define MATCAP
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
}`,wE=`#define NORMAL
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
}`,SE=`#define NORMAL
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
}`,jE=`#define PHONG
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
}`,yE=`#define PHONG
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
}`,vE=`#define STANDARD
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
}`,fE=`#define STANDARD
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
}`,bE=`#define TOON
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
}`,hE=`#define TOON
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
}`,xE=`uniform float size;
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
}`,gE=`uniform vec3 diffuse;
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
}`,pE=`#include <common>
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
}`,mE=`uniform vec3 color;
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
}`,lE=`uniform float rotation;
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
}`,uE=`uniform vec3 diffuse;
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
}`,BJ={alphahash_fragment:NF,alphahash_pars_fragment:GF,alphamap_fragment:FF,alphamap_pars_fragment:EF,alphatest_fragment:qF,alphatest_pars_fragment:OF,aomap_fragment:RF,aomap_pars_fragment:LF,batching_pars_vertex:VF,batching_vertex:BF,begin_vertex:DF,beginnormal_vertex:kF,bsdfs:MF,iridescence_fragment:CF,bumpmap_pars_fragment:PF,clipping_planes_fragment:IF,clipping_planes_pars_fragment:zF,clipping_planes_pars_vertex:AF,clipping_planes_vertex:_F,color_fragment:TF,color_pars_fragment:wF,color_pars_vertex:SF,color_vertex:jF,common:yF,cube_uv_reflection_fragment:vF,defaultnormal_vertex:fF,displacementmap_pars_vertex:bF,displacementmap_vertex:hF,emissivemap_fragment:xF,emissivemap_pars_fragment:gF,colorspace_fragment:pF,colorspace_pars_fragment:mF,envmap_fragment:lF,envmap_common_pars_fragment:uF,envmap_pars_fragment:dF,envmap_pars_vertex:cF,envmap_physical_pars_fragment:Q1,envmap_vertex:nF,fog_vertex:sF,fog_pars_vertex:iF,fog_fragment:oF,fog_pars_fragment:aF,gradientmap_pars_fragment:rF,lightmap_pars_fragment:tF,lights_lambert_fragment:eF,lights_lambert_pars_fragment:J1,lights_pars_begin:$1,lights_toon_fragment:Z1,lights_toon_pars_fragment:K1,lights_phong_fragment:W1,lights_phong_pars_fragment:Y1,lights_physical_fragment:X1,lights_physical_pars_fragment:H1,lights_fragment_begin:U1,lights_fragment_maps:N1,lights_fragment_end:G1,lightprobes_pars_fragment:F1,logdepthbuf_fragment:E1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:O1,logdepthbuf_vertex:R1,map_fragment:L1,map_pars_fragment:V1,map_particle_fragment:B1,map_particle_pars_fragment:D1,metalnessmap_fragment:k1,metalnessmap_pars_fragment:M1,morphinstance_vertex:C1,morphcolor_vertex:P1,morphnormal_vertex:I1,morphtarget_pars_vertex:z1,morphtarget_vertex:A1,normal_fragment_begin:_1,normal_fragment_maps:T1,normal_pars_fragment:w1,normal_pars_vertex:S1,normal_vertex:j1,normalmap_pars_fragment:y1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:b1,iridescence_pars_fragment:h1,opaque_fragment:x1,packing:g1,premultiplied_alpha_fragment:p1,project_vertex:m1,dithering_fragment:l1,dithering_pars_fragment:u1,roughnessmap_fragment:d1,roughnessmap_pars_fragment:c1,shadowmap_pars_fragment:n1,shadowmap_pars_vertex:s1,shadowmap_vertex:i1,shadowmask_pars_fragment:o1,skinbase_vertex:a1,skinning_pars_vertex:r1,skinning_vertex:t1,skinnormal_vertex:e1,specularmap_fragment:JE,specularmap_pars_fragment:$E,tonemapping_fragment:QE,tonemapping_pars_fragment:ZE,transmission_fragment:KE,transmission_pars_fragment:WE,uv_pars_fragment:YE,uv_pars_vertex:XE,uv_vertex:HE,worldpos_vertex:UE,background_vert:NE,background_frag:GE,backgroundCube_vert:FE,backgroundCube_frag:EE,cube_vert:qE,cube_frag:OE,depth_vert:RE,depth_frag:LE,distance_vert:VE,distance_frag:BE,equirect_vert:DE,equirect_frag:kE,linedashed_vert:ME,linedashed_frag:CE,meshbasic_vert:PE,meshbasic_frag:IE,meshlambert_vert:zE,meshlambert_frag:AE,meshmatcap_vert:_E,meshmatcap_frag:TE,meshnormal_vert:wE,meshnormal_frag:SE,meshphong_vert:jE,meshphong_frag:yE,meshphysical_vert:vE,meshphysical_frag:fE,meshtoon_vert:bE,meshtoon_frag:hE,points_vert:xE,points_frag:gE,shadow_vert:pE,shadow_frag:mE,sprite_vert:lE,sprite_frag:uE},m0={common:{diffuse:{value:new y0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new NJ},alphaMap:{value:null},alphaMapTransform:{value:new NJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new NJ}},envmap:{envMap:{value:null},envMapRotation:{value:new NJ},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new NJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new NJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new NJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new NJ},normalScale:{value:new R0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new NJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new NJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new NJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new NJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new y0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new S},probesMax:{value:new S},probesResolution:{value:new S}},points:{diffuse:{value:new y0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new NJ},alphaTest:{value:0},uvTransform:{value:new NJ}},sprite:{diffuse:{value:new y0(16777215)},opacity:{value:1},center:{value:new R0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new NJ},alphaMap:{value:null},alphaMapTransform:{value:new NJ},alphaTest:{value:0}}},x9={basic:{uniforms:A8([m0.common,m0.specularmap,m0.envmap,m0.aomap,m0.lightmap,m0.fog]),vertexShader:BJ.meshbasic_vert,fragmentShader:BJ.meshbasic_frag},lambert:{uniforms:A8([m0.common,m0.specularmap,m0.envmap,m0.aomap,m0.lightmap,m0.emissivemap,m0.bumpmap,m0.normalmap,m0.displacementmap,m0.fog,m0.lights,{emissive:{value:new y0(0)},envMapIntensity:{value:1}}]),vertexShader:BJ.meshlambert_vert,fragmentShader:BJ.meshlambert_frag},phong:{uniforms:A8([m0.common,m0.specularmap,m0.envmap,m0.aomap,m0.lightmap,m0.emissivemap,m0.bumpmap,m0.normalmap,m0.displacementmap,m0.fog,m0.lights,{emissive:{value:new y0(0)},specular:{value:new y0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:BJ.meshphong_vert,fragmentShader:BJ.meshphong_frag},standard:{uniforms:A8([m0.common,m0.envmap,m0.aomap,m0.lightmap,m0.emissivemap,m0.bumpmap,m0.normalmap,m0.displacementmap,m0.roughnessmap,m0.metalnessmap,m0.fog,m0.lights,{emissive:{value:new y0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:BJ.meshphysical_vert,fragmentShader:BJ.meshphysical_frag},toon:{uniforms:A8([m0.common,m0.aomap,m0.lightmap,m0.emissivemap,m0.bumpmap,m0.normalmap,m0.displacementmap,m0.gradientmap,m0.fog,m0.lights,{emissive:{value:new y0(0)}}]),vertexShader:BJ.meshtoon_vert,fragmentShader:BJ.meshtoon_frag},matcap:{uniforms:A8([m0.common,m0.bumpmap,m0.normalmap,m0.displacementmap,m0.fog,{matcap:{value:null}}]),vertexShader:BJ.meshmatcap_vert,fragmentShader:BJ.meshmatcap_frag},points:{uniforms:A8([m0.points,m0.fog]),vertexShader:BJ.points_vert,fragmentShader:BJ.points_frag},dashed:{uniforms:A8([m0.common,m0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:BJ.linedashed_vert,fragmentShader:BJ.linedashed_frag},depth:{uniforms:A8([m0.common,m0.displacementmap]),vertexShader:BJ.depth_vert,fragmentShader:BJ.depth_frag},normal:{uniforms:A8([m0.common,m0.bumpmap,m0.normalmap,m0.displacementmap,{opacity:{value:1}}]),vertexShader:BJ.meshnormal_vert,fragmentShader:BJ.meshnormal_frag},sprite:{uniforms:A8([m0.sprite,m0.fog]),vertexShader:BJ.sprite_vert,fragmentShader:BJ.sprite_frag},background:{uniforms:{uvTransform:{value:new NJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:BJ.background_vert,fragmentShader:BJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new NJ}},vertexShader:BJ.backgroundCube_vert,fragmentShader:BJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:BJ.cube_vert,fragmentShader:BJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:BJ.equirect_vert,fragmentShader:BJ.equirect_frag},distance:{uniforms:A8([m0.common,m0.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:BJ.distance_vert,fragmentShader:BJ.distance_frag},shadow:{uniforms:A8([m0.lights,m0.fog,{color:{value:new y0(0)},opacity:{value:1}}]),vertexShader:BJ.shadow_vert,fragmentShader:BJ.shadow_frag}};x9.physical={uniforms:A8([x9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new NJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new NJ},clearcoatNormalScale:{value:new R0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new NJ},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new NJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new NJ},sheen:{value:0},sheenColor:{value:new y0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new NJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new NJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new NJ},transmissionSamplerSize:{value:new R0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new NJ},attenuationDistance:{value:0},attenuationColor:{value:new y0(0)},specularColor:{value:new y0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new NJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new NJ},anisotropyVector:{value:new R0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new NJ}}]),vertexShader:BJ.meshphysical_vert,fragmentShader:BJ.meshphysical_frag};var UK={r:0,b:0,g:0},dE=new QJ,Y5=new NJ;Y5.set(-1,0,0,0,1,0,0,0,1);function cE(J,$,Q,Z,K,W){let Y=new y0(0),X=K===!0?0:1,H,U,N=null,F=0,G=null;function q(D){let M=D.isScene===!0?D.background:null;if(M&&M.isTexture){let V=D.backgroundBlurriness>0;M=$.get(M,V)}return M}function O(D){let M=!1,V=q(D);if(V===null)R(Y,X);else if(V&&V.isColor)R(V,1),M=!0;let I=J.xr.getEnvironmentBlendMode();if(I==="additive")Q.buffers.color.setClear(0,0,0,1,W);else if(I==="alpha-blend")Q.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||M)Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(D,M){let V=q(M);if(V&&(V.isCubeTexture||V.mapping===$Q)){if(U===void 0)U=new I0(new wJ(1,1,1),new J8({name:"BackgroundCubeMaterial",uniforms:Y6(x9.backgroundCube.uniforms),vertexShader:x9.backgroundCube.vertexShader,fragmentShader:x9.backgroundCube.fragmentShader,side:D8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(I,w,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(dE.makeRotationFromEuler(M.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(Y5);if(U.material.toneMapped=RJ.getTransfer(V.colorSpace)!==uJ,N!==V||F!==V.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=V,F=V.version,G=J.toneMapping;U.layers.enableAll(),D.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new I0(new VJ(2,2),new J8({name:"BackgroundMaterial",uniforms:Y6(x9.background.uniforms),vertexShader:x9.background.vertexShader,fragmentShader:x9.background.fragmentShader,side:D7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,H.material.toneMapped=RJ.getTransfer(V.colorSpace)!==uJ,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),N!==V||F!==V.version||G!==J.toneMapping)H.material.needsUpdate=!0,N=V,F=V.version,G=J.toneMapping;H.layers.enableAll(),D.unshift(H,H.geometry,H.material,0,0,null)}}function R(D,M){D.getRGB(UK,DY(J)),Q.buffers.color.setClear(UK.r,UK.g,UK.b,M,W)}function E(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return Y},setClearColor:function(D,M=1){Y.set(D),X=M,R(Y,X)},getClearAlpha:function(){return X},setClearAlpha:function(D){X=D,R(Y,X)},render:O,addToRenderList:B,dispose:E}}function nE(J,$){let Q=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=G(null),W=K,Y=!1;function X(b,d,e,v,j){let g=!1,f=F(b,v,e,d);if(W!==f)W=f,U(W.object);if(g=q(b,v,e,j),g)O(b,v,e,j);if(j!==null)$.update(j,J.ELEMENT_ARRAY_BUFFER);if(g||Y){if(Y=!1,V(b,d,e,v),j!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,$.get(j).buffer)}}function H(){return J.createVertexArray()}function U(b){return J.bindVertexArray(b)}function N(b){return J.deleteVertexArray(b)}function F(b,d,e,v){let j=v.wireframe===!0,g=Z[d.id];if(g===void 0)g={},Z[d.id]=g;let f=b.isInstancedMesh===!0?b.id:0,a=g[f];if(a===void 0)a={},g[f]=a;let m=a[e.id];if(m===void 0)m={},a[e.id]=m;let J0=m[j];if(J0===void 0)J0=G(H()),m[j]=J0;return J0}function G(b){let d=[],e=[],v=[];for(let j=0;j<Q;j++)d[j]=0,e[j]=0,v[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:d,enabledAttributes:e,attributeDivisors:v,object:b,attributes:{},index:null}}function q(b,d,e,v){let j=W.attributes,g=d.attributes,f=0,a=e.getAttributes();for(let m in a)if(a[m].location>=0){let X0=j[m],y=g[m];if(y===void 0){if(m==="instanceMatrix"&&b.instanceMatrix)y=b.instanceMatrix;if(m==="instanceColor"&&b.instanceColor)y=b.instanceColor}if(X0===void 0)return!0;if(X0.attribute!==y)return!0;if(y&&X0.data!==y.data)return!0;f++}if(W.attributesNum!==f)return!0;if(W.index!==v)return!0;return!1}function O(b,d,e,v){let j={},g=d.attributes,f=0,a=e.getAttributes();for(let m in a)if(a[m].location>=0){let X0=g[m];if(X0===void 0){if(m==="instanceMatrix"&&b.instanceMatrix)X0=b.instanceMatrix;if(m==="instanceColor"&&b.instanceColor)X0=b.instanceColor}let y={};if(y.attribute=X0,X0&&X0.data)y.data=X0.data;j[m]=y,f++}W.attributes=j,W.attributesNum=f,W.index=v}function B(){let b=W.newAttributes;for(let d=0,e=b.length;d<e;d++)b[d]=0}function R(b){E(b,0)}function E(b,d){let{newAttributes:e,enabledAttributes:v,attributeDivisors:j}=W;if(e[b]=1,v[b]===0)J.enableVertexAttribArray(b),v[b]=1;if(j[b]!==d)J.vertexAttribDivisor(b,d),j[b]=d}function D(){let{newAttributes:b,enabledAttributes:d}=W;for(let e=0,v=d.length;e<v;e++)if(d[e]!==b[e])J.disableVertexAttribArray(e),d[e]=0}function M(b,d,e,v,j,g,f){if(f===!0)J.vertexAttribIPointer(b,d,e,j,g);else J.vertexAttribPointer(b,d,e,v,j,g)}function V(b,d,e,v){B();let j=v.attributes,g=e.getAttributes(),f=d.defaultAttributeValues;for(let a in g){let m=g[a];if(m.location>=0){let J0=j[a];if(J0===void 0){if(a==="instanceMatrix"&&b.instanceMatrix)J0=b.instanceMatrix;if(a==="instanceColor"&&b.instanceColor)J0=b.instanceColor}if(J0!==void 0){let{normalized:X0,itemSize:y}=J0,o=$.get(J0);if(o===void 0)continue;let{buffer:N0,type:t,bytesPerElement:x}=o,_=t===J.INT||t===J.UNSIGNED_INT||J0.gpuType===MW;if(J0.isInterleavedBufferAttribute){let h=J0.data,u=h.stride,W0=J0.offset;if(h.isInstancedInterleavedBuffer){for(let $0=0;$0<m.locationSize;$0++)E(m.location+$0,h.meshPerAttribute);if(b.isInstancedMesh!==!0&&v._maxInstanceCount===void 0)v._maxInstanceCount=h.meshPerAttribute*h.count}else for(let $0=0;$0<m.locationSize;$0++)R(m.location+$0);J.bindBuffer(J.ARRAY_BUFFER,N0);for(let $0=0;$0<m.locationSize;$0++)M(m.location+$0,y/m.locationSize,t,X0,u*x,(W0+y/m.locationSize*$0)*x,_)}else{if(J0.isInstancedBufferAttribute){for(let h=0;h<m.locationSize;h++)E(m.location+h,J0.meshPerAttribute);if(b.isInstancedMesh!==!0&&v._maxInstanceCount===void 0)v._maxInstanceCount=J0.meshPerAttribute*J0.count}else for(let h=0;h<m.locationSize;h++)R(m.location+h);J.bindBuffer(J.ARRAY_BUFFER,N0);for(let h=0;h<m.locationSize;h++)M(m.location+h,y/m.locationSize,t,X0,y*x,y/m.locationSize*h*x,_)}}else if(f!==void 0){let X0=f[a];if(X0!==void 0)switch(X0.length){case 2:J.vertexAttrib2fv(m.location,X0);break;case 3:J.vertexAttrib3fv(m.location,X0);break;case 4:J.vertexAttrib4fv(m.location,X0);break;default:J.vertexAttrib1fv(m.location,X0)}}}}D()}function I(){P();for(let b in Z){let d=Z[b];for(let e in d){let v=d[e];for(let j in v){let g=v[j];for(let f in g)N(g[f].object),delete g[f];delete v[j]}}delete Z[b]}}function w(b){if(Z[b.id]===void 0)return;let d=Z[b.id];for(let e in d){let v=d[e];for(let j in v){let g=v[j];for(let f in g)N(g[f].object),delete g[f];delete v[j]}}delete Z[b.id]}function k(b){for(let d in Z){let e=Z[d];for(let v in e){let j=e[v];if(j[b.id]===void 0)continue;let g=j[b.id];for(let f in g)N(g[f].object),delete g[f];delete j[b.id]}}}function L(b){for(let d in Z){let e=Z[d],v=b.isInstancedMesh===!0?b.id:0,j=e[v];if(j===void 0)continue;for(let g in j){let f=j[g];for(let a in f)N(f[a].object),delete f[a];delete j[g]}if(delete e[v],Object.keys(e).length===0)delete Z[d]}}function P(){if(l(),Y=!0,W===K)return;W=K,U(W.object)}function l(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:X,reset:P,resetDefaultState:l,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfObject:L,releaseStatesOfProgram:k,initAttributes:B,enableAttribute:R,disableUnusedAttributes:D}}function sE(J,$,Q){let Z;function K(H){Z=H}function W(H,U){J.drawArrays(Z,H,U),Q.update(U,Z,1)}function Y(H,U,N){if(N===0)return;J.drawArraysInstanced(Z,H,U,N),Q.update(U,Z,N)}function X(H,U,N){if(N===0)return;$.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,U,0,N);let G=0;for(let q=0;q<N;q++)G+=U[q];Q.update(G,Z,1)}this.setMode=K,this.render=W,this.renderInstances=Y,this.renderMultiDraw=X}function iE(J,$,Q,Z){let K;function W(){if(K!==void 0)return K;if($.has("EXT_texture_filter_anisotropic")===!0){let k=$.get("EXT_texture_filter_anisotropic");K=J.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function Y(k){if(k!==y9&&Z.convert(k)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(k){let L=k===L8&&($.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float"));if(k!==k9&&k!==e9&&!L&&Z.convert(k)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(k){if(k==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";k="mediump"}if(k==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Q.precision!==void 0?Q.precision:"highp",N=H(U);if(N!==U)t0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let F=Q.logarithmicDepthBuffer===!0,G=Q.reversedDepthBuffer===!0&&$.has("EXT_clip_control");if(Q.reversedDepthBuffer===!0&&G===!1)t0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),D=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),M=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),I=J.getParameter(J.MAX_SAMPLES),w=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:G,maxTextures:q,maxVertexTextures:O,maxTextureSize:B,maxCubemapSize:R,maxAttributes:E,maxVertexUniforms:D,maxVaryings:M,maxFragmentUniforms:V,maxSamples:I,samples:w}}function oE(J){let $=this,Q=null,Z=0,K=!1,W=!1,Y=new J9,X=new NJ,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(F,G){let q=F.length!==0||G||Z!==0||K;return K=G,Z=F.length,q},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,G){Q=N(F,G,0)},this.setState=function(F,G,q){let{clippingPlanes:O,clipIntersection:B,clipShadows:R}=F,E=J.get(F);if(!K||O===null||O.length===0||W&&!R)if(W)N(null);else U();else{let D=W?0:Z,M=D*4,V=E.clippingState||null;H.value=V,V=N(O,G,M,q);for(let I=0;I!==M;++I)V[I]=Q[I];E.clippingState=V,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=D}};function U(){if(H.value!==Q)H.value=Q,H.needsUpdate=Z>0;$.numPlanes=Z,$.numIntersection=0}function N(F,G,q,O){let B=F!==null?F.length:0,R=null;if(B!==0){if(R=H.value,O!==!0||R===null){let E=q+B*4,D=G.matrixWorldInverse;if(X.getNormalMatrix(D),R===null||R.length<E)R=new Float32Array(E);for(let M=0,V=q;M!==B;++M,V+=4)Y.copy(F[M]).applyMatrix4(D,X),Y.normal.toArray(R,V),R[V+3]=Y.constant}H.value=R,H.needsUpdate=!0}return $.numPlanes=B,$.numIntersection=0,R}}var G$=4,aE=6,rE=20,tE=256,VQ=new Y7,xU=new y0,hY=null,xY=0,gY=0,pY=!1,eE=new S,H6=new S;class MQ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,$=0,Q=0.1,Z=100,K={}){let{size:W=256,position:Y=eE}=K;hY=this._renderer.getRenderTarget(),xY=this._renderer.getActiveCubeFace(),gY=this._renderer.getActiveMipmapLevel(),pY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,Q,Z,X,Y),$>0)this._blur(X,0,0,$);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,$=null){return this._fromTexture(J,$)}fromCubemap(J,$=null){return this._fromTexture(J,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=mU(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=pU(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(hY,xY,gY),this._renderer.xr.enabled=pY,J.scissorTest=!1,N$(J,0,0,J.width,J.height)}_fromTexture(J,$){if(J.mapping===r6||J.mapping===s7)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);hY=this._renderer.getRenderTarget(),xY=this._renderer.getActiveCubeFace(),gY=this._renderer.getActiveMipmapLevel(),pY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Q=$||this._allocateTargets();return this._textureToCubeUV(J,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),$=4*this._cubeSize,Q={magFilter:X8,minFilter:X8,generateMipmaps:!1,type:L8,format:y9,colorSpace:c8,depthBuffer:!1},Z=gU(J,$,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==$){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=gU(J,$,Q);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jq(K)),this._blurMaterial=Qq(K,J,$),this._ggxMaterial=$q(K,J,$)}return Z}_compileMaterial(J){let $=new I0(new bJ,J);this._renderer.compile($,VQ)}_sceneToCubeUV(J,$,Q,Z,K){let X=new G8(90,1,$,Q),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,F=N.autoClear,G=N.toneMapping;if(N.getClearColor(xU),N.toneMapping=B9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new I0(new wJ,new xJ({name:"PMREM.Background",side:D8,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,B=O.material,R=!1,E=J.background;if(E){if(E.isColor)B.color.copy(E),J.background=null,R=!0}else B.color.copy(xU),R=!0;for(let D=0;D<6;D++){let M=D%3;if(M===0)X.up.set(0,H[D],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x+U[D],K.y,K.z);else if(M===1)X.up.set(0,0,H[D]),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y+U[D],K.z);else X.up.set(0,H[D],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y,K.z+U[D]);let V=this._cubeSize;if(N$(Z,M*V,D>2?V:0,V,V),N.setRenderTarget(Z),R)N.render(O,X);N.render(J,X)}N.toneMapping=G,N.autoClear=F,J.background=E}_textureToCubeUV(J,$){let Q=this._renderer,Z=J.mapping===r6||J.mapping===s7;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=mU();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=pU();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let Y=K.uniforms;Y.envMap.value=J;let X=this._cubeSize;N$($,0,0,3*X,2*X),Q.setRenderTarget($),Q.render(W,VQ)}_applyPMREM(J){let $=this._renderer,Q=$.autoClear;$.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);$.autoClear=Q}_applyGGXFilter(J,$,Q){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,Y=this._lodMeshes[Q];Y.material=W;let X=W.uniforms,H=Q/(this._lodMeshes.length-1),U=$/(this._lodMeshes.length-1),N=Math.sqrt(H*H-U*U),F=H*1.25,G=N*F,{_lodMax:q}=this,O=this._sizeLods[Q],B=3*O*(Q>q-G$?Q-q+G$:0),R=4*(this._cubeSize-O);X.envMap.value=J.texture,X.roughness.value=G,X.mipInt.value=q-$,N$(K,B,R,3*O,2*O),Z.setRenderTarget(K),Z.render(Y,VQ),X.envMap.value=K.texture,X.roughness.value=0,X.mipInt.value=q-Q,N$(J,B,R,3*O,2*O),Z.setRenderTarget(J),Z.render(Y,VQ)}_blur(J,$,Q,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,$,Q,W),this._blurPass(K,J,Q,Q,W)}_blurPass(J,$,Q,Z,K){let W=this._renderer,Y=this._blurMaterial,X=this._lodMeshes[Z];X.material=Y;let H=Y.uniforms;H.envMap.value=J.texture,H.sigma.value=K,H.mipInt.value=this._lodMax-Q;let U=this._sizeLods[Z],N=3*U*(Z>this._lodMax-G$?Z-this._lodMax+G$:0),F=4*(this._cubeSize-U);N$($,N,F,3*U,2*U),W.setRenderTarget($),W.render(X,VQ)}}function Jq(J){let $=[],Q=[],Z=J,K=J-G$+1+aE;for(let W=0;W<K;W++){let Y=Math.pow(2,Z);$.push(Y);let X=1/(Y-2),H=-X,U=1+X,N=[H,H,U,H,U,U,H,H,U,U,H,U],F=6,G=6,q=3,O=new Float32Array(q*G*F),B=new Float32Array(q*G*F);for(let E=0;E<F;E++){let D=E%3*2/3-1,M=E>2?0:-1,V=[D,M,0,D+0.6666666666666666,M,0,D+0.6666666666666666,M+1,0,D,M,0,D+0.6666666666666666,M+1,0,D,M+1,0];O.set(V,q*G*E);for(let I=0;I<G;I++){let w=N[I*2]*2-1,k=N[I*2+1]*2-1;if(E===0)H6.set(1,k,w);else if(E===1)H6.set(-w,1,-k);else if(E===2)H6.set(-w,k,1);else if(E===3)H6.set(-1,k,-w);else if(E===4)H6.set(-w,-1,k);else H6.set(w,k,-1);H6.toArray(B,(E*G+I)*q)}}let R=new bJ;if(R.setAttribute("position",new tJ(O,q)),R.setAttribute("outputDirection",new tJ(B,q)),Q.push(new I0(R,null)),Z>G$)Z--}return{lodMeshes:Q,sizeLods:$}}function gU(J,$,Q){let Z=new Z8(J,$,Q);return Z.texture.mapping=$Q,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function N$(J,$,Q,Z,K){J.viewport.set($,Q,Z,K),J.scissor.set($,Q,Z,K)}function $q(J,$,Q){return new J8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tE,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:GK(),fragmentShader:`

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
		`,blending:Q9,depthTest:!1,depthWrite:!1})}function Qq(J,$,Q){return new J8({name:"SphericalGaussianBlur",defines:{SAMPLES:rE,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:GK(),fragmentShader:`

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
		`,blending:Q9,depthTest:!1,depthWrite:!1})}function pU(){return new J8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:GK(),fragmentShader:`

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
		`,blending:Q9,depthTest:!1,depthWrite:!1})}function mU(){return new J8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:GK(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Q9,depthTest:!1,depthWrite:!1})}function GK(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class cY extends Z8{constructor(J=1,$={}){super(J,J,$);this.isWebGLCubeRenderTarget=!0;let Q={width:J,height:J,depth:1},Z=[Q,Q,Q,Q,Q,Q];this.texture=new sZ(Z),this._setTextureOptions($),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new wJ(5,5,5),K=new J8({name:"CubemapFromEquirect",uniforms:Y6(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:D8,blending:Q9});K.uniforms.tEquirect.value=$;let W=new I0(Z,K),Y=$.minFilter;if($.minFilter===Z9)$.minFilter=X8;return new TY(1,10,this).update(J,W),$.minFilter=Y,W.geometry.dispose(),W.material.dispose(),this}clear(J,$=!0,Q=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear($,Q,Z);J.setRenderTarget(K)}}function Zq(J){let $=new WeakMap,Q=new WeakMap,Z=null;function K(G,q=!1){if(G===null||G===void 0)return null;if(q)return Y(G);return W(G)}function W(G){if(G&&G.isTexture){let q=G.mapping;if(q===AZ||q===_Z)if($.has(G)){let O=$.get(G).texture;return X(O,G.mapping)}else{let O=G.image;if(O&&O.height>0){let B=new cY(O.height);return B.fromEquirectangularTexture(J,G),$.set(G,B),G.addEventListener("dispose",U),X(B.texture,G.mapping)}else return null}}return G}function Y(G){if(G&&G.isTexture){let q=G.mapping,O=q===AZ||q===_Z,B=q===r6||q===s7;if(O||B){let R=Q.get(G),E=R!==void 0?R.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==E){if(Z===null)Z=new MQ(J);return R=O?Z.fromEquirectangular(G,R):Z.fromCubemap(G,R),R.texture.pmremVersion=G.pmremVersion,Q.set(G,R),R.texture}else if(R!==void 0)return R.texture;else{let D=G.image;if(O&&D&&D.height>0||B&&D&&H(D)){if(Z===null)Z=new MQ(J);return R=O?Z.fromEquirectangular(G):Z.fromCubemap(G),R.texture.pmremVersion=G.pmremVersion,Q.set(G,R),G.addEventListener("dispose",N),R.texture}else return null}}}return G}function X(G,q){if(q===AZ)G.mapping=r6;else if(q===_Z)G.mapping=s7;return G}function H(G){let q=0,O=6;for(let B=0;B<O;B++)if(G[B]!==void 0)q++;return q===O}function U(G){let q=G.target;q.removeEventListener("dispose",U);let O=$.get(q);if(O!==void 0)$.delete(q),O.dispose()}function N(G){let q=G.target;q.removeEventListener("dispose",N);let O=Q.get(q);if(O!==void 0)Q.delete(q),O.dispose()}function F(){if($=new WeakMap,Q=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function Kq(J){let $={};function Q(Z){if($[Z]!==void 0)return $[Z];let K=J.getExtension(Z);return $[Z]=K,K}return{has:function(Z){return Q(Z)!==null},init:function(){Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance"),Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture"),Q("WEBGL_render_shared_exponent")},get:function(Z){let K=Q(Z);if(K===null)l7("WebGLRenderer: "+Z+" extension not supported.");return K}}}function Wq(J,$,Q,Z){let K={},W=new WeakMap;function Y(F){let G=F.target;if(G.index!==null)$.remove(G.index);for(let O in G.attributes)$.remove(G.attributes[O]);G.removeEventListener("dispose",Y),delete K[G.id];let q=W.get(G);if(q)$.remove(q),W.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;Q.memory.geometries--}function X(F,G){if(K[G.id]===!0)return G;return G.addEventListener("dispose",Y),K[G.id]=!0,Q.memory.geometries++,G}function H(F){let G=F.attributes;for(let q in G)$.update(G[q],J.ARRAY_BUFFER)}function U(F){let G=[],q=F.index,O=F.attributes.position,B=0;if(O===void 0)return;if(q!==null){let D=q.array;B=q.version;for(let M=0,V=D.length;M<V;M+=3){let I=D[M+0],w=D[M+1],k=D[M+2];G.push(I,w,w,k,k,I)}}else{let D=O.array;B=O.version;for(let M=0,V=D.length/3-1;M<V;M+=3){let I=M+0,w=M+1,k=M+2;G.push(I,w,w,k,k,I)}}let R=new(O.count>=65535?uZ:lZ)(G,1);R.version=B;let E=W.get(F);if(E)$.remove(E);W.set(F,R)}function N(F){let G=W.get(F);if(G){let q=F.index;if(q!==null){if(G.version<q.version)U(F)}}else U(F);return W.get(F)}return{get:X,update:H,getWireframeAttribute:N}}function Yq(J,$,Q){let Z;function K(F){Z=F}let W,Y;function X(F){W=F.type,Y=F.bytesPerElement}function H(F,G){J.drawElements(Z,G,W,F*Y),Q.update(G,Z,1)}function U(F,G,q){if(q===0)return;J.drawElementsInstanced(Z,G,W,F*Y,q),Q.update(G,Z,q)}function N(F,G,q){if(q===0)return;$.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,W,F,0,q);let B=0;for(let R=0;R<q;R++)B+=G[R];Q.update(B,Z,1)}this.setMode=K,this.setIndex=X,this.render=H,this.renderInstances=U,this.renderMultiDraw=N}function Xq(J){let $={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,Y,X){switch(Q.calls++,Y){case J.TRIANGLES:Q.triangles+=X*(W/3);break;case J.LINES:Q.lines+=X*(W/2);break;case J.LINE_STRIP:Q.lines+=X*(W-1);break;case J.LINE_LOOP:Q.lines+=X*W;break;case J.POINTS:Q.points+=X*W;break;default:KJ("WebGLInfo: Unknown draw mode:",Y);break}}function K(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:$,render:Q,programs:null,autoReset:!0,reset:K,update:Z}}function Hq(J,$,Q){let Z=new WeakMap,K=new lJ;function W(Y,X,H){let U=Y.morphTargetInfluences,N=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,F=N!==void 0?N.length:0,G=Z.get(X);if(G===void 0||G.count!==F){let P=function(){k.dispose(),Z.delete(X),X.removeEventListener("dispose",P)};if(G!==void 0)G.texture.dispose();let q=X.morphAttributes.position!==void 0,O=X.morphAttributes.normal!==void 0,B=X.morphAttributes.color!==void 0,R=X.morphAttributes.position||[],E=X.morphAttributes.normal||[],D=X.morphAttributes.color||[],M=0;if(q===!0)M=1;if(O===!0)M=2;if(B===!0)M=3;let V=X.attributes.position.count*M,I=1;if(V>$.maxTextureSize)I=Math.ceil(V/$.maxTextureSize),V=$.maxTextureSize;let w=new Float32Array(V*I*4*F),k=new pZ(w,V,I,F);k.type=e9,k.needsUpdate=!0;let L=M*4;for(let l=0;l<F;l++){let b=R[l],d=E[l],e=D[l],v=V*I*4*l;for(let j=0;j<b.count;j++){let g=j*L;if(q===!0)K.fromBufferAttribute(b,j),w[v+g+0]=K.x,w[v+g+1]=K.y,w[v+g+2]=K.z,w[v+g+3]=0;if(O===!0)K.fromBufferAttribute(d,j),w[v+g+4]=K.x,w[v+g+5]=K.y,w[v+g+6]=K.z,w[v+g+7]=0;if(B===!0)K.fromBufferAttribute(e,j),w[v+g+8]=K.x,w[v+g+9]=K.y,w[v+g+10]=K.z,w[v+g+11]=e.itemSize===4?K.w:1}}G={count:F,texture:k,size:new R0(V,I)},Z.set(X,G),X.addEventListener("dispose",P)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",Y.morphTexture,Q);else{let q=0;for(let B=0;B<U.length;B++)q+=U[B];let O=X.morphTargetsRelative?1:1-q;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,Q),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function Uq(J,$,Q,Z,K){let W=new WeakMap;function Y(U){let N=K.render.frame,F=U.geometry,G=$.get(U,F);if(W.get(G)!==N)$.update(G),W.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==N){if(Q.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Q.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,N)}}if(U.isSkinnedMesh){let q=U.skeleton;if(W.get(q)!==N)q.update(),W.set(q,N)}return G}function X(){W=new WeakMap}function H(U){let N=U.target;if(N.removeEventListener("dispose",H),Z.releaseStatesOfObject(N),Q.remove(N.instanceMatrix),N.instanceColor!==null)Q.remove(N.instanceColor)}return{update:Y,dispose:X}}var Nq={[o$]:"LINEAR_TONE_MAPPING",[a$]:"REINHARD_TONE_MAPPING",[r$]:"CINEON_TONE_MAPPING",[n7]:"ACES_FILMIC_TONE_MAPPING",[e$]:"AGX_TONE_MAPPING",[JQ]:"NEUTRAL_TONE_MAPPING",[t$]:"CUSTOM_TONE_MAPPING"};function Gq(J,$,Q,Z,K,W){let Y=new Z8($,Q,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),X=null,H=null,U=new bJ;U.setAttribute("position",new UJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new UJ([0,2,0,0,2,0],2));let N=new EQ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),F=new I0(U,N),G=new Y7(-1,1,1,-1,0,1),q=null,O=null,B=!1,R,E=null,D=[],M=!1;this.setSize=function(V,I){if(Y.setSize(V,I),X!==null)X.setSize(V,I);if(H!==null)H.setSize(V,I);for(let w=0;w<D.length;w++){let k=D[w];if(k.setSize)k.setSize(V,I)}},this.setEffects=function(V){D=V,M=D.length>0&&D[0].isRenderPass===!0;let{width:I,height:w}=Y;if(D.length>0&&X===null)X=new Z8(I,w,{type:L8,depthBuffer:!1,stencilBuffer:!1}),H=new Z8(I,w,{type:L8,depthBuffer:!1,stencilBuffer:!1});for(let k=0;k<D.length;k++){let L=D[k];if(L.setSize)L.setSize(I,w)}},this.begin=function(V,I){if(B)return!1;if(V.toneMapping===B9&&D.length===0)return!1;if(E=I,I!==null){let{width:w,height:k}=I;if(Y.width!==w||Y.height!==k)this.setSize(w,k)}if(M===!1)V.setRenderTarget(Y);return R=V.toneMapping,V.toneMapping=B9,!0},this.hasRenderPass=function(){return M},this.end=function(V,I){V.toneMapping=R,B=!0;let w=Y,k=X;for(let L=0;L<D.length;L++){let P=D[L];if(P.enabled===!1)continue;if(P.render(V,k,w,I),P.needsSwap!==!1)w=k,k=k===X?H:X}if(q!==V.outputColorSpace||O!==V.toneMapping){if(q=V.outputColorSpace,O=V.toneMapping,N.defines={},RJ.getTransfer(q)===uJ)N.defines.SRGB_TRANSFER="";let L=Nq[O];if(L)N.defines[L]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=w.texture,V.setRenderTarget(E),V.render(F,G),E=null,B=!1},this.isCompositing=function(){return B},this.dispose=function(){if(Y.dispose(),X!==null)X.dispose();if(H!==null)H.dispose();U.dispose(),N.dispose()}}var X5=new $8,uY=new K6(1,1),H5=new pZ,U5=new EY,N5=new sZ,lU=[],uU=[],dU=new Float32Array(16),cU=new Float32Array(9),nU=new Float32Array(4);function F$(J,$,Q){let Z=J[0];if(Z<=0||Z>0)return J;let K=$*Q,W=lU[K];if(W===void 0)W=new Float32Array(K),lU[K]=W;if($!==0){Z.toArray(W,0);for(let Y=1,X=0;Y!==$;++Y)X+=Q,J[Y].toArray(W,X)}return W}function F8(J,$){if(J.length!==$.length)return!1;for(let Q=0,Z=J.length;Q<Z;Q++)if(J[Q]!==$[Q])return!1;return!0}function E8(J,$){for(let Q=0,Z=$.length;Q<Z;Q++)J[Q]=$[Q]}function FK(J,$){let Q=uU[$];if(Q===void 0)Q=new Int32Array($),uU[$]=Q;for(let Z=0;Z!==$;++Z)Q[Z]=J.allocateTextureUnit();return Q}function Fq(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1f(this.addr,$),Q[0]=$}function Eq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2f(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(F8(Q,$))return;J.uniform2fv(this.addr,$),E8(Q,$)}}function qq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3f(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else if($.r!==void 0){if(Q[0]!==$.r||Q[1]!==$.g||Q[2]!==$.b)J.uniform3f(this.addr,$.r,$.g,$.b),Q[0]=$.r,Q[1]=$.g,Q[2]=$.b}else{if(F8(Q,$))return;J.uniform3fv(this.addr,$),E8(Q,$)}}function Oq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4f(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(F8(Q,$))return;J.uniform4fv(this.addr,$),E8(Q,$)}}function Rq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(F8(Q,$))return;J.uniformMatrix2fv(this.addr,!1,$),E8(Q,$)}else{if(F8(Q,Z))return;nU.set(Z),J.uniformMatrix2fv(this.addr,!1,nU),E8(Q,Z)}}function Lq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(F8(Q,$))return;J.uniformMatrix3fv(this.addr,!1,$),E8(Q,$)}else{if(F8(Q,Z))return;cU.set(Z),J.uniformMatrix3fv(this.addr,!1,cU),E8(Q,Z)}}function Vq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(F8(Q,$))return;J.uniformMatrix4fv(this.addr,!1,$),E8(Q,$)}else{if(F8(Q,Z))return;dU.set(Z),J.uniformMatrix4fv(this.addr,!1,dU),E8(Q,Z)}}function Bq(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1i(this.addr,$),Q[0]=$}function Dq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2i(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(F8(Q,$))return;J.uniform2iv(this.addr,$),E8(Q,$)}}function kq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3i(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(F8(Q,$))return;J.uniform3iv(this.addr,$),E8(Q,$)}}function Mq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4i(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(F8(Q,$))return;J.uniform4iv(this.addr,$),E8(Q,$)}}function Cq(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1ui(this.addr,$),Q[0]=$}function Pq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2ui(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(F8(Q,$))return;J.uniform2uiv(this.addr,$),E8(Q,$)}}function Iq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3ui(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(F8(Q,$))return;J.uniform3uiv(this.addr,$),E8(Q,$)}}function zq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4ui(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(F8(Q,$))return;J.uniform4uiv(this.addr,$),E8(Q,$)}}function Aq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)uY.compareFunction=Q.isReversedDepthBuffer()?gZ:xZ,W=uY;else W=X5;Q.setTexture2D($||W,K)}function _q(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTexture3D($||U5,K)}function Tq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTextureCube($||N5,K)}function wq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTexture2DArray($||H5,K)}function Sq(J){switch(J){case 5126:return Fq;case 35664:return Eq;case 35665:return qq;case 35666:return Oq;case 35674:return Rq;case 35675:return Lq;case 35676:return Vq;case 5124:case 35670:return Bq;case 35667:case 35671:return Dq;case 35668:case 35672:return kq;case 35669:case 35673:return Mq;case 5125:return Cq;case 36294:return Pq;case 36295:return Iq;case 36296:return zq;case 35678:case 36198:case 36298:case 36306:case 35682:return Aq;case 35679:case 36299:case 36307:return _q;case 35680:case 36300:case 36308:case 36293:return Tq;case 36289:case 36303:case 36311:case 36292:return wq}}function jq(J,$){J.uniform1fv(this.addr,$)}function yq(J,$){let Q=F$($,this.size,2);J.uniform2fv(this.addr,Q)}function vq(J,$){let Q=F$($,this.size,3);J.uniform3fv(this.addr,Q)}function fq(J,$){let Q=F$($,this.size,4);J.uniform4fv(this.addr,Q)}function bq(J,$){let Q=F$($,this.size,4);J.uniformMatrix2fv(this.addr,!1,Q)}function hq(J,$){let Q=F$($,this.size,9);J.uniformMatrix3fv(this.addr,!1,Q)}function xq(J,$){let Q=F$($,this.size,16);J.uniformMatrix4fv(this.addr,!1,Q)}function gq(J,$){J.uniform1iv(this.addr,$)}function pq(J,$){J.uniform2iv(this.addr,$)}function mq(J,$){J.uniform3iv(this.addr,$)}function lq(J,$){J.uniform4iv(this.addr,$)}function uq(J,$){J.uniform1uiv(this.addr,$)}function dq(J,$){J.uniform2uiv(this.addr,$)}function cq(J,$){J.uniform3uiv(this.addr,$)}function nq(J,$){J.uniform4uiv(this.addr,$)}function sq(J,$,Q){let Z=this.cache,K=$.length,W=FK(Q,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);let Y;if(this.type===J.SAMPLER_2D_SHADOW)Y=uY;else Y=X5;for(let X=0;X!==K;++X)Q.setTexture2D($[X]||Y,W[X])}function iq(J,$,Q){let Z=this.cache,K=$.length,W=FK(Q,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);for(let Y=0;Y!==K;++Y)Q.setTexture3D($[Y]||U5,W[Y])}function oq(J,$,Q){let Z=this.cache,K=$.length,W=FK(Q,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);for(let Y=0;Y!==K;++Y)Q.setTextureCube($[Y]||N5,W[Y])}function aq(J,$,Q){let Z=this.cache,K=$.length,W=FK(Q,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);for(let Y=0;Y!==K;++Y)Q.setTexture2DArray($[Y]||H5,W[Y])}function rq(J){switch(J){case 5126:return jq;case 35664:return yq;case 35665:return vq;case 35666:return fq;case 35674:return bq;case 35675:return hq;case 35676:return xq;case 5124:case 35670:return gq;case 35667:case 35671:return pq;case 35668:case 35672:return mq;case 35669:case 35673:return lq;case 5125:return uq;case 36294:return dq;case 36295:return cq;case 36296:return nq;case 35678:case 36198:case 36298:case 36306:case 35682:return sq;case 35679:case 36299:case 36307:return iq;case 35680:case 36300:case 36308:case 36293:return oq;case 36289:case 36303:case 36311:case 36292:return aq}}class G5{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.setValue=Sq($.type)}}class F5{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.size=$.size,this.setValue=rq($.type)}}class E5{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,$,Q){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let Y=Z[K];Y.setValue(J,$[Y.id],Q)}}}var mY=/(\w+)(\])?(\[|\.)?/g;function sU(J,$){J.seq.push($),J.map[$.id]=$}function tq(J,$,Q){let Z=J.name,K=Z.length;mY.lastIndex=0;while(!0){let W=mY.exec(Z),Y=mY.lastIndex,X=W[1],H=W[2]==="]",U=W[3];if(H)X=X|0;if(U===void 0||U==="["&&Y+2===K){sU(Q,U===void 0?new G5(X,J,$):new F5(X,J,$));break}else{let F=Q.map[X];if(F===void 0)F=new E5(X),sU(Q,F);Q=F}}}class kQ{constructor(J,$){this.seq=[],this.map={};let Q=J.getProgramParameter($,J.ACTIVE_UNIFORMS);for(let W=0;W<Q;++W){let Y=J.getActiveUniform($,W),X=J.getUniformLocation($,Y.name);tq(Y,X,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,$,Q,Z){let K=this.map[$];if(K!==void 0)K.setValue(J,Q,Z)}setOptional(J,$,Q){let Z=$[Q];if(Z!==void 0)this.setValue(J,Q,Z)}static upload(J,$,Q,Z){for(let K=0,W=$.length;K!==W;++K){let Y=$[K],X=Q[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,$){let Q=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in $)Q.push(W)}return Q}}function iU(J,$,Q){let Z=J.createShader($);return J.shaderSource(Z,Q),J.compileShader(Z),Z}var eq=37297,JO=0;function $O(J,$){let Q=J.split(`
`),Z=[],K=Math.max($-6,0),W=Math.min($+6,Q.length);for(let Y=K;Y<W;Y++){let X=Y+1;Z.push(`${X===$?">":" "} ${X}: ${Q[Y]}`)}return Z.join(`
`)}var oU=new NJ;function QO(J){RJ._getMatrix(oU,RJ.workingColorSpace,J);let $=`mat3( ${oU.elements.map((Q)=>Q.toFixed(4))} )`;switch(RJ.getTransfer(J)){case XY:return[$,"LinearTransferOETF"];case uJ:return[$,"sRGBTransferOETF"];default:return t0("WebGLProgram: Unsupported color space: ",J),[$,"LinearTransferOETF"]}}function aU(J,$,Q){let Z=J.getShaderParameter($,J.COMPILE_STATUS),W=(J.getShaderInfoLog($)||"").trim();if(Z&&W==="")return"";let Y=/ERROR: 0:(\d+)/.exec(W);if(Y){let X=parseInt(Y[1]);return Q.toUpperCase()+`

`+W+`

`+$O(J.getShaderSource($),X)}else return W}function ZO(J,$){let Q=QO($);return[`vec4 ${J}( vec4 value ) {`,`	return ${Q[1]}( vec4( value.rgb * ${Q[0]}, value.a ) );`,"}"].join(`
`)}var KO={[o$]:"Linear",[a$]:"Reinhard",[r$]:"Cineon",[n7]:"ACESFilmic",[e$]:"AgX",[JQ]:"Neutral",[t$]:"Custom"};function WO(J,$){let Q=KO[$];if(Q===void 0)return t0("WebGLProgram: Unsupported toneMapping:",$),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}var NK=new S;function YO(){RJ.getLuminanceCoefficients(NK);let J=NK.x.toFixed(4),$=NK.y.toFixed(4),Q=NK.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${$}, ${Q} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function XO(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(DQ).join(`
`)}function HO(J){let $=[];for(let Q in J){let Z=J[Q];if(Z===!1)continue;$.push("#define "+Q+" "+Z)}return $.join(`
`)}function UO(J,$){let Q={},Z=J.getProgramParameter($,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib($,K),Y=W.name,X=1;if(W.type===J.FLOAT_MAT2)X=2;if(W.type===J.FLOAT_MAT3)X=3;if(W.type===J.FLOAT_MAT4)X=4;Q[Y]={type:W.type,location:J.getAttribLocation($,Y),locationSize:X}}return Q}function DQ(J){return J!==""}function rU(J,$){let Q=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,$.numSunLights).replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,$.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows)}function tU(J,$){return J.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var NO=/^[ \t]*#include +<([\w\d./]+)>/gm;function dY(J){return J.replace(NO,FO)}var GO=new Map;function FO(J,$){let Q=BJ[$];if(Q===void 0){let Z=GO.get($);if(Z!==void 0)Q=BJ[Z],t0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',$,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+$+">")}return dY(Q)}var EO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eU(J){return J.replace(EO,qO)}function qO(J,$,Q,Z){let K="";for(let W=parseInt($);W<parseInt(Q);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function J5(J){let $=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return $}var OO={[c7]:"SHADOWMAP_TYPE_PCF",[o6]:"SHADOWMAP_TYPE_VSM"};function RO(J){return OO[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var LO={[r6]:"ENVMAP_TYPE_CUBE",[s7]:"ENVMAP_TYPE_CUBE",[$Q]:"ENVMAP_TYPE_CUBE_UV"};function VO(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return LO[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var BO={[s7]:"ENVMAP_MODE_REFRACTION"};function DO(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return BO[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kO={[ZU]:"ENVMAP_BLENDING_MULTIPLY",[KU]:"ENVMAP_BLENDING_MIX",[WU]:"ENVMAP_BLENDING_ADD"};function MO(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return kO[J.combine]||"ENVMAP_BLENDING_NONE"}function CO(J){let $=J.envMapCubeUVHeight;if($===null)return null;let Q=Math.log2($)-2,Z=1/$;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:Z,maxMip:Q}}function PO(J,$,Q,Z){let K=J.getContext(),W=Q.defines,Y=Q.vertexShader,X=Q.fragmentShader,H=RO(Q),U=VO(Q),N=DO(Q),F=MO(Q),G=CO(Q),q=XO(Q),O=HO(W),B=K.createProgram(),R,E,D=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(R=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(DQ).join(`
`),R.length>0)R+=`
`;if(E=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(DQ).join(`
`),E.length>0)E+=`
`}else R=[J5(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.batchingColor?"#define USE_BATCHING_COLOR":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.instancingMorph?"#define USE_INSTANCING_MORPH":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+N:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexNormals?"#define HAS_NORMAL":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+H:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(DQ).join(`
`),E=[J5(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+U:"",Q.envMap?"#define "+N:"",Q.envMap?"#define "+F:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.dispersion?"#define USE_DISPERSION":"",Q.retroreflection?"#define USE_RETROREFLECTION":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor?"#define USE_COLOR":"",Q.vertexAlphas||Q.batchingColor?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+H:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==B9?"#define TONE_MAPPING":"",Q.toneMapping!==B9?BJ.tonemapping_pars_fragment:"",Q.toneMapping!==B9?WO("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",BJ.colorspace_pars_fragment,ZO("linearToOutputTexel",Q.outputColorSpace),YO(),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(DQ).join(`
`);if(Y=dY(Y),Y=rU(Y,Q),Y=tU(Y,Q),X=dY(X),X=rU(X,Q),X=tU(X,Q),Y=eU(Y),X=eU(X),Q.isRawShaderMaterial!==!0)D=`#version 300 es
`,R=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,E=["#define varying in",Q.glslVersion===HY?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion===HY?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let M=D+R+Y,V=D+E+X,I=iU(K,K.VERTEX_SHADER,M),w=iU(K,K.FRAGMENT_SHADER,V);if(K.attachShader(B,I),K.attachShader(B,w),Q.index0AttributeName!==void 0)K.bindAttribLocation(B,0,Q.index0AttributeName);else if(Q.hasPositionAttribute===!0)K.bindAttribLocation(B,0,"position");K.linkProgram(B);function k(b){if(J.debug.checkShaderErrors){let d=K.getProgramInfoLog(B)||"",e=K.getShaderInfoLog(I)||"",v=K.getShaderInfoLog(w)||"",j=d.trim(),g=e.trim(),f=v.trim(),a=!0,m=!0;if(K.getProgramParameter(B,K.LINK_STATUS)===!1)if(a=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,B,I,w);else{let J0=aU(K,I,"vertex"),X0=aU(K,w,"fragment");KJ("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(B,K.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+j+`
`+J0+`
`+X0)}else if(j!=="")t0("WebGLProgram: Program Info Log:",j);else if(g===""||f==="")m=!1;if(m)b.diagnostics={runnable:a,programLog:j,vertexShader:{log:g,prefix:R},fragmentShader:{log:f,prefix:E}}}K.deleteShader(I),K.deleteShader(w),L=new kQ(K,B),P=UO(K,B)}let L;this.getUniforms=function(){if(L===void 0)k(this);return L};let P;this.getAttributes=function(){if(P===void 0)k(this);return P};let l=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(l===!1)l=K.getProgramParameter(B,eq);return l},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(B),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=JO++,this.cacheKey=$,this.usedTimes=1,this.program=B,this.vertexShader=I,this.fragmentShader=w,this}var IO=0;class q5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,$,Q){let Z=this._getShaderCacheForMaterial(J);if(Z.has($)===!1)Z.add($),$.usedTimes++;if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;return this}remove(J){let $=this.materialCache.get(J);for(let Q of $)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let $=this.materialCache,Q=$.get(J);if(Q===void 0)Q=new Set,$.set(J,Q);return Q}_getShaderStage(J){let $=this.shaderCache,Q=$.get(J);if(Q===void 0)Q=new O5(J),$.set(J,Q);return Q}}class O5{constructor(J){this.id=IO++,this.code=J,this.usedTimes=0}}function zO(J){return J===r7||J===fZ||J===bZ}function AO(J,$,Q,Z,K,W){let Y=new mZ,X=new q5,H=new Set,U=[],N=new Map,F=Z.logarithmicDepthBuffer,G=Z.precision,q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(L){if(H.add(L),L===0)return"uv";return`uv${L}`}function B(L,P,l,b,d,e){let v=b.fog,j=d.geometry,g=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?b.environment:null,f=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,a=$.get(L.envMap||g,f),m=!!a&&a.mapping===$Q?a.image.height:null,J0=q[L.type];if(L.precision!==null){if(G=Z.getMaxPrecision(L.precision),G!==L.precision)t0("WebGLProgram.getParameters:",L.precision,"not supported, using",G,"instead.")}let X0=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,y=X0!==void 0?X0.length:0,o=0;if(j.morphAttributes.position!==void 0)o=1;if(j.morphAttributes.normal!==void 0)o=2;if(j.morphAttributes.color!==void 0)o=3;let N0,t,x,_;if(J0){let nJ=x9[J0];N0=nJ.vertexShader,t=nJ.fragmentShader}else{N0=L.vertexShader,t=L.fragmentShader;let nJ=X.getVertexShaderStage(L),yJ=X.getFragmentShaderStage(L);X.update(L,nJ,yJ),x=nJ.id,_=yJ.id}let h=J.getRenderTarget(),u=J.state.buffers.depth.getReversed(),W0=d.isInstancedMesh===!0,$0=d.isBatchedMesh===!0,q0=!!L.map,F0=!!L.matcap,z0=!!a,B0=!!L.aoMap,b0=!!L.lightMap,r0=!!L.bumpMap&&L.wireframe===!1,S0=!!L.normalMap,ZJ=!!L.displacementMap,HJ=!!L.emissiveMap,EJ=!!L.metalnessMap,p=!!L.roughnessMap,cJ=L.anisotropy>0,IJ=L.clearcoat>0,zJ=L.dispersion>0,T=L.retroreflectivity>0,C=L.iridescence>0,c=L.sheen>0,Z0=L.transmission>0,D0=cJ&&!!L.anisotropyMap,C0=IJ&&!!L.clearcoatMap,v0=IJ&&!!L.clearcoatNormalMap,U0=IJ&&!!L.clearcoatRoughnessMap,O0=C&&!!L.iridescenceMap,_0=C&&!!L.iridescenceThicknessMap,s0=c&&!!L.sheenColorMap,T0=c&&!!L.sheenRoughnessMap,P0=!!L.specularMap,JJ=!!L.specularColorMap,e0=!!L.specularIntensityMap,AJ=Z0&&!!L.transmissionMap,s=Z0&&!!L.thicknessMap,f0=!!L.gradientMap,G0=!!L.alphaMap,j0=L.alphaTest>0,l0=!!L.alphaHash,k0=!!L.extensions,h0=B9;if(L.toneMapped){if(h===null||h.isXRRenderTarget===!0)h0=J.toneMapping}let XJ={shaderID:J0,shaderType:L.type,shaderName:L.name,vertexShader:N0,fragmentShader:t,defines:L.defines,customVertexShaderID:x,customFragmentShaderID:_,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:G,batching:$0,batchingColor:$0&&d._colorsTexture!==null,instancing:W0,instancingColor:W0&&d.instanceColor!==null,instancingMorph:W0&&d.morphTexture!==null,outputColorSpace:h===null?J.outputColorSpace:h.isXRRenderTarget===!0?h.texture.colorSpace:RJ.workingColorSpace,alphaToCoverage:!!L.alphaToCoverage,map:q0,matcap:F0,envMap:z0,envMapMode:z0&&a.mapping,envMapCubeUVHeight:m,aoMap:B0,lightMap:b0,bumpMap:r0,normalMap:S0,displacementMap:ZJ,emissiveMap:HJ,normalMapObjectSpace:S0&&L.normalMapType===EU,normalMapTangentSpace:S0&&L.normalMapType===YY,packedNormalMap:S0&&L.normalMapType===YY&&zO(L.normalMap.format),metalnessMap:EJ,roughnessMap:p,anisotropy:cJ,anisotropyMap:D0,clearcoat:IJ,clearcoatMap:C0,clearcoatNormalMap:v0,clearcoatRoughnessMap:U0,dispersion:zJ,retroreflection:T,iridescence:C,iridescenceMap:O0,iridescenceThicknessMap:_0,sheen:c,sheenColorMap:s0,sheenRoughnessMap:T0,specularMap:P0,specularColorMap:JJ,specularIntensityMap:e0,transmission:Z0,transmissionMap:AJ,thicknessMap:s,gradientMap:f0,opaque:L.transparent===!1&&L.blending===i$&&L.alphaToCoverage===!1,alphaMap:G0,alphaTest:j0,alphaHash:l0,combine:L.combine,mapUv:q0&&O(L.map.channel),aoMapUv:B0&&O(L.aoMap.channel),lightMapUv:b0&&O(L.lightMap.channel),bumpMapUv:r0&&O(L.bumpMap.channel),normalMapUv:S0&&O(L.normalMap.channel),displacementMapUv:ZJ&&O(L.displacementMap.channel),emissiveMapUv:HJ&&O(L.emissiveMap.channel),metalnessMapUv:EJ&&O(L.metalnessMap.channel),roughnessMapUv:p&&O(L.roughnessMap.channel),anisotropyMapUv:D0&&O(L.anisotropyMap.channel),clearcoatMapUv:C0&&O(L.clearcoatMap.channel),clearcoatNormalMapUv:v0&&O(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U0&&O(L.clearcoatRoughnessMap.channel),iridescenceMapUv:O0&&O(L.iridescenceMap.channel),iridescenceThicknessMapUv:_0&&O(L.iridescenceThicknessMap.channel),sheenColorMapUv:s0&&O(L.sheenColorMap.channel),sheenRoughnessMapUv:T0&&O(L.sheenRoughnessMap.channel),specularMapUv:P0&&O(L.specularMap.channel),specularColorMapUv:JJ&&O(L.specularColorMap.channel),specularIntensityMapUv:e0&&O(L.specularIntensityMap.channel),transmissionMapUv:AJ&&O(L.transmissionMap.channel),thicknessMapUv:s&&O(L.thicknessMap.channel),alphaMapUv:G0&&O(L.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(S0||cJ),vertexNormals:!!j.attributes.normal,vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!j.attributes.uv&&(q0||G0),fog:!!v,useFog:L.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:L.wireframe===!1&&(L.flatShading===!0||j.attributes.normal===void 0&&S0===!1&&(L.isMeshLambertMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isMeshPhysicalMaterial)),sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:u,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:y,morphTextureStride:o,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:e.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:L.dithering,shadowMapEnabled:J.shadowMap.enabled&&l.length>0,shadowMapType:J.shadowMap.type,toneMapping:h0,decodeVideoTexture:q0&&L.map.isVideoTexture===!0&&RJ.getTransfer(L.map.colorSpace)===uJ,decodeVideoTextureEmissive:HJ&&L.emissiveMap.isVideoTexture===!0&&RJ.getTransfer(L.emissiveMap.colorSpace)===uJ,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===oJ,flipSided:L.side===D8,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:k0&&L.extensions.clipCullDistance===!0&&Q.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(k0&&L.extensions.multiDraw===!0||$0)&&Q.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Q.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return XJ.vertexUv1s=H.has(1),XJ.vertexUv2s=H.has(2),XJ.vertexUv3s=H.has(3),H.clear(),XJ}function R(L){let P=[];if(L.shaderID)P.push(L.shaderID);else P.push(L.customVertexShaderID),P.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let l in L.defines)P.push(l),P.push(L.defines[l]);if(L.isRawShaderMaterial===!1)E(P,L),D(P,L),P.push(J.outputColorSpace);return P.push(L.customProgramCacheKey),P.join()}function E(L,P){L.push(P.precision),L.push(P.outputColorSpace),L.push(P.envMapMode),L.push(P.envMapCubeUVHeight),L.push(P.mapUv),L.push(P.alphaMapUv),L.push(P.lightMapUv),L.push(P.aoMapUv),L.push(P.bumpMapUv),L.push(P.normalMapUv),L.push(P.displacementMapUv),L.push(P.emissiveMapUv),L.push(P.metalnessMapUv),L.push(P.roughnessMapUv),L.push(P.anisotropyMapUv),L.push(P.clearcoatMapUv),L.push(P.clearcoatNormalMapUv),L.push(P.clearcoatRoughnessMapUv),L.push(P.iridescenceMapUv),L.push(P.iridescenceThicknessMapUv),L.push(P.sheenColorMapUv),L.push(P.sheenRoughnessMapUv),L.push(P.specularMapUv),L.push(P.specularColorMapUv),L.push(P.specularIntensityMapUv),L.push(P.transmissionMapUv),L.push(P.thicknessMapUv),L.push(P.combine),L.push(P.fogExp2),L.push(P.sizeAttenuation),L.push(P.morphTargetsCount),L.push(P.morphAttributeCount),L.push(P.numSunLights),L.push(P.numDirLights),L.push(P.numPointLights),L.push(P.numSpotLights),L.push(P.numSpotLightMaps),L.push(P.numHemiLights),L.push(P.numRectAreaLights),L.push(P.numSunLightShadows),L.push(P.numDirLightShadows),L.push(P.numPointLightShadows),L.push(P.numSpotLightShadows),L.push(P.numSpotLightShadowsWithMaps),L.push(P.numLightProbes),L.push(P.shadowMapType),L.push(P.toneMapping),L.push(P.numClippingPlanes),L.push(P.numClipIntersection),L.push(P.depthPacking)}function D(L,P){if(Y.disableAll(),P.instancing)Y.enable(0);if(P.instancingColor)Y.enable(1);if(P.instancingMorph)Y.enable(2);if(P.matcap)Y.enable(3);if(P.envMap)Y.enable(4);if(P.normalMapObjectSpace)Y.enable(5);if(P.normalMapTangentSpace)Y.enable(6);if(P.clearcoat)Y.enable(7);if(P.iridescence)Y.enable(8);if(P.alphaTest)Y.enable(9);if(P.vertexColors)Y.enable(10);if(P.vertexAlphas)Y.enable(11);if(P.vertexUv1s)Y.enable(12);if(P.vertexUv2s)Y.enable(13);if(P.vertexUv3s)Y.enable(14);if(P.vertexTangents)Y.enable(15);if(P.anisotropy)Y.enable(16);if(P.alphaHash)Y.enable(17);if(P.batching)Y.enable(18);if(P.dispersion)Y.enable(19);if(P.retroreflection)Y.enable(24);if(P.batchingColor)Y.enable(20);if(P.gradientMap)Y.enable(21);if(P.packedNormalMap)Y.enable(22);if(P.vertexNormals)Y.enable(23);if(L.push(Y.mask),Y.disableAll(),P.fog)Y.enable(0);if(P.useFog)Y.enable(1);if(P.flatShading)Y.enable(2);if(P.logarithmicDepthBuffer)Y.enable(3);if(P.reversedDepthBuffer)Y.enable(4);if(P.skinning)Y.enable(5);if(P.morphTargets)Y.enable(6);if(P.morphNormals)Y.enable(7);if(P.morphColors)Y.enable(8);if(P.premultipliedAlpha)Y.enable(9);if(P.shadowMapEnabled)Y.enable(10);if(P.doubleSided)Y.enable(11);if(P.flipSided)Y.enable(12);if(P.useDepthPacking)Y.enable(13);if(P.dithering)Y.enable(14);if(P.transmission)Y.enable(15);if(P.sheen)Y.enable(16);if(P.opaque)Y.enable(17);if(P.pointsUvs)Y.enable(18);if(P.decodeVideoTexture)Y.enable(19);if(P.decodeVideoTextureEmissive)Y.enable(20);if(P.alphaToCoverage)Y.enable(21);if(P.numLightProbeGrids>0)Y.enable(22);if(P.hasPositionAttribute)Y.enable(23);L.push(Y.mask)}function M(L){let P=q[L.type],l;if(P){let b=x9[P];l=Q7.clone(b.uniforms)}else l=L.uniforms;return l}function V(L,P){let l=N.get(P);if(l!==void 0)++l.usedTimes;else l=new PO(J,P,L,K),U.push(l),N.set(P,l);return l}function I(L){if(--L.usedTimes===0){let P=U.indexOf(L);U[P]=U[U.length-1],U.pop(),N.delete(L.cacheKey),L.destroy()}}function w(L){X.remove(L)}function k(){X.dispose()}return{getParameters:B,getProgramCacheKey:R,getUniforms:M,acquireProgram:V,releaseProgram:I,releaseShaderCache:w,programs:U,dispose:k}}function _O(){let J=new WeakMap;function $(Y){return J.has(Y)}function Q(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function K(Y,X,H){J.get(Y)[X]=H}function W(){J=new WeakMap}return{has:$,get:Q,remove:Z,update:K,dispose:W}}function TO(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.material.id!==$.material.id)return J.material.id-$.material.id;else if(J.materialVariant!==$.materialVariant)return J.materialVariant-$.materialVariant;else if(J.z!==$.z)return J.z-$.z;else return J.id-$.id}function $5(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.z!==$.z)return $.z-J.z;else return J.id-$.id}function Q5(){let J=[],$=0,Q=[],Z=[],K=[];function W(){$=0,Q.length=0,Z.length=0,K.length=0}function Y(G){let q=0;if(G.isInstancedMesh)q+=2;if(G.isSkinnedMesh)q+=1;return q}function X(G,q,O,B,R,E){let D=J[$];if(D===void 0)D={id:G.id,object:G,geometry:q,material:O,materialVariant:Y(G),groupOrder:B,renderOrder:G.renderOrder,z:R,group:E},J[$]=D;else D.id=G.id,D.object=G,D.geometry=q,D.material=O,D.materialVariant=Y(G),D.groupOrder=B,D.renderOrder=G.renderOrder,D.z=R,D.group=E;return $++,D}function H(G,q,O,B,R,E,D){if(D.reversedDepth===!0)R=-R;let M=X(G,q,O,B,R,E);if(O.transmission>0)Z.push(M);else if(O.transparent===!0)K.push(M);else Q.push(M)}function U(G,q,O,B,R,E){let D=X(G,q,O,B,R,E);if(O.transmission>0)Z.unshift(D);else if(O.transparent===!0)K.unshift(D);else Q.unshift(D)}function N(G,q){if(Q.length>1)Q.sort(G||TO);if(Z.length>1)Z.sort(q||$5);if(K.length>1)K.sort(q||$5)}function F(){for(let G=$,q=J.length;G<q;G++){let O=J[G];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:Q,transmissive:Z,transparent:K,init:W,push:H,unshift:U,finish:F,sort:N}}function wO(){let J=new WeakMap;function $(Z,K){let W=J.get(Z),Y;if(W===void 0)Y=new Q5,J.set(Z,[Y]);else if(K>=W.length)Y=new Q5,W.push(Y);else Y=W[K];return Y}function Q(){J=new WeakMap}return{get:$,dispose:Q}}function SO(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"SunLight":case"DirectionalLight":Q={direction:new S,color:new y0};break;case"SpotLight":Q={position:new S,direction:new S,color:new y0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new S,color:new y0,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new S,skyColor:new y0,groundColor:new y0};break;case"RectAreaLight":Q={color:new y0,position:new S,halfWidth:new S,halfHeight:new S};break}return J[$.id]=Q,Q}}}function jO(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"SunLight":case"DirectionalLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"SpotLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"PointLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[$.id]=Q,Q}}}var yO=0;function vO(J,$){return($.castShadow?2:0)-(J.castShadow?2:0)+($.map?1:0)-(J.map?1:0)}function fO(J){let $=new SO,Q=jO(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new S);let K=new S,W=new QJ,Y=new QJ;function X(U){let N=0,F=0,G=0;for(let d=0;d<9;d++)Z.probe[d].set(0,0,0);let q=0,O=0,B=0,R=0,E=0,D=0,M=0,V=0,I=0,w=0,k=0,L=0,P=0,l=0;U.sort(vO);for(let d=0,e=U.length;d<e;d++){let v=U[d],j=v.color,g=v.intensity,f=v.distance,a=null;if(v.shadow&&v.shadow.map)if(v.shadow.map.texture.format===r7)a=v.shadow.map.texture;else a=v.shadow.map.depthTexture||v.shadow.map.texture;if(v.isAmbientLight)N+=j.r*g,F+=j.g*g,G+=j.b*g;else if(v.isLightProbe){for(let m=0;m<9;m++)Z.probe[m].addScaledVector(v.sh.coefficients[m],g);l++}else if(v.isSunLight){let m=$.get(v);if(m.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let J0=v.shadow,X0=Q.get(v);X0.shadowIntensity=J0.intensity,X0.shadowBias=J0.bias,X0.shadowNormalBias=J0.normalBias,X0.shadowRadius=J0.radius,X0.shadowMapSize.copy(J0.mapSize).multiply(J0.getFrameExtents()),Z.sunShadow[O]=X0,Z.sunShadowMap[O]=a;let y=J0.getViewportCount();for(let o=0;o<y;o++)Z.sunShadowMatrix[B+o]=J0.getMatrix(o),Z.sunShadowCascade[B+o]=J0._cascadeData[o];B+=y,O++}Z.sun[q]=m,q++}else if(v.isDirectionalLight){let m=$.get(v);if(m.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let J0=v.shadow,X0=Q.get(v);X0.shadowIntensity=J0.intensity,X0.shadowBias=J0.bias,X0.shadowNormalBias=J0.normalBias,X0.shadowRadius=J0.radius,X0.shadowMapSize=J0.mapSize,Z.directionalShadow[R]=X0,Z.directionalShadowMap[R]=a,Z.directionalShadowMatrix[R]=v.shadow.matrix,I++}Z.directional[R]=m,R++}else if(v.isSpotLight){let m=$.get(v);m.position.setFromMatrixPosition(v.matrixWorld),m.color.copy(j).multiplyScalar(g),m.distance=f,m.coneCos=Math.cos(v.angle),m.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),m.decay=v.decay,Z.spot[D]=m;let J0=v.shadow;if(v.map){if(Z.spotLightMap[L]=v.map,L++,J0.updateMatrices(v),v.castShadow)P++}if(Z.spotLightMatrix[D]=J0.matrix,v.castShadow){let X0=Q.get(v);X0.shadowIntensity=J0.intensity,X0.shadowBias=J0.bias,X0.shadowNormalBias=J0.normalBias,X0.shadowRadius=J0.radius,X0.shadowMapSize=J0.mapSize,Z.spotShadow[D]=X0,Z.spotShadowMap[D]=a,k++}D++}else if(v.isRectAreaLight){let m=$.get(v);m.color.copy(j).multiplyScalar(g),m.halfWidth.set(v.width*0.5,0,0),m.halfHeight.set(0,v.height*0.5,0),Z.rectArea[M]=m,M++}else if(v.isPointLight){let m=$.get(v);if(m.color.copy(v.color).multiplyScalar(v.intensity),m.distance=v.distance,m.decay=v.decay,v.castShadow){let J0=v.shadow,X0=Q.get(v);X0.shadowIntensity=J0.intensity,X0.shadowBias=J0.bias,X0.shadowNormalBias=J0.normalBias,X0.shadowRadius=J0.radius,X0.shadowMapSize=J0.mapSize,X0.shadowCameraNear=J0.camera.near,X0.shadowCameraFar=J0.camera.far,Z.pointShadow[E]=X0,Z.pointShadowMap[E]=a,Z.pointShadowMatrix[E]=v.shadow.matrix,w++}Z.point[E]=m,E++}else if(v.isHemisphereLight){let m=$.get(v);m.skyColor.copy(v.color).multiplyScalar(g),m.groundColor.copy(v.groundColor).multiplyScalar(g),Z.hemi[V]=m,V++}}if(M>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=m0.LTC_FLOAT_1,Z.rectAreaLTC2=m0.LTC_FLOAT_2;else Z.rectAreaLTC1=m0.LTC_HALF_1,Z.rectAreaLTC2=m0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=F,Z.ambient[2]=G;let b=Z.hash;if(b.sunLength!==q||b.directionalLength!==R||b.pointLength!==E||b.spotLength!==D||b.rectAreaLength!==M||b.hemiLength!==V||b.numSunShadows!==O||b.numDirectionalShadows!==I||b.numPointShadows!==w||b.numSpotShadows!==k||b.numSpotMaps!==L||b.numLightProbes!==l)Z.sun.length=q,Z.directional.length=R,Z.spot.length=D,Z.rectArea.length=M,Z.point.length=E,Z.hemi.length=V,Z.sunShadow.length=O,Z.sunShadowMap.length=O,Z.sunShadowMatrix.length=B,Z.sunShadowCascade.length=B,Z.directionalShadow.length=I,Z.directionalShadowMap.length=I,Z.directionalShadowMatrix.length=I,Z.pointShadow.length=w,Z.pointShadowMap.length=w,Z.pointShadowMatrix.length=w,Z.spotShadow.length=k,Z.spotShadowMap.length=k,Z.spotLightMatrix.length=k+L-P,Z.spotLightMap.length=L,Z.numSpotLightShadowsWithMaps=P,Z.numLightProbes=l,b.sunLength=q,b.directionalLength=R,b.pointLength=E,b.spotLength=D,b.rectAreaLength=M,b.hemiLength=V,b.numSunShadows=O,b.numDirectionalShadows=I,b.numPointShadows=w,b.numSpotShadows=k,b.numSpotMaps=L,b.numLightProbes=l,Z.version=yO++}function H(U,N){let F=0,G=0,q=0,O=0,B=0,R=0,E=N.matrixWorldInverse;for(let D=0,M=U.length;D<M;D++){let V=U[D];if(V.isSunLight){let I=Z.sun[F];I.direction.setFromMatrixPosition(V.matrixWorld),I.direction.transformDirection(E),F++}else if(V.isDirectionalLight){let I=Z.directional[G];I.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),I.direction.sub(K),I.direction.transformDirection(E),G++}else if(V.isSpotLight){let I=Z.spot[O];I.position.setFromMatrixPosition(V.matrixWorld),I.position.applyMatrix4(E),I.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),I.direction.sub(K),I.direction.transformDirection(E),O++}else if(V.isRectAreaLight){let I=Z.rectArea[B];I.position.setFromMatrixPosition(V.matrixWorld),I.position.applyMatrix4(E),Y.identity(),W.copy(V.matrixWorld),W.premultiply(E),Y.extractRotation(W),I.halfWidth.set(V.width*0.5,0,0),I.halfHeight.set(0,V.height*0.5,0),I.halfWidth.applyMatrix4(Y),I.halfHeight.applyMatrix4(Y),B++}else if(V.isPointLight){let I=Z.point[q];I.position.setFromMatrixPosition(V.matrixWorld),I.position.applyMatrix4(E),q++}else if(V.isHemisphereLight){let I=Z.hemi[R];I.direction.setFromMatrixPosition(V.matrixWorld),I.direction.transformDirection(E),R++}}}return{setup:X,setupView:H,state:Z}}function Z5(J){let $=new fO(J),Q=[],Z=[],K=[];function W(G){F.camera=G,Q.length=0,Z.length=0,K.length=0}function Y(G){Q.push(G)}function X(G){Z.push(G)}function H(G){K.push(G)}function U(){$.setup(Q)}function N(G){$.setupView(Q,G)}let F={lightsArray:Q,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:$,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:U,setupLightsView:N,pushLight:Y,pushShadow:X,pushLightProbeGrid:H}}function bO(J){let $=new WeakMap;function Q(K,W=0){let Y=$.get(K),X;if(Y===void 0)X=new Z5(J),$.set(K,[X]);else if(W>=Y.length)X=new Z5(J),Y.push(X);else X=Y[W];return X}function Z(){$=new WeakMap}return{get:Q,dispose:Z}}var hO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xO=`uniform sampler2D shadow_pass;
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
}`,gO=[new S(1,0,0),new S(-1,0,0),new S(0,1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1)],pO=[new S(0,-1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1),new S(0,-1,0),new S(0,-1,0)],K5=new QJ,BQ=new S,lY=new S;function mO(J,$,Q){let Z=new Q6,K=new R0,W=new R0,Y=new lJ,X=new kY,H=new MY,U={},N=Q.maxTextureSize,F={[D7]:D8,[D8]:D7,[oJ]:oJ},G=new J8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R0},radius:{value:4}},vertexShader:hO,fragmentShader:xO}),q=G.clone();q.defines.HORIZONTAL_PASS=1;let O=new bJ;O.setAttribute("position",new tJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new I0(O,G),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c7;let E=this.type;this.render=function(w,k,L){if(R.enabled===!1)return;if(R.autoUpdate===!1&&R.needsUpdate===!1)return;if(w.length===0)return;if(this.type===TH)t0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=c7;let P=J.getRenderTarget(),l=J.getActiveCubeFace(),b=J.getActiveMipmapLevel(),d=J.state;if(d.setBlending(Q9),d.buffers.depth.getReversed()===!0)d.buffers.color.setClear(0,0,0,0);else d.buffers.color.setClear(1,1,1,1);d.buffers.depth.setTest(!0),d.setScissorTest(!1);let e=E!==this.type;if(e)k.traverse(function(v){if(v.material)if(Array.isArray(v.material))v.material.forEach((j)=>j.needsUpdate=!0);else v.material.needsUpdate=!0});for(let v=0,j=w.length;v<j;v++){let g=w[v],f=g.shadow;if(f===void 0){t0("WebGLShadowMap:",g,"has no shadow.");continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;K.copy(f.mapSize);let a=f.getFrameExtents();if(K.multiply(a),W.copy(f.mapSize),K.x>N||K.y>N){if(K.x>N)W.x=Math.floor(N/a.x),K.x=W.x*a.x,f.mapSize.x=W.x;if(K.y>N)W.y=Math.floor(N/a.y),K.y=W.y*a.y,f.mapSize.y=W.y}let m=J.state.buffers.depth.getReversed();if(f.camera._reversedDepth=m,f.map===null||e===!0){if(f.map!==null){if(f.map.depthTexture!==null)f.map.depthTexture.dispose(),f.map.depthTexture=null;f.map.dispose()}if(this.type===o6){if(g.isPointLight){t0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}f.map=new Z8(K.x,K.y,{format:r7,type:L8,minFilter:X8,magFilter:X8,generateMipmaps:!1}),f.map.texture.name=g.name+".shadowMap",f.map.depthTexture=new K6(K.x,K.y,e9),f.map.depthTexture.name=g.name+".shadowMapDepth",f.map.depthTexture.format=o7,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=D9,f.map.depthTexture.magFilter=D9}else{if(g.isPointLight)f.map=new cY(K.x),f.map.depthTexture=new qY(K.x,M7);else f.map=new Z8(K.x,K.y),f.map.depthTexture=new K6(K.x,K.y,M7);if(f.map.depthTexture.name=g.name+".shadowMap",f.map.depthTexture.format=o7,this.type===c7)f.map.depthTexture.compareFunction=m?gZ:xZ,f.map.depthTexture.minFilter=X8,f.map.depthTexture.magFilter=X8;else f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=D9,f.map.depthTexture.magFilter=D9}f.camera.updateProjectionMatrix()}if(f.map.isWebGLCubeRenderTarget!==!0&&(f.map.width!==K.x||f.map.height!==K.y))f.map.setSize(K.x,K.y);let J0=f.map.isWebGLCubeRenderTarget?6:f.getViewportCount();if(g.isPointLight!==!0)f.updateMatrices(g,L);for(let X0=0;X0<J0;X0++){let y=f.getCamera(X0);if(g.isPointLight){let{camera:o,matrix:N0}=f,t=g.distance||o.far;if(t!==o.far)o.far=t,o.updateProjectionMatrix();BQ.setFromMatrixPosition(g.matrixWorld),o.position.copy(BQ),lY.copy(o.position),lY.add(gO[X0]),o.up.copy(pO[X0]),o.lookAt(lY),o.updateMatrixWorld(),N0.makeTranslation(-BQ.x,-BQ.y,-BQ.z),K5.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),f._frustum.setFromProjectionMatrix(K5,o.coordinateSystem,o.reversedDepth)}if(f.map.isWebGLCubeRenderTarget)J.setRenderTarget(f.map,X0),J.clear();else{if(X0===0)J.setRenderTarget(f.map),J.clear();let o=f.getViewport(X0);Y.set(W.x*o.x,W.y*o.y,W.x*o.z,W.y*o.w),d.viewport(Y)}Z=f.getFrustum(X0),V(k,L,y,g,this.type)}if(f.isPointLightShadow!==!0&&this.type===o6)D(f,L);f.needsUpdate=!1}E=this.type,R.needsUpdate=!1,J.setRenderTarget(P,l,b)};function D(w,k){let L=$.update(B);if(G.defines.VSM_SAMPLES!==w.blurSamples)G.defines.VSM_SAMPLES=w.blurSamples,q.defines.VSM_SAMPLES=w.blurSamples,G.needsUpdate=!0,q.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new Z8(K.x,K.y,{format:r7,type:L8});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);G.uniforms.shadow_pass.value=w.map.depthTexture,G.uniforms.resolution.value.set(w.map.width,w.map.height),G.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(k,null,L,G,B,null),q.uniforms.shadow_pass.value=w.mapPass.texture,q.uniforms.resolution.value.set(w.map.width,w.map.height),q.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(k,null,L,q,B,null)}function M(w,k,L,P){let l=null,b=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)l=b;else if(l=L.isPointLight===!0?H:X,J.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){let d=l.uuid,e=k.uuid,v=U[d];if(v===void 0)v={},U[d]=v;let j=v[e];if(j===void 0)j=l.clone(),v[e]=j,k.addEventListener("dispose",I);l=j}if(l.visible=k.visible,l.wireframe=k.wireframe,P===o6)l.side=k.shadowSide!==null?k.shadowSide:k.side;else l.side=k.shadowSide!==null?k.shadowSide:F[k.side];if(l.alphaMap=k.alphaMap,l.alphaTest=k.alphaToCoverage===!0?0.5:k.alphaTest,l.map=k.map,l.clipShadows=k.clipShadows,l.clippingPlanes=k.clippingPlanes,l.clipIntersection=k.clipIntersection,l.displacementMap=k.displacementMap,l.displacementScale=k.displacementScale,l.displacementBias=k.displacementBias,l.wireframeLinewidth=k.wireframeLinewidth,l.linewidth=k.linewidth,L.isPointLight===!0&&l.isMeshDistanceMaterial===!0){let d=J.properties.get(l);d.light=L}return l}function V(w,k,L,P,l){if(w.visible===!1)return;if(w.layers.test(k.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&l===o6)&&(!w.frustumCulled||w.intersectsFrustum(Z))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);let e=$.update(w),v=w.material;if(Array.isArray(v)){let j=e.groups;for(let g=0,f=j.length;g<f;g++){let a=j[g],m=v[a.materialIndex];if(m&&m.visible){let J0=M(w,m,P,l);w.onBeforeShadow(J,w,k,L,e,J0,a),J.renderBufferDirect(L,null,e,J0,w,a),w.onAfterShadow(J,w,k,L,e,J0,a)}}}else if(v.visible){let j=M(w,v,P,l);w.onBeforeShadow(J,w,k,L,e,j,null),J.renderBufferDirect(L,null,e,j,w,null),w.onAfterShadow(J,w,k,L,e,j,null)}}}let d=w.children;for(let e=0,v=d.length;e<v;e++)V(d[e],k,L,P,l)}function I(w){w.target.removeEventListener("dispose",I);for(let L in U){let P=U[L],l=w.target.uuid;if(l in P)P[l].dispose(),delete P[l]}}}function lO(J,$){function Q(){let s=!1,f0=new lJ,G0=null,j0=new lJ(0,0,0,0);return{setMask:function(l0){if(G0!==l0&&!s)J.colorMask(l0,l0,l0,l0),G0=l0},setLocked:function(l0){s=l0},setClear:function(l0,k0,h0,XJ,nJ){if(nJ===!0)l0*=XJ,k0*=XJ,h0*=XJ;if(f0.set(l0,k0,h0,XJ),j0.equals(f0)===!1)J.clearColor(l0,k0,h0,XJ),j0.copy(f0)},reset:function(){s=!1,G0=null,j0.set(-1,0,0,0)}}}function Z(){let s=!1,f0=!1,G0=null,j0=null,l0=null;return{setReversed:function(k0){if(f0!==k0){let h0=$.get("EXT_clip_control");if(k0)h0.clipControlEXT(h0.LOWER_LEFT_EXT,h0.ZERO_TO_ONE_EXT);else h0.clipControlEXT(h0.LOWER_LEFT_EXT,h0.NEGATIVE_ONE_TO_ONE_EXT);f0=k0;let XJ=l0;l0=null,this.setClear(XJ)}},getReversed:function(){return f0},setTest:function(k0){if(k0)h(J.DEPTH_TEST);else u(J.DEPTH_TEST)},setMask:function(k0){if(G0!==k0&&!s)J.depthMask(k0),G0=k0},setFunc:function(k0){if(f0)k0=CU[k0];if(j0!==k0){switch(k0){case aH:J.depthFunc(J.NEVER);break;case rH:J.depthFunc(J.ALWAYS);break;case tH:J.depthFunc(J.LESS);break;case kW:J.depthFunc(J.LEQUAL);break;case eH:J.depthFunc(J.EQUAL);break;case JU:J.depthFunc(J.GEQUAL);break;case $U:J.depthFunc(J.GREATER);break;case QU:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}j0=k0}},setLocked:function(k0){s=k0},setClear:function(k0){if(l0!==k0){if(l0=k0,f0)k0=1-k0;J.clearDepth(k0)}},reset:function(){s=!1,G0=null,j0=null,l0=null,f0=!1}}}function K(){let s=!1,f0=null,G0=null,j0=null,l0=null,k0=null,h0=null,XJ=null,nJ=null;return{setTest:function(yJ){if(!s)if(yJ)h(J.STENCIL_TEST);else u(J.STENCIL_TEST)},setMask:function(yJ){if(f0!==yJ&&!s)J.stencilMask(yJ),f0=yJ},setFunc:function(yJ,o8,a8){if(G0!==yJ||j0!==o8||l0!==a8)J.stencilFunc(yJ,o8,a8),G0=yJ,j0=o8,l0=a8},setOp:function(yJ,o8,a8){if(k0!==yJ||h0!==o8||XJ!==a8)J.stencilOp(yJ,o8,a8),k0=yJ,h0=o8,XJ=a8},setLocked:function(yJ){s=yJ},setClear:function(yJ){if(nJ!==yJ)J.clearStencil(yJ),nJ=yJ},reset:function(){s=!1,f0=null,G0=null,j0=null,l0=null,k0=null,h0=null,XJ=null,nJ=null}}}let W=new Q,Y=new Z,X=new K,H=new WeakMap,U=new WeakMap,N={},F={},G={},q=new WeakMap,O=[],B=null,R=!1,E=null,D=null,M=null,V=null,I=null,w=null,k=null,L=new y0(0,0,0),P=0,l=!1,b=null,d=null,e=null,v=null,j=null,g=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),f=!1,a=0,m=J.getParameter(J.VERSION);if(m.indexOf("WebGL")!==-1)a=parseFloat(/^WebGL (\d)/.exec(m)[1]),f=a>=1;else if(m.indexOf("OpenGL ES")!==-1)a=parseFloat(/^OpenGL ES (\d)/.exec(m)[1]),f=a>=2;let J0=null,X0={},y=J.getParameter(J.SCISSOR_BOX),o=J.getParameter(J.VIEWPORT),N0=new lJ().fromArray(y),t=new lJ().fromArray(o);function x(s,f0,G0,j0){let l0=new Uint8Array(4),k0=J.createTexture();J.bindTexture(s,k0),J.texParameteri(s,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(s,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let h0=0;h0<G0;h0++)if(s===J.TEXTURE_3D||s===J.TEXTURE_2D_ARRAY)J.texImage3D(f0,0,J.RGBA,1,1,j0,0,J.RGBA,J.UNSIGNED_BYTE,l0);else J.texImage2D(f0+h0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,l0);return k0}let _={};_[J.TEXTURE_2D]=x(J.TEXTURE_2D,J.TEXTURE_2D,1),_[J.TEXTURE_CUBE_MAP]=x(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),_[J.TEXTURE_2D_ARRAY]=x(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),_[J.TEXTURE_3D]=x(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),h(J.DEPTH_TEST),Y.setFunc(kW),r0(!1),S0(VW),h(J.CULL_FACE),B0(Q9);function h(s){if(N[s]!==!0)J.enable(s),N[s]=!0}function u(s){if(N[s]!==!1)J.disable(s),N[s]=!1}function W0(s,f0){if(G[s]!==f0){if(J.bindFramebuffer(s,f0),G[s]=f0,s===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=f0;if(s===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=f0;return!0}return!1}function $0(s,f0){let G0=O,j0=!1;if(s){if(G0=q.get(f0),G0===void 0)G0=[],q.set(f0,G0);let l0=s.textures;if(G0.length!==l0.length||G0[0]!==J.COLOR_ATTACHMENT0){for(let k0=0,h0=l0.length;k0<h0;k0++)G0[k0]=J.COLOR_ATTACHMENT0+k0;G0.length=l0.length,j0=!0}}else if(G0[0]!==J.BACK)G0[0]=J.BACK,j0=!0;if(j0)J.drawBuffers(G0)}function q0(s){if(B!==s)return J.useProgram(s),B=s,!0;return!1}let F0={[a6]:J.FUNC_ADD,[SH]:J.FUNC_SUBTRACT,[jH]:J.FUNC_REVERSE_SUBTRACT};F0[yH]=J.MIN,F0[vH]=J.MAX;let z0={[fH]:J.ZERO,[bH]:J.ONE,[hH]:J.SRC_COLOR,[gH]:J.SRC_ALPHA,[cH]:J.SRC_ALPHA_SATURATE,[uH]:J.DST_COLOR,[mH]:J.DST_ALPHA,[xH]:J.ONE_MINUS_SRC_COLOR,[pH]:J.ONE_MINUS_SRC_ALPHA,[dH]:J.ONE_MINUS_DST_COLOR,[lH]:J.ONE_MINUS_DST_ALPHA,[nH]:J.CONSTANT_COLOR,[sH]:J.ONE_MINUS_CONSTANT_COLOR,[iH]:J.CONSTANT_ALPHA,[oH]:J.ONE_MINUS_CONSTANT_ALPHA};function B0(s,f0,G0,j0,l0,k0,h0,XJ,nJ,yJ){if(s===Q9){if(R===!0)u(J.BLEND),R=!1;return}if(R===!1)h(J.BLEND),R=!0;if(s!==wH){if(s!==E||yJ!==l){if(D!==a6||I!==a6)J.blendEquation(J.FUNC_ADD),D=a6,I=a6;if(yJ)switch(s){case i$:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case j9:J.blendFunc(J.ONE,J.ONE);break;case BW:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case DW:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:KJ("WebGLState: Invalid blending: ",s);break}else switch(s){case i$:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case j9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case BW:KJ("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case DW:KJ("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:KJ("WebGLState: Invalid blending: ",s);break}M=null,V=null,w=null,k=null,L.set(0,0,0),P=0,E=s,l=yJ}return}if(l0=l0||f0,k0=k0||G0,h0=h0||j0,f0!==D||l0!==I)J.blendEquationSeparate(F0[f0],F0[l0]),D=f0,I=l0;if(G0!==M||j0!==V||k0!==w||h0!==k)J.blendFuncSeparate(z0[G0],z0[j0],z0[k0],z0[h0]),M=G0,V=j0,w=k0,k=h0;if(XJ.equals(L)===!1||nJ!==P)J.blendColor(XJ.r,XJ.g,XJ.b,nJ),L.copy(XJ),P=nJ;E=s,l=!1}function b0(s,f0){s.side===oJ?u(J.CULL_FACE):h(J.CULL_FACE);let G0=s.side===D8;if(f0)G0=!G0;r0(G0),s.blending===i$&&s.transparent===!1?B0(Q9):B0(s.blending,s.blendEquation,s.blendSrc,s.blendDst,s.blendEquationAlpha,s.blendSrcAlpha,s.blendDstAlpha,s.blendColor,s.blendAlpha,s.premultipliedAlpha),Y.setFunc(s.depthFunc),Y.setTest(s.depthTest),Y.setMask(s.depthWrite),W.setMask(s.colorWrite);let j0=s.stencilWrite;if(X.setTest(j0),j0)X.setMask(s.stencilWriteMask),X.setFunc(s.stencilFunc,s.stencilRef,s.stencilFuncMask),X.setOp(s.stencilFail,s.stencilZFail,s.stencilZPass);HJ(s.polygonOffset,s.polygonOffsetFactor,s.polygonOffsetUnits),s.alphaToCoverage===!0?h(J.SAMPLE_ALPHA_TO_COVERAGE):u(J.SAMPLE_ALPHA_TO_COVERAGE)}function r0(s){if(b!==s){if(s)J.frontFace(J.CW);else J.frontFace(J.CCW);b=s}}function S0(s){if(s!==AH){if(h(J.CULL_FACE),s!==d)if(s===VW)J.cullFace(J.BACK);else if(s===_H)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else u(J.CULL_FACE);d=s}function ZJ(s){if(s!==e){if(f)J.lineWidth(s);e=s}}function HJ(s,f0,G0){if(s){if(h(J.POLYGON_OFFSET_FILL),v!==f0||j!==G0){if(v=f0,j=G0,Y.getReversed())f0=-f0;J.polygonOffset(f0,G0)}}else u(J.POLYGON_OFFSET_FILL)}function EJ(s){if(s)h(J.SCISSOR_TEST);else u(J.SCISSOR_TEST)}function p(s){if(s===void 0)s=J.TEXTURE0+g-1;if(J0!==s)J.activeTexture(s),J0=s}function cJ(s,f0,G0){if(G0===void 0)if(J0===null)G0=J.TEXTURE0+g-1;else G0=J0;let j0=X0[G0];if(j0===void 0)j0={type:void 0,texture:void 0},X0[G0]=j0;if(j0.type!==s||j0.texture!==f0){if(J0!==G0)J.activeTexture(G0),J0=G0;J.bindTexture(s,f0||_[s]),j0.type=s,j0.texture=f0}}function IJ(){let s=X0[J0];if(s!==void 0&&s.type!==void 0)J.bindTexture(s.type,null),s.type=void 0,s.texture=void 0}function zJ(){try{J.compressedTexImage2D(...arguments)}catch(s){KJ("WebGLState:",s)}}function T(){try{J.compressedTexImage3D(...arguments)}catch(s){KJ("WebGLState:",s)}}function C(){try{J.texSubImage2D(...arguments)}catch(s){KJ("WebGLState:",s)}}function c(){try{J.texSubImage3D(...arguments)}catch(s){KJ("WebGLState:",s)}}function Z0(){try{J.compressedTexSubImage2D(...arguments)}catch(s){KJ("WebGLState:",s)}}function D0(){try{J.compressedTexSubImage3D(...arguments)}catch(s){KJ("WebGLState:",s)}}function C0(){try{J.texStorage2D(...arguments)}catch(s){KJ("WebGLState:",s)}}function v0(){try{J.texStorage3D(...arguments)}catch(s){KJ("WebGLState:",s)}}function U0(){try{J.texImage2D(...arguments)}catch(s){KJ("WebGLState:",s)}}function O0(){try{J.texImage3D(...arguments)}catch(s){KJ("WebGLState:",s)}}function _0(s){if(F[s]!==void 0)return F[s];else return J.getParameter(s)}function s0(s,f0){if(F[s]!==f0)J.pixelStorei(s,f0),F[s]=f0}function T0(s){if(N0.equals(s)===!1)J.scissor(s.x,s.y,s.z,s.w),N0.copy(s)}function P0(s){if(t.equals(s)===!1)J.viewport(s.x,s.y,s.z,s.w),t.copy(s)}function JJ(s,f0){let G0=U.get(f0);if(G0===void 0)G0=new WeakMap,U.set(f0,G0);let j0=G0.get(s);if(j0===void 0)j0=J.getUniformBlockIndex(f0,s.name),G0.set(s,j0)}function e0(s,f0){let j0=U.get(f0).get(s);if(H.get(f0)!==j0)J.uniformBlockBinding(f0,j0,s.__bindingPointIndex),H.set(f0,j0)}function AJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},F={},J0=null,X0={},G={},q=new WeakMap,O=[],B=null,R=!1,E=null,D=null,M=null,V=null,I=null,w=null,k=null,L=new y0(0,0,0),P=0,l=!1,b=null,d=null,e=null,v=null,j=null,N0.set(0,0,J.canvas.width,J.canvas.height),t.set(0,0,J.canvas.width,J.canvas.height),W.reset(),Y.reset(),X.reset()}return{buffers:{color:W,depth:Y,stencil:X},enable:h,disable:u,bindFramebuffer:W0,drawBuffers:$0,useProgram:q0,setBlending:B0,setMaterial:b0,setFlipSided:r0,setCullFace:S0,setLineWidth:ZJ,setPolygonOffset:HJ,setScissorTest:EJ,activeTexture:p,bindTexture:cJ,unbindTexture:IJ,compressedTexImage2D:zJ,compressedTexImage3D:T,texImage2D:U0,texImage3D:O0,pixelStorei:s0,getParameter:_0,updateUBOMapping:JJ,uniformBlockBinding:e0,texStorage2D:C0,texStorage3D:v0,texSubImage2D:C,texSubImage3D:c,compressedTexSubImage2D:Z0,compressedTexSubImage3D:D0,scissor:T0,viewport:P0,reset:AJ}}function uO(J,$,Q,Z,K,W,Y){let X=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new R0,N=new WeakMap,F=new Set,G,q=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function B(T,C){return O?new OffscreenCanvas(T,C):c6("canvas")}function R(T,C,c){let Z0=1,D0=zJ(T);if(D0.width>c||D0.height>c)Z0=c/Math.max(D0.width,D0.height);if(Z0<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let C0=Math.floor(Z0*D0.width),v0=Math.floor(Z0*D0.height);if(G===void 0)G=B(C0,v0);let U0=C?B(C0,v0):G;return U0.width=C0,U0.height=v0,U0.getContext("2d").drawImage(T,0,0,C0,v0),t0("WebGLRenderer: Texture has been resized from ("+D0.width+"x"+D0.height+") to ("+C0+"x"+v0+")."),U0}else{if("data"in T)t0("WebGLRenderer: Image in DataTexture is too big ("+D0.width+"x"+D0.height+").");return T}return T}function E(T){return T.generateMipmaps}function D(T){J.generateMipmap(T)}function M(T){if(T.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(T.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(T,C,c,Z0,D0,C0=!1){if(T!==null){if(J[T]!==void 0)return J[T];t0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let v0;if(Z0){if(v0=$.get("EXT_texture_norm16"),!v0)t0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let U0=C;if(C===J.RED){if(c===J.FLOAT)U0=J.R32F;if(c===J.HALF_FLOAT)U0=J.R16F;if(c===J.UNSIGNED_BYTE)U0=J.R8;if(c===J.UNSIGNED_SHORT&&v0)U0=v0.R16_EXT;if(c===J.SHORT&&v0)U0=v0.R16_SNORM_EXT}if(C===J.RED_INTEGER){if(c===J.UNSIGNED_BYTE)U0=J.R8UI;if(c===J.UNSIGNED_SHORT)U0=J.R16UI;if(c===J.UNSIGNED_INT)U0=J.R32UI;if(c===J.BYTE)U0=J.R8I;if(c===J.SHORT)U0=J.R16I;if(c===J.INT)U0=J.R32I}if(C===J.RG){if(c===J.FLOAT)U0=J.RG32F;if(c===J.HALF_FLOAT)U0=J.RG16F;if(c===J.UNSIGNED_BYTE)U0=J.RG8;if(c===J.UNSIGNED_SHORT&&v0)U0=v0.RG16_EXT;if(c===J.SHORT&&v0)U0=v0.RG16_SNORM_EXT}if(C===J.RG_INTEGER){if(c===J.UNSIGNED_BYTE)U0=J.RG8UI;if(c===J.UNSIGNED_SHORT)U0=J.RG16UI;if(c===J.UNSIGNED_INT)U0=J.RG32UI;if(c===J.BYTE)U0=J.RG8I;if(c===J.SHORT)U0=J.RG16I;if(c===J.INT)U0=J.RG32I}if(C===J.RGB_INTEGER){if(c===J.UNSIGNED_BYTE)U0=J.RGB8UI;if(c===J.UNSIGNED_SHORT)U0=J.RGB16UI;if(c===J.UNSIGNED_INT)U0=J.RGB32UI;if(c===J.BYTE)U0=J.RGB8I;if(c===J.SHORT)U0=J.RGB16I;if(c===J.INT)U0=J.RGB32I}if(C===J.RGBA_INTEGER){if(c===J.UNSIGNED_BYTE)U0=J.RGBA8UI;if(c===J.UNSIGNED_SHORT)U0=J.RGBA16UI;if(c===J.UNSIGNED_INT)U0=J.RGBA32UI;if(c===J.BYTE)U0=J.RGBA8I;if(c===J.SHORT)U0=J.RGBA16I;if(c===J.INT)U0=J.RGBA32I}if(C===J.RGB){if(c===J.UNSIGNED_SHORT&&v0)U0=v0.RGB16_EXT;if(c===J.SHORT&&v0)U0=v0.RGB16_SNORM_EXT;if(c===J.UNSIGNED_INT_5_9_9_9_REV)U0=J.RGB9_E5;if(c===J.UNSIGNED_INT_10F_11F_11F_REV)U0=J.R11F_G11F_B10F}if(C===J.RGBA){let O0=C0?XY:RJ.getTransfer(D0);if(c===J.FLOAT)U0=J.RGBA32F;if(c===J.HALF_FLOAT)U0=J.RGBA16F;if(c===J.UNSIGNED_BYTE)U0=O0===uJ?J.SRGB8_ALPHA8:J.RGBA8;if(c===J.UNSIGNED_SHORT&&v0)U0=v0.RGBA16_EXT;if(c===J.SHORT&&v0)U0=v0.RGBA16_SNORM_EXT;if(c===J.UNSIGNED_SHORT_4_4_4_4)U0=J.RGBA4;if(c===J.UNSIGNED_SHORT_5_5_5_1)U0=J.RGB5_A1}if(U0===J.R16F||U0===J.R32F||U0===J.RG16F||U0===J.RG32F||U0===J.RGBA16F||U0===J.RGBA32F)$.get("EXT_color_buffer_float");return U0}function I(T,C){let c;if(T){if(C===null||C===M7||C===J$)c=J.DEPTH24_STENCIL8;else if(C===e9)c=J.DEPTH32F_STENCIL8;else if(C===QQ)c=J.DEPTH24_STENCIL8,t0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(C===null||C===M7||C===J$)c=J.DEPTH_COMPONENT24;else if(C===e9)c=J.DEPTH_COMPONENT32F;else if(C===QQ)c=J.DEPTH_COMPONENT16;return c}function w(T,C){if(E(T)===!0||T.isFramebufferTexture&&T.minFilter!==D9&&T.minFilter!==X8)return Math.log2(Math.max(C.width,C.height))+1;else if(T.mipmaps!==void 0&&T.mipmaps.length>0)return T.mipmaps.length;else if(T.isCompressedTexture&&Array.isArray(T.image))return C.mipmaps.length;else return 1}function k(T){let C=T.target;if(C.removeEventListener("dispose",k),P(C),C.isVideoTexture)N.delete(C);if(C.isHTMLTexture)F.delete(C)}function L(T){let C=T.target;C.removeEventListener("dispose",L),b(C)}function P(T){let C=Z.get(T);if(C.__webglInit===void 0)return;let c=T.source,Z0=q.get(c);if(Z0){let D0=Z0[C.__cacheKey];if(D0.usedTimes--,D0.usedTimes===0)l(T);if(Object.keys(Z0).length===0)q.delete(c)}Z.remove(T)}function l(T){let C=Z.get(T);J.deleteTexture(C.__webglTexture);let c=T.source,Z0=q.get(c);delete Z0[C.__cacheKey],Y.memory.textures--}function b(T){let C=Z.get(T);if(T.depthTexture)T.depthTexture.dispose(),Z.remove(T.depthTexture);if(T.isWebGLCubeRenderTarget)for(let Z0=0;Z0<6;Z0++){if(Array.isArray(C.__webglFramebuffer[Z0]))for(let D0=0;D0<C.__webglFramebuffer[Z0].length;D0++)J.deleteFramebuffer(C.__webglFramebuffer[Z0][D0]);else J.deleteFramebuffer(C.__webglFramebuffer[Z0]);if(C.__webglDepthbuffer)J.deleteRenderbuffer(C.__webglDepthbuffer[Z0])}else{if(Array.isArray(C.__webglFramebuffer))for(let Z0=0;Z0<C.__webglFramebuffer.length;Z0++)J.deleteFramebuffer(C.__webglFramebuffer[Z0]);else J.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer)J.deleteRenderbuffer(C.__webglDepthbuffer);if(C.__webglMultisampledFramebuffer)J.deleteFramebuffer(C.__webglMultisampledFramebuffer);if(C.__webglColorRenderbuffer){for(let Z0=0;Z0<C.__webglColorRenderbuffer.length;Z0++)if(C.__webglColorRenderbuffer[Z0])J.deleteRenderbuffer(C.__webglColorRenderbuffer[Z0])}if(C.__webglDepthRenderbuffer)J.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let c=T.textures;for(let Z0=0,D0=c.length;Z0<D0;Z0++){let C0=Z.get(c[Z0]);if(C0.__webglTexture)J.deleteTexture(C0.__webglTexture),Y.memory.textures--;Z.remove(c[Z0])}Z.remove(T)}let d=0;function e(){d=0}function v(){return d}function j(T){d=T}function g(){let T=d;if(T>=K.maxTextures)t0("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+K.maxTextures);return d+=1,T}function f(T){let C=[];return C.push(T.wrapS),C.push(T.wrapT),C.push(T.wrapR||0),C.push(T.magFilter),C.push(T.minFilter),C.push(T.anisotropy),C.push(T.internalFormat),C.push(T.format),C.push(T.type),C.push(T.generateMipmaps),C.push(T.premultiplyAlpha),C.push(T.flipY),C.push(T.unpackAlignment),C.push(T.colorSpace),C.join()}function a(T,C){let c=Z.get(T);if(T.isVideoTexture)cJ(T);if(T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&c.__version!==T.version){let Z0=T.image;if(Z0===null)t0("WebGLRenderer: Texture marked for update but no image data found.");else if(Z0.complete===!1)t0("WebGLRenderer: Texture marked for update but image is incomplete");else{u(c,T,C);return}}else if(T.isExternalTexture)c.__webglTexture=T.sourceTexture?T.sourceTexture:null;Q.bindTexture(J.TEXTURE_2D,c.__webglTexture,J.TEXTURE0+C)}function m(T,C){let c=Z.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&c.__version!==T.version){u(c,T,C);return}else if(T.isExternalTexture)c.__webglTexture=T.sourceTexture?T.sourceTexture:null;Q.bindTexture(J.TEXTURE_2D_ARRAY,c.__webglTexture,J.TEXTURE0+C)}function J0(T,C){let c=Z.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&c.__version!==T.version){u(c,T,C);return}Q.bindTexture(J.TEXTURE_3D,c.__webglTexture,J.TEXTURE0+C)}function X0(T,C){let c=Z.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&c.__version!==T.version){W0(c,T,C);return}Q.bindTexture(J.TEXTURE_CUBE_MAP,c.__webglTexture,J.TEXTURE0+C)}let y={[k7]:J.REPEAT,[t6]:J.CLAMP_TO_EDGE,[TZ]:J.MIRRORED_REPEAT},o={[D9]:J.NEAREST,[wZ]:J.NEAREST_MIPMAP_NEAREST,[i7]:J.NEAREST_MIPMAP_LINEAR,[X8]:J.LINEAR,[e6]:J.LINEAR_MIPMAP_NEAREST,[Z9]:J.LINEAR_MIPMAP_LINEAR},N0={[qU]:J.NEVER,[BU]:J.ALWAYS,[OU]:J.LESS,[xZ]:J.LEQUAL,[RU]:J.EQUAL,[gZ]:J.GEQUAL,[LU]:J.GREATER,[VU]:J.NOTEQUAL};function t(T,C){if(C.type===e9&&$.has("OES_texture_float_linear")===!1&&(C.magFilter===X8||C.magFilter===e6||C.magFilter===i7||C.magFilter===Z9||C.minFilter===X8||C.minFilter===e6||C.minFilter===i7||C.minFilter===Z9))t0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(T,J.TEXTURE_WRAP_S,y[C.wrapS]),J.texParameteri(T,J.TEXTURE_WRAP_T,y[C.wrapT]),T===J.TEXTURE_3D||T===J.TEXTURE_2D_ARRAY)J.texParameteri(T,J.TEXTURE_WRAP_R,y[C.wrapR]);if(J.texParameteri(T,J.TEXTURE_MAG_FILTER,o[C.magFilter]),J.texParameteri(T,J.TEXTURE_MIN_FILTER,o[C.minFilter]),C.compareFunction)J.texParameteri(T,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(T,J.TEXTURE_COMPARE_FUNC,N0[C.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===D9)return;if(C.minFilter!==i7&&C.minFilter!==Z9)return;if(C.type===e9&&$.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||Z.get(C).__currentAnisotropy){let c=$.get("EXT_texture_filter_anisotropic");J.texParameterf(T,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,K.getMaxAnisotropy())),Z.get(C).__currentAnisotropy=C.anisotropy}}}function x(T,C){let c=!1;if(T.__webglInit===void 0)T.__webglInit=!0,C.addEventListener("dispose",k);let Z0=C.source,D0=q.get(Z0);if(D0===void 0)D0={},q.set(Z0,D0);let C0=f(C);if(C0!==T.__cacheKey){if(D0[C0]===void 0)D0[C0]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,c=!0;D0[C0].usedTimes++;let v0=D0[T.__cacheKey];if(v0!==void 0){if(D0[T.__cacheKey].usedTimes--,v0.usedTimes===0)l(C)}T.__cacheKey=C0,T.__webglTexture=D0[C0].texture}return c}function _(T,C,c){return Math.floor(Math.floor(T/c)/C)}function h(T,C,c,Z0){let C0=T.updateRanges;if(C0.length===0)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,C.width,C.height,c,Z0,C.data);else{C0.sort((s0,T0)=>s0.start-T0.start);let v0=0;for(let s0=1;s0<C0.length;s0++){let T0=C0[v0],P0=C0[s0],JJ=T0.start+T0.count,e0=_(P0.start,C.width,4),AJ=_(T0.start,C.width,4);if(P0.start<=JJ+1&&e0===AJ&&_(P0.start+P0.count-1,C.width,4)===e0)T0.count=Math.max(T0.count,P0.start+P0.count-T0.start);else++v0,C0[v0]=P0}C0.length=v0+1;let U0=Q.getParameter(J.UNPACK_ROW_LENGTH),O0=Q.getParameter(J.UNPACK_SKIP_PIXELS),_0=Q.getParameter(J.UNPACK_SKIP_ROWS);Q.pixelStorei(J.UNPACK_ROW_LENGTH,C.width);for(let s0=0,T0=C0.length;s0<T0;s0++){let P0=C0[s0],JJ=Math.floor(P0.start/4),e0=Math.ceil(P0.count/4),AJ=JJ%C.width,s=Math.floor(JJ/C.width),f0=e0,G0=1;Q.pixelStorei(J.UNPACK_SKIP_PIXELS,AJ),Q.pixelStorei(J.UNPACK_SKIP_ROWS,s),Q.texSubImage2D(J.TEXTURE_2D,0,AJ,s,f0,1,c,Z0,C.data)}T.clearUpdateRanges(),Q.pixelStorei(J.UNPACK_ROW_LENGTH,U0),Q.pixelStorei(J.UNPACK_SKIP_PIXELS,O0),Q.pixelStorei(J.UNPACK_SKIP_ROWS,_0)}}function u(T,C,c){let Z0=J.TEXTURE_2D;if(C.isDataArrayTexture||C.isCompressedArrayTexture)Z0=J.TEXTURE_2D_ARRAY;if(C.isData3DTexture)Z0=J.TEXTURE_3D;let D0=x(T,C),C0=C.source;Q.bindTexture(Z0,T.__webglTexture,J.TEXTURE0+c);let v0=Z.get(C0);if(C0.version!==v0.__version||D0===!0){if(Q.activeTexture(J.TEXTURE0+c),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){let G0=RJ.getPrimaries(RJ.workingColorSpace),j0=C.colorSpace===t7?null:RJ.getPrimaries(C.colorSpace),l0=C.colorSpace===t7||G0===j0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,C.flipY),Q.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),Q.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,l0)}Q.pixelStorei(J.UNPACK_ALIGNMENT,C.unpackAlignment);let O0=R(C.image,!1,K.maxTextureSize);O0=IJ(C,O0);let _0=W.convert(C.format,C.colorSpace),s0=W.convert(C.type),T0=V(C.internalFormat,_0,s0,C.normalized,C.colorSpace,C.isVideoTexture);t(Z0,C);let P0,JJ=C.mipmaps,e0=C.isVideoTexture!==!0,AJ=v0.__version===void 0||D0===!0,s=C0.dataReady,f0=w(C,O0);if(C.isDepthTexture){if(T0=I(C.format===a7,C.type),AJ)if(e0)Q.texStorage2D(J.TEXTURE_2D,1,T0,O0.width,O0.height);else Q.texImage2D(J.TEXTURE_2D,0,T0,O0.width,O0.height,0,_0,s0,null)}else if(C.isDataTexture)if(JJ.length>0){if(e0&&AJ)Q.texStorage2D(J.TEXTURE_2D,f0,T0,JJ[0].width,JJ[0].height);for(let G0=0,j0=JJ.length;G0<j0;G0++)if(P0=JJ[G0],e0){if(s)Q.texSubImage2D(J.TEXTURE_2D,G0,0,0,P0.width,P0.height,_0,s0,P0.data)}else Q.texImage2D(J.TEXTURE_2D,G0,T0,P0.width,P0.height,0,_0,s0,P0.data);C.generateMipmaps=!1}else if(e0){if(AJ)Q.texStorage2D(J.TEXTURE_2D,f0,T0,O0.width,O0.height);if(s)h(C,O0,_0,s0)}else Q.texImage2D(J.TEXTURE_2D,0,T0,O0.width,O0.height,0,_0,s0,O0.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){if(e0&&AJ)Q.texStorage3D(J.TEXTURE_2D_ARRAY,f0,T0,JJ[0].width,JJ[0].height,O0.depth);for(let G0=0,j0=JJ.length;G0<j0;G0++)if(P0=JJ[G0],C.format!==y9)if(_0!==null)if(e0){if(s)if(C.layerUpdates.size>0){let l0=bY(P0.width,P0.height,C.format,C.type);for(let k0 of C.layerUpdates){let h0=P0.data.subarray(k0*l0/P0.data.BYTES_PER_ELEMENT,(k0+1)*l0/P0.data.BYTES_PER_ELEMENT);Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,G0,0,0,k0,P0.width,P0.height,1,_0,h0)}}else Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,G0,0,0,0,P0.width,P0.height,O0.depth,_0,P0.data)}else Q.compressedTexImage3D(J.TEXTURE_2D_ARRAY,G0,T0,P0.width,P0.height,O0.depth,0,P0.data,0,0);else t0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(e0){if(s)Q.texSubImage3D(J.TEXTURE_2D_ARRAY,G0,0,0,0,P0.width,P0.height,O0.depth,_0,s0,P0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,G0,T0,P0.width,P0.height,O0.depth,0,_0,s0,P0.data);if(C.layerUpdates.size>0)C.clearLayerUpdates()}else{if(e0&&AJ)Q.texStorage2D(J.TEXTURE_2D,f0,T0,JJ[0].width,JJ[0].height);for(let G0=0,j0=JJ.length;G0<j0;G0++)if(P0=JJ[G0],C.format!==y9)if(_0!==null)if(e0){if(s)Q.compressedTexSubImage2D(J.TEXTURE_2D,G0,0,0,P0.width,P0.height,_0,P0.data)}else Q.compressedTexImage2D(J.TEXTURE_2D,G0,T0,P0.width,P0.height,0,P0.data);else t0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(e0){if(s)Q.texSubImage2D(J.TEXTURE_2D,G0,0,0,P0.width,P0.height,_0,s0,P0.data)}else Q.texImage2D(J.TEXTURE_2D,G0,T0,P0.width,P0.height,0,_0,s0,P0.data)}else if(C.isDataArrayTexture)if(e0){if(AJ)Q.texStorage3D(J.TEXTURE_2D_ARRAY,f0,T0,O0.width,O0.height,O0.depth);if(s)if(C.layerUpdates.size>0){let G0=bY(O0.width,O0.height,C.format,C.type);for(let j0 of C.layerUpdates){let l0=O0.data.subarray(j0*G0/O0.data.BYTES_PER_ELEMENT,(j0+1)*G0/O0.data.BYTES_PER_ELEMENT);Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,j0,O0.width,O0.height,1,_0,s0,l0)}C.clearLayerUpdates()}else Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,O0.width,O0.height,O0.depth,_0,s0,O0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,0,T0,O0.width,O0.height,O0.depth,0,_0,s0,O0.data);else if(C.isData3DTexture)if(e0){if(AJ)Q.texStorage3D(J.TEXTURE_3D,f0,T0,O0.width,O0.height,O0.depth);if(s)Q.texSubImage3D(J.TEXTURE_3D,0,0,0,0,O0.width,O0.height,O0.depth,_0,s0,O0.data)}else Q.texImage3D(J.TEXTURE_3D,0,T0,O0.width,O0.height,O0.depth,0,_0,s0,O0.data);else if(C.isFramebufferTexture){if(AJ)if(e0)Q.texStorage2D(J.TEXTURE_2D,f0,T0,O0.width,O0.height);else{let{width:G0,height:j0}=O0;for(let l0=0;l0<f0;l0++)Q.texImage2D(J.TEXTURE_2D,l0,T0,G0,j0,0,_0,s0,null),G0>>=1,j0>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in J){let G0=J.canvas;if(!G0.hasAttribute("layoutsubtree"))G0.setAttribute("layoutsubtree","true");if(O0.parentNode!==G0){G0.appendChild(O0),F.add(C),G0.onpaint=(j0)=>{let l0=j0.changedElements;for(let k0 of F)if(l0.includes(k0.image))k0.needsUpdate=!0},G0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,O0);else{let{RGBA:l0,RGBA:k0,UNSIGNED_BYTE:h0}=J;J.texElementImage2D(J.TEXTURE_2D,0,l0,k0,h0,O0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(JJ.length>0){if(e0&&AJ){let G0=zJ(JJ[0]);Q.texStorage2D(J.TEXTURE_2D,f0,T0,G0.width,G0.height)}for(let G0=0,j0=JJ.length;G0<j0;G0++)if(P0=JJ[G0],e0){if(s)Q.texSubImage2D(J.TEXTURE_2D,G0,0,0,_0,s0,P0)}else Q.texImage2D(J.TEXTURE_2D,G0,T0,_0,s0,P0);C.generateMipmaps=!1}else if(e0){if(AJ){let G0=zJ(O0);Q.texStorage2D(J.TEXTURE_2D,f0,T0,G0.width,G0.height)}if(s)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,_0,s0,O0)}else Q.texImage2D(J.TEXTURE_2D,0,T0,_0,s0,O0);if(E(C))D(Z0);if(v0.__version=C0.version,C.onUpdate)C.onUpdate(C)}T.__version=C.version}function W0(T,C,c){if(C.image.length!==6)return;let Z0=x(T,C),D0=C.source;Q.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+c);let C0=Z.get(D0);if(D0.version!==C0.__version||Z0===!0){Q.activeTexture(J.TEXTURE0+c);let v0=RJ.getPrimaries(RJ.workingColorSpace),U0=C.colorSpace===t7?null:RJ.getPrimaries(C.colorSpace),O0=C.colorSpace===t7||v0===U0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,C.flipY),Q.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),Q.pixelStorei(J.UNPACK_ALIGNMENT,C.unpackAlignment),Q.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,O0);let _0=C.isCompressedTexture||C.image[0].isCompressedTexture,s0=C.image[0]&&C.image[0].isDataTexture,T0=[];for(let k0=0;k0<6;k0++){if(!_0&&!s0)T0[k0]=R(C.image[k0],!0,K.maxCubemapSize);else T0[k0]=s0?C.image[k0].image:C.image[k0];T0[k0]=IJ(C,T0[k0])}let P0=T0[0],JJ=W.convert(C.format,C.colorSpace),e0=W.convert(C.type),AJ=V(C.internalFormat,JJ,e0,C.normalized,C.colorSpace),s=C.isVideoTexture!==!0,f0=C0.__version===void 0||Z0===!0,G0=D0.dataReady,j0=w(C,P0);t(J.TEXTURE_CUBE_MAP,C);let l0;if(_0){if(s&&f0)Q.texStorage2D(J.TEXTURE_CUBE_MAP,j0,AJ,P0.width,P0.height);for(let k0=0;k0<6;k0++){l0=T0[k0].mipmaps;for(let h0=0;h0<l0.length;h0++){let XJ=l0[h0];if(C.format!==y9)if(JJ!==null)if(s){if(G0)Q.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,h0,0,0,XJ.width,XJ.height,JJ,XJ.data)}else Q.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,h0,AJ,XJ.width,XJ.height,0,XJ.data);else t0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(s){if(G0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,h0,0,0,XJ.width,XJ.height,JJ,e0,XJ.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,h0,AJ,XJ.width,XJ.height,0,JJ,e0,XJ.data)}}}else{if(l0=C.mipmaps,s&&f0){if(l0.length>0)j0++;let k0=zJ(T0[0]);Q.texStorage2D(J.TEXTURE_CUBE_MAP,j0,AJ,k0.width,k0.height)}for(let k0=0;k0<6;k0++)if(s0){if(s){if(G0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,0,0,0,T0[k0].width,T0[k0].height,JJ,e0,T0[k0].data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,0,AJ,T0[k0].width,T0[k0].height,0,JJ,e0,T0[k0].data);for(let h0=0;h0<l0.length;h0++){let nJ=l0[h0].image[k0].image;if(s){if(G0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,h0+1,0,0,nJ.width,nJ.height,JJ,e0,nJ.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,h0+1,AJ,nJ.width,nJ.height,0,JJ,e0,nJ.data)}}else{if(s){if(G0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,0,0,0,JJ,e0,T0[k0])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,0,AJ,JJ,e0,T0[k0]);for(let h0=0;h0<l0.length;h0++){let XJ=l0[h0];if(s){if(G0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,h0+1,0,0,JJ,e0,XJ.image[k0])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,h0+1,AJ,JJ,e0,XJ.image[k0])}}}if(E(C))D(J.TEXTURE_CUBE_MAP);if(C0.__version=D0.version,C.onUpdate)C.onUpdate(C)}T.__version=C.version}function $0(T,C,c,Z0,D0,C0){let v0=W.convert(c.format,c.colorSpace),U0=W.convert(c.type),O0=V(c.internalFormat,v0,U0,c.normalized,c.colorSpace),_0=Z.get(C),s0=Z.get(c);if(s0.__renderTarget=C,!_0.__hasExternalTextures){let T0=Math.max(1,C.width>>C0),P0=Math.max(1,C.height>>C0);if(D0===J.TEXTURE_3D||D0===J.TEXTURE_2D_ARRAY)Q.texImage3D(D0,C0,O0,T0,P0,C.depth,0,v0,U0,null);else Q.texImage2D(D0,C0,O0,T0,P0,0,v0,U0,null)}if(Q.bindFramebuffer(J.FRAMEBUFFER,T),p(C))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Z0,D0,s0.__webglTexture,0,EJ(C));else if(D0===J.TEXTURE_2D||D0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&D0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,Z0,D0,s0.__webglTexture,C0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function q0(T,C,c){if(J.bindRenderbuffer(J.RENDERBUFFER,T),C.depthBuffer){let Z0=C.depthTexture,D0=Z0&&Z0.isDepthTexture?Z0.type:null,C0=I(C.stencilBuffer,D0),v0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(p(C))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,EJ(C),C0,C.width,C.height);else if(c)J.renderbufferStorageMultisample(J.RENDERBUFFER,EJ(C),C0,C.width,C.height);else J.renderbufferStorage(J.RENDERBUFFER,C0,C.width,C.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,v0,J.RENDERBUFFER,T)}else{let Z0=C.textures;for(let D0=0;D0<Z0.length;D0++){let C0=Z0[D0],v0=W.convert(C0.format,C0.colorSpace),U0=W.convert(C0.type),O0=V(C0.internalFormat,v0,U0,C0.normalized,C0.colorSpace);if(p(C))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,EJ(C),O0,C.width,C.height);else if(c)J.renderbufferStorageMultisample(J.RENDERBUFFER,EJ(C),O0,C.width,C.height);else J.renderbufferStorage(J.RENDERBUFFER,O0,C.width,C.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function F0(T,C,c){let Z0=C.isWebGLCubeRenderTarget===!0;if(Q.bindFramebuffer(J.FRAMEBUFFER,T),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let D0=Z.get(C.depthTexture);if(D0.__renderTarget=C,!D0.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0;if(Z0){if(D0.__webglInit===void 0)D0.__webglInit=!0,C.depthTexture.addEventListener("dispose",k);if(D0.__webglTexture===void 0){D0.__webglTexture=J.createTexture(),Q.bindTexture(J.TEXTURE_CUBE_MAP,D0.__webglTexture),t(J.TEXTURE_CUBE_MAP,C.depthTexture);let _0=W.convert(C.depthTexture.format),s0=W.convert(C.depthTexture.type),T0;if(C.depthTexture.format===o7)T0=J.DEPTH_COMPONENT24;else if(C.depthTexture.format===a7)T0=J.DEPTH24_STENCIL8;for(let P0=0;P0<6;P0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+P0,0,T0,C.width,C.height,0,_0,s0,null)}}else a(C.depthTexture,0);let C0=D0.__webglTexture,v0=EJ(C),U0=Z0?J.TEXTURE_CUBE_MAP_POSITIVE_X+c:J.TEXTURE_2D,O0=C.depthTexture.format===a7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(C.depthTexture.format===o7)if(p(C))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,O0,U0,C0,0,v0);else J.framebufferTexture2D(J.FRAMEBUFFER,O0,U0,C0,0);else if(C.depthTexture.format===a7)if(p(C))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,O0,U0,C0,0,v0);else J.framebufferTexture2D(J.FRAMEBUFFER,O0,U0,C0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function z0(T){let C=Z.get(T),c=T.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==T.depthTexture){let Z0=T.depthTexture;if(C.__depthDisposeCallback)C.__depthDisposeCallback();if(Z0){let D0=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Z0.removeEventListener("dispose",D0)};Z0.addEventListener("dispose",D0),C.__depthDisposeCallback=D0}C.__boundDepthTexture=Z0}if(T.depthTexture&&!C.__autoAllocateDepthBuffer)if(c)for(let Z0=0;Z0<6;Z0++)F0(C.__webglFramebuffer[Z0],T,Z0);else{let Z0=T.texture.mipmaps;if(Z0&&Z0.length>0)F0(C.__webglFramebuffer[0],T,0);else F0(C.__webglFramebuffer,T,0)}else if(c){C.__webglDepthbuffer=[];for(let Z0=0;Z0<6;Z0++)if(Q.bindFramebuffer(J.FRAMEBUFFER,C.__webglFramebuffer[Z0]),C.__webglDepthbuffer[Z0]===void 0)C.__webglDepthbuffer[Z0]=J.createRenderbuffer(),q0(C.__webglDepthbuffer[Z0],T,!1);else{let D0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,C0=C.__webglDepthbuffer[Z0];J.bindRenderbuffer(J.RENDERBUFFER,C0),J.framebufferRenderbuffer(J.FRAMEBUFFER,D0,J.RENDERBUFFER,C0)}}else{let Z0=T.texture.mipmaps;if(Z0&&Z0.length>0)Q.bindFramebuffer(J.FRAMEBUFFER,C.__webglFramebuffer[0]);else Q.bindFramebuffer(J.FRAMEBUFFER,C.__webglFramebuffer);if(C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=J.createRenderbuffer(),q0(C.__webglDepthbuffer,T,!1);else{let D0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,C0=C.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,C0),J.framebufferRenderbuffer(J.FRAMEBUFFER,D0,J.RENDERBUFFER,C0)}}Q.bindFramebuffer(J.FRAMEBUFFER,null)}function B0(T,C,c){let Z0=Z.get(T);if(C!==void 0)$0(Z0.__webglFramebuffer,T,T.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(c!==void 0)z0(T)}function b0(T){let C=T.texture,c=Z.get(T),Z0=Z.get(C);T.addEventListener("dispose",L);let D0=T.textures,C0=T.isWebGLCubeRenderTarget===!0,v0=D0.length>1;if(!v0){if(Z0.__webglTexture===void 0)Z0.__webglTexture=J.createTexture();Z0.__version=C.version,Y.memory.textures++}if(C0){c.__webglFramebuffer=[];for(let U0=0;U0<6;U0++)if(C.mipmaps&&C.mipmaps.length>0){c.__webglFramebuffer[U0]=[];for(let O0=0;O0<C.mipmaps.length;O0++)c.__webglFramebuffer[U0][O0]=J.createFramebuffer()}else c.__webglFramebuffer[U0]=J.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){c.__webglFramebuffer=[];for(let U0=0;U0<C.mipmaps.length;U0++)c.__webglFramebuffer[U0]=J.createFramebuffer()}else c.__webglFramebuffer=J.createFramebuffer();if(v0)for(let U0=0,O0=D0.length;U0<O0;U0++){let _0=Z.get(D0[U0]);if(_0.__webglTexture===void 0)_0.__webglTexture=J.createTexture(),Y.memory.textures++}if(T.samples>0&&p(T)===!1){c.__webglMultisampledFramebuffer=J.createFramebuffer(),c.__webglColorRenderbuffer=[],Q.bindFramebuffer(J.FRAMEBUFFER,c.__webglMultisampledFramebuffer);for(let U0=0;U0<D0.length;U0++){let O0=D0[U0];c.__webglColorRenderbuffer[U0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,c.__webglColorRenderbuffer[U0]);let _0=W.convert(O0.format,O0.colorSpace),s0=W.convert(O0.type),T0=V(O0.internalFormat,_0,s0,O0.normalized,O0.colorSpace,T.isXRRenderTarget===!0),P0=EJ(T);J.renderbufferStorageMultisample(J.RENDERBUFFER,P0,T0,T.width,T.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+U0,J.RENDERBUFFER,c.__webglColorRenderbuffer[U0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),T.depthBuffer)c.__webglDepthRenderbuffer=J.createRenderbuffer(),q0(c.__webglDepthRenderbuffer,T,!0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}}if(C0){Q.bindTexture(J.TEXTURE_CUBE_MAP,Z0.__webglTexture),t(J.TEXTURE_CUBE_MAP,C);for(let U0=0;U0<6;U0++)if(C.mipmaps&&C.mipmaps.length>0)for(let O0=0;O0<C.mipmaps.length;O0++)$0(c.__webglFramebuffer[U0][O0],T,C,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,O0);else $0(c.__webglFramebuffer[U0],T,C,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,0);if(E(C))D(J.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(v0){for(let U0=0,O0=D0.length;U0<O0;U0++){let _0=D0[U0],s0=Z.get(_0),T0=J.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)T0=T.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(T0,s0.__webglTexture),t(T0,_0),$0(c.__webglFramebuffer,T,_0,J.COLOR_ATTACHMENT0+U0,T0,0),E(_0))D(T0)}Q.unbindTexture()}else{let U0=J.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)U0=T.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(U0,Z0.__webglTexture),t(U0,C),C.mipmaps&&C.mipmaps.length>0)for(let O0=0;O0<C.mipmaps.length;O0++)$0(c.__webglFramebuffer[O0],T,C,J.COLOR_ATTACHMENT0,U0,O0);else $0(c.__webglFramebuffer,T,C,J.COLOR_ATTACHMENT0,U0,0);if(E(C))D(U0);Q.unbindTexture()}if(T.depthBuffer)z0(T)}function r0(T){let C=T.textures;for(let c=0,Z0=C.length;c<Z0;c++){let D0=C[c];if(E(D0)){let C0=M(T),v0=Z.get(D0).__webglTexture;Q.bindTexture(C0,v0),D(C0),Q.unbindTexture()}}}let S0=[],ZJ=[];function HJ(T){if(T.samples>0){if(p(T)===!1){let{textures:C,width:c,height:Z0}=T,D0=J.COLOR_BUFFER_BIT,C0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,v0=Z.get(T),U0=C.length>1;if(U0)for(let _0=0;_0<C.length;_0++)Q.bindFramebuffer(J.FRAMEBUFFER,v0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+_0,J.RENDERBUFFER,null),Q.bindFramebuffer(J.FRAMEBUFFER,v0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+_0,J.TEXTURE_2D,null,0);Q.bindFramebuffer(J.READ_FRAMEBUFFER,v0.__webglMultisampledFramebuffer);let O0=T.texture.mipmaps;if(O0&&O0.length>0)Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,v0.__webglFramebuffer[0]);else Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,v0.__webglFramebuffer);for(let _0=0;_0<C.length;_0++){if(T.resolveDepthBuffer){if(T.depthBuffer)D0|=J.DEPTH_BUFFER_BIT;if(T.stencilBuffer&&T.resolveStencilBuffer)D0|=J.STENCIL_BUFFER_BIT}if(U0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,v0.__webglColorRenderbuffer[_0]);let s0=Z.get(C[_0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,s0,0)}if(J.blitFramebuffer(0,0,c,Z0,0,0,c,Z0,D0,J.NEAREST),H===!0){if(S0.length=0,ZJ.length=0,S0.push(J.COLOR_ATTACHMENT0+_0),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1)S0.push(C0),ZJ.push(C0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,ZJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,S0)}}if(Q.bindFramebuffer(J.READ_FRAMEBUFFER,null),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),U0)for(let _0=0;_0<C.length;_0++){Q.bindFramebuffer(J.FRAMEBUFFER,v0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+_0,J.RENDERBUFFER,v0.__webglColorRenderbuffer[_0]);let s0=Z.get(C[_0]).__webglTexture;Q.bindFramebuffer(J.FRAMEBUFFER,v0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+_0,J.TEXTURE_2D,s0,0)}Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,v0.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&H){let C=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[C])}}}function EJ(T){return Math.min(K.maxSamples,T.samples)}function p(T){let C=Z.get(T);return T.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function cJ(T){let C=Y.render.frame;if(N.get(T)!==C)N.set(T,C),T.update()}function IJ(T,C){let{colorSpace:c,format:Z0,type:D0}=T;if(T.isCompressedTexture===!0||T.isVideoTexture===!0)return C;if(c!==c8&&c!==t7)if(RJ.getTransfer(c)===uJ){if(Z0!==y9||D0!==k9)t0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else KJ("WebGLTextures: Unsupported texture color space:",c);return C}function zJ(T){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement)U.width=T.naturalWidth||T.width,U.height=T.naturalHeight||T.height;else if(typeof VideoFrame<"u"&&T instanceof VideoFrame)U.width=T.displayWidth,U.height=T.displayHeight;else U.width=T.width,U.height=T.height;return U}this.allocateTextureUnit=g,this.resetTextureUnits=e,this.getTextureUnits=v,this.setTextureUnits=j,this.setTexture2D=a,this.setTexture2DArray=m,this.setTexture3D=J0,this.setTextureCube=X0,this.rebindTextures=B0,this.setupRenderTarget=b0,this.updateRenderTargetMipmap=r0,this.updateMultisampleRenderTarget=HJ,this.setupDepthRenderbuffer=z0,this.setupFrameBufferTexture=$0,this.useMultisampledRTT=p,this.isReversedDepthBuffer=function(){return Q.buffers.depth.getReversed()}}function dO(J,$){function Q(Z,K=t7){let W,Y=RJ.getTransfer(K);if(Z===k9)return J.UNSIGNED_BYTE;if(Z===CW)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===PW)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===HU)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===UU)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===YU)return J.BYTE;if(Z===XU)return J.SHORT;if(Z===QQ)return J.UNSIGNED_SHORT;if(Z===MW)return J.INT;if(Z===M7)return J.UNSIGNED_INT;if(Z===e9)return J.FLOAT;if(Z===L8)return J.HALF_FLOAT;if(Z===NU)return J.ALPHA;if(Z===GU)return J.RGB;if(Z===y9)return J.RGBA;if(Z===o7)return J.DEPTH_COMPONENT;if(Z===a7)return J.DEPTH_STENCIL;if(Z===FU)return J.RED;if(Z===IW)return J.RED_INTEGER;if(Z===r7)return J.RG;if(Z===zW)return J.RG_INTEGER;if(Z===AW)return J.RGBA_INTEGER;if(Z===SZ||Z===jZ||Z===yZ||Z===vZ)if(Y===uJ)if(W=$.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===SZ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===jZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===yZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===vZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=$.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===SZ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===jZ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===yZ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===vZ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===_W||Z===TW||Z===wW||Z===SW)if(W=$.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===_W)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===TW)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===wW)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===SW)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===jW||Z===yW||Z===vW||Z===fW||Z===bW||Z===fZ||Z===hW)if(W=$.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===jW||Z===yW)return Y===uJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===vW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===fW)return W.COMPRESSED_R11_EAC;if(Z===bW)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===fZ)return W.COMPRESSED_RG11_EAC;if(Z===hW)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===xW||Z===gW||Z===pW||Z===mW||Z===lW||Z===uW||Z===dW||Z===cW||Z===nW||Z===sW||Z===iW||Z===oW||Z===aW||Z===rW)if(W=$.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===xW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===gW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===pW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===mW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===lW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===uW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===dW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===cW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===nW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===sW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===iW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===oW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===aW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===rW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===tW||Z===eW||Z===JY)if(W=$.get("EXT_texture_compression_bptc"),W!==null){if(Z===tW)return Y===uJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===eW)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===JY)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===$Y||Z===QY||Z===bZ||Z===ZY)if(W=$.get("EXT_texture_compression_rgtc"),W!==null){if(Z===$Y)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===QY)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===bZ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===ZY)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===J$)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:Q}}var cO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nO=`
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

}`;class R5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,$){if(this.texture===null){let Q=new iZ(J.texture);if(J.depthNear!==$.depthNear||J.depthFar!==$.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Q}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let $=J.cameras[0].viewport,Q=new J8({vertexShader:cO,fragmentShader:nO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:$.z},depthHeight:{value:$.w}}});this.mesh=new I0(new VJ(20,20),Q)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L5 extends M9{constructor(J,$){super();let Q=this,Z=null,K=1,W=null,Y="local-floor",X=1,H=null,U=null,N=null,F=null,G=null,q=null,O=typeof XRWebGLBinding<"u",B=new R5,R={},E=$.getContextAttributes(),D=null,M=null,V=[],I=[],w=new R0,k=null,L=null,P=new G8;P.viewport=new lJ;let l=new G8;l.viewport=new lJ;let b=[P,l],d=new wY,e=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(x){let _=V[x];if(_===void 0)_=new WQ,V[x]=_;return _.getTargetRaySpace()},this.getControllerGrip=function(x){let _=V[x];if(_===void 0)_=new WQ,V[x]=_;return _.getGripSpace()},this.getHand=function(x){let _=V[x];if(_===void 0)_=new WQ,V[x]=_;return _.getHandSpace()};function j(x){let _=I.indexOf(x.inputSource);if(_===-1)return;let h=V[_];if(h!==void 0)h.update(x.inputSource,x.frame,H||W),h.dispatchEvent({type:x.type,data:x.inputSource})}function g(){Z.removeEventListener("select",j),Z.removeEventListener("selectstart",j),Z.removeEventListener("selectend",j),Z.removeEventListener("squeeze",j),Z.removeEventListener("squeezestart",j),Z.removeEventListener("squeezeend",j),Z.removeEventListener("end",g),Z.removeEventListener("inputsourceschange",f);for(let x=0;x<V.length;x++){let _=I[x];if(_===null)continue;I[x]=null,V[x].disconnect(_)}e=null,v=null,B.reset();for(let x in R)delete R[x];if(J.setRenderTarget(D),G=null,F=null,N=null,Z=null,M=null,t.stop(),Q.isPresenting=!1,J.setPixelRatio(k),J.setSize(w.width,w.height,!1),L!==null){let x=L.camera;x.fov=L.fov,x.zoom=L.zoom,x.updateProjectionMatrix(),L=null}Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(x){if(K=x,Q.isPresenting===!0)t0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(x){if(Y=x,Q.isPresenting===!0)t0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(x){H=x},this.getBaseLayer=function(){return F!==null?F:G},this.getBinding=function(){if(N===null&&O)N=new XRWebGLBinding(Z,$);return N},this.getFrame=function(){return q},this.getSession=function(){return Z},this.setSession=async function(x){if(Z=x,Z!==null){if(D=J.getRenderTarget(),Z.addEventListener("select",j),Z.addEventListener("selectstart",j),Z.addEventListener("selectend",j),Z.addEventListener("squeeze",j),Z.addEventListener("squeezestart",j),Z.addEventListener("squeezeend",j),Z.addEventListener("end",g),Z.addEventListener("inputsourceschange",f),E.xrCompatible!==!0)await $.makeXRCompatible();if(k=J.getPixelRatio(),J.getSize(w),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let h={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:K};G=new XRWebGLLayer(Z,$,h),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),M=new Z8(G.framebufferWidth,G.framebufferHeight,{format:y9,type:k9,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let h=null,u=null,W0=null;if(E.depth)W0=E.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,h=E.stencil?a7:o7,u=E.stencil?J$:M7;let $0={colorFormat:$.RGBA8,depthFormat:W0,scaleFactor:K};N=this.getBinding(),F=N.createProjectionLayer($0),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),M=new Z8(F.textureWidth,F.textureHeight,{format:y9,type:k9,depthTexture:new K6(F.textureWidth,F.textureHeight,u,void 0,void 0,void 0,void 0,void 0,void 0,h),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1,storeMultisampledDepthBuffer:F.ignoreDepthValues===!1,storeMultisampledStencilBuffer:F.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(X),H=null,W=await Z.requestReferenceSpace(Y),t.setContext(Z),t.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function f(x){for(let _=0;_<x.removed.length;_++){let h=x.removed[_],u=I.indexOf(h);if(u>=0)I[u]=null,V[u].disconnect(h)}for(let _=0;_<x.added.length;_++){let h=x.added[_],u=I.indexOf(h);if(u===-1){for(let $0=0;$0<V.length;$0++)if($0>=I.length){I.push(h),u=$0;break}else if(I[$0]===null){I[$0]=h,u=$0;break}if(u===-1)break}let W0=V[u];if(W0)W0.connect(h)}}let a=new S,m=new S;function J0(x,_,h){a.setFromMatrixPosition(_.matrixWorld),m.setFromMatrixPosition(h.matrixWorld);let u=a.distanceTo(m),W0=_.projectionMatrix.elements,$0=h.projectionMatrix.elements,q0=W0[14]/(W0[10]-1),F0=W0[14]/(W0[10]+1),z0=(W0[9]+1)/W0[5],B0=(W0[9]-1)/W0[5],b0=(W0[8]-1)/W0[0],r0=($0[8]+1)/$0[0],S0=q0*b0,ZJ=q0*r0,HJ=u/(-b0+r0),EJ=HJ*-b0;if(_.matrixWorld.decompose(x.position,x.quaternion,x.scale),x.translateX(EJ),x.translateZ(HJ),x.matrixWorld.compose(x.position,x.quaternion,x.scale),x.matrixWorldInverse.copy(x.matrixWorld).invert(),W0[10]===-1)x.projectionMatrix.copy(_.projectionMatrix),x.projectionMatrixInverse.copy(_.projectionMatrixInverse);else{let p=q0+HJ,cJ=F0+HJ,IJ=S0-EJ,zJ=ZJ+(u-EJ),T=z0*F0/cJ*p,C=B0*F0/cJ*p;x.projectionMatrix.makePerspective(IJ,zJ,T,C,p,cJ),x.projectionMatrixInverse.copy(x.projectionMatrix).invert()}}function X0(x,_){if(_===null)x.matrixWorld.copy(x.matrix);else x.matrixWorld.multiplyMatrices(_.matrixWorld,x.matrix);x.matrixWorldInverse.copy(x.matrixWorld).invert()}this.updateCamera=function(x){if(Z===null)return;let{near:_,far:h}=x;if(B.texture!==null){if(B.depthNear>0)_=B.depthNear;if(B.depthFar>0)h=B.depthFar}if(d.near=l.near=P.near=_,d.far=l.far=P.far=h,e!==d.near||v!==d.far)Z.updateRenderState({depthNear:d.near,depthFar:d.far}),e=d.near,v=d.far;d.layers.mask=x.layers.mask|6,P.layers.mask=d.layers.mask&-5,l.layers.mask=d.layers.mask&-3;let u=x.parent,W0=d.cameras;X0(d,u);for(let $0=0;$0<W0.length;$0++)X0(W0[$0],u);if(W0.length===2)J0(d,P,l);else d.projectionMatrix.copy(P.projectionMatrix);if(L===null&&x.isPerspectiveCamera)L={camera:x,fov:x.fov,zoom:x.zoom};y(x,d,u)};function y(x,_,h){if(h===null)x.matrix.copy(_.matrixWorld);else x.matrix.copy(h.matrixWorld),x.matrix.invert(),x.matrix.multiply(_.matrixWorld);if(x.matrix.decompose(x.position,x.quaternion,x.scale),x.updateMatrixWorld(!0),x.projectionMatrix.copy(_.projectionMatrix),x.projectionMatrixInverse.copy(_.projectionMatrixInverse),x.isPerspectiveCamera)x.fov=u7*2*Math.atan(1/x.projectionMatrix.elements[5]),x.zoom=1}this.getCamera=function(){return d},this.getFoveation=function(){if(F===null&&G===null)return;return X},this.setFoveation=function(x){if(X=x,F!==null)F.fixedFoveation=x;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=x},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(d)},this.getCameraTexture=function(x){return R[x]};let o=null;function N0(x,_){if(U=_.getViewerPose(H||W),q=_,U!==null){let h=U.views;if(G!==null)J.setRenderTargetFramebuffer(M,G.framebuffer),J.setRenderTarget(M);let u=!1;if(h.length!==d.cameras.length)d.cameras.length=0,u=!0;for(let F0=0;F0<h.length;F0++){let z0=h[F0],B0=null;if(G!==null)B0=G.getViewport(z0);else{let r0=N.getViewSubImage(F,z0);if(B0=r0.viewport,F0===0)J.setRenderTargetTextures(M,r0.colorTexture,r0.depthStencilTexture),J.setRenderTarget(M)}let b0=b[F0];if(b0===void 0)b0=new G8,b0.layers.enable(F0),b0.viewport=new lJ,b[F0]=b0;if(b0.matrix.fromArray(z0.transform.matrix),b0.matrix.decompose(b0.position,b0.quaternion,b0.scale),b0.projectionMatrix.fromArray(z0.projectionMatrix),b0.projectionMatrixInverse.copy(b0.projectionMatrix).invert(),b0.viewport.set(B0.x,B0.y,B0.width,B0.height),F0===0)d.matrix.copy(b0.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale);if(u===!0)d.cameras.push(b0)}let W0=Z.enabledFeatures;if(W0&&W0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&O){N=Q.getBinding();let F0=N.getDepthInformation(h[0]);if(F0&&F0.isValid&&F0.texture)B.init(F0,Z.renderState)}if(W0&&W0.includes("camera-access")&&O){J.state.unbindTexture(),N=Q.getBinding();for(let F0=0;F0<h.length;F0++){let z0=h[F0].camera;if(z0){let B0=R[z0];if(!B0)B0=new iZ,R[z0]=B0;let b0=N.getCameraImage(z0);B0.sourceTexture=b0}}}}for(let h=0;h<V.length;h++){let u=I[h],W0=V[h];if(u!==null&&W0!==void 0)W0.update(u,_,H||W)}if(o)o(x,_);if(_.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:_});q=null}let t=new W5;t.setAnimationLoop(N0),this.setAnimationLoop=function(x){o=x},this.dispose=function(){}}}var sO=new QJ,V5=new NJ;V5.set(-1,0,0,0,1,0,0,0,1);function iO(J,$){function Q(R,E){if(R.matrixAutoUpdate===!0)R.updateMatrix();E.value.copy(R.matrix)}function Z(R,E){if(E.color.getRGB(R.fogColor.value,DY(J)),E.isFog)R.fogNear.value=E.near,R.fogFar.value=E.far;else if(E.isFogExp2)R.fogDensity.value=E.density}function K(R,E,D,M,V){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)W(R,E);else if(E.isMeshLambertMaterial){if(W(R,E),E.envMap)R.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)W(R,E),F(R,E);else if(E.isMeshPhongMaterial){if(W(R,E),N(R,E),E.envMap)R.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(W(R,E),G(R,E),E.isMeshPhysicalMaterial)q(R,E,V)}else if(E.isMeshMatcapMaterial)W(R,E),O(R,E);else if(E.isMeshDepthMaterial)W(R,E);else if(E.isMeshDistanceMaterial)W(R,E),B(R,E);else if(E.isMeshNormalMaterial)W(R,E);else if(E.isLineBasicMaterial){if(Y(R,E),E.isLineDashedMaterial)X(R,E)}else if(E.isPointsMaterial)H(R,E,D,M);else if(E.isSpriteMaterial)U(R,E);else if(E.isShadowMaterial)R.color.value.copy(E.color),R.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function W(R,E){if(R.opacity.value=E.opacity,E.color)R.diffuse.value.copy(E.color);if(E.emissive)R.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)R.map.value=E.map,Q(E.map,R.mapTransform);if(E.alphaMap)R.alphaMap.value=E.alphaMap,Q(E.alphaMap,R.alphaMapTransform);if(E.bumpMap){if(R.bumpMap.value=E.bumpMap,Q(E.bumpMap,R.bumpMapTransform),R.bumpScale.value=E.bumpScale,E.side===D8)R.bumpScale.value*=-1}if(E.normalMap){if(R.normalMap.value=E.normalMap,Q(E.normalMap,R.normalMapTransform),R.normalScale.value.copy(E.normalScale),E.side===D8)R.normalScale.value.negate()}if(E.displacementMap)R.displacementMap.value=E.displacementMap,Q(E.displacementMap,R.displacementMapTransform),R.displacementScale.value=E.displacementScale,R.displacementBias.value=E.displacementBias;if(E.emissiveMap)R.emissiveMap.value=E.emissiveMap,Q(E.emissiveMap,R.emissiveMapTransform);if(E.specularMap)R.specularMap.value=E.specularMap,Q(E.specularMap,R.specularMapTransform);if(E.alphaTest>0)R.alphaTest.value=E.alphaTest;let D=$.get(E),M=D.envMap,V=D.envMapRotation;if(M){if(R.envMap.value=M,R.envMapRotation.value.setFromMatrix4(sO.makeRotationFromEuler(V)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)R.envMapRotation.value.premultiply(V5);R.reflectivity.value=E.reflectivity,R.ior.value=E.ior,R.refractionRatio.value=E.refractionRatio}if(E.lightMap)R.lightMap.value=E.lightMap,R.lightMapIntensity.value=E.lightMapIntensity,Q(E.lightMap,R.lightMapTransform);if(E.aoMap)R.aoMap.value=E.aoMap,R.aoMapIntensity.value=E.aoMapIntensity,Q(E.aoMap,R.aoMapTransform)}function Y(R,E){if(R.diffuse.value.copy(E.color),R.opacity.value=E.opacity,E.map)R.map.value=E.map,Q(E.map,R.mapTransform)}function X(R,E){R.dashSize.value=E.dashSize,R.totalSize.value=E.dashSize+E.gapSize,R.scale.value=E.scale}function H(R,E,D,M){if(R.diffuse.value.copy(E.color),R.opacity.value=E.opacity,R.size.value=E.size*D,R.scale.value=M*0.5,E.map)R.map.value=E.map,Q(E.map,R.uvTransform);if(E.alphaMap)R.alphaMap.value=E.alphaMap,Q(E.alphaMap,R.alphaMapTransform);if(E.alphaTest>0)R.alphaTest.value=E.alphaTest}function U(R,E){if(R.diffuse.value.copy(E.color),R.opacity.value=E.opacity,R.rotation.value=E.rotation,E.map)R.map.value=E.map,Q(E.map,R.mapTransform);if(E.alphaMap)R.alphaMap.value=E.alphaMap,Q(E.alphaMap,R.alphaMapTransform);if(E.alphaTest>0)R.alphaTest.value=E.alphaTest}function N(R,E){R.specular.value.copy(E.specular),R.shininess.value=Math.max(E.shininess,0.0001)}function F(R,E){if(E.gradientMap)R.gradientMap.value=E.gradientMap}function G(R,E){if(R.metalness.value=E.metalness,E.metalnessMap)R.metalnessMap.value=E.metalnessMap,Q(E.metalnessMap,R.metalnessMapTransform);if(R.roughness.value=E.roughness,E.roughnessMap)R.roughnessMap.value=E.roughnessMap,Q(E.roughnessMap,R.roughnessMapTransform);if(E.envMap)R.envMapIntensity.value=E.envMapIntensity}function q(R,E,D){if(R.ior.value=E.ior,E.sheen>0){if(R.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),R.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)R.sheenColorMap.value=E.sheenColorMap,Q(E.sheenColorMap,R.sheenColorMapTransform);if(E.sheenRoughnessMap)R.sheenRoughnessMap.value=E.sheenRoughnessMap,Q(E.sheenRoughnessMap,R.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(R.clearcoat.value=E.clearcoat,R.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)R.clearcoatMap.value=E.clearcoatMap,Q(E.clearcoatMap,R.clearcoatMapTransform);if(E.clearcoatRoughnessMap)R.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,Q(E.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(R.clearcoatNormalMap.value=E.clearcoatNormalMap,Q(E.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===D8)R.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)R.dispersion.value=E.dispersion;if(E.retroreflectivity>0)R.retroreflectivity.value=E.retroreflectivity;if(E.iridescence>0){if(R.iridescence.value=E.iridescence,R.iridescenceIOR.value=E.iridescenceIOR,R.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)R.iridescenceMap.value=E.iridescenceMap,Q(E.iridescenceMap,R.iridescenceMapTransform);if(E.iridescenceThicknessMap)R.iridescenceThicknessMap.value=E.iridescenceThicknessMap,Q(E.iridescenceThicknessMap,R.iridescenceThicknessMapTransform)}if(E.transmission>0){if(R.transmission.value=E.transmission,R.transmissionSamplerMap.value=D.texture,R.transmissionSamplerSize.value.set(D.width,D.height),E.transmissionMap)R.transmissionMap.value=E.transmissionMap,Q(E.transmissionMap,R.transmissionMapTransform);if(R.thickness.value=E.thickness,E.thicknessMap)R.thicknessMap.value=E.thicknessMap,Q(E.thicknessMap,R.thicknessMapTransform);R.attenuationDistance.value=E.attenuationDistance,R.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(R.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)R.anisotropyMap.value=E.anisotropyMap,Q(E.anisotropyMap,R.anisotropyMapTransform)}if(R.specularIntensity.value=E.specularIntensity,R.specularColor.value.copy(E.specularColor),E.specularColorMap)R.specularColorMap.value=E.specularColorMap,Q(E.specularColorMap,R.specularColorMapTransform);if(E.specularIntensityMap)R.specularIntensityMap.value=E.specularIntensityMap,Q(E.specularIntensityMap,R.specularIntensityMapTransform)}function O(R,E){if(E.matcap)R.matcap.value=E.matcap}function B(R,E){let D=$.get(E).light;R.referencePosition.value.setFromMatrixPosition(D.matrixWorld),R.nearDistance.value=D.shadow.camera.near,R.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function oO(J,$,Q,Z){let K={},W={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,I){let w=I.program;Z.uniformBlockBinding(V,w)}function U(V,I){let w=K[V.id];if(w===void 0)R(V),w=N(V),K[V.id]=w,V.addEventListener("dispose",D);let k=I.program;Z.updateUBOMapping(V,k);let L=$.render.frame;if(W[V.id]!==L)G(V),W[V.id]=L}function N(V){let I=F();V.__bindingPointIndex=I;let w=J.createBuffer(),k=V.__size,L=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,k,L),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,I,w),w}function F(){for(let V=0;V<X;V++)if(Y.indexOf(V)===-1)return Y.push(V),V;return KJ("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(V){let I=K[V.id],w=V.uniforms,k=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,I);for(let L=0,P=w.length;L<P;L++){let l=w[L];if(Array.isArray(l))for(let b=0,d=l.length;b<d;b++)q(l[b],L,b,k);else q(l,L,0,k)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(V,I,w,k){if(B(V,I,w,k)===!0){let{__offset:L,value:P}=V;if(Array.isArray(P)){let l=0;for(let b=0;b<P.length;b++){let d=P[b],e=E(d);if(O(d,V.__data,l),typeof d!=="number"&&typeof d!=="boolean"&&!d.isMatrix3&&!ArrayBuffer.isView(d))l+=e.storage/Float32Array.BYTES_PER_ELEMENT}}else O(P,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,L,V.__data)}}function O(V,I,w){if(typeof V==="number"||typeof V==="boolean")I[0]=V;else if(V.isMatrix3)I[0]=V.elements[0],I[1]=V.elements[1],I[2]=V.elements[2],I[3]=0,I[4]=V.elements[3],I[5]=V.elements[4],I[6]=V.elements[5],I[7]=0,I[8]=V.elements[6],I[9]=V.elements[7],I[10]=V.elements[8],I[11]=0;else if(ArrayBuffer.isView(V))I.set(new V.constructor(V.buffer,V.byteOffset,I.length));else V.toArray(I,w)}function B(V,I,w,k){let L=V.value,P=I+"_"+w;if(k[P]===void 0){if(typeof L==="number"||typeof L==="boolean")k[P]=L;else if(ArrayBuffer.isView(L))k[P]=L.slice();else k[P]=L.clone();return!0}else{let l=k[P];if(typeof L==="number"||typeof L==="boolean"){if(l!==L)return k[P]=L,!0}else if(ArrayBuffer.isView(L))return!0;else if(l.equals(L)===!1)return l.copy(L),!0}return!1}function R(V){let I=V.uniforms,w=0,k=16;for(let P=0,l=I.length;P<l;P++){let b=Array.isArray(I[P])?I[P]:[I[P]];for(let d=0,e=b.length;d<e;d++){let v=b[d],j=Array.isArray(v.value)?v.value:[v.value];for(let g=0,f=j.length;g<f;g++){let a=j[g],m=E(a),J0=w%k,X0=J0%m.boundary,y=J0+X0;if(w+=X0,y!==0&&k-y<m.storage)w+=k-y;v.__data=new Float32Array(m.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=w,w+=m.storage}}}let L=w%k;if(L>0)w+=k-L;return V.__size=w,V.__cache={},this}function E(V){let I={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")I.boundary=4,I.storage=4;else if(V.isVector2)I.boundary=8,I.storage=8;else if(V.isVector3||V.isColor)I.boundary=16,I.storage=12;else if(V.isVector4)I.boundary=16,I.storage=16;else if(V.isMatrix3)I.boundary=48,I.storage=48;else if(V.isMatrix4)I.boundary=64,I.storage=64;else if(V.isTexture)t0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))I.boundary=16,I.storage=V.byteLength;else t0("WebGLRenderer: Unsupported uniform value type.",V);return I}function D(V){let I=V.target;I.removeEventListener("dispose",D);let w=Y.indexOf(I.__bindingPointIndex);Y.splice(w,1),J.deleteBuffer(K[I.id]),delete K[I.id],delete W[I.id]}function M(){for(let V in K)J.deleteBuffer(K[V]);Y=[],K={},W={}}return{bind:H,update:U,dispose:M}}var aO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),h9=null;function rO(){if(h9===null)h9=new $6(aO,16,16,r7,L8),h9.name="DFG_LUT",h9.minFilter=X8,h9.magFilter=X8,h9.wrapS=t6,h9.wrapT=t6,h9.generateMipmaps=!1,h9.needsUpdate=!0;return h9}class nY{constructor(J={}){let{canvas:$=DU(),context:Q=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:F=!1,outputBufferType:G=k9}=J;this.isWebGLRenderer=!0;let q;if(Q!==null){if(typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=Q.getContextAttributes().alpha}else q=W;let O=G,B=new Set([AW,zW,IW]),R=new Set([k9,M7,QQ,J$,CW,PW]),E=new Uint32Array(4),D=new Int32Array(4),M=new S,V=null,I=null,w=[],k=[],L=null;this.domElement=$,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=B9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,l=!1,b=null,d=null,e=null,v=null;this._outputColorSpace=Q8;let j=0,g=0,f=null,a=-1,m=null,J0=new lJ,X0=new lJ,y=null,o=new y0(0),N0=0,t=$.width,x=$.height,_=1,h=null,u=null,W0=new lJ(0,0,t,x),$0=new lJ(0,0,t,x),q0=!1,F0=new Q6,z0=!1,B0=!1,b0=new QJ,r0=new S,S0=new lJ,ZJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},HJ=!1;function EJ(){return f===null?_:1}let p=Q;function cJ(z,n){return $.getContext(z,n)}let IJ,zJ,T,C,c,Z0,D0,C0,v0,U0,O0,_0,s0,T0,P0,JJ,e0,AJ,s,f0,G0,j0,l0;try{let z={alpha:!0,depth:Z,stencil:K,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in $)$.setAttribute("data-engine",`three.js r${zH}`);if($.addEventListener("webglcontextlost",XJ,!1),$.addEventListener("webglcontextrestored",nJ,!1),$.addEventListener("webglcontextcreationerror",yJ,!1),p===null){if(p=cJ("webgl2",z),p===null)if(cJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}k0()}catch(z){throw $.removeEventListener("webglcontextlost",XJ,!1),$.removeEventListener("webglcontextrestored",nJ,!1),$.removeEventListener("webglcontextcreationerror",yJ,!1),KJ("WebGLRenderer: "+z.message),z}function k0(){if(IJ=new Kq(p),IJ.init(),G0=new dO(p,IJ),zJ=new iE(p,IJ,J,G0),T=new lO(p,IJ),zJ.reversedDepthBuffer&&F)T.buffers.depth.setReversed(!0);d=p.createFramebuffer(),e=p.createFramebuffer(),v=p.createFramebuffer(),C=new Xq(p),c=new _O,Z0=new uO(p,IJ,T,c,zJ,G0,C),D0=new Zq(P),C0=new UF(p),j0=new nE(p,C0),v0=new Wq(p,C0,C,j0),U0=new Uq(p,v0,C0,j0,C),AJ=new Hq(p,zJ,Z0),P0=new oE(c),O0=new AO(P,D0,IJ,zJ,j0,P0),_0=new iO(P,c),s0=new wO,T0=new bO(IJ),e0=new cE(P,D0,T,U0,q,X),JJ=new mO(P,U0,zJ),l0=new oO(p,C,zJ,T),s=new sE(p,IJ,C),f0=new Yq(p,IJ,C),C.programs=O0.programs,P.capabilities=zJ,P.extensions=IJ,P.properties=c,P.renderLists=s0,P.shadowMap=JJ,P.state=T,P.info=C}if(O!==k9)L=new Gq(O,$.width,$.height,Y,Z,K);let h0=new L5(P,p);this.xr=h0,this.getContext=function(){return p},this.getContextAttributes=function(){return p.getContextAttributes()},this.forceContextLoss=function(){let z=IJ.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=IJ.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return _},this.setPixelRatio=function(z){if(z===void 0)return;_=z,this.setSize(t,x,!1)},this.getSize=function(z){return z.set(t,x)},this.setSize=function(z,n,H0=!0){if(h0.isPresenting){t0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(t=z,x=n,$.width=Math.floor(z*_),$.height=Math.floor(n*_),H0===!0)$.style.width=z+"px",$.style.height=n+"px";if(L!==null)L.setSize($.width,$.height);this.setViewport(0,0,z,n)},this.getDrawingBufferSize=function(z){return z.set(t*_,x*_).floor()},this.setDrawingBufferSize=function(z,n,H0){t=z,x=n,_=H0,$.width=Math.floor(z*H0),$.height=Math.floor(n*H0),this.setViewport(0,0,z,n)},this.setEffects=function(z){if(O===k9){KJ("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(z){for(let n=0;n<z.length;n++)if(z[n].isOutputPass===!0){t0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(z||[])},this.getCurrentViewport=function(z){return z.copy(J0)},this.getViewport=function(z){return z.copy(W0)},this.setViewport=function(z,n,H0,K0){if(z.isVector4)W0.set(z.x,z.y,z.z,z.w);else W0.set(z,n,H0,K0);T.viewport(J0.copy(W0).multiplyScalar(_).round())},this.getScissor=function(z){return z.copy($0)},this.setScissor=function(z,n,H0,K0){if(z.isVector4)$0.set(z.x,z.y,z.z,z.w);else $0.set(z,n,H0,K0);T.scissor(X0.copy($0).multiplyScalar(_).round())},this.getScissorTest=function(){return q0},this.setScissorTest=function(z){T.setScissorTest(q0=z)},this.setOpaqueSort=function(z){h=z},this.setTransparentSort=function(z){u=z},this.getClearColor=function(z){return z.copy(e0.getClearColor())},this.setClearColor=function(){e0.setClearColor(...arguments)},this.getClearAlpha=function(){return e0.getClearAlpha()},this.setClearAlpha=function(){e0.setClearAlpha(...arguments)},this.clear=function(z=!0,n=!0,H0=!0){let K0=0;if(z){let Q0=!1;if(f!==null){let w0=f.texture.format;Q0=B.has(w0)}if(Q0){let w0=f.texture.type,u0=R.has(w0),x0=e0.getClearColor(),i0=e0.getClearAlpha(),n0=x0.r,qJ=x0.g,DJ=x0.b;if(u0)E[0]=n0,E[1]=qJ,E[2]=DJ,E[3]=i0,p.clearBufferuiv(p.COLOR,0,E);else D[0]=n0,D[1]=qJ,D[2]=DJ,D[3]=i0,p.clearBufferiv(p.COLOR,0,D)}else K0|=p.COLOR_BUFFER_BIT}if(n)K0|=p.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(H0)K0|=p.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(K0!==0)p.clear(K0)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(z){z.setRenderer(this),b=z},this.dispose=function(){$.removeEventListener("webglcontextlost",XJ,!1),$.removeEventListener("webglcontextrestored",nJ,!1),$.removeEventListener("webglcontextcreationerror",yJ,!1),e0.dispose(),s0.dispose(),T0.dispose(),c.dispose(),D0.dispose(),U0.dispose(),j0.dispose(),l0.dispose(),O0.dispose(),h0.dispose(),h0.removeEventListener("sessionstart",k6),h0.removeEventListener("sessionend",B8),r8.stop()};function XJ(z){z.preventDefault(),d$("WebGLRenderer: Context Lost."),l=!0}function nJ(){d$("WebGLRenderer: Context Restored."),l=!1;let z=C.autoReset,n=JJ.enabled,H0=JJ.autoUpdate,K0=JJ.needsUpdate,Q0=JJ.type;k0(),C.autoReset=z,JJ.enabled=n,JJ.autoUpdate=H0,JJ.needsUpdate=K0,JJ.type=Q0}function yJ(z){KJ("WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function o8(z){let n=z.target;n.removeEventListener("dispose",o8),a8(n)}function a8(z){u9(z),c.remove(z)}function u9(z){let n=c.get(z).programs;if(n!==void 0){if(n.forEach(function(H0){O0.releaseProgram(H0)}),z.isShaderMaterial)O0.releaseShaderCache(z)}}this.renderBufferDirect=function(z,n,H0,K0,Q0,w0){if(n===null)n=ZJ;let u0=Q0.isMesh&&Q0.matrixWorld.determinantAffine()<0,x0=F9(z,n,H0,K0,Q0);T.setMaterial(K0,u0);let i0=H0.index,n0=1;if(K0.wireframe===!0){if(i0=v0.getWireframeAttribute(H0),i0===void 0)return;n0=2}let qJ=H0.drawRange,DJ=H0.attributes.position,a0=qJ.start*n0,vJ=(qJ.start+qJ.count)*n0;if(w0!==null)a0=Math.max(a0,w0.start*n0),vJ=Math.min(vJ,(w0.start+w0.count)*n0);if(i0!==null)a0=Math.max(a0,0),vJ=Math.min(vJ,i0.count);else if(DJ!==void 0&&DJ!==null)a0=Math.max(a0,0),vJ=Math.min(vJ,DJ.count);let aJ=vJ-a0;if(aJ<0||aJ===1/0)return;j0.setup(Q0,K0,x0,H0,i0);let TJ,gJ=s;if(i0!==null)TJ=C0.get(i0),gJ=f0,gJ.setIndex(TJ);if(Q0.isMesh)if(K0.wireframe===!0)T.setLineWidth(K0.wireframeLinewidth*EJ()),gJ.setMode(p.LINES);else gJ.setMode(p.TRIANGLES);else if(Q0.isLine){let iJ=K0.linewidth;if(iJ===void 0)iJ=1;if(T.setLineWidth(iJ*EJ()),Q0.isLineSegments)gJ.setMode(p.LINES);else if(Q0.isLineLoop)gJ.setMode(p.LINE_LOOP);else gJ.setMode(p.LINE_STRIP)}else if(Q0.isPoints)gJ.setMode(p.POINTS);else if(Q0.isSprite)gJ.setMode(p.TRIANGLES);if(Q0.isBatchedMesh)if(!IJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:iJ,_multiDrawCounts:d0,_multiDrawCount:N8}=Q0,PJ=i0?C0.get(i0).bytesPerElement:1,v8=c.get(K0).currentProgram.getUniforms();for(let C8=0;C8<N8;C8++)v8.setValue(p,"_gl_DrawID",C8),gJ.render(iJ[C8]/PJ,d0[C8])}else gJ.renderMultiDraw(Q0._multiDrawStarts,Q0._multiDrawCounts,Q0._multiDrawCount);else if(Q0.isInstancedMesh)gJ.renderInstances(a0,aJ,Q0.count);else if(H0.isInstancedBufferGeometry){let iJ=H0._maxInstanceCount!==void 0?H0._maxInstanceCount:1/0,d0=Math.min(H0.instanceCount,iJ);gJ.renderInstances(a0,aJ,d0)}else gJ.render(a0,aJ)};function k$(z,n,H0,K0){if(b!==null&&z.isNodeMaterial)b.setObject(K0,z);if(z0===!0)P0.setState(z,H0,!1);if(z.transparent===!0&&z.side===oJ&&z.forceSinglePass===!1)z.side=D8,z.needsUpdate=!0,C$(z,n,K0),z.side=D7,z.needsUpdate=!0,C$(z,n,K0),z.side=oJ;else C$(z,n,K0)}this.compile=function(z,n,H0=null){if(H0===null)H0=z;if(b!==null)b.renderStart(z,n,H0);if(I=T0.get(H0),I.init(n),k.push(I),H0.traverseVisible(function(Q0){if(Q0.isLight&&Q0.layers.test(n.layers)){if(I.pushLight(Q0),Q0.castShadow)I.pushShadow(Q0)}}),z!==H0)z.traverseVisible(function(Q0){if(Q0.isLight&&Q0.layers.test(n.layers)){if(I.pushLight(Q0),Q0.castShadow)I.pushShadow(Q0)}});if(I.setupLights(),b!==null)b.updateLights(I.state.lightsArray);if(B0=this.localClippingEnabled,z0=P0.init(this.clippingPlanes,B0),z0===!0)P0.setGlobalState(this.clippingPlanes,n);if(b!==null)JJ.render(I.state.shadowsArray,H0,n);let K0=new Set;if(z.traverse(function(Q0){if(!(Q0.isMesh||Q0.isPoints||Q0.isLine||Q0.isSprite))return;let w0=Q0.material;if(w0)if(Array.isArray(w0))for(let u0=0;u0<w0.length;u0++){let x0=w0[u0];k$(x0,H0,n,Q0),K0.add(x0)}else k$(w0,H0,n,Q0),K0.add(w0)}),I=k.pop(),b!==null)b.renderEnd();return K0},this.compileAsync=function(z,n,H0=null){let K0=this.compile(z,n,H0);return new Promise((Q0)=>{function w0(){if(K0.forEach(function(u0){let i0=c.get(u0).currentProgram;if(i0===void 0||i0.isReady())K0.delete(u0)}),K0.size===0){Q0(z);return}setTimeout(w0,10)}if(IJ.get("KHR_parallel_shader_compile")!==null)w0();else setTimeout(w0,10)})};let b7=null;function xQ(z){if(b7)b7(z)}function k6(){r8.stop()}function B8(){r8.start()}let r8=new W5;if(r8.setAnimationLoop(xQ),typeof self<"u")r8.setContext(self);this.setAnimationLoop=function(z){b7=z,h0.setAnimationLoop(z),z===null?r8.stop():r8.start()},h0.addEventListener("sessionstart",k6),h0.addEventListener("sessionend",B8),this.render=function(z,n){if(n!==void 0&&n.isCamera!==!0){KJ("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(l===!0)return;if(b!==null)b.renderStart(z,n);let H0=h0.enabled===!0&&h0.isPresenting===!0,K0=L!==null&&(f===null||H0)&&L.begin(P,f);if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(n.parent===null&&n.matrixWorldAutoUpdate===!0)n.updateMatrixWorld();if(h0.enabled===!0&&h0.isPresenting===!0&&(L===null||L.isCompositing()===!1)){if(h0.cameraAutoUpdate===!0)h0.updateCamera(n);n=h0.getCamera()}if(z.isScene===!0)z.onBeforeRender(P,z,n,f);if(I=T0.get(z,k.length),I.init(n),I.state.textureUnits=Z0.getTextureUnits(),k.push(I),b0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),F0.setFromProjectionMatrix(b0,UY,n.reversedDepth),B0=this.localClippingEnabled,z0=P0.init(this.clippingPlanes,B0),V=s0.get(z,w.length),V.init(),w.push(V),h0.enabled===!0&&h0.isPresenting===!0){let u0=P.xr.getDepthSensingMesh();if(u0!==null)M6(u0,n,-1/0,P.sortObjects)}if(M6(z,n,0,P.sortObjects),V.finish(),b!==null)b.updateLights(I.state.lightsArray);if(P.sortObjects===!0)V.sort(h,u);if(HJ=h0.enabled===!1||h0.isPresenting===!1||h0.hasDepthSensing()===!1,HJ)e0.addToRenderList(V,z);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(z0===!0)P0.beginShadows();let Q0=I.state.shadowsArray;if(JJ.render(Q0,z,n),z0===!0)P0.endShadows();if((K0&&L.hasRenderPass())===!1){let{opaque:u0,transmissive:x0}=V;if(I.setupLights(),n.isArrayCamera){let i0=n.cameras;if(x0.length>0)for(let n0=0,qJ=i0.length;n0<qJ;n0++){let DJ=i0[n0];M$(u0,x0,z,DJ)}if(HJ)e0.render(z);for(let n0=0,qJ=i0.length;n0<qJ;n0++){let DJ=i0[n0];gQ(V,z,DJ,DJ.viewport)}}else{if(x0.length>0)M$(u0,x0,z,n);if(HJ)e0.render(z);gQ(V,z,n)}}if(f!==null&&g===0)Z0.updateMultisampleRenderTarget(f),Z0.updateRenderTargetMipmap(f);if(K0)L.end(P);if(z.isScene===!0)z.onAfterRender(P,z,n);if(j0.resetDefaultState(),a=-1,m=null,k.pop(),k.length>0){if(I=k[k.length-1],Z0.setTextureUnits(I.state.textureUnits),z0===!0)P0.setGlobalState(P.clippingPlanes,I.state.camera)}else I=null;if(w.pop(),w.length>0)V=w[w.length-1];else V=null;if(b!==null)b.renderEnd()};function M6(z,n,H0,K0){if(z.visible===!1)return;if(z.layers.test(n.layers)){if(z.isGroup)H0=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(n)}else if(z.isLightProbeGrid)I.pushLightProbeGrid(z);else if(z.isLight){if(I.pushLight(z),z.castShadow)I.pushShadow(z)}else if(z.isSprite){if(!z.frustumCulled||z.intersectsFrustum(F0)){if(K0)S0.setFromMatrixPosition(z.matrixWorld).applyMatrix4(b0);let u0=U0.update(z),x0=z.material;if(x0.visible)V.push(z,u0,x0,H0,S0.z,null,n)}}else if(z.isMesh||z.isLine||z.isPoints){if(!z.frustumCulled||z.intersectsFrustum(F0)){let u0=U0.update(z),x0=z.material;if(K0){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();S0.copy(z.boundingSphere.center)}else{if(u0.boundingSphere===null)u0.computeBoundingSphere();S0.copy(u0.boundingSphere.center)}S0.applyMatrix4(z.matrixWorld).applyMatrix4(b0)}if(Array.isArray(x0)){let i0=u0.groups;for(let n0=0,qJ=i0.length;n0<qJ;n0++){let DJ=i0[n0],a0=x0[DJ.materialIndex];if(a0&&a0.visible)V.push(z,u0,a0,H0,S0.z,DJ,n)}}else if(x0.visible)V.push(z,u0,x0,H0,S0.z,null,n)}}}let w0=z.children;for(let u0=0,x0=w0.length;u0<x0;u0++)M6(w0[u0],n,H0,K0)}function gQ(z,n,H0,K0){let{opaque:Q0,transmissive:w0,transparent:u0}=z;if(I.setupLightsView(H0),z0===!0)P0.setGlobalState(P.clippingPlanes,H0);if(K0)T.viewport(J0.copy(K0));if(Q0.length>0)d9(Q0,n,H0);if(w0.length>0)d9(w0,n,H0);if(u0.length>0)d9(u0,n,H0);T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function M$(z,n,H0,K0){if((H0.isScene===!0?H0.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[K0.id]===void 0){let a0=IJ.has("EXT_color_buffer_half_float")||IJ.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[K0.id]=new Z8(1,1,{generateMipmaps:!0,type:a0?L8:k9,minFilter:Z9,samples:Math.max(4,zJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:RJ.workingColorSpace})}let w0=I.state.transmissionRenderTarget[K0.id],u0=K0.viewport||J0;w0.setSize(u0.z*P.transmissionResolutionScale,u0.w*P.transmissionResolutionScale);let x0=P.getRenderTarget(),i0=P.getActiveCubeFace(),n0=P.getActiveMipmapLevel();if(P.setRenderTarget(w0),P.getClearColor(o),N0=P.getClearAlpha(),N0<1)P.setClearColor(16777215,0.5);if(P.clear(),HJ)e0.render(H0);let qJ=P.toneMapping;P.toneMapping=B9;let DJ=K0.viewport;if(K0.viewport!==void 0)K0.viewport=void 0;if(I.setupLightsView(K0),z0===!0)P0.setGlobalState(P.clippingPlanes,K0);if(d9(z,H0,K0),Z0.updateMultisampleRenderTarget(w0),Z0.updateRenderTargetMipmap(w0),IJ.has("WEBGL_multisampled_render_to_texture")===!1){let a0=!1;for(let vJ=0,aJ=n.length;vJ<aJ;vJ++){let TJ=n[vJ],{object:gJ,geometry:iJ,material:d0,group:N8}=TJ;if(d0.side===oJ&&gJ.layers.test(K0.layers)){let PJ=d0.side;d0.side=D8,d0.needsUpdate=!0,H7(gJ,H0,K0,iJ,d0,N8),d0.side=PJ,d0.needsUpdate=!0,a0=!0}}if(a0===!0)Z0.updateMultisampleRenderTarget(w0),Z0.updateRenderTargetMipmap(w0)}if(P.setRenderTarget(x0,i0,n0),P.setClearColor(o,N0),DJ!==void 0)K0.viewport=DJ;P.toneMapping=qJ}function d9(z,n,H0){let K0=n.isScene===!0?n.overrideMaterial:null;for(let Q0=0,w0=z.length;Q0<w0;Q0++){let u0=z[Q0],{object:x0,geometry:i0,group:n0}=u0,qJ=u0.material;if(qJ.allowOverride===!0&&K0!==null)qJ=K0;if(x0.layers.test(H0.layers))H7(x0,n,H0,i0,qJ,n0)}}function H7(z,n,H0,K0,Q0,w0){if(b!==null&&Q0.isNodeMaterial)b.setObject(z,Q0);if(z.onBeforeRender(P,n,H0,K0,Q0,w0),z.modelViewMatrix.multiplyMatrices(H0.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),Q0.onBeforeRender(P,n,H0,K0,z,w0),Q0.transparent===!0&&Q0.side===oJ&&Q0.forceSinglePass===!1)Q0.side=D8,Q0.needsUpdate=!0,P.renderBufferDirect(H0,n,K0,Q0,z,w0),Q0.side=D7,Q0.needsUpdate=!0,P.renderBufferDirect(H0,n,K0,Q0,z,w0),Q0.side=oJ;else P.renderBufferDirect(H0,n,K0,Q0,z,w0);z.onAfterRender(P,n,H0,K0,Q0,w0)}function C$(z,n,H0){if(n.isScene!==!0)n=ZJ;let K0=c.get(z),Q0=I.state.lights,w0=I.state.shadowsArray,u0=Q0.state.version,x0=O0.getParameters(z,Q0.state,w0,n,H0,I.state.lightProbeGridArray),i0=O0.getProgramCacheKey(x0),n0=K0.programs;K0.environment=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?n.environment:null,K0.fog=n.fog;let qJ=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap;if(K0.envMap=D0.get(z.envMap||K0.environment,qJ),K0.envMapRotation=K0.environment!==null&&z.envMap===null?n.environmentRotation:z.envMapRotation,n0===void 0)z.addEventListener("dispose",o8),n0=new Map,K0.programs=n0;let DJ=n0.get(i0);if(DJ!==void 0){if(K0.currentProgram===DJ&&K0.lightsStateVersion===u0)return pQ(z,x0),DJ}else{if(x0.uniforms=O0.getUniforms(z),b!==null&&z.isNodeMaterial)b.build(z,H0,x0);z.onBeforeCompile(x0,P),DJ=O0.acquireProgram(x0,i0),n0.set(i0,DJ),K0.uniforms=x0.uniforms}let a0=K0.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)a0.clippingPlanes=P0.uniform;if(pQ(z,x0),K0.needsLights=mQ(z),K0.lightsStateVersion=u0,K0.needsLights)a0.ambientLightColor.value=Q0.state.ambient,a0.lightProbe.value=Q0.state.probe,a0.sunLights.value=Q0.state.sun,a0.sunLightShadows.value=Q0.state.sunShadow,a0.directionalLights.value=Q0.state.directional,a0.directionalLightShadows.value=Q0.state.directionalShadow,a0.spotLights.value=Q0.state.spot,a0.spotLightShadows.value=Q0.state.spotShadow,a0.rectAreaLights.value=Q0.state.rectArea,a0.ltc_1.value=Q0.state.rectAreaLTC1,a0.ltc_2.value=Q0.state.rectAreaLTC2,a0.pointLights.value=Q0.state.point,a0.pointLightShadows.value=Q0.state.pointShadow,a0.hemisphereLights.value=Q0.state.hemi,a0.sunShadowMatrix.value=Q0.state.sunShadowMatrix,a0.sunShadowCascade.value=Q0.state.sunShadowCascade,a0.directionalShadowMatrix.value=Q0.state.directionalShadowMatrix,a0.spotLightMatrix.value=Q0.state.spotLightMatrix,a0.spotLightMap.value=Q0.state.spotLightMap,a0.pointShadowMatrix.value=Q0.state.pointShadowMatrix;return K0.lightProbeGrid=I.state.lightProbeGridArray.length>0,K0.currentProgram=DJ,K0.uniformsList=null,DJ}function P$(z){if(z.uniformsList===null){let n=z.currentProgram.getUniforms();z.uniformsList=kQ.seqWithValue(n.seq,z.uniforms)}return z.uniformsList}function pQ(z,n){let H0=c.get(z);H0.outputColorSpace=n.outputColorSpace,H0.batching=n.batching,H0.batchingColor=n.batchingColor,H0.instancing=n.instancing,H0.instancingColor=n.instancingColor,H0.instancingMorph=n.instancingMorph,H0.skinning=n.skinning,H0.morphTargets=n.morphTargets,H0.morphNormals=n.morphNormals,H0.morphColors=n.morphColors,H0.morphTargetsCount=n.morphTargetsCount,H0.numClippingPlanes=n.numClippingPlanes,H0.numIntersection=n.numClipIntersection,H0.vertexAlphas=n.vertexAlphas,H0.vertexTangents=n.vertexTangents,H0.toneMapping=n.toneMapping}function U8(z,n){if(z.length===0)return null;if(z.length===1)return z[0].texture!==null?z[0]:null;M.setFromMatrixPosition(n.matrixWorld);for(let H0=0,K0=z.length;H0<K0;H0++){let Q0=z[H0];if(Q0.texture!==null&&Q0.boundingBox.containsPoint(M))return Q0}return null}function F9(z,n,H0,K0,Q0){if(n.isScene!==!0)n=ZJ;Z0.resetTextureUnits();let w0=n.fog,u0=K0.isMeshStandardMaterial||K0.isMeshLambertMaterial||K0.isMeshPhongMaterial?n.environment:null,x0=f===null?P.outputColorSpace:f.isXRRenderTarget===!0?f.texture.colorSpace:RJ.workingColorSpace,i0=K0.isMeshStandardMaterial||K0.isMeshLambertMaterial&&!K0.envMap||K0.isMeshPhongMaterial&&!K0.envMap,n0=D0.get(K0.envMap||u0,i0),qJ=K0.vertexColors===!0&&!!H0.attributes.color&&H0.attributes.color.itemSize===4,DJ=!!H0.attributes.tangent&&(!!K0.normalMap||K0.anisotropy>0),a0=!!H0.morphAttributes.position,vJ=!!H0.morphAttributes.normal,aJ=!!H0.morphAttributes.color,TJ=B9;if(K0.toneMapped){if(f===null||f.isXRRenderTarget===!0)TJ=P.toneMapping}let gJ=H0.morphAttributes.position||H0.morphAttributes.normal||H0.morphAttributes.color,iJ=gJ!==void 0?gJ.length:0,d0=c.get(K0),N8=I.state.lights;if(z0===!0){if(B0===!0||z!==m){let sJ=z===m&&K0.id===a;P0.setState(K0,z,sJ)}}let PJ=!1;if(K0.version===d0.__version){if(d0.needsLights&&d0.lightsStateVersion!==N8.state.version)PJ=!0;else if(d0.outputColorSpace!==x0)PJ=!0;else if(Q0.isBatchedMesh&&d0.batching===!1)PJ=!0;else if(!Q0.isBatchedMesh&&d0.batching===!0)PJ=!0;else if(Q0.isBatchedMesh&&d0.batchingColor===!0&&Q0._colorsTexture===null)PJ=!0;else if(Q0.isBatchedMesh&&d0.batchingColor===!1&&Q0._colorsTexture!==null)PJ=!0;else if(Q0.isInstancedMesh&&d0.instancing===!1)PJ=!0;else if(!Q0.isInstancedMesh&&d0.instancing===!0)PJ=!0;else if(Q0.isSkinnedMesh&&d0.skinning===!1)PJ=!0;else if(!Q0.isSkinnedMesh&&d0.skinning===!0)PJ=!0;else if(Q0.isInstancedMesh&&d0.instancingColor===!0&&Q0.instanceColor===null)PJ=!0;else if(Q0.isInstancedMesh&&d0.instancingColor===!1&&Q0.instanceColor!==null)PJ=!0;else if(Q0.isInstancedMesh&&d0.instancingMorph===!0&&Q0.morphTexture===null)PJ=!0;else if(Q0.isInstancedMesh&&d0.instancingMorph===!1&&Q0.morphTexture!==null)PJ=!0;else if(d0.envMap!==n0)PJ=!0;else if(K0.fog===!0&&d0.fog!==w0)PJ=!0;else if(d0.numClippingPlanes!==void 0&&(d0.numClippingPlanes!==P0.numPlanes||d0.numIntersection!==P0.numIntersection))PJ=!0;else if(d0.vertexAlphas!==qJ)PJ=!0;else if(d0.vertexTangents!==DJ)PJ=!0;else if(d0.morphTargets!==a0)PJ=!0;else if(d0.morphNormals!==vJ)PJ=!0;else if(d0.morphColors!==aJ)PJ=!0;else if(d0.toneMapping!==TJ)PJ=!0;else if(d0.morphTargetsCount!==iJ)PJ=!0;else if(!!d0.lightProbeGrid!==I.state.lightProbeGridArray.length>0)PJ=!0}else PJ=!0,d0.__version=K0.version;let v8=d0.currentProgram;if(PJ===!0){if(v8=C$(K0,n,Q0),b&&K0.isNodeMaterial)b.onUpdateProgram(K0,v8,d0)}let C8=!1,t8=!1,c9=!1,hJ=v8.getUniforms(),rJ=d0.uniforms;if(T.useProgram(v8.program))C8=!0,t8=!0,c9=!0;if(K0.id!==a)a=K0.id,t8=!0;if(d0.needsLights){let sJ=U8(I.state.lightProbeGridArray,Q0);if(d0.lightProbeGrid!==sJ)d0.lightProbeGrid=sJ,t8=!0}if(C8||m!==z){if(T.buffers.depth.getReversed()&&z.reversedDepth!==!0)z._reversedDepth=!0,z.updateProjectionMatrix();hJ.setValue(p,"projectionMatrix",z.projectionMatrix),hJ.setValue(p,"viewMatrix",z.matrixWorldInverse);let P8=hJ.map.cameraPosition;if(P8!==void 0)P8.setValue(p,r0.setFromMatrixPosition(z.matrixWorld));if(zJ.logarithmicDepthBuffer)hJ.setValue(p,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(K0.isMeshPhongMaterial||K0.isMeshToonMaterial||K0.isMeshLambertMaterial||K0.isMeshBasicMaterial||K0.isMeshStandardMaterial||K0.isShaderMaterial)hJ.setValue(p,"isOrthographic",z.isOrthographicCamera===!0);if(m!==z)m=z,t8=!0,c9=!0}if(d0.needsLights){if(N8.state.sunShadowMap.length>0)hJ.setValue(p,"sunShadowMap",N8.state.sunShadowMap,Z0);if(N8.state.directionalShadowMap.length>0)hJ.setValue(p,"directionalShadowMap",N8.state.directionalShadowMap,Z0);if(N8.state.spotShadowMap.length>0)hJ.setValue(p,"spotShadowMap",N8.state.spotShadowMap,Z0);if(N8.state.pointShadowMap.length>0)hJ.setValue(p,"pointShadowMap",N8.state.pointShadowMap,Z0)}if(Q0.isSkinnedMesh){hJ.setOptional(p,Q0,"bindMatrix"),hJ.setOptional(p,Q0,"bindMatrixInverse");let sJ=Q0.skeleton;if(sJ){if(sJ.boneTexture===null)sJ.computeBoneTexture();hJ.setValue(p,"boneTexture",sJ.boneTexture,Z0)}}if(Q0.isBatchedMesh){if(hJ.setOptional(p,Q0,"batchingTexture"),hJ.setValue(p,"batchingTexture",Q0._matricesTexture,Z0),hJ.setOptional(p,Q0,"batchingIdTexture"),hJ.setValue(p,"batchingIdTexture",Q0._indirectTexture,Z0),hJ.setOptional(p,Q0,"batchingColorTexture"),Q0._colorsTexture!==null)hJ.setValue(p,"batchingColorTexture",Q0._colorsTexture,Z0)}let E9=H0.morphAttributes;if(E9.position!==void 0||E9.normal!==void 0||E9.color!==void 0)AJ.update(Q0,H0,v8);if(t8||d0.receiveShadow!==Q0.receiveShadow)d0.receiveShadow=Q0.receiveShadow,hJ.setValue(p,"receiveShadow",Q0.receiveShadow);if((K0.isMeshStandardMaterial||K0.isMeshLambertMaterial||K0.isMeshPhongMaterial)&&K0.envMap===null&&n.environment!==null)rJ.envMapIntensity.value=n.environmentIntensity;if(rJ.dfgLUT!==void 0)rJ.dfgLUT.value=rO();if(t8){if(hJ.setValue(p,"toneMappingExposure",P.toneMappingExposure),d0.needsLights)fK(rJ,c9);if(w0&&K0.fog===!0)_0.refreshFogUniforms(rJ,w0);if(_0.refreshMaterialUniforms(rJ,K0,_,x,I.state.transmissionRenderTarget[z.id]),d0.needsLights&&d0.lightProbeGrid){let sJ=d0.lightProbeGrid;rJ.probesSH.value=sJ.texture,rJ.probesMin.value.copy(sJ.boundingBox.min),rJ.probesMax.value.copy(sJ.boundingBox.max),rJ.probesResolution.value.copy(sJ.resolution)}kQ.upload(p,P$(d0),rJ,Z0)}if(K0.isShaderMaterial&&K0.uniformsNeedUpdate===!0)kQ.upload(p,P$(d0),rJ,Z0),K0.uniformsNeedUpdate=!1;if(K0.isSpriteMaterial)hJ.setValue(p,"center",Q0.center);if(hJ.setValue(p,"modelViewMatrix",Q0.modelViewMatrix),hJ.setValue(p,"normalMatrix",Q0.normalMatrix),hJ.setValue(p,"modelMatrix",Q0.matrixWorld),K0.uniformsGroups!==void 0){let sJ=K0.uniformsGroups;for(let P8=0,U7=sJ.length;P8<U7;P8++){let lQ=sJ[P8];l0.update(lQ,v8),l0.bind(lQ,v8)}}return v8}function fK(z,n){z.ambientLightColor.needsUpdate=n,z.lightProbe.needsUpdate=n,z.sunLights.needsUpdate=n,z.sunLightShadows.needsUpdate=n,z.directionalLights.needsUpdate=n,z.directionalLightShadows.needsUpdate=n,z.pointLights.needsUpdate=n,z.pointLightShadows.needsUpdate=n,z.spotLights.needsUpdate=n,z.spotLightShadows.needsUpdate=n,z.rectAreaLights.needsUpdate=n,z.hemisphereLights.needsUpdate=n}function mQ(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return f},this.setRenderTargetTextures=function(z,n,H0){let K0=c.get(z);if(K0.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,K0.__autoAllocateDepthBuffer===!1)K0.__useRenderToTexture=!1;c.get(z.texture).__webglTexture=n,c.get(z.depthTexture).__webglTexture=K0.__autoAllocateDepthBuffer?void 0:H0,K0.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,n){let H0=c.get(z);H0.__webglFramebuffer=n,H0.__useDefaultFramebuffer=n===void 0},this.setRenderTarget=function(z,n=0,H0=0){f=z,j=n,g=H0;let K0=null,Q0=!1,w0=!1;if(z){let x0=c.get(z);if(x0.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(p.FRAMEBUFFER,x0.__webglFramebuffer),J0.copy(z.viewport),X0.copy(z.scissor),y=z.scissorTest,T.viewport(J0),T.scissor(X0),T.setScissorTest(y),a=-1;return}else if(x0.__webglFramebuffer===void 0)Z0.setupRenderTarget(z);else if(x0.__hasExternalTextures)Z0.rebindTextures(z,c.get(z.texture).__webglTexture,c.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let qJ=z.depthTexture;if(x0.__boundDepthTexture!==qJ){if(qJ!==null&&c.has(qJ)&&(z.width!==qJ.image.width||z.height!==qJ.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z0.setupDepthRenderbuffer(z)}}let i0=z.texture;if(i0.isData3DTexture||i0.isDataArrayTexture||i0.isCompressedArrayTexture)w0=!0;let n0=c.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(n0[n]))K0=n0[n][H0];else K0=n0[n];Q0=!0}else if(z.samples>0&&Z0.useMultisampledRTT(z)===!1)K0=c.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(n0))K0=n0[H0];else K0=n0;J0.copy(z.viewport),X0.copy(z.scissor),y=z.scissorTest}else J0.copy(W0).multiplyScalar(_).floor(),X0.copy($0).multiplyScalar(_).floor(),y=q0;if(H0!==0)K0=d;if(T.bindFramebuffer(p.FRAMEBUFFER,K0))T.drawBuffers(z,K0);if(T.viewport(J0),T.scissor(X0),T.setScissorTest(y),Q0){let x0=c.get(z.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_CUBE_MAP_POSITIVE_X+n,x0.__webglTexture,H0)}else if(w0){let x0=n;for(let i0=0;i0<z.textures.length;i0++){let n0=c.get(z.textures[i0]);p.framebufferTextureLayer(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0+i0,n0.__webglTexture,H0,x0)}}else if(z!==null&&H0!==0){let x0=c.get(z.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,x0.__webglTexture,H0)}a=-1};function C6(z){let n=c.get(z);if(n.__readFormat!==z.format||n.__readType!==z.type)n.__readFormat=z.format,n.__readType=z.type,n.__formatReadable=zJ.textureFormatReadable(z.format),n.__typeReadable=zJ.textureTypeReadable(z.type);return n}if(this.readRenderTargetPixels=function(z,n,H0,K0,Q0,w0,u0,x0=0){if(!(z&&z.isWebGLRenderTarget)){KJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let i0=c.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&u0!==void 0)i0=i0[u0];if(i0){T.bindFramebuffer(p.FRAMEBUFFER,i0);try{let n0=z.textures[x0],qJ=n0.format,DJ=n0.type;if(z.textures.length>1)p.readBuffer(p.COLOR_ATTACHMENT0+x0);let a0=C6(n0);if(a0.__formatReadable===!1){KJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(a0.__typeReadable===!1){KJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(n>=0&&n<=z.width-K0&&(H0>=0&&H0<=z.height-Q0))p.readPixels(n,H0,K0,Q0,G0.convert(qJ),G0.convert(DJ),w0)}finally{let n0=f!==null?c.get(f).__webglFramebuffer:null;T.bindFramebuffer(p.FRAMEBUFFER,n0)}}},this.readRenderTargetPixelsAsync=async function(z,n,H0,K0,Q0,w0,u0,x0=0){if(!(z&&z.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let i0=c.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&u0!==void 0)i0=i0[u0];if(i0)if(n>=0&&n<=z.width-K0&&(H0>=0&&H0<=z.height-Q0)){T.bindFramebuffer(p.FRAMEBUFFER,i0);let n0=z.textures[x0],qJ=n0.format,DJ=n0.type;if(z.textures.length>1)p.readBuffer(p.COLOR_ATTACHMENT0+x0);let a0=C6(n0);if(a0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(a0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vJ=p.createBuffer();p.bindBuffer(p.PIXEL_PACK_BUFFER,vJ),p.bufferData(p.PIXEL_PACK_BUFFER,w0.byteLength,p.STREAM_READ),p.readPixels(n,H0,K0,Q0,G0.convert(qJ),G0.convert(DJ),0),p.bindBuffer(p.PIXEL_PACK_BUFFER,null);let aJ=f!==null?c.get(f).__webglFramebuffer:null;T.bindFramebuffer(p.FRAMEBUFFER,aJ);let TJ=p.fenceSync(p.SYNC_GPU_COMMANDS_COMPLETE,0);return p.flush(),await MU(p,TJ,4),p.bindBuffer(p.PIXEL_PACK_BUFFER,vJ),p.getBufferSubData(p.PIXEL_PACK_BUFFER,0,w0),p.bindBuffer(p.PIXEL_PACK_BUFFER,null),p.deleteBuffer(vJ),p.deleteSync(TJ),w0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,n=null,H0=0){let K0=Math.pow(2,-H0),Q0=Math.floor(z.image.width*K0),w0=Math.floor(z.image.height*K0),u0=n!==null?n.x:0,x0=n!==null?n.y:0;Z0.setTexture2D(z,0),p.copyTexSubImage2D(p.TEXTURE_2D,H0,0,0,u0,x0,Q0,w0),T.unbindTexture()},this.copyTextureToTexture=function(z,n,H0=null,K0=null,Q0=0,w0=0){let u0,x0,i0,n0,qJ,DJ,a0,vJ,aJ,TJ=z.isCompressedTexture?z.mipmaps[w0]:z.image;if(H0!==null)u0=H0.max.x-H0.min.x,x0=H0.max.y-H0.min.y,i0=H0.isBox3?H0.max.z-H0.min.z:1,n0=H0.min.x,qJ=H0.min.y,DJ=H0.isBox3?H0.min.z:0;else{let rJ=Math.pow(2,-Q0);if(u0=Math.floor(TJ.width*rJ),x0=Math.floor(TJ.height*rJ),z.isDataArrayTexture)i0=TJ.depth;else if(z.isData3DTexture)i0=Math.floor(TJ.depth*rJ);else i0=1;n0=0,qJ=0,DJ=0}if(K0!==null)a0=K0.x,vJ=K0.y,aJ=K0.z;else a0=0,vJ=0,aJ=0;let gJ=G0.convert(n.format),iJ=G0.convert(n.type),d0;if(n.isData3DTexture)Z0.setTexture3D(n,0),d0=p.TEXTURE_3D;else if(n.isDataArrayTexture||n.isCompressedArrayTexture)Z0.setTexture2DArray(n,0),d0=p.TEXTURE_2D_ARRAY;else Z0.setTexture2D(n,0),d0=p.TEXTURE_2D;T.activeTexture(p.TEXTURE0),T.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,n.flipY),T.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),T.pixelStorei(p.UNPACK_ALIGNMENT,n.unpackAlignment);let N8=T.getParameter(p.UNPACK_ROW_LENGTH),PJ=T.getParameter(p.UNPACK_IMAGE_HEIGHT),v8=T.getParameter(p.UNPACK_SKIP_PIXELS),C8=T.getParameter(p.UNPACK_SKIP_ROWS),t8=T.getParameter(p.UNPACK_SKIP_IMAGES);T.pixelStorei(p.UNPACK_ROW_LENGTH,TJ.width),T.pixelStorei(p.UNPACK_IMAGE_HEIGHT,TJ.height),T.pixelStorei(p.UNPACK_SKIP_PIXELS,n0),T.pixelStorei(p.UNPACK_SKIP_ROWS,qJ),T.pixelStorei(p.UNPACK_SKIP_IMAGES,DJ);let c9=z.isDataArrayTexture||z.isData3DTexture,hJ=n.isDataArrayTexture||n.isData3DTexture;if(z.isDepthTexture){let rJ=c.get(z),E9=c.get(n),sJ=c.get(rJ.__renderTarget),P8=c.get(E9.__renderTarget);T.bindFramebuffer(p.READ_FRAMEBUFFER,sJ.__webglFramebuffer),T.bindFramebuffer(p.DRAW_FRAMEBUFFER,P8.__webglFramebuffer);for(let U7=0;U7<i0;U7++){if(c9)p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,c.get(z).__webglTexture,Q0,DJ+U7),p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,c.get(n).__webglTexture,w0,aJ+U7);p.blitFramebuffer(n0,qJ,u0,x0,a0,vJ,u0,x0,p.DEPTH_BUFFER_BIT,p.NEAREST)}T.bindFramebuffer(p.READ_FRAMEBUFFER,null),T.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else if(Q0!==0||z.isRenderTargetTexture||c.has(z)){let rJ=c.get(z),E9=c.get(n);T.bindFramebuffer(p.READ_FRAMEBUFFER,e),T.bindFramebuffer(p.DRAW_FRAMEBUFFER,v);for(let sJ=0;sJ<i0;sJ++){if(c9)p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,rJ.__webglTexture,Q0,DJ+sJ);else p.framebufferTexture2D(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,rJ.__webglTexture,Q0);if(hJ)p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,E9.__webglTexture,w0,aJ+sJ);else p.framebufferTexture2D(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,E9.__webglTexture,w0);if(Q0!==0)p.blitFramebuffer(n0,qJ,u0,x0,a0,vJ,u0,x0,p.COLOR_BUFFER_BIT,p.NEAREST);else if(hJ)p.copyTexSubImage3D(d0,w0,a0,vJ,aJ+sJ,n0,qJ,u0,x0);else p.copyTexSubImage2D(d0,w0,a0,vJ,n0,qJ,u0,x0)}T.bindFramebuffer(p.READ_FRAMEBUFFER,null),T.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else if(hJ)if(z.isDataTexture||z.isData3DTexture)p.texSubImage3D(d0,w0,a0,vJ,aJ,u0,x0,i0,gJ,iJ,TJ.data);else if(n.isCompressedArrayTexture)p.compressedTexSubImage3D(d0,w0,a0,vJ,aJ,u0,x0,i0,gJ,TJ.data);else p.texSubImage3D(d0,w0,a0,vJ,aJ,u0,x0,i0,gJ,iJ,TJ);else if(z.isDataTexture)p.texSubImage2D(p.TEXTURE_2D,w0,a0,vJ,u0,x0,gJ,iJ,TJ.data);else if(z.isCompressedTexture)p.compressedTexSubImage2D(p.TEXTURE_2D,w0,a0,vJ,TJ.width,TJ.height,gJ,TJ.data);else p.texSubImage2D(p.TEXTURE_2D,w0,a0,vJ,u0,x0,gJ,iJ,TJ);if(T.pixelStorei(p.UNPACK_ROW_LENGTH,N8),T.pixelStorei(p.UNPACK_IMAGE_HEIGHT,PJ),T.pixelStorei(p.UNPACK_SKIP_PIXELS,v8),T.pixelStorei(p.UNPACK_SKIP_ROWS,C8),T.pixelStorei(p.UNPACK_SKIP_IMAGES,t8),w0===0&&n.generateMipmaps)p.generateMipmap(d0);T.unbindTexture()},this.initRenderTarget=function(z){if(c.get(z).__webglFramebuffer===void 0)Z0.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)Z0.setTextureCube(z,0);else if(z.isData3DTexture)Z0.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Z0.setTexture2DArray(z,0);else Z0.setTexture2D(z,0);T.unbindTexture()},this.resetState=function(){j=0,g=0,f=null,T.reset(),j0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return UY}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let $=this.getContext();$.drawingBufferColorSpace=RJ._getDrawingBufferColorSpace(J),$.unpackColorSpace=RJ._getUnpackColorSpace()}}function E$(J,$=!1){let Q=J[0].index!==null,Z=new Set(Object.keys(J[0].attributes)),K=new Set(Object.keys(J[0].morphAttributes)),W={},Y={},X=J[0].morphTargetsRelative,H=new bJ,U=0;for(let N=0;N<J.length;++N){let F=J[N],G=0;if(Q!==(F.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let q in F.attributes){if(!Z.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+'. All geometries must have compatible attributes; make sure "'+q+'" attribute exists among all geometries, or in none of them.'),null;if(W[q]===void 0)W[q]=[];W[q].push(F.attributes[q]),G++}if(G!==Z.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". Make sure all geometries have the same number of attributes."),null;if(X!==F.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let q in F.morphAttributes){if(!K.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+".  .morphAttributes must be consistent throughout all geometries."),null;if(Y[q]===void 0)Y[q]=[];Y[q].push(F.morphAttributes[q])}if($){let q;if(Q)q=F.index.count;else if(F.attributes.position!==void 0)q=F.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". The geometry must have either an index or a position attribute"),null;H.addGroup(U,q,N),U+=q}}if(Q){let N=0,F=[];for(let G=0;G<J.length;++G){let q=J[G].index;for(let O=0;O<q.count;++O)F.push(q.getX(O)+N);N+=J[G].attributes.position.count}H.setIndex(F)}for(let N in W){let F=B5(W[N]);if(!F)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" attribute."),null;H.setAttribute(N,F)}for(let N in Y){let F=Y[N][0].length;if(F===0)continue;H.morphAttributes=H.morphAttributes||{},H.morphAttributes[N]=[];for(let G=0;G<F;++G){let q=[];for(let B=0;B<Y[N].length;++B)q.push(Y[N][B][G]);let O=B5(q);if(!O)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" morphAttribute."),null;H.morphAttributes[N].push(O)}}return H}function B5(J){let $,Q,Z,K=-1,W=0;for(let U=0;U<J.length;++U){let N=J[U];if($===void 0)$=N.array.constructor;if($!==N.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(Q===void 0)Q=N.itemSize;if(Q!==N.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(Z===void 0)Z=N.normalized;if(Z!==N.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(K===-1)K=N.gpuType;if(K!==N.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;W+=N.count*Q}let Y=new $(W),X=new tJ(Y,Q,Z),H=0;for(let U=0;U<J.length;++U){let N=J[U];if(N.isInterleavedBufferAttribute){let F=H/Q;for(let G=0,q=N.count;G<q;G++)for(let O=0;O<Q;O++){let B=N.getComponent(G,O);X.setComponent(G+F,O,B)}}else Y.set(N.array,H);H+=N.count*Q}if(K!==void 0)X.gpuType=K;return X}function sY(J,$){if($===WY)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if($===$$||$===ZQ){let Q=J.getIndex();if(Q===null){let W=[],Y=J.getAttribute("position");if(Y!==void 0){for(let X=0;X<Y.count;X++)W.push(X);J.setIndex(W),Q=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=Q.count-2,K=[];if($===$$)for(let W=1;W<=Z;W++)K.push(Q.getX(0)),K.push(Q.getX(W)),K.push(Q.getX(W+1));else for(let W=0;W<Z;W++)if(W%2===0)K.push(Q.getX(W)),K.push(Q.getX(W+1)),K.push(Q.getX(W+2));else K.push(Q.getX(W+2)),K.push(Q.getX(W+1)),K.push(Q.getX(W));if(K.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(K),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",$),J}function q$(J){let $=new Map,Q=new Map,Z=J.clone();return D5(J,Z,function(K,W){$.set(W,K),Q.set(K,W)}),Z.traverse(function(K){if(!K.isSkinnedMesh)return;let W=K,Y=$.get(K),X=Y.skeleton.bones;W.skeleton=Y.skeleton.clone(),W.bindMatrix.copy(Y.bindMatrix),W.skeleton.bones=X.map(function(H){return Q.get(H)}),W.bind(W.skeleton,W.bindMatrix)}),Z}function D5(J,$,Q){Q(J,$);for(let Z=0;Z<J.children.length;Z++)D5(J.children[Z],$.children[Z],Q)}class JX extends K7{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function($){return new _5($)}),this.register(function($){return new T5($)}),this.register(function($){return new x5($)}),this.register(function($){return new g5($)}),this.register(function($){return new p5($)}),this.register(function($){return new S5($)}),this.register(function($){return new j5($)}),this.register(function($){return new y5($)}),this.register(function($){return new v5($)}),this.register(function($){return new A5($)}),this.register(function($){return new f5($)}),this.register(function($){return new w5($)}),this.register(function($){return new h5($)}),this.register(function($){return new b5($)}),this.register(function($){return new I5($)}),this.register(function($){return new rY($,CJ.EXT_MESHOPT_COMPRESSION)}),this.register(function($){return new rY($,CJ.KHR_MESHOPT_COMPRESSION)}),this.register(function($){return new m5($)})}load(J,$,Q,Z){let K=this,W;if(this.resourcePath!=="")W=this.resourcePath;else if(this.path!==""){let H=T7.extractUrlBase(J);W=T7.resolveURL(H,this.path)}else W=T7.extractUrlBase(J);this.manager.itemStart(J);let Y=function(H){if(Z)Z(H);else console.error(H);K.manager.itemError(J),K.manager.itemEnd(J)},X=new qQ(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(H){try{K.parse(H,W,function(U){$(U),K.manager.itemEnd(J)},Y)}catch(U){Y(U)}},Q,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,$,Q,Z){let K,W={},Y={},X=new TextDecoder;if(typeof J==="string")K=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===l5){try{W[CJ.KHR_BINARY_GLTF]=new u5(J)}catch(N){if(Z)Z(N);return}K=JSON.parse(W[CJ.KHR_BINARY_GLTF].content)}else K=JSON.parse(X.decode(J));else K=J;if(K.asset===void 0||K.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let H=new i5(K,{path:$||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});H.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let N=this.pluginCallbacks[U](H);if(!N.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[N.name]=N,W[N.name]=!0}if(K.extensionsUsed)for(let U=0;U<K.extensionsUsed.length;++U){let N=K.extensionsUsed[U],F=K.extensionsRequired||[];switch(N){case CJ.KHR_MATERIALS_UNLIT:W[N]=new z5;break;case CJ.KHR_DRACO_MESH_COMPRESSION:W[N]=new d5(K,this.dracoLoader);break;case CJ.KHR_TEXTURE_TRANSFORM:W[N]=new c5;break;case CJ.KHR_MESH_QUANTIZATION:W[N]=new n5;break;default:if(F.indexOf(N)>=0&&Y[N]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+N+'".')}}H.setExtensions(W),H.setPlugins(Y),H.parse(Q,Z)}parseAsync(J,$){let Q=this;return new Promise(function(Z,K){Q.parse(J,$,Z,K)})}}function tO(){let J={};return{get:function($){return J[$]},add:function($,Q){J[$]=Q},remove:function($){delete J[$]},removeAll:function(){J={}}}}function K8(J,$,Q){let Z=J.json.materials[$];if(Z.extensions&&Z.extensions[Q])return Z.extensions[Q];return null}var CJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class I5{constructor(J){this.parser=J,this.name=CJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,$=this.parser.json.nodes||[];for(let Q=0,Z=$.length;Q<Z;Q++){let K=$[Q];if(K.extensions&&K.extensions[this.name]&&K.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,K.extensions[this.name].light)}}_loadLight(J){let $=this.parser,Q="light:"+J,Z=$.cache.get(Q);if(Z)return Z;let K=$.json,X=((K.extensions&&K.extensions[this.name]||{}).lights||[])[J],H,U=new y0(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],c8);let N=X.range!==void 0?X.range:0;switch(X.type){case"directional":H=new U$(U),H.target.position.set(0,0,-1),H.add(H.target);break;case"point":H=new W7(U),H.distance=N;break;case"spot":H=new H$(U),H.distance=N,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,H.angle=X.spot.outerConeAngle,H.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,H.target.position.set(0,0,-1),H.add(H.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(H.position.set(0,0,0),g9(H,X),X.intensity!==void 0)H.intensity=X.intensity;return H.name=$.createUniqueName(X.name||"light_"+J),Z=Promise.resolve(H),$.cache.add(Q,Z),Z}getDependency(J,$){if(J!=="light")return;return this._loadLight($)}createNodeAttachment(J){let $=this,Q=this.parser,K=Q.json.nodes[J],Y=(K.extensions&&K.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return Q._getNodeRef($.cache,Y,X)})}}class z5{constructor(){this.name=CJ.KHR_MATERIALS_UNLIT}getMaterialType(){return xJ}extendParams(J,$,Q){let Z=[];J.color=new y0(1,1,1),J.opacity=1;let K=$.pbrMetallicRoughness;if(K){if(Array.isArray(K.baseColorFactor)){let W=K.baseColorFactor;J.color.setRGB(W[0],W[1],W[2],c8),J.opacity=W[3]}if(K.baseColorTexture!==void 0)Z.push(Q.assignTexture(J,"map",K.baseColorTexture,Q8))}return Promise.all(Z)}}class A5{constructor(J){this.parser=J,this.name=CJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();if(Q.emissiveStrength!==void 0)$.emissiveIntensity=Q.emissiveStrength;return Promise.resolve()}}class _5{constructor(J){this.parser=J,this.name=CJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.clearcoatFactor!==void 0)$.clearcoat=Q.clearcoatFactor;if(Q.clearcoatTexture!==void 0)Z.push(this.parser.assignTexture($,"clearcoatMap",Q.clearcoatTexture));if(Q.clearcoatRoughnessFactor!==void 0)$.clearcoatRoughness=Q.clearcoatRoughnessFactor;if(Q.clearcoatRoughnessTexture!==void 0)Z.push(this.parser.assignTexture($,"clearcoatRoughnessMap",Q.clearcoatRoughnessTexture));if(Q.clearcoatNormalTexture!==void 0){if(Z.push(this.parser.assignTexture($,"clearcoatNormalMap",Q.clearcoatNormalTexture)),Q.clearcoatNormalTexture.scale!==void 0){let K=Q.clearcoatNormalTexture.scale;$.clearcoatNormalScale=new R0(K,K)}}return Promise.all(Z)}}class T5{constructor(J){this.parser=J,this.name=CJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();return $.dispersion=Q.dispersion!==void 0?Q.dispersion:0,Promise.resolve()}}class w5{constructor(J){this.parser=J,this.name=CJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.iridescenceFactor!==void 0)$.iridescence=Q.iridescenceFactor;if(Q.iridescenceTexture!==void 0)Z.push(this.parser.assignTexture($,"iridescenceMap",Q.iridescenceTexture));if(Q.iridescenceIor!==void 0)$.iridescenceIOR=Q.iridescenceIor;if($.iridescenceThicknessRange===void 0)$.iridescenceThicknessRange=[100,400];if(Q.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessRange[0]=Q.iridescenceThicknessMinimum;if(Q.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessRange[1]=Q.iridescenceThicknessMaximum;if(Q.iridescenceThicknessTexture!==void 0)Z.push(this.parser.assignTexture($,"iridescenceThicknessMap",Q.iridescenceThicknessTexture));return Promise.all(Z)}}class S5{constructor(J){this.parser=J,this.name=CJ.KHR_MATERIALS_SHEEN}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.sheenColor=new y0(0,0,0),$.sheenRoughness=0,$.sheen=1,Q.sheenColorFactor!==void 0){let K=Q.sheenColorFactor;$.sheenColor.setRGB(K[0],K[1],K[2],c8)}if(Q.sheenRoughnessFactor!==void 0)$.sheenRoughness=Q.sheenRoughnessFactor;if(Q.sheenColorTexture!==void 0)Z.push(this.parser.assignTexture($,"sheenColorMap",Q.sheenColorTexture,Q8));if(Q.sheenRoughnessTexture!==void 0)Z.push(this.parser.assignTexture($,"sheenRoughnessMap",Q.sheenRoughnessTexture));return Promise.all(Z)}}class j5{constructor(J){this.parser=J,this.name=CJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.transmissionFactor!==void 0)$.transmission=Q.transmissionFactor;if(Q.transmissionTexture!==void 0)Z.push(this.parser.assignTexture($,"transmissionMap",Q.transmissionTexture));return Promise.all(Z)}}class y5{constructor(J){this.parser=J,this.name=CJ.KHR_MATERIALS_VOLUME}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.thickness=Q.thicknessFactor!==void 0?Q.thicknessFactor:0,Q.thicknessTexture!==void 0)Z.push(this.parser.assignTexture($,"thicknessMap",Q.thicknessTexture));$.attenuationDistance=Q.attenuationDistance||1/0;let K=Q.attenuationColor||[1,1,1];return $.attenuationColor=new y0().setRGB(K[0],K[1],K[2],c8),Promise.all(Z)}}class v5{constructor(J){this.parser=J,this.name=CJ.KHR_MATERIALS_IOR}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();if($.ior=Q.ior!==void 0?Q.ior:1.5,$.ior===0)$.ior=1000;return Promise.resolve()}}class f5{constructor(J){this.parser=J,this.name=CJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.specularIntensity=Q.specularFactor!==void 0?Q.specularFactor:1,Q.specularTexture!==void 0)Z.push(this.parser.assignTexture($,"specularIntensityMap",Q.specularTexture));let K=Q.specularColorFactor||[1,1,1];if($.specularColor=new y0().setRGB(K[0],K[1],K[2],c8),Q.specularColorTexture!==void 0)Z.push(this.parser.assignTexture($,"specularColorMap",Q.specularColorTexture,Q8));return Promise.all(Z)}}class b5{constructor(J){this.parser=J,this.name=CJ.EXT_MATERIALS_BUMP}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.bumpScale=Q.bumpFactor!==void 0?Q.bumpFactor:1,Q.bumpTexture!==void 0)Z.push(this.parser.assignTexture($,"bumpMap",Q.bumpTexture));return Promise.all(Z)}}class h5{constructor(J){this.parser=J,this.name=CJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return K8(this.parser,J,this.name)!==null?V8:null}extendMaterialParams(J,$){let Q=K8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.anisotropyStrength!==void 0)$.anisotropy=Q.anisotropyStrength;if(Q.anisotropyRotation!==void 0)$.anisotropyRotation=Q.anisotropyRotation;if(Q.anisotropyTexture!==void 0)Z.push(this.parser.assignTexture($,"anisotropyMap",Q.anisotropyTexture));return Promise.all(Z)}}class x5{constructor(J){this.parser=J,this.name=CJ.KHR_TEXTURE_BASISU}loadTexture(J){let $=this.parser,Q=$.json,Z=Q.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let K=Z.extensions[this.name],W=$.options.ktx2Loader;if(!W)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return $.loadTextureImage(J,K.source,W)}}class g5{constructor(J){this.parser=J,this.name=CJ.EXT_TEXTURE_WEBP}loadTexture(J){let $=this.name,Q=this.parser,Z=Q.json,K=Z.textures[J];if(!K.extensions||!K.extensions[$])return null;let W=K.extensions[$],Y=Z.images[W.source],X=Q.textureLoader;if(Y.uri){let H=Q.options.manager.getHandler(Y.uri);if(H!==null)X=H}return Q.loadTextureImage(J,W.source,X)}}class p5{constructor(J){this.parser=J,this.name=CJ.EXT_TEXTURE_AVIF}loadTexture(J){let $=this.name,Q=this.parser,Z=Q.json,K=Z.textures[J];if(!K.extensions||!K.extensions[$])return null;let W=K.extensions[$],Y=Z.images[W.source],X=Q.textureLoader;if(Y.uri){let H=Q.options.manager.getHandler(Y.uri);if(H!==null)X=H}return Q.loadTextureImage(J,W.source,X)}}class rY{constructor(J,$){this.name=$,this.parser=J}loadBufferView(J){let $=this.parser.json,Q=$.bufferViews[J];if(Q.extensions&&Q.extensions[this.name]){let Z=Q.extensions[this.name],K=this.parser.getDependency("buffer",Z.buffer),W=this.parser.options.meshoptDecoder;if(!W||!W.supported)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return K.then(function(Y){let X=Z.byteOffset||0,H=Z.byteLength||0,U=Z.count,N=Z.byteStride,F=new Uint8Array(Y,X,H);if(W.decodeGltfBufferAsync)return W.decodeGltfBufferAsync(U,N,F,Z.mode,Z.filter).then(function(G){return G.buffer});else return W.ready.then(function(){let G=new ArrayBuffer(U*N);return W.decodeGltfBuffer(new Uint8Array(G),U,N,F,Z.mode,Z.filter),G})})}else return null}}class m5{constructor(J){this.name=CJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let $=this.parser.json,Q=$.nodes[J];if(!Q.extensions||!Q.extensions[this.name]||Q.mesh===void 0)return null;let Z=$.meshes[Q.mesh];for(let H of Z.primitives)if(H.mode!==W9.TRIANGLES&&H.mode!==W9.TRIANGLE_STRIP&&H.mode!==W9.TRIANGLE_FAN&&H.mode!==void 0)return null;let W=Q.extensions[this.name].attributes,Y=[],X={};for(let H in W)Y.push(this.parser.getDependency("accessor",W[H]).then((U)=>{return X[H]=U,X[H]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((H)=>{let U=H.pop(),N=U.isGroup?U.children:[U],F=H[0].count,G=[];for(let q of N){let O=new QJ,B=new S,R=new GJ,E=new S(1,1,1),D=new f9(q.geometry,q.material,F);for(let V=0;V<F;V++){if(X.TRANSLATION)B.fromBufferAttribute(X.TRANSLATION,V);if(X.ROTATION)R.fromBufferAttribute(X.ROTATION,V);if(X.SCALE)E.fromBufferAttribute(X.SCALE,V);D.setMatrixAt(V,O.compose(B,R,E))}let M=null;for(let V in X)if(V==="_COLOR_0"){let I=X[V];D.instanceColor=new L7(I.array,I.itemSize,I.normalized)}else if(V!=="TRANSLATION"&&V!=="ROTATION"&&V!=="SCALE"){if(M===null){let w=D.geometry;M=new bJ,M.name=w.name;for(let k in w.attributes)M.setAttribute(k,w.attributes[k]);for(let k in w.morphAttributes)M.morphAttributes[k]=w.morphAttributes[k];if(w.index!==null)M.setIndex(w.index);M.morphTargetsRelative=w.morphTargetsRelative;for(let k of w.groups)M.addGroup(k.start,k.count,k.materialIndex);if(w.boundingBox!==null)M.boundingBox=w.boundingBox.clone();if(w.boundingSphere!==null)M.boundingSphere=w.boundingSphere.clone();M.drawRange.start=w.drawRange.start,M.drawRange.count=w.drawRange.count,M.userData=Object.assign({},w.userData),D.geometry=M}let I=X[V];M.setAttribute(V,new L7(I.array,I.itemSize,I.normalized))}SJ.prototype.copy.call(D,q),this.parser.assignFinalMaterial(D),G.push(D)}if(U.isGroup)return U.clear(),U.add(...G),U;return G[0]})}}var l5="glTF",CQ=12,k5={JSON:1313821514,BIN:5130562};class u5{constructor(J){this.name=CJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let $=new DataView(J,0,CQ),Q=new TextDecoder;if(this.header={magic:Q.decode(new Uint8Array(J.slice(0,4))),version:$.getUint32(4,!0),length:$.getUint32(8,!0)},this.header.magic!==l5)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-CQ,K=new DataView(J,CQ),W=0;while(W<Z){let Y=K.getUint32(W,!0);W+=4;let X=K.getUint32(W,!0);if(W+=4,X===k5.JSON){let H=new Uint8Array(J,CQ+W,Y);this.content=Q.decode(H)}else if(X===k5.BIN){let H=CQ+W;this.body=J.slice(H,H+Y)}W+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class d5{constructor(J,$){if(!$)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=CJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=$,this.dracoLoader.preload()}decodePrimitive(J,$){let Q=this.json,Z=this.dracoLoader,K=J.extensions[this.name].bufferView,W=J.extensions[this.name].attributes,Y={},X={},H={};for(let U in W){let N=tY[U]||U.toLowerCase();Y[N]=W[U]}for(let U in J.attributes){let N=tY[U]||U.toLowerCase();if(W[U]!==void 0){let F=Q.accessors[J.attributes[U]],G=O$[F.componentType];H[N]=G.name,X[N]=F.normalized===!0}}return $.getDependency("bufferView",K).then(function(U){return new Promise(function(N,F){Z.decodeDracoFile(U,function(G){for(let q in G.attributes){let O=G.attributes[q],B=X[q];if(B!==void 0)O.normalized=B}N(G)},Y,H,c8,F)})})}}class c5{constructor(){this.name=CJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,$){if(($.texCoord===void 0||$.texCoord===J.channel)&&$.offset===void 0&&$.rotation===void 0&&$.scale===void 0)return J;if(J=J.clone(),$.texCoord!==void 0)J.channel=$.texCoord;if($.offset!==void 0)J.offset.fromArray($.offset);if($.rotation!==void 0)J.rotation=$.rotation;if($.scale!==void 0)J.repeat.fromArray($.scale);if($.rotation!==void 0){let Q=Math.cos(J.rotation),Z=Math.sin(J.rotation);J.matrix.set(J.repeat.x*Q,J.repeat.y*Z,J.offset.x,-J.repeat.x*Z,J.repeat.y*Q,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class n5{constructor(){this.name=CJ.KHR_MESH_QUANTIZATION}}class $X extends Z7{constructor(J,$,Q,Z){super(J,$,Q,Z)}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,K=J*Z*3+Z;for(let W=0;W!==Z;W++)$[W]=Q[K+W];return $}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=Y*2,H=Y*3,U=Z-$,N=(Q-$)/U,F=N*N,G=F*N,q=J*H,O=q-H,B=-2*G+3*F,R=G-F,E=1-B,D=R-F+N;for(let M=0;M!==Y;M++){let V=W[O+M+Y],I=W[O+M+X]*U,w=W[q+M+Y],k=W[q+M]*U;K[M]=E*V+D*I+B*w+R*k}return K}}var eO=new GJ;class s5 extends $X{interpolate_(J,$,Q,Z){let K=super.interpolate_(J,$,Q,Z);return eO.fromArray(K).normalize().toArray(K),K}}var W9={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},O$={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},M5={9728:D9,9729:X8,9984:wZ,9985:e6,9986:i7,9987:Z9},C5={33071:t6,33648:TZ,10497:k7},iY={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tY={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},S7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JR={CUBICSPLINE:void 0,LINEAR:hZ,STEP:KY},oY={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $R(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new o0({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:D7});return J.DefaultMaterial}function U6(J,$,Q){for(let Z in Q.extensions)if(J[Z]===void 0)$.userData.gltfExtensions=$.userData.gltfExtensions||{},$.userData.gltfExtensions[Z]=Q.extensions[Z]}function g9(J,$){if($.extras!==void 0)if(typeof $.extras==="object")Object.assign(J.userData,$.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+$.extras)}function QR(J,$,Q){let Z=!1,K=!1,W=!1;for(let U=0,N=$.length;U<N;U++){let F=$[U];if(F.POSITION!==void 0)Z=!0;if(F.NORMAL!==void 0)K=!0;if(F.COLOR_0!==void 0)W=!0;if(Z&&K&&W)break}if(!Z&&!K&&!W)return Promise.resolve(J);let Y=[],X=[],H=[];for(let U=0,N=$.length;U<N;U++){let F=$[U];if(Z){let G=F.POSITION!==void 0?Q.getDependency("accessor",F.POSITION):J.attributes.position;Y.push(G)}if(K){let G=F.NORMAL!==void 0?Q.getDependency("accessor",F.NORMAL):J.attributes.normal;X.push(G)}if(W){let G=F.COLOR_0!==void 0?Q.getDependency("accessor",F.COLOR_0):J.attributes.color;H.push(G)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(H)]).then(function(U){let N=U[0],F=U[1],G=U[2];if(Z)J.morphAttributes.position=N;if(K)J.morphAttributes.normal=F;if(W)J.morphAttributes.color=G;return J.morphTargetsRelative=!0,J})}function ZR(J,$){if(J.updateMorphTargets(),$.weights!==void 0)for(let Q=0,Z=$.weights.length;Q<Z;Q++)J.morphTargetInfluences[Q]=$.weights[Q];if($.extras&&Array.isArray($.extras.targetNames)){let Q=$.extras.targetNames;if(J.morphTargetInfluences.length===Q.length){J.morphTargetDictionary={};for(let Z=0,K=Q.length;Z<K;Z++)J.morphTargetDictionary[Q[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KR(J){let $,Q=J.extensions&&J.extensions[CJ.KHR_DRACO_MESH_COMPRESSION];if(Q)$="draco:"+Q.bufferView+":"+Q.indices+":"+aY(Q.attributes);else $=J.indices+":"+aY(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,K=J.targets.length;Z<K;Z++)$+=":"+aY(J.targets[Z]);return $}function aY(J){let $="",Q=Object.keys(J).sort();for(let Z=0,K=Q.length;Z<K;Z++)$+=Q[Z]+":"+J[Q[Z]]+";";return $}function eY(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WR(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var YR=new QJ;class i5{constructor(J={},$={}){this.json=J,this.extensions={},this.plugins={},this.options=$,this.cache=new tO,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let Q=!1,Z=-1,K=!1,W=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let Y=navigator.userAgent;Q=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);Z=Q&&X?parseInt(X[1],10):-1,K=Y.indexOf("Firefox")>-1,W=K?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||Q&&Z<17||K&&W<98)this.textureLoader=new QK(this.options.manager);else this.textureLoader=new WK(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qQ(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,$){let Q=this,Z=this.json,K=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(W){return W._markDefs&&W._markDefs()}),Promise.all(this._invokeAll(function(W){return W.beforeRoot&&W.beforeRoot()})).then(function(){return Promise.all([Q.getDependencies("scene"),Q.getDependencies("animation"),Q.getDependencies("camera")])}).then(function(W){let Y={scene:W[0][Z.scene||0],scenes:W[0],animations:W[1],cameras:W[2],asset:Z.asset,parser:Q,userData:{}};return U6(K,Y,Z),g9(Y,Z),Promise.all(Q._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch($)}_markDefs(){let J=this.json.nodes||[],$=this.json.skins||[],Q=this.json.meshes||[];for(let Z=0,K=$.length;Z<K;Z++){let W=$[Z].joints;for(let Y=0,X=W.length;Y<X;Y++)J[W[Y]].isBone=!0}for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];if(W.mesh!==void 0){if(this._addNodeRef(this.meshCache,W.mesh),W.skin!==void 0)Q[W.mesh].isSkinnedMesh=!0}if(W.camera!==void 0)this._addNodeRef(this.cameraCache,W.camera)}}_addNodeRef(J,$){if($===void 0)return;if(J.refs[$]===void 0)J.refs[$]=J.uses[$]=0;J.refs[$]++}_getNodeRef(J,$,Q){if(J.refs[$]<=1)return Q;let Z=Q.clone(),K=(W,Y)=>{let X=this.associations.get(W);if(X!=null)this.associations.set(Y,X);for(let[H,U]of W.children.entries())K(U,Y.children[H])};return K(Q,Z),Z.name+="_instance_"+J.uses[$]++,Z}_invokeOne(J){let $=Object.values(this.plugins);$.push(this);for(let Q=0;Q<$.length;Q++){let Z=J($[Q]);if(Z)return Z}return null}_invokeAll(J){let $=Object.values(this.plugins);$.unshift(this);let Q=[];for(let Z=0;Z<$.length;Z++){let K=J($[Z]);if(K)Q.push(K)}return Q}getDependency(J,$){let Q=J+":"+$,Z=this.cache.get(Q);if(!Z){switch(J){case"scene":Z=this.loadScene($);break;case"node":Z=this._invokeOne(function(K){return K.loadNode&&K.loadNode($)});break;case"mesh":Z=this._invokeOne(function(K){return K.loadMesh&&K.loadMesh($)});break;case"accessor":Z=this.loadAccessor($);break;case"bufferView":Z=this._invokeOne(function(K){return K.loadBufferView&&K.loadBufferView($)});break;case"buffer":Z=this.loadBuffer($);break;case"material":Z=this._invokeOne(function(K){return K.loadMaterial&&K.loadMaterial($)});break;case"texture":Z=this._invokeOne(function(K){return K.loadTexture&&K.loadTexture($)});break;case"skin":Z=this.loadSkin($);break;case"animation":Z=this._invokeOne(function(K){return K.loadAnimation&&K.loadAnimation($)});break;case"camera":Z=this.loadCamera($);break;default:if(Z=this._invokeOne(function(K){return K!=this&&K.getDependency&&K.getDependency(J,$)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add(Q,Z)}return Z}getDependencies(J){let $=this.cache.get(J);if(!$){let Q=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];$=Promise.all(Z.map(function(K,W){return Q.getDependency(J,W)})),this.cache.add(J,$)}return $}loadBuffer(J){let $=this.json.buffers[J],Q=this.fileLoader;if($.type&&$.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+$.type+" buffer type is not supported.");if($.uri===void 0&&J===0)return Promise.resolve(this.extensions[CJ.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(K,W){Q.load(T7.resolveURL($.uri,Z.path),K,void 0,function(){W(Error('THREE.GLTFLoader: Failed to load buffer "'+$.uri+'".'))})})}loadBufferView(J){let $=this.json.bufferViews[J];return this.getDependency("buffer",$.buffer).then(function(Q){let Z=$.byteLength||0,K=$.byteOffset||0;return Q.slice(K,K+Z)})}loadAccessor(J){let $=this,Q=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let W=iY[Z.type],Y=O$[Z.componentType],X=Z.normalized===!0,H=new Y(Z.count*W);return Promise.resolve(new tJ(H,W,X))}let K=[];if(Z.bufferView!==void 0)K.push(this.getDependency("bufferView",Z.bufferView));else K.push(null);if(Z.sparse!==void 0)K.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),K.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(K).then(function(W){let Y=W[0],X=iY[Z.type],H=O$[Z.componentType],U=H.BYTES_PER_ELEMENT,N=U*X,F=Z.byteOffset||0,G=Z.bufferView!==void 0?Q.bufferViews[Z.bufferView].byteStride:void 0,q=Z.normalized===!0,O,B;if(G&&G!==N){let R=Math.floor(F/G),E="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+R+":"+Z.count,D=$.cache.get(E);if(!D)O=new H(Y,R*G,Z.count*G/U),D=new Z$(O,G/U),$.cache.add(E,D);B=new R7(D,X,F%G/U,q)}else{if(Y===null)O=new H(Z.count*X);else O=new H(Y,F,Z.count*X);B=new tJ(O,X,q)}if(Z.sparse!==void 0){let R=iY.SCALAR,E=O$[Z.sparse.indices.componentType],D=Z.sparse.indices.byteOffset||0,M=Z.sparse.values.byteOffset||0,V=new E(W[1],D,Z.sparse.count*R),I=new H(W[2],M,Z.sparse.count*X);if(Y!==null)B=new tJ(B.array.slice(),B.itemSize,B.normalized);B.normalized=!1;for(let w=0,k=V.length;w<k;w++){let L=V[w];if(B.setX(L,I[w*X]),X>=2)B.setY(L,I[w*X+1]);if(X>=3)B.setZ(L,I[w*X+2]);if(X>=4)B.setW(L,I[w*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}B.normalized=q}return B})}loadTexture(J){let $=this.json,Q=this.options,K=$.textures[J].source,W=$.images[K],Y=this.textureLoader;if(W.uri){let X=Q.manager.getHandler(W.uri);if(X!==null)Y=X}return this.loadTextureImage(J,K,Y)}loadTextureImage(J,$,Q){let Z=this,K=this.json,W=K.textures[J],Y=K.images[$],X=(Y.uri||Y.bufferView)+":"+W.sampler;if(this.textureCache[X])return this.textureCache[X];let H=this.loadImageSource($,Q).then(function(U){if(U.flipY=!1,U.name=W.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let F=(K.samplers||{})[W.sampler]||{};return U.magFilter=M5[F.magFilter]||X8,U.minFilter=M5[F.minFilter]||Z9,U.wrapS=C5[F.wrapS]||k7,U.wrapT=C5[F.wrapT]||k7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==D9&&U.minFilter!==X8,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=H,H}loadImageSource(J,$){let Q=this,Z=this.json,K=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let W=Z.images[J],Y=self.URL||self.webkitURL,X=W.uri||"",H=!1;if(W.bufferView!==void 0)X=Q.getDependency("bufferView",W.bufferView).then(function(N){H=!0;let F=new Blob([N],{type:W.mimeType});return X=Y.createObjectURL(F),X});else if(W.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(N){return new Promise(function(F,G){let q=F;if($.isImageBitmapLoader===!0)q=function(O){let B=new $8(O);B.needsUpdate=!0,F(B)};$.load(T7.resolveURL(N,K.path),q,void 0,G)})}).then(function(N){if(H===!0)Y.revokeObjectURL(X);return g9(N,W),N.userData.mimeType=W.mimeType||WR(W.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),N});return this.sourceCache[J]=U,U}assignTexture(J,$,Q,Z){let K=this;return this.getDependency("texture",Q.index).then(function(W){if(!W)return null;if(Q.texCoord!==void 0&&Q.texCoord>0)W=W.clone(),W.channel=Q.texCoord;if(K.extensions[CJ.KHR_TEXTURE_TRANSFORM]){let Y=Q.extensions!==void 0?Q.extensions[CJ.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=K.associations.get(W);W=K.extensions[CJ.KHR_TEXTURE_TRANSFORM].extendTexture(W,Y),K.associations.set(W,X)}}if(Z!==void 0)W.colorSpace=Z;return J[$]=W,W})}assignFinalMaterial(J){let{geometry:$,material:Q}=J,Z=$.attributes.tangent===void 0,K=$.attributes.color!==void 0,W=$.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+Q.uuid,X=this.cache.get(Y);if(!X)X=new Z6,f8.prototype.copy.call(X,Q),X.color.copy(Q.color),X.map=Q.map,X.sizeAttenuation=!1,this.cache.add(Y,X);Q=X}else if(J.isLine){let Y="LineBasicMaterial:"+Q.uuid,X=this.cache.get(Y);if(!X)X=new HQ,f8.prototype.copy.call(X,Q),X.color.copy(Q.color),X.map=Q.map,this.cache.add(Y,X);Q=X}if(Z||K||W){let Y="ClonedMaterial:"+Q.uuid+":";if(Z)Y+="derivative-tangents:";if(K)Y+="vertex-colors:";if(W)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=Q.clone(),K)X.vertexColors=!0;if(W)X.flatShading=!0;if(Z){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get(Q))}Q=X}J.material=Q}getMaterialType(){return o0}loadMaterial(J){let $=this,Q=this.json,Z=this.extensions,K=Q.materials[J],W,Y={},X=K.extensions||{},H=[];if(X[CJ.KHR_MATERIALS_UNLIT]){let N=Z[CJ.KHR_MATERIALS_UNLIT];W=N.getMaterialType(),H.push(N.extendParams(Y,K,$))}else{let N=K.pbrMetallicRoughness||{};if(Y.color=new y0(1,1,1),Y.opacity=1,Array.isArray(N.baseColorFactor)){let F=N.baseColorFactor;Y.color.setRGB(F[0],F[1],F[2],c8),Y.opacity=F[3]}if(N.baseColorTexture!==void 0)H.push($.assignTexture(Y,"map",N.baseColorTexture,Q8));if(Y.metalness=N.metallicFactor!==void 0?N.metallicFactor:1,Y.roughness=N.roughnessFactor!==void 0?N.roughnessFactor:1,N.metallicRoughnessTexture!==void 0)H.push($.assignTexture(Y,"metalnessMap",N.metallicRoughnessTexture)),H.push($.assignTexture(Y,"roughnessMap",N.metallicRoughnessTexture));W=this._invokeOne(function(F){return F.getMaterialType&&F.getMaterialType(J)}),H.push(Promise.all(this._invokeAll(function(F){return F.extendMaterialParams&&F.extendMaterialParams(J,Y)})))}if(K.doubleSided===!0)Y.side=oJ;let U=K.alphaMode||oY.OPAQUE;if(U===oY.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===oY.MASK)Y.alphaTest=K.alphaCutoff!==void 0?K.alphaCutoff:0.5;if(K.normalTexture!==void 0&&W!==xJ){if(H.push($.assignTexture(Y,"normalMap",K.normalTexture)),Y.normalScale=new R0(1,1),K.normalTexture.scale!==void 0){let N=K.normalTexture.scale;Y.normalScale.set(N,N)}}if(K.occlusionTexture!==void 0&&W!==xJ){if(H.push($.assignTexture(Y,"aoMap",K.occlusionTexture)),K.occlusionTexture.strength!==void 0)Y.aoMapIntensity=K.occlusionTexture.strength}if(K.emissiveFactor!==void 0&&W!==xJ){let N=K.emissiveFactor;Y.emissive=new y0().setRGB(N[0],N[1],N[2],c8)}if(K.emissiveTexture!==void 0&&W!==xJ)H.push($.assignTexture(Y,"emissiveMap",K.emissiveTexture,Q8));return Promise.all(H).then(function(){let N=new W(Y);if(K.name)N.name=K.name;if(g9(N,K),$.associations.set(N,{materials:J}),K.extensions)U6(Z,N,K);return N})}createUniqueName(J){let $=fJ.sanitizeNodeName(J||"");if($ in this.nodeNamesUsed)return $+"_"+ ++this.nodeNamesUsed[$];else return this.nodeNamesUsed[$]=0,$}loadGeometries(J){let $=this,Q=this.extensions,Z=this.primitiveCache;function K(Y){return Q[CJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,$).then(function(X){return P5(X,Y,$)})}let W=[];for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y],U=KR(H),N=Z[U];if(N)W.push(N.promise);else{let F;if(H.extensions&&H.extensions[CJ.KHR_DRACO_MESH_COMPRESSION])F=K(H);else F=P5(new bJ,H,$);if(H.mode===W9.TRIANGLE_STRIP)F=F.then((G)=>sY(G,ZQ));else if(H.mode===W9.TRIANGLE_FAN)F=F.then((G)=>sY(G,$$));Z[U]={primitive:H,promise:F},W.push(F)}}return Promise.all(W)}loadMesh(J){let $=this,Q=this.json,Z=this.extensions,K=Q.meshes[J],W=K.primitives,Y=[];for(let X=0,H=W.length;X<H;X++){let U=W[X].material===void 0?$R(this.cache):this.getDependency("material",W[X].material);Y.push(U)}return Y.push($.loadGeometries(W)),Promise.all(Y).then(async function(X){let H=X.slice(0,X.length-1),U=X[X.length-1],N=[];for(let G=0,q=U.length;G<q;G++){let O=U[G],B=W[G],R,E=H[G];if(B.mode===W9.TRIANGLES||B.mode===W9.TRIANGLE_STRIP||B.mode===W9.TRIANGLE_FAN||B.mode===void 0){let D=K.isSkinnedMesh===!0,M=O.hasAttribute("skinIndex")&&O.hasAttribute("skinWeight");if(D&&M===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(R=D&&M?new dZ(O,E):new I0(O,E),R.isSkinnedMesh===!0)R.normalizeSkinWeights()}else if(B.mode===W9.LINES)R=new cZ(O,E);else if(B.mode===W9.LINE_STRIP)R=new W$(O,E);else if(B.mode===W9.LINE_LOOP)R=new nZ(O,E);else if(B.mode===W9.POINTS)R=new Y$(O,E);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+B.mode);if(Object.keys(R.geometry.morphAttributes).length>0)ZR(R,K);if(R.name=$.createUniqueName(K.name||"mesh_"+J),g9(R,K),B.extensions)U6(Z,R,B);$.assignFinalMaterial(R),N.push(R)}for(let G=0,q=N.length;G<q;G++)$.associations.set(N[G],{meshes:J,primitives:G});if(N.length===1){if(K.extensions)U6(Z,N[0],K);return N[0]}let F=new _J;if(K.extensions)U6(Z,F,K);$.associations.set(F,{meshes:J});for(let G=0,q=N.length;G<q;G++)F.add(N[G]);return F})}loadCamera(J){let $,Q=this.json.cameras[J],Z=Q[Q.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(Q.type==="perspective")$=new G8(v9.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if(Q.type==="orthographic")$=new Y7(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if(Q.name)$.name=this.createUniqueName(Q.name);return g9($,Q),Promise.resolve($)}loadSkin(J){let $=this.json.skins[J],Q=[];for(let Z=0,K=$.joints.length;Z<K;Z++)Q.push(this._loadNodeShallow($.joints[Z]));if($.inverseBindMatrices!==void 0)Q.push(this.getDependency("accessor",$.inverseBindMatrices));else Q.push(null);return Promise.all(Q).then(function(Z){let K=Z.pop(),W=Z,Y=[],X=[];for(let H=0,U=W.length;H<U;H++){let N=W[H];if(N){Y.push(N);let F=new QJ;if(K!==null)F.fromArray(K.array,H*16);X.push(F)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',$.joints[H])}return new XQ(Y,X)})}loadAnimation(J){let $=this.json,Q=this,Z=$.animations[J],K=Z.name?Z.name:"animation_"+J,W=[],Y=[],X=[],H=[],U=[];for(let N=0,F=Z.channels.length;N<F;N++){let G=Z.channels[N],q=Z.samplers[G.sampler],O=G.target,B=O.node,R=Z.parameters!==void 0?Z.parameters[q.input]:q.input,E=Z.parameters!==void 0?Z.parameters[q.output]:q.output;if(O.node===void 0)continue;W.push(this.getDependency("node",B)),Y.push(this.getDependency("accessor",R)),X.push(this.getDependency("accessor",E)),H.push(q),U.push(O)}return Promise.all([Promise.all(W),Promise.all(Y),Promise.all(X),Promise.all(H),Promise.all(U)]).then(function(N){let F=N[0],G=N[1],q=N[2],O=N[3],B=N[4],R=[];for(let D=0,M=F.length;D<M;D++){let V=F[D],I=G[D],w=q[D],k=O[D],L=B[D];if(V===void 0)continue;if(V.updateMatrix)V.updateMatrix();let P=Q._createAnimationTracks(V,I,w,k,L);if(P)for(let l=0;l<P.length;l++)R.push(P[l])}let E=new i6(K,void 0,R);return g9(E,Z),E})}createNodeMesh(J){let $=this.json,Q=this,Z=$.nodes[J];if(Z.mesh===void 0)return null;return Q.getDependency("mesh",Z.mesh).then(function(K){let W=Q._getNodeRef(Q.meshCache,Z.mesh,K);if(Z.weights!==void 0)W.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,H=Z.weights.length;X<H;X++)Y.morphTargetInfluences[X]=Z.weights[X]});return W})}loadNode(J){let $=this.json,Q=this,Z=$.nodes[J],K=Q._loadNodeShallow(J),W=[],Y=Z.children||[];for(let H=0,U=Y.length;H<U;H++)W.push(Q.getDependency("node",Y[H]));let X=Z.skin===void 0?Promise.resolve(null):Q.getDependency("skin",Z.skin);return Promise.all([K,Promise.all(W),X]).then(function(H){let U=H[0],N=H[1],F=H[2];if(F!==null)U.traverse(function(G){if(!G.isSkinnedMesh)return;G.bind(F,YR)});for(let G=0,q=N.length;G<q;G++)U.add(N[G]);if(U.userData.pivot!==void 0&&N.length>0){let G=U.userData.pivot,q=N[0];U.pivot=new S().fromArray(G),U.position.x-=G[0],U.position.y-=G[1],U.position.z-=G[2],q.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let $=this.json,Q=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let K=$.nodes[J],W=K.name?Z.createUniqueName(K.name):"",Y=[],X=Z._invokeOne(function(H){return H.createNodeMesh&&H.createNodeMesh(J)});if(X)Y.push(X);if(K.camera!==void 0)Y.push(Z.getDependency("camera",K.camera).then(function(H){return Z._getNodeRef(Z.cameraCache,K.camera,H)}));return Z._invokeAll(function(H){return H.createNodeAttachment&&H.createNodeAttachment(J)}).forEach(function(H){Y.push(H)}),this.nodeCache[J]=Promise.all(Y).then(function(H){let U;if(K.isBone===!0)U=new YQ;else if(H.length>1)U=new _J;else if(H.length===1)U=H[0];else U=new SJ;if(U!==H[0])for(let N=0,F=H.length;N<F;N++)U.add(H[N]);if(K.name)U.userData.name=K.name,U.name=W;if(g9(U,K),K.extensions)U6(Q,U,K);if(K.matrix!==void 0){let N=new QJ;N.fromArray(K.matrix),U.applyMatrix4(N)}else{if(K.translation!==void 0)U.position.fromArray(K.translation);if(K.rotation!==void 0)U.quaternion.fromArray(K.rotation);if(K.scale!==void 0)U.scale.fromArray(K.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(K.mesh!==void 0&&Z.meshCache.refs[K.mesh]>1){let N=Z.associations.get(U);Z.associations.set(U,{...N})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let $=this.extensions,Q=this.json.scenes[J],Z=this,K=new _J;if(Q.name)K.name=Z.createUniqueName(Q.name);if(g9(K,Q),Q.extensions)U6($,K,Q);let W=Q.nodes||[],Y=[];for(let X=0,H=W.length;X<H;X++)Y.push(Z.getDependency("node",W[X]));return Promise.all(Y).then(function(X){for(let U=0,N=X.length;U<N;U++){let F=X[U];if(F.parent!==null)K.add(q$(F));else K.add(F)}let H=(U)=>{let N=new Map;for(let[F,G]of Z.associations)if(F instanceof f8||F instanceof $8)N.set(F,G);return U.traverse((F)=>{let G=Z.associations.get(F);if(G!=null)N.set(F,G)}),N};return Z.associations=H(K),K})}_createAnimationTracks(J,$,Q,Z,K){let W=[],Y=J.name?J.name:J.uuid,X=[];function H(G){if(G.morphTargetInfluences)X.push(G.name?G.name:G.uuid)}if(S7[K.path]===S7.weights){if(H(J),J.isGroup)J.children.forEach(H)}else X.push(Y);let U;switch(S7[K.path]){case S7.weights:U=z7;break;case S7.rotation:U=A7;break;case S7.translation:case S7.scale:U=X6;break;default:switch(Q.itemSize){case 1:U=z7;break;case 2:case 3:default:U=X6;break}break}let N=Z.interpolation!==void 0?JR[Z.interpolation]:hZ,F=this._getArrayFromAccessor(Q);for(let G=0,q=X.length;G<q;G++){let O=new U(X[G]+"."+S7[K.path],$.array,F,N);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(O);W.push(O)}return W}_getArrayFromAccessor(J){let $=J.array;if(J.normalized){let Q=eY($.constructor),Z=new Float32Array($.length);for(let K=0,W=$.length;K<W;K++)Z[K]=$[K]*Q;$=Z}return $}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function(Q){return new(this instanceof A7?s5:$X)(this.times,this.values,this.getValueSize()/3,Q)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function XR(J,$,Q){let Z=$.attributes,K=new k8;if(Z.POSITION!==void 0){let X=Q.json.accessors[Z.POSITION],H=X.min,U=X.max;if(H!==void 0&&U!==void 0){if(K.set(new S(H[0],H[1],H[2]),new S(U[0],U[1],U[2])),X.normalized){let N=eY(O$[X.componentType]);K.min.multiplyScalar(N),K.max.multiplyScalar(N)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let W=$.targets;if(W!==void 0){let X=new S,H=new S;for(let U=0,N=W.length;U<N;U++){let F=W[U];if(F.POSITION!==void 0){let G=Q.json.accessors[F.POSITION],q=G.min,O=G.max;if(q!==void 0&&O!==void 0){if(H.setX(Math.max(Math.abs(q[0]),Math.abs(O[0]))),H.setY(Math.max(Math.abs(q[1]),Math.abs(O[1]))),H.setZ(Math.max(Math.abs(q[2]),Math.abs(O[2]))),G.normalized){let B=eY(O$[G.componentType]);H.multiplyScalar(B)}X.max(H)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}K.expandByVector(X)}J.boundingBox=K;let Y=new S8;K.getCenter(Y.center),Y.radius=K.min.distanceTo(K.max)/2,J.boundingSphere=Y}function P5(J,$,Q){let Z=$.attributes,K=[];function W(Y,X){return Q.getDependency("accessor",Y).then(function(H){J.setAttribute(X,H)})}for(let Y in Z){let X=tY[Y]||Y.toLowerCase();if(X in J.attributes)continue;K.push(W(Z[Y],X))}if($.indices!==void 0&&!J.index){let Y=Q.getDependency("accessor",$.indices).then(function(X){J.setIndex(X)});K.push(Y)}if(RJ.workingColorSpace!==c8&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${RJ.workingColorSpace}" not supported.`);return g9(J,$),XR(J,$,Q),Promise.all(K).then(function(){return $.targets!==void 0?QR(J,$.targets,Q):J})}var o5={type:"change"},ZX={type:"start"},r5={type:"end"},EK=new C7,a5=new J9,HR=Math.cos(70*v9.DEG2RAD),q8=new S,h8=2*Math.PI,dJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},QX=0.000001;class KX extends HK{constructor(J,$=null){super(J,$);if(this.state=dJ.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:V7.ROTATE,MIDDLE:V7.DOLLY,RIGHT:V7.PAN},this.touches={ONE:B7.ROTATE,TWO:B7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new GJ,this._lastTargetPosition=new S,this._quat=new GJ().setFromUnitVectors(J.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new LQ,this._sphericalDelta=new LQ,this._scale=1,this._panOffset=new S,this._rotateStart=new R0,this._rotateEnd=new R0,this._rotateDelta=new R0,this._panStart=new R0,this._panEnd=new R0,this._panDelta=new R0,this._dollyStart=new R0,this._dollyEnd=new R0,this._dollyDelta=new R0,this._dollyDirection=new S,this._mouse=new R0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NR.bind(this),this._onPointerDown=UR.bind(this),this._onPointerUp=GR.bind(this),this._onContextMenu=VR.bind(this),this._onMouseWheel=qR.bind(this),this._onKeyDown=OR.bind(this),this._onTouchStart=RR.bind(this),this._onTouchMove=LR.bind(this),this._onMouseDown=FR.bind(this),this._onMouseMove=ER.bind(this),this._interceptControlDown=BR.bind(this),this._interceptControlUp=DR.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=dJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(o5),this.update(),this.state=dJ.NONE}pan(J,$){this._pan(J,$),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let $=this.object.position;if(q8.copy($).sub(this.target),q8.applyQuaternion(this._quat),this._spherical.setFromVector3(q8),this.autoRotate&&this.state===dJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let Q=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite(Q)&&isFinite(Z)){if(Q<-Math.PI)Q+=h8;else if(Q>Math.PI)Q-=h8;if(Z<-Math.PI)Z+=h8;else if(Z>Math.PI)Z-=h8;if(Q<=Z)this._spherical.theta=Math.max(Q,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(Q+Z)/2?Math.max(Q,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let K=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),K=W!=this._spherical.radius}if(q8.setFromSpherical(this._spherical),q8.applyQuaternion(this._quatInverse),$.copy(this.target).add(q8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let Y=q8.length();W=this._clampDistance(Y*this._scale);let X=Y-W;this.object.position.addScaledVector(this._dollyDirection,X),this.object.updateMatrixWorld(),K=!!X}else if(this.object.isOrthographicCamera){let Y=new S(this._mouse.x,this._mouse.y,0);Y.unproject(this.object);let X=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),K=X!==this.object.zoom;let H=new S(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(Y),this.object.updateMatrixWorld(),W=q8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(EK.origin.copy(this.object.position),EK.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(EK.direction))<HR)this.object.lookAt(this.target);else a5.setFromNormalAndCoplanarPoint(this.object.up,this.target),EK.intersectPlane(a5,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),K=!0}if(this._scale=1,this._performCursorZoom=!1,K||this._lastPosition.distanceToSquared(this.object.position)>QX||8*(1-this._lastQuaternion.dot(this.object.quaternion))>QX||this._lastTargetPosition.distanceToSquared(this.target)>QX)return this.dispatchEvent(o5),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return h8/60*this.autoRotateSpeed*J;else return h8/60/60*this.autoRotateSpeed}_getZoomScale(J){let $=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*$)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,$){q8.setFromMatrixColumn($,0),q8.multiplyScalar(-J),this._panOffset.add(q8)}_panUp(J,$){if(this.screenSpacePanning===!0)q8.setFromMatrixColumn($,1);else q8.setFromMatrixColumn($,0),q8.crossVectors(this.object.up,q8);q8.multiplyScalar(J),this._panOffset.add(q8)}_pan(J,$){let Q=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;q8.copy(Z).sub(this.target);let K=q8.length();K*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*K/Q.clientHeight,this.object.matrix),this._panUp(2*$*K/Q.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/Q.clientWidth,this.object.matrix),this._panUp($*(this.object.top-this.object.bottom)/this.object.zoom/Q.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,$){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let Q=this.domElement.getBoundingClientRect(),Z=J-Q.left,K=$-Q.top,W=Q.width,Y=Q.height;this._mouse.x=Z/W*2-1,this._mouse.y=-(K/Y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(h8*this._rotateDelta.x/$.clientHeight),this._rotateUp(h8*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let $=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(h8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);$=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-h8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);$=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(h8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);$=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-h8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);$=!0;break}if($)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._rotateStart.set(Q,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._panStart.set(Q,Z)}}_handleTouchStartDolly(J){let $=this._getSecondPointerPosition(J),Q=J.pageX-$.x,Z=J.pageY-$.y,K=Math.sqrt(Q*Q+Z*Z);this._dollyStart.set(0,K)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateEnd.set(Z,K)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(h8*this._rotateDelta.x/$.clientHeight),this._rotateUp(h8*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._panEnd.set(Q,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let $=this._getSecondPointerPosition(J),Q=J.pageX-$.x,Z=J.pageY-$.y,K=Math.sqrt(Q*Q+Z*Z);this._dollyEnd.set(0,K),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+$.x)*0.5,Y=(J.pageY+$.y)*0.5;this._updateZoomParameters(W,Y)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId){this._pointers.splice($,1);return}}_isTrackingPointer(J){for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId)return!0;return!1}_trackPointer(J){let $=this._pointerPositions[J.pointerId];if($===void 0)$=new R0,this._pointerPositions[J.pointerId]=$;$.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let $=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[$]}_customWheelEvent(J){let $=J.deltaMode,Q={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch($){case 1:Q.deltaY*=16;break;case 2:Q.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)Q.deltaY*=10;return Q}}function UR(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function NR(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function GR(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(r5),this.state=dJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let $=this._pointers[0],Q=this._pointerPositions[$];this._onTouchStart({pointerId:$,pageX:Q.x,pageY:Q.y});break}}function FR(J){let $;switch(J.button){case 0:$=this.mouseButtons.LEFT;break;case 1:$=this.mouseButtons.MIDDLE;break;case 2:$=this.mouseButtons.RIGHT;break;default:$=-1}switch($){case V7.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=dJ.DOLLY;break;case V7.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=dJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=dJ.ROTATE}break;case V7.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=dJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=dJ.PAN}break;default:this.state=dJ.NONE}if(this.state!==dJ.NONE)this.dispatchEvent(ZX)}function ER(J){switch(this.state){case dJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case dJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case dJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function qR(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==dJ.NONE)return;J.preventDefault(),this.dispatchEvent(ZX),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(r5)}function OR(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function RR(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case B7.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=dJ.TOUCH_ROTATE;break;case B7.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=dJ.TOUCH_PAN;break;default:this.state=dJ.NONE}break;case 2:switch(this.touches.TWO){case B7.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=dJ.TOUCH_DOLLY_PAN;break;case B7.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=dJ.TOUCH_DOLLY_ROTATE;break;default:this.state=dJ.NONE}break;default:this.state=dJ.NONE}if(this.state!==dJ.NONE)this.dispatchEvent(ZX)}function LR(J){switch(this._trackPointer(J),this.state){case dJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case dJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case dJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case dJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=dJ.NONE}}function VR(J){if(this.enabled===!1)return;J.preventDefault()}function BR(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function DR(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var PQ=new S;function Y9(J,$,Q,Z,K,W){let Y=2*Math.PI*K/4,X=Math.max(W-2*K,0),H=Math.PI/4;PQ.copy($),PQ[Z]=0,PQ.normalize();let U=0.5*Y/(Y+X),N=1-PQ.angleTo(J)/H;if(Math.sign(PQ[Q])===1)return N*U;else return X/(Y+X)+U+U*(1-N)}class j8 extends wJ{constructor(J=1,$=1,Q=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,$/2,Q/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:$,depth:Q,segments:Z,radius:K},W===1)return;let Y=this.toNonIndexed();this.index=null,this.attributes.position=Y.attributes.position,this.attributes.normal=Y.attributes.normal,this.attributes.uv=Y.attributes.uv;let X=new S,H=new S,U=new S(J,$,Q).divideScalar(2).subScalar(K),N=this.attributes.position.array,F=this.attributes.normal.array,G=this.attributes.uv.array,q=N.length/6,O=new S,B=0.5/W;for(let R=0,E=0;R<N.length;R+=3,E+=2)switch(X.fromArray(N,R),H.copy(X),H.x-=Math.sign(H.x)*B,H.y-=Math.sign(H.y)*B,H.z-=Math.sign(H.z)*B,H.normalize(),N[R+0]=U.x*Math.sign(X.x)+H.x*K,N[R+1]=U.y*Math.sign(X.y)+H.y*K,N[R+2]=U.z*Math.sign(X.z)+H.z*K,F[R+0]=H.x,F[R+1]=H.y,F[R+2]=H.z,Math.floor(R/q)){case 0:O.set(1,0,0),G[E+0]=Y9(O,H,"z","y",K,Q),G[E+1]=1-Y9(O,H,"y","z",K,$);break;case 1:O.set(-1,0,0),G[E+0]=1-Y9(O,H,"z","y",K,Q),G[E+1]=1-Y9(O,H,"y","z",K,$);break;case 2:O.set(0,1,0),G[E+0]=1-Y9(O,H,"x","z",K,J),G[E+1]=Y9(O,H,"z","x",K,Q);break;case 3:O.set(0,-1,0),G[E+0]=1-Y9(O,H,"x","z",K,J),G[E+1]=1-Y9(O,H,"z","x",K,Q);break;case 4:O.set(0,0,1),G[E+0]=1-Y9(O,H,"x","y",K,J),G[E+1]=1-Y9(O,H,"y","x",K,$);break;case 5:O.set(0,0,-1),G[E+0]=Y9(O,H,"x","y",K,J),G[E+1]=1-Y9(O,H,"y","x",K,$);break}}static fromJSON(J){return new j8(J.width,J.height,J.depth,J.segments,J.radius)}}var M0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0033,pipColumnSpacing:0.0072,pipRowSpacing:0.0076,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25,boardLimit:0.27},M8={tope:1.06,z:-3.89,fondo:0.62,ancho:3.9},C9=[[0,M0.seatDistance,Math.PI],[M0.seatDistance,0,-Math.PI/2],[0,-M0.seatDistance,0],[-M0.seatDistance,0,Math.PI/2]];function YX(J){let $=J.vertical?M0.tileWidth:M0.tileLength,Q=J.vertical?M0.tileLength:M0.tileWidth;return{left:J.x-$/2,right:J.x+$/2,top:J.z-Q/2,bottom:J.z+Q/2}}var kR=M0.boardLimit,MR=M0.feltWidth/2-0.022;function XX(J,$,Q=kR){let Z=YX(J);if(Math.max(Math.abs(Z.left),Math.abs(Z.right),Math.abs(Z.top),Math.abs(Z.bottom))>Q+0.00000001)return!1;return $.every((K)=>{let W=YX(K);return Z.right<=W.left-0.0015||Z.left>=W.right+0.0015||Z.bottom<=W.top-0.0015||Z.top>=W.bottom+0.0015})}function t5(J,$,Q){let{tileLength:Z,tileWidth:K,tileGap:W}=M0,Y=$.x===$.y,X=(Y?K:Z)/2,H=J.tile,U=[],N=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let F=0;F<N.length;F++){let[G,q]=N[F],O=F!==0,B=(H.isDouble?K:Z)/2,R=(H.isDouble?Z:K)/2,E=H.x+J.dx*(O?H.isDouble?0:Z/4:B),D=H.z+J.dz*(O?H.isDouble?0:Z/4:B),M=O?[0,Z/8,-Z/8]:[0];for(let V of M){let I=Math.atan2(-q,G)+(Q==="left"?Math.PI:0)+(Y?Math.PI/2:0);U.push({id:$.id,x:E+G*((O?R:0)+W+X)+J.dx*V,z:D+q*((O?R:0)+W+X)+J.dz*V,yaw:I,vertical:Math.abs(Math.sin(I))>0.5,isDouble:Y,dx:G,dz:q,side:Q})}}return U}function WX(J,$,Q,Z){let K={id:"future",x:0,y:Z?0:1};return t5({tile:J,dx:J.dx,dz:J.dz},K,Q).some((W)=>XX(W,$))}function e5(J,$=[]){return $N(J,$).placements}function JN(J,$=[]){let Q=$N(J,$);if(!Q.ends)return[];return["left","right"].map((Z)=>{let K=Q.ends[Z],W=K.tile,Y=YX(W),X=Math.abs(K.dx)*(Y.right-Y.left)/2+Math.abs(K.dz)*(Y.bottom-Y.top)/2,H=X+0.013;return{x:W.x+K.dx*H,z:W.z+K.dz*H,dx:K.dx,dz:K.dz}})}function $N(J,$){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return{placements:[],ends:null};let Q=new Map(J.map((G)=>[G.id,G])),Z=$.filter((G)=>G.type==="play"&&G.tile&&Q.has(G.tile)),K=Q.get(Z[0]?.tile||"")||J[0],W=J.findIndex((G)=>G.id===K.id),Y=K.x===K.y,X={id:K.id,x:0,z:0,yaw:Y?Math.PI/2:0,vertical:Y,isDouble:Y,dx:1,dz:0,side:"root"},H=[X],U=new Map([[X.id,X]]),N={left:{tile:X,dx:-1,dz:0},right:{tile:X,dx:1,dz:0}},F=Z.length===J.length?Z.slice(1):[...J.slice(0,W).reverse().map((G)=>({type:"play",tile:G.id,side:"left"})),...J.slice(W+1).map((G)=>({type:"play",tile:G.id,side:"right"}))];for(let G of F){let q=Q.get(G.tile);if(U.has(q.id))continue;let O=G.side==="left"?"left":G.side==="right"?"right":J.findIndex((D)=>D.id===q.id)<W?"left":"right",B=t5(N[O],q,O),R=B.filter((D)=>XX(D,H));if(!R.length)R=B.filter((D)=>XX(D,H,MR));let E=R.find((D)=>WX(D,[...H,D],O,!1)&&WX(D,[...H,D],O,!0))||R.find((D)=>WX(D,[...H,D],O,!1))||R[0];if(!E)throw Error(`No safe placement for ${q.id} after ${H.length} tiles`);H.push(E),U.set(q.id,E),N[O]={tile:E,dx:E.dx,dz:E.dz}}return{placements:J.map((G)=>U.get(G.id)),ends:N}}function QN(J,$,Q=!1){if(Q)return{breath:0,headYaw:0,headNod:0};let Z=J*2.173+0.43;return{breath:0.0055*Math.sin($*(0.78+J*0.093)+Z),headYaw:0.087*Math.sin($*(0.213+J*0.037)+Z)+0.028*Math.sin($*(0.487+J*0.029)+Z*1.91),headNod:0.009*Math.sin($*(0.267+J*0.035)+Z*0.71)}}var ZN=new S(1,0,0),z9=new S(0,1,0),HX=new GJ;function PK(J){let $=[];return J.traverse((Q)=>{if(Q.isBone)$.push({bone:Q,position:Q.position.clone(),quaternion:Q.quaternion.clone(),scale:Q.scale.clone()})}),$}var p9=new S,I9=new S,m9=new S,N6=new S,X7=new S,X9=new S,G6=new S,F6=new S,q6=new GJ,A9=new GJ,MK=new GJ,DK=new GJ,wQ=(J)=>Math.min(1,Math.max(-1,J)),O6=(J,$,Q)=>Math.min(Q,Math.max($,J)),p8=(J)=>J*J*(3-2*J);function W8(J,$){J.getWorldQuaternion(A9),J.parent.getWorldQuaternion(MK),J.quaternion.copy(MK.invert()).multiply($).multiply(A9),J.updateMatrixWorld(!0)}var y8=new S,U9=new S;function CR(J){J.holder.getWorldQuaternion(DK),y8.set(1,0,0).applyQuaternion(DK),U9.set(0,0,1).applyQuaternion(DK)}function FX(J,$,Q,Z,K){return K.set($,Q,Z).applyMatrix4(J.holder.matrixWorld)}function UX(J,$,Q,Z){return Z.set(J,$,Q).applyQuaternion(DK).normalize()}var PR=0.965;function IR(J,$,Q){let{brazo:Z,antebrazo:K,mano:W}=J;if(!Z||!K||!W||!Z.parent||!K.parent)return;Z.getWorldPosition(p9),K.getWorldPosition(I9),W.getWorldPosition(m9);let Y=p9.distanceTo(I9),X=I9.distanceTo(m9);if(Y<0.00001||X<0.00001)return;let H=O6(p9.distanceTo($),Math.abs(Y-X)+0.002,(Y+X)*PR);if(X7.subVectors(I9,p9),X9.subVectors(m9,I9),G6.crossVectors(X7,X9),G6.lengthSq()<0.0000000001)G6.copy(y8);else G6.normalize();let U=Math.acos(wQ((Y*Y+X*X-p9.distanceToSquared(m9))/(2*Y*X))),F=Math.acos(wQ((Y*Y+X*X-H*H)/(2*Y*X)))-U;if(W8(K,q6.setFromAxisAngle(G6,F)),W.getWorldPosition(m9),Math.abs(p9.distanceTo(m9)-H)>0.001)W8(K,q6.setFromAxisAngle(G6,-2*F)),W.getWorldPosition(m9);if(X7.subVectors(m9,p9).normalize(),X9.subVectors($,p9),X9.lengthSq()<0.0000000001)return;if(X9.normalize(),W8(Z,q6.setFromUnitVectors(X7,X9)),!Q)return;if(K.getWorldPosition(I9),F6.subVectors(I9,p9),F6.addScaledVector(X9,-F6.dot(X9)),N6.subVectors(Q,p9),N6.addScaledVector(X9,-N6.dot(X9)),F6.lengthSq()<0.0000000001||N6.lengthSq()<0.0000000001)return;F6.normalize(),N6.normalize();let G=Math.atan2(G6.crossVectors(F6,N6).dot(X9),wQ(F6.dot(N6)));W8(Z,q6.setFromAxisAngle(X9,G))}var g8=new S,V$=new S,IQ=new S,zR=new QJ,NX=new GJ,zQ=new GJ;function AR(J,$,Q){let{antebrazo:Z,mano:K}=J;if(!Z||!K||!K.parent)return;if(g8.copy($).normalize(),IQ.crossVectors(g8,Q),IQ.lengthSq()<0.00000001)return;IQ.normalize(),V$.crossVectors(IQ,g8),NX.setFromRotationMatrix(zR.makeBasis(IQ,g8,V$)),Z.getWorldPosition(I9),K.getWorldPosition(m9),X7.subVectors(m9,I9).normalize(),K.getWorldQuaternion(A9),zQ.copy(NX).multiply(A9.invert());let W=zQ.x*X7.x+zQ.y*X7.y+zQ.z*X7.z,Y=2*Math.atan2(W,zQ.w);if(Number.isFinite(Y))W8(Z,q6.setFromAxisAngle(X7,O6(Y*0.5,-1.2,1.2)));K.parent.getWorldQuaternion(MK),K.quaternion.copy(MK.invert()).multiply(NX),K.updateMatrixWorld(!0)}var _R=new S;function TR(J,$,Q){let Z=$.lado==="Left"?1:-1,K=J.index*1.7,W=M0.seatDistance-M0.tableWidth/2;return FX(J,Z*(0.225+Math.sin(K)*0.01)+Math.sin(Q*0.23+K)*0.004,M0.surfaceY+0.026,W+(Z>0?0.035:0.06)+Math.cos(K*1.3)*0.012+Math.sin(Q*0.17+K*2)*0.004,_R)}var wR=new S,R$=new S,kK=new S,qK=new S,SR=0.045,jR=0.05,yR=0.12,vR=0.14,fR=0.45,bR=4;function KN(J,$,Q){return qK.subVectors($,J.holder.getWorldPosition(kK)),qK.y=0,qK.normalize(),Q.copy($).addScaledVector(qK,-jR).setY($.y+SR)}function hR(J,$,Q){let Z=J.jugada;if(!Z)return null;if($-Z.t0>bR)return J.jugada=null,null;let K=Z.anim;if(K.elapsed<K.duration)return KN(J,Z.obj.position,R$),R$.lerpVectors(Q,R$,p8(O6(K.elapsed/yR,0,1)));if(Z.aterrizo==null)Z.aterrizo=$;let W=$-Z.aterrizo;KN(J,Z.hasta,R$);let Y=K.golpe?0.7:vR;if(W<Y)return R$;let X=(W-Y)/fR;if(X>=1)return J.jugada=null,null;return R$.lerp(Q,p8(X))}var FJ=[1,2.2,3.5,4.7,5.6],WN=-1e9;function xR(J,$,Q){let Z=J.bebida;if(!Z)return null;if(J.trago){let W=J.trago.fijo??$-J.trago.t0;if(W<0||W>=FJ[4]||J.jugada)return J.trago=null,GN(Z),J.sed=$+90+Math.random()*150,null;return W}if(!Q||!Q.dt)return null;if(J.sed==null)return J.sed=$+20+Math.random()*100,null;if($<J.sed||$-WN<20)return null;let K=J.index;if(J.jugada||Q.jugando&&Q.turno===K||Q.habla.has(K)||Q.fin&&$-Q.fin.t<6)return J.sed=$+3+Math.random()*8,null;return WN=$,J.trago={t0:$},0}function GN(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var P9=new S,E6=new S,L$=new S,AQ=new S,YN=new S;function XN(J,$,Q,Z){let K=J.bebida;if(L$.copy(U9).addScaledVector(z9,0.25).normalize(),AQ.copy(U9).multiplyScalar(0.55).addScaledVector(z9,0.8).normalize(),E6.copy(K.home),E6.y+=K.alto,E6.addScaledVector(y8,-(K.radio+0.015)).addScaledVector(L$,-0.03),J.bocaMundo)J.bocaMundo(P9),P9.addScaledVector(U9,0.006);else J.front.getWorldPosition(P9),P9.y-=0.075,P9.addScaledVector(U9,0.012);let W=K.inclina;YN.copy(z9).multiplyScalar(Math.cos(W)).addScaledVector(U9,-Math.sin(W)),P9.addScaledVector(YN,-K.boca).addScaledVector(y8,-(K.radio+0.015)).addScaledVector(AQ,-0.03);let Y=J.trago;if(Y){if($<FJ[2])(Y.boca??=new S).copy(P9);else if(Y.boca)P9.copy(Y.boca)}let X;if($<FJ[0])OK(Q,E6,0.045,0.5,p8($/FJ[0]),Z),X=L$;else if($<FJ[1]){let H=p8(($-FJ[0])/(FJ[1]-FJ[0]));OK(E6,P9,0.1,0.25,H,Z),X=L$.lerp(AQ,H).normalize()}else if($<FJ[2])Z.copy(P9),X=AQ;else if($<FJ[3]){let H=p8(($-FJ[2])/(FJ[3]-FJ[2]));OK(E6,P9,0.1,0.25,1-H,Z),X=AQ.lerp(L$,H).normalize()}else OK(Q,E6,0.045,0.5,1-p8(($-FJ[3])/(FJ[4]-FJ[3])),Z),X=L$;return X}var _Q=new S;function OK(J,$,Q,Z,K,W){_Q.lerpVectors(J,$,Z),_Q.y=Math.max(J.y,$.y*Z+J.y*(1-Z))+Q;let Y=1-K;return W.set(Y*Y*J.x+2*Y*K*_Q.x+K*K*$.x,Y*Y*J.y+2*Y*K*_Q.y+K*K*$.y,Y*Y*J.z+2*Y*K*_Q.z+K*K*$.z)}function gR(J){return J<FJ[0]?p8(Math.min(1,J/(FJ[0]*0.85))):J<FJ[3]?1:1-p8(Math.min(1,(J-FJ[3])/((FJ[4]-FJ[3])*0.85)))}var HN=new S,UN=new S,NN=new S;function pR(J,$){let Q=J.bebida,Z=J.brazos[1].mano;if($<FJ[0]||$>=FJ[3]){GN(Q);return}Z.getWorldQuaternion(A9),Z.getWorldPosition(CK),HN.set(0,0,1).applyQuaternion(A9),UN.set(0,1,0).applyQuaternion(A9);let K=$<FJ[1]?p8(($-FJ[0])/(FJ[1]-FJ[0])):$<FJ[2]?1:1-p8(($-FJ[2])/(FJ[3]-FJ[2]));Q.group.quaternion.setFromAxisAngle(y8,-Q.inclina*K),NN.set(0,1,0).applyQuaternion(Q.group.quaternion),Q.group.position.copy(CK).addScaledVector(HN,Q.radio+0.015).addScaledVector(UN,0.03).addScaledVector(NN,-Q.alto);let W=Math.min(1,($-FJ[0])/0.2,(FJ[3]-$)/0.2);if(W<1){let Y=p8(Math.max(0,W));Q.group.position.lerpVectors(Q.home,Q.group.position,Y),Q.group.quaternion.slerpQuaternions(mR.identity(),Q.group.quaternion,Y)}}var mR=new GJ;function lR(J,$,Q){let Z=J.cara;if(!Z)return 0;if(J.proxParpadeo==null)J.proxParpadeo=$+1+Math.random()*4;if($>=J.proxParpadeo)J.parpadeoT0=$,J.proxParpadeo=$+(Math.random()<0.15?0.32:2+Math.random()*4);let K=$-(J.parpadeoT0??-9),W=K<0?0:K<0.06?K/0.06:K<0.09?1:K<0.16?1-(K-0.09)/0.07:0;if(J.caraFija){let U=J.caraFija,N=Z.mesh.morphTargetInfluences;if(N)N[Z.iP]=U.p*0.85,N[Z.iS]=U.s;return J.parpadeo=U.p,U.p}let Y=J.index,X=0;if(Q?.fin&&Q.fin.team!=null&&$-Q.fin.t<5&&$>=Q.fin.t)X=Y%2===Q.fin.team?0.95:-0.7;else if(Q?.habla?.has(Y))X=Q.hablaTipo?.get(Y)==="win"?0.85:0.2;else{if(J.casual==null)J.casual=$+8+Math.random()*30;if($>J.casual+2.5)J.casual=$+15+Math.random()*45;if($>=J.casual)X=0.45}J.sonrisa=(J.sonrisa??0)+(X-(J.sonrisa??0))*(1-Math.exp(-(Q?.dt||0.016)*3.5));let H=Z.mesh.morphTargetInfluences;if(H)H[Z.iP]=W*0.85,H[Z.iS]=J.sonrisa;return J.parpadeo=W,W}function uR(J,$){let Q=J.index,Z=0.23+Q%4*0.012,K=$*Z*Math.PI*2+Q*1.9,W=Math.sin(K);return{b:W>0?W:W*0.7,balanceo:Math.sin($*0.11+Q*2.3)*0.022+Math.sin($*0.29+Q)*0.008,ladeo:Math.sin($*0.07+Q*1.3)*0.014}}var GX=new S,RK=new S,H9=new S,j7=new S,_9=new S,x8=new GJ,LK=(J)=>{let $=Math.sin(J*127.1+311.7)*43758.5453;return $-Math.floor($)};function dR(J,$,Q,Z){let K=J.index;if(K>=4||!Q)return Q?.foco&&$-Q.foco.t<2.5?Z.copy(Q.foco.p):Z.set(0,M0.surfaceY,0);if(Q.fin&&$-Q.fin.t<5){if(Q.fin.team!=null&&K%2===Q.fin.team&&Q.cabezas[(K+2)%4])return Z.copy(Q.cabezas[(K+2)%4]);return FX(J,0,M0.surfaceY,M0.seatDistance-M0.rackRadius,Z)}if(J.trago&&J.bebida){let X=J.trago.fijo??$-J.trago.t0;if(X<FJ[0]+0.1||X>FJ[2]+0.5&&X<FJ[3]+0.1)return Z.copy(J.bebida.home);if(X<=3.4)return J.head.getWorldPosition(Z),Z.addScaledVector(U9,1).addScaledVector(z9,-0.15)}{let X=Q.saludo;if(X&&(X.seat===K||X.e<(X.seat==null?3:1.6)))return Z.copy(X.p)}if(Q.foco&&$-Q.foco.t<1.4)return Z.copy(Q.foco.p);for(let X of Q.habla)if(X!==K&&Q.cabezas[X])return Z.copy(Q.cabezas[X]);if(Q.jugando&&Q.turno===K){let X=Math.floor($/1.3);return FX(J,(LK(X+K*9)-0.5)*0.12,M0.surfaceY+0.02,M0.seatDistance-M0.rackRadius+0.02,Z)}let W=Math.floor(($+K*1.37)/(2.2+K*0.35)),Y=LK(W*4+K);if(Q.jugando&&Y<0.45&&Q.cabezas[Q.turno]&&Q.turno!==K)return Z.copy(Q.cabezas[Q.turno]);if(Y<0.62&&Q.cabezas[(K+2)%4])return Z.copy(Q.cabezas[(K+2)%4]);if(!Q.jugando&&Y<0.85&&Q.cabezas[(K+1+W%2*2)%4])return Z.copy(Q.cabezas[(K+1+W%2*2)%4]);return Z.set((LK(W+7)-0.5)*0.2,M0.surfaceY,(LK(W+3)-0.5)*0.2)}function cR(J,$,Q){let{head:Z,neck:K,front:W}=J;if(!Z||!W)return;if(dR(J,$,Q,GX),!J.mirada||!Q?.dt)J.mirada=(J.mirada||new S).copy(GX);else J.mirada.lerp(GX,1-Math.exp(-Q.dt*5.5));for(let[Y,X]of[[K,0.4],[Z,1]]){if(!Y)continue;if(Z.getWorldPosition(RK),W.getWorldPosition(H9),H9.sub(RK),H9.lengthSq()<0.0000000001)return;if(H9.normalize(),j7.subVectors(J.mirada,RK),j7.lengthSq()<0.00000001)return;j7.normalize();let H=O6(Math.atan2(H9.z*j7.x-H9.x*j7.z,H9.x*j7.x+H9.z*j7.z),-1.25,1.25)*X;if(W8(Y,q6.setFromAxisAngle(z9,H)),W.getWorldPosition(H9),H9.sub(RK).normalize(),_9.crossVectors(H9,z9),_9.lengthSq()<0.00000001)continue;_9.normalize();let U=O6(Math.asin(wQ(j7.y))-Math.asin(wQ(H9.y)),-0.75,0.55)*X;W8(Y,q6.setFromAxisAngle(_9,U))}}var nR=0.23,sR=[["lomo",0.4],["spine",0.34],["chest",0.26]],ID=new GJ;function iR(J,$,Q=0){if(!J.spine||!J.spine.parent)return;if(_9.copy(y8),J.hips&&J.lomo)for(let[Z,K]of sR){let W=J[Z];if(!W)continue;W8(W,x8.setFromAxisAngle(_9,$*K))}else W8(J.spine,x8.setFromAxisAngle(_9,$));if(Q)W8(J.spine,x8.setFromAxisAngle(z9,Q))}var VK=new S,BK=new S,TQ=new S,CK=new S;function IK(J,$,Q=!1,Z=null){for(let O of J.pose)O.bone.position.copy(O.position),O.bone.quaternion.copy(O.quaternion),O.bone.scale.copy(O.scale);J.holder.updateMatrixWorld(!0),CR(J);let K=QN(J.index,$,Q);if(J.spine)J.spine.quaternion.multiply(HX.setFromAxisAngle(ZN,K.breath));let W=!Q,Y=W?uR(J,$):{b:0,balanceo:0,ladeo:0},X=J.index,H=X<4&&J.brazos,U=0,N=0;if(H&&Z?.fin&&Z.fin.team!=null){let O=$-Z.fin.t;if(O>=0&&O<5)N=Math.sin(Math.min(1,O/0.5)*Math.PI/2)*(O>4?5-O:1),U+=(X%2===Z.fin.team?-0.1:0.07)*N}if(H&&Z?.jugando&&Z.turno===X)U+=0.04;let F=H&&W&&J.front?xR(J,$,Z):null,G=[];if(H)for(let O of J.brazos){let B=wR.copy(TR(J,O,$)),R=O.lado==="Right"?hR(J,$,B):null,E=!!R,D=null;if(!R&&F!=null&&O.lado==="Right")R=kK.set(0,0,0),D=XN(J,F,B,R).clone();if(R=(R||B).clone(),!E&&W&&Z?.habla?.has(X)&&O.lado==="Left")J.gesto=Math.min(1,(J.gesto||0)+(Z.dt||0)*3);else if(O.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(Z?.dt||1)*2);if(O.lado==="Left"&&J.gesto>0){let M=p8(J.gesto);R.addScaledVector(U9,0.06*M).addScaledVector(y8,-0.07*M),R.y+=0.07*M+Math.sin($*5.2)*0.012*M}if(O.lado==="Right"&&!E&&N&&X%2===Z.fin.team){let M=$-Z.fin.t;if(M<1.1)R.y+=Math.max(0,Math.sin(Math.min(1,M/0.9)*Math.PI))*0.13}G.push({brazo:O,o:R,jugando:E,dedos:D,reposo:B.clone()})}let q=0;if(H){let O=G.find((B)=>B.jugando);if(O&&O.brazo.brazo){J.holder.worldToLocal(TQ.copy(O.o));let B=Math.hypot(TQ.x,TQ.z-0.12);U+=O6((B-0.42)/0.55,0,0.34),q=O6(Math.atan2(TQ.x,TQ.z)*0.3,-0.3,0.3)}}if(iR(J,nR*(J.brazos?1:0.6)+U,q),F!=null){let O=(R,E)=>Math.max(0,1-Math.abs(F-R)/E),B=p8(Math.max(O(FJ[0],0.9),O(FJ[3],0.9)));if(J.spine)W8(J.spine,x8.setFromAxisAngle(U9,0.16*B))}if(W){if(J.spine)W8(J.spine,x8.setFromAxisAngle(z9,Y.balanceo));if(J.spine)W8(J.spine,x8.setFromAxisAngle(U9,Y.ladeo));if(J.chest)W8(J.chest,x8.setFromAxisAngle(y8,-0.018*Y.b));if(J.hombros){for(let[O,B]of J.hombros)if(B)W8(B,x8.setFromAxisAngle(U9,O*0.03*(Y.b+0.3)))}}if(cR(J,$,Z),lR(J,$,Z),J.head)J.head.quaternion.multiply(HX.setFromAxisAngle(z9,K.headYaw*0.5)),J.head.quaternion.multiply(HX.setFromAxisAngle(ZN,K.headNod)),J.head.updateMatrixWorld(!0);if(W&&J.head){if(Z?.habla?.has(X)){let O=0.035*(0.6+0.4*Math.sin($*1.7));W8(J.head,x8.setFromAxisAngle(y8,Math.sin($*6.1)*O*0.5+Math.sin($*3.3)*O*0.5))}if(N&&X%2!==Z.fin.team){let O=$-Z.fin.t;if(O>0.6&&O<2.6)W8(J.head,x8.setFromAxisAngle(z9,Math.sin((O-0.6)*Math.PI*2.4)*0.16*(2.6-O)/2))}}if(F!=null&&F>FJ[1]-0.2&&F<FJ[2]+0.2&&J.head){let O=Math.sin(Math.min(1,(F-FJ[1]+0.2)/(FJ[2]-FJ[1]+0.4))*Math.PI);W8(J.head,x8.setFromAxisAngle(y8,-0.3*O))}if(W&&J.reaction&&J.head){let O=$-J.reaction.time;if(O>=0&&O<1.2){let B=Math.sin(O/1.2*Math.PI)*0.035;W8(J.head,x8.setFromAxisAngle(y8,B))}}for(let{brazo:O,o:B,jugando:R,dedos:E,reposo:D}of G){if(E)E.copy(XN(J,F,D,B));let M=O.lado==="Left"?1:-1;O.brazo.getWorldPosition(VK);let V=E?gR(F):0;if(V>0)VK.add(UX(M*0.32,-0.75,-0.6,BK).lerp(UX(M*0.45,-0.85,0.25,kK),V));else VK.add(UX(M*(R?0.55:0.32),-0.75,R?-0.15:-0.6,BK));if(IR(O,B,VK),O.antebrazo.getWorldPosition(I9),O.mano.getWorldPosition(CK),g8.subVectors(CK,I9),g8.y=0,g8.lengthSq()<0.00000001)g8.copy(U9);if(g8.normalize(),g8.addScaledVector(y8,-M*(R?0:0.12)).normalize(),g8.y=R?-0.55:-0.3,V$.set(0,-1,0).addScaledVector(y8,-M*0.22),O.lado==="Left"&&J.gesto>0){let I=p8(J.gesto);V$.lerp(BK.copy(y8).multiplyScalar(-1).add(kK.set(0,0.4,0)),I*0.8),g8.y+=0.4*I}if(E)g8.lerp(E,V).normalize(),V$.lerp(BK.copy(y8).addScaledVector(z9,-0.15),V).normalize();if(AR(O,g8,V$),E)pR(J,F);if(W&&!R&&!E&&O.lado==="Right"&&J.toque&&$-J.toque.t0<0.7){let I=$-J.toque.t0;O.mano.getWorldQuaternion(A9),_9.set(1,0,0).applyQuaternion(A9),W8(O.mano,x8.setFromAxisAngle(_9,-0.5*Math.max(0,Math.sin(I/0.7*Math.PI*4))))}else if(W&&!R&&!E&&O.lado==="Right"&&!(Z?.turno===X&&Z?.jugando)){let I=4.6+X*0.9,w=($+X*1.3)%I;if(w<0.55)O.mano.getWorldQuaternion(A9),_9.set(1,0,0).applyQuaternion(A9),W8(O.mano,x8.setFromAxisAngle(_9,-0.22*Math.max(0,Math.sin(w/0.55*Math.PI*4))))}}J.holder.updateMatrixWorld(!0)}function FN({scene:J,texture:$,mat:Q,box:Z,cylinder:K,random:W,teal:Y,wood:X,storeSign:H}){let U=$((k,L,P)=>{k.fillStyle="#e0d3b4",k.fillRect(0,0,L,P);let l=k.createLinearGradient(0,0,0,P);l.addColorStop(0,"#cac09b18"),l.addColorStop(0.7,"#14382d00"),l.addColorStop(1,"#162d2566"),k.fillStyle=l,k.fillRect(0,0,L,P);for(let b=0;b<7000;b++)k.fillStyle=b%3?"#b4ad8618":"#142d2924",k.fillRect(W()*L,W()*P,1+W()*3,1+W()*2);for(let b=0;b<70;b++){let d=W()*L,e=b<50?P*(0.72+W()*0.28):W()*P,v=5+W()*14;k.fillStyle=b%3?"rgba(160,145,112,.35)":"rgba(120,110,90,.25)",k.beginPath();for(let j=0;j<8;j++){let g=j*Math.PI/4,f=v*(0.6+W()*0.5);k.lineTo(d+Math.cos(g)*f,e+Math.sin(g)*f*0.65)}k.fill()}k.strokeStyle="#1b372e24";for(let b=48;b<P;b+=57)k.beginPath(),k.moveTo(0,b),k.lineTo(L,b),k.stroke()},1024,1024);Y.map=U,Y.color.set("#f2ecde"),Y.needsUpdate=!0,X.color.set("#bca98a"),X.roughness=0.84;let N=()=>{H.material.map=$((k,L,P)=>{k.fillStyle="#efe3c4",k.fillRect(0,0,L,P);for(let d=0;d<2600;d++)k.fillStyle=d%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",k.fillRect(W()*L,W()*P,2+W()*14,1+W()*2);let l=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia",b=l==="Shrikhand"?P*0.66:P*0.56;k.font=`${b}px ${l}`,k.textAlign="center",k.textBaseline="middle",k.fillStyle="#c8402f",k.fillText("Colmado La Esquina",L/2+b*0.06,P/2+b*0.1),k.fillStyle="#24518a",k.fillText("Colmado La Esquina",L/2,P/2+b*0.04),k.strokeStyle="#3d938e",k.lineWidth=12,k.strokeRect(6,6,L-12,P-12);for(let d=0;d<1400;d++)k.fillStyle="rgba(239,227,196,.35)",k.fillRect(W()*L,W()*P,1+W()*3,1+W()*2)},2048,162),H.material.emissiveMap=H.material.map,H.material.needsUpdate=!0};H.material=new o0({roughness:0.9,emissive:"#ffffff",emissiveIntensity:0.1}),N(),document.fonts?.load?.("64px Shrikhand").then(N).catch(()=>{});for(let[k,L]of[[-2.7,-3.5],[2.4,-3.3]])Z(k,0.18,L,0.51,0.35,0.4,"#897052"),Z(k+0.05,0.47,L-0.04,0.4,0.23,0.32,"#a68c62");let F=(k,L,P)=>{let l=document.createElement("canvas");l.width=k,l.height=L;let b=new n8(l);b.colorSpace=Q8,b.anisotropy=4;let d=()=>{let e=l.getContext("2d"),v=document.fonts?.check?.("64px Shrikhand"),j=document.fonts?.check?.('700 40px "DM Sans"')?'"DM Sans",':"";e.fillStyle="#233a2d",e.fillRect(0,0,k,L);for(let g=0;g<70;g++)e.fillStyle=`rgba(225,225,195,${0.015+W()*0.03})`,e.beginPath(),e.ellipse(W()*k,W()*L,k*(0.04+W()*0.14),L*(0.015+W()*0.045),W()*3,0,Math.PI*2),e.fill();e.textAlign="center",e.textBaseline="middle",e.lineCap="round";for(let[g,f,a,m,J0]of P){if(g==="—"){e.strokeStyle="rgba(225,225,195,.45)",e.lineWidth=6,e.beginPath(),e.moveTo(k*0.17,f+3),e.quadraticCurveTo(k/2,f-5,k*0.83,f+1),e.stroke();continue}e.font=m==="titulo"?v?`${a}px Shrikhand`:`bold ${a*0.95}px Georgia`:`${m} ${a}px ${j}sans-serif`;let X0=e.measureText(g).width,y=k*0.84;if(e.save(),e.translate(k/2,f),X0>y)e.scale(y/X0,1);e.fillStyle=J0;for(let o=0;o<3;o++)e.globalAlpha=o?0.4:0.75,e.fillText(g,(W()-0.5)*3,(W()-0.5)*3);e.restore()}for(let g=0;g<k*L/40;g++)e.fillStyle="rgba(35,58,45,.5)",e.fillRect(W()*k,W()*L,1+W()*2,1+W());e.strokeStyle="#9c8c62",e.lineWidth=k*0.04,e.strokeRect(k*0.02,k*0.02,k-k*0.04,L-k*0.04),e.strokeStyle="rgba(60,40,20,.35)",e.lineWidth=4,e.strokeRect(k*0.04,k*0.04,k-k*0.08,L-k*0.08),b.needsUpdate=!0};return d(),Promise.all([document.fonts?.load?.("64px Shrikhand"),document.fonts?.load?.('700 40px "DM Sans"')]).then(d).catch(()=>{}),new o0({roughness:1,map:b,emissive:"#ffffff",emissiveMap:b,emissiveIntensity:0.06})},G="#ece7cc",q="#e9b35a",O="#a9d3dd";{let k=new I0(new VJ(0.72,0.69),F(768,736,[["HOY HAY",110,74,"titulo",G],["CAFÉ",262,78,800,G],["HIELO · PAN",388,66,800,"#dcd9b8"],["—",478],["REFRESCOS",572,60,700,O]]));k.position.set(-3.43,1.6,-2.33),k.rotation.z=0.025,J.add(k),Z(-3.43,1.245,-2.315,0.66,0.018,0.05,"#8a7a55"),Z(-3.28,1.262,-2.31,0.06,0.016,0.016,"#efeadb")}{let k=document.documentElement.lang==="en",L=new _J,P=Q("#6b4a2e",0.8);L.position.set(-2,0,-2.1),L.rotation.y=0.5,J.add(L);let d=new I0(new VJ(0.56,0.72),F(560,720,[[k?"COMING":"YA",96,92,"titulo",q],[k?"SOON":"VIENE",206,92,"titulo",q],["—",282],[k?"1 vs 1":"1 contra 1",372,80,800,G],[k?"Online":"En línea",478,80,800,G],[k?"your people,":"tu gente,",576,50,600,O],[k?"from anywhere":"de donde sea",636,50,600,O]])),e=new _J;e.rotation.x=-0.2,L.add(e),d.position.set(0,0.44,0.012),e.add(d);{let j=new I0(new wJ(0.56,0.72,0.012),P);j.position.set(0,0.44,0),e.add(j)}for(let[j,g,f,a]of[[-0.29,0.42000000000000004,0.035,0.88],[0.29,0.42000000000000004,0.035,0.88],[0,0.8500000000000001,0.62,0.035],[0,0.03,0.62,0.035]]){let m=new I0(new wJ(f,a,0.022),P);m.position.set(j,g,0),e.add(m)}let v=new _J;v.position.z=-0.32,v.rotation.x=0.2,L.add(v);for(let j of[-0.27,0.27]){let g=new I0(new wJ(0.03,0.8600000000000001,0.02),P);g.position.set(j,0.43000000000000005,-0.02),v.add(g)}L.traverse((j)=>{if(j.isMesh)j.castShadow=!0,j.receiveShadow=!0})}let B=[],R=M8.tope,E=M8.z;Z(-1.12,R+0.11,E+0.24,0.42,0.21,0.31,"#677761"),Z(-1.12,R+0.13,E+0.404,0.34,0.1,0.016,"#414b3d"),Z(-0.38,R+0.02,E+0.26,0.3,0.018,0.22,"#c5b887");for(let[k,L,P]of[[0.7,E+0.21,"#8b7747"],[0.98,E+0.17,"#637751"],[1.29,E+0.22,"#a88b50"]])K(k,R+0.12,L,0.07,0.075,0.25,P,14),K(k,R+0.259,L,0.077,0.077,0.028,"#aaa386",12);Z(0.2,R+0.03,E+0.23,0.4,0.07,0.28,"#6c5838");for(let k=0;k<4;k++){let L=new I0(new H8(1,10,6),Q(k%2?"#bca276":"#a98e61"));L.scale.set(0.055,0.035,0.115),L.position.set(0.07+k*0.085,R+0.09,E+0.24),L.rotation.y=(k-1.5)*0.13,J.add(L)}let D=new xJ({transparent:!0,depthWrite:!1,map:$((k,L,P)=>{for(let l=0;l<90;l++)k.fillStyle=l%2?"#152c2110":"#3036230a",k.beginPath(),k.ellipse(L/2+(W()-0.5)*L*0.45,P/2+(W()-0.5)*P*0.45,W()*L*0.24,W()*P*0.18,W()*Math.PI,0,Math.PI*2),k.fill()},256,256)});for(let[k,L,P,l]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let b=new I0(new VJ(P,l),D);b.rotation.x=-Math.PI/2,b.position.set(k,0.008,L),J.add(b)}for(let[k,L]of[[-3,-0.9],[3.3,-1.5]]){K(k,0.18,L,0.18,0.13,0.34,"#87553c",14),K(k,0.354,L,0.16,0.16,0.012,"#3f422d",12);let P=new _J;P.position.set(k,0.36,L),J.add(P);for(let l=0;l<7;l++){let b=new NQ;b.moveTo(0,0),b.quadraticCurveTo(-0.09,0.23,0,0.55+W()*0.12),b.quadraticCurveTo(0.09,0.23,0,0);let d=new I0(new FQ(b,5),new o0({color:l%2?"#597d4f":"#3c603e",roughness:1,side:oJ}));d.rotation.set(0.3+W()*0.4,l*Math.PI*2/7,0),P.add(d)}B.push(P)}let M=new VJ(0.55,1.3,5,9),V=new I0(M,new o0({color:"#b2a27c",roughness:1,side:oJ}));V.position.set(-2.85,1.75,-3.05),J.add(V);let I=M.attributes.position,w=I.array.slice();return{update(k){B.forEach((L,P)=>L.rotation.z=Math.sin(k*0.53+P*2.1)*0.015);for(let L=0;L<I.count;L++){let P=w[L*3+1];I.setZ(L,Math.sin(k*1.17+P*3)*0.025*(0.65-P)/1.3)}I.needsUpdate=!0}}}function EN({scene:J,texture:$,mat:Q,box:Z,cylinder:K,staticGeo:W,random:Y}){let X=(_=0,h=0,u=0)=>new S(_,h,u),H=(_,h,u,W0,$0,q0,F0=5000)=>{_.fillStyle=W0,_.fillRect(0,0,h,u);for(let z0=0;z0<F0;z0++)_.fillStyle=Y()>0.5?$0:q0,_.fillRect(Y()*h,Y()*u,1+Y()*4,1+Y()*3)},U=[];function N(_,{w:h=1024,h:u=256,fondo:W0="#efe3c4",tinta:$0="#24518a",sombra:q0="#c8402f",borde:F0=null,px:z0=0.62}={}){let B0=document.createElement("canvas");B0.width=h,B0.height=u;let b0=new n8(B0);b0.colorSpace=Q8;let r0=()=>{let S0=B0.getContext("2d"),ZJ=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia";if(W0){S0.fillStyle=W0,S0.fillRect(0,0,h,u);for(let cJ=0;cJ<h*1.2;cJ++)S0.fillStyle=cJ%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",S0.fillRect(Math.random()*h,Math.random()*u,2+Math.random()*12,1+Math.random()*2)}else S0.clearRect(0,0,h,u);let HJ=u*z0;S0.font=`${HJ}px ${ZJ}`;let EJ=S0.measureText(_).width;if(EJ>h*0.9)HJ*=h*0.9/EJ,S0.font=`${HJ}px ${ZJ}`;S0.textAlign="center",S0.textBaseline="middle";let p=HJ*0.06;if(q0)S0.fillStyle=q0,S0.fillText(_,h/2+p,u/2+p+HJ*0.04);if(S0.fillStyle=$0,S0.fillText(_,h/2,u/2+HJ*0.04),F0)S0.strokeStyle=F0,S0.lineWidth=u*0.07,S0.strokeRect(S0.lineWidth/2,S0.lineWidth/2,h-S0.lineWidth,u-S0.lineWidth);for(let cJ=0;cJ<h*0.5;cJ++)S0.fillStyle=W0?"rgba(239,227,196,.3)":"rgba(0,0,0,0)",S0.fillRect(Math.random()*h,Math.random()*u,1+Math.random()*3,1+Math.random()*2);b0.needsUpdate=!0};return r0(),U.push(r0),b0}document.fonts?.load?.("64px Shrikhand").then(()=>U.forEach((_)=>_())).catch(()=>{});let F=new o0({roughness:0.93,map:$((_,h,u)=>{H(_,h,u,"#e3d6b8","rgba(255,250,236,.10)","rgba(120,100,70,.08)");let W0=_.createLinearGradient(0,0,0,u);W0.addColorStop(0,"rgba(90,70,50,.12)"),W0.addColorStop(0.18,"rgba(90,70,50,0)"),W0.addColorStop(0.8,"rgba(90,70,50,0)"),W0.addColorStop(1,"rgba(90,70,50,.2)"),_.fillStyle=W0,_.fillRect(0,0,h,u);for(let $0=0;$0<22;$0++){let q0=Y()*h,F0=u*(0.08+Y()*0.3),z0=_.createLinearGradient(0,0,0,F0);z0.addColorStop(0,"rgba(80,70,55,.2)"),z0.addColorStop(1,"rgba(80,70,55,0)"),_.fillStyle=z0,_.fillRect(q0,0,3+Y()*8,F0)}},512,512)}),G=new o0({roughness:0.9,map:$((_,h,u)=>{H(_,h,u,"#3f9a96","rgba(200,240,230,.10)","rgba(20,50,50,.10)");for(let W0=0;W0<50;W0++)_.fillStyle="rgba(225,218,195,.55)",_.beginPath(),_.ellipse(Y()*h,Y()*u,2+Y()*9,1+Y()*5,Y()*3,0,Math.PI*2),_.fill()},256,256)});Z(-3.48,0.625,-2.355,0.702,1.25,0.012,G),Z(3.45,0.625,-2.355,0.802,1.25,0.012,G),Z(-3.906,0.625,-3.85,0.012,1.25,2.72,G),Z(3.906,0.625,-3.85,0.012,1.25,2.72,G);let q=22,O="#3d8a5c",B="#e8dfc8",R=$((_,h,u)=>{for(let $0=0;$0<q;$0++)_.fillStyle=$0%2?B:O,_.fillRect($0*h/q,0,Math.ceil(h/q),u);for(let $0=0;$0<2500;$0++)_.fillStyle=Y()>0.5?"rgba(255,250,235,.06)":"rgba(20,30,20,.07)",_.fillRect(Y()*h,Y()*u,2,2);let W0=_.createLinearGradient(0,0,0,u);W0.addColorStop(0,"rgba(0,0,0,.14)"),W0.addColorStop(1,"rgba(40,30,20,0)"),_.fillStyle=W0,_.fillRect(0,0,h,u)},1024,128);W(new VJ(7.3,0.86),new o0({map:R,roughness:0.95,side:oJ}),[0,2.59,-1.955],[-1.237,0,0]);let E=$((_,h,u)=>{let W0=h/q;for(let $0=0;$0<q;$0++)_.fillStyle=$0%2?B:O,_.fillRect($0*W0,0,Math.ceil(W0),u*0.5),_.beginPath(),_.arc($0*W0+W0/2,u*0.5,W0/2-0.5,0,Math.PI),_.fill()},1024,64);W(new VJ(7.3,0.2),new o0({map:E,roughness:0.95,side:oJ,alphaTest:0.5}),[0,2.35,-1.548]);{let _=new o0({roughness:0.8,map:$((u,W0,$0)=>{u.fillStyle="#2a3332",u.fillRect(0,0,W0,$0);let q0=u.createLinearGradient(0,0,0,$0);q0.addColorStop(0,"#cfe8e0"),q0.addColorStop(1,"#8fb3aa"),u.fillStyle=q0,u.fillRect(14,14,W0-28,$0-28),u.strokeStyle="#1f2525",u.lineWidth=7;for(let F0=30;F0<W0-20;F0+=26)u.beginPath(),u.moveTo(F0,14),u.lineTo(F0,$0-14),u.stroke();for(let F0 of[$0*0.33,$0*0.66])u.beginPath(),u.moveTo(14,F0),u.lineTo(W0-14,F0),u.stroke();u.strokeStyle="#e8e0cc",u.lineWidth=12,u.strokeRect(6,6,W0-12,$0-12)},256,256),emissive:"#ffffff",emissiveIntensity:0.12});_.emissiveMap=_.map,W(new VJ(1.1,1),_,[3.915,1.75,-4.3],[0,Math.PI/2,0]);let h=new I0(new VJ(2.2,0.36),new o0({map:N("Víveres · Bebidas · Hielo",{w:1536,h:252,fondo:null,tinta:"#24518a",sombra:"#c8402f"}),transparent:!0,roughness:0.9}));h.position.set(3.915,2.55,-3.75),h.rotation.y=Math.PI/2,J.add(h)}let D=3.3,M=2.75,V=-2.7,I=D+M;Z(0,D+M/2,-5.2,8.2,M,0.2,F),Z(-4,D+M/2,-3.95,0.2,M,2.7,F),Z(4,D+M/2,-3.95,0.2,M,2.7,F),Z(0,D+M/2,V,8.2,M,0.2,F),Z(0,I-0.08,-3.95,8.44,0.16,2.95,"#d3c9b0"),Z(0,D+0.06,V+0.12,8.3,0.1,0.06,"#3d938e");let w=new o0({roughness:0.7,map:$((_,h,u)=>{_.fillStyle="#2d3a3a",_.fillRect(0,0,h,u);let W0=15,$0=(u-24)/W0;for(let q0=0;q0<W0;q0++){let F0=12+q0*$0;_.fillStyle="#7aa39d",_.fillRect(12,F0,h-24,$0*0.72),_.fillStyle="rgba(0,0,0,.25)",_.fillRect(12,F0+$0*0.62,h-24,$0*0.1)}_.strokeStyle="#e8e0cc",_.lineWidth=12,_.strokeRect(6,6,h-12,u-12)},256,256)});W(new VJ(1.2,1.25),w,[-2.5,4.6,V+0.107]);let k=new o0({roughness:0.7,map:w.map,emissive:"#8fb0ff",emissiveMap:w.map,emissiveIntensity:0.25}),L=new I0(new VJ(1.2,1.25),k);L.position.set(2.5,4.6,V+0.107),J.add(L);let P=new o0({roughness:0.8,emissive:"#ffffff",emissiveIntensity:0.55,map:$((_,h,u)=>{let W0=_.createLinearGradient(0,0,0,u);W0.addColorStop(0,"#f0c27f"),W0.addColorStop(1,"#b87a44"),_.fillStyle=W0,_.fillRect(0,0,h,u),_.strokeStyle="#1d2222",_.lineWidth=6;for(let $0=18;$0<h;$0+=22)_.beginPath(),_.moveTo($0,0),_.lineTo($0,u),_.stroke();for(let $0=u*0.2;$0<u;$0+=u*0.2)_.beginPath(),_.moveTo(0,$0),_.lineTo(h,$0),_.stroke();_.lineWidth=5;for(let $0=0;$0<4;$0++)_.beginPath(),_.arc(h/2,u*0.1+$0*u*0.2,18,0,Math.PI*2),_.stroke();_.strokeStyle="#e8e0cc",_.lineWidth=14,_.strokeRect(7,7,h-14,u-14)},128,256)});P.emissiveMap=P.map,W(new VJ(1,2.1),P,[0,D+1.08,V+0.107]);let l="#262c2b";for(let _ of[3.38,4.22])Z(0,_,-1.56,8,0.04,0.04,l);for(let _=-3.94;_<=3.95;_+=0.14)Z(_,3.8,-1.56,0.018,0.84,0.018,l);for(let _ of[-3.97,3.97]){for(let h of[3.38,4.22])Z(_,h,-2.08,0.04,0.04,1.04,l);for(let h=-2.55;h<=-1.6;h+=0.14)Z(_,3.8,h,0.018,0.84,0.018,l)}for(let[_,h]of[[-3.3,-1.8],[3.25,-1.85],[1.5,-1.78]]){K(_,3.46,h,0.13,0.1,0.24,"#9a5a3c",12);for(let u=0;u<4;u++)W(new H8(1,8,6),Q(u%2?"#5b7f4f":"#44663e",0.95),[_+(u-1.5)*0.06,3.66+u%2*0.05,h+(u%3-1)*0.04],[0,0,0],[0.12,0.14,0.1])}K(2.5,I+0.52,-4.3,0.5,0.55,1,"#1f2322",18),K(2.5,I+1.06,-4.3,0.2,0.22,0.08,"#2b302f",12),K(-1.8,I+0.35,-4.6,0.035,0.035,0.7,"#8d8f89",8);for(let[_,h]of[[-3.95,-2.75],[3.95,-2.75],[-3.95,-5.15],[3.95,-5.15]])for(let[u,W0]of[[-0.05,-0.05],[0.05,-0.05],[-0.05,0.05],[0.05,0.05]])K(_+u,I+0.42,h+W0,0.007,0.007,0.84,"#6b4a35",4);let b=Q("#8a6a48",0.8),d=Q("#4f7f55",0.85);for(let _ of[0.55,1,1.45,1.9,2.35,2.8])Z(-3.53,_,-3.85,0.34,0.04,2.2,d);for(let _ of[-4.94,-2.76])Z(-3.53,1.65,_,0.34,2.3,0.04,d);let e=$((_,h,u)=>{_.fillStyle="#bdbdbd",_.fillRect(0,0,h,u),_.fillStyle="#ffffff",_.fillRect(0,u*0.34,h,u*0.34),_.fillStyle="#6a6a6a",_.fillRect(0,u*0.33,h,u*0.02),_.fillRect(0,u*0.67,h,u*0.02)},64,64),v=new o0({map:e,roughness:0.62}),j=["#c8402f","#e3ae55","#f3eee3","#2f6fa8","#3f8a5a","#e07a2e","#d65a7a","#f1d24a","#6fb7c9","#8a3b3b","#ffffff","#1f5f9e"],g=[],f=[],a=(_,h,u,W0,$0,q0)=>{let F0=_;while(F0<h){let z0=0.07+Y()*0.12,B0=0.12+Y()*0.17,b0=Math.min($0,0.1+Y()*0.12),r0=Y()<0.35,S0=new y0(j[Math.floor(Y()*j.length)]).multiplyScalar(0.7+Y()*0.22);if(F0+z0>h)break;let ZJ=q0==="x"?X(F0+z0/2,u+B0/2,W0):X(W0,u+B0/2,F0+z0/2);(r0?f:g).push({pos:ZJ,s:r0?X(z0*0.85,B0*0.8,z0*0.85):q0==="x"?X(z0,B0,b0):X(b0,B0,z0),col:S0}),F0+=z0+0.012}};for(let _ of[1.6125,2.5725])a(-3.4,2.2,_,-4.8,0.3,"x");for(let _ of[0.57,1.02,1.47,1.92,2.37,2.82])a(-4.9,-2.8,_,-3.55,0.28,"z");for(let[_,h]of[[new wJ(1,1,1),g],[new LJ(0.5,0.5,1,10),f]]){let u=new f9(_,v,h.length),W0=new SJ;h.forEach(($0,q0)=>{W0.position.copy($0.pos),W0.scale.copy($0.s),W0.rotation.set(0,(Y()-0.5)*0.12,0),W0.updateMatrix(),u.setMatrixAt(q0,W0.matrix),u.setColorAt(q0,$0.col)}),u.frustumCulled=!1,J.add(u)}{let h=Math.round(1024*(M8.tope-0.1)/M8.ancho),u=[[0.05,0.47],[0.53,0.95]],W0=(B0,b0)=>{if(B0.fillStyle=b0?"#000":"#5b3b24",B0.fillRect(0,0,1024,h),!b0){for(let r0=0;r0<500;r0++)B0.fillStyle=r0%2?"rgba(150,100,60,.25)":"rgba(30,18,10,.25)",B0.fillRect(Math.random()*1024,Math.random()*h,20+Math.random()*80,1+Math.random()*2);B0.fillStyle="#3a2616",B0.fillRect(0,h*0.88,1024,h*0.12)}for(let[r0,S0]of u){let ZJ=r0*1024,HJ=S0*1024,EJ=h*0.12,p=h*0.82;B0.fillStyle=b0?"#6e6a60":"#d9d3c1",B0.fillRect(ZJ,EJ,HJ-ZJ,p-EJ);for(let cJ=0;cJ<2;cJ++){let IJ=EJ+(cJ+0.5)*(p-EJ)/2;B0.fillStyle=b0?"#6f6a60":"#b9b3a2",B0.fillRect(ZJ,IJ+(p-EJ)*0.2,HJ-ZJ,4);let zJ=IJ+(p-EJ)*0.2;B0.globalAlpha=b0?0.7:1;for(let T=ZJ+10;T<HJ-60;){let C=Math.random()<0.3,c=j[Math.floor(Math.random()*j.length)];if(C){let Z0=18+Math.random()*6;B0.fillStyle=b0?"#9a9a9a":"rgba(235,240,240,.9)",B0.fillRect(T,zJ-Z0*2.4,Z0*2,Z0*2.4),B0.fillStyle=c;for(let D0=0;D0<7;D0++)B0.beginPath(),B0.arc(T+5+Math.random()*(Z0*2-10),zJ-6-Math.random()*Z0*1.8,5,0,Math.PI*2),B0.fill();B0.fillStyle="#c8402f",B0.fillRect(T-2,zJ-Z0*2.4-8,Z0*2+4,9),T+=Z0*2+8}else{let Z0=46+Math.random()*34,D0=(p-EJ)*(0.2+Math.random()*0.1);B0.fillStyle=c,B0.beginPath(),B0.moveTo(T,zJ),B0.lineTo(T+3,zJ-D0);for(let C0=0;C0<=6;C0++)B0.lineTo(T+3+C0*(Z0-6)/6,zJ-D0-(C0%2?5:0));B0.lineTo(T+Z0,zJ),B0.closePath(),B0.fill(),B0.fillStyle="rgba(255,255,255,.7)",B0.fillRect(T+Z0*0.2,zJ-D0*0.62,Z0*0.6,D0*0.22),B0.fillStyle="rgba(255,255,255,.25)",B0.fillRect(T+4,zJ-D0+8,5,D0-14),T+=Z0+5}}B0.globalAlpha=1}if(!b0)B0.fillStyle="rgba(255,255,255,.22)",B0.beginPath(),B0.moveTo(ZJ+20,EJ),B0.lineTo(ZJ+70,EJ),B0.lineTo(ZJ+20,p),B0.lineTo(ZJ-10+20,p),B0.fill(),B0.strokeStyle="#3a2616",B0.lineWidth=10,B0.strokeRect(ZJ,EJ,HJ-ZJ,p-EJ)}},$0=(B0)=>$((b0)=>W0(b0,B0),1024,h),q0=new o0({map:$0(!1),emissive:"#fff4de",emissiveMap:$0(!0),emissiveIntensity:0.2,roughness:0.55}),F0=M8.tope-0.1,z0=new I0(new VJ(M8.ancho,F0),q0);z0.position.set(0,F0/2,M8.z+M8.fondo/2+0.006),J.add(z0)}let m=$((_,h,u)=>{let $0=u/7;_.fillStyle="#8a7a5a",_.fillRect(h/2-2,0,4,u);for(let q0=0;q0<7;q0++){let F0=q0*$0+4;_.fillStyle=j[(q0*5+3)%j.length],_.fillRect(6,F0,h-12,$0-8),_.fillStyle="rgba(255,255,255,.3)",_.fillRect(10,F0+6,h*0.16,$0-20),_.fillStyle="rgba(255,255,255,.75)",_.fillRect(h*0.3,F0+$0*0.36,h*0.4,$0*0.16)}},64,448),J0=new o0({map:m,roughness:0.45,alphaTest:0.5,side:oJ});for(let _ of[-1.74,-1.52,1.52,1.74])W(new VJ(0.15,0.86),J0,[_,2.66,-3.86],[0,(Y()-0.5)*0.5,0]);let X0=new I0(new VJ(0.8,1.5),new xJ({color:new y0(1.05,1.08,1.1),map:$((_,h,u)=>{_.fillStyle="#dcecef",_.fillRect(0,0,h,u);let W0=5;for(let q0=0;q0<W0;q0++){let F0=u/W0,z0=q0*F0;_.fillStyle="rgba(140,160,165,.9)",_.fillRect(0,z0+F0*0.88,h,5);for(let B0=0;B0<8;B0++){let b0=(h-20)/8,r0=10+B0*b0;_.fillStyle=["#c8402f","#2c7a3f","#e3ae55","#7a3a1c","#2f6fa8","#f3eee3","#e07a2e"][(B0+q0*3)%7],_.fillRect(r0+b0*0.15,z0+F0*0.3,b0*0.7,F0*0.56),_.fillRect(r0+b0*0.36,z0+F0*0.12,b0*0.28,F0*0.2)}}let $0=_.createLinearGradient(0,0,h,0);$0.addColorStop(0,"rgba(255,255,255,.3)"),$0.addColorStop(0.35,"rgba(255,255,255,0)"),_.fillStyle=$0,_.fillRect(0,0,h,u),_.strokeStyle="#9aa8aa",_.lineWidth=10,_.strokeRect(0,0,h,u)},256,480)}));X0.position.set(2.95,1.12,-4.09),J.add(X0);let y=new I0(new VJ(0.9,0.2),new xJ({map:N("Bien fría",{w:720,h:160,fondo:"#b8372b",tinta:"#f3eee3",sombra:null,px:0.62}),color:new y0(1.1,1.1,1.1)}));y.position.set(2.95,2.17,-4.14),J.add(y),Z(2.45,0.4,-1.86,1,0.8,0.6,"#e7ebe8"),Z(2.45,0.83,-1.86,1.04,0.06,0.64,"#d4dad8"),Z(2.45,0.12,-1.555,0.96,0.1,0.012,"#b9c0bd");{let _=new I0(new VJ(0.62,0.19),new o0({map:N("HIELO",{w:640,h:196,fondo:null,tinta:"#1f5f9e",sombra:"#c8402f",px:0.7}),transparent:!0,roughness:0.8}));_.position.set(2.45,0.55,-1.553),J.add(_)}{let _=Q("#2d63a8",0.5),h=new o0({color:"#8cc0e6",roughness:0.12,transparent:!0,opacity:0.84});for(let $0=0;$0<2;$0++)for(let q0=0;q0<3;q0++){let F0=3.15+$0*0.4,z0=0.21+q0*0.4;W(new LJ(0.155,0.155,0.4,16),h,[F0,z0,-2],[Math.PI/2,0,0]),W(new LJ(0.05,0.05,0.1,10),h,[F0,z0,-2.25],[Math.PI/2,0,0])}for(let $0 of[0,0.4,0.8,1.2])Z(3.35,$0+0.012,-2,0.84,0.024,0.46,_);for(let $0 of[2.94,3.35,3.7600000000000002])Z($0,0.61,-2,0.03,1.22,0.46,_)}let o=(_,h,u,W0,$0)=>{let q0=Q($0,0.5),F0=(z0,B0,b0,r0,S0=0)=>{z0.rotateX(S0);let ZJ=X(B0,b0,r0).applyAxisAngle(X(0,1,0),W0);W(z0,q0,[_+ZJ.x,h+ZJ.y,u+ZJ.z],[0,W0,0])};F0(new j8(0.46,0.035,0.43,2,0.015),0,0.43,0),F0(new j8(0.44,0.42,0.03,2,0.012),0,0.71,-0.22,-0.16);for(let z0 of[-0.2,0.2])F0(new LJ(0.018,0.024,0.43,6),z0,0.215,0.17,0.12),F0(new LJ(0.018,0.024,0.45,6),z0,0.22,-0.19,-0.14),F0(new wJ(0.03,0.18,0.3),z0*1.1,0.54,-0.02)};for(let _=0;_<4;_++)o(-3.42,_*0.075,-1.32-_*0.012,0.3,"#ecece6");o(3.55,0,0.55,-1.9,"#ecece6");{let W0=(B0,b0,r0,S0,ZJ,HJ=0,EJ=0)=>{B0.rotateX(HJ),B0.rotateZ(EJ);let p=X(r0,S0,ZJ).applyAxisAngle(X(0,1,0),0.3);W(B0,b0,[-3.25+p.x,p.y,2.85+p.z],[0,0.3,0])},$0=Q("#171b1b",0.8),q0=Q("#9aa3a0",0.35,0.6),F0=Q("#a8382c",0.45,0.1),z0=Q("#1e2222",0.7);for(let B0 of[-0.52,0.5])W0(new b9(0.26,0.055,8,18),$0,B0,0.3,0),W0(new LJ(0.09,0.09,0.08,10),q0,B0,0.3,0,Math.PI/2);W0(new j8(0.6,0.22,0.24,2,0.05),F0,-0.02,0.53,0,0,-0.08),W0(new j8(0.55,0.08,0.26,2,0.03),z0,-0.28,0.68,0),W0(new j8(0.28,0.34,0.2,2,0.05),F0,0.37,0.64,0,0,-0.35),W0(new LJ(0.018,0.018,0.62,6),q0,0.44,0.92,0,Math.PI/2),W0(new LJ(0.02,0.02,0.62,6),q0,0.47,0.6,0,0,0.35),W0(new LJ(0.03,0.035,0.45,8),q0,-0.35,0.3,0.13,0,Math.PI/2+0.1),W0(new j8(0.3,0.03,0.22,1,0.01),q0,-0.6,0.73,0)}for(let _=-9;_<4.4;_+=2)Z(_+0.5,-0.074,3.45,1,0.152,0.202,"#d6b24e");Z(8.3,-0.2,-4.575,7.4,0.1,15.85,"#2b3133"),Z(4.6,-0.075,-4.575,0.2,0.15,15.85,"#a8a391"),Z(12.3,-0.07,-4.575,1.2,0.16,15.85,"#8a8578");for(let _=-11;_<3;_+=1.8)Z(8.3,-0.146,_,0.06,0.008,0.7,"#b9ad83");{let _=new o0({color:"#ffd08a",emissive:"#ffb35a",emissiveIntensity:2.2}),h=Q("#2a3436",0.8),u=["#d8a25a","#8fb8a8","#e0d2b0","#c9897d","#b9c47a"],W0=-12,$0=0;while(W0<2.4){let q0=3+Y()*1.6,F0=3+Y()*2.6,z0=u[$0++%u.length];Z(14.4,F0/2,W0+q0/2,3,F0,q0,z0),Z(14.4,F0+0.08,W0+q0/2,3.1,0.16,q0+0.1,"#ddd4bf");let B0=Math.max(1,Math.floor(q0/1.5));for(let b0=0;b0<B0;b0++){let r0=W0+(b0+0.5)*q0/B0;if(W(new VJ(0.75,0.95),Y()<0.4?_:h,[12.885,1.55,r0],[0,-Math.PI/2,0]),F0>4.2)W(new VJ(0.7,0.8),Y()<0.35?_:h,[12.885,F0-1.1,r0],[0,-Math.PI/2,0])}W0+=q0+0.15}}{let _=new o0({roughness:0.6,metalness:0.3,map:$((u,W0,$0)=>{u.fillStyle="#8f9a94",u.fillRect(0,0,W0,$0);for(let q0=0;q0<$0;q0+=8)u.fillStyle="rgba(40,45,44,.35)",u.fillRect(0,q0,W0,2),u.fillStyle="rgba(230,235,230,.18)",u.fillRect(0,q0+3,W0,2);for(let q0=0;q0<40;q0++)u.fillStyle="rgba(120,70,40,.18)",u.fillRect(Y()*W0,Y()*$0,4+Y()*20,2+Y()*10)},256,256)});W(new VJ(2.3,2.1),_,[-7,1.05,-1.365]),Z(-7,2.2,-1.33,2.45,0.2,0.1,"#6d7571");let h=new I0(new VJ(1.7,0.42),new o0({map:N("Banca La Suerte",{w:1024,h:252,fondo:"#2f7a4d",tinta:"#f3eee3",sombra:"#1b2c22",borde:"#e3ae55",px:0.52}),roughness:0.85,emissive:"#ffffff",emissiveIntensity:0.08}));h.material.emissiveMap=h.material.map,h.position.set(-10.5,2.72,-1.36),J.add(h)}let N0=X(4.3,0,3);K(N0.x,3.9,N0.z,0.11,0.16,7.8,"#8e8a80",10),Z(N0.x,7.25,N0.z,0.1,0.1,1.7,"#5c574c"),K(N0.x+0.28,6.3,N0.z,0.2,0.2,0.62,"#6d7470",12);let t=(_,h,u,W0="#141819",$0=0.011)=>{let q0=_.clone().lerp(h,0.5);q0.y-=u*2,W(new b8(new s8(_,q0,h),22,$0,4,!1),Q(W0),[0,0,0])};for(let _ of[-0.6,0,0.6])t(X(N0.x,7.3,N0.z+_),X(6,6.6,9.2+_*0.4),0.25);for(let _ of[-0.5,0.5])t(X(N0.x,7.3,N0.z+_),X(-5,4.2,-1+_*0.6),0.55);t(X(N0.x,6.4,N0.z),X(3.95,5.7,-2.72),0.35),t(X(N0.x,6.2,N0.z),X(3.95,5.5,-2.72),0.5,"#1d2121",0.008),t(X(N0.x,5.9,N0.z),X(4.35,5.4,-9),0.4,"#1d2121",0.009),t(X(N0.x,5.7,N0.z),X(4.35,5.2,-9),0.6,"#20241f",0.007);{let _=new $7(Array.from({length:14},(h,u)=>{let W0=u/13*Math.PI*4;return X(N0.x+0.16+Math.cos(W0)*0.14,5.2-u*0.018+Math.sin(W0)*0.14,N0.z+Math.sin(W0)*0.05)}));W(new b8(_,60,0.008,4,!1),Q("#141819"),[0,0,0])}let x=0;return{update(_){if(_>x)x=_+0.25+Math.random()*1.4,k.emissiveIntensity=0.12+Math.random()*0.45,k.emissive.setHSL(0.58+Math.random()*0.08,0.5,0.55+Math.random()*0.2)}}}function qN({scene:J,random:$=Math.random}){let Q=$,Z=[],K=[],W=[],Y=new y0,X=(j,g,f=Z)=>{Y.set(g);let a=j.attributes.position.count,m=new Float32Array(a*3);for(let J0=0;J0<a;J0++)m[J0*3]=Y.r,m[J0*3+1]=Y.g,m[J0*3+2]=Y.b;return j.setAttribute("color",new tJ(m,3)),j.deleteAttribute("uv"),f.push(j),j},H=(j,g,f,a,m,J0,X0,y=0,o)=>{let N0=new wJ(a,m,J0);if(y)N0.rotateY(y);return N0.translate(j,g,f),X(N0,X0,o)},U=(j,g,f,a,m,J0,X0=8)=>{let y=new LJ(a,a,m,X0);return y.translate(j,g,f),X(y,J0)},N=(j,g,f,a,m,J0,X0,y)=>{let o=new VJ(a,m);return o.rotateY(J0),o.translate(j,g,f),X(o,X0,y)},F=(j)=>j[Math.floor(Q()*j.length)],G=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0","#b7a4c9","#e0a58f","#9ec3b0"],q=["#9a968c","#8d8a80","#a39d90"],O="#8a8578",B="#a8a391",R="#2b3133",E="#b9ad83",D="#1b2224",M="#232c2e",V=(j)=>"#"+new y0(j).multiplyScalar(0.85).getHexString();function I(j,g,f,a,m,J0,{lejos:X0=!1}={}){let o=J0*2.9+0.3,N0=Q()<0.18?F(q):V(F(G)),t=new S(Math.sin(f),0,Math.cos(f)),x=new S(t.z,0,-t.x),_=($0,q0,F0)=>new S(j,q0,g).addScaledVector(x,$0).addScaledVector(t,F0),h=_(0,o/2,-m/2);H(h.x,h.y,h.z,a,o,m,N0,f);let u=_(0,o+0.09,-m/2);H(u.x,u.y,u.z,a+0.12,0.18,m+0.12,"#d9d2bf",f);let W0=Math.max(1,Math.floor(a/1.6));for(let $0=0;$0<J0;$0++)for(let q0=0;q0<W0;q0++){let F0=-a/2+(q0+0.5)*a/W0,z0=$0*2.9+1.55,B0=_(F0,z0,X0?0.04:0.012),b0=Q()<(X0?0.3:0.38);if($0===0&&q0===Math.floor(W0/2)&&!X0){let r0=_(F0,1.05,0.012);N(r0.x,r0.y,r0.z,0.95,2.1,f,Q()<0.3?"#7c8680":"#232c2e");continue}if(b0)N(B0.x,B0.y,B0.z,0.72,0.9,f,Q()<0.22?"#9fc3ff":F(["#ffd08a","#ffc27a","#ffe0a8"]),K);else N(B0.x,B0.y,B0.z,0.72,0.9,f,"#232c2e")}if(X0){w(_,o,a,m);return}if(Q()<0.5){let $0=_(0,0.5,0.55);H($0.x,1,$0.z,a-0.1,0.05,0.05,"#1b2224",f);for(let F0 of[-0.5,-0.25,0,0.25,0.5]){let z0=_(F0*(a-0.1),0.5,0.55);H(z0.x,0.5,z0.z,0.05,1,0.05,"#1b2224",f)}let q0=_(0,2.75,0.6);H(q0.x,q0.y,q0.z,a,0.12,1.2,"#cfc6b2",f)}if(J0>1&&Q()<0.6){let $0=_(0,2.9499999999999997,0.45);H($0.x,$0.y,$0.z,a*0.7,0.12,0.9,"#cfc6b2",f);let q0=_(0,3.45,0.88);H(q0.x,q0.y,q0.z,a*0.7,0.05,0.05,"#1b2224",f);for(let F0=0;F0<=6;F0++){let z0=_((F0/6-0.5)*a*0.7,3.23,0.88);H(z0.x,z0.y,z0.z,0.03,0.5,0.03,"#1b2224",f)}}w(_,o,a,m)}function w(j,g,f,a){if(Q()<0.45){let m=j((Q()-0.5)*f*0.5,g+0.7,-a*(0.3+Q()*0.4));U(m.x,m.y,m.z,0.55,1.1,"#1f2324",10)}if(Q()<0.22)for(let m=0;m<4;m++){let J0=j((m%2-0.5)*(f-0.4),g+0.5,-(m<2?0.3:a-0.3));H(J0.x,J0.y,J0.z,0.04,1+Q()*0.4,0.04,"#5a4a3c")}if(Q()<0.15){let m=j(f*0.3,g+1.1,-a*0.5);H(m.x,m.y,m.z,0.03,2,0.03,"#3a3f40"),H(m.x,m.y+0.6,m.z,0.9,0.03,0.03,"#3a3f40")}}function k({eje:j,desde:g,hasta:f,fachada:a,ry:m,fondo:J0=[6,9],pisos:X0=[1,3]}){let y=g;while(y<f-2){let o=Math.min(3.4+Q()*3.4,f-y),N0=y+o/2,t=a+(Q()-0.5)*0.5,x=X0[0]+Math.floor(Q()*(X0[1]-X0[0]+1));if(j==="x")I(N0,t,m,o,J0[0]+Q()*(J0[1]-J0[0]),x);else I(t,N0,m,o,J0[0]+Q()*(J0[1]-J0[0]),x);y+=o+0.12+(Q()<0.12?0.9+Q()*1.5:0)}}{let j=new VJ(460,460);j.rotateX(-Math.PI/2),j.translate(0,-0.26,0),X(j,"#35363a")}for(let[j,g]of[[-86,-20],[20,86]]){let f=(j+g)/2,a=g-j;H(f,-0.2,6.05,a,0.1,5.4,"#2b3133"),H(f,0.08,9.6,a,0.16,1.8,"#8a8578");for(let m=j+1;m<g;m+=3.6)H(m,-0.146,6.3,1.4,0.008,0.1,"#b9ad83")}H(-51,-0.1,0.97,70,0.2,4.76,"#8a8578"),H(-51,-0.075,3.45,70,0.15,0.2,"#a8a391"),H(49.45,-0.1,2.18,73.1,0.2,2.36,"#8a8578"),H(49.45,-0.075,3.45,73.1,0.15,0.2,"#a8a391"),k({eje:"x",desde:-84,hasta:-20.3,fachada:10.6,ry:Math.PI}),k({eje:"x",desde:20.3,hasta:84,fachada:10.6,ry:Math.PI}),k({eje:"x",desde:-84,hasta:-22.8,fachada:-1.4,ry:0}),k({eje:"x",desde:16.1,hasta:84,fachada:1,ry:0}),H(8.3,-0.2,-49.25,7.4,0.1,73.5,"#2b3133"),H(4.25,-0.1,-49.25,0.7,0.2,73.5,"#8a8578"),H(12.3,-0.07,-49.25,1.2,0.16,73.5,"#8a8578");for(let j=-13;j>-85;j-=3.6)H(8.3,-0.146,j,0.1,0.008,1.4,"#b9ad83");k({eje:"z",desde:-84,hasta:-5.5,fachada:3.9,ry:Math.PI/2,fondo:[7,9]}),k({eje:"z",desde:-84,hasta:-12.2,fachada:12.9,ry:-Math.PI/2,fondo:[7,9]});let L=(j,g,f)=>{let a=j.clone().lerp(g,0.5);a.y-=f*2;let m=new b8(new s8(j,a,g),14,0.014,3,!1);X(m,"#101517")},P=(j,g)=>{U(j,3.5,g,0.1,7,"#6b6457",6),H(j,6.6,g,1.6,0.08,0.08,"#4f4a40")},l=(j,g,f)=>{H(j+f.x*0.55,6,g+f.z*0.55,Math.abs(f.x)?1.1:0.06,0.06,Math.abs(f.z)?1.1:0.06,"#4f4a40");let a=new H8(0.16,8,6);a.translate(j+f.x*1.1,5.9,g+f.z*1.1),X(a,"#ffb866",W)};for(let j of[-1,1]){let g=j<0?-14:16;for(let f=1;f<=5;f++){let a=j<0?-14-f*12:16+f*12;if(P(a,9.2),f%2===0)l(a,9.2,new S(0,0,-1));for(let m of[0,-0.25,0.3])L(new S(g,6.6+m,9.2),new S(a,6.6+m,9.2),0.5);g=a}}{let j=-9;for(let g=1;g<=6;g++){let f=-9-g*12;if(P(12.4,f),g%2===1)l(12.4,f,new S(-1,0,0));for(let a of[0,0.3])L(new S(12.4,6.6+a,j),new S(12.4,6.6+a,f),0.5);j=f}}let b=(j,g,f)=>{let a=F(["#8b2f2a","#c9c6bd","#2f4a6b","#3b3f42","#b58a3a","#e2dfd6","#556b4f"]),m=new S(Math.sin(f),0,Math.cos(f));H(j,0.55,g,1.75,0.62,4.1,a,f);let J0=m.clone().multiplyScalar(-0.3);H(j+J0.x,1.1,g+J0.z,1.55,0.52,2.1,"#2a3236",f);let X0=new S(m.z,0,-m.x);for(let[y,o]of[[-0.8,1.3],[0.8,1.3],[-0.8,-1.3],[0.8,-1.3]]){let N0=new LJ(0.32,0.32,0.22,10);N0.rotateZ(Math.PI/2),N0.rotateY(f);let t=new S(j,0.32,g).addScaledVector(X0,y).addScaledVector(m,o);N0.translate(t.x,t.y,t.z),X(N0,"#141718")}};for(let[j,g,f]of[[-31,4.4,Math.PI/2],[-47,4.4,Math.PI/2],[-72,4.4,-Math.PI/2],[27,4.4,Math.PI/2],[55,4.4,-Math.PI/2],[-58,7.9,Math.PI/2],[38,7.9,-Math.PI/2],[5.6,-24,0],[5.6,-41,Math.PI],[10.8,-31,0],[10.8,-62,Math.PI]])b(j,g,f);let d=(j,g)=>Math.abs(j)<30&&g>-22&&g<24||g>-14&&g<20||g<-10&&j>-12&&j<30;for(let j=-78;j<=78;j+=13)for(let g=-78;g<=78;g+=13){let f=j+(Q()-0.5)*6,a=g+(Q()-0.5)*6;if(d(f,a)||Math.hypot(f,a)>80)continue;let m=Math.hypot(f,a),J0=m>45&&Q()<0.07,X0=Math.atan2(-f,-a),y=Math.round(X0/(Math.PI/2))*(Math.PI/2),o=J0?5+Math.floor(Q()*5):1+Math.floor(Q()*(a>0?2:3));if(I(f,a,y,6+Q()*6,6+Q()*5,o,{lejos:!0}),Q()<0.35){let N0=F(["#3f5a3c","#4a6443","#35503a"]),t=f+(Q()-0.5)*8,x=a+(Q()-0.5)*8,_=2+Q()*2.5,h=new GQ(_,0);h.scale(1,0.8,1),h.translate(t,_*0.6+2.5,x),X(h,N0),U(t,1.4,x,0.25,2.8,"#4d4234",5)}}for(let j=0;j<14;j++){let g=Q()*Math.PI*2,f=32+Q()*44,a=Math.cos(g)*f,m=Math.sin(g)*f;if(d(a,m))continue;let J0=9+Q()*5,X0=new LJ(0.14,0.22,J0,5);X0.translate(a,J0/2,m),X(X0,"#5d5445");for(let y=0;y<8;y++){let o=new W6(0.3,3,3,1);o.rotateZ(Math.PI/2+0.5),o.translate(1.5,0,0),o.rotateY(y/8*Math.PI*2),o.translate(a,J0,m),X(o,"#34503a")}}{let g=[],f=[];for(let m=0;m<=240;m++){let J0=m/240*Math.PI*2,X0=86+Math.sin(J0*3.1)*1.5,y=6+7*(0.5+0.5*Math.sin(J0*2.3+0.7))+3.5*Math.sin(J0*5.1+1)**2+1.2*Math.sin(J0*13.7+2)+0.5*Math.sin(J0*31.3);if(g.push(Math.cos(J0)*X0,-1,Math.sin(J0)*X0,Math.cos(J0)*X0,Math.max(5,y),Math.sin(J0)*X0),m<240){let o=m*2;f.push(o,o+2,o+1,o+1,o+2,o+3)}}let a=new bJ;a.setAttribute("position",new UJ(g,3)),a.setIndex(f),a.computeVertexNormals(),X(a,"#3d4552")}let e=[],v=(j,g)=>{if(!j.length)return;let f=j.map((J0)=>J0.index?J0.toNonIndexed():J0),a=E$(f,!1);if(f.forEach((J0)=>J0.dispose()),j.forEach((J0)=>J0.dispose()),!a)return;let m=new I0(a,g);m.matrixAutoUpdate=!1,J.add(m),e.push(m)};return v(Z,new o0({vertexColors:!0,roughness:0.92,side:oJ})),v(K,new xJ({vertexColors:!0,color:new y0(1.9,1.9,1.9)})),v(W,new xJ({vertexColors:!0,color:new y0(5,5,5)})),{mallas:e}}var oR=["cafe","morir","presidente","presidente"];function aR(){let J=document.createElement("canvas");J.width=256,J.height=128;let $=J.getContext("2d");$.fillStyle="#f1ece0",$.fillRect(0,0,256,128),$.fillStyle="#b3262d",$.fillRect(0,10,256,14),$.fillRect(0,104,256,14),$.fillStyle="#1f5a36",$.beginPath(),$.ellipse(128,64,54,28,0,0,Math.PI*2),$.fill(),$.fillStyle="#f1ece0",$.beginPath(),$.ellipse(128,64,46,21,0,0,Math.PI*2),$.fill(),$.fillStyle="#b3262d",$.fillRect(92,58,72,12);let Q=new n8(J);return Q.colorSpace=Q8,Q}function rR(){let J=new _J,$=(H,U)=>new R0(H,U),Q=[$(0,0),$(0.034,0),$(0.037,0.006),$(0.037,0.165),$(0.034,0.188),$(0.022,0.222),$(0.0145,0.252),$(0.0138,0.274),$(0.0158,0.279),$(0.0158,0.29),$(0.0112,0.29),$(0.0106,0.268),$(0.0112,0.24)],Z=new o0({color:"#2d5a26",roughness:0.18,metalness:0.05,envMapIntensity:1.4});J.add(new I0(new P7(Q,20),Z));let K=new I0(new P7(Q.slice(1,5).map((H)=>$(H.x+0.0006,H.y)),20),new o0({color:"#e8f0e4",roughness:0.9,transparent:!0,opacity:0.22,depthWrite:!1}));J.add(K);let W=new I0(new LJ(0.0376,0.0376,0.075,24,1,!0),new o0({map:aR(),roughness:0.6}));W.position.y=0.095,J.add(W);let Y=new I0(new LJ(0.0149,0.0152,0.02,16,1,!0),new o0({color:"#b3262d",roughness:0.5}));Y.position.y=0.262,J.add(Y);let X=new I0(new J7(0.0112,16),new xJ({color:"#0d160c"}));return X.rotation.x=-Math.PI/2,X.position.y=0.245,J.add(X),{g:J,alto:0.11,radio:0.037,inclina:1.25,boca:0.18}}function tR(){let J=new _J,$=new I0(new LJ(0.034,0.029,0.14,24,1,!0),new o0({color:"#dfe9ec",roughness:0.08,transparent:!0,opacity:0.28,depthWrite:!1,side:oJ}));$.position.y=0.07,$.renderOrder=2,J.add($);let Q=new I0(new LJ(0.029,0.029,0.008,24),new o0({color:"#dfe9ec",roughness:0.1,transparent:!0,opacity:0.5}));Q.position.y=0.004,J.add(Q);let Z=new I0(new LJ(0.0318,0.0285,0.112,24),new o0({color:"#f2bf86",roughness:0.45}));Z.position.y=0.064,J.add(Z);for(let[W,Y,X]of[[0.01,0.006,0.4],[-0.009,-0.008,1.1],[0.002,-0.012,2]]){let H=new I0(new wJ(0.016,0.013,0.016),new o0({color:"#f6f3ec",roughness:0.15,transparent:!0,opacity:0.8}));H.position.set(W,0.121,Y),H.rotation.set(X,X*0.7,0),J.add(H)}let K=new I0(new LJ(0.0028,0.0028,0.19,8),new o0({color:"#c8392e",roughness:0.5}));return K.position.set(0.012,0.11,0.004),K.rotation.z=-0.16,J.add(K),{g:J,alto:0.06,radio:0.034,inclina:0.85,boca:0.09}}function eR(){let J=new _J,$=new o0({color:"#efe9da",roughness:0.22}),Q=new I0(new LJ(0.053,0.047,0.008,28),$);Q.position.y=0.004,J.add(Q);let Z=new o0({color:"#efe9da",roughness:0.22,side:oJ}),K=new I0(new LJ(0.034,0.025,0.056,24,1,!0),Z),W=new I0(new J7(0.025,20),$);W.rotation.x=-Math.PI/2,W.position.y=0.0085,J.add(W),K.position.y=0.036,J.add(K);let Y=new I0(new J7(0.0318,24),new o0({color:"#2a160c",roughness:0.15}));Y.rotation.x=-Math.PI/2,Y.position.y=0.056,J.add(Y);let X=new I0(new b9(0.014,0.004,6,12,Math.PI*1.3),$);return X.position.set(0.036,0.038,0),X.rotation.z=-Math.PI*0.65,J.add(X),J.remove(Q),{g:J,alto:0.034,radio:0.034,inclina:0.9,boca:0.034,plato:Q}}function ON(J){let $=[];for(let Q=0;Q<4;Q++){let Z=oR[Q],K=Z==="presidente"?rR():Z==="morir"?tR():eR(),[W,Y,X]=C9[Q],H=M0.tableWidth/2-0.055,U=M0.tableCenterY+M0.tableThickness/2,N=new S(-H,0,M0.seatDistance-H).applyAxisAngle(new S(0,1,0),X).add(new S(W,0,Y));if(N.y=U,K.g.traverse((F)=>{if(F.isMesh)F.castShadow=!0,F.receiveShadow=!0}),K.plato)N.y+=0.008;if(K.g.position.copy(N),J.add(K.g),K.plato)K.plato.position.copy(N),K.plato.position.y=U+0.004,K.plato.traverse((F)=>{if(F.isMesh)F.receiveShadow=!0}),J.add(K.plato);$.push({group:K.g,home:N,index:Q,tipo:Z,alto:K.alto,radio:K.radio,inclina:K.inclina,boca:K.boca})}return $}var B$={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class N9{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var JL=new Y7(-1,1,1,-1,0,1);class RN extends bJ{constructor(){super();this.setAttribute("position",new UJ([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new UJ([0,2,0,0,2,0],2))}}var $L=new RN;class R6{constructor(J){this._mesh=new I0($L,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,JL)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class SQ extends N9{constructor(J,$="tDiffuse"){super();if(this.textureID=$,this.uniforms=null,this.material=null,J instanceof J8)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=Q7.clone(J.uniforms),this.material=new J8({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new R6(this.material)}render(J,$,Q){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=Q.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget($),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class zK extends N9{constructor(J,$){super();this.scene=J,this.camera=$,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,$,Q){let Z=J.getContext(),K=J.state;K.buffers.color.setMask(!1),K.buffers.depth.setMask(!1),K.buffers.color.setLocked(!0),K.buffers.depth.setLocked(!0);let W,Y;if(this.inverse)W=0,Y=1;else W=1,Y=0;if(K.buffers.stencil.setTest(!0),K.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),K.buffers.stencil.setFunc(Z.ALWAYS,W,4294967295),K.buffers.stencil.setClear(Y),K.buffers.stencil.setLocked(!0),J.setRenderTarget(Q),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget($),this.clear)J.clear();J.render(this.scene,this.camera),K.buffers.color.setLocked(!1),K.buffers.depth.setLocked(!1),K.buffers.color.setMask(!0),K.buffers.depth.setMask(!0),K.buffers.stencil.setLocked(!1),K.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),K.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),K.buffers.stencil.setLocked(!0)}}class EX extends N9{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class qX{constructor(J,$){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),$===void 0){let Q=J.getSize(new R0);this._width=Q.width,this._height=Q.height,$=new Z8(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:L8}),$.texture.name="EffectComposer.rt1"}else this._width=$.width,this._height=$.height;this.renderTarget1=$,this.renderTarget2=$.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new SQ(B$),this.copyPass.material.blending=Q9,this.timer=new YK}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,$){this.passes.splice($,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let $=this.passes.indexOf(J);if($!==-1)this.passes.splice($,1)}isLastEnabledPass(J){for(let $=J+1;$<this.passes.length;$++)if(this.passes[$].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let $=this.renderer.getRenderTarget(),Q=!1;for(let Z=0,K=this.passes.length;Z<K;Z++){let W=this.passes[Z];if(W.enabled===!1)continue;if(W.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),W.render(this.renderer,this.writeBuffer,this.readBuffer,J,Q),W.needsSwap){if(Q){let Y=this.renderer.getContext(),X=this.renderer.state.buffers.stencil;X.setFunc(Y.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),X.setFunc(Y.EQUAL,1,4294967295)}this.swapBuffers()}if(zK!==void 0){if(W instanceof zK)Q=!0;else if(W instanceof EX)Q=!1}}this.renderer.setRenderTarget($)}reset(J){if(J===void 0){let $=this.renderer.getSize(new R0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=$.width,this._height=$.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,$){this._width=J,this._height=$;let Q=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize(Q,Z),this.renderTarget2.setSize(Q,Z);for(let K=0;K<this.passes.length;K++)this.passes[K].setSize(Q,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class OX extends N9{constructor(J,$,Q=null,Z=null,K=null){super();this.scene=J,this.camera=$,this.overrideMaterial=Q,this.clearColor=Z,this.clearAlpha=K,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new y0}render(J,$,Q){let Z=J.autoClear;J.autoClear=!1;let K,W;if(this.overrideMaterial!==null)W=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)K=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:Q),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(K);if(this.overrideMaterial!==null)this.scene.overrideMaterial=W;J.autoClear=Z}}var LN={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new y0(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class L6 extends N9{constructor(J,$=1,Q,Z){super();this.strength=$,this.radius=Q,this.threshold=Z,this.resolution=J!==void 0?new R0(J.x,J.y):new R0(256,256),this.clearColor=new y0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);this.renderTargetBright=new Z8(K,W,{type:L8,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let N=new Z8(K,W,{type:L8,depthBuffer:!1});N.texture.name="UnrealBloomPass.h"+U,N.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(N);let F=new Z8(K,W,{type:L8,depthBuffer:!1});F.texture.name="UnrealBloomPass.v"+U,F.texture.generateMipmaps=!1,this.renderTargetsVertical.push(F),K=Math.round(K/2),W=Math.round(W/2)}let Y=LN;this.highPassUniforms=Q7.clone(Y.uniforms),this.highPassUniforms.luminosityThreshold.value=Z,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new J8({uniforms:this.highPassUniforms,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader}),this.separableBlurMaterials=[];let X=[6,10,14,18,22];K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(X[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new R0(1/K,1/W),K=Math.round(K/2),W=Math.round(W/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=$,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let H=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=H,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Q7.clone(B$.uniforms),this.blendMaterial=new J8({uniforms:this.copyUniforms,vertexShader:B$.vertexShader,fragmentShader:B$.fragmentShader,premultipliedAlpha:!0,blending:j9,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new y0,this._oldClearAlpha=1,this._basic=new xJ,this._fsQuad=new R6(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,$){let Q=Math.round(J/2),Z=Math.round($/2);this.renderTargetBright.setSize(Q,Z);for(let K=0;K<this.nMips;K++)this.renderTargetsHorizontal[K].setSize(Q,Z),this.renderTargetsVertical[K].setSize(Q,Z),this.separableBlurMaterials[K].uniforms.invSize.value=new R0(1/Q,1/Z),Q=Math.round(Q/2),Z=Math.round(Z/2)}render(J,$,Q,Z,K){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let W=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),K)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=Q.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=Q.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let Y=this.renderTargetBright;for(let X=0;X<this.nMips;X++)this._fsQuad.material=this.separableBlurMaterials[X],this.separableBlurMaterials[X].uniforms.colorTexture.value=Y.texture,this.separableBlurMaterials[X].uniforms.direction.value=L6.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[X]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[X].uniforms.colorTexture.value=this.renderTargetsHorizontal[X].texture,this.separableBlurMaterials[X].uniforms.direction.value=L6.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[X]),J.clear(),this._fsQuad.render(J),Y=this.renderTargetsVertical[X];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,K)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget(Q),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=W}_getSeparableBlurMaterial(J){let $=[],Q=J/3;for(let W=0;W<J;W++)$.push(0.39894*Math.exp(-0.5*W*W/(Q*Q))/Q);let Z=[],K=[];for(let W=1;W<J;W+=2){let Y=$[W],X=W+1<J?$[W+1]:0,H=Y+X;Z.push((W*Y+(W+1)*X)/H),K.push(H)}return new J8({defines:{KERNEL_PAIRS:Z.length},uniforms:{colorTexture:{value:null},invSize:{value:new R0(0.5,0.5)},direction:{value:new R0(0.5,0.5)},centerWeight:{value:$[0]},gaussianOffsets:{value:Z},gaussianWeights:{value:K}},vertexShader:`

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

				}`})}}L6.BlurDirectionX=new R0(1,0);L6.BlurDirectionY=new R0(0,1);var jQ={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class RX extends N9{constructor(){super();this.isOutputPass=!0,this.uniforms=Q7.clone(jQ.uniforms),this.material=new EQ({name:jQ.name,uniforms:this.uniforms,vertexShader:jQ.vertexShader,fragmentShader:jQ.fragmentShader}),this._fsQuad=new R6(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,$,Q){if(this.uniforms.tDiffuse.value=Q.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},RJ.getTransfer(this._outputColorSpace)===uJ)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===o$)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===a$)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===r$)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===n7)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===e$)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===JQ)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===t$)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget($),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var _8=(()=>{let J=7;return()=>{return J=Math.imul(J,1664525)+1013904223>>>0,J/4294967296}})();function LX(J,$=256,Q=256){let Z=document.createElement("canvas");Z.width=$,Z.height=Q,J(Z.getContext("2d"),$,Q);let K=new n8(Z);return K.colorSpace=Q8,K}function VN(J="255,214,150"){return LX(($,Q,Z)=>{let K=$.createRadialGradient(Q/2,Z/2,0,Q/2,Z/2,Q/2);K.addColorStop(0,`rgba(${J},1)`),K.addColorStop(0.18,`rgba(${J},.55)`),K.addColorStop(0.5,`rgba(${J},.12)`),K.addColorStop(1,`rgba(${J},0)`),$.fillStyle=K,$.fillRect(0,0,Q,Z)})}var BN=new S(-0.55,-0.035,-0.83).normalize();function QL(J){let $=new _J,Q=new I0(new H8(80,32,16),new J8({side:D8,depthWrite:!1,fog:!1,uniforms:{uSol:{value:BN}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 uSol;
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
   }`}));Q.renderOrder=-10,$.add(Q);let Z=220,K=new Float32Array(Z*3),W=new Float32Array(Z*3);for(let U=0;U<Z;U++){let N=_8(),F=_8()*Math.PI*2,G=0.45+N*0.55,q=Math.sqrt(1-G*G),O=0.25+0.55*_8()*G;K.set([Math.cos(F)*q*75,G*75,Math.sin(F)*q*75],U*3),W.set([O*0.85,O*0.9,O],U*3)}let Y=new bJ;Y.setAttribute("position",new tJ(K,3)),Y.setAttribute("color",new tJ(W,3)),$.add(new Y$(Y,new Z6({size:1.3,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0,opacity:0.45})));let X=new I0(new J7(2.1,40),new xJ({color:"#f6e7cc",fog:!1}));X.position.set(26,11,58),X.lookAt(0,1,0),$.add(X);let H=new K$(new J6({map:VN("255,226,200"),fog:!1,transparent:!0,opacity:0.28,depthWrite:!1,blending:j9}));return H.scale.setScalar(13),H.position.copy(X.position),$.add(H),J.add($),$}function ZL(J){let $=new Map,Q=(F,G=0,q=0)=>{let O=F+G+q;if(!$.has(O))$.set(O,{m:new o0({color:G?F:new y0(F).multiplyScalar(0.85),roughness:0.9,emissive:G||"#000",emissiveIntensity:q}),g:[]});return $.get(O)},Z=(F,G,q,O,B,R=0)=>{F.rotateY(R),F.translate(q,O,B),G.g.push(F)},K=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0"],W=-20;while(W<20){let F=3.4+_8()*2.6,G=3+_8()*2.8,q=10.5+_8()*0.8,O=K[Math.floor(_8()*K.length)];Z(new wJ(F,G,2.4),Q(O),W+F/2,G/2,q+1.2),Z(new wJ(F+0.12,0.18,2.6),Q("#d9d2bf"),W+F/2,G+0.09,q+1.2);let B=Math.max(1,Math.floor(F/1.5));for(let R=0;R<B;R++){let E=W+(R+0.5)*F/B,D=_8()<0.4,M=_8()<0.2,V=D?Q(M?"#9fc3ff":"#ffd08a",M?"#6f9cff":"#ffb35a",M?1.6:2.2):Q("#2a3436");if(Z(new VJ(0.75,0.95),V,E,1.55,q-0.005,Math.PI),G>4.2)Z(new VJ(0.7,0.8),_8()<0.35?Q("#ffd08a","#ffb35a",1.5):Q("#2a3436"),E,G-1.1,q-0.005,Math.PI);Z(new wJ(0.9,0.06,0.12),Q("#2c3432"),E,2.08,q-0.06)}for(let R=0;R<Math.floor(F/0.22);R++)Z(new wJ(0.018,0.9,0.018),Q("#1b2224"),W+0.11+R*0.22,0.45,q-0.55);Z(new wJ(F,0.04,0.04),Q("#1b2224"),W+F/2,0.9,q-0.55),W+=F+0.15}Z(new wJ(44,0.16,1.8),Q("#8a8578"),0,0.08,9.6);let Y=[-14,-4,6,16];for(let F of Y)Z(new LJ(0.09,0.12,7,8),Q("#6b6457"),F,3.5,9.2),Z(new wJ(1.6,0.08,0.08),Q("#4f4a40"),F,6.6,9.2);for(let F=0;F<Y.length-1;F++)for(let G of[0,-0.25,0.3]){let q=new S(Y[F],6.6+G,9.2),O=new S(Y[F+1],6.6+G,9.2),B=q.clone().lerp(O,0.5);B.y-=0.55,Z(new b8(new s8(q,B,O),16,0.012,4),Q("#101517"),0,0,0)}for(let[F,G,q]of[[-9,12.8,7.5],[11,13.1,8.4],[2.5,13.4,6.4]]){let O=new $7([new S(F,0,G),new S(F+0.3,q*0.5,G),new S(F+0.8,q,G-0.2)]);Z(new b8(O,12,0.16,6),Q("#5d5445"),0,0,0);for(let B=0;B<9;B++){let R=B/9*Math.PI*2,E=new W6(0.28,2.6,4,1);E.rotateZ(Math.PI/2+0.55),E.translate(1.3,0,0),E.rotateY(R),Z(E,Q("#34503a"),F+0.8,q,G-0.2)}}let X=[];for(let{m:F,g:G}of $.values()){let q=E$(G,!1);if(G.forEach((B)=>B.dispose()),!q)continue;let O=new I0(q,F);O.receiveShadow=!0,J.add(O),X.push(O)}let H=new W7("#ffa35c",6,14,1.8);H.position.set(6,5.9,8.6),J.add(H);let U=new I0(new H8(0.14,12,8),new o0({color:"#ffcf94",emissive:"#ff9a45",emissiveIntensity:5}));U.position.copy(H.position),J.add(U);let N=new I0(new LJ(0.03,0.03,1.3,6),new o0({color:"#4f4a40"}));return N.rotation.z=Math.PI/2,N.position.set(6,6.05,8.9),J.add(N),{merged:X,farol:H}}function KL(J,$){let Q=new _J;Q.position.copy($),J.add(Q);let Z=new I0(new H8(0.038,16,12),new o0({color:"#fff4d6",emissive:"#ffd08a",emissiveIntensity:9}));Z.scale.y=1.25,Q.add(Z);let K=new I0(new LJ(0.018,0.02,0.05,10),new o0({color:"#2b2a26",roughness:0.6}));K.position.y=0.065,Q.add(K);let W=new I0(new LJ(0.004,0.004,1.1,5),new o0({color:"#15181a"}));W.position.y=0.64,Q.add(W);let Y=new K$(new J6({map:VN(),transparent:!0,opacity:0.55,depthWrite:!1,blending:j9}));Y.scale.setScalar(0.75),Q.add(Y);let X=[],H=new J6({color:"#3b3026",transparent:!0,opacity:0.85,depthWrite:!1});for(let U=0;U<6;U++){let N=new K$(H);N.scale.setScalar(0.012+_8()*0.008),Q.add(N),X.push({s:N,r:0.07+_8()*0.12,w:2+_8()*4,f:_8()*6,y:0.05+_8()*0.08,k:1.3+_8()})}return{g:Q,halo:Y,polillas:X}}function WL(){let J=new Q$;J.add(new I0(new H8(10,24,12),new J8({side:D8,uniforms:{uSol:{value:BN}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform vec3 uSol;void main(){float l=dot(normalize(vP.xz+vec2(1e-4)),normalize(uSol.xz))*.5+.5;vec3 hor=mix(vec3(.3,.25,.36),vec3(.85,.45,.25),pow(l,2.5));gl_FragColor=vec4(mix(hor,vec3(.05,.07,.17),smoothstep(-.05,.7,vP.y))*mix(.35,1.,smoothstep(-.3,0.,vP.y)),1.);}"})));let $=(Q,Z,K,W,Y,X)=>{let H=new I0(new VJ(K,W),new xJ({color:new y0(Q).multiplyScalar(Z),side:oJ}));H.position.set(...Y),H.lookAt(...X),J.add(H)};return $("#ffcf94",6,1.2,1.2,[0,6,0],[0,0,0]),$("#dff3ea",2,5,2,[0,2.5,-8],[0,1,0]),J}function DN({scene:J,renderer:$,camera:Q,controls:Z,software:K,bulbLight:W}){function Y(){let v=new MQ($),j=WL(),g=v.fromScene(j,0.02);J.environment?.dispose?.(),J.environment=g.texture,J.environmentIntensity=0.75,v.dispose(),j.traverse((f)=>{f.geometry?.dispose(),f.material?.dispose()})}Y(),J.background=new y0("#2a2d4a"),J.fog=new e7("#5a5670",0.017);let X=QL(J),H=ZL(J),U=new S(0,M0.surfaceY+1.3,0),N=KL(J,U),F=LX((v,j,g)=>{let f=v.createRadialGradient(j/2,g*0.62,0,j/2,g*0.62,j/2);f.addColorStop(0,"rgba(255,196,110,.95)"),f.addColorStop(0.45,"rgba(255,170,80,.35)"),f.addColorStop(1,"rgba(255,150,60,0)"),v.fillStyle=f,v.fillRect(0,0,j,g)},256,128),G=new I0(new VJ(0.62,0.26),new xJ({map:F,transparent:!0,opacity:0,depthWrite:!1,blending:j9,toneMapped:!1}));G.rotation.x=-Math.PI/2,G.position.y=M0.surfaceY+0.0012,G.renderOrder=3,J.add(G);let q={i:-1,ang:0,alfa:0,objetivo:0,pos:new S},O=(v)=>LX((j,g,f)=>{j.strokeStyle=`rgba(${v},1)`,j.lineWidth=g*0.09,j.beginPath(),j.arc(g/2,f/2,g*0.36,0,Math.PI*2),j.stroke();let a=j.createRadialGradient(g/2,f/2,0,g/2,f/2,g/2);a.addColorStop(0,`rgba(${v},.5)`),a.addColorStop(1,`rgba(${v},0)`),j.fillStyle=a,j.fillRect(0,0,g,f)},128,128),B=["227,174,85","111,183,201"].map((v)=>{let j=new I0(new VJ(0.036,0.036),new xJ({map:O(v),transparent:!0,opacity:0,depthWrite:!1,blending:j9,toneMapped:!1}));return j.rotation.x=-Math.PI/2,j.position.y=M0.surfaceY+0.0015,j.renderOrder=3,J.add(j),j}),R=null,E=Q.clone(),D=new S,M=new S,V=null,I=null,w=null,k=!1;function L(){if(V)return;let v=$.getDrawingBufferSize(new R0),j=new Z8(v.x,v.y,{type:L8,samples:4});V=new qX($,j),V.addPass(new OX(J,E)),I=new L6(new R0(v.x/2,v.y/2),0.4,0.5,3.2),w=new SQ({uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uVineta:{value:0.34},uGrano:{value:0.018}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uTiempo,uVineta,uGrano;varying vec2 vUv;
    float azar(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTiempo*43.7)*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     vec2 q=vUv-.5;float v=1.-uVineta*smoothstep(.25,.85,length(q*vec2(1.15,1.)));
     c.rgb*=v;
     // Sombras hacia el lila y luces cálidas: el atardecer con el bombillo ya prendido.
     float l=dot(c.rgb,vec3(.2126,.7152,.0722));
     c.rgb*=mix(vec3(.96,.95,1.06),vec3(1.04,1.,.93),smoothstep(.02,.4,l));
     c.rgb+=(azar(vUv*vec2(1920.,1080.))-.5)*uGrano*(.4+l);
     gl_FragColor=c;}`}),V.addPass(w),V.addPass(new RX)}function P(v){if(k=!K&&v==="high",k)L();N.halo.visible=!0,H.farol.visible=v==="high"}function l(v,j){if(V)V.setPixelRatio($.getPixelRatio()),V.setSize(v,j);E.aspect=Q.aspect,E.updateProjectionMatrix()}function b(v,j,{reduced:g,view:f,ends:a,temblor:m=0}){if(E.copy(Q),!g){if(D.set(Math.sin(v*0.11)*0.012+Math.sin(v*0.037)*0.008,Math.sin(v*0.083+1)*0.007,Math.cos(v*0.097)*0.01),m)D.add(M.set(Math.sin(v*97)*m,Math.sin(v*113)*m*0.6,Math.cos(v*89)*m));E.position.add(D),M.copy(Z.target).addScaledVector(D,0.35),E.lookAt(M)}if(E.updateMatrixWorld(),N.halo.material.opacity=0.5+0.05*Math.sin(v*23)*Math.sin(v*1.7)+(g?0:0.03*Math.sin(v*3.1)),!g)for(let X0 of N.polillas){let y=v*X0.w+X0.f;X0.s.position.set(Math.cos(y)*X0.r,X0.y+Math.sin(y*X0.k)*0.05,Math.sin(y*1.3)*X0.r)}let J0=f?.phase==="playing";if(J0&&f.turn!=null){let[X0,y,o]=C9[f.turn],N0=M0.boardLimit+0.075;if(q.i!==f.turn)q.i=f.turn,q.destino=new S(X0*N0/M0.seatDistance,0,y*N0/M0.seatDistance),q.angDestino=o;q.pos.lerp(q.destino,1-Math.exp(-j*6));let t=q.angDestino-q.ang;t=Math.atan2(Math.sin(t),Math.cos(t)),q.ang+=t*(1-Math.exp(-j*6)),q.objetivo=0.55+(g?0:0.08*Math.sin(v*2.2))}else q.objetivo=0;q.alfa+=(q.objetivo-q.alfa)*(1-Math.exp(-j*4)),G.material.opacity=q.alfa,G.visible=q.alfa>0.01,G.position.set(q.pos.x,M0.surfaceY+0.0012,q.pos.z),G.rotation.set(-Math.PI/2,0,q.ang);for(let X0=0;X0<2;X0++){let y=B[X0],o=J0&&a?a[X0]:null;if(!o){y.material.opacity=Math.max(0,y.material.opacity-j*3),y.visible=y.material.opacity>0.01;continue}y.visible=!0,y.position.set(o.x,M0.surfaceY+0.0015,o.z);let N0=g?1:1+0.12*Math.sin(v*3.4+X0*1.3);y.scale.setScalar(N0),y.material.opacity=Math.min(0.7,y.material.opacity+j*3)}if(w)w.uniforms.uTiempo.value=v%100}function d(){if(k&&V)V.render();else $.render(J,E)}function e(){V?.dispose()}return{vista:E,frame:b,render:d,resize:l,calidad:P,dispose:e,bulbPos:U,entorno:Y}}var jJ=(J=0,$=0,Q=0)=>new S(J,$,Q),T9=Math.PI/180,TK=Math.PI*2,SK=(J)=>J<=0?0:J>=1?1:J*J*(3-2*J),AK=(J,$,Q)=>SK((J-$+Q)/(2*Q)),O8=(J,$)=>J+Math.random()*($-J),D$=(J)=>J[Math.floor(Math.random()*J.length)];function VX(J,$){if($>3.3)return-0.15*AK($,3.5,0.12)+0.31*AK($,8.7,0.12);return-0.15*AK(J,4.65,0.12)+0.16*AK(J,11.7,0.12)}var YL={"luis-upright":{voz:"m",camisa:[[188,256],[0.28,1.1],[0.08,1.1]],pantalon:[[-400,400],[-0.1,0.28],[0.44,1.1]],piel:[[-16,32],[0.3,0.82],[0.14,1.1]]},marisol:{voz:"f",camisa:[[-20,24],[0.62,1.1],[0.2,1.1]],pantalon:[[188,256],[0.16,1.1],[0.03,0.86]],piel:[[-6,40],[0.16,0.64],[0.2,1.1]]},carmen:{voz:"f",camisa:[[30,60],[0.46,1.1],[0.36,1.1]],pantalon:[[58,150],[0.08,1.1],[0.03,0.62]],piel:[[-10,30],[0.2,0.66],[0.16,1.1]]},"rafa-upright":{voz:"m",camisa:[[-400,400],[-0.1,0.35],[0.52,1.1]],pantalon:[[-14,34],[0.25,0.85],[0.02,0.35]],piel:[[-16,32],[0.3,0.85],[0.37,1.1]]}},XL=["#e9e6de","#a1302a","#3e6a47","#c99a3a","#6f9fc8","#232326","#7c7f82","#d88c9b","#24345a","#d8694f","#2f7f7a","#9b88ba","#e3c7a0","#5b3a5e"],HL=["#27324d","#1d1d20","#b6a37d","#5c5f63","#5b7596","#55573a","#4f3b2c","#8a2f2a"],UL=["#27324d","#1d1d20","#6b2f3a","#3e5a47","#d9d3c6","#5b7596","#7a5a3a"],NL=[[0.8,0.75,0.71],[0.66,0.6,0.56],[0.52,0.46,0.42],[1.12,1.08,1.05],[0.72,0.66,0.62]],GL={"luis-upright":["#6f9fc8","#24345a","#e9e6de","#b6a37d"],marisol:["#d8694f","#e3c7a0","#a1302a","#c99a3a","#27324d","#5b7596"],carmen:["#c99a3a","#e3c7a0","#3e5a47","#55573a"]},FL=["#1f2a44","#a1302a","#1d1d20","#e9e6de","#2f5e3b","#c99a3a"],EL=`
vec3 tenir( vec3 c, vec4 tela ) {
 float luz = dot( c, vec3( .2126, .7152, .0722 ) );
 c = mix( c, min( colCamisa * ( luz / lums.x ), vec3( 1.2 ) ), tela.r );
 c = mix( c, min( colPantalon * ( luz / lums.y ), vec3( 1.2 ) ), tela.g );
 return mix( c, c * tonoPiel, tela.b );
}`,qL=`
#ifdef USE_MAP
 vec4 sampledDiffuseColor = texture2D( map, vMapUv );
 diffuseColor *= vec4( tenir( sampledDiffuseColor.rgb, texture2D( mascara, vMapUv ) ), sampledDiffuseColor.a );
#endif`,OL=`
#ifdef USE_EMISSIVEMAP
 vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
 totalEmissiveRadiance *= tenir( emissiveColor.rgb, texture2D( mascara, vEmissiveMapUv ) );
#endif`,BX=new Float32Array(256).map((J,$)=>{let Q=$/255;return Q<=0.04045?Q/12.92:((Q+0.055)/1.055)**2.4}),vQ=()=>new Promise((J)=>setTimeout(J,0));function DX(J,[$,Q],Z){return SK((J-$+Z)/(2*Z))*(1-SK((J-Q+Z)/(2*Z)))}function RL(J,$){let Q=document.createElement("canvas");Q.width=Q.height=$;let Z=Q.getContext("2d",{willReadFrequently:!0}),K=J.geometry,W=K.attributes.uv,Y=K.attributes.skinIndex,X=K.attributes.skinWeight,H=K.index,U=J.skeleton.bones.findIndex((F)=>F.name==="Head");if(U<0||!W||!H)return null;let N=(F)=>{let G=0;for(let q=0;q<4;q++)if(Y.getComponent(F,q)===U)G+=X.getComponent(F,q);return G};Z.fillStyle=Z.strokeStyle="#fff",Z.lineWidth=2;for(let F=0;F<H.count;F+=3){let G=[H.getX(F),H.getX(F+1),H.getX(F+2)];if(N(G[0])+N(G[1])+N(G[2])<1.5)continue;let q=Math.floor(Math.min(...G.map((B)=>W.getX(B)))),O=Math.floor(Math.min(...G.map((B)=>W.getY(B))));for(let[B,R]of[[0,0],[-1,0],[0,-1],[-1,-1]])Z.beginPath(),G.forEach((E,D)=>{let M=(W.getX(E)-q+B)*$,V=(W.getY(E)-O+R)*$;D?Z.lineTo(M,V):Z.moveTo(M,V)}),Z.closePath(),Z.fill(),Z.stroke()}return Z.getImageData(0,0,$,$).data}async function LL(J,$,Q,Z){let W=document.createElement("canvas");W.width=W.height=512;let Y=W.getContext("2d",{willReadFrequently:!0});Y.drawImage(J,0,0,512,512);let X=Y.getImageData(0,0,512,512).data,H=new Uint8Array(1048576),U=[0,0,0,0],N=RL(Q,512);await vQ();let F=(O,B,R,[E,D,M])=>{let V=E[0]<0&&O>180?O-360:O;return DX(V,E,5)*DX(B,D,0.04)*DX(R,M,0.04)};for(let O=0;O<512;O+=64){for(let B=O*512;B<(O+64)*512;B++){let R=X[B*4]/255,E=X[B*4+1]/255,D=X[B*4+2]/255,M=Math.max(R,E,D),V=Math.min(R,E,D),I=M-V,w=M,k=M>0?I/M:0,L=0;if(I>0.00001)L=M===R?((E-D)/I+6)%6*60:M===E?((D-R)/I+2)*60:((R-E)/I+4)*60;let P=N?1-N[B*4]/255:1,l=F(L,k,w,$.camisa)*P,b=F(L,k,w,$.pantalon)*(1-l)*P,d=F(L,k,w,$.piel)*(1-l-b);H[B*4]=l*255,H[B*4+1]=b*255,H[B*4+2]=Math.max(0,d)*255,H[B*4+3]=255;let e=0.2126*BX[X[B*4]]+0.7152*BX[X[B*4+1]]+0.0722*BX[X[B*4+2]];U[0]+=e*l,U[1]+=l,U[2]+=e*b,U[3]+=b}await vQ()}let G=new Uint8Array(262144);for(let O=0;O<3;O++){for(let[B,R]of[[Math.max,1],[Math.max,512],[Math.min,1],[Math.min,512]]){for(let E=0;E<262144;E++){let D=R===1?E%512:Math.floor(E/512),M=H[E*4+O];for(let V=-3;V<=3;V++){let I=D+V;if(V&&I>=0&&I<512)M=B(M,H[(E+V*R)*4+O])}G[E]=M}for(let E=0;E<262144;E++)H[E*4+O]=G[E]}await vQ()}let q=new $6(H,512,512);return q.wrapS=Z.wrapS,q.wrapT=Z.wrapT,q.generateMipmaps=!0,q.minFilter=Z9,q.magFilter=X8,q.needsUpdate=!0,{tex:q,lums:new R0(U[1]?U[0]/U[1]:0.2,U[3]?U[2]/U[3]:0.2)}}function VL(J,$){let Q=J.clone(),Z={mascara:{value:$.mascara},lums:{value:$.lums},colCamisa:{value:new y0},colPantalon:{value:new y0},tonoPiel:{value:new y0(1,1,1)}};return Q.onBeforeCompile=(K)=>{Object.assign(K.uniforms,Z),K.fragmentShader=K.fragmentShader.replace("void main() {",`uniform sampler2D mascara;
uniform vec2 lums;
uniform vec3 colCamisa;
uniform vec3 colPantalon;
uniform vec3 tonoPiel;
`+EL+`
void main() {`).replace("#include <map_fragment>",qL).replace("#include <emissivemap_fragment>",OL)},Q.customProgramCacheKey=()=>"transeunte",{m:Q,u:Z}}function AX(J){let $=J.length;return(Q)=>{Q-=Math.floor(Q);let Z=$-1;for(let G=0;G<$;G++)if(J[G][0]<=Q)Z=G;let K=J[Z],W=J[(Z+1)%$],Y=W[0]+(Z+1===$?1:0),X=(Q-K[0])/(Y-K[0]),H=J[(Z-1+$)%$][1],U=K[1],N=W[1],F=J[(Z+2)%$][1];return 0.5*(2*U+(-H+N)*X+(2*H-5*U+4*N-F)*X*X+(-H+3*U-3*N+F)*X*X*X)}}var kN=AX([[0,23],[0.12,19],[0.3,6],[0.5,-9],[0.62,-12],[0.75,2],[0.88,21]]),BL=AX([[0,4],[0.12,15],[0.28,7],[0.45,5],[0.6,33],[0.72,58],[0.86,26],[0.95,4]]),DL=AX([[0,14],[0.08,5],[0.14,0],[0.42,0],[0.52,-9],[0.62,-30],[0.7,-16],[0.8,1],[0.92,9]]),jK=jJ(),yK=jJ(),G9=jJ(),hQ=jJ(),fQ=jJ(),wK=jJ(),kX=jJ(),MX=jJ(0,1,0),MN=jJ(),kL=jJ(1,0,0),l9=new GJ,CX=new GJ,CN=new GJ,vK=new GJ,yQ=new GJ;function V6(J,$){J.matrixWorld.decompose(jK,CN,yK),J.parent.matrixWorld.decompose(jK,vK,yK),J.quaternion.copy(vK.invert()).multiply($).multiply(CN),J.updateMatrixWorld(!0)}function ML(J,$){J.parent.matrixWorld.decompose(jK,vK,yK),J.quaternion.copy(vK.invert()).multiply($),J.updateMatrixWorld(!0)}function y7(J,$,Q){G9.setFromMatrixPosition(J.matrixWorld),hQ.setFromMatrixPosition($.matrixWorld),fQ.subVectors(hQ,G9).normalize(),V6(J,l9.setFromUnitVectors(fQ,Q))}var v7=(J,$,Q)=>wK.set(J,$,Q).normalize().applyQuaternion(yQ);function PN(J){let{h:$,marcha:Q,fase:Z}=J;for(let[X,H,U,N]of J.rest)X.position.copy(H),X.quaternion.copy(U),X.scale.copy(N);let K=Q*0.016*Math.sin(TK*(Z-0.05))+(1-Q)*0.012*Math.sin(J.t*0.7);J.root.position.set(J.base.x+K,J.base.y,J.base.z),J.holder.updateMatrixWorld(!0),J.holder.matrixWorld.decompose(jK,yQ,yK),kX.set(1,0,0).applyQuaternion(yQ),MN.set(0,0,1).applyQuaternion(yQ);let W=-5*T9*Math.cos(TK*Z)*Q;if(V6($.Hips,l9.setFromAxisAngle(MX,W)),V6($.Hips,l9.setFromAxisAngle(kX,(3.5*Q+0.5)*T9)),$.Spine)V6($.Spine,l9.setFromAxisAngle(MX,-W*1.4));for(let[X,H]of[[1,$.LeftShoulder],[-1,$.RightShoulder]])if(H)V6(H,l9.setFromAxisAngle(MN,-X*7*T9));for(let[X,H,U]of[[1,"Left",Z],[-1,"Right",Z+0.5]]){let N=(Q*kN(U)+(1-Q)*(X>0?1.5:-1))*T9,F=(Q*BL(U)+(1-Q)*4)*T9,G=Q*DL(U)*T9,q=X*(0.03+0.02*(1-Q));if(y7($[H+"UpLeg"],$[H+"Leg"],v7(q,-Math.cos(N),Math.sin(N))),y7($[H+"Leg"],$[H+"Foot"],v7(q*0.6,-Math.cos(N-F),Math.sin(N-F))),CX.setFromAxisAngle(MX,-X*9*T9),l9.setFromAxisAngle(kL,-G).multiply(CX).multiply(J.pieReposo[X>0?0:1]),ML($[H+"Foot"],l9.premultiply(yQ)),G<0&&$[H+"ToeBase"])V6($[H+"ToeBase"],l9.setFromAxisAngle(kX,0.8*G))}for(let[X,H,U]of[[1,"Left",Z],[-1,"Right",Z+0.5]]){if(X<0&&(J.saluda>0||J.alcanza>0))continue;let N=(Q*-0.72*(kN(U)-5)+(1-Q)*-2+(J.brazos||0))*T9,F=(16+(1-Q)*-4+10*Math.max(0,N/(12*T9)))*T9,G=(9+(1-Q)*-2)*T9;y7($[H+"Arm"],$[H+"ForeArm"],v7(X*Math.sin(G)*Math.cos(N),-Math.cos(G)*Math.cos(N),Math.sin(N))),y7($[H+"ForeArm"],$[H+"Hand"],v7(X*Math.sin(G)*Math.cos(N+F),-Math.cos(G)*Math.cos(N+F),Math.sin(N+F)))}if(J.saluda>0){let X=J.saluda,H=Math.sin(J.t*TK*1.8)*0.38*X;y7($.RightArm,$.RightForeArm,v7(-0.75*X-(1-X)*0.15,0.25*X-(1-X)*0.98,0.3*X+0.05)),y7($.RightForeArm,$.RightHand,v7(-Math.sin(H)-0.15,Math.cos(H)*X-(1-X)*0.9,0.18))}if(J.alcanza>0&&!(J.saluda>0)){let X=SK(J.alcanza),H=J.alcanzaAlto||0;y7($.RightArm,$.RightForeArm,v7(-0.16*X-0.14*(1-X),-0.98*(1-X)+(-0.3+0.85*H)*X,0.9*X)),y7($.RightForeArm,$.RightHand,v7(-0.06*X-0.12*(1-X),-0.9*(1-X)+(-0.05+0.75*H)*X,0.2+0.8*X))}if($.Head&&$.headfront){let X=J.mirar;for(let[H,U]of[[$.neck,0.45],[$.Head,1]]){if(!H)continue;G9.setFromMatrixPosition($.Head.matrixWorld),hQ.setFromMatrixPosition($.headfront.matrixWorld),fQ.subVectors(hQ,G9).normalize(),wK.subVectors(X,G9).normalize();let N=fQ.angleTo(wK);if(N<0.001)continue;l9.setFromUnitVectors(fQ,wK),V6(H,CX.identity().slerp(l9,Math.min(1,U*Math.min(N,1.1)/N)))}}let Y=1/0;for(let[X,H]of J.apoyos)if(G9.copy(H).applyMatrix4(X.matrixWorld),G9.y<Y)Y=G9.y;J.root.position.y-=(Y-J.holder.position.y)/J.holder.scale.y,J.root.updateMatrixWorld(!0)}var f7=(...J)=>J.map(([$,Q])=>jJ($,0,Q)),PX=f7([10,-0.25],[6.5,-0.3],[4.6,-0.4],[3.3,-0.62],[2.25,-1.1],[1.2,-1.8]),CL=f7([1.2,-1.8],[0.35,-2.15],[-0.6,-2.05],[-1.35,-1.65]),IX=f7([-1.35,-1.65],[-2.35,-1],[-2.65,0.2],[-4.5,0.95],[-9,1.15],[-17,1.2]),PL=M8.z+0.04-(M8.fondo+0.16)/2,IL=M8.z+0.04+(M8.fondo+0.16)/2,IN=jJ(-0.6,0,PL-0.19),bQ=jJ(-0.6,0,IL+0.42),zN=f7([1.2,-1.8],[0.45,-2.4],[-0.2,bQ.z+0.2],[bQ.x,bQ.z]),AN=f7([bQ.x,bQ.z],[-1,-2.62],[-1.28,-2.1],[-1.35,-1.65]),zX=(...J)=>J.reduce(($,Q)=>$.concat($.length?Q.slice(1):Q),[]),B6=(J)=>J.slice().reverse(),_K={enfrente:()=>{let J=O8(9.45,10.05),$=f7([-34,J],[-12,J+O8(-0.1,0.1)],[12,J+O8(-0.1,0.1)],[34,J]);return Math.random()<0.5?$:B6($)},lateral:()=>{let J=O8(12.15,12.45),$=f7([J,-36],[J,-10],[J,1.2],[J+1.2,2.25],[20,2.3],[36,2.4]);return Math.random()<0.5?$:B6($)}};function _N({scene:J,camera:$,renderer:Q,cuerpos:Z,pocos:K=!1}){let W=[],Y=[],X=[],H=new Q6,U=new QJ,N=new S8(jJ(),1.25),F=null,G=0,q=0,O=O8(6,14),B=O8(20,35),R=-1e9,E=null,D=!1,M=!1;(async()=>{for(let y of Z){if(D)return;let o=YL[y.nombre];if(!o||!y.gltf)continue;let N0=null;y.gltf.scene.traverse((x)=>{if(x.isSkinnedMesh&&!N0)N0=x});let t=N0?.material?.map?.image;if(!t)continue;try{let{tex:x,lums:_}=await LL(t,o,N0,N0.material.map),h={...y,reglas:o,voz:o.voz,material:N0.material,mascara:x,lums:_,zCiclo:null};await vQ();let u=V(h);if(y.nombre==="rafa-upright"){if(u)j(u)}else{if(u){if(Y.push(u),Y.length===1)await Q?.compileAsync?.(u.holder,$,J).catch(()=>{})}W.push(h)}}catch(x){console.warn("Transeúnte sin ropa",y.nombre,x)}await vQ()}})();function V(y){let o=q$(y.gltf.scene),N0=new _J;N0.add(o),o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(1,1,1);let t={},x=[],_=null;if(o.traverse((r0)=>{if(r0.isBone){t[r0.name]=r0;let S0=y.gltf.reposo?.get(r0.name);if(S0)r0.position.copy(S0.position),r0.quaternion.copy(S0.quaternion),r0.scale.copy(S0.scale),x.push([r0,S0.position,S0.quaternion,S0.scale])}if(r0.isSkinnedMesh)_=r0}),!_||!t.Hips||!t.LeftFoot||!t.RightFoot)return null;let{m:h,u}=VL(y.material,y);_.material=h,_.castShadow=!1,_.receiveShadow=!0,_.frustumCulled=!0,_.morphTargetInfluences?.fill(0),N0.updateMatrixWorld(!0),_.computeBoundingBox();let W0=_.boundingBox.clone().applyMatrix4(_.matrixWorld),$0=jJ().setFromMatrixPosition(t.Hips.matrixWorld),q0=jJ(-$0.x,-W0.min.y,-$0.z);o.position.copy(q0),N0.updateMatrixWorld(!0),_.computeBoundingSphere(),_.boundingSphere.radius*=1.25;let F0=[];for(let r0 of["Left","Right"]){let S0=t[r0+"Foot"],ZJ=t[r0+"ToeBase"]||S0,HJ=jJ().setFromMatrixPosition(S0.matrixWorld),EJ=jJ().setFromMatrixPosition(ZJ.matrixWorld);F0.push([S0,S0.worldToLocal(jJ(HJ.x,0,HJ.z-0.05))],[ZJ,ZJ.worldToLocal(jJ(EJ.x,0,EJ.z+0.06))])}let z0=[t.LeftFoot,t.RightFoot].map((r0)=>r0.getWorldQuaternion(new GJ)),B0=null;if(y.voz==="m"&&t.Head)B0=I(_,t.Head);let b0={cuerpo:y,root:o,holder:N0,h:t,rest:x,malla:_,u,base:q0,apoyos:F0,pieReposo:z0,gorra:B0,marcha:0,fase:0,t:0,saluda:0,alcanza:0,alcanzaAlto:0,brazos:0,mirar:jJ(),yaw:0,libre:!0};if(y.zCiclo==null)y.zCiclo=w(b0);return b0}function I(y,o){let N0=y.geometry.attributes.position,t=y.geometry.attributes.skinIndex,x=y.geometry.attributes.skinWeight,_=y.skeleton.bones.indexOf(o);if(_<0)return null;let h=new k8,u=jJ();for(let S0=0;S0<N0.count;S0++){let ZJ=0;for(let HJ=0;HJ<4;HJ++)if(t.getComponent(S0,HJ)===_)ZJ+=x.getComponent(S0,HJ);if(ZJ>0.6)y.getVertexPosition(S0,u),h.expandByPoint(u.applyMatrix4(y.matrixWorld))}if(h.isEmpty())return null;let W0=h.getCenter(jJ()),$0=h.getSize(jJ()),q0=Math.max($0.x,$0.z*0.8)/2*1.02,F0=new _J,z0=new o0({color:"#1f2a44",roughness:0.85}),B0=new I0(new H8(1,18,8,0,TK,0,Math.PI*0.5),z0);B0.scale.set(q0*1.06,q0*1.05,q0*1.12),F0.add(B0);let b0=new I0(new LJ(1,1,0.012,18,1,!1,-Math.PI*0.5,Math.PI),z0);b0.scale.set(q0*0.98,1,q0*1.05),b0.position.set(0,0.006,q0*0.86),b0.rotation.x=0.14,F0.add(b0),F0.position.set(W0.x,h.max.y-q0*0.85,W0.z-$0.z*0.06),o.updateWorldMatrix(!0,!1);let r0=o.matrixWorld.clone().invert();return F0.updateMatrix(),F0.matrix.premultiply(r0),F0.matrix.decompose(F0.position,F0.quaternion,F0.scale),o.add(F0),F0}function w(y){y.mirar.set(0,1.5,5),y.marcha=1;let o=0,N0=-1,t=[0,0,0,0],x=[0,0,0,0];for(let _=0;_<=96;_++){y.fase=_/96,PN(y);let h=1/0,u=0;y.apoyos.forEach(([$0,q0],F0)=>{if(G9.copy(q0).applyMatrix4($0.matrixWorld),x[F0]=G9.z,G9.y<h)h=G9.y,u=F0});let W0=u>>1;if(W0===N0)o+=Math.max(0,t[u]-x[u]);N0=W0,t.splice(0,4,...x)}return y.marcha=0,y.fase=0,Math.min(1.7,Math.max(0.9,o))}function k(y){let o=y.cuerpo.nombre==="carmen",N0=GL[y.cuerpo.nombre]||[],t=(_)=>D$(_.filter((h)=>!N0.includes(h)));if(y.u.colCamisa.value.set(t(XL)),y.u.colPantalon.value.set(t(o?UL:HL)),y.u.tonoPiel.value.setRGB(...D$(NL)),y.gorra)y.gorra.visible=Math.random()<0.65,y.gorra.children.forEach((_)=>_.material.color.set(D$(FL)));let x=O8(0.95,1.05);y.holder.scale.set(x*O8(1,1.1),x,x*O8(1,1.06))}function L(y){let o=W.filter((x)=>!y||x.nombre===y);if(!o.length)return null;let N0=D$(o),t=Y.find((x)=>x.libre&&x.cuerpo===N0);if(!t){if(Y.length>=5)return null;if(t=V(N0),!t)return null;Y.push(t)}return t.libre=!1,k(t),t.marcha=0,t.fase=Math.random(),t.saluda=0,t.alcanza=0,t.t=0,J.add(t.holder),t}function P(y){y.libre=!0,J.remove(y.holder);let o=X.indexOf(y);if(o>=0)X.splice(o,1)}function l(y,o){let N0=new $7(y,!1,"centripetal",0.5);return{tipo:"ruta",curva:N0,largo:N0.getLength(),d:0,v:o}}function b(y,o,N0){y.guion=o,y.i=0,y.zona=N0,y.malla.castShadow=N0==="patio",y.velocidad=y.cuerpo.nombre==="carmen"?O8(0.9,1.05):O8(1.02,1.28);for(let h of o)if(h.tipo==="ruta")h.v=y.velocidad;let t=o[0].curva,x=t.getPointAt(0),_=t.getTangentAt(0);y.yaw=Math.atan2(_.x,_.z),y.holder.position.set(x.x,VX(x.x,x.z),x.z),y.holder.rotation.y=y.yaw,X.push(y)}let d=(y,o,N0,t=3.2)=>{let x=o-y.yaw;return x=Math.atan2(Math.sin(x),Math.cos(x)),y.yaw+=Math.max(-t*N0,Math.min(t*N0,x)),y.holder.rotation.y=y.yaw,Math.abs(x)};function e(y,o,N0){let t=y.guion[y.i];if(!t){if(!y.fijo){P(y);return}y.guion=[g()],y.i=0,t=y.guion[0],t.t0=y.t}if(y.t+=o,t.tipo==="ruta"){let x=y.guion[y.i+1],_=x&&x.tipo!=="ruta",h=t.largo-t.d,u=_?Math.min(1,h/0.55):1;y.marcha+=(Math.min(u,1)-y.marcha)*Math.min(1,o*(u<y.marcha?6:2.2));let W0=t.v*Math.max(y.marcha,_?0.12:0)*o;t.d=Math.min(t.largo,t.d+W0),y.fase+=W0/y.cuerpo.zCiclo;let $0=t.d/t.largo,q0=t.curva.getPointAt($0),F0=t.curva.getTangentAt($0);if(y.holder.position.set(q0.x,VX(q0.x,q0.z),q0.z),d(y,Math.atan2(F0.x,F0.z),o),y.mirar.lerp(hQ.set(q0.x+F0.x*6,1.45+VX(q0.x,q0.z)-0.25,q0.z+F0.z*6),1-Math.exp(-o*5)),t.d>=t.largo-0.001){if(y.i++,y.guion[y.i])y.guion[y.i].t0=y.t}}else if(t.tipo==="quieto"){y.marcha=Math.max(0,y.marcha-o*4);let x=y.t-(t.t0??y.t);if(t.yaw!=null)d(y,t.yaw,o,2.2);if(t.miraA?.h?.Head)t.mira=t.miraA.h.Head.getWorldPosition(t.mira||jJ());else if(t.vigila)t.mira=f(t,N0);if(t.mira)y.mirar.lerp(t.mira,1-Math.exp(-o*3));if(t.atender&&!t.pedido){if(t.pedido=!0,F)a(F,y)}if(t.brazo){let _=Math.min(1,x/0.6,(t.dur-x)/0.6);y.alcanza=Math.max(0,_),y.alcanzaAlto=t.brazo.alto;let h=t.brazo.entrega;if(h&&!h.libre)h.alcanza=y.alcanza,h.alcanzaAlto=0.1}if(t.saludo)v(y,t,x,N0);if(x>=t.dur){if(y.i++,y.guion[y.i])y.guion[y.i].t0=y.t;if(y.saluda=0,t.brazo){if(y.alcanza=0,t.brazo.entrega)t.brazo.entrega.alcanza=0}}}}function v(y,o,N0,t){if(!o.decidido){o.decidido=!0;let x=t?.view,_=x&&(x.phase==="lobby"||x.phase==="playing")&&(M||!t.habla?.size&&q>150&&q-R>420);if(M=!1,!_){o.dur=0;return}let h=[0,1,2,3].filter(($0)=>x.bots?.[$0]),u=h.length&&Math.random()<0.8?D$(h):null;o.seat=u,o.cabeza=t.cabezas?.[u??2]?.clone()||jJ(0,1.2,0),R=q;let W0=u==null?jJ(0,1.2,0):o.cabeza;o.mira=W0.clone(),o.yaw=Math.atan2(W0.x-y.holder.position.x,W0.z-y.holder.position.z)}if(o.dur===0)return;if(y.saluda=N0<0.35?0:Math.min(1,(N0-0.35)/0.35)*(N0>2.6?Math.max(0,1-(N0-2.6)/0.4):1),!o.dicho&&N0>0.45){o.dicho=!0;let x=y.h.Head.getWorldPosition(jJ());E={seat:o.seat,p:x,t0:q,hasta:q+5},dispatchEvent(new CustomEvent("mesa:saludo",{detail:{seat:o.seat,voz:y.cuerpo.voz,pos:x.toArray()}}))}}function j(y){if(y.libre=!1,y.fijo=!0,y.zona="colmado",F=y,y.velocidad=0.8,y.u.colCamisa.value.set("#3e6a47"),y.u.colPantalon.value.set("#23262d"),y.u.tonoPiel.value.setRGB(0.74,0.68,0.64),y.gorra)y.gorra.visible=!0,y.gorra.children.forEach((o)=>o.material.color.set("#a1302a"));y.holder.scale.set(1.04,1.03,1.04),y.malla.castShadow=!0,y.holder.position.copy(IN),y.yaw=0,y.holder.rotation.y=y.yaw,y.mirar.set(0,0.8,0),y.guion=[g()],y.i=0,y.guion[0].t0=0,J.add(y.holder)}function g(){return{tipo:"quieto",dur:1e9,yaw:0,vigila:!0}}function f(y,o){if(y.cambio&&q<y.cambio)return y.mira;y.cambio=q+O8(3,6.5);let N0=o?.view,t=Math.random(),x=o?.cabezas,_=X.find((h)=>h.zona==="patio");if(_&&t<0.25)return _.h.Head.getWorldPosition(jJ());if(N0?.phase==="playing"&&t<0.55&&x?.[N0.turn])return x[N0.turn].clone();if(t<0.8)return jJ(O8(-0.3,0.3),0.8,O8(-0.3,0.3));return jJ(O8(-4,4),1.5,6)}function a(y,o){let N0=(x,_)=>({tipo:"quieto",dur:x,..._}),t=jJ(IN.x+O8(-0.5,0.5),1.72,-4.8);y.guion=[N0(1.4,{yaw:0,miraA:o}),N0(0.9,{yaw:Math.PI,mira:t}),N0(2.2,{yaw:Math.PI,mira:t,brazo:{alto:1}}),N0(0.9,{yaw:0,miraA:o}),N0(2.4,{yaw:0,miraA:o,brazo:{alto:0.15,entrega:o}}),N0(4,{yaw:0,miraA:o})],y.i=0,y.guion[0].t0=y.t}function m(y){let o=Math.random()<0.6,N0=Math.random()<0.5,t=[];if(t.push(l(o?PX:B6(IX),1)),N0)t.push({tipo:"quieto",dur:3.2,saludo:!0});if(t.push(l(o?zN:B6(AN),1)),t.push({tipo:"quieto",dur:O8(14,24),yaw:Math.PI,...F?{miraA:F,atender:!0}:{mira:jJ(-0.6,1.35,-4.6)}}),Math.random()<0.6)t.push(l(zX(AN,IX),1));else t.push(l(zX(B6(zN),B6(PX)),1));return t}function J0(){let y=zX(PX,CL,IX);return[l(Math.random()<0.5?y:B6(y),1)]}function X0(y,o){if(D||!W.length)return;if(y*=window.mesaPrisa||1,q+=y,E){if(E.e=q-E.t0,q>E.hasta)E=null}let N0=document.documentElement.classList.contains("reduced");if(!N0&&!K&&q>O){if(O=q+O8(14,32),X.filter((x)=>x.zona==="calle").length<2){let x=L();if(x)b(x,[l(D$([_K.enfrente,_K.enfrente,_K.lateral])(),1)],"calle")}}if(!N0&&q>B&&!X.some((x)=>x.zona==="patio")){B=q+O8(50,110);let x=L();if(x)b(x,Math.random()<0.65?m(x):J0(),"patio")}$.updateMatrixWorld(),H.setFromProjectionMatrix(U.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse));let t=performance.now();for(let x of F?[F,...X]:X.slice()){if(e(x,y,o),x.libre)continue;if(N.center.copy(x.holder.position).y+=0.9,H.intersectsSphere(N))PN(x)}G+=(performance.now()-t-G)*0.05}return window.mesaTranseunte=(y="cliente",o,N0)=>{if(y==="posa"){let x=L(o);if(!x)return!1;let[_,h,u=0]=N0;return b(x,[l(f7([_-Math.sin(u)*0.3,h-Math.cos(u)*0.3],[_,h]),1),{tipo:"quieto",dur:1e4}],"patio"),!0}let t=L(o);if(!t)return!1;return b(t,y==="cliente"?m(t):y==="saluda"?(()=>{let x=m(t);if(!x.some((_)=>_.saludo))x.splice(1,0,{tipo:"quieto",dur:3.2,saludo:!0});return M=!0,x})():y==="calle"?[l(_K.enfrente(),1)]:J0(),y==="calle"?"calle":"patio"),!0},window.mesaGente=()=>X.map((y)=>({cuerpo:y.cuerpo.nombre,pos:y.holder.position.toArray().map((o)=>+o.toFixed(2)),marcha:+y.marcha.toFixed(2),tramo:y.i})),{update:X0,get saludo(){return E},get ms(){return G},get listos(){return W.length},dispose(){D=!0;for(let y of Y)J.remove(y.holder);if(F)J.remove(F.holder)}}}var D6=Math.PI*2,WJ=(J=0,$=0,Q=0)=>new S(J,$,Q),zL=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function vk(J,{onProgress:$=()=>{}}={}){let Q=new Q$;Q.background=new y0("#2a2d4a"),Q.fog=new e7("#5a5670",0.017);let Z=new G8(42,innerWidth/innerHeight,0.08,90);Z.position.set(3.1,2.65,4.2);let K;try{K=new nY({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let W=new URLSearchParams(location.search).has("hq"),Y=!W&&/SwiftShader|llvmpipe|Software/i.test((()=>{let A=K.getContext(),i=A.getExtension("WEBGL_debug_renderer_info");return i?A.getParameter(i.UNMASKED_RENDERER_WEBGL):""})());K.setSize(innerWidth,innerHeight),K.setPixelRatio(Y?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),K.outputColorSpace=Q8,K.toneMapping=n7,K.toneMappingExposure=1.24,K.shadowMap.enabled=!Y,K.shadowMap.type=c7,K.info.autoReset=!1,J.appendChild(K.domElement);let X=new KX(Z,K.domElement);X.target.set(0,0.8,-0.15),X.enableDamping=!0,X.dampingFactor=0.065,X.enablePan=!1,X.minDistance=0.8,X.maxDistance=4.6,X.minPolarAngle=0.25,X.maxPolarAngle=Math.PI*0.48,X.update();let H=0.5,U=new ZK("#a3a8d8","#6a4e3c",H);Q.add(U);let N=new U$("#ffa06a",0.55);N.position.set(-6,2.6,-9),Q.add(N);let F=new H$("#ffc98a",5.2,7,Math.PI*0.32,0.6,2);F.position.set(0,M0.surfaceY+1.26,0),F.target.position.set(0,0,0);let G=new W7("#ffc07a",0.45,3.2,2);G.position.set(0,M0.surfaceY+1.2,0),Q.add(G),F.castShadow=!0,F.shadow.mapSize.set(Y?1024:2048,Y?1024:2048),F.shadow.focus=0.52,F.shadow.bias=-0.0002,F.shadow.normalBias=0.004,F.shadow.radius=3,F.shadow.camera.near=0.2,F.shadow.camera.far=4,Q.add(F,F.target);let q=new W7("#cfeee0",13,9,2);q.position.set(0,2.5,-3.5),Q.add(q);{let A=new I0(new wJ(1.2,0.03,0.03),new o0({color:"#e6fff4",emissive:"#e6fff4",emissiveIntensity:4}));A.position.set(0,3.12,-3.6),Q.add(A)}let O=new Map,B=new Map;function R(A,i=0.85,Y0=0){let r=A+","+i+","+Y0;if(!O.has(r))O.set(r,new o0({color:A,roughness:i,metalness:Y0}));return O.get(r)}function E(A,i,Y0,r=[0,0,0],V0=[1,1,1]){let E0=i.uuid;if(!B.has(E0))B.set(E0,{material:i,geos:[]});let A0=new QJ().compose(WJ(...Y0),new GJ().setFromEuler(new V9(...r)),WJ(...V0));A.applyMatrix4(A0),B.get(E0).geos.push(A)}function D(A,i,Y0,r,V0,E0,A0,g0=0){E(new wJ(r,V0,E0),typeof A0==="string"?R(A0):A0,[A,i,Y0],[0,g0,0])}function M(A,i,Y0,r,V0,E0,A0,g0=10,c0=[0,0,0]){E(new LJ(r,V0,E0,g0),typeof A0==="string"?R(A0):A0,[A,i,Y0],c0)}function V(A,i=512,Y0=512){let r=document.createElement("canvas");r.width=i,r.height=Y0,A(r.getContext("2d"),i,Y0);let V0=new n8(r);return V0.colorSpace=Q8,V0.anisotropy=Math.min(8,K.capabilities.getMaxAnisotropy()),V0}let I=191,w=()=>{return I=Math.imul(I,1664525)+1013904223>>>0,I/4294967296},k=V((A,i,Y0)=>{A.fillStyle="#65432b",A.fillRect(0,0,i,Y0);for(let r=0;r<700;r++){A.strokeStyle=`rgba(${w()>0.5?"170,122,70":"35,22,14"},${0.08+w()*0.2})`,A.lineWidth=0.3+w()*2,A.beginPath();let V0=w()*Y0;A.moveTo(0,V0);for(let E0=0;E0<i;E0+=20)A.lineTo(E0,V0+Math.sin(E0*0.013+r)*3);A.stroke()}}),L=new o0({map:k,roughness:0.65,color:"#e7bc8c"}),P=R("#4c3022",0.75),l=R("#287770"),b=R("#d2c5a2"),d=R("#3d938e"),e=V((A,i,Y0)=>{let r=i/2;for(let c0=0;c0<2;c0++)for(let L0=0;L0<2;L0++){let p0=L0*r,YJ=c0*r;A.save(),A.beginPath(),A.rect(p0,YJ,r,r),A.clip(),A.fillStyle="#c4b99f",A.fillRect(p0,YJ,r,r);for(let[MJ,T8]of[[p0,YJ],[p0+r,YJ],[p0,YJ+r],[p0+r,YJ+r]])A.strokeStyle="#8d6450",A.lineWidth=r*0.04,A.beginPath(),A.arc(MJ,T8,r*0.42,0,Math.PI*2),A.stroke(),A.fillStyle="#4f6763",A.beginPath(),A.arc(MJ,T8,r*0.13,0,Math.PI*2),A.fill(),A.strokeStyle="#c4b99f",A.lineWidth=r*0.02,A.beginPath(),A.arc(MJ,T8,r*0.11,0,Math.PI*2),A.stroke();let $J=p0+r/2,kJ=YJ+r/2,pJ=(MJ,T8)=>{A.fillStyle=T8,A.beginPath(),A.moveTo($J,kJ-MJ),A.lineTo($J+MJ,kJ),A.lineTo($J,kJ+MJ),A.lineTo($J-MJ,kJ),A.closePath(),A.fill()};pJ(r*0.2,"#8d6450"),pJ(r*0.13,"#c4b99f"),pJ(r*0.07,"#3a3630"),A.restore(),A.strokeStyle="#7e7563",A.lineWidth=3,A.strokeRect(p0+1.5,YJ+1.5,r-3,r-3)}for(let c0=0;c0<9000;c0++)A.fillStyle=w()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",A.fillRect(w()*i,w()*Y0,1+w()*2,1+w()*2);for(let c0=0;c0<40;c0++){let L0=A.createRadialGradient(0,0,0,0,0,1),p0=w()*i,YJ=w()*Y0,$J=20+w()*90;A.save(),A.translate(p0,YJ),A.scale($J,$J),L0.addColorStop(0,"rgba(40,34,26,.10)"),L0.addColorStop(1,"rgba(40,34,26,0)"),A.fillStyle=L0,A.fillRect(-1,-1,2,2),A.restore()}},1024,1024);e.wrapS=e.wrapT=k7,e.repeat.set(22.88888888888889,27.77777777777778),D(-5.7,-0.1,-4.575,20.6,0.2,15.85,new o0({map:e,roughness:0.86,color:"#9d937f"})),D(0,-0.2,8.5,40,0.1,10.3,"#2b3133"),D(0,-0.075,3.45,40,0.15,0.2,"#a8a391");for(let A=-10;A<11;A++)D(A*1.8,-0.146,6.3,0.7,0.008,0.06,"#b9ad83");D(0,1.6,-5.1,7.5,3.4,0.2,l),D(-3.8,1.6,-3.85,0.2,3.4,2.7,l),D(3.8,1.6,-3.85,0.2,3.4,2.7,l),D(-3.48,1.1,-2.52,0.7,2.3,0.32,l),D(3.45,1.1,-2.52,0.8,2.3,0.32,l),D(0,2.95,-2.52,7.5,0.42,0.35,d),D(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let A=0;A<30;A++)D(-4+A*0.276,3.15,-3.7,0.028,0.055,4.6,"#82928a");{let A=M8,i=A.tope-0.1;D(0,i/2,A.z,A.ancho,i,A.fondo,L),D(0,A.tope-0.05,A.z+0.04,A.ancho+0.18,0.1,A.fondo+0.16,L)}for(let A=0;A<3;A++)D(-0.6,1.58+A*0.48,-4.78,5.8,0.065,0.38,L),D(-0.6,1.84+A*0.48,-4.98,5.8,0.48,0.065,"#443e30");D(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),D(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");let v=[];for(let A=0;A<29;A++)v.push({pos:[-3.18+A*0.182,2.095,-4.69],scale:0.7+A%5*0.07,color:["#566641","#b0762a","#2e5a45","#7a3024","#c9b36a","#3b4f7a"][A*7%6]});let j=new P7([new R0(0,0),new R0(0.036,0),new R0(0.043,0.025),new R0(0.043,0.17),new R0(0.019,0.205),new R0(0.017,0.285),new R0(0.021,0.29),new R0(0.021,0.305),new R0(0,0.31)],12);v.forEach((A)=>E(j.clone(),R(A.color,0.3),A.pos,[0,0,0],[A.scale,A.scale,A.scale]));for(let[A,i,Y0]of[[-3.1,-1.9,"#a8483a"]])for(let r=0;r<3;r++){D(A,0.19+r*0.34,i,0.52,0.3,0.4,Y0);for(let V0=0;V0<5;V0++)D(A-0.2+V0*0.1,0.18+r*0.34,i+0.204,0.055,0.16,0.015,"#2c3025")}for(let A=0;A<5;A++){let i=-7-A*3.5;D(i,1.5,-3,3.1,3,3.2,["#d9a35c","#7fb1a4","#d8c7a2","#c98d7c","#a6bf8e"][A]),D(i,2.2,-1.38,1,0.8,0.045,"#b59961"),D(i,2.2,-1.35,0.045,0.86,0.055,"#273e37"),D(i,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let A=0;A<4;A++)M(-5-A*5,2.3,-1,0.08,0.09,4.6,"#665443"),D(-5-A*5,4.2,-1,1.8,0.09,0.09,"#514b3d");function g(A,i,Y0,r="#202d28"){let V0=new s8(WJ(...A),WJ(...Y0),WJ(...i));E(new b8(V0,20,0.008,4,!1),R(r),[0,0,0])}let f=[];for(let A of[-1.95,1.95])M(A,1.45,2.55,0.035,0.045,2.9,"#5b4a38",8);for(let[A,i,Y0]of[[[-2.7,2.9,-2.45],[-1.95,2.85,2.55],0.5],[[2.7,2.9,-2.45],[1.95,2.85,2.55],0.5],[[-1.95,2.85,2.55],[1.95,2.85,2.55],0.32]]){let r=WJ(...A),V0=WJ(...i),E0=r.clone().lerp(V0,0.5);E0.y-=Y0*2;let A0=new s8(r,E0,V0);E(new b8(A0,24,0.006,4,!1),R("#1c2320"),[0,0,0]);let g0=Math.round(r.distanceTo(V0)/0.42);for(let c0=1;c0<g0;c0++){let L0=A0.getPointAt(c0/g0);f.push(L0.setY(L0.y-0.035))}}{let A=new H8(0.022,10,8);A.scale(1,1.3,1);let i=["#ffd89a","#ffc27a","#ffe3a8"],Y0=new f9(A,new xJ({color:new y0(4.5,4.5,4.5)}),f.length),r=new SJ;f.forEach((V0,E0)=>{r.position.copy(V0),r.updateMatrix(),Y0.setMatrixAt(E0,r.matrix),Y0.setColorAt(E0,new y0(i[E0%i.length]))}),Q.add(Y0)}g([0,3.22,-1.6],[0,3.19,0],[0,3.02,-0.8]);let a=new _J;a.position.set(4.3,0,-1.7),Q.add(a);let m=new I0(new LJ(0.1,0.15,4.5,9),R("#696047"));m.position.y=2.25,a.add(m);for(let A=0;A<9;A++){let i=new I0(new H8(1,10,5),R(A%2?"#4a654c":"#344e3d"));i.scale.set(0.27,0.075,1.5),i.position.set(Math.sin(A*D6/9)*0.72,4.35,Math.cos(A*D6/9)*0.72),i.rotation.set(0.23,A*D6/9,0),a.add(i)}let J0=new V8({map:k,color:"#d9a877",roughness:0.5,clearcoat:0.55,clearcoatRoughness:0.28}),X0=new I0(new j8(M0.tableWidth,M0.tableThickness,M0.tableWidth,3,0.035),J0);X0.position.y=M0.tableCenterY,X0.castShadow=!0,X0.receiveShadow=!0,Q.add(X0);let y=V((A,i,Y0)=>{A.fillStyle="#2f5b47",A.fillRect(0,0,i,Y0);for(let V0=0;V0<Y0;V0+=2)for(let E0=0;E0<i;E0+=2){let A0=(w()-0.5)*14,g0=((E0>>1)+(V0>>1))%2?4:-4;A.fillStyle=`rgb(${47+A0+g0},${91+A0+g0},${71+A0+g0})`,A.fillRect(E0,V0,2,2)}for(let V0=0;V0<4;V0++){let E0=V0*Math.PI/2,A0=i/2+Math.sin(E0)*i*0.36,g0=Y0/2+Math.cos(E0)*Y0*0.36,c0=A.createRadialGradient(A0,g0,0,A0,g0,i*0.2);c0.addColorStop(0,"rgba(120,150,120,.16)"),c0.addColorStop(1,"rgba(120,150,120,0)"),A.fillStyle=c0,A.fillRect(0,0,i,Y0)}let r=A.createRadialGradient(i/2,Y0/2,i*0.1,i/2,Y0/2,i*0.62);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,.28)"),A.fillStyle=r,A.fillRect(0,0,i,Y0)},512,512),o=new I0(new j8(M0.feltWidth,0.012,M0.feltWidth,2,0.02),new V8({map:y,roughness:0.97,sheen:0.8,sheenRoughness:0.55,sheenColor:new y0("#9fc7a8")}));o.position.y=M0.feltCenterY,o.receiveShadow=!0,Q.add(o);let N0=M0.tableWidth/2-0.07;for(let A of[-N0,N0])for(let i of[-N0,N0])D(A,0.35,i,0.075,0.68,0.075,P);let t=["#C8402F","#6FB7C9"];for(let A=0;A<4;A++){let[i,Y0,r]=C9[A],V0=M0.feltWidth/2-0.012,E0=new I0(new VJ(M0.feltWidth*0.72,0.009),new o0({color:t[A%2],roughness:0.9}));E0.rotation.set(-Math.PI/2,0,r),E0.position.set(i*V0/M0.seatDistance,M0.surfaceY+0.0006,Y0*V0/M0.seatDistance),E0.receiveShadow=!0,Q.add(E0)}let x=new o0({roughness:0.92,map:V((A,i,Y0)=>{A.fillStyle="#8f7446",A.fillRect(0,0,i,Y0);let r=12,V0=i/r;for(let E0=0;E0<r;E0++)for(let A0=0;A0<r;A0++){let g0=(A0+E0)%2===0;for(let c0=0;c0<3;c0++){let L0=150+w()*45|0;A.fillStyle=`rgb(${L0+30},${L0+8},${L0-45})`;let p0=c0*V0/3+V0*0.04,YJ=V0/3-V0*0.08;if(g0)A.fillRect(A0*V0+1,E0*V0+p0,V0-2,YJ);else A.fillRect(A0*V0+p0,E0*V0+1,YJ,V0-2)}}A.fillStyle="rgba(40,28,14,.18)";for(let E0=0;E0<=r;E0++)A.fillRect(E0*V0-1,0,2,Y0),A.fillRect(0,E0*V0-1,i,2)},256,256)});for(let A=0;A<4;A++){let[i,Y0,r]=C9[A],V0=new _J;V0.position.set(i,0,Y0),V0.rotation.y=r,Q.add(V0);let E0=R(A%2?"#5e9fb2":"#b53f2e",0.62),A0=(g0,c0,L0,p0,YJ,$J,kJ=E0,pJ=0.008)=>{let MJ=WJ(p0,YJ,$J).applyAxisAngle(WJ(0,1,0),r).add(WJ(i,0,Y0));E(new j8(g0,c0,L0,2,pJ),kJ,MJ.toArray(),[0,r,0])};A0(M0.chairSeatWidth-0.04,0.035,0.5,0,M0.chairSeatY,0,x,0.01);for(let g0 of[-1,1])A0(0.04,0.05,0.54,g0*(M0.chairSeatWidth/2-0.02),M0.chairSeatY-0.005,0);for(let g0 of[-1,1])A0(M0.chairSeatWidth,0.05,0.04,0,M0.chairSeatY-0.005,g0*0.25);for(let g0 of[-0.24,0.24])for(let c0 of[-0.21,0.21])A0(0.04,M0.chairSeatY,0.04,g0,M0.chairSeatY/2,c0);for(let g0 of[-0.24,0.24])A0(0.024,0.024,0.42,g0,0.15,0);A0(0.48,0.024,0.024,0,0.15,0.21);for(let g0 of[-0.24,0.24])A0(0.04,0.52,0.04,g0,M0.chairSeatY+0.26,-0.23);for(let g0 of[0.2,0.33,0.46])A0(0.46,g0===0.46?0.07:0.045,0.022,0,M0.chairSeatY+g0,-0.23)}function _(A,i,Y0,r,V0,E0=60){let A0=V((g0,c0,L0)=>{g0.fillStyle=r,g0.fillRect(0,0,c0,L0),g0.fillStyle=V0,g0.textAlign="center",g0.textBaseline="middle",g0.font=`bold ${E0}px Georgia`,g0.fillText(A,c0/2,L0/2)},1024,256);return new I0(new VJ(i,Y0),new xJ({map:A0}))}let h=_("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);h.position.set(0,2.94,-2.33),Q.add(h);let u=_("MESA",0.11,0.029,"#284e3e","#81906b",77);{let A=document.createElement("canvas");A.width=512,A.height=136;let i=new n8(A);i.colorSpace=Q8;let Y0=()=>{let r=A.getContext("2d");r.clearRect(0,0,512,136),r.font=`96px ${document.fonts?.check?.("96px Shrikhand")?"Shrikhand":"Georgia"}`,r.textAlign="center",r.textBaseline="middle",r.fillStyle="rgba(170,205,170,.42)",r.fillText("Mesa",256,72),i.needsUpdate=!0};Y0(),document.fonts?.load?.("96px Shrikhand").then(Y0).catch(()=>{}),u.material=new o0({map:i,transparent:!0,depthWrite:!1,roughness:1})}u.rotation.x=-Math.PI/2,u.position.set(0,M0.surfaceY+0.001,0.3),Q.add(u);let W0=new _J;W0.position.set(-0.9,2.62,-3.45),W0.rotation.x=-Math.PI/2,Q.add(W0),M(-0.9,2.9,-3.45,0.015,0.015,0.56,"#777a68",8),M(-0.9,3.16,-3.45,0.075,0.075,0.025,"#767763",12);let $0=new I0(new H8(0.075,12,8),R("#41493d"));W0.add($0);for(let A=0;A<5;A++){let i=new I0(new wJ(0.13,0.5,0.025),R("#85856e",0.88,0.05));i.position.set(Math.sin(A*D6/5)*0.285,Math.cos(A*D6/5)*0.285,0),i.rotation.z=-A*D6/5,W0.add(i)}let q0=new _J;q0.position.set(-12,0.05,5.2),Q.add(q0);for(let A of[-0.36,0.36]){let i=new I0(new b9(0.19,0.038,7,14),R("#182221"));i.position.set(A,0.2,0),q0.add(i)}let F0=new I0(new j8(0.65,0.17,0.2,2,0.04),R("#823e2f",0.45,0.25));F0.position.y=0.49,q0.add(F0);let z0=new I0(new wJ(0.35,0.06,0.22),R("#202725"));z0.position.set(-0.08,0.61,0),q0.add(z0);let B0=new I0(new LJ(0.015,0.015,0.45,6),R("#8c9c96",0.4,0.5));B0.position.set(0.32,0.59,0),B0.rotation.z=-0.3,q0.add(B0);let b0=FN({scene:Q,texture:V,mat:R,box:D,cylinder:M,random:w,teal:l,wood:L,storeSign:h}),r0=EN({scene:Q,texture:V,mat:R,box:D,cylinder:M,staticGeo:E,random:w,renderer:K});qN({scene:Q,random:w});for(let{material:A,geos:i}of B.values()){let Y0=E$(i.some((r)=>!r.index)?i.map((r)=>r.index?r.toNonIndexed():r):i,!1);if(Y0){let r=new I0(Y0,A);r.receiveShadow=!0,Y0.computeBoundingBox(),r.castShadow=Y0.boundingBox.distanceToPoint(WJ(0,0.8,0))<1.6&&Y0.boundingBox.getSize(WJ()).length()<8,Q.add(r)}i.forEach((r)=>r.dispose())}let S0=new _J,ZJ=new _J;Q.add(S0,ZJ);let HJ=new j8(M0.tileLength,M0.tileThickness,M0.tileWidth,3,0.0024),EJ=new V8({color:"#ede5d2",roughness:0.5,clearcoat:0.3,clearcoatRoughness:0.4}),p=new V8({color:"#e2dac6",roughness:0.42,clearcoat:0.7,clearcoatRoughness:0.3}),cJ=new o0({color:"#b98b3e",roughness:0.28,metalness:1}),IJ=new LJ(0.0019,0.0019,0.0009,12),zJ=new o0({color:"#0b0a09",roughness:0.55}),T=new o0({color:"#2a2622",roughness:0.6}),C=new LJ(M0.pipRadius,M0.pipRadius,0.0007,14),c=new wJ(0.0014,0.0005,M0.tileWidth*0.8),Z0=new Set([HJ,C,c,IJ]),D0=new Set([EJ,p,zJ,T,cJ]),C0=[J0,o.material,EJ,p].map((A)=>[A,{clearcoat:A.clearcoat,sheen:A.sheen}]);function v0(A,i,Y0=!1){let r=new _J,V0=new I0(HJ,Y0?p:EJ);if(V0.castShadow=!0,V0.receiveShadow=!0,r.add(V0),!Y0){let E0=[];if([A,i].forEach((c0,L0)=>zL[c0].forEach((p0)=>E0.push(WJ((L0===0?-1:1)*M0.tileLength/4+(p0%3-1)*M0.pipColumnSpacing,M0.tileThickness/2+0.0005,(Math.floor(p0/3)-1)*M0.pipRowSpacing)))),E0.length){let c0=new f9(C,zJ,E0.length),L0=new QJ;E0.forEach((p0,YJ)=>c0.setMatrixAt(YJ,L0.makeTranslation(p0.x,p0.y,p0.z))),r.add(c0)}let A0=new I0(c,T);A0.position.y=M0.tileThickness/2+0.0002,r.add(A0);let g0=new I0(IJ,cJ);g0.position.y=M0.tileThickness/2+0.0004,r.add(g0)}return r}function U0(A){return WJ(A.x,M0.surfaceY+M0.tileThickness/2+0.001,A.z)}let O0=new I0(new b9(0.2,0.006,5,38),new xJ({color:"#e8bf70",transparent:!0,opacity:0.7}));O0.rotation.x=-Math.PI/2,O0.position.y=0.027,Q.add(O0);let _0=[],s0=[],T0=[],P0=[],JJ=new JX,e0=0,AJ=4,s=[];P0.push(...ON(Q));let f0=WJ(),G0=WJ(),j0=WJ(),l0=WJ(),k0=new QJ,h0=WJ(),XJ=WJ();function nJ(A){let i=null;if(A.root.traverse(($J)=>{if($J.isSkinnedMesh&&$J.morphTargetDictionary&&!i)i=$J}),!i||i.morphTargetDictionary.parpadeo==null)return;A.cara={mesh:i,iP:i.morphTargetDictionary.parpadeo,iS:i.morphTargetDictionary.sonrisa};let Y0=i.geometry.attributes.position,r=i.userData?.boca;if(r){let $J=1e9,kJ=0;for(let pJ=0;pJ<Y0.count;pJ++){let MJ=(Y0.getX(pJ)-r[0])**2+(Y0.getY(pJ)-r[1])**2+(Y0.getZ(pJ)-r[2])**2;if(MJ<$J)$J=MJ,kJ=pJ}A.bocaMundo=(pJ)=>{return i.skeleton.update(),i.getVertexPosition(kJ,pJ).applyMatrix4(i.matrixWorld)}}let V0=i.userData?.ojos,E0=i.userData?.parpado;if(!V0||!E0)return;let A0=i.geometry.attributes.position,g0=($J)=>{let kJ=1e9,pJ=0;for(let MJ=0;MJ<A0.count;MJ++){let T8=(A0.getX(MJ)-$J[0])**2+(A0.getY(MJ)-$J[1])**2+(A0.getZ(MJ)-$J[2])**2;if(T8<kJ)kJ=T8,pJ=MJ}return pJ},c0=new VJ(0.027,0.0125,8,4);c0.translate(0,-0.00625,0);let L0=c0.attributes.position,p0=[];for(let $J=0;$J<L0.count;$J++){let kJ=L0.getX($J)/0.0135,pJ=-L0.getY($J)/0.0125;L0.setZ($J,0.0032*Math.cos(kJ*Math.PI/2)*(0.5+0.5*pJ));let MJ=pJ>0.85?0.45:1;p0.push(MJ,MJ,MJ)}c0.setAttribute("color",new UJ(p0,3)),c0.computeVertexNormals();let YJ=new o0({color:new y0().setRGB(...E0,Q8),roughness:0.7,vertexColors:!0});A.parpados=V0.map(($J)=>{let kJ=new I0(c0,YJ);return kJ.visible=!1,kJ.frustumCulled=!1,Q.add(kJ),{m:kJ,k:g0($J)}})}function yJ(A){let i=A.parpados;if(!i||!A.cara)return;let Y0=A.parpadeo||0;if(Y0<0.03){for(let A0 of i)A0.m.visible=!1;return}let r=A.cara.mesh;r.skeleton.update();let V0=r.getVertexPosition(i[0].k,f0).applyMatrix4(r.matrixWorld).clone(),E0=r.getVertexPosition(i[1].k,f0).applyMatrix4(r.matrixWorld).clone();if(A.head.getWorldPosition(h0),A.front.getWorldPosition(XJ),l0.subVectors(XJ,h0).normalize(),G0.subVectors(E0,V0).normalize(),j0.crossVectors(l0,G0).normalize(),j0.y<0)j0.negate();G0.crossVectors(j0,l0).normalize(),k0.makeBasis(G0,j0,l0);for(let[A0,g0]of[[i[0],V0],[i[1],E0]])A0.m.visible=!0,A0.m.quaternion.setFromRotationMatrix(k0),A0.m.position.copy(g0).addScaledVector(j0,0.0052).addScaledVector(l0,0.0024),A0.m.scale.set(1,Y0,1)}async function o8(A,i){try{$(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][A]}…`,e0/AJ);let Y0=await JJ.loadAsync(`/models/${i}.glb`);s0[A]=Y0,Y0.reposo=new Map(PK(Y0.scene).map(($J)=>[$J.bone.name,$J]));let r=Y0.scene,V0=new _J;V0.add(r);let E0=new RQ(r);if(Y0.animations[0])E0.clipAction(Y0.animations.find(($J)=>$J.name==="Seated")||Y0.animations[0]).play();E0.setTime(M0.neutralPoseTime),r.updateMatrixWorld(!0),r.traverse(($J)=>{if($J.isSkinnedMesh)$J.computeBoundingBox();if($J.isMesh)$J.castShadow=!0,$J.receiveShadow=!0,$J.frustumCulled=!1,$J.material.roughness=0.83});let A0=new k8().setFromObject(r),g0=r.getObjectByName("Hips"),c0=g0?.getWorldPosition(WJ())||A0.getCenter(WJ());r.position.set(-c0.x,-A0.min.y,-c0.z);let[L0,p0,YJ]=C9[A];if(V0.position.set(L0,0,p0),V0.rotation.y=YJ,Q.add(V0),_0[A]={root:r,holder:V0,index:A,pose:PK(r),head:r.getObjectByName("Head"),neck:r.getObjectByName("neck"),front:r.getObjectByName("headfront"),chest:r.getObjectByName("Spine"),hips:r.getObjectByName("Hips"),lomo:r.getObjectByName("Spine02"),muslos:[r.getObjectByName("LeftUpLeg"),r.getObjectByName("RightUpLeg")],hombros:[[1,r.getObjectByName("LeftShoulder")],[-1,r.getObjectByName("RightShoulder")]],spine:r.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map(($J)=>({lado:$J,hombro:r.getObjectByName($J+"Shoulder"),brazo:r.getObjectByName($J+"Arm"),antebrazo:r.getObjectByName($J+"ForeArm"),mano:r.getObjectByName($J+"Hand")}))},_0[A].bebida=P0.find(($J)=>$J.index===A),nJ(_0[A]),e0++,$(e0===4?"The table is ready.":`${e0} of 4 seats ready`,e0/AJ),T0.length===0&&H7>0)z(H7)}catch(Y0){s.push(i),console.error("Character load failed",i,Y0),$(`Could not load ${i}. Reload to retry.`,e0/AJ)}}let a8=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((A,i)=>o8(i,A))),u9=null;a8.then(()=>{if(!hK)u9=_N({scene:Q,camera:Z,renderer:K,pocos:Y,cuerpos:[["rafa-upright",0],["luis-upright",2],["marisol",1],["carmen",3]].filter(([,A])=>s0[A]).map(([A,i])=>({nombre:A,gltf:s0[i]}))})});let k$=null,b7=null,xQ="",k6=null,B8=DN({scene:Q,renderer:K,camera:Z,controls:X,software:Y,bulbLight:F});B8.calidad("high");let r8=new Set,M6=new Map,gQ=[0,1,2,3].map(()=>WJ()),M$=(A)=>{let i=A.detail||{};if(i.active)r8.add(i.seat),M6.set(i.seat,i.type);else r8.delete(i.seat)};window.addEventListener("mesa:botvoice",M$);let d9=null,H7=0,C$="",P$=0,pQ="attract",U8=null,F9=[],fK=0,mQ=0;function C6(A){while(A.children.length){let i=A.children.pop();i.parent=null,i.traverse((Y0)=>{if(Y0.isMesh&&!Z0.has(Y0.geometry))Y0.geometry.dispose();if(Y0.isMesh&&!D0.has(Y0.material))Y0.material.dispose()})}}function z(A){H7=A;let i=Math.min(8,A);for(let Y0=T0.length-1;Y0>=i;Y0--)Q.remove(T0[Y0].holder),T0.pop();while(T0.length<i&&s0.filter(Boolean).length){let Y0=T0.length,r=s0[Y0%4]||s0.find(Boolean),V0=q$(r.scene),E0=new _J;E0.add(V0);let A0=new RQ(V0);if(r.animations[0])A0.clipAction(r.animations.find((p0)=>p0.name==="Seated")||r.animations[0]).play();A0.setTime(M0.neutralPoseTime),V0.updateMatrixWorld(!0),V0.traverse((p0)=>{if(p0.isSkinnedMesh)p0.computeBoundingBox();if(p0.isMesh)p0.castShadow=!1,p0.frustumCulled=!1});let g0=new k8().setFromObject(V0),c0=V0.getObjectByName("Hips")?.getWorldPosition(WJ())||g0.getCenter(WJ());V0.position.x-=c0.x,V0.position.y-=g0.min.y,V0.position.z-=c0.z,E0.position.set(-2.5+Y0%4*1.66,0,-2.5-Math.floor(Y0/4)*0.65),E0.rotation.y=0,Q.add(E0);let L0=new I0(new wJ(0.56,0.06,0.54),b);L0.position.set(0,M0.chairSeatY,0),E0.add(L0),T0.push({root:V0,holder:E0,pose:PK(V0),head:V0.getObjectByName("Head"),neck:V0.getObjectByName("neck"),front:V0.getObjectByName("headfront"),chest:V0.getObjectByName("Spine"),spine:V0.getObjectByName("Spine01"),index:Y0+4})}}let n=!1,H0=WJ();function K0(){let A=Z.position,i=X.target;if(H0.subVectors(A,i),H0.length()>4.6)A.copy(i).addScaledVector(H0.normalize(),4.6);A.z=Math.max(A.z,-2.1),A.x=v9.clamp(A.x,-4.9,4.9),A.y=v9.clamp(A.y,0.35,5.2)}let Q0=-1,w0=null,u0=X.minDistance;function x0(A,i,Y0){if(document.documentElement.classList.contains("reduced"))return;let r=WJ(1,0,1).normalize(),V0=-9;for(let[A0,g0]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let c0=WJ(A0,0,g0).normalize(),L0=c0.x*A.x+c0.z*A.z;if(L0>V0)V0=L0,r=c0}let E0=A.clone().addScaledVector(r,0.3);if(E0.x=v9.clamp(E0.x,-0.4,0.4),E0.z=v9.clamp(E0.z,-0.4,0.4),E0.y=M0.surfaceY+(Y0?0.12:0.19),!w0)u0=X.minDistance;X.minDistance=0.1,w0={pos:w0?.pos||Z.position.clone(),target:w0?.target||X.target.clone(),at:m8.elapsedTime+3.4},U8={from:Z.position.clone(),to:E0,fromTarget:X.target.clone(),toTarget:A.clone().setY(A.y+0.01),t:0,dur:0.45}}function i0(A="table"){if(X.minDistance=A==="seat"||A==="close"?0.3:0.7,X.minPolarAngle=A==="overhead"?0.01:0.25,Z.aspect<0.95&&A==="table")A="overhead";let i,Y0=WJ(0,0.8,0);if(A==="attract")i=WJ(0.75,1.3,4.4),Y0=WJ(-1,1.4,-1.2);else if(A==="overhead")i=WJ(0.001,1.86,0.34),Y0=WJ(0,M0.surfaceY,0.02);else if(A==="seat")i=WJ(0,1.36,0.74),Y0=WJ(0,0.82,-0.12);else if(A==="close")i=WJ(0.62,1.3,1),Y0=WJ(-0.03,0.85,-0.08);else i=WJ(0.8,1.89,1.24),Y0=WJ(0,0.9,-0.2);if(A!=="attract"&&A!=="seat"&&Z.aspect<1.3){let r=Math.min(2.4,Math.pow(1.6/Z.aspect,0.8));i=Y0.clone().add(i.clone().sub(Y0).multiplyScalar(r))}if(_0[0])_0[0].root.visible=A!=="seat";w0=null,X.minDistance=Math.min(X.minDistance,u0),U8={from:Z.position.clone(),to:i,fromTarget:X.target.clone(),toTarget:Y0,t:0}}let n0=WJ(0,1,0),qJ=new GJ().setFromAxisAngle(WJ(1,0,0),0.12),DJ=new GJ().setFromAxisAngle(n0,Math.PI/2),a0=new GJ().setFromAxisAngle(WJ(0,0,1),Math.PI/2),vJ=M0.tableCenterY+M0.tableThickness/2+M0.tileLength/2*Math.cos(0.12)+M0.tileThickness/2*Math.sin(0.12)+0.001;function aJ(A,i,Y0){let r=C9[A][2];return Y0.quaternion.setFromAxisAngle(n0,r).multiply(qJ).multiply(DJ).multiply(a0),Y0.position.set(i,vJ,-M0.rackRadius).applyAxisAngle(n0,r),Y0}let TJ=new f9(HJ,p,28);TJ.count=0,TJ.castShadow=!0,TJ.receiveShadow=!0,TJ.frustumCulled=!1,ZJ.add(TJ);let gJ=[[],[],[],[]],iJ=new SJ,d0=[0,0,0,0],N8="",PJ=new Set;function v8(A){let i=0;for(let Y0=0;Y0<4;Y0++){let r=PJ.has(Y0)?0:d0[Y0],V0=gJ[Y0];while(V0.length<r)V0.push((V0.length-(r-1)/2)*M0.rackSpacing);V0.length=r;for(let E0=0;E0<r;E0++){let A0=(E0-(r-1)/2)*M0.rackSpacing;V0[E0]+=(A0-V0[E0])*(1-Math.exp(-A*10)),aJ(Y0,V0[E0],iJ),iJ.updateMatrix(),TJ.setMatrixAt(i++,iJ.matrix)}}TJ.count=i,TJ.instanceMatrix.needsUpdate=!0}let C8=new _J;Q.add(C8);let t8=new Map,c9="",hJ="",rJ=(()=>{let A=7,i=()=>(A=A*16807%2147483647)/2147483647,Y0=[],r=0.2;for(let V0=0;V0<28;V0++){let E0=!1;for(let A0=0;A0<600&&!E0;A0++){let g0=i()*Math.PI*2,c0=Math.sqrt(i())*r,L0=Math.cos(g0)*c0,p0=Math.sin(g0)*c0*0.82;if(Y0.every((YJ)=>Math.hypot(YJ.x-L0,YJ.z-p0)>=0.058))Y0.push({x:L0,z:p0,ry:i()*Math.PI}),E0=!0}if(!E0)r+=0.012,V0--}return Y0})(),E9=M0.surfaceY+M0.tileThickness/2+0.0003;function sJ(){for(let A=0;A<28;A++){let i=v0(0,0,!0),Y0=rJ[A];i.position.set(Y0.x,E9,Y0.z),i.rotation.y=Y0.ry,S0.add(i)}}let P8=(A)=>A*A*(3-2*A),U7=new GJ().setFromAxisAngle(WJ(1,0,0),Math.PI),lQ=new GJ().setFromAxisAngle(n0,-Math.PI/2);function TN(A,i){A.revealed.forEach((Y0,r)=>{let V0=Y0.length,E0=C9[r][2];Y0.forEach((A0,g0)=>{let c0=(g0-(V0-1)/2)*M0.rackSpacing,L0=v0(A0.a,A0.b);aJ(r,c0,iJ);let p0=iJ.quaternion.clone().multiply(U7),YJ=iJ.position.clone(),$J=WJ(c0,M0.surfaceY+M0.tileThickness/2+0.001,-M0.rackRadius+0.047).applyAxisAngle(n0,E0),kJ=new GJ().setFromAxisAngle(n0,E0).multiply(lQ);L0.position.copy(YJ),L0.quaternion.copy(p0),L0.visible=!1,S0.add(L0),F9.push({obj:L0,from:YJ,to:$J,qFrom:p0,qTo:kJ,elapsed:-(i+r*0.3+g0*0.055),duration:0.42,revela:r,ultima:g0===V0-1})})})}function _X(A,i=0){d9=A;{let E0=A&&(A.phase==="handEnd"||A.phase==="seriesEnd")&&A.result,A0=E0?A.handNo+":"+A.phase:"";if(A0&&A0!==xQ)b7={t:m8.elapsedTime+0.5,team:A.result.team??null};if(!E0)b7=null;xQ=A0}if(H7!==i)z(i);let Y0=!A||A.phase==="lobby"?"pila":"mano"+A.handNo;if(Y0!==c9){c9=Y0,C6(S0),t8.clear(),F9=F9.filter((E0)=>E0.reparto);for(let E0 of _0)if(E0)E0.jugada=null;if(Y0==="pila")sJ()}if(A&&A.chain?.length){let E0=e5(A.chain,A.moves),A0=A.event,g0=["domino","capicua","tranque"].includes(A0?.type),c0=A.moves[A.moves.length-1],L0=A0?.type==="domino"||A0?.type==="capicua",p0=A0?.type==="play"?A0.tile:g0&&c0?.type==="play"?c0.tile:null;A.chain.forEach((YJ,$J)=>{if(t8.has(YJ.id))return;let kJ=v0(YJ.x,YJ.y),pJ=U0(E0[$J]);if(kJ.position.copy(pJ),kJ.rotation.y=E0[$J].yaw,kJ.updateMatrix(),S0.add(kJ),t8.set(YJ.id,kJ),YJ.id!==p0||YJ.seat==null)return;aJ(YJ.seat,0,iJ);let MJ={obj:kJ,from:iJ.position.clone(),to:pJ.clone(),qFrom:iJ.quaternion.clone(),qTo:kJ.quaternion.clone(),elapsed:0,duration:L0?0.7:0.55,golpe:L0};if(kJ.position.copy(MJ.from),kJ.quaternion.copy(MJ.qFrom),F9.push(MJ),g0)x0(pJ,YJ.seat,L0);fK=performance.now();let T8=_0[YJ.seat];if(k$={p:pJ.clone(),t:m8.elapsedTime+MJ.duration},T8)T8.reaction={time:m8.elapsedTime},T8.jugada={t0:m8.elapsedTime,obj:kJ,anim:MJ,hasta:pJ.clone()}})}if(A?.phase==="playing"&&A.handNo!==P$&&A.moves.length===0){P$=A.handNo,C6(C8),F9=F9.filter((E0)=>!E0.reparto),mQ=performance.now()+3300;for(let E0=0;E0<4;E0++)gJ[E0]=Array.from({length:7},(A0,g0)=>(g0-3)*M0.rackSpacing);for(let E0=0;E0<28;E0++){let A0=E0%4,g0=Math.floor(E0/4),c0=v0(0,0,!0),L0=rJ[E0],p0=WJ(L0.x,E9,L0.z);c0.position.copy(p0),c0.rotation.y=L0.ry,C8.add(c0);let YJ=aJ(A0,(g0-3)*M0.rackSpacing,new SJ);F9.push({obj:c0,from:p0,to:YJ.position.clone(),qFrom:c0.quaternion.clone(),qTo:YJ.quaternion.clone(),elapsed:-E0*0.065,duration:1.1,reparto:!0})}}let r=A?.moves?.[A.moves.length-1],V0=A?A.handNo+":"+A.moves.length:"";if(r?.type==="pass"&&hJ!==V0){hJ=V0;let E0=_0[r.seat];if(E0)E0.toque={t0:m8.elapsedTime}}{let E0=A&&(A.phase==="handEnd"||A.phase==="seriesEnd")&&A.revealed,A0=E0?"r"+A.handNo:"";if(!E0)N8="",PJ.clear();else if(A0!==N8){N8=A0;let g0=A.result?.type;TN(A,g0==="domino"||g0==="capicua"?3.4:g0==="tranque"?2.5:1.2)}}d0=[0,1,2,3].map((E0)=>!A||A.phase==="lobby"?0:A.counts[E0]??0),O0.visible=!1,k6=A?.phase==="playing"&&A.chain?.length?JN(A.chain,A.moves):null}let m8=new XK,I$=0,bK=0,uQ=0,z$=60,hK=!1,dQ=!1,A$=null,P6="high",TX=null,cQ=performance.now(),nQ=0,wX=!1,wN=new URLSearchParams(location.search).has("debug"),SX=F.intensity,h7=WJ(),SN=WJ(0,M0.surfaceY,0);function xK(){if(hK||dQ){A$=null;return}A$=requestAnimationFrame(xK);let A=m8.getDelta(),i=Math.min(A,0.06),Y0=TX??m8.elapsedTime,r=performance.now();if(bK++,uQ+=A,uQ>1){if(z$=bK/uQ,bK=0,uQ=0,!W&&!nQ&&P6==="high"&&r-cQ>9000&&r-cQ<30000&&z$<30)nQ=r,gK.quality("low"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"low"}));else if(!W&&P6==="low"&&!wX&&r-(nQ||cQ)>9000&&r-(nQ||cQ)<40000&&z$<20)wX=!0,gK.quality("min"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"min"}))}I$++,K.info.reset();let V0=document.documentElement.classList.contains("reduced");if(w0&&m8.elapsedTime>w0.at)U8={from:Z.position.clone(),to:w0.pos,fromTarget:X.target.clone(),toTarget:w0.target,t:0,dur:1.2},w0=null,X.minDistance=u0;let E0=0;if(Q0>=0){let L0=m8.elapsedTime-Q0;if(L0<0.5){let p0=0.0045*Math.exp(-L0*8)*Math.sin(L0*D6*18);S0.position.y=p0,ZJ.position.y=p0,E0=V0?0:0.004*Math.exp(-L0*9),F.intensity=SX*(1+0.35*Math.exp(-L0*14))}else Q0=-1,S0.position.y=0,ZJ.position.y=0,F.intensity=SX}if(U8){U8.t=Math.min(1,U8.t+i/(U8.dur||1.1));let L0=P8(U8.t);if(Z.position.lerpVectors(U8.from,U8.to,L0),X.target.lerpVectors(U8.fromTarget,U8.toTarget,L0),U8.t===1)U8=null}if(!V0)W0.rotation.z=Y0*3.5,a.rotation.z=Math.sin(Y0*0.47)*0.009,b0.update(Y0),r0.update(Y0);let A0=d9,g0={dt:i,jugando:A0?.phase==="playing",turno:A0?.turn,habla:r8,hablaTipo:M6,foco:k$,fin:b7,cabezas:_0.map((L0,p0)=>L0?.head?L0.head.getWorldPosition(gQ[p0]):null)};if(u9)u9.update(i,{view:A0,habla:r8,cabezas:g0.cabezas}),g0.saludo=u9.saludo;for(let L0 of _0){if(!L0)continue;IK(L0,Y0,V0,g0),yJ(L0)}for(let L0=0;L0<T0.length;L0++)if((I$+L0)%2===0)IK(T0[L0],Y0,V0,g0);F9=F9.filter((L0)=>{if(L0.elapsed+=i,L0.elapsed<0)return!0;let p0=Math.min(1,L0.elapsed/L0.duration);if(L0.revela!=null){L0.obj.visible=!0,PJ.add(L0.revela);let YJ=P8(p0);if(L0.obj.quaternion.slerpQuaternions(L0.qFrom,L0.qTo,YJ),L0.obj.position.lerpVectors(L0.from,L0.to,YJ),L0.obj.position.y+=Math.sin(p0*Math.PI)*0.012,p0>=1&&L0.ultima)dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{revela:!0}}));return p0<1}if(L0.reparto)return L0.obj.position.lerpVectors(L0.from,L0.to,P8(p0)),L0.obj.position.y+=Math.sin(p0*Math.PI)*0.035,L0.obj.quaternion.slerpQuaternions(L0.qFrom,L0.qTo,P8(Math.min(1,Math.max(0,(p0-0.3)/0.7)))),p0<1;if(L0.obj.quaternion.slerpQuaternions(L0.qFrom,L0.qTo,P8(Math.min(1,p0/0.4))),L0.golpe){let YJ=Math.min(1,p0/0.62);L0.obj.position.lerpVectors(L0.from,L0.to,P8(YJ)),L0.obj.position.y+=p0<0.62?Math.sin(YJ*Math.PI/2)*0.17:0.17*(1-((p0-0.62)/0.38)**2)}else L0.obj.position.lerpVectors(L0.from,L0.to,P8(p0)),L0.obj.position.y+=Math.sin(p0*Math.PI)*0.07;if(p0>=1&&!L0.sono){if(L0.sono=!0,L0.golpe)Q0=m8.elapsedTime;dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{golpe:!!L0.golpe}}))}return p0<1});let c0=r<mQ;if(ZJ.visible=!c0,!c0&&C8.children.length)C6(C8);if(v8(i),X.update(),!U8&&!w0&&!n)K0();if(B8.frame(Y0,i,{reduced:V0,view:A0,ends:k6,temblor:E0}),B8.render(),I$%2===0)for(let L0 of document.querySelectorAll("[data-seatlabel]")){let p0=Number(L0.dataset.seatlabel),[YJ,$J]=C9[p0],kJ=_0[p0]?.head,pJ=kJ&&kJ.getWorldPosition(h7).distanceTo(B8.vista.position)<SN.distanceTo(B8.vista.position)-0.2;if(pJ)h7.y-=0.3;else if(kJ)h7.y+=0.23;else h7.set(YJ,1.45,$J);let MJ=h7.project(B8.vista),T8=!1;if(!pJ&&MJ.y>0.8&&kJ)kJ.getWorldPosition(h7).y-=0.1,MJ=h7.project(B8.vista),T8=!0;let jN=Math.min(MJ.y,0.8);L0.style.transform=`translate(${(MJ.x*0.5+0.5)*innerWidth}px,${(-jN*0.5+0.5)*innerHeight}px) translate(-50%,${pJ?"-50%":T8?"0":"-100%"})`,L0.style.visibility=MJ.z>1||Math.abs(MJ.x)>1.1||MJ.y<-1.15?"hidden":"visible"}if(I$%30===0||I$===1){if(window.mesaDiagnostics={cam:Z.position.toArray().map((L0)=>+L0.toFixed(2)),fps:Math.round(z$),drawCalls:K.info.render.calls,triangles:K.info.render.triangles,characters:e0,crowd:H7,gente:u9?+u9.ms.toFixed(2):null,visibleCrowd:T0.length,boardTiles:d9?.chain.length||0,quality:P6,modelErrors:s},wN){window.mesaRigDebug=_0.filter(Boolean).map((p0)=>({index:p0.index,head:p0.head?.getWorldPosition(WJ()).toArray(),hip:p0.hips?.getWorldPosition(WJ()).toArray(),rootScale:p0.root.scale.toArray()}));let L0=document.querySelector("#perf");if(L0)L0.textContent=`${Math.round(z$)} fps · ${K.info.render.calls} draws`}}}window.mesaCamara=(A,i)=>{U8=null,w0=null,n=!0,X.minDistance=0.1,X.maxDistance=30,Z.position.set(...A),X.target.set(...i),X.update()},window.mesaCara=(A,i,Y0)=>{let r=_0[A];if(r)r.caraFija=i==null?null:{p:i,s:Y0??0}},window.mesaBeber=(A,i)=>{let Y0=_0[A];if(!Y0||!Y0.bebida||Y0.jugada)return;if(Y0.trago&&i!=null&&Y0.trago.fijo!=null)Y0.trago.fijo=i;else Y0.trago={t0:m8.elapsedTime,fijo:i}},window.mesaBrazo=(A)=>{let i=_0[A],Y0=i?.brazos?.[1];if(!Y0)return null;let r=(V0)=>V0.getWorldPosition(new S).toArray();return{codo:r(Y0.antebrazo),muneca:r(Y0.mano),vaso:i.bebida?i.bebida.group.position.toArray():null}},_X(null),xK();let jX=()=>{if(Z.aspect<0.95)Z.setViewOffset(innerWidth,innerHeight*1.24,0,innerHeight*0.24,innerWidth,innerHeight);else Z.clearViewOffset();Z.updateProjectionMatrix()},yX=()=>Y?0.65:P6==="min"?Math.min(devicePixelRatio,1)*0.55:P6==="low"?Math.min(devicePixelRatio,1)*0.8:Math.min(devicePixelRatio,1.5,1920/innerWidth),vX=()=>{Z.aspect=innerWidth/innerHeight,jX(),K.setPixelRatio(yX()),K.setSize(innerWidth,innerHeight),B8.resize(innerWidth,innerHeight)};jX(),window.addEventListener("resize",vX),X.addEventListener("start",()=>{U8=null,w0=null}),K.domElement.addEventListener("webglcontextrestored",()=>B8.entorno?.());let gK={update:_X,setCrowd:z,setCamera:i0,ready:a8,sampleTime(A){TX=A;for(let i of[..._0.filter(Boolean),...T0])IK(i,A,!1);B8.frame(A,0,{reduced:!1,view:d9,ends:k6}),B8.render()},setMode(A){pQ=A,i0(A==="attract"?"attract":"table")},quality(A){P6=A;let i=A!=="high";F.castShadow=!i&&!Y;for(let[Y0,r]of C0){let V0=i?0:r.clearcoat,E0=i?0:r.sheen;if(Y0.clearcoat!==V0||Y0.sheen!==E0)Y0.clearcoat=V0,Y0.sheen=E0,Y0.needsUpdate=!0}G.visible=!i,U.intensity=i?H+0.1:H,K.setPixelRatio(yX()),B8.calidad(A),B8.resize(innerWidth,innerHeight)},pause(){dQ=!0},resume(){if(!dQ)return;if(dQ=!1,m8.getDelta(),!A$)xK()},dispose(){if(hK=!0,u9?.dispose(),B8.dispose(),window.removeEventListener("mesa:botvoice",M$),A$)cancelAnimationFrame(A$);window.removeEventListener("resize",vX),X.dispose(),K.dispose(),J.replaceChildren()}};return gK}export{vk as createWorld};

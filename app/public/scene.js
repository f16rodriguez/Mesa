var kH="186",O6={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},R6={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},MH=0,FW=1,CH=2;var c6=1,PH=2,iJ=3,L6=0,C8=1,o9=2,K7=0,n$=1,y7=2,EW=3,qW=4,IH=5;var oJ=100,zH=101,AH=102,_H=103,TH=104,wH=200,SH=201,jH=202,yH=203,vH=204,fH=205,bH=206,hH=207,xH=208,gH=209,pH=210,mH=211,lH=212,uH=213,dH=214,cH=0,nH=1,sH=2,OW=3,iH=4,oH=5,aH=6,rH=7,tH=0,eH=1,J5=2,B7=0,s$=1,i$=2,o$=3,n6=4,a$=5,r$=6,t$=7;var aJ=301,s6=302,IZ=303,zZ=304,e$=306,V6=1000,rJ=1001,AZ=1002,D7=1003,_Z=1004;var i6=1005;var L8=1006,tJ=1007;var v7=1008;var k7=1009,$5=1010,Q5=1011,JQ=1012,RW=1013,B6=1014,t7=1015,V8=1016,LW=1017,VW=1018,eJ=1020,Z5=35902,K5=35899,W5=1021,X5=1022,f7=1023,o6=1026,a6=1027,Y5=1028,BW=1029,r6=1030,DW=1031;var kW=1033,TZ=33776,wZ=33777,SZ=33778,jZ=33779,MW=35840,CW=35841,PW=35842,IW=35843,zW=36196,AW=37492,_W=37496,TW=37488,wW=37489,yZ=37490,SW=37491,jW=37808,yW=37809,vW=37810,fW=37811,bW=37812,hW=37813,xW=37814,gW=37815,pW=37816,mW=37817,lW=37818,uW=37819,dW=37820,cW=37821,nW=36492,sW=36494,iW=36495,oW=36283,aW=36284,vZ=36285,rW=36286,tW=2200;var eW=2300,fZ=2301;var JX=0,$Q=1,J$=2;var $X=0,H5=1,t6="",K8="srgb",s8="srgb-linear",QX="linear",d9="srgb";var U5=512,N5=513,G5=514,bZ=515,F5=516,E5=517,hZ=518,q5=519;var ZX="300 es",KX=2000;function xN(J){for(let $=J.length-1;$>=0;--$)if(J[$]>=65535)return!0;return!1}function gN(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function dJ(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function O5(){let J=dJ("canvas");return J.style.display="block",J}var wY={},cJ=null;function l$(...J){let $="THREE."+J.shift();if(cJ)cJ("log",$,...J);else console.log($,...J)}function R5(J){let $=J[0];if(typeof $==="string"&&$.startsWith("TSL:")){let Q=J[1];if(Q&&Q.isStackTrace)J[0]+=" "+Q.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function r0(...J){J=R5(J);let $="THREE."+J.shift();if(cJ)cJ("warn",$,...J);else{let Q=J[0];if(Q&&Q.isStackTrace)console.warn(Q.getError($));else console.warn($,...J)}}function Z9(...J){J=R5(J);let $="THREE."+J.shift();if(cJ)cJ("error",$,...J);else{let Q=J[0];if(Q&&Q.isStackTrace)console.error(Q.getError($));else console.error($,...J)}}function l6(...J){let $=J.join(" ");if($ in wY)return;wY[$]=!0,r0(...J)}function L5(J,$,Q){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync($,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Q);break;default:Z()}}setTimeout(W,Q)})}var V5={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class M7{addEventListener(J,$){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[J]===void 0)Q[J]=[];if(Q[J].indexOf($)===-1)Q[J].push($)}hasEventListener(J,$){let Q=this._listeners;if(Q===void 0)return!1;return Q[J]!==void 0&&Q[J].indexOf($)!==-1}removeEventListener(J,$){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J];if(Z!==void 0){let K=Z.indexOf($);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let $=this._listeners;if($===void 0)return;let Q=$[J.type];if(Q!==void 0){J.target=this;let Z=Q.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var I8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],SY=1234567,x$=Math.PI/180,u6=180/Math.PI;function Z7(){let J=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(I8[J&255]+I8[J>>8&255]+I8[J>>16&255]+I8[J>>24&255]+"-"+I8[$&255]+I8[$>>8&255]+"-"+I8[$>>16&15|64]+I8[$>>24&255]+"-"+I8[Q&63|128]+I8[Q>>8&255]+"-"+I8[Q>>16&255]+I8[Q>>24&255]+I8[Z&255]+I8[Z>>8&255]+I8[Z>>16&255]+I8[Z>>24&255]).toLowerCase()}function O9(J,$,Q){return Math.max($,Math.min(Q,J))}function WX(J,$){return(J%$+$)%$}function pN(J,$,Q,Z,K){return Z+(J-$)*(K-Z)/(Q-$)}function mN(J,$,Q){if(J!==$)return(Q-J)/($-J);else return 0}function g$(J,$,Q){return(1-Q)*J+Q*$}function lN(J,$,Q,Z){return g$(J,$,1-Math.exp(-Q*Z))}function uN(J,$=1){return $-Math.abs(WX(J,$*2)-$)}function dN(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*(3-2*J)}function cN(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*J*(J*(J*6-15)+10)}function nN(J,$){return J+Math.floor(Math.random()*($-J+1))}function sN(J,$){return J+Math.random()*($-J)}function iN(J){return J*(0.5-Math.random())}function oN(J){if(J!==void 0)SY=J;let $=SY+=1831565813;return $=Math.imul($^$>>>15,$|1),$^=$+Math.imul($^$>>>7,$|61),(($^$>>>14)>>>0)/4294967296}function aN(J){return J*x$}function rN(J){return J*u6}function tN(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function eN(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function JG(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function $G(J,$,Q,Z,K){let{cos:W,sin:X}=Math,Y=W(Q/2),H=X(Q/2),U=W(($+Z)/2),G=X(($+Z)/2),F=W(($-Z)/2),N=X(($-Z)/2),q=W((Z-$)/2),O=X((Z-$)/2);switch(K){case"XYX":J.set(Y*G,H*F,H*N,Y*U);break;case"YZY":J.set(H*N,Y*G,H*F,Y*U);break;case"ZXZ":J.set(H*F,H*N,Y*G,Y*U);break;case"XZX":J.set(Y*G,H*O,H*q,Y*U);break;case"YXY":J.set(H*q,Y*G,H*O,Y*U);break;case"ZYZ":J.set(H*O,H*q,Y*G,Y*U);break;default:r0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+K)}}function L7(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function l9(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var b7={DEG2RAD:x$,RAD2DEG:u6,generateUUID:Z7,clamp:O9,euclideanModulo:WX,mapLinear:pN,inverseLerp:mN,lerp:g$,damp:lN,pingpong:uN,smoothstep:dN,smootherstep:cN,randInt:nN,randFloat:sN,randFloatSpread:iN,seededRandom:oN,degToRad:aN,radToDeg:rN,isPowerOfTwo:tN,ceilPowerOfTwo:eN,floorPowerOfTwo:JG,setQuaternionFromProperEuler:$G,normalize:l9,denormalize:L7};class R0{static{R0.prototype.isVector2=!0}constructor(J=0,$=0){this.x=J,this.y=$}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,$){return this.x=J,this.y=$,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let $=this.x,Q=this.y,Z=J.elements;return this.x=Z[0]*$+Z[3]*Q+Z[6],this.y=Z[1]*$+Z[4]*Q+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,$){return this.x=O9(this.x,J.x,$.x),this.y=O9(this.y,J.y,$.y),this}clampScalar(J,$){return this.x=O9(this.x,J,$),this.y=O9(this.y,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(O9(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(O9(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y;return $*$+Q*Q}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this}rotateAround(J,$){let Q=Math.cos($),Z=Math.sin($),K=this.x-J.x,W=this.y-J.y;return this.x=K*Q-W*Z+J.x,this.y=K*Z+W*Q+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class E9{constructor(J=0,$=0,Q=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=$,this._z=Q,this._w=Z}static slerpFlat(J,$,Q,Z,K,W,X){let Y=Q[Z+0],H=Q[Z+1],U=Q[Z+2],G=Q[Z+3],F=K[W+0],N=K[W+1],q=K[W+2],O=K[W+3];if(G!==O||Y!==F||H!==N||U!==q){let B=Y*F+H*N+U*q+G*O;if(B<0)F=-F,N=-N,q=-q,O=-O,B=-B;let R=1-X;if(B<0.9995){let E=Math.acos(B),P=Math.sin(E);R=Math.sin(R*E)/P,X=Math.sin(X*E)/P,Y=Y*R+F*X,H=H*R+N*X,U=U*R+q*X,G=G*R+O*X}else{Y=Y*R+F*X,H=H*R+N*X,U=U*R+q*X,G=G*R+O*X;let E=1/Math.sqrt(Y*Y+H*H+U*U+G*G);Y*=E,H*=E,U*=E,G*=E}}J[$]=Y,J[$+1]=H,J[$+2]=U,J[$+3]=G}static multiplyQuaternionsFlat(J,$,Q,Z,K,W){let X=Q[Z],Y=Q[Z+1],H=Q[Z+2],U=Q[Z+3],G=K[W],F=K[W+1],N=K[W+2],q=K[W+3];return J[$]=X*q+U*G+Y*N-H*F,J[$+1]=Y*q+U*F+H*G-X*N,J[$+2]=H*q+U*N+X*F-Y*G,J[$+3]=U*q-X*G-Y*F-H*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,$,Q,Z){return this._x=J,this._y=$,this._z=Q,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,$=!0){let{_x:Q,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,H=X(Q/2),U=X(Z/2),G=X(K/2),F=Y(Q/2),N=Y(Z/2),q=Y(K/2);switch(W){case"XYZ":this._x=F*U*G+H*N*q,this._y=H*N*G-F*U*q,this._z=H*U*q+F*N*G,this._w=H*U*G-F*N*q;break;case"YXZ":this._x=F*U*G+H*N*q,this._y=H*N*G-F*U*q,this._z=H*U*q-F*N*G,this._w=H*U*G+F*N*q;break;case"ZXY":this._x=F*U*G-H*N*q,this._y=H*N*G+F*U*q,this._z=H*U*q+F*N*G,this._w=H*U*G-F*N*q;break;case"ZYX":this._x=F*U*G-H*N*q,this._y=H*N*G+F*U*q,this._z=H*U*q-F*N*G,this._w=H*U*G+F*N*q;break;case"YZX":this._x=F*U*G+H*N*q,this._y=H*N*G+F*U*q,this._z=H*U*q-F*N*G,this._w=H*U*G-F*N*q;break;case"XZY":this._x=F*U*G-H*N*q,this._y=H*N*G-F*U*q,this._z=H*U*q+F*N*G,this._w=H*U*G+F*N*q;break;default:r0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if($===!0)this._onChangeCallback();return this}setFromAxisAngle(J,$){let Q=$/2,Z=Math.sin(Q);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix(J){let $=J.elements,Q=$[0],Z=$[4],K=$[8],W=$[1],X=$[5],Y=$[9],H=$[2],U=$[6],G=$[10],F=Q+X+G;if(F>0){let N=0.5/Math.sqrt(F+1);this._w=0.25/N,this._x=(U-Y)*N,this._y=(K-H)*N,this._z=(W-Z)*N}else if(Q>X&&Q>G){let N=2*Math.sqrt(1+Q-X-G);this._w=(U-Y)/N,this._x=0.25*N,this._y=(Z+W)/N,this._z=(K+H)/N}else if(X>G){let N=2*Math.sqrt(1+X-Q-G);this._w=(K-H)/N,this._x=(Z+W)/N,this._y=0.25*N,this._z=(Y+U)/N}else{let N=2*Math.sqrt(1+G-Q-X);this._w=(W-Z)/N,this._x=(K+H)/N,this._y=(Y+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,$){let Q=J.dot($)+1;if(Q<0.00000001)if(Q=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Q;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Q;else this._x=J.y*$.z-J.z*$.y,this._y=J.z*$.x-J.x*$.z,this._z=J.x*$.y-J.y*$.x,this._w=Q;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(O9(this.dot(J),-1,1)))}rotateTowards(J,$){let Q=this.angleTo(J);if(Q===0)return this;let Z=Math.min(1,$/Q);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,$){let{_x:Q,_y:Z,_z:K,_w:W}=J,X=$._x,Y=$._y,H=$._z,U=$._w;return this._x=Q*U+W*X+Z*H-K*Y,this._y=Z*U+W*Y+K*X-Q*H,this._z=K*U+W*H+Q*Y-Z*X,this._w=W*U-Q*X-Z*Y-K*H,this._onChangeCallback(),this}slerp(J,$){let{_x:Q,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)Q=-Q,Z=-Z,K=-K,W=-W,X=-X;let Y=1-$;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);Y=Math.sin(Y*H)/U,$=Math.sin($*H)/U,this._x=this._x*Y+Q*$,this._y=this._y*Y+Z*$,this._z=this._z*Y+K*$,this._w=this._w*Y+W*$,this._onChangeCallback()}else this._x=this._x*Y+Q*$,this._y=this._y*Y+Z*$,this._z=this._z*Y+K*$,this._w=this._w*Y+W*$,this.normalize();return this}slerpQuaternions(J,$,Q){return this.copy(J).slerp($,Q)}random(){let J=2*Math.PI*Math.random(),$=2*Math.PI*Math.random(),Q=Math.random(),Z=Math.sqrt(1-Q),K=Math.sqrt(Q);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin($),K*Math.cos($))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,$=0){return this._x=J[$],this._y=J[$+1],this._z=J[$+2],this._w=J[$+3],this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._w,J}fromBufferAttribute(J,$){return this._x=J.getX($),this._y=J.getY($),this._z=J.getZ($),this._w=J.getW($),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{static{T.prototype.isVector3=!0}constructor(J=0,$=0,Q=0){this.x=J,this.y=$,this.z=Q}set(J,$,Q){if(Q===void 0)Q=this.z;return this.x=J,this.y=$,this.z=Q,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,$){return this.x=J.x*$.x,this.y=J.y*$.y,this.z=J.z*$.z,this}applyEuler(J){return this.applyQuaternion(jY.setFromEuler(J))}applyAxisAngle(J,$){return this.applyQuaternion(jY.setFromAxisAngle(J,$))}applyMatrix3(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements;return this.x=K[0]*$+K[3]*Q+K[6]*Z,this.y=K[1]*$+K[4]*Q+K[7]*Z,this.z=K[2]*$+K[5]*Q+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements,W=1/(K[3]*$+K[7]*Q+K[11]*Z+K[15]);return this.x=(K[0]*$+K[4]*Q+K[8]*Z+K[12])*W,this.y=(K[1]*$+K[5]*Q+K[9]*Z+K[13])*W,this.z=(K[2]*$+K[6]*Q+K[10]*Z+K[14])*W,this}applyQuaternion(J){let $=this.x,Q=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*Z-X*Q),U=2*(X*$-K*Z),G=2*(K*Q-W*$);return this.x=$+Y*H+W*G-X*U,this.y=Q+Y*U+X*H-K*G,this.z=Z+Y*G+K*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements;return this.x=K[0]*$+K[4]*Q+K[8]*Z,this.y=K[1]*$+K[5]*Q+K[9]*Z,this.z=K[2]*$+K[6]*Q+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,$){return this.x=O9(this.x,J.x,$.x),this.y=O9(this.y,J.y,$.y),this.z=O9(this.z,J.z,$.z),this}clampScalar(J,$){return this.x=O9(this.x,J,$),this.y=O9(this.y,J,$),this.z=O9(this.z,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(O9(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,$){let{x:Q,y:Z,z:K}=J,W=$.x,X=$.y,Y=$.z;return this.x=Z*Y-K*X,this.y=K*W-Q*Y,this.z=Q*X-Z*W,this}projectOnVector(J){let $=J.lengthSq();if($===0)return this.set(0,0,0);let Q=J.dot(this)/$;return this.copy(J).multiplyScalar(Q)}projectOnPlane(J){return vK.copy(this).projectOnVector(J),this.sub(vK)}reflect(J){return this.sub(vK.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(O9(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y,Z=this.z-J.z;return $*$+Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,$,Q){let Z=Math.sin($)*J;return this.x=Z*Math.sin(Q),this.y=Math.cos($)*J,this.z=Z*Math.cos(Q),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,$,Q){return this.x=J*Math.sin($),this.y=Q,this.z=J*Math.cos($),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(J){let $=this.setFromMatrixColumn(J,0).length(),Q=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=$,this.y=Q,this.z=Z,this}setFromMatrixColumn(J,$){return this.fromArray(J.elements,$*4)}setFromMatrix3Column(J,$){return this.fromArray(J.elements,$*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,$=Math.random()*2-1,Q=Math.sqrt(1-$*$);return this.x=Q*Math.cos(J),this.y=$,this.z=Q*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var vK=new T,jY=new E9;class H9{static{H9.prototype.isMatrix3=!0}constructor(J,$,Q,Z,K,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,K,W,X,Y,H)}set(J,$,Q,Z,K,W,X,Y,H){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=X,U[3]=$,U[4]=K,U[5]=Y,U[6]=Q,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],this}extractBasis(J,$,Q){return J.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let $=J.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,K=this.elements,W=Q[0],X=Q[3],Y=Q[6],H=Q[1],U=Q[4],G=Q[7],F=Q[2],N=Q[5],q=Q[8],O=Z[0],B=Z[3],R=Z[6],E=Z[1],P=Z[4],k=Z[7],V=Z[2],z=Z[5],w=Z[8];return K[0]=W*O+X*E+Y*V,K[3]=W*B+X*P+Y*z,K[6]=W*R+X*k+Y*w,K[1]=H*O+U*E+G*V,K[4]=H*B+U*P+G*z,K[7]=H*R+U*k+G*w,K[2]=F*O+N*E+q*V,K[5]=F*B+N*P+q*z,K[8]=F*R+N*k+q*w,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[3]*=J,$[6]*=J,$[1]*=J,$[4]*=J,$[7]*=J,$[2]*=J,$[5]*=J,$[8]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8];return $*W*U-$*X*H-Q*K*U+Q*X*Y+Z*K*H-Z*W*Y}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],G=U*W-X*H,F=X*Y-U*K,N=H*K-W*Y,q=$*G+Q*F+Z*N;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/q;return J[0]=G*O,J[1]=(Z*H-U*Q)*O,J[2]=(X*Q-Z*W)*O,J[3]=F*O,J[4]=(U*$-Z*Y)*O,J[5]=(Z*K-X*$)*O,J[6]=N*O,J[7]=(Q*Y-H*$)*O,J[8]=(W*$-Q*K)*O,this}transpose(){let J,$=this.elements;return J=$[1],$[1]=$[3],$[3]=J,J=$[2],$[2]=$[6],$[6]=J,J=$[5],$[5]=$[7],$[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let $=this.elements;return J[0]=$[0],J[1]=$[3],J[2]=$[6],J[3]=$[1],J[4]=$[4],J[5]=$[7],J[6]=$[2],J[7]=$[5],J[8]=$[8],this}setUvTransform(J,$,Q,Z,K,W,X){let Y=Math.cos(K),H=Math.sin(K);return this.set(Q*Y,Q*H,-Q*(Y*W+H*X)+W+J,-Z*H,Z*Y,-Z*(-H*W+Y*X)+X+$,0,0,1),this}scale(J,$){return l6("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fK.makeScale(J,$)),this}rotate(J){return l6("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fK.makeRotation(-J)),this}translate(J,$){return l6("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fK.makeTranslation(J,$)),this}makeTranslation(J,$){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,$,0,0,1);return this}makeRotation(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,Q,$,0,0,0,1),this}makeScale(J,$){return this.set(J,0,0,0,$,0,0,0,1),this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<9;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<9;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var fK=new H9,yY=new H9().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),vY=new H9().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function QG(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=r7(K.r),K.g=r7(K.g),K.b=r7(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=lJ(K.r),K.g=lJ(K.g),K.b=lJ(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return l6("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return l6("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},$=[0.64,0.33,0.3,0.6,0.15,0.06],Q=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:$,whitePoint:Z,transfer:"linear",toXYZ:yY,fromXYZ:vY,luminanceCoefficients:Q,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:$,whitePoint:Z,transfer:"srgb",toXYZ:yY,fromXYZ:vY,luminanceCoefficients:Q,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var R9=QG();function r7(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function lJ(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var PJ;class XX{static getDataURL(J,$="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(PJ===void 0)PJ=dJ("canvas");PJ.width=J.width,PJ.height=J.height;let Z=PJ.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);Q=PJ}return Q.toDataURL($)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let $=dJ("canvas");$.width=J.width,$.height=J.height;let Q=$.getContext("2d");Q.drawImage(J,0,0,J.width,J.height);let Z=Q.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=r7(K[W]/255)*255;return Q.putImageData(Z,0,0),$}else if(J.data){let $=J.data.slice(0);for(let Q=0;Q<$.length;Q++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[Q]=Math.floor(r7($[Q]/255)*255);else $[Q]=r7($[Q]);return{data:$,width:J.width,height:J.height}}else return r0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var ZG=0;class QQ{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ZG++}),this.uuid=Z7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let $=this.data;if(typeof HTMLVideoElement<"u"&&$ instanceof HTMLVideoElement)J.set($.videoWidth,$.videoHeight,0);else if(typeof VideoFrame<"u"&&$ instanceof VideoFrame)J.set($.displayWidth,$.displayHeight,0);else if($!==null)J.set($.width,$.height,$.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Q={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(bK(Z[W].image));else K.push(bK(Z[W]))}else K=bK(Z);Q.url=K}if(!$)J.images[this.uuid]=Q;return Q}}function bK(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return XX.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return r0("Texture: Unable to serialize Texture."),{}}var KG=0,hK=new T;class Z8 extends M7{constructor(J=Z8.DEFAULT_IMAGE,$=Z8.DEFAULT_MAPPING,Q=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,H=Z8.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:KG++}),this.uuid=Z7(),this.name="",this.source=new QQ(J),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=Q,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new R0(0,0),this.repeat=new R0(1,1),this.center=new R0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H9,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hK).x}get height(){return this.source.getSize(hK).y}get depth(){return this.source.getSize(hK).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let $ in J){let Q=J[$];if(Q===void 0){r0(`Texture.setValues(): parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){r0(`Texture.setValues(): property '${$}' does not exist.`);continue}if(Z&&Q&&(Z.isVector2&&Q.isVector2))Z.copy(Q);else if(Z&&Q&&(Z.isVector3&&Q.isVector3))Z.copy(Q);else if(Z&&Q&&(Z.isMatrix3&&Q.isMatrix3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Q={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!$)J.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}Z8.DEFAULT_IMAGE=null;Z8.DEFAULT_MAPPING=300;Z8.DEFAULT_ANISOTROPY=1;class u9{static{u9.prototype.isVector4=!0}constructor(J=0,$=0,Q=0,Z=1){this.x=J,this.y=$,this.z=Q,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,$,Q,Z){return this.x=J,this.y=$,this.z=Q,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this.w=J.w+$.w,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this.w+=J.w*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this.w=J.w-$.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*$+W[4]*Q+W[8]*Z+W[12]*K,this.y=W[1]*$+W[5]*Q+W[9]*Z+W[13]*K,this.z=W[2]*$+W[6]*Q+W[10]*Z+W[14]*K,this.w=W[3]*$+W[7]*Q+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let $=Math.sqrt(1-J.w*J.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/$,this.y=J.y/$,this.z=J.z/$;return this}setAxisAngleFromRotationMatrix(J){let $,Q,Z,K,W=0.01,X=0.1,Y=J.elements,H=Y[0],U=Y[4],G=Y[8],F=Y[1],N=Y[5],q=Y[9],O=Y[2],B=Y[6],R=Y[10];if(Math.abs(U-F)<0.01&&Math.abs(G-O)<0.01&&Math.abs(q-B)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(G+O)<0.1&&Math.abs(q+B)<0.1&&Math.abs(H+N+R-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let P=(H+1)/2,k=(N+1)/2,V=(R+1)/2,z=(U+F)/4,w=(G+O)/4,D=(q+B)/4;if(P>k&&P>V)if(P<0.01)Q=0,Z=0.707106781,K=0.707106781;else Q=Math.sqrt(P),Z=z/Q,K=w/Q;else if(k>V)if(k<0.01)Q=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(k),Q=z/Z,K=D/Z;else if(V<0.01)Q=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(V),Q=w/K,Z=D/K;return this.set(Q,Z,K,$),this}let E=Math.sqrt((B-q)*(B-q)+(G-O)*(G-O)+(F-U)*(F-U));if(Math.abs(E)<0.001)E=1;return this.x=(B-q)/E,this.y=(G-O)/E,this.z=(F-U)/E,this.w=Math.acos((H+N+R-1)/2),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this.w=$[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,$){return this.x=O9(this.x,J.x,$.x),this.y=O9(this.y,J.y,$.y),this.z=O9(this.z,J.z,$.z),this.w=O9(this.w,J.w,$.w),this}clampScalar(J,$){return this.x=O9(this.x,J,$),this.y=O9(this.y,J,$),this.z=O9(this.z,J,$),this.w=O9(this.w,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(O9(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this.w+=(J.w-this.w)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this.w=J.w+($.w-J.w)*Q,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this.w=J[$+3],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J[$+3]=this.w,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this.w=J.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YX extends M7{constructor(J=1,$=1,Q={}){super();Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Q),this.isRenderTarget=!0,this.width=J,this.height=$,this.depth=Q.depth,this.scissor=new u9(0,0,J,$),this.scissorTest=!1,this.viewport=new u9(0,0,J,$),this.textures=[];let Z={width:J,height:$,depth:Q.depth},K=new Z8(Z),W=Q.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions(Q),this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.resolveColorBuffer=Q.resolveColorBuffer,this.resolveDepthBuffer=Q.resolveDepthBuffer,this.resolveStencilBuffer=Q.resolveStencilBuffer,this.storeMultisampledColorBuffer=Q.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Q.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Q.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Q.depthTexture,this.samples=Q.samples,this.multiview=Q.multiview,this.useArrayDepthTexture=Q.useArrayDepthTexture}_setTextureOptions(J={}){let $={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)$.mapping=J.mapping;if(J.wrapS!==void 0)$.wrapS=J.wrapS;if(J.wrapT!==void 0)$.wrapT=J.wrapT;if(J.wrapR!==void 0)$.wrapR=J.wrapR;if(J.magFilter!==void 0)$.magFilter=J.magFilter;if(J.minFilter!==void 0)$.minFilter=J.minFilter;if(J.format!==void 0)$.format=J.format;if(J.type!==void 0)$.type=J.type;if(J.anisotropy!==void 0)$.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)$.colorSpace=J.colorSpace;if(J.flipY!==void 0)$.flipY=J.flipY;if(J.generateMipmaps!==void 0)$.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)$.internalFormat=J.internalFormat;for(let Q=0;Q<this.textures.length;Q++)this.textures[Q].setValues($)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,$,Q=1){if(this.width!==J||this.height!==$||this.depth!==Q){this.width=J,this.height=$,this.depth=Q;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=$,this.textures[Z].image.depth=Q,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,$),this.scissor.set(0,0,J,$)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let $=0,Q=J.textures.length;$<Q;$++){this.textures[$]=J.textures[$].clone(),this.textures[$].isRenderTargetTexture=!0,this.textures[$].renderTarget=this;let Z=Object.assign({},J.textures[$].image);this.textures[$].source=new QQ(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let $=J.depthTexture.clone();$.renderTarget=null,this.depthTexture=$}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class W8 extends YX{constructor(J=1,$=1,Q={}){super(J,$,Q);this.isWebGLRenderTarget=!0}}class xZ extends Z8{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class HX extends Z8{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class $9{static{$9.prototype.isMatrix4=!0}constructor(J,$,Q,Z,K,W,X,Y,H,U,G,F,N,q,O,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,K,W,X,Y,H,U,G,F,N,q,O,B)}set(J,$,Q,Z,K,W,X,Y,H,U,G,F,N,q,O,B){let R=this.elements;return R[0]=J,R[4]=$,R[8]=Q,R[12]=Z,R[1]=K,R[5]=W,R[9]=X,R[13]=Y,R[2]=H,R[6]=U,R[10]=G,R[14]=F,R[3]=N,R[7]=q,R[11]=O,R[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $9().fromArray(this.elements)}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],$[9]=Q[9],$[10]=Q[10],$[11]=Q[11],$[12]=Q[12],$[13]=Q[13],$[14]=Q[14],$[15]=Q[15],this}copyPosition(J){let $=this.elements,Q=J.elements;return $[12]=Q[12],$[13]=Q[13],$[14]=Q[14],this}setFromMatrix3(J){let $=J.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(J,$,Q){if(this.determinantAffine()===0)return J.set(1,0,0),$.set(0,1,0),Q.set(0,0,1),this;return J.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis(J,$,Q){return this.set(J.x,$.x,Q.x,0,J.y,$.y,Q.y,0,J.z,$.z,Q.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let $=this.elements,Q=J.elements,Z=1/IJ.setFromMatrixColumn(J,0).length(),K=1/IJ.setFromMatrixColumn(J,1).length(),W=1/IJ.setFromMatrixColumn(J,2).length();return $[0]=Q[0]*Z,$[1]=Q[1]*Z,$[2]=Q[2]*Z,$[3]=0,$[4]=Q[4]*K,$[5]=Q[5]*K,$[6]=Q[6]*K,$[7]=0,$[8]=Q[8]*W,$[9]=Q[9]*W,$[10]=Q[10]*W,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(J){let $=this.elements,Q=J.x,Z=J.y,K=J.z,W=Math.cos(Q),X=Math.sin(Q),Y=Math.cos(Z),H=Math.sin(Z),U=Math.cos(K),G=Math.sin(K);if(J.order==="XYZ"){let F=W*U,N=W*G,q=X*U,O=X*G;$[0]=Y*U,$[4]=-Y*G,$[8]=H,$[1]=N+q*H,$[5]=F-O*H,$[9]=-X*Y,$[2]=O-F*H,$[6]=q+N*H,$[10]=W*Y}else if(J.order==="YXZ"){let F=Y*U,N=Y*G,q=H*U,O=H*G;$[0]=F+O*X,$[4]=q*X-N,$[8]=W*H,$[1]=W*G,$[5]=W*U,$[9]=-X,$[2]=N*X-q,$[6]=O+F*X,$[10]=W*Y}else if(J.order==="ZXY"){let F=Y*U,N=Y*G,q=H*U,O=H*G;$[0]=F-O*X,$[4]=-W*G,$[8]=q+N*X,$[1]=N+q*X,$[5]=W*U,$[9]=O-F*X,$[2]=-W*H,$[6]=X,$[10]=W*Y}else if(J.order==="ZYX"){let F=W*U,N=W*G,q=X*U,O=X*G;$[0]=Y*U,$[4]=q*H-N,$[8]=F*H+O,$[1]=Y*G,$[5]=O*H+F,$[9]=N*H-q,$[2]=-H,$[6]=X*Y,$[10]=W*Y}else if(J.order==="YZX"){let F=W*Y,N=W*H,q=X*Y,O=X*H;$[0]=Y*U,$[4]=O-F*G,$[8]=q*G+N,$[1]=G,$[5]=W*U,$[9]=-X*U,$[2]=-H*U,$[6]=N*G+q,$[10]=F-O*G}else if(J.order==="XZY"){let F=W*Y,N=W*H,q=X*Y,O=X*H;$[0]=Y*U,$[4]=-G,$[8]=H*U,$[1]=F*G+O,$[5]=W*U,$[9]=N*G-q,$[2]=q*G-N,$[6]=X*U,$[10]=O*G+F}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(J){return this.compose(WG,J,XG)}lookAt(J,$,Q){let Z=this.elements;if(d8.subVectors(J,$),d8.lengthSq()===0)d8.z=1;if(d8.normalize(),Y6.crossVectors(Q,d8),Y6.lengthSq()===0){if(Math.abs(Q.z)===1)d8.x+=0.0001;else d8.z+=0.0001;d8.normalize(),Y6.crossVectors(Q,d8)}return Y6.normalize(),cQ.crossVectors(d8,Y6),Z[0]=Y6.x,Z[4]=cQ.x,Z[8]=d8.x,Z[1]=Y6.y,Z[5]=cQ.y,Z[9]=d8.y,Z[2]=Y6.z,Z[6]=cQ.z,Z[10]=d8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,K=this.elements,W=Q[0],X=Q[4],Y=Q[8],H=Q[12],U=Q[1],G=Q[5],F=Q[9],N=Q[13],q=Q[2],O=Q[6],B=Q[10],R=Q[14],E=Q[3],P=Q[7],k=Q[11],V=Q[15],z=Z[0],w=Z[4],D=Z[8],L=Z[12],M=Z[1],c=Z[5],b=Z[9],l=Z[13],r=Z[2],v=Z[6],y=Z[10],h=Z[14],f=Z[3],o=Z[7],g=Z[11],a=Z[15];return K[0]=W*z+X*M+Y*r+H*f,K[4]=W*w+X*c+Y*v+H*o,K[8]=W*D+X*b+Y*y+H*g,K[12]=W*L+X*l+Y*h+H*a,K[1]=U*z+G*M+F*r+N*f,K[5]=U*w+G*c+F*v+N*o,K[9]=U*D+G*b+F*y+N*g,K[13]=U*L+G*l+F*h+N*a,K[2]=q*z+O*M+B*r+R*f,K[6]=q*w+O*c+B*v+R*o,K[10]=q*D+O*b+B*y+R*g,K[14]=q*L+O*l+B*h+R*a,K[3]=E*z+P*M+k*r+V*f,K[7]=E*w+P*c+k*v+V*o,K[11]=E*D+P*b+k*y+V*g,K[15]=E*L+P*l+k*h+V*a,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[4]*=J,$[8]*=J,$[12]*=J,$[1]*=J,$[5]*=J,$[9]*=J,$[13]*=J,$[2]*=J,$[6]*=J,$[10]*=J,$[14]*=J,$[3]*=J,$[7]*=J,$[11]*=J,$[15]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],U=J[2],G=J[6],F=J[10],N=J[14],q=J[3],O=J[7],B=J[11],R=J[15],E=Y*N-H*F,P=X*N-H*G,k=X*F-Y*G,V=W*N-H*U,z=W*F-Y*U,w=W*G-X*U;return $*(O*E-B*P+R*k)-Q*(q*E-B*V+R*z)+Z*(q*P-O*V+R*w)-K*(q*k-O*z+B*w)}determinantAffine(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],U=J[10];return $*(W*U-X*H)-Q*(K*U-X*Y)+Z*(K*H-W*Y)}transpose(){let J=this.elements,$;return $=J[1],J[1]=J[4],J[4]=$,$=J[2],J[2]=J[8],J[8]=$,$=J[6],J[6]=J[9],J[9]=$,$=J[3],J[3]=J[12],J[12]=$,$=J[7],J[7]=J[13],J[13]=$,$=J[11],J[11]=J[14],J[14]=$,this}setPosition(J,$,Q){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=$,Z[14]=Q;return this}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],G=J[9],F=J[10],N=J[11],q=J[12],O=J[13],B=J[14],R=J[15],E=$*X-Q*W,P=$*Y-Z*W,k=$*H-K*W,V=Q*Y-Z*X,z=Q*H-K*X,w=Z*H-K*Y,D=U*O-G*q,L=U*B-F*q,M=U*R-N*q,c=G*B-F*O,b=G*R-N*O,l=F*R-N*B,r=E*l-P*b+k*c+V*M-z*L+w*D;if(r===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/r;return J[0]=(X*l-Y*b+H*c)*v,J[1]=(Z*b-Q*l-K*c)*v,J[2]=(O*w-B*z+R*V)*v,J[3]=(F*z-G*w-N*V)*v,J[4]=(Y*M-W*l-H*L)*v,J[5]=($*l-Z*M+K*L)*v,J[6]=(B*k-q*w-R*P)*v,J[7]=(U*w-F*k+N*P)*v,J[8]=(W*b-X*M+H*D)*v,J[9]=(Q*M-$*b-K*D)*v,J[10]=(q*z-O*k+R*E)*v,J[11]=(G*k-U*z-N*E)*v,J[12]=(X*L-W*c-Y*D)*v,J[13]=($*c-Q*L+Z*D)*v,J[14]=(O*P-q*V-B*E)*v,J[15]=(U*V-G*P+F*E)*v,this}scale(J){let $=this.elements,Q=J.x,Z=J.y,K=J.z;return $[0]*=Q,$[4]*=Z,$[8]*=K,$[1]*=Q,$[5]*=Z,$[9]*=K,$[2]*=Q,$[6]*=Z,$[10]*=K,$[3]*=Q,$[7]*=Z,$[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,$=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Q=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max($,Q,Z))}makeTranslation(J,$,Q){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,$,0,0,1,Q,0,0,0,1);return this}makeRotationX(J){let $=Math.cos(J),Q=Math.sin(J);return this.set(1,0,0,0,0,$,-Q,0,0,Q,$,0,0,0,0,1),this}makeRotationY(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,0,Q,0,0,1,0,0,-Q,0,$,0,0,0,0,1),this}makeRotationZ(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,0,Q,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,$){let Q=Math.cos($),Z=Math.sin($),K=1-Q,W=J.x,X=J.y,Y=J.z,H=K*W,U=K*X;return this.set(H*W+Q,H*X-Z*Y,H*Y+Z*X,0,H*X+Z*Y,U*X+Q,U*Y-Z*W,0,H*Y-Z*X,U*Y+Z*W,K*Y*Y+Q,0,0,0,0,1),this}makeScale(J,$,Q){return this.set(J,0,0,0,0,$,0,0,0,0,Q,0,0,0,0,1),this}makeShear(J,$,Q,Z,K,W){return this.set(1,Q,K,0,J,1,W,0,$,Z,1,0,0,0,0,1),this}compose(J,$,Q){let Z=this.elements,K=$._x,W=$._y,X=$._z,Y=$._w,H=K+K,U=W+W,G=X+X,F=K*H,N=K*U,q=K*G,O=W*U,B=W*G,R=X*G,E=Y*H,P=Y*U,k=Y*G,V=Q.x,z=Q.y,w=Q.z;return Z[0]=(1-(O+R))*V,Z[1]=(N+k)*V,Z[2]=(q-P)*V,Z[3]=0,Z[4]=(N-k)*z,Z[5]=(1-(F+R))*z,Z[6]=(B+E)*z,Z[7]=0,Z[8]=(q+P)*w,Z[9]=(B-E)*w,Z[10]=(1-(F+O))*w,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,$,Q){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return Q.set(1,1,1),$.identity(),this;let W=IJ.set(Z[0],Z[1],Z[2]).length(),X=IJ.set(Z[4],Z[5],Z[6]).length(),Y=IJ.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;q7.copy(this);let H=1/W,U=1/X,G=1/Y;return q7.elements[0]*=H,q7.elements[1]*=H,q7.elements[2]*=H,q7.elements[4]*=U,q7.elements[5]*=U,q7.elements[6]*=U,q7.elements[8]*=G,q7.elements[9]*=G,q7.elements[10]*=G,$.setFromRotationMatrix(q7),Q.x=W,Q.y=X,Q.z=Y,this}makePerspective(J,$,Q,Z,K,W,X=2000,Y=!1){let H=this.elements,U=2*K/($-J),G=2*K/(Q-Z),F=($+J)/($-J),N=(Q+Z)/(Q-Z),q,O;if(Y)q=K/(W-K),O=W*K/(W-K);else if(X===2000)q=-(W+K)/(W-K),O=-2*W*K/(W-K);else if(X===2001)q=-W/(W-K),O=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=F,H[12]=0,H[1]=0,H[5]=G,H[9]=N,H[13]=0,H[2]=0,H[6]=0,H[10]=q,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,$,Q,Z,K,W,X=2000,Y=!1){let H=this.elements,U=2/($-J),G=2/(Q-Z),F=-($+J)/($-J),N=-(Q+Z)/(Q-Z),q,O;if(Y)q=1/(W-K),O=W/(W-K);else if(X===2000)q=-2/(W-K),O=-(W+K)/(W-K);else if(X===2001)q=-1/(W-K),O=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=F,H[1]=0,H[5]=G,H[9]=0,H[13]=N,H[2]=0,H[6]=0,H[10]=q,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<16;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<16;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J[$+9]=Q[9],J[$+10]=Q[10],J[$+11]=Q[11],J[$+12]=Q[12],J[$+13]=Q[13],J[$+14]=Q[14],J[$+15]=Q[15],J}}var IJ=new T,q7=new $9,WG=new T(0,0,0),XG=new T(1,1,1),Y6=new T,cQ=new T,d8=new T,fY=new $9,bY=new E9;class V7{constructor(J=0,$=0,Q=0,Z=V7.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=$,this._z=Q,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,$,Q,Z=this._order){return this._x=J,this._y=$,this._z=Q,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,$=this._order,Q=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],H=Z[5],U=Z[9],G=Z[2],F=Z[6],N=Z[10];switch($){case"XYZ":if(this._y=Math.asin(O9(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-O9(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,N),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-G,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(O9(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-O9(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(F,N),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(O9(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-G,K);else this._x=0,this._y=Math.atan2(X,N);break;case"XZY":if(this._z=Math.asin(-O9(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,H),this._y=Math.atan2(X,K);else this._x=Math.atan2(-U,N),this._y=0;break;default:r0("Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,Q===!0)this._onChangeCallback();return this}setFromQuaternion(J,$,Q){return fY.makeRotationFromQuaternion(J),this.setFromRotationMatrix(fY,$,Q)}setFromVector3(J,$=this._order){return this.set(J.x,J.y,J.z,$)}reorder(J){return bY.setFromEuler(this),this.setFromQuaternion(bY,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}V7.DEFAULT_ORDER="XYZ";class gZ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var YG=0,hY=new T,zJ=new E9,c7=new $9,nQ=new T,z$=new T,HG=new T,UG=new E9,xY=new T(1,0,0),gY=new T(0,1,0),pY=new T(0,0,1),mY={type:"added"},NG={type:"removed"},AJ={type:"childadded",child:null},xK={type:"childremoved",child:null};class v9 extends M7{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:YG++}),this.uuid=Z7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=v9.DEFAULT_UP.clone();let J=new T,$=new V7,Q=new E9,Z=new T(1,1,1);function K(){Q.setFromEuler($,!1)}function W(){$.setFromQuaternion(Q,void 0,!1)}$._onChange(K),Q._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new $9},normalMatrix:{value:new H9}}),this.matrix=new $9,this.matrixWorld=new $9,this.matrixAutoUpdate=v9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=v9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gZ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,$){this.quaternion.setFromAxisAngle(J,$)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,$){return zJ.setFromAxisAngle(J,$),this.quaternion.multiply(zJ),this}rotateOnWorldAxis(J,$){return zJ.setFromAxisAngle(J,$),this.quaternion.premultiply(zJ),this}rotateX(J){return this.rotateOnAxis(xY,J)}rotateY(J){return this.rotateOnAxis(gY,J)}rotateZ(J){return this.rotateOnAxis(pY,J)}translateOnAxis(J,$){return hY.copy(J).applyQuaternion(this.quaternion),this.position.add(hY.multiplyScalar($)),this}translateX(J){return this.translateOnAxis(xY,J)}translateY(J){return this.translateOnAxis(gY,J)}translateZ(J){return this.translateOnAxis(pY,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(c7.copy(this.matrixWorld).invert())}lookAt(J,$,Q){if(J.isVector3)nQ.copy(J);else nQ.set(J,$,Q);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),z$.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)c7.lookAt(z$,nQ,this.up);else c7.lookAt(nQ,z$,this.up);if(this.quaternion.setFromRotationMatrix(c7),Z)c7.extractRotation(Z.matrixWorld),zJ.setFromRotationMatrix(c7),this.quaternion.premultiply(zJ.invert())}add(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(J===this)return Z9("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(mY),AJ.child=J,this.dispatchEvent(AJ),AJ.child=null;else Z9("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let $=this.children.indexOf(J);if($!==-1)J.parent=null,this.children.splice($,1),J.dispatchEvent(NG),xK.child=J,this.dispatchEvent(xK),xK.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),c7.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),c7.multiply(J.parent.matrixWorld);return J.applyMatrix4(c7),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(mY),AJ.child=J,this.dispatchEvent(AJ),AJ.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,$){if(this[J]===$)return this;for(let Q=0,Z=this.children.length;Q<Z;Q++){let W=this.children[Q].getObjectByProperty(J,$);if(W!==void 0)return W}return}getObjectsByProperty(J,$,Q=[]){if(this[J]===$)Q.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,$,Q);return Q}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(z$,J,HG),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(z$,UG,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set($[8],$[9],$[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverseVisible(J)}traverseAncestors(J){let $=this.parent;if($!==null)J($),$.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:$,y:Q,z:Z}=J,K=this.matrix.elements;K[12]+=$-K[0]*$-K[4]*Q-K[8]*Z,K[13]+=Q-K[1]*$-K[5]*Q-K[9]*Z,K[14]+=Z-K[2]*$-K[6]*Q-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].updateMatrixWorld(J)}updateWorldMatrix(J,$,Q=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Q){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Q=!0}if($===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,Q)}}toJSON(J){let $=J===void 0||typeof J==="string",Q={};if($)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,U=Y.length;H<U;H++){let G=Y[H];K(J.shapes,G)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if($){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),U=W(J.images),G=W(J.shapes),F=W(J.skeletons),N=W(J.animations),q=W(J.nodes);if(X.length>0)Q.geometries=X;if(Y.length>0)Q.materials=Y;if(H.length>0)Q.textures=H;if(U.length>0)Q.images=U;if(G.length>0)Q.shapes=G;if(F.length>0)Q.skeletons=F;if(N.length>0)Q.animations=N;if(q.length>0)Q.nodes=q}return Q.object=Z,Q;function W(X){let Y=[];for(let H in X){let U=X[H];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,$=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),$===!0)for(let Q=0;Q<J.children.length;Q++){let Z=J.children[Q];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}v9.DEFAULT_UP=new T(0,1,0);v9.DEFAULT_MATRIX_AUTO_UPDATE=!0;v9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class S9 extends v9{constructor(){super();this.isGroup=!0,this.type="Group"}}var GG={type:"move"};class ZQ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new S9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new S9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new S9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let $=this._hand;if($)for(let Q of J.hand.values())this._getHandJoint($,Q)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,$,Q){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&$.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let B=$.getJointPose(O,Q),R=this._getHandJoint(H,O);if(B!==null)R.matrix.fromArray(B.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=B.radius;R.visible=B!==null}let U=H.joints["index-finger-tip"],G=H.joints["thumb-tip"],F=U.position.distanceTo(G.position),N=0.02,q=0.005;if(H.inputState.pinching&&F>N+q)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&F<=N-q)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=$.getPose(J.gripSpace,Q),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=$.getPose(J.targetRaySpace,Q),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(GG)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,$){if(J.joints[$.jointName]===void 0){let Q=new S9;Q.matrixAutoUpdate=!1,Q.visible=!1,J.joints[$.jointName]=Q,J.add(Q)}return J.joints[$.jointName]}}var B5={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},H6={h:0,s:0,l:0},sQ={h:0,s:0,l:0};function gK(J,$,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return J+($-J)*6*Q;if(Q<0.5)return $;if(Q<0.6666666666666666)return J+($-J)*6*(0.6666666666666666-Q);return J}class b0{constructor(J,$,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,$,Q)}set(J,$,Q){if($===void 0&&Q===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,$,Q);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,$="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,R9.colorSpaceToWorking(this,$),this}setRGB(J,$,Q,Z=R9.workingColorSpace){return this.r=J,this.g=$,this.b=Q,R9.colorSpaceToWorking(this,Z),this}setHSL(J,$,Q,Z=R9.workingColorSpace){if(J=WX(J,1),$=O9($,0,1),Q=O9(Q,0,1),$===0)this.r=this.g=this.b=Q;else{let K=Q<=0.5?Q*(1+$):Q+$-Q*$,W=2*Q-K;this.r=gK(W,K,J+0.3333333333333333),this.g=gK(W,K,J),this.b=gK(W,K,J-0.3333333333333333)}return R9.colorSpaceToWorking(this,Z),this}setStyle(J,$="srgb"){function Q(K){if(K===void 0)return;if(parseFloat(K)<1)r0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,$);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,$);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,$);break;default:r0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,$);else if(W===6)return this.setHex(parseInt(K,16),$);else r0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,$);return this}setColorName(J,$="srgb"){let Q=B5[J.toLowerCase()];if(Q!==void 0)this.setHex(Q,$);else r0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=r7(J.r),this.g=r7(J.g),this.b=r7(J.b),this}copyLinearToSRGB(J){return this.r=lJ(J.r),this.g=lJ(J.g),this.b=lJ(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return R9.workingToColorSpace(z8.copy(this),J),Math.round(O9(z8.r*255,0,255))*65536+Math.round(O9(z8.g*255,0,255))*256+Math.round(O9(z8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,$=R9.workingColorSpace){R9.workingToColorSpace(z8.copy(this),$);let{r:Q,g:Z,b:K}=z8,W=Math.max(Q,Z,K),X=Math.min(Q,Z,K),Y,H,U=(X+W)/2;if(X===W)Y=0,H=0;else{let G=W-X;switch(H=U<=0.5?G/(W+X):G/(2-W-X),W){case Q:Y=(Z-K)/G+(Z<K?6:0);break;case Z:Y=(K-Q)/G+2;break;case K:Y=(Q-Z)/G+4;break}Y/=6}return J.h=Y,J.s=H,J.l=U,J}getRGB(J,$=R9.workingColorSpace){return R9.workingToColorSpace(z8.copy(this),$),J.r=z8.r,J.g=z8.g,J.b=z8.b,J}getStyle(J="srgb"){R9.workingToColorSpace(z8.copy(this),J);let{r:$,g:Q,b:Z}=z8;if(J!=="srgb")return`color(${J} ${$.toFixed(3)} ${Q.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(Q*255)},${Math.round(Z*255)})`}offsetHSL(J,$,Q){return this.getHSL(H6),this.setHSL(H6.h+J,H6.s+$,H6.l+Q)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,$){return this.r=J.r+$.r,this.g=J.g+$.g,this.b=J.b+$.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,$){return this.r+=(J.r-this.r)*$,this.g+=(J.g-this.g)*$,this.b+=(J.b-this.b)*$,this}lerpColors(J,$,Q){return this.r=J.r+($.r-J.r)*Q,this.g=J.g+($.g-J.g)*Q,this.b=J.b+($.b-J.b)*Q,this}lerpHSL(J,$){this.getHSL(H6),J.getHSL(sQ);let Q=g$(H6.h,sQ.h,$),Z=g$(H6.s,sQ.s,$),K=g$(H6.l,sQ.l,$);return this.setHSL(Q,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let $=this.r,Q=this.g,Z=this.b,K=J.elements;return this.r=K[0]*$+K[3]*Q+K[6]*Z,this.g=K[1]*$+K[4]*Q+K[7]*Z,this.b=K[2]*$+K[5]*Q+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,$=0){return this.r=J[$],this.g=J[$+1],this.b=J[$+2],this}toArray(J=[],$=0){return J[$]=this.r,J[$+1]=this.g,J[$+2]=this.b,J}fromBufferAttribute(J,$){return this.r=J.getX($),this.g=J.getY($),this.b=J.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var z8=new b0;b0.NAMES=B5;class e6{constructor(J,$=0.00025){this.isFogExp2=!0,this.name="",this.color=new b0(J),this.density=$}clone(){return new e6(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $$ extends v9{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new V7,this.environmentIntensity=1,this.environmentRotation=new V7,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,$){if(super.copy(J,$),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let $=super.toJSON(J);if(this.fog!==null)$.object.fog=this.fog.toJSON();return $.object.backgroundBlurriness=this.backgroundBlurriness,$.object.backgroundIntensity=this.backgroundIntensity,$.object.backgroundRotation=this.backgroundRotation.toArray(),$.object.environmentIntensity=this.environmentIntensity,$.object.environmentRotation=this.environmentRotation.toArray(),$}}var O7=new T,n7=new T,pK=new T,s7=new T,_J=new T,TJ=new T,lY=new T,mK=new T,lK=new T,uK=new T,dK=new u9,cK=new u9,nK=new u9;class n8{constructor(J=new T,$=new T,Q=new T){this.a=J,this.b=$,this.c=Q}static getNormal(J,$,Q,Z){Z.subVectors(Q,$),O7.subVectors(J,$),Z.cross(O7);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,$,Q,Z,K){O7.subVectors(Z,$),n7.subVectors(Q,$),pK.subVectors(J,$);let W=O7.dot(O7),X=O7.dot(n7),Y=O7.dot(pK),H=n7.dot(n7),U=n7.dot(pK),G=W*H-X*X;if(G===0)return K.set(0,0,0),null;let F=1/G,N=(H*Y-X*U)*F,q=(W*U-X*Y)*F;return K.set(1-N-q,q,N)}static containsPoint(J,$,Q,Z){if(this.getBarycoord(J,$,Q,Z,s7)===null)return!1;return s7.x>=0&&s7.y>=0&&s7.x+s7.y<=1}static getInterpolation(J,$,Q,Z,K,W,X,Y){if(this.getBarycoord(J,$,Q,Z,s7)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,s7.x),Y.addScaledVector(W,s7.y),Y.addScaledVector(X,s7.z),Y}static getInterpolatedAttribute(J,$,Q,Z,K,W){return dK.setScalar(0),cK.setScalar(0),nK.setScalar(0),dK.fromBufferAttribute(J,$),cK.fromBufferAttribute(J,Q),nK.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(dK,K.x),W.addScaledVector(cK,K.y),W.addScaledVector(nK,K.z),W}static isFrontFacing(J,$,Q,Z){return O7.subVectors(Q,$),n7.subVectors(J,$),O7.cross(n7).dot(Z)<0}set(J,$,Q){return this.a.copy(J),this.b.copy($),this.c.copy(Q),this}setFromPointsAndIndices(J,$,Q,Z){return this.a.copy(J[$]),this.b.copy(J[Q]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,$,Q,Z){return this.a.fromBufferAttribute(J,$),this.b.fromBufferAttribute(J,Q),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return O7.subVectors(this.c,this.b),n7.subVectors(this.a,this.b),O7.cross(n7).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return n8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,$){return n8.getBarycoord(J,this.a,this.b,this.c,$)}getInterpolation(J,$,Q,Z,K){return n8.getInterpolation(J,this.a,this.b,this.c,$,Q,Z,K)}containsPoint(J){return n8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return n8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,$){let Q=this.a,Z=this.b,K=this.c,W,X;_J.subVectors(Z,Q),TJ.subVectors(K,Q),mK.subVectors(J,Q);let Y=_J.dot(mK),H=TJ.dot(mK);if(Y<=0&&H<=0)return $.copy(Q);lK.subVectors(J,Z);let U=_J.dot(lK),G=TJ.dot(lK);if(U>=0&&G<=U)return $.copy(Z);let F=Y*G-U*H;if(F<=0&&Y>=0&&U<=0)return W=Y/(Y-U),$.copy(Q).addScaledVector(_J,W);uK.subVectors(J,K);let N=_J.dot(uK),q=TJ.dot(uK);if(q>=0&&N<=q)return $.copy(K);let O=N*H-Y*q;if(O<=0&&H>=0&&q<=0)return X=H/(H-q),$.copy(Q).addScaledVector(TJ,X);let B=U*q-N*G;if(B<=0&&G-U>=0&&N-q>=0)return lY.subVectors(K,Z),X=(G-U)/(G-U+(N-q)),$.copy(Z).addScaledVector(lY,X);let R=1/(B+O+F);return W=O*R,X=F*R,$.copy(Q).addScaledVector(_J,W).addScaledVector(TJ,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class A8{constructor(J=new T(1/0,1/0,1/0),$=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=$}set(J,$){return this.min.copy(J),this.max.copy($),this}setFromArray(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$+=3)this.expandByPoint(R7.fromArray(J,$));return this}setFromBufferAttribute(J){this.makeEmpty();for(let $=0,Q=J.count;$<Q;$++)this.expandByPoint(R7.fromBufferAttribute(J,$));return this}setFromPoints(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$++)this.expandByPoint(J[$]);return this}setFromCenterAndSize(J,$){let Q=R7.copy($).multiplyScalar(0.5);return this.min.copy(J).sub(Q),this.max.copy(J).add(Q),this}setFromObject(J,$=!1){return this.makeEmpty(),this.expandByObject(J,$)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,$=!1){J.updateWorldMatrix(!1,!1);let Q=J.geometry;if(Q!==void 0){let K=Q.getAttribute("position");if($===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,R7);else R7.fromBufferAttribute(K,W);R7.applyMatrix4(J.matrixWorld),this.expandByPoint(R7)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();iQ.copy(J.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();iQ.copy(Q.boundingBox)}iQ.applyMatrix4(J.matrixWorld),this.union(iQ)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],$);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,$){return $.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,R7),R7.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let $,Q;if(J.normal.x>0)$=J.normal.x*this.min.x,Q=J.normal.x*this.max.x;else $=J.normal.x*this.max.x,Q=J.normal.x*this.min.x;if(J.normal.y>0)$+=J.normal.y*this.min.y,Q+=J.normal.y*this.max.y;else $+=J.normal.y*this.max.y,Q+=J.normal.y*this.min.y;if(J.normal.z>0)$+=J.normal.z*this.min.z,Q+=J.normal.z*this.max.z;else $+=J.normal.z*this.max.z,Q+=J.normal.z*this.min.z;return $<=-J.constant&&Q>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(A$),oQ.subVectors(this.max,A$),wJ.subVectors(J.a,A$),SJ.subVectors(J.b,A$),jJ.subVectors(J.c,A$),U6.subVectors(SJ,wJ),N6.subVectors(jJ,SJ),x6.subVectors(wJ,jJ);let $=[0,-U6.z,U6.y,0,-N6.z,N6.y,0,-x6.z,x6.y,U6.z,0,-U6.x,N6.z,0,-N6.x,x6.z,0,-x6.x,-U6.y,U6.x,0,-N6.y,N6.x,0,-x6.y,x6.x,0];if(!sK($,wJ,SJ,jJ,oQ))return!1;if($=[1,0,0,0,1,0,0,0,1],!sK($,wJ,SJ,jJ,oQ))return!1;return aQ.crossVectors(U6,N6),$=[aQ.x,aQ.y,aQ.z],sK($,wJ,SJ,jJ,oQ)}clampPoint(J,$){return $.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,R7).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(R7).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return i7[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),i7[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),i7[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),i7[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),i7[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),i7[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),i7[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),i7[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(i7),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var i7=[new T,new T,new T,new T,new T,new T,new T,new T],R7=new T,iQ=new A8,wJ=new T,SJ=new T,jJ=new T,U6=new T,N6=new T,x6=new T,A$=new T,oQ=new T,aQ=new T,g6=new T;function sK(J,$,Q,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){g6.fromArray(J,W);let Y=K.x*Math.abs(g6.x)+K.y*Math.abs(g6.y)+K.z*Math.abs(g6.z),H=$.dot(g6),U=Q.dot(g6),G=Z.dot(g6);if(Math.max(-Math.max(H,U,G),Math.min(H,U,G))>Y)return!1}return!0}var U8=new T,rQ=new R0,FG=0;class r9 extends M7{constructor(J,$,Q=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FG++}),this.name="",this.array=J,this.itemSize=$,this.count=J!==void 0?J.length/$:0,this.normalized=Q,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,$,Q){J*=this.itemSize,Q*=$.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=$.array[Q+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let $=0,Q=this.count;$<Q;$++)rQ.fromBufferAttribute(this,$),rQ.applyMatrix3(J),this.setXY($,rQ.x,rQ.y);else if(this.itemSize===3)for(let $=0,Q=this.count;$<Q;$++)U8.fromBufferAttribute(this,$),U8.applyMatrix3(J),this.setXYZ($,U8.x,U8.y,U8.z);return this}applyMatrix4(J){for(let $=0,Q=this.count;$<Q;$++)U8.fromBufferAttribute(this,$),U8.applyMatrix4(J),this.setXYZ($,U8.x,U8.y,U8.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)U8.fromBufferAttribute(this,$),U8.applyNormalMatrix(J),this.setXYZ($,U8.x,U8.y,U8.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)U8.fromBufferAttribute(this,$),U8.transformDirection(J),this.setXYZ($,U8.x,U8.y,U8.z);return this}set(J,$=0){return this.array.set(J,$),this}getComponent(J,$){let Q=this.array[J*this.itemSize+$];if(this.normalized)Q=L7(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=l9(Q,this.array);return this.array[J*this.itemSize+$]=Q,this}getX(J){let $=this.array[J*this.itemSize];if(this.normalized)$=L7($,this.array);return $}setX(J,$){if(this.normalized)$=l9($,this.array);return this.array[J*this.itemSize]=$,this}getY(J){let $=this.array[J*this.itemSize+1];if(this.normalized)$=L7($,this.array);return $}setY(J,$){if(this.normalized)$=l9($,this.array);return this.array[J*this.itemSize+1]=$,this}getZ(J){let $=this.array[J*this.itemSize+2];if(this.normalized)$=L7($,this.array);return $}setZ(J,$){if(this.normalized)$=l9($,this.array);return this.array[J*this.itemSize+2]=$,this}getW(J){let $=this.array[J*this.itemSize+3];if(this.normalized)$=L7($,this.array);return $}setW(J,$){if(this.normalized)$=l9($,this.array);return this.array[J*this.itemSize+3]=$,this}setXY(J,$,Q){if(J*=this.itemSize,this.normalized)$=l9($,this.array),Q=l9(Q,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J*=this.itemSize,this.normalized)$=l9($,this.array),Q=l9(Q,this.array),Z=l9(Z,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this}setXYZW(J,$,Q,Z,K){if(J*=this.itemSize,this.normalized)$=l9($,this.array),Q=l9(Q,this.array),Z=l9(Z,this.array),K=l9(K,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class pZ extends r9{constructor(J,$,Q){super(new Uint16Array(J),$,Q)}}class mZ extends r9{constructor(J,$,Q){super(new Uint32Array(J),$,Q)}}class Y9 extends r9{constructor(J,$,Q){super(new Float32Array(J),$,Q)}}var EG=new A8,_$=new T,iK=new T;class j8{constructor(J=new T,$=-1){this.isSphere=!0,this.center=J,this.radius=$}set(J,$){return this.center.copy(J),this.radius=$,this}setFromPoints(J,$){let Q=this.center;if($!==void 0)Q.copy($);else EG.setFromPoints(J).getCenter(Q);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,Q.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let $=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=$*$}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,$){let Q=this.center.distanceToSquared(J);if($.copy(J),Q>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;_$.subVectors(J,this.center);let $=_$.lengthSq();if($>this.radius*this.radius){let Q=Math.sqrt($),Z=(Q-this.radius)*0.5;this.center.addScaledVector(_$,Z/Q),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else iK.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(_$.copy(J.center).add(iK)),this.expandByPoint(_$.copy(J.center).sub(iK));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var qG=0,$7=new $9,oK=new v9,yJ=new T,c8=new A8,T$=new A8,R8=new T;class b9 extends M7{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qG++}),this.uuid=Z7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((xN(J))?mZ:pZ)(J,1);else this.index=J;return this}setIndirect(J,$=0){return this.indirect=J,this.indirectOffset=$,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,$){return this.attributes[J]=$,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,$,Q=0){this.groups.push({start:J,count:$,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange(J,$){this.drawRange.start=J,this.drawRange.count=$}applyMatrix4(J){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(J),$.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let K=new H9().getNormalMatrix(J);Q.applyNormalMatrix(K),Q.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return $7.makeRotationFromQuaternion(J),this.applyMatrix4($7),this}rotateX(J){return $7.makeRotationX(J),this.applyMatrix4($7),this}rotateY(J){return $7.makeRotationY(J),this.applyMatrix4($7),this}rotateZ(J){return $7.makeRotationZ(J),this.applyMatrix4($7),this}translate(J,$,Q){return $7.makeTranslation(J,$,Q),this.applyMatrix4($7),this}scale(J,$,Q){return $7.makeScale(J,$,Q),this.applyMatrix4($7),this}lookAt(J){return oK.lookAt(J),oK.updateMatrix(),this.applyMatrix4(oK.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yJ).negate(),this.translate(yJ.x,yJ.y,yJ.z),this}setFromPoints(J){let $=this.getAttribute("position");if($===void 0){let Q=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];Q.push(W.x,W.y,W.z||0)}this.setAttribute("position",new Y9(Q,3))}else{let Q=Math.min(J.length,$.count);for(let Z=0;Z<Q;Z++){let K=J[Z];$.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>$.count)r0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");$.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new A8;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){Z9("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),$)for(let Q=0,Z=$.length;Q<Z;Q++){let K=$[Q];if(c8.setFromBufferAttribute(K),this.morphTargetsRelative)R8.addVectors(this.boundingBox.min,c8.min),this.boundingBox.expandByPoint(R8),R8.addVectors(this.boundingBox.max,c8.max),this.boundingBox.expandByPoint(R8);else this.boundingBox.expandByPoint(c8.min),this.boundingBox.expandByPoint(c8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Z9('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new j8;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){Z9("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(J){let Q=this.boundingSphere.center;if(c8.setFromBufferAttribute(J),$)for(let K=0,W=$.length;K<W;K++){let X=$[K];if(T$.setFromBufferAttribute(X),this.morphTargetsRelative)R8.addVectors(c8.min,T$.min),c8.expandByPoint(R8),R8.addVectors(c8.max,T$.max),c8.expandByPoint(R8);else c8.expandByPoint(T$.min),c8.expandByPoint(T$.max)}c8.getCenter(Q);let Z=0;for(let K=0,W=J.count;K<W;K++)R8.fromBufferAttribute(J,K),Z=Math.max(Z,Q.distanceToSquared(R8));if($)for(let K=0,W=$.length;K<W;K++){let X=$[K],Y=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(R8.fromBufferAttribute(X,H),Y)yJ.fromBufferAttribute(J,H),R8.add(yJ);Z=Math.max(Z,Q.distanceToSquared(R8))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))Z9('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,$=this.attributes;if(J===null||$.position===void 0||$.normal===void 0||$.uv===void 0){Z9("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Q,normal:Z,uv:K}=$,W=this.getAttribute("tangent");if(W===void 0||W.count!==Q.count)W=new r9(new Float32Array(4*Q.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let D=0;D<Q.count;D++)X[D]=new T,Y[D]=new T;let H=new T,U=new T,G=new T,F=new R0,N=new R0,q=new R0,O=new T,B=new T;function R(D,L,M){H.fromBufferAttribute(Q,D),U.fromBufferAttribute(Q,L),G.fromBufferAttribute(Q,M),F.fromBufferAttribute(K,D),N.fromBufferAttribute(K,L),q.fromBufferAttribute(K,M),U.sub(H),G.sub(H),N.sub(F),q.sub(F);let c=1/(N.x*q.y-q.x*N.y);if(!isFinite(c))return;O.copy(U).multiplyScalar(q.y).addScaledVector(G,-N.y).multiplyScalar(c),B.copy(G).multiplyScalar(N.x).addScaledVector(U,-q.x).multiplyScalar(c),X[D].add(O),X[L].add(O),X[M].add(O),Y[D].add(B),Y[L].add(B),Y[M].add(B)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let D=0,L=E.length;D<L;++D){let M=E[D],c=M.start,b=M.count;for(let l=c,r=c+b;l<r;l+=3)R(J.getX(l+0),J.getX(l+1),J.getX(l+2))}let P=new T,k=new T,V=new T,z=new T;function w(D){V.fromBufferAttribute(Z,D),z.copy(V);let L=X[D];P.copy(L),P.sub(V.multiplyScalar(V.dot(L))).normalize(),k.crossVectors(z,L);let c=k.dot(Y[D])<0?-1:1;W.setXYZW(D,P.x,P.y,P.z,c)}for(let D=0,L=E.length;D<L;++D){let M=E[D],c=M.start,b=M.count;for(let l=c,r=c+b;l<r;l+=3)w(J.getX(l+0)),w(J.getX(l+1)),w(J.getX(l+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,$=this.getAttribute("position");if($!==void 0){let Q=this.getAttribute("normal");if(Q===void 0||Q.count!==$.count)Q=new r9(new Float32Array($.count*3),3),this.setAttribute("normal",Q);else for(let F=0,N=Q.count;F<N;F++)Q.setXYZ(F,0,0,0);let Z=new T,K=new T,W=new T,X=new T,Y=new T,H=new T,U=new T,G=new T;if(J)for(let F=0,N=J.count;F<N;F+=3){let q=J.getX(F+0),O=J.getX(F+1),B=J.getX(F+2);Z.fromBufferAttribute($,q),K.fromBufferAttribute($,O),W.fromBufferAttribute($,B),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),X.fromBufferAttribute(Q,q),Y.fromBufferAttribute(Q,O),H.fromBufferAttribute(Q,B),X.add(U),Y.add(U),H.add(U),Q.setXYZ(q,X.x,X.y,X.z),Q.setXYZ(O,Y.x,Y.y,Y.z),Q.setXYZ(B,H.x,H.y,H.z)}else for(let F=0,N=$.count;F<N;F+=3)Z.fromBufferAttribute($,F+0),K.fromBufferAttribute($,F+1),W.fromBufferAttribute($,F+2),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),Q.setXYZ(F+0,U.x,U.y,U.z),Q.setXYZ(F+1,U.x,U.y,U.z),Q.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let $=0,Q=J.count;$<Q;$++)R8.fromBufferAttribute(J,$),R8.normalize(),J.setXYZ($,R8.x,R8.y,R8.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:U,normalized:G}=X,F=new H.constructor(Y.length*U),N=0,q=0;for(let O=0,B=Y.length;O<B;O++){if(X.isInterleavedBufferAttribute)N=Y[O]*X.data.stride+X.offset;else N=Y[O]*U;for(let R=0;R<U;R++)F[q++]=H[N++]}return new r9(F,U,G)}if(this.index===null)return r0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new b9,Q=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],H=J(Y,Q);$.setAttribute(X,H)}let K=this.morphAttributes;for(let X in K){let Y=[],H=K[X];for(let U=0,G=H.length;U<G;U++){let F=H[U],N=J(F,Q);Y.push(N)}$.morphAttributes[X]=Y}$.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];$.addGroup(H.start,H.count,H.materialIndex)}return $}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let $=this.index;if($!==null)J.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let Q=this.attributes;for(let Y in Q){let H=Q[Y];J.data.attributes[Y]=H.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],U=[];for(let G=0,F=H.length;G<F;G++){let N=H[G];U.push(N.toJSON(J.data))}if(U.length>0)Z[Y]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=J.name;let Q=J.index;if(Q!==null)this.setIndex(Q.clone());let Z=J.attributes;for(let H in Z){let U=Z[H];this.setAttribute(H,U.clone($))}let K=J.morphAttributes;for(let H in K){let U=[],G=K[H];for(let F=0,N=G.length;F<N;F++)U.push(G[F].clone($));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let G=W[H];this.addGroup(G.start,G.count,G.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Q${constructor(J,$){this.isInterleavedBuffer=!0,this.array=J,this.stride=$,this.count=J!==void 0?J.length/$:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Z7()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,$,Q){J*=this.stride,Q*=$.stride;for(let Z=0,K=this.stride;Z<K;Z++)this.array[J+Z]=$.array[Q+Z];return this}set(J,$=0){return this.array.set(J,$),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Z7();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let $=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Q=new this.constructor($,this.stride);return Q.setUsage(this.usage),Q}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Z7();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let $={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return $.usage=this.usage,$}}var S8=new T;class E6{constructor(J,$,Q,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=$,this.offset=Q,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let $=0,Q=this.data.count;$<Q;$++)S8.fromBufferAttribute(this,$),S8.applyMatrix4(J),this.setXYZ($,S8.x,S8.y,S8.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)S8.fromBufferAttribute(this,$),S8.applyNormalMatrix(J),this.setXYZ($,S8.x,S8.y,S8.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)S8.fromBufferAttribute(this,$),S8.transformDirection(J),this.setXYZ($,S8.x,S8.y,S8.z);return this}getComponent(J,$){let Q=this.array[J*this.data.stride+this.offset+$];if(this.normalized)Q=L7(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=l9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+$]=Q,this}setX(J,$){if(this.normalized)$=l9($,this.array);return this.data.array[J*this.data.stride+this.offset]=$,this}setY(J,$){if(this.normalized)$=l9($,this.array);return this.data.array[J*this.data.stride+this.offset+1]=$,this}setZ(J,$){if(this.normalized)$=l9($,this.array);return this.data.array[J*this.data.stride+this.offset+2]=$,this}setW(J,$){if(this.normalized)$=l9($,this.array);return this.data.array[J*this.data.stride+this.offset+3]=$,this}getX(J){let $=this.data.array[J*this.data.stride+this.offset];if(this.normalized)$=L7($,this.array);return $}getY(J){let $=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)$=L7($,this.array);return $}getZ(J){let $=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)$=L7($,this.array);return $}getW(J){let $=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)$=L7($,this.array);return $}setXY(J,$,Q){if(J=J*this.data.stride+this.offset,this.normalized)$=l9($,this.array),Q=l9(Q,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)$=l9($,this.array),Q=l9(Q,this.array),Z=l9(Z,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this}setXYZW(J,$,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)$=l9($,this.array),Q=l9(Q,this.array),Z=l9(Z,this.array),K=l9(K,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this.data.array[J+3]=K,this}clone(J){if(J===void 0){l$("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)$.push(this.data.array[Z+K])}return new r9(new this.array.constructor($),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new E6(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){l$("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)$.push(this.data.array[Z+K])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:$,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var aK=new T,OG=new T,RG=new H9;class Q7{constructor(J=new T(1,0,0),$=0){this.isPlane=!0,this.normal=J,this.constant=$}set(J,$){return this.normal.copy(J),this.constant=$,this}setComponents(J,$,Q,Z){return this.normal.set(J,$,Q),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,$){return this.normal.copy(J),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(J,$,Q){let Z=aK.subVectors(Q,$).cross(OG.subVectors(J,$)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,$){return $.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,$,Q=!0){let Z=J.delta(aK),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return $.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if(Q===!0&&(W<0||W>1))return null;return $.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let $=this.distanceToPoint(J.start),Q=this.distanceToPoint(J.end);return $<0&&Q>0||Q<0&&$>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,$){let Q=$||RG.getNormalMatrix(J),Z=this.coplanarPoint(aK).applyMatrix4(J),K=this.normal.applyMatrix3(Q).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var LG=0;class f8 extends M7{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:LG++}),this.uuid=Z7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new b0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let $ in J){let Q=J[$];if(Q===void 0){r0(`Material: parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){r0(`Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Q);else if(Z&&Z.isVector2&&(Q&&Q.isVector2)||Z&&Z.isEuler&&(Q&&Q.isEuler)||Z&&Z.isVector3&&(Q&&Q.isVector3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if($)J={textures:{},images:{}};let Q={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,Q.blending=this.blending,Q.side=this.side,Q.shadowSide=this.shadowSide,Q.vertexColors=this.vertexColors,Q.opacity=this.opacity,Q.transparent=this.transparent,Q.blendSrc=this.blendSrc,Q.blendDst=this.blendDst,Q.blendEquation=this.blendEquation,Q.blendSrcAlpha=this.blendSrcAlpha,Q.blendDstAlpha=this.blendDstAlpha,Q.blendEquationAlpha=this.blendEquationAlpha,Q.blendColor=this.blendColor.getHex(),Q.blendAlpha=this.blendAlpha,Q.depthFunc=this.depthFunc,Q.depthTest=this.depthTest,Q.depthWrite=this.depthWrite,Q.colorWrite=this.colorWrite,Q.clipIntersection=this.clipIntersection,Q.clipShadows=this.clipShadows,Q.stencilWriteMask=this.stencilWriteMask,Q.stencilFunc=this.stencilFunc,Q.stencilRef=this.stencilRef,Q.stencilFuncMask=this.stencilFuncMask,Q.stencilFail=this.stencilFail,Q.stencilZFail=this.stencilZFail,Q.stencilZPass=this.stencilZPass,Q.stencilWrite=this.stencilWrite,Q.polygonOffset=this.polygonOffset,Q.polygonOffsetFactor=this.polygonOffsetFactor,Q.polygonOffsetUnits=this.polygonOffsetUnits,Q.dithering=this.dithering,Q.alphaTest=this.alphaTest,Q.alphaHash=this.alphaHash,Q.alphaToCoverage=this.alphaToCoverage,Q.premultipliedAlpha=this.premultipliedAlpha,Q.forceSinglePass=this.forceSinglePass,Q.allowOverride=this.allowOverride,Q.visible=this.visible,Q.toneMapped=this.toneMapped,Q.name=this.name,this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Q.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Q.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Q.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Q.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON(J).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON(J).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON(J).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON(J).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON(J).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapRotation!==void 0)Q.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Q.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)Q.rotation=this.rotation;if(this.depthPacking!==void 0)Q.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Q.linewidth=this.linewidth;if(this.linecap!==void 0)Q.linecap=this.linecap;if(this.linejoin!==void 0)Q.linejoin=this.linejoin;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.wireframe!==void 0)Q.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Q.flatShading=this.flatShading;if(this.fog!==void 0)Q.fog=this.fog;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if($){let K=Z(J.textures),W=Z(J.images);if(K.length>0)Q.textures=K;if(W.length>0)Q.images=W}return Q}fromJSON(J,$){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new b0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Q)=>new Q7().fromJSON(Q));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=$[J.map]||null;if(J.matcap!==void 0)this.matcap=$[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=$[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=$[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=$[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Q=J.normalScale;if(Array.isArray(Q)===!1)Q=[Q,Q];this.normalScale=new R0().fromArray(Q)}if(J.displacementMap!==void 0)this.displacementMap=$[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=$[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=$[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=$[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=$[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=$[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=$[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=$[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=$[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=$[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=$[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=$[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=$[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=$[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new R0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=$[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=$[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=$[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=$[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=$[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=$[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=$[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let $=J.clippingPlanes,Q=null;if($!==null){let Z=$.length;Q=Array(Z);for(let K=0;K!==Z;++K)Q[K]=$[K].clone()}return this.clippingPlanes=Q,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class JJ extends f8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new b0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var vJ,w$=new T,fJ=new T,bJ=new T,hJ=new R0,S$=new R0,D5=new $9,tQ=new T,j$=new T,eQ=new T,uY=new R0,rK=new R0,dY=new R0;class Z$ extends v9{constructor(J=new JJ){super();if(this.isSprite=!0,this.type="Sprite",vJ===void 0){vJ=new b9;let $=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),Q=new Q$($,5);vJ.setIndex([0,1,2,0,2,3]),vJ.setAttribute("position",new E6(Q,3,0,!1)),vJ.setAttribute("uv",new E6(Q,2,3,!1))}this.geometry=vJ,this.material=J,this.center=new R0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,$){if(J.camera===null)Z9('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(fJ.setFromMatrixScale(this.matrixWorld),D5.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),bJ.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)fJ.multiplyScalar(-bJ.z);let Q=this.material.rotation,Z,K;if(Q!==0)K=Math.cos(Q),Z=Math.sin(Q);let W=this.center;JZ(tQ.set(-0.5,-0.5,0),bJ,W,fJ,Z,K),JZ(j$.set(0.5,-0.5,0),bJ,W,fJ,Z,K),JZ(eQ.set(0.5,0.5,0),bJ,W,fJ,Z,K),uY.set(0,0),rK.set(1,0),dY.set(1,1);let X=J.ray.intersectTriangle(tQ,j$,eQ,!1,w$);if(X===null){if(JZ(j$.set(-0.5,0.5,0),bJ,W,fJ,Z,K),rK.set(0,1),X=J.ray.intersectTriangle(tQ,eQ,j$,!1,w$),X===null)return}let Y=J.ray.origin.distanceTo(w$);if(Y<J.near||Y>J.far)return;$.push({distance:Y,point:w$.clone(),uv:n8.getInterpolation(w$,tQ,j$,eQ,uY,rK,dY,new R0),face:null,object:this})}copy(J,$){if(super.copy(J,$),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function JZ(J,$,Q,Z,K,W){if(hJ.subVectors(J,Q).addScalar(0.5).multiply(Z),K!==void 0)S$.x=W*hJ.x-K*hJ.y,S$.y=K*hJ.x+W*hJ.y;else S$.copy(hJ);J.copy($),J.x+=S$.x,J.y+=S$.y,J.applyMatrix4(D5)}var o7=new T,tK=new T,$Z=new T,QZ=new T;class D6{constructor(J=new T,$=new T(0,0,-1)){this.origin=J,this.direction=$}set(J,$){return this.origin.copy(J),this.direction.copy($),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,$){return $.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,o7)),this}closestPointToPoint(J,$){$.subVectors(J,this.origin);let Q=$.dot(this.direction);if(Q<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let $=o7.subVectors(J,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(J);return o7.copy(this.origin).addScaledVector(this.direction,$),o7.distanceToSquared(J)}distanceSqToSegment(J,$,Q,Z){tK.copy(J).add($).multiplyScalar(0.5),$Z.copy($).sub(J).normalize(),QZ.copy(this.origin).sub(tK);let K=J.distanceTo($)*0.5,W=-this.direction.dot($Z),X=QZ.dot(this.direction),Y=-QZ.dot($Z),H=QZ.lengthSq(),U=Math.abs(1-W*W),G,F,N,q;if(U>0)if(G=W*Y-X,F=W*X-Y,q=K*U,G>=0)if(F>=-q)if(F<=q){let O=1/U;G*=O,F*=O,N=G*(G+W*F+2*X)+F*(W*G+F+2*Y)+H}else F=K,G=Math.max(0,-(W*F+X)),N=-G*G+F*(F+2*Y)+H;else F=-K,G=Math.max(0,-(W*F+X)),N=-G*G+F*(F+2*Y)+H;else if(F<=-q)G=Math.max(0,-(-W*K+X)),F=G>0?-K:Math.min(Math.max(-K,-Y),K),N=-G*G+F*(F+2*Y)+H;else if(F<=q)G=0,F=Math.min(Math.max(-K,-Y),K),N=F*(F+2*Y)+H;else G=Math.max(0,-(W*K+X)),F=G>0?K:Math.min(Math.max(-K,-Y),K),N=-G*G+F*(F+2*Y)+H;else F=W>0?-K:K,G=Math.max(0,-(W*F+X)),N=-G*G+F*(F+2*Y)+H;if(Q)Q.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(tK).addScaledVector($Z,F);return N}intersectSphere(J,$){if(J.radius<0)return null;o7.subVectors(J.center,this.origin);let Q=o7.dot(this.direction),Z=o7.dot(o7)-Q*Q,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=Q-W,Y=Q+W;if(Y<0)return null;if(X<0)return this.at(Y,$);return this.at(X,$)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let $=J.normal.dot(this.direction);if($===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot(J.normal)+J.constant)/$;return Q>=0?Q:null}intersectPlane(J,$){let Q=this.distanceToPlane(J);if(Q===null)return null;return this.at(Q,$)}intersectsPlane(J){let $=J.distanceToPoint(this.origin);if($===0)return!0;if(J.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(J,$){let Q,Z,K,W,X,Y,H=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,F=this.origin;if(H>=0)Q=(J.min.x-F.x)*H,Z=(J.max.x-F.x)*H;else Q=(J.max.x-F.x)*H,Z=(J.min.x-F.x)*H;if(U>=0)K=(J.min.y-F.y)*U,W=(J.max.y-F.y)*U;else K=(J.max.y-F.y)*U,W=(J.min.y-F.y)*U;if(Q>W||K>Z)return null;if(K>Q||isNaN(Q))Q=K;if(W<Z||isNaN(Z))Z=W;if(G>=0)X=(J.min.z-F.z)*G,Y=(J.max.z-F.z)*G;else X=(J.max.z-F.z)*G,Y=(J.min.z-F.z)*G;if(Q>Y||X>Z)return null;if(X>Q||Q!==Q)Q=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at(Q>=0?Q:Z,$)}intersectsBox(J){return this.intersectBox(J,o7)!==null}intersectTriangle(J,$,Q,Z,K){let W=this.origin,X=this.direction,Y=X.x,H=X.y,U=X.z,G=J.x-W.x,F=J.y-W.y,N=J.z-W.z,q=$.x-W.x,O=$.y-W.y,B=$.z-W.z,R=Q.x-W.x,E=Q.y-W.y,P=Q.z-W.z,k=Math.abs(Y),V=Math.abs(H),z=Math.abs(U),w,D,L,M,c,b,l,r,v,y,h,f;if(k>=V&&k>=z)if(L=Y,b=G,v=q,f=R,Y>=0)w=H,D=U,M=F,c=N,l=O,r=B,y=E,h=P;else w=U,D=H,M=N,c=F,l=B,r=O,y=P,h=E;else if(V>=z)if(L=H,b=F,v=O,f=E,H>=0)w=U,D=Y,M=N,c=G,l=B,r=q,y=P,h=R;else w=Y,D=U,M=G,c=N,l=q,r=B,y=R,h=P;else if(L=U,b=N,v=B,f=P,U>=0)w=Y,D=H,M=G,c=F,l=q,r=O,y=R,h=E;else w=H,D=Y,M=F,c=G,l=O,r=q,y=E,h=R;if(L===0)return null;let o=w/L,g=D/L,a=1/L,j=M-o*b,i=c-g*b,X0=l-o*v,K0=r-g*v,H0=y-o*f,Z0=h-g*f,S=H0*K0-Z0*X0,x=j*Z0-i*H0,s=X0*i-K0*j;if(Z){if(S<0||x<0||s<0)return null}else if((S<0||x<0||s<0)&&(S>0||x>0||s>0))return null;let Y0=S+x+s;if(Y0===0)return null;let t=a*(S*b+x*v+s*f);if(Y0>0?t<0:t>0)return null;return this.at(t/Y0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class h9 extends f8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new b0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new V7,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var cY=new $9,p6=new D6,ZZ=new j8,nY=new T,KZ=new T,WZ=new T,XZ=new T,eK=new T,YZ=new T,sY=new T,HZ=new T;class A0 extends v9{constructor(J=new b9,$=new h9){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,$){if(super.copy(J,$),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,$){let Q=this.geometry,Z=Q.attributes.position,K=Q.morphAttributes.position,W=Q.morphTargetsRelative;$.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){YZ.set(0,0,0);for(let Y=0,H=K.length;Y<H;Y++){let U=X[Y],G=K[Y];if(U===0)continue;if(eK.fromBufferAttribute(G,J),W)YZ.addScaledVector(eK,U);else YZ.addScaledVector(eK.sub($),U)}$.add(YZ)}return $}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(ZZ.copy(Q.boundingSphere),ZZ.applyMatrix4(K),p6.copy(J.ray).recast(J.near),ZZ.containsPoint(p6.origin)===!1){if(p6.intersectSphere(ZZ,nY)===null)return;if(p6.origin.distanceToSquared(nY)>(J.far-J.near)**2)return}if(cY.copy(K).invert(),p6.copy(J.ray).applyMatrix4(cY),Q.boundingBox!==null){if(p6.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections(J,$,p6)}_computeIntersections(J,$,Q){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,H=K.attributes.uv,U=K.attributes.uv1,G=K.attributes.normal,F=K.groups,N=K.drawRange;if(X!==null)if(Array.isArray(W))for(let q=0,O=F.length;q<O;q++){let B=F[q],R=W[B.materialIndex],E=Math.max(B.start,N.start),P=Math.min(X.count,Math.min(B.start+B.count,N.start+N.count));for(let k=E,V=P;k<V;k+=3){let z=X.getX(k),w=X.getX(k+1),D=X.getX(k+2);if(Z=UZ(this,R,J,Q,H,U,G,z,w,D),Z)Z.faceIndex=Math.floor(k/3),Z.face.materialIndex=B.materialIndex,$.push(Z)}}else{let q=Math.max(0,N.start),O=Math.min(X.count,N.start+N.count);for(let B=q,R=O;B<R;B+=3){let E=X.getX(B),P=X.getX(B+1),k=X.getX(B+2);if(Z=UZ(this,W,J,Q,H,U,G,E,P,k),Z)Z.faceIndex=Math.floor(B/3),$.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let q=0,O=F.length;q<O;q++){let B=F[q],R=W[B.materialIndex],E=Math.max(B.start,N.start),P=Math.min(Y.count,Math.min(B.start+B.count,N.start+N.count));for(let k=E,V=P;k<V;k+=3){let z=k,w=k+1,D=k+2;if(Z=UZ(this,R,J,Q,H,U,G,z,w,D),Z)Z.faceIndex=Math.floor(k/3),Z.face.materialIndex=B.materialIndex,$.push(Z)}}else{let q=Math.max(0,N.start),O=Math.min(Y.count,N.start+N.count);for(let B=q,R=O;B<R;B+=3){let E=B,P=B+1,k=B+2;if(Z=UZ(this,W,J,Q,H,U,G,E,P,k),Z)Z.faceIndex=Math.floor(B/3),$.push(Z)}}}}function VG(J,$,Q,Z,K,W,X,Y){let H;if($.side===1)H=Z.intersectTriangle(X,W,K,!0,Y);else H=Z.intersectTriangle(K,W,X,$.side===0,Y);if(H===null)return null;HZ.copy(Y),HZ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(HZ);if(U<Q.near||U>Q.far)return null;return{distance:U,point:HZ.clone(),object:J}}function UZ(J,$,Q,Z,K,W,X,Y,H,U){J.getVertexPosition(Y,KZ),J.getVertexPosition(H,WZ),J.getVertexPosition(U,XZ);let G=VG(J,$,Q,Z,KZ,WZ,XZ,sY);if(G){let F=new T;if(n8.getBarycoord(sY,KZ,WZ,XZ,F),K)G.uv=n8.getInterpolatedAttribute(K,Y,H,U,F,new R0);if(W)G.uv1=n8.getInterpolatedAttribute(W,Y,H,U,F,new R0);if(X){if(G.normal=n8.getInterpolatedAttribute(X,Y,H,U,F,new T),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let N={a:Y,b:H,c:U,normal:new T,materialIndex:0};n8.getNormal(KZ,WZ,XZ,N.normal),G.face=N,G.barycoord=F}return G}var y$=new u9,iY=new u9,oY=new u9,BG=new u9,aY=new $9,NZ=new T,JW=new j8,rY=new $9,$W=new D6;class lZ extends A0{constructor(J,$){super(J,$);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new $9,this.bindMatrixInverse=new $9,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new A8;this.boundingBox.makeEmpty();let $=J.getAttribute("position");for(let Q=0;Q<$.count;Q++)this.getVertexPosition(Q,NZ),this.boundingBox.expandByPoint(NZ)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new j8;this.boundingSphere.makeEmpty();let $=J.getAttribute("position");for(let Q=0;Q<$.count;Q++)this.getVertexPosition(Q,NZ),this.boundingSphere.expandByPoint(NZ)}copy(J,$){if(super.copy(J,$),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,$){let Q=this.material,Z=this.matrixWorld;if(Q===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(JW.copy(this.boundingSphere),JW.applyMatrix4(Z),J.ray.intersectsSphere(JW)===!1)return;if(rY.copy(Z).invert(),$W.copy(J.ray).applyMatrix4(rY),this.boundingBox!==null){if($W.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,$,$W)}getVertexPosition(J,$){return super.getVertexPosition(J,$),this.applyBoneTransform(J,$),$}bind(J,$){if(this.skeleton=J,$===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),$=this.matrixWorld;this.bindMatrix.copy($),this.bindMatrixInverse.copy($).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new u9,$=this.geometry.attributes.skinWeight;for(let Q=0,Z=$.count;Q<Z;Q++){J.fromBufferAttribute($,Q);let K=1/J.manhattanLength();if(K!==1/0)J.multiplyScalar(K);else J.set(1,0,0,0);$.setXYZW(Q,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else r0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,$){let Q=this.skeleton,Z=this.geometry;if(iY.fromBufferAttribute(Z.attributes.skinIndex,J),oY.fromBufferAttribute(Z.attributes.skinWeight,J),$.isVector4)y$.copy($),$.set(0,0,0,0);else y$.set(...$,1),$.set(0,0,0);y$.applyMatrix4(this.bindMatrix);for(let K=0;K<4;K++){let W=oY.getComponent(K);if(W!==0){let X=iY.getComponent(K);aY.multiplyMatrices(Q.bones[X].matrixWorld,Q.boneInverses[X]),$.addScaledVector(BG.copy(y$).applyMatrix4(aY),W)}}if($.isVector4)$.w=y$.w;return $.applyMatrix4(this.bindMatrixInverse)}}class KQ extends v9{constructor(){super();this.isBone=!0,this.type="Bone"}}class WQ extends Z8{constructor(J=null,$=1,Q=1,Z,K,W,X,Y,H=1003,U=1003,G,F){super(null,W,X,Y,H,U,Z,K,G,F);this.isDataTexture=!0,this.image={data:J,width:$,height:Q},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var tY=new $9,DG=new $9;class XQ{constructor(J=[],$=[]){this.uuid=Z7(),this.bones=J.slice(0),this.boneInverses=$,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,$=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),$.length===0)this.calculateInverses();else if(J.length!==$.length){r0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Q=0,Z=this.bones.length;Q<Z;Q++)this.boneInverses.push(new $9)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,$=this.bones.length;J<$;J++){let Q=new $9;if(this.bones[J])Q.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push(Q)}}pose(){for(let J=0,$=this.bones.length;J<$;J++){let Q=this.bones[J];if(Q)Q.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,$=this.bones.length;J<$;J++){let Q=this.bones[J];if(Q){if(Q.parent&&Q.parent.isBone)Q.matrix.copy(Q.parent.matrixWorld).invert(),Q.matrix.multiply(Q.matrixWorld);else Q.matrix.copy(Q.matrixWorld);Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)}}}update(){let J=this.bones,$=this.boneInverses,Q=this.boneMatrices,Z=this.boneTexture;for(let K=0,W=J.length;K<W;K++){let X=J[K]?J[K].matrixWorld:DG;tY.multiplyMatrices(X,$[K]),tY.toArray(Q,K*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new XQ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let $=new Float32Array(J*J*4);$.set(this.boneMatrices);let Q=new WQ($,J,J,1023,1015);return Q.needsUpdate=!0,this.boneMatrices=$,this.boneTexture=Q,this}getBoneByName(J){for(let $=0,Q=this.bones.length;$<Q;$++){let Z=this.bones[$];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,$){this.uuid=J.uuid;for(let Q=0,Z=J.bones.length;Q<Z;Q++){let K=J.bones[Q],W=$[K];if(W===void 0)r0("Skeleton: No bone found with UUID:",K),W=new KQ;this.bones.push(W),this.boneInverses.push(new $9().fromArray(J.boneInverses[Q]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let $=this.bones,Q=this.boneInverses;for(let Z=0,K=$.length;Z<K;Z++){let W=$[Z];J.bones.push(W.uuid);let X=Q[Z];J.boneInverses.push(X.toArray())}return J}}class q6 extends r9{constructor(J,$,Q,Z=1){super(J,$,Q);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var xJ=new $9,eY=new $9,GZ=[],JH=new A8,kG=new $9,v$=new A0,f$=new j8;class h7 extends A0{constructor(J,$,Q){super(J,$);this.isInstancedMesh=!0,this.instanceMatrix=new q6(new Float32Array(Q*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Q,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<Q;Z++)this.setMatrixAt(Z,kG)}computeBoundingBox(){let J=this.geometry,$=this.count;if(this.boundingBox===null)this.boundingBox=new A8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Q=0;Q<$;Q++)this.getMatrixAt(Q,xJ),JH.copy(J.boundingBox).applyMatrix4(xJ),this.boundingBox.union(JH)}computeBoundingSphere(){let J=this.geometry,$=this.count;if(this.boundingSphere===null)this.boundingSphere=new j8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Q=0;Q<$;Q++)this.getMatrixAt(Q,xJ),f$.copy(J.boundingSphere).applyMatrix4(xJ),this.boundingSphere.union(f$)}copy(J,$){if(super.copy(J,$),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,$){if(this.instanceColor===null)return $.setRGB(1,1,1);else return $.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,$){return $.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,$){let Q=$.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=Q.length+1,W=J*K+1;for(let X=0;X<Q.length;X++)Q[X]=Z[W+X]}raycast(J,$){let Q=this.matrixWorld,Z=this.count;if(v$.geometry=this.geometry,v$.material=this.material,v$.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(f$.copy(this.boundingSphere),f$.applyMatrix4(Q),J.ray.intersectsSphere(f$)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,xJ),eY.multiplyMatrices(Q,xJ),v$.matrixWorld=eY,v$.raycast(J,GZ);for(let W=0,X=GZ.length;W<X;W++){let Y=GZ[W];Y.instanceId=K,Y.object=this,$.push(Y)}GZ.length=0}}setColorAt(J,$){if(this.instanceColor===null)this.instanceColor=new q6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return $.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,$){return $.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,$){let Q=$.morphTargetInfluences,Z=Q.length+1;if(this.morphTexture===null)this.morphTexture=new WQ(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let H=0;H<Q.length;H++)W+=Q[H];let X=this.geometry.morphTargetsRelative?1:1-W,Y=Z*J;return K[Y]=X,K.set(Q,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var m6=new j8,MG=new R0(0.5,0.5),FZ=new T;class $J{constructor(J=new Q7,$=new Q7,Q=new Q7,Z=new Q7,K=new Q7,W=new Q7){this.planes=[J,$,Q,Z,K,W]}set(J,$,Q,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy($),X[2].copy(Q),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let $=this.planes;for(let Q=0;Q<6;Q++)$[Q].copy(J.planes[Q]);return this}setFromProjectionMatrix(J,$=2000,Q=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],H=K[3],U=K[4],G=K[5],F=K[6],N=K[7],q=K[8],O=K[9],B=K[10],R=K[11],E=K[12],P=K[13],k=K[14],V=K[15];if(Z[0].setComponents(H-W,N-U,R-q,V-E).normalize(),Z[1].setComponents(H+W,N+U,R+q,V+E).normalize(),Z[2].setComponents(H+X,N+G,R+O,V+P).normalize(),Z[3].setComponents(H-X,N-G,R-O,V-P).normalize(),Q)Z[4].setComponents(Y,F,B,k).normalize(),Z[5].setComponents(H-Y,N-F,R-B,V-k).normalize();else if(Z[4].setComponents(H-Y,N-F,R-B,V-k).normalize(),$===2000)Z[5].setComponents(H+Y,N+F,R+B,V+k).normalize();else if($===2001)Z[5].setComponents(Y,F,B,k).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();m6.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let $=J.geometry;if($.boundingSphere===null)$.computeBoundingSphere();m6.copy($.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(m6)}intersectsSprite(J){m6.center.set(0,0,0);let $=MG.distanceTo(J.center);return m6.radius=0.7071067811865476+$,m6.applyMatrix4(J.matrixWorld),this.intersectsSphere(m6)}intersectsSphere(J){let $=this.planes,Q=J.center,Z=-J.radius;for(let K=0;K<6;K++)if($[K].distanceToPoint(Q)<Z)return!1;return!0}intersectsBox(J){let $=this.planes;for(let Q=0;Q<6;Q++){let Z=$[Q];if(FZ.x=Z.normal.x>0?J.max.x:J.min.x,FZ.y=Z.normal.y>0?J.max.y:J.min.y,FZ.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(FZ)<0)return!1}return!0}containsPoint(J){let $=this.planes;for(let Q=0;Q<6;Q++)if($[Q].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class YQ extends f8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new b0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var MZ=new T,CZ=new T,$H=new $9,b$=new D6,EZ=new j8,QW=new T,QH=new T;class K$ extends v9{constructor(J=new b9,$=new YQ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[0];for(let Z=1,K=$.count;Z<K;Z++)MZ.fromBufferAttribute($,Z-1),CZ.fromBufferAttribute($,Z),Q[Z]=Q[Z-1],Q[Z]+=MZ.distanceTo(CZ);J.setAttribute("lineDistance",new Y9(Q,1))}else r0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,K=J.params.Line.threshold,W=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(EZ.copy(Q.boundingSphere),EZ.applyMatrix4(Z),EZ.radius+=K,J.ray.intersectsSphere(EZ)===!1)return;$H.copy(Z).invert(),b$.copy(J.ray).applyMatrix4($H);let X=K/((this.scale.x+this.scale.y+this.scale.z)/3),Y=X*X,H=this.isLineSegments?2:1,U=Q.index,F=Q.attributes.position;if(U!==null){let N=Math.max(0,W.start),q=Math.min(U.count,W.start+W.count);for(let O=N,B=q-1;O<B;O+=H){let R=U.getX(O),E=U.getX(O+1),P=qZ(this,J,b$,Y,R,E,O);if(P)$.push(P)}if(this.isLineLoop){let O=U.getX(q-1),B=U.getX(N),R=qZ(this,J,b$,Y,O,B,q-1);if(R)$.push(R)}}else{let N=Math.max(0,W.start),q=Math.min(F.count,W.start+W.count);for(let O=N,B=q-1;O<B;O+=H){let R=qZ(this,J,b$,Y,O,O+1,O);if(R)$.push(R)}if(this.isLineLoop){let O=qZ(this,J,b$,Y,q-1,N,q-1);if(O)$.push(O)}}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}}function qZ(J,$,Q,Z,K,W,X){let Y=J.geometry.attributes.position;if(MZ.fromBufferAttribute(Y,K),CZ.fromBufferAttribute(Y,W),Q.distanceSqToSegment(MZ,CZ,QW,QH)>Z)return;QW.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(QW);if(U<$.near||U>$.far)return;return{distance:U,point:QH.clone().applyMatrix4(J.matrixWorld),index:X,face:null,faceIndex:null,barycoord:null,object:J}}var ZH=new T,KH=new T;class uZ extends K${constructor(J,$){super(J,$);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[];for(let Z=0,K=$.count;Z<K;Z+=2)ZH.fromBufferAttribute($,Z),KH.fromBufferAttribute($,Z+1),Q[Z]=Z===0?0:Q[Z-1],Q[Z+1]=Q[Z]+ZH.distanceTo(KH);J.setAttribute("lineDistance",new Y9(Q,1))}else r0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dZ extends K${constructor(J,$){super(J,$);this.isLineLoop=!0,this.type="LineLoop"}}class QJ extends f8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new b0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var WH=new $9,HW=new D6,OZ=new j8,RZ=new T;class W$ extends v9{constructor(J=new b9,$=new QJ){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,K=J.params.Points.threshold,W=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(OZ.copy(Q.boundingSphere),OZ.applyMatrix4(Z),OZ.radius+=K,J.ray.intersectsSphere(OZ)===!1)return;WH.copy(Z).invert(),HW.copy(J.ray).applyMatrix4(WH);let X=K/((this.scale.x+this.scale.y+this.scale.z)/3),Y=X*X,H=Q.index,G=Q.attributes.position;if(H!==null){let F=Math.max(0,W.start),N=Math.min(H.count,W.start+W.count);for(let q=F,O=N;q<O;q++){let B=H.getX(q);RZ.fromBufferAttribute(G,B),XH(RZ,B,Y,Z,J,$,this)}}else{let F=Math.max(0,W.start),N=Math.min(G.count,W.start+W.count);for(let q=F,O=N;q<O;q++)RZ.fromBufferAttribute(G,q),XH(RZ,q,Y,Z,J,$,this)}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}}function XH(J,$,Q,Z,K,W,X){let Y=HW.distanceSqToPoint(J);if(Y<Q){let H=new T;HW.closestPointToPoint(J,H),H.applyMatrix4(Z);let U=K.ray.origin.distanceTo(H);if(U<K.near||U>K.far)return;W.push({distance:U,distanceToRay:Math.sqrt(Y),point:H,index:$,face:null,faceIndex:null,barycoord:null,object:X})}}class cZ extends Z8{constructor(J=[],$=301,Q,Z,K,W,X,Y,H,U){super(J,$,Q,Z,K,W,X,Y,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class i8 extends Z8{constructor(J,$,Q,Z,K,W,X,Y,H){super(J,$,Q,Z,K,W,X,Y,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class ZJ extends Z8{constructor(J,$,Q=1014,Z,K,W,X=1003,Y=1003,H,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:$,depth:G};super(F,Z,K,W,X,Y,U,Q,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new QQ(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let $=super.toJSON(J);return $.compareFunction=this.compareFunction,$}}class UX extends ZJ{constructor(J,$=1014,Q=301,Z,K,W=1003,X=1003,Y,H=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,$,Q,Z,K,W,X,Y,H);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class nZ extends Z8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class j9 extends b9{constructor(J=1,$=1,Q=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:$,depth:Q,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],H=[],U=[],G=[],F=0,N=0;q("z","y","x",-1,-1,Q,$,J,W,K,0),q("z","y","x",1,-1,Q,$,-J,W,K,1),q("x","z","y",1,1,J,Q,$,Z,W,2),q("x","z","y",1,-1,J,Q,-$,Z,W,3),q("x","y","z",1,-1,J,$,Q,Z,K,4),q("x","y","z",-1,-1,J,$,-Q,Z,K,5),this.setIndex(Y),this.setAttribute("position",new Y9(H,3)),this.setAttribute("normal",new Y9(U,3)),this.setAttribute("uv",new Y9(G,2));function q(O,B,R,E,P,k,V,z,w,D,L){let M=k/w,c=V/D,b=k/2,l=V/2,r=z/2,v=w+1,y=D+1,h=0,f=0,o=new T;for(let g=0;g<y;g++){let a=g*c-l;for(let j=0;j<v;j++){let i=j*M-b;o[O]=i*E,o[B]=a*P,o[R]=r,H.push(o.x,o.y,o.z),o[O]=0,o[B]=0,o[R]=z>0?1:-1,U.push(o.x,o.y,o.z),G.push(j/w),G.push(1-g/D),h+=1}}for(let g=0;g<D;g++)for(let a=0;a<w;a++){let j=F+a+v*g,i=F+a+v*(g+1),X0=F+(a+1)+v*(g+1),K0=F+(a+1)+v*g;Y.push(j,i,K0),Y.push(i,X0,K0),f+=6}X.addGroup(N,f,L),N+=f,F+=h}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new j9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class e7 extends b9{constructor(J=1,$=32,Q=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:$,thetaStart:Q,thetaLength:Z},$=Math.max(3,$);let K=[],W=[],X=[],Y=[],H=new T,U=new R0;W.push(0,0,0),X.push(0,0,1),Y.push(0.5,0.5);for(let G=0,F=3;G<=$;G++,F+=3){let N=Q+G/$*Z;H.x=J*Math.cos(N),H.y=J*Math.sin(N),W.push(H.x,H.y,H.z),X.push(0,0,1),U.x=(W[F]/J+1)/2,U.y=(W[F+1]/J+1)/2,Y.push(U.x,U.y)}for(let G=1;G<=$;G++)K.push(G,G+1,0);this.setIndex(K),this.setAttribute("position",new Y9(W,3)),this.setAttribute("normal",new Y9(X,3)),this.setAttribute("uv",new Y9(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new e7(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class C9 extends b9{constructor(J=1,$=1,Q=1,Z=32,K=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:$,height:Q,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:X,thetaLength:Y};let H=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],G=[],F=[],N=[],q=0,O=[],B=Q/2,R=0;if(E(),W===!1){if(J>0)P(!0);if($>0)P(!1)}this.setIndex(U),this.setAttribute("position",new Y9(G,3)),this.setAttribute("normal",new Y9(F,3)),this.setAttribute("uv",new Y9(N,2));function E(){let k=new T,V=new T,z=0,w=($-J)/Q;for(let D=0;D<=K;D++){let L=[],M=D/K,c=M*($-J)+J;for(let b=0;b<=Z;b++){let l=b/Z,r=l*Y+X,v=Math.sin(r),y=Math.cos(r);V.x=c*v,V.y=-M*Q+B,V.z=c*y,G.push(V.x,V.y,V.z),k.set(v,w,y).normalize(),F.push(k.x,k.y,k.z),N.push(l,1-M),L.push(q++)}O.push(L)}for(let D=0;D<Z;D++)for(let L=0;L<K;L++){let M=O[L][D],c=O[L+1][D],b=O[L+1][D+1],l=O[L][D+1];if(J>0||L!==0)U.push(M,c,l),z+=3;if($>0||L!==K-1)U.push(c,b,l),z+=3}H.addGroup(R,z,0),R+=z}function P(k){let V=q,z=new R0,w=new T,D=0,L=k===!0?J:$,M=k===!0?1:-1;for(let b=1;b<=Z;b++)G.push(0,B*M,0),F.push(0,M,0),N.push(0.5,0.5),q++;let c=q;for(let b=0;b<=Z;b++){let r=b/Z*Y+X,v=Math.cos(r),y=Math.sin(r);w.x=L*y,w.y=B*M,w.z=L*v,G.push(w.x,w.y,w.z),F.push(0,M,0),z.x=v*0.5+0.5,z.y=y*0.5*M+0.5,N.push(z.x,z.y),q++}for(let b=0;b<Z;b++){let l=V+b,r=c+b;if(k===!0)U.push(r,r+1,l);else U.push(r+1,r,l);D+=3}H.addGroup(R,D,k===!0?1:2),R+=D}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new C9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class KJ extends C9{constructor(J=1,$=1,Q=32,Z=1,K=!1,W=0,X=Math.PI*2){super(0,J,$,Q,Z,K,W,X);this.type="ConeGeometry",this.parameters={radius:J,height:$,radialSegments:Q,heightSegments:Z,openEnded:K,thetaStart:W,thetaLength:X}}static fromJSON(J){return new KJ(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class sZ extends b9{constructor(J=[],$=[],Q=1,Z=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:$,radius:Q,detail:Z};let K=[],W=[];if(X(Z),H(Q),U(),this.setAttribute("position",new Y9(K,3)),this.setAttribute("normal",new Y9(K.slice(),3)),this.setAttribute("uv",new Y9(W,2)),Z===0)this.computeVertexNormals();else this.normalizeNormals();function X(E){let P=new T,k=new T,V=new T;for(let z=0;z<$.length;z+=3)N($[z+0],P),N($[z+1],k),N($[z+2],V),Y(P,k,V,E)}function Y(E,P,k,V){let z=V+1,w=[];for(let D=0;D<=z;D++){w[D]=[];let L=E.clone().lerp(k,D/z),M=P.clone().lerp(k,D/z),c=z-D;for(let b=0;b<=c;b++)if(b===0&&D===z)w[D][b]=L;else w[D][b]=L.clone().lerp(M,b/c)}for(let D=0;D<z;D++)for(let L=0;L<2*(z-D)-1;L++){let M=Math.floor(L/2);if(L%2===0)F(w[D][M+1]),F(w[D+1][M]),F(w[D][M]);else F(w[D][M+1]),F(w[D+1][M+1]),F(w[D+1][M])}}function H(E){let P=new T;for(let k=0;k<K.length;k+=3)P.x=K[k+0],P.y=K[k+1],P.z=K[k+2],P.normalize().multiplyScalar(E),K[k+0]=P.x,K[k+1]=P.y,K[k+2]=P.z}function U(){let E=new T;for(let P=0;P<K.length;P+=3){E.x=K[P+0],E.y=K[P+1],E.z=K[P+2];let k=B(E)/2/Math.PI+0.5,V=R(E)/Math.PI+0.5;W.push(k,1-V)}q(),G()}function G(){for(let E=0;E<W.length;E+=6){let P=W[E+0],k=W[E+2],V=W[E+4],z=Math.max(P,k,V),w=Math.min(P,k,V);if(z>0.9&&w<0.1){if(P<0.2)W[E+0]+=1;if(k<0.2)W[E+2]+=1;if(V<0.2)W[E+4]+=1}}}function F(E){K.push(E.x,E.y,E.z)}function N(E,P){let k=E*3;P.x=J[k+0],P.y=J[k+1],P.z=J[k+2]}function q(){let E=new T,P=new T,k=new T,V=new T,z=new R0,w=new R0,D=new R0;for(let L=0,M=0;L<K.length;L+=9,M+=6){E.set(K[L+0],K[L+1],K[L+2]),P.set(K[L+3],K[L+4],K[L+5]),k.set(K[L+6],K[L+7],K[L+8]),z.set(W[M+0],W[M+1]),w.set(W[M+2],W[M+3]),D.set(W[M+4],W[M+5]),V.copy(E).add(P).add(k).divideScalar(3);let c=B(V);O(z,M+0,E,c),O(w,M+2,P,c),O(D,M+4,k,c)}}function O(E,P,k,V){if(V<0&&E.x===1)W[P]=E.x-1;if(k.x===0&&k.z===0)W[P]=V/2/Math.PI+0.5}function B(E){return Math.atan2(E.z,-E.x)}function R(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new sZ(J.vertices,J.indices,J.radius,J.detail)}}class W7{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){r0("Curve: .getPoint() not implemented.")}getPointAt(J,$){let Q=this.getUtoTmapping(J);return this.getPoint(Q,$)}getPoints(J=5){let $=[];for(let Q=0;Q<=J;Q++)$.push(this.getPoint(Q/J));return $}getSpacedPoints(J=5){let $=[];for(let Q=0;Q<=J;Q++)$.push(this.getPointAt(Q/J));return $}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let $=[],Q,Z=this.getPoint(0),K=0;$.push(0);for(let W=1;W<=J;W++)Q=this.getPoint(W/J),K+=Q.distanceTo(Z),$.push(K),Z=Q;return this.cacheArcLengths=$,$}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,$=null){let Q=this.getLengths(),Z=0,K=Q.length,W;if($)W=$;else W=J*Q[K-1];let X=0,Y=K-1,H;while(X<=Y)if(Z=Math.floor(X+(Y-X)/2),H=Q[Z]-W,H<0)X=Z+1;else if(H>0)Y=Z-1;else{Y=Z;break}if(Z=Y,Q[Z]===W)return Z/(K-1);let U=Q[Z],F=Q[Z+1]-U,N=(W-U)/F;return(Z+N)/(K-1)}getTangent(J,$){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),X=this.getPoint(K),Y=$||(W.isVector2?new R0:new T);return Y.copy(X).sub(W).normalize(),Y}getTangentAt(J,$){let Q=this.getUtoTmapping(J);return this.getTangent(Q,$)}computeFrenetFrames(J,$=!1){let Q=new T,Z=[],K=[],W=[],X=new T,Y=new $9;for(let N=0;N<=J;N++){let q=N/J;Z[N]=this.getTangentAt(q,new T)}K[0]=new T,W[0]=new T;let H=Number.MAX_VALUE,U=Math.abs(Z[0].x),G=Math.abs(Z[0].y),F=Math.abs(Z[0].z);if(U<=H)H=U,Q.set(1,0,0);if(G<=H)H=G,Q.set(0,1,0);if(F<=H)Q.set(0,0,1);X.crossVectors(Z[0],Q).normalize(),K[0].crossVectors(Z[0],X),W[0].crossVectors(Z[0],K[0]);for(let N=1;N<=J;N++){if(K[N]=K[N-1].clone(),W[N]=W[N-1].clone(),X.crossVectors(Z[N-1],Z[N]),X.length()>Number.EPSILON){X.normalize();let q=Math.acos(O9(Z[N-1].dot(Z[N]),-1,1));K[N].applyMatrix4(Y.makeRotationAxis(X,q))}W[N].crossVectors(Z[N],K[N])}if($===!0){let N=Math.acos(O9(K[0].dot(K[J]),-1,1));if(N/=J,Z[0].dot(X.crossVectors(K[0],K[J]))>0)N=-N;for(let q=1;q<=J;q++)K[q].applyMatrix4(Y.makeRotationAxis(Z[q],N*q)),W[q].crossVectors(Z[q],K[q])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class HQ extends W7{constructor(J=0,$=0,Q=1,Z=1,K=0,W=Math.PI*2,X=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=$,this.xRadius=Q,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=X,this.aRotation=Y}getPoint(J,$=new R0){let Q=$,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let X=this.aStartAngle+J*K,Y=this.aX+this.xRadius*Math.cos(X),H=this.aY+this.yRadius*Math.sin(X);if(this.aRotation!==0){let U=Math.cos(this.aRotation),G=Math.sin(this.aRotation),F=Y-this.aX,N=H-this.aY;Y=F*U-N*G+this.aX,H=F*G+N*U+this.aY}return Q.set(Y,H)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class NX extends HQ{constructor(J,$,Q,Z,K,W){super(J,$,Q,Q,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function GX(){let J=0,$=0,Q=0,Z=0;function K(W,X,Y,H){J=W,$=Y,Q=-3*W+3*X-2*Y-H,Z=2*W-2*X+Y+H}return{initCatmullRom:function(W,X,Y,H,U){K(X,Y,U*(Y-W),U*(H-X))},initNonuniformCatmullRom:function(W,X,Y,H,U,G,F){let N=(X-W)/U-(Y-W)/(U+G)+(Y-X)/G,q=(Y-X)/G-(H-X)/(G+F)+(H-Y)/F;N*=G,q*=G,K(X,Y,N,q)},calc:function(W){let X=W*W,Y=X*W;return J+$*W+Q*X+Z*Y}}}var YH=new T,HH=new T,ZW=new GX,KW=new GX,WW=new GX;class J6 extends W7{constructor(J=[],$=!1,Q="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=$,this.curveType=Q,this.tension=Z}getPoint(J,$=new T){let Q=$,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,X=Math.floor(W),Y=W-X;if(this.closed)X+=X>0?0:(Math.floor(Math.abs(X)/K)+1)*K;else if(Y===0&&X===K-1)X=K-2,Y=1;let H,U;if(this.closed||X>0)H=Z[(X-1)%K];else HH.subVectors(Z[0],Z[1]).add(Z[0]),H=HH;let G=Z[X%K],F=Z[(X+1)%K];if(this.closed||X+2<K)U=Z[(X+2)%K];else YH.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),U=YH;if(this.curveType==="centripetal"||this.curveType==="chordal"){let N=this.curveType==="chordal"?0.5:0.25,q=Math.pow(H.distanceToSquared(G),N),O=Math.pow(G.distanceToSquared(F),N),B=Math.pow(F.distanceToSquared(U),N);if(O<0.0001)O=1;if(q<0.0001)q=O;if(B<0.0001)B=O;ZW.initNonuniformCatmullRom(H.x,G.x,F.x,U.x,q,O,B),KW.initNonuniformCatmullRom(H.y,G.y,F.y,U.y,q,O,B),WW.initNonuniformCatmullRom(H.z,G.z,F.z,U.z,q,O,B)}else if(this.curveType==="catmullrom")ZW.initCatmullRom(H.x,G.x,F.x,U.x,this.tension),KW.initCatmullRom(H.y,G.y,F.y,U.y,this.tension),WW.initCatmullRom(H.z,G.z,F.z,U.z,this.tension);return Q.set(ZW.calc(Y),KW.calc(Y),WW.calc(Y)),Q}copy(J){super.copy(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let $=0,Q=this.points.length;$<Q;$++){let Z=this.points[$];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(new T().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function UH(J,$,Q,Z,K){let W=(Z-$)*0.5,X=(K-Q)*0.5,Y=J*J,H=J*Y;return(2*Q-2*Z+W+X)*H+(-3*Q+3*Z-2*W-X)*Y+W*J+Q}function CG(J,$){let Q=1-J;return Q*Q*$}function PG(J,$){return 2*(1-J)*J*$}function IG(J,$){return J*J*$}function p$(J,$,Q,Z){return CG(J,$)+PG(J,Q)+IG(J,Z)}function zG(J,$){let Q=1-J;return Q*Q*Q*$}function AG(J,$){let Q=1-J;return 3*Q*Q*J*$}function _G(J,$){return 3*(1-J)*J*J*$}function TG(J,$){return J*J*J*$}function m$(J,$,Q,Z,K){return zG(J,$)+AG(J,Q)+_G(J,Z)+TG(J,K)}class iZ extends W7{constructor(J=new R0,$=new R0,Q=new R0,Z=new R0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=$,this.v2=Q,this.v3=Z}getPoint(J,$=new R0){let Q=$,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return Q.set(m$(J,Z.x,K.x,W.x,X.x),m$(J,Z.y,K.y,W.y,X.y)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class FX extends W7{constructor(J=new T,$=new T,Q=new T,Z=new T){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=$,this.v2=Q,this.v3=Z}getPoint(J,$=new T){let Q=$,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return Q.set(m$(J,Z.x,K.x,W.x,X.x),m$(J,Z.y,K.y,W.y,X.y),m$(J,Z.z,K.z,W.z,X.z)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class oZ extends W7{constructor(J=new R0,$=new R0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=$}getPoint(J,$=new R0){let Q=$;if(J===1)Q.copy(this.v2);else Q.copy(this.v2).sub(this.v1),Q.multiplyScalar(J).add(this.v1);return Q}getPointAt(J,$){return this.getPoint(J,$)}getTangent(J,$=new R0){return $.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,$){return this.getTangent(J,$)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class EX extends W7{constructor(J=new T,$=new T){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=$}getPoint(J,$=new T){let Q=$;if(J===1)Q.copy(this.v2);else Q.copy(this.v2).sub(this.v1),Q.multiplyScalar(J).add(this.v1);return Q}getPointAt(J,$){return this.getPoint(J,$)}getTangent(J,$=new T){return $.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,$){return this.getTangent(J,$)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class aZ extends W7{constructor(J=new R0,$=new R0,Q=new R0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=$,this.v2=Q}getPoint(J,$=new R0){let Q=$,Z=this.v0,K=this.v1,W=this.v2;return Q.set(p$(J,Z.x,K.x,W.x),p$(J,Z.y,K.y,W.y)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class o8 extends W7{constructor(J=new T,$=new T,Q=new T){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=$,this.v2=Q}getPoint(J,$=new T){let Q=$,Z=this.v0,K=this.v1,W=this.v2;return Q.set(p$(J,Z.x,K.x,W.x),p$(J,Z.y,K.y,W.y),p$(J,Z.z,K.z,W.z)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class rZ extends W7{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,$=new R0){let Q=$,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),X=K-W,Y=Z[W===0?W:W-1],H=Z[W],U=Z[W>Z.length-2?Z.length-1:W+1],G=Z[W>Z.length-3?Z.length-1:W+2];return Q.set(UH(X,Y.x,H.x,U.x,G.x),UH(X,Y.y,H.y,U.y,G.y)),Q}copy(J){super.copy(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let $=0,Q=this.points.length;$<Q;$++){let Z=this.points[$];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(new R0().fromArray(Z))}return this}}var UW=Object.freeze({__proto__:null,ArcCurve:NX,CatmullRomCurve3:J6,CubicBezierCurve:iZ,CubicBezierCurve3:FX,EllipseCurve:HQ,LineCurve:oZ,LineCurve3:EX,QuadraticBezierCurve:aZ,QuadraticBezierCurve3:o8,SplineCurve:rZ});class qX extends W7{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),$=this.curves[this.curves.length-1].getPoint(1);if(!J.equals($)){let Q=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new UW[Q]($,J))}return this}getPoint(J,$){let Q=J*this.getLength(),Z=this.getCurveLengths(),K=0;while(K<Z.length){if(Z[K]>=Q){let W=Z[K]-Q,X=this.curves[K],Y=X.getLength(),H=Y===0?0:1-W/Y;return X.getPointAt(H,$)}K++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],$=0;for(let Q=0,Z=this.curves.length;Q<Z;Q++)$+=this.curves[Q].getLength(),J.push($);return this.cacheLengths=J,J}getSpacedPoints(J=40){let $=[];for(let Q=0;Q<=J;Q++)$.push(this.getPoint(Q/J));if(this.autoClose)$.push($[0]);return $}getPoints(J=12){let $=[],Q;for(let Z=0,K=this.curves;Z<K.length;Z++){let W=K[Z],X=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,Y=W.getPoints(X);for(let H=0;H<Y.length;H++){let U=Y[H];if(Q&&Q.equals(U))continue;$.push(U),Q=U}}if(this.autoClose&&$.length>1&&!$[$.length-1].equals($[0]))$.push($[0]);return $}copy(J){super.copy(J),this.curves=[];for(let $=0,Q=J.curves.length;$<Q;$++){let Z=J.curves[$];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let $=0,Q=this.curves.length;$<Q;$++){let Z=this.curves[$];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let $=0,Q=J.curves.length;$<Q;$++){let Z=J.curves[$];this.curves.push(new UW[Z.type]().fromJSON(Z))}return this}}class PZ extends qX{constructor(J){super();if(this.type="Path",this.currentPoint=new R0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let $=1,Q=J.length;$<Q;$++)this.lineTo(J[$].x,J[$].y);return this}moveTo(J,$){return this.currentPoint.set(J,$),this}lineTo(J,$){let Q=new oZ(this.currentPoint.clone(),new R0(J,$));return this.curves.push(Q),this.currentPoint.set(J,$),this}quadraticCurveTo(J,$,Q,Z){let K=new aZ(this.currentPoint.clone(),new R0(J,$),new R0(Q,Z));return this.curves.push(K),this.currentPoint.set(Q,Z),this}bezierCurveTo(J,$,Q,Z,K,W){let X=new iZ(this.currentPoint.clone(),new R0(J,$),new R0(Q,Z),new R0(K,W));return this.curves.push(X),this.currentPoint.set(K,W),this}splineThru(J){let $=[this.currentPoint.clone()].concat(J),Q=new rZ($);return this.curves.push(Q),this.currentPoint.copy(J[J.length-1]),this}arc(J,$,Q,Z,K,W){let X=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+X,$+Y,Q,Z,K,W),this}absarc(J,$,Q,Z,K,W){return this.absellipse(J,$,Q,Q,Z,K,W),this}ellipse(J,$,Q,Z,K,W,X,Y){let H=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+H,$+U,Q,Z,K,W,X,Y),this}absellipse(J,$,Q,Z,K,W,X,Y){let H=new HQ(J,$,Q,Z,K,W,X,Y);if(this.curves.length>0){let G=H.getPoint(0);if(!G.equals(this.currentPoint))this.lineTo(G.x,G.y)}this.curves.push(H);let U=H.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class UQ extends PZ{constructor(J){super(J);this.uuid=Z7(),this.type="Shape",this.holes=[]}getPointsHoles(J){let $=[];for(let Q=0,Z=this.holes.length;Q<Z;Q++)$[Q]=this.holes[Q].getPoints(J);return $}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let $=0,Q=J.holes.length;$<Q;$++){let Z=J.holes[$];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let $=0,Q=this.holes.length;$<Q;$++){let Z=this.holes[$];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let $=0,Q=J.holes.length;$<Q;$++){let Z=J.holes[$];this.holes.push(new PZ().fromJSON(Z))}return this}}function wG(J,$,Q=2){let Z=$&&$.length,K=Z?$[0]*Q:J.length,W=k5(J,0,K,Q,!0),X=[];if(!W||W.next===W.prev)return X;let Y,H,U;if(Z)W=fG(J,$,W,Q);if(J.length>80*Q){Y=J[0],H=J[1];let G=Y,F=H;for(let N=Q;N<K;N+=Q){let q=J[N],O=J[N+1];if(q<Y)Y=q;if(O<H)H=O;if(q>G)G=q;if(O>F)F=O}U=Math.max(G-Y,F-H),U=U!==0?32767/U:0}return u$(W,X,Q,Y,H,U,0),X}function k5(J,$,Q,Z,K){let W;if(K===nG(J,$,Q,Z)>0)for(let X=$;X<Q;X+=Z)W=NH(X/Z|0,J[X],J[X+1],W);else for(let X=Q-Z;X>=$;X-=Z)W=NH(X/Z|0,J[X],J[X+1],W);if(W&&nJ(W,W.next))c$(W),W=W.next;return W}function d6(J,$){if(!J)return J;if(!$)$=J;let Q=J,Z;do if(Z=!1,!Q.steiner&&(nJ(Q,Q.next)||t9(Q.prev,Q,Q.next)===0)){if(c$(Q),Q=$=Q.prev,Q===Q.next)break;Z=!0}else Q=Q.next;while(Z||Q!==$);return $}function u$(J,$,Q,Z,K,W,X){if(!J)return;if(!X&&W)pG(J,Z,K,W);let Y=J;while(J.prev!==J.next){let{prev:H,next:U}=J;if(W?jG(J,Z,K,W):SG(J)){$.push(H.i,J.i,U.i),c$(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!X)u$(d6(J),$,Q,Z,K,W,1);else if(X===1)J=yG(d6(J),$),u$(J,$,Q,Z,K,W,2);else if(X===2)vG(J,$,Q,Z,K,W);break}}}function SG(J){let $=J.prev,Q=J,Z=J.next;if(t9($,Q,Z)>=0)return!1;let K=$.x,W=Q.x,X=Z.x,Y=$.y,H=Q.y,U=Z.y,G=Math.min(K,W,X),F=Math.min(Y,H,U),N=Math.max(K,W,X),q=Math.max(Y,H,U),O=Z.next;while(O!==$){if(O.x>=G&&O.x<=N&&O.y>=F&&O.y<=q&&h$(K,Y,W,H,X,U,O.x,O.y)&&t9(O.prev,O,O.next)>=0)return!1;O=O.next}return!0}function jG(J,$,Q,Z){let K=J.prev,W=J,X=J.next;if(t9(K,W,X)>=0)return!1;let Y=K.x,H=W.x,U=X.x,G=K.y,F=W.y,N=X.y,q=Math.min(Y,H,U),O=Math.min(G,F,N),B=Math.max(Y,H,U),R=Math.max(G,F,N),E=NW(q,O,$,Q,Z),P=NW(B,R,$,Q,Z),k=J.prevZ,V=J.nextZ;while(k&&k.z>=E&&V&&V.z<=P){if(k.x>=q&&k.x<=B&&k.y>=O&&k.y<=R&&k!==K&&k!==X&&h$(Y,G,H,F,U,N,k.x,k.y)&&t9(k.prev,k,k.next)>=0)return!1;if(k=k.prevZ,V.x>=q&&V.x<=B&&V.y>=O&&V.y<=R&&V!==K&&V!==X&&h$(Y,G,H,F,U,N,V.x,V.y)&&t9(V.prev,V,V.next)>=0)return!1;V=V.nextZ}while(k&&k.z>=E){if(k.x>=q&&k.x<=B&&k.y>=O&&k.y<=R&&k!==K&&k!==X&&h$(Y,G,H,F,U,N,k.x,k.y)&&t9(k.prev,k,k.next)>=0)return!1;k=k.prevZ}while(V&&V.z<=P){if(V.x>=q&&V.x<=B&&V.y>=O&&V.y<=R&&V!==K&&V!==X&&h$(Y,G,H,F,U,N,V.x,V.y)&&t9(V.prev,V,V.next)>=0)return!1;V=V.nextZ}return!0}function yG(J,$){let Q=J;do{let Z=Q.prev,K=Q.next.next;if(!nJ(Z,K)&&C5(Z,Q,Q.next,K)&&d$(Z,K)&&d$(K,Z))$.push(Z.i,Q.i,K.i),c$(Q),c$(Q.next),Q=J=K;Q=Q.next}while(Q!==J);return d6(Q)}function vG(J,$,Q,Z,K,W){let X=J;do{let Y=X.next.next;while(Y!==X.prev){if(X.i!==Y.i&&uG(X,Y)){let H=P5(X,Y);X=d6(X,X.next),H=d6(H,H.next),u$(X,$,Q,Z,K,W,0),u$(H,$,Q,Z,K,W,0);return}Y=Y.next}X=X.next}while(X!==J)}function fG(J,$,Q,Z){let K=[];for(let W=0,X=$.length;W<X;W++){let Y=$[W]*Z,H=W<X-1?$[W+1]*Z:J.length,U=k5(J,Y,H,Z,!1);if(U===U.next)U.steiner=!0;K.push(lG(U))}K.sort(bG);for(let W=0;W<K.length;W++)Q=hG(K[W],Q);return Q}function bG(J,$){let Q=J.x-$.x;if(Q===0){if(Q=J.y-$.y,Q===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),K=($.next.y-$.y)/($.next.x-$.x);Q=Z-K}}return Q}function hG(J,$){let Q=xG(J,$);if(!Q)return $;let Z=P5(Q,J);return d6(Z,Z.next),d6(Q,Q.next)}function xG(J,$){let Q=$,Z=J.x,K=J.y,W=-1/0,X;if(nJ(J,Q))return Q;do{if(nJ(J,Q.next))return Q.next;else if(K<=Q.y&&K>=Q.next.y&&Q.next.y!==Q.y){let F=Q.x+(K-Q.y)*(Q.next.x-Q.x)/(Q.next.y-Q.y);if(F<=Z&&F>W){if(W=F,X=Q.x<Q.next.x?Q:Q.next,F===Z)return X}}Q=Q.next}while(Q!==$);if(!X)return null;let Y=X,H=X.x,U=X.y,G=1/0;Q=X;do{if(Z>=Q.x&&Q.x>=H&&Z!==Q.x&&M5(K<U?Z:W,K,H,U,K<U?W:Z,K,Q.x,Q.y)){let F=Math.abs(K-Q.y)/(Z-Q.x);if(d$(Q,J)&&(F<G||F===G&&(Q.x>X.x||Q.x===X.x&&gG(X,Q))))X=Q,G=F}Q=Q.next}while(Q!==Y);return X}function gG(J,$){return t9(J.prev,J,$.prev)<0&&t9($.next,J,J.next)<0}function pG(J,$,Q,Z){let K=J;do{if(K.z===0)K.z=NW(K.x,K.y,$,Q,Z);K.prevZ=K.prev,K.nextZ=K.next,K=K.next}while(K!==J);K.prevZ.nextZ=null,K.prevZ=null,mG(K)}function mG(J){let $,Q=1;do{let Z=J,K;J=null;let W=null;$=0;while(Z){$++;let X=Z,Y=0;for(let U=0;U<Q;U++)if(Y++,X=X.nextZ,!X)break;let H=Q;while(Y>0||H>0&&X){if(Y!==0&&(H===0||!X||Z.z<=X.z))K=Z,Z=Z.nextZ,Y--;else K=X,X=X.nextZ,H--;if(W)W.nextZ=K;else J=K;K.prevZ=W,W=K}Z=X}W.nextZ=null,Q*=2}while($>1);return J}function NW(J,$,Q,Z,K){return J=(J-Q)*K|0,$=($-Z)*K|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,$=($|$<<8)&16711935,$=($|$<<4)&252645135,$=($|$<<2)&858993459,$=($|$<<1)&1431655765,J|$<<1}function lG(J){let $=J,Q=J;do{if($.x<Q.x||$.x===Q.x&&$.y<Q.y)Q=$;$=$.next}while($!==J);return Q}function M5(J,$,Q,Z,K,W,X,Y){return(K-X)*($-Y)>=(J-X)*(W-Y)&&(J-X)*(Z-Y)>=(Q-X)*($-Y)&&(Q-X)*(W-Y)>=(K-X)*(Z-Y)}function h$(J,$,Q,Z,K,W,X,Y){return!(J===X&&$===Y)&&M5(J,$,Q,Z,K,W,X,Y)}function uG(J,$){return J.next.i!==$.i&&J.prev.i!==$.i&&!dG(J,$)&&(d$(J,$)&&d$($,J)&&cG(J,$)&&(t9(J.prev,J,$.prev)||t9(J,$.prev,$))||nJ(J,$)&&t9(J.prev,J,J.next)>0&&t9($.prev,$,$.next)>0)}function t9(J,$,Q){return($.y-J.y)*(Q.x-$.x)-($.x-J.x)*(Q.y-$.y)}function nJ(J,$){return J.x===$.x&&J.y===$.y}function C5(J,$,Q,Z){let K=VZ(t9(J,$,Q)),W=VZ(t9(J,$,Z)),X=VZ(t9(Q,Z,J)),Y=VZ(t9(Q,Z,$));if(K!==W&&X!==Y)return!0;if(K===0&&LZ(J,Q,$))return!0;if(W===0&&LZ(J,Z,$))return!0;if(X===0&&LZ(Q,J,Z))return!0;if(Y===0&&LZ(Q,$,Z))return!0;return!1}function LZ(J,$,Q){return $.x<=Math.max(J.x,Q.x)&&$.x>=Math.min(J.x,Q.x)&&$.y<=Math.max(J.y,Q.y)&&$.y>=Math.min(J.y,Q.y)}function VZ(J){return J>0?1:J<0?-1:0}function dG(J,$){let Q=J;do{if(Q.i!==J.i&&Q.next.i!==J.i&&Q.i!==$.i&&Q.next.i!==$.i&&C5(Q,Q.next,J,$))return!0;Q=Q.next}while(Q!==J);return!1}function d$(J,$){return t9(J.prev,J,J.next)<0?t9(J,$,J.next)>=0&&t9(J,J.prev,$)>=0:t9(J,$,J.prev)<0||t9(J,J.next,$)<0}function cG(J,$){let Q=J,Z=!1,K=(J.x+$.x)/2,W=(J.y+$.y)/2;do{if(Q.y>W!==Q.next.y>W&&Q.next.y!==Q.y&&K<(Q.next.x-Q.x)*(W-Q.y)/(Q.next.y-Q.y)+Q.x)Z=!Z;Q=Q.next}while(Q!==J);return Z}function P5(J,$){let Q=GW(J.i,J.x,J.y),Z=GW($.i,$.x,$.y),K=J.next,W=$.prev;return J.next=$,$.prev=J,Q.next=K,K.prev=Q,Z.next=Q,Q.prev=Z,W.next=Z,Z.prev=W,Z}function NH(J,$,Q,Z){let K=GW(J,$,Q);if(!Z)K.prev=K,K.next=K;else K.next=Z.next,K.prev=Z,Z.next.prev=K,Z.next=K;return K}function c$(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function GW(J,$,Q){return{i:J,x:$,y:Q,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nG(J,$,Q,Z){let K=0;for(let W=$,X=Q-Z;W<Q;W+=Z)K+=(J[X]-J[W])*(J[W+1]+J[X+1]),X=W;return K}class I5{static triangulate(J,$,Q=2){return wG(J,$,Q)}}class uJ{static area(J){let $=J.length,Q=0;for(let Z=$-1,K=0;K<$;Z=K++)Q+=J[Z].x*J[K].y-J[K].x*J[Z].y;return Q*0.5}static isClockWise(J){return uJ.area(J)<0}static triangulateShape(J,$){let Q=[],Z=[],K=[];GH(J),FH(Q,J);let W=J.length;$.forEach(GH);for(let Y=0;Y<$.length;Y++)Z.push(W),W+=$[Y].length,FH(Q,$[Y]);let X=I5.triangulate(Q,Z);for(let Y=0;Y<X.length;Y+=3)K.push(X.slice(Y,Y+3));return K}}function GH(J){let $=J.length;if($>2&&J[$-1].equals(J[0]))J.pop()}function FH(J,$){for(let Q=0;Q<$.length;Q++)J.push($[Q].x),J.push($[Q].y)}class NQ extends sZ{constructor(J=1,$=0){let Q=(1+Math.sqrt(5))/2,Z=[-1,Q,0,1,Q,0,-1,-Q,0,1,-Q,0,0,-1,Q,0,1,Q,0,-1,-Q,0,1,-Q,Q,0,-1,Q,0,1,-Q,0,-1,-Q,0,1],K=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(Z,K,J,$);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:$}}static fromJSON(J){return new NQ(J.radius,J.detail)}}class k6 extends b9{constructor(J=[new R0(0,-0.5),new R0(0.5,0),new R0(0,0.5)],$=12,Q=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:$,phiStart:Q,phiLength:Z},$=Math.floor($),Z=O9(Z,0,Math.PI*2);let K=[],W=[],X=[],Y=[],H=[],U=1/$,G=new T,F=new R0,N=new T,q=new T,O=new T,B=0,R=0;for(let E=0;E<=J.length-1;E++)switch(E){case 0:B=J[E+1].x-J[E].x,R=J[E+1].y-J[E].y,N.x=R*1,N.y=-B,N.z=R*0,O.copy(N),N.normalize(),Y.push(N.x,N.y,N.z);break;case J.length-1:Y.push(O.x,O.y,O.z);break;default:B=J[E+1].x-J[E].x,R=J[E+1].y-J[E].y,N.x=R*1,N.y=-B,N.z=R*0,q.copy(N),N.x+=O.x,N.y+=O.y,N.z+=O.z,N.normalize(),Y.push(N.x,N.y,N.z),O.copy(q)}for(let E=0;E<=$;E++){let P=Q+E*U*Z,k=Math.sin(P),V=Math.cos(P);for(let z=0;z<=J.length-1;z++){G.x=J[z].x*k,G.y=J[z].y,G.z=J[z].x*V,W.push(G.x,G.y,G.z),F.x=E/$,F.y=z/(J.length-1),X.push(F.x,F.y);let w=Y[3*z+0]*k,D=Y[3*z+1],L=Y[3*z+0]*V;H.push(w,D,L)}}for(let E=0;E<$;E++)for(let P=0;P<J.length-1;P++){let k=P+E*J.length,V=k,z=k+J.length,w=k+J.length+1,D=k+1;K.push(V,z,D),K.push(w,D,z)}this.setIndex(K),this.setAttribute("position",new Y9(W,3)),this.setAttribute("uv",new Y9(X,2)),this.setAttribute("normal",new Y9(H,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new k6(J.points,J.segments,J.phiStart,J.phiLength)}}class V9 extends b9{constructor(J=1,$=1,Q=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:$,widthSegments:Q,heightSegments:Z};let K=J/2,W=$/2,X=Math.floor(Q),Y=Math.floor(Z),H=X+1,U=Y+1,G=J/X,F=$/Y,N=[],q=[],O=[],B=[];for(let R=0;R<U;R++){let E=R*F-W;for(let P=0;P<H;P++){let k=P*G-K;q.push(k,-E,0),O.push(0,0,1),B.push(P/X),B.push(1-R/Y)}}for(let R=0;R<Y;R++)for(let E=0;E<X;E++){let P=E+H*R,k=E+H*(R+1),V=E+1+H*(R+1),z=E+1+H*R;N.push(P,k,z),N.push(k,V,z)}this.setIndex(N),this.setAttribute("position",new Y9(q,3)),this.setAttribute("normal",new Y9(O,3)),this.setAttribute("uv",new Y9(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new V9(J.width,J.height,J.widthSegments,J.heightSegments)}}class GQ extends b9{constructor(J=new UQ([new R0(0,0.5),new R0(-0.5,-0.5),new R0(0.5,-0.5)]),$=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:$};let Q=[],Z=[],K=[],W=[],X=0,Y=0;if(Array.isArray(J)===!1)H(J);else for(let U=0;U<J.length;U++)H(J[U]),this.addGroup(X,Y,U),X+=Y,Y=0;this.setIndex(Q),this.setAttribute("position",new Y9(Z,3)),this.setAttribute("normal",new Y9(K,3)),this.setAttribute("uv",new Y9(W,2));function H(U){let G=Z.length/3,F=U.extractPoints($),N=F.shape,q=F.holes;if(uJ.isClockWise(N)===!1)N=N.reverse();for(let B=0,R=q.length;B<R;B++){let E=q[B];if(uJ.isClockWise(E)===!0)q[B]=E.reverse()}let O=uJ.triangulateShape(N,q);for(let B=0,R=q.length;B<R;B++){let E=q[B];N=N.concat(E)}for(let B=0,R=N.length;B<R;B++){let E=N[B];Z.push(E.x,E.y,0),K.push(0,0,1),W.push(E.x,E.y)}for(let B=0,R=O.length;B<R;B++){let E=O[B],P=E[0]+G,k=E[1]+G,V=E[2]+G;Q.push(P,k,V),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),$=this.parameters.shapes;return sG($,J)}static fromJSON(J,$){let Q=[];for(let Z=0,K=J.shapes.length;Z<K;Z++){let W=$[J.shapes[Z]];Q.push(W)}return new GQ(Q,J.curveSegments)}}function sG(J,$){if($.shapes=[],Array.isArray(J))for(let Q=0,Z=J.length;Q<Z;Q++){let K=J[Q];$.shapes.push(K.uuid)}else $.shapes.push(J.uuid);return $}class B8 extends b9{constructor(J=1,$=32,Q=16,Z=0,K=Math.PI*2,W=0,X=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:$,heightSegments:Q,phiStart:Z,phiLength:K,thetaStart:W,thetaLength:X},$=Math.max(3,Math.floor($)),Q=Math.max(2,Math.floor(Q));let Y=Math.min(W+X,Math.PI),H=0,U=[],G=new T,F=new T,N=[],q=[],O=[],B=[];for(let R=0;R<=Q;R++){let E=[],P=R/Q,k=W+P*X,V=J*Math.cos(k),z=Math.sqrt(J*J-V*V),w=0;if(R===0&&W===0)w=0.5/$;else if(R===Q&&Y===Math.PI)w=-0.5/$;for(let D=0;D<=$;D++){let L=D/$,M=Z+L*K;G.x=-z*Math.cos(M),G.y=V,G.z=z*Math.sin(M),q.push(G.x,G.y,G.z),F.copy(G).normalize(),O.push(F.x,F.y,F.z),B.push(L+w,1-P),E.push(H++)}U.push(E)}for(let R=0;R<Q;R++)for(let E=0;E<$;E++){let P=U[R][E+1],k=U[R][E],V=U[R+1][E],z=U[R+1][E+1];if(R!==0||W>0)N.push(P,k,z);if(R!==Q-1||Y<Math.PI)N.push(k,V,z)}this.setIndex(N),this.setAttribute("position",new Y9(q,3)),this.setAttribute("normal",new Y9(O,3)),this.setAttribute("uv",new Y9(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new B8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class x7 extends b9{constructor(J=1,$=0.4,Q=12,Z=48,K=Math.PI*2,W=0,X=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:$,radialSegments:Q,tubularSegments:Z,arc:K,thetaStart:W,thetaLength:X},Q=Math.floor(Q),Z=Math.floor(Z);let Y=[],H=[],U=[],G=[],F=new T,N=new T,q=new T;for(let O=0;O<=Q;O++){let B=W+O/Q*X;for(let R=0;R<=Z;R++){let E=R/Z*K;N.x=(J+$*Math.cos(B))*Math.cos(E),N.y=(J+$*Math.cos(B))*Math.sin(E),N.z=$*Math.sin(B),H.push(N.x,N.y,N.z),F.x=J*Math.cos(E),F.y=J*Math.sin(E),q.subVectors(N,F).normalize(),U.push(q.x,q.y,q.z),G.push(R/Z),G.push(O/Q)}}for(let O=1;O<=Q;O++)for(let B=1;B<=Z;B++){let R=(Z+1)*O+B-1,E=(Z+1)*(O-1)+B-1,P=(Z+1)*(O-1)+B,k=(Z+1)*O+B;Y.push(R,E,k),Y.push(E,P,k)}this.setIndex(Y),this.setAttribute("position",new Y9(H,3)),this.setAttribute("normal",new Y9(U,3)),this.setAttribute("uv",new Y9(G,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new x7(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class b8 extends b9{constructor(J=new o8(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),$=64,Q=1,Z=8,K=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:$,radius:Q,radialSegments:Z,closed:K};let W=J.computeFrenetFrames($,K);this.tangents=W.tangents,this.normals=W.normals,this.binormals=W.binormals;let X=new T,Y=new T,H=new R0,U=new T,G=[],F=[],N=[],q=[];O(),this.setIndex(q),this.setAttribute("position",new Y9(G,3)),this.setAttribute("normal",new Y9(F,3)),this.setAttribute("uv",new Y9(N,2));function O(){for(let P=0;P<$;P++)B(P);B(K===!1?$:0),E(),R()}function B(P){U=J.getPointAt(P/$,U);let k=W.normals[P],V=W.binormals[P];for(let z=0;z<=Z;z++){let w=z/Z*Math.PI*2,D=Math.sin(w),L=-Math.cos(w);Y.x=L*k.x+D*V.x,Y.y=L*k.y+D*V.y,Y.z=L*k.z+D*V.z,Y.normalize(),F.push(Y.x,Y.y,Y.z),X.x=U.x+Q*Y.x,X.y=U.y+Q*Y.y,X.z=U.z+Q*Y.z,G.push(X.x,X.y,X.z)}}function R(){for(let P=1;P<=$;P++)for(let k=1;k<=Z;k++){let V=(Z+1)*(P-1)+(k-1),z=(Z+1)*P+(k-1),w=(Z+1)*P+k,D=(Z+1)*(P-1)+k;q.push(V,z,D),q.push(z,w,D)}}function E(){for(let P=0;P<=$;P++)for(let k=0;k<=Z;k++)H.x=P/$,H.y=k/Z,N.push(H.x,H.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new b8(new UW[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function WJ(J){let $={};for(let Q in J){$[Q]={};for(let Z in J[Q]){let K=J[Q][Z];if(EH(K))if(K.isRenderTargetTexture)r0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[Q][Z]=null;else $[Q][Z]=K.clone();else if(Array.isArray(K))if(EH(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();$[Q][Z]=W}else $[Q][Z]=K.slice();else $[Q][Z]=K}}return $}function _8(J){let $={};for(let Q=0;Q<J.length;Q++){let Z=WJ(J[Q]);for(let K in Z)$[K]=Z[K]}return $}function EH(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function iG(J){let $=[];for(let Q=0;Q<J.length;Q++)$.push(J[Q].clone());return $}function OX(J){let $=J.getRenderTarget();if($===null)return J.outputColorSpace;if($.isXRRenderTarget===!0)return $.texture.colorSpace;return R9.workingColorSpace}var $6={clone:WJ,merge:_8},oG=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aG=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class e9 extends f8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oG,this.fragmentShader=aG,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=WJ(J.uniforms),this.uniformsGroups=iG(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let $=super.toJSON(J);$.glslVersion=this.glslVersion,$.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)$.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)$.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)$.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)$.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)$.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)$.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)$.uniforms[Z]={type:"m4",value:W.toArray()};else $.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let Q={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Q[Z]=!0;if(Object.keys(Q).length>0)$.extensions=Q;return $}fromJSON(J,$){if(super.fromJSON(J,$),J.uniforms!==void 0)for(let Q in J.uniforms){let Z=J.uniforms[Q];switch(this.uniforms[Q]={},Z.type){case"t":this.uniforms[Q].value=$[Z.value]||null;break;case"c":this.uniforms[Q].value=new b0().setHex(Z.value);break;case"v2":this.uniforms[Q].value=new R0().fromArray(Z.value);break;case"v3":this.uniforms[Q].value=new T().fromArray(Z.value);break;case"v4":this.uniforms[Q].value=new u9().fromArray(Z.value);break;case"m3":this.uniforms[Q].value=new H9().fromArray(Z.value);break;case"m4":this.uniforms[Q].value=new $9().fromArray(Z.value);break;default:this.uniforms[Q].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Q in J.extensions)this.extensions[Q]=J.extensions[Q];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class FQ extends e9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o0 extends f8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new b0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new b0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new V7,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class D8 extends o0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new R0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return O9(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function($){this.ior=(1+0.4*$)/(1-0.4*$)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new b0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new b0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new b0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class RX extends f8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class LX extends f8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function F6(J,$){if(!J||J.constructor===$)return J;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(J);return Array.prototype.slice.call(J)}function kZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function rG(J){function $(K,W){return J[K]-J[W]}let Q=J.length,Z=Array(Q);for(let K=0;K!==Q;++K)Z[K]=K;return Z.sort($),Z}function qH(J,$,Q){let Z=J.length,K=new J.constructor(Z);for(let W=0,X=0;X!==Z;++W){let Y=Q[W]*$;for(let H=0;H!==$;++H)K[X++]=J[Y+H]}return K}function tG(J,$,Q,Z){let K=1,W=J[0];while(W!==void 0&&W[Z]===void 0)W=J[K++];if(W===void 0)return;let X=W[Z];if(X===void 0)return;if(Array.isArray(X))do{if(X=W[Z],X!==void 0)$.push(W.time),Q.push(...X);W=J[K++]}while(W!==void 0);else if(X.toArray!==void 0)do{if(X=W[Z],X!==void 0)$.push(W.time),X.toArray(Q,Q.length);W=J[K++]}while(W!==void 0);else do{if(X=W[Z],X!==void 0)$.push(W.time),Q.push(X);W=J[K++]}while(W!==void 0)}class Q6{constructor(J,$,Q,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new $.constructor(Q),this.sampleValues=$,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate(J){let $=this.parameterPositions,Q=this._cachedIndex,Z=$[Q],K=$[Q-1];J:{$:{let W;Q:{Z:if(!(J<Z)){for(let X=Q+2;;){if(Z===void 0){if(J<K)break Z;return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===X)break;if(K=Z,Z=$[++Q],J<Z)break $}W=$.length;break Q}if(!(J>=K)){let X=$[1];if(J<X)Q=2,K=X;for(let Y=Q-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===Y)break;if(Z=K,K=$[--Q-1],J>=K)break $}W=Q,Q=0;break Q}break J}while(Q<W){let X=Q+W>>>1;if(J<$[X])W=X;else Q=X+1}if(Z=$[Q],K=$[Q-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,K,Z)}return this.interpolate_(Q,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)$[W]=Q[K+W];return $}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class VX extends Q6{constructor(J,$,Q,Z){super(J,$,Q,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,$,Q){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*$-Q;break;case 2402:K=Z.length-2,X=$+Z[K]-Z[K+1];break;default:K=J,X=Q}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*Q-$;break;case 2402:W=1,Y=Q+Z[1]-Z[0];break;default:W=J-1,Y=$}let H=(Q-$)*0.5,U=this.valueSize;this._weightPrev=H/($-X),this._weightNext=H/(Y-Q),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this._offsetPrev,G=this._offsetNext,F=this._weightPrev,N=this._weightNext,q=(Q-$)/(Z-$),O=q*q,B=O*q,R=-F*B+2*F*O-F*q,E=(1+F)*B+(-1.5-2*F)*O+(-0.5+F)*q+1,P=(-1-N)*B+(1.5+N)*O+0.5*q,k=N*B-N*O;for(let V=0;V!==X;++V)K[V]=R*W[U+V]+E*W[H+V]+P*W[Y+V]+k*W[G+V];return K}}class tZ extends Q6{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=(Q-$)/(Z-$),G=1-U;for(let F=0;F!==X;++F)K[F]=W[H+F]*G+W[Y+F]*U;return K}}class BX extends Q6{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class DX extends Q6{interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this.inTangents,G=this.outTangents;if(!U||!G){let q=(Q-$)/(Z-$),O=1-q;for(let B=0;B!==X;++B)K[B]=W[H+B]*O+W[Y+B]*q;return K}let F=X*2,N=J-1;for(let q=0;q!==X;++q){let O=W[H+q],B=W[Y+q],R=N*F+q*2,E=G[R],P=G[R+1],k=J*F+q*2,V=U[k],z=U[k+1],w=J1(Q,$,E,V,Z);K[q]=z5(w,O,P,z,B)}return K}}function z5(J,$,Q,Z,K){let W=1-J;return W*W*W*$+3*W*W*J*Q+3*W*J*J*Z+J*J*J*K}function eG(J,$,Q,Z,K){let W=1-J;return 3*W*W*(Q-$)+6*W*J*(Z-Q)+3*J*J*(K-Z)}function J1(J,$,Q,Z,K){let W=(J-$)/(K-$);for(let X=0;X<8;X++){let Y=z5(W,$,Q,Z,K)-J;if(Math.abs(Y)<0.0000000001)break;let H=eG(W,$,Q,Z,K);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-Y/H))}return W}class a8{constructor(J,$,Q,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=F6($,this.TimeBufferType),this.values=F6(Q,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let $=J.constructor,Q;if($.toJSON!==this.toJSON)Q=$.toJSON(J);else{Q={name:J.name,times:F6(J.times,Array),values:F6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)Q.interpolation=Z;if(kZ(J.settings))Q.settings={inTangents:F6(J.settings.inTangents,Array),outTangents:F6(J.settings.outTangents,Array)}}return Q.type=J.ValueTypeName,Q}InterpolantFactoryMethodDiscrete(J){return new BX(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new tZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new VX(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let $=new DX(this.times,this.values,this.getValueSize(),J);if(this.settings)$.inTangents=this.settings.inTangents,$.outTangents=this.settings.outTangents;return $}setInterpolation(J){let $;switch(J){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break;case 2303:$=this.InterpolantFactoryMethodBezier;break}if($===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return r0("KeyframeTrack:",Q),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]+=J}return this}scale(J){if(J!==1){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]*=J;if(kZ(this.settings))OH(this.settings.inTangents,J),OH(this.settings.outTangents,J)}return this}trim(J,$){let Q=this.times,Z=Q.length,K=0,W=Z-1;while(K!==Z&&Q[K]<J)++K;while(W!==-1&&Q[W]>$)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=Q.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,$=this.getValueSize();if($-Math.floor($)!==0)Z9("KeyframeTrack: Invalid value size in track.",this),J=!1;let Q=this.times,Z=this.values,K=Q.length;if(K===0)Z9("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=Q[X];if(typeof Y==="number"&&isNaN(Y)){Z9("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){Z9("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(gN(Z))for(let X=0,Y=Z.length;X!==Y;++X){let H=Z[X];if(isNaN(H)){Z9("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),$=this.values.slice(),Q=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!Z){let G=X*Q,F=G-Q,N=G+Q;for(let q=0;q!==Q;++q){let O=$[G+q];if(O!==$[F+q]||O!==$[N+q]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let G=X*Q,F=W*Q;for(let N=0;N!==Q;++N)$[F+N]=$[G+N]}++W}}if(K>0){J[W]=J[K];for(let X=K*Q,Y=W*Q,H=0;H!==Q;++H)$[Y+H]=$[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=$.slice(0,W*Q);else this.times=J,this.values=$;return this}clone(){let J=this.times.slice(),$=this.values.slice(),Z=new this.constructor(this.name,J,$);if(Z.createInterpolant=this.createInterpolant,kZ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function OH(J,$){for(let Q=0,Z=J.length;Q!==Z;Q+=2)J[Q]*=$}a8.prototype.ValueTypeName="";a8.prototype.TimeBufferType=Float32Array;a8.prototype.ValueBufferType=Float32Array;a8.prototype.DefaultInterpolation=2301;class M6 extends a8{constructor(J,$,Q){super(J,$,Q)}}M6.prototype.ValueTypeName="bool";M6.prototype.ValueBufferType=Array;M6.prototype.DefaultInterpolation=2300;M6.prototype.InterpolantFactoryMethodLinear=void 0;M6.prototype.InterpolantFactoryMethodSmooth=void 0;class eZ extends a8{constructor(J,$,Q,Z){super(J,$,Q,Z)}}eZ.prototype.ValueTypeName="color";class C6 extends a8{constructor(J,$,Q,Z){super(J,$,Q,Z)}}C6.prototype.ValueTypeName="number";class kX extends Q6{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=(Q-$)/(Z-$),H=J*X;for(let U=H+X;H!==U;H+=4)E9.slerpFlat(K,0,W,H-X,W,H,Y);return K}}class P6 extends a8{constructor(J,$,Q,Z){super(J,$,Q,Z)}InterpolantFactoryMethodLinear(J){return new kX(this.times,this.values,this.getValueSize(),J)}}P6.prototype.ValueTypeName="quaternion";P6.prototype.InterpolantFactoryMethodSmooth=void 0;class I6 extends a8{constructor(J,$,Q){super(J,$,Q)}}I6.prototype.ValueTypeName="string";I6.prototype.ValueBufferType=Array;I6.prototype.DefaultInterpolation=2300;I6.prototype.InterpolantFactoryMethodLinear=void 0;I6.prototype.InterpolantFactoryMethodSmooth=void 0;class XJ extends a8{constructor(J,$,Q,Z){super(J,$,Q,Z)}}XJ.prototype.ValueTypeName="vector";class sJ{constructor(J="",$=-1,Q=[],Z=2500){if(this.name=J,this.tracks=Q,this.duration=$,this.blendMode=Z,this.uuid=Z7(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let $=[],Q=J.tracks,Z=1/(J.fps||1);for(let W=0,X=Q.length;W!==X;++W)$.push(Q1(Q[W]).scale(Z));let K=new this(J.name,J.duration,$,J.blendMode);return K.uuid=J.uuid,K.userData=JSON.parse(J.userData||"{}"),K}static toJSON(J){let $=[],Q=J.tracks,Z={name:J.name,duration:J.duration,tracks:$,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let K=0,W=Q.length;K!==W;++K)$.push(a8.toJSON(Q[K]));return Z}static CreateFromMorphTargetSequence(J,$,Q,Z){let K=$.length,W=[];for(let X=0;X<K;X++){let Y=[],H=[];Y.push((X+K-1)%K,X,(X+1)%K),H.push(0,1,0);let U=rG(Y);if(Y=qH(Y,1,U),H=qH(H,1,U),!Z&&Y[0]===0)Y.push(K),H.push(H[0]);W.push(new C6(".morphTargetInfluences["+$[X].name+"]",Y,H).scale(1/Q))}return new this(J,-1,W)}static findByName(J,$){let Q=J;if(!Array.isArray(J)){let Z=J;Q=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<Q.length;Z++)if(Q[Z].name===$)return Q[Z];return null}static CreateClipsFromMorphTargetSequences(J,$,Q){let Z={},K=/^([\w-]*?)([\d]+)$/;for(let X=0,Y=J.length;X<Y;X++){let H=J[X],U=H.name.match(K);if(U&&U.length>1){let G=U[1],F=Z[G];if(!F)Z[G]=F=[];F.push(H)}}let W=[];for(let X in Z)W.push(this.CreateFromMorphTargetSequence(X,Z[X],$,Q));return W}resetDuration(){let J=this.tracks,$=0;for(let Q=0,Z=J.length;Q!==Z;++Q){let K=this.tracks[Q];$=Math.max($,K.times[K.times.length-1])}return this.duration=$,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let $=0;$<this.tracks.length;$++)J=J&&this.tracks[$].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());let $=new this.constructor(this.name,this.duration,J,this.blendMode);return $.userData=JSON.parse(JSON.stringify(this.userData)),$}toJSON(){return this.constructor.toJSON(this)}}function $1(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return C6;case"vector":case"vector2":case"vector3":case"vector4":return XJ;case"color":return eZ;case"quaternion":return P6;case"bool":case"boolean":return M6;case"string":return I6}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function Q1(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let $=$1(J.type);if(J.times===void 0){let Z=[],K=[];tG(J.keys,Z,K,"value"),J.times=Z,J.values=K}let Q;if($.parse!==void 0)Q=$.parse(J);else Q=new $(J.name,J.times,J.values,J.interpolation);if(kZ(J.settings))Q.settings={inTangents:F6(J.settings.inTangents,Float32Array),outTangents:F6(J.settings.outTangents,Float32Array)};return Q}var j7={enabled:!1,files:{},add:function(J,$){if(this.enabled===!1)return;if(RH(J))return;this.files[J]=$},get:function(J){if(this.enabled===!1)return;if(RH(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function RH(J){try{let $=J.slice(J.indexOf(":")+1);return new URL($).protocol==="blob:"}catch($){return!1}}class MX{constructor(J,$,Q){let Z=this,K=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=$,this.onError=Q,this._abortController=null,this.itemStart=function(U){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,X)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return H.push(U,G),this},this.removeHandler=function(U){let G=H.indexOf(U);if(G!==-1)H.splice(G,2);return this},this.getHandler=function(U){for(let G=0,F=H.length;G<F;G+=2){let N=H[G],q=H[G+1];if(N.global)N.lastIndex=0;if(N.test(U))return q}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var A5=new MX;class Z6{constructor(J){if(this.manager=J!==void 0?J:A5,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,$){let Q=this;return new Promise(function(Z,K){Q.load(J,Z,$,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}Z6.DEFAULT_MATERIAL_NAME="__DEFAULT";var a7={};class _5 extends Error{constructor(J,$){super(J);this.response=$}}class EQ extends Z6{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,$,Q,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=j7.get(`file:${J}`);if(K!==void 0){this.manager.itemStart(J),setTimeout(()=>{if($)$(K);this.manager.itemEnd(J)},0);return}if(a7[J]!==void 0){a7[J].push({onLoad:$,onProgress:Q,onError:Z});return}a7[J]=[],a7[J].push({onLoad:$,onProgress:Q,onError:Z});let W=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),X=this.mimeType,Y=this.responseType;fetch(W).then((H)=>{if(H.status===200||H.status===0){if(H.status===0)r0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||H.body===void 0||H.body.getReader===void 0)return H;let U=a7[J],G=H.body.getReader(),F=H.headers.get("X-File-Size")||H.headers.get("Content-Length"),N=F?parseInt(F):0,q=N!==0,O=0,B=new ReadableStream({start(R){E();function E(){G.read().then(({done:P,value:k})=>{if(P)R.close();else{O+=k.byteLength;let V=new ProgressEvent("progress",{lengthComputable:q,loaded:O,total:N});for(let z=0,w=U.length;z<w;z++){let D=U[z];if(D.onProgress)D.onProgress(V)}R.enqueue(k),E()}},(P)=>{R.error(P)})}}});return new Response(B)}else throw new _5(`fetch for "${H.url}" responded with ${H.status}: ${H.statusText}`,H)}).then((H)=>{switch(Y){case"arraybuffer":return H.arrayBuffer();case"blob":return H.blob();case"document":return H.text().then((U)=>{return new DOMParser().parseFromString(U,X)});case"json":return H.json();default:if(X==="")return H.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(X),F=G&&G[1]?G[1].toLowerCase():void 0,N=new TextDecoder(F);return H.arrayBuffer().then((q)=>N.decode(q))}}}).then((H)=>{j7.add(`file:${J}`,H);let U=a7[J];delete a7[J];for(let G=0,F=U.length;G<F;G++){let N=U[G];if(N.onLoad)N.onLoad(H)}}).catch((H)=>{let U=a7[J];if(U===void 0)throw this.manager.itemError(J),H;delete a7[J];for(let G=0,F=U.length;G<F;G++){let N=U[G];if(N.onError)N.onError(H)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var gJ=new WeakMap;class CX extends Z6{constructor(J){super(J)}load(J,$,Q,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=j7.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if($)$(W);K.manager.itemEnd(J)},0);else{let G=gJ.get(W);if(G===void 0)G=[],gJ.set(W,G);G.push({onLoad:$,onError:Z})}return W}let X=dJ("img");function Y(){if(U(),$)$(this);let G=gJ.get(this)||[];for(let F=0;F<G.length;F++){let N=G[F];if(N.onLoad)N.onLoad(this)}gJ.delete(this),K.manager.itemEnd(J)}function H(G){if(U(),Z)Z(G);j7.remove(`image:${J}`);let F=gJ.get(this)||[];for(let N=0;N<F.length;N++){let q=F[N];if(q.onError)q.onError(G)}gJ.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function U(){X.removeEventListener("load",Y,!1),X.removeEventListener("error",H,!1)}if(X.addEventListener("load",Y,!1),X.addEventListener("error",H,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return j7.add(`image:${J}`,X),K.manager.itemStart(J),X.src=J,X}}class JK extends Z6{constructor(J){super(J)}load(J,$,Q,Z){let K=new Z8,W=new CX(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(X){if(K.image=X,K.needsUpdate=!0,$!==void 0)$(K)},Q,Z),K}}class X$ extends v9{constructor(J,$=1){super();this.isLight=!0,this.type="Light",this.color=new b0(J),this.intensity=$}copy(J,$){return super.copy(J,$),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let $=super.toJSON(J);return $.object.color=this.color.getHex(),$.object.intensity=this.intensity,$}}class $K extends X${constructor(J,$,Q){super(J,Q);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(v9.DEFAULT_UP),this.updateMatrix(),this.groundColor=new b0($)}copy(J,$){return super.copy(J,$),this.groundColor.copy(J.groundColor),this}toJSON(J){let $=super.toJSON(J);return $.object.groundColor=this.groundColor.getHex(),$}}var XW=new $9,LH=new T,VH=new T;class qQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new $9,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $J,this._frameExtents=new R0(1,1),this._viewportCount=1,this._viewports=[new u9(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let $=this.camera;LH.setFromMatrixPosition(J.matrixWorld),$.position.copy(LH),VH.setFromMatrixPosition(J.target.matrixWorld),$.lookAt(VH),$.updateMatrixWorld(),this._updateMatrix($,this.matrix,this._frustum)}_updateMatrix(J,$,Q,Z){XW.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q.setFromProjectionMatrix(XW,J.coordinateSystem,J.reversedDepth);let K=this._frameExtents,W=Z?Z.z/K.x:1,X=Z?Z.w/K.y:1,Y=Z?Z.x/K.x:0,H=Z?Z.y/K.y:0;if(J.coordinateSystem===2001||J.reversedDepth)$.set(0.5*W,0,0,0.5*W+Y,0,0.5*X,0,0.5*X+H,0,0,1,0,0,0,0,1);else $.set(0.5*W,0,0,0.5*W+Y,0,0.5*X,0,0.5*X+H,0,0,0.5,0.5,0,0,0,1);$.multiply(XW)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var BZ=new T,DZ=new E9,S7=new T;class QK extends v9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $9,this.projectionMatrix=new $9,this.projectionMatrixInverse=new $9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,$){return super.copy(J,$),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(BZ,DZ,S7),S7.x===1&&S7.y===1&&S7.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(BZ,DZ,S7.set(1,1,1)).invert()}updateWorldMatrix(J,$,Q=!1){if(super.updateWorldMatrix(J,$,Q),this.matrixWorld.decompose(BZ,DZ,S7),S7.x===1&&S7.y===1&&S7.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(BZ,DZ,S7.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var G6=new T,BH=new R0,DH=new R0;class G8 extends QK{constructor(J=50,$=1,Q=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Q,this.far=Z,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let $=0.5*this.getFilmHeight()/J;this.fov=u6*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(x$*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return u6*2*Math.atan(Math.tan(x$*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,$,Q){G6.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(G6.x,G6.y).multiplyScalar(-J/G6.z),G6.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(G6.x,G6.y).multiplyScalar(-J/G6.z)}getViewSize(J,$){return this.getViewBounds(J,BH,DH),$.subVectors(DH,BH)}setViewOffset(J,$,Q,Z,K,W){if(this.aspect=J/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,$=J*Math.tan(x$*0.5*this.fov)/this.zoom,Q=2*$,Z=this.aspect*Q,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;K+=W.offsetX*Z/Y,$-=W.offsetY*Q/H,Z*=W.width/Y,Q*=W.height/H}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,$,$-Q,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}class T5 extends qQ{constructor(){super(new G8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let $=this.camera,Q=u6*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,K=J.distance||$.far;if(Q!==$.fov||Z!==$.aspect||K!==$.far)$.fov=Q,$.aspect=Z,$.far=K,$.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class Y$ extends X${constructor(J,$,Q=0,Z=Math.PI/3,K=0,W=2){super(J,$);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(v9.DEFAULT_UP),this.updateMatrix(),this.target=new v9,this.distance=Q,this.angle=Z,this.penumbra=K,this.decay=W,this.map=null,this.shadow=new T5}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let $=super.toJSON(J);if($.object.distance=this.distance,$.object.angle=this.angle,$.object.decay=this.decay,$.object.penumbra=this.penumbra,$.object.target=this.target.uuid,this.map&&this.map.isTexture)$.object.map=this.map.toJSON(J).uuid;return $.object.shadow=this.shadow.toJSON(),$}}class w5 extends qQ{constructor(){super(new G8(90,1,0.5,500));this.isPointLightShadow=!0}}class K6 extends X${constructor(J,$,Q=0,Z=2){super(J,$);this.isPointLight=!0,this.type="PointLight",this.distance=Q,this.decay=Z,this.shadow=new w5}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let $=super.toJSON(J);return $.object.distance=this.distance,$.object.decay=this.decay,$.object.shadow=this.shadow.toJSON(),$}}class W6 extends QK{constructor(J=-1,$=1,Q=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=$,this.top=Q,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,$,Q,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=Q-J,W=Q+J,X=Z+$,Y=Z-$;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=H*this.view.offsetX,W=K+H*this.view.width,X-=U*this.view.offsetY,Y=X-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}class S5 extends qQ{constructor(){super(new W6(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class H$ extends X${constructor(J,$){super(J,$);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(v9.DEFAULT_UP),this.updateMatrix(),this.target=new v9,this.shadow=new S5}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let $=super.toJSON(J);return $.object.shadow=this.shadow.toJSON(),$.object.target=this.target.uuid,$}}class z6{static extractUrlBase(J){let $=J.lastIndexOf("/");if($===-1)return"./";return J.slice(0,$+1)}static resolveURL(J,$){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test($)&&/^\//.test(J))$=$.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return $+J}}var YW=new WeakMap;class ZK extends Z6{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")r0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")r0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,$,Q,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=j7.get(`image-bitmap:${J}`);if(W!==void 0){if(K.manager.itemStart(J),W.then){W.then((H)=>{if(YW.has(W)===!0){if(Z)Z(YW.get(W));K.manager.itemError(J),K.manager.itemEnd(J)}else{if($)$(H);K.manager.itemEnd(J)}});return}setTimeout(function(){if($)$(W);K.manager.itemEnd(J)},0);return}let X={};X.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",X.headers=this.requestHeader,X.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,X).then(function(H){return H.blob()}).then(function(H){return createImageBitmap(H,Object.assign({},K.options,{colorSpaceConversion:"none"}))}).then(function(H){if(j7.add(`image-bitmap:${J}`,H),$)$(H);return K.manager.itemEnd(J),H}).catch(function(H){if(Z)Z(H);YW.set(Y,H),j7.remove(`image-bitmap:${J}`),K.manager.itemError(J),K.manager.itemEnd(J)});j7.add(`image-bitmap:${J}`,Y),K.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var pJ=-90,mJ=1;class PX extends v9{constructor(J,$,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new G8(pJ,mJ,J,$);Z.layers=this.layers,this.add(Z);let K=new G8(pJ,mJ,J,$);K.layers=this.layers,this.add(K);let W=new G8(pJ,mJ,J,$);W.layers=this.layers,this.add(W);let X=new G8(pJ,mJ,J,$);X.layers=this.layers,this.add(X);let Y=new G8(pJ,mJ,J,$);Y.layers=this.layers,this.add(Y);let H=new G8(pJ,mJ,J,$);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,$=this.children.concat(),[Q,Z,K,W,X,Y]=$;for(let H of $)this.remove(H);if(J===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of $)this.add(H),H.updateMatrixWorld()}update(J,$){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,H,U]=this.children,G=J.getRenderTarget(),F=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let O=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget(Q,0,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,K),J.setRenderTarget(Q,1,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,W),J.setRenderTarget(Q,2,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,X),J.setRenderTarget(Q,3,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,Y),J.setRenderTarget(Q,4,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,H),Q.texture.generateMipmaps=O,J.setRenderTarget(Q,5,Z),B&&J.autoClear===!1)J.clearDepth();J.render($,U),J.setRenderTarget(G,F,N),J.xr.enabled=q,Q.texture.needsPMREMUpdate=!0}}class IX extends G8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class KK{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=Z1.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function Z1(){if(this._document.hidden===!1)this.reset()}class zX{constructor(J,$,Q){this.binding=J,this.valueSize=Q;let Z,K,W;switch($){case"quaternion":Z=this._slerp,K=this._slerpAdditive,W=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(Q*6),this._workIndex=5;break;case"string":case"bool":Z=this._select,K=this._select,W=this._setAdditiveIdentityOther,this.buffer=Array(Q*5);break;default:Z=this._lerp,K=this._lerpAdditive,W=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(Q*5)}this._mixBufferRegion=Z,this._mixBufferRegionAdditive=K,this._setIdentity=W,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,$){let Q=this.buffer,Z=this.valueSize,K=J*Z+Z,W=this.cumulativeWeight;if(W===0){for(let X=0;X!==Z;++X)Q[K+X]=Q[X];W=$}else{W+=$;let X=$/W;this._mixBufferRegion(Q,K,0,X,Z)}this.cumulativeWeight=W}accumulateAdditive(J){let $=this.buffer,Q=this.valueSize,Z=Q*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive($,Z,0,J,Q),this.cumulativeWeightAdditive+=J}apply(J){let $=this.valueSize,Q=this.buffer,Z=J*$+$,K=this.cumulativeWeight,W=this.cumulativeWeightAdditive,X=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,K<1){let Y=$*this._origIndex;this._mixBufferRegion(Q,Z,Y,1-K,$)}if(W>0)this._mixBufferRegionAdditive(Q,Z,this._addIndex*$,1,$);for(let Y=$,H=$+$;Y!==H;++Y)if(Q[Y]!==Q[Y+$]){X.setValue(Q,Z);break}}saveOriginalState(){let J=this.binding,$=this.buffer,Q=this.valueSize,Z=Q*this._origIndex;J.getValue($,Z);for(let K=Q,W=Z;K!==W;++K)$[K]=$[Z+K%Q];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,$=J+this.valueSize;for(let Q=J;Q<$;Q++)this.buffer[Q]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,$=this._addIndex*this.valueSize;for(let Q=0;Q<this.valueSize;Q++)this.buffer[$+Q]=this.buffer[J+Q]}_select(J,$,Q,Z,K){if(Z>=0.5)for(let W=0;W!==K;++W)J[$+W]=J[Q+W]}_slerp(J,$,Q,Z){E9.slerpFlat(J,$,J,$,J,Q,Z)}_slerpAdditive(J,$,Q,Z,K){let W=this._workIndex*K;E9.multiplyQuaternionsFlat(J,W,J,$,J,Q),E9.slerpFlat(J,$,J,$,J,W,Z)}_lerp(J,$,Q,Z,K){let W=1-Z;for(let X=0;X!==K;++X){let Y=$+X;J[Y]=J[Y]*W+J[Q+X]*Z}}_lerpAdditive(J,$,Q,Z,K){for(let W=0;W!==K;++W){let X=$+W;J[X]=J[X]+J[Q+W]*Z}}}var AX="\\[\\]\\.:\\/",K1=new RegExp("["+AX+"]","g"),_X="[^"+AX+"]",W1="[^"+AX.replace("\\.","")+"]",X1=/((?:WC+[\/:])*)/.source.replace("WC",_X),Y1=/(WCOD+)?/.source.replace("WCOD",W1),H1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_X),U1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_X),N1=new RegExp("^"+X1+Y1+H1+U1+"$"),G1=["material","materials","bones","map"];class j5{constructor(J,$,Q){let Z=Q||f9.parseTrackName($);this._targetGroup=J,this._bindings=J.subscribe_($,Z)}getValue(J,$){this.bind();let Q=this._targetGroup.nCachedObjects_,Z=this._bindings[Q];if(Z!==void 0)Z.getValue(J,$)}setValue(J,$){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=Q.length;Z!==K;++Z)Q[Z].setValue(J,$)}bind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].bind()}unbind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].unbind()}}class f9{constructor(J,$,Q){this.path=$,this.parsedPath=Q||f9.parseTrackName($),this.node=f9.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,$,Q){if(!(J&&J.isAnimationObjectGroup))return new f9(J,$,Q);else return new f9.Composite(J,$,Q)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(K1,"")}static parseTrackName(J){let $=N1.exec(J);if($===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Q={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},Z=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=Q.nodeName.substring(Z+1);if(G1.indexOf(K)!==-1)Q.nodeName=Q.nodeName.substring(0,Z),Q.objectName=K}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Q}static findNode(J,$){if($===void 0||$===""||$==="."||$===-1||$===J.name||$===J.uuid)return J;if(J.skeleton){let Q=J.skeleton.getBoneByName($);if(Q!==void 0)return Q}if(J.children){let Q=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===$||X.uuid===$)return X;let Y=Q(X.children);if(Y)return Y}return null},Z=Q(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,$){J[$]=this.targetObject[this.propertyName]}_getValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)J[$++]=Q[Z]}_getValue_arrayElement(J,$){J[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,$){this.resolvedProperty.toArray(J,$)}_setValue_direct(J,$){this.targetObject[this.propertyName]=J[$]}_setValue_direct_setNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++]}_setValue_array_setNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,$){this.resolvedProperty[this.propertyIndex]=J[$]}_setValue_arrayElement_setNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,$){this.resolvedProperty.fromArray(J,$)}_setValue_fromArray_setNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,$){this.bind(),this.getValue(J,$)}_setValue_unbound(J,$){this.bind(),this.setValue(J,$)}bind(){let J=this.node,$=this.parsedPath,Q=$.objectName,Z=$.propertyName,K=$.propertyIndex;if(!J)J=f9.findNode(this.rootNode,$.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){r0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let H=$.objectIndex;switch(Q){case"materials":if(!J.material){Z9("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){Z9("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){Z9("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){Z9("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){Z9("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Q]===void 0){Z9("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Q]}if(H!==void 0){if(J[H]===void 0){Z9("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[Z];if(W===void 0){let H=$.nodeName;Z9("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){Z9("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){Z9("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}f9.Composite=j5;f9.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};f9.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};f9.prototype.GetterByBindingType=[f9.prototype._getValue_direct,f9.prototype._getValue_array,f9.prototype._getValue_arrayElement,f9.prototype._getValue_toArray];f9.prototype.SetterByBindingTypeAndVersioning=[[f9.prototype._setValue_direct,f9.prototype._setValue_direct_setNeedsUpdate,f9.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[f9.prototype._setValue_array,f9.prototype._setValue_array_setNeedsUpdate,f9.prototype._setValue_array_setMatrixWorldNeedsUpdate],[f9.prototype._setValue_arrayElement,f9.prototype._setValue_arrayElement_setNeedsUpdate,f9.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[f9.prototype._setValue_fromArray,f9.prototype._setValue_fromArray_setNeedsUpdate,f9.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class TX{constructor(J,$,Q=null,Z=$.blendMode){this._mixer=J,this._clip=$,this._localRoot=Q,this.blendMode=Z;let K=$.tracks,W=K.length,X=Array(W),Y={endingStart:2400,endingEnd:2400};for(let H=0;H!==W;++H){let U=K[H].createInterpolant(null);X[H]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=X,this._propertyBindings=Array(W),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,$){return this.loop=J,this.repetitions=$,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,$,Q=!1){if(J.fadeOut($),this.fadeIn($),Q===!0){let Z=this._clip.duration,K=J._clip.duration,W=K/Z,X=Z/K;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,W,$),this.warp(X,1,$)}return this}crossFadeTo(J,$,Q=!1){return J.crossFadeFrom(this,$,Q)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,$,Q){let Z=this._mixer,K=Z.time,W=this.timeScale,X=this._timeScaleInterpolant;if(X===null)X=Z._lendControlInterpolant(),this._timeScaleInterpolant=X;let{parameterPositions:Y,sampleValues:H}=X;return Y[0]=K,Y[1]=K+Q,H[0]=J/W,H[1]=$/W,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,$,Q,Z){if(!this.enabled){this._updateWeight(J);return}let K=this._startTime;if(K!==null){let Y=(J-K)*Q;if(Y<0||Q===0)$=0;else this._startTime=null,$=Q*Y}$*=this._updateTimeScale(J);let W=this._updateTime($),X=this._updateWeight(J);if(X>0){let Y=this._interpolants,H=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,G=Y.length;U!==G;++U)Y[U].evaluate(W),H[U].accumulateAdditive(X);break;case 2500:default:for(let U=0,G=Y.length;U!==G;++U)Y[U].evaluate(W),H[U].accumulate(Z,X)}}}_updateWeight(J){let $=0;if(this.enabled){$=this.weight;let Q=this._weightInterpolant;if(Q!==null){let Z=Q.evaluate(J)[0];if($*=Z,J>Q.parameterPositions[1]){if(this.stopFading(),Z===0)this.enabled=!1}}}return this._effectiveWeight=$,$}_updateTimeScale(J){let $=0;if(!this.paused){$=this.timeScale;let Q=this._timeScaleInterpolant;if(Q!==null){let Z=Q.evaluate(J)[0];if($*=Z,J>Q.parameterPositions[1]){if($===0)this.paused=!0;else{if(this._restoreTimeScale!==null)$=this._restoreTimeScale;this.timeScale=$}this.stopWarping()}}}return this._effectiveTimeScale=$,$}_updateTime(J){let $=this._clip.duration,Q=this.loop,Z=this.time+J,K=this._loopCount,W=Q===2202;if(J===0){if(K===-1)return Z;return W&&(K&1)===1?$-Z:Z}if(Q===2200){if(K===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(Z>=$)Z=$;else if(Z<0)Z=0;else{this.time=Z;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(K===-1)if(J>=0)K=0,this._setEndings(!0,this.repetitions===0,W);else this._setEndings(this.repetitions===0,!0,W);if(Z>=$||Z<0){let X=Math.floor(Z/$);Z-=$*X,K+=Math.abs(X);let Y=this.repetitions-K;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;Z=J>0?$:0,this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let H=J<0;this._setEndings(H,!H,W)}else this._setEndings(!1,!1,W);this._loopCount=K,this.time=Z,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:X})}}else this._loopCount=K,this.time=Z;if(W&&(K&1)===1)return $-Z}return Z}_setEndings(J,$,Q){let Z=this._interpolantSettings;if(Q)Z.endingStart=2401,Z.endingEnd=2401;else{if(J)Z.endingStart=this.zeroSlopeAtStart?2401:2400;else Z.endingStart=2402;if($)Z.endingEnd=this.zeroSlopeAtEnd?2401:2400;else Z.endingEnd=2402}}_scheduleFading(J,$,Q){let Z=this._mixer,K=Z.time,W=this._weightInterpolant;if(W===null)W=Z._lendControlInterpolant(),this._weightInterpolant=W;let{parameterPositions:X,sampleValues:Y}=W;return X[0]=K,Y[0]=$,X[1]=K+J,Y[1]=Q,this}}var F1=new Float32Array(1);class YJ extends M7{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,$){let Q=J._localRoot||this._root,Z=J._clip.tracks,K=Z.length,W=J._propertyBindings,X=J._interpolants,Y=Q.uuid,H=this._bindingsByRootAndName,U=H[Y];if(U===void 0)U={},H[Y]=U;for(let G=0;G!==K;++G){let F=Z[G],N=F.name,q=U[N];if(q!==void 0)++q.referenceCount,W[G]=q;else{if(q=W[G],q!==void 0){if(q._cacheIndex===null)++q.referenceCount,this._addInactiveBinding(q,Y,N);continue}let O=$&&$._propertyBindings[G].binding.parsedPath;q=new zX(f9.create(Q,N,O),F.ValueTypeName,F.getValueSize()),++q.referenceCount,this._addInactiveBinding(q,Y,N),W[G]=q}X[G].resultBuffer=q.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let Q=(J._localRoot||this._root).uuid,Z=J._clip.uuid,K=this._actionsByClip[Z];this._bindAction(J,K&&K.knownActions[0]),this._addInactiveAction(J,Z,Q)}let $=J._propertyBindings;for(let Q=0,Z=$.length;Q!==Z;++Q){let K=$[Q];if(K.useCount++===0)this._lendBinding(K),K.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let $=J._propertyBindings;for(let Q=0,Z=$.length;Q!==Z;++Q){let K=$[Q];if(--K.useCount===0)K.restoreOriginalState(),this._takeBackBinding(K)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let $=J._cacheIndex;return $!==null&&$<this._nActiveActions}_addInactiveAction(J,$,Q){let Z=this._actions,K=this._actionsByClip,W=K[$];if(W===void 0)W={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,K[$]=W;else{let X=W.knownActions;J._byClipCacheIndex=X.length,X.push(J)}J._cacheIndex=Z.length,Z.push(J),W.actionByRoot[Q]=J}_removeInactiveAction(J){let $=this._actions,Q=$[$.length-1],Z=J._cacheIndex;Q._cacheIndex=Z,$[Z]=Q,$.pop(),J._cacheIndex=null;let K=J._clip.uuid,W=this._actionsByClip,X=W[K],Y=X.knownActions,H=Y[Y.length-1],U=J._byClipCacheIndex;H._byClipCacheIndex=U,Y[U]=H,Y.pop(),J._byClipCacheIndex=null;let G=X.actionByRoot,F=(J._localRoot||this._root).uuid;if(delete G[F],Y.length===0)delete W[K];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let $=J._propertyBindings;for(let Q=0,Z=$.length;Q!==Z;++Q){let K=$[Q];if(--K.referenceCount===0)this._removeInactiveBinding(K)}}_lendAction(J){let $=this._actions,Q=J._cacheIndex,Z=this._nActiveActions++,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_takeBackAction(J){let $=this._actions,Q=J._cacheIndex,Z=--this._nActiveActions,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_addInactiveBinding(J,$,Q){let Z=this._bindingsByRootAndName,K=this._bindings,W=Z[$];if(W===void 0)W={},Z[$]=W;W[Q]=J,J._cacheIndex=K.length,K.push(J)}_removeInactiveBinding(J){let $=this._bindings,Q=J.binding,Z=Q.rootNode.uuid,K=Q.path,W=this._bindingsByRootAndName,X=W[Z],Y=$[$.length-1],H=J._cacheIndex;if(Y._cacheIndex=H,$[H]=Y,$.pop(),delete X[K],Object.keys(X).length===0)delete W[Z]}_lendBinding(J){let $=this._bindings,Q=J._cacheIndex,Z=this._nActiveBindings++,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_takeBackBinding(J){let $=this._bindings,Q=J._cacheIndex,Z=--this._nActiveBindings,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_lendControlInterpolant(){let J=this._controlInterpolants,$=this._nActiveControlInterpolants++,Q=J[$];if(Q===void 0)Q=new tZ(new Float32Array(2),new Float32Array(2),1,F1),Q.__cacheIndex=$,J[$]=Q;return Q}_takeBackControlInterpolant(J){let $=this._controlInterpolants,Q=J.__cacheIndex,Z=--this._nActiveControlInterpolants,K=$[Z];J.__cacheIndex=Z,$[Z]=J,K.__cacheIndex=Q,$[Q]=K}clipAction(J,$,Q){let Z=$||this._root,K=Z.uuid,W=typeof J==="string"?sJ.findByName(Z,J):J,X=W!==null?W.uuid:J,Y=this._actionsByClip[X],H=null;if(Q===void 0)if(W!==null)Q=W.blendMode;else Q=2500;if(Y!==void 0){let G=Y.actionByRoot[K];if(G!==void 0&&G.blendMode===Q)return G;if(H=Y.knownActions[0],W===null)W=H._clip}if(W===null)return null;let U=new TX(this,W,$,Q);return this._bindAction(U,H),this._addInactiveAction(U,X,K),U}existingAction(J,$){let Q=$||this._root,Z=Q.uuid,K=typeof J==="string"?sJ.findByName(Q,J):J,W=K?K.uuid:J,X=this._actionsByClip[W];if(X!==void 0)return X.actionByRoot[Z]||null;return null}stopAllAction(){let J=this._actions,$=this._nActiveActions;for(let Q=$-1;Q>=0;--Q)J[Q].stop();return this}update(J){J*=this.timeScale;let $=this._actions,Q=this._nActiveActions,Z=this.time+=J,K=Math.sign(J),W=this._accuIndex^=1;for(let H=0;H!==Q;++H)$[H]._update(Z,J,K,W);let X=this._bindings,Y=this._nActiveBindings;for(let H=0;H!==Y;++H)X[H].apply(W);return this}setTime(J){this.time=0;for(let $=0;$<this._actions.length;$++)this._actions[$].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let $=this._actions,Q=J.uuid,Z=this._actionsByClip,K=Z[Q];if(K!==void 0){let W=K.knownActions;for(let X=0,Y=W.length;X!==Y;++X){let H=W[X];this._deactivateAction(H);let U=H._cacheIndex,G=$[$.length-1];H._cacheIndex=null,H._byClipCacheIndex=null,G._cacheIndex=U,$[U]=G,$.pop(),this._removeInactiveBindingsForAction(H)}delete Z[Q]}}uncacheRoot(J){let $=J.uuid,Q=this._actionsByClip;for(let W in Q){let X=Q[W].actionByRoot,Y=X[$];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let Z=this._bindingsByRootAndName,K=Z[$];if(K!==void 0)for(let W in K){let X=K[W];X.restoreOriginalState(),this._removeInactiveBinding(X)}}uncacheAction(J,$){let Q=this.existingAction(J,$);if(Q!==null)this._deactivateAction(Q),this._removeInactiveAction(Q)}}class WK{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,r0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let $=performance.now();J=($-this.oldTime)/1000,this.oldTime=$,this.elapsedTime+=J}return J}}class OQ{constructor(J=1,$=0,Q=0){this.radius=J,this.phi=$,this.theta=Q}set(J,$,Q){return this.radius=J,this.phi=$,this.theta=Q,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=O9(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,$,Q){if(this.radius=Math.sqrt(J*J+$*$+Q*Q),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Q),this.phi=Math.acos(O9($/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class wX{static{wX.prototype.isMatrix2=!0}constructor(J,$,Q,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,$,Q,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,$=0){for(let Q=0;Q<4;Q++)this.elements[Q]=J[Q+$];return this}set(J,$,Q,Z){let K=this.elements;return K[0]=J,K[2]=$,K[1]=Q,K[3]=Z,this}}class XK extends M7{constructor(J,$=null){super();this.object=J,this.domElement=$,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function SX(J,$,Q,Z){let K=E1(Z);switch(Q){case 1021:return J*$;case 1028:return J*$/K.components*K.byteLength;case 1029:return J*$/K.components*K.byteLength;case 1030:return J*$*2/K.components*K.byteLength;case 1031:return J*$*2/K.components*K.byteLength;case 1022:return J*$*3/K.components*K.byteLength;case 1023:return J*$*4/K.components*K.byteLength;case 1033:return J*$*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max($,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max($,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor(($+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor(($+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor(($+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor(($+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor(($+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor(($+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor(($+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor(($+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor(($+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor(($+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor(($+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor(($+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor(($+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil($/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil($/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil($/4)*16}throw Error(`Unable to determine texture byte length for ${Q} format.`)}function E1(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)r0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function JU(){let J=null,$=!1,Q=null,Z=null;function K(W,X){Z=J.requestAnimationFrame(K),Q(W,X)}return{start:function(){if($===!0)return;if(Q===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),$=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);$=!1},setAnimationLoop:function(W){Q=W},setContext:function(W){J=W}}}function q1(J){let $=new WeakMap;function Q(Y,H){let{array:U,usage:G}=Y,F=U.byteLength,N=J.createBuffer();J.bindBuffer(H,N),J.bufferData(H,U,G),Y.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)q=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:F}}function Z(Y,H,U){let{array:G,updateRanges:F}=H;if(J.bindBuffer(U,Y),F.length===0)J.bufferSubData(U,0,G);else{F.sort((q,O)=>q.start-O.start);let N=0;for(let q=1;q<F.length;q++){let O=F[N],B=F[q];if(B.start<=O.start+O.count+1)O.count=Math.max(O.count,B.start+B.count-O.start);else++N,F[N]=B}F.length=N+1;for(let q=0,O=F.length;q<O;q++){let B=F[q];J.bufferSubData(U,B.start*G.BYTES_PER_ELEMENT,G,B.start,B.count)}H.clearUpdateRanges()}H.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return $.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=$.get(Y);if(H)J.deleteBuffer(H.buffer),$.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=$.get(Y);if(!G||G.version<Y.version)$.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=$.get(Y);if(U===void 0)$.set(Y,Q(Y,H));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,H),U.version=Y.version}}return{get:K,remove:W,update:X}}var O1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R1=`#ifdef USE_ALPHAHASH
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
#endif`,L1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k1=`#ifdef USE_AOMAP
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
#endif`,M1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C1=`#ifdef USE_BATCHING
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
#endif`,P1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_1=`#ifdef USE_IRIDESCENCE
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
#endif`,T1=`#ifdef USE_BUMPMAP
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,x1=`#define PI 3.141592653589793
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
} // validated`,g1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p1=`vec3 transformedNormal = objectNormal;
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
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c1="gl_FragColor = linearToOutputTexel( gl_FragColor );",n1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$F=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QF=`#ifdef USE_GRADIENTMAP
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
}`,ZF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XF=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,YF=`#ifdef USE_ENVMAP
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
#endif`,HF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FF=`PhysicalMaterial material;
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
#endif`,EF=`uniform sampler2D dfgLUT;
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
}`,qF=`
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
#endif`,OF=`#if defined( RE_IndirectDiffuse )
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
#endif`,RF=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LF=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,VF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IF=`#if defined( USE_POINTS_UV )
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
#endif`,zF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_F=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TF=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wF=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SF=`#ifdef USE_MORPHTARGETS
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
#endif`,jF=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vF=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xF=`#ifdef USE_NORMALMAP
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
#endif`,gF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JE=`float getShadowMask() {
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
}`,$E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
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
#endif`,ZE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KE=`#ifdef USE_SKINNING
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
#endif`,WE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UE=`#ifdef USE_TRANSMISSION
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
#endif`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,OE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RE=`uniform sampler2D t2D;
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
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
}`,ME=`#if DEPTH_PACKING == 3200
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
}`,CE=`#define DISTANCE
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
}`,PE=`#define DISTANCE
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
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`uniform float scale;
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
}`,_E=`uniform vec3 diffuse;
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
}`,TE=`#include <common>
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
}`,wE=`uniform vec3 diffuse;
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
}`,SE=`#define LAMBERT
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
}`,jE=`#define LAMBERT
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
}`,yE=`#define MATCAP
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
}`,vE=`#define MATCAP
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
}`,fE=`#define NORMAL
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
}`,bE=`#define NORMAL
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
}`,hE=`#define PHONG
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
}`,xE=`#define PHONG
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
}`,gE=`#define STANDARD
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
}`,pE=`#define STANDARD
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
}`,mE=`#define TOON
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
}`,lE=`#define TOON
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
}`,uE=`uniform float size;
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
}`,dE=`uniform vec3 diffuse;
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
}`,cE=`#include <common>
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
}`,nE=`uniform vec3 color;
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
}`,sE=`uniform float rotation;
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
}`,iE=`uniform vec3 diffuse;
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
}`,B9={alphahash_fragment:O1,alphahash_pars_fragment:R1,alphamap_fragment:L1,alphamap_pars_fragment:V1,alphatest_fragment:B1,alphatest_pars_fragment:D1,aomap_fragment:k1,aomap_pars_fragment:M1,batching_pars_vertex:C1,batching_vertex:P1,begin_vertex:I1,beginnormal_vertex:z1,bsdfs:A1,iridescence_fragment:_1,bumpmap_pars_fragment:T1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:y1,color_fragment:v1,color_pars_fragment:f1,color_pars_vertex:b1,color_vertex:h1,common:x1,cube_uv_reflection_fragment:g1,defaultnormal_vertex:p1,displacementmap_pars_vertex:m1,displacementmap_vertex:l1,emissivemap_fragment:u1,emissivemap_pars_fragment:d1,colorspace_fragment:c1,colorspace_pars_fragment:n1,envmap_fragment:s1,envmap_common_pars_fragment:i1,envmap_pars_fragment:o1,envmap_pars_vertex:a1,envmap_physical_pars_fragment:YF,envmap_vertex:r1,fog_vertex:t1,fog_pars_vertex:e1,fog_fragment:JF,fog_pars_fragment:$F,gradientmap_pars_fragment:QF,lightmap_pars_fragment:ZF,lights_lambert_fragment:KF,lights_lambert_pars_fragment:WF,lights_pars_begin:XF,lights_toon_fragment:HF,lights_toon_pars_fragment:UF,lights_phong_fragment:NF,lights_phong_pars_fragment:GF,lights_physical_fragment:FF,lights_physical_pars_fragment:EF,lights_fragment_begin:qF,lights_fragment_maps:OF,lights_fragment_end:RF,lightprobes_pars_fragment:LF,logdepthbuf_fragment:VF,logdepthbuf_pars_fragment:BF,logdepthbuf_pars_vertex:DF,logdepthbuf_vertex:kF,map_fragment:MF,map_pars_fragment:CF,map_particle_fragment:PF,map_particle_pars_fragment:IF,metalnessmap_fragment:zF,metalnessmap_pars_fragment:AF,morphinstance_vertex:_F,morphcolor_vertex:TF,morphnormal_vertex:wF,morphtarget_pars_vertex:SF,morphtarget_vertex:jF,normal_fragment_begin:yF,normal_fragment_maps:vF,normal_pars_fragment:fF,normal_pars_vertex:bF,normal_vertex:hF,normalmap_pars_fragment:xF,clearcoat_normal_fragment_begin:gF,clearcoat_normal_fragment_maps:pF,clearcoat_pars_fragment:mF,iridescence_pars_fragment:lF,opaque_fragment:uF,packing:dF,premultiplied_alpha_fragment:cF,project_vertex:nF,dithering_fragment:sF,dithering_pars_fragment:iF,roughnessmap_fragment:oF,roughnessmap_pars_fragment:aF,shadowmap_pars_fragment:rF,shadowmap_pars_vertex:tF,shadowmap_vertex:eF,shadowmask_pars_fragment:JE,skinbase_vertex:$E,skinning_pars_vertex:QE,skinning_vertex:ZE,skinnormal_vertex:KE,specularmap_fragment:WE,specularmap_pars_fragment:XE,tonemapping_fragment:YE,tonemapping_pars_fragment:HE,transmission_fragment:UE,transmission_pars_fragment:NE,uv_pars_fragment:GE,uv_pars_vertex:FE,uv_vertex:EE,worldpos_vertex:qE,background_vert:OE,background_frag:RE,backgroundCube_vert:LE,backgroundCube_frag:VE,cube_vert:BE,cube_frag:DE,depth_vert:kE,depth_frag:ME,distance_vert:CE,distance_frag:PE,equirect_vert:IE,equirect_frag:zE,linedashed_vert:AE,linedashed_frag:_E,meshbasic_vert:TE,meshbasic_frag:wE,meshlambert_vert:SE,meshlambert_frag:jE,meshmatcap_vert:yE,meshmatcap_frag:vE,meshnormal_vert:fE,meshnormal_frag:bE,meshphong_vert:hE,meshphong_frag:xE,meshphysical_vert:gE,meshphysical_frag:pE,meshtoon_vert:mE,meshtoon_frag:lE,points_vert:uE,points_frag:dE,shadow_vert:cE,shadow_frag:nE,sprite_vert:sE,sprite_frag:iE},p0={common:{diffuse:{value:new b0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H9},alphaMap:{value:null},alphaMapTransform:{value:new H9},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H9}},envmap:{envMap:{value:null},envMapRotation:{value:new H9},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H9}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H9}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H9},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H9},normalScale:{value:new R0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H9},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H9}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H9}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H9}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new b0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new b0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H9},alphaTest:{value:0},uvTransform:{value:new H9}},sprite:{diffuse:{value:new b0(16777215)},opacity:{value:1},center:{value:new R0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H9},alphaMap:{value:null},alphaMapTransform:{value:new H9},alphaTest:{value:0}}},p7={basic:{uniforms:_8([p0.common,p0.specularmap,p0.envmap,p0.aomap,p0.lightmap,p0.fog]),vertexShader:B9.meshbasic_vert,fragmentShader:B9.meshbasic_frag},lambert:{uniforms:_8([p0.common,p0.specularmap,p0.envmap,p0.aomap,p0.lightmap,p0.emissivemap,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.fog,p0.lights,{emissive:{value:new b0(0)},envMapIntensity:{value:1}}]),vertexShader:B9.meshlambert_vert,fragmentShader:B9.meshlambert_frag},phong:{uniforms:_8([p0.common,p0.specularmap,p0.envmap,p0.aomap,p0.lightmap,p0.emissivemap,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.fog,p0.lights,{emissive:{value:new b0(0)},specular:{value:new b0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:B9.meshphong_vert,fragmentShader:B9.meshphong_frag},standard:{uniforms:_8([p0.common,p0.envmap,p0.aomap,p0.lightmap,p0.emissivemap,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.roughnessmap,p0.metalnessmap,p0.fog,p0.lights,{emissive:{value:new b0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:B9.meshphysical_vert,fragmentShader:B9.meshphysical_frag},toon:{uniforms:_8([p0.common,p0.aomap,p0.lightmap,p0.emissivemap,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.gradientmap,p0.fog,p0.lights,{emissive:{value:new b0(0)}}]),vertexShader:B9.meshtoon_vert,fragmentShader:B9.meshtoon_frag},matcap:{uniforms:_8([p0.common,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.fog,{matcap:{value:null}}]),vertexShader:B9.meshmatcap_vert,fragmentShader:B9.meshmatcap_frag},points:{uniforms:_8([p0.points,p0.fog]),vertexShader:B9.points_vert,fragmentShader:B9.points_frag},dashed:{uniforms:_8([p0.common,p0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:B9.linedashed_vert,fragmentShader:B9.linedashed_frag},depth:{uniforms:_8([p0.common,p0.displacementmap]),vertexShader:B9.depth_vert,fragmentShader:B9.depth_frag},normal:{uniforms:_8([p0.common,p0.bumpmap,p0.normalmap,p0.displacementmap,{opacity:{value:1}}]),vertexShader:B9.meshnormal_vert,fragmentShader:B9.meshnormal_frag},sprite:{uniforms:_8([p0.sprite,p0.fog]),vertexShader:B9.sprite_vert,fragmentShader:B9.sprite_frag},background:{uniforms:{uvTransform:{value:new H9},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:B9.background_vert,fragmentShader:B9.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H9}},vertexShader:B9.backgroundCube_vert,fragmentShader:B9.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:B9.cube_vert,fragmentShader:B9.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:B9.equirect_vert,fragmentShader:B9.equirect_frag},distance:{uniforms:_8([p0.common,p0.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:B9.distance_vert,fragmentShader:B9.distance_frag},shadow:{uniforms:_8([p0.lights,p0.fog,{color:{value:new b0(0)},opacity:{value:1}}]),vertexShader:B9.shadow_vert,fragmentShader:B9.shadow_frag}};p7.physical={uniforms:_8([p7.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H9},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H9},clearcoatNormalScale:{value:new R0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H9},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H9},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H9},sheen:{value:0},sheenColor:{value:new b0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H9},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H9},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H9},transmissionSamplerSize:{value:new R0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H9},attenuationDistance:{value:0},attenuationColor:{value:new b0(0)},specularColor:{value:new b0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H9},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H9},anisotropyVector:{value:new R0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H9}}]),vertexShader:B9.meshphysical_vert,fragmentShader:B9.meshphysical_frag};var YK={r:0,b:0,g:0},oE=new $9,$U=new H9;$U.set(-1,0,0,0,1,0,0,0,1);function aE(J,$,Q,Z,K,W){let X=new b0(0),Y=K===!0?0:1,H,U,G=null,F=0,N=null;function q(P){let k=P.isScene===!0?P.background:null;if(k&&k.isTexture){let V=P.backgroundBlurriness>0;k=$.get(k,V)}return k}function O(P){let k=!1,V=q(P);if(V===null)R(X,Y);else if(V&&V.isColor)R(V,1),k=!0;let z=J.xr.getEnvironmentBlendMode();if(z==="additive")Q.buffers.color.setClear(0,0,0,1,W);else if(z==="alpha-blend")Q.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||k)Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(P,k){let V=q(k);if(V&&(V.isCubeTexture||V.mapping===e$)){if(U===void 0)U=new A0(new j9(1,1,1),new e9({name:"BackgroundCubeMaterial",uniforms:WJ(p7.backgroundCube.uniforms),vertexShader:p7.backgroundCube.vertexShader,fragmentShader:p7.backgroundCube.fragmentShader,side:C8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(z,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(oE.makeRotationFromEuler(k.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply($U);if(U.material.toneMapped=R9.getTransfer(V.colorSpace)!==d9,G!==V||F!==V.version||N!==J.toneMapping)U.material.needsUpdate=!0,G=V,F=V.version,N=J.toneMapping;U.layers.enableAll(),P.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new A0(new V9(2,2),new e9({name:"BackgroundMaterial",uniforms:WJ(p7.background.uniforms),vertexShader:p7.background.vertexShader,fragmentShader:p7.background.fragmentShader,side:L6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,H.material.toneMapped=R9.getTransfer(V.colorSpace)!==d9,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),G!==V||F!==V.version||N!==J.toneMapping)H.material.needsUpdate=!0,G=V,F=V.version,N=J.toneMapping;H.layers.enableAll(),P.unshift(H,H.geometry,H.material,0,0,null)}}function R(P,k){P.getRGB(YK,OX(J)),Q.buffers.color.setClear(YK.r,YK.g,YK.b,k,W)}function E(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(P,k=1){X.set(P),Y=k,R(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(P){Y=P,R(X,Y)},render:O,addToRenderList:B,dispose:E}}function rE(J,$){let Q=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=N(null),W=K,X=!1;function Y(b,l,r,v,y){let h=!1,f=F(b,v,r,l);if(W!==f)W=f,U(W.object);if(h=q(b,v,r,y),h)O(b,v,r,y);if(y!==null)$.update(y,J.ELEMENT_ARRAY_BUFFER);if(h||X){if(X=!1,V(b,l,r,v),y!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,$.get(y).buffer)}}function H(){return J.createVertexArray()}function U(b){return J.bindVertexArray(b)}function G(b){return J.deleteVertexArray(b)}function F(b,l,r,v){let y=v.wireframe===!0,h=Z[l.id];if(h===void 0)h={},Z[l.id]=h;let f=b.isInstancedMesh===!0?b.id:0,o=h[f];if(o===void 0)o={},h[f]=o;let g=o[r.id];if(g===void 0)g={},o[r.id]=g;let a=g[y];if(a===void 0)a=N(H()),g[y]=a;return a}function N(b){let l=[],r=[],v=[];for(let y=0;y<Q;y++)l[y]=0,r[y]=0,v[y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:l,enabledAttributes:r,attributeDivisors:v,object:b,attributes:{},index:null}}function q(b,l,r,v){let y=W.attributes,h=l.attributes,f=0,o=r.getAttributes();for(let g in o)if(o[g].location>=0){let j=y[g],i=h[g];if(i===void 0){if(g==="instanceMatrix"&&b.instanceMatrix)i=b.instanceMatrix;if(g==="instanceColor"&&b.instanceColor)i=b.instanceColor}if(j===void 0)return!0;if(j.attribute!==i)return!0;if(i&&j.data!==i.data)return!0;f++}if(W.attributesNum!==f)return!0;if(W.index!==v)return!0;return!1}function O(b,l,r,v){let y={},h=l.attributes,f=0,o=r.getAttributes();for(let g in o)if(o[g].location>=0){let j=h[g];if(j===void 0){if(g==="instanceMatrix"&&b.instanceMatrix)j=b.instanceMatrix;if(g==="instanceColor"&&b.instanceColor)j=b.instanceColor}let i={};if(i.attribute=j,j&&j.data)i.data=j.data;y[g]=i,f++}W.attributes=y,W.attributesNum=f,W.index=v}function B(){let b=W.newAttributes;for(let l=0,r=b.length;l<r;l++)b[l]=0}function R(b){E(b,0)}function E(b,l){let{newAttributes:r,enabledAttributes:v,attributeDivisors:y}=W;if(r[b]=1,v[b]===0)J.enableVertexAttribArray(b),v[b]=1;if(y[b]!==l)J.vertexAttribDivisor(b,l),y[b]=l}function P(){let{newAttributes:b,enabledAttributes:l}=W;for(let r=0,v=l.length;r<v;r++)if(l[r]!==b[r])J.disableVertexAttribArray(r),l[r]=0}function k(b,l,r,v,y,h,f){if(f===!0)J.vertexAttribIPointer(b,l,r,y,h);else J.vertexAttribPointer(b,l,r,v,y,h)}function V(b,l,r,v){B();let y=v.attributes,h=r.getAttributes(),f=l.defaultAttributeValues;for(let o in h){let g=h[o];if(g.location>=0){let a=y[o];if(a===void 0){if(o==="instanceMatrix"&&b.instanceMatrix)a=b.instanceMatrix;if(o==="instanceColor"&&b.instanceColor)a=b.instanceColor}if(a!==void 0){let{normalized:j,itemSize:i}=a,X0=$.get(a);if(X0===void 0)continue;let{buffer:K0,type:H0,bytesPerElement:Z0}=X0,S=H0===J.INT||H0===J.UNSIGNED_INT||a.gpuType===RW;if(a.isInterleavedBufferAttribute){let x=a.data,s=x.stride,Y0=a.offset;if(x.isInstancedInterleavedBuffer){for(let t=0;t<g.locationSize;t++)E(g.location+t,x.meshPerAttribute);if(b.isInstancedMesh!==!0&&v._maxInstanceCount===void 0)v._maxInstanceCount=x.meshPerAttribute*x.count}else for(let t=0;t<g.locationSize;t++)R(g.location+t);J.bindBuffer(J.ARRAY_BUFFER,K0);for(let t=0;t<g.locationSize;t++)k(g.location+t,i/g.locationSize,H0,j,s*Z0,(Y0+i/g.locationSize*t)*Z0,S)}else{if(a.isInstancedBufferAttribute){for(let x=0;x<g.locationSize;x++)E(g.location+x,a.meshPerAttribute);if(b.isInstancedMesh!==!0&&v._maxInstanceCount===void 0)v._maxInstanceCount=a.meshPerAttribute*a.count}else for(let x=0;x<g.locationSize;x++)R(g.location+x);J.bindBuffer(J.ARRAY_BUFFER,K0);for(let x=0;x<g.locationSize;x++)k(g.location+x,i/g.locationSize,H0,j,i*Z0,i/g.locationSize*x*Z0,S)}}else if(f!==void 0){let j=f[o];if(j!==void 0)switch(j.length){case 2:J.vertexAttrib2fv(g.location,j);break;case 3:J.vertexAttrib3fv(g.location,j);break;case 4:J.vertexAttrib4fv(g.location,j);break;default:J.vertexAttrib1fv(g.location,j)}}}}P()}function z(){M();for(let b in Z){let l=Z[b];for(let r in l){let v=l[r];for(let y in v){let h=v[y];for(let f in h)G(h[f].object),delete h[f];delete v[y]}}delete Z[b]}}function w(b){if(Z[b.id]===void 0)return;let l=Z[b.id];for(let r in l){let v=l[r];for(let y in v){let h=v[y];for(let f in h)G(h[f].object),delete h[f];delete v[y]}}delete Z[b.id]}function D(b){for(let l in Z){let r=Z[l];for(let v in r){let y=r[v];if(y[b.id]===void 0)continue;let h=y[b.id];for(let f in h)G(h[f].object),delete h[f];delete y[b.id]}}}function L(b){for(let l in Z){let r=Z[l],v=b.isInstancedMesh===!0?b.id:0,y=r[v];if(y===void 0)continue;for(let h in y){let f=y[h];for(let o in f)G(f[o].object),delete f[o];delete y[h]}if(delete r[v],Object.keys(r).length===0)delete Z[l]}}function M(){if(c(),X=!0,W===K)return;W=K,U(W.object)}function c(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:M,resetDefaultState:c,dispose:z,releaseStatesOfGeometry:w,releaseStatesOfObject:L,releaseStatesOfProgram:D,initAttributes:B,enableAttribute:R,disableUnusedAttributes:P}}function tE(J,$,Q){let Z;function K(H){Z=H}function W(H,U){J.drawArrays(Z,H,U),Q.update(U,Z,1)}function X(H,U,G){if(G===0)return;J.drawArraysInstanced(Z,H,U,G),Q.update(U,Z,G)}function Y(H,U,G){if(G===0)return;$.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,U,0,G);let N=0;for(let q=0;q<G;q++)N+=U[q];Q.update(N,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function eE(J,$,Q,Z){let K;function W(){if(K!==void 0)return K;if($.has("EXT_texture_filter_anisotropic")===!0){let D=$.get("EXT_texture_filter_anisotropic");K=J.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(D){if(D!==f7&&Z.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(D){let L=D===V8&&($.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float"));if(D!==k7&&D!==t7&&!L&&Z.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(D){if(D==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";D="mediump"}if(D==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Q.precision!==void 0?Q.precision:"highp",G=H(U);if(G!==U)r0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let F=Q.logarithmicDepthBuffer===!0,N=Q.reversedDepthBuffer===!0&&$.has("EXT_clip_control");if(Q.reversedDepthBuffer===!0&&N===!1)r0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),P=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),k=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),z=J.getParameter(J.MAX_SAMPLES),w=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:N,maxTextures:q,maxVertexTextures:O,maxTextureSize:B,maxCubemapSize:R,maxAttributes:E,maxVertexUniforms:P,maxVaryings:k,maxFragmentUniforms:V,maxSamples:z,samples:w}}function Jq(J){let $=this,Q=null,Z=0,K=!1,W=!1,X=new Q7,Y=new H9,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(F,N){let q=F.length!==0||N||Z!==0||K;return K=N,Z=F.length,q},this.beginShadows=function(){W=!0,G(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,N){Q=G(F,N,0)},this.setState=function(F,N,q){let{clippingPlanes:O,clipIntersection:B,clipShadows:R}=F,E=J.get(F);if(!K||O===null||O.length===0||W&&!R)if(W)G(null);else U();else{let P=W?0:Z,k=P*4,V=E.clippingState||null;H.value=V,V=G(O,N,k,q);for(let z=0;z!==k;++z)V[z]=Q[z];E.clippingState=V,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=P}};function U(){if(H.value!==Q)H.value=Q,H.needsUpdate=Z>0;$.numPlanes=Z,$.numIntersection=0}function G(F,N,q,O){let B=F!==null?F.length:0,R=null;if(B!==0){if(R=H.value,O!==!0||R===null){let E=q+B*4,P=N.matrixWorldInverse;if(Y.getNormalMatrix(P),R===null||R.length<E)R=new Float32Array(E);for(let k=0,V=q;k!==B;++k,V+=4)X.copy(F[k]).applyMatrix4(P,Y),X.normal.toArray(R,V),R[V+3]=X.constant}H.value=R,H.needsUpdate=!0}return $.numPlanes=B,$.numIntersection=0,R}}var N$=4,$q=6,Qq=20,Zq=256,RQ=new W6,y5=new b0,jX=null,yX=0,vX=0,fX=!1,Kq=new T,HJ=new T;class DQ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,$=0,Q=0.1,Z=100,K={}){let{size:W=256,position:X=Kq}=K;jX=this._renderer.getRenderTarget(),yX=this._renderer.getActiveCubeFace(),vX=this._renderer.getActiveMipmapLevel(),fX=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,Q,Z,Y,X),$>0)this._blur(Y,0,0,$);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,$=null){return this._fromTexture(J,$)}fromCubemap(J,$=null){return this._fromTexture(J,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=b5(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=f5(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(jX,yX,vX),this._renderer.xr.enabled=fX,J.scissorTest=!1,U$(J,0,0,J.width,J.height)}_fromTexture(J,$){if(J.mapping===aJ||J.mapping===s6)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);jX=this._renderer.getRenderTarget(),yX=this._renderer.getActiveCubeFace(),vX=this._renderer.getActiveMipmapLevel(),fX=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Q=$||this._allocateTargets();return this._textureToCubeUV(J,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),$=4*this._cubeSize,Q={magFilter:L8,minFilter:L8,generateMipmaps:!1,type:V8,format:f7,colorSpace:s8,depthBuffer:!1},Z=v5(J,$,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==$){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=v5(J,$,Q);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wq(K)),this._blurMaterial=Yq(K,J,$),this._ggxMaterial=Xq(K,J,$)}return Z}_compileMaterial(J){let $=new A0(new b9,J);this._renderer.compile($,RQ)}_sceneToCubeUV(J,$,Q,Z,K){let Y=new G8(90,1,$,Q),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,F=G.autoClear,N=G.toneMapping;if(G.getClearColor(y5),G.toneMapping=B7,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new A0(new j9,new h9({name:"PMREM.Background",side:C8,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,B=O.material,R=!1,E=J.background;if(E){if(E.isColor)B.color.copy(E),J.background=null,R=!0}else B.color.copy(y5),R=!0;for(let P=0;P<6;P++){let k=P%3;if(k===0)Y.up.set(0,H[P],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+U[P],K.y,K.z);else if(k===1)Y.up.set(0,0,H[P]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+U[P],K.z);else Y.up.set(0,H[P],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+U[P]);let V=this._cubeSize;if(U$(Z,k*V,P>2?V:0,V,V),G.setRenderTarget(Z),R)G.render(O,Y);G.render(J,Y)}G.toneMapping=N,G.autoClear=F,J.background=E}_textureToCubeUV(J,$){let Q=this._renderer,Z=J.mapping===aJ||J.mapping===s6;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=b5();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=f5();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;U$($,0,0,3*Y,2*Y),Q.setRenderTarget($),Q.render(W,RQ)}_applyPMREM(J){let $=this._renderer,Q=$.autoClear;$.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);$.autoClear=Q}_applyGGXFilter(J,$,Q){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[Q];X.material=W;let Y=W.uniforms,H=Q/(this._lodMeshes.length-1),U=$/(this._lodMeshes.length-1),G=Math.sqrt(H*H-U*U),F=H*1.25,N=G*F,{_lodMax:q}=this,O=this._sizeLods[Q],B=3*O*(Q>q-N$?Q-q+N$:0),R=4*(this._cubeSize-O);Y.envMap.value=J.texture,Y.roughness.value=N,Y.mipInt.value=q-$,U$(K,B,R,3*O,2*O),Z.setRenderTarget(K),Z.render(X,RQ),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=q-Q,U$(J,B,R,3*O,2*O),Z.setRenderTarget(J),Z.render(X,RQ)}_blur(J,$,Q,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,$,Q,W),this._blurPass(K,J,Q,Q,W)}_blurPass(J,$,Q,Z,K){let W=this._renderer,X=this._blurMaterial,Y=this._lodMeshes[Z];Y.material=X;let H=X.uniforms;H.envMap.value=J.texture,H.sigma.value=K,H.mipInt.value=this._lodMax-Q;let U=this._sizeLods[Z],G=3*U*(Z>this._lodMax-N$?Z-this._lodMax+N$:0),F=4*(this._cubeSize-U);U$($,G,F,3*U,2*U),W.setRenderTarget($),W.render(Y,RQ)}}function Wq(J){let $=[],Q=[],Z=J,K=J-N$+1+$q;for(let W=0;W<K;W++){let X=Math.pow(2,Z);$.push(X);let Y=1/(X-2),H=-Y,U=1+Y,G=[H,H,U,H,U,U,H,H,U,U,H,U],F=6,N=6,q=3,O=new Float32Array(q*N*F),B=new Float32Array(q*N*F);for(let E=0;E<F;E++){let P=E%3*2/3-1,k=E>2?0:-1,V=[P,k,0,P+0.6666666666666666,k,0,P+0.6666666666666666,k+1,0,P,k,0,P+0.6666666666666666,k+1,0,P,k+1,0];O.set(V,q*N*E);for(let z=0;z<N;z++){let w=G[z*2]*2-1,D=G[z*2+1]*2-1;if(E===0)HJ.set(1,D,w);else if(E===1)HJ.set(-w,1,-D);else if(E===2)HJ.set(-w,D,1);else if(E===3)HJ.set(-1,D,-w);else if(E===4)HJ.set(-w,-1,D);else HJ.set(w,D,-1);HJ.toArray(B,(E*N+z)*q)}}let R=new b9;if(R.setAttribute("position",new r9(O,q)),R.setAttribute("outputDirection",new r9(B,q)),Q.push(new A0(R,null)),Z>N$)Z--}return{lodMeshes:Q,sizeLods:$}}function v5(J,$,Q){let Z=new W8(J,$,Q);return Z.texture.mapping=e$,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function U$(J,$,Q,Z,K){J.viewport.set($,Q,Z,K),J.scissor.set($,Q,Z,K)}function Xq(J,$,Q){return new e9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zq,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:UK(),fragmentShader:`

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
		`,blending:K7,depthTest:!1,depthWrite:!1})}function Yq(J,$,Q){return new e9({name:"SphericalGaussianBlur",defines:{SAMPLES:Qq,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:UK(),fragmentShader:`

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
		`,blending:K7,depthTest:!1,depthWrite:!1})}function f5(){return new e9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:UK(),fragmentShader:`

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
		`,blending:K7,depthTest:!1,depthWrite:!1})}function b5(){return new e9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:UK(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:K7,depthTest:!1,depthWrite:!1})}function UK(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class pX extends W8{constructor(J=1,$={}){super(J,J,$);this.isWebGLCubeRenderTarget=!0;let Q={width:J,height:J,depth:1},Z=[Q,Q,Q,Q,Q,Q];this.texture=new cZ(Z),this._setTextureOptions($),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new j9(5,5,5),K=new e9({name:"CubemapFromEquirect",uniforms:WJ(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:C8,blending:K7});K.uniforms.tEquirect.value=$;let W=new A0(Z,K),X=$.minFilter;if($.minFilter===v7)$.minFilter=L8;return new PX(1,10,this).update(J,W),$.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,$=!0,Q=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear($,Q,Z);J.setRenderTarget(K)}}function Hq(J){let $=new WeakMap,Q=new WeakMap,Z=null;function K(N,q=!1){if(N===null||N===void 0)return null;if(q)return X(N);return W(N)}function W(N){if(N&&N.isTexture){let q=N.mapping;if(q===IZ||q===zZ)if($.has(N)){let O=$.get(N).texture;return Y(O,N.mapping)}else{let O=N.image;if(O&&O.height>0){let B=new pX(O.height);return B.fromEquirectangularTexture(J,N),$.set(N,B),N.addEventListener("dispose",U),Y(B.texture,N.mapping)}else return null}}return N}function X(N){if(N&&N.isTexture){let q=N.mapping,O=q===IZ||q===zZ,B=q===aJ||q===s6;if(O||B){let R=Q.get(N),E=R!==void 0?R.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==E){if(Z===null)Z=new DQ(J);return R=O?Z.fromEquirectangular(N,R):Z.fromCubemap(N,R),R.texture.pmremVersion=N.pmremVersion,Q.set(N,R),R.texture}else if(R!==void 0)return R.texture;else{let P=N.image;if(O&&P&&P.height>0||B&&P&&H(P)){if(Z===null)Z=new DQ(J);return R=O?Z.fromEquirectangular(N):Z.fromCubemap(N),R.texture.pmremVersion=N.pmremVersion,Q.set(N,R),N.addEventListener("dispose",G),R.texture}else return null}}}return N}function Y(N,q){if(q===IZ)N.mapping=aJ;else if(q===zZ)N.mapping=s6;return N}function H(N){let q=0,O=6;for(let B=0;B<O;B++)if(N[B]!==void 0)q++;return q===O}function U(N){let q=N.target;q.removeEventListener("dispose",U);let O=$.get(q);if(O!==void 0)$.delete(q),O.dispose()}function G(N){let q=N.target;q.removeEventListener("dispose",G);let O=Q.get(q);if(O!==void 0)Q.delete(q),O.dispose()}function F(){if($=new WeakMap,Q=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function Uq(J){let $={};function Q(Z){if($[Z]!==void 0)return $[Z];let K=J.getExtension(Z);return $[Z]=K,K}return{has:function(Z){return Q(Z)!==null},init:function(){Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance"),Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture"),Q("WEBGL_render_shared_exponent")},get:function(Z){let K=Q(Z);if(K===null)l6("WebGLRenderer: "+Z+" extension not supported.");return K}}}function Nq(J,$,Q,Z){let K={},W=new WeakMap;function X(F){let N=F.target;if(N.index!==null)$.remove(N.index);for(let O in N.attributes)$.remove(N.attributes[O]);N.removeEventListener("dispose",X),delete K[N.id];let q=W.get(N);if(q)$.remove(q),W.delete(N);if(Z.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;Q.memory.geometries--}function Y(F,N){if(K[N.id]===!0)return N;return N.addEventListener("dispose",X),K[N.id]=!0,Q.memory.geometries++,N}function H(F){let N=F.attributes;for(let q in N)$.update(N[q],J.ARRAY_BUFFER)}function U(F){let N=[],q=F.index,O=F.attributes.position,B=0;if(O===void 0)return;if(q!==null){let P=q.array;B=q.version;for(let k=0,V=P.length;k<V;k+=3){let z=P[k+0],w=P[k+1],D=P[k+2];N.push(z,w,w,D,D,z)}}else{let P=O.array;B=O.version;for(let k=0,V=P.length/3-1;k<V;k+=3){let z=k+0,w=k+1,D=k+2;N.push(z,w,w,D,D,z)}}let R=new(O.count>=65535?mZ:pZ)(N,1);R.version=B;let E=W.get(F);if(E)$.remove(E);W.set(F,R)}function G(F){let N=W.get(F);if(N){let q=F.index;if(q!==null){if(N.version<q.version)U(F)}}else U(F);return W.get(F)}return{get:Y,update:H,getWireframeAttribute:G}}function Gq(J,$,Q){let Z;function K(F){Z=F}let W,X;function Y(F){W=F.type,X=F.bytesPerElement}function H(F,N){J.drawElements(Z,N,W,F*X),Q.update(N,Z,1)}function U(F,N,q){if(q===0)return;J.drawElementsInstanced(Z,N,W,F*X,q),Q.update(N,Z,q)}function G(F,N,q){if(q===0)return;$.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,N,0,W,F,0,q);let B=0;for(let R=0;R<q;R++)B+=N[R];Q.update(B,Z,1)}this.setMode=K,this.setIndex=Y,this.render=H,this.renderInstances=U,this.renderMultiDraw=G}function Fq(J){let $={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch(Q.calls++,X){case J.TRIANGLES:Q.triangles+=Y*(W/3);break;case J.LINES:Q.lines+=Y*(W/2);break;case J.LINE_STRIP:Q.lines+=Y*(W-1);break;case J.LINE_LOOP:Q.lines+=Y*W;break;case J.POINTS:Q.points+=Y*W;break;default:Z9("WebGLInfo: Unknown draw mode:",X);break}}function K(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:$,render:Q,programs:null,autoReset:!0,reset:K,update:Z}}function Eq(J,$,Q){let Z=new WeakMap,K=new u9;function W(X,Y,H){let U=X.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,F=G!==void 0?G.length:0,N=Z.get(Y);if(N===void 0||N.count!==F){let M=function(){D.dispose(),Z.delete(Y),Y.removeEventListener("dispose",M)};if(N!==void 0)N.texture.dispose();let q=Y.morphAttributes.position!==void 0,O=Y.morphAttributes.normal!==void 0,B=Y.morphAttributes.color!==void 0,R=Y.morphAttributes.position||[],E=Y.morphAttributes.normal||[],P=Y.morphAttributes.color||[],k=0;if(q===!0)k=1;if(O===!0)k=2;if(B===!0)k=3;let V=Y.attributes.position.count*k,z=1;if(V>$.maxTextureSize)z=Math.ceil(V/$.maxTextureSize),V=$.maxTextureSize;let w=new Float32Array(V*z*4*F),D=new xZ(w,V,z,F);D.type=t7,D.needsUpdate=!0;let L=k*4;for(let c=0;c<F;c++){let b=R[c],l=E[c],r=P[c],v=V*z*4*c;for(let y=0;y<b.count;y++){let h=y*L;if(q===!0)K.fromBufferAttribute(b,y),w[v+h+0]=K.x,w[v+h+1]=K.y,w[v+h+2]=K.z,w[v+h+3]=0;if(O===!0)K.fromBufferAttribute(l,y),w[v+h+4]=K.x,w[v+h+5]=K.y,w[v+h+6]=K.z,w[v+h+7]=0;if(B===!0)K.fromBufferAttribute(r,y),w[v+h+8]=K.x,w[v+h+9]=K.y,w[v+h+10]=K.z,w[v+h+11]=r.itemSize===4?K.w:1}}N={count:F,texture:D,size:new R0(V,z)},Z.set(Y,N),Y.addEventListener("dispose",M)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,Q);else{let q=0;for(let B=0;B<U.length;B++)q+=U[B];let O=Y.morphTargetsRelative?1:1-q;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",N.texture,Q),H.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:W}}function qq(J,$,Q,Z,K){let W=new WeakMap;function X(U){let G=K.render.frame,F=U.geometry,N=$.get(U,F);if(W.get(N)!==G)$.update(N),W.set(N,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==G){if(Q.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Q.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,G)}}if(U.isSkinnedMesh){let q=U.skeleton;if(W.get(q)!==G)q.update(),W.set(q,G)}return N}function Y(){W=new WeakMap}function H(U){let G=U.target;if(G.removeEventListener("dispose",H),Z.releaseStatesOfObject(G),Q.remove(G.instanceMatrix),G.instanceColor!==null)Q.remove(G.instanceColor)}return{update:X,dispose:Y}}var Oq={[s$]:"LINEAR_TONE_MAPPING",[i$]:"REINHARD_TONE_MAPPING",[o$]:"CINEON_TONE_MAPPING",[n6]:"ACES_FILMIC_TONE_MAPPING",[r$]:"AGX_TONE_MAPPING",[t$]:"NEUTRAL_TONE_MAPPING",[a$]:"CUSTOM_TONE_MAPPING"};function Rq(J,$,Q,Z,K,W){let X=new W8($,Q,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,H=null,U=new b9;U.setAttribute("position",new Y9([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new Y9([0,2,0,0,2,0],2));let G=new FQ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),F=new A0(U,G),N=new W6(-1,1,1,-1,0,1),q=null,O=null,B=!1,R,E=null,P=[],k=!1;this.setSize=function(V,z){if(X.setSize(V,z),Y!==null)Y.setSize(V,z);if(H!==null)H.setSize(V,z);for(let w=0;w<P.length;w++){let D=P[w];if(D.setSize)D.setSize(V,z)}},this.setEffects=function(V){P=V,k=P.length>0&&P[0].isRenderPass===!0;let{width:z,height:w}=X;if(P.length>0&&Y===null)Y=new W8(z,w,{type:V8,depthBuffer:!1,stencilBuffer:!1}),H=new W8(z,w,{type:V8,depthBuffer:!1,stencilBuffer:!1});for(let D=0;D<P.length;D++){let L=P[D];if(L.setSize)L.setSize(z,w)}},this.begin=function(V,z){if(B)return!1;if(V.toneMapping===B7&&P.length===0)return!1;if(E=z,z!==null){let{width:w,height:D}=z;if(X.width!==w||X.height!==D)this.setSize(w,D)}if(k===!1)V.setRenderTarget(X);return R=V.toneMapping,V.toneMapping=B7,!0},this.hasRenderPass=function(){return k},this.end=function(V,z){V.toneMapping=R,B=!0;let w=X,D=Y;for(let L=0;L<P.length;L++){let M=P[L];if(M.enabled===!1)continue;if(M.render(V,D,w,z),M.needsSwap!==!1)w=D,D=D===Y?H:Y}if(q!==V.outputColorSpace||O!==V.toneMapping){if(q=V.outputColorSpace,O=V.toneMapping,G.defines={},R9.getTransfer(q)===d9)G.defines.SRGB_TRANSFER="";let L=Oq[O];if(L)G.defines[L]="";G.needsUpdate=!0}G.uniforms.tDiffuse.value=w.texture,V.setRenderTarget(E),V.render(F,N),E=null,B=!1},this.isCompositing=function(){return B},this.dispose=function(){if(X.dispose(),Y!==null)Y.dispose();if(H!==null)H.dispose();U.dispose(),G.dispose()}}var QU=new Z8,xX=new ZJ(1,1),ZU=new xZ,KU=new HX,WU=new cZ,h5=[],x5=[],g5=new Float32Array(16),p5=new Float32Array(9),m5=new Float32Array(4);function G$(J,$,Q){let Z=J[0];if(Z<=0||Z>0)return J;let K=$*Q,W=h5[K];if(W===void 0)W=new Float32Array(K),h5[K]=W;if($!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==$;++X)Y+=Q,J[X].toArray(W,Y)}return W}function F8(J,$){if(J.length!==$.length)return!1;for(let Q=0,Z=J.length;Q<Z;Q++)if(J[Q]!==$[Q])return!1;return!0}function E8(J,$){for(let Q=0,Z=$.length;Q<Z;Q++)J[Q]=$[Q]}function NK(J,$){let Q=x5[$];if(Q===void 0)Q=new Int32Array($),x5[$]=Q;for(let Z=0;Z!==$;++Z)Q[Z]=J.allocateTextureUnit();return Q}function Lq(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1f(this.addr,$),Q[0]=$}function Vq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2f(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(F8(Q,$))return;J.uniform2fv(this.addr,$),E8(Q,$)}}function Bq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3f(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else if($.r!==void 0){if(Q[0]!==$.r||Q[1]!==$.g||Q[2]!==$.b)J.uniform3f(this.addr,$.r,$.g,$.b),Q[0]=$.r,Q[1]=$.g,Q[2]=$.b}else{if(F8(Q,$))return;J.uniform3fv(this.addr,$),E8(Q,$)}}function Dq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4f(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(F8(Q,$))return;J.uniform4fv(this.addr,$),E8(Q,$)}}function kq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(F8(Q,$))return;J.uniformMatrix2fv(this.addr,!1,$),E8(Q,$)}else{if(F8(Q,Z))return;m5.set(Z),J.uniformMatrix2fv(this.addr,!1,m5),E8(Q,Z)}}function Mq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(F8(Q,$))return;J.uniformMatrix3fv(this.addr,!1,$),E8(Q,$)}else{if(F8(Q,Z))return;p5.set(Z),J.uniformMatrix3fv(this.addr,!1,p5),E8(Q,Z)}}function Cq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(F8(Q,$))return;J.uniformMatrix4fv(this.addr,!1,$),E8(Q,$)}else{if(F8(Q,Z))return;g5.set(Z),J.uniformMatrix4fv(this.addr,!1,g5),E8(Q,Z)}}function Pq(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1i(this.addr,$),Q[0]=$}function Iq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2i(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(F8(Q,$))return;J.uniform2iv(this.addr,$),E8(Q,$)}}function zq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3i(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(F8(Q,$))return;J.uniform3iv(this.addr,$),E8(Q,$)}}function Aq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4i(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(F8(Q,$))return;J.uniform4iv(this.addr,$),E8(Q,$)}}function _q(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1ui(this.addr,$),Q[0]=$}function Tq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2ui(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(F8(Q,$))return;J.uniform2uiv(this.addr,$),E8(Q,$)}}function wq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3ui(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(F8(Q,$))return;J.uniform3uiv(this.addr,$),E8(Q,$)}}function Sq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4ui(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(F8(Q,$))return;J.uniform4uiv(this.addr,$),E8(Q,$)}}function jq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)xX.compareFunction=Q.isReversedDepthBuffer()?hZ:bZ,W=xX;else W=QU;Q.setTexture2D($||W,K)}function yq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTexture3D($||KU,K)}function vq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTextureCube($||WU,K)}function fq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTexture2DArray($||ZU,K)}function bq(J){switch(J){case 5126:return Lq;case 35664:return Vq;case 35665:return Bq;case 35666:return Dq;case 35674:return kq;case 35675:return Mq;case 35676:return Cq;case 5124:case 35670:return Pq;case 35667:case 35671:return Iq;case 35668:case 35672:return zq;case 35669:case 35673:return Aq;case 5125:return _q;case 36294:return Tq;case 36295:return wq;case 36296:return Sq;case 35678:case 36198:case 36298:case 36306:case 35682:return jq;case 35679:case 36299:case 36307:return yq;case 35680:case 36300:case 36308:case 36293:return vq;case 36289:case 36303:case 36311:case 36292:return fq}}function hq(J,$){J.uniform1fv(this.addr,$)}function xq(J,$){let Q=G$($,this.size,2);J.uniform2fv(this.addr,Q)}function gq(J,$){let Q=G$($,this.size,3);J.uniform3fv(this.addr,Q)}function pq(J,$){let Q=G$($,this.size,4);J.uniform4fv(this.addr,Q)}function mq(J,$){let Q=G$($,this.size,4);J.uniformMatrix2fv(this.addr,!1,Q)}function lq(J,$){let Q=G$($,this.size,9);J.uniformMatrix3fv(this.addr,!1,Q)}function uq(J,$){let Q=G$($,this.size,16);J.uniformMatrix4fv(this.addr,!1,Q)}function dq(J,$){J.uniform1iv(this.addr,$)}function cq(J,$){J.uniform2iv(this.addr,$)}function nq(J,$){J.uniform3iv(this.addr,$)}function sq(J,$){J.uniform4iv(this.addr,$)}function iq(J,$){J.uniform1uiv(this.addr,$)}function oq(J,$){J.uniform2uiv(this.addr,$)}function aq(J,$){J.uniform3uiv(this.addr,$)}function rq(J,$){J.uniform4uiv(this.addr,$)}function tq(J,$,Q){let Z=this.cache,K=$.length,W=NK(Q,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=xX;else X=QU;for(let Y=0;Y!==K;++Y)Q.setTexture2D($[Y]||X,W[Y])}function eq(J,$,Q){let Z=this.cache,K=$.length,W=NK(Q,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);for(let X=0;X!==K;++X)Q.setTexture3D($[X]||KU,W[X])}function JO(J,$,Q){let Z=this.cache,K=$.length,W=NK(Q,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);for(let X=0;X!==K;++X)Q.setTextureCube($[X]||WU,W[X])}function $O(J,$,Q){let Z=this.cache,K=$.length,W=NK(Q,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);for(let X=0;X!==K;++X)Q.setTexture2DArray($[X]||ZU,W[X])}function QO(J){switch(J){case 5126:return hq;case 35664:return xq;case 35665:return gq;case 35666:return pq;case 35674:return mq;case 35675:return lq;case 35676:return uq;case 5124:case 35670:return dq;case 35667:case 35671:return cq;case 35668:case 35672:return nq;case 35669:case 35673:return sq;case 5125:return iq;case 36294:return oq;case 36295:return aq;case 36296:return rq;case 35678:case 36198:case 36298:case 36306:case 35682:return tq;case 35679:case 36299:case 36307:return eq;case 35680:case 36300:case 36308:case 36293:return JO;case 36289:case 36303:case 36311:case 36292:return $O}}class XU{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.setValue=bq($.type)}}class YU{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.size=$.size,this.setValue=QO($.type)}}class HU{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,$,Q){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,$[X.id],Q)}}}var bX=/(\w+)(\])?(\[|\.)?/g;function l5(J,$){J.seq.push($),J.map[$.id]=$}function ZO(J,$,Q){let Z=J.name,K=Z.length;bX.lastIndex=0;while(!0){let W=bX.exec(Z),X=bX.lastIndex,Y=W[1],H=W[2]==="]",U=W[3];if(H)Y=Y|0;if(U===void 0||U==="["&&X+2===K){l5(Q,U===void 0?new XU(Y,J,$):new YU(Y,J,$));break}else{let F=Q.map[Y];if(F===void 0)F=new HU(Y),l5(Q,F);Q=F}}}class BQ{constructor(J,$){this.seq=[],this.map={};let Q=J.getProgramParameter($,J.ACTIVE_UNIFORMS);for(let W=0;W<Q;++W){let X=J.getActiveUniform($,W),Y=J.getUniformLocation($,X.name);ZO(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,$,Q,Z){let K=this.map[$];if(K!==void 0)K.setValue(J,Q,Z)}setOptional(J,$,Q){let Z=$[Q];if(Z!==void 0)this.setValue(J,Q,Z)}static upload(J,$,Q,Z){for(let K=0,W=$.length;K!==W;++K){let X=$[K],Y=Q[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,$){let Q=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in $)Q.push(W)}return Q}}function u5(J,$,Q){let Z=J.createShader($);return J.shaderSource(Z,Q),J.compileShader(Z),Z}var KO=37297,WO=0;function XO(J,$){let Q=J.split(`
`),Z=[],K=Math.max($-6,0),W=Math.min($+6,Q.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===$?">":" "} ${Y}: ${Q[X]}`)}return Z.join(`
`)}var d5=new H9;function YO(J){R9._getMatrix(d5,R9.workingColorSpace,J);let $=`mat3( ${d5.elements.map((Q)=>Q.toFixed(4))} )`;switch(R9.getTransfer(J)){case QX:return[$,"LinearTransferOETF"];case d9:return[$,"sRGBTransferOETF"];default:return r0("WebGLProgram: Unsupported color space: ",J),[$,"LinearTransferOETF"]}}function c5(J,$,Q){let Z=J.getShaderParameter($,J.COMPILE_STATUS),W=(J.getShaderInfoLog($)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return Q.toUpperCase()+`

`+W+`

`+XO(J.getShaderSource($),Y)}else return W}function HO(J,$){let Q=YO($);return[`vec4 ${J}( vec4 value ) {`,`	return ${Q[1]}( vec4( value.rgb * ${Q[0]}, value.a ) );`,"}"].join(`
`)}var UO={[s$]:"Linear",[i$]:"Reinhard",[o$]:"Cineon",[n6]:"ACESFilmic",[r$]:"AgX",[t$]:"Neutral",[a$]:"Custom"};function NO(J,$){let Q=UO[$];if(Q===void 0)return r0("WebGLProgram: Unsupported toneMapping:",$),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}var HK=new T;function GO(){R9.getLuminanceCoefficients(HK);let J=HK.x.toFixed(4),$=HK.y.toFixed(4),Q=HK.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${$}, ${Q} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function FO(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(VQ).join(`
`)}function EO(J){let $=[];for(let Q in J){let Z=J[Q];if(Z===!1)continue;$.push("#define "+Q+" "+Z)}return $.join(`
`)}function qO(J,$){let Q={},Z=J.getProgramParameter($,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib($,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;Q[X]={type:W.type,location:J.getAttribLocation($,X),locationSize:Y}}return Q}function VQ(J){return J!==""}function n5(J,$){let Q=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,$.numSunLights).replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,$.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows)}function s5(J,$){return J.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var OO=/^[ \t]*#include +<([\w\d./]+)>/gm;function gX(J){return J.replace(OO,LO)}var RO=new Map;function LO(J,$){let Q=B9[$];if(Q===void 0){let Z=RO.get($);if(Z!==void 0)Q=B9[Z],r0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',$,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+$+">")}return gX(Q)}var VO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i5(J){return J.replace(VO,BO)}function BO(J,$,Q,Z){let K="";for(let W=parseInt($);W<parseInt(Q);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function o5(J){let $=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return $}var DO={[c6]:"SHADOWMAP_TYPE_PCF",[iJ]:"SHADOWMAP_TYPE_VSM"};function kO(J){return DO[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var MO={[aJ]:"ENVMAP_TYPE_CUBE",[s6]:"ENVMAP_TYPE_CUBE",[e$]:"ENVMAP_TYPE_CUBE_UV"};function CO(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return MO[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var PO={[s6]:"ENVMAP_MODE_REFRACTION"};function IO(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return PO[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zO={[tH]:"ENVMAP_BLENDING_MULTIPLY",[eH]:"ENVMAP_BLENDING_MIX",[J5]:"ENVMAP_BLENDING_ADD"};function AO(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return zO[J.combine]||"ENVMAP_BLENDING_NONE"}function _O(J){let $=J.envMapCubeUVHeight;if($===null)return null;let Q=Math.log2($)-2,Z=1/$;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:Z,maxMip:Q}}function TO(J,$,Q,Z){let K=J.getContext(),W=Q.defines,X=Q.vertexShader,Y=Q.fragmentShader,H=kO(Q),U=CO(Q),G=IO(Q),F=AO(Q),N=_O(Q),q=FO(Q),O=EO(W),B=K.createProgram(),R,E,P=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(R=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(VQ).join(`
`),R.length>0)R+=`
`;if(E=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(VQ).join(`
`),E.length>0)E+=`
`}else R=[o5(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.batchingColor?"#define USE_BATCHING_COLOR":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.instancingMorph?"#define USE_INSTANCING_MORPH":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+G:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexNormals?"#define HAS_NORMAL":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+H:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(VQ).join(`
`),E=[o5(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+U:"",Q.envMap?"#define "+G:"",Q.envMap?"#define "+F:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.dispersion?"#define USE_DISPERSION":"",Q.retroreflection?"#define USE_RETROREFLECTION":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor?"#define USE_COLOR":"",Q.vertexAlphas||Q.batchingColor?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+H:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==B7?"#define TONE_MAPPING":"",Q.toneMapping!==B7?B9.tonemapping_pars_fragment:"",Q.toneMapping!==B7?NO("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",B9.colorspace_pars_fragment,HO("linearToOutputTexel",Q.outputColorSpace),GO(),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(VQ).join(`
`);if(X=gX(X),X=n5(X,Q),X=s5(X,Q),Y=gX(Y),Y=n5(Y,Q),Y=s5(Y,Q),X=i5(X),Y=i5(Y),Q.isRawShaderMaterial!==!0)P=`#version 300 es
`,R=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,E=["#define varying in",Q.glslVersion===ZX?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion===ZX?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let k=P+R+X,V=P+E+Y,z=u5(K,K.VERTEX_SHADER,k),w=u5(K,K.FRAGMENT_SHADER,V);if(K.attachShader(B,z),K.attachShader(B,w),Q.index0AttributeName!==void 0)K.bindAttribLocation(B,0,Q.index0AttributeName);else if(Q.hasPositionAttribute===!0)K.bindAttribLocation(B,0,"position");K.linkProgram(B);function D(b){if(J.debug.checkShaderErrors){let l=K.getProgramInfoLog(B)||"",r=K.getShaderInfoLog(z)||"",v=K.getShaderInfoLog(w)||"",y=l.trim(),h=r.trim(),f=v.trim(),o=!0,g=!0;if(K.getProgramParameter(B,K.LINK_STATUS)===!1)if(o=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,B,z,w);else{let a=c5(K,z,"vertex"),j=c5(K,w,"fragment");Z9("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(B,K.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+y+`
`+a+`
`+j)}else if(y!=="")r0("WebGLProgram: Program Info Log:",y);else if(h===""||f==="")g=!1;if(g)b.diagnostics={runnable:o,programLog:y,vertexShader:{log:h,prefix:R},fragmentShader:{log:f,prefix:E}}}K.deleteShader(z),K.deleteShader(w),L=new BQ(K,B),M=qO(K,B)}let L;this.getUniforms=function(){if(L===void 0)D(this);return L};let M;this.getAttributes=function(){if(M===void 0)D(this);return M};let c=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(c===!1)c=K.getProgramParameter(B,KO);return c},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(B),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=WO++,this.cacheKey=$,this.usedTimes=1,this.program=B,this.vertexShader=z,this.fragmentShader=w,this}var wO=0;class UU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,$,Q){let Z=this._getShaderCacheForMaterial(J);if(Z.has($)===!1)Z.add($),$.usedTimes++;if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;return this}remove(J){let $=this.materialCache.get(J);for(let Q of $)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let $=this.materialCache,Q=$.get(J);if(Q===void 0)Q=new Set,$.set(J,Q);return Q}_getShaderStage(J){let $=this.shaderCache,Q=$.get(J);if(Q===void 0)Q=new NU(J),$.set(J,Q);return Q}}class NU{constructor(J){this.id=wO++,this.code=J,this.usedTimes=0}}function SO(J){return J===r6||J===yZ||J===vZ}function jO(J,$,Q,Z,K,W){let X=new gZ,Y=new UU,H=new Set,U=[],G=new Map,F=Z.logarithmicDepthBuffer,N=Z.precision,q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(L){if(H.add(L),L===0)return"uv";return`uv${L}`}function B(L,M,c,b,l,r){let v=b.fog,y=l.geometry,h=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?b.environment:null,f=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,o=$.get(L.envMap||h,f),g=!!o&&o.mapping===e$?o.image.height:null,a=q[L.type];if(L.precision!==null){if(N=Z.getMaxPrecision(L.precision),N!==L.precision)r0("WebGLProgram.getParameters:",L.precision,"not supported, using",N,"instead.")}let j=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,i=j!==void 0?j.length:0,X0=0;if(y.morphAttributes.position!==void 0)X0=1;if(y.morphAttributes.normal!==void 0)X0=2;if(y.morphAttributes.color!==void 0)X0=3;let K0,H0,Z0,S;if(a){let n9=p7[a];K0=n9.vertexShader,H0=n9.fragmentShader}else{K0=L.vertexShader,H0=L.fragmentShader;let n9=Y.getVertexShaderStage(L),y9=Y.getFragmentShaderStage(L);Y.update(L,n9,y9),Z0=n9.id,S=y9.id}let x=J.getRenderTarget(),s=J.state.buffers.depth.getReversed(),Y0=l.isInstancedMesh===!0,t=l.isBatchedMesh===!0,D0=!!L.map,V0=!!L.matcap,_0=!!o,B0=!!L.aoMap,u0=!!L.lightMap,K9=!!L.bumpMap&&L.wireframe===!1,t0=!!L.normalMap,W9=!!L.displacementMap,D9=!!L.emissiveMap,L9=!!L.metalnessMap,p=!!L.roughnessMap,x9=L.anisotropy>0,z9=L.clearcoat>0,A9=L.dispersion>0,_=L.retroreflectivity>0,C=L.iridescence>0,m=L.sheen>0,$0=L.transmission>0,L0=x9&&!!L.anisotropyMap,P0=z9&&!!L.clearcoatMap,v0=z9&&!!L.clearcoatNormalMap,N0=z9&&!!L.clearcoatRoughnessMap,q0=C&&!!L.iridescenceMap,h0=C&&!!L.iridescenceThicknessMap,y0=m&&!!L.sheenColorMap,I0=m&&!!L.sheenRoughnessMap,z0=!!L.specularMap,a0=!!L.specularColorMap,J9=!!L.specularIntensityMap,T9=$0&&!!L.transmissionMap,n=$0&&!!L.thicknessMap,w0=!!L.gradientMap,G0=!!L.alphaMap,S0=L.alphaTest>0,d0=!!L.alphaHash,M0=!!L.extensions,f0=B7;if(L.toneMapped){if(x===null||x.isXRRenderTarget===!0)f0=J.toneMapping}let X9={shaderID:a,shaderType:L.type,shaderName:L.name,vertexShader:K0,fragmentShader:H0,defines:L.defines,customVertexShaderID:Z0,customFragmentShaderID:S,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:N,batching:t,batchingColor:t&&l._colorsTexture!==null,instancing:Y0,instancingColor:Y0&&l.instanceColor!==null,instancingMorph:Y0&&l.morphTexture!==null,outputColorSpace:x===null?J.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:R9.workingColorSpace,alphaToCoverage:!!L.alphaToCoverage,map:D0,matcap:V0,envMap:_0,envMapMode:_0&&o.mapping,envMapCubeUVHeight:g,aoMap:B0,lightMap:u0,bumpMap:K9,normalMap:t0,displacementMap:W9,emissiveMap:D9,normalMapObjectSpace:t0&&L.normalMapType===H5,normalMapTangentSpace:t0&&L.normalMapType===$X,packedNormalMap:t0&&L.normalMapType===$X&&SO(L.normalMap.format),metalnessMap:L9,roughnessMap:p,anisotropy:x9,anisotropyMap:L0,clearcoat:z9,clearcoatMap:P0,clearcoatNormalMap:v0,clearcoatRoughnessMap:N0,dispersion:A9,retroreflection:_,iridescence:C,iridescenceMap:q0,iridescenceThicknessMap:h0,sheen:m,sheenColorMap:y0,sheenRoughnessMap:I0,specularMap:z0,specularColorMap:a0,specularIntensityMap:J9,transmission:$0,transmissionMap:T9,thicknessMap:n,gradientMap:w0,opaque:L.transparent===!1&&L.blending===n$&&L.alphaToCoverage===!1,alphaMap:G0,alphaTest:S0,alphaHash:d0,combine:L.combine,mapUv:D0&&O(L.map.channel),aoMapUv:B0&&O(L.aoMap.channel),lightMapUv:u0&&O(L.lightMap.channel),bumpMapUv:K9&&O(L.bumpMap.channel),normalMapUv:t0&&O(L.normalMap.channel),displacementMapUv:W9&&O(L.displacementMap.channel),emissiveMapUv:D9&&O(L.emissiveMap.channel),metalnessMapUv:L9&&O(L.metalnessMap.channel),roughnessMapUv:p&&O(L.roughnessMap.channel),anisotropyMapUv:L0&&O(L.anisotropyMap.channel),clearcoatMapUv:P0&&O(L.clearcoatMap.channel),clearcoatNormalMapUv:v0&&O(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N0&&O(L.clearcoatRoughnessMap.channel),iridescenceMapUv:q0&&O(L.iridescenceMap.channel),iridescenceThicknessMapUv:h0&&O(L.iridescenceThicknessMap.channel),sheenColorMapUv:y0&&O(L.sheenColorMap.channel),sheenRoughnessMapUv:I0&&O(L.sheenRoughnessMap.channel),specularMapUv:z0&&O(L.specularMap.channel),specularColorMapUv:a0&&O(L.specularColorMap.channel),specularIntensityMapUv:J9&&O(L.specularIntensityMap.channel),transmissionMapUv:T9&&O(L.transmissionMap.channel),thicknessMapUv:n&&O(L.thicknessMap.channel),alphaMapUv:G0&&O(L.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(t0||x9),vertexNormals:!!y.attributes.normal,vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:l.isPoints===!0&&!!y.attributes.uv&&(D0||G0),fog:!!v,useFog:L.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:L.wireframe===!1&&(L.flatShading===!0||y.attributes.normal===void 0&&t0===!1&&(L.isMeshLambertMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isMeshPhysicalMaterial)),sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:s,skinning:l.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:i,morphTextureStride:X0,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:r.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:L.dithering,shadowMapEnabled:J.shadowMap.enabled&&c.length>0,shadowMapType:J.shadowMap.type,toneMapping:f0,decodeVideoTexture:D0&&L.map.isVideoTexture===!0&&R9.getTransfer(L.map.colorSpace)===d9,decodeVideoTextureEmissive:D9&&L.emissiveMap.isVideoTexture===!0&&R9.getTransfer(L.emissiveMap.colorSpace)===d9,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===o9,flipSided:L.side===C8,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:M0&&L.extensions.clipCullDistance===!0&&Q.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(M0&&L.extensions.multiDraw===!0||t)&&Q.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Q.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return X9.vertexUv1s=H.has(1),X9.vertexUv2s=H.has(2),X9.vertexUv3s=H.has(3),H.clear(),X9}function R(L){let M=[];if(L.shaderID)M.push(L.shaderID);else M.push(L.customVertexShaderID),M.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let c in L.defines)M.push(c),M.push(L.defines[c]);if(L.isRawShaderMaterial===!1)E(M,L),P(M,L),M.push(J.outputColorSpace);return M.push(L.customProgramCacheKey),M.join()}function E(L,M){L.push(M.precision),L.push(M.outputColorSpace),L.push(M.envMapMode),L.push(M.envMapCubeUVHeight),L.push(M.mapUv),L.push(M.alphaMapUv),L.push(M.lightMapUv),L.push(M.aoMapUv),L.push(M.bumpMapUv),L.push(M.normalMapUv),L.push(M.displacementMapUv),L.push(M.emissiveMapUv),L.push(M.metalnessMapUv),L.push(M.roughnessMapUv),L.push(M.anisotropyMapUv),L.push(M.clearcoatMapUv),L.push(M.clearcoatNormalMapUv),L.push(M.clearcoatRoughnessMapUv),L.push(M.iridescenceMapUv),L.push(M.iridescenceThicknessMapUv),L.push(M.sheenColorMapUv),L.push(M.sheenRoughnessMapUv),L.push(M.specularMapUv),L.push(M.specularColorMapUv),L.push(M.specularIntensityMapUv),L.push(M.transmissionMapUv),L.push(M.thicknessMapUv),L.push(M.combine),L.push(M.fogExp2),L.push(M.sizeAttenuation),L.push(M.morphTargetsCount),L.push(M.morphAttributeCount),L.push(M.numSunLights),L.push(M.numDirLights),L.push(M.numPointLights),L.push(M.numSpotLights),L.push(M.numSpotLightMaps),L.push(M.numHemiLights),L.push(M.numRectAreaLights),L.push(M.numSunLightShadows),L.push(M.numDirLightShadows),L.push(M.numPointLightShadows),L.push(M.numSpotLightShadows),L.push(M.numSpotLightShadowsWithMaps),L.push(M.numLightProbes),L.push(M.shadowMapType),L.push(M.toneMapping),L.push(M.numClippingPlanes),L.push(M.numClipIntersection),L.push(M.depthPacking)}function P(L,M){if(X.disableAll(),M.instancing)X.enable(0);if(M.instancingColor)X.enable(1);if(M.instancingMorph)X.enable(2);if(M.matcap)X.enable(3);if(M.envMap)X.enable(4);if(M.normalMapObjectSpace)X.enable(5);if(M.normalMapTangentSpace)X.enable(6);if(M.clearcoat)X.enable(7);if(M.iridescence)X.enable(8);if(M.alphaTest)X.enable(9);if(M.vertexColors)X.enable(10);if(M.vertexAlphas)X.enable(11);if(M.vertexUv1s)X.enable(12);if(M.vertexUv2s)X.enable(13);if(M.vertexUv3s)X.enable(14);if(M.vertexTangents)X.enable(15);if(M.anisotropy)X.enable(16);if(M.alphaHash)X.enable(17);if(M.batching)X.enable(18);if(M.dispersion)X.enable(19);if(M.retroreflection)X.enable(24);if(M.batchingColor)X.enable(20);if(M.gradientMap)X.enable(21);if(M.packedNormalMap)X.enable(22);if(M.vertexNormals)X.enable(23);if(L.push(X.mask),X.disableAll(),M.fog)X.enable(0);if(M.useFog)X.enable(1);if(M.flatShading)X.enable(2);if(M.logarithmicDepthBuffer)X.enable(3);if(M.reversedDepthBuffer)X.enable(4);if(M.skinning)X.enable(5);if(M.morphTargets)X.enable(6);if(M.morphNormals)X.enable(7);if(M.morphColors)X.enable(8);if(M.premultipliedAlpha)X.enable(9);if(M.shadowMapEnabled)X.enable(10);if(M.doubleSided)X.enable(11);if(M.flipSided)X.enable(12);if(M.useDepthPacking)X.enable(13);if(M.dithering)X.enable(14);if(M.transmission)X.enable(15);if(M.sheen)X.enable(16);if(M.opaque)X.enable(17);if(M.pointsUvs)X.enable(18);if(M.decodeVideoTexture)X.enable(19);if(M.decodeVideoTextureEmissive)X.enable(20);if(M.alphaToCoverage)X.enable(21);if(M.numLightProbeGrids>0)X.enable(22);if(M.hasPositionAttribute)X.enable(23);L.push(X.mask)}function k(L){let M=q[L.type],c;if(M){let b=p7[M];c=$6.clone(b.uniforms)}else c=L.uniforms;return c}function V(L,M){let c=G.get(M);if(c!==void 0)++c.usedTimes;else c=new TO(J,M,L,K),U.push(c),G.set(M,c);return c}function z(L){if(--L.usedTimes===0){let M=U.indexOf(L);U[M]=U[U.length-1],U.pop(),G.delete(L.cacheKey),L.destroy()}}function w(L){Y.remove(L)}function D(){Y.dispose()}return{getParameters:B,getProgramCacheKey:R,getUniforms:k,acquireProgram:V,releaseProgram:z,releaseShaderCache:w,programs:U,dispose:D}}function yO(){let J=new WeakMap;function $(X){return J.has(X)}function Q(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:$,get:Q,remove:Z,update:K,dispose:W}}function vO(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.material.id!==$.material.id)return J.material.id-$.material.id;else if(J.materialVariant!==$.materialVariant)return J.materialVariant-$.materialVariant;else if(J.z!==$.z)return J.z-$.z;else return J.id-$.id}function a5(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.z!==$.z)return $.z-J.z;else return J.id-$.id}function r5(){let J=[],$=0,Q=[],Z=[],K=[];function W(){$=0,Q.length=0,Z.length=0,K.length=0}function X(N){let q=0;if(N.isInstancedMesh)q+=2;if(N.isSkinnedMesh)q+=1;return q}function Y(N,q,O,B,R,E){let P=J[$];if(P===void 0)P={id:N.id,object:N,geometry:q,material:O,materialVariant:X(N),groupOrder:B,renderOrder:N.renderOrder,z:R,group:E},J[$]=P;else P.id=N.id,P.object=N,P.geometry=q,P.material=O,P.materialVariant=X(N),P.groupOrder=B,P.renderOrder=N.renderOrder,P.z=R,P.group=E;return $++,P}function H(N,q,O,B,R,E,P){if(P.reversedDepth===!0)R=-R;let k=Y(N,q,O,B,R,E);if(O.transmission>0)Z.push(k);else if(O.transparent===!0)K.push(k);else Q.push(k)}function U(N,q,O,B,R,E){let P=Y(N,q,O,B,R,E);if(O.transmission>0)Z.unshift(P);else if(O.transparent===!0)K.unshift(P);else Q.unshift(P)}function G(N,q){if(Q.length>1)Q.sort(N||vO);if(Z.length>1)Z.sort(q||a5);if(K.length>1)K.sort(q||a5)}function F(){for(let N=$,q=J.length;N<q;N++){let O=J[N];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:Q,transmissive:Z,transparent:K,init:W,push:H,unshift:U,finish:F,sort:G}}function fO(){let J=new WeakMap;function $(Z,K){let W=J.get(Z),X;if(W===void 0)X=new r5,J.set(Z,[X]);else if(K>=W.length)X=new r5,W.push(X);else X=W[K];return X}function Q(){J=new WeakMap}return{get:$,dispose:Q}}function bO(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"SunLight":case"DirectionalLight":Q={direction:new T,color:new b0};break;case"SpotLight":Q={position:new T,direction:new T,color:new b0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new T,color:new b0,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new T,skyColor:new b0,groundColor:new b0};break;case"RectAreaLight":Q={color:new b0,position:new T,halfWidth:new T,halfHeight:new T};break}return J[$.id]=Q,Q}}}function hO(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"SunLight":case"DirectionalLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"SpotLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"PointLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[$.id]=Q,Q}}}var xO=0;function gO(J,$){return($.castShadow?2:0)-(J.castShadow?2:0)+($.map?1:0)-(J.map?1:0)}function pO(J){let $=new bO,Q=hO(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new T);let K=new T,W=new $9,X=new $9;function Y(U){let G=0,F=0,N=0;for(let l=0;l<9;l++)Z.probe[l].set(0,0,0);let q=0,O=0,B=0,R=0,E=0,P=0,k=0,V=0,z=0,w=0,D=0,L=0,M=0,c=0;U.sort(gO);for(let l=0,r=U.length;l<r;l++){let v=U[l],y=v.color,h=v.intensity,f=v.distance,o=null;if(v.shadow&&v.shadow.map)if(v.shadow.map.texture.format===r6)o=v.shadow.map.texture;else o=v.shadow.map.depthTexture||v.shadow.map.texture;if(v.isAmbientLight)G+=y.r*h,F+=y.g*h,N+=y.b*h;else if(v.isLightProbe){for(let g=0;g<9;g++)Z.probe[g].addScaledVector(v.sh.coefficients[g],h);c++}else if(v.isSunLight){let g=$.get(v);if(g.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let a=v.shadow,j=Q.get(v);j.shadowIntensity=a.intensity,j.shadowBias=a.bias,j.shadowNormalBias=a.normalBias,j.shadowRadius=a.radius,j.shadowMapSize.copy(a.mapSize).multiply(a.getFrameExtents()),Z.sunShadow[O]=j,Z.sunShadowMap[O]=o;let i=a.getViewportCount();for(let X0=0;X0<i;X0++)Z.sunShadowMatrix[B+X0]=a.getMatrix(X0),Z.sunShadowCascade[B+X0]=a._cascadeData[X0];B+=i,O++}Z.sun[q]=g,q++}else if(v.isDirectionalLight){let g=$.get(v);if(g.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let a=v.shadow,j=Q.get(v);j.shadowIntensity=a.intensity,j.shadowBias=a.bias,j.shadowNormalBias=a.normalBias,j.shadowRadius=a.radius,j.shadowMapSize=a.mapSize,Z.directionalShadow[R]=j,Z.directionalShadowMap[R]=o,Z.directionalShadowMatrix[R]=v.shadow.matrix,z++}Z.directional[R]=g,R++}else if(v.isSpotLight){let g=$.get(v);g.position.setFromMatrixPosition(v.matrixWorld),g.color.copy(y).multiplyScalar(h),g.distance=f,g.coneCos=Math.cos(v.angle),g.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),g.decay=v.decay,Z.spot[P]=g;let a=v.shadow;if(v.map){if(Z.spotLightMap[L]=v.map,L++,a.updateMatrices(v),v.castShadow)M++}if(Z.spotLightMatrix[P]=a.matrix,v.castShadow){let j=Q.get(v);j.shadowIntensity=a.intensity,j.shadowBias=a.bias,j.shadowNormalBias=a.normalBias,j.shadowRadius=a.radius,j.shadowMapSize=a.mapSize,Z.spotShadow[P]=j,Z.spotShadowMap[P]=o,D++}P++}else if(v.isRectAreaLight){let g=$.get(v);g.color.copy(y).multiplyScalar(h),g.halfWidth.set(v.width*0.5,0,0),g.halfHeight.set(0,v.height*0.5,0),Z.rectArea[k]=g,k++}else if(v.isPointLight){let g=$.get(v);if(g.color.copy(v.color).multiplyScalar(v.intensity),g.distance=v.distance,g.decay=v.decay,v.castShadow){let a=v.shadow,j=Q.get(v);j.shadowIntensity=a.intensity,j.shadowBias=a.bias,j.shadowNormalBias=a.normalBias,j.shadowRadius=a.radius,j.shadowMapSize=a.mapSize,j.shadowCameraNear=a.camera.near,j.shadowCameraFar=a.camera.far,Z.pointShadow[E]=j,Z.pointShadowMap[E]=o,Z.pointShadowMatrix[E]=v.shadow.matrix,w++}Z.point[E]=g,E++}else if(v.isHemisphereLight){let g=$.get(v);g.skyColor.copy(v.color).multiplyScalar(h),g.groundColor.copy(v.groundColor).multiplyScalar(h),Z.hemi[V]=g,V++}}if(k>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=p0.LTC_FLOAT_1,Z.rectAreaLTC2=p0.LTC_FLOAT_2;else Z.rectAreaLTC1=p0.LTC_HALF_1,Z.rectAreaLTC2=p0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=F,Z.ambient[2]=N;let b=Z.hash;if(b.sunLength!==q||b.directionalLength!==R||b.pointLength!==E||b.spotLength!==P||b.rectAreaLength!==k||b.hemiLength!==V||b.numSunShadows!==O||b.numDirectionalShadows!==z||b.numPointShadows!==w||b.numSpotShadows!==D||b.numSpotMaps!==L||b.numLightProbes!==c)Z.sun.length=q,Z.directional.length=R,Z.spot.length=P,Z.rectArea.length=k,Z.point.length=E,Z.hemi.length=V,Z.sunShadow.length=O,Z.sunShadowMap.length=O,Z.sunShadowMatrix.length=B,Z.sunShadowCascade.length=B,Z.directionalShadow.length=z,Z.directionalShadowMap.length=z,Z.directionalShadowMatrix.length=z,Z.pointShadow.length=w,Z.pointShadowMap.length=w,Z.pointShadowMatrix.length=w,Z.spotShadow.length=D,Z.spotShadowMap.length=D,Z.spotLightMatrix.length=D+L-M,Z.spotLightMap.length=L,Z.numSpotLightShadowsWithMaps=M,Z.numLightProbes=c,b.sunLength=q,b.directionalLength=R,b.pointLength=E,b.spotLength=P,b.rectAreaLength=k,b.hemiLength=V,b.numSunShadows=O,b.numDirectionalShadows=z,b.numPointShadows=w,b.numSpotShadows=D,b.numSpotMaps=L,b.numLightProbes=c,Z.version=xO++}function H(U,G){let F=0,N=0,q=0,O=0,B=0,R=0,E=G.matrixWorldInverse;for(let P=0,k=U.length;P<k;P++){let V=U[P];if(V.isSunLight){let z=Z.sun[F];z.direction.setFromMatrixPosition(V.matrixWorld),z.direction.transformDirection(E),F++}else if(V.isDirectionalLight){let z=Z.directional[N];z.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),z.direction.sub(K),z.direction.transformDirection(E),N++}else if(V.isSpotLight){let z=Z.spot[O];z.position.setFromMatrixPosition(V.matrixWorld),z.position.applyMatrix4(E),z.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),z.direction.sub(K),z.direction.transformDirection(E),O++}else if(V.isRectAreaLight){let z=Z.rectArea[B];z.position.setFromMatrixPosition(V.matrixWorld),z.position.applyMatrix4(E),X.identity(),W.copy(V.matrixWorld),W.premultiply(E),X.extractRotation(W),z.halfWidth.set(V.width*0.5,0,0),z.halfHeight.set(0,V.height*0.5,0),z.halfWidth.applyMatrix4(X),z.halfHeight.applyMatrix4(X),B++}else if(V.isPointLight){let z=Z.point[q];z.position.setFromMatrixPosition(V.matrixWorld),z.position.applyMatrix4(E),q++}else if(V.isHemisphereLight){let z=Z.hemi[R];z.direction.setFromMatrixPosition(V.matrixWorld),z.direction.transformDirection(E),R++}}}return{setup:Y,setupView:H,state:Z}}function t5(J){let $=new pO(J),Q=[],Z=[],K=[];function W(N){F.camera=N,Q.length=0,Z.length=0,K.length=0}function X(N){Q.push(N)}function Y(N){Z.push(N)}function H(N){K.push(N)}function U(){$.setup(Q)}function G(N){$.setupView(Q,N)}let F={lightsArray:Q,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:$,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:U,setupLightsView:G,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function mO(J){let $=new WeakMap;function Q(K,W=0){let X=$.get(K),Y;if(X===void 0)Y=new t5(J),$.set(K,[Y]);else if(W>=X.length)Y=new t5(J),X.push(Y);else Y=X[W];return Y}function Z(){$=new WeakMap}return{get:Q,dispose:Z}}var lO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uO=`uniform sampler2D shadow_pass;
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
}`,dO=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],cO=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],e5=new $9,LQ=new T,hX=new T;function nO(J,$,Q){let Z=new $J,K=new R0,W=new R0,X=new u9,Y=new RX,H=new LX,U={},G=Q.maxTextureSize,F={[L6]:C8,[C8]:L6,[o9]:o9},N=new e9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R0},radius:{value:4}},vertexShader:lO,fragmentShader:uO}),q=N.clone();q.defines.HORIZONTAL_PASS=1;let O=new b9;O.setAttribute("position",new r9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new A0(O,N),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c6;let E=this.type;this.render=function(w,D,L){if(R.enabled===!1)return;if(R.autoUpdate===!1&&R.needsUpdate===!1)return;if(w.length===0)return;if(this.type===PH)r0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=c6;let M=J.getRenderTarget(),c=J.getActiveCubeFace(),b=J.getActiveMipmapLevel(),l=J.state;if(l.setBlending(K7),l.buffers.depth.getReversed()===!0)l.buffers.color.setClear(0,0,0,0);else l.buffers.color.setClear(1,1,1,1);l.buffers.depth.setTest(!0),l.setScissorTest(!1);let r=E!==this.type;if(r)D.traverse(function(v){if(v.material)if(Array.isArray(v.material))v.material.forEach((y)=>y.needsUpdate=!0);else v.material.needsUpdate=!0});for(let v=0,y=w.length;v<y;v++){let h=w[v],f=h.shadow;if(f===void 0){r0("WebGLShadowMap:",h,"has no shadow.");continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;K.copy(f.mapSize);let o=f.getFrameExtents();if(K.multiply(o),W.copy(f.mapSize),K.x>G||K.y>G){if(K.x>G)W.x=Math.floor(G/o.x),K.x=W.x*o.x,f.mapSize.x=W.x;if(K.y>G)W.y=Math.floor(G/o.y),K.y=W.y*o.y,f.mapSize.y=W.y}let g=J.state.buffers.depth.getReversed();if(f.camera._reversedDepth=g,f.map===null||r===!0){if(f.map!==null){if(f.map.depthTexture!==null)f.map.depthTexture.dispose(),f.map.depthTexture=null;f.map.dispose()}if(this.type===iJ){if(h.isPointLight){r0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}f.map=new W8(K.x,K.y,{format:r6,type:V8,minFilter:L8,magFilter:L8,generateMipmaps:!1}),f.map.texture.name=h.name+".shadowMap",f.map.depthTexture=new ZJ(K.x,K.y,t7),f.map.depthTexture.name=h.name+".shadowMapDepth",f.map.depthTexture.format=o6,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=D7,f.map.depthTexture.magFilter=D7}else{if(h.isPointLight)f.map=new pX(K.x),f.map.depthTexture=new UX(K.x,B6);else f.map=new W8(K.x,K.y),f.map.depthTexture=new ZJ(K.x,K.y,B6);if(f.map.depthTexture.name=h.name+".shadowMap",f.map.depthTexture.format=o6,this.type===c6)f.map.depthTexture.compareFunction=g?hZ:bZ,f.map.depthTexture.minFilter=L8,f.map.depthTexture.magFilter=L8;else f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=D7,f.map.depthTexture.magFilter=D7}f.camera.updateProjectionMatrix()}if(f.map.isWebGLCubeRenderTarget!==!0&&(f.map.width!==K.x||f.map.height!==K.y))f.map.setSize(K.x,K.y);let a=f.map.isWebGLCubeRenderTarget?6:f.getViewportCount();if(h.isPointLight!==!0)f.updateMatrices(h,L);for(let j=0;j<a;j++){let i=f.getCamera(j);if(h.isPointLight){let{camera:X0,matrix:K0}=f,H0=h.distance||X0.far;if(H0!==X0.far)X0.far=H0,X0.updateProjectionMatrix();LQ.setFromMatrixPosition(h.matrixWorld),X0.position.copy(LQ),hX.copy(X0.position),hX.add(dO[j]),X0.up.copy(cO[j]),X0.lookAt(hX),X0.updateMatrixWorld(),K0.makeTranslation(-LQ.x,-LQ.y,-LQ.z),e5.multiplyMatrices(X0.projectionMatrix,X0.matrixWorldInverse),f._frustum.setFromProjectionMatrix(e5,X0.coordinateSystem,X0.reversedDepth)}if(f.map.isWebGLCubeRenderTarget)J.setRenderTarget(f.map,j),J.clear();else{if(j===0)J.setRenderTarget(f.map),J.clear();let X0=f.getViewport(j);X.set(W.x*X0.x,W.y*X0.y,W.x*X0.z,W.y*X0.w),l.viewport(X)}Z=f.getFrustum(j),V(D,L,i,h,this.type)}if(f.isPointLightShadow!==!0&&this.type===iJ)P(f,L);f.needsUpdate=!1}E=this.type,R.needsUpdate=!1,J.setRenderTarget(M,c,b)};function P(w,D){let L=$.update(B);if(N.defines.VSM_SAMPLES!==w.blurSamples)N.defines.VSM_SAMPLES=w.blurSamples,q.defines.VSM_SAMPLES=w.blurSamples,N.needsUpdate=!0,q.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new W8(K.x,K.y,{format:r6,type:V8});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);N.uniforms.shadow_pass.value=w.map.depthTexture,N.uniforms.resolution.value.set(w.map.width,w.map.height),N.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(D,null,L,N,B,null),q.uniforms.shadow_pass.value=w.mapPass.texture,q.uniforms.resolution.value.set(w.map.width,w.map.height),q.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(D,null,L,q,B,null)}function k(w,D,L,M){let c=null,b=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)c=b;else if(c=L.isPointLight===!0?H:Y,J.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let l=c.uuid,r=D.uuid,v=U[l];if(v===void 0)v={},U[l]=v;let y=v[r];if(y===void 0)y=c.clone(),v[r]=y,D.addEventListener("dispose",z);c=y}if(c.visible=D.visible,c.wireframe=D.wireframe,M===iJ)c.side=D.shadowSide!==null?D.shadowSide:D.side;else c.side=D.shadowSide!==null?D.shadowSide:F[D.side];if(c.alphaMap=D.alphaMap,c.alphaTest=D.alphaToCoverage===!0?0.5:D.alphaTest,c.map=D.map,c.clipShadows=D.clipShadows,c.clippingPlanes=D.clippingPlanes,c.clipIntersection=D.clipIntersection,c.displacementMap=D.displacementMap,c.displacementScale=D.displacementScale,c.displacementBias=D.displacementBias,c.wireframeLinewidth=D.wireframeLinewidth,c.linewidth=D.linewidth,L.isPointLight===!0&&c.isMeshDistanceMaterial===!0){let l=J.properties.get(c);l.light=L}return c}function V(w,D,L,M,c){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&c===iJ)&&(!w.frustumCulled||w.intersectsFrustum(Z))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);let r=$.update(w),v=w.material;if(Array.isArray(v)){let y=r.groups;for(let h=0,f=y.length;h<f;h++){let o=y[h],g=v[o.materialIndex];if(g&&g.visible){let a=k(w,g,M,c);w.onBeforeShadow(J,w,D,L,r,a,o),J.renderBufferDirect(L,null,r,a,w,o),w.onAfterShadow(J,w,D,L,r,a,o)}}}else if(v.visible){let y=k(w,v,M,c);w.onBeforeShadow(J,w,D,L,r,y,null),J.renderBufferDirect(L,null,r,y,w,null),w.onAfterShadow(J,w,D,L,r,y,null)}}}let l=w.children;for(let r=0,v=l.length;r<v;r++)V(l[r],D,L,M,c)}function z(w){w.target.removeEventListener("dispose",z);for(let L in U){let M=U[L],c=w.target.uuid;if(c in M)M[c].dispose(),delete M[c]}}}function sO(J,$){function Q(){let n=!1,w0=new u9,G0=null,S0=new u9(0,0,0,0);return{setMask:function(d0){if(G0!==d0&&!n)J.colorMask(d0,d0,d0,d0),G0=d0},setLocked:function(d0){n=d0},setClear:function(d0,M0,f0,X9,n9){if(n9===!0)d0*=X9,M0*=X9,f0*=X9;if(w0.set(d0,M0,f0,X9),S0.equals(w0)===!1)J.clearColor(d0,M0,f0,X9),S0.copy(w0)},reset:function(){n=!1,G0=null,S0.set(-1,0,0,0)}}}function Z(){let n=!1,w0=!1,G0=null,S0=null,d0=null;return{setReversed:function(M0){if(w0!==M0){let f0=$.get("EXT_clip_control");if(M0)f0.clipControlEXT(f0.LOWER_LEFT_EXT,f0.ZERO_TO_ONE_EXT);else f0.clipControlEXT(f0.LOWER_LEFT_EXT,f0.NEGATIVE_ONE_TO_ONE_EXT);w0=M0;let X9=d0;d0=null,this.setClear(X9)}},getReversed:function(){return w0},setTest:function(M0){if(M0)x(J.DEPTH_TEST);else s(J.DEPTH_TEST)},setMask:function(M0){if(G0!==M0&&!n)J.depthMask(M0),G0=M0},setFunc:function(M0){if(w0)M0=V5[M0];if(S0!==M0){switch(M0){case cH:J.depthFunc(J.NEVER);break;case nH:J.depthFunc(J.ALWAYS);break;case sH:J.depthFunc(J.LESS);break;case OW:J.depthFunc(J.LEQUAL);break;case iH:J.depthFunc(J.EQUAL);break;case oH:J.depthFunc(J.GEQUAL);break;case aH:J.depthFunc(J.GREATER);break;case rH:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}S0=M0}},setLocked:function(M0){n=M0},setClear:function(M0){if(d0!==M0){if(d0=M0,w0)M0=1-M0;J.clearDepth(M0)}},reset:function(){n=!1,G0=null,S0=null,d0=null,w0=!1}}}function K(){let n=!1,w0=null,G0=null,S0=null,d0=null,M0=null,f0=null,X9=null,n9=null;return{setTest:function(y9){if(!n)if(y9)x(J.STENCIL_TEST);else s(J.STENCIL_TEST)},setMask:function(y9){if(w0!==y9&&!n)J.stencilMask(y9),w0=y9},setFunc:function(y9,k8,m8){if(G0!==y9||S0!==k8||d0!==m8)J.stencilFunc(y9,k8,m8),G0=y9,S0=k8,d0=m8},setOp:function(y9,k8,m8){if(M0!==y9||f0!==k8||X9!==m8)J.stencilOp(y9,k8,m8),M0=y9,f0=k8,X9=m8},setLocked:function(y9){n=y9},setClear:function(y9){if(n9!==y9)J.clearStencil(y9),n9=y9},reset:function(){n=!1,w0=null,G0=null,S0=null,d0=null,M0=null,f0=null,X9=null,n9=null}}}let W=new Q,X=new Z,Y=new K,H=new WeakMap,U=new WeakMap,G={},F={},N={},q=new WeakMap,O=[],B=null,R=!1,E=null,P=null,k=null,V=null,z=null,w=null,D=null,L=new b0(0,0,0),M=0,c=!1,b=null,l=null,r=null,v=null,y=null,h=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),f=!1,o=0,g=J.getParameter(J.VERSION);if(g.indexOf("WebGL")!==-1)o=parseFloat(/^WebGL (\d)/.exec(g)[1]),f=o>=1;else if(g.indexOf("OpenGL ES")!==-1)o=parseFloat(/^OpenGL ES (\d)/.exec(g)[1]),f=o>=2;let a=null,j={},i=J.getParameter(J.SCISSOR_BOX),X0=J.getParameter(J.VIEWPORT),K0=new u9().fromArray(i),H0=new u9().fromArray(X0);function Z0(n,w0,G0,S0){let d0=new Uint8Array(4),M0=J.createTexture();J.bindTexture(n,M0),J.texParameteri(n,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(n,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let f0=0;f0<G0;f0++)if(n===J.TEXTURE_3D||n===J.TEXTURE_2D_ARRAY)J.texImage3D(w0,0,J.RGBA,1,1,S0,0,J.RGBA,J.UNSIGNED_BYTE,d0);else J.texImage2D(w0+f0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,d0);return M0}let S={};S[J.TEXTURE_2D]=Z0(J.TEXTURE_2D,J.TEXTURE_2D,1),S[J.TEXTURE_CUBE_MAP]=Z0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),S[J.TEXTURE_2D_ARRAY]=Z0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),S[J.TEXTURE_3D]=Z0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),x(J.DEPTH_TEST),X.setFunc(OW),K9(!1),t0(FW),x(J.CULL_FACE),B0(K7);function x(n){if(G[n]!==!0)J.enable(n),G[n]=!0}function s(n){if(G[n]!==!1)J.disable(n),G[n]=!1}function Y0(n,w0){if(N[n]!==w0){if(J.bindFramebuffer(n,w0),N[n]=w0,n===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=w0;if(n===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=w0;return!0}return!1}function t(n,w0){let G0=O,S0=!1;if(n){if(G0=q.get(w0),G0===void 0)G0=[],q.set(w0,G0);let d0=n.textures;if(G0.length!==d0.length||G0[0]!==J.COLOR_ATTACHMENT0){for(let M0=0,f0=d0.length;M0<f0;M0++)G0[M0]=J.COLOR_ATTACHMENT0+M0;G0.length=d0.length,S0=!0}}else if(G0[0]!==J.BACK)G0[0]=J.BACK,S0=!0;if(S0)J.drawBuffers(G0)}function D0(n){if(B!==n)return J.useProgram(n),B=n,!0;return!1}let V0={[oJ]:J.FUNC_ADD,[zH]:J.FUNC_SUBTRACT,[AH]:J.FUNC_REVERSE_SUBTRACT};V0[_H]=J.MIN,V0[TH]=J.MAX;let _0={[wH]:J.ZERO,[SH]:J.ONE,[jH]:J.SRC_COLOR,[vH]:J.SRC_ALPHA,[pH]:J.SRC_ALPHA_SATURATE,[xH]:J.DST_COLOR,[bH]:J.DST_ALPHA,[yH]:J.ONE_MINUS_SRC_COLOR,[fH]:J.ONE_MINUS_SRC_ALPHA,[gH]:J.ONE_MINUS_DST_COLOR,[hH]:J.ONE_MINUS_DST_ALPHA,[mH]:J.CONSTANT_COLOR,[lH]:J.ONE_MINUS_CONSTANT_COLOR,[uH]:J.CONSTANT_ALPHA,[dH]:J.ONE_MINUS_CONSTANT_ALPHA};function B0(n,w0,G0,S0,d0,M0,f0,X9,n9,y9){if(n===K7){if(R===!0)s(J.BLEND),R=!1;return}if(R===!1)x(J.BLEND),R=!0;if(n!==IH){if(n!==E||y9!==c){if(P!==oJ||z!==oJ)J.blendEquation(J.FUNC_ADD),P=oJ,z=oJ;if(y9)switch(n){case n$:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case y7:J.blendFunc(J.ONE,J.ONE);break;case EW:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case qW:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:Z9("WebGLState: Invalid blending: ",n);break}else switch(n){case n$:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case y7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case EW:Z9("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qW:Z9("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Z9("WebGLState: Invalid blending: ",n);break}k=null,V=null,w=null,D=null,L.set(0,0,0),M=0,E=n,c=y9}return}if(d0=d0||w0,M0=M0||G0,f0=f0||S0,w0!==P||d0!==z)J.blendEquationSeparate(V0[w0],V0[d0]),P=w0,z=d0;if(G0!==k||S0!==V||M0!==w||f0!==D)J.blendFuncSeparate(_0[G0],_0[S0],_0[M0],_0[f0]),k=G0,V=S0,w=M0,D=f0;if(X9.equals(L)===!1||n9!==M)J.blendColor(X9.r,X9.g,X9.b,n9),L.copy(X9),M=n9;E=n,c=!1}function u0(n,w0){n.side===o9?s(J.CULL_FACE):x(J.CULL_FACE);let G0=n.side===C8;if(w0)G0=!G0;K9(G0),n.blending===n$&&n.transparent===!1?B0(K7):B0(n.blending,n.blendEquation,n.blendSrc,n.blendDst,n.blendEquationAlpha,n.blendSrcAlpha,n.blendDstAlpha,n.blendColor,n.blendAlpha,n.premultipliedAlpha),X.setFunc(n.depthFunc),X.setTest(n.depthTest),X.setMask(n.depthWrite),W.setMask(n.colorWrite);let S0=n.stencilWrite;if(Y.setTest(S0),S0)Y.setMask(n.stencilWriteMask),Y.setFunc(n.stencilFunc,n.stencilRef,n.stencilFuncMask),Y.setOp(n.stencilFail,n.stencilZFail,n.stencilZPass);D9(n.polygonOffset,n.polygonOffsetFactor,n.polygonOffsetUnits),n.alphaToCoverage===!0?x(J.SAMPLE_ALPHA_TO_COVERAGE):s(J.SAMPLE_ALPHA_TO_COVERAGE)}function K9(n){if(b!==n){if(n)J.frontFace(J.CW);else J.frontFace(J.CCW);b=n}}function t0(n){if(n!==MH){if(x(J.CULL_FACE),n!==l)if(n===FW)J.cullFace(J.BACK);else if(n===CH)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else s(J.CULL_FACE);l=n}function W9(n){if(n!==r){if(f)J.lineWidth(n);r=n}}function D9(n,w0,G0){if(n){if(x(J.POLYGON_OFFSET_FILL),v!==w0||y!==G0){if(v=w0,y=G0,X.getReversed())w0=-w0;J.polygonOffset(w0,G0)}}else s(J.POLYGON_OFFSET_FILL)}function L9(n){if(n)x(J.SCISSOR_TEST);else s(J.SCISSOR_TEST)}function p(n){if(n===void 0)n=J.TEXTURE0+h-1;if(a!==n)J.activeTexture(n),a=n}function x9(n,w0,G0){if(G0===void 0)if(a===null)G0=J.TEXTURE0+h-1;else G0=a;let S0=j[G0];if(S0===void 0)S0={type:void 0,texture:void 0},j[G0]=S0;if(S0.type!==n||S0.texture!==w0){if(a!==G0)J.activeTexture(G0),a=G0;J.bindTexture(n,w0||S[n]),S0.type=n,S0.texture=w0}}function z9(){let n=j[a];if(n!==void 0&&n.type!==void 0)J.bindTexture(n.type,null),n.type=void 0,n.texture=void 0}function A9(){try{J.compressedTexImage2D(...arguments)}catch(n){Z9("WebGLState:",n)}}function _(){try{J.compressedTexImage3D(...arguments)}catch(n){Z9("WebGLState:",n)}}function C(){try{J.texSubImage2D(...arguments)}catch(n){Z9("WebGLState:",n)}}function m(){try{J.texSubImage3D(...arguments)}catch(n){Z9("WebGLState:",n)}}function $0(){try{J.compressedTexSubImage2D(...arguments)}catch(n){Z9("WebGLState:",n)}}function L0(){try{J.compressedTexSubImage3D(...arguments)}catch(n){Z9("WebGLState:",n)}}function P0(){try{J.texStorage2D(...arguments)}catch(n){Z9("WebGLState:",n)}}function v0(){try{J.texStorage3D(...arguments)}catch(n){Z9("WebGLState:",n)}}function N0(){try{J.texImage2D(...arguments)}catch(n){Z9("WebGLState:",n)}}function q0(){try{J.texImage3D(...arguments)}catch(n){Z9("WebGLState:",n)}}function h0(n){if(F[n]!==void 0)return F[n];else return J.getParameter(n)}function y0(n,w0){if(F[n]!==w0)J.pixelStorei(n,w0),F[n]=w0}function I0(n){if(K0.equals(n)===!1)J.scissor(n.x,n.y,n.z,n.w),K0.copy(n)}function z0(n){if(H0.equals(n)===!1)J.viewport(n.x,n.y,n.z,n.w),H0.copy(n)}function a0(n,w0){let G0=U.get(w0);if(G0===void 0)G0=new WeakMap,U.set(w0,G0);let S0=G0.get(n);if(S0===void 0)S0=J.getUniformBlockIndex(w0,n.name),G0.set(n,S0)}function J9(n,w0){let S0=U.get(w0).get(n);if(H.get(w0)!==S0)J.uniformBlockBinding(w0,S0,n.__bindingPointIndex),H.set(w0,S0)}function T9(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},F={},a=null,j={},N={},q=new WeakMap,O=[],B=null,R=!1,E=null,P=null,k=null,V=null,z=null,w=null,D=null,L=new b0(0,0,0),M=0,c=!1,b=null,l=null,r=null,v=null,y=null,K0.set(0,0,J.canvas.width,J.canvas.height),H0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:x,disable:s,bindFramebuffer:Y0,drawBuffers:t,useProgram:D0,setBlending:B0,setMaterial:u0,setFlipSided:K9,setCullFace:t0,setLineWidth:W9,setPolygonOffset:D9,setScissorTest:L9,activeTexture:p,bindTexture:x9,unbindTexture:z9,compressedTexImage2D:A9,compressedTexImage3D:_,texImage2D:N0,texImage3D:q0,pixelStorei:y0,getParameter:h0,updateUBOMapping:a0,uniformBlockBinding:J9,texStorage2D:P0,texStorage3D:v0,texSubImage2D:C,texSubImage3D:m,compressedTexSubImage2D:$0,compressedTexSubImage3D:L0,scissor:I0,viewport:z0,reset:T9}}function iO(J,$,Q,Z,K,W,X){let Y=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new R0,G=new WeakMap,F=new Set,N,q=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(_){}function B(_,C){return O?new OffscreenCanvas(_,C):dJ("canvas")}function R(_,C,m){let $0=1,L0=A9(_);if(L0.width>m||L0.height>m)$0=m/Math.max(L0.width,L0.height);if($0<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let P0=Math.floor($0*L0.width),v0=Math.floor($0*L0.height);if(N===void 0)N=B(P0,v0);let N0=C?B(P0,v0):N;return N0.width=P0,N0.height=v0,N0.getContext("2d").drawImage(_,0,0,P0,v0),r0("WebGLRenderer: Texture has been resized from ("+L0.width+"x"+L0.height+") to ("+P0+"x"+v0+")."),N0}else{if("data"in _)r0("WebGLRenderer: Image in DataTexture is too big ("+L0.width+"x"+L0.height+").");return _}return _}function E(_){return _.generateMipmaps}function P(_){J.generateMipmap(_)}function k(_){if(_.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(_.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(_,C,m,$0,L0,P0=!1){if(_!==null){if(J[_]!==void 0)return J[_];r0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let v0;if($0){if(v0=$.get("EXT_texture_norm16"),!v0)r0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let N0=C;if(C===J.RED){if(m===J.FLOAT)N0=J.R32F;if(m===J.HALF_FLOAT)N0=J.R16F;if(m===J.UNSIGNED_BYTE)N0=J.R8;if(m===J.UNSIGNED_SHORT&&v0)N0=v0.R16_EXT;if(m===J.SHORT&&v0)N0=v0.R16_SNORM_EXT}if(C===J.RED_INTEGER){if(m===J.UNSIGNED_BYTE)N0=J.R8UI;if(m===J.UNSIGNED_SHORT)N0=J.R16UI;if(m===J.UNSIGNED_INT)N0=J.R32UI;if(m===J.BYTE)N0=J.R8I;if(m===J.SHORT)N0=J.R16I;if(m===J.INT)N0=J.R32I}if(C===J.RG){if(m===J.FLOAT)N0=J.RG32F;if(m===J.HALF_FLOAT)N0=J.RG16F;if(m===J.UNSIGNED_BYTE)N0=J.RG8;if(m===J.UNSIGNED_SHORT&&v0)N0=v0.RG16_EXT;if(m===J.SHORT&&v0)N0=v0.RG16_SNORM_EXT}if(C===J.RG_INTEGER){if(m===J.UNSIGNED_BYTE)N0=J.RG8UI;if(m===J.UNSIGNED_SHORT)N0=J.RG16UI;if(m===J.UNSIGNED_INT)N0=J.RG32UI;if(m===J.BYTE)N0=J.RG8I;if(m===J.SHORT)N0=J.RG16I;if(m===J.INT)N0=J.RG32I}if(C===J.RGB_INTEGER){if(m===J.UNSIGNED_BYTE)N0=J.RGB8UI;if(m===J.UNSIGNED_SHORT)N0=J.RGB16UI;if(m===J.UNSIGNED_INT)N0=J.RGB32UI;if(m===J.BYTE)N0=J.RGB8I;if(m===J.SHORT)N0=J.RGB16I;if(m===J.INT)N0=J.RGB32I}if(C===J.RGBA_INTEGER){if(m===J.UNSIGNED_BYTE)N0=J.RGBA8UI;if(m===J.UNSIGNED_SHORT)N0=J.RGBA16UI;if(m===J.UNSIGNED_INT)N0=J.RGBA32UI;if(m===J.BYTE)N0=J.RGBA8I;if(m===J.SHORT)N0=J.RGBA16I;if(m===J.INT)N0=J.RGBA32I}if(C===J.RGB){if(m===J.UNSIGNED_SHORT&&v0)N0=v0.RGB16_EXT;if(m===J.SHORT&&v0)N0=v0.RGB16_SNORM_EXT;if(m===J.UNSIGNED_INT_5_9_9_9_REV)N0=J.RGB9_E5;if(m===J.UNSIGNED_INT_10F_11F_11F_REV)N0=J.R11F_G11F_B10F}if(C===J.RGBA){let q0=P0?QX:R9.getTransfer(L0);if(m===J.FLOAT)N0=J.RGBA32F;if(m===J.HALF_FLOAT)N0=J.RGBA16F;if(m===J.UNSIGNED_BYTE)N0=q0===d9?J.SRGB8_ALPHA8:J.RGBA8;if(m===J.UNSIGNED_SHORT&&v0)N0=v0.RGBA16_EXT;if(m===J.SHORT&&v0)N0=v0.RGBA16_SNORM_EXT;if(m===J.UNSIGNED_SHORT_4_4_4_4)N0=J.RGBA4;if(m===J.UNSIGNED_SHORT_5_5_5_1)N0=J.RGB5_A1}if(N0===J.R16F||N0===J.R32F||N0===J.RG16F||N0===J.RG32F||N0===J.RGBA16F||N0===J.RGBA32F)$.get("EXT_color_buffer_float");return N0}function z(_,C){let m;if(_){if(C===null||C===B6||C===eJ)m=J.DEPTH24_STENCIL8;else if(C===t7)m=J.DEPTH32F_STENCIL8;else if(C===JQ)m=J.DEPTH24_STENCIL8,r0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(C===null||C===B6||C===eJ)m=J.DEPTH_COMPONENT24;else if(C===t7)m=J.DEPTH_COMPONENT32F;else if(C===JQ)m=J.DEPTH_COMPONENT16;return m}function w(_,C){if(E(_)===!0||_.isFramebufferTexture&&_.minFilter!==D7&&_.minFilter!==L8)return Math.log2(Math.max(C.width,C.height))+1;else if(_.mipmaps!==void 0&&_.mipmaps.length>0)return _.mipmaps.length;else if(_.isCompressedTexture&&Array.isArray(_.image))return C.mipmaps.length;else return 1}function D(_){let C=_.target;if(C.removeEventListener("dispose",D),M(C),C.isVideoTexture)G.delete(C);if(C.isHTMLTexture)F.delete(C)}function L(_){let C=_.target;C.removeEventListener("dispose",L),b(C)}function M(_){let C=Z.get(_);if(C.__webglInit===void 0)return;let m=_.source,$0=q.get(m);if($0){let L0=$0[C.__cacheKey];if(L0.usedTimes--,L0.usedTimes===0)c(_);if(Object.keys($0).length===0)q.delete(m)}Z.remove(_)}function c(_){let C=Z.get(_);J.deleteTexture(C.__webglTexture);let m=_.source,$0=q.get(m);delete $0[C.__cacheKey],X.memory.textures--}function b(_){let C=Z.get(_);if(_.depthTexture)_.depthTexture.dispose(),Z.remove(_.depthTexture);if(_.isWebGLCubeRenderTarget)for(let $0=0;$0<6;$0++){if(Array.isArray(C.__webglFramebuffer[$0]))for(let L0=0;L0<C.__webglFramebuffer[$0].length;L0++)J.deleteFramebuffer(C.__webglFramebuffer[$0][L0]);else J.deleteFramebuffer(C.__webglFramebuffer[$0]);if(C.__webglDepthbuffer)J.deleteRenderbuffer(C.__webglDepthbuffer[$0])}else{if(Array.isArray(C.__webglFramebuffer))for(let $0=0;$0<C.__webglFramebuffer.length;$0++)J.deleteFramebuffer(C.__webglFramebuffer[$0]);else J.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer)J.deleteRenderbuffer(C.__webglDepthbuffer);if(C.__webglMultisampledFramebuffer)J.deleteFramebuffer(C.__webglMultisampledFramebuffer);if(C.__webglColorRenderbuffer){for(let $0=0;$0<C.__webglColorRenderbuffer.length;$0++)if(C.__webglColorRenderbuffer[$0])J.deleteRenderbuffer(C.__webglColorRenderbuffer[$0])}if(C.__webglDepthRenderbuffer)J.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let m=_.textures;for(let $0=0,L0=m.length;$0<L0;$0++){let P0=Z.get(m[$0]);if(P0.__webglTexture)J.deleteTexture(P0.__webglTexture),X.memory.textures--;Z.remove(m[$0])}Z.remove(_)}let l=0;function r(){l=0}function v(){return l}function y(_){l=_}function h(){let _=l;if(_>=K.maxTextures)r0("WebGLTextures: Trying to use "+(_+1)+" texture units while this GPU supports only "+K.maxTextures);return l+=1,_}function f(_){let C=[];return C.push(_.wrapS),C.push(_.wrapT),C.push(_.wrapR||0),C.push(_.magFilter),C.push(_.minFilter),C.push(_.anisotropy),C.push(_.internalFormat),C.push(_.format),C.push(_.type),C.push(_.generateMipmaps),C.push(_.premultiplyAlpha),C.push(_.flipY),C.push(_.unpackAlignment),C.push(_.colorSpace),C.join()}function o(_,C){let m=Z.get(_);if(_.isVideoTexture)x9(_);if(_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&m.__version!==_.version){let $0=_.image;if($0===null)r0("WebGLRenderer: Texture marked for update but no image data found.");else if($0.complete===!1)r0("WebGLRenderer: Texture marked for update but image is incomplete");else{s(m,_,C);return}}else if(_.isExternalTexture)m.__webglTexture=_.sourceTexture?_.sourceTexture:null;Q.bindTexture(J.TEXTURE_2D,m.__webglTexture,J.TEXTURE0+C)}function g(_,C){let m=Z.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&m.__version!==_.version){s(m,_,C);return}else if(_.isExternalTexture)m.__webglTexture=_.sourceTexture?_.sourceTexture:null;Q.bindTexture(J.TEXTURE_2D_ARRAY,m.__webglTexture,J.TEXTURE0+C)}function a(_,C){let m=Z.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&m.__version!==_.version){s(m,_,C);return}Q.bindTexture(J.TEXTURE_3D,m.__webglTexture,J.TEXTURE0+C)}function j(_,C){let m=Z.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&m.__version!==_.version){Y0(m,_,C);return}Q.bindTexture(J.TEXTURE_CUBE_MAP,m.__webglTexture,J.TEXTURE0+C)}let i={[V6]:J.REPEAT,[rJ]:J.CLAMP_TO_EDGE,[AZ]:J.MIRRORED_REPEAT},X0={[D7]:J.NEAREST,[_Z]:J.NEAREST_MIPMAP_NEAREST,[i6]:J.NEAREST_MIPMAP_LINEAR,[L8]:J.LINEAR,[tJ]:J.LINEAR_MIPMAP_NEAREST,[v7]:J.LINEAR_MIPMAP_LINEAR},K0={[U5]:J.NEVER,[q5]:J.ALWAYS,[N5]:J.LESS,[bZ]:J.LEQUAL,[G5]:J.EQUAL,[hZ]:J.GEQUAL,[F5]:J.GREATER,[E5]:J.NOTEQUAL};function H0(_,C){if(C.type===t7&&$.has("OES_texture_float_linear")===!1&&(C.magFilter===L8||C.magFilter===tJ||C.magFilter===i6||C.magFilter===v7||C.minFilter===L8||C.minFilter===tJ||C.minFilter===i6||C.minFilter===v7))r0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(_,J.TEXTURE_WRAP_S,i[C.wrapS]),J.texParameteri(_,J.TEXTURE_WRAP_T,i[C.wrapT]),_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texParameteri(_,J.TEXTURE_WRAP_R,i[C.wrapR]);if(J.texParameteri(_,J.TEXTURE_MAG_FILTER,X0[C.magFilter]),J.texParameteri(_,J.TEXTURE_MIN_FILTER,X0[C.minFilter]),C.compareFunction)J.texParameteri(_,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(_,J.TEXTURE_COMPARE_FUNC,K0[C.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===D7)return;if(C.minFilter!==i6&&C.minFilter!==v7)return;if(C.type===t7&&$.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||Z.get(C).__currentAnisotropy){let m=$.get("EXT_texture_filter_anisotropic");J.texParameterf(_,m.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,K.getMaxAnisotropy())),Z.get(C).__currentAnisotropy=C.anisotropy}}}function Z0(_,C){let m=!1;if(_.__webglInit===void 0)_.__webglInit=!0,C.addEventListener("dispose",D);let $0=C.source,L0=q.get($0);if(L0===void 0)L0={},q.set($0,L0);let P0=f(C);if(P0!==_.__cacheKey){if(L0[P0]===void 0)L0[P0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,m=!0;L0[P0].usedTimes++;let v0=L0[_.__cacheKey];if(v0!==void 0){if(L0[_.__cacheKey].usedTimes--,v0.usedTimes===0)c(C)}_.__cacheKey=P0,_.__webglTexture=L0[P0].texture}return m}function S(_,C,m){return Math.floor(Math.floor(_/m)/C)}function x(_,C,m,$0){let P0=_.updateRanges;if(P0.length===0)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,C.width,C.height,m,$0,C.data);else{P0.sort((y0,I0)=>y0.start-I0.start);let v0=0;for(let y0=1;y0<P0.length;y0++){let I0=P0[v0],z0=P0[y0],a0=I0.start+I0.count,J9=S(z0.start,C.width,4),T9=S(I0.start,C.width,4);if(z0.start<=a0+1&&J9===T9&&S(z0.start+z0.count-1,C.width,4)===J9)I0.count=Math.max(I0.count,z0.start+z0.count-I0.start);else++v0,P0[v0]=z0}P0.length=v0+1;let N0=Q.getParameter(J.UNPACK_ROW_LENGTH),q0=Q.getParameter(J.UNPACK_SKIP_PIXELS),h0=Q.getParameter(J.UNPACK_SKIP_ROWS);Q.pixelStorei(J.UNPACK_ROW_LENGTH,C.width);for(let y0=0,I0=P0.length;y0<I0;y0++){let z0=P0[y0],a0=Math.floor(z0.start/4),J9=Math.ceil(z0.count/4),T9=a0%C.width,n=Math.floor(a0/C.width),w0=J9,G0=1;Q.pixelStorei(J.UNPACK_SKIP_PIXELS,T9),Q.pixelStorei(J.UNPACK_SKIP_ROWS,n),Q.texSubImage2D(J.TEXTURE_2D,0,T9,n,w0,1,m,$0,C.data)}_.clearUpdateRanges(),Q.pixelStorei(J.UNPACK_ROW_LENGTH,N0),Q.pixelStorei(J.UNPACK_SKIP_PIXELS,q0),Q.pixelStorei(J.UNPACK_SKIP_ROWS,h0)}}function s(_,C,m){let $0=J.TEXTURE_2D;if(C.isDataArrayTexture||C.isCompressedArrayTexture)$0=J.TEXTURE_2D_ARRAY;if(C.isData3DTexture)$0=J.TEXTURE_3D;let L0=Z0(_,C),P0=C.source;Q.bindTexture($0,_.__webglTexture,J.TEXTURE0+m);let v0=Z.get(P0);if(P0.version!==v0.__version||L0===!0){if(Q.activeTexture(J.TEXTURE0+m),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){let G0=R9.getPrimaries(R9.workingColorSpace),S0=C.colorSpace===t6?null:R9.getPrimaries(C.colorSpace),d0=C.colorSpace===t6||G0===S0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,C.flipY),Q.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),Q.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,d0)}Q.pixelStorei(J.UNPACK_ALIGNMENT,C.unpackAlignment);let q0=R(C.image,!1,K.maxTextureSize);q0=z9(C,q0);let h0=W.convert(C.format,C.colorSpace),y0=W.convert(C.type),I0=V(C.internalFormat,h0,y0,C.normalized,C.colorSpace,C.isVideoTexture);H0($0,C);let z0,a0=C.mipmaps,J9=C.isVideoTexture!==!0,T9=v0.__version===void 0||L0===!0,n=P0.dataReady,w0=w(C,q0);if(C.isDepthTexture){if(I0=z(C.format===a6,C.type),T9)if(J9)Q.texStorage2D(J.TEXTURE_2D,1,I0,q0.width,q0.height);else Q.texImage2D(J.TEXTURE_2D,0,I0,q0.width,q0.height,0,h0,y0,null)}else if(C.isDataTexture)if(a0.length>0){if(J9&&T9)Q.texStorage2D(J.TEXTURE_2D,w0,I0,a0[0].width,a0[0].height);for(let G0=0,S0=a0.length;G0<S0;G0++)if(z0=a0[G0],J9){if(n)Q.texSubImage2D(J.TEXTURE_2D,G0,0,0,z0.width,z0.height,h0,y0,z0.data)}else Q.texImage2D(J.TEXTURE_2D,G0,I0,z0.width,z0.height,0,h0,y0,z0.data);C.generateMipmaps=!1}else if(J9){if(T9)Q.texStorage2D(J.TEXTURE_2D,w0,I0,q0.width,q0.height);if(n)x(C,q0,h0,y0)}else Q.texImage2D(J.TEXTURE_2D,0,I0,q0.width,q0.height,0,h0,y0,q0.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){if(J9&&T9)Q.texStorage3D(J.TEXTURE_2D_ARRAY,w0,I0,a0[0].width,a0[0].height,q0.depth);for(let G0=0,S0=a0.length;G0<S0;G0++)if(z0=a0[G0],C.format!==f7)if(h0!==null)if(J9){if(n)if(C.layerUpdates.size>0){let d0=SX(z0.width,z0.height,C.format,C.type);for(let M0 of C.layerUpdates){let f0=z0.data.subarray(M0*d0/z0.data.BYTES_PER_ELEMENT,(M0+1)*d0/z0.data.BYTES_PER_ELEMENT);Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,G0,0,0,M0,z0.width,z0.height,1,h0,f0)}}else Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,G0,0,0,0,z0.width,z0.height,q0.depth,h0,z0.data)}else Q.compressedTexImage3D(J.TEXTURE_2D_ARRAY,G0,I0,z0.width,z0.height,q0.depth,0,z0.data,0,0);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(J9){if(n)Q.texSubImage3D(J.TEXTURE_2D_ARRAY,G0,0,0,0,z0.width,z0.height,q0.depth,h0,y0,z0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,G0,I0,z0.width,z0.height,q0.depth,0,h0,y0,z0.data);if(C.layerUpdates.size>0)C.clearLayerUpdates()}else{if(J9&&T9)Q.texStorage2D(J.TEXTURE_2D,w0,I0,a0[0].width,a0[0].height);for(let G0=0,S0=a0.length;G0<S0;G0++)if(z0=a0[G0],C.format!==f7)if(h0!==null)if(J9){if(n)Q.compressedTexSubImage2D(J.TEXTURE_2D,G0,0,0,z0.width,z0.height,h0,z0.data)}else Q.compressedTexImage2D(J.TEXTURE_2D,G0,I0,z0.width,z0.height,0,z0.data);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(J9){if(n)Q.texSubImage2D(J.TEXTURE_2D,G0,0,0,z0.width,z0.height,h0,y0,z0.data)}else Q.texImage2D(J.TEXTURE_2D,G0,I0,z0.width,z0.height,0,h0,y0,z0.data)}else if(C.isDataArrayTexture)if(J9){if(T9)Q.texStorage3D(J.TEXTURE_2D_ARRAY,w0,I0,q0.width,q0.height,q0.depth);if(n)if(C.layerUpdates.size>0){let G0=SX(q0.width,q0.height,C.format,C.type);for(let S0 of C.layerUpdates){let d0=q0.data.subarray(S0*G0/q0.data.BYTES_PER_ELEMENT,(S0+1)*G0/q0.data.BYTES_PER_ELEMENT);Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,S0,q0.width,q0.height,1,h0,y0,d0)}C.clearLayerUpdates()}else Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,q0.width,q0.height,q0.depth,h0,y0,q0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,0,I0,q0.width,q0.height,q0.depth,0,h0,y0,q0.data);else if(C.isData3DTexture)if(J9){if(T9)Q.texStorage3D(J.TEXTURE_3D,w0,I0,q0.width,q0.height,q0.depth);if(n)Q.texSubImage3D(J.TEXTURE_3D,0,0,0,0,q0.width,q0.height,q0.depth,h0,y0,q0.data)}else Q.texImage3D(J.TEXTURE_3D,0,I0,q0.width,q0.height,q0.depth,0,h0,y0,q0.data);else if(C.isFramebufferTexture){if(T9)if(J9)Q.texStorage2D(J.TEXTURE_2D,w0,I0,q0.width,q0.height);else{let{width:G0,height:S0}=q0;for(let d0=0;d0<w0;d0++)Q.texImage2D(J.TEXTURE_2D,d0,I0,G0,S0,0,h0,y0,null),G0>>=1,S0>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in J){let G0=J.canvas;if(!G0.hasAttribute("layoutsubtree"))G0.setAttribute("layoutsubtree","true");if(q0.parentNode!==G0){G0.appendChild(q0),F.add(C),G0.onpaint=(S0)=>{let d0=S0.changedElements;for(let M0 of F)if(d0.includes(M0.image))M0.needsUpdate=!0},G0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,q0);else{let{RGBA:d0,RGBA:M0,UNSIGNED_BYTE:f0}=J;J.texElementImage2D(J.TEXTURE_2D,0,d0,M0,f0,q0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(a0.length>0){if(J9&&T9){let G0=A9(a0[0]);Q.texStorage2D(J.TEXTURE_2D,w0,I0,G0.width,G0.height)}for(let G0=0,S0=a0.length;G0<S0;G0++)if(z0=a0[G0],J9){if(n)Q.texSubImage2D(J.TEXTURE_2D,G0,0,0,h0,y0,z0)}else Q.texImage2D(J.TEXTURE_2D,G0,I0,h0,y0,z0);C.generateMipmaps=!1}else if(J9){if(T9){let G0=A9(q0);Q.texStorage2D(J.TEXTURE_2D,w0,I0,G0.width,G0.height)}if(n)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,h0,y0,q0)}else Q.texImage2D(J.TEXTURE_2D,0,I0,h0,y0,q0);if(E(C))P($0);if(v0.__version=P0.version,C.onUpdate)C.onUpdate(C)}_.__version=C.version}function Y0(_,C,m){if(C.image.length!==6)return;let $0=Z0(_,C),L0=C.source;Q.bindTexture(J.TEXTURE_CUBE_MAP,_.__webglTexture,J.TEXTURE0+m);let P0=Z.get(L0);if(L0.version!==P0.__version||$0===!0){Q.activeTexture(J.TEXTURE0+m);let v0=R9.getPrimaries(R9.workingColorSpace),N0=C.colorSpace===t6?null:R9.getPrimaries(C.colorSpace),q0=C.colorSpace===t6||v0===N0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,C.flipY),Q.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),Q.pixelStorei(J.UNPACK_ALIGNMENT,C.unpackAlignment),Q.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,q0);let h0=C.isCompressedTexture||C.image[0].isCompressedTexture,y0=C.image[0]&&C.image[0].isDataTexture,I0=[];for(let M0=0;M0<6;M0++){if(!h0&&!y0)I0[M0]=R(C.image[M0],!0,K.maxCubemapSize);else I0[M0]=y0?C.image[M0].image:C.image[M0];I0[M0]=z9(C,I0[M0])}let z0=I0[0],a0=W.convert(C.format,C.colorSpace),J9=W.convert(C.type),T9=V(C.internalFormat,a0,J9,C.normalized,C.colorSpace),n=C.isVideoTexture!==!0,w0=P0.__version===void 0||$0===!0,G0=L0.dataReady,S0=w(C,z0);H0(J.TEXTURE_CUBE_MAP,C);let d0;if(h0){if(n&&w0)Q.texStorage2D(J.TEXTURE_CUBE_MAP,S0,T9,z0.width,z0.height);for(let M0=0;M0<6;M0++){d0=I0[M0].mipmaps;for(let f0=0;f0<d0.length;f0++){let X9=d0[f0];if(C.format!==f7)if(a0!==null)if(n){if(G0)Q.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0,0,0,X9.width,X9.height,a0,X9.data)}else Q.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0,T9,X9.width,X9.height,0,X9.data);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(n){if(G0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0,0,0,X9.width,X9.height,a0,J9,X9.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0,T9,X9.width,X9.height,0,a0,J9,X9.data)}}}else{if(d0=C.mipmaps,n&&w0){if(d0.length>0)S0++;let M0=A9(I0[0]);Q.texStorage2D(J.TEXTURE_CUBE_MAP,S0,T9,M0.width,M0.height)}for(let M0=0;M0<6;M0++)if(y0){if(n){if(G0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,0,0,I0[M0].width,I0[M0].height,a0,J9,I0[M0].data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,T9,I0[M0].width,I0[M0].height,0,a0,J9,I0[M0].data);for(let f0=0;f0<d0.length;f0++){let n9=d0[f0].image[M0].image;if(n){if(G0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0+1,0,0,n9.width,n9.height,a0,J9,n9.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0+1,T9,n9.width,n9.height,0,a0,J9,n9.data)}}else{if(n){if(G0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,0,0,a0,J9,I0[M0])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,T9,a0,J9,I0[M0]);for(let f0=0;f0<d0.length;f0++){let X9=d0[f0];if(n){if(G0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0+1,0,0,a0,J9,X9.image[M0])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0+1,T9,a0,J9,X9.image[M0])}}}if(E(C))P(J.TEXTURE_CUBE_MAP);if(P0.__version=L0.version,C.onUpdate)C.onUpdate(C)}_.__version=C.version}function t(_,C,m,$0,L0,P0){let v0=W.convert(m.format,m.colorSpace),N0=W.convert(m.type),q0=V(m.internalFormat,v0,N0,m.normalized,m.colorSpace),h0=Z.get(C),y0=Z.get(m);if(y0.__renderTarget=C,!h0.__hasExternalTextures){let I0=Math.max(1,C.width>>P0),z0=Math.max(1,C.height>>P0);if(L0===J.TEXTURE_3D||L0===J.TEXTURE_2D_ARRAY)Q.texImage3D(L0,P0,q0,I0,z0,C.depth,0,v0,N0,null);else Q.texImage2D(L0,P0,q0,I0,z0,0,v0,N0,null)}if(Q.bindFramebuffer(J.FRAMEBUFFER,_),p(C))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,$0,L0,y0.__webglTexture,0,L9(C));else if(L0===J.TEXTURE_2D||L0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&L0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,$0,L0,y0.__webglTexture,P0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function D0(_,C,m){if(J.bindRenderbuffer(J.RENDERBUFFER,_),C.depthBuffer){let $0=C.depthTexture,L0=$0&&$0.isDepthTexture?$0.type:null,P0=z(C.stencilBuffer,L0),v0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(p(C))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,L9(C),P0,C.width,C.height);else if(m)J.renderbufferStorageMultisample(J.RENDERBUFFER,L9(C),P0,C.width,C.height);else J.renderbufferStorage(J.RENDERBUFFER,P0,C.width,C.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,v0,J.RENDERBUFFER,_)}else{let $0=C.textures;for(let L0=0;L0<$0.length;L0++){let P0=$0[L0],v0=W.convert(P0.format,P0.colorSpace),N0=W.convert(P0.type),q0=V(P0.internalFormat,v0,N0,P0.normalized,P0.colorSpace);if(p(C))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,L9(C),q0,C.width,C.height);else if(m)J.renderbufferStorageMultisample(J.RENDERBUFFER,L9(C),q0,C.width,C.height);else J.renderbufferStorage(J.RENDERBUFFER,q0,C.width,C.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function V0(_,C,m){let $0=C.isWebGLCubeRenderTarget===!0;if(Q.bindFramebuffer(J.FRAMEBUFFER,_),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let L0=Z.get(C.depthTexture);if(L0.__renderTarget=C,!L0.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0;if($0){if(L0.__webglInit===void 0)L0.__webglInit=!0,C.depthTexture.addEventListener("dispose",D);if(L0.__webglTexture===void 0){L0.__webglTexture=J.createTexture(),Q.bindTexture(J.TEXTURE_CUBE_MAP,L0.__webglTexture),H0(J.TEXTURE_CUBE_MAP,C.depthTexture);let h0=W.convert(C.depthTexture.format),y0=W.convert(C.depthTexture.type),I0;if(C.depthTexture.format===o6)I0=J.DEPTH_COMPONENT24;else if(C.depthTexture.format===a6)I0=J.DEPTH24_STENCIL8;for(let z0=0;z0<6;z0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+z0,0,I0,C.width,C.height,0,h0,y0,null)}}else o(C.depthTexture,0);let P0=L0.__webglTexture,v0=L9(C),N0=$0?J.TEXTURE_CUBE_MAP_POSITIVE_X+m:J.TEXTURE_2D,q0=C.depthTexture.format===a6?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(C.depthTexture.format===o6)if(p(C))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,q0,N0,P0,0,v0);else J.framebufferTexture2D(J.FRAMEBUFFER,q0,N0,P0,0);else if(C.depthTexture.format===a6)if(p(C))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,q0,N0,P0,0,v0);else J.framebufferTexture2D(J.FRAMEBUFFER,q0,N0,P0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _0(_){let C=Z.get(_),m=_.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==_.depthTexture){let $0=_.depthTexture;if(C.__depthDisposeCallback)C.__depthDisposeCallback();if($0){let L0=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,$0.removeEventListener("dispose",L0)};$0.addEventListener("dispose",L0),C.__depthDisposeCallback=L0}C.__boundDepthTexture=$0}if(_.depthTexture&&!C.__autoAllocateDepthBuffer)if(m)for(let $0=0;$0<6;$0++)V0(C.__webglFramebuffer[$0],_,$0);else{let $0=_.texture.mipmaps;if($0&&$0.length>0)V0(C.__webglFramebuffer[0],_,0);else V0(C.__webglFramebuffer,_,0)}else if(m){C.__webglDepthbuffer=[];for(let $0=0;$0<6;$0++)if(Q.bindFramebuffer(J.FRAMEBUFFER,C.__webglFramebuffer[$0]),C.__webglDepthbuffer[$0]===void 0)C.__webglDepthbuffer[$0]=J.createRenderbuffer(),D0(C.__webglDepthbuffer[$0],_,!1);else{let L0=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,P0=C.__webglDepthbuffer[$0];J.bindRenderbuffer(J.RENDERBUFFER,P0),J.framebufferRenderbuffer(J.FRAMEBUFFER,L0,J.RENDERBUFFER,P0)}}else{let $0=_.texture.mipmaps;if($0&&$0.length>0)Q.bindFramebuffer(J.FRAMEBUFFER,C.__webglFramebuffer[0]);else Q.bindFramebuffer(J.FRAMEBUFFER,C.__webglFramebuffer);if(C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=J.createRenderbuffer(),D0(C.__webglDepthbuffer,_,!1);else{let L0=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,P0=C.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,P0),J.framebufferRenderbuffer(J.FRAMEBUFFER,L0,J.RENDERBUFFER,P0)}}Q.bindFramebuffer(J.FRAMEBUFFER,null)}function B0(_,C,m){let $0=Z.get(_);if(C!==void 0)t($0.__webglFramebuffer,_,_.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(m!==void 0)_0(_)}function u0(_){let C=_.texture,m=Z.get(_),$0=Z.get(C);_.addEventListener("dispose",L);let L0=_.textures,P0=_.isWebGLCubeRenderTarget===!0,v0=L0.length>1;if(!v0){if($0.__webglTexture===void 0)$0.__webglTexture=J.createTexture();$0.__version=C.version,X.memory.textures++}if(P0){m.__webglFramebuffer=[];for(let N0=0;N0<6;N0++)if(C.mipmaps&&C.mipmaps.length>0){m.__webglFramebuffer[N0]=[];for(let q0=0;q0<C.mipmaps.length;q0++)m.__webglFramebuffer[N0][q0]=J.createFramebuffer()}else m.__webglFramebuffer[N0]=J.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){m.__webglFramebuffer=[];for(let N0=0;N0<C.mipmaps.length;N0++)m.__webglFramebuffer[N0]=J.createFramebuffer()}else m.__webglFramebuffer=J.createFramebuffer();if(v0)for(let N0=0,q0=L0.length;N0<q0;N0++){let h0=Z.get(L0[N0]);if(h0.__webglTexture===void 0)h0.__webglTexture=J.createTexture(),X.memory.textures++}if(_.samples>0&&p(_)===!1){m.__webglMultisampledFramebuffer=J.createFramebuffer(),m.__webglColorRenderbuffer=[],Q.bindFramebuffer(J.FRAMEBUFFER,m.__webglMultisampledFramebuffer);for(let N0=0;N0<L0.length;N0++){let q0=L0[N0];m.__webglColorRenderbuffer[N0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,m.__webglColorRenderbuffer[N0]);let h0=W.convert(q0.format,q0.colorSpace),y0=W.convert(q0.type),I0=V(q0.internalFormat,h0,y0,q0.normalized,q0.colorSpace,_.isXRRenderTarget===!0),z0=L9(_);J.renderbufferStorageMultisample(J.RENDERBUFFER,z0,I0,_.width,_.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+N0,J.RENDERBUFFER,m.__webglColorRenderbuffer[N0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),_.depthBuffer)m.__webglDepthRenderbuffer=J.createRenderbuffer(),D0(m.__webglDepthRenderbuffer,_,!0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}}if(P0){Q.bindTexture(J.TEXTURE_CUBE_MAP,$0.__webglTexture),H0(J.TEXTURE_CUBE_MAP,C);for(let N0=0;N0<6;N0++)if(C.mipmaps&&C.mipmaps.length>0)for(let q0=0;q0<C.mipmaps.length;q0++)t(m.__webglFramebuffer[N0][q0],_,C,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+N0,q0);else t(m.__webglFramebuffer[N0],_,C,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+N0,0);if(E(C))P(J.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(v0){for(let N0=0,q0=L0.length;N0<q0;N0++){let h0=L0[N0],y0=Z.get(h0),I0=J.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)I0=_.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(I0,y0.__webglTexture),H0(I0,h0),t(m.__webglFramebuffer,_,h0,J.COLOR_ATTACHMENT0+N0,I0,0),E(h0))P(I0)}Q.unbindTexture()}else{let N0=J.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)N0=_.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(N0,$0.__webglTexture),H0(N0,C),C.mipmaps&&C.mipmaps.length>0)for(let q0=0;q0<C.mipmaps.length;q0++)t(m.__webglFramebuffer[q0],_,C,J.COLOR_ATTACHMENT0,N0,q0);else t(m.__webglFramebuffer,_,C,J.COLOR_ATTACHMENT0,N0,0);if(E(C))P(N0);Q.unbindTexture()}if(_.depthBuffer)_0(_)}function K9(_){let C=_.textures;for(let m=0,$0=C.length;m<$0;m++){let L0=C[m];if(E(L0)){let P0=k(_),v0=Z.get(L0).__webglTexture;Q.bindTexture(P0,v0),P(P0),Q.unbindTexture()}}}let t0=[],W9=[];function D9(_){if(_.samples>0){if(p(_)===!1){let{textures:C,width:m,height:$0}=_,L0=J.COLOR_BUFFER_BIT,P0=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,v0=Z.get(_),N0=C.length>1;if(N0)for(let h0=0;h0<C.length;h0++)Q.bindFramebuffer(J.FRAMEBUFFER,v0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+h0,J.RENDERBUFFER,null),Q.bindFramebuffer(J.FRAMEBUFFER,v0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+h0,J.TEXTURE_2D,null,0);Q.bindFramebuffer(J.READ_FRAMEBUFFER,v0.__webglMultisampledFramebuffer);let q0=_.texture.mipmaps;if(q0&&q0.length>0)Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,v0.__webglFramebuffer[0]);else Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,v0.__webglFramebuffer);for(let h0=0;h0<C.length;h0++){if(_.resolveDepthBuffer){if(_.depthBuffer)L0|=J.DEPTH_BUFFER_BIT;if(_.stencilBuffer&&_.resolveStencilBuffer)L0|=J.STENCIL_BUFFER_BIT}if(N0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,v0.__webglColorRenderbuffer[h0]);let y0=Z.get(C[h0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,y0,0)}if(J.blitFramebuffer(0,0,m,$0,0,0,m,$0,L0,J.NEAREST),H===!0){if(t0.length=0,W9.length=0,t0.push(J.COLOR_ATTACHMENT0+h0),_.depthBuffer&&_.storeMultisampledDepthBuffer===!1)t0.push(P0),W9.push(P0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,W9);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,t0)}}if(Q.bindFramebuffer(J.READ_FRAMEBUFFER,null),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),N0)for(let h0=0;h0<C.length;h0++){Q.bindFramebuffer(J.FRAMEBUFFER,v0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+h0,J.RENDERBUFFER,v0.__webglColorRenderbuffer[h0]);let y0=Z.get(C[h0]).__webglTexture;Q.bindFramebuffer(J.FRAMEBUFFER,v0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+h0,J.TEXTURE_2D,y0,0)}Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,v0.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&H){let C=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[C])}}}function L9(_){return Math.min(K.maxSamples,_.samples)}function p(_){let C=Z.get(_);return _.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function x9(_){let C=X.render.frame;if(G.get(_)!==C)G.set(_,C),_.update()}function z9(_,C){let{colorSpace:m,format:$0,type:L0}=_;if(_.isCompressedTexture===!0||_.isVideoTexture===!0)return C;if(m!==s8&&m!==t6)if(R9.getTransfer(m)===d9){if($0!==f7||L0!==k7)r0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Z9("WebGLTextures: Unsupported texture color space:",m);return C}function A9(_){if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement)U.width=_.naturalWidth||_.width,U.height=_.naturalHeight||_.height;else if(typeof VideoFrame<"u"&&_ instanceof VideoFrame)U.width=_.displayWidth,U.height=_.displayHeight;else U.width=_.width,U.height=_.height;return U}this.allocateTextureUnit=h,this.resetTextureUnits=r,this.getTextureUnits=v,this.setTextureUnits=y,this.setTexture2D=o,this.setTexture2DArray=g,this.setTexture3D=a,this.setTextureCube=j,this.rebindTextures=B0,this.setupRenderTarget=u0,this.updateRenderTargetMipmap=K9,this.updateMultisampleRenderTarget=D9,this.setupDepthRenderbuffer=_0,this.setupFrameBufferTexture=t,this.useMultisampledRTT=p,this.isReversedDepthBuffer=function(){return Q.buffers.depth.getReversed()}}function oO(J,$){function Q(Z,K=t6){let W,X=R9.getTransfer(K);if(Z===k7)return J.UNSIGNED_BYTE;if(Z===LW)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===VW)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===Z5)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===K5)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===$5)return J.BYTE;if(Z===Q5)return J.SHORT;if(Z===JQ)return J.UNSIGNED_SHORT;if(Z===RW)return J.INT;if(Z===B6)return J.UNSIGNED_INT;if(Z===t7)return J.FLOAT;if(Z===V8)return J.HALF_FLOAT;if(Z===W5)return J.ALPHA;if(Z===X5)return J.RGB;if(Z===f7)return J.RGBA;if(Z===o6)return J.DEPTH_COMPONENT;if(Z===a6)return J.DEPTH_STENCIL;if(Z===Y5)return J.RED;if(Z===BW)return J.RED_INTEGER;if(Z===r6)return J.RG;if(Z===DW)return J.RG_INTEGER;if(Z===kW)return J.RGBA_INTEGER;if(Z===TZ||Z===wZ||Z===SZ||Z===jZ)if(X===d9)if(W=$.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===TZ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===wZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===SZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===jZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=$.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===TZ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===wZ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===SZ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===jZ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===MW||Z===CW||Z===PW||Z===IW)if(W=$.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===MW)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===CW)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===PW)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===IW)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===zW||Z===AW||Z===_W||Z===TW||Z===wW||Z===yZ||Z===SW)if(W=$.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===zW||Z===AW)return X===d9?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===_W)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===TW)return W.COMPRESSED_R11_EAC;if(Z===wW)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===yZ)return W.COMPRESSED_RG11_EAC;if(Z===SW)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===jW||Z===yW||Z===vW||Z===fW||Z===bW||Z===hW||Z===xW||Z===gW||Z===pW||Z===mW||Z===lW||Z===uW||Z===dW||Z===cW)if(W=$.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===jW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===yW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===vW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===fW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===bW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===hW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===xW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===gW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===pW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===mW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===lW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===uW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===dW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===cW)return X===d9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===nW||Z===sW||Z===iW)if(W=$.get("EXT_texture_compression_bptc"),W!==null){if(Z===nW)return X===d9?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===sW)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===iW)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===oW||Z===aW||Z===vZ||Z===rW)if(W=$.get("EXT_texture_compression_rgtc"),W!==null){if(Z===oW)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===aW)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===vZ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===rW)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===eJ)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:Q}}var aO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rO=`
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

}`;class GU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,$){if(this.texture===null){let Q=new nZ(J.texture);if(J.depthNear!==$.depthNear||J.depthFar!==$.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Q}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let $=J.cameras[0].viewport,Q=new e9({vertexShader:aO,fragmentShader:rO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:$.z},depthHeight:{value:$.w}}});this.mesh=new A0(new V9(20,20),Q)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FU extends M7{constructor(J,$){super();let Q=this,Z=null,K=1,W=null,X="local-floor",Y=1,H=null,U=null,G=null,F=null,N=null,q=null,O=typeof XRWebGLBinding<"u",B=new GU,R={},E=$.getContextAttributes(),P=null,k=null,V=[],z=[],w=new R0,D=null,L=null,M=new G8;M.viewport=new u9;let c=new G8;c.viewport=new u9;let b=[M,c],l=new IX,r=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z0){let S=V[Z0];if(S===void 0)S=new ZQ,V[Z0]=S;return S.getTargetRaySpace()},this.getControllerGrip=function(Z0){let S=V[Z0];if(S===void 0)S=new ZQ,V[Z0]=S;return S.getGripSpace()},this.getHand=function(Z0){let S=V[Z0];if(S===void 0)S=new ZQ,V[Z0]=S;return S.getHandSpace()};function y(Z0){let S=z.indexOf(Z0.inputSource);if(S===-1)return;let x=V[S];if(x!==void 0)x.update(Z0.inputSource,Z0.frame,H||W),x.dispatchEvent({type:Z0.type,data:Z0.inputSource})}function h(){Z.removeEventListener("select",y),Z.removeEventListener("selectstart",y),Z.removeEventListener("selectend",y),Z.removeEventListener("squeeze",y),Z.removeEventListener("squeezestart",y),Z.removeEventListener("squeezeend",y),Z.removeEventListener("end",h),Z.removeEventListener("inputsourceschange",f);for(let Z0=0;Z0<V.length;Z0++){let S=z[Z0];if(S===null)continue;z[Z0]=null,V[Z0].disconnect(S)}r=null,v=null,B.reset();for(let Z0 in R)delete R[Z0];if(J.setRenderTarget(P),N=null,F=null,G=null,Z=null,k=null,H0.stop(),Q.isPresenting=!1,J.setPixelRatio(D),J.setSize(w.width,w.height,!1),L!==null){let Z0=L.camera;Z0.fov=L.fov,Z0.zoom=L.zoom,Z0.updateProjectionMatrix(),L=null}Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z0){if(K=Z0,Q.isPresenting===!0)r0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z0){if(X=Z0,Q.isPresenting===!0)r0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(Z0){H=Z0},this.getBaseLayer=function(){return F!==null?F:N},this.getBinding=function(){if(G===null&&O)G=new XRWebGLBinding(Z,$);return G},this.getFrame=function(){return q},this.getSession=function(){return Z},this.setSession=async function(Z0){if(Z=Z0,Z!==null){if(P=J.getRenderTarget(),Z.addEventListener("select",y),Z.addEventListener("selectstart",y),Z.addEventListener("selectend",y),Z.addEventListener("squeeze",y),Z.addEventListener("squeezestart",y),Z.addEventListener("squeezeend",y),Z.addEventListener("end",h),Z.addEventListener("inputsourceschange",f),E.xrCompatible!==!0)await $.makeXRCompatible();if(D=J.getPixelRatio(),J.getSize(w),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let x={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:K};N=new XRWebGLLayer(Z,$,x),Z.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),k=new W8(N.framebufferWidth,N.framebufferHeight,{format:f7,type:k7,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}else{let x=null,s=null,Y0=null;if(E.depth)Y0=E.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,x=E.stencil?a6:o6,s=E.stencil?eJ:B6;let t={colorFormat:$.RGBA8,depthFormat:Y0,scaleFactor:K};G=this.getBinding(),F=G.createProjectionLayer(t),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),k=new W8(F.textureWidth,F.textureHeight,{format:f7,type:k7,depthTexture:new ZJ(F.textureWidth,F.textureHeight,s,void 0,void 0,void 0,void 0,void 0,void 0,x),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1,storeMultisampledDepthBuffer:F.ignoreDepthValues===!1,storeMultisampledStencilBuffer:F.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await Z.requestReferenceSpace(X),H0.setContext(Z),H0.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function f(Z0){for(let S=0;S<Z0.removed.length;S++){let x=Z0.removed[S],s=z.indexOf(x);if(s>=0)z[s]=null,V[s].disconnect(x)}for(let S=0;S<Z0.added.length;S++){let x=Z0.added[S],s=z.indexOf(x);if(s===-1){for(let t=0;t<V.length;t++)if(t>=z.length){z.push(x),s=t;break}else if(z[t]===null){z[t]=x,s=t;break}if(s===-1)break}let Y0=V[s];if(Y0)Y0.connect(x)}}let o=new T,g=new T;function a(Z0,S,x){o.setFromMatrixPosition(S.matrixWorld),g.setFromMatrixPosition(x.matrixWorld);let s=o.distanceTo(g),Y0=S.projectionMatrix.elements,t=x.projectionMatrix.elements,D0=Y0[14]/(Y0[10]-1),V0=Y0[14]/(Y0[10]+1),_0=(Y0[9]+1)/Y0[5],B0=(Y0[9]-1)/Y0[5],u0=(Y0[8]-1)/Y0[0],K9=(t[8]+1)/t[0],t0=D0*u0,W9=D0*K9,D9=s/(-u0+K9),L9=D9*-u0;if(S.matrixWorld.decompose(Z0.position,Z0.quaternion,Z0.scale),Z0.translateX(L9),Z0.translateZ(D9),Z0.matrixWorld.compose(Z0.position,Z0.quaternion,Z0.scale),Z0.matrixWorldInverse.copy(Z0.matrixWorld).invert(),Y0[10]===-1)Z0.projectionMatrix.copy(S.projectionMatrix),Z0.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let p=D0+D9,x9=V0+D9,z9=t0-L9,A9=W9+(s-L9),_=_0*V0/x9*p,C=B0*V0/x9*p;Z0.projectionMatrix.makePerspective(z9,A9,_,C,p,x9),Z0.projectionMatrixInverse.copy(Z0.projectionMatrix).invert()}}function j(Z0,S){if(S===null)Z0.matrixWorld.copy(Z0.matrix);else Z0.matrixWorld.multiplyMatrices(S.matrixWorld,Z0.matrix);Z0.matrixWorldInverse.copy(Z0.matrixWorld).invert()}this.updateCamera=function(Z0){if(Z===null)return;let{near:S,far:x}=Z0;if(B.texture!==null){if(B.depthNear>0)S=B.depthNear;if(B.depthFar>0)x=B.depthFar}if(l.near=c.near=M.near=S,l.far=c.far=M.far=x,r!==l.near||v!==l.far)Z.updateRenderState({depthNear:l.near,depthFar:l.far}),r=l.near,v=l.far;l.layers.mask=Z0.layers.mask|6,M.layers.mask=l.layers.mask&-5,c.layers.mask=l.layers.mask&-3;let s=Z0.parent,Y0=l.cameras;j(l,s);for(let t=0;t<Y0.length;t++)j(Y0[t],s);if(Y0.length===2)a(l,M,c);else l.projectionMatrix.copy(M.projectionMatrix);if(L===null&&Z0.isPerspectiveCamera)L={camera:Z0,fov:Z0.fov,zoom:Z0.zoom};i(Z0,l,s)};function i(Z0,S,x){if(x===null)Z0.matrix.copy(S.matrixWorld);else Z0.matrix.copy(x.matrixWorld),Z0.matrix.invert(),Z0.matrix.multiply(S.matrixWorld);if(Z0.matrix.decompose(Z0.position,Z0.quaternion,Z0.scale),Z0.updateMatrixWorld(!0),Z0.projectionMatrix.copy(S.projectionMatrix),Z0.projectionMatrixInverse.copy(S.projectionMatrixInverse),Z0.isPerspectiveCamera)Z0.fov=u6*2*Math.atan(1/Z0.projectionMatrix.elements[5]),Z0.zoom=1}this.getCamera=function(){return l},this.getFoveation=function(){if(F===null&&N===null)return;return Y},this.setFoveation=function(Z0){if(Y=Z0,F!==null)F.fixedFoveation=Z0;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=Z0},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(l)},this.getCameraTexture=function(Z0){return R[Z0]};let X0=null;function K0(Z0,S){if(U=S.getViewerPose(H||W),q=S,U!==null){let x=U.views;if(N!==null)J.setRenderTargetFramebuffer(k,N.framebuffer),J.setRenderTarget(k);let s=!1;if(x.length!==l.cameras.length)l.cameras.length=0,s=!0;for(let V0=0;V0<x.length;V0++){let _0=x[V0],B0=null;if(N!==null)B0=N.getViewport(_0);else{let K9=G.getViewSubImage(F,_0);if(B0=K9.viewport,V0===0)J.setRenderTargetTextures(k,K9.colorTexture,K9.depthStencilTexture),J.setRenderTarget(k)}let u0=b[V0];if(u0===void 0)u0=new G8,u0.layers.enable(V0),u0.viewport=new u9,b[V0]=u0;if(u0.matrix.fromArray(_0.transform.matrix),u0.matrix.decompose(u0.position,u0.quaternion,u0.scale),u0.projectionMatrix.fromArray(_0.projectionMatrix),u0.projectionMatrixInverse.copy(u0.projectionMatrix).invert(),u0.viewport.set(B0.x,B0.y,B0.width,B0.height),V0===0)l.matrix.copy(u0.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale);if(s===!0)l.cameras.push(u0)}let Y0=Z.enabledFeatures;if(Y0&&Y0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&O){G=Q.getBinding();let V0=G.getDepthInformation(x[0]);if(V0&&V0.isValid&&V0.texture)B.init(V0,Z.renderState)}if(Y0&&Y0.includes("camera-access")&&O){J.state.unbindTexture(),G=Q.getBinding();for(let V0=0;V0<x.length;V0++){let _0=x[V0].camera;if(_0){let B0=R[_0];if(!B0)B0=new nZ,R[_0]=B0;let u0=G.getCameraImage(_0);B0.sourceTexture=u0}}}}for(let x=0;x<V.length;x++){let s=z[x],Y0=V[x];if(s!==null&&Y0!==void 0)Y0.update(s,S,H||W)}if(X0)X0(Z0,S);if(S.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:S});q=null}let H0=new JU;H0.setAnimationLoop(K0),this.setAnimationLoop=function(Z0){X0=Z0},this.dispose=function(){}}}var tO=new $9,EU=new H9;EU.set(-1,0,0,0,1,0,0,0,1);function eO(J,$){function Q(R,E){if(R.matrixAutoUpdate===!0)R.updateMatrix();E.value.copy(R.matrix)}function Z(R,E){if(E.color.getRGB(R.fogColor.value,OX(J)),E.isFog)R.fogNear.value=E.near,R.fogFar.value=E.far;else if(E.isFogExp2)R.fogDensity.value=E.density}function K(R,E,P,k,V){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)W(R,E);else if(E.isMeshLambertMaterial){if(W(R,E),E.envMap)R.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)W(R,E),F(R,E);else if(E.isMeshPhongMaterial){if(W(R,E),G(R,E),E.envMap)R.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(W(R,E),N(R,E),E.isMeshPhysicalMaterial)q(R,E,V)}else if(E.isMeshMatcapMaterial)W(R,E),O(R,E);else if(E.isMeshDepthMaterial)W(R,E);else if(E.isMeshDistanceMaterial)W(R,E),B(R,E);else if(E.isMeshNormalMaterial)W(R,E);else if(E.isLineBasicMaterial){if(X(R,E),E.isLineDashedMaterial)Y(R,E)}else if(E.isPointsMaterial)H(R,E,P,k);else if(E.isSpriteMaterial)U(R,E);else if(E.isShadowMaterial)R.color.value.copy(E.color),R.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function W(R,E){if(R.opacity.value=E.opacity,E.color)R.diffuse.value.copy(E.color);if(E.emissive)R.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)R.map.value=E.map,Q(E.map,R.mapTransform);if(E.alphaMap)R.alphaMap.value=E.alphaMap,Q(E.alphaMap,R.alphaMapTransform);if(E.bumpMap){if(R.bumpMap.value=E.bumpMap,Q(E.bumpMap,R.bumpMapTransform),R.bumpScale.value=E.bumpScale,E.side===C8)R.bumpScale.value*=-1}if(E.normalMap){if(R.normalMap.value=E.normalMap,Q(E.normalMap,R.normalMapTransform),R.normalScale.value.copy(E.normalScale),E.side===C8)R.normalScale.value.negate()}if(E.displacementMap)R.displacementMap.value=E.displacementMap,Q(E.displacementMap,R.displacementMapTransform),R.displacementScale.value=E.displacementScale,R.displacementBias.value=E.displacementBias;if(E.emissiveMap)R.emissiveMap.value=E.emissiveMap,Q(E.emissiveMap,R.emissiveMapTransform);if(E.specularMap)R.specularMap.value=E.specularMap,Q(E.specularMap,R.specularMapTransform);if(E.alphaTest>0)R.alphaTest.value=E.alphaTest;let P=$.get(E),k=P.envMap,V=P.envMapRotation;if(k){if(R.envMap.value=k,R.envMapRotation.value.setFromMatrix4(tO.makeRotationFromEuler(V)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1)R.envMapRotation.value.premultiply(EU);R.reflectivity.value=E.reflectivity,R.ior.value=E.ior,R.refractionRatio.value=E.refractionRatio}if(E.lightMap)R.lightMap.value=E.lightMap,R.lightMapIntensity.value=E.lightMapIntensity,Q(E.lightMap,R.lightMapTransform);if(E.aoMap)R.aoMap.value=E.aoMap,R.aoMapIntensity.value=E.aoMapIntensity,Q(E.aoMap,R.aoMapTransform)}function X(R,E){if(R.diffuse.value.copy(E.color),R.opacity.value=E.opacity,E.map)R.map.value=E.map,Q(E.map,R.mapTransform)}function Y(R,E){R.dashSize.value=E.dashSize,R.totalSize.value=E.dashSize+E.gapSize,R.scale.value=E.scale}function H(R,E,P,k){if(R.diffuse.value.copy(E.color),R.opacity.value=E.opacity,R.size.value=E.size*P,R.scale.value=k*0.5,E.map)R.map.value=E.map,Q(E.map,R.uvTransform);if(E.alphaMap)R.alphaMap.value=E.alphaMap,Q(E.alphaMap,R.alphaMapTransform);if(E.alphaTest>0)R.alphaTest.value=E.alphaTest}function U(R,E){if(R.diffuse.value.copy(E.color),R.opacity.value=E.opacity,R.rotation.value=E.rotation,E.map)R.map.value=E.map,Q(E.map,R.mapTransform);if(E.alphaMap)R.alphaMap.value=E.alphaMap,Q(E.alphaMap,R.alphaMapTransform);if(E.alphaTest>0)R.alphaTest.value=E.alphaTest}function G(R,E){R.specular.value.copy(E.specular),R.shininess.value=Math.max(E.shininess,0.0001)}function F(R,E){if(E.gradientMap)R.gradientMap.value=E.gradientMap}function N(R,E){if(R.metalness.value=E.metalness,E.metalnessMap)R.metalnessMap.value=E.metalnessMap,Q(E.metalnessMap,R.metalnessMapTransform);if(R.roughness.value=E.roughness,E.roughnessMap)R.roughnessMap.value=E.roughnessMap,Q(E.roughnessMap,R.roughnessMapTransform);if(E.envMap)R.envMapIntensity.value=E.envMapIntensity}function q(R,E,P){if(R.ior.value=E.ior,E.sheen>0){if(R.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),R.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)R.sheenColorMap.value=E.sheenColorMap,Q(E.sheenColorMap,R.sheenColorMapTransform);if(E.sheenRoughnessMap)R.sheenRoughnessMap.value=E.sheenRoughnessMap,Q(E.sheenRoughnessMap,R.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(R.clearcoat.value=E.clearcoat,R.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)R.clearcoatMap.value=E.clearcoatMap,Q(E.clearcoatMap,R.clearcoatMapTransform);if(E.clearcoatRoughnessMap)R.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,Q(E.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(R.clearcoatNormalMap.value=E.clearcoatNormalMap,Q(E.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===C8)R.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)R.dispersion.value=E.dispersion;if(E.retroreflectivity>0)R.retroreflectivity.value=E.retroreflectivity;if(E.iridescence>0){if(R.iridescence.value=E.iridescence,R.iridescenceIOR.value=E.iridescenceIOR,R.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)R.iridescenceMap.value=E.iridescenceMap,Q(E.iridescenceMap,R.iridescenceMapTransform);if(E.iridescenceThicknessMap)R.iridescenceThicknessMap.value=E.iridescenceThicknessMap,Q(E.iridescenceThicknessMap,R.iridescenceThicknessMapTransform)}if(E.transmission>0){if(R.transmission.value=E.transmission,R.transmissionSamplerMap.value=P.texture,R.transmissionSamplerSize.value.set(P.width,P.height),E.transmissionMap)R.transmissionMap.value=E.transmissionMap,Q(E.transmissionMap,R.transmissionMapTransform);if(R.thickness.value=E.thickness,E.thicknessMap)R.thicknessMap.value=E.thicknessMap,Q(E.thicknessMap,R.thicknessMapTransform);R.attenuationDistance.value=E.attenuationDistance,R.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(R.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)R.anisotropyMap.value=E.anisotropyMap,Q(E.anisotropyMap,R.anisotropyMapTransform)}if(R.specularIntensity.value=E.specularIntensity,R.specularColor.value.copy(E.specularColor),E.specularColorMap)R.specularColorMap.value=E.specularColorMap,Q(E.specularColorMap,R.specularColorMapTransform);if(E.specularIntensityMap)R.specularIntensityMap.value=E.specularIntensityMap,Q(E.specularIntensityMap,R.specularIntensityMapTransform)}function O(R,E){if(E.matcap)R.matcap.value=E.matcap}function B(R,E){let P=$.get(E).light;R.referencePosition.value.setFromMatrixPosition(P.matrixWorld),R.nearDistance.value=P.shadow.camera.near,R.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function JR(J,$,Q,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,z){let w=z.program;Z.uniformBlockBinding(V,w)}function U(V,z){let w=K[V.id];if(w===void 0)R(V),w=G(V),K[V.id]=w,V.addEventListener("dispose",P);let D=z.program;Z.updateUBOMapping(V,D);let L=$.render.frame;if(W[V.id]!==L)N(V),W[V.id]=L}function G(V){let z=F();V.__bindingPointIndex=z;let w=J.createBuffer(),D=V.__size,L=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,D,L),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,z,w),w}function F(){for(let V=0;V<Y;V++)if(X.indexOf(V)===-1)return X.push(V),V;return Z9("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(V){let z=K[V.id],w=V.uniforms,D=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,z);for(let L=0,M=w.length;L<M;L++){let c=w[L];if(Array.isArray(c))for(let b=0,l=c.length;b<l;b++)q(c[b],L,b,D);else q(c,L,0,D)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(V,z,w,D){if(B(V,z,w,D)===!0){let{__offset:L,value:M}=V;if(Array.isArray(M)){let c=0;for(let b=0;b<M.length;b++){let l=M[b],r=E(l);if(O(l,V.__data,c),typeof l!=="number"&&typeof l!=="boolean"&&!l.isMatrix3&&!ArrayBuffer.isView(l))c+=r.storage/Float32Array.BYTES_PER_ELEMENT}}else O(M,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,L,V.__data)}}function O(V,z,w){if(typeof V==="number"||typeof V==="boolean")z[0]=V;else if(V.isMatrix3)z[0]=V.elements[0],z[1]=V.elements[1],z[2]=V.elements[2],z[3]=0,z[4]=V.elements[3],z[5]=V.elements[4],z[6]=V.elements[5],z[7]=0,z[8]=V.elements[6],z[9]=V.elements[7],z[10]=V.elements[8],z[11]=0;else if(ArrayBuffer.isView(V))z.set(new V.constructor(V.buffer,V.byteOffset,z.length));else V.toArray(z,w)}function B(V,z,w,D){let L=V.value,M=z+"_"+w;if(D[M]===void 0){if(typeof L==="number"||typeof L==="boolean")D[M]=L;else if(ArrayBuffer.isView(L))D[M]=L.slice();else D[M]=L.clone();return!0}else{let c=D[M];if(typeof L==="number"||typeof L==="boolean"){if(c!==L)return D[M]=L,!0}else if(ArrayBuffer.isView(L))return!0;else if(c.equals(L)===!1)return c.copy(L),!0}return!1}function R(V){let z=V.uniforms,w=0,D=16;for(let M=0,c=z.length;M<c;M++){let b=Array.isArray(z[M])?z[M]:[z[M]];for(let l=0,r=b.length;l<r;l++){let v=b[l],y=Array.isArray(v.value)?v.value:[v.value];for(let h=0,f=y.length;h<f;h++){let o=y[h],g=E(o),a=w%D,j=a%g.boundary,i=a+j;if(w+=j,i!==0&&D-i<g.storage)w+=D-i;v.__data=new Float32Array(g.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=w,w+=g.storage}}}let L=w%D;if(L>0)w+=D-L;return V.__size=w,V.__cache={},this}function E(V){let z={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")z.boundary=4,z.storage=4;else if(V.isVector2)z.boundary=8,z.storage=8;else if(V.isVector3||V.isColor)z.boundary=16,z.storage=12;else if(V.isVector4)z.boundary=16,z.storage=16;else if(V.isMatrix3)z.boundary=48,z.storage=48;else if(V.isMatrix4)z.boundary=64,z.storage=64;else if(V.isTexture)r0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))z.boundary=16,z.storage=V.byteLength;else r0("WebGLRenderer: Unsupported uniform value type.",V);return z}function P(V){let z=V.target;z.removeEventListener("dispose",P);let w=X.indexOf(z.__bindingPointIndex);X.splice(w,1),J.deleteBuffer(K[z.id]),delete K[z.id],delete W[z.id]}function k(){for(let V in K)J.deleteBuffer(K[V]);X=[],K={},W={}}return{bind:H,update:U,dispose:k}}var $R=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),g7=null;function QR(){if(g7===null)g7=new WQ($R,16,16,r6,V8),g7.name="DFG_LUT",g7.minFilter=L8,g7.magFilter=L8,g7.wrapS=rJ,g7.wrapT=rJ,g7.generateMipmaps=!1,g7.needsUpdate=!0;return g7}class mX{constructor(J={}){let{canvas:$=O5(),context:Q=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:F=!1,outputBufferType:N=k7}=J;this.isWebGLRenderer=!0;let q;if(Q!==null){if(typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=Q.getContextAttributes().alpha}else q=W;let O=N,B=new Set([kW,DW,BW]),R=new Set([k7,B6,JQ,eJ,LW,VW]),E=new Uint32Array(4),P=new Int32Array(4),k=new T,V=null,z=null,w=[],D=[],L=null;this.domElement=$,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=B7,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,c=!1,b=null,l=null,r=null,v=null;this._outputColorSpace=K8;let y=0,h=0,f=null,o=-1,g=null,a=new u9,j=new u9,i=null,X0=new b0(0),K0=0,H0=$.width,Z0=$.height,S=1,x=null,s=null,Y0=new u9(0,0,H0,Z0),t=new u9(0,0,H0,Z0),D0=!1,V0=new $J,_0=!1,B0=!1,u0=new $9,K9=new T,t0=new u9,W9={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},D9=!1;function L9(){return f===null?S:1}let p=Q;function x9(I,u){return $.getContext(I,u)}let z9,A9,_,C,m,$0,L0,P0,v0,N0,q0,h0,y0,I0,z0,a0,J9,T9,n,w0,G0,S0,d0;try{let I={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in $)$.setAttribute("data-engine",`three.js r${kH}`);if($.addEventListener("webglcontextlost",X9,!1),$.addEventListener("webglcontextrestored",n9,!1),$.addEventListener("webglcontextcreationerror",y9,!1),p===null){if(p=x9("webgl2",I),p===null)if(x9("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}M0()}catch(I){throw $.removeEventListener("webglcontextlost",X9,!1),$.removeEventListener("webglcontextrestored",n9,!1),$.removeEventListener("webglcontextcreationerror",y9,!1),Z9("WebGLRenderer: "+I.message),I}function M0(){if(z9=new Uq(p),z9.init(),G0=new oO(p,z9),A9=new eE(p,z9,J,G0),_=new sO(p,z9),A9.reversedDepthBuffer&&F)_.buffers.depth.setReversed(!0);l=p.createFramebuffer(),r=p.createFramebuffer(),v=p.createFramebuffer(),C=new Fq(p),m=new yO,$0=new iO(p,z9,_,m,A9,G0,C),L0=new Hq(M),P0=new q1(p),S0=new rE(p,P0),v0=new Nq(p,P0,C,S0),N0=new qq(p,v0,P0,S0,C),T9=new Eq(p,A9,$0),z0=new Jq(m),q0=new jO(M,L0,z9,A9,S0,z0),h0=new eO(M,m),y0=new fO,I0=new mO(z9),J9=new aE(M,L0,_,N0,q,Y),a0=new nO(M,N0,A9),d0=new JR(p,C,A9,_),n=new tE(p,z9,C),w0=new Gq(p,z9,C),C.programs=q0.programs,M.capabilities=A9,M.extensions=z9,M.properties=m,M.renderLists=y0,M.shadowMap=a0,M.state=_,M.info=C}if(O!==k7)L=new Rq(O,$.width,$.height,X,Z,K);let f0=new FU(M,p);this.xr=f0,this.getContext=function(){return p},this.getContextAttributes=function(){return p.getContextAttributes()},this.forceContextLoss=function(){let I=z9.get("WEBGL_lose_context");if(I)I.loseContext()},this.forceContextRestore=function(){let I=z9.get("WEBGL_lose_context");if(I)I.restoreContext()},this.getPixelRatio=function(){return S},this.setPixelRatio=function(I){if(I===void 0)return;S=I,this.setSize(H0,Z0,!1)},this.getSize=function(I){return I.set(H0,Z0)},this.setSize=function(I,u,U0=!0){if(f0.isPresenting){r0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(H0=I,Z0=u,$.width=Math.floor(I*S),$.height=Math.floor(u*S),U0===!0)$.style.width=I+"px",$.style.height=u+"px";if(L!==null)L.setSize($.width,$.height);this.setViewport(0,0,I,u)},this.getDrawingBufferSize=function(I){return I.set(H0*S,Z0*S).floor()},this.setDrawingBufferSize=function(I,u,U0){H0=I,Z0=u,S=U0,$.width=Math.floor(I*U0),$.height=Math.floor(u*U0),this.setViewport(0,0,I,u)},this.setEffects=function(I){if(O===k7){Z9("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let u=0;u<I.length;u++)if(I[u].isOutputPass===!0){r0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(a)},this.getViewport=function(I){return I.copy(Y0)},this.setViewport=function(I,u,U0,Q0){if(I.isVector4)Y0.set(I.x,I.y,I.z,I.w);else Y0.set(I,u,U0,Q0);_.viewport(a.copy(Y0).multiplyScalar(S).round())},this.getScissor=function(I){return I.copy(t)},this.setScissor=function(I,u,U0,Q0){if(I.isVector4)t.set(I.x,I.y,I.z,I.w);else t.set(I,u,U0,Q0);_.scissor(j.copy(t).multiplyScalar(S).round())},this.getScissorTest=function(){return D0},this.setScissorTest=function(I){_.setScissorTest(D0=I)},this.setOpaqueSort=function(I){x=I},this.setTransparentSort=function(I){s=I},this.getClearColor=function(I){return I.copy(J9.getClearColor())},this.setClearColor=function(){J9.setClearColor(...arguments)},this.getClearAlpha=function(){return J9.getClearAlpha()},this.setClearAlpha=function(){J9.setClearAlpha(...arguments)},this.clear=function(I=!0,u=!0,U0=!0){let Q0=0;if(I){let e=!1;if(f!==null){let x0=f.texture.format;e=B.has(x0)}if(e){let x0=f.texture.type,c0=R.has(x0),g0=J9.getClearColor(),s0=J9.getClearAlpha(),m0=g0.r,U9=g0.g,k9=g0.b;if(c0)E[0]=m0,E[1]=U9,E[2]=k9,E[3]=s0,p.clearBufferuiv(p.COLOR,0,E);else P[0]=m0,P[1]=U9,P[2]=k9,P[3]=s0,p.clearBufferiv(p.COLOR,0,P)}else Q0|=p.COLOR_BUFFER_BIT}if(u)Q0|=p.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(U0)Q0|=p.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(Q0!==0)p.clear(Q0)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),b=I},this.dispose=function(){$.removeEventListener("webglcontextlost",X9,!1),$.removeEventListener("webglcontextrestored",n9,!1),$.removeEventListener("webglcontextcreationerror",y9,!1),J9.dispose(),y0.dispose(),I0.dispose(),m.dispose(),L0.dispose(),N0.dispose(),S0.dispose(),d0.dispose(),q0.dispose(),f0.dispose(),f0.removeEventListener("sessionstart",D$),f0.removeEventListener("sessionend",MJ),T7.stop()};function X9(I){I.preventDefault(),l$("WebGLRenderer: Context Lost."),c=!0}function n9(){l$("WebGLRenderer: Context Restored."),c=!1;let I=C.autoReset,u=a0.enabled,U0=a0.autoUpdate,Q0=a0.needsUpdate,e=a0.type;M0(),C.autoReset=I,a0.enabled=u,a0.autoUpdate=U0,a0.needsUpdate=Q0,a0.type=e}function y9(I){Z9("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function k8(I){let u=I.target;u.removeEventListener("dispose",k8),m8(u)}function m8(I){xQ(I),m.remove(I)}function xQ(I){let u=m.get(I).programs;if(u!==void 0){if(u.forEach(function(U0){q0.releaseProgram(U0)}),I.isShaderMaterial)q0.releaseShaderCache(I)}}this.renderBufferDirect=function(I,u,U0,Q0,e,x0){if(u===null)u=W9;let c0=e.isMesh&&e.matrixWorld.determinantAffine()<0,g0=pQ(I,u,U0,Q0,e);_.setMaterial(Q0,c0);let s0=U0.index,m0=1;if(Q0.wireframe===!0){if(s0=v0.getWireframeAttribute(U0),s0===void 0)return;m0=2}let U9=U0.drawRange,k9=U0.attributes.position,i0=U9.start*m0,I9=(U9.start+U9.count)*m0;if(x0!==null)i0=Math.max(i0,x0.start*m0),I9=Math.min(I9,(x0.start+x0.count)*m0);if(s0!==null)i0=Math.max(i0,0),I9=Math.min(I9,s0.count);else if(k9!==void 0&&k9!==null)i0=Math.max(i0,0),I9=Math.min(I9,k9.count);let J8=I9-i0;if(J8<0||J8===1/0)return;S0.setup(e,Q0,g0,U0,s0);let s9,p9=n;if(s0!==null)s9=P0.get(s0),p9=w0,p9.setIndex(s9);if(e.isMesh)if(Q0.wireframe===!0)_.setLineWidth(Q0.wireframeLinewidth*L9()),p9.setMode(p.LINES);else p9.setMode(p.TRIANGLES);else if(e.isLine){let O8=Q0.linewidth;if(O8===void 0)O8=1;if(_.setLineWidth(O8*L9()),e.isLineSegments)p9.setMode(p.LINES);else if(e.isLineLoop)p9.setMode(p.LINE_LOOP);else p9.setMode(p.LINE_STRIP)}else if(e.isPoints)p9.setMode(p.POINTS);else if(e.isSprite)p9.setMode(p.TRIANGLES);if(e.isBatchedMesh)if(!z9.get("WEBGL_multi_draw")){let{_multiDrawStarts:O8,_multiDrawCounts:l0,_multiDrawCount:a9}=e,_9=s0?P0.get(s0).bytesPerElement:1,$8=m.get(Q0).currentProgram.getUniforms();for(let l8=0;l8<a9;l8++)$8.setValue(p,"_gl_DrawID",l8),p9.render(O8[l8]/_9,l0[l8])}else p9.renderMultiDraw(e._multiDrawStarts,e._multiDrawCounts,e._multiDrawCount);else if(e.isInstancedMesh)p9.renderInstances(i0,J8,e.count);else if(U0.isInstancedBufferGeometry){let O8=U0._maxInstanceCount!==void 0?U0._maxInstanceCount:1/0,l0=Math.min(U0.instanceCount,O8);p9.renderInstances(i0,J8,l0)}else p9.render(i0,J8)};function B$(I,u,U0,Q0){if(b!==null&&I.isNodeMaterial)b.setObject(Q0,I);if(_0===!0)z0.setState(I,U0,!1);if(I.transparent===!0&&I.side===o9&&I.forceSinglePass===!1)I.side=C8,I.needsUpdate=!0,v6(I,u,Q0),I.side=L6,I.needsUpdate=!0,v6(I,u,Q0),I.side=o9;else v6(I,u,Q0)}this.compile=function(I,u,U0=null){if(U0===null)U0=I;if(b!==null)b.renderStart(I,u,U0);if(z=I0.get(U0),z.init(u),D.push(z),U0.traverseVisible(function(e){if(e.isLight&&e.layers.test(u.layers)){if(z.pushLight(e),e.castShadow)z.pushShadow(e)}}),I!==U0)I.traverseVisible(function(e){if(e.isLight&&e.layers.test(u.layers)){if(z.pushLight(e),e.castShadow)z.pushShadow(e)}});if(z.setupLights(),b!==null)b.updateLights(z.state.lightsArray);if(B0=this.localClippingEnabled,_0=z0.init(this.clippingPlanes,B0),_0===!0)z0.setGlobalState(this.clippingPlanes,u);if(b!==null)a0.render(z.state.shadowsArray,U0,u);let Q0=new Set;if(I.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let x0=e.material;if(x0)if(Array.isArray(x0))for(let c0=0;c0<x0.length;c0++){let g0=x0[c0];B$(g0,U0,u,e),Q0.add(g0)}else B$(x0,U0,u,e),Q0.add(x0)}),z=D.pop(),b!==null)b.renderEnd();return Q0},this.compileAsync=function(I,u,U0=null){let Q0=this.compile(I,u,U0);return new Promise((e)=>{function x0(){if(Q0.forEach(function(c0){let s0=m.get(c0).currentProgram;if(s0===void 0||s0.isReady())Q0.delete(c0)}),Q0.size===0){e(I);return}setTimeout(x0,10)}if(z9.get("KHR_parallel_shader_compile")!==null)x0();else setTimeout(x0,10)})};let kJ=null;function r8(I){if(kJ)kJ(I)}function D$(){T7.stop()}function MJ(){T7.start()}let T7=new JU;if(T7.setAnimationLoop(r8),typeof self<"u")T7.setContext(self);this.setAnimationLoop=function(I){kJ=I,f0.setAnimationLoop(I),I===null?T7.stop():T7.start()},f0.addEventListener("sessionstart",D$),f0.addEventListener("sessionend",MJ),this.render=function(I,u){if(u!==void 0&&u.isCamera!==!0){Z9("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(c===!0)return;if(b!==null)b.renderStart(I,u);let U0=f0.enabled===!0&&f0.isPresenting===!0,Q0=L!==null&&(f===null||U0)&&L.begin(M,f);if(I.matrixWorldAutoUpdate===!0)I.updateMatrixWorld();if(u.parent===null&&u.matrixWorldAutoUpdate===!0)u.updateMatrixWorld();if(f0.enabled===!0&&f0.isPresenting===!0&&(L===null||L.isCompositing()===!1)){if(f0.cameraAutoUpdate===!0)f0.updateCamera(u);u=f0.getCamera()}if(I.isScene===!0)I.onBeforeRender(M,I,u,f);if(z=I0.get(I,D.length),z.init(u),z.state.textureUnits=$0.getTextureUnits(),D.push(z),u0.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),V0.setFromProjectionMatrix(u0,KX,u.reversedDepth),B0=this.localClippingEnabled,_0=z0.init(this.clippingPlanes,B0),V=y0.get(I,w.length),V.init(),w.push(V),f0.enabled===!0&&f0.isPresenting===!0){let c0=M.xr.getDepthSensingMesh();if(c0!==null)S6(c0,u,-1/0,M.sortObjects)}if(S6(I,u,0,M.sortObjects),V.finish(),b!==null)b.updateLights(z.state.lightsArray);if(M.sortObjects===!0)V.sort(x,s);if(D9=f0.enabled===!1||f0.isPresenting===!1||f0.hasDepthSensing()===!1,D9)J9.addToRenderList(V,I);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(_0===!0)z0.beginShadows();let e=z.state.shadowsArray;if(a0.render(e,I,u),_0===!0)z0.endShadows();if((Q0&&L.hasRenderPass())===!1){let{opaque:c0,transmissive:g0}=V;if(z.setupLights(),u.isArrayCamera){let s0=u.cameras;if(g0.length>0)for(let m0=0,U9=s0.length;m0<U9;m0++){let k9=s0[m0];j6(c0,g0,I,k9)}if(D9)J9.render(I);for(let m0=0,U9=s0.length;m0<U9;m0++){let k9=s0[m0];M8(V,I,k9,k9.viewport)}}else{if(g0.length>0)j6(c0,g0,I,u);if(D9)J9.render(I);M8(V,I,u)}}if(f!==null&&h===0)$0.updateMultisampleRenderTarget(f),$0.updateRenderTargetMipmap(f);if(Q0)L.end(M);if(I.isScene===!0)I.onAfterRender(M,I,u);if(S0.resetDefaultState(),o=-1,g=null,D.pop(),D.length>0){if(z=D[D.length-1],$0.setTextureUnits(z.state.textureUnits),_0===!0)z0.setGlobalState(M.clippingPlanes,z.state.camera)}else z=null;if(w.pop(),w.length>0)V=w[w.length-1];else V=null;if(b!==null)b.renderEnd()};function S6(I,u,U0,Q0){if(I.visible===!1)return;if(I.layers.test(u.layers)){if(I.isGroup)U0=I.renderOrder;else if(I.isLOD){if(I.autoUpdate===!0)I.update(u)}else if(I.isLightProbeGrid)z.pushLightProbeGrid(I);else if(I.isLight){if(z.pushLight(I),I.castShadow)z.pushShadow(I)}else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(V0)){if(Q0)t0.setFromMatrixPosition(I.matrixWorld).applyMatrix4(u0);let c0=N0.update(I),g0=I.material;if(g0.visible)V.push(I,c0,g0,U0,t0.z,null,u)}}else if(I.isMesh||I.isLine||I.isPoints){if(!I.frustumCulled||I.intersectsFrustum(V0)){let c0=N0.update(I),g0=I.material;if(Q0){if(I.boundingSphere!==void 0){if(I.boundingSphere===null)I.computeBoundingSphere();t0.copy(I.boundingSphere.center)}else{if(c0.boundingSphere===null)c0.computeBoundingSphere();t0.copy(c0.boundingSphere.center)}t0.applyMatrix4(I.matrixWorld).applyMatrix4(u0)}if(Array.isArray(g0)){let s0=c0.groups;for(let m0=0,U9=s0.length;m0<U9;m0++){let k9=s0[m0],i0=g0[k9.materialIndex];if(i0&&i0.visible)V.push(I,c0,i0,U0,t0.z,k9,u)}}else if(g0.visible)V.push(I,c0,g0,U0,t0.z,null,u)}}}let x0=I.children;for(let c0=0,g0=x0.length;c0<g0;c0++)S6(x0[c0],u,U0,Q0)}function M8(I,u,U0,Q0){let{opaque:e,transmissive:x0,transparent:c0}=I;if(z.setupLightsView(U0),_0===!0)z0.setGlobalState(M.clippingPlanes,U0);if(Q0)_.viewport(a.copy(Q0));if(e.length>0)y6(e,u,U0);if(x0.length>0)y6(x0,u,U0);if(c0.length>0)y6(c0,u,U0);_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function j6(I,u,U0,Q0){if((U0.isScene===!0?U0.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[Q0.id]===void 0){let i0=z9.has("EXT_color_buffer_half_float")||z9.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[Q0.id]=new W8(1,1,{generateMipmaps:!0,type:i0?V8:k7,minFilter:v7,samples:Math.max(4,A9.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:R9.workingColorSpace})}let x0=z.state.transmissionRenderTarget[Q0.id],c0=Q0.viewport||a;x0.setSize(c0.z*M.transmissionResolutionScale,c0.w*M.transmissionResolutionScale);let g0=M.getRenderTarget(),s0=M.getActiveCubeFace(),m0=M.getActiveMipmapLevel();if(M.setRenderTarget(x0),M.getClearColor(X0),K0=M.getClearAlpha(),K0<1)M.setClearColor(16777215,0.5);if(M.clear(),D9)J9.render(U0);let U9=M.toneMapping;M.toneMapping=B7;let k9=Q0.viewport;if(Q0.viewport!==void 0)Q0.viewport=void 0;if(z.setupLightsView(Q0),_0===!0)z0.setGlobalState(M.clippingPlanes,Q0);if(y6(I,U0,Q0),$0.updateMultisampleRenderTarget(x0),$0.updateRenderTargetMipmap(x0),z9.has("WEBGL_multisampled_render_to_texture")===!1){let i0=!1;for(let I9=0,J8=u.length;I9<J8;I9++){let s9=u[I9],{object:p9,geometry:O8,material:l0,group:a9}=s9;if(l0.side===o9&&p9.layers.test(Q0.layers)){let _9=l0.side;l0.side=C8,l0.needsUpdate=!0,gQ(p9,U0,Q0,O8,l0,a9),l0.side=_9,l0.needsUpdate=!0,i0=!0}}if(i0===!0)$0.updateMultisampleRenderTarget(x0),$0.updateRenderTargetMipmap(x0)}if(M.setRenderTarget(g0,s0,m0),M.setClearColor(X0,K0),k9!==void 0)Q0.viewport=k9;M.toneMapping=U9}function y6(I,u,U0){let Q0=u.isScene===!0?u.overrideMaterial:null;for(let e=0,x0=I.length;e<x0;e++){let c0=I[e],{object:g0,geometry:s0,group:m0}=c0,U9=c0.material;if(U9.allowOverride===!0&&Q0!==null)U9=Q0;if(g0.layers.test(U0.layers))gQ(g0,u,U0,s0,U9,m0)}}function gQ(I,u,U0,Q0,e,x0){if(b!==null&&e.isNodeMaterial)b.setObject(I,e);if(I.onBeforeRender(M,u,U0,Q0,e,x0),I.modelViewMatrix.multiplyMatrices(U0.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),e.onBeforeRender(M,u,U0,Q0,I,x0),e.transparent===!0&&e.side===o9&&e.forceSinglePass===!1)e.side=C8,e.needsUpdate=!0,M.renderBufferDirect(U0,u,Q0,e,I,x0),e.side=L6,e.needsUpdate=!0,M.renderBufferDirect(U0,u,Q0,e,I,x0),e.side=o9;else M.renderBufferDirect(U0,u,Q0,e,I,x0);I.onAfterRender(M,u,U0,Q0,e,x0)}function v6(I,u,U0){if(u.isScene!==!0)u=W9;let Q0=m.get(I),e=z.state.lights,x0=z.state.shadowsArray,c0=e.state.version,g0=q0.getParameters(I,e.state,x0,u,U0,z.state.lightProbeGridArray),s0=q0.getProgramCacheKey(g0),m0=Q0.programs;Q0.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?u.environment:null,Q0.fog=u.fog;let U9=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;if(Q0.envMap=L0.get(I.envMap||Q0.environment,U9),Q0.envMapRotation=Q0.environment!==null&&I.envMap===null?u.environmentRotation:I.envMapRotation,m0===void 0)I.addEventListener("dispose",k8),m0=new Map,Q0.programs=m0;let k9=m0.get(s0);if(k9!==void 0){if(Q0.currentProgram===k9&&Q0.lightsStateVersion===c0)return F7(I,g0),k9}else{if(g0.uniforms=q0.getUniforms(I),b!==null&&I.isNodeMaterial)b.build(I,U0,g0);I.onBeforeCompile(g0,M),k9=q0.acquireProgram(g0,s0),m0.set(s0,k9),Q0.uniforms=g0.uniforms}let i0=Q0.uniforms;if(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)i0.clippingPlanes=z0.uniform;if(F7(I,g0),Q0.needsLights=N8(I),Q0.lightsStateVersion=c0,Q0.needsLights)i0.ambientLightColor.value=e.state.ambient,i0.lightProbe.value=e.state.probe,i0.sunLights.value=e.state.sun,i0.sunLightShadows.value=e.state.sunShadow,i0.directionalLights.value=e.state.directional,i0.directionalLightShadows.value=e.state.directionalShadow,i0.spotLights.value=e.state.spot,i0.spotLightShadows.value=e.state.spotShadow,i0.rectAreaLights.value=e.state.rectArea,i0.ltc_1.value=e.state.rectAreaLTC1,i0.ltc_2.value=e.state.rectAreaLTC2,i0.pointLights.value=e.state.point,i0.pointLightShadows.value=e.state.pointShadow,i0.hemisphereLights.value=e.state.hemi,i0.sunShadowMatrix.value=e.state.sunShadowMatrix,i0.sunShadowCascade.value=e.state.sunShadowCascade,i0.directionalShadowMatrix.value=e.state.directionalShadowMatrix,i0.spotLightMatrix.value=e.state.spotLightMatrix,i0.spotLightMap.value=e.state.spotLightMap,i0.pointShadowMatrix.value=e.state.pointShadowMatrix;return Q0.lightProbeGrid=z.state.lightProbeGridArray.length>0,Q0.currentProgram=k9,Q0.uniformsList=null,k9}function f6(I){if(I.uniformsList===null){let u=I.currentProgram.getUniforms();I.uniformsList=BQ.seqWithValue(u.seq,I.uniforms)}return I.uniformsList}function F7(I,u){let U0=m.get(I);U0.outputColorSpace=u.outputColorSpace,U0.batching=u.batching,U0.batchingColor=u.batchingColor,U0.instancing=u.instancing,U0.instancingColor=u.instancingColor,U0.instancingMorph=u.instancingMorph,U0.skinning=u.skinning,U0.morphTargets=u.morphTargets,U0.morphNormals=u.morphNormals,U0.morphColors=u.morphColors,U0.morphTargetsCount=u.morphTargetsCount,U0.numClippingPlanes=u.numClippingPlanes,U0.numIntersection=u.numClipIntersection,U0.vertexAlphas=u.vertexAlphas,U0.vertexTangents=u.vertexTangents,U0.toneMapping=u.toneMapping}function MY(I,u){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;k.setFromMatrixPosition(u.matrixWorld);for(let U0=0,Q0=I.length;U0<Q0;U0++){let e=I[U0];if(e.texture!==null&&e.boundingBox.containsPoint(k))return e}return null}function pQ(I,u,U0,Q0,e){if(u.isScene!==!0)u=W9;$0.resetTextureUnits();let x0=u.fog,c0=Q0.isMeshStandardMaterial||Q0.isMeshLambertMaterial||Q0.isMeshPhongMaterial?u.environment:null,g0=f===null?M.outputColorSpace:f.isXRRenderTarget===!0?f.texture.colorSpace:R9.workingColorSpace,s0=Q0.isMeshStandardMaterial||Q0.isMeshLambertMaterial&&!Q0.envMap||Q0.isMeshPhongMaterial&&!Q0.envMap,m0=L0.get(Q0.envMap||c0,s0),U9=Q0.vertexColors===!0&&!!U0.attributes.color&&U0.attributes.color.itemSize===4,k9=!!U0.attributes.tangent&&(!!Q0.normalMap||Q0.anisotropy>0),i0=!!U0.morphAttributes.position,I9=!!U0.morphAttributes.normal,J8=!!U0.morphAttributes.color,s9=B7;if(Q0.toneMapped){if(f===null||f.isXRRenderTarget===!0)s9=M.toneMapping}let p9=U0.morphAttributes.position||U0.morphAttributes.normal||U0.morphAttributes.color,O8=p9!==void 0?p9.length:0,l0=m.get(Q0),a9=z.state.lights;if(_0===!0){if(B0===!0||I!==g){let m9=I===g&&Q0.id===o;z0.setState(Q0,I,m9)}}let _9=!1;if(Q0.version===l0.__version){if(l0.needsLights&&l0.lightsStateVersion!==a9.state.version)_9=!0;else if(l0.outputColorSpace!==g0)_9=!0;else if(e.isBatchedMesh&&l0.batching===!1)_9=!0;else if(!e.isBatchedMesh&&l0.batching===!0)_9=!0;else if(e.isBatchedMesh&&l0.batchingColor===!0&&e._colorsTexture===null)_9=!0;else if(e.isBatchedMesh&&l0.batchingColor===!1&&e._colorsTexture!==null)_9=!0;else if(e.isInstancedMesh&&l0.instancing===!1)_9=!0;else if(!e.isInstancedMesh&&l0.instancing===!0)_9=!0;else if(e.isSkinnedMesh&&l0.skinning===!1)_9=!0;else if(!e.isSkinnedMesh&&l0.skinning===!0)_9=!0;else if(e.isInstancedMesh&&l0.instancingColor===!0&&e.instanceColor===null)_9=!0;else if(e.isInstancedMesh&&l0.instancingColor===!1&&e.instanceColor!==null)_9=!0;else if(e.isInstancedMesh&&l0.instancingMorph===!0&&e.morphTexture===null)_9=!0;else if(e.isInstancedMesh&&l0.instancingMorph===!1&&e.morphTexture!==null)_9=!0;else if(l0.envMap!==m0)_9=!0;else if(Q0.fog===!0&&l0.fog!==x0)_9=!0;else if(l0.numClippingPlanes!==void 0&&(l0.numClippingPlanes!==z0.numPlanes||l0.numIntersection!==z0.numIntersection))_9=!0;else if(l0.vertexAlphas!==U9)_9=!0;else if(l0.vertexTangents!==k9)_9=!0;else if(l0.morphTargets!==i0)_9=!0;else if(l0.morphNormals!==I9)_9=!0;else if(l0.morphColors!==J8)_9=!0;else if(l0.toneMapping!==s9)_9=!0;else if(l0.morphTargetsCount!==O8)_9=!0;else if(!!l0.lightProbeGrid!==z.state.lightProbeGridArray.length>0)_9=!0}else _9=!0,l0.__version=Q0.version;let $8=l0.currentProgram;if(_9===!0){if($8=v6(Q0,u,e),b&&Q0.isNodeMaterial)b.onUpdateProgram(Q0,$8,l0)}let l8=!1,e8=!1,w7=!1,g9=$8.getUniforms(),i9=l0.uniforms;if(_.useProgram($8.program))l8=!0,e8=!0,w7=!0;if(Q0.id!==o)o=Q0.id,e8=!0;if(l0.needsLights){let m9=MY(z.state.lightProbeGridArray,e);if(l0.lightProbeGrid!==m9)l0.lightProbeGrid=m9,e8=!0}if(l8||g!==I){if(_.buffers.depth.getReversed()&&I.reversedDepth!==!0)I._reversedDepth=!0,I.updateProjectionMatrix();g9.setValue(p,"projectionMatrix",I.projectionMatrix),g9.setValue(p,"viewMatrix",I.matrixWorldInverse);let E7=g9.map.cameraPosition;if(E7!==void 0)E7.setValue(p,K9.setFromMatrixPosition(I.matrixWorld));if(A9.logarithmicDepthBuffer)g9.setValue(p,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2));if(Q0.isMeshPhongMaterial||Q0.isMeshToonMaterial||Q0.isMeshLambertMaterial||Q0.isMeshBasicMaterial||Q0.isMeshStandardMaterial||Q0.isShaderMaterial)g9.setValue(p,"isOrthographic",I.isOrthographicCamera===!0);if(g!==I)g=I,e8=!0,w7=!0}if(l0.needsLights){if(a9.state.sunShadowMap.length>0)g9.setValue(p,"sunShadowMap",a9.state.sunShadowMap,$0);if(a9.state.directionalShadowMap.length>0)g9.setValue(p,"directionalShadowMap",a9.state.directionalShadowMap,$0);if(a9.state.spotShadowMap.length>0)g9.setValue(p,"spotShadowMap",a9.state.spotShadowMap,$0);if(a9.state.pointShadowMap.length>0)g9.setValue(p,"pointShadowMap",a9.state.pointShadowMap,$0)}if(e.isSkinnedMesh){g9.setOptional(p,e,"bindMatrix"),g9.setOptional(p,e,"bindMatrixInverse");let m9=e.skeleton;if(m9){if(m9.boneTexture===null)m9.computeBoneTexture();g9.setValue(p,"boneTexture",m9.boneTexture,$0)}}if(e.isBatchedMesh){if(g9.setOptional(p,e,"batchingTexture"),g9.setValue(p,"batchingTexture",e._matricesTexture,$0),g9.setOptional(p,e,"batchingIdTexture"),g9.setValue(p,"batchingIdTexture",e._indirectTexture,$0),g9.setOptional(p,e,"batchingColorTexture"),e._colorsTexture!==null)g9.setValue(p,"batchingColorTexture",e._colorsTexture,$0)}let J7=U0.morphAttributes;if(J7.position!==void 0||J7.normal!==void 0||J7.color!==void 0)T9.update(e,U0,$8);if(e8||l0.receiveShadow!==e.receiveShadow)l0.receiveShadow=e.receiveShadow,g9.setValue(p,"receiveShadow",e.receiveShadow);if((Q0.isMeshStandardMaterial||Q0.isMeshLambertMaterial||Q0.isMeshPhongMaterial)&&Q0.envMap===null&&u.environment!==null)i9.envMapIntensity.value=u.environmentIntensity;if(i9.dfgLUT!==void 0)i9.dfgLUT.value=QR();if(e8){if(g9.setValue(p,"toneMappingExposure",M.toneMappingExposure),l0.needsLights)wK(i9,w7);if(x0&&Q0.fog===!0)h0.refreshFogUniforms(i9,x0);if(h0.refreshMaterialUniforms(i9,Q0,S,Z0,z.state.transmissionRenderTarget[I.id]),l0.needsLights&&l0.lightProbeGrid){let m9=l0.lightProbeGrid;i9.probesSH.value=m9.texture,i9.probesMin.value.copy(m9.boundingBox.min),i9.probesMax.value.copy(m9.boundingBox.max),i9.probesResolution.value.copy(m9.resolution)}BQ.upload(p,f6(l0),i9,$0)}if(Q0.isShaderMaterial&&Q0.uniformsNeedUpdate===!0)BQ.upload(p,f6(l0),i9,$0),Q0.uniformsNeedUpdate=!1;if(Q0.isSpriteMaterial)g9.setValue(p,"center",e.center);if(g9.setValue(p,"modelViewMatrix",e.modelViewMatrix),g9.setValue(p,"normalMatrix",e.normalMatrix),g9.setValue(p,"modelMatrix",e.matrixWorld),Q0.uniformsGroups!==void 0){let m9=Q0.uniformsGroups;for(let E7=0,d7=m9.length;E7<d7;E7++){let k$=m9[E7];d0.update(k$,$8),d0.bind(k$,$8)}}return $8}function wK(I,u){I.ambientLightColor.needsUpdate=u,I.lightProbe.needsUpdate=u,I.sunLights.needsUpdate=u,I.sunLightShadows.needsUpdate=u,I.directionalLights.needsUpdate=u,I.directionalLightShadows.needsUpdate=u,I.pointLights.needsUpdate=u,I.pointLightShadows.needsUpdate=u,I.spotLights.needsUpdate=u,I.spotLightShadows.needsUpdate=u,I.rectAreaLights.needsUpdate=u,I.hemisphereLights.needsUpdate=u}function N8(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return h},this.getRenderTarget=function(){return f},this.setRenderTargetTextures=function(I,u,U0){let Q0=m.get(I);if(Q0.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,Q0.__autoAllocateDepthBuffer===!1)Q0.__useRenderToTexture=!1;m.get(I.texture).__webglTexture=u,m.get(I.depthTexture).__webglTexture=Q0.__autoAllocateDepthBuffer?void 0:U0,Q0.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,u){let U0=m.get(I);U0.__webglFramebuffer=u,U0.__useDefaultFramebuffer=u===void 0},this.setRenderTarget=function(I,u=0,U0=0){f=I,y=u,h=U0;let Q0=null,e=!1,x0=!1;if(I){let g0=m.get(I);if(g0.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(p.FRAMEBUFFER,g0.__webglFramebuffer),a.copy(I.viewport),j.copy(I.scissor),i=I.scissorTest,_.viewport(a),_.scissor(j),_.setScissorTest(i),o=-1;return}else if(g0.__webglFramebuffer===void 0)$0.setupRenderTarget(I);else if(g0.__hasExternalTextures)$0.rebindTextures(I,m.get(I.texture).__webglTexture,m.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let U9=I.depthTexture;if(g0.__boundDepthTexture!==U9){if(U9!==null&&m.has(U9)&&(I.width!==U9.image.width||I.height!==U9.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$0.setupDepthRenderbuffer(I)}}let s0=I.texture;if(s0.isData3DTexture||s0.isDataArrayTexture||s0.isCompressedArrayTexture)x0=!0;let m0=m.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget){if(Array.isArray(m0[u]))Q0=m0[u][U0];else Q0=m0[u];e=!0}else if(I.samples>0&&$0.useMultisampledRTT(I)===!1)Q0=m.get(I).__webglMultisampledFramebuffer;else if(Array.isArray(m0))Q0=m0[U0];else Q0=m0;a.copy(I.viewport),j.copy(I.scissor),i=I.scissorTest}else a.copy(Y0).multiplyScalar(S).floor(),j.copy(t).multiplyScalar(S).floor(),i=D0;if(U0!==0)Q0=l;if(_.bindFramebuffer(p.FRAMEBUFFER,Q0))_.drawBuffers(I,Q0);if(_.viewport(a),_.scissor(j),_.setScissorTest(i),e){let g0=m.get(I.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_CUBE_MAP_POSITIVE_X+u,g0.__webglTexture,U0)}else if(x0){let g0=u;for(let s0=0;s0<I.textures.length;s0++){let m0=m.get(I.textures[s0]);p.framebufferTextureLayer(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0+s0,m0.__webglTexture,U0,g0)}}else if(I!==null&&U0!==0){let g0=m.get(I.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,g0.__webglTexture,U0)}o=-1};function t8(I){let u=m.get(I);if(u.__readFormat!==I.format||u.__readType!==I.type)u.__readFormat=I.format,u.__readType=I.type,u.__formatReadable=A9.textureFormatReadable(I.format),u.__typeReadable=A9.textureTypeReadable(I.type);return u}if(this.readRenderTargetPixels=function(I,u,U0,Q0,e,x0,c0,g0=0){if(!(I&&I.isWebGLRenderTarget)){Z9("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let s0=m.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&c0!==void 0)s0=s0[c0];if(s0){_.bindFramebuffer(p.FRAMEBUFFER,s0);try{let m0=I.textures[g0],U9=m0.format,k9=m0.type;if(I.textures.length>1)p.readBuffer(p.COLOR_ATTACHMENT0+g0);let i0=t8(m0);if(i0.__formatReadable===!1){Z9("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(i0.__typeReadable===!1){Z9("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(u>=0&&u<=I.width-Q0&&(U0>=0&&U0<=I.height-e))p.readPixels(u,U0,Q0,e,G0.convert(U9),G0.convert(k9),x0)}finally{let m0=f!==null?m.get(f).__webglFramebuffer:null;_.bindFramebuffer(p.FRAMEBUFFER,m0)}}},this.readRenderTargetPixelsAsync=async function(I,u,U0,Q0,e,x0,c0,g0=0){if(!(I&&I.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let s0=m.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&c0!==void 0)s0=s0[c0];if(s0)if(u>=0&&u<=I.width-Q0&&(U0>=0&&U0<=I.height-e)){_.bindFramebuffer(p.FRAMEBUFFER,s0);let m0=I.textures[g0],U9=m0.format,k9=m0.type;if(I.textures.length>1)p.readBuffer(p.COLOR_ATTACHMENT0+g0);let i0=t8(m0);if(i0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(i0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let I9=p.createBuffer();p.bindBuffer(p.PIXEL_PACK_BUFFER,I9),p.bufferData(p.PIXEL_PACK_BUFFER,x0.byteLength,p.STREAM_READ),p.readPixels(u,U0,Q0,e,G0.convert(U9),G0.convert(k9),0),p.bindBuffer(p.PIXEL_PACK_BUFFER,null);let J8=f!==null?m.get(f).__webglFramebuffer:null;_.bindFramebuffer(p.FRAMEBUFFER,J8);let s9=p.fenceSync(p.SYNC_GPU_COMMANDS_COMPLETE,0);return p.flush(),await L5(p,s9,4),p.bindBuffer(p.PIXEL_PACK_BUFFER,I9),p.getBufferSubData(p.PIXEL_PACK_BUFFER,0,x0),p.bindBuffer(p.PIXEL_PACK_BUFFER,null),p.deleteBuffer(I9),p.deleteSync(s9),x0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,u=null,U0=0){let Q0=Math.pow(2,-U0),e=Math.floor(I.image.width*Q0),x0=Math.floor(I.image.height*Q0),c0=u!==null?u.x:0,g0=u!==null?u.y:0;$0.setTexture2D(I,0),p.copyTexSubImage2D(p.TEXTURE_2D,U0,0,0,c0,g0,e,x0),_.unbindTexture()},this.copyTextureToTexture=function(I,u,U0=null,Q0=null,e=0,x0=0){let c0,g0,s0,m0,U9,k9,i0,I9,J8,s9=I.isCompressedTexture?I.mipmaps[x0]:I.image;if(U0!==null)c0=U0.max.x-U0.min.x,g0=U0.max.y-U0.min.y,s0=U0.isBox3?U0.max.z-U0.min.z:1,m0=U0.min.x,U9=U0.min.y,k9=U0.isBox3?U0.min.z:0;else{let i9=Math.pow(2,-e);if(c0=Math.floor(s9.width*i9),g0=Math.floor(s9.height*i9),I.isDataArrayTexture)s0=s9.depth;else if(I.isData3DTexture)s0=Math.floor(s9.depth*i9);else s0=1;m0=0,U9=0,k9=0}if(Q0!==null)i0=Q0.x,I9=Q0.y,J8=Q0.z;else i0=0,I9=0,J8=0;let p9=G0.convert(u.format),O8=G0.convert(u.type),l0;if(u.isData3DTexture)$0.setTexture3D(u,0),l0=p.TEXTURE_3D;else if(u.isDataArrayTexture||u.isCompressedArrayTexture)$0.setTexture2DArray(u,0),l0=p.TEXTURE_2D_ARRAY;else $0.setTexture2D(u,0),l0=p.TEXTURE_2D;_.activeTexture(p.TEXTURE0),_.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,u.flipY),_.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),_.pixelStorei(p.UNPACK_ALIGNMENT,u.unpackAlignment);let a9=_.getParameter(p.UNPACK_ROW_LENGTH),_9=_.getParameter(p.UNPACK_IMAGE_HEIGHT),$8=_.getParameter(p.UNPACK_SKIP_PIXELS),l8=_.getParameter(p.UNPACK_SKIP_ROWS),e8=_.getParameter(p.UNPACK_SKIP_IMAGES);_.pixelStorei(p.UNPACK_ROW_LENGTH,s9.width),_.pixelStorei(p.UNPACK_IMAGE_HEIGHT,s9.height),_.pixelStorei(p.UNPACK_SKIP_PIXELS,m0),_.pixelStorei(p.UNPACK_SKIP_ROWS,U9),_.pixelStorei(p.UNPACK_SKIP_IMAGES,k9);let w7=I.isDataArrayTexture||I.isData3DTexture,g9=u.isDataArrayTexture||u.isData3DTexture;if(I.isDepthTexture){let i9=m.get(I),J7=m.get(u),m9=m.get(i9.__renderTarget),E7=m.get(J7.__renderTarget);_.bindFramebuffer(p.READ_FRAMEBUFFER,m9.__webglFramebuffer),_.bindFramebuffer(p.DRAW_FRAMEBUFFER,E7.__webglFramebuffer);for(let d7=0;d7<s0;d7++){if(w7)p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,m.get(I).__webglTexture,e,k9+d7),p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,m.get(u).__webglTexture,x0,J8+d7);p.blitFramebuffer(m0,U9,c0,g0,i0,I9,c0,g0,p.DEPTH_BUFFER_BIT,p.NEAREST)}_.bindFramebuffer(p.READ_FRAMEBUFFER,null),_.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else if(e!==0||I.isRenderTargetTexture||m.has(I)){let i9=m.get(I),J7=m.get(u);_.bindFramebuffer(p.READ_FRAMEBUFFER,r),_.bindFramebuffer(p.DRAW_FRAMEBUFFER,v);for(let m9=0;m9<s0;m9++){if(w7)p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,i9.__webglTexture,e,k9+m9);else p.framebufferTexture2D(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,i9.__webglTexture,e);if(g9)p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,J7.__webglTexture,x0,J8+m9);else p.framebufferTexture2D(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,J7.__webglTexture,x0);if(e!==0)p.blitFramebuffer(m0,U9,c0,g0,i0,I9,c0,g0,p.COLOR_BUFFER_BIT,p.NEAREST);else if(g9)p.copyTexSubImage3D(l0,x0,i0,I9,J8+m9,m0,U9,c0,g0);else p.copyTexSubImage2D(l0,x0,i0,I9,m0,U9,c0,g0)}_.bindFramebuffer(p.READ_FRAMEBUFFER,null),_.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else if(g9)if(I.isDataTexture||I.isData3DTexture)p.texSubImage3D(l0,x0,i0,I9,J8,c0,g0,s0,p9,O8,s9.data);else if(u.isCompressedArrayTexture)p.compressedTexSubImage3D(l0,x0,i0,I9,J8,c0,g0,s0,p9,s9.data);else p.texSubImage3D(l0,x0,i0,I9,J8,c0,g0,s0,p9,O8,s9);else if(I.isDataTexture)p.texSubImage2D(p.TEXTURE_2D,x0,i0,I9,c0,g0,p9,O8,s9.data);else if(I.isCompressedTexture)p.compressedTexSubImage2D(p.TEXTURE_2D,x0,i0,I9,s9.width,s9.height,p9,s9.data);else p.texSubImage2D(p.TEXTURE_2D,x0,i0,I9,c0,g0,p9,O8,s9);if(_.pixelStorei(p.UNPACK_ROW_LENGTH,a9),_.pixelStorei(p.UNPACK_IMAGE_HEIGHT,_9),_.pixelStorei(p.UNPACK_SKIP_PIXELS,$8),_.pixelStorei(p.UNPACK_SKIP_ROWS,l8),_.pixelStorei(p.UNPACK_SKIP_IMAGES,e8),x0===0&&u.generateMipmaps)p.generateMipmap(l0);_.unbindTexture()},this.initRenderTarget=function(I){if(m.get(I).__webglFramebuffer===void 0)$0.setupRenderTarget(I)},this.initTexture=function(I){if(I.isCubeTexture)$0.setTextureCube(I,0);else if(I.isData3DTexture)$0.setTexture3D(I,0);else if(I.isDataArrayTexture||I.isCompressedArrayTexture)$0.setTexture2DArray(I,0);else $0.setTexture2D(I,0);_.unbindTexture()},this.resetState=function(){y=0,h=0,f=null,_.reset(),S0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return KX}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let $=this.getContext();$.drawingBufferColorSpace=R9._getDrawingBufferColorSpace(J),$.unpackColorSpace=R9._getUnpackColorSpace()}}var qU={type:"change"},uX={type:"start"},RU={type:"end"},GK=new D6,OU=new Q7,ZR=Math.cos(70*b7.DEG2RAD),q8=new T,h8=2*Math.PI,c9={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lX=0.000001;class dX extends XK{constructor(J,$=null){super(J,$);if(this.state=c9.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:O6.ROTATE,MIDDLE:O6.DOLLY,RIGHT:O6.PAN},this.touches={ONE:R6.ROTATE,TWO:R6.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new E9,this._lastTargetPosition=new T,this._quat=new E9().setFromUnitVectors(J.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new OQ,this._sphericalDelta=new OQ,this._scale=1,this._panOffset=new T,this._rotateStart=new R0,this._rotateEnd=new R0,this._rotateDelta=new R0,this._panStart=new R0,this._panEnd=new R0,this._panDelta=new R0,this._dollyStart=new R0,this._dollyEnd=new R0,this._dollyDelta=new R0,this._dollyDirection=new T,this._mouse=new R0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WR.bind(this),this._onPointerDown=KR.bind(this),this._onPointerUp=XR.bind(this),this._onContextMenu=ER.bind(this),this._onMouseWheel=UR.bind(this),this._onKeyDown=NR.bind(this),this._onTouchStart=GR.bind(this),this._onTouchMove=FR.bind(this),this._onMouseDown=YR.bind(this),this._onMouseMove=HR.bind(this),this._interceptControlDown=qR.bind(this),this._interceptControlUp=OR.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=c9.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qU),this.update(),this.state=c9.NONE}pan(J,$){this._pan(J,$),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let $=this.object.position;if(q8.copy($).sub(this.target),q8.applyQuaternion(this._quat),this._spherical.setFromVector3(q8),this.autoRotate&&this.state===c9.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let Q=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite(Q)&&isFinite(Z)){if(Q<-Math.PI)Q+=h8;else if(Q>Math.PI)Q-=h8;if(Z<-Math.PI)Z+=h8;else if(Z>Math.PI)Z-=h8;if(Q<=Z)this._spherical.theta=Math.max(Q,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(Q+Z)/2?Math.max(Q,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let K=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),K=W!=this._spherical.radius}if(q8.setFromSpherical(this._spherical),q8.applyQuaternion(this._quatInverse),$.copy(this.target).add(q8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let X=q8.length();W=this._clampDistance(X*this._scale);let Y=X-W;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),K=!!Y}else if(this.object.isOrthographicCamera){let X=new T(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),K=Y!==this.object.zoom;let H=new T(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),W=q8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(GK.origin.copy(this.object.position),GK.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(GK.direction))<ZR)this.object.lookAt(this.target);else OU.setFromNormalAndCoplanarPoint(this.object.up,this.target),GK.intersectPlane(OU,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),K=!0}if(this._scale=1,this._performCursorZoom=!1,K||this._lastPosition.distanceToSquared(this.object.position)>lX||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lX||this._lastTargetPosition.distanceToSquared(this.target)>lX)return this.dispatchEvent(qU),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return h8/60*this.autoRotateSpeed*J;else return h8/60/60*this.autoRotateSpeed}_getZoomScale(J){let $=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*$)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,$){q8.setFromMatrixColumn($,0),q8.multiplyScalar(-J),this._panOffset.add(q8)}_panUp(J,$){if(this.screenSpacePanning===!0)q8.setFromMatrixColumn($,1);else q8.setFromMatrixColumn($,0),q8.crossVectors(this.object.up,q8);q8.multiplyScalar(J),this._panOffset.add(q8)}_pan(J,$){let Q=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;q8.copy(Z).sub(this.target);let K=q8.length();K*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*K/Q.clientHeight,this.object.matrix),this._panUp(2*$*K/Q.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/Q.clientWidth,this.object.matrix),this._panUp($*(this.object.top-this.object.bottom)/this.object.zoom/Q.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,$){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let Q=this.domElement.getBoundingClientRect(),Z=J-Q.left,K=$-Q.top,W=Q.width,X=Q.height;this._mouse.x=Z/W*2-1,this._mouse.y=-(K/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(h8*this._rotateDelta.x/$.clientHeight),this._rotateUp(h8*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let $=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(h8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);$=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-h8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);$=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(h8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);$=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-h8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);$=!0;break}if($)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._rotateStart.set(Q,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._panStart.set(Q,Z)}}_handleTouchStartDolly(J){let $=this._getSecondPointerPosition(J),Q=J.pageX-$.x,Z=J.pageY-$.y,K=Math.sqrt(Q*Q+Z*Z);this._dollyStart.set(0,K)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateEnd.set(Z,K)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(h8*this._rotateDelta.x/$.clientHeight),this._rotateUp(h8*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._panEnd.set(Q,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let $=this._getSecondPointerPosition(J),Q=J.pageX-$.x,Z=J.pageY-$.y,K=Math.sqrt(Q*Q+Z*Z);this._dollyEnd.set(0,K),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+$.x)*0.5,X=(J.pageY+$.y)*0.5;this._updateZoomParameters(W,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId){this._pointers.splice($,1);return}}_isTrackingPointer(J){for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId)return!0;return!1}_trackPointer(J){let $=this._pointerPositions[J.pointerId];if($===void 0)$=new R0,this._pointerPositions[J.pointerId]=$;$.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let $=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[$]}_customWheelEvent(J){let $=J.deltaMode,Q={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch($){case 1:Q.deltaY*=16;break;case 2:Q.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)Q.deltaY*=10;return Q}}function KR(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function WR(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function XR(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(RU),this.state=c9.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let $=this._pointers[0],Q=this._pointerPositions[$];this._onTouchStart({pointerId:$,pageX:Q.x,pageY:Q.y});break}}function YR(J){let $;switch(J.button){case 0:$=this.mouseButtons.LEFT;break;case 1:$=this.mouseButtons.MIDDLE;break;case 2:$=this.mouseButtons.RIGHT;break;default:$=-1}switch($){case O6.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=c9.DOLLY;break;case O6.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=c9.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=c9.ROTATE}break;case O6.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=c9.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=c9.PAN}break;default:this.state=c9.NONE}if(this.state!==c9.NONE)this.dispatchEvent(uX)}function HR(J){switch(this.state){case c9.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case c9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case c9.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function UR(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==c9.NONE)return;J.preventDefault(),this.dispatchEvent(uX),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(RU)}function NR(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function GR(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case R6.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=c9.TOUCH_ROTATE;break;case R6.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=c9.TOUCH_PAN;break;default:this.state=c9.NONE}break;case 2:switch(this.touches.TWO){case R6.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=c9.TOUCH_DOLLY_PAN;break;case R6.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=c9.TOUCH_DOLLY_ROTATE;break;default:this.state=c9.NONE}break;default:this.state=c9.NONE}if(this.state!==c9.NONE)this.dispatchEvent(uX)}function FR(J){switch(this._trackPointer(J),this.state){case c9.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case c9.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case c9.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case c9.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=c9.NONE}}function ER(J){if(this.enabled===!1)return;J.preventDefault()}function qR(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function OR(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var kQ=new T;function X7(J,$,Q,Z,K,W){let X=2*Math.PI*K/4,Y=Math.max(W-2*K,0),H=Math.PI/4;kQ.copy($),kQ[Z]=0,kQ.normalize();let U=0.5*X/(X+Y),G=1-kQ.angleTo(J)/H;if(Math.sign(kQ[Q])===1)return G*U;else return Y/(X+Y)+U+U*(1-G)}class y8 extends j9{constructor(J=1,$=1,Q=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,$/2,Q/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:$,depth:Q,segments:Z,radius:K},W===1)return;let X=this.toNonIndexed();this.index=null,this.attributes.position=X.attributes.position,this.attributes.normal=X.attributes.normal,this.attributes.uv=X.attributes.uv;let Y=new T,H=new T,U=new T(J,$,Q).divideScalar(2).subScalar(K),G=this.attributes.position.array,F=this.attributes.normal.array,N=this.attributes.uv.array,q=G.length/6,O=new T,B=0.5/W;for(let R=0,E=0;R<G.length;R+=3,E+=2)switch(Y.fromArray(G,R),H.copy(Y),H.x-=Math.sign(H.x)*B,H.y-=Math.sign(H.y)*B,H.z-=Math.sign(H.z)*B,H.normalize(),G[R+0]=U.x*Math.sign(Y.x)+H.x*K,G[R+1]=U.y*Math.sign(Y.y)+H.y*K,G[R+2]=U.z*Math.sign(Y.z)+H.z*K,F[R+0]=H.x,F[R+1]=H.y,F[R+2]=H.z,Math.floor(R/q)){case 0:O.set(1,0,0),N[E+0]=X7(O,H,"z","y",K,Q),N[E+1]=1-X7(O,H,"y","z",K,$);break;case 1:O.set(-1,0,0),N[E+0]=1-X7(O,H,"z","y",K,Q),N[E+1]=1-X7(O,H,"y","z",K,$);break;case 2:O.set(0,1,0),N[E+0]=1-X7(O,H,"x","z",K,J),N[E+1]=X7(O,H,"z","x",K,Q);break;case 3:O.set(0,-1,0),N[E+0]=1-X7(O,H,"x","z",K,J),N[E+1]=1-X7(O,H,"z","x",K,Q);break;case 4:O.set(0,0,1),N[E+0]=1-X7(O,H,"x","y",K,J),N[E+1]=1-X7(O,H,"y","x",K,$);break;case 5:O.set(0,0,-1),N[E+0]=X7(O,H,"x","y",K,J),N[E+1]=1-X7(O,H,"y","x",K,$);break}}static fromJSON(J){return new y8(J.width,J.height,J.depth,J.segments,J.radius)}}function F$(J,$=!1){let Q=J[0].index!==null,Z=new Set(Object.keys(J[0].attributes)),K=new Set(Object.keys(J[0].morphAttributes)),W={},X={},Y=J[0].morphTargetsRelative,H=new b9,U=0;for(let G=0;G<J.length;++G){let F=J[G],N=0;if(Q!==(F.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let q in F.attributes){if(!Z.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+'. All geometries must have compatible attributes; make sure "'+q+'" attribute exists among all geometries, or in none of them.'),null;if(W[q]===void 0)W[q]=[];W[q].push(F.attributes[q]),N++}if(N!==Z.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". Make sure all geometries have the same number of attributes."),null;if(Y!==F.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let q in F.morphAttributes){if(!K.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+".  .morphAttributes must be consistent throughout all geometries."),null;if(X[q]===void 0)X[q]=[];X[q].push(F.morphAttributes[q])}if($){let q;if(Q)q=F.index.count;else if(F.attributes.position!==void 0)q=F.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". The geometry must have either an index or a position attribute"),null;H.addGroup(U,q,G),U+=q}}if(Q){let G=0,F=[];for(let N=0;N<J.length;++N){let q=J[N].index;for(let O=0;O<q.count;++O)F.push(q.getX(O)+G);G+=J[N].attributes.position.count}H.setIndex(F)}for(let G in W){let F=LU(W[G]);if(!F)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+G+" attribute."),null;H.setAttribute(G,F)}for(let G in X){let F=X[G][0].length;if(F===0)continue;H.morphAttributes=H.morphAttributes||{},H.morphAttributes[G]=[];for(let N=0;N<F;++N){let q=[];for(let B=0;B<X[G].length;++B)q.push(X[G][B][N]);let O=LU(q);if(!O)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+G+" morphAttribute."),null;H.morphAttributes[G].push(O)}}return H}function LU(J){let $,Q,Z,K=-1,W=0;for(let U=0;U<J.length;++U){let G=J[U];if($===void 0)$=G.array.constructor;if($!==G.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(Q===void 0)Q=G.itemSize;if(Q!==G.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(Z===void 0)Z=G.normalized;if(Z!==G.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(K===-1)K=G.gpuType;if(K!==G.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;W+=G.count*Q}let X=new $(W),Y=new r9(X,Q,Z),H=0;for(let U=0;U<J.length;++U){let G=J[U];if(G.isInterleavedBufferAttribute){let F=H/Q;for(let N=0,q=G.count;N<q;N++)for(let O=0;O<Q;O++){let B=G.getComponent(N,O);Y.setComponent(N+F,O,B)}}else X.set(G.array,H);H+=G.count*Q}if(K!==void 0)Y.gpuType=K;return Y}function cX(J,$){if($===JX)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if($===J$||$===$Q){let Q=J.getIndex();if(Q===null){let W=[],X=J.getAttribute("position");if(X!==void 0){for(let Y=0;Y<X.count;Y++)W.push(Y);J.setIndex(W),Q=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=Q.count-2,K=[];if($===J$)for(let W=1;W<=Z;W++)K.push(Q.getX(0)),K.push(Q.getX(W)),K.push(Q.getX(W+1));else for(let W=0;W<Z;W++)if(W%2===0)K.push(Q.getX(W)),K.push(Q.getX(W+1)),K.push(Q.getX(W+2));else K.push(Q.getX(W+2)),K.push(Q.getX(W+1)),K.push(Q.getX(W));if(K.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(K),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",$),J}function UJ(J){let $=new Map,Q=new Map,Z=J.clone();return VU(J,Z,function(K,W){$.set(W,K),Q.set(K,W)}),Z.traverse(function(K){if(!K.isSkinnedMesh)return;let W=K,X=$.get(K),Y=X.skeleton.bones;W.skeleton=X.skeleton.clone(),W.bindMatrix.copy(X.bindMatrix),W.skeleton.bones=Y.map(function(H){return Q.get(H)}),W.bind(W.skeleton,W.bindMatrix)}),Z}function VU(J,$,Q){Q(J,$);for(let Z=0;Z<J.children.length;Z++)VU(J.children[Z],$.children[Z],Q)}var C0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0033,pipColumnSpacing:0.0072,pipRowSpacing:0.0076,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25,boardLimit:0.27},P8={tope:1.06,z:-3.89,fondo:0.62,ancho:3.9},C7=[[0,C0.seatDistance,Math.PI],[C0.seatDistance,0,-Math.PI/2],[0,-C0.seatDistance,0],[-C0.seatDistance,0,Math.PI/2]];function sX(J){let $=J.vertical?C0.tileWidth:C0.tileLength,Q=J.vertical?C0.tileLength:C0.tileWidth;return{left:J.x-$/2,right:J.x+$/2,top:J.z-Q/2,bottom:J.z+Q/2}}var RR=C0.boardLimit,LR=C0.feltWidth/2-0.022;function iX(J,$,Q=RR){let Z=sX(J);if(Math.max(Math.abs(Z.left),Math.abs(Z.right),Math.abs(Z.top),Math.abs(Z.bottom))>Q+0.00000001)return!1;return $.every((K)=>{let W=sX(K);return Z.right<=W.left-0.0015||Z.left>=W.right+0.0015||Z.bottom<=W.top-0.0015||Z.top>=W.bottom+0.0015})}function BU(J,$,Q){let{tileLength:Z,tileWidth:K,tileGap:W}=C0,X=$.x===$.y,Y=(X?K:Z)/2,H=J.tile,U=[],G=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let F=0;F<G.length;F++){let[N,q]=G[F],O=F!==0,B=(H.isDouble?K:Z)/2,R=(H.isDouble?Z:K)/2,E=H.x+J.dx*(O?H.isDouble?0:Z/4:B),P=H.z+J.dz*(O?H.isDouble?0:Z/4:B),k=O?[0,Z/8,-Z/8]:[0];for(let V of k){let z=Math.atan2(-q,N)+(Q==="left"?Math.PI:0)+(X?Math.PI/2:0);U.push({id:$.id,x:E+N*((O?R:0)+W+Y)+J.dx*V,z:P+q*((O?R:0)+W+Y)+J.dz*V,yaw:z,vertical:Math.abs(Math.sin(z))>0.5,isDouble:X,dx:N,dz:q,side:Q})}}return U}function nX(J,$,Q,Z){let K={id:"future",x:0,y:Z?0:1};return BU({tile:J,dx:J.dx,dz:J.dz},K,Q).some((W)=>iX(W,$))}function DU(J,$=[]){return MU(J,$).placements}function kU(J,$=[]){let Q=MU(J,$);if(!Q.ends)return[];return["left","right"].map((Z)=>{let K=Q.ends[Z],W=K.tile,X=sX(W),Y=Math.abs(K.dx)*(X.right-X.left)/2+Math.abs(K.dz)*(X.bottom-X.top)/2,H=Y+0.013;return{x:W.x+K.dx*H,z:W.z+K.dz*H,dx:K.dx,dz:K.dz}})}function MU(J,$){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return{placements:[],ends:null};let Q=new Map(J.map((N)=>[N.id,N])),Z=$.filter((N)=>N.type==="play"&&N.tile&&Q.has(N.tile)),K=Q.get(Z[0]?.tile||"")||J[0],W=J.findIndex((N)=>N.id===K.id),X=K.x===K.y,Y={id:K.id,x:0,z:0,yaw:X?Math.PI/2:0,vertical:X,isDouble:X,dx:1,dz:0,side:"root"},H=[Y],U=new Map([[Y.id,Y]]),G={left:{tile:Y,dx:-1,dz:0},right:{tile:Y,dx:1,dz:0}},F=Z.length===J.length?Z.slice(1):[...J.slice(0,W).reverse().map((N)=>({type:"play",tile:N.id,side:"left"})),...J.slice(W+1).map((N)=>({type:"play",tile:N.id,side:"right"}))];for(let N of F){let q=Q.get(N.tile);if(U.has(q.id))continue;let O=N.side==="left"?"left":N.side==="right"?"right":J.findIndex((P)=>P.id===q.id)<W?"left":"right",B=BU(G[O],q,O),R=B.filter((P)=>iX(P,H));if(!R.length)R=B.filter((P)=>iX(P,H,LR));let E=R.find((P)=>nX(P,[...H,P],O,!1)&&nX(P,[...H,P],O,!0))||R.find((P)=>nX(P,[...H,P],O,!1))||R[0];if(!E)throw Error(`No safe placement for ${q.id} after ${H.length} tiles`);H.push(E),U.set(q.id,E),G[O]={tile:E,dx:E.dx,dz:E.dz}}return{placements:J.map((N)=>U.get(N.id)),ends:G}}function CU(J,$,Q=!1){if(Q)return{breath:0,headYaw:0,headNod:0};let Z=J*2.173+0.43;return{breath:0.0055*Math.sin($*(0.78+J*0.093)+Z),headYaw:0.087*Math.sin($*(0.213+J*0.037)+Z)+0.028*Math.sin($*(0.487+J*0.029)+Z*1.91),headNod:0.009*Math.sin($*(0.267+J*0.035)+Z*0.71)}}var PU=new T(1,0,0),z7=new T(0,1,0),oX=new E9;function JY(J){let $=[];return J.traverse((Q)=>{if(Q.isBone)$.push({bone:Q,position:Q.position.clone(),quaternion:Q.quaternion.clone(),scale:Q.scale.clone()})}),$}var m7=new T,I7=new T,l7=new T,NJ=new T,X6=new T,Y7=new T,GJ=new T,FJ=new T,qJ=new E9,A7=new E9,DK=new E9,VK=new E9,AQ=(J)=>Math.min(1,Math.max(-1,J)),OJ=(J,$,Q)=>Math.min(Q,Math.max($,J)),p8=(J)=>J*J*(3-2*J);function X8(J,$){J.getWorldQuaternion(A7),J.parent.getWorldQuaternion(DK),J.quaternion.copy(DK.invert()).multiply($).multiply(A7),J.updateMatrixWorld(!0)}var v8=new T,U7=new T;function VR(J){J.holder.getWorldQuaternion(VK),v8.set(1,0,0).applyQuaternion(VK),U7.set(0,0,1).applyQuaternion(VK)}function eX(J,$,Q,Z,K){return K.set($,Q,Z).applyMatrix4(J.holder.matrixWorld)}function aX(J,$,Q,Z){return Z.set(J,$,Q).applyQuaternion(VK).normalize()}var BR=0.965;function DR(J,$,Q){let{brazo:Z,antebrazo:K,mano:W}=J;if(!Z||!K||!W||!Z.parent||!K.parent)return;Z.getWorldPosition(m7),K.getWorldPosition(I7),W.getWorldPosition(l7);let X=m7.distanceTo(I7),Y=I7.distanceTo(l7);if(X<0.00001||Y<0.00001)return;let H=OJ(m7.distanceTo($),Math.abs(X-Y)+0.002,(X+Y)*BR);if(X6.subVectors(I7,m7),Y7.subVectors(l7,I7),GJ.crossVectors(X6,Y7),GJ.lengthSq()<0.0000000001)GJ.copy(v8);else GJ.normalize();let U=Math.acos(AQ((X*X+Y*Y-m7.distanceToSquared(l7))/(2*X*Y))),F=Math.acos(AQ((X*X+Y*Y-H*H)/(2*X*Y)))-U;if(X8(K,qJ.setFromAxisAngle(GJ,F)),W.getWorldPosition(l7),Math.abs(m7.distanceTo(l7)-H)>0.001)X8(K,qJ.setFromAxisAngle(GJ,-2*F)),W.getWorldPosition(l7);if(X6.subVectors(l7,m7).normalize(),Y7.subVectors($,m7),Y7.lengthSq()<0.0000000001)return;if(Y7.normalize(),X8(Z,qJ.setFromUnitVectors(X6,Y7)),!Q)return;if(K.getWorldPosition(I7),FJ.subVectors(I7,m7),FJ.addScaledVector(Y7,-FJ.dot(Y7)),NJ.subVectors(Q,m7),NJ.addScaledVector(Y7,-NJ.dot(Y7)),FJ.lengthSq()<0.0000000001||NJ.lengthSq()<0.0000000001)return;FJ.normalize(),NJ.normalize();let N=Math.atan2(GJ.crossVectors(FJ,NJ).dot(Y7),AQ(FJ.dot(NJ)));X8(Z,qJ.setFromAxisAngle(Y7,N))}var g8=new T,O$=new T,MQ=new T,kR=new $9,rX=new E9,CQ=new E9;function MR(J,$,Q){let{antebrazo:Z,mano:K}=J;if(!Z||!K||!K.parent)return;if(g8.copy($).normalize(),MQ.crossVectors(g8,Q),MQ.lengthSq()<0.00000001)return;MQ.normalize(),O$.crossVectors(MQ,g8),rX.setFromRotationMatrix(kR.makeBasis(MQ,g8,O$)),Z.getWorldPosition(I7),K.getWorldPosition(l7),X6.subVectors(l7,I7).normalize(),K.getWorldQuaternion(A7),CQ.copy(rX).multiply(A7.invert());let W=CQ.x*X6.x+CQ.y*X6.y+CQ.z*X6.z,X=2*Math.atan2(W,CQ.w);if(Number.isFinite(X))X8(Z,qJ.setFromAxisAngle(X6,OJ(X*0.5,-1.2,1.2)));K.parent.getWorldQuaternion(DK),K.quaternion.copy(DK.invert()).multiply(rX),K.updateMatrixWorld(!0)}var CR=new T;function PR(J,$,Q){let Z=$.lado==="Left"?1:-1,K=J.index*1.7,W=C0.seatDistance-C0.tableWidth/2;return eX(J,Z*(0.225+Math.sin(K)*0.01)+Math.sin(Q*0.23+K)*0.004,C0.surfaceY+0.026,W+(Z>0?0.035:0.06)+Math.cos(K*1.3)*0.012+Math.sin(Q*0.17+K*2)*0.004,CR)}var IR=new T,E$=new T,BK=new T,FK=new T,zR=0.045,AR=0.05,_R=0.12,TR=0.14,wR=0.45,SR=4;function IU(J,$,Q){return FK.subVectors($,J.holder.getWorldPosition(BK)),FK.y=0,FK.normalize(),Q.copy($).addScaledVector(FK,-AR).setY($.y+zR)}function jR(J,$,Q){let Z=J.jugada;if(!Z)return null;if($-Z.t0>SR)return J.jugada=null,null;let K=Z.anim;if(K.elapsed<K.duration)return IU(J,Z.obj.position,E$),E$.lerpVectors(Q,E$,p8(OJ(K.elapsed/_R,0,1)));if(Z.aterrizo==null)Z.aterrizo=$;let W=$-Z.aterrizo;IU(J,Z.hasta,E$);let X=K.golpe?0.7:TR;if(W<X)return E$;let Y=(W-X)/wR;if(Y>=1)return J.jugada=null,null;return E$.lerp(Q,p8(Y))}var G9=[1,2.2,3.5,4.7,5.6],zU=-1e9;function yR(J,$,Q){let Z=J.bebida;if(!Z)return null;if(J.trago){let W=J.trago.fijo??$-J.trago.t0;if(W<0||W>=G9[4]||J.jugada)return J.trago=null,jU(Z),J.sed=$+90+Math.random()*150,null;return W}if(!Q||!Q.dt)return null;if(J.sed==null)return J.sed=$+20+Math.random()*100,null;if($<J.sed||$-zU<20)return null;let K=J.index;if(J.jugada||Q.jugando&&Q.turno===K||Q.habla.has(K)||Q.fin&&$-Q.fin.t<6)return J.sed=$+3+Math.random()*8,null;return zU=$,J.trago={t0:$},0}function jU(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var P7=new T,EJ=new T,q$=new T,PQ=new T,AU=new T;function _U(J,$,Q,Z){let K=J.bebida;if(q$.copy(U7).addScaledVector(z7,0.25).normalize(),PQ.copy(U7).multiplyScalar(0.55).addScaledVector(z7,0.8).normalize(),EJ.copy(K.home),EJ.y+=K.alto,EJ.addScaledVector(v8,-(K.radio+0.015)).addScaledVector(q$,-0.03),J.bocaMundo)J.bocaMundo(P7),P7.addScaledVector(U7,0.006);else J.front.getWorldPosition(P7),P7.y-=0.075,P7.addScaledVector(U7,0.012);let W=K.inclina;AU.copy(z7).multiplyScalar(Math.cos(W)).addScaledVector(U7,-Math.sin(W)),P7.addScaledVector(AU,-K.boca).addScaledVector(v8,-(K.radio+0.015)).addScaledVector(PQ,-0.03);let X=J.trago;if(X){if($<G9[2])(X.boca??=new T).copy(P7);else if(X.boca)P7.copy(X.boca)}let Y;if($<G9[0])EK(Q,EJ,0.045,0.5,p8($/G9[0]),Z),Y=q$;else if($<G9[1]){let H=p8(($-G9[0])/(G9[1]-G9[0]));EK(EJ,P7,0.1,0.25,H,Z),Y=q$.lerp(PQ,H).normalize()}else if($<G9[2])Z.copy(P7),Y=PQ;else if($<G9[3]){let H=p8(($-G9[2])/(G9[3]-G9[2]));EK(EJ,P7,0.1,0.25,1-H,Z),Y=PQ.lerp(q$,H).normalize()}else EK(Q,EJ,0.045,0.5,1-p8(($-G9[3])/(G9[4]-G9[3])),Z),Y=q$;return Y}var IQ=new T;function EK(J,$,Q,Z,K,W){IQ.lerpVectors(J,$,Z),IQ.y=Math.max(J.y,$.y*Z+J.y*(1-Z))+Q;let X=1-K;return W.set(X*X*J.x+2*X*K*IQ.x+K*K*$.x,X*X*J.y+2*X*K*IQ.y+K*K*$.y,X*X*J.z+2*X*K*IQ.z+K*K*$.z)}function vR(J){return J<G9[0]?p8(Math.min(1,J/(G9[0]*0.85))):J<G9[3]?1:1-p8(Math.min(1,(J-G9[3])/((G9[4]-G9[3])*0.85)))}var TU=new T,wU=new T,SU=new T;function fR(J,$){let Q=J.bebida,Z=J.brazos[1].mano;if($<G9[0]||$>=G9[3]){jU(Q);return}Z.getWorldQuaternion(A7),Z.getWorldPosition(kK),TU.set(0,0,1).applyQuaternion(A7),wU.set(0,1,0).applyQuaternion(A7);let K=$<G9[1]?p8(($-G9[0])/(G9[1]-G9[0])):$<G9[2]?1:1-p8(($-G9[2])/(G9[3]-G9[2]));Q.group.quaternion.setFromAxisAngle(v8,-Q.inclina*K),SU.set(0,1,0).applyQuaternion(Q.group.quaternion),Q.group.position.copy(kK).addScaledVector(TU,Q.radio+0.015).addScaledVector(wU,0.03).addScaledVector(SU,-Q.alto);let W=Math.min(1,($-G9[0])/0.2,(G9[3]-$)/0.2);if(W<1){let X=p8(Math.max(0,W));Q.group.position.lerpVectors(Q.home,Q.group.position,X),Q.group.quaternion.slerpQuaternions(bR.identity(),Q.group.quaternion,X)}}var bR=new E9;function hR(J,$,Q){let Z=J.cara;if(!Z)return 0;if(J.proxParpadeo==null)J.proxParpadeo=$+1+Math.random()*4;if($>=J.proxParpadeo)J.parpadeoT0=$,J.proxParpadeo=$+(Math.random()<0.15?0.32:2+Math.random()*4);let K=$-(J.parpadeoT0??-9),W=K<0?0:K<0.06?K/0.06:K<0.09?1:K<0.16?1-(K-0.09)/0.07:0;if(J.caraFija){let U=J.caraFija,G=Z.mesh.morphTargetInfluences;if(G)G[Z.iP]=U.p*0.85,G[Z.iS]=U.s;return J.parpadeo=U.p,U.p}let X=J.index,Y=0;if(Q?.fin&&Q.fin.team!=null&&$-Q.fin.t<5&&$>=Q.fin.t)Y=X%2===Q.fin.team?0.95:-0.7;else if(Q?.habla?.has(X))Y=Q.hablaTipo?.get(X)==="win"?0.85:0.2;else{if(J.casual==null)J.casual=$+8+Math.random()*30;if($>J.casual+2.5)J.casual=$+15+Math.random()*45;if($>=J.casual)Y=0.45}J.sonrisa=(J.sonrisa??0)+(Y-(J.sonrisa??0))*(1-Math.exp(-(Q?.dt||0.016)*3.5));let H=Z.mesh.morphTargetInfluences;if(H)H[Z.iP]=W*0.85,H[Z.iS]=J.sonrisa;return J.parpadeo=W,W}function xR(J,$){let Q=J.index,Z=0.23+Q%4*0.012,K=$*Z*Math.PI*2+Q*1.9,W=Math.sin(K);return{b:W>0?W:W*0.7,balanceo:Math.sin($*0.11+Q*2.3)*0.022+Math.sin($*0.29+Q)*0.008,ladeo:Math.sin($*0.07+Q*1.3)*0.014}}var tX=new T,qK=new T,H7=new T,_6=new T,_7=new T,x8=new E9,OK=(J)=>{let $=Math.sin(J*127.1+311.7)*43758.5453;return $-Math.floor($)};function gR(J,$,Q,Z){let K=J.index;if(K>=4||!Q)return Q?.foco&&$-Q.foco.t<2.5?Z.copy(Q.foco.p):Z.set(0,C0.surfaceY,0);if(Q.fin&&$-Q.fin.t<5){if(Q.fin.team!=null&&K%2===Q.fin.team&&Q.cabezas[(K+2)%4])return Z.copy(Q.cabezas[(K+2)%4]);return eX(J,0,C0.surfaceY,C0.seatDistance-C0.rackRadius,Z)}if(J.trago&&J.bebida){let Y=J.trago.fijo??$-J.trago.t0;if(Y<G9[0]+0.1||Y>G9[2]+0.5&&Y<G9[3]+0.1)return Z.copy(J.bebida.home);if(Y<=3.4)return J.head.getWorldPosition(Z),Z.addScaledVector(U7,1).addScaledVector(z7,-0.15)}{let Y=Q.saludo;if(Y&&(Y.seat===K||Y.e<(Y.seat==null?3:1.6)))return Z.copy(Y.p)}if(Q.foco&&$-Q.foco.t<1.4)return Z.copy(Q.foco.p);for(let Y of Q.habla)if(Y!==K&&Q.cabezas[Y])return Z.copy(Q.cabezas[Y]);if(Q.jugando&&Q.turno===K){let Y=Math.floor($/1.3);return eX(J,(OK(Y+K*9)-0.5)*0.12,C0.surfaceY+0.02,C0.seatDistance-C0.rackRadius+0.02,Z)}let W=Math.floor(($+K*1.37)/(2.2+K*0.35)),X=OK(W*4+K);if(Q.jugando&&X<0.45&&Q.cabezas[Q.turno]&&Q.turno!==K)return Z.copy(Q.cabezas[Q.turno]);if(X<0.62&&Q.cabezas[(K+2)%4])return Z.copy(Q.cabezas[(K+2)%4]);if(!Q.jugando&&X<0.85&&Q.cabezas[(K+1+W%2*2)%4])return Z.copy(Q.cabezas[(K+1+W%2*2)%4]);return Z.set((OK(W+7)-0.5)*0.2,C0.surfaceY,(OK(W+3)-0.5)*0.2)}function pR(J,$,Q){let{head:Z,neck:K,front:W}=J;if(!Z||!W)return;if(gR(J,$,Q,tX),!J.mirada||!Q?.dt)J.mirada=(J.mirada||new T).copy(tX);else J.mirada.lerp(tX,1-Math.exp(-Q.dt*5.5));for(let[X,Y]of[[K,0.4],[Z,1]]){if(!X)continue;if(Z.getWorldPosition(qK),W.getWorldPosition(H7),H7.sub(qK),H7.lengthSq()<0.0000000001)return;if(H7.normalize(),_6.subVectors(J.mirada,qK),_6.lengthSq()<0.00000001)return;_6.normalize();let H=OJ(Math.atan2(H7.z*_6.x-H7.x*_6.z,H7.x*_6.x+H7.z*_6.z),-1.25,1.25)*Y;if(X8(X,qJ.setFromAxisAngle(z7,H)),W.getWorldPosition(H7),H7.sub(qK).normalize(),_7.crossVectors(H7,z7),_7.lengthSq()<0.00000001)continue;_7.normalize();let U=OJ(Math.asin(AQ(_6.y))-Math.asin(AQ(H7.y)),-0.75,0.55)*Y;X8(X,qJ.setFromAxisAngle(_7,U))}}var mR=0.23,lR=[["lomo",0.4],["spine",0.34],["chest",0.26]],FD=new E9;function uR(J,$,Q=0){if(!J.spine||!J.spine.parent)return;if(_7.copy(v8),J.hips&&J.lomo)for(let[Z,K]of lR){let W=J[Z];if(!W)continue;X8(W,x8.setFromAxisAngle(_7,$*K))}else X8(J.spine,x8.setFromAxisAngle(_7,$));if(Q)X8(J.spine,x8.setFromAxisAngle(z7,Q))}var RK=new T,LK=new T,zQ=new T,kK=new T;function MK(J,$,Q=!1,Z=null){for(let O of J.pose)O.bone.position.copy(O.position),O.bone.quaternion.copy(O.quaternion),O.bone.scale.copy(O.scale);J.holder.updateMatrixWorld(!0),VR(J);let K=CU(J.index,$,Q);if(J.spine)J.spine.quaternion.multiply(oX.setFromAxisAngle(PU,K.breath));let W=!Q,X=W?xR(J,$):{b:0,balanceo:0,ladeo:0},Y=J.index,H=Y<4&&J.brazos,U=0,G=0;if(H&&Z?.fin&&Z.fin.team!=null){let O=$-Z.fin.t;if(O>=0&&O<5)G=Math.sin(Math.min(1,O/0.5)*Math.PI/2)*(O>4?5-O:1),U+=(Y%2===Z.fin.team?-0.1:0.07)*G}if(H&&Z?.jugando&&Z.turno===Y)U+=0.04;let F=H&&W&&J.front?yR(J,$,Z):null,N=[];if(H)for(let O of J.brazos){let B=IR.copy(PR(J,O,$)),R=O.lado==="Right"?jR(J,$,B):null,E=!!R,P=null;if(!R&&F!=null&&O.lado==="Right")R=BK.set(0,0,0),P=_U(J,F,B,R).clone();if(R=(R||B).clone(),!E&&W&&Z?.habla?.has(Y)&&O.lado==="Left")J.gesto=Math.min(1,(J.gesto||0)+(Z.dt||0)*3);else if(O.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(Z?.dt||1)*2);if(O.lado==="Left"&&J.gesto>0){let k=p8(J.gesto);R.addScaledVector(U7,0.06*k).addScaledVector(v8,-0.07*k),R.y+=0.07*k+Math.sin($*5.2)*0.012*k}if(O.lado==="Right"&&!E&&G&&Y%2===Z.fin.team){let k=$-Z.fin.t;if(k<1.1)R.y+=Math.max(0,Math.sin(Math.min(1,k/0.9)*Math.PI))*0.13}N.push({brazo:O,o:R,jugando:E,dedos:P,reposo:B.clone()})}let q=0;if(H){let O=N.find((B)=>B.jugando);if(O&&O.brazo.brazo){J.holder.worldToLocal(zQ.copy(O.o));let B=Math.hypot(zQ.x,zQ.z-0.12);U+=OJ((B-0.42)/0.55,0,0.34),q=OJ(Math.atan2(zQ.x,zQ.z)*0.3,-0.3,0.3)}}if(uR(J,mR*(J.brazos?1:0.6)+U,q),F!=null){let O=(R,E)=>Math.max(0,1-Math.abs(F-R)/E),B=p8(Math.max(O(G9[0],0.9),O(G9[3],0.9)));if(J.spine)X8(J.spine,x8.setFromAxisAngle(U7,0.16*B))}if(W){if(J.spine)X8(J.spine,x8.setFromAxisAngle(z7,X.balanceo));if(J.spine)X8(J.spine,x8.setFromAxisAngle(U7,X.ladeo));if(J.chest)X8(J.chest,x8.setFromAxisAngle(v8,-0.018*X.b));if(J.hombros){for(let[O,B]of J.hombros)if(B)X8(B,x8.setFromAxisAngle(U7,O*0.03*(X.b+0.3)))}}if(pR(J,$,Z),hR(J,$,Z),J.head)J.head.quaternion.multiply(oX.setFromAxisAngle(z7,K.headYaw*0.5)),J.head.quaternion.multiply(oX.setFromAxisAngle(PU,K.headNod)),J.head.updateMatrixWorld(!0);if(W&&J.head){if(Z?.habla?.has(Y)){let O=0.035*(0.6+0.4*Math.sin($*1.7));X8(J.head,x8.setFromAxisAngle(v8,Math.sin($*6.1)*O*0.5+Math.sin($*3.3)*O*0.5))}if(G&&Y%2!==Z.fin.team){let O=$-Z.fin.t;if(O>0.6&&O<2.6)X8(J.head,x8.setFromAxisAngle(z7,Math.sin((O-0.6)*Math.PI*2.4)*0.16*(2.6-O)/2))}}if(F!=null&&F>G9[1]-0.2&&F<G9[2]+0.2&&J.head){let O=Math.sin(Math.min(1,(F-G9[1]+0.2)/(G9[2]-G9[1]+0.4))*Math.PI);X8(J.head,x8.setFromAxisAngle(v8,-0.3*O))}if(W&&J.reaction&&J.head){let O=$-J.reaction.time;if(O>=0&&O<1.2){let B=Math.sin(O/1.2*Math.PI)*0.035;X8(J.head,x8.setFromAxisAngle(v8,B))}}for(let{brazo:O,o:B,jugando:R,dedos:E,reposo:P}of N){if(E)E.copy(_U(J,F,P,B));let k=O.lado==="Left"?1:-1;O.brazo.getWorldPosition(RK);let V=E?vR(F):0;if(V>0)RK.add(aX(k*0.32,-0.75,-0.6,LK).lerp(aX(k*0.45,-0.85,0.25,BK),V));else RK.add(aX(k*(R?0.55:0.32),-0.75,R?-0.15:-0.6,LK));if(DR(O,B,RK),O.antebrazo.getWorldPosition(I7),O.mano.getWorldPosition(kK),g8.subVectors(kK,I7),g8.y=0,g8.lengthSq()<0.00000001)g8.copy(U7);if(g8.normalize(),g8.addScaledVector(v8,-k*(R?0:0.12)).normalize(),g8.y=R?-0.55:-0.3,O$.set(0,-1,0).addScaledVector(v8,-k*0.22),O.lado==="Left"&&J.gesto>0){let z=p8(J.gesto);O$.lerp(LK.copy(v8).multiplyScalar(-1).add(BK.set(0,0.4,0)),z*0.8),g8.y+=0.4*z}if(E)g8.lerp(E,V).normalize(),O$.lerp(LK.copy(v8).addScaledVector(z7,-0.15),V).normalize();if(MR(O,g8,O$),E)fR(J,F);if(W&&!R&&!E&&O.lado==="Right"&&J.toque&&$-J.toque.t0<0.7){let z=$-J.toque.t0;O.mano.getWorldQuaternion(A7),_7.set(1,0,0).applyQuaternion(A7),X8(O.mano,x8.setFromAxisAngle(_7,-0.5*Math.max(0,Math.sin(z/0.7*Math.PI*4))))}else if(W&&!R&&!E&&O.lado==="Right"&&!(Z?.turno===Y&&Z?.jugando)){let z=4.6+Y*0.9,w=($+Y*1.3)%z;if(w<0.55)O.mano.getWorldQuaternion(A7),_7.set(1,0,0).applyQuaternion(A7),X8(O.mano,x8.setFromAxisAngle(_7,-0.22*Math.max(0,Math.sin(w/0.55*Math.PI*4))))}}J.holder.updateMatrixWorld(!0)}function yU({scene:J,texture:$,mat:Q,box:Z,cylinder:K,random:W,teal:X,wood:Y,storeSign:H}){let U=$((D,L,M)=>{D.fillStyle="#e0d3b4",D.fillRect(0,0,L,M);let c=D.createLinearGradient(0,0,0,M);c.addColorStop(0,"#cac09b18"),c.addColorStop(0.7,"#14382d00"),c.addColorStop(1,"#162d2566"),D.fillStyle=c,D.fillRect(0,0,L,M);for(let b=0;b<7000;b++)D.fillStyle=b%3?"#b4ad8618":"#142d2924",D.fillRect(W()*L,W()*M,1+W()*3,1+W()*2);for(let b=0;b<70;b++){let l=W()*L,r=b<50?M*(0.72+W()*0.28):W()*M,v=5+W()*14;D.fillStyle=b%3?"rgba(160,145,112,.35)":"rgba(120,110,90,.25)",D.beginPath();for(let y=0;y<8;y++){let h=y*Math.PI/4,f=v*(0.6+W()*0.5);D.lineTo(l+Math.cos(h)*f,r+Math.sin(h)*f*0.65)}D.fill()}D.strokeStyle="#1b372e24";for(let b=48;b<M;b+=57)D.beginPath(),D.moveTo(0,b),D.lineTo(L,b),D.stroke()},1024,1024);X.map=U,X.color.set("#f2ecde"),X.needsUpdate=!0,Y.color.set("#bca98a"),Y.roughness=0.84;let G=()=>{H.material.map=$((D,L,M)=>{D.fillStyle="#efe3c4",D.fillRect(0,0,L,M);for(let l=0;l<2600;l++)D.fillStyle=l%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",D.fillRect(W()*L,W()*M,2+W()*14,1+W()*2);let c=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia",b=c==="Shrikhand"?M*0.66:M*0.56;D.font=`${b}px ${c}`,D.textAlign="center",D.textBaseline="middle",D.fillStyle="#c8402f",D.fillText("Colmado La Esquina",L/2+b*0.06,M/2+b*0.1),D.fillStyle="#24518a",D.fillText("Colmado La Esquina",L/2,M/2+b*0.04),D.strokeStyle="#3d938e",D.lineWidth=12,D.strokeRect(6,6,L-12,M-12);for(let l=0;l<1400;l++)D.fillStyle="rgba(239,227,196,.35)",D.fillRect(W()*L,W()*M,1+W()*3,1+W()*2)},2048,162),H.material.emissiveMap=H.material.map,H.material.needsUpdate=!0};H.material=new o0({roughness:0.9,emissive:"#ffffff",emissiveIntensity:0.1}),G(),document.fonts?.load?.("64px Shrikhand").then(G).catch(()=>{});for(let[D,L]of[[-2.7,-3.5],[2.4,-3.3]])Z(D,0.18,L,0.51,0.35,0.4,"#897052"),Z(D+0.05,0.47,L-0.04,0.4,0.23,0.32,"#a68c62");let F=(D,L,M)=>{let c=document.createElement("canvas");c.width=D,c.height=L;let b=new i8(c);b.colorSpace=K8,b.anisotropy=4;let l=()=>{let r=c.getContext("2d"),v=document.fonts?.check?.("64px Shrikhand"),y=document.fonts?.check?.('700 40px "DM Sans"')?'"DM Sans",':"";r.fillStyle="#233a2d",r.fillRect(0,0,D,L);for(let h=0;h<70;h++)r.fillStyle=`rgba(225,225,195,${0.015+W()*0.03})`,r.beginPath(),r.ellipse(W()*D,W()*L,D*(0.04+W()*0.14),L*(0.015+W()*0.045),W()*3,0,Math.PI*2),r.fill();r.textAlign="center",r.textBaseline="middle",r.lineCap="round";for(let[h,f,o,g,a]of M){if(h==="—"){r.strokeStyle="rgba(225,225,195,.45)",r.lineWidth=6,r.beginPath(),r.moveTo(D*0.17,f+3),r.quadraticCurveTo(D/2,f-5,D*0.83,f+1),r.stroke();continue}r.font=g==="titulo"?v?`${o}px Shrikhand`:`bold ${o*0.95}px Georgia`:`${g} ${o}px ${y}sans-serif`;let j=r.measureText(h).width,i=D*0.84;if(r.save(),r.translate(D/2,f),j>i)r.scale(i/j,1);r.fillStyle=a;for(let X0=0;X0<3;X0++)r.globalAlpha=X0?0.4:0.75,r.fillText(h,(W()-0.5)*3,(W()-0.5)*3);r.restore()}for(let h=0;h<D*L/40;h++)r.fillStyle="rgba(35,58,45,.5)",r.fillRect(W()*D,W()*L,1+W()*2,1+W());r.strokeStyle="#9c8c62",r.lineWidth=D*0.04,r.strokeRect(D*0.02,D*0.02,D-D*0.04,L-D*0.04),r.strokeStyle="rgba(60,40,20,.35)",r.lineWidth=4,r.strokeRect(D*0.04,D*0.04,D-D*0.08,L-D*0.08),b.needsUpdate=!0};return l(),Promise.all([document.fonts?.load?.("64px Shrikhand"),document.fonts?.load?.('700 40px "DM Sans"')]).then(l).catch(()=>{}),new o0({roughness:1,map:b,emissive:"#ffffff",emissiveMap:b,emissiveIntensity:0.06})},N="#ece7cc",q="#e9b35a",O="#a9d3dd";{let D=new A0(new V9(0.72,0.69),F(768,736,[["HOY HAY",110,74,"titulo",N],["CAFÉ",262,78,800,N],["HIELO · PAN",388,66,800,"#dcd9b8"],["—",478],["REFRESCOS",572,60,700,O]]));D.position.set(-3.43,1.6,-2.33),D.rotation.z=0.025,J.add(D),Z(-3.43,1.245,-2.315,0.66,0.018,0.05,"#8a7a55"),Z(-3.28,1.262,-2.31,0.06,0.016,0.016,"#efeadb")}{let D=document.documentElement.lang==="en",L=new S9,M=Q("#6b4a2e",0.8);L.position.set(-2,0,-2.1),L.rotation.y=0.5,J.add(L);let l=new A0(new V9(0.56,0.72),F(560,720,[[D?"COMING":"YA",96,92,"titulo",q],[D?"SOON":"VIENE",206,92,"titulo",q],["—",282],[D?"1 vs 1":"1 contra 1",372,80,800,N],[D?"Online":"En línea",478,80,800,N],[D?"your people,":"tu gente,",576,50,600,O],[D?"from anywhere":"de donde sea",636,50,600,O]])),r=new S9;r.rotation.x=-0.2,L.add(r),l.position.set(0,0.44,0.012),r.add(l);{let y=new A0(new j9(0.56,0.72,0.012),M);y.position.set(0,0.44,0),r.add(y)}for(let[y,h,f,o]of[[-0.29,0.42000000000000004,0.035,0.88],[0.29,0.42000000000000004,0.035,0.88],[0,0.8500000000000001,0.62,0.035],[0,0.03,0.62,0.035]]){let g=new A0(new j9(f,o,0.022),M);g.position.set(y,h,0),r.add(g)}let v=new S9;v.position.z=-0.32,v.rotation.x=0.2,L.add(v);for(let y of[-0.27,0.27]){let h=new A0(new j9(0.03,0.8600000000000001,0.02),M);h.position.set(y,0.43000000000000005,-0.02),v.add(h)}L.traverse((y)=>{if(y.isMesh)y.castShadow=!0,y.receiveShadow=!0})}let B=[],R=P8.tope,E=P8.z;Z(-1.12,R+0.11,E+0.24,0.42,0.21,0.31,"#677761"),Z(-1.12,R+0.13,E+0.404,0.34,0.1,0.016,"#414b3d"),Z(-0.38,R+0.02,E+0.26,0.3,0.018,0.22,"#c5b887");for(let[D,L,M]of[[0.7,E+0.21,"#8b7747"],[0.98,E+0.17,"#637751"],[1.29,E+0.22,"#a88b50"]])K(D,R+0.12,L,0.07,0.075,0.25,M,14),K(D,R+0.259,L,0.077,0.077,0.028,"#aaa386",12);Z(0.2,R+0.03,E+0.23,0.4,0.07,0.28,"#6c5838");for(let D=0;D<4;D++){let L=new A0(new B8(1,10,6),Q(D%2?"#bca276":"#a98e61"));L.scale.set(0.055,0.035,0.115),L.position.set(0.07+D*0.085,R+0.09,E+0.24),L.rotation.y=(D-1.5)*0.13,J.add(L)}let P=new h9({transparent:!0,depthWrite:!1,map:$((D,L,M)=>{for(let c=0;c<90;c++)D.fillStyle=c%2?"#152c2110":"#3036230a",D.beginPath(),D.ellipse(L/2+(W()-0.5)*L*0.45,M/2+(W()-0.5)*M*0.45,W()*L*0.24,W()*M*0.18,W()*Math.PI,0,Math.PI*2),D.fill()},256,256)});for(let[D,L,M,c]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let b=new A0(new V9(M,c),P);b.rotation.x=-Math.PI/2,b.position.set(D,0.008,L),J.add(b)}for(let[D,L]of[[-3,-0.9],[3.3,-1.5]]){K(D,0.18,L,0.18,0.13,0.34,"#87553c",14),K(D,0.354,L,0.16,0.16,0.012,"#3f422d",12);let M=new S9;M.position.set(D,0.36,L),J.add(M);for(let c=0;c<7;c++){let b=new UQ;b.moveTo(0,0),b.quadraticCurveTo(-0.09,0.23,0,0.55+W()*0.12),b.quadraticCurveTo(0.09,0.23,0,0);let l=new A0(new GQ(b,5),new o0({color:c%2?"#597d4f":"#3c603e",roughness:1,side:o9}));l.rotation.set(0.3+W()*0.4,c*Math.PI*2/7,0),M.add(l)}B.push(M)}let k=new V9(0.55,1.3,5,9),V=new A0(k,new o0({color:"#b2a27c",roughness:1,side:o9}));V.position.set(-2.85,1.75,-3.05),J.add(V);let z=k.attributes.position,w=z.array.slice();return{update(D){B.forEach((L,M)=>L.rotation.z=Math.sin(D*0.53+M*2.1)*0.015);for(let L=0;L<z.count;L++){let M=w[L*3+1];z.setZ(L,Math.sin(D*1.17+M*3)*0.025*(0.65-M)/1.3)}z.needsUpdate=!0}}}function vU({scene:J,texture:$,mat:Q,box:Z,cylinder:K,staticGeo:W,random:X}){let Y=(S=0,x=0,s=0)=>new T(S,x,s),H=(S,x,s,Y0,t,D0,V0=5000)=>{S.fillStyle=Y0,S.fillRect(0,0,x,s);for(let _0=0;_0<V0;_0++)S.fillStyle=X()>0.5?t:D0,S.fillRect(X()*x,X()*s,1+X()*4,1+X()*3)},U=[];function G(S,{w:x=1024,h:s=256,fondo:Y0="#efe3c4",tinta:t="#24518a",sombra:D0="#c8402f",borde:V0=null,px:_0=0.62}={}){let B0=document.createElement("canvas");B0.width=x,B0.height=s;let u0=new i8(B0);u0.colorSpace=K8;let K9=()=>{let t0=B0.getContext("2d"),W9=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia";if(Y0){t0.fillStyle=Y0,t0.fillRect(0,0,x,s);for(let x9=0;x9<x*1.2;x9++)t0.fillStyle=x9%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",t0.fillRect(Math.random()*x,Math.random()*s,2+Math.random()*12,1+Math.random()*2)}else t0.clearRect(0,0,x,s);let D9=s*_0;t0.font=`${D9}px ${W9}`;let L9=t0.measureText(S).width;if(L9>x*0.9)D9*=x*0.9/L9,t0.font=`${D9}px ${W9}`;t0.textAlign="center",t0.textBaseline="middle";let p=D9*0.06;if(D0)t0.fillStyle=D0,t0.fillText(S,x/2+p,s/2+p+D9*0.04);if(t0.fillStyle=t,t0.fillText(S,x/2,s/2+D9*0.04),V0)t0.strokeStyle=V0,t0.lineWidth=s*0.07,t0.strokeRect(t0.lineWidth/2,t0.lineWidth/2,x-t0.lineWidth,s-t0.lineWidth);for(let x9=0;x9<x*0.5;x9++)t0.fillStyle=Y0?"rgba(239,227,196,.3)":"rgba(0,0,0,0)",t0.fillRect(Math.random()*x,Math.random()*s,1+Math.random()*3,1+Math.random()*2);u0.needsUpdate=!0};return K9(),U.push(K9),u0}document.fonts?.load?.("64px Shrikhand").then(()=>U.forEach((S)=>S())).catch(()=>{});let F=new o0({roughness:0.93,map:$((S,x,s)=>{H(S,x,s,"#e3d6b8","rgba(255,250,236,.10)","rgba(120,100,70,.08)");let Y0=S.createLinearGradient(0,0,0,s);Y0.addColorStop(0,"rgba(90,70,50,.12)"),Y0.addColorStop(0.18,"rgba(90,70,50,0)"),Y0.addColorStop(0.8,"rgba(90,70,50,0)"),Y0.addColorStop(1,"rgba(90,70,50,.2)"),S.fillStyle=Y0,S.fillRect(0,0,x,s);for(let t=0;t<22;t++){let D0=X()*x,V0=s*(0.08+X()*0.3),_0=S.createLinearGradient(0,0,0,V0);_0.addColorStop(0,"rgba(80,70,55,.2)"),_0.addColorStop(1,"rgba(80,70,55,0)"),S.fillStyle=_0,S.fillRect(D0,0,3+X()*8,V0)}},512,512)}),N=new o0({roughness:0.9,map:$((S,x,s)=>{H(S,x,s,"#3f9a96","rgba(200,240,230,.10)","rgba(20,50,50,.10)");for(let Y0=0;Y0<50;Y0++)S.fillStyle="rgba(225,218,195,.55)",S.beginPath(),S.ellipse(X()*x,X()*s,2+X()*9,1+X()*5,X()*3,0,Math.PI*2),S.fill()},256,256)});Z(-3.48,0.625,-2.355,0.702,1.25,0.012,N),Z(3.45,0.625,-2.355,0.802,1.25,0.012,N),Z(-3.906,0.625,-3.85,0.012,1.25,2.72,N),Z(3.906,0.625,-3.85,0.012,1.25,2.72,N);let q=22,O="#3d8a5c",B="#e8dfc8",R=$((S,x,s)=>{for(let t=0;t<q;t++)S.fillStyle=t%2?B:O,S.fillRect(t*x/q,0,Math.ceil(x/q),s);for(let t=0;t<2500;t++)S.fillStyle=X()>0.5?"rgba(255,250,235,.06)":"rgba(20,30,20,.07)",S.fillRect(X()*x,X()*s,2,2);let Y0=S.createLinearGradient(0,0,0,s);Y0.addColorStop(0,"rgba(0,0,0,.14)"),Y0.addColorStop(1,"rgba(40,30,20,0)"),S.fillStyle=Y0,S.fillRect(0,0,x,s)},1024,128);W(new V9(7.3,0.86),new o0({map:R,roughness:0.95,side:o9}),[0,2.59,-1.955],[-1.237,0,0]);let E=$((S,x,s)=>{let Y0=x/q;for(let t=0;t<q;t++)S.fillStyle=t%2?B:O,S.fillRect(t*Y0,0,Math.ceil(Y0),s*0.5),S.beginPath(),S.arc(t*Y0+Y0/2,s*0.5,Y0/2-0.5,0,Math.PI),S.fill()},1024,64);W(new V9(7.3,0.2),new o0({map:E,roughness:0.95,side:o9,alphaTest:0.5}),[0,2.35,-1.548]);{let S=new o0({roughness:0.8,map:$((s,Y0,t)=>{s.fillStyle="#2a3332",s.fillRect(0,0,Y0,t);let D0=s.createLinearGradient(0,0,0,t);D0.addColorStop(0,"#cfe8e0"),D0.addColorStop(1,"#8fb3aa"),s.fillStyle=D0,s.fillRect(14,14,Y0-28,t-28),s.strokeStyle="#1f2525",s.lineWidth=7;for(let V0=30;V0<Y0-20;V0+=26)s.beginPath(),s.moveTo(V0,14),s.lineTo(V0,t-14),s.stroke();for(let V0 of[t*0.33,t*0.66])s.beginPath(),s.moveTo(14,V0),s.lineTo(Y0-14,V0),s.stroke();s.strokeStyle="#e8e0cc",s.lineWidth=12,s.strokeRect(6,6,Y0-12,t-12)},256,256),emissive:"#ffffff",emissiveIntensity:0.12});S.emissiveMap=S.map,W(new V9(1.1,1),S,[3.915,1.75,-4.3],[0,Math.PI/2,0]);let x=new A0(new V9(2.2,0.36),new o0({map:G("Víveres · Bebidas · Hielo",{w:1536,h:252,fondo:null,tinta:"#24518a",sombra:"#c8402f"}),transparent:!0,roughness:0.9}));x.position.set(3.915,2.55,-3.75),x.rotation.y=Math.PI/2,J.add(x)}let P=3.3,k=2.75,V=-2.7,z=P+k;Z(0,P+k/2,-5.2,8.2,k,0.2,F),Z(-4,P+k/2,-3.95,0.2,k,2.7,F),Z(4,P+k/2,-3.95,0.2,k,2.7,F),Z(0,P+k/2,V,8.2,k,0.2,F),Z(0,z-0.08,-3.95,8.44,0.16,2.95,"#d3c9b0"),Z(0,P+0.06,V+0.12,8.3,0.1,0.06,"#3d938e");let w=new o0({roughness:0.7,map:$((S,x,s)=>{S.fillStyle="#2d3a3a",S.fillRect(0,0,x,s);let Y0=15,t=(s-24)/Y0;for(let D0=0;D0<Y0;D0++){let V0=12+D0*t;S.fillStyle="#7aa39d",S.fillRect(12,V0,x-24,t*0.72),S.fillStyle="rgba(0,0,0,.25)",S.fillRect(12,V0+t*0.62,x-24,t*0.1)}S.strokeStyle="#e8e0cc",S.lineWidth=12,S.strokeRect(6,6,x-12,s-12)},256,256)});W(new V9(1.2,1.25),w,[-2.5,4.6,V+0.107]);let D=new o0({roughness:0.7,map:w.map,emissive:"#8fb0ff",emissiveMap:w.map,emissiveIntensity:0.25}),L=new A0(new V9(1.2,1.25),D);L.position.set(2.5,4.6,V+0.107),J.add(L);let M=new o0({roughness:0.8,emissive:"#ffffff",emissiveIntensity:0.55,map:$((S,x,s)=>{let Y0=S.createLinearGradient(0,0,0,s);Y0.addColorStop(0,"#f0c27f"),Y0.addColorStop(1,"#b87a44"),S.fillStyle=Y0,S.fillRect(0,0,x,s),S.strokeStyle="#1d2222",S.lineWidth=6;for(let t=18;t<x;t+=22)S.beginPath(),S.moveTo(t,0),S.lineTo(t,s),S.stroke();for(let t=s*0.2;t<s;t+=s*0.2)S.beginPath(),S.moveTo(0,t),S.lineTo(x,t),S.stroke();S.lineWidth=5;for(let t=0;t<4;t++)S.beginPath(),S.arc(x/2,s*0.1+t*s*0.2,18,0,Math.PI*2),S.stroke();S.strokeStyle="#e8e0cc",S.lineWidth=14,S.strokeRect(7,7,x-14,s-14)},128,256)});M.emissiveMap=M.map,W(new V9(1,2.1),M,[0,P+1.08,V+0.107]);let c="#262c2b";for(let S of[3.38,4.22])Z(0,S,-1.56,8,0.04,0.04,c);for(let S=-3.94;S<=3.95;S+=0.14)Z(S,3.8,-1.56,0.018,0.84,0.018,c);for(let S of[-3.97,3.97]){for(let x of[3.38,4.22])Z(S,x,-2.08,0.04,0.04,1.04,c);for(let x=-2.55;x<=-1.6;x+=0.14)Z(S,3.8,x,0.018,0.84,0.018,c)}for(let[S,x]of[[-3.3,-1.8],[3.25,-1.85],[1.5,-1.78]]){K(S,3.46,x,0.13,0.1,0.24,"#9a5a3c",12);for(let s=0;s<4;s++)W(new B8(1,8,6),Q(s%2?"#5b7f4f":"#44663e",0.95),[S+(s-1.5)*0.06,3.66+s%2*0.05,x+(s%3-1)*0.04],[0,0,0],[0.12,0.14,0.1])}K(2.5,z+0.52,-4.3,0.5,0.55,1,"#1f2322",18),K(2.5,z+1.06,-4.3,0.2,0.22,0.08,"#2b302f",12),K(-1.8,z+0.35,-4.6,0.035,0.035,0.7,"#8d8f89",8);for(let[S,x]of[[-3.95,-2.75],[3.95,-2.75],[-3.95,-5.15],[3.95,-5.15]])for(let[s,Y0]of[[-0.05,-0.05],[0.05,-0.05],[-0.05,0.05],[0.05,0.05]])K(S+s,z+0.42,x+Y0,0.007,0.007,0.84,"#6b4a35",4);let b=Q("#8a6a48",0.8),l=Q("#4f7f55",0.85);for(let S of[0.55,1,1.45,1.9,2.35,2.8])Z(-3.53,S,-3.85,0.34,0.04,2.2,l);for(let S of[-4.94,-2.76])Z(-3.53,1.65,S,0.34,2.3,0.04,l);let r=$((S,x,s)=>{S.fillStyle="#bdbdbd",S.fillRect(0,0,x,s),S.fillStyle="#ffffff",S.fillRect(0,s*0.34,x,s*0.34),S.fillStyle="#6a6a6a",S.fillRect(0,s*0.33,x,s*0.02),S.fillRect(0,s*0.67,x,s*0.02)},64,64),v=new o0({map:r,roughness:0.62}),y=["#c8402f","#e3ae55","#f3eee3","#2f6fa8","#3f8a5a","#e07a2e","#d65a7a","#f1d24a","#6fb7c9","#8a3b3b","#ffffff","#1f5f9e"],h=[],f=[],o=(S,x,s,Y0,t,D0)=>{let V0=S;while(V0<x){let _0=0.07+X()*0.12,B0=0.12+X()*0.17,u0=Math.min(t,0.1+X()*0.12),K9=X()<0.35,t0=new b0(y[Math.floor(X()*y.length)]).multiplyScalar(0.7+X()*0.22);if(V0+_0>x)break;let W9=D0==="x"?Y(V0+_0/2,s+B0/2,Y0):Y(Y0,s+B0/2,V0+_0/2);(K9?f:h).push({pos:W9,s:K9?Y(_0*0.85,B0*0.8,_0*0.85):D0==="x"?Y(_0,B0,u0):Y(u0,B0,_0),col:t0}),V0+=_0+0.012}};for(let S of[1.6125,2.5725])o(-3.4,2.2,S,-4.8,0.3,"x");for(let S of[0.57,1.02,1.47,1.92,2.37,2.82])o(-4.9,-2.8,S,-3.55,0.28,"z");for(let[S,x]of[[new j9(1,1,1),h],[new C9(0.5,0.5,1,10),f]]){let s=new h7(S,v,x.length),Y0=new v9;x.forEach((t,D0)=>{Y0.position.copy(t.pos),Y0.scale.copy(t.s),Y0.rotation.set(0,(X()-0.5)*0.12,0),Y0.updateMatrix(),s.setMatrixAt(D0,Y0.matrix),s.setColorAt(D0,t.col)}),s.frustumCulled=!1,J.add(s)}{let x=Math.round(1024*(P8.tope-0.1)/P8.ancho),s=[[0.05,0.47],[0.53,0.95]],Y0=(B0,u0)=>{if(B0.fillStyle=u0?"#000":"#5b3b24",B0.fillRect(0,0,1024,x),!u0){for(let K9=0;K9<500;K9++)B0.fillStyle=K9%2?"rgba(150,100,60,.25)":"rgba(30,18,10,.25)",B0.fillRect(Math.random()*1024,Math.random()*x,20+Math.random()*80,1+Math.random()*2);B0.fillStyle="#3a2616",B0.fillRect(0,x*0.88,1024,x*0.12)}for(let[K9,t0]of s){let W9=K9*1024,D9=t0*1024,L9=x*0.12,p=x*0.82;B0.fillStyle=u0?"#6e6a60":"#d9d3c1",B0.fillRect(W9,L9,D9-W9,p-L9);for(let x9=0;x9<2;x9++){let z9=L9+(x9+0.5)*(p-L9)/2;B0.fillStyle=u0?"#6f6a60":"#b9b3a2",B0.fillRect(W9,z9+(p-L9)*0.2,D9-W9,4);let A9=z9+(p-L9)*0.2;B0.globalAlpha=u0?0.7:1;for(let _=W9+10;_<D9-60;){let C=Math.random()<0.3,m=y[Math.floor(Math.random()*y.length)];if(C){let $0=18+Math.random()*6;B0.fillStyle=u0?"#9a9a9a":"rgba(235,240,240,.9)",B0.fillRect(_,A9-$0*2.4,$0*2,$0*2.4),B0.fillStyle=m;for(let L0=0;L0<7;L0++)B0.beginPath(),B0.arc(_+5+Math.random()*($0*2-10),A9-6-Math.random()*$0*1.8,5,0,Math.PI*2),B0.fill();B0.fillStyle="#c8402f",B0.fillRect(_-2,A9-$0*2.4-8,$0*2+4,9),_+=$0*2+8}else{let $0=46+Math.random()*34,L0=(p-L9)*(0.2+Math.random()*0.1);B0.fillStyle=m,B0.beginPath(),B0.moveTo(_,A9),B0.lineTo(_+3,A9-L0);for(let P0=0;P0<=6;P0++)B0.lineTo(_+3+P0*($0-6)/6,A9-L0-(P0%2?5:0));B0.lineTo(_+$0,A9),B0.closePath(),B0.fill(),B0.fillStyle="rgba(255,255,255,.7)",B0.fillRect(_+$0*0.2,A9-L0*0.62,$0*0.6,L0*0.22),B0.fillStyle="rgba(255,255,255,.25)",B0.fillRect(_+4,A9-L0+8,5,L0-14),_+=$0+5}}B0.globalAlpha=1}if(!u0)B0.fillStyle="rgba(255,255,255,.22)",B0.beginPath(),B0.moveTo(W9+20,L9),B0.lineTo(W9+70,L9),B0.lineTo(W9+20,p),B0.lineTo(W9-10+20,p),B0.fill(),B0.strokeStyle="#3a2616",B0.lineWidth=10,B0.strokeRect(W9,L9,D9-W9,p-L9)}},t=(B0)=>$((u0)=>Y0(u0,B0),1024,x),D0=new o0({map:t(!1),emissive:"#fff4de",emissiveMap:t(!0),emissiveIntensity:0.2,roughness:0.55}),V0=P8.tope-0.1,_0=new A0(new V9(P8.ancho,V0),D0);_0.position.set(0,V0/2,P8.z+P8.fondo/2+0.006),J.add(_0)}let g=$((S,x,s)=>{let t=s/7;S.fillStyle="#8a7a5a",S.fillRect(x/2-2,0,4,s);for(let D0=0;D0<7;D0++){let V0=D0*t+4;S.fillStyle=y[(D0*5+3)%y.length],S.fillRect(6,V0,x-12,t-8),S.fillStyle="rgba(255,255,255,.3)",S.fillRect(10,V0+6,x*0.16,t-20),S.fillStyle="rgba(255,255,255,.75)",S.fillRect(x*0.3,V0+t*0.36,x*0.4,t*0.16)}},64,448),a=new o0({map:g,roughness:0.45,alphaTest:0.5,side:o9});for(let S of[-1.74,-1.52,1.52,1.74])W(new V9(0.15,0.86),a,[S,2.66,-3.86],[0,(X()-0.5)*0.5,0]);let j=new A0(new V9(0.8,1.5),new h9({color:new b0(1.05,1.08,1.1),map:$((S,x,s)=>{S.fillStyle="#dcecef",S.fillRect(0,0,x,s);let Y0=5;for(let D0=0;D0<Y0;D0++){let V0=s/Y0,_0=D0*V0;S.fillStyle="rgba(140,160,165,.9)",S.fillRect(0,_0+V0*0.88,x,5);for(let B0=0;B0<8;B0++){let u0=(x-20)/8,K9=10+B0*u0;S.fillStyle=["#c8402f","#2c7a3f","#e3ae55","#7a3a1c","#2f6fa8","#f3eee3","#e07a2e"][(B0+D0*3)%7],S.fillRect(K9+u0*0.15,_0+V0*0.3,u0*0.7,V0*0.56),S.fillRect(K9+u0*0.36,_0+V0*0.12,u0*0.28,V0*0.2)}}let t=S.createLinearGradient(0,0,x,0);t.addColorStop(0,"rgba(255,255,255,.3)"),t.addColorStop(0.35,"rgba(255,255,255,0)"),S.fillStyle=t,S.fillRect(0,0,x,s),S.strokeStyle="#9aa8aa",S.lineWidth=10,S.strokeRect(0,0,x,s)},256,480)}));j.position.set(2.95,1.12,-4.09),J.add(j);let i=new A0(new V9(0.9,0.2),new h9({map:G("Bien fría",{w:720,h:160,fondo:"#b8372b",tinta:"#f3eee3",sombra:null,px:0.62}),color:new b0(1.1,1.1,1.1)}));i.position.set(2.95,2.17,-4.14),J.add(i),Z(2.45,0.4,-1.86,1,0.8,0.6,"#e7ebe8"),Z(2.45,0.83,-1.86,1.04,0.06,0.64,"#d4dad8"),Z(2.45,0.12,-1.555,0.96,0.1,0.012,"#b9c0bd");{let S=new A0(new V9(0.62,0.19),new o0({map:G("HIELO",{w:640,h:196,fondo:null,tinta:"#1f5f9e",sombra:"#c8402f",px:0.7}),transparent:!0,roughness:0.8}));S.position.set(2.45,0.55,-1.553),J.add(S)}{let S=Q("#2d63a8",0.5),x=new o0({color:"#8cc0e6",roughness:0.12,transparent:!0,opacity:0.84});for(let t=0;t<2;t++)for(let D0=0;D0<3;D0++){let V0=3.15+t*0.4,_0=0.21+D0*0.4;W(new C9(0.155,0.155,0.4,16),x,[V0,_0,-2],[Math.PI/2,0,0]),W(new C9(0.05,0.05,0.1,10),x,[V0,_0,-2.25],[Math.PI/2,0,0])}for(let t of[0,0.4,0.8,1.2])Z(3.35,t+0.012,-2,0.84,0.024,0.46,S);for(let t of[2.94,3.35,3.7600000000000002])Z(t,0.61,-2,0.03,1.22,0.46,S)}let X0=(S,x,s,Y0,t)=>{let D0=Q(t,0.5),V0=(_0,B0,u0,K9,t0=0)=>{_0.rotateX(t0);let W9=Y(B0,u0,K9).applyAxisAngle(Y(0,1,0),Y0);W(_0,D0,[S+W9.x,x+W9.y,s+W9.z],[0,Y0,0])};V0(new y8(0.46,0.035,0.43,2,0.015),0,0.43,0),V0(new y8(0.44,0.42,0.03,2,0.012),0,0.71,-0.22,-0.16);for(let _0 of[-0.2,0.2])V0(new C9(0.018,0.024,0.43,6),_0,0.215,0.17,0.12),V0(new C9(0.018,0.024,0.45,6),_0,0.22,-0.19,-0.14),V0(new j9(0.03,0.18,0.3),_0*1.1,0.54,-0.02)};for(let S=0;S<4;S++)X0(-3.42,S*0.075,-1.32-S*0.012,0.3,"#ecece6");X0(3.55,0,0.55,-1.9,"#ecece6");{let Y0=(B0,u0,K9,t0,W9,D9=0,L9=0)=>{B0.rotateX(D9),B0.rotateZ(L9);let p=Y(K9,t0,W9).applyAxisAngle(Y(0,1,0),0.3);W(B0,u0,[-3.25+p.x,p.y,2.85+p.z],[0,0.3,0])},t=Q("#171b1b",0.8),D0=Q("#9aa3a0",0.35,0.6),V0=Q("#a8382c",0.45,0.1),_0=Q("#1e2222",0.7);for(let B0 of[-0.52,0.5])Y0(new x7(0.26,0.055,8,18),t,B0,0.3,0),Y0(new C9(0.09,0.09,0.08,10),D0,B0,0.3,0,Math.PI/2);Y0(new y8(0.6,0.22,0.24,2,0.05),V0,-0.02,0.53,0,0,-0.08),Y0(new y8(0.55,0.08,0.26,2,0.03),_0,-0.28,0.68,0),Y0(new y8(0.28,0.34,0.2,2,0.05),V0,0.37,0.64,0,0,-0.35),Y0(new C9(0.018,0.018,0.62,6),D0,0.44,0.92,0,Math.PI/2),Y0(new C9(0.02,0.02,0.62,6),D0,0.47,0.6,0,0,0.35),Y0(new C9(0.03,0.035,0.45,8),D0,-0.35,0.3,0.13,0,Math.PI/2+0.1),Y0(new y8(0.3,0.03,0.22,1,0.01),D0,-0.6,0.73,0)}for(let S=-9;S<4.4;S+=2)Z(S+0.5,-0.074,3.45,1,0.152,0.202,"#d6b24e");Z(8.3,-0.2,-4.575,7.4,0.1,15.85,"#2b3133"),Z(4.6,-0.075,-4.575,0.2,0.15,15.85,"#a8a391"),Z(12.3,-0.07,-4.575,1.2,0.16,15.85,"#8a8578");for(let S=-11;S<3;S+=1.8)Z(8.3,-0.146,S,0.06,0.008,0.7,"#b9ad83");{let S=new o0({color:"#ffd08a",emissive:"#ffb35a",emissiveIntensity:2.2}),x=Q("#2a3436",0.8),s=["#d8a25a","#8fb8a8","#e0d2b0","#c9897d","#b9c47a"],Y0=-12,t=0;while(Y0<2.4){let D0=3+X()*1.6,V0=3+X()*2.6,_0=s[t++%s.length];Z(14.4,V0/2,Y0+D0/2,3,V0,D0,_0),Z(14.4,V0+0.08,Y0+D0/2,3.1,0.16,D0+0.1,"#ddd4bf");let B0=Math.max(1,Math.floor(D0/1.5));for(let u0=0;u0<B0;u0++){let K9=Y0+(u0+0.5)*D0/B0;if(W(new V9(0.75,0.95),X()<0.4?S:x,[12.885,1.55,K9],[0,-Math.PI/2,0]),V0>4.2)W(new V9(0.7,0.8),X()<0.35?S:x,[12.885,V0-1.1,K9],[0,-Math.PI/2,0])}Y0+=D0+0.15}}{let S=new o0({roughness:0.6,metalness:0.3,map:$((s,Y0,t)=>{s.fillStyle="#8f9a94",s.fillRect(0,0,Y0,t);for(let D0=0;D0<t;D0+=8)s.fillStyle="rgba(40,45,44,.35)",s.fillRect(0,D0,Y0,2),s.fillStyle="rgba(230,235,230,.18)",s.fillRect(0,D0+3,Y0,2);for(let D0=0;D0<40;D0++)s.fillStyle="rgba(120,70,40,.18)",s.fillRect(X()*Y0,X()*t,4+X()*20,2+X()*10)},256,256)});W(new V9(2.3,2.1),S,[-7,1.05,-1.365]),Z(-7,2.2,-1.33,2.45,0.2,0.1,"#6d7571");let x=new A0(new V9(1.7,0.42),new o0({map:G("Banca La Suerte",{w:1024,h:252,fondo:"#2f7a4d",tinta:"#f3eee3",sombra:"#1b2c22",borde:"#e3ae55",px:0.52}),roughness:0.85,emissive:"#ffffff",emissiveIntensity:0.08}));x.material.emissiveMap=x.material.map,x.position.set(-10.5,2.72,-1.36),J.add(x)}let K0=Y(4.3,0,3);K(K0.x,3.9,K0.z,0.11,0.16,7.8,"#8e8a80",10),Z(K0.x,7.25,K0.z,0.1,0.1,1.7,"#5c574c"),K(K0.x+0.28,6.3,K0.z,0.2,0.2,0.62,"#6d7470",12);let H0=(S,x,s,Y0="#141819",t=0.011)=>{let D0=S.clone().lerp(x,0.5);D0.y-=s*2,W(new b8(new o8(S,D0,x),22,t,4,!1),Q(Y0),[0,0,0])};for(let S of[-0.6,0,0.6])H0(Y(K0.x,7.3,K0.z+S),Y(6,6.6,9.2+S*0.4),0.25);for(let S of[-0.5,0.5])H0(Y(K0.x,7.3,K0.z+S),Y(-5,4.2,-1+S*0.6),0.55);H0(Y(K0.x,6.4,K0.z),Y(3.95,5.7,-2.72),0.35),H0(Y(K0.x,6.2,K0.z),Y(3.95,5.5,-2.72),0.5,"#1d2121",0.008),H0(Y(K0.x,5.9,K0.z),Y(4.35,5.4,-9),0.4,"#1d2121",0.009),H0(Y(K0.x,5.7,K0.z),Y(4.35,5.2,-9),0.6,"#20241f",0.007);{let S=new J6(Array.from({length:14},(x,s)=>{let Y0=s/13*Math.PI*4;return Y(K0.x+0.16+Math.cos(Y0)*0.14,5.2-s*0.018+Math.sin(Y0)*0.14,K0.z+Math.sin(Y0)*0.05)}));W(new b8(S,60,0.008,4,!1),Q("#141819"),[0,0,0])}let Z0=0;return{update(S){if(S>Z0)Z0=S+0.25+Math.random()*1.4,D.emissiveIntensity=0.12+Math.random()*0.45,D.emissive.setHSL(0.58+Math.random()*0.08,0.5,0.55+Math.random()*0.2)}}}function fU({scene:J,random:$=Math.random}){let Q=$,Z=[],K=[],W=[],X=new b0,Y=(y,h,f=Z)=>{X.set(h);let o=y.attributes.position.count,g=new Float32Array(o*3);for(let a=0;a<o;a++)g[a*3]=X.r,g[a*3+1]=X.g,g[a*3+2]=X.b;return y.setAttribute("color",new r9(g,3)),y.deleteAttribute("uv"),f.push(y),y},H=(y,h,f,o,g,a,j,i=0,X0)=>{let K0=new j9(o,g,a);if(i)K0.rotateY(i);return K0.translate(y,h,f),Y(K0,j,X0)},U=(y,h,f,o,g,a,j=8)=>{let i=new C9(o,o,g,j);return i.translate(y,h,f),Y(i,a)},G=(y,h,f,o,g,a,j,i)=>{let X0=new V9(o,g);return X0.rotateY(a),X0.translate(y,h,f),Y(X0,j,i)},F=(y)=>y[Math.floor(Q()*y.length)],N=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0","#b7a4c9","#e0a58f","#9ec3b0"],q=["#9a968c","#8d8a80","#a39d90"],O="#8a8578",B="#a8a391",R="#2b3133",E="#b9ad83",P="#1b2224",k="#232c2e",V=(y)=>"#"+new b0(y).multiplyScalar(0.85).getHexString();function z(y,h,f,o,g,a,{lejos:j=!1}={}){let X0=a*2.9+0.3,K0=Q()<0.18?F(q):V(F(N)),H0=new T(Math.sin(f),0,Math.cos(f)),Z0=new T(H0.z,0,-H0.x),S=(t,D0,V0)=>new T(y,D0,h).addScaledVector(Z0,t).addScaledVector(H0,V0),x=S(0,X0/2,-g/2);H(x.x,x.y,x.z,o,X0,g,K0,f);let s=S(0,X0+0.09,-g/2);H(s.x,s.y,s.z,o+0.12,0.18,g+0.12,"#d9d2bf",f);let Y0=Math.max(1,Math.floor(o/1.6));for(let t=0;t<a;t++)for(let D0=0;D0<Y0;D0++){let V0=-o/2+(D0+0.5)*o/Y0,_0=t*2.9+1.55,B0=S(V0,_0,j?0.04:0.012),u0=Q()<(j?0.3:0.38);if(t===0&&D0===Math.floor(Y0/2)&&!j){let K9=S(V0,1.05,0.012);G(K9.x,K9.y,K9.z,0.95,2.1,f,Q()<0.3?"#7c8680":"#232c2e");continue}if(u0)G(B0.x,B0.y,B0.z,0.72,0.9,f,Q()<0.22?"#9fc3ff":F(["#ffd08a","#ffc27a","#ffe0a8"]),K);else G(B0.x,B0.y,B0.z,0.72,0.9,f,"#232c2e")}if(j){w(S,X0,o,g);return}if(Q()<0.5){let t=S(0,0.5,0.55);H(t.x,1,t.z,o-0.1,0.05,0.05,"#1b2224",f);for(let V0 of[-0.5,-0.25,0,0.25,0.5]){let _0=S(V0*(o-0.1),0.5,0.55);H(_0.x,0.5,_0.z,0.05,1,0.05,"#1b2224",f)}let D0=S(0,2.75,0.6);H(D0.x,D0.y,D0.z,o,0.12,1.2,"#cfc6b2",f)}if(a>1&&Q()<0.6){let t=S(0,2.9499999999999997,0.45);H(t.x,t.y,t.z,o*0.7,0.12,0.9,"#cfc6b2",f);let D0=S(0,3.45,0.88);H(D0.x,D0.y,D0.z,o*0.7,0.05,0.05,"#1b2224",f);for(let V0=0;V0<=6;V0++){let _0=S((V0/6-0.5)*o*0.7,3.23,0.88);H(_0.x,_0.y,_0.z,0.03,0.5,0.03,"#1b2224",f)}}w(S,X0,o,g)}function w(y,h,f,o){if(Q()<0.45){let g=y((Q()-0.5)*f*0.5,h+0.7,-o*(0.3+Q()*0.4));U(g.x,g.y,g.z,0.55,1.1,"#1f2324",10)}if(Q()<0.22)for(let g=0;g<4;g++){let a=y((g%2-0.5)*(f-0.4),h+0.5,-(g<2?0.3:o-0.3));H(a.x,a.y,a.z,0.04,1+Q()*0.4,0.04,"#5a4a3c")}if(Q()<0.15){let g=y(f*0.3,h+1.1,-o*0.5);H(g.x,g.y,g.z,0.03,2,0.03,"#3a3f40"),H(g.x,g.y+0.6,g.z,0.9,0.03,0.03,"#3a3f40")}}function D({eje:y,desde:h,hasta:f,fachada:o,ry:g,fondo:a=[6,9],pisos:j=[1,3]}){let i=h;while(i<f-2){let X0=Math.min(3.4+Q()*3.4,f-i),K0=i+X0/2,H0=o+(Q()-0.5)*0.5,Z0=j[0]+Math.floor(Q()*(j[1]-j[0]+1));if(y==="x")z(K0,H0,g,X0,a[0]+Q()*(a[1]-a[0]),Z0);else z(H0,K0,g,X0,a[0]+Q()*(a[1]-a[0]),Z0);i+=X0+0.12+(Q()<0.12?0.9+Q()*1.5:0)}}{let y=new V9(460,460);y.rotateX(-Math.PI/2),y.translate(0,-0.26,0),Y(y,"#35363a")}for(let[y,h]of[[-86,-20],[20,86]]){let f=(y+h)/2,o=h-y;H(f,-0.2,6.05,o,0.1,5.4,"#2b3133"),H(f,0.08,9.6,o,0.16,1.8,"#8a8578");for(let g=y+1;g<h;g+=3.6)H(g,-0.146,6.3,1.4,0.008,0.1,"#b9ad83")}H(-51,-0.1,0.97,70,0.2,4.76,"#8a8578"),H(-51,-0.075,3.45,70,0.15,0.2,"#a8a391"),H(49.45,-0.1,2.18,73.1,0.2,2.36,"#8a8578"),H(49.45,-0.075,3.45,73.1,0.15,0.2,"#a8a391"),D({eje:"x",desde:-84,hasta:-20.3,fachada:10.6,ry:Math.PI}),D({eje:"x",desde:20.3,hasta:84,fachada:10.6,ry:Math.PI}),D({eje:"x",desde:-84,hasta:-22.8,fachada:-1.4,ry:0}),D({eje:"x",desde:16.1,hasta:84,fachada:1,ry:0}),H(8.3,-0.2,-49.25,7.4,0.1,73.5,"#2b3133"),H(4.25,-0.1,-49.25,0.7,0.2,73.5,"#8a8578"),H(12.3,-0.07,-49.25,1.2,0.16,73.5,"#8a8578");for(let y=-13;y>-85;y-=3.6)H(8.3,-0.146,y,0.1,0.008,1.4,"#b9ad83");D({eje:"z",desde:-84,hasta:-5.5,fachada:3.9,ry:Math.PI/2,fondo:[7,9]}),D({eje:"z",desde:-84,hasta:-12.2,fachada:12.9,ry:-Math.PI/2,fondo:[7,9]});let L=(y,h,f)=>{let o=y.clone().lerp(h,0.5);o.y-=f*2;let g=new b8(new o8(y,o,h),14,0.014,3,!1);Y(g,"#101517")},M=(y,h)=>{U(y,3.5,h,0.1,7,"#6b6457",6),H(y,6.6,h,1.6,0.08,0.08,"#4f4a40")},c=(y,h,f)=>{H(y+f.x*0.55,6,h+f.z*0.55,Math.abs(f.x)?1.1:0.06,0.06,Math.abs(f.z)?1.1:0.06,"#4f4a40");let o=new B8(0.16,8,6);o.translate(y+f.x*1.1,5.9,h+f.z*1.1),Y(o,"#ffb866",W)};for(let y of[-1,1]){let h=y<0?-14:16;for(let f=1;f<=5;f++){let o=y<0?-14-f*12:16+f*12;if(M(o,9.2),f%2===0)c(o,9.2,new T(0,0,-1));for(let g of[0,-0.25,0.3])L(new T(h,6.6+g,9.2),new T(o,6.6+g,9.2),0.5);h=o}}{let y=-9;for(let h=1;h<=6;h++){let f=-9-h*12;if(M(12.4,f),h%2===1)c(12.4,f,new T(-1,0,0));for(let o of[0,0.3])L(new T(12.4,6.6+o,y),new T(12.4,6.6+o,f),0.5);y=f}}let b=(y,h,f)=>{let o=F(["#8b2f2a","#c9c6bd","#2f4a6b","#3b3f42","#b58a3a","#e2dfd6","#556b4f"]),g=new T(Math.sin(f),0,Math.cos(f));H(y,0.55,h,1.75,0.62,4.1,o,f);let a=g.clone().multiplyScalar(-0.3);H(y+a.x,1.1,h+a.z,1.55,0.52,2.1,"#2a3236",f);let j=new T(g.z,0,-g.x);for(let[i,X0]of[[-0.8,1.3],[0.8,1.3],[-0.8,-1.3],[0.8,-1.3]]){let K0=new C9(0.32,0.32,0.22,10);K0.rotateZ(Math.PI/2),K0.rotateY(f);let H0=new T(y,0.32,h).addScaledVector(j,i).addScaledVector(g,X0);K0.translate(H0.x,H0.y,H0.z),Y(K0,"#141718")}};for(let[y,h,f]of[[-31,4.4,Math.PI/2],[-47,4.4,Math.PI/2],[-72,4.4,-Math.PI/2],[27,4.4,Math.PI/2],[55,4.4,-Math.PI/2],[-58,7.9,Math.PI/2],[38,7.9,-Math.PI/2],[5.6,-24,0],[5.6,-41,Math.PI],[10.8,-31,0],[10.8,-62,Math.PI]])b(y,h,f);let l=(y,h)=>Math.abs(y)<30&&h>-22&&h<24||h>-14&&h<20||h<-10&&y>-12&&y<30;for(let y=-78;y<=78;y+=13)for(let h=-78;h<=78;h+=13){let f=y+(Q()-0.5)*6,o=h+(Q()-0.5)*6;if(l(f,o)||Math.hypot(f,o)>80)continue;let g=Math.hypot(f,o),a=g>45&&Q()<0.07,j=Math.atan2(-f,-o),i=Math.round(j/(Math.PI/2))*(Math.PI/2),X0=a?5+Math.floor(Q()*5):1+Math.floor(Q()*(o>0?2:3));if(z(f,o,i,6+Q()*6,6+Q()*5,X0,{lejos:!0}),Q()<0.35){let K0=F(["#3f5a3c","#4a6443","#35503a"]),H0=f+(Q()-0.5)*8,Z0=o+(Q()-0.5)*8,S=2+Q()*2.5,x=new NQ(S,0);x.scale(1,0.8,1),x.translate(H0,S*0.6+2.5,Z0),Y(x,K0),U(H0,1.4,Z0,0.25,2.8,"#4d4234",5)}}for(let y=0;y<14;y++){let h=Q()*Math.PI*2,f=32+Q()*44,o=Math.cos(h)*f,g=Math.sin(h)*f;if(l(o,g))continue;let a=9+Q()*5,j=new C9(0.14,0.22,a,5);j.translate(o,a/2,g),Y(j,"#5d5445");for(let i=0;i<8;i++){let X0=new KJ(0.3,3,3,1);X0.rotateZ(Math.PI/2+0.5),X0.translate(1.5,0,0),X0.rotateY(i/8*Math.PI*2),X0.translate(o,a,g),Y(X0,"#34503a")}}{let h=[],f=[];for(let g=0;g<=240;g++){let a=g/240*Math.PI*2,j=86+Math.sin(a*3.1)*1.5,i=6+7*(0.5+0.5*Math.sin(a*2.3+0.7))+3.5*Math.sin(a*5.1+1)**2+1.2*Math.sin(a*13.7+2)+0.5*Math.sin(a*31.3);if(h.push(Math.cos(a)*j,-1,Math.sin(a)*j,Math.cos(a)*j,Math.max(5,i),Math.sin(a)*j),g<240){let X0=g*2;f.push(X0,X0+2,X0+1,X0+1,X0+2,X0+3)}}let o=new b9;o.setAttribute("position",new Y9(h,3)),o.setIndex(f),o.computeVertexNormals(),Y(o,"#3d4552")}let r=[],v=(y,h)=>{if(!y.length)return;let f=y.map((a)=>a.index?a.toNonIndexed():a),o=F$(f,!1);if(f.forEach((a)=>a.dispose()),y.forEach((a)=>a.dispose()),!o)return;let g=new A0(o,h);g.matrixAutoUpdate=!1,J.add(g),r.push(g)};return v(Z,new o0({vertexColors:!0,roughness:0.92,side:o9})),v(K,new h9({vertexColors:!0,color:new b0(1.9,1.9,1.9)})),v(W,new h9({vertexColors:!0,color:new b0(5,5,5)})),{mallas:r}}var dR=["cafe","morir","presidente","presidente"];function cR(){let J=document.createElement("canvas");J.width=256,J.height=128;let $=J.getContext("2d");$.fillStyle="#f1ece0",$.fillRect(0,0,256,128),$.fillStyle="#b3262d",$.fillRect(0,10,256,14),$.fillRect(0,104,256,14),$.fillStyle="#1f5a36",$.beginPath(),$.ellipse(128,64,54,28,0,0,Math.PI*2),$.fill(),$.fillStyle="#f1ece0",$.beginPath(),$.ellipse(128,64,46,21,0,0,Math.PI*2),$.fill(),$.fillStyle="#b3262d",$.fillRect(92,58,72,12);let Q=new i8(J);return Q.colorSpace=K8,Q}function nR(){let J=new S9,$=(H,U)=>new R0(H,U),Q=[$(0,0),$(0.034,0),$(0.037,0.006),$(0.037,0.165),$(0.034,0.188),$(0.022,0.222),$(0.0145,0.252),$(0.0138,0.274),$(0.0158,0.279),$(0.0158,0.29),$(0.0112,0.29),$(0.0106,0.268),$(0.0112,0.24)],Z=new o0({color:"#2d5a26",roughness:0.18,metalness:0.05,envMapIntensity:1.4});J.add(new A0(new k6(Q,20),Z));let K=new A0(new k6(Q.slice(1,5).map((H)=>$(H.x+0.0006,H.y)),20),new o0({color:"#e8f0e4",roughness:0.9,transparent:!0,opacity:0.22,depthWrite:!1}));J.add(K);let W=new A0(new C9(0.0376,0.0376,0.075,24,1,!0),new o0({map:cR(),roughness:0.6}));W.position.y=0.095,J.add(W);let X=new A0(new C9(0.0149,0.0152,0.02,16,1,!0),new o0({color:"#b3262d",roughness:0.5}));X.position.y=0.262,J.add(X);let Y=new A0(new e7(0.0112,16),new h9({color:"#0d160c"}));return Y.rotation.x=-Math.PI/2,Y.position.y=0.245,J.add(Y),{g:J,alto:0.11,radio:0.037,inclina:1.25,boca:0.18}}function sR(){let J=new S9,$=new A0(new C9(0.034,0.029,0.14,24,1,!0),new o0({color:"#dfe9ec",roughness:0.08,transparent:!0,opacity:0.28,depthWrite:!1,side:o9}));$.position.y=0.07,$.renderOrder=2,J.add($);let Q=new A0(new C9(0.029,0.029,0.008,24),new o0({color:"#dfe9ec",roughness:0.1,transparent:!0,opacity:0.5}));Q.position.y=0.004,J.add(Q);let Z=new A0(new C9(0.0318,0.0285,0.112,24),new o0({color:"#f2bf86",roughness:0.45}));Z.position.y=0.064,J.add(Z);for(let[W,X,Y]of[[0.01,0.006,0.4],[-0.009,-0.008,1.1],[0.002,-0.012,2]]){let H=new A0(new j9(0.016,0.013,0.016),new o0({color:"#f6f3ec",roughness:0.15,transparent:!0,opacity:0.8}));H.position.set(W,0.121,X),H.rotation.set(Y,Y*0.7,0),J.add(H)}let K=new A0(new C9(0.0028,0.0028,0.19,8),new o0({color:"#c8392e",roughness:0.5}));return K.position.set(0.012,0.11,0.004),K.rotation.z=-0.16,J.add(K),{g:J,alto:0.06,radio:0.034,inclina:0.85,boca:0.09}}function iR(){let J=new S9,$=new o0({color:"#efe9da",roughness:0.22}),Q=new A0(new C9(0.053,0.047,0.008,28),$);Q.position.y=0.004,J.add(Q);let Z=new o0({color:"#efe9da",roughness:0.22,side:o9}),K=new A0(new C9(0.034,0.025,0.056,24,1,!0),Z),W=new A0(new e7(0.025,20),$);W.rotation.x=-Math.PI/2,W.position.y=0.0085,J.add(W),K.position.y=0.036,J.add(K);let X=new A0(new e7(0.0318,24),new o0({color:"#2a160c",roughness:0.15}));X.rotation.x=-Math.PI/2,X.position.y=0.056,J.add(X);let Y=new A0(new x7(0.014,0.004,6,12,Math.PI*1.3),$);return Y.position.set(0.036,0.038,0),Y.rotation.z=-Math.PI*0.65,J.add(Y),J.remove(Q),{g:J,alto:0.034,radio:0.034,inclina:0.9,boca:0.034,plato:Q}}function bU(J){let $=[];for(let Q=0;Q<4;Q++){let Z=dR[Q],K=Z==="presidente"?nR():Z==="morir"?sR():iR(),[W,X,Y]=C7[Q],H=C0.tableWidth/2-0.055,U=C0.tableCenterY+C0.tableThickness/2,G=new T(-H,0,C0.seatDistance-H).applyAxisAngle(new T(0,1,0),Y).add(new T(W,0,X));if(G.y=U,K.g.traverse((F)=>{if(F.isMesh)F.castShadow=!0,F.receiveShadow=!0}),K.plato)G.y+=0.008;if(K.g.position.copy(G),J.add(K.g),K.plato)K.plato.position.copy(G),K.plato.position.y=U+0.004,K.plato.traverse((F)=>{if(F.isMesh)F.receiveShadow=!0}),J.add(K.plato);$.push({group:K.g,home:G,index:Q,tipo:Z,alto:K.alto,radio:K.radio,inclina:K.inclina,boca:K.boca})}return $}var R$={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class N7{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var oR=new W6(-1,1,1,-1,0,1);class hU extends b9{constructor(){super();this.setAttribute("position",new Y9([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Y9([0,2,0,0,2,0],2))}}var aR=new hU;class RJ{constructor(J){this._mesh=new A0(aR,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,oR)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class _Q extends N7{constructor(J,$="tDiffuse"){super();if(this.textureID=$,this.uniforms=null,this.material=null,J instanceof e9)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=$6.clone(J.uniforms),this.material=new e9({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new RJ(this.material)}render(J,$,Q){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=Q.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget($),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class CK extends N7{constructor(J,$){super();this.scene=J,this.camera=$,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,$,Q){let Z=J.getContext(),K=J.state;K.buffers.color.setMask(!1),K.buffers.depth.setMask(!1),K.buffers.color.setLocked(!0),K.buffers.depth.setLocked(!0);let W,X;if(this.inverse)W=0,X=1;else W=1,X=0;if(K.buffers.stencil.setTest(!0),K.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),K.buffers.stencil.setFunc(Z.ALWAYS,W,4294967295),K.buffers.stencil.setClear(X),K.buffers.stencil.setLocked(!0),J.setRenderTarget(Q),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget($),this.clear)J.clear();J.render(this.scene,this.camera),K.buffers.color.setLocked(!1),K.buffers.depth.setLocked(!1),K.buffers.color.setMask(!0),K.buffers.depth.setMask(!0),K.buffers.stencil.setLocked(!1),K.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),K.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),K.buffers.stencil.setLocked(!0)}}class $Y extends N7{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class QY{constructor(J,$){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),$===void 0){let Q=J.getSize(new R0);this._width=Q.width,this._height=Q.height,$=new W8(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:V8}),$.texture.name="EffectComposer.rt1"}else this._width=$.width,this._height=$.height;this.renderTarget1=$,this.renderTarget2=$.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _Q(R$),this.copyPass.material.blending=K7,this.timer=new KK}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,$){this.passes.splice($,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let $=this.passes.indexOf(J);if($!==-1)this.passes.splice($,1)}isLastEnabledPass(J){for(let $=J+1;$<this.passes.length;$++)if(this.passes[$].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let $=this.renderer.getRenderTarget(),Q=!1;for(let Z=0,K=this.passes.length;Z<K;Z++){let W=this.passes[Z];if(W.enabled===!1)continue;if(W.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),W.render(this.renderer,this.writeBuffer,this.readBuffer,J,Q),W.needsSwap){if(Q){let X=this.renderer.getContext(),Y=this.renderer.state.buffers.stencil;Y.setFunc(X.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),Y.setFunc(X.EQUAL,1,4294967295)}this.swapBuffers()}if(CK!==void 0){if(W instanceof CK)Q=!0;else if(W instanceof $Y)Q=!1}}this.renderer.setRenderTarget($)}reset(J){if(J===void 0){let $=this.renderer.getSize(new R0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=$.width,this._height=$.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,$){this._width=J,this._height=$;let Q=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize(Q,Z),this.renderTarget2.setSize(Q,Z);for(let K=0;K<this.passes.length;K++)this.passes[K].setSize(Q,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ZY extends N7{constructor(J,$,Q=null,Z=null,K=null){super();this.scene=J,this.camera=$,this.overrideMaterial=Q,this.clearColor=Z,this.clearAlpha=K,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new b0}render(J,$,Q){let Z=J.autoClear;J.autoClear=!1;let K,W;if(this.overrideMaterial!==null)W=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)K=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:Q),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(K);if(this.overrideMaterial!==null)this.scene.overrideMaterial=W;J.autoClear=Z}}var xU={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new b0(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class LJ extends N7{constructor(J,$=1,Q,Z){super();this.strength=$,this.radius=Q,this.threshold=Z,this.resolution=J!==void 0?new R0(J.x,J.y):new R0(256,256),this.clearColor=new b0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);this.renderTargetBright=new W8(K,W,{type:V8,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let G=new W8(K,W,{type:V8,depthBuffer:!1});G.texture.name="UnrealBloomPass.h"+U,G.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(G);let F=new W8(K,W,{type:V8,depthBuffer:!1});F.texture.name="UnrealBloomPass.v"+U,F.texture.generateMipmaps=!1,this.renderTargetsVertical.push(F),K=Math.round(K/2),W=Math.round(W/2)}let X=xU;this.highPassUniforms=$6.clone(X.uniforms),this.highPassUniforms.luminosityThreshold.value=Z,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new e9({uniforms:this.highPassUniforms,vertexShader:X.vertexShader,fragmentShader:X.fragmentShader}),this.separableBlurMaterials=[];let Y=[6,10,14,18,22];K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(Y[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new R0(1/K,1/W),K=Math.round(K/2),W=Math.round(W/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=$,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let H=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=H,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=$6.clone(R$.uniforms),this.blendMaterial=new e9({uniforms:this.copyUniforms,vertexShader:R$.vertexShader,fragmentShader:R$.fragmentShader,premultipliedAlpha:!0,blending:y7,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new b0,this._oldClearAlpha=1,this._basic=new h9,this._fsQuad=new RJ(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,$){let Q=Math.round(J/2),Z=Math.round($/2);this.renderTargetBright.setSize(Q,Z);for(let K=0;K<this.nMips;K++)this.renderTargetsHorizontal[K].setSize(Q,Z),this.renderTargetsVertical[K].setSize(Q,Z),this.separableBlurMaterials[K].uniforms.invSize.value=new R0(1/Q,1/Z),Q=Math.round(Q/2),Z=Math.round(Z/2)}render(J,$,Q,Z,K){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let W=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),K)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=Q.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=Q.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let X=this.renderTargetBright;for(let Y=0;Y<this.nMips;Y++)this._fsQuad.material=this.separableBlurMaterials[Y],this.separableBlurMaterials[Y].uniforms.colorTexture.value=X.texture,this.separableBlurMaterials[Y].uniforms.direction.value=LJ.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[Y]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[Y].uniforms.colorTexture.value=this.renderTargetsHorizontal[Y].texture,this.separableBlurMaterials[Y].uniforms.direction.value=LJ.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[Y]),J.clear(),this._fsQuad.render(J),X=this.renderTargetsVertical[Y];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,K)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget(Q),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=W}_getSeparableBlurMaterial(J){let $=[],Q=J/3;for(let W=0;W<J;W++)$.push(0.39894*Math.exp(-0.5*W*W/(Q*Q))/Q);let Z=[],K=[];for(let W=1;W<J;W+=2){let X=$[W],Y=W+1<J?$[W+1]:0,H=X+Y;Z.push((W*X+(W+1)*Y)/H),K.push(H)}return new e9({defines:{KERNEL_PAIRS:Z.length},uniforms:{colorTexture:{value:null},invSize:{value:new R0(0.5,0.5)},direction:{value:new R0(0.5,0.5)},centerWeight:{value:$[0]},gaussianOffsets:{value:Z},gaussianWeights:{value:K}},vertexShader:`

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

				}`})}_getCompositeMaterial(J){return new e9({defines:{NUM_MIPS:J},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}LJ.BlurDirectionX=new R0(1,0);LJ.BlurDirectionY=new R0(0,1);var TQ={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class KY extends N7{constructor(){super();this.isOutputPass=!0,this.uniforms=$6.clone(TQ.uniforms),this.material=new FQ({name:TQ.name,uniforms:this.uniforms,vertexShader:TQ.vertexShader,fragmentShader:TQ.fragmentShader}),this._fsQuad=new RJ(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,$,Q){if(this.uniforms.tDiffuse.value=Q.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},R9.getTransfer(this._outputColorSpace)===d9)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===s$)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===i$)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===o$)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===n6)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===r$)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===t$)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===a$)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget($),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var T8=(()=>{let J=7;return()=>{return J=Math.imul(J,1664525)+1013904223>>>0,J/4294967296}})();function WY(J,$=256,Q=256){let Z=document.createElement("canvas");Z.width=$,Z.height=Q,J(Z.getContext("2d"),$,Q);let K=new i8(Z);return K.colorSpace=K8,K}function gU(J="255,214,150"){return WY(($,Q,Z)=>{let K=$.createRadialGradient(Q/2,Z/2,0,Q/2,Z/2,Q/2);K.addColorStop(0,`rgba(${J},1)`),K.addColorStop(0.18,`rgba(${J},.55)`),K.addColorStop(0.5,`rgba(${J},.12)`),K.addColorStop(1,`rgba(${J},0)`),$.fillStyle=K,$.fillRect(0,0,Q,Z)})}var pU=new T(-0.55,-0.035,-0.83).normalize();function rR(J){let $=new S9,Q=new A0(new B8(80,32,16),new e9({side:C8,depthWrite:!1,fog:!1,uniforms:{uSol:{value:pU}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 uSol;
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
   }`}));Q.renderOrder=-10,$.add(Q);let Z=220,K=new Float32Array(Z*3),W=new Float32Array(Z*3);for(let U=0;U<Z;U++){let G=T8(),F=T8()*Math.PI*2,N=0.45+G*0.55,q=Math.sqrt(1-N*N),O=0.25+0.55*T8()*N;K.set([Math.cos(F)*q*75,N*75,Math.sin(F)*q*75],U*3),W.set([O*0.85,O*0.9,O],U*3)}let X=new b9;X.setAttribute("position",new r9(K,3)),X.setAttribute("color",new r9(W,3)),$.add(new W$(X,new QJ({size:1.3,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0,opacity:0.45})));let Y=new A0(new e7(2.1,40),new h9({color:"#f6e7cc",fog:!1}));Y.position.set(26,11,58),Y.lookAt(0,1,0),$.add(Y);let H=new Z$(new JJ({map:gU("255,226,200"),fog:!1,transparent:!0,opacity:0.28,depthWrite:!1,blending:y7}));return H.scale.setScalar(13),H.position.copy(Y.position),$.add(H),J.add($),$}function tR(J){let $=new Map,Q=(F,N=0,q=0)=>{let O=F+N+q;if(!$.has(O))$.set(O,{m:new o0({color:N?F:new b0(F).multiplyScalar(0.85),roughness:0.9,emissive:N||"#000",emissiveIntensity:q}),g:[]});return $.get(O)},Z=(F,N,q,O,B,R=0)=>{F.rotateY(R),F.translate(q,O,B),N.g.push(F)},K=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0"],W=-20;while(W<20){let F=3.4+T8()*2.6,N=3+T8()*2.8,q=10.5+T8()*0.8,O=K[Math.floor(T8()*K.length)];Z(new j9(F,N,2.4),Q(O),W+F/2,N/2,q+1.2),Z(new j9(F+0.12,0.18,2.6),Q("#d9d2bf"),W+F/2,N+0.09,q+1.2);let B=Math.max(1,Math.floor(F/1.5));for(let R=0;R<B;R++){let E=W+(R+0.5)*F/B,P=T8()<0.4,k=T8()<0.2,V=P?Q(k?"#9fc3ff":"#ffd08a",k?"#6f9cff":"#ffb35a",k?1.6:2.2):Q("#2a3436");if(Z(new V9(0.75,0.95),V,E,1.55,q-0.005,Math.PI),N>4.2)Z(new V9(0.7,0.8),T8()<0.35?Q("#ffd08a","#ffb35a",1.5):Q("#2a3436"),E,N-1.1,q-0.005,Math.PI);Z(new j9(0.9,0.06,0.12),Q("#2c3432"),E,2.08,q-0.06)}for(let R=0;R<Math.floor(F/0.22);R++)Z(new j9(0.018,0.9,0.018),Q("#1b2224"),W+0.11+R*0.22,0.45,q-0.55);Z(new j9(F,0.04,0.04),Q("#1b2224"),W+F/2,0.9,q-0.55),W+=F+0.15}Z(new j9(44,0.16,1.8),Q("#8a8578"),0,0.08,9.6);let X=[-14,-4,6,16];for(let F of X)Z(new C9(0.09,0.12,7,8),Q("#6b6457"),F,3.5,9.2),Z(new j9(1.6,0.08,0.08),Q("#4f4a40"),F,6.6,9.2);for(let F=0;F<X.length-1;F++)for(let N of[0,-0.25,0.3]){let q=new T(X[F],6.6+N,9.2),O=new T(X[F+1],6.6+N,9.2),B=q.clone().lerp(O,0.5);B.y-=0.55,Z(new b8(new o8(q,B,O),16,0.012,4),Q("#101517"),0,0,0)}for(let[F,N,q]of[[-9,12.8,7.5],[11,13.1,8.4],[2.5,13.4,6.4]]){let O=new J6([new T(F,0,N),new T(F+0.3,q*0.5,N),new T(F+0.8,q,N-0.2)]);Z(new b8(O,12,0.16,6),Q("#5d5445"),0,0,0);for(let B=0;B<9;B++){let R=B/9*Math.PI*2,E=new KJ(0.28,2.6,4,1);E.rotateZ(Math.PI/2+0.55),E.translate(1.3,0,0),E.rotateY(R),Z(E,Q("#34503a"),F+0.8,q,N-0.2)}}let Y=[];for(let{m:F,g:N}of $.values()){let q=F$(N,!1);if(N.forEach((B)=>B.dispose()),!q)continue;let O=new A0(q,F);O.receiveShadow=!0,J.add(O),Y.push(O)}let H=new K6("#ffa35c",6,14,1.8);H.position.set(6,5.9,8.6),J.add(H);let U=new A0(new B8(0.14,12,8),new o0({color:"#ffcf94",emissive:"#ff9a45",emissiveIntensity:5}));U.position.copy(H.position),J.add(U);let G=new A0(new C9(0.03,0.03,1.3,6),new o0({color:"#4f4a40"}));return G.rotation.z=Math.PI/2,G.position.set(6,6.05,8.9),J.add(G),{merged:Y,farol:H}}function eR(J,$){let Q=new S9;Q.position.copy($),J.add(Q);let Z=new A0(new B8(0.038,16,12),new o0({color:"#fff4d6",emissive:"#ffd08a",emissiveIntensity:9}));Z.scale.y=1.25,Q.add(Z);let K=new A0(new C9(0.018,0.02,0.05,10),new o0({color:"#2b2a26",roughness:0.6}));K.position.y=0.065,Q.add(K);let W=new A0(new C9(0.004,0.004,1.1,5),new o0({color:"#15181a"}));W.position.y=0.64,Q.add(W);let X=new Z$(new JJ({map:gU(),transparent:!0,opacity:0.55,depthWrite:!1,blending:y7}));X.scale.setScalar(0.75),Q.add(X);let Y=[],H=new JJ({color:"#3b3026",transparent:!0,opacity:0.85,depthWrite:!1});for(let U=0;U<6;U++){let G=new Z$(H);G.scale.setScalar(0.012+T8()*0.008),Q.add(G),Y.push({s:G,r:0.07+T8()*0.12,w:2+T8()*4,f:T8()*6,y:0.05+T8()*0.08,k:1.3+T8()})}return{g:Q,halo:X,polillas:Y}}function JL(){let J=new $$;J.add(new A0(new B8(10,24,12),new e9({side:C8,uniforms:{uSol:{value:pU}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform vec3 uSol;void main(){float l=dot(normalize(vP.xz+vec2(1e-4)),normalize(uSol.xz))*.5+.5;vec3 hor=mix(vec3(.3,.25,.36),vec3(.85,.45,.25),pow(l,2.5));gl_FragColor=vec4(mix(hor,vec3(.05,.07,.17),smoothstep(-.05,.7,vP.y))*mix(.35,1.,smoothstep(-.3,0.,vP.y)),1.);}"})));let $=(Q,Z,K,W,X,Y)=>{let H=new A0(new V9(K,W),new h9({color:new b0(Q).multiplyScalar(Z),side:o9}));H.position.set(...X),H.lookAt(...Y),J.add(H)};return $("#ffcf94",6,1.2,1.2,[0,6,0],[0,0,0]),$("#dff3ea",2,5,2,[0,2.5,-8],[0,1,0]),J}function mU({scene:J,renderer:$,camera:Q,controls:Z,software:K,bulbLight:W}){function X(){let v=new DQ($),y=JL(),h=v.fromScene(y,0.02);J.environment?.dispose?.(),J.environment=h.texture,J.environmentIntensity=0.75,v.dispose(),y.traverse((f)=>{f.geometry?.dispose(),f.material?.dispose()})}X(),J.background=new b0("#2a2d4a"),J.fog=new e6("#5a5670",0.017);let Y=rR(J),H=tR(J),U=new T(0,C0.surfaceY+1.3,0),G=eR(J,U),F=WY((v,y,h)=>{let f=v.createRadialGradient(y/2,h*0.62,0,y/2,h*0.62,y/2);f.addColorStop(0,"rgba(255,196,110,.95)"),f.addColorStop(0.45,"rgba(255,170,80,.35)"),f.addColorStop(1,"rgba(255,150,60,0)"),v.fillStyle=f,v.fillRect(0,0,y,h)},256,128),N=new A0(new V9(0.62,0.26),new h9({map:F,transparent:!0,opacity:0,depthWrite:!1,blending:y7,toneMapped:!1}));N.rotation.x=-Math.PI/2,N.position.y=C0.surfaceY+0.0012,N.renderOrder=3,J.add(N);let q={i:-1,ang:0,alfa:0,objetivo:0,pos:new T},O=(v)=>WY((y,h,f)=>{y.strokeStyle=`rgba(${v},1)`,y.lineWidth=h*0.09,y.beginPath(),y.arc(h/2,f/2,h*0.36,0,Math.PI*2),y.stroke();let o=y.createRadialGradient(h/2,f/2,0,h/2,f/2,h/2);o.addColorStop(0,`rgba(${v},.5)`),o.addColorStop(1,`rgba(${v},0)`),y.fillStyle=o,y.fillRect(0,0,h,f)},128,128),B=["227,174,85","111,183,201"].map((v)=>{let y=new A0(new V9(0.036,0.036),new h9({map:O(v),transparent:!0,opacity:0,depthWrite:!1,blending:y7,toneMapped:!1}));return y.rotation.x=-Math.PI/2,y.position.y=C0.surfaceY+0.0015,y.renderOrder=3,J.add(y),y}),R=null,E=Q.clone(),P=new T,k=new T,V=null,z=null,w=null,D=!1;function L(){if(V)return;let v=$.getDrawingBufferSize(new R0),y=new W8(v.x,v.y,{type:V8,samples:4});V=new QY($,y),V.addPass(new ZY(J,E)),z=new LJ(new R0(v.x/2,v.y/2),0.4,0.5,3.2),w=new _Q({uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uVineta:{value:0.34},uGrano:{value:0.018}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uTiempo,uVineta,uGrano;varying vec2 vUv;
    float azar(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTiempo*43.7)*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     vec2 q=vUv-.5;float v=1.-uVineta*smoothstep(.25,.85,length(q*vec2(1.15,1.)));
     c.rgb*=v;
     // Sombras hacia el lila y luces cálidas: el atardecer con el bombillo ya prendido.
     float l=dot(c.rgb,vec3(.2126,.7152,.0722));
     c.rgb*=mix(vec3(.96,.95,1.06),vec3(1.04,1.,.93),smoothstep(.02,.4,l));
     c.rgb+=(azar(vUv*vec2(1920.,1080.))-.5)*uGrano*(.4+l);
     gl_FragColor=c;}`}),V.addPass(w),V.addPass(new KY)}function M(v){if(D=!K&&v==="high",D)L();G.halo.visible=!0,H.farol.visible=v==="high"}function c(v,y){if(V)V.setPixelRatio($.getPixelRatio()),V.setSize(v,y);E.aspect=Q.aspect,E.updateProjectionMatrix()}function b(v,y,{reduced:h,view:f,ends:o,temblor:g=0}){if(E.copy(Q),!h){if(P.set(Math.sin(v*0.11)*0.012+Math.sin(v*0.037)*0.008,Math.sin(v*0.083+1)*0.007,Math.cos(v*0.097)*0.01),g)P.add(k.set(Math.sin(v*97)*g,Math.sin(v*113)*g*0.6,Math.cos(v*89)*g));E.position.add(P),k.copy(Z.target).addScaledVector(P,0.35),E.lookAt(k)}if(E.updateMatrixWorld(),G.halo.material.opacity=0.5+0.05*Math.sin(v*23)*Math.sin(v*1.7)+(h?0:0.03*Math.sin(v*3.1)),!h)for(let j of G.polillas){let i=v*j.w+j.f;j.s.position.set(Math.cos(i)*j.r,j.y+Math.sin(i*j.k)*0.05,Math.sin(i*1.3)*j.r)}let a=f?.phase==="playing";if(a&&f.turn!=null){let[j,i,X0]=C7[f.turn],K0=C0.boardLimit+0.075;if(q.i!==f.turn)q.i=f.turn,q.destino=new T(j*K0/C0.seatDistance,0,i*K0/C0.seatDistance),q.angDestino=X0;q.pos.lerp(q.destino,1-Math.exp(-y*6));let H0=q.angDestino-q.ang;H0=Math.atan2(Math.sin(H0),Math.cos(H0)),q.ang+=H0*(1-Math.exp(-y*6)),q.objetivo=0.55+(h?0:0.08*Math.sin(v*2.2))}else q.objetivo=0;q.alfa+=(q.objetivo-q.alfa)*(1-Math.exp(-y*4)),N.material.opacity=q.alfa,N.visible=q.alfa>0.01,N.position.set(q.pos.x,C0.surfaceY+0.0012,q.pos.z),N.rotation.set(-Math.PI/2,0,q.ang);for(let j=0;j<2;j++){let i=B[j],X0=a&&o?o[j]:null;if(!X0){i.material.opacity=Math.max(0,i.material.opacity-y*3),i.visible=i.material.opacity>0.01;continue}i.visible=!0,i.position.set(X0.x,C0.surfaceY+0.0015,X0.z);let K0=h?1:1+0.12*Math.sin(v*3.4+j*1.3);i.scale.setScalar(K0),i.material.opacity=Math.min(0.7,i.material.opacity+y*3)}if(w)w.uniforms.uTiempo.value=v%100}function l(){if(D&&V)V.render();else $.render(J,E)}function r(){V?.dispose()}return{vista:E,frame:b,render:l,resize:c,calidad:M,dispose:r,bulbPos:U,entorno:X}}class FY extends Z6{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function($){return new oU($)}),this.register(function($){return new aU($)}),this.register(function($){return new WN($)}),this.register(function($){return new XN($)}),this.register(function($){return new YN($)}),this.register(function($){return new tU($)}),this.register(function($){return new eU($)}),this.register(function($){return new JN($)}),this.register(function($){return new $N($)}),this.register(function($){return new iU($)}),this.register(function($){return new QN($)}),this.register(function($){return new rU($)}),this.register(function($){return new KN($)}),this.register(function($){return new ZN($)}),this.register(function($){return new nU($)}),this.register(function($){return new UY($,P9.EXT_MESHOPT_COMPRESSION)}),this.register(function($){return new UY($,P9.KHR_MESHOPT_COMPRESSION)}),this.register(function($){return new HN($)})}load(J,$,Q,Z){let K=this,W;if(this.resourcePath!=="")W=this.resourcePath;else if(this.path!==""){let H=z6.extractUrlBase(J);W=z6.resolveURL(H,this.path)}else W=z6.extractUrlBase(J);this.manager.itemStart(J);let X=function(H){if(Z)Z(H);else console.error(H);K.manager.itemError(J),K.manager.itemEnd(J)},Y=new EQ(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(H){try{K.parse(H,W,function(U){$(U),K.manager.itemEnd(J)},X)}catch(U){X(U)}},Q,X)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,$,Q,Z){let K,W={},X={},Y=new TextDecoder;if(typeof J==="string")K=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===UN){try{W[P9.KHR_BINARY_GLTF]=new NN(J)}catch(G){if(Z)Z(G);return}K=JSON.parse(W[P9.KHR_BINARY_GLTF].content)}else K=JSON.parse(Y.decode(J));else K=J;if(K.asset===void 0||K.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let H=new ON(K,{path:$||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});H.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](H);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");X[G.name]=G,W[G.name]=!0}if(K.extensionsUsed)for(let U=0;U<K.extensionsUsed.length;++U){let G=K.extensionsUsed[U],F=K.extensionsRequired||[];switch(G){case P9.KHR_MATERIALS_UNLIT:W[G]=new sU;break;case P9.KHR_DRACO_MESH_COMPRESSION:W[G]=new GN(K,this.dracoLoader);break;case P9.KHR_TEXTURE_TRANSFORM:W[G]=new FN;break;case P9.KHR_MESH_QUANTIZATION:W[G]=new EN;break;default:if(F.indexOf(G)>=0&&X[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}H.setExtensions(W),H.setPlugins(X),H.parse(Q,Z)}parseAsync(J,$){let Q=this;return new Promise(function(Z,K){Q.parse(J,$,Z,K)})}}function $L(){let J={};return{get:function($){return J[$]},add:function($,Q){J[$]=Q},remove:function($){delete J[$]},removeAll:function(){J={}}}}function Y8(J,$,Q){let Z=J.json.materials[$];if(Z.extensions&&Z.extensions[Q])return Z.extensions[Q];return null}var P9={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class nU{constructor(J){this.parser=J,this.name=P9.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,$=this.parser.json.nodes||[];for(let Q=0,Z=$.length;Q<Z;Q++){let K=$[Q];if(K.extensions&&K.extensions[this.name]&&K.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,K.extensions[this.name].light)}}_loadLight(J){let $=this.parser,Q="light:"+J,Z=$.cache.get(Q);if(Z)return Z;let K=$.json,Y=((K.extensions&&K.extensions[this.name]||{}).lights||[])[J],H,U=new b0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],s8);let G=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":H=new H$(U),H.target.position.set(0,0,-1),H.add(H.target);break;case"point":H=new K6(U),H.distance=G;break;case"spot":H=new Y$(U),H.distance=G,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,H.angle=Y.spot.outerConeAngle,H.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,H.target.position.set(0,0,-1),H.add(H.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(H.position.set(0,0,0),u7(H,Y),Y.intensity!==void 0)H.intensity=Y.intensity;return H.name=$.createUniqueName(Y.name||"light_"+J),Z=Promise.resolve(H),$.cache.add(Q,Z),Z}getDependency(J,$){if(J!=="light")return;return this._loadLight($)}createNodeAttachment(J){let $=this,Q=this.parser,K=Q.json.nodes[J],X=(K.extensions&&K.extensions[this.name]||{}).light;if(X===void 0)return null;return this._loadLight(X).then(function(Y){return Q._getNodeRef($.cache,X,Y)})}}class sU{constructor(){this.name=P9.KHR_MATERIALS_UNLIT}getMaterialType(){return h9}extendParams(J,$,Q){let Z=[];J.color=new b0(1,1,1),J.opacity=1;let K=$.pbrMetallicRoughness;if(K){if(Array.isArray(K.baseColorFactor)){let W=K.baseColorFactor;J.color.setRGB(W[0],W[1],W[2],s8),J.opacity=W[3]}if(K.baseColorTexture!==void 0)Z.push(Q.assignTexture(J,"map",K.baseColorTexture,K8))}return Promise.all(Z)}}class iU{constructor(J){this.parser=J,this.name=P9.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,$){let Q=Y8(this.parser,J,this.name);if(Q===null)return Promise.resolve();if(Q.emissiveStrength!==void 0)$.emissiveIntensity=Q.emissiveStrength;return Promise.resolve()}}class oU{constructor(J){this.parser=J,this.name=P9.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return Y8(this.parser,J,this.name)!==null?D8:null}extendMaterialParams(J,$){let Q=Y8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.clearcoatFactor!==void 0)$.clearcoat=Q.clearcoatFactor;if(Q.clearcoatTexture!==void 0)Z.push(this.parser.assignTexture($,"clearcoatMap",Q.clearcoatTexture));if(Q.clearcoatRoughnessFactor!==void 0)$.clearcoatRoughness=Q.clearcoatRoughnessFactor;if(Q.clearcoatRoughnessTexture!==void 0)Z.push(this.parser.assignTexture($,"clearcoatRoughnessMap",Q.clearcoatRoughnessTexture));if(Q.clearcoatNormalTexture!==void 0){if(Z.push(this.parser.assignTexture($,"clearcoatNormalMap",Q.clearcoatNormalTexture)),Q.clearcoatNormalTexture.scale!==void 0){let K=Q.clearcoatNormalTexture.scale;$.clearcoatNormalScale=new R0(K,K)}}return Promise.all(Z)}}class aU{constructor(J){this.parser=J,this.name=P9.KHR_MATERIALS_DISPERSION}getMaterialType(J){return Y8(this.parser,J,this.name)!==null?D8:null}extendMaterialParams(J,$){let Q=Y8(this.parser,J,this.name);if(Q===null)return Promise.resolve();return $.dispersion=Q.dispersion!==void 0?Q.dispersion:0,Promise.resolve()}}class rU{constructor(J){this.parser=J,this.name=P9.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return Y8(this.parser,J,this.name)!==null?D8:null}extendMaterialParams(J,$){let Q=Y8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.iridescenceFactor!==void 0)$.iridescence=Q.iridescenceFactor;if(Q.iridescenceTexture!==void 0)Z.push(this.parser.assignTexture($,"iridescenceMap",Q.iridescenceTexture));if(Q.iridescenceIor!==void 0)$.iridescenceIOR=Q.iridescenceIor;if($.iridescenceThicknessRange===void 0)$.iridescenceThicknessRange=[100,400];if(Q.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessRange[0]=Q.iridescenceThicknessMinimum;if(Q.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessRange[1]=Q.iridescenceThicknessMaximum;if(Q.iridescenceThicknessTexture!==void 0)Z.push(this.parser.assignTexture($,"iridescenceThicknessMap",Q.iridescenceThicknessTexture));return Promise.all(Z)}}class tU{constructor(J){this.parser=J,this.name=P9.KHR_MATERIALS_SHEEN}getMaterialType(J){return Y8(this.parser,J,this.name)!==null?D8:null}extendMaterialParams(J,$){let Q=Y8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.sheenColor=new b0(0,0,0),$.sheenRoughness=0,$.sheen=1,Q.sheenColorFactor!==void 0){let K=Q.sheenColorFactor;$.sheenColor.setRGB(K[0],K[1],K[2],s8)}if(Q.sheenRoughnessFactor!==void 0)$.sheenRoughness=Q.sheenRoughnessFactor;if(Q.sheenColorTexture!==void 0)Z.push(this.parser.assignTexture($,"sheenColorMap",Q.sheenColorTexture,K8));if(Q.sheenRoughnessTexture!==void 0)Z.push(this.parser.assignTexture($,"sheenRoughnessMap",Q.sheenRoughnessTexture));return Promise.all(Z)}}class eU{constructor(J){this.parser=J,this.name=P9.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return Y8(this.parser,J,this.name)!==null?D8:null}extendMaterialParams(J,$){let Q=Y8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.transmissionFactor!==void 0)$.transmission=Q.transmissionFactor;if(Q.transmissionTexture!==void 0)Z.push(this.parser.assignTexture($,"transmissionMap",Q.transmissionTexture));return Promise.all(Z)}}class JN{constructor(J){this.parser=J,this.name=P9.KHR_MATERIALS_VOLUME}getMaterialType(J){return Y8(this.parser,J,this.name)!==null?D8:null}extendMaterialParams(J,$){let Q=Y8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.thickness=Q.thicknessFactor!==void 0?Q.thicknessFactor:0,Q.thicknessTexture!==void 0)Z.push(this.parser.assignTexture($,"thicknessMap",Q.thicknessTexture));$.attenuationDistance=Q.attenuationDistance||1/0;let K=Q.attenuationColor||[1,1,1];return $.attenuationColor=new b0().setRGB(K[0],K[1],K[2],s8),Promise.all(Z)}}class $N{constructor(J){this.parser=J,this.name=P9.KHR_MATERIALS_IOR}getMaterialType(J){return Y8(this.parser,J,this.name)!==null?D8:null}extendMaterialParams(J,$){let Q=Y8(this.parser,J,this.name);if(Q===null)return Promise.resolve();if($.ior=Q.ior!==void 0?Q.ior:1.5,$.ior===0)$.ior=1000;return Promise.resolve()}}class QN{constructor(J){this.parser=J,this.name=P9.KHR_MATERIALS_SPECULAR}getMaterialType(J){return Y8(this.parser,J,this.name)!==null?D8:null}extendMaterialParams(J,$){let Q=Y8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.specularIntensity=Q.specularFactor!==void 0?Q.specularFactor:1,Q.specularTexture!==void 0)Z.push(this.parser.assignTexture($,"specularIntensityMap",Q.specularTexture));let K=Q.specularColorFactor||[1,1,1];if($.specularColor=new b0().setRGB(K[0],K[1],K[2],s8),Q.specularColorTexture!==void 0)Z.push(this.parser.assignTexture($,"specularColorMap",Q.specularColorTexture,K8));return Promise.all(Z)}}class ZN{constructor(J){this.parser=J,this.name=P9.EXT_MATERIALS_BUMP}getMaterialType(J){return Y8(this.parser,J,this.name)!==null?D8:null}extendMaterialParams(J,$){let Q=Y8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.bumpScale=Q.bumpFactor!==void 0?Q.bumpFactor:1,Q.bumpTexture!==void 0)Z.push(this.parser.assignTexture($,"bumpMap",Q.bumpTexture));return Promise.all(Z)}}class KN{constructor(J){this.parser=J,this.name=P9.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return Y8(this.parser,J,this.name)!==null?D8:null}extendMaterialParams(J,$){let Q=Y8(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.anisotropyStrength!==void 0)$.anisotropy=Q.anisotropyStrength;if(Q.anisotropyRotation!==void 0)$.anisotropyRotation=Q.anisotropyRotation;if(Q.anisotropyTexture!==void 0)Z.push(this.parser.assignTexture($,"anisotropyMap",Q.anisotropyTexture));return Promise.all(Z)}}class WN{constructor(J){this.parser=J,this.name=P9.KHR_TEXTURE_BASISU}loadTexture(J){let $=this.parser,Q=$.json,Z=Q.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let K=Z.extensions[this.name],W=$.options.ktx2Loader;if(!W)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return $.loadTextureImage(J,K.source,W)}}class XN{constructor(J){this.parser=J,this.name=P9.EXT_TEXTURE_WEBP}loadTexture(J){let $=this.name,Q=this.parser,Z=Q.json,K=Z.textures[J];if(!K.extensions||!K.extensions[$])return null;let W=K.extensions[$],X=Z.images[W.source],Y=Q.textureLoader;if(X.uri){let H=Q.options.manager.getHandler(X.uri);if(H!==null)Y=H}return Q.loadTextureImage(J,W.source,Y)}}class YN{constructor(J){this.parser=J,this.name=P9.EXT_TEXTURE_AVIF}loadTexture(J){let $=this.name,Q=this.parser,Z=Q.json,K=Z.textures[J];if(!K.extensions||!K.extensions[$])return null;let W=K.extensions[$],X=Z.images[W.source],Y=Q.textureLoader;if(X.uri){let H=Q.options.manager.getHandler(X.uri);if(H!==null)Y=H}return Q.loadTextureImage(J,W.source,Y)}}class UY{constructor(J,$){this.name=$,this.parser=J}loadBufferView(J){let $=this.parser.json,Q=$.bufferViews[J];if(Q.extensions&&Q.extensions[this.name]){let Z=Q.extensions[this.name],K=this.parser.getDependency("buffer",Z.buffer),W=this.parser.options.meshoptDecoder;if(!W||!W.supported)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return K.then(function(X){let Y=Z.byteOffset||0,H=Z.byteLength||0,U=Z.count,G=Z.byteStride,F=new Uint8Array(X,Y,H);if(W.decodeGltfBufferAsync)return W.decodeGltfBufferAsync(U,G,F,Z.mode,Z.filter).then(function(N){return N.buffer});else return W.ready.then(function(){let N=new ArrayBuffer(U*G);return W.decodeGltfBuffer(new Uint8Array(N),U,G,F,Z.mode,Z.filter),N})})}else return null}}class HN{constructor(J){this.name=P9.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let $=this.parser.json,Q=$.nodes[J];if(!Q.extensions||!Q.extensions[this.name]||Q.mesh===void 0)return null;let Z=$.meshes[Q.mesh];for(let H of Z.primitives)if(H.mode!==G7.TRIANGLES&&H.mode!==G7.TRIANGLE_STRIP&&H.mode!==G7.TRIANGLE_FAN&&H.mode!==void 0)return null;let W=Q.extensions[this.name].attributes,X=[],Y={};for(let H in W)X.push(this.parser.getDependency("accessor",W[H]).then((U)=>{return Y[H]=U,Y[H]}));if(X.length<1)return null;return X.push(this.parser.createNodeMesh(J)),Promise.all(X).then((H)=>{let U=H.pop(),G=U.isGroup?U.children:[U],F=H[0].count,N=[];for(let q of G){let O=new $9,B=new T,R=new E9,E=new T(1,1,1),P=new h7(q.geometry,q.material,F);for(let V=0;V<F;V++){if(Y.TRANSLATION)B.fromBufferAttribute(Y.TRANSLATION,V);if(Y.ROTATION)R.fromBufferAttribute(Y.ROTATION,V);if(Y.SCALE)E.fromBufferAttribute(Y.SCALE,V);P.setMatrixAt(V,O.compose(B,R,E))}let k=null;for(let V in Y)if(V==="_COLOR_0"){let z=Y[V];P.instanceColor=new q6(z.array,z.itemSize,z.normalized)}else if(V!=="TRANSLATION"&&V!=="ROTATION"&&V!=="SCALE"){if(k===null){let w=P.geometry;k=new b9,k.name=w.name;for(let D in w.attributes)k.setAttribute(D,w.attributes[D]);for(let D in w.morphAttributes)k.morphAttributes[D]=w.morphAttributes[D];if(w.index!==null)k.setIndex(w.index);k.morphTargetsRelative=w.morphTargetsRelative;for(let D of w.groups)k.addGroup(D.start,D.count,D.materialIndex);if(w.boundingBox!==null)k.boundingBox=w.boundingBox.clone();if(w.boundingSphere!==null)k.boundingSphere=w.boundingSphere.clone();k.drawRange.start=w.drawRange.start,k.drawRange.count=w.drawRange.count,k.userData=Object.assign({},w.userData),P.geometry=k}let z=Y[V];k.setAttribute(V,new q6(z.array,z.itemSize,z.normalized))}v9.prototype.copy.call(P,q),this.parser.assignFinalMaterial(P),N.push(P)}if(U.isGroup)return U.clear(),U.add(...N),U;return N[0]})}}var UN="glTF",wQ=12,lU={JSON:1313821514,BIN:5130562};class NN{constructor(J){this.name=P9.KHR_BINARY_GLTF,this.content=null,this.body=null;let $=new DataView(J,0,wQ),Q=new TextDecoder;if(this.header={magic:Q.decode(new Uint8Array(J.slice(0,4))),version:$.getUint32(4,!0),length:$.getUint32(8,!0)},this.header.magic!==UN)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-wQ,K=new DataView(J,wQ),W=0;while(W<Z){let X=K.getUint32(W,!0);W+=4;let Y=K.getUint32(W,!0);if(W+=4,Y===lU.JSON){let H=new Uint8Array(J,wQ+W,X);this.content=Q.decode(H)}else if(Y===lU.BIN){let H=wQ+W;this.body=J.slice(H,H+X)}W+=X}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class GN{constructor(J,$){if(!$)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=P9.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=$,this.dracoLoader.preload()}decodePrimitive(J,$){let Q=this.json,Z=this.dracoLoader,K=J.extensions[this.name].bufferView,W=J.extensions[this.name].attributes,X={},Y={},H={};for(let U in W){let G=NY[U]||U.toLowerCase();X[G]=W[U]}for(let U in J.attributes){let G=NY[U]||U.toLowerCase();if(W[U]!==void 0){let F=Q.accessors[J.attributes[U]],N=L$[F.componentType];H[G]=N.name,Y[G]=F.normalized===!0}}return $.getDependency("bufferView",K).then(function(U){return new Promise(function(G,F){Z.decodeDracoFile(U,function(N){for(let q in N.attributes){let O=N.attributes[q],B=Y[q];if(B!==void 0)O.normalized=B}G(N)},X,H,s8,F)})})}}class FN{constructor(){this.name=P9.KHR_TEXTURE_TRANSFORM}extendTexture(J,$){if(($.texCoord===void 0||$.texCoord===J.channel)&&$.offset===void 0&&$.rotation===void 0&&$.scale===void 0)return J;if(J=J.clone(),$.texCoord!==void 0)J.channel=$.texCoord;if($.offset!==void 0)J.offset.fromArray($.offset);if($.rotation!==void 0)J.rotation=$.rotation;if($.scale!==void 0)J.repeat.fromArray($.scale);if($.rotation!==void 0){let Q=Math.cos(J.rotation),Z=Math.sin(J.rotation);J.matrix.set(J.repeat.x*Q,J.repeat.y*Z,J.offset.x,-J.repeat.x*Z,J.repeat.y*Q,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class EN{constructor(){this.name=P9.KHR_MESH_QUANTIZATION}}class EY extends Q6{constructor(J,$,Q,Z){super(J,$,Q,Z)}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,K=J*Z*3+Z;for(let W=0;W!==Z;W++)$[W]=Q[K+W];return $}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=X*2,H=X*3,U=Z-$,G=(Q-$)/U,F=G*G,N=F*G,q=J*H,O=q-H,B=-2*N+3*F,R=N-F,E=1-B,P=R-F+G;for(let k=0;k!==X;k++){let V=W[O+k+X],z=W[O+k+Y]*U,w=W[q+k+X],D=W[q+k]*U;K[k]=E*V+P*z+B*w+R*D}return K}}var QL=new E9;class qN extends EY{interpolate_(J,$,Q,Z){let K=super.interpolate_(J,$,Q,Z);return QL.fromArray(K).normalize().toArray(K),K}}var G7={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},L$={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uU={9728:D7,9729:L8,9984:_Z,9985:tJ,9986:i6,9987:v7},dU={33071:rJ,33648:AZ,10497:V6},XY={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},NY={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},T6={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ZL={CUBICSPLINE:void 0,LINEAR:fZ,STEP:eW},YY={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KL(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new o0({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:L6});return J.DefaultMaterial}function VJ(J,$,Q){for(let Z in Q.extensions)if(J[Z]===void 0)$.userData.gltfExtensions=$.userData.gltfExtensions||{},$.userData.gltfExtensions[Z]=Q.extensions[Z]}function u7(J,$){if($.extras!==void 0)if(typeof $.extras==="object")Object.assign(J.userData,$.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+$.extras)}function WL(J,$,Q){let Z=!1,K=!1,W=!1;for(let U=0,G=$.length;U<G;U++){let F=$[U];if(F.POSITION!==void 0)Z=!0;if(F.NORMAL!==void 0)K=!0;if(F.COLOR_0!==void 0)W=!0;if(Z&&K&&W)break}if(!Z&&!K&&!W)return Promise.resolve(J);let X=[],Y=[],H=[];for(let U=0,G=$.length;U<G;U++){let F=$[U];if(Z){let N=F.POSITION!==void 0?Q.getDependency("accessor",F.POSITION):J.attributes.position;X.push(N)}if(K){let N=F.NORMAL!==void 0?Q.getDependency("accessor",F.NORMAL):J.attributes.normal;Y.push(N)}if(W){let N=F.COLOR_0!==void 0?Q.getDependency("accessor",F.COLOR_0):J.attributes.color;H.push(N)}}return Promise.all([Promise.all(X),Promise.all(Y),Promise.all(H)]).then(function(U){let G=U[0],F=U[1],N=U[2];if(Z)J.morphAttributes.position=G;if(K)J.morphAttributes.normal=F;if(W)J.morphAttributes.color=N;return J.morphTargetsRelative=!0,J})}function XL(J,$){if(J.updateMorphTargets(),$.weights!==void 0)for(let Q=0,Z=$.weights.length;Q<Z;Q++)J.morphTargetInfluences[Q]=$.weights[Q];if($.extras&&Array.isArray($.extras.targetNames)){let Q=$.extras.targetNames;if(J.morphTargetInfluences.length===Q.length){J.morphTargetDictionary={};for(let Z=0,K=Q.length;Z<K;Z++)J.morphTargetDictionary[Q[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function YL(J){let $,Q=J.extensions&&J.extensions[P9.KHR_DRACO_MESH_COMPRESSION];if(Q)$="draco:"+Q.bufferView+":"+Q.indices+":"+HY(Q.attributes);else $=J.indices+":"+HY(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,K=J.targets.length;Z<K;Z++)$+=":"+HY(J.targets[Z]);return $}function HY(J){let $="",Q=Object.keys(J).sort();for(let Z=0,K=Q.length;Z<K;Z++)$+=Q[Z]+":"+J[Q[Z]]+";";return $}function GY(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function HL(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var UL=new $9;class ON{constructor(J={},$={}){this.json=J,this.extensions={},this.plugins={},this.options=$,this.cache=new $L,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let Q=!1,Z=-1,K=!1,W=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let X=navigator.userAgent;Q=/^((?!chrome|android).)*safari/i.test(X)===!0;let Y=X.match(/Version\/(\d+)/);Z=Q&&Y?parseInt(Y[1],10):-1,K=X.indexOf("Firefox")>-1,W=K?X.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||Q&&Z<17||K&&W<98)this.textureLoader=new JK(this.options.manager);else this.textureLoader=new ZK(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new EQ(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,$){let Q=this,Z=this.json,K=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(W){return W._markDefs&&W._markDefs()}),Promise.all(this._invokeAll(function(W){return W.beforeRoot&&W.beforeRoot()})).then(function(){return Promise.all([Q.getDependencies("scene"),Q.getDependencies("animation"),Q.getDependencies("camera")])}).then(function(W){let X={scene:W[0][Z.scene||0],scenes:W[0],animations:W[1],cameras:W[2],asset:Z.asset,parser:Q,userData:{}};return VJ(K,X,Z),u7(X,Z),Promise.all(Q._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(X)})).then(function(){for(let Y of X.scenes)Y.updateMatrixWorld();J(X)})}).catch($)}_markDefs(){let J=this.json.nodes||[],$=this.json.skins||[],Q=this.json.meshes||[];for(let Z=0,K=$.length;Z<K;Z++){let W=$[Z].joints;for(let X=0,Y=W.length;X<Y;X++)J[W[X]].isBone=!0}for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];if(W.mesh!==void 0){if(this._addNodeRef(this.meshCache,W.mesh),W.skin!==void 0)Q[W.mesh].isSkinnedMesh=!0}if(W.camera!==void 0)this._addNodeRef(this.cameraCache,W.camera)}}_addNodeRef(J,$){if($===void 0)return;if(J.refs[$]===void 0)J.refs[$]=J.uses[$]=0;J.refs[$]++}_getNodeRef(J,$,Q){if(J.refs[$]<=1)return Q;let Z=Q.clone(),K=(W,X)=>{let Y=this.associations.get(W);if(Y!=null)this.associations.set(X,Y);for(let[H,U]of W.children.entries())K(U,X.children[H])};return K(Q,Z),Z.name+="_instance_"+J.uses[$]++,Z}_invokeOne(J){let $=Object.values(this.plugins);$.push(this);for(let Q=0;Q<$.length;Q++){let Z=J($[Q]);if(Z)return Z}return null}_invokeAll(J){let $=Object.values(this.plugins);$.unshift(this);let Q=[];for(let Z=0;Z<$.length;Z++){let K=J($[Z]);if(K)Q.push(K)}return Q}getDependency(J,$){let Q=J+":"+$,Z=this.cache.get(Q);if(!Z){switch(J){case"scene":Z=this.loadScene($);break;case"node":Z=this._invokeOne(function(K){return K.loadNode&&K.loadNode($)});break;case"mesh":Z=this._invokeOne(function(K){return K.loadMesh&&K.loadMesh($)});break;case"accessor":Z=this.loadAccessor($);break;case"bufferView":Z=this._invokeOne(function(K){return K.loadBufferView&&K.loadBufferView($)});break;case"buffer":Z=this.loadBuffer($);break;case"material":Z=this._invokeOne(function(K){return K.loadMaterial&&K.loadMaterial($)});break;case"texture":Z=this._invokeOne(function(K){return K.loadTexture&&K.loadTexture($)});break;case"skin":Z=this.loadSkin($);break;case"animation":Z=this._invokeOne(function(K){return K.loadAnimation&&K.loadAnimation($)});break;case"camera":Z=this.loadCamera($);break;default:if(Z=this._invokeOne(function(K){return K!=this&&K.getDependency&&K.getDependency(J,$)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add(Q,Z)}return Z}getDependencies(J){let $=this.cache.get(J);if(!$){let Q=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];$=Promise.all(Z.map(function(K,W){return Q.getDependency(J,W)})),this.cache.add(J,$)}return $}loadBuffer(J){let $=this.json.buffers[J],Q=this.fileLoader;if($.type&&$.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+$.type+" buffer type is not supported.");if($.uri===void 0&&J===0)return Promise.resolve(this.extensions[P9.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(K,W){Q.load(z6.resolveURL($.uri,Z.path),K,void 0,function(){W(Error('THREE.GLTFLoader: Failed to load buffer "'+$.uri+'".'))})})}loadBufferView(J){let $=this.json.bufferViews[J];return this.getDependency("buffer",$.buffer).then(function(Q){let Z=$.byteLength||0,K=$.byteOffset||0;return Q.slice(K,K+Z)})}loadAccessor(J){let $=this,Q=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let W=XY[Z.type],X=L$[Z.componentType],Y=Z.normalized===!0,H=new X(Z.count*W);return Promise.resolve(new r9(H,W,Y))}let K=[];if(Z.bufferView!==void 0)K.push(this.getDependency("bufferView",Z.bufferView));else K.push(null);if(Z.sparse!==void 0)K.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),K.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(K).then(function(W){let X=W[0],Y=XY[Z.type],H=L$[Z.componentType],U=H.BYTES_PER_ELEMENT,G=U*Y,F=Z.byteOffset||0,N=Z.bufferView!==void 0?Q.bufferViews[Z.bufferView].byteStride:void 0,q=Z.normalized===!0,O,B;if(N&&N!==G){let R=Math.floor(F/N),E="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+R+":"+Z.count,P=$.cache.get(E);if(!P)O=new H(X,R*N,Z.count*N/U),P=new Q$(O,N/U),$.cache.add(E,P);B=new E6(P,Y,F%N/U,q)}else{if(X===null)O=new H(Z.count*Y);else O=new H(X,F,Z.count*Y);B=new r9(O,Y,q)}if(Z.sparse!==void 0){let R=XY.SCALAR,E=L$[Z.sparse.indices.componentType],P=Z.sparse.indices.byteOffset||0,k=Z.sparse.values.byteOffset||0,V=new E(W[1],P,Z.sparse.count*R),z=new H(W[2],k,Z.sparse.count*Y);if(X!==null)B=new r9(B.array.slice(),B.itemSize,B.normalized);B.normalized=!1;for(let w=0,D=V.length;w<D;w++){let L=V[w];if(B.setX(L,z[w*Y]),Y>=2)B.setY(L,z[w*Y+1]);if(Y>=3)B.setZ(L,z[w*Y+2]);if(Y>=4)B.setW(L,z[w*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}B.normalized=q}return B})}loadTexture(J){let $=this.json,Q=this.options,K=$.textures[J].source,W=$.images[K],X=this.textureLoader;if(W.uri){let Y=Q.manager.getHandler(W.uri);if(Y!==null)X=Y}return this.loadTextureImage(J,K,X)}loadTextureImage(J,$,Q){let Z=this,K=this.json,W=K.textures[J],X=K.images[$],Y=(X.uri||X.bufferView)+":"+W.sampler;if(this.textureCache[Y])return this.textureCache[Y];let H=this.loadImageSource($,Q).then(function(U){if(U.flipY=!1,U.name=W.name||X.name||"",U.name===""&&typeof X.uri==="string"&&X.uri.startsWith("data:image/")===!1)U.name=X.uri;let F=(K.samplers||{})[W.sampler]||{};return U.magFilter=uU[F.magFilter]||L8,U.minFilter=uU[F.minFilter]||v7,U.wrapS=dU[F.wrapS]||V6,U.wrapT=dU[F.wrapT]||V6,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==D7&&U.minFilter!==L8,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=H,H}loadImageSource(J,$){let Q=this,Z=this.json,K=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let W=Z.images[J],X=self.URL||self.webkitURL,Y=W.uri||"",H=!1;if(W.bufferView!==void 0)Y=Q.getDependency("bufferView",W.bufferView).then(function(G){H=!0;let F=new Blob([G],{type:W.mimeType});return Y=X.createObjectURL(F),Y});else if(W.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(Y).then(function(G){return new Promise(function(F,N){let q=F;if($.isImageBitmapLoader===!0)q=function(O){let B=new Z8(O);B.needsUpdate=!0,F(B)};$.load(z6.resolveURL(G,K.path),q,void 0,N)})}).then(function(G){if(H===!0)X.revokeObjectURL(Y);return u7(G,W),G.userData.mimeType=W.mimeType||HL(W.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),G});return this.sourceCache[J]=U,U}assignTexture(J,$,Q,Z){let K=this;return this.getDependency("texture",Q.index).then(function(W){if(!W)return null;if(Q.texCoord!==void 0&&Q.texCoord>0)W=W.clone(),W.channel=Q.texCoord;if(K.extensions[P9.KHR_TEXTURE_TRANSFORM]){let X=Q.extensions!==void 0?Q.extensions[P9.KHR_TEXTURE_TRANSFORM]:void 0;if(X){let Y=K.associations.get(W);W=K.extensions[P9.KHR_TEXTURE_TRANSFORM].extendTexture(W,X),K.associations.set(W,Y)}}if(Z!==void 0)W.colorSpace=Z;return J[$]=W,W})}assignFinalMaterial(J){let{geometry:$,material:Q}=J,Z=$.attributes.tangent===void 0,K=$.attributes.color!==void 0,W=$.attributes.normal===void 0;if(J.isPoints){let X="PointsMaterial:"+Q.uuid,Y=this.cache.get(X);if(!Y)Y=new QJ,f8.prototype.copy.call(Y,Q),Y.color.copy(Q.color),Y.map=Q.map,Y.sizeAttenuation=!1,this.cache.add(X,Y);Q=Y}else if(J.isLine){let X="LineBasicMaterial:"+Q.uuid,Y=this.cache.get(X);if(!Y)Y=new YQ,f8.prototype.copy.call(Y,Q),Y.color.copy(Q.color),Y.map=Q.map,this.cache.add(X,Y);Q=Y}if(Z||K||W){let X="ClonedMaterial:"+Q.uuid+":";if(Z)X+="derivative-tangents:";if(K)X+="vertex-colors:";if(W)X+="flat-shading:";let Y=this.cache.get(X);if(!Y){if(Y=Q.clone(),K)Y.vertexColors=!0;if(W)Y.flatShading=!0;if(Z){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(X,Y),this.associations.set(Y,this.associations.get(Q))}Q=Y}J.material=Q}getMaterialType(){return o0}loadMaterial(J){let $=this,Q=this.json,Z=this.extensions,K=Q.materials[J],W,X={},Y=K.extensions||{},H=[];if(Y[P9.KHR_MATERIALS_UNLIT]){let G=Z[P9.KHR_MATERIALS_UNLIT];W=G.getMaterialType(),H.push(G.extendParams(X,K,$))}else{let G=K.pbrMetallicRoughness||{};if(X.color=new b0(1,1,1),X.opacity=1,Array.isArray(G.baseColorFactor)){let F=G.baseColorFactor;X.color.setRGB(F[0],F[1],F[2],s8),X.opacity=F[3]}if(G.baseColorTexture!==void 0)H.push($.assignTexture(X,"map",G.baseColorTexture,K8));if(X.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,X.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)H.push($.assignTexture(X,"metalnessMap",G.metallicRoughnessTexture)),H.push($.assignTexture(X,"roughnessMap",G.metallicRoughnessTexture));W=this._invokeOne(function(F){return F.getMaterialType&&F.getMaterialType(J)}),H.push(Promise.all(this._invokeAll(function(F){return F.extendMaterialParams&&F.extendMaterialParams(J,X)})))}if(K.doubleSided===!0)X.side=o9;let U=K.alphaMode||YY.OPAQUE;if(U===YY.BLEND)X.transparent=!0,X.depthWrite=!1;else if(X.transparent=!1,U===YY.MASK)X.alphaTest=K.alphaCutoff!==void 0?K.alphaCutoff:0.5;if(K.normalTexture!==void 0&&W!==h9){if(H.push($.assignTexture(X,"normalMap",K.normalTexture)),X.normalScale=new R0(1,1),K.normalTexture.scale!==void 0){let G=K.normalTexture.scale;X.normalScale.set(G,G)}}if(K.occlusionTexture!==void 0&&W!==h9){if(H.push($.assignTexture(X,"aoMap",K.occlusionTexture)),K.occlusionTexture.strength!==void 0)X.aoMapIntensity=K.occlusionTexture.strength}if(K.emissiveFactor!==void 0&&W!==h9){let G=K.emissiveFactor;X.emissive=new b0().setRGB(G[0],G[1],G[2],s8)}if(K.emissiveTexture!==void 0&&W!==h9)H.push($.assignTexture(X,"emissiveMap",K.emissiveTexture,K8));return Promise.all(H).then(function(){let G=new W(X);if(K.name)G.name=K.name;if(u7(G,K),$.associations.set(G,{materials:J}),K.extensions)VJ(Z,G,K);return G})}createUniqueName(J){let $=f9.sanitizeNodeName(J||"");if($ in this.nodeNamesUsed)return $+"_"+ ++this.nodeNamesUsed[$];else return this.nodeNamesUsed[$]=0,$}loadGeometries(J){let $=this,Q=this.extensions,Z=this.primitiveCache;function K(X){return Q[P9.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(X,$).then(function(Y){return cU(Y,X,$)})}let W=[];for(let X=0,Y=J.length;X<Y;X++){let H=J[X],U=YL(H),G=Z[U];if(G)W.push(G.promise);else{let F;if(H.extensions&&H.extensions[P9.KHR_DRACO_MESH_COMPRESSION])F=K(H);else F=cU(new b9,H,$);if(H.mode===G7.TRIANGLE_STRIP)F=F.then((N)=>cX(N,$Q));else if(H.mode===G7.TRIANGLE_FAN)F=F.then((N)=>cX(N,J$));Z[U]={primitive:H,promise:F},W.push(F)}}return Promise.all(W)}loadMesh(J){let $=this,Q=this.json,Z=this.extensions,K=Q.meshes[J],W=K.primitives,X=[];for(let Y=0,H=W.length;Y<H;Y++){let U=W[Y].material===void 0?KL(this.cache):this.getDependency("material",W[Y].material);X.push(U)}return X.push($.loadGeometries(W)),Promise.all(X).then(async function(Y){let H=Y.slice(0,Y.length-1),U=Y[Y.length-1],G=[];for(let N=0,q=U.length;N<q;N++){let O=U[N],B=W[N],R,E=H[N];if(B.mode===G7.TRIANGLES||B.mode===G7.TRIANGLE_STRIP||B.mode===G7.TRIANGLE_FAN||B.mode===void 0){let P=K.isSkinnedMesh===!0,k=O.hasAttribute("skinIndex")&&O.hasAttribute("skinWeight");if(P&&k===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(R=P&&k?new lZ(O,E):new A0(O,E),R.isSkinnedMesh===!0)R.normalizeSkinWeights()}else if(B.mode===G7.LINES)R=new uZ(O,E);else if(B.mode===G7.LINE_STRIP)R=new K$(O,E);else if(B.mode===G7.LINE_LOOP)R=new dZ(O,E);else if(B.mode===G7.POINTS)R=new W$(O,E);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+B.mode);if(Object.keys(R.geometry.morphAttributes).length>0)XL(R,K);if(R.name=$.createUniqueName(K.name||"mesh_"+J),u7(R,K),B.extensions)VJ(Z,R,B);$.assignFinalMaterial(R),G.push(R)}for(let N=0,q=G.length;N<q;N++)$.associations.set(G[N],{meshes:J,primitives:N});if(G.length===1){if(K.extensions)VJ(Z,G[0],K);return G[0]}let F=new S9;if(K.extensions)VJ(Z,F,K);$.associations.set(F,{meshes:J});for(let N=0,q=G.length;N<q;N++)F.add(G[N]);return F})}loadCamera(J){let $,Q=this.json.cameras[J],Z=Q[Q.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(Q.type==="perspective")$=new G8(b7.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if(Q.type==="orthographic")$=new W6(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if(Q.name)$.name=this.createUniqueName(Q.name);return u7($,Q),Promise.resolve($)}loadSkin(J){let $=this.json.skins[J],Q=[];for(let Z=0,K=$.joints.length;Z<K;Z++)Q.push(this._loadNodeShallow($.joints[Z]));if($.inverseBindMatrices!==void 0)Q.push(this.getDependency("accessor",$.inverseBindMatrices));else Q.push(null);return Promise.all(Q).then(function(Z){let K=Z.pop(),W=Z,X=[],Y=[];for(let H=0,U=W.length;H<U;H++){let G=W[H];if(G){X.push(G);let F=new $9;if(K!==null)F.fromArray(K.array,H*16);Y.push(F)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',$.joints[H])}return new XQ(X,Y)})}loadAnimation(J){let $=this.json,Q=this,Z=$.animations[J],K=Z.name?Z.name:"animation_"+J,W=[],X=[],Y=[],H=[],U=[];for(let G=0,F=Z.channels.length;G<F;G++){let N=Z.channels[G],q=Z.samplers[N.sampler],O=N.target,B=O.node,R=Z.parameters!==void 0?Z.parameters[q.input]:q.input,E=Z.parameters!==void 0?Z.parameters[q.output]:q.output;if(O.node===void 0)continue;W.push(this.getDependency("node",B)),X.push(this.getDependency("accessor",R)),Y.push(this.getDependency("accessor",E)),H.push(q),U.push(O)}return Promise.all([Promise.all(W),Promise.all(X),Promise.all(Y),Promise.all(H),Promise.all(U)]).then(function(G){let F=G[0],N=G[1],q=G[2],O=G[3],B=G[4],R=[];for(let P=0,k=F.length;P<k;P++){let V=F[P],z=N[P],w=q[P],D=O[P],L=B[P];if(V===void 0)continue;if(V.updateMatrix)V.updateMatrix();let M=Q._createAnimationTracks(V,z,w,D,L);if(M)for(let c=0;c<M.length;c++)R.push(M[c])}let E=new sJ(K,void 0,R);return u7(E,Z),E})}createNodeMesh(J){let $=this.json,Q=this,Z=$.nodes[J];if(Z.mesh===void 0)return null;return Q.getDependency("mesh",Z.mesh).then(function(K){let W=Q._getNodeRef(Q.meshCache,Z.mesh,K);if(Z.weights!==void 0)W.traverse(function(X){if(!X.isMesh)return;for(let Y=0,H=Z.weights.length;Y<H;Y++)X.morphTargetInfluences[Y]=Z.weights[Y]});return W})}loadNode(J){let $=this.json,Q=this,Z=$.nodes[J],K=Q._loadNodeShallow(J),W=[],X=Z.children||[];for(let H=0,U=X.length;H<U;H++)W.push(Q.getDependency("node",X[H]));let Y=Z.skin===void 0?Promise.resolve(null):Q.getDependency("skin",Z.skin);return Promise.all([K,Promise.all(W),Y]).then(function(H){let U=H[0],G=H[1],F=H[2];if(F!==null)U.traverse(function(N){if(!N.isSkinnedMesh)return;N.bind(F,UL)});for(let N=0,q=G.length;N<q;N++)U.add(G[N]);if(U.userData.pivot!==void 0&&G.length>0){let N=U.userData.pivot,q=G[0];U.pivot=new T().fromArray(N),U.position.x-=N[0],U.position.y-=N[1],U.position.z-=N[2],q.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let $=this.json,Q=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let K=$.nodes[J],W=K.name?Z.createUniqueName(K.name):"",X=[],Y=Z._invokeOne(function(H){return H.createNodeMesh&&H.createNodeMesh(J)});if(Y)X.push(Y);if(K.camera!==void 0)X.push(Z.getDependency("camera",K.camera).then(function(H){return Z._getNodeRef(Z.cameraCache,K.camera,H)}));return Z._invokeAll(function(H){return H.createNodeAttachment&&H.createNodeAttachment(J)}).forEach(function(H){X.push(H)}),this.nodeCache[J]=Promise.all(X).then(function(H){let U;if(K.isBone===!0)U=new KQ;else if(H.length>1)U=new S9;else if(H.length===1)U=H[0];else U=new v9;if(U!==H[0])for(let G=0,F=H.length;G<F;G++)U.add(H[G]);if(K.name)U.userData.name=K.name,U.name=W;if(u7(U,K),K.extensions)VJ(Q,U,K);if(K.matrix!==void 0){let G=new $9;G.fromArray(K.matrix),U.applyMatrix4(G)}else{if(K.translation!==void 0)U.position.fromArray(K.translation);if(K.rotation!==void 0)U.quaternion.fromArray(K.rotation);if(K.scale!==void 0)U.scale.fromArray(K.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(K.mesh!==void 0&&Z.meshCache.refs[K.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let $=this.extensions,Q=this.json.scenes[J],Z=this,K=new S9;if(Q.name)K.name=Z.createUniqueName(Q.name);if(u7(K,Q),Q.extensions)VJ($,K,Q);let W=Q.nodes||[],X=[];for(let Y=0,H=W.length;Y<H;Y++)X.push(Z.getDependency("node",W[Y]));return Promise.all(X).then(function(Y){for(let U=0,G=Y.length;U<G;U++){let F=Y[U];if(F.parent!==null)K.add(UJ(F));else K.add(F)}let H=(U)=>{let G=new Map;for(let[F,N]of Z.associations)if(F instanceof f8||F instanceof Z8)G.set(F,N);return U.traverse((F)=>{let N=Z.associations.get(F);if(N!=null)G.set(F,N)}),G};return Z.associations=H(K),K})}_createAnimationTracks(J,$,Q,Z,K){let W=[],X=J.name?J.name:J.uuid,Y=[];function H(N){if(N.morphTargetInfluences)Y.push(N.name?N.name:N.uuid)}if(T6[K.path]===T6.weights){if(H(J),J.isGroup)J.children.forEach(H)}else Y.push(X);let U;switch(T6[K.path]){case T6.weights:U=C6;break;case T6.rotation:U=P6;break;case T6.translation:case T6.scale:U=XJ;break;default:switch(Q.itemSize){case 1:U=C6;break;case 2:case 3:default:U=XJ;break}break}let G=Z.interpolation!==void 0?ZL[Z.interpolation]:fZ,F=this._getArrayFromAccessor(Q);for(let N=0,q=Y.length;N<q;N++){let O=new U(Y[N]+"."+T6[K.path],$.array,F,G);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(O);W.push(O)}return W}_getArrayFromAccessor(J){let $=J.array;if(J.normalized){let Q=GY($.constructor),Z=new Float32Array($.length);for(let K=0,W=$.length;K<W;K++)Z[K]=$[K]*Q;$=Z}return $}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function(Q){return new(this instanceof P6?qN:EY)(this.times,this.values,this.getValueSize()/3,Q)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function NL(J,$,Q){let Z=$.attributes,K=new A8;if(Z.POSITION!==void 0){let Y=Q.json.accessors[Z.POSITION],H=Y.min,U=Y.max;if(H!==void 0&&U!==void 0){if(K.set(new T(H[0],H[1],H[2]),new T(U[0],U[1],U[2])),Y.normalized){let G=GY(L$[Y.componentType]);K.min.multiplyScalar(G),K.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let W=$.targets;if(W!==void 0){let Y=new T,H=new T;for(let U=0,G=W.length;U<G;U++){let F=W[U];if(F.POSITION!==void 0){let N=Q.json.accessors[F.POSITION],q=N.min,O=N.max;if(q!==void 0&&O!==void 0){if(H.setX(Math.max(Math.abs(q[0]),Math.abs(O[0]))),H.setY(Math.max(Math.abs(q[1]),Math.abs(O[1]))),H.setZ(Math.max(Math.abs(q[2]),Math.abs(O[2]))),N.normalized){let B=GY(L$[N.componentType]);H.multiplyScalar(B)}Y.max(H)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}K.expandByVector(Y)}J.boundingBox=K;let X=new j8;K.getCenter(X.center),X.radius=K.min.distanceTo(K.max)/2,J.boundingSphere=X}function cU(J,$,Q){let Z=$.attributes,K=[];function W(X,Y){return Q.getDependency("accessor",X).then(function(H){J.setAttribute(Y,H)})}for(let X in Z){let Y=NY[X]||X.toLowerCase();if(Y in J.attributes)continue;K.push(W(Z[X],Y))}if($.indices!==void 0&&!J.index){let X=Q.getDependency("accessor",$.indices).then(function(Y){J.setIndex(Y)});K.push(X)}if(R9.workingColorSpace!==s8&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${R9.workingColorSpace}" not supported.`);return u7(J,$),NL(J,$,Q),Promise.all(K).then(function(){return $.targets!==void 0?WL(J,$.targets,Q):J})}var qY={carmen:{Caminar:{duracion:1,paso:1.2666,cadera:0.9398},Esperar:{duracion:4.0333,paso:0.0423,cadera:0.9398},Saludar:{duracion:4.1333,paso:0.0016,cadera:0.9398},Conversar:{duracion:5.2,paso:0.0189,cadera:0.9398}},chela:{Caminar:{duracion:1,paso:1.2173,cadera:0.8981},Esperar:{duracion:4.0333,paso:0.0315,cadera:0.8981},Saludar:{duracion:4.1333,paso:0.0021,cadera:0.8981},Conversar:{duracion:5.2,paso:0.0335,cadera:0.8981}},colmadero:{Caminar:{duracion:4.2333,paso:2.9774,cadera:0.9489},Esperar:{duracion:4.0333,paso:0.0365,cadera:0.9489},Saludar:{duracion:4.1333,paso:0.0023,cadera:0.9489},Conversar:{duracion:5.2,paso:0.0211,cadera:0.9489},Atender:{duracion:6.5,paso:0.0321,cadera:0.9489}},"luis-upright":{Caminar:{duracion:4.2333,paso:2.8453,cadera:0.9064},Esperar:{duracion:4.0333,paso:0.0146,cadera:0.9064},Saludar:{duracion:4.1333,paso:0.0027,cadera:0.9064},Conversar:{duracion:5.2,paso:0.0373,cadera:0.9064}},marisol:{Caminar:{duracion:1,paso:1.2382,cadera:0.9197},Esperar:{duracion:4.0333,paso:0.0433,cadera:0.9197},Saludar:{duracion:4.1333,paso:0.0015,cadera:0.9197},Conversar:{duracion:5.2,paso:0.0117,cadera:0.9197}},nando:{Caminar:{duracion:4.2333,paso:3.015,cadera:0.9658},Esperar:{duracion:4.0333,paso:0.0378,cadera:0.9658},Saludar:{duracion:4.1333,paso:0.0015,cadera:0.9658},Conversar:{duracion:5.2,paso:0.0148,cadera:0.9658},Sentado:{duracion:0.0667,paso:0,cadera:0.9658}},papo:{Caminar:{duracion:4.2333,paso:3.1291,cadera:0.97},Esperar:{duracion:4.0333,paso:0.024,cadera:0.97},Saludar:{duracion:4.1333,paso:0.0026,cadera:0.97},Conversar:{duracion:5.2,paso:0.0285,cadera:0.97},Sentado:{duracion:0.0667,paso:0,cadera:0.97}},"rafa-upright":{Caminar:{duracion:4.2333,paso:2.7635,cadera:0.8817},Esperar:{duracion:4.0333,paso:0.0217,cadera:0.8817},Saludar:{duracion:4.1333,paso:0.0021,cadera:0.8817},Conversar:{duracion:5.2,paso:0.0259,cadera:0.8817}},tata:{Caminar:{duracion:1,paso:1.0356,cadera:0.7855},Esperar:{duracion:4.0333,paso:0.0435,cadera:0.7855},Saludar:{duracion:4.1333,paso:0.0015,cadera:0.7855},Conversar:{duracion:5.2,paso:0.0495,cadera:0.7855}},yari:{Caminar:{duracion:1,paso:1.2866,cadera:0.9658},Esperar:{duracion:4.0333,paso:0.0633,cadera:0.9658},Saludar:{duracion:4.1333,paso:0.0017,cadera:0.9658},Conversar:{duracion:5.2,paso:0.0187,cadera:0.9658}},yuni:{Caminar:{duracion:4.2333,paso:2.6498,cadera:0.9424},Esperar:{duracion:4.0333,paso:0.0303,cadera:0.9424},Saludar:{duracion:4.1333,paso:0.0039,cadera:0.9424},Conversar:{duracion:5.2,paso:0.0794,cadera:0.9424},Sentado:{duracion:0.0667,paso:0,cadera:0.9424}}};var V$=[{id:"rafa",nombre:"Don Rafa",modelo:"rafa-upright",sexo:"m",mayor:!0},{id:"marisol",nombre:"Marisol",modelo:"marisol",sexo:"f"},{id:"luis",nombre:"Luis",modelo:"luis-upright",sexo:"m"},{id:"carmen",nombre:"Carmen",modelo:"carmen",sexo:"f",mayor:!0},{id:"yuni",nombre:"Yuni",modelo:"yuni",sexo:"m"},{id:"tata",nombre:"Doña Tata",modelo:"tata",sexo:"f",mayor:!0},{id:"papo",nombre:"Papo",modelo:"papo",sexo:"m"},{id:"yari",nombre:"Yari",modelo:"yari",sexo:"f"},{id:"nando",nombre:"Nando",modelo:"nando",sexo:"m"},{id:"chela",nombre:"Chela",modelo:"chela",sexo:"f"}],PK={id:"colmadero",nombre:"Kiko",modelo:"colmadero",sexo:"m"},OY=["rafa","marisol","luis","carmen"],SQ=0.4,FL=new Map([...V$,PK].map((J)=>[J.id,J])),RN=(J)=>FL.get(J)||null,jQ=(J)=>!!(J&&qY[J.modelo]?.Caminar),LN=(J)=>qY[J?.modelo]||{};function RY(J){return Array.isArray(J)&&J.length===4&&new Set(J).size===4&&J.every(($)=>V$.some((Q)=>Q.id===$))?J:OY.slice()}var H8=(J=0,$=0,Q=0)=>new T(J,$,Q),kY=(J)=>J<=0?0:J>=1?1:J*J*(3-2*J),IK=(J,$,Q)=>kY((J-$+Q)/(2*Q)),w8=(J,$)=>J+Math.random()*($-J),zK=(J)=>J[Math.floor(Math.random()*J.length)];function VN(J,$){if($>3.3)return-0.15*IK($,3.5,0.12)+0.31*IK($,8.7,0.12);return-0.15*IK(J,4.65,0.12)+0.16*IK(J,11.7,0.12)}var BN=new FY,AK=new Map;function hQ(J){if(!AK.has(J.modelo))AK.set(J.modelo,Promise.all([BN.loadAsync(`/models/${J.modelo}.glb`),BN.loadAsync(`/models/anim/${J.modelo}.glb`)]).then(([$,Q])=>{let Z={};for(let K of Q.animations)K.tracks=K.tracks.filter((W)=>W.name.endsWith(".quaternion")||W.name==="Hips.position"),Z[K.name]=K;return{p:J,gltf:$,acciones:Z,datos:LN(J)}}).catch(($)=>{throw AK.delete(J.modelo),$}));return AK.get(J.modelo)}var yQ=H8(),TK=H8(),vQ=H8(),fQ=H8(),DN=H8(),kN=H8(),_N=new E9,TN=new E9,MN=new E9,CN=new E9,LY=new E9;function wN(J,$){J.matrixWorld.decompose(DN,MN,kN),J.parent.matrixWorld.decompose(DN,CN,kN),J.quaternion.copy(CN.invert()).multiply($).multiply(MN),J.updateMatrixWorld(!0)}function PN(J,$,Q,Z){yQ.setFromMatrixPosition(J.matrixWorld),TK.setFromMatrixPosition($.matrixWorld),vQ.subVectors(TK,yQ).normalize(),wN(J,TN.identity().slerp(_N.setFromUnitVectors(vQ,Q),Z))}function EL(J,$){let Q=J.h;if(!Q.Head||!Q.headfront||$<=0)return;for(let[Z,K]of[[Q.neck,0.45],[Q.Head,1]]){if(!Z)continue;yQ.setFromMatrixPosition(Q.Head.matrixWorld),TK.setFromMatrixPosition(Q.headfront.matrixWorld),vQ.subVectors(TK,yQ).normalize(),fQ.subVectors(J.mirar,yQ).normalize();let W=vQ.angleTo(fQ);if(W<0.001)continue;wN(Z,TN.identity().slerp(_N.setFromUnitVectors(vQ,fQ),$*K*Math.min(W,1.1)/W))}}function qL(J){let $=kY(J.alcanza),Q=J.alcanzaAlto||0,Z=J.h;if($<=0||!Z.RightArm)return;J.holder.getWorldQuaternion(LY),PN(Z.RightArm,Z.RightForeArm,fQ.set(-0.16,-0.3+0.85*Q,0.9).normalize().applyQuaternion(LY),$),PN(Z.RightForeArm,Z.RightHand,fQ.set(-0.06,-0.05+0.75*Q,1).normalize().applyQuaternion(LY),$)}var w6=(...J)=>J.map(([$,Q])=>H8($,0,Q)),VY=w6([10,-0.25],[6.5,-0.3],[4.6,-0.4],[3.3,-0.62],[2.25,-1.1],[1.2,-1.8]),OL=w6([1.2,-1.8],[0.35,-2.15],[-0.6,-2.05],[-1.35,-1.65]),BY=w6([-1.35,-1.65],[-2.35,-1],[-2.65,0.2],[-4.5,0.95],[-9,1.15],[-17,1.2]),RL=P8.z+0.04-(P8.fondo+0.16)/2,LL=P8.z+0.04+(P8.fondo+0.16)/2,IN=H8(-0.6,0,RL-0.19),bQ=H8(-0.6,0,LL+0.42),zN=w6([1.2,-1.8],[0.45,-2.4],[-0.2,bQ.z+0.2],[bQ.x,bQ.z]),AN=w6([bQ.x,bQ.z],[-1,-2.62],[-1.28,-2.1],[-1.35,-1.65]),DY=(...J)=>J.reduce(($,Q)=>$.concat($.length?Q.slice(1):Q),[]),BJ=(J)=>J.slice().reverse(),_K={enfrente:()=>{let J=w8(9.45,10.05),$=w6([-34,J],[-12,J+w8(-0.1,0.1)],[12,J+w8(-0.1,0.1)],[34,J]);return Math.random()<0.5?$:BJ($)},lateral:()=>{let J=w8(12.15,12.45),$=w6([J,-36],[J,-10],[J,1.2],[J+1.2,2.25],[20,2.3],[36,2.4]);return Math.random()<0.5?$:BJ($)}};function SN({scene:J,camera:$,enMesa:Q=()=>[],pocos:Z=!1}){let K=[],W=new Map,X=new $J,Y=new $9,H=new j8(H8(),1.3),U=null,G=0,F=0,N=w8(8,16),q=w8(20,35),O=-1e9,B=null,R=!1,E=!1,P=!1;function k(j){let i=UJ(j.gltf.scene),X0=new S9;X0.add(i);let K0={},H0=null;if(i.traverse((D0)=>{if(D0.isBone)K0[D0.name]=D0;if(D0.isSkinnedMesh)H0=D0}),!H0||!K0.Hips)return null;H0.material=H0.material.clone(),H0.material.roughness=0.83,H0.material.specularIntensity=0.25,H0.material.emissiveIntensity=SQ,H0.castShadow=!1,H0.receiveShadow=!0,H0.morphTargetInfluences?.fill(0),X0.updateMatrixWorld(!0),H0.computeBoundingBox();let Z0=H0.boundingBox.clone().applyMatrix4(H0.matrixWorld),S=H8().setFromMatrixPosition(K0.Hips.matrixWorld);i.position.set(-S.x,-Z0.min.y,-S.z),X0.updateMatrixWorld(!0),H0.computeBoundingSphere(),H0.boundingSphere.radius*=1.3;let x=new YJ(i),s={};for(let[D0,V0]of Object.entries(j.acciones))s[D0]=x.clipAction(V0);let Y0=j.datos.Caminar,t=Y0?Y0.paso/Y0.duracion:1.1;return{t:j,p:j.p,root:i,holder:X0,h:K0,malla:H0,mixer:x,acc:s,actual:null,vClip:t,marcha:0,t:0,alcanza:0,alcanzaAlto:0,mirar:H8(0,1.4,5),mira:0,yaw:0}}function V(j,i,X0=0.4){if(j.actual===i)return;let K0=j.acc[i]||j.acc.Esperar;if(!K0)return;if(K0.reset(),K0.setEffectiveTimeScale(1),K0.setEffectiveWeight(1),i==="Saludar")K0.setLoop(tW,1),K0.clampWhenFinished=!0;K0.fadeIn(X0).play();let H0=j.actual&&j.acc[j.actual];if(H0&&H0!==K0)H0.fadeOut(X0);j.actual=i}function z(){let j=new Set(Q()),i=new Set(K.map((X0)=>X0.p.id));return V$.filter((X0)=>jQ(X0)&&!j.has(X0.id)&&!i.has(X0.id))}function w(){let j=z(),i=j.filter((K0)=>W.has(K0.modelo)),X0=j.filter((K0)=>!W.has(K0.modelo));if(X0.length&&!P){P=!0;let K0=zK(X0);hQ(K0).then((H0)=>W.set(K0.modelo,H0)).catch((H0)=>console.warn("Transeúnte sin cargar",K0.id,H0)).finally(()=>{P=!1})}return i.length?W.get(zK(i).modelo):null}function D(){let j=w();if(!j)return null;let i=k(j);if(!i)return null;return i.velocidad=i.vClip*(i.p.mayor?w8(0.8,0.9):w8(0.95,1.08)),J.add(i.holder),i}function L(j){J.remove(j.holder),j.mixer.stopAllAction();let i=K.indexOf(j);if(i>=0)K.splice(i,1)}function M(j){let i=new J6(j,!1,"centripetal",0.5);return{tipo:"ruta",curva:i,largo:i.getLength(),d:0}}function c(j,i,X0){j.guion=i,j.i=0,j.zona=X0,j.malla.castShadow=X0==="patio";let K0=i[0].curva,H0=K0.getPointAt(0),Z0=K0.getTangentAt(0);j.yaw=Math.atan2(Z0.x,Z0.z),j.holder.position.set(H0.x,VN(H0.x,H0.z),H0.z),j.holder.rotation.y=j.yaw,V(j,"Caminar",0),j.acc.Caminar?.setEffectiveTimeScale(j.velocidad/j.vClip),K.push(j)}let b=(j,i,X0,K0=2.6)=>{let H0=i-j.yaw;return H0=Math.atan2(Math.sin(H0),Math.cos(H0)),j.yaw+=Math.max(-K0*X0,Math.min(K0*X0,H0)),j.holder.rotation.y=j.yaw,Math.abs(H0)};function l(j,i,X0){let K0=j.guion[j.i];if(!K0){if(!j.fijo){L(j);return}j.guion=[y()],j.i=0,K0=j.guion[0],K0.t0=j.t}if(j.t+=i,K0.tipo==="ruta"){let H0=j.guion[j.i+1],Z0=H0&&H0.tipo!=="ruta",S=K0.largo-K0.d,x=Z0?Math.min(1,S/0.6):1;j.marcha+=(x-j.marcha)*Math.min(1,i*(x<j.marcha?5:2.2));let s=j.velocidad*Math.max(j.marcha,Z0?0.15:0.25);K0.d=Math.min(K0.largo,K0.d+s*i),V(j,"Caminar",0.35),j.acc.Caminar?.setEffectiveTimeScale(Math.max(0.3,s/j.vClip));let Y0=K0.d/K0.largo,t=K0.curva.getPointAt(Y0),D0=K0.curva.getTangentAt(Y0);if(j.holder.position.set(t.x,VN(t.x,t.z),t.z),b(j,Math.atan2(D0.x,D0.z),i),j.mira=Math.max(0,j.mira-i*2),K0.d>=K0.largo-0.001){if(j.i++,j.guion[j.i])j.guion[j.i].t0=j.t}}else if(K0.tipo==="quieto"){j.marcha=0;let H0=j.t-(K0.t0??j.t);if(K0.saludo)r(j,K0,H0,X0);if(V(j,K0.clip||"Esperar",0.45),K0.yaw!=null)b(j,K0.yaw,i,2);if(K0.miraA?.h?.Head)K0.mira=K0.miraA.h.Head.getWorldPosition(K0.mira||H8());else if(K0.vigila)K0.mira=h(K0,X0);if(K0.mira)j.mirar.lerp(K0.mira,1-Math.exp(-i*3)),j.mira=Math.min(1,j.mira+i*2);else j.mira=Math.max(0,j.mira-i*2);if(K0.atender&&!K0.pedido){if(K0.pedido=!0,U)f(U,j)}if(K0.brazo){let Z0=Math.min(1,H0/0.6,(K0.dur-H0)/0.6);j.alcanza=Math.max(0,Z0),j.alcanzaAlto=K0.brazo.alto;let S=K0.brazo.entrega;if(S&&K.includes(S))S.alcanza=j.alcanza,S.alcanzaAlto=0.1}if(H0>=K0.dur){if(j.i++,j.guion[j.i])j.guion[j.i].t0=j.t;if(K0.brazo){if(j.alcanza=0,K0.brazo.entrega)K0.brazo.entrega.alcanza=0}}}}function r(j,i,X0,K0){if(!i.decidido){i.decidido=!0;let H0=K0?.view,Z0=H0&&(H0.phase==="lobby"||H0.phase==="playing")&&(E||!K0.habla?.size&&F>150&&F-O>420);if(E=!1,!Z0){i.dur=0;return}let S=[0,1,2,3].filter((Y0)=>H0.bots?.[Y0]),x=S.length&&Math.random()<0.8?zK(S):null;i.seat=x,O=F;let s=x==null?H8(0,1.2,0):K0.cabezas?.[x]?.clone()||H8(0,1.2,0);i.mira=s.clone(),i.yaw=Math.atan2(s.x-j.holder.position.x,s.z-j.holder.position.z),i.clip="Saludar"}if(i.dur===0)return;if(!i.dicho&&X0>0.5){i.dicho=!0;let H0=j.h.Head.getWorldPosition(H8());B={seat:i.seat,p:H0,t0:F,hasta:F+5},dispatchEvent(new CustomEvent("mesa:saludo",{detail:{seat:i.seat,voz:j.p.sexo,pos:H0.toArray()}}))}}function v(j){let i=k(j);if(!i)return;i.fijo=!0,i.zona="colmado",U=i,i.malla.castShadow=!0,i.holder.position.copy(IN),i.yaw=0,i.holder.rotation.y=0,i.mirar.set(0,0.8,0),i.guion=[y()],i.i=0,i.guion[0].t0=0,V(i,"Esperar",0),J.add(i.holder)}function y(){return{tipo:"quieto",dur:1e9,yaw:0,vigila:!0}}function h(j,i){if(j.cambio&&F<j.cambio)return j.mira;j.cambio=F+w8(3,6.5);let X0=i?.view,K0=Math.random(),H0=i?.cabezas,Z0=K.find((S)=>S.zona==="patio");if(Z0&&K0<0.25)return Z0.h.Head.getWorldPosition(H8());if(X0?.phase==="playing"&&K0<0.55&&H0?.[X0.turn])return H0[X0.turn].clone();if(K0<0.8)return H8(w8(-0.3,0.3),0.8,w8(-0.3,0.3));return H8(w8(-4,4),1.5,6)}function f(j,i){let X0=(H0,Z0)=>({tipo:"quieto",dur:H0,...Z0}),K0=H8(IN.x+w8(-0.5,0.5),1.72,-4.8);j.guion=[X0(1.4,{yaw:0,miraA:i}),X0(0.9,{yaw:Math.PI,mira:K0}),X0(2.2,{yaw:Math.PI,mira:K0,brazo:{alto:1}}),X0(0.9,{yaw:0,miraA:i}),X0(2.4,{yaw:0,miraA:i,brazo:{alto:0.15,entrega:i}}),X0(4,{yaw:0,miraA:i,clip:"Conversar"})],j.i=0,j.guion[0].t0=j.t}function o(){let j=Math.random()<0.6,i=Math.random()<0.5,X0=[];if(X0.push(M(j?VY:BJ(BY))),i)X0.push({tipo:"quieto",dur:3.6,saludo:!0});if(X0.push(M(j?zN:BJ(AN))),X0.push({tipo:"quieto",dur:w8(14,24),yaw:Math.PI,clip:"Conversar",...U?{miraA:U,atender:!0}:{mira:H8(-0.6,1.35,-4.6)}}),Math.random()<0.6)X0.push(M(DY(AN,BY)));else X0.push(M(DY(BJ(zN),BJ(VY))));return X0}function g(){let j=DY(VY,OL,BY);return[M(Math.random()<0.5?j:BJ(j))]}setTimeout(()=>{if(!R&&jQ(PK))hQ(PK).then((j)=>{if(!R)v(j)}).catch((j)=>console.warn("Sin colmadero",j))},4000);function a(j,i){if(R)return;if(j*=window.mesaPrisa||1,F+=j,B){if(B.e=F-B.t0,F>B.hasta)B=null}let X0=document.documentElement.classList.contains("reduced");if(!X0&&!Z&&F>N){if(N=F+w8(14,32),K.filter((H0)=>H0.zona==="calle").length<2){let H0=D();if(H0)c(H0,[M(zK([_K.enfrente,_K.enfrente,_K.lateral])())],"calle")}}if(!X0&&F>q&&!K.some((H0)=>H0.zona==="patio")){let H0=D();if(H0)q=F+w8(50,110),c(H0,Math.random()<0.65?o():g(),"patio");else q=F+3}$.updateMatrixWorld(),X.setFromProjectionMatrix(Y.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse));let K0=performance.now();for(let H0 of U?[U,...K]:K.slice()){if(l(H0,j,i),!H0.fijo&&!K.includes(H0))continue;if(H0.mixer.update(j),H.center.copy(H0.holder.position).y+=0.9,X.intersectsSphere(H))H0.holder.updateMatrixWorld(!0),EL(H0,kY(H0.mira)),qL(H0)}G+=(performance.now()-K0-G)*0.05}return window.mesaTranseunte=(j="cliente",i,X0)=>{let K0=D();if(!K0)return!1;if(j==="posa"){let[Z0,S,x=0]=X0;return c(K0,[M(w6([Z0-Math.sin(x)*0.3,S-Math.cos(x)*0.3],[Z0,S])),{tipo:"quieto",dur:1e4}],"patio"),!0}let H0=j==="calle"?[M(_K.enfrente())]:j==="cruza"?g():o();if(j==="saluda"){if(!H0.some((Z0)=>Z0.saludo))H0.splice(1,0,{tipo:"quieto",dur:3.6,saludo:!0});E=!0}return c(K0,H0,j==="calle"?"calle":"patio"),!0},window.mesaGente=()=>K.map((j)=>({quien:j.p.id,pos:j.holder.position.toArray().map((i)=>+i.toFixed(2)),clip:j.actual,marcha:+j.marcha.toFixed(2),tramo:j.i})),{update:a,get saludo(){return B},get ms(){return G},andando:()=>K.map((j)=>j.p.id),dispose(){R=!0;for(let j of K.slice())L(j);if(U)J.remove(U.holder)}}}var DJ=Math.PI*2,Q9=(J=0,$=0,Q=0)=>new T(J,$,Q),VL=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function wk(J,{onProgress:$=()=>{},cast:Q=OY}={}){let Z=new $$;Z.background=new b0("#2a2d4a"),Z.fog=new e6("#5a5670",0.017);let K=new G8(42,innerWidth/innerHeight,0.08,90);K.position.set(3.1,2.65,4.2);let W;try{W=new mX({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let X=new URLSearchParams(location.search).has("hq"),Y=!X&&/SwiftShader|llvmpipe|Software/i.test((()=>{let A=W.getContext(),d=A.getExtension("WEBGL_debug_renderer_info");return d?A.getParameter(d.UNMASKED_RENDERER_WEBGL):""})());W.setSize(innerWidth,innerHeight),W.setPixelRatio(Y?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),W.outputColorSpace=K8,W.toneMapping=n6,W.toneMappingExposure=1.24,W.shadowMap.enabled=!Y,W.shadowMap.type=c6,W.info.autoReset=!1,J.appendChild(W.domElement);let H=new dX(K,W.domElement);H.target.set(0,0.8,-0.15),H.enableDamping=!0,H.dampingFactor=0.065,H.enablePan=!1,H.minDistance=0.8,H.maxDistance=4.6,H.minPolarAngle=0.25,H.maxPolarAngle=Math.PI*0.48,H.update();let U=0.5,G=new $K("#a3a8d8","#6a4e3c",U);Z.add(G);let F=new H$("#ffa06a",0.55);F.position.set(-6,2.6,-9),Z.add(F);let N=new Y$("#ffc98a",5.2,7,Math.PI*0.32,0.6,2);N.position.set(0,C0.surfaceY+1.26,0),N.target.position.set(0,0,0);let q=new K6("#ffc07a",0.45,3.2,2);q.position.set(0,C0.surfaceY+1.2,0),Z.add(q),N.castShadow=!0,N.shadow.mapSize.set(Y?1024:2048,Y?1024:2048),N.shadow.focus=0.52,N.shadow.bias=-0.0002,N.shadow.normalBias=0.004,N.shadow.radius=3,N.shadow.camera.near=0.2,N.shadow.camera.far=4,Z.add(N,N.target);let O=new K6("#cfeee0",13,9,2);O.position.set(0,2.5,-3.5),Z.add(O);{let A=new A0(new j9(1.2,0.03,0.03),new o0({color:"#e6fff4",emissive:"#e6fff4",emissiveIntensity:4}));A.position.set(0,3.12,-3.6),Z.add(A)}let B=new Map,R=new Map;function E(A,d=0.85,W0=0){let J0=A+","+d+","+W0;if(!B.has(J0))B.set(J0,new o0({color:A,roughness:d,metalness:W0}));return B.get(J0)}function P(A,d,W0,J0=[0,0,0],k0=[1,1,1]){let F0=d.uuid;if(!R.has(F0))R.set(F0,{material:d,geos:[]});let O0=new $9().compose(Q9(...W0),new E9().setFromEuler(new V7(...J0)),Q9(...k0));A.applyMatrix4(O0),R.get(F0).geos.push(A)}function k(A,d,W0,J0,k0,F0,O0,j0=0){P(new j9(J0,k0,F0),typeof O0==="string"?E(O0):O0,[A,d,W0],[0,j0,0])}function V(A,d,W0,J0,k0,F0,O0,j0=10,n0=[0,0,0]){P(new C9(J0,k0,F0,j0),typeof O0==="string"?E(O0):O0,[A,d,W0],n0)}function z(A,d=512,W0=512){let J0=document.createElement("canvas");J0.width=d,J0.height=W0,A(J0.getContext("2d"),d,W0);let k0=new i8(J0);return k0.colorSpace=K8,k0.anisotropy=Math.min(8,W.capabilities.getMaxAnisotropy()),k0}let w=191,D=()=>{return w=Math.imul(w,1664525)+1013904223>>>0,w/4294967296},L=z((A,d,W0)=>{A.fillStyle="#65432b",A.fillRect(0,0,d,W0);for(let J0=0;J0<700;J0++){A.strokeStyle=`rgba(${D()>0.5?"170,122,70":"35,22,14"},${0.08+D()*0.2})`,A.lineWidth=0.3+D()*2,A.beginPath();let k0=D()*W0;A.moveTo(0,k0);for(let F0=0;F0<d;F0+=20)A.lineTo(F0,k0+Math.sin(F0*0.013+J0)*3);A.stroke()}}),M=new o0({map:L,roughness:0.65,color:"#e7bc8c"}),c=E("#4c3022",0.75),b=E("#287770"),l=E("#d2c5a2"),r=E("#3d938e"),v=z((A,d,W0)=>{let J0=d/2;for(let n0=0;n0<2;n0++)for(let E0=0;E0<2;E0++){let T0=E0*J0,e0=n0*J0;A.save(),A.beginPath(),A.rect(T0,e0,J0,J0),A.clip(),A.fillStyle="#c4b99f",A.fillRect(T0,e0,J0,J0);for(let[N9,Q8]of[[T0,e0],[T0+J0,e0],[T0,e0+J0],[T0+J0,e0+J0]])A.strokeStyle="#8d6450",A.lineWidth=J0*0.04,A.beginPath(),A.arc(N9,Q8,J0*0.42,0,Math.PI*2),A.stroke(),A.fillStyle="#4f6763",A.beginPath(),A.arc(N9,Q8,J0*0.13,0,Math.PI*2),A.fill(),A.strokeStyle="#c4b99f",A.lineWidth=J0*0.02,A.beginPath(),A.arc(N9,Q8,J0*0.11,0,Math.PI*2),A.stroke();let q9=T0+J0/2,F9=e0+J0/2,w9=(N9,Q8)=>{A.fillStyle=Q8,A.beginPath(),A.moveTo(q9,F9-N9),A.lineTo(q9+N9,F9),A.lineTo(q9,F9+N9),A.lineTo(q9-N9,F9),A.closePath(),A.fill()};w9(J0*0.2,"#8d6450"),w9(J0*0.13,"#c4b99f"),w9(J0*0.07,"#3a3630"),A.restore(),A.strokeStyle="#7e7563",A.lineWidth=3,A.strokeRect(T0+1.5,e0+1.5,J0-3,J0-3)}for(let n0=0;n0<9000;n0++)A.fillStyle=D()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",A.fillRect(D()*d,D()*W0,1+D()*2,1+D()*2);for(let n0=0;n0<40;n0++){let E0=A.createRadialGradient(0,0,0,0,0,1),T0=D()*d,e0=D()*W0,q9=20+D()*90;A.save(),A.translate(T0,e0),A.scale(q9,q9),E0.addColorStop(0,"rgba(40,34,26,.10)"),E0.addColorStop(1,"rgba(40,34,26,0)"),A.fillStyle=E0,A.fillRect(-1,-1,2,2),A.restore()}},1024,1024);v.wrapS=v.wrapT=V6,v.repeat.set(22.88888888888889,27.77777777777778),k(-5.7,-0.1,-4.575,20.6,0.2,15.85,new o0({map:v,roughness:0.86,color:"#9d937f"})),k(0,-0.2,8.5,40,0.1,10.3,"#2b3133"),k(0,-0.075,3.45,40,0.15,0.2,"#a8a391");for(let A=-10;A<11;A++)k(A*1.8,-0.146,6.3,0.7,0.008,0.06,"#b9ad83");k(0,1.6,-5.1,7.5,3.4,0.2,b),k(-3.8,1.6,-3.85,0.2,3.4,2.7,b),k(3.8,1.6,-3.85,0.2,3.4,2.7,b),k(-3.48,1.1,-2.52,0.7,2.3,0.32,b),k(3.45,1.1,-2.52,0.8,2.3,0.32,b),k(0,2.95,-2.52,7.5,0.42,0.35,r),k(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let A=0;A<30;A++)k(-4+A*0.276,3.15,-3.7,0.028,0.055,4.6,"#82928a");{let A=P8,d=A.tope-0.1;k(0,d/2,A.z,A.ancho,d,A.fondo,M),k(0,A.tope-0.05,A.z+0.04,A.ancho+0.18,0.1,A.fondo+0.16,M)}for(let A=0;A<3;A++)k(-0.6,1.58+A*0.48,-4.78,5.8,0.065,0.38,M),k(-0.6,1.84+A*0.48,-4.98,5.8,0.48,0.065,"#443e30");k(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),k(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");let y=[];for(let A=0;A<29;A++)y.push({pos:[-3.18+A*0.182,2.095,-4.69],scale:0.7+A%5*0.07,color:["#566641","#b0762a","#2e5a45","#7a3024","#c9b36a","#3b4f7a"][A*7%6]});let h=new k6([new R0(0,0),new R0(0.036,0),new R0(0.043,0.025),new R0(0.043,0.17),new R0(0.019,0.205),new R0(0.017,0.285),new R0(0.021,0.29),new R0(0.021,0.305),new R0(0,0.31)],12);y.forEach((A)=>P(h.clone(),E(A.color,0.3),A.pos,[0,0,0],[A.scale,A.scale,A.scale]));for(let[A,d,W0]of[[-3.1,-1.9,"#a8483a"]])for(let J0=0;J0<3;J0++){k(A,0.19+J0*0.34,d,0.52,0.3,0.4,W0);for(let k0=0;k0<5;k0++)k(A-0.2+k0*0.1,0.18+J0*0.34,d+0.204,0.055,0.16,0.015,"#2c3025")}for(let A=0;A<5;A++){let d=-7-A*3.5;k(d,1.5,-3,3.1,3,3.2,["#d9a35c","#7fb1a4","#d8c7a2","#c98d7c","#a6bf8e"][A]),k(d,2.2,-1.38,1,0.8,0.045,"#b59961"),k(d,2.2,-1.35,0.045,0.86,0.055,"#273e37"),k(d,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let A=0;A<4;A++)V(-5-A*5,2.3,-1,0.08,0.09,4.6,"#665443"),k(-5-A*5,4.2,-1,1.8,0.09,0.09,"#514b3d");function f(A,d,W0,J0="#202d28"){let k0=new o8(Q9(...A),Q9(...W0),Q9(...d));P(new b8(k0,20,0.008,4,!1),E(J0),[0,0,0])}let o=[];for(let A of[-1.95,1.95])V(A,1.45,2.55,0.035,0.045,2.9,"#5b4a38",8);for(let[A,d,W0]of[[[-2.7,2.9,-2.45],[-1.95,2.85,2.55],0.5],[[2.7,2.9,-2.45],[1.95,2.85,2.55],0.5],[[-1.95,2.85,2.55],[1.95,2.85,2.55],0.32]]){let J0=Q9(...A),k0=Q9(...d),F0=J0.clone().lerp(k0,0.5);F0.y-=W0*2;let O0=new o8(J0,F0,k0);P(new b8(O0,24,0.006,4,!1),E("#1c2320"),[0,0,0]);let j0=Math.round(J0.distanceTo(k0)/0.42);for(let n0=1;n0<j0;n0++){let E0=O0.getPointAt(n0/j0);o.push(E0.setY(E0.y-0.035))}}{let A=new B8(0.022,10,8);A.scale(1,1.3,1);let d=["#ffd89a","#ffc27a","#ffe3a8"],W0=new h7(A,new h9({color:new b0(4.5,4.5,4.5)}),o.length),J0=new v9;o.forEach((k0,F0)=>{J0.position.copy(k0),J0.updateMatrix(),W0.setMatrixAt(F0,J0.matrix),W0.setColorAt(F0,new b0(d[F0%d.length]))}),Z.add(W0)}f([0,3.22,-1.6],[0,3.19,0],[0,3.02,-0.8]);let g=new S9;g.position.set(4.3,0,-1.7),Z.add(g);let a=new A0(new C9(0.1,0.15,4.5,9),E("#696047"));a.position.y=2.25,g.add(a);for(let A=0;A<9;A++){let d=new A0(new B8(1,10,5),E(A%2?"#4a654c":"#344e3d"));d.scale.set(0.27,0.075,1.5),d.position.set(Math.sin(A*DJ/9)*0.72,4.35,Math.cos(A*DJ/9)*0.72),d.rotation.set(0.23,A*DJ/9,0),g.add(d)}let j=new D8({map:L,color:"#d9a877",roughness:0.5,clearcoat:0.55,clearcoatRoughness:0.28}),i=new A0(new y8(C0.tableWidth,C0.tableThickness,C0.tableWidth,3,0.035),j);i.position.y=C0.tableCenterY,i.castShadow=!0,i.receiveShadow=!0,Z.add(i);let X0=z((A,d,W0)=>{A.fillStyle="#2f5b47",A.fillRect(0,0,d,W0);for(let k0=0;k0<W0;k0+=2)for(let F0=0;F0<d;F0+=2){let O0=(D()-0.5)*14,j0=((F0>>1)+(k0>>1))%2?4:-4;A.fillStyle=`rgb(${47+O0+j0},${91+O0+j0},${71+O0+j0})`,A.fillRect(F0,k0,2,2)}for(let k0=0;k0<4;k0++){let F0=k0*Math.PI/2,O0=d/2+Math.sin(F0)*d*0.36,j0=W0/2+Math.cos(F0)*W0*0.36,n0=A.createRadialGradient(O0,j0,0,O0,j0,d*0.2);n0.addColorStop(0,"rgba(120,150,120,.16)"),n0.addColorStop(1,"rgba(120,150,120,0)"),A.fillStyle=n0,A.fillRect(0,0,d,W0)}let J0=A.createRadialGradient(d/2,W0/2,d*0.1,d/2,W0/2,d*0.62);J0.addColorStop(0,"rgba(0,0,0,0)"),J0.addColorStop(1,"rgba(0,0,0,.28)"),A.fillStyle=J0,A.fillRect(0,0,d,W0)},512,512),K0=new A0(new y8(C0.feltWidth,0.012,C0.feltWidth,2,0.02),new D8({map:X0,roughness:0.97,sheen:0.8,sheenRoughness:0.55,sheenColor:new b0("#9fc7a8")}));K0.position.y=C0.feltCenterY,K0.receiveShadow=!0,Z.add(K0);let H0=C0.tableWidth/2-0.07;for(let A of[-H0,H0])for(let d of[-H0,H0])k(A,0.35,d,0.075,0.68,0.075,c);let Z0=["#C8402F","#6FB7C9"];for(let A=0;A<4;A++){let[d,W0,J0]=C7[A],k0=C0.feltWidth/2-0.012,F0=new A0(new V9(C0.feltWidth*0.72,0.009),new o0({color:Z0[A%2],roughness:0.9}));F0.rotation.set(-Math.PI/2,0,J0),F0.position.set(d*k0/C0.seatDistance,C0.surfaceY+0.0006,W0*k0/C0.seatDistance),F0.receiveShadow=!0,Z.add(F0)}let S=new o0({roughness:0.92,map:z((A,d,W0)=>{A.fillStyle="#8f7446",A.fillRect(0,0,d,W0);let J0=12,k0=d/J0;for(let F0=0;F0<J0;F0++)for(let O0=0;O0<J0;O0++){let j0=(O0+F0)%2===0;for(let n0=0;n0<3;n0++){let E0=150+D()*45|0;A.fillStyle=`rgb(${E0+30},${E0+8},${E0-45})`;let T0=n0*k0/3+k0*0.04,e0=k0/3-k0*0.08;if(j0)A.fillRect(O0*k0+1,F0*k0+T0,k0-2,e0);else A.fillRect(O0*k0+T0,F0*k0+1,e0,k0-2)}}A.fillStyle="rgba(40,28,14,.18)";for(let F0=0;F0<=J0;F0++)A.fillRect(F0*k0-1,0,2,W0),A.fillRect(0,F0*k0-1,d,2)},256,256)});for(let A=0;A<4;A++){let[d,W0,J0]=C7[A],k0=new S9;k0.position.set(d,0,W0),k0.rotation.y=J0,Z.add(k0);let F0=E(A%2?"#5e9fb2":"#b53f2e",0.62),O0=(j0,n0,E0,T0,e0,q9,F9=F0,w9=0.008)=>{let N9=Q9(T0,e0,q9).applyAxisAngle(Q9(0,1,0),J0).add(Q9(d,0,W0));P(new y8(j0,n0,E0,2,w9),F9,N9.toArray(),[0,J0,0])};O0(C0.chairSeatWidth-0.04,0.035,0.5,0,C0.chairSeatY,0,S,0.01);for(let j0 of[-1,1])O0(0.04,0.05,0.54,j0*(C0.chairSeatWidth/2-0.02),C0.chairSeatY-0.005,0);for(let j0 of[-1,1])O0(C0.chairSeatWidth,0.05,0.04,0,C0.chairSeatY-0.005,j0*0.25);for(let j0 of[-0.24,0.24])for(let n0 of[-0.21,0.21])O0(0.04,C0.chairSeatY,0.04,j0,C0.chairSeatY/2,n0);for(let j0 of[-0.24,0.24])O0(0.024,0.024,0.42,j0,0.15,0);O0(0.48,0.024,0.024,0,0.15,0.21);for(let j0 of[-0.24,0.24])O0(0.04,0.52,0.04,j0,C0.chairSeatY+0.26,-0.23);for(let j0 of[0.2,0.33,0.46])O0(0.46,j0===0.46?0.07:0.045,0.022,0,C0.chairSeatY+j0,-0.23)}function x(A,d,W0,J0,k0,F0=60){let O0=z((j0,n0,E0)=>{j0.fillStyle=J0,j0.fillRect(0,0,n0,E0),j0.fillStyle=k0,j0.textAlign="center",j0.textBaseline="middle",j0.font=`bold ${F0}px Georgia`,j0.fillText(A,n0/2,E0/2)},1024,256);return new A0(new V9(d,W0),new h9({map:O0}))}let s=x("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);s.position.set(0,2.94,-2.33),Z.add(s);let Y0=x("MESA",0.11,0.029,"#284e3e","#81906b",77);{let A=document.createElement("canvas");A.width=512,A.height=136;let d=new i8(A);d.colorSpace=K8;let W0=()=>{let J0=A.getContext("2d");J0.clearRect(0,0,512,136),J0.font=`96px ${document.fonts?.check?.("96px Shrikhand")?"Shrikhand":"Georgia"}`,J0.textAlign="center",J0.textBaseline="middle",J0.fillStyle="rgba(170,205,170,.42)",J0.fillText("Mesa",256,72),d.needsUpdate=!0};W0(),document.fonts?.load?.("96px Shrikhand").then(W0).catch(()=>{}),Y0.material=new o0({map:d,transparent:!0,depthWrite:!1,roughness:1})}Y0.rotation.x=-Math.PI/2,Y0.position.set(0,C0.surfaceY+0.001,0.3),Z.add(Y0);let t=new S9;t.position.set(-0.9,2.62,-3.45),t.rotation.x=-Math.PI/2,Z.add(t),V(-0.9,2.9,-3.45,0.015,0.015,0.56,"#777a68",8),V(-0.9,3.16,-3.45,0.075,0.075,0.025,"#767763",12);let D0=new A0(new B8(0.075,12,8),E("#41493d"));t.add(D0);for(let A=0;A<5;A++){let d=new A0(new j9(0.13,0.5,0.025),E("#85856e",0.88,0.05));d.position.set(Math.sin(A*DJ/5)*0.285,Math.cos(A*DJ/5)*0.285,0),d.rotation.z=-A*DJ/5,t.add(d)}let V0=new S9;V0.position.set(-12,0.05,5.2),Z.add(V0);for(let A of[-0.36,0.36]){let d=new A0(new x7(0.19,0.038,7,14),E("#182221"));d.position.set(A,0.2,0),V0.add(d)}let _0=new A0(new y8(0.65,0.17,0.2,2,0.04),E("#823e2f",0.45,0.25));_0.position.y=0.49,V0.add(_0);let B0=new A0(new j9(0.35,0.06,0.22),E("#202725"));B0.position.set(-0.08,0.61,0),V0.add(B0);let u0=new A0(new C9(0.015,0.015,0.45,6),E("#8c9c96",0.4,0.5));u0.position.set(0.32,0.59,0),u0.rotation.z=-0.3,V0.add(u0);let K9=yU({scene:Z,texture:z,mat:E,box:k,cylinder:V,random:D,teal:b,wood:M,storeSign:s}),t0=vU({scene:Z,texture:z,mat:E,box:k,cylinder:V,staticGeo:P,random:D,renderer:W});fU({scene:Z,random:D});for(let{material:A,geos:d}of R.values()){let W0=F$(d.some((J0)=>!J0.index)?d.map((J0)=>J0.index?J0.toNonIndexed():J0):d,!1);if(W0){let J0=new A0(W0,A);J0.receiveShadow=!0,W0.computeBoundingBox(),J0.castShadow=W0.boundingBox.distanceToPoint(Q9(0,0.8,0))<1.6&&W0.boundingBox.getSize(Q9()).length()<8,Z.add(J0)}d.forEach((J0)=>J0.dispose())}let W9=new S9,D9=new S9;Z.add(W9,D9);let L9=new y8(C0.tileLength,C0.tileThickness,C0.tileWidth,3,0.0024),p=new D8({color:"#ede5d2",roughness:0.5,clearcoat:0.3,clearcoatRoughness:0.4}),x9=new D8({color:"#e2dac6",roughness:0.42,clearcoat:0.7,clearcoatRoughness:0.3}),z9=new o0({color:"#b98b3e",roughness:0.28,metalness:1}),A9=new C9(0.0019,0.0019,0.0009,12),_=new o0({color:"#0b0a09",roughness:0.55}),C=new o0({color:"#2a2622",roughness:0.6}),m=new C9(C0.pipRadius,C0.pipRadius,0.0007,14),$0=new j9(0.0014,0.0005,C0.tileWidth*0.8),L0=new Set([L9,m,$0,A9]),P0=new Set([p,x9,_,C,z9]),v0=[j,K0.material,p,x9].map((A)=>[A,{clearcoat:A.clearcoat,sheen:A.sheen}]);function N0(A,d,W0=!1){let J0=new S9,k0=new A0(L9,W0?x9:p);if(k0.castShadow=!0,k0.receiveShadow=!0,J0.add(k0),!W0){let F0=[];if([A,d].forEach((n0,E0)=>VL[n0].forEach((T0)=>F0.push(Q9((E0===0?-1:1)*C0.tileLength/4+(T0%3-1)*C0.pipColumnSpacing,C0.tileThickness/2+0.0005,(Math.floor(T0/3)-1)*C0.pipRowSpacing)))),F0.length){let n0=new h7(m,_,F0.length),E0=new $9;F0.forEach((T0,e0)=>n0.setMatrixAt(e0,E0.makeTranslation(T0.x,T0.y,T0.z))),J0.add(n0)}let O0=new A0($0,C);O0.position.y=C0.tileThickness/2+0.0002,J0.add(O0);let j0=new A0(A9,z9);j0.position.y=C0.tileThickness/2+0.0004,J0.add(j0)}return J0}function q0(A){return Q9(A.x,C0.surfaceY+C0.tileThickness/2+0.001,A.z)}let h0=new A0(new x7(0.2,0.006,5,38),new h9({color:"#e8bf70",transparent:!0,opacity:0.7}));h0.rotation.x=-Math.PI/2,h0.position.y=0.027,Z.add(h0);let y0=[],I0=[],z0=[],a0=0,J9=4,T9=[];z0.push(...bU(Z));let n=Q9(),w0=Q9(),G0=Q9(),S0=Q9(),d0=new $9,M0=Q9(),f0=Q9();function X9(A){let d=null;if(A.root.traverse((q9)=>{if(q9.isSkinnedMesh&&q9.morphTargetDictionary&&!d)d=q9}),!d||d.morphTargetDictionary.parpadeo==null)return;A.cara={mesh:d,iP:d.morphTargetDictionary.parpadeo,iS:d.morphTargetDictionary.sonrisa};let W0=d.geometry.attributes.position,J0=d.userData?.boca;if(J0){let q9=1e9,F9=0;for(let w9=0;w9<W0.count;w9++){let N9=(W0.getX(w9)-J0[0])**2+(W0.getY(w9)-J0[1])**2+(W0.getZ(w9)-J0[2])**2;if(N9<q9)q9=N9,F9=w9}A.bocaMundo=(w9)=>{return d.skeleton.update(),d.getVertexPosition(F9,w9).applyMatrix4(d.matrixWorld)}}let k0=d.userData?.ojos,F0=d.userData?.parpado;if(!k0||!F0)return;let O0=d.geometry.attributes.position,j0=(q9)=>{let F9=1e9,w9=0;for(let N9=0;N9<O0.count;N9++){let Q8=(O0.getX(N9)-q9[0])**2+(O0.getY(N9)-q9[1])**2+(O0.getZ(N9)-q9[2])**2;if(Q8<F9)F9=Q8,w9=N9}return w9},n0=new V9(0.027,0.0125,8,4);n0.translate(0,-0.00625,0);let E0=n0.attributes.position,T0=[];for(let q9=0;q9<E0.count;q9++){let F9=E0.getX(q9)/0.0135,w9=-E0.getY(q9)/0.0125;E0.setZ(q9,0.0032*Math.cos(F9*Math.PI/2)*(0.5+0.5*w9));let N9=w9>0.85?0.45:1;T0.push(N9,N9,N9)}n0.setAttribute("color",new Y9(T0,3)),n0.computeVertexNormals();let e0=new o0({color:new b0().setRGB(...F0,K8),roughness:0.7,vertexColors:!0});A.parpados=k0.map((q9)=>{let F9=new A0(n0,e0);return F9.visible=!1,F9.frustumCulled=!1,Z.add(F9),{m:F9,k:j0(q9)}})}function n9(A){let d=A.parpados;if(!d||!A.cara)return;let W0=A.parpadeo||0;if(W0<0.03){for(let O0 of d)O0.m.visible=!1;return}let J0=A.cara.mesh;J0.skeleton.update();let k0=J0.getVertexPosition(d[0].k,n).applyMatrix4(J0.matrixWorld).clone(),F0=J0.getVertexPosition(d[1].k,n).applyMatrix4(J0.matrixWorld).clone();if(A.head.getWorldPosition(M0),A.front.getWorldPosition(f0),S0.subVectors(f0,M0).normalize(),w0.subVectors(F0,k0).normalize(),G0.crossVectors(S0,w0).normalize(),G0.y<0)G0.negate();w0.crossVectors(G0,S0).normalize(),d0.makeBasis(w0,G0,S0);for(let[O0,j0]of[[d[0],k0],[d[1],F0]])O0.m.visible=!0,O0.m.quaternion.setFromRotationMatrix(d0),O0.m.position.copy(j0).addScaledVector(G0,0.0052).addScaledVector(S0,0.0024),O0.m.scale.set(1,W0,1)}let y9=0.605,k8=RY(Q),m8=0;async function xQ(A,d,W0){let J0=RN(d);try{if(W0===0)$(`Seating ${J0.nombre}…`,a0/J9);let k0=await hQ(J0);if(W0!==m8||P$)return;let F0=k0.gltf,O0=UJ(F0.scene),j0=new S9;j0.add(O0);let n0=new YJ(O0),E0=k0.acciones.Sentado||F0.animations.find((M9)=>M9.name==="Seated")||F0.animations[0];if(E0)n0.clipAction(E0).play();n0.setTime(C0.neutralPoseTime),O0.updateMatrixWorld(!0),O0.traverse((M9)=>{if(M9.isSkinnedMesh)M9.computeBoundingBox();if(M9.isMesh)M9.castShadow=!0,M9.receiveShadow=!0,M9.frustumCulled=!1,M9.material.roughness=0.83,M9.material.specularIntensity=0.25,M9.material.emissiveIntensity=SQ});let T0=new A8().setFromObject(O0),e0=O0.getObjectByName("Hips"),q9=e0?.getWorldPosition(Q9())||T0.getCenter(Q9());O0.position.set(-q9.x,Math.max(-T0.min.y,y9-q9.y),-q9.z);let[F9,w9,N9]=C7[A];j0.position.set(F9,0,w9),j0.rotation.y=N9;let Q8=y0[A];if(Q8){Z.remove(Q8.holder);for(let M9 of Q8.parpados||[])Z.remove(M9.m),M9.m.geometry.dispose(),M9.m.material.dispose()}if(Z.add(j0),y0[A]={id:d,root:O0,holder:j0,index:A,pose:JY(O0),head:O0.getObjectByName("Head"),neck:O0.getObjectByName("neck"),front:O0.getObjectByName("headfront"),chest:O0.getObjectByName("Spine"),hips:e0,lomo:O0.getObjectByName("Spine02"),muslos:[O0.getObjectByName("LeftUpLeg"),O0.getObjectByName("RightUpLeg")],hombros:[[1,O0.getObjectByName("LeftShoulder")],[-1,O0.getObjectByName("RightShoulder")]],spine:O0.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map((M9)=>({lado:M9,hombro:O0.getObjectByName(M9+"Shoulder"),brazo:O0.getObjectByName(M9+"Arm"),antebrazo:O0.getObjectByName(M9+"ForeArm"),mano:O0.getObjectByName(M9+"Hand")}))},y0[A].bebida=z0.find((M9)=>M9.index===A),X9(y0[A]),W0===0)a0++,$(a0===4?"The table is ready.":`${a0} of 4 seats ready`,a0/J9)}catch(k0){if(T9.push(d),console.error("Character load failed",d,k0),W0===0)$(`Could not load ${J0?.nombre||d}. Reload to retry.`,a0/J9)}}let B$=Promise.all(k8.map((A,d)=>xQ(d,A,0)));function kJ(A){if(A=RY(A),A.join()===k8.join())return;k8=A;let d=++m8;for(let W0 of I0.splice(0))Z.remove(W0.holder);Promise.all(A.map((W0,J0)=>y0[J0]?.id===W0?null:xQ(J0,W0,d))).then(()=>{if(d===m8&&F7)e(F7,!0)})}let r8=null;B$.then(()=>{if(!P$){if(r8=SN({scene:Z,camera:K,pocos:Y,enMesa:()=>[...k8,...I0.map((A)=>A.id)]}),F7)e(F7,!0)}});let D$=null,MJ=null,T7="",S6=null,M8=mU({scene:Z,renderer:W,camera:K,controls:H,software:Y,bulbLight:N});M8.calidad("high");let j6=new Set,y6=new Map,gQ=[0,1,2,3].map(()=>Q9()),v6=(A)=>{let d=A.detail||{};if(d.active)j6.add(d.seat),y6.set(d.seat,d.type);else j6.delete(d.seat)};window.addEventListener("mesa:botvoice",v6);let f6=null,F7=0,MY="",pQ=0,wK="attract",N8=null,t8=[],I=0,u=0;function U0(A){while(A.children.length){let d=A.children.pop();d.parent=null,d.traverse((W0)=>{if(W0.isMesh&&!L0.has(W0.geometry))W0.geometry.dispose();if(W0.isMesh&&!P0.has(W0.material))W0.material.dispose()})}}let Q0=0;function e(A,d=!1){if(A===F7&&!d)return;F7=A;let W0=++Q0,J0=Math.min(3,A);while(I0.length>J0)Z.remove(I0.pop().holder);if(!r8)return;let k0=new Set([...k8,...I0.map((O0)=>O0.id),...r8.andando()]),F0=V$.filter((O0)=>jQ(O0)&&!k0.has(O0.id)).slice(0,J0-I0.length);for(let O0 of F0)hQ(O0).then((j0)=>{if(W0!==Q0||P$||I0.length>=J0||I0.some((M9)=>M9.id===O0.id)||r8.andando().includes(O0.id))return;let n0=I0.length,E0=j0.gltf,T0=UJ(E0.scene),e0=new S9;e0.add(T0);let q9=new YJ(T0),F9=j0.acciones.Sentado||E0.animations.find((M9)=>M9.name==="Seated")||E0.animations[0];if(F9)q9.clipAction(F9).play();q9.setTime(C0.neutralPoseTime),T0.updateMatrixWorld(!0),T0.traverse((M9)=>{if(M9.isSkinnedMesh)M9.computeBoundingBox();if(M9.isMesh)M9.castShadow=!1,M9.frustumCulled=!1,M9.material.roughness=0.83,M9.material.specularIntensity=0.25,M9.material.emissiveIntensity=SQ});let w9=new A8().setFromObject(T0),N9=T0.getObjectByName("Hips")?.getWorldPosition(Q9())||w9.getCenter(Q9());T0.position.set(-N9.x,Math.max(-w9.min.y,y9-N9.y),-N9.z),e0.position.set(-2.5+n0*1.66,0,-2.5),e0.rotation.y=0,Z.add(e0);let Q8=new A0(new j9(0.56,0.06,0.54),l);Q8.position.set(0,C0.chairSeatY,0),e0.add(Q8),I0.push({id:O0.id,root:T0,holder:e0,pose:JY(T0),head:T0.getObjectByName("Head"),neck:T0.getObjectByName("neck"),front:T0.getObjectByName("headfront"),chest:T0.getObjectByName("Spine"),spine:T0.getObjectByName("Spine01"),index:n0+4})}).catch((j0)=>console.warn("Mirón sin cargar",O0.id,j0))}let x0=!1,c0=Q9();function g0(){let A=K.position,d=H.target;if(c0.subVectors(A,d),c0.length()>4.6)A.copy(d).addScaledVector(c0.normalize(),4.6);A.z=Math.max(A.z,-2.1),A.x=b7.clamp(A.x,-4.9,4.9),A.y=b7.clamp(A.y,0.35,5.2)}let s0=-1,m0=null,U9=H.minDistance;function k9(A,d,W0){if(document.documentElement.classList.contains("reduced"))return;let J0=Q9(1,0,1).normalize(),k0=-9;for(let[O0,j0]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let n0=Q9(O0,0,j0).normalize(),E0=n0.x*A.x+n0.z*A.z;if(E0>k0)k0=E0,J0=n0}let F0=A.clone().addScaledVector(J0,0.3);if(F0.x=b7.clamp(F0.x,-0.4,0.4),F0.z=b7.clamp(F0.z,-0.4,0.4),F0.y=C0.surfaceY+(W0?0.12:0.19),!m0)U9=H.minDistance;H.minDistance=0.1,m0={pos:m0?.pos||K.position.clone(),target:m0?.target||H.target.clone(),at:u8.elapsedTime+3.4},N8={from:K.position.clone(),to:F0,fromTarget:H.target.clone(),toTarget:A.clone().setY(A.y+0.01),t:0,dur:0.45}}function i0(A="table"){if(H.minDistance=A==="seat"||A==="close"?0.3:0.7,H.minPolarAngle=A==="overhead"?0.01:0.25,K.aspect<0.95&&A==="table")A="overhead";let d,W0=Q9(0,0.8,0);if(A==="attract")d=Q9(0.75,1.3,4.4),W0=Q9(-1,1.4,-1.2);else if(A==="overhead")d=Q9(0.001,1.86,0.34),W0=Q9(0,C0.surfaceY,0.02);else if(A==="seat")d=Q9(0,1.36,0.74),W0=Q9(0,0.82,-0.12);else if(A==="close")d=Q9(0.62,1.3,1),W0=Q9(-0.03,0.85,-0.08);else d=Q9(0.8,1.89,1.24),W0=Q9(0,0.9,-0.2);if(A!=="attract"&&A!=="seat"&&K.aspect<1.3){let J0=Math.min(2.4,Math.pow(1.6/K.aspect,0.8));d=W0.clone().add(d.clone().sub(W0).multiplyScalar(J0))}if(y0[0])y0[0].root.visible=A!=="seat";m0=null,H.minDistance=Math.min(H.minDistance,U9),N8={from:K.position.clone(),to:d,fromTarget:H.target.clone(),toTarget:W0,t:0}}let I9=Q9(0,1,0),J8=new E9().setFromAxisAngle(Q9(1,0,0),0.12),s9=new E9().setFromAxisAngle(I9,Math.PI/2),p9=new E9().setFromAxisAngle(Q9(0,0,1),Math.PI/2),O8=C0.tableCenterY+C0.tableThickness/2+C0.tileLength/2*Math.cos(0.12)+C0.tileThickness/2*Math.sin(0.12)+0.001;function l0(A,d,W0){let J0=C7[A][2];return W0.quaternion.setFromAxisAngle(I9,J0).multiply(J8).multiply(s9).multiply(p9),W0.position.set(d,O8,-C0.rackRadius).applyAxisAngle(I9,J0),W0}let a9=new h7(L9,x9,28);a9.count=0,a9.castShadow=!0,a9.receiveShadow=!0,a9.frustumCulled=!1,D9.add(a9);let _9=[[],[],[],[]],$8=new v9,l8=[0,0,0,0],e8="",w7=new Set;function g9(A){let d=0;for(let W0=0;W0<4;W0++){let J0=w7.has(W0)?0:l8[W0],k0=_9[W0];while(k0.length<J0)k0.push((k0.length-(J0-1)/2)*C0.rackSpacing);k0.length=J0;for(let F0=0;F0<J0;F0++){let O0=(F0-(J0-1)/2)*C0.rackSpacing;k0[F0]+=(O0-k0[F0])*(1-Math.exp(-A*10)),l0(W0,k0[F0],$8),$8.updateMatrix(),a9.setMatrixAt(d++,$8.matrix)}}a9.count=d,a9.instanceMatrix.needsUpdate=!0}let i9=new S9;Z.add(i9);let J7=new Map,m9="",E7="",d7=(()=>{let A=7,d=()=>(A=A*16807%2147483647)/2147483647,W0=[],J0=0.2;for(let k0=0;k0<28;k0++){let F0=!1;for(let O0=0;O0<600&&!F0;O0++){let j0=d()*Math.PI*2,n0=Math.sqrt(d())*J0,E0=Math.cos(j0)*n0,T0=Math.sin(j0)*n0*0.82;if(W0.every((e0)=>Math.hypot(e0.x-E0,e0.z-T0)>=0.058))W0.push({x:E0,z:T0,ry:d()*Math.PI}),F0=!0}if(!F0)J0+=0.012,k0--}return W0})(),k$=C0.surfaceY+C0.tileThickness/2+0.0003;function jN(){for(let A=0;A<28;A++){let d=N0(0,0,!0),W0=d7[A];d.position.set(W0.x,k$,W0.z),d.rotation.y=W0.ry,W9.add(d)}}let b6=(A)=>A*A*(3-2*A),yN=new E9().setFromAxisAngle(Q9(1,0,0),Math.PI),vN=new E9().setFromAxisAngle(I9,-Math.PI/2);function fN(A,d){A.revealed.forEach((W0,J0)=>{let k0=W0.length,F0=C7[J0][2];W0.forEach((O0,j0)=>{let n0=(j0-(k0-1)/2)*C0.rackSpacing,E0=N0(O0.a,O0.b);l0(J0,n0,$8);let T0=$8.quaternion.clone().multiply(yN),e0=$8.position.clone(),q9=Q9(n0,C0.surfaceY+C0.tileThickness/2+0.001,-C0.rackRadius+0.047).applyAxisAngle(I9,F0),F9=new E9().setFromAxisAngle(I9,F0).multiply(vN);E0.position.copy(e0),E0.quaternion.copy(T0),E0.visible=!1,W9.add(E0),t8.push({obj:E0,from:e0,to:q9,qFrom:T0,qTo:F9,elapsed:-(d+J0*0.3+j0*0.055),duration:0.42,revela:J0,ultima:j0===k0-1})})})}function CY(A,d=0){f6=A;{let F0=A&&(A.phase==="handEnd"||A.phase==="seriesEnd")&&A.result,O0=F0?A.handNo+":"+A.phase:"";if(O0&&O0!==T7)MJ={t:u8.elapsedTime+0.5,team:A.result.team??null};if(!F0)MJ=null;T7=O0}if(F7!==d)e(d);if(A?.cast)kJ(A.cast);let W0=!A||A.phase==="lobby"?"pila":"mano"+A.handNo;if(W0!==m9){m9=W0,U0(W9),J7.clear(),t8=t8.filter((F0)=>F0.reparto);for(let F0 of y0)if(F0)F0.jugada=null;if(W0==="pila")jN()}if(A&&A.chain?.length){let F0=DU(A.chain,A.moves),O0=A.event,j0=["domino","capicua","tranque"].includes(O0?.type),n0=A.moves[A.moves.length-1],E0=O0?.type==="domino"||O0?.type==="capicua",T0=O0?.type==="play"?O0.tile:j0&&n0?.type==="play"?n0.tile:null;A.chain.forEach((e0,q9)=>{if(J7.has(e0.id))return;let F9=N0(e0.x,e0.y),w9=q0(F0[q9]);if(F9.position.copy(w9),F9.rotation.y=F0[q9].yaw,F9.updateMatrix(),W9.add(F9),J7.set(e0.id,F9),e0.id!==T0||e0.seat==null)return;l0(e0.seat,0,$8);let N9={obj:F9,from:$8.position.clone(),to:w9.clone(),qFrom:$8.quaternion.clone(),qTo:F9.quaternion.clone(),elapsed:0,duration:E0?0.7:0.55,golpe:E0};if(F9.position.copy(N9.from),F9.quaternion.copy(N9.qFrom),t8.push(N9),j0)k9(w9,e0.seat,E0);I=performance.now();let Q8=y0[e0.seat];if(D$={p:w9.clone(),t:u8.elapsedTime+N9.duration},Q8)Q8.reaction={time:u8.elapsedTime},Q8.jugada={t0:u8.elapsedTime,obj:F9,anim:N9,hasta:w9.clone()}})}if(A?.phase==="playing"&&A.handNo!==pQ&&A.moves.length===0){pQ=A.handNo,U0(i9),t8=t8.filter((F0)=>!F0.reparto),u=performance.now()+3300;for(let F0=0;F0<4;F0++)_9[F0]=Array.from({length:7},(O0,j0)=>(j0-3)*C0.rackSpacing);for(let F0=0;F0<28;F0++){let O0=F0%4,j0=Math.floor(F0/4),n0=N0(0,0,!0),E0=d7[F0],T0=Q9(E0.x,k$,E0.z);n0.position.copy(T0),n0.rotation.y=E0.ry,i9.add(n0);let e0=l0(O0,(j0-3)*C0.rackSpacing,new v9);t8.push({obj:n0,from:T0,to:e0.position.clone(),qFrom:n0.quaternion.clone(),qTo:e0.quaternion.clone(),elapsed:-F0*0.065,duration:1.1,reparto:!0})}}let J0=A?.moves?.[A.moves.length-1],k0=A?A.handNo+":"+A.moves.length:"";if(J0?.type==="pass"&&E7!==k0){E7=k0;let F0=y0[J0.seat];if(F0)F0.toque={t0:u8.elapsedTime}}{let F0=A&&(A.phase==="handEnd"||A.phase==="seriesEnd")&&A.revealed,O0=F0?"r"+A.handNo:"";if(!F0)e8="",w7.clear();else if(O0!==e8){e8=O0;let j0=A.result?.type;fN(A,j0==="domino"||j0==="capicua"?3.4:j0==="tranque"?2.5:1.2)}}l8=[0,1,2,3].map((F0)=>!A||A.phase==="lobby"?0:A.counts[F0]??0),h0.visible=!1,S6=A?.phase==="playing"&&A.chain?.length?kU(A.chain,A.moves):null}let u8=new WK,M$=0,SK=0,mQ=0,C$=60,P$=!1,lQ=!1,I$=null,CJ="high",PY=null,uQ=performance.now(),dQ=0,IY=!1,bN=new URLSearchParams(location.search).has("debug"),zY=N.intensity,h6=Q9(),hN=Q9(0,C0.surfaceY,0);function jK(){if(P$||lQ){I$=null;return}I$=requestAnimationFrame(jK);let A=u8.getDelta(),d=Math.min(A,0.06),W0=PY??u8.elapsedTime,J0=performance.now();if(SK++,mQ+=A,mQ>1){if(C$=SK/mQ,SK=0,mQ=0,!X&&!dQ&&CJ==="high"&&J0-uQ>9000&&J0-uQ<30000&&C$<30)dQ=J0,yK.quality("low"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"low"}));else if(!X&&CJ==="low"&&!IY&&J0-(dQ||uQ)>9000&&J0-(dQ||uQ)<40000&&C$<20)IY=!0,yK.quality("min"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"min"}))}M$++,W.info.reset();let k0=document.documentElement.classList.contains("reduced");if(m0&&u8.elapsedTime>m0.at)N8={from:K.position.clone(),to:m0.pos,fromTarget:H.target.clone(),toTarget:m0.target,t:0,dur:1.2},m0=null,H.minDistance=U9;let F0=0;if(s0>=0){let E0=u8.elapsedTime-s0;if(E0<0.5){let T0=0.0045*Math.exp(-E0*8)*Math.sin(E0*DJ*18);W9.position.y=T0,D9.position.y=T0,F0=k0?0:0.004*Math.exp(-E0*9),N.intensity=zY*(1+0.35*Math.exp(-E0*14))}else s0=-1,W9.position.y=0,D9.position.y=0,N.intensity=zY}if(N8){N8.t=Math.min(1,N8.t+d/(N8.dur||1.1));let E0=b6(N8.t);if(K.position.lerpVectors(N8.from,N8.to,E0),H.target.lerpVectors(N8.fromTarget,N8.toTarget,E0),N8.t===1)N8=null}if(!k0)t.rotation.z=W0*3.5,g.rotation.z=Math.sin(W0*0.47)*0.009,K9.update(W0),t0.update(W0);let O0=f6,j0={dt:d,jugando:O0?.phase==="playing",turno:O0?.turn,habla:j6,hablaTipo:y6,foco:D$,fin:MJ,cabezas:y0.map((E0,T0)=>E0?.head?E0.head.getWorldPosition(gQ[T0]):null)};if(r8)r8.update(d,{view:O0,habla:j6,cabezas:j0.cabezas}),j0.saludo=r8.saludo;for(let E0 of y0){if(!E0)continue;MK(E0,W0,k0,j0),n9(E0)}for(let E0=0;E0<I0.length;E0++)if((M$+E0)%2===0)MK(I0[E0],W0,k0,j0);t8=t8.filter((E0)=>{if(E0.elapsed+=d,E0.elapsed<0)return!0;let T0=Math.min(1,E0.elapsed/E0.duration);if(E0.revela!=null){E0.obj.visible=!0,w7.add(E0.revela);let e0=b6(T0);if(E0.obj.quaternion.slerpQuaternions(E0.qFrom,E0.qTo,e0),E0.obj.position.lerpVectors(E0.from,E0.to,e0),E0.obj.position.y+=Math.sin(T0*Math.PI)*0.012,T0>=1&&E0.ultima)dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{revela:!0}}));return T0<1}if(E0.reparto)return E0.obj.position.lerpVectors(E0.from,E0.to,b6(T0)),E0.obj.position.y+=Math.sin(T0*Math.PI)*0.035,E0.obj.quaternion.slerpQuaternions(E0.qFrom,E0.qTo,b6(Math.min(1,Math.max(0,(T0-0.3)/0.7)))),T0<1;if(E0.obj.quaternion.slerpQuaternions(E0.qFrom,E0.qTo,b6(Math.min(1,T0/0.4))),E0.golpe){let e0=Math.min(1,T0/0.62);E0.obj.position.lerpVectors(E0.from,E0.to,b6(e0)),E0.obj.position.y+=T0<0.62?Math.sin(e0*Math.PI/2)*0.17:0.17*(1-((T0-0.62)/0.38)**2)}else E0.obj.position.lerpVectors(E0.from,E0.to,b6(T0)),E0.obj.position.y+=Math.sin(T0*Math.PI)*0.07;if(T0>=1&&!E0.sono){if(E0.sono=!0,E0.golpe)s0=u8.elapsedTime;dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{golpe:!!E0.golpe}}))}return T0<1});let n0=J0<u;if(D9.visible=!n0,!n0&&i9.children.length)U0(i9);if(g9(d),H.update(),!N8&&!m0&&!x0)g0();if(M8.frame(W0,d,{reduced:k0,view:O0,ends:S6,temblor:F0}),M8.render(),M$%2===0)for(let E0 of document.querySelectorAll("[data-seatlabel]")){let T0=Number(E0.dataset.seatlabel),[e0,q9]=C7[T0],F9=y0[T0]?.head,w9=F9&&F9.getWorldPosition(h6).distanceTo(M8.vista.position)<hN.distanceTo(M8.vista.position)-0.2;if(w9)h6.y-=0.3;else if(F9)h6.y+=0.23;else h6.set(e0,1.45,q9);let N9=h6.project(M8.vista),Q8=!1;if(!w9&&N9.y>0.8&&F9)F9.getWorldPosition(h6).y-=0.1,N9=h6.project(M8.vista),Q8=!0;let M9=Math.min(N9.y,0.8);E0.style.transform=`translate(${(N9.x*0.5+0.5)*innerWidth}px,${(-M9*0.5+0.5)*innerHeight}px) translate(-50%,${w9?"-50%":Q8?"0":"-100%"})`,E0.style.visibility=N9.z>1||Math.abs(N9.x)>1.1||N9.y<-1.15?"hidden":"visible"}if(M$%30===0||M$===1){if(window.mesaDiagnostics={cam:K.position.toArray().map((E0)=>+E0.toFixed(2)),fps:Math.round(C$),drawCalls:W.info.render.calls,triangles:W.info.render.triangles,characters:a0,crowd:F7,gente:r8?+r8.ms.toFixed(2):null,visibleCrowd:I0.length,boardTiles:f6?.chain.length||0,quality:CJ,modelErrors:T9},bN){window.mesaRigDebug=y0.filter(Boolean).map((T0)=>({index:T0.index,head:T0.head?.getWorldPosition(Q9()).toArray(),hip:T0.hips?.getWorldPosition(Q9()).toArray(),rootScale:T0.root.scale.toArray()}));let E0=document.querySelector("#perf");if(E0)E0.textContent=`${Math.round(C$)} fps · ${W.info.render.calls} draws`}}}window.mesaCamara=(A,d)=>{N8=null,m0=null,x0=!0,H.minDistance=0.1,H.maxDistance=30,K.position.set(...A),H.target.set(...d),H.update()},window.mesaCara=(A,d,W0)=>{let J0=y0[A];if(J0)J0.caraFija=d==null?null:{p:d,s:W0??0}},window.mesaBeber=(A,d)=>{let W0=y0[A];if(!W0||!W0.bebida||W0.jugada)return;if(W0.trago&&d!=null&&W0.trago.fijo!=null)W0.trago.fijo=d;else W0.trago={t0:u8.elapsedTime,fijo:d}},window.mesaSentados=()=>y0.map((A)=>{if(!A)return null;let d=A.hips.getWorldPosition(Q9()),W0=Q9(),J0=9;return A.root.traverse((k0)=>{if(!k0.isSkinnedMesh)return;k0.skeleton.update();let F0=k0.geometry.attributes.position.count;for(let O0=0;O0<F0;O0+=3)if(k0.getVertexPosition(O0,W0).applyMatrix4(k0.matrixWorld),Math.hypot(W0.x-d.x,W0.z-d.z)<0.12&&W0.y<J0)J0=W0.y}),{id:A.id,cadera:+d.y.toFixed(3),nalga:+J0.toFixed(3),pies:+new A8().setFromObject(A.root).min.y.toFixed(3)}}),window.mesaMirones=(A)=>{return e(A),()=>I0.map((d)=>d.id)},window.mesaBrazo=(A)=>{let d=y0[A],W0=d?.brazos?.[1];if(!W0)return null;let J0=(k0)=>k0.getWorldPosition(new T).toArray();return{codo:J0(W0.antebrazo),muneca:J0(W0.mano),vaso:d.bebida?d.bebida.group.position.toArray():null}},CY(null),jK();let AY=()=>{if(K.aspect<0.95)K.setViewOffset(innerWidth,innerHeight*1.24,0,innerHeight*0.24,innerWidth,innerHeight);else K.clearViewOffset();K.updateProjectionMatrix()},_Y=()=>Y?0.65:CJ==="min"?Math.min(devicePixelRatio,1)*0.55:CJ==="low"?Math.min(devicePixelRatio,1)*0.8:Math.min(devicePixelRatio,1.5,1920/innerWidth),TY=()=>{K.aspect=innerWidth/innerHeight,AY(),W.setPixelRatio(_Y()),W.setSize(innerWidth,innerHeight),M8.resize(innerWidth,innerHeight)};AY(),window.addEventListener("resize",TY),H.addEventListener("start",()=>{N8=null,m0=null}),W.domElement.addEventListener("webglcontextrestored",()=>M8.entorno?.());let yK={update:CY,setCrowd:e,setCamera:i0,ready:B$,sentar:kJ,get reparto(){return k8.slice()},sampleTime(A){PY=A;for(let d of[...y0.filter(Boolean),...I0])MK(d,A,!1);M8.frame(A,0,{reduced:!1,view:f6,ends:S6}),M8.render()},setMode(A){wK=A,i0(A==="attract"?"attract":"table")},quality(A){CJ=A;let d=A!=="high";N.castShadow=!d&&!Y;for(let[W0,J0]of v0){let k0=d?0:J0.clearcoat,F0=d?0:J0.sheen;if(W0.clearcoat!==k0||W0.sheen!==F0)W0.clearcoat=k0,W0.sheen=F0,W0.needsUpdate=!0}q.visible=!d,G.intensity=d?U+0.1:U,W.setPixelRatio(_Y()),M8.calidad(A),M8.resize(innerWidth,innerHeight)},pause(){lQ=!0},resume(){if(!lQ)return;if(lQ=!1,u8.getDelta(),!I$)jK()},dispose(){if(P$=!0,r8?.dispose(),M8.dispose(),window.removeEventListener("mesa:botvoice",v6),I$)cancelAnimationFrame(I$);window.removeEventListener("resize",TY),H.dispose(),W.dispose(),J.replaceChildren()}};return yK}export{wk as createWorld};

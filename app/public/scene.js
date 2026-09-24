var pX="186",U7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},N7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mX=0,pK=1,lX=2;var y7=1,uX=2,b6=3,G7=0,D8=1,oJ=2,i8=0,yQ=1,z9=2,mK=3,lK=4,dX=5;var h6=100,cX=101,nX=102,sX=103,iX=104,oX=200,aX=201,rX=202,tX=203,eX=204,JH=205,QH=206,$H=207,ZH=208,KH=209,WH=210,YH=211,XH=212,HH=213,UH=214,NH=0,GH=1,FH=2,uK=3,EH=4,qH=5,OH=6,RH=7,LH=0,VH=1,DH=2,N9=0,vQ=1,fQ=2,bQ=3,v7=4,hQ=5,xQ=6,gQ=7;var x6=301,f7=302,YZ=303,XZ=304,pQ=306,F7=1000,g6=1001,HZ=1002,G9=1003,UZ=1004;var b7=1005;var q8=1006,p6=1007;var A9=1008;var F9=1009,BH=1010,MH=1011,mQ=1012,dK=1013,E7=1014,n9=1015,O8=1016,cK=1017,nK=1018,m6=1020,kH=35902,CH=35899,PH=1021,IH=1022,_9=1023,h7=1026,x7=1027,zH=1028,sK=1029,g7=1030,iK=1031;var oK=1033,NZ=33776,GZ=33777,FZ=33778,EZ=33779,aK=35840,rK=35841,tK=35842,eK=35843,JW=36196,QW=37492,$W=37496,ZW=37488,KW=37489,qZ=37490,WW=37491,YW=37808,XW=37809,HW=37810,UW=37811,NW=37812,GW=37813,FW=37814,EW=37815,qW=37816,OW=37817,RW=37818,LW=37819,VW=37820,DW=37821,BW=36492,MW=36494,kW=36495,CW=36283,PW=36284,OZ=36285,IW=36286;var zW=2300,RZ=2301;var AW=0,lQ=1,l6=2;var _W=0,AH=1,p7="",J8="srgb",g8="srgb-linear",TW="linear",uJ="srgb";var _H=512,TH=513,SH=514,LZ=515,wH=516,jH=517,VZ=518,yH=519;var SW="300 es",wW=2000;function g5(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function p5(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function j6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function vH(){let J=j6("canvas");return J.style.display="block",J}var oY={},y6=null;function TQ(...J){let Q="THREE."+J.shift();if(y6)y6("log",Q,...J);else console.log(Q,...J)}function fH(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function r0(...J){J=fH(J);let Q="THREE."+J.shift();if(y6)y6("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function $J(...J){J=fH(J);let Q="THREE."+J.shift();if(y6)y6("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function S7(...J){let Q=J.join(" ");if(Q in oY)return;oY[Q]=!0,r0(...J)}function bH(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var hH={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class E9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var M8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],aY=1234567,IQ=Math.PI/180,w7=180/Math.PI;function s8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(M8[J&255]+M8[J>>8&255]+M8[J>>16&255]+M8[J>>24&255]+"-"+M8[Q&255]+M8[Q>>8&255]+"-"+M8[Q>>16&15|64]+M8[Q>>24&255]+"-"+M8[$&63|128]+M8[$>>8&255]+"-"+M8[$>>16&255]+M8[$>>24&255]+M8[Z&255]+M8[Z>>8&255]+M8[Z>>16&255]+M8[Z>>24&255]).toLowerCase()}function NJ(J,Q,$){return Math.max(Q,Math.min($,J))}function jW(J,Q){return(J%Q+Q)%Q}function m5(J,Q,$,Z,K){return Z+(J-Q)*(K-Z)/($-Q)}function l5(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function zQ(J,Q,$){return(1-$)*J+$*Q}function u5(J,Q,$,Z){return zQ(J,Q,1-Math.exp(-$*Z))}function d5(J,Q=1){return Q-Math.abs(jW(J,Q*2)-Q)}function c5(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function n5(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function s5(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function i5(J,Q){return J+Math.random()*(Q-J)}function o5(J){return J*(0.5-Math.random())}function a5(J){if(J!==void 0)aY=J;let Q=aY+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function r5(J){return J*IQ}function t5(J){return J*w7}function e5(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function JN(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function QN(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function $N(J,Q,$,Z,K){let{cos:W,sin:Y}=Math,X=W($/2),H=Y($/2),U=W((Q+Z)/2),N=Y((Q+Z)/2),F=W((Q-Z)/2),G=Y((Q-Z)/2),E=W((Z-Q)/2),O=Y((Z-Q)/2);switch(K){case"XYX":J.set(X*N,H*F,H*G,X*U);break;case"YZY":J.set(H*G,X*N,H*F,X*U);break;case"ZXZ":J.set(H*F,H*G,X*N,X*U);break;case"XZX":J.set(X*N,H*O,H*E,X*U);break;case"YXY":J.set(H*E,X*N,H*O,X*U);break;case"ZYZ":J.set(H*O,H*E,X*N,X*U);break;default:r0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+K)}}function H9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function mJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var T9={DEG2RAD:IQ,RAD2DEG:w7,generateUUID:s8,clamp:NJ,euclideanModulo:jW,mapLinear:m5,inverseLerp:l5,lerp:zQ,damp:u5,pingpong:d5,smoothstep:c5,smootherstep:n5,randInt:s5,randFloat:i5,randFloatSpread:o5,seededRandom:a5,degToRad:r5,radToDeg:t5,isPowerOfTwo:e5,ceilPowerOfTwo:JN,floorPowerOfTwo:QN,setQuaternionFromProperEuler:$N,normalize:mJ,denormalize:H9};class G0{static{G0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=NJ(this.x,J.x,Q.x),this.y=NJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=NJ(this.x,J,Q),this.y=NJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(NJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(NJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class IJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,Y){let X=$[Z+0],H=$[Z+1],U=$[Z+2],N=$[Z+3],F=K[W+0],G=K[W+1],E=K[W+2],O=K[W+3];if(N!==O||X!==F||H!==G||U!==E){let B=X*F+H*G+U*E+N*O;if(B<0)F=-F,G=-G,E=-E,O=-O,B=-B;let R=1-Y;if(B<0.9995){let q=Math.acos(B),M=Math.sin(q);R=Math.sin(R*q)/M,Y=Math.sin(Y*q)/M,X=X*R+F*Y,H=H*R+G*Y,U=U*R+E*Y,N=N*R+O*Y}else{X=X*R+F*Y,H=H*R+G*Y,U=U*R+E*Y,N=N*R+O*Y;let q=1/Math.sqrt(X*X+H*H+U*U+N*N);X*=q,H*=q,U*=q,N*=q}}J[Q]=X,J[Q+1]=H,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let Y=$[Z],X=$[Z+1],H=$[Z+2],U=$[Z+3],N=K[W],F=K[W+1],G=K[W+2],E=K[W+3];return J[Q]=Y*E+U*N+X*G-H*F,J[Q+1]=X*E+U*F+H*N-Y*G,J[Q+2]=H*E+U*G+Y*F-X*N,J[Q+3]=U*E-Y*N-X*F-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,Y=Math.cos,X=Math.sin,H=Y($/2),U=Y(Z/2),N=Y(K/2),F=X($/2),G=X(Z/2),E=X(K/2);switch(W){case"XYZ":this._x=F*U*N+H*G*E,this._y=H*G*N-F*U*E,this._z=H*U*E+F*G*N,this._w=H*U*N-F*G*E;break;case"YXZ":this._x=F*U*N+H*G*E,this._y=H*G*N-F*U*E,this._z=H*U*E-F*G*N,this._w=H*U*N+F*G*E;break;case"ZXY":this._x=F*U*N-H*G*E,this._y=H*G*N+F*U*E,this._z=H*U*E+F*G*N,this._w=H*U*N-F*G*E;break;case"ZYX":this._x=F*U*N-H*G*E,this._y=H*G*N+F*U*E,this._z=H*U*E-F*G*N,this._w=H*U*N+F*G*E;break;case"YZX":this._x=F*U*N+H*G*E,this._y=H*G*N+F*U*E,this._z=H*U*E-F*G*N,this._w=H*U*N-F*G*E;break;case"XZY":this._x=F*U*N-H*G*E,this._y=H*G*N-F*U*E,this._z=H*U*E+F*G*N,this._w=H*U*N+F*G*E;break;default:r0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],Y=Q[5],X=Q[9],H=Q[2],U=Q[6],N=Q[10],F=$+Y+N;if(F>0){let G=0.5/Math.sqrt(F+1);this._w=0.25/G,this._x=(U-X)*G,this._y=(K-H)*G,this._z=(W-Z)*G}else if($>Y&&$>N){let G=2*Math.sqrt(1+$-Y-N);this._w=(U-X)/G,this._x=0.25*G,this._y=(Z+W)/G,this._z=(K+H)/G}else if(Y>N){let G=2*Math.sqrt(1+Y-$-N);this._w=(K-H)/G,this._x=(Z+W)/G,this._y=0.25*G,this._z=(X+U)/G}else{let G=2*Math.sqrt(1+N-$-Y);this._w=(W-Z)/G,this._x=(K+H)/G,this._y=(X+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(NJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,Y=Q._x,X=Q._y,H=Q._z,U=Q._w;return this._x=$*U+W*Y+Z*H-K*X,this._y=Z*U+W*X+K*Y-$*H,this._z=K*U+W*H+$*X-Z*Y,this._w=W*U-$*Y-Z*X-K*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,Y=this.dot(J);if(Y<0)$=-$,Z=-Z,K=-K,W=-W,Y=-Y;let X=1-Q;if(Y<0.9995){let H=Math.acos(Y),U=Math.sin(H);X=Math.sin(X*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*X+$*Q,this._y=this._y*X+Z*Q,this._z=this._z*X+K*Q,this._w=this._w*X+W*Q,this._onChangeCallback()}else this._x=this._x*X+$*Q,this._y=this._y*X+Z*Q,this._z=this._z*X+K*Q,this._w=this._w*X+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _{static{_.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(rY.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(rY.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,Y=J.z,X=J.w,H=2*(W*Z-Y*$),U=2*(Y*Q-K*Z),N=2*(K*$-W*Q);return this.x=Q+X*H+W*N-Y*U,this.y=$+X*U+Y*H-K*N,this.z=Z+X*N+K*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=NJ(this.x,J.x,Q.x),this.y=NJ(this.y,J.y,Q.y),this.z=NJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=NJ(this.x,J,Q),this.y=NJ(this.y,J,Q),this.z=NJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(NJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,Y=Q.y,X=Q.z;return this.x=Z*X-K*Y,this.y=K*W-$*X,this.z=$*Y-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return HK.copy(this).projectOnVector(J),this.sub(HK)}reflect(J){return this.sub(HK.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(NJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var HK=new _,rY=new IJ;class YJ{static{YJ.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,Y,X,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,Y,X,H)}set(J,Q,$,Z,K,W,Y,X,H){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=Q,U[4]=K,U[5]=X,U[6]=$,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],Y=$[3],X=$[6],H=$[1],U=$[4],N=$[7],F=$[2],G=$[5],E=$[8],O=Z[0],B=Z[3],R=Z[6],q=Z[1],M=Z[4],P=Z[7],V=Z[2],L=Z[5],C=Z[8];return K[0]=W*O+Y*q+X*V,K[3]=W*B+Y*M+X*L,K[6]=W*R+Y*P+X*C,K[1]=H*O+U*q+N*V,K[4]=H*B+U*M+N*L,K[7]=H*R+U*P+N*C,K[2]=F*O+G*q+E*V,K[5]=F*B+G*M+E*L,K[8]=F*R+G*P+E*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8];return Q*W*U-Q*Y*H-$*K*U+$*Y*X+Z*K*H-Z*W*X}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],N=U*W-Y*H,F=Y*X-U*K,G=H*K-W*X,E=Q*N+$*F+Z*G;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/E;return J[0]=N*O,J[1]=(Z*H-U*$)*O,J[2]=(Y*$-Z*W)*O,J[3]=F*O,J[4]=(U*Q-Z*X)*O,J[5]=(Z*K-Y*Q)*O,J[6]=G*O,J[7]=($*X-H*Q)*O,J[8]=(W*Q-$*K)*O,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,Y){let X=Math.cos(K),H=Math.sin(K);return this.set($*X,$*H,-$*(X*W+H*Y)+W+J,-Z*H,Z*X,-Z*(-H*W+X*Y)+Y+Q,0,0,1),this}scale(J,Q){return S7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(UK.makeScale(J,Q)),this}rotate(J){return S7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(UK.makeRotation(-J)),this}translate(J,Q){return S7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(UK.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var UK=new YJ,tY=new YJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),eY=new YJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function ZN(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,Y){if(this.enabled===!1||W===Y||!W||!Y)return K;if(this.spaces[W].transfer==="srgb")K.r=c9(K.r),K.g=c9(K.g),K.b=c9(K.b);if(this.spaces[W].primaries!==this.spaces[Y].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")K.r=S6(K.r),K.g=S6(K.g),K.b=S6(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,Y){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return S7("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return S7("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:tY,fromXYZ:eY,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:tY,fromXYZ:eY,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var FJ=ZN();function c9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function S6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var F6;class yW{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(F6===void 0)F6=j6("canvas");F6.width=J.width,F6.height=J.height;let Z=F6.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=F6}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=j6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=c9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(c9(Q[$]/255)*255);else Q[$]=c9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return r0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var KN=0;class uQ{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:KN++}),this.uuid=s8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,Y=Z.length;W<Y;W++)if(Z[W].isDataTexture)K.push(NK(Z[W].image));else K.push(NK(Z[W]))}else K=NK(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function NK(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return yW.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return r0("Texture: Unable to serialize Texture."),{}}var WN=0,GK=new _;class eJ extends E9{constructor(J=eJ.DEFAULT_IMAGE,Q=eJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,Y=1023,X=1009,H=eJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:WN++}),this.uuid=s8(),this.name="",this.source=new uQ(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=H,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new G0(0,0),this.repeat=new G0(1,1),this.center=new G0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new YJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(GK).x}get height(){return this.source.getSize(GK).y}get depth(){return this.source.getSize(GK).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){r0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){r0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}eJ.DEFAULT_IMAGE=null;eJ.DEFAULT_MAPPING=300;eJ.DEFAULT_ANISOTROPY=1;class lJ{static{lJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,Y=0.1,X=J.elements,H=X[0],U=X[4],N=X[8],F=X[1],G=X[5],E=X[9],O=X[2],B=X[6],R=X[10];if(Math.abs(U-F)<0.01&&Math.abs(N-O)<0.01&&Math.abs(E-B)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(N+O)<0.1&&Math.abs(E+B)<0.1&&Math.abs(H+G+R-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let M=(H+1)/2,P=(G+1)/2,V=(R+1)/2,L=(U+F)/4,C=(N+O)/4,A=(E+B)/4;if(M>P&&M>V)if(M<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(M),Z=L/$,K=C/$;else if(P>V)if(P<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(P),$=L/Z,K=A/Z;else if(V<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(V),$=C/K,Z=A/K;return this.set($,Z,K,Q),this}let q=Math.sqrt((B-E)*(B-E)+(N-O)*(N-O)+(F-U)*(F-U));if(Math.abs(q)<0.001)q=1;return this.x=(B-E)/q,this.y=(N-O)/q,this.z=(F-U)/q,this.w=Math.acos((H+G+R-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=NJ(this.x,J.x,Q.x),this.y=NJ(this.y,J.y,Q.y),this.z=NJ(this.z,J.z,Q.z),this.w=NJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=NJ(this.x,J,Q),this.y=NJ(this.y,J,Q),this.z=NJ(this.z,J,Q),this.w=NJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(NJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vW extends E9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new lJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new lJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new eJ(Z),W=$.count;for(let Y=0;Y<W;Y++)this.textures[Y]=K.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new uQ(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Q8 extends vW{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class DZ extends eJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class fW extends eJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class QJ{static{QJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,Y,X,H,U,N,F,G,E,O,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,Y,X,H,U,N,F,G,E,O,B)}set(J,Q,$,Z,K,W,Y,X,H,U,N,F,G,E,O,B){let R=this.elements;return R[0]=J,R[4]=Q,R[8]=$,R[12]=Z,R[1]=K,R[5]=W,R[9]=Y,R[13]=X,R[2]=H,R[6]=U,R[10]=N,R[14]=F,R[3]=G,R[7]=E,R[11]=O,R[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new QJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/E6.setFromMatrixColumn(J,0).length(),K=1/E6.setFromMatrixColumn(J,1).length(),W=1/E6.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),Y=Math.sin($),X=Math.cos(Z),H=Math.sin(Z),U=Math.cos(K),N=Math.sin(K);if(J.order==="XYZ"){let F=W*U,G=W*N,E=Y*U,O=Y*N;Q[0]=X*U,Q[4]=-X*N,Q[8]=H,Q[1]=G+E*H,Q[5]=F-O*H,Q[9]=-Y*X,Q[2]=O-F*H,Q[6]=E+G*H,Q[10]=W*X}else if(J.order==="YXZ"){let F=X*U,G=X*N,E=H*U,O=H*N;Q[0]=F+O*Y,Q[4]=E*Y-G,Q[8]=W*H,Q[1]=W*N,Q[5]=W*U,Q[9]=-Y,Q[2]=G*Y-E,Q[6]=O+F*Y,Q[10]=W*X}else if(J.order==="ZXY"){let F=X*U,G=X*N,E=H*U,O=H*N;Q[0]=F-O*Y,Q[4]=-W*N,Q[8]=E+G*Y,Q[1]=G+E*Y,Q[5]=W*U,Q[9]=O-F*Y,Q[2]=-W*H,Q[6]=Y,Q[10]=W*X}else if(J.order==="ZYX"){let F=W*U,G=W*N,E=Y*U,O=Y*N;Q[0]=X*U,Q[4]=E*H-G,Q[8]=F*H+O,Q[1]=X*N,Q[5]=O*H+F,Q[9]=G*H-E,Q[2]=-H,Q[6]=Y*X,Q[10]=W*X}else if(J.order==="YZX"){let F=W*X,G=W*H,E=Y*X,O=Y*H;Q[0]=X*U,Q[4]=O-F*N,Q[8]=E*N+G,Q[1]=N,Q[5]=W*U,Q[9]=-Y*U,Q[2]=-H*U,Q[6]=G*N+E,Q[10]=F-O*N}else if(J.order==="XZY"){let F=W*X,G=W*H,E=Y*X,O=Y*H;Q[0]=X*U,Q[4]=-N,Q[8]=H*U,Q[1]=F*N+O,Q[5]=W*U,Q[9]=G*N-E,Q[2]=E*N-G,Q[6]=Y*U,Q[10]=O*N+F}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(YN,J,XN)}lookAt(J,Q,$){let Z=this.elements;if(b8.subVectors(J,Q),b8.lengthSq()===0)b8.z=1;if(b8.normalize(),Q7.crossVectors($,b8),Q7.lengthSq()===0){if(Math.abs($.z)===1)b8.x+=0.0001;else b8.z+=0.0001;b8.normalize(),Q7.crossVectors($,b8)}return Q7.normalize(),z$.crossVectors(b8,Q7),Z[0]=Q7.x,Z[4]=z$.x,Z[8]=b8.x,Z[1]=Q7.y,Z[5]=z$.y,Z[9]=b8.y,Z[2]=Q7.z,Z[6]=z$.z,Z[10]=b8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],Y=$[4],X=$[8],H=$[12],U=$[1],N=$[5],F=$[9],G=$[13],E=$[2],O=$[6],B=$[10],R=$[14],q=$[3],M=$[7],P=$[11],V=$[15],L=Z[0],C=Z[4],A=Z[8],D=Z[12],I=Z[1],c=Z[5],y=Z[9],u=Z[13],J0=Z[2],f=Z[6],v=Z[10],b=Z[14],j=Z[3],d=Z[7],h=Z[11],s=Z[15];return K[0]=W*L+Y*I+X*J0+H*j,K[4]=W*C+Y*c+X*f+H*d,K[8]=W*A+Y*y+X*v+H*h,K[12]=W*D+Y*u+X*b+H*s,K[1]=U*L+N*I+F*J0+G*j,K[5]=U*C+N*c+F*f+G*d,K[9]=U*A+N*y+F*v+G*h,K[13]=U*D+N*u+F*b+G*s,K[2]=E*L+O*I+B*J0+R*j,K[6]=E*C+O*c+B*f+R*d,K[10]=E*A+O*y+B*v+R*h,K[14]=E*D+O*u+B*b+R*s,K[3]=q*L+M*I+P*J0+V*j,K[7]=q*C+M*c+P*f+V*d,K[11]=q*A+M*y+P*v+V*h,K[15]=q*D+M*u+P*b+V*s,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],Y=J[5],X=J[9],H=J[13],U=J[2],N=J[6],F=J[10],G=J[14],E=J[3],O=J[7],B=J[11],R=J[15],q=X*G-H*F,M=Y*G-H*N,P=Y*F-X*N,V=W*G-H*U,L=W*F-X*U,C=W*N-Y*U;return Q*(O*q-B*M+R*P)-$*(E*q-B*V+R*L)+Z*(E*M-O*V+R*C)-K*(E*P-O*L+B*C)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],Y=J[9],X=J[2],H=J[6],U=J[10];return Q*(W*U-Y*H)-$*(K*U-Y*X)+Z*(K*H-W*X)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],N=J[9],F=J[10],G=J[11],E=J[12],O=J[13],B=J[14],R=J[15],q=Q*Y-$*W,M=Q*X-Z*W,P=Q*H-K*W,V=$*X-Z*Y,L=$*H-K*Y,C=Z*H-K*X,A=U*O-N*E,D=U*B-F*E,I=U*R-G*E,c=N*B-F*O,y=N*R-G*O,u=F*R-G*B,J0=q*u-M*y+P*c+V*I-L*D+C*A;if(J0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let f=1/J0;return J[0]=(Y*u-X*y+H*c)*f,J[1]=(Z*y-$*u-K*c)*f,J[2]=(O*C-B*L+R*V)*f,J[3]=(F*L-N*C-G*V)*f,J[4]=(X*I-W*u-H*D)*f,J[5]=(Q*u-Z*I+K*D)*f,J[6]=(B*P-E*C-R*M)*f,J[7]=(U*C-F*P+G*M)*f,J[8]=(W*y-Y*I+H*A)*f,J[9]=($*I-Q*y-K*A)*f,J[10]=(E*L-O*P+R*q)*f,J[11]=(N*P-U*L-G*q)*f,J[12]=(Y*D-W*c-X*A)*f,J[13]=(Q*c-$*D+Z*A)*f,J[14]=(O*M-E*V-B*q)*f,J[15]=(U*V-N*M+F*q)*f,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,Y=J.y,X=J.z,H=K*W,U=K*Y;return this.set(H*W+$,H*Y-Z*X,H*X+Z*Y,0,H*Y+Z*X,U*Y+$,U*X-Z*W,0,H*X-Z*Y,U*X+Z*W,K*X*X+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,Y=Q._z,X=Q._w,H=K+K,U=W+W,N=Y+Y,F=K*H,G=K*U,E=K*N,O=W*U,B=W*N,R=Y*N,q=X*H,M=X*U,P=X*N,V=$.x,L=$.y,C=$.z;return Z[0]=(1-(O+R))*V,Z[1]=(G+P)*V,Z[2]=(E-M)*V,Z[3]=0,Z[4]=(G-P)*L,Z[5]=(1-(F+R))*L,Z[6]=(B+q)*L,Z[7]=0,Z[8]=(E+M)*C,Z[9]=(B-q)*C,Z[10]=(1-(F+O))*C,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=E6.set(Z[0],Z[1],Z[2]).length(),Y=E6.set(Z[4],Z[5],Z[6]).length(),X=E6.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;W9.copy(this);let H=1/W,U=1/Y,N=1/X;return W9.elements[0]*=H,W9.elements[1]*=H,W9.elements[2]*=H,W9.elements[4]*=U,W9.elements[5]*=U,W9.elements[6]*=U,W9.elements[8]*=N,W9.elements[9]*=N,W9.elements[10]*=N,Q.setFromRotationMatrix(W9),$.x=W,$.y=Y,$.z=X,this}makePerspective(J,Q,$,Z,K,W,Y=2000,X=!1){let H=this.elements,U=2*K/(Q-J),N=2*K/($-Z),F=(Q+J)/(Q-J),G=($+Z)/($-Z),E,O;if(X)E=K/(W-K),O=W*K/(W-K);else if(Y===2000)E=-(W+K)/(W-K),O=-2*W*K/(W-K);else if(Y===2001)E=-W/(W-K),O=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=F,H[12]=0,H[1]=0,H[5]=N,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=E,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,Y=2000,X=!1){let H=this.elements,U=2/(Q-J),N=2/($-Z),F=-(Q+J)/(Q-J),G=-($+Z)/($-Z),E,O;if(X)E=1/(W-K),O=W/(W-K);else if(Y===2000)E=-2/(W-K),O=-(W+K)/(W-K);else if(Y===2001)E=-1/(W-K),O=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=0,H[12]=F,H[1]=0,H[5]=N,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=E,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var E6=new _,W9=new QJ,YN=new _(0,0,0),XN=new _(1,1,1),Q7=new _,z$=new _,b8=new _,JX=new QJ,QX=new IJ;class U9{constructor(J=0,Q=0,$=0,Z=U9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],Y=Z[8],X=Z[1],H=Z[5],U=Z[9],N=Z[2],F=Z[6],G=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(NJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-NJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,G),this._z=Math.atan2(X,H);else this._y=Math.atan2(-N,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(NJ(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(X,K);break;case"ZYX":if(this._y=Math.asin(-NJ(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(F,G),this._z=Math.atan2(X,K);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(NJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-N,K);else this._x=0,this._y=Math.atan2(Y,G);break;case"XZY":if(this._z=Math.asin(-NJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,H),this._y=Math.atan2(Y,K);else this._x=Math.atan2(-U,G),this._y=0;break;default:r0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return JX.makeRotationFromQuaternion(J),this.setFromRotationMatrix(JX,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return QX.setFromEuler(this),this.setFromQuaternion(QX,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}U9.DEFAULT_ORDER="XYZ";class BZ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var HN=0,$X=new _,q6=new IJ,g9=new QJ,A$=new _,EQ=new _,UN=new _,NN=new IJ,ZX=new _(1,0,0),KX=new _(0,1,0),WX=new _(0,0,1),YX={type:"added"},GN={type:"removed"},O6={type:"childadded",child:null},FK={type:"childremoved",child:null};class wJ extends E9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:HN++}),this.uuid=s8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wJ.DEFAULT_UP.clone();let J=new _,Q=new U9,$=new IJ,Z=new _(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new QJ},normalMatrix:{value:new YJ}}),this.matrix=new QJ,this.matrixWorld=new QJ,this.matrixAutoUpdate=wJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new BZ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return q6.setFromAxisAngle(J,Q),this.quaternion.multiply(q6),this}rotateOnWorldAxis(J,Q){return q6.setFromAxisAngle(J,Q),this.quaternion.premultiply(q6),this}rotateX(J){return this.rotateOnAxis(ZX,J)}rotateY(J){return this.rotateOnAxis(KX,J)}rotateZ(J){return this.rotateOnAxis(WX,J)}translateOnAxis(J,Q){return $X.copy(J).applyQuaternion(this.quaternion),this.position.add($X.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(ZX,J)}translateY(J){return this.translateOnAxis(KX,J)}translateZ(J){return this.translateOnAxis(WX,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(g9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)A$.copy(J);else A$.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),EQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)g9.lookAt(EQ,A$,this.up);else g9.lookAt(A$,EQ,this.up);if(this.quaternion.setFromRotationMatrix(g9),Z)g9.extractRotation(Z.matrixWorld),q6.setFromRotationMatrix(g9),this.quaternion.premultiply(q6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return $J("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(YX),O6.child=J,this.dispatchEvent(O6),O6.child=null;else $J("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(GN),FK.child=J,this.dispatchEvent(FK),FK.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),g9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),g9.multiply(J.parent.matrixWorld);return J.applyMatrix4(g9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(YX),O6.child=J,this.dispatchEvent(O6),O6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(EQ,J,UN),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(EQ,NN,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,Y=K.length;W<Y;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let H=0,U=X.length;H<U;H++){let N=X[H];K(J.shapes,N)}else K(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,H=this.material.length;X<H;X++)Y.push(K(J.materials,this.material[X]));Z.material=Y}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(K(J.animations,X))}}if(Q){let Y=W(J.geometries),X=W(J.materials),H=W(J.textures),U=W(J.images),N=W(J.shapes),F=W(J.skeletons),G=W(J.animations),E=W(J.nodes);if(Y.length>0)$.geometries=Y;if(X.length>0)$.materials=X;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(N.length>0)$.shapes=N;if(F.length>0)$.skeletons=F;if(G.length>0)$.animations=G;if(E.length>0)$.nodes=E}return $.object=Z,$;function W(Y){let X=[];for(let H in Y){let U=Y[H];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wJ.DEFAULT_UP=new _(0,1,0);wJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;wJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class SJ extends wJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var FN={type:"move"};class dQ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new SJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new SJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new SJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,Y=this._targetRay,X=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let B=Q.getJointPose(O,$),R=this._getHandJoint(H,O);if(B!==null)R.matrix.fromArray(B.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=B.radius;R.visible=B!==null}let U=H.joints["index-finger-tip"],N=H.joints["thumb-tip"],F=U.position.distanceTo(N.position),G=0.02,E=0.005;if(H.inputState.pinching&&F>G+E)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&F<=G-E)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;if(X.eventsEnabled)X.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(FN)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new SJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var xH={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$7={h:0,s:0,l:0},_$={h:0,s:0,l:0};function EK(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class f0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,FJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=FJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,FJ.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=FJ.workingColorSpace){if(J=jW(J,1),Q=NJ(Q,0,1),$=NJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=EK(W,K,J+0.3333333333333333),this.g=EK(W,K,J),this.b=EK(W,K,J-0.3333333333333333)}return FJ.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)r0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],Y=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:r0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else r0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=xH[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else r0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=c9(J.r),this.g=c9(J.g),this.b=c9(J.b),this}copyLinearToSRGB(J){return this.r=S6(J.r),this.g=S6(J.g),this.b=S6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return FJ.workingToColorSpace(k8.copy(this),J),Math.round(NJ(k8.r*255,0,255))*65536+Math.round(NJ(k8.g*255,0,255))*256+Math.round(NJ(k8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=FJ.workingColorSpace){FJ.workingToColorSpace(k8.copy(this),Q);let{r:$,g:Z,b:K}=k8,W=Math.max($,Z,K),Y=Math.min($,Z,K),X,H,U=(Y+W)/2;if(Y===W)X=0,H=0;else{let N=W-Y;switch(H=U<=0.5?N/(W+Y):N/(2-W-Y),W){case $:X=(Z-K)/N+(Z<K?6:0);break;case Z:X=(K-$)/N+2;break;case K:X=($-Z)/N+4;break}X/=6}return J.h=X,J.s=H,J.l=U,J}getRGB(J,Q=FJ.workingColorSpace){return FJ.workingToColorSpace(k8.copy(this),Q),J.r=k8.r,J.g=k8.g,J.b=k8.b,J}getStyle(J="srgb"){FJ.workingToColorSpace(k8.copy(this),J);let{r:Q,g:$,b:Z}=k8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL($7),this.setHSL($7.h+J,$7.s+Q,$7.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL($7),J.getHSL(_$);let $=zQ($7.h,_$.h,Q),Z=zQ($7.s,_$.s,Q),K=zQ($7.l,_$.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var k8=new f0;f0.NAMES=xH;class m7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new f0(J),this.density=Q}clone(){return new m7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class u6 extends wJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new U9,this.environmentIntensity=1,this.environmentRotation=new U9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var Y9=new _,p9=new _,qK=new _,m9=new _,R6=new _,L6=new _,XX=new _,OK=new _,RK=new _,LK=new _,VK=new lJ,DK=new lJ,BK=new lJ;class x8{constructor(J=new _,Q=new _,$=new _){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),Y9.subVectors(J,Q),Z.cross(Y9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){Y9.subVectors(Z,Q),p9.subVectors($,Q),qK.subVectors(J,Q);let W=Y9.dot(Y9),Y=Y9.dot(p9),X=Y9.dot(qK),H=p9.dot(p9),U=p9.dot(qK),N=W*H-Y*Y;if(N===0)return K.set(0,0,0),null;let F=1/N,G=(H*X-Y*U)*F,E=(W*U-Y*X)*F;return K.set(1-G-E,E,G)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,m9)===null)return!1;return m9.x>=0&&m9.y>=0&&m9.x+m9.y<=1}static getInterpolation(J,Q,$,Z,K,W,Y,X){if(this.getBarycoord(J,Q,$,Z,m9)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(K,m9.x),X.addScaledVector(W,m9.y),X.addScaledVector(Y,m9.z),X}static getInterpolatedAttribute(J,Q,$,Z,K,W){return VK.setScalar(0),DK.setScalar(0),BK.setScalar(0),VK.fromBufferAttribute(J,Q),DK.fromBufferAttribute(J,$),BK.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(VK,K.x),W.addScaledVector(DK,K.y),W.addScaledVector(BK,K.z),W}static isFrontFacing(J,Q,$,Z){return Y9.subVectors($,Q),p9.subVectors(J,Q),Y9.cross(p9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return Y9.subVectors(this.c,this.b),p9.subVectors(this.a,this.b),Y9.cross(p9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return x8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return x8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return x8.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return x8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return x8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,Y;R6.subVectors(Z,$),L6.subVectors(K,$),OK.subVectors(J,$);let X=R6.dot(OK),H=L6.dot(OK);if(X<=0&&H<=0)return Q.copy($);RK.subVectors(J,Z);let U=R6.dot(RK),N=L6.dot(RK);if(U>=0&&N<=U)return Q.copy(Z);let F=X*N-U*H;if(F<=0&&X>=0&&U<=0)return W=X/(X-U),Q.copy($).addScaledVector(R6,W);LK.subVectors(J,K);let G=R6.dot(LK),E=L6.dot(LK);if(E>=0&&G<=E)return Q.copy(K);let O=G*H-X*E;if(O<=0&&H>=0&&E<=0)return Y=H/(H-E),Q.copy($).addScaledVector(L6,Y);let B=U*E-G*N;if(B<=0&&N-U>=0&&G-E>=0)return XX.subVectors(K,Z),Y=(N-U)/(N-U+(G-E)),Q.copy(Z).addScaledVector(XX,Y);let R=1/(B+O+F);return W=O*R,Y=F*R,Q.copy($).addScaledVector(R6,W).addScaledVector(L6,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class A8{constructor(J=new _(1/0,1/0,1/0),Q=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(X9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(X9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=X9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,Y=K.count;W<Y;W++){if(J.isMesh===!0)J.getVertexPosition(W,X9);else X9.fromBufferAttribute(K,W);X9.applyMatrix4(J.matrixWorld),this.expandByPoint(X9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();T$.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();T$.copy($.boundingBox)}T$.applyMatrix4(J.matrixWorld),this.union(T$)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,X9),X9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(qQ),S$.subVectors(this.max,qQ),V6.subVectors(J.a,qQ),D6.subVectors(J.b,qQ),B6.subVectors(J.c,qQ),Z7.subVectors(D6,V6),K7.subVectors(B6,D6),z7.subVectors(V6,B6);let Q=[0,-Z7.z,Z7.y,0,-K7.z,K7.y,0,-z7.z,z7.y,Z7.z,0,-Z7.x,K7.z,0,-K7.x,z7.z,0,-z7.x,-Z7.y,Z7.x,0,-K7.y,K7.x,0,-z7.y,z7.x,0];if(!MK(Q,V6,D6,B6,S$))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!MK(Q,V6,D6,B6,S$))return!1;return w$.crossVectors(Z7,K7),Q=[w$.x,w$.y,w$.z],MK(Q,V6,D6,B6,S$)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,X9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(X9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return l9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),l9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),l9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),l9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),l9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),l9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),l9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),l9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(l9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var l9=[new _,new _,new _,new _,new _,new _,new _,new _],X9=new _,T$=new A8,V6=new _,D6=new _,B6=new _,Z7=new _,K7=new _,z7=new _,qQ=new _,S$=new _,w$=new _,A7=new _;function MK(J,Q,$,Z,K){for(let W=0,Y=J.length-3;W<=Y;W+=3){A7.fromArray(J,W);let X=K.x*Math.abs(A7.x)+K.y*Math.abs(A7.y)+K.z*Math.abs(A7.z),H=Q.dot(A7),U=$.dot(A7),N=Z.dot(A7);if(Math.max(-Math.max(H,U,N),Math.min(H,U,N))>X)return!1}return!0}var W8=new _,j$=new G0,EN=0;class aJ extends E9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:EN++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)j$.fromBufferAttribute(this,Q),j$.applyMatrix3(J),this.setXY(Q,j$.x,j$.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.applyMatrix3(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.applyMatrix4(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.applyNormalMatrix(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.transformDirection(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=H9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=H9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=H9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=H9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=H9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array),Z=mJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array),Z=mJ(Z,this.array),K=mJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class MZ extends aJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class kZ extends aJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class WJ extends aJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var qN=new A8,OQ=new _,kK=new _;class p8{constructor(J=new _,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else qN.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;OQ.subVectors(J,this.center);let Q=OQ.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(OQ,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else kK.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(OQ.copy(J.center).add(kK)),this.expandByPoint(OQ.copy(J.center).sub(kK));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var ON=0,c8=new QJ,CK=new wJ,M6=new _,h8=new A8,RQ=new A8,E8=new _;class vJ extends E9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ON++}),this.uuid=s8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((g5(J))?kZ:MZ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new YJ().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return c8.makeRotationFromQuaternion(J),this.applyMatrix4(c8),this}rotateX(J){return c8.makeRotationX(J),this.applyMatrix4(c8),this}rotateY(J){return c8.makeRotationY(J),this.applyMatrix4(c8),this}rotateZ(J){return c8.makeRotationZ(J),this.applyMatrix4(c8),this}translate(J,Q,$){return c8.makeTranslation(J,Q,$),this.applyMatrix4(c8),this}scale(J,Q,$){return c8.makeScale(J,Q,$),this.applyMatrix4(c8),this}lookAt(J){return CK.lookAt(J),CK.updateMatrix(),this.applyMatrix4(CK.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(M6).negate(),this.translate(M6.x,M6.y,M6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new WJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)r0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new A8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){$J("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(h8.setFromBufferAttribute(K),this.morphTargetsRelative)E8.addVectors(this.boundingBox.min,h8.min),this.boundingBox.expandByPoint(E8),E8.addVectors(this.boundingBox.max,h8.max),this.boundingBox.expandByPoint(E8);else this.boundingBox.expandByPoint(h8.min),this.boundingBox.expandByPoint(h8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))$J('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new p8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){$J("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(J){let $=this.boundingSphere.center;if(h8.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let Y=Q[K];if(RQ.setFromBufferAttribute(Y),this.morphTargetsRelative)E8.addVectors(h8.min,RQ.min),h8.expandByPoint(E8),E8.addVectors(h8.max,RQ.max),h8.expandByPoint(E8);else h8.expandByPoint(RQ.min),h8.expandByPoint(RQ.max)}h8.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)E8.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(E8));if(Q)for(let K=0,W=Q.length;K<W;K++){let Y=Q[K],X=this.morphTargetsRelative;for(let H=0,U=Y.count;H<U;H++){if(E8.fromBufferAttribute(Y,H),X)M6.fromBufferAttribute(J,H),E8.add(M6);Z=Math.max(Z,$.distanceToSquared(E8))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))$J('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){$J("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new aJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let Y=[],X=[];for(let A=0;A<$.count;A++)Y[A]=new _,X[A]=new _;let H=new _,U=new _,N=new _,F=new G0,G=new G0,E=new G0,O=new _,B=new _;function R(A,D,I){H.fromBufferAttribute($,A),U.fromBufferAttribute($,D),N.fromBufferAttribute($,I),F.fromBufferAttribute(K,A),G.fromBufferAttribute(K,D),E.fromBufferAttribute(K,I),U.sub(H),N.sub(H),G.sub(F),E.sub(F);let c=1/(G.x*E.y-E.x*G.y);if(!isFinite(c))return;O.copy(U).multiplyScalar(E.y).addScaledVector(N,-G.y).multiplyScalar(c),B.copy(N).multiplyScalar(G.x).addScaledVector(U,-E.x).multiplyScalar(c),Y[A].add(O),Y[D].add(O),Y[I].add(O),X[A].add(B),X[D].add(B),X[I].add(B)}let q=this.groups;if(q.length===0)q=[{start:0,count:J.count}];for(let A=0,D=q.length;A<D;++A){let I=q[A],c=I.start,y=I.count;for(let u=c,J0=c+y;u<J0;u+=3)R(J.getX(u+0),J.getX(u+1),J.getX(u+2))}let M=new _,P=new _,V=new _,L=new _;function C(A){V.fromBufferAttribute(Z,A),L.copy(V);let D=Y[A];M.copy(D),M.sub(V.multiplyScalar(V.dot(D))).normalize(),P.crossVectors(L,D);let c=P.dot(X[A])<0?-1:1;W.setXYZW(A,M.x,M.y,M.z,c)}for(let A=0,D=q.length;A<D;++A){let I=q[A],c=I.start,y=I.count;for(let u=c,J0=c+y;u<J0;u+=3)C(J.getX(u+0)),C(J.getX(u+1)),C(J.getX(u+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new aJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let F=0,G=$.count;F<G;F++)$.setXYZ(F,0,0,0);let Z=new _,K=new _,W=new _,Y=new _,X=new _,H=new _,U=new _,N=new _;if(J)for(let F=0,G=J.count;F<G;F+=3){let E=J.getX(F+0),O=J.getX(F+1),B=J.getX(F+2);Z.fromBufferAttribute(Q,E),K.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,B),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),Y.fromBufferAttribute($,E),X.fromBufferAttribute($,O),H.fromBufferAttribute($,B),Y.add(U),X.add(U),H.add(U),$.setXYZ(E,Y.x,Y.y,Y.z),$.setXYZ(O,X.x,X.y,X.z),$.setXYZ(B,H.x,H.y,H.z)}else for(let F=0,G=Q.count;F<G;F+=3)Z.fromBufferAttribute(Q,F+0),K.fromBufferAttribute(Q,F+1),W.fromBufferAttribute(Q,F+2),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),$.setXYZ(F+0,U.x,U.y,U.z),$.setXYZ(F+1,U.x,U.y,U.z),$.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)E8.fromBufferAttribute(J,Q),E8.normalize(),J.setXYZ(Q,E8.x,E8.y,E8.z)}toNonIndexed(){function J(Y,X){let{array:H,itemSize:U,normalized:N}=Y,F=new H.constructor(X.length*U),G=0,E=0;for(let O=0,B=X.length;O<B;O++){if(Y.isInterleavedBufferAttribute)G=X[O]*Y.data.stride+Y.offset;else G=X[O]*U;for(let R=0;R<U;R++)F[E++]=H[G++]}return new aJ(F,U,N)}if(this.index===null)return r0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new vJ,$=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],H=J(X,$);Q.setAttribute(Y,H)}let K=this.morphAttributes;for(let Y in K){let X=[],H=K[Y];for(let U=0,N=H.length;U<N;U++){let F=H[U],G=J(F,$);X.push(G)}Q.morphAttributes[Y]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let Y=0,X=W.length;Y<X;Y++){let H=W[Y];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let X=this.parameters;for(let H in X)if(X[H]!==void 0)J[H]=X[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let X in $){let H=$[X];J.data.attributes[X]=H.toJSON(J.data)}let Z={},K=!1;for(let X in this.morphAttributes){let H=this.morphAttributes[X],U=[];for(let N=0,F=H.length;N<F;N++){let G=H[N];U.push(G.toJSON(J.data))}if(U.length>0)Z[X]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let H in Z){let U=Z[H];this.setAttribute(H,U.clone(Q))}let K=J.morphAttributes;for(let H in K){let U=[],N=K[H];for(let F=0,G=N.length;F<G;F++)U.push(N[F].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let N=W[H];this.addGroup(N.start,N.count,N.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class d6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=s8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,K=this.stride;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=s8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=s8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var z8=new _;class X7{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)z8.fromBufferAttribute(this,Q),z8.applyMatrix4(J),this.setXYZ(Q,z8.x,z8.y,z8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)z8.fromBufferAttribute(this,Q),z8.applyNormalMatrix(J),this.setXYZ(Q,z8.x,z8.y,z8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)z8.fromBufferAttribute(this,Q),z8.transformDirection(J),this.setXYZ(Q,z8.x,z8.y,z8.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=H9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=mJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=H9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=H9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=H9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=H9(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array),Z=mJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array),Z=mJ(Z,this.array),K=mJ(K,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=K,this}clone(J){if(J===void 0){TQ("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)Q.push(this.data.array[Z+K])}return new aJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new X7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){TQ("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)Q.push(this.data.array[Z+K])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var PK=new _,RN=new _,LN=new YJ;class n8{constructor(J=new _(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=PK.subVectors($,Q).cross(RN.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(PK),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||LN.getNormalMatrix(J),Z=this.coplanarPoint(PK).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var VN=0;class w8 extends E9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:VN++}),this.uuid=s8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new f0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){r0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){r0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let Y in K){let X=K[Y];delete X.metadata,W.push(X)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new f0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new n8().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new G0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new G0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class l7 extends w8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new f0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var k6,LQ=new _,C6=new _,P6=new _,I6=new G0,VQ=new G0,gH=new QJ,y$=new _,DQ=new _,v$=new _,HX=new G0,IK=new G0,UX=new G0;class c6 extends wJ{constructor(J=new l7){super();if(this.isSprite=!0,this.type="Sprite",k6===void 0){k6=new vJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new d6(Q,5);k6.setIndex([0,1,2,0,2,3]),k6.setAttribute("position",new X7($,3,0,!1)),k6.setAttribute("uv",new X7($,2,3,!1))}this.geometry=k6,this.material=J,this.center=new G0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)$J('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(C6.setFromMatrixScale(this.matrixWorld),gH.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),P6.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)C6.multiplyScalar(-P6.z);let $=this.material.rotation,Z,K;if($!==0)K=Math.cos($),Z=Math.sin($);let W=this.center;f$(y$.set(-0.5,-0.5,0),P6,W,C6,Z,K),f$(DQ.set(0.5,-0.5,0),P6,W,C6,Z,K),f$(v$.set(0.5,0.5,0),P6,W,C6,Z,K),HX.set(0,0),IK.set(1,0),UX.set(1,1);let Y=J.ray.intersectTriangle(y$,DQ,v$,!1,LQ);if(Y===null){if(f$(DQ.set(-0.5,0.5,0),P6,W,C6,Z,K),IK.set(0,1),Y=J.ray.intersectTriangle(y$,v$,DQ,!1,LQ),Y===null)return}let X=J.ray.origin.distanceTo(LQ);if(X<J.near||X>J.far)return;Q.push({distance:X,point:LQ.clone(),uv:x8.getInterpolation(LQ,y$,DQ,v$,HX,IK,UX,new G0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function f$(J,Q,$,Z,K,W){if(I6.subVectors(J,$).addScalar(0.5).multiply(Z),K!==void 0)VQ.x=W*I6.x-K*I6.y,VQ.y=K*I6.x+W*I6.y;else VQ.copy(I6);J.copy(Q),J.x+=VQ.x,J.y+=VQ.y,J.applyMatrix4(gH)}var u9=new _,zK=new _,b$=new _,h$=new _;class q7{constructor(J=new _,Q=new _(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,u9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=u9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return u9.copy(this.origin).addScaledVector(this.direction,Q),u9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){zK.copy(J).add(Q).multiplyScalar(0.5),b$.copy(Q).sub(J).normalize(),h$.copy(this.origin).sub(zK);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(b$),Y=h$.dot(this.direction),X=-h$.dot(b$),H=h$.lengthSq(),U=Math.abs(1-W*W),N,F,G,E;if(U>0)if(N=W*X-Y,F=W*Y-X,E=K*U,N>=0)if(F>=-E)if(F<=E){let O=1/U;N*=O,F*=O,G=N*(N+W*F+2*Y)+F*(W*N+F+2*X)+H}else F=K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;else F=-K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;else if(F<=-E)N=Math.max(0,-(-W*K+Y)),F=N>0?-K:Math.min(Math.max(-K,-X),K),G=-N*N+F*(F+2*X)+H;else if(F<=E)N=0,F=Math.min(Math.max(-K,-X),K),G=F*(F+2*X)+H;else N=Math.max(0,-(W*K+Y)),F=N>0?K:Math.min(Math.max(-K,-X),K),G=-N*N+F*(F+2*X)+H;else F=W>0?-K:K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(zK).addScaledVector(b$,F);return G}intersectSphere(J,Q){if(J.radius<0)return null;u9.subVectors(J.center,this.origin);let $=u9.dot(this.direction),Z=u9.dot(u9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),Y=$-W,X=$+W;if(X<0)return null;if(Y<0)return this.at(X,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,Y,X,H=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,F=this.origin;if(H>=0)$=(J.min.x-F.x)*H,Z=(J.max.x-F.x)*H;else $=(J.max.x-F.x)*H,Z=(J.min.x-F.x)*H;if(U>=0)K=(J.min.y-F.y)*U,W=(J.max.y-F.y)*U;else K=(J.max.y-F.y)*U,W=(J.min.y-F.y)*U;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(N>=0)Y=(J.min.z-F.z)*N,X=(J.max.z-F.z)*N;else Y=(J.max.z-F.z)*N,X=(J.min.z-F.z)*N;if($>X||Y>Z)return null;if(Y>$||$!==$)$=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,u9)!==null}intersectTriangle(J,Q,$,Z,K){let W=this.origin,Y=this.direction,X=Y.x,H=Y.y,U=Y.z,N=J.x-W.x,F=J.y-W.y,G=J.z-W.z,E=Q.x-W.x,O=Q.y-W.y,B=Q.z-W.z,R=$.x-W.x,q=$.y-W.y,M=$.z-W.z,P=Math.abs(X),V=Math.abs(H),L=Math.abs(U),C,A,D,I,c,y,u,J0,f,v,b,j;if(P>=V&&P>=L)if(D=X,y=N,f=E,j=R,X>=0)C=H,A=U,I=F,c=G,u=O,J0=B,v=q,b=M;else C=U,A=H,I=G,c=F,u=B,J0=O,v=M,b=q;else if(V>=L)if(D=H,y=F,f=O,j=q,H>=0)C=U,A=X,I=G,c=N,u=B,J0=E,v=M,b=R;else C=X,A=U,I=N,c=G,u=E,J0=B,v=R,b=M;else if(D=U,y=G,f=B,j=M,U>=0)C=X,A=H,I=N,c=F,u=E,J0=O,v=R,b=q;else C=H,A=X,I=F,c=N,u=O,J0=E,v=q,b=R;if(D===0)return null;let d=C/D,h=A/D,s=1/D,K0=I-d*y,_0=c-h*y,q0=u-d*f,k0=J0-h*f,d0=v-d*j,Z0=b-h*j,w=d0*k0-Z0*q0,m=K0*Z0-_0*d0,n=q0*_0-k0*K0;if(Z){if(w<0||m<0||n<0)return null}else if((w<0||m<0||n<0)&&(w>0||m>0||n>0))return null;let $0=w+m+n;if($0===0)return null;let t=s*(w*y+m*f+n*j);if($0>0?t<0:t>0)return null;return this.at(t/$0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fJ extends w8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new f0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new U9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var NX=new QJ,_7=new q7,x$=new p8,GX=new _,g$=new _,p$=new _,m$=new _,AK=new _,l$=new _,FX=new _,u$=new _;class M0 extends wJ{constructor(J=new vJ,Q=new fJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(K&&Y){l$.set(0,0,0);for(let X=0,H=K.length;X<H;X++){let U=Y[X],N=K[X];if(U===0)continue;if(AK.fromBufferAttribute(N,J),W)l$.addScaledVector(AK,U);else l$.addScaledVector(AK.sub(Q),U)}Q.add(l$)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(x$.copy($.boundingSphere),x$.applyMatrix4(K),_7.copy(J.ray).recast(J.near),x$.containsPoint(_7.origin)===!1){if(_7.intersectSphere(x$,GX)===null)return;if(_7.origin.distanceToSquared(GX)>(J.far-J.near)**2)return}if(NX.copy(K).invert(),_7.copy(J.ray).applyMatrix4(NX),$.boundingBox!==null){if(_7.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,_7)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,Y=K.index,X=K.attributes.position,H=K.attributes.uv,U=K.attributes.uv1,N=K.attributes.normal,F=K.groups,G=K.drawRange;if(Y!==null)if(Array.isArray(W))for(let E=0,O=F.length;E<O;E++){let B=F[E],R=W[B.materialIndex],q=Math.max(B.start,G.start),M=Math.min(Y.count,Math.min(B.start+B.count,G.start+G.count));for(let P=q,V=M;P<V;P+=3){let L=Y.getX(P),C=Y.getX(P+1),A=Y.getX(P+2);if(Z=d$(this,R,J,$,H,U,N,L,C,A),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let E=Math.max(0,G.start),O=Math.min(Y.count,G.start+G.count);for(let B=E,R=O;B<R;B+=3){let q=Y.getX(B),M=Y.getX(B+1),P=Y.getX(B+2);if(Z=d$(this,W,J,$,H,U,N,q,M,P),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}else if(X!==void 0)if(Array.isArray(W))for(let E=0,O=F.length;E<O;E++){let B=F[E],R=W[B.materialIndex],q=Math.max(B.start,G.start),M=Math.min(X.count,Math.min(B.start+B.count,G.start+G.count));for(let P=q,V=M;P<V;P+=3){let L=P,C=P+1,A=P+2;if(Z=d$(this,R,J,$,H,U,N,L,C,A),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let E=Math.max(0,G.start),O=Math.min(X.count,G.start+G.count);for(let B=E,R=O;B<R;B+=3){let q=B,M=B+1,P=B+2;if(Z=d$(this,W,J,$,H,U,N,q,M,P),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}}}function DN(J,Q,$,Z,K,W,Y,X){let H;if(Q.side===1)H=Z.intersectTriangle(Y,W,K,!0,X);else H=Z.intersectTriangle(K,W,Y,Q.side===0,X);if(H===null)return null;u$.copy(X),u$.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(u$);if(U<$.near||U>$.far)return null;return{distance:U,point:u$.clone(),object:J}}function d$(J,Q,$,Z,K,W,Y,X,H,U){J.getVertexPosition(X,g$),J.getVertexPosition(H,p$),J.getVertexPosition(U,m$);let N=DN(J,Q,$,Z,g$,p$,m$,FX);if(N){let F=new _;if(x8.getBarycoord(FX,g$,p$,m$,F),K)N.uv=x8.getInterpolatedAttribute(K,X,H,U,F,new G0);if(W)N.uv1=x8.getInterpolatedAttribute(W,X,H,U,F,new G0);if(Y){if(N.normal=x8.getInterpolatedAttribute(Y,X,H,U,F,new _),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let G={a:X,b:H,c:U,normal:new _,materialIndex:0};x8.getNormal(g$,p$,m$,G.normal),N.face=G,N.barycoord=F}return N}var BQ=new lJ,EX=new lJ,qX=new lJ,BN=new lJ,OX=new QJ,c$=new _,_K=new p8,RX=new QJ,TK=new q7;class CZ extends M0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new QJ,this.bindMatrixInverse=new QJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new A8;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,c$),this.boundingBox.expandByPoint(c$)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new p8;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,c$),this.boundingSphere.expandByPoint(c$)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(_K.copy(this.boundingSphere),_K.applyMatrix4(Z),J.ray.intersectsSphere(_K)===!1)return;if(RX.copy(Z).invert(),TK.copy(J.ray).applyMatrix4(RX),this.boundingBox!==null){if(TK.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,TK)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new lJ,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let K=1/J.manhattanLength();if(K!==1/0)J.multiplyScalar(K);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else r0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;if(EX.fromBufferAttribute(Z.attributes.skinIndex,J),qX.fromBufferAttribute(Z.attributes.skinWeight,J),Q.isVector4)BQ.copy(Q),Q.set(0,0,0,0);else BQ.set(...Q,1),Q.set(0,0,0);BQ.applyMatrix4(this.bindMatrix);for(let K=0;K<4;K++){let W=qX.getComponent(K);if(W!==0){let Y=EX.getComponent(K);OX.multiplyMatrices($.bones[Y].matrixWorld,$.boneInverses[Y]),Q.addScaledVector(BN.copy(BQ).applyMatrix4(OX),W)}}if(Q.isVector4)Q.w=BQ.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class cQ extends wJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class nQ extends eJ{constructor(J=null,Q=1,$=1,Z,K,W,Y,X,H=1003,U=1003,N,F){super(null,W,Y,X,H,U,Z,K,N,F);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var LX=new QJ,MN=new QJ;class sQ{constructor(J=[],Q=[]){this.uuid=s8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){r0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new QJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new QJ;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let K=0,W=J.length;K<W;K++){let Y=J[K]?J[K].matrixWorld:MN;LX.multiplyMatrices(Y,Q[K]),LX.toArray($,K*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new sQ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new nQ(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let K=J.bones[$],W=Q[K];if(W===void 0)r0("Skeleton: No bone found with UUID:",K),W=new cQ;this.bones.push(W),this.boneInverses.push(new QJ().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,K=Q.length;Z<K;Z++){let W=Q[Z];J.bones.push(W.uuid);let Y=$[Z];J.boneInverses.push(Y.toArray())}return J}}class H7 extends aJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var z6=new QJ,VX=new QJ,n$=[],DX=new A8,kN=new QJ,MQ=new M0,kQ=new p8;class S9 extends M0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new H7(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,kN)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new A8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,z6),DX.copy(J.boundingBox).applyMatrix4(z6),this.boundingBox.union(DX)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new p8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,z6),kQ.copy(J.boundingSphere).applyMatrix4(z6),this.boundingSphere.union(kQ)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let Y=0;Y<$.length;Y++)$[Y]=Z[W+Y]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(MQ.geometry=this.geometry,MQ.material=this.material,MQ.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(kQ.copy(this.boundingSphere),kQ.applyMatrix4($),J.ray.intersectsSphere(kQ)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,z6),VX.multiplyMatrices($,z6),MQ.matrixWorld=VX,MQ.raycast(J,n$);for(let W=0,Y=n$.length;W<Y;W++){let X=n$[W];X.instanceId=K,X.object=this,Q.push(X)}n$.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new H7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new nQ(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let H=0;H<$.length;H++)W+=$[H];let Y=this.geometry.morphTargetsRelative?1:1-W,X=Z*J;return K[X]=Y,K.set($,X+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var T7=new p8,CN=new G0(0.5,0.5),s$=new _;class iQ{constructor(J=new n8,Q=new n8,$=new n8,Z=new n8,K=new n8,W=new n8){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(K),Y[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],Y=K[1],X=K[2],H=K[3],U=K[4],N=K[5],F=K[6],G=K[7],E=K[8],O=K[9],B=K[10],R=K[11],q=K[12],M=K[13],P=K[14],V=K[15];if(Z[0].setComponents(H-W,G-U,R-E,V-q).normalize(),Z[1].setComponents(H+W,G+U,R+E,V+q).normalize(),Z[2].setComponents(H+Y,G+N,R+O,V+M).normalize(),Z[3].setComponents(H-Y,G-N,R-O,V-M).normalize(),$)Z[4].setComponents(X,F,B,P).normalize(),Z[5].setComponents(H-X,G-F,R-B,V-P).normalize();else if(Z[4].setComponents(H-X,G-F,R-B,V-P).normalize(),Q===2000)Z[5].setComponents(H+X,G+F,R+B,V+P).normalize();else if(Q===2001)Z[5].setComponents(X,F,B,P).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();T7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();T7.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(T7)}intersectsSprite(J){T7.center.set(0,0,0);let Q=CN.distanceTo(J.center);return T7.radius=0.7071067811865476+Q,T7.applyMatrix4(J.matrixWorld),this.intersectsSphere(T7)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(s$.x=Z.normal.x>0?J.max.x:J.min.x,s$.y=Z.normal.y>0?J.max.y:J.min.y,s$.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(s$)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oQ extends w8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new f0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var ZZ=new _,KZ=new _,BX=new QJ,CQ=new q7,i$=new p8,SK=new _,MX=new _;class n6 extends wJ{constructor(J=new vJ,Q=new oQ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,K=Q.count;Z<K;Z++)ZZ.fromBufferAttribute(Q,Z-1),KZ.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=ZZ.distanceTo(KZ);J.setAttribute("lineDistance",new WJ($,1))}else r0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,K=J.params.Line.threshold,W=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(i$.copy($.boundingSphere),i$.applyMatrix4(Z),i$.radius+=K,J.ray.intersectsSphere(i$)===!1)return;BX.copy(Z).invert(),CQ.copy(J.ray).applyMatrix4(BX);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,H=this.isLineSegments?2:1,U=$.index,F=$.attributes.position;if(U!==null){let G=Math.max(0,W.start),E=Math.min(U.count,W.start+W.count);for(let O=G,B=E-1;O<B;O+=H){let R=U.getX(O),q=U.getX(O+1),M=o$(this,J,CQ,X,R,q,O);if(M)Q.push(M)}if(this.isLineLoop){let O=U.getX(E-1),B=U.getX(G),R=o$(this,J,CQ,X,O,B,E-1);if(R)Q.push(R)}}else{let G=Math.max(0,W.start),E=Math.min(F.count,W.start+W.count);for(let O=G,B=E-1;O<B;O+=H){let R=o$(this,J,CQ,X,O,O+1,O);if(R)Q.push(R)}if(this.isLineLoop){let O=o$(this,J,CQ,X,E-1,G,E-1);if(O)Q.push(O)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function o$(J,Q,$,Z,K,W,Y){let X=J.geometry.attributes.position;if(ZZ.fromBufferAttribute(X,K),KZ.fromBufferAttribute(X,W),$.distanceSqToSegment(ZZ,KZ,SK,MX)>Z)return;SK.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(SK);if(U<Q.near||U>Q.far)return;return{distance:U,point:MX.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var kX=new _,CX=new _;class PZ extends n6{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,K=Q.count;Z<K;Z+=2)kX.fromBufferAttribute(Q,Z),CX.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+kX.distanceTo(CX);J.setAttribute("lineDistance",new WJ($,1))}else r0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class IZ extends n6{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class u7 extends w8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new f0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var PX=new QJ,bK=new q7,a$=new p8,r$=new _;class s6 extends wJ{constructor(J=new vJ,Q=new u7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,K=J.params.Points.threshold,W=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(a$.copy($.boundingSphere),a$.applyMatrix4(Z),a$.radius+=K,J.ray.intersectsSphere(a$)===!1)return;PX.copy(Z).invert(),bK.copy(J.ray).applyMatrix4(PX);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,H=$.index,N=$.attributes.position;if(H!==null){let F=Math.max(0,W.start),G=Math.min(H.count,W.start+W.count);for(let E=F,O=G;E<O;E++){let B=H.getX(E);r$.fromBufferAttribute(N,B),IX(r$,B,X,Z,J,Q,this)}}else{let F=Math.max(0,W.start),G=Math.min(N.count,W.start+W.count);for(let E=F,O=G;E<O;E++)r$.fromBufferAttribute(N,E),IX(r$,E,X,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function IX(J,Q,$,Z,K,W,Y){let X=bK.distanceSqToPoint(J);if(X<$){let H=new _;bK.closestPointToPoint(J,H),H.applyMatrix4(Z);let U=K.ray.origin.distanceTo(H);if(U<K.near||U>K.far)return;W.push({distance:U,distanceToRay:Math.sqrt(X),point:H,index:Q,face:null,faceIndex:null,barycoord:null,object:Y})}}class zZ extends eJ{constructor(J=[],Q=301,$,Z,K,W,Y,X,H,U){super(J,Q,$,Z,K,W,Y,X,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class m8 extends eJ{constructor(J,Q,$,Z,K,W,Y,X,H){super(J,Q,$,Z,K,W,Y,X,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class d7 extends eJ{constructor(J,Q,$=1014,Z,K,W,Y=1003,X=1003,H,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:Q,depth:N};super(F,Z,K,W,Y,X,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new uQ(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class bW extends d7{constructor(J,Q=1014,$=301,Z,K,W=1003,Y=1003,X,H=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,$,Z,K,W,Y,X,H);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class AZ extends eJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class _J extends vJ{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let Y=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let X=[],H=[],U=[],N=[],F=0,G=0;E("z","y","x",-1,-1,$,Q,J,W,K,0),E("z","y","x",1,-1,$,Q,-J,W,K,1),E("x","z","y",1,1,J,$,Q,Z,W,2),E("x","z","y",1,-1,J,$,-Q,Z,W,3),E("x","y","z",1,-1,J,Q,$,Z,K,4),E("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(X),this.setAttribute("position",new WJ(H,3)),this.setAttribute("normal",new WJ(U,3)),this.setAttribute("uv",new WJ(N,2));function E(O,B,R,q,M,P,V,L,C,A,D){let I=P/C,c=V/A,y=P/2,u=V/2,J0=L/2,f=C+1,v=A+1,b=0,j=0,d=new _;for(let h=0;h<v;h++){let s=h*c-u;for(let K0=0;K0<f;K0++){let _0=K0*I-y;d[O]=_0*q,d[B]=s*M,d[R]=J0,H.push(d.x,d.y,d.z),d[O]=0,d[B]=0,d[R]=L>0?1:-1,U.push(d.x,d.y,d.z),N.push(K0/C),N.push(1-h/A),b+=1}}for(let h=0;h<A;h++)for(let s=0;s<C;s++){let K0=F+s+f*h,_0=F+s+f*(h+1),q0=F+(s+1)+f*(h+1),k0=F+(s+1)+f*h;X.push(K0,_0,k0),X.push(_0,q0,k0),j+=6}Y.addGroup(G,j,D),G+=j,F+=b}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _J(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class s9 extends vJ{constructor(J=1,Q=32,$=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:Z},Q=Math.max(3,Q);let K=[],W=[],Y=[],X=[],H=new _,U=new G0;W.push(0,0,0),Y.push(0,0,1),X.push(0.5,0.5);for(let N=0,F=3;N<=Q;N++,F+=3){let G=$+N/Q*Z;H.x=J*Math.cos(G),H.y=J*Math.sin(G),W.push(H.x,H.y,H.z),Y.push(0,0,1),U.x=(W[F]/J+1)/2,U.y=(W[F+1]/J+1)/2,X.push(U.x,U.y)}for(let N=1;N<=Q;N++)K.push(N,N+1,0);this.setIndex(K),this.setAttribute("position",new WJ(W,3)),this.setAttribute("normal",new WJ(Y,3)),this.setAttribute("uv",new WJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new s9(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class BJ extends vJ{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,Y=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:Y,thetaLength:X};let H=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],N=[],F=[],G=[],E=0,O=[],B=$/2,R=0;if(q(),W===!1){if(J>0)M(!0);if(Q>0)M(!1)}this.setIndex(U),this.setAttribute("position",new WJ(N,3)),this.setAttribute("normal",new WJ(F,3)),this.setAttribute("uv",new WJ(G,2));function q(){let P=new _,V=new _,L=0,C=(Q-J)/$;for(let A=0;A<=K;A++){let D=[],I=A/K,c=I*(Q-J)+J;for(let y=0;y<=Z;y++){let u=y/Z,J0=u*X+Y,f=Math.sin(J0),v=Math.cos(J0);V.x=c*f,V.y=-I*$+B,V.z=c*v,N.push(V.x,V.y,V.z),P.set(f,C,v).normalize(),F.push(P.x,P.y,P.z),G.push(u,1-I),D.push(E++)}O.push(D)}for(let A=0;A<Z;A++)for(let D=0;D<K;D++){let I=O[D][A],c=O[D+1][A],y=O[D+1][A+1],u=O[D][A+1];if(J>0||D!==0)U.push(I,c,u),L+=3;if(Q>0||D!==K-1)U.push(c,y,u),L+=3}H.addGroup(R,L,0),R+=L}function M(P){let V=E,L=new G0,C=new _,A=0,D=P===!0?J:Q,I=P===!0?1:-1;for(let y=1;y<=Z;y++)N.push(0,B*I,0),F.push(0,I,0),G.push(0.5,0.5),E++;let c=E;for(let y=0;y<=Z;y++){let J0=y/Z*X+Y,f=Math.cos(J0),v=Math.sin(J0);C.x=D*v,C.y=B*I,C.z=D*f,N.push(C.x,C.y,C.z),F.push(0,I,0),L.x=f*0.5+0.5,L.y=v*0.5*I+0.5,G.push(L.x,L.y),E++}for(let y=0;y<Z;y++){let u=V+y,J0=c+y;if(P===!0)U.push(J0,J0+1,u);else U.push(J0+1,J0,u);A+=3}H.addGroup(R,A,P===!0?1:2),R+=A}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new BJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class c7 extends BJ{constructor(J=1,Q=1,$=32,Z=1,K=!1,W=0,Y=Math.PI*2){super(0,J,Q,$,Z,K,W,Y);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:Z,openEnded:K,thetaStart:W,thetaLength:Y}}static fromJSON(J){return new c7(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class _Z extends vJ{constructor(J=[],Q=[],$=1,Z=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:Z};let K=[],W=[];if(Y(Z),H($),U(),this.setAttribute("position",new WJ(K,3)),this.setAttribute("normal",new WJ(K.slice(),3)),this.setAttribute("uv",new WJ(W,2)),Z===0)this.computeVertexNormals();else this.normalizeNormals();function Y(q){let M=new _,P=new _,V=new _;for(let L=0;L<Q.length;L+=3)G(Q[L+0],M),G(Q[L+1],P),G(Q[L+2],V),X(M,P,V,q)}function X(q,M,P,V){let L=V+1,C=[];for(let A=0;A<=L;A++){C[A]=[];let D=q.clone().lerp(P,A/L),I=M.clone().lerp(P,A/L),c=L-A;for(let y=0;y<=c;y++)if(y===0&&A===L)C[A][y]=D;else C[A][y]=D.clone().lerp(I,y/c)}for(let A=0;A<L;A++)for(let D=0;D<2*(L-A)-1;D++){let I=Math.floor(D/2);if(D%2===0)F(C[A][I+1]),F(C[A+1][I]),F(C[A][I]);else F(C[A][I+1]),F(C[A+1][I+1]),F(C[A+1][I])}}function H(q){let M=new _;for(let P=0;P<K.length;P+=3)M.x=K[P+0],M.y=K[P+1],M.z=K[P+2],M.normalize().multiplyScalar(q),K[P+0]=M.x,K[P+1]=M.y,K[P+2]=M.z}function U(){let q=new _;for(let M=0;M<K.length;M+=3){q.x=K[M+0],q.y=K[M+1],q.z=K[M+2];let P=B(q)/2/Math.PI+0.5,V=R(q)/Math.PI+0.5;W.push(P,1-V)}E(),N()}function N(){for(let q=0;q<W.length;q+=6){let M=W[q+0],P=W[q+2],V=W[q+4],L=Math.max(M,P,V),C=Math.min(M,P,V);if(L>0.9&&C<0.1){if(M<0.2)W[q+0]+=1;if(P<0.2)W[q+2]+=1;if(V<0.2)W[q+4]+=1}}}function F(q){K.push(q.x,q.y,q.z)}function G(q,M){let P=q*3;M.x=J[P+0],M.y=J[P+1],M.z=J[P+2]}function E(){let q=new _,M=new _,P=new _,V=new _,L=new G0,C=new G0,A=new G0;for(let D=0,I=0;D<K.length;D+=9,I+=6){q.set(K[D+0],K[D+1],K[D+2]),M.set(K[D+3],K[D+4],K[D+5]),P.set(K[D+6],K[D+7],K[D+8]),L.set(W[I+0],W[I+1]),C.set(W[I+2],W[I+3]),A.set(W[I+4],W[I+5]),V.copy(q).add(M).add(P).divideScalar(3);let c=B(V);O(L,I+0,q,c),O(C,I+2,M,c),O(A,I+4,P,c)}}function O(q,M,P,V){if(V<0&&q.x===1)W[M]=q.x-1;if(P.x===0&&P.z===0)W[M]=V/2/Math.PI+0.5}function B(q){return Math.atan2(q.z,-q.x)}function R(q){return Math.atan2(-q.y,Math.sqrt(q.x*q.x+q.z*q.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _Z(J.vertices,J.indices,J.radius,J.detail)}}class o8{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){r0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),K=0;Q.push(0);for(let W=1;W<=J;W++)$=this.getPoint(W/J),K+=$.distanceTo(Z),Q.push(K),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,K=$.length,W;if(Q)W=Q;else W=J*$[K-1];let Y=0,X=K-1,H;while(Y<=X)if(Z=Math.floor(Y+(X-Y)/2),H=$[Z]-W,H<0)Y=Z+1;else if(H>0)X=Z-1;else{X=Z;break}if(Z=X,$[Z]===W)return Z/(K-1);let U=$[Z],F=$[Z+1]-U,G=(W-U)/F;return(Z+G)/(K-1)}getTangent(J,Q){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),Y=this.getPoint(K),X=Q||(W.isVector2?new G0:new _);return X.copy(Y).sub(W).normalize(),X}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new _,Z=[],K=[],W=[],Y=new _,X=new QJ;for(let G=0;G<=J;G++){let E=G/J;Z[G]=this.getTangentAt(E,new _)}K[0]=new _,W[0]=new _;let H=Number.MAX_VALUE,U=Math.abs(Z[0].x),N=Math.abs(Z[0].y),F=Math.abs(Z[0].z);if(U<=H)H=U,$.set(1,0,0);if(N<=H)H=N,$.set(0,1,0);if(F<=H)$.set(0,0,1);Y.crossVectors(Z[0],$).normalize(),K[0].crossVectors(Z[0],Y),W[0].crossVectors(Z[0],K[0]);for(let G=1;G<=J;G++){if(K[G]=K[G-1].clone(),W[G]=W[G-1].clone(),Y.crossVectors(Z[G-1],Z[G]),Y.length()>Number.EPSILON){Y.normalize();let E=Math.acos(NJ(Z[G-1].dot(Z[G]),-1,1));K[G].applyMatrix4(X.makeRotationAxis(Y,E))}W[G].crossVectors(Z[G],K[G])}if(Q===!0){let G=Math.acos(NJ(K[0].dot(K[J]),-1,1));if(G/=J,Z[0].dot(Y.crossVectors(K[0],K[J]))>0)G=-G;for(let E=1;E<=J;E++)K[E].applyMatrix4(X.makeRotationAxis(Z[E],G*E)),W[E].crossVectors(Z[E],K[E])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class aQ extends o8{constructor(J=0,Q=0,$=1,Z=1,K=0,W=Math.PI*2,Y=!1,X=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=Y,this.aRotation=X}getPoint(J,Q=new G0){let $=Q,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let Y=this.aStartAngle+J*K,X=this.aX+this.xRadius*Math.cos(Y),H=this.aY+this.yRadius*Math.sin(Y);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),F=X-this.aX,G=H-this.aY;X=F*U-G*N+this.aX,H=F*N+G*U+this.aY}return $.set(X,H)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class hW extends aQ{constructor(J,Q,$,Z,K,W){super(J,Q,$,$,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function xW(){let J=0,Q=0,$=0,Z=0;function K(W,Y,X,H){J=W,Q=X,$=-3*W+3*Y-2*X-H,Z=2*W-2*Y+X+H}return{initCatmullRom:function(W,Y,X,H,U){K(Y,X,U*(X-W),U*(H-Y))},initNonuniformCatmullRom:function(W,Y,X,H,U,N,F){let G=(Y-W)/U-(X-W)/(U+N)+(X-Y)/N,E=(X-Y)/N-(H-Y)/(N+F)+(H-X)/F;G*=N,E*=N,K(Y,X,G,E)},calc:function(W){let Y=W*W,X=Y*W;return J+Q*W+$*Y+Z*X}}}var zX=new _,AX=new _,wK=new xW,jK=new xW,yK=new xW;class n7 extends o8{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new _){let $=Q,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,Y=Math.floor(W),X=W-Y;if(this.closed)Y+=Y>0?0:(Math.floor(Math.abs(Y)/K)+1)*K;else if(X===0&&Y===K-1)Y=K-2,X=1;let H,U;if(this.closed||Y>0)H=Z[(Y-1)%K];else AX.subVectors(Z[0],Z[1]).add(Z[0]),H=AX;let N=Z[Y%K],F=Z[(Y+1)%K];if(this.closed||Y+2<K)U=Z[(Y+2)%K];else zX.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),U=zX;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,E=Math.pow(H.distanceToSquared(N),G),O=Math.pow(N.distanceToSquared(F),G),B=Math.pow(F.distanceToSquared(U),G);if(O<0.0001)O=1;if(E<0.0001)E=O;if(B<0.0001)B=O;wK.initNonuniformCatmullRom(H.x,N.x,F.x,U.x,E,O,B),jK.initNonuniformCatmullRom(H.y,N.y,F.y,U.y,E,O,B),yK.initNonuniformCatmullRom(H.z,N.z,F.z,U.z,E,O,B)}else if(this.curveType==="catmullrom")wK.initCatmullRom(H.x,N.x,F.x,U.x,this.tension),jK.initCatmullRom(H.y,N.y,F.y,U.y,this.tension),yK.initCatmullRom(H.z,N.z,F.z,U.z,this.tension);return $.set(wK.calc(X),jK.calc(X),yK.calc(X)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new _().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function _X(J,Q,$,Z,K){let W=(Z-Q)*0.5,Y=(K-$)*0.5,X=J*J,H=J*X;return(2*$-2*Z+W+Y)*H+(-3*$+3*Z-2*W-Y)*X+W*J+$}function PN(J,Q){let $=1-J;return $*$*Q}function IN(J,Q){return 2*(1-J)*J*Q}function zN(J,Q){return J*J*Q}function AQ(J,Q,$,Z){return PN(J,Q)+IN(J,$)+zN(J,Z)}function AN(J,Q){let $=1-J;return $*$*$*Q}function _N(J,Q){let $=1-J;return 3*$*$*J*Q}function TN(J,Q){return 3*(1-J)*J*J*Q}function SN(J,Q){return J*J*J*Q}function _Q(J,Q,$,Z,K){return AN(J,Q)+_N(J,$)+TN(J,Z)+SN(J,K)}class TZ extends o8{constructor(J=new G0,Q=new G0,$=new G0,Z=new G0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new G0){let $=Q,Z=this.v0,K=this.v1,W=this.v2,Y=this.v3;return $.set(_Q(J,Z.x,K.x,W.x,Y.x),_Q(J,Z.y,K.y,W.y,Y.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class gW extends o8{constructor(J=new _,Q=new _,$=new _,Z=new _){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new _){let $=Q,Z=this.v0,K=this.v1,W=this.v2,Y=this.v3;return $.set(_Q(J,Z.x,K.x,W.x,Y.x),_Q(J,Z.y,K.y,W.y,Y.y),_Q(J,Z.z,K.z,W.z,Y.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class SZ extends o8{constructor(J=new G0,Q=new G0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new G0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new G0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class pW extends o8{constructor(J=new _,Q=new _){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new _){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new _){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class wZ extends o8{constructor(J=new G0,Q=new G0,$=new G0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new G0){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(AQ(J,Z.x,K.x,W.x),AQ(J,Z.y,K.y,W.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class l8 extends o8{constructor(J=new _,Q=new _,$=new _){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new _){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(AQ(J,Z.x,K.x,W.x),AQ(J,Z.y,K.y,W.y),AQ(J,Z.z,K.z,W.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class jZ extends o8{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new G0){let $=Q,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),Y=K-W,X=Z[W===0?W:W-1],H=Z[W],U=Z[W>Z.length-2?Z.length-1:W+1],N=Z[W>Z.length-3?Z.length-1:W+2];return $.set(_X(Y,X.x,H.x,U.x,N.x),_X(Y,X.y,H.y,U.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new G0().fromArray(Z))}return this}}var hK=Object.freeze({__proto__:null,ArcCurve:hW,CatmullRomCurve3:n7,CubicBezierCurve:TZ,CubicBezierCurve3:gW,EllipseCurve:aQ,LineCurve:SZ,LineCurve3:pW,QuadraticBezierCurve:wZ,QuadraticBezierCurve3:l8,SplineCurve:jZ});class mW extends o8{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hK[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),Z=this.getCurveLengths(),K=0;while(K<Z.length){if(Z[K]>=$){let W=Z[K]-$,Y=this.curves[K],X=Y.getLength(),H=X===0?0:1-W/X;return Y.getPointAt(H,Q)}K++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,Z=this.curves.length;$<Z;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let Z=0,K=this.curves;Z<K.length;Z++){let W=K[Z],Y=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,X=W.getPoints(Y);for(let H=0;H<X.length;H++){let U=X[H];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let Z=this.curves[Q];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(new hK[Z.type]().fromJSON(Z))}return this}}class WZ extends mW{constructor(J){super();if(this.type="Path",this.currentPoint=new G0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new SZ(this.currentPoint.clone(),new G0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,Z){let K=new wZ(this.currentPoint.clone(),new G0(J,Q),new G0($,Z));return this.curves.push(K),this.currentPoint.set($,Z),this}bezierCurveTo(J,Q,$,Z,K,W){let Y=new TZ(this.currentPoint.clone(),new G0(J,Q),new G0($,Z),new G0(K,W));return this.curves.push(Y),this.currentPoint.set(K,W),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new jZ(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,Z,K,W){let Y=this.currentPoint.x,X=this.currentPoint.y;return this.absarc(J+Y,Q+X,$,Z,K,W),this}absarc(J,Q,$,Z,K,W){return this.absellipse(J,Q,$,$,Z,K,W),this}ellipse(J,Q,$,Z,K,W,Y,X){let H=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+H,Q+U,$,Z,K,W,Y,X),this}absellipse(J,Q,$,Z,K,W,Y,X){let H=new aQ(J,Q,$,Z,K,W,Y,X);if(this.curves.length>0){let N=H.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(H);let U=H.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class rQ extends WZ{constructor(J){super(J);this.uuid=s8(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,Z=this.holes.length;$<Z;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let Z=this.holes[Q];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(new WZ().fromJSON(Z))}return this}}function wN(J,Q,$=2){let Z=Q&&Q.length,K=Z?Q[0]*$:J.length,W=pH(J,0,K,$,!0),Y=[];if(!W||W.next===W.prev)return Y;let X,H,U;if(Z)W=bN(J,Q,W,$);if(J.length>80*$){X=J[0],H=J[1];let N=X,F=H;for(let G=$;G<K;G+=$){let E=J[G],O=J[G+1];if(E<X)X=E;if(O<H)H=O;if(E>N)N=E;if(O>F)F=O}U=Math.max(N-X,F-H),U=U!==0?32767/U:0}return SQ(W,Y,$,X,H,U,0),Y}function pH(J,Q,$,Z,K){let W;if(K===sN(J,Q,$,Z)>0)for(let Y=Q;Y<$;Y+=Z)W=TX(Y/Z|0,J[Y],J[Y+1],W);else for(let Y=$-Z;Y>=Q;Y-=Z)W=TX(Y/Z|0,J[Y],J[Y+1],W);if(W&&v6(W,W.next))jQ(W),W=W.next;return W}function j7(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,Z;do if(Z=!1,!$.steiner&&(v6($,$.next)||rJ($.prev,$,$.next)===0)){if(jQ($),$=Q=$.prev,$===$.next)break;Z=!0}else $=$.next;while(Z||$!==Q);return Q}function SQ(J,Q,$,Z,K,W,Y){if(!J)return;if(!Y&&W)mN(J,Z,K,W);let X=J;while(J.prev!==J.next){let{prev:H,next:U}=J;if(W?yN(J,Z,K,W):jN(J)){Q.push(H.i,J.i,U.i),jQ(J),J=U.next,X=U.next;continue}if(J=U,J===X){if(!Y)SQ(j7(J),Q,$,Z,K,W,1);else if(Y===1)J=vN(j7(J),Q),SQ(J,Q,$,Z,K,W,2);else if(Y===2)fN(J,Q,$,Z,K,W);break}}}function jN(J){let Q=J.prev,$=J,Z=J.next;if(rJ(Q,$,Z)>=0)return!1;let K=Q.x,W=$.x,Y=Z.x,X=Q.y,H=$.y,U=Z.y,N=Math.min(K,W,Y),F=Math.min(X,H,U),G=Math.max(K,W,Y),E=Math.max(X,H,U),O=Z.next;while(O!==Q){if(O.x>=N&&O.x<=G&&O.y>=F&&O.y<=E&&PQ(K,X,W,H,Y,U,O.x,O.y)&&rJ(O.prev,O,O.next)>=0)return!1;O=O.next}return!0}function yN(J,Q,$,Z){let K=J.prev,W=J,Y=J.next;if(rJ(K,W,Y)>=0)return!1;let X=K.x,H=W.x,U=Y.x,N=K.y,F=W.y,G=Y.y,E=Math.min(X,H,U),O=Math.min(N,F,G),B=Math.max(X,H,U),R=Math.max(N,F,G),q=xK(E,O,Q,$,Z),M=xK(B,R,Q,$,Z),P=J.prevZ,V=J.nextZ;while(P&&P.z>=q&&V&&V.z<=M){if(P.x>=E&&P.x<=B&&P.y>=O&&P.y<=R&&P!==K&&P!==Y&&PQ(X,N,H,F,U,G,P.x,P.y)&&rJ(P.prev,P,P.next)>=0)return!1;if(P=P.prevZ,V.x>=E&&V.x<=B&&V.y>=O&&V.y<=R&&V!==K&&V!==Y&&PQ(X,N,H,F,U,G,V.x,V.y)&&rJ(V.prev,V,V.next)>=0)return!1;V=V.nextZ}while(P&&P.z>=q){if(P.x>=E&&P.x<=B&&P.y>=O&&P.y<=R&&P!==K&&P!==Y&&PQ(X,N,H,F,U,G,P.x,P.y)&&rJ(P.prev,P,P.next)>=0)return!1;P=P.prevZ}while(V&&V.z<=M){if(V.x>=E&&V.x<=B&&V.y>=O&&V.y<=R&&V!==K&&V!==Y&&PQ(X,N,H,F,U,G,V.x,V.y)&&rJ(V.prev,V,V.next)>=0)return!1;V=V.nextZ}return!0}function vN(J,Q){let $=J;do{let Z=$.prev,K=$.next.next;if(!v6(Z,K)&&lH(Z,$,$.next,K)&&wQ(Z,K)&&wQ(K,Z))Q.push(Z.i,$.i,K.i),jQ($),jQ($.next),$=J=K;$=$.next}while($!==J);return j7($)}function fN(J,Q,$,Z,K,W){let Y=J;do{let X=Y.next.next;while(X!==Y.prev){if(Y.i!==X.i&&dN(Y,X)){let H=uH(Y,X);Y=j7(Y,Y.next),H=j7(H,H.next),SQ(Y,Q,$,Z,K,W,0),SQ(H,Q,$,Z,K,W,0);return}X=X.next}Y=Y.next}while(Y!==J)}function bN(J,Q,$,Z){let K=[];for(let W=0,Y=Q.length;W<Y;W++){let X=Q[W]*Z,H=W<Y-1?Q[W+1]*Z:J.length,U=pH(J,X,H,Z,!1);if(U===U.next)U.steiner=!0;K.push(uN(U))}K.sort(hN);for(let W=0;W<K.length;W++)$=xN(K[W],$);return $}function hN(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),K=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=Z-K}}return $}function xN(J,Q){let $=gN(J,Q);if(!$)return Q;let Z=uH($,J);return j7(Z,Z.next),j7($,$.next)}function gN(J,Q){let $=Q,Z=J.x,K=J.y,W=-1/0,Y;if(v6(J,$))return $;do{if(v6(J,$.next))return $.next;else if(K<=$.y&&K>=$.next.y&&$.next.y!==$.y){let F=$.x+(K-$.y)*($.next.x-$.x)/($.next.y-$.y);if(F<=Z&&F>W){if(W=F,Y=$.x<$.next.x?$:$.next,F===Z)return Y}}$=$.next}while($!==Q);if(!Y)return null;let X=Y,H=Y.x,U=Y.y,N=1/0;$=Y;do{if(Z>=$.x&&$.x>=H&&Z!==$.x&&mH(K<U?Z:W,K,H,U,K<U?W:Z,K,$.x,$.y)){let F=Math.abs(K-$.y)/(Z-$.x);if(wQ($,J)&&(F<N||F===N&&($.x>Y.x||$.x===Y.x&&pN(Y,$))))Y=$,N=F}$=$.next}while($!==X);return Y}function pN(J,Q){return rJ(J.prev,J,Q.prev)<0&&rJ(Q.next,J,J.next)<0}function mN(J,Q,$,Z){let K=J;do{if(K.z===0)K.z=xK(K.x,K.y,Q,$,Z);K.prevZ=K.prev,K.nextZ=K.next,K=K.next}while(K!==J);K.prevZ.nextZ=null,K.prevZ=null,lN(K)}function lN(J){let Q,$=1;do{let Z=J,K;J=null;let W=null;Q=0;while(Z){Q++;let Y=Z,X=0;for(let U=0;U<$;U++)if(X++,Y=Y.nextZ,!Y)break;let H=$;while(X>0||H>0&&Y){if(X!==0&&(H===0||!Y||Z.z<=Y.z))K=Z,Z=Z.nextZ,X--;else K=Y,Y=Y.nextZ,H--;if(W)W.nextZ=K;else J=K;K.prevZ=W,W=K}Z=Y}W.nextZ=null,$*=2}while(Q>1);return J}function xK(J,Q,$,Z,K){return J=(J-$)*K|0,Q=(Q-Z)*K|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function uN(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function mH(J,Q,$,Z,K,W,Y,X){return(K-Y)*(Q-X)>=(J-Y)*(W-X)&&(J-Y)*(Z-X)>=($-Y)*(Q-X)&&($-Y)*(W-X)>=(K-Y)*(Z-X)}function PQ(J,Q,$,Z,K,W,Y,X){return!(J===Y&&Q===X)&&mH(J,Q,$,Z,K,W,Y,X)}function dN(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!cN(J,Q)&&(wQ(J,Q)&&wQ(Q,J)&&nN(J,Q)&&(rJ(J.prev,J,Q.prev)||rJ(J,Q.prev,Q))||v6(J,Q)&&rJ(J.prev,J,J.next)>0&&rJ(Q.prev,Q,Q.next)>0)}function rJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function v6(J,Q){return J.x===Q.x&&J.y===Q.y}function lH(J,Q,$,Z){let K=e$(rJ(J,Q,$)),W=e$(rJ(J,Q,Z)),Y=e$(rJ($,Z,J)),X=e$(rJ($,Z,Q));if(K!==W&&Y!==X)return!0;if(K===0&&t$(J,$,Q))return!0;if(W===0&&t$(J,Z,Q))return!0;if(Y===0&&t$($,J,Z))return!0;if(X===0&&t$($,Q,Z))return!0;return!1}function t$(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function e$(J){return J>0?1:J<0?-1:0}function cN(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&lH($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function wQ(J,Q){return rJ(J.prev,J,J.next)<0?rJ(J,Q,J.next)>=0&&rJ(J,J.prev,Q)>=0:rJ(J,Q,J.prev)<0||rJ(J,J.next,Q)<0}function nN(J,Q){let $=J,Z=!1,K=(J.x+Q.x)/2,W=(J.y+Q.y)/2;do{if($.y>W!==$.next.y>W&&$.next.y!==$.y&&K<($.next.x-$.x)*(W-$.y)/($.next.y-$.y)+$.x)Z=!Z;$=$.next}while($!==J);return Z}function uH(J,Q){let $=gK(J.i,J.x,J.y),Z=gK(Q.i,Q.x,Q.y),K=J.next,W=Q.prev;return J.next=Q,Q.prev=J,$.next=K,K.prev=$,Z.next=$,$.prev=Z,W.next=Z,Z.prev=W,Z}function TX(J,Q,$,Z){let K=gK(J,Q,$);if(!Z)K.prev=K,K.next=K;else K.next=Z.next,K.prev=Z,Z.next.prev=K,Z.next=K;return K}function jQ(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function gK(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sN(J,Q,$,Z){let K=0;for(let W=Q,Y=$-Z;W<$;W+=Z)K+=(J[Y]-J[W])*(J[W+1]+J[Y+1]),Y=W;return K}class dH{static triangulate(J,Q,$=2){return wN(J,Q,$)}}class w6{static area(J){let Q=J.length,$=0;for(let Z=Q-1,K=0;K<Q;Z=K++)$+=J[Z].x*J[K].y-J[K].x*J[Z].y;return $*0.5}static isClockWise(J){return w6.area(J)<0}static triangulateShape(J,Q){let $=[],Z=[],K=[];SX(J),wX($,J);let W=J.length;Q.forEach(SX);for(let X=0;X<Q.length;X++)Z.push(W),W+=Q[X].length,wX($,Q[X]);let Y=dH.triangulate($,Z);for(let X=0;X<Y.length;X+=3)K.push(Y.slice(X,X+3));return K}}function SX(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function wX(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class tQ extends _Z{constructor(J=1,Q=0){let $=(1+Math.sqrt(5))/2,Z=[-1,$,0,1,$,0,-1,-$,0,1,-$,0,0,-1,$,0,1,$,0,-1,-$,0,1,-$,$,0,-1,$,0,1,-$,0,-1,-$,0,1],K=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(Z,K,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new tQ(J.radius,J.detail)}}class O7 extends vJ{constructor(J=[new G0(0,-0.5),new G0(0.5,0),new G0(0,0.5)],Q=12,$=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:Z},Q=Math.floor(Q),Z=NJ(Z,0,Math.PI*2);let K=[],W=[],Y=[],X=[],H=[],U=1/Q,N=new _,F=new G0,G=new _,E=new _,O=new _,B=0,R=0;for(let q=0;q<=J.length-1;q++)switch(q){case 0:B=J[q+1].x-J[q].x,R=J[q+1].y-J[q].y,G.x=R*1,G.y=-B,G.z=R*0,O.copy(G),G.normalize(),X.push(G.x,G.y,G.z);break;case J.length-1:X.push(O.x,O.y,O.z);break;default:B=J[q+1].x-J[q].x,R=J[q+1].y-J[q].y,G.x=R*1,G.y=-B,G.z=R*0,E.copy(G),G.x+=O.x,G.y+=O.y,G.z+=O.z,G.normalize(),X.push(G.x,G.y,G.z),O.copy(E)}for(let q=0;q<=Q;q++){let M=$+q*U*Z,P=Math.sin(M),V=Math.cos(M);for(let L=0;L<=J.length-1;L++){N.x=J[L].x*P,N.y=J[L].y,N.z=J[L].x*V,W.push(N.x,N.y,N.z),F.x=q/Q,F.y=L/(J.length-1),Y.push(F.x,F.y);let C=X[3*L+0]*P,A=X[3*L+1],D=X[3*L+0]*V;H.push(C,A,D)}}for(let q=0;q<Q;q++)for(let M=0;M<J.length-1;M++){let P=M+q*J.length,V=P,L=P+J.length,C=P+J.length+1,A=P+1;K.push(V,L,A),K.push(C,A,L)}this.setIndex(K),this.setAttribute("position",new WJ(W,3)),this.setAttribute("uv",new WJ(Y,2)),this.setAttribute("normal",new WJ(H,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new O7(J.points,J.segments,J.phiStart,J.phiLength)}}class EJ extends vJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,Y=Math.floor($),X=Math.floor(Z),H=Y+1,U=X+1,N=J/Y,F=Q/X,G=[],E=[],O=[],B=[];for(let R=0;R<U;R++){let q=R*F-W;for(let M=0;M<H;M++){let P=M*N-K;E.push(P,-q,0),O.push(0,0,1),B.push(M/Y),B.push(1-R/X)}}for(let R=0;R<X;R++)for(let q=0;q<Y;q++){let M=q+H*R,P=q+H*(R+1),V=q+1+H*(R+1),L=q+1+H*R;G.push(M,P,L),G.push(P,V,L)}this.setIndex(G),this.setAttribute("position",new WJ(E,3)),this.setAttribute("normal",new WJ(O,3)),this.setAttribute("uv",new WJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new EJ(J.width,J.height,J.widthSegments,J.heightSegments)}}class eQ extends vJ{constructor(J=new rQ([new G0(0,0.5),new G0(-0.5,-0.5),new G0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],Z=[],K=[],W=[],Y=0,X=0;if(Array.isArray(J)===!1)H(J);else for(let U=0;U<J.length;U++)H(J[U]),this.addGroup(Y,X,U),Y+=X,X=0;this.setIndex($),this.setAttribute("position",new WJ(Z,3)),this.setAttribute("normal",new WJ(K,3)),this.setAttribute("uv",new WJ(W,2));function H(U){let N=Z.length/3,F=U.extractPoints(Q),G=F.shape,E=F.holes;if(w6.isClockWise(G)===!1)G=G.reverse();for(let B=0,R=E.length;B<R;B++){let q=E[B];if(w6.isClockWise(q)===!0)E[B]=q.reverse()}let O=w6.triangulateShape(G,E);for(let B=0,R=E.length;B<R;B++){let q=E[B];G=G.concat(q)}for(let B=0,R=G.length;B<R;B++){let q=G[B];Z.push(q.x,q.y,0),K.push(0,0,1),W.push(q.x,q.y)}for(let B=0,R=O.length;B<R;B++){let q=O[B],M=q[0]+N,P=q[1]+N,V=q[2]+N;$.push(M,P,V),X+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return iN(Q,J)}static fromJSON(J,Q){let $=[];for(let Z=0,K=J.shapes.length;Z<K;Z++){let W=Q[J.shapes[Z]];$.push(W)}return new eQ($,J.curveSegments)}}function iN(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,Z=J.length;$<Z;$++){let K=J[$];Q.shapes.push(K.uuid)}else Q.shapes.push(J.uuid);return Q}class R8 extends vJ{constructor(J=1,Q=32,$=16,Z=0,K=Math.PI*2,W=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:K,thetaStart:W,thetaLength:Y},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let X=Math.min(W+Y,Math.PI),H=0,U=[],N=new _,F=new _,G=[],E=[],O=[],B=[];for(let R=0;R<=$;R++){let q=[],M=R/$,P=W+M*Y,V=J*Math.cos(P),L=Math.sqrt(J*J-V*V),C=0;if(R===0&&W===0)C=0.5/Q;else if(R===$&&X===Math.PI)C=-0.5/Q;for(let A=0;A<=Q;A++){let D=A/Q,I=Z+D*K;N.x=-L*Math.cos(I),N.y=V,N.z=L*Math.sin(I),E.push(N.x,N.y,N.z),F.copy(N).normalize(),O.push(F.x,F.y,F.z),B.push(D+C,1-M),q.push(H++)}U.push(q)}for(let R=0;R<$;R++)for(let q=0;q<Q;q++){let M=U[R][q+1],P=U[R][q],V=U[R+1][q],L=U[R+1][q+1];if(R!==0||W>0)G.push(M,P,L);if(R!==$-1||X<Math.PI)G.push(P,V,L)}this.setIndex(G),this.setAttribute("position",new WJ(E,3)),this.setAttribute("normal",new WJ(O,3)),this.setAttribute("uv",new WJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new R8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class w9 extends vJ{constructor(J=1,Q=0.4,$=12,Z=48,K=Math.PI*2,W=0,Y=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:Z,arc:K,thetaStart:W,thetaLength:Y},$=Math.floor($),Z=Math.floor(Z);let X=[],H=[],U=[],N=[],F=new _,G=new _,E=new _;for(let O=0;O<=$;O++){let B=W+O/$*Y;for(let R=0;R<=Z;R++){let q=R/Z*K;G.x=(J+Q*Math.cos(B))*Math.cos(q),G.y=(J+Q*Math.cos(B))*Math.sin(q),G.z=Q*Math.sin(B),H.push(G.x,G.y,G.z),F.x=J*Math.cos(q),F.y=J*Math.sin(q),E.subVectors(G,F).normalize(),U.push(E.x,E.y,E.z),N.push(R/Z),N.push(O/$)}}for(let O=1;O<=$;O++)for(let B=1;B<=Z;B++){let R=(Z+1)*O+B-1,q=(Z+1)*(O-1)+B-1,M=(Z+1)*(O-1)+B,P=(Z+1)*O+B;X.push(R,q,P),X.push(q,M,P)}this.setIndex(X),this.setAttribute("position",new WJ(H,3)),this.setAttribute("normal",new WJ(U,3)),this.setAttribute("uv",new WJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new w9(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class j8 extends vJ{constructor(J=new l8(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),Q=64,$=1,Z=8,K=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:Z,closed:K};let W=J.computeFrenetFrames(Q,K);this.tangents=W.tangents,this.normals=W.normals,this.binormals=W.binormals;let Y=new _,X=new _,H=new G0,U=new _,N=[],F=[],G=[],E=[];O(),this.setIndex(E),this.setAttribute("position",new WJ(N,3)),this.setAttribute("normal",new WJ(F,3)),this.setAttribute("uv",new WJ(G,2));function O(){for(let M=0;M<Q;M++)B(M);B(K===!1?Q:0),q(),R()}function B(M){U=J.getPointAt(M/Q,U);let P=W.normals[M],V=W.binormals[M];for(let L=0;L<=Z;L++){let C=L/Z*Math.PI*2,A=Math.sin(C),D=-Math.cos(C);X.x=D*P.x+A*V.x,X.y=D*P.y+A*V.y,X.z=D*P.z+A*V.z,X.normalize(),F.push(X.x,X.y,X.z),Y.x=U.x+$*X.x,Y.y=U.y+$*X.y,Y.z=U.z+$*X.z,N.push(Y.x,Y.y,Y.z)}}function R(){for(let M=1;M<=Q;M++)for(let P=1;P<=Z;P++){let V=(Z+1)*(M-1)+(P-1),L=(Z+1)*M+(P-1),C=(Z+1)*M+P,A=(Z+1)*(M-1)+P;E.push(V,L,A),E.push(L,C,A)}}function q(){for(let M=0;M<=Q;M++)for(let P=0;P<=Z;P++)H.x=M/Q,H.y=P/Z,G.push(H.x,H.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new j8(new hK[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function s7(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(jX(K))if(K.isRenderTargetTexture)r0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(jX(K[0])){let W=[];for(let Y=0,X=K.length;Y<X;Y++)W[Y]=K[Y].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function C8(J){let Q={};for(let $=0;$<J.length;$++){let Z=s7(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function jX(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function oN(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function lW(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return FJ.workingColorSpace}var i9={clone:s7,merge:C8},aN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rN=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tJ extends w8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aN,this.fragmentShader=rN,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=s7(J.uniforms),this.uniformsGroups=oN(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new f0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new G0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new _().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new lJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new YJ().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new QJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class J$ extends tJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o0 extends w8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new f0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new f0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new U9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class L8 extends o0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return NJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new f0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new f0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new f0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class uW extends w8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class dW extends w8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function Y7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function $Z(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function tN(J){function Q(K,W){return J[K]-J[W]}let $=J.length,Z=Array($);for(let K=0;K!==$;++K)Z[K]=K;return Z.sort(Q),Z}function yX(J,Q,$){let Z=J.length,K=new J.constructor(Z);for(let W=0,Y=0;Y!==Z;++W){let X=$[W]*Q;for(let H=0;H!==Q;++H)K[Y++]=J[X+H]}return K}function eN(J,Q,$,Z){let K=1,W=J[0];while(W!==void 0&&W[Z]===void 0)W=J[K++];if(W===void 0)return;let Y=W[Z];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=W[Z],Y!==void 0)Q.push(W.time),$.push(...Y);W=J[K++]}while(W!==void 0);else if(Y.toArray!==void 0)do{if(Y=W[Z],Y!==void 0)Q.push(W.time),Y.toArray($,$.length);W=J[K++]}while(W!==void 0);else do{if(Y=W[Z],Y!==void 0)Q.push(W.time),$.push(Y);W=J[K++]}while(W!==void 0)}class o9{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];J:{Q:{let W;$:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(K=Z,Z=Q[++$],J<Z)break Q}W=Q.length;break $}if(!(J>=K)){let Y=Q[1];if(J<Y)$=2,K=Y;for(let X=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===X)break;if(Z=K,K=Q[--$-1],J>=K)break Q}W=$,$=0;break $}break J}while($<W){let Y=$+W>>>1;if(J<Q[Y])W=Y;else $=Y+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class cW extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,Y=Z[K],X=Z[W];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,Y=2*Q-$;break;case 2402:K=Z.length-2,Y=Q+Z[K]-Z[K+1];break;default:K=J,Y=$}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,X=2*$-Q;break;case 2402:W=1,X=$+Z[1]-Z[0];break;default:W=J-1,X=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-Y),this._weightNext=H/(X-$),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this._offsetPrev,N=this._offsetNext,F=this._weightPrev,G=this._weightNext,E=($-Q)/(Z-Q),O=E*E,B=O*E,R=-F*B+2*F*O-F*E,q=(1+F)*B+(-1.5-2*F)*O+(-0.5+F)*E+1,M=(-1-G)*B+(1.5+G)*O+0.5*E,P=G*B-G*O;for(let V=0;V!==Y;++V)K[V]=R*W[U+V]+q*W[H+V]+M*W[X+V]+P*W[N+V];return K}}class yZ extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=($-Q)/(Z-Q),N=1-U;for(let F=0;F!==Y;++F)K[F]=W[H+F]*N+W[X+F]*U;return K}}class nW extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class sW extends o9{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this.inTangents,N=this.outTangents;if(!U||!N){let E=($-Q)/(Z-Q),O=1-E;for(let B=0;B!==Y;++B)K[B]=W[H+B]*O+W[X+B]*E;return K}let F=Y*2,G=J-1;for(let E=0;E!==Y;++E){let O=W[H+E],B=W[X+E],R=G*F+E*2,q=N[R],M=N[R+1],P=J*F+E*2,V=U[P],L=U[P+1],C=QG($,Q,q,V,Z);K[E]=cH(C,O,M,L,B)}return K}}function cH(J,Q,$,Z,K){let W=1-J;return W*W*W*Q+3*W*W*J*$+3*W*J*J*Z+J*J*J*K}function JG(J,Q,$,Z,K){let W=1-J;return 3*W*W*($-Q)+6*W*J*(Z-$)+3*J*J*(K-Z)}function QG(J,Q,$,Z,K){let W=(J-Q)/(K-Q);for(let Y=0;Y<8;Y++){let X=cH(W,Q,$,Z,K)-J;if(Math.abs(X)<0.0000000001)break;let H=JG(W,Q,$,Z,K);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-X/H))}return W}class u8{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=Y7(Q,this.TimeBufferType),this.values=Y7($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:Y7(J.times,Array),values:Y7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if($Z(J.settings))$.settings={inTangents:Y7(J.settings.inTangents,Array),outTangents:Y7(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new nW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new yZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new cW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new sW(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return r0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if($Z(this.settings))vX(this.settings.inTangents,J),vX(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let Y=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*Y,W*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)$J("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)$J("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let Y=0;Y!==K;Y++){let X=$[Y];if(typeof X==="number"&&isNaN(X)){$J("KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(W!==null&&W>X){$J("KeyframeTrack: Out of order keys.",this,Y,X,W),J=!1;break}W=X}if(Z!==void 0){if(p5(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let H=Z[Y];if(isNaN(H)){$J("KeyframeTrack: Value is not a valid number.",this,Y,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let Y=1;Y<K;++Y){let X=!1,H=J[Y],U=J[Y+1];if(H!==U&&(Y!==1||H!==J[0]))if(!Z){let N=Y*$,F=N-$,G=N+$;for(let E=0;E!==$;++E){let O=Q[N+E];if(O!==Q[F+E]||O!==Q[G+E]){X=!0;break}}}else X=!0;if(X){if(Y!==W){J[W]=J[Y];let N=Y*$,F=W*$;for(let G=0;G!==$;++G)Q[F+G]=Q[N+G]}++W}}if(K>0){J[W]=J[K];for(let Y=K*$,X=W*$,H=0;H!==$;++H)Q[X+H]=Q[Y+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,$Z(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function vX(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}u8.prototype.ValueTypeName="";u8.prototype.TimeBufferType=Float32Array;u8.prototype.ValueBufferType=Float32Array;u8.prototype.DefaultInterpolation=2301;class R7 extends u8{constructor(J,Q,$){super(J,Q,$)}}R7.prototype.ValueTypeName="bool";R7.prototype.ValueBufferType=Array;R7.prototype.DefaultInterpolation=2300;R7.prototype.InterpolantFactoryMethodLinear=void 0;R7.prototype.InterpolantFactoryMethodSmooth=void 0;class vZ extends u8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}vZ.prototype.ValueTypeName="color";class L7 extends u8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}L7.prototype.ValueTypeName="number";class iW extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=($-Q)/(Z-Q),H=J*Y;for(let U=H+Y;H!==U;H+=4)IJ.slerpFlat(K,0,W,H-Y,W,H,X);return K}}class V7 extends u8{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new iW(this.times,this.values,this.getValueSize(),J)}}V7.prototype.ValueTypeName="quaternion";V7.prototype.InterpolantFactoryMethodSmooth=void 0;class D7 extends u8{constructor(J,Q,$){super(J,Q,$)}}D7.prototype.ValueTypeName="string";D7.prototype.ValueBufferType=Array;D7.prototype.DefaultInterpolation=2300;D7.prototype.InterpolantFactoryMethodLinear=void 0;D7.prototype.InterpolantFactoryMethodSmooth=void 0;class i7 extends u8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}i7.prototype.ValueTypeName="vector";class f6{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=s8(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let W=0,Y=$.length;W!==Y;++W)Q.push(ZG($[W]).scale(Z));let K=new this(J.name,J.duration,Q,J.blendMode);return K.uuid=J.uuid,K.userData=JSON.parse(J.userData||"{}"),K}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let K=0,W=$.length;K!==W;++K)Q.push(u8.toJSON($[K]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let K=Q.length,W=[];for(let Y=0;Y<K;Y++){let X=[],H=[];X.push((Y+K-1)%K,Y,(Y+1)%K),H.push(0,1,0);let U=tN(X);if(X=yX(X,1,U),H=yX(H,1,U),!Z&&X[0]===0)X.push(K),H.push(H[0]);W.push(new L7(".morphTargetInfluences["+Q[Y].name+"]",X,H).scale(1/$))}return new this(J,-1,W)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},K=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y],U=H.name.match(K);if(U&&U.length>1){let N=U[1],F=Z[N];if(!F)Z[N]=F=[];F.push(H)}}let W=[];for(let Y in Z)W.push(this.CreateFromMorphTargetSequence(Y,Z[Y],Q,$));return W}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let K=this.tracks[$];Q=Math.max(Q,K.times[K.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function $G(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return L7;case"vector":case"vector2":case"vector3":case"vector4":return i7;case"color":return vZ;case"quaternion":return V7;case"bool":case"boolean":return R7;case"string":return D7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function ZG(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=$G(J.type);if(J.times===void 0){let Z=[],K=[];eN(J.keys,Z,K,"value"),J.times=Z,J.values=K}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if($Z(J.settings))$.settings={inTangents:Y7(J.settings.inTangents,Float32Array),outTangents:Y7(J.settings.outTangents,Float32Array)};return $}var I9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(fX(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(fX(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function fX(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class oW{constructor(J,Q,$){let Z=this,K=!1,W=0,Y=0,X=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(Y++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,Y)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,Y);if(W===Y){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,N){return H.push(U,N),this},this.removeHandler=function(U){let N=H.indexOf(U);if(N!==-1)H.splice(N,2);return this},this.getHandler=function(U){for(let N=0,F=H.length;N<F;N+=2){let G=H[N],E=H[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var nH=new oW;class a9{constructor(J){if(this.manager=J!==void 0?J:nH,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}a9.DEFAULT_MATERIAL_NAME="__DEFAULT";var d9={};class sH extends Error{constructor(J,Q){super(J);this.response=Q}}class Q$ extends a9{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=I9.get(`file:${J}`);if(K!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(K);this.manager.itemEnd(J)},0);return}if(d9[J]!==void 0){d9[J].push({onLoad:Q,onProgress:$,onError:Z});return}d9[J]=[],d9[J].push({onLoad:Q,onProgress:$,onError:Z});let W=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Y=this.mimeType,X=this.responseType;fetch(W).then((H)=>{if(H.status===200||H.status===0){if(H.status===0)r0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||H.body===void 0||H.body.getReader===void 0)return H;let U=d9[J],N=H.body.getReader(),F=H.headers.get("X-File-Size")||H.headers.get("Content-Length"),G=F?parseInt(F):0,E=G!==0,O=0,B=new ReadableStream({start(R){q();function q(){N.read().then(({done:M,value:P})=>{if(M)R.close();else{O+=P.byteLength;let V=new ProgressEvent("progress",{lengthComputable:E,loaded:O,total:G});for(let L=0,C=U.length;L<C;L++){let A=U[L];if(A.onProgress)A.onProgress(V)}R.enqueue(P),q()}},(M)=>{R.error(M)})}}});return new Response(B)}else throw new sH(`fetch for "${H.url}" responded with ${H.status}: ${H.statusText}`,H)}).then((H)=>{switch(X){case"arraybuffer":return H.arrayBuffer();case"blob":return H.blob();case"document":return H.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return H.json();default:if(Y==="")return H.text();else{let N=/charset="?([^;"\s]*)"?/i.exec(Y),F=N&&N[1]?N[1].toLowerCase():void 0,G=new TextDecoder(F);return H.arrayBuffer().then((E)=>G.decode(E))}}}).then((H)=>{I9.add(`file:${J}`,H);let U=d9[J];delete d9[J];for(let N=0,F=U.length;N<F;N++){let G=U[N];if(G.onLoad)G.onLoad(H)}}).catch((H)=>{let U=d9[J];if(U===void 0)throw this.manager.itemError(J),H;delete d9[J];for(let N=0,F=U.length;N<F;N++){let G=U[N];if(G.onError)G.onError(H)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var A6=new WeakMap;class aW extends a9{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=I9.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);else{let N=A6.get(W);if(N===void 0)N=[],A6.set(W,N);N.push({onLoad:Q,onError:Z})}return W}let Y=j6("img");function X(){if(U(),Q)Q(this);let N=A6.get(this)||[];for(let F=0;F<N.length;F++){let G=N[F];if(G.onLoad)G.onLoad(this)}A6.delete(this),K.manager.itemEnd(J)}function H(N){if(U(),Z)Z(N);I9.remove(`image:${J}`);let F=A6.get(this)||[];for(let G=0;G<F.length;G++){let E=F[G];if(E.onError)E.onError(N)}A6.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",H,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",H,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return I9.add(`image:${J}`,Y),K.manager.itemStart(J),Y.src=J,Y}}class fZ extends a9{constructor(J){super(J)}load(J,Q,$,Z){let K=new eJ,W=new aW(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(Y){if(K.image=Y,K.needsUpdate=!0,Q!==void 0)Q(K)},$,Z),K}}class i6 extends wJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new f0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class bZ extends i6{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new f0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var vK=new QJ,bX=new _,hX=new _;class $${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new QJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iQ,this._frameExtents=new G0(1,1),this._viewportCount=1,this._viewports=[new lJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;bX.setFromMatrixPosition(J.matrixWorld),Q.position.copy(bX),hX.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(hX),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,Z){vK.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(vK,J.coordinateSystem,J.reversedDepth);let K=this._frameExtents,W=Z?Z.z/K.x:1,Y=Z?Z.w/K.y:1,X=Z?Z.x/K.x:0,H=Z?Z.y/K.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,1,0,0,0,0,1);else Q.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,0.5,0.5,0,0,0,1);Q.multiply(vK)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var JZ=new _,QZ=new IJ,P9=new _;class hZ extends wJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new QJ,this.projectionMatrix=new QJ,this.projectionMatrixInverse=new QJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(JZ,QZ,P9),P9.x===1&&P9.y===1&&P9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(JZ,QZ,P9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(JZ,QZ,P9),P9.x===1&&P9.y===1&&P9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(JZ,QZ,P9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var W7=new _,xX=new G0,gX=new G0;class H8 extends hZ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=w7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(IQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return w7*2*Math.atan(Math.tan(IQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){W7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(W7.x,W7.y).multiplyScalar(-J/W7.z),W7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(W7.x,W7.y).multiplyScalar(-J/W7.z)}getViewSize(J,Q){return this.getViewBounds(J,xX,gX),Q.subVectors(gX,xX)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(IQ*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:H}=W;K+=W.offsetX*Z/X,Q-=W.offsetY*$/H,Z*=W.width/X,$*=W.height/H}let Y=this.filmOffset;if(Y!==0)K+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class iH extends $${constructor(){super(new H8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=w7*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,K=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||K!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=K,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class o6 extends i6{constructor(J,Q,$=0,Z=Math.PI/3,K=0,W=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wJ.DEFAULT_UP),this.updateMatrix(),this.target=new wJ,this.distance=$,this.angle=Z,this.penumbra=K,this.decay=W,this.map=null,this.shadow=new iH}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class oH extends $${constructor(){super(new H8(90,1,0.5,500));this.isPointLightShadow=!0}}class r9 extends i6{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new oH}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class t9 extends hZ{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,Y=Z+Q,X=Z-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=H*this.view.offsetX,W=K+H*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class aH extends $${constructor(){super(new t9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class a6 extends i6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wJ.DEFAULT_UP),this.updateMatrix(),this.target=new wJ,this.shadow=new aH}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class B7{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var fK=new WeakMap;class xZ extends a9{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")r0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")r0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=I9.get(`image-bitmap:${J}`);if(W!==void 0){if(K.manager.itemStart(J),W.then){W.then((H)=>{if(fK.has(W)===!0){if(Z)Z(fK.get(W));K.manager.itemError(J),K.manager.itemEnd(J)}else{if(Q)Q(H);K.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);return}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader,Y.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,Y).then(function(H){return H.blob()}).then(function(H){return createImageBitmap(H,Object.assign({},K.options,{colorSpaceConversion:"none"}))}).then(function(H){if(I9.add(`image-bitmap:${J}`,H),Q)Q(H);return K.manager.itemEnd(J),H}).catch(function(H){if(Z)Z(H);fK.set(X,H),I9.remove(`image-bitmap:${J}`),K.manager.itemError(J),K.manager.itemEnd(J)});I9.add(`image-bitmap:${J}`,X),K.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var _6=-90,T6=1;class rW extends wJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new H8(_6,T6,J,Q);Z.layers=this.layers,this.add(Z);let K=new H8(_6,T6,J,Q);K.layers=this.layers,this.add(K);let W=new H8(_6,T6,J,Q);W.layers=this.layers,this.add(W);let Y=new H8(_6,T6,J,Q);Y.layers=this.layers,this.add(Y);let X=new H8(_6,T6,J,Q);X.layers=this.layers,this.add(X);let H=new H8(_6,T6,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,Y,X]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,Y,X,H,U]=this.children,N=J.getRenderTarget(),F=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let O=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,3,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,4,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=O,J.setRenderTarget($,5,Z),B&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,F,G),J.xr.enabled=E,$.texture.needsPMREMUpdate=!0}}class tW extends H8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class gZ{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=KG.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function KG(){if(this._document.hidden===!1)this.reset()}class eW{constructor(J,Q,$){this.binding=J,this.valueSize=$;let Z,K,W;switch(Q){case"quaternion":Z=this._slerp,K=this._slerpAdditive,W=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":Z=this._select,K=this._select,W=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:Z=this._lerp,K=this._lerpAdditive,W=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=Z,this._mixBufferRegionAdditive=K,this._setIdentity=W,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,Z=this.valueSize,K=J*Z+Z,W=this.cumulativeWeight;if(W===0){for(let Y=0;Y!==Z;++Y)$[K+Y]=$[Y];W=Q}else{W+=Q;let Y=Q/W;this._mixBufferRegion($,K,0,Y,Z)}this.cumulativeWeight=W}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,Z=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,Z,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,Z=J*Q+Q,K=this.cumulativeWeight,W=this.cumulativeWeightAdditive,Y=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,K<1){let X=Q*this._origIndex;this._mixBufferRegion($,Z,X,1-K,Q)}if(W>0)this._mixBufferRegionAdditive($,Z,this._addIndex*Q,1,Q);for(let X=Q,H=Q+Q;X!==H;++X)if($[X]!==$[X+Q]){Y.setValue($,Z);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,Z=$*this._origIndex;J.getValue(Q,Z);for(let K=$,W=Z;K!==W;++K)Q[K]=Q[Z+K%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,Z,K){if(Z>=0.5)for(let W=0;W!==K;++W)J[Q+W]=J[$+W]}_slerp(J,Q,$,Z){IJ.slerpFlat(J,Q,J,Q,J,$,Z)}_slerpAdditive(J,Q,$,Z,K){let W=this._workIndex*K;IJ.multiplyQuaternionsFlat(J,W,J,Q,J,$),IJ.slerpFlat(J,Q,J,Q,J,W,Z)}_lerp(J,Q,$,Z,K){let W=1-Z;for(let Y=0;Y!==K;++Y){let X=Q+Y;J[X]=J[X]*W+J[$+Y]*Z}}_lerpAdditive(J,Q,$,Z,K){for(let W=0;W!==K;++W){let Y=Q+W;J[Y]=J[Y]+J[$+W]*Z}}}var JY="\\[\\]\\.:\\/",WG=new RegExp("["+JY+"]","g"),QY="[^"+JY+"]",YG="[^"+JY.replace("\\.","")+"]",XG=/((?:WC+[\/:])*)/.source.replace("WC",QY),HG=/(WCOD+)?/.source.replace("WCOD",YG),UG=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",QY),NG=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",QY),GG=new RegExp("^"+XG+HG+UG+NG+"$"),FG=["material","materials","bones","map"];class rH{constructor(J,Q,$){let Z=$||yJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class yJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||yJ.parseTrackName(Q),this.node=yJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new yJ(J,Q,$);else return new yJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(WG,"")}static parseTrackName(J){let Q=GG.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(FG.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let Y=K[W];if(Y.name===Q||Y.uuid===Q)return Y;let X=$(Y.children);if(X)return X}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=yJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){r0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){$J("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){$J("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){$J("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){$J("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){$J("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){$J("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){$J("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[Z];if(W===void 0){let H=Q.nodeName;$J("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){$J("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){$J("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}X=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))X=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yJ.Composite=rH;yJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yJ.prototype.GetterByBindingType=[yJ.prototype._getValue_direct,yJ.prototype._getValue_array,yJ.prototype._getValue_arrayElement,yJ.prototype._getValue_toArray];yJ.prototype.SetterByBindingTypeAndVersioning=[[yJ.prototype._setValue_direct,yJ.prototype._setValue_direct_setNeedsUpdate,yJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yJ.prototype._setValue_array,yJ.prototype._setValue_array_setNeedsUpdate,yJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yJ.prototype._setValue_arrayElement,yJ.prototype._setValue_arrayElement_setNeedsUpdate,yJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yJ.prototype._setValue_fromArray,yJ.prototype._setValue_fromArray_setNeedsUpdate,yJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class $Y{constructor(J,Q,$=null,Z=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=Z;let K=Q.tracks,W=K.length,Y=Array(W),X={endingStart:2400,endingEnd:2400};for(let H=0;H!==W;++H){let U=K[H].createInterpolant(null);Y[H]=U,U.settings=X}this._interpolantSettings=X,this._interpolants=Y,this._propertyBindings=Array(W),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let Z=this._clip.duration,K=J._clip.duration,W=K/Z,Y=Z/K;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,W,Q),this.warp(Y,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let Z=this._mixer,K=Z.time,W=this.timeScale,Y=this._timeScaleInterpolant;if(Y===null)Y=Z._lendControlInterpolant(),this._timeScaleInterpolant=Y;let{parameterPositions:X,sampleValues:H}=Y;return X[0]=K,X[1]=K+$,H[0]=J/W,H[1]=Q/W,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,Z){if(!this.enabled){this._updateWeight(J);return}let K=this._startTime;if(K!==null){let X=(J-K)*$;if(X<0||$===0)Q=0;else this._startTime=null,Q=$*X}Q*=this._updateTimeScale(J);let W=this._updateTime(Q),Y=this._updateWeight(J);if(Y>0){let X=this._interpolants,H=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,N=X.length;U!==N;++U)X[U].evaluate(W),H[U].accumulateAdditive(Y);break;case 2500:default:for(let U=0,N=X.length;U!==N;++U)X[U].evaluate(W),H[U].accumulate(Z,Y)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(this.stopFading(),Z===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,Z=this.time+J,K=this._loopCount,W=$===2202;if(J===0){if(K===-1)return Z;return W&&(K&1)===1?Q-Z:Z}if($===2200){if(K===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(Z>=Q)Z=Q;else if(Z<0)Z=0;else{this.time=Z;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(K===-1)if(J>=0)K=0,this._setEndings(!0,this.repetitions===0,W);else this._setEndings(this.repetitions===0,!0,W);if(Z>=Q||Z<0){let Y=Math.floor(Z/Q);Z-=Q*Y,K+=Math.abs(Y);let X=this.repetitions-K;if(X<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;Z=J>0?Q:0,this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(X===1){let H=J<0;this._setEndings(H,!H,W)}else this._setEndings(!1,!1,W);this._loopCount=K,this.time=Z,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:Y})}}else this._loopCount=K,this.time=Z;if(W&&(K&1)===1)return Q-Z}return Z}_setEndings(J,Q,$){let Z=this._interpolantSettings;if($)Z.endingStart=2401,Z.endingEnd=2401;else{if(J)Z.endingStart=this.zeroSlopeAtStart?2401:2400;else Z.endingStart=2402;if(Q)Z.endingEnd=this.zeroSlopeAtEnd?2401:2400;else Z.endingEnd=2402}}_scheduleFading(J,Q,$){let Z=this._mixer,K=Z.time,W=this._weightInterpolant;if(W===null)W=Z._lendControlInterpolant(),this._weightInterpolant=W;let{parameterPositions:Y,sampleValues:X}=W;return Y[0]=K,X[0]=Q,Y[1]=K+J,X[1]=$,this}}var EG=new Float32Array(1);class Z$ extends E9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,Z=J._clip.tracks,K=Z.length,W=J._propertyBindings,Y=J._interpolants,X=$.uuid,H=this._bindingsByRootAndName,U=H[X];if(U===void 0)U={},H[X]=U;for(let N=0;N!==K;++N){let F=Z[N],G=F.name,E=U[G];if(E!==void 0)++E.referenceCount,W[N]=E;else{if(E=W[N],E!==void 0){if(E._cacheIndex===null)++E.referenceCount,this._addInactiveBinding(E,X,G);continue}let O=Q&&Q._propertyBindings[N].binding.parsedPath;E=new eW(yJ.create($,G,O),F.ValueTypeName,F.getValueSize()),++E.referenceCount,this._addInactiveBinding(E,X,G),W[N]=E}Y[N].resultBuffer=E.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,Z=J._clip.uuid,K=this._actionsByClip[Z];this._bindAction(J,K&&K.knownActions[0]),this._addInactiveAction(J,Z,$)}let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let K=Q[$];if(K.useCount++===0)this._lendBinding(K),K.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let K=Q[$];if(--K.useCount===0)K.restoreOriginalState(),this._takeBackBinding(K)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let Z=this._actions,K=this._actionsByClip,W=K[Q];if(W===void 0)W={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,K[Q]=W;else{let Y=W.knownActions;J._byClipCacheIndex=Y.length,Y.push(J)}J._cacheIndex=Z.length,Z.push(J),W.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],Z=J._cacheIndex;$._cacheIndex=Z,Q[Z]=$,Q.pop(),J._cacheIndex=null;let K=J._clip.uuid,W=this._actionsByClip,Y=W[K],X=Y.knownActions,H=X[X.length-1],U=J._byClipCacheIndex;H._byClipCacheIndex=U,X[U]=H,X.pop(),J._byClipCacheIndex=null;let N=Y.actionByRoot,F=(J._localRoot||this._root).uuid;if(delete N[F],X.length===0)delete W[K];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let K=Q[$];if(--K.referenceCount===0)this._removeInactiveBinding(K)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,Z=this._nActiveActions++,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,Z=--this._nActiveActions,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_addInactiveBinding(J,Q,$){let Z=this._bindingsByRootAndName,K=this._bindings,W=Z[Q];if(W===void 0)W={},Z[Q]=W;W[$]=J,J._cacheIndex=K.length,K.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,Z=$.rootNode.uuid,K=$.path,W=this._bindingsByRootAndName,Y=W[Z],X=Q[Q.length-1],H=J._cacheIndex;if(X._cacheIndex=H,Q[H]=X,Q.pop(),delete Y[K],Object.keys(Y).length===0)delete W[Z]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=this._nActiveBindings++,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=--this._nActiveBindings,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new yZ(new Float32Array(2),new Float32Array(2),1,EG),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,Z=--this._nActiveControlInterpolants,K=Q[Z];J.__cacheIndex=Z,Q[Z]=J,K.__cacheIndex=$,Q[$]=K}clipAction(J,Q,$){let Z=Q||this._root,K=Z.uuid,W=typeof J==="string"?f6.findByName(Z,J):J,Y=W!==null?W.uuid:J,X=this._actionsByClip[Y],H=null;if($===void 0)if(W!==null)$=W.blendMode;else $=2500;if(X!==void 0){let N=X.actionByRoot[K];if(N!==void 0&&N.blendMode===$)return N;if(H=X.knownActions[0],W===null)W=H._clip}if(W===null)return null;let U=new $Y(this,W,Q,$);return this._bindAction(U,H),this._addInactiveAction(U,Y,K),U}existingAction(J,Q){let $=Q||this._root,Z=$.uuid,K=typeof J==="string"?f6.findByName($,J):J,W=K?K.uuid:J,Y=this._actionsByClip[W];if(Y!==void 0)return Y.actionByRoot[Z]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,Z=this.time+=J,K=Math.sign(J),W=this._accuIndex^=1;for(let H=0;H!==$;++H)Q[H]._update(Z,J,K,W);let Y=this._bindings,X=this._nActiveBindings;for(let H=0;H!==X;++H)Y[H].apply(W);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,Z=this._actionsByClip,K=Z[$];if(K!==void 0){let W=K.knownActions;for(let Y=0,X=W.length;Y!==X;++Y){let H=W[Y];this._deactivateAction(H);let U=H._cacheIndex,N=Q[Q.length-1];H._cacheIndex=null,H._byClipCacheIndex=null,N._cacheIndex=U,Q[U]=N,Q.pop(),this._removeInactiveBindingsForAction(H)}delete Z[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let W in $){let Y=$[W].actionByRoot,X=Y[Q];if(X!==void 0)this._deactivateAction(X),this._removeInactiveAction(X)}let Z=this._bindingsByRootAndName,K=Z[Q];if(K!==void 0)for(let W in K){let Y=K[W];Y.restoreOriginalState(),this._removeInactiveBinding(Y)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class pZ{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,r0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class K${constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=NJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(NJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class ZY{static{ZY.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}class mZ extends E9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function KY(J,Q,$,Z){let K=qG(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function qG(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)r0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function DU(){let J=null,Q=!1,$=null,Z=null;function K(W,Y){Z=J.requestAnimationFrame(K),$(W,Y)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function OG(J){let Q=new WeakMap;function $(X,H){let{array:U,usage:N}=X,F=U.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,U,N),X.onUploadCallback();let E;if(U instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)E=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)E=J.SHORT;else if(U instanceof Uint32Array)E=J.UNSIGNED_INT;else if(U instanceof Int32Array)E=J.INT;else if(U instanceof Int8Array)E=J.BYTE;else if(U instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:E,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:F}}function Z(X,H,U){let{array:N,updateRanges:F}=H;if(J.bindBuffer(U,X),F.length===0)J.bufferSubData(U,0,N);else{F.sort((E,O)=>E.start-O.start);let G=0;for(let E=1;E<F.length;E++){let O=F[G],B=F[E];if(B.start<=O.start+O.count+1)O.count=Math.max(O.count,B.start+B.count-O.start);else++G,F[G]=B}F.length=G+1;for(let E=0,O=F.length;E<O;E++){let B=F[E];J.bufferSubData(U,B.start*N.BYTES_PER_ELEMENT,N,B.start,B.count)}H.clearUpdateRanges()}H.onUploadCallback()}function K(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;let H=Q.get(X);if(H)J.deleteBuffer(H.buffer),Q.delete(X)}function Y(X,H){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let N=Q.get(X);if(!N||N.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,$(X,H));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,H),U.version=X.version}}return{get:K,remove:W,update:Y}}var RG=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LG=`#ifdef USE_ALPHAHASH
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
#endif`,VG=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DG=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BG=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MG=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kG=`#ifdef USE_AOMAP
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
#endif`,CG=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PG=`#ifdef USE_BATCHING
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
#endif`,IG=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zG=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AG=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_G=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TG=`#ifdef USE_IRIDESCENCE
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
#endif`,SG=`#ifdef USE_BUMPMAP
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
#endif`,wG=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vG=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gG=`#define PI 3.141592653589793
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
} // validated`,pG=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mG=`vec3 transformedNormal = objectNormal;
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
#endif`,lG=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uG=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dG=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cG=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nG="gl_FragColor = linearToOutputTexel( gl_FragColor );",sG=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iG=`#ifdef USE_ENVMAP
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
#endif`,oG=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aG=`#ifdef USE_ENVMAP
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
#endif`,rG=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tG=`#ifdef USE_ENVMAP
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
#endif`,eG=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QF=`#ifdef USE_FOG
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
#endif`,ZF=`#ifdef USE_GRADIENTMAP
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
}`,KF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YF=`varying vec3 vViewPosition;
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
#include <lightprobes_pars_fragment>`,HF=`#ifdef USE_ENVMAP
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
#endif`,UF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EF=`PhysicalMaterial material;
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
#endif`,qF=`uniform sampler2D dfgLUT;
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
}`,OF=`
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
#endif`,RF=`#if defined( RE_IndirectDiffuse )
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
#endif`,LF=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VF=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,DF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zF=`#if defined( USE_POINTS_UV )
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
#endif`,AF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_F=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TF=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SF=`#if defined( USE_MORPHCOLORS )
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
#endif`,jF=`#ifdef USE_MORPHTARGETS
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
#endif`,yF=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fF=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gF=`#ifdef USE_NORMALMAP
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
#endif`,pF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QE=`float getShadowMask() {
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
#endif`,ZE=`#ifdef USE_SKINNING
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
#endif`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
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
#endif`,YE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,GE=`#ifdef USE_TRANSMISSION
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,RE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LE=`uniform sampler2D t2D;
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ME=`uniform samplerCube tCube;
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
}`,CE=`#if DEPTH_PACKING == 3200
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
}`,PE=`#define DISTANCE
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
}`,IE=`#define DISTANCE
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`uniform float scale;
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
}`,TE=`uniform vec3 diffuse;
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
}`,SE=`#include <common>
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
}`,jE=`#define LAMBERT
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
}`,yE=`#define LAMBERT
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
}`,vE=`#define MATCAP
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
}`,fE=`#define MATCAP
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
}`,bE=`#define NORMAL
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
}`,hE=`#define NORMAL
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
}`,xE=`#define PHONG
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
}`,gE=`#define PHONG
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
}`,pE=`#define STANDARD
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
}`,mE=`#define STANDARD
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
}`,lE=`#define TOON
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
}`,uE=`#define TOON
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
}`,dE=`uniform float size;
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
}`,cE=`uniform vec3 diffuse;
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
}`,nE=`#include <common>
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
}`,sE=`uniform vec3 color;
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
}`,iE=`uniform float rotation;
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
}`,oE=`uniform vec3 diffuse;
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
}`,qJ={alphahash_fragment:RG,alphahash_pars_fragment:LG,alphamap_fragment:VG,alphamap_pars_fragment:DG,alphatest_fragment:BG,alphatest_pars_fragment:MG,aomap_fragment:kG,aomap_pars_fragment:CG,batching_pars_vertex:PG,batching_vertex:IG,begin_vertex:zG,beginnormal_vertex:AG,bsdfs:_G,iridescence_fragment:TG,bumpmap_pars_fragment:SG,clipping_planes_fragment:wG,clipping_planes_pars_fragment:jG,clipping_planes_pars_vertex:yG,clipping_planes_vertex:vG,color_fragment:fG,color_pars_fragment:bG,color_pars_vertex:hG,color_vertex:xG,common:gG,cube_uv_reflection_fragment:pG,defaultnormal_vertex:mG,displacementmap_pars_vertex:lG,displacementmap_vertex:uG,emissivemap_fragment:dG,emissivemap_pars_fragment:cG,colorspace_fragment:nG,colorspace_pars_fragment:sG,envmap_fragment:iG,envmap_common_pars_fragment:oG,envmap_pars_fragment:aG,envmap_pars_vertex:rG,envmap_physical_pars_fragment:HF,envmap_vertex:tG,fog_vertex:eG,fog_pars_vertex:JF,fog_fragment:QF,fog_pars_fragment:$F,gradientmap_pars_fragment:ZF,lightmap_pars_fragment:KF,lights_lambert_fragment:WF,lights_lambert_pars_fragment:YF,lights_pars_begin:XF,lights_toon_fragment:UF,lights_toon_pars_fragment:NF,lights_phong_fragment:GF,lights_phong_pars_fragment:FF,lights_physical_fragment:EF,lights_physical_pars_fragment:qF,lights_fragment_begin:OF,lights_fragment_maps:RF,lights_fragment_end:LF,lightprobes_pars_fragment:VF,logdepthbuf_fragment:DF,logdepthbuf_pars_fragment:BF,logdepthbuf_pars_vertex:MF,logdepthbuf_vertex:kF,map_fragment:CF,map_pars_fragment:PF,map_particle_fragment:IF,map_particle_pars_fragment:zF,metalnessmap_fragment:AF,metalnessmap_pars_fragment:_F,morphinstance_vertex:TF,morphcolor_vertex:SF,morphnormal_vertex:wF,morphtarget_pars_vertex:jF,morphtarget_vertex:yF,normal_fragment_begin:vF,normal_fragment_maps:fF,normal_pars_fragment:bF,normal_pars_vertex:hF,normal_vertex:xF,normalmap_pars_fragment:gF,clearcoat_normal_fragment_begin:pF,clearcoat_normal_fragment_maps:mF,clearcoat_pars_fragment:lF,iridescence_pars_fragment:uF,opaque_fragment:dF,packing:cF,premultiplied_alpha_fragment:nF,project_vertex:sF,dithering_fragment:iF,dithering_pars_fragment:oF,roughnessmap_fragment:aF,roughnessmap_pars_fragment:rF,shadowmap_pars_fragment:tF,shadowmap_pars_vertex:eF,shadowmap_vertex:JE,shadowmask_pars_fragment:QE,skinbase_vertex:$E,skinning_pars_vertex:ZE,skinning_vertex:KE,skinnormal_vertex:WE,specularmap_fragment:YE,specularmap_pars_fragment:XE,tonemapping_fragment:HE,tonemapping_pars_fragment:UE,transmission_fragment:NE,transmission_pars_fragment:GE,uv_pars_fragment:FE,uv_pars_vertex:EE,uv_vertex:qE,worldpos_vertex:OE,background_vert:RE,background_frag:LE,backgroundCube_vert:VE,backgroundCube_frag:DE,cube_vert:BE,cube_frag:ME,depth_vert:kE,depth_frag:CE,distance_vert:PE,distance_frag:IE,equirect_vert:zE,equirect_frag:AE,linedashed_vert:_E,linedashed_frag:TE,meshbasic_vert:SE,meshbasic_frag:wE,meshlambert_vert:jE,meshlambert_frag:yE,meshmatcap_vert:vE,meshmatcap_frag:fE,meshnormal_vert:bE,meshnormal_frag:hE,meshphong_vert:xE,meshphong_frag:gE,meshphysical_vert:pE,meshphysical_frag:mE,meshtoon_vert:lE,meshtoon_frag:uE,points_vert:dE,points_frag:cE,shadow_vert:nE,shadow_frag:sE,sprite_vert:iE,sprite_frag:oE},h0={common:{diffuse:{value:new f0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new YJ},alphaMap:{value:null},alphaMapTransform:{value:new YJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new YJ}},envmap:{envMap:{value:null},envMapRotation:{value:new YJ},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new YJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new YJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new YJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new YJ},normalScale:{value:new G0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new YJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new YJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new YJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new YJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new f0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new _},probesMax:{value:new _},probesResolution:{value:new _}},points:{diffuse:{value:new f0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new YJ},alphaTest:{value:0},uvTransform:{value:new YJ}},sprite:{diffuse:{value:new f0(16777215)},opacity:{value:1},center:{value:new G0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new YJ},alphaMap:{value:null},alphaMapTransform:{value:new YJ},alphaTest:{value:0}}},y9={basic:{uniforms:C8([h0.common,h0.specularmap,h0.envmap,h0.aomap,h0.lightmap,h0.fog]),vertexShader:qJ.meshbasic_vert,fragmentShader:qJ.meshbasic_frag},lambert:{uniforms:C8([h0.common,h0.specularmap,h0.envmap,h0.aomap,h0.lightmap,h0.emissivemap,h0.bumpmap,h0.normalmap,h0.displacementmap,h0.fog,h0.lights,{emissive:{value:new f0(0)},envMapIntensity:{value:1}}]),vertexShader:qJ.meshlambert_vert,fragmentShader:qJ.meshlambert_frag},phong:{uniforms:C8([h0.common,h0.specularmap,h0.envmap,h0.aomap,h0.lightmap,h0.emissivemap,h0.bumpmap,h0.normalmap,h0.displacementmap,h0.fog,h0.lights,{emissive:{value:new f0(0)},specular:{value:new f0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qJ.meshphong_vert,fragmentShader:qJ.meshphong_frag},standard:{uniforms:C8([h0.common,h0.envmap,h0.aomap,h0.lightmap,h0.emissivemap,h0.bumpmap,h0.normalmap,h0.displacementmap,h0.roughnessmap,h0.metalnessmap,h0.fog,h0.lights,{emissive:{value:new f0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qJ.meshphysical_vert,fragmentShader:qJ.meshphysical_frag},toon:{uniforms:C8([h0.common,h0.aomap,h0.lightmap,h0.emissivemap,h0.bumpmap,h0.normalmap,h0.displacementmap,h0.gradientmap,h0.fog,h0.lights,{emissive:{value:new f0(0)}}]),vertexShader:qJ.meshtoon_vert,fragmentShader:qJ.meshtoon_frag},matcap:{uniforms:C8([h0.common,h0.bumpmap,h0.normalmap,h0.displacementmap,h0.fog,{matcap:{value:null}}]),vertexShader:qJ.meshmatcap_vert,fragmentShader:qJ.meshmatcap_frag},points:{uniforms:C8([h0.points,h0.fog]),vertexShader:qJ.points_vert,fragmentShader:qJ.points_frag},dashed:{uniforms:C8([h0.common,h0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qJ.linedashed_vert,fragmentShader:qJ.linedashed_frag},depth:{uniforms:C8([h0.common,h0.displacementmap]),vertexShader:qJ.depth_vert,fragmentShader:qJ.depth_frag},normal:{uniforms:C8([h0.common,h0.bumpmap,h0.normalmap,h0.displacementmap,{opacity:{value:1}}]),vertexShader:qJ.meshnormal_vert,fragmentShader:qJ.meshnormal_frag},sprite:{uniforms:C8([h0.sprite,h0.fog]),vertexShader:qJ.sprite_vert,fragmentShader:qJ.sprite_frag},background:{uniforms:{uvTransform:{value:new YJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qJ.background_vert,fragmentShader:qJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new YJ}},vertexShader:qJ.backgroundCube_vert,fragmentShader:qJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qJ.cube_vert,fragmentShader:qJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qJ.equirect_vert,fragmentShader:qJ.equirect_frag},distance:{uniforms:C8([h0.common,h0.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:qJ.distance_vert,fragmentShader:qJ.distance_frag},shadow:{uniforms:C8([h0.lights,h0.fog,{color:{value:new f0(0)},opacity:{value:1}}]),vertexShader:qJ.shadow_vert,fragmentShader:qJ.shadow_frag}};y9.physical={uniforms:C8([y9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new YJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new YJ},clearcoatNormalScale:{value:new G0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new YJ},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new YJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new YJ},sheen:{value:0},sheenColor:{value:new f0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new YJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new YJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new YJ},transmissionSamplerSize:{value:new G0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new YJ},attenuationDistance:{value:0},attenuationColor:{value:new f0(0)},specularColor:{value:new f0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new YJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new YJ},anisotropyVector:{value:new G0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new YJ}}]),vertexShader:qJ.meshphysical_vert,fragmentShader:qJ.meshphysical_frag};var lZ={r:0,b:0,g:0},aE=new QJ,BU=new YJ;BU.set(-1,0,0,0,1,0,0,0,1);function rE(J,Q,$,Z,K,W){let Y=new f0(0),X=K===!0?0:1,H,U,N=null,F=0,G=null;function E(M){let P=M.isScene===!0?M.background:null;if(P&&P.isTexture){let V=M.backgroundBlurriness>0;P=Q.get(P,V)}return P}function O(M){let P=!1,V=E(M);if(V===null)R(Y,X);else if(V&&V.isColor)R(V,1),P=!0;let L=J.xr.getEnvironmentBlendMode();if(L==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(L==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||P)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(M,P){let V=E(P);if(V&&(V.isCubeTexture||V.mapping===pQ)){if(U===void 0)U=new M0(new _J(1,1,1),new tJ({name:"BackgroundCubeMaterial",uniforms:s7(y9.backgroundCube.uniforms),vertexShader:y9.backgroundCube.vertexShader,fragmentShader:y9.backgroundCube.fragmentShader,side:D8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(aE.makeRotationFromEuler(P.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(BU);if(U.material.toneMapped=FJ.getTransfer(V.colorSpace)!==uJ,N!==V||F!==V.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=V,F=V.version,G=J.toneMapping;U.layers.enableAll(),M.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new M0(new EJ(2,2),new tJ({name:"BackgroundMaterial",uniforms:s7(y9.background.uniforms),vertexShader:y9.background.vertexShader,fragmentShader:y9.background.fragmentShader,side:G7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,H.material.toneMapped=FJ.getTransfer(V.colorSpace)!==uJ,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),N!==V||F!==V.version||G!==J.toneMapping)H.material.needsUpdate=!0,N=V,F=V.version,G=J.toneMapping;H.layers.enableAll(),M.unshift(H,H.geometry,H.material,0,0,null)}}function R(M,P){M.getRGB(lZ,lW(J)),$.buffers.color.setClear(lZ.r,lZ.g,lZ.b,P,W)}function q(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return Y},setClearColor:function(M,P=1){Y.set(M),X=P,R(Y,X)},getClearAlpha:function(){return X},setClearAlpha:function(M){X=M,R(Y,X)},render:O,addToRenderList:B,dispose:q}}function tE(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=G(null),W=K,Y=!1;function X(y,u,J0,f,v){let b=!1,j=F(y,f,J0,u);if(W!==j)W=j,U(W.object);if(b=E(y,f,J0,v),b)O(y,f,J0,v);if(v!==null)Q.update(v,J.ELEMENT_ARRAY_BUFFER);if(b||Y){if(Y=!1,V(y,u,J0,f),v!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(v).buffer)}}function H(){return J.createVertexArray()}function U(y){return J.bindVertexArray(y)}function N(y){return J.deleteVertexArray(y)}function F(y,u,J0,f){let v=f.wireframe===!0,b=Z[u.id];if(b===void 0)b={},Z[u.id]=b;let j=y.isInstancedMesh===!0?y.id:0,d=b[j];if(d===void 0)d={},b[j]=d;let h=d[J0.id];if(h===void 0)h={},d[J0.id]=h;let s=h[v];if(s===void 0)s=G(H()),h[v]=s;return s}function G(y){let u=[],J0=[],f=[];for(let v=0;v<$;v++)u[v]=0,J0[v]=0,f[v]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:u,enabledAttributes:J0,attributeDivisors:f,object:y,attributes:{},index:null}}function E(y,u,J0,f){let v=W.attributes,b=u.attributes,j=0,d=J0.getAttributes();for(let h in d)if(d[h].location>=0){let K0=v[h],_0=b[h];if(_0===void 0){if(h==="instanceMatrix"&&y.instanceMatrix)_0=y.instanceMatrix;if(h==="instanceColor"&&y.instanceColor)_0=y.instanceColor}if(K0===void 0)return!0;if(K0.attribute!==_0)return!0;if(_0&&K0.data!==_0.data)return!0;j++}if(W.attributesNum!==j)return!0;if(W.index!==f)return!0;return!1}function O(y,u,J0,f){let v={},b=u.attributes,j=0,d=J0.getAttributes();for(let h in d)if(d[h].location>=0){let K0=b[h];if(K0===void 0){if(h==="instanceMatrix"&&y.instanceMatrix)K0=y.instanceMatrix;if(h==="instanceColor"&&y.instanceColor)K0=y.instanceColor}let _0={};if(_0.attribute=K0,K0&&K0.data)_0.data=K0.data;v[h]=_0,j++}W.attributes=v,W.attributesNum=j,W.index=f}function B(){let y=W.newAttributes;for(let u=0,J0=y.length;u<J0;u++)y[u]=0}function R(y){q(y,0)}function q(y,u){let{newAttributes:J0,enabledAttributes:f,attributeDivisors:v}=W;if(J0[y]=1,f[y]===0)J.enableVertexAttribArray(y),f[y]=1;if(v[y]!==u)J.vertexAttribDivisor(y,u),v[y]=u}function M(){let{newAttributes:y,enabledAttributes:u}=W;for(let J0=0,f=u.length;J0<f;J0++)if(u[J0]!==y[J0])J.disableVertexAttribArray(J0),u[J0]=0}function P(y,u,J0,f,v,b,j){if(j===!0)J.vertexAttribIPointer(y,u,J0,v,b);else J.vertexAttribPointer(y,u,J0,f,v,b)}function V(y,u,J0,f){B();let v=f.attributes,b=J0.getAttributes(),j=u.defaultAttributeValues;for(let d in b){let h=b[d];if(h.location>=0){let s=v[d];if(s===void 0){if(d==="instanceMatrix"&&y.instanceMatrix)s=y.instanceMatrix;if(d==="instanceColor"&&y.instanceColor)s=y.instanceColor}if(s!==void 0){let{normalized:K0,itemSize:_0}=s,q0=Q.get(s);if(q0===void 0)continue;let{buffer:k0,type:d0,bytesPerElement:Z0}=q0,w=d0===J.INT||d0===J.UNSIGNED_INT||s.gpuType===dK;if(s.isInterleavedBufferAttribute){let m=s.data,n=m.stride,$0=s.offset;if(m.isInstancedInterleavedBuffer){for(let t=0;t<h.locationSize;t++)q(h.location+t,m.meshPerAttribute);if(y.isInstancedMesh!==!0&&f._maxInstanceCount===void 0)f._maxInstanceCount=m.meshPerAttribute*m.count}else for(let t=0;t<h.locationSize;t++)R(h.location+t);J.bindBuffer(J.ARRAY_BUFFER,k0);for(let t=0;t<h.locationSize;t++)P(h.location+t,_0/h.locationSize,d0,K0,n*Z0,($0+_0/h.locationSize*t)*Z0,w)}else{if(s.isInstancedBufferAttribute){for(let m=0;m<h.locationSize;m++)q(h.location+m,s.meshPerAttribute);if(y.isInstancedMesh!==!0&&f._maxInstanceCount===void 0)f._maxInstanceCount=s.meshPerAttribute*s.count}else for(let m=0;m<h.locationSize;m++)R(h.location+m);J.bindBuffer(J.ARRAY_BUFFER,k0);for(let m=0;m<h.locationSize;m++)P(h.location+m,_0/h.locationSize,d0,K0,_0*Z0,_0/h.locationSize*m*Z0,w)}}else if(j!==void 0){let K0=j[d];if(K0!==void 0)switch(K0.length){case 2:J.vertexAttrib2fv(h.location,K0);break;case 3:J.vertexAttrib3fv(h.location,K0);break;case 4:J.vertexAttrib4fv(h.location,K0);break;default:J.vertexAttrib1fv(h.location,K0)}}}}M()}function L(){I();for(let y in Z){let u=Z[y];for(let J0 in u){let f=u[J0];for(let v in f){let b=f[v];for(let j in b)N(b[j].object),delete b[j];delete f[v]}}delete Z[y]}}function C(y){if(Z[y.id]===void 0)return;let u=Z[y.id];for(let J0 in u){let f=u[J0];for(let v in f){let b=f[v];for(let j in b)N(b[j].object),delete b[j];delete f[v]}}delete Z[y.id]}function A(y){for(let u in Z){let J0=Z[u];for(let f in J0){let v=J0[f];if(v[y.id]===void 0)continue;let b=v[y.id];for(let j in b)N(b[j].object),delete b[j];delete v[y.id]}}}function D(y){for(let u in Z){let J0=Z[u],f=y.isInstancedMesh===!0?y.id:0,v=J0[f];if(v===void 0)continue;for(let b in v){let j=v[b];for(let d in j)N(j[d].object),delete j[d];delete v[b]}if(delete J0[f],Object.keys(J0).length===0)delete Z[u]}}function I(){if(c(),Y=!0,W===K)return;W=K,U(W.object)}function c(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:X,reset:I,resetDefaultState:c,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfObject:D,releaseStatesOfProgram:A,initAttributes:B,enableAttribute:R,disableUnusedAttributes:M}}function eE(J,Q,$){let Z;function K(H){Z=H}function W(H,U){J.drawArrays(Z,H,U),$.update(U,Z,1)}function Y(H,U,N){if(N===0)return;J.drawArraysInstanced(Z,H,U,N),$.update(U,Z,N)}function X(H,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,U,0,N);let G=0;for(let E=0;E<N;E++)G+=U[E];$.update(G,Z,1)}this.setMode=K,this.render=W,this.renderInstances=Y,this.renderMultiDraw=X}function J1(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let A=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function Y(A){if(A!==_9&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(A){let D=A===O8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(A!==F9&&A!==n9&&!D&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",N=H(U);if(N!==U)r0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let F=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)r0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),q=J.getParameter(J.MAX_VERTEX_ATTRIBS),M=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),P=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),L=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:G,maxTextures:E,maxVertexTextures:O,maxTextureSize:B,maxCubemapSize:R,maxAttributes:q,maxVertexUniforms:M,maxVaryings:P,maxFragmentUniforms:V,maxSamples:L,samples:C}}function Q1(J){let Q=this,$=null,Z=0,K=!1,W=!1,Y=new n8,X=new YJ,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(F,G){let E=F.length!==0||G||Z!==0||K;return K=G,Z=F.length,E},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,G){$=N(F,G,0)},this.setState=function(F,G,E){let{clippingPlanes:O,clipIntersection:B,clipShadows:R}=F,q=J.get(F);if(!K||O===null||O.length===0||W&&!R)if(W)N(null);else U();else{let M=W?0:Z,P=M*4,V=q.clippingState||null;H.value=V,V=N(O,G,P,E);for(let L=0;L!==P;++L)V[L]=$[L];q.clippingState=V,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=M}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(F,G,E,O){let B=F!==null?F.length:0,R=null;if(B!==0){if(R=H.value,O!==!0||R===null){let q=E+B*4,M=G.matrixWorldInverse;if(X.getNormalMatrix(M),R===null||R.length<q)R=new Float32Array(q);for(let P=0,V=E;P!==B;++P,V+=4)Y.copy(F[P]).applyMatrix4(M,X),Y.normal.toArray(R,V),R[V+3]=Y.constant}H.value=R,H.needsUpdate=!0}return Q.numPlanes=B,Q.numIntersection=0,R}}var t6=4,$1=6,Z1=20,K1=256,W$=new t9,tH=new f0,WY=null,YY=0,XY=0,HY=!1,W1=new _,o7=new _;class U${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:Y=W1}=K;WY=this._renderer.getRenderTarget(),YY=this._renderer.getActiveCubeFace(),XY=this._renderer.getActiveMipmapLevel(),HY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,X,Y),Q>0)this._blur(X,0,0,Q);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=QU(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=JU(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(WY,YY,XY),this._renderer.xr.enabled=HY,J.scissorTest=!1,r6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===x6||J.mapping===f7)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);WY=this._renderer.getRenderTarget(),YY=this._renderer.getActiveCubeFace(),XY=this._renderer.getActiveMipmapLevel(),HY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:q8,minFilter:q8,generateMipmaps:!1,type:O8,format:_9,colorSpace:g8,depthBuffer:!1},Z=eH(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=eH(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Y1(K)),this._blurMaterial=H1(K,J,Q),this._ggxMaterial=X1(K,J,Q)}return Z}_compileMaterial(J){let Q=new M0(new vJ,J);this._renderer.compile(Q,W$)}_sceneToCubeUV(J,Q,$,Z,K){let X=new H8(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,F=N.autoClear,G=N.toneMapping;if(N.getClearColor(tH),N.toneMapping=N9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new M0(new _J,new fJ({name:"PMREM.Background",side:D8,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,B=O.material,R=!1,q=J.background;if(q){if(q.isColor)B.color.copy(q),J.background=null,R=!0}else B.color.copy(tH),R=!0;for(let M=0;M<6;M++){let P=M%3;if(P===0)X.up.set(0,H[M],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x+U[M],K.y,K.z);else if(P===1)X.up.set(0,0,H[M]),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y+U[M],K.z);else X.up.set(0,H[M],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y,K.z+U[M]);let V=this._cubeSize;if(r6(Z,P*V,M>2?V:0,V,V),N.setRenderTarget(Z),R)N.render(O,X);N.render(J,X)}N.toneMapping=G,N.autoClear=F,J.background=q}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===x6||J.mapping===f7;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=QU();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=JU();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let Y=K.uniforms;Y.envMap.value=J;let X=this._cubeSize;r6(Q,0,0,3*X,2*X),$.setRenderTarget(Q),$.render(W,W$)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,Y=this._lodMeshes[$];Y.material=W;let X=W.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),N=Math.sqrt(H*H-U*U),F=H*1.25,G=N*F,{_lodMax:E}=this,O=this._sizeLods[$],B=3*O*($>E-t6?$-E+t6:0),R=4*(this._cubeSize-O);X.envMap.value=J.texture,X.roughness.value=G,X.mipInt.value=E-Q,r6(K,B,R,3*O,2*O),Z.setRenderTarget(K),Z.render(Y,W$),X.envMap.value=K.texture,X.roughness.value=0,X.mipInt.value=E-$,r6(J,B,R,3*O,2*O),Z.setRenderTarget(J),Z.render(Y,W$)}_blur(J,Q,$,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,Q,$,W),this._blurPass(K,J,$,$,W)}_blurPass(J,Q,$,Z,K){let W=this._renderer,Y=this._blurMaterial,X=this._lodMeshes[Z];X.material=Y;let H=Y.uniforms;H.envMap.value=J.texture,H.sigma.value=K,H.mipInt.value=this._lodMax-$;let U=this._sizeLods[Z],N=3*U*(Z>this._lodMax-t6?Z-this._lodMax+t6:0),F=4*(this._cubeSize-U);r6(Q,N,F,3*U,2*U),W.setRenderTarget(Q),W.render(X,W$)}}function Y1(J){let Q=[],$=[],Z=J,K=J-t6+1+$1;for(let W=0;W<K;W++){let Y=Math.pow(2,Z);Q.push(Y);let X=1/(Y-2),H=-X,U=1+X,N=[H,H,U,H,U,U,H,H,U,U,H,U],F=6,G=6,E=3,O=new Float32Array(E*G*F),B=new Float32Array(E*G*F);for(let q=0;q<F;q++){let M=q%3*2/3-1,P=q>2?0:-1,V=[M,P,0,M+0.6666666666666666,P,0,M+0.6666666666666666,P+1,0,M,P,0,M+0.6666666666666666,P+1,0,M,P+1,0];O.set(V,E*G*q);for(let L=0;L<G;L++){let C=N[L*2]*2-1,A=N[L*2+1]*2-1;if(q===0)o7.set(1,A,C);else if(q===1)o7.set(-C,1,-A);else if(q===2)o7.set(-C,A,1);else if(q===3)o7.set(-1,A,-C);else if(q===4)o7.set(-C,-1,A);else o7.set(C,A,-1);o7.toArray(B,(q*G+L)*E)}}let R=new vJ;if(R.setAttribute("position",new aJ(O,E)),R.setAttribute("outputDirection",new aJ(B,E)),$.push(new M0(R,null)),Z>t6)Z--}return{lodMeshes:$,sizeLods:Q}}function eH(J,Q,$){let Z=new Q8(J,Q,$);return Z.texture.mapping=pQ,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function r6(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function X1(J,Q,$){return new tJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K1,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dZ(),fragmentShader:`

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
		`,blending:i8,depthTest:!1,depthWrite:!1})}function H1(J,Q,$){return new tJ({name:"SphericalGaussianBlur",defines:{SAMPLES:Z1,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dZ(),fragmentShader:`

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
		`,blending:i8,depthTest:!1,depthWrite:!1})}function JU(){return new tJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dZ(),fragmentShader:`

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
		`,blending:i8,depthTest:!1,depthWrite:!1})}function QU(){return new tJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:i8,depthTest:!1,depthWrite:!1})}function dZ(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class EY extends Q8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new zZ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new _J(5,5,5),K=new tJ({name:"CubemapFromEquirect",uniforms:s7($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:D8,blending:i8});K.uniforms.tEquirect.value=Q;let W=new M0(Z,K),Y=Q.minFilter;if(Q.minFilter===A9)Q.minFilter=q8;return new rW(1,10,this).update(J,W),Q.minFilter=Y,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function U1(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(G,E=!1){if(G===null||G===void 0)return null;if(E)return Y(G);return W(G)}function W(G){if(G&&G.isTexture){let E=G.mapping;if(E===YZ||E===XZ)if(Q.has(G)){let O=Q.get(G).texture;return X(O,G.mapping)}else{let O=G.image;if(O&&O.height>0){let B=new EY(O.height);return B.fromEquirectangularTexture(J,G),Q.set(G,B),G.addEventListener("dispose",U),X(B.texture,G.mapping)}else return null}}return G}function Y(G){if(G&&G.isTexture){let E=G.mapping,O=E===YZ||E===XZ,B=E===x6||E===f7;if(O||B){let R=$.get(G),q=R!==void 0?R.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==q){if(Z===null)Z=new U$(J);return R=O?Z.fromEquirectangular(G,R):Z.fromCubemap(G,R),R.texture.pmremVersion=G.pmremVersion,$.set(G,R),R.texture}else if(R!==void 0)return R.texture;else{let M=G.image;if(O&&M&&M.height>0||B&&M&&H(M)){if(Z===null)Z=new U$(J);return R=O?Z.fromEquirectangular(G):Z.fromCubemap(G),R.texture.pmremVersion=G.pmremVersion,$.set(G,R),G.addEventListener("dispose",N),R.texture}else return null}}}return G}function X(G,E){if(E===YZ)G.mapping=x6;else if(E===XZ)G.mapping=f7;return G}function H(G){let E=0,O=6;for(let B=0;B<O;B++)if(G[B]!==void 0)E++;return E===O}function U(G){let E=G.target;E.removeEventListener("dispose",U);let O=Q.get(E);if(O!==void 0)Q.delete(E),O.dispose()}function N(G){let E=G.target;E.removeEventListener("dispose",N);let O=$.get(E);if(O!==void 0)$.delete(E),O.dispose()}function F(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function N1(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)S7("WebGLRenderer: "+Z+" extension not supported.");return K}}}function G1(J,Q,$,Z){let K={},W=new WeakMap;function Y(F){let G=F.target;if(G.index!==null)Q.remove(G.index);for(let O in G.attributes)Q.remove(G.attributes[O]);G.removeEventListener("dispose",Y),delete K[G.id];let E=W.get(G);if(E)Q.remove(E),W.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function X(F,G){if(K[G.id]===!0)return G;return G.addEventListener("dispose",Y),K[G.id]=!0,$.memory.geometries++,G}function H(F){let G=F.attributes;for(let E in G)Q.update(G[E],J.ARRAY_BUFFER)}function U(F){let G=[],E=F.index,O=F.attributes.position,B=0;if(O===void 0)return;if(E!==null){let M=E.array;B=E.version;for(let P=0,V=M.length;P<V;P+=3){let L=M[P+0],C=M[P+1],A=M[P+2];G.push(L,C,C,A,A,L)}}else{let M=O.array;B=O.version;for(let P=0,V=M.length/3-1;P<V;P+=3){let L=P+0,C=P+1,A=P+2;G.push(L,C,C,A,A,L)}}let R=new(O.count>=65535?kZ:MZ)(G,1);R.version=B;let q=W.get(F);if(q)Q.remove(q);W.set(F,R)}function N(F){let G=W.get(F);if(G){let E=F.index;if(E!==null){if(G.version<E.version)U(F)}}else U(F);return W.get(F)}return{get:X,update:H,getWireframeAttribute:N}}function F1(J,Q,$){let Z;function K(F){Z=F}let W,Y;function X(F){W=F.type,Y=F.bytesPerElement}function H(F,G){J.drawElements(Z,G,W,F*Y),$.update(G,Z,1)}function U(F,G,E){if(E===0)return;J.drawElementsInstanced(Z,G,W,F*Y,E),$.update(G,Z,E)}function N(F,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,W,F,0,E);let B=0;for(let R=0;R<E;R++)B+=G[R];$.update(B,Z,1)}this.setMode=K,this.setIndex=X,this.render=H,this.renderInstances=U,this.renderMultiDraw=N}function E1(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,Y,X){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=X*(W/3);break;case J.LINES:$.lines+=X*(W/2);break;case J.LINE_STRIP:$.lines+=X*(W-1);break;case J.LINE_LOOP:$.lines+=X*W;break;case J.POINTS:$.points+=X*W;break;default:$J("WebGLInfo: Unknown draw mode:",Y);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function q1(J,Q,$){let Z=new WeakMap,K=new lJ;function W(Y,X,H){let U=Y.morphTargetInfluences,N=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,F=N!==void 0?N.length:0,G=Z.get(X);if(G===void 0||G.count!==F){let I=function(){A.dispose(),Z.delete(X),X.removeEventListener("dispose",I)};if(G!==void 0)G.texture.dispose();let E=X.morphAttributes.position!==void 0,O=X.morphAttributes.normal!==void 0,B=X.morphAttributes.color!==void 0,R=X.morphAttributes.position||[],q=X.morphAttributes.normal||[],M=X.morphAttributes.color||[],P=0;if(E===!0)P=1;if(O===!0)P=2;if(B===!0)P=3;let V=X.attributes.position.count*P,L=1;if(V>Q.maxTextureSize)L=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let C=new Float32Array(V*L*4*F),A=new DZ(C,V,L,F);A.type=n9,A.needsUpdate=!0;let D=P*4;for(let c=0;c<F;c++){let y=R[c],u=q[c],J0=M[c],f=V*L*4*c;for(let v=0;v<y.count;v++){let b=v*D;if(E===!0)K.fromBufferAttribute(y,v),C[f+b+0]=K.x,C[f+b+1]=K.y,C[f+b+2]=K.z,C[f+b+3]=0;if(O===!0)K.fromBufferAttribute(u,v),C[f+b+4]=K.x,C[f+b+5]=K.y,C[f+b+6]=K.z,C[f+b+7]=0;if(B===!0)K.fromBufferAttribute(J0,v),C[f+b+8]=K.x,C[f+b+9]=K.y,C[f+b+10]=K.z,C[f+b+11]=J0.itemSize===4?K.w:1}}G={count:F,texture:A,size:new G0(V,L)},Z.set(X,G),X.addEventListener("dispose",I)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let E=0;for(let B=0;B<U.length;B++)E+=U[B];let O=X.morphTargetsRelative?1:1-E;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function O1(J,Q,$,Z,K){let W=new WeakMap;function Y(U){let N=K.render.frame,F=U.geometry,G=Q.get(U,F);if(W.get(G)!==N)Q.update(G),W.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==N){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,N)}}if(U.isSkinnedMesh){let E=U.skeleton;if(W.get(E)!==N)E.update(),W.set(E,N)}return G}function X(){W=new WeakMap}function H(U){let N=U.target;if(N.removeEventListener("dispose",H),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:Y,dispose:X}}var R1={[vQ]:"LINEAR_TONE_MAPPING",[fQ]:"REINHARD_TONE_MAPPING",[bQ]:"CINEON_TONE_MAPPING",[v7]:"ACES_FILMIC_TONE_MAPPING",[xQ]:"AGX_TONE_MAPPING",[gQ]:"NEUTRAL_TONE_MAPPING",[hQ]:"CUSTOM_TONE_MAPPING"};function L1(J,Q,$,Z,K,W){let Y=new Q8(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),X=null,H=null,U=new vJ;U.setAttribute("position",new WJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new WJ([0,2,0,0,2,0],2));let N=new J$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),F=new M0(U,N),G=new t9(-1,1,1,-1,0,1),E=null,O=null,B=!1,R,q=null,M=[],P=!1;this.setSize=function(V,L){if(Y.setSize(V,L),X!==null)X.setSize(V,L);if(H!==null)H.setSize(V,L);for(let C=0;C<M.length;C++){let A=M[C];if(A.setSize)A.setSize(V,L)}},this.setEffects=function(V){M=V,P=M.length>0&&M[0].isRenderPass===!0;let{width:L,height:C}=Y;if(M.length>0&&X===null)X=new Q8(L,C,{type:O8,depthBuffer:!1,stencilBuffer:!1}),H=new Q8(L,C,{type:O8,depthBuffer:!1,stencilBuffer:!1});for(let A=0;A<M.length;A++){let D=M[A];if(D.setSize)D.setSize(L,C)}},this.begin=function(V,L){if(B)return!1;if(V.toneMapping===N9&&M.length===0)return!1;if(q=L,L!==null){let{width:C,height:A}=L;if(Y.width!==C||Y.height!==A)this.setSize(C,A)}if(P===!1)V.setRenderTarget(Y);return R=V.toneMapping,V.toneMapping=N9,!0},this.hasRenderPass=function(){return P},this.end=function(V,L){V.toneMapping=R,B=!0;let C=Y,A=X;for(let D=0;D<M.length;D++){let I=M[D];if(I.enabled===!1)continue;if(I.render(V,A,C,L),I.needsSwap!==!1)C=A,A=A===X?H:X}if(E!==V.outputColorSpace||O!==V.toneMapping){if(E=V.outputColorSpace,O=V.toneMapping,N.defines={},FJ.getTransfer(E)===uJ)N.defines.SRGB_TRANSFER="";let D=R1[O];if(D)N.defines[D]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=C.texture,V.setRenderTarget(q),V.render(F,G),q=null,B=!1},this.isCompositing=function(){return B},this.dispose=function(){if(Y.dispose(),X!==null)X.dispose();if(H!==null)H.dispose();U.dispose(),N.dispose()}}var MU=new eJ,GY=new d7(1,1),kU=new DZ,CU=new fW,PU=new zZ,$U=[],ZU=[],KU=new Float32Array(16),WU=new Float32Array(9),YU=new Float32Array(4);function e6(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=$U[K];if(W===void 0)W=new Float32Array(K),$U[K]=W;if(Q!==0){Z.toArray(W,0);for(let Y=1,X=0;Y!==Q;++Y)X+=$,J[Y].toArray(W,X)}return W}function U8(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function N8(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function cZ(J,Q){let $=ZU[Q];if($===void 0)$=new Int32Array(Q),ZU[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function V1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function D1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(U8($,Q))return;J.uniform2fv(this.addr,Q),N8($,Q)}}function B1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(U8($,Q))return;J.uniform3fv(this.addr,Q),N8($,Q)}}function M1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(U8($,Q))return;J.uniform4fv(this.addr,Q),N8($,Q)}}function k1(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(U8($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),N8($,Q)}else{if(U8($,Z))return;YU.set(Z),J.uniformMatrix2fv(this.addr,!1,YU),N8($,Z)}}function C1(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(U8($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),N8($,Q)}else{if(U8($,Z))return;WU.set(Z),J.uniformMatrix3fv(this.addr,!1,WU),N8($,Z)}}function P1(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(U8($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),N8($,Q)}else{if(U8($,Z))return;KU.set(Z),J.uniformMatrix4fv(this.addr,!1,KU),N8($,Z)}}function I1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function z1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(U8($,Q))return;J.uniform2iv(this.addr,Q),N8($,Q)}}function A1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(U8($,Q))return;J.uniform3iv(this.addr,Q),N8($,Q)}}function _1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(U8($,Q))return;J.uniform4iv(this.addr,Q),N8($,Q)}}function T1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function S1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(U8($,Q))return;J.uniform2uiv(this.addr,Q),N8($,Q)}}function w1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(U8($,Q))return;J.uniform3uiv(this.addr,Q),N8($,Q)}}function j1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(U8($,Q))return;J.uniform4uiv(this.addr,Q),N8($,Q)}}function y1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)GY.compareFunction=$.isReversedDepthBuffer()?VZ:LZ,W=GY;else W=MU;$.setTexture2D(Q||W,K)}function v1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||CU,K)}function f1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||PU,K)}function b1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||kU,K)}function h1(J){switch(J){case 5126:return V1;case 35664:return D1;case 35665:return B1;case 35666:return M1;case 35674:return k1;case 35675:return C1;case 35676:return P1;case 5124:case 35670:return I1;case 35667:case 35671:return z1;case 35668:case 35672:return A1;case 35669:case 35673:return _1;case 5125:return T1;case 36294:return S1;case 36295:return w1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return b1}}function x1(J,Q){J.uniform1fv(this.addr,Q)}function g1(J,Q){let $=e6(Q,this.size,2);J.uniform2fv(this.addr,$)}function p1(J,Q){let $=e6(Q,this.size,3);J.uniform3fv(this.addr,$)}function m1(J,Q){let $=e6(Q,this.size,4);J.uniform4fv(this.addr,$)}function l1(J,Q){let $=e6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function u1(J,Q){let $=e6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function d1(J,Q){let $=e6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function c1(J,Q){J.uniform1iv(this.addr,Q)}function n1(J,Q){J.uniform2iv(this.addr,Q)}function s1(J,Q){J.uniform3iv(this.addr,Q)}function i1(J,Q){J.uniform4iv(this.addr,Q)}function o1(J,Q){J.uniform1uiv(this.addr,Q)}function a1(J,Q){J.uniform2uiv(this.addr,Q)}function r1(J,Q){J.uniform3uiv(this.addr,Q)}function t1(J,Q){J.uniform4uiv(this.addr,Q)}function e1(J,Q,$){let Z=this.cache,K=Q.length,W=cZ($,K);if(!U8(Z,W))J.uniform1iv(this.addr,W),N8(Z,W);let Y;if(this.type===J.SAMPLER_2D_SHADOW)Y=GY;else Y=MU;for(let X=0;X!==K;++X)$.setTexture2D(Q[X]||Y,W[X])}function Jq(J,Q,$){let Z=this.cache,K=Q.length,W=cZ($,K);if(!U8(Z,W))J.uniform1iv(this.addr,W),N8(Z,W);for(let Y=0;Y!==K;++Y)$.setTexture3D(Q[Y]||CU,W[Y])}function Qq(J,Q,$){let Z=this.cache,K=Q.length,W=cZ($,K);if(!U8(Z,W))J.uniform1iv(this.addr,W),N8(Z,W);for(let Y=0;Y!==K;++Y)$.setTextureCube(Q[Y]||PU,W[Y])}function $q(J,Q,$){let Z=this.cache,K=Q.length,W=cZ($,K);if(!U8(Z,W))J.uniform1iv(this.addr,W),N8(Z,W);for(let Y=0;Y!==K;++Y)$.setTexture2DArray(Q[Y]||kU,W[Y])}function Zq(J){switch(J){case 5126:return x1;case 35664:return g1;case 35665:return p1;case 35666:return m1;case 35674:return l1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return c1;case 35667:case 35671:return n1;case 35668:case 35672:return s1;case 35669:case 35673:return i1;case 5125:return o1;case 36294:return a1;case 36295:return r1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return Jq;case 35680:case 36300:case 36308:case 36293:return Qq;case 36289:case 36303:case 36311:case 36292:return $q}}class IU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=h1(Q.type)}}class zU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=Zq(Q.type)}}class AU{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let Y=Z[K];Y.setValue(J,Q[Y.id],$)}}}var UY=/(\w+)(\])?(\[|\.)?/g;function XU(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function Kq(J,Q,$){let Z=J.name,K=Z.length;UY.lastIndex=0;while(!0){let W=UY.exec(Z),Y=UY.lastIndex,X=W[1],H=W[2]==="]",U=W[3];if(H)X=X|0;if(U===void 0||U==="["&&Y+2===K){XU($,U===void 0?new IU(X,J,Q):new zU(X,J,Q));break}else{let F=$.map[X];if(F===void 0)F=new AU(X),XU($,F);$=F}}}class H${constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let Y=J.getActiveUniform(Q,W),X=J.getUniformLocation(Q,Y.name);Kq(Y,X,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let Y=Q[K],X=$[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function HU(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var Wq=37297,Yq=0;function Xq(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let Y=K;Y<W;Y++){let X=Y+1;Z.push(`${X===Q?">":" "} ${X}: ${$[Y]}`)}return Z.join(`
`)}var UU=new YJ;function Hq(J){FJ._getMatrix(UU,FJ.workingColorSpace,J);let Q=`mat3( ${UU.elements.map(($)=>$.toFixed(4))} )`;switch(FJ.getTransfer(J)){case TW:return[Q,"LinearTransferOETF"];case uJ:return[Q,"sRGBTransferOETF"];default:return r0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function NU(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let Y=/ERROR: 0:(\d+)/.exec(W);if(Y){let X=parseInt(Y[1]);return $.toUpperCase()+`

`+W+`

`+Xq(J.getShaderSource(Q),X)}else return W}function Uq(J,Q){let $=Hq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var Nq={[vQ]:"Linear",[fQ]:"Reinhard",[bQ]:"Cineon",[v7]:"ACESFilmic",[xQ]:"AgX",[gQ]:"Neutral",[hQ]:"Custom"};function Gq(J,Q){let $=Nq[Q];if($===void 0)return r0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var uZ=new _;function Fq(){FJ.getLuminanceCoefficients(uZ);let J=uZ.x.toFixed(4),Q=uZ.y.toFixed(4),$=uZ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Eq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(X$).join(`
`)}function qq(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function Oq(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),Y=W.name,X=1;if(W.type===J.FLOAT_MAT2)X=2;if(W.type===J.FLOAT_MAT3)X=3;if(W.type===J.FLOAT_MAT4)X=4;$[Y]={type:W.type,location:J.getAttribLocation(Q,Y),locationSize:X}}return $}function X$(J){return J!==""}function GU(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function FU(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Rq=/^[ \t]*#include +<([\w\d./]+)>/gm;function FY(J){return J.replace(Rq,Vq)}var Lq=new Map;function Vq(J,Q){let $=qJ[Q];if($===void 0){let Z=Lq.get(Q);if(Z!==void 0)$=qJ[Z],r0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return FY($)}var Dq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function EU(J){return J.replace(Dq,Bq)}function Bq(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function qU(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Mq={[y7]:"SHADOWMAP_TYPE_PCF",[b6]:"SHADOWMAP_TYPE_VSM"};function kq(J){return Mq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Cq={[x6]:"ENVMAP_TYPE_CUBE",[f7]:"ENVMAP_TYPE_CUBE",[pQ]:"ENVMAP_TYPE_CUBE_UV"};function Pq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Cq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var Iq={[f7]:"ENVMAP_MODE_REFRACTION"};function zq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Iq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Aq={[LH]:"ENVMAP_BLENDING_MULTIPLY",[VH]:"ENVMAP_BLENDING_MIX",[DH]:"ENVMAP_BLENDING_ADD"};function _q(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return Aq[J.combine]||"ENVMAP_BLENDING_NONE"}function Tq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function Sq(J,Q,$,Z){let K=J.getContext(),W=$.defines,Y=$.vertexShader,X=$.fragmentShader,H=kq($),U=Pq($),N=zq($),F=_q($),G=Tq($),E=Eq($),O=qq(W),B=K.createProgram(),R,q,M=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(R=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(X$).join(`
`),R.length>0)R+=`
`;if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(X$).join(`
`),q.length>0)q+=`
`}else R=[qU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(X$).join(`
`),q=[qU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+N:"",$.envMap?"#define "+F:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==N9?"#define TONE_MAPPING":"",$.toneMapping!==N9?qJ.tonemapping_pars_fragment:"",$.toneMapping!==N9?Gq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",qJ.colorspace_pars_fragment,Uq("linearToOutputTexel",$.outputColorSpace),Fq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(X$).join(`
`);if(Y=FY(Y),Y=GU(Y,$),Y=FU(Y,$),X=FY(X),X=GU(X,$),X=FU(X,$),Y=EU(Y),X=EU(X),$.isRawShaderMaterial!==!0)M=`#version 300 es
`,R=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,q=["#define varying in",$.glslVersion===SW?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===SW?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let P=M+R+Y,V=M+q+X,L=HU(K,K.VERTEX_SHADER,P),C=HU(K,K.FRAGMENT_SHADER,V);if(K.attachShader(B,L),K.attachShader(B,C),$.index0AttributeName!==void 0)K.bindAttribLocation(B,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(B,0,"position");K.linkProgram(B);function A(y){if(J.debug.checkShaderErrors){let u=K.getProgramInfoLog(B)||"",J0=K.getShaderInfoLog(L)||"",f=K.getShaderInfoLog(C)||"",v=u.trim(),b=J0.trim(),j=f.trim(),d=!0,h=!0;if(K.getProgramParameter(B,K.LINK_STATUS)===!1)if(d=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,B,L,C);else{let s=NU(K,L,"vertex"),K0=NU(K,C,"fragment");$J("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(B,K.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+v+`
`+s+`
`+K0)}else if(v!=="")r0("WebGLProgram: Program Info Log:",v);else if(b===""||j==="")h=!1;if(h)y.diagnostics={runnable:d,programLog:v,vertexShader:{log:b,prefix:R},fragmentShader:{log:j,prefix:q}}}K.deleteShader(L),K.deleteShader(C),D=new H$(K,B),I=Oq(K,B)}let D;this.getUniforms=function(){if(D===void 0)A(this);return D};let I;this.getAttributes=function(){if(I===void 0)A(this);return I};let c=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(c===!1)c=K.getProgramParameter(B,Wq);return c},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(B),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=Yq++,this.cacheKey=Q,this.usedTimes=1,this.program=B,this.vertexShader=L,this.fragmentShader=C,this}var wq=0;class _U{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new TU(J),Q.set(J,$);return $}}class TU{constructor(J){this.id=wq++,this.code=J,this.usedTimes=0}}function jq(J){return J===g7||J===qZ||J===OZ}function yq(J,Q,$,Z,K,W){let Y=new BZ,X=new _U,H=new Set,U=[],N=new Map,F=Z.logarithmicDepthBuffer,G=Z.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(D){if(H.add(D),D===0)return"uv";return`uv${D}`}function B(D,I,c,y,u,J0){let f=y.fog,v=u.geometry,b=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?y.environment:null,j=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,d=Q.get(D.envMap||b,j),h=!!d&&d.mapping===pQ?d.image.height:null,s=E[D.type];if(D.precision!==null){if(G=Z.getMaxPrecision(D.precision),G!==D.precision)r0("WebGLProgram.getParameters:",D.precision,"not supported, using",G,"instead.")}let K0=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,_0=K0!==void 0?K0.length:0,q0=0;if(v.morphAttributes.position!==void 0)q0=1;if(v.morphAttributes.normal!==void 0)q0=2;if(v.morphAttributes.color!==void 0)q0=3;let k0,d0,Z0,w;if(s){let cJ=y9[s];k0=cJ.vertexShader,d0=cJ.fragmentShader}else{k0=D.vertexShader,d0=D.fragmentShader;let cJ=X.getVertexShaderStage(D),jJ=X.getFragmentShaderStage(D);X.update(D,cJ,jJ),Z0=cJ.id,w=jJ.id}let m=J.getRenderTarget(),n=J.state.buffers.depth.getReversed(),$0=u.isInstancedMesh===!0,t=u.isBatchedMesh===!0,V0=!!D.map,R0=!!D.matcap,H0=!!d,w0=!!D.aoMap,n0=!!D.lightMap,GJ=!!D.bumpMap&&D.wireframe===!1,b0=!!D.normalMap,CJ=!!D.displacementMap,TJ=!!D.emissiveMap,xJ=!!D.metalnessMap,g=!!D.roughnessMap,iJ=D.anisotropy>0,XJ=D.clearcoat>0,OJ=D.dispersion>0,T=D.retroreflectivity>0,k=D.iridescence>0,x=D.sheen>0,e=D.transmission>0,O0=iJ&&!!D.anisotropyMap,C0=XJ&&!!D.clearcoatMap,T0=XJ&&!!D.clearcoatNormalMap,Y0=XJ&&!!D.clearcoatRoughnessMap,N0=k&&!!D.iridescenceMap,P0=k&&!!D.iridescenceThicknessMap,i0=x&&!!D.sheenColorMap,I0=x&&!!D.sheenRoughnessMap,B0=!!D.specularMap,e0=!!D.specularColorMap,t0=!!D.specularIntensityMap,PJ=e&&!!D.transmissionMap,l=e&&!!D.thicknessMap,S0=!!D.gradientMap,X0=!!D.alphaMap,A0=D.alphaTest>0,x0=!!D.alphaHash,L0=!!D.extensions,j0=N9;if(D.toneMapped){if(m===null||m.isXRRenderTarget===!0)j0=J.toneMapping}let KJ={shaderID:s,shaderType:D.type,shaderName:D.name,vertexShader:k0,fragmentShader:d0,defines:D.defines,customVertexShaderID:Z0,customFragmentShaderID:w,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:G,batching:t,batchingColor:t&&u._colorsTexture!==null,instancing:$0,instancingColor:$0&&u.instanceColor!==null,instancingMorph:$0&&u.morphTexture!==null,outputColorSpace:m===null?J.outputColorSpace:m.isXRRenderTarget===!0?m.texture.colorSpace:FJ.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:V0,matcap:R0,envMap:H0,envMapMode:H0&&d.mapping,envMapCubeUVHeight:h,aoMap:w0,lightMap:n0,bumpMap:GJ,normalMap:b0,displacementMap:CJ,emissiveMap:TJ,normalMapObjectSpace:b0&&D.normalMapType===AH,normalMapTangentSpace:b0&&D.normalMapType===_W,packedNormalMap:b0&&D.normalMapType===_W&&jq(D.normalMap.format),metalnessMap:xJ,roughnessMap:g,anisotropy:iJ,anisotropyMap:O0,clearcoat:XJ,clearcoatMap:C0,clearcoatNormalMap:T0,clearcoatRoughnessMap:Y0,dispersion:OJ,retroreflection:T,iridescence:k,iridescenceMap:N0,iridescenceThicknessMap:P0,sheen:x,sheenColorMap:i0,sheenRoughnessMap:I0,specularMap:B0,specularColorMap:e0,specularIntensityMap:t0,transmission:e,transmissionMap:PJ,thicknessMap:l,gradientMap:S0,opaque:D.transparent===!1&&D.blending===yQ&&D.alphaToCoverage===!1,alphaMap:X0,alphaTest:A0,alphaHash:x0,combine:D.combine,mapUv:V0&&O(D.map.channel),aoMapUv:w0&&O(D.aoMap.channel),lightMapUv:n0&&O(D.lightMap.channel),bumpMapUv:GJ&&O(D.bumpMap.channel),normalMapUv:b0&&O(D.normalMap.channel),displacementMapUv:CJ&&O(D.displacementMap.channel),emissiveMapUv:TJ&&O(D.emissiveMap.channel),metalnessMapUv:xJ&&O(D.metalnessMap.channel),roughnessMapUv:g&&O(D.roughnessMap.channel),anisotropyMapUv:O0&&O(D.anisotropyMap.channel),clearcoatMapUv:C0&&O(D.clearcoatMap.channel),clearcoatNormalMapUv:T0&&O(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y0&&O(D.clearcoatRoughnessMap.channel),iridescenceMapUv:N0&&O(D.iridescenceMap.channel),iridescenceThicknessMapUv:P0&&O(D.iridescenceThicknessMap.channel),sheenColorMapUv:i0&&O(D.sheenColorMap.channel),sheenRoughnessMapUv:I0&&O(D.sheenRoughnessMap.channel),specularMapUv:B0&&O(D.specularMap.channel),specularColorMapUv:e0&&O(D.specularColorMap.channel),specularIntensityMapUv:t0&&O(D.specularIntensityMap.channel),transmissionMapUv:PJ&&O(D.transmissionMap.channel),thicknessMapUv:l&&O(D.thicknessMap.channel),alphaMapUv:X0&&O(D.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(b0||iJ),vertexNormals:!!v.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:u.isPoints===!0&&!!v.attributes.uv&&(V0||X0),fog:!!f,useFog:D.fog===!0,fogExp2:!!f&&f.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||v.attributes.normal===void 0&&b0===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:n,skinning:u.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:_0,morphTextureStride:q0,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:J0.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&c.length>0,shadowMapType:J.shadowMap.type,toneMapping:j0,decodeVideoTexture:V0&&D.map.isVideoTexture===!0&&FJ.getTransfer(D.map.colorSpace)===uJ,decodeVideoTextureEmissive:TJ&&D.emissiveMap.isVideoTexture===!0&&FJ.getTransfer(D.emissiveMap.colorSpace)===uJ,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===oJ,flipSided:D.side===D8,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:L0&&D.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(L0&&D.extensions.multiDraw===!0||t)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return KJ.vertexUv1s=H.has(1),KJ.vertexUv2s=H.has(2),KJ.vertexUv3s=H.has(3),H.clear(),KJ}function R(D){let I=[];if(D.shaderID)I.push(D.shaderID);else I.push(D.customVertexShaderID),I.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let c in D.defines)I.push(c),I.push(D.defines[c]);if(D.isRawShaderMaterial===!1)q(I,D),M(I,D),I.push(J.outputColorSpace);return I.push(D.customProgramCacheKey),I.join()}function q(D,I){D.push(I.precision),D.push(I.outputColorSpace),D.push(I.envMapMode),D.push(I.envMapCubeUVHeight),D.push(I.mapUv),D.push(I.alphaMapUv),D.push(I.lightMapUv),D.push(I.aoMapUv),D.push(I.bumpMapUv),D.push(I.normalMapUv),D.push(I.displacementMapUv),D.push(I.emissiveMapUv),D.push(I.metalnessMapUv),D.push(I.roughnessMapUv),D.push(I.anisotropyMapUv),D.push(I.clearcoatMapUv),D.push(I.clearcoatNormalMapUv),D.push(I.clearcoatRoughnessMapUv),D.push(I.iridescenceMapUv),D.push(I.iridescenceThicknessMapUv),D.push(I.sheenColorMapUv),D.push(I.sheenRoughnessMapUv),D.push(I.specularMapUv),D.push(I.specularColorMapUv),D.push(I.specularIntensityMapUv),D.push(I.transmissionMapUv),D.push(I.thicknessMapUv),D.push(I.combine),D.push(I.fogExp2),D.push(I.sizeAttenuation),D.push(I.morphTargetsCount),D.push(I.morphAttributeCount),D.push(I.numSunLights),D.push(I.numDirLights),D.push(I.numPointLights),D.push(I.numSpotLights),D.push(I.numSpotLightMaps),D.push(I.numHemiLights),D.push(I.numRectAreaLights),D.push(I.numSunLightShadows),D.push(I.numDirLightShadows),D.push(I.numPointLightShadows),D.push(I.numSpotLightShadows),D.push(I.numSpotLightShadowsWithMaps),D.push(I.numLightProbes),D.push(I.shadowMapType),D.push(I.toneMapping),D.push(I.numClippingPlanes),D.push(I.numClipIntersection),D.push(I.depthPacking)}function M(D,I){if(Y.disableAll(),I.instancing)Y.enable(0);if(I.instancingColor)Y.enable(1);if(I.instancingMorph)Y.enable(2);if(I.matcap)Y.enable(3);if(I.envMap)Y.enable(4);if(I.normalMapObjectSpace)Y.enable(5);if(I.normalMapTangentSpace)Y.enable(6);if(I.clearcoat)Y.enable(7);if(I.iridescence)Y.enable(8);if(I.alphaTest)Y.enable(9);if(I.vertexColors)Y.enable(10);if(I.vertexAlphas)Y.enable(11);if(I.vertexUv1s)Y.enable(12);if(I.vertexUv2s)Y.enable(13);if(I.vertexUv3s)Y.enable(14);if(I.vertexTangents)Y.enable(15);if(I.anisotropy)Y.enable(16);if(I.alphaHash)Y.enable(17);if(I.batching)Y.enable(18);if(I.dispersion)Y.enable(19);if(I.retroreflection)Y.enable(24);if(I.batchingColor)Y.enable(20);if(I.gradientMap)Y.enable(21);if(I.packedNormalMap)Y.enable(22);if(I.vertexNormals)Y.enable(23);if(D.push(Y.mask),Y.disableAll(),I.fog)Y.enable(0);if(I.useFog)Y.enable(1);if(I.flatShading)Y.enable(2);if(I.logarithmicDepthBuffer)Y.enable(3);if(I.reversedDepthBuffer)Y.enable(4);if(I.skinning)Y.enable(5);if(I.morphTargets)Y.enable(6);if(I.morphNormals)Y.enable(7);if(I.morphColors)Y.enable(8);if(I.premultipliedAlpha)Y.enable(9);if(I.shadowMapEnabled)Y.enable(10);if(I.doubleSided)Y.enable(11);if(I.flipSided)Y.enable(12);if(I.useDepthPacking)Y.enable(13);if(I.dithering)Y.enable(14);if(I.transmission)Y.enable(15);if(I.sheen)Y.enable(16);if(I.opaque)Y.enable(17);if(I.pointsUvs)Y.enable(18);if(I.decodeVideoTexture)Y.enable(19);if(I.decodeVideoTextureEmissive)Y.enable(20);if(I.alphaToCoverage)Y.enable(21);if(I.numLightProbeGrids>0)Y.enable(22);if(I.hasPositionAttribute)Y.enable(23);D.push(Y.mask)}function P(D){let I=E[D.type],c;if(I){let y=y9[I];c=i9.clone(y.uniforms)}else c=D.uniforms;return c}function V(D,I){let c=N.get(I);if(c!==void 0)++c.usedTimes;else c=new Sq(J,I,D,K),U.push(c),N.set(I,c);return c}function L(D){if(--D.usedTimes===0){let I=U.indexOf(D);U[I]=U[U.length-1],U.pop(),N.delete(D.cacheKey),D.destroy()}}function C(D){X.remove(D)}function A(){X.dispose()}return{getParameters:B,getProgramCacheKey:R,getUniforms:P,acquireProgram:V,releaseProgram:L,releaseShaderCache:C,programs:U,dispose:A}}function vq(){let J=new WeakMap;function Q(Y){return J.has(Y)}function $(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function K(Y,X,H){J.get(Y)[X]=H}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function fq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function OU(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function RU(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function Y(G){let E=0;if(G.isInstancedMesh)E+=2;if(G.isSkinnedMesh)E+=1;return E}function X(G,E,O,B,R,q){let M=J[Q];if(M===void 0)M={id:G.id,object:G,geometry:E,material:O,materialVariant:Y(G),groupOrder:B,renderOrder:G.renderOrder,z:R,group:q},J[Q]=M;else M.id=G.id,M.object=G,M.geometry=E,M.material=O,M.materialVariant=Y(G),M.groupOrder=B,M.renderOrder=G.renderOrder,M.z=R,M.group=q;return Q++,M}function H(G,E,O,B,R,q,M){if(M.reversedDepth===!0)R=-R;let P=X(G,E,O,B,R,q);if(O.transmission>0)Z.push(P);else if(O.transparent===!0)K.push(P);else $.push(P)}function U(G,E,O,B,R,q){let M=X(G,E,O,B,R,q);if(O.transmission>0)Z.unshift(M);else if(O.transparent===!0)K.unshift(M);else $.unshift(M)}function N(G,E){if($.length>1)$.sort(G||fq);if(Z.length>1)Z.sort(E||OU);if(K.length>1)K.sort(E||OU)}function F(){for(let G=Q,E=J.length;G<E;G++){let O=J[G];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:H,unshift:U,finish:F,sort:N}}function bq(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),Y;if(W===void 0)Y=new RU,J.set(Z,[Y]);else if(K>=W.length)Y=new RU,W.push(Y);else Y=W[K];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function hq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new _,color:new f0};break;case"SpotLight":$={position:new _,direction:new _,color:new f0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new _,color:new f0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new _,skyColor:new f0,groundColor:new f0};break;case"RectAreaLight":$={color:new f0,position:new _,halfWidth:new _,halfHeight:new _};break}return J[Q.id]=$,$}}}function xq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var gq=0;function pq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function mq(J){let Q=new hq,$=xq(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new _);let K=new _,W=new QJ,Y=new QJ;function X(U){let N=0,F=0,G=0;for(let u=0;u<9;u++)Z.probe[u].set(0,0,0);let E=0,O=0,B=0,R=0,q=0,M=0,P=0,V=0,L=0,C=0,A=0,D=0,I=0,c=0;U.sort(pq);for(let u=0,J0=U.length;u<J0;u++){let f=U[u],v=f.color,b=f.intensity,j=f.distance,d=null;if(f.shadow&&f.shadow.map)if(f.shadow.map.texture.format===g7)d=f.shadow.map.texture;else d=f.shadow.map.depthTexture||f.shadow.map.texture;if(f.isAmbientLight)N+=v.r*b,F+=v.g*b,G+=v.b*b;else if(f.isLightProbe){for(let h=0;h<9;h++)Z.probe[h].addScaledVector(f.sh.coefficients[h],b);c++}else if(f.isSunLight){let h=Q.get(f);if(h.color.copy(f.color).multiplyScalar(f.intensity),f.castShadow){let s=f.shadow,K0=$.get(f);K0.shadowIntensity=s.intensity,K0.shadowBias=s.bias,K0.shadowNormalBias=s.normalBias,K0.shadowRadius=s.radius,K0.shadowMapSize.copy(s.mapSize).multiply(s.getFrameExtents()),Z.sunShadow[O]=K0,Z.sunShadowMap[O]=d;let _0=s.getViewportCount();for(let q0=0;q0<_0;q0++)Z.sunShadowMatrix[B+q0]=s.getMatrix(q0),Z.sunShadowCascade[B+q0]=s._cascadeData[q0];B+=_0,O++}Z.sun[E]=h,E++}else if(f.isDirectionalLight){let h=Q.get(f);if(h.color.copy(f.color).multiplyScalar(f.intensity),f.castShadow){let s=f.shadow,K0=$.get(f);K0.shadowIntensity=s.intensity,K0.shadowBias=s.bias,K0.shadowNormalBias=s.normalBias,K0.shadowRadius=s.radius,K0.shadowMapSize=s.mapSize,Z.directionalShadow[R]=K0,Z.directionalShadowMap[R]=d,Z.directionalShadowMatrix[R]=f.shadow.matrix,L++}Z.directional[R]=h,R++}else if(f.isSpotLight){let h=Q.get(f);h.position.setFromMatrixPosition(f.matrixWorld),h.color.copy(v).multiplyScalar(b),h.distance=j,h.coneCos=Math.cos(f.angle),h.penumbraCos=Math.cos(f.angle*(1-f.penumbra)),h.decay=f.decay,Z.spot[M]=h;let s=f.shadow;if(f.map){if(Z.spotLightMap[D]=f.map,D++,s.updateMatrices(f),f.castShadow)I++}if(Z.spotLightMatrix[M]=s.matrix,f.castShadow){let K0=$.get(f);K0.shadowIntensity=s.intensity,K0.shadowBias=s.bias,K0.shadowNormalBias=s.normalBias,K0.shadowRadius=s.radius,K0.shadowMapSize=s.mapSize,Z.spotShadow[M]=K0,Z.spotShadowMap[M]=d,A++}M++}else if(f.isRectAreaLight){let h=Q.get(f);h.color.copy(v).multiplyScalar(b),h.halfWidth.set(f.width*0.5,0,0),h.halfHeight.set(0,f.height*0.5,0),Z.rectArea[P]=h,P++}else if(f.isPointLight){let h=Q.get(f);if(h.color.copy(f.color).multiplyScalar(f.intensity),h.distance=f.distance,h.decay=f.decay,f.castShadow){let s=f.shadow,K0=$.get(f);K0.shadowIntensity=s.intensity,K0.shadowBias=s.bias,K0.shadowNormalBias=s.normalBias,K0.shadowRadius=s.radius,K0.shadowMapSize=s.mapSize,K0.shadowCameraNear=s.camera.near,K0.shadowCameraFar=s.camera.far,Z.pointShadow[q]=K0,Z.pointShadowMap[q]=d,Z.pointShadowMatrix[q]=f.shadow.matrix,C++}Z.point[q]=h,q++}else if(f.isHemisphereLight){let h=Q.get(f);h.skyColor.copy(f.color).multiplyScalar(b),h.groundColor.copy(f.groundColor).multiplyScalar(b),Z.hemi[V]=h,V++}}if(P>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=h0.LTC_FLOAT_1,Z.rectAreaLTC2=h0.LTC_FLOAT_2;else Z.rectAreaLTC1=h0.LTC_HALF_1,Z.rectAreaLTC2=h0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=F,Z.ambient[2]=G;let y=Z.hash;if(y.sunLength!==E||y.directionalLength!==R||y.pointLength!==q||y.spotLength!==M||y.rectAreaLength!==P||y.hemiLength!==V||y.numSunShadows!==O||y.numDirectionalShadows!==L||y.numPointShadows!==C||y.numSpotShadows!==A||y.numSpotMaps!==D||y.numLightProbes!==c)Z.sun.length=E,Z.directional.length=R,Z.spot.length=M,Z.rectArea.length=P,Z.point.length=q,Z.hemi.length=V,Z.sunShadow.length=O,Z.sunShadowMap.length=O,Z.sunShadowMatrix.length=B,Z.sunShadowCascade.length=B,Z.directionalShadow.length=L,Z.directionalShadowMap.length=L,Z.directionalShadowMatrix.length=L,Z.pointShadow.length=C,Z.pointShadowMap.length=C,Z.pointShadowMatrix.length=C,Z.spotShadow.length=A,Z.spotShadowMap.length=A,Z.spotLightMatrix.length=A+D-I,Z.spotLightMap.length=D,Z.numSpotLightShadowsWithMaps=I,Z.numLightProbes=c,y.sunLength=E,y.directionalLength=R,y.pointLength=q,y.spotLength=M,y.rectAreaLength=P,y.hemiLength=V,y.numSunShadows=O,y.numDirectionalShadows=L,y.numPointShadows=C,y.numSpotShadows=A,y.numSpotMaps=D,y.numLightProbes=c,Z.version=gq++}function H(U,N){let F=0,G=0,E=0,O=0,B=0,R=0,q=N.matrixWorldInverse;for(let M=0,P=U.length;M<P;M++){let V=U[M];if(V.isSunLight){let L=Z.sun[F];L.direction.setFromMatrixPosition(V.matrixWorld),L.direction.transformDirection(q),F++}else if(V.isDirectionalLight){let L=Z.directional[G];L.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(q),G++}else if(V.isSpotLight){let L=Z.spot[O];L.position.setFromMatrixPosition(V.matrixWorld),L.position.applyMatrix4(q),L.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(q),O++}else if(V.isRectAreaLight){let L=Z.rectArea[B];L.position.setFromMatrixPosition(V.matrixWorld),L.position.applyMatrix4(q),Y.identity(),W.copy(V.matrixWorld),W.premultiply(q),Y.extractRotation(W),L.halfWidth.set(V.width*0.5,0,0),L.halfHeight.set(0,V.height*0.5,0),L.halfWidth.applyMatrix4(Y),L.halfHeight.applyMatrix4(Y),B++}else if(V.isPointLight){let L=Z.point[E];L.position.setFromMatrixPosition(V.matrixWorld),L.position.applyMatrix4(q),E++}else if(V.isHemisphereLight){let L=Z.hemi[R];L.direction.setFromMatrixPosition(V.matrixWorld),L.direction.transformDirection(q),R++}}}return{setup:X,setupView:H,state:Z}}function LU(J){let Q=new mq(J),$=[],Z=[],K=[];function W(G){F.camera=G,$.length=0,Z.length=0,K.length=0}function Y(G){$.push(G)}function X(G){Z.push(G)}function H(G){K.push(G)}function U(){Q.setup($)}function N(G){Q.setupView($,G)}let F={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:U,setupLightsView:N,pushLight:Y,pushShadow:X,pushLightProbeGrid:H}}function lq(J){let Q=new WeakMap;function $(K,W=0){let Y=Q.get(K),X;if(Y===void 0)X=new LU(J),Q.set(K,[X]);else if(W>=Y.length)X=new LU(J),Y.push(X);else X=Y[W];return X}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var uq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dq=`uniform sampler2D shadow_pass;
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
}`,cq=[new _(1,0,0),new _(-1,0,0),new _(0,1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1)],nq=[new _(0,-1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1),new _(0,-1,0),new _(0,-1,0)],VU=new QJ,Y$=new _,NY=new _;function sq(J,Q,$){let Z=new iQ,K=new G0,W=new G0,Y=new lJ,X=new uW,H=new dW,U={},N=$.maxTextureSize,F={[G7]:D8,[D8]:G7,[oJ]:oJ},G=new tJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G0},radius:{value:4}},vertexShader:uq,fragmentShader:dq}),E=G.clone();E.defines.HORIZONTAL_PASS=1;let O=new vJ;O.setAttribute("position",new aJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new M0(O,G),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y7;let q=this.type;this.render=function(C,A,D){if(R.enabled===!1)return;if(R.autoUpdate===!1&&R.needsUpdate===!1)return;if(C.length===0)return;if(this.type===uX)r0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=y7;let I=J.getRenderTarget(),c=J.getActiveCubeFace(),y=J.getActiveMipmapLevel(),u=J.state;if(u.setBlending(i8),u.buffers.depth.getReversed()===!0)u.buffers.color.setClear(0,0,0,0);else u.buffers.color.setClear(1,1,1,1);u.buffers.depth.setTest(!0),u.setScissorTest(!1);let J0=q!==this.type;if(J0)A.traverse(function(f){if(f.material)if(Array.isArray(f.material))f.material.forEach((v)=>v.needsUpdate=!0);else f.material.needsUpdate=!0});for(let f=0,v=C.length;f<v;f++){let b=C[f],j=b.shadow;if(j===void 0){r0("WebGLShadowMap:",b,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;K.copy(j.mapSize);let d=j.getFrameExtents();if(K.multiply(d),W.copy(j.mapSize),K.x>N||K.y>N){if(K.x>N)W.x=Math.floor(N/d.x),K.x=W.x*d.x,j.mapSize.x=W.x;if(K.y>N)W.y=Math.floor(N/d.y),K.y=W.y*d.y,j.mapSize.y=W.y}let h=J.state.buffers.depth.getReversed();if(j.camera._reversedDepth=h,j.map===null||J0===!0){if(j.map!==null){if(j.map.depthTexture!==null)j.map.depthTexture.dispose(),j.map.depthTexture=null;j.map.dispose()}if(this.type===b6){if(b.isPointLight){r0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Q8(K.x,K.y,{format:g7,type:O8,minFilter:q8,magFilter:q8,generateMipmaps:!1}),j.map.texture.name=b.name+".shadowMap",j.map.depthTexture=new d7(K.x,K.y,n9),j.map.depthTexture.name=b.name+".shadowMapDepth",j.map.depthTexture.format=h7,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=G9,j.map.depthTexture.magFilter=G9}else{if(b.isPointLight)j.map=new EY(K.x),j.map.depthTexture=new bW(K.x,E7);else j.map=new Q8(K.x,K.y),j.map.depthTexture=new d7(K.x,K.y,E7);if(j.map.depthTexture.name=b.name+".shadowMap",j.map.depthTexture.format=h7,this.type===y7)j.map.depthTexture.compareFunction=h?VZ:LZ,j.map.depthTexture.minFilter=q8,j.map.depthTexture.magFilter=q8;else j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=G9,j.map.depthTexture.magFilter=G9}j.camera.updateProjectionMatrix()}if(j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==K.x||j.map.height!==K.y))j.map.setSize(K.x,K.y);let s=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();if(b.isPointLight!==!0)j.updateMatrices(b,D);for(let K0=0;K0<s;K0++){let _0=j.getCamera(K0);if(b.isPointLight){let{camera:q0,matrix:k0}=j,d0=b.distance||q0.far;if(d0!==q0.far)q0.far=d0,q0.updateProjectionMatrix();Y$.setFromMatrixPosition(b.matrixWorld),q0.position.copy(Y$),NY.copy(q0.position),NY.add(cq[K0]),q0.up.copy(nq[K0]),q0.lookAt(NY),q0.updateMatrixWorld(),k0.makeTranslation(-Y$.x,-Y$.y,-Y$.z),VU.multiplyMatrices(q0.projectionMatrix,q0.matrixWorldInverse),j._frustum.setFromProjectionMatrix(VU,q0.coordinateSystem,q0.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)J.setRenderTarget(j.map,K0),J.clear();else{if(K0===0)J.setRenderTarget(j.map),J.clear();let q0=j.getViewport(K0);Y.set(W.x*q0.x,W.y*q0.y,W.x*q0.z,W.y*q0.w),u.viewport(Y)}Z=j.getFrustum(K0),V(A,D,_0,b,this.type)}if(j.isPointLightShadow!==!0&&this.type===b6)M(j,D);j.needsUpdate=!1}q=this.type,R.needsUpdate=!1,J.setRenderTarget(I,c,y)};function M(C,A){let D=Q.update(B);if(G.defines.VSM_SAMPLES!==C.blurSamples)G.defines.VSM_SAMPLES=C.blurSamples,E.defines.VSM_SAMPLES=C.blurSamples,G.needsUpdate=!0,E.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new Q8(K.x,K.y,{format:g7,type:O8});else if(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)C.mapPass.setSize(C.map.width,C.map.height);G.uniforms.shadow_pass.value=C.map.depthTexture,G.uniforms.resolution.value.set(C.map.width,C.map.height),G.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(A,null,D,G,B,null),E.uniforms.shadow_pass.value=C.mapPass.texture,E.uniforms.resolution.value.set(C.map.width,C.map.height),E.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(A,null,D,E,B,null)}function P(C,A,D,I){let c=null,y=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(y!==void 0)c=y;else if(c=D.isPointLight===!0?H:X,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let u=c.uuid,J0=A.uuid,f=U[u];if(f===void 0)f={},U[u]=f;let v=f[J0];if(v===void 0)v=c.clone(),f[J0]=v,A.addEventListener("dispose",L);c=v}if(c.visible=A.visible,c.wireframe=A.wireframe,I===b6)c.side=A.shadowSide!==null?A.shadowSide:A.side;else c.side=A.shadowSide!==null?A.shadowSide:F[A.side];if(c.alphaMap=A.alphaMap,c.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,c.map=A.map,c.clipShadows=A.clipShadows,c.clippingPlanes=A.clippingPlanes,c.clipIntersection=A.clipIntersection,c.displacementMap=A.displacementMap,c.displacementScale=A.displacementScale,c.displacementBias=A.displacementBias,c.wireframeLinewidth=A.wireframeLinewidth,c.linewidth=A.linewidth,D.isPointLight===!0&&c.isMeshDistanceMaterial===!0){let u=J.properties.get(c);u.light=D}return c}function V(C,A,D,I,c){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&c===b6)&&(!C.frustumCulled||C.intersectsFrustum(Z))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);let J0=Q.update(C),f=C.material;if(Array.isArray(f)){let v=J0.groups;for(let b=0,j=v.length;b<j;b++){let d=v[b],h=f[d.materialIndex];if(h&&h.visible){let s=P(C,h,I,c);C.onBeforeShadow(J,C,A,D,J0,s,d),J.renderBufferDirect(D,null,J0,s,C,d),C.onAfterShadow(J,C,A,D,J0,s,d)}}}else if(f.visible){let v=P(C,f,I,c);C.onBeforeShadow(J,C,A,D,J0,v,null),J.renderBufferDirect(D,null,J0,v,C,null),C.onAfterShadow(J,C,A,D,J0,v,null)}}}let u=C.children;for(let J0=0,f=u.length;J0<f;J0++)V(u[J0],A,D,I,c)}function L(C){C.target.removeEventListener("dispose",L);for(let D in U){let I=U[D],c=C.target.uuid;if(c in I)I[c].dispose(),delete I[c]}}}function iq(J,Q){function $(){let l=!1,S0=new lJ,X0=null,A0=new lJ(0,0,0,0);return{setMask:function(x0){if(X0!==x0&&!l)J.colorMask(x0,x0,x0,x0),X0=x0},setLocked:function(x0){l=x0},setClear:function(x0,L0,j0,KJ,cJ){if(cJ===!0)x0*=KJ,L0*=KJ,j0*=KJ;if(S0.set(x0,L0,j0,KJ),A0.equals(S0)===!1)J.clearColor(x0,L0,j0,KJ),A0.copy(S0)},reset:function(){l=!1,X0=null,A0.set(-1,0,0,0)}}}function Z(){let l=!1,S0=!1,X0=null,A0=null,x0=null;return{setReversed:function(L0){if(S0!==L0){let j0=Q.get("EXT_clip_control");if(L0)j0.clipControlEXT(j0.LOWER_LEFT_EXT,j0.ZERO_TO_ONE_EXT);else j0.clipControlEXT(j0.LOWER_LEFT_EXT,j0.NEGATIVE_ONE_TO_ONE_EXT);S0=L0;let KJ=x0;x0=null,this.setClear(KJ)}},getReversed:function(){return S0},setTest:function(L0){if(L0)m(J.DEPTH_TEST);else n(J.DEPTH_TEST)},setMask:function(L0){if(X0!==L0&&!l)J.depthMask(L0),X0=L0},setFunc:function(L0){if(S0)L0=hH[L0];if(A0!==L0){switch(L0){case NH:J.depthFunc(J.NEVER);break;case GH:J.depthFunc(J.ALWAYS);break;case FH:J.depthFunc(J.LESS);break;case uK:J.depthFunc(J.LEQUAL);break;case EH:J.depthFunc(J.EQUAL);break;case qH:J.depthFunc(J.GEQUAL);break;case OH:J.depthFunc(J.GREATER);break;case RH:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}A0=L0}},setLocked:function(L0){l=L0},setClear:function(L0){if(x0!==L0){if(x0=L0,S0)L0=1-L0;J.clearDepth(L0)}},reset:function(){l=!1,X0=null,A0=null,x0=null,S0=!1}}}function K(){let l=!1,S0=null,X0=null,A0=null,x0=null,L0=null,j0=null,KJ=null,cJ=null;return{setTest:function(jJ){if(!l)if(jJ)m(J.STENCIL_TEST);else n(J.STENCIL_TEST)},setMask:function(jJ){if(S0!==jJ&&!l)J.stencilMask(jJ),S0=jJ},setFunc:function(jJ,d8,$9){if(X0!==jJ||A0!==d8||x0!==$9)J.stencilFunc(jJ,d8,$9),X0=jJ,A0=d8,x0=$9},setOp:function(jJ,d8,$9){if(L0!==jJ||j0!==d8||KJ!==$9)J.stencilOp(jJ,d8,$9),L0=jJ,j0=d8,KJ=$9},setLocked:function(jJ){l=jJ},setClear:function(jJ){if(cJ!==jJ)J.clearStencil(jJ),cJ=jJ},reset:function(){l=!1,S0=null,X0=null,A0=null,x0=null,L0=null,j0=null,KJ=null,cJ=null}}}let W=new $,Y=new Z,X=new K,H=new WeakMap,U=new WeakMap,N={},F={},G={},E=new WeakMap,O=[],B=null,R=!1,q=null,M=null,P=null,V=null,L=null,C=null,A=null,D=new f0(0,0,0),I=0,c=!1,y=null,u=null,J0=null,f=null,v=null,b=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,d=0,h=J.getParameter(J.VERSION);if(h.indexOf("WebGL")!==-1)d=parseFloat(/^WebGL (\d)/.exec(h)[1]),j=d>=1;else if(h.indexOf("OpenGL ES")!==-1)d=parseFloat(/^OpenGL ES (\d)/.exec(h)[1]),j=d>=2;let s=null,K0={},_0=J.getParameter(J.SCISSOR_BOX),q0=J.getParameter(J.VIEWPORT),k0=new lJ().fromArray(_0),d0=new lJ().fromArray(q0);function Z0(l,S0,X0,A0){let x0=new Uint8Array(4),L0=J.createTexture();J.bindTexture(l,L0),J.texParameteri(l,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(l,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let j0=0;j0<X0;j0++)if(l===J.TEXTURE_3D||l===J.TEXTURE_2D_ARRAY)J.texImage3D(S0,0,J.RGBA,1,1,A0,0,J.RGBA,J.UNSIGNED_BYTE,x0);else J.texImage2D(S0+j0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,x0);return L0}let w={};w[J.TEXTURE_2D]=Z0(J.TEXTURE_2D,J.TEXTURE_2D,1),w[J.TEXTURE_CUBE_MAP]=Z0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[J.TEXTURE_2D_ARRAY]=Z0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),w[J.TEXTURE_3D]=Z0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),m(J.DEPTH_TEST),Y.setFunc(uK),GJ(!1),b0(pK),m(J.CULL_FACE),w0(i8);function m(l){if(N[l]!==!0)J.enable(l),N[l]=!0}function n(l){if(N[l]!==!1)J.disable(l),N[l]=!1}function $0(l,S0){if(G[l]!==S0){if(J.bindFramebuffer(l,S0),G[l]=S0,l===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=S0;if(l===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=S0;return!0}return!1}function t(l,S0){let X0=O,A0=!1;if(l){if(X0=E.get(S0),X0===void 0)X0=[],E.set(S0,X0);let x0=l.textures;if(X0.length!==x0.length||X0[0]!==J.COLOR_ATTACHMENT0){for(let L0=0,j0=x0.length;L0<j0;L0++)X0[L0]=J.COLOR_ATTACHMENT0+L0;X0.length=x0.length,A0=!0}}else if(X0[0]!==J.BACK)X0[0]=J.BACK,A0=!0;if(A0)J.drawBuffers(X0)}function V0(l){if(B!==l)return J.useProgram(l),B=l,!0;return!1}let R0={[h6]:J.FUNC_ADD,[cX]:J.FUNC_SUBTRACT,[nX]:J.FUNC_REVERSE_SUBTRACT};R0[sX]=J.MIN,R0[iX]=J.MAX;let H0={[oX]:J.ZERO,[aX]:J.ONE,[rX]:J.SRC_COLOR,[eX]:J.SRC_ALPHA,[WH]:J.SRC_ALPHA_SATURATE,[ZH]:J.DST_COLOR,[QH]:J.DST_ALPHA,[tX]:J.ONE_MINUS_SRC_COLOR,[JH]:J.ONE_MINUS_SRC_ALPHA,[KH]:J.ONE_MINUS_DST_COLOR,[$H]:J.ONE_MINUS_DST_ALPHA,[YH]:J.CONSTANT_COLOR,[XH]:J.ONE_MINUS_CONSTANT_COLOR,[HH]:J.CONSTANT_ALPHA,[UH]:J.ONE_MINUS_CONSTANT_ALPHA};function w0(l,S0,X0,A0,x0,L0,j0,KJ,cJ,jJ){if(l===i8){if(R===!0)n(J.BLEND),R=!1;return}if(R===!1)m(J.BLEND),R=!0;if(l!==dX){if(l!==q||jJ!==c){if(M!==h6||L!==h6)J.blendEquation(J.FUNC_ADD),M=h6,L=h6;if(jJ)switch(l){case yQ:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case z9:J.blendFunc(J.ONE,J.ONE);break;case mK:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case lK:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:$J("WebGLState: Invalid blending: ",l);break}else switch(l){case yQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case z9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case mK:$J("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lK:$J("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$J("WebGLState: Invalid blending: ",l);break}P=null,V=null,C=null,A=null,D.set(0,0,0),I=0,q=l,c=jJ}return}if(x0=x0||S0,L0=L0||X0,j0=j0||A0,S0!==M||x0!==L)J.blendEquationSeparate(R0[S0],R0[x0]),M=S0,L=x0;if(X0!==P||A0!==V||L0!==C||j0!==A)J.blendFuncSeparate(H0[X0],H0[A0],H0[L0],H0[j0]),P=X0,V=A0,C=L0,A=j0;if(KJ.equals(D)===!1||cJ!==I)J.blendColor(KJ.r,KJ.g,KJ.b,cJ),D.copy(KJ),I=cJ;q=l,c=!1}function n0(l,S0){l.side===oJ?n(J.CULL_FACE):m(J.CULL_FACE);let X0=l.side===D8;if(S0)X0=!X0;GJ(X0),l.blending===yQ&&l.transparent===!1?w0(i8):w0(l.blending,l.blendEquation,l.blendSrc,l.blendDst,l.blendEquationAlpha,l.blendSrcAlpha,l.blendDstAlpha,l.blendColor,l.blendAlpha,l.premultipliedAlpha),Y.setFunc(l.depthFunc),Y.setTest(l.depthTest),Y.setMask(l.depthWrite),W.setMask(l.colorWrite);let A0=l.stencilWrite;if(X.setTest(A0),A0)X.setMask(l.stencilWriteMask),X.setFunc(l.stencilFunc,l.stencilRef,l.stencilFuncMask),X.setOp(l.stencilFail,l.stencilZFail,l.stencilZPass);TJ(l.polygonOffset,l.polygonOffsetFactor,l.polygonOffsetUnits),l.alphaToCoverage===!0?m(J.SAMPLE_ALPHA_TO_COVERAGE):n(J.SAMPLE_ALPHA_TO_COVERAGE)}function GJ(l){if(y!==l){if(l)J.frontFace(J.CW);else J.frontFace(J.CCW);y=l}}function b0(l){if(l!==mX){if(m(J.CULL_FACE),l!==u)if(l===pK)J.cullFace(J.BACK);else if(l===lX)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else n(J.CULL_FACE);u=l}function CJ(l){if(l!==J0){if(j)J.lineWidth(l);J0=l}}function TJ(l,S0,X0){if(l){if(m(J.POLYGON_OFFSET_FILL),f!==S0||v!==X0){if(f=S0,v=X0,Y.getReversed())S0=-S0;J.polygonOffset(S0,X0)}}else n(J.POLYGON_OFFSET_FILL)}function xJ(l){if(l)m(J.SCISSOR_TEST);else n(J.SCISSOR_TEST)}function g(l){if(l===void 0)l=J.TEXTURE0+b-1;if(s!==l)J.activeTexture(l),s=l}function iJ(l,S0,X0){if(X0===void 0)if(s===null)X0=J.TEXTURE0+b-1;else X0=s;let A0=K0[X0];if(A0===void 0)A0={type:void 0,texture:void 0},K0[X0]=A0;if(A0.type!==l||A0.texture!==S0){if(s!==X0)J.activeTexture(X0),s=X0;J.bindTexture(l,S0||w[l]),A0.type=l,A0.texture=S0}}function XJ(){let l=K0[s];if(l!==void 0&&l.type!==void 0)J.bindTexture(l.type,null),l.type=void 0,l.texture=void 0}function OJ(){try{J.compressedTexImage2D(...arguments)}catch(l){$J("WebGLState:",l)}}function T(){try{J.compressedTexImage3D(...arguments)}catch(l){$J("WebGLState:",l)}}function k(){try{J.texSubImage2D(...arguments)}catch(l){$J("WebGLState:",l)}}function x(){try{J.texSubImage3D(...arguments)}catch(l){$J("WebGLState:",l)}}function e(){try{J.compressedTexSubImage2D(...arguments)}catch(l){$J("WebGLState:",l)}}function O0(){try{J.compressedTexSubImage3D(...arguments)}catch(l){$J("WebGLState:",l)}}function C0(){try{J.texStorage2D(...arguments)}catch(l){$J("WebGLState:",l)}}function T0(){try{J.texStorage3D(...arguments)}catch(l){$J("WebGLState:",l)}}function Y0(){try{J.texImage2D(...arguments)}catch(l){$J("WebGLState:",l)}}function N0(){try{J.texImage3D(...arguments)}catch(l){$J("WebGLState:",l)}}function P0(l){if(F[l]!==void 0)return F[l];else return J.getParameter(l)}function i0(l,S0){if(F[l]!==S0)J.pixelStorei(l,S0),F[l]=S0}function I0(l){if(k0.equals(l)===!1)J.scissor(l.x,l.y,l.z,l.w),k0.copy(l)}function B0(l){if(d0.equals(l)===!1)J.viewport(l.x,l.y,l.z,l.w),d0.copy(l)}function e0(l,S0){let X0=U.get(S0);if(X0===void 0)X0=new WeakMap,U.set(S0,X0);let A0=X0.get(l);if(A0===void 0)A0=J.getUniformBlockIndex(S0,l.name),X0.set(l,A0)}function t0(l,S0){let A0=U.get(S0).get(l);if(H.get(S0)!==A0)J.uniformBlockBinding(S0,A0,l.__bindingPointIndex),H.set(S0,A0)}function PJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},F={},s=null,K0={},G={},E=new WeakMap,O=[],B=null,R=!1,q=null,M=null,P=null,V=null,L=null,C=null,A=null,D=new f0(0,0,0),I=0,c=!1,y=null,u=null,J0=null,f=null,v=null,k0.set(0,0,J.canvas.width,J.canvas.height),d0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),Y.reset(),X.reset()}return{buffers:{color:W,depth:Y,stencil:X},enable:m,disable:n,bindFramebuffer:$0,drawBuffers:t,useProgram:V0,setBlending:w0,setMaterial:n0,setFlipSided:GJ,setCullFace:b0,setLineWidth:CJ,setPolygonOffset:TJ,setScissorTest:xJ,activeTexture:g,bindTexture:iJ,unbindTexture:XJ,compressedTexImage2D:OJ,compressedTexImage3D:T,texImage2D:Y0,texImage3D:N0,pixelStorei:i0,getParameter:P0,updateUBOMapping:e0,uniformBlockBinding:t0,texStorage2D:C0,texStorage3D:T0,texSubImage2D:k,texSubImage3D:x,compressedTexSubImage2D:e,compressedTexSubImage3D:O0,scissor:I0,viewport:B0,reset:PJ}}function oq(J,Q,$,Z,K,W,Y){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new G0,N=new WeakMap,F=new Set,G,E=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function B(T,k){return O?new OffscreenCanvas(T,k):j6("canvas")}function R(T,k,x){let e=1,O0=OJ(T);if(O0.width>x||O0.height>x)e=x/Math.max(O0.width,O0.height);if(e<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let C0=Math.floor(e*O0.width),T0=Math.floor(e*O0.height);if(G===void 0)G=B(C0,T0);let Y0=k?B(C0,T0):G;return Y0.width=C0,Y0.height=T0,Y0.getContext("2d").drawImage(T,0,0,C0,T0),r0("WebGLRenderer: Texture has been resized from ("+O0.width+"x"+O0.height+") to ("+C0+"x"+T0+")."),Y0}else{if("data"in T)r0("WebGLRenderer: Image in DataTexture is too big ("+O0.width+"x"+O0.height+").");return T}return T}function q(T){return T.generateMipmaps}function M(T){J.generateMipmap(T)}function P(T){if(T.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(T.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(T,k,x,e,O0,C0=!1){if(T!==null){if(J[T]!==void 0)return J[T];r0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let T0;if(e){if(T0=Q.get("EXT_texture_norm16"),!T0)r0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Y0=k;if(k===J.RED){if(x===J.FLOAT)Y0=J.R32F;if(x===J.HALF_FLOAT)Y0=J.R16F;if(x===J.UNSIGNED_BYTE)Y0=J.R8;if(x===J.UNSIGNED_SHORT&&T0)Y0=T0.R16_EXT;if(x===J.SHORT&&T0)Y0=T0.R16_SNORM_EXT}if(k===J.RED_INTEGER){if(x===J.UNSIGNED_BYTE)Y0=J.R8UI;if(x===J.UNSIGNED_SHORT)Y0=J.R16UI;if(x===J.UNSIGNED_INT)Y0=J.R32UI;if(x===J.BYTE)Y0=J.R8I;if(x===J.SHORT)Y0=J.R16I;if(x===J.INT)Y0=J.R32I}if(k===J.RG){if(x===J.FLOAT)Y0=J.RG32F;if(x===J.HALF_FLOAT)Y0=J.RG16F;if(x===J.UNSIGNED_BYTE)Y0=J.RG8;if(x===J.UNSIGNED_SHORT&&T0)Y0=T0.RG16_EXT;if(x===J.SHORT&&T0)Y0=T0.RG16_SNORM_EXT}if(k===J.RG_INTEGER){if(x===J.UNSIGNED_BYTE)Y0=J.RG8UI;if(x===J.UNSIGNED_SHORT)Y0=J.RG16UI;if(x===J.UNSIGNED_INT)Y0=J.RG32UI;if(x===J.BYTE)Y0=J.RG8I;if(x===J.SHORT)Y0=J.RG16I;if(x===J.INT)Y0=J.RG32I}if(k===J.RGB_INTEGER){if(x===J.UNSIGNED_BYTE)Y0=J.RGB8UI;if(x===J.UNSIGNED_SHORT)Y0=J.RGB16UI;if(x===J.UNSIGNED_INT)Y0=J.RGB32UI;if(x===J.BYTE)Y0=J.RGB8I;if(x===J.SHORT)Y0=J.RGB16I;if(x===J.INT)Y0=J.RGB32I}if(k===J.RGBA_INTEGER){if(x===J.UNSIGNED_BYTE)Y0=J.RGBA8UI;if(x===J.UNSIGNED_SHORT)Y0=J.RGBA16UI;if(x===J.UNSIGNED_INT)Y0=J.RGBA32UI;if(x===J.BYTE)Y0=J.RGBA8I;if(x===J.SHORT)Y0=J.RGBA16I;if(x===J.INT)Y0=J.RGBA32I}if(k===J.RGB){if(x===J.UNSIGNED_SHORT&&T0)Y0=T0.RGB16_EXT;if(x===J.SHORT&&T0)Y0=T0.RGB16_SNORM_EXT;if(x===J.UNSIGNED_INT_5_9_9_9_REV)Y0=J.RGB9_E5;if(x===J.UNSIGNED_INT_10F_11F_11F_REV)Y0=J.R11F_G11F_B10F}if(k===J.RGBA){let N0=C0?TW:FJ.getTransfer(O0);if(x===J.FLOAT)Y0=J.RGBA32F;if(x===J.HALF_FLOAT)Y0=J.RGBA16F;if(x===J.UNSIGNED_BYTE)Y0=N0===uJ?J.SRGB8_ALPHA8:J.RGBA8;if(x===J.UNSIGNED_SHORT&&T0)Y0=T0.RGBA16_EXT;if(x===J.SHORT&&T0)Y0=T0.RGBA16_SNORM_EXT;if(x===J.UNSIGNED_SHORT_4_4_4_4)Y0=J.RGBA4;if(x===J.UNSIGNED_SHORT_5_5_5_1)Y0=J.RGB5_A1}if(Y0===J.R16F||Y0===J.R32F||Y0===J.RG16F||Y0===J.RG32F||Y0===J.RGBA16F||Y0===J.RGBA32F)Q.get("EXT_color_buffer_float");return Y0}function L(T,k){let x;if(T){if(k===null||k===E7||k===m6)x=J.DEPTH24_STENCIL8;else if(k===n9)x=J.DEPTH32F_STENCIL8;else if(k===mQ)x=J.DEPTH24_STENCIL8,r0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===E7||k===m6)x=J.DEPTH_COMPONENT24;else if(k===n9)x=J.DEPTH_COMPONENT32F;else if(k===mQ)x=J.DEPTH_COMPONENT16;return x}function C(T,k){if(q(T)===!0||T.isFramebufferTexture&&T.minFilter!==G9&&T.minFilter!==q8)return Math.log2(Math.max(k.width,k.height))+1;else if(T.mipmaps!==void 0&&T.mipmaps.length>0)return T.mipmaps.length;else if(T.isCompressedTexture&&Array.isArray(T.image))return k.mipmaps.length;else return 1}function A(T){let k=T.target;if(k.removeEventListener("dispose",A),I(k),k.isVideoTexture)N.delete(k);if(k.isHTMLTexture)F.delete(k)}function D(T){let k=T.target;k.removeEventListener("dispose",D),y(k)}function I(T){let k=Z.get(T);if(k.__webglInit===void 0)return;let x=T.source,e=E.get(x);if(e){let O0=e[k.__cacheKey];if(O0.usedTimes--,O0.usedTimes===0)c(T);if(Object.keys(e).length===0)E.delete(x)}Z.remove(T)}function c(T){let k=Z.get(T);J.deleteTexture(k.__webglTexture);let x=T.source,e=E.get(x);delete e[k.__cacheKey],Y.memory.textures--}function y(T){let k=Z.get(T);if(T.depthTexture)T.depthTexture.dispose(),Z.remove(T.depthTexture);if(T.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(k.__webglFramebuffer[e]))for(let O0=0;O0<k.__webglFramebuffer[e].length;O0++)J.deleteFramebuffer(k.__webglFramebuffer[e][O0]);else J.deleteFramebuffer(k.__webglFramebuffer[e]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[e])}else{if(Array.isArray(k.__webglFramebuffer))for(let e=0;e<k.__webglFramebuffer.length;e++)J.deleteFramebuffer(k.__webglFramebuffer[e]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let e=0;e<k.__webglColorRenderbuffer.length;e++)if(k.__webglColorRenderbuffer[e])J.deleteRenderbuffer(k.__webglColorRenderbuffer[e])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let x=T.textures;for(let e=0,O0=x.length;e<O0;e++){let C0=Z.get(x[e]);if(C0.__webglTexture)J.deleteTexture(C0.__webglTexture),Y.memory.textures--;Z.remove(x[e])}Z.remove(T)}let u=0;function J0(){u=0}function f(){return u}function v(T){u=T}function b(){let T=u;if(T>=K.maxTextures)r0("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+K.maxTextures);return u+=1,T}function j(T){let k=[];return k.push(T.wrapS),k.push(T.wrapT),k.push(T.wrapR||0),k.push(T.magFilter),k.push(T.minFilter),k.push(T.anisotropy),k.push(T.internalFormat),k.push(T.format),k.push(T.type),k.push(T.generateMipmaps),k.push(T.premultiplyAlpha),k.push(T.flipY),k.push(T.unpackAlignment),k.push(T.colorSpace),k.join()}function d(T,k){let x=Z.get(T);if(T.isVideoTexture)iJ(T);if(T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&x.__version!==T.version){let e=T.image;if(e===null)r0("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)r0("WebGLRenderer: Texture marked for update but image is incomplete");else{n(x,T,k);return}}else if(T.isExternalTexture)x.__webglTexture=T.sourceTexture?T.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,x.__webglTexture,J.TEXTURE0+k)}function h(T,k){let x=Z.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&x.__version!==T.version){n(x,T,k);return}else if(T.isExternalTexture)x.__webglTexture=T.sourceTexture?T.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,x.__webglTexture,J.TEXTURE0+k)}function s(T,k){let x=Z.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&x.__version!==T.version){n(x,T,k);return}$.bindTexture(J.TEXTURE_3D,x.__webglTexture,J.TEXTURE0+k)}function K0(T,k){let x=Z.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&x.__version!==T.version){$0(x,T,k);return}$.bindTexture(J.TEXTURE_CUBE_MAP,x.__webglTexture,J.TEXTURE0+k)}let _0={[F7]:J.REPEAT,[g6]:J.CLAMP_TO_EDGE,[HZ]:J.MIRRORED_REPEAT},q0={[G9]:J.NEAREST,[UZ]:J.NEAREST_MIPMAP_NEAREST,[b7]:J.NEAREST_MIPMAP_LINEAR,[q8]:J.LINEAR,[p6]:J.LINEAR_MIPMAP_NEAREST,[A9]:J.LINEAR_MIPMAP_LINEAR},k0={[_H]:J.NEVER,[yH]:J.ALWAYS,[TH]:J.LESS,[LZ]:J.LEQUAL,[SH]:J.EQUAL,[VZ]:J.GEQUAL,[wH]:J.GREATER,[jH]:J.NOTEQUAL};function d0(T,k){if(k.type===n9&&Q.has("OES_texture_float_linear")===!1&&(k.magFilter===q8||k.magFilter===p6||k.magFilter===b7||k.magFilter===A9||k.minFilter===q8||k.minFilter===p6||k.minFilter===b7||k.minFilter===A9))r0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(T,J.TEXTURE_WRAP_S,_0[k.wrapS]),J.texParameteri(T,J.TEXTURE_WRAP_T,_0[k.wrapT]),T===J.TEXTURE_3D||T===J.TEXTURE_2D_ARRAY)J.texParameteri(T,J.TEXTURE_WRAP_R,_0[k.wrapR]);if(J.texParameteri(T,J.TEXTURE_MAG_FILTER,q0[k.magFilter]),J.texParameteri(T,J.TEXTURE_MIN_FILTER,q0[k.minFilter]),k.compareFunction)J.texParameteri(T,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(T,J.TEXTURE_COMPARE_FUNC,k0[k.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===G9)return;if(k.minFilter!==b7&&k.minFilter!==A9)return;if(k.type===n9&&Q.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||Z.get(k).__currentAnisotropy){let x=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(T,x.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,K.getMaxAnisotropy())),Z.get(k).__currentAnisotropy=k.anisotropy}}}function Z0(T,k){let x=!1;if(T.__webglInit===void 0)T.__webglInit=!0,k.addEventListener("dispose",A);let e=k.source,O0=E.get(e);if(O0===void 0)O0={},E.set(e,O0);let C0=j(k);if(C0!==T.__cacheKey){if(O0[C0]===void 0)O0[C0]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,x=!0;O0[C0].usedTimes++;let T0=O0[T.__cacheKey];if(T0!==void 0){if(O0[T.__cacheKey].usedTimes--,T0.usedTimes===0)c(k)}T.__cacheKey=C0,T.__webglTexture=O0[C0].texture}return x}function w(T,k,x){return Math.floor(Math.floor(T/x)/k)}function m(T,k,x,e){let C0=T.updateRanges;if(C0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k.width,k.height,x,e,k.data);else{C0.sort((i0,I0)=>i0.start-I0.start);let T0=0;for(let i0=1;i0<C0.length;i0++){let I0=C0[T0],B0=C0[i0],e0=I0.start+I0.count,t0=w(B0.start,k.width,4),PJ=w(I0.start,k.width,4);if(B0.start<=e0+1&&t0===PJ&&w(B0.start+B0.count-1,k.width,4)===t0)I0.count=Math.max(I0.count,B0.start+B0.count-I0.start);else++T0,C0[T0]=B0}C0.length=T0+1;let Y0=$.getParameter(J.UNPACK_ROW_LENGTH),N0=$.getParameter(J.UNPACK_SKIP_PIXELS),P0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,k.width);for(let i0=0,I0=C0.length;i0<I0;i0++){let B0=C0[i0],e0=Math.floor(B0.start/4),t0=Math.ceil(B0.count/4),PJ=e0%k.width,l=Math.floor(e0/k.width),S0=t0,X0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,PJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,l),$.texSubImage2D(J.TEXTURE_2D,0,PJ,l,S0,1,x,e,k.data)}T.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,Y0),$.pixelStorei(J.UNPACK_SKIP_PIXELS,N0),$.pixelStorei(J.UNPACK_SKIP_ROWS,P0)}}function n(T,k,x){let e=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)e=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)e=J.TEXTURE_3D;let O0=Z0(T,k),C0=k.source;$.bindTexture(e,T.__webglTexture,J.TEXTURE0+x);let T0=Z.get(C0);if(C0.version!==T0.__version||O0===!0){if($.activeTexture(J.TEXTURE0+x),(typeof ImageBitmap<"u"&&k.image instanceof ImageBitmap)===!1){let X0=FJ.getPrimaries(FJ.workingColorSpace),A0=k.colorSpace===p7?null:FJ.getPrimaries(k.colorSpace),x0=k.colorSpace===p7||X0===A0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,x0)}$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment);let N0=R(k.image,!1,K.maxTextureSize);N0=XJ(k,N0);let P0=W.convert(k.format,k.colorSpace),i0=W.convert(k.type),I0=V(k.internalFormat,P0,i0,k.normalized,k.colorSpace,k.isVideoTexture);d0(e,k);let B0,e0=k.mipmaps,t0=k.isVideoTexture!==!0,PJ=T0.__version===void 0||O0===!0,l=C0.dataReady,S0=C(k,N0);if(k.isDepthTexture){if(I0=L(k.format===x7,k.type),PJ)if(t0)$.texStorage2D(J.TEXTURE_2D,1,I0,N0.width,N0.height);else $.texImage2D(J.TEXTURE_2D,0,I0,N0.width,N0.height,0,P0,i0,null)}else if(k.isDataTexture)if(e0.length>0){if(t0&&PJ)$.texStorage2D(J.TEXTURE_2D,S0,I0,e0[0].width,e0[0].height);for(let X0=0,A0=e0.length;X0<A0;X0++)if(B0=e0[X0],t0){if(l)$.texSubImage2D(J.TEXTURE_2D,X0,0,0,B0.width,B0.height,P0,i0,B0.data)}else $.texImage2D(J.TEXTURE_2D,X0,I0,B0.width,B0.height,0,P0,i0,B0.data);k.generateMipmaps=!1}else if(t0){if(PJ)$.texStorage2D(J.TEXTURE_2D,S0,I0,N0.width,N0.height);if(l)m(k,N0,P0,i0)}else $.texImage2D(J.TEXTURE_2D,0,I0,N0.width,N0.height,0,P0,i0,N0.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(t0&&PJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,S0,I0,e0[0].width,e0[0].height,N0.depth);for(let X0=0,A0=e0.length;X0<A0;X0++)if(B0=e0[X0],k.format!==_9)if(P0!==null)if(t0){if(l)if(k.layerUpdates.size>0){let x0=KY(B0.width,B0.height,k.format,k.type);for(let L0 of k.layerUpdates){let j0=B0.data.subarray(L0*x0/B0.data.BYTES_PER_ELEMENT,(L0+1)*x0/B0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,X0,0,0,L0,B0.width,B0.height,1,P0,j0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,X0,0,0,0,B0.width,B0.height,N0.depth,P0,B0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,X0,I0,B0.width,B0.height,N0.depth,0,B0.data,0,0);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(t0){if(l)$.texSubImage3D(J.TEXTURE_2D_ARRAY,X0,0,0,0,B0.width,B0.height,N0.depth,P0,i0,B0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,X0,I0,B0.width,B0.height,N0.depth,0,P0,i0,B0.data);if(k.layerUpdates.size>0)k.clearLayerUpdates()}else{if(t0&&PJ)$.texStorage2D(J.TEXTURE_2D,S0,I0,e0[0].width,e0[0].height);for(let X0=0,A0=e0.length;X0<A0;X0++)if(B0=e0[X0],k.format!==_9)if(P0!==null)if(t0){if(l)$.compressedTexSubImage2D(J.TEXTURE_2D,X0,0,0,B0.width,B0.height,P0,B0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,X0,I0,B0.width,B0.height,0,B0.data);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(t0){if(l)$.texSubImage2D(J.TEXTURE_2D,X0,0,0,B0.width,B0.height,P0,i0,B0.data)}else $.texImage2D(J.TEXTURE_2D,X0,I0,B0.width,B0.height,0,P0,i0,B0.data)}else if(k.isDataArrayTexture)if(t0){if(PJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,S0,I0,N0.width,N0.height,N0.depth);if(l)if(k.layerUpdates.size>0){let X0=KY(N0.width,N0.height,k.format,k.type);for(let A0 of k.layerUpdates){let x0=N0.data.subarray(A0*X0/N0.data.BYTES_PER_ELEMENT,(A0+1)*X0/N0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,A0,N0.width,N0.height,1,P0,i0,x0)}k.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,N0.width,N0.height,N0.depth,P0,i0,N0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,I0,N0.width,N0.height,N0.depth,0,P0,i0,N0.data);else if(k.isData3DTexture)if(t0){if(PJ)$.texStorage3D(J.TEXTURE_3D,S0,I0,N0.width,N0.height,N0.depth);if(l)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,N0.width,N0.height,N0.depth,P0,i0,N0.data)}else $.texImage3D(J.TEXTURE_3D,0,I0,N0.width,N0.height,N0.depth,0,P0,i0,N0.data);else if(k.isFramebufferTexture){if(PJ)if(t0)$.texStorage2D(J.TEXTURE_2D,S0,I0,N0.width,N0.height);else{let{width:X0,height:A0}=N0;for(let x0=0;x0<S0;x0++)$.texImage2D(J.TEXTURE_2D,x0,I0,X0,A0,0,P0,i0,null),X0>>=1,A0>>=1}}else if(k.isHTMLTexture){if("texElementImage2D"in J){let X0=J.canvas;if(!X0.hasAttribute("layoutsubtree"))X0.setAttribute("layoutsubtree","true");if(N0.parentNode!==X0){X0.appendChild(N0),F.add(k),X0.onpaint=(A0)=>{let x0=A0.changedElements;for(let L0 of F)if(x0.includes(L0.image))L0.needsUpdate=!0},X0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,N0);else{let{RGBA:x0,RGBA:L0,UNSIGNED_BYTE:j0}=J;J.texElementImage2D(J.TEXTURE_2D,0,x0,L0,j0,N0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(e0.length>0){if(t0&&PJ){let X0=OJ(e0[0]);$.texStorage2D(J.TEXTURE_2D,S0,I0,X0.width,X0.height)}for(let X0=0,A0=e0.length;X0<A0;X0++)if(B0=e0[X0],t0){if(l)$.texSubImage2D(J.TEXTURE_2D,X0,0,0,P0,i0,B0)}else $.texImage2D(J.TEXTURE_2D,X0,I0,P0,i0,B0);k.generateMipmaps=!1}else if(t0){if(PJ){let X0=OJ(N0);$.texStorage2D(J.TEXTURE_2D,S0,I0,X0.width,X0.height)}if(l)$.texSubImage2D(J.TEXTURE_2D,0,0,0,P0,i0,N0)}else $.texImage2D(J.TEXTURE_2D,0,I0,P0,i0,N0);if(q(k))M(e);if(T0.__version=C0.version,k.onUpdate)k.onUpdate(k)}T.__version=k.version}function $0(T,k,x){if(k.image.length!==6)return;let e=Z0(T,k),O0=k.source;$.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+x);let C0=Z.get(O0);if(O0.version!==C0.__version||e===!0){$.activeTexture(J.TEXTURE0+x);let T0=FJ.getPrimaries(FJ.workingColorSpace),Y0=k.colorSpace===p7?null:FJ.getPrimaries(k.colorSpace),N0=k.colorSpace===p7||T0===Y0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,N0);let P0=k.isCompressedTexture||k.image[0].isCompressedTexture,i0=k.image[0]&&k.image[0].isDataTexture,I0=[];for(let L0=0;L0<6;L0++){if(!P0&&!i0)I0[L0]=R(k.image[L0],!0,K.maxCubemapSize);else I0[L0]=i0?k.image[L0].image:k.image[L0];I0[L0]=XJ(k,I0[L0])}let B0=I0[0],e0=W.convert(k.format,k.colorSpace),t0=W.convert(k.type),PJ=V(k.internalFormat,e0,t0,k.normalized,k.colorSpace),l=k.isVideoTexture!==!0,S0=C0.__version===void 0||e===!0,X0=O0.dataReady,A0=C(k,B0);d0(J.TEXTURE_CUBE_MAP,k);let x0;if(P0){if(l&&S0)$.texStorage2D(J.TEXTURE_CUBE_MAP,A0,PJ,B0.width,B0.height);for(let L0=0;L0<6;L0++){x0=I0[L0].mipmaps;for(let j0=0;j0<x0.length;j0++){let KJ=x0[j0];if(k.format!==_9)if(e0!==null)if(l){if(X0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,j0,0,0,KJ.width,KJ.height,e0,KJ.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,j0,PJ,KJ.width,KJ.height,0,KJ.data);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(l){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,j0,0,0,KJ.width,KJ.height,e0,t0,KJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,j0,PJ,KJ.width,KJ.height,0,e0,t0,KJ.data)}}}else{if(x0=k.mipmaps,l&&S0){if(x0.length>0)A0++;let L0=OJ(I0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,A0,PJ,L0.width,L0.height)}for(let L0=0;L0<6;L0++)if(i0){if(l){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,0,0,I0[L0].width,I0[L0].height,e0,t0,I0[L0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,PJ,I0[L0].width,I0[L0].height,0,e0,t0,I0[L0].data);for(let j0=0;j0<x0.length;j0++){let cJ=x0[j0].image[L0].image;if(l){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,j0+1,0,0,cJ.width,cJ.height,e0,t0,cJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,j0+1,PJ,cJ.width,cJ.height,0,e0,t0,cJ.data)}}else{if(l){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,0,0,e0,t0,I0[L0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,PJ,e0,t0,I0[L0]);for(let j0=0;j0<x0.length;j0++){let KJ=x0[j0];if(l){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,j0+1,0,0,e0,t0,KJ.image[L0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,j0+1,PJ,e0,t0,KJ.image[L0])}}}if(q(k))M(J.TEXTURE_CUBE_MAP);if(C0.__version=O0.version,k.onUpdate)k.onUpdate(k)}T.__version=k.version}function t(T,k,x,e,O0,C0){let T0=W.convert(x.format,x.colorSpace),Y0=W.convert(x.type),N0=V(x.internalFormat,T0,Y0,x.normalized,x.colorSpace),P0=Z.get(k),i0=Z.get(x);if(i0.__renderTarget=k,!P0.__hasExternalTextures){let I0=Math.max(1,k.width>>C0),B0=Math.max(1,k.height>>C0);if(O0===J.TEXTURE_3D||O0===J.TEXTURE_2D_ARRAY)$.texImage3D(O0,C0,N0,I0,B0,k.depth,0,T0,Y0,null);else $.texImage2D(O0,C0,N0,I0,B0,0,T0,Y0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,T),g(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,e,O0,i0.__webglTexture,0,xJ(k));else if(O0===J.TEXTURE_2D||O0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&O0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,e,O0,i0.__webglTexture,C0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function V0(T,k,x){if(J.bindRenderbuffer(J.RENDERBUFFER,T),k.depthBuffer){let e=k.depthTexture,O0=e&&e.isDepthTexture?e.type:null,C0=L(k.stencilBuffer,O0),T0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(g(k))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,xJ(k),C0,k.width,k.height);else if(x)J.renderbufferStorageMultisample(J.RENDERBUFFER,xJ(k),C0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,C0,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,T0,J.RENDERBUFFER,T)}else{let e=k.textures;for(let O0=0;O0<e.length;O0++){let C0=e[O0],T0=W.convert(C0.format,C0.colorSpace),Y0=W.convert(C0.type),N0=V(C0.internalFormat,T0,Y0,C0.normalized,C0.colorSpace);if(g(k))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,xJ(k),N0,k.width,k.height);else if(x)J.renderbufferStorageMultisample(J.RENDERBUFFER,xJ(k),N0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,N0,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function R0(T,k,x){let e=k.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,T),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let O0=Z.get(k.depthTexture);if(O0.__renderTarget=k,!O0.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;if(e){if(O0.__webglInit===void 0)O0.__webglInit=!0,k.depthTexture.addEventListener("dispose",A);if(O0.__webglTexture===void 0){O0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,O0.__webglTexture),d0(J.TEXTURE_CUBE_MAP,k.depthTexture);let P0=W.convert(k.depthTexture.format),i0=W.convert(k.depthTexture.type),I0;if(k.depthTexture.format===h7)I0=J.DEPTH_COMPONENT24;else if(k.depthTexture.format===x7)I0=J.DEPTH24_STENCIL8;for(let B0=0;B0<6;B0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,0,I0,k.width,k.height,0,P0,i0,null)}}else d(k.depthTexture,0);let C0=O0.__webglTexture,T0=xJ(k),Y0=e?J.TEXTURE_CUBE_MAP_POSITIVE_X+x:J.TEXTURE_2D,N0=k.depthTexture.format===x7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(k.depthTexture.format===h7)if(g(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,N0,Y0,C0,0,T0);else J.framebufferTexture2D(J.FRAMEBUFFER,N0,Y0,C0,0);else if(k.depthTexture.format===x7)if(g(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,N0,Y0,C0,0,T0);else J.framebufferTexture2D(J.FRAMEBUFFER,N0,Y0,C0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function H0(T){let k=Z.get(T),x=T.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==T.depthTexture){let e=T.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(e){let O0=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,e.removeEventListener("dispose",O0)};e.addEventListener("dispose",O0),k.__depthDisposeCallback=O0}k.__boundDepthTexture=e}if(T.depthTexture&&!k.__autoAllocateDepthBuffer)if(x)for(let e=0;e<6;e++)R0(k.__webglFramebuffer[e],T,e);else{let e=T.texture.mipmaps;if(e&&e.length>0)R0(k.__webglFramebuffer[0],T,0);else R0(k.__webglFramebuffer,T,0)}else if(x){k.__webglDepthbuffer=[];for(let e=0;e<6;e++)if($.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[e]),k.__webglDepthbuffer[e]===void 0)k.__webglDepthbuffer[e]=J.createRenderbuffer(),V0(k.__webglDepthbuffer[e],T,!1);else{let O0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,C0=k.__webglDepthbuffer[e];J.bindRenderbuffer(J.RENDERBUFFER,C0),J.framebufferRenderbuffer(J.FRAMEBUFFER,O0,J.RENDERBUFFER,C0)}}else{let e=T.texture.mipmaps;if(e&&e.length>0)$.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer);if(k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),V0(k.__webglDepthbuffer,T,!1);else{let O0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,C0=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,C0),J.framebufferRenderbuffer(J.FRAMEBUFFER,O0,J.RENDERBUFFER,C0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function w0(T,k,x){let e=Z.get(T);if(k!==void 0)t(e.__webglFramebuffer,T,T.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(x!==void 0)H0(T)}function n0(T){let k=T.texture,x=Z.get(T),e=Z.get(k);T.addEventListener("dispose",D);let O0=T.textures,C0=T.isWebGLCubeRenderTarget===!0,T0=O0.length>1;if(!T0){if(e.__webglTexture===void 0)e.__webglTexture=J.createTexture();e.__version=k.version,Y.memory.textures++}if(C0){x.__webglFramebuffer=[];for(let Y0=0;Y0<6;Y0++)if(k.mipmaps&&k.mipmaps.length>0){x.__webglFramebuffer[Y0]=[];for(let N0=0;N0<k.mipmaps.length;N0++)x.__webglFramebuffer[Y0][N0]=J.createFramebuffer()}else x.__webglFramebuffer[Y0]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){x.__webglFramebuffer=[];for(let Y0=0;Y0<k.mipmaps.length;Y0++)x.__webglFramebuffer[Y0]=J.createFramebuffer()}else x.__webglFramebuffer=J.createFramebuffer();if(T0)for(let Y0=0,N0=O0.length;Y0<N0;Y0++){let P0=Z.get(O0[Y0]);if(P0.__webglTexture===void 0)P0.__webglTexture=J.createTexture(),Y.memory.textures++}if(T.samples>0&&g(T)===!1){x.__webglMultisampledFramebuffer=J.createFramebuffer(),x.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,x.__webglMultisampledFramebuffer);for(let Y0=0;Y0<O0.length;Y0++){let N0=O0[Y0];x.__webglColorRenderbuffer[Y0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,x.__webglColorRenderbuffer[Y0]);let P0=W.convert(N0.format,N0.colorSpace),i0=W.convert(N0.type),I0=V(N0.internalFormat,P0,i0,N0.normalized,N0.colorSpace,T.isXRRenderTarget===!0),B0=xJ(T);J.renderbufferStorageMultisample(J.RENDERBUFFER,B0,I0,T.width,T.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.RENDERBUFFER,x.__webglColorRenderbuffer[Y0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),T.depthBuffer)x.__webglDepthRenderbuffer=J.createRenderbuffer(),V0(x.__webglDepthRenderbuffer,T,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(C0){$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),d0(J.TEXTURE_CUBE_MAP,k);for(let Y0=0;Y0<6;Y0++)if(k.mipmaps&&k.mipmaps.length>0)for(let N0=0;N0<k.mipmaps.length;N0++)t(x.__webglFramebuffer[Y0][N0],T,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,N0);else t(x.__webglFramebuffer[Y0],T,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0);if(q(k))M(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(T0){for(let Y0=0,N0=O0.length;Y0<N0;Y0++){let P0=O0[Y0],i0=Z.get(P0),I0=J.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)I0=T.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(I0,i0.__webglTexture),d0(I0,P0),t(x.__webglFramebuffer,T,P0,J.COLOR_ATTACHMENT0+Y0,I0,0),q(P0))M(I0)}$.unbindTexture()}else{let Y0=J.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)Y0=T.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(Y0,e.__webglTexture),d0(Y0,k),k.mipmaps&&k.mipmaps.length>0)for(let N0=0;N0<k.mipmaps.length;N0++)t(x.__webglFramebuffer[N0],T,k,J.COLOR_ATTACHMENT0,Y0,N0);else t(x.__webglFramebuffer,T,k,J.COLOR_ATTACHMENT0,Y0,0);if(q(k))M(Y0);$.unbindTexture()}if(T.depthBuffer)H0(T)}function GJ(T){let k=T.textures;for(let x=0,e=k.length;x<e;x++){let O0=k[x];if(q(O0)){let C0=P(T),T0=Z.get(O0).__webglTexture;$.bindTexture(C0,T0),M(C0),$.unbindTexture()}}}let b0=[],CJ=[];function TJ(T){if(T.samples>0){if(g(T)===!1){let{textures:k,width:x,height:e}=T,O0=J.COLOR_BUFFER_BIT,C0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,T0=Z.get(T),Y0=k.length>1;if(Y0)for(let P0=0;P0<k.length;P0++)$.bindFramebuffer(J.FRAMEBUFFER,T0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,T0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,T0.__webglMultisampledFramebuffer);let N0=T.texture.mipmaps;if(N0&&N0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,T0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,T0.__webglFramebuffer);for(let P0=0;P0<k.length;P0++){if(T.resolveDepthBuffer){if(T.depthBuffer)O0|=J.DEPTH_BUFFER_BIT;if(T.stencilBuffer&&T.resolveStencilBuffer)O0|=J.STENCIL_BUFFER_BIT}if(Y0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,T0.__webglColorRenderbuffer[P0]);let i0=Z.get(k[P0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,i0,0)}if(J.blitFramebuffer(0,0,x,e,0,0,x,e,O0,J.NEAREST),H===!0){if(b0.length=0,CJ.length=0,b0.push(J.COLOR_ATTACHMENT0+P0),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1)b0.push(C0),CJ.push(C0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,CJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,b0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),Y0)for(let P0=0;P0<k.length;P0++){$.bindFramebuffer(J.FRAMEBUFFER,T0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.RENDERBUFFER,T0.__webglColorRenderbuffer[P0]);let i0=Z.get(k[P0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,T0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.TEXTURE_2D,i0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,T0.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&H){let k=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function xJ(T){return Math.min(K.maxSamples,T.samples)}function g(T){let k=Z.get(T);return T.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function iJ(T){let k=Y.render.frame;if(N.get(T)!==k)N.set(T,k),T.update()}function XJ(T,k){let{colorSpace:x,format:e,type:O0}=T;if(T.isCompressedTexture===!0||T.isVideoTexture===!0)return k;if(x!==g8&&x!==p7)if(FJ.getTransfer(x)===uJ){if(e!==_9||O0!==F9)r0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else $J("WebGLTextures: Unsupported texture color space:",x);return k}function OJ(T){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement)U.width=T.naturalWidth||T.width,U.height=T.naturalHeight||T.height;else if(typeof VideoFrame<"u"&&T instanceof VideoFrame)U.width=T.displayWidth,U.height=T.displayHeight;else U.width=T.width,U.height=T.height;return U}this.allocateTextureUnit=b,this.resetTextureUnits=J0,this.getTextureUnits=f,this.setTextureUnits=v,this.setTexture2D=d,this.setTexture2DArray=h,this.setTexture3D=s,this.setTextureCube=K0,this.rebindTextures=w0,this.setupRenderTarget=n0,this.updateRenderTargetMipmap=GJ,this.updateMultisampleRenderTarget=TJ,this.setupDepthRenderbuffer=H0,this.setupFrameBufferTexture=t,this.useMultisampledRTT=g,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function aq(J,Q){function $(Z,K=p7){let W,Y=FJ.getTransfer(K);if(Z===F9)return J.UNSIGNED_BYTE;if(Z===cK)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===nK)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===kH)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===CH)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===BH)return J.BYTE;if(Z===MH)return J.SHORT;if(Z===mQ)return J.UNSIGNED_SHORT;if(Z===dK)return J.INT;if(Z===E7)return J.UNSIGNED_INT;if(Z===n9)return J.FLOAT;if(Z===O8)return J.HALF_FLOAT;if(Z===PH)return J.ALPHA;if(Z===IH)return J.RGB;if(Z===_9)return J.RGBA;if(Z===h7)return J.DEPTH_COMPONENT;if(Z===x7)return J.DEPTH_STENCIL;if(Z===zH)return J.RED;if(Z===sK)return J.RED_INTEGER;if(Z===g7)return J.RG;if(Z===iK)return J.RG_INTEGER;if(Z===oK)return J.RGBA_INTEGER;if(Z===NZ||Z===GZ||Z===FZ||Z===EZ)if(Y===uJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===NZ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===GZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===FZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===EZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===NZ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===GZ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===FZ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===EZ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===aK||Z===rK||Z===tK||Z===eK)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===aK)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===rK)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===tK)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===eK)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===JW||Z===QW||Z===$W||Z===ZW||Z===KW||Z===qZ||Z===WW)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===JW||Z===QW)return Y===uJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===$W)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===ZW)return W.COMPRESSED_R11_EAC;if(Z===KW)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===qZ)return W.COMPRESSED_RG11_EAC;if(Z===WW)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===YW||Z===XW||Z===HW||Z===UW||Z===NW||Z===GW||Z===FW||Z===EW||Z===qW||Z===OW||Z===RW||Z===LW||Z===VW||Z===DW)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===YW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===XW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===HW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===UW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===NW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===GW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===FW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===EW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===qW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===OW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===RW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===LW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===VW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===DW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===BW||Z===MW||Z===kW)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===BW)return Y===uJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===MW)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===kW)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===CW||Z===PW||Z===OZ||Z===IW)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===CW)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===PW)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===OZ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===IW)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===m6)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var rq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tq=`
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

}`;class SU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new AZ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new tJ({vertexShader:rq,fragmentShader:tq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new M0(new EJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wU extends E9{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,Y="local-floor",X=1,H=null,U=null,N=null,F=null,G=null,E=null,O=typeof XRWebGLBinding<"u",B=new SU,R={},q=Q.getContextAttributes(),M=null,P=null,V=[],L=[],C=new G0,A=null,D=null,I=new H8;I.viewport=new lJ;let c=new H8;c.viewport=new lJ;let y=[I,c],u=new tW,J0=null,f=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z0){let w=V[Z0];if(w===void 0)w=new dQ,V[Z0]=w;return w.getTargetRaySpace()},this.getControllerGrip=function(Z0){let w=V[Z0];if(w===void 0)w=new dQ,V[Z0]=w;return w.getGripSpace()},this.getHand=function(Z0){let w=V[Z0];if(w===void 0)w=new dQ,V[Z0]=w;return w.getHandSpace()};function v(Z0){let w=L.indexOf(Z0.inputSource);if(w===-1)return;let m=V[w];if(m!==void 0)m.update(Z0.inputSource,Z0.frame,H||W),m.dispatchEvent({type:Z0.type,data:Z0.inputSource})}function b(){Z.removeEventListener("select",v),Z.removeEventListener("selectstart",v),Z.removeEventListener("selectend",v),Z.removeEventListener("squeeze",v),Z.removeEventListener("squeezestart",v),Z.removeEventListener("squeezeend",v),Z.removeEventListener("end",b),Z.removeEventListener("inputsourceschange",j);for(let Z0=0;Z0<V.length;Z0++){let w=L[Z0];if(w===null)continue;L[Z0]=null,V[Z0].disconnect(w)}J0=null,f=null,B.reset();for(let Z0 in R)delete R[Z0];if(J.setRenderTarget(M),G=null,F=null,N=null,Z=null,P=null,d0.stop(),$.isPresenting=!1,J.setPixelRatio(A),J.setSize(C.width,C.height,!1),D!==null){let Z0=D.camera;Z0.fov=D.fov,Z0.zoom=D.zoom,Z0.updateProjectionMatrix(),D=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z0){if(K=Z0,$.isPresenting===!0)r0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z0){if(Y=Z0,$.isPresenting===!0)r0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(Z0){H=Z0},this.getBaseLayer=function(){return F!==null?F:G},this.getBinding=function(){if(N===null&&O)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return E},this.getSession=function(){return Z},this.setSession=async function(Z0){if(Z=Z0,Z!==null){if(M=J.getRenderTarget(),Z.addEventListener("select",v),Z.addEventListener("selectstart",v),Z.addEventListener("selectend",v),Z.addEventListener("squeeze",v),Z.addEventListener("squeezestart",v),Z.addEventListener("squeezeend",v),Z.addEventListener("end",b),Z.addEventListener("inputsourceschange",j),q.xrCompatible!==!0)await Q.makeXRCompatible();if(A=J.getPixelRatio(),J.getSize(C),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let m={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:K};G=new XRWebGLLayer(Z,Q,m),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),P=new Q8(G.framebufferWidth,G.framebufferHeight,{format:_9,type:F9,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let m=null,n=null,$0=null;if(q.depth)$0=q.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,m=q.stencil?x7:h7,n=q.stencil?m6:E7;let t={colorFormat:Q.RGBA8,depthFormat:$0,scaleFactor:K};N=this.getBinding(),F=N.createProjectionLayer(t),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),P=new Q8(F.textureWidth,F.textureHeight,{format:_9,type:F9,depthTexture:new d7(F.textureWidth,F.textureHeight,n,void 0,void 0,void 0,void 0,void 0,void 0,m),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1,storeMultisampledDepthBuffer:F.ignoreDepthValues===!1,storeMultisampledStencilBuffer:F.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(X),H=null,W=await Z.requestReferenceSpace(Y),d0.setContext(Z),d0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function j(Z0){for(let w=0;w<Z0.removed.length;w++){let m=Z0.removed[w],n=L.indexOf(m);if(n>=0)L[n]=null,V[n].disconnect(m)}for(let w=0;w<Z0.added.length;w++){let m=Z0.added[w],n=L.indexOf(m);if(n===-1){for(let t=0;t<V.length;t++)if(t>=L.length){L.push(m),n=t;break}else if(L[t]===null){L[t]=m,n=t;break}if(n===-1)break}let $0=V[n];if($0)$0.connect(m)}}let d=new _,h=new _;function s(Z0,w,m){d.setFromMatrixPosition(w.matrixWorld),h.setFromMatrixPosition(m.matrixWorld);let n=d.distanceTo(h),$0=w.projectionMatrix.elements,t=m.projectionMatrix.elements,V0=$0[14]/($0[10]-1),R0=$0[14]/($0[10]+1),H0=($0[9]+1)/$0[5],w0=($0[9]-1)/$0[5],n0=($0[8]-1)/$0[0],GJ=(t[8]+1)/t[0],b0=V0*n0,CJ=V0*GJ,TJ=n/(-n0+GJ),xJ=TJ*-n0;if(w.matrixWorld.decompose(Z0.position,Z0.quaternion,Z0.scale),Z0.translateX(xJ),Z0.translateZ(TJ),Z0.matrixWorld.compose(Z0.position,Z0.quaternion,Z0.scale),Z0.matrixWorldInverse.copy(Z0.matrixWorld).invert(),$0[10]===-1)Z0.projectionMatrix.copy(w.projectionMatrix),Z0.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{let g=V0+TJ,iJ=R0+TJ,XJ=b0-xJ,OJ=CJ+(n-xJ),T=H0*R0/iJ*g,k=w0*R0/iJ*g;Z0.projectionMatrix.makePerspective(XJ,OJ,T,k,g,iJ),Z0.projectionMatrixInverse.copy(Z0.projectionMatrix).invert()}}function K0(Z0,w){if(w===null)Z0.matrixWorld.copy(Z0.matrix);else Z0.matrixWorld.multiplyMatrices(w.matrixWorld,Z0.matrix);Z0.matrixWorldInverse.copy(Z0.matrixWorld).invert()}this.updateCamera=function(Z0){if(Z===null)return;let{near:w,far:m}=Z0;if(B.texture!==null){if(B.depthNear>0)w=B.depthNear;if(B.depthFar>0)m=B.depthFar}if(u.near=c.near=I.near=w,u.far=c.far=I.far=m,J0!==u.near||f!==u.far)Z.updateRenderState({depthNear:u.near,depthFar:u.far}),J0=u.near,f=u.far;u.layers.mask=Z0.layers.mask|6,I.layers.mask=u.layers.mask&-5,c.layers.mask=u.layers.mask&-3;let n=Z0.parent,$0=u.cameras;K0(u,n);for(let t=0;t<$0.length;t++)K0($0[t],n);if($0.length===2)s(u,I,c);else u.projectionMatrix.copy(I.projectionMatrix);if(D===null&&Z0.isPerspectiveCamera)D={camera:Z0,fov:Z0.fov,zoom:Z0.zoom};_0(Z0,u,n)};function _0(Z0,w,m){if(m===null)Z0.matrix.copy(w.matrixWorld);else Z0.matrix.copy(m.matrixWorld),Z0.matrix.invert(),Z0.matrix.multiply(w.matrixWorld);if(Z0.matrix.decompose(Z0.position,Z0.quaternion,Z0.scale),Z0.updateMatrixWorld(!0),Z0.projectionMatrix.copy(w.projectionMatrix),Z0.projectionMatrixInverse.copy(w.projectionMatrixInverse),Z0.isPerspectiveCamera)Z0.fov=w7*2*Math.atan(1/Z0.projectionMatrix.elements[5]),Z0.zoom=1}this.getCamera=function(){return u},this.getFoveation=function(){if(F===null&&G===null)return;return X},this.setFoveation=function(Z0){if(X=Z0,F!==null)F.fixedFoveation=Z0;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=Z0},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(u)},this.getCameraTexture=function(Z0){return R[Z0]};let q0=null;function k0(Z0,w){if(U=w.getViewerPose(H||W),E=w,U!==null){let m=U.views;if(G!==null)J.setRenderTargetFramebuffer(P,G.framebuffer),J.setRenderTarget(P);let n=!1;if(m.length!==u.cameras.length)u.cameras.length=0,n=!0;for(let R0=0;R0<m.length;R0++){let H0=m[R0],w0=null;if(G!==null)w0=G.getViewport(H0);else{let GJ=N.getViewSubImage(F,H0);if(w0=GJ.viewport,R0===0)J.setRenderTargetTextures(P,GJ.colorTexture,GJ.depthStencilTexture),J.setRenderTarget(P)}let n0=y[R0];if(n0===void 0)n0=new H8,n0.layers.enable(R0),n0.viewport=new lJ,y[R0]=n0;if(n0.matrix.fromArray(H0.transform.matrix),n0.matrix.decompose(n0.position,n0.quaternion,n0.scale),n0.projectionMatrix.fromArray(H0.projectionMatrix),n0.projectionMatrixInverse.copy(n0.projectionMatrix).invert(),n0.viewport.set(w0.x,w0.y,w0.width,w0.height),R0===0)u.matrix.copy(n0.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale);if(n===!0)u.cameras.push(n0)}let $0=Z.enabledFeatures;if($0&&$0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&O){N=$.getBinding();let R0=N.getDepthInformation(m[0]);if(R0&&R0.isValid&&R0.texture)B.init(R0,Z.renderState)}if($0&&$0.includes("camera-access")&&O){J.state.unbindTexture(),N=$.getBinding();for(let R0=0;R0<m.length;R0++){let H0=m[R0].camera;if(H0){let w0=R[H0];if(!w0)w0=new AZ,R[H0]=w0;let n0=N.getCameraImage(H0);w0.sourceTexture=n0}}}}for(let m=0;m<V.length;m++){let n=L[m],$0=V[m];if(n!==null&&$0!==void 0)$0.update(n,w,H||W)}if(q0)q0(Z0,w);if(w.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:w});E=null}let d0=new DU;d0.setAnimationLoop(k0),this.setAnimationLoop=function(Z0){q0=Z0},this.dispose=function(){}}}var eq=new QJ,jU=new YJ;jU.set(-1,0,0,0,1,0,0,0,1);function JO(J,Q){function $(R,q){if(R.matrixAutoUpdate===!0)R.updateMatrix();q.value.copy(R.matrix)}function Z(R,q){if(q.color.getRGB(R.fogColor.value,lW(J)),q.isFog)R.fogNear.value=q.near,R.fogFar.value=q.far;else if(q.isFogExp2)R.fogDensity.value=q.density}function K(R,q,M,P,V){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)W(R,q);else if(q.isMeshLambertMaterial){if(W(R,q),q.envMap)R.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)W(R,q),F(R,q);else if(q.isMeshPhongMaterial){if(W(R,q),N(R,q),q.envMap)R.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(W(R,q),G(R,q),q.isMeshPhysicalMaterial)E(R,q,V)}else if(q.isMeshMatcapMaterial)W(R,q),O(R,q);else if(q.isMeshDepthMaterial)W(R,q);else if(q.isMeshDistanceMaterial)W(R,q),B(R,q);else if(q.isMeshNormalMaterial)W(R,q);else if(q.isLineBasicMaterial){if(Y(R,q),q.isLineDashedMaterial)X(R,q)}else if(q.isPointsMaterial)H(R,q,M,P);else if(q.isSpriteMaterial)U(R,q);else if(q.isShadowMaterial)R.color.value.copy(q.color),R.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function W(R,q){if(R.opacity.value=q.opacity,q.color)R.diffuse.value.copy(q.color);if(q.emissive)R.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)R.map.value=q.map,$(q.map,R.mapTransform);if(q.alphaMap)R.alphaMap.value=q.alphaMap,$(q.alphaMap,R.alphaMapTransform);if(q.bumpMap){if(R.bumpMap.value=q.bumpMap,$(q.bumpMap,R.bumpMapTransform),R.bumpScale.value=q.bumpScale,q.side===D8)R.bumpScale.value*=-1}if(q.normalMap){if(R.normalMap.value=q.normalMap,$(q.normalMap,R.normalMapTransform),R.normalScale.value.copy(q.normalScale),q.side===D8)R.normalScale.value.negate()}if(q.displacementMap)R.displacementMap.value=q.displacementMap,$(q.displacementMap,R.displacementMapTransform),R.displacementScale.value=q.displacementScale,R.displacementBias.value=q.displacementBias;if(q.emissiveMap)R.emissiveMap.value=q.emissiveMap,$(q.emissiveMap,R.emissiveMapTransform);if(q.specularMap)R.specularMap.value=q.specularMap,$(q.specularMap,R.specularMapTransform);if(q.alphaTest>0)R.alphaTest.value=q.alphaTest;let M=Q.get(q),P=M.envMap,V=M.envMapRotation;if(P){if(R.envMap.value=P,R.envMapRotation.value.setFromMatrix4(eq.makeRotationFromEuler(V)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1)R.envMapRotation.value.premultiply(jU);R.reflectivity.value=q.reflectivity,R.ior.value=q.ior,R.refractionRatio.value=q.refractionRatio}if(q.lightMap)R.lightMap.value=q.lightMap,R.lightMapIntensity.value=q.lightMapIntensity,$(q.lightMap,R.lightMapTransform);if(q.aoMap)R.aoMap.value=q.aoMap,R.aoMapIntensity.value=q.aoMapIntensity,$(q.aoMap,R.aoMapTransform)}function Y(R,q){if(R.diffuse.value.copy(q.color),R.opacity.value=q.opacity,q.map)R.map.value=q.map,$(q.map,R.mapTransform)}function X(R,q){R.dashSize.value=q.dashSize,R.totalSize.value=q.dashSize+q.gapSize,R.scale.value=q.scale}function H(R,q,M,P){if(R.diffuse.value.copy(q.color),R.opacity.value=q.opacity,R.size.value=q.size*M,R.scale.value=P*0.5,q.map)R.map.value=q.map,$(q.map,R.uvTransform);if(q.alphaMap)R.alphaMap.value=q.alphaMap,$(q.alphaMap,R.alphaMapTransform);if(q.alphaTest>0)R.alphaTest.value=q.alphaTest}function U(R,q){if(R.diffuse.value.copy(q.color),R.opacity.value=q.opacity,R.rotation.value=q.rotation,q.map)R.map.value=q.map,$(q.map,R.mapTransform);if(q.alphaMap)R.alphaMap.value=q.alphaMap,$(q.alphaMap,R.alphaMapTransform);if(q.alphaTest>0)R.alphaTest.value=q.alphaTest}function N(R,q){R.specular.value.copy(q.specular),R.shininess.value=Math.max(q.shininess,0.0001)}function F(R,q){if(q.gradientMap)R.gradientMap.value=q.gradientMap}function G(R,q){if(R.metalness.value=q.metalness,q.metalnessMap)R.metalnessMap.value=q.metalnessMap,$(q.metalnessMap,R.metalnessMapTransform);if(R.roughness.value=q.roughness,q.roughnessMap)R.roughnessMap.value=q.roughnessMap,$(q.roughnessMap,R.roughnessMapTransform);if(q.envMap)R.envMapIntensity.value=q.envMapIntensity}function E(R,q,M){if(R.ior.value=q.ior,q.sheen>0){if(R.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),R.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)R.sheenColorMap.value=q.sheenColorMap,$(q.sheenColorMap,R.sheenColorMapTransform);if(q.sheenRoughnessMap)R.sheenRoughnessMap.value=q.sheenRoughnessMap,$(q.sheenRoughnessMap,R.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(R.clearcoat.value=q.clearcoat,R.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)R.clearcoatMap.value=q.clearcoatMap,$(q.clearcoatMap,R.clearcoatMapTransform);if(q.clearcoatRoughnessMap)R.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,$(q.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(R.clearcoatNormalMap.value=q.clearcoatNormalMap,$(q.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===D8)R.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)R.dispersion.value=q.dispersion;if(q.retroreflectivity>0)R.retroreflectivity.value=q.retroreflectivity;if(q.iridescence>0){if(R.iridescence.value=q.iridescence,R.iridescenceIOR.value=q.iridescenceIOR,R.iridescenceThicknessMinimum.value=q.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=q.iridescenceThicknessRange[1],q.iridescenceMap)R.iridescenceMap.value=q.iridescenceMap,$(q.iridescenceMap,R.iridescenceMapTransform);if(q.iridescenceThicknessMap)R.iridescenceThicknessMap.value=q.iridescenceThicknessMap,$(q.iridescenceThicknessMap,R.iridescenceThicknessMapTransform)}if(q.transmission>0){if(R.transmission.value=q.transmission,R.transmissionSamplerMap.value=M.texture,R.transmissionSamplerSize.value.set(M.width,M.height),q.transmissionMap)R.transmissionMap.value=q.transmissionMap,$(q.transmissionMap,R.transmissionMapTransform);if(R.thickness.value=q.thickness,q.thicknessMap)R.thicknessMap.value=q.thicknessMap,$(q.thicknessMap,R.thicknessMapTransform);R.attenuationDistance.value=q.attenuationDistance,R.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(R.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)R.anisotropyMap.value=q.anisotropyMap,$(q.anisotropyMap,R.anisotropyMapTransform)}if(R.specularIntensity.value=q.specularIntensity,R.specularColor.value.copy(q.specularColor),q.specularColorMap)R.specularColorMap.value=q.specularColorMap,$(q.specularColorMap,R.specularColorMapTransform);if(q.specularIntensityMap)R.specularIntensityMap.value=q.specularIntensityMap,$(q.specularIntensityMap,R.specularIntensityMapTransform)}function O(R,q){if(q.matcap)R.matcap.value=q.matcap}function B(R,q){let M=Q.get(q).light;R.referencePosition.value.setFromMatrixPosition(M.matrixWorld),R.nearDistance.value=M.shadow.camera.near,R.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function QO(J,Q,$,Z){let K={},W={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,L){let C=L.program;Z.uniformBlockBinding(V,C)}function U(V,L){let C=K[V.id];if(C===void 0)R(V),C=N(V),K[V.id]=C,V.addEventListener("dispose",M);let A=L.program;Z.updateUBOMapping(V,A);let D=Q.render.frame;if(W[V.id]!==D)G(V),W[V.id]=D}function N(V){let L=F();V.__bindingPointIndex=L;let C=J.createBuffer(),A=V.__size,D=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,C),J.bufferData(J.UNIFORM_BUFFER,A,D),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,C),C}function F(){for(let V=0;V<X;V++)if(Y.indexOf(V)===-1)return Y.push(V),V;return $J("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(V){let L=K[V.id],C=V.uniforms,A=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let D=0,I=C.length;D<I;D++){let c=C[D];if(Array.isArray(c))for(let y=0,u=c.length;y<u;y++)E(c[y],D,y,A);else E(c,D,0,A)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(V,L,C,A){if(B(V,L,C,A)===!0){let{__offset:D,value:I}=V;if(Array.isArray(I)){let c=0;for(let y=0;y<I.length;y++){let u=I[y],J0=q(u);if(O(u,V.__data,c),typeof u!=="number"&&typeof u!=="boolean"&&!u.isMatrix3&&!ArrayBuffer.isView(u))c+=J0.storage/Float32Array.BYTES_PER_ELEMENT}}else O(I,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,D,V.__data)}}function O(V,L,C){if(typeof V==="number"||typeof V==="boolean")L[0]=V;else if(V.isMatrix3)L[0]=V.elements[0],L[1]=V.elements[1],L[2]=V.elements[2],L[3]=0,L[4]=V.elements[3],L[5]=V.elements[4],L[6]=V.elements[5],L[7]=0,L[8]=V.elements[6],L[9]=V.elements[7],L[10]=V.elements[8],L[11]=0;else if(ArrayBuffer.isView(V))L.set(new V.constructor(V.buffer,V.byteOffset,L.length));else V.toArray(L,C)}function B(V,L,C,A){let D=V.value,I=L+"_"+C;if(A[I]===void 0){if(typeof D==="number"||typeof D==="boolean")A[I]=D;else if(ArrayBuffer.isView(D))A[I]=D.slice();else A[I]=D.clone();return!0}else{let c=A[I];if(typeof D==="number"||typeof D==="boolean"){if(c!==D)return A[I]=D,!0}else if(ArrayBuffer.isView(D))return!0;else if(c.equals(D)===!1)return c.copy(D),!0}return!1}function R(V){let L=V.uniforms,C=0,A=16;for(let I=0,c=L.length;I<c;I++){let y=Array.isArray(L[I])?L[I]:[L[I]];for(let u=0,J0=y.length;u<J0;u++){let f=y[u],v=Array.isArray(f.value)?f.value:[f.value];for(let b=0,j=v.length;b<j;b++){let d=v[b],h=q(d),s=C%A,K0=s%h.boundary,_0=s+K0;if(C+=K0,_0!==0&&A-_0<h.storage)C+=A-_0;f.__data=new Float32Array(h.storage/Float32Array.BYTES_PER_ELEMENT),f.__offset=C,C+=h.storage}}}let D=C%A;if(D>0)C+=A-D;return V.__size=C,V.__cache={},this}function q(V){let L={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")L.boundary=4,L.storage=4;else if(V.isVector2)L.boundary=8,L.storage=8;else if(V.isVector3||V.isColor)L.boundary=16,L.storage=12;else if(V.isVector4)L.boundary=16,L.storage=16;else if(V.isMatrix3)L.boundary=48,L.storage=48;else if(V.isMatrix4)L.boundary=64,L.storage=64;else if(V.isTexture)r0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))L.boundary=16,L.storage=V.byteLength;else r0("WebGLRenderer: Unsupported uniform value type.",V);return L}function M(V){let L=V.target;L.removeEventListener("dispose",M);let C=Y.indexOf(L.__bindingPointIndex);Y.splice(C,1),J.deleteBuffer(K[L.id]),delete K[L.id],delete W[L.id]}function P(){for(let V in K)J.deleteBuffer(K[V]);Y=[],K={},W={}}return{bind:H,update:U,dispose:P}}var $O=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),j9=null;function ZO(){if(j9===null)j9=new nQ($O,16,16,g7,O8),j9.name="DFG_LUT",j9.minFilter=q8,j9.magFilter=q8,j9.wrapS=g6,j9.wrapT=g6,j9.generateMipmaps=!1,j9.needsUpdate=!0;return j9}class qY{constructor(J={}){let{canvas:Q=vH(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:F=!1,outputBufferType:G=F9}=J;this.isWebGLRenderer=!0;let E;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=$.getContextAttributes().alpha}else E=W;let O=G,B=new Set([oK,iK,sK]),R=new Set([F9,E7,mQ,m6,cK,nK]),q=new Uint32Array(4),M=new Int32Array(4),P=new _,V=null,L=null,C=[],A=[],D=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=N9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,c=!1,y=null,u=null,J0=null,f=null;this._outputColorSpace=J8;let v=0,b=0,j=null,d=-1,h=null,s=new lJ,K0=new lJ,_0=null,q0=new f0(0),k0=0,d0=Q.width,Z0=Q.height,w=1,m=null,n=null,$0=new lJ(0,0,d0,Z0),t=new lJ(0,0,d0,Z0),V0=!1,R0=new iQ,H0=!1,w0=!1,n0=new QJ,GJ=new _,b0=new lJ,CJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},TJ=!1;function xJ(){return j===null?w:1}let g=$;function iJ(z,p){return Q.getContext(z,p)}let XJ,OJ,T,k,x,e,O0,C0,T0,Y0,N0,P0,i0,I0,B0,e0,t0,PJ,l,S0,X0,A0,x0;try{let z={alpha:!0,depth:Z,stencil:K,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${pX}`);if(Q.addEventListener("webglcontextlost",KJ,!1),Q.addEventListener("webglcontextrestored",cJ,!1),Q.addEventListener("webglcontextcreationerror",jJ,!1),g===null){if(g=iJ("webgl2",z),g===null)if(iJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}L0()}catch(z){throw Q.removeEventListener("webglcontextlost",KJ,!1),Q.removeEventListener("webglcontextrestored",cJ,!1),Q.removeEventListener("webglcontextcreationerror",jJ,!1),$J("WebGLRenderer: "+z.message),z}function L0(){if(XJ=new N1(g),XJ.init(),X0=new aq(g,XJ),OJ=new J1(g,XJ,J,X0),T=new iq(g,XJ),OJ.reversedDepthBuffer&&F)T.buffers.depth.setReversed(!0);u=g.createFramebuffer(),J0=g.createFramebuffer(),f=g.createFramebuffer(),k=new E1(g),x=new vq,e=new oq(g,XJ,T,x,OJ,X0,k),O0=new U1(I),C0=new OG(g),A0=new tE(g,C0),T0=new G1(g,C0,k,A0),Y0=new O1(g,T0,C0,A0,k),PJ=new q1(g,OJ,e),B0=new Q1(x),N0=new yq(I,O0,XJ,OJ,A0,B0),P0=new JO(I,x),i0=new bq,I0=new lq(XJ),t0=new rE(I,O0,T,Y0,E,X),e0=new sq(I,Y0,OJ),x0=new QO(g,k,OJ,T),l=new eE(g,XJ,k),S0=new F1(g,XJ,k),k.programs=N0.programs,I.capabilities=OJ,I.extensions=XJ,I.properties=x,I.renderLists=i0,I.shadowMap=e0,I.state=T,I.info=k}if(O!==F9)D=new L1(O,Q.width,Q.height,Y,Z,K);let j0=new wU(I,g);this.xr=j0,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){let z=XJ.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=XJ.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return w},this.setPixelRatio=function(z){if(z===void 0)return;w=z,this.setSize(d0,Z0,!1)},this.getSize=function(z){return z.set(d0,Z0)},this.setSize=function(z,p,Q0=!0){if(j0.isPresenting){r0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(d0=z,Z0=p,Q.width=Math.floor(z*w),Q.height=Math.floor(p*w),Q0===!0)Q.style.width=z+"px",Q.style.height=p+"px";if(D!==null)D.setSize(Q.width,Q.height);this.setViewport(0,0,z,p)},this.getDrawingBufferSize=function(z){return z.set(d0*w,Z0*w).floor()},this.setDrawingBufferSize=function(z,p,Q0){d0=z,Z0=p,w=Q0,Q.width=Math.floor(z*Q0),Q.height=Math.floor(p*Q0),this.setViewport(0,0,z,p)},this.setEffects=function(z){if(O===F9){$J("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(z){for(let p=0;p<z.length;p++)if(z[p].isOutputPass===!0){r0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(z||[])},this.getCurrentViewport=function(z){return z.copy(s)},this.getViewport=function(z){return z.copy($0)},this.setViewport=function(z,p,Q0,r){if(z.isVector4)$0.set(z.x,z.y,z.z,z.w);else $0.set(z,p,Q0,r);T.viewport(s.copy($0).multiplyScalar(w).round())},this.getScissor=function(z){return z.copy(t)},this.setScissor=function(z,p,Q0,r){if(z.isVector4)t.set(z.x,z.y,z.z,z.w);else t.set(z,p,Q0,r);T.scissor(K0.copy(t).multiplyScalar(w).round())},this.getScissorTest=function(){return V0},this.setScissorTest=function(z){T.setScissorTest(V0=z)},this.setOpaqueSort=function(z){m=z},this.setTransparentSort=function(z){n=z},this.getClearColor=function(z){return z.copy(t0.getClearColor())},this.setClearColor=function(){t0.setClearColor(...arguments)},this.getClearAlpha=function(){return t0.getClearAlpha()},this.setClearAlpha=function(){t0.setClearAlpha(...arguments)},this.clear=function(z=!0,p=!0,Q0=!0){let r=0;if(z){let o=!1;if(j!==null){let y0=j.texture.format;o=B.has(y0)}if(o){let y0=j.texture.type,u0=R.has(y0),v0=t0.getClearColor(),l0=t0.getClearAlpha(),a0=v0.r,HJ=v0.g,RJ=v0.b;if(u0)q[0]=a0,q[1]=HJ,q[2]=RJ,q[3]=l0,g.clearBufferuiv(g.COLOR,0,q);else M[0]=a0,M[1]=HJ,M[2]=RJ,M[3]=l0,g.clearBufferiv(g.COLOR,0,M)}else r|=g.COLOR_BUFFER_BIT}if(p)r|=g.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Q0)r|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(r!==0)g.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(z){z.setRenderer(this),y=z},this.dispose=function(){Q.removeEventListener("webglcontextlost",KJ,!1),Q.removeEventListener("webglcontextrestored",cJ,!1),Q.removeEventListener("webglcontextcreationerror",jJ,!1),t0.dispose(),i0.dispose(),I0.dispose(),x.dispose(),O0.dispose(),Y0.dispose(),A0.dispose(),x0.dispose(),N0.dispose(),j0.dispose(),j0.removeEventListener("sessionstart",V8),j0.removeEventListener("sessionend",U6),B9.stop()};function KJ(z){z.preventDefault(),TQ("WebGLRenderer: Context Lost."),c=!0}function cJ(){TQ("WebGLRenderer: Context Restored."),c=!1;let z=k.autoReset,p=e0.enabled,Q0=e0.autoUpdate,r=e0.needsUpdate,o=e0.type;L0(),k.autoReset=z,e0.enabled=p,e0.autoUpdate=Q0,e0.needsUpdate=r,e0.type=o}function jJ(z){$J("WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function d8(z){let p=z.target;p.removeEventListener("dispose",d8),$9(p)}function $9(z){D$(z),x.remove(z)}function D$(z){let p=x.get(z).programs;if(p!==void 0){if(p.forEach(function(Q0){N0.releaseProgram(Q0)}),z.isShaderMaterial)N0.releaseShaderCache(z)}}this.renderBufferDirect=function(z,p,Q0,r,o,y0){if(p===null)p=CJ;let u0=o.isMesh&&o.matrixWorld.determinantAffine()<0,v0=KK(z,p,Q0,r,o);T.setMaterial(r,u0);let l0=Q0.index,a0=1;if(r.wireframe===!0){if(l0=T0.getWireframeAttribute(Q0),l0===void 0)return;a0=2}let HJ=Q0.drawRange,RJ=Q0.attributes.position,s0=HJ.start*a0,zJ=(HJ.start+HJ.count)*a0;if(y0!==null)s0=Math.max(s0,y0.start*a0),zJ=Math.min(zJ,(y0.start+y0.count)*a0);if(l0!==null)s0=Math.max(s0,0),zJ=Math.min(zJ,l0.count);else if(RJ!==void 0&&RJ!==null)s0=Math.max(s0,0),zJ=Math.min(zJ,RJ.count);let gJ=zJ-s0;if(gJ<0||gJ===1/0)return;A0.setup(o,r,v0,Q0,l0);let nJ,kJ=l;if(l0!==null)nJ=C0.get(l0),kJ=S0,kJ.setIndex(nJ);if(o.isMesh)if(r.wireframe===!0)T.setLineWidth(r.wireframeLinewidth*xJ()),kJ.setMode(g.LINES);else kJ.setMode(g.TRIANGLES);else if(o.isLine){let Y8=r.linewidth;if(Y8===void 0)Y8=1;if(T.setLineWidth(Y8*xJ()),o.isLineSegments)kJ.setMode(g.LINES);else if(o.isLineLoop)kJ.setMode(g.LINE_LOOP);else kJ.setMode(g.LINE_STRIP)}else if(o.isPoints)kJ.setMode(g.POINTS);else if(o.isSprite)kJ.setMode(g.TRIANGLES);if(o.isBatchedMesh)if(!XJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:Y8,_multiDrawCounts:p0,_multiDrawCount:X8}=o,AJ=l0?C0.get(l0).bytesPerElement:1,F8=x.get(r).currentProgram.getUniforms();for(let S8=0;S8<X8;S8++)F8.setValue(g,"_gl_DrawID",S8),kJ.render(Y8[S8]/AJ,p0[S8])}else kJ.renderMultiDraw(o._multiDrawStarts,o._multiDrawCounts,o._multiDrawCount);else if(o.isInstancedMesh)kJ.renderInstances(s0,gJ,o.count);else if(Q0.isInstancedBufferGeometry){let Y8=Q0._maxInstanceCount!==void 0?Q0._maxInstanceCount:1/0,p0=Math.min(Q0.instanceCount,Y8);kJ.renderInstances(s0,gJ,p0)}else kJ.render(s0,gJ)};function X6(z,p,Q0,r){if(y!==null&&z.isNodeMaterial)y.setObject(r,z);if(H0===!0)B0.setState(z,Q0,!1);if(z.transparent===!0&&z.side===oJ&&z.forceSinglePass===!1)z.side=D8,z.needsUpdate=!0,P7(z,p,r),z.side=G7,z.needsUpdate=!0,P7(z,p,r),z.side=oJ;else P7(z,p,r)}this.compile=function(z,p,Q0=null){if(Q0===null)Q0=z;if(y!==null)y.renderStart(z,p,Q0);if(L=I0.get(Q0),L.init(p),A.push(L),Q0.traverseVisible(function(o){if(o.isLight&&o.layers.test(p.layers)){if(L.pushLight(o),o.castShadow)L.pushShadow(o)}}),z!==Q0)z.traverseVisible(function(o){if(o.isLight&&o.layers.test(p.layers)){if(L.pushLight(o),o.castShadow)L.pushShadow(o)}});if(L.setupLights(),y!==null)y.updateLights(L.state.lightsArray);if(w0=this.localClippingEnabled,H0=B0.init(this.clippingPlanes,w0),H0===!0)B0.setGlobalState(this.clippingPlanes,p);if(y!==null)e0.render(L.state.shadowsArray,Q0,p);let r=new Set;if(z.traverse(function(o){if(!(o.isMesh||o.isPoints||o.isLine||o.isSprite))return;let y0=o.material;if(y0)if(Array.isArray(y0))for(let u0=0;u0<y0.length;u0++){let v0=y0[u0];X6(v0,Q0,p,o),r.add(v0)}else X6(y0,Q0,p,o),r.add(y0)}),L=A.pop(),y!==null)y.renderEnd();return r},this.compileAsync=function(z,p,Q0=null){let r=this.compile(z,p,Q0);return new Promise((o)=>{function y0(){if(r.forEach(function(u0){let l0=x.get(u0).currentProgram;if(l0===void 0||l0.isReady())r.delete(u0)}),r.size===0){o(z);return}setTimeout(y0,10)}if(XJ.get("KHR_parallel_shader_compile")!==null)y0();else setTimeout(y0,10)})};let H6=null;function YQ(z){if(H6)H6(z)}function V8(){B9.stop()}function U6(){B9.start()}let B9=new DU;if(B9.setAnimationLoop(YQ),typeof self<"u")B9.setContext(self);this.setAnimationLoop=function(z){H6=z,j0.setAnimationLoop(z),z===null?B9.stop():B9.start()},j0.addEventListener("sessionstart",V8),j0.addEventListener("sessionend",U6),this.render=function(z,p){if(p!==void 0&&p.isCamera!==!0){$J("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(c===!0)return;if(y!==null)y.renderStart(z,p);let Q0=j0.enabled===!0&&j0.isPresenting===!0,r=D!==null&&(j===null||Q0)&&D.begin(I,j);if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(p.parent===null&&p.matrixWorldAutoUpdate===!0)p.updateMatrixWorld();if(j0.enabled===!0&&j0.isPresenting===!0&&(D===null||D.isCompositing()===!1)){if(j0.cameraAutoUpdate===!0)j0.updateCamera(p);p=j0.getCamera()}if(z.isScene===!0)z.onBeforeRender(I,z,p,j);if(L=I0.get(z,A.length),L.init(p),L.state.textureUnits=e.getTextureUnits(),A.push(L),n0.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),R0.setFromProjectionMatrix(n0,wW,p.reversedDepth),w0=this.localClippingEnabled,H0=B0.init(this.clippingPlanes,w0),V=i0.get(z,C.length),V.init(),C.push(V),j0.enabled===!0&&j0.isPresenting===!0){let u0=I.xr.getDepthSensingMesh();if(u0!==null)XQ(u0,p,-1/0,I.sortObjects)}if(XQ(z,p,0,I.sortObjects),V.finish(),y!==null)y.updateLights(L.state.lightsArray);if(I.sortObjects===!0)V.sort(m,n);if(TJ=j0.enabled===!1||j0.isPresenting===!1||j0.hasDepthSensing()===!1,TJ)t0.addToRenderList(V,z);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(H0===!0)B0.beginShadows();let o=L.state.shadowsArray;if(e0.render(o,z,p),H0===!0)B0.endShadows();if((r&&D.hasRenderPass())===!1){let{opaque:u0,transmissive:v0}=V;if(L.setupLights(),p.isArrayCamera){let l0=p.cameras;if(v0.length>0)for(let a0=0,HJ=l0.length;a0<HJ;a0++){let RJ=l0[a0];C7(u0,v0,z,RJ)}if(TJ)t0.render(z);for(let a0=0,HJ=l0.length;a0<HJ;a0++){let RJ=l0[a0];HQ(V,z,RJ,RJ.viewport)}}else{if(v0.length>0)C7(u0,v0,z,p);if(TJ)t0.render(z);HQ(V,z,p)}}if(j!==null&&b===0)e.updateMultisampleRenderTarget(j),e.updateRenderTargetMipmap(j);if(r)D.end(I);if(z.isScene===!0)z.onAfterRender(I,z,p);if(A0.resetDefaultState(),d=-1,h=null,A.pop(),A.length>0){if(L=A[A.length-1],e.setTextureUnits(L.state.textureUnits),H0===!0)B0.setGlobalState(I.clippingPlanes,L.state.camera)}else L=null;if(C.pop(),C.length>0)V=C[C.length-1];else V=null;if(y!==null)y.renderEnd()};function XQ(z,p,Q0,r){if(z.visible===!1)return;if(z.layers.test(p.layers)){if(z.isGroup)Q0=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(p)}else if(z.isLightProbeGrid)L.pushLightProbeGrid(z);else if(z.isLight){if(L.pushLight(z),z.castShadow)L.pushShadow(z)}else if(z.isSprite){if(!z.frustumCulled||z.intersectsFrustum(R0)){if(r)b0.setFromMatrixPosition(z.matrixWorld).applyMatrix4(n0);let u0=Y0.update(z),v0=z.material;if(v0.visible)V.push(z,u0,v0,Q0,b0.z,null,p)}}else if(z.isMesh||z.isLine||z.isPoints){if(!z.frustumCulled||z.intersectsFrustum(R0)){let u0=Y0.update(z),v0=z.material;if(r){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();b0.copy(z.boundingSphere.center)}else{if(u0.boundingSphere===null)u0.computeBoundingSphere();b0.copy(u0.boundingSphere.center)}b0.applyMatrix4(z.matrixWorld).applyMatrix4(n0)}if(Array.isArray(v0)){let l0=u0.groups;for(let a0=0,HJ=l0.length;a0<HJ;a0++){let RJ=l0[a0],s0=v0[RJ.materialIndex];if(s0&&s0.visible)V.push(z,u0,s0,Q0,b0.z,RJ,p)}}else if(v0.visible)V.push(z,u0,v0,Q0,b0.z,null,p)}}}let y0=z.children;for(let u0=0,v0=y0.length;u0<v0;u0++)XQ(y0[u0],p,Q0,r)}function HQ(z,p,Q0,r){let{opaque:o,transmissive:y0,transparent:u0}=z;if(L.setupLightsView(Q0),H0===!0)B0.setGlobalState(I.clippingPlanes,Q0);if(r)T.viewport(s.copy(r));if(o.length>0)M9(o,p,Q0);if(y0.length>0)M9(y0,p,Q0);if(u0.length>0)M9(u0,p,Q0);T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function C7(z,p,Q0,r){if((Q0.isScene===!0?Q0.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[r.id]===void 0){let s0=XJ.has("EXT_color_buffer_half_float")||XJ.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[r.id]=new Q8(1,1,{generateMipmaps:!0,type:s0?O8:F9,minFilter:A9,samples:Math.max(4,OJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:FJ.workingColorSpace})}let y0=L.state.transmissionRenderTarget[r.id],u0=r.viewport||s;y0.setSize(u0.z*I.transmissionResolutionScale,u0.w*I.transmissionResolutionScale);let v0=I.getRenderTarget(),l0=I.getActiveCubeFace(),a0=I.getActiveMipmapLevel();if(I.setRenderTarget(y0),I.getClearColor(q0),k0=I.getClearAlpha(),k0<1)I.setClearColor(16777215,0.5);if(I.clear(),TJ)t0.render(Q0);let HJ=I.toneMapping;I.toneMapping=N9;let RJ=r.viewport;if(r.viewport!==void 0)r.viewport=void 0;if(L.setupLightsView(r),H0===!0)B0.setGlobalState(I.clippingPlanes,r);if(M9(z,Q0,r),e.updateMultisampleRenderTarget(y0),e.updateRenderTargetMipmap(y0),XJ.has("WEBGL_multisampled_render_to_texture")===!1){let s0=!1;for(let zJ=0,gJ=p.length;zJ<gJ;zJ++){let nJ=p[zJ],{object:kJ,geometry:Y8,material:p0,group:X8}=nJ;if(p0.side===oJ&&kJ.layers.test(r.layers)){let AJ=p0.side;p0.side=D8,p0.needsUpdate=!0,ZK(kJ,Q0,r,Y8,p0,X8),p0.side=AJ,p0.needsUpdate=!0,s0=!0}}if(s0===!0)e.updateMultisampleRenderTarget(y0),e.updateRenderTargetMipmap(y0)}if(I.setRenderTarget(v0,l0,a0),I.setClearColor(q0,k0),RJ!==void 0)r.viewport=RJ;I.toneMapping=HJ}function M9(z,p,Q0){let r=p.isScene===!0?p.overrideMaterial:null;for(let o=0,y0=z.length;o<y0;o++){let u0=z[o],{object:v0,geometry:l0,group:a0}=u0,HJ=u0.material;if(HJ.allowOverride===!0&&r!==null)HJ=r;if(v0.layers.test(Q0.layers))ZK(v0,p,Q0,l0,HJ,a0)}}function ZK(z,p,Q0,r,o,y0){if(y!==null&&o.isNodeMaterial)y.setObject(z,o);if(z.onBeforeRender(I,p,Q0,r,o,y0),z.modelViewMatrix.multiplyMatrices(Q0.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),o.onBeforeRender(I,p,Q0,r,z,y0),o.transparent===!0&&o.side===oJ&&o.forceSinglePass===!1)o.side=D8,o.needsUpdate=!0,I.renderBufferDirect(Q0,p,r,o,z,y0),o.side=G7,o.needsUpdate=!0,I.renderBufferDirect(Q0,p,r,o,z,y0),o.side=oJ;else I.renderBufferDirect(Q0,p,r,o,z,y0);z.onAfterRender(I,p,Q0,r,o,y0)}function P7(z,p,Q0){if(p.isScene!==!0)p=CJ;let r=x.get(z),o=L.state.lights,y0=L.state.shadowsArray,u0=o.state.version,v0=N0.getParameters(z,o.state,y0,p,Q0,L.state.lightProbeGridArray),l0=N0.getProgramCacheKey(v0),a0=r.programs;r.environment=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?p.environment:null,r.fog=p.fog;let HJ=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap;if(r.envMap=O0.get(z.envMap||r.environment,HJ),r.envMapRotation=r.environment!==null&&z.envMap===null?p.environmentRotation:z.envMapRotation,a0===void 0)z.addEventListener("dispose",d8),a0=new Map,r.programs=a0;let RJ=a0.get(l0);if(RJ!==void 0){if(r.currentProgram===RJ&&r.lightsStateVersion===u0)return K8(z,v0),RJ}else{if(v0.uniforms=N0.getUniforms(z),y!==null&&z.isNodeMaterial)y.build(z,Q0,v0);z.onBeforeCompile(v0,I),RJ=N0.acquireProgram(v0,l0),a0.set(l0,RJ),r.uniforms=v0.uniforms}let s0=r.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)s0.clippingPlanes=B0.uniform;if(K8(z,v0),r.needsLights=UQ(z),r.lightsStateVersion=u0,r.needsLights)s0.ambientLightColor.value=o.state.ambient,s0.lightProbe.value=o.state.probe,s0.sunLights.value=o.state.sun,s0.sunLightShadows.value=o.state.sunShadow,s0.directionalLights.value=o.state.directional,s0.directionalLightShadows.value=o.state.directionalShadow,s0.spotLights.value=o.state.spot,s0.spotLightShadows.value=o.state.spotShadow,s0.rectAreaLights.value=o.state.rectArea,s0.ltc_1.value=o.state.rectAreaLTC1,s0.ltc_2.value=o.state.rectAreaLTC2,s0.pointLights.value=o.state.point,s0.pointLightShadows.value=o.state.pointShadow,s0.hemisphereLights.value=o.state.hemi,s0.sunShadowMatrix.value=o.state.sunShadowMatrix,s0.sunShadowCascade.value=o.state.sunShadowCascade,s0.directionalShadowMatrix.value=o.state.directionalShadowMatrix,s0.spotLightMatrix.value=o.state.spotLightMatrix,s0.spotLightMap.value=o.state.spotLightMap,s0.pointShadowMatrix.value=o.state.pointShadowMatrix;return r.lightProbeGrid=L.state.lightProbeGridArray.length>0,r.currentProgram=RJ,r.uniformsList=null,RJ}function B$(z){if(z.uniformsList===null){let p=z.currentProgram.getUniforms();z.uniformsList=H$.seqWithValue(p.seq,z.uniforms)}return z.uniformsList}function K8(z,p){let Q0=x.get(z);Q0.outputColorSpace=p.outputColorSpace,Q0.batching=p.batching,Q0.batchingColor=p.batchingColor,Q0.instancing=p.instancing,Q0.instancingColor=p.instancingColor,Q0.instancingMorph=p.instancingMorph,Q0.skinning=p.skinning,Q0.morphTargets=p.morphTargets,Q0.morphNormals=p.morphNormals,Q0.morphColors=p.morphColors,Q0.morphTargetsCount=p.morphTargetsCount,Q0.numClippingPlanes=p.numClippingPlanes,Q0.numIntersection=p.numClipIntersection,Q0.vertexAlphas=p.vertexAlphas,Q0.vertexTangents=p.vertexTangents,Q0.toneMapping=p.toneMapping}function Z9(z,p){if(z.length===0)return null;if(z.length===1)return z[0].texture!==null?z[0]:null;P.setFromMatrixPosition(p.matrixWorld);for(let Q0=0,r=z.length;Q0<r;Q0++){let o=z[Q0];if(o.texture!==null&&o.boundingBox.containsPoint(P))return o}return null}function KK(z,p,Q0,r,o){if(p.isScene!==!0)p=CJ;e.resetTextureUnits();let y0=p.fog,u0=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?p.environment:null,v0=j===null?I.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:FJ.workingColorSpace,l0=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,a0=O0.get(r.envMap||u0,l0),HJ=r.vertexColors===!0&&!!Q0.attributes.color&&Q0.attributes.color.itemSize===4,RJ=!!Q0.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),s0=!!Q0.morphAttributes.position,zJ=!!Q0.morphAttributes.normal,gJ=!!Q0.morphAttributes.color,nJ=N9;if(r.toneMapped){if(j===null||j.isXRRenderTarget===!0)nJ=I.toneMapping}let kJ=Q0.morphAttributes.position||Q0.morphAttributes.normal||Q0.morphAttributes.color,Y8=kJ!==void 0?kJ.length:0,p0=x.get(r),X8=L.state.lights;if(H0===!0){if(w0===!0||z!==h){let sJ=z===h&&r.id===d;B0.setState(r,z,sJ)}}let AJ=!1;if(r.version===p0.__version){if(p0.needsLights&&p0.lightsStateVersion!==X8.state.version)AJ=!0;else if(p0.outputColorSpace!==v0)AJ=!0;else if(o.isBatchedMesh&&p0.batching===!1)AJ=!0;else if(!o.isBatchedMesh&&p0.batching===!0)AJ=!0;else if(o.isBatchedMesh&&p0.batchingColor===!0&&o._colorsTexture===null)AJ=!0;else if(o.isBatchedMesh&&p0.batchingColor===!1&&o._colorsTexture!==null)AJ=!0;else if(o.isInstancedMesh&&p0.instancing===!1)AJ=!0;else if(!o.isInstancedMesh&&p0.instancing===!0)AJ=!0;else if(o.isSkinnedMesh&&p0.skinning===!1)AJ=!0;else if(!o.isSkinnedMesh&&p0.skinning===!0)AJ=!0;else if(o.isInstancedMesh&&p0.instancingColor===!0&&o.instanceColor===null)AJ=!0;else if(o.isInstancedMesh&&p0.instancingColor===!1&&o.instanceColor!==null)AJ=!0;else if(o.isInstancedMesh&&p0.instancingMorph===!0&&o.morphTexture===null)AJ=!0;else if(o.isInstancedMesh&&p0.instancingMorph===!1&&o.morphTexture!==null)AJ=!0;else if(p0.envMap!==a0)AJ=!0;else if(r.fog===!0&&p0.fog!==y0)AJ=!0;else if(p0.numClippingPlanes!==void 0&&(p0.numClippingPlanes!==B0.numPlanes||p0.numIntersection!==B0.numIntersection))AJ=!0;else if(p0.vertexAlphas!==HJ)AJ=!0;else if(p0.vertexTangents!==RJ)AJ=!0;else if(p0.morphTargets!==s0)AJ=!0;else if(p0.morphNormals!==zJ)AJ=!0;else if(p0.morphColors!==gJ)AJ=!0;else if(p0.toneMapping!==nJ)AJ=!0;else if(p0.morphTargetsCount!==Y8)AJ=!0;else if(!!p0.lightProbeGrid!==L.state.lightProbeGridArray.length>0)AJ=!0}else AJ=!0,p0.__version=r.version;let F8=p0.currentProgram;if(AJ===!0){if(F8=P7(r,p,o),y&&r.isNodeMaterial)y.onUpdateProgram(r,F8,p0)}let S8=!1,K9=!1,h9=!1,bJ=F8.getUniforms(),pJ=p0.uniforms;if(T.useProgram(F8.program))S8=!0,K9=!0,h9=!0;if(r.id!==d)d=r.id,K9=!0;if(p0.needsLights){let sJ=Z9(L.state.lightProbeGridArray,o);if(p0.lightProbeGrid!==sJ)p0.lightProbeGrid=sJ,K9=!0}if(S8||h!==z){if(T.buffers.depth.getReversed()&&z.reversedDepth!==!0)z._reversedDepth=!0,z.updateProjectionMatrix();bJ.setValue(g,"projectionMatrix",z.projectionMatrix),bJ.setValue(g,"viewMatrix",z.matrixWorldInverse);let C9=bJ.map.cameraPosition;if(C9!==void 0)C9.setValue(g,GJ.setFromMatrixPosition(z.matrixWorld));if(OJ.logarithmicDepthBuffer)bJ.setValue(g,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)bJ.setValue(g,"isOrthographic",z.isOrthographicCamera===!0);if(h!==z)h=z,K9=!0,h9=!0}if(p0.needsLights){if(X8.state.sunShadowMap.length>0)bJ.setValue(g,"sunShadowMap",X8.state.sunShadowMap,e);if(X8.state.directionalShadowMap.length>0)bJ.setValue(g,"directionalShadowMap",X8.state.directionalShadowMap,e);if(X8.state.spotShadowMap.length>0)bJ.setValue(g,"spotShadowMap",X8.state.spotShadowMap,e);if(X8.state.pointShadowMap.length>0)bJ.setValue(g,"pointShadowMap",X8.state.pointShadowMap,e)}if(o.isSkinnedMesh){bJ.setOptional(g,o,"bindMatrix"),bJ.setOptional(g,o,"bindMatrixInverse");let sJ=o.skeleton;if(sJ){if(sJ.boneTexture===null)sJ.computeBoneTexture();bJ.setValue(g,"boneTexture",sJ.boneTexture,e)}}if(o.isBatchedMesh){if(bJ.setOptional(g,o,"batchingTexture"),bJ.setValue(g,"batchingTexture",o._matricesTexture,e),bJ.setOptional(g,o,"batchingIdTexture"),bJ.setValue(g,"batchingIdTexture",o._indirectTexture,e),bJ.setOptional(g,o,"batchingColorTexture"),o._colorsTexture!==null)bJ.setValue(g,"batchingColorTexture",o._colorsTexture,e)}let k9=Q0.morphAttributes;if(k9.position!==void 0||k9.normal!==void 0||k9.color!==void 0)PJ.update(o,Q0,F8);if(K9||p0.receiveShadow!==o.receiveShadow)p0.receiveShadow=o.receiveShadow,bJ.setValue(g,"receiveShadow",o.receiveShadow);if((r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&p.environment!==null)pJ.envMapIntensity.value=p.environmentIntensity;if(pJ.dfgLUT!==void 0)pJ.dfgLUT.value=ZO();if(K9){if(bJ.setValue(g,"toneMappingExposure",I.toneMappingExposure),p0.needsLights)M$(pJ,h9);if(y0&&r.fog===!0)P0.refreshFogUniforms(pJ,y0);if(P0.refreshMaterialUniforms(pJ,r,w,Z0,L.state.transmissionRenderTarget[z.id]),p0.needsLights&&p0.lightProbeGrid){let sJ=p0.lightProbeGrid;pJ.probesSH.value=sJ.texture,pJ.probesMin.value.copy(sJ.boundingBox.min),pJ.probesMax.value.copy(sJ.boundingBox.max),pJ.probesResolution.value.copy(sJ.resolution)}H$.upload(g,B$(p0),pJ,e)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0)H$.upload(g,B$(p0),pJ,e),r.uniformsNeedUpdate=!1;if(r.isSpriteMaterial)bJ.setValue(g,"center",o.center);if(bJ.setValue(g,"modelViewMatrix",o.modelViewMatrix),bJ.setValue(g,"normalMatrix",o.normalMatrix),bJ.setValue(g,"modelMatrix",o.matrixWorld),r.uniformsGroups!==void 0){let sJ=r.uniformsGroups;for(let C9=0,x9=sJ.length;C9<x9;C9++){let B8=sJ[C9];x0.update(B8,F8),x0.bind(B8,F8)}}return F8}function M$(z,p){z.ambientLightColor.needsUpdate=p,z.lightProbe.needsUpdate=p,z.sunLights.needsUpdate=p,z.sunLightShadows.needsUpdate=p,z.directionalLights.needsUpdate=p,z.directionalLightShadows.needsUpdate=p,z.pointLights.needsUpdate=p,z.pointLightShadows.needsUpdate=p,z.spotLights.needsUpdate=p,z.spotLightShadows.needsUpdate=p,z.rectAreaLights.needsUpdate=p,z.hemisphereLights.needsUpdate=p}function UQ(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(z,p,Q0){let r=x.get(z);if(r.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1)r.__useRenderToTexture=!1;x.get(z.texture).__webglTexture=p,x.get(z.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:Q0,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,p){let Q0=x.get(z);Q0.__webglFramebuffer=p,Q0.__useDefaultFramebuffer=p===void 0},this.setRenderTarget=function(z,p=0,Q0=0){j=z,v=p,b=Q0;let r=null,o=!1,y0=!1;if(z){let v0=x.get(z);if(v0.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(g.FRAMEBUFFER,v0.__webglFramebuffer),s.copy(z.viewport),K0.copy(z.scissor),_0=z.scissorTest,T.viewport(s),T.scissor(K0),T.setScissorTest(_0),d=-1;return}else if(v0.__webglFramebuffer===void 0)e.setupRenderTarget(z);else if(v0.__hasExternalTextures)e.rebindTextures(z,x.get(z.texture).__webglTexture,x.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let HJ=z.depthTexture;if(v0.__boundDepthTexture!==HJ){if(HJ!==null&&x.has(HJ)&&(z.width!==HJ.image.width||z.height!==HJ.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");e.setupDepthRenderbuffer(z)}}let l0=z.texture;if(l0.isData3DTexture||l0.isDataArrayTexture||l0.isCompressedArrayTexture)y0=!0;let a0=x.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(a0[p]))r=a0[p][Q0];else r=a0[p];o=!0}else if(z.samples>0&&e.useMultisampledRTT(z)===!1)r=x.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(a0))r=a0[Q0];else r=a0;s.copy(z.viewport),K0.copy(z.scissor),_0=z.scissorTest}else s.copy($0).multiplyScalar(w).floor(),K0.copy(t).multiplyScalar(w).floor(),_0=V0;if(Q0!==0)r=u;if(T.bindFramebuffer(g.FRAMEBUFFER,r))T.drawBuffers(z,r);if(T.viewport(s),T.scissor(K0),T.setScissorTest(_0),o){let v0=x.get(z.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+p,v0.__webglTexture,Q0)}else if(y0){let v0=p;for(let l0=0;l0<z.textures.length;l0++){let a0=x.get(z.textures[l0]);g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+l0,a0.__webglTexture,Q0,v0)}}else if(z!==null&&Q0!==0){let v0=x.get(z.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,v0.__webglTexture,Q0)}d=-1};function N6(z){let p=x.get(z);if(p.__readFormat!==z.format||p.__readType!==z.type)p.__readFormat=z.format,p.__readType=z.type,p.__formatReadable=OJ.textureFormatReadable(z.format),p.__typeReadable=OJ.textureTypeReadable(z.type);return p}if(this.readRenderTargetPixels=function(z,p,Q0,r,o,y0,u0,v0=0){if(!(z&&z.isWebGLRenderTarget)){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let l0=x.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&u0!==void 0)l0=l0[u0];if(l0){T.bindFramebuffer(g.FRAMEBUFFER,l0);try{let a0=z.textures[v0],HJ=a0.format,RJ=a0.type;if(z.textures.length>1)g.readBuffer(g.COLOR_ATTACHMENT0+v0);let s0=N6(a0);if(s0.__formatReadable===!1){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(s0.__typeReadable===!1){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(p>=0&&p<=z.width-r&&(Q0>=0&&Q0<=z.height-o))g.readPixels(p,Q0,r,o,X0.convert(HJ),X0.convert(RJ),y0)}finally{let a0=j!==null?x.get(j).__webglFramebuffer:null;T.bindFramebuffer(g.FRAMEBUFFER,a0)}}},this.readRenderTargetPixelsAsync=async function(z,p,Q0,r,o,y0,u0,v0=0){if(!(z&&z.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let l0=x.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&u0!==void 0)l0=l0[u0];if(l0)if(p>=0&&p<=z.width-r&&(Q0>=0&&Q0<=z.height-o)){T.bindFramebuffer(g.FRAMEBUFFER,l0);let a0=z.textures[v0],HJ=a0.format,RJ=a0.type;if(z.textures.length>1)g.readBuffer(g.COLOR_ATTACHMENT0+v0);let s0=N6(a0);if(s0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(s0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let zJ=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,zJ),g.bufferData(g.PIXEL_PACK_BUFFER,y0.byteLength,g.STREAM_READ),g.readPixels(p,Q0,r,o,X0.convert(HJ),X0.convert(RJ),0),g.bindBuffer(g.PIXEL_PACK_BUFFER,null);let gJ=j!==null?x.get(j).__webglFramebuffer:null;T.bindFramebuffer(g.FRAMEBUFFER,gJ);let nJ=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await bH(g,nJ,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,zJ),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,y0),g.bindBuffer(g.PIXEL_PACK_BUFFER,null),g.deleteBuffer(zJ),g.deleteSync(nJ),y0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,p=null,Q0=0){let r=Math.pow(2,-Q0),o=Math.floor(z.image.width*r),y0=Math.floor(z.image.height*r),u0=p!==null?p.x:0,v0=p!==null?p.y:0;e.setTexture2D(z,0),g.copyTexSubImage2D(g.TEXTURE_2D,Q0,0,0,u0,v0,o,y0),T.unbindTexture()},this.copyTextureToTexture=function(z,p,Q0=null,r=null,o=0,y0=0){let u0,v0,l0,a0,HJ,RJ,s0,zJ,gJ,nJ=z.isCompressedTexture?z.mipmaps[y0]:z.image;if(Q0!==null)u0=Q0.max.x-Q0.min.x,v0=Q0.max.y-Q0.min.y,l0=Q0.isBox3?Q0.max.z-Q0.min.z:1,a0=Q0.min.x,HJ=Q0.min.y,RJ=Q0.isBox3?Q0.min.z:0;else{let pJ=Math.pow(2,-o);if(u0=Math.floor(nJ.width*pJ),v0=Math.floor(nJ.height*pJ),z.isDataArrayTexture)l0=nJ.depth;else if(z.isData3DTexture)l0=Math.floor(nJ.depth*pJ);else l0=1;a0=0,HJ=0,RJ=0}if(r!==null)s0=r.x,zJ=r.y,gJ=r.z;else s0=0,zJ=0,gJ=0;let kJ=X0.convert(p.format),Y8=X0.convert(p.type),p0;if(p.isData3DTexture)e.setTexture3D(p,0),p0=g.TEXTURE_3D;else if(p.isDataArrayTexture||p.isCompressedArrayTexture)e.setTexture2DArray(p,0),p0=g.TEXTURE_2D_ARRAY;else e.setTexture2D(p,0),p0=g.TEXTURE_2D;T.activeTexture(g.TEXTURE0),T.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,p.flipY),T.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),T.pixelStorei(g.UNPACK_ALIGNMENT,p.unpackAlignment);let X8=T.getParameter(g.UNPACK_ROW_LENGTH),AJ=T.getParameter(g.UNPACK_IMAGE_HEIGHT),F8=T.getParameter(g.UNPACK_SKIP_PIXELS),S8=T.getParameter(g.UNPACK_SKIP_ROWS),K9=T.getParameter(g.UNPACK_SKIP_IMAGES);T.pixelStorei(g.UNPACK_ROW_LENGTH,nJ.width),T.pixelStorei(g.UNPACK_IMAGE_HEIGHT,nJ.height),T.pixelStorei(g.UNPACK_SKIP_PIXELS,a0),T.pixelStorei(g.UNPACK_SKIP_ROWS,HJ),T.pixelStorei(g.UNPACK_SKIP_IMAGES,RJ);let h9=z.isDataArrayTexture||z.isData3DTexture,bJ=p.isDataArrayTexture||p.isData3DTexture;if(z.isDepthTexture){let pJ=x.get(z),k9=x.get(p),sJ=x.get(pJ.__renderTarget),C9=x.get(k9.__renderTarget);T.bindFramebuffer(g.READ_FRAMEBUFFER,sJ.__webglFramebuffer),T.bindFramebuffer(g.DRAW_FRAMEBUFFER,C9.__webglFramebuffer);for(let x9=0;x9<l0;x9++){if(h9)g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,x.get(z).__webglTexture,o,RJ+x9),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,x.get(p).__webglTexture,y0,gJ+x9);g.blitFramebuffer(a0,HJ,u0,v0,s0,zJ,u0,v0,g.DEPTH_BUFFER_BIT,g.NEAREST)}T.bindFramebuffer(g.READ_FRAMEBUFFER,null),T.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(o!==0||z.isRenderTargetTexture||x.has(z)){let pJ=x.get(z),k9=x.get(p);T.bindFramebuffer(g.READ_FRAMEBUFFER,J0),T.bindFramebuffer(g.DRAW_FRAMEBUFFER,f);for(let sJ=0;sJ<l0;sJ++){if(h9)g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,pJ.__webglTexture,o,RJ+sJ);else g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,pJ.__webglTexture,o);if(bJ)g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,k9.__webglTexture,y0,gJ+sJ);else g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,k9.__webglTexture,y0);if(o!==0)g.blitFramebuffer(a0,HJ,u0,v0,s0,zJ,u0,v0,g.COLOR_BUFFER_BIT,g.NEAREST);else if(bJ)g.copyTexSubImage3D(p0,y0,s0,zJ,gJ+sJ,a0,HJ,u0,v0);else g.copyTexSubImage2D(p0,y0,s0,zJ,a0,HJ,u0,v0)}T.bindFramebuffer(g.READ_FRAMEBUFFER,null),T.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(bJ)if(z.isDataTexture||z.isData3DTexture)g.texSubImage3D(p0,y0,s0,zJ,gJ,u0,v0,l0,kJ,Y8,nJ.data);else if(p.isCompressedArrayTexture)g.compressedTexSubImage3D(p0,y0,s0,zJ,gJ,u0,v0,l0,kJ,nJ.data);else g.texSubImage3D(p0,y0,s0,zJ,gJ,u0,v0,l0,kJ,Y8,nJ);else if(z.isDataTexture)g.texSubImage2D(g.TEXTURE_2D,y0,s0,zJ,u0,v0,kJ,Y8,nJ.data);else if(z.isCompressedTexture)g.compressedTexSubImage2D(g.TEXTURE_2D,y0,s0,zJ,nJ.width,nJ.height,kJ,nJ.data);else g.texSubImage2D(g.TEXTURE_2D,y0,s0,zJ,u0,v0,kJ,Y8,nJ);if(T.pixelStorei(g.UNPACK_ROW_LENGTH,X8),T.pixelStorei(g.UNPACK_IMAGE_HEIGHT,AJ),T.pixelStorei(g.UNPACK_SKIP_PIXELS,F8),T.pixelStorei(g.UNPACK_SKIP_ROWS,S8),T.pixelStorei(g.UNPACK_SKIP_IMAGES,K9),y0===0&&p.generateMipmaps)g.generateMipmap(p0);T.unbindTexture()},this.initRenderTarget=function(z){if(x.get(z).__webglFramebuffer===void 0)e.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)e.setTextureCube(z,0);else if(z.isData3DTexture)e.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)e.setTexture2DArray(z,0);else e.setTexture2D(z,0);T.unbindTexture()},this.resetState=function(){v=0,b=0,j=null,T.reset(),A0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wW}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=FJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=FJ._getUnpackColorSpace()}}function JQ(J,Q=!1){let $=J[0].index!==null,Z=new Set(Object.keys(J[0].attributes)),K=new Set(Object.keys(J[0].morphAttributes)),W={},Y={},X=J[0].morphTargetsRelative,H=new vJ,U=0;for(let N=0;N<J.length;++N){let F=J[N],G=0;if($!==(F.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let E in F.attributes){if(!Z.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+'. All geometries must have compatible attributes; make sure "'+E+'" attribute exists among all geometries, or in none of them.'),null;if(W[E]===void 0)W[E]=[];W[E].push(F.attributes[E]),G++}if(G!==Z.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". Make sure all geometries have the same number of attributes."),null;if(X!==F.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let E in F.morphAttributes){if(!K.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+".  .morphAttributes must be consistent throughout all geometries."),null;if(Y[E]===void 0)Y[E]=[];Y[E].push(F.morphAttributes[E])}if(Q){let E;if($)E=F.index.count;else if(F.attributes.position!==void 0)E=F.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". The geometry must have either an index or a position attribute"),null;H.addGroup(U,E,N),U+=E}}if($){let N=0,F=[];for(let G=0;G<J.length;++G){let E=J[G].index;for(let O=0;O<E.count;++O)F.push(E.getX(O)+N);N+=J[G].attributes.position.count}H.setIndex(F)}for(let N in W){let F=yU(W[N]);if(!F)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" attribute."),null;H.setAttribute(N,F)}for(let N in Y){let F=Y[N][0].length;if(F===0)continue;H.morphAttributes=H.morphAttributes||{},H.morphAttributes[N]=[];for(let G=0;G<F;++G){let E=[];for(let B=0;B<Y[N].length;++B)E.push(Y[N][B][G]);let O=yU(E);if(!O)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" morphAttribute."),null;H.morphAttributes[N].push(O)}}return H}function yU(J){let Q,$,Z,K=-1,W=0;for(let U=0;U<J.length;++U){let N=J[U];if(Q===void 0)Q=N.array.constructor;if(Q!==N.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if($===void 0)$=N.itemSize;if($!==N.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(Z===void 0)Z=N.normalized;if(Z!==N.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(K===-1)K=N.gpuType;if(K!==N.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;W+=N.count*$}let Y=new Q(W),X=new aJ(Y,$,Z),H=0;for(let U=0;U<J.length;++U){let N=J[U];if(N.isInterleavedBufferAttribute){let F=H/$;for(let G=0,E=N.count;G<E;G++)for(let O=0;O<$;O++){let B=N.getComponent(G,O);X.setComponent(G+F,O,B)}}else Y.set(N.array,H);H+=N.count*$}if(K!==void 0)X.gpuType=K;return X}function OY(J,Q){if(Q===AW)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===l6||Q===lQ){let $=J.getIndex();if($===null){let W=[],Y=J.getAttribute("position");if(Y!==void 0){for(let X=0;X<Y.count;X++)W.push(X);J.setIndex(W),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,K=[];if(Q===l6)for(let W=1;W<=Z;W++)K.push($.getX(0)),K.push($.getX(W)),K.push($.getX(W+1));else for(let W=0;W<Z;W++)if(W%2===0)K.push($.getX(W)),K.push($.getX(W+1)),K.push($.getX(W+2));else K.push($.getX(W+2)),K.push($.getX(W+1)),K.push($.getX(W));if(K.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(K),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function nZ(J){let Q=new Map,$=new Map,Z=J.clone();return vU(J,Z,function(K,W){Q.set(W,K),$.set(K,W)}),Z.traverse(function(K){if(!K.isSkinnedMesh)return;let W=K,Y=Q.get(K),X=Y.skeleton.bones;W.skeleton=Y.skeleton.clone(),W.bindMatrix.copy(Y.bindMatrix),W.skeleton.bones=X.map(function(H){return $.get(H)}),W.bind(W.skeleton,W.bindMatrix)}),Z}function vU(J,Q,$){$(J,Q);for(let Z=0;Z<J.children.length;Z++)vU(J.children[Z],Q.children[Z],$)}class kY extends a9{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new lU(Q)}),this.register(function(Q){return new uU(Q)}),this.register(function(Q){return new tU(Q)}),this.register(function(Q){return new eU(Q)}),this.register(function(Q){return new J5(Q)}),this.register(function(Q){return new cU(Q)}),this.register(function(Q){return new nU(Q)}),this.register(function(Q){return new sU(Q)}),this.register(function(Q){return new iU(Q)}),this.register(function(Q){return new mU(Q)}),this.register(function(Q){return new oU(Q)}),this.register(function(Q){return new dU(Q)}),this.register(function(Q){return new rU(Q)}),this.register(function(Q){return new aU(Q)}),this.register(function(Q){return new gU(Q)}),this.register(function(Q){return new DY(Q,MJ.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new DY(Q,MJ.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new Q5(Q)})}load(J,Q,$,Z){let K=this,W;if(this.resourcePath!=="")W=this.resourcePath;else if(this.path!==""){let H=B7.extractUrlBase(J);W=B7.resolveURL(H,this.path)}else W=B7.extractUrlBase(J);this.manager.itemStart(J);let Y=function(H){if(Z)Z(H);else console.error(H);K.manager.itemError(J),K.manager.itemEnd(J)},X=new Q$(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(H){try{K.parse(H,W,function(U){Q(U),K.manager.itemEnd(J)},Y)}catch(U){Y(U)}},$,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let K,W={},Y={},X=new TextDecoder;if(typeof J==="string")K=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===$5){try{W[MJ.KHR_BINARY_GLTF]=new Z5(J)}catch(N){if(Z)Z(N);return}K=JSON.parse(W[MJ.KHR_BINARY_GLTF].content)}else K=JSON.parse(X.decode(J));else K=J;if(K.asset===void 0||K.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let H=new H5(K,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});H.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let N=this.pluginCallbacks[U](H);if(!N.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[N.name]=N,W[N.name]=!0}if(K.extensionsUsed)for(let U=0;U<K.extensionsUsed.length;++U){let N=K.extensionsUsed[U],F=K.extensionsRequired||[];switch(N){case MJ.KHR_MATERIALS_UNLIT:W[N]=new pU;break;case MJ.KHR_DRACO_MESH_COMPRESSION:W[N]=new K5(K,this.dracoLoader);break;case MJ.KHR_TEXTURE_TRANSFORM:W[N]=new W5;break;case MJ.KHR_MESH_QUANTIZATION:W[N]=new Y5;break;default:if(F.indexOf(N)>=0&&Y[N]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+N+'".')}}H.setExtensions(W),H.setPlugins(Y),H.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,K){$.parse(J,Q,Z,K)})}}function KO(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function $8(J,Q,$){let Z=J.json.materials[Q];if(Z.extensions&&Z.extensions[$])return Z.extensions[$];return null}var MJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gU{constructor(J){this.parser=J,this.name=MJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(K.extensions&&K.extensions[this.name]&&K.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,K.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let K=Q.json,X=((K.extensions&&K.extensions[this.name]||{}).lights||[])[J],H,U=new f0(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],g8);let N=X.range!==void 0?X.range:0;switch(X.type){case"directional":H=new a6(U),H.target.position.set(0,0,-1),H.add(H.target);break;case"point":H=new r9(U),H.distance=N;break;case"spot":H=new o6(U),H.distance=N,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,H.angle=X.spot.outerConeAngle,H.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,H.target.position.set(0,0,-1),H.add(H.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(H.position.set(0,0,0),v9(H,X),X.intensity!==void 0)H.intensity=X.intensity;return H.name=Q.createUniqueName(X.name||"light_"+J),Z=Promise.resolve(H),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,K=$.json.nodes[J],Y=(K.extensions&&K.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return $._getNodeRef(Q.cache,Y,X)})}}class pU{constructor(){this.name=MJ.KHR_MATERIALS_UNLIT}getMaterialType(){return fJ}extendParams(J,Q,$){let Z=[];J.color=new f0(1,1,1),J.opacity=1;let K=Q.pbrMetallicRoughness;if(K){if(Array.isArray(K.baseColorFactor)){let W=K.baseColorFactor;J.color.setRGB(W[0],W[1],W[2],g8),J.opacity=W[3]}if(K.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",K.baseColorTexture,J8))}return Promise.all(Z)}}class mU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class lU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(Z.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let K=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new G0(K,K)}}return Promise.all(Z)}}class uU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class dU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(Z)}}class cU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_SHEEN}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.sheenColor=new f0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let K=$.sheenColorFactor;Q.sheenColor.setRGB(K[0],K[1],K[2],g8)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,J8));if($.sheenRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(Z)}}class nU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)Z.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(Z)}}class sU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_VOLUME}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let K=$.attenuationColor||[1,1,1];return Q.attenuationColor=new f0().setRGB(K[0],K[1],K[2],g8),Promise.all(Z)}}class iU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_IOR}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class oU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let K=$.specularColorFactor||[1,1,1];if(Q.specularColor=new f0().setRGB(K[0],K[1],K[2],g8),$.specularColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,J8));return Promise.all(Z)}}class aU{constructor(J){this.parser=J,this.name=MJ.EXT_MATERIALS_BUMP}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)Z.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(Z)}}class rU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)Z.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(Z)}}class tU{constructor(J){this.parser=J,this.name=MJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let K=Z.extensions[this.name],W=Q.options.ktx2Loader;if(!W)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,K.source,W)}}class eU{constructor(J){this.parser=J,this.name=MJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,K=Z.textures[J];if(!K.extensions||!K.extensions[Q])return null;let W=K.extensions[Q],Y=Z.images[W.source],X=$.textureLoader;if(Y.uri){let H=$.options.manager.getHandler(Y.uri);if(H!==null)X=H}return $.loadTextureImage(J,W.source,X)}}class J5{constructor(J){this.parser=J,this.name=MJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,K=Z.textures[J];if(!K.extensions||!K.extensions[Q])return null;let W=K.extensions[Q],Y=Z.images[W.source],X=$.textureLoader;if(Y.uri){let H=$.options.manager.getHandler(Y.uri);if(H!==null)X=H}return $.loadTextureImage(J,W.source,X)}}class DY{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],K=this.parser.getDependency("buffer",Z.buffer),W=this.parser.options.meshoptDecoder;if(!W||!W.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return K.then(function(Y){let X=Z.byteOffset||0,H=Z.byteLength||0,U=Z.count,N=Z.byteStride,F=new Uint8Array(Y,X,H);if(W.decodeGltfBufferAsync)return W.decodeGltfBufferAsync(U,N,F,Z.mode,Z.filter).then(function(G){return G.buffer});else return W.ready.then(function(){let G=new ArrayBuffer(U*N);return W.decodeGltfBuffer(new Uint8Array(G),U,N,F,Z.mode,Z.filter),G})})}else return null}}class Q5{constructor(J){this.name=MJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let H of Z.primitives)if(H.mode!==a8.TRIANGLES&&H.mode!==a8.TRIANGLE_STRIP&&H.mode!==a8.TRIANGLE_FAN&&H.mode!==void 0)return null;let W=$.extensions[this.name].attributes,Y=[],X={};for(let H in W)Y.push(this.parser.getDependency("accessor",W[H]).then((U)=>{return X[H]=U,X[H]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((H)=>{let U=H.pop(),N=U.isGroup?U.children:[U],F=H[0].count,G=[];for(let E of N){let O=new QJ,B=new _,R=new IJ,q=new _(1,1,1),M=new S9(E.geometry,E.material,F);for(let V=0;V<F;V++){if(X.TRANSLATION)B.fromBufferAttribute(X.TRANSLATION,V);if(X.ROTATION)R.fromBufferAttribute(X.ROTATION,V);if(X.SCALE)q.fromBufferAttribute(X.SCALE,V);M.setMatrixAt(V,O.compose(B,R,q))}let P=null;for(let V in X)if(V==="_COLOR_0"){let L=X[V];M.instanceColor=new H7(L.array,L.itemSize,L.normalized)}else if(V!=="TRANSLATION"&&V!=="ROTATION"&&V!=="SCALE"){if(P===null){let C=M.geometry;P=new vJ,P.name=C.name;for(let A in C.attributes)P.setAttribute(A,C.attributes[A]);for(let A in C.morphAttributes)P.morphAttributes[A]=C.morphAttributes[A];if(C.index!==null)P.setIndex(C.index);P.morphTargetsRelative=C.morphTargetsRelative;for(let A of C.groups)P.addGroup(A.start,A.count,A.materialIndex);if(C.boundingBox!==null)P.boundingBox=C.boundingBox.clone();if(C.boundingSphere!==null)P.boundingSphere=C.boundingSphere.clone();P.drawRange.start=C.drawRange.start,P.drawRange.count=C.drawRange.count,P.userData=Object.assign({},C.userData),M.geometry=P}let L=X[V];P.setAttribute(V,new H7(L.array,L.itemSize,L.normalized))}wJ.prototype.copy.call(M,E),this.parser.assignFinalMaterial(M),G.push(M)}if(U.isGroup)return U.clear(),U.add(...G),U;return G[0]})}}var $5="glTF",N$=12,fU={JSON:1313821514,BIN:5130562};class Z5{constructor(J){this.name=MJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,N$),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==$5)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-N$,K=new DataView(J,N$),W=0;while(W<Z){let Y=K.getUint32(W,!0);W+=4;let X=K.getUint32(W,!0);if(W+=4,X===fU.JSON){let H=new Uint8Array(J,N$+W,Y);this.content=$.decode(H)}else if(X===fU.BIN){let H=N$+W;this.body=J.slice(H,H+Y)}W+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class K5{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=MJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,K=J.extensions[this.name].bufferView,W=J.extensions[this.name].attributes,Y={},X={},H={};for(let U in W){let N=BY[U]||U.toLowerCase();Y[N]=W[U]}for(let U in J.attributes){let N=BY[U]||U.toLowerCase();if(W[U]!==void 0){let F=$.accessors[J.attributes[U]],G=QQ[F.componentType];H[N]=G.name,X[N]=F.normalized===!0}}return Q.getDependency("bufferView",K).then(function(U){return new Promise(function(N,F){Z.decodeDracoFile(U,function(G){for(let E in G.attributes){let O=G.attributes[E],B=X[E];if(B!==void 0)O.normalized=B}N(G)},Y,H,g8,F)})})}}class W5{constructor(){this.name=MJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),Z=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*Z,J.offset.x,-J.repeat.x*Z,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class Y5{constructor(){this.name=MJ.KHR_MESH_QUANTIZATION}}class CY extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z*3+Z;for(let W=0;W!==Z;W++)Q[W]=$[K+W];return Q}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=Y*2,H=Y*3,U=Z-Q,N=($-Q)/U,F=N*N,G=F*N,E=J*H,O=E-H,B=-2*G+3*F,R=G-F,q=1-B,M=R-F+N;for(let P=0;P!==Y;P++){let V=W[O+P+Y],L=W[O+P+X]*U,C=W[E+P+Y],A=W[E+P]*U;K[P]=q*V+M*L+B*C+R*A}return K}}var WO=new IJ;class X5 extends CY{interpolate_(J,Q,$,Z){let K=super.interpolate_(J,Q,$,Z);return WO.fromArray(K).normalize().toArray(K),K}}var a8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},QQ={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bU={9728:G9,9729:q8,9984:UZ,9985:p6,9986:b7,9987:A9},hU={33071:g6,33648:HZ,10497:F7},RY={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},BY={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},M7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YO={CUBICSPLINE:void 0,LINEAR:RZ,STEP:zW},LY={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function XO(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new o0({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:G7});return J.DefaultMaterial}function r7(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function v9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function HO(J,Q,$){let Z=!1,K=!1,W=!1;for(let U=0,N=Q.length;U<N;U++){let F=Q[U];if(F.POSITION!==void 0)Z=!0;if(F.NORMAL!==void 0)K=!0;if(F.COLOR_0!==void 0)W=!0;if(Z&&K&&W)break}if(!Z&&!K&&!W)return Promise.resolve(J);let Y=[],X=[],H=[];for(let U=0,N=Q.length;U<N;U++){let F=Q[U];if(Z){let G=F.POSITION!==void 0?$.getDependency("accessor",F.POSITION):J.attributes.position;Y.push(G)}if(K){let G=F.NORMAL!==void 0?$.getDependency("accessor",F.NORMAL):J.attributes.normal;X.push(G)}if(W){let G=F.COLOR_0!==void 0?$.getDependency("accessor",F.COLOR_0):J.attributes.color;H.push(G)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(H)]).then(function(U){let N=U[0],F=U[1],G=U[2];if(Z)J.morphAttributes.position=N;if(K)J.morphAttributes.normal=F;if(W)J.morphAttributes.color=G;return J.morphTargetsRelative=!0,J})}function UO(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,K=$.length;Z<K;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NO(J){let Q,$=J.extensions&&J.extensions[MJ.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+VY($.attributes);else Q=J.indices+":"+VY(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,K=J.targets.length;Z<K;Z++)Q+=":"+VY(J.targets[Z]);return Q}function VY(J){let Q="",$=Object.keys(J).sort();for(let Z=0,K=$.length;Z<K;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function MY(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function GO(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var FO=new QJ;class H5{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new KO,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,K=!1,W=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let Y=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);Z=$&&X?parseInt(X[1],10):-1,K=Y.indexOf("Firefox")>-1,W=K?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||K&&W<98)this.textureLoader=new fZ(this.options.manager);else this.textureLoader=new xZ(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Q$(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,K=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(W){return W._markDefs&&W._markDefs()}),Promise.all(this._invokeAll(function(W){return W.beforeRoot&&W.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(W){let Y={scene:W[0][Z.scene||0],scenes:W[0],animations:W[1],cameras:W[2],asset:Z.asset,parser:$,userData:{}};return r7(K,Y,Z),v9(Y,Z),Promise.all($._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,K=Q.length;Z<K;Z++){let W=Q[Z].joints;for(let Y=0,X=W.length;Y<X;Y++)J[W[Y]].isBone=!0}for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];if(W.mesh!==void 0){if(this._addNodeRef(this.meshCache,W.mesh),W.skin!==void 0)$[W.mesh].isSkinnedMesh=!0}if(W.camera!==void 0)this._addNodeRef(this.cameraCache,W.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),K=(W,Y)=>{let X=this.associations.get(W);if(X!=null)this.associations.set(Y,X);for(let[H,U]of W.children.entries())K(U,Y.children[H])};return K($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let K=J(Q[Z]);if(K)$.push(K)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(K){return K.loadNode&&K.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(K){return K.loadMesh&&K.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(K){return K.loadBufferView&&K.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(K){return K.loadMaterial&&K.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(K){return K.loadTexture&&K.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(K){return K.loadAnimation&&K.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(K){return K!=this&&K.getDependency&&K.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(K,W){return $.getDependency(J,W)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[MJ.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(K,W){$.load(B7.resolveURL(Q.uri,Z.path),K,void 0,function(){W(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,K=Q.byteOffset||0;return $.slice(K,K+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let W=RY[Z.type],Y=QQ[Z.componentType],X=Z.normalized===!0,H=new Y(Z.count*W);return Promise.resolve(new aJ(H,W,X))}let K=[];if(Z.bufferView!==void 0)K.push(this.getDependency("bufferView",Z.bufferView));else K.push(null);if(Z.sparse!==void 0)K.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),K.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(K).then(function(W){let Y=W[0],X=RY[Z.type],H=QQ[Z.componentType],U=H.BYTES_PER_ELEMENT,N=U*X,F=Z.byteOffset||0,G=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,E=Z.normalized===!0,O,B;if(G&&G!==N){let R=Math.floor(F/G),q="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+R+":"+Z.count,M=Q.cache.get(q);if(!M)O=new H(Y,R*G,Z.count*G/U),M=new d6(O,G/U),Q.cache.add(q,M);B=new X7(M,X,F%G/U,E)}else{if(Y===null)O=new H(Z.count*X);else O=new H(Y,F,Z.count*X);B=new aJ(O,X,E)}if(Z.sparse!==void 0){let R=RY.SCALAR,q=QQ[Z.sparse.indices.componentType],M=Z.sparse.indices.byteOffset||0,P=Z.sparse.values.byteOffset||0,V=new q(W[1],M,Z.sparse.count*R),L=new H(W[2],P,Z.sparse.count*X);if(Y!==null)B=new aJ(B.array.slice(),B.itemSize,B.normalized);B.normalized=!1;for(let C=0,A=V.length;C<A;C++){let D=V[C];if(B.setX(D,L[C*X]),X>=2)B.setY(D,L[C*X+1]);if(X>=3)B.setZ(D,L[C*X+2]);if(X>=4)B.setW(D,L[C*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}B.normalized=E}return B})}loadTexture(J){let Q=this.json,$=this.options,K=Q.textures[J].source,W=Q.images[K],Y=this.textureLoader;if(W.uri){let X=$.manager.getHandler(W.uri);if(X!==null)Y=X}return this.loadTextureImage(J,K,Y)}loadTextureImage(J,Q,$){let Z=this,K=this.json,W=K.textures[J],Y=K.images[Q],X=(Y.uri||Y.bufferView)+":"+W.sampler;if(this.textureCache[X])return this.textureCache[X];let H=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=W.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let F=(K.samplers||{})[W.sampler]||{};return U.magFilter=bU[F.magFilter]||q8,U.minFilter=bU[F.minFilter]||A9,U.wrapS=hU[F.wrapS]||F7,U.wrapT=hU[F.wrapT]||F7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==G9&&U.minFilter!==q8,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=H,H}loadImageSource(J,Q){let $=this,Z=this.json,K=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let W=Z.images[J],Y=self.URL||self.webkitURL,X=W.uri||"",H=!1;if(W.bufferView!==void 0)X=$.getDependency("bufferView",W.bufferView).then(function(N){H=!0;let F=new Blob([N],{type:W.mimeType});return X=Y.createObjectURL(F),X});else if(W.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(N){return new Promise(function(F,G){let E=F;if(Q.isImageBitmapLoader===!0)E=function(O){let B=new eJ(O);B.needsUpdate=!0,F(B)};Q.load(B7.resolveURL(N,K.path),E,void 0,G)})}).then(function(N){if(H===!0)Y.revokeObjectURL(X);return v9(N,W),N.userData.mimeType=W.mimeType||GO(W.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),N});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,Z){let K=this;return this.getDependency("texture",$.index).then(function(W){if(!W)return null;if($.texCoord!==void 0&&$.texCoord>0)W=W.clone(),W.channel=$.texCoord;if(K.extensions[MJ.KHR_TEXTURE_TRANSFORM]){let Y=$.extensions!==void 0?$.extensions[MJ.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=K.associations.get(W);W=K.extensions[MJ.KHR_TEXTURE_TRANSFORM].extendTexture(W,Y),K.associations.set(W,X)}}if(Z!==void 0)W.colorSpace=Z;return J[Q]=W,W})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,K=Q.attributes.color!==void 0,W=Q.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new u7,w8.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,X.sizeAttenuation=!1,this.cache.add(Y,X);$=X}else if(J.isLine){let Y="LineBasicMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new oQ,w8.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,this.cache.add(Y,X);$=X}if(Z||K||W){let Y="ClonedMaterial:"+$.uuid+":";if(Z)Y+="derivative-tangents:";if(K)Y+="vertex-colors:";if(W)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=$.clone(),K)X.vertexColors=!0;if(W)X.flatShading=!0;if(Z){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get($))}$=X}J.material=$}getMaterialType(){return o0}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,K=$.materials[J],W,Y={},X=K.extensions||{},H=[];if(X[MJ.KHR_MATERIALS_UNLIT]){let N=Z[MJ.KHR_MATERIALS_UNLIT];W=N.getMaterialType(),H.push(N.extendParams(Y,K,Q))}else{let N=K.pbrMetallicRoughness||{};if(Y.color=new f0(1,1,1),Y.opacity=1,Array.isArray(N.baseColorFactor)){let F=N.baseColorFactor;Y.color.setRGB(F[0],F[1],F[2],g8),Y.opacity=F[3]}if(N.baseColorTexture!==void 0)H.push(Q.assignTexture(Y,"map",N.baseColorTexture,J8));if(Y.metalness=N.metallicFactor!==void 0?N.metallicFactor:1,Y.roughness=N.roughnessFactor!==void 0?N.roughnessFactor:1,N.metallicRoughnessTexture!==void 0)H.push(Q.assignTexture(Y,"metalnessMap",N.metallicRoughnessTexture)),H.push(Q.assignTexture(Y,"roughnessMap",N.metallicRoughnessTexture));W=this._invokeOne(function(F){return F.getMaterialType&&F.getMaterialType(J)}),H.push(Promise.all(this._invokeAll(function(F){return F.extendMaterialParams&&F.extendMaterialParams(J,Y)})))}if(K.doubleSided===!0)Y.side=oJ;let U=K.alphaMode||LY.OPAQUE;if(U===LY.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===LY.MASK)Y.alphaTest=K.alphaCutoff!==void 0?K.alphaCutoff:0.5;if(K.normalTexture!==void 0&&W!==fJ){if(H.push(Q.assignTexture(Y,"normalMap",K.normalTexture)),Y.normalScale=new G0(1,1),K.normalTexture.scale!==void 0){let N=K.normalTexture.scale;Y.normalScale.set(N,N)}}if(K.occlusionTexture!==void 0&&W!==fJ){if(H.push(Q.assignTexture(Y,"aoMap",K.occlusionTexture)),K.occlusionTexture.strength!==void 0)Y.aoMapIntensity=K.occlusionTexture.strength}if(K.emissiveFactor!==void 0&&W!==fJ){let N=K.emissiveFactor;Y.emissive=new f0().setRGB(N[0],N[1],N[2],g8)}if(K.emissiveTexture!==void 0&&W!==fJ)H.push(Q.assignTexture(Y,"emissiveMap",K.emissiveTexture,J8));return Promise.all(H).then(function(){let N=new W(Y);if(K.name)N.name=K.name;if(v9(N,K),Q.associations.set(N,{materials:J}),K.extensions)r7(Z,N,K);return N})}createUniqueName(J){let Q=yJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function K(Y){return $[MJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,Q).then(function(X){return xU(X,Y,Q)})}let W=[];for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y],U=NO(H),N=Z[U];if(N)W.push(N.promise);else{let F;if(H.extensions&&H.extensions[MJ.KHR_DRACO_MESH_COMPRESSION])F=K(H);else F=xU(new vJ,H,Q);if(H.mode===a8.TRIANGLE_STRIP)F=F.then((G)=>OY(G,lQ));else if(H.mode===a8.TRIANGLE_FAN)F=F.then((G)=>OY(G,l6));Z[U]={primitive:H,promise:F},W.push(F)}}return Promise.all(W)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,K=$.meshes[J],W=K.primitives,Y=[];for(let X=0,H=W.length;X<H;X++){let U=W[X].material===void 0?XO(this.cache):this.getDependency("material",W[X].material);Y.push(U)}return Y.push(Q.loadGeometries(W)),Promise.all(Y).then(async function(X){let H=X.slice(0,X.length-1),U=X[X.length-1],N=[];for(let G=0,E=U.length;G<E;G++){let O=U[G],B=W[G],R,q=H[G];if(B.mode===a8.TRIANGLES||B.mode===a8.TRIANGLE_STRIP||B.mode===a8.TRIANGLE_FAN||B.mode===void 0){let M=K.isSkinnedMesh===!0,P=O.hasAttribute("skinIndex")&&O.hasAttribute("skinWeight");if(M&&P===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(R=M&&P?new CZ(O,q):new M0(O,q),R.isSkinnedMesh===!0)R.normalizeSkinWeights()}else if(B.mode===a8.LINES)R=new PZ(O,q);else if(B.mode===a8.LINE_STRIP)R=new n6(O,q);else if(B.mode===a8.LINE_LOOP)R=new IZ(O,q);else if(B.mode===a8.POINTS)R=new s6(O,q);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+B.mode);if(Object.keys(R.geometry.morphAttributes).length>0)UO(R,K);if(R.name=Q.createUniqueName(K.name||"mesh_"+J),v9(R,K),B.extensions)r7(Z,R,B);Q.assignFinalMaterial(R),N.push(R)}for(let G=0,E=N.length;G<E;G++)Q.associations.set(N[G],{meshes:J,primitives:G});if(N.length===1){if(K.extensions)r7(Z,N[0],K);return N[0]}let F=new SJ;if(K.extensions)r7(Z,F,K);Q.associations.set(F,{meshes:J});for(let G=0,E=N.length;G<E;G++)F.add(N[G]);return F})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new H8(T9.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new t9(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return v9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,K=Q.joints.length;Z<K;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let K=Z.pop(),W=Z,Y=[],X=[];for(let H=0,U=W.length;H<U;H++){let N=W[H];if(N){Y.push(N);let F=new QJ;if(K!==null)F.fromArray(K.array,H*16);X.push(F)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[H])}return new sQ(Y,X)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],K=Z.name?Z.name:"animation_"+J,W=[],Y=[],X=[],H=[],U=[];for(let N=0,F=Z.channels.length;N<F;N++){let G=Z.channels[N],E=Z.samplers[G.sampler],O=G.target,B=O.node,R=Z.parameters!==void 0?Z.parameters[E.input]:E.input,q=Z.parameters!==void 0?Z.parameters[E.output]:E.output;if(O.node===void 0)continue;W.push(this.getDependency("node",B)),Y.push(this.getDependency("accessor",R)),X.push(this.getDependency("accessor",q)),H.push(E),U.push(O)}return Promise.all([Promise.all(W),Promise.all(Y),Promise.all(X),Promise.all(H),Promise.all(U)]).then(function(N){let F=N[0],G=N[1],E=N[2],O=N[3],B=N[4],R=[];for(let M=0,P=F.length;M<P;M++){let V=F[M],L=G[M],C=E[M],A=O[M],D=B[M];if(V===void 0)continue;if(V.updateMatrix)V.updateMatrix();let I=$._createAnimationTracks(V,L,C,A,D);if(I)for(let c=0;c<I.length;c++)R.push(I[c])}let q=new f6(K,void 0,R);return v9(q,Z),q})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(K){let W=$._getNodeRef($.meshCache,Z.mesh,K);if(Z.weights!==void 0)W.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,H=Z.weights.length;X<H;X++)Y.morphTargetInfluences[X]=Z.weights[X]});return W})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],K=$._loadNodeShallow(J),W=[],Y=Z.children||[];for(let H=0,U=Y.length;H<U;H++)W.push($.getDependency("node",Y[H]));let X=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([K,Promise.all(W),X]).then(function(H){let U=H[0],N=H[1],F=H[2];if(F!==null)U.traverse(function(G){if(!G.isSkinnedMesh)return;G.bind(F,FO)});for(let G=0,E=N.length;G<E;G++)U.add(N[G]);if(U.userData.pivot!==void 0&&N.length>0){let G=U.userData.pivot,E=N[0];U.pivot=new _().fromArray(G),U.position.x-=G[0],U.position.y-=G[1],U.position.z-=G[2],E.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let K=Q.nodes[J],W=K.name?Z.createUniqueName(K.name):"",Y=[],X=Z._invokeOne(function(H){return H.createNodeMesh&&H.createNodeMesh(J)});if(X)Y.push(X);if(K.camera!==void 0)Y.push(Z.getDependency("camera",K.camera).then(function(H){return Z._getNodeRef(Z.cameraCache,K.camera,H)}));return Z._invokeAll(function(H){return H.createNodeAttachment&&H.createNodeAttachment(J)}).forEach(function(H){Y.push(H)}),this.nodeCache[J]=Promise.all(Y).then(function(H){let U;if(K.isBone===!0)U=new cQ;else if(H.length>1)U=new SJ;else if(H.length===1)U=H[0];else U=new wJ;if(U!==H[0])for(let N=0,F=H.length;N<F;N++)U.add(H[N]);if(K.name)U.userData.name=K.name,U.name=W;if(v9(U,K),K.extensions)r7($,U,K);if(K.matrix!==void 0){let N=new QJ;N.fromArray(K.matrix),U.applyMatrix4(N)}else{if(K.translation!==void 0)U.position.fromArray(K.translation);if(K.rotation!==void 0)U.quaternion.fromArray(K.rotation);if(K.scale!==void 0)U.scale.fromArray(K.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(K.mesh!==void 0&&Z.meshCache.refs[K.mesh]>1){let N=Z.associations.get(U);Z.associations.set(U,{...N})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,K=new SJ;if($.name)K.name=Z.createUniqueName($.name);if(v9(K,$),$.extensions)r7(Q,K,$);let W=$.nodes||[],Y=[];for(let X=0,H=W.length;X<H;X++)Y.push(Z.getDependency("node",W[X]));return Promise.all(Y).then(function(X){for(let U=0,N=X.length;U<N;U++){let F=X[U];if(F.parent!==null)K.add(nZ(F));else K.add(F)}let H=(U)=>{let N=new Map;for(let[F,G]of Z.associations)if(F instanceof w8||F instanceof eJ)N.set(F,G);return U.traverse((F)=>{let G=Z.associations.get(F);if(G!=null)N.set(F,G)}),N};return Z.associations=H(K),K})}_createAnimationTracks(J,Q,$,Z,K){let W=[],Y=J.name?J.name:J.uuid,X=[];function H(G){if(G.morphTargetInfluences)X.push(G.name?G.name:G.uuid)}if(M7[K.path]===M7.weights){if(H(J),J.isGroup)J.children.forEach(H)}else X.push(Y);let U;switch(M7[K.path]){case M7.weights:U=L7;break;case M7.rotation:U=V7;break;case M7.translation:case M7.scale:U=i7;break;default:switch($.itemSize){case 1:U=L7;break;case 2:case 3:default:U=i7;break}break}let N=Z.interpolation!==void 0?YO[Z.interpolation]:RZ,F=this._getArrayFromAccessor($);for(let G=0,E=X.length;G<E;G++){let O=new U(X[G]+"."+M7[K.path],Q.array,F,N);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(O);W.push(O)}return W}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=MY(Q.constructor),Z=new Float32Array(Q.length);for(let K=0,W=Q.length;K<W;K++)Z[K]=Q[K]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof V7?X5:CY)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function EO(J,Q,$){let Z=Q.attributes,K=new A8;if(Z.POSITION!==void 0){let X=$.json.accessors[Z.POSITION],H=X.min,U=X.max;if(H!==void 0&&U!==void 0){if(K.set(new _(H[0],H[1],H[2]),new _(U[0],U[1],U[2])),X.normalized){let N=MY(QQ[X.componentType]);K.min.multiplyScalar(N),K.max.multiplyScalar(N)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let W=Q.targets;if(W!==void 0){let X=new _,H=new _;for(let U=0,N=W.length;U<N;U++){let F=W[U];if(F.POSITION!==void 0){let G=$.json.accessors[F.POSITION],E=G.min,O=G.max;if(E!==void 0&&O!==void 0){if(H.setX(Math.max(Math.abs(E[0]),Math.abs(O[0]))),H.setY(Math.max(Math.abs(E[1]),Math.abs(O[1]))),H.setZ(Math.max(Math.abs(E[2]),Math.abs(O[2]))),G.normalized){let B=MY(QQ[G.componentType]);H.multiplyScalar(B)}X.max(H)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}K.expandByVector(X)}J.boundingBox=K;let Y=new p8;K.getCenter(Y.center),Y.radius=K.min.distanceTo(K.max)/2,J.boundingSphere=Y}function xU(J,Q,$){let Z=Q.attributes,K=[];function W(Y,X){return $.getDependency("accessor",Y).then(function(H){J.setAttribute(X,H)})}for(let Y in Z){let X=BY[Y]||Y.toLowerCase();if(X in J.attributes)continue;K.push(W(Z[Y],X))}if(Q.indices!==void 0&&!J.index){let Y=$.getDependency("accessor",Q.indices).then(function(X){J.setIndex(X)});K.push(Y)}if(FJ.workingColorSpace!==g8&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${FJ.workingColorSpace}" not supported.`);return v9(J,Q),EO(J,Q,$),Promise.all(K).then(function(){return Q.targets!==void 0?HO(J,Q.targets,$):J})}var U5={type:"change"},IY={type:"start"},G5={type:"end"},sZ=new q7,N5=new n8,qO=Math.cos(70*T9.DEG2RAD),G8=new _,y8=2*Math.PI,dJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},PY=0.000001;class zY extends mZ{constructor(J,Q=null){super(J,Q);if(this.state=dJ.NONE,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:U7.ROTATE,MIDDLE:U7.DOLLY,RIGHT:U7.PAN},this.touches={ONE:N7.ROTATE,TWO:N7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new _,this._lastQuaternion=new IJ,this._lastTargetPosition=new _,this._quat=new IJ().setFromUnitVectors(J.up,new _(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new K$,this._sphericalDelta=new K$,this._scale=1,this._panOffset=new _,this._rotateStart=new G0,this._rotateEnd=new G0,this._rotateDelta=new G0,this._panStart=new G0,this._panEnd=new G0,this._panDelta=new G0,this._dollyStart=new G0,this._dollyEnd=new G0,this._dollyDelta=new G0,this._dollyDirection=new _,this._mouse=new G0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RO.bind(this),this._onPointerDown=OO.bind(this),this._onPointerUp=LO.bind(this),this._onContextMenu=PO.bind(this),this._onMouseWheel=BO.bind(this),this._onKeyDown=MO.bind(this),this._onTouchStart=kO.bind(this),this._onTouchMove=CO.bind(this),this._onMouseDown=VO.bind(this),this._onMouseMove=DO.bind(this),this._interceptControlDown=IO.bind(this),this._interceptControlUp=zO.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=dJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(U5),this.update(),this.state=dJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(G8.copy(Q).sub(this.target),G8.applyQuaternion(this._quat),this._spherical.setFromVector3(G8),this.autoRotate&&this.state===dJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite($)&&isFinite(Z)){if($<-Math.PI)$+=y8;else if($>Math.PI)$-=y8;if(Z<-Math.PI)Z+=y8;else if(Z>Math.PI)Z-=y8;if($<=Z)this._spherical.theta=Math.max($,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+Z)/2?Math.max($,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let K=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),K=W!=this._spherical.radius}if(G8.setFromSpherical(this._spherical),G8.applyQuaternion(this._quatInverse),Q.copy(this.target).add(G8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let Y=G8.length();W=this._clampDistance(Y*this._scale);let X=Y-W;this.object.position.addScaledVector(this._dollyDirection,X),this.object.updateMatrixWorld(),K=!!X}else if(this.object.isOrthographicCamera){let Y=new _(this._mouse.x,this._mouse.y,0);Y.unproject(this.object);let X=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),K=X!==this.object.zoom;let H=new _(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(Y),this.object.updateMatrixWorld(),W=G8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(sZ.origin.copy(this.object.position),sZ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sZ.direction))<qO)this.object.lookAt(this.target);else N5.setFromNormalAndCoplanarPoint(this.object.up,this.target),sZ.intersectPlane(N5,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),K=!0}if(this._scale=1,this._performCursorZoom=!1,K||this._lastPosition.distanceToSquared(this.object.position)>PY||8*(1-this._lastQuaternion.dot(this.object.quaternion))>PY||this._lastTargetPosition.distanceToSquared(this.target)>PY)return this.dispatchEvent(U5),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return y8/60*this.autoRotateSpeed*J;else return y8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){G8.setFromMatrixColumn(Q,0),G8.multiplyScalar(-J),this._panOffset.add(G8)}_panUp(J,Q){if(this.screenSpacePanning===!0)G8.setFromMatrixColumn(Q,1);else G8.setFromMatrixColumn(Q,0),G8.crossVectors(this.object.up,G8);G8.multiplyScalar(J),this._panOffset.add(G8)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;G8.copy(Z).sub(this.target);let K=G8.length();K*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*K/$.clientHeight,this.object.matrix),this._panUp(2*Q*K/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),Z=J-$.left,K=Q-$.top,W=$.width,Y=$.height;this._mouse.x=Z/W*2-1,this._mouse.y=-(K/Y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(y8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(y8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._rotateStart.set($,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panStart.set($,Z)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyStart.set(0,K)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),K=0.5*(J.pageY+$.y);this._rotateEnd.set(Z,K)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(y8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(y8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panEnd.set($,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyEnd.set(0,K),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,Y=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,Y)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new G0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function OO(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function RO(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function LO(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(G5),this.state=dJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function VO(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case U7.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=dJ.DOLLY;break;case U7.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=dJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=dJ.ROTATE}break;case U7.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=dJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=dJ.PAN}break;default:this.state=dJ.NONE}if(this.state!==dJ.NONE)this.dispatchEvent(IY)}function DO(J){switch(this.state){case dJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case dJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case dJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function BO(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==dJ.NONE)return;J.preventDefault(),this.dispatchEvent(IY),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(G5)}function MO(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function kO(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case N7.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=dJ.TOUCH_ROTATE;break;case N7.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=dJ.TOUCH_PAN;break;default:this.state=dJ.NONE}break;case 2:switch(this.touches.TWO){case N7.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=dJ.TOUCH_DOLLY_PAN;break;case N7.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=dJ.TOUCH_DOLLY_ROTATE;break;default:this.state=dJ.NONE}break;default:this.state=dJ.NONE}if(this.state!==dJ.NONE)this.dispatchEvent(IY)}function CO(J){switch(this._trackPointer(J),this.state){case dJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case dJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case dJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case dJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=dJ.NONE}}function PO(J){if(this.enabled===!1)return;J.preventDefault()}function IO(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function zO(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var G$=new _;function r8(J,Q,$,Z,K,W){let Y=2*Math.PI*K/4,X=Math.max(W-2*K,0),H=Math.PI/4;G$.copy(Q),G$[Z]=0,G$.normalize();let U=0.5*Y/(Y+X),N=1-G$.angleTo(J)/H;if(Math.sign(G$[$])===1)return N*U;else return X/(Y+X)+U+U*(1-N)}class _8 extends _J{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let Y=this.toNonIndexed();this.index=null,this.attributes.position=Y.attributes.position,this.attributes.normal=Y.attributes.normal,this.attributes.uv=Y.attributes.uv;let X=new _,H=new _,U=new _(J,Q,$).divideScalar(2).subScalar(K),N=this.attributes.position.array,F=this.attributes.normal.array,G=this.attributes.uv.array,E=N.length/6,O=new _,B=0.5/W;for(let R=0,q=0;R<N.length;R+=3,q+=2)switch(X.fromArray(N,R),H.copy(X),H.x-=Math.sign(H.x)*B,H.y-=Math.sign(H.y)*B,H.z-=Math.sign(H.z)*B,H.normalize(),N[R+0]=U.x*Math.sign(X.x)+H.x*K,N[R+1]=U.y*Math.sign(X.y)+H.y*K,N[R+2]=U.z*Math.sign(X.z)+H.z*K,F[R+0]=H.x,F[R+1]=H.y,F[R+2]=H.z,Math.floor(R/E)){case 0:O.set(1,0,0),G[q+0]=r8(O,H,"z","y",K,$),G[q+1]=1-r8(O,H,"y","z",K,Q);break;case 1:O.set(-1,0,0),G[q+0]=1-r8(O,H,"z","y",K,$),G[q+1]=1-r8(O,H,"y","z",K,Q);break;case 2:O.set(0,1,0),G[q+0]=1-r8(O,H,"x","z",K,J),G[q+1]=r8(O,H,"z","x",K,$);break;case 3:O.set(0,-1,0),G[q+0]=1-r8(O,H,"x","z",K,J),G[q+1]=1-r8(O,H,"z","x",K,$);break;case 4:O.set(0,0,1),G[q+0]=1-r8(O,H,"x","y",K,J),G[q+1]=1-r8(O,H,"y","x",K,Q);break;case 5:O.set(0,0,-1),G[q+0]=r8(O,H,"x","y",K,J),G[q+1]=1-r8(O,H,"y","x",K,Q);break}}static fromJSON(J){return new _8(J.width,J.height,J.depth,J.segments,J.radius)}}var D0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0033,pipColumnSpacing:0.0072,pipRowSpacing:0.0076,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25,boardLimit:0.27},q9=[[0,D0.seatDistance,Math.PI],[D0.seatDistance,0,-Math.PI/2],[0,-D0.seatDistance,0],[-D0.seatDistance,0,Math.PI/2]];function _Y(J){let Q=J.vertical?D0.tileWidth:D0.tileLength,$=J.vertical?D0.tileLength:D0.tileWidth;return{left:J.x-Q/2,right:J.x+Q/2,top:J.z-$/2,bottom:J.z+$/2}}var AO=D0.boardLimit,_O=D0.feltWidth/2-0.022;function TY(J,Q,$=AO){let Z=_Y(J);if(Math.max(Math.abs(Z.left),Math.abs(Z.right),Math.abs(Z.top),Math.abs(Z.bottom))>$+0.00000001)return!1;return Q.every((K)=>{let W=_Y(K);return Z.right<=W.left-0.0015||Z.left>=W.right+0.0015||Z.bottom<=W.top-0.0015||Z.top>=W.bottom+0.0015})}function F5(J,Q,$){let{tileLength:Z,tileWidth:K,tileGap:W}=D0,Y=Q.x===Q.y,X=(Y?K:Z)/2,H=J.tile,U=[],N=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let F=0;F<N.length;F++){let[G,E]=N[F],O=F!==0,B=(H.isDouble?K:Z)/2,R=(H.isDouble?Z:K)/2,q=H.x+J.dx*(O?H.isDouble?0:Z/4:B),M=H.z+J.dz*(O?H.isDouble?0:Z/4:B),P=O?[0,Z/8,-Z/8]:[0];for(let V of P){let L=Math.atan2(-E,G)+($==="left"?Math.PI:0)+(Y?Math.PI/2:0);U.push({id:Q.id,x:q+G*((O?R:0)+W+X)+J.dx*V,z:M+E*((O?R:0)+W+X)+J.dz*V,yaw:L,vertical:Math.abs(Math.sin(L))>0.5,isDouble:Y,dx:G,dz:E,side:$})}}return U}function AY(J,Q,$,Z){let K={id:"future",x:0,y:Z?0:1};return F5({tile:J,dx:J.dx,dz:J.dz},K,$).some((W)=>TY(W,Q))}function E5(J,Q=[]){return O5(J,Q).placements}function q5(J,Q=[]){let $=O5(J,Q);if(!$.ends)return[];return["left","right"].map((Z)=>{let K=$.ends[Z],W=K.tile,Y=_Y(W),X=Math.abs(K.dx)*(Y.right-Y.left)/2+Math.abs(K.dz)*(Y.bottom-Y.top)/2,H=X+0.013;return{x:W.x+K.dx*H,z:W.z+K.dz*H,dx:K.dx,dz:K.dz}})}function O5(J,Q){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return{placements:[],ends:null};let $=new Map(J.map((G)=>[G.id,G])),Z=Q.filter((G)=>G.type==="play"&&G.tile&&$.has(G.tile)),K=$.get(Z[0]?.tile||"")||J[0],W=J.findIndex((G)=>G.id===K.id),Y=K.x===K.y,X={id:K.id,x:0,z:0,yaw:Y?Math.PI/2:0,vertical:Y,isDouble:Y,dx:1,dz:0,side:"root"},H=[X],U=new Map([[X.id,X]]),N={left:{tile:X,dx:-1,dz:0},right:{tile:X,dx:1,dz:0}},F=Z.length===J.length?Z.slice(1):[...J.slice(0,W).reverse().map((G)=>({type:"play",tile:G.id,side:"left"})),...J.slice(W+1).map((G)=>({type:"play",tile:G.id,side:"right"}))];for(let G of F){let E=$.get(G.tile);if(U.has(E.id))continue;let O=G.side==="left"?"left":G.side==="right"?"right":J.findIndex((M)=>M.id===E.id)<W?"left":"right",B=F5(N[O],E,O),R=B.filter((M)=>TY(M,H));if(!R.length)R=B.filter((M)=>TY(M,H,_O));let q=R.find((M)=>AY(M,[...H,M],O,!1)&&AY(M,[...H,M],O,!0))||R.find((M)=>AY(M,[...H,M],O,!1))||R[0];if(!q)throw Error(`No safe placement for ${E.id} after ${H.length} tiles`);H.push(q),U.set(E.id,q),N[O]={tile:q,dx:q.dx,dz:q.dz}}return{placements:J.map((G)=>U.get(G.id)),ends:N}}function R5(J,Q,$=!1){if($)return{breath:0,headYaw:0,headNod:0};let Z=J*2.173+0.43;return{breath:0.0055*Math.sin(Q*(0.78+J*0.093)+Z),headYaw:0.087*Math.sin(Q*(0.213+J*0.037)+Z)+0.028*Math.sin(Q*(0.487+J*0.029)+Z*1.91),headNod:0.009*Math.sin(Q*(0.267+J*0.035)+Z*0.71)}}var L5=new _(1,0,0),R9=new _(0,1,0),SY=new IJ;function bY(J){let Q=[];return J.traverse(($)=>{if($.isBone)Q.push({bone:$,position:$.position.clone(),quaternion:$.quaternion.clone(),scale:$.scale.clone()})}),Q}var f9=new _,O9=new _,b9=new _,t7=new _,J7=new _,t8=new _,e7=new _,J6=new _,$6=new IJ,L9=new IJ,eZ=new IJ,tZ=new IJ,R$=(J)=>Math.min(1,Math.max(-1,J)),Z6=(J,Q,$)=>Math.min($,Math.max(Q,J)),V9=(J)=>J*J*(3-2*J);function Z8(J,Q){J.getWorldQuaternion(L9),J.parent.getWorldQuaternion(eZ),J.quaternion.copy(eZ.invert()).multiply(Q).multiply(L9),J.updateMatrixWorld(!0)}var T8=new _,J9=new _;function TO(J){J.holder.getWorldQuaternion(tZ),T8.set(1,0,0).applyQuaternion(tZ),J9.set(0,0,1).applyQuaternion(tZ)}function vY(J,Q,$,Z,K){return K.set(Q,$,Z).applyMatrix4(J.holder.matrixWorld)}function V5(J,Q,$,Z){return Z.set(J,Q,$).applyQuaternion(tZ).normalize()}var SO=0.965;function wO(J,Q,$){let{brazo:Z,antebrazo:K,mano:W}=J;if(!Z||!K||!W||!Z.parent||!K.parent)return;Z.getWorldPosition(f9),K.getWorldPosition(O9),W.getWorldPosition(b9);let Y=f9.distanceTo(O9),X=O9.distanceTo(b9);if(Y<0.00001||X<0.00001)return;let H=Z6(f9.distanceTo(Q),Math.abs(Y-X)+0.002,(Y+X)*SO);if(J7.subVectors(O9,f9),t8.subVectors(b9,O9),e7.crossVectors(J7,t8),e7.lengthSq()<0.0000000001)e7.copy(T8);else e7.normalize();let U=Math.acos(R$((Y*Y+X*X-f9.distanceToSquared(b9))/(2*Y*X))),F=Math.acos(R$((Y*Y+X*X-H*H)/(2*Y*X)))-U;if(Z8(K,$6.setFromAxisAngle(e7,F)),W.getWorldPosition(b9),Math.abs(f9.distanceTo(b9)-H)>0.001)Z8(K,$6.setFromAxisAngle(e7,-2*F)),W.getWorldPosition(b9);if(J7.subVectors(b9,f9).normalize(),t8.subVectors(Q,f9),t8.lengthSq()<0.0000000001)return;if(t8.normalize(),Z8(Z,$6.setFromUnitVectors(J7,t8)),!$)return;if(K.getWorldPosition(O9),J6.subVectors(O9,f9),J6.addScaledVector(t8,-J6.dot(t8)),t7.subVectors($,f9),t7.addScaledVector(t8,-t7.dot(t8)),J6.lengthSq()<0.0000000001||t7.lengthSq()<0.0000000001)return;J6.normalize(),t7.normalize();let G=Math.atan2(e7.crossVectors(J6,t7).dot(t8),R$(J6.dot(t7)));Z8(Z,$6.setFromAxisAngle(t8,G))}var f8=new _,KQ=new _,F$=new _,jO=new QJ,wY=new IJ,E$=new IJ;function yO(J,Q,$){let{antebrazo:Z,mano:K}=J;if(!Z||!K||!K.parent)return;if(f8.copy(Q).normalize(),F$.crossVectors(f8,$),F$.lengthSq()<0.00000001)return;F$.normalize(),KQ.crossVectors(F$,f8),wY.setFromRotationMatrix(jO.makeBasis(F$,f8,KQ)),Z.getWorldPosition(O9),K.getWorldPosition(b9),J7.subVectors(b9,O9).normalize(),K.getWorldQuaternion(L9),E$.copy(wY).multiply(L9.invert());let W=E$.x*J7.x+E$.y*J7.y+E$.z*J7.z,Y=2*Math.atan2(W,E$.w);if(Number.isFinite(Y))Z8(Z,$6.setFromAxisAngle(J7,Z6(Y*0.5,-1.2,1.2)));K.parent.getWorldQuaternion(eZ),K.quaternion.copy(eZ.invert()).multiply(wY),K.updateMatrixWorld(!0)}var vO=new _;function fO(J,Q,$){let Z=Q.lado==="Left"?1:-1,K=J.index*1.7,W=D0.seatDistance-D0.tableWidth/2;return vY(J,Z*(0.225+Math.sin(K)*0.01)+Math.sin($*0.23+K)*0.004,D0.surfaceY+0.026,W+(Z>0?0.035:0.06)+Math.cos(K*1.3)*0.012+Math.sin($*0.17+K*2)*0.004,vO)}var bO=new _,$Q=new _,fY=new _,iZ=new _,hO=0.045,xO=0.05,gO=0.12,pO=0.14,mO=0.45,lO=4;function D5(J,Q,$){return iZ.subVectors(Q,J.holder.getWorldPosition(fY)),iZ.y=0,iZ.normalize(),$.copy(Q).addScaledVector(iZ,-xO).setY(Q.y+hO)}function uO(J,Q,$){let Z=J.jugada;if(!Z)return null;if(Q-Z.t0>lO)return J.jugada=null,null;let K=Z.anim;if(K.elapsed<K.duration)return D5(J,Z.obj.position,$Q),$Q.lerpVectors($,$Q,V9(Z6(K.elapsed/gO,0,1)));if(Z.aterrizo==null)Z.aterrizo=Q;let W=Q-Z.aterrizo;D5(J,Z.hasta,$Q);let Y=K.golpe?0.7:pO;if(W<Y)return $Q;let X=(W-Y)/mO;if(X>=1)return J.jugada=null,null;return $Q.lerp($,V9(X))}var LJ=[1,1.9,3.3,4.3,5.2],B5=-1e9;function dO(J,Q,$){let Z=J.bebida;if(!Z)return null;if(J.trago){let W=J.trago.fijo??Q-J.trago.t0;if(W<0||W>=LJ[4]||J.jugada)return J.trago=null,z5(Z),J.sed=Q+90+Math.random()*150,null;return W}if(!$||!$.dt)return null;if(J.sed==null)return J.sed=Q+20+Math.random()*100,null;if(Q<J.sed||Q-B5<20)return null;let K=J.index;if(J.jugada||$.jugando&&$.turno===K||$.habla.has(K)||$.fin&&Q-$.fin.t<6)return J.sed=Q+3+Math.random()*8,null;return B5=Q,J.trago={t0:Q},0}function z5(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var e9=new _,Q6=new _,ZQ=new _,q$=new _,M5=new _;function k5(J,Q,$,Z){let K=J.bebida;if(ZQ.copy(J9).addScaledVector(R9,0.25).normalize(),q$.copy(J9).multiplyScalar(0.55).addScaledVector(R9,0.8).normalize(),Q6.copy(K.home),Q6.y+=K.alto,Q6.addScaledVector(T8,-(K.radio+0.015)).addScaledVector(ZQ,-0.03),J.bocaMundo)J.bocaMundo(e9),e9.addScaledVector(J9,0.006);else J.front.getWorldPosition(e9),e9.y-=0.075,e9.addScaledVector(J9,0.012);let W=K.inclina;M5.copy(R9).multiplyScalar(Math.cos(W)).addScaledVector(J9,-Math.sin(W)),e9.addScaledVector(M5,-K.boca).addScaledVector(T8,-(K.radio+0.015)).addScaledVector(q$,-0.03);let Y;if(Q<LJ[0])Z.lerpVectors($,Q6,V9(Q/LJ[0])),Y=ZQ;else if(Q<LJ[1]){let X=V9((Q-LJ[0])/(LJ[1]-LJ[0]));Z.lerpVectors(Q6,e9,X),Y=ZQ.lerp(q$,X).normalize()}else if(Q<LJ[2])Z.copy(e9),Y=q$;else if(Q<LJ[3]){let X=V9((Q-LJ[2])/(LJ[3]-LJ[2]));Z.lerpVectors(e9,Q6,X),Y=q$.lerp(ZQ,X).normalize()}else Z.lerpVectors(Q6,$,V9((Q-LJ[3])/(LJ[4]-LJ[3]))),Y=ZQ;return Y}var C5=new _,P5=new _,I5=new _;function cO(J,Q){let $=J.bebida,Z=J.brazos[1].mano;if(Q<LJ[0]||Q>=LJ[3]){z5($);return}Z.getWorldQuaternion(L9),Z.getWorldPosition(JK),C5.set(0,0,1).applyQuaternion(L9),P5.set(0,1,0).applyQuaternion(L9);let K=Q<LJ[1]?V9((Q-LJ[0])/(LJ[1]-LJ[0])):Q<LJ[2]?1:1-V9((Q-LJ[2])/(LJ[3]-LJ[2]));$.group.quaternion.setFromAxisAngle(T8,-$.inclina*K),I5.set(0,1,0).applyQuaternion($.group.quaternion),$.group.position.copy(JK).addScaledVector(C5,$.radio+0.015).addScaledVector(P5,0.03).addScaledVector(I5,-$.alto)}function nO(J,Q,$){let Z=J.cara;if(!Z)return 0;if(J.proxParpadeo==null)J.proxParpadeo=Q+1+Math.random()*4;if(Q>=J.proxParpadeo)J.parpadeoT0=Q,J.proxParpadeo=Q+(Math.random()<0.15?0.32:2+Math.random()*4);let K=Q-(J.parpadeoT0??-9),W=K<0?0:K<0.06?K/0.06:K<0.09?1:K<0.16?1-(K-0.09)/0.07:0;if(J.caraFija){let U=J.caraFija,N=Z.mesh.morphTargetInfluences;if(N)N[Z.iP]=U.p*0.85,N[Z.iS]=U.s;return J.parpadeo=U.p,U.p}let Y=J.index,X=0;if($?.fin&&$.fin.team!=null&&Q-$.fin.t<5&&Q>=$.fin.t)X=Y%2===$.fin.team?0.95:-0.7;else if($?.habla?.has(Y))X=$.hablaTipo?.get(Y)==="win"?0.85:0.2;else{if(J.casual==null)J.casual=Q+8+Math.random()*30;if(Q>J.casual+2.5)J.casual=Q+15+Math.random()*45;if(Q>=J.casual)X=0.45}J.sonrisa=(J.sonrisa??0)+(X-(J.sonrisa??0))*(1-Math.exp(-($?.dt||0.016)*3.5));let H=Z.mesh.morphTargetInfluences;if(H)H[Z.iP]=W*0.85,H[Z.iS]=J.sonrisa;return J.parpadeo=W,W}function sO(J,Q){let $=J.index,Z=0.23+$%4*0.012,K=Q*Z*Math.PI*2+$*1.9,W=Math.sin(K);return{b:W>0?W:W*0.7,balanceo:Math.sin(Q*0.11+$*2.3)*0.022+Math.sin(Q*0.29+$)*0.008,ladeo:Math.sin(Q*0.07+$*1.3)*0.014}}var jY=new _,oZ=new _,e8=new _,k7=new _,D9=new _,v8=new IJ,aZ=(J)=>{let Q=Math.sin(J*127.1+311.7)*43758.5453;return Q-Math.floor(Q)};function iO(J,Q,$,Z){let K=J.index;if(K>=4||!$)return $?.foco&&Q-$.foco.t<2.5?Z.copy($.foco.p):Z.set(0,D0.surfaceY,0);if($.fin&&Q-$.fin.t<5){if($.fin.team!=null&&K%2===$.fin.team&&$.cabezas[(K+2)%4])return Z.copy($.cabezas[(K+2)%4]);return vY(J,0,D0.surfaceY,D0.seatDistance-D0.rackRadius,Z)}if(J.trago&&J.bebida){let X=J.trago.fijo??Q-J.trago.t0;if(X<1.1||X>3.4&&X<4.3)return Z.copy(J.bebida.home);if(X<=3.4)return J.head.getWorldPosition(Z),Z.addScaledVector(J9,1).addScaledVector(R9,-0.15)}if($.foco&&Q-$.foco.t<1.4)return Z.copy($.foco.p);for(let X of $.habla)if(X!==K&&$.cabezas[X])return Z.copy($.cabezas[X]);if($.jugando&&$.turno===K){let X=Math.floor(Q/1.3);return vY(J,(aZ(X+K*9)-0.5)*0.12,D0.surfaceY+0.02,D0.seatDistance-D0.rackRadius+0.02,Z)}let W=Math.floor((Q+K*1.37)/(2.2+K*0.35)),Y=aZ(W*4+K);if($.jugando&&Y<0.45&&$.cabezas[$.turno]&&$.turno!==K)return Z.copy($.cabezas[$.turno]);if(Y<0.62&&$.cabezas[(K+2)%4])return Z.copy($.cabezas[(K+2)%4]);if(!$.jugando&&Y<0.85&&$.cabezas[(K+1+W%2*2)%4])return Z.copy($.cabezas[(K+1+W%2*2)%4]);return Z.set((aZ(W+7)-0.5)*0.2,D0.surfaceY,(aZ(W+3)-0.5)*0.2)}function oO(J,Q,$){let{head:Z,neck:K,front:W}=J;if(!Z||!W)return;if(iO(J,Q,$,jY),!J.mirada||!$?.dt)J.mirada=(J.mirada||new _).copy(jY);else J.mirada.lerp(jY,1-Math.exp(-$.dt*5.5));for(let[Y,X]of[[K,0.4],[Z,1]]){if(!Y)continue;if(Z.getWorldPosition(oZ),W.getWorldPosition(e8),e8.sub(oZ),e8.lengthSq()<0.0000000001)return;if(e8.normalize(),k7.subVectors(J.mirada,oZ),k7.lengthSq()<0.00000001)return;k7.normalize();let H=Z6(Math.atan2(e8.z*k7.x-e8.x*k7.z,e8.x*k7.x+e8.z*k7.z),-1.25,1.25)*X;if(Z8(Y,$6.setFromAxisAngle(R9,H)),W.getWorldPosition(e8),e8.sub(oZ).normalize(),D9.crossVectors(e8,R9),D9.lengthSq()<0.00000001)continue;D9.normalize();let U=Z6(Math.asin(R$(k7.y))-Math.asin(R$(e8.y)),-0.75,0.55)*X;Z8(Y,$6.setFromAxisAngle(D9,U))}}var aO=0.23,rO=[["lomo",0.4],["spine",0.34],["chest",0.26]],UD=new IJ;function tO(J,Q,$=0){if(!J.spine||!J.spine.parent)return;if(D9.copy(T8),J.hips&&J.lomo)for(let[Z,K]of rO){let W=J[Z];if(!W)continue;Z8(W,v8.setFromAxisAngle(D9,Q*K))}else Z8(J.spine,v8.setFromAxisAngle(D9,Q));if($)Z8(J.spine,v8.setFromAxisAngle(R9,$))}var rZ=new _,yY=new _,O$=new _,JK=new _;function QK(J,Q,$=!1,Z=null){for(let O of J.pose)O.bone.position.copy(O.position),O.bone.quaternion.copy(O.quaternion),O.bone.scale.copy(O.scale);J.holder.updateMatrixWorld(!0),TO(J);let K=R5(J.index,Q,$);if(J.spine)J.spine.quaternion.multiply(SY.setFromAxisAngle(L5,K.breath));let W=!$,Y=W?sO(J,Q):{b:0,balanceo:0,ladeo:0},X=J.index,H=X<4&&J.brazos,U=0,N=0;if(H&&Z?.fin&&Z.fin.team!=null){let O=Q-Z.fin.t;if(O>=0&&O<5)N=Math.sin(Math.min(1,O/0.5)*Math.PI/2)*(O>4?5-O:1),U+=(X%2===Z.fin.team?-0.1:0.07)*N}if(H&&Z?.jugando&&Z.turno===X)U+=0.04;let F=H&&W&&J.front?dO(J,Q,Z):null,G=[];if(H)for(let O of J.brazos){let B=bO.copy(fO(J,O,Q)),R=O.lado==="Right"?uO(J,Q,B):null,q=!!R,M=null;if(!R&&F!=null&&O.lado==="Right")R=fY.set(0,0,0),M=k5(J,F,B,R).clone();if(R=(R||B).clone(),!q&&W&&Z?.habla?.has(X)&&O.lado==="Left")J.gesto=Math.min(1,(J.gesto||0)+(Z.dt||0)*3);else if(O.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(Z?.dt||1)*2);if(O.lado==="Left"&&J.gesto>0){let P=V9(J.gesto);R.addScaledVector(J9,0.06*P).addScaledVector(T8,-0.07*P),R.y+=0.07*P+Math.sin(Q*5.2)*0.012*P}if(O.lado==="Right"&&!q&&N&&X%2===Z.fin.team){let P=Q-Z.fin.t;if(P<1.1)R.y+=Math.max(0,Math.sin(Math.min(1,P/0.9)*Math.PI))*0.13}G.push({brazo:O,o:R,jugando:q,dedos:M,reposo:B.clone()})}let E=0;if(H){let O=G.find((B)=>B.jugando);if(O&&O.brazo.brazo){J.holder.worldToLocal(O$.copy(O.o));let B=Math.hypot(O$.x,O$.z-0.12);U+=Z6((B-0.42)/0.55,0,0.34),E=Z6(Math.atan2(O$.x,O$.z)*0.3,-0.3,0.3)}}if(tO(J,aO*(J.brazos?1:0.6)+U,E),F!=null){let O=F<LJ[1]?Math.sin(Math.min(1,F/LJ[0])*Math.PI/2)*(1-V9(Math.max(0,F-LJ[0])/(LJ[1]-LJ[0]))):F>LJ[2]?Math.sin(Math.min(1,(F-LJ[2])/(LJ[3]-LJ[2]))*Math.PI):0;if(J.spine)Z8(J.spine,v8.setFromAxisAngle(J9,0.16*O))}if(W){if(J.spine)Z8(J.spine,v8.setFromAxisAngle(R9,Y.balanceo));if(J.spine)Z8(J.spine,v8.setFromAxisAngle(J9,Y.ladeo));if(J.chest)Z8(J.chest,v8.setFromAxisAngle(T8,-0.018*Y.b));if(J.hombros){for(let[O,B]of J.hombros)if(B)Z8(B,v8.setFromAxisAngle(J9,O*0.03*(Y.b+0.3)))}}if(oO(J,Q,Z),nO(J,Q,Z),J.head)J.head.quaternion.multiply(SY.setFromAxisAngle(R9,K.headYaw*0.5)),J.head.quaternion.multiply(SY.setFromAxisAngle(L5,K.headNod)),J.head.updateMatrixWorld(!0);if(W&&J.head){if(Z?.habla?.has(X)){let O=0.035*(0.6+0.4*Math.sin(Q*1.7));Z8(J.head,v8.setFromAxisAngle(T8,Math.sin(Q*6.1)*O*0.5+Math.sin(Q*3.3)*O*0.5))}if(N&&X%2!==Z.fin.team){let O=Q-Z.fin.t;if(O>0.6&&O<2.6)Z8(J.head,v8.setFromAxisAngle(R9,Math.sin((O-0.6)*Math.PI*2.4)*0.16*(2.6-O)/2))}}if(F!=null&&F>LJ[1]-0.2&&F<LJ[2]+0.2&&J.head){let O=Math.sin(Math.min(1,(F-LJ[1]+0.2)/(LJ[2]-LJ[1]+0.4))*Math.PI);Z8(J.head,v8.setFromAxisAngle(T8,-0.3*O))}if(W&&J.reaction&&J.head){let O=Q-J.reaction.time;if(O>=0&&O<1.2){let B=Math.sin(O/1.2*Math.PI)*0.035;Z8(J.head,v8.setFromAxisAngle(T8,B))}}for(let{brazo:O,o:B,jugando:R,dedos:q,reposo:M}of G){if(q)q.copy(k5(J,F,M,B));let P=O.lado==="Left"?1:-1;if(O.brazo.getWorldPosition(rZ),q)rZ.add(V5(P*0.85,-0.5,0.05,yY));else rZ.add(V5(P*(R?0.55:0.32),-0.75,R?-0.15:-0.6,yY));if(wO(O,B,rZ),O.antebrazo.getWorldPosition(O9),O.mano.getWorldPosition(JK),f8.subVectors(JK,O9),f8.y=0,f8.lengthSq()<0.00000001)f8.copy(J9);if(f8.normalize(),f8.addScaledVector(T8,-P*(R?0:0.12)).normalize(),f8.y=R?-0.55:-0.3,KQ.set(0,-1,0).addScaledVector(T8,-P*0.22),O.lado==="Left"&&J.gesto>0){let V=V9(J.gesto);KQ.lerp(yY.copy(T8).multiplyScalar(-1).add(fY.set(0,0.4,0)),V*0.8),f8.y+=0.4*V}if(q)f8.copy(q),KQ.copy(T8).addScaledVector(R9,-0.15);if(yO(O,f8,KQ),q)cO(J,F);if(W&&!R&&!q&&O.lado==="Right"&&J.toque&&Q-J.toque.t0<0.7){let V=Q-J.toque.t0;O.mano.getWorldQuaternion(L9),D9.set(1,0,0).applyQuaternion(L9),Z8(O.mano,v8.setFromAxisAngle(D9,-0.5*Math.max(0,Math.sin(V/0.7*Math.PI*4))))}else if(W&&!R&&!q&&O.lado==="Right"&&!(Z?.turno===X&&Z?.jugando)){let V=4.6+X*0.9,L=(Q+X*1.3)%V;if(L<0.55)O.mano.getWorldQuaternion(L9),D9.set(1,0,0).applyQuaternion(L9),Z8(O.mano,v8.setFromAxisAngle(D9,-0.22*Math.max(0,Math.sin(L/0.55*Math.PI*4))))}}J.holder.updateMatrixWorld(!0)}function A5({scene:J,texture:Q,mat:$,box:Z,cylinder:K,random:W,teal:Y,wood:X,storeSign:H}){let U=Q((L,C,A)=>{L.fillStyle="#e0d3b4",L.fillRect(0,0,C,A);let D=L.createLinearGradient(0,0,0,A);D.addColorStop(0,"#cac09b18"),D.addColorStop(0.7,"#14382d00"),D.addColorStop(1,"#162d2566"),L.fillStyle=D,L.fillRect(0,0,C,A);for(let I=0;I<7000;I++)L.fillStyle=I%3?"#b4ad8618":"#142d2924",L.fillRect(W()*C,W()*A,1+W()*3,1+W()*2);for(let I=0;I<70;I++){let c=W()*C,y=I<50?A*(0.72+W()*0.28):W()*A,u=5+W()*14;L.fillStyle=I%3?"rgba(160,145,112,.35)":"rgba(120,110,90,.25)",L.beginPath();for(let J0=0;J0<8;J0++){let f=J0*Math.PI/4,v=u*(0.6+W()*0.5);L.lineTo(c+Math.cos(f)*v,y+Math.sin(f)*v*0.65)}L.fill()}L.strokeStyle="#1b372e24";for(let I=48;I<A;I+=57)L.beginPath(),L.moveTo(0,I),L.lineTo(C,I),L.stroke()},1024,1024);Y.map=U,Y.color.set("#f2ecde"),Y.needsUpdate=!0,X.color.set("#bca98a"),X.roughness=0.84;let N=()=>{H.material.map=Q((L,C,A)=>{L.fillStyle="#efe3c4",L.fillRect(0,0,C,A);for(let c=0;c<2600;c++)L.fillStyle=c%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",L.fillRect(W()*C,W()*A,2+W()*14,1+W()*2);let D=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia",I=D==="Shrikhand"?A*0.66:A*0.56;L.font=`${I}px ${D}`,L.textAlign="center",L.textBaseline="middle",L.fillStyle="#c8402f",L.fillText("Colmado La Esquina",C/2+I*0.06,A/2+I*0.1),L.fillStyle="#24518a",L.fillText("Colmado La Esquina",C/2,A/2+I*0.04),L.strokeStyle="#3d938e",L.lineWidth=12,L.strokeRect(6,6,C-12,A-12);for(let c=0;c<1400;c++)L.fillStyle="rgba(239,227,196,.35)",L.fillRect(W()*C,W()*A,1+W()*3,1+W()*2)},2048,162),H.material.emissiveMap=H.material.map,H.material.needsUpdate=!0};H.material=new o0({roughness:0.9,emissive:"#ffffff",emissiveIntensity:0.1}),N(),document.fonts?.load?.("64px Shrikhand").then(N).catch(()=>{});for(let[L,C]of[[-2.7,-3.5],[2.4,-3.3]])Z(L,0.18,C,0.51,0.35,0.4,"#897052"),Z(L+0.05,0.47,C-0.04,0.4,0.23,0.32,"#a68c62");let F=(L,C,A)=>{let D=document.createElement("canvas");D.width=L,D.height=C;let I=new m8(D);I.colorSpace=J8,I.anisotropy=4;let c=()=>{let y=D.getContext("2d"),u=document.fonts?.check?.("64px Shrikhand"),J0=document.fonts?.check?.('700 40px "DM Sans"')?'"DM Sans",':"";y.fillStyle="#233a2d",y.fillRect(0,0,L,C);for(let f=0;f<70;f++)y.fillStyle=`rgba(225,225,195,${0.015+W()*0.03})`,y.beginPath(),y.ellipse(W()*L,W()*C,L*(0.04+W()*0.14),C*(0.015+W()*0.045),W()*3,0,Math.PI*2),y.fill();y.textAlign="center",y.textBaseline="middle",y.lineCap="round";for(let[f,v,b,j,d]of A){if(f==="—"){y.strokeStyle="rgba(225,225,195,.45)",y.lineWidth=6,y.beginPath(),y.moveTo(L*0.17,v+3),y.quadraticCurveTo(L/2,v-5,L*0.83,v+1),y.stroke();continue}y.font=j==="titulo"?u?`${b}px Shrikhand`:`bold ${b*0.95}px Georgia`:`${j} ${b}px ${J0}sans-serif`;let h=y.measureText(f).width,s=L*0.84;if(y.save(),y.translate(L/2,v),h>s)y.scale(s/h,1);y.fillStyle=d;for(let K0=0;K0<3;K0++)y.globalAlpha=K0?0.4:0.75,y.fillText(f,(W()-0.5)*3,(W()-0.5)*3);y.restore()}for(let f=0;f<L*C/40;f++)y.fillStyle="rgba(35,58,45,.5)",y.fillRect(W()*L,W()*C,1+W()*2,1+W());y.strokeStyle="#9c8c62",y.lineWidth=L*0.04,y.strokeRect(L*0.02,L*0.02,L-L*0.04,C-L*0.04),y.strokeStyle="rgba(60,40,20,.35)",y.lineWidth=4,y.strokeRect(L*0.04,L*0.04,L-L*0.08,C-L*0.08),I.needsUpdate=!0};return c(),Promise.all([document.fonts?.load?.("64px Shrikhand"),document.fonts?.load?.('700 40px "DM Sans"')]).then(c).catch(()=>{}),new o0({roughness:1,map:I,emissive:"#ffffff",emissiveMap:I,emissiveIntensity:0.06})},G="#ece7cc",E="#e9b35a",O="#a9d3dd";{let L=new M0(new EJ(0.72,0.69),F(768,736,[["HOY HAY",110,74,"titulo",G],["CAFÉ",262,78,800,G],["HIELO · PAN",388,66,800,"#dcd9b8"],["—",478],["REFRESCOS",572,60,700,O]]));L.position.set(-3.43,1.6,-2.33),L.rotation.z=0.025,J.add(L),Z(-3.43,1.245,-2.315,0.66,0.018,0.05,"#8a7a55"),Z(-3.28,1.262,-2.31,0.06,0.016,0.016,"#efeadb")}{let L=document.documentElement.lang==="en",C=new SJ,A=$("#6b4a2e",0.8);C.position.set(-2,0,-2.1),C.rotation.y=0.5,J.add(C);let c=new M0(new EJ(0.56,0.72),F(560,720,[[L?"COMING":"YA",96,92,"titulo",E],[L?"SOON":"VIENE",206,92,"titulo",E],["—",282],[L?"1 vs 1":"1 contra 1",372,80,800,G],[L?"Online":"En línea",478,80,800,G],[L?"your people,":"tu gente,",576,50,600,O],[L?"from anywhere":"de donde sea",636,50,600,O]])),y=new SJ;y.rotation.x=-0.2,C.add(y),c.position.set(0,0.44,0.012),y.add(c);{let J0=new M0(new _J(0.56,0.72,0.012),A);J0.position.set(0,0.44,0),y.add(J0)}for(let[J0,f,v,b]of[[-0.29,0.42000000000000004,0.035,0.88],[0.29,0.42000000000000004,0.035,0.88],[0,0.8500000000000001,0.62,0.035],[0,0.03,0.62,0.035]]){let j=new M0(new _J(v,b,0.022),A);j.position.set(J0,f,0),y.add(j)}let u=new SJ;u.position.z=-0.32,u.rotation.x=0.2,C.add(u);for(let J0 of[-0.27,0.27]){let f=new M0(new _J(0.03,0.8600000000000001,0.02),A);f.position.set(J0,0.43000000000000005,-0.02),u.add(f)}C.traverse((J0)=>{if(J0.isMesh)J0.castShadow=!0,J0.receiveShadow=!0})}let B=[];Z(-1.12,1.59,-4,0.42,0.21,0.31,"#677761"),Z(-1.12,1.61,-3.836,0.34,0.1,0.016,"#414b3d"),Z(-0.38,1.5,-3.98,0.3,0.018,0.22,"#c5b887");for(let[L,C,A]of[[0.7,-4.03,"#8b7747"],[0.98,-4.07,"#637751"],[1.29,-4.02,"#a88b50"]])K(L,1.6,C,0.07,0.075,0.25,A,14),K(L,1.739,C,0.077,0.077,0.028,"#aaa386",12);Z(0.2,1.51,-4.01,0.4,0.07,0.28,"#6c5838");for(let L=0;L<4;L++){let C=new M0(new R8(1,10,6),$(L%2?"#bca276":"#a98e61"));C.scale.set(0.055,0.035,0.115),C.position.set(0.07+L*0.085,1.57,-4),C.rotation.y=(L-1.5)*0.13,J.add(C)}let R=new fJ({transparent:!0,depthWrite:!1,map:Q((L,C,A)=>{for(let D=0;D<90;D++)L.fillStyle=D%2?"#152c2110":"#3036230a",L.beginPath(),L.ellipse(C/2+(W()-0.5)*C*0.45,A/2+(W()-0.5)*A*0.45,W()*C*0.24,W()*A*0.18,W()*Math.PI,0,Math.PI*2),L.fill()},256,256)});for(let[L,C,A,D]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let I=new M0(new EJ(A,D),R);I.rotation.x=-Math.PI/2,I.position.set(L,0.008,C),J.add(I)}for(let[L,C]of[[-3,-0.9],[3.3,-1.5]]){K(L,0.18,C,0.18,0.13,0.34,"#87553c",14),K(L,0.354,C,0.16,0.16,0.012,"#3f422d",12);let A=new SJ;A.position.set(L,0.36,C),J.add(A);for(let D=0;D<7;D++){let I=new rQ;I.moveTo(0,0),I.quadraticCurveTo(-0.09,0.23,0,0.55+W()*0.12),I.quadraticCurveTo(0.09,0.23,0,0);let c=new M0(new eQ(I,5),new o0({color:D%2?"#597d4f":"#3c603e",roughness:1,side:oJ}));c.rotation.set(0.3+W()*0.4,D*Math.PI*2/7,0),A.add(c)}B.push(A)}let q=new EJ(0.55,1.3,5,9),M=new M0(q,new o0({color:"#b2a27c",roughness:1,side:oJ}));M.position.set(-2.85,1.75,-3.05),J.add(M);let P=q.attributes.position,V=P.array.slice();return{update(L){B.forEach((C,A)=>C.rotation.z=Math.sin(L*0.53+A*2.1)*0.015);for(let C=0;C<P.count;C++){let A=V[C*3+1];P.setZ(C,Math.sin(L*1.17+A*3)*0.025*(0.65-A)/1.3)}P.needsUpdate=!0}}}function _5({scene:J,texture:Q,mat:$,box:Z,cylinder:K,staticGeo:W,random:Y}){let X=(w=0,m=0,n=0)=>new _(w,m,n),H=(w,m,n,$0,t,V0,R0=5000)=>{w.fillStyle=$0,w.fillRect(0,0,m,n);for(let H0=0;H0<R0;H0++)w.fillStyle=Y()>0.5?t:V0,w.fillRect(Y()*m,Y()*n,1+Y()*4,1+Y()*3)},U=[];function N(w,{w:m=1024,h:n=256,fondo:$0="#efe3c4",tinta:t="#24518a",sombra:V0="#c8402f",borde:R0=null,px:H0=0.62}={}){let w0=document.createElement("canvas");w0.width=m,w0.height=n;let n0=new m8(w0);n0.colorSpace=J8;let GJ=()=>{let b0=w0.getContext("2d"),CJ=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia";if($0){b0.fillStyle=$0,b0.fillRect(0,0,m,n);for(let iJ=0;iJ<m*1.2;iJ++)b0.fillStyle=iJ%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",b0.fillRect(Math.random()*m,Math.random()*n,2+Math.random()*12,1+Math.random()*2)}else b0.clearRect(0,0,m,n);let TJ=n*H0;b0.font=`${TJ}px ${CJ}`;let xJ=b0.measureText(w).width;if(xJ>m*0.9)TJ*=m*0.9/xJ,b0.font=`${TJ}px ${CJ}`;b0.textAlign="center",b0.textBaseline="middle";let g=TJ*0.06;if(V0)b0.fillStyle=V0,b0.fillText(w,m/2+g,n/2+g+TJ*0.04);if(b0.fillStyle=t,b0.fillText(w,m/2,n/2+TJ*0.04),R0)b0.strokeStyle=R0,b0.lineWidth=n*0.07,b0.strokeRect(b0.lineWidth/2,b0.lineWidth/2,m-b0.lineWidth,n-b0.lineWidth);for(let iJ=0;iJ<m*0.5;iJ++)b0.fillStyle=$0?"rgba(239,227,196,.3)":"rgba(0,0,0,0)",b0.fillRect(Math.random()*m,Math.random()*n,1+Math.random()*3,1+Math.random()*2);n0.needsUpdate=!0};return GJ(),U.push(GJ),n0}document.fonts?.load?.("64px Shrikhand").then(()=>U.forEach((w)=>w())).catch(()=>{});let F=new o0({roughness:0.93,map:Q((w,m,n)=>{H(w,m,n,"#e3d6b8","rgba(255,250,236,.10)","rgba(120,100,70,.08)");let $0=w.createLinearGradient(0,0,0,n);$0.addColorStop(0,"rgba(90,70,50,.12)"),$0.addColorStop(0.18,"rgba(90,70,50,0)"),$0.addColorStop(0.8,"rgba(90,70,50,0)"),$0.addColorStop(1,"rgba(90,70,50,.2)"),w.fillStyle=$0,w.fillRect(0,0,m,n);for(let t=0;t<22;t++){let V0=Y()*m,R0=n*(0.08+Y()*0.3),H0=w.createLinearGradient(0,0,0,R0);H0.addColorStop(0,"rgba(80,70,55,.2)"),H0.addColorStop(1,"rgba(80,70,55,0)"),w.fillStyle=H0,w.fillRect(V0,0,3+Y()*8,R0)}},512,512)}),G=new o0({roughness:0.9,map:Q((w,m,n)=>{H(w,m,n,"#3f9a96","rgba(200,240,230,.10)","rgba(20,50,50,.10)");for(let $0=0;$0<50;$0++)w.fillStyle="rgba(225,218,195,.55)",w.beginPath(),w.ellipse(Y()*m,Y()*n,2+Y()*9,1+Y()*5,Y()*3,0,Math.PI*2),w.fill()},256,256)});Z(-3.48,0.625,-2.355,0.702,1.25,0.012,G),Z(3.45,0.625,-2.355,0.802,1.25,0.012,G),Z(-3.906,0.625,-3.85,0.012,1.25,2.72,G),Z(3.906,0.625,-3.85,0.012,1.25,2.72,G);let E=22,O="#3d8a5c",B="#e8dfc8",R=Q((w,m,n)=>{for(let t=0;t<E;t++)w.fillStyle=t%2?B:O,w.fillRect(t*m/E,0,Math.ceil(m/E),n);for(let t=0;t<2500;t++)w.fillStyle=Y()>0.5?"rgba(255,250,235,.06)":"rgba(20,30,20,.07)",w.fillRect(Y()*m,Y()*n,2,2);let $0=w.createLinearGradient(0,0,0,n);$0.addColorStop(0,"rgba(0,0,0,.14)"),$0.addColorStop(1,"rgba(40,30,20,0)"),w.fillStyle=$0,w.fillRect(0,0,m,n)},1024,128);W(new EJ(7.3,0.86),new o0({map:R,roughness:0.95,side:oJ}),[0,2.59,-1.955],[-1.237,0,0]);let q=Q((w,m,n)=>{let $0=m/E;for(let t=0;t<E;t++)w.fillStyle=t%2?B:O,w.fillRect(t*$0,0,Math.ceil($0),n*0.5),w.beginPath(),w.arc(t*$0+$0/2,n*0.5,$0/2-0.5,0,Math.PI),w.fill()},1024,64);W(new EJ(7.3,0.2),new o0({map:q,roughness:0.95,side:oJ,alphaTest:0.5}),[0,2.35,-1.548]);{let w=new o0({roughness:0.8,map:Q((n,$0,t)=>{n.fillStyle="#2a3332",n.fillRect(0,0,$0,t);let V0=n.createLinearGradient(0,0,0,t);V0.addColorStop(0,"#cfe8e0"),V0.addColorStop(1,"#8fb3aa"),n.fillStyle=V0,n.fillRect(14,14,$0-28,t-28),n.strokeStyle="#1f2525",n.lineWidth=7;for(let R0=30;R0<$0-20;R0+=26)n.beginPath(),n.moveTo(R0,14),n.lineTo(R0,t-14),n.stroke();for(let R0 of[t*0.33,t*0.66])n.beginPath(),n.moveTo(14,R0),n.lineTo($0-14,R0),n.stroke();n.strokeStyle="#e8e0cc",n.lineWidth=12,n.strokeRect(6,6,$0-12,t-12)},256,256),emissive:"#ffffff",emissiveIntensity:0.12});w.emissiveMap=w.map,W(new EJ(1.1,1),w,[3.915,1.75,-4.3],[0,Math.PI/2,0]);let m=new M0(new EJ(2.2,0.36),new o0({map:N("Víveres · Bebidas · Hielo",{w:1536,h:252,fondo:null,tinta:"#24518a",sombra:"#c8402f"}),transparent:!0,roughness:0.9}));m.position.set(3.915,2.55,-3.75),m.rotation.y=Math.PI/2,J.add(m)}let M=3.3,P=2.75,V=-2.7,L=M+P;Z(0,M+P/2,-5.2,8.2,P,0.2,F),Z(-4,M+P/2,-3.95,0.2,P,2.7,F),Z(4,M+P/2,-3.95,0.2,P,2.7,F),Z(0,M+P/2,V,8.2,P,0.2,F),Z(0,L-0.08,-3.95,8.44,0.16,2.95,"#d3c9b0"),Z(0,M+0.06,V+0.12,8.3,0.1,0.06,"#3d938e");let C=new o0({roughness:0.7,map:Q((w,m,n)=>{w.fillStyle="#2d3a3a",w.fillRect(0,0,m,n);let $0=15,t=(n-24)/$0;for(let V0=0;V0<$0;V0++){let R0=12+V0*t;w.fillStyle="#7aa39d",w.fillRect(12,R0,m-24,t*0.72),w.fillStyle="rgba(0,0,0,.25)",w.fillRect(12,R0+t*0.62,m-24,t*0.1)}w.strokeStyle="#e8e0cc",w.lineWidth=12,w.strokeRect(6,6,m-12,n-12)},256,256)});W(new EJ(1.2,1.25),C,[-2.5,4.6,V+0.107]);let A=new o0({roughness:0.7,map:C.map,emissive:"#8fb0ff",emissiveMap:C.map,emissiveIntensity:0.25}),D=new M0(new EJ(1.2,1.25),A);D.position.set(2.5,4.6,V+0.107),J.add(D);let I=new o0({roughness:0.8,emissive:"#ffffff",emissiveIntensity:0.55,map:Q((w,m,n)=>{let $0=w.createLinearGradient(0,0,0,n);$0.addColorStop(0,"#f0c27f"),$0.addColorStop(1,"#b87a44"),w.fillStyle=$0,w.fillRect(0,0,m,n),w.strokeStyle="#1d2222",w.lineWidth=6;for(let t=18;t<m;t+=22)w.beginPath(),w.moveTo(t,0),w.lineTo(t,n),w.stroke();for(let t=n*0.2;t<n;t+=n*0.2)w.beginPath(),w.moveTo(0,t),w.lineTo(m,t),w.stroke();w.lineWidth=5;for(let t=0;t<4;t++)w.beginPath(),w.arc(m/2,n*0.1+t*n*0.2,18,0,Math.PI*2),w.stroke();w.strokeStyle="#e8e0cc",w.lineWidth=14,w.strokeRect(7,7,m-14,n-14)},128,256)});I.emissiveMap=I.map,W(new EJ(1,2.1),I,[0,M+1.08,V+0.107]);let c="#262c2b";for(let w of[3.38,4.22])Z(0,w,-1.56,8,0.04,0.04,c);for(let w=-3.94;w<=3.95;w+=0.14)Z(w,3.8,-1.56,0.018,0.84,0.018,c);for(let w of[-3.97,3.97]){for(let m of[3.38,4.22])Z(w,m,-2.08,0.04,0.04,1.04,c);for(let m=-2.55;m<=-1.6;m+=0.14)Z(w,3.8,m,0.018,0.84,0.018,c)}for(let[w,m]of[[-3.3,-1.8],[3.25,-1.85],[1.5,-1.78]]){K(w,3.46,m,0.13,0.1,0.24,"#9a5a3c",12);for(let n=0;n<4;n++)W(new R8(1,8,6),$(n%2?"#5b7f4f":"#44663e",0.95),[w+(n-1.5)*0.06,3.66+n%2*0.05,m+(n%3-1)*0.04],[0,0,0],[0.12,0.14,0.1])}K(2.5,L+0.52,-4.3,0.5,0.55,1,"#1f2322",18),K(2.5,L+1.06,-4.3,0.2,0.22,0.08,"#2b302f",12),K(-1.8,L+0.35,-4.6,0.035,0.035,0.7,"#8d8f89",8);for(let[w,m]of[[-3.95,-2.75],[3.95,-2.75],[-3.95,-5.15],[3.95,-5.15]])for(let[n,$0]of[[-0.05,-0.05],[0.05,-0.05],[-0.05,0.05],[0.05,0.05]])K(w+n,L+0.42,m+$0,0.007,0.007,0.84,"#6b4a35",4);let y=$("#8a6a48",0.8),u=$("#4f7f55",0.85);for(let w of[0.55,1,1.45,1.9,2.35,2.8])Z(-3.53,w,-3.85,0.34,0.04,2.2,u);for(let w of[-4.94,-2.76])Z(-3.53,1.65,w,0.34,2.3,0.04,u);let J0=Q((w,m,n)=>{w.fillStyle="#bdbdbd",w.fillRect(0,0,m,n),w.fillStyle="#ffffff",w.fillRect(0,n*0.34,m,n*0.34),w.fillStyle="#6a6a6a",w.fillRect(0,n*0.33,m,n*0.02),w.fillRect(0,n*0.67,m,n*0.02)},64,64),f=new o0({map:J0,roughness:0.62}),v=["#c8402f","#e3ae55","#f3eee3","#2f6fa8","#3f8a5a","#e07a2e","#d65a7a","#f1d24a","#6fb7c9","#8a3b3b","#ffffff","#1f5f9e"],b=[],j=[],d=(w,m,n,$0,t,V0)=>{let R0=w;while(R0<m){let H0=0.07+Y()*0.12,w0=0.12+Y()*0.17,n0=Math.min(t,0.1+Y()*0.12),GJ=Y()<0.35,b0=new f0(v[Math.floor(Y()*v.length)]).multiplyScalar(0.7+Y()*0.22);if(R0+H0>m)break;let CJ=V0==="x"?X(R0+H0/2,n+w0/2,$0):X($0,n+w0/2,R0+H0/2);(GJ?j:b).push({pos:CJ,s:GJ?X(H0*0.85,w0*0.8,H0*0.85):V0==="x"?X(H0,w0,n0):X(n0,w0,H0),col:b0}),R0+=H0+0.012}};for(let w of[1.6125,2.5725])d(-3.4,2.2,w,-4.8,0.3,"x");for(let w of[0.57,1.02,1.47,1.92,2.37,2.82])d(-4.9,-2.8,w,-3.55,0.28,"z");for(let[w,m]of[[new _J(1,1,1),b],[new BJ(0.5,0.5,1,10),j]]){let n=new S9(w,f,m.length),$0=new wJ;m.forEach((t,V0)=>{$0.position.copy(t.pos),$0.scale.copy(t.s),$0.rotation.set(0,(Y()-0.5)*0.12,0),$0.updateMatrix(),n.setMatrixAt(V0,$0.matrix),n.setColorAt(V0,t.col)}),n.frustumCulled=!1,J.add(n)}{let n=[[0.05,0.47],[0.53,0.95]],$0=(H0,w0)=>{if(H0.fillStyle=w0?"#000":"#5b3b24",H0.fillRect(0,0,1024,368),!w0){for(let n0=0;n0<500;n0++)H0.fillStyle=n0%2?"rgba(150,100,60,.25)":"rgba(30,18,10,.25)",H0.fillRect(Math.random()*1024,Math.random()*368,20+Math.random()*80,1+Math.random()*2);H0.fillStyle="#3a2616",H0.fillRect(0,323.84,1024,44.16)}for(let[n0,GJ]of n){let b0=n0*1024,CJ=GJ*1024;H0.fillStyle=w0?"#6e6a60":"#d9d3c1",H0.fillRect(b0,44.16,CJ-b0,257.6);for(let g=0;g<2;g++){let iJ=44.16+(g+0.5)*257.6/2;H0.fillStyle=w0?"#6f6a60":"#b9b3a2",H0.fillRect(b0,iJ+51.52000000000001,CJ-b0,4);let XJ=iJ+51.52000000000001;H0.globalAlpha=w0?0.7:1;for(let OJ=b0+10;OJ<CJ-60;){let T=Math.random()<0.3,k=v[Math.floor(Math.random()*v.length)];if(T){let x=18+Math.random()*6;H0.fillStyle=w0?"#9a9a9a":"rgba(235,240,240,.9)",H0.fillRect(OJ,XJ-x*2.4,x*2,x*2.4),H0.fillStyle=k;for(let e=0;e<7;e++)H0.beginPath(),H0.arc(OJ+5+Math.random()*(x*2-10),XJ-6-Math.random()*x*1.8,5,0,Math.PI*2),H0.fill();H0.fillStyle="#c8402f",H0.fillRect(OJ-2,XJ-x*2.4-8,x*2+4,9),OJ+=x*2+8}else{let x=46+Math.random()*34,e=257.6*(0.2+Math.random()*0.1);H0.fillStyle=k,H0.beginPath(),H0.moveTo(OJ,XJ),H0.lineTo(OJ+3,XJ-e);for(let O0=0;O0<=6;O0++)H0.lineTo(OJ+3+O0*(x-6)/6,XJ-e-(O0%2?5:0));H0.lineTo(OJ+x,XJ),H0.closePath(),H0.fill(),H0.fillStyle="rgba(255,255,255,.7)",H0.fillRect(OJ+x*0.2,XJ-e*0.62,x*0.6,e*0.22),H0.fillStyle="rgba(255,255,255,.25)",H0.fillRect(OJ+4,XJ-e+8,5,e-14),OJ+=x+5}}H0.globalAlpha=1}if(!w0)H0.fillStyle="rgba(255,255,255,.22)",H0.beginPath(),H0.moveTo(b0+20,44.16),H0.lineTo(b0+70,44.16),H0.lineTo(b0+20,301.76),H0.lineTo(b0-10+20,301.76),H0.fill(),H0.strokeStyle="#3a2616",H0.lineWidth=10,H0.strokeRect(b0,44.16,CJ-b0,257.6)}},t=(H0)=>Q((w0)=>$0(w0,H0),1024,368),V0=new o0({map:t(!1),emissive:"#fff4de",emissiveMap:t(!0),emissiveIntensity:0.2,roughness:0.55}),R0=new M0(new EJ(3.9,1.4),V0);R0.position.set(0,0.7,-3.924),J.add(R0)}let h=Q((w,m,n)=>{let t=n/7;w.fillStyle="#8a7a5a",w.fillRect(m/2-2,0,4,n);for(let V0=0;V0<7;V0++){let R0=V0*t+4;w.fillStyle=v[(V0*5+3)%v.length],w.fillRect(6,R0,m-12,t-8),w.fillStyle="rgba(255,255,255,.3)",w.fillRect(10,R0+6,m*0.16,t-20),w.fillStyle="rgba(255,255,255,.75)",w.fillRect(m*0.3,R0+t*0.36,m*0.4,t*0.16)}},64,448),s=new o0({map:h,roughness:0.45,alphaTest:0.5,side:oJ});for(let w of[-1.74,-1.52,1.52,1.74])W(new EJ(0.15,0.86),s,[w,2.66,-3.86],[0,(Y()-0.5)*0.5,0]);let K0=new M0(new EJ(0.8,1.5),new fJ({color:new f0(1.05,1.08,1.1),map:Q((w,m,n)=>{w.fillStyle="#dcecef",w.fillRect(0,0,m,n);let $0=5;for(let V0=0;V0<$0;V0++){let R0=n/$0,H0=V0*R0;w.fillStyle="rgba(140,160,165,.9)",w.fillRect(0,H0+R0*0.88,m,5);for(let w0=0;w0<8;w0++){let n0=(m-20)/8,GJ=10+w0*n0;w.fillStyle=["#c8402f","#2c7a3f","#e3ae55","#7a3a1c","#2f6fa8","#f3eee3","#e07a2e"][(w0+V0*3)%7],w.fillRect(GJ+n0*0.15,H0+R0*0.3,n0*0.7,R0*0.56),w.fillRect(GJ+n0*0.36,H0+R0*0.12,n0*0.28,R0*0.2)}}let t=w.createLinearGradient(0,0,m,0);t.addColorStop(0,"rgba(255,255,255,.3)"),t.addColorStop(0.35,"rgba(255,255,255,0)"),w.fillStyle=t,w.fillRect(0,0,m,n),w.strokeStyle="#9aa8aa",w.lineWidth=10,w.strokeRect(0,0,m,n)},256,480)}));K0.position.set(2.95,1.12,-4.09),J.add(K0);let _0=new M0(new EJ(0.9,0.2),new fJ({map:N("Bien fría",{w:720,h:160,fondo:"#b8372b",tinta:"#f3eee3",sombra:null,px:0.62}),color:new f0(1.1,1.1,1.1)}));_0.position.set(2.95,2.17,-4.14),J.add(_0),Z(2.45,0.4,-1.86,1,0.8,0.6,"#e7ebe8"),Z(2.45,0.83,-1.86,1.04,0.06,0.64,"#d4dad8"),Z(2.45,0.12,-1.555,0.96,0.1,0.012,"#b9c0bd");{let w=new M0(new EJ(0.62,0.19),new o0({map:N("HIELO",{w:640,h:196,fondo:null,tinta:"#1f5f9e",sombra:"#c8402f",px:0.7}),transparent:!0,roughness:0.8}));w.position.set(2.45,0.55,-1.553),J.add(w)}{let w=$("#2d63a8",0.5),m=new o0({color:"#8cc0e6",roughness:0.12,transparent:!0,opacity:0.84});for(let t=0;t<2;t++)for(let V0=0;V0<3;V0++){let R0=3.15+t*0.4,H0=0.21+V0*0.4;W(new BJ(0.155,0.155,0.4,16),m,[R0,H0,-2],[Math.PI/2,0,0]),W(new BJ(0.05,0.05,0.1,10),m,[R0,H0,-2.25],[Math.PI/2,0,0])}for(let t of[0,0.4,0.8,1.2])Z(3.35,t+0.012,-2,0.84,0.024,0.46,w);for(let t of[2.94,3.35,3.7600000000000002])Z(t,0.61,-2,0.03,1.22,0.46,w)}let q0=(w,m,n,$0,t)=>{let V0=$(t,0.5),R0=(H0,w0,n0,GJ,b0=0)=>{H0.rotateX(b0);let CJ=X(w0,n0,GJ).applyAxisAngle(X(0,1,0),$0);W(H0,V0,[w+CJ.x,m+CJ.y,n+CJ.z],[0,$0,0])};R0(new _8(0.46,0.035,0.43,2,0.015),0,0.43,0),R0(new _8(0.44,0.42,0.03,2,0.012),0,0.71,-0.22,-0.16);for(let H0 of[-0.2,0.2])R0(new BJ(0.018,0.024,0.43,6),H0,0.215,0.17,0.12),R0(new BJ(0.018,0.024,0.45,6),H0,0.22,-0.19,-0.14),R0(new _J(0.03,0.18,0.3),H0*1.1,0.54,-0.02)};for(let w=0;w<4;w++)q0(-3.42,w*0.075,-1.32-w*0.012,0.3,"#ecece6");q0(3.55,0,0.55,-1.9,"#ecece6");{let $0=(w0,n0,GJ,b0,CJ,TJ=0,xJ=0)=>{w0.rotateX(TJ),w0.rotateZ(xJ);let g=X(GJ,b0,CJ).applyAxisAngle(X(0,1,0),0.3);W(w0,n0,[-3.25+g.x,g.y,2.85+g.z],[0,0.3,0])},t=$("#171b1b",0.8),V0=$("#9aa3a0",0.35,0.6),R0=$("#a8382c",0.45,0.1),H0=$("#1e2222",0.7);for(let w0 of[-0.52,0.5])$0(new w9(0.26,0.055,8,18),t,w0,0.3,0),$0(new BJ(0.09,0.09,0.08,10),V0,w0,0.3,0,Math.PI/2);$0(new _8(0.6,0.22,0.24,2,0.05),R0,-0.02,0.53,0,0,-0.08),$0(new _8(0.55,0.08,0.26,2,0.03),H0,-0.28,0.68,0),$0(new _8(0.28,0.34,0.2,2,0.05),R0,0.37,0.64,0,0,-0.35),$0(new BJ(0.018,0.018,0.62,6),V0,0.44,0.92,0,Math.PI/2),$0(new BJ(0.02,0.02,0.62,6),V0,0.47,0.6,0,0,0.35),$0(new BJ(0.03,0.035,0.45,8),V0,-0.35,0.3,0.13,0,Math.PI/2+0.1),$0(new _8(0.3,0.03,0.22,1,0.01),V0,-0.6,0.73,0)}for(let w=-9;w<4.4;w+=2)Z(w+0.5,-0.074,3.45,1,0.152,0.202,"#d6b24e");Z(8.3,-0.2,-4.575,7.4,0.1,15.85,"#2b3133"),Z(4.6,-0.075,-4.575,0.2,0.15,15.85,"#a8a391"),Z(12.3,-0.07,-4.575,1.2,0.16,15.85,"#8a8578");for(let w=-11;w<3;w+=1.8)Z(8.3,-0.146,w,0.06,0.008,0.7,"#b9ad83");{let w=new o0({color:"#ffd08a",emissive:"#ffb35a",emissiveIntensity:2.2}),m=$("#2a3436",0.8),n=["#d8a25a","#8fb8a8","#e0d2b0","#c9897d","#b9c47a"],$0=-12,t=0;while($0<2.4){let V0=3+Y()*1.6,R0=3+Y()*2.6,H0=n[t++%n.length];Z(14.4,R0/2,$0+V0/2,3,R0,V0,H0),Z(14.4,R0+0.08,$0+V0/2,3.1,0.16,V0+0.1,"#ddd4bf");let w0=Math.max(1,Math.floor(V0/1.5));for(let n0=0;n0<w0;n0++){let GJ=$0+(n0+0.5)*V0/w0;if(W(new EJ(0.75,0.95),Y()<0.4?w:m,[12.885,1.55,GJ],[0,-Math.PI/2,0]),R0>4.2)W(new EJ(0.7,0.8),Y()<0.35?w:m,[12.885,R0-1.1,GJ],[0,-Math.PI/2,0])}$0+=V0+0.15}}{let w=new o0({roughness:0.6,metalness:0.3,map:Q((n,$0,t)=>{n.fillStyle="#8f9a94",n.fillRect(0,0,$0,t);for(let V0=0;V0<t;V0+=8)n.fillStyle="rgba(40,45,44,.35)",n.fillRect(0,V0,$0,2),n.fillStyle="rgba(230,235,230,.18)",n.fillRect(0,V0+3,$0,2);for(let V0=0;V0<40;V0++)n.fillStyle="rgba(120,70,40,.18)",n.fillRect(Y()*$0,Y()*t,4+Y()*20,2+Y()*10)},256,256)});W(new EJ(2.3,2.1),w,[-7,1.05,-1.365]),Z(-7,2.2,-1.33,2.45,0.2,0.1,"#6d7571");let m=new M0(new EJ(1.7,0.42),new o0({map:N("Banca La Suerte",{w:1024,h:252,fondo:"#2f7a4d",tinta:"#f3eee3",sombra:"#1b2c22",borde:"#e3ae55",px:0.52}),roughness:0.85,emissive:"#ffffff",emissiveIntensity:0.08}));m.material.emissiveMap=m.material.map,m.position.set(-10.5,2.72,-1.36),J.add(m)}let k0=X(4.3,0,3);K(k0.x,3.9,k0.z,0.11,0.16,7.8,"#8e8a80",10),Z(k0.x,7.25,k0.z,0.1,0.1,1.7,"#5c574c"),K(k0.x+0.28,6.3,k0.z,0.2,0.2,0.62,"#6d7470",12);let d0=(w,m,n,$0="#141819",t=0.011)=>{let V0=w.clone().lerp(m,0.5);V0.y-=n*2,W(new j8(new l8(w,V0,m),22,t,4,!1),$($0),[0,0,0])};for(let w of[-0.6,0,0.6])d0(X(k0.x,7.3,k0.z+w),X(6,6.6,9.2+w*0.4),0.25);for(let w of[-0.5,0.5])d0(X(k0.x,7.3,k0.z+w),X(-5,4.2,-1+w*0.6),0.55);d0(X(k0.x,6.4,k0.z),X(3.95,5.7,-2.72),0.35),d0(X(k0.x,6.2,k0.z),X(3.95,5.5,-2.72),0.5,"#1d2121",0.008),d0(X(k0.x,5.9,k0.z),X(4.35,5.4,-9),0.4,"#1d2121",0.009),d0(X(k0.x,5.7,k0.z),X(4.35,5.2,-9),0.6,"#20241f",0.007);{let w=new n7(Array.from({length:14},(m,n)=>{let $0=n/13*Math.PI*4;return X(k0.x+0.16+Math.cos($0)*0.14,5.2-n*0.018+Math.sin($0)*0.14,k0.z+Math.sin($0)*0.05)}));W(new j8(w,60,0.008,4,!1),$("#141819"),[0,0,0])}let Z0=0;return{update(w){if(w>Z0)Z0=w+0.25+Math.random()*1.4,A.emissiveIntensity=0.12+Math.random()*0.45,A.emissive.setHSL(0.58+Math.random()*0.08,0.5,0.55+Math.random()*0.2)}}}function T5({scene:J,random:Q=Math.random}){let $=Q,Z=[],K=[],W=[],Y=new f0,X=(v,b,j=Z)=>{Y.set(b);let d=v.attributes.position.count,h=new Float32Array(d*3);for(let s=0;s<d;s++)h[s*3]=Y.r,h[s*3+1]=Y.g,h[s*3+2]=Y.b;return v.setAttribute("color",new aJ(h,3)),v.deleteAttribute("uv"),j.push(v),v},H=(v,b,j,d,h,s,K0,_0=0,q0)=>{let k0=new _J(d,h,s);if(_0)k0.rotateY(_0);return k0.translate(v,b,j),X(k0,K0,q0)},U=(v,b,j,d,h,s,K0=8)=>{let _0=new BJ(d,d,h,K0);return _0.translate(v,b,j),X(_0,s)},N=(v,b,j,d,h,s,K0,_0)=>{let q0=new EJ(d,h);return q0.rotateY(s),q0.translate(v,b,j),X(q0,K0,_0)},F=(v)=>v[Math.floor($()*v.length)],G=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0","#b7a4c9","#e0a58f","#9ec3b0"],E=["#9a968c","#8d8a80","#a39d90"],O="#8a8578",B="#a8a391",R="#2b3133",q="#b9ad83",M="#1b2224",P="#232c2e",V=(v)=>"#"+new f0(v).multiplyScalar(0.85).getHexString();function L(v,b,j,d,h,s,{lejos:K0=!1}={}){let q0=s*2.9+0.3,k0=$()<0.18?F(E):V(F(G)),d0=new _(Math.sin(j),0,Math.cos(j)),Z0=new _(d0.z,0,-d0.x),w=(t,V0,R0)=>new _(v,V0,b).addScaledVector(Z0,t).addScaledVector(d0,R0),m=w(0,q0/2,-h/2);H(m.x,m.y,m.z,d,q0,h,k0,j);let n=w(0,q0+0.09,-h/2);H(n.x,n.y,n.z,d+0.12,0.18,h+0.12,"#d9d2bf",j);let $0=Math.max(1,Math.floor(d/1.6));for(let t=0;t<s;t++)for(let V0=0;V0<$0;V0++){let R0=-d/2+(V0+0.5)*d/$0,H0=t*2.9+1.55,w0=w(R0,H0,K0?0.04:0.012),n0=$()<(K0?0.3:0.38);if(t===0&&V0===Math.floor($0/2)&&!K0){let GJ=w(R0,1.05,0.012);N(GJ.x,GJ.y,GJ.z,0.95,2.1,j,$()<0.3?"#7c8680":"#232c2e");continue}if(n0)N(w0.x,w0.y,w0.z,0.72,0.9,j,$()<0.22?"#9fc3ff":F(["#ffd08a","#ffc27a","#ffe0a8"]),K);else N(w0.x,w0.y,w0.z,0.72,0.9,j,"#232c2e")}if(K0){C(w,q0,d,h);return}if($()<0.5){let t=w(0,0.5,0.55);H(t.x,1,t.z,d-0.1,0.05,0.05,"#1b2224",j);for(let R0 of[-0.5,-0.25,0,0.25,0.5]){let H0=w(R0*(d-0.1),0.5,0.55);H(H0.x,0.5,H0.z,0.05,1,0.05,"#1b2224",j)}let V0=w(0,2.75,0.6);H(V0.x,V0.y,V0.z,d,0.12,1.2,"#cfc6b2",j)}if(s>1&&$()<0.6){let t=w(0,2.9499999999999997,0.45);H(t.x,t.y,t.z,d*0.7,0.12,0.9,"#cfc6b2",j);let V0=w(0,3.45,0.88);H(V0.x,V0.y,V0.z,d*0.7,0.05,0.05,"#1b2224",j);for(let R0=0;R0<=6;R0++){let H0=w((R0/6-0.5)*d*0.7,3.23,0.88);H(H0.x,H0.y,H0.z,0.03,0.5,0.03,"#1b2224",j)}}C(w,q0,d,h)}function C(v,b,j,d){if($()<0.45){let h=v(($()-0.5)*j*0.5,b+0.7,-d*(0.3+$()*0.4));U(h.x,h.y,h.z,0.55,1.1,"#1f2324",10)}if($()<0.22)for(let h=0;h<4;h++){let s=v((h%2-0.5)*(j-0.4),b+0.5,-(h<2?0.3:d-0.3));H(s.x,s.y,s.z,0.04,1+$()*0.4,0.04,"#5a4a3c")}if($()<0.15){let h=v(j*0.3,b+1.1,-d*0.5);H(h.x,h.y,h.z,0.03,2,0.03,"#3a3f40"),H(h.x,h.y+0.6,h.z,0.9,0.03,0.03,"#3a3f40")}}function A({eje:v,desde:b,hasta:j,fachada:d,ry:h,fondo:s=[6,9],pisos:K0=[1,3]}){let _0=b;while(_0<j-2){let q0=Math.min(3.4+$()*3.4,j-_0),k0=_0+q0/2,d0=d+($()-0.5)*0.5,Z0=K0[0]+Math.floor($()*(K0[1]-K0[0]+1));if(v==="x")L(k0,d0,h,q0,s[0]+$()*(s[1]-s[0]),Z0);else L(d0,k0,h,q0,s[0]+$()*(s[1]-s[0]),Z0);_0+=q0+0.12+($()<0.12?0.9+$()*1.5:0)}}{let v=new EJ(460,460);v.rotateX(-Math.PI/2),v.translate(0,-0.26,0),X(v,"#35363a")}for(let[v,b]of[[-86,-20],[20,86]]){let j=(v+b)/2,d=b-v;H(j,-0.2,6.05,d,0.1,5.4,"#2b3133"),H(j,0.08,9.6,d,0.16,1.8,"#8a8578");for(let h=v+1;h<b;h+=3.6)H(h,-0.146,6.3,1.4,0.008,0.1,"#b9ad83")}H(-51,-0.1,0.97,70,0.2,4.76,"#8a8578"),H(-51,-0.075,3.45,70,0.15,0.2,"#a8a391"),H(49.45,-0.1,2.18,73.1,0.2,2.36,"#8a8578"),H(49.45,-0.075,3.45,73.1,0.15,0.2,"#a8a391"),A({eje:"x",desde:-84,hasta:-20.3,fachada:10.6,ry:Math.PI}),A({eje:"x",desde:20.3,hasta:84,fachada:10.6,ry:Math.PI}),A({eje:"x",desde:-84,hasta:-22.8,fachada:-1.4,ry:0}),A({eje:"x",desde:16.1,hasta:84,fachada:1,ry:0}),H(8.3,-0.2,-49.25,7.4,0.1,73.5,"#2b3133"),H(4.25,-0.1,-49.25,0.7,0.2,73.5,"#8a8578"),H(12.3,-0.07,-49.25,1.2,0.16,73.5,"#8a8578");for(let v=-13;v>-85;v-=3.6)H(8.3,-0.146,v,0.1,0.008,1.4,"#b9ad83");A({eje:"z",desde:-84,hasta:-5.5,fachada:3.9,ry:Math.PI/2,fondo:[7,9]}),A({eje:"z",desde:-84,hasta:-12.2,fachada:12.9,ry:-Math.PI/2,fondo:[7,9]});let D=(v,b,j)=>{let d=v.clone().lerp(b,0.5);d.y-=j*2;let h=new j8(new l8(v,d,b),14,0.014,3,!1);X(h,"#101517")},I=(v,b)=>{U(v,3.5,b,0.1,7,"#6b6457",6),H(v,6.6,b,1.6,0.08,0.08,"#4f4a40")},c=(v,b,j)=>{H(v+j.x*0.55,6,b+j.z*0.55,Math.abs(j.x)?1.1:0.06,0.06,Math.abs(j.z)?1.1:0.06,"#4f4a40");let d=new R8(0.16,8,6);d.translate(v+j.x*1.1,5.9,b+j.z*1.1),X(d,"#ffb866",W)};for(let v of[-1,1]){let b=v<0?-14:16;for(let j=1;j<=5;j++){let d=v<0?-14-j*12:16+j*12;if(I(d,9.2),j%2===0)c(d,9.2,new _(0,0,-1));for(let h of[0,-0.25,0.3])D(new _(b,6.6+h,9.2),new _(d,6.6+h,9.2),0.5);b=d}}{let v=-9;for(let b=1;b<=6;b++){let j=-9-b*12;if(I(12.4,j),b%2===1)c(12.4,j,new _(-1,0,0));for(let d of[0,0.3])D(new _(12.4,6.6+d,v),new _(12.4,6.6+d,j),0.5);v=j}}let y=(v,b,j)=>{let d=F(["#8b2f2a","#c9c6bd","#2f4a6b","#3b3f42","#b58a3a","#e2dfd6","#556b4f"]),h=new _(Math.sin(j),0,Math.cos(j));H(v,0.55,b,1.75,0.62,4.1,d,j);let s=h.clone().multiplyScalar(-0.3);H(v+s.x,1.1,b+s.z,1.55,0.52,2.1,"#2a3236",j);let K0=new _(h.z,0,-h.x);for(let[_0,q0]of[[-0.8,1.3],[0.8,1.3],[-0.8,-1.3],[0.8,-1.3]]){let k0=new BJ(0.32,0.32,0.22,10);k0.rotateZ(Math.PI/2),k0.rotateY(j);let d0=new _(v,0.32,b).addScaledVector(K0,_0).addScaledVector(h,q0);k0.translate(d0.x,d0.y,d0.z),X(k0,"#141718")}};for(let[v,b,j]of[[-31,4.4,Math.PI/2],[-47,4.4,Math.PI/2],[-72,4.4,-Math.PI/2],[27,4.4,Math.PI/2],[55,4.4,-Math.PI/2],[-58,7.9,Math.PI/2],[38,7.9,-Math.PI/2],[5.6,-24,0],[5.6,-41,Math.PI],[10.8,-31,0],[10.8,-62,Math.PI]])y(v,b,j);let u=(v,b)=>Math.abs(v)<30&&b>-22&&b<24||b>-14&&b<20||b<-10&&v>-12&&v<30;for(let v=-78;v<=78;v+=13)for(let b=-78;b<=78;b+=13){let j=v+($()-0.5)*6,d=b+($()-0.5)*6;if(u(j,d)||Math.hypot(j,d)>80)continue;let h=Math.hypot(j,d),s=h>45&&$()<0.07,K0=Math.atan2(-j,-d),_0=Math.round(K0/(Math.PI/2))*(Math.PI/2),q0=s?5+Math.floor($()*5):1+Math.floor($()*(d>0?2:3));if(L(j,d,_0,6+$()*6,6+$()*5,q0,{lejos:!0}),$()<0.35){let k0=F(["#3f5a3c","#4a6443","#35503a"]),d0=j+($()-0.5)*8,Z0=d+($()-0.5)*8,w=2+$()*2.5,m=new tQ(w,0);m.scale(1,0.8,1),m.translate(d0,w*0.6+2.5,Z0),X(m,k0),U(d0,1.4,Z0,0.25,2.8,"#4d4234",5)}}for(let v=0;v<14;v++){let b=$()*Math.PI*2,j=32+$()*44,d=Math.cos(b)*j,h=Math.sin(b)*j;if(u(d,h))continue;let s=9+$()*5,K0=new BJ(0.14,0.22,s,5);K0.translate(d,s/2,h),X(K0,"#5d5445");for(let _0=0;_0<8;_0++){let q0=new c7(0.3,3,3,1);q0.rotateZ(Math.PI/2+0.5),q0.translate(1.5,0,0),q0.rotateY(_0/8*Math.PI*2),q0.translate(d,s,h),X(q0,"#34503a")}}{let b=[],j=[];for(let h=0;h<=240;h++){let s=h/240*Math.PI*2,K0=86+Math.sin(s*3.1)*1.5,_0=6+7*(0.5+0.5*Math.sin(s*2.3+0.7))+3.5*Math.sin(s*5.1+1)**2+1.2*Math.sin(s*13.7+2)+0.5*Math.sin(s*31.3);if(b.push(Math.cos(s)*K0,-1,Math.sin(s)*K0,Math.cos(s)*K0,Math.max(5,_0),Math.sin(s)*K0),h<240){let q0=h*2;j.push(q0,q0+2,q0+1,q0+1,q0+2,q0+3)}}let d=new vJ;d.setAttribute("position",new WJ(b,3)),d.setIndex(j),d.computeVertexNormals(),X(d,"#3d4552")}let J0=[],f=(v,b)=>{if(!v.length)return;let j=v.map((s)=>s.index?s.toNonIndexed():s),d=JQ(j,!1);if(j.forEach((s)=>s.dispose()),v.forEach((s)=>s.dispose()),!d)return;let h=new M0(d,b);h.matrixAutoUpdate=!1,J.add(h),J0.push(h)};return f(Z,new o0({vertexColors:!0,roughness:0.92,side:oJ})),f(K,new fJ({vertexColors:!0,color:new f0(1.9,1.9,1.9)})),f(W,new fJ({vertexColors:!0,color:new f0(5,5,5)})),{mallas:J0}}var eO=["cafe","morir","presidente","presidente"];function JR(){let J=document.createElement("canvas");J.width=256,J.height=128;let Q=J.getContext("2d");Q.fillStyle="#f1ece0",Q.fillRect(0,0,256,128),Q.fillStyle="#b3262d",Q.fillRect(0,10,256,14),Q.fillRect(0,104,256,14),Q.fillStyle="#1f5a36",Q.beginPath(),Q.ellipse(128,64,54,28,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#f1ece0",Q.beginPath(),Q.ellipse(128,64,46,21,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#b3262d",Q.fillRect(92,58,72,12);let $=new m8(J);return $.colorSpace=J8,$}function QR(){let J=new SJ,Q=(H,U)=>new G0(H,U),$=[Q(0,0),Q(0.034,0),Q(0.037,0.006),Q(0.037,0.165),Q(0.034,0.188),Q(0.022,0.222),Q(0.0145,0.252),Q(0.0138,0.274),Q(0.0158,0.279),Q(0.0158,0.29),Q(0.0112,0.29),Q(0.0106,0.268),Q(0.0112,0.24)],Z=new o0({color:"#2d5a26",roughness:0.18,metalness:0.05,envMapIntensity:1.4});J.add(new M0(new O7($,20),Z));let K=new M0(new O7($.slice(1,5).map((H)=>Q(H.x+0.0006,H.y)),20),new o0({color:"#e8f0e4",roughness:0.9,transparent:!0,opacity:0.22,depthWrite:!1}));J.add(K);let W=new M0(new BJ(0.0376,0.0376,0.075,24,1,!0),new o0({map:JR(),roughness:0.6}));W.position.y=0.095,J.add(W);let Y=new M0(new BJ(0.0149,0.0152,0.02,16,1,!0),new o0({color:"#b3262d",roughness:0.5}));Y.position.y=0.262,J.add(Y);let X=new M0(new s9(0.0112,16),new fJ({color:"#0d160c"}));return X.rotation.x=-Math.PI/2,X.position.y=0.245,J.add(X),{g:J,alto:0.11,radio:0.037,inclina:1.25,boca:0.18}}function $R(){let J=new SJ,Q=new M0(new BJ(0.034,0.029,0.14,24,1,!0),new o0({color:"#dfe9ec",roughness:0.08,transparent:!0,opacity:0.28,depthWrite:!1,side:oJ}));Q.position.y=0.07,Q.renderOrder=2,J.add(Q);let $=new M0(new BJ(0.029,0.029,0.008,24),new o0({color:"#dfe9ec",roughness:0.1,transparent:!0,opacity:0.5}));$.position.y=0.004,J.add($);let Z=new M0(new BJ(0.0318,0.0285,0.112,24),new o0({color:"#f2bf86",roughness:0.45}));Z.position.y=0.064,J.add(Z);for(let[W,Y,X]of[[0.01,0.006,0.4],[-0.009,-0.008,1.1],[0.002,-0.012,2]]){let H=new M0(new _J(0.016,0.013,0.016),new o0({color:"#f6f3ec",roughness:0.15,transparent:!0,opacity:0.8}));H.position.set(W,0.121,Y),H.rotation.set(X,X*0.7,0),J.add(H)}let K=new M0(new BJ(0.0028,0.0028,0.19,8),new o0({color:"#c8392e",roughness:0.5}));return K.position.set(0.012,0.11,0.004),K.rotation.z=-0.16,J.add(K),{g:J,alto:0.06,radio:0.034,inclina:0.85,boca:0.09}}function ZR(){let J=new SJ,Q=new o0({color:"#efe9da",roughness:0.22}),$=new M0(new BJ(0.045,0.04,0.008,28),Q);$.position.y=0.004,J.add($);let Z=new o0({color:"#efe9da",roughness:0.22,side:oJ}),K=new M0(new BJ(0.028,0.021,0.048,24,1,!0),Z),W=new M0(new s9(0.021,20),Q);W.rotation.x=-Math.PI/2,W.position.y=0.0085,J.add(W),K.position.y=0.032,J.add(K);let Y=new M0(new s9(0.0262,24),new o0({color:"#2a160c",roughness:0.15}));Y.rotation.x=-Math.PI/2,Y.position.y=0.049,J.add(Y);let X=new M0(new w9(0.012,0.0035,6,12,Math.PI*1.3),Q);return X.position.set(0.03,0.034,0),X.rotation.z=-Math.PI*0.65,J.add(X),J.remove($),{g:J,alto:0.03,radio:0.028,inclina:0.9,boca:0.03,plato:$}}function S5(J){let Q=[];for(let $=0;$<4;$++){let Z=eO[$],K=Z==="presidente"?QR():Z==="morir"?$R():ZR(),[W,Y,X]=q9[$],H=D0.tableWidth/2-0.055,U=D0.tableCenterY+D0.tableThickness/2,N=new _(-H,0,D0.seatDistance-H).applyAxisAngle(new _(0,1,0),X).add(new _(W,0,Y));if(N.y=U,K.g.traverse((F)=>{if(F.isMesh)F.castShadow=!0,F.receiveShadow=!0}),K.plato)N.y+=0.008;if(K.g.position.copy(N),J.add(K.g),K.plato)K.plato.position.copy(N),K.plato.position.y=U+0.004,K.plato.traverse((F)=>{if(F.isMesh)F.receiveShadow=!0}),J.add(K.plato);Q.push({group:K.g,home:N,index:$,tipo:Z,alto:K.alto,radio:K.radio,inclina:K.inclina,boca:K.boca})}return Q}var WQ={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Q9{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var KR=new t9(-1,1,1,-1,0,1);class w5 extends vJ{constructor(){super();this.setAttribute("position",new WJ([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new WJ([0,2,0,0,2,0],2))}}var WR=new w5;class K6{constructor(J){this._mesh=new M0(WR,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,KR)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class L$ extends Q9{constructor(J,Q="tDiffuse"){super();if(this.textureID=Q,this.uniforms=null,this.material=null,J instanceof tJ)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=i9.clone(J.uniforms),this.material=new tJ({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new K6(this.material)}render(J,Q,$){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=$.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class $K extends Q9{constructor(J,Q){super();this.scene=J,this.camera=Q,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,Q,$){let Z=J.getContext(),K=J.state;K.buffers.color.setMask(!1),K.buffers.depth.setMask(!1),K.buffers.color.setLocked(!0),K.buffers.depth.setLocked(!0);let W,Y;if(this.inverse)W=0,Y=1;else W=1,Y=0;if(K.buffers.stencil.setTest(!0),K.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),K.buffers.stencil.setFunc(Z.ALWAYS,W,4294967295),K.buffers.stencil.setClear(Y),K.buffers.stencil.setLocked(!0),J.setRenderTarget($),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget(Q),this.clear)J.clear();J.render(this.scene,this.camera),K.buffers.color.setLocked(!1),K.buffers.depth.setLocked(!1),K.buffers.color.setMask(!0),K.buffers.depth.setMask(!0),K.buffers.stencil.setLocked(!1),K.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),K.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),K.buffers.stencil.setLocked(!0)}}class hY extends Q9{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class xY{constructor(J,Q){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),Q===void 0){let $=J.getSize(new G0);this._width=$.width,this._height=$.height,Q=new Q8(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:O8}),Q.texture.name="EffectComposer.rt1"}else this._width=Q.width,this._height=Q.height;this.renderTarget1=Q,this.renderTarget2=Q.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new L$(WQ),this.copyPass.material.blending=i8,this.timer=new gZ}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,Q){this.passes.splice(Q,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let Q=this.passes.indexOf(J);if(Q!==-1)this.passes.splice(Q,1)}isLastEnabledPass(J){for(let Q=J+1;Q<this.passes.length;Q++)if(this.passes[Q].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let Q=this.renderer.getRenderTarget(),$=!1;for(let Z=0,K=this.passes.length;Z<K;Z++){let W=this.passes[Z];if(W.enabled===!1)continue;if(W.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),W.render(this.renderer,this.writeBuffer,this.readBuffer,J,$),W.needsSwap){if($){let Y=this.renderer.getContext(),X=this.renderer.state.buffers.stencil;X.setFunc(Y.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),X.setFunc(Y.EQUAL,1,4294967295)}this.swapBuffers()}if($K!==void 0){if(W instanceof $K)$=!0;else if(W instanceof hY)$=!1}}this.renderer.setRenderTarget(Q)}reset(J){if(J===void 0){let Q=this.renderer.getSize(new G0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=Q.width,this._height=Q.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,Q){this._width=J,this._height=Q;let $=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize($,Z),this.renderTarget2.setSize($,Z);for(let K=0;K<this.passes.length;K++)this.passes[K].setSize($,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class gY extends Q9{constructor(J,Q,$=null,Z=null,K=null){super();this.scene=J,this.camera=Q,this.overrideMaterial=$,this.clearColor=Z,this.clearAlpha=K,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new f0}render(J,Q,$){let Z=J.autoClear;J.autoClear=!1;let K,W;if(this.overrideMaterial!==null)W=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)K=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:$),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(K);if(this.overrideMaterial!==null)this.scene.overrideMaterial=W;J.autoClear=Z}}var j5={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new f0(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class W6 extends Q9{constructor(J,Q=1,$,Z){super();this.strength=Q,this.radius=$,this.threshold=Z,this.resolution=J!==void 0?new G0(J.x,J.y):new G0(256,256),this.clearColor=new f0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);this.renderTargetBright=new Q8(K,W,{type:O8,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let N=new Q8(K,W,{type:O8,depthBuffer:!1});N.texture.name="UnrealBloomPass.h"+U,N.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(N);let F=new Q8(K,W,{type:O8,depthBuffer:!1});F.texture.name="UnrealBloomPass.v"+U,F.texture.generateMipmaps=!1,this.renderTargetsVertical.push(F),K=Math.round(K/2),W=Math.round(W/2)}let Y=j5;this.highPassUniforms=i9.clone(Y.uniforms),this.highPassUniforms.luminosityThreshold.value=Z,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new tJ({uniforms:this.highPassUniforms,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader}),this.separableBlurMaterials=[];let X=[6,10,14,18,22];K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(X[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new G0(1/K,1/W),K=Math.round(K/2),W=Math.round(W/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=Q,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let H=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=H,this.bloomTintColors=[new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=i9.clone(WQ.uniforms),this.blendMaterial=new tJ({uniforms:this.copyUniforms,vertexShader:WQ.vertexShader,fragmentShader:WQ.fragmentShader,premultipliedAlpha:!0,blending:z9,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new f0,this._oldClearAlpha=1,this._basic=new fJ,this._fsQuad=new K6(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,Q){let $=Math.round(J/2),Z=Math.round(Q/2);this.renderTargetBright.setSize($,Z);for(let K=0;K<this.nMips;K++)this.renderTargetsHorizontal[K].setSize($,Z),this.renderTargetsVertical[K].setSize($,Z),this.separableBlurMaterials[K].uniforms.invSize.value=new G0(1/$,1/Z),$=Math.round($/2),Z=Math.round(Z/2)}render(J,Q,$,Z,K){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let W=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),K)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=$.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=$.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let Y=this.renderTargetBright;for(let X=0;X<this.nMips;X++)this._fsQuad.material=this.separableBlurMaterials[X],this.separableBlurMaterials[X].uniforms.colorTexture.value=Y.texture,this.separableBlurMaterials[X].uniforms.direction.value=W6.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[X]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[X].uniforms.colorTexture.value=this.renderTargetsHorizontal[X].texture,this.separableBlurMaterials[X].uniforms.direction.value=W6.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[X]),J.clear(),this._fsQuad.render(J),Y=this.renderTargetsVertical[X];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,K)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget($),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=W}_getSeparableBlurMaterial(J){let Q=[],$=J/3;for(let W=0;W<J;W++)Q.push(0.39894*Math.exp(-0.5*W*W/($*$))/$);let Z=[],K=[];for(let W=1;W<J;W+=2){let Y=Q[W],X=W+1<J?Q[W+1]:0,H=Y+X;Z.push((W*Y+(W+1)*X)/H),K.push(H)}return new tJ({defines:{KERNEL_PAIRS:Z.length},uniforms:{colorTexture:{value:null},invSize:{value:new G0(0.5,0.5)},direction:{value:new G0(0.5,0.5)},centerWeight:{value:Q[0]},gaussianOffsets:{value:Z},gaussianWeights:{value:K}},vertexShader:`

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

				}`})}}W6.BlurDirectionX=new G0(1,0);W6.BlurDirectionY=new G0(0,1);var V$={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class pY extends Q9{constructor(){super();this.isOutputPass=!0,this.uniforms=i9.clone(V$.uniforms),this.material=new J$({name:V$.name,uniforms:this.uniforms,vertexShader:V$.vertexShader,fragmentShader:V$.fragmentShader}),this._fsQuad=new K6(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,Q,$){if(this.uniforms.tDiffuse.value=$.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},FJ.getTransfer(this._outputColorSpace)===uJ)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===vQ)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===fQ)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===bQ)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===v7)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===xQ)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===gQ)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===hQ)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var P8=(()=>{let J=7;return()=>{return J=Math.imul(J,1664525)+1013904223>>>0,J/4294967296}})();function mY(J,Q=256,$=256){let Z=document.createElement("canvas");Z.width=Q,Z.height=$,J(Z.getContext("2d"),Q,$);let K=new m8(Z);return K.colorSpace=J8,K}function y5(J="255,214,150"){return mY((Q,$,Z)=>{let K=Q.createRadialGradient($/2,Z/2,0,$/2,Z/2,$/2);K.addColorStop(0,`rgba(${J},1)`),K.addColorStop(0.18,`rgba(${J},.55)`),K.addColorStop(0.5,`rgba(${J},.12)`),K.addColorStop(1,`rgba(${J},0)`),Q.fillStyle=K,Q.fillRect(0,0,$,Z)})}var v5=new _(-0.55,-0.035,-0.83).normalize();function YR(J){let Q=new SJ,$=new M0(new R8(80,32,16),new tJ({side:D8,depthWrite:!1,fog:!1,uniforms:{uSol:{value:v5}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 uSol;
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
   }`}));$.renderOrder=-10,Q.add($);let Z=220,K=new Float32Array(Z*3),W=new Float32Array(Z*3);for(let U=0;U<Z;U++){let N=P8(),F=P8()*Math.PI*2,G=0.45+N*0.55,E=Math.sqrt(1-G*G),O=0.25+0.55*P8()*G;K.set([Math.cos(F)*E*75,G*75,Math.sin(F)*E*75],U*3),W.set([O*0.85,O*0.9,O],U*3)}let Y=new vJ;Y.setAttribute("position",new aJ(K,3)),Y.setAttribute("color",new aJ(W,3)),Q.add(new s6(Y,new u7({size:1.3,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0,opacity:0.45})));let X=new M0(new s9(2.1,40),new fJ({color:"#f6e7cc",fog:!1}));X.position.set(26,11,58),X.lookAt(0,1,0),Q.add(X);let H=new c6(new l7({map:y5("255,226,200"),fog:!1,transparent:!0,opacity:0.28,depthWrite:!1,blending:z9}));return H.scale.setScalar(13),H.position.copy(X.position),Q.add(H),J.add(Q),Q}function XR(J){let Q=new Map,$=(F,G=0,E=0)=>{let O=F+G+E;if(!Q.has(O))Q.set(O,{m:new o0({color:G?F:new f0(F).multiplyScalar(0.85),roughness:0.9,emissive:G||"#000",emissiveIntensity:E}),g:[]});return Q.get(O)},Z=(F,G,E,O,B,R=0)=>{F.rotateY(R),F.translate(E,O,B),G.g.push(F)},K=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0"],W=-20;while(W<20){let F=3.4+P8()*2.6,G=3+P8()*2.8,E=10.5+P8()*0.8,O=K[Math.floor(P8()*K.length)];Z(new _J(F,G,2.4),$(O),W+F/2,G/2,E+1.2),Z(new _J(F+0.12,0.18,2.6),$("#d9d2bf"),W+F/2,G+0.09,E+1.2);let B=Math.max(1,Math.floor(F/1.5));for(let R=0;R<B;R++){let q=W+(R+0.5)*F/B,M=P8()<0.4,P=P8()<0.2,V=M?$(P?"#9fc3ff":"#ffd08a",P?"#6f9cff":"#ffb35a",P?1.6:2.2):$("#2a3436");if(Z(new EJ(0.75,0.95),V,q,1.55,E-0.005,Math.PI),G>4.2)Z(new EJ(0.7,0.8),P8()<0.35?$("#ffd08a","#ffb35a",1.5):$("#2a3436"),q,G-1.1,E-0.005,Math.PI);Z(new _J(0.9,0.06,0.12),$("#2c3432"),q,2.08,E-0.06)}for(let R=0;R<Math.floor(F/0.22);R++)Z(new _J(0.018,0.9,0.018),$("#1b2224"),W+0.11+R*0.22,0.45,E-0.55);Z(new _J(F,0.04,0.04),$("#1b2224"),W+F/2,0.9,E-0.55),W+=F+0.15}Z(new _J(44,0.16,1.8),$("#8a8578"),0,0.08,9.6);let Y=[-14,-4,6,16];for(let F of Y)Z(new BJ(0.09,0.12,7,8),$("#6b6457"),F,3.5,9.2),Z(new _J(1.6,0.08,0.08),$("#4f4a40"),F,6.6,9.2);for(let F=0;F<Y.length-1;F++)for(let G of[0,-0.25,0.3]){let E=new _(Y[F],6.6+G,9.2),O=new _(Y[F+1],6.6+G,9.2),B=E.clone().lerp(O,0.5);B.y-=0.55,Z(new j8(new l8(E,B,O),16,0.012,4),$("#101517"),0,0,0)}for(let[F,G,E]of[[-9,12.8,7.5],[11,13.1,8.4],[2.5,13.4,6.4]]){let O=new n7([new _(F,0,G),new _(F+0.3,E*0.5,G),new _(F+0.8,E,G-0.2)]);Z(new j8(O,12,0.16,6),$("#5d5445"),0,0,0);for(let B=0;B<9;B++){let R=B/9*Math.PI*2,q=new c7(0.28,2.6,4,1);q.rotateZ(Math.PI/2+0.55),q.translate(1.3,0,0),q.rotateY(R),Z(q,$("#34503a"),F+0.8,E,G-0.2)}}let X=[];for(let{m:F,g:G}of Q.values()){let E=JQ(G,!1);if(G.forEach((B)=>B.dispose()),!E)continue;let O=new M0(E,F);O.receiveShadow=!0,J.add(O),X.push(O)}let H=new r9("#ffa35c",6,14,1.8);H.position.set(6,5.9,8.6),J.add(H);let U=new M0(new R8(0.14,12,8),new o0({color:"#ffcf94",emissive:"#ff9a45",emissiveIntensity:5}));U.position.copy(H.position),J.add(U);let N=new M0(new BJ(0.03,0.03,1.3,6),new o0({color:"#4f4a40"}));return N.rotation.z=Math.PI/2,N.position.set(6,6.05,8.9),J.add(N),{merged:X,farol:H}}function HR(J,Q){let $=new SJ;$.position.copy(Q),J.add($);let Z=new M0(new R8(0.038,16,12),new o0({color:"#fff4d6",emissive:"#ffd08a",emissiveIntensity:9}));Z.scale.y=1.25,$.add(Z);let K=new M0(new BJ(0.018,0.02,0.05,10),new o0({color:"#2b2a26",roughness:0.6}));K.position.y=0.065,$.add(K);let W=new M0(new BJ(0.004,0.004,1.1,5),new o0({color:"#15181a"}));W.position.y=0.64,$.add(W);let Y=new c6(new l7({map:y5(),transparent:!0,opacity:0.55,depthWrite:!1,blending:z9}));Y.scale.setScalar(0.75),$.add(Y);let X=[],H=new l7({color:"#3b3026",transparent:!0,opacity:0.85,depthWrite:!1});for(let U=0;U<6;U++){let N=new c6(H);N.scale.setScalar(0.012+P8()*0.008),$.add(N),X.push({s:N,r:0.07+P8()*0.12,w:2+P8()*4,f:P8()*6,y:0.05+P8()*0.08,k:1.3+P8()})}return{g:$,halo:Y,polillas:X}}function UR(){let J=new u6;J.add(new M0(new R8(10,24,12),new tJ({side:D8,uniforms:{uSol:{value:v5}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform vec3 uSol;void main(){float l=dot(normalize(vP.xz+vec2(1e-4)),normalize(uSol.xz))*.5+.5;vec3 hor=mix(vec3(.3,.25,.36),vec3(.85,.45,.25),pow(l,2.5));gl_FragColor=vec4(mix(hor,vec3(.05,.07,.17),smoothstep(-.05,.7,vP.y))*mix(.35,1.,smoothstep(-.3,0.,vP.y)),1.);}"})));let Q=($,Z,K,W,Y,X)=>{let H=new M0(new EJ(K,W),new fJ({color:new f0($).multiplyScalar(Z),side:oJ}));H.position.set(...Y),H.lookAt(...X),J.add(H)};return Q("#ffcf94",6,1.2,1.2,[0,6,0],[0,0,0]),Q("#dff3ea",2,5,2,[0,2.5,-8],[0,1,0]),J}function f5({scene:J,renderer:Q,camera:$,controls:Z,software:K,bulbLight:W}){function Y(){let b=new U$(Q),j=UR(),d=b.fromScene(j,0.02);J.environment?.dispose?.(),J.environment=d.texture,J.environmentIntensity=0.75,b.dispose(),j.traverse((h)=>{h.geometry?.dispose(),h.material?.dispose()})}Y(),J.background=new f0("#2a2d4a"),J.fog=new m7("#5a5670",0.017);let X=YR(J),H=XR(J),U=new _(0,D0.surfaceY+1.3,0),N=HR(J,U),F=mY((b,j,d)=>{let h=b.createRadialGradient(j/2,d*0.62,0,j/2,d*0.62,j/2);h.addColorStop(0,"rgba(255,196,110,.95)"),h.addColorStop(0.45,"rgba(255,170,80,.35)"),h.addColorStop(1,"rgba(255,150,60,0)"),b.fillStyle=h,b.fillRect(0,0,j,d)},256,128),G=new M0(new EJ(0.62,0.26),new fJ({map:F,transparent:!0,opacity:0,depthWrite:!1,blending:z9,toneMapped:!1}));G.rotation.x=-Math.PI/2,G.position.y=D0.surfaceY+0.0012,G.renderOrder=3,J.add(G);let E={i:-1,ang:0,alfa:0,objetivo:0,pos:new _},O=(b)=>mY((j,d,h)=>{j.strokeStyle=`rgba(${b},1)`,j.lineWidth=d*0.09,j.beginPath(),j.arc(d/2,h/2,d*0.36,0,Math.PI*2),j.stroke();let s=j.createRadialGradient(d/2,h/2,0,d/2,h/2,d/2);s.addColorStop(0,`rgba(${b},.5)`),s.addColorStop(1,`rgba(${b},0)`),j.fillStyle=s,j.fillRect(0,0,d,h)},128,128),B=["227,174,85","111,183,201"].map((b)=>{let j=new M0(new EJ(0.036,0.036),new fJ({map:O(b),transparent:!0,opacity:0,depthWrite:!1,blending:z9,toneMapped:!1}));return j.rotation.x=-Math.PI/2,j.position.y=D0.surfaceY+0.0015,j.renderOrder=3,J.add(j),j}),R=null,q=$.clone(),M=new _,P=new _,V=null,L=null,C=null,A=!1;function D(){if(V)return;let b=Q.getDrawingBufferSize(new G0),j=new Q8(b.x,b.y,{type:O8,samples:4});V=new xY(Q,j),V.addPass(new gY(J,q)),L=new W6(new G0(b.x/2,b.y/2),0.4,0.5,3.2),C=new L$({uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uVineta:{value:0.34},uGrano:{value:0.018}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uTiempo,uVineta,uGrano;varying vec2 vUv;
    float azar(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTiempo*43.7)*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     vec2 q=vUv-.5;float v=1.-uVineta*smoothstep(.25,.85,length(q*vec2(1.15,1.)));
     c.rgb*=v;
     // Sombras hacia el lila y luces cálidas: el atardecer con el bombillo ya prendido.
     float l=dot(c.rgb,vec3(.2126,.7152,.0722));
     c.rgb*=mix(vec3(.96,.95,1.06),vec3(1.04,1.,.93),smoothstep(.02,.4,l));
     c.rgb+=(azar(vUv*vec2(1920.,1080.))-.5)*uGrano*(.4+l);
     gl_FragColor=c;}`}),V.addPass(C),V.addPass(new pY)}function I(b){if(A=!K&&b==="high",A)D();N.halo.visible=!0,H.farol.visible=b==="high"}function c(b,j){if(V)V.setPixelRatio(Q.getPixelRatio()),V.setSize(b,j);q.aspect=$.aspect,q.updateProjectionMatrix()}let y=W?W.position.clone():null,u=new _;function J0(b,j,{reduced:d,view:h,ends:s,temblor:K0=0}){if(q.copy($),!d){if(M.set(Math.sin(b*0.11)*0.012+Math.sin(b*0.037)*0.008,Math.sin(b*0.083+1)*0.007,Math.cos(b*0.097)*0.01),K0)M.add(P.set(Math.sin(b*97)*K0,Math.sin(b*113)*K0*0.6,Math.cos(b*89)*K0));q.position.add(M),P.copy(Z.target).addScaledVector(M,0.35),q.lookAt(P)}if(!d){let q0=0.012*Math.sin(b*2.86),k0=0.008*Math.sin(b*2.3+1.3);if(u.set(Math.sin(q0)*1.1,0,Math.sin(k0)*1.1),N.g.position.copy(U).add(u),N.g.rotation.set(k0,0,-q0),W)W.position.copy(y).add(u)}if(q.updateMatrixWorld(),N.halo.material.opacity=0.5+0.05*Math.sin(b*23)*Math.sin(b*1.7)+(d?0:0.03*Math.sin(b*3.1)),!d)for(let q0 of N.polillas){let k0=b*q0.w+q0.f;q0.s.position.set(Math.cos(k0)*q0.r,q0.y+Math.sin(k0*q0.k)*0.05,Math.sin(k0*1.3)*q0.r)}let _0=h?.phase==="playing";if(_0&&h.turn!=null){let[q0,k0,d0]=q9[h.turn],Z0=D0.boardLimit+0.075;if(E.i!==h.turn)E.i=h.turn,E.destino=new _(q0*Z0/D0.seatDistance,0,k0*Z0/D0.seatDistance),E.angDestino=d0;E.pos.lerp(E.destino,1-Math.exp(-j*6));let w=E.angDestino-E.ang;w=Math.atan2(Math.sin(w),Math.cos(w)),E.ang+=w*(1-Math.exp(-j*6)),E.objetivo=0.55+(d?0:0.08*Math.sin(b*2.2))}else E.objetivo=0;E.alfa+=(E.objetivo-E.alfa)*(1-Math.exp(-j*4)),G.material.opacity=E.alfa,G.visible=E.alfa>0.01,G.position.set(E.pos.x,D0.surfaceY+0.0012,E.pos.z),G.rotation.set(-Math.PI/2,0,E.ang);for(let q0=0;q0<2;q0++){let k0=B[q0],d0=_0&&s?s[q0]:null;if(!d0){k0.material.opacity=Math.max(0,k0.material.opacity-j*3),k0.visible=k0.material.opacity>0.01;continue}k0.visible=!0,k0.position.set(d0.x,D0.surfaceY+0.0015,d0.z);let Z0=d?1:1+0.12*Math.sin(b*3.4+q0*1.3);k0.scale.setScalar(Z0),k0.material.opacity=Math.min(0.7,k0.material.opacity+j*3)}if(C)C.uniforms.uTiempo.value=b%100}function f(){if(A&&V)V.render();else Q.render(J,q)}function v(){V?.dispose()}return{vista:q,frame:J0,render:f,resize:c,calidad:I,dispose:v,bulbPos:U,entorno:Y}}var Y6=Math.PI*2,ZJ=(J=0,Q=0,$=0)=>new _(J,Q,$),NR=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function FB(J,{onProgress:Q=()=>{}}={}){let $=new u6;$.background=new f0("#2a2d4a"),$.fog=new m7("#5a5670",0.017);let Z=new H8(42,innerWidth/innerHeight,0.08,90);Z.position.set(3.1,2.65,4.2);let K;try{K=new qY({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let W=new URLSearchParams(location.search).has("hq"),Y=!W&&/SwiftShader|llvmpipe|Software/i.test((()=>{let S=K.getContext(),i=S.getExtension("WEBGL_debug_renderer_info");return i?S.getParameter(i.UNMASKED_RENDERER_WEBGL):""})());K.setSize(innerWidth,innerHeight),K.setPixelRatio(Y?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),K.outputColorSpace=J8,K.toneMapping=v7,K.toneMappingExposure=1.24,K.shadowMap.enabled=!Y,K.shadowMap.type=y7,K.info.autoReset=!1,J.appendChild(K.domElement);let X=new zY(Z,K.domElement);X.target.set(0,0.8,-0.15),X.enableDamping=!0,X.dampingFactor=0.065,X.enablePan=!1,X.minDistance=0.8,X.maxDistance=4.6,X.minPolarAngle=0.25,X.maxPolarAngle=Math.PI*0.48,X.update();let H=0.5,U=new bZ("#a3a8d8","#6a4e3c",H);$.add(U);let N=new a6("#ffa06a",0.55);N.position.set(-6,2.6,-9),$.add(N);let F=new o6("#ffc98a",5.2,7,Math.PI*0.32,0.6,2);F.position.set(0,D0.surfaceY+1.26,0),F.target.position.set(0,0,0);let G=new r9("#ffc07a",0.45,3.2,2);G.position.set(0,D0.surfaceY+1.2,0),$.add(G),F.castShadow=!0,F.shadow.mapSize.set(Y?1024:2048,Y?1024:2048),F.shadow.focus=0.52,F.shadow.bias=-0.0002,F.shadow.normalBias=0.004,F.shadow.radius=3,F.shadow.camera.near=0.2,F.shadow.camera.far=4,$.add(F,F.target);let E=new r9("#cfeee0",13,9,2);E.position.set(0,2.5,-3.5),$.add(E);{let S=new M0(new _J(1.2,0.03,0.03),new o0({color:"#e6fff4",emissive:"#e6fff4",emissiveIntensity:4}));S.position.set(0,3.12,-3.6),$.add(S)}let O=new Map,B=new Map;function R(S,i=0.85,W0=0){let a=S+","+i+","+W0;if(!O.has(a))O.set(a,new o0({color:S,roughness:i,metalness:W0}));return O.get(a)}function q(S,i,W0,a=[0,0,0],E0=[1,1,1]){let U0=i.uuid;if(!B.has(U0))B.set(U0,{material:i,geos:[]});let z0=new QJ().compose(ZJ(...W0),new IJ().setFromEuler(new U9(...a)),ZJ(...E0));S.applyMatrix4(z0),B.get(U0).geos.push(S)}function M(S,i,W0,a,E0,U0,z0,m0=0){q(new _J(a,E0,U0),typeof z0==="string"?R(z0):z0,[S,i,W0],[0,m0,0])}function P(S,i,W0,a,E0,U0,z0,m0=10,c0=[0,0,0]){q(new BJ(a,E0,U0,m0),typeof z0==="string"?R(z0):z0,[S,i,W0],c0)}function V(S,i=512,W0=512){let a=document.createElement("canvas");a.width=i,a.height=W0,S(a.getContext("2d"),i,W0);let E0=new m8(a);return E0.colorSpace=J8,E0.anisotropy=Math.min(8,K.capabilities.getMaxAnisotropy()),E0}let L=191,C=()=>{return L=Math.imul(L,1664525)+1013904223>>>0,L/4294967296},A=V((S,i,W0)=>{S.fillStyle="#65432b",S.fillRect(0,0,i,W0);for(let a=0;a<700;a++){S.strokeStyle=`rgba(${C()>0.5?"170,122,70":"35,22,14"},${0.08+C()*0.2})`,S.lineWidth=0.3+C()*2,S.beginPath();let E0=C()*W0;S.moveTo(0,E0);for(let U0=0;U0<i;U0+=20)S.lineTo(U0,E0+Math.sin(U0*0.013+a)*3);S.stroke()}}),D=new o0({map:A,roughness:0.65,color:"#e7bc8c"}),I=R("#4c3022",0.75),c=R("#287770"),y=R("#d2c5a2"),u=R("#3d938e"),J0=V((S,i,W0)=>{let a=i/2;for(let c0=0;c0<2;c0++)for(let F0=0;F0<2;F0++){let g0=F0*a,UJ=c0*a;S.save(),S.beginPath(),S.rect(g0,UJ,a,a),S.clip(),S.fillStyle="#c4b99f",S.fillRect(g0,UJ,a,a);for(let[DJ,I8]of[[g0,UJ],[g0+a,UJ],[g0,UJ+a],[g0+a,UJ+a]])S.strokeStyle="#8d6450",S.lineWidth=a*0.04,S.beginPath(),S.arc(DJ,I8,a*0.42,0,Math.PI*2),S.stroke(),S.fillStyle="#4f6763",S.beginPath(),S.arc(DJ,I8,a*0.13,0,Math.PI*2),S.fill(),S.strokeStyle="#c4b99f",S.lineWidth=a*0.02,S.beginPath(),S.arc(DJ,I8,a*0.11,0,Math.PI*2),S.stroke();let JJ=g0+a/2,VJ=UJ+a/2,hJ=(DJ,I8)=>{S.fillStyle=I8,S.beginPath(),S.moveTo(JJ,VJ-DJ),S.lineTo(JJ+DJ,VJ),S.lineTo(JJ,VJ+DJ),S.lineTo(JJ-DJ,VJ),S.closePath(),S.fill()};hJ(a*0.2,"#8d6450"),hJ(a*0.13,"#c4b99f"),hJ(a*0.07,"#3a3630"),S.restore(),S.strokeStyle="#7e7563",S.lineWidth=3,S.strokeRect(g0+1.5,UJ+1.5,a-3,a-3)}for(let c0=0;c0<9000;c0++)S.fillStyle=C()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",S.fillRect(C()*i,C()*W0,1+C()*2,1+C()*2);for(let c0=0;c0<40;c0++){let F0=S.createRadialGradient(0,0,0,0,0,1),g0=C()*i,UJ=C()*W0,JJ=20+C()*90;S.save(),S.translate(g0,UJ),S.scale(JJ,JJ),F0.addColorStop(0,"rgba(40,34,26,.10)"),F0.addColorStop(1,"rgba(40,34,26,0)"),S.fillStyle=F0,S.fillRect(-1,-1,2,2),S.restore()}},1024,1024);J0.wrapS=J0.wrapT=F7,J0.repeat.set(22.88888888888889,27.77777777777778),M(-5.7,-0.1,-4.575,20.6,0.2,15.85,new o0({map:J0,roughness:0.86,color:"#9d937f"})),M(0,-0.2,8.5,40,0.1,10.3,"#2b3133"),M(0,-0.075,3.45,40,0.15,0.2,"#a8a391");for(let S=-10;S<11;S++)M(S*1.8,-0.146,6.3,0.7,0.008,0.06,"#b9ad83");M(0,1.6,-5.1,7.5,3.4,0.2,c),M(-3.8,1.6,-3.85,0.2,3.4,2.7,c),M(3.8,1.6,-3.85,0.2,3.4,2.7,c),M(-3.48,1.1,-2.52,0.7,2.3,0.32,c),M(3.45,1.1,-2.52,0.8,2.3,0.32,c),M(0,2.95,-2.52,7.5,0.42,0.35,u),M(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let S=0;S<30;S++)M(-4+S*0.276,3.15,-3.7,0.028,0.055,4.6,"#82928a");M(0,0.7,-4.24,3.9,1.4,0.62,D),M(0,1.43,-4.2,4.08,0.1,0.78,D);for(let S=0;S<3;S++)M(-0.6,1.58+S*0.48,-4.78,5.8,0.065,0.38,D),M(-0.6,1.84+S*0.48,-4.98,5.8,0.48,0.065,"#443e30");M(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),M(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");let f=[];for(let S=0;S<29;S++)f.push({pos:[-3.18+S*0.182,2.095,-4.69],scale:0.7+S%5*0.07,color:["#566641","#b0762a","#2e5a45","#7a3024","#c9b36a","#3b4f7a"][S*7%6]});let v=new O7([new G0(0,0),new G0(0.036,0),new G0(0.043,0.025),new G0(0.043,0.17),new G0(0.019,0.205),new G0(0.017,0.285),new G0(0.021,0.29),new G0(0.021,0.305),new G0(0,0.31)],12);f.forEach((S)=>q(v.clone(),R(S.color,0.3),S.pos,[0,0,0],[S.scale,S.scale,S.scale]));for(let[S,i,W0]of[[-3.1,-1.9,"#a8483a"]])for(let a=0;a<3;a++){M(S,0.19+a*0.34,i,0.52,0.3,0.4,W0);for(let E0=0;E0<5;E0++)M(S-0.2+E0*0.1,0.18+a*0.34,i+0.204,0.055,0.16,0.015,"#2c3025")}for(let S=0;S<5;S++){let i=-7-S*3.5;M(i,1.5,-3,3.1,3,3.2,["#d9a35c","#7fb1a4","#d8c7a2","#c98d7c","#a6bf8e"][S]),M(i,2.2,-1.38,1,0.8,0.045,"#b59961"),M(i,2.2,-1.35,0.045,0.86,0.055,"#273e37"),M(i,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let S=0;S<4;S++)P(-5-S*5,2.3,-1,0.08,0.09,4.6,"#665443"),M(-5-S*5,4.2,-1,1.8,0.09,0.09,"#514b3d");function b(S,i,W0,a="#202d28"){let E0=new l8(ZJ(...S),ZJ(...W0),ZJ(...i));q(new j8(E0,20,0.008,4,!1),R(a),[0,0,0])}let j=[];for(let S of[-1.95,1.95])P(S,1.45,2.55,0.035,0.045,2.9,"#5b4a38",8);for(let[S,i,W0]of[[[-2.7,2.9,-2.45],[-1.95,2.85,2.55],0.5],[[2.7,2.9,-2.45],[1.95,2.85,2.55],0.5],[[-1.95,2.85,2.55],[1.95,2.85,2.55],0.32]]){let a=ZJ(...S),E0=ZJ(...i),U0=a.clone().lerp(E0,0.5);U0.y-=W0*2;let z0=new l8(a,U0,E0);q(new j8(z0,24,0.006,4,!1),R("#1c2320"),[0,0,0]);let m0=Math.round(a.distanceTo(E0)/0.42);for(let c0=1;c0<m0;c0++){let F0=z0.getPointAt(c0/m0);j.push(F0.setY(F0.y-0.035))}}{let S=new R8(0.022,10,8);S.scale(1,1.3,1);let i=["#ffd89a","#ffc27a","#ffe3a8"],W0=new S9(S,new fJ({color:new f0(4.5,4.5,4.5)}),j.length),a=new wJ;j.forEach((E0,U0)=>{a.position.copy(E0),a.updateMatrix(),W0.setMatrixAt(U0,a.matrix),W0.setColorAt(U0,new f0(i[U0%i.length]))}),$.add(W0)}b([0,3.22,-1.6],[0,3.19,0],[0,3.02,-0.8]);let d=new SJ;d.position.set(4.3,0,-1.7),$.add(d);let h=new M0(new BJ(0.1,0.15,4.5,9),R("#696047"));h.position.y=2.25,d.add(h);for(let S=0;S<9;S++){let i=new M0(new R8(1,10,5),R(S%2?"#4a654c":"#344e3d"));i.scale.set(0.27,0.075,1.5),i.position.set(Math.sin(S*Y6/9)*0.72,4.35,Math.cos(S*Y6/9)*0.72),i.rotation.set(0.23,S*Y6/9,0),d.add(i)}let s=new L8({map:A,color:"#d9a877",roughness:0.5,clearcoat:0.55,clearcoatRoughness:0.28}),K0=new M0(new _8(D0.tableWidth,D0.tableThickness,D0.tableWidth,3,0.035),s);K0.position.y=D0.tableCenterY,K0.castShadow=!0,K0.receiveShadow=!0,$.add(K0);let _0=V((S,i,W0)=>{S.fillStyle="#2f5b47",S.fillRect(0,0,i,W0);for(let E0=0;E0<W0;E0+=2)for(let U0=0;U0<i;U0+=2){let z0=(C()-0.5)*14,m0=((U0>>1)+(E0>>1))%2?4:-4;S.fillStyle=`rgb(${47+z0+m0},${91+z0+m0},${71+z0+m0})`,S.fillRect(U0,E0,2,2)}for(let E0=0;E0<4;E0++){let U0=E0*Math.PI/2,z0=i/2+Math.sin(U0)*i*0.36,m0=W0/2+Math.cos(U0)*W0*0.36,c0=S.createRadialGradient(z0,m0,0,z0,m0,i*0.2);c0.addColorStop(0,"rgba(120,150,120,.16)"),c0.addColorStop(1,"rgba(120,150,120,0)"),S.fillStyle=c0,S.fillRect(0,0,i,W0)}let a=S.createRadialGradient(i/2,W0/2,i*0.1,i/2,W0/2,i*0.62);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,0,.28)"),S.fillStyle=a,S.fillRect(0,0,i,W0)},512,512),q0=new M0(new _8(D0.feltWidth,0.012,D0.feltWidth,2,0.02),new L8({map:_0,roughness:0.97,sheen:0.8,sheenRoughness:0.55,sheenColor:new f0("#9fc7a8")}));q0.position.y=D0.feltCenterY,q0.receiveShadow=!0,$.add(q0);let k0=D0.tableWidth/2-0.07;for(let S of[-k0,k0])for(let i of[-k0,k0])M(S,0.35,i,0.075,0.68,0.075,I);let d0=["#C8402F","#6FB7C9"];for(let S=0;S<4;S++){let[i,W0,a]=q9[S],E0=D0.feltWidth/2-0.012,U0=new M0(new EJ(D0.feltWidth*0.72,0.009),new o0({color:d0[S%2],roughness:0.9}));U0.rotation.set(-Math.PI/2,0,a),U0.position.set(i*E0/D0.seatDistance,D0.surfaceY+0.0006,W0*E0/D0.seatDistance),U0.receiveShadow=!0,$.add(U0)}let Z0=new o0({roughness:0.92,map:V((S,i,W0)=>{S.fillStyle="#8f7446",S.fillRect(0,0,i,W0);let a=12,E0=i/a;for(let U0=0;U0<a;U0++)for(let z0=0;z0<a;z0++){let m0=(z0+U0)%2===0;for(let c0=0;c0<3;c0++){let F0=150+C()*45|0;S.fillStyle=`rgb(${F0+30},${F0+8},${F0-45})`;let g0=c0*E0/3+E0*0.04,UJ=E0/3-E0*0.08;if(m0)S.fillRect(z0*E0+1,U0*E0+g0,E0-2,UJ);else S.fillRect(z0*E0+g0,U0*E0+1,UJ,E0-2)}}S.fillStyle="rgba(40,28,14,.18)";for(let U0=0;U0<=a;U0++)S.fillRect(U0*E0-1,0,2,W0),S.fillRect(0,U0*E0-1,i,2)},256,256)});for(let S=0;S<4;S++){let[i,W0,a]=q9[S],E0=new SJ;E0.position.set(i,0,W0),E0.rotation.y=a,$.add(E0);let U0=R(S%2?"#5e9fb2":"#b53f2e",0.62),z0=(m0,c0,F0,g0,UJ,JJ,VJ=U0,hJ=0.008)=>{let DJ=ZJ(g0,UJ,JJ).applyAxisAngle(ZJ(0,1,0),a).add(ZJ(i,0,W0));q(new _8(m0,c0,F0,2,hJ),VJ,DJ.toArray(),[0,a,0])};z0(D0.chairSeatWidth-0.04,0.035,0.5,0,D0.chairSeatY,0,Z0,0.01);for(let m0 of[-1,1])z0(0.04,0.05,0.54,m0*(D0.chairSeatWidth/2-0.02),D0.chairSeatY-0.005,0);for(let m0 of[-1,1])z0(D0.chairSeatWidth,0.05,0.04,0,D0.chairSeatY-0.005,m0*0.25);for(let m0 of[-0.24,0.24])for(let c0 of[-0.21,0.21])z0(0.04,D0.chairSeatY,0.04,m0,D0.chairSeatY/2,c0);for(let m0 of[-0.24,0.24])z0(0.024,0.024,0.42,m0,0.15,0);z0(0.48,0.024,0.024,0,0.15,0.21);for(let m0 of[-0.24,0.24])z0(0.04,0.52,0.04,m0,D0.chairSeatY+0.26,-0.23);for(let m0 of[0.2,0.33,0.46])z0(0.46,m0===0.46?0.07:0.045,0.022,0,D0.chairSeatY+m0,-0.23)}function w(S,i,W0,a,E0,U0=60){let z0=V((m0,c0,F0)=>{m0.fillStyle=a,m0.fillRect(0,0,c0,F0),m0.fillStyle=E0,m0.textAlign="center",m0.textBaseline="middle",m0.font=`bold ${U0}px Georgia`,m0.fillText(S,c0/2,F0/2)},1024,256);return new M0(new EJ(i,W0),new fJ({map:z0}))}let m=w("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);m.position.set(0,2.94,-2.33),$.add(m);let n=w("MESA",0.11,0.029,"#284e3e","#81906b",77);{let S=document.createElement("canvas");S.width=512,S.height=136;let i=new m8(S);i.colorSpace=J8;let W0=()=>{let a=S.getContext("2d");a.clearRect(0,0,512,136),a.font=`96px ${document.fonts?.check?.("96px Shrikhand")?"Shrikhand":"Georgia"}`,a.textAlign="center",a.textBaseline="middle",a.fillStyle="rgba(170,205,170,.42)",a.fillText("Mesa",256,72),i.needsUpdate=!0};W0(),document.fonts?.load?.("96px Shrikhand").then(W0).catch(()=>{}),n.material=new o0({map:i,transparent:!0,depthWrite:!1,roughness:1})}n.rotation.x=-Math.PI/2,n.position.set(0,D0.surfaceY+0.001,0.3),$.add(n);let $0=new SJ;$0.position.set(-0.9,2.62,-3.45),$0.rotation.x=-Math.PI/2,$.add($0),P(-0.9,2.9,-3.45,0.015,0.015,0.56,"#777a68",8),P(-0.9,3.16,-3.45,0.075,0.075,0.025,"#767763",12);let t=new M0(new R8(0.075,12,8),R("#41493d"));$0.add(t);for(let S=0;S<5;S++){let i=new M0(new _J(0.13,0.5,0.025),R("#85856e",0.88,0.05));i.position.set(Math.sin(S*Y6/5)*0.285,Math.cos(S*Y6/5)*0.285,0),i.rotation.z=-S*Y6/5,$0.add(i)}let V0=new SJ;V0.position.set(-12,0.05,5.2),$.add(V0);for(let S of[-0.36,0.36]){let i=new M0(new w9(0.19,0.038,7,14),R("#182221"));i.position.set(S,0.2,0),V0.add(i)}let R0=new M0(new _8(0.65,0.17,0.2,2,0.04),R("#823e2f",0.45,0.25));R0.position.y=0.49,V0.add(R0);let H0=new M0(new _J(0.35,0.06,0.22),R("#202725"));H0.position.set(-0.08,0.61,0),V0.add(H0);let w0=new M0(new BJ(0.015,0.015,0.45,6),R("#8c9c96",0.4,0.5));w0.position.set(0.32,0.59,0),w0.rotation.z=-0.3,V0.add(w0);let n0=A5({scene:$,texture:V,mat:R,box:M,cylinder:P,random:C,teal:c,wood:D,storeSign:m}),GJ=_5({scene:$,texture:V,mat:R,box:M,cylinder:P,staticGeo:q,random:C,renderer:K});T5({scene:$,random:C});for(let{material:S,geos:i}of B.values()){let W0=JQ(i.some((a)=>!a.index)?i.map((a)=>a.index?a.toNonIndexed():a):i,!1);if(W0){let a=new M0(W0,S);a.receiveShadow=!0,W0.computeBoundingBox(),a.castShadow=W0.boundingBox.distanceToPoint(ZJ(0,0.8,0))<1.6&&W0.boundingBox.getSize(ZJ()).length()<8,$.add(a)}i.forEach((a)=>a.dispose())}let b0=new SJ,CJ=new SJ;$.add(b0,CJ);let TJ=new _8(D0.tileLength,D0.tileThickness,D0.tileWidth,3,0.0024),xJ=new L8({color:"#ede5d2",roughness:0.5,clearcoat:0.3,clearcoatRoughness:0.4}),g=new L8({color:"#e2dac6",roughness:0.42,clearcoat:0.7,clearcoatRoughness:0.3}),iJ=new o0({color:"#b98b3e",roughness:0.28,metalness:1}),XJ=new BJ(0.0019,0.0019,0.0009,12),OJ=new o0({color:"#0b0a09",roughness:0.55}),T=new o0({color:"#2a2622",roughness:0.6}),k=new BJ(D0.pipRadius,D0.pipRadius,0.0007,14),x=new _J(0.0014,0.0005,D0.tileWidth*0.8),e=new Set([TJ,k,x,XJ]),O0=new Set([xJ,g,OJ,T,iJ]),C0=[s,q0.material,xJ,g].map((S)=>[S,{clearcoat:S.clearcoat,sheen:S.sheen}]);function T0(S,i,W0=!1){let a=new SJ,E0=new M0(TJ,W0?g:xJ);if(E0.castShadow=!0,E0.receiveShadow=!0,a.add(E0),!W0){let U0=[];if([S,i].forEach((c0,F0)=>NR[c0].forEach((g0)=>U0.push(ZJ((F0===0?-1:1)*D0.tileLength/4+(g0%3-1)*D0.pipColumnSpacing,D0.tileThickness/2+0.0005,(Math.floor(g0/3)-1)*D0.pipRowSpacing)))),U0.length){let c0=new S9(k,OJ,U0.length),F0=new QJ;U0.forEach((g0,UJ)=>c0.setMatrixAt(UJ,F0.makeTranslation(g0.x,g0.y,g0.z))),a.add(c0)}let z0=new M0(x,T);z0.position.y=D0.tileThickness/2+0.0002,a.add(z0);let m0=new M0(XJ,iJ);m0.position.y=D0.tileThickness/2+0.0004,a.add(m0)}return a}function Y0(S){return ZJ(S.x,D0.surfaceY+D0.tileThickness/2+0.001,S.z)}let N0=new M0(new w9(0.2,0.006,5,38),new fJ({color:"#e8bf70",transparent:!0,opacity:0.7}));N0.rotation.x=-Math.PI/2,N0.position.y=0.027,$.add(N0);let P0=[],i0=[],I0=[],B0=[],e0=new kY,t0=0,PJ=4,l=[];B0.push(...S5($));let S0=ZJ(),X0=ZJ(),A0=ZJ(),x0=ZJ(),L0=new QJ,j0=ZJ(),KJ=ZJ();function cJ(S){let i=null;if(S.root.traverse((JJ)=>{if(JJ.isSkinnedMesh&&JJ.morphTargetDictionary&&!i)i=JJ}),!i||i.morphTargetDictionary.parpadeo==null)return;S.cara={mesh:i,iP:i.morphTargetDictionary.parpadeo,iS:i.morphTargetDictionary.sonrisa};let W0=i.geometry.attributes.position,a=i.userData?.boca;if(a){let JJ=1e9,VJ=0;for(let hJ=0;hJ<W0.count;hJ++){let DJ=(W0.getX(hJ)-a[0])**2+(W0.getY(hJ)-a[1])**2+(W0.getZ(hJ)-a[2])**2;if(DJ<JJ)JJ=DJ,VJ=hJ}S.bocaMundo=(hJ)=>{return i.skeleton.update(),i.getVertexPosition(VJ,hJ).applyMatrix4(i.matrixWorld)}}let E0=i.userData?.ojos,U0=i.userData?.parpado;if(!E0||!U0)return;let z0=i.geometry.attributes.position,m0=(JJ)=>{let VJ=1e9,hJ=0;for(let DJ=0;DJ<z0.count;DJ++){let I8=(z0.getX(DJ)-JJ[0])**2+(z0.getY(DJ)-JJ[1])**2+(z0.getZ(DJ)-JJ[2])**2;if(I8<VJ)VJ=I8,hJ=DJ}return hJ},c0=new EJ(0.027,0.0125,8,4);c0.translate(0,-0.00625,0);let F0=c0.attributes.position,g0=[];for(let JJ=0;JJ<F0.count;JJ++){let VJ=F0.getX(JJ)/0.0135,hJ=-F0.getY(JJ)/0.0125;F0.setZ(JJ,0.0032*Math.cos(VJ*Math.PI/2)*(0.5+0.5*hJ));let DJ=hJ>0.85?0.45:1;g0.push(DJ,DJ,DJ)}c0.setAttribute("color",new WJ(g0,3)),c0.computeVertexNormals();let UJ=new o0({color:new f0().setRGB(...U0,J8),roughness:0.7,vertexColors:!0});S.parpados=E0.map((JJ)=>{let VJ=new M0(c0,UJ);return VJ.visible=!1,VJ.frustumCulled=!1,$.add(VJ),{m:VJ,k:m0(JJ)}})}function jJ(S){let i=S.parpados;if(!i||!S.cara)return;let W0=S.parpadeo||0;if(W0<0.03){for(let z0 of i)z0.m.visible=!1;return}let a=S.cara.mesh;a.skeleton.update();let E0=a.getVertexPosition(i[0].k,S0).applyMatrix4(a.matrixWorld).clone(),U0=a.getVertexPosition(i[1].k,S0).applyMatrix4(a.matrixWorld).clone();if(S.head.getWorldPosition(j0),S.front.getWorldPosition(KJ),x0.subVectors(KJ,j0).normalize(),X0.subVectors(U0,E0).normalize(),A0.crossVectors(x0,X0).normalize(),A0.y<0)A0.negate();X0.crossVectors(A0,x0).normalize(),L0.makeBasis(X0,A0,x0);for(let[z0,m0]of[[i[0],E0],[i[1],U0]])z0.m.visible=!0,z0.m.quaternion.setFromRotationMatrix(L0),z0.m.position.copy(m0).addScaledVector(A0,0.0052).addScaledVector(x0,0.0024),z0.m.scale.set(1,W0,1)}async function d8(S,i){try{Q(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][S]}…`,t0/PJ);let W0=await e0.loadAsync(`/models/${i}.glb`);i0[S]=W0;let a=W0.scene,E0=new SJ;E0.add(a);let U0=new Z$(a);if(W0.animations[0])U0.clipAction(W0.animations.find((JJ)=>JJ.name==="Seated")||W0.animations[0]).play();U0.setTime(D0.neutralPoseTime),a.updateMatrixWorld(!0),a.traverse((JJ)=>{if(JJ.isSkinnedMesh)JJ.computeBoundingBox();if(JJ.isMesh)JJ.castShadow=!0,JJ.receiveShadow=!0,JJ.frustumCulled=!1,JJ.material.roughness=0.83});let z0=new A8().setFromObject(a),m0=a.getObjectByName("Hips"),c0=m0?.getWorldPosition(ZJ())||z0.getCenter(ZJ());a.position.set(-c0.x,-z0.min.y,-c0.z);let[F0,g0,UJ]=q9[S];if(E0.position.set(F0,0,g0),E0.rotation.y=UJ,$.add(E0),P0[S]={root:a,holder:E0,index:S,pose:bY(a),head:a.getObjectByName("Head"),neck:a.getObjectByName("neck"),front:a.getObjectByName("headfront"),chest:a.getObjectByName("Spine"),hips:a.getObjectByName("Hips"),lomo:a.getObjectByName("Spine02"),muslos:[a.getObjectByName("LeftUpLeg"),a.getObjectByName("RightUpLeg")],hombros:[[1,a.getObjectByName("LeftShoulder")],[-1,a.getObjectByName("RightShoulder")]],spine:a.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map((JJ)=>({lado:JJ,hombro:a.getObjectByName(JJ+"Shoulder"),brazo:a.getObjectByName(JJ+"Arm"),antebrazo:a.getObjectByName(JJ+"ForeArm"),mano:a.getObjectByName(JJ+"Hand")}))},P0[S].bebida=B0.find((JJ)=>JJ.index===S),cJ(P0[S]),t0++,Q(t0===4?"The table is ready.":`${t0} of 4 seats ready`,t0/PJ),I0.length===0&&M9>0)N6(M9)}catch(W0){l.push(i),console.error("Character load failed",i,W0),Q(`Could not load ${i}. Reload to retry.`,t0/PJ)}}let $9=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((S,i)=>d8(i,S))),D$=null,X6=null,H6="",YQ=null,V8=f5({scene:$,renderer:K,camera:Z,controls:X,software:Y,bulbLight:F});V8.calidad("high");let U6=new Set,B9=new Map,XQ=[0,1,2,3].map(()=>ZJ()),HQ=(S)=>{let i=S.detail||{};if(i.active)U6.add(i.seat),B9.set(i.seat,i.type);else U6.delete(i.seat)};window.addEventListener("mesa:botvoice",HQ);let C7=null,M9=0,ZK="",P7=0,B$="attract",K8=null,Z9=[],KK=0,M$=0;function UQ(S){while(S.children.length){let i=S.children.pop();i.parent=null,i.traverse((W0)=>{if(W0.isMesh&&!e.has(W0.geometry))W0.geometry.dispose();if(W0.isMesh&&!O0.has(W0.material))W0.material.dispose()})}}function N6(S){M9=S;let i=Math.min(8,S);for(let W0=I0.length-1;W0>=i;W0--)$.remove(I0[W0].holder),I0.pop();while(I0.length<i&&i0.filter(Boolean).length){let W0=I0.length,a=i0[W0%4]||i0.find(Boolean),E0=nZ(a.scene),U0=new SJ;U0.add(E0);let z0=new Z$(E0);if(a.animations[0])z0.clipAction(a.animations.find((g0)=>g0.name==="Seated")||a.animations[0]).play();z0.setTime(D0.neutralPoseTime),E0.updateMatrixWorld(!0),E0.traverse((g0)=>{if(g0.isSkinnedMesh)g0.computeBoundingBox();if(g0.isMesh)g0.castShadow=!1,g0.frustumCulled=!1});let m0=new A8().setFromObject(E0),c0=E0.getObjectByName("Hips")?.getWorldPosition(ZJ())||m0.getCenter(ZJ());E0.position.x-=c0.x,E0.position.y-=m0.min.y,E0.position.z-=c0.z,U0.position.set(-2.5+W0%4*1.66,0,-2.5-Math.floor(W0/4)*0.65),U0.rotation.y=0,$.add(U0);let F0=new M0(new _J(0.56,0.06,0.54),y);F0.position.set(0,D0.chairSeatY,0),U0.add(F0),I0.push({root:E0,holder:U0,pose:bY(E0),head:E0.getObjectByName("Head"),neck:E0.getObjectByName("neck"),front:E0.getObjectByName("headfront"),chest:E0.getObjectByName("Spine"),spine:E0.getObjectByName("Spine01"),index:W0+4})}}let z=!1,p=ZJ();function Q0(){let S=Z.position,i=X.target;if(p.subVectors(S,i),p.length()>4.6)S.copy(i).addScaledVector(p.normalize(),4.6);S.z=Math.max(S.z,-2.1),S.x=T9.clamp(S.x,-4.9,4.9),S.y=T9.clamp(S.y,0.35,5.2)}let r=-1,o=null,y0=X.minDistance;function u0(S,i,W0){if(document.documentElement.classList.contains("reduced"))return;let a=ZJ(1,0,1).normalize(),E0=-9;for(let[z0,m0]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let c0=ZJ(z0,0,m0).normalize(),F0=c0.x*S.x+c0.z*S.z;if(F0>E0)E0=F0,a=c0}let U0=S.clone().addScaledVector(a,0.3);if(U0.x=T9.clamp(U0.x,-0.4,0.4),U0.z=T9.clamp(U0.z,-0.4,0.4),U0.y=D0.surfaceY+(W0?0.12:0.19),!o)y0=X.minDistance;X.minDistance=0.1,o={pos:o?.pos||Z.position.clone(),target:o?.target||X.target.clone(),at:B8.elapsedTime+3.4},K8={from:Z.position.clone(),to:U0,fromTarget:X.target.clone(),toTarget:S.clone().setY(S.y+0.01),t:0,dur:0.45}}function v0(S="table"){if(X.minDistance=S==="seat"||S==="close"?0.3:0.7,X.minPolarAngle=S==="overhead"?0.01:0.25,Z.aspect<0.95&&S==="table")S="overhead";let i,W0=ZJ(0,0.8,0);if(S==="attract")i=ZJ(0.75,1.3,4.4),W0=ZJ(-1,1.4,-1.2);else if(S==="overhead")i=ZJ(0.001,1.86,0.34),W0=ZJ(0,D0.surfaceY,0.02);else if(S==="seat")i=ZJ(0,1.36,0.74),W0=ZJ(0,0.82,-0.12);else if(S==="close")i=ZJ(0.62,1.3,1),W0=ZJ(-0.03,0.85,-0.08);else i=ZJ(0.8,1.89,1.24),W0=ZJ(0,0.9,-0.2);if(S!=="attract"&&S!=="seat"&&Z.aspect<1.3){let a=Math.min(2.4,Math.pow(1.6/Z.aspect,0.8));i=W0.clone().add(i.clone().sub(W0).multiplyScalar(a))}if(P0[0])P0[0].root.visible=S!=="seat";o=null,X.minDistance=Math.min(X.minDistance,y0),K8={from:Z.position.clone(),to:i,fromTarget:X.target.clone(),toTarget:W0,t:0}}let l0=ZJ(0,1,0),a0=new IJ().setFromAxisAngle(ZJ(1,0,0),0.12),HJ=new IJ().setFromAxisAngle(l0,Math.PI/2),RJ=new IJ().setFromAxisAngle(ZJ(0,0,1),Math.PI/2),s0=D0.tableCenterY+D0.tableThickness/2+D0.tileLength/2*Math.cos(0.12)+D0.tileThickness/2*Math.sin(0.12)+0.001;function zJ(S,i,W0){let a=q9[S][2];return W0.quaternion.setFromAxisAngle(l0,a).multiply(a0).multiply(HJ).multiply(RJ),W0.position.set(i,s0,-D0.rackRadius).applyAxisAngle(l0,a),W0}let gJ=new S9(TJ,g,28);gJ.count=0,gJ.castShadow=!0,gJ.receiveShadow=!0,gJ.frustumCulled=!1,CJ.add(gJ);let nJ=[[],[],[],[]],kJ=new wJ,Y8=[0,0,0,0],p0="",X8=new Set;function AJ(S){let i=0;for(let W0=0;W0<4;W0++){let a=X8.has(W0)?0:Y8[W0],E0=nJ[W0];while(E0.length<a)E0.push((E0.length-(a-1)/2)*D0.rackSpacing);E0.length=a;for(let U0=0;U0<a;U0++){let z0=(U0-(a-1)/2)*D0.rackSpacing;E0[U0]+=(z0-E0[U0])*(1-Math.exp(-S*10)),zJ(W0,E0[U0],kJ),kJ.updateMatrix(),gJ.setMatrixAt(i++,kJ.matrix)}}gJ.count=i,gJ.instanceMatrix.needsUpdate=!0}let F8=new SJ;$.add(F8);let S8=new Map,K9="",h9="";function bJ(){for(let S=0;S<28;S++){let i=T0(0,0,!0);i.position.set((S*37%23-11)*0.016,D0.surfaceY+D0.tileThickness*(0.55+S%3*0.9),(S*13%19-9)*0.016),i.rotation.y=S*1.73,b0.add(i)}}let pJ=(S)=>S*S*(3-2*S),k9=new IJ().setFromAxisAngle(ZJ(1,0,0),Math.PI),sJ=new IJ().setFromAxisAngle(l0,-Math.PI/2);function C9(S,i){S.revealed.forEach((W0,a)=>{let E0=W0.length,U0=q9[a][2];W0.forEach((z0,m0)=>{let c0=(m0-(E0-1)/2)*D0.rackSpacing,F0=T0(z0.a,z0.b);zJ(a,c0,kJ);let g0=kJ.quaternion.clone().multiply(k9),UJ=kJ.position.clone(),JJ=ZJ(c0,D0.surfaceY+D0.tileThickness/2+0.001,-D0.rackRadius+0.047).applyAxisAngle(l0,U0),VJ=new IJ().setFromAxisAngle(l0,U0).multiply(sJ);F0.position.copy(UJ),F0.quaternion.copy(g0),F0.visible=!1,b0.add(F0),Z9.push({obj:F0,from:UJ,to:JJ,qFrom:g0,qTo:VJ,elapsed:-(i+a*0.3+m0*0.055),duration:0.42,revela:a,ultima:m0===E0-1})})})}function x9(S,i=0){C7=S;{let U0=S&&(S.phase==="handEnd"||S.phase==="seriesEnd")&&S.result,z0=U0?S.handNo+":"+S.phase:"";if(z0&&z0!==H6)X6={t:B8.elapsedTime+0.5,team:S.result.team??null};if(!U0)X6=null;H6=z0}if(M9!==i)N6(i);let W0=!S||S.phase==="lobby"?"pila":"mano"+S.handNo;if(W0!==K9){K9=W0,UQ(b0),S8.clear(),Z9=Z9.filter((U0)=>U0.reparto);for(let U0 of P0)if(U0)U0.jugada=null;if(W0==="pila")bJ()}if(S&&S.chain?.length){let U0=E5(S.chain,S.moves),z0=S.event,m0=["domino","capicua","tranque"].includes(z0?.type),c0=S.moves[S.moves.length-1],F0=z0?.type==="domino"||z0?.type==="capicua",g0=z0?.type==="play"?z0.tile:m0&&c0?.type==="play"?c0.tile:null;S.chain.forEach((UJ,JJ)=>{if(S8.has(UJ.id))return;let VJ=T0(UJ.x,UJ.y),hJ=Y0(U0[JJ]);if(VJ.position.copy(hJ),VJ.rotation.y=U0[JJ].yaw,VJ.updateMatrix(),b0.add(VJ),S8.set(UJ.id,VJ),UJ.id!==g0||UJ.seat==null)return;zJ(UJ.seat,0,kJ);let DJ={obj:VJ,from:kJ.position.clone(),to:hJ.clone(),qFrom:kJ.quaternion.clone(),qTo:VJ.quaternion.clone(),elapsed:0,duration:F0?0.7:0.55,golpe:F0};if(VJ.position.copy(DJ.from),VJ.quaternion.copy(DJ.qFrom),Z9.push(DJ),m0)u0(hJ,UJ.seat,F0);KK=performance.now();let I8=P0[UJ.seat];if(D$={p:hJ.clone(),t:B8.elapsedTime+DJ.duration},I8)I8.reaction={time:B8.elapsedTime},I8.jugada={t0:B8.elapsedTime,obj:VJ,anim:DJ,hasta:hJ.clone()}})}if(S?.phase==="playing"&&S.handNo!==P7&&S.moves.length===0){P7=S.handNo,UQ(F8),Z9=Z9.filter((U0)=>!U0.reparto),M$=performance.now()+3300;for(let U0=0;U0<4;U0++)nJ[U0]=Array.from({length:7},(z0,m0)=>(m0-3)*D0.rackSpacing);for(let U0=0;U0<28;U0++){let z0=U0%4,m0=Math.floor(U0/4),c0=T0(0,0,!0),F0=ZJ((U0*37%23-11)*0.015,D0.surfaceY+0.012,(U0*13%19-9)*0.015);c0.position.copy(F0),c0.rotation.y=U0*1.73,F8.add(c0);let g0=zJ(z0,(m0-3)*D0.rackSpacing,new wJ);Z9.push({obj:c0,from:F0,to:g0.position.clone(),qFrom:c0.quaternion.clone(),qTo:g0.quaternion.clone(),elapsed:-U0*0.065,duration:1.1,reparto:!0})}}let a=S?.moves?.[S.moves.length-1],E0=S?S.handNo+":"+S.moves.length:"";if(a?.type==="pass"&&h9!==E0){h9=E0;let U0=P0[a.seat];if(U0)U0.toque={t0:B8.elapsedTime}}{let U0=S&&(S.phase==="handEnd"||S.phase==="seriesEnd")&&S.revealed,z0=U0?"r"+S.handNo:"";if(!U0)p0="",X8.clear();else if(z0!==p0){p0=z0;let m0=S.result?.type;C9(S,m0==="domino"||m0==="capicua"?3.4:m0==="tranque"?2.5:1.2)}}Y8=[0,1,2,3].map((U0)=>!S||S.phase==="lobby"?0:S.counts[U0]??0),N0.visible=!1,YQ=S?.phase==="playing"&&S.chain?.length?q5(S.chain,S.moves):null}let B8=new pZ,NQ=0,WK=0,k$=0,GQ=60,lY=!1,C$=!1,FQ=null,G6="high",uY=null,P$=performance.now(),I$=0,dY=!1,b5=new URLSearchParams(location.search).has("debug"),cY=F.intensity,I7=ZJ(),h5=ZJ(0,D0.surfaceY,0);function YK(){if(lY||C$){FQ=null;return}FQ=requestAnimationFrame(YK);let S=B8.getDelta(),i=Math.min(S,0.06),W0=uY??B8.elapsedTime,a=performance.now();if(WK++,k$+=S,k$>1){if(GQ=WK/k$,WK=0,k$=0,!W&&!I$&&G6==="high"&&a-P$>9000&&a-P$<30000&&GQ<30)I$=a,XK.quality("low"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"low"}));else if(!W&&G6==="low"&&!dY&&a-(I$||P$)>9000&&a-(I$||P$)<40000&&GQ<20)dY=!0,XK.quality("min"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"min"}))}NQ++,K.info.reset();let E0=document.documentElement.classList.contains("reduced");if(o&&B8.elapsedTime>o.at)K8={from:Z.position.clone(),to:o.pos,fromTarget:X.target.clone(),toTarget:o.target,t:0,dur:1.2},o=null,X.minDistance=y0;let U0=0;if(r>=0){let F0=B8.elapsedTime-r;if(F0<0.5){let g0=0.0045*Math.exp(-F0*8)*Math.sin(F0*Y6*18);b0.position.y=g0,CJ.position.y=g0,U0=E0?0:0.004*Math.exp(-F0*9),F.intensity=cY*(1+0.35*Math.exp(-F0*14))}else r=-1,b0.position.y=0,CJ.position.y=0,F.intensity=cY}if(K8){K8.t=Math.min(1,K8.t+i/(K8.dur||1.1));let F0=pJ(K8.t);if(Z.position.lerpVectors(K8.from,K8.to,F0),X.target.lerpVectors(K8.fromTarget,K8.toTarget,F0),K8.t===1)K8=null}if(!E0)$0.rotation.z=W0*3.5,d.rotation.z=Math.sin(W0*0.47)*0.009,n0.update(W0),GJ.update(W0);let z0=C7,m0={dt:i,jugando:z0?.phase==="playing",turno:z0?.turn,habla:U6,hablaTipo:B9,foco:D$,fin:X6,cabezas:P0.map((F0,g0)=>F0?.head?F0.head.getWorldPosition(XQ[g0]):null)};for(let F0 of P0){if(!F0)continue;QK(F0,W0,E0,m0),jJ(F0)}for(let F0=0;F0<I0.length;F0++)if((NQ+F0)%2===0)QK(I0[F0],W0,E0,m0);Z9=Z9.filter((F0)=>{if(F0.elapsed+=i,F0.elapsed<0)return!0;let g0=Math.min(1,F0.elapsed/F0.duration);if(F0.revela!=null){F0.obj.visible=!0,X8.add(F0.revela);let UJ=pJ(g0);if(F0.obj.quaternion.slerpQuaternions(F0.qFrom,F0.qTo,UJ),F0.obj.position.lerpVectors(F0.from,F0.to,UJ),F0.obj.position.y+=Math.sin(g0*Math.PI)*0.012,g0>=1&&F0.ultima)dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{revela:!0}}));return g0<1}if(F0.reparto)return F0.obj.position.lerpVectors(F0.from,F0.to,pJ(g0)),F0.obj.position.y+=Math.sin(g0*Math.PI)*0.035,F0.obj.quaternion.slerpQuaternions(F0.qFrom,F0.qTo,pJ(Math.min(1,Math.max(0,(g0-0.3)/0.7)))),g0<1;if(F0.obj.quaternion.slerpQuaternions(F0.qFrom,F0.qTo,pJ(Math.min(1,g0/0.4))),F0.golpe){let UJ=Math.min(1,g0/0.62);F0.obj.position.lerpVectors(F0.from,F0.to,pJ(UJ)),F0.obj.position.y+=g0<0.62?Math.sin(UJ*Math.PI/2)*0.17:0.17*(1-((g0-0.62)/0.38)**2)}else F0.obj.position.lerpVectors(F0.from,F0.to,pJ(g0)),F0.obj.position.y+=Math.sin(g0*Math.PI)*0.07;if(g0>=1&&!F0.sono){if(F0.sono=!0,F0.golpe)r=B8.elapsedTime;dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{golpe:!!F0.golpe}}))}return g0<1});let c0=a<M$;if(CJ.visible=!c0,!c0&&F8.children.length)UQ(F8);if(AJ(i),X.update(),!K8&&!o&&!z)Q0();if(V8.frame(W0,i,{reduced:E0,view:z0,ends:YQ,temblor:U0}),V8.render(),NQ%2===0)for(let F0 of document.querySelectorAll("[data-seatlabel]")){let g0=Number(F0.dataset.seatlabel),[UJ,JJ]=q9[g0],VJ=P0[g0]?.head,hJ=VJ&&VJ.getWorldPosition(I7).distanceTo(V8.vista.position)<h5.distanceTo(V8.vista.position)-0.2;if(hJ)I7.y-=0.3;else if(VJ)I7.y+=0.23;else I7.set(UJ,1.45,JJ);let DJ=I7.project(V8.vista),I8=!1;if(!hJ&&DJ.y>0.8&&VJ)VJ.getWorldPosition(I7).y-=0.1,DJ=I7.project(V8.vista),I8=!0;let x5=Math.min(DJ.y,0.8);F0.style.transform=`translate(${(DJ.x*0.5+0.5)*innerWidth}px,${(-x5*0.5+0.5)*innerHeight}px) translate(-50%,${hJ?"-50%":I8?"0":"-100%"})`,F0.style.visibility=DJ.z>1||Math.abs(DJ.x)>1.1||DJ.y<-1.15?"hidden":"visible"}if(NQ%30===0||NQ===1){if(window.mesaDiagnostics={cam:Z.position.toArray().map((F0)=>+F0.toFixed(2)),fps:Math.round(GQ),drawCalls:K.info.render.calls,triangles:K.info.render.triangles,characters:t0,crowd:M9,visibleCrowd:I0.length,boardTiles:C7?.chain.length||0,quality:G6,modelErrors:l},b5){window.mesaRigDebug=P0.filter(Boolean).map((g0)=>({index:g0.index,head:g0.head?.getWorldPosition(ZJ()).toArray(),hip:g0.hips?.getWorldPosition(ZJ()).toArray(),rootScale:g0.root.scale.toArray()}));let F0=document.querySelector("#perf");if(F0)F0.textContent=`${Math.round(GQ)} fps · ${K.info.render.calls} draws`}}}window.mesaCamara=(S,i)=>{K8=null,o=null,z=!0,X.minDistance=0.1,X.maxDistance=30,Z.position.set(...S),X.target.set(...i),X.update()},window.mesaCara=(S,i,W0)=>{let a=P0[S];if(a)a.caraFija=i==null?null:{p:i,s:W0??0}},window.mesaBeber=(S,i)=>{let W0=P0[S];if(W0&&W0.bebida&&!W0.jugada)W0.trago={t0:B8.elapsedTime,fijo:i}},x9(null),YK();let nY=()=>{if(Z.aspect<0.95)Z.setViewOffset(innerWidth,innerHeight*1.24,0,innerHeight*0.24,innerWidth,innerHeight);else Z.clearViewOffset();Z.updateProjectionMatrix()},sY=()=>Y?0.65:G6==="min"?Math.min(devicePixelRatio,1)*0.55:G6==="low"?Math.min(devicePixelRatio,1)*0.8:Math.min(devicePixelRatio,1.5,1920/innerWidth),iY=()=>{Z.aspect=innerWidth/innerHeight,nY(),K.setPixelRatio(sY()),K.setSize(innerWidth,innerHeight),V8.resize(innerWidth,innerHeight)};nY(),window.addEventListener("resize",iY),X.addEventListener("start",()=>{K8=null,o=null}),K.domElement.addEventListener("webglcontextrestored",()=>V8.entorno?.());let XK={update:x9,setCrowd:N6,setCamera:v0,ready:$9,sampleTime(S){uY=S;for(let i of[...P0.filter(Boolean),...I0])QK(i,S,!1);V8.frame(S,0,{reduced:!1,view:C7,ends:YQ}),V8.render()},setMode(S){B$=S,v0(S==="attract"?"attract":"table")},quality(S){G6=S;let i=S!=="high";F.castShadow=!i&&!Y;for(let[W0,a]of C0){let E0=i?0:a.clearcoat,U0=i?0:a.sheen;if(W0.clearcoat!==E0||W0.sheen!==U0)W0.clearcoat=E0,W0.sheen=U0,W0.needsUpdate=!0}G.visible=!i,U.intensity=i?H+0.1:H,K.setPixelRatio(sY()),V8.calidad(S),V8.resize(innerWidth,innerHeight)},pause(){C$=!0},resume(){if(!C$)return;if(C$=!1,B8.getDelta(),!FQ)YK()},dispose(){if(lY=!0,V8.dispose(),window.removeEventListener("mesa:botvoice",HQ),FQ)cancelAnimationFrame(FQ);window.removeEventListener("resize",iY),X.dispose(),K.dispose(),J.replaceChildren()}};return XK}export{FB as createWorld};

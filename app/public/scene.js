var AH="186",_8={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},S8={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wH=0,SW=1,TH=2;var b6=1,J$=2,c7=3,j8=0,tJ=1,mJ=2,s9=0,x6=1,jW=2,yW=3,vW=4,_H=5;var n7=100,SH=101,jH=102,yH=103,vH=104,fH=200,hH=201,bH=202,xH=203,gH=204,pH=205,lH=206,mH=207,dH=208,uH=209,cH=210,nH=211,sH=212,iH=213,oH=214,aH=0,rH=1,tH=2,fW=3,eH=4,JY=5,QY=6,$Y=7,WY=0,ZY=1,KY=2,b9=0,hW=1,bW=2,xW=3,g6=4,gW=5,pW=6,lW=7;var s7=301,$7=302,Q$=303,$$=304,p6=306,y8=1000,i7=1001,W$=1002,x9=1003,Z$=1004;var W7=1005;var dJ=1006,o7=1007;var i9=1008;var g9=1009,HY=1010,YY=1011,l6=1012,mW=1013,v8=1014,G8=1015,o9=1016,dW=1017,uW=1018,a7=1020,XY=35902,UY=35899,GY=1021,NY=1022,a9=1023,Z7=1026,K7=1027,EY=1028,cW=1029,H7=1030,nW=1031;var sW=1033,K$=33776,H$=33777,Y$=33778,X$=33779,iW=35840,oW=35841,aW=35842,rW=35843,tW=36196,eW=37492,JZ=37496,QZ=37488,$Z=37489,U$=37490,WZ=37491,ZZ=37808,KZ=37809,HZ=37810,YZ=37811,XZ=37812,UZ=37813,GZ=37814,NZ=37815,EZ=37816,qZ=37817,FZ=37818,OZ=37819,RZ=37820,LZ=37821,VZ=36492,BZ=36494,kZ=36495,DZ=36283,MZ=36284,G$=36285,CZ=36286;var zZ=2300,N$=2301;var PZ=0,m6=1,r7=2;var IZ=0,qY=1,Y7="",Z9="srgb",N9="srgb-linear",AZ="linear",kJ="srgb";var FY=512,OY=513,RY=514,E$=515,LY=516,VY=517,q$=518,BY=519;var wZ="300 es",TZ=2000;function OU(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function RU(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function l7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function kY(){let J=l7("canvas");return J.style.display="block",J}var xK={},m7=null;function y6(...J){let Q="THREE."+J.shift();if(m7)m7("log",Q,...J);else console.log(Q,...J)}function DY(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function T0(...J){J=DY(J);let Q="THREE."+J.shift();if(m7)m7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function m0(...J){J=DY(J);let Q="THREE."+J.shift();if(m7)m7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function e8(...J){let Q=J.join(" ");if(Q in xK)return;xK[Q]=!0,T0(...J)}function MY(J,Q,$){return new Promise(function(W,Z){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:W()}}setTimeout(K,$)})}var CY={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class p9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,K=W.length;Z<K;Z++)W[Z].call(this,J);J.target=null}}}var aJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gK=1234567,T6=Math.PI/180,J7=180/Math.PI;function M9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(aJ[J&255]+aJ[J>>8&255]+aJ[J>>16&255]+aJ[J>>24&255]+"-"+aJ[Q&255]+aJ[Q>>8&255]+"-"+aJ[Q>>16&15|64]+aJ[Q>>24&255]+"-"+aJ[$&63|128]+aJ[$>>8&255]+"-"+aJ[$>>16&255]+aJ[$>>24&255]+aJ[W&255]+aJ[W>>8&255]+aJ[W>>16&255]+aJ[W>>24&255]).toLowerCase()}function s0(J,Q,$){return Math.max(Q,Math.min($,J))}function _Z(J,Q){return(J%Q+Q)%Q}function LU(J,Q,$,W,Z){return W+(J-Q)*(Z-W)/($-Q)}function VU(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function _6(J,Q,$){return(1-$)*J+$*Q}function BU(J,Q,$,W){return _6(J,Q,1-Math.exp(-$*W))}function kU(J,Q=1){return Q-Math.abs(_Z(J,Q*2)-Q)}function DU(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function MU(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function CU(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function zU(J,Q){return J+Math.random()*(Q-J)}function PU(J){return J*(0.5-Math.random())}function IU(J){if(J!==void 0)gK=J;let Q=gK+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function AU(J){return J*T6}function wU(J){return J*J7}function TU(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function _U(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function SU(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function jU(J,Q,$,W,Z){let{cos:K,sin:H}=Math,Y=K($/2),X=H($/2),U=K((Q+W)/2),G=H((Q+W)/2),E=K((Q-W)/2),N=H((Q-W)/2),q=K((W-Q)/2),F=H((W-Q)/2);switch(Z){case"XYX":J.set(Y*G,X*E,X*N,Y*U);break;case"YZY":J.set(X*N,Y*G,X*E,Y*U);break;case"ZXZ":J.set(X*E,X*N,Y*G,Y*U);break;case"XZX":J.set(Y*G,X*F,X*q,Y*U);break;case"YXY":J.set(X*q,Y*G,X*F,Y*U);break;case"ZYZ":J.set(X*F,X*q,Y*G,Y*U);break;default:T0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Z)}}function h9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function qJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var d6={DEG2RAD:T6,RAD2DEG:J7,generateUUID:M9,clamp:s0,euclideanModulo:_Z,mapLinear:LU,inverseLerp:VU,lerp:_6,damp:BU,pingpong:kU,smoothstep:DU,smootherstep:MU,randInt:CU,randFloat:zU,randFloatSpread:PU,seededRandom:IU,degToRad:AU,radToDeg:wU,isPowerOfTwo:TU,ceilPowerOfTwo:_U,floorPowerOfTwo:SU,setQuaternionFromProperEuler:jU,normalize:qJ,denormalize:h9};class U0{static{U0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=s0(this.x,J.x,Q.x),this.y=s0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=s0(this.x,J,Q),this.y=s0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(s0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(s0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,K=this.y-J.y;return this.x=Z*$-K*W+J.x,this.y=Z*W+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class YJ{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,K,H){let Y=$[W+0],X=$[W+1],U=$[W+2],G=$[W+3],E=Z[K+0],N=Z[K+1],q=Z[K+2],F=Z[K+3];if(G!==F||Y!==E||X!==N||U!==q){let B=Y*E+X*N+U*q+G*F;if(B<0)E=-E,N=-N,q=-q,F=-F,B=-B;let R=1-H;if(B<0.9995){let O=Math.acos(B),P=Math.sin(O);R=Math.sin(R*O)/P,H=Math.sin(H*O)/P,Y=Y*R+E*H,X=X*R+N*H,U=U*R+q*H,G=G*R+F*H}else{Y=Y*R+E*H,X=X*R+N*H,U=U*R+q*H,G=G*R+F*H;let O=1/Math.sqrt(Y*Y+X*X+U*U+G*G);Y*=O,X*=O,U*=O,G*=O}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,W,Z,K){let H=$[W],Y=$[W+1],X=$[W+2],U=$[W+3],G=Z[K],E=Z[K+1],N=Z[K+2],q=Z[K+3];return J[Q]=H*q+U*G+Y*N-X*E,J[Q+1]=Y*q+U*E+X*G-H*N,J[Q+2]=X*q+U*N+H*E-Y*G,J[Q+3]=U*q-H*G-Y*E-X*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(W/2),G=H(Z/2),E=Y($/2),N=Y(W/2),q=Y(Z/2);switch(K){case"XYZ":this._x=E*U*G+X*N*q,this._y=X*N*G-E*U*q,this._z=X*U*q+E*N*G,this._w=X*U*G-E*N*q;break;case"YXZ":this._x=E*U*G+X*N*q,this._y=X*N*G-E*U*q,this._z=X*U*q-E*N*G,this._w=X*U*G+E*N*q;break;case"ZXY":this._x=E*U*G-X*N*q,this._y=X*N*G+E*U*q,this._z=X*U*q+E*N*G,this._w=X*U*G-E*N*q;break;case"ZYX":this._x=E*U*G-X*N*q,this._y=X*N*G+E*U*q,this._z=X*U*q-E*N*G,this._w=X*U*G+E*N*q;break;case"YZX":this._x=E*U*G+X*N*q,this._y=X*N*G+E*U*q,this._z=X*U*q-E*N*G,this._w=X*U*G-E*N*q;break;case"XZY":this._x=E*U*G-X*N*q,this._y=X*N*G-E*U*q,this._z=X*U*q+E*N*G,this._w=X*U*G+E*N*q;break;default:T0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],G=Q[10],E=$+H+G;if(E>0){let N=0.5/Math.sqrt(E+1);this._w=0.25/N,this._x=(U-Y)*N,this._y=(Z-X)*N,this._z=(K-W)*N}else if($>H&&$>G){let N=2*Math.sqrt(1+$-H-G);this._w=(U-Y)/N,this._x=0.25*N,this._y=(W+K)/N,this._z=(Z+X)/N}else if(H>G){let N=2*Math.sqrt(1+H-$-G);this._w=(Z-X)/N,this._x=(W+K)/N,this._y=0.25*N,this._z=(Y+U)/N}else{let N=2*Math.sqrt(1+G-$-H);this._w=(K-W)/N,this._x=(Z+X)/N,this._y=(Y+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(s0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+W*X-Z*Y,this._y=W*U+K*Y+Z*H-$*X,this._z=Z*U+K*X+$*Y-W*H,this._w=K*U-$*H-W*Y-Z*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=this.dot(J);if(H<0)$=-$,W=-W,Z=-Z,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{static{S.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(pK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(pK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,K=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*K,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*K,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*W-H*$),U=2*(H*Q-Z*W),G=2*(Z*$-K*Q);return this.x=Q+Y*X+K*G-H*U,this.y=$+Y*U+H*X-Z*G,this.z=W+Y*G+Z*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=s0(this.x,J.x,Q.x),this.y=s0(this.y,J.y,Q.y),this.z=s0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=s0(this.x,J,Q),this.y=s0(this.y,J,Q),this.z=s0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(s0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=W*Y-Z*H,this.y=Z*K-$*Y,this.z=$*H-W*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return JW.copy(this).projectOnVector(J),this.sub(JW)}reflect(J){return this.sub(JW.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(s0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var JW=new S,pK=new YJ;class c0{static{c0.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X)}set(J,Q,$,W,Z,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=W,U[2]=H,U[3]=Q,U[4]=Z,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],G=$[7],E=$[2],N=$[5],q=$[8],F=W[0],B=W[3],R=W[6],O=W[1],P=W[4],k=W[7],L=W[2],z=W[5],w=W[8];return Z[0]=K*F+H*O+Y*L,Z[3]=K*B+H*P+Y*z,Z[6]=K*R+H*k+Y*w,Z[1]=X*F+U*O+G*L,Z[4]=X*B+U*P+G*z,Z[7]=X*R+U*k+G*w,Z[2]=E*F+N*O+q*L,Z[5]=E*B+N*P+q*z,Z[8]=E*R+N*k+q*w,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*Z*U+$*H*Y+W*Z*X-W*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=U*K-H*X,E=H*Y-U*Z,N=X*Z-K*Y,q=Q*G+$*E+W*N;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let F=1/q;return J[0]=G*F,J[1]=(W*X-U*$)*F,J[2]=(H*$-W*K)*F,J[3]=E*F,J[4]=(U*Q-W*Y)*F,J[5]=(W*Z-H*Q)*F,J[6]=N*F,J[7]=($*Y-X*Q)*F,J[8]=(K*Q-$*Z)*F,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,K,H){let Y=Math.cos(Z),X=Math.sin(Z);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-W*X,W*Y,-W*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return e8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(QW.makeScale(J,Q)),this}rotate(J){return e8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(QW.makeRotation(-J)),this}translate(J,Q){return e8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(QW.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var QW=new c0,lK=new c0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),mK=new c0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function yU(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,K,H){if(this.enabled===!1||K===H||!K||!H)return Z;if(this.spaces[K].transfer==="srgb")Z.r=U8(Z.r),Z.g=U8(Z.g),Z.b=U8(Z.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)Z.applyMatrix3(this.spaces[K].toXYZ),Z.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")Z.r=g7(Z.r),Z.g=g7(Z.g),Z.b=g7(Z.b);return Z},workingToColorSpace:function(Z,K){return this.convert(Z,this.workingColorSpace,K)},colorSpaceToWorking:function(Z,K){return this.convert(Z,K,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,K=this.workingColorSpace){return Z.fromArray(this.spaces[K].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,K,H){return Z.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(Z,K){return e8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(Z,K)},toWorkingColorSpace:function(Z,K){return e8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(Z,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:lK,fromXYZ:mK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:lK,fromXYZ:mK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var r0=yU();function U8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function g7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var P7;class SZ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(P7===void 0)P7=l7("canvas");P7.width=J.width,P7.height=J.height;let W=P7.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=P7}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=l7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let K=0;K<Z.length;K++)Z[K]=U8(Z[K]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(U8(Q[$]/255)*255);else Q[$]=U8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return T0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var vU=0;class u6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vU++}),this.uuid=M9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let K=0,H=W.length;K<H;K++)if(W[K].isDataTexture)Z.push($W(W[K].image));else Z.push($W(W[K]))}else Z=$W(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function $W(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return SZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return T0("Texture: Unable to serialize Texture."),{}}var fU=0,WW=new S;class SJ extends p9{constructor(J=SJ.DEFAULT_IMAGE,Q=SJ.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,K=1008,H=1023,Y=1009,X=SJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:fU++}),this.uuid=M9(),this.name="",this.source=new u6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new U0(0,0),this.repeat=new U0(1,1),this.center=new U0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new c0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(WW).x}get height(){return this.source.getSize(WW).y}get depth(){return this.source.getSize(WW).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){T0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){T0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}SJ.DEFAULT_IMAGE=null;SJ.DEFAULT_MAPPING=300;SJ.DEFAULT_ANISOTROPY=1;class FJ{static{FJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*W+K[12]*Z,this.y=K[1]*Q+K[5]*$+K[9]*W+K[13]*Z,this.z=K[2]*Q+K[6]*$+K[10]*W+K[14]*Z,this.w=K[3]*Q+K[7]*$+K[11]*W+K[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],G=Y[8],E=Y[1],N=Y[5],q=Y[9],F=Y[2],B=Y[6],R=Y[10];if(Math.abs(U-E)<0.01&&Math.abs(G-F)<0.01&&Math.abs(q-B)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+F)<0.1&&Math.abs(q+B)<0.1&&Math.abs(X+N+R-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let P=(X+1)/2,k=(N+1)/2,L=(R+1)/2,z=(U+E)/4,w=(G+F)/4,_=(q+B)/4;if(P>k&&P>L)if(P<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(P),W=z/$,Z=w/$;else if(k>L)if(k<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(k),$=z/W,Z=_/W;else if(L<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(L),$=w/Z,W=_/Z;return this.set($,W,Z,Q),this}let O=Math.sqrt((B-q)*(B-q)+(G-F)*(G-F)+(E-U)*(E-U));if(Math.abs(O)<0.001)O=1;return this.x=(B-q)/O,this.y=(G-F)/O,this.z=(E-U)/O,this.w=Math.acos((X+N+R-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=s0(this.x,J.x,Q.x),this.y=s0(this.y,J.y,Q.y),this.z=s0(this.z,J.z,Q.z),this.w=s0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=s0(this.x,J,Q),this.y=s0(this.y,J,Q),this.z=s0(this.z,J,Q),this.w=s0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(s0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jZ extends p9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new FJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new FJ(0,0,J,Q),this.textures=[];let W={width:J,height:Q,depth:$.depth},Z=new SJ(W),K=$.count;for(let H=0;H<K;H++)this.textures[H]=Z.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new u6(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class E9 extends jZ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class F$ extends SJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class yZ extends SJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class g0{static{g0.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,K,H,Y,X,U,G,E,N,q,F,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X,U,G,E,N,q,F,B)}set(J,Q,$,W,Z,K,H,Y,X,U,G,E,N,q,F,B){let R=this.elements;return R[0]=J,R[4]=Q,R[8]=$,R[12]=W,R[1]=Z,R[5]=K,R[9]=H,R[13]=Y,R[2]=X,R[6]=U,R[10]=G,R[14]=E,R[3]=N,R[7]=q,R[11]=F,R[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new g0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/I7.setFromMatrixColumn(J,0).length(),Z=1/I7.setFromMatrixColumn(J,1).length(),K=1/I7.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(W),X=Math.sin(W),U=Math.cos(Z),G=Math.sin(Z);if(J.order==="XYZ"){let E=K*U,N=K*G,q=H*U,F=H*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=X,Q[1]=N+q*X,Q[5]=E-F*X,Q[9]=-H*Y,Q[2]=F-E*X,Q[6]=q+N*X,Q[10]=K*Y}else if(J.order==="YXZ"){let E=Y*U,N=Y*G,q=X*U,F=X*G;Q[0]=E+F*H,Q[4]=q*H-N,Q[8]=K*X,Q[1]=K*G,Q[5]=K*U,Q[9]=-H,Q[2]=N*H-q,Q[6]=F+E*H,Q[10]=K*Y}else if(J.order==="ZXY"){let E=Y*U,N=Y*G,q=X*U,F=X*G;Q[0]=E-F*H,Q[4]=-K*G,Q[8]=q+N*H,Q[1]=N+q*H,Q[5]=K*U,Q[9]=F-E*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let E=K*U,N=K*G,q=H*U,F=H*G;Q[0]=Y*U,Q[4]=q*X-N,Q[8]=E*X+F,Q[1]=Y*G,Q[5]=F*X+E,Q[9]=N*X-q,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let E=K*Y,N=K*X,q=H*Y,F=H*X;Q[0]=Y*U,Q[4]=F-E*G,Q[8]=q*G+N,Q[1]=G,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=N*G+q,Q[10]=E-F*G}else if(J.order==="XZY"){let E=K*Y,N=K*X,q=H*Y,F=H*X;Q[0]=Y*U,Q[4]=-G,Q[8]=X*U,Q[1]=E*G+F,Q[5]=K*U,Q[9]=N*G-q,Q[2]=q*G-N,Q[6]=H*U,Q[10]=F*G+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(hU,J,bU)}lookAt(J,Q,$){let W=this.elements;if(U9.subVectors(J,Q),U9.lengthSq()===0)U9.z=1;if(U9.normalize(),C8.crossVectors($,U9),C8.lengthSq()===0){if(Math.abs($.z)===1)U9.x+=0.0001;else U9.z+=0.0001;U9.normalize(),C8.crossVectors($,U9)}return C8.normalize(),CQ.crossVectors(U9,C8),W[0]=C8.x,W[4]=CQ.x,W[8]=U9.x,W[1]=C8.y,W[5]=CQ.y,W[9]=U9.y,W[2]=C8.z,W[6]=CQ.z,W[10]=U9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],G=$[5],E=$[9],N=$[13],q=$[2],F=$[6],B=$[10],R=$[14],O=$[3],P=$[7],k=$[11],L=$[15],z=W[0],w=W[4],_=W[8],D=W[12],A=W[1],d=W[5],h=W[9],p=W[13],e=W[2],j=W[6],n=W[10],$0=W[14],u=W[3],E0=W[7],t=W[11],W0=W[15];return Z[0]=K*z+H*A+Y*e+X*u,Z[4]=K*w+H*d+Y*j+X*E0,Z[8]=K*_+H*h+Y*n+X*t,Z[12]=K*D+H*p+Y*$0+X*W0,Z[1]=U*z+G*A+E*e+N*u,Z[5]=U*w+G*d+E*j+N*E0,Z[9]=U*_+G*h+E*n+N*t,Z[13]=U*D+G*p+E*$0+N*W0,Z[2]=q*z+F*A+B*e+R*u,Z[6]=q*w+F*d+B*j+R*E0,Z[10]=q*_+F*h+B*n+R*t,Z[14]=q*D+F*p+B*$0+R*W0,Z[3]=O*z+P*A+k*e+L*u,Z[7]=O*w+P*d+k*j+L*E0,Z[11]=O*_+P*h+k*n+L*t,Z[15]=O*D+P*p+k*$0+L*W0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],G=J[6],E=J[10],N=J[14],q=J[3],F=J[7],B=J[11],R=J[15],O=Y*N-X*E,P=H*N-X*G,k=H*E-Y*G,L=K*N-X*U,z=K*E-Y*U,w=K*G-H*U;return Q*(F*O-B*P+R*k)-$*(q*O-B*L+R*z)+W*(q*P-F*L+R*w)-Z*(q*k-F*z+B*w)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(Z*U-H*Y)+W*(Z*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=J[9],E=J[10],N=J[11],q=J[12],F=J[13],B=J[14],R=J[15],O=Q*H-$*K,P=Q*Y-W*K,k=Q*X-Z*K,L=$*Y-W*H,z=$*X-Z*H,w=W*X-Z*Y,_=U*F-G*q,D=U*B-E*q,A=U*R-N*q,d=G*B-E*F,h=G*R-N*F,p=E*R-N*B,e=O*p-P*h+k*d+L*A-z*D+w*_;if(e===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/e;return J[0]=(H*p-Y*h+X*d)*j,J[1]=(W*h-$*p-Z*d)*j,J[2]=(F*w-B*z+R*L)*j,J[3]=(E*z-G*w-N*L)*j,J[4]=(Y*A-K*p-X*D)*j,J[5]=(Q*p-W*A+Z*D)*j,J[6]=(B*k-q*w-R*P)*j,J[7]=(U*w-E*k+N*P)*j,J[8]=(K*h-H*A+X*_)*j,J[9]=($*A-Q*h-Z*_)*j,J[10]=(q*z-F*k+R*O)*j,J[11]=(G*k-U*z-N*O)*j,J[12]=(H*D-K*d-Y*_)*j,J[13]=(Q*d-$*D+W*_)*j,J[14]=(F*P-q*L-B*O)*j,J[15]=(U*L-G*P+E*O)*j,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,K=J.x,H=J.y,Y=J.z,X=Z*K,U=Z*H;return this.set(X*K+$,X*H-W*Y,X*Y+W*H,0,X*H+W*Y,U*H+$,U*Y-W*K,0,X*Y-W*H,U*Y+W*K,Z*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,K){return this.set(1,$,Z,0,J,1,K,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=Z+Z,U=K+K,G=H+H,E=Z*X,N=Z*U,q=Z*G,F=K*U,B=K*G,R=H*G,O=Y*X,P=Y*U,k=Y*G,L=$.x,z=$.y,w=$.z;return W[0]=(1-(F+R))*L,W[1]=(N+k)*L,W[2]=(q-P)*L,W[3]=0,W[4]=(N-k)*z,W[5]=(1-(E+R))*z,W[6]=(B+O)*z,W[7]=0,W[8]=(q+P)*w,W[9]=(B-O)*w,W[10]=(1-(E+F))*w,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinantAffine();if(Z===0)return $.set(1,1,1),Q.identity(),this;let K=I7.set(W[0],W[1],W[2]).length(),H=I7.set(W[4],W[5],W[6]).length(),Y=I7.set(W[8],W[9],W[10]).length();if(Z<0)K=-K;y9.copy(this);let X=1/K,U=1/H,G=1/Y;return y9.elements[0]*=X,y9.elements[1]*=X,y9.elements[2]*=X,y9.elements[4]*=U,y9.elements[5]*=U,y9.elements[6]*=U,y9.elements[8]*=G,y9.elements[9]*=G,y9.elements[10]*=G,Q.setFromRotationMatrix(y9),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2*Z/(Q-J),G=2*Z/($-W),E=(Q+J)/(Q-J),N=($+W)/($-W),q,F;if(Y)q=Z/(K-Z),F=K*Z/(K-Z);else if(H===2000)q=-(K+Z)/(K-Z),F=-2*K*Z/(K-Z);else if(H===2001)q=-K/(K-Z),F=-K*Z/(K-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=E,X[12]=0,X[1]=0,X[5]=G,X[9]=N,X[13]=0,X[2]=0,X[6]=0,X[10]=q,X[14]=F,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),G=2/($-W),E=-(Q+J)/(Q-J),N=-($+W)/($-W),q,F;if(Y)q=1/(K-Z),F=K/(K-Z);else if(H===2000)q=-2/(K-Z),F=-(K+Z)/(K-Z);else if(H===2001)q=-1/(K-Z),F=-Z/(K-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=E,X[1]=0,X[5]=G,X[9]=0,X[13]=N,X[2]=0,X[6]=0,X[10]=q,X[14]=F,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var I7=new S,y9=new g0,hU=new S(0,0,0),bU=new S(1,1,1),C8=new S,CQ=new S,U9=new S,dK=new g0,uK=new YJ;class C9{constructor(J=0,Q=0,$=0,W=C9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],K=W[4],H=W[8],Y=W[1],X=W[5],U=W[9],G=W[2],E=W[6],N=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(s0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-K,Z);else this._x=Math.atan2(E,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-s0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,N),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-G,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(s0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,Z);break;case"ZYX":if(this._y=Math.asin(-s0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,N),this._z=Math.atan2(Y,Z);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(s0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,Z);else this._x=0,this._y=Math.atan2(H,N);break;case"XZY":if(this._z=Math.asin(-s0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,X),this._y=Math.atan2(H,Z);else this._x=Math.atan2(-U,N),this._y=0;break;default:T0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return dK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(dK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return uK.setFromEuler(this),this.setFromQuaternion(uK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}C9.DEFAULT_ORDER="XYZ";class O${constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var xU=0,cK=new S,A7=new YJ,W8=new g0,zQ=new S,k6=new S,gU=new S,pU=new YJ,nK=new S(1,0,0),sK=new S(0,1,0),iK=new S(0,0,1),oK={type:"added"},lU={type:"removed"},w7={type:"childadded",child:null},ZW={type:"childremoved",child:null};class NJ extends p9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:xU++}),this.uuid=M9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=NJ.DEFAULT_UP.clone();let J=new S,Q=new C9,$=new YJ,W=new S(1,1,1);function Z(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new g0},normalMatrix:{value:new c0}}),this.matrix=new g0,this.matrixWorld=new g0,this.matrixAutoUpdate=NJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=NJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O$,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return A7.setFromAxisAngle(J,Q),this.quaternion.multiply(A7),this}rotateOnWorldAxis(J,Q){return A7.setFromAxisAngle(J,Q),this.quaternion.premultiply(A7),this}rotateX(J){return this.rotateOnAxis(nK,J)}rotateY(J){return this.rotateOnAxis(sK,J)}rotateZ(J){return this.rotateOnAxis(iK,J)}translateOnAxis(J,Q){return cK.copy(J).applyQuaternion(this.quaternion),this.position.add(cK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(nK,J)}translateY(J){return this.translateOnAxis(sK,J)}translateZ(J){return this.translateOnAxis(iK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(W8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)zQ.copy(J);else zQ.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),k6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)W8.lookAt(k6,zQ,this.up);else W8.lookAt(zQ,k6,this.up);if(this.quaternion.setFromRotationMatrix(W8),W)W8.extractRotation(W.matrixWorld),A7.setFromRotationMatrix(W8),this.quaternion.premultiply(A7.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return m0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(oK),w7.child=J,this.dispatchEvent(w7),w7.child=null;else m0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(lU),ZW.child=J,this.dispatchEvent(ZW),ZW.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),W8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),W8.multiply(J.parent.matrixWorld);return J.applyMatrix4(W8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(oK),w7.child=J,this.dispatchEvent(w7),w7.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,K=W.length;Z<K;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(k6,J,gU),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(k6,pU,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let W=this.parent;if(J===!0&&W!==null)W.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let Z=this.children;for(let K=0,H=Z.length;K<H;K++)Z[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,W.name=this.name,W.castShadow=this.castShadow,W.receiveShadow=this.receiveShadow,W.visible=this.visible,W.frustumCulled=this.frustumCulled,W.renderOrder=this.renderOrder,W.static=this.static,W.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((H)=>({...H})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let G=Y[X];Z(J.shapes,G)}else Z(J.shapes,Y)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(Z(J.materials,this.material[Y]));W.material=H}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let H=0;H<this.children.length;H++)W.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];W.animations.push(Z(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),G=K(J.shapes),E=K(J.skeletons),N=K(J.animations),q=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(E.length>0)$.skeletons=E;if(N.length>0)$.animations=N;if(q.length>0)$.nodes=q}return $.object=W,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}NJ.DEFAULT_UP=new S(0,1,0);NJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;NJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class MJ extends NJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var mU={type:"move"};class c6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new MJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new MJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new MJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let F of J.hand.values()){let B=Q.getJointPose(F,$),R=this._getHandJoint(X,F);if(B!==null)R.matrix.fromArray(B.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=B.radius;R.visible=B!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],E=U.position.distanceTo(G.position),N=0.02,q=0.005;if(X.inputState.pinching&&E>N+q)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&E<=N-q)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(mU)}}}if(H!==null)H.visible=W!==null;if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new MJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var zY={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},z8={h:0,s:0,l:0},PQ={h:0,s:0,l:0};function KW(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class v0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,r0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=r0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,r0.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=r0.workingColorSpace){if(J=_Z(J,1),Q=s0(Q,0,1),$=s0($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-Z;this.r=KW(K,Z,J+0.3333333333333333),this.g=KW(K,Z,J),this.b=KW(K,Z,J-0.3333333333333333)}return r0.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)T0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,K=W[1],H=W[2];switch(K){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(100,parseInt(Z[1],10))/100,Math.min(100,parseInt(Z[2],10))/100,Math.min(100,parseInt(Z[3],10))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:T0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],K=Z.length;if(K===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(Z,16),Q);else T0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=zY[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else T0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=U8(J.r),this.g=U8(J.g),this.b=U8(J.b),this}copyLinearToSRGB(J){return this.r=g7(J.r),this.g=g7(J.g),this.b=g7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return r0.workingToColorSpace(rJ.copy(this),J),Math.round(s0(rJ.r*255,0,255))*65536+Math.round(s0(rJ.g*255,0,255))*256+Math.round(s0(rJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=r0.workingColorSpace){r0.workingToColorSpace(rJ.copy(this),Q);let{r:$,g:W,b:Z}=rJ,K=Math.max($,W,Z),H=Math.min($,W,Z),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let G=K-H;switch(X=U<=0.5?G/(K+H):G/(2-K-H),K){case $:Y=(W-Z)/G+(W<Z?6:0);break;case W:Y=(Z-$)/G+2;break;case Z:Y=($-W)/G+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=r0.workingColorSpace){return r0.workingToColorSpace(rJ.copy(this),Q),J.r=rJ.r,J.g=rJ.g,J.b=rJ.b,J}getStyle(J="srgb"){r0.workingToColorSpace(rJ.copy(this),J);let{r:Q,g:$,b:W}=rJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(z8),this.setHSL(z8.h+J,z8.s+Q,z8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(z8),J.getHSL(PQ);let $=_6(z8.h,PQ.h,Q),W=_6(z8.s,PQ.s,Q),Z=_6(z8.l,PQ.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var rJ=new v0;v0.NAMES=zY;class n6{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new v0(J),this.density=Q}clone(){return new n6(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class t7 extends NJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new C9,this.environmentIntensity=1,this.environmentRotation=new C9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var v9=new S,Z8=new S,HW=new S,K8=new S,T7=new S,_7=new S,aK=new S,YW=new S,XW=new S,UW=new S,GW=new FJ,NW=new FJ,EW=new FJ;class D9{constructor(J=new S,Q=new S,$=new S){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),v9.subVectors(J,Q),W.cross(v9);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){v9.subVectors(W,Q),Z8.subVectors($,Q),HW.subVectors(J,Q);let K=v9.dot(v9),H=v9.dot(Z8),Y=v9.dot(HW),X=Z8.dot(Z8),U=Z8.dot(HW),G=K*X-H*H;if(G===0)return Z.set(0,0,0),null;let E=1/G,N=(X*Y-H*U)*E,q=(K*U-H*Y)*E;return Z.set(1-N-q,q,N)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,K8)===null)return!1;return K8.x>=0&&K8.y>=0&&K8.x+K8.y<=1}static getInterpolation(J,Q,$,W,Z,K,H,Y){if(this.getBarycoord(J,Q,$,W,K8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(Z,K8.x),Y.addScaledVector(K,K8.y),Y.addScaledVector(H,K8.z),Y}static getInterpolatedAttribute(J,Q,$,W,Z,K){return GW.setScalar(0),NW.setScalar(0),EW.setScalar(0),GW.fromBufferAttribute(J,Q),NW.fromBufferAttribute(J,$),EW.fromBufferAttribute(J,W),K.setScalar(0),K.addScaledVector(GW,Z.x),K.addScaledVector(NW,Z.y),K.addScaledVector(EW,Z.z),K}static isFrontFacing(J,Q,$,W){return v9.subVectors($,Q),Z8.subVectors(J,Q),v9.cross(Z8).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return v9.subVectors(this.c,this.b),Z8.subVectors(this.a,this.b),v9.cross(Z8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return D9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return D9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return D9.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return D9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return D9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,K,H;T7.subVectors(W,$),_7.subVectors(Z,$),YW.subVectors(J,$);let Y=T7.dot(YW),X=_7.dot(YW);if(Y<=0&&X<=0)return Q.copy($);XW.subVectors(J,W);let U=T7.dot(XW),G=_7.dot(XW);if(U>=0&&G<=U)return Q.copy(W);let E=Y*G-U*X;if(E<=0&&Y>=0&&U<=0)return K=Y/(Y-U),Q.copy($).addScaledVector(T7,K);UW.subVectors(J,Z);let N=T7.dot(UW),q=_7.dot(UW);if(q>=0&&N<=q)return Q.copy(Z);let F=N*X-Y*q;if(F<=0&&X>=0&&q<=0)return H=X/(X-q),Q.copy($).addScaledVector(_7,H);let B=U*q-N*G;if(B<=0&&G-U>=0&&N-q>=0)return aK.subVectors(Z,W),H=(G-U)/(G-U+(N-q)),Q.copy(W).addScaledVector(aK,H);let R=1/(B+F+E);return K=F*R,H=E*R,Q.copy($).addScaledVector(T7,K).addScaledVector(_7,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class Q9{constructor(J=new S(1/0,1/0,1/0),Q=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(f9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(f9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=f9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=Z.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,f9);else f9.fromBufferAttribute(Z,K);f9.applyMatrix4(J.matrixWorld),this.expandByPoint(f9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();IQ.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();IQ.copy($.boundingBox)}IQ.applyMatrix4(J.matrixWorld),this.union(IQ)}}let W=J.children;for(let Z=0,K=W.length;Z<K;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,f9),f9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(D6),AQ.subVectors(this.max,D6),S7.subVectors(J.a,D6),j7.subVectors(J.b,D6),y7.subVectors(J.c,D6),P8.subVectors(j7,S7),I8.subVectors(y7,j7),o8.subVectors(S7,y7);let Q=[0,-P8.z,P8.y,0,-I8.z,I8.y,0,-o8.z,o8.y,P8.z,0,-P8.x,I8.z,0,-I8.x,o8.z,0,-o8.x,-P8.y,P8.x,0,-I8.y,I8.x,0,-o8.y,o8.x,0];if(!qW(Q,S7,j7,y7,AQ))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!qW(Q,S7,j7,y7,AQ))return!1;return wQ.crossVectors(P8,I8),Q=[wQ.x,wQ.y,wQ.z],qW(Q,S7,j7,y7,AQ)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,f9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(f9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return H8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),H8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),H8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),H8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),H8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),H8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),H8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),H8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(H8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var H8=[new S,new S,new S,new S,new S,new S,new S,new S],f9=new S,IQ=new Q9,S7=new S,j7=new S,y7=new S,P8=new S,I8=new S,o8=new S,D6=new S,AQ=new S,wQ=new S,a8=new S;function qW(J,Q,$,W,Z){for(let K=0,H=J.length-3;K<=H;K+=3){a8.fromArray(J,K);let Y=Z.x*Math.abs(a8.x)+Z.y*Math.abs(a8.y)+Z.z*Math.abs(a8.z),X=Q.dot(a8),U=$.dot(a8),G=W.dot(a8);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>Y)return!1}return!0}var vJ=new S,TQ=new U0,dU=0;class bJ extends p9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dU++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)TQ.fromBufferAttribute(this,Q),TQ.applyMatrix3(J),this.setXY(Q,TQ.x,TQ.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.applyMatrix3(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.applyMatrix4(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.applyNormalMatrix(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.transformDirection(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=h9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=qJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=h9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=qJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=h9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=qJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=h9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=qJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=h9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=qJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=qJ(Q,this.array),$=qJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=qJ(Q,this.array),$=qJ($,this.array),W=qJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=qJ(Q,this.array),$=qJ($,this.array),W=qJ(W,this.array),Z=qJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class R$ extends bJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class L$ extends bJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class ZJ extends bJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var uU=new Q9,M6=new S,FW=new S;class q9{constructor(J=new S,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else uU.setFromPoints(J).getCenter($);let W=0;for(let Z=0,K=J.length;Z<K;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;M6.subVectors(J,this.center);let Q=M6.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(M6,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else FW.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(M6.copy(J.center).add(FW)),this.expandByPoint(M6.copy(J.center).sub(FW));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var cU=0,B9=new g0,OW=new NJ,v7=new S,G9=new Q9,C6=new Q9,lJ=new S;class CJ extends p9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cU++}),this.uuid=M9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((OU(J))?L$:R$)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new c0().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return B9.makeRotationFromQuaternion(J),this.applyMatrix4(B9),this}rotateX(J){return B9.makeRotationX(J),this.applyMatrix4(B9),this}rotateY(J){return B9.makeRotationY(J),this.applyMatrix4(B9),this}rotateZ(J){return B9.makeRotationZ(J),this.applyMatrix4(B9),this}translate(J,Q,$){return B9.makeTranslation(J,Q,$),this.applyMatrix4(B9),this}scale(J,Q,$){return B9.makeScale(J,Q,$),this.applyMatrix4(B9),this}lookAt(J){return OW.lookAt(J),OW.updateMatrix(),this.applyMatrix4(OW.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(v7).negate(),this.translate(v7.x,v7.y,v7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let K=J[W];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new ZJ($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)T0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Q9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){m0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(G9.setFromBufferAttribute(Z),this.morphTargetsRelative)lJ.addVectors(this.boundingBox.min,G9.min),this.boundingBox.expandByPoint(lJ),lJ.addVectors(this.boundingBox.max,G9.max),this.boundingBox.expandByPoint(lJ);else this.boundingBox.expandByPoint(G9.min),this.boundingBox.expandByPoint(G9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))m0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new q9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){m0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(J){let $=this.boundingSphere.center;if(G9.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z];if(C6.setFromBufferAttribute(H),this.morphTargetsRelative)lJ.addVectors(G9.min,C6.min),G9.expandByPoint(lJ),lJ.addVectors(G9.max,C6.max),G9.expandByPoint(lJ);else G9.expandByPoint(C6.min),G9.expandByPoint(C6.max)}G9.getCenter($);let W=0;for(let Z=0,K=J.count;Z<K;Z++)lJ.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(lJ));if(Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(lJ.fromBufferAttribute(H,X),Y)v7.fromBufferAttribute(J,X),lJ.add(v7);W=Math.max(W,$.distanceToSquared(lJ))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))m0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){m0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new bJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[];for(let _=0;_<$.count;_++)H[_]=new S,Y[_]=new S;let X=new S,U=new S,G=new S,E=new U0,N=new U0,q=new U0,F=new S,B=new S;function R(_,D,A){X.fromBufferAttribute($,_),U.fromBufferAttribute($,D),G.fromBufferAttribute($,A),E.fromBufferAttribute(Z,_),N.fromBufferAttribute(Z,D),q.fromBufferAttribute(Z,A),U.sub(X),G.sub(X),N.sub(E),q.sub(E);let d=1/(N.x*q.y-q.x*N.y);if(!isFinite(d))return;F.copy(U).multiplyScalar(q.y).addScaledVector(G,-N.y).multiplyScalar(d),B.copy(G).multiplyScalar(N.x).addScaledVector(U,-q.x).multiplyScalar(d),H[_].add(F),H[D].add(F),H[A].add(F),Y[_].add(B),Y[D].add(B),Y[A].add(B)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let _=0,D=O.length;_<D;++_){let A=O[_],d=A.start,h=A.count;for(let p=d,e=d+h;p<e;p+=3)R(J.getX(p+0),J.getX(p+1),J.getX(p+2))}let P=new S,k=new S,L=new S,z=new S;function w(_){L.fromBufferAttribute(W,_),z.copy(L);let D=H[_];P.copy(D),P.sub(L.multiplyScalar(L.dot(D))).normalize(),k.crossVectors(z,D);let d=k.dot(Y[_])<0?-1:1;K.setXYZW(_,P.x,P.y,P.z,d)}for(let _=0,D=O.length;_<D;++_){let A=O[_],d=A.start,h=A.count;for(let p=d,e=d+h;p<e;p+=3)w(J.getX(p+0)),w(J.getX(p+1)),w(J.getX(p+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new bJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,N=$.count;E<N;E++)$.setXYZ(E,0,0,0);let W=new S,Z=new S,K=new S,H=new S,Y=new S,X=new S,U=new S,G=new S;if(J)for(let E=0,N=J.count;E<N;E+=3){let q=J.getX(E+0),F=J.getX(E+1),B=J.getX(E+2);W.fromBufferAttribute(Q,q),Z.fromBufferAttribute(Q,F),K.fromBufferAttribute(Q,B),U.subVectors(K,Z),G.subVectors(W,Z),U.cross(G),H.fromBufferAttribute($,q),Y.fromBufferAttribute($,F),X.fromBufferAttribute($,B),H.add(U),Y.add(U),X.add(U),$.setXYZ(q,H.x,H.y,H.z),$.setXYZ(F,Y.x,Y.y,Y.z),$.setXYZ(B,X.x,X.y,X.z)}else for(let E=0,N=Q.count;E<N;E+=3)W.fromBufferAttribute(Q,E+0),Z.fromBufferAttribute(Q,E+1),K.fromBufferAttribute(Q,E+2),U.subVectors(K,Z),G.subVectors(W,Z),U.cross(G),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)lJ.fromBufferAttribute(J,Q),lJ.normalize(),J.setXYZ(Q,lJ.x,lJ.y,lJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:G}=H,E=new X.constructor(Y.length*U),N=0,q=0;for(let F=0,B=Y.length;F<B;F++){if(H.isInterleavedBufferAttribute)N=Y[F]*H.data.stride+H.offset;else N=Y[F]*U;for(let R=0;R<U;R++)E[q++]=X[N++]}return new bJ(E,U,G)}if(this.index===null)return T0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new CJ,$=this.index.array,W=this.attributes;for(let H in W){let Y=W[H],X=J(Y,$);Q.setAttribute(H,X)}let Z=this.morphAttributes;for(let H in Z){let Y=[],X=Z[H];for(let U=0,G=X.length;U<G;U++){let E=X[U],N=J(E,$);Y.push(N)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let W={},Z=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let G=0,E=X.length;G<E;G++){let N=X[G];U.push(N.toJSON(J.data))}if(U.length>0)W[Y]=U,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let X in W){let U=W[X];this.setAttribute(X,U.clone(Q))}let Z=J.morphAttributes;for(let X in Z){let U=[],G=Z[X];for(let E=0,N=G.length;E<N;E++)U.push(G[E].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let G=K[X];this.addGroup(G.start,G.count,G.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class s6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=M9()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let W=0,Z=this.stride;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=M9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=M9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var J9=new S;class e7{constructor(J,Q,$,W=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=W}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)J9.fromBufferAttribute(this,Q),J9.applyMatrix4(J),this.setXYZ(Q,J9.x,J9.y,J9.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)J9.fromBufferAttribute(this,Q),J9.applyNormalMatrix(J),this.setXYZ(Q,J9.x,J9.y,J9.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)J9.fromBufferAttribute(this,Q),J9.transformDirection(J),this.setXYZ(Q,J9.x,J9.y,J9.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=h9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=qJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=qJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=qJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=qJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=qJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=h9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=h9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=h9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=h9(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=qJ(Q,this.array),$=qJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=qJ(Q,this.array),$=qJ($,this.array),W=qJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=qJ(Q,this.array),$=qJ($,this.array),W=qJ(W,this.array),Z=qJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this.data.array[J+3]=Z,this}clone(J){if(J===void 0){y6("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return new bJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new e7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){y6("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var RW=new S,nU=new S,sU=new c0;class k9{constructor(J=new S(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=RW.subVectors($,Q).cross(nU.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(RW),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(W,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||sU.getNormalMatrix(J),W=this.coplanarPoint(RW).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var iU=0;class K9 extends p9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:iU++}),this.uuid=M9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new v0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){T0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){T0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector2&&($&&$.isVector2)||W&&W.isEuler&&($&&$.isEuler)||W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((Z)=>Z.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let K=[];for(let H in Z){let Y=Z[H];delete Y.metadata,K.push(Y)}return K}if(Q){let Z=W(J.textures),K=W(J.images);if(Z.length>0)$.textures=Z;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new v0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new k9().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new U0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new U0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var Y8=new S,LW=new S,_Q=new S,SQ=new S;class f8{constructor(J=new S,Q=new S(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,Y8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=Y8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return Y8.copy(this.origin).addScaledVector(this.direction,Q),Y8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){LW.copy(J).add(Q).multiplyScalar(0.5),_Q.copy(Q).sub(J).normalize(),SQ.copy(this.origin).sub(LW);let Z=J.distanceTo(Q)*0.5,K=-this.direction.dot(_Q),H=SQ.dot(this.direction),Y=-SQ.dot(_Q),X=SQ.lengthSq(),U=Math.abs(1-K*K),G,E,N,q;if(U>0)if(G=K*Y-H,E=K*H-Y,q=Z*U,G>=0)if(E>=-q)if(E<=q){let F=1/U;G*=F,E*=F,N=G*(G+K*E+2*H)+E*(K*G+E+2*Y)+X}else E=Z,G=Math.max(0,-(K*E+H)),N=-G*G+E*(E+2*Y)+X;else E=-Z,G=Math.max(0,-(K*E+H)),N=-G*G+E*(E+2*Y)+X;else if(E<=-q)G=Math.max(0,-(-K*Z+H)),E=G>0?-Z:Math.min(Math.max(-Z,-Y),Z),N=-G*G+E*(E+2*Y)+X;else if(E<=q)G=0,E=Math.min(Math.max(-Z,-Y),Z),N=E*(E+2*Y)+X;else G=Math.max(0,-(K*Z+H)),E=G>0?Z:Math.min(Math.max(-Z,-Y),Z),N=-G*G+E*(E+2*Y)+X;else E=K>0?-Z:Z,G=Math.max(0,-(K*E+H)),N=-G*G+E*(E+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(W)W.copy(LW).addScaledVector(_Q,E);return N}intersectSphere(J,Q){if(J.radius<0)return null;Y8.subVectors(J.center,this.origin);let $=Y8.dot(this.direction),W=Y8.dot(Y8)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let K=Math.sqrt(Z-W),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(X>=0)$=(J.min.x-E.x)*X,W=(J.max.x-E.x)*X;else $=(J.max.x-E.x)*X,W=(J.min.x-E.x)*X;if(U>=0)Z=(J.min.y-E.y)*U,K=(J.max.y-E.y)*U;else Z=(J.max.y-E.y)*U,K=(J.min.y-E.y)*U;if($>K||Z>W)return null;if(Z>$||isNaN($))$=Z;if(K<W||isNaN(W))W=K;if(G>=0)H=(J.min.z-E.z)*G,Y=(J.max.z-E.z)*G;else H=(J.max.z-E.z)*G,Y=(J.min.z-E.z)*G;if($>Y||H>W)return null;if(H>$||$!==$)$=H;if(Y<W||W!==W)W=Y;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,Y8)!==null}intersectTriangle(J,Q,$,W,Z){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,G=J.x-K.x,E=J.y-K.y,N=J.z-K.z,q=Q.x-K.x,F=Q.y-K.y,B=Q.z-K.z,R=$.x-K.x,O=$.y-K.y,P=$.z-K.z,k=Math.abs(Y),L=Math.abs(X),z=Math.abs(U),w,_,D,A,d,h,p,e,j,n,$0,u;if(k>=L&&k>=z)if(D=Y,h=G,j=q,u=R,Y>=0)w=X,_=U,A=E,d=N,p=F,e=B,n=O,$0=P;else w=U,_=X,A=N,d=E,p=B,e=F,n=P,$0=O;else if(L>=z)if(D=X,h=E,j=F,u=O,X>=0)w=U,_=Y,A=N,d=G,p=B,e=q,n=P,$0=R;else w=Y,_=U,A=G,d=N,p=q,e=B,n=R,$0=P;else if(D=U,h=N,j=B,u=P,U>=0)w=Y,_=X,A=G,d=E,p=q,e=F,n=R,$0=O;else w=X,_=Y,A=E,d=G,p=F,e=q,n=O,$0=R;if(D===0)return null;let E0=w/D,t=_/D,W0=1/D,X0=A-E0*h,h0=d-t*h,_0=p-E0*j,RJ=e-t*j,l0=n-E0*u,a=$0-t*u,N0=l0*RJ-a*_0,O0=X0*a-h0*l0,f0=_0*h0-RJ*X0;if(W){if(N0<0||O0<0||f0<0)return null}else if((N0<0||O0<0||f0<0)&&(N0>0||O0>0||f0>0))return null;let j0=N0+O0+f0;if(j0===0)return null;let S0=W0*(N0*h+O0*j+f0*u);if(j0>0?S0<0:S0>0)return null;return this.at(S0/j0,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nJ extends K9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new v0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new C9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var rK=new g0,r8=new f8,jQ=new q9,tK=new S,yQ=new S,vQ=new S,fQ=new S,VW=new S,hQ=new S,eK=new S,bQ=new S;class A0 extends NJ{constructor(J=new CJ,Q=new nJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let H=this.morphTargetInfluences;if(Z&&H){hQ.set(0,0,0);for(let Y=0,X=Z.length;Y<X;Y++){let U=H[Y],G=Z[Y];if(U===0)continue;if(VW.fromBufferAttribute(G,J),K)hQ.addScaledVector(VW,U);else hQ.addScaledVector(VW.sub(Q),U)}Q.add(hQ)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(jQ.copy($.boundingSphere),jQ.applyMatrix4(Z),r8.copy(J.ray).recast(J.near),jQ.containsPoint(r8.origin)===!1){if(r8.intersectSphere(jQ,tK)===null)return;if(r8.origin.distanceToSquared(tK)>(J.far-J.near)**2)return}if(rK.copy(Z).invert(),r8.copy(J.ray).applyMatrix4(rK),$.boundingBox!==null){if(r8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,r8)}_computeIntersections(J,Q,$){let W,Z=this.geometry,K=this.material,H=Z.index,Y=Z.attributes.position,X=Z.attributes.uv,U=Z.attributes.uv1,G=Z.attributes.normal,E=Z.groups,N=Z.drawRange;if(H!==null)if(Array.isArray(K))for(let q=0,F=E.length;q<F;q++){let B=E[q],R=K[B.materialIndex],O=Math.max(B.start,N.start),P=Math.min(H.count,Math.min(B.start+B.count,N.start+N.count));for(let k=O,L=P;k<L;k+=3){let z=H.getX(k),w=H.getX(k+1),_=H.getX(k+2);if(W=xQ(this,R,J,$,X,U,G,z,w,_),W)W.faceIndex=Math.floor(k/3),W.face.materialIndex=B.materialIndex,Q.push(W)}}else{let q=Math.max(0,N.start),F=Math.min(H.count,N.start+N.count);for(let B=q,R=F;B<R;B+=3){let O=H.getX(B),P=H.getX(B+1),k=H.getX(B+2);if(W=xQ(this,K,J,$,X,U,G,O,P,k),W)W.faceIndex=Math.floor(B/3),Q.push(W)}}else if(Y!==void 0)if(Array.isArray(K))for(let q=0,F=E.length;q<F;q++){let B=E[q],R=K[B.materialIndex],O=Math.max(B.start,N.start),P=Math.min(Y.count,Math.min(B.start+B.count,N.start+N.count));for(let k=O,L=P;k<L;k+=3){let z=k,w=k+1,_=k+2;if(W=xQ(this,R,J,$,X,U,G,z,w,_),W)W.faceIndex=Math.floor(k/3),W.face.materialIndex=B.materialIndex,Q.push(W)}}else{let q=Math.max(0,N.start),F=Math.min(Y.count,N.start+N.count);for(let B=q,R=F;B<R;B+=3){let O=B,P=B+1,k=B+2;if(W=xQ(this,K,J,$,X,U,G,O,P,k),W)W.faceIndex=Math.floor(B/3),Q.push(W)}}}}function oU(J,Q,$,W,Z,K,H,Y){let X;if(Q.side===1)X=W.intersectTriangle(H,K,Z,!0,Y);else X=W.intersectTriangle(Z,K,H,Q.side===0,Y);if(X===null)return null;bQ.copy(Y),bQ.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(bQ);if(U<$.near||U>$.far)return null;return{distance:U,point:bQ.clone(),object:J}}function xQ(J,Q,$,W,Z,K,H,Y,X,U){J.getVertexPosition(Y,yQ),J.getVertexPosition(X,vQ),J.getVertexPosition(U,fQ);let G=oU(J,Q,$,W,yQ,vQ,fQ,eK);if(G){let E=new S;if(D9.getBarycoord(eK,yQ,vQ,fQ,E),Z)G.uv=D9.getInterpolatedAttribute(Z,Y,X,U,E,new U0);if(K)G.uv1=D9.getInterpolatedAttribute(K,Y,X,U,E,new U0);if(H){if(G.normal=D9.getInterpolatedAttribute(H,Y,X,U,E,new S),G.normal.dot(W.direction)>0)G.normal.multiplyScalar(-1)}let N={a:Y,b:X,c:U,normal:new S,materialIndex:0};D9.getNormal(yQ,vQ,fQ,N.normal),G.face=N,G.barycoord=E}return G}var z6=new FJ,JH=new FJ,QH=new FJ,aU=new FJ,$H=new g0,gQ=new S,BW=new q9,WH=new g0,kW=new f8;class V$ extends A0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new g0,this.bindMatrixInverse=new g0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new Q9;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,gQ),this.boundingBox.expandByPoint(gQ)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new q9;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,gQ),this.boundingSphere.expandByPoint(gQ)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,W=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(BW.copy(this.boundingSphere),BW.applyMatrix4(W),J.ray.intersectsSphere(BW)===!1)return;if(WH.copy(W).invert(),kW.copy(J.ray).applyMatrix4(WH),this.boundingBox!==null){if(kW.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,kW)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new FJ,Q=this.geometry.attributes.skinWeight;for(let $=0,W=Q.count;$<W;$++){J.fromBufferAttribute(Q,$);let Z=1/J.manhattanLength();if(Z!==1/0)J.multiplyScalar(Z);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else T0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,W=this.geometry;if(JH.fromBufferAttribute(W.attributes.skinIndex,J),QH.fromBufferAttribute(W.attributes.skinWeight,J),Q.isVector4)z6.copy(Q),Q.set(0,0,0,0);else z6.set(...Q,1),Q.set(0,0,0);z6.applyMatrix4(this.bindMatrix);for(let Z=0;Z<4;Z++){let K=QH.getComponent(Z);if(K!==0){let H=JH.getComponent(Z);$H.multiplyMatrices($.bones[H].matrixWorld,$.boneInverses[H]),Q.addScaledVector(aU.copy(z6).applyMatrix4($H),K)}}if(Q.isVector4)Q.w=z6.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class i6 extends NJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class o6 extends SJ{constructor(J=null,Q=1,$=1,W,Z,K,H,Y,X=1003,U=1003,G,E){super(null,K,H,Y,X,U,W,Z,G,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var ZH=new g0,rU=new g0;class a6{constructor(J=[],Q=[]){this.uuid=M9(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){T0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,W=this.bones.length;$<W;$++)this.boneInverses.push(new g0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new g0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,W=this.boneTexture;for(let Z=0,K=J.length;Z<K;Z++){let H=J[Z]?J[Z].matrixWorld:rU;ZH.multiplyMatrices(H,Q[Z]),ZH.toArray($,Z*16)}if(W!==null)W.needsUpdate=!0}clone(){return new a6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new o6(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let W=this.bones[Q];if(W.name===J)return W}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,W=J.bones.length;$<W;$++){let Z=J.bones[$],K=Q[Z];if(K===void 0)T0("Skeleton: No bone found with UUID:",Z),K=new i6;this.bones.push(K),this.boneInverses.push(new g0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W];J.bones.push(K.uuid);let H=$[W];J.boneInverses.push(H.toArray())}return J}}class T8 extends bJ{constructor(J,Q,$,W=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=W}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var f7=new g0,KH=new g0,pQ=[],HH=new Q9,tU=new g0,P6=new A0,I6=new q9;class N8 extends A0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new T8(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let W=0;W<$;W++)this.setMatrixAt(W,tU)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new Q9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,f7),HH.copy(J.boundingBox).applyMatrix4(f7),this.boundingBox.union(HH)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new q9;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,f7),I6.copy(J.boundingSphere).applyMatrix4(f7),this.boundingSphere.union(I6)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,W=this.morphTexture.source.data.data,Z=$.length+1,K=J*Z+1;for(let H=0;H<$.length;H++)$[H]=W[K+H]}raycast(J,Q){let $=this.matrixWorld,W=this.count;if(P6.geometry=this.geometry,P6.material=this.material,P6.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(I6.copy(this.boundingSphere),I6.applyMatrix4($),J.ray.intersectsSphere(I6)===!1)return;for(let Z=0;Z<W;Z++){this.getMatrixAt(Z,f7),KH.multiplyMatrices($,f7),P6.matrixWorld=KH,P6.raycast(J,pQ);for(let K=0,H=pQ.length;K<H;K++){let Y=pQ[K];Y.instanceId=Z,Y.object=this,Q.push(Y)}pQ.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new T8(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,W=$.length+1;if(this.morphTexture===null)this.morphTexture=new o6(new Float32Array(W*this.count),W,this.count,1028,1015);let Z=this.morphTexture.source.data.data,K=0;for(let X=0;X<$.length;X++)K+=$[X];let H=this.geometry.morphTargetsRelative?1:1-K,Y=W*J;return Z[Y]=H,Z.set($,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var t8=new q9,eU=new U0(0.5,0.5),lQ=new S;class r6{constructor(J=new k9,Q=new k9,$=new k9,W=new k9,Z=new k9,K=new k9){this.planes=[J,Q,$,W,Z,K]}set(J,Q,$,W,Z,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(W),H[4].copy(Z),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,K=Z[0],H=Z[1],Y=Z[2],X=Z[3],U=Z[4],G=Z[5],E=Z[6],N=Z[7],q=Z[8],F=Z[9],B=Z[10],R=Z[11],O=Z[12],P=Z[13],k=Z[14],L=Z[15];if(W[0].setComponents(X-K,N-U,R-q,L-O).normalize(),W[1].setComponents(X+K,N+U,R+q,L+O).normalize(),W[2].setComponents(X+H,N+G,R+F,L+P).normalize(),W[3].setComponents(X-H,N-G,R-F,L-P).normalize(),$)W[4].setComponents(Y,E,B,k).normalize(),W[5].setComponents(X-Y,N-E,R-B,L-k).normalize();else if(W[4].setComponents(X-Y,N-E,R-B,L-k).normalize(),Q===2000)W[5].setComponents(X+Y,N+E,R+B,L+k).normalize();else if(Q===2001)W[5].setComponents(Y,E,B,k).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();t8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();t8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(t8)}intersectsSprite(J){t8.center.set(0,0,0);let Q=eU.distanceTo(J.center);return t8.radius=0.7071067811865476+Q,t8.applyMatrix4(J.matrixWorld),this.intersectsSphere(t8)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(lQ.x=W.normal.x>0?J.max.x:J.min.x,lQ.y=W.normal.y>0?J.max.y:J.min.y,lQ.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(lQ)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class t6 extends K9{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new v0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var rQ=new S,tQ=new S,YH=new g0,A6=new f8,mQ=new q9,DW=new S,XH=new S;class J6 extends NJ{constructor(J=new CJ,Q=new t6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let W=1,Z=Q.count;W<Z;W++)rQ.fromBufferAttribute(Q,W-1),tQ.fromBufferAttribute(Q,W),$[W]=$[W-1],$[W]+=rQ.distanceTo(tQ);J.setAttribute("lineDistance",new ZJ($,1))}else T0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(mQ.copy($.boundingSphere),mQ.applyMatrix4(W),mQ.radius+=Z,J.ray.intersectsSphere(mQ)===!1)return;YH.copy(W).invert(),A6.copy(J.ray).applyMatrix4(YH);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,E=$.attributes.position;if(U!==null){let N=Math.max(0,K.start),q=Math.min(U.count,K.start+K.count);for(let F=N,B=q-1;F<B;F+=X){let R=U.getX(F),O=U.getX(F+1),P=dQ(this,J,A6,Y,R,O,F);if(P)Q.push(P)}if(this.isLineLoop){let F=U.getX(q-1),B=U.getX(N),R=dQ(this,J,A6,Y,F,B,q-1);if(R)Q.push(R)}}else{let N=Math.max(0,K.start),q=Math.min(E.count,K.start+K.count);for(let F=N,B=q-1;F<B;F+=X){let R=dQ(this,J,A6,Y,F,F+1,F);if(R)Q.push(R)}if(this.isLineLoop){let F=dQ(this,J,A6,Y,q-1,N,q-1);if(F)Q.push(F)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function dQ(J,Q,$,W,Z,K,H){let Y=J.geometry.attributes.position;if(rQ.fromBufferAttribute(Y,Z),tQ.fromBufferAttribute(Y,K),$.distanceSqToSegment(rQ,tQ,DW,XH)>W)return;DW.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(DW);if(U<Q.near||U>Q.far)return;return{distance:U,point:XH.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var UH=new S,GH=new S;class B$ extends J6{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let W=0,Z=Q.count;W<Z;W+=2)UH.fromBufferAttribute(Q,W),GH.fromBufferAttribute(Q,W+1),$[W]=W===0?0:$[W-1],$[W+1]=$[W]+UH.distanceTo(GH);J.setAttribute("lineDistance",new ZJ($,1))}else T0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class k$ extends J6{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class e6 extends K9{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new v0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var NH=new g0,AW=new f8,uQ=new q9,cQ=new S;class D$ extends NJ{constructor(J=new CJ,Q=new e6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(uQ.copy($.boundingSphere),uQ.applyMatrix4(W),uQ.radius+=Z,J.ray.intersectsSphere(uQ)===!1)return;NH.copy(W).invert(),AW.copy(J.ray).applyMatrix4(NH);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,G=$.attributes.position;if(X!==null){let E=Math.max(0,K.start),N=Math.min(X.count,K.start+K.count);for(let q=E,F=N;q<F;q++){let B=X.getX(q);cQ.fromBufferAttribute(G,B),EH(cQ,B,Y,W,J,Q,this)}}else{let E=Math.max(0,K.start),N=Math.min(G.count,K.start+K.count);for(let q=E,F=N;q<F;q++)cQ.fromBufferAttribute(G,q),EH(cQ,q,Y,W,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function EH(J,Q,$,W,Z,K,H){let Y=AW.distanceSqToPoint(J);if(Y<$){let X=new S;AW.closestPointToPoint(J,X),X.applyMatrix4(W);let U=Z.ray.origin.distanceTo(X);if(U<Z.near||U>Z.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class M$ extends SJ{constructor(J=[],Q=301,$,W,Z,K,H,Y,X,U){super(J,Q,$,W,Z,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class Q6 extends SJ{constructor(J,Q,$,W,Z,K,H,Y,X){super(J,Q,$,W,Z,K,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class X7 extends SJ{constructor(J,Q,$=1014,W,Z,K,H=1003,Y=1003,X,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:G};super(E,W,Z,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new u6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class vZ extends X7{constructor(J,Q=1014,$=301,W,Z,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,W,Z,K,H,Y,X);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class C$ extends SJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class uJ extends CJ{constructor(J=1,Q=1,$=1,W=1,Z=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:K};let H=this;W=Math.floor(W),Z=Math.floor(Z),K=Math.floor(K);let Y=[],X=[],U=[],G=[],E=0,N=0;q("z","y","x",-1,-1,$,Q,J,K,Z,0),q("z","y","x",1,-1,$,Q,-J,K,Z,1),q("x","z","y",1,1,J,$,Q,W,K,2),q("x","z","y",1,-1,J,$,-Q,W,K,3),q("x","y","z",1,-1,J,Q,$,W,Z,4),q("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(Y),this.setAttribute("position",new ZJ(X,3)),this.setAttribute("normal",new ZJ(U,3)),this.setAttribute("uv",new ZJ(G,2));function q(F,B,R,O,P,k,L,z,w,_,D){let A=k/w,d=L/_,h=k/2,p=L/2,e=z/2,j=w+1,n=_+1,$0=0,u=0,E0=new S;for(let t=0;t<n;t++){let W0=t*d-p;for(let X0=0;X0<j;X0++){let h0=X0*A-h;E0[F]=h0*O,E0[B]=W0*P,E0[R]=e,X.push(E0.x,E0.y,E0.z),E0[F]=0,E0[B]=0,E0[R]=z>0?1:-1,U.push(E0.x,E0.y,E0.z),G.push(X0/w),G.push(1-t/_),$0+=1}}for(let t=0;t<_;t++)for(let W0=0;W0<w;W0++){let X0=E+W0+j*t,h0=E+W0+j*(t+1),_0=E+(W0+1)+j*(t+1),RJ=E+(W0+1)+j*t;Y.push(X0,h0,RJ),Y.push(h0,_0,RJ),u+=6}H.addGroup(N,u,D),N+=u,E+=$0}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new uJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class $6 extends CJ{constructor(J=1,Q=32,$=0,W=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:W},Q=Math.max(3,Q);let Z=[],K=[],H=[],Y=[],X=new S,U=new U0;K.push(0,0,0),H.push(0,0,1),Y.push(0.5,0.5);for(let G=0,E=3;G<=Q;G++,E+=3){let N=$+G/Q*W;X.x=J*Math.cos(N),X.y=J*Math.sin(N),K.push(X.x,X.y,X.z),H.push(0,0,1),U.x=(K[E]/J+1)/2,U.y=(K[E+1]/J+1)/2,Y.push(U.x,U.y)}for(let G=1;G<=Q;G++)Z.push(G,G+1,0);this.setIndex(Z),this.setAttribute("position",new ZJ(K,3)),this.setAttribute("normal",new ZJ(H,3)),this.setAttribute("uv",new ZJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new $6(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class cJ extends CJ{constructor(J=1,Q=1,$=1,W=32,Z=1,K=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:W,heightSegments:Z,openEnded:K,thetaStart:H,thetaLength:Y};let X=this;W=Math.floor(W),Z=Math.floor(Z);let U=[],G=[],E=[],N=[],q=0,F=[],B=$/2,R=0;if(O(),K===!1){if(J>0)P(!0);if(Q>0)P(!1)}this.setIndex(U),this.setAttribute("position",new ZJ(G,3)),this.setAttribute("normal",new ZJ(E,3)),this.setAttribute("uv",new ZJ(N,2));function O(){let k=new S,L=new S,z=0,w=(Q-J)/$;for(let _=0;_<=Z;_++){let D=[],A=_/Z,d=A*(Q-J)+J;for(let h=0;h<=W;h++){let p=h/W,e=p*Y+H,j=Math.sin(e),n=Math.cos(e);L.x=d*j,L.y=-A*$+B,L.z=d*n,G.push(L.x,L.y,L.z),k.set(j,w,n).normalize(),E.push(k.x,k.y,k.z),N.push(p,1-A),D.push(q++)}F.push(D)}for(let _=0;_<W;_++)for(let D=0;D<Z;D++){let A=F[D][_],d=F[D+1][_],h=F[D+1][_+1],p=F[D][_+1];if(J>0||D!==0)U.push(A,d,p),z+=3;if(Q>0||D!==Z-1)U.push(d,h,p),z+=3}X.addGroup(R,z,0),R+=z}function P(k){let L=q,z=new U0,w=new S,_=0,D=k===!0?J:Q,A=k===!0?1:-1;for(let h=1;h<=W;h++)G.push(0,B*A,0),E.push(0,A,0),N.push(0.5,0.5),q++;let d=q;for(let h=0;h<=W;h++){let e=h/W*Y+H,j=Math.cos(e),n=Math.sin(e);w.x=D*n,w.y=B*A,w.z=D*j,G.push(w.x,w.y,w.z),E.push(0,A,0),z.x=j*0.5+0.5,z.y=n*0.5*A+0.5,N.push(z.x,z.y),q++}for(let h=0;h<W;h++){let p=L+h,e=d+h;if(k===!0)U.push(e,e+1,p);else U.push(e+1,e,p);_+=3}X.addGroup(R,_,k===!0?1:2),R+=_}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new cJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class z9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){T0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,W=this.getPoint(0),Z=0;Q.push(0);for(let K=1;K<=J;K++)$=this.getPoint(K/J),Z+=$.distanceTo(W),Q.push(Z),W=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),W=0,Z=$.length,K;if(Q)K=Q;else K=J*$[Z-1];let H=0,Y=Z-1,X;while(H<=Y)if(W=Math.floor(H+(Y-H)/2),X=$[W]-K,X<0)H=W+1;else if(X>0)Y=W-1;else{Y=W;break}if(W=Y,$[W]===K)return W/(Z-1);let U=$[W],E=$[W+1]-U,N=(K-U)/E;return(W+N)/(Z-1)}getTangent(J,Q){let W=J-0.0001,Z=J+0.0001;if(W<0)W=0;if(Z>1)Z=1;let K=this.getPoint(W),H=this.getPoint(Z),Y=Q||(K.isVector2?new U0:new S);return Y.copy(H).sub(K).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new S,W=[],Z=[],K=[],H=new S,Y=new g0;for(let N=0;N<=J;N++){let q=N/J;W[N]=this.getTangentAt(q,new S)}Z[0]=new S,K[0]=new S;let X=Number.MAX_VALUE,U=Math.abs(W[0].x),G=Math.abs(W[0].y),E=Math.abs(W[0].z);if(U<=X)X=U,$.set(1,0,0);if(G<=X)X=G,$.set(0,1,0);if(E<=X)$.set(0,0,1);H.crossVectors(W[0],$).normalize(),Z[0].crossVectors(W[0],H),K[0].crossVectors(W[0],Z[0]);for(let N=1;N<=J;N++){if(Z[N]=Z[N-1].clone(),K[N]=K[N-1].clone(),H.crossVectors(W[N-1],W[N]),H.length()>Number.EPSILON){H.normalize();let q=Math.acos(s0(W[N-1].dot(W[N]),-1,1));Z[N].applyMatrix4(Y.makeRotationAxis(H,q))}K[N].crossVectors(W[N],Z[N])}if(Q===!0){let N=Math.acos(s0(Z[0].dot(Z[J]),-1,1));if(N/=J,W[0].dot(H.crossVectors(Z[0],Z[J]))>0)N=-N;for(let q=1;q<=J;q++)Z[q].applyMatrix4(Y.makeRotationAxis(W[q],N*q)),K[q].crossVectors(W[q],Z[q])}return{tangents:W,normals:Z,binormals:K}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class JQ extends z9{constructor(J=0,Q=0,$=1,W=1,Z=0,K=Math.PI*2,H=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=W,this.aStartAngle=Z,this.aEndAngle=K,this.aClockwise=H,this.aRotation=Y}getPoint(J,Q=new U0){let $=Q,W=Math.PI*2,Z=this.aEndAngle-this.aStartAngle,K=Math.abs(Z)<Number.EPSILON;while(Z<0)Z+=W;while(Z>W)Z-=W;if(Z<Number.EPSILON)if(K)Z=0;else Z=W;if(this.aClockwise===!0&&!K)if(Z===W)Z=-W;else Z=Z-W;let H=this.aStartAngle+J*Z,Y=this.aX+this.xRadius*Math.cos(H),X=this.aY+this.yRadius*Math.sin(H);if(this.aRotation!==0){let U=Math.cos(this.aRotation),G=Math.sin(this.aRotation),E=Y-this.aX,N=X-this.aY;Y=E*U-N*G+this.aX,X=E*G+N*U+this.aY}return $.set(Y,X)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class fZ extends JQ{constructor(J,Q,$,W,Z,K){super(J,Q,$,$,W,Z,K);this.isArcCurve=!0,this.type="ArcCurve"}}function hZ(){let J=0,Q=0,$=0,W=0;function Z(K,H,Y,X){J=K,Q=Y,$=-3*K+3*H-2*Y-X,W=2*K-2*H+Y+X}return{initCatmullRom:function(K,H,Y,X,U){Z(H,Y,U*(Y-K),U*(X-H))},initNonuniformCatmullRom:function(K,H,Y,X,U,G,E){let N=(H-K)/U-(Y-K)/(U+G)+(Y-H)/G,q=(Y-H)/G-(X-H)/(G+E)+(X-Y)/E;N*=G,q*=G,Z(H,Y,N,q)},calc:function(K){let H=K*K,Y=H*K;return J+Q*K+$*H+W*Y}}}var qH=new S,FH=new S,MW=new hZ,CW=new hZ,zW=new hZ;class bZ extends z9{constructor(J=[],Q=!1,$="centripetal",W=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=W}getPoint(J,Q=new S){let $=Q,W=this.points,Z=W.length,K=(Z-(this.closed?0:1))*J,H=Math.floor(K),Y=K-H;if(this.closed)H+=H>0?0:(Math.floor(Math.abs(H)/Z)+1)*Z;else if(Y===0&&H===Z-1)H=Z-2,Y=1;let X,U;if(this.closed||H>0)X=W[(H-1)%Z];else FH.subVectors(W[0],W[1]).add(W[0]),X=FH;let G=W[H%Z],E=W[(H+1)%Z];if(this.closed||H+2<Z)U=W[(H+2)%Z];else qH.subVectors(W[Z-1],W[Z-2]).add(W[Z-1]),U=qH;if(this.curveType==="centripetal"||this.curveType==="chordal"){let N=this.curveType==="chordal"?0.5:0.25,q=Math.pow(X.distanceToSquared(G),N),F=Math.pow(G.distanceToSquared(E),N),B=Math.pow(E.distanceToSquared(U),N);if(F<0.0001)F=1;if(q<0.0001)q=F;if(B<0.0001)B=F;MW.initNonuniformCatmullRom(X.x,G.x,E.x,U.x,q,F,B),CW.initNonuniformCatmullRom(X.y,G.y,E.y,U.y,q,F,B),zW.initNonuniformCatmullRom(X.z,G.z,E.z,U.z,q,F,B)}else if(this.curveType==="catmullrom")MW.initCatmullRom(X.x,G.x,E.x,U.x,this.tension),CW.initCatmullRom(X.y,G.y,E.y,U.y,this.tension),zW.initCatmullRom(X.z,G.z,E.z,U.z,this.tension);return $.set(MW.calc(Y),CW.calc(Y),zW.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new S().fromArray(W))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function OH(J,Q,$,W,Z){let K=(W-Q)*0.5,H=(Z-$)*0.5,Y=J*J,X=J*Y;return(2*$-2*W+K+H)*X+(-3*$+3*W-2*K-H)*Y+K*J+$}function J5(J,Q){let $=1-J;return $*$*Q}function Q5(J,Q){return 2*(1-J)*J*Q}function $5(J,Q){return J*J*Q}function S6(J,Q,$,W){return J5(J,Q)+Q5(J,$)+$5(J,W)}function W5(J,Q){let $=1-J;return $*$*$*Q}function Z5(J,Q){let $=1-J;return 3*$*$*J*Q}function K5(J,Q){return 3*(1-J)*J*J*Q}function H5(J,Q){return J*J*J*Q}function j6(J,Q,$,W,Z){return W5(J,Q)+Z5(J,$)+K5(J,W)+H5(J,Z)}class z$ extends z9{constructor(J=new U0,Q=new U0,$=new U0,W=new U0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new U0){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(j6(J,W.x,Z.x,K.x,H.x),j6(J,W.y,Z.y,K.y,H.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class xZ extends z9{constructor(J=new S,Q=new S,$=new S,W=new S){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new S){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(j6(J,W.x,Z.x,K.x,H.x),j6(J,W.y,Z.y,K.y,H.y),j6(J,W.z,Z.z,K.z,H.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class P$ extends z9{constructor(J=new U0,Q=new U0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new U0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new U0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class gZ extends z9{constructor(J=new S,Q=new S){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new S){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new S){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class I$ extends z9{constructor(J=new U0,Q=new U0,$=new U0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new U0){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(S6(J,W.x,Z.x,K.x),S6(J,W.y,Z.y,K.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class W6 extends z9{constructor(J=new S,Q=new S,$=new S){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new S){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(S6(J,W.x,Z.x,K.x),S6(J,W.y,Z.y,K.y),S6(J,W.z,Z.z,K.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class A$ extends z9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new U0){let $=Q,W=this.points,Z=(W.length-1)*J,K=Math.floor(Z),H=Z-K,Y=W[K===0?K:K-1],X=W[K],U=W[K>W.length-2?W.length-1:K+1],G=W[K>W.length-3?W.length-1:K+2];return $.set(OH(H,Y.x,X.x,U.x,G.x),OH(H,Y.y,X.y,U.y,G.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new U0().fromArray(W))}return this}}var wW=Object.freeze({__proto__:null,ArcCurve:fZ,CatmullRomCurve3:bZ,CubicBezierCurve:z$,CubicBezierCurve3:xZ,EllipseCurve:JQ,LineCurve:P$,LineCurve3:gZ,QuadraticBezierCurve:I$,QuadraticBezierCurve3:W6,SplineCurve:A$});class pZ extends z9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wW[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),W=this.getCurveLengths(),Z=0;while(Z<W.length){if(W[Z]>=$){let K=W[Z]-$,H=this.curves[Z],Y=H.getLength(),X=Y===0?0:1-K/Y;return H.getPointAt(X,Q)}Z++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,W=this.curves.length;$<W;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let W=0,Z=this.curves;W<Z.length;W++){let K=Z[W],H=K.isEllipseCurve?J*2:K.isLineCurve||K.isLineCurve3?1:K.isSplineCurve?J*K.points.length:J,Y=K.getPoints(H);for(let X=0;X<Y.length;X++){let U=Y[X];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(W.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let W=this.curves[Q];J.curves.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(new wW[W.type]().fromJSON(W))}return this}}class eQ extends pZ{constructor(J){super();if(this.type="Path",this.currentPoint=new U0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new P$(this.currentPoint.clone(),new U0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,W){let Z=new I$(this.currentPoint.clone(),new U0(J,Q),new U0($,W));return this.curves.push(Z),this.currentPoint.set($,W),this}bezierCurveTo(J,Q,$,W,Z,K){let H=new z$(this.currentPoint.clone(),new U0(J,Q),new U0($,W),new U0(Z,K));return this.curves.push(H),this.currentPoint.set(Z,K),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new A$(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,W,Z,K){let H=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+H,Q+Y,$,W,Z,K),this}absarc(J,Q,$,W,Z,K){return this.absellipse(J,Q,$,$,W,Z,K),this}ellipse(J,Q,$,W,Z,K,H,Y){let X=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+X,Q+U,$,W,Z,K,H,Y),this}absellipse(J,Q,$,W,Z,K,H,Y){let X=new JQ(J,Q,$,W,Z,K,H,Y);if(this.curves.length>0){let G=X.getPoint(0);if(!G.equals(this.currentPoint))this.lineTo(G.x,G.y)}this.curves.push(X);let U=X.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class QQ extends eQ{constructor(J){super(J);this.uuid=M9(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,W=this.holes.length;$<W;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let W=this.holes[Q];J.holes.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(new eQ().fromJSON(W))}return this}}function Y5(J,Q,$=2){let W=Q&&Q.length,Z=W?Q[0]*$:J.length,K=PY(J,0,Z,$,!0),H=[];if(!K||K.next===K.prev)return H;let Y,X,U;if(W)K=E5(J,Q,K,$);if(J.length>80*$){Y=J[0],X=J[1];let G=Y,E=X;for(let N=$;N<Z;N+=$){let q=J[N],F=J[N+1];if(q<Y)Y=q;if(F<X)X=F;if(q>G)G=q;if(F>E)E=F}U=Math.max(G-Y,E-X),U=U!==0?32767/U:0}return v6(K,H,$,Y,X,U,0),H}function PY(J,Q,$,W,Z){let K;if(Z===C5(J,Q,$,W)>0)for(let H=Q;H<$;H+=W)K=RH(H/W|0,J[H],J[H+1],K);else for(let H=$-W;H>=Q;H-=W)K=RH(H/W|0,J[H],J[H+1],K);if(K&&d7(K,K.next))h6(K),K=K.next;return K}function Q7(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,W;do if(W=!1,!$.steiner&&(d7($,$.next)||IJ($.prev,$,$.next)===0)){if(h6($),$=Q=$.prev,$===$.next)break;W=!0}else $=$.next;while(W||$!==Q);return Q}function v6(J,Q,$,W,Z,K,H){if(!J)return;if(!H&&K)L5(J,W,Z,K);let Y=J;while(J.prev!==J.next){let{prev:X,next:U}=J;if(K?U5(J,W,Z,K):X5(J)){Q.push(X.i,J.i,U.i),h6(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!H)v6(Q7(J),Q,$,W,Z,K,1);else if(H===1)J=G5(Q7(J),Q),v6(J,Q,$,W,Z,K,2);else if(H===2)N5(J,Q,$,W,Z,K);break}}}function X5(J){let Q=J.prev,$=J,W=J.next;if(IJ(Q,$,W)>=0)return!1;let Z=Q.x,K=$.x,H=W.x,Y=Q.y,X=$.y,U=W.y,G=Math.min(Z,K,H),E=Math.min(Y,X,U),N=Math.max(Z,K,H),q=Math.max(Y,X,U),F=W.next;while(F!==Q){if(F.x>=G&&F.x<=N&&F.y>=E&&F.y<=q&&w6(Z,Y,K,X,H,U,F.x,F.y)&&IJ(F.prev,F,F.next)>=0)return!1;F=F.next}return!0}function U5(J,Q,$,W){let Z=J.prev,K=J,H=J.next;if(IJ(Z,K,H)>=0)return!1;let Y=Z.x,X=K.x,U=H.x,G=Z.y,E=K.y,N=H.y,q=Math.min(Y,X,U),F=Math.min(G,E,N),B=Math.max(Y,X,U),R=Math.max(G,E,N),O=TW(q,F,Q,$,W),P=TW(B,R,Q,$,W),k=J.prevZ,L=J.nextZ;while(k&&k.z>=O&&L&&L.z<=P){if(k.x>=q&&k.x<=B&&k.y>=F&&k.y<=R&&k!==Z&&k!==H&&w6(Y,G,X,E,U,N,k.x,k.y)&&IJ(k.prev,k,k.next)>=0)return!1;if(k=k.prevZ,L.x>=q&&L.x<=B&&L.y>=F&&L.y<=R&&L!==Z&&L!==H&&w6(Y,G,X,E,U,N,L.x,L.y)&&IJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}while(k&&k.z>=O){if(k.x>=q&&k.x<=B&&k.y>=F&&k.y<=R&&k!==Z&&k!==H&&w6(Y,G,X,E,U,N,k.x,k.y)&&IJ(k.prev,k,k.next)>=0)return!1;k=k.prevZ}while(L&&L.z<=P){if(L.x>=q&&L.x<=B&&L.y>=F&&L.y<=R&&L!==Z&&L!==H&&w6(Y,G,X,E,U,N,L.x,L.y)&&IJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function G5(J,Q){let $=J;do{let W=$.prev,Z=$.next.next;if(!d7(W,Z)&&AY(W,$,$.next,Z)&&f6(W,Z)&&f6(Z,W))Q.push(W.i,$.i,Z.i),h6($),h6($.next),$=J=Z;$=$.next}while($!==J);return Q7($)}function N5(J,Q,$,W,Z,K){let H=J;do{let Y=H.next.next;while(Y!==H.prev){if(H.i!==Y.i&&k5(H,Y)){let X=wY(H,Y);H=Q7(H,H.next),X=Q7(X,X.next),v6(H,Q,$,W,Z,K,0),v6(X,Q,$,W,Z,K,0);return}Y=Y.next}H=H.next}while(H!==J)}function E5(J,Q,$,W){let Z=[];for(let K=0,H=Q.length;K<H;K++){let Y=Q[K]*W,X=K<H-1?Q[K+1]*W:J.length,U=PY(J,Y,X,W,!1);if(U===U.next)U.steiner=!0;Z.push(B5(U))}Z.sort(q5);for(let K=0;K<Z.length;K++)$=F5(Z[K],$);return $}function q5(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let W=(J.next.y-J.y)/(J.next.x-J.x),Z=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=W-Z}}return $}function F5(J,Q){let $=O5(J,Q);if(!$)return Q;let W=wY($,J);return Q7(W,W.next),Q7($,$.next)}function O5(J,Q){let $=Q,W=J.x,Z=J.y,K=-1/0,H;if(d7(J,$))return $;do{if(d7(J,$.next))return $.next;else if(Z<=$.y&&Z>=$.next.y&&$.next.y!==$.y){let E=$.x+(Z-$.y)*($.next.x-$.x)/($.next.y-$.y);if(E<=W&&E>K){if(K=E,H=$.x<$.next.x?$:$.next,E===W)return H}}$=$.next}while($!==Q);if(!H)return null;let Y=H,X=H.x,U=H.y,G=1/0;$=H;do{if(W>=$.x&&$.x>=X&&W!==$.x&&IY(Z<U?W:K,Z,X,U,Z<U?K:W,Z,$.x,$.y)){let E=Math.abs(Z-$.y)/(W-$.x);if(f6($,J)&&(E<G||E===G&&($.x>H.x||$.x===H.x&&R5(H,$))))H=$,G=E}$=$.next}while($!==Y);return H}function R5(J,Q){return IJ(J.prev,J,Q.prev)<0&&IJ(Q.next,J,J.next)<0}function L5(J,Q,$,W){let Z=J;do{if(Z.z===0)Z.z=TW(Z.x,Z.y,Q,$,W);Z.prevZ=Z.prev,Z.nextZ=Z.next,Z=Z.next}while(Z!==J);Z.prevZ.nextZ=null,Z.prevZ=null,V5(Z)}function V5(J){let Q,$=1;do{let W=J,Z;J=null;let K=null;Q=0;while(W){Q++;let H=W,Y=0;for(let U=0;U<$;U++)if(Y++,H=H.nextZ,!H)break;let X=$;while(Y>0||X>0&&H){if(Y!==0&&(X===0||!H||W.z<=H.z))Z=W,W=W.nextZ,Y--;else Z=H,H=H.nextZ,X--;if(K)K.nextZ=Z;else J=Z;Z.prevZ=K,K=Z}W=H}K.nextZ=null,$*=2}while(Q>1);return J}function TW(J,Q,$,W,Z){return J=(J-$)*Z|0,Q=(Q-W)*Z|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function B5(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function IY(J,Q,$,W,Z,K,H,Y){return(Z-H)*(Q-Y)>=(J-H)*(K-Y)&&(J-H)*(W-Y)>=($-H)*(Q-Y)&&($-H)*(K-Y)>=(Z-H)*(W-Y)}function w6(J,Q,$,W,Z,K,H,Y){return!(J===H&&Q===Y)&&IY(J,Q,$,W,Z,K,H,Y)}function k5(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!D5(J,Q)&&(f6(J,Q)&&f6(Q,J)&&M5(J,Q)&&(IJ(J.prev,J,Q.prev)||IJ(J,Q.prev,Q))||d7(J,Q)&&IJ(J.prev,J,J.next)>0&&IJ(Q.prev,Q,Q.next)>0)}function IJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function d7(J,Q){return J.x===Q.x&&J.y===Q.y}function AY(J,Q,$,W){let Z=sQ(IJ(J,Q,$)),K=sQ(IJ(J,Q,W)),H=sQ(IJ($,W,J)),Y=sQ(IJ($,W,Q));if(Z!==K&&H!==Y)return!0;if(Z===0&&nQ(J,$,Q))return!0;if(K===0&&nQ(J,W,Q))return!0;if(H===0&&nQ($,J,W))return!0;if(Y===0&&nQ($,Q,W))return!0;return!1}function nQ(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function sQ(J){return J>0?1:J<0?-1:0}function D5(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&AY($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function f6(J,Q){return IJ(J.prev,J,J.next)<0?IJ(J,Q,J.next)>=0&&IJ(J,J.prev,Q)>=0:IJ(J,Q,J.prev)<0||IJ(J,J.next,Q)<0}function M5(J,Q){let $=J,W=!1,Z=(J.x+Q.x)/2,K=(J.y+Q.y)/2;do{if($.y>K!==$.next.y>K&&$.next.y!==$.y&&Z<($.next.x-$.x)*(K-$.y)/($.next.y-$.y)+$.x)W=!W;$=$.next}while($!==J);return W}function wY(J,Q){let $=_W(J.i,J.x,J.y),W=_W(Q.i,Q.x,Q.y),Z=J.next,K=Q.prev;return J.next=Q,Q.prev=J,$.next=Z,Z.prev=$,W.next=$,$.prev=W,K.next=W,W.prev=K,W}function RH(J,Q,$,W){let Z=_W(J,Q,$);if(!W)Z.prev=Z,Z.next=Z;else Z.next=W.next,Z.prev=W,W.next.prev=Z,W.next=Z;return Z}function h6(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function _W(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function C5(J,Q,$,W){let Z=0;for(let K=Q,H=$-W;K<$;K+=W)Z+=(J[H]-J[K])*(J[K+1]+J[H+1]),H=K;return Z}class TY{static triangulate(J,Q,$=2){return Y5(J,Q,$)}}class p7{static area(J){let Q=J.length,$=0;for(let W=Q-1,Z=0;Z<Q;W=Z++)$+=J[W].x*J[Z].y-J[Z].x*J[W].y;return $*0.5}static isClockWise(J){return p7.area(J)<0}static triangulateShape(J,Q){let $=[],W=[],Z=[];LH(J),VH($,J);let K=J.length;Q.forEach(LH);for(let Y=0;Y<Q.length;Y++)W.push(K),K+=Q[Y].length,VH($,Q[Y]);let H=TY.triangulate($,W);for(let Y=0;Y<H.length;Y+=3)Z.push(H.slice(Y,Y+3));return Z}}function LH(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function VH(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class h8 extends CJ{constructor(J=[new U0(0,-0.5),new U0(0.5,0),new U0(0,0.5)],Q=12,$=0,W=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:W},Q=Math.floor(Q),W=s0(W,0,Math.PI*2);let Z=[],K=[],H=[],Y=[],X=[],U=1/Q,G=new S,E=new U0,N=new S,q=new S,F=new S,B=0,R=0;for(let O=0;O<=J.length-1;O++)switch(O){case 0:B=J[O+1].x-J[O].x,R=J[O+1].y-J[O].y,N.x=R*1,N.y=-B,N.z=R*0,F.copy(N),N.normalize(),Y.push(N.x,N.y,N.z);break;case J.length-1:Y.push(F.x,F.y,F.z);break;default:B=J[O+1].x-J[O].x,R=J[O+1].y-J[O].y,N.x=R*1,N.y=-B,N.z=R*0,q.copy(N),N.x+=F.x,N.y+=F.y,N.z+=F.z,N.normalize(),Y.push(N.x,N.y,N.z),F.copy(q)}for(let O=0;O<=Q;O++){let P=$+O*U*W,k=Math.sin(P),L=Math.cos(P);for(let z=0;z<=J.length-1;z++){G.x=J[z].x*k,G.y=J[z].y,G.z=J[z].x*L,K.push(G.x,G.y,G.z),E.x=O/Q,E.y=z/(J.length-1),H.push(E.x,E.y);let w=Y[3*z+0]*k,_=Y[3*z+1],D=Y[3*z+0]*L;X.push(w,_,D)}}for(let O=0;O<Q;O++)for(let P=0;P<J.length-1;P++){let k=P+O*J.length,L=k,z=k+J.length,w=k+J.length+1,_=k+1;Z.push(L,z,_),Z.push(w,_,z)}this.setIndex(Z),this.setAttribute("position",new ZJ(K,3)),this.setAttribute("uv",new ZJ(H,2)),this.setAttribute("normal",new ZJ(X,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new h8(J.points,J.segments,J.phiStart,J.phiLength)}}class F9 extends CJ{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(W),X=H+1,U=Y+1,G=J/H,E=Q/Y,N=[],q=[],F=[],B=[];for(let R=0;R<U;R++){let O=R*E-K;for(let P=0;P<X;P++){let k=P*G-Z;q.push(k,-O,0),F.push(0,0,1),B.push(P/H),B.push(1-R/Y)}}for(let R=0;R<Y;R++)for(let O=0;O<H;O++){let P=O+X*R,k=O+X*(R+1),L=O+1+X*(R+1),z=O+1+X*R;N.push(P,k,z),N.push(k,L,z)}this.setIndex(N),this.setAttribute("position",new ZJ(q,3)),this.setAttribute("normal",new ZJ(F,3)),this.setAttribute("uv",new ZJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new F9(J.width,J.height,J.widthSegments,J.heightSegments)}}class $Q extends CJ{constructor(J=new QQ([new U0(0,0.5),new U0(-0.5,-0.5),new U0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],W=[],Z=[],K=[],H=0,Y=0;if(Array.isArray(J)===!1)X(J);else for(let U=0;U<J.length;U++)X(J[U]),this.addGroup(H,Y,U),H+=Y,Y=0;this.setIndex($),this.setAttribute("position",new ZJ(W,3)),this.setAttribute("normal",new ZJ(Z,3)),this.setAttribute("uv",new ZJ(K,2));function X(U){let G=W.length/3,E=U.extractPoints(Q),N=E.shape,q=E.holes;if(p7.isClockWise(N)===!1)N=N.reverse();for(let B=0,R=q.length;B<R;B++){let O=q[B];if(p7.isClockWise(O)===!0)q[B]=O.reverse()}let F=p7.triangulateShape(N,q);for(let B=0,R=q.length;B<R;B++){let O=q[B];N=N.concat(O)}for(let B=0,R=N.length;B<R;B++){let O=N[B];W.push(O.x,O.y,0),Z.push(0,0,1),K.push(O.x,O.y)}for(let B=0,R=F.length;B<R;B++){let O=F[B],P=O[0]+G,k=O[1]+G,L=O[2]+G;$.push(P,k,L),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return z5(Q,J)}static fromJSON(J,Q){let $=[];for(let W=0,Z=J.shapes.length;W<Z;W++){let K=Q[J.shapes[W]];$.push(K)}return new $Q($,J.curveSegments)}}function z5(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,W=J.length;$<W;$++){let Z=J[$];Q.shapes.push(Z.uuid)}else Q.shapes.push(J.uuid);return Q}class E8 extends CJ{constructor(J=1,Q=32,$=16,W=0,Z=Math.PI*2,K=0,H=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:W,phiLength:Z,thetaStart:K,thetaLength:H},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(K+H,Math.PI),X=0,U=[],G=new S,E=new S,N=[],q=[],F=[],B=[];for(let R=0;R<=$;R++){let O=[],P=R/$,k=K+P*H,L=J*Math.cos(k),z=Math.sqrt(J*J-L*L),w=0;if(R===0&&K===0)w=0.5/Q;else if(R===$&&Y===Math.PI)w=-0.5/Q;for(let _=0;_<=Q;_++){let D=_/Q,A=W+D*Z;G.x=-z*Math.cos(A),G.y=L,G.z=z*Math.sin(A),q.push(G.x,G.y,G.z),E.copy(G).normalize(),F.push(E.x,E.y,E.z),B.push(D+w,1-P),O.push(X++)}U.push(O)}for(let R=0;R<$;R++)for(let O=0;O<Q;O++){let P=U[R][O+1],k=U[R][O],L=U[R+1][O],z=U[R+1][O+1];if(R!==0||K>0)N.push(P,k,z);if(R!==$-1||Y<Math.PI)N.push(k,L,z)}this.setIndex(N),this.setAttribute("position",new ZJ(q,3)),this.setAttribute("normal",new ZJ(F,3)),this.setAttribute("uv",new ZJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new E8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class b8 extends CJ{constructor(J=1,Q=0.4,$=12,W=48,Z=Math.PI*2,K=0,H=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:W,arc:Z,thetaStart:K,thetaLength:H},$=Math.floor($),W=Math.floor(W);let Y=[],X=[],U=[],G=[],E=new S,N=new S,q=new S;for(let F=0;F<=$;F++){let B=K+F/$*H;for(let R=0;R<=W;R++){let O=R/W*Z;N.x=(J+Q*Math.cos(B))*Math.cos(O),N.y=(J+Q*Math.cos(B))*Math.sin(O),N.z=Q*Math.sin(B),X.push(N.x,N.y,N.z),E.x=J*Math.cos(O),E.y=J*Math.sin(O),q.subVectors(N,E).normalize(),U.push(q.x,q.y,q.z),G.push(R/W),G.push(F/$)}}for(let F=1;F<=$;F++)for(let B=1;B<=W;B++){let R=(W+1)*F+B-1,O=(W+1)*(F-1)+B-1,P=(W+1)*(F-1)+B,k=(W+1)*F+B;Y.push(R,O,k),Y.push(O,P,k)}this.setIndex(Y),this.setAttribute("position",new ZJ(X,3)),this.setAttribute("normal",new ZJ(U,3)),this.setAttribute("uv",new ZJ(G,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new b8(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class WQ extends CJ{constructor(J=new W6(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),Q=64,$=1,W=8,Z=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:W,closed:Z};let K=J.computeFrenetFrames(Q,Z);this.tangents=K.tangents,this.normals=K.normals,this.binormals=K.binormals;let H=new S,Y=new S,X=new U0,U=new S,G=[],E=[],N=[],q=[];F(),this.setIndex(q),this.setAttribute("position",new ZJ(G,3)),this.setAttribute("normal",new ZJ(E,3)),this.setAttribute("uv",new ZJ(N,2));function F(){for(let P=0;P<Q;P++)B(P);B(Z===!1?Q:0),O(),R()}function B(P){U=J.getPointAt(P/Q,U);let k=K.normals[P],L=K.binormals[P];for(let z=0;z<=W;z++){let w=z/W*Math.PI*2,_=Math.sin(w),D=-Math.cos(w);Y.x=D*k.x+_*L.x,Y.y=D*k.y+_*L.y,Y.z=D*k.z+_*L.z,Y.normalize(),E.push(Y.x,Y.y,Y.z),H.x=U.x+$*Y.x,H.y=U.y+$*Y.y,H.z=U.z+$*Y.z,G.push(H.x,H.y,H.z)}}function R(){for(let P=1;P<=Q;P++)for(let k=1;k<=W;k++){let L=(W+1)*(P-1)+(k-1),z=(W+1)*P+(k-1),w=(W+1)*P+k,_=(W+1)*(P-1)+k;q.push(L,z,_),q.push(z,w,_)}}function O(){for(let P=0;P<=Q;P++)for(let k=0;k<=W;k++)X.x=P/Q,X.y=k/W,N.push(X.x,X.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new WQ(new wW[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function U7(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if(BH(Z))if(Z.isRenderTargetTexture)T0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if(BH(Z[0])){let K=[];for(let H=0,Y=Z.length;H<Y;H++)K[H]=Z[H].clone();Q[$][W]=K}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function eJ(J){let Q={};for(let $=0;$<J.length;$++){let W=U7(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function BH(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function P5(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function lZ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return r0.workingColorSpace}var _Y={clone:U7,merge:eJ},I5=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A5=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class P9 extends K9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I5,this.fragmentShader=A5,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=U7(J.uniforms),this.uniformsGroups=P5(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let K=this.uniforms[W].value;if(K&&K.isTexture)Q.uniforms[W]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[W]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[W]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[W]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[W]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[W]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[W]={type:"m4",value:K.toArray()};else Q.uniforms[W]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let W=J.uniforms[$];switch(this.uniforms[$]={},W.type){case"t":this.uniforms[$].value=Q[W.value]||null;break;case"c":this.uniforms[$].value=new v0().setHex(W.value);break;case"v2":this.uniforms[$].value=new U0().fromArray(W.value);break;case"v3":this.uniforms[$].value=new S().fromArray(W.value);break;case"v4":this.uniforms[$].value=new FJ().fromArray(W.value);break;case"m3":this.uniforms[$].value=new c0().fromArray(W.value);break;case"m4":this.uniforms[$].value=new g0().fromArray(W.value);break;default:this.uniforms[$].value=W.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class mZ extends P9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class JJ extends K9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new v0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new v0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new C9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class O9 extends JJ{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new U0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return s0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new v0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new v0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new v0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class w$ extends K9{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new v0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new v0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new C9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class dZ extends K9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class uZ extends K9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function w8(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function aQ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function w5(J){function Q(Z,K){return J[Z]-J[K]}let $=J.length,W=Array($);for(let Z=0;Z!==$;++Z)W[Z]=Z;return W.sort(Q),W}function kH(J,Q,$){let W=J.length,Z=new J.constructor(W);for(let K=0,H=0;H!==W;++K){let Y=$[K]*Q;for(let X=0;X!==Q;++X)Z[H++]=J[Y+X]}return Z}function T5(J,Q,$,W){let Z=1,K=J[0];while(K!==void 0&&K[W]===void 0)K=J[Z++];if(K===void 0)return;let H=K[W];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(...H);K=J[Z++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[W],H!==void 0)Q.push(K.time),H.toArray($,$.length);K=J[Z++]}while(K!==void 0);else do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(H);K=J[Z++]}while(K!==void 0)}class q8{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];J:{Q:{let K;$:{W:if(!(J<W)){for(let H=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(Z=W,W=Q[++$],J<W)break Q}K=Q.length;break $}if(!(J>=Z)){let H=Q[1];if(J<H)$=2,Z=H;for(let Y=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(W=Z,Z=Q[--$-1],J>=Z)break Q}K=$,$=0;break $}break J}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let K=0;K!==W;++K)Q[K]=$[Z+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class cZ extends q8{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,K=J+1,H=W[Z],Y=W[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,H=2*Q-$;break;case 2402:Z=W.length-2,H=Q+W[Z]-W[Z+1];break;default:Z=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+W[1]-W[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=Z*U,this._offsetNext=K*U}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,N=this._weightNext,q=($-Q)/(W-Q),F=q*q,B=F*q,R=-E*B+2*E*F-E*q,O=(1+E)*B+(-1.5-2*E)*F+(-0.5+E)*q+1,P=(-1-N)*B+(1.5+N)*F+0.5*q,k=N*B-N*F;for(let L=0;L!==H;++L)Z[L]=R*K[U+L]+O*K[X+L]+P*K[Y+L]+k*K[G+L];return Z}}class T$ extends q8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(W-Q),G=1-U;for(let E=0;E!==H;++E)Z[E]=K[X+E]*G+K[Y+E]*U;return Z}}class nZ extends q8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class sZ extends q8{interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,G=this.outTangents;if(!U||!G){let q=($-Q)/(W-Q),F=1-q;for(let B=0;B!==H;++B)Z[B]=K[X+B]*F+K[Y+B]*q;return Z}let E=H*2,N=J-1;for(let q=0;q!==H;++q){let F=K[X+q],B=K[Y+q],R=N*E+q*2,O=G[R],P=G[R+1],k=J*E+q*2,L=U[k],z=U[k+1],w=S5($,Q,O,L,W);Z[q]=SY(w,F,P,z,B)}return Z}}function SY(J,Q,$,W,Z){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*W+J*J*J*Z}function _5(J,Q,$,W,Z){let K=1-J;return 3*K*K*($-Q)+6*K*J*(W-$)+3*J*J*(Z-W)}function S5(J,Q,$,W,Z){let K=(J-Q)/(Z-Q);for(let H=0;H<8;H++){let Y=SY(K,Q,$,W,Z)-J;if(Math.abs(Y)<0.0000000001)break;let X=_5(K,Q,$,W,Z);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class R9{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=w8(Q,this.TimeBufferType),this.values=w8($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:w8(J.times,Array),values:w8(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W;if(aQ(J.settings))$.settings={inTangents:w8(J.settings.inTangents,Array),outTangents:w8(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new nZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new T$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new cZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new sZ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return T0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J;if(aQ(this.settings))DH(this.settings.inTangents,J),DH(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,K=W-1;while(Z!==W&&$[Z]<J)++Z;while(K!==-1&&$[K]>Q)--K;if(++K,Z!==0||K!==W){if(Z>=K)K=Math.max(K,1),Z=K-1;let H=this.getValueSize();this.times=$.slice(Z,K),this.values=this.values.slice(Z*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)m0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)m0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==Z;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){m0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){m0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(W!==void 0){if(RU(W))for(let H=0,Y=W.length;H!==Y;++H){let X=W[H];if(isNaN(X)){m0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,K=1;for(let H=1;H<Z;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!W){let G=H*$,E=G-$,N=G+$;for(let q=0;q!==$;++q){let F=Q[G+q];if(F!==Q[E+q]||F!==Q[N+q]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let G=H*$,E=K*$;for(let N=0;N!==$;++N)Q[E+N]=Q[G+N]}++K}}if(Z>0){J[K]=J[Z];for(let H=Z*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);if(W.createInterpolant=this.createInterpolant,aQ(this.settings))W.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return W}}function DH(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]*=Q}R9.prototype.ValueTypeName="";R9.prototype.TimeBufferType=Float32Array;R9.prototype.ValueBufferType=Float32Array;R9.prototype.DefaultInterpolation=2301;class x8 extends R9{constructor(J,Q,$){super(J,Q,$)}}x8.prototype.ValueTypeName="bool";x8.prototype.ValueBufferType=Array;x8.prototype.DefaultInterpolation=2300;x8.prototype.InterpolantFactoryMethodLinear=void 0;x8.prototype.InterpolantFactoryMethodSmooth=void 0;class _$ extends R9{constructor(J,Q,$,W){super(J,Q,$,W)}}_$.prototype.ValueTypeName="color";class g8 extends R9{constructor(J,Q,$,W){super(J,Q,$,W)}}g8.prototype.ValueTypeName="number";class iZ extends q8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(W-Q),X=J*H;for(let U=X+H;X!==U;X+=4)YJ.slerpFlat(Z,0,K,X-H,K,X,Y);return Z}}class p8 extends R9{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new iZ(this.times,this.values,this.getValueSize(),J)}}p8.prototype.ValueTypeName="quaternion";p8.prototype.InterpolantFactoryMethodSmooth=void 0;class l8 extends R9{constructor(J,Q,$){super(J,Q,$)}}l8.prototype.ValueTypeName="string";l8.prototype.ValueBufferType=Array;l8.prototype.DefaultInterpolation=2300;l8.prototype.InterpolantFactoryMethodLinear=void 0;l8.prototype.InterpolantFactoryMethodSmooth=void 0;class G7 extends R9{constructor(J,Q,$,W){super(J,Q,$,W)}}G7.prototype.ValueTypeName="vector";class u7{constructor(J="",Q=-1,$=[],W=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=W,this.uuid=M9(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,W=1/(J.fps||1);for(let K=0,H=$.length;K!==H;++K)Q.push(y5($[K]).scale(W));let Z=new this(J.name,J.duration,Q,J.blendMode);return Z.uuid=J.uuid,Z.userData=JSON.parse(J.userData||"{}"),Z}static toJSON(J){let Q=[],$=J.tracks,W={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let Z=0,K=$.length;Z!==K;++Z)Q.push(R9.toJSON($[Z]));return W}static CreateFromMorphTargetSequence(J,Q,$,W){let Z=Q.length,K=[];for(let H=0;H<Z;H++){let Y=[],X=[];Y.push((H+Z-1)%Z,H,(H+1)%Z),X.push(0,1,0);let U=w5(Y);if(Y=kH(Y,1,U),X=kH(X,1,U),!W&&Y[0]===0)Y.push(Z),X.push(X[0]);K.push(new g8(".morphTargetInfluences["+Q[H].name+"]",Y,X).scale(1/$))}return new this(J,-1,K)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let W=J;$=W.geometry&&W.geometry.animations||W.animations}for(let W=0;W<$.length;W++)if($[W].name===Q)return $[W];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let W={},Z=/^([\w-]*?)([\d]+)$/;for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=X.name.match(Z);if(U&&U.length>1){let G=U[1],E=W[G];if(!E)W[G]=E=[];E.push(X)}}let K=[];for(let H in W)K.push(this.CreateFromMorphTargetSequence(H,W[H],Q,$));return K}resetDuration(){let J=this.tracks,Q=0;for(let $=0,W=J.length;$!==W;++$){let Z=this.tracks[$];Q=Math.max(Q,Z.times[Z.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function j5(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return g8;case"vector":case"vector2":case"vector3":case"vector4":return G7;case"color":return _$;case"quaternion":return p8;case"bool":case"boolean":return x8;case"string":return l8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function y5(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=j5(J.type);if(J.times===void 0){let W=[],Z=[];T5(J.keys,W,Z,"value"),J.times=W,J.values=Z}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(aQ(J.settings))$.settings={inTangents:w8(J.settings.inTangents,Float32Array),outTangents:w8(J.settings.outTangents,Float32Array)};return $}var n9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(MH(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(MH(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function MH(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class oZ{constructor(J,Q,$){let W=this,Z=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,Z===!1){if(W.onStart!==void 0)W.onStart(U,K,H)}Z=!0},this.itemEnd=function(U){if(K++,W.onProgress!==void 0)W.onProgress(U,K,H);if(K===H){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=X.length;G<E;G+=2){let N=X[G],q=X[G+1];if(N.global)N.lastIndex=0;if(N.test(U))return q}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var jY=new oZ;class F8{constructor(J){if(this.manager=J!==void 0?J:jY,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}F8.DEFAULT_MATERIAL_NAME="__DEFAULT";var X8={};class yY extends Error{constructor(J,Q){super(J);this.response=Q}}class ZQ extends F8{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=n9.get(`file:${J}`);if(Z!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(Z);this.manager.itemEnd(J)},0);return}if(X8[J]!==void 0){X8[J].push({onLoad:Q,onProgress:$,onError:W});return}X8[J]=[],X8[J].push({onLoad:Q,onProgress:$,onError:W});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)T0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=X8[J],G=X.body.getReader(),E=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),N=E?parseInt(E):0,q=N!==0,F=0,B=new ReadableStream({start(R){O();function O(){G.read().then(({done:P,value:k})=>{if(P)R.close();else{F+=k.byteLength;let L=new ProgressEvent("progress",{lengthComputable:q,loaded:F,total:N});for(let z=0,w=U.length;z<w;z++){let _=U[z];if(_.onProgress)_.onProgress(L)}R.enqueue(k),O()}},(P)=>{R.error(P)})}}});return new Response(B)}else throw new yY(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(H),E=G&&G[1]?G[1].toLowerCase():void 0,N=new TextDecoder(E);return X.arrayBuffer().then((q)=>N.decode(q))}}}).then((X)=>{n9.add(`file:${J}`,X);let U=X8[J];delete X8[J];for(let G=0,E=U.length;G<E;G++){let N=U[G];if(N.onLoad)N.onLoad(X)}}).catch((X)=>{let U=X8[J];if(U===void 0)throw this.manager.itemError(J),X;delete X8[J];for(let G=0,E=U.length;G<E;G++){let N=U[G];if(N.onError)N.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var h7=new WeakMap;class aZ extends F8{constructor(J){super(J)}load(J,Q,$,W){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=n9.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)Z.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);else{let G=h7.get(K);if(G===void 0)G=[],h7.set(K,G);G.push({onLoad:Q,onError:W})}return K}let H=l7("img");function Y(){if(U(),Q)Q(this);let G=h7.get(this)||[];for(let E=0;E<G.length;E++){let N=G[E];if(N.onLoad)N.onLoad(this)}h7.delete(this),Z.manager.itemEnd(J)}function X(G){if(U(),W)W(G);n9.remove(`image:${J}`);let E=h7.get(this)||[];for(let N=0;N<E.length;N++){let q=E[N];if(q.onError)q.onError(G)}h7.delete(this),Z.manager.itemError(J),Z.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return n9.add(`image:${J}`,H),Z.manager.itemStart(J),H.src=J,H}}class S$ extends F8{constructor(J){super(J)}load(J,Q,$,W){let Z=new SJ,K=new aZ(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(Z.image=H,Z.needsUpdate=!0,Q!==void 0)Q(Z)},$,W),Z}}class Z6 extends NJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new v0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class j$ extends Z6{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(NJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new v0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var PW=new g0,CH=new S,zH=new S;class KQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new g0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new r6,this._frameExtents=new U0(1,1),this._viewportCount=1,this._viewports=[new FJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;CH.setFromMatrixPosition(J.matrixWorld),Q.position.copy(CH),zH.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(zH),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,W){PW.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(PW,J.coordinateSystem,J.reversedDepth);let Z=this._frameExtents,K=W?W.z/Z.x:1,H=W?W.w/Z.y:1,Y=W?W.x/Z.x:0,X=W?W.y/Z.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(PW)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var iQ=new S,oQ=new YJ,c9=new S;class y$ extends NJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new g0,this.projectionMatrix=new g0,this.projectionMatrixInverse=new g0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(iQ,oQ,c9),c9.x===1&&c9.y===1&&c9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(iQ,oQ,c9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(iQ,oQ,c9),c9.x===1&&c9.y===1&&c9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(iQ,oQ,c9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var A8=new S,PH=new U0,IH=new U0;class hJ extends y${constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=J7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(T6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return J7*2*Math.atan(Math.tan(T6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){A8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(A8.x,A8.y).multiplyScalar(-J/A8.z),A8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(A8.x,A8.y).multiplyScalar(-J/A8.z)}getViewSize(J,Q){return this.getViewBounds(J,PH,IH),Q.subVectors(IH,PH)}setViewOffset(J,Q,$,W,Z,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(T6*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;Z+=K.offsetX*W/Y,Q-=K.offsetY*$/X,W*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)Z+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class vY extends KQ{constructor(){super(new hJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=J7*2*J.angle*this.focus,W=this.mapSize.width/this.mapSize.height*this.aspect,Z=J.distance||Q.far;if($!==Q.fov||W!==Q.aspect||Z!==Q.far)Q.fov=$,Q.aspect=W,Q.far=Z,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class K6 extends Z6{constructor(J,Q,$=0,W=Math.PI/3,Z=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(NJ.DEFAULT_UP),this.updateMatrix(),this.target=new NJ,this.distance=$,this.angle=W,this.penumbra=Z,this.decay=K,this.map=null,this.shadow=new vY}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class fY extends KQ{constructor(){super(new hJ(90,1,0.5,500));this.isPointLightShadow=!0}}class m8 extends Z6{constructor(J,Q,$=0,W=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=W,this.shadow=new fY}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class N7 extends y${constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,K=$+J,H=W+Q,Y=W-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=X*this.view.offsetX,K=Z+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(Z,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class hY extends KQ{constructor(){super(new N7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class H6 extends Z6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(NJ.DEFAULT_UP),this.updateMatrix(),this.target=new NJ,this.shadow=new hY}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class d8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var IW=new WeakMap;class v$ extends F8{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")T0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")T0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=n9.get(`image-bitmap:${J}`);if(K!==void 0){if(Z.manager.itemStart(J),K.then){K.then((X)=>{if(IW.has(K)===!0){if(W)W(IW.get(K));Z.manager.itemError(J),Z.manager.itemEnd(J)}else{if(Q)Q(X);Z.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);return}let H={};H.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",H.headers=this.requestHeader,H.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,H).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign({},Z.options,{colorSpaceConversion:"none"}))}).then(function(X){if(n9.add(`image-bitmap:${J}`,X),Q)Q(X);return Z.manager.itemEnd(J),X}).catch(function(X){if(W)W(X);IW.set(Y,X),n9.remove(`image-bitmap:${J}`),Z.manager.itemError(J),Z.manager.itemEnd(J)});n9.add(`image-bitmap:${J}`,Y),Z.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var b7=-90,x7=1;class rZ extends NJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new hJ(b7,x7,J,Q);W.layers=this.layers,this.add(W);let Z=new hJ(b7,x7,J,Q);Z.layers=this.layers,this.add(Z);let K=new hJ(b7,x7,J,Q);K.layers=this.layers,this.add(K);let H=new hJ(b7,x7,J,Q);H.layers=this.layers,this.add(H);let Y=new hJ(b7,x7,J,Q);Y.layers=this.layers,this.add(Y);let X=new hJ(b7,x7,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,K,H,Y,X,U]=this.children,G=J.getRenderTarget(),E=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let F=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,W),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,W),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,W),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=F,J.setRenderTarget($,5,W),B&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,E,N),J.xr.enabled=q,$.texture.needsPMREMUpdate=!0}}class tZ extends hJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class eZ{constructor(J,Q,$){this.binding=J,this.valueSize=$;let W,Z,K;switch(Q){case"quaternion":W=this._slerp,Z=this._slerpAdditive,K=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":W=this._select,Z=this._select,K=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:W=this._lerp,Z=this._lerpAdditive,K=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=W,this._mixBufferRegionAdditive=Z,this._setIdentity=K,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,W=this.valueSize,Z=J*W+W,K=this.cumulativeWeight;if(K===0){for(let H=0;H!==W;++H)$[Z+H]=$[H];K=Q}else{K+=Q;let H=Q/K;this._mixBufferRegion($,Z,0,H,W)}this.cumulativeWeight=K}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,W=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,W,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,W=J*Q+Q,Z=this.cumulativeWeight,K=this.cumulativeWeightAdditive,H=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,Z<1){let Y=Q*this._origIndex;this._mixBufferRegion($,W,Y,1-Z,Q)}if(K>0)this._mixBufferRegionAdditive($,W,this._addIndex*Q,1,Q);for(let Y=Q,X=Q+Q;Y!==X;++Y)if($[Y]!==$[Y+Q]){H.setValue($,W);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,W=$*this._origIndex;J.getValue(Q,W);for(let Z=$,K=W;Z!==K;++Z)Q[Z]=Q[W+Z%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,W,Z){if(W>=0.5)for(let K=0;K!==Z;++K)J[Q+K]=J[$+K]}_slerp(J,Q,$,W){YJ.slerpFlat(J,Q,J,Q,J,$,W)}_slerpAdditive(J,Q,$,W,Z){let K=this._workIndex*Z;YJ.multiplyQuaternionsFlat(J,K,J,Q,J,$),YJ.slerpFlat(J,Q,J,Q,J,K,W)}_lerp(J,Q,$,W,Z){let K=1-W;for(let H=0;H!==Z;++H){let Y=Q+H;J[Y]=J[Y]*K+J[$+H]*W}}_lerpAdditive(J,Q,$,W,Z){for(let K=0;K!==Z;++K){let H=Q+K;J[H]=J[H]+J[$+K]*W}}}var JK="\\[\\]\\.:\\/",v5=new RegExp("["+JK+"]","g"),QK="[^"+JK+"]",f5="[^"+JK.replace("\\.","")+"]",h5=/((?:WC+[\/:])*)/.source.replace("WC",QK),b5=/(WCOD+)?/.source.replace("WCOD",f5),x5=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",QK),g5=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",QK),p5=new RegExp("^"+h5+b5+x5+g5+"$"),l5=["material","materials","bones","map"];class bY{constructor(J,Q,$){let W=$||UJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class UJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||UJ.parseTrackName(Q),this.node=UJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new UJ(J,Q,$);else return new UJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(v5,"")}static parseTrackName(J){let Q=p5.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if(l5.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let K=0;K<Z.length;K++){let H=Z[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=UJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){T0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){m0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){m0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){m0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){m0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){m0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){m0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){m0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[W];if(K===void 0){let X=Q.nodeName;m0("PropertyBinding: Trying to update property for track: "+X+"."+W+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){m0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){m0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=Z}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=W;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}UJ.Composite=bY;UJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};UJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};UJ.prototype.GetterByBindingType=[UJ.prototype._getValue_direct,UJ.prototype._getValue_array,UJ.prototype._getValue_arrayElement,UJ.prototype._getValue_toArray];UJ.prototype.SetterByBindingTypeAndVersioning=[[UJ.prototype._setValue_direct,UJ.prototype._setValue_direct_setNeedsUpdate,UJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[UJ.prototype._setValue_array,UJ.prototype._setValue_array_setNeedsUpdate,UJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[UJ.prototype._setValue_arrayElement,UJ.prototype._setValue_arrayElement_setNeedsUpdate,UJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[UJ.prototype._setValue_fromArray,UJ.prototype._setValue_fromArray_setNeedsUpdate,UJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class $K{constructor(J,Q,$=null,W=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=W;let Z=Q.tracks,K=Z.length,H=Array(K),Y={endingStart:2400,endingEnd:2400};for(let X=0;X!==K;++X){let U=Z[X].createInterpolant(null);H[X]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=H,this._propertyBindings=Array(K),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let W=this._clip.duration,Z=J._clip.duration,K=Z/W,H=W/Z;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,K,Q),this.warp(H,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let W=this._mixer,Z=W.time,K=this.timeScale,H=this._timeScaleInterpolant;if(H===null)H=W._lendControlInterpolant(),this._timeScaleInterpolant=H;let{parameterPositions:Y,sampleValues:X}=H;return Y[0]=Z,Y[1]=Z+$,X[0]=J/K,X[1]=Q/K,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,W){if(!this.enabled){this._updateWeight(J);return}let Z=this._startTime;if(Z!==null){let Y=(J-Z)*$;if(Y<0||$===0)Q=0;else this._startTime=null,Q=$*Y}Q*=this._updateTimeScale(J);let K=this._updateTime(Q),H=this._updateWeight(J);if(H>0){let Y=this._interpolants,X=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,G=Y.length;U!==G;++U)Y[U].evaluate(K),X[U].accumulateAdditive(H);break;case 2500:default:for(let U=0,G=Y.length;U!==G;++U)Y[U].evaluate(K),X[U].accumulate(W,H)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(this.stopFading(),W===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,W=this.time+J,Z=this._loopCount,K=$===2202;if(J===0){if(Z===-1)return W;return K&&(Z&1)===1?Q-W:W}if($===2200){if(Z===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(W>=Q)W=Q;else if(W<0)W=0;else{this.time=W;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(Z===-1)if(J>=0)Z=0,this._setEndings(!0,this.repetitions===0,K);else this._setEndings(this.repetitions===0,!0,K);if(W>=Q||W<0){let H=Math.floor(W/Q);W-=Q*H,Z+=Math.abs(H);let Y=this.repetitions-Z;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;W=J>0?Q:0,this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let X=J<0;this._setEndings(X,!X,K)}else this._setEndings(!1,!1,K);this._loopCount=Z,this.time=W,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:H})}}else this._loopCount=Z,this.time=W;if(K&&(Z&1)===1)return Q-W}return W}_setEndings(J,Q,$){let W=this._interpolantSettings;if($)W.endingStart=2401,W.endingEnd=2401;else{if(J)W.endingStart=this.zeroSlopeAtStart?2401:2400;else W.endingStart=2402;if(Q)W.endingEnd=this.zeroSlopeAtEnd?2401:2400;else W.endingEnd=2402}}_scheduleFading(J,Q,$){let W=this._mixer,Z=W.time,K=this._weightInterpolant;if(K===null)K=W._lendControlInterpolant(),this._weightInterpolant=K;let{parameterPositions:H,sampleValues:Y}=K;return H[0]=Z,Y[0]=Q,H[1]=Z+J,Y[1]=$,this}}var m5=new Float32Array(1);class HQ extends p9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,W=J._clip.tracks,Z=W.length,K=J._propertyBindings,H=J._interpolants,Y=$.uuid,X=this._bindingsByRootAndName,U=X[Y];if(U===void 0)U={},X[Y]=U;for(let G=0;G!==Z;++G){let E=W[G],N=E.name,q=U[N];if(q!==void 0)++q.referenceCount,K[G]=q;else{if(q=K[G],q!==void 0){if(q._cacheIndex===null)++q.referenceCount,this._addInactiveBinding(q,Y,N);continue}let F=Q&&Q._propertyBindings[G].binding.parsedPath;q=new eZ(UJ.create($,N,F),E.ValueTypeName,E.getValueSize()),++q.referenceCount,this._addInactiveBinding(q,Y,N),K[G]=q}H[G].resultBuffer=q.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,W=J._clip.uuid,Z=this._actionsByClip[W];this._bindAction(J,Z&&Z.knownActions[0]),this._addInactiveAction(J,W,$)}let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(Z.useCount++===0)this._lendBinding(Z),Z.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.useCount===0)Z.restoreOriginalState(),this._takeBackBinding(Z)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let W=this._actions,Z=this._actionsByClip,K=Z[Q];if(K===void 0)K={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,Z[Q]=K;else{let H=K.knownActions;J._byClipCacheIndex=H.length,H.push(J)}J._cacheIndex=W.length,W.push(J),K.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],W=J._cacheIndex;$._cacheIndex=W,Q[W]=$,Q.pop(),J._cacheIndex=null;let Z=J._clip.uuid,K=this._actionsByClip,H=K[Z],Y=H.knownActions,X=Y[Y.length-1],U=J._byClipCacheIndex;X._byClipCacheIndex=U,Y[U]=X,Y.pop(),J._byClipCacheIndex=null;let G=H.actionByRoot,E=(J._localRoot||this._root).uuid;if(delete G[E],Y.length===0)delete K[Z];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.referenceCount===0)this._removeInactiveBinding(Z)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,W=this._nActiveActions++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,W=--this._nActiveActions,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_addInactiveBinding(J,Q,$){let W=this._bindingsByRootAndName,Z=this._bindings,K=W[Q];if(K===void 0)K={},W[Q]=K;K[$]=J,J._cacheIndex=Z.length,Z.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,W=$.rootNode.uuid,Z=$.path,K=this._bindingsByRootAndName,H=K[W],Y=Q[Q.length-1],X=J._cacheIndex;if(Y._cacheIndex=X,Q[X]=Y,Q.pop(),delete H[Z],Object.keys(H).length===0)delete K[W]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,W=this._nActiveBindings++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,W=--this._nActiveBindings,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new T$(new Float32Array(2),new Float32Array(2),1,m5),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,W=--this._nActiveControlInterpolants,Z=Q[W];J.__cacheIndex=W,Q[W]=J,Z.__cacheIndex=$,Q[$]=Z}clipAction(J,Q,$){let W=Q||this._root,Z=W.uuid,K=typeof J==="string"?u7.findByName(W,J):J,H=K!==null?K.uuid:J,Y=this._actionsByClip[H],X=null;if($===void 0)if(K!==null)$=K.blendMode;else $=2500;if(Y!==void 0){let G=Y.actionByRoot[Z];if(G!==void 0&&G.blendMode===$)return G;if(X=Y.knownActions[0],K===null)K=X._clip}if(K===null)return null;let U=new $K(this,K,Q,$);return this._bindAction(U,X),this._addInactiveAction(U,H,Z),U}existingAction(J,Q){let $=Q||this._root,W=$.uuid,Z=typeof J==="string"?u7.findByName($,J):J,K=Z?Z.uuid:J,H=this._actionsByClip[K];if(H!==void 0)return H.actionByRoot[W]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,W=this.time+=J,Z=Math.sign(J),K=this._accuIndex^=1;for(let X=0;X!==$;++X)Q[X]._update(W,J,Z,K);let H=this._bindings,Y=this._nActiveBindings;for(let X=0;X!==Y;++X)H[X].apply(K);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,W=this._actionsByClip,Z=W[$];if(Z!==void 0){let K=Z.knownActions;for(let H=0,Y=K.length;H!==Y;++H){let X=K[H];this._deactivateAction(X);let U=X._cacheIndex,G=Q[Q.length-1];X._cacheIndex=null,X._byClipCacheIndex=null,G._cacheIndex=U,Q[U]=G,Q.pop(),this._removeInactiveBindingsForAction(X)}delete W[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let K in $){let H=$[K].actionByRoot,Y=H[Q];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let W=this._bindingsByRootAndName,Z=W[Q];if(Z!==void 0)for(let K in Z){let H=Z[K];H.restoreOriginalState(),this._removeInactiveBinding(H)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class f${constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,T0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class YQ{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=s0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(s0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class WK{static{WK.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}class h$ extends p9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function ZK(J,Q,$,W){let Z=d5(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function d5(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)T0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function KX(){let J=null,Q=!1,$=null,W=null;function Z(K,H){W=J.requestAnimationFrame(Z),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function u5(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:G}=Y,E=U.byteLength,N=J.createBuffer();J.bindBuffer(X,N),J.bufferData(X,U,G),Y.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)q=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function W(Y,X,U){let{array:G,updateRanges:E}=X;if(J.bindBuffer(U,Y),E.length===0)J.bufferSubData(U,0,G);else{E.sort((q,F)=>q.start-F.start);let N=0;for(let q=1;q<E.length;q++){let F=E[N],B=E[q];if(B.start<=F.start+F.count+1)F.count=Math.max(F.count,B.start+B.count-F.start);else++N,E[N]=B}E.length=N+1;for(let q=0,F=E.length;q<F;q++){let B=E[q];J.bufferSubData(U,B.start*G.BYTES_PER_ELEMENT,G,B.start,B.count)}X.clearUpdateRanges()}X.onUploadCallback()}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,Y,X),U.version=Y.version}}return{get:Z,remove:K,update:H}}var c5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n5=`#ifdef USE_ALPHAHASH
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
#endif`,s5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r5=`#ifdef USE_AOMAP
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
#endif`,t5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e5=`#ifdef USE_BATCHING
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
#endif`,JG=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QG=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$G=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WG=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZG=`#ifdef USE_IRIDESCENCE
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
#endif`,KG=`#ifdef USE_BUMPMAP
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
#endif`,HG=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UG=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,NG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,EG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,FG=`#define PI 3.141592653589793
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
} // validated`,OG=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RG=`vec3 transformedNormal = objectNormal;
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
#endif`,LG=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VG=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BG=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kG=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DG="gl_FragColor = linearToOutputTexel( gl_FragColor );",MG=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CG=`#ifdef USE_ENVMAP
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
#endif`,zG=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PG=`#ifdef USE_ENVMAP
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
#endif`,IG=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AG=`#ifdef USE_ENVMAP
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
#endif`,wG=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TG=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_G=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SG=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jG=`#ifdef USE_GRADIENTMAP
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
}`,yG=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vG=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hG=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bG=`#ifdef USE_ENVMAP
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
#endif`,xG=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pG=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mG=`PhysicalMaterial material;
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
#endif`,dG=`uniform sampler2D dfgLUT;
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
}`,uG=`
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
#endif`,cG=`#if defined( RE_IndirectDiffuse )
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
#endif`,nG=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sG=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,iG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tG=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eG=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QN=`#if defined( USE_POINTS_UV )
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
#endif`,$N=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YN=`#ifdef USE_MORPHTARGETS
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
#endif`,XN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,FN=`#ifdef USE_NORMALMAP
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
#endif`,ON=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_N=`float getShadowMask() {
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
}`,SN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jN=`#ifdef USE_SKINNING
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
#endif`,yN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vN=`#ifdef USE_SKINNING
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
#endif`,fN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gN=`#ifdef USE_TRANSMISSION
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
#endif`,pN=`#ifdef USE_TRANSMISSION
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
#endif`,lN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nN=`uniform sampler2D t2D;
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
}`,sN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rN=`#include <common>
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
}`,tN=`#if DEPTH_PACKING == 3200
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
}`,eN=`#define DISTANCE
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
}`,JE=`#define DISTANCE
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`uniform float scale;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,HE=`uniform vec3 diffuse;
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
}`,YE=`#define LAMBERT
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
}`,XE=`#define LAMBERT
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
}`,UE=`#define MATCAP
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
}`,GE=`#define MATCAP
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
}`,NE=`#define NORMAL
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
}`,EE=`#define NORMAL
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
}`,qE=`#define PHONG
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
}`,FE=`#define PHONG
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
}`,OE=`#define STANDARD
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
}`,RE=`#define STANDARD
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
}`,LE=`#define TOON
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
}`,VE=`#define TOON
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
}`,BE=`uniform float size;
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
}`,kE=`uniform vec3 diffuse;
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
}`,DE=`#include <common>
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
}`,ME=`uniform vec3 color;
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
}`,CE=`uniform float rotation;
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
}`,zE=`uniform vec3 diffuse;
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
}`,o0={alphahash_fragment:c5,alphahash_pars_fragment:n5,alphamap_fragment:s5,alphamap_pars_fragment:i5,alphatest_fragment:o5,alphatest_pars_fragment:a5,aomap_fragment:r5,aomap_pars_fragment:t5,batching_pars_vertex:e5,batching_vertex:JG,begin_vertex:QG,beginnormal_vertex:$G,bsdfs:WG,iridescence_fragment:ZG,bumpmap_pars_fragment:KG,clipping_planes_fragment:HG,clipping_planes_pars_fragment:YG,clipping_planes_pars_vertex:XG,clipping_planes_vertex:UG,color_fragment:GG,color_pars_fragment:NG,color_pars_vertex:EG,color_vertex:qG,common:FG,cube_uv_reflection_fragment:OG,defaultnormal_vertex:RG,displacementmap_pars_vertex:LG,displacementmap_vertex:VG,emissivemap_fragment:BG,emissivemap_pars_fragment:kG,colorspace_fragment:DG,colorspace_pars_fragment:MG,envmap_fragment:CG,envmap_common_pars_fragment:zG,envmap_pars_fragment:PG,envmap_pars_vertex:IG,envmap_physical_pars_fragment:bG,envmap_vertex:AG,fog_vertex:wG,fog_pars_vertex:TG,fog_fragment:_G,fog_pars_fragment:SG,gradientmap_pars_fragment:jG,lightmap_pars_fragment:yG,lights_lambert_fragment:vG,lights_lambert_pars_fragment:fG,lights_pars_begin:hG,lights_toon_fragment:xG,lights_toon_pars_fragment:gG,lights_phong_fragment:pG,lights_phong_pars_fragment:lG,lights_physical_fragment:mG,lights_physical_pars_fragment:dG,lights_fragment_begin:uG,lights_fragment_maps:cG,lights_fragment_end:nG,lightprobes_pars_fragment:sG,logdepthbuf_fragment:iG,logdepthbuf_pars_fragment:oG,logdepthbuf_pars_vertex:aG,logdepthbuf_vertex:rG,map_fragment:tG,map_pars_fragment:eG,map_particle_fragment:JN,map_particle_pars_fragment:QN,metalnessmap_fragment:$N,metalnessmap_pars_fragment:WN,morphinstance_vertex:ZN,morphcolor_vertex:KN,morphnormal_vertex:HN,morphtarget_pars_vertex:YN,morphtarget_vertex:XN,normal_fragment_begin:UN,normal_fragment_maps:GN,normal_pars_fragment:NN,normal_pars_vertex:EN,normal_vertex:qN,normalmap_pars_fragment:FN,clearcoat_normal_fragment_begin:ON,clearcoat_normal_fragment_maps:RN,clearcoat_pars_fragment:LN,iridescence_pars_fragment:VN,opaque_fragment:BN,packing:kN,premultiplied_alpha_fragment:DN,project_vertex:MN,dithering_fragment:CN,dithering_pars_fragment:zN,roughnessmap_fragment:PN,roughnessmap_pars_fragment:IN,shadowmap_pars_fragment:AN,shadowmap_pars_vertex:wN,shadowmap_vertex:TN,shadowmask_pars_fragment:_N,skinbase_vertex:SN,skinning_pars_vertex:jN,skinning_vertex:yN,skinnormal_vertex:vN,specularmap_fragment:fN,specularmap_pars_fragment:hN,tonemapping_fragment:bN,tonemapping_pars_fragment:xN,transmission_fragment:gN,transmission_pars_fragment:pN,uv_pars_fragment:lN,uv_pars_vertex:mN,uv_vertex:dN,worldpos_vertex:uN,background_vert:cN,background_frag:nN,backgroundCube_vert:sN,backgroundCube_frag:iN,cube_vert:oN,cube_frag:aN,depth_vert:rN,depth_frag:tN,distance_vert:eN,distance_frag:JE,equirect_vert:QE,equirect_frag:$E,linedashed_vert:WE,linedashed_frag:ZE,meshbasic_vert:KE,meshbasic_frag:HE,meshlambert_vert:YE,meshlambert_frag:XE,meshmatcap_vert:UE,meshmatcap_frag:GE,meshnormal_vert:NE,meshnormal_frag:EE,meshphong_vert:qE,meshphong_frag:FE,meshphysical_vert:OE,meshphysical_frag:RE,meshtoon_vert:LE,meshtoon_frag:VE,points_vert:BE,points_frag:kE,shadow_vert:DE,shadow_frag:ME,sprite_vert:CE,sprite_frag:zE},P0={common:{diffuse:{value:new v0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new c0},alphaMap:{value:null},alphaMapTransform:{value:new c0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new c0}},envmap:{envMap:{value:null},envMapRotation:{value:new c0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new c0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new c0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new c0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new c0},normalScale:{value:new U0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new c0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new c0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new c0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new c0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new v0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new S},probesMax:{value:new S},probesResolution:{value:new S}},points:{diffuse:{value:new v0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new c0},alphaTest:{value:0},uvTransform:{value:new c0}},sprite:{diffuse:{value:new v0(16777215)},opacity:{value:1},center:{value:new U0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new c0},alphaMap:{value:null},alphaMapTransform:{value:new c0},alphaTest:{value:0}}},t9={basic:{uniforms:eJ([P0.common,P0.specularmap,P0.envmap,P0.aomap,P0.lightmap,P0.fog]),vertexShader:o0.meshbasic_vert,fragmentShader:o0.meshbasic_frag},lambert:{uniforms:eJ([P0.common,P0.specularmap,P0.envmap,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.fog,P0.lights,{emissive:{value:new v0(0)},envMapIntensity:{value:1}}]),vertexShader:o0.meshlambert_vert,fragmentShader:o0.meshlambert_frag},phong:{uniforms:eJ([P0.common,P0.specularmap,P0.envmap,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.fog,P0.lights,{emissive:{value:new v0(0)},specular:{value:new v0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:o0.meshphong_vert,fragmentShader:o0.meshphong_frag},standard:{uniforms:eJ([P0.common,P0.envmap,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.roughnessmap,P0.metalnessmap,P0.fog,P0.lights,{emissive:{value:new v0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:o0.meshphysical_vert,fragmentShader:o0.meshphysical_frag},toon:{uniforms:eJ([P0.common,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.gradientmap,P0.fog,P0.lights,{emissive:{value:new v0(0)}}]),vertexShader:o0.meshtoon_vert,fragmentShader:o0.meshtoon_frag},matcap:{uniforms:eJ([P0.common,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.fog,{matcap:{value:null}}]),vertexShader:o0.meshmatcap_vert,fragmentShader:o0.meshmatcap_frag},points:{uniforms:eJ([P0.points,P0.fog]),vertexShader:o0.points_vert,fragmentShader:o0.points_frag},dashed:{uniforms:eJ([P0.common,P0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:o0.linedashed_vert,fragmentShader:o0.linedashed_frag},depth:{uniforms:eJ([P0.common,P0.displacementmap]),vertexShader:o0.depth_vert,fragmentShader:o0.depth_frag},normal:{uniforms:eJ([P0.common,P0.bumpmap,P0.normalmap,P0.displacementmap,{opacity:{value:1}}]),vertexShader:o0.meshnormal_vert,fragmentShader:o0.meshnormal_frag},sprite:{uniforms:eJ([P0.sprite,P0.fog]),vertexShader:o0.sprite_vert,fragmentShader:o0.sprite_frag},background:{uniforms:{uvTransform:{value:new c0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:o0.background_vert,fragmentShader:o0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new c0}},vertexShader:o0.backgroundCube_vert,fragmentShader:o0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:o0.cube_vert,fragmentShader:o0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:o0.equirect_vert,fragmentShader:o0.equirect_frag},distance:{uniforms:eJ([P0.common,P0.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:o0.distance_vert,fragmentShader:o0.distance_frag},shadow:{uniforms:eJ([P0.lights,P0.fog,{color:{value:new v0(0)},opacity:{value:1}}]),vertexShader:o0.shadow_vert,fragmentShader:o0.shadow_frag}};t9.physical={uniforms:eJ([t9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new c0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new c0},clearcoatNormalScale:{value:new U0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new c0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new c0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new c0},sheen:{value:0},sheenColor:{value:new v0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new c0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new c0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new c0},transmissionSamplerSize:{value:new U0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new c0},attenuationDistance:{value:0},attenuationColor:{value:new v0(0)},specularColor:{value:new v0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new c0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new c0},anisotropyVector:{value:new U0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new c0}}]),vertexShader:o0.meshphysical_vert,fragmentShader:o0.meshphysical_frag};var b$={r:0,b:0,g:0},PE=new g0,HX=new c0;HX.set(-1,0,0,0,1,0,0,0,1);function IE(J,Q,$,W,Z,K){let H=new v0(0),Y=Z===!0?0:1,X,U,G=null,E=0,N=null;function q(P){let k=P.isScene===!0?P.background:null;if(k&&k.isTexture){let L=P.backgroundBlurriness>0;k=Q.get(k,L)}return k}function F(P){let k=!1,L=q(P);if(L===null)R(H,Y);else if(L&&L.isColor)R(L,1),k=!0;let z=J.xr.getEnvironmentBlendMode();if(z==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(z==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||k)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(P,k){let L=q(k);if(L&&(L.isCubeTexture||L.mapping===p6)){if(U===void 0)U=new A0(new uJ(1,1,1),new P9({name:"BackgroundCubeMaterial",uniforms:U7(t9.backgroundCube.uniforms),vertexShader:t9.backgroundCube.vertexShader,fragmentShader:t9.backgroundCube.fragmentShader,side:tJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(z,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(U);if(U.material.uniforms.envMap.value=L,U.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(PE.makeRotationFromEuler(k.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(HX);if(U.material.toneMapped=r0.getTransfer(L.colorSpace)!==kJ,G!==L||E!==L.version||N!==J.toneMapping)U.material.needsUpdate=!0,G=L,E=L.version,N=J.toneMapping;U.layers.enableAll(),P.unshift(U,U.geometry,U.material,0,0,null)}else if(L&&L.isTexture){if(X===void 0)X=new A0(new F9(2,2),new P9({name:"BackgroundMaterial",uniforms:U7(t9.background.uniforms),vertexShader:t9.background.vertexShader,fragmentShader:t9.background.fragmentShader,side:j8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(X);if(X.material.uniforms.t2D.value=L,X.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,X.material.toneMapped=r0.getTransfer(L.colorSpace)!==kJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(L.matrix),G!==L||E!==L.version||N!==J.toneMapping)X.material.needsUpdate=!0,G=L,E=L.version,N=J.toneMapping;X.layers.enableAll(),P.unshift(X,X.geometry,X.material,0,0,null)}}function R(P,k){P.getRGB(b$,lZ(J)),$.buffers.color.setClear(b$.r,b$.g,b$.b,k,K)}function O(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(P,k=1){H.set(P),Y=k,R(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(P){Y=P,R(H,Y)},render:F,addToRenderList:B,dispose:O}}function AE(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=N(null),K=Z,H=!1;function Y(h,p,e,j,n){let $0=!1,u=E(h,j,e,p);if(K!==u)K=u,U(K.object);if($0=q(h,j,e,n),$0)F(h,j,e,n);if(n!==null)Q.update(n,J.ELEMENT_ARRAY_BUFFER);if($0||H){if(H=!1,L(h,p,e,j),n!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(n).buffer)}}function X(){return J.createVertexArray()}function U(h){return J.bindVertexArray(h)}function G(h){return J.deleteVertexArray(h)}function E(h,p,e,j){let n=j.wireframe===!0,$0=W[p.id];if($0===void 0)$0={},W[p.id]=$0;let u=h.isInstancedMesh===!0?h.id:0,E0=$0[u];if(E0===void 0)E0={},$0[u]=E0;let t=E0[e.id];if(t===void 0)t={},E0[e.id]=t;let W0=t[n];if(W0===void 0)W0=N(X()),t[n]=W0;return W0}function N(h){let p=[],e=[],j=[];for(let n=0;n<$;n++)p[n]=0,e[n]=0,j[n]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:e,attributeDivisors:j,object:h,attributes:{},index:null}}function q(h,p,e,j){let n=K.attributes,$0=p.attributes,u=0,E0=e.getAttributes();for(let t in E0)if(E0[t].location>=0){let X0=n[t],h0=$0[t];if(h0===void 0){if(t==="instanceMatrix"&&h.instanceMatrix)h0=h.instanceMatrix;if(t==="instanceColor"&&h.instanceColor)h0=h.instanceColor}if(X0===void 0)return!0;if(X0.attribute!==h0)return!0;if(h0&&X0.data!==h0.data)return!0;u++}if(K.attributesNum!==u)return!0;if(K.index!==j)return!0;return!1}function F(h,p,e,j){let n={},$0=p.attributes,u=0,E0=e.getAttributes();for(let t in E0)if(E0[t].location>=0){let X0=$0[t];if(X0===void 0){if(t==="instanceMatrix"&&h.instanceMatrix)X0=h.instanceMatrix;if(t==="instanceColor"&&h.instanceColor)X0=h.instanceColor}let h0={};if(h0.attribute=X0,X0&&X0.data)h0.data=X0.data;n[t]=h0,u++}K.attributes=n,K.attributesNum=u,K.index=j}function B(){let h=K.newAttributes;for(let p=0,e=h.length;p<e;p++)h[p]=0}function R(h){O(h,0)}function O(h,p){let{newAttributes:e,enabledAttributes:j,attributeDivisors:n}=K;if(e[h]=1,j[h]===0)J.enableVertexAttribArray(h),j[h]=1;if(n[h]!==p)J.vertexAttribDivisor(h,p),n[h]=p}function P(){let{newAttributes:h,enabledAttributes:p}=K;for(let e=0,j=p.length;e<j;e++)if(p[e]!==h[e])J.disableVertexAttribArray(e),p[e]=0}function k(h,p,e,j,n,$0,u){if(u===!0)J.vertexAttribIPointer(h,p,e,n,$0);else J.vertexAttribPointer(h,p,e,j,n,$0)}function L(h,p,e,j){B();let n=j.attributes,$0=e.getAttributes(),u=p.defaultAttributeValues;for(let E0 in $0){let t=$0[E0];if(t.location>=0){let W0=n[E0];if(W0===void 0){if(E0==="instanceMatrix"&&h.instanceMatrix)W0=h.instanceMatrix;if(E0==="instanceColor"&&h.instanceColor)W0=h.instanceColor}if(W0!==void 0){let{normalized:X0,itemSize:h0}=W0,_0=Q.get(W0);if(_0===void 0)continue;let{buffer:RJ,type:l0,bytesPerElement:a}=_0,N0=l0===J.INT||l0===J.UNSIGNED_INT||W0.gpuType===mW;if(W0.isInterleavedBufferAttribute){let O0=W0.data,f0=O0.stride,j0=W0.offset;if(O0.isInstancedInterleavedBuffer){for(let S0=0;S0<t.locationSize;S0++)O(t.location+S0,O0.meshPerAttribute);if(h.isInstancedMesh!==!0&&j._maxInstanceCount===void 0)j._maxInstanceCount=O0.meshPerAttribute*O0.count}else for(let S0=0;S0<t.locationSize;S0++)R(t.location+S0);J.bindBuffer(J.ARRAY_BUFFER,RJ);for(let S0=0;S0<t.locationSize;S0++)k(t.location+S0,h0/t.locationSize,l0,X0,f0*a,(j0+h0/t.locationSize*S0)*a,N0)}else{if(W0.isInstancedBufferAttribute){for(let O0=0;O0<t.locationSize;O0++)O(t.location+O0,W0.meshPerAttribute);if(h.isInstancedMesh!==!0&&j._maxInstanceCount===void 0)j._maxInstanceCount=W0.meshPerAttribute*W0.count}else for(let O0=0;O0<t.locationSize;O0++)R(t.location+O0);J.bindBuffer(J.ARRAY_BUFFER,RJ);for(let O0=0;O0<t.locationSize;O0++)k(t.location+O0,h0/t.locationSize,l0,X0,h0*a,h0/t.locationSize*O0*a,N0)}}else if(u!==void 0){let X0=u[E0];if(X0!==void 0)switch(X0.length){case 2:J.vertexAttrib2fv(t.location,X0);break;case 3:J.vertexAttrib3fv(t.location,X0);break;case 4:J.vertexAttrib4fv(t.location,X0);break;default:J.vertexAttrib1fv(t.location,X0)}}}}P()}function z(){A();for(let h in W){let p=W[h];for(let e in p){let j=p[e];for(let n in j){let $0=j[n];for(let u in $0)G($0[u].object),delete $0[u];delete j[n]}}delete W[h]}}function w(h){if(W[h.id]===void 0)return;let p=W[h.id];for(let e in p){let j=p[e];for(let n in j){let $0=j[n];for(let u in $0)G($0[u].object),delete $0[u];delete j[n]}}delete W[h.id]}function _(h){for(let p in W){let e=W[p];for(let j in e){let n=e[j];if(n[h.id]===void 0)continue;let $0=n[h.id];for(let u in $0)G($0[u].object),delete $0[u];delete n[h.id]}}}function D(h){for(let p in W){let e=W[p],j=h.isInstancedMesh===!0?h.id:0,n=e[j];if(n===void 0)continue;for(let $0 in n){let u=n[$0];for(let E0 in u)G(u[E0].object),delete u[E0];delete n[$0]}if(delete e[j],Object.keys(e).length===0)delete W[p]}}function A(){if(d(),H=!0,K===Z)return;K=Z,U(K.object)}function d(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:Y,reset:A,resetDefaultState:d,dispose:z,releaseStatesOfGeometry:w,releaseStatesOfObject:D,releaseStatesOfProgram:_,initAttributes:B,enableAttribute:R,disableUnusedAttributes:P}}function wE(J,Q,$){let W;function Z(X){W=X}function K(X,U){J.drawArrays(W,X,U),$.update(U,W,1)}function H(X,U,G){if(G===0)return;J.drawArraysInstanced(W,X,U,G),$.update(U,W,G)}function Y(X,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,X,0,U,0,G);let N=0;for(let q=0;q<G;q++)N+=U[q];$.update(N,W,1)}this.setMode=Z,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function TE(J,Q,$,W){let Z;function K(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function H(_){if(_!==a9&&W.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let D=_===o9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==g9&&_!==G8&&!D&&W.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=X(U);if(G!==U)T0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=$.logarithmicDepthBuffer===!0,N=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&N===!1)T0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),F=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),P=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),k=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),z=J.getParameter(J.MAX_SAMPLES),w=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:N,maxTextures:q,maxVertexTextures:F,maxTextureSize:B,maxCubemapSize:R,maxAttributes:O,maxVertexUniforms:P,maxVaryings:k,maxFragmentUniforms:L,maxSamples:z,samples:w}}function _E(J){let Q=this,$=null,W=0,Z=!1,K=!1,H=new k9,Y=new c0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(E,N){let q=E.length!==0||N||W!==0||Z;return Z=N,W=E.length,q},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,N){$=G(E,N,0)},this.setState=function(E,N,q){let{clippingPlanes:F,clipIntersection:B,clipShadows:R}=E,O=J.get(E);if(!Z||F===null||F.length===0||K&&!R)if(K)G(null);else U();else{let P=K?0:W,k=P*4,L=O.clippingState||null;X.value=L,L=G(F,N,k,q);for(let z=0;z!==k;++z)L[z]=$[z];O.clippingState=L,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=P}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function G(E,N,q,F){let B=E!==null?E.length:0,R=null;if(B!==0){if(R=X.value,F!==!0||R===null){let O=q+B*4,P=N.matrixWorldInverse;if(Y.getNormalMatrix(P),R===null||R.length<O)R=new Float32Array(O);for(let k=0,L=q;k!==B;++k,L+=4)H.copy(E[k]).applyMatrix4(P,Y),H.normal.toArray(R,L),R[L+3]=H.constant}X.value=R,X.needsUpdate=!0}return Q.numPlanes=B,Q.numIntersection=0,R}}var X6=4,SE=6,jE=20,yE=256,XQ=new N7,xY=new v0,KK=null,HK=0,YK=0,XK=!1,vE=new S,E7=new S;class EQ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:K=256,position:H=vE}=Z;KK=this._renderer.getRenderTarget(),HK=this._renderer.getActiveCubeFace(),YK=this._renderer.getActiveMipmapLevel(),XK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,W,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=lY(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=pY(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(KK,HK,YK),this._renderer.xr.enabled=XK,J.scissorTest=!1,Y6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===s7||J.mapping===$7)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);KK=this._renderer.getRenderTarget(),HK=this._renderer.getActiveCubeFace(),YK=this._renderer.getActiveMipmapLevel(),XK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:dJ,minFilter:dJ,generateMipmaps:!1,type:o9,format:a9,colorSpace:N9,depthBuffer:!1},W=gY(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=gY(J,Q,$);let{_lodMax:Z}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fE(Z)),this._blurMaterial=bE(Z,J,Q),this._ggxMaterial=hE(Z,J,Q)}return W}_compileMaterial(J){let Q=new A0(new CJ,J);this._renderer.compile(Q,XQ)}_sceneToCubeUV(J,Q,$,W,Z){let Y=new hJ(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,N=G.toneMapping;if(G.getClearColor(xY),G.toneMapping=b9,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(W),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new A0(new uJ,new nJ({name:"PMREM.Background",side:tJ,depthWrite:!1,depthTest:!1}));let F=this._backgroundBox,B=F.material,R=!1,O=J.background;if(O){if(O.isColor)B.color.copy(O),J.background=null,R=!0}else B.color.copy(xY),R=!0;for(let P=0;P<6;P++){let k=P%3;if(k===0)Y.up.set(0,X[P],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x+U[P],Z.y,Z.z);else if(k===1)Y.up.set(0,0,X[P]),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y+U[P],Z.z);else Y.up.set(0,X[P],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y,Z.z+U[P]);let L=this._cubeSize;if(Y6(W,k*L,P>2?L:0,L,L),G.setRenderTarget(W),R)G.render(F,Y);G.render(J,Y)}G.toneMapping=N,G.autoClear=E,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,W=J.mapping===s7||J.mapping===$7;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=lY();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=pY();let Z=W?this._cubemapMaterial:this._equirectMaterial,K=this._lodMeshes[0];K.material=Z;let H=Z.uniforms;H.envMap.value=J;let Y=this._cubeSize;Y6(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(K,XQ)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let W=this._lodMeshes.length;for(let Z=1;Z<W;Z++)this._applyGGXFilter(J,Z-1,Z);Q.autoClear=$}_applyGGXFilter(J,Q,$){let W=this._renderer,Z=this._pingPongRenderTarget,K=this._ggxMaterial,H=this._lodMeshes[$];H.material=K;let Y=K.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),G=Math.sqrt(X*X-U*U),E=X*1.25,N=G*E,{_lodMax:q}=this,F=this._sizeLods[$],B=3*F*($>q-X6?$-q+X6:0),R=4*(this._cubeSize-F);Y.envMap.value=J.texture,Y.roughness.value=N,Y.mipInt.value=q-Q,Y6(Z,B,R,3*F,2*F),W.setRenderTarget(Z),W.render(H,XQ),Y.envMap.value=Z.texture,Y.roughness.value=0,Y.mipInt.value=q-$,Y6(J,B,R,3*F,2*F),W.setRenderTarget(J),W.render(H,XQ)}_blur(J,Q,$,W){let Z=this._pingPongRenderTarget,K=Math.min(W,Math.PI)/Math.SQRT2;this._blurPass(J,Z,Q,$,K),this._blurPass(Z,J,$,$,K)}_blurPass(J,Q,$,W,Z){let K=this._renderer,H=this._blurMaterial,Y=this._lodMeshes[W];Y.material=H;let X=H.uniforms;X.envMap.value=J.texture,X.sigma.value=Z,X.mipInt.value=this._lodMax-$;let U=this._sizeLods[W],G=3*U*(W>this._lodMax-X6?W-this._lodMax+X6:0),E=4*(this._cubeSize-U);Y6(Q,G,E,3*U,2*U),K.setRenderTarget(Q),K.render(Y,XQ)}}function fE(J){let Q=[],$=[],W=J,Z=J-X6+1+SE;for(let K=0;K<Z;K++){let H=Math.pow(2,W);Q.push(H);let Y=1/(H-2),X=-Y,U=1+Y,G=[X,X,U,X,U,U,X,X,U,U,X,U],E=6,N=6,q=3,F=new Float32Array(q*N*E),B=new Float32Array(q*N*E);for(let O=0;O<E;O++){let P=O%3*2/3-1,k=O>2?0:-1,L=[P,k,0,P+0.6666666666666666,k,0,P+0.6666666666666666,k+1,0,P,k,0,P+0.6666666666666666,k+1,0,P,k+1,0];F.set(L,q*N*O);for(let z=0;z<N;z++){let w=G[z*2]*2-1,_=G[z*2+1]*2-1;if(O===0)E7.set(1,_,w);else if(O===1)E7.set(-w,1,-_);else if(O===2)E7.set(-w,_,1);else if(O===3)E7.set(-1,_,-w);else if(O===4)E7.set(-w,-1,_);else E7.set(w,_,-1);E7.toArray(B,(O*N+z)*q)}}let R=new CJ;if(R.setAttribute("position",new bJ(F,q)),R.setAttribute("outputDirection",new bJ(B,q)),$.push(new A0(R,null)),W>X6)W--}return{lodMeshes:$,sizeLods:Q}}function gY(J,Q,$){let W=new E9(J,Q,$);return W.texture.mapping=p6,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function Y6(J,Q,$,W,Z){J.viewport.set(Q,$,W,Z),J.scissor.set(Q,$,W,Z)}function hE(J,Q,$){return new P9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yE,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:g$(),fragmentShader:`

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
		`,blending:s9,depthTest:!1,depthWrite:!1})}function bE(J,Q,$){return new P9({name:"SphericalGaussianBlur",defines:{SAMPLES:jE,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:g$(),fragmentShader:`

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
		`,blending:s9,depthTest:!1,depthWrite:!1})}function pY(){return new P9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:g$(),fragmentShader:`

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
		`,blending:s9,depthTest:!1,depthWrite:!1})}function lY(){return new P9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:g$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:s9,depthTest:!1,depthWrite:!1})}function g$(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class qK extends E9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new M$(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new uJ(5,5,5),Z=new P9({name:"CubemapFromEquirect",uniforms:U7($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:tJ,blending:s9});Z.uniforms.tEquirect.value=Q;let K=new A0(W,Z),H=Q.minFilter;if(Q.minFilter===i9)Q.minFilter=dJ;return new rZ(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,W);J.setRenderTarget(Z)}}function xE(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(N,q=!1){if(N===null||N===void 0)return null;if(q)return H(N);return K(N)}function K(N){if(N&&N.isTexture){let q=N.mapping;if(q===Q$||q===$$)if(Q.has(N)){let F=Q.get(N).texture;return Y(F,N.mapping)}else{let F=N.image;if(F&&F.height>0){let B=new qK(F.height);return B.fromEquirectangularTexture(J,N),Q.set(N,B),N.addEventListener("dispose",U),Y(B.texture,N.mapping)}else return null}}return N}function H(N){if(N&&N.isTexture){let q=N.mapping,F=q===Q$||q===$$,B=q===s7||q===$7;if(F||B){let R=$.get(N),O=R!==void 0?R.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==O){if(W===null)W=new EQ(J);return R=F?W.fromEquirectangular(N,R):W.fromCubemap(N,R),R.texture.pmremVersion=N.pmremVersion,$.set(N,R),R.texture}else if(R!==void 0)return R.texture;else{let P=N.image;if(F&&P&&P.height>0||B&&P&&X(P)){if(W===null)W=new EQ(J);return R=F?W.fromEquirectangular(N):W.fromCubemap(N),R.texture.pmremVersion=N.pmremVersion,$.set(N,R),N.addEventListener("dispose",G),R.texture}else return null}}}return N}function Y(N,q){if(q===Q$)N.mapping=s7;else if(q===$$)N.mapping=$7;return N}function X(N){let q=0,F=6;for(let B=0;B<F;B++)if(N[B]!==void 0)q++;return q===F}function U(N){let q=N.target;q.removeEventListener("dispose",U);let F=Q.get(q);if(F!==void 0)Q.delete(q),F.dispose()}function G(N){let q=N.target;q.removeEventListener("dispose",G);let F=$.get(q);if(F!==void 0)$.delete(q),F.dispose()}function E(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:E}}function gE(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)e8("WebGLRenderer: "+W+" extension not supported.");return Z}}}function pE(J,Q,$,W){let Z={},K=new WeakMap;function H(E){let N=E.target;if(N.index!==null)Q.remove(N.index);for(let F in N.attributes)Q.remove(N.attributes[F]);N.removeEventListener("dispose",H),delete Z[N.id];let q=K.get(N);if(q)Q.remove(q),K.delete(N);if(W.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;$.memory.geometries--}function Y(E,N){if(Z[N.id]===!0)return N;return N.addEventListener("dispose",H),Z[N.id]=!0,$.memory.geometries++,N}function X(E){let N=E.attributes;for(let q in N)Q.update(N[q],J.ARRAY_BUFFER)}function U(E){let N=[],q=E.index,F=E.attributes.position,B=0;if(F===void 0)return;if(q!==null){let P=q.array;B=q.version;for(let k=0,L=P.length;k<L;k+=3){let z=P[k+0],w=P[k+1],_=P[k+2];N.push(z,w,w,_,_,z)}}else{let P=F.array;B=F.version;for(let k=0,L=P.length/3-1;k<L;k+=3){let z=k+0,w=k+1,_=k+2;N.push(z,w,w,_,_,z)}}let R=new(F.count>=65535?L$:R$)(N,1);R.version=B;let O=K.get(E);if(O)Q.remove(O);K.set(E,R)}function G(E){let N=K.get(E);if(N){let q=E.index;if(q!==null){if(N.version<q.version)U(E)}}else U(E);return K.get(E)}return{get:Y,update:X,getWireframeAttribute:G}}function lE(J,Q,$){let W;function Z(E){W=E}let K,H;function Y(E){K=E.type,H=E.bytesPerElement}function X(E,N){J.drawElements(W,N,K,E*H),$.update(N,W,1)}function U(E,N,q){if(q===0)return;J.drawElementsInstanced(W,N,K,E*H,q),$.update(N,W,q)}function G(E,N,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,N,0,K,E,0,q);let B=0;for(let R=0;R<q;R++)B+=N[R];$.update(B,W,1)}this.setMode=Z,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=G}function mE(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:m0("WebGLInfo: Unknown draw mode:",H);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function dE(J,Q,$){let W=new WeakMap,Z=new FJ;function K(H,Y,X){let U=H.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=G!==void 0?G.length:0,N=W.get(Y);if(N===void 0||N.count!==E){let A=function(){_.dispose(),W.delete(Y),Y.removeEventListener("dispose",A)};if(N!==void 0)N.texture.dispose();let q=Y.morphAttributes.position!==void 0,F=Y.morphAttributes.normal!==void 0,B=Y.morphAttributes.color!==void 0,R=Y.morphAttributes.position||[],O=Y.morphAttributes.normal||[],P=Y.morphAttributes.color||[],k=0;if(q===!0)k=1;if(F===!0)k=2;if(B===!0)k=3;let L=Y.attributes.position.count*k,z=1;if(L>Q.maxTextureSize)z=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let w=new Float32Array(L*z*4*E),_=new F$(w,L,z,E);_.type=G8,_.needsUpdate=!0;let D=k*4;for(let d=0;d<E;d++){let h=R[d],p=O[d],e=P[d],j=L*z*4*d;for(let n=0;n<h.count;n++){let $0=n*D;if(q===!0)Z.fromBufferAttribute(h,n),w[j+$0+0]=Z.x,w[j+$0+1]=Z.y,w[j+$0+2]=Z.z,w[j+$0+3]=0;if(F===!0)Z.fromBufferAttribute(p,n),w[j+$0+4]=Z.x,w[j+$0+5]=Z.y,w[j+$0+6]=Z.z,w[j+$0+7]=0;if(B===!0)Z.fromBufferAttribute(e,n),w[j+$0+8]=Z.x,w[j+$0+9]=Z.y,w[j+$0+10]=Z.z,w[j+$0+11]=e.itemSize===4?Z.w:1}}N={count:E,texture:_,size:new U0(L,z)},W.set(Y,N),Y.addEventListener("dispose",A)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let q=0;for(let B=0;B<U.length;B++)q+=U[B];let F=Y.morphTargetsRelative?1:1-q;X.getUniforms().setValue(J,"morphTargetBaseInfluence",F),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",N.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:K}}function uE(J,Q,$,W,Z){let K=new WeakMap;function H(U){let G=Z.render.frame,E=U.geometry,N=Q.get(U,E);if(K.get(N)!==G)Q.update(N),K.set(N,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,G)}}if(U.isSkinnedMesh){let q=U.skeleton;if(K.get(q)!==G)q.update(),K.set(q,G)}return N}function Y(){K=new WeakMap}function X(U){let G=U.target;if(G.removeEventListener("dispose",X),W.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:H,dispose:Y}}var cE={[hW]:"LINEAR_TONE_MAPPING",[bW]:"REINHARD_TONE_MAPPING",[xW]:"CINEON_TONE_MAPPING",[g6]:"ACES_FILMIC_TONE_MAPPING",[pW]:"AGX_TONE_MAPPING",[lW]:"NEUTRAL_TONE_MAPPING",[gW]:"CUSTOM_TONE_MAPPING"};function nE(J,Q,$,W,Z,K){let H=new E9(Q,$,{type:J,depthBuffer:Z,stencilBuffer:K,samples:W?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=new CJ;U.setAttribute("position",new ZJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new ZJ([0,2,0,0,2,0],2));let G=new mZ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new A0(U,G),N=new N7(-1,1,1,-1,0,1),q=null,F=null,B=!1,R,O=null,P=[],k=!1;this.setSize=function(L,z){if(H.setSize(L,z),Y!==null)Y.setSize(L,z);if(X!==null)X.setSize(L,z);for(let w=0;w<P.length;w++){let _=P[w];if(_.setSize)_.setSize(L,z)}},this.setEffects=function(L){P=L,k=P.length>0&&P[0].isRenderPass===!0;let{width:z,height:w}=H;if(P.length>0&&Y===null)Y=new E9(z,w,{type:o9,depthBuffer:!1,stencilBuffer:!1}),X=new E9(z,w,{type:o9,depthBuffer:!1,stencilBuffer:!1});for(let _=0;_<P.length;_++){let D=P[_];if(D.setSize)D.setSize(z,w)}},this.begin=function(L,z){if(B)return!1;if(L.toneMapping===b9&&P.length===0)return!1;if(O=z,z!==null){let{width:w,height:_}=z;if(H.width!==w||H.height!==_)this.setSize(w,_)}if(k===!1)L.setRenderTarget(H);return R=L.toneMapping,L.toneMapping=b9,!0},this.hasRenderPass=function(){return k},this.end=function(L,z){L.toneMapping=R,B=!0;let w=H,_=Y;for(let D=0;D<P.length;D++){let A=P[D];if(A.enabled===!1)continue;if(A.render(L,_,w,z),A.needsSwap!==!1)w=_,_=_===Y?X:Y}if(q!==L.outputColorSpace||F!==L.toneMapping){if(q=L.outputColorSpace,F=L.toneMapping,G.defines={},r0.getTransfer(q)===kJ)G.defines.SRGB_TRANSFER="";let D=cE[F];if(D)G.defines[D]="";G.needsUpdate=!0}G.uniforms.tDiffuse.value=w.texture,L.setRenderTarget(O),L.render(E,N),O=null,B=!1},this.isCompositing=function(){return B},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();U.dispose(),G.dispose()}}var YX=new SJ,NK=new X7(1,1),XX=new F$,UX=new yZ,GX=new M$,mY=[],dY=[],uY=new Float32Array(16),cY=new Float32Array(9),nY=new Float32Array(4);function U6(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,K=mY[Z];if(K===void 0)K=new Float32Array(Z),mY[Z]=K;if(Q!==0){W.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function xJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function gJ(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function p$(J,Q){let $=dY[Q];if($===void 0)$=new Int32Array(Q),dY[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function sE(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function iE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(xJ($,Q))return;J.uniform2fv(this.addr,Q),gJ($,Q)}}function oE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(xJ($,Q))return;J.uniform3fv(this.addr,Q),gJ($,Q)}}function aE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(xJ($,Q))return;J.uniform4fv(this.addr,Q),gJ($,Q)}}function rE(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(xJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),gJ($,Q)}else{if(xJ($,W))return;nY.set(W),J.uniformMatrix2fv(this.addr,!1,nY),gJ($,W)}}function tE(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(xJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),gJ($,Q)}else{if(xJ($,W))return;cY.set(W),J.uniformMatrix3fv(this.addr,!1,cY),gJ($,W)}}function eE(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(xJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),gJ($,Q)}else{if(xJ($,W))return;uY.set(W),J.uniformMatrix4fv(this.addr,!1,uY),gJ($,W)}}function Jq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function Qq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(xJ($,Q))return;J.uniform2iv(this.addr,Q),gJ($,Q)}}function $q(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(xJ($,Q))return;J.uniform3iv(this.addr,Q),gJ($,Q)}}function Wq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(xJ($,Q))return;J.uniform4iv(this.addr,Q),gJ($,Q)}}function Zq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function Kq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(xJ($,Q))return;J.uniform2uiv(this.addr,Q),gJ($,Q)}}function Hq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(xJ($,Q))return;J.uniform3uiv(this.addr,Q),gJ($,Q)}}function Yq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(xJ($,Q))return;J.uniform4uiv(this.addr,Q),gJ($,Q)}}function Xq(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_2D_SHADOW)NK.compareFunction=$.isReversedDepthBuffer()?q$:E$,K=NK;else K=YX;$.setTexture2D(Q||K,Z)}function Uq(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||UX,Z)}function Gq(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTextureCube(Q||GX,Z)}function Nq(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||XX,Z)}function Eq(J){switch(J){case 5126:return sE;case 35664:return iE;case 35665:return oE;case 35666:return aE;case 35674:return rE;case 35675:return tE;case 35676:return eE;case 5124:case 35670:return Jq;case 35667:case 35671:return Qq;case 35668:case 35672:return $q;case 35669:case 35673:return Wq;case 5125:return Zq;case 36294:return Kq;case 36295:return Hq;case 36296:return Yq;case 35678:case 36198:case 36298:case 36306:case 35682:return Xq;case 35679:case 36299:case 36307:return Uq;case 35680:case 36300:case 36308:case 36293:return Gq;case 36289:case 36303:case 36311:case 36292:return Nq}}function qq(J,Q){J.uniform1fv(this.addr,Q)}function Fq(J,Q){let $=U6(Q,this.size,2);J.uniform2fv(this.addr,$)}function Oq(J,Q){let $=U6(Q,this.size,3);J.uniform3fv(this.addr,$)}function Rq(J,Q){let $=U6(Q,this.size,4);J.uniform4fv(this.addr,$)}function Lq(J,Q){let $=U6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function Vq(J,Q){let $=U6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function Bq(J,Q){let $=U6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function kq(J,Q){J.uniform1iv(this.addr,Q)}function Dq(J,Q){J.uniform2iv(this.addr,Q)}function Mq(J,Q){J.uniform3iv(this.addr,Q)}function Cq(J,Q){J.uniform4iv(this.addr,Q)}function zq(J,Q){J.uniform1uiv(this.addr,Q)}function Pq(J,Q){J.uniform2uiv(this.addr,Q)}function Iq(J,Q){J.uniform3uiv(this.addr,Q)}function Aq(J,Q){J.uniform4uiv(this.addr,Q)}function wq(J,Q,$){let W=this.cache,Z=Q.length,K=p$($,Z);if(!xJ(W,K))J.uniform1iv(this.addr,K),gJ(W,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=NK;else H=YX;for(let Y=0;Y!==Z;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function Tq(J,Q,$){let W=this.cache,Z=Q.length,K=p$($,Z);if(!xJ(W,K))J.uniform1iv(this.addr,K),gJ(W,K);for(let H=0;H!==Z;++H)$.setTexture3D(Q[H]||UX,K[H])}function _q(J,Q,$){let W=this.cache,Z=Q.length,K=p$($,Z);if(!xJ(W,K))J.uniform1iv(this.addr,K),gJ(W,K);for(let H=0;H!==Z;++H)$.setTextureCube(Q[H]||GX,K[H])}function Sq(J,Q,$){let W=this.cache,Z=Q.length,K=p$($,Z);if(!xJ(W,K))J.uniform1iv(this.addr,K),gJ(W,K);for(let H=0;H!==Z;++H)$.setTexture2DArray(Q[H]||XX,K[H])}function jq(J){switch(J){case 5126:return qq;case 35664:return Fq;case 35665:return Oq;case 35666:return Rq;case 35674:return Lq;case 35675:return Vq;case 35676:return Bq;case 5124:case 35670:return kq;case 35667:case 35671:return Dq;case 35668:case 35672:return Mq;case 35669:case 35673:return Cq;case 5125:return zq;case 36294:return Pq;case 36295:return Iq;case 36296:return Aq;case 35678:case 36198:case 36298:case 36306:case 35682:return wq;case 35679:case 36299:case 36307:return Tq;case 35680:case 36300:case 36308:case 36293:return _q;case 36289:case 36303:case 36311:case 36292:return Sq}}class NX{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=Eq(Q.type)}}class EX{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=jq(Q.type)}}class qX{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,K=W.length;Z!==K;++Z){let H=W[Z];H.setValue(J,Q[H.id],$)}}}var UK=/(\w+)(\])?(\[|\.)?/g;function sY(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function yq(J,Q,$){let W=J.name,Z=W.length;UK.lastIndex=0;while(!0){let K=UK.exec(W),H=UK.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===Z){sY($,U===void 0?new NX(Y,J,Q):new EX(Y,J,Q));break}else{let E=$.map[Y];if(E===void 0)E=new qX(Y),sY($,E);$=E}}}class NQ{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);yq(H,Y,this)}let W=[],Z=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(K);else Z.push(K);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,K=Q.length;Z!==K;++Z){let H=Q[Z],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let K=J[W];if(K.id in Q)$.push(K)}return $}}function iY(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var vq=37297,fq=0;function hq(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=Z;H<K;H++){let Y=H+1;W.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return W.join(`
`)}var oY=new c0;function bq(J){r0._getMatrix(oY,r0.workingColorSpace,J);let Q=`mat3( ${oY.elements.map(($)=>$.toFixed(4))} )`;switch(r0.getTransfer(J)){case AZ:return[Q,"LinearTransferOETF"];case kJ:return[Q,"sRGBTransferOETF"];default:return T0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function aY(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(W&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+hq(J.getShaderSource(Q),Y)}else return K}function xq(J,Q){let $=bq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var gq={[hW]:"Linear",[bW]:"Reinhard",[xW]:"Cineon",[g6]:"ACESFilmic",[pW]:"AgX",[lW]:"Neutral",[gW]:"Custom"};function pq(J,Q){let $=gq[Q];if($===void 0)return T0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var x$=new S;function lq(){r0.getLuminanceCoefficients(x$);let J=x$.x.toFixed(4),Q=x$.y.toFixed(4),$=x$.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function mq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(GQ).join(`
`)}function dq(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function uq(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let K=J.getActiveAttrib(Q,Z),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function GQ(J){return J!==""}function rY(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function tY(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var cq=/^[ \t]*#include +<([\w\d./]+)>/gm;function EK(J){return J.replace(cq,sq)}var nq=new Map;function sq(J,Q){let $=o0[Q];if($===void 0){let W=nq.get(Q);if(W!==void 0)$=o0[W],T0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,W);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return EK($)}var iq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eY(J){return J.replace(iq,oq)}function oq(J,Q,$,W){let Z="";for(let K=parseInt(Q);K<parseInt($);K++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return Z}function JX(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var aq={[b6]:"SHADOWMAP_TYPE_PCF",[c7]:"SHADOWMAP_TYPE_VSM"};function rq(J){return aq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tq={[s7]:"ENVMAP_TYPE_CUBE",[$7]:"ENVMAP_TYPE_CUBE",[p6]:"ENVMAP_TYPE_CUBE_UV"};function eq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return tq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var J1={[$7]:"ENVMAP_MODE_REFRACTION"};function Q1(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return J1[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $1={[WY]:"ENVMAP_BLENDING_MULTIPLY",[ZY]:"ENVMAP_BLENDING_MIX",[KY]:"ENVMAP_BLENDING_ADD"};function W1(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return $1[J.combine]||"ENVMAP_BLENDING_NONE"}function Z1(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,W=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:W,maxMip:$}}function K1(J,Q,$,W){let Z=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=rq($),U=eq($),G=Q1($),E=W1($),N=Z1($),q=mq($),F=dq(K),B=Z.createProgram(),R,O,P=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(R=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,F].filter(GQ).join(`
`),R.length>0)R+=`
`;if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,F].filter(GQ).join(`
`),O.length>0)O+=`
`}else R=[JX($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,F,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(GQ).join(`
`),O=[JX($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,F,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+E:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==b9?"#define TONE_MAPPING":"",$.toneMapping!==b9?o0.tonemapping_pars_fragment:"",$.toneMapping!==b9?pq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",o0.colorspace_pars_fragment,xq("linearToOutputTexel",$.outputColorSpace),lq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(GQ).join(`
`);if(H=EK(H),H=rY(H,$),H=tY(H,$),Y=EK(Y),Y=rY(Y,$),Y=tY(Y,$),H=eY(H),Y=eY(Y),$.isRawShaderMaterial!==!0)P=`#version 300 es
`,R=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,O=["#define varying in",$.glslVersion===wZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===wZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let k=P+R+H,L=P+O+Y,z=iY(Z,Z.VERTEX_SHADER,k),w=iY(Z,Z.FRAGMENT_SHADER,L);if(Z.attachShader(B,z),Z.attachShader(B,w),$.index0AttributeName!==void 0)Z.bindAttribLocation(B,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)Z.bindAttribLocation(B,0,"position");Z.linkProgram(B);function _(h){if(J.debug.checkShaderErrors){let p=Z.getProgramInfoLog(B)||"",e=Z.getShaderInfoLog(z)||"",j=Z.getShaderInfoLog(w)||"",n=p.trim(),$0=e.trim(),u=j.trim(),E0=!0,t=!0;if(Z.getProgramParameter(B,Z.LINK_STATUS)===!1)if(E0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,B,z,w);else{let W0=aY(Z,z,"vertex"),X0=aY(Z,w,"fragment");m0("WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(B,Z.VALIDATE_STATUS)+`

Material Name: `+h.name+`
Material Type: `+h.type+`

Program Info Log: `+n+`
`+W0+`
`+X0)}else if(n!=="")T0("WebGLProgram: Program Info Log:",n);else if($0===""||u==="")t=!1;if(t)h.diagnostics={runnable:E0,programLog:n,vertexShader:{log:$0,prefix:R},fragmentShader:{log:u,prefix:O}}}Z.deleteShader(z),Z.deleteShader(w),D=new NQ(Z,B),A=uq(Z,B)}let D;this.getUniforms=function(){if(D===void 0)_(this);return D};let A;this.getAttributes=function(){if(A===void 0)_(this);return A};let d=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(d===!1)d=Z.getProgramParameter(B,vq);return d},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(B),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=fq++,this.cacheKey=Q,this.usedTimes=1,this.program=B,this.vertexShader=z,this.fragmentShader=w,this}var H1=0;class FX{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let W=this._getShaderCacheForMaterial(J);if(W.has(Q)===!1)W.add(Q),Q.usedTimes++;if(W.has($)===!1)W.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new OX(J),Q.set(J,$);return $}}class OX{constructor(J){this.id=H1++,this.code=J,this.usedTimes=0}}function Y1(J){return J===H7||J===U$||J===G$}function X1(J,Q,$,W,Z,K){let H=new O$,Y=new FX,X=new Set,U=[],G=new Map,E=W.logarithmicDepthBuffer,N=W.precision,q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function F(D){if(X.add(D),D===0)return"uv";return`uv${D}`}function B(D,A,d,h,p,e){let j=h.fog,n=p.geometry,$0=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?h.environment:null,u=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,E0=Q.get(D.envMap||$0,u),t=!!E0&&E0.mapping===p6?E0.image.height:null,W0=q[D.type];if(D.precision!==null){if(N=W.getMaxPrecision(D.precision),N!==D.precision)T0("WebGLProgram.getParameters:",D.precision,"not supported, using",N,"instead.")}let X0=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,h0=X0!==void 0?X0.length:0,_0=0;if(n.morphAttributes.position!==void 0)_0=1;if(n.morphAttributes.normal!==void 0)_0=2;if(n.morphAttributes.color!==void 0)_0=3;let RJ,l0,a,N0;if(W0){let GJ=t9[W0];RJ=GJ.vertexShader,l0=GJ.fragmentShader}else{RJ=D.vertexShader,l0=D.fragmentShader;let GJ=Y.getVertexShaderStage(D),KJ=Y.getFragmentShaderStage(D);Y.update(D,GJ,KJ),a=GJ.id,N0=KJ.id}let O0=J.getRenderTarget(),f0=J.state.buffers.depth.getReversed(),j0=p.isInstancedMesh===!0,S0=p.isBatchedMesh===!0,zJ=!!D.map,a0=!!D.matcap,e0=!!E0,XJ=!!D.aoMap,$J=!!D.lightMap,yJ=!!D.bumpMap&&D.wireframe===!1,LJ=!!D.normalMap,sJ=!!D.displacementMap,AJ=!!D.emissiveMap,PJ=!!D.metalnessMap,b=!!D.roughnessMap,wJ=D.anisotropy>0,n0=D.clearcoat>0,VJ=D.dispersion>0,I=D.retroreflectivity>0,M=D.iridescence>0,y=D.sheen>0,m=D.transmission>0,H0=wJ&&!!D.anisotropyMap,L0=n0&&!!D.clearcoatMap,D0=n0&&!!D.clearcoatNormalMap,i=n0&&!!D.clearcoatRoughnessMap,J0=M&&!!D.iridescenceMap,C0=M&&!!D.iridescenceThicknessMap,w0=y&&!!D.sheenColorMap,M0=y&&!!D.sheenRoughnessMap,q0=!!D.specularMap,y0=!!D.specularColorMap,b0=!!D.specularIntensityMap,HJ=m&&!!D.transmissionMap,x=m&&!!D.thicknessMap,V0=!!D.gradientMap,r=!!D.alphaMap,k0=D.alphaTest>0,I0=!!D.alphaHash,Y0=!!D.extensions,z0=b9;if(D.toneMapped){if(O0===null||O0.isXRRenderTarget===!0)z0=J.toneMapping}let d0={shaderID:W0,shaderType:D.type,shaderName:D.name,vertexShader:RJ,fragmentShader:l0,defines:D.defines,customVertexShaderID:a,customFragmentShaderID:N0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:N,batching:S0,batchingColor:S0&&p._colorsTexture!==null,instancing:j0,instancingColor:j0&&p.instanceColor!==null,instancingMorph:j0&&p.morphTexture!==null,outputColorSpace:O0===null?J.outputColorSpace:O0.isXRRenderTarget===!0?O0.texture.colorSpace:r0.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:zJ,matcap:a0,envMap:e0,envMapMode:e0&&E0.mapping,envMapCubeUVHeight:t,aoMap:XJ,lightMap:$J,bumpMap:yJ,normalMap:LJ,displacementMap:sJ,emissiveMap:AJ,normalMapObjectSpace:LJ&&D.normalMapType===qY,normalMapTangentSpace:LJ&&D.normalMapType===IZ,packedNormalMap:LJ&&D.normalMapType===IZ&&Y1(D.normalMap.format),metalnessMap:PJ,roughnessMap:b,anisotropy:wJ,anisotropyMap:H0,clearcoat:n0,clearcoatMap:L0,clearcoatNormalMap:D0,clearcoatRoughnessMap:i,dispersion:VJ,retroreflection:I,iridescence:M,iridescenceMap:J0,iridescenceThicknessMap:C0,sheen:y,sheenColorMap:w0,sheenRoughnessMap:M0,specularMap:q0,specularColorMap:y0,specularIntensityMap:b0,transmission:m,transmissionMap:HJ,thicknessMap:x,gradientMap:V0,opaque:D.transparent===!1&&D.blending===x6&&D.alphaToCoverage===!1,alphaMap:r,alphaTest:k0,alphaHash:I0,combine:D.combine,mapUv:zJ&&F(D.map.channel),aoMapUv:XJ&&F(D.aoMap.channel),lightMapUv:$J&&F(D.lightMap.channel),bumpMapUv:yJ&&F(D.bumpMap.channel),normalMapUv:LJ&&F(D.normalMap.channel),displacementMapUv:sJ&&F(D.displacementMap.channel),emissiveMapUv:AJ&&F(D.emissiveMap.channel),metalnessMapUv:PJ&&F(D.metalnessMap.channel),roughnessMapUv:b&&F(D.roughnessMap.channel),anisotropyMapUv:H0&&F(D.anisotropyMap.channel),clearcoatMapUv:L0&&F(D.clearcoatMap.channel),clearcoatNormalMapUv:D0&&F(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:i&&F(D.clearcoatRoughnessMap.channel),iridescenceMapUv:J0&&F(D.iridescenceMap.channel),iridescenceThicknessMapUv:C0&&F(D.iridescenceThicknessMap.channel),sheenColorMapUv:w0&&F(D.sheenColorMap.channel),sheenRoughnessMapUv:M0&&F(D.sheenRoughnessMap.channel),specularMapUv:q0&&F(D.specularMap.channel),specularColorMapUv:y0&&F(D.specularColorMap.channel),specularIntensityMapUv:b0&&F(D.specularIntensityMap.channel),transmissionMapUv:HJ&&F(D.transmissionMap.channel),thicknessMapUv:x&&F(D.thicknessMap.channel),alphaMapUv:r&&F(D.alphaMap.channel),vertexTangents:!!n.attributes.tangent&&(LJ||wJ),vertexNormals:!!n.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!n.attributes.uv&&(zJ||r),fog:!!j,useFog:D.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||n.attributes.normal===void 0&&LJ===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:f0,skinning:p.isSkinnedMesh===!0,hasPositionAttribute:n.attributes.position!==void 0,morphTargets:n.morphAttributes.position!==void 0,morphNormals:n.morphAttributes.normal!==void 0,morphColors:n.morphAttributes.color!==void 0,morphTargetsCount:h0,morphTextureStride:_0,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:e.length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&d.length>0,shadowMapType:J.shadowMap.type,toneMapping:z0,decodeVideoTexture:zJ&&D.map.isVideoTexture===!0&&r0.getTransfer(D.map.colorSpace)===kJ,decodeVideoTextureEmissive:AJ&&D.emissiveMap.isVideoTexture===!0&&r0.getTransfer(D.emissiveMap.colorSpace)===kJ,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===mJ,flipSided:D.side===tJ,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Y0&&D.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y0&&D.extensions.multiDraw===!0||S0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return d0.vertexUv1s=X.has(1),d0.vertexUv2s=X.has(2),d0.vertexUv3s=X.has(3),X.clear(),d0}function R(D){let A=[];if(D.shaderID)A.push(D.shaderID);else A.push(D.customVertexShaderID),A.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let d in D.defines)A.push(d),A.push(D.defines[d]);if(D.isRawShaderMaterial===!1)O(A,D),P(A,D),A.push(J.outputColorSpace);return A.push(D.customProgramCacheKey),A.join()}function O(D,A){D.push(A.precision),D.push(A.outputColorSpace),D.push(A.envMapMode),D.push(A.envMapCubeUVHeight),D.push(A.mapUv),D.push(A.alphaMapUv),D.push(A.lightMapUv),D.push(A.aoMapUv),D.push(A.bumpMapUv),D.push(A.normalMapUv),D.push(A.displacementMapUv),D.push(A.emissiveMapUv),D.push(A.metalnessMapUv),D.push(A.roughnessMapUv),D.push(A.anisotropyMapUv),D.push(A.clearcoatMapUv),D.push(A.clearcoatNormalMapUv),D.push(A.clearcoatRoughnessMapUv),D.push(A.iridescenceMapUv),D.push(A.iridescenceThicknessMapUv),D.push(A.sheenColorMapUv),D.push(A.sheenRoughnessMapUv),D.push(A.specularMapUv),D.push(A.specularColorMapUv),D.push(A.specularIntensityMapUv),D.push(A.transmissionMapUv),D.push(A.thicknessMapUv),D.push(A.combine),D.push(A.fogExp2),D.push(A.sizeAttenuation),D.push(A.morphTargetsCount),D.push(A.morphAttributeCount),D.push(A.numSunLights),D.push(A.numDirLights),D.push(A.numPointLights),D.push(A.numSpotLights),D.push(A.numSpotLightMaps),D.push(A.numHemiLights),D.push(A.numRectAreaLights),D.push(A.numSunLightShadows),D.push(A.numDirLightShadows),D.push(A.numPointLightShadows),D.push(A.numSpotLightShadows),D.push(A.numSpotLightShadowsWithMaps),D.push(A.numLightProbes),D.push(A.shadowMapType),D.push(A.toneMapping),D.push(A.numClippingPlanes),D.push(A.numClipIntersection),D.push(A.depthPacking)}function P(D,A){if(H.disableAll(),A.instancing)H.enable(0);if(A.instancingColor)H.enable(1);if(A.instancingMorph)H.enable(2);if(A.matcap)H.enable(3);if(A.envMap)H.enable(4);if(A.normalMapObjectSpace)H.enable(5);if(A.normalMapTangentSpace)H.enable(6);if(A.clearcoat)H.enable(7);if(A.iridescence)H.enable(8);if(A.alphaTest)H.enable(9);if(A.vertexColors)H.enable(10);if(A.vertexAlphas)H.enable(11);if(A.vertexUv1s)H.enable(12);if(A.vertexUv2s)H.enable(13);if(A.vertexUv3s)H.enable(14);if(A.vertexTangents)H.enable(15);if(A.anisotropy)H.enable(16);if(A.alphaHash)H.enable(17);if(A.batching)H.enable(18);if(A.dispersion)H.enable(19);if(A.retroreflection)H.enable(24);if(A.batchingColor)H.enable(20);if(A.gradientMap)H.enable(21);if(A.packedNormalMap)H.enable(22);if(A.vertexNormals)H.enable(23);if(D.push(H.mask),H.disableAll(),A.fog)H.enable(0);if(A.useFog)H.enable(1);if(A.flatShading)H.enable(2);if(A.logarithmicDepthBuffer)H.enable(3);if(A.reversedDepthBuffer)H.enable(4);if(A.skinning)H.enable(5);if(A.morphTargets)H.enable(6);if(A.morphNormals)H.enable(7);if(A.morphColors)H.enable(8);if(A.premultipliedAlpha)H.enable(9);if(A.shadowMapEnabled)H.enable(10);if(A.doubleSided)H.enable(11);if(A.flipSided)H.enable(12);if(A.useDepthPacking)H.enable(13);if(A.dithering)H.enable(14);if(A.transmission)H.enable(15);if(A.sheen)H.enable(16);if(A.opaque)H.enable(17);if(A.pointsUvs)H.enable(18);if(A.decodeVideoTexture)H.enable(19);if(A.decodeVideoTextureEmissive)H.enable(20);if(A.alphaToCoverage)H.enable(21);if(A.numLightProbeGrids>0)H.enable(22);if(A.hasPositionAttribute)H.enable(23);D.push(H.mask)}function k(D){let A=q[D.type],d;if(A){let h=t9[A];d=_Y.clone(h.uniforms)}else d=D.uniforms;return d}function L(D,A){let d=G.get(A);if(d!==void 0)++d.usedTimes;else d=new K1(J,A,D,Z),U.push(d),G.set(A,d);return d}function z(D){if(--D.usedTimes===0){let A=U.indexOf(D);U[A]=U[U.length-1],U.pop(),G.delete(D.cacheKey),D.destroy()}}function w(D){Y.remove(D)}function _(){Y.dispose()}return{getParameters:B,getProgramCacheKey:R,getUniforms:k,acquireProgram:L,releaseProgram:z,releaseShaderCache:w,programs:U,dispose:_}}function U1(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function W(H){J.delete(H)}function Z(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:K}}function G1(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function QX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function $X(){let J=[],Q=0,$=[],W=[],Z=[];function K(){Q=0,$.length=0,W.length=0,Z.length=0}function H(N){let q=0;if(N.isInstancedMesh)q+=2;if(N.isSkinnedMesh)q+=1;return q}function Y(N,q,F,B,R,O){let P=J[Q];if(P===void 0)P={id:N.id,object:N,geometry:q,material:F,materialVariant:H(N),groupOrder:B,renderOrder:N.renderOrder,z:R,group:O},J[Q]=P;else P.id=N.id,P.object=N,P.geometry=q,P.material=F,P.materialVariant=H(N),P.groupOrder=B,P.renderOrder=N.renderOrder,P.z=R,P.group=O;return Q++,P}function X(N,q,F,B,R,O,P){if(P.reversedDepth===!0)R=-R;let k=Y(N,q,F,B,R,O);if(F.transmission>0)W.push(k);else if(F.transparent===!0)Z.push(k);else $.push(k)}function U(N,q,F,B,R,O){let P=Y(N,q,F,B,R,O);if(F.transmission>0)W.unshift(P);else if(F.transparent===!0)Z.unshift(P);else $.unshift(P)}function G(N,q){if($.length>1)$.sort(N||G1);if(W.length>1)W.sort(q||QX);if(Z.length>1)Z.sort(q||QX)}function E(){for(let N=Q,q=J.length;N<q;N++){let F=J[N];if(F.id===null)break;F.id=null,F.object=null,F.geometry=null,F.material=null,F.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:K,push:X,unshift:U,finish:E,sort:G}}function N1(){let J=new WeakMap;function Q(W,Z){let K=J.get(W),H;if(K===void 0)H=new $X,J.set(W,[H]);else if(Z>=K.length)H=new $X,K.push(H);else H=K[Z];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function E1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new S,color:new v0};break;case"SpotLight":$={position:new S,direction:new S,color:new v0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new S,color:new v0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new S,skyColor:new v0,groundColor:new v0};break;case"RectAreaLight":$={color:new v0,position:new S,halfWidth:new S,halfHeight:new S};break}return J[Q.id]=$,$}}}function q1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var F1=0;function O1(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function R1(J){let Q=new E1,$=q1(),W={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new S);let Z=new S,K=new g0,H=new g0;function Y(U){let G=0,E=0,N=0;for(let p=0;p<9;p++)W.probe[p].set(0,0,0);let q=0,F=0,B=0,R=0,O=0,P=0,k=0,L=0,z=0,w=0,_=0,D=0,A=0,d=0;U.sort(O1);for(let p=0,e=U.length;p<e;p++){let j=U[p],n=j.color,$0=j.intensity,u=j.distance,E0=null;if(j.shadow&&j.shadow.map)if(j.shadow.map.texture.format===H7)E0=j.shadow.map.texture;else E0=j.shadow.map.depthTexture||j.shadow.map.texture;if(j.isAmbientLight)G+=n.r*$0,E+=n.g*$0,N+=n.b*$0;else if(j.isLightProbe){for(let t=0;t<9;t++)W.probe[t].addScaledVector(j.sh.coefficients[t],$0);d++}else if(j.isSunLight){let t=Q.get(j);if(t.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let W0=j.shadow,X0=$.get(j);X0.shadowIntensity=W0.intensity,X0.shadowBias=W0.bias,X0.shadowNormalBias=W0.normalBias,X0.shadowRadius=W0.radius,X0.shadowMapSize.copy(W0.mapSize).multiply(W0.getFrameExtents()),W.sunShadow[F]=X0,W.sunShadowMap[F]=E0;let h0=W0.getViewportCount();for(let _0=0;_0<h0;_0++)W.sunShadowMatrix[B+_0]=W0.getMatrix(_0),W.sunShadowCascade[B+_0]=W0._cascadeData[_0];B+=h0,F++}W.sun[q]=t,q++}else if(j.isDirectionalLight){let t=Q.get(j);if(t.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let W0=j.shadow,X0=$.get(j);X0.shadowIntensity=W0.intensity,X0.shadowBias=W0.bias,X0.shadowNormalBias=W0.normalBias,X0.shadowRadius=W0.radius,X0.shadowMapSize=W0.mapSize,W.directionalShadow[R]=X0,W.directionalShadowMap[R]=E0,W.directionalShadowMatrix[R]=j.shadow.matrix,z++}W.directional[R]=t,R++}else if(j.isSpotLight){let t=Q.get(j);t.position.setFromMatrixPosition(j.matrixWorld),t.color.copy(n).multiplyScalar($0),t.distance=u,t.coneCos=Math.cos(j.angle),t.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),t.decay=j.decay,W.spot[P]=t;let W0=j.shadow;if(j.map){if(W.spotLightMap[D]=j.map,D++,W0.updateMatrices(j),j.castShadow)A++}if(W.spotLightMatrix[P]=W0.matrix,j.castShadow){let X0=$.get(j);X0.shadowIntensity=W0.intensity,X0.shadowBias=W0.bias,X0.shadowNormalBias=W0.normalBias,X0.shadowRadius=W0.radius,X0.shadowMapSize=W0.mapSize,W.spotShadow[P]=X0,W.spotShadowMap[P]=E0,_++}P++}else if(j.isRectAreaLight){let t=Q.get(j);t.color.copy(n).multiplyScalar($0),t.halfWidth.set(j.width*0.5,0,0),t.halfHeight.set(0,j.height*0.5,0),W.rectArea[k]=t,k++}else if(j.isPointLight){let t=Q.get(j);if(t.color.copy(j.color).multiplyScalar(j.intensity),t.distance=j.distance,t.decay=j.decay,j.castShadow){let W0=j.shadow,X0=$.get(j);X0.shadowIntensity=W0.intensity,X0.shadowBias=W0.bias,X0.shadowNormalBias=W0.normalBias,X0.shadowRadius=W0.radius,X0.shadowMapSize=W0.mapSize,X0.shadowCameraNear=W0.camera.near,X0.shadowCameraFar=W0.camera.far,W.pointShadow[O]=X0,W.pointShadowMap[O]=E0,W.pointShadowMatrix[O]=j.shadow.matrix,w++}W.point[O]=t,O++}else if(j.isHemisphereLight){let t=Q.get(j);t.skyColor.copy(j.color).multiplyScalar($0),t.groundColor.copy(j.groundColor).multiplyScalar($0),W.hemi[L]=t,L++}}if(k>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=P0.LTC_FLOAT_1,W.rectAreaLTC2=P0.LTC_FLOAT_2;else W.rectAreaLTC1=P0.LTC_HALF_1,W.rectAreaLTC2=P0.LTC_HALF_2;W.ambient[0]=G,W.ambient[1]=E,W.ambient[2]=N;let h=W.hash;if(h.sunLength!==q||h.directionalLength!==R||h.pointLength!==O||h.spotLength!==P||h.rectAreaLength!==k||h.hemiLength!==L||h.numSunShadows!==F||h.numDirectionalShadows!==z||h.numPointShadows!==w||h.numSpotShadows!==_||h.numSpotMaps!==D||h.numLightProbes!==d)W.sun.length=q,W.directional.length=R,W.spot.length=P,W.rectArea.length=k,W.point.length=O,W.hemi.length=L,W.sunShadow.length=F,W.sunShadowMap.length=F,W.sunShadowMatrix.length=B,W.sunShadowCascade.length=B,W.directionalShadow.length=z,W.directionalShadowMap.length=z,W.directionalShadowMatrix.length=z,W.pointShadow.length=w,W.pointShadowMap.length=w,W.pointShadowMatrix.length=w,W.spotShadow.length=_,W.spotShadowMap.length=_,W.spotLightMatrix.length=_+D-A,W.spotLightMap.length=D,W.numSpotLightShadowsWithMaps=A,W.numLightProbes=d,h.sunLength=q,h.directionalLength=R,h.pointLength=O,h.spotLength=P,h.rectAreaLength=k,h.hemiLength=L,h.numSunShadows=F,h.numDirectionalShadows=z,h.numPointShadows=w,h.numSpotShadows=_,h.numSpotMaps=D,h.numLightProbes=d,W.version=F1++}function X(U,G){let E=0,N=0,q=0,F=0,B=0,R=0,O=G.matrixWorldInverse;for(let P=0,k=U.length;P<k;P++){let L=U[P];if(L.isSunLight){let z=W.sun[E];z.direction.setFromMatrixPosition(L.matrixWorld),z.direction.transformDirection(O),E++}else if(L.isDirectionalLight){let z=W.directional[N];z.direction.setFromMatrixPosition(L.matrixWorld),Z.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(Z),z.direction.transformDirection(O),N++}else if(L.isSpotLight){let z=W.spot[F];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(O),z.direction.setFromMatrixPosition(L.matrixWorld),Z.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(Z),z.direction.transformDirection(O),F++}else if(L.isRectAreaLight){let z=W.rectArea[B];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(O),H.identity(),K.copy(L.matrixWorld),K.premultiply(O),H.extractRotation(K),z.halfWidth.set(L.width*0.5,0,0),z.halfHeight.set(0,L.height*0.5,0),z.halfWidth.applyMatrix4(H),z.halfHeight.applyMatrix4(H),B++}else if(L.isPointLight){let z=W.point[q];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(O),q++}else if(L.isHemisphereLight){let z=W.hemi[R];z.direction.setFromMatrixPosition(L.matrixWorld),z.direction.transformDirection(O),R++}}}return{setup:Y,setupView:X,state:W}}function WX(J){let Q=new R1(J),$=[],W=[],Z=[];function K(N){E.camera=N,$.length=0,W.length=0,Z.length=0}function H(N){$.push(N)}function Y(N){W.push(N)}function X(N){Z.push(N)}function U(){Q.setup($)}function G(N){Q.setupView($,N)}let E={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:E,setupLights:U,setupLightsView:G,pushLight:H,pushShadow:Y,pushLightProbeGrid:X}}function L1(J){let Q=new WeakMap;function $(Z,K=0){let H=Q.get(Z),Y;if(H===void 0)Y=new WX(J),Q.set(Z,[Y]);else if(K>=H.length)Y=new WX(J),H.push(Y);else Y=H[K];return Y}function W(){Q=new WeakMap}return{get:$,dispose:W}}var V1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B1=`uniform sampler2D shadow_pass;
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
}`,k1=[new S(1,0,0),new S(-1,0,0),new S(0,1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1)],D1=[new S(0,-1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1),new S(0,-1,0),new S(0,-1,0)],ZX=new g0,UQ=new S,GK=new S;function M1(J,Q,$){let W=new r6,Z=new U0,K=new U0,H=new FJ,Y=new dZ,X=new uZ,U={},G=$.maxTextureSize,E={[j8]:tJ,[tJ]:j8,[mJ]:mJ},N=new P9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U0},radius:{value:4}},vertexShader:V1,fragmentShader:B1}),q=N.clone();q.defines.HORIZONTAL_PASS=1;let F=new CJ;F.setAttribute("position",new bJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new A0(F,N),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b6;let O=this.type;this.render=function(w,_,D){if(R.enabled===!1)return;if(R.autoUpdate===!1&&R.needsUpdate===!1)return;if(w.length===0)return;if(this.type===J$)T0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=b6;let A=J.getRenderTarget(),d=J.getActiveCubeFace(),h=J.getActiveMipmapLevel(),p=J.state;if(p.setBlending(s9),p.buffers.depth.getReversed()===!0)p.buffers.color.setClear(0,0,0,0);else p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0),p.setScissorTest(!1);let e=O!==this.type;if(e)_.traverse(function(j){if(j.material)if(Array.isArray(j.material))j.material.forEach((n)=>n.needsUpdate=!0);else j.material.needsUpdate=!0});for(let j=0,n=w.length;j<n;j++){let $0=w[j],u=$0.shadow;if(u===void 0){T0("WebGLShadowMap:",$0,"has no shadow.");continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;Z.copy(u.mapSize);let E0=u.getFrameExtents();if(Z.multiply(E0),K.copy(u.mapSize),Z.x>G||Z.y>G){if(Z.x>G)K.x=Math.floor(G/E0.x),Z.x=K.x*E0.x,u.mapSize.x=K.x;if(Z.y>G)K.y=Math.floor(G/E0.y),Z.y=K.y*E0.y,u.mapSize.y=K.y}let t=J.state.buffers.depth.getReversed();if(u.camera._reversedDepth=t,u.map===null||e===!0){if(u.map!==null){if(u.map.depthTexture!==null)u.map.depthTexture.dispose(),u.map.depthTexture=null;u.map.dispose()}if(this.type===c7){if($0.isPointLight){T0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}u.map=new E9(Z.x,Z.y,{format:H7,type:o9,minFilter:dJ,magFilter:dJ,generateMipmaps:!1}),u.map.texture.name=$0.name+".shadowMap",u.map.depthTexture=new X7(Z.x,Z.y,G8),u.map.depthTexture.name=$0.name+".shadowMapDepth",u.map.depthTexture.format=Z7,u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=x9,u.map.depthTexture.magFilter=x9}else{if($0.isPointLight)u.map=new qK(Z.x),u.map.depthTexture=new vZ(Z.x,v8);else u.map=new E9(Z.x,Z.y),u.map.depthTexture=new X7(Z.x,Z.y,v8);if(u.map.depthTexture.name=$0.name+".shadowMap",u.map.depthTexture.format=Z7,this.type===b6)u.map.depthTexture.compareFunction=t?q$:E$,u.map.depthTexture.minFilter=dJ,u.map.depthTexture.magFilter=dJ;else u.map.depthTexture.compareFunction=null,u.map.depthTexture.minFilter=x9,u.map.depthTexture.magFilter=x9}u.camera.updateProjectionMatrix()}if(u.map.isWebGLCubeRenderTarget!==!0&&(u.map.width!==Z.x||u.map.height!==Z.y))u.map.setSize(Z.x,Z.y);let W0=u.map.isWebGLCubeRenderTarget?6:u.getViewportCount();if($0.isPointLight!==!0)u.updateMatrices($0,D);for(let X0=0;X0<W0;X0++){let h0=u.getCamera(X0);if($0.isPointLight){let{camera:_0,matrix:RJ}=u,l0=$0.distance||_0.far;if(l0!==_0.far)_0.far=l0,_0.updateProjectionMatrix();UQ.setFromMatrixPosition($0.matrixWorld),_0.position.copy(UQ),GK.copy(_0.position),GK.add(k1[X0]),_0.up.copy(D1[X0]),_0.lookAt(GK),_0.updateMatrixWorld(),RJ.makeTranslation(-UQ.x,-UQ.y,-UQ.z),ZX.multiplyMatrices(_0.projectionMatrix,_0.matrixWorldInverse),u._frustum.setFromProjectionMatrix(ZX,_0.coordinateSystem,_0.reversedDepth)}if(u.map.isWebGLCubeRenderTarget)J.setRenderTarget(u.map,X0),J.clear();else{if(X0===0)J.setRenderTarget(u.map),J.clear();let _0=u.getViewport(X0);H.set(K.x*_0.x,K.y*_0.y,K.x*_0.z,K.y*_0.w),p.viewport(H)}W=u.getFrustum(X0),L(_,D,h0,$0,this.type)}if(u.isPointLightShadow!==!0&&this.type===c7)P(u,D);u.needsUpdate=!1}O=this.type,R.needsUpdate=!1,J.setRenderTarget(A,d,h)};function P(w,_){let D=Q.update(B);if(N.defines.VSM_SAMPLES!==w.blurSamples)N.defines.VSM_SAMPLES=w.blurSamples,q.defines.VSM_SAMPLES=w.blurSamples,N.needsUpdate=!0,q.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new E9(Z.x,Z.y,{format:H7,type:o9});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);N.uniforms.shadow_pass.value=w.map.depthTexture,N.uniforms.resolution.value.set(w.map.width,w.map.height),N.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(_,null,D,N,B,null),q.uniforms.shadow_pass.value=w.mapPass.texture,q.uniforms.resolution.value.set(w.map.width,w.map.height),q.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(_,null,D,q,B,null)}function k(w,_,D,A){let d=null,h=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(h!==void 0)d=h;else if(d=D.isPointLight===!0?X:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let p=d.uuid,e=_.uuid,j=U[p];if(j===void 0)j={},U[p]=j;let n=j[e];if(n===void 0)n=d.clone(),j[e]=n,_.addEventListener("dispose",z);d=n}if(d.visible=_.visible,d.wireframe=_.wireframe,A===c7)d.side=_.shadowSide!==null?_.shadowSide:_.side;else d.side=_.shadowSide!==null?_.shadowSide:E[_.side];if(d.alphaMap=_.alphaMap,d.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,d.map=_.map,d.clipShadows=_.clipShadows,d.clippingPlanes=_.clippingPlanes,d.clipIntersection=_.clipIntersection,d.displacementMap=_.displacementMap,d.displacementScale=_.displacementScale,d.displacementBias=_.displacementBias,d.wireframeLinewidth=_.wireframeLinewidth,d.linewidth=_.linewidth,D.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let p=J.properties.get(d);p.light=D}return d}function L(w,_,D,A,d){if(w.visible===!1)return;if(w.layers.test(_.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&d===c7)&&(!w.frustumCulled||w.intersectsFrustum(W))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let e=Q.update(w),j=w.material;if(Array.isArray(j)){let n=e.groups;for(let $0=0,u=n.length;$0<u;$0++){let E0=n[$0],t=j[E0.materialIndex];if(t&&t.visible){let W0=k(w,t,A,d);w.onBeforeShadow(J,w,_,D,e,W0,E0),J.renderBufferDirect(D,null,e,W0,w,E0),w.onAfterShadow(J,w,_,D,e,W0,E0)}}}else if(j.visible){let n=k(w,j,A,d);w.onBeforeShadow(J,w,_,D,e,n,null),J.renderBufferDirect(D,null,e,n,w,null),w.onAfterShadow(J,w,_,D,e,n,null)}}}let p=w.children;for(let e=0,j=p.length;e<j;e++)L(p[e],_,D,A,d)}function z(w){w.target.removeEventListener("dispose",z);for(let D in U){let A=U[D],d=w.target.uuid;if(d in A)A[d].dispose(),delete A[d]}}}function C1(J,Q){function $(){let x=!1,V0=new FJ,r=null,k0=new FJ(0,0,0,0);return{setMask:function(I0){if(r!==I0&&!x)J.colorMask(I0,I0,I0,I0),r=I0},setLocked:function(I0){x=I0},setClear:function(I0,Y0,z0,d0,GJ){if(GJ===!0)I0*=d0,Y0*=d0,z0*=d0;if(V0.set(I0,Y0,z0,d0),k0.equals(V0)===!1)J.clearColor(I0,Y0,z0,d0),k0.copy(V0)},reset:function(){x=!1,r=null,k0.set(-1,0,0,0)}}}function W(){let x=!1,V0=!1,r=null,k0=null,I0=null;return{setReversed:function(Y0){if(V0!==Y0){let z0=Q.get("EXT_clip_control");if(Y0)z0.clipControlEXT(z0.LOWER_LEFT_EXT,z0.ZERO_TO_ONE_EXT);else z0.clipControlEXT(z0.LOWER_LEFT_EXT,z0.NEGATIVE_ONE_TO_ONE_EXT);V0=Y0;let d0=I0;I0=null,this.setClear(d0)}},getReversed:function(){return V0},setTest:function(Y0){if(Y0)O0(J.DEPTH_TEST);else f0(J.DEPTH_TEST)},setMask:function(Y0){if(r!==Y0&&!x)J.depthMask(Y0),r=Y0},setFunc:function(Y0){if(V0)Y0=CY[Y0];if(k0!==Y0){switch(Y0){case aH:J.depthFunc(J.NEVER);break;case rH:J.depthFunc(J.ALWAYS);break;case tH:J.depthFunc(J.LESS);break;case fW:J.depthFunc(J.LEQUAL);break;case eH:J.depthFunc(J.EQUAL);break;case JY:J.depthFunc(J.GEQUAL);break;case QY:J.depthFunc(J.GREATER);break;case $Y:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}k0=Y0}},setLocked:function(Y0){x=Y0},setClear:function(Y0){if(I0!==Y0){if(I0=Y0,V0)Y0=1-Y0;J.clearDepth(Y0)}},reset:function(){x=!1,r=null,k0=null,I0=null,V0=!1}}}function Z(){let x=!1,V0=null,r=null,k0=null,I0=null,Y0=null,z0=null,d0=null,GJ=null;return{setTest:function(KJ){if(!x)if(KJ)O0(J.STENCIL_TEST);else f0(J.STENCIL_TEST)},setMask:function(KJ){if(V0!==KJ&&!x)J.stencilMask(KJ),V0=KJ},setFunc:function(KJ,X9,V9){if(r!==KJ||k0!==X9||I0!==V9)J.stencilFunc(KJ,X9,V9),r=KJ,k0=X9,I0=V9},setOp:function(KJ,X9,V9){if(Y0!==KJ||z0!==X9||d0!==V9)J.stencilOp(KJ,X9,V9),Y0=KJ,z0=X9,d0=V9},setLocked:function(KJ){x=KJ},setClear:function(KJ){if(GJ!==KJ)J.clearStencil(KJ),GJ=KJ},reset:function(){x=!1,V0=null,r=null,k0=null,I0=null,Y0=null,z0=null,d0=null,GJ=null}}}let K=new $,H=new W,Y=new Z,X=new WeakMap,U=new WeakMap,G={},E={},N={},q=new WeakMap,F=[],B=null,R=!1,O=null,P=null,k=null,L=null,z=null,w=null,_=null,D=new v0(0,0,0),A=0,d=!1,h=null,p=null,e=null,j=null,n=null,$0=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),u=!1,E0=0,t=J.getParameter(J.VERSION);if(t.indexOf("WebGL")!==-1)E0=parseFloat(/^WebGL (\d)/.exec(t)[1]),u=E0>=1;else if(t.indexOf("OpenGL ES")!==-1)E0=parseFloat(/^OpenGL ES (\d)/.exec(t)[1]),u=E0>=2;let W0=null,X0={},h0=J.getParameter(J.SCISSOR_BOX),_0=J.getParameter(J.VIEWPORT),RJ=new FJ().fromArray(h0),l0=new FJ().fromArray(_0);function a(x,V0,r,k0){let I0=new Uint8Array(4),Y0=J.createTexture();J.bindTexture(x,Y0),J.texParameteri(x,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(x,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let z0=0;z0<r;z0++)if(x===J.TEXTURE_3D||x===J.TEXTURE_2D_ARRAY)J.texImage3D(V0,0,J.RGBA,1,1,k0,0,J.RGBA,J.UNSIGNED_BYTE,I0);else J.texImage2D(V0+z0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,I0);return Y0}let N0={};N0[J.TEXTURE_2D]=a(J.TEXTURE_2D,J.TEXTURE_2D,1),N0[J.TEXTURE_CUBE_MAP]=a(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),N0[J.TEXTURE_2D_ARRAY]=a(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),N0[J.TEXTURE_3D]=a(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),O0(J.DEPTH_TEST),H.setFunc(fW),yJ(!1),LJ(SW),O0(J.CULL_FACE),XJ(s9);function O0(x){if(G[x]!==!0)J.enable(x),G[x]=!0}function f0(x){if(G[x]!==!1)J.disable(x),G[x]=!1}function j0(x,V0){if(N[x]!==V0){if(J.bindFramebuffer(x,V0),N[x]=V0,x===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=V0;if(x===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=V0;return!0}return!1}function S0(x,V0){let r=F,k0=!1;if(x){if(r=q.get(V0),r===void 0)r=[],q.set(V0,r);let I0=x.textures;if(r.length!==I0.length||r[0]!==J.COLOR_ATTACHMENT0){for(let Y0=0,z0=I0.length;Y0<z0;Y0++)r[Y0]=J.COLOR_ATTACHMENT0+Y0;r.length=I0.length,k0=!0}}else if(r[0]!==J.BACK)r[0]=J.BACK,k0=!0;if(k0)J.drawBuffers(r)}function zJ(x){if(B!==x)return J.useProgram(x),B=x,!0;return!1}let a0={[n7]:J.FUNC_ADD,[SH]:J.FUNC_SUBTRACT,[jH]:J.FUNC_REVERSE_SUBTRACT};a0[yH]=J.MIN,a0[vH]=J.MAX;let e0={[fH]:J.ZERO,[hH]:J.ONE,[bH]:J.SRC_COLOR,[gH]:J.SRC_ALPHA,[cH]:J.SRC_ALPHA_SATURATE,[dH]:J.DST_COLOR,[lH]:J.DST_ALPHA,[xH]:J.ONE_MINUS_SRC_COLOR,[pH]:J.ONE_MINUS_SRC_ALPHA,[uH]:J.ONE_MINUS_DST_COLOR,[mH]:J.ONE_MINUS_DST_ALPHA,[nH]:J.CONSTANT_COLOR,[sH]:J.ONE_MINUS_CONSTANT_COLOR,[iH]:J.CONSTANT_ALPHA,[oH]:J.ONE_MINUS_CONSTANT_ALPHA};function XJ(x,V0,r,k0,I0,Y0,z0,d0,GJ,KJ){if(x===s9){if(R===!0)f0(J.BLEND),R=!1;return}if(R===!1)O0(J.BLEND),R=!0;if(x!==_H){if(x!==O||KJ!==d){if(P!==n7||z!==n7)J.blendEquation(J.FUNC_ADD),P=n7,z=n7;if(KJ)switch(x){case x6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case jW:J.blendFunc(J.ONE,J.ONE);break;case yW:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case vW:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:m0("WebGLState: Invalid blending: ",x);break}else switch(x){case x6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case jW:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case yW:m0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vW:m0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:m0("WebGLState: Invalid blending: ",x);break}k=null,L=null,w=null,_=null,D.set(0,0,0),A=0,O=x,d=KJ}return}if(I0=I0||V0,Y0=Y0||r,z0=z0||k0,V0!==P||I0!==z)J.blendEquationSeparate(a0[V0],a0[I0]),P=V0,z=I0;if(r!==k||k0!==L||Y0!==w||z0!==_)J.blendFuncSeparate(e0[r],e0[k0],e0[Y0],e0[z0]),k=r,L=k0,w=Y0,_=z0;if(d0.equals(D)===!1||GJ!==A)J.blendColor(d0.r,d0.g,d0.b,GJ),D.copy(d0),A=GJ;O=x,d=!1}function $J(x,V0){x.side===mJ?f0(J.CULL_FACE):O0(J.CULL_FACE);let r=x.side===tJ;if(V0)r=!r;yJ(r),x.blending===x6&&x.transparent===!1?XJ(s9):XJ(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),H.setFunc(x.depthFunc),H.setTest(x.depthTest),H.setMask(x.depthWrite),K.setMask(x.colorWrite);let k0=x.stencilWrite;if(Y.setTest(k0),k0)Y.setMask(x.stencilWriteMask),Y.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),Y.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass);AJ(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?O0(J.SAMPLE_ALPHA_TO_COVERAGE):f0(J.SAMPLE_ALPHA_TO_COVERAGE)}function yJ(x){if(h!==x){if(x)J.frontFace(J.CW);else J.frontFace(J.CCW);h=x}}function LJ(x){if(x!==wH){if(O0(J.CULL_FACE),x!==p)if(x===SW)J.cullFace(J.BACK);else if(x===TH)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else f0(J.CULL_FACE);p=x}function sJ(x){if(x!==e){if(u)J.lineWidth(x);e=x}}function AJ(x,V0,r){if(x){if(O0(J.POLYGON_OFFSET_FILL),j!==V0||n!==r){if(j=V0,n=r,H.getReversed())V0=-V0;J.polygonOffset(V0,r)}}else f0(J.POLYGON_OFFSET_FILL)}function PJ(x){if(x)O0(J.SCISSOR_TEST);else f0(J.SCISSOR_TEST)}function b(x){if(x===void 0)x=J.TEXTURE0+$0-1;if(W0!==x)J.activeTexture(x),W0=x}function wJ(x,V0,r){if(r===void 0)if(W0===null)r=J.TEXTURE0+$0-1;else r=W0;let k0=X0[r];if(k0===void 0)k0={type:void 0,texture:void 0},X0[r]=k0;if(k0.type!==x||k0.texture!==V0){if(W0!==r)J.activeTexture(r),W0=r;J.bindTexture(x,V0||N0[x]),k0.type=x,k0.texture=V0}}function n0(){let x=X0[W0];if(x!==void 0&&x.type!==void 0)J.bindTexture(x.type,null),x.type=void 0,x.texture=void 0}function VJ(){try{J.compressedTexImage2D(...arguments)}catch(x){m0("WebGLState:",x)}}function I(){try{J.compressedTexImage3D(...arguments)}catch(x){m0("WebGLState:",x)}}function M(){try{J.texSubImage2D(...arguments)}catch(x){m0("WebGLState:",x)}}function y(){try{J.texSubImage3D(...arguments)}catch(x){m0("WebGLState:",x)}}function m(){try{J.compressedTexSubImage2D(...arguments)}catch(x){m0("WebGLState:",x)}}function H0(){try{J.compressedTexSubImage3D(...arguments)}catch(x){m0("WebGLState:",x)}}function L0(){try{J.texStorage2D(...arguments)}catch(x){m0("WebGLState:",x)}}function D0(){try{J.texStorage3D(...arguments)}catch(x){m0("WebGLState:",x)}}function i(){try{J.texImage2D(...arguments)}catch(x){m0("WebGLState:",x)}}function J0(){try{J.texImage3D(...arguments)}catch(x){m0("WebGLState:",x)}}function C0(x){if(E[x]!==void 0)return E[x];else return J.getParameter(x)}function w0(x,V0){if(E[x]!==V0)J.pixelStorei(x,V0),E[x]=V0}function M0(x){if(RJ.equals(x)===!1)J.scissor(x.x,x.y,x.z,x.w),RJ.copy(x)}function q0(x){if(l0.equals(x)===!1)J.viewport(x.x,x.y,x.z,x.w),l0.copy(x)}function y0(x,V0){let r=U.get(V0);if(r===void 0)r=new WeakMap,U.set(V0,r);let k0=r.get(x);if(k0===void 0)k0=J.getUniformBlockIndex(V0,x.name),r.set(x,k0)}function b0(x,V0){let k0=U.get(V0).get(x);if(X.get(V0)!==k0)J.uniformBlockBinding(V0,k0,x.__bindingPointIndex),X.set(V0,k0)}function HJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},E={},W0=null,X0={},N={},q=new WeakMap,F=[],B=null,R=!1,O=null,P=null,k=null,L=null,z=null,w=null,_=null,D=new v0(0,0,0),A=0,d=!1,h=null,p=null,e=null,j=null,n=null,RJ.set(0,0,J.canvas.width,J.canvas.height),l0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:O0,disable:f0,bindFramebuffer:j0,drawBuffers:S0,useProgram:zJ,setBlending:XJ,setMaterial:$J,setFlipSided:yJ,setCullFace:LJ,setLineWidth:sJ,setPolygonOffset:AJ,setScissorTest:PJ,activeTexture:b,bindTexture:wJ,unbindTexture:n0,compressedTexImage2D:VJ,compressedTexImage3D:I,texImage2D:i,texImage3D:J0,pixelStorei:w0,getParameter:C0,updateUBOMapping:y0,uniformBlockBinding:b0,texStorage2D:L0,texStorage3D:D0,texSubImage2D:M,texSubImage3D:y,compressedTexSubImage2D:m,compressedTexSubImage3D:H0,scissor:M0,viewport:q0,reset:HJ}}function z1(J,Q,$,W,Z,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new U0,G=new WeakMap,E=new Set,N,q=new WeakMap,F=!1;try{F=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function B(I,M){return F?new OffscreenCanvas(I,M):l7("canvas")}function R(I,M,y){let m=1,H0=VJ(I);if(H0.width>y||H0.height>y)m=y/Math.max(H0.width,H0.height);if(m<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let L0=Math.floor(m*H0.width),D0=Math.floor(m*H0.height);if(N===void 0)N=B(L0,D0);let i=M?B(L0,D0):N;return i.width=L0,i.height=D0,i.getContext("2d").drawImage(I,0,0,L0,D0),T0("WebGLRenderer: Texture has been resized from ("+H0.width+"x"+H0.height+") to ("+L0+"x"+D0+")."),i}else{if("data"in I)T0("WebGLRenderer: Image in DataTexture is too big ("+H0.width+"x"+H0.height+").");return I}return I}function O(I){return I.generateMipmaps}function P(I){J.generateMipmap(I)}function k(I){if(I.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(I.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(I,M,y,m,H0,L0=!1){if(I!==null){if(J[I]!==void 0)return J[I];T0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let D0;if(m){if(D0=Q.get("EXT_texture_norm16"),!D0)T0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let i=M;if(M===J.RED){if(y===J.FLOAT)i=J.R32F;if(y===J.HALF_FLOAT)i=J.R16F;if(y===J.UNSIGNED_BYTE)i=J.R8;if(y===J.UNSIGNED_SHORT&&D0)i=D0.R16_EXT;if(y===J.SHORT&&D0)i=D0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)i=J.R8UI;if(y===J.UNSIGNED_SHORT)i=J.R16UI;if(y===J.UNSIGNED_INT)i=J.R32UI;if(y===J.BYTE)i=J.R8I;if(y===J.SHORT)i=J.R16I;if(y===J.INT)i=J.R32I}if(M===J.RG){if(y===J.FLOAT)i=J.RG32F;if(y===J.HALF_FLOAT)i=J.RG16F;if(y===J.UNSIGNED_BYTE)i=J.RG8;if(y===J.UNSIGNED_SHORT&&D0)i=D0.RG16_EXT;if(y===J.SHORT&&D0)i=D0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)i=J.RG8UI;if(y===J.UNSIGNED_SHORT)i=J.RG16UI;if(y===J.UNSIGNED_INT)i=J.RG32UI;if(y===J.BYTE)i=J.RG8I;if(y===J.SHORT)i=J.RG16I;if(y===J.INT)i=J.RG32I}if(M===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)i=J.RGB8UI;if(y===J.UNSIGNED_SHORT)i=J.RGB16UI;if(y===J.UNSIGNED_INT)i=J.RGB32UI;if(y===J.BYTE)i=J.RGB8I;if(y===J.SHORT)i=J.RGB16I;if(y===J.INT)i=J.RGB32I}if(M===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)i=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)i=J.RGBA16UI;if(y===J.UNSIGNED_INT)i=J.RGBA32UI;if(y===J.BYTE)i=J.RGBA8I;if(y===J.SHORT)i=J.RGBA16I;if(y===J.INT)i=J.RGBA32I}if(M===J.RGB){if(y===J.UNSIGNED_SHORT&&D0)i=D0.RGB16_EXT;if(y===J.SHORT&&D0)i=D0.RGB16_SNORM_EXT;if(y===J.UNSIGNED_INT_5_9_9_9_REV)i=J.RGB9_E5;if(y===J.UNSIGNED_INT_10F_11F_11F_REV)i=J.R11F_G11F_B10F}if(M===J.RGBA){let J0=L0?AZ:r0.getTransfer(H0);if(y===J.FLOAT)i=J.RGBA32F;if(y===J.HALF_FLOAT)i=J.RGBA16F;if(y===J.UNSIGNED_BYTE)i=J0===kJ?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT&&D0)i=D0.RGBA16_EXT;if(y===J.SHORT&&D0)i=D0.RGBA16_SNORM_EXT;if(y===J.UNSIGNED_SHORT_4_4_4_4)i=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)i=J.RGB5_A1}if(i===J.R16F||i===J.R32F||i===J.RG16F||i===J.RG32F||i===J.RGBA16F||i===J.RGBA32F)Q.get("EXT_color_buffer_float");return i}function z(I,M){let y;if(I){if(M===null||M===v8||M===a7)y=J.DEPTH24_STENCIL8;else if(M===G8)y=J.DEPTH32F_STENCIL8;else if(M===l6)y=J.DEPTH24_STENCIL8,T0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===v8||M===a7)y=J.DEPTH_COMPONENT24;else if(M===G8)y=J.DEPTH_COMPONENT32F;else if(M===l6)y=J.DEPTH_COMPONENT16;return y}function w(I,M){if(O(I)===!0||I.isFramebufferTexture&&I.minFilter!==x9&&I.minFilter!==dJ)return Math.log2(Math.max(M.width,M.height))+1;else if(I.mipmaps!==void 0&&I.mipmaps.length>0)return I.mipmaps.length;else if(I.isCompressedTexture&&Array.isArray(I.image))return M.mipmaps.length;else return 1}function _(I){let M=I.target;if(M.removeEventListener("dispose",_),A(M),M.isVideoTexture)G.delete(M);if(M.isHTMLTexture)E.delete(M)}function D(I){let M=I.target;M.removeEventListener("dispose",D),h(M)}function A(I){let M=W.get(I);if(M.__webglInit===void 0)return;let y=I.source,m=q.get(y);if(m){let H0=m[M.__cacheKey];if(H0.usedTimes--,H0.usedTimes===0)d(I);if(Object.keys(m).length===0)q.delete(y)}W.remove(I)}function d(I){let M=W.get(I);J.deleteTexture(M.__webglTexture);let y=I.source,m=q.get(y);delete m[M.__cacheKey],H.memory.textures--}function h(I){let M=W.get(I);if(I.depthTexture)I.depthTexture.dispose(),W.remove(I.depthTexture);if(I.isWebGLCubeRenderTarget)for(let m=0;m<6;m++){if(Array.isArray(M.__webglFramebuffer[m]))for(let H0=0;H0<M.__webglFramebuffer[m].length;H0++)J.deleteFramebuffer(M.__webglFramebuffer[m][H0]);else J.deleteFramebuffer(M.__webglFramebuffer[m]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[m])}else{if(Array.isArray(M.__webglFramebuffer))for(let m=0;m<M.__webglFramebuffer.length;m++)J.deleteFramebuffer(M.__webglFramebuffer[m]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let m=0;m<M.__webglColorRenderbuffer.length;m++)if(M.__webglColorRenderbuffer[m])J.deleteRenderbuffer(M.__webglColorRenderbuffer[m])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let y=I.textures;for(let m=0,H0=y.length;m<H0;m++){let L0=W.get(y[m]);if(L0.__webglTexture)J.deleteTexture(L0.__webglTexture),H.memory.textures--;W.remove(y[m])}W.remove(I)}let p=0;function e(){p=0}function j(){return p}function n(I){p=I}function $0(){let I=p;if(I>=Z.maxTextures)T0("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+Z.maxTextures);return p+=1,I}function u(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function E0(I,M){let y=W.get(I);if(I.isVideoTexture)wJ(I);if(I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&y.__version!==I.version){let m=I.image;if(m===null)T0("WebGLRenderer: Texture marked for update but no image data found.");else if(m.complete===!1)T0("WebGLRenderer: Texture marked for update but image is incomplete");else{f0(y,I,M);return}}else if(I.isExternalTexture)y.__webglTexture=I.sourceTexture?I.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+M)}function t(I,M){let y=W.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&y.__version!==I.version){f0(y,I,M);return}else if(I.isExternalTexture)y.__webglTexture=I.sourceTexture?I.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+M)}function W0(I,M){let y=W.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&y.__version!==I.version){f0(y,I,M);return}$.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+M)}function X0(I,M){let y=W.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&y.__version!==I.version){j0(y,I,M);return}$.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+M)}let h0={[y8]:J.REPEAT,[i7]:J.CLAMP_TO_EDGE,[W$]:J.MIRRORED_REPEAT},_0={[x9]:J.NEAREST,[Z$]:J.NEAREST_MIPMAP_NEAREST,[W7]:J.NEAREST_MIPMAP_LINEAR,[dJ]:J.LINEAR,[o7]:J.LINEAR_MIPMAP_NEAREST,[i9]:J.LINEAR_MIPMAP_LINEAR},RJ={[FY]:J.NEVER,[BY]:J.ALWAYS,[OY]:J.LESS,[E$]:J.LEQUAL,[RY]:J.EQUAL,[q$]:J.GEQUAL,[LY]:J.GREATER,[VY]:J.NOTEQUAL};function l0(I,M){if(M.type===G8&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===dJ||M.magFilter===o7||M.magFilter===W7||M.magFilter===i9||M.minFilter===dJ||M.minFilter===o7||M.minFilter===W7||M.minFilter===i9))T0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(I,J.TEXTURE_WRAP_S,h0[M.wrapS]),J.texParameteri(I,J.TEXTURE_WRAP_T,h0[M.wrapT]),I===J.TEXTURE_3D||I===J.TEXTURE_2D_ARRAY)J.texParameteri(I,J.TEXTURE_WRAP_R,h0[M.wrapR]);if(J.texParameteri(I,J.TEXTURE_MAG_FILTER,_0[M.magFilter]),J.texParameteri(I,J.TEXTURE_MIN_FILTER,_0[M.minFilter]),M.compareFunction)J.texParameteri(I,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(I,J.TEXTURE_COMPARE_FUNC,RJ[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===x9)return;if(M.minFilter!==W7&&M.minFilter!==i9)return;if(M.type===G8&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||W.get(M).__currentAnisotropy){let y=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(I,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,Z.getMaxAnisotropy())),W.get(M).__currentAnisotropy=M.anisotropy}}}function a(I,M){let y=!1;if(I.__webglInit===void 0)I.__webglInit=!0,M.addEventListener("dispose",_);let m=M.source,H0=q.get(m);if(H0===void 0)H0={},q.set(m,H0);let L0=u(M);if(L0!==I.__cacheKey){if(H0[L0]===void 0)H0[L0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,y=!0;H0[L0].usedTimes++;let D0=H0[I.__cacheKey];if(D0!==void 0){if(H0[I.__cacheKey].usedTimes--,D0.usedTimes===0)d(M)}I.__cacheKey=L0,I.__webglTexture=H0[L0].texture}return y}function N0(I,M,y){return Math.floor(Math.floor(I/y)/M)}function O0(I,M,y,m){let L0=I.updateRanges;if(L0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,y,m,M.data);else{L0.sort((w0,M0)=>w0.start-M0.start);let D0=0;for(let w0=1;w0<L0.length;w0++){let M0=L0[D0],q0=L0[w0],y0=M0.start+M0.count,b0=N0(q0.start,M.width,4),HJ=N0(M0.start,M.width,4);if(q0.start<=y0+1&&b0===HJ&&N0(q0.start+q0.count-1,M.width,4)===b0)M0.count=Math.max(M0.count,q0.start+q0.count-M0.start);else++D0,L0[D0]=q0}L0.length=D0+1;let i=$.getParameter(J.UNPACK_ROW_LENGTH),J0=$.getParameter(J.UNPACK_SKIP_PIXELS),C0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let w0=0,M0=L0.length;w0<M0;w0++){let q0=L0[w0],y0=Math.floor(q0.start/4),b0=Math.ceil(q0.count/4),HJ=y0%M.width,x=Math.floor(y0/M.width),V0=b0,r=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,HJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,x),$.texSubImage2D(J.TEXTURE_2D,0,HJ,x,V0,1,y,m,M.data)}I.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,i),$.pixelStorei(J.UNPACK_SKIP_PIXELS,J0),$.pixelStorei(J.UNPACK_SKIP_ROWS,C0)}}function f0(I,M,y){let m=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)m=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)m=J.TEXTURE_3D;let H0=a(I,M),L0=M.source;$.bindTexture(m,I.__webglTexture,J.TEXTURE0+y);let D0=W.get(L0);if(L0.version!==D0.__version||H0===!0){if($.activeTexture(J.TEXTURE0+y),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let r=r0.getPrimaries(r0.workingColorSpace),k0=M.colorSpace===Y7?null:r0.getPrimaries(M.colorSpace),I0=M.colorSpace===Y7||r===k0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0)}$.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let J0=R(M.image,!1,Z.maxTextureSize);J0=n0(M,J0);let C0=K.convert(M.format,M.colorSpace),w0=K.convert(M.type),M0=L(M.internalFormat,C0,w0,M.normalized,M.colorSpace,M.isVideoTexture);l0(m,M);let q0,y0=M.mipmaps,b0=M.isVideoTexture!==!0,HJ=D0.__version===void 0||H0===!0,x=L0.dataReady,V0=w(M,J0);if(M.isDepthTexture){if(M0=z(M.format===K7,M.type),HJ)if(b0)$.texStorage2D(J.TEXTURE_2D,1,M0,J0.width,J0.height);else $.texImage2D(J.TEXTURE_2D,0,M0,J0.width,J0.height,0,C0,w0,null)}else if(M.isDataTexture)if(y0.length>0){if(b0&&HJ)$.texStorage2D(J.TEXTURE_2D,V0,M0,y0[0].width,y0[0].height);for(let r=0,k0=y0.length;r<k0;r++)if(q0=y0[r],b0){if(x)$.texSubImage2D(J.TEXTURE_2D,r,0,0,q0.width,q0.height,C0,w0,q0.data)}else $.texImage2D(J.TEXTURE_2D,r,M0,q0.width,q0.height,0,C0,w0,q0.data);M.generateMipmaps=!1}else if(b0){if(HJ)$.texStorage2D(J.TEXTURE_2D,V0,M0,J0.width,J0.height);if(x)O0(M,J0,C0,w0)}else $.texImage2D(J.TEXTURE_2D,0,M0,J0.width,J0.height,0,C0,w0,J0.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(b0&&HJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,V0,M0,y0[0].width,y0[0].height,J0.depth);for(let r=0,k0=y0.length;r<k0;r++)if(q0=y0[r],M.format!==a9)if(C0!==null)if(b0){if(x)if(M.layerUpdates.size>0){let I0=ZK(q0.width,q0.height,M.format,M.type);for(let Y0 of M.layerUpdates){let z0=q0.data.subarray(Y0*I0/q0.data.BYTES_PER_ELEMENT,(Y0+1)*I0/q0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,r,0,0,Y0,q0.width,q0.height,1,C0,z0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,r,0,0,0,q0.width,q0.height,J0.depth,C0,q0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,r,M0,q0.width,q0.height,J0.depth,0,q0.data,0,0);else T0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(b0){if(x)$.texSubImage3D(J.TEXTURE_2D_ARRAY,r,0,0,0,q0.width,q0.height,J0.depth,C0,w0,q0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,r,M0,q0.width,q0.height,J0.depth,0,C0,w0,q0.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(b0&&HJ)$.texStorage2D(J.TEXTURE_2D,V0,M0,y0[0].width,y0[0].height);for(let r=0,k0=y0.length;r<k0;r++)if(q0=y0[r],M.format!==a9)if(C0!==null)if(b0){if(x)$.compressedTexSubImage2D(J.TEXTURE_2D,r,0,0,q0.width,q0.height,C0,q0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,r,M0,q0.width,q0.height,0,q0.data);else T0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(b0){if(x)$.texSubImage2D(J.TEXTURE_2D,r,0,0,q0.width,q0.height,C0,w0,q0.data)}else $.texImage2D(J.TEXTURE_2D,r,M0,q0.width,q0.height,0,C0,w0,q0.data)}else if(M.isDataArrayTexture)if(b0){if(HJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,V0,M0,J0.width,J0.height,J0.depth);if(x)if(M.layerUpdates.size>0){let r=ZK(J0.width,J0.height,M.format,M.type);for(let k0 of M.layerUpdates){let I0=J0.data.subarray(k0*r/J0.data.BYTES_PER_ELEMENT,(k0+1)*r/J0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,k0,J0.width,J0.height,1,C0,w0,I0)}M.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,J0.width,J0.height,J0.depth,C0,w0,J0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,M0,J0.width,J0.height,J0.depth,0,C0,w0,J0.data);else if(M.isData3DTexture)if(b0){if(HJ)$.texStorage3D(J.TEXTURE_3D,V0,M0,J0.width,J0.height,J0.depth);if(x)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,J0.width,J0.height,J0.depth,C0,w0,J0.data)}else $.texImage3D(J.TEXTURE_3D,0,M0,J0.width,J0.height,J0.depth,0,C0,w0,J0.data);else if(M.isFramebufferTexture){if(HJ)if(b0)$.texStorage2D(J.TEXTURE_2D,V0,M0,J0.width,J0.height);else{let{width:r,height:k0}=J0;for(let I0=0;I0<V0;I0++)$.texImage2D(J.TEXTURE_2D,I0,M0,r,k0,0,C0,w0,null),r>>=1,k0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let r=J.canvas;if(!r.hasAttribute("layoutsubtree"))r.setAttribute("layoutsubtree","true");if(J0.parentNode!==r){r.appendChild(J0),E.add(M),r.onpaint=(k0)=>{let I0=k0.changedElements;for(let Y0 of E)if(I0.includes(Y0.image))Y0.needsUpdate=!0},r.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,J0);else{let{RGBA:I0,RGBA:Y0,UNSIGNED_BYTE:z0}=J;J.texElementImage2D(J.TEXTURE_2D,0,I0,Y0,z0,J0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(y0.length>0){if(b0&&HJ){let r=VJ(y0[0]);$.texStorage2D(J.TEXTURE_2D,V0,M0,r.width,r.height)}for(let r=0,k0=y0.length;r<k0;r++)if(q0=y0[r],b0){if(x)$.texSubImage2D(J.TEXTURE_2D,r,0,0,C0,w0,q0)}else $.texImage2D(J.TEXTURE_2D,r,M0,C0,w0,q0);M.generateMipmaps=!1}else if(b0){if(HJ){let r=VJ(J0);$.texStorage2D(J.TEXTURE_2D,V0,M0,r.width,r.height)}if(x)$.texSubImage2D(J.TEXTURE_2D,0,0,0,C0,w0,J0)}else $.texImage2D(J.TEXTURE_2D,0,M0,C0,w0,J0);if(O(M))P(m);if(D0.__version=L0.version,M.onUpdate)M.onUpdate(M)}I.__version=M.version}function j0(I,M,y){if(M.image.length!==6)return;let m=a(I,M),H0=M.source;$.bindTexture(J.TEXTURE_CUBE_MAP,I.__webglTexture,J.TEXTURE0+y);let L0=W.get(H0);if(H0.version!==L0.__version||m===!0){$.activeTexture(J.TEXTURE0+y);let D0=r0.getPrimaries(r0.workingColorSpace),i=M.colorSpace===Y7?null:r0.getPrimaries(M.colorSpace),J0=M.colorSpace===Y7||D0===i?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J0);let C0=M.isCompressedTexture||M.image[0].isCompressedTexture,w0=M.image[0]&&M.image[0].isDataTexture,M0=[];for(let Y0=0;Y0<6;Y0++){if(!C0&&!w0)M0[Y0]=R(M.image[Y0],!0,Z.maxCubemapSize);else M0[Y0]=w0?M.image[Y0].image:M.image[Y0];M0[Y0]=n0(M,M0[Y0])}let q0=M0[0],y0=K.convert(M.format,M.colorSpace),b0=K.convert(M.type),HJ=L(M.internalFormat,y0,b0,M.normalized,M.colorSpace),x=M.isVideoTexture!==!0,V0=L0.__version===void 0||m===!0,r=H0.dataReady,k0=w(M,q0);l0(J.TEXTURE_CUBE_MAP,M);let I0;if(C0){if(x&&V0)$.texStorage2D(J.TEXTURE_CUBE_MAP,k0,HJ,q0.width,q0.height);for(let Y0=0;Y0<6;Y0++){I0=M0[Y0].mipmaps;for(let z0=0;z0<I0.length;z0++){let d0=I0[z0];if(M.format!==a9)if(y0!==null)if(x){if(r)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,z0,0,0,d0.width,d0.height,y0,d0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,z0,HJ,d0.width,d0.height,0,d0.data);else T0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(x){if(r)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,z0,0,0,d0.width,d0.height,y0,b0,d0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,z0,HJ,d0.width,d0.height,0,y0,b0,d0.data)}}}else{if(I0=M.mipmaps,x&&V0){if(I0.length>0)k0++;let Y0=VJ(M0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,k0,HJ,Y0.width,Y0.height)}for(let Y0=0;Y0<6;Y0++)if(w0){if(x){if(r)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,M0[Y0].width,M0[Y0].height,y0,b0,M0[Y0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,HJ,M0[Y0].width,M0[Y0].height,0,y0,b0,M0[Y0].data);for(let z0=0;z0<I0.length;z0++){let GJ=I0[z0].image[Y0].image;if(x){if(r)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,z0+1,0,0,GJ.width,GJ.height,y0,b0,GJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,z0+1,HJ,GJ.width,GJ.height,0,y0,b0,GJ.data)}}else{if(x){if(r)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,0,0,y0,b0,M0[Y0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0,HJ,y0,b0,M0[Y0]);for(let z0=0;z0<I0.length;z0++){let d0=I0[z0];if(x){if(r)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,z0+1,0,0,y0,b0,d0.image[Y0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,z0+1,HJ,y0,b0,d0.image[Y0])}}}if(O(M))P(J.TEXTURE_CUBE_MAP);if(L0.__version=H0.version,M.onUpdate)M.onUpdate(M)}I.__version=M.version}function S0(I,M,y,m,H0,L0){let D0=K.convert(y.format,y.colorSpace),i=K.convert(y.type),J0=L(y.internalFormat,D0,i,y.normalized,y.colorSpace),C0=W.get(M),w0=W.get(y);if(w0.__renderTarget=M,!C0.__hasExternalTextures){let M0=Math.max(1,M.width>>L0),q0=Math.max(1,M.height>>L0);if(H0===J.TEXTURE_3D||H0===J.TEXTURE_2D_ARRAY)$.texImage3D(H0,L0,J0,M0,q0,M.depth,0,D0,i,null);else $.texImage2D(H0,L0,J0,M0,q0,0,D0,i,null)}if($.bindFramebuffer(J.FRAMEBUFFER,I),b(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,m,H0,w0.__webglTexture,0,PJ(M));else if(H0===J.TEXTURE_2D||H0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&H0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,m,H0,w0.__webglTexture,L0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function zJ(I,M,y){if(J.bindRenderbuffer(J.RENDERBUFFER,I),M.depthBuffer){let m=M.depthTexture,H0=m&&m.isDepthTexture?m.type:null,L0=z(M.stencilBuffer,H0),D0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(b(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,PJ(M),L0,M.width,M.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,PJ(M),L0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,L0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,D0,J.RENDERBUFFER,I)}else{let m=M.textures;for(let H0=0;H0<m.length;H0++){let L0=m[H0],D0=K.convert(L0.format,L0.colorSpace),i=K.convert(L0.type),J0=L(L0.internalFormat,D0,i,L0.normalized,L0.colorSpace);if(b(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,PJ(M),J0,M.width,M.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,PJ(M),J0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,J0,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function a0(I,M,y){let m=M.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H0=W.get(M.depthTexture);if(H0.__renderTarget=M,!H0.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0;if(m){if(H0.__webglInit===void 0)H0.__webglInit=!0,M.depthTexture.addEventListener("dispose",_);if(H0.__webglTexture===void 0){H0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,H0.__webglTexture),l0(J.TEXTURE_CUBE_MAP,M.depthTexture);let C0=K.convert(M.depthTexture.format),w0=K.convert(M.depthTexture.type),M0;if(M.depthTexture.format===Z7)M0=J.DEPTH_COMPONENT24;else if(M.depthTexture.format===K7)M0=J.DEPTH24_STENCIL8;for(let q0=0;q0<6;q0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,0,M0,M.width,M.height,0,C0,w0,null)}}else E0(M.depthTexture,0);let L0=H0.__webglTexture,D0=PJ(M),i=m?J.TEXTURE_CUBE_MAP_POSITIVE_X+y:J.TEXTURE_2D,J0=M.depthTexture.format===K7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===Z7)if(b(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J0,i,L0,0,D0);else J.framebufferTexture2D(J.FRAMEBUFFER,J0,i,L0,0);else if(M.depthTexture.format===K7)if(b(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J0,i,L0,0,D0);else J.framebufferTexture2D(J.FRAMEBUFFER,J0,i,L0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function e0(I){let M=W.get(I),y=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let m=I.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(m){let H0=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,m.removeEventListener("dispose",H0)};m.addEventListener("dispose",H0),M.__depthDisposeCallback=H0}M.__boundDepthTexture=m}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(y)for(let m=0;m<6;m++)a0(M.__webglFramebuffer[m],I,m);else{let m=I.texture.mipmaps;if(m&&m.length>0)a0(M.__webglFramebuffer[0],I,0);else a0(M.__webglFramebuffer,I,0)}else if(y){M.__webglDepthbuffer=[];for(let m=0;m<6;m++)if($.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[m]),M.__webglDepthbuffer[m]===void 0)M.__webglDepthbuffer[m]=J.createRenderbuffer(),zJ(M.__webglDepthbuffer[m],I,!1);else{let H0=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,L0=M.__webglDepthbuffer[m];J.bindRenderbuffer(J.RENDERBUFFER,L0),J.framebufferRenderbuffer(J.FRAMEBUFFER,H0,J.RENDERBUFFER,L0)}}else{let m=I.texture.mipmaps;if(m&&m.length>0)$.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),zJ(M.__webglDepthbuffer,I,!1);else{let H0=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,L0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,L0),J.framebufferRenderbuffer(J.FRAMEBUFFER,H0,J.RENDERBUFFER,L0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function XJ(I,M,y){let m=W.get(I);if(M!==void 0)S0(m.__webglFramebuffer,I,I.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)e0(I)}function $J(I){let M=I.texture,y=W.get(I),m=W.get(M);I.addEventListener("dispose",D);let H0=I.textures,L0=I.isWebGLCubeRenderTarget===!0,D0=H0.length>1;if(!D0){if(m.__webglTexture===void 0)m.__webglTexture=J.createTexture();m.__version=M.version,H.memory.textures++}if(L0){y.__webglFramebuffer=[];for(let i=0;i<6;i++)if(M.mipmaps&&M.mipmaps.length>0){y.__webglFramebuffer[i]=[];for(let J0=0;J0<M.mipmaps.length;J0++)y.__webglFramebuffer[i][J0]=J.createFramebuffer()}else y.__webglFramebuffer[i]=J.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){y.__webglFramebuffer=[];for(let i=0;i<M.mipmaps.length;i++)y.__webglFramebuffer[i]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(D0)for(let i=0,J0=H0.length;i<J0;i++){let C0=W.get(H0[i]);if(C0.__webglTexture===void 0)C0.__webglTexture=J.createTexture(),H.memory.textures++}if(I.samples>0&&b(I)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let i=0;i<H0.length;i++){let J0=H0[i];y.__webglColorRenderbuffer[i]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[i]);let C0=K.convert(J0.format,J0.colorSpace),w0=K.convert(J0.type),M0=L(J0.internalFormat,C0,w0,J0.normalized,J0.colorSpace,I.isXRRenderTarget===!0),q0=PJ(I);J.renderbufferStorageMultisample(J.RENDERBUFFER,q0,M0,I.width,I.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+i,J.RENDERBUFFER,y.__webglColorRenderbuffer[i])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),I.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),zJ(y.__webglDepthRenderbuffer,I,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(L0){$.bindTexture(J.TEXTURE_CUBE_MAP,m.__webglTexture),l0(J.TEXTURE_CUBE_MAP,M);for(let i=0;i<6;i++)if(M.mipmaps&&M.mipmaps.length>0)for(let J0=0;J0<M.mipmaps.length;J0++)S0(y.__webglFramebuffer[i][J0],I,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+i,J0);else S0(y.__webglFramebuffer[i],I,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);if(O(M))P(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(D0){for(let i=0,J0=H0.length;i<J0;i++){let C0=H0[i],w0=W.get(C0),M0=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)M0=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(M0,w0.__webglTexture),l0(M0,C0),S0(y.__webglFramebuffer,I,C0,J.COLOR_ATTACHMENT0+i,M0,0),O(C0))P(M0)}$.unbindTexture()}else{let i=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)i=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(i,m.__webglTexture),l0(i,M),M.mipmaps&&M.mipmaps.length>0)for(let J0=0;J0<M.mipmaps.length;J0++)S0(y.__webglFramebuffer[J0],I,M,J.COLOR_ATTACHMENT0,i,J0);else S0(y.__webglFramebuffer,I,M,J.COLOR_ATTACHMENT0,i,0);if(O(M))P(i);$.unbindTexture()}if(I.depthBuffer)e0(I)}function yJ(I){let M=I.textures;for(let y=0,m=M.length;y<m;y++){let H0=M[y];if(O(H0)){let L0=k(I),D0=W.get(H0).__webglTexture;$.bindTexture(L0,D0),P(L0),$.unbindTexture()}}}let LJ=[],sJ=[];function AJ(I){if(I.samples>0){if(b(I)===!1){let{textures:M,width:y,height:m}=I,H0=J.COLOR_BUFFER_BIT,L0=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,D0=W.get(I),i=M.length>1;if(i)for(let C0=0;C0<M.length;C0++)$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+C0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+C0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,D0.__webglMultisampledFramebuffer);let J0=I.texture.mipmaps;if(J0&&J0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglFramebuffer);for(let C0=0;C0<M.length;C0++){if(I.resolveDepthBuffer){if(I.depthBuffer)H0|=J.DEPTH_BUFFER_BIT;if(I.stencilBuffer&&I.resolveStencilBuffer)H0|=J.STENCIL_BUFFER_BIT}if(i){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,D0.__webglColorRenderbuffer[C0]);let w0=W.get(M[C0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,w0,0)}if(J.blitFramebuffer(0,0,y,m,0,0,y,m,H0,J.NEAREST),X===!0){if(LJ.length=0,sJ.length=0,LJ.push(J.COLOR_ATTACHMENT0+C0),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1)LJ.push(L0),sJ.push(L0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,sJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,LJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),i)for(let C0=0;C0<M.length;C0++){$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+C0,J.RENDERBUFFER,D0.__webglColorRenderbuffer[C0]);let w0=W.get(M[C0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+C0,J.TEXTURE_2D,w0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&X){let M=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function PJ(I){return Math.min(Z.maxSamples,I.samples)}function b(I){let M=W.get(I);return I.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function wJ(I){let M=H.render.frame;if(G.get(I)!==M)G.set(I,M),I.update()}function n0(I,M){let{colorSpace:y,format:m,type:H0}=I;if(I.isCompressedTexture===!0||I.isVideoTexture===!0)return M;if(y!==N9&&y!==Y7)if(r0.getTransfer(y)===kJ){if(m!==a9||H0!==g9)T0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else m0("WebGLTextures: Unsupported texture color space:",y);return M}function VJ(I){if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement)U.width=I.naturalWidth||I.width,U.height=I.naturalHeight||I.height;else if(typeof VideoFrame<"u"&&I instanceof VideoFrame)U.width=I.displayWidth,U.height=I.displayHeight;else U.width=I.width,U.height=I.height;return U}this.allocateTextureUnit=$0,this.resetTextureUnits=e,this.getTextureUnits=j,this.setTextureUnits=n,this.setTexture2D=E0,this.setTexture2DArray=t,this.setTexture3D=W0,this.setTextureCube=X0,this.rebindTextures=XJ,this.setupRenderTarget=$J,this.updateRenderTargetMipmap=yJ,this.updateMultisampleRenderTarget=AJ,this.setupDepthRenderbuffer=e0,this.setupFrameBufferTexture=S0,this.useMultisampledRTT=b,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function P1(J,Q){function $(W,Z=Y7){let K,H=r0.getTransfer(Z);if(W===g9)return J.UNSIGNED_BYTE;if(W===dW)return J.UNSIGNED_SHORT_4_4_4_4;if(W===uW)return J.UNSIGNED_SHORT_5_5_5_1;if(W===XY)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===UY)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===HY)return J.BYTE;if(W===YY)return J.SHORT;if(W===l6)return J.UNSIGNED_SHORT;if(W===mW)return J.INT;if(W===v8)return J.UNSIGNED_INT;if(W===G8)return J.FLOAT;if(W===o9)return J.HALF_FLOAT;if(W===GY)return J.ALPHA;if(W===NY)return J.RGB;if(W===a9)return J.RGBA;if(W===Z7)return J.DEPTH_COMPONENT;if(W===K7)return J.DEPTH_STENCIL;if(W===EY)return J.RED;if(W===cW)return J.RED_INTEGER;if(W===H7)return J.RG;if(W===nW)return J.RG_INTEGER;if(W===sW)return J.RGBA_INTEGER;if(W===K$||W===H$||W===Y$||W===X$)if(H===kJ)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(W===K$)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===H$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===Y$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===X$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(W===K$)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===H$)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===Y$)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===X$)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===iW||W===oW||W===aW||W===rW)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(W===iW)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===oW)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===aW)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===rW)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===tW||W===eW||W===JZ||W===QZ||W===$Z||W===U$||W===WZ)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(W===tW||W===eW)return H===kJ?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(W===JZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(W===QZ)return K.COMPRESSED_R11_EAC;if(W===$Z)return K.COMPRESSED_SIGNED_R11_EAC;if(W===U$)return K.COMPRESSED_RG11_EAC;if(W===WZ)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===ZZ||W===KZ||W===HZ||W===YZ||W===XZ||W===UZ||W===GZ||W===NZ||W===EZ||W===qZ||W===FZ||W===OZ||W===RZ||W===LZ)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(W===ZZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===KZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===HZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===YZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===XZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===UZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===GZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===NZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===EZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===qZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===FZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===OZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===RZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===LZ)return H===kJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===VZ||W===BZ||W===kZ)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(W===VZ)return H===kJ?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===BZ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===kZ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===DZ||W===MZ||W===G$||W===CZ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(W===DZ)return K.COMPRESSED_RED_RGTC1_EXT;if(W===MZ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===G$)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===CZ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===a7)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var I1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A1=`
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

}`;class RX{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new C$(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new P9({vertexShader:I1,fragmentShader:A1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new A0(new F9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LX extends p9{constructor(J,Q){super();let $=this,W=null,Z=1,K=null,H="local-floor",Y=1,X=null,U=null,G=null,E=null,N=null,q=null,F=typeof XRWebGLBinding<"u",B=new RX,R={},O=Q.getContextAttributes(),P=null,k=null,L=[],z=[],w=new U0,_=null,D=null,A=new hJ;A.viewport=new FJ;let d=new hJ;d.viewport=new FJ;let h=[A,d],p=new tZ,e=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(a){let N0=L[a];if(N0===void 0)N0=new c6,L[a]=N0;return N0.getTargetRaySpace()},this.getControllerGrip=function(a){let N0=L[a];if(N0===void 0)N0=new c6,L[a]=N0;return N0.getGripSpace()},this.getHand=function(a){let N0=L[a];if(N0===void 0)N0=new c6,L[a]=N0;return N0.getHandSpace()};function n(a){let N0=z.indexOf(a.inputSource);if(N0===-1)return;let O0=L[N0];if(O0!==void 0)O0.update(a.inputSource,a.frame,X||K),O0.dispatchEvent({type:a.type,data:a.inputSource})}function $0(){W.removeEventListener("select",n),W.removeEventListener("selectstart",n),W.removeEventListener("selectend",n),W.removeEventListener("squeeze",n),W.removeEventListener("squeezestart",n),W.removeEventListener("squeezeend",n),W.removeEventListener("end",$0),W.removeEventListener("inputsourceschange",u);for(let a=0;a<L.length;a++){let N0=z[a];if(N0===null)continue;z[a]=null,L[a].disconnect(N0)}e=null,j=null,B.reset();for(let a in R)delete R[a];if(J.setRenderTarget(P),N=null,E=null,G=null,W=null,k=null,l0.stop(),$.isPresenting=!1,J.setPixelRatio(_),J.setSize(w.width,w.height,!1),D!==null){let a=D.camera;a.fov=D.fov,a.zoom=D.zoom,a.updateProjectionMatrix(),D=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(a){if(Z=a,$.isPresenting===!0)T0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(a){if(H=a,$.isPresenting===!0)T0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(a){X=a},this.getBaseLayer=function(){return E!==null?E:N},this.getBinding=function(){if(G===null&&F)G=new XRWebGLBinding(W,Q);return G},this.getFrame=function(){return q},this.getSession=function(){return W},this.setSession=async function(a){if(W=a,W!==null){if(P=J.getRenderTarget(),W.addEventListener("select",n),W.addEventListener("selectstart",n),W.addEventListener("selectend",n),W.addEventListener("squeeze",n),W.addEventListener("squeezestart",n),W.addEventListener("squeezeend",n),W.addEventListener("end",$0),W.addEventListener("inputsourceschange",u),O.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(w),!(F&&("createProjectionLayer"in XRWebGLBinding.prototype))){let O0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:Z};N=new XRWebGLLayer(W,Q,O0),W.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),k=new E9(N.framebufferWidth,N.framebufferHeight,{format:a9,type:g9,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}else{let O0=null,f0=null,j0=null;if(O.depth)j0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,O0=O.stencil?K7:Z7,f0=O.stencil?a7:v8;let S0={colorFormat:Q.RGBA8,depthFormat:j0,scaleFactor:Z};G=this.getBinding(),E=G.createProjectionLayer(S0),W.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),k=new E9(E.textureWidth,E.textureHeight,{format:a9,type:g9,depthTexture:new X7(E.textureWidth,E.textureHeight,f0,void 0,void 0,void 0,void 0,void 0,void 0,O0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await W.requestReferenceSpace(H),l0.setContext(W),l0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function u(a){for(let N0=0;N0<a.removed.length;N0++){let O0=a.removed[N0],f0=z.indexOf(O0);if(f0>=0)z[f0]=null,L[f0].disconnect(O0)}for(let N0=0;N0<a.added.length;N0++){let O0=a.added[N0],f0=z.indexOf(O0);if(f0===-1){for(let S0=0;S0<L.length;S0++)if(S0>=z.length){z.push(O0),f0=S0;break}else if(z[S0]===null){z[S0]=O0,f0=S0;break}if(f0===-1)break}let j0=L[f0];if(j0)j0.connect(O0)}}let E0=new S,t=new S;function W0(a,N0,O0){E0.setFromMatrixPosition(N0.matrixWorld),t.setFromMatrixPosition(O0.matrixWorld);let f0=E0.distanceTo(t),j0=N0.projectionMatrix.elements,S0=O0.projectionMatrix.elements,zJ=j0[14]/(j0[10]-1),a0=j0[14]/(j0[10]+1),e0=(j0[9]+1)/j0[5],XJ=(j0[9]-1)/j0[5],$J=(j0[8]-1)/j0[0],yJ=(S0[8]+1)/S0[0],LJ=zJ*$J,sJ=zJ*yJ,AJ=f0/(-$J+yJ),PJ=AJ*-$J;if(N0.matrixWorld.decompose(a.position,a.quaternion,a.scale),a.translateX(PJ),a.translateZ(AJ),a.matrixWorld.compose(a.position,a.quaternion,a.scale),a.matrixWorldInverse.copy(a.matrixWorld).invert(),j0[10]===-1)a.projectionMatrix.copy(N0.projectionMatrix),a.projectionMatrixInverse.copy(N0.projectionMatrixInverse);else{let b=zJ+AJ,wJ=a0+AJ,n0=LJ-PJ,VJ=sJ+(f0-PJ),I=e0*a0/wJ*b,M=XJ*a0/wJ*b;a.projectionMatrix.makePerspective(n0,VJ,I,M,b,wJ),a.projectionMatrixInverse.copy(a.projectionMatrix).invert()}}function X0(a,N0){if(N0===null)a.matrixWorld.copy(a.matrix);else a.matrixWorld.multiplyMatrices(N0.matrixWorld,a.matrix);a.matrixWorldInverse.copy(a.matrixWorld).invert()}this.updateCamera=function(a){if(W===null)return;let{near:N0,far:O0}=a;if(B.texture!==null){if(B.depthNear>0)N0=B.depthNear;if(B.depthFar>0)O0=B.depthFar}if(p.near=d.near=A.near=N0,p.far=d.far=A.far=O0,e!==p.near||j!==p.far)W.updateRenderState({depthNear:p.near,depthFar:p.far}),e=p.near,j=p.far;p.layers.mask=a.layers.mask|6,A.layers.mask=p.layers.mask&-5,d.layers.mask=p.layers.mask&-3;let f0=a.parent,j0=p.cameras;X0(p,f0);for(let S0=0;S0<j0.length;S0++)X0(j0[S0],f0);if(j0.length===2)W0(p,A,d);else p.projectionMatrix.copy(A.projectionMatrix);if(D===null&&a.isPerspectiveCamera)D={camera:a,fov:a.fov,zoom:a.zoom};h0(a,p,f0)};function h0(a,N0,O0){if(O0===null)a.matrix.copy(N0.matrixWorld);else a.matrix.copy(O0.matrixWorld),a.matrix.invert(),a.matrix.multiply(N0.matrixWorld);if(a.matrix.decompose(a.position,a.quaternion,a.scale),a.updateMatrixWorld(!0),a.projectionMatrix.copy(N0.projectionMatrix),a.projectionMatrixInverse.copy(N0.projectionMatrixInverse),a.isPerspectiveCamera)a.fov=J7*2*Math.atan(1/a.projectionMatrix.elements[5]),a.zoom=1}this.getCamera=function(){return p},this.getFoveation=function(){if(E===null&&N===null)return;return Y},this.setFoveation=function(a){if(Y=a,E!==null)E.fixedFoveation=a;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=a},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(p)},this.getCameraTexture=function(a){return R[a]};let _0=null;function RJ(a,N0){if(U=N0.getViewerPose(X||K),q=N0,U!==null){let O0=U.views;if(N!==null)J.setRenderTargetFramebuffer(k,N.framebuffer),J.setRenderTarget(k);let f0=!1;if(O0.length!==p.cameras.length)p.cameras.length=0,f0=!0;for(let a0=0;a0<O0.length;a0++){let e0=O0[a0],XJ=null;if(N!==null)XJ=N.getViewport(e0);else{let yJ=G.getViewSubImage(E,e0);if(XJ=yJ.viewport,a0===0)J.setRenderTargetTextures(k,yJ.colorTexture,yJ.depthStencilTexture),J.setRenderTarget(k)}let $J=h[a0];if($J===void 0)$J=new hJ,$J.layers.enable(a0),$J.viewport=new FJ,h[a0]=$J;if($J.matrix.fromArray(e0.transform.matrix),$J.matrix.decompose($J.position,$J.quaternion,$J.scale),$J.projectionMatrix.fromArray(e0.projectionMatrix),$J.projectionMatrixInverse.copy($J.projectionMatrix).invert(),$J.viewport.set(XJ.x,XJ.y,XJ.width,XJ.height),a0===0)p.matrix.copy($J.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale);if(f0===!0)p.cameras.push($J)}let j0=W.enabledFeatures;if(j0&&j0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&F){G=$.getBinding();let a0=G.getDepthInformation(O0[0]);if(a0&&a0.isValid&&a0.texture)B.init(a0,W.renderState)}if(j0&&j0.includes("camera-access")&&F){J.state.unbindTexture(),G=$.getBinding();for(let a0=0;a0<O0.length;a0++){let e0=O0[a0].camera;if(e0){let XJ=R[e0];if(!XJ)XJ=new C$,R[e0]=XJ;let $J=G.getCameraImage(e0);XJ.sourceTexture=$J}}}}for(let O0=0;O0<L.length;O0++){let f0=z[O0],j0=L[O0];if(f0!==null&&j0!==void 0)j0.update(f0,N0,X||K)}if(_0)_0(a,N0);if(N0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:N0});q=null}let l0=new KX;l0.setAnimationLoop(RJ),this.setAnimationLoop=function(a){_0=a},this.dispose=function(){}}}var w1=new g0,VX=new c0;VX.set(-1,0,0,0,1,0,0,0,1);function T1(J,Q){function $(R,O){if(R.matrixAutoUpdate===!0)R.updateMatrix();O.value.copy(R.matrix)}function W(R,O){if(O.color.getRGB(R.fogColor.value,lZ(J)),O.isFog)R.fogNear.value=O.near,R.fogFar.value=O.far;else if(O.isFogExp2)R.fogDensity.value=O.density}function Z(R,O,P,k,L){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)K(R,O);else if(O.isMeshLambertMaterial){if(K(R,O),O.envMap)R.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)K(R,O),E(R,O);else if(O.isMeshPhongMaterial){if(K(R,O),G(R,O),O.envMap)R.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(K(R,O),N(R,O),O.isMeshPhysicalMaterial)q(R,O,L)}else if(O.isMeshMatcapMaterial)K(R,O),F(R,O);else if(O.isMeshDepthMaterial)K(R,O);else if(O.isMeshDistanceMaterial)K(R,O),B(R,O);else if(O.isMeshNormalMaterial)K(R,O);else if(O.isLineBasicMaterial){if(H(R,O),O.isLineDashedMaterial)Y(R,O)}else if(O.isPointsMaterial)X(R,O,P,k);else if(O.isSpriteMaterial)U(R,O);else if(O.isShadowMaterial)R.color.value.copy(O.color),R.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function K(R,O){if(R.opacity.value=O.opacity,O.color)R.diffuse.value.copy(O.color);if(O.emissive)R.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)R.map.value=O.map,$(O.map,R.mapTransform);if(O.alphaMap)R.alphaMap.value=O.alphaMap,$(O.alphaMap,R.alphaMapTransform);if(O.bumpMap){if(R.bumpMap.value=O.bumpMap,$(O.bumpMap,R.bumpMapTransform),R.bumpScale.value=O.bumpScale,O.side===tJ)R.bumpScale.value*=-1}if(O.normalMap){if(R.normalMap.value=O.normalMap,$(O.normalMap,R.normalMapTransform),R.normalScale.value.copy(O.normalScale),O.side===tJ)R.normalScale.value.negate()}if(O.displacementMap)R.displacementMap.value=O.displacementMap,$(O.displacementMap,R.displacementMapTransform),R.displacementScale.value=O.displacementScale,R.displacementBias.value=O.displacementBias;if(O.emissiveMap)R.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,R.emissiveMapTransform);if(O.specularMap)R.specularMap.value=O.specularMap,$(O.specularMap,R.specularMapTransform);if(O.alphaTest>0)R.alphaTest.value=O.alphaTest;let P=Q.get(O),k=P.envMap,L=P.envMapRotation;if(k){if(R.envMap.value=k,R.envMapRotation.value.setFromMatrix4(w1.makeRotationFromEuler(L)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1)R.envMapRotation.value.premultiply(VX);R.reflectivity.value=O.reflectivity,R.ior.value=O.ior,R.refractionRatio.value=O.refractionRatio}if(O.lightMap)R.lightMap.value=O.lightMap,R.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,R.lightMapTransform);if(O.aoMap)R.aoMap.value=O.aoMap,R.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,R.aoMapTransform)}function H(R,O){if(R.diffuse.value.copy(O.color),R.opacity.value=O.opacity,O.map)R.map.value=O.map,$(O.map,R.mapTransform)}function Y(R,O){R.dashSize.value=O.dashSize,R.totalSize.value=O.dashSize+O.gapSize,R.scale.value=O.scale}function X(R,O,P,k){if(R.diffuse.value.copy(O.color),R.opacity.value=O.opacity,R.size.value=O.size*P,R.scale.value=k*0.5,O.map)R.map.value=O.map,$(O.map,R.uvTransform);if(O.alphaMap)R.alphaMap.value=O.alphaMap,$(O.alphaMap,R.alphaMapTransform);if(O.alphaTest>0)R.alphaTest.value=O.alphaTest}function U(R,O){if(R.diffuse.value.copy(O.color),R.opacity.value=O.opacity,R.rotation.value=O.rotation,O.map)R.map.value=O.map,$(O.map,R.mapTransform);if(O.alphaMap)R.alphaMap.value=O.alphaMap,$(O.alphaMap,R.alphaMapTransform);if(O.alphaTest>0)R.alphaTest.value=O.alphaTest}function G(R,O){R.specular.value.copy(O.specular),R.shininess.value=Math.max(O.shininess,0.0001)}function E(R,O){if(O.gradientMap)R.gradientMap.value=O.gradientMap}function N(R,O){if(R.metalness.value=O.metalness,O.metalnessMap)R.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,R.metalnessMapTransform);if(R.roughness.value=O.roughness,O.roughnessMap)R.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,R.roughnessMapTransform);if(O.envMap)R.envMapIntensity.value=O.envMapIntensity}function q(R,O,P){if(R.ior.value=O.ior,O.sheen>0){if(R.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),R.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)R.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,R.sheenColorMapTransform);if(O.sheenRoughnessMap)R.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,R.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(R.clearcoat.value=O.clearcoat,R.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)R.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,R.clearcoatMapTransform);if(O.clearcoatRoughnessMap)R.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(R.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===tJ)R.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)R.dispersion.value=O.dispersion;if(O.retroreflectivity>0)R.retroreflectivity.value=O.retroreflectivity;if(O.iridescence>0){if(R.iridescence.value=O.iridescence,R.iridescenceIOR.value=O.iridescenceIOR,R.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)R.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,R.iridescenceMapTransform);if(O.iridescenceThicknessMap)R.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,R.iridescenceThicknessMapTransform)}if(O.transmission>0){if(R.transmission.value=O.transmission,R.transmissionSamplerMap.value=P.texture,R.transmissionSamplerSize.value.set(P.width,P.height),O.transmissionMap)R.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,R.transmissionMapTransform);if(R.thickness.value=O.thickness,O.thicknessMap)R.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,R.thicknessMapTransform);R.attenuationDistance.value=O.attenuationDistance,R.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(R.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)R.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,R.anisotropyMapTransform)}if(R.specularIntensity.value=O.specularIntensity,R.specularColor.value.copy(O.specularColor),O.specularColorMap)R.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,R.specularColorMapTransform);if(O.specularIntensityMap)R.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,R.specularIntensityMapTransform)}function F(R,O){if(O.matcap)R.matcap.value=O.matcap}function B(R,O){let P=Q.get(O).light;R.referencePosition.value.setFromMatrixPosition(P.matrixWorld),R.nearDistance.value=P.shadow.camera.near,R.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function _1(J,Q,$,W){let Z={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(L,z){let w=z.program;W.uniformBlockBinding(L,w)}function U(L,z){let w=Z[L.id];if(w===void 0)R(L),w=G(L),Z[L.id]=w,L.addEventListener("dispose",P);let _=z.program;W.updateUBOMapping(L,_);let D=Q.render.frame;if(K[L.id]!==D)N(L),K[L.id]=D}function G(L){let z=E();L.__bindingPointIndex=z;let w=J.createBuffer(),_=L.__size,D=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,_,D),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,z,w),w}function E(){for(let L=0;L<Y;L++)if(H.indexOf(L)===-1)return H.push(L),L;return m0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(L){let z=Z[L.id],w=L.uniforms,_=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,z);for(let D=0,A=w.length;D<A;D++){let d=w[D];if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++)q(d[h],D,h,_);else q(d,D,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(L,z,w,_){if(B(L,z,w,_)===!0){let{__offset:D,value:A}=L;if(Array.isArray(A)){let d=0;for(let h=0;h<A.length;h++){let p=A[h],e=O(p);if(F(p,L.__data,d),typeof p!=="number"&&typeof p!=="boolean"&&!p.isMatrix3&&!ArrayBuffer.isView(p))d+=e.storage/Float32Array.BYTES_PER_ELEMENT}}else F(A,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,D,L.__data)}}function F(L,z,w){if(typeof L==="number"||typeof L==="boolean")z[0]=L;else if(L.isMatrix3)z[0]=L.elements[0],z[1]=L.elements[1],z[2]=L.elements[2],z[3]=0,z[4]=L.elements[3],z[5]=L.elements[4],z[6]=L.elements[5],z[7]=0,z[8]=L.elements[6],z[9]=L.elements[7],z[10]=L.elements[8],z[11]=0;else if(ArrayBuffer.isView(L))z.set(new L.constructor(L.buffer,L.byteOffset,z.length));else L.toArray(z,w)}function B(L,z,w,_){let D=L.value,A=z+"_"+w;if(_[A]===void 0){if(typeof D==="number"||typeof D==="boolean")_[A]=D;else if(ArrayBuffer.isView(D))_[A]=D.slice();else _[A]=D.clone();return!0}else{let d=_[A];if(typeof D==="number"||typeof D==="boolean"){if(d!==D)return _[A]=D,!0}else if(ArrayBuffer.isView(D))return!0;else if(d.equals(D)===!1)return d.copy(D),!0}return!1}function R(L){let z=L.uniforms,w=0,_=16;for(let A=0,d=z.length;A<d;A++){let h=Array.isArray(z[A])?z[A]:[z[A]];for(let p=0,e=h.length;p<e;p++){let j=h[p],n=Array.isArray(j.value)?j.value:[j.value];for(let $0=0,u=n.length;$0<u;$0++){let E0=n[$0],t=O(E0),W0=w%_,X0=W0%t.boundary,h0=W0+X0;if(w+=X0,h0!==0&&_-h0<t.storage)w+=_-h0;j.__data=new Float32Array(t.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=t.storage}}}let D=w%_;if(D>0)w+=_-D;return L.__size=w,L.__cache={},this}function O(L){let z={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")z.boundary=4,z.storage=4;else if(L.isVector2)z.boundary=8,z.storage=8;else if(L.isVector3||L.isColor)z.boundary=16,z.storage=12;else if(L.isVector4)z.boundary=16,z.storage=16;else if(L.isMatrix3)z.boundary=48,z.storage=48;else if(L.isMatrix4)z.boundary=64,z.storage=64;else if(L.isTexture)T0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))z.boundary=16,z.storage=L.byteLength;else T0("WebGLRenderer: Unsupported uniform value type.",L);return z}function P(L){let z=L.target;z.removeEventListener("dispose",P);let w=H.indexOf(z.__bindingPointIndex);H.splice(w,1),J.deleteBuffer(Z[z.id]),delete Z[z.id],delete K[z.id]}function k(){for(let L in Z)J.deleteBuffer(Z[L]);H=[],Z={},K={}}return{bind:X,update:U,dispose:k}}var S1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),r9=null;function j1(){if(r9===null)r9=new o6(S1,16,16,H7,o9),r9.name="DFG_LUT",r9.minFilter=dJ,r9.magFilter=dJ,r9.wrapS=i7,r9.wrapT=i7,r9.generateMipmaps=!1,r9.needsUpdate=!0;return r9}class FK{constructor(J={}){let{canvas:Q=kY(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:E=!1,outputBufferType:N=g9}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=K;let F=N,B=new Set([sW,nW,cW]),R=new Set([g9,v8,l6,a7,dW,uW]),O=new Uint32Array(4),P=new Int32Array(4),k=new S,L=null,z=null,w=[],_=[],D=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=b9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,d=!1,h=null,p=null,e=null,j=null;this._outputColorSpace=Z9;let n=0,$0=0,u=null,E0=-1,t=null,W0=new FJ,X0=new FJ,h0=null,_0=new v0(0),RJ=0,l0=Q.width,a=Q.height,N0=1,O0=null,f0=null,j0=new FJ(0,0,l0,a),S0=new FJ(0,0,l0,a),zJ=!1,a0=new r6,e0=!1,XJ=!1,$J=new g0,yJ=new S,LJ=new FJ,sJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},AJ=!1;function PJ(){return u===null?N0:1}let b=$;function wJ(C,v){return Q.getContext(C,v)}let n0,VJ,I,M,y,m,H0,L0,D0,i,J0,C0,w0,M0,q0,y0,b0,HJ,x,V0,r,k0,I0;try{let C={alpha:!0,depth:W,stencil:Z,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${AH}`);if(Q.addEventListener("webglcontextlost",d0,!1),Q.addEventListener("webglcontextrestored",GJ,!1),Q.addEventListener("webglcontextcreationerror",KJ,!1),b===null){if(b=wJ("webgl2",C),b===null)if(wJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Y0()}catch(C){throw Q.removeEventListener("webglcontextlost",d0,!1),Q.removeEventListener("webglcontextrestored",GJ,!1),Q.removeEventListener("webglcontextcreationerror",KJ,!1),m0("WebGLRenderer: "+C.message),C}function Y0(){if(n0=new gE(b),n0.init(),r=new P1(b,n0),VJ=new TE(b,n0,J,r),I=new C1(b,n0),VJ.reversedDepthBuffer&&E)I.buffers.depth.setReversed(!0);p=b.createFramebuffer(),e=b.createFramebuffer(),j=b.createFramebuffer(),M=new mE(b),y=new U1,m=new z1(b,n0,I,y,VJ,r,M),H0=new xE(A),L0=new u5(b),k0=new AE(b,L0),D0=new pE(b,L0,M,k0),i=new uE(b,D0,L0,k0,M),HJ=new dE(b,VJ,m),q0=new _E(y),J0=new X1(A,H0,n0,VJ,k0,q0),C0=new T1(A,y),w0=new N1,M0=new L1(n0),b0=new IE(A,H0,I,i,q,Y),y0=new M1(A,i,VJ),I0=new _1(b,M,VJ,I),x=new wE(b,n0,M),V0=new lE(b,n0,M),M.programs=J0.programs,A.capabilities=VJ,A.extensions=n0,A.properties=y,A.renderLists=w0,A.shadowMap=y0,A.state=I,A.info=M}if(F!==g9)D=new nE(F,Q.width,Q.height,H,W,Z);let z0=new LX(A,b);this.xr=z0,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let C=n0.get("WEBGL_lose_context");if(C)C.loseContext()},this.forceContextRestore=function(){let C=n0.get("WEBGL_lose_context");if(C)C.restoreContext()},this.getPixelRatio=function(){return N0},this.setPixelRatio=function(C){if(C===void 0)return;N0=C,this.setSize(l0,a,!1)},this.getSize=function(C){return C.set(l0,a)},this.setSize=function(C,v,c=!0){if(z0.isPresenting){T0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(l0=C,a=v,Q.width=Math.floor(C*N0),Q.height=Math.floor(v*N0),c===!0)Q.style.width=C+"px",Q.style.height=v+"px";if(D!==null)D.setSize(Q.width,Q.height);this.setViewport(0,0,C,v)},this.getDrawingBufferSize=function(C){return C.set(l0*N0,a*N0).floor()},this.setDrawingBufferSize=function(C,v,c){l0=C,a=v,N0=c,Q.width=Math.floor(C*c),Q.height=Math.floor(v*c),this.setViewport(0,0,C,v)},this.setEffects=function(C){if(F===g9){m0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let v=0;v<C.length;v++)if(C[v].isOutputPass===!0){T0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(W0)},this.getViewport=function(C){return C.copy(j0)},this.setViewport=function(C,v,c,V){if(C.isVector4)j0.set(C.x,C.y,C.z,C.w);else j0.set(C,v,c,V);I.viewport(W0.copy(j0).multiplyScalar(N0).round())},this.getScissor=function(C){return C.copy(S0)},this.setScissor=function(C,v,c,V){if(C.isVector4)S0.set(C.x,C.y,C.z,C.w);else S0.set(C,v,c,V);I.scissor(X0.copy(S0).multiplyScalar(N0).round())},this.getScissorTest=function(){return zJ},this.setScissorTest=function(C){I.setScissorTest(zJ=C)},this.setOpaqueSort=function(C){O0=C},this.setTransparentSort=function(C){f0=C},this.getClearColor=function(C){return C.copy(b0.getClearColor())},this.setClearColor=function(){b0.setClearColor(...arguments)},this.getClearAlpha=function(){return b0.getClearAlpha()},this.setClearAlpha=function(){b0.setClearAlpha(...arguments)},this.clear=function(C=!0,v=!0,c=!0){let V=0;if(C){let T=!1;if(u!==null){let l=u.texture.format;T=B.has(l)}if(T){let l=u.texture.type,f=R.has(l),g=b0.getClearColor(),s=b0.getClearAlpha(),Q0=g.r,o=g.g,Z0=g.b;if(f)O[0]=Q0,O[1]=o,O[2]=Z0,O[3]=s,b.clearBufferuiv(b.COLOR,0,O);else P[0]=Q0,P[1]=o,P[2]=Z0,P[3]=s,b.clearBufferiv(b.COLOR,0,P)}else V|=b.COLOR_BUFFER_BIT}if(v)V|=b.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(c)V|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(V!==0)b.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),h=C},this.dispose=function(){Q.removeEventListener("webglcontextlost",d0,!1),Q.removeEventListener("webglcontextrestored",GJ,!1),Q.removeEventListener("webglcontextcreationerror",KJ,!1),b0.dispose(),w0.dispose(),M0.dispose(),y.dispose(),H0.dispose(),i.dispose(),k0.dispose(),I0.dispose(),J0.dispose(),z0.dispose(),z0.removeEventListener("sessionstart",O6),z0.removeEventListener("sessionend",R6),j9.stop()};function d0(C){C.preventDefault(),y6("WebGLRenderer: Context Lost."),d=!0}function GJ(){y6("WebGLRenderer: Context Restored."),d=!1;let C=M.autoReset,v=y0.enabled,c=y0.autoUpdate,V=y0.needsUpdate,T=y0.type;Y0(),M.autoReset=C,y0.enabled=v,y0.autoUpdate=c,y0.needsUpdate=V,y0.type=T}function KJ(C){m0("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function X9(C){let v=C.target;v.removeEventListener("dispose",X9),V9(v)}function V9(C){t$(C),y.remove(C)}function t$(C){let v=y.get(C).programs;if(v!==void 0){if(v.forEach(function(c){J0.releaseProgram(c)}),C.isShaderMaterial)J0.releaseShaderCache(C)}}this.renderBufferDirect=function(C,v,c,V,T,l){if(v===null)v=sJ;let f=T.isMesh&&T.matrixWorld.determinantAffine()<0,g=V6(C,v,c,V,T);I.setMaterial(V,f);let s=c.index,Q0=1;if(V.wireframe===!0){if(s=D0.getWireframeAttribute(c),s===void 0)return;Q0=2}let o=c.drawRange,Z0=c.attributes.position,K0=o.start*Q0,B0=(o.start+o.count)*Q0;if(l!==null)K0=Math.max(K0,l.start*Q0),B0=Math.min(B0,(l.start+l.count)*Q0);if(s!==null)K0=Math.max(K0,0),B0=Math.min(B0,s.count);else if(Z0!==void 0&&Z0!==null)K0=Math.max(K0,0),B0=Math.min(B0,Z0.count);let u0=B0-K0;if(u0<0||u0===1/0)return;k0.setup(T,V,g,c,s);let F0,x0=x;if(s!==null)F0=L0.get(s),x0=V0,x0.setIndex(F0);if(T.isMesh)if(V.wireframe===!0)I.setLineWidth(V.wireframeLinewidth*PJ()),x0.setMode(b.LINES);else x0.setMode(b.TRIANGLES);else if(T.isLine){let i0=V.linewidth;if(i0===void 0)i0=1;if(I.setLineWidth(i0*PJ()),T.isLineSegments)x0.setMode(b.LINES);else if(T.isLineLoop)x0.setMode(b.LINE_LOOP);else x0.setMode(b.LINE_STRIP)}else if(T.isPoints)x0.setMode(b.POINTS);else if(T.isSprite)x0.setMode(b.TRIANGLES);if(T.isBatchedMesh)if(!n0.get("WEBGL_multi_draw")){let{_multiDrawStarts:i0,_multiDrawCounts:G0,_multiDrawCount:EJ}=T,WJ=s?L0.get(s).bytesPerElement:1,oJ=y.get(V).currentProgram.getUniforms();for(let u9=0;u9<EJ;u9++)oJ.setValue(b,"_gl_DrawID",u9),x0.render(i0[u9]/WJ,G0[u9])}else x0.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else if(T.isInstancedMesh)x0.renderInstances(K0,u0,T.count);else if(c.isInstancedBufferGeometry){let i0=c._maxInstanceCount!==void 0?c._maxInstanceCount:1/0,G0=Math.min(c.instanceCount,i0);x0.renderInstances(K0,u0,G0)}else x0.render(K0,u0)};function TJ(C,v,c,V){if(h!==null&&C.isNodeMaterial)h.setObject(V,C);if(e0===!0)q0.setState(C,c,!1);if(C.transparent===!0&&C.side===mJ&&C.forceSinglePass===!1)C.side=tJ,C.needsUpdate=!0,iJ(C,v,V),C.side=j8,C.needsUpdate=!0,iJ(C,v,V),C.side=mJ;else iJ(C,v,V)}this.compile=function(C,v,c=null){if(c===null)c=C;if(h!==null)h.renderStart(C,v,c);if(z=M0.get(c),z.init(v),_.push(z),c.traverseVisible(function(T){if(T.isLight&&T.layers.test(v.layers)){if(z.pushLight(T),T.castShadow)z.pushShadow(T)}}),C!==c)C.traverseVisible(function(T){if(T.isLight&&T.layers.test(v.layers)){if(z.pushLight(T),T.castShadow)z.pushShadow(T)}});if(z.setupLights(),h!==null)h.updateLights(z.state.lightsArray);if(XJ=this.localClippingEnabled,e0=q0.init(this.clippingPlanes,XJ),e0===!0)q0.setGlobalState(this.clippingPlanes,v);if(h!==null)y0.render(z.state.shadowsArray,c,v);let V=new Set;if(C.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;let l=T.material;if(l)if(Array.isArray(l))for(let f=0;f<l.length;f++){let g=l[f];TJ(g,c,v,T),V.add(g)}else TJ(l,c,v,T),V.add(l)}),z=_.pop(),h!==null)h.renderEnd();return V},this.compileAsync=function(C,v,c=null){let V=this.compile(C,v,c);return new Promise((T)=>{function l(){if(V.forEach(function(f){let s=y.get(f).currentProgram;if(s===void 0||s.isReady())V.delete(f)}),V.size===0){T(C);return}setTimeout(l,10)}if(n0.get("KHR_parallel_shader_compile")!==null)l();else setTimeout(l,10)})};let $8=null;function e$(C){if($8)$8(C)}function O6(){j9.stop()}function R6(){j9.start()}let j9=new KX;if(j9.setAnimationLoop(e$),typeof self<"u")j9.setContext(self);this.setAnimationLoop=function(C){$8=C,z0.setAnimationLoop(C),C===null?j9.stop():j9.start()},z0.addEventListener("sessionstart",O6),z0.addEventListener("sessionend",R6),this.render=function(C,v){if(v!==void 0&&v.isCamera!==!0){m0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(h!==null)h.renderStart(C,v);let c=z0.enabled===!0&&z0.isPresenting===!0,V=D!==null&&(u===null||c)&&D.begin(A,u);if(C.matrixWorldAutoUpdate===!0)C.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(z0.enabled===!0&&z0.isPresenting===!0&&(D===null||D.isCompositing()===!1)){if(z0.cameraAutoUpdate===!0)z0.updateCamera(v);v=z0.getCamera()}if(C.isScene===!0)C.onBeforeRender(A,C,v,u);if(z=M0.get(C,_.length),z.init(v),z.state.textureUnits=m.getTextureUnits(),_.push(z),$J.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),a0.setFromProjectionMatrix($J,TZ,v.reversedDepth),XJ=this.localClippingEnabled,e0=q0.init(this.clippingPlanes,XJ),L=w0.get(C,w.length),L.init(),w.push(L),z0.enabled===!0&&z0.isPresenting===!0){let f=A.xr.getDepthSensingMesh();if(f!==null)B8(f,v,-1/0,A.sortObjects)}if(B8(C,v,0,A.sortObjects),L.finish(),h!==null)h.updateLights(z.state.lightsArray);if(A.sortObjects===!0)L.sort(O0,f0);if(AJ=z0.enabled===!1||z0.isPresenting===!1||z0.hasDepthSensing()===!1,AJ)b0.addToRenderList(L,C);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(e0===!0)q0.beginShadows();let T=z.state.shadowsArray;if(y0.render(T,C,v),e0===!0)q0.endShadows();if((V&&D.hasRenderPass())===!1){let{opaque:f,transmissive:g}=L;if(z.setupLights(),v.isArrayCamera){let s=v.cameras;if(g.length>0)for(let Q0=0,o=s.length;Q0<o;Q0++){let Z0=s[Q0];kQ(f,g,C,Z0)}if(AJ)b0.render(C);for(let Q0=0,o=s.length;Q0<o;Q0++){let Z0=s[Q0];W9(L,C,Z0,Z0.viewport)}}else{if(g.length>0)kQ(f,g,C,v);if(AJ)b0.render(C);W9(L,C,v)}}if(u!==null&&$0===0)m.updateMultisampleRenderTarget(u),m.updateRenderTargetMipmap(u);if(V)D.end(A);if(C.isScene===!0)C.onAfterRender(A,C,v);if(k0.resetDefaultState(),E0=-1,t=null,_.pop(),_.length>0){if(z=_[_.length-1],m.setTextureUnits(z.state.textureUnits),e0===!0)q0.setGlobalState(A.clippingPlanes,z.state.camera)}else z=null;if(w.pop(),w.length>0)L=w[w.length-1];else L=null;if(h!==null)h.renderEnd()};function B8(C,v,c,V){if(C.visible===!1)return;if(C.layers.test(v.layers)){if(C.isGroup)c=C.renderOrder;else if(C.isLOD){if(C.autoUpdate===!0)C.update(v)}else if(C.isLightProbeGrid)z.pushLightProbeGrid(C);else if(C.isLight){if(z.pushLight(C),C.castShadow)z.pushShadow(C)}else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(a0)){if(V)LJ.setFromMatrixPosition(C.matrixWorld).applyMatrix4($J);let f=i.update(C),g=C.material;if(g.visible)L.push(C,f,g,c,LJ.z,null,v)}}else if(C.isMesh||C.isLine||C.isPoints){if(!C.frustumCulled||C.intersectsFrustum(a0)){let f=i.update(C),g=C.material;if(V){if(C.boundingSphere!==void 0){if(C.boundingSphere===null)C.computeBoundingSphere();LJ.copy(C.boundingSphere.center)}else{if(f.boundingSphere===null)f.computeBoundingSphere();LJ.copy(f.boundingSphere.center)}LJ.applyMatrix4(C.matrixWorld).applyMatrix4($J)}if(Array.isArray(g)){let s=f.groups;for(let Q0=0,o=s.length;Q0<o;Q0++){let Z0=s[Q0],K0=g[Z0.materialIndex];if(K0&&K0.visible)L.push(C,f,K0,c,LJ.z,Z0,v)}}else if(g.visible)L.push(C,f,g,c,LJ.z,null,v)}}}let l=C.children;for(let f=0,g=l.length;f<g;f++)B8(l[f],v,c,V)}function W9(C,v,c,V){let{opaque:T,transmissive:l,transparent:f}=C;if(z.setupLightsView(c),e0===!0)q0.setGlobalState(A.clippingPlanes,c);if(V)I.viewport(W0.copy(V));if(T.length>0)s8(T,v,c);if(l.length>0)s8(l,v,c);if(f.length>0)s8(f,v,c);I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function kQ(C,v,c,V){if((c.isScene===!0?c.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[V.id]===void 0){let K0=n0.has("EXT_color_buffer_half_float")||n0.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[V.id]=new E9(1,1,{generateMipmaps:!0,type:K0?o9:g9,minFilter:i9,samples:Math.max(4,VJ.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:r0.workingColorSpace})}let l=z.state.transmissionRenderTarget[V.id],f=V.viewport||W0;l.setSize(f.z*A.transmissionResolutionScale,f.w*A.transmissionResolutionScale);let g=A.getRenderTarget(),s=A.getActiveCubeFace(),Q0=A.getActiveMipmapLevel();if(A.setRenderTarget(l),A.getClearColor(_0),RJ=A.getClearAlpha(),RJ<1)A.setClearColor(16777215,0.5);if(A.clear(),AJ)b0.render(c);let o=A.toneMapping;A.toneMapping=b9;let Z0=V.viewport;if(V.viewport!==void 0)V.viewport=void 0;if(z.setupLightsView(V),e0===!0)q0.setGlobalState(A.clippingPlanes,V);if(s8(C,c,V),m.updateMultisampleRenderTarget(l),m.updateRenderTargetMipmap(l),n0.has("WEBGL_multisampled_render_to_texture")===!1){let K0=!1;for(let B0=0,u0=v.length;B0<u0;B0++){let F0=v[B0],{object:x0,geometry:i0,material:G0,group:EJ}=F0;if(G0.side===mJ&&x0.layers.test(V.layers)){let WJ=G0.side;G0.side=tJ,G0.needsUpdate=!0,L6(x0,c,V,i0,G0,EJ),G0.side=WJ,G0.needsUpdate=!0,K0=!0}}if(K0===!0)m.updateMultisampleRenderTarget(l),m.updateRenderTargetMipmap(l)}if(A.setRenderTarget(g,s,Q0),A.setClearColor(_0,RJ),Z0!==void 0)V.viewport=Z0;A.toneMapping=o}function s8(C,v,c){let V=v.isScene===!0?v.overrideMaterial:null;for(let T=0,l=C.length;T<l;T++){let f=C[T],{object:g,geometry:s,group:Q0}=f,o=f.material;if(o.allowOverride===!0&&V!==null)o=V;if(g.layers.test(c.layers))L6(g,v,c,s,o,Q0)}}function L6(C,v,c,V,T,l){if(h!==null&&T.isNodeMaterial)h.setObject(C,T);if(C.onBeforeRender(A,v,c,V,T,l),C.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),T.onBeforeRender(A,v,c,V,C,l),T.transparent===!0&&T.side===mJ&&T.forceSinglePass===!1)T.side=tJ,T.needsUpdate=!0,A.renderBufferDirect(c,v,V,T,C,l),T.side=j8,T.needsUpdate=!0,A.renderBufferDirect(c,v,V,T,C,l),T.side=mJ;else A.renderBufferDirect(c,v,V,T,C,l);C.onAfterRender(A,v,c,V,T,l)}function iJ(C,v,c){if(v.isScene!==!0)v=sJ;let V=y.get(C),T=z.state.lights,l=z.state.shadowsArray,f=T.state.version,g=J0.getParameters(C,T.state,l,v,c,z.state.lightProbeGridArray),s=J0.getProgramCacheKey(g),Q0=V.programs;V.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?v.environment:null,V.fog=v.fog;let o=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;if(V.envMap=H0.get(C.envMap||V.environment,o),V.envMapRotation=V.environment!==null&&C.envMap===null?v.environmentRotation:C.envMapRotation,Q0===void 0)C.addEventListener("dispose",X9),Q0=new Map,V.programs=Q0;let Z0=Q0.get(s);if(Z0!==void 0){if(V.currentProgram===Z0&&V.lightsStateVersion===f)return D7(C,g),Z0}else{if(g.uniforms=J0.getUniforms(C),h!==null&&C.isNodeMaterial)h.build(C,c,g);C.onBeforeCompile(g,A),Z0=J0.acquireProgram(g,s),Q0.set(s,Z0),V.uniforms=g.uniforms}let K0=V.uniforms;if(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)K0.clippingPlanes=q0.uniform;if(D7(C,g),V.needsLights=MQ(C),V.lightsStateVersion=f,V.needsLights)K0.ambientLightColor.value=T.state.ambient,K0.lightProbe.value=T.state.probe,K0.sunLights.value=T.state.sun,K0.sunLightShadows.value=T.state.sunShadow,K0.directionalLights.value=T.state.directional,K0.directionalLightShadows.value=T.state.directionalShadow,K0.spotLights.value=T.state.spot,K0.spotLightShadows.value=T.state.spotShadow,K0.rectAreaLights.value=T.state.rectArea,K0.ltc_1.value=T.state.rectAreaLTC1,K0.ltc_2.value=T.state.rectAreaLTC2,K0.pointLights.value=T.state.point,K0.pointLightShadows.value=T.state.pointShadow,K0.hemisphereLights.value=T.state.hemi,K0.sunShadowMatrix.value=T.state.sunShadowMatrix,K0.sunShadowCascade.value=T.state.sunShadowCascade,K0.directionalShadowMatrix.value=T.state.directionalShadowMatrix,K0.spotLightMatrix.value=T.state.spotLightMatrix,K0.spotLightMap.value=T.state.spotLightMap,K0.pointShadowMatrix.value=T.state.pointShadowMatrix;return V.lightProbeGrid=z.state.lightProbeGridArray.length>0,V.currentProgram=Z0,V.uniformsList=null,Z0}function i8(C){if(C.uniformsList===null){let v=C.currentProgram.getUniforms();C.uniformsList=NQ.seqWithValue(v.seq,C.uniforms)}return C.uniformsList}function D7(C,v){let c=y.get(C);c.outputColorSpace=v.outputColorSpace,c.batching=v.batching,c.batchingColor=v.batchingColor,c.instancing=v.instancing,c.instancingColor=v.instancingColor,c.instancingMorph=v.instancingMorph,c.skinning=v.skinning,c.morphTargets=v.morphTargets,c.morphNormals=v.morphNormals,c.morphColors=v.morphColors,c.morphTargetsCount=v.morphTargetsCount,c.numClippingPlanes=v.numClippingPlanes,c.numIntersection=v.numClipIntersection,c.vertexAlphas=v.vertexAlphas,c.vertexTangents=v.vertexTangents,c.toneMapping=v.toneMapping}function M7(C,v){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;k.setFromMatrixPosition(v.matrixWorld);for(let c=0,V=C.length;c<V;c++){let T=C[c];if(T.texture!==null&&T.boundingBox.containsPoint(k))return T}return null}function V6(C,v,c,V,T){if(v.isScene!==!0)v=sJ;m.resetTextureUnits();let l=v.fog,f=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?v.environment:null,g=u===null?A.outputColorSpace:u.isXRRenderTarget===!0?u.texture.colorSpace:r0.workingColorSpace,s=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Q0=H0.get(V.envMap||f,s),o=V.vertexColors===!0&&!!c.attributes.color&&c.attributes.color.itemSize===4,Z0=!!c.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),K0=!!c.morphAttributes.position,B0=!!c.morphAttributes.normal,u0=!!c.morphAttributes.color,F0=b9;if(V.toneMapped){if(u===null||u.isXRRenderTarget===!0)F0=A.toneMapping}let x0=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,i0=x0!==void 0?x0.length:0,G0=y.get(V),EJ=z.state.lights;if(e0===!0){if(XJ===!0||C!==t){let DJ=C===t&&V.id===E0;q0.setState(V,C,DJ)}}let WJ=!1;if(V.version===G0.__version){if(G0.needsLights&&G0.lightsStateVersion!==EJ.state.version)WJ=!0;else if(G0.outputColorSpace!==g)WJ=!0;else if(T.isBatchedMesh&&G0.batching===!1)WJ=!0;else if(!T.isBatchedMesh&&G0.batching===!0)WJ=!0;else if(T.isBatchedMesh&&G0.batchingColor===!0&&T._colorsTexture===null)WJ=!0;else if(T.isBatchedMesh&&G0.batchingColor===!1&&T._colorsTexture!==null)WJ=!0;else if(T.isInstancedMesh&&G0.instancing===!1)WJ=!0;else if(!T.isInstancedMesh&&G0.instancing===!0)WJ=!0;else if(T.isSkinnedMesh&&G0.skinning===!1)WJ=!0;else if(!T.isSkinnedMesh&&G0.skinning===!0)WJ=!0;else if(T.isInstancedMesh&&G0.instancingColor===!0&&T.instanceColor===null)WJ=!0;else if(T.isInstancedMesh&&G0.instancingColor===!1&&T.instanceColor!==null)WJ=!0;else if(T.isInstancedMesh&&G0.instancingMorph===!0&&T.morphTexture===null)WJ=!0;else if(T.isInstancedMesh&&G0.instancingMorph===!1&&T.morphTexture!==null)WJ=!0;else if(G0.envMap!==Q0)WJ=!0;else if(V.fog===!0&&G0.fog!==l)WJ=!0;else if(G0.numClippingPlanes!==void 0&&(G0.numClippingPlanes!==q0.numPlanes||G0.numIntersection!==q0.numIntersection))WJ=!0;else if(G0.vertexAlphas!==o)WJ=!0;else if(G0.vertexTangents!==Z0)WJ=!0;else if(G0.morphTargets!==K0)WJ=!0;else if(G0.morphNormals!==B0)WJ=!0;else if(G0.morphColors!==u0)WJ=!0;else if(G0.toneMapping!==F0)WJ=!0;else if(G0.morphTargetsCount!==i0)WJ=!0;else if(!!G0.lightProbeGrid!==z.state.lightProbeGridArray.length>0)WJ=!0}else WJ=!0,G0.__version=V.version;let oJ=G0.currentProgram;if(WJ===!0){if(oJ=iJ(V,v,T),h&&V.isNodeMaterial)h.onUpdateProgram(V,oJ,G0)}let u9=!1,k8=!1,C7=!1,BJ=oJ.getUniforms(),_J=G0.uniforms;if(I.useProgram(oJ.program))u9=!0,k8=!0,C7=!0;if(V.id!==E0)E0=V.id,k8=!0;if(G0.needsLights){let DJ=M7(z.state.lightProbeGridArray,T);if(G0.lightProbeGrid!==DJ)G0.lightProbeGrid=DJ,k8=!0}if(u9||t!==C){if(I.buffers.depth.getReversed()&&C.reversedDepth!==!0)C._reversedDepth=!0,C.updateProjectionMatrix();BJ.setValue(b,"projectionMatrix",C.projectionMatrix),BJ.setValue(b,"viewMatrix",C.matrixWorldInverse);let M8=BJ.map.cameraPosition;if(M8!==void 0)M8.setValue(b,yJ.setFromMatrixPosition(C.matrixWorld));if(VJ.logarithmicDepthBuffer)BJ.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2));if(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)BJ.setValue(b,"isOrthographic",C.isOrthographicCamera===!0);if(t!==C)t=C,k8=!0,C7=!0}if(G0.needsLights){if(EJ.state.sunShadowMap.length>0)BJ.setValue(b,"sunShadowMap",EJ.state.sunShadowMap,m);if(EJ.state.directionalShadowMap.length>0)BJ.setValue(b,"directionalShadowMap",EJ.state.directionalShadowMap,m);if(EJ.state.spotShadowMap.length>0)BJ.setValue(b,"spotShadowMap",EJ.state.spotShadowMap,m);if(EJ.state.pointShadowMap.length>0)BJ.setValue(b,"pointShadowMap",EJ.state.pointShadowMap,m)}if(T.isSkinnedMesh){BJ.setOptional(b,T,"bindMatrix"),BJ.setOptional(b,T,"bindMatrixInverse");let DJ=T.skeleton;if(DJ){if(DJ.boneTexture===null)DJ.computeBoneTexture();BJ.setValue(b,"boneTexture",DJ.boneTexture,m)}}if(T.isBatchedMesh){if(BJ.setOptional(b,T,"batchingTexture"),BJ.setValue(b,"batchingTexture",T._matricesTexture,m),BJ.setOptional(b,T,"batchingIdTexture"),BJ.setValue(b,"batchingIdTexture",T._indirectTexture,m),BJ.setOptional(b,T,"batchingColorTexture"),T._colorsTexture!==null)BJ.setValue(b,"batchingColorTexture",T._colorsTexture,m)}let D8=c.morphAttributes;if(D8.position!==void 0||D8.normal!==void 0||D8.color!==void 0)HJ.update(T,c,oJ);if(k8||G0.receiveShadow!==T.receiveShadow)G0.receiveShadow=T.receiveShadow,BJ.setValue(b,"receiveShadow",T.receiveShadow);if((V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&v.environment!==null)_J.envMapIntensity.value=v.environmentIntensity;if(_J.dfgLUT!==void 0)_J.dfgLUT.value=j1();if(k8){if(BJ.setValue(b,"toneMappingExposure",A.toneMappingExposure),G0.needsLights)DQ(_J,C7);if(l&&V.fog===!0)C0.refreshFogUniforms(_J,l);if(C0.refreshMaterialUniforms(_J,V,N0,a,z.state.transmissionRenderTarget[C.id]),G0.needsLights&&G0.lightProbeGrid){let DJ=G0.lightProbeGrid;_J.probesSH.value=DJ.texture,_J.probesMin.value.copy(DJ.boundingBox.min),_J.probesMax.value.copy(DJ.boundingBox.max),_J.probesResolution.value.copy(DJ.resolution)}NQ.upload(b,i8(G0),_J,m)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0)NQ.upload(b,i8(G0),_J,m),V.uniformsNeedUpdate=!1;if(V.isSpriteMaterial)BJ.setValue(b,"center",T.center);if(BJ.setValue(b,"modelViewMatrix",T.modelViewMatrix),BJ.setValue(b,"normalMatrix",T.normalMatrix),BJ.setValue(b,"modelMatrix",T.matrixWorld),V.uniformsGroups!==void 0){let DJ=V.uniformsGroups;for(let M8=0,z7=DJ.length;M8<z7;M8++){let bK=DJ[M8];I0.update(bK,oJ),I0.bind(bK,oJ)}}return oJ}function DQ(C,v){C.ambientLightColor.needsUpdate=v,C.lightProbe.needsUpdate=v,C.sunLights.needsUpdate=v,C.sunLightShadows.needsUpdate=v,C.directionalLights.needsUpdate=v,C.directionalLightShadows.needsUpdate=v,C.pointLights.needsUpdate=v,C.pointLightShadows.needsUpdate=v,C.spotLights.needsUpdate=v,C.spotLightShadows.needsUpdate=v,C.rectAreaLights.needsUpdate=v,C.hemisphereLights.needsUpdate=v}function MQ(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return n},this.getActiveMipmapLevel=function(){return $0},this.getRenderTarget=function(){return u},this.setRenderTargetTextures=function(C,v,c){let V=y.get(C);if(V.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1)V.__useRenderToTexture=!1;y.get(C.texture).__webglTexture=v,y.get(C.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:c,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,v){let c=y.get(C);c.__webglFramebuffer=v,c.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(C,v=0,c=0){u=C,n=v,$0=c;let V=null,T=!1,l=!1;if(C){let g=y.get(C);if(g.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(b.FRAMEBUFFER,g.__webglFramebuffer),W0.copy(C.viewport),X0.copy(C.scissor),h0=C.scissorTest,I.viewport(W0),I.scissor(X0),I.setScissorTest(h0),E0=-1;return}else if(g.__webglFramebuffer===void 0)m.setupRenderTarget(C);else if(g.__hasExternalTextures)m.rebindTextures(C,y.get(C.texture).__webglTexture,y.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let o=C.depthTexture;if(g.__boundDepthTexture!==o){if(o!==null&&y.has(o)&&(C.width!==o.image.width||C.height!==o.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");m.setupDepthRenderbuffer(C)}}let s=C.texture;if(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)l=!0;let Q0=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget){if(Array.isArray(Q0[v]))V=Q0[v][c];else V=Q0[v];T=!0}else if(C.samples>0&&m.useMultisampledRTT(C)===!1)V=y.get(C).__webglMultisampledFramebuffer;else if(Array.isArray(Q0))V=Q0[c];else V=Q0;W0.copy(C.viewport),X0.copy(C.scissor),h0=C.scissorTest}else W0.copy(j0).multiplyScalar(N0).floor(),X0.copy(S0).multiplyScalar(N0).floor(),h0=zJ;if(c!==0)V=p;if(I.bindFramebuffer(b.FRAMEBUFFER,V))I.drawBuffers(C,V);if(I.viewport(W0),I.scissor(X0),I.setScissorTest(h0),T){let g=y.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+v,g.__webglTexture,c)}else if(l){let g=v;for(let s=0;s<C.textures.length;s++){let Q0=y.get(C.textures[s]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+s,Q0.__webglTexture,c,g)}}else if(C!==null&&c!==0){let g=y.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,g.__webglTexture,c)}E0=-1};function B6(C){let v=y.get(C);if(v.__readFormat!==C.format||v.__readType!==C.type)v.__readFormat=C.format,v.__readType=C.type,v.__formatReadable=VJ.textureFormatReadable(C.format),v.__typeReadable=VJ.textureTypeReadable(C.type);return v}if(this.readRenderTargetPixels=function(C,v,c,V,T,l,f,g=0){if(!(C&&C.isWebGLRenderTarget)){m0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let s=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&f!==void 0)s=s[f];if(s){I.bindFramebuffer(b.FRAMEBUFFER,s);try{let Q0=C.textures[g],o=Q0.format,Z0=Q0.type;if(C.textures.length>1)b.readBuffer(b.COLOR_ATTACHMENT0+g);let K0=B6(Q0);if(K0.__formatReadable===!1){m0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(K0.__typeReadable===!1){m0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=C.width-V&&(c>=0&&c<=C.height-T))b.readPixels(v,c,V,T,r.convert(o),r.convert(Z0),l)}finally{let Q0=u!==null?y.get(u).__webglFramebuffer:null;I.bindFramebuffer(b.FRAMEBUFFER,Q0)}}},this.readRenderTargetPixelsAsync=async function(C,v,c,V,T,l,f,g=0){if(!(C&&C.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let s=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&f!==void 0)s=s[f];if(s)if(v>=0&&v<=C.width-V&&(c>=0&&c<=C.height-T)){I.bindFramebuffer(b.FRAMEBUFFER,s);let Q0=C.textures[g],o=Q0.format,Z0=Q0.type;if(C.textures.length>1)b.readBuffer(b.COLOR_ATTACHMENT0+g);let K0=B6(Q0);if(K0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(K0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let B0=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,B0),b.bufferData(b.PIXEL_PACK_BUFFER,l.byteLength,b.STREAM_READ),b.readPixels(v,c,V,T,r.convert(o),r.convert(Z0),0),b.bindBuffer(b.PIXEL_PACK_BUFFER,null);let u0=u!==null?y.get(u).__webglFramebuffer:null;I.bindFramebuffer(b.FRAMEBUFFER,u0);let F0=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await MY(b,F0,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,B0),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,l),b.bindBuffer(b.PIXEL_PACK_BUFFER,null),b.deleteBuffer(B0),b.deleteSync(F0),l}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,v=null,c=0){let V=Math.pow(2,-c),T=Math.floor(C.image.width*V),l=Math.floor(C.image.height*V),f=v!==null?v.x:0,g=v!==null?v.y:0;m.setTexture2D(C,0),b.copyTexSubImage2D(b.TEXTURE_2D,c,0,0,f,g,T,l),I.unbindTexture()},this.copyTextureToTexture=function(C,v,c=null,V=null,T=0,l=0){let f,g,s,Q0,o,Z0,K0,B0,u0,F0=C.isCompressedTexture?C.mipmaps[l]:C.image;if(c!==null)f=c.max.x-c.min.x,g=c.max.y-c.min.y,s=c.isBox3?c.max.z-c.min.z:1,Q0=c.min.x,o=c.min.y,Z0=c.isBox3?c.min.z:0;else{let _J=Math.pow(2,-T);if(f=Math.floor(F0.width*_J),g=Math.floor(F0.height*_J),C.isDataArrayTexture)s=F0.depth;else if(C.isData3DTexture)s=Math.floor(F0.depth*_J);else s=1;Q0=0,o=0,Z0=0}if(V!==null)K0=V.x,B0=V.y,u0=V.z;else K0=0,B0=0,u0=0;let x0=r.convert(v.format),i0=r.convert(v.type),G0;if(v.isData3DTexture)m.setTexture3D(v,0),G0=b.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)m.setTexture2DArray(v,0),G0=b.TEXTURE_2D_ARRAY;else m.setTexture2D(v,0),G0=b.TEXTURE_2D;I.activeTexture(b.TEXTURE0),I.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,v.flipY),I.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),I.pixelStorei(b.UNPACK_ALIGNMENT,v.unpackAlignment);let EJ=I.getParameter(b.UNPACK_ROW_LENGTH),WJ=I.getParameter(b.UNPACK_IMAGE_HEIGHT),oJ=I.getParameter(b.UNPACK_SKIP_PIXELS),u9=I.getParameter(b.UNPACK_SKIP_ROWS),k8=I.getParameter(b.UNPACK_SKIP_IMAGES);I.pixelStorei(b.UNPACK_ROW_LENGTH,F0.width),I.pixelStorei(b.UNPACK_IMAGE_HEIGHT,F0.height),I.pixelStorei(b.UNPACK_SKIP_PIXELS,Q0),I.pixelStorei(b.UNPACK_SKIP_ROWS,o),I.pixelStorei(b.UNPACK_SKIP_IMAGES,Z0);let C7=C.isDataArrayTexture||C.isData3DTexture,BJ=v.isDataArrayTexture||v.isData3DTexture;if(C.isDepthTexture){let _J=y.get(C),D8=y.get(v),DJ=y.get(_J.__renderTarget),M8=y.get(D8.__renderTarget);I.bindFramebuffer(b.READ_FRAMEBUFFER,DJ.__webglFramebuffer),I.bindFramebuffer(b.DRAW_FRAMEBUFFER,M8.__webglFramebuffer);for(let z7=0;z7<s;z7++){if(C7)b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,y.get(C).__webglTexture,T,Z0+z7),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,y.get(v).__webglTexture,l,u0+z7);b.blitFramebuffer(Q0,o,f,g,K0,B0,f,g,b.DEPTH_BUFFER_BIT,b.NEAREST)}I.bindFramebuffer(b.READ_FRAMEBUFFER,null),I.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(T!==0||C.isRenderTargetTexture||y.has(C)){let _J=y.get(C),D8=y.get(v);I.bindFramebuffer(b.READ_FRAMEBUFFER,e),I.bindFramebuffer(b.DRAW_FRAMEBUFFER,j);for(let DJ=0;DJ<s;DJ++){if(C7)b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,_J.__webglTexture,T,Z0+DJ);else b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,_J.__webglTexture,T);if(BJ)b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,D8.__webglTexture,l,u0+DJ);else b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,D8.__webglTexture,l);if(T!==0)b.blitFramebuffer(Q0,o,f,g,K0,B0,f,g,b.COLOR_BUFFER_BIT,b.NEAREST);else if(BJ)b.copyTexSubImage3D(G0,l,K0,B0,u0+DJ,Q0,o,f,g);else b.copyTexSubImage2D(G0,l,K0,B0,Q0,o,f,g)}I.bindFramebuffer(b.READ_FRAMEBUFFER,null),I.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(BJ)if(C.isDataTexture||C.isData3DTexture)b.texSubImage3D(G0,l,K0,B0,u0,f,g,s,x0,i0,F0.data);else if(v.isCompressedArrayTexture)b.compressedTexSubImage3D(G0,l,K0,B0,u0,f,g,s,x0,F0.data);else b.texSubImage3D(G0,l,K0,B0,u0,f,g,s,x0,i0,F0);else if(C.isDataTexture)b.texSubImage2D(b.TEXTURE_2D,l,K0,B0,f,g,x0,i0,F0.data);else if(C.isCompressedTexture)b.compressedTexSubImage2D(b.TEXTURE_2D,l,K0,B0,F0.width,F0.height,x0,F0.data);else b.texSubImage2D(b.TEXTURE_2D,l,K0,B0,f,g,x0,i0,F0);if(I.pixelStorei(b.UNPACK_ROW_LENGTH,EJ),I.pixelStorei(b.UNPACK_IMAGE_HEIGHT,WJ),I.pixelStorei(b.UNPACK_SKIP_PIXELS,oJ),I.pixelStorei(b.UNPACK_SKIP_ROWS,u9),I.pixelStorei(b.UNPACK_SKIP_IMAGES,k8),l===0&&v.generateMipmaps)b.generateMipmap(G0);I.unbindTexture()},this.initRenderTarget=function(C){if(y.get(C).__webglFramebuffer===void 0)m.setupRenderTarget(C)},this.initTexture=function(C){if(C.isCubeTexture)m.setTextureCube(C,0);else if(C.isData3DTexture)m.setTexture3D(C,0);else if(C.isDataArrayTexture||C.isCompressedArrayTexture)m.setTexture2DArray(C,0);else m.setTexture2D(C,0);I.unbindTexture()},this.resetState=function(){n=0,$0=0,u=null,I.reset(),k0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return TZ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=r0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=r0._getUnpackColorSpace()}}function kX(J,Q=!1){let $=J[0].index!==null,W=new Set(Object.keys(J[0].attributes)),Z=new Set(Object.keys(J[0].morphAttributes)),K={},H={},Y=J[0].morphTargetsRelative,X=new CJ,U=0;for(let G=0;G<J.length;++G){let E=J[G],N=0;if($!==(E.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let q in E.attributes){if(!W.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+'. All geometries must have compatible attributes; make sure "'+q+'" attribute exists among all geometries, or in none of them.'),null;if(K[q]===void 0)K[q]=[];K[q].push(E.attributes[q]),N++}if(N!==W.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". Make sure all geometries have the same number of attributes."),null;if(Y!==E.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let q in E.morphAttributes){if(!Z.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+".  .morphAttributes must be consistent throughout all geometries."),null;if(H[q]===void 0)H[q]=[];H[q].push(E.morphAttributes[q])}if(Q){let q;if($)q=E.index.count;else if(E.attributes.position!==void 0)q=E.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". The geometry must have either an index or a position attribute"),null;X.addGroup(U,q,G),U+=q}}if($){let G=0,E=[];for(let N=0;N<J.length;++N){let q=J[N].index;for(let F=0;F<q.count;++F)E.push(q.getX(F)+G);G+=J[N].attributes.position.count}X.setIndex(E)}for(let G in K){let E=BX(K[G]);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+G+" attribute."),null;X.setAttribute(G,E)}for(let G in H){let E=H[G][0].length;if(E===0)continue;X.morphAttributes=X.morphAttributes||{},X.morphAttributes[G]=[];for(let N=0;N<E;++N){let q=[];for(let B=0;B<H[G].length;++B)q.push(H[G][B][N]);let F=BX(q);if(!F)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+G+" morphAttribute."),null;X.morphAttributes[G].push(F)}}return X}function BX(J){let Q,$,W,Z=-1,K=0;for(let U=0;U<J.length;++U){let G=J[U];if(Q===void 0)Q=G.array.constructor;if(Q!==G.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if($===void 0)$=G.itemSize;if($!==G.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(W===void 0)W=G.normalized;if(W!==G.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(Z===-1)Z=G.gpuType;if(Z!==G.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;K+=G.count*$}let H=new Q(K),Y=new bJ(H,$,W),X=0;for(let U=0;U<J.length;++U){let G=J[U];if(G.isInterleavedBufferAttribute){let E=X/$;for(let N=0,q=G.count;N<q;N++)for(let F=0;F<$;F++){let B=G.getComponent(N,F);Y.setComponent(N+E,F,B)}}else H.set(G.array,X);X+=G.count*$}if(Z!==void 0)Y.gpuType=Z;return Y}function OK(J,Q){if(Q===PZ)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===r7||Q===m6){let $=J.getIndex();if($===null){let K=[],H=J.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)K.push(Y);J.setIndex(K),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let W=$.count-2,Z=[];if(Q===r7)for(let K=1;K<=W;K++)Z.push($.getX(0)),Z.push($.getX(K)),Z.push($.getX(K+1));else for(let K=0;K<W;K++)if(K%2===0)Z.push($.getX(K)),Z.push($.getX(K+1)),Z.push($.getX(K+2));else Z.push($.getX(K+2)),Z.push($.getX(K+1)),Z.push($.getX(K));if(Z.length/3!==W)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(Z),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function m$(J){let Q=new Map,$=new Map,W=J.clone();return DX(J,W,function(Z,K){Q.set(K,Z),$.set(Z,K)}),W.traverse(function(Z){if(!Z.isSkinnedMesh)return;let K=Z,H=Q.get(Z),Y=H.skeleton.bones;K.skeleton=H.skeleton.clone(),K.bindMatrix.copy(H.bindMatrix),K.skeleton.bones=Y.map(function(X){return $.get(X)}),K.bind(K.skeleton,K.bindMatrix)}),W}function DX(J,Q,$){$(J,Q);for(let W=0;W<J.children.length;W++)DX(J.children[W],Q.children[W],$)}class MK extends F8{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new TX(Q)}),this.register(function(Q){return new _X(Q)}),this.register(function(Q){return new gX(Q)}),this.register(function(Q){return new pX(Q)}),this.register(function(Q){return new lX(Q)}),this.register(function(Q){return new jX(Q)}),this.register(function(Q){return new yX(Q)}),this.register(function(Q){return new vX(Q)}),this.register(function(Q){return new fX(Q)}),this.register(function(Q){return new wX(Q)}),this.register(function(Q){return new hX(Q)}),this.register(function(Q){return new SX(Q)}),this.register(function(Q){return new xX(Q)}),this.register(function(Q){return new bX(Q)}),this.register(function(Q){return new IX(Q)}),this.register(function(Q){return new BK(Q,QJ.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new BK(Q,QJ.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new mX(Q)})}load(J,Q,$,W){let Z=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let X=d8.extractUrlBase(J);K=d8.resolveURL(X,this.path)}else K=d8.extractUrlBase(J);this.manager.itemStart(J);let H=function(X){if(W)W(X);else console.error(X);Z.manager.itemError(J),Z.manager.itemEnd(J)},Y=new ZQ(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{Z.parse(X,K,function(U){Q(U),Z.manager.itemEnd(J)},H)}catch(U){H(U)}},$,H)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,W){let Z,K={},H={},Y=new TextDecoder;if(typeof J==="string")Z=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===dX){try{K[QJ.KHR_BINARY_GLTF]=new uX(J)}catch(G){if(W)W(G);return}Z=JSON.parse(K[QJ.KHR_BINARY_GLTF].content)}else Z=JSON.parse(Y.decode(J));else Z=J;if(Z.asset===void 0||Z.asset.version[0]<2){if(W)W(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let X=new oX(Z,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});X.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](X);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");H[G.name]=G,K[G.name]=!0}if(Z.extensionsUsed)for(let U=0;U<Z.extensionsUsed.length;++U){let G=Z.extensionsUsed[U],E=Z.extensionsRequired||[];switch(G){case QJ.KHR_MATERIALS_UNLIT:K[G]=new AX;break;case QJ.KHR_DRACO_MESH_COMPRESSION:K[G]=new cX(Z,this.dracoLoader);break;case QJ.KHR_TEXTURE_TRANSFORM:K[G]=new nX;break;case QJ.KHR_MESH_QUANTIZATION:K[G]=new sX;break;default:if(E.indexOf(G)>=0&&H[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}X.setExtensions(K),X.setPlugins(H),X.parse($,W)}parseAsync(J,Q){let $=this;return new Promise(function(W,Z){$.parse(J,Q,W,Z)})}}function y1(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function jJ(J,Q,$){let W=J.json.materials[Q];if(W.extensions&&W.extensions[$])return W.extensions[$];return null}var QJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class IX{constructor(J){this.parser=J,this.name=QJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(Z.extensions&&Z.extensions[this.name]&&Z.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,Z.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,W=Q.cache.get($);if(W)return W;let Z=Q.json,Y=((Z.extensions&&Z.extensions[this.name]||{}).lights||[])[J],X,U=new v0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],N9);let G=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":X=new H6(U),X.target.position.set(0,0,-1),X.add(X.target);break;case"point":X=new m8(U),X.distance=G;break;case"spot":X=new K6(U),X.distance=G,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,X.angle=Y.spot.outerConeAngle,X.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,X.target.position.set(0,0,-1),X.add(X.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(X.position.set(0,0,0),e9(X,Y),Y.intensity!==void 0)X.intensity=Y.intensity;return X.name=Q.createUniqueName(Y.name||"light_"+J),W=Promise.resolve(X),Q.cache.add($,W),W}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,Z=$.json.nodes[J],H=(Z.extensions&&Z.extensions[this.name]||{}).light;if(H===void 0)return null;return this._loadLight(H).then(function(Y){return $._getNodeRef(Q.cache,H,Y)})}}class AX{constructor(){this.name=QJ.KHR_MATERIALS_UNLIT}getMaterialType(){return nJ}extendParams(J,Q,$){let W=[];J.color=new v0(1,1,1),J.opacity=1;let Z=Q.pbrMetallicRoughness;if(Z){if(Array.isArray(Z.baseColorFactor)){let K=Z.baseColorFactor;J.color.setRGB(K[0],K[1],K[2],N9),J.opacity=K[3]}if(Z.baseColorTexture!==void 0)W.push($.assignTexture(J,"map",Z.baseColorTexture,Z9))}return Promise.all(W)}}class wX{constructor(J){this.parser=J,this.name=QJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=jJ(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class TX{constructor(J){this.parser=J,this.name=QJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return jJ(this.parser,J,this.name)!==null?O9:null}extendMaterialParams(J,Q){let $=jJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(W.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let Z=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new U0(Z,Z)}}return Promise.all(W)}}class _X{constructor(J){this.parser=J,this.name=QJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){return jJ(this.parser,J,this.name)!==null?O9:null}extendMaterialParams(J,Q){let $=jJ(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class SX{constructor(J){this.parser=J,this.name=QJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return jJ(this.parser,J,this.name)!==null?O9:null}extendMaterialParams(J,Q){let $=jJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(W)}}class jX{constructor(J){this.parser=J,this.name=QJ.KHR_MATERIALS_SHEEN}getMaterialType(J){return jJ(this.parser,J,this.name)!==null?O9:null}extendMaterialParams(J,Q){let $=jJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.sheenColor=new v0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let Z=$.sheenColorFactor;Q.sheenColor.setRGB(Z[0],Z[1],Z[2],N9)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,Z9));if($.sheenRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(W)}}class yX{constructor(J){this.parser=J,this.name=QJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return jJ(this.parser,J,this.name)!==null?O9:null}extendMaterialParams(J,Q){let $=jJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)W.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(W)}}class vX{constructor(J){this.parser=J,this.name=QJ.KHR_MATERIALS_VOLUME}getMaterialType(J){return jJ(this.parser,J,this.name)!==null?O9:null}extendMaterialParams(J,Q){let $=jJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let Z=$.attenuationColor||[1,1,1];return Q.attenuationColor=new v0().setRGB(Z[0],Z[1],Z[2],N9),Promise.all(W)}}class fX{constructor(J){this.parser=J,this.name=QJ.KHR_MATERIALS_IOR}getMaterialType(J){return jJ(this.parser,J,this.name)!==null?O9:null}extendMaterialParams(J,Q){let $=jJ(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class hX{constructor(J){this.parser=J,this.name=QJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){return jJ(this.parser,J,this.name)!==null?O9:null}extendMaterialParams(J,Q){let $=jJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let Z=$.specularColorFactor||[1,1,1];if(Q.specularColor=new v0().setRGB(Z[0],Z[1],Z[2],N9),$.specularColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,Z9));return Promise.all(W)}}class bX{constructor(J){this.parser=J,this.name=QJ.EXT_MATERIALS_BUMP}getMaterialType(J){return jJ(this.parser,J,this.name)!==null?O9:null}extendMaterialParams(J,Q){let $=jJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)W.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(W)}}class xX{constructor(J){this.parser=J,this.name=QJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return jJ(this.parser,J,this.name)!==null?O9:null}extendMaterialParams(J,Q){let $=jJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)W.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(W)}}class gX{constructor(J){this.parser=J,this.name=QJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,W=$.textures[J];if(!W.extensions||!W.extensions[this.name])return null;let Z=W.extensions[this.name],K=Q.options.ktx2Loader;if(!K)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,Z.source,K)}}class pX{constructor(J){this.parser=J,this.name=QJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class lX{constructor(J){this.parser=J,this.name=QJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class BK{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let W=$.extensions[this.name],Z=this.parser.getDependency("buffer",W.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return Z.then(function(H){let Y=W.byteOffset||0,X=W.byteLength||0,U=W.count,G=W.byteStride,E=new Uint8Array(H,Y,X);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,G,E,W.mode,W.filter).then(function(N){return N.buffer});else return K.ready.then(function(){let N=new ArrayBuffer(U*G);return K.decodeGltfBuffer(new Uint8Array(N),U,G,E,W.mode,W.filter),N})})}else return null}}class mX{constructor(J){this.name=QJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let W=Q.meshes[$.mesh];for(let X of W.primitives)if(X.mode!==I9.TRIANGLES&&X.mode!==I9.TRIANGLE_STRIP&&X.mode!==I9.TRIANGLE_FAN&&X.mode!==void 0)return null;let K=$.extensions[this.name].attributes,H=[],Y={};for(let X in K)H.push(this.parser.getDependency("accessor",K[X]).then((U)=>{return Y[X]=U,Y[X]}));if(H.length<1)return null;return H.push(this.parser.createNodeMesh(J)),Promise.all(H).then((X)=>{let U=X.pop(),G=U.isGroup?U.children:[U],E=X[0].count,N=[];for(let q of G){let F=new g0,B=new S,R=new YJ,O=new S(1,1,1),P=new N8(q.geometry,q.material,E);for(let L=0;L<E;L++){if(Y.TRANSLATION)B.fromBufferAttribute(Y.TRANSLATION,L);if(Y.ROTATION)R.fromBufferAttribute(Y.ROTATION,L);if(Y.SCALE)O.fromBufferAttribute(Y.SCALE,L);P.setMatrixAt(L,F.compose(B,R,O))}let k=null;for(let L in Y)if(L==="_COLOR_0"){let z=Y[L];P.instanceColor=new T8(z.array,z.itemSize,z.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"){if(k===null){let w=P.geometry;k=new CJ,k.name=w.name;for(let _ in w.attributes)k.setAttribute(_,w.attributes[_]);for(let _ in w.morphAttributes)k.morphAttributes[_]=w.morphAttributes[_];if(w.index!==null)k.setIndex(w.index);k.morphTargetsRelative=w.morphTargetsRelative;for(let _ of w.groups)k.addGroup(_.start,_.count,_.materialIndex);if(w.boundingBox!==null)k.boundingBox=w.boundingBox.clone();if(w.boundingSphere!==null)k.boundingSphere=w.boundingSphere.clone();k.drawRange.start=w.drawRange.start,k.drawRange.count=w.drawRange.count,k.userData=Object.assign({},w.userData),P.geometry=k}let z=Y[L];k.setAttribute(L,new T8(z.array,z.itemSize,z.normalized))}NJ.prototype.copy.call(P,q),this.parser.assignFinalMaterial(P),N.push(P)}if(U.isGroup)return U.clear(),U.add(...N),U;return N[0]})}}var dX="glTF",qQ=12,MX={JSON:1313821514,BIN:5130562};class uX{constructor(J){this.name=QJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,qQ),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==dX)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let W=this.header.length-qQ,Z=new DataView(J,qQ),K=0;while(K<W){let H=Z.getUint32(K,!0);K+=4;let Y=Z.getUint32(K,!0);if(K+=4,Y===MX.JSON){let X=new Uint8Array(J,qQ+K,H);this.content=$.decode(X)}else if(Y===MX.BIN){let X=qQ+K;this.body=J.slice(X,X+H)}K+=H}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class cX{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=QJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,W=this.dracoLoader,Z=J.extensions[this.name].bufferView,K=J.extensions[this.name].attributes,H={},Y={},X={};for(let U in K){let G=kK[U]||U.toLowerCase();H[G]=K[U]}for(let U in J.attributes){let G=kK[U]||U.toLowerCase();if(K[U]!==void 0){let E=$.accessors[J.attributes[U]],N=G6[E.componentType];X[G]=N.name,Y[G]=E.normalized===!0}}return Q.getDependency("bufferView",Z).then(function(U){return new Promise(function(G,E){W.decodeDracoFile(U,function(N){for(let q in N.attributes){let F=N.attributes[q],B=Y[q];if(B!==void 0)F.normalized=B}G(N)},H,X,N9,E)})})}}class nX{constructor(){this.name=QJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),W=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*W,J.offset.x,-J.repeat.x*W,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class sX{constructor(){this.name=QJ.KHR_MESH_QUANTIZATION}}class CK extends q8{constructor(J,Q,$,W){super(J,Q,$,W)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W*3+W;for(let K=0;K!==W;K++)Q[K]=$[Z+K];return Q}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=H*2,X=H*3,U=W-Q,G=($-Q)/U,E=G*G,N=E*G,q=J*X,F=q-X,B=-2*N+3*E,R=N-E,O=1-B,P=R-E+G;for(let k=0;k!==H;k++){let L=K[F+k+H],z=K[F+k+Y]*U,w=K[q+k+H],_=K[q+k]*U;Z[k]=O*L+P*z+B*w+R*_}return Z}}var v1=new YJ;class iX extends CK{interpolate_(J,Q,$,W){let Z=super.interpolate_(J,Q,$,W);return v1.fromArray(Z).normalize().toArray(Z),Z}}var I9={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},G6={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},CX={9728:x9,9729:dJ,9984:Z$,9985:o7,9986:W7,9987:i9},zX={33071:i7,33648:W$,10497:y8},RK={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kK={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},u8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},f1={CUBICSPLINE:void 0,LINEAR:N$,STEP:zZ},LK={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function h1(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new JJ({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:j8});return J.DefaultMaterial}function q7(J,Q,$){for(let W in $.extensions)if(J[W]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[W]=$.extensions[W]}function e9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function b1(J,Q,$){let W=!1,Z=!1,K=!1;for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(E.POSITION!==void 0)W=!0;if(E.NORMAL!==void 0)Z=!0;if(E.COLOR_0!==void 0)K=!0;if(W&&Z&&K)break}if(!W&&!Z&&!K)return Promise.resolve(J);let H=[],Y=[],X=[];for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(W){let N=E.POSITION!==void 0?$.getDependency("accessor",E.POSITION):J.attributes.position;H.push(N)}if(Z){let N=E.NORMAL!==void 0?$.getDependency("accessor",E.NORMAL):J.attributes.normal;Y.push(N)}if(K){let N=E.COLOR_0!==void 0?$.getDependency("accessor",E.COLOR_0):J.attributes.color;X.push(N)}}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X)]).then(function(U){let G=U[0],E=U[1],N=U[2];if(W)J.morphAttributes.position=G;if(Z)J.morphAttributes.normal=E;if(K)J.morphAttributes.color=N;return J.morphTargetsRelative=!0,J})}function x1(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,W=Q.weights.length;$<W;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let W=0,Z=$.length;W<Z;W++)J.morphTargetDictionary[$[W]]=W}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function g1(J){let Q,$=J.extensions&&J.extensions[QJ.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+VK($.attributes);else Q=J.indices+":"+VK(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let W=0,Z=J.targets.length;W<Z;W++)Q+=":"+VK(J.targets[W]);return Q}function VK(J){let Q="",$=Object.keys(J).sort();for(let W=0,Z=$.length;W<Z;W++)Q+=$[W]+":"+J[$[W]]+";";return Q}function DK(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function p1(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var l1=new g0;class oX{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new y1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,W=-1,Z=!1,K=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let H=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(H)===!0;let Y=H.match(/Version\/(\d+)/);W=$&&Y?parseInt(Y[1],10):-1,Z=H.indexOf("Firefox")>-1,K=Z?H.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&W<17||Z&&K<98)this.textureLoader=new S$(this.options.manager);else this.textureLoader=new v$(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ZQ(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,W=this.json,Z=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(K){let H={scene:K[0][W.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:W.asset,parser:$,userData:{}};return q7(Z,H,W),e9(H,W),Promise.all($._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(H)})).then(function(){for(let Y of H.scenes)Y.updateMatrixWorld();J(H)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W].joints;for(let H=0,Y=K.length;H<Y;H++)J[K[H]].isBone=!0}for(let W=0,Z=J.length;W<Z;W++){let K=J[W];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)$[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let W=$.clone(),Z=(K,H)=>{let Y=this.associations.get(K);if(Y!=null)this.associations.set(H,Y);for(let[X,U]of K.children.entries())Z(U,H.children[X])};return Z($,W),W.name+="_instance_"+J.uses[Q]++,W}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let W=J(Q[$]);if(W)return W}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let W=0;W<Q.length;W++){let Z=J(Q[W]);if(Z)$.push(Z)}return $}getDependency(J,Q){let $=J+":"+Q,W=this.cache.get($);if(!W){switch(J){case"scene":W=this.loadScene(Q);break;case"node":W=this._invokeOne(function(Z){return Z.loadNode&&Z.loadNode(Q)});break;case"mesh":W=this._invokeOne(function(Z){return Z.loadMesh&&Z.loadMesh(Q)});break;case"accessor":W=this.loadAccessor(Q);break;case"bufferView":W=this._invokeOne(function(Z){return Z.loadBufferView&&Z.loadBufferView(Q)});break;case"buffer":W=this.loadBuffer(Q);break;case"material":W=this._invokeOne(function(Z){return Z.loadMaterial&&Z.loadMaterial(Q)});break;case"texture":W=this._invokeOne(function(Z){return Z.loadTexture&&Z.loadTexture(Q)});break;case"skin":W=this.loadSkin(Q);break;case"animation":W=this._invokeOne(function(Z){return Z.loadAnimation&&Z.loadAnimation(Q)});break;case"camera":W=this.loadCamera(Q);break;default:if(W=this._invokeOne(function(Z){return Z!=this&&Z.getDependency&&Z.getDependency(J,Q)}),!W)throw Error("Unknown type: "+J);break}this.cache.add($,W)}return W}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,W=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(W.map(function(Z,K){return $.getDependency(J,K)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[QJ.KHR_BINARY_GLTF].body);let W=this.options;return new Promise(function(Z,K){$.load(d8.resolveURL(Q.uri,W.path),Z,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let W=Q.byteLength||0,Z=Q.byteOffset||0;return $.slice(Z,Z+W)})}loadAccessor(J){let Q=this,$=this.json,W=this.json.accessors[J];if(W.bufferView===void 0&&W.sparse===void 0){let K=RK[W.type],H=G6[W.componentType],Y=W.normalized===!0,X=new H(W.count*K);return Promise.resolve(new bJ(X,K,Y))}let Z=[];if(W.bufferView!==void 0)Z.push(this.getDependency("bufferView",W.bufferView));else Z.push(null);if(W.sparse!==void 0)Z.push(this.getDependency("bufferView",W.sparse.indices.bufferView)),Z.push(this.getDependency("bufferView",W.sparse.values.bufferView));return Promise.all(Z).then(function(K){let H=K[0],Y=RK[W.type],X=G6[W.componentType],U=X.BYTES_PER_ELEMENT,G=U*Y,E=W.byteOffset||0,N=W.bufferView!==void 0?$.bufferViews[W.bufferView].byteStride:void 0,q=W.normalized===!0,F,B;if(N&&N!==G){let R=Math.floor(E/N),O="InterleavedBuffer:"+W.bufferView+":"+W.componentType+":"+R+":"+W.count,P=Q.cache.get(O);if(!P)F=new X(H,R*N,W.count*N/U),P=new s6(F,N/U),Q.cache.add(O,P);B=new e7(P,Y,E%N/U,q)}else{if(H===null)F=new X(W.count*Y);else F=new X(H,E,W.count*Y);B=new bJ(F,Y,q)}if(W.sparse!==void 0){let R=RK.SCALAR,O=G6[W.sparse.indices.componentType],P=W.sparse.indices.byteOffset||0,k=W.sparse.values.byteOffset||0,L=new O(K[1],P,W.sparse.count*R),z=new X(K[2],k,W.sparse.count*Y);if(H!==null)B=new bJ(B.array.slice(),B.itemSize,B.normalized);B.normalized=!1;for(let w=0,_=L.length;w<_;w++){let D=L[w];if(B.setX(D,z[w*Y]),Y>=2)B.setY(D,z[w*Y+1]);if(Y>=3)B.setZ(D,z[w*Y+2]);if(Y>=4)B.setW(D,z[w*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}B.normalized=q}return B})}loadTexture(J){let Q=this.json,$=this.options,Z=Q.textures[J].source,K=Q.images[Z],H=this.textureLoader;if(K.uri){let Y=$.manager.getHandler(K.uri);if(Y!==null)H=Y}return this.loadTextureImage(J,Z,H)}loadTextureImage(J,Q,$){let W=this,Z=this.json,K=Z.textures[J],H=Z.images[Q],Y=(H.uri||H.bufferView)+":"+K.sampler;if(this.textureCache[Y])return this.textureCache[Y];let X=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=K.name||H.name||"",U.name===""&&typeof H.uri==="string"&&H.uri.startsWith("data:image/")===!1)U.name=H.uri;let E=(Z.samplers||{})[K.sampler]||{};return U.magFilter=CX[E.magFilter]||dJ,U.minFilter=CX[E.minFilter]||i9,U.wrapS=zX[E.wrapS]||y8,U.wrapT=zX[E.wrapT]||y8,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==x9&&U.minFilter!==dJ,W.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=X,X}loadImageSource(J,Q){let $=this,W=this.json,Z=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let K=W.images[J],H=self.URL||self.webkitURL,Y=K.uri||"",X=!1;if(K.bufferView!==void 0)Y=$.getDependency("bufferView",K.bufferView).then(function(G){X=!0;let E=new Blob([G],{type:K.mimeType});return Y=H.createObjectURL(E),Y});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(Y).then(function(G){return new Promise(function(E,N){let q=E;if(Q.isImageBitmapLoader===!0)q=function(F){let B=new SJ(F);B.needsUpdate=!0,E(B)};Q.load(d8.resolveURL(G,Z.path),q,void 0,N)})}).then(function(G){if(X===!0)H.revokeObjectURL(Y);return e9(G,K),G.userData.mimeType=K.mimeType||p1(K.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),G});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,W){let Z=this;return this.getDependency("texture",$.index).then(function(K){if(!K)return null;if($.texCoord!==void 0&&$.texCoord>0)K=K.clone(),K.channel=$.texCoord;if(Z.extensions[QJ.KHR_TEXTURE_TRANSFORM]){let H=$.extensions!==void 0?$.extensions[QJ.KHR_TEXTURE_TRANSFORM]:void 0;if(H){let Y=Z.associations.get(K);K=Z.extensions[QJ.KHR_TEXTURE_TRANSFORM].extendTexture(K,H),Z.associations.set(K,Y)}}if(W!==void 0)K.colorSpace=W;return J[Q]=K,K})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,W=Q.attributes.tangent===void 0,Z=Q.attributes.color!==void 0,K=Q.attributes.normal===void 0;if(J.isPoints){let H="PointsMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new e6,K9.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,Y.sizeAttenuation=!1,this.cache.add(H,Y);$=Y}else if(J.isLine){let H="LineBasicMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new t6,K9.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,this.cache.add(H,Y);$=Y}if(W||Z||K){let H="ClonedMaterial:"+$.uuid+":";if(W)H+="derivative-tangents:";if(Z)H+="vertex-colors:";if(K)H+="flat-shading:";let Y=this.cache.get(H);if(!Y){if(Y=$.clone(),Z)Y.vertexColors=!0;if(K)Y.flatShading=!0;if(W){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(H,Y),this.associations.set(Y,this.associations.get($))}$=Y}J.material=$}getMaterialType(){return JJ}loadMaterial(J){let Q=this,$=this.json,W=this.extensions,Z=$.materials[J],K,H={},Y=Z.extensions||{},X=[];if(Y[QJ.KHR_MATERIALS_UNLIT]){let G=W[QJ.KHR_MATERIALS_UNLIT];K=G.getMaterialType(),X.push(G.extendParams(H,Z,Q))}else{let G=Z.pbrMetallicRoughness||{};if(H.color=new v0(1,1,1),H.opacity=1,Array.isArray(G.baseColorFactor)){let E=G.baseColorFactor;H.color.setRGB(E[0],E[1],E[2],N9),H.opacity=E[3]}if(G.baseColorTexture!==void 0)X.push(Q.assignTexture(H,"map",G.baseColorTexture,Z9));if(H.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,H.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)X.push(Q.assignTexture(H,"metalnessMap",G.metallicRoughnessTexture)),X.push(Q.assignTexture(H,"roughnessMap",G.metallicRoughnessTexture));K=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(J)}),X.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(J,H)})))}if(Z.doubleSided===!0)H.side=mJ;let U=Z.alphaMode||LK.OPAQUE;if(U===LK.BLEND)H.transparent=!0,H.depthWrite=!1;else if(H.transparent=!1,U===LK.MASK)H.alphaTest=Z.alphaCutoff!==void 0?Z.alphaCutoff:0.5;if(Z.normalTexture!==void 0&&K!==nJ){if(X.push(Q.assignTexture(H,"normalMap",Z.normalTexture)),H.normalScale=new U0(1,1),Z.normalTexture.scale!==void 0){let G=Z.normalTexture.scale;H.normalScale.set(G,G)}}if(Z.occlusionTexture!==void 0&&K!==nJ){if(X.push(Q.assignTexture(H,"aoMap",Z.occlusionTexture)),Z.occlusionTexture.strength!==void 0)H.aoMapIntensity=Z.occlusionTexture.strength}if(Z.emissiveFactor!==void 0&&K!==nJ){let G=Z.emissiveFactor;H.emissive=new v0().setRGB(G[0],G[1],G[2],N9)}if(Z.emissiveTexture!==void 0&&K!==nJ)X.push(Q.assignTexture(H,"emissiveMap",Z.emissiveTexture,Z9));return Promise.all(X).then(function(){let G=new K(H);if(Z.name)G.name=Z.name;if(e9(G,Z),Q.associations.set(G,{materials:J}),Z.extensions)q7(W,G,Z);return G})}createUniqueName(J){let Q=UJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,W=this.primitiveCache;function Z(H){return $[QJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(H,Q).then(function(Y){return PX(Y,H,Q)})}let K=[];for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=g1(X),G=W[U];if(G)K.push(G.promise);else{let E;if(X.extensions&&X.extensions[QJ.KHR_DRACO_MESH_COMPRESSION])E=Z(X);else E=PX(new CJ,X,Q);if(X.mode===I9.TRIANGLE_STRIP)E=E.then((N)=>OK(N,m6));else if(X.mode===I9.TRIANGLE_FAN)E=E.then((N)=>OK(N,r7));W[U]={primitive:X,promise:E},K.push(E)}}return Promise.all(K)}loadMesh(J){let Q=this,$=this.json,W=this.extensions,Z=$.meshes[J],K=Z.primitives,H=[];for(let Y=0,X=K.length;Y<X;Y++){let U=K[Y].material===void 0?h1(this.cache):this.getDependency("material",K[Y].material);H.push(U)}return H.push(Q.loadGeometries(K)),Promise.all(H).then(async function(Y){let X=Y.slice(0,Y.length-1),U=Y[Y.length-1],G=[];for(let N=0,q=U.length;N<q;N++){let F=U[N],B=K[N],R,O=X[N];if(B.mode===I9.TRIANGLES||B.mode===I9.TRIANGLE_STRIP||B.mode===I9.TRIANGLE_FAN||B.mode===void 0){let P=Z.isSkinnedMesh===!0,k=F.hasAttribute("skinIndex")&&F.hasAttribute("skinWeight");if(P&&k===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(R=P&&k?new V$(F,O):new A0(F,O),R.isSkinnedMesh===!0)R.normalizeSkinWeights()}else if(B.mode===I9.LINES)R=new B$(F,O);else if(B.mode===I9.LINE_STRIP)R=new J6(F,O);else if(B.mode===I9.LINE_LOOP)R=new k$(F,O);else if(B.mode===I9.POINTS)R=new D$(F,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+B.mode);if(Object.keys(R.geometry.morphAttributes).length>0)x1(R,Z);if(R.name=Q.createUniqueName(Z.name||"mesh_"+J),e9(R,Z),B.extensions)q7(W,R,B);Q.assignFinalMaterial(R),G.push(R)}for(let N=0,q=G.length;N<q;N++)Q.associations.set(G[N],{meshes:J,primitives:N});if(G.length===1){if(Z.extensions)q7(W,G[0],Z);return G[0]}let E=new MJ;if(Z.extensions)q7(W,E,Z);Q.associations.set(E,{meshes:J});for(let N=0,q=G.length;N<q;N++)E.add(G[N]);return E})}loadCamera(J){let Q,$=this.json.cameras[J],W=$[$.type];if(!W){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new hJ(d6.radToDeg(W.yfov),W.aspectRatio||1,W.znear||1,W.zfar||2000000);else if($.type==="orthographic")Q=new N7(-W.xmag,W.xmag,W.ymag,-W.ymag,W.znear,W.zfar);if($.name)Q.name=this.createUniqueName($.name);return e9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let W=0,Z=Q.joints.length;W<Z;W++)$.push(this._loadNodeShallow(Q.joints[W]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(W){let Z=W.pop(),K=W,H=[],Y=[];for(let X=0,U=K.length;X<U;X++){let G=K[X];if(G){H.push(G);let E=new g0;if(Z!==null)E.fromArray(Z.array,X*16);Y.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[X])}return new a6(H,Y)})}loadAnimation(J){let Q=this.json,$=this,W=Q.animations[J],Z=W.name?W.name:"animation_"+J,K=[],H=[],Y=[],X=[],U=[];for(let G=0,E=W.channels.length;G<E;G++){let N=W.channels[G],q=W.samplers[N.sampler],F=N.target,B=F.node,R=W.parameters!==void 0?W.parameters[q.input]:q.input,O=W.parameters!==void 0?W.parameters[q.output]:q.output;if(F.node===void 0)continue;K.push(this.getDependency("node",B)),H.push(this.getDependency("accessor",R)),Y.push(this.getDependency("accessor",O)),X.push(q),U.push(F)}return Promise.all([Promise.all(K),Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(U)]).then(function(G){let E=G[0],N=G[1],q=G[2],F=G[3],B=G[4],R=[];for(let P=0,k=E.length;P<k;P++){let L=E[P],z=N[P],w=q[P],_=F[P],D=B[P];if(L===void 0)continue;if(L.updateMatrix)L.updateMatrix();let A=$._createAnimationTracks(L,z,w,_,D);if(A)for(let d=0;d<A.length;d++)R.push(A[d])}let O=new u7(Z,void 0,R);return e9(O,W),O})}createNodeMesh(J){let Q=this.json,$=this,W=Q.nodes[J];if(W.mesh===void 0)return null;return $.getDependency("mesh",W.mesh).then(function(Z){let K=$._getNodeRef($.meshCache,W.mesh,Z);if(W.weights!==void 0)K.traverse(function(H){if(!H.isMesh)return;for(let Y=0,X=W.weights.length;Y<X;Y++)H.morphTargetInfluences[Y]=W.weights[Y]});return K})}loadNode(J){let Q=this.json,$=this,W=Q.nodes[J],Z=$._loadNodeShallow(J),K=[],H=W.children||[];for(let X=0,U=H.length;X<U;X++)K.push($.getDependency("node",H[X]));let Y=W.skin===void 0?Promise.resolve(null):$.getDependency("skin",W.skin);return Promise.all([Z,Promise.all(K),Y]).then(function(X){let U=X[0],G=X[1],E=X[2];if(E!==null)U.traverse(function(N){if(!N.isSkinnedMesh)return;N.bind(E,l1)});for(let N=0,q=G.length;N<q;N++)U.add(G[N]);if(U.userData.pivot!==void 0&&G.length>0){let N=U.userData.pivot,q=G[0];U.pivot=new S().fromArray(N),U.position.x-=N[0],U.position.y-=N[1],U.position.z-=N[2],q.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,W=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let Z=Q.nodes[J],K=Z.name?W.createUniqueName(Z.name):"",H=[],Y=W._invokeOne(function(X){return X.createNodeMesh&&X.createNodeMesh(J)});if(Y)H.push(Y);if(Z.camera!==void 0)H.push(W.getDependency("camera",Z.camera).then(function(X){return W._getNodeRef(W.cameraCache,Z.camera,X)}));return W._invokeAll(function(X){return X.createNodeAttachment&&X.createNodeAttachment(J)}).forEach(function(X){H.push(X)}),this.nodeCache[J]=Promise.all(H).then(function(X){let U;if(Z.isBone===!0)U=new i6;else if(X.length>1)U=new MJ;else if(X.length===1)U=X[0];else U=new NJ;if(U!==X[0])for(let G=0,E=X.length;G<E;G++)U.add(X[G]);if(Z.name)U.userData.name=Z.name,U.name=K;if(e9(U,Z),Z.extensions)q7($,U,Z);if(Z.matrix!==void 0){let G=new g0;G.fromArray(Z.matrix),U.applyMatrix4(G)}else{if(Z.translation!==void 0)U.position.fromArray(Z.translation);if(Z.rotation!==void 0)U.quaternion.fromArray(Z.rotation);if(Z.scale!==void 0)U.scale.fromArray(Z.scale)}if(!W.associations.has(U))W.associations.set(U,{});else if(Z.mesh!==void 0&&W.meshCache.refs[Z.mesh]>1){let G=W.associations.get(U);W.associations.set(U,{...G})}return W.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],W=this,Z=new MJ;if($.name)Z.name=W.createUniqueName($.name);if(e9(Z,$),$.extensions)q7(Q,Z,$);let K=$.nodes||[],H=[];for(let Y=0,X=K.length;Y<X;Y++)H.push(W.getDependency("node",K[Y]));return Promise.all(H).then(function(Y){for(let U=0,G=Y.length;U<G;U++){let E=Y[U];if(E.parent!==null)Z.add(m$(E));else Z.add(E)}let X=(U)=>{let G=new Map;for(let[E,N]of W.associations)if(E instanceof K9||E instanceof SJ)G.set(E,N);return U.traverse((E)=>{let N=W.associations.get(E);if(N!=null)G.set(E,N)}),G};return W.associations=X(Z),Z})}_createAnimationTracks(J,Q,$,W,Z){let K=[],H=J.name?J.name:J.uuid,Y=[];function X(N){if(N.morphTargetInfluences)Y.push(N.name?N.name:N.uuid)}if(u8[Z.path]===u8.weights){if(X(J),J.isGroup)J.children.forEach(X)}else Y.push(H);let U;switch(u8[Z.path]){case u8.weights:U=g8;break;case u8.rotation:U=p8;break;case u8.translation:case u8.scale:U=G7;break;default:switch($.itemSize){case 1:U=g8;break;case 2:case 3:default:U=G7;break}break}let G=W.interpolation!==void 0?f1[W.interpolation]:N$,E=this._getArrayFromAccessor($);for(let N=0,q=Y.length;N<q;N++){let F=new U(Y[N]+"."+u8[Z.path],Q.array,E,G);if(W.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(F);K.push(F)}return K}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=DK(Q.constructor),W=new Float32Array(Q.length);for(let Z=0,K=Q.length;Z<K;Z++)W[Z]=Q[Z]*$;Q=W}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof p8?iX:CK)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function m1(J,Q,$){let W=Q.attributes,Z=new Q9;if(W.POSITION!==void 0){let Y=$.json.accessors[W.POSITION],X=Y.min,U=Y.max;if(X!==void 0&&U!==void 0){if(Z.set(new S(X[0],X[1],X[2]),new S(U[0],U[1],U[2])),Y.normalized){let G=DK(G6[Y.componentType]);Z.min.multiplyScalar(G),Z.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=Q.targets;if(K!==void 0){let Y=new S,X=new S;for(let U=0,G=K.length;U<G;U++){let E=K[U];if(E.POSITION!==void 0){let N=$.json.accessors[E.POSITION],q=N.min,F=N.max;if(q!==void 0&&F!==void 0){if(X.setX(Math.max(Math.abs(q[0]),Math.abs(F[0]))),X.setY(Math.max(Math.abs(q[1]),Math.abs(F[1]))),X.setZ(Math.max(Math.abs(q[2]),Math.abs(F[2]))),N.normalized){let B=DK(G6[N.componentType]);X.multiplyScalar(B)}Y.max(X)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}Z.expandByVector(Y)}J.boundingBox=Z;let H=new q9;Z.getCenter(H.center),H.radius=Z.min.distanceTo(Z.max)/2,J.boundingSphere=H}function PX(J,Q,$){let W=Q.attributes,Z=[];function K(H,Y){return $.getDependency("accessor",H).then(function(X){J.setAttribute(Y,X)})}for(let H in W){let Y=kK[H]||H.toLowerCase();if(Y in J.attributes)continue;Z.push(K(W[H],Y))}if(Q.indices!==void 0&&!J.index){let H=$.getDependency("accessor",Q.indices).then(function(Y){J.setIndex(Y)});Z.push(H)}if(r0.workingColorSpace!==N9&&"COLOR_0"in W)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${r0.workingColorSpace}" not supported.`);return e9(J,Q),m1(J,Q,$),Promise.all(Z).then(function(){return Q.targets!==void 0?b1(J,Q.targets,$):J})}var aX={type:"change"},PK={type:"start"},tX={type:"end"},d$=new f8,rX=new k9,d1=Math.cos(70*d6.DEG2RAD),pJ=new S,H9=2*Math.PI,OJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zK=0.000001;class IK extends h${constructor(J,Q=null){super(J,Q);if(this.state=OJ.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_8.ROTATE,MIDDLE:_8.DOLLY,RIGHT:_8.PAN},this.touches={ONE:S8.ROTATE,TWO:S8.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new YJ,this._lastTargetPosition=new S,this._quat=new YJ().setFromUnitVectors(J.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new YQ,this._sphericalDelta=new YQ,this._scale=1,this._panOffset=new S,this._rotateStart=new U0,this._rotateEnd=new U0,this._rotateDelta=new U0,this._panStart=new U0,this._panEnd=new U0,this._panDelta=new U0,this._dollyStart=new U0,this._dollyEnd=new U0,this._dollyDelta=new U0,this._dollyDirection=new S,this._mouse=new U0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c1.bind(this),this._onPointerDown=u1.bind(this),this._onPointerUp=n1.bind(this),this._onContextMenu=e1.bind(this),this._onMouseWheel=o1.bind(this),this._onKeyDown=a1.bind(this),this._onTouchStart=r1.bind(this),this._onTouchMove=t1.bind(this),this._onMouseDown=s1.bind(this),this._onMouseMove=i1.bind(this),this._interceptControlDown=JF.bind(this),this._interceptControlUp=QF.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=OJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(aX),this.update(),this.state=OJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(pJ.copy(Q).sub(this.target),pJ.applyQuaternion(this._quat),this._spherical.setFromVector3(pJ),this.autoRotate&&this.state===OJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,W=this.maxAzimuthAngle;if(isFinite($)&&isFinite(W)){if($<-Math.PI)$+=H9;else if($>Math.PI)$-=H9;if(W<-Math.PI)W+=H9;else if(W>Math.PI)W-=H9;if($<=W)this._spherical.theta=Math.max($,Math.min(W,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+W)/2?Math.max($,this._spherical.theta):Math.min(W,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let Z=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let K=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),Z=K!=this._spherical.radius}if(pJ.setFromSpherical(this._spherical),pJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(pJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let K=null;if(this.object.isPerspectiveCamera){let H=pJ.length();K=this._clampDistance(H*this._scale);let Y=H-K;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),Z=!!Y}else if(this.object.isOrthographicCamera){let H=new S(this._mouse.x,this._mouse.y,0);H.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),Z=Y!==this.object.zoom;let X=new S(this._mouse.x,this._mouse.y,0);X.unproject(this.object),this.object.position.sub(X).add(H),this.object.updateMatrixWorld(),K=pJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(K!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(K).add(this.object.position);else if(d$.origin.copy(this.object.position),d$.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(d$.direction))<d1)this.object.lookAt(this.target);else rX.setFromNormalAndCoplanarPoint(this.object.up,this.target),d$.intersectPlane(rX,this.target)}else if(this.object.isOrthographicCamera){let K=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),K!==this.object.zoom)this.object.updateProjectionMatrix(),Z=!0}if(this._scale=1,this._performCursorZoom=!1,Z||this._lastPosition.distanceToSquared(this.object.position)>zK||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zK||this._lastTargetPosition.distanceToSquared(this.target)>zK)return this.dispatchEvent(aX),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return H9/60*this.autoRotateSpeed*J;else return H9/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){pJ.setFromMatrixColumn(Q,0),pJ.multiplyScalar(-J),this._panOffset.add(pJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)pJ.setFromMatrixColumn(Q,1);else pJ.setFromMatrixColumn(Q,0),pJ.crossVectors(this.object.up,pJ);pJ.multiplyScalar(J),this._panOffset.add(pJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let W=this.object.position;pJ.copy(W).sub(this.target);let Z=pJ.length();Z*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*Z/$.clientHeight,this.object.matrix),this._panUp(2*Q*Z/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),W=J-$.left,Z=Q-$.top,K=$.width,H=$.height;this._mouse.x=W/K*2-1,this._mouse.y=-(Z/H)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(H9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(H9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(H9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-H9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(H9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-H9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._rotateStart.set($,W)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._panStart.set($,W)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,W=J.pageY-Q.y,Z=Math.sqrt($*$+W*W);this._dollyStart.set(0,Z)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),W=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._rotateEnd.set(W,Z)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(H9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(H9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._panEnd.set($,W)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,W=J.pageY-Q.y,Z=Math.sqrt($*$+W*W);this._dollyEnd.set(0,Z),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let K=(J.pageX+Q.x)*0.5,H=(J.pageY+Q.y)*0.5;this._updateZoomParameters(K,H)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new U0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function u1(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function c1(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function n1(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tX),this.state=OJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function s1(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case _8.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=OJ.DOLLY;break;case _8.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=OJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=OJ.ROTATE}break;case _8.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=OJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=OJ.PAN}break;default:this.state=OJ.NONE}if(this.state!==OJ.NONE)this.dispatchEvent(PK)}function i1(J){switch(this.state){case OJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case OJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case OJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function o1(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==OJ.NONE)return;J.preventDefault(),this.dispatchEvent(PK),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(tX)}function a1(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function r1(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case S8.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=OJ.TOUCH_ROTATE;break;case S8.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=OJ.TOUCH_PAN;break;default:this.state=OJ.NONE}break;case 2:switch(this.touches.TWO){case S8.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=OJ.TOUCH_DOLLY_PAN;break;case S8.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=OJ.TOUCH_DOLLY_ROTATE;break;default:this.state=OJ.NONE}break;default:this.state=OJ.NONE}if(this.state!==OJ.NONE)this.dispatchEvent(PK)}function t1(J){switch(this._trackPointer(J),this.state){case OJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case OJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case OJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case OJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=OJ.NONE}}function e1(J){if(this.enabled===!1)return;J.preventDefault()}function JF(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function QF(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}class AK extends t7{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new uJ;J.deleteAttribute("uv");let Q=new JJ({side:tJ}),$=new JJ,W=new m8(16777215,900,28,2);W.position.set(0.418,16.199,0.3),this.add(W);let Z=new A0(J,Q);Z.position.set(-0.757,13.219,0.717),Z.scale.set(31.713,28.305,28.591),this.add(Z);let K=new N8(J,$,6),H=new NJ;H.position.set(-10.906,2.009,1.846),H.rotation.set(0,-0.195,0),H.scale.set(2.328,7.905,4.651),H.updateMatrix(),K.setMatrixAt(0,H.matrix),H.position.set(-5.607,-0.754,-0.758),H.rotation.set(0,0.994,0),H.scale.set(1.97,1.534,3.955),H.updateMatrix(),K.setMatrixAt(1,H.matrix),H.position.set(6.167,0.857,7.803),H.rotation.set(0,0.561,0),H.scale.set(3.927,6.285,3.687),H.updateMatrix(),K.setMatrixAt(2,H.matrix),H.position.set(-2.017,0.018,6.124),H.rotation.set(0,0.333,0),H.scale.set(2.002,4.566,2.064),H.updateMatrix(),K.setMatrixAt(3,H.matrix),H.position.set(2.291,-0.756,-2.621),H.rotation.set(0,-0.286,0),H.scale.set(1.546,1.552,1.496),H.updateMatrix(),K.setMatrixAt(4,H.matrix),H.position.set(-2.193,-0.369,-5.547),H.rotation.set(0,0.516,0),H.scale.set(3.875,3.487,2.986),H.updateMatrix(),K.setMatrixAt(5,H.matrix),this.add(K);let Y=new A0(J,N6(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let X=new A0(J,N6(50));X.position.set(-16.109,18.021,-8.207),X.scale.set(0.1,2.425,2.751),this.add(X);let U=new A0(J,N6(17));U.position.set(14.904,12.198,-1.832),U.scale.set(0.15,4.265,6.331),this.add(U);let G=new A0(J,N6(43));G.position.set(-0.462,8.89,14.52),G.scale.set(4.38,5.441,0.088),this.add(G);let E=new A0(J,N6(20));E.position.set(3.235,11.486,-12.541),E.scale.set(2.5,2,0.1),this.add(E);let N=new A0(J,N6(100));N.position.set(0,20,0),N.scale.set(1,0.1,1),this.add(N)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function N6(J){return new w$({color:0,emissive:16777215,emissiveIntensity:J})}var FQ=new S;function A9(J,Q,$,W,Z,K){let H=2*Math.PI*Z/4,Y=Math.max(K-2*Z,0),X=Math.PI/4;FQ.copy(Q),FQ[W]=0,FQ.normalize();let U=0.5*H/(H+Y),G=1-FQ.angleTo(J)/X;if(Math.sign(FQ[$])===1)return G*U;else return Y/(H+Y)+U+U*(1-G)}class c8 extends uJ{constructor(J=1,Q=1,$=1,W=2,Z=0.1){let K=W*2+1;Z=Math.min(J/2,Q/2,$/2,Z);super(1,1,1,K,K,K);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:W,radius:Z},K===1)return;let H=this.toNonIndexed();this.index=null,this.attributes.position=H.attributes.position,this.attributes.normal=H.attributes.normal,this.attributes.uv=H.attributes.uv;let Y=new S,X=new S,U=new S(J,Q,$).divideScalar(2).subScalar(Z),G=this.attributes.position.array,E=this.attributes.normal.array,N=this.attributes.uv.array,q=G.length/6,F=new S,B=0.5/K;for(let R=0,O=0;R<G.length;R+=3,O+=2)switch(Y.fromArray(G,R),X.copy(Y),X.x-=Math.sign(X.x)*B,X.y-=Math.sign(X.y)*B,X.z-=Math.sign(X.z)*B,X.normalize(),G[R+0]=U.x*Math.sign(Y.x)+X.x*Z,G[R+1]=U.y*Math.sign(Y.y)+X.y*Z,G[R+2]=U.z*Math.sign(Y.z)+X.z*Z,E[R+0]=X.x,E[R+1]=X.y,E[R+2]=X.z,Math.floor(R/q)){case 0:F.set(1,0,0),N[O+0]=A9(F,X,"z","y",Z,$),N[O+1]=1-A9(F,X,"y","z",Z,Q);break;case 1:F.set(-1,0,0),N[O+0]=1-A9(F,X,"z","y",Z,$),N[O+1]=1-A9(F,X,"y","z",Z,Q);break;case 2:F.set(0,1,0),N[O+0]=1-A9(F,X,"x","z",Z,J),N[O+1]=A9(F,X,"z","x",Z,$);break;case 3:F.set(0,-1,0),N[O+0]=1-A9(F,X,"x","z",Z,J),N[O+1]=1-A9(F,X,"z","x",Z,$);break;case 4:F.set(0,0,1),N[O+0]=1-A9(F,X,"x","y",Z,J),N[O+1]=1-A9(F,X,"y","x",Z,Q);break;case 5:F.set(0,0,-1),N[O+0]=A9(F,X,"x","y",Z,J),N[O+1]=1-A9(F,X,"y","x",Z,Q);break}}static fromJSON(J){return new c8(J.width,J.height,J.depth,J.segments,J.radius)}}var R0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0029,pipColumnSpacing:0.0064,pipRowSpacing:0.0074,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25,boardLimit:0.27},w9=[[0,R0.seatDistance,Math.PI],[-R0.seatDistance,0,Math.PI/2],[0,-R0.seatDistance,0],[R0.seatDistance,0,-Math.PI/2]];function eX(J){let Q=J.vertical?R0.tileWidth:R0.tileLength,$=J.vertical?R0.tileLength:R0.tileWidth;return{left:J.x-Q/2,right:J.x+Q/2,top:J.z-$/2,bottom:J.z+$/2}}var $F=R0.boardLimit,WF=R0.feltWidth/2-0.022;function TK(J,Q,$=$F){let W=eX(J);if(Math.max(Math.abs(W.left),Math.abs(W.right),Math.abs(W.top),Math.abs(W.bottom))>$+0.00000001)return!1;return Q.every((Z)=>{let K=eX(Z);return W.right<=K.left-0.0015||W.left>=K.right+0.0015||W.bottom<=K.top-0.0015||W.top>=K.bottom+0.0015})}function JU(J,Q,$){let{tileLength:W,tileWidth:Z,tileGap:K}=R0,H=Q.x===Q.y,Y=(H?Z:W)/2,X=J.tile,U=[],G=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let E=0;E<G.length;E++){let[N,q]=G[E],F=E!==0,B=(X.isDouble?Z:W)/2,R=(X.isDouble?W:Z)/2,O=X.x+J.dx*(F?X.isDouble?0:W/4:B),P=X.z+J.dz*(F?X.isDouble?0:W/4:B),k=F?[0,W/8,-W/8]:[0];for(let L of k){let z=Math.atan2(-q,N)+($==="left"?Math.PI:0)+(H?Math.PI/2:0);U.push({id:Q.id,x:O+N*((F?R:0)+K+Y)+J.dx*L,z:P+q*((F?R:0)+K+Y)+J.dz*L,yaw:z,vertical:Math.abs(Math.sin(z))>0.5,isDouble:H,dx:N,dz:q,side:$})}}return U}function wK(J,Q,$,W){let Z={id:"future",x:0,y:W?0:1};return JU({tile:J,dx:J.dx,dz:J.dz},Z,$).some((K)=>TK(K,Q))}function QU(J,Q=[]){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return[];let $=new Map(J.map((N)=>[N.id,N])),W=Q.filter((N)=>N.type==="play"&&N.tile&&$.has(N.tile)),Z=$.get(W[0]?.tile||"")||J[0],K=J.findIndex((N)=>N.id===Z.id),H=Z.x===Z.y,Y={id:Z.id,x:0,z:0,yaw:H?Math.PI/2:0,vertical:H,isDouble:H,dx:1,dz:0,side:"root"},X=[Y],U=new Map([[Y.id,Y]]),G={left:{tile:Y,dx:-1,dz:0},right:{tile:Y,dx:1,dz:0}},E=W.length===J.length?W.slice(1):[...J.slice(0,K).reverse().map((N)=>({type:"play",tile:N.id,side:"left"})),...J.slice(K+1).map((N)=>({type:"play",tile:N.id,side:"right"}))];for(let N of E){let q=$.get(N.tile);if(U.has(q.id))continue;let F=N.side==="left"?"left":N.side==="right"?"right":J.findIndex((P)=>P.id===q.id)<K?"left":"right",B=JU(G[F],q,F),R=B.filter((P)=>TK(P,X));if(!R.length)R=B.filter((P)=>TK(P,X,WF));let O=R.find((P)=>wK(P,[...X,P],F,!1)&&wK(P,[...X,P],F,!0))||R.find((P)=>wK(P,[...X,P],F,!1))||R[0];if(!O)throw Error(`No safe placement for ${q.id} after ${X.length} tiles`);X.push(O),U.set(q.id,O),G[F]={tile:O,dx:O.dx,dz:O.dz}}return J.map((N)=>U.get(N.id))}function $U(J,Q,$=!1){if($)return{breath:0,headYaw:0,headNod:0};let W=J*2.173+0.43;return{breath:0.0055*Math.sin(Q*(0.78+J*0.093)+W),headYaw:0.087*Math.sin(Q*(0.213+J*0.037)+W)+0.028*Math.sin(Q*(0.487+J*0.029)+W*1.91),headNod:0.009*Math.sin(Q*(0.267+J*0.035)+W*0.71)}}var WU=new S(1,0,0),m9=new S(0,1,0),_K=new YJ;function hK(J){let Q=[];return J.traverse(($)=>{if($.isBone)Q.push({bone:$,position:$.position.clone(),quaternion:$.quaternion.clone(),scale:$.scale.clone()})}),Q}var J8=new S,l9=new S,Q8=new S,F7=new S,R8=new S,T9=new S,O7=new S,R7=new S,V7=new YJ,V8=new YJ,o$=new YJ,i$=new YJ,BQ=(J)=>Math.min(1,Math.max(-1,J)),B7=(J,Q,$)=>Math.min($,Math.max(Q,J)),d9=(J)=>J*J*(3-2*J);function fJ(J,Q){J.getWorldQuaternion(V8),J.parent.getWorldQuaternion(o$),J.quaternion.copy(o$.invert()).multiply(Q).multiply(V8),J.updateMatrixWorld(!0)}var $9=new S,S9=new S;function ZF(J){J.holder.getWorldQuaternion(i$),$9.set(1,0,0).applyQuaternion(i$),S9.set(0,0,1).applyQuaternion(i$)}function vK(J,Q,$,W,Z){return Z.set(Q,$,W).applyMatrix4(J.holder.matrixWorld)}function ZU(J,Q,$,W){return W.set(J,Q,$).applyQuaternion(i$).normalize()}var KF=0.965;function HF(J,Q,$){let{brazo:W,antebrazo:Z,mano:K}=J;if(!W||!Z||!K||!W.parent||!Z.parent)return;W.getWorldPosition(J8),Z.getWorldPosition(l9),K.getWorldPosition(Q8);let H=J8.distanceTo(l9),Y=l9.distanceTo(Q8);if(H<0.00001||Y<0.00001)return;let X=B7(J8.distanceTo(Q),Math.abs(H-Y)+0.002,(H+Y)*KF);if(R8.subVectors(l9,J8),T9.subVectors(Q8,l9),O7.crossVectors(R8,T9),O7.lengthSq()<0.0000000001)O7.copy($9);else O7.normalize();let U=Math.acos(BQ((H*H+Y*Y-J8.distanceToSquared(Q8))/(2*H*Y))),E=Math.acos(BQ((H*H+Y*Y-X*X)/(2*H*Y)))-U;if(fJ(Z,V7.setFromAxisAngle(O7,E)),K.getWorldPosition(Q8),Math.abs(J8.distanceTo(Q8)-X)>0.001)fJ(Z,V7.setFromAxisAngle(O7,-2*E)),K.getWorldPosition(Q8);if(R8.subVectors(Q8,J8).normalize(),T9.subVectors(Q,J8),T9.lengthSq()<0.0000000001)return;if(T9.normalize(),fJ(W,V7.setFromUnitVectors(R8,T9)),!$)return;if(Z.getWorldPosition(l9),R7.subVectors(l9,J8),R7.addScaledVector(T9,-R7.dot(T9)),F7.subVectors($,J8),F7.addScaledVector(T9,-F7.dot(T9)),R7.lengthSq()<0.0000000001||F7.lengthSq()<0.0000000001)return;R7.normalize(),F7.normalize();let N=Math.atan2(O7.crossVectors(R7,F7).dot(T9),BQ(R7.dot(F7)));fJ(W,V7.setFromAxisAngle(T9,N))}var Y9=new S,F6=new S,OQ=new S,YF=new g0,SK=new YJ,RQ=new YJ;function XF(J,Q,$){let{antebrazo:W,mano:Z}=J;if(!W||!Z||!Z.parent)return;if(Y9.copy(Q).normalize(),OQ.crossVectors(Y9,$),OQ.lengthSq()<0.00000001)return;OQ.normalize(),F6.crossVectors(OQ,Y9),SK.setFromRotationMatrix(YF.makeBasis(OQ,Y9,F6)),W.getWorldPosition(l9),Z.getWorldPosition(Q8),R8.subVectors(Q8,l9).normalize(),Z.getWorldQuaternion(V8),RQ.copy(SK).multiply(V8.invert());let K=RQ.x*R8.x+RQ.y*R8.y+RQ.z*R8.z,H=2*Math.atan2(K,RQ.w);if(Number.isFinite(H))fJ(W,V7.setFromAxisAngle(R8,B7(H*0.5,-1.2,1.2)));Z.parent.getWorldQuaternion(o$),Z.quaternion.copy(o$.invert()).multiply(SK),Z.updateMatrixWorld(!0)}var UF=new S;function GF(J,Q,$){let W=Q.lado==="Left"?1:-1,Z=J.index*1.7,K=R0.seatDistance-R0.tableWidth/2;return vK(J,W*(0.225+Math.sin(Z)*0.01)+Math.sin($*0.23+Z)*0.004,R0.surfaceY+0.026,K+(W>0?0.035:0.06)+Math.cos(Z*1.3)*0.012+Math.sin($*0.17+Z*2)*0.004,UF)}var NF=new S,E6=new S,fK=new S,u$=new S,EF=0.045,qF=0.05,FF=0.12,OF=0.14,RF=0.45,LF=4;function KU(J,Q,$){return u$.subVectors(Q,J.holder.getWorldPosition(fK)),u$.y=0,u$.normalize(),$.copy(Q).addScaledVector(u$,-qF).setY(Q.y+EF)}function VF(J,Q,$){let W=J.jugada;if(!W)return null;if(Q-W.t0>LF)return J.jugada=null,null;let Z=W.anim;if(Z.elapsed<Z.duration)return KU(J,W.obj.position,E6),E6.lerpVectors($,E6,d9(B7(Z.elapsed/FF,0,1)));if(W.aterrizo==null)W.aterrizo=Q;let K=Q-W.aterrizo;KU(J,W.hasta,E6);let H=Z.golpe?0.7:OF;if(K<H)return E6;let Y=(K-H)/RF;if(Y>=1)return J.jugada=null,null;return E6.lerp($,d9(Y))}var t0=[1,1.9,3.3,4.3,5.2],HU=-1e9;function BF(J,Q,$){let W=J.bebida;if(!W)return null;if(J.trago){let K=J.trago.fijo??Q-J.trago.t0;if(K<0||K>=t0[4]||J.jugada)return J.trago=null,EU(W),J.sed=Q+90+Math.random()*150,null;return K}if(!$||!$.dt)return null;if(J.sed==null)return J.sed=Q+20+Math.random()*100,null;if(Q<J.sed||Q-HU<20)return null;let Z=J.index;if(J.jugada||$.jugando&&$.turno===Z||$.habla.has(Z)||$.fin&&Q-$.fin.t<6)return J.sed=Q+3+Math.random()*8,null;return HU=Q,J.trago={t0:Q},0}function EU(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var O8=new S,L7=new S,q6=new S,LQ=new S,YU=new S;function XU(J,Q,$,W){let Z=J.bebida;if(q6.copy(S9).addScaledVector(m9,0.25).normalize(),LQ.copy(S9).multiplyScalar(0.55).addScaledVector(m9,0.8).normalize(),L7.copy(Z.home),L7.y+=Z.alto,L7.addScaledVector($9,-(Z.radio+0.015)).addScaledVector(q6,-0.03),J.bocaMundo)J.bocaMundo(O8),O8.addScaledVector(S9,0.006);else J.front.getWorldPosition(O8),O8.y-=0.075,O8.addScaledVector(S9,0.012);let K=Z.inclina;YU.copy(m9).multiplyScalar(Math.cos(K)).addScaledVector(S9,-Math.sin(K)),O8.addScaledVector(YU,-Z.boca).addScaledVector($9,-(Z.radio+0.015)).addScaledVector(LQ,-0.03);let H;if(Q<t0[0])W.lerpVectors($,L7,d9(Q/t0[0])),H=q6;else if(Q<t0[1]){let Y=d9((Q-t0[0])/(t0[1]-t0[0]));W.lerpVectors(L7,O8,Y),H=q6.lerp(LQ,Y).normalize()}else if(Q<t0[2])W.copy(O8),H=LQ;else if(Q<t0[3]){let Y=d9((Q-t0[2])/(t0[3]-t0[2]));W.lerpVectors(O8,L7,Y),H=LQ.lerp(q6,Y).normalize()}else W.lerpVectors(L7,$,d9((Q-t0[3])/(t0[4]-t0[3]))),H=q6;return H}var UU=new S,GU=new S,NU=new S;function kF(J,Q){let $=J.bebida,W=J.brazos[1].mano;if(Q<t0[0]||Q>=t0[3]){EU($);return}W.getWorldQuaternion(V8),W.getWorldPosition(a$),UU.set(0,0,1).applyQuaternion(V8),GU.set(0,1,0).applyQuaternion(V8);let Z=Q<t0[1]?d9((Q-t0[0])/(t0[1]-t0[0])):Q<t0[2]?1:1-d9((Q-t0[2])/(t0[3]-t0[2]));$.group.quaternion.setFromAxisAngle($9,-$.inclina*Z),NU.set(0,1,0).applyQuaternion($.group.quaternion),$.group.position.copy(a$).addScaledVector(UU,$.radio+0.015).addScaledVector(GU,0.03).addScaledVector(NU,-$.alto)}function DF(J,Q,$){let W=J.cara;if(!W)return 0;if(J.proxParpadeo==null)J.proxParpadeo=Q+1+Math.random()*4;if(Q>=J.proxParpadeo)J.parpadeoT0=Q,J.proxParpadeo=Q+(Math.random()<0.15?0.32:2+Math.random()*4);let Z=Q-(J.parpadeoT0??-9),K=Z<0?0:Z<0.06?Z/0.06:Z<0.09?1:Z<0.16?1-(Z-0.09)/0.07:0;if(J.caraFija){let U=J.caraFija,G=W.mesh.morphTargetInfluences;if(G)G[W.iP]=U.p*0.85,G[W.iS]=U.s;return J.parpadeo=U.p,U.p}let H=J.index,Y=0;if($?.fin&&$.fin.team!=null&&Q-$.fin.t<5&&Q>=$.fin.t)Y=H%2===$.fin.team?0.95:-0.7;else if($?.habla?.has(H))Y=$.hablaTipo?.get(H)==="win"?0.85:0.2;else{if(J.casual==null)J.casual=Q+8+Math.random()*30;if(Q>J.casual+2.5)J.casual=Q+15+Math.random()*45;if(Q>=J.casual)Y=0.45}J.sonrisa=(J.sonrisa??0)+(Y-(J.sonrisa??0))*(1-Math.exp(-($?.dt||0.016)*3.5));let X=W.mesh.morphTargetInfluences;if(X)X[W.iP]=K*0.85,X[W.iS]=J.sonrisa;return J.parpadeo=K,K}function MF(J,Q){let $=J.index,W=0.23+$%4*0.012,Z=Q*W*Math.PI*2+$*1.9,K=Math.sin(Z);return{b:K>0?K:K*0.7,balanceo:Math.sin(Q*0.11+$*2.3)*0.022+Math.sin(Q*0.29+$)*0.008,ladeo:Math.sin(Q*0.07+$*1.3)*0.014}}var jK=new S,c$=new S,_9=new S,n8=new S,L8=new S,L9=new YJ,n$=(J)=>{let Q=Math.sin(J*127.1+311.7)*43758.5453;return Q-Math.floor(Q)};function CF(J,Q,$,W){let Z=J.index;if(Z>=4||!$)return $?.foco&&Q-$.foco.t<2.5?W.copy($.foco.p):W.set(0,R0.surfaceY,0);if($.fin&&Q-$.fin.t<5){if($.fin.team!=null&&Z%2===$.fin.team&&$.cabezas[(Z+2)%4])return W.copy($.cabezas[(Z+2)%4]);return vK(J,0,R0.surfaceY,R0.seatDistance-R0.rackRadius,W)}if(J.trago&&J.bebida){let Y=J.trago.fijo??Q-J.trago.t0;if(Y<1.1||Y>3.4&&Y<4.3)return W.copy(J.bebida.home);if(Y<=3.4)return J.head.getWorldPosition(W),W.addScaledVector(S9,1).addScaledVector(m9,-0.15)}if($.foco&&Q-$.foco.t<1.4)return W.copy($.foco.p);for(let Y of $.habla)if(Y!==Z&&$.cabezas[Y])return W.copy($.cabezas[Y]);if($.jugando&&$.turno===Z){let Y=Math.floor(Q/1.3);return vK(J,(n$(Y+Z*9)-0.5)*0.12,R0.surfaceY+0.02,R0.seatDistance-R0.rackRadius+0.02,W)}let K=Math.floor((Q+Z*1.37)/(2.2+Z*0.35)),H=n$(K*4+Z);if($.jugando&&H<0.45&&$.cabezas[$.turno]&&$.turno!==Z)return W.copy($.cabezas[$.turno]);if(H<0.62&&$.cabezas[(Z+2)%4])return W.copy($.cabezas[(Z+2)%4]);if(!$.jugando&&H<0.85&&$.cabezas[(Z+1+K%2*2)%4])return W.copy($.cabezas[(Z+1+K%2*2)%4]);return W.set((n$(K+7)-0.5)*0.2,R0.surfaceY,(n$(K+3)-0.5)*0.2)}function zF(J,Q,$){let{head:W,neck:Z,front:K}=J;if(!W||!K)return;if(CF(J,Q,$,jK),!J.mirada||!$?.dt)J.mirada=(J.mirada||new S).copy(jK);else J.mirada.lerp(jK,1-Math.exp(-$.dt*5.5));for(let[H,Y]of[[Z,0.4],[W,1]]){if(!H)continue;if(W.getWorldPosition(c$),K.getWorldPosition(_9),_9.sub(c$),_9.lengthSq()<0.0000000001)return;if(_9.normalize(),n8.subVectors(J.mirada,c$),n8.lengthSq()<0.00000001)return;n8.normalize();let X=B7(Math.atan2(_9.z*n8.x-_9.x*n8.z,_9.x*n8.x+_9.z*n8.z),-1.25,1.25)*Y;if(fJ(H,V7.setFromAxisAngle(m9,X)),K.getWorldPosition(_9),_9.sub(c$).normalize(),L8.crossVectors(_9,m9),L8.lengthSq()<0.00000001)continue;L8.normalize();let U=B7(Math.asin(BQ(n8.y))-Math.asin(BQ(_9.y)),-0.75,0.55)*Y;fJ(H,V7.setFromAxisAngle(L8,U))}}var PF=0.23,IF=[["lomo",0.4],["spine",0.34],["chest",0.26]],gL=new YJ;function AF(J,Q,$=0){if(!J.spine||!J.spine.parent)return;if(L8.copy($9),J.hips&&J.lomo)for(let[W,Z]of IF){let K=J[W];if(!K)continue;fJ(K,L9.setFromAxisAngle(L8,Q*Z))}else fJ(J.spine,L9.setFromAxisAngle(L8,Q));if($)fJ(J.spine,L9.setFromAxisAngle(m9,$))}var s$=new S,yK=new S,VQ=new S,a$=new S;function r$(J,Q,$=!1,W=null){for(let F of J.pose)F.bone.position.copy(F.position),F.bone.quaternion.copy(F.quaternion),F.bone.scale.copy(F.scale);J.holder.updateMatrixWorld(!0),ZF(J);let Z=$U(J.index,Q,$);if(J.spine)J.spine.quaternion.multiply(_K.setFromAxisAngle(WU,Z.breath));let K=!$,H=K?MF(J,Q):{b:0,balanceo:0,ladeo:0},Y=J.index,X=Y<4&&J.brazos,U=0,G=0;if(X&&W?.fin&&W.fin.team!=null){let F=Q-W.fin.t;if(F>=0&&F<5)G=Math.sin(Math.min(1,F/0.5)*Math.PI/2)*(F>4?5-F:1),U+=(Y%2===W.fin.team?-0.1:0.07)*G}if(X&&W?.jugando&&W.turno===Y)U+=0.04;let E=X&&K&&J.front?BF(J,Q,W):null,N=[];if(X)for(let F of J.brazos){let B=NF.copy(GF(J,F,Q)),R=F.lado==="Right"?VF(J,Q,B):null,O=!!R,P=null;if(!R&&E!=null&&F.lado==="Right")R=fK.set(0,0,0),P=XU(J,E,B,R).clone();if(R=(R||B).clone(),!O&&K&&W?.habla?.has(Y)&&F.lado==="Left")J.gesto=Math.min(1,(J.gesto||0)+(W.dt||0)*3);else if(F.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(W?.dt||1)*2);if(F.lado==="Left"&&J.gesto>0){let k=d9(J.gesto);R.addScaledVector(S9,0.06*k).addScaledVector($9,-0.07*k),R.y+=0.07*k+Math.sin(Q*5.2)*0.012*k}if(F.lado==="Right"&&!O&&G&&Y%2===W.fin.team){let k=Q-W.fin.t;if(k<1.1)R.y+=Math.max(0,Math.sin(Math.min(1,k/0.9)*Math.PI))*0.13}N.push({brazo:F,o:R,jugando:O,dedos:P,reposo:B.clone()})}let q=0;if(X){let F=N.find((B)=>B.jugando);if(F&&F.brazo.brazo){J.holder.worldToLocal(VQ.copy(F.o));let B=Math.hypot(VQ.x,VQ.z-0.12);U+=B7((B-0.42)/0.55,0,0.34),q=B7(Math.atan2(VQ.x,VQ.z)*0.3,-0.3,0.3)}}if(AF(J,PF*(J.brazos?1:0.6)+U,q),E!=null){let F=E<t0[1]?Math.sin(Math.min(1,E/t0[0])*Math.PI/2)*(1-d9(Math.max(0,E-t0[0])/(t0[1]-t0[0]))):E>t0[2]?Math.sin(Math.min(1,(E-t0[2])/(t0[3]-t0[2]))*Math.PI):0;if(J.spine)fJ(J.spine,L9.setFromAxisAngle(S9,0.16*F))}if(K){if(J.spine)fJ(J.spine,L9.setFromAxisAngle(m9,H.balanceo));if(J.spine)fJ(J.spine,L9.setFromAxisAngle(S9,H.ladeo));if(J.chest)fJ(J.chest,L9.setFromAxisAngle($9,-0.018*H.b));if(J.hombros){for(let[F,B]of J.hombros)if(B)fJ(B,L9.setFromAxisAngle(S9,F*0.03*(H.b+0.3)))}}if(zF(J,Q,W),DF(J,Q,W),J.head)J.head.quaternion.multiply(_K.setFromAxisAngle(m9,Z.headYaw*0.5)),J.head.quaternion.multiply(_K.setFromAxisAngle(WU,Z.headNod)),J.head.updateMatrixWorld(!0);if(K&&J.head){if(W?.habla?.has(Y)){let F=0.035*(0.6+0.4*Math.sin(Q*1.7));fJ(J.head,L9.setFromAxisAngle($9,Math.sin(Q*6.1)*F*0.5+Math.sin(Q*3.3)*F*0.5))}if(G&&Y%2!==W.fin.team){let F=Q-W.fin.t;if(F>0.6&&F<2.6)fJ(J.head,L9.setFromAxisAngle(m9,Math.sin((F-0.6)*Math.PI*2.4)*0.16*(2.6-F)/2))}}if(E!=null&&E>t0[1]-0.2&&E<t0[2]+0.2&&J.head){let F=Math.sin(Math.min(1,(E-t0[1]+0.2)/(t0[2]-t0[1]+0.4))*Math.PI);fJ(J.head,L9.setFromAxisAngle($9,-0.3*F))}if(K&&J.reaction&&J.head){let F=Q-J.reaction.time;if(F>=0&&F<1.2){let B=Math.sin(F/1.2*Math.PI)*0.035;fJ(J.head,L9.setFromAxisAngle($9,B))}}for(let{brazo:F,o:B,jugando:R,dedos:O,reposo:P}of N){if(O)O.copy(XU(J,E,P,B));let k=F.lado==="Left"?1:-1;if(F.brazo.getWorldPosition(s$),O)s$.add(ZU(k*0.85,-0.5,0.05,yK));else s$.add(ZU(k*(R?0.55:0.32),-0.75,R?-0.15:-0.6,yK));if(HF(F,B,s$),F.antebrazo.getWorldPosition(l9),F.mano.getWorldPosition(a$),Y9.subVectors(a$,l9),Y9.y=0,Y9.lengthSq()<0.00000001)Y9.copy(S9);if(Y9.normalize(),Y9.addScaledVector($9,-k*(R?0:0.12)).normalize(),Y9.y=R?-0.55:-0.3,F6.set(0,-1,0).addScaledVector($9,-k*0.22),F.lado==="Left"&&J.gesto>0){let L=d9(J.gesto);F6.lerp(yK.copy($9).multiplyScalar(-1).add(fK.set(0,0.4,0)),L*0.8),Y9.y+=0.4*L}if(O)Y9.copy(O),F6.copy($9).addScaledVector(m9,-0.15);if(XF(F,Y9,F6),O)kF(J,E);if(K&&!R&&!O&&F.lado==="Right"&&!(W?.turno===Y&&W?.jugando)){let L=4.6+Y*0.9,z=(Q+Y*1.3)%L;if(z<0.55)F.mano.getWorldQuaternion(V8),L8.set(1,0,0).applyQuaternion(V8),fJ(F.mano,L9.setFromAxisAngle(L8,-0.22*Math.max(0,Math.sin(z/0.55*Math.PI*4))))}}J.holder.updateMatrixWorld(!0)}function qU({scene:J,texture:Q,mat:$,box:W,cylinder:Z,random:K,teal:H,wood:Y,storeSign:X}){let U=Q((k,L,z)=>{k.fillStyle="#39796d",k.fillRect(0,0,L,z);let w=k.createLinearGradient(0,0,0,z);w.addColorStop(0,"#cac09b18"),w.addColorStop(0.7,"#14382d00"),w.addColorStop(1,"#162d2566"),k.fillStyle=w,k.fillRect(0,0,L,z);for(let _=0;_<7000;_++)k.fillStyle=_%3?"#b4ad8618":"#142d2924",k.fillRect(K()*L,K()*z,1+K()*3,1+K()*2);for(let _=0;_<190;_++){let D=K()*L,A=_<125?z*(0.7+K()*0.3):K()*z,d=6+K()*17;k.fillStyle=_%3?"#a69c7d":"#6a7b6a",k.beginPath();for(let h=0;h<8;h++){let p=h*Math.PI/4,e=d*(0.6+K()*0.5);k.lineTo(D+Math.cos(p)*e,A+Math.sin(p)*e*0.65)}k.fill()}k.strokeStyle="#1b372e24";for(let _=48;_<z;_+=57)k.beginPath(),k.moveTo(0,_),k.lineTo(L,_),k.stroke()},1024,1024);H.map=U,H.color.set("#c7ccbb"),H.needsUpdate=!0,Y.color.set("#bca98a"),Y.roughness=0.84,X.material.map=Q((k,L,z)=>{k.fillStyle="#966045",k.fillRect(0,0,L,z),k.fillStyle="#e7d6a7",k.textAlign="center",k.textBaseline="middle",k.font="bold 66px Georgia",k.fillText("COLMADO LA ESQUINA",L/2,z/2);for(let w=0;w<2000;w++)k.fillStyle=w%2?"#58472c30":"#dec29630",k.fillRect(K()*L,K()*z,1+K()*5,1+K()*3);k.strokeStyle="#57412c",k.lineWidth=7,k.strokeRect(3,3,L-6,z-6)},1024,256),X.material.needsUpdate=!0;let E=["#b68e3c","#a45137","#6a8b62","#bbad8a"].map((k,L)=>new JJ({roughness:0.94,map:Q((z,w,_)=>{z.fillStyle=k,z.fillRect(0,0,w,_);for(let D=0;D<30;D++)z.strokeStyle=D%2?"#fff2":"#0002",z.beginPath(),z.moveTo(K()*w,0),z.lineTo(K()*w,_),z.stroke();z.fillStyle="#dfd1a6",z.fillRect(20,_*0.32,w-40,_*0.36),z.fillStyle="#403c29",z.font="bold 31px Georgia",z.textAlign="center",z.fillText(["CAFÉ","ARROZ","PLÁTANO","AZÚCAR"][L],w/2,_*0.53)},256,384)}));for(let k=0;k<3;k++)for(let L=0;L<8;L++)W(-3+L*0.17,1.73+k*0.48,-4.46,0.13,0.23,0.075,E[(L+k)%4],(K()-0.5)*0.1);for(let[k,L]of[[-2.7,-3.5],[2.4,-3.3]])W(k,0.18,L,0.51,0.35,0.4,"#897052"),W(k+0.05,0.47,L-0.04,0.4,0.23,0.32,"#a68c62");for(let k=0;k<3;k++)Z(2.48+k*0.24,0.18,-2.3,0.09,0.1,0.31,"#74a69e",12),Z(2.48+k*0.24,0.36,-2.3,0.035,0.043,0.075,"#5b8c84",10);for(let k=0;k<4;k++){let L=new A0(new E8(1,10,7),$(k%2?"#a08e69":"#b0a078"));L.scale.set(0.15,0.24,0.12),L.position.set(-2.6+k*0.25,0.23,-2.1),L.rotation.z=(k-1.5)*0.06,L.castShadow=!0,J.add(L)}let N=new A0(new F9(0.72,0.69),new JJ({roughness:1,map:Q((k,L,z)=>{k.fillStyle="#263d30",k.fillRect(0,0,L,z),k.strokeStyle="#9c8c62",k.lineWidth=16,k.strokeRect(8,8,L-16,z-16),k.fillStyle="#dcdcb8",k.textAlign="center";for(let[w,_,D]of[["HOY HAY",68,43],["CAFÉ",150,48],["HIELO · PAN",228,32],["REFRESCOS",292,31]])k.font=`${D}px Georgia`,k.fillText(w,L/2,_)},384,360)}));N.position.set(-3.43,1.6,-2.33),N.rotation.z=0.025,J.add(N);let q=[];W(-1.12,1.59,-4,0.42,0.21,0.31,"#677761"),W(-1.12,1.61,-3.836,0.34,0.1,0.016,"#414b3d"),W(-0.38,1.5,-3.98,0.3,0.018,0.22,"#c5b887");for(let[k,L,z]of[[0.7,-4.03,"#8b7747"],[0.98,-4.07,"#637751"],[1.29,-4.02,"#a88b50"]])Z(k,1.6,L,0.07,0.075,0.25,z,14),Z(k,1.739,L,0.077,0.077,0.028,"#aaa386",12);W(0.2,1.51,-4.01,0.4,0.07,0.28,"#6c5838");for(let k=0;k<4;k++){let L=new A0(new E8(1,10,6),$(k%2?"#bca276":"#a98e61"));L.scale.set(0.055,0.035,0.115),L.position.set(0.07+k*0.085,1.57,-4),L.rotation.y=(k-1.5)*0.13,J.add(L)}let F=new nJ({transparent:!0,depthWrite:!1,map:Q((k,L,z)=>{for(let w=0;w<90;w++)k.fillStyle=w%2?"#152c2110":"#3036230a",k.beginPath(),k.ellipse(L/2+(K()-0.5)*L*0.45,z/2+(K()-0.5)*z*0.45,K()*L*0.24,K()*z*0.18,K()*Math.PI,0,Math.PI*2),k.fill()},256,256)});for(let[k,L,z,w]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let _=new A0(new F9(z,w),F);_.rotation.x=-Math.PI/2,_.position.set(k,0.008,L),J.add(_)}for(let[k,L]of[[-3,-0.9],[3.3,-1.5]]){Z(k,0.18,L,0.18,0.13,0.34,"#87553c",14),Z(k,0.354,L,0.16,0.16,0.012,"#3f422d",12);let z=new MJ;z.position.set(k,0.36,L),J.add(z);for(let w=0;w<7;w++){let _=new QQ;_.moveTo(0,0),_.quadraticCurveTo(-0.09,0.23,0,0.55+K()*0.12),_.quadraticCurveTo(0.09,0.23,0,0);let D=new A0(new $Q(_,5),new JJ({color:w%2?"#597d4f":"#3c603e",roughness:1,side:mJ}));D.rotation.set(0.3+K()*0.4,w*Math.PI*2/7,0),z.add(D)}q.push(z)}let B=new F9(0.55,1.3,5,9),R=new A0(B,new JJ({color:"#b2a27c",roughness:1,side:mJ}));R.position.set(-2.85,1.75,-3.05),J.add(R);let O=B.attributes.position,P=O.array.slice();return{update(k){q.forEach((L,z)=>L.rotation.z=Math.sin(k*0.53+z*2.1)*0.015);for(let L=0;L<O.count;L++){let z=P[L*3+1];O.setZ(L,Math.sin(k*1.17+z*3)*0.025*(0.65-z)/1.3)}O.needsUpdate=!0}}}var wF=["cafe","morir","presidente","presidente"];function TF(){let J=document.createElement("canvas");J.width=256,J.height=128;let Q=J.getContext("2d");Q.fillStyle="#f1ece0",Q.fillRect(0,0,256,128),Q.fillStyle="#b3262d",Q.fillRect(0,10,256,14),Q.fillRect(0,104,256,14),Q.fillStyle="#1f5a36",Q.beginPath(),Q.ellipse(128,64,54,28,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#f1ece0",Q.beginPath(),Q.ellipse(128,64,46,21,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#b3262d",Q.fillRect(92,58,72,12);let $=new Q6(J);return $.colorSpace=Z9,$}function _F(){let J=new MJ,Q=(X,U)=>new U0(X,U),$=[Q(0,0),Q(0.034,0),Q(0.037,0.006),Q(0.037,0.165),Q(0.034,0.188),Q(0.022,0.222),Q(0.0145,0.252),Q(0.0138,0.274),Q(0.0158,0.279),Q(0.0158,0.29),Q(0,0.29)],W=new JJ({color:"#2d5a26",roughness:0.18,metalness:0.05,envMapIntensity:1.4});J.add(new A0(new h8($,20),W));let Z=new A0(new h8($.slice(1,5).map((X)=>Q(X.x+0.0006,X.y)),20),new JJ({color:"#e8f0e4",roughness:0.9,transparent:!0,opacity:0.22,depthWrite:!1}));J.add(Z);let K=new A0(new cJ(0.0376,0.0376,0.075,24,1,!0),new JJ({map:TF(),roughness:0.6}));K.position.y=0.095,J.add(K);let H=new A0(new cJ(0.0149,0.0152,0.02,16,1,!0),new JJ({color:"#b3262d",roughness:0.5}));H.position.y=0.262,J.add(H);let Y=new A0(new cJ(0.0165,0.0165,0.006,16),new JJ({color:"#c9c4b6",roughness:0.35,metalness:0.7}));return Y.position.y=0.291,J.add(Y),{g:J,alto:0.11,radio:0.037,inclina:1.25,boca:0.18}}function SF(){let J=new MJ,Q=new A0(new cJ(0.034,0.029,0.14,24,1,!0),new JJ({color:"#dfe9ec",roughness:0.08,transparent:!0,opacity:0.28,depthWrite:!1,side:mJ}));Q.position.y=0.07,Q.renderOrder=2,J.add(Q);let $=new A0(new cJ(0.029,0.029,0.008,24),new JJ({color:"#dfe9ec",roughness:0.1,transparent:!0,opacity:0.5}));$.position.y=0.004,J.add($);let W=new A0(new cJ(0.0318,0.0285,0.112,24),new JJ({color:"#f2bf86",roughness:0.45}));W.position.y=0.064,J.add(W);for(let[K,H,Y]of[[0.01,0.006,0.4],[-0.009,-0.008,1.1],[0.002,-0.012,2]]){let X=new A0(new uJ(0.016,0.013,0.016),new JJ({color:"#f6f3ec",roughness:0.15,transparent:!0,opacity:0.8}));X.position.set(K,0.121,H),X.rotation.set(Y,Y*0.7,0),J.add(X)}let Z=new A0(new cJ(0.0028,0.0028,0.19,8),new JJ({color:"#c8392e",roughness:0.5}));return Z.position.set(0.012,0.11,0.004),Z.rotation.z=-0.16,J.add(Z),{g:J,alto:0.06,radio:0.034,inclina:0.85,boca:0.09}}function jF(){let J=new MJ,Q=new JJ({color:"#efe9da",roughness:0.22}),$=new A0(new cJ(0.045,0.04,0.008,28),Q);$.position.y=0.004,J.add($);let W=new JJ({color:"#efe9da",roughness:0.22,side:mJ}),Z=new A0(new cJ(0.028,0.021,0.048,24,1,!0),W),K=new A0(new $6(0.021,20),Q);K.rotation.x=-Math.PI/2,K.position.y=0.0085,J.add(K),Z.position.y=0.032,J.add(Z);let H=new A0(new $6(0.0262,24),new JJ({color:"#2a160c",roughness:0.15}));H.rotation.x=-Math.PI/2,H.position.y=0.049,J.add(H);let Y=new A0(new b8(0.012,0.0035,6,12,Math.PI*1.3),Q);return Y.position.set(0.03,0.034,0),Y.rotation.z=-Math.PI*0.65,J.add(Y),J.remove($),{g:J,alto:0.03,radio:0.028,inclina:0.9,boca:0.03,plato:$}}function FU(J){let Q=[];for(let $=0;$<4;$++){let W=wF[$],Z=W==="presidente"?_F():W==="morir"?SF():jF(),[K,H,Y]=w9[$],X=R0.tableWidth/2-0.055,U=R0.tableCenterY+R0.tableThickness/2,G=new S(-X,0,R0.seatDistance-X).applyAxisAngle(new S(0,1,0),Y).add(new S(K,0,H));if(G.y=U,Z.g.traverse((E)=>{if(E.isMesh)E.castShadow=!0,E.receiveShadow=!0}),Z.plato)G.y+=0.008;if(Z.g.position.copy(G),J.add(Z.g),Z.plato)Z.plato.position.copy(G),Z.plato.position.y=U+0.004,Z.plato.traverse((E)=>{if(E.isMesh)E.receiveShadow=!0}),J.add(Z.plato);Q.push({group:Z.g,home:G,index:$,tipo:W,alto:Z.alto,radio:Z.radio,inclina:Z.inclina,boca:Z.boca})}return Q}var k7=Math.PI*2,p0=(J=0,Q=0,$=0)=>new S(J,Q,$),yF=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function JV(J,{onProgress:Q=()=>{}}={}){let $=new t7;$.background=new v0("#132931"),$.fog=new n6("#132931",0.024);let W=new hJ(42,innerWidth/innerHeight,0.08,90);W.position.set(3.1,2.65,4.2);let Z;try{Z=new FK({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let K=!new URLSearchParams(location.search).has("hq")&&/SwiftShader|llvmpipe|Software/i.test((()=>{let V=Z.getContext(),T=V.getExtension("WEBGL_debug_renderer_info");return T?V.getParameter(T.UNMASKED_RENDERER_WEBGL):""})());Z.setSize(innerWidth,innerHeight),Z.setPixelRatio(K?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),Z.outputColorSpace=Z9,Z.toneMapping=g6,Z.toneMappingExposure=1.08,Z.shadowMap.enabled=!K,Z.shadowMap.type=J$,J.appendChild(Z.domElement);{let V=new EQ(Z);$.environment=V.fromScene(new AK,0.04).texture,$.environmentIntensity=0.3,V.dispose()}let H=new IK(W,Z.domElement);H.target.set(0,0.8,-0.15),H.enableDamping=!0,H.dampingFactor=0.065,H.enablePan=!1,H.minDistance=0.8,H.maxDistance=8,H.minPolarAngle=0.25,H.maxPolarAngle=Math.PI*0.48,H.update(),$.add(new j$("#b9c9dd","#4a3b30",0.42));let Y=new H6("#9fb6d6",0.55);Y.position.set(-5,9,5),$.add(Y);let X=new K6("#ffcf94",48,14,Math.PI*0.44,0.8,1.8);X.position.set(0,4.15,0.5),X.target.position.set(0,0.2,0),X.castShadow=!0,X.shadow.mapSize.set(K?1024:2048,K?1024:2048),X.shadow.bias=-0.0004,X.shadow.normalBias=0.035,$.add(X,X.target);let U=new m8("#ffbf7d",17,9,2);U.position.set(0,2.5,-3.5),$.add(U);let G=new Map,E=new Map;function N(V,T=0.85,l=0){let f=V+","+T+","+l;if(!G.has(f))G.set(f,new JJ({color:V,roughness:T,metalness:l}));return G.get(f)}function q(V,T,l,f=[0,0,0],g=[1,1,1]){let s=T.uuid;if(!E.has(s))E.set(s,{material:T,geos:[]});let Q0=new g0().compose(p0(...l),new YJ().setFromEuler(new C9(...f)),p0(...g));V.applyMatrix4(Q0),E.get(s).geos.push(V)}function F(V,T,l,f,g,s,Q0,o=0){q(new uJ(f,g,s),typeof Q0==="string"?N(Q0):Q0,[V,T,l],[0,o,0])}function B(V,T,l,f,g,s,Q0,o=10,Z0=[0,0,0]){q(new cJ(f,g,s,o),typeof Q0==="string"?N(Q0):Q0,[V,T,l],Z0)}function R(V,T=512,l=512){let f=document.createElement("canvas");f.width=T,f.height=l,V(f.getContext("2d"),T,l);let g=new Q6(f);return g.colorSpace=Z9,g.anisotropy=Math.min(8,Z.capabilities.getMaxAnisotropy()),g}let O=191,P=()=>{return O=Math.imul(O,1664525)+1013904223>>>0,O/4294967296},k=R((V,T,l)=>{V.fillStyle="#65432b",V.fillRect(0,0,T,l);for(let f=0;f<700;f++){V.strokeStyle=`rgba(${P()>0.5?"170,122,70":"35,22,14"},${0.08+P()*0.2})`,V.lineWidth=0.3+P()*2,V.beginPath();let g=P()*l;V.moveTo(0,g);for(let s=0;s<T;s+=20)V.lineTo(s,g+Math.sin(s*0.013+f)*3);V.stroke()}}),L=new JJ({map:k,roughness:0.65,color:"#e7bc8c"}),z=N("#4c3022",0.75),w=N("#287770"),_=N("#d2c5a2"),D=N("#a65443"),A=R((V,T,l)=>{let f=T/2;for(let Z0=0;Z0<2;Z0++)for(let K0=0;K0<2;K0++){let B0=K0*f,u0=Z0*f;V.save(),V.beginPath(),V.rect(B0,u0,f,f),V.clip(),V.fillStyle="#c4b99f",V.fillRect(B0,u0,f,f);for(let[G0,EJ]of[[B0,u0],[B0+f,u0],[B0,u0+f],[B0+f,u0+f]])V.strokeStyle="#8d6450",V.lineWidth=f*0.04,V.beginPath(),V.arc(G0,EJ,f*0.42,0,Math.PI*2),V.stroke(),V.fillStyle="#4f6763",V.beginPath(),V.arc(G0,EJ,f*0.13,0,Math.PI*2),V.fill(),V.strokeStyle="#c4b99f",V.lineWidth=f*0.02,V.beginPath(),V.arc(G0,EJ,f*0.11,0,Math.PI*2),V.stroke();let F0=B0+f/2,x0=u0+f/2,i0=(G0,EJ)=>{V.fillStyle=EJ,V.beginPath(),V.moveTo(F0,x0-G0),V.lineTo(F0+G0,x0),V.lineTo(F0,x0+G0),V.lineTo(F0-G0,x0),V.closePath(),V.fill()};i0(f*0.2,"#8d6450"),i0(f*0.13,"#c4b99f"),i0(f*0.07,"#3a3630"),V.restore(),V.strokeStyle="#7e7563",V.lineWidth=3,V.strokeRect(B0+1.5,u0+1.5,f-3,f-3)}for(let Z0=0;Z0<9000;Z0++)V.fillStyle=P()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",V.fillRect(P()*T,P()*l,1+P()*2,1+P()*2);for(let Z0=0;Z0<40;Z0++){let K0=V.createRadialGradient(0,0,0,0,0,1),B0=P()*T,u0=P()*l,F0=20+P()*90;V.save(),V.translate(B0,u0),V.scale(F0,F0),K0.addColorStop(0,"rgba(40,34,26,.10)"),K0.addColorStop(1,"rgba(40,34,26,0)"),V.fillStyle=K0,V.fillRect(-1,-1,2,2),V.restore()}},1024,1024);A.wrapS=A.wrapT=y8,A.repeat.set(35.55555555555556,27.77777777777778),F(0,-0.1,0,32,0.2,25,new JJ({map:A,roughness:0.86,color:"#9d937f"})),F(0,-0.11,6.3,35,0.1,5.5,"#343b3b"),F(0,0.02,3.45,35,0.2,0.2,"#aaa592");for(let V=-8;V<9;V++)F(V*1.8,-0.045,6.3,0.7,0.012,0.045,"#b9ad83");F(0,1.6,-5.1,7.5,3.4,0.2,w),F(-3.8,1.6,-3.85,0.2,3.4,2.7,w),F(3.8,1.6,-3.85,0.2,3.4,2.7,w),F(-3.48,1.1,-2.52,0.7,2.3,0.32,w),F(3.45,1.1,-2.52,0.8,2.3,0.32,w),F(0,2.95,-2.52,7.5,0.42,0.35,D),F(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let V=0;V<30;V++)F(-4+V*0.276,3.3,-3.7,0.028,0.055,4.6,"#82928a");F(0,0.7,-4.24,3.9,1.4,0.62,L),F(0,1.43,-4.2,4.08,0.1,0.78,L);for(let V=0;V<3;V++)F(-0.6,1.58+V*0.48,-4.78,5.8,0.065,0.38,L),F(-0.6,1.84+V*0.48,-4.98,5.8,0.48,0.065,"#443e30");F(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),F(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");for(let V=0;V<3;V++)F(2.95,0.59+V*0.51,-4.05,0.8,0.025,0.05,"#b3c5bc");let d=[];for(let V=0;V<88;V++){let T=Math.floor(V/29),l=V%29;d.push({pos:[-3.18+l*0.182,1.615+T*0.48,-4.69],scale:0.7+V%5*0.07,color:["#566641","#a27735","#293f37","#6b3126"][V%4]})}let h=new h8([new U0(0,0),new U0(0.036,0),new U0(0.043,0.025),new U0(0.043,0.17),new U0(0.019,0.205),new U0(0.017,0.285),new U0(0.021,0.29),new U0(0.021,0.305),new U0(0,0.31)],12);d.forEach((V)=>q(h.clone(),N(V.color,0.3),V.pos,[0,0,0],[V.scale,V.scale,V.scale]));for(let[V,T,l]of[[-3.1,-1.9,"#a15340"],[3.1,-2,"#9d6540"],[-3.2,-2,"#5f6e39"]])for(let f=0;f<3;f++){F(V,0.19+f*0.34,T,0.52,0.3,0.4,l);for(let g=0;g<5;g++)F(V-0.2+g*0.1,0.18+f*0.34,T+0.204,0.055,0.16,0.015,"#2c3025")}for(let V=0;V<5;V++){let T=-7-V*3.5;F(T,1.5,-3,3.1,3,3.2,V%2?"#b3694f":"#4c8174"),F(T,2.2,-1.38,1,0.8,0.045,"#b59961"),F(T,2.2,-1.35,0.045,0.86,0.055,"#273e37"),F(T,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let V=0;V<4;V++)B(-5-V*5,2.3,-2.1,0.08,0.09,4.6,"#665443"),F(-5-V*5,4.2,-2.1,1.8,0.09,0.09,"#514b3d");function p(V,T,l,f="#202d28"){let g=new W6(p0(...V),p0(...l),p0(...T));q(new WQ(g,20,0.008,4,!1),N(f),[0,0,0])}p([-8,3.9,-0.9],[6,3.9,-0.9],[0,2.4,-0.9]);for(let V=0;V<14;V++){let T=-5+V*0.78,l=3.6-0.4*Math.sin(V/13*Math.PI);B(T,l,-0.9,0.026,0.031,0.075,new JJ({color:"#fff0c1",emissive:"#ffbc63",emissiveIntensity:2}),8)}p([0,5,-1],[0,3.75,0.25],[0,4.4,-0.1]),B(0,3.67,0.25,0.08,0.05,0.1,new JJ({color:"#ffe7a6",emissive:"#ffd18b",emissiveIntensity:3}),12);let e=new MJ;e.position.set(4.8,0,-2.8),$.add(e);let j=new A0(new cJ(0.1,0.15,4.5,9),N("#696047"));j.position.y=2.25,e.add(j);for(let V=0;V<9;V++){let T=new A0(new E8(1,10,5),N(V%2?"#4a654c":"#344e3d"));T.scale.set(0.27,0.075,1.5),T.position.set(Math.sin(V*k7/9)*0.72,4.35,Math.cos(V*k7/9)*0.72),T.rotation.set(0.23,V*k7/9,0),e.add(T)}let n=new A0(new c8(R0.tableWidth,R0.tableThickness,R0.tableWidth,3,0.035),L);n.position.y=R0.tableCenterY,n.castShadow=!0,n.receiveShadow=!0,$.add(n);let $0=new A0(new c8(R0.feltWidth,0.012,R0.feltWidth,2,0.02),new JJ({color:"#284e3e",roughness:1}));$0.position.y=R0.feltCenterY,$0.receiveShadow=!0,$.add($0);let u=R0.tableWidth/2-0.07;for(let V of[-u,u])for(let T of[-u,u])F(V,0.35,T,0.075,0.68,0.075,z);let E0=["#b8412f","#2f67a6"];for(let V=0;V<4;V++){let[T,l,f]=w9[V],g=R0.feltWidth/2-0.012,s=new A0(new F9(R0.feltWidth*0.72,0.009),new JJ({color:E0[V%2],roughness:0.9}));s.rotation.set(-Math.PI/2,0,f),s.position.set(T*g/R0.seatDistance,R0.surfaceY+0.0006,l*g/R0.seatDistance),s.receiveShadow=!0,$.add(s)}let t=new JJ({roughness:0.92,map:R((V,T,l)=>{V.fillStyle="#8f7446",V.fillRect(0,0,T,l);let f=12,g=T/f;for(let s=0;s<f;s++)for(let Q0=0;Q0<f;Q0++){let o=(Q0+s)%2===0;for(let Z0=0;Z0<3;Z0++){let K0=150+P()*45|0;V.fillStyle=`rgb(${K0+30},${K0+8},${K0-45})`;let B0=Z0*g/3+g*0.04,u0=g/3-g*0.08;if(o)V.fillRect(Q0*g+1,s*g+B0,g-2,u0);else V.fillRect(Q0*g+B0,s*g+1,u0,g-2)}}V.fillStyle="rgba(40,28,14,.18)";for(let s=0;s<=f;s++)V.fillRect(s*g-1,0,2,l),V.fillRect(0,s*g-1,T,2)},256,256)});for(let V=0;V<4;V++){let[T,l,f]=w9[V],g=new MJ;g.position.set(T,0,l),g.rotation.y=f,$.add(g);let s=N(V%2?"#2f5f94":"#a63d2d",0.62),Q0=(o,Z0,K0,B0,u0,F0,x0=s,i0=0.008)=>{let G0=p0(B0,u0,F0).applyAxisAngle(p0(0,1,0),f).add(p0(T,0,l));q(new c8(o,Z0,K0,2,i0),x0,G0.toArray(),[0,f,0])};Q0(R0.chairSeatWidth-0.04,0.035,0.5,0,R0.chairSeatY,0,t,0.01);for(let o of[-1,1])Q0(0.04,0.05,0.54,o*(R0.chairSeatWidth/2-0.02),R0.chairSeatY-0.005,0);for(let o of[-1,1])Q0(R0.chairSeatWidth,0.05,0.04,0,R0.chairSeatY-0.005,o*0.25);for(let o of[-0.24,0.24])for(let Z0 of[-0.21,0.21])Q0(0.04,R0.chairSeatY,0.04,o,R0.chairSeatY/2,Z0);for(let o of[-0.24,0.24])Q0(0.024,0.024,0.42,o,0.15,0);Q0(0.48,0.024,0.024,0,0.15,0.21);for(let o of[-0.24,0.24])Q0(0.04,0.52,0.04,o,R0.chairSeatY+0.26,-0.23);for(let o of[0.2,0.33,0.46])Q0(0.46,o===0.46?0.07:0.045,0.022,0,R0.chairSeatY+o,-0.23)}function W0(V,T,l,f,g,s=60){let Q0=R((o,Z0,K0)=>{o.fillStyle=f,o.fillRect(0,0,Z0,K0),o.fillStyle=g,o.textAlign="center",o.textBaseline="middle",o.font=`bold ${s}px Georgia`,o.fillText(V,Z0/2,K0/2)},1024,256);return new A0(new F9(T,l),new nJ({map:Q0}))}let X0=W0("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);X0.position.set(0,2.94,-2.33),$.add(X0);let h0=W0("MESA",0.11,0.029,"#284e3e","#81906b",77);h0.rotation.x=-Math.PI/2,h0.position.set(0,R0.surfaceY+0.001,0.3),$.add(h0);let _0=new MJ;_0.position.set(0,2.62,-2.2),_0.rotation.x=-Math.PI/2,$.add(_0),B(0,2.9,-2.2,0.015,0.015,0.56,"#777a68",8),B(0,3.18,-2.2,0.075,0.075,0.025,"#767763",12);let RJ=new A0(new E8(0.075,12,8),N("#41493d"));_0.add(RJ);for(let V=0;V<5;V++){let T=new A0(new uJ(0.13,0.5,0.025),N("#85856e",0.88,0.05));T.position.set(Math.sin(V*k7/5)*0.285,Math.cos(V*k7/5)*0.285,0),T.rotation.z=-V*k7/5,_0.add(T)}let l0=new MJ;l0.position.set(-12,0.05,5.2),$.add(l0);for(let V of[-0.36,0.36]){let T=new A0(new b8(0.19,0.038,7,14),N("#182221"));T.position.set(V,0.2,0),l0.add(T)}let a=new A0(new c8(0.65,0.17,0.2,2,0.04),N("#823e2f",0.45,0.25));a.position.y=0.49,l0.add(a);let N0=new A0(new uJ(0.35,0.06,0.22),N("#202725"));N0.position.set(-0.08,0.61,0),l0.add(N0);let O0=new A0(new cJ(0.015,0.015,0.45,6),N("#8c9c96",0.4,0.5));O0.position.set(0.32,0.59,0),O0.rotation.z=-0.3,l0.add(O0);let f0=qU({scene:$,texture:R,mat:N,box:F,cylinder:B,random:P,teal:w,wood:L,storeSign:X0});for(let{material:V,geos:T}of E.values()){let l=kX(T,!1);if(l){let f=new A0(l,V);f.receiveShadow=!0,f.castShadow=!0,$.add(f)}T.forEach((f)=>f.dispose())}let j0=new MJ,S0=new MJ;$.add(j0,S0);let zJ=new c8(R0.tileLength,R0.tileThickness,R0.tileWidth,2,0.0022),a0=N("#f3edda",0.75),e0=N("#d9d4c1",0.75),XJ=new nJ({color:"#090d0c",toneMapped:!1}),$J=new nJ({color:"#111410",toneMapped:!1}),yJ=new cJ(R0.pipRadius,R0.pipRadius,0.0007,14),LJ=new uJ(0.0014,0.0005,R0.tileWidth*0.8),sJ=new Set([zJ,yJ,LJ]),AJ=new Set([a0,e0,XJ,$J]);function PJ(V,T,l=!1){let f=new MJ,g=new A0(zJ,l?e0:a0);if(g.castShadow=!0,g.receiveShadow=!0,f.add(g),!l){let s=[];if([V,T].forEach((o,Z0)=>yF[o].forEach((K0)=>s.push(p0((Z0===0?-1:1)*R0.tileLength/4+(K0%3-1)*R0.pipColumnSpacing,R0.tileThickness/2+0.0005,(Math.floor(K0/3)-1)*R0.pipRowSpacing)))),s.length){let o=new N8(yJ,XJ,s.length),Z0=new g0;s.forEach((K0,B0)=>o.setMatrixAt(B0,Z0.makeTranslation(K0.x,K0.y,K0.z))),f.add(o)}let Q0=new A0(LJ,$J);Q0.position.y=R0.tileThickness/2+0.0004,f.add(Q0)}return f}function b(V){return p0(V.x,R0.surfaceY+R0.tileThickness/2+0.001,V.z)}let wJ=new A0(new b8(0.2,0.006,5,38),new nJ({color:"#e8bf70",transparent:!0,opacity:0.7}));wJ.rotation.x=-Math.PI/2,wJ.position.y=0.027,$.add(wJ);let n0=[],VJ=[],I=[],M=[],y=new MK,m=0,H0=4,L0=[];M.push(...FU($));let D0=p0(),i=p0(),J0=p0(),C0=p0(),w0=new g0,M0=p0(),q0=p0();function y0(V){let T=null;if(V.root.traverse((F0)=>{if(F0.isSkinnedMesh&&F0.morphTargetDictionary&&!T)T=F0}),!T||T.morphTargetDictionary.parpadeo==null)return;V.cara={mesh:T,iP:T.morphTargetDictionary.parpadeo,iS:T.morphTargetDictionary.sonrisa};let l=T.geometry.attributes.position,f=T.userData?.boca;if(f){let F0=1e9,x0=0;for(let i0=0;i0<l.count;i0++){let G0=(l.getX(i0)-f[0])**2+(l.getY(i0)-f[1])**2+(l.getZ(i0)-f[2])**2;if(G0<F0)F0=G0,x0=i0}V.bocaMundo=(i0)=>{return T.skeleton.update(),T.getVertexPosition(x0,i0).applyMatrix4(T.matrixWorld)}}let g=T.userData?.ojos,s=T.userData?.parpado;if(!g||!s)return;let Q0=T.geometry.attributes.position,o=(F0)=>{let x0=1e9,i0=0;for(let G0=0;G0<Q0.count;G0++){let EJ=(Q0.getX(G0)-F0[0])**2+(Q0.getY(G0)-F0[1])**2+(Q0.getZ(G0)-F0[2])**2;if(EJ<x0)x0=EJ,i0=G0}return i0},Z0=new F9(0.027,0.0125,8,4);Z0.translate(0,-0.00625,0);let K0=Z0.attributes.position,B0=[];for(let F0=0;F0<K0.count;F0++){let x0=K0.getX(F0)/0.0135,i0=-K0.getY(F0)/0.0125;K0.setZ(F0,0.0032*Math.cos(x0*Math.PI/2)*(0.5+0.5*i0));let G0=i0>0.85?0.45:1;B0.push(G0,G0,G0)}Z0.setAttribute("color",new ZJ(B0,3)),Z0.computeVertexNormals();let u0=new JJ({color:new v0().setRGB(...s,Z9),roughness:0.7,vertexColors:!0});V.parpados=g.map((F0)=>{let x0=new A0(Z0,u0);return x0.visible=!1,x0.frustumCulled=!1,$.add(x0),{m:x0,k:o(F0)}})}function b0(V){let T=V.parpados;if(!T||!V.cara)return;let l=V.parpadeo||0;if(l<0.03){for(let Q0 of T)Q0.m.visible=!1;return}let f=V.cara.mesh;f.skeleton.update();let g=f.getVertexPosition(T[0].k,D0).applyMatrix4(f.matrixWorld).clone(),s=f.getVertexPosition(T[1].k,D0).applyMatrix4(f.matrixWorld).clone();if(V.head.getWorldPosition(M0),V.front.getWorldPosition(q0),C0.subVectors(q0,M0).normalize(),i.subVectors(s,g).normalize(),J0.crossVectors(C0,i).normalize(),J0.y<0)J0.negate();i.crossVectors(J0,C0).normalize(),w0.makeBasis(i,J0,C0);for(let[Q0,o]of[[T[0],g],[T[1],s]])Q0.m.visible=!0,Q0.m.quaternion.setFromRotationMatrix(w0),Q0.m.position.copy(o).addScaledVector(J0,0.0052).addScaledVector(C0,0.0024),Q0.m.scale.set(1,l,1)}async function HJ(V,T){try{Q(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][V]}…`,m/H0);let l=await y.loadAsync(`/models/${T}.glb`);VJ[V]=l;let f=l.scene,g=new MJ;g.add(f);let s=new HQ(f);if(l.animations[0])s.clipAction(l.animations.find((F0)=>F0.name==="Seated")||l.animations[0]).play();s.setTime(R0.neutralPoseTime),f.updateMatrixWorld(!0),f.traverse((F0)=>{if(F0.isSkinnedMesh)F0.computeBoundingBox();if(F0.isMesh)F0.castShadow=!0,F0.receiveShadow=!0,F0.frustumCulled=!1,F0.material.roughness=0.83});let Q0=new Q9().setFromObject(f),o=f.getObjectByName("Hips"),Z0=o?.getWorldPosition(p0())||Q0.getCenter(p0());f.position.set(-Z0.x,-Q0.min.y,-Z0.z);let[K0,B0,u0]=w9[V];if(g.position.set(K0,0,B0),g.rotation.y=u0,$.add(g),n0[V]={root:f,holder:g,index:V,pose:hK(f),head:f.getObjectByName("Head"),neck:f.getObjectByName("neck"),front:f.getObjectByName("headfront"),chest:f.getObjectByName("Spine"),hips:f.getObjectByName("Hips"),lomo:f.getObjectByName("Spine02"),muslos:[f.getObjectByName("LeftUpLeg"),f.getObjectByName("RightUpLeg")],hombros:[[1,f.getObjectByName("LeftShoulder")],[-1,f.getObjectByName("RightShoulder")]],spine:f.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map((F0)=>({lado:F0,hombro:f.getObjectByName(F0+"Shoulder"),brazo:f.getObjectByName(F0+"Arm"),antebrazo:f.getObjectByName(F0+"ForeArm"),mano:f.getObjectByName(F0+"Hand")}))},n0[V].bebida=M.find((F0)=>F0.index===V),y0(n0[V]),m++,Q(m===4?"The table is ready.":`${m} of 4 seats ready`,m/H0),I.length===0&&KJ>0)j9(KJ)}catch(l){L0.push(T),console.error("Character load failed",T,l),Q(`Could not load ${T}. Reload to retry.`,m/H0)}}let x=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((V,T)=>HJ(T,V))),V0=null,r=null,k0="",I0=new Set,Y0=new Map,z0=[0,1,2,3].map(()=>p0()),d0=(V)=>{let T=V.detail||{};if(T.active)I0.add(T.seat),Y0.set(T.seat,T.type);else I0.delete(T.seat)};window.addEventListener("mesa:botvoice",d0);let GJ=null,KJ=0,X9="",V9=0,t$="attract",TJ=null,$8=[],e$=0,O6=0;function R6(V){while(V.children.length){let T=V.children.pop();T.parent=null,T.traverse((l)=>{if(l.isMesh&&!sJ.has(l.geometry))l.geometry.dispose();if(l.isMesh&&!AJ.has(l.material))l.material.dispose()})}}function j9(V){KJ=V;let T=Math.min(8,V);for(let l=I.length-1;l>=T;l--)$.remove(I[l].holder),I.pop();while(I.length<T&&VJ.filter(Boolean).length){let l=I.length,f=VJ[l%4]||VJ.find(Boolean),g=m$(f.scene),s=new MJ;s.add(g);let Q0=new HQ(g);if(f.animations[0])Q0.clipAction(f.animations.find((B0)=>B0.name==="Seated")||f.animations[0]).play();Q0.setTime(R0.neutralPoseTime),g.updateMatrixWorld(!0),g.traverse((B0)=>{if(B0.isSkinnedMesh)B0.computeBoundingBox();if(B0.isMesh)B0.castShadow=!1,B0.frustumCulled=!1});let o=new Q9().setFromObject(g),Z0=g.getObjectByName("Hips")?.getWorldPosition(p0())||o.getCenter(p0());g.position.x-=Z0.x,g.position.y-=o.min.y,g.position.z-=Z0.z,s.position.set(-2.5+l%4*1.66,0,-2.5-Math.floor(l/4)*0.65),s.rotation.y=0,$.add(s);let K0=new A0(new uJ(0.56,0.06,0.54),_);K0.position.set(0,R0.chairSeatY,0),s.add(K0),I.push({root:g,holder:s,pose:hK(g),head:g.getObjectByName("Head"),neck:g.getObjectByName("neck"),front:g.getObjectByName("headfront"),chest:g.getObjectByName("Spine"),spine:g.getObjectByName("Spine01"),index:l+4})}}let B8=-1,W9=null;function kQ(V,T,l){if(document.documentElement.classList.contains("reduced"))return;let[f,g]=w9[T],s=p0(-g,0,f).normalize(),Q0=V.clone().addScaledVector(s,0.42).addScaledVector(p0(f,0,g).normalize(),-0.12);Q0.y=R0.surfaceY+(l?0.13:0.2),H.minDistance=0.25,W9={pos:W9?.pos||W.position.clone(),target:W9?.target||H.target.clone(),at:iJ.elapsedTime+3.4},TJ={from:W.position.clone(),to:Q0,fromTarget:H.target.clone(),toTarget:V.clone().setY(V.y+0.01),t:0,dur:0.45}}function s8(V="table"){H.minDistance=V==="seat"||V==="close"?0.3:0.7,H.minPolarAngle=V==="overhead"?0.01:0.25;let T,l=p0(0,0.8,0);if(V==="attract")T=p0(2.2,1.95,2.75),l=p0(0,0.92,-0.2);else if(V==="overhead")T=p0(0.001,1.72,0.3),l=p0(0,R0.surfaceY,0.02);else if(V==="seat")T=p0(0,1.28,R0.seatDistance-0.17),l=p0(0,0.8,-0.1);else if(V==="close")T=p0(0.62,1.3,1),l=p0(-0.03,0.85,-0.08);else T=p0(0.95,1.78,1.3);W9=null,TJ={from:W.position.clone(),to:T,fromTarget:H.target.clone(),toTarget:l,t:0}}function L6(V,T=0){GJ=V;{let f=V&&(V.phase==="handEnd"||V.phase==="seriesEnd")&&V.result,g=f?V.handNo+":"+V.phase:"";if(g&&g!==k0)r={t:iJ.elapsedTime+0.5,team:V.result.team??null};if(!f)r=null;k0=g}if(KJ!==T)j9(T);let l=V?V.handNo+":"+V.moves.length+":"+V.phase:"attract";if(l!==X9){if(X9=l,R6(j0),$8=[],V?.chain.length||0){let g=QU(V.chain,V.moves),s=V.event,Q0=["domino","capicua","tranque"].includes(s?.type),o=V.moves[V.moves.length-1],Z0=s?.type==="domino"||s?.type==="capicua",K0=s?.type==="play"?s.tile:Q0&&o?.type==="play"?o.tile:null;V.chain.forEach((B0,u0)=>{let F0=PJ(B0.x,B0.y);if(F0.position.copy(b(g[u0])),F0.rotation.y=g[u0].yaw,j0.add(F0),K0&&B0.id===K0){let[x0,i0]=w9[B0.seat],G0=p0(x0,0,i0).multiplyScalar(R0.rackRadius/R0.seatDistance).setY(R0.surfaceY+0.05),EJ=F0.position.clone(),WJ={obj:F0,from:G0,to:EJ,elapsed:0,duration:Z0?0.62:0.45,golpe:Z0};if(Q0)kQ(EJ,B0.seat,Z0);$8.push(WJ),F0.position.copy(G0),e$=performance.now();let oJ=n0[B0.seat];if(V0={p:EJ,t:iJ.elapsedTime+WJ.duration},oJ)oJ.reaction={time:iJ.elapsedTime},oJ.jugada={t0:iJ.elapsedTime,obj:F0,anim:WJ,hasta:EJ}}})}else if(!V||V.phase==="lobby")for(let g=0;g<28;g++){let s=PJ(0,0,!0);s.position.set((g*37%23-11)*0.016,R0.surfaceY+R0.tileThickness*(0.55+g%3*0.9),(g*13%19-9)*0.016),s.rotation.y=g*1.73,j0.add(s)}if(V?.phase==="playing"&&V.handNo!==V9&&V.moves.length===0){V9=V.handNo,O6=performance.now()+3400;for(let g=0;g<28;g++){let s=PJ(0,0,!0),Q0=p0((g*37%23-11)*0.015,R0.surfaceY+0.012,(g*13%19-9)*0.015),[o,Z0]=w9[g%4];s.position.copy(Q0),j0.add(s),$8.push({obj:s,from:Q0,to:p0(o,0,Z0).multiplyScalar(R0.rackRadius/R0.seatDistance).setY(R0.surfaceY+0.015),elapsed:-g*0.065,duration:1.2,remove:!0,shuffle:!0})}}}{R6(S0);let f=[];for(let g=0;g<4;g++){let s=!V||V.phase==="lobby"?0:V.counts[g]??0,[Q0,o,Z0]=w9[g];for(let K0=0;K0<s;K0++){let B0=new NJ;B0.quaternion.setFromAxisAngle(p0(0,1,0),Z0).multiply(new YJ().setFromAxisAngle(p0(1,0,0),0.12)).multiply(new YJ().setFromAxisAngle(p0(0,1,0),Math.PI/2)).multiply(new YJ().setFromAxisAngle(p0(0,0,1),Math.PI/2));let F0=R0.tableCenterY+R0.tableThickness/2+R0.tileLength/2*Math.cos(0.12)+R0.tileThickness/2*Math.sin(0.12)+0.001;B0.position.copy(p0((K0-(s-1)/2)*R0.rackSpacing,F0,-R0.rackRadius).applyAxisAngle(p0(0,1,0),Z0)),B0.updateMatrix(),f.push(B0.matrix.clone())}}if(f.length){let g=new N8(zJ,e0,f.length);f.forEach((s,Q0)=>g.setMatrixAt(Q0,s)),g.castShadow=!0,g.receiveShadow=!0,S0.add(g)}}if(wJ.visible=V?.phase==="playing",wJ.visible){let[f,g]=w9[V.turn];wJ.position.set(f,0.025,g)}}let iJ=new f$,i8=0,D7=0,M7=0,V6=60,DQ=!1,MQ,B6="high",C=null;function v(){if(DQ)return;MQ=requestAnimationFrame(v);let V=iJ.getDelta(),T=Math.min(V,0.06),l=C??iJ.elapsedTime,f=performance.now();if(D7++,M7+=V,M7>1)V6=D7/M7,D7=0,M7=0;i8++;let g=document.documentElement.classList.contains("reduced");if(W9&&iJ.elapsedTime>W9.at)TJ={from:W.position.clone(),to:W9.pos,fromTarget:H.target.clone(),toTarget:W9.target,t:0,dur:1.2},W9=null;if(B8>=0){let o=iJ.elapsedTime-B8;if(j0.position.y=o<0.3?Math.sin(o/0.3*Math.PI)*0.004*(1-o/0.3):0,o>=0.3)B8=-1}if(TJ){TJ.t=Math.min(1,TJ.t+T/(TJ.dur||1.1));let o=TJ.t*TJ.t*(3-2*TJ.t);if(W.position.lerpVectors(TJ.from,TJ.to,o),H.target.lerpVectors(TJ.fromTarget,TJ.toTarget,o),TJ.t===1)TJ=null}if(!g)_0.rotation.z=l*3.5,e.rotation.z=Math.sin(l*0.47)*0.009,f0.update(l);l0.visible=!0,l0.position.set(-4.7,0.05,2.8),l0.rotation.y=-0.28;let s=GJ,Q0={dt:T,jugando:s?.phase==="playing",turno:s?.turn,habla:I0,hablaTipo:Y0,foco:V0,fin:r,cabezas:n0.map((o,Z0)=>o?.head?o.head.getWorldPosition(z0[Z0]):null)};for(let o of n0.filter(Boolean))r$(o,l,g,Q0),b0(o);for(let o of I)r$(o,l,g,Q0);if($8=$8.filter((o)=>{if(o.elapsed+=T,o.elapsed<0)return!0;let Z0=Math.min(1,o.elapsed/o.duration),K0=Z0*Z0*(3-2*Z0);if(o.golpe){let B0=Math.min(1,Z0/0.62);if(o.obj.position.lerpVectors(o.from,o.to,B0*B0*(3-2*B0)),o.obj.position.y+=Z0<0.62?Math.sin(B0*Math.PI/2)*0.17:0.17*(1-((Z0-0.62)/0.38)**2),Z0===1&&!o.sono)o.sono=!0,B8=iJ.elapsedTime}else o.obj.position.lerpVectors(o.from,o.to,K0),o.obj.position.y+=Math.sin(Z0*Math.PI)*(o.shuffle?0.03:0.07);if(o.shuffle)o.obj.rotation.y=Math.sin(Z0*k7)*0.6;if(Z0===1&&o.remove)return j0.remove(o.obj),!1;return Z0<1}),S0.visible=f>=O6,H.update(),Z.render($,W),i8%2===0)for(let o of document.querySelectorAll("[data-seatlabel]")){let Z0=Number(o.dataset.seatlabel),[K0,B0]=w9[Z0],F0=(n0[Z0]?.head?.getWorldPosition(p0()).add(p0(0,0.23,0))||p0(K0,1.45,B0)).project(W),x0=!1;if(F0.y>0.8&&n0[Z0]?.head)F0=n0[Z0].head.getWorldPosition(p0()).add(p0(0,-0.1,0)).project(W),x0=!0;let i0=Math.min(F0.y,0.8);o.style.transform=`translate(${(F0.x*0.5+0.5)*innerWidth}px,${(-i0*0.5+0.5)*innerHeight}px) translate(-50%,${x0?"0":"-100%"})`,o.style.visibility=F0.z>1||Math.abs(F0.x)>1.1||F0.y<-1.15?"hidden":"visible"}if(i8%10===0||i8===1){window.mesaRigDebug=n0.filter(Boolean).map((Z0)=>({index:Z0.index,head:Z0.head?.getWorldPosition(p0()).toArray(),hip:Z0.root.getObjectByName("Hips")?.getWorldPosition(p0()).toArray(),rootScale:Z0.root.scale.toArray()})),window.mesaDiagnostics={fps:Math.round(V6),drawCalls:Z.info.render.calls,triangles:Z.info.render.triangles,characters:m,crowd:KJ,visibleCrowd:I.length,boardTiles:GJ?.chain.length||0,quality:B6,modelErrors:L0};let o=document.querySelector("#perf");if(o)o.textContent=`${Math.round(V6)} fps · ${Z.info.render.calls} draws`}}window.mesaCamara=(V,T)=>{TJ=null,W9=null,H.minDistance=0.1,W.position.set(...V),H.target.set(...T),H.update()},window.mesaCara=(V,T,l)=>{let f=n0[V];if(f)f.caraFija=T==null?null:{p:T,s:l??0}},window.mesaBeber=(V,T)=>{let l=n0[V];if(l&&l.bebida&&!l.jugada)l.trago={t0:iJ.elapsedTime,fijo:T}},L6(null),v();let c=()=>{W.aspect=innerWidth/innerHeight,W.updateProjectionMatrix(),Z.setSize(innerWidth,innerHeight)};return window.addEventListener("resize",c),H.addEventListener("start",()=>{TJ=null,W9=null}),{update:L6,setCrowd:j9,setCamera:s8,ready:x,sampleTime(V){C=V;for(let T of[...n0.filter(Boolean),...I])r$(T,V,!1);Z.render($,W)},setMode(V){t$=V,s8(V==="attract"?"attract":"table")},quality(V){B6=V,Z.shadowMap.enabled=V!=="low"&&!K,Z.setPixelRatio(K?0.65:V==="low"?1:Math.min(devicePixelRatio,1.5,1920/innerWidth))},dispose(){DQ=!0,window.removeEventListener("mesa:botvoice",d0),cancelAnimationFrame(MQ),window.removeEventListener("resize",c),H.dispose(),Z.dispose(),J.replaceChildren()}}}export{JV as createWorld};

var sH="186",L7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},V7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iH=0,_W=1,oH=2;var i7=1,aH=2,J$=3,B7=0,I6=1,a9=2,Q8=0,e$=1,w8=2,SW=3,wW=4,rH=5;var $$=100,tH=101,eH=102,J5=103,$5=104,Q5=200,Z5=201,K5=202,W5=203,X5=204,Y5=205,H5=206,U5=207,N5=208,G5=209,F5=210,E5=211,q5=212,O5=213,R5=214,L5=0,V5=1,B5=2,jW=3,D5=4,k5=5,M5=6,C5=7,I5=0,P5=1,z5=2,R8=0,JQ=1,$Q=2,QQ=3,o7=4,ZQ=5,KQ=6,WQ=7;var Q$=301,a7=302,hZ=303,xZ=304,XQ=306,D7=1000,Z$=1001,gZ=1002,L8=1003,pZ=1004;var r7=1005;var L6=1006,K$=1007;var j8=1008;var V8=1009,A5=1010,T5=1011,YQ=1012,yW=1013,k7=1014,r8=1015,V6=1016,fW=1017,vW=1018,W$=1020,_5=35902,S5=35899,w5=1021,j5=1022,y8=1023,t7=1026,e7=1027,y5=1028,bW=1029,JJ=1030,hW=1031;var xW=1033,mZ=33776,lZ=33777,uZ=33778,dZ=33779,gW=35840,pW=35841,mW=35842,lW=35843,uW=36196,dW=37492,cW=37496,nW=37488,sW=37489,cZ=37490,iW=37491,oW=37808,aW=37809,rW=37810,tW=37811,eW=37812,JX=37813,$X=37814,QX=37815,ZX=37816,KX=37817,WX=37818,XX=37819,YX=37820,HX=37821,UX=36492,NX=36494,GX=36495,FX=36283,EX=36284,nZ=36285,qX=36286,OX=2200;var RX=2300,sZ=2301;var LX=0,HQ=1,X$=2;var VX=0,f5=1,$J="",J6="srgb",i6="srgb-linear",BX="linear",n9="srgb";var v5=512,b5=513,h5=514,iZ=515,x5=516,g5=517,oZ=518,p5=519;var DX="300 es",kX=2000;function RG(J){for(let $=J.length-1;$>=0;--$)if(J[$]>=65535)return!0;return!1}function LG(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function aJ(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function m5(){let J=aJ("canvas");return J.style.display="block",J}var QH={},rJ=null;function o$(...J){let $="THREE."+J.shift();if(rJ)rJ("log",$,...J);else console.log($,...J)}function l5(J){let $=J[0];if(typeof $==="string"&&$.startsWith("TSL:")){let Q=J[1];if(Q&&Q.isStackTrace)J[0]+=" "+Q.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function t0(...J){J=l5(J);let $="THREE."+J.shift();if(rJ)rJ("warn",$,...J);else{let Q=J[0];if(Q&&Q.isStackTrace)console.warn(Q.getError($));else console.warn($,...J)}}function Z9(...J){J=l5(J);let $="THREE."+J.shift();if(rJ)rJ("error",$,...J);else{let Q=J[0];if(Q&&Q.isStackTrace)console.error(Q.getError($));else console.error($,...J)}}function c7(...J){let $=J.join(" ");if($ in QH)return;QH[$]=!0,t0(...J)}function u5(J,$,Q){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync($,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Q);break;default:Z()}}setTimeout(W,Q)})}var d5={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class B8{addEventListener(J,$){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[J]===void 0)Q[J]=[];if(Q[J].indexOf($)===-1)Q[J].push($)}hasEventListener(J,$){let Q=this._listeners;if(Q===void 0)return!1;return Q[J]!==void 0&&Q[J].indexOf($)!==-1}removeEventListener(J,$){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J];if(Z!==void 0){let K=Z.indexOf($);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let $=this._listeners;if($===void 0)return;let Q=$[J.type];if(Q!==void 0){J.target=this;let Z=Q.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var T6=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ZH=1234567,c$=Math.PI/180,n7=180/Math.PI;function $8(){let J=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(T6[J&255]+T6[J>>8&255]+T6[J>>16&255]+T6[J>>24&255]+"-"+T6[$&255]+T6[$>>8&255]+"-"+T6[$>>16&15|64]+T6[$>>24&255]+"-"+T6[Q&63|128]+T6[Q>>8&255]+"-"+T6[Q>>16&255]+T6[Q>>24&255]+T6[Z&255]+T6[Z>>8&255]+T6[Z>>16&255]+T6[Z>>24&255]).toLowerCase()}function R9(J,$,Q){return Math.max($,Math.min(Q,J))}function MX(J,$){return(J%$+$)%$}function VG(J,$,Q,Z,K){return Z+(J-$)*(K-Z)/(Q-$)}function BG(J,$,Q){if(J!==$)return(Q-J)/($-J);else return 0}function n$(J,$,Q){return(1-Q)*J+Q*$}function DG(J,$,Q,Z){return n$(J,$,1-Math.exp(-Q*Z))}function kG(J,$=1){return $-Math.abs(MX(J,$*2)-$)}function MG(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*(3-2*J)}function CG(J,$,Q){if(J<=$)return 0;if(J>=Q)return 1;return J=(J-$)/(Q-$),J*J*J*(J*(J*6-15)+10)}function IG(J,$){return J+Math.floor(Math.random()*($-J+1))}function PG(J,$){return J+Math.random()*($-J)}function zG(J){return J*(0.5-Math.random())}function AG(J){if(J!==void 0)ZH=J;let $=ZH+=1831565813;return $=Math.imul($^$>>>15,$|1),$^=$+Math.imul($^$>>>7,$|61),(($^$>>>14)>>>0)/4294967296}function TG(J){return J*c$}function _G(J){return J*n7}function SG(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function wG(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function jG(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function yG(J,$,Q,Z,K){let{cos:W,sin:X}=Math,Y=W(Q/2),H=X(Q/2),U=W(($+Z)/2),G=X(($+Z)/2),F=W(($-Z)/2),N=X(($-Z)/2),q=W((Z-$)/2),O=X((Z-$)/2);switch(K){case"XYX":J.set(Y*G,H*F,H*N,Y*U);break;case"YZY":J.set(H*N,Y*G,H*F,Y*U);break;case"ZXZ":J.set(H*F,H*N,Y*G,Y*U);break;case"XZX":J.set(Y*G,H*O,H*q,Y*U);break;case"YXY":J.set(H*q,Y*G,H*O,Y*U);break;case"ZYZ":J.set(H*O,H*q,Y*G,Y*U);break;default:t0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+K)}}function q8(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function d9(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var f8={DEG2RAD:c$,RAD2DEG:n7,generateUUID:$8,clamp:R9,euclideanModulo:MX,mapLinear:VG,inverseLerp:BG,lerp:n$,damp:DG,pingpong:kG,smoothstep:MG,smootherstep:CG,randInt:IG,randFloat:PG,randFloatSpread:zG,seededRandom:AG,degToRad:TG,radToDeg:_G,isPowerOfTwo:SG,ceilPowerOfTwo:wG,floorPowerOfTwo:jG,setQuaternionFromProperEuler:yG,normalize:d9,denormalize:q8};class O0{static{O0.prototype.isVector2=!0}constructor(J=0,$=0){this.x=J,this.y=$}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,$){return this.x=J,this.y=$,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let $=this.x,Q=this.y,Z=J.elements;return this.x=Z[0]*$+Z[3]*Q+Z[6],this.y=Z[1]*$+Z[4]*Q+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,$){return this.x=R9(this.x,J.x,$.x),this.y=R9(this.y,J.y,$.y),this}clampScalar(J,$){return this.x=R9(this.x,J,$),this.y=R9(this.y,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(R9(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(R9(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y;return $*$+Q*Q}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this}rotateAround(J,$){let Q=Math.cos($),Z=Math.sin($),K=this.x-J.x,W=this.y-J.y;return this.x=K*Q-W*Z+J.x,this.y=K*Z+W*Q+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class K9{constructor(J=0,$=0,Q=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=$,this._z=Q,this._w=Z}static slerpFlat(J,$,Q,Z,K,W,X){let Y=Q[Z+0],H=Q[Z+1],U=Q[Z+2],G=Q[Z+3],F=K[W+0],N=K[W+1],q=K[W+2],O=K[W+3];if(G!==O||Y!==F||H!==N||U!==q){let B=Y*F+H*N+U*q+G*O;if(B<0)F=-F,N=-N,q=-q,O=-O,B=-B;let R=1-X;if(B<0.9995){let E=Math.acos(B),z=Math.sin(E);R=Math.sin(R*E)/z,X=Math.sin(X*E)/z,Y=Y*R+F*X,H=H*R+N*X,U=U*R+q*X,G=G*R+O*X}else{Y=Y*R+F*X,H=H*R+N*X,U=U*R+q*X,G=G*R+O*X;let E=1/Math.sqrt(Y*Y+H*H+U*U+G*G);Y*=E,H*=E,U*=E,G*=E}}J[$]=Y,J[$+1]=H,J[$+2]=U,J[$+3]=G}static multiplyQuaternionsFlat(J,$,Q,Z,K,W){let X=Q[Z],Y=Q[Z+1],H=Q[Z+2],U=Q[Z+3],G=K[W],F=K[W+1],N=K[W+2],q=K[W+3];return J[$]=X*q+U*G+Y*N-H*F,J[$+1]=Y*q+U*F+H*G-X*N,J[$+2]=H*q+U*N+X*F-Y*G,J[$+3]=U*q-X*G-Y*F-H*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,$,Q,Z){return this._x=J,this._y=$,this._z=Q,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,$=!0){let{_x:Q,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,H=X(Q/2),U=X(Z/2),G=X(K/2),F=Y(Q/2),N=Y(Z/2),q=Y(K/2);switch(W){case"XYZ":this._x=F*U*G+H*N*q,this._y=H*N*G-F*U*q,this._z=H*U*q+F*N*G,this._w=H*U*G-F*N*q;break;case"YXZ":this._x=F*U*G+H*N*q,this._y=H*N*G-F*U*q,this._z=H*U*q-F*N*G,this._w=H*U*G+F*N*q;break;case"ZXY":this._x=F*U*G-H*N*q,this._y=H*N*G+F*U*q,this._z=H*U*q+F*N*G,this._w=H*U*G-F*N*q;break;case"ZYX":this._x=F*U*G-H*N*q,this._y=H*N*G+F*U*q,this._z=H*U*q-F*N*G,this._w=H*U*G+F*N*q;break;case"YZX":this._x=F*U*G+H*N*q,this._y=H*N*G+F*U*q,this._z=H*U*q-F*N*G,this._w=H*U*G-F*N*q;break;case"XZY":this._x=F*U*G-H*N*q,this._y=H*N*G-F*U*q,this._z=H*U*q+F*N*G,this._w=H*U*G+F*N*q;break;default:t0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if($===!0)this._onChangeCallback();return this}setFromAxisAngle(J,$){let Q=$/2,Z=Math.sin(Q);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix(J){let $=J.elements,Q=$[0],Z=$[4],K=$[8],W=$[1],X=$[5],Y=$[9],H=$[2],U=$[6],G=$[10],F=Q+X+G;if(F>0){let N=0.5/Math.sqrt(F+1);this._w=0.25/N,this._x=(U-Y)*N,this._y=(K-H)*N,this._z=(W-Z)*N}else if(Q>X&&Q>G){let N=2*Math.sqrt(1+Q-X-G);this._w=(U-Y)/N,this._x=0.25*N,this._y=(Z+W)/N,this._z=(K+H)/N}else if(X>G){let N=2*Math.sqrt(1+X-Q-G);this._w=(K-H)/N,this._x=(Z+W)/N,this._y=0.25*N,this._z=(Y+U)/N}else{let N=2*Math.sqrt(1+G-Q-X);this._w=(W-Z)/N,this._x=(K+H)/N,this._y=(Y+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,$){let Q=J.dot($)+1;if(Q<0.00000001)if(Q=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Q;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Q;else this._x=J.y*$.z-J.z*$.y,this._y=J.z*$.x-J.x*$.z,this._z=J.x*$.y-J.y*$.x,this._w=Q;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(R9(this.dot(J),-1,1)))}rotateTowards(J,$){let Q=this.angleTo(J);if(Q===0)return this;let Z=Math.min(1,$/Q);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,$){let{_x:Q,_y:Z,_z:K,_w:W}=J,X=$._x,Y=$._y,H=$._z,U=$._w;return this._x=Q*U+W*X+Z*H-K*Y,this._y=Z*U+W*Y+K*X-Q*H,this._z=K*U+W*H+Q*Y-Z*X,this._w=W*U-Q*X-Z*Y-K*H,this._onChangeCallback(),this}slerp(J,$){let{_x:Q,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)Q=-Q,Z=-Z,K=-K,W=-W,X=-X;let Y=1-$;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);Y=Math.sin(Y*H)/U,$=Math.sin($*H)/U,this._x=this._x*Y+Q*$,this._y=this._y*Y+Z*$,this._z=this._z*Y+K*$,this._w=this._w*Y+W*$,this._onChangeCallback()}else this._x=this._x*Y+Q*$,this._y=this._y*Y+Z*$,this._z=this._z*Y+K*$,this._w=this._w*Y+W*$,this.normalize();return this}slerpQuaternions(J,$,Q){return this.copy(J).slerp($,Q)}random(){let J=2*Math.PI*Math.random(),$=2*Math.PI*Math.random(),Q=Math.random(),Z=Math.sqrt(1-Q),K=Math.sqrt(Q);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin($),K*Math.cos($))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,$=0){return this._x=J[$],this._y=J[$+1],this._z=J[$+2],this._w=J[$+3],this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._w,J}fromBufferAttribute(J,$){return this._x=J.getX($),this._y=J.getY($),this._z=J.getZ($),this._w=J.getW($),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{static{S.prototype.isVector3=!0}constructor(J=0,$=0,Q=0){this.x=J,this.y=$,this.z=Q}set(J,$,Q){if(Q===void 0)Q=this.z;return this.x=J,this.y=$,this.z=Q,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,$){return this.x=J.x*$.x,this.y=J.y*$.y,this.z=J.z*$.z,this}applyEuler(J){return this.applyQuaternion(KH.setFromEuler(J))}applyAxisAngle(J,$){return this.applyQuaternion(KH.setFromAxisAngle(J,$))}applyMatrix3(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements;return this.x=K[0]*$+K[3]*Q+K[6]*Z,this.y=K[1]*$+K[4]*Q+K[7]*Z,this.z=K[2]*$+K[5]*Q+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements,W=1/(K[3]*$+K[7]*Q+K[11]*Z+K[15]);return this.x=(K[0]*$+K[4]*Q+K[8]*Z+K[12])*W,this.y=(K[1]*$+K[5]*Q+K[9]*Z+K[13])*W,this.z=(K[2]*$+K[6]*Q+K[10]*Z+K[14])*W,this}applyQuaternion(J){let $=this.x,Q=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*Z-X*Q),U=2*(X*$-K*Z),G=2*(K*Q-W*$);return this.x=$+Y*H+W*G-X*U,this.y=Q+Y*U+X*H-K*G,this.z=Z+Y*G+K*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements;return this.x=K[0]*$+K[4]*Q+K[8]*Z,this.y=K[1]*$+K[5]*Q+K[9]*Z,this.z=K[2]*$+K[6]*Q+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,$){return this.x=R9(this.x,J.x,$.x),this.y=R9(this.y,J.y,$.y),this.z=R9(this.z,J.z,$.z),this}clampScalar(J,$){return this.x=R9(this.x,J,$),this.y=R9(this.y,J,$),this.z=R9(this.z,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(R9(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,$){let{x:Q,y:Z,z:K}=J,W=$.x,X=$.y,Y=$.z;return this.x=Z*Y-K*X,this.y=K*W-Q*Y,this.z=Q*X-Z*W,this}projectOnVector(J){let $=J.lengthSq();if($===0)return this.set(0,0,0);let Q=J.dot(this)/$;return this.copy(J).multiplyScalar(Q)}projectOnPlane(J){return rK.copy(this).projectOnVector(J),this.sub(rK)}reflect(J){return this.sub(rK.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(R9(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y,Z=this.z-J.z;return $*$+Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,$,Q){let Z=Math.sin($)*J;return this.x=Z*Math.sin(Q),this.y=Math.cos($)*J,this.z=Z*Math.cos(Q),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,$,Q){return this.x=J*Math.sin($),this.y=Q,this.z=J*Math.cos($),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(J){let $=this.setFromMatrixColumn(J,0).length(),Q=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=$,this.y=Q,this.z=Z,this}setFromMatrixColumn(J,$){return this.fromArray(J.elements,$*4)}setFromMatrix3Column(J,$){return this.fromArray(J.elements,$*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,$=Math.random()*2-1,Q=Math.sqrt(1-$*$);return this.x=Q*Math.cos(J),this.y=$,this.z=Q*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var rK=new S,KH=new K9;class U9{static{U9.prototype.isMatrix3=!0}constructor(J,$,Q,Z,K,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,K,W,X,Y,H)}set(J,$,Q,Z,K,W,X,Y,H){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=X,U[3]=$,U[4]=K,U[5]=Y,U[6]=Q,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],this}extractBasis(J,$,Q){return J.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let $=J.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,K=this.elements,W=Q[0],X=Q[3],Y=Q[6],H=Q[1],U=Q[4],G=Q[7],F=Q[2],N=Q[5],q=Q[8],O=Z[0],B=Z[3],R=Z[6],E=Z[1],z=Z[4],M=Z[7],V=Z[2],T=Z[5],w=Z[8];return K[0]=W*O+X*E+Y*V,K[3]=W*B+X*z+Y*T,K[6]=W*R+X*M+Y*w,K[1]=H*O+U*E+G*V,K[4]=H*B+U*z+G*T,K[7]=H*R+U*M+G*w,K[2]=F*O+N*E+q*V,K[5]=F*B+N*z+q*T,K[8]=F*R+N*M+q*w,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[3]*=J,$[6]*=J,$[1]*=J,$[4]*=J,$[7]*=J,$[2]*=J,$[5]*=J,$[8]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8];return $*W*U-$*X*H-Q*K*U+Q*X*Y+Z*K*H-Z*W*Y}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],G=U*W-X*H,F=X*Y-U*K,N=H*K-W*Y,q=$*G+Q*F+Z*N;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/q;return J[0]=G*O,J[1]=(Z*H-U*Q)*O,J[2]=(X*Q-Z*W)*O,J[3]=F*O,J[4]=(U*$-Z*Y)*O,J[5]=(Z*K-X*$)*O,J[6]=N*O,J[7]=(Q*Y-H*$)*O,J[8]=(W*$-Q*K)*O,this}transpose(){let J,$=this.elements;return J=$[1],$[1]=$[3],$[3]=J,J=$[2],$[2]=$[6],$[6]=J,J=$[5],$[5]=$[7],$[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let $=this.elements;return J[0]=$[0],J[1]=$[3],J[2]=$[6],J[3]=$[1],J[4]=$[4],J[5]=$[7],J[6]=$[2],J[7]=$[5],J[8]=$[8],this}setUvTransform(J,$,Q,Z,K,W,X){let Y=Math.cos(K),H=Math.sin(K);return this.set(Q*Y,Q*H,-Q*(Y*W+H*X)+W+J,-Z*H,Z*Y,-Z*(-H*W+Y*X)+X+$,0,0,1),this}scale(J,$){return c7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tK.makeScale(J,$)),this}rotate(J){return c7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tK.makeRotation(-J)),this}translate(J,$){return c7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tK.makeTranslation(J,$)),this}makeTranslation(J,$){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,$,0,0,1);return this}makeRotation(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,Q,$,0,0,0,1),this}makeScale(J,$){return this.set(J,0,0,0,$,0,0,0,1),this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<9;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<9;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var tK=new U9,WH=new U9().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),XH=new U9().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function fG(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=a8(K.r),K.g=a8(K.g),K.b=a8(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=iJ(K.r),K.g=iJ(K.g),K.b=iJ(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return c7("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return c7("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},$=[0.64,0.33,0.3,0.6,0.15,0.06],Q=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:$,whitePoint:Z,transfer:"linear",toXYZ:WH,fromXYZ:XH,luminanceCoefficients:Q,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:$,whitePoint:Z,transfer:"srgb",toXYZ:WH,fromXYZ:XH,luminanceCoefficients:Q,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var V9=fG();function a8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function iJ(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var SJ;class CX{static getDataURL(J,$="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(SJ===void 0)SJ=aJ("canvas");SJ.width=J.width,SJ.height=J.height;let Z=SJ.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);Q=SJ}return Q.toDataURL($)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let $=aJ("canvas");$.width=J.width,$.height=J.height;let Q=$.getContext("2d");Q.drawImage(J,0,0,J.width,J.height);let Z=Q.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=a8(K[W]/255)*255;return Q.putImageData(Z,0,0),$}else if(J.data){let $=J.data.slice(0);for(let Q=0;Q<$.length;Q++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[Q]=Math.floor(a8($[Q]/255)*255);else $[Q]=a8($[Q]);return{data:$,width:J.width,height:J.height}}else return t0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var vG=0;class UQ{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vG++}),this.uuid=$8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let $=this.data;if(typeof HTMLVideoElement<"u"&&$ instanceof HTMLVideoElement)J.set($.videoWidth,$.videoHeight,0);else if(typeof VideoFrame<"u"&&$ instanceof VideoFrame)J.set($.displayWidth,$.displayHeight,0);else if($!==null)J.set($.width,$.height,$.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Q={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(eK(Z[W].image));else K.push(eK(Z[W]))}else K=eK(Z);Q.url=K}if(!$)J.images[this.uuid]=Q;return Q}}function eK(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return CX.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return t0("Texture: Unable to serialize Texture."),{}}var bG=0,JW=new S;class W6 extends B8{constructor(J=W6.DEFAULT_IMAGE,$=W6.DEFAULT_MAPPING,Q=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,H=W6.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:bG++}),this.uuid=$8(),this.name="",this.source=new UQ(J),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=Q,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new O0(0,0),this.repeat=new O0(1,1),this.center=new O0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U9,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(JW).x}get height(){return this.source.getSize(JW).y}get depth(){return this.source.getSize(JW).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let $ in J){let Q=J[$];if(Q===void 0){t0(`Texture.setValues(): parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){t0(`Texture.setValues(): property '${$}' does not exist.`);continue}if(Z&&Q&&(Z.isVector2&&Q.isVector2))Z.copy(Q);else if(Z&&Q&&(Z.isVector3&&Q.isVector3))Z.copy(Q);else if(Z&&Q&&(Z.isMatrix3&&Q.isMatrix3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Q={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!$)J.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}W6.DEFAULT_IMAGE=null;W6.DEFAULT_MAPPING=300;W6.DEFAULT_ANISOTROPY=1;class c9{static{c9.prototype.isVector4=!0}constructor(J=0,$=0,Q=0,Z=1){this.x=J,this.y=$,this.z=Q,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,$,Q,Z){return this.x=J,this.y=$,this.z=Q,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this.w=J.w+$.w,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this.w+=J.w*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this.w=J.w-$.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*$+W[4]*Q+W[8]*Z+W[12]*K,this.y=W[1]*$+W[5]*Q+W[9]*Z+W[13]*K,this.z=W[2]*$+W[6]*Q+W[10]*Z+W[14]*K,this.w=W[3]*$+W[7]*Q+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let $=Math.sqrt(1-J.w*J.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/$,this.y=J.y/$,this.z=J.z/$;return this}setAxisAngleFromRotationMatrix(J){let $,Q,Z,K,W=0.01,X=0.1,Y=J.elements,H=Y[0],U=Y[4],G=Y[8],F=Y[1],N=Y[5],q=Y[9],O=Y[2],B=Y[6],R=Y[10];if(Math.abs(U-F)<0.01&&Math.abs(G-O)<0.01&&Math.abs(q-B)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(G+O)<0.1&&Math.abs(q+B)<0.1&&Math.abs(H+N+R-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let z=(H+1)/2,M=(N+1)/2,V=(R+1)/2,T=(U+F)/4,w=(G+O)/4,D=(q+B)/4;if(z>M&&z>V)if(z<0.01)Q=0,Z=0.707106781,K=0.707106781;else Q=Math.sqrt(z),Z=T/Q,K=w/Q;else if(M>V)if(M<0.01)Q=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(M),Q=T/Z,K=D/Z;else if(V<0.01)Q=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(V),Q=w/K,Z=D/K;return this.set(Q,Z,K,$),this}let E=Math.sqrt((B-q)*(B-q)+(G-O)*(G-O)+(F-U)*(F-U));if(Math.abs(E)<0.001)E=1;return this.x=(B-q)/E,this.y=(G-O)/E,this.z=(F-U)/E,this.w=Math.acos((H+N+R-1)/2),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this.w=$[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,$){return this.x=R9(this.x,J.x,$.x),this.y=R9(this.y,J.y,$.y),this.z=R9(this.z,J.z,$.z),this.w=R9(this.w,J.w,$.w),this}clampScalar(J,$){return this.x=R9(this.x,J,$),this.y=R9(this.y,J,$),this.z=R9(this.z,J,$),this.w=R9(this.w,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(R9(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this.w+=(J.w-this.w)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this.w=J.w+($.w-J.w)*Q,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this.w=J[$+3],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J[$+3]=this.w,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this.w=J.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IX extends B8{constructor(J=1,$=1,Q={}){super();Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Q),this.isRenderTarget=!0,this.width=J,this.height=$,this.depth=Q.depth,this.scissor=new c9(0,0,J,$),this.scissorTest=!1,this.viewport=new c9(0,0,J,$),this.textures=[];let Z={width:J,height:$,depth:Q.depth},K=new W6(Z),W=Q.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions(Q),this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.resolveColorBuffer=Q.resolveColorBuffer,this.resolveDepthBuffer=Q.resolveDepthBuffer,this.resolveStencilBuffer=Q.resolveStencilBuffer,this.storeMultisampledColorBuffer=Q.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Q.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Q.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Q.depthTexture,this.samples=Q.samples,this.multiview=Q.multiview,this.useArrayDepthTexture=Q.useArrayDepthTexture}_setTextureOptions(J={}){let $={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)$.mapping=J.mapping;if(J.wrapS!==void 0)$.wrapS=J.wrapS;if(J.wrapT!==void 0)$.wrapT=J.wrapT;if(J.wrapR!==void 0)$.wrapR=J.wrapR;if(J.magFilter!==void 0)$.magFilter=J.magFilter;if(J.minFilter!==void 0)$.minFilter=J.minFilter;if(J.format!==void 0)$.format=J.format;if(J.type!==void 0)$.type=J.type;if(J.anisotropy!==void 0)$.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)$.colorSpace=J.colorSpace;if(J.flipY!==void 0)$.flipY=J.flipY;if(J.generateMipmaps!==void 0)$.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)$.internalFormat=J.internalFormat;for(let Q=0;Q<this.textures.length;Q++)this.textures[Q].setValues($)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,$,Q=1){if(this.width!==J||this.height!==$||this.depth!==Q){this.width=J,this.height=$,this.depth=Q;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=$,this.textures[Z].image.depth=Q,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,$),this.scissor.set(0,0,J,$)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let $=0,Q=J.textures.length;$<Q;$++){this.textures[$]=J.textures[$].clone(),this.textures[$].isRenderTargetTexture=!0,this.textures[$].renderTarget=this;let Z=Object.assign({},J.textures[$].image);this.textures[$].source=new UQ(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let $=J.depthTexture.clone();$.renderTarget=null,this.depthTexture=$}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class X6 extends IX{constructor(J=1,$=1,Q={}){super(J,$,Q);this.isWebGLRenderTarget=!0}}class aZ extends W6{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class PX extends W6{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class $9{static{$9.prototype.isMatrix4=!0}constructor(J,$,Q,Z,K,W,X,Y,H,U,G,F,N,q,O,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,K,W,X,Y,H,U,G,F,N,q,O,B)}set(J,$,Q,Z,K,W,X,Y,H,U,G,F,N,q,O,B){let R=this.elements;return R[0]=J,R[4]=$,R[8]=Q,R[12]=Z,R[1]=K,R[5]=W,R[9]=X,R[13]=Y,R[2]=H,R[6]=U,R[10]=G,R[14]=F,R[3]=N,R[7]=q,R[11]=O,R[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $9().fromArray(this.elements)}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],$[9]=Q[9],$[10]=Q[10],$[11]=Q[11],$[12]=Q[12],$[13]=Q[13],$[14]=Q[14],$[15]=Q[15],this}copyPosition(J){let $=this.elements,Q=J.elements;return $[12]=Q[12],$[13]=Q[13],$[14]=Q[14],this}setFromMatrix3(J){let $=J.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(J,$,Q){if(this.determinantAffine()===0)return J.set(1,0,0),$.set(0,1,0),Q.set(0,0,1),this;return J.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis(J,$,Q){return this.set(J.x,$.x,Q.x,0,J.y,$.y,Q.y,0,J.z,$.z,Q.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let $=this.elements,Q=J.elements,Z=1/wJ.setFromMatrixColumn(J,0).length(),K=1/wJ.setFromMatrixColumn(J,1).length(),W=1/wJ.setFromMatrixColumn(J,2).length();return $[0]=Q[0]*Z,$[1]=Q[1]*Z,$[2]=Q[2]*Z,$[3]=0,$[4]=Q[4]*K,$[5]=Q[5]*K,$[6]=Q[6]*K,$[7]=0,$[8]=Q[8]*W,$[9]=Q[9]*W,$[10]=Q[10]*W,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(J){let $=this.elements,Q=J.x,Z=J.y,K=J.z,W=Math.cos(Q),X=Math.sin(Q),Y=Math.cos(Z),H=Math.sin(Z),U=Math.cos(K),G=Math.sin(K);if(J.order==="XYZ"){let F=W*U,N=W*G,q=X*U,O=X*G;$[0]=Y*U,$[4]=-Y*G,$[8]=H,$[1]=N+q*H,$[5]=F-O*H,$[9]=-X*Y,$[2]=O-F*H,$[6]=q+N*H,$[10]=W*Y}else if(J.order==="YXZ"){let F=Y*U,N=Y*G,q=H*U,O=H*G;$[0]=F+O*X,$[4]=q*X-N,$[8]=W*H,$[1]=W*G,$[5]=W*U,$[9]=-X,$[2]=N*X-q,$[6]=O+F*X,$[10]=W*Y}else if(J.order==="ZXY"){let F=Y*U,N=Y*G,q=H*U,O=H*G;$[0]=F-O*X,$[4]=-W*G,$[8]=q+N*X,$[1]=N+q*X,$[5]=W*U,$[9]=O-F*X,$[2]=-W*H,$[6]=X,$[10]=W*Y}else if(J.order==="ZYX"){let F=W*U,N=W*G,q=X*U,O=X*G;$[0]=Y*U,$[4]=q*H-N,$[8]=F*H+O,$[1]=Y*G,$[5]=O*H+F,$[9]=N*H-q,$[2]=-H,$[6]=X*Y,$[10]=W*Y}else if(J.order==="YZX"){let F=W*Y,N=W*H,q=X*Y,O=X*H;$[0]=Y*U,$[4]=O-F*G,$[8]=q*G+N,$[1]=G,$[5]=W*U,$[9]=-X*U,$[2]=-H*U,$[6]=N*G+q,$[10]=F-O*G}else if(J.order==="XZY"){let F=W*Y,N=W*H,q=X*Y,O=X*H;$[0]=Y*U,$[4]=-G,$[8]=H*U,$[1]=F*G+O,$[5]=W*U,$[9]=N*G-q,$[2]=q*G-N,$[6]=X*U,$[10]=O*G+F}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(J){return this.compose(hG,J,xG)}lookAt(J,$,Q){let Z=this.elements;if(c6.subVectors(J,$),c6.lengthSq()===0)c6.z=1;if(c6.normalize(),U7.crossVectors(Q,c6),U7.lengthSq()===0){if(Math.abs(Q.z)===1)c6.x+=0.0001;else c6.z+=0.0001;c6.normalize(),U7.crossVectors(Q,c6)}return U7.normalize(),ZZ.crossVectors(c6,U7),Z[0]=U7.x,Z[4]=ZZ.x,Z[8]=c6.x,Z[1]=U7.y,Z[5]=ZZ.y,Z[9]=c6.y,Z[2]=U7.z,Z[6]=ZZ.z,Z[10]=c6.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,K=this.elements,W=Q[0],X=Q[4],Y=Q[8],H=Q[12],U=Q[1],G=Q[5],F=Q[9],N=Q[13],q=Q[2],O=Q[6],B=Q[10],R=Q[14],E=Q[3],z=Q[7],M=Q[11],V=Q[15],T=Z[0],w=Z[4],D=Z[8],L=Z[12],I=Z[1],i=Z[5],h=Z[9],d=Z[13],Q0=Z[2],f=Z[6],y=Z[10],p=Z[14],v=Z[3],r=Z[7],l=Z[11],J0=Z[15];return K[0]=W*T+X*I+Y*Q0+H*v,K[4]=W*w+X*i+Y*f+H*r,K[8]=W*D+X*h+Y*y+H*l,K[12]=W*L+X*d+Y*p+H*J0,K[1]=U*T+G*I+F*Q0+N*v,K[5]=U*w+G*i+F*f+N*r,K[9]=U*D+G*h+F*y+N*l,K[13]=U*L+G*d+F*p+N*J0,K[2]=q*T+O*I+B*Q0+R*v,K[6]=q*w+O*i+B*f+R*r,K[10]=q*D+O*h+B*y+R*l,K[14]=q*L+O*d+B*p+R*J0,K[3]=E*T+z*I+M*Q0+V*v,K[7]=E*w+z*i+M*f+V*r,K[11]=E*D+z*h+M*y+V*l,K[15]=E*L+z*d+M*p+V*J0,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[4]*=J,$[8]*=J,$[12]*=J,$[1]*=J,$[5]*=J,$[9]*=J,$[13]*=J,$[2]*=J,$[6]*=J,$[10]*=J,$[14]*=J,$[3]*=J,$[7]*=J,$[11]*=J,$[15]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],U=J[2],G=J[6],F=J[10],N=J[14],q=J[3],O=J[7],B=J[11],R=J[15],E=Y*N-H*F,z=X*N-H*G,M=X*F-Y*G,V=W*N-H*U,T=W*F-Y*U,w=W*G-X*U;return $*(O*E-B*z+R*M)-Q*(q*E-B*V+R*T)+Z*(q*z-O*V+R*w)-K*(q*M-O*T+B*w)}determinantAffine(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],U=J[10];return $*(W*U-X*H)-Q*(K*U-X*Y)+Z*(K*H-W*Y)}transpose(){let J=this.elements,$;return $=J[1],J[1]=J[4],J[4]=$,$=J[2],J[2]=J[8],J[8]=$,$=J[6],J[6]=J[9],J[9]=$,$=J[3],J[3]=J[12],J[12]=$,$=J[7],J[7]=J[13],J[13]=$,$=J[11],J[11]=J[14],J[14]=$,this}setPosition(J,$,Q){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=$,Z[14]=Q;return this}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],G=J[9],F=J[10],N=J[11],q=J[12],O=J[13],B=J[14],R=J[15],E=$*X-Q*W,z=$*Y-Z*W,M=$*H-K*W,V=Q*Y-Z*X,T=Q*H-K*X,w=Z*H-K*Y,D=U*O-G*q,L=U*B-F*q,I=U*R-N*q,i=G*B-F*O,h=G*R-N*O,d=F*R-N*B,Q0=E*d-z*h+M*i+V*I-T*L+w*D;if(Q0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let f=1/Q0;return J[0]=(X*d-Y*h+H*i)*f,J[1]=(Z*h-Q*d-K*i)*f,J[2]=(O*w-B*T+R*V)*f,J[3]=(F*T-G*w-N*V)*f,J[4]=(Y*I-W*d-H*L)*f,J[5]=($*d-Z*I+K*L)*f,J[6]=(B*M-q*w-R*z)*f,J[7]=(U*w-F*M+N*z)*f,J[8]=(W*h-X*I+H*D)*f,J[9]=(Q*I-$*h-K*D)*f,J[10]=(q*T-O*M+R*E)*f,J[11]=(G*M-U*T-N*E)*f,J[12]=(X*L-W*i-Y*D)*f,J[13]=($*i-Q*L+Z*D)*f,J[14]=(O*z-q*V-B*E)*f,J[15]=(U*V-G*z+F*E)*f,this}scale(J){let $=this.elements,Q=J.x,Z=J.y,K=J.z;return $[0]*=Q,$[4]*=Z,$[8]*=K,$[1]*=Q,$[5]*=Z,$[9]*=K,$[2]*=Q,$[6]*=Z,$[10]*=K,$[3]*=Q,$[7]*=Z,$[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,$=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Q=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max($,Q,Z))}makeTranslation(J,$,Q){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,$,0,0,1,Q,0,0,0,1);return this}makeRotationX(J){let $=Math.cos(J),Q=Math.sin(J);return this.set(1,0,0,0,0,$,-Q,0,0,Q,$,0,0,0,0,1),this}makeRotationY(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,0,Q,0,0,1,0,0,-Q,0,$,0,0,0,0,1),this}makeRotationZ(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,0,Q,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,$){let Q=Math.cos($),Z=Math.sin($),K=1-Q,W=J.x,X=J.y,Y=J.z,H=K*W,U=K*X;return this.set(H*W+Q,H*X-Z*Y,H*Y+Z*X,0,H*X+Z*Y,U*X+Q,U*Y-Z*W,0,H*Y-Z*X,U*Y+Z*W,K*Y*Y+Q,0,0,0,0,1),this}makeScale(J,$,Q){return this.set(J,0,0,0,0,$,0,0,0,0,Q,0,0,0,0,1),this}makeShear(J,$,Q,Z,K,W){return this.set(1,Q,K,0,J,1,W,0,$,Z,1,0,0,0,0,1),this}compose(J,$,Q){let Z=this.elements,K=$._x,W=$._y,X=$._z,Y=$._w,H=K+K,U=W+W,G=X+X,F=K*H,N=K*U,q=K*G,O=W*U,B=W*G,R=X*G,E=Y*H,z=Y*U,M=Y*G,V=Q.x,T=Q.y,w=Q.z;return Z[0]=(1-(O+R))*V,Z[1]=(N+M)*V,Z[2]=(q-z)*V,Z[3]=0,Z[4]=(N-M)*T,Z[5]=(1-(F+R))*T,Z[6]=(B+E)*T,Z[7]=0,Z[8]=(q+z)*w,Z[9]=(B-E)*w,Z[10]=(1-(F+O))*w,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,$,Q){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return Q.set(1,1,1),$.identity(),this;let W=wJ.set(Z[0],Z[1],Z[2]).length(),X=wJ.set(Z[4],Z[5],Z[6]).length(),Y=wJ.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;G8.copy(this);let H=1/W,U=1/X,G=1/Y;return G8.elements[0]*=H,G8.elements[1]*=H,G8.elements[2]*=H,G8.elements[4]*=U,G8.elements[5]*=U,G8.elements[6]*=U,G8.elements[8]*=G,G8.elements[9]*=G,G8.elements[10]*=G,$.setFromRotationMatrix(G8),Q.x=W,Q.y=X,Q.z=Y,this}makePerspective(J,$,Q,Z,K,W,X=2000,Y=!1){let H=this.elements,U=2*K/($-J),G=2*K/(Q-Z),F=($+J)/($-J),N=(Q+Z)/(Q-Z),q,O;if(Y)q=K/(W-K),O=W*K/(W-K);else if(X===2000)q=-(W+K)/(W-K),O=-2*W*K/(W-K);else if(X===2001)q=-W/(W-K),O=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=F,H[12]=0,H[1]=0,H[5]=G,H[9]=N,H[13]=0,H[2]=0,H[6]=0,H[10]=q,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,$,Q,Z,K,W,X=2000,Y=!1){let H=this.elements,U=2/($-J),G=2/(Q-Z),F=-($+J)/($-J),N=-(Q+Z)/(Q-Z),q,O;if(Y)q=1/(W-K),O=W/(W-K);else if(X===2000)q=-2/(W-K),O=-(W+K)/(W-K);else if(X===2001)q=-1/(W-K),O=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=F,H[1]=0,H[5]=G,H[9]=0,H[13]=N,H[2]=0,H[6]=0,H[10]=q,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<16;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<16;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J[$+9]=Q[9],J[$+10]=Q[10],J[$+11]=Q[11],J[$+12]=Q[12],J[$+13]=Q[13],J[$+14]=Q[14],J[$+15]=Q[15],J}}var wJ=new S,G8=new $9,hG=new S(0,0,0),xG=new S(1,1,1),U7=new S,ZZ=new S,c6=new S,YH=new $9,HH=new K9;class O8{constructor(J=0,$=0,Q=0,Z=O8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=$,this._z=Q,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,$,Q,Z=this._order){return this._x=J,this._y=$,this._z=Q,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,$=this._order,Q=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],H=Z[5],U=Z[9],G=Z[2],F=Z[6],N=Z[10];switch($){case"XYZ":if(this._y=Math.asin(R9(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-R9(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,N),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-G,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(R9(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-R9(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(F,N),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(R9(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-G,K);else this._x=0,this._y=Math.atan2(X,N);break;case"XZY":if(this._z=Math.asin(-R9(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,H),this._y=Math.atan2(X,K);else this._x=Math.atan2(-U,N),this._y=0;break;default:t0("Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,Q===!0)this._onChangeCallback();return this}setFromQuaternion(J,$,Q){return YH.makeRotationFromQuaternion(J),this.setFromRotationMatrix(YH,$,Q)}setFromVector3(J,$=this._order){return this.set(J.x,J.y,J.z,$)}reorder(J){return HH.setFromEuler(this),this.setFromQuaternion(HH,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}O8.DEFAULT_ORDER="XYZ";class rZ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var gG=0,UH=new S,jJ=new K9,d8=new $9,KZ=new S,y$=new S,pG=new S,mG=new K9,NH=new S(1,0,0),GH=new S(0,1,0),FH=new S(0,0,1),EH={type:"added"},lG={type:"removed"},yJ={type:"childadded",child:null},$W={type:"childremoved",child:null};class j9 extends B8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:gG++}),this.uuid=$8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=j9.DEFAULT_UP.clone();let J=new S,$=new O8,Q=new K9,Z=new S(1,1,1);function K(){Q.setFromEuler($,!1)}function W(){$.setFromQuaternion(Q,void 0,!1)}$._onChange(K),Q._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new $9},normalMatrix:{value:new U9}}),this.matrix=new $9,this.matrixWorld=new $9,this.matrixAutoUpdate=j9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=j9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rZ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,$){this.quaternion.setFromAxisAngle(J,$)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,$){return jJ.setFromAxisAngle(J,$),this.quaternion.multiply(jJ),this}rotateOnWorldAxis(J,$){return jJ.setFromAxisAngle(J,$),this.quaternion.premultiply(jJ),this}rotateX(J){return this.rotateOnAxis(NH,J)}rotateY(J){return this.rotateOnAxis(GH,J)}rotateZ(J){return this.rotateOnAxis(FH,J)}translateOnAxis(J,$){return UH.copy(J).applyQuaternion(this.quaternion),this.position.add(UH.multiplyScalar($)),this}translateX(J){return this.translateOnAxis(NH,J)}translateY(J){return this.translateOnAxis(GH,J)}translateZ(J){return this.translateOnAxis(FH,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(d8.copy(this.matrixWorld).invert())}lookAt(J,$,Q){if(J.isVector3)KZ.copy(J);else KZ.set(J,$,Q);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),y$.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)d8.lookAt(y$,KZ,this.up);else d8.lookAt(KZ,y$,this.up);if(this.quaternion.setFromRotationMatrix(d8),Z)d8.extractRotation(Z.matrixWorld),jJ.setFromRotationMatrix(d8),this.quaternion.premultiply(jJ.invert())}add(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(J===this)return Z9("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(EH),yJ.child=J,this.dispatchEvent(yJ),yJ.child=null;else Z9("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let $=this.children.indexOf(J);if($!==-1)J.parent=null,this.children.splice($,1),J.dispatchEvent(lG),$W.child=J,this.dispatchEvent($W),$W.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),d8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),d8.multiply(J.parent.matrixWorld);return J.applyMatrix4(d8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(EH),yJ.child=J,this.dispatchEvent(yJ),yJ.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,$){if(this[J]===$)return this;for(let Q=0,Z=this.children.length;Q<Z;Q++){let W=this.children[Q].getObjectByProperty(J,$);if(W!==void 0)return W}return}getObjectsByProperty(J,$,Q=[]){if(this[J]===$)Q.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,$,Q);return Q}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(y$,J,pG),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(y$,mG,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set($[8],$[9],$[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverseVisible(J)}traverseAncestors(J){let $=this.parent;if($!==null)J($),$.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:$,y:Q,z:Z}=J,K=this.matrix.elements;K[12]+=$-K[0]*$-K[4]*Q-K[8]*Z,K[13]+=Q-K[1]*$-K[5]*Q-K[9]*Z,K[14]+=Z-K[2]*$-K[6]*Q-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].updateMatrixWorld(J)}updateWorldMatrix(J,$,Q=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Q){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Q=!0}if($===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,Q)}}toJSON(J){let $=J===void 0||typeof J==="string",Q={};if($)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,U=Y.length;H<U;H++){let G=Y[H];K(J.shapes,G)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if($){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),U=W(J.images),G=W(J.shapes),F=W(J.skeletons),N=W(J.animations),q=W(J.nodes);if(X.length>0)Q.geometries=X;if(Y.length>0)Q.materials=Y;if(H.length>0)Q.textures=H;if(U.length>0)Q.images=U;if(G.length>0)Q.shapes=G;if(F.length>0)Q.skeletons=F;if(N.length>0)Q.animations=N;if(q.length>0)Q.nodes=q}return Q.object=Z,Q;function W(X){let Y=[];for(let H in X){let U=X[H];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,$=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),$===!0)for(let Q=0;Q<J.children.length;Q++){let Z=J.children[Q];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}j9.DEFAULT_UP=new S(0,1,0);j9.DEFAULT_MATRIX_AUTO_UPDATE=!0;j9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class T9 extends j9{constructor(){super();this.isGroup=!0,this.type="Group"}}var uG={type:"move"};class NQ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new T9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new T9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new T9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let $=this._hand;if($)for(let Q of J.hand.values())this._getHandJoint($,Q)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,$,Q){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&$.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let B=$.getJointPose(O,Q),R=this._getHandJoint(H,O);if(B!==null)R.matrix.fromArray(B.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=B.radius;R.visible=B!==null}let U=H.joints["index-finger-tip"],G=H.joints["thumb-tip"],F=U.position.distanceTo(G.position),N=0.02,q=0.005;if(H.inputState.pinching&&F>N+q)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&F<=N-q)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=$.getPose(J.gripSpace,Q),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=$.getPose(J.targetRaySpace,Q),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(uG)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,$){if(J.joints[$.jointName]===void 0){let Q=new T9;Q.matrixAutoUpdate=!1,Q.visible=!1,J.joints[$.jointName]=Q,J.add(Q)}return J.joints[$.jointName]}}var c5={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},N7={h:0,s:0,l:0},WZ={h:0,s:0,l:0};function QW(J,$,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return J+($-J)*6*Q;if(Q<0.5)return $;if(Q<0.6666666666666666)return J+($-J)*6*(0.6666666666666666-Q);return J}class w0{constructor(J,$,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,$,Q)}set(J,$,Q){if($===void 0&&Q===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,$,Q);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,$="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,V9.colorSpaceToWorking(this,$),this}setRGB(J,$,Q,Z=V9.workingColorSpace){return this.r=J,this.g=$,this.b=Q,V9.colorSpaceToWorking(this,Z),this}setHSL(J,$,Q,Z=V9.workingColorSpace){if(J=MX(J,1),$=R9($,0,1),Q=R9(Q,0,1),$===0)this.r=this.g=this.b=Q;else{let K=Q<=0.5?Q*(1+$):Q+$-Q*$,W=2*Q-K;this.r=QW(W,K,J+0.3333333333333333),this.g=QW(W,K,J),this.b=QW(W,K,J-0.3333333333333333)}return V9.colorSpaceToWorking(this,Z),this}setStyle(J,$="srgb"){function Q(K){if(K===void 0)return;if(parseFloat(K)<1)t0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,$);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,$);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return Q(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,$);break;default:t0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,$);else if(W===6)return this.setHex(parseInt(K,16),$);else t0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,$);return this}setColorName(J,$="srgb"){let Q=c5[J.toLowerCase()];if(Q!==void 0)this.setHex(Q,$);else t0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=a8(J.r),this.g=a8(J.g),this.b=a8(J.b),this}copyLinearToSRGB(J){return this.r=iJ(J.r),this.g=iJ(J.g),this.b=iJ(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return V9.workingToColorSpace(_6.copy(this),J),Math.round(R9(_6.r*255,0,255))*65536+Math.round(R9(_6.g*255,0,255))*256+Math.round(R9(_6.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,$=V9.workingColorSpace){V9.workingToColorSpace(_6.copy(this),$);let{r:Q,g:Z,b:K}=_6,W=Math.max(Q,Z,K),X=Math.min(Q,Z,K),Y,H,U=(X+W)/2;if(X===W)Y=0,H=0;else{let G=W-X;switch(H=U<=0.5?G/(W+X):G/(2-W-X),W){case Q:Y=(Z-K)/G+(Z<K?6:0);break;case Z:Y=(K-Q)/G+2;break;case K:Y=(Q-Z)/G+4;break}Y/=6}return J.h=Y,J.s=H,J.l=U,J}getRGB(J,$=V9.workingColorSpace){return V9.workingToColorSpace(_6.copy(this),$),J.r=_6.r,J.g=_6.g,J.b=_6.b,J}getStyle(J="srgb"){V9.workingToColorSpace(_6.copy(this),J);let{r:$,g:Q,b:Z}=_6;if(J!=="srgb")return`color(${J} ${$.toFixed(3)} ${Q.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(Q*255)},${Math.round(Z*255)})`}offsetHSL(J,$,Q){return this.getHSL(N7),this.setHSL(N7.h+J,N7.s+$,N7.l+Q)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,$){return this.r=J.r+$.r,this.g=J.g+$.g,this.b=J.b+$.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,$){return this.r+=(J.r-this.r)*$,this.g+=(J.g-this.g)*$,this.b+=(J.b-this.b)*$,this}lerpColors(J,$,Q){return this.r=J.r+($.r-J.r)*Q,this.g=J.g+($.g-J.g)*Q,this.b=J.b+($.b-J.b)*Q,this}lerpHSL(J,$){this.getHSL(N7),J.getHSL(WZ);let Q=n$(N7.h,WZ.h,$),Z=n$(N7.s,WZ.s,$),K=n$(N7.l,WZ.l,$);return this.setHSL(Q,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let $=this.r,Q=this.g,Z=this.b,K=J.elements;return this.r=K[0]*$+K[3]*Q+K[6]*Z,this.g=K[1]*$+K[4]*Q+K[7]*Z,this.b=K[2]*$+K[5]*Q+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,$=0){return this.r=J[$],this.g=J[$+1],this.b=J[$+2],this}toArray(J=[],$=0){return J[$]=this.r,J[$+1]=this.g,J[$+2]=this.b,J}fromBufferAttribute(J,$){return this.r=J.getX($),this.g=J.getY($),this.b=J.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var _6=new w0;w0.NAMES=c5;class QJ{constructor(J,$=0.00025){this.isFogExp2=!0,this.name="",this.color=new w0(J),this.density=$}clone(){return new QJ(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Y$ extends j9{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new O8,this.environmentIntensity=1,this.environmentRotation=new O8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,$){if(super.copy(J,$),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let $=super.toJSON(J);if(this.fog!==null)$.object.fog=this.fog.toJSON();return $.object.backgroundBlurriness=this.backgroundBlurriness,$.object.backgroundIntensity=this.backgroundIntensity,$.object.backgroundRotation=this.backgroundRotation.toArray(),$.object.environmentIntensity=this.environmentIntensity,$.object.environmentRotation=this.environmentRotation.toArray(),$}}var F8=new S,c8=new S,ZW=new S,n8=new S,fJ=new S,vJ=new S,qH=new S,KW=new S,WW=new S,XW=new S,YW=new c9,HW=new c9,UW=new c9;class s6{constructor(J=new S,$=new S,Q=new S){this.a=J,this.b=$,this.c=Q}static getNormal(J,$,Q,Z){Z.subVectors(Q,$),F8.subVectors(J,$),Z.cross(F8);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,$,Q,Z,K){F8.subVectors(Z,$),c8.subVectors(Q,$),ZW.subVectors(J,$);let W=F8.dot(F8),X=F8.dot(c8),Y=F8.dot(ZW),H=c8.dot(c8),U=c8.dot(ZW),G=W*H-X*X;if(G===0)return K.set(0,0,0),null;let F=1/G,N=(H*Y-X*U)*F,q=(W*U-X*Y)*F;return K.set(1-N-q,q,N)}static containsPoint(J,$,Q,Z){if(this.getBarycoord(J,$,Q,Z,n8)===null)return!1;return n8.x>=0&&n8.y>=0&&n8.x+n8.y<=1}static getInterpolation(J,$,Q,Z,K,W,X,Y){if(this.getBarycoord(J,$,Q,Z,n8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,n8.x),Y.addScaledVector(W,n8.y),Y.addScaledVector(X,n8.z),Y}static getInterpolatedAttribute(J,$,Q,Z,K,W){return YW.setScalar(0),HW.setScalar(0),UW.setScalar(0),YW.fromBufferAttribute(J,$),HW.fromBufferAttribute(J,Q),UW.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(YW,K.x),W.addScaledVector(HW,K.y),W.addScaledVector(UW,K.z),W}static isFrontFacing(J,$,Q,Z){return F8.subVectors(Q,$),c8.subVectors(J,$),F8.cross(c8).dot(Z)<0}set(J,$,Q){return this.a.copy(J),this.b.copy($),this.c.copy(Q),this}setFromPointsAndIndices(J,$,Q,Z){return this.a.copy(J[$]),this.b.copy(J[Q]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,$,Q,Z){return this.a.fromBufferAttribute(J,$),this.b.fromBufferAttribute(J,Q),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return F8.subVectors(this.c,this.b),c8.subVectors(this.a,this.b),F8.cross(c8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return s6.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,$){return s6.getBarycoord(J,this.a,this.b,this.c,$)}getInterpolation(J,$,Q,Z,K){return s6.getInterpolation(J,this.a,this.b,this.c,$,Q,Z,K)}containsPoint(J){return s6.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return s6.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,$){let Q=this.a,Z=this.b,K=this.c,W,X;fJ.subVectors(Z,Q),vJ.subVectors(K,Q),KW.subVectors(J,Q);let Y=fJ.dot(KW),H=vJ.dot(KW);if(Y<=0&&H<=0)return $.copy(Q);WW.subVectors(J,Z);let U=fJ.dot(WW),G=vJ.dot(WW);if(U>=0&&G<=U)return $.copy(Z);let F=Y*G-U*H;if(F<=0&&Y>=0&&U<=0)return W=Y/(Y-U),$.copy(Q).addScaledVector(fJ,W);XW.subVectors(J,K);let N=fJ.dot(XW),q=vJ.dot(XW);if(q>=0&&N<=q)return $.copy(K);let O=N*H-Y*q;if(O<=0&&H>=0&&q<=0)return X=H/(H-q),$.copy(Q).addScaledVector(vJ,X);let B=U*q-N*G;if(B<=0&&G-U>=0&&N-q>=0)return qH.subVectors(K,Z),X=(G-U)/(G-U+(N-q)),$.copy(Z).addScaledVector(qH,X);let R=1/(B+O+F);return W=O*R,X=F*R,$.copy(Q).addScaledVector(fJ,W).addScaledVector(vJ,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class S6{constructor(J=new S(1/0,1/0,1/0),$=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=$}set(J,$){return this.min.copy(J),this.max.copy($),this}setFromArray(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$+=3)this.expandByPoint(E8.fromArray(J,$));return this}setFromBufferAttribute(J){this.makeEmpty();for(let $=0,Q=J.count;$<Q;$++)this.expandByPoint(E8.fromBufferAttribute(J,$));return this}setFromPoints(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$++)this.expandByPoint(J[$]);return this}setFromCenterAndSize(J,$){let Q=E8.copy($).multiplyScalar(0.5);return this.min.copy(J).sub(Q),this.max.copy(J).add(Q),this}setFromObject(J,$=!1){return this.makeEmpty(),this.expandByObject(J,$)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,$=!1){J.updateWorldMatrix(!1,!1);let Q=J.geometry;if(Q!==void 0){let K=Q.getAttribute("position");if($===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,E8);else E8.fromBufferAttribute(K,W);E8.applyMatrix4(J.matrixWorld),this.expandByPoint(E8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();XZ.copy(J.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();XZ.copy(Q.boundingBox)}XZ.applyMatrix4(J.matrixWorld),this.union(XZ)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],$);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,$){return $.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,E8),E8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let $,Q;if(J.normal.x>0)$=J.normal.x*this.min.x,Q=J.normal.x*this.max.x;else $=J.normal.x*this.max.x,Q=J.normal.x*this.min.x;if(J.normal.y>0)$+=J.normal.y*this.min.y,Q+=J.normal.y*this.max.y;else $+=J.normal.y*this.max.y,Q+=J.normal.y*this.min.y;if(J.normal.z>0)$+=J.normal.z*this.min.z,Q+=J.normal.z*this.max.z;else $+=J.normal.z*this.max.z,Q+=J.normal.z*this.min.z;return $<=-J.constant&&Q>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(f$),YZ.subVectors(this.max,f$),bJ.subVectors(J.a,f$),hJ.subVectors(J.b,f$),xJ.subVectors(J.c,f$),G7.subVectors(hJ,bJ),F7.subVectors(xJ,hJ),m7.subVectors(bJ,xJ);let $=[0,-G7.z,G7.y,0,-F7.z,F7.y,0,-m7.z,m7.y,G7.z,0,-G7.x,F7.z,0,-F7.x,m7.z,0,-m7.x,-G7.y,G7.x,0,-F7.y,F7.x,0,-m7.y,m7.x,0];if(!NW($,bJ,hJ,xJ,YZ))return!1;if($=[1,0,0,0,1,0,0,0,1],!NW($,bJ,hJ,xJ,YZ))return!1;return HZ.crossVectors(G7,F7),$=[HZ.x,HZ.y,HZ.z],NW($,bJ,hJ,xJ,YZ)}clampPoint(J,$){return $.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,E8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(E8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return s8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),s8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),s8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),s8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),s8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),s8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),s8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),s8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(s8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var s8=[new S,new S,new S,new S,new S,new S,new S,new S],E8=new S,XZ=new S6,bJ=new S,hJ=new S,xJ=new S,G7=new S,F7=new S,m7=new S,f$=new S,YZ=new S,HZ=new S,l7=new S;function NW(J,$,Q,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){l7.fromArray(J,W);let Y=K.x*Math.abs(l7.x)+K.y*Math.abs(l7.y)+K.z*Math.abs(l7.z),H=$.dot(l7),U=Q.dot(l7),G=Z.dot(l7);if(Math.max(-Math.max(H,U,G),Math.min(H,U,G))>Y)return!1}return!0}var H6=new S,UZ=new O0,dG=0;class t9 extends B8{constructor(J,$,Q=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dG++}),this.name="",this.array=J,this.itemSize=$,this.count=J!==void 0?J.length/$:0,this.normalized=Q,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,$,Q){J*=this.itemSize,Q*=$.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=$.array[Q+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let $=0,Q=this.count;$<Q;$++)UZ.fromBufferAttribute(this,$),UZ.applyMatrix3(J),this.setXY($,UZ.x,UZ.y);else if(this.itemSize===3)for(let $=0,Q=this.count;$<Q;$++)H6.fromBufferAttribute(this,$),H6.applyMatrix3(J),this.setXYZ($,H6.x,H6.y,H6.z);return this}applyMatrix4(J){for(let $=0,Q=this.count;$<Q;$++)H6.fromBufferAttribute(this,$),H6.applyMatrix4(J),this.setXYZ($,H6.x,H6.y,H6.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)H6.fromBufferAttribute(this,$),H6.applyNormalMatrix(J),this.setXYZ($,H6.x,H6.y,H6.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)H6.fromBufferAttribute(this,$),H6.transformDirection(J),this.setXYZ($,H6.x,H6.y,H6.z);return this}set(J,$=0){return this.array.set(J,$),this}getComponent(J,$){let Q=this.array[J*this.itemSize+$];if(this.normalized)Q=q8(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=d9(Q,this.array);return this.array[J*this.itemSize+$]=Q,this}getX(J){let $=this.array[J*this.itemSize];if(this.normalized)$=q8($,this.array);return $}setX(J,$){if(this.normalized)$=d9($,this.array);return this.array[J*this.itemSize]=$,this}getY(J){let $=this.array[J*this.itemSize+1];if(this.normalized)$=q8($,this.array);return $}setY(J,$){if(this.normalized)$=d9($,this.array);return this.array[J*this.itemSize+1]=$,this}getZ(J){let $=this.array[J*this.itemSize+2];if(this.normalized)$=q8($,this.array);return $}setZ(J,$){if(this.normalized)$=d9($,this.array);return this.array[J*this.itemSize+2]=$,this}getW(J){let $=this.array[J*this.itemSize+3];if(this.normalized)$=q8($,this.array);return $}setW(J,$){if(this.normalized)$=d9($,this.array);return this.array[J*this.itemSize+3]=$,this}setXY(J,$,Q){if(J*=this.itemSize,this.normalized)$=d9($,this.array),Q=d9(Q,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J*=this.itemSize,this.normalized)$=d9($,this.array),Q=d9(Q,this.array),Z=d9(Z,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this}setXYZW(J,$,Q,Z,K){if(J*=this.itemSize,this.normalized)$=d9($,this.array),Q=d9(Q,this.array),Z=d9(Z,this.array),K=d9(K,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class tZ extends t9{constructor(J,$,Q){super(new Uint16Array(J),$,Q)}}class eZ extends t9{constructor(J,$,Q){super(new Uint32Array(J),$,Q)}}class W9 extends t9{constructor(J,$,Q){super(new Float32Array(J),$,Q)}}var cG=new S6,v$=new S,GW=new S;class v6{constructor(J=new S,$=-1){this.isSphere=!0,this.center=J,this.radius=$}set(J,$){return this.center.copy(J),this.radius=$,this}setFromPoints(J,$){let Q=this.center;if($!==void 0)Q.copy($);else cG.setFromPoints(J).getCenter(Q);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,Q.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let $=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=$*$}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,$){let Q=this.center.distanceToSquared(J);if($.copy(J),Q>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;v$.subVectors(J,this.center);let $=v$.lengthSq();if($>this.radius*this.radius){let Q=Math.sqrt($),Z=(Q-this.radius)*0.5;this.center.addScaledVector(v$,Z/Q),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else GW.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(v$.copy(J.center).add(GW)),this.expandByPoint(v$.copy(J.center).sub(GW));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var nG=0,e6=new $9,FW=new j9,gJ=new S,n6=new S6,b$=new S6,R6=new S;class b9 extends B8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nG++}),this.uuid=$8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((RG(J))?eZ:tZ)(J,1);else this.index=J;return this}setIndirect(J,$=0){return this.indirect=J,this.indirectOffset=$,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,$){return this.attributes[J]=$,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,$,Q=0){this.groups.push({start:J,count:$,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange(J,$){this.drawRange.start=J,this.drawRange.count=$}applyMatrix4(J){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(J),$.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let K=new U9().getNormalMatrix(J);Q.applyNormalMatrix(K),Q.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return e6.makeRotationFromQuaternion(J),this.applyMatrix4(e6),this}rotateX(J){return e6.makeRotationX(J),this.applyMatrix4(e6),this}rotateY(J){return e6.makeRotationY(J),this.applyMatrix4(e6),this}rotateZ(J){return e6.makeRotationZ(J),this.applyMatrix4(e6),this}translate(J,$,Q){return e6.makeTranslation(J,$,Q),this.applyMatrix4(e6),this}scale(J,$,Q){return e6.makeScale(J,$,Q),this.applyMatrix4(e6),this}lookAt(J){return FW.lookAt(J),FW.updateMatrix(),this.applyMatrix4(FW.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gJ).negate(),this.translate(gJ.x,gJ.y,gJ.z),this}setFromPoints(J){let $=this.getAttribute("position");if($===void 0){let Q=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];Q.push(W.x,W.y,W.z||0)}this.setAttribute("position",new W9(Q,3))}else{let Q=Math.min(J.length,$.count);for(let Z=0;Z<Q;Z++){let K=J[Z];$.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>$.count)t0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");$.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new S6;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){Z9("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),$)for(let Q=0,Z=$.length;Q<Z;Q++){let K=$[Q];if(n6.setFromBufferAttribute(K),this.morphTargetsRelative)R6.addVectors(this.boundingBox.min,n6.min),this.boundingBox.expandByPoint(R6),R6.addVectors(this.boundingBox.max,n6.max),this.boundingBox.expandByPoint(R6);else this.boundingBox.expandByPoint(n6.min),this.boundingBox.expandByPoint(n6.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Z9('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new v6;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){Z9("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(J){let Q=this.boundingSphere.center;if(n6.setFromBufferAttribute(J),$)for(let K=0,W=$.length;K<W;K++){let X=$[K];if(b$.setFromBufferAttribute(X),this.morphTargetsRelative)R6.addVectors(n6.min,b$.min),n6.expandByPoint(R6),R6.addVectors(n6.max,b$.max),n6.expandByPoint(R6);else n6.expandByPoint(b$.min),n6.expandByPoint(b$.max)}n6.getCenter(Q);let Z=0;for(let K=0,W=J.count;K<W;K++)R6.fromBufferAttribute(J,K),Z=Math.max(Z,Q.distanceToSquared(R6));if($)for(let K=0,W=$.length;K<W;K++){let X=$[K],Y=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(R6.fromBufferAttribute(X,H),Y)gJ.fromBufferAttribute(J,H),R6.add(gJ);Z=Math.max(Z,Q.distanceToSquared(R6))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))Z9('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,$=this.attributes;if(J===null||$.position===void 0||$.normal===void 0||$.uv===void 0){Z9("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Q,normal:Z,uv:K}=$,W=this.getAttribute("tangent");if(W===void 0||W.count!==Q.count)W=new t9(new Float32Array(4*Q.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let D=0;D<Q.count;D++)X[D]=new S,Y[D]=new S;let H=new S,U=new S,G=new S,F=new O0,N=new O0,q=new O0,O=new S,B=new S;function R(D,L,I){H.fromBufferAttribute(Q,D),U.fromBufferAttribute(Q,L),G.fromBufferAttribute(Q,I),F.fromBufferAttribute(K,D),N.fromBufferAttribute(K,L),q.fromBufferAttribute(K,I),U.sub(H),G.sub(H),N.sub(F),q.sub(F);let i=1/(N.x*q.y-q.x*N.y);if(!isFinite(i))return;O.copy(U).multiplyScalar(q.y).addScaledVector(G,-N.y).multiplyScalar(i),B.copy(G).multiplyScalar(N.x).addScaledVector(U,-q.x).multiplyScalar(i),X[D].add(O),X[L].add(O),X[I].add(O),Y[D].add(B),Y[L].add(B),Y[I].add(B)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let D=0,L=E.length;D<L;++D){let I=E[D],i=I.start,h=I.count;for(let d=i,Q0=i+h;d<Q0;d+=3)R(J.getX(d+0),J.getX(d+1),J.getX(d+2))}let z=new S,M=new S,V=new S,T=new S;function w(D){V.fromBufferAttribute(Z,D),T.copy(V);let L=X[D];z.copy(L),z.sub(V.multiplyScalar(V.dot(L))).normalize(),M.crossVectors(T,L);let i=M.dot(Y[D])<0?-1:1;W.setXYZW(D,z.x,z.y,z.z,i)}for(let D=0,L=E.length;D<L;++D){let I=E[D],i=I.start,h=I.count;for(let d=i,Q0=i+h;d<Q0;d+=3)w(J.getX(d+0)),w(J.getX(d+1)),w(J.getX(d+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,$=this.getAttribute("position");if($!==void 0){let Q=this.getAttribute("normal");if(Q===void 0||Q.count!==$.count)Q=new t9(new Float32Array($.count*3),3),this.setAttribute("normal",Q);else for(let F=0,N=Q.count;F<N;F++)Q.setXYZ(F,0,0,0);let Z=new S,K=new S,W=new S,X=new S,Y=new S,H=new S,U=new S,G=new S;if(J)for(let F=0,N=J.count;F<N;F+=3){let q=J.getX(F+0),O=J.getX(F+1),B=J.getX(F+2);Z.fromBufferAttribute($,q),K.fromBufferAttribute($,O),W.fromBufferAttribute($,B),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),X.fromBufferAttribute(Q,q),Y.fromBufferAttribute(Q,O),H.fromBufferAttribute(Q,B),X.add(U),Y.add(U),H.add(U),Q.setXYZ(q,X.x,X.y,X.z),Q.setXYZ(O,Y.x,Y.y,Y.z),Q.setXYZ(B,H.x,H.y,H.z)}else for(let F=0,N=$.count;F<N;F+=3)Z.fromBufferAttribute($,F+0),K.fromBufferAttribute($,F+1),W.fromBufferAttribute($,F+2),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),Q.setXYZ(F+0,U.x,U.y,U.z),Q.setXYZ(F+1,U.x,U.y,U.z),Q.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let $=0,Q=J.count;$<Q;$++)R6.fromBufferAttribute(J,$),R6.normalize(),J.setXYZ($,R6.x,R6.y,R6.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:U,normalized:G}=X,F=new H.constructor(Y.length*U),N=0,q=0;for(let O=0,B=Y.length;O<B;O++){if(X.isInterleavedBufferAttribute)N=Y[O]*X.data.stride+X.offset;else N=Y[O]*U;for(let R=0;R<U;R++)F[q++]=H[N++]}return new t9(F,U,G)}if(this.index===null)return t0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new b9,Q=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],H=J(Y,Q);$.setAttribute(X,H)}let K=this.morphAttributes;for(let X in K){let Y=[],H=K[X];for(let U=0,G=H.length;U<G;U++){let F=H[U],N=J(F,Q);Y.push(N)}$.morphAttributes[X]=Y}$.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];$.addGroup(H.start,H.count,H.materialIndex)}return $}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let $=this.index;if($!==null)J.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let Q=this.attributes;for(let Y in Q){let H=Q[Y];J.data.attributes[Y]=H.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],U=[];for(let G=0,F=H.length;G<F;G++){let N=H[G];U.push(N.toJSON(J.data))}if(U.length>0)Z[Y]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=J.name;let Q=J.index;if(Q!==null)this.setIndex(Q.clone());let Z=J.attributes;for(let H in Z){let U=Z[H];this.setAttribute(H,U.clone($))}let K=J.morphAttributes;for(let H in K){let U=[],G=K[H];for(let F=0,N=G.length;F<N;F++)U.push(G[F].clone($));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let G=W[H];this.addGroup(G.start,G.count,G.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class H${constructor(J,$){this.isInterleavedBuffer=!0,this.array=J,this.stride=$,this.count=J!==void 0?J.length/$:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=$8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,$,Q){J*=this.stride,Q*=$.stride;for(let Z=0,K=this.stride;Z<K;Z++)this.array[J+Z]=$.array[Q+Z];return this}set(J,$=0){return this.array.set(J,$),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=$8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let $=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Q=new this.constructor($,this.stride);return Q.setUsage(this.usage),Q}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=$8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let $={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return $.usage=this.usage,$}}var f6=new S;class O7{constructor(J,$,Q,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=$,this.offset=Q,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let $=0,Q=this.data.count;$<Q;$++)f6.fromBufferAttribute(this,$),f6.applyMatrix4(J),this.setXYZ($,f6.x,f6.y,f6.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)f6.fromBufferAttribute(this,$),f6.applyNormalMatrix(J),this.setXYZ($,f6.x,f6.y,f6.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)f6.fromBufferAttribute(this,$),f6.transformDirection(J),this.setXYZ($,f6.x,f6.y,f6.z);return this}getComponent(J,$){let Q=this.array[J*this.data.stride+this.offset+$];if(this.normalized)Q=q8(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=d9(Q,this.array);return this.data.array[J*this.data.stride+this.offset+$]=Q,this}setX(J,$){if(this.normalized)$=d9($,this.array);return this.data.array[J*this.data.stride+this.offset]=$,this}setY(J,$){if(this.normalized)$=d9($,this.array);return this.data.array[J*this.data.stride+this.offset+1]=$,this}setZ(J,$){if(this.normalized)$=d9($,this.array);return this.data.array[J*this.data.stride+this.offset+2]=$,this}setW(J,$){if(this.normalized)$=d9($,this.array);return this.data.array[J*this.data.stride+this.offset+3]=$,this}getX(J){let $=this.data.array[J*this.data.stride+this.offset];if(this.normalized)$=q8($,this.array);return $}getY(J){let $=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)$=q8($,this.array);return $}getZ(J){let $=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)$=q8($,this.array);return $}getW(J){let $=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)$=q8($,this.array);return $}setXY(J,$,Q){if(J=J*this.data.stride+this.offset,this.normalized)$=d9($,this.array),Q=d9(Q,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)$=d9($,this.array),Q=d9(Q,this.array),Z=d9(Z,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this}setXYZW(J,$,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)$=d9($,this.array),Q=d9(Q,this.array),Z=d9(Z,this.array),K=d9(K,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this.data.array[J+3]=K,this}clone(J){if(J===void 0){o$("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)$.push(this.data.array[Z+K])}return new t9(new this.array.constructor($),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new O7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){o$("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)$.push(this.data.array[Z+K])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:$,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var EW=new S,sG=new S,iG=new U9;class J8{constructor(J=new S(1,0,0),$=0){this.isPlane=!0,this.normal=J,this.constant=$}set(J,$){return this.normal.copy(J),this.constant=$,this}setComponents(J,$,Q,Z){return this.normal.set(J,$,Q),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,$){return this.normal.copy(J),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(J,$,Q){let Z=EW.subVectors(Q,$).cross(sG.subVectors(J,$)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,$){return $.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,$,Q=!0){let Z=J.delta(EW),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return $.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if(Q===!0&&(W<0||W>1))return null;return $.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let $=this.distanceToPoint(J.start),Q=this.distanceToPoint(J.end);return $<0&&Q>0||Q<0&&$>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,$){let Q=$||iG.getNormalMatrix(J),Z=this.coplanarPoint(EW).applyMatrix4(J),K=this.normal.applyMatrix3(Q).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var oG=0;class g6 extends B8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:oG++}),this.uuid=$8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new w0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let $ in J){let Q=J[$];if(Q===void 0){t0(`Material: parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){t0(`Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Q);else if(Z&&Z.isVector2&&(Q&&Q.isVector2)||Z&&Z.isEuler&&(Q&&Q.isEuler)||Z&&Z.isVector3&&(Q&&Q.isVector3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if($)J={textures:{},images:{}};let Q={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,Q.blending=this.blending,Q.side=this.side,Q.shadowSide=this.shadowSide,Q.vertexColors=this.vertexColors,Q.opacity=this.opacity,Q.transparent=this.transparent,Q.blendSrc=this.blendSrc,Q.blendDst=this.blendDst,Q.blendEquation=this.blendEquation,Q.blendSrcAlpha=this.blendSrcAlpha,Q.blendDstAlpha=this.blendDstAlpha,Q.blendEquationAlpha=this.blendEquationAlpha,Q.blendColor=this.blendColor.getHex(),Q.blendAlpha=this.blendAlpha,Q.depthFunc=this.depthFunc,Q.depthTest=this.depthTest,Q.depthWrite=this.depthWrite,Q.colorWrite=this.colorWrite,Q.clipIntersection=this.clipIntersection,Q.clipShadows=this.clipShadows,Q.stencilWriteMask=this.stencilWriteMask,Q.stencilFunc=this.stencilFunc,Q.stencilRef=this.stencilRef,Q.stencilFuncMask=this.stencilFuncMask,Q.stencilFail=this.stencilFail,Q.stencilZFail=this.stencilZFail,Q.stencilZPass=this.stencilZPass,Q.stencilWrite=this.stencilWrite,Q.polygonOffset=this.polygonOffset,Q.polygonOffsetFactor=this.polygonOffsetFactor,Q.polygonOffsetUnits=this.polygonOffsetUnits,Q.dithering=this.dithering,Q.alphaTest=this.alphaTest,Q.alphaHash=this.alphaHash,Q.alphaToCoverage=this.alphaToCoverage,Q.premultipliedAlpha=this.premultipliedAlpha,Q.forceSinglePass=this.forceSinglePass,Q.allowOverride=this.allowOverride,Q.visible=this.visible,Q.toneMapped=this.toneMapped,Q.name=this.name,this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Q.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Q.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Q.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Q.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON(J).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON(J).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON(J).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON(J).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON(J).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapRotation!==void 0)Q.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Q.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)Q.rotation=this.rotation;if(this.depthPacking!==void 0)Q.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Q.linewidth=this.linewidth;if(this.linecap!==void 0)Q.linecap=this.linecap;if(this.linejoin!==void 0)Q.linejoin=this.linejoin;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.wireframe!==void 0)Q.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Q.flatShading=this.flatShading;if(this.fog!==void 0)Q.fog=this.fog;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if($){let K=Z(J.textures),W=Z(J.images);if(K.length>0)Q.textures=K;if(W.length>0)Q.images=W}return Q}fromJSON(J,$){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new w0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Q)=>new J8().fromJSON(Q));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=$[J.map]||null;if(J.matcap!==void 0)this.matcap=$[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=$[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=$[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=$[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Q=J.normalScale;if(Array.isArray(Q)===!1)Q=[Q,Q];this.normalScale=new O0().fromArray(Q)}if(J.displacementMap!==void 0)this.displacementMap=$[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=$[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=$[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=$[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=$[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=$[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=$[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=$[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=$[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=$[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=$[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=$[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=$[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=$[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new O0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=$[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=$[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=$[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=$[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=$[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=$[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=$[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let $=J.clippingPlanes,Q=null;if($!==null){let Z=$.length;Q=Array(Z);for(let K=0;K!==Z;++K)Q[K]=$[K].clone()}return this.clippingPlanes=Q,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class ZJ extends g6{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new w0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var pJ,h$=new S,mJ=new S,lJ=new S,uJ=new O0,x$=new O0,n5=new $9,NZ=new S,g$=new S,GZ=new S,OH=new O0,qW=new O0,RH=new O0;class U$ extends j9{constructor(J=new ZJ){super();if(this.isSprite=!0,this.type="Sprite",pJ===void 0){pJ=new b9;let $=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),Q=new H$($,5);pJ.setIndex([0,1,2,0,2,3]),pJ.setAttribute("position",new O7(Q,3,0,!1)),pJ.setAttribute("uv",new O7(Q,2,3,!1))}this.geometry=pJ,this.material=J,this.center=new O0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,$){if(J.camera===null)Z9('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(mJ.setFromMatrixScale(this.matrixWorld),n5.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),lJ.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)mJ.multiplyScalar(-lJ.z);let Q=this.material.rotation,Z,K;if(Q!==0)K=Math.cos(Q),Z=Math.sin(Q);let W=this.center;FZ(NZ.set(-0.5,-0.5,0),lJ,W,mJ,Z,K),FZ(g$.set(0.5,-0.5,0),lJ,W,mJ,Z,K),FZ(GZ.set(0.5,0.5,0),lJ,W,mJ,Z,K),OH.set(0,0),qW.set(1,0),RH.set(1,1);let X=J.ray.intersectTriangle(NZ,g$,GZ,!1,h$);if(X===null){if(FZ(g$.set(-0.5,0.5,0),lJ,W,mJ,Z,K),qW.set(0,1),X=J.ray.intersectTriangle(NZ,GZ,g$,!1,h$),X===null)return}let Y=J.ray.origin.distanceTo(h$);if(Y<J.near||Y>J.far)return;$.push({distance:Y,point:h$.clone(),uv:s6.getInterpolation(h$,NZ,g$,GZ,OH,qW,RH,new O0),face:null,object:this})}copy(J,$){if(super.copy(J,$),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function FZ(J,$,Q,Z,K,W){if(uJ.subVectors(J,Q).addScalar(0.5).multiply(Z),K!==void 0)x$.x=W*uJ.x-K*uJ.y,x$.y=K*uJ.x+W*uJ.y;else x$.copy(uJ);J.copy($),J.x+=x$.x,J.y+=x$.y,J.applyMatrix4(n5)}var i8=new S,OW=new S,EZ=new S,qZ=new S;class M7{constructor(J=new S,$=new S(0,0,-1)){this.origin=J,this.direction=$}set(J,$){return this.origin.copy(J),this.direction.copy($),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,$){return $.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,i8)),this}closestPointToPoint(J,$){$.subVectors(J,this.origin);let Q=$.dot(this.direction);if(Q<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let $=i8.subVectors(J,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(J);return i8.copy(this.origin).addScaledVector(this.direction,$),i8.distanceToSquared(J)}distanceSqToSegment(J,$,Q,Z){OW.copy(J).add($).multiplyScalar(0.5),EZ.copy($).sub(J).normalize(),qZ.copy(this.origin).sub(OW);let K=J.distanceTo($)*0.5,W=-this.direction.dot(EZ),X=qZ.dot(this.direction),Y=-qZ.dot(EZ),H=qZ.lengthSq(),U=Math.abs(1-W*W),G,F,N,q;if(U>0)if(G=W*Y-X,F=W*X-Y,q=K*U,G>=0)if(F>=-q)if(F<=q){let O=1/U;G*=O,F*=O,N=G*(G+W*F+2*X)+F*(W*G+F+2*Y)+H}else F=K,G=Math.max(0,-(W*F+X)),N=-G*G+F*(F+2*Y)+H;else F=-K,G=Math.max(0,-(W*F+X)),N=-G*G+F*(F+2*Y)+H;else if(F<=-q)G=Math.max(0,-(-W*K+X)),F=G>0?-K:Math.min(Math.max(-K,-Y),K),N=-G*G+F*(F+2*Y)+H;else if(F<=q)G=0,F=Math.min(Math.max(-K,-Y),K),N=F*(F+2*Y)+H;else G=Math.max(0,-(W*K+X)),F=G>0?K:Math.min(Math.max(-K,-Y),K),N=-G*G+F*(F+2*Y)+H;else F=W>0?-K:K,G=Math.max(0,-(W*F+X)),N=-G*G+F*(F+2*Y)+H;if(Q)Q.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(OW).addScaledVector(EZ,F);return N}intersectSphere(J,$){if(J.radius<0)return null;i8.subVectors(J.center,this.origin);let Q=i8.dot(this.direction),Z=i8.dot(i8)-Q*Q,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=Q-W,Y=Q+W;if(Y<0)return null;if(X<0)return this.at(Y,$);return this.at(X,$)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let $=J.normal.dot(this.direction);if($===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot(J.normal)+J.constant)/$;return Q>=0?Q:null}intersectPlane(J,$){let Q=this.distanceToPlane(J);if(Q===null)return null;return this.at(Q,$)}intersectsPlane(J){let $=J.distanceToPoint(this.origin);if($===0)return!0;if(J.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(J,$){let Q,Z,K,W,X,Y,H=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,F=this.origin;if(H>=0)Q=(J.min.x-F.x)*H,Z=(J.max.x-F.x)*H;else Q=(J.max.x-F.x)*H,Z=(J.min.x-F.x)*H;if(U>=0)K=(J.min.y-F.y)*U,W=(J.max.y-F.y)*U;else K=(J.max.y-F.y)*U,W=(J.min.y-F.y)*U;if(Q>W||K>Z)return null;if(K>Q||isNaN(Q))Q=K;if(W<Z||isNaN(Z))Z=W;if(G>=0)X=(J.min.z-F.z)*G,Y=(J.max.z-F.z)*G;else X=(J.max.z-F.z)*G,Y=(J.min.z-F.z)*G;if(Q>Y||X>Z)return null;if(X>Q||Q!==Q)Q=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at(Q>=0?Q:Z,$)}intersectsBox(J){return this.intersectBox(J,i8)!==null}intersectTriangle(J,$,Q,Z,K){let W=this.origin,X=this.direction,Y=X.x,H=X.y,U=X.z,G=J.x-W.x,F=J.y-W.y,N=J.z-W.z,q=$.x-W.x,O=$.y-W.y,B=$.z-W.z,R=Q.x-W.x,E=Q.y-W.y,z=Q.z-W.z,M=Math.abs(Y),V=Math.abs(H),T=Math.abs(U),w,D,L,I,i,h,d,Q0,f,y,p,v;if(M>=V&&M>=T)if(L=Y,h=G,f=q,v=R,Y>=0)w=H,D=U,I=F,i=N,d=O,Q0=B,y=E,p=z;else w=U,D=H,I=N,i=F,d=B,Q0=O,y=z,p=E;else if(V>=T)if(L=H,h=F,f=O,v=E,H>=0)w=U,D=Y,I=N,i=G,d=B,Q0=q,y=z,p=R;else w=Y,D=U,I=G,i=N,d=q,Q0=B,y=R,p=z;else if(L=U,h=N,f=B,v=z,U>=0)w=Y,D=H,I=G,i=F,d=q,Q0=O,y=R,p=E;else w=H,D=Y,I=F,i=G,d=O,Q0=q,y=E,p=R;if(L===0)return null;let r=w/L,l=D/L,J0=1/L,Y0=I-r*h,I0=i-l*h,j=d-r*f,a=Q0-l*f,U0=y-r*v,b=p-l*v,C=U0*a-b*j,x=Y0*b-I0*U0,n=j*I0-a*Y0;if(Z){if(C<0||x<0||n<0)return null}else if((C<0||x<0||n<0)&&(C>0||x>0||n>0))return null;let K0=C+x+n;if(K0===0)return null;let $0=J0*(C*h+x*f+n*v);if(K0>0?$0<0:$0>0)return null;return this.at($0/K0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class g9 extends g6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new w0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var LH=new $9,u7=new M7,OZ=new v6,VH=new S,RZ=new S,LZ=new S,VZ=new S,RW=new S,BZ=new S,BH=new S,DZ=new S;class T0 extends j9{constructor(J=new b9,$=new g9){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,$){if(super.copy(J,$),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,$){let Q=this.geometry,Z=Q.attributes.position,K=Q.morphAttributes.position,W=Q.morphTargetsRelative;$.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){BZ.set(0,0,0);for(let Y=0,H=K.length;Y<H;Y++){let U=X[Y],G=K[Y];if(U===0)continue;if(RW.fromBufferAttribute(G,J),W)BZ.addScaledVector(RW,U);else BZ.addScaledVector(RW.sub($),U)}$.add(BZ)}return $}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(OZ.copy(Q.boundingSphere),OZ.applyMatrix4(K),u7.copy(J.ray).recast(J.near),OZ.containsPoint(u7.origin)===!1){if(u7.intersectSphere(OZ,VH)===null)return;if(u7.origin.distanceToSquared(VH)>(J.far-J.near)**2)return}if(LH.copy(K).invert(),u7.copy(J.ray).applyMatrix4(LH),Q.boundingBox!==null){if(u7.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections(J,$,u7)}_computeIntersections(J,$,Q){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,H=K.attributes.uv,U=K.attributes.uv1,G=K.attributes.normal,F=K.groups,N=K.drawRange;if(X!==null)if(Array.isArray(W))for(let q=0,O=F.length;q<O;q++){let B=F[q],R=W[B.materialIndex],E=Math.max(B.start,N.start),z=Math.min(X.count,Math.min(B.start+B.count,N.start+N.count));for(let M=E,V=z;M<V;M+=3){let T=X.getX(M),w=X.getX(M+1),D=X.getX(M+2);if(Z=kZ(this,R,J,Q,H,U,G,T,w,D),Z)Z.faceIndex=Math.floor(M/3),Z.face.materialIndex=B.materialIndex,$.push(Z)}}else{let q=Math.max(0,N.start),O=Math.min(X.count,N.start+N.count);for(let B=q,R=O;B<R;B+=3){let E=X.getX(B),z=X.getX(B+1),M=X.getX(B+2);if(Z=kZ(this,W,J,Q,H,U,G,E,z,M),Z)Z.faceIndex=Math.floor(B/3),$.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let q=0,O=F.length;q<O;q++){let B=F[q],R=W[B.materialIndex],E=Math.max(B.start,N.start),z=Math.min(Y.count,Math.min(B.start+B.count,N.start+N.count));for(let M=E,V=z;M<V;M+=3){let T=M,w=M+1,D=M+2;if(Z=kZ(this,R,J,Q,H,U,G,T,w,D),Z)Z.faceIndex=Math.floor(M/3),Z.face.materialIndex=B.materialIndex,$.push(Z)}}else{let q=Math.max(0,N.start),O=Math.min(Y.count,N.start+N.count);for(let B=q,R=O;B<R;B+=3){let E=B,z=B+1,M=B+2;if(Z=kZ(this,W,J,Q,H,U,G,E,z,M),Z)Z.faceIndex=Math.floor(B/3),$.push(Z)}}}}function aG(J,$,Q,Z,K,W,X,Y){let H;if($.side===1)H=Z.intersectTriangle(X,W,K,!0,Y);else H=Z.intersectTriangle(K,W,X,$.side===0,Y);if(H===null)return null;DZ.copy(Y),DZ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(DZ);if(U<Q.near||U>Q.far)return null;return{distance:U,point:DZ.clone(),object:J}}function kZ(J,$,Q,Z,K,W,X,Y,H,U){J.getVertexPosition(Y,RZ),J.getVertexPosition(H,LZ),J.getVertexPosition(U,VZ);let G=aG(J,$,Q,Z,RZ,LZ,VZ,BH);if(G){let F=new S;if(s6.getBarycoord(BH,RZ,LZ,VZ,F),K)G.uv=s6.getInterpolatedAttribute(K,Y,H,U,F,new O0);if(W)G.uv1=s6.getInterpolatedAttribute(W,Y,H,U,F,new O0);if(X){if(G.normal=s6.getInterpolatedAttribute(X,Y,H,U,F,new S),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let N={a:Y,b:H,c:U,normal:new S,materialIndex:0};s6.getNormal(RZ,LZ,VZ,N.normal),G.face=N,G.barycoord=F}return G}var p$=new c9,DH=new c9,kH=new c9,rG=new c9,MH=new $9,MZ=new S,LW=new v6,CH=new $9,VW=new M7;class JK extends T0{constructor(J,$){super(J,$);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new $9,this.bindMatrixInverse=new $9,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new S6;this.boundingBox.makeEmpty();let $=J.getAttribute("position");for(let Q=0;Q<$.count;Q++)this.getVertexPosition(Q,MZ),this.boundingBox.expandByPoint(MZ)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new v6;this.boundingSphere.makeEmpty();let $=J.getAttribute("position");for(let Q=0;Q<$.count;Q++)this.getVertexPosition(Q,MZ),this.boundingSphere.expandByPoint(MZ)}copy(J,$){if(super.copy(J,$),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,$){let Q=this.material,Z=this.matrixWorld;if(Q===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(LW.copy(this.boundingSphere),LW.applyMatrix4(Z),J.ray.intersectsSphere(LW)===!1)return;if(CH.copy(Z).invert(),VW.copy(J.ray).applyMatrix4(CH),this.boundingBox!==null){if(VW.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,$,VW)}getVertexPosition(J,$){return super.getVertexPosition(J,$),this.applyBoneTransform(J,$),$}bind(J,$){if(this.skeleton=J,$===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),$=this.matrixWorld;this.bindMatrix.copy($),this.bindMatrixInverse.copy($).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new c9,$=this.geometry.attributes.skinWeight;for(let Q=0,Z=$.count;Q<Z;Q++){J.fromBufferAttribute($,Q);let K=1/J.manhattanLength();if(K!==1/0)J.multiplyScalar(K);else J.set(1,0,0,0);$.setXYZW(Q,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else t0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,$){let Q=this.skeleton,Z=this.geometry;if(DH.fromBufferAttribute(Z.attributes.skinIndex,J),kH.fromBufferAttribute(Z.attributes.skinWeight,J),$.isVector4)p$.copy($),$.set(0,0,0,0);else p$.set(...$,1),$.set(0,0,0);p$.applyMatrix4(this.bindMatrix);for(let K=0;K<4;K++){let W=kH.getComponent(K);if(W!==0){let X=DH.getComponent(K);MH.multiplyMatrices(Q.bones[X].matrixWorld,Q.boneInverses[X]),$.addScaledVector(rG.copy(p$).applyMatrix4(MH),W)}}if($.isVector4)$.w=p$.w;return $.applyMatrix4(this.bindMatrixInverse)}}class GQ extends j9{constructor(){super();this.isBone=!0,this.type="Bone"}}class FQ extends W6{constructor(J=null,$=1,Q=1,Z,K,W,X,Y,H=1003,U=1003,G,F){super(null,W,X,Y,H,U,Z,K,G,F);this.isDataTexture=!0,this.image={data:J,width:$,height:Q},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var IH=new $9,tG=new $9;class EQ{constructor(J=[],$=[]){this.uuid=$8(),this.bones=J.slice(0),this.boneInverses=$,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,$=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),$.length===0)this.calculateInverses();else if(J.length!==$.length){t0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Q=0,Z=this.bones.length;Q<Z;Q++)this.boneInverses.push(new $9)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,$=this.bones.length;J<$;J++){let Q=new $9;if(this.bones[J])Q.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push(Q)}}pose(){for(let J=0,$=this.bones.length;J<$;J++){let Q=this.bones[J];if(Q)Q.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,$=this.bones.length;J<$;J++){let Q=this.bones[J];if(Q){if(Q.parent&&Q.parent.isBone)Q.matrix.copy(Q.parent.matrixWorld).invert(),Q.matrix.multiply(Q.matrixWorld);else Q.matrix.copy(Q.matrixWorld);Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)}}}update(){let J=this.bones,$=this.boneInverses,Q=this.boneMatrices,Z=this.boneTexture;for(let K=0,W=J.length;K<W;K++){let X=J[K]?J[K].matrixWorld:tG;IH.multiplyMatrices(X,$[K]),IH.toArray(Q,K*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new EQ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let $=new Float32Array(J*J*4);$.set(this.boneMatrices);let Q=new FQ($,J,J,1023,1015);return Q.needsUpdate=!0,this.boneMatrices=$,this.boneTexture=Q,this}getBoneByName(J){for(let $=0,Q=this.bones.length;$<Q;$++){let Z=this.bones[$];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,$){this.uuid=J.uuid;for(let Q=0,Z=J.bones.length;Q<Z;Q++){let K=J.bones[Q],W=$[K];if(W===void 0)t0("Skeleton: No bone found with UUID:",K),W=new GQ;this.bones.push(W),this.boneInverses.push(new $9().fromArray(J.boneInverses[Q]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let $=this.bones,Q=this.boneInverses;for(let Z=0,K=$.length;Z<K;Z++){let W=$[Z];J.bones.push(W.uuid);let X=Q[Z];J.boneInverses.push(X.toArray())}return J}}class R7 extends t9{constructor(J,$,Q,Z=1){super(J,$,Q);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var dJ=new $9,PH=new $9,CZ=[],zH=new S6,eG=new $9,m$=new T0,l$=new v6;class v8 extends T0{constructor(J,$,Q){super(J,$);this.isInstancedMesh=!0,this.instanceMatrix=new R7(new Float32Array(Q*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Q,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<Q;Z++)this.setMatrixAt(Z,eG)}computeBoundingBox(){let J=this.geometry,$=this.count;if(this.boundingBox===null)this.boundingBox=new S6;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Q=0;Q<$;Q++)this.getMatrixAt(Q,dJ),zH.copy(J.boundingBox).applyMatrix4(dJ),this.boundingBox.union(zH)}computeBoundingSphere(){let J=this.geometry,$=this.count;if(this.boundingSphere===null)this.boundingSphere=new v6;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Q=0;Q<$;Q++)this.getMatrixAt(Q,dJ),l$.copy(J.boundingSphere).applyMatrix4(dJ),this.boundingSphere.union(l$)}copy(J,$){if(super.copy(J,$),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,$){if(this.instanceColor===null)return $.setRGB(1,1,1);else return $.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,$){return $.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,$){let Q=$.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=Q.length+1,W=J*K+1;for(let X=0;X<Q.length;X++)Q[X]=Z[W+X]}raycast(J,$){let Q=this.matrixWorld,Z=this.count;if(m$.geometry=this.geometry,m$.material=this.material,m$.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(l$.copy(this.boundingSphere),l$.applyMatrix4(Q),J.ray.intersectsSphere(l$)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,dJ),PH.multiplyMatrices(Q,dJ),m$.matrixWorld=PH,m$.raycast(J,CZ);for(let W=0,X=CZ.length;W<X;W++){let Y=CZ[W];Y.instanceId=K,Y.object=this,$.push(Y)}CZ.length=0}}setColorAt(J,$){if(this.instanceColor===null)this.instanceColor=new R7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return $.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,$){return $.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,$){let Q=$.morphTargetInfluences,Z=Q.length+1;if(this.morphTexture===null)this.morphTexture=new FQ(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let H=0;H<Q.length;H++)W+=Q[H];let X=this.geometry.morphTargetsRelative?1:1-W,Y=Z*J;return K[Y]=X,K.set(Q,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var d7=new v6,J1=new O0(0.5,0.5),IZ=new S;class KJ{constructor(J=new J8,$=new J8,Q=new J8,Z=new J8,K=new J8,W=new J8){this.planes=[J,$,Q,Z,K,W]}set(J,$,Q,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy($),X[2].copy(Q),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let $=this.planes;for(let Q=0;Q<6;Q++)$[Q].copy(J.planes[Q]);return this}setFromProjectionMatrix(J,$=2000,Q=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],H=K[3],U=K[4],G=K[5],F=K[6],N=K[7],q=K[8],O=K[9],B=K[10],R=K[11],E=K[12],z=K[13],M=K[14],V=K[15];if(Z[0].setComponents(H-W,N-U,R-q,V-E).normalize(),Z[1].setComponents(H+W,N+U,R+q,V+E).normalize(),Z[2].setComponents(H+X,N+G,R+O,V+z).normalize(),Z[3].setComponents(H-X,N-G,R-O,V-z).normalize(),Q)Z[4].setComponents(Y,F,B,M).normalize(),Z[5].setComponents(H-Y,N-F,R-B,V-M).normalize();else if(Z[4].setComponents(H-Y,N-F,R-B,V-M).normalize(),$===2000)Z[5].setComponents(H+Y,N+F,R+B,V+M).normalize();else if($===2001)Z[5].setComponents(Y,F,B,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();d7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let $=J.geometry;if($.boundingSphere===null)$.computeBoundingSphere();d7.copy($.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(d7)}intersectsSprite(J){d7.center.set(0,0,0);let $=J1.distanceTo(J.center);return d7.radius=0.7071067811865476+$,d7.applyMatrix4(J.matrixWorld),this.intersectsSphere(d7)}intersectsSphere(J){let $=this.planes,Q=J.center,Z=-J.radius;for(let K=0;K<6;K++)if($[K].distanceToPoint(Q)<Z)return!1;return!0}intersectsBox(J){let $=this.planes;for(let Q=0;Q<6;Q++){let Z=$[Q];if(IZ.x=Z.normal.x>0?J.max.x:J.min.x,IZ.y=Z.normal.y>0?J.max.y:J.min.y,IZ.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(IZ)<0)return!1}return!0}containsPoint(J){let $=this.planes;for(let Q=0;Q<6;Q++)if($[Q].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qQ extends g6{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new w0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var fZ=new S,vZ=new S,AH=new $9,u$=new M7,PZ=new v6,BW=new S,TH=new S;class N$ extends j9{constructor(J=new b9,$=new qQ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[0];for(let Z=1,K=$.count;Z<K;Z++)fZ.fromBufferAttribute($,Z-1),vZ.fromBufferAttribute($,Z),Q[Z]=Q[Z-1],Q[Z]+=fZ.distanceTo(vZ);J.setAttribute("lineDistance",new W9(Q,1))}else t0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,K=J.params.Line.threshold,W=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(PZ.copy(Q.boundingSphere),PZ.applyMatrix4(Z),PZ.radius+=K,J.ray.intersectsSphere(PZ)===!1)return;AH.copy(Z).invert(),u$.copy(J.ray).applyMatrix4(AH);let X=K/((this.scale.x+this.scale.y+this.scale.z)/3),Y=X*X,H=this.isLineSegments?2:1,U=Q.index,F=Q.attributes.position;if(U!==null){let N=Math.max(0,W.start),q=Math.min(U.count,W.start+W.count);for(let O=N,B=q-1;O<B;O+=H){let R=U.getX(O),E=U.getX(O+1),z=zZ(this,J,u$,Y,R,E,O);if(z)$.push(z)}if(this.isLineLoop){let O=U.getX(q-1),B=U.getX(N),R=zZ(this,J,u$,Y,O,B,q-1);if(R)$.push(R)}}else{let N=Math.max(0,W.start),q=Math.min(F.count,W.start+W.count);for(let O=N,B=q-1;O<B;O+=H){let R=zZ(this,J,u$,Y,O,O+1,O);if(R)$.push(R)}if(this.isLineLoop){let O=zZ(this,J,u$,Y,q-1,N,q-1);if(O)$.push(O)}}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}}function zZ(J,$,Q,Z,K,W,X){let Y=J.geometry.attributes.position;if(fZ.fromBufferAttribute(Y,K),vZ.fromBufferAttribute(Y,W),Q.distanceSqToSegment(fZ,vZ,BW,TH)>Z)return;BW.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(BW);if(U<$.near||U>$.far)return;return{distance:U,point:TH.clone().applyMatrix4(J.matrixWorld),index:X,face:null,faceIndex:null,barycoord:null,object:J}}var _H=new S,SH=new S;class $K extends N${constructor(J,$){super(J,$);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[];for(let Z=0,K=$.count;Z<K;Z+=2)_H.fromBufferAttribute($,Z),SH.fromBufferAttribute($,Z+1),Q[Z]=Z===0?0:Q[Z-1],Q[Z+1]=Q[Z]+_H.distanceTo(SH);J.setAttribute("lineDistance",new W9(Q,1))}else t0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class QK extends N${constructor(J,$){super(J,$);this.isLineLoop=!0,this.type="LineLoop"}}class WJ extends g6{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new w0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var wH=new $9,PW=new M7,AZ=new v6,TZ=new S;class G$ extends j9{constructor(J=new b9,$=new WJ){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,K=J.params.Points.threshold,W=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(AZ.copy(Q.boundingSphere),AZ.applyMatrix4(Z),AZ.radius+=K,J.ray.intersectsSphere(AZ)===!1)return;wH.copy(Z).invert(),PW.copy(J.ray).applyMatrix4(wH);let X=K/((this.scale.x+this.scale.y+this.scale.z)/3),Y=X*X,H=Q.index,G=Q.attributes.position;if(H!==null){let F=Math.max(0,W.start),N=Math.min(H.count,W.start+W.count);for(let q=F,O=N;q<O;q++){let B=H.getX(q);TZ.fromBufferAttribute(G,B),jH(TZ,B,Y,Z,J,$,this)}}else{let F=Math.max(0,W.start),N=Math.min(G.count,W.start+W.count);for(let q=F,O=N;q<O;q++)TZ.fromBufferAttribute(G,q),jH(TZ,q,Y,Z,J,$,this)}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}}function jH(J,$,Q,Z,K,W,X){let Y=PW.distanceSqToPoint(J);if(Y<Q){let H=new S;PW.closestPointToPoint(J,H),H.applyMatrix4(Z);let U=K.ray.origin.distanceTo(H);if(U<K.near||U>K.far)return;W.push({distance:U,distanceToRay:Math.sqrt(Y),point:H,index:$,face:null,faceIndex:null,barycoord:null,object:X})}}class ZK extends W6{constructor(J=[],$=301,Q,Z,K,W,X,Y,H,U){super(J,$,Q,Z,K,W,X,Y,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class b6 extends W6{constructor(J,$,Q,Z,K,W,X,Y,H){super(J,$,Q,Z,K,W,X,Y,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class XJ extends W6{constructor(J,$,Q=1014,Z,K,W,X=1003,Y=1003,H,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:$,depth:G};super(F,Z,K,W,X,Y,U,Q,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new UQ(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let $=super.toJSON(J);return $.compareFunction=this.compareFunction,$}}class zX extends XJ{constructor(J,$=1014,Q=301,Z,K,W=1003,X=1003,Y,H=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,$,Q,Z,K,W,X,Y,H);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class KK extends W6{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class h9 extends b9{constructor(J=1,$=1,Q=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:$,depth:Q,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],H=[],U=[],G=[],F=0,N=0;q("z","y","x",-1,-1,Q,$,J,W,K,0),q("z","y","x",1,-1,Q,$,-J,W,K,1),q("x","z","y",1,1,J,Q,$,Z,W,2),q("x","z","y",1,-1,J,Q,-$,Z,W,3),q("x","y","z",1,-1,J,$,Q,Z,K,4),q("x","y","z",-1,-1,J,$,-Q,Z,K,5),this.setIndex(Y),this.setAttribute("position",new W9(H,3)),this.setAttribute("normal",new W9(U,3)),this.setAttribute("uv",new W9(G,2));function q(O,B,R,E,z,M,V,T,w,D,L){let I=M/w,i=V/D,h=M/2,d=V/2,Q0=T/2,f=w+1,y=D+1,p=0,v=0,r=new S;for(let l=0;l<y;l++){let J0=l*i-d;for(let Y0=0;Y0<f;Y0++){let I0=Y0*I-h;r[O]=I0*E,r[B]=J0*z,r[R]=Q0,H.push(r.x,r.y,r.z),r[O]=0,r[B]=0,r[R]=T>0?1:-1,U.push(r.x,r.y,r.z),G.push(Y0/w),G.push(1-l/D),p+=1}}for(let l=0;l<D;l++)for(let J0=0;J0<w;J0++){let Y0=F+J0+f*l,I0=F+J0+f*(l+1),j=F+(J0+1)+f*(l+1),a=F+(J0+1)+f*l;Y.push(Y0,I0,a),Y.push(I0,j,a),v+=6}X.addGroup(N,v,L),N+=v,F+=p}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new h9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class t8 extends b9{constructor(J=1,$=32,Q=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:$,thetaStart:Q,thetaLength:Z},$=Math.max(3,$);let K=[],W=[],X=[],Y=[],H=new S,U=new O0;W.push(0,0,0),X.push(0,0,1),Y.push(0.5,0.5);for(let G=0,F=3;G<=$;G++,F+=3){let N=Q+G/$*Z;H.x=J*Math.cos(N),H.y=J*Math.sin(N),W.push(H.x,H.y,H.z),X.push(0,0,1),U.x=(W[F]/J+1)/2,U.y=(W[F+1]/J+1)/2,Y.push(U.x,U.y)}for(let G=1;G<=$;G++)K.push(G,G+1,0);this.setIndex(K),this.setAttribute("position",new W9(W,3)),this.setAttribute("normal",new W9(X,3)),this.setAttribute("uv",new W9(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new t8(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class _9 extends b9{constructor(J=1,$=1,Q=1,Z=32,K=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:$,height:Q,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:X,thetaLength:Y};let H=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],G=[],F=[],N=[],q=0,O=[],B=Q/2,R=0;if(E(),W===!1){if(J>0)z(!0);if($>0)z(!1)}this.setIndex(U),this.setAttribute("position",new W9(G,3)),this.setAttribute("normal",new W9(F,3)),this.setAttribute("uv",new W9(N,2));function E(){let M=new S,V=new S,T=0,w=($-J)/Q;for(let D=0;D<=K;D++){let L=[],I=D/K,i=I*($-J)+J;for(let h=0;h<=Z;h++){let d=h/Z,Q0=d*Y+X,f=Math.sin(Q0),y=Math.cos(Q0);V.x=i*f,V.y=-I*Q+B,V.z=i*y,G.push(V.x,V.y,V.z),M.set(f,w,y).normalize(),F.push(M.x,M.y,M.z),N.push(d,1-I),L.push(q++)}O.push(L)}for(let D=0;D<Z;D++)for(let L=0;L<K;L++){let I=O[L][D],i=O[L+1][D],h=O[L+1][D+1],d=O[L][D+1];if(J>0||L!==0)U.push(I,i,d),T+=3;if($>0||L!==K-1)U.push(i,h,d),T+=3}H.addGroup(R,T,0),R+=T}function z(M){let V=q,T=new O0,w=new S,D=0,L=M===!0?J:$,I=M===!0?1:-1;for(let h=1;h<=Z;h++)G.push(0,B*I,0),F.push(0,I,0),N.push(0.5,0.5),q++;let i=q;for(let h=0;h<=Z;h++){let Q0=h/Z*Y+X,f=Math.cos(Q0),y=Math.sin(Q0);w.x=L*y,w.y=B*I,w.z=L*f,G.push(w.x,w.y,w.z),F.push(0,I,0),T.x=f*0.5+0.5,T.y=y*0.5*I+0.5,N.push(T.x,T.y),q++}for(let h=0;h<Z;h++){let d=V+h,Q0=i+h;if(M===!0)U.push(Q0,Q0+1,d);else U.push(Q0+1,Q0,d);D+=3}H.addGroup(R,D,M===!0?1:2),R+=D}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class YJ extends _9{constructor(J=1,$=1,Q=32,Z=1,K=!1,W=0,X=Math.PI*2){super(0,J,$,Q,Z,K,W,X);this.type="ConeGeometry",this.parameters={radius:J,height:$,radialSegments:Q,heightSegments:Z,openEnded:K,thetaStart:W,thetaLength:X}}static fromJSON(J){return new YJ(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class WK extends b9{constructor(J=[],$=[],Q=1,Z=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:$,radius:Q,detail:Z};let K=[],W=[];if(X(Z),H(Q),U(),this.setAttribute("position",new W9(K,3)),this.setAttribute("normal",new W9(K.slice(),3)),this.setAttribute("uv",new W9(W,2)),Z===0)this.computeVertexNormals();else this.normalizeNormals();function X(E){let z=new S,M=new S,V=new S;for(let T=0;T<$.length;T+=3)N($[T+0],z),N($[T+1],M),N($[T+2],V),Y(z,M,V,E)}function Y(E,z,M,V){let T=V+1,w=[];for(let D=0;D<=T;D++){w[D]=[];let L=E.clone().lerp(M,D/T),I=z.clone().lerp(M,D/T),i=T-D;for(let h=0;h<=i;h++)if(h===0&&D===T)w[D][h]=L;else w[D][h]=L.clone().lerp(I,h/i)}for(let D=0;D<T;D++)for(let L=0;L<2*(T-D)-1;L++){let I=Math.floor(L/2);if(L%2===0)F(w[D][I+1]),F(w[D+1][I]),F(w[D][I]);else F(w[D][I+1]),F(w[D+1][I+1]),F(w[D+1][I])}}function H(E){let z=new S;for(let M=0;M<K.length;M+=3)z.x=K[M+0],z.y=K[M+1],z.z=K[M+2],z.normalize().multiplyScalar(E),K[M+0]=z.x,K[M+1]=z.y,K[M+2]=z.z}function U(){let E=new S;for(let z=0;z<K.length;z+=3){E.x=K[z+0],E.y=K[z+1],E.z=K[z+2];let M=B(E)/2/Math.PI+0.5,V=R(E)/Math.PI+0.5;W.push(M,1-V)}q(),G()}function G(){for(let E=0;E<W.length;E+=6){let z=W[E+0],M=W[E+2],V=W[E+4],T=Math.max(z,M,V),w=Math.min(z,M,V);if(T>0.9&&w<0.1){if(z<0.2)W[E+0]+=1;if(M<0.2)W[E+2]+=1;if(V<0.2)W[E+4]+=1}}}function F(E){K.push(E.x,E.y,E.z)}function N(E,z){let M=E*3;z.x=J[M+0],z.y=J[M+1],z.z=J[M+2]}function q(){let E=new S,z=new S,M=new S,V=new S,T=new O0,w=new O0,D=new O0;for(let L=0,I=0;L<K.length;L+=9,I+=6){E.set(K[L+0],K[L+1],K[L+2]),z.set(K[L+3],K[L+4],K[L+5]),M.set(K[L+6],K[L+7],K[L+8]),T.set(W[I+0],W[I+1]),w.set(W[I+2],W[I+3]),D.set(W[I+4],W[I+5]),V.copy(E).add(z).add(M).divideScalar(3);let i=B(V);O(T,I+0,E,i),O(w,I+2,z,i),O(D,I+4,M,i)}}function O(E,z,M,V){if(V<0&&E.x===1)W[z]=E.x-1;if(M.x===0&&M.z===0)W[z]=V/2/Math.PI+0.5}function B(E){return Math.atan2(E.z,-E.x)}function R(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new WK(J.vertices,J.indices,J.radius,J.detail)}}class Z8{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){t0("Curve: .getPoint() not implemented.")}getPointAt(J,$){let Q=this.getUtoTmapping(J);return this.getPoint(Q,$)}getPoints(J=5){let $=[];for(let Q=0;Q<=J;Q++)$.push(this.getPoint(Q/J));return $}getSpacedPoints(J=5){let $=[];for(let Q=0;Q<=J;Q++)$.push(this.getPointAt(Q/J));return $}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let $=[],Q,Z=this.getPoint(0),K=0;$.push(0);for(let W=1;W<=J;W++)Q=this.getPoint(W/J),K+=Q.distanceTo(Z),$.push(K),Z=Q;return this.cacheArcLengths=$,$}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,$=null){let Q=this.getLengths(),Z=0,K=Q.length,W;if($)W=$;else W=J*Q[K-1];let X=0,Y=K-1,H;while(X<=Y)if(Z=Math.floor(X+(Y-X)/2),H=Q[Z]-W,H<0)X=Z+1;else if(H>0)Y=Z-1;else{Y=Z;break}if(Z=Y,Q[Z]===W)return Z/(K-1);let U=Q[Z],F=Q[Z+1]-U,N=(W-U)/F;return(Z+N)/(K-1)}getTangent(J,$){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),X=this.getPoint(K),Y=$||(W.isVector2?new O0:new S);return Y.copy(X).sub(W).normalize(),Y}getTangentAt(J,$){let Q=this.getUtoTmapping(J);return this.getTangent(Q,$)}computeFrenetFrames(J,$=!1){let Q=new S,Z=[],K=[],W=[],X=new S,Y=new $9;for(let N=0;N<=J;N++){let q=N/J;Z[N]=this.getTangentAt(q,new S)}K[0]=new S,W[0]=new S;let H=Number.MAX_VALUE,U=Math.abs(Z[0].x),G=Math.abs(Z[0].y),F=Math.abs(Z[0].z);if(U<=H)H=U,Q.set(1,0,0);if(G<=H)H=G,Q.set(0,1,0);if(F<=H)Q.set(0,0,1);X.crossVectors(Z[0],Q).normalize(),K[0].crossVectors(Z[0],X),W[0].crossVectors(Z[0],K[0]);for(let N=1;N<=J;N++){if(K[N]=K[N-1].clone(),W[N]=W[N-1].clone(),X.crossVectors(Z[N-1],Z[N]),X.length()>Number.EPSILON){X.normalize();let q=Math.acos(R9(Z[N-1].dot(Z[N]),-1,1));K[N].applyMatrix4(Y.makeRotationAxis(X,q))}W[N].crossVectors(Z[N],K[N])}if($===!0){let N=Math.acos(R9(K[0].dot(K[J]),-1,1));if(N/=J,Z[0].dot(X.crossVectors(K[0],K[J]))>0)N=-N;for(let q=1;q<=J;q++)K[q].applyMatrix4(Y.makeRotationAxis(Z[q],N*q)),W[q].crossVectors(Z[q],K[q])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class OQ extends Z8{constructor(J=0,$=0,Q=1,Z=1,K=0,W=Math.PI*2,X=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=$,this.xRadius=Q,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=X,this.aRotation=Y}getPoint(J,$=new O0){let Q=$,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let X=this.aStartAngle+J*K,Y=this.aX+this.xRadius*Math.cos(X),H=this.aY+this.yRadius*Math.sin(X);if(this.aRotation!==0){let U=Math.cos(this.aRotation),G=Math.sin(this.aRotation),F=Y-this.aX,N=H-this.aY;Y=F*U-N*G+this.aX,H=F*G+N*U+this.aY}return Q.set(Y,H)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class AX extends OQ{constructor(J,$,Q,Z,K,W){super(J,$,Q,Q,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function TX(){let J=0,$=0,Q=0,Z=0;function K(W,X,Y,H){J=W,$=Y,Q=-3*W+3*X-2*Y-H,Z=2*W-2*X+Y+H}return{initCatmullRom:function(W,X,Y,H,U){K(X,Y,U*(Y-W),U*(H-X))},initNonuniformCatmullRom:function(W,X,Y,H,U,G,F){let N=(X-W)/U-(Y-W)/(U+G)+(Y-X)/G,q=(Y-X)/G-(H-X)/(G+F)+(H-Y)/F;N*=G,q*=G,K(X,Y,N,q)},calc:function(W){let X=W*W,Y=X*W;return J+$*W+Q*X+Z*Y}}}var yH=new S,fH=new S,DW=new TX,kW=new TX,MW=new TX;class e8 extends Z8{constructor(J=[],$=!1,Q="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=$,this.curveType=Q,this.tension=Z}getPoint(J,$=new S){let Q=$,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,X=Math.floor(W),Y=W-X;if(this.closed)X+=X>0?0:(Math.floor(Math.abs(X)/K)+1)*K;else if(Y===0&&X===K-1)X=K-2,Y=1;let H,U;if(this.closed||X>0)H=Z[(X-1)%K];else fH.subVectors(Z[0],Z[1]).add(Z[0]),H=fH;let G=Z[X%K],F=Z[(X+1)%K];if(this.closed||X+2<K)U=Z[(X+2)%K];else yH.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),U=yH;if(this.curveType==="centripetal"||this.curveType==="chordal"){let N=this.curveType==="chordal"?0.5:0.25,q=Math.pow(H.distanceToSquared(G),N),O=Math.pow(G.distanceToSquared(F),N),B=Math.pow(F.distanceToSquared(U),N);if(O<0.0001)O=1;if(q<0.0001)q=O;if(B<0.0001)B=O;DW.initNonuniformCatmullRom(H.x,G.x,F.x,U.x,q,O,B),kW.initNonuniformCatmullRom(H.y,G.y,F.y,U.y,q,O,B),MW.initNonuniformCatmullRom(H.z,G.z,F.z,U.z,q,O,B)}else if(this.curveType==="catmullrom")DW.initCatmullRom(H.x,G.x,F.x,U.x,this.tension),kW.initCatmullRom(H.y,G.y,F.y,U.y,this.tension),MW.initCatmullRom(H.z,G.z,F.z,U.z,this.tension);return Q.set(DW.calc(Y),kW.calc(Y),MW.calc(Y)),Q}copy(J){super.copy(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let $=0,Q=this.points.length;$<Q;$++){let Z=this.points[$];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(new S().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function vH(J,$,Q,Z,K){let W=(Z-$)*0.5,X=(K-Q)*0.5,Y=J*J,H=J*Y;return(2*Q-2*Z+W+X)*H+(-3*Q+3*Z-2*W-X)*Y+W*J+Q}function $1(J,$){let Q=1-J;return Q*Q*$}function Q1(J,$){return 2*(1-J)*J*$}function Z1(J,$){return J*J*$}function s$(J,$,Q,Z){return $1(J,$)+Q1(J,Q)+Z1(J,Z)}function K1(J,$){let Q=1-J;return Q*Q*Q*$}function W1(J,$){let Q=1-J;return 3*Q*Q*J*$}function X1(J,$){return 3*(1-J)*J*J*$}function Y1(J,$){return J*J*J*$}function i$(J,$,Q,Z,K){return K1(J,$)+W1(J,Q)+X1(J,Z)+Y1(J,K)}class XK extends Z8{constructor(J=new O0,$=new O0,Q=new O0,Z=new O0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=$,this.v2=Q,this.v3=Z}getPoint(J,$=new O0){let Q=$,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return Q.set(i$(J,Z.x,K.x,W.x,X.x),i$(J,Z.y,K.y,W.y,X.y)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class _X extends Z8{constructor(J=new S,$=new S,Q=new S,Z=new S){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=$,this.v2=Q,this.v3=Z}getPoint(J,$=new S){let Q=$,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return Q.set(i$(J,Z.x,K.x,W.x,X.x),i$(J,Z.y,K.y,W.y,X.y),i$(J,Z.z,K.z,W.z,X.z)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class YK extends Z8{constructor(J=new O0,$=new O0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=$}getPoint(J,$=new O0){let Q=$;if(J===1)Q.copy(this.v2);else Q.copy(this.v2).sub(this.v1),Q.multiplyScalar(J).add(this.v1);return Q}getPointAt(J,$){return this.getPoint(J,$)}getTangent(J,$=new O0){return $.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,$){return this.getTangent(J,$)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class SX extends Z8{constructor(J=new S,$=new S){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=$}getPoint(J,$=new S){let Q=$;if(J===1)Q.copy(this.v2);else Q.copy(this.v2).sub(this.v1),Q.multiplyScalar(J).add(this.v1);return Q}getPointAt(J,$){return this.getPoint(J,$)}getTangent(J,$=new S){return $.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,$){return this.getTangent(J,$)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class HK extends Z8{constructor(J=new O0,$=new O0,Q=new O0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=$,this.v2=Q}getPoint(J,$=new O0){let Q=$,Z=this.v0,K=this.v1,W=this.v2;return Q.set(s$(J,Z.x,K.x,W.x),s$(J,Z.y,K.y,W.y)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class o6 extends Z8{constructor(J=new S,$=new S,Q=new S){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=$,this.v2=Q}getPoint(J,$=new S){let Q=$,Z=this.v0,K=this.v1,W=this.v2;return Q.set(s$(J,Z.x,K.x,W.x),s$(J,Z.y,K.y,W.y),s$(J,Z.z,K.z,W.z)),Q}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class UK extends Z8{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,$=new O0){let Q=$,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),X=K-W,Y=Z[W===0?W:W-1],H=Z[W],U=Z[W>Z.length-2?Z.length-1:W+1],G=Z[W>Z.length-3?Z.length-1:W+2];return Q.set(vH(X,Y.x,H.x,U.x,G.x),vH(X,Y.y,H.y,U.y,G.y)),Q}copy(J){super.copy(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let $=0,Q=this.points.length;$<Q;$++){let Z=this.points[$];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let $=0,Q=J.points.length;$<Q;$++){let Z=J.points[$];this.points.push(new O0().fromArray(Z))}return this}}var zW=Object.freeze({__proto__:null,ArcCurve:AX,CatmullRomCurve3:e8,CubicBezierCurve:XK,CubicBezierCurve3:_X,EllipseCurve:OQ,LineCurve:YK,LineCurve3:SX,QuadraticBezierCurve:HK,QuadraticBezierCurve3:o6,SplineCurve:UK});class wX extends Z8{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),$=this.curves[this.curves.length-1].getPoint(1);if(!J.equals($)){let Q=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zW[Q]($,J))}return this}getPoint(J,$){let Q=J*this.getLength(),Z=this.getCurveLengths(),K=0;while(K<Z.length){if(Z[K]>=Q){let W=Z[K]-Q,X=this.curves[K],Y=X.getLength(),H=Y===0?0:1-W/Y;return X.getPointAt(H,$)}K++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],$=0;for(let Q=0,Z=this.curves.length;Q<Z;Q++)$+=this.curves[Q].getLength(),J.push($);return this.cacheLengths=J,J}getSpacedPoints(J=40){let $=[];for(let Q=0;Q<=J;Q++)$.push(this.getPoint(Q/J));if(this.autoClose)$.push($[0]);return $}getPoints(J=12){let $=[],Q;for(let Z=0,K=this.curves;Z<K.length;Z++){let W=K[Z],X=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,Y=W.getPoints(X);for(let H=0;H<Y.length;H++){let U=Y[H];if(Q&&Q.equals(U))continue;$.push(U),Q=U}}if(this.autoClose&&$.length>1&&!$[$.length-1].equals($[0]))$.push($[0]);return $}copy(J){super.copy(J),this.curves=[];for(let $=0,Q=J.curves.length;$<Q;$++){let Z=J.curves[$];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let $=0,Q=this.curves.length;$<Q;$++){let Z=this.curves[$];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let $=0,Q=J.curves.length;$<Q;$++){let Z=J.curves[$];this.curves.push(new zW[Z.type]().fromJSON(Z))}return this}}class bZ extends wX{constructor(J){super();if(this.type="Path",this.currentPoint=new O0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let $=1,Q=J.length;$<Q;$++)this.lineTo(J[$].x,J[$].y);return this}moveTo(J,$){return this.currentPoint.set(J,$),this}lineTo(J,$){let Q=new YK(this.currentPoint.clone(),new O0(J,$));return this.curves.push(Q),this.currentPoint.set(J,$),this}quadraticCurveTo(J,$,Q,Z){let K=new HK(this.currentPoint.clone(),new O0(J,$),new O0(Q,Z));return this.curves.push(K),this.currentPoint.set(Q,Z),this}bezierCurveTo(J,$,Q,Z,K,W){let X=new XK(this.currentPoint.clone(),new O0(J,$),new O0(Q,Z),new O0(K,W));return this.curves.push(X),this.currentPoint.set(K,W),this}splineThru(J){let $=[this.currentPoint.clone()].concat(J),Q=new UK($);return this.curves.push(Q),this.currentPoint.copy(J[J.length-1]),this}arc(J,$,Q,Z,K,W){let X=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+X,$+Y,Q,Z,K,W),this}absarc(J,$,Q,Z,K,W){return this.absellipse(J,$,Q,Q,Z,K,W),this}ellipse(J,$,Q,Z,K,W,X,Y){let H=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+H,$+U,Q,Z,K,W,X,Y),this}absellipse(J,$,Q,Z,K,W,X,Y){let H=new OQ(J,$,Q,Z,K,W,X,Y);if(this.curves.length>0){let G=H.getPoint(0);if(!G.equals(this.currentPoint))this.lineTo(G.x,G.y)}this.curves.push(H);let U=H.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class RQ extends bZ{constructor(J){super(J);this.uuid=$8(),this.type="Shape",this.holes=[]}getPointsHoles(J){let $=[];for(let Q=0,Z=this.holes.length;Q<Z;Q++)$[Q]=this.holes[Q].getPoints(J);return $}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let $=0,Q=J.holes.length;$<Q;$++){let Z=J.holes[$];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let $=0,Q=this.holes.length;$<Q;$++){let Z=this.holes[$];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let $=0,Q=J.holes.length;$<Q;$++){let Z=J.holes[$];this.holes.push(new bZ().fromJSON(Z))}return this}}function H1(J,$,Q=2){let Z=$&&$.length,K=Z?$[0]*Q:J.length,W=s5(J,0,K,Q,!0),X=[];if(!W||W.next===W.prev)return X;let Y,H,U;if(Z)W=E1(J,$,W,Q);if(J.length>80*Q){Y=J[0],H=J[1];let G=Y,F=H;for(let N=Q;N<K;N+=Q){let q=J[N],O=J[N+1];if(q<Y)Y=q;if(O<H)H=O;if(q>G)G=q;if(O>F)F=O}U=Math.max(G-Y,F-H),U=U!==0?32767/U:0}return a$(W,X,Q,Y,H,U,0),X}function s5(J,$,Q,Z,K){let W;if(K===I1(J,$,Q,Z)>0)for(let X=$;X<Q;X+=Z)W=bH(X/Z|0,J[X],J[X+1],W);else for(let X=Q-Z;X>=$;X-=Z)W=bH(X/Z|0,J[X],J[X+1],W);if(W&&tJ(W,W.next))t$(W),W=W.next;return W}function s7(J,$){if(!J)return J;if(!$)$=J;let Q=J,Z;do if(Z=!1,!Q.steiner&&(tJ(Q,Q.next)||e9(Q.prev,Q,Q.next)===0)){if(t$(Q),Q=$=Q.prev,Q===Q.next)break;Z=!0}else Q=Q.next;while(Z||Q!==$);return $}function a$(J,$,Q,Z,K,W,X){if(!J)return;if(!X&&W)V1(J,Z,K,W);let Y=J;while(J.prev!==J.next){let{prev:H,next:U}=J;if(W?N1(J,Z,K,W):U1(J)){$.push(H.i,J.i,U.i),t$(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!X)a$(s7(J),$,Q,Z,K,W,1);else if(X===1)J=G1(s7(J),$),a$(J,$,Q,Z,K,W,2);else if(X===2)F1(J,$,Q,Z,K,W);break}}}function U1(J){let $=J.prev,Q=J,Z=J.next;if(e9($,Q,Z)>=0)return!1;let K=$.x,W=Q.x,X=Z.x,Y=$.y,H=Q.y,U=Z.y,G=Math.min(K,W,X),F=Math.min(Y,H,U),N=Math.max(K,W,X),q=Math.max(Y,H,U),O=Z.next;while(O!==$){if(O.x>=G&&O.x<=N&&O.y>=F&&O.y<=q&&d$(K,Y,W,H,X,U,O.x,O.y)&&e9(O.prev,O,O.next)>=0)return!1;O=O.next}return!0}function N1(J,$,Q,Z){let K=J.prev,W=J,X=J.next;if(e9(K,W,X)>=0)return!1;let Y=K.x,H=W.x,U=X.x,G=K.y,F=W.y,N=X.y,q=Math.min(Y,H,U),O=Math.min(G,F,N),B=Math.max(Y,H,U),R=Math.max(G,F,N),E=AW(q,O,$,Q,Z),z=AW(B,R,$,Q,Z),M=J.prevZ,V=J.nextZ;while(M&&M.z>=E&&V&&V.z<=z){if(M.x>=q&&M.x<=B&&M.y>=O&&M.y<=R&&M!==K&&M!==X&&d$(Y,G,H,F,U,N,M.x,M.y)&&e9(M.prev,M,M.next)>=0)return!1;if(M=M.prevZ,V.x>=q&&V.x<=B&&V.y>=O&&V.y<=R&&V!==K&&V!==X&&d$(Y,G,H,F,U,N,V.x,V.y)&&e9(V.prev,V,V.next)>=0)return!1;V=V.nextZ}while(M&&M.z>=E){if(M.x>=q&&M.x<=B&&M.y>=O&&M.y<=R&&M!==K&&M!==X&&d$(Y,G,H,F,U,N,M.x,M.y)&&e9(M.prev,M,M.next)>=0)return!1;M=M.prevZ}while(V&&V.z<=z){if(V.x>=q&&V.x<=B&&V.y>=O&&V.y<=R&&V!==K&&V!==X&&d$(Y,G,H,F,U,N,V.x,V.y)&&e9(V.prev,V,V.next)>=0)return!1;V=V.nextZ}return!0}function G1(J,$){let Q=J;do{let Z=Q.prev,K=Q.next.next;if(!tJ(Z,K)&&o5(Z,Q,Q.next,K)&&r$(Z,K)&&r$(K,Z))$.push(Z.i,Q.i,K.i),t$(Q),t$(Q.next),Q=J=K;Q=Q.next}while(Q!==J);return s7(Q)}function F1(J,$,Q,Z,K,W){let X=J;do{let Y=X.next.next;while(Y!==X.prev){if(X.i!==Y.i&&k1(X,Y)){let H=a5(X,Y);X=s7(X,X.next),H=s7(H,H.next),a$(X,$,Q,Z,K,W,0),a$(H,$,Q,Z,K,W,0);return}Y=Y.next}X=X.next}while(X!==J)}function E1(J,$,Q,Z){let K=[];for(let W=0,X=$.length;W<X;W++){let Y=$[W]*Z,H=W<X-1?$[W+1]*Z:J.length,U=s5(J,Y,H,Z,!1);if(U===U.next)U.steiner=!0;K.push(D1(U))}K.sort(q1);for(let W=0;W<K.length;W++)Q=O1(K[W],Q);return Q}function q1(J,$){let Q=J.x-$.x;if(Q===0){if(Q=J.y-$.y,Q===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),K=($.next.y-$.y)/($.next.x-$.x);Q=Z-K}}return Q}function O1(J,$){let Q=R1(J,$);if(!Q)return $;let Z=a5(Q,J);return s7(Z,Z.next),s7(Q,Q.next)}function R1(J,$){let Q=$,Z=J.x,K=J.y,W=-1/0,X;if(tJ(J,Q))return Q;do{if(tJ(J,Q.next))return Q.next;else if(K<=Q.y&&K>=Q.next.y&&Q.next.y!==Q.y){let F=Q.x+(K-Q.y)*(Q.next.x-Q.x)/(Q.next.y-Q.y);if(F<=Z&&F>W){if(W=F,X=Q.x<Q.next.x?Q:Q.next,F===Z)return X}}Q=Q.next}while(Q!==$);if(!X)return null;let Y=X,H=X.x,U=X.y,G=1/0;Q=X;do{if(Z>=Q.x&&Q.x>=H&&Z!==Q.x&&i5(K<U?Z:W,K,H,U,K<U?W:Z,K,Q.x,Q.y)){let F=Math.abs(K-Q.y)/(Z-Q.x);if(r$(Q,J)&&(F<G||F===G&&(Q.x>X.x||Q.x===X.x&&L1(X,Q))))X=Q,G=F}Q=Q.next}while(Q!==Y);return X}function L1(J,$){return e9(J.prev,J,$.prev)<0&&e9($.next,J,J.next)<0}function V1(J,$,Q,Z){let K=J;do{if(K.z===0)K.z=AW(K.x,K.y,$,Q,Z);K.prevZ=K.prev,K.nextZ=K.next,K=K.next}while(K!==J);K.prevZ.nextZ=null,K.prevZ=null,B1(K)}function B1(J){let $,Q=1;do{let Z=J,K;J=null;let W=null;$=0;while(Z){$++;let X=Z,Y=0;for(let U=0;U<Q;U++)if(Y++,X=X.nextZ,!X)break;let H=Q;while(Y>0||H>0&&X){if(Y!==0&&(H===0||!X||Z.z<=X.z))K=Z,Z=Z.nextZ,Y--;else K=X,X=X.nextZ,H--;if(W)W.nextZ=K;else J=K;K.prevZ=W,W=K}Z=X}W.nextZ=null,Q*=2}while($>1);return J}function AW(J,$,Q,Z,K){return J=(J-Q)*K|0,$=($-Z)*K|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,$=($|$<<8)&16711935,$=($|$<<4)&252645135,$=($|$<<2)&858993459,$=($|$<<1)&1431655765,J|$<<1}function D1(J){let $=J,Q=J;do{if($.x<Q.x||$.x===Q.x&&$.y<Q.y)Q=$;$=$.next}while($!==J);return Q}function i5(J,$,Q,Z,K,W,X,Y){return(K-X)*($-Y)>=(J-X)*(W-Y)&&(J-X)*(Z-Y)>=(Q-X)*($-Y)&&(Q-X)*(W-Y)>=(K-X)*(Z-Y)}function d$(J,$,Q,Z,K,W,X,Y){return!(J===X&&$===Y)&&i5(J,$,Q,Z,K,W,X,Y)}function k1(J,$){return J.next.i!==$.i&&J.prev.i!==$.i&&!M1(J,$)&&(r$(J,$)&&r$($,J)&&C1(J,$)&&(e9(J.prev,J,$.prev)||e9(J,$.prev,$))||tJ(J,$)&&e9(J.prev,J,J.next)>0&&e9($.prev,$,$.next)>0)}function e9(J,$,Q){return($.y-J.y)*(Q.x-$.x)-($.x-J.x)*(Q.y-$.y)}function tJ(J,$){return J.x===$.x&&J.y===$.y}function o5(J,$,Q,Z){let K=SZ(e9(J,$,Q)),W=SZ(e9(J,$,Z)),X=SZ(e9(Q,Z,J)),Y=SZ(e9(Q,Z,$));if(K!==W&&X!==Y)return!0;if(K===0&&_Z(J,Q,$))return!0;if(W===0&&_Z(J,Z,$))return!0;if(X===0&&_Z(Q,J,Z))return!0;if(Y===0&&_Z(Q,$,Z))return!0;return!1}function _Z(J,$,Q){return $.x<=Math.max(J.x,Q.x)&&$.x>=Math.min(J.x,Q.x)&&$.y<=Math.max(J.y,Q.y)&&$.y>=Math.min(J.y,Q.y)}function SZ(J){return J>0?1:J<0?-1:0}function M1(J,$){let Q=J;do{if(Q.i!==J.i&&Q.next.i!==J.i&&Q.i!==$.i&&Q.next.i!==$.i&&o5(Q,Q.next,J,$))return!0;Q=Q.next}while(Q!==J);return!1}function r$(J,$){return e9(J.prev,J,J.next)<0?e9(J,$,J.next)>=0&&e9(J,J.prev,$)>=0:e9(J,$,J.prev)<0||e9(J,J.next,$)<0}function C1(J,$){let Q=J,Z=!1,K=(J.x+$.x)/2,W=(J.y+$.y)/2;do{if(Q.y>W!==Q.next.y>W&&Q.next.y!==Q.y&&K<(Q.next.x-Q.x)*(W-Q.y)/(Q.next.y-Q.y)+Q.x)Z=!Z;Q=Q.next}while(Q!==J);return Z}function a5(J,$){let Q=TW(J.i,J.x,J.y),Z=TW($.i,$.x,$.y),K=J.next,W=$.prev;return J.next=$,$.prev=J,Q.next=K,K.prev=Q,Z.next=Q,Q.prev=Z,W.next=Z,Z.prev=W,Z}function bH(J,$,Q,Z){let K=TW(J,$,Q);if(!Z)K.prev=K,K.next=K;else K.next=Z.next,K.prev=Z,Z.next.prev=K,Z.next=K;return K}function t$(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function TW(J,$,Q){return{i:J,x:$,y:Q,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function I1(J,$,Q,Z){let K=0;for(let W=$,X=Q-Z;W<Q;W+=Z)K+=(J[X]-J[W])*(J[W+1]+J[X+1]),X=W;return K}class r5{static triangulate(J,$,Q=2){return H1(J,$,Q)}}class oJ{static area(J){let $=J.length,Q=0;for(let Z=$-1,K=0;K<$;Z=K++)Q+=J[Z].x*J[K].y-J[K].x*J[Z].y;return Q*0.5}static isClockWise(J){return oJ.area(J)<0}static triangulateShape(J,$){let Q=[],Z=[],K=[];hH(J),xH(Q,J);let W=J.length;$.forEach(hH);for(let Y=0;Y<$.length;Y++)Z.push(W),W+=$[Y].length,xH(Q,$[Y]);let X=r5.triangulate(Q,Z);for(let Y=0;Y<X.length;Y+=3)K.push(X.slice(Y,Y+3));return K}}function hH(J){let $=J.length;if($>2&&J[$-1].equals(J[0]))J.pop()}function xH(J,$){for(let Q=0;Q<$.length;Q++)J.push($[Q].x),J.push($[Q].y)}class LQ extends WK{constructor(J=1,$=0){let Q=(1+Math.sqrt(5))/2,Z=[-1,Q,0,1,Q,0,-1,-Q,0,1,-Q,0,0,-1,Q,0,1,Q,0,-1,-Q,0,1,-Q,Q,0,-1,Q,0,1,-Q,0,-1,-Q,0,1],K=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(Z,K,J,$);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:$}}static fromJSON(J){return new LQ(J.radius,J.detail)}}class b8 extends b9{constructor(J=[new O0(0,-0.5),new O0(0.5,0),new O0(0,0.5)],$=12,Q=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:$,phiStart:Q,phiLength:Z},$=Math.floor($),Z=R9(Z,0,Math.PI*2);let K=[],W=[],X=[],Y=[],H=[],U=1/$,G=new S,F=new O0,N=new S,q=new S,O=new S,B=0,R=0;for(let E=0;E<=J.length-1;E++)switch(E){case 0:B=J[E+1].x-J[E].x,R=J[E+1].y-J[E].y,N.x=R*1,N.y=-B,N.z=R*0,O.copy(N),N.normalize(),Y.push(N.x,N.y,N.z);break;case J.length-1:Y.push(O.x,O.y,O.z);break;default:B=J[E+1].x-J[E].x,R=J[E+1].y-J[E].y,N.x=R*1,N.y=-B,N.z=R*0,q.copy(N),N.x+=O.x,N.y+=O.y,N.z+=O.z,N.normalize(),Y.push(N.x,N.y,N.z),O.copy(q)}for(let E=0;E<=$;E++){let z=Q+E*U*Z,M=Math.sin(z),V=Math.cos(z);for(let T=0;T<=J.length-1;T++){G.x=J[T].x*M,G.y=J[T].y,G.z=J[T].x*V,W.push(G.x,G.y,G.z),F.x=E/$,F.y=T/(J.length-1),X.push(F.x,F.y);let w=Y[3*T+0]*M,D=Y[3*T+1],L=Y[3*T+0]*V;H.push(w,D,L)}}for(let E=0;E<$;E++)for(let z=0;z<J.length-1;z++){let M=z+E*J.length,V=M,T=M+J.length,w=M+J.length+1,D=M+1;K.push(V,T,D),K.push(w,D,T)}this.setIndex(K),this.setAttribute("position",new W9(W,3)),this.setAttribute("uv",new W9(X,2)),this.setAttribute("normal",new W9(H,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new b8(J.points,J.segments,J.phiStart,J.phiLength)}}class L9 extends b9{constructor(J=1,$=1,Q=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:$,widthSegments:Q,heightSegments:Z};let K=J/2,W=$/2,X=Math.floor(Q),Y=Math.floor(Z),H=X+1,U=Y+1,G=J/X,F=$/Y,N=[],q=[],O=[],B=[];for(let R=0;R<U;R++){let E=R*F-W;for(let z=0;z<H;z++){let M=z*G-K;q.push(M,-E,0),O.push(0,0,1),B.push(z/X),B.push(1-R/Y)}}for(let R=0;R<Y;R++)for(let E=0;E<X;E++){let z=E+H*R,M=E+H*(R+1),V=E+1+H*(R+1),T=E+1+H*R;N.push(z,M,T),N.push(M,V,T)}this.setIndex(N),this.setAttribute("position",new W9(q,3)),this.setAttribute("normal",new W9(O,3)),this.setAttribute("uv",new W9(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new L9(J.width,J.height,J.widthSegments,J.heightSegments)}}class VQ extends b9{constructor(J=new RQ([new O0(0,0.5),new O0(-0.5,-0.5),new O0(0.5,-0.5)]),$=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:$};let Q=[],Z=[],K=[],W=[],X=0,Y=0;if(Array.isArray(J)===!1)H(J);else for(let U=0;U<J.length;U++)H(J[U]),this.addGroup(X,Y,U),X+=Y,Y=0;this.setIndex(Q),this.setAttribute("position",new W9(Z,3)),this.setAttribute("normal",new W9(K,3)),this.setAttribute("uv",new W9(W,2));function H(U){let G=Z.length/3,F=U.extractPoints($),N=F.shape,q=F.holes;if(oJ.isClockWise(N)===!1)N=N.reverse();for(let B=0,R=q.length;B<R;B++){let E=q[B];if(oJ.isClockWise(E)===!0)q[B]=E.reverse()}let O=oJ.triangulateShape(N,q);for(let B=0,R=q.length;B<R;B++){let E=q[B];N=N.concat(E)}for(let B=0,R=N.length;B<R;B++){let E=N[B];Z.push(E.x,E.y,0),K.push(0,0,1),W.push(E.x,E.y)}for(let B=0,R=O.length;B<R;B++){let E=O[B],z=E[0]+G,M=E[1]+G,V=E[2]+G;Q.push(z,M,V),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),$=this.parameters.shapes;return P1($,J)}static fromJSON(J,$){let Q=[];for(let Z=0,K=J.shapes.length;Z<K;Z++){let W=$[J.shapes[Z]];Q.push(W)}return new VQ(Q,J.curveSegments)}}function P1(J,$){if($.shapes=[],Array.isArray(J))for(let Q=0,Z=J.length;Q<Z;Q++){let K=J[Q];$.shapes.push(K.uuid)}else $.shapes.push(J.uuid);return $}class B6 extends b9{constructor(J=1,$=32,Q=16,Z=0,K=Math.PI*2,W=0,X=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:$,heightSegments:Q,phiStart:Z,phiLength:K,thetaStart:W,thetaLength:X},$=Math.max(3,Math.floor($)),Q=Math.max(2,Math.floor(Q));let Y=Math.min(W+X,Math.PI),H=0,U=[],G=new S,F=new S,N=[],q=[],O=[],B=[];for(let R=0;R<=Q;R++){let E=[],z=R/Q,M=W+z*X,V=J*Math.cos(M),T=Math.sqrt(J*J-V*V),w=0;if(R===0&&W===0)w=0.5/$;else if(R===Q&&Y===Math.PI)w=-0.5/$;for(let D=0;D<=$;D++){let L=D/$,I=Z+L*K;G.x=-T*Math.cos(I),G.y=V,G.z=T*Math.sin(I),q.push(G.x,G.y,G.z),F.copy(G).normalize(),O.push(F.x,F.y,F.z),B.push(L+w,1-z),E.push(H++)}U.push(E)}for(let R=0;R<Q;R++)for(let E=0;E<$;E++){let z=U[R][E+1],M=U[R][E],V=U[R+1][E],T=U[R+1][E+1];if(R!==0||W>0)N.push(z,M,T);if(R!==Q-1||Y<Math.PI)N.push(M,V,T)}this.setIndex(N),this.setAttribute("position",new W9(q,3)),this.setAttribute("normal",new W9(O,3)),this.setAttribute("uv",new W9(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new B6(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class D8 extends b9{constructor(J=1,$=0.4,Q=12,Z=48,K=Math.PI*2,W=0,X=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:$,radialSegments:Q,tubularSegments:Z,arc:K,thetaStart:W,thetaLength:X},Q=Math.floor(Q),Z=Math.floor(Z);let Y=[],H=[],U=[],G=[],F=new S,N=new S,q=new S;for(let O=0;O<=Q;O++){let B=W+O/Q*X;for(let R=0;R<=Z;R++){let E=R/Z*K;N.x=(J+$*Math.cos(B))*Math.cos(E),N.y=(J+$*Math.cos(B))*Math.sin(E),N.z=$*Math.sin(B),H.push(N.x,N.y,N.z),F.x=J*Math.cos(E),F.y=J*Math.sin(E),q.subVectors(N,F).normalize(),U.push(q.x,q.y,q.z),G.push(R/Z),G.push(O/Q)}}for(let O=1;O<=Q;O++)for(let B=1;B<=Z;B++){let R=(Z+1)*O+B-1,E=(Z+1)*(O-1)+B-1,z=(Z+1)*(O-1)+B,M=(Z+1)*O+B;Y.push(R,E,M),Y.push(E,z,M)}this.setIndex(Y),this.setAttribute("position",new W9(H,3)),this.setAttribute("normal",new W9(U,3)),this.setAttribute("uv",new W9(G,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new D8(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class p6 extends b9{constructor(J=new o6(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),$=64,Q=1,Z=8,K=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:$,radius:Q,radialSegments:Z,closed:K};let W=J.computeFrenetFrames($,K);this.tangents=W.tangents,this.normals=W.normals,this.binormals=W.binormals;let X=new S,Y=new S,H=new O0,U=new S,G=[],F=[],N=[],q=[];O(),this.setIndex(q),this.setAttribute("position",new W9(G,3)),this.setAttribute("normal",new W9(F,3)),this.setAttribute("uv",new W9(N,2));function O(){for(let z=0;z<$;z++)B(z);B(K===!1?$:0),E(),R()}function B(z){U=J.getPointAt(z/$,U);let M=W.normals[z],V=W.binormals[z];for(let T=0;T<=Z;T++){let w=T/Z*Math.PI*2,D=Math.sin(w),L=-Math.cos(w);Y.x=L*M.x+D*V.x,Y.y=L*M.y+D*V.y,Y.z=L*M.z+D*V.z,Y.normalize(),F.push(Y.x,Y.y,Y.z),X.x=U.x+Q*Y.x,X.y=U.y+Q*Y.y,X.z=U.z+Q*Y.z,G.push(X.x,X.y,X.z)}}function R(){for(let z=1;z<=$;z++)for(let M=1;M<=Z;M++){let V=(Z+1)*(z-1)+(M-1),T=(Z+1)*z+(M-1),w=(Z+1)*z+M,D=(Z+1)*(z-1)+M;q.push(V,T,D),q.push(T,w,D)}}function E(){for(let z=0;z<=$;z++)for(let M=0;M<=Z;M++)H.x=z/$,H.y=M/Z,N.push(H.x,H.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new p6(new zW[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function HJ(J){let $={};for(let Q in J){$[Q]={};for(let Z in J[Q]){let K=J[Q][Z];if(gH(K))if(K.isRenderTargetTexture)t0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[Q][Z]=null;else $[Q][Z]=K.clone();else if(Array.isArray(K))if(gH(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();$[Q][Z]=W}else $[Q][Z]=K.slice();else $[Q][Z]=K}}return $}function w6(J){let $={};for(let Q=0;Q<J.length;Q++){let Z=HJ(J[Q]);for(let K in Z)$[K]=Z[K]}return $}function gH(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function z1(J){let $=[];for(let Q=0;Q<J.length;Q++)$.push(J[Q].clone());return $}function jX(J){let $=J.getRenderTarget();if($===null)return J.outputColorSpace;if($.isXRRenderTarget===!0)return $.texture.colorSpace;return V9.workingColorSpace}var J7={clone:HJ,merge:w6},A1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $6 extends g6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A1,this.fragmentShader=T1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=HJ(J.uniforms),this.uniformsGroups=z1(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let $=super.toJSON(J);$.glslVersion=this.glslVersion,$.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)$.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)$.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)$.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)$.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)$.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)$.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)$.uniforms[Z]={type:"m4",value:W.toArray()};else $.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let Q={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Q[Z]=!0;if(Object.keys(Q).length>0)$.extensions=Q;return $}fromJSON(J,$){if(super.fromJSON(J,$),J.uniforms!==void 0)for(let Q in J.uniforms){let Z=J.uniforms[Q];switch(this.uniforms[Q]={},Z.type){case"t":this.uniforms[Q].value=$[Z.value]||null;break;case"c":this.uniforms[Q].value=new w0().setHex(Z.value);break;case"v2":this.uniforms[Q].value=new O0().fromArray(Z.value);break;case"v3":this.uniforms[Q].value=new S().fromArray(Z.value);break;case"v4":this.uniforms[Q].value=new c9().fromArray(Z.value);break;case"m3":this.uniforms[Q].value=new U9().fromArray(Z.value);break;case"m4":this.uniforms[Q].value=new $9().fromArray(Z.value);break;default:this.uniforms[Q].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Q in J.extensions)this.extensions[Q]=J.extensions[Q];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class BQ extends $6{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class n0 extends g6{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new w0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new w0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new O0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class D6 extends n0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new O0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return R9(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function($){this.ior=(1+0.4*$)/(1-0.4*$)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new w0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new w0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new w0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class yX extends g6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class fX extends g6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function q7(J,$){if(!J||J.constructor===$)return J;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(J);return Array.prototype.slice.call(J)}function yZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function _1(J){function $(K,W){return J[K]-J[W]}let Q=J.length,Z=Array(Q);for(let K=0;K!==Q;++K)Z[K]=K;return Z.sort($),Z}function pH(J,$,Q){let Z=J.length,K=new J.constructor(Z);for(let W=0,X=0;X!==Z;++W){let Y=Q[W]*$;for(let H=0;H!==$;++H)K[X++]=J[Y+H]}return K}function S1(J,$,Q,Z){let K=1,W=J[0];while(W!==void 0&&W[Z]===void 0)W=J[K++];if(W===void 0)return;let X=W[Z];if(X===void 0)return;if(Array.isArray(X))do{if(X=W[Z],X!==void 0)$.push(W.time),Q.push(...X);W=J[K++]}while(W!==void 0);else if(X.toArray!==void 0)do{if(X=W[Z],X!==void 0)$.push(W.time),X.toArray(Q,Q.length);W=J[K++]}while(W!==void 0);else do{if(X=W[Z],X!==void 0)$.push(W.time),Q.push(X);W=J[K++]}while(W!==void 0)}class $7{constructor(J,$,Q,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new $.constructor(Q),this.sampleValues=$,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate(J){let $=this.parameterPositions,Q=this._cachedIndex,Z=$[Q],K=$[Q-1];J:{$:{let W;Q:{Z:if(!(J<Z)){for(let X=Q+2;;){if(Z===void 0){if(J<K)break Z;return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===X)break;if(K=Z,Z=$[++Q],J<Z)break $}W=$.length;break Q}if(!(J>=K)){let X=$[1];if(J<X)Q=2,K=X;for(let Y=Q-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===Y)break;if(Z=K,K=$[--Q-1],J>=K)break $}W=Q,Q=0;break Q}break J}while(Q<W){let X=Q+W>>>1;if(J<$[X])W=X;else Q=X+1}if(Z=$[Q],K=$[Q-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,K,Z)}return this.interpolate_(Q,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)$[W]=Q[K+W];return $}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class vX extends $7{constructor(J,$,Q,Z){super(J,$,Q,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,$,Q){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*$-Q;break;case 2402:K=Z.length-2,X=$+Z[K]-Z[K+1];break;default:K=J,X=Q}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*Q-$;break;case 2402:W=1,Y=Q+Z[1]-Z[0];break;default:W=J-1,Y=$}let H=(Q-$)*0.5,U=this.valueSize;this._weightPrev=H/($-X),this._weightNext=H/(Y-Q),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this._offsetPrev,G=this._offsetNext,F=this._weightPrev,N=this._weightNext,q=(Q-$)/(Z-$),O=q*q,B=O*q,R=-F*B+2*F*O-F*q,E=(1+F)*B+(-1.5-2*F)*O+(-0.5+F)*q+1,z=(-1-N)*B+(1.5+N)*O+0.5*q,M=N*B-N*O;for(let V=0;V!==X;++V)K[V]=R*W[U+V]+E*W[H+V]+z*W[Y+V]+M*W[G+V];return K}}class NK extends $7{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=(Q-$)/(Z-$),G=1-U;for(let F=0;F!==X;++F)K[F]=W[H+F]*G+W[Y+F]*U;return K}}class bX extends $7{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class hX extends $7{interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this.inTangents,G=this.outTangents;if(!U||!G){let q=(Q-$)/(Z-$),O=1-q;for(let B=0;B!==X;++B)K[B]=W[H+B]*O+W[Y+B]*q;return K}let F=X*2,N=J-1;for(let q=0;q!==X;++q){let O=W[H+q],B=W[Y+q],R=N*F+q*2,E=G[R],z=G[R+1],M=J*F+q*2,V=U[M],T=U[M+1],w=j1(Q,$,E,V,Z);K[q]=t5(w,O,z,T,B)}return K}}function t5(J,$,Q,Z,K){let W=1-J;return W*W*W*$+3*W*W*J*Q+3*W*J*J*Z+J*J*J*K}function w1(J,$,Q,Z,K){let W=1-J;return 3*W*W*(Q-$)+6*W*J*(Z-Q)+3*J*J*(K-Z)}function j1(J,$,Q,Z,K){let W=(J-$)/(K-$);for(let X=0;X<8;X++){let Y=t5(W,$,Q,Z,K)-J;if(Math.abs(Y)<0.0000000001)break;let H=w1(W,$,Q,Z,K);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-Y/H))}return W}class a6{constructor(J,$,Q,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=q7($,this.TimeBufferType),this.values=q7(Q,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let $=J.constructor,Q;if($.toJSON!==this.toJSON)Q=$.toJSON(J);else{Q={name:J.name,times:q7(J.times,Array),values:q7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)Q.interpolation=Z;if(yZ(J.settings))Q.settings={inTangents:q7(J.settings.inTangents,Array),outTangents:q7(J.settings.outTangents,Array)}}return Q.type=J.ValueTypeName,Q}InterpolantFactoryMethodDiscrete(J){return new bX(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new NK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new vX(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let $=new hX(this.times,this.values,this.getValueSize(),J);if(this.settings)$.inTangents=this.settings.inTangents,$.outTangents=this.settings.outTangents;return $}setInterpolation(J){let $;switch(J){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break;case 2303:$=this.InterpolantFactoryMethodBezier;break}if($===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return t0("KeyframeTrack:",Q),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]+=J}return this}scale(J){if(J!==1){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]*=J;if(yZ(this.settings))mH(this.settings.inTangents,J),mH(this.settings.outTangents,J)}return this}trim(J,$){let Q=this.times,Z=Q.length,K=0,W=Z-1;while(K!==Z&&Q[K]<J)++K;while(W!==-1&&Q[W]>$)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=Q.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,$=this.getValueSize();if($-Math.floor($)!==0)Z9("KeyframeTrack: Invalid value size in track.",this),J=!1;let Q=this.times,Z=this.values,K=Q.length;if(K===0)Z9("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=Q[X];if(typeof Y==="number"&&isNaN(Y)){Z9("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){Z9("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(LG(Z))for(let X=0,Y=Z.length;X!==Y;++X){let H=Z[X];if(isNaN(H)){Z9("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),$=this.values.slice(),Q=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!Z){let G=X*Q,F=G-Q,N=G+Q;for(let q=0;q!==Q;++q){let O=$[G+q];if(O!==$[F+q]||O!==$[N+q]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let G=X*Q,F=W*Q;for(let N=0;N!==Q;++N)$[F+N]=$[G+N]}++W}}if(K>0){J[W]=J[K];for(let X=K*Q,Y=W*Q,H=0;H!==Q;++H)$[Y+H]=$[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=$.slice(0,W*Q);else this.times=J,this.values=$;return this}clone(){let J=this.times.slice(),$=this.values.slice(),Z=new this.constructor(this.name,J,$);if(Z.createInterpolant=this.createInterpolant,yZ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function mH(J,$){for(let Q=0,Z=J.length;Q!==Z;Q+=2)J[Q]*=$}a6.prototype.ValueTypeName="";a6.prototype.TimeBufferType=Float32Array;a6.prototype.ValueBufferType=Float32Array;a6.prototype.DefaultInterpolation=2301;class C7 extends a6{constructor(J,$,Q){super(J,$,Q)}}C7.prototype.ValueTypeName="bool";C7.prototype.ValueBufferType=Array;C7.prototype.DefaultInterpolation=2300;C7.prototype.InterpolantFactoryMethodLinear=void 0;C7.prototype.InterpolantFactoryMethodSmooth=void 0;class GK extends a6{constructor(J,$,Q,Z){super(J,$,Q,Z)}}GK.prototype.ValueTypeName="color";class I7 extends a6{constructor(J,$,Q,Z){super(J,$,Q,Z)}}I7.prototype.ValueTypeName="number";class xX extends $7{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=(Q-$)/(Z-$),H=J*X;for(let U=H+X;H!==U;H+=4)K9.slerpFlat(K,0,W,H-X,W,H,Y);return K}}class P7 extends a6{constructor(J,$,Q,Z){super(J,$,Q,Z)}InterpolantFactoryMethodLinear(J){return new xX(this.times,this.values,this.getValueSize(),J)}}P7.prototype.ValueTypeName="quaternion";P7.prototype.InterpolantFactoryMethodSmooth=void 0;class z7 extends a6{constructor(J,$,Q){super(J,$,Q)}}z7.prototype.ValueTypeName="string";z7.prototype.ValueBufferType=Array;z7.prototype.DefaultInterpolation=2300;z7.prototype.InterpolantFactoryMethodLinear=void 0;z7.prototype.InterpolantFactoryMethodSmooth=void 0;class UJ extends a6{constructor(J,$,Q,Z){super(J,$,Q,Z)}}UJ.prototype.ValueTypeName="vector";class eJ{constructor(J="",$=-1,Q=[],Z=2500){if(this.name=J,this.tracks=Q,this.duration=$,this.blendMode=Z,this.uuid=$8(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let $=[],Q=J.tracks,Z=1/(J.fps||1);for(let W=0,X=Q.length;W!==X;++W)$.push(f1(Q[W]).scale(Z));let K=new this(J.name,J.duration,$,J.blendMode);return K.uuid=J.uuid,K.userData=JSON.parse(J.userData||"{}"),K}static toJSON(J){let $=[],Q=J.tracks,Z={name:J.name,duration:J.duration,tracks:$,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let K=0,W=Q.length;K!==W;++K)$.push(a6.toJSON(Q[K]));return Z}static CreateFromMorphTargetSequence(J,$,Q,Z){let K=$.length,W=[];for(let X=0;X<K;X++){let Y=[],H=[];Y.push((X+K-1)%K,X,(X+1)%K),H.push(0,1,0);let U=_1(Y);if(Y=pH(Y,1,U),H=pH(H,1,U),!Z&&Y[0]===0)Y.push(K),H.push(H[0]);W.push(new I7(".morphTargetInfluences["+$[X].name+"]",Y,H).scale(1/Q))}return new this(J,-1,W)}static findByName(J,$){let Q=J;if(!Array.isArray(J)){let Z=J;Q=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<Q.length;Z++)if(Q[Z].name===$)return Q[Z];return null}static CreateClipsFromMorphTargetSequences(J,$,Q){let Z={},K=/^([\w-]*?)([\d]+)$/;for(let X=0,Y=J.length;X<Y;X++){let H=J[X],U=H.name.match(K);if(U&&U.length>1){let G=U[1],F=Z[G];if(!F)Z[G]=F=[];F.push(H)}}let W=[];for(let X in Z)W.push(this.CreateFromMorphTargetSequence(X,Z[X],$,Q));return W}resetDuration(){let J=this.tracks,$=0;for(let Q=0,Z=J.length;Q!==Z;++Q){let K=this.tracks[Q];$=Math.max($,K.times[K.times.length-1])}return this.duration=$,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let $=0;$<this.tracks.length;$++)J=J&&this.tracks[$].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());let $=new this.constructor(this.name,this.duration,J,this.blendMode);return $.userData=JSON.parse(JSON.stringify(this.userData)),$}toJSON(){return this.constructor.toJSON(this)}}function y1(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return I7;case"vector":case"vector2":case"vector3":case"vector4":return UJ;case"color":return GK;case"quaternion":return P7;case"bool":case"boolean":return C7;case"string":return z7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function f1(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let $=y1(J.type);if(J.times===void 0){let Z=[],K=[];S1(J.keys,Z,K,"value"),J.times=Z,J.values=K}let Q;if($.parse!==void 0)Q=$.parse(J);else Q=new $(J.name,J.times,J.values,J.interpolation);if(yZ(J.settings))Q.settings={inTangents:q7(J.settings.inTangents,Float32Array),outTangents:q7(J.settings.outTangents,Float32Array)};return Q}var S8={enabled:!1,files:{},add:function(J,$){if(this.enabled===!1)return;if(lH(J))return;this.files[J]=$},get:function(J){if(this.enabled===!1)return;if(lH(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function lH(J){try{let $=J.slice(J.indexOf(":")+1);return new URL($).protocol==="blob:"}catch($){return!1}}class gX{constructor(J,$,Q){let Z=this,K=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=$,this.onError=Q,this._abortController=null,this.itemStart=function(U){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,X)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return H.push(U,G),this},this.removeHandler=function(U){let G=H.indexOf(U);if(G!==-1)H.splice(G,2);return this},this.getHandler=function(U){for(let G=0,F=H.length;G<F;G+=2){let N=H[G],q=H[G+1];if(N.global)N.lastIndex=0;if(N.test(U))return q}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var e5=new gX;class Q7{constructor(J){if(this.manager=J!==void 0?J:e5,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,$){let Q=this;return new Promise(function(Z,K){Q.load(J,Z,$,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}Q7.DEFAULT_MATERIAL_NAME="__DEFAULT";var o8={};class JU extends Error{constructor(J,$){super(J);this.response=$}}class DQ extends Q7{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,$,Q,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=S8.get(`file:${J}`);if(K!==void 0){this.manager.itemStart(J),setTimeout(()=>{if($)$(K);this.manager.itemEnd(J)},0);return}if(o8[J]!==void 0){o8[J].push({onLoad:$,onProgress:Q,onError:Z});return}o8[J]=[],o8[J].push({onLoad:$,onProgress:Q,onError:Z});let W=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),X=this.mimeType,Y=this.responseType;fetch(W).then((H)=>{if(H.status===200||H.status===0){if(H.status===0)t0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||H.body===void 0||H.body.getReader===void 0)return H;let U=o8[J],G=H.body.getReader(),F=H.headers.get("X-File-Size")||H.headers.get("Content-Length"),N=F?parseInt(F):0,q=N!==0,O=0,B=new ReadableStream({start(R){E();function E(){G.read().then(({done:z,value:M})=>{if(z)R.close();else{O+=M.byteLength;let V=new ProgressEvent("progress",{lengthComputable:q,loaded:O,total:N});for(let T=0,w=U.length;T<w;T++){let D=U[T];if(D.onProgress)D.onProgress(V)}R.enqueue(M),E()}},(z)=>{R.error(z)})}}});return new Response(B)}else throw new JU(`fetch for "${H.url}" responded with ${H.status}: ${H.statusText}`,H)}).then((H)=>{switch(Y){case"arraybuffer":return H.arrayBuffer();case"blob":return H.blob();case"document":return H.text().then((U)=>{return new DOMParser().parseFromString(U,X)});case"json":return H.json();default:if(X==="")return H.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(X),F=G&&G[1]?G[1].toLowerCase():void 0,N=new TextDecoder(F);return H.arrayBuffer().then((q)=>N.decode(q))}}}).then((H)=>{S8.add(`file:${J}`,H);let U=o8[J];delete o8[J];for(let G=0,F=U.length;G<F;G++){let N=U[G];if(N.onLoad)N.onLoad(H)}}).catch((H)=>{let U=o8[J];if(U===void 0)throw this.manager.itemError(J),H;delete o8[J];for(let G=0,F=U.length;G<F;G++){let N=U[G];if(N.onError)N.onError(H)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var cJ=new WeakMap;class pX extends Q7{constructor(J){super(J)}load(J,$,Q,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=S8.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if($)$(W);K.manager.itemEnd(J)},0);else{let G=cJ.get(W);if(G===void 0)G=[],cJ.set(W,G);G.push({onLoad:$,onError:Z})}return W}let X=aJ("img");function Y(){if(U(),$)$(this);let G=cJ.get(this)||[];for(let F=0;F<G.length;F++){let N=G[F];if(N.onLoad)N.onLoad(this)}cJ.delete(this),K.manager.itemEnd(J)}function H(G){if(U(),Z)Z(G);S8.remove(`image:${J}`);let F=cJ.get(this)||[];for(let N=0;N<F.length;N++){let q=F[N];if(q.onError)q.onError(G)}cJ.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function U(){X.removeEventListener("load",Y,!1),X.removeEventListener("error",H,!1)}if(X.addEventListener("load",Y,!1),X.addEventListener("error",H,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return S8.add(`image:${J}`,X),K.manager.itemStart(J),X.src=J,X}}class FK extends Q7{constructor(J){super(J)}load(J,$,Q,Z){let K=new W6,W=new pX(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(X){if(K.image=X,K.needsUpdate=!0,$!==void 0)$(K)},Q,Z),K}}class F$ extends j9{constructor(J,$=1){super();this.isLight=!0,this.type="Light",this.color=new w0(J),this.intensity=$}copy(J,$){return super.copy(J,$),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let $=super.toJSON(J);return $.object.color=this.color.getHex(),$.object.intensity=this.intensity,$}}class EK extends F${constructor(J,$,Q){super(J,Q);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(j9.DEFAULT_UP),this.updateMatrix(),this.groundColor=new w0($)}copy(J,$){return super.copy(J,$),this.groundColor.copy(J.groundColor),this}toJSON(J){let $=super.toJSON(J);return $.object.groundColor=this.groundColor.getHex(),$}}var CW=new $9,uH=new S,dH=new S;class kQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new O0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new $9,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new KJ,this._frameExtents=new O0(1,1),this._viewportCount=1,this._viewports=[new c9(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let $=this.camera;uH.setFromMatrixPosition(J.matrixWorld),$.position.copy(uH),dH.setFromMatrixPosition(J.target.matrixWorld),$.lookAt(dH),$.updateMatrixWorld(),this._updateMatrix($,this.matrix,this._frustum)}_updateMatrix(J,$,Q,Z){CW.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q.setFromProjectionMatrix(CW,J.coordinateSystem,J.reversedDepth);let K=this._frameExtents,W=Z?Z.z/K.x:1,X=Z?Z.w/K.y:1,Y=Z?Z.x/K.x:0,H=Z?Z.y/K.y:0;if(J.coordinateSystem===2001||J.reversedDepth)$.set(0.5*W,0,0,0.5*W+Y,0,0.5*X,0,0.5*X+H,0,0,1,0,0,0,0,1);else $.set(0.5*W,0,0,0.5*W+Y,0,0.5*X,0,0.5*X+H,0,0,0.5,0.5,0,0,0,1);$.multiply(CW)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var wZ=new S,jZ=new K9,_8=new S;class qK extends j9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $9,this.projectionMatrix=new $9,this.projectionMatrixInverse=new $9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,$){return super.copy(J,$),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(wZ,jZ,_8),_8.x===1&&_8.y===1&&_8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(wZ,jZ,_8.set(1,1,1)).invert()}updateWorldMatrix(J,$,Q=!1){if(super.updateWorldMatrix(J,$,Q),this.matrixWorld.decompose(wZ,jZ,_8),_8.x===1&&_8.y===1&&_8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(wZ,jZ,_8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var E7=new S,cH=new O0,nH=new O0;class G6 extends qK{constructor(J=50,$=1,Q=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Q,this.far=Z,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let $=0.5*this.getFilmHeight()/J;this.fov=n7*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(c$*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return n7*2*Math.atan(Math.tan(c$*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,$,Q){E7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(E7.x,E7.y).multiplyScalar(-J/E7.z),E7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(E7.x,E7.y).multiplyScalar(-J/E7.z)}getViewSize(J,$){return this.getViewBounds(J,cH,nH),$.subVectors(nH,cH)}setViewOffset(J,$,Q,Z,K,W){if(this.aspect=J/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,$=J*Math.tan(c$*0.5*this.fov)/this.zoom,Q=2*$,Z=this.aspect*Q,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;K+=W.offsetX*Z/Y,$-=W.offsetY*Q/H,Z*=W.width/Y,Q*=W.height/H}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,$,$-Q,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}class $U extends kQ{constructor(){super(new G6(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let $=this.camera,Q=n7*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,K=J.distance||$.far;if(Q!==$.fov||Z!==$.aspect||K!==$.far)$.fov=Q,$.aspect=Z,$.far=K,$.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class E$ extends F${constructor(J,$,Q=0,Z=Math.PI/3,K=0,W=2){super(J,$);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(j9.DEFAULT_UP),this.updateMatrix(),this.target=new j9,this.distance=Q,this.angle=Z,this.penumbra=K,this.decay=W,this.map=null,this.shadow=new $U}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let $=super.toJSON(J);if($.object.distance=this.distance,$.object.angle=this.angle,$.object.decay=this.decay,$.object.penumbra=this.penumbra,$.object.target=this.target.uuid,this.map&&this.map.isTexture)$.object.map=this.map.toJSON(J).uuid;return $.object.shadow=this.shadow.toJSON(),$}}class QU extends kQ{constructor(){super(new G6(90,1,0.5,500));this.isPointLightShadow=!0}}class Z7 extends F${constructor(J,$,Q=0,Z=2){super(J,$);this.isPointLight=!0,this.type="PointLight",this.distance=Q,this.decay=Z,this.shadow=new QU}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let $=super.toJSON(J);return $.object.distance=this.distance,$.object.decay=this.decay,$.object.shadow=this.shadow.toJSON(),$}}class K7 extends qK{constructor(J=-1,$=1,Q=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=$,this.top=Q,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,$,Q,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=Q-J,W=Q+J,X=Z+$,Y=Z-$;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=H*this.view.offsetX,W=K+H*this.view.width,X-=U*this.view.offsetY,Y=X-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}class ZU extends kQ{constructor(){super(new K7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class q$ extends F${constructor(J,$){super(J,$);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(j9.DEFAULT_UP),this.updateMatrix(),this.target=new j9,this.shadow=new ZU}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let $=super.toJSON(J);return $.object.shadow=this.shadow.toJSON(),$.object.target=this.target.uuid,$}}class A7{static extractUrlBase(J){let $=J.lastIndexOf("/");if($===-1)return"./";return J.slice(0,$+1)}static resolveURL(J,$){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test($)&&/^\//.test(J))$=$.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return $+J}}var IW=new WeakMap;class OK extends Q7{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")t0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")t0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,$,Q,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=S8.get(`image-bitmap:${J}`);if(W!==void 0){if(K.manager.itemStart(J),W.then){W.then((H)=>{if(IW.has(W)===!0){if(Z)Z(IW.get(W));K.manager.itemError(J),K.manager.itemEnd(J)}else{if($)$(H);K.manager.itemEnd(J)}});return}setTimeout(function(){if($)$(W);K.manager.itemEnd(J)},0);return}let X={};X.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",X.headers=this.requestHeader,X.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,X).then(function(H){return H.blob()}).then(function(H){return createImageBitmap(H,Object.assign({},K.options,{colorSpaceConversion:"none"}))}).then(function(H){if(S8.add(`image-bitmap:${J}`,H),$)$(H);return K.manager.itemEnd(J),H}).catch(function(H){if(Z)Z(H);IW.set(Y,H),S8.remove(`image-bitmap:${J}`),K.manager.itemError(J),K.manager.itemEnd(J)});S8.add(`image-bitmap:${J}`,Y),K.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var nJ=-90,sJ=1;class mX extends j9{constructor(J,$,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new G6(nJ,sJ,J,$);Z.layers=this.layers,this.add(Z);let K=new G6(nJ,sJ,J,$);K.layers=this.layers,this.add(K);let W=new G6(nJ,sJ,J,$);W.layers=this.layers,this.add(W);let X=new G6(nJ,sJ,J,$);X.layers=this.layers,this.add(X);let Y=new G6(nJ,sJ,J,$);Y.layers=this.layers,this.add(Y);let H=new G6(nJ,sJ,J,$);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,$=this.children.concat(),[Q,Z,K,W,X,Y]=$;for(let H of $)this.remove(H);if(J===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of $)this.add(H),H.updateMatrixWorld()}update(J,$){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,H,U]=this.children,G=J.getRenderTarget(),F=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let O=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget(Q,0,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,K),J.setRenderTarget(Q,1,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,W),J.setRenderTarget(Q,2,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,X),J.setRenderTarget(Q,3,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,Y),J.setRenderTarget(Q,4,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,H),Q.texture.generateMipmaps=O,J.setRenderTarget(Q,5,Z),B&&J.autoClear===!1)J.clearDepth();J.render($,U),J.setRenderTarget(G,F,N),J.xr.enabled=q,Q.texture.needsPMREMUpdate=!0}}class lX extends G6{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class RK{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=v1.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function v1(){if(this._document.hidden===!1)this.reset()}class uX{constructor(J,$,Q){this.binding=J,this.valueSize=Q;let Z,K,W;switch($){case"quaternion":Z=this._slerp,K=this._slerpAdditive,W=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(Q*6),this._workIndex=5;break;case"string":case"bool":Z=this._select,K=this._select,W=this._setAdditiveIdentityOther,this.buffer=Array(Q*5);break;default:Z=this._lerp,K=this._lerpAdditive,W=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(Q*5)}this._mixBufferRegion=Z,this._mixBufferRegionAdditive=K,this._setIdentity=W,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,$){let Q=this.buffer,Z=this.valueSize,K=J*Z+Z,W=this.cumulativeWeight;if(W===0){for(let X=0;X!==Z;++X)Q[K+X]=Q[X];W=$}else{W+=$;let X=$/W;this._mixBufferRegion(Q,K,0,X,Z)}this.cumulativeWeight=W}accumulateAdditive(J){let $=this.buffer,Q=this.valueSize,Z=Q*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive($,Z,0,J,Q),this.cumulativeWeightAdditive+=J}apply(J){let $=this.valueSize,Q=this.buffer,Z=J*$+$,K=this.cumulativeWeight,W=this.cumulativeWeightAdditive,X=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,K<1){let Y=$*this._origIndex;this._mixBufferRegion(Q,Z,Y,1-K,$)}if(W>0)this._mixBufferRegionAdditive(Q,Z,this._addIndex*$,1,$);for(let Y=$,H=$+$;Y!==H;++Y)if(Q[Y]!==Q[Y+$]){X.setValue(Q,Z);break}}saveOriginalState(){let J=this.binding,$=this.buffer,Q=this.valueSize,Z=Q*this._origIndex;J.getValue($,Z);for(let K=Q,W=Z;K!==W;++K)$[K]=$[Z+K%Q];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,$=J+this.valueSize;for(let Q=J;Q<$;Q++)this.buffer[Q]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,$=this._addIndex*this.valueSize;for(let Q=0;Q<this.valueSize;Q++)this.buffer[$+Q]=this.buffer[J+Q]}_select(J,$,Q,Z,K){if(Z>=0.5)for(let W=0;W!==K;++W)J[$+W]=J[Q+W]}_slerp(J,$,Q,Z){K9.slerpFlat(J,$,J,$,J,Q,Z)}_slerpAdditive(J,$,Q,Z,K){let W=this._workIndex*K;K9.multiplyQuaternionsFlat(J,W,J,$,J,Q),K9.slerpFlat(J,$,J,$,J,W,Z)}_lerp(J,$,Q,Z,K){let W=1-Z;for(let X=0;X!==K;++X){let Y=$+X;J[Y]=J[Y]*W+J[Q+X]*Z}}_lerpAdditive(J,$,Q,Z,K){for(let W=0;W!==K;++W){let X=$+W;J[X]=J[X]+J[Q+W]*Z}}}var dX="\\[\\]\\.:\\/",b1=new RegExp("["+dX+"]","g"),cX="[^"+dX+"]",h1="[^"+dX.replace("\\.","")+"]",x1=/((?:WC+[\/:])*)/.source.replace("WC",cX),g1=/(WCOD+)?/.source.replace("WCOD",h1),p1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cX),m1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cX),l1=new RegExp("^"+x1+g1+p1+m1+"$"),u1=["material","materials","bones","map"];class KU{constructor(J,$,Q){let Z=Q||v9.parseTrackName($);this._targetGroup=J,this._bindings=J.subscribe_($,Z)}getValue(J,$){this.bind();let Q=this._targetGroup.nCachedObjects_,Z=this._bindings[Q];if(Z!==void 0)Z.getValue(J,$)}setValue(J,$){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=Q.length;Z!==K;++Z)Q[Z].setValue(J,$)}bind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].bind()}unbind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].unbind()}}class v9{constructor(J,$,Q){this.path=$,this.parsedPath=Q||v9.parseTrackName($),this.node=v9.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,$,Q){if(!(J&&J.isAnimationObjectGroup))return new v9(J,$,Q);else return new v9.Composite(J,$,Q)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(b1,"")}static parseTrackName(J){let $=l1.exec(J);if($===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Q={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},Z=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=Q.nodeName.substring(Z+1);if(u1.indexOf(K)!==-1)Q.nodeName=Q.nodeName.substring(0,Z),Q.objectName=K}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Q}static findNode(J,$){if($===void 0||$===""||$==="."||$===-1||$===J.name||$===J.uuid)return J;if(J.skeleton){let Q=J.skeleton.getBoneByName($);if(Q!==void 0)return Q}if(J.children){let Q=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===$||X.uuid===$)return X;let Y=Q(X.children);if(Y)return Y}return null},Z=Q(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,$){J[$]=this.targetObject[this.propertyName]}_getValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)J[$++]=Q[Z]}_getValue_arrayElement(J,$){J[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,$){this.resolvedProperty.toArray(J,$)}_setValue_direct(J,$){this.targetObject[this.propertyName]=J[$]}_setValue_direct_setNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++]}_setValue_array_setNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,$){this.resolvedProperty[this.propertyIndex]=J[$]}_setValue_arrayElement_setNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,$){this.resolvedProperty.fromArray(J,$)}_setValue_fromArray_setNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,$){this.bind(),this.getValue(J,$)}_setValue_unbound(J,$){this.bind(),this.setValue(J,$)}bind(){let J=this.node,$=this.parsedPath,Q=$.objectName,Z=$.propertyName,K=$.propertyIndex;if(!J)J=v9.findNode(this.rootNode,$.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){t0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let H=$.objectIndex;switch(Q){case"materials":if(!J.material){Z9("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){Z9("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){Z9("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){Z9("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){Z9("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Q]===void 0){Z9("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Q]}if(H!==void 0){if(J[H]===void 0){Z9("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[Z];if(W===void 0){let H=$.nodeName;Z9("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){Z9("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){Z9("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}v9.Composite=KU;v9.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};v9.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};v9.prototype.GetterByBindingType=[v9.prototype._getValue_direct,v9.prototype._getValue_array,v9.prototype._getValue_arrayElement,v9.prototype._getValue_toArray];v9.prototype.SetterByBindingTypeAndVersioning=[[v9.prototype._setValue_direct,v9.prototype._setValue_direct_setNeedsUpdate,v9.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[v9.prototype._setValue_array,v9.prototype._setValue_array_setNeedsUpdate,v9.prototype._setValue_array_setMatrixWorldNeedsUpdate],[v9.prototype._setValue_arrayElement,v9.prototype._setValue_arrayElement_setNeedsUpdate,v9.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[v9.prototype._setValue_fromArray,v9.prototype._setValue_fromArray_setNeedsUpdate,v9.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class nX{constructor(J,$,Q=null,Z=$.blendMode){this._mixer=J,this._clip=$,this._localRoot=Q,this.blendMode=Z;let K=$.tracks,W=K.length,X=Array(W),Y={endingStart:2400,endingEnd:2400};for(let H=0;H!==W;++H){let U=K[H].createInterpolant(null);X[H]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=X,this._propertyBindings=Array(W),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,$){return this.loop=J,this.repetitions=$,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,$,Q=!1){if(J.fadeOut($),this.fadeIn($),Q===!0){let Z=this._clip.duration,K=J._clip.duration,W=K/Z,X=Z/K;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,W,$),this.warp(X,1,$)}return this}crossFadeTo(J,$,Q=!1){return J.crossFadeFrom(this,$,Q)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,$,Q){let Z=this._mixer,K=Z.time,W=this.timeScale,X=this._timeScaleInterpolant;if(X===null)X=Z._lendControlInterpolant(),this._timeScaleInterpolant=X;let{parameterPositions:Y,sampleValues:H}=X;return Y[0]=K,Y[1]=K+Q,H[0]=J/W,H[1]=$/W,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,$,Q,Z){if(!this.enabled){this._updateWeight(J);return}let K=this._startTime;if(K!==null){let Y=(J-K)*Q;if(Y<0||Q===0)$=0;else this._startTime=null,$=Q*Y}$*=this._updateTimeScale(J);let W=this._updateTime($),X=this._updateWeight(J);if(X>0){let Y=this._interpolants,H=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,G=Y.length;U!==G;++U)Y[U].evaluate(W),H[U].accumulateAdditive(X);break;case 2500:default:for(let U=0,G=Y.length;U!==G;++U)Y[U].evaluate(W),H[U].accumulate(Z,X)}}}_updateWeight(J){let $=0;if(this.enabled){$=this.weight;let Q=this._weightInterpolant;if(Q!==null){let Z=Q.evaluate(J)[0];if($*=Z,J>Q.parameterPositions[1]){if(this.stopFading(),Z===0)this.enabled=!1}}}return this._effectiveWeight=$,$}_updateTimeScale(J){let $=0;if(!this.paused){$=this.timeScale;let Q=this._timeScaleInterpolant;if(Q!==null){let Z=Q.evaluate(J)[0];if($*=Z,J>Q.parameterPositions[1]){if($===0)this.paused=!0;else{if(this._restoreTimeScale!==null)$=this._restoreTimeScale;this.timeScale=$}this.stopWarping()}}}return this._effectiveTimeScale=$,$}_updateTime(J){let $=this._clip.duration,Q=this.loop,Z=this.time+J,K=this._loopCount,W=Q===2202;if(J===0){if(K===-1)return Z;return W&&(K&1)===1?$-Z:Z}if(Q===2200){if(K===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(Z>=$)Z=$;else if(Z<0)Z=0;else{this.time=Z;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(K===-1)if(J>=0)K=0,this._setEndings(!0,this.repetitions===0,W);else this._setEndings(this.repetitions===0,!0,W);if(Z>=$||Z<0){let X=Math.floor(Z/$);Z-=$*X,K+=Math.abs(X);let Y=this.repetitions-K;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;Z=J>0?$:0,this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let H=J<0;this._setEndings(H,!H,W)}else this._setEndings(!1,!1,W);this._loopCount=K,this.time=Z,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:X})}}else this._loopCount=K,this.time=Z;if(W&&(K&1)===1)return $-Z}return Z}_setEndings(J,$,Q){let Z=this._interpolantSettings;if(Q)Z.endingStart=2401,Z.endingEnd=2401;else{if(J)Z.endingStart=this.zeroSlopeAtStart?2401:2400;else Z.endingStart=2402;if($)Z.endingEnd=this.zeroSlopeAtEnd?2401:2400;else Z.endingEnd=2402}}_scheduleFading(J,$,Q){let Z=this._mixer,K=Z.time,W=this._weightInterpolant;if(W===null)W=Z._lendControlInterpolant(),this._weightInterpolant=W;let{parameterPositions:X,sampleValues:Y}=W;return X[0]=K,Y[0]=$,X[1]=K+J,Y[1]=Q,this}}var d1=new Float32Array(1);class NJ extends B8{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,$){let Q=J._localRoot||this._root,Z=J._clip.tracks,K=Z.length,W=J._propertyBindings,X=J._interpolants,Y=Q.uuid,H=this._bindingsByRootAndName,U=H[Y];if(U===void 0)U={},H[Y]=U;for(let G=0;G!==K;++G){let F=Z[G],N=F.name,q=U[N];if(q!==void 0)++q.referenceCount,W[G]=q;else{if(q=W[G],q!==void 0){if(q._cacheIndex===null)++q.referenceCount,this._addInactiveBinding(q,Y,N);continue}let O=$&&$._propertyBindings[G].binding.parsedPath;q=new uX(v9.create(Q,N,O),F.ValueTypeName,F.getValueSize()),++q.referenceCount,this._addInactiveBinding(q,Y,N),W[G]=q}X[G].resultBuffer=q.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let Q=(J._localRoot||this._root).uuid,Z=J._clip.uuid,K=this._actionsByClip[Z];this._bindAction(J,K&&K.knownActions[0]),this._addInactiveAction(J,Z,Q)}let $=J._propertyBindings;for(let Q=0,Z=$.length;Q!==Z;++Q){let K=$[Q];if(K.useCount++===0)this._lendBinding(K),K.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let $=J._propertyBindings;for(let Q=0,Z=$.length;Q!==Z;++Q){let K=$[Q];if(--K.useCount===0)K.restoreOriginalState(),this._takeBackBinding(K)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let $=J._cacheIndex;return $!==null&&$<this._nActiveActions}_addInactiveAction(J,$,Q){let Z=this._actions,K=this._actionsByClip,W=K[$];if(W===void 0)W={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,K[$]=W;else{let X=W.knownActions;J._byClipCacheIndex=X.length,X.push(J)}J._cacheIndex=Z.length,Z.push(J),W.actionByRoot[Q]=J}_removeInactiveAction(J){let $=this._actions,Q=$[$.length-1],Z=J._cacheIndex;Q._cacheIndex=Z,$[Z]=Q,$.pop(),J._cacheIndex=null;let K=J._clip.uuid,W=this._actionsByClip,X=W[K],Y=X.knownActions,H=Y[Y.length-1],U=J._byClipCacheIndex;H._byClipCacheIndex=U,Y[U]=H,Y.pop(),J._byClipCacheIndex=null;let G=X.actionByRoot,F=(J._localRoot||this._root).uuid;if(delete G[F],Y.length===0)delete W[K];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let $=J._propertyBindings;for(let Q=0,Z=$.length;Q!==Z;++Q){let K=$[Q];if(--K.referenceCount===0)this._removeInactiveBinding(K)}}_lendAction(J){let $=this._actions,Q=J._cacheIndex,Z=this._nActiveActions++,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_takeBackAction(J){let $=this._actions,Q=J._cacheIndex,Z=--this._nActiveActions,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_addInactiveBinding(J,$,Q){let Z=this._bindingsByRootAndName,K=this._bindings,W=Z[$];if(W===void 0)W={},Z[$]=W;W[Q]=J,J._cacheIndex=K.length,K.push(J)}_removeInactiveBinding(J){let $=this._bindings,Q=J.binding,Z=Q.rootNode.uuid,K=Q.path,W=this._bindingsByRootAndName,X=W[Z],Y=$[$.length-1],H=J._cacheIndex;if(Y._cacheIndex=H,$[H]=Y,$.pop(),delete X[K],Object.keys(X).length===0)delete W[Z]}_lendBinding(J){let $=this._bindings,Q=J._cacheIndex,Z=this._nActiveBindings++,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_takeBackBinding(J){let $=this._bindings,Q=J._cacheIndex,Z=--this._nActiveBindings,K=$[Z];J._cacheIndex=Z,$[Z]=J,K._cacheIndex=Q,$[Q]=K}_lendControlInterpolant(){let J=this._controlInterpolants,$=this._nActiveControlInterpolants++,Q=J[$];if(Q===void 0)Q=new NK(new Float32Array(2),new Float32Array(2),1,d1),Q.__cacheIndex=$,J[$]=Q;return Q}_takeBackControlInterpolant(J){let $=this._controlInterpolants,Q=J.__cacheIndex,Z=--this._nActiveControlInterpolants,K=$[Z];J.__cacheIndex=Z,$[Z]=J,K.__cacheIndex=Q,$[Q]=K}clipAction(J,$,Q){let Z=$||this._root,K=Z.uuid,W=typeof J==="string"?eJ.findByName(Z,J):J,X=W!==null?W.uuid:J,Y=this._actionsByClip[X],H=null;if(Q===void 0)if(W!==null)Q=W.blendMode;else Q=2500;if(Y!==void 0){let G=Y.actionByRoot[K];if(G!==void 0&&G.blendMode===Q)return G;if(H=Y.knownActions[0],W===null)W=H._clip}if(W===null)return null;let U=new nX(this,W,$,Q);return this._bindAction(U,H),this._addInactiveAction(U,X,K),U}existingAction(J,$){let Q=$||this._root,Z=Q.uuid,K=typeof J==="string"?eJ.findByName(Q,J):J,W=K?K.uuid:J,X=this._actionsByClip[W];if(X!==void 0)return X.actionByRoot[Z]||null;return null}stopAllAction(){let J=this._actions,$=this._nActiveActions;for(let Q=$-1;Q>=0;--Q)J[Q].stop();return this}update(J){J*=this.timeScale;let $=this._actions,Q=this._nActiveActions,Z=this.time+=J,K=Math.sign(J),W=this._accuIndex^=1;for(let H=0;H!==Q;++H)$[H]._update(Z,J,K,W);let X=this._bindings,Y=this._nActiveBindings;for(let H=0;H!==Y;++H)X[H].apply(W);return this}setTime(J){this.time=0;for(let $=0;$<this._actions.length;$++)this._actions[$].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let $=this._actions,Q=J.uuid,Z=this._actionsByClip,K=Z[Q];if(K!==void 0){let W=K.knownActions;for(let X=0,Y=W.length;X!==Y;++X){let H=W[X];this._deactivateAction(H);let U=H._cacheIndex,G=$[$.length-1];H._cacheIndex=null,H._byClipCacheIndex=null,G._cacheIndex=U,$[U]=G,$.pop(),this._removeInactiveBindingsForAction(H)}delete Z[Q]}}uncacheRoot(J){let $=J.uuid,Q=this._actionsByClip;for(let W in Q){let X=Q[W].actionByRoot,Y=X[$];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let Z=this._bindingsByRootAndName,K=Z[$];if(K!==void 0)for(let W in K){let X=K[W];X.restoreOriginalState(),this._removeInactiveBinding(X)}}uncacheAction(J,$){let Q=this.existingAction(J,$);if(Q!==null)this._deactivateAction(Q),this._removeInactiveAction(Q)}}class LK{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,t0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let $=performance.now();J=($-this.oldTime)/1000,this.oldTime=$,this.elapsedTime+=J}return J}}class MQ{constructor(J=1,$=0,Q=0){this.radius=J,this.phi=$,this.theta=Q}set(J,$,Q){return this.radius=J,this.phi=$,this.theta=Q,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=R9(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,$,Q){if(this.radius=Math.sqrt(J*J+$*$+Q*Q),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Q),this.phi=Math.acos(R9($/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class sX{static{sX.prototype.isMatrix2=!0}constructor(J,$,Q,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,$,Q,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,$=0){for(let Q=0;Q<4;Q++)this.elements[Q]=J[Q+$];return this}set(J,$,Q,Z){let K=this.elements;return K[0]=J,K[2]=$,K[1]=Q,K[3]=Z,this}}class VK extends B8{constructor(J,$=null){super();this.object=J,this.domElement=$,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function iX(J,$,Q,Z){let K=c1(Z);switch(Q){case 1021:return J*$;case 1028:return J*$/K.components*K.byteLength;case 1029:return J*$/K.components*K.byteLength;case 1030:return J*$*2/K.components*K.byteLength;case 1031:return J*$*2/K.components*K.byteLength;case 1022:return J*$*3/K.components*K.byteLength;case 1023:return J*$*4/K.components*K.byteLength;case 1033:return J*$*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max($,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max($,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor(($+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor(($+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor(($+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor(($+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor(($+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor(($+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor(($+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor(($+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor(($+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor(($+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor(($+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor(($+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor(($+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil($/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil($/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil($/4)*16}throw Error(`Unable to determine texture byte length for ${Q} format.`)}function c1(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)t0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function zU(){let J=null,$=!1,Q=null,Z=null;function K(W,X){Z=J.requestAnimationFrame(K),Q(W,X)}return{start:function(){if($===!0)return;if(Q===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),$=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);$=!1},setAnimationLoop:function(W){Q=W},setContext:function(W){J=W}}}function n1(J){let $=new WeakMap;function Q(Y,H){let{array:U,usage:G}=Y,F=U.byteLength,N=J.createBuffer();J.bindBuffer(H,N),J.bufferData(H,U,G),Y.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)q=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:F}}function Z(Y,H,U){let{array:G,updateRanges:F}=H;if(J.bindBuffer(U,Y),F.length===0)J.bufferSubData(U,0,G);else{F.sort((q,O)=>q.start-O.start);let N=0;for(let q=1;q<F.length;q++){let O=F[N],B=F[q];if(B.start<=O.start+O.count+1)O.count=Math.max(O.count,B.start+B.count-O.start);else++N,F[N]=B}F.length=N+1;for(let q=0,O=F.length;q<O;q++){let B=F[q];J.bufferSubData(U,B.start*G.BYTES_PER_ELEMENT,G,B.start,B.count)}H.clearUpdateRanges()}H.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return $.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=$.get(Y);if(H)J.deleteBuffer(H.buffer),$.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=$.get(Y);if(!G||G.version<Y.version)$.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=$.get(Y);if(U===void 0)$.set(Y,Q(Y,H));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,H),U.version=Y.version}}return{get:K,remove:W,update:X}}var s1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i1=`#ifdef USE_ALPHAHASH
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
#endif`,o1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e1=`#ifdef USE_AOMAP
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
#endif`,JF=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$F=`#ifdef USE_BATCHING
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
#endif`,QF=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZF=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KF=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WF=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XF=`#ifdef USE_IRIDESCENCE
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
#endif`,YF=`#ifdef USE_BUMPMAP
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
#endif`,HF=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,EF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,RF=`#define PI 3.141592653589793
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
} // validated`,LF=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VF=`vec3 transformedNormal = objectNormal;
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
#endif`,BF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CF="gl_FragColor = linearToOutputTexel( gl_FragColor );",IF=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PF=`#ifdef USE_ENVMAP
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
#endif`,zF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AF=`#ifdef USE_ENVMAP
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
#endif`,TF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_F=`#ifdef USE_ENVMAP
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
#endif`,SF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fF=`#ifdef USE_GRADIENTMAP
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
}`,vF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xF=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gF=`#ifdef USE_ENVMAP
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
#endif`,pF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dF=`PhysicalMaterial material;
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
#endif`,cF=`uniform sampler2D dfgLUT;
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
}`,nF=`
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
#endif`,sF=`#if defined( RE_IndirectDiffuse )
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
#endif`,iF=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oF=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,aF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZE=`#if defined( USE_POINTS_UV )
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
#endif`,KE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
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
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,RE=`#ifdef USE_NORMALMAP
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
#endif`,LE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ME=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jE=`float getShadowMask() {
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
}`,yE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fE=`#ifdef USE_SKINNING
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
#endif`,vE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#ifdef USE_TRANSMISSION
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iE=`uniform sampler2D t2D;
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
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`#include <common>
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
}`,Jq=`#if DEPTH_PACKING == 3200
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
}`,$q=`#define DISTANCE
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
}`,Qq=`#define DISTANCE
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
}`,Zq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kq=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wq=`uniform float scale;
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
}`,Xq=`uniform vec3 diffuse;
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
}`,Yq=`#include <common>
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
}`,Hq=`uniform vec3 diffuse;
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
}`,Uq=`#define LAMBERT
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
}`,Nq=`#define LAMBERT
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
}`,Gq=`#define MATCAP
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
}`,Fq=`#define MATCAP
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
}`,Eq=`#define NORMAL
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
}`,qq=`#define NORMAL
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
}`,Oq=`#define PHONG
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
}`,Rq=`#define PHONG
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
}`,Lq=`#define STANDARD
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
}`,Vq=`#define STANDARD
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
}`,Bq=`#define TOON
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
}`,Dq=`#define TOON
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
}`,kq=`uniform float size;
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
}`,Mq=`uniform vec3 diffuse;
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
}`,Cq=`#include <common>
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
}`,Iq=`uniform vec3 color;
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
}`,Pq=`uniform float rotation;
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
}`,zq=`uniform vec3 diffuse;
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
}`,D9={alphahash_fragment:s1,alphahash_pars_fragment:i1,alphamap_fragment:o1,alphamap_pars_fragment:a1,alphatest_fragment:r1,alphatest_pars_fragment:t1,aomap_fragment:e1,aomap_pars_fragment:JF,batching_pars_vertex:$F,batching_vertex:QF,begin_vertex:ZF,beginnormal_vertex:KF,bsdfs:WF,iridescence_fragment:XF,bumpmap_pars_fragment:YF,clipping_planes_fragment:HF,clipping_planes_pars_fragment:UF,clipping_planes_pars_vertex:NF,clipping_planes_vertex:GF,color_fragment:FF,color_pars_fragment:EF,color_pars_vertex:qF,color_vertex:OF,common:RF,cube_uv_reflection_fragment:LF,defaultnormal_vertex:VF,displacementmap_pars_vertex:BF,displacementmap_vertex:DF,emissivemap_fragment:kF,emissivemap_pars_fragment:MF,colorspace_fragment:CF,colorspace_pars_fragment:IF,envmap_fragment:PF,envmap_common_pars_fragment:zF,envmap_pars_fragment:AF,envmap_pars_vertex:TF,envmap_physical_pars_fragment:gF,envmap_vertex:_F,fog_vertex:SF,fog_pars_vertex:wF,fog_fragment:jF,fog_pars_fragment:yF,gradientmap_pars_fragment:fF,lightmap_pars_fragment:vF,lights_lambert_fragment:bF,lights_lambert_pars_fragment:hF,lights_pars_begin:xF,lights_toon_fragment:pF,lights_toon_pars_fragment:mF,lights_phong_fragment:lF,lights_phong_pars_fragment:uF,lights_physical_fragment:dF,lights_physical_pars_fragment:cF,lights_fragment_begin:nF,lights_fragment_maps:sF,lights_fragment_end:iF,lightprobes_pars_fragment:oF,logdepthbuf_fragment:aF,logdepthbuf_pars_fragment:rF,logdepthbuf_pars_vertex:tF,logdepthbuf_vertex:eF,map_fragment:JE,map_pars_fragment:$E,map_particle_fragment:QE,map_particle_pars_fragment:ZE,metalnessmap_fragment:KE,metalnessmap_pars_fragment:WE,morphinstance_vertex:XE,morphcolor_vertex:YE,morphnormal_vertex:HE,morphtarget_pars_vertex:UE,morphtarget_vertex:NE,normal_fragment_begin:GE,normal_fragment_maps:FE,normal_pars_fragment:EE,normal_pars_vertex:qE,normal_vertex:OE,normalmap_pars_fragment:RE,clearcoat_normal_fragment_begin:LE,clearcoat_normal_fragment_maps:VE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:DE,opaque_fragment:kE,packing:ME,premultiplied_alpha_fragment:CE,project_vertex:IE,dithering_fragment:PE,dithering_pars_fragment:zE,roughnessmap_fragment:AE,roughnessmap_pars_fragment:TE,shadowmap_pars_fragment:_E,shadowmap_pars_vertex:SE,shadowmap_vertex:wE,shadowmask_pars_fragment:jE,skinbase_vertex:yE,skinning_pars_vertex:fE,skinning_vertex:vE,skinnormal_vertex:bE,specularmap_fragment:hE,specularmap_pars_fragment:xE,tonemapping_fragment:gE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:lE,uv_pars_fragment:uE,uv_pars_vertex:dE,uv_vertex:cE,worldpos_vertex:nE,background_vert:sE,background_frag:iE,backgroundCube_vert:oE,backgroundCube_frag:aE,cube_vert:rE,cube_frag:tE,depth_vert:eE,depth_frag:Jq,distance_vert:$q,distance_frag:Qq,equirect_vert:Zq,equirect_frag:Kq,linedashed_vert:Wq,linedashed_frag:Xq,meshbasic_vert:Yq,meshbasic_frag:Hq,meshlambert_vert:Uq,meshlambert_frag:Nq,meshmatcap_vert:Gq,meshmatcap_frag:Fq,meshnormal_vert:Eq,meshnormal_frag:qq,meshphong_vert:Oq,meshphong_frag:Rq,meshphysical_vert:Lq,meshphysical_frag:Vq,meshtoon_vert:Bq,meshtoon_frag:Dq,points_vert:kq,points_frag:Mq,shadow_vert:Cq,shadow_frag:Iq,sprite_vert:Pq,sprite_frag:zq},g0={common:{diffuse:{value:new w0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U9},alphaMap:{value:null},alphaMapTransform:{value:new U9},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U9}},envmap:{envMap:{value:null},envMapRotation:{value:new U9},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U9}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U9}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U9},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U9},normalScale:{value:new O0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U9},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U9}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U9}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U9}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new w0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new S},probesMax:{value:new S},probesResolution:{value:new S}},points:{diffuse:{value:new w0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U9},alphaTest:{value:0},uvTransform:{value:new U9}},sprite:{diffuse:{value:new w0(16777215)},opacity:{value:1},center:{value:new O0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U9},alphaMap:{value:null},alphaMapTransform:{value:new U9},alphaTest:{value:0}}},x8={basic:{uniforms:w6([g0.common,g0.specularmap,g0.envmap,g0.aomap,g0.lightmap,g0.fog]),vertexShader:D9.meshbasic_vert,fragmentShader:D9.meshbasic_frag},lambert:{uniforms:w6([g0.common,g0.specularmap,g0.envmap,g0.aomap,g0.lightmap,g0.emissivemap,g0.bumpmap,g0.normalmap,g0.displacementmap,g0.fog,g0.lights,{emissive:{value:new w0(0)},envMapIntensity:{value:1}}]),vertexShader:D9.meshlambert_vert,fragmentShader:D9.meshlambert_frag},phong:{uniforms:w6([g0.common,g0.specularmap,g0.envmap,g0.aomap,g0.lightmap,g0.emissivemap,g0.bumpmap,g0.normalmap,g0.displacementmap,g0.fog,g0.lights,{emissive:{value:new w0(0)},specular:{value:new w0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:D9.meshphong_vert,fragmentShader:D9.meshphong_frag},standard:{uniforms:w6([g0.common,g0.envmap,g0.aomap,g0.lightmap,g0.emissivemap,g0.bumpmap,g0.normalmap,g0.displacementmap,g0.roughnessmap,g0.metalnessmap,g0.fog,g0.lights,{emissive:{value:new w0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:D9.meshphysical_vert,fragmentShader:D9.meshphysical_frag},toon:{uniforms:w6([g0.common,g0.aomap,g0.lightmap,g0.emissivemap,g0.bumpmap,g0.normalmap,g0.displacementmap,g0.gradientmap,g0.fog,g0.lights,{emissive:{value:new w0(0)}}]),vertexShader:D9.meshtoon_vert,fragmentShader:D9.meshtoon_frag},matcap:{uniforms:w6([g0.common,g0.bumpmap,g0.normalmap,g0.displacementmap,g0.fog,{matcap:{value:null}}]),vertexShader:D9.meshmatcap_vert,fragmentShader:D9.meshmatcap_frag},points:{uniforms:w6([g0.points,g0.fog]),vertexShader:D9.points_vert,fragmentShader:D9.points_frag},dashed:{uniforms:w6([g0.common,g0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:D9.linedashed_vert,fragmentShader:D9.linedashed_frag},depth:{uniforms:w6([g0.common,g0.displacementmap]),vertexShader:D9.depth_vert,fragmentShader:D9.depth_frag},normal:{uniforms:w6([g0.common,g0.bumpmap,g0.normalmap,g0.displacementmap,{opacity:{value:1}}]),vertexShader:D9.meshnormal_vert,fragmentShader:D9.meshnormal_frag},sprite:{uniforms:w6([g0.sprite,g0.fog]),vertexShader:D9.sprite_vert,fragmentShader:D9.sprite_frag},background:{uniforms:{uvTransform:{value:new U9},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:D9.background_vert,fragmentShader:D9.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U9}},vertexShader:D9.backgroundCube_vert,fragmentShader:D9.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:D9.cube_vert,fragmentShader:D9.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:D9.equirect_vert,fragmentShader:D9.equirect_frag},distance:{uniforms:w6([g0.common,g0.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:D9.distance_vert,fragmentShader:D9.distance_frag},shadow:{uniforms:w6([g0.lights,g0.fog,{color:{value:new w0(0)},opacity:{value:1}}]),vertexShader:D9.shadow_vert,fragmentShader:D9.shadow_frag}};x8.physical={uniforms:w6([x8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U9},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U9},clearcoatNormalScale:{value:new O0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U9},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U9},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U9},sheen:{value:0},sheenColor:{value:new w0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U9},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U9},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U9},transmissionSamplerSize:{value:new O0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U9},attenuationDistance:{value:0},attenuationColor:{value:new w0(0)},specularColor:{value:new w0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U9},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U9},anisotropyVector:{value:new O0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U9}}]),vertexShader:D9.meshphysical_vert,fragmentShader:D9.meshphysical_frag};var BK={r:0,b:0,g:0},Aq=new $9,AU=new U9;AU.set(-1,0,0,0,1,0,0,0,1);function Tq(J,$,Q,Z,K,W){let X=new w0(0),Y=K===!0?0:1,H,U,G=null,F=0,N=null;function q(z){let M=z.isScene===!0?z.background:null;if(M&&M.isTexture){let V=z.backgroundBlurriness>0;M=$.get(M,V)}return M}function O(z){let M=!1,V=q(z);if(V===null)R(X,Y);else if(V&&V.isColor)R(V,1),M=!0;let T=J.xr.getEnvironmentBlendMode();if(T==="additive")Q.buffers.color.setClear(0,0,0,1,W);else if(T==="alpha-blend")Q.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||M)Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(z,M){let V=q(M);if(V&&(V.isCubeTexture||V.mapping===XQ)){if(U===void 0)U=new T0(new h9(1,1,1),new $6({name:"BackgroundCubeMaterial",uniforms:HJ(x8.backgroundCube.uniforms),vertexShader:x8.backgroundCube.vertexShader,fragmentShader:x8.backgroundCube.fragmentShader,side:I6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(T,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(Aq.makeRotationFromEuler(M.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(AU);if(U.material.toneMapped=V9.getTransfer(V.colorSpace)!==n9,G!==V||F!==V.version||N!==J.toneMapping)U.material.needsUpdate=!0,G=V,F=V.version,N=J.toneMapping;U.layers.enableAll(),z.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new T0(new L9(2,2),new $6({name:"BackgroundMaterial",uniforms:HJ(x8.background.uniforms),vertexShader:x8.background.vertexShader,fragmentShader:x8.background.fragmentShader,side:B7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,H.material.toneMapped=V9.getTransfer(V.colorSpace)!==n9,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),G!==V||F!==V.version||N!==J.toneMapping)H.material.needsUpdate=!0,G=V,F=V.version,N=J.toneMapping;H.layers.enableAll(),z.unshift(H,H.geometry,H.material,0,0,null)}}function R(z,M){z.getRGB(BK,jX(J)),Q.buffers.color.setClear(BK.r,BK.g,BK.b,M,W)}function E(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(z,M=1){X.set(z),Y=M,R(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(z){Y=z,R(X,Y)},render:O,addToRenderList:B,dispose:E}}function _q(J,$){let Q=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=N(null),W=K,X=!1;function Y(h,d,Q0,f,y){let p=!1,v=F(h,f,Q0,d);if(W!==v)W=v,U(W.object);if(p=q(h,f,Q0,y),p)O(h,f,Q0,y);if(y!==null)$.update(y,J.ELEMENT_ARRAY_BUFFER);if(p||X){if(X=!1,V(h,d,Q0,f),y!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,$.get(y).buffer)}}function H(){return J.createVertexArray()}function U(h){return J.bindVertexArray(h)}function G(h){return J.deleteVertexArray(h)}function F(h,d,Q0,f){let y=f.wireframe===!0,p=Z[d.id];if(p===void 0)p={},Z[d.id]=p;let v=h.isInstancedMesh===!0?h.id:0,r=p[v];if(r===void 0)r={},p[v]=r;let l=r[Q0.id];if(l===void 0)l={},r[Q0.id]=l;let J0=l[y];if(J0===void 0)J0=N(H()),l[y]=J0;return J0}function N(h){let d=[],Q0=[],f=[];for(let y=0;y<Q;y++)d[y]=0,Q0[y]=0,f[y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:d,enabledAttributes:Q0,attributeDivisors:f,object:h,attributes:{},index:null}}function q(h,d,Q0,f){let y=W.attributes,p=d.attributes,v=0,r=Q0.getAttributes();for(let l in r)if(r[l].location>=0){let Y0=y[l],I0=p[l];if(I0===void 0){if(l==="instanceMatrix"&&h.instanceMatrix)I0=h.instanceMatrix;if(l==="instanceColor"&&h.instanceColor)I0=h.instanceColor}if(Y0===void 0)return!0;if(Y0.attribute!==I0)return!0;if(I0&&Y0.data!==I0.data)return!0;v++}if(W.attributesNum!==v)return!0;if(W.index!==f)return!0;return!1}function O(h,d,Q0,f){let y={},p=d.attributes,v=0,r=Q0.getAttributes();for(let l in r)if(r[l].location>=0){let Y0=p[l];if(Y0===void 0){if(l==="instanceMatrix"&&h.instanceMatrix)Y0=h.instanceMatrix;if(l==="instanceColor"&&h.instanceColor)Y0=h.instanceColor}let I0={};if(I0.attribute=Y0,Y0&&Y0.data)I0.data=Y0.data;y[l]=I0,v++}W.attributes=y,W.attributesNum=v,W.index=f}function B(){let h=W.newAttributes;for(let d=0,Q0=h.length;d<Q0;d++)h[d]=0}function R(h){E(h,0)}function E(h,d){let{newAttributes:Q0,enabledAttributes:f,attributeDivisors:y}=W;if(Q0[h]=1,f[h]===0)J.enableVertexAttribArray(h),f[h]=1;if(y[h]!==d)J.vertexAttribDivisor(h,d),y[h]=d}function z(){let{newAttributes:h,enabledAttributes:d}=W;for(let Q0=0,f=d.length;Q0<f;Q0++)if(d[Q0]!==h[Q0])J.disableVertexAttribArray(Q0),d[Q0]=0}function M(h,d,Q0,f,y,p,v){if(v===!0)J.vertexAttribIPointer(h,d,Q0,y,p);else J.vertexAttribPointer(h,d,Q0,f,y,p)}function V(h,d,Q0,f){B();let y=f.attributes,p=Q0.getAttributes(),v=d.defaultAttributeValues;for(let r in p){let l=p[r];if(l.location>=0){let J0=y[r];if(J0===void 0){if(r==="instanceMatrix"&&h.instanceMatrix)J0=h.instanceMatrix;if(r==="instanceColor"&&h.instanceColor)J0=h.instanceColor}if(J0!==void 0){let{normalized:Y0,itemSize:I0}=J0,j=$.get(J0);if(j===void 0)continue;let{buffer:a,type:U0,bytesPerElement:b}=j,C=U0===J.INT||U0===J.UNSIGNED_INT||J0.gpuType===yW;if(J0.isInterleavedBufferAttribute){let x=J0.data,n=x.stride,K0=J0.offset;if(x.isInstancedInterleavedBuffer){for(let $0=0;$0<l.locationSize;$0++)E(l.location+$0,x.meshPerAttribute);if(h.isInstancedMesh!==!0&&f._maxInstanceCount===void 0)f._maxInstanceCount=x.meshPerAttribute*x.count}else for(let $0=0;$0<l.locationSize;$0++)R(l.location+$0);J.bindBuffer(J.ARRAY_BUFFER,a);for(let $0=0;$0<l.locationSize;$0++)M(l.location+$0,I0/l.locationSize,U0,Y0,n*b,(K0+I0/l.locationSize*$0)*b,C)}else{if(J0.isInstancedBufferAttribute){for(let x=0;x<l.locationSize;x++)E(l.location+x,J0.meshPerAttribute);if(h.isInstancedMesh!==!0&&f._maxInstanceCount===void 0)f._maxInstanceCount=J0.meshPerAttribute*J0.count}else for(let x=0;x<l.locationSize;x++)R(l.location+x);J.bindBuffer(J.ARRAY_BUFFER,a);for(let x=0;x<l.locationSize;x++)M(l.location+x,I0/l.locationSize,U0,Y0,I0*b,I0/l.locationSize*x*b,C)}}else if(v!==void 0){let Y0=v[r];if(Y0!==void 0)switch(Y0.length){case 2:J.vertexAttrib2fv(l.location,Y0);break;case 3:J.vertexAttrib3fv(l.location,Y0);break;case 4:J.vertexAttrib4fv(l.location,Y0);break;default:J.vertexAttrib1fv(l.location,Y0)}}}}z()}function T(){I();for(let h in Z){let d=Z[h];for(let Q0 in d){let f=d[Q0];for(let y in f){let p=f[y];for(let v in p)G(p[v].object),delete p[v];delete f[y]}}delete Z[h]}}function w(h){if(Z[h.id]===void 0)return;let d=Z[h.id];for(let Q0 in d){let f=d[Q0];for(let y in f){let p=f[y];for(let v in p)G(p[v].object),delete p[v];delete f[y]}}delete Z[h.id]}function D(h){for(let d in Z){let Q0=Z[d];for(let f in Q0){let y=Q0[f];if(y[h.id]===void 0)continue;let p=y[h.id];for(let v in p)G(p[v].object),delete p[v];delete y[h.id]}}}function L(h){for(let d in Z){let Q0=Z[d],f=h.isInstancedMesh===!0?h.id:0,y=Q0[f];if(y===void 0)continue;for(let p in y){let v=y[p];for(let r in v)G(v[r].object),delete v[r];delete y[p]}if(delete Q0[f],Object.keys(Q0).length===0)delete Z[d]}}function I(){if(i(),X=!0,W===K)return;W=K,U(W.object)}function i(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:I,resetDefaultState:i,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:L,releaseStatesOfProgram:D,initAttributes:B,enableAttribute:R,disableUnusedAttributes:z}}function Sq(J,$,Q){let Z;function K(H){Z=H}function W(H,U){J.drawArrays(Z,H,U),Q.update(U,Z,1)}function X(H,U,G){if(G===0)return;J.drawArraysInstanced(Z,H,U,G),Q.update(U,Z,G)}function Y(H,U,G){if(G===0)return;$.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,U,0,G);let N=0;for(let q=0;q<G;q++)N+=U[q];Q.update(N,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function wq(J,$,Q,Z){let K;function W(){if(K!==void 0)return K;if($.has("EXT_texture_filter_anisotropic")===!0){let D=$.get("EXT_texture_filter_anisotropic");K=J.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(D){if(D!==y8&&Z.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(D){let L=D===V6&&($.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float"));if(D!==V8&&D!==r8&&!L&&Z.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(D){if(D==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";D="mediump"}if(D==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Q.precision!==void 0?Q.precision:"highp",G=H(U);if(G!==U)t0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let F=Q.logarithmicDepthBuffer===!0,N=Q.reversedDepthBuffer===!0&&$.has("EXT_clip_control");if(Q.reversedDepthBuffer===!0&&N===!1)t0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),z=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),M=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),T=J.getParameter(J.MAX_SAMPLES),w=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:N,maxTextures:q,maxVertexTextures:O,maxTextureSize:B,maxCubemapSize:R,maxAttributes:E,maxVertexUniforms:z,maxVaryings:M,maxFragmentUniforms:V,maxSamples:T,samples:w}}function jq(J){let $=this,Q=null,Z=0,K=!1,W=!1,X=new J8,Y=new U9,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(F,N){let q=F.length!==0||N||Z!==0||K;return K=N,Z=F.length,q},this.beginShadows=function(){W=!0,G(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,N){Q=G(F,N,0)},this.setState=function(F,N,q){let{clippingPlanes:O,clipIntersection:B,clipShadows:R}=F,E=J.get(F);if(!K||O===null||O.length===0||W&&!R)if(W)G(null);else U();else{let z=W?0:Z,M=z*4,V=E.clippingState||null;H.value=V,V=G(O,N,M,q);for(let T=0;T!==M;++T)V[T]=Q[T];E.clippingState=V,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=z}};function U(){if(H.value!==Q)H.value=Q,H.needsUpdate=Z>0;$.numPlanes=Z,$.numIntersection=0}function G(F,N,q,O){let B=F!==null?F.length:0,R=null;if(B!==0){if(R=H.value,O!==!0||R===null){let E=q+B*4,z=N.matrixWorldInverse;if(Y.getNormalMatrix(z),R===null||R.length<E)R=new Float32Array(E);for(let M=0,V=q;M!==B;++M,V+=4)X.copy(F[M]).applyMatrix4(z,Y),X.normal.toArray(R,V),R[V+3]=X.constant}H.value=R,H.needsUpdate=!0}return $.numPlanes=B,$.numIntersection=0,R}}var R$=4,yq=6,fq=20,vq=256,CQ=new K7,WU=new w0,oX=null,aX=0,rX=0,tX=!1,bq=new S,GJ=new S;class AQ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,$=0,Q=0.1,Z=100,K={}){let{size:W=256,position:X=bq}=K;oX=this._renderer.getRenderTarget(),aX=this._renderer.getActiveCubeFace(),rX=this._renderer.getActiveMipmapLevel(),tX=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,Q,Z,Y,X),$>0)this._blur(Y,0,0,$);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,$=null){return this._fromTexture(J,$)}fromCubemap(J,$=null){return this._fromTexture(J,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=HU(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=YU(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(oX,aX,rX),this._renderer.xr.enabled=tX,J.scissorTest=!1,O$(J,0,0,J.width,J.height)}_fromTexture(J,$){if(J.mapping===Q$||J.mapping===a7)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);oX=this._renderer.getRenderTarget(),aX=this._renderer.getActiveCubeFace(),rX=this._renderer.getActiveMipmapLevel(),tX=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Q=$||this._allocateTargets();return this._textureToCubeUV(J,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),$=4*this._cubeSize,Q={magFilter:L6,minFilter:L6,generateMipmaps:!1,type:V6,format:y8,colorSpace:i6,depthBuffer:!1},Z=XU(J,$,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==$){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=XU(J,$,Q);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hq(K)),this._blurMaterial=gq(K,J,$),this._ggxMaterial=xq(K,J,$)}return Z}_compileMaterial(J){let $=new T0(new b9,J);this._renderer.compile($,CQ)}_sceneToCubeUV(J,$,Q,Z,K){let Y=new G6(90,1,$,Q),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,F=G.autoClear,N=G.toneMapping;if(G.getClearColor(WU),G.toneMapping=R8,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new T0(new h9,new g9({name:"PMREM.Background",side:I6,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,B=O.material,R=!1,E=J.background;if(E){if(E.isColor)B.color.copy(E),J.background=null,R=!0}else B.color.copy(WU),R=!0;for(let z=0;z<6;z++){let M=z%3;if(M===0)Y.up.set(0,H[z],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+U[z],K.y,K.z);else if(M===1)Y.up.set(0,0,H[z]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+U[z],K.z);else Y.up.set(0,H[z],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+U[z]);let V=this._cubeSize;if(O$(Z,M*V,z>2?V:0,V,V),G.setRenderTarget(Z),R)G.render(O,Y);G.render(J,Y)}G.toneMapping=N,G.autoClear=F,J.background=E}_textureToCubeUV(J,$){let Q=this._renderer,Z=J.mapping===Q$||J.mapping===a7;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=HU();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=YU();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;O$($,0,0,3*Y,2*Y),Q.setRenderTarget($),Q.render(W,CQ)}_applyPMREM(J){let $=this._renderer,Q=$.autoClear;$.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);$.autoClear=Q}_applyGGXFilter(J,$,Q){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[Q];X.material=W;let Y=W.uniforms,H=Q/(this._lodMeshes.length-1),U=$/(this._lodMeshes.length-1),G=Math.sqrt(H*H-U*U),F=H*1.25,N=G*F,{_lodMax:q}=this,O=this._sizeLods[Q],B=3*O*(Q>q-R$?Q-q+R$:0),R=4*(this._cubeSize-O);Y.envMap.value=J.texture,Y.roughness.value=N,Y.mipInt.value=q-$,O$(K,B,R,3*O,2*O),Z.setRenderTarget(K),Z.render(X,CQ),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=q-Q,O$(J,B,R,3*O,2*O),Z.setRenderTarget(J),Z.render(X,CQ)}_blur(J,$,Q,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,$,Q,W),this._blurPass(K,J,Q,Q,W)}_blurPass(J,$,Q,Z,K){let W=this._renderer,X=this._blurMaterial,Y=this._lodMeshes[Z];Y.material=X;let H=X.uniforms;H.envMap.value=J.texture,H.sigma.value=K,H.mipInt.value=this._lodMax-Q;let U=this._sizeLods[Z],G=3*U*(Z>this._lodMax-R$?Z-this._lodMax+R$:0),F=4*(this._cubeSize-U);O$($,G,F,3*U,2*U),W.setRenderTarget($),W.render(Y,CQ)}}function hq(J){let $=[],Q=[],Z=J,K=J-R$+1+yq;for(let W=0;W<K;W++){let X=Math.pow(2,Z);$.push(X);let Y=1/(X-2),H=-Y,U=1+Y,G=[H,H,U,H,U,U,H,H,U,U,H,U],F=6,N=6,q=3,O=new Float32Array(q*N*F),B=new Float32Array(q*N*F);for(let E=0;E<F;E++){let z=E%3*2/3-1,M=E>2?0:-1,V=[z,M,0,z+0.6666666666666666,M,0,z+0.6666666666666666,M+1,0,z,M,0,z+0.6666666666666666,M+1,0,z,M+1,0];O.set(V,q*N*E);for(let T=0;T<N;T++){let w=G[T*2]*2-1,D=G[T*2+1]*2-1;if(E===0)GJ.set(1,D,w);else if(E===1)GJ.set(-w,1,-D);else if(E===2)GJ.set(-w,D,1);else if(E===3)GJ.set(-1,D,-w);else if(E===4)GJ.set(-w,-1,D);else GJ.set(w,D,-1);GJ.toArray(B,(E*N+T)*q)}}let R=new b9;if(R.setAttribute("position",new t9(O,q)),R.setAttribute("outputDirection",new t9(B,q)),Q.push(new T0(R,null)),Z>R$)Z--}return{lodMeshes:Q,sizeLods:$}}function XU(J,$,Q){let Z=new X6(J,$,Q);return Z.texture.mapping=XQ,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function O$(J,$,Q,Z,K){J.viewport.set($,Q,Z,K),J.scissor.set($,Q,Z,K)}function xq(J,$,Q){return new $6({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vq,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kK(),fragmentShader:`

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
		`,blending:Q8,depthTest:!1,depthWrite:!1})}function gq(J,$,Q){return new $6({name:"SphericalGaussianBlur",defines:{SAMPLES:fq,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kK(),fragmentShader:`

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
		`,blending:Q8,depthTest:!1,depthWrite:!1})}function YU(){return new $6({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kK(),fragmentShader:`

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
		`,blending:Q8,depthTest:!1,depthWrite:!1})}function HU(){return new $6({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kK(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Q8,depthTest:!1,depthWrite:!1})}function kK(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ZY extends X6{constructor(J=1,$={}){super(J,J,$);this.isWebGLCubeRenderTarget=!0;let Q={width:J,height:J,depth:1},Z=[Q,Q,Q,Q,Q,Q];this.texture=new ZK(Z),this._setTextureOptions($),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new h9(5,5,5),K=new $6({name:"CubemapFromEquirect",uniforms:HJ(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:I6,blending:Q8});K.uniforms.tEquirect.value=$;let W=new T0(Z,K),X=$.minFilter;if($.minFilter===j8)$.minFilter=L6;return new mX(1,10,this).update(J,W),$.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,$=!0,Q=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear($,Q,Z);J.setRenderTarget(K)}}function pq(J){let $=new WeakMap,Q=new WeakMap,Z=null;function K(N,q=!1){if(N===null||N===void 0)return null;if(q)return X(N);return W(N)}function W(N){if(N&&N.isTexture){let q=N.mapping;if(q===hZ||q===xZ)if($.has(N)){let O=$.get(N).texture;return Y(O,N.mapping)}else{let O=N.image;if(O&&O.height>0){let B=new ZY(O.height);return B.fromEquirectangularTexture(J,N),$.set(N,B),N.addEventListener("dispose",U),Y(B.texture,N.mapping)}else return null}}return N}function X(N){if(N&&N.isTexture){let q=N.mapping,O=q===hZ||q===xZ,B=q===Q$||q===a7;if(O||B){let R=Q.get(N),E=R!==void 0?R.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==E){if(Z===null)Z=new AQ(J);return R=O?Z.fromEquirectangular(N,R):Z.fromCubemap(N,R),R.texture.pmremVersion=N.pmremVersion,Q.set(N,R),R.texture}else if(R!==void 0)return R.texture;else{let z=N.image;if(O&&z&&z.height>0||B&&z&&H(z)){if(Z===null)Z=new AQ(J);return R=O?Z.fromEquirectangular(N):Z.fromCubemap(N),R.texture.pmremVersion=N.pmremVersion,Q.set(N,R),N.addEventListener("dispose",G),R.texture}else return null}}}return N}function Y(N,q){if(q===hZ)N.mapping=Q$;else if(q===xZ)N.mapping=a7;return N}function H(N){let q=0,O=6;for(let B=0;B<O;B++)if(N[B]!==void 0)q++;return q===O}function U(N){let q=N.target;q.removeEventListener("dispose",U);let O=$.get(q);if(O!==void 0)$.delete(q),O.dispose()}function G(N){let q=N.target;q.removeEventListener("dispose",G);let O=Q.get(q);if(O!==void 0)Q.delete(q),O.dispose()}function F(){if($=new WeakMap,Q=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function mq(J){let $={};function Q(Z){if($[Z]!==void 0)return $[Z];let K=J.getExtension(Z);return $[Z]=K,K}return{has:function(Z){return Q(Z)!==null},init:function(){Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance"),Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture"),Q("WEBGL_render_shared_exponent")},get:function(Z){let K=Q(Z);if(K===null)c7("WebGLRenderer: "+Z+" extension not supported.");return K}}}function lq(J,$,Q,Z){let K={},W=new WeakMap;function X(F){let N=F.target;if(N.index!==null)$.remove(N.index);for(let O in N.attributes)$.remove(N.attributes[O]);N.removeEventListener("dispose",X),delete K[N.id];let q=W.get(N);if(q)$.remove(q),W.delete(N);if(Z.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;Q.memory.geometries--}function Y(F,N){if(K[N.id]===!0)return N;return N.addEventListener("dispose",X),K[N.id]=!0,Q.memory.geometries++,N}function H(F){let N=F.attributes;for(let q in N)$.update(N[q],J.ARRAY_BUFFER)}function U(F){let N=[],q=F.index,O=F.attributes.position,B=0;if(O===void 0)return;if(q!==null){let z=q.array;B=q.version;for(let M=0,V=z.length;M<V;M+=3){let T=z[M+0],w=z[M+1],D=z[M+2];N.push(T,w,w,D,D,T)}}else{let z=O.array;B=O.version;for(let M=0,V=z.length/3-1;M<V;M+=3){let T=M+0,w=M+1,D=M+2;N.push(T,w,w,D,D,T)}}let R=new(O.count>=65535?eZ:tZ)(N,1);R.version=B;let E=W.get(F);if(E)$.remove(E);W.set(F,R)}function G(F){let N=W.get(F);if(N){let q=F.index;if(q!==null){if(N.version<q.version)U(F)}}else U(F);return W.get(F)}return{get:Y,update:H,getWireframeAttribute:G}}function uq(J,$,Q){let Z;function K(F){Z=F}let W,X;function Y(F){W=F.type,X=F.bytesPerElement}function H(F,N){J.drawElements(Z,N,W,F*X),Q.update(N,Z,1)}function U(F,N,q){if(q===0)return;J.drawElementsInstanced(Z,N,W,F*X,q),Q.update(N,Z,q)}function G(F,N,q){if(q===0)return;$.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,N,0,W,F,0,q);let B=0;for(let R=0;R<q;R++)B+=N[R];Q.update(B,Z,1)}this.setMode=K,this.setIndex=Y,this.render=H,this.renderInstances=U,this.renderMultiDraw=G}function dq(J){let $={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch(Q.calls++,X){case J.TRIANGLES:Q.triangles+=Y*(W/3);break;case J.LINES:Q.lines+=Y*(W/2);break;case J.LINE_STRIP:Q.lines+=Y*(W-1);break;case J.LINE_LOOP:Q.lines+=Y*W;break;case J.POINTS:Q.points+=Y*W;break;default:Z9("WebGLInfo: Unknown draw mode:",X);break}}function K(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:$,render:Q,programs:null,autoReset:!0,reset:K,update:Z}}function cq(J,$,Q){let Z=new WeakMap,K=new c9;function W(X,Y,H){let U=X.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,F=G!==void 0?G.length:0,N=Z.get(Y);if(N===void 0||N.count!==F){let I=function(){D.dispose(),Z.delete(Y),Y.removeEventListener("dispose",I)};if(N!==void 0)N.texture.dispose();let q=Y.morphAttributes.position!==void 0,O=Y.morphAttributes.normal!==void 0,B=Y.morphAttributes.color!==void 0,R=Y.morphAttributes.position||[],E=Y.morphAttributes.normal||[],z=Y.morphAttributes.color||[],M=0;if(q===!0)M=1;if(O===!0)M=2;if(B===!0)M=3;let V=Y.attributes.position.count*M,T=1;if(V>$.maxTextureSize)T=Math.ceil(V/$.maxTextureSize),V=$.maxTextureSize;let w=new Float32Array(V*T*4*F),D=new aZ(w,V,T,F);D.type=r8,D.needsUpdate=!0;let L=M*4;for(let i=0;i<F;i++){let h=R[i],d=E[i],Q0=z[i],f=V*T*4*i;for(let y=0;y<h.count;y++){let p=y*L;if(q===!0)K.fromBufferAttribute(h,y),w[f+p+0]=K.x,w[f+p+1]=K.y,w[f+p+2]=K.z,w[f+p+3]=0;if(O===!0)K.fromBufferAttribute(d,y),w[f+p+4]=K.x,w[f+p+5]=K.y,w[f+p+6]=K.z,w[f+p+7]=0;if(B===!0)K.fromBufferAttribute(Q0,y),w[f+p+8]=K.x,w[f+p+9]=K.y,w[f+p+10]=K.z,w[f+p+11]=Q0.itemSize===4?K.w:1}}N={count:F,texture:D,size:new O0(V,T)},Z.set(Y,N),Y.addEventListener("dispose",I)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,Q);else{let q=0;for(let B=0;B<U.length;B++)q+=U[B];let O=Y.morphTargetsRelative?1:1-q;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",N.texture,Q),H.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:W}}function nq(J,$,Q,Z,K){let W=new WeakMap;function X(U){let G=K.render.frame,F=U.geometry,N=$.get(U,F);if(W.get(N)!==G)$.update(N),W.set(N,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==G){if(Q.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Q.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,G)}}if(U.isSkinnedMesh){let q=U.skeleton;if(W.get(q)!==G)q.update(),W.set(q,G)}return N}function Y(){W=new WeakMap}function H(U){let G=U.target;if(G.removeEventListener("dispose",H),Z.releaseStatesOfObject(G),Q.remove(G.instanceMatrix),G.instanceColor!==null)Q.remove(G.instanceColor)}return{update:X,dispose:Y}}var sq={[JQ]:"LINEAR_TONE_MAPPING",[$Q]:"REINHARD_TONE_MAPPING",[QQ]:"CINEON_TONE_MAPPING",[o7]:"ACES_FILMIC_TONE_MAPPING",[KQ]:"AGX_TONE_MAPPING",[WQ]:"NEUTRAL_TONE_MAPPING",[ZQ]:"CUSTOM_TONE_MAPPING"};function iq(J,$,Q,Z,K,W){let X=new X6($,Q,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,H=null,U=new b9;U.setAttribute("position",new W9([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new W9([0,2,0,0,2,0],2));let G=new BQ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),F=new T0(U,G),N=new K7(-1,1,1,-1,0,1),q=null,O=null,B=!1,R,E=null,z=[],M=!1;this.setSize=function(V,T){if(X.setSize(V,T),Y!==null)Y.setSize(V,T);if(H!==null)H.setSize(V,T);for(let w=0;w<z.length;w++){let D=z[w];if(D.setSize)D.setSize(V,T)}},this.setEffects=function(V){z=V,M=z.length>0&&z[0].isRenderPass===!0;let{width:T,height:w}=X;if(z.length>0&&Y===null)Y=new X6(T,w,{type:V6,depthBuffer:!1,stencilBuffer:!1}),H=new X6(T,w,{type:V6,depthBuffer:!1,stencilBuffer:!1});for(let D=0;D<z.length;D++){let L=z[D];if(L.setSize)L.setSize(T,w)}},this.begin=function(V,T){if(B)return!1;if(V.toneMapping===R8&&z.length===0)return!1;if(E=T,T!==null){let{width:w,height:D}=T;if(X.width!==w||X.height!==D)this.setSize(w,D)}if(M===!1)V.setRenderTarget(X);return R=V.toneMapping,V.toneMapping=R8,!0},this.hasRenderPass=function(){return M},this.end=function(V,T){V.toneMapping=R,B=!0;let w=X,D=Y;for(let L=0;L<z.length;L++){let I=z[L];if(I.enabled===!1)continue;if(I.render(V,D,w,T),I.needsSwap!==!1)w=D,D=D===Y?H:Y}if(q!==V.outputColorSpace||O!==V.toneMapping){if(q=V.outputColorSpace,O=V.toneMapping,G.defines={},V9.getTransfer(q)===n9)G.defines.SRGB_TRANSFER="";let L=sq[O];if(L)G.defines[L]="";G.needsUpdate=!0}G.uniforms.tDiffuse.value=w.texture,V.setRenderTarget(E),V.render(F,N),E=null,B=!1},this.isCompositing=function(){return B},this.dispose=function(){if(X.dispose(),Y!==null)Y.dispose();if(H!==null)H.dispose();U.dispose(),G.dispose()}}var TU=new W6,$Y=new XJ(1,1),_U=new aZ,SU=new PX,wU=new ZK,UU=[],NU=[],GU=new Float32Array(16),FU=new Float32Array(9),EU=new Float32Array(4);function L$(J,$,Q){let Z=J[0];if(Z<=0||Z>0)return J;let K=$*Q,W=UU[K];if(W===void 0)W=new Float32Array(K),UU[K]=W;if($!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==$;++X)Y+=Q,J[X].toArray(W,Y)}return W}function F6(J,$){if(J.length!==$.length)return!1;for(let Q=0,Z=J.length;Q<Z;Q++)if(J[Q]!==$[Q])return!1;return!0}function E6(J,$){for(let Q=0,Z=$.length;Q<Z;Q++)J[Q]=$[Q]}function MK(J,$){let Q=NU[$];if(Q===void 0)Q=new Int32Array($),NU[$]=Q;for(let Z=0;Z!==$;++Z)Q[Z]=J.allocateTextureUnit();return Q}function oq(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1f(this.addr,$),Q[0]=$}function aq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2f(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(F6(Q,$))return;J.uniform2fv(this.addr,$),E6(Q,$)}}function rq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3f(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else if($.r!==void 0){if(Q[0]!==$.r||Q[1]!==$.g||Q[2]!==$.b)J.uniform3f(this.addr,$.r,$.g,$.b),Q[0]=$.r,Q[1]=$.g,Q[2]=$.b}else{if(F6(Q,$))return;J.uniform3fv(this.addr,$),E6(Q,$)}}function tq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4f(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(F6(Q,$))return;J.uniform4fv(this.addr,$),E6(Q,$)}}function eq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(F6(Q,$))return;J.uniformMatrix2fv(this.addr,!1,$),E6(Q,$)}else{if(F6(Q,Z))return;EU.set(Z),J.uniformMatrix2fv(this.addr,!1,EU),E6(Q,Z)}}function JO(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(F6(Q,$))return;J.uniformMatrix3fv(this.addr,!1,$),E6(Q,$)}else{if(F6(Q,Z))return;FU.set(Z),J.uniformMatrix3fv(this.addr,!1,FU),E6(Q,Z)}}function $O(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(F6(Q,$))return;J.uniformMatrix4fv(this.addr,!1,$),E6(Q,$)}else{if(F6(Q,Z))return;GU.set(Z),J.uniformMatrix4fv(this.addr,!1,GU),E6(Q,Z)}}function QO(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1i(this.addr,$),Q[0]=$}function ZO(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2i(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(F6(Q,$))return;J.uniform2iv(this.addr,$),E6(Q,$)}}function KO(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3i(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(F6(Q,$))return;J.uniform3iv(this.addr,$),E6(Q,$)}}function WO(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4i(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(F6(Q,$))return;J.uniform4iv(this.addr,$),E6(Q,$)}}function XO(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1ui(this.addr,$),Q[0]=$}function YO(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2ui(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(F6(Q,$))return;J.uniform2uiv(this.addr,$),E6(Q,$)}}function HO(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3ui(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(F6(Q,$))return;J.uniform3uiv(this.addr,$),E6(Q,$)}}function UO(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4ui(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(F6(Q,$))return;J.uniform4uiv(this.addr,$),E6(Q,$)}}function NO(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)$Y.compareFunction=Q.isReversedDepthBuffer()?oZ:iZ,W=$Y;else W=TU;Q.setTexture2D($||W,K)}function GO(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTexture3D($||SU,K)}function FO(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTextureCube($||wU,K)}function EO(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTexture2DArray($||_U,K)}function qO(J){switch(J){case 5126:return oq;case 35664:return aq;case 35665:return rq;case 35666:return tq;case 35674:return eq;case 35675:return JO;case 35676:return $O;case 5124:case 35670:return QO;case 35667:case 35671:return ZO;case 35668:case 35672:return KO;case 35669:case 35673:return WO;case 5125:return XO;case 36294:return YO;case 36295:return HO;case 36296:return UO;case 35678:case 36198:case 36298:case 36306:case 35682:return NO;case 35679:case 36299:case 36307:return GO;case 35680:case 36300:case 36308:case 36293:return FO;case 36289:case 36303:case 36311:case 36292:return EO}}function OO(J,$){J.uniform1fv(this.addr,$)}function RO(J,$){let Q=L$($,this.size,2);J.uniform2fv(this.addr,Q)}function LO(J,$){let Q=L$($,this.size,3);J.uniform3fv(this.addr,Q)}function VO(J,$){let Q=L$($,this.size,4);J.uniform4fv(this.addr,Q)}function BO(J,$){let Q=L$($,this.size,4);J.uniformMatrix2fv(this.addr,!1,Q)}function DO(J,$){let Q=L$($,this.size,9);J.uniformMatrix3fv(this.addr,!1,Q)}function kO(J,$){let Q=L$($,this.size,16);J.uniformMatrix4fv(this.addr,!1,Q)}function MO(J,$){J.uniform1iv(this.addr,$)}function CO(J,$){J.uniform2iv(this.addr,$)}function IO(J,$){J.uniform3iv(this.addr,$)}function PO(J,$){J.uniform4iv(this.addr,$)}function zO(J,$){J.uniform1uiv(this.addr,$)}function AO(J,$){J.uniform2uiv(this.addr,$)}function TO(J,$){J.uniform3uiv(this.addr,$)}function _O(J,$){J.uniform4uiv(this.addr,$)}function SO(J,$,Q){let Z=this.cache,K=$.length,W=MK(Q,K);if(!F6(Z,W))J.uniform1iv(this.addr,W),E6(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=$Y;else X=TU;for(let Y=0;Y!==K;++Y)Q.setTexture2D($[Y]||X,W[Y])}function wO(J,$,Q){let Z=this.cache,K=$.length,W=MK(Q,K);if(!F6(Z,W))J.uniform1iv(this.addr,W),E6(Z,W);for(let X=0;X!==K;++X)Q.setTexture3D($[X]||SU,W[X])}function jO(J,$,Q){let Z=this.cache,K=$.length,W=MK(Q,K);if(!F6(Z,W))J.uniform1iv(this.addr,W),E6(Z,W);for(let X=0;X!==K;++X)Q.setTextureCube($[X]||wU,W[X])}function yO(J,$,Q){let Z=this.cache,K=$.length,W=MK(Q,K);if(!F6(Z,W))J.uniform1iv(this.addr,W),E6(Z,W);for(let X=0;X!==K;++X)Q.setTexture2DArray($[X]||_U,W[X])}function fO(J){switch(J){case 5126:return OO;case 35664:return RO;case 35665:return LO;case 35666:return VO;case 35674:return BO;case 35675:return DO;case 35676:return kO;case 5124:case 35670:return MO;case 35667:case 35671:return CO;case 35668:case 35672:return IO;case 35669:case 35673:return PO;case 5125:return zO;case 36294:return AO;case 36295:return TO;case 36296:return _O;case 35678:case 36198:case 36298:case 36306:case 35682:return SO;case 35679:case 36299:case 36307:return wO;case 35680:case 36300:case 36308:case 36293:return jO;case 36289:case 36303:case 36311:case 36292:return yO}}class jU{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.setValue=qO($.type)}}class yU{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.size=$.size,this.setValue=fO($.type)}}class fU{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,$,Q){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,$[X.id],Q)}}}var eX=/(\w+)(\])?(\[|\.)?/g;function qU(J,$){J.seq.push($),J.map[$.id]=$}function vO(J,$,Q){let Z=J.name,K=Z.length;eX.lastIndex=0;while(!0){let W=eX.exec(Z),X=eX.lastIndex,Y=W[1],H=W[2]==="]",U=W[3];if(H)Y=Y|0;if(U===void 0||U==="["&&X+2===K){qU(Q,U===void 0?new jU(Y,J,$):new yU(Y,J,$));break}else{let F=Q.map[Y];if(F===void 0)F=new fU(Y),qU(Q,F);Q=F}}}class zQ{constructor(J,$){this.seq=[],this.map={};let Q=J.getProgramParameter($,J.ACTIVE_UNIFORMS);for(let W=0;W<Q;++W){let X=J.getActiveUniform($,W),Y=J.getUniformLocation($,X.name);vO(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,$,Q,Z){let K=this.map[$];if(K!==void 0)K.setValue(J,Q,Z)}setOptional(J,$,Q){let Z=$[Q];if(Z!==void 0)this.setValue(J,Q,Z)}static upload(J,$,Q,Z){for(let K=0,W=$.length;K!==W;++K){let X=$[K],Y=Q[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,$){let Q=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in $)Q.push(W)}return Q}}function OU(J,$,Q){let Z=J.createShader($);return J.shaderSource(Z,Q),J.compileShader(Z),Z}var bO=37297,hO=0;function xO(J,$){let Q=J.split(`
`),Z=[],K=Math.max($-6,0),W=Math.min($+6,Q.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===$?">":" "} ${Y}: ${Q[X]}`)}return Z.join(`
`)}var RU=new U9;function gO(J){V9._getMatrix(RU,V9.workingColorSpace,J);let $=`mat3( ${RU.elements.map((Q)=>Q.toFixed(4))} )`;switch(V9.getTransfer(J)){case BX:return[$,"LinearTransferOETF"];case n9:return[$,"sRGBTransferOETF"];default:return t0("WebGLProgram: Unsupported color space: ",J),[$,"LinearTransferOETF"]}}function LU(J,$,Q){let Z=J.getShaderParameter($,J.COMPILE_STATUS),W=(J.getShaderInfoLog($)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return Q.toUpperCase()+`

`+W+`

`+xO(J.getShaderSource($),Y)}else return W}function pO(J,$){let Q=gO($);return[`vec4 ${J}( vec4 value ) {`,`	return ${Q[1]}( vec4( value.rgb * ${Q[0]}, value.a ) );`,"}"].join(`
`)}var mO={[JQ]:"Linear",[$Q]:"Reinhard",[QQ]:"Cineon",[o7]:"ACESFilmic",[KQ]:"AgX",[WQ]:"Neutral",[ZQ]:"Custom"};function lO(J,$){let Q=mO[$];if(Q===void 0)return t0("WebGLProgram: Unsupported toneMapping:",$),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}var DK=new S;function uO(){V9.getLuminanceCoefficients(DK);let J=DK.x.toFixed(4),$=DK.y.toFixed(4),Q=DK.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${$}, ${Q} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function dO(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(PQ).join(`
`)}function cO(J){let $=[];for(let Q in J){let Z=J[Q];if(Z===!1)continue;$.push("#define "+Q+" "+Z)}return $.join(`
`)}function nO(J,$){let Q={},Z=J.getProgramParameter($,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib($,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;Q[X]={type:W.type,location:J.getAttribLocation($,X),locationSize:Y}}return Q}function PQ(J){return J!==""}function VU(J,$){let Q=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,$.numSunLights).replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,$.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows)}function BU(J,$){return J.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var sO=/^[ \t]*#include +<([\w\d./]+)>/gm;function QY(J){return J.replace(sO,oO)}var iO=new Map;function oO(J,$){let Q=D9[$];if(Q===void 0){let Z=iO.get($);if(Z!==void 0)Q=D9[Z],t0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',$,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+$+">")}return QY(Q)}var aO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function DU(J){return J.replace(aO,rO)}function rO(J,$,Q,Z){let K="";for(let W=parseInt($);W<parseInt(Q);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function kU(J){let $=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return $}var tO={[i7]:"SHADOWMAP_TYPE_PCF",[J$]:"SHADOWMAP_TYPE_VSM"};function eO(J){return tO[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var JR={[Q$]:"ENVMAP_TYPE_CUBE",[a7]:"ENVMAP_TYPE_CUBE",[XQ]:"ENVMAP_TYPE_CUBE_UV"};function $R(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return JR[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var QR={[a7]:"ENVMAP_MODE_REFRACTION"};function ZR(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return QR[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var KR={[I5]:"ENVMAP_BLENDING_MULTIPLY",[P5]:"ENVMAP_BLENDING_MIX",[z5]:"ENVMAP_BLENDING_ADD"};function WR(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return KR[J.combine]||"ENVMAP_BLENDING_NONE"}function XR(J){let $=J.envMapCubeUVHeight;if($===null)return null;let Q=Math.log2($)-2,Z=1/$;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:Z,maxMip:Q}}function YR(J,$,Q,Z){let K=J.getContext(),W=Q.defines,X=Q.vertexShader,Y=Q.fragmentShader,H=eO(Q),U=$R(Q),G=ZR(Q),F=WR(Q),N=XR(Q),q=dO(Q),O=cO(W),B=K.createProgram(),R,E,z=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(R=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(PQ).join(`
`),R.length>0)R+=`
`;if(E=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O].filter(PQ).join(`
`),E.length>0)E+=`
`}else R=[kU(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.batchingColor?"#define USE_BATCHING_COLOR":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.instancingMorph?"#define USE_INSTANCING_MORPH":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+G:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexNormals?"#define HAS_NORMAL":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+H:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(PQ).join(`
`),E=[kU(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,O,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+U:"",Q.envMap?"#define "+G:"",Q.envMap?"#define "+F:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.dispersion?"#define USE_DISPERSION":"",Q.retroreflection?"#define USE_RETROREFLECTION":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor?"#define USE_COLOR":"",Q.vertexAlphas||Q.batchingColor?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+H:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==R8?"#define TONE_MAPPING":"",Q.toneMapping!==R8?D9.tonemapping_pars_fragment:"",Q.toneMapping!==R8?lO("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",D9.colorspace_pars_fragment,pO("linearToOutputTexel",Q.outputColorSpace),uO(),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(PQ).join(`
`);if(X=QY(X),X=VU(X,Q),X=BU(X,Q),Y=QY(Y),Y=VU(Y,Q),Y=BU(Y,Q),X=DU(X),Y=DU(Y),Q.isRawShaderMaterial!==!0)z=`#version 300 es
`,R=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,E=["#define varying in",Q.glslVersion===DX?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion===DX?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let M=z+R+X,V=z+E+Y,T=OU(K,K.VERTEX_SHADER,M),w=OU(K,K.FRAGMENT_SHADER,V);if(K.attachShader(B,T),K.attachShader(B,w),Q.index0AttributeName!==void 0)K.bindAttribLocation(B,0,Q.index0AttributeName);else if(Q.hasPositionAttribute===!0)K.bindAttribLocation(B,0,"position");K.linkProgram(B);function D(h){if(J.debug.checkShaderErrors){let d=K.getProgramInfoLog(B)||"",Q0=K.getShaderInfoLog(T)||"",f=K.getShaderInfoLog(w)||"",y=d.trim(),p=Q0.trim(),v=f.trim(),r=!0,l=!0;if(K.getProgramParameter(B,K.LINK_STATUS)===!1)if(r=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,B,T,w);else{let J0=LU(K,T,"vertex"),Y0=LU(K,w,"fragment");Z9("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(B,K.VALIDATE_STATUS)+`

Material Name: `+h.name+`
Material Type: `+h.type+`

Program Info Log: `+y+`
`+J0+`
`+Y0)}else if(y!=="")t0("WebGLProgram: Program Info Log:",y);else if(p===""||v==="")l=!1;if(l)h.diagnostics={runnable:r,programLog:y,vertexShader:{log:p,prefix:R},fragmentShader:{log:v,prefix:E}}}K.deleteShader(T),K.deleteShader(w),L=new zQ(K,B),I=nO(K,B)}let L;this.getUniforms=function(){if(L===void 0)D(this);return L};let I;this.getAttributes=function(){if(I===void 0)D(this);return I};let i=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(i===!1)i=K.getProgramParameter(B,bO);return i},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(B),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=hO++,this.cacheKey=$,this.usedTimes=1,this.program=B,this.vertexShader=T,this.fragmentShader=w,this}var HR=0;class vU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,$,Q){let Z=this._getShaderCacheForMaterial(J);if(Z.has($)===!1)Z.add($),$.usedTimes++;if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;return this}remove(J){let $=this.materialCache.get(J);for(let Q of $)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let $=this.materialCache,Q=$.get(J);if(Q===void 0)Q=new Set,$.set(J,Q);return Q}_getShaderStage(J){let $=this.shaderCache,Q=$.get(J);if(Q===void 0)Q=new bU(J),$.set(J,Q);return Q}}class bU{constructor(J){this.id=HR++,this.code=J,this.usedTimes=0}}function UR(J){return J===JJ||J===cZ||J===nZ}function NR(J,$,Q,Z,K,W){let X=new rZ,Y=new vU,H=new Set,U=[],G=new Map,F=Z.logarithmicDepthBuffer,N=Z.precision,q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(L){if(H.add(L),L===0)return"uv";return`uv${L}`}function B(L,I,i,h,d,Q0){let f=h.fog,y=d.geometry,p=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?h.environment:null,v=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,r=$.get(L.envMap||p,v),l=!!r&&r.mapping===XQ?r.image.height:null,J0=q[L.type];if(L.precision!==null){if(N=Z.getMaxPrecision(L.precision),N!==L.precision)t0("WebGLProgram.getParameters:",L.precision,"not supported, using",N,"instead.")}let Y0=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,I0=Y0!==void 0?Y0.length:0,j=0;if(y.morphAttributes.position!==void 0)j=1;if(y.morphAttributes.normal!==void 0)j=2;if(y.morphAttributes.color!==void 0)j=3;let a,U0,b,C;if(J0){let l9=x8[J0];a=l9.vertexShader,U0=l9.fragmentShader}else{a=L.vertexShader,U0=L.fragmentShader;let l9=Y.getVertexShaderStage(L),y9=Y.getFragmentShaderStage(L);Y.update(L,l9,y9),b=l9.id,C=y9.id}let x=J.getRenderTarget(),n=J.state.buffers.depth.getReversed(),K0=d.isInstancedMesh===!0,$0=d.isBatchedMesh===!0,D0=!!L.map,L0=!!L.matcap,z0=!!r,V0=!!L.aoMap,u0=!!L.lightMap,X9=!!L.bumpMap&&L.wireframe===!1,a0=!!L.normalMap,k9=!!L.displacementMap,S9=!!L.emissiveMap,N9=!!L.metalnessMap,m=!!L.roughnessMap,m9=L.anisotropy>0,P9=L.clearcoat>0,C9=L.dispersion>0,_=L.retroreflectivity>0,P=L.iridescence>0,u=L.sheen>0,W0=L.transmission>0,B0=m9&&!!L.anisotropyMap,A0=P9&&!!L.clearcoatMap,b0=P9&&!!L.clearcoatNormalMap,G0=P9&&!!L.clearcoatRoughnessMap,R0=P&&!!L.iridescenceMap,h0=P&&!!L.iridescenceThicknessMap,r0=u&&!!L.sheenColorMap,j0=u&&!!L.sheenRoughnessMap,k0=!!L.specularMap,d0=!!L.specularColorMap,J9=!!L.specularIntensityMap,z9=W0&&!!L.transmissionMap,o=W0&&!!L.thicknessMap,y0=!!L.gradientMap,E0=!!L.alphaMap,v0=L.alphaTest>0,m0=!!L.alphaHash,M0=!!L.extensions,f0=R8;if(L.toneMapped){if(x===null||x.isXRRenderTarget===!0)f0=J.toneMapping}let Y9={shaderID:J0,shaderType:L.type,shaderName:L.name,vertexShader:a,fragmentShader:U0,defines:L.defines,customVertexShaderID:b,customFragmentShaderID:C,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:N,batching:$0,batchingColor:$0&&d._colorsTexture!==null,instancing:K0,instancingColor:K0&&d.instanceColor!==null,instancingMorph:K0&&d.morphTexture!==null,outputColorSpace:x===null?J.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:V9.workingColorSpace,alphaToCoverage:!!L.alphaToCoverage,map:D0,matcap:L0,envMap:z0,envMapMode:z0&&r.mapping,envMapCubeUVHeight:l,aoMap:V0,lightMap:u0,bumpMap:X9,normalMap:a0,displacementMap:k9,emissiveMap:S9,normalMapObjectSpace:a0&&L.normalMapType===f5,normalMapTangentSpace:a0&&L.normalMapType===VX,packedNormalMap:a0&&L.normalMapType===VX&&UR(L.normalMap.format),metalnessMap:N9,roughnessMap:m,anisotropy:m9,anisotropyMap:B0,clearcoat:P9,clearcoatMap:A0,clearcoatNormalMap:b0,clearcoatRoughnessMap:G0,dispersion:C9,retroreflection:_,iridescence:P,iridescenceMap:R0,iridescenceThicknessMap:h0,sheen:u,sheenColorMap:r0,sheenRoughnessMap:j0,specularMap:k0,specularColorMap:d0,specularIntensityMap:J9,transmission:W0,transmissionMap:z9,thicknessMap:o,gradientMap:y0,opaque:L.transparent===!1&&L.blending===e$&&L.alphaToCoverage===!1,alphaMap:E0,alphaTest:v0,alphaHash:m0,combine:L.combine,mapUv:D0&&O(L.map.channel),aoMapUv:V0&&O(L.aoMap.channel),lightMapUv:u0&&O(L.lightMap.channel),bumpMapUv:X9&&O(L.bumpMap.channel),normalMapUv:a0&&O(L.normalMap.channel),displacementMapUv:k9&&O(L.displacementMap.channel),emissiveMapUv:S9&&O(L.emissiveMap.channel),metalnessMapUv:N9&&O(L.metalnessMap.channel),roughnessMapUv:m&&O(L.roughnessMap.channel),anisotropyMapUv:B0&&O(L.anisotropyMap.channel),clearcoatMapUv:A0&&O(L.clearcoatMap.channel),clearcoatNormalMapUv:b0&&O(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G0&&O(L.clearcoatRoughnessMap.channel),iridescenceMapUv:R0&&O(L.iridescenceMap.channel),iridescenceThicknessMapUv:h0&&O(L.iridescenceThicknessMap.channel),sheenColorMapUv:r0&&O(L.sheenColorMap.channel),sheenRoughnessMapUv:j0&&O(L.sheenRoughnessMap.channel),specularMapUv:k0&&O(L.specularMap.channel),specularColorMapUv:d0&&O(L.specularColorMap.channel),specularIntensityMapUv:J9&&O(L.specularIntensityMap.channel),transmissionMapUv:z9&&O(L.transmissionMap.channel),thicknessMapUv:o&&O(L.thicknessMap.channel),alphaMapUv:E0&&O(L.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(a0||m9),vertexNormals:!!y.attributes.normal,vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!y.attributes.uv&&(D0||E0),fog:!!f,useFog:L.fog===!0,fogExp2:!!f&&f.isFogExp2,flatShading:L.wireframe===!1&&(L.flatShading===!0||y.attributes.normal===void 0&&a0===!1&&(L.isMeshLambertMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isMeshPhysicalMaterial)),sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:n,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:I0,morphTextureStride:j,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:Q0.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:L.dithering,shadowMapEnabled:J.shadowMap.enabled&&i.length>0,shadowMapType:J.shadowMap.type,toneMapping:f0,decodeVideoTexture:D0&&L.map.isVideoTexture===!0&&V9.getTransfer(L.map.colorSpace)===n9,decodeVideoTextureEmissive:S9&&L.emissiveMap.isVideoTexture===!0&&V9.getTransfer(L.emissiveMap.colorSpace)===n9,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===a9,flipSided:L.side===I6,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:M0&&L.extensions.clipCullDistance===!0&&Q.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(M0&&L.extensions.multiDraw===!0||$0)&&Q.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Q.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Y9.vertexUv1s=H.has(1),Y9.vertexUv2s=H.has(2),Y9.vertexUv3s=H.has(3),H.clear(),Y9}function R(L){let I=[];if(L.shaderID)I.push(L.shaderID);else I.push(L.customVertexShaderID),I.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let i in L.defines)I.push(i),I.push(L.defines[i]);if(L.isRawShaderMaterial===!1)E(I,L),z(I,L),I.push(J.outputColorSpace);return I.push(L.customProgramCacheKey),I.join()}function E(L,I){L.push(I.precision),L.push(I.outputColorSpace),L.push(I.envMapMode),L.push(I.envMapCubeUVHeight),L.push(I.mapUv),L.push(I.alphaMapUv),L.push(I.lightMapUv),L.push(I.aoMapUv),L.push(I.bumpMapUv),L.push(I.normalMapUv),L.push(I.displacementMapUv),L.push(I.emissiveMapUv),L.push(I.metalnessMapUv),L.push(I.roughnessMapUv),L.push(I.anisotropyMapUv),L.push(I.clearcoatMapUv),L.push(I.clearcoatNormalMapUv),L.push(I.clearcoatRoughnessMapUv),L.push(I.iridescenceMapUv),L.push(I.iridescenceThicknessMapUv),L.push(I.sheenColorMapUv),L.push(I.sheenRoughnessMapUv),L.push(I.specularMapUv),L.push(I.specularColorMapUv),L.push(I.specularIntensityMapUv),L.push(I.transmissionMapUv),L.push(I.thicknessMapUv),L.push(I.combine),L.push(I.fogExp2),L.push(I.sizeAttenuation),L.push(I.morphTargetsCount),L.push(I.morphAttributeCount),L.push(I.numSunLights),L.push(I.numDirLights),L.push(I.numPointLights),L.push(I.numSpotLights),L.push(I.numSpotLightMaps),L.push(I.numHemiLights),L.push(I.numRectAreaLights),L.push(I.numSunLightShadows),L.push(I.numDirLightShadows),L.push(I.numPointLightShadows),L.push(I.numSpotLightShadows),L.push(I.numSpotLightShadowsWithMaps),L.push(I.numLightProbes),L.push(I.shadowMapType),L.push(I.toneMapping),L.push(I.numClippingPlanes),L.push(I.numClipIntersection),L.push(I.depthPacking)}function z(L,I){if(X.disableAll(),I.instancing)X.enable(0);if(I.instancingColor)X.enable(1);if(I.instancingMorph)X.enable(2);if(I.matcap)X.enable(3);if(I.envMap)X.enable(4);if(I.normalMapObjectSpace)X.enable(5);if(I.normalMapTangentSpace)X.enable(6);if(I.clearcoat)X.enable(7);if(I.iridescence)X.enable(8);if(I.alphaTest)X.enable(9);if(I.vertexColors)X.enable(10);if(I.vertexAlphas)X.enable(11);if(I.vertexUv1s)X.enable(12);if(I.vertexUv2s)X.enable(13);if(I.vertexUv3s)X.enable(14);if(I.vertexTangents)X.enable(15);if(I.anisotropy)X.enable(16);if(I.alphaHash)X.enable(17);if(I.batching)X.enable(18);if(I.dispersion)X.enable(19);if(I.retroreflection)X.enable(24);if(I.batchingColor)X.enable(20);if(I.gradientMap)X.enable(21);if(I.packedNormalMap)X.enable(22);if(I.vertexNormals)X.enable(23);if(L.push(X.mask),X.disableAll(),I.fog)X.enable(0);if(I.useFog)X.enable(1);if(I.flatShading)X.enable(2);if(I.logarithmicDepthBuffer)X.enable(3);if(I.reversedDepthBuffer)X.enable(4);if(I.skinning)X.enable(5);if(I.morphTargets)X.enable(6);if(I.morphNormals)X.enable(7);if(I.morphColors)X.enable(8);if(I.premultipliedAlpha)X.enable(9);if(I.shadowMapEnabled)X.enable(10);if(I.doubleSided)X.enable(11);if(I.flipSided)X.enable(12);if(I.useDepthPacking)X.enable(13);if(I.dithering)X.enable(14);if(I.transmission)X.enable(15);if(I.sheen)X.enable(16);if(I.opaque)X.enable(17);if(I.pointsUvs)X.enable(18);if(I.decodeVideoTexture)X.enable(19);if(I.decodeVideoTextureEmissive)X.enable(20);if(I.alphaToCoverage)X.enable(21);if(I.numLightProbeGrids>0)X.enable(22);if(I.hasPositionAttribute)X.enable(23);L.push(X.mask)}function M(L){let I=q[L.type],i;if(I){let h=x8[I];i=J7.clone(h.uniforms)}else i=L.uniforms;return i}function V(L,I){let i=G.get(I);if(i!==void 0)++i.usedTimes;else i=new YR(J,I,L,K),U.push(i),G.set(I,i);return i}function T(L){if(--L.usedTimes===0){let I=U.indexOf(L);U[I]=U[U.length-1],U.pop(),G.delete(L.cacheKey),L.destroy()}}function w(L){Y.remove(L)}function D(){Y.dispose()}return{getParameters:B,getProgramCacheKey:R,getUniforms:M,acquireProgram:V,releaseProgram:T,releaseShaderCache:w,programs:U,dispose:D}}function GR(){let J=new WeakMap;function $(X){return J.has(X)}function Q(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:$,get:Q,remove:Z,update:K,dispose:W}}function FR(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.material.id!==$.material.id)return J.material.id-$.material.id;else if(J.materialVariant!==$.materialVariant)return J.materialVariant-$.materialVariant;else if(J.z!==$.z)return J.z-$.z;else return J.id-$.id}function MU(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.z!==$.z)return $.z-J.z;else return J.id-$.id}function CU(){let J=[],$=0,Q=[],Z=[],K=[];function W(){$=0,Q.length=0,Z.length=0,K.length=0}function X(N){let q=0;if(N.isInstancedMesh)q+=2;if(N.isSkinnedMesh)q+=1;return q}function Y(N,q,O,B,R,E){let z=J[$];if(z===void 0)z={id:N.id,object:N,geometry:q,material:O,materialVariant:X(N),groupOrder:B,renderOrder:N.renderOrder,z:R,group:E},J[$]=z;else z.id=N.id,z.object=N,z.geometry=q,z.material=O,z.materialVariant=X(N),z.groupOrder=B,z.renderOrder=N.renderOrder,z.z=R,z.group=E;return $++,z}function H(N,q,O,B,R,E,z){if(z.reversedDepth===!0)R=-R;let M=Y(N,q,O,B,R,E);if(O.transmission>0)Z.push(M);else if(O.transparent===!0)K.push(M);else Q.push(M)}function U(N,q,O,B,R,E){let z=Y(N,q,O,B,R,E);if(O.transmission>0)Z.unshift(z);else if(O.transparent===!0)K.unshift(z);else Q.unshift(z)}function G(N,q){if(Q.length>1)Q.sort(N||FR);if(Z.length>1)Z.sort(q||MU);if(K.length>1)K.sort(q||MU)}function F(){for(let N=$,q=J.length;N<q;N++){let O=J[N];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:Q,transmissive:Z,transparent:K,init:W,push:H,unshift:U,finish:F,sort:G}}function ER(){let J=new WeakMap;function $(Z,K){let W=J.get(Z),X;if(W===void 0)X=new CU,J.set(Z,[X]);else if(K>=W.length)X=new CU,W.push(X);else X=W[K];return X}function Q(){J=new WeakMap}return{get:$,dispose:Q}}function qR(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"SunLight":case"DirectionalLight":Q={direction:new S,color:new w0};break;case"SpotLight":Q={position:new S,direction:new S,color:new w0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new S,color:new w0,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new S,skyColor:new w0,groundColor:new w0};break;case"RectAreaLight":Q={color:new w0,position:new S,halfWidth:new S,halfHeight:new S};break}return J[$.id]=Q,Q}}}function OR(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"SunLight":case"DirectionalLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new O0};break;case"SpotLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new O0};break;case"PointLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new O0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[$.id]=Q,Q}}}var RR=0;function LR(J,$){return($.castShadow?2:0)-(J.castShadow?2:0)+($.map?1:0)-(J.map?1:0)}function VR(J){let $=new qR,Q=OR(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new S);let K=new S,W=new $9,X=new $9;function Y(U){let G=0,F=0,N=0;for(let d=0;d<9;d++)Z.probe[d].set(0,0,0);let q=0,O=0,B=0,R=0,E=0,z=0,M=0,V=0,T=0,w=0,D=0,L=0,I=0,i=0;U.sort(LR);for(let d=0,Q0=U.length;d<Q0;d++){let f=U[d],y=f.color,p=f.intensity,v=f.distance,r=null;if(f.shadow&&f.shadow.map)if(f.shadow.map.texture.format===JJ)r=f.shadow.map.texture;else r=f.shadow.map.depthTexture||f.shadow.map.texture;if(f.isAmbientLight)G+=y.r*p,F+=y.g*p,N+=y.b*p;else if(f.isLightProbe){for(let l=0;l<9;l++)Z.probe[l].addScaledVector(f.sh.coefficients[l],p);i++}else if(f.isSunLight){let l=$.get(f);if(l.color.copy(f.color).multiplyScalar(f.intensity),f.castShadow){let J0=f.shadow,Y0=Q.get(f);Y0.shadowIntensity=J0.intensity,Y0.shadowBias=J0.bias,Y0.shadowNormalBias=J0.normalBias,Y0.shadowRadius=J0.radius,Y0.shadowMapSize.copy(J0.mapSize).multiply(J0.getFrameExtents()),Z.sunShadow[O]=Y0,Z.sunShadowMap[O]=r;let I0=J0.getViewportCount();for(let j=0;j<I0;j++)Z.sunShadowMatrix[B+j]=J0.getMatrix(j),Z.sunShadowCascade[B+j]=J0._cascadeData[j];B+=I0,O++}Z.sun[q]=l,q++}else if(f.isDirectionalLight){let l=$.get(f);if(l.color.copy(f.color).multiplyScalar(f.intensity),f.castShadow){let J0=f.shadow,Y0=Q.get(f);Y0.shadowIntensity=J0.intensity,Y0.shadowBias=J0.bias,Y0.shadowNormalBias=J0.normalBias,Y0.shadowRadius=J0.radius,Y0.shadowMapSize=J0.mapSize,Z.directionalShadow[R]=Y0,Z.directionalShadowMap[R]=r,Z.directionalShadowMatrix[R]=f.shadow.matrix,T++}Z.directional[R]=l,R++}else if(f.isSpotLight){let l=$.get(f);l.position.setFromMatrixPosition(f.matrixWorld),l.color.copy(y).multiplyScalar(p),l.distance=v,l.coneCos=Math.cos(f.angle),l.penumbraCos=Math.cos(f.angle*(1-f.penumbra)),l.decay=f.decay,Z.spot[z]=l;let J0=f.shadow;if(f.map){if(Z.spotLightMap[L]=f.map,L++,J0.updateMatrices(f),f.castShadow)I++}if(Z.spotLightMatrix[z]=J0.matrix,f.castShadow){let Y0=Q.get(f);Y0.shadowIntensity=J0.intensity,Y0.shadowBias=J0.bias,Y0.shadowNormalBias=J0.normalBias,Y0.shadowRadius=J0.radius,Y0.shadowMapSize=J0.mapSize,Z.spotShadow[z]=Y0,Z.spotShadowMap[z]=r,D++}z++}else if(f.isRectAreaLight){let l=$.get(f);l.color.copy(y).multiplyScalar(p),l.halfWidth.set(f.width*0.5,0,0),l.halfHeight.set(0,f.height*0.5,0),Z.rectArea[M]=l,M++}else if(f.isPointLight){let l=$.get(f);if(l.color.copy(f.color).multiplyScalar(f.intensity),l.distance=f.distance,l.decay=f.decay,f.castShadow){let J0=f.shadow,Y0=Q.get(f);Y0.shadowIntensity=J0.intensity,Y0.shadowBias=J0.bias,Y0.shadowNormalBias=J0.normalBias,Y0.shadowRadius=J0.radius,Y0.shadowMapSize=J0.mapSize,Y0.shadowCameraNear=J0.camera.near,Y0.shadowCameraFar=J0.camera.far,Z.pointShadow[E]=Y0,Z.pointShadowMap[E]=r,Z.pointShadowMatrix[E]=f.shadow.matrix,w++}Z.point[E]=l,E++}else if(f.isHemisphereLight){let l=$.get(f);l.skyColor.copy(f.color).multiplyScalar(p),l.groundColor.copy(f.groundColor).multiplyScalar(p),Z.hemi[V]=l,V++}}if(M>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=g0.LTC_FLOAT_1,Z.rectAreaLTC2=g0.LTC_FLOAT_2;else Z.rectAreaLTC1=g0.LTC_HALF_1,Z.rectAreaLTC2=g0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=F,Z.ambient[2]=N;let h=Z.hash;if(h.sunLength!==q||h.directionalLength!==R||h.pointLength!==E||h.spotLength!==z||h.rectAreaLength!==M||h.hemiLength!==V||h.numSunShadows!==O||h.numDirectionalShadows!==T||h.numPointShadows!==w||h.numSpotShadows!==D||h.numSpotMaps!==L||h.numLightProbes!==i)Z.sun.length=q,Z.directional.length=R,Z.spot.length=z,Z.rectArea.length=M,Z.point.length=E,Z.hemi.length=V,Z.sunShadow.length=O,Z.sunShadowMap.length=O,Z.sunShadowMatrix.length=B,Z.sunShadowCascade.length=B,Z.directionalShadow.length=T,Z.directionalShadowMap.length=T,Z.directionalShadowMatrix.length=T,Z.pointShadow.length=w,Z.pointShadowMap.length=w,Z.pointShadowMatrix.length=w,Z.spotShadow.length=D,Z.spotShadowMap.length=D,Z.spotLightMatrix.length=D+L-I,Z.spotLightMap.length=L,Z.numSpotLightShadowsWithMaps=I,Z.numLightProbes=i,h.sunLength=q,h.directionalLength=R,h.pointLength=E,h.spotLength=z,h.rectAreaLength=M,h.hemiLength=V,h.numSunShadows=O,h.numDirectionalShadows=T,h.numPointShadows=w,h.numSpotShadows=D,h.numSpotMaps=L,h.numLightProbes=i,Z.version=RR++}function H(U,G){let F=0,N=0,q=0,O=0,B=0,R=0,E=G.matrixWorldInverse;for(let z=0,M=U.length;z<M;z++){let V=U[z];if(V.isSunLight){let T=Z.sun[F];T.direction.setFromMatrixPosition(V.matrixWorld),T.direction.transformDirection(E),F++}else if(V.isDirectionalLight){let T=Z.directional[N];T.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),T.direction.sub(K),T.direction.transformDirection(E),N++}else if(V.isSpotLight){let T=Z.spot[O];T.position.setFromMatrixPosition(V.matrixWorld),T.position.applyMatrix4(E),T.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),T.direction.sub(K),T.direction.transformDirection(E),O++}else if(V.isRectAreaLight){let T=Z.rectArea[B];T.position.setFromMatrixPosition(V.matrixWorld),T.position.applyMatrix4(E),X.identity(),W.copy(V.matrixWorld),W.premultiply(E),X.extractRotation(W),T.halfWidth.set(V.width*0.5,0,0),T.halfHeight.set(0,V.height*0.5,0),T.halfWidth.applyMatrix4(X),T.halfHeight.applyMatrix4(X),B++}else if(V.isPointLight){let T=Z.point[q];T.position.setFromMatrixPosition(V.matrixWorld),T.position.applyMatrix4(E),q++}else if(V.isHemisphereLight){let T=Z.hemi[R];T.direction.setFromMatrixPosition(V.matrixWorld),T.direction.transformDirection(E),R++}}}return{setup:Y,setupView:H,state:Z}}function IU(J){let $=new VR(J),Q=[],Z=[],K=[];function W(N){F.camera=N,Q.length=0,Z.length=0,K.length=0}function X(N){Q.push(N)}function Y(N){Z.push(N)}function H(N){K.push(N)}function U(){$.setup(Q)}function G(N){$.setupView(Q,N)}let F={lightsArray:Q,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:$,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:U,setupLightsView:G,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function BR(J){let $=new WeakMap;function Q(K,W=0){let X=$.get(K),Y;if(X===void 0)Y=new IU(J),$.set(K,[Y]);else if(W>=X.length)Y=new IU(J),X.push(Y);else Y=X[W];return Y}function Z(){$=new WeakMap}return{get:Q,dispose:Z}}var DR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kR=`uniform sampler2D shadow_pass;
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
}`,MR=[new S(1,0,0),new S(-1,0,0),new S(0,1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1)],CR=[new S(0,-1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1),new S(0,-1,0),new S(0,-1,0)],PU=new $9,IQ=new S,JY=new S;function IR(J,$,Q){let Z=new KJ,K=new O0,W=new O0,X=new c9,Y=new yX,H=new fX,U={},G=Q.maxTextureSize,F={[B7]:I6,[I6]:B7,[a9]:a9},N=new $6({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new O0},radius:{value:4}},vertexShader:DR,fragmentShader:kR}),q=N.clone();q.defines.HORIZONTAL_PASS=1;let O=new b9;O.setAttribute("position",new t9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new T0(O,N),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i7;let E=this.type;this.render=function(w,D,L){if(R.enabled===!1)return;if(R.autoUpdate===!1&&R.needsUpdate===!1)return;if(w.length===0)return;if(this.type===aH)t0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=i7;let I=J.getRenderTarget(),i=J.getActiveCubeFace(),h=J.getActiveMipmapLevel(),d=J.state;if(d.setBlending(Q8),d.buffers.depth.getReversed()===!0)d.buffers.color.setClear(0,0,0,0);else d.buffers.color.setClear(1,1,1,1);d.buffers.depth.setTest(!0),d.setScissorTest(!1);let Q0=E!==this.type;if(Q0)D.traverse(function(f){if(f.material)if(Array.isArray(f.material))f.material.forEach((y)=>y.needsUpdate=!0);else f.material.needsUpdate=!0});for(let f=0,y=w.length;f<y;f++){let p=w[f],v=p.shadow;if(v===void 0){t0("WebGLShadowMap:",p,"has no shadow.");continue}if(v.autoUpdate===!1&&v.needsUpdate===!1)continue;K.copy(v.mapSize);let r=v.getFrameExtents();if(K.multiply(r),W.copy(v.mapSize),K.x>G||K.y>G){if(K.x>G)W.x=Math.floor(G/r.x),K.x=W.x*r.x,v.mapSize.x=W.x;if(K.y>G)W.y=Math.floor(G/r.y),K.y=W.y*r.y,v.mapSize.y=W.y}let l=J.state.buffers.depth.getReversed();if(v.camera._reversedDepth=l,v.map===null||Q0===!0){if(v.map!==null){if(v.map.depthTexture!==null)v.map.depthTexture.dispose(),v.map.depthTexture=null;v.map.dispose()}if(this.type===J$){if(p.isPointLight){t0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}v.map=new X6(K.x,K.y,{format:JJ,type:V6,minFilter:L6,magFilter:L6,generateMipmaps:!1}),v.map.texture.name=p.name+".shadowMap",v.map.depthTexture=new XJ(K.x,K.y,r8),v.map.depthTexture.name=p.name+".shadowMapDepth",v.map.depthTexture.format=t7,v.map.depthTexture.compareFunction=null,v.map.depthTexture.minFilter=L8,v.map.depthTexture.magFilter=L8}else{if(p.isPointLight)v.map=new ZY(K.x),v.map.depthTexture=new zX(K.x,k7);else v.map=new X6(K.x,K.y),v.map.depthTexture=new XJ(K.x,K.y,k7);if(v.map.depthTexture.name=p.name+".shadowMap",v.map.depthTexture.format=t7,this.type===i7)v.map.depthTexture.compareFunction=l?oZ:iZ,v.map.depthTexture.minFilter=L6,v.map.depthTexture.magFilter=L6;else v.map.depthTexture.compareFunction=null,v.map.depthTexture.minFilter=L8,v.map.depthTexture.magFilter=L8}v.camera.updateProjectionMatrix()}if(v.map.isWebGLCubeRenderTarget!==!0&&(v.map.width!==K.x||v.map.height!==K.y))v.map.setSize(K.x,K.y);let J0=v.map.isWebGLCubeRenderTarget?6:v.getViewportCount();if(p.isPointLight!==!0)v.updateMatrices(p,L);for(let Y0=0;Y0<J0;Y0++){let I0=v.getCamera(Y0);if(p.isPointLight){let{camera:j,matrix:a}=v,U0=p.distance||j.far;if(U0!==j.far)j.far=U0,j.updateProjectionMatrix();IQ.setFromMatrixPosition(p.matrixWorld),j.position.copy(IQ),JY.copy(j.position),JY.add(MR[Y0]),j.up.copy(CR[Y0]),j.lookAt(JY),j.updateMatrixWorld(),a.makeTranslation(-IQ.x,-IQ.y,-IQ.z),PU.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),v._frustum.setFromProjectionMatrix(PU,j.coordinateSystem,j.reversedDepth)}if(v.map.isWebGLCubeRenderTarget)J.setRenderTarget(v.map,Y0),J.clear();else{if(Y0===0)J.setRenderTarget(v.map),J.clear();let j=v.getViewport(Y0);X.set(W.x*j.x,W.y*j.y,W.x*j.z,W.y*j.w),d.viewport(X)}Z=v.getFrustum(Y0),V(D,L,I0,p,this.type)}if(v.isPointLightShadow!==!0&&this.type===J$)z(v,L);v.needsUpdate=!1}E=this.type,R.needsUpdate=!1,J.setRenderTarget(I,i,h)};function z(w,D){let L=$.update(B);if(N.defines.VSM_SAMPLES!==w.blurSamples)N.defines.VSM_SAMPLES=w.blurSamples,q.defines.VSM_SAMPLES=w.blurSamples,N.needsUpdate=!0,q.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new X6(K.x,K.y,{format:JJ,type:V6});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);N.uniforms.shadow_pass.value=w.map.depthTexture,N.uniforms.resolution.value.set(w.map.width,w.map.height),N.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(D,null,L,N,B,null),q.uniforms.shadow_pass.value=w.mapPass.texture,q.uniforms.resolution.value.set(w.map.width,w.map.height),q.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(D,null,L,q,B,null)}function M(w,D,L,I){let i=null,h=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(h!==void 0)i=h;else if(i=L.isPointLight===!0?H:Y,J.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let d=i.uuid,Q0=D.uuid,f=U[d];if(f===void 0)f={},U[d]=f;let y=f[Q0];if(y===void 0)y=i.clone(),f[Q0]=y,D.addEventListener("dispose",T);i=y}if(i.visible=D.visible,i.wireframe=D.wireframe,I===J$)i.side=D.shadowSide!==null?D.shadowSide:D.side;else i.side=D.shadowSide!==null?D.shadowSide:F[D.side];if(i.alphaMap=D.alphaMap,i.alphaTest=D.alphaToCoverage===!0?0.5:D.alphaTest,i.map=D.map,i.clipShadows=D.clipShadows,i.clippingPlanes=D.clippingPlanes,i.clipIntersection=D.clipIntersection,i.displacementMap=D.displacementMap,i.displacementScale=D.displacementScale,i.displacementBias=D.displacementBias,i.wireframeLinewidth=D.wireframeLinewidth,i.linewidth=D.linewidth,L.isPointLight===!0&&i.isMeshDistanceMaterial===!0){let d=J.properties.get(i);d.light=L}return i}function V(w,D,L,I,i){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&i===J$)&&(!w.frustumCulled||w.intersectsFrustum(Z))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);let Q0=$.update(w),f=w.material;if(Array.isArray(f)){let y=Q0.groups;for(let p=0,v=y.length;p<v;p++){let r=y[p],l=f[r.materialIndex];if(l&&l.visible){let J0=M(w,l,I,i);w.onBeforeShadow(J,w,D,L,Q0,J0,r),J.renderBufferDirect(L,null,Q0,J0,w,r),w.onAfterShadow(J,w,D,L,Q0,J0,r)}}}else if(f.visible){let y=M(w,f,I,i);w.onBeforeShadow(J,w,D,L,Q0,y,null),J.renderBufferDirect(L,null,Q0,y,w,null),w.onAfterShadow(J,w,D,L,Q0,y,null)}}}let d=w.children;for(let Q0=0,f=d.length;Q0<f;Q0++)V(d[Q0],D,L,I,i)}function T(w){w.target.removeEventListener("dispose",T);for(let L in U){let I=U[L],i=w.target.uuid;if(i in I)I[i].dispose(),delete I[i]}}}function PR(J,$){function Q(){let o=!1,y0=new c9,E0=null,v0=new c9(0,0,0,0);return{setMask:function(m0){if(E0!==m0&&!o)J.colorMask(m0,m0,m0,m0),E0=m0},setLocked:function(m0){o=m0},setClear:function(m0,M0,f0,Y9,l9){if(l9===!0)m0*=Y9,M0*=Y9,f0*=Y9;if(y0.set(m0,M0,f0,Y9),v0.equals(y0)===!1)J.clearColor(m0,M0,f0,Y9),v0.copy(y0)},reset:function(){o=!1,E0=null,v0.set(-1,0,0,0)}}}function Z(){let o=!1,y0=!1,E0=null,v0=null,m0=null;return{setReversed:function(M0){if(y0!==M0){let f0=$.get("EXT_clip_control");if(M0)f0.clipControlEXT(f0.LOWER_LEFT_EXT,f0.ZERO_TO_ONE_EXT);else f0.clipControlEXT(f0.LOWER_LEFT_EXT,f0.NEGATIVE_ONE_TO_ONE_EXT);y0=M0;let Y9=m0;m0=null,this.setClear(Y9)}},getReversed:function(){return y0},setTest:function(M0){if(M0)x(J.DEPTH_TEST);else n(J.DEPTH_TEST)},setMask:function(M0){if(E0!==M0&&!o)J.depthMask(M0),E0=M0},setFunc:function(M0){if(y0)M0=d5[M0];if(v0!==M0){switch(M0){case L5:J.depthFunc(J.NEVER);break;case V5:J.depthFunc(J.ALWAYS);break;case B5:J.depthFunc(J.LESS);break;case jW:J.depthFunc(J.LEQUAL);break;case D5:J.depthFunc(J.EQUAL);break;case k5:J.depthFunc(J.GEQUAL);break;case M5:J.depthFunc(J.GREATER);break;case C5:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}v0=M0}},setLocked:function(M0){o=M0},setClear:function(M0){if(m0!==M0){if(m0=M0,y0)M0=1-M0;J.clearDepth(M0)}},reset:function(){o=!1,E0=null,v0=null,m0=null,y0=!1}}}function K(){let o=!1,y0=null,E0=null,v0=null,m0=null,M0=null,f0=null,Y9=null,l9=null;return{setTest:function(y9){if(!o)if(y9)x(J.STENCIL_TEST);else n(J.STENCIL_TEST)},setMask:function(y9){if(y0!==y9&&!o)J.stencilMask(y9),y0=y9},setFunc:function(y9,r6,N8){if(E0!==y9||v0!==r6||m0!==N8)J.stencilFunc(y9,r6,N8),E0=y9,v0=r6,m0=N8},setOp:function(y9,r6,N8){if(M0!==y9||f0!==r6||Y9!==N8)J.stencilOp(y9,r6,N8),M0=y9,f0=r6,Y9=N8},setLocked:function(y9){o=y9},setClear:function(y9){if(l9!==y9)J.clearStencil(y9),l9=y9},reset:function(){o=!1,y0=null,E0=null,v0=null,m0=null,M0=null,f0=null,Y9=null,l9=null}}}let W=new Q,X=new Z,Y=new K,H=new WeakMap,U=new WeakMap,G={},F={},N={},q=new WeakMap,O=[],B=null,R=!1,E=null,z=null,M=null,V=null,T=null,w=null,D=null,L=new w0(0,0,0),I=0,i=!1,h=null,d=null,Q0=null,f=null,y=null,p=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),v=!1,r=0,l=J.getParameter(J.VERSION);if(l.indexOf("WebGL")!==-1)r=parseFloat(/^WebGL (\d)/.exec(l)[1]),v=r>=1;else if(l.indexOf("OpenGL ES")!==-1)r=parseFloat(/^OpenGL ES (\d)/.exec(l)[1]),v=r>=2;let J0=null,Y0={},I0=J.getParameter(J.SCISSOR_BOX),j=J.getParameter(J.VIEWPORT),a=new c9().fromArray(I0),U0=new c9().fromArray(j);function b(o,y0,E0,v0){let m0=new Uint8Array(4),M0=J.createTexture();J.bindTexture(o,M0),J.texParameteri(o,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(o,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let f0=0;f0<E0;f0++)if(o===J.TEXTURE_3D||o===J.TEXTURE_2D_ARRAY)J.texImage3D(y0,0,J.RGBA,1,1,v0,0,J.RGBA,J.UNSIGNED_BYTE,m0);else J.texImage2D(y0+f0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,m0);return M0}let C={};C[J.TEXTURE_2D]=b(J.TEXTURE_2D,J.TEXTURE_2D,1),C[J.TEXTURE_CUBE_MAP]=b(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[J.TEXTURE_2D_ARRAY]=b(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),C[J.TEXTURE_3D]=b(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),x(J.DEPTH_TEST),X.setFunc(jW),X9(!1),a0(_W),x(J.CULL_FACE),V0(Q8);function x(o){if(G[o]!==!0)J.enable(o),G[o]=!0}function n(o){if(G[o]!==!1)J.disable(o),G[o]=!1}function K0(o,y0){if(N[o]!==y0){if(J.bindFramebuffer(o,y0),N[o]=y0,o===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=y0;if(o===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=y0;return!0}return!1}function $0(o,y0){let E0=O,v0=!1;if(o){if(E0=q.get(y0),E0===void 0)E0=[],q.set(y0,E0);let m0=o.textures;if(E0.length!==m0.length||E0[0]!==J.COLOR_ATTACHMENT0){for(let M0=0,f0=m0.length;M0<f0;M0++)E0[M0]=J.COLOR_ATTACHMENT0+M0;E0.length=m0.length,v0=!0}}else if(E0[0]!==J.BACK)E0[0]=J.BACK,v0=!0;if(v0)J.drawBuffers(E0)}function D0(o){if(B!==o)return J.useProgram(o),B=o,!0;return!1}let L0={[$$]:J.FUNC_ADD,[tH]:J.FUNC_SUBTRACT,[eH]:J.FUNC_REVERSE_SUBTRACT};L0[J5]=J.MIN,L0[$5]=J.MAX;let z0={[Q5]:J.ZERO,[Z5]:J.ONE,[K5]:J.SRC_COLOR,[X5]:J.SRC_ALPHA,[F5]:J.SRC_ALPHA_SATURATE,[N5]:J.DST_COLOR,[H5]:J.DST_ALPHA,[W5]:J.ONE_MINUS_SRC_COLOR,[Y5]:J.ONE_MINUS_SRC_ALPHA,[G5]:J.ONE_MINUS_DST_COLOR,[U5]:J.ONE_MINUS_DST_ALPHA,[E5]:J.CONSTANT_COLOR,[q5]:J.ONE_MINUS_CONSTANT_COLOR,[O5]:J.CONSTANT_ALPHA,[R5]:J.ONE_MINUS_CONSTANT_ALPHA};function V0(o,y0,E0,v0,m0,M0,f0,Y9,l9,y9){if(o===Q8){if(R===!0)n(J.BLEND),R=!1;return}if(R===!1)x(J.BLEND),R=!0;if(o!==rH){if(o!==E||y9!==i){if(z!==$$||T!==$$)J.blendEquation(J.FUNC_ADD),z=$$,T=$$;if(y9)switch(o){case e$:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case w8:J.blendFunc(J.ONE,J.ONE);break;case SW:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case wW:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:Z9("WebGLState: Invalid blending: ",o);break}else switch(o){case e$:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case w8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case SW:Z9("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wW:Z9("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Z9("WebGLState: Invalid blending: ",o);break}M=null,V=null,w=null,D=null,L.set(0,0,0),I=0,E=o,i=y9}return}if(m0=m0||y0,M0=M0||E0,f0=f0||v0,y0!==z||m0!==T)J.blendEquationSeparate(L0[y0],L0[m0]),z=y0,T=m0;if(E0!==M||v0!==V||M0!==w||f0!==D)J.blendFuncSeparate(z0[E0],z0[v0],z0[M0],z0[f0]),M=E0,V=v0,w=M0,D=f0;if(Y9.equals(L)===!1||l9!==I)J.blendColor(Y9.r,Y9.g,Y9.b,l9),L.copy(Y9),I=l9;E=o,i=!1}function u0(o,y0){o.side===a9?n(J.CULL_FACE):x(J.CULL_FACE);let E0=o.side===I6;if(y0)E0=!E0;X9(E0),o.blending===e$&&o.transparent===!1?V0(Q8):V0(o.blending,o.blendEquation,o.blendSrc,o.blendDst,o.blendEquationAlpha,o.blendSrcAlpha,o.blendDstAlpha,o.blendColor,o.blendAlpha,o.premultipliedAlpha),X.setFunc(o.depthFunc),X.setTest(o.depthTest),X.setMask(o.depthWrite),W.setMask(o.colorWrite);let v0=o.stencilWrite;if(Y.setTest(v0),v0)Y.setMask(o.stencilWriteMask),Y.setFunc(o.stencilFunc,o.stencilRef,o.stencilFuncMask),Y.setOp(o.stencilFail,o.stencilZFail,o.stencilZPass);S9(o.polygonOffset,o.polygonOffsetFactor,o.polygonOffsetUnits),o.alphaToCoverage===!0?x(J.SAMPLE_ALPHA_TO_COVERAGE):n(J.SAMPLE_ALPHA_TO_COVERAGE)}function X9(o){if(h!==o){if(o)J.frontFace(J.CW);else J.frontFace(J.CCW);h=o}}function a0(o){if(o!==iH){if(x(J.CULL_FACE),o!==d)if(o===_W)J.cullFace(J.BACK);else if(o===oH)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else n(J.CULL_FACE);d=o}function k9(o){if(o!==Q0){if(v)J.lineWidth(o);Q0=o}}function S9(o,y0,E0){if(o){if(x(J.POLYGON_OFFSET_FILL),f!==y0||y!==E0){if(f=y0,y=E0,X.getReversed())y0=-y0;J.polygonOffset(y0,E0)}}else n(J.POLYGON_OFFSET_FILL)}function N9(o){if(o)x(J.SCISSOR_TEST);else n(J.SCISSOR_TEST)}function m(o){if(o===void 0)o=J.TEXTURE0+p-1;if(J0!==o)J.activeTexture(o),J0=o}function m9(o,y0,E0){if(E0===void 0)if(J0===null)E0=J.TEXTURE0+p-1;else E0=J0;let v0=Y0[E0];if(v0===void 0)v0={type:void 0,texture:void 0},Y0[E0]=v0;if(v0.type!==o||v0.texture!==y0){if(J0!==E0)J.activeTexture(E0),J0=E0;J.bindTexture(o,y0||C[o]),v0.type=o,v0.texture=y0}}function P9(){let o=Y0[J0];if(o!==void 0&&o.type!==void 0)J.bindTexture(o.type,null),o.type=void 0,o.texture=void 0}function C9(){try{J.compressedTexImage2D(...arguments)}catch(o){Z9("WebGLState:",o)}}function _(){try{J.compressedTexImage3D(...arguments)}catch(o){Z9("WebGLState:",o)}}function P(){try{J.texSubImage2D(...arguments)}catch(o){Z9("WebGLState:",o)}}function u(){try{J.texSubImage3D(...arguments)}catch(o){Z9("WebGLState:",o)}}function W0(){try{J.compressedTexSubImage2D(...arguments)}catch(o){Z9("WebGLState:",o)}}function B0(){try{J.compressedTexSubImage3D(...arguments)}catch(o){Z9("WebGLState:",o)}}function A0(){try{J.texStorage2D(...arguments)}catch(o){Z9("WebGLState:",o)}}function b0(){try{J.texStorage3D(...arguments)}catch(o){Z9("WebGLState:",o)}}function G0(){try{J.texImage2D(...arguments)}catch(o){Z9("WebGLState:",o)}}function R0(){try{J.texImage3D(...arguments)}catch(o){Z9("WebGLState:",o)}}function h0(o){if(F[o]!==void 0)return F[o];else return J.getParameter(o)}function r0(o,y0){if(F[o]!==y0)J.pixelStorei(o,y0),F[o]=y0}function j0(o){if(a.equals(o)===!1)J.scissor(o.x,o.y,o.z,o.w),a.copy(o)}function k0(o){if(U0.equals(o)===!1)J.viewport(o.x,o.y,o.z,o.w),U0.copy(o)}function d0(o,y0){let E0=U.get(y0);if(E0===void 0)E0=new WeakMap,U.set(y0,E0);let v0=E0.get(o);if(v0===void 0)v0=J.getUniformBlockIndex(y0,o.name),E0.set(o,v0)}function J9(o,y0){let v0=U.get(y0).get(o);if(H.get(y0)!==v0)J.uniformBlockBinding(y0,v0,o.__bindingPointIndex),H.set(y0,v0)}function z9(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},F={},J0=null,Y0={},N={},q=new WeakMap,O=[],B=null,R=!1,E=null,z=null,M=null,V=null,T=null,w=null,D=null,L=new w0(0,0,0),I=0,i=!1,h=null,d=null,Q0=null,f=null,y=null,a.set(0,0,J.canvas.width,J.canvas.height),U0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:x,disable:n,bindFramebuffer:K0,drawBuffers:$0,useProgram:D0,setBlending:V0,setMaterial:u0,setFlipSided:X9,setCullFace:a0,setLineWidth:k9,setPolygonOffset:S9,setScissorTest:N9,activeTexture:m,bindTexture:m9,unbindTexture:P9,compressedTexImage2D:C9,compressedTexImage3D:_,texImage2D:G0,texImage3D:R0,pixelStorei:r0,getParameter:h0,updateUBOMapping:d0,uniformBlockBinding:J9,texStorage2D:A0,texStorage3D:b0,texSubImage2D:P,texSubImage3D:u,compressedTexSubImage2D:W0,compressedTexSubImage3D:B0,scissor:j0,viewport:k0,reset:z9}}function zR(J,$,Q,Z,K,W,X){let Y=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new O0,G=new WeakMap,F=new Set,N,q=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(_){}function B(_,P){return O?new OffscreenCanvas(_,P):aJ("canvas")}function R(_,P,u){let W0=1,B0=C9(_);if(B0.width>u||B0.height>u)W0=u/Math.max(B0.width,B0.height);if(W0<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let A0=Math.floor(W0*B0.width),b0=Math.floor(W0*B0.height);if(N===void 0)N=B(A0,b0);let G0=P?B(A0,b0):N;return G0.width=A0,G0.height=b0,G0.getContext("2d").drawImage(_,0,0,A0,b0),t0("WebGLRenderer: Texture has been resized from ("+B0.width+"x"+B0.height+") to ("+A0+"x"+b0+")."),G0}else{if("data"in _)t0("WebGLRenderer: Image in DataTexture is too big ("+B0.width+"x"+B0.height+").");return _}return _}function E(_){return _.generateMipmaps}function z(_){J.generateMipmap(_)}function M(_){if(_.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(_.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(_,P,u,W0,B0,A0=!1){if(_!==null){if(J[_]!==void 0)return J[_];t0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let b0;if(W0){if(b0=$.get("EXT_texture_norm16"),!b0)t0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let G0=P;if(P===J.RED){if(u===J.FLOAT)G0=J.R32F;if(u===J.HALF_FLOAT)G0=J.R16F;if(u===J.UNSIGNED_BYTE)G0=J.R8;if(u===J.UNSIGNED_SHORT&&b0)G0=b0.R16_EXT;if(u===J.SHORT&&b0)G0=b0.R16_SNORM_EXT}if(P===J.RED_INTEGER){if(u===J.UNSIGNED_BYTE)G0=J.R8UI;if(u===J.UNSIGNED_SHORT)G0=J.R16UI;if(u===J.UNSIGNED_INT)G0=J.R32UI;if(u===J.BYTE)G0=J.R8I;if(u===J.SHORT)G0=J.R16I;if(u===J.INT)G0=J.R32I}if(P===J.RG){if(u===J.FLOAT)G0=J.RG32F;if(u===J.HALF_FLOAT)G0=J.RG16F;if(u===J.UNSIGNED_BYTE)G0=J.RG8;if(u===J.UNSIGNED_SHORT&&b0)G0=b0.RG16_EXT;if(u===J.SHORT&&b0)G0=b0.RG16_SNORM_EXT}if(P===J.RG_INTEGER){if(u===J.UNSIGNED_BYTE)G0=J.RG8UI;if(u===J.UNSIGNED_SHORT)G0=J.RG16UI;if(u===J.UNSIGNED_INT)G0=J.RG32UI;if(u===J.BYTE)G0=J.RG8I;if(u===J.SHORT)G0=J.RG16I;if(u===J.INT)G0=J.RG32I}if(P===J.RGB_INTEGER){if(u===J.UNSIGNED_BYTE)G0=J.RGB8UI;if(u===J.UNSIGNED_SHORT)G0=J.RGB16UI;if(u===J.UNSIGNED_INT)G0=J.RGB32UI;if(u===J.BYTE)G0=J.RGB8I;if(u===J.SHORT)G0=J.RGB16I;if(u===J.INT)G0=J.RGB32I}if(P===J.RGBA_INTEGER){if(u===J.UNSIGNED_BYTE)G0=J.RGBA8UI;if(u===J.UNSIGNED_SHORT)G0=J.RGBA16UI;if(u===J.UNSIGNED_INT)G0=J.RGBA32UI;if(u===J.BYTE)G0=J.RGBA8I;if(u===J.SHORT)G0=J.RGBA16I;if(u===J.INT)G0=J.RGBA32I}if(P===J.RGB){if(u===J.UNSIGNED_SHORT&&b0)G0=b0.RGB16_EXT;if(u===J.SHORT&&b0)G0=b0.RGB16_SNORM_EXT;if(u===J.UNSIGNED_INT_5_9_9_9_REV)G0=J.RGB9_E5;if(u===J.UNSIGNED_INT_10F_11F_11F_REV)G0=J.R11F_G11F_B10F}if(P===J.RGBA){let R0=A0?BX:V9.getTransfer(B0);if(u===J.FLOAT)G0=J.RGBA32F;if(u===J.HALF_FLOAT)G0=J.RGBA16F;if(u===J.UNSIGNED_BYTE)G0=R0===n9?J.SRGB8_ALPHA8:J.RGBA8;if(u===J.UNSIGNED_SHORT&&b0)G0=b0.RGBA16_EXT;if(u===J.SHORT&&b0)G0=b0.RGBA16_SNORM_EXT;if(u===J.UNSIGNED_SHORT_4_4_4_4)G0=J.RGBA4;if(u===J.UNSIGNED_SHORT_5_5_5_1)G0=J.RGB5_A1}if(G0===J.R16F||G0===J.R32F||G0===J.RG16F||G0===J.RG32F||G0===J.RGBA16F||G0===J.RGBA32F)$.get("EXT_color_buffer_float");return G0}function T(_,P){let u;if(_){if(P===null||P===k7||P===W$)u=J.DEPTH24_STENCIL8;else if(P===r8)u=J.DEPTH32F_STENCIL8;else if(P===YQ)u=J.DEPTH24_STENCIL8,t0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(P===null||P===k7||P===W$)u=J.DEPTH_COMPONENT24;else if(P===r8)u=J.DEPTH_COMPONENT32F;else if(P===YQ)u=J.DEPTH_COMPONENT16;return u}function w(_,P){if(E(_)===!0||_.isFramebufferTexture&&_.minFilter!==L8&&_.minFilter!==L6)return Math.log2(Math.max(P.width,P.height))+1;else if(_.mipmaps!==void 0&&_.mipmaps.length>0)return _.mipmaps.length;else if(_.isCompressedTexture&&Array.isArray(_.image))return P.mipmaps.length;else return 1}function D(_){let P=_.target;if(P.removeEventListener("dispose",D),I(P),P.isVideoTexture)G.delete(P);if(P.isHTMLTexture)F.delete(P)}function L(_){let P=_.target;P.removeEventListener("dispose",L),h(P)}function I(_){let P=Z.get(_);if(P.__webglInit===void 0)return;let u=_.source,W0=q.get(u);if(W0){let B0=W0[P.__cacheKey];if(B0.usedTimes--,B0.usedTimes===0)i(_);if(Object.keys(W0).length===0)q.delete(u)}Z.remove(_)}function i(_){let P=Z.get(_);J.deleteTexture(P.__webglTexture);let u=_.source,W0=q.get(u);delete W0[P.__cacheKey],X.memory.textures--}function h(_){let P=Z.get(_);if(_.depthTexture)_.depthTexture.dispose(),Z.remove(_.depthTexture);if(_.isWebGLCubeRenderTarget)for(let W0=0;W0<6;W0++){if(Array.isArray(P.__webglFramebuffer[W0]))for(let B0=0;B0<P.__webglFramebuffer[W0].length;B0++)J.deleteFramebuffer(P.__webglFramebuffer[W0][B0]);else J.deleteFramebuffer(P.__webglFramebuffer[W0]);if(P.__webglDepthbuffer)J.deleteRenderbuffer(P.__webglDepthbuffer[W0])}else{if(Array.isArray(P.__webglFramebuffer))for(let W0=0;W0<P.__webglFramebuffer.length;W0++)J.deleteFramebuffer(P.__webglFramebuffer[W0]);else J.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer)J.deleteRenderbuffer(P.__webglDepthbuffer);if(P.__webglMultisampledFramebuffer)J.deleteFramebuffer(P.__webglMultisampledFramebuffer);if(P.__webglColorRenderbuffer){for(let W0=0;W0<P.__webglColorRenderbuffer.length;W0++)if(P.__webglColorRenderbuffer[W0])J.deleteRenderbuffer(P.__webglColorRenderbuffer[W0])}if(P.__webglDepthRenderbuffer)J.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let u=_.textures;for(let W0=0,B0=u.length;W0<B0;W0++){let A0=Z.get(u[W0]);if(A0.__webglTexture)J.deleteTexture(A0.__webglTexture),X.memory.textures--;Z.remove(u[W0])}Z.remove(_)}let d=0;function Q0(){d=0}function f(){return d}function y(_){d=_}function p(){let _=d;if(_>=K.maxTextures)t0("WebGLTextures: Trying to use "+(_+1)+" texture units while this GPU supports only "+K.maxTextures);return d+=1,_}function v(_){let P=[];return P.push(_.wrapS),P.push(_.wrapT),P.push(_.wrapR||0),P.push(_.magFilter),P.push(_.minFilter),P.push(_.anisotropy),P.push(_.internalFormat),P.push(_.format),P.push(_.type),P.push(_.generateMipmaps),P.push(_.premultiplyAlpha),P.push(_.flipY),P.push(_.unpackAlignment),P.push(_.colorSpace),P.join()}function r(_,P){let u=Z.get(_);if(_.isVideoTexture)m9(_);if(_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&u.__version!==_.version){let W0=_.image;if(W0===null)t0("WebGLRenderer: Texture marked for update but no image data found.");else if(W0.complete===!1)t0("WebGLRenderer: Texture marked for update but image is incomplete");else{n(u,_,P);return}}else if(_.isExternalTexture)u.__webglTexture=_.sourceTexture?_.sourceTexture:null;Q.bindTexture(J.TEXTURE_2D,u.__webglTexture,J.TEXTURE0+P)}function l(_,P){let u=Z.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&u.__version!==_.version){n(u,_,P);return}else if(_.isExternalTexture)u.__webglTexture=_.sourceTexture?_.sourceTexture:null;Q.bindTexture(J.TEXTURE_2D_ARRAY,u.__webglTexture,J.TEXTURE0+P)}function J0(_,P){let u=Z.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&u.__version!==_.version){n(u,_,P);return}Q.bindTexture(J.TEXTURE_3D,u.__webglTexture,J.TEXTURE0+P)}function Y0(_,P){let u=Z.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&u.__version!==_.version){K0(u,_,P);return}Q.bindTexture(J.TEXTURE_CUBE_MAP,u.__webglTexture,J.TEXTURE0+P)}let I0={[D7]:J.REPEAT,[Z$]:J.CLAMP_TO_EDGE,[gZ]:J.MIRRORED_REPEAT},j={[L8]:J.NEAREST,[pZ]:J.NEAREST_MIPMAP_NEAREST,[r7]:J.NEAREST_MIPMAP_LINEAR,[L6]:J.LINEAR,[K$]:J.LINEAR_MIPMAP_NEAREST,[j8]:J.LINEAR_MIPMAP_LINEAR},a={[v5]:J.NEVER,[p5]:J.ALWAYS,[b5]:J.LESS,[iZ]:J.LEQUAL,[h5]:J.EQUAL,[oZ]:J.GEQUAL,[x5]:J.GREATER,[g5]:J.NOTEQUAL};function U0(_,P){if(P.type===r8&&$.has("OES_texture_float_linear")===!1&&(P.magFilter===L6||P.magFilter===K$||P.magFilter===r7||P.magFilter===j8||P.minFilter===L6||P.minFilter===K$||P.minFilter===r7||P.minFilter===j8))t0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(_,J.TEXTURE_WRAP_S,I0[P.wrapS]),J.texParameteri(_,J.TEXTURE_WRAP_T,I0[P.wrapT]),_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texParameteri(_,J.TEXTURE_WRAP_R,I0[P.wrapR]);if(J.texParameteri(_,J.TEXTURE_MAG_FILTER,j[P.magFilter]),J.texParameteri(_,J.TEXTURE_MIN_FILTER,j[P.minFilter]),P.compareFunction)J.texParameteri(_,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(_,J.TEXTURE_COMPARE_FUNC,a[P.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===L8)return;if(P.minFilter!==r7&&P.minFilter!==j8)return;if(P.type===r8&&$.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||Z.get(P).__currentAnisotropy){let u=$.get("EXT_texture_filter_anisotropic");J.texParameterf(_,u.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,K.getMaxAnisotropy())),Z.get(P).__currentAnisotropy=P.anisotropy}}}function b(_,P){let u=!1;if(_.__webglInit===void 0)_.__webglInit=!0,P.addEventListener("dispose",D);let W0=P.source,B0=q.get(W0);if(B0===void 0)B0={},q.set(W0,B0);let A0=v(P);if(A0!==_.__cacheKey){if(B0[A0]===void 0)B0[A0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,u=!0;B0[A0].usedTimes++;let b0=B0[_.__cacheKey];if(b0!==void 0){if(B0[_.__cacheKey].usedTimes--,b0.usedTimes===0)i(P)}_.__cacheKey=A0,_.__webglTexture=B0[A0].texture}return u}function C(_,P,u){return Math.floor(Math.floor(_/u)/P)}function x(_,P,u,W0){let A0=_.updateRanges;if(A0.length===0)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,P.width,P.height,u,W0,P.data);else{A0.sort((r0,j0)=>r0.start-j0.start);let b0=0;for(let r0=1;r0<A0.length;r0++){let j0=A0[b0],k0=A0[r0],d0=j0.start+j0.count,J9=C(k0.start,P.width,4),z9=C(j0.start,P.width,4);if(k0.start<=d0+1&&J9===z9&&C(k0.start+k0.count-1,P.width,4)===J9)j0.count=Math.max(j0.count,k0.start+k0.count-j0.start);else++b0,A0[b0]=k0}A0.length=b0+1;let G0=Q.getParameter(J.UNPACK_ROW_LENGTH),R0=Q.getParameter(J.UNPACK_SKIP_PIXELS),h0=Q.getParameter(J.UNPACK_SKIP_ROWS);Q.pixelStorei(J.UNPACK_ROW_LENGTH,P.width);for(let r0=0,j0=A0.length;r0<j0;r0++){let k0=A0[r0],d0=Math.floor(k0.start/4),J9=Math.ceil(k0.count/4),z9=d0%P.width,o=Math.floor(d0/P.width),y0=J9,E0=1;Q.pixelStorei(J.UNPACK_SKIP_PIXELS,z9),Q.pixelStorei(J.UNPACK_SKIP_ROWS,o),Q.texSubImage2D(J.TEXTURE_2D,0,z9,o,y0,1,u,W0,P.data)}_.clearUpdateRanges(),Q.pixelStorei(J.UNPACK_ROW_LENGTH,G0),Q.pixelStorei(J.UNPACK_SKIP_PIXELS,R0),Q.pixelStorei(J.UNPACK_SKIP_ROWS,h0)}}function n(_,P,u){let W0=J.TEXTURE_2D;if(P.isDataArrayTexture||P.isCompressedArrayTexture)W0=J.TEXTURE_2D_ARRAY;if(P.isData3DTexture)W0=J.TEXTURE_3D;let B0=b(_,P),A0=P.source;Q.bindTexture(W0,_.__webglTexture,J.TEXTURE0+u);let b0=Z.get(A0);if(A0.version!==b0.__version||B0===!0){if(Q.activeTexture(J.TEXTURE0+u),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let E0=V9.getPrimaries(V9.workingColorSpace),v0=P.colorSpace===$J?null:V9.getPrimaries(P.colorSpace),m0=P.colorSpace===$J||E0===v0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,P.flipY),Q.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),Q.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,m0)}Q.pixelStorei(J.UNPACK_ALIGNMENT,P.unpackAlignment);let R0=R(P.image,!1,K.maxTextureSize);R0=P9(P,R0);let h0=W.convert(P.format,P.colorSpace),r0=W.convert(P.type),j0=V(P.internalFormat,h0,r0,P.normalized,P.colorSpace,P.isVideoTexture);U0(W0,P);let k0,d0=P.mipmaps,J9=P.isVideoTexture!==!0,z9=b0.__version===void 0||B0===!0,o=A0.dataReady,y0=w(P,R0);if(P.isDepthTexture){if(j0=T(P.format===e7,P.type),z9)if(J9)Q.texStorage2D(J.TEXTURE_2D,1,j0,R0.width,R0.height);else Q.texImage2D(J.TEXTURE_2D,0,j0,R0.width,R0.height,0,h0,r0,null)}else if(P.isDataTexture)if(d0.length>0){if(J9&&z9)Q.texStorage2D(J.TEXTURE_2D,y0,j0,d0[0].width,d0[0].height);for(let E0=0,v0=d0.length;E0<v0;E0++)if(k0=d0[E0],J9){if(o)Q.texSubImage2D(J.TEXTURE_2D,E0,0,0,k0.width,k0.height,h0,r0,k0.data)}else Q.texImage2D(J.TEXTURE_2D,E0,j0,k0.width,k0.height,0,h0,r0,k0.data);P.generateMipmaps=!1}else if(J9){if(z9)Q.texStorage2D(J.TEXTURE_2D,y0,j0,R0.width,R0.height);if(o)x(P,R0,h0,r0)}else Q.texImage2D(J.TEXTURE_2D,0,j0,R0.width,R0.height,0,h0,r0,R0.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){if(J9&&z9)Q.texStorage3D(J.TEXTURE_2D_ARRAY,y0,j0,d0[0].width,d0[0].height,R0.depth);for(let E0=0,v0=d0.length;E0<v0;E0++)if(k0=d0[E0],P.format!==y8)if(h0!==null)if(J9){if(o)if(P.layerUpdates.size>0){let m0=iX(k0.width,k0.height,P.format,P.type);for(let M0 of P.layerUpdates){let f0=k0.data.subarray(M0*m0/k0.data.BYTES_PER_ELEMENT,(M0+1)*m0/k0.data.BYTES_PER_ELEMENT);Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,E0,0,0,M0,k0.width,k0.height,1,h0,f0)}}else Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,E0,0,0,0,k0.width,k0.height,R0.depth,h0,k0.data)}else Q.compressedTexImage3D(J.TEXTURE_2D_ARRAY,E0,j0,k0.width,k0.height,R0.depth,0,k0.data,0,0);else t0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(J9){if(o)Q.texSubImage3D(J.TEXTURE_2D_ARRAY,E0,0,0,0,k0.width,k0.height,R0.depth,h0,r0,k0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,E0,j0,k0.width,k0.height,R0.depth,0,h0,r0,k0.data);if(P.layerUpdates.size>0)P.clearLayerUpdates()}else{if(J9&&z9)Q.texStorage2D(J.TEXTURE_2D,y0,j0,d0[0].width,d0[0].height);for(let E0=0,v0=d0.length;E0<v0;E0++)if(k0=d0[E0],P.format!==y8)if(h0!==null)if(J9){if(o)Q.compressedTexSubImage2D(J.TEXTURE_2D,E0,0,0,k0.width,k0.height,h0,k0.data)}else Q.compressedTexImage2D(J.TEXTURE_2D,E0,j0,k0.width,k0.height,0,k0.data);else t0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(J9){if(o)Q.texSubImage2D(J.TEXTURE_2D,E0,0,0,k0.width,k0.height,h0,r0,k0.data)}else Q.texImage2D(J.TEXTURE_2D,E0,j0,k0.width,k0.height,0,h0,r0,k0.data)}else if(P.isDataArrayTexture)if(J9){if(z9)Q.texStorage3D(J.TEXTURE_2D_ARRAY,y0,j0,R0.width,R0.height,R0.depth);if(o)if(P.layerUpdates.size>0){let E0=iX(R0.width,R0.height,P.format,P.type);for(let v0 of P.layerUpdates){let m0=R0.data.subarray(v0*E0/R0.data.BYTES_PER_ELEMENT,(v0+1)*E0/R0.data.BYTES_PER_ELEMENT);Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,v0,R0.width,R0.height,1,h0,r0,m0)}P.clearLayerUpdates()}else Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,R0.width,R0.height,R0.depth,h0,r0,R0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,0,j0,R0.width,R0.height,R0.depth,0,h0,r0,R0.data);else if(P.isData3DTexture)if(J9){if(z9)Q.texStorage3D(J.TEXTURE_3D,y0,j0,R0.width,R0.height,R0.depth);if(o)Q.texSubImage3D(J.TEXTURE_3D,0,0,0,0,R0.width,R0.height,R0.depth,h0,r0,R0.data)}else Q.texImage3D(J.TEXTURE_3D,0,j0,R0.width,R0.height,R0.depth,0,h0,r0,R0.data);else if(P.isFramebufferTexture){if(z9)if(J9)Q.texStorage2D(J.TEXTURE_2D,y0,j0,R0.width,R0.height);else{let{width:E0,height:v0}=R0;for(let m0=0;m0<y0;m0++)Q.texImage2D(J.TEXTURE_2D,m0,j0,E0,v0,0,h0,r0,null),E0>>=1,v0>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in J){let E0=J.canvas;if(!E0.hasAttribute("layoutsubtree"))E0.setAttribute("layoutsubtree","true");if(R0.parentNode!==E0){E0.appendChild(R0),F.add(P),E0.onpaint=(v0)=>{let m0=v0.changedElements;for(let M0 of F)if(m0.includes(M0.image))M0.needsUpdate=!0},E0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,R0);else{let{RGBA:m0,RGBA:M0,UNSIGNED_BYTE:f0}=J;J.texElementImage2D(J.TEXTURE_2D,0,m0,M0,f0,R0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(d0.length>0){if(J9&&z9){let E0=C9(d0[0]);Q.texStorage2D(J.TEXTURE_2D,y0,j0,E0.width,E0.height)}for(let E0=0,v0=d0.length;E0<v0;E0++)if(k0=d0[E0],J9){if(o)Q.texSubImage2D(J.TEXTURE_2D,E0,0,0,h0,r0,k0)}else Q.texImage2D(J.TEXTURE_2D,E0,j0,h0,r0,k0);P.generateMipmaps=!1}else if(J9){if(z9){let E0=C9(R0);Q.texStorage2D(J.TEXTURE_2D,y0,j0,E0.width,E0.height)}if(o)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,h0,r0,R0)}else Q.texImage2D(J.TEXTURE_2D,0,j0,h0,r0,R0);if(E(P))z(W0);if(b0.__version=A0.version,P.onUpdate)P.onUpdate(P)}_.__version=P.version}function K0(_,P,u){if(P.image.length!==6)return;let W0=b(_,P),B0=P.source;Q.bindTexture(J.TEXTURE_CUBE_MAP,_.__webglTexture,J.TEXTURE0+u);let A0=Z.get(B0);if(B0.version!==A0.__version||W0===!0){Q.activeTexture(J.TEXTURE0+u);let b0=V9.getPrimaries(V9.workingColorSpace),G0=P.colorSpace===$J?null:V9.getPrimaries(P.colorSpace),R0=P.colorSpace===$J||b0===G0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,P.flipY),Q.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),Q.pixelStorei(J.UNPACK_ALIGNMENT,P.unpackAlignment),Q.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,R0);let h0=P.isCompressedTexture||P.image[0].isCompressedTexture,r0=P.image[0]&&P.image[0].isDataTexture,j0=[];for(let M0=0;M0<6;M0++){if(!h0&&!r0)j0[M0]=R(P.image[M0],!0,K.maxCubemapSize);else j0[M0]=r0?P.image[M0].image:P.image[M0];j0[M0]=P9(P,j0[M0])}let k0=j0[0],d0=W.convert(P.format,P.colorSpace),J9=W.convert(P.type),z9=V(P.internalFormat,d0,J9,P.normalized,P.colorSpace),o=P.isVideoTexture!==!0,y0=A0.__version===void 0||W0===!0,E0=B0.dataReady,v0=w(P,k0);U0(J.TEXTURE_CUBE_MAP,P);let m0;if(h0){if(o&&y0)Q.texStorage2D(J.TEXTURE_CUBE_MAP,v0,z9,k0.width,k0.height);for(let M0=0;M0<6;M0++){m0=j0[M0].mipmaps;for(let f0=0;f0<m0.length;f0++){let Y9=m0[f0];if(P.format!==y8)if(d0!==null)if(o){if(E0)Q.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0,0,0,Y9.width,Y9.height,d0,Y9.data)}else Q.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0,z9,Y9.width,Y9.height,0,Y9.data);else t0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(o){if(E0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0,0,0,Y9.width,Y9.height,d0,J9,Y9.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0,z9,Y9.width,Y9.height,0,d0,J9,Y9.data)}}}else{if(m0=P.mipmaps,o&&y0){if(m0.length>0)v0++;let M0=C9(j0[0]);Q.texStorage2D(J.TEXTURE_CUBE_MAP,v0,z9,M0.width,M0.height)}for(let M0=0;M0<6;M0++)if(r0){if(o){if(E0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,0,0,j0[M0].width,j0[M0].height,d0,J9,j0[M0].data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,z9,j0[M0].width,j0[M0].height,0,d0,J9,j0[M0].data);for(let f0=0;f0<m0.length;f0++){let l9=m0[f0].image[M0].image;if(o){if(E0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0+1,0,0,l9.width,l9.height,d0,J9,l9.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0+1,z9,l9.width,l9.height,0,d0,J9,l9.data)}}else{if(o){if(E0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,0,0,d0,J9,j0[M0])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,z9,d0,J9,j0[M0]);for(let f0=0;f0<m0.length;f0++){let Y9=m0[f0];if(o){if(E0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0+1,0,0,d0,J9,Y9.image[M0])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,f0+1,z9,d0,J9,Y9.image[M0])}}}if(E(P))z(J.TEXTURE_CUBE_MAP);if(A0.__version=B0.version,P.onUpdate)P.onUpdate(P)}_.__version=P.version}function $0(_,P,u,W0,B0,A0){let b0=W.convert(u.format,u.colorSpace),G0=W.convert(u.type),R0=V(u.internalFormat,b0,G0,u.normalized,u.colorSpace),h0=Z.get(P),r0=Z.get(u);if(r0.__renderTarget=P,!h0.__hasExternalTextures){let j0=Math.max(1,P.width>>A0),k0=Math.max(1,P.height>>A0);if(B0===J.TEXTURE_3D||B0===J.TEXTURE_2D_ARRAY)Q.texImage3D(B0,A0,R0,j0,k0,P.depth,0,b0,G0,null);else Q.texImage2D(B0,A0,R0,j0,k0,0,b0,G0,null)}if(Q.bindFramebuffer(J.FRAMEBUFFER,_),m(P))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,W0,B0,r0.__webglTexture,0,N9(P));else if(B0===J.TEXTURE_2D||B0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&B0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,W0,B0,r0.__webglTexture,A0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function D0(_,P,u){if(J.bindRenderbuffer(J.RENDERBUFFER,_),P.depthBuffer){let W0=P.depthTexture,B0=W0&&W0.isDepthTexture?W0.type:null,A0=T(P.stencilBuffer,B0),b0=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(m(P))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,N9(P),A0,P.width,P.height);else if(u)J.renderbufferStorageMultisample(J.RENDERBUFFER,N9(P),A0,P.width,P.height);else J.renderbufferStorage(J.RENDERBUFFER,A0,P.width,P.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,b0,J.RENDERBUFFER,_)}else{let W0=P.textures;for(let B0=0;B0<W0.length;B0++){let A0=W0[B0],b0=W.convert(A0.format,A0.colorSpace),G0=W.convert(A0.type),R0=V(A0.internalFormat,b0,G0,A0.normalized,A0.colorSpace);if(m(P))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,N9(P),R0,P.width,P.height);else if(u)J.renderbufferStorageMultisample(J.RENDERBUFFER,N9(P),R0,P.width,P.height);else J.renderbufferStorage(J.RENDERBUFFER,R0,P.width,P.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function L0(_,P,u){let W0=P.isWebGLCubeRenderTarget===!0;if(Q.bindFramebuffer(J.FRAMEBUFFER,_),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let B0=Z.get(P.depthTexture);if(B0.__renderTarget=P,!B0.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0;if(W0){if(B0.__webglInit===void 0)B0.__webglInit=!0,P.depthTexture.addEventListener("dispose",D);if(B0.__webglTexture===void 0){B0.__webglTexture=J.createTexture(),Q.bindTexture(J.TEXTURE_CUBE_MAP,B0.__webglTexture),U0(J.TEXTURE_CUBE_MAP,P.depthTexture);let h0=W.convert(P.depthTexture.format),r0=W.convert(P.depthTexture.type),j0;if(P.depthTexture.format===t7)j0=J.DEPTH_COMPONENT24;else if(P.depthTexture.format===e7)j0=J.DEPTH24_STENCIL8;for(let k0=0;k0<6;k0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,0,j0,P.width,P.height,0,h0,r0,null)}}else r(P.depthTexture,0);let A0=B0.__webglTexture,b0=N9(P),G0=W0?J.TEXTURE_CUBE_MAP_POSITIVE_X+u:J.TEXTURE_2D,R0=P.depthTexture.format===e7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(P.depthTexture.format===t7)if(m(P))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,R0,G0,A0,0,b0);else J.framebufferTexture2D(J.FRAMEBUFFER,R0,G0,A0,0);else if(P.depthTexture.format===e7)if(m(P))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,R0,G0,A0,0,b0);else J.framebufferTexture2D(J.FRAMEBUFFER,R0,G0,A0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function z0(_){let P=Z.get(_),u=_.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==_.depthTexture){let W0=_.depthTexture;if(P.__depthDisposeCallback)P.__depthDisposeCallback();if(W0){let B0=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,W0.removeEventListener("dispose",B0)};W0.addEventListener("dispose",B0),P.__depthDisposeCallback=B0}P.__boundDepthTexture=W0}if(_.depthTexture&&!P.__autoAllocateDepthBuffer)if(u)for(let W0=0;W0<6;W0++)L0(P.__webglFramebuffer[W0],_,W0);else{let W0=_.texture.mipmaps;if(W0&&W0.length>0)L0(P.__webglFramebuffer[0],_,0);else L0(P.__webglFramebuffer,_,0)}else if(u){P.__webglDepthbuffer=[];for(let W0=0;W0<6;W0++)if(Q.bindFramebuffer(J.FRAMEBUFFER,P.__webglFramebuffer[W0]),P.__webglDepthbuffer[W0]===void 0)P.__webglDepthbuffer[W0]=J.createRenderbuffer(),D0(P.__webglDepthbuffer[W0],_,!1);else{let B0=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,A0=P.__webglDepthbuffer[W0];J.bindRenderbuffer(J.RENDERBUFFER,A0),J.framebufferRenderbuffer(J.FRAMEBUFFER,B0,J.RENDERBUFFER,A0)}}else{let W0=_.texture.mipmaps;if(W0&&W0.length>0)Q.bindFramebuffer(J.FRAMEBUFFER,P.__webglFramebuffer[0]);else Q.bindFramebuffer(J.FRAMEBUFFER,P.__webglFramebuffer);if(P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=J.createRenderbuffer(),D0(P.__webglDepthbuffer,_,!1);else{let B0=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,A0=P.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,A0),J.framebufferRenderbuffer(J.FRAMEBUFFER,B0,J.RENDERBUFFER,A0)}}Q.bindFramebuffer(J.FRAMEBUFFER,null)}function V0(_,P,u){let W0=Z.get(_);if(P!==void 0)$0(W0.__webglFramebuffer,_,_.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(u!==void 0)z0(_)}function u0(_){let P=_.texture,u=Z.get(_),W0=Z.get(P);_.addEventListener("dispose",L);let B0=_.textures,A0=_.isWebGLCubeRenderTarget===!0,b0=B0.length>1;if(!b0){if(W0.__webglTexture===void 0)W0.__webglTexture=J.createTexture();W0.__version=P.version,X.memory.textures++}if(A0){u.__webglFramebuffer=[];for(let G0=0;G0<6;G0++)if(P.mipmaps&&P.mipmaps.length>0){u.__webglFramebuffer[G0]=[];for(let R0=0;R0<P.mipmaps.length;R0++)u.__webglFramebuffer[G0][R0]=J.createFramebuffer()}else u.__webglFramebuffer[G0]=J.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){u.__webglFramebuffer=[];for(let G0=0;G0<P.mipmaps.length;G0++)u.__webglFramebuffer[G0]=J.createFramebuffer()}else u.__webglFramebuffer=J.createFramebuffer();if(b0)for(let G0=0,R0=B0.length;G0<R0;G0++){let h0=Z.get(B0[G0]);if(h0.__webglTexture===void 0)h0.__webglTexture=J.createTexture(),X.memory.textures++}if(_.samples>0&&m(_)===!1){u.__webglMultisampledFramebuffer=J.createFramebuffer(),u.__webglColorRenderbuffer=[],Q.bindFramebuffer(J.FRAMEBUFFER,u.__webglMultisampledFramebuffer);for(let G0=0;G0<B0.length;G0++){let R0=B0[G0];u.__webglColorRenderbuffer[G0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,u.__webglColorRenderbuffer[G0]);let h0=W.convert(R0.format,R0.colorSpace),r0=W.convert(R0.type),j0=V(R0.internalFormat,h0,r0,R0.normalized,R0.colorSpace,_.isXRRenderTarget===!0),k0=N9(_);J.renderbufferStorageMultisample(J.RENDERBUFFER,k0,j0,_.width,_.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+G0,J.RENDERBUFFER,u.__webglColorRenderbuffer[G0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),_.depthBuffer)u.__webglDepthRenderbuffer=J.createRenderbuffer(),D0(u.__webglDepthRenderbuffer,_,!0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}}if(A0){Q.bindTexture(J.TEXTURE_CUBE_MAP,W0.__webglTexture),U0(J.TEXTURE_CUBE_MAP,P);for(let G0=0;G0<6;G0++)if(P.mipmaps&&P.mipmaps.length>0)for(let R0=0;R0<P.mipmaps.length;R0++)$0(u.__webglFramebuffer[G0][R0],_,P,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+G0,R0);else $0(u.__webglFramebuffer[G0],_,P,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+G0,0);if(E(P))z(J.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(b0){for(let G0=0,R0=B0.length;G0<R0;G0++){let h0=B0[G0],r0=Z.get(h0),j0=J.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)j0=_.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(j0,r0.__webglTexture),U0(j0,h0),$0(u.__webglFramebuffer,_,h0,J.COLOR_ATTACHMENT0+G0,j0,0),E(h0))z(j0)}Q.unbindTexture()}else{let G0=J.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)G0=_.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(G0,W0.__webglTexture),U0(G0,P),P.mipmaps&&P.mipmaps.length>0)for(let R0=0;R0<P.mipmaps.length;R0++)$0(u.__webglFramebuffer[R0],_,P,J.COLOR_ATTACHMENT0,G0,R0);else $0(u.__webglFramebuffer,_,P,J.COLOR_ATTACHMENT0,G0,0);if(E(P))z(G0);Q.unbindTexture()}if(_.depthBuffer)z0(_)}function X9(_){let P=_.textures;for(let u=0,W0=P.length;u<W0;u++){let B0=P[u];if(E(B0)){let A0=M(_),b0=Z.get(B0).__webglTexture;Q.bindTexture(A0,b0),z(A0),Q.unbindTexture()}}}let a0=[],k9=[];function S9(_){if(_.samples>0){if(m(_)===!1){let{textures:P,width:u,height:W0}=_,B0=J.COLOR_BUFFER_BIT,A0=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,b0=Z.get(_),G0=P.length>1;if(G0)for(let h0=0;h0<P.length;h0++)Q.bindFramebuffer(J.FRAMEBUFFER,b0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+h0,J.RENDERBUFFER,null),Q.bindFramebuffer(J.FRAMEBUFFER,b0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+h0,J.TEXTURE_2D,null,0);Q.bindFramebuffer(J.READ_FRAMEBUFFER,b0.__webglMultisampledFramebuffer);let R0=_.texture.mipmaps;if(R0&&R0.length>0)Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,b0.__webglFramebuffer[0]);else Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,b0.__webglFramebuffer);for(let h0=0;h0<P.length;h0++){if(_.resolveDepthBuffer){if(_.depthBuffer)B0|=J.DEPTH_BUFFER_BIT;if(_.stencilBuffer&&_.resolveStencilBuffer)B0|=J.STENCIL_BUFFER_BIT}if(G0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,b0.__webglColorRenderbuffer[h0]);let r0=Z.get(P[h0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,r0,0)}if(J.blitFramebuffer(0,0,u,W0,0,0,u,W0,B0,J.NEAREST),H===!0){if(a0.length=0,k9.length=0,a0.push(J.COLOR_ATTACHMENT0+h0),_.depthBuffer&&_.storeMultisampledDepthBuffer===!1)a0.push(A0),k9.push(A0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,k9);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,a0)}}if(Q.bindFramebuffer(J.READ_FRAMEBUFFER,null),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),G0)for(let h0=0;h0<P.length;h0++){Q.bindFramebuffer(J.FRAMEBUFFER,b0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+h0,J.RENDERBUFFER,b0.__webglColorRenderbuffer[h0]);let r0=Z.get(P[h0]).__webglTexture;Q.bindFramebuffer(J.FRAMEBUFFER,b0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+h0,J.TEXTURE_2D,r0,0)}Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,b0.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&H){let P=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[P])}}}function N9(_){return Math.min(K.maxSamples,_.samples)}function m(_){let P=Z.get(_);return _.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function m9(_){let P=X.render.frame;if(G.get(_)!==P)G.set(_,P),_.update()}function P9(_,P){let{colorSpace:u,format:W0,type:B0}=_;if(_.isCompressedTexture===!0||_.isVideoTexture===!0)return P;if(u!==i6&&u!==$J)if(V9.getTransfer(u)===n9){if(W0!==y8||B0!==V8)t0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Z9("WebGLTextures: Unsupported texture color space:",u);return P}function C9(_){if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement)U.width=_.naturalWidth||_.width,U.height=_.naturalHeight||_.height;else if(typeof VideoFrame<"u"&&_ instanceof VideoFrame)U.width=_.displayWidth,U.height=_.displayHeight;else U.width=_.width,U.height=_.height;return U}this.allocateTextureUnit=p,this.resetTextureUnits=Q0,this.getTextureUnits=f,this.setTextureUnits=y,this.setTexture2D=r,this.setTexture2DArray=l,this.setTexture3D=J0,this.setTextureCube=Y0,this.rebindTextures=V0,this.setupRenderTarget=u0,this.updateRenderTargetMipmap=X9,this.updateMultisampleRenderTarget=S9,this.setupDepthRenderbuffer=z0,this.setupFrameBufferTexture=$0,this.useMultisampledRTT=m,this.isReversedDepthBuffer=function(){return Q.buffers.depth.getReversed()}}function AR(J,$){function Q(Z,K=$J){let W,X=V9.getTransfer(K);if(Z===V8)return J.UNSIGNED_BYTE;if(Z===fW)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===vW)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===_5)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===S5)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===A5)return J.BYTE;if(Z===T5)return J.SHORT;if(Z===YQ)return J.UNSIGNED_SHORT;if(Z===yW)return J.INT;if(Z===k7)return J.UNSIGNED_INT;if(Z===r8)return J.FLOAT;if(Z===V6)return J.HALF_FLOAT;if(Z===w5)return J.ALPHA;if(Z===j5)return J.RGB;if(Z===y8)return J.RGBA;if(Z===t7)return J.DEPTH_COMPONENT;if(Z===e7)return J.DEPTH_STENCIL;if(Z===y5)return J.RED;if(Z===bW)return J.RED_INTEGER;if(Z===JJ)return J.RG;if(Z===hW)return J.RG_INTEGER;if(Z===xW)return J.RGBA_INTEGER;if(Z===mZ||Z===lZ||Z===uZ||Z===dZ)if(X===n9)if(W=$.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===mZ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===lZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===uZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===dZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=$.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===mZ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===lZ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===uZ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===dZ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===gW||Z===pW||Z===mW||Z===lW)if(W=$.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===gW)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===pW)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===mW)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===lW)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===uW||Z===dW||Z===cW||Z===nW||Z===sW||Z===cZ||Z===iW)if(W=$.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===uW||Z===dW)return X===n9?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===cW)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===nW)return W.COMPRESSED_R11_EAC;if(Z===sW)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===cZ)return W.COMPRESSED_RG11_EAC;if(Z===iW)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===oW||Z===aW||Z===rW||Z===tW||Z===eW||Z===JX||Z===$X||Z===QX||Z===ZX||Z===KX||Z===WX||Z===XX||Z===YX||Z===HX)if(W=$.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===oW)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===aW)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===rW)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===tW)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===eW)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===JX)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===$X)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===QX)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===ZX)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===KX)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===WX)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===XX)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===YX)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===HX)return X===n9?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===UX||Z===NX||Z===GX)if(W=$.get("EXT_texture_compression_bptc"),W!==null){if(Z===UX)return X===n9?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===NX)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===GX)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===FX||Z===EX||Z===nZ||Z===qX)if(W=$.get("EXT_texture_compression_rgtc"),W!==null){if(Z===FX)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===EX)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===nZ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===qX)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===W$)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:Q}}var TR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_R=`
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

}`;class hU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,$){if(this.texture===null){let Q=new KK(J.texture);if(J.depthNear!==$.depthNear||J.depthFar!==$.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Q}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let $=J.cameras[0].viewport,Q=new $6({vertexShader:TR,fragmentShader:_R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:$.z},depthHeight:{value:$.w}}});this.mesh=new T0(new L9(20,20),Q)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xU extends B8{constructor(J,$){super();let Q=this,Z=null,K=1,W=null,X="local-floor",Y=1,H=null,U=null,G=null,F=null,N=null,q=null,O=typeof XRWebGLBinding<"u",B=new hU,R={},E=$.getContextAttributes(),z=null,M=null,V=[],T=[],w=new O0,D=null,L=null,I=new G6;I.viewport=new c9;let i=new G6;i.viewport=new c9;let h=[I,i],d=new lX,Q0=null,f=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let C=V[b];if(C===void 0)C=new NQ,V[b]=C;return C.getTargetRaySpace()},this.getControllerGrip=function(b){let C=V[b];if(C===void 0)C=new NQ,V[b]=C;return C.getGripSpace()},this.getHand=function(b){let C=V[b];if(C===void 0)C=new NQ,V[b]=C;return C.getHandSpace()};function y(b){let C=T.indexOf(b.inputSource);if(C===-1)return;let x=V[C];if(x!==void 0)x.update(b.inputSource,b.frame,H||W),x.dispatchEvent({type:b.type,data:b.inputSource})}function p(){Z.removeEventListener("select",y),Z.removeEventListener("selectstart",y),Z.removeEventListener("selectend",y),Z.removeEventListener("squeeze",y),Z.removeEventListener("squeezestart",y),Z.removeEventListener("squeezeend",y),Z.removeEventListener("end",p),Z.removeEventListener("inputsourceschange",v);for(let b=0;b<V.length;b++){let C=T[b];if(C===null)continue;T[b]=null,V[b].disconnect(C)}Q0=null,f=null,B.reset();for(let b in R)delete R[b];if(J.setRenderTarget(z),N=null,F=null,G=null,Z=null,M=null,U0.stop(),Q.isPresenting=!1,J.setPixelRatio(D),J.setSize(w.width,w.height,!1),L!==null){let b=L.camera;b.fov=L.fov,b.zoom=L.zoom,b.updateProjectionMatrix(),L=null}Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){if(K=b,Q.isPresenting===!0)t0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){if(X=b,Q.isPresenting===!0)t0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(b){H=b},this.getBaseLayer=function(){return F!==null?F:N},this.getBinding=function(){if(G===null&&O)G=new XRWebGLBinding(Z,$);return G},this.getFrame=function(){return q},this.getSession=function(){return Z},this.setSession=async function(b){if(Z=b,Z!==null){if(z=J.getRenderTarget(),Z.addEventListener("select",y),Z.addEventListener("selectstart",y),Z.addEventListener("selectend",y),Z.addEventListener("squeeze",y),Z.addEventListener("squeezestart",y),Z.addEventListener("squeezeend",y),Z.addEventListener("end",p),Z.addEventListener("inputsourceschange",v),E.xrCompatible!==!0)await $.makeXRCompatible();if(D=J.getPixelRatio(),J.getSize(w),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let x={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:K};N=new XRWebGLLayer(Z,$,x),Z.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),M=new X6(N.framebufferWidth,N.framebufferHeight,{format:y8,type:V8,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}else{let x=null,n=null,K0=null;if(E.depth)K0=E.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,x=E.stencil?e7:t7,n=E.stencil?W$:k7;let $0={colorFormat:$.RGBA8,depthFormat:K0,scaleFactor:K};G=this.getBinding(),F=G.createProjectionLayer($0),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),M=new X6(F.textureWidth,F.textureHeight,{format:y8,type:V8,depthTexture:new XJ(F.textureWidth,F.textureHeight,n,void 0,void 0,void 0,void 0,void 0,void 0,x),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1,storeMultisampledDepthBuffer:F.ignoreDepthValues===!1,storeMultisampledStencilBuffer:F.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await Z.requestReferenceSpace(X),U0.setContext(Z),U0.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function v(b){for(let C=0;C<b.removed.length;C++){let x=b.removed[C],n=T.indexOf(x);if(n>=0)T[n]=null,V[n].disconnect(x)}for(let C=0;C<b.added.length;C++){let x=b.added[C],n=T.indexOf(x);if(n===-1){for(let $0=0;$0<V.length;$0++)if($0>=T.length){T.push(x),n=$0;break}else if(T[$0]===null){T[$0]=x,n=$0;break}if(n===-1)break}let K0=V[n];if(K0)K0.connect(x)}}let r=new S,l=new S;function J0(b,C,x){r.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(x.matrixWorld);let n=r.distanceTo(l),K0=C.projectionMatrix.elements,$0=x.projectionMatrix.elements,D0=K0[14]/(K0[10]-1),L0=K0[14]/(K0[10]+1),z0=(K0[9]+1)/K0[5],V0=(K0[9]-1)/K0[5],u0=(K0[8]-1)/K0[0],X9=($0[8]+1)/$0[0],a0=D0*u0,k9=D0*X9,S9=n/(-u0+X9),N9=S9*-u0;if(C.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(N9),b.translateZ(S9),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert(),K0[10]===-1)b.projectionMatrix.copy(C.projectionMatrix),b.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{let m=D0+S9,m9=L0+S9,P9=a0-N9,C9=k9+(n-N9),_=z0*L0/m9*m,P=V0*L0/m9*m;b.projectionMatrix.makePerspective(P9,C9,_,P,m,m9),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}}function Y0(b,C){if(C===null)b.matrixWorld.copy(b.matrix);else b.matrixWorld.multiplyMatrices(C.matrixWorld,b.matrix);b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(Z===null)return;let{near:C,far:x}=b;if(B.texture!==null){if(B.depthNear>0)C=B.depthNear;if(B.depthFar>0)x=B.depthFar}if(d.near=i.near=I.near=C,d.far=i.far=I.far=x,Q0!==d.near||f!==d.far)Z.updateRenderState({depthNear:d.near,depthFar:d.far}),Q0=d.near,f=d.far;d.layers.mask=b.layers.mask|6,I.layers.mask=d.layers.mask&-5,i.layers.mask=d.layers.mask&-3;let n=b.parent,K0=d.cameras;Y0(d,n);for(let $0=0;$0<K0.length;$0++)Y0(K0[$0],n);if(K0.length===2)J0(d,I,i);else d.projectionMatrix.copy(I.projectionMatrix);if(L===null&&b.isPerspectiveCamera)L={camera:b,fov:b.fov,zoom:b.zoom};I0(b,d,n)};function I0(b,C,x){if(x===null)b.matrix.copy(C.matrixWorld);else b.matrix.copy(x.matrixWorld),b.matrix.invert(),b.matrix.multiply(C.matrixWorld);if(b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(C.projectionMatrix),b.projectionMatrixInverse.copy(C.projectionMatrixInverse),b.isPerspectiveCamera)b.fov=n7*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1}this.getCamera=function(){return d},this.getFoveation=function(){if(F===null&&N===null)return;return Y},this.setFoveation=function(b){if(Y=b,F!==null)F.fixedFoveation=b;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=b},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(d)},this.getCameraTexture=function(b){return R[b]};let j=null;function a(b,C){if(U=C.getViewerPose(H||W),q=C,U!==null){let x=U.views;if(N!==null)J.setRenderTargetFramebuffer(M,N.framebuffer),J.setRenderTarget(M);let n=!1;if(x.length!==d.cameras.length)d.cameras.length=0,n=!0;for(let L0=0;L0<x.length;L0++){let z0=x[L0],V0=null;if(N!==null)V0=N.getViewport(z0);else{let X9=G.getViewSubImage(F,z0);if(V0=X9.viewport,L0===0)J.setRenderTargetTextures(M,X9.colorTexture,X9.depthStencilTexture),J.setRenderTarget(M)}let u0=h[L0];if(u0===void 0)u0=new G6,u0.layers.enable(L0),u0.viewport=new c9,h[L0]=u0;if(u0.matrix.fromArray(z0.transform.matrix),u0.matrix.decompose(u0.position,u0.quaternion,u0.scale),u0.projectionMatrix.fromArray(z0.projectionMatrix),u0.projectionMatrixInverse.copy(u0.projectionMatrix).invert(),u0.viewport.set(V0.x,V0.y,V0.width,V0.height),L0===0)d.matrix.copy(u0.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale);if(n===!0)d.cameras.push(u0)}let K0=Z.enabledFeatures;if(K0&&K0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&O){G=Q.getBinding();let L0=G.getDepthInformation(x[0]);if(L0&&L0.isValid&&L0.texture)B.init(L0,Z.renderState)}if(K0&&K0.includes("camera-access")&&O){J.state.unbindTexture(),G=Q.getBinding();for(let L0=0;L0<x.length;L0++){let z0=x[L0].camera;if(z0){let V0=R[z0];if(!V0)V0=new KK,R[z0]=V0;let u0=G.getCameraImage(z0);V0.sourceTexture=u0}}}}for(let x=0;x<V.length;x++){let n=T[x],K0=V[x];if(n!==null&&K0!==void 0)K0.update(n,C,H||W)}if(j)j(b,C);if(C.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:C});q=null}let U0=new zU;U0.setAnimationLoop(a),this.setAnimationLoop=function(b){j=b},this.dispose=function(){}}}var SR=new $9,gU=new U9;gU.set(-1,0,0,0,1,0,0,0,1);function wR(J,$){function Q(R,E){if(R.matrixAutoUpdate===!0)R.updateMatrix();E.value.copy(R.matrix)}function Z(R,E){if(E.color.getRGB(R.fogColor.value,jX(J)),E.isFog)R.fogNear.value=E.near,R.fogFar.value=E.far;else if(E.isFogExp2)R.fogDensity.value=E.density}function K(R,E,z,M,V){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)W(R,E);else if(E.isMeshLambertMaterial){if(W(R,E),E.envMap)R.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)W(R,E),F(R,E);else if(E.isMeshPhongMaterial){if(W(R,E),G(R,E),E.envMap)R.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(W(R,E),N(R,E),E.isMeshPhysicalMaterial)q(R,E,V)}else if(E.isMeshMatcapMaterial)W(R,E),O(R,E);else if(E.isMeshDepthMaterial)W(R,E);else if(E.isMeshDistanceMaterial)W(R,E),B(R,E);else if(E.isMeshNormalMaterial)W(R,E);else if(E.isLineBasicMaterial){if(X(R,E),E.isLineDashedMaterial)Y(R,E)}else if(E.isPointsMaterial)H(R,E,z,M);else if(E.isSpriteMaterial)U(R,E);else if(E.isShadowMaterial)R.color.value.copy(E.color),R.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function W(R,E){if(R.opacity.value=E.opacity,E.color)R.diffuse.value.copy(E.color);if(E.emissive)R.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)R.map.value=E.map,Q(E.map,R.mapTransform);if(E.alphaMap)R.alphaMap.value=E.alphaMap,Q(E.alphaMap,R.alphaMapTransform);if(E.bumpMap){if(R.bumpMap.value=E.bumpMap,Q(E.bumpMap,R.bumpMapTransform),R.bumpScale.value=E.bumpScale,E.side===I6)R.bumpScale.value*=-1}if(E.normalMap){if(R.normalMap.value=E.normalMap,Q(E.normalMap,R.normalMapTransform),R.normalScale.value.copy(E.normalScale),E.side===I6)R.normalScale.value.negate()}if(E.displacementMap)R.displacementMap.value=E.displacementMap,Q(E.displacementMap,R.displacementMapTransform),R.displacementScale.value=E.displacementScale,R.displacementBias.value=E.displacementBias;if(E.emissiveMap)R.emissiveMap.value=E.emissiveMap,Q(E.emissiveMap,R.emissiveMapTransform);if(E.specularMap)R.specularMap.value=E.specularMap,Q(E.specularMap,R.specularMapTransform);if(E.alphaTest>0)R.alphaTest.value=E.alphaTest;let z=$.get(E),M=z.envMap,V=z.envMapRotation;if(M){if(R.envMap.value=M,R.envMapRotation.value.setFromMatrix4(SR.makeRotationFromEuler(V)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)R.envMapRotation.value.premultiply(gU);R.reflectivity.value=E.reflectivity,R.ior.value=E.ior,R.refractionRatio.value=E.refractionRatio}if(E.lightMap)R.lightMap.value=E.lightMap,R.lightMapIntensity.value=E.lightMapIntensity,Q(E.lightMap,R.lightMapTransform);if(E.aoMap)R.aoMap.value=E.aoMap,R.aoMapIntensity.value=E.aoMapIntensity,Q(E.aoMap,R.aoMapTransform)}function X(R,E){if(R.diffuse.value.copy(E.color),R.opacity.value=E.opacity,E.map)R.map.value=E.map,Q(E.map,R.mapTransform)}function Y(R,E){R.dashSize.value=E.dashSize,R.totalSize.value=E.dashSize+E.gapSize,R.scale.value=E.scale}function H(R,E,z,M){if(R.diffuse.value.copy(E.color),R.opacity.value=E.opacity,R.size.value=E.size*z,R.scale.value=M*0.5,E.map)R.map.value=E.map,Q(E.map,R.uvTransform);if(E.alphaMap)R.alphaMap.value=E.alphaMap,Q(E.alphaMap,R.alphaMapTransform);if(E.alphaTest>0)R.alphaTest.value=E.alphaTest}function U(R,E){if(R.diffuse.value.copy(E.color),R.opacity.value=E.opacity,R.rotation.value=E.rotation,E.map)R.map.value=E.map,Q(E.map,R.mapTransform);if(E.alphaMap)R.alphaMap.value=E.alphaMap,Q(E.alphaMap,R.alphaMapTransform);if(E.alphaTest>0)R.alphaTest.value=E.alphaTest}function G(R,E){R.specular.value.copy(E.specular),R.shininess.value=Math.max(E.shininess,0.0001)}function F(R,E){if(E.gradientMap)R.gradientMap.value=E.gradientMap}function N(R,E){if(R.metalness.value=E.metalness,E.metalnessMap)R.metalnessMap.value=E.metalnessMap,Q(E.metalnessMap,R.metalnessMapTransform);if(R.roughness.value=E.roughness,E.roughnessMap)R.roughnessMap.value=E.roughnessMap,Q(E.roughnessMap,R.roughnessMapTransform);if(E.envMap)R.envMapIntensity.value=E.envMapIntensity}function q(R,E,z){if(R.ior.value=E.ior,E.sheen>0){if(R.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),R.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)R.sheenColorMap.value=E.sheenColorMap,Q(E.sheenColorMap,R.sheenColorMapTransform);if(E.sheenRoughnessMap)R.sheenRoughnessMap.value=E.sheenRoughnessMap,Q(E.sheenRoughnessMap,R.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(R.clearcoat.value=E.clearcoat,R.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)R.clearcoatMap.value=E.clearcoatMap,Q(E.clearcoatMap,R.clearcoatMapTransform);if(E.clearcoatRoughnessMap)R.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,Q(E.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(R.clearcoatNormalMap.value=E.clearcoatNormalMap,Q(E.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===I6)R.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)R.dispersion.value=E.dispersion;if(E.retroreflectivity>0)R.retroreflectivity.value=E.retroreflectivity;if(E.iridescence>0){if(R.iridescence.value=E.iridescence,R.iridescenceIOR.value=E.iridescenceIOR,R.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)R.iridescenceMap.value=E.iridescenceMap,Q(E.iridescenceMap,R.iridescenceMapTransform);if(E.iridescenceThicknessMap)R.iridescenceThicknessMap.value=E.iridescenceThicknessMap,Q(E.iridescenceThicknessMap,R.iridescenceThicknessMapTransform)}if(E.transmission>0){if(R.transmission.value=E.transmission,R.transmissionSamplerMap.value=z.texture,R.transmissionSamplerSize.value.set(z.width,z.height),E.transmissionMap)R.transmissionMap.value=E.transmissionMap,Q(E.transmissionMap,R.transmissionMapTransform);if(R.thickness.value=E.thickness,E.thicknessMap)R.thicknessMap.value=E.thicknessMap,Q(E.thicknessMap,R.thicknessMapTransform);R.attenuationDistance.value=E.attenuationDistance,R.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(R.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)R.anisotropyMap.value=E.anisotropyMap,Q(E.anisotropyMap,R.anisotropyMapTransform)}if(R.specularIntensity.value=E.specularIntensity,R.specularColor.value.copy(E.specularColor),E.specularColorMap)R.specularColorMap.value=E.specularColorMap,Q(E.specularColorMap,R.specularColorMapTransform);if(E.specularIntensityMap)R.specularIntensityMap.value=E.specularIntensityMap,Q(E.specularIntensityMap,R.specularIntensityMapTransform)}function O(R,E){if(E.matcap)R.matcap.value=E.matcap}function B(R,E){let z=$.get(E).light;R.referencePosition.value.setFromMatrixPosition(z.matrixWorld),R.nearDistance.value=z.shadow.camera.near,R.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function jR(J,$,Q,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,T){let w=T.program;Z.uniformBlockBinding(V,w)}function U(V,T){let w=K[V.id];if(w===void 0)R(V),w=G(V),K[V.id]=w,V.addEventListener("dispose",z);let D=T.program;Z.updateUBOMapping(V,D);let L=$.render.frame;if(W[V.id]!==L)N(V),W[V.id]=L}function G(V){let T=F();V.__bindingPointIndex=T;let w=J.createBuffer(),D=V.__size,L=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,D,L),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,T,w),w}function F(){for(let V=0;V<Y;V++)if(X.indexOf(V)===-1)return X.push(V),V;return Z9("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(V){let T=K[V.id],w=V.uniforms,D=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,T);for(let L=0,I=w.length;L<I;L++){let i=w[L];if(Array.isArray(i))for(let h=0,d=i.length;h<d;h++)q(i[h],L,h,D);else q(i,L,0,D)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(V,T,w,D){if(B(V,T,w,D)===!0){let{__offset:L,value:I}=V;if(Array.isArray(I)){let i=0;for(let h=0;h<I.length;h++){let d=I[h],Q0=E(d);if(O(d,V.__data,i),typeof d!=="number"&&typeof d!=="boolean"&&!d.isMatrix3&&!ArrayBuffer.isView(d))i+=Q0.storage/Float32Array.BYTES_PER_ELEMENT}}else O(I,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,L,V.__data)}}function O(V,T,w){if(typeof V==="number"||typeof V==="boolean")T[0]=V;else if(V.isMatrix3)T[0]=V.elements[0],T[1]=V.elements[1],T[2]=V.elements[2],T[3]=0,T[4]=V.elements[3],T[5]=V.elements[4],T[6]=V.elements[5],T[7]=0,T[8]=V.elements[6],T[9]=V.elements[7],T[10]=V.elements[8],T[11]=0;else if(ArrayBuffer.isView(V))T.set(new V.constructor(V.buffer,V.byteOffset,T.length));else V.toArray(T,w)}function B(V,T,w,D){let L=V.value,I=T+"_"+w;if(D[I]===void 0){if(typeof L==="number"||typeof L==="boolean")D[I]=L;else if(ArrayBuffer.isView(L))D[I]=L.slice();else D[I]=L.clone();return!0}else{let i=D[I];if(typeof L==="number"||typeof L==="boolean"){if(i!==L)return D[I]=L,!0}else if(ArrayBuffer.isView(L))return!0;else if(i.equals(L)===!1)return i.copy(L),!0}return!1}function R(V){let T=V.uniforms,w=0,D=16;for(let I=0,i=T.length;I<i;I++){let h=Array.isArray(T[I])?T[I]:[T[I]];for(let d=0,Q0=h.length;d<Q0;d++){let f=h[d],y=Array.isArray(f.value)?f.value:[f.value];for(let p=0,v=y.length;p<v;p++){let r=y[p],l=E(r),J0=w%D,Y0=J0%l.boundary,I0=J0+Y0;if(w+=Y0,I0!==0&&D-I0<l.storage)w+=D-I0;f.__data=new Float32Array(l.storage/Float32Array.BYTES_PER_ELEMENT),f.__offset=w,w+=l.storage}}}let L=w%D;if(L>0)w+=D-L;return V.__size=w,V.__cache={},this}function E(V){let T={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")T.boundary=4,T.storage=4;else if(V.isVector2)T.boundary=8,T.storage=8;else if(V.isVector3||V.isColor)T.boundary=16,T.storage=12;else if(V.isVector4)T.boundary=16,T.storage=16;else if(V.isMatrix3)T.boundary=48,T.storage=48;else if(V.isMatrix4)T.boundary=64,T.storage=64;else if(V.isTexture)t0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))T.boundary=16,T.storage=V.byteLength;else t0("WebGLRenderer: Unsupported uniform value type.",V);return T}function z(V){let T=V.target;T.removeEventListener("dispose",z);let w=X.indexOf(T.__bindingPointIndex);X.splice(w,1),J.deleteBuffer(K[T.id]),delete K[T.id],delete W[T.id]}function M(){for(let V in K)J.deleteBuffer(K[V]);X=[],K={},W={}}return{bind:H,update:U,dispose:M}}var yR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),h8=null;function fR(){if(h8===null)h8=new FQ(yR,16,16,JJ,V6),h8.name="DFG_LUT",h8.minFilter=L6,h8.magFilter=L6,h8.wrapS=Z$,h8.wrapT=Z$,h8.generateMipmaps=!1,h8.needsUpdate=!0;return h8}class KY{constructor(J={}){let{canvas:$=m5(),context:Q=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:F=!1,outputBufferType:N=V8}=J;this.isWebGLRenderer=!0;let q;if(Q!==null){if(typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=Q.getContextAttributes().alpha}else q=W;let O=N,B=new Set([xW,hW,bW]),R=new Set([V8,k7,YQ,W$,fW,vW]),E=new Uint32Array(4),z=new Int32Array(4),M=new S,V=null,T=null,w=[],D=[],L=null;this.domElement=$,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=R8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,i=!1,h=null,d=null,Q0=null,f=null;this._outputColorSpace=J6;let y=0,p=0,v=null,r=-1,l=null,J0=new c9,Y0=new c9,I0=null,j=new w0(0),a=0,U0=$.width,b=$.height,C=1,x=null,n=null,K0=new c9(0,0,U0,b),$0=new c9(0,0,U0,b),D0=!1,L0=new KJ,z0=!1,V0=!1,u0=new $9,X9=new S,a0=new c9,k9={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},S9=!1;function N9(){return v===null?C:1}let m=Q;function m9(A,s){return $.getContext(A,s)}let P9,C9,_,P,u,W0,B0,A0,b0,G0,R0,h0,r0,j0,k0,d0,J9,z9,o,y0,E0,v0,m0;try{let A={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in $)$.setAttribute("data-engine",`three.js r${sH}`);if($.addEventListener("webglcontextlost",Y9,!1),$.addEventListener("webglcontextrestored",l9,!1),$.addEventListener("webglcontextcreationerror",y9,!1),m===null){if(m=m9("webgl2",A),m===null)if(m9("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}M0()}catch(A){throw $.removeEventListener("webglcontextlost",Y9,!1),$.removeEventListener("webglcontextrestored",l9,!1),$.removeEventListener("webglcontextcreationerror",y9,!1),Z9("WebGLRenderer: "+A.message),A}function M0(){if(P9=new mq(m),P9.init(),E0=new AR(m,P9),C9=new wq(m,P9,J,E0),_=new PR(m,P9),C9.reversedDepthBuffer&&F)_.buffers.depth.setReversed(!0);d=m.createFramebuffer(),Q0=m.createFramebuffer(),f=m.createFramebuffer(),P=new dq(m),u=new GR,W0=new zR(m,P9,_,u,C9,E0,P),B0=new pq(I),A0=new n1(m),v0=new _q(m,A0),b0=new lq(m,A0,P,v0),G0=new nq(m,b0,A0,v0,P),z9=new cq(m,C9,W0),k0=new jq(u),R0=new NR(I,B0,P9,C9,v0,k0),h0=new wR(I,u),r0=new ER,j0=new BR(P9),J9=new Tq(I,B0,_,G0,q,Y),d0=new IR(I,G0,C9),m0=new jR(m,P,C9,_),o=new Sq(m,P9,P),y0=new uq(m,P9,P),P.programs=R0.programs,I.capabilities=C9,I.extensions=P9,I.properties=u,I.renderLists=r0,I.shadowMap=d0,I.state=_,I.info=P}if(O!==V8)L=new iq(O,$.width,$.height,X,Z,K);let f0=new xU(I,m);this.xr=f0,this.getContext=function(){return m},this.getContextAttributes=function(){return m.getContextAttributes()},this.forceContextLoss=function(){let A=P9.get("WEBGL_lose_context");if(A)A.loseContext()},this.forceContextRestore=function(){let A=P9.get("WEBGL_lose_context");if(A)A.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(A){if(A===void 0)return;C=A,this.setSize(U0,b,!1)},this.getSize=function(A){return A.set(U0,b)},this.setSize=function(A,s,H0=!0){if(f0.isPresenting){t0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(U0=A,b=s,$.width=Math.floor(A*C),$.height=Math.floor(s*C),H0===!0)$.style.width=A+"px",$.style.height=s+"px";if(L!==null)L.setSize($.width,$.height);this.setViewport(0,0,A,s)},this.getDrawingBufferSize=function(A){return A.set(U0*C,b*C).floor()},this.setDrawingBufferSize=function(A,s,H0){U0=A,b=s,C=H0,$.width=Math.floor(A*H0),$.height=Math.floor(s*H0),this.setViewport(0,0,A,s)},this.setEffects=function(A){if(O===V8){Z9("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let s=0;s<A.length;s++)if(A[s].isOutputPass===!0){t0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(J0)},this.getViewport=function(A){return A.copy(K0)},this.setViewport=function(A,s,H0,X0){if(A.isVector4)K0.set(A.x,A.y,A.z,A.w);else K0.set(A,s,H0,X0);_.viewport(J0.copy(K0).multiplyScalar(C).round())},this.getScissor=function(A){return A.copy($0)},this.setScissor=function(A,s,H0,X0){if(A.isVector4)$0.set(A.x,A.y,A.z,A.w);else $0.set(A,s,H0,X0);_.scissor(Y0.copy($0).multiplyScalar(C).round())},this.getScissorTest=function(){return D0},this.setScissorTest=function(A){_.setScissorTest(D0=A)},this.setOpaqueSort=function(A){x=A},this.setTransparentSort=function(A){n=A},this.getClearColor=function(A){return A.copy(J9.getClearColor())},this.setClearColor=function(){J9.setClearColor(...arguments)},this.getClearAlpha=function(){return J9.getClearAlpha()},this.setClearAlpha=function(){J9.setClearAlpha(...arguments)},this.clear=function(A=!0,s=!0,H0=!0){let X0=0;if(A){let t=!1;if(v!==null){let S0=v.texture.format;t=B.has(S0)}if(t){let S0=v.texture.type,c0=R.has(S0),x0=J9.getClearColor(),s0=J9.getClearAlpha(),o0=x0.r,H9=x0.g,B9=x0.b;if(c0)E[0]=o0,E[1]=H9,E[2]=B9,E[3]=s0,m.clearBufferuiv(m.COLOR,0,E);else z[0]=o0,z[1]=H9,z[2]=B9,z[3]=s0,m.clearBufferiv(m.COLOR,0,z)}else X0|=m.COLOR_BUFFER_BIT}if(s)X0|=m.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(H0)X0|=m.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(X0!==0)m.clear(X0)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),h=A},this.dispose=function(){$.removeEventListener("webglcontextlost",Y9,!1),$.removeEventListener("webglcontextrestored",l9,!1),$.removeEventListener("webglcontextcreationerror",y9,!1),J9.dispose(),r0.dispose(),j0.dispose(),u.dispose(),B0.dispose(),G0.dispose(),v0.dispose(),m0.dispose(),R0.dispose(),f0.dispose(),f0.removeEventListener("sessionstart",P$),f0.removeEventListener("sessionend",z$),l8.stop()};function Y9(A){A.preventDefault(),o$("WebGLRenderer: Context Lost."),i=!0}function l9(){o$("WebGLRenderer: Context Restored."),i=!1;let A=P.autoReset,s=d0.enabled,H0=d0.autoUpdate,X0=d0.needsUpdate,t=d0.type;M0(),P.autoReset=A,d0.enabled=s,d0.autoUpdate=H0,d0.needsUpdate=X0,d0.type=t}function y9(A){Z9("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function r6(A){let s=A.target;s.removeEventListener("dispose",r6),N8(s)}function N8(A){sQ(A),u.remove(A)}function sQ(A){let s=u.get(A).programs;if(s!==void 0){if(s.forEach(function(H0){R0.releaseProgram(H0)}),A.isShaderMaterial)R0.releaseShaderCache(A)}}this.renderBufferDirect=function(A,s,H0,X0,t,S0){if(s===null)s=k9;let c0=t.isMesh&&t.matrixWorld.determinantAffine()<0,x0=iQ(A,s,H0,X0,t);_.setMaterial(X0,c0);let s0=H0.index,o0=1;if(X0.wireframe===!0){if(s0=b0.getWireframeAttribute(H0),s0===void 0)return;o0=2}let H9=H0.drawRange,B9=H0.attributes.position,i0=H9.start*o0,f9=(H9.start+H9.count)*o0;if(S0!==null)i0=Math.max(i0,S0.start*o0),f9=Math.min(f9,(S0.start+S0.count)*o0);if(s0!==null)i0=Math.max(i0,0),f9=Math.min(f9,s0.count);else if(B9!==void 0&&B9!==null)i0=Math.max(i0,0),f9=Math.min(f9,B9.count);let r9=f9-i0;if(r9<0||r9===1/0)return;v0.setup(t,X0,x0,H0,s0);let M9,x9=o;if(s0!==null)M9=A0.get(s0),x9=y0,x9.setIndex(M9);if(t.isMesh)if(X0.wireframe===!0)_.setLineWidth(X0.wireframeLinewidth*N9()),x9.setMode(m.LINES);else x9.setMode(m.TRIANGLES);else if(t.isLine){let U6=X0.linewidth;if(U6===void 0)U6=1;if(_.setLineWidth(U6*N9()),t.isLineSegments)x9.setMode(m.LINES);else if(t.isLineLoop)x9.setMode(m.LINE_LOOP);else x9.setMode(m.LINE_STRIP)}else if(t.isPoints)x9.setMode(m.POINTS);else if(t.isSprite)x9.setMode(m.TRIANGLES);if(t.isBatchedMesh)if(!P9.get("WEBGL_multi_draw")){let{_multiDrawStarts:U6,_multiDrawCounts:p0,_multiDrawCount:M6}=t,A9=s0?A0.get(s0).bytesPerElement:1,N6=u.get(X0).currentProgram.getUniforms();for(let t6=0;t6<M6;t6++)N6.setValue(m,"_gl_DrawID",t6),x9.render(U6[t6]/A9,p0[t6])}else x9.renderMultiDraw(t._multiDrawStarts,t._multiDrawCounts,t._multiDrawCount);else if(t.isInstancedMesh)x9.renderInstances(i0,r9,t.count);else if(H0.isInstancedBufferGeometry){let U6=H0._maxInstanceCount!==void 0?H0._maxInstanceCount:1/0,p0=Math.min(H0.instanceCount,U6);x9.renderInstances(i0,r9,p0)}else x9.render(i0,r9)};function Y7(A,s,H0,X0){if(h!==null&&A.isNodeMaterial)h.setObject(X0,A);if(z0===!0)k0.setState(A,H0,!1);if(A.transparent===!0&&A.side===a9&&A.forceSinglePass===!1)A.side=I6,A.needsUpdate=!0,b7(A,s,X0),A.side=B7,A.needsUpdate=!0,b7(A,s,X0),A.side=a9;else b7(A,s,X0)}this.compile=function(A,s,H0=null){if(H0===null)H0=A;if(h!==null)h.renderStart(A,s,H0);if(T=j0.get(H0),T.init(s),D.push(T),H0.traverseVisible(function(t){if(t.isLight&&t.layers.test(s.layers)){if(T.pushLight(t),t.castShadow)T.pushShadow(t)}}),A!==H0)A.traverseVisible(function(t){if(t.isLight&&t.layers.test(s.layers)){if(T.pushLight(t),t.castShadow)T.pushShadow(t)}});if(T.setupLights(),h!==null)h.updateLights(T.state.lightsArray);if(V0=this.localClippingEnabled,z0=k0.init(this.clippingPlanes,V0),z0===!0)k0.setGlobalState(this.clippingPlanes,s);if(h!==null)d0.render(T.state.shadowsArray,H0,s);let X0=new Set;if(A.traverse(function(t){if(!(t.isMesh||t.isPoints||t.isLine||t.isSprite))return;let S0=t.material;if(S0)if(Array.isArray(S0))for(let c0=0;c0<S0.length;c0++){let x0=S0[c0];Y7(x0,H0,s,t),X0.add(x0)}else Y7(S0,H0,s,t),X0.add(S0)}),T=D.pop(),h!==null)h.renderEnd();return X0},this.compileAsync=function(A,s,H0=null){let X0=this.compile(A,s,H0);return new Promise((t)=>{function S0(){if(X0.forEach(function(c0){let s0=u.get(c0).currentProgram;if(s0===void 0||s0.isReady())X0.delete(c0)}),X0.size===0){t(A);return}setTimeout(S0,10)}if(P9.get("KHR_parallel_shader_compile")!==null)S0();else setTimeout(S0,10)})};let j7=null;function y7(A){if(j7)j7(A)}function P$(){l8.stop()}function z$(){l8.start()}let l8=new zU;if(l8.setAnimationLoop(y7),typeof self<"u")l8.setContext(self);this.setAnimationLoop=function(A){j7=A,f0.setAnimationLoop(A),A===null?l8.stop():l8.start()},f0.addEventListener("sessionstart",P$),f0.addEventListener("sessionend",z$),this.render=function(A,s){if(s!==void 0&&s.isCamera!==!0){Z9("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(i===!0)return;if(h!==null)h.renderStart(A,s);let H0=f0.enabled===!0&&f0.isPresenting===!0,X0=L!==null&&(v===null||H0)&&L.begin(I,v);if(A.matrixWorldAutoUpdate===!0)A.updateMatrixWorld();if(s.parent===null&&s.matrixWorldAutoUpdate===!0)s.updateMatrixWorld();if(f0.enabled===!0&&f0.isPresenting===!0&&(L===null||L.isCompositing()===!1)){if(f0.cameraAutoUpdate===!0)f0.updateCamera(s);s=f0.getCamera()}if(A.isScene===!0)A.onBeforeRender(I,A,s,v);if(T=j0.get(A,D.length),T.init(s),T.state.textureUnits=W0.getTextureUnits(),D.push(T),u0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),L0.setFromProjectionMatrix(u0,kX,s.reversedDepth),V0=this.localClippingEnabled,z0=k0.init(this.clippingPlanes,V0),V=r0.get(A,w.length),V.init(),w.push(V),f0.enabled===!0&&f0.isPresenting===!0){let c0=I.xr.getDepthSensingMesh();if(c0!==null)f7(c0,s,-1/0,I.sortObjects)}if(f7(A,s,0,I.sortObjects),V.finish(),h!==null)h.updateLights(T.state.lightsArray);if(I.sortObjects===!0)V.sort(x,n);if(S9=f0.enabled===!1||f0.isPresenting===!1||f0.hasDepthSensing()===!1,S9)J9.addToRenderList(V,A);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(z0===!0)k0.beginShadows();let t=T.state.shadowsArray;if(d0.render(t,A,s),z0===!0)k0.endShadows();if((X0&&L.hasRenderPass())===!1){let{opaque:c0,transmissive:x0}=V;if(T.setupLights(),s.isArrayCamera){let s0=s.cameras;if(x0.length>0)for(let o0=0,H9=s0.length;o0<H9;o0++){let B9=s0[o0];u6(c0,x0,A,B9)}if(S9)J9.render(A);for(let o0=0,H9=s0.length;o0<H9;o0++){let B9=s0[o0];A$(V,A,B9,B9.viewport)}}else{if(x0.length>0)u6(c0,x0,A,s);if(S9)J9.render(A);A$(V,A,s)}}if(v!==null&&p===0)W0.updateMultisampleRenderTarget(v),W0.updateRenderTargetMipmap(v);if(X0)L.end(I);if(A.isScene===!0)A.onAfterRender(I,A,s);if(v0.resetDefaultState(),r=-1,l=null,D.pop(),D.length>0){if(T=D[D.length-1],W0.setTextureUnits(T.state.textureUnits),z0===!0)k0.setGlobalState(I.clippingPlanes,T.state.camera)}else T=null;if(w.pop(),w.length>0)V=w[w.length-1];else V=null;if(h!==null)h.renderEnd()};function f7(A,s,H0,X0){if(A.visible===!1)return;if(A.layers.test(s.layers)){if(A.isGroup)H0=A.renderOrder;else if(A.isLOD){if(A.autoUpdate===!0)A.update(s)}else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight){if(T.pushLight(A),A.castShadow)T.pushShadow(A)}else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(L0)){if(X0)a0.setFromMatrixPosition(A.matrixWorld).applyMatrix4(u0);let c0=G0.update(A),x0=A.material;if(x0.visible)V.push(A,c0,x0,H0,a0.z,null,s)}}else if(A.isMesh||A.isLine||A.isPoints){if(!A.frustumCulled||A.intersectsFrustum(L0)){let c0=G0.update(A),x0=A.material;if(X0){if(A.boundingSphere!==void 0){if(A.boundingSphere===null)A.computeBoundingSphere();a0.copy(A.boundingSphere.center)}else{if(c0.boundingSphere===null)c0.computeBoundingSphere();a0.copy(c0.boundingSphere.center)}a0.applyMatrix4(A.matrixWorld).applyMatrix4(u0)}if(Array.isArray(x0)){let s0=c0.groups;for(let o0=0,H9=s0.length;o0<H9;o0++){let B9=s0[o0],i0=x0[B9.materialIndex];if(i0&&i0.visible)V.push(A,c0,i0,H0,a0.z,B9,s)}}else if(x0.visible)V.push(A,c0,x0,H0,a0.z,null,s)}}}let S0=A.children;for(let c0=0,x0=S0.length;c0<x0;c0++)f7(S0[c0],s,H0,X0)}function A$(A,s,H0,X0){let{opaque:t,transmissive:S0,transparent:c0}=A;if(T.setupLightsView(H0),z0===!0)k0.setGlobalState(I.clippingPlanes,H0);if(X0)_.viewport(J0.copy(X0));if(t.length>0)v7(t,s,H0);if(S0.length>0)v7(S0,s,H0);if(c0.length>0)v7(c0,s,H0);_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function u6(A,s,H0,X0){if((H0.isScene===!0?H0.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X0.id]===void 0){let i0=P9.has("EXT_color_buffer_half_float")||P9.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X0.id]=new X6(1,1,{generateMipmaps:!0,type:i0?V6:V8,minFilter:j8,samples:Math.max(4,C9.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:V9.workingColorSpace})}let S0=T.state.transmissionRenderTarget[X0.id],c0=X0.viewport||J0;S0.setSize(c0.z*I.transmissionResolutionScale,c0.w*I.transmissionResolutionScale);let x0=I.getRenderTarget(),s0=I.getActiveCubeFace(),o0=I.getActiveMipmapLevel();if(I.setRenderTarget(S0),I.getClearColor(j),a=I.getClearAlpha(),a<1)I.setClearColor(16777215,0.5);if(I.clear(),S9)J9.render(H0);let H9=I.toneMapping;I.toneMapping=R8;let B9=X0.viewport;if(X0.viewport!==void 0)X0.viewport=void 0;if(T.setupLightsView(X0),z0===!0)k0.setGlobalState(I.clippingPlanes,X0);if(v7(A,H0,X0),W0.updateMultisampleRenderTarget(S0),W0.updateRenderTargetMipmap(S0),P9.has("WEBGL_multisampled_render_to_texture")===!1){let i0=!1;for(let f9=0,r9=s.length;f9<r9;f9++){let M9=s[f9],{object:x9,geometry:U6,material:p0,group:M6}=M9;if(p0.side===a9&&x9.layers.test(X0.layers)){let A9=p0.side;p0.side=I6,p0.needsUpdate=!0,IJ(x9,H0,X0,U6,p0,M6),p0.side=A9,p0.needsUpdate=!0,i0=!0}}if(i0===!0)W0.updateMultisampleRenderTarget(S0),W0.updateRenderTargetMipmap(S0)}if(I.setRenderTarget(x0,s0,o0),I.setClearColor(j,a),B9!==void 0)X0.viewport=B9;I.toneMapping=H9}function v7(A,s,H0){let X0=s.isScene===!0?s.overrideMaterial:null;for(let t=0,S0=A.length;t<S0;t++){let c0=A[t],{object:x0,geometry:s0,group:o0}=c0,H9=c0.material;if(H9.allowOverride===!0&&X0!==null)H9=X0;if(x0.layers.test(H0.layers))IJ(x0,s,H0,s0,H9,o0)}}function IJ(A,s,H0,X0,t,S0){if(h!==null&&t.isNodeMaterial)h.setObject(A,t);if(A.onBeforeRender(I,s,H0,X0,t,S0),A.modelViewMatrix.multiplyMatrices(H0.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),t.onBeforeRender(I,s,H0,X0,A,S0),t.transparent===!0&&t.side===a9&&t.forceSinglePass===!1)t.side=I6,t.needsUpdate=!0,I.renderBufferDirect(H0,s,X0,t,A,S0),t.side=B7,t.needsUpdate=!0,I.renderBufferDirect(H0,s,X0,t,A,S0),t.side=a9;else I.renderBufferDirect(H0,s,X0,t,A,S0);A.onAfterRender(I,s,H0,X0,t,S0)}function b7(A,s,H0){if(s.isScene!==!0)s=k9;let X0=u.get(A),t=T.state.lights,S0=T.state.shadowsArray,c0=t.state.version,x0=R0.getParameters(A,t.state,S0,s,H0,T.state.lightProbeGridArray),s0=R0.getProgramCacheKey(x0),o0=X0.programs;X0.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?s.environment:null,X0.fog=s.fog;let H9=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;if(X0.envMap=B0.get(A.envMap||X0.environment,H9),X0.envMapRotation=X0.environment!==null&&A.envMap===null?s.environmentRotation:A.envMapRotation,o0===void 0)A.addEventListener("dispose",r6),o0=new Map,X0.programs=o0;let B9=o0.get(s0);if(B9!==void 0){if(X0.currentProgram===B9&&X0.lightsStateVersion===c0)return k6(A,x0),B9}else{if(x0.uniforms=R0.getUniforms(A),h!==null&&A.isNodeMaterial)h.build(A,H0,x0);A.onBeforeCompile(x0,I),B9=R0.acquireProgram(x0,s0),o0.set(s0,B9),X0.uniforms=x0.uniforms}let i0=X0.uniforms;if(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)i0.clippingPlanes=k0.uniform;if(k6(A,x0),X0.needsLights=oQ(A),X0.lightsStateVersion=c0,X0.needsLights)i0.ambientLightColor.value=t.state.ambient,i0.lightProbe.value=t.state.probe,i0.sunLights.value=t.state.sun,i0.sunLightShadows.value=t.state.sunShadow,i0.directionalLights.value=t.state.directional,i0.directionalLightShadows.value=t.state.directionalShadow,i0.spotLights.value=t.state.spot,i0.spotLightShadows.value=t.state.spotShadow,i0.rectAreaLights.value=t.state.rectArea,i0.ltc_1.value=t.state.rectAreaLTC1,i0.ltc_2.value=t.state.rectAreaLTC2,i0.pointLights.value=t.state.point,i0.pointLightShadows.value=t.state.pointShadow,i0.hemisphereLights.value=t.state.hemi,i0.sunShadowMatrix.value=t.state.sunShadowMatrix,i0.sunShadowCascade.value=t.state.sunShadowCascade,i0.directionalShadowMatrix.value=t.state.directionalShadowMatrix,i0.spotLightMatrix.value=t.state.spotLightMatrix,i0.spotLightMap.value=t.state.spotLightMap,i0.pointShadowMatrix.value=t.state.pointShadowMatrix;return X0.lightProbeGrid=T.state.lightProbeGridArray.length>0,X0.currentProgram=B9,X0.uniformsList=null,B9}function PJ(A){if(A.uniformsList===null){let s=A.currentProgram.getUniforms();A.uniformsList=zQ.seqWithValue(s.seq,A.uniforms)}return A.uniformsList}function k6(A,s){let H0=u.get(A);H0.outputColorSpace=s.outputColorSpace,H0.batching=s.batching,H0.batchingColor=s.batchingColor,H0.instancing=s.instancing,H0.instancingColor=s.instancingColor,H0.instancingMorph=s.instancingMorph,H0.skinning=s.skinning,H0.morphTargets=s.morphTargets,H0.morphNormals=s.morphNormals,H0.morphColors=s.morphColors,H0.morphTargetsCount=s.morphTargetsCount,H0.numClippingPlanes=s.numClippingPlanes,H0.numIntersection=s.numClipIntersection,H0.vertexAlphas=s.vertexAlphas,H0.vertexTangents=s.vertexTangents,H0.toneMapping=s.toneMapping}function zJ(A,s){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;M.setFromMatrixPosition(s.matrixWorld);for(let H0=0,X0=A.length;H0<X0;H0++){let t=A[H0];if(t.texture!==null&&t.boundingBox.containsPoint(M))return t}return null}function iQ(A,s,H0,X0,t){if(s.isScene!==!0)s=k9;W0.resetTextureUnits();let S0=s.fog,c0=X0.isMeshStandardMaterial||X0.isMeshLambertMaterial||X0.isMeshPhongMaterial?s.environment:null,x0=v===null?I.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:V9.workingColorSpace,s0=X0.isMeshStandardMaterial||X0.isMeshLambertMaterial&&!X0.envMap||X0.isMeshPhongMaterial&&!X0.envMap,o0=B0.get(X0.envMap||c0,s0),H9=X0.vertexColors===!0&&!!H0.attributes.color&&H0.attributes.color.itemSize===4,B9=!!H0.attributes.tangent&&(!!X0.normalMap||X0.anisotropy>0),i0=!!H0.morphAttributes.position,f9=!!H0.morphAttributes.normal,r9=!!H0.morphAttributes.color,M9=R8;if(X0.toneMapped){if(v===null||v.isXRRenderTarget===!0)M9=I.toneMapping}let x9=H0.morphAttributes.position||H0.morphAttributes.normal||H0.morphAttributes.color,U6=x9!==void 0?x9.length:0,p0=u.get(X0),M6=T.state.lights;if(z0===!0){if(V0===!0||A!==l){let u9=A===l&&X0.id===r;k0.setState(X0,A,u9)}}let A9=!1;if(X0.version===p0.__version){if(p0.needsLights&&p0.lightsStateVersion!==M6.state.version)A9=!0;else if(p0.outputColorSpace!==x0)A9=!0;else if(t.isBatchedMesh&&p0.batching===!1)A9=!0;else if(!t.isBatchedMesh&&p0.batching===!0)A9=!0;else if(t.isBatchedMesh&&p0.batchingColor===!0&&t._colorsTexture===null)A9=!0;else if(t.isBatchedMesh&&p0.batchingColor===!1&&t._colorsTexture!==null)A9=!0;else if(t.isInstancedMesh&&p0.instancing===!1)A9=!0;else if(!t.isInstancedMesh&&p0.instancing===!0)A9=!0;else if(t.isSkinnedMesh&&p0.skinning===!1)A9=!0;else if(!t.isSkinnedMesh&&p0.skinning===!0)A9=!0;else if(t.isInstancedMesh&&p0.instancingColor===!0&&t.instanceColor===null)A9=!0;else if(t.isInstancedMesh&&p0.instancingColor===!1&&t.instanceColor!==null)A9=!0;else if(t.isInstancedMesh&&p0.instancingMorph===!0&&t.morphTexture===null)A9=!0;else if(t.isInstancedMesh&&p0.instancingMorph===!1&&t.morphTexture!==null)A9=!0;else if(p0.envMap!==o0)A9=!0;else if(X0.fog===!0&&p0.fog!==S0)A9=!0;else if(p0.numClippingPlanes!==void 0&&(p0.numClippingPlanes!==k0.numPlanes||p0.numIntersection!==k0.numIntersection))A9=!0;else if(p0.vertexAlphas!==H9)A9=!0;else if(p0.vertexTangents!==B9)A9=!0;else if(p0.morphTargets!==i0)A9=!0;else if(p0.morphNormals!==f9)A9=!0;else if(p0.morphColors!==r9)A9=!0;else if(p0.toneMapping!==M9)A9=!0;else if(p0.morphTargetsCount!==U6)A9=!0;else if(!!p0.lightProbeGrid!==T.state.lightProbeGridArray.length>0)A9=!0}else A9=!0,p0.__version=X0.version;let N6=p0.currentProgram;if(A9===!0){if(N6=b7(X0,s,t),h&&X0.isNodeMaterial)h.onUpdateProgram(X0,N6,p0)}let t6=!1,A8=!1,H7=!1,p9=N6.getUniforms(),i9=p0.uniforms;if(_.useProgram(N6.program))t6=!0,A8=!0,H7=!0;if(X0.id!==r)r=X0.id,A8=!0;if(p0.needsLights){let u9=zJ(T.state.lightProbeGridArray,t);if(p0.lightProbeGrid!==u9)p0.lightProbeGrid=u9,A8=!0}if(t6||l!==A){if(_.buffers.depth.getReversed()&&A.reversedDepth!==!0)A._reversedDepth=!0,A.updateProjectionMatrix();p9.setValue(m,"projectionMatrix",A.projectionMatrix),p9.setValue(m,"viewMatrix",A.matrixWorldInverse);let O6=p9.map.cameraPosition;if(O6!==void 0)O6.setValue(m,X9.setFromMatrixPosition(A.matrixWorld));if(C9.logarithmicDepthBuffer)p9.setValue(m,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2));if(X0.isMeshPhongMaterial||X0.isMeshToonMaterial||X0.isMeshLambertMaterial||X0.isMeshBasicMaterial||X0.isMeshStandardMaterial||X0.isShaderMaterial)p9.setValue(m,"isOrthographic",A.isOrthographicCamera===!0);if(l!==A)l=A,A8=!0,H7=!0}if(p0.needsLights){if(M6.state.sunShadowMap.length>0)p9.setValue(m,"sunShadowMap",M6.state.sunShadowMap,W0);if(M6.state.directionalShadowMap.length>0)p9.setValue(m,"directionalShadowMap",M6.state.directionalShadowMap,W0);if(M6.state.spotShadowMap.length>0)p9.setValue(m,"spotShadowMap",M6.state.spotShadowMap,W0);if(M6.state.pointShadowMap.length>0)p9.setValue(m,"pointShadowMap",M6.state.pointShadowMap,W0)}if(t.isSkinnedMesh){p9.setOptional(m,t,"bindMatrix"),p9.setOptional(m,t,"bindMatrixInverse");let u9=t.skeleton;if(u9){if(u9.boneTexture===null)u9.computeBoneTexture();p9.setValue(m,"boneTexture",u9.boneTexture,W0)}}if(t.isBatchedMesh){if(p9.setOptional(m,t,"batchingTexture"),p9.setValue(m,"batchingTexture",t._matricesTexture,W0),p9.setOptional(m,t,"batchingIdTexture"),p9.setValue(m,"batchingIdTexture",t._indirectTexture,W0),p9.setOptional(m,t,"batchingColorTexture"),t._colorsTexture!==null)p9.setValue(m,"batchingColorTexture",t._colorsTexture,W0)}let C6=H0.morphAttributes;if(C6.position!==void 0||C6.normal!==void 0||C6.color!==void 0)z9.update(t,H0,N6);if(A8||p0.receiveShadow!==t.receiveShadow)p0.receiveShadow=t.receiveShadow,p9.setValue(m,"receiveShadow",t.receiveShadow);if((X0.isMeshStandardMaterial||X0.isMeshLambertMaterial||X0.isMeshPhongMaterial)&&X0.envMap===null&&s.environment!==null)i9.envMapIntensity.value=s.environmentIntensity;if(i9.dfgLUT!==void 0)i9.dfgLUT.value=fR();if(A8){if(p9.setValue(m,"toneMappingExposure",I.toneMappingExposure),p0.needsLights)cK(i9,H7);if(S0&&X0.fog===!0)h0.refreshFogUniforms(i9,S0);if(h0.refreshMaterialUniforms(i9,X0,C,b,T.state.transmissionRenderTarget[A.id]),p0.needsLights&&p0.lightProbeGrid){let u9=p0.lightProbeGrid;i9.probesSH.value=u9.texture,i9.probesMin.value.copy(u9.boundingBox.min),i9.probesMax.value.copy(u9.boundingBox.max),i9.probesResolution.value.copy(u9.resolution)}zQ.upload(m,PJ(p0),i9,W0)}if(X0.isShaderMaterial&&X0.uniformsNeedUpdate===!0)zQ.upload(m,PJ(p0),i9,W0),X0.uniformsNeedUpdate=!1;if(X0.isSpriteMaterial)p9.setValue(m,"center",t.center);if(p9.setValue(m,"modelViewMatrix",t.modelViewMatrix),p9.setValue(m,"normalMatrix",t.normalMatrix),p9.setValue(m,"modelMatrix",t.matrixWorld),X0.uniformsGroups!==void 0){let u9=X0.uniformsGroups;for(let O6=0,T8=u9.length;O6<T8;O6++){let AJ=u9[O6];m0.update(AJ,N6),m0.bind(AJ,N6)}}return N6}function cK(A,s){A.ambientLightColor.needsUpdate=s,A.lightProbe.needsUpdate=s,A.sunLights.needsUpdate=s,A.sunLightShadows.needsUpdate=s,A.directionalLights.needsUpdate=s,A.directionalLightShadows.needsUpdate=s,A.pointLights.needsUpdate=s,A.pointLightShadows.needsUpdate=s,A.spotLights.needsUpdate=s,A.spotLightShadows.needsUpdate=s,A.rectAreaLights.needsUpdate=s,A.hemisphereLights.needsUpdate=s}function oQ(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(A,s,H0){let X0=u.get(A);if(X0.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X0.__autoAllocateDepthBuffer===!1)X0.__useRenderToTexture=!1;u.get(A.texture).__webglTexture=s,u.get(A.depthTexture).__webglTexture=X0.__autoAllocateDepthBuffer?void 0:H0,X0.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,s){let H0=u.get(A);H0.__webglFramebuffer=s,H0.__useDefaultFramebuffer=s===void 0},this.setRenderTarget=function(A,s=0,H0=0){v=A,y=s,p=H0;let X0=null,t=!1,S0=!1;if(A){let x0=u.get(A);if(x0.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(m.FRAMEBUFFER,x0.__webglFramebuffer),J0.copy(A.viewport),Y0.copy(A.scissor),I0=A.scissorTest,_.viewport(J0),_.scissor(Y0),_.setScissorTest(I0),r=-1;return}else if(x0.__webglFramebuffer===void 0)W0.setupRenderTarget(A);else if(x0.__hasExternalTextures)W0.rebindTextures(A,u.get(A.texture).__webglTexture,u.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let H9=A.depthTexture;if(x0.__boundDepthTexture!==H9){if(H9!==null&&u.has(H9)&&(A.width!==H9.image.width||A.height!==H9.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W0.setupDepthRenderbuffer(A)}}let s0=A.texture;if(s0.isData3DTexture||s0.isDataArrayTexture||s0.isCompressedArrayTexture)S0=!0;let o0=u.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget){if(Array.isArray(o0[s]))X0=o0[s][H0];else X0=o0[s];t=!0}else if(A.samples>0&&W0.useMultisampledRTT(A)===!1)X0=u.get(A).__webglMultisampledFramebuffer;else if(Array.isArray(o0))X0=o0[H0];else X0=o0;J0.copy(A.viewport),Y0.copy(A.scissor),I0=A.scissorTest}else J0.copy(K0).multiplyScalar(C).floor(),Y0.copy($0).multiplyScalar(C).floor(),I0=D0;if(H0!==0)X0=d;if(_.bindFramebuffer(m.FRAMEBUFFER,X0))_.drawBuffers(A,X0);if(_.viewport(J0),_.scissor(Y0),_.setScissorTest(I0),t){let x0=u.get(A.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_CUBE_MAP_POSITIVE_X+s,x0.__webglTexture,H0)}else if(S0){let x0=s;for(let s0=0;s0<A.textures.length;s0++){let o0=u.get(A.textures[s0]);m.framebufferTextureLayer(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0+s0,o0.__webglTexture,H0,x0)}}else if(A!==null&&H0!==0){let x0=u.get(A.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,x0.__webglTexture,H0)}r=-1};function h7(A){let s=u.get(A);if(s.__readFormat!==A.format||s.__readType!==A.type)s.__readFormat=A.format,s.__readType=A.type,s.__formatReadable=C9.textureFormatReadable(A.format),s.__typeReadable=C9.textureTypeReadable(A.type);return s}if(this.readRenderTargetPixels=function(A,s,H0,X0,t,S0,c0,x0=0){if(!(A&&A.isWebGLRenderTarget)){Z9("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let s0=u.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&c0!==void 0)s0=s0[c0];if(s0){_.bindFramebuffer(m.FRAMEBUFFER,s0);try{let o0=A.textures[x0],H9=o0.format,B9=o0.type;if(A.textures.length>1)m.readBuffer(m.COLOR_ATTACHMENT0+x0);let i0=h7(o0);if(i0.__formatReadable===!1){Z9("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(i0.__typeReadable===!1){Z9("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(s>=0&&s<=A.width-X0&&(H0>=0&&H0<=A.height-t))m.readPixels(s,H0,X0,t,E0.convert(H9),E0.convert(B9),S0)}finally{let o0=v!==null?u.get(v).__webglFramebuffer:null;_.bindFramebuffer(m.FRAMEBUFFER,o0)}}},this.readRenderTargetPixelsAsync=async function(A,s,H0,X0,t,S0,c0,x0=0){if(!(A&&A.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let s0=u.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&c0!==void 0)s0=s0[c0];if(s0)if(s>=0&&s<=A.width-X0&&(H0>=0&&H0<=A.height-t)){_.bindFramebuffer(m.FRAMEBUFFER,s0);let o0=A.textures[x0],H9=o0.format,B9=o0.type;if(A.textures.length>1)m.readBuffer(m.COLOR_ATTACHMENT0+x0);let i0=h7(o0);if(i0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(i0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let f9=m.createBuffer();m.bindBuffer(m.PIXEL_PACK_BUFFER,f9),m.bufferData(m.PIXEL_PACK_BUFFER,S0.byteLength,m.STREAM_READ),m.readPixels(s,H0,X0,t,E0.convert(H9),E0.convert(B9),0),m.bindBuffer(m.PIXEL_PACK_BUFFER,null);let r9=v!==null?u.get(v).__webglFramebuffer:null;_.bindFramebuffer(m.FRAMEBUFFER,r9);let M9=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0);return m.flush(),await u5(m,M9,4),m.bindBuffer(m.PIXEL_PACK_BUFFER,f9),m.getBufferSubData(m.PIXEL_PACK_BUFFER,0,S0),m.bindBuffer(m.PIXEL_PACK_BUFFER,null),m.deleteBuffer(f9),m.deleteSync(M9),S0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,s=null,H0=0){let X0=Math.pow(2,-H0),t=Math.floor(A.image.width*X0),S0=Math.floor(A.image.height*X0),c0=s!==null?s.x:0,x0=s!==null?s.y:0;W0.setTexture2D(A,0),m.copyTexSubImage2D(m.TEXTURE_2D,H0,0,0,c0,x0,t,S0),_.unbindTexture()},this.copyTextureToTexture=function(A,s,H0=null,X0=null,t=0,S0=0){let c0,x0,s0,o0,H9,B9,i0,f9,r9,M9=A.isCompressedTexture?A.mipmaps[S0]:A.image;if(H0!==null)c0=H0.max.x-H0.min.x,x0=H0.max.y-H0.min.y,s0=H0.isBox3?H0.max.z-H0.min.z:1,o0=H0.min.x,H9=H0.min.y,B9=H0.isBox3?H0.min.z:0;else{let i9=Math.pow(2,-t);if(c0=Math.floor(M9.width*i9),x0=Math.floor(M9.height*i9),A.isDataArrayTexture)s0=M9.depth;else if(A.isData3DTexture)s0=Math.floor(M9.depth*i9);else s0=1;o0=0,H9=0,B9=0}if(X0!==null)i0=X0.x,f9=X0.y,r9=X0.z;else i0=0,f9=0,r9=0;let x9=E0.convert(s.format),U6=E0.convert(s.type),p0;if(s.isData3DTexture)W0.setTexture3D(s,0),p0=m.TEXTURE_3D;else if(s.isDataArrayTexture||s.isCompressedArrayTexture)W0.setTexture2DArray(s,0),p0=m.TEXTURE_2D_ARRAY;else W0.setTexture2D(s,0),p0=m.TEXTURE_2D;_.activeTexture(m.TEXTURE0),_.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,s.flipY),_.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),_.pixelStorei(m.UNPACK_ALIGNMENT,s.unpackAlignment);let M6=_.getParameter(m.UNPACK_ROW_LENGTH),A9=_.getParameter(m.UNPACK_IMAGE_HEIGHT),N6=_.getParameter(m.UNPACK_SKIP_PIXELS),t6=_.getParameter(m.UNPACK_SKIP_ROWS),A8=_.getParameter(m.UNPACK_SKIP_IMAGES);_.pixelStorei(m.UNPACK_ROW_LENGTH,M9.width),_.pixelStorei(m.UNPACK_IMAGE_HEIGHT,M9.height),_.pixelStorei(m.UNPACK_SKIP_PIXELS,o0),_.pixelStorei(m.UNPACK_SKIP_ROWS,H9),_.pixelStorei(m.UNPACK_SKIP_IMAGES,B9);let H7=A.isDataArrayTexture||A.isData3DTexture,p9=s.isDataArrayTexture||s.isData3DTexture;if(A.isDepthTexture){let i9=u.get(A),C6=u.get(s),u9=u.get(i9.__renderTarget),O6=u.get(C6.__renderTarget);_.bindFramebuffer(m.READ_FRAMEBUFFER,u9.__webglFramebuffer),_.bindFramebuffer(m.DRAW_FRAMEBUFFER,O6.__webglFramebuffer);for(let T8=0;T8<s0;T8++){if(H7)m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,u.get(A).__webglTexture,t,B9+T8),m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,u.get(s).__webglTexture,S0,r9+T8);m.blitFramebuffer(o0,H9,c0,x0,i0,f9,c0,x0,m.DEPTH_BUFFER_BIT,m.NEAREST)}_.bindFramebuffer(m.READ_FRAMEBUFFER,null),_.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else if(t!==0||A.isRenderTargetTexture||u.has(A)){let i9=u.get(A),C6=u.get(s);_.bindFramebuffer(m.READ_FRAMEBUFFER,Q0),_.bindFramebuffer(m.DRAW_FRAMEBUFFER,f);for(let u9=0;u9<s0;u9++){if(H7)m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,i9.__webglTexture,t,B9+u9);else m.framebufferTexture2D(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,i9.__webglTexture,t);if(p9)m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,C6.__webglTexture,S0,r9+u9);else m.framebufferTexture2D(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,C6.__webglTexture,S0);if(t!==0)m.blitFramebuffer(o0,H9,c0,x0,i0,f9,c0,x0,m.COLOR_BUFFER_BIT,m.NEAREST);else if(p9)m.copyTexSubImage3D(p0,S0,i0,f9,r9+u9,o0,H9,c0,x0);else m.copyTexSubImage2D(p0,S0,i0,f9,o0,H9,c0,x0)}_.bindFramebuffer(m.READ_FRAMEBUFFER,null),_.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else if(p9)if(A.isDataTexture||A.isData3DTexture)m.texSubImage3D(p0,S0,i0,f9,r9,c0,x0,s0,x9,U6,M9.data);else if(s.isCompressedArrayTexture)m.compressedTexSubImage3D(p0,S0,i0,f9,r9,c0,x0,s0,x9,M9.data);else m.texSubImage3D(p0,S0,i0,f9,r9,c0,x0,s0,x9,U6,M9);else if(A.isDataTexture)m.texSubImage2D(m.TEXTURE_2D,S0,i0,f9,c0,x0,x9,U6,M9.data);else if(A.isCompressedTexture)m.compressedTexSubImage2D(m.TEXTURE_2D,S0,i0,f9,M9.width,M9.height,x9,M9.data);else m.texSubImage2D(m.TEXTURE_2D,S0,i0,f9,c0,x0,x9,U6,M9);if(_.pixelStorei(m.UNPACK_ROW_LENGTH,M6),_.pixelStorei(m.UNPACK_IMAGE_HEIGHT,A9),_.pixelStorei(m.UNPACK_SKIP_PIXELS,N6),_.pixelStorei(m.UNPACK_SKIP_ROWS,t6),_.pixelStorei(m.UNPACK_SKIP_IMAGES,A8),S0===0&&s.generateMipmaps)m.generateMipmap(p0);_.unbindTexture()},this.initRenderTarget=function(A){if(u.get(A).__webglFramebuffer===void 0)W0.setupRenderTarget(A)},this.initTexture=function(A){if(A.isCubeTexture)W0.setTextureCube(A,0);else if(A.isData3DTexture)W0.setTexture3D(A,0);else if(A.isDataArrayTexture||A.isCompressedArrayTexture)W0.setTexture2DArray(A,0);else W0.setTexture2D(A,0);_.unbindTexture()},this.resetState=function(){y=0,p=0,v=null,_.reset(),v0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kX}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let $=this.getContext();$.drawingBufferColorSpace=V9._getDrawingBufferColorSpace(J),$.unpackColorSpace=V9._getUnpackColorSpace()}}var pU={type:"change"},XY={type:"start"},lU={type:"end"},CK=new M7,mU=new J8,vR=Math.cos(70*f8.DEG2RAD),q6=new S,m6=2*Math.PI,s9={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},WY=0.000001;class YY extends VK{constructor(J,$=null){super(J,$);if(this.state=s9.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:L7.ROTATE,MIDDLE:L7.DOLLY,RIGHT:L7.PAN},this.touches={ONE:V7.ROTATE,TWO:V7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new K9,this._lastTargetPosition=new S,this._quat=new K9().setFromUnitVectors(J.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new MQ,this._sphericalDelta=new MQ,this._scale=1,this._panOffset=new S,this._rotateStart=new O0,this._rotateEnd=new O0,this._rotateDelta=new O0,this._panStart=new O0,this._panEnd=new O0,this._panDelta=new O0,this._dollyStart=new O0,this._dollyEnd=new O0,this._dollyDelta=new O0,this._dollyDirection=new S,this._mouse=new O0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hR.bind(this),this._onPointerDown=bR.bind(this),this._onPointerUp=xR.bind(this),this._onContextMenu=cR.bind(this),this._onMouseWheel=mR.bind(this),this._onKeyDown=lR.bind(this),this._onTouchStart=uR.bind(this),this._onTouchMove=dR.bind(this),this._onMouseDown=gR.bind(this),this._onMouseMove=pR.bind(this),this._interceptControlDown=nR.bind(this),this._interceptControlUp=sR.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=s9.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pU),this.update(),this.state=s9.NONE}pan(J,$){this._pan(J,$),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let $=this.object.position;if(q6.copy($).sub(this.target),q6.applyQuaternion(this._quat),this._spherical.setFromVector3(q6),this.autoRotate&&this.state===s9.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let Q=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite(Q)&&isFinite(Z)){if(Q<-Math.PI)Q+=m6;else if(Q>Math.PI)Q-=m6;if(Z<-Math.PI)Z+=m6;else if(Z>Math.PI)Z-=m6;if(Q<=Z)this._spherical.theta=Math.max(Q,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(Q+Z)/2?Math.max(Q,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let K=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),K=W!=this._spherical.radius}if(q6.setFromSpherical(this._spherical),q6.applyQuaternion(this._quatInverse),$.copy(this.target).add(q6),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let X=q6.length();W=this._clampDistance(X*this._scale);let Y=X-W;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),K=!!Y}else if(this.object.isOrthographicCamera){let X=new S(this._mouse.x,this._mouse.y,0);X.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),K=Y!==this.object.zoom;let H=new S(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(X),this.object.updateMatrixWorld(),W=q6.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(CK.origin.copy(this.object.position),CK.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(CK.direction))<vR)this.object.lookAt(this.target);else mU.setFromNormalAndCoplanarPoint(this.object.up,this.target),CK.intersectPlane(mU,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),K=!0}if(this._scale=1,this._performCursorZoom=!1,K||this._lastPosition.distanceToSquared(this.object.position)>WY||8*(1-this._lastQuaternion.dot(this.object.quaternion))>WY||this._lastTargetPosition.distanceToSquared(this.target)>WY)return this.dispatchEvent(pU),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return m6/60*this.autoRotateSpeed*J;else return m6/60/60*this.autoRotateSpeed}_getZoomScale(J){let $=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*$)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,$){q6.setFromMatrixColumn($,0),q6.multiplyScalar(-J),this._panOffset.add(q6)}_panUp(J,$){if(this.screenSpacePanning===!0)q6.setFromMatrixColumn($,1);else q6.setFromMatrixColumn($,0),q6.crossVectors(this.object.up,q6);q6.multiplyScalar(J),this._panOffset.add(q6)}_pan(J,$){let Q=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;q6.copy(Z).sub(this.target);let K=q6.length();K*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*K/Q.clientHeight,this.object.matrix),this._panUp(2*$*K/Q.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/Q.clientWidth,this.object.matrix),this._panUp($*(this.object.top-this.object.bottom)/this.object.zoom/Q.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,$){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let Q=this.domElement.getBoundingClientRect(),Z=J-Q.left,K=$-Q.top,W=Q.width,X=Q.height;this._mouse.x=Z/W*2-1,this._mouse.y=-(K/X)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(m6*this._rotateDelta.x/$.clientHeight),this._rotateUp(m6*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let $=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(m6*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);$=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-m6*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);$=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(m6*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);$=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-m6*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);$=!0;break}if($)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._rotateStart.set(Q,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._panStart.set(Q,Z)}}_handleTouchStartDolly(J){let $=this._getSecondPointerPosition(J),Q=J.pageX-$.x,Z=J.pageY-$.y,K=Math.sqrt(Q*Q+Z*Z);this._dollyStart.set(0,K)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+Q.x),K=0.5*(J.pageY+Q.y);this._rotateEnd.set(Z,K)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(m6*this._rotateDelta.x/$.clientHeight),this._rotateUp(m6*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Q=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._panEnd.set(Q,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let $=this._getSecondPointerPosition(J),Q=J.pageX-$.x,Z=J.pageY-$.y,K=Math.sqrt(Q*Q+Z*Z);this._dollyEnd.set(0,K),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+$.x)*0.5,X=(J.pageY+$.y)*0.5;this._updateZoomParameters(W,X)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId){this._pointers.splice($,1);return}}_isTrackingPointer(J){for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId)return!0;return!1}_trackPointer(J){let $=this._pointerPositions[J.pointerId];if($===void 0)$=new O0,this._pointerPositions[J.pointerId]=$;$.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let $=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[$]}_customWheelEvent(J){let $=J.deltaMode,Q={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch($){case 1:Q.deltaY*=16;break;case 2:Q.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)Q.deltaY*=10;return Q}}function bR(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function hR(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function xR(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lU),this.state=s9.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let $=this._pointers[0],Q=this._pointerPositions[$];this._onTouchStart({pointerId:$,pageX:Q.x,pageY:Q.y});break}}function gR(J){let $;switch(J.button){case 0:$=this.mouseButtons.LEFT;break;case 1:$=this.mouseButtons.MIDDLE;break;case 2:$=this.mouseButtons.RIGHT;break;default:$=-1}switch($){case L7.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=s9.DOLLY;break;case L7.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=s9.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=s9.ROTATE}break;case L7.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=s9.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=s9.PAN}break;default:this.state=s9.NONE}if(this.state!==s9.NONE)this.dispatchEvent(XY)}function pR(J){switch(this.state){case s9.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case s9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case s9.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function mR(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==s9.NONE)return;J.preventDefault(),this.dispatchEvent(XY),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(lU)}function lR(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function uR(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case V7.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=s9.TOUCH_ROTATE;break;case V7.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=s9.TOUCH_PAN;break;default:this.state=s9.NONE}break;case 2:switch(this.touches.TWO){case V7.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=s9.TOUCH_DOLLY_PAN;break;case V7.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=s9.TOUCH_DOLLY_ROTATE;break;default:this.state=s9.NONE}break;default:this.state=s9.NONE}if(this.state!==s9.NONE)this.dispatchEvent(XY)}function dR(J){switch(this._trackPointer(J),this.state){case s9.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case s9.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case s9.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case s9.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=s9.NONE}}function cR(J){if(this.enabled===!1)return;J.preventDefault()}function nR(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function sR(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var TQ=new S;function K8(J,$,Q,Z,K,W){let X=2*Math.PI*K/4,Y=Math.max(W-2*K,0),H=Math.PI/4;TQ.copy($),TQ[Z]=0,TQ.normalize();let U=0.5*X/(X+Y),G=1-TQ.angleTo(J)/H;if(Math.sign(TQ[Q])===1)return G*U;else return Y/(X+Y)+U+U*(1-G)}class P6 extends h9{constructor(J=1,$=1,Q=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,$/2,Q/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:$,depth:Q,segments:Z,radius:K},W===1)return;let X=this.toNonIndexed();this.index=null,this.attributes.position=X.attributes.position,this.attributes.normal=X.attributes.normal,this.attributes.uv=X.attributes.uv;let Y=new S,H=new S,U=new S(J,$,Q).divideScalar(2).subScalar(K),G=this.attributes.position.array,F=this.attributes.normal.array,N=this.attributes.uv.array,q=G.length/6,O=new S,B=0.5/W;for(let R=0,E=0;R<G.length;R+=3,E+=2)switch(Y.fromArray(G,R),H.copy(Y),H.x-=Math.sign(H.x)*B,H.y-=Math.sign(H.y)*B,H.z-=Math.sign(H.z)*B,H.normalize(),G[R+0]=U.x*Math.sign(Y.x)+H.x*K,G[R+1]=U.y*Math.sign(Y.y)+H.y*K,G[R+2]=U.z*Math.sign(Y.z)+H.z*K,F[R+0]=H.x,F[R+1]=H.y,F[R+2]=H.z,Math.floor(R/q)){case 0:O.set(1,0,0),N[E+0]=K8(O,H,"z","y",K,Q),N[E+1]=1-K8(O,H,"y","z",K,$);break;case 1:O.set(-1,0,0),N[E+0]=1-K8(O,H,"z","y",K,Q),N[E+1]=1-K8(O,H,"y","z",K,$);break;case 2:O.set(0,1,0),N[E+0]=1-K8(O,H,"x","z",K,J),N[E+1]=K8(O,H,"z","x",K,Q);break;case 3:O.set(0,-1,0),N[E+0]=1-K8(O,H,"x","z",K,J),N[E+1]=1-K8(O,H,"z","x",K,Q);break;case 4:O.set(0,0,1),N[E+0]=1-K8(O,H,"x","y",K,J),N[E+1]=1-K8(O,H,"y","x",K,$);break;case 5:O.set(0,0,-1),N[E+0]=K8(O,H,"x","y",K,J),N[E+1]=1-K8(O,H,"y","x",K,$);break}}static fromJSON(J){return new P6(J.width,J.height,J.depth,J.segments,J.radius)}}function V$(J,$=!1){let Q=J[0].index!==null,Z=new Set(Object.keys(J[0].attributes)),K=new Set(Object.keys(J[0].morphAttributes)),W={},X={},Y=J[0].morphTargetsRelative,H=new b9,U=0;for(let G=0;G<J.length;++G){let F=J[G],N=0;if(Q!==(F.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let q in F.attributes){if(!Z.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+'. All geometries must have compatible attributes; make sure "'+q+'" attribute exists among all geometries, or in none of them.'),null;if(W[q]===void 0)W[q]=[];W[q].push(F.attributes[q]),N++}if(N!==Z.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". Make sure all geometries have the same number of attributes."),null;if(Y!==F.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let q in F.morphAttributes){if(!K.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+".  .morphAttributes must be consistent throughout all geometries."),null;if(X[q]===void 0)X[q]=[];X[q].push(F.morphAttributes[q])}if($){let q;if(Q)q=F.index.count;else if(F.attributes.position!==void 0)q=F.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". The geometry must have either an index or a position attribute"),null;H.addGroup(U,q,G),U+=q}}if(Q){let G=0,F=[];for(let N=0;N<J.length;++N){let q=J[N].index;for(let O=0;O<q.count;++O)F.push(q.getX(O)+G);G+=J[N].attributes.position.count}H.setIndex(F)}for(let G in W){let F=uU(W[G]);if(!F)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+G+" attribute."),null;H.setAttribute(G,F)}for(let G in X){let F=X[G][0].length;if(F===0)continue;H.morphAttributes=H.morphAttributes||{},H.morphAttributes[G]=[];for(let N=0;N<F;++N){let q=[];for(let B=0;B<X[G].length;++B)q.push(X[G][B][N]);let O=uU(q);if(!O)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+G+" morphAttribute."),null;H.morphAttributes[G].push(O)}}return H}function uU(J){let $,Q,Z,K=-1,W=0;for(let U=0;U<J.length;++U){let G=J[U];if($===void 0)$=G.array.constructor;if($!==G.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(Q===void 0)Q=G.itemSize;if(Q!==G.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(Z===void 0)Z=G.normalized;if(Z!==G.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(K===-1)K=G.gpuType;if(K!==G.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;W+=G.count*Q}let X=new $(W),Y=new t9(X,Q,Z),H=0;for(let U=0;U<J.length;++U){let G=J[U];if(G.isInterleavedBufferAttribute){let F=H/Q;for(let N=0,q=G.count;N<q;N++)for(let O=0;O<Q;O++){let B=G.getComponent(N,O);Y.setComponent(N+F,O,B)}}else X.set(G.array,H);H+=G.count*Q}if(K!==void 0)Y.gpuType=K;return Y}function HY(J,$){if($===LX)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if($===X$||$===HQ){let Q=J.getIndex();if(Q===null){let W=[],X=J.getAttribute("position");if(X!==void 0){for(let Y=0;Y<X.count;Y++)W.push(Y);J.setIndex(W),Q=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=Q.count-2,K=[];if($===X$)for(let W=1;W<=Z;W++)K.push(Q.getX(0)),K.push(Q.getX(W)),K.push(Q.getX(W+1));else for(let W=0;W<Z;W++)if(W%2===0)K.push(Q.getX(W)),K.push(Q.getX(W+1)),K.push(Q.getX(W+2));else K.push(Q.getX(W+2)),K.push(Q.getX(W+1)),K.push(Q.getX(W));if(K.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(K),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",$),J}function FJ(J){let $=new Map,Q=new Map,Z=J.clone();return dU(J,Z,function(K,W){$.set(W,K),Q.set(K,W)}),Z.traverse(function(K){if(!K.isSkinnedMesh)return;let W=K,X=$.get(K),Y=X.skeleton.bones;W.skeleton=X.skeleton.clone(),W.bindMatrix.copy(X.bindMatrix),W.skeleton.bones=Y.map(function(H){return Q.get(H)}),W.bind(W.skeleton,W.bindMatrix)}),Z}function dU(J,$,Q){Q(J,$);for(let Z=0;Z<J.children.length;Z++)dU(J.children[Z],$.children[Z],Q)}var C0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0033,pipColumnSpacing:0.0072,pipRowSpacing:0.0076,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25,boardLimit:0.27},z6={tope:1.06,z:-3.89,fondo:0.62,ancho:3.9},k8=[[0,C0.seatDistance,Math.PI],[C0.seatDistance,0,-Math.PI/2],[0,-C0.seatDistance,0],[-C0.seatDistance,0,Math.PI/2]];function NY(J){let $=J.vertical?C0.tileWidth:C0.tileLength,Q=J.vertical?C0.tileLength:C0.tileWidth;return{left:J.x-$/2,right:J.x+$/2,top:J.z-Q/2,bottom:J.z+Q/2}}var iR=C0.boardLimit,oR=C0.feltWidth/2-0.022;function GY(J,$,Q=iR){let Z=NY(J);if(Math.max(Math.abs(Z.left),Math.abs(Z.right),Math.abs(Z.top),Math.abs(Z.bottom))>Q+0.00000001)return!1;return $.every((K)=>{let W=NY(K);return Z.right<=W.left-0.0015||Z.left>=W.right+0.0015||Z.bottom<=W.top-0.0015||Z.top>=W.bottom+0.0015})}function cU(J,$,Q){let{tileLength:Z,tileWidth:K,tileGap:W}=C0,X=$.x===$.y,Y=(X?K:Z)/2,H=J.tile,U=[],G=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let F=0;F<G.length;F++){let[N,q]=G[F],O=F!==0,B=(H.isDouble?K:Z)/2,R=(H.isDouble?Z:K)/2,E=H.x+J.dx*(O?H.isDouble?0:Z/4:B),z=H.z+J.dz*(O?H.isDouble?0:Z/4:B),M=O?[0,Z/8,-Z/8]:[0];for(let V of M){let T=Math.atan2(-q,N)+(Q==="left"?Math.PI:0)+(X?Math.PI/2:0);U.push({id:$.id,x:E+N*((O?R:0)+W+Y)+J.dx*V,z:z+q*((O?R:0)+W+Y)+J.dz*V,yaw:T,vertical:Math.abs(Math.sin(T))>0.5,isDouble:X,dx:N,dz:q,side:Q})}}return U}function UY(J,$,Q,Z){let K={id:"future",x:0,y:Z?0:1};return cU({tile:J,dx:J.dx,dz:J.dz},K,Q).some((W)=>GY(W,$))}function nU(J,$=[]){return iU(J,$).placements}function sU(J,$=[]){let Q=iU(J,$);if(!Q.ends)return[];return["left","right"].map((Z)=>{let K=Q.ends[Z],W=K.tile,X=NY(W),Y=Math.abs(K.dx)*(X.right-X.left)/2+Math.abs(K.dz)*(X.bottom-X.top)/2,H=Y+0.013;return{x:W.x+K.dx*H,z:W.z+K.dz*H,dx:K.dx,dz:K.dz}})}function iU(J,$){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return{placements:[],ends:null};let Q=new Map(J.map((N)=>[N.id,N])),Z=$.filter((N)=>N.type==="play"&&N.tile&&Q.has(N.tile)),K=Q.get(Z[0]?.tile||"")||J[0],W=J.findIndex((N)=>N.id===K.id),X=K.x===K.y,Y={id:K.id,x:0,z:0,yaw:X?Math.PI/2:0,vertical:X,isDouble:X,dx:1,dz:0,side:"root"},H=[Y],U=new Map([[Y.id,Y]]),G={left:{tile:Y,dx:-1,dz:0},right:{tile:Y,dx:1,dz:0}},F=Z.length===J.length?Z.slice(1):[...J.slice(0,W).reverse().map((N)=>({type:"play",tile:N.id,side:"left"})),...J.slice(W+1).map((N)=>({type:"play",tile:N.id,side:"right"}))];for(let N of F){let q=Q.get(N.tile);if(U.has(q.id))continue;let O=N.side==="left"?"left":N.side==="right"?"right":J.findIndex((z)=>z.id===q.id)<W?"left":"right",B=cU(G[O],q,O),R=B.filter((z)=>GY(z,H));if(!R.length)R=B.filter((z)=>GY(z,H,oR));let E=R.find((z)=>UY(z,[...H,z],O,!1)&&UY(z,[...H,z],O,!0))||R.find((z)=>UY(z,[...H,z],O,!1))||R[0];if(!E)throw Error(`No safe placement for ${q.id} after ${H.length} tiles`);H.push(E),U.set(q.id,E),G[O]={tile:E,dx:E.dx,dz:E.dz}}return{placements:J.map((N)=>U.get(N.id)),ends:G}}function oU(J,$,Q=!1){if(Q)return{breath:0,headYaw:0,headNod:0};let Z=J*2.173+0.43;return{breath:0.0055*Math.sin($*(0.78+J*0.093)+Z),headYaw:0.087*Math.sin($*(0.213+J*0.037)+Z)+0.028*Math.sin($*(0.487+J*0.029)+Z*1.91),headNod:0.009*Math.sin($*(0.267+J*0.035)+Z*0.71)}}var EY=(J)=>{return J=Math.min(1,Math.max(0,J)),J*J*(3-2*J)},FY=[[0,0],[0.3,0],[0.55,0.3],[0.95,0.3],[1.3,-0.1],[1.55,0.04],[1.8,-0.06],[2.15,0]];function IK(J){for(let $=1;$<FY.length;$++){let[Q,Z]=FY[$],[K,W]=FY[$-1];if(J<Q)return W+(Z-W)*EY((J-K)/(Q-K))}return 0}function aU(J){return J<1.7?EY((J-0.25)/0.55):1-EY((J-1.7)/0.7)}var fQ=(J,$)=>J?.equipos&&$<J.equipos.length?J.equipos[$]:$%2,rU=new S(1,0,0),I8=new S(0,1,0),qY=new K9;function DY(J){let $=[];return J.traverse((Q)=>{if(Q.isBone&&!/Dedos[12]$/.test(Q.name))$.push({bone:Q,position:Q.position.clone(),quaternion:Q.quaternion.clone(),scale:Q.scale.clone()})}),$}var g8=new S,C8=new S,p8=new S,EJ=new S,X7=new S,W8=new S,qJ=new S,OJ=new S,LJ=new K9,P8=new K9,yK=new K9,wK=new K9,vQ=(J)=>Math.min(1,Math.max(-1,J)),VJ=(J,$,Q)=>Math.min(Q,Math.max($,J)),x6=(J)=>J*J*(3-2*J);function K6(J,$){J.getWorldQuaternion(P8),J.parent.getWorldQuaternion(yK),J.quaternion.copy(yK.invert()).multiply($).multiply(P8),J.updateMatrixWorld(!0)}var j6=new S,Y8=new S;function aR(J){J.holder.getWorldQuaternion(wK),j6.set(1,0,0).applyQuaternion(wK),Y8.set(0,0,1).applyQuaternion(wK)}function VY(J,$,Q,Z,K){return K.set($,Q,Z).applyMatrix4(J.holder.matrixWorld)}function OY(J,$,Q,Z){return Z.set(J,$,Q).applyQuaternion(wK).normalize()}var rR=0.965;function tR(J,$,Q){let{brazo:Z,antebrazo:K,mano:W}=J;if(!Z||!K||!W||!Z.parent||!K.parent)return;Z.getWorldPosition(g8),K.getWorldPosition(C8),W.getWorldPosition(p8);let X=g8.distanceTo(C8),Y=C8.distanceTo(p8);if(X<0.00001||Y<0.00001)return;let H=VJ(g8.distanceTo($),Math.abs(X-Y)+0.002,(X+Y)*rR);if(X7.subVectors(C8,g8),W8.subVectors(p8,C8),qJ.crossVectors(X7,W8),qJ.lengthSq()<0.0000000001)qJ.copy(j6);else qJ.normalize();let U=Math.acos(vQ((X*X+Y*Y-g8.distanceToSquared(p8))/(2*X*Y))),F=Math.acos(vQ((X*X+Y*Y-H*H)/(2*X*Y)))-U;if(K6(K,LJ.setFromAxisAngle(qJ,F)),W.getWorldPosition(p8),Math.abs(g8.distanceTo(p8)-H)>0.001)K6(K,LJ.setFromAxisAngle(qJ,-2*F)),W.getWorldPosition(p8);if(X7.subVectors(p8,g8).normalize(),W8.subVectors($,g8),W8.lengthSq()<0.0000000001)return;if(W8.normalize(),K6(Z,LJ.setFromUnitVectors(X7,W8)),!Q)return;if(K.getWorldPosition(C8),OJ.subVectors(C8,g8),OJ.addScaledVector(W8,-OJ.dot(W8)),EJ.subVectors(Q,g8),EJ.addScaledVector(W8,-EJ.dot(W8)),OJ.lengthSq()<0.0000000001||EJ.lengthSq()<0.0000000001)return;OJ.normalize(),EJ.normalize();let N=Math.atan2(qJ.crossVectors(OJ,EJ).dot(W8),vQ(OJ.dot(EJ)));K6(Z,LJ.setFromAxisAngle(W8,N))}var l6=new S,k$=new S,_Q=new S,eR=new $9,RY=new K9,SQ=new K9;function JL(J,$,Q){let{antebrazo:Z,mano:K}=J;if(!Z||!K||!K.parent)return;if(l6.copy($).normalize(),_Q.crossVectors(l6,Q),_Q.lengthSq()<0.00000001)return;_Q.normalize(),k$.crossVectors(_Q,l6),RY.setFromRotationMatrix(eR.makeBasis(_Q,l6,k$)),Z.getWorldPosition(C8),K.getWorldPosition(p8),X7.subVectors(p8,C8).normalize(),K.getWorldQuaternion(P8),SQ.copy(RY).multiply(P8.invert());let W=SQ.x*X7.x+SQ.y*X7.y+SQ.z*X7.z,X=2*Math.atan2(W,SQ.w);if(Number.isFinite(X))K6(Z,LJ.setFromAxisAngle(X7,VJ(X*0.5,-1.2,1.2)));K.parent.getWorldQuaternion(yK),K.quaternion.copy(yK.invert()).multiply(RY),K.updateMatrixWorld(!0)}var $L=new S;function QL(J,$,Q){let Z=$.lado==="Left"?1:-1,K=J.index*1.7,W=C0.seatDistance-C0.tableWidth/2;return VY(J,Z*(0.225+Math.sin(K)*0.01)+Math.sin(Q*0.23+K)*0.004,C0.surfaceY+0.026,W+(Z>0?0.035:0.06)+Math.cos(K*1.3)*0.012+Math.sin(Q*0.17+K*2)*0.004,$L)}var ZL=new S,B$=new S,jK=new S,PK=new S,KL=0.045,WL=0.05,XL=0.12,YL=0.14,HL=0.45,UL=4;function tU(J,$,Q){return PK.subVectors($,J.holder.getWorldPosition(jK)),PK.y=0,PK.normalize(),Q.copy($).addScaledVector(PK,-WL).setY($.y+KL)}function NL(J,$,Q){let Z=J.jugada;if(!Z)return null;if($-Z.t0>UL)return J.jugada=null,null;let K=Z.anim;if(K.elapsed<K.duration)return tU(J,Z.obj.position,B$),B$.lerpVectors(Q,B$,x6(VJ(K.elapsed/XL,0,1)));if(Z.aterrizo==null)Z.aterrizo=$;let W=$-Z.aterrizo;tU(J,Z.hasta,B$);let X=K.golpe?0.7:YL;if(W<X)return B$;let Y=(W-X)/HL;if(Y>=1)return J.jugada=null,null;return B$.lerp(Q,x6(Y))}var F9=[1,2.2,3.5,4.7,5.6],eU=-1e9;function GL(J,$,Q){let Z=J.bebida;if(!Z)return null;if(J.trago){let W=J.trago.fijo??$-J.trago.t0;if(W<0||W>=F9[4]||J.jugada)return J.trago=null,WN(Z),J.sed=$+90+Math.random()*150,null;return W}if(!Q||!Q.dt)return null;if(J.sed==null)return J.sed=$+20+Math.random()*100,null;if($<J.sed||$-eU<20)return null;let K=J.index;if(J.jugada||Q.jugando&&Q.turno===K||Q.habla.has(K)||Q.fin&&$-Q.fin.t<6)return J.sed=$+3+Math.random()*8,null;return eU=$,J.trago={t0:$},0}function WN(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var BY=0.07,M8=new S,RJ=new S,D$=new S,wQ=new S,JN=new S;function $N(J,$,Q,Z){let K=J.bebida;if(D$.copy(Y8).addScaledVector(I8,0.25).normalize(),wQ.copy(Y8).multiplyScalar(0.55).addScaledVector(I8,0.8).normalize(),RJ.copy(K.home),RJ.y+=K.alto,RJ.addScaledVector(j6,-(K.radio+0.015)).addScaledVector(D$,-BY),J.bocaMundo)J.bocaMundo(M8),M8.addScaledVector(Y8,0.006);else J.front.getWorldPosition(M8),M8.y-=0.075,M8.addScaledVector(Y8,0.012);let W=K.inclina;JN.copy(I8).multiplyScalar(Math.cos(W)).addScaledVector(Y8,-Math.sin(W)),M8.addScaledVector(JN,-K.boca).addScaledVector(j6,-(K.radio+0.015)).addScaledVector(wQ,-BY);let X=J.trago;if(X){if($<F9[2])(X.boca??=new S).copy(M8);else if(X.boca)M8.copy(X.boca)}let Y;if($<F9[0])zK(Q,RJ,0.045,0.5,x6($/F9[0]),Z),Y=D$;else if($<F9[1]){let H=x6(($-F9[0])/(F9[1]-F9[0]));zK(RJ,M8,0.1,0.25,H,Z),Y=D$.lerp(wQ,H).normalize()}else if($<F9[2])Z.copy(M8),Y=wQ;else if($<F9[3]){let H=x6(($-F9[2])/(F9[3]-F9[2]));zK(RJ,M8,0.1,0.25,1-H,Z),Y=wQ.lerp(D$,H).normalize()}else zK(Q,RJ,0.045,0.5,1-x6(($-F9[3])/(F9[4]-F9[3])),Z),Y=D$;return Y}var jQ=new S;function zK(J,$,Q,Z,K,W){jQ.lerpVectors(J,$,Z),jQ.y=Math.max(J.y,$.y*Z+J.y*(1-Z))+Q;let X=1-K;return W.set(X*X*J.x+2*X*K*jQ.x+K*K*$.x,X*X*J.y+2*X*K*jQ.y+K*K*$.y,X*X*J.z+2*X*K*jQ.z+K*K*$.z)}function FL(J){return J<F9[0]?x6(Math.min(1,J/(F9[0]*0.85))):J<F9[3]?1:1-x6(Math.min(1,(J-F9[3])/((F9[4]-F9[3])*0.85)))}var QN=new S,ZN=new S,KN=new S;function EL(J,$){let Q=J.bebida,Z=J.brazos[1].mano;if($<F9[0]||$>=F9[3]){WN(Q);return}Z.getWorldQuaternion(P8),Z.getWorldPosition(fK),QN.set(0,0,1).applyQuaternion(P8),ZN.set(0,1,0).applyQuaternion(P8);let K=$<F9[1]?x6(($-F9[0])/(F9[1]-F9[0])):$<F9[2]?1:1-x6(($-F9[2])/(F9[3]-F9[2]));Q.group.quaternion.setFromAxisAngle(j6,-Q.inclina*K),KN.set(0,1,0).applyQuaternion(Q.group.quaternion),Q.group.position.copy(fK).addScaledVector(QN,Q.radio+0.015).addScaledVector(ZN,BY).addScaledVector(KN,-Q.alto);let W=Math.min(1,($-F9[0])/0.2,(F9[3]-$)/0.2);if(W<1){let X=x6(Math.max(0,W));Q.group.position.lerpVectors(Q.home,Q.group.position,X),Q.group.quaternion.slerpQuaternions(qL.identity(),Q.group.quaternion,X)}}var qL=new K9;function OL(J,$,Q){let Z=J.cara;if(!Z)return 0;if(J.proxParpadeo==null)J.proxParpadeo=$+1+Math.random()*4;if($>=J.proxParpadeo)J.parpadeoT0=$,J.proxParpadeo=$+(Math.random()<0.15?0.32:2+Math.random()*4);let K=$-(J.parpadeoT0??-9),W=K<0?0:K<0.06?K/0.06:K<0.09?1:K<0.16?1-(K-0.09)/0.07:0;if(J.caraFija){let U=J.caraFija,G=Z.mesh.morphTargetInfluences;if(G)G[Z.iP]=U.p*0.85,G[Z.iS]=U.s;return J.parpadeo=U.p,U.p}let X=J.index,Y=0;if(Q?.fin&&Q.fin.team!=null&&$-Q.fin.t<5&&$>=Q.fin.t)Y=fQ(Q,X)===Q.fin.team?0.95:-0.7;else if(Q?.habla?.has(X))Y=Q.hablaTipo?.get(X)==="win"?0.85:0.2;else{if(J.casual==null)J.casual=$+8+Math.random()*30;if($>J.casual+2.5)J.casual=$+15+Math.random()*45;if($>=J.casual)Y=0.45}J.sonrisa=(J.sonrisa??0)+(Y-(J.sonrisa??0))*(1-Math.exp(-(Q?.dt||0.016)*3.5));let H=Z.mesh.morphTargetInfluences;if(H)H[Z.iP]=W*0.85,H[Z.iS]=J.sonrisa;return J.parpadeo=W,W}function RL(J,$){let Q=J.index,Z=0.23+Q%4*0.012,K=$*Z*Math.PI*2+Q*1.9,W=Math.sin(K);return{b:W>0?W:W*0.7,balanceo:Math.sin($*0.11+Q*2.3)*0.022+Math.sin($*0.29+Q)*0.008,ladeo:Math.sin($*0.07+Q*1.3)*0.014}}var LY=new S,AK=new S,X8=new S,T7=new S,z8=new S,h6=new K9,TK=(J)=>{let $=Math.sin(J*127.1+311.7)*43758.5453;return $-Math.floor($)};function LL(J,$,Q,Z){let K=J.index;if(K>=4||!Q)return Q?.foco&&$-Q.foco.t<2.5?Z.copy(Q.foco.p):Z.set(0,C0.surfaceY,0);if(Q.fin&&$-Q.fin.t<5){if(Q.fin.team!=null&&fQ(Q,K)===Q.fin.team&&Q.cabezas[(K+2)%4])return Z.copy(Q.cabezas[(K+2)%4]);return VY(J,0,C0.surfaceY,C0.seatDistance-C0.rackRadius,Z)}if(J.trago&&J.bebida){let Y=J.trago.fijo??$-J.trago.t0;if(Y<F9[0]+0.1||Y>F9[2]+0.5&&Y<F9[3]+0.1)return Z.copy(J.bebida.home);if(Y<=3.4)return J.head.getWorldPosition(Z),Z.addScaledVector(Y8,1).addScaledVector(I8,-0.15)}{let Y=Q.saludo;if(Y&&(Y.seat===K||Y.e<(Y.seat==null?3:1.6)))return Z.copy(Y.p)}if(Q.foco&&$-Q.foco.t<1.4)return Z.copy(Q.foco.p);for(let Y of Q.habla)if(Y!==K&&Q.cabezas[Y])return Z.copy(Q.cabezas[Y]);if(Q.jugando&&Q.turno===K){let Y=Math.floor($/1.3);return VY(J,(TK(Y+K*9)-0.5)*0.12,C0.surfaceY+0.02,C0.seatDistance-C0.rackRadius+0.02,Z)}let W=Math.floor(($+K*1.37)/(2.2+K*0.35)),X=TK(W*4+K);if(Q.jugando&&X<0.45&&Q.cabezas[Q.turno]&&Q.turno!==K)return Z.copy(Q.cabezas[Q.turno]);if(X<0.62&&Q.cabezas[(K+2)%4])return Z.copy(Q.cabezas[(K+2)%4]);if(!Q.jugando&&X<0.85&&Q.cabezas[(K+1+W%2*2)%4])return Z.copy(Q.cabezas[(K+1+W%2*2)%4]);return Z.set((TK(W+7)-0.5)*0.2,C0.surfaceY,(TK(W+3)-0.5)*0.2)}function VL(J,$,Q){let{head:Z,neck:K,front:W}=J;if(!Z||!W)return;if(LL(J,$,Q,LY),!J.mirada||!Q?.dt)J.mirada=(J.mirada||new S).copy(LY);else J.mirada.lerp(LY,1-Math.exp(-Q.dt*5.5));for(let[X,Y]of[[K,0.4],[Z,1]]){if(!X)continue;if(Z.getWorldPosition(AK),W.getWorldPosition(X8),X8.sub(AK),X8.lengthSq()<0.0000000001)return;if(X8.normalize(),T7.subVectors(J.mirada,AK),T7.lengthSq()<0.00000001)return;T7.normalize();let H=VJ(Math.atan2(X8.z*T7.x-X8.x*T7.z,X8.x*T7.x+X8.z*T7.z),-1.25,1.25)*Y;if(K6(X,LJ.setFromAxisAngle(I8,H)),W.getWorldPosition(X8),X8.sub(AK).normalize(),z8.crossVectors(X8,I8),z8.lengthSq()<0.00000001)continue;z8.normalize();let U=VJ(Math.asin(vQ(T7.y))-Math.asin(vQ(X8.y)),-0.75,0.55)*Y;K6(X,LJ.setFromAxisAngle(z8,U))}}var BL=0.23,DL=[["lomo",0.4],["spine",0.34],["chest",0.26]],Qk=new K9;function kL(J,$,Q=0){if(!J.spine||!J.spine.parent)return;if(z8.copy(j6),J.hips&&J.lomo)for(let[Z,K]of DL){let W=J[Z];if(!W)continue;K6(W,h6.setFromAxisAngle(z8,$*K))}else K6(J.spine,h6.setFromAxisAngle(z8,$));if(Q)K6(J.spine,h6.setFromAxisAngle(I8,Q))}var _K=new S,SK=new S,yQ=new S,fK=new S;function vK(J,$,Q=!1,Z=null){for(let O of J.pose)O.bone.position.copy(O.position),O.bone.quaternion.copy(O.quaternion),O.bone.scale.copy(O.scale);J.holder.updateMatrixWorld(!0),aR(J);let K=oU(J.index,$,Q);if(J.spine)J.spine.quaternion.multiply(qY.setFromAxisAngle(rU,K.breath));let W=!Q,X=W?RL(J,$):{b:0,balanceo:0,ladeo:0},Y=J.index,H=Y<4&&J.brazos,U=0,G=0;if(H&&Z?.fin&&Z.fin.team!=null){let O=$-Z.fin.t;if(O>=0&&O<5)G=Math.sin(Math.min(1,O/0.5)*Math.PI/2)*(O>4?5-O:1),U+=(fQ(Z,Y)===Z.fin.team?-0.1:0.07)*G}if(H&&Z?.jugando&&Z.turno===Y)U+=0.04;let F=H&&W&&J.front?GL(J,$,Z):null,N=[];if(H)for(let O of J.brazos){let B=ZL.copy(QL(J,O,$)),R=O.lado==="Right"?NL(J,$,B):null,E=!!R,z=null;if(!R&&F!=null&&O.lado==="Right")R=jK.set(0,0,0),z=$N(J,F,B,R).clone();if(R=(R||B).clone(),!E&&W&&Z?.habla?.has(Y)&&O.lado==="Left"&&!J.clipHabla)J.gesto=Math.min(1,(J.gesto||0)+(Z.dt||0)*3);else if(O.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(Z?.dt||1)*2);if(O.lado==="Left"&&J.gesto>0){let M=x6(J.gesto);R.addScaledVector(Y8,0.06*M).addScaledVector(j6,-0.07*M),R.y+=0.07*M+Math.sin($*5.2)*0.012*M}if(O.lado==="Right"&&!E&&G&&fQ(Z,Y)===Z.fin.team){let M=$-Z.fin.t;if(M<1.1)R.y+=Math.max(0,Math.sin(Math.min(1,M/0.9)*Math.PI))*0.13}N.push({brazo:O,o:R,jugando:E,dedos:z,reposo:B.clone()})}let q=0;if(H){let O=N.find((B)=>B.jugando);if(O&&O.brazo.brazo){J.holder.worldToLocal(yQ.copy(O.o));let B=Math.hypot(yQ.x,yQ.z-0.12);U+=VJ((B-0.42)/0.55,0,0.34),q=VJ(Math.atan2(yQ.x,yQ.z)*0.3,-0.3,0.3)}}if(kL(J,BL*(J.brazos?1:0.6)+U,q),F!=null){let O=(R,E)=>Math.max(0,1-Math.abs(F-R)/E),B=x6(Math.max(O(F9[0],0.9),O(F9[3],0.9)));if(J.spine)K6(J.spine,h6.setFromAxisAngle(Y8,0.16*B))}if(W){if(J.spine)K6(J.spine,h6.setFromAxisAngle(I8,X.balanceo));if(J.spine)K6(J.spine,h6.setFromAxisAngle(Y8,X.ladeo));if(J.chest)K6(J.chest,h6.setFromAxisAngle(j6,-0.018*X.b));if(J.hombros){for(let[O,B]of J.hombros)if(B)K6(B,h6.setFromAxisAngle(Y8,O*0.03*(X.b+0.3)))}}if(VL(J,$,Z),OL(J,$,Z),J.head)J.head.quaternion.multiply(qY.setFromAxisAngle(I8,K.headYaw*0.5)),J.head.quaternion.multiply(qY.setFromAxisAngle(rU,K.headNod)),J.head.updateMatrixWorld(!0);if(W&&J.head){if(Z?.habla?.has(Y)){let O=0.035*(0.6+0.4*Math.sin($*1.7));K6(J.head,h6.setFromAxisAngle(j6,Math.sin($*6.1)*O*0.5+Math.sin($*3.3)*O*0.5))}if(Z?.habla?.has(Y)&&Z.hablaTipo?.get(Y)==="saludo"){J.saludo0??=$;let O=IK($-J.saludo0);if(O)K6(J.head,h6.setFromAxisAngle(j6,-O*0.8))}else J.saludo0=null;if(G&&fQ(Z,Y)!==Z.fin.team){let O=$-Z.fin.t;if(O>0.6&&O<2.6)K6(J.head,h6.setFromAxisAngle(I8,Math.sin((O-0.6)*Math.PI*2.4)*0.16*(2.6-O)/2))}}if(F!=null&&F>F9[1]-0.2&&F<F9[2]+0.2&&J.head){let O=Math.sin(Math.min(1,(F-F9[1]+0.2)/(F9[2]-F9[1]+0.4))*Math.PI);K6(J.head,h6.setFromAxisAngle(j6,-0.3*O))}if(W&&J.reaction&&J.head){let O=$-J.reaction.time;if(O>=0&&O<1.2){let B=Math.sin(O/1.2*Math.PI)*0.035;K6(J.head,h6.setFromAxisAngle(j6,B))}}for(let{brazo:O,o:B,jugando:R,dedos:E,reposo:z}of N){if(E)E.copy($N(J,F,z,B));let M=O.lado==="Left"?1:-1;O.brazo.getWorldPosition(_K);let V=E?FL(F):0;if(V>0)_K.add(OY(M*0.32,-0.75,-0.6,SK).lerp(OY(M*0.45,-0.85,0.25,jK),V));else _K.add(OY(M*(R?0.55:0.32),-0.75,R?-0.15:-0.6,SK));if(tR(O,B,_K),O.antebrazo.getWorldPosition(C8),O.mano.getWorldPosition(fK),l6.subVectors(fK,C8),l6.y=0,l6.lengthSq()<0.00000001)l6.copy(Y8);if(l6.normalize(),l6.addScaledVector(j6,-M*(R?0:0.12)).normalize(),l6.y=R?-0.55:-0.3,k$.set(0,-1,0).addScaledVector(j6,-M*0.22),O.lado==="Left"&&J.gesto>0){let T=x6(J.gesto);k$.lerp(SK.copy(j6).multiplyScalar(-1).add(jK.set(0,0.4,0)),T*0.8),l6.y+=0.4*T}if(E)l6.lerp(E,V).normalize(),k$.lerp(SK.copy(j6).addScaledVector(I8,-0.15),V).normalize();if(JL(O,l6,k$),E)EL(J,F);if(W&&!R&&!E&&O.lado==="Right"&&J.toque&&$-J.toque.t0<0.7){let T=$-J.toque.t0;O.mano.getWorldQuaternion(P8),z8.set(1,0,0).applyQuaternion(P8),K6(O.mano,h6.setFromAxisAngle(z8,-0.5*Math.max(0,Math.sin(T/0.7*Math.PI*4))))}else if(W&&!R&&!E&&O.lado==="Right"&&!(Z?.turno===Y&&Z?.jugando)){let T=4.6+Y*0.9,w=($+Y*1.3)%T;if(w<0.55)O.mano.getWorldQuaternion(P8),z8.set(1,0,0).applyQuaternion(P8),K6(O.mano,h6.setFromAxisAngle(z8,-0.22*Math.max(0,Math.sin(w/0.55*Math.PI*4))))}}if(W)zL(J,$,Z,F);J.holder.updateMatrixWorld(!0)}var ML=["LeftShoulder","LeftArm","LeftForeArm","LeftHand","RightShoulder","RightArm","RightForeArm","RightHand"],CL=["Spine01","Spine","neck","Head"],A6=new K9,IL=new K9,PL=new K9;function zL(J,$,Q,Z){let K=J.clipHabla;if(!K||!J.brazos)return;let W=!!(Q?.habla?.has(J.index)&&!J.jugada&&Z==null),X=Q?.dt||0;J.wHabla=Math.max(0,Math.min(1,(J.wHabla||0)+(W?X/0.5:-X/0.3)));let Y=x6(J.wHabla);if(Y<=0)return;if(!J.pistasHabla){J.pistasHabla=[];for(let U of K.tracks){let[G,F]=U.name.split("."),N=ML.includes(G);if(F!=="quaternion"||!(N||CL.includes(G)))continue;let q=J.root.getObjectByName(G),O=U.createInterpolant();if(!q)continue;let B=new K9(0,0,0,0),R=16;for(let E=0;E<R;E++){if(A6.fromArray(O.evaluate(K.duration*E/R)),B.x*A6.x+B.y*A6.y+B.z*A6.z+B.w*A6.w<0)A6.set(-A6.x,-A6.y,-A6.z,-A6.w);B.set(B.x+A6.x,B.y+A6.y,B.z+A6.z,B.w+A6.w)}J.pistasHabla.push({bone:q,it:O,abs:N,ref:B.normalize().invert()})}}let H=($+J.index*1.7)%K.duration;for(let U of J.pistasHabla)if(A6.fromArray(U.it.evaluate(H)),U.abs)U.bone.quaternion.slerp(A6,Y);else U.bone.quaternion.multiply(PL.identity().slerp(IL.copy(U.ref).multiply(A6),Y))}function XN({scene:J,texture:$,mat:Q,box:Z,cylinder:K,random:W,teal:X,wood:Y,storeSign:H}){let U=$((D,L,I)=>{D.fillStyle="#e0d3b4",D.fillRect(0,0,L,I);let i=D.createLinearGradient(0,0,0,I);i.addColorStop(0,"#cac09b18"),i.addColorStop(0.7,"#14382d00"),i.addColorStop(1,"#162d2566"),D.fillStyle=i,D.fillRect(0,0,L,I);for(let h=0;h<7000;h++)D.fillStyle=h%3?"#b4ad8618":"#142d2924",D.fillRect(W()*L,W()*I,1+W()*3,1+W()*2);for(let h=0;h<70;h++){let d=W()*L,Q0=h<50?I*(0.72+W()*0.28):W()*I,f=5+W()*14;D.fillStyle=h%3?"rgba(160,145,112,.35)":"rgba(120,110,90,.25)",D.beginPath();for(let y=0;y<8;y++){let p=y*Math.PI/4,v=f*(0.6+W()*0.5);D.lineTo(d+Math.cos(p)*v,Q0+Math.sin(p)*v*0.65)}D.fill()}D.strokeStyle="#1b372e24";for(let h=48;h<I;h+=57)D.beginPath(),D.moveTo(0,h),D.lineTo(L,h),D.stroke()},1024,1024);X.map=U,X.color.set("#f2ecde"),X.needsUpdate=!0,Y.color.set("#bca98a"),Y.roughness=0.84;let G=()=>{H.material.map=$((D,L,I)=>{D.fillStyle="#efe3c4",D.fillRect(0,0,L,I);for(let d=0;d<2600;d++)D.fillStyle=d%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",D.fillRect(W()*L,W()*I,2+W()*14,1+W()*2);let i=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia",h=i==="Shrikhand"?I*0.66:I*0.56;D.font=`${h}px ${i}`,D.textAlign="center",D.textBaseline="middle",D.fillStyle="#c8402f",D.fillText("Colmado La Esquina",L/2+h*0.06,I/2+h*0.1),D.fillStyle="#24518a",D.fillText("Colmado La Esquina",L/2,I/2+h*0.04),D.strokeStyle="#3d938e",D.lineWidth=12,D.strokeRect(6,6,L-12,I-12);for(let d=0;d<1400;d++)D.fillStyle="rgba(239,227,196,.35)",D.fillRect(W()*L,W()*I,1+W()*3,1+W()*2)},2048,162),H.material.emissiveMap=H.material.map,H.material.needsUpdate=!0};H.material=new n0({roughness:0.9,emissive:"#ffffff",emissiveIntensity:0.1}),G(),document.fonts?.load?.("64px Shrikhand").then(G).catch(()=>{});for(let[D,L]of[[-2.7,-3.5],[2.4,-3.3]])Z(D,0.18,L,0.51,0.35,0.4,"#897052"),Z(D+0.05,0.47,L-0.04,0.4,0.23,0.32,"#a68c62");let F=(D,L,I)=>{let i=document.createElement("canvas");i.width=D,i.height=L;let h=new b6(i);h.colorSpace=J6,h.anisotropy=4;let d=()=>{let Q0=i.getContext("2d"),f=document.fonts?.check?.("64px Shrikhand"),y=document.fonts?.check?.('700 40px "DM Sans"')?'"DM Sans",':"";Q0.fillStyle="#233a2d",Q0.fillRect(0,0,D,L);for(let p=0;p<70;p++)Q0.fillStyle=`rgba(225,225,195,${0.015+W()*0.03})`,Q0.beginPath(),Q0.ellipse(W()*D,W()*L,D*(0.04+W()*0.14),L*(0.015+W()*0.045),W()*3,0,Math.PI*2),Q0.fill();Q0.textAlign="center",Q0.textBaseline="middle",Q0.lineCap="round";for(let[p,v,r,l,J0]of I){if(p==="—"){Q0.strokeStyle="rgba(225,225,195,.45)",Q0.lineWidth=6,Q0.beginPath(),Q0.moveTo(D*0.17,v+3),Q0.quadraticCurveTo(D/2,v-5,D*0.83,v+1),Q0.stroke();continue}Q0.font=l==="titulo"?f?`${r}px Shrikhand`:`bold ${r*0.95}px Georgia`:`${l} ${r}px ${y}sans-serif`;let Y0=Q0.measureText(p).width,I0=D*0.84;if(Q0.save(),Q0.translate(D/2,v),Y0>I0)Q0.scale(I0/Y0,1);Q0.fillStyle=J0;for(let j=0;j<3;j++)Q0.globalAlpha=j?0.4:0.75,Q0.fillText(p,(W()-0.5)*3,(W()-0.5)*3);Q0.restore()}for(let p=0;p<D*L/40;p++)Q0.fillStyle="rgba(35,58,45,.5)",Q0.fillRect(W()*D,W()*L,1+W()*2,1+W());Q0.strokeStyle="#9c8c62",Q0.lineWidth=D*0.04,Q0.strokeRect(D*0.02,D*0.02,D-D*0.04,L-D*0.04),Q0.strokeStyle="rgba(60,40,20,.35)",Q0.lineWidth=4,Q0.strokeRect(D*0.04,D*0.04,D-D*0.08,L-D*0.08),h.needsUpdate=!0};return d(),Promise.all([document.fonts?.load?.("64px Shrikhand"),document.fonts?.load?.('700 40px "DM Sans"')]).then(d).catch(()=>{}),new n0({roughness:1,map:h,emissive:"#ffffff",emissiveMap:h,emissiveIntensity:0.06})},N="#ece7cc",q="#e9b35a",O="#a9d3dd";{let D=new T0(new L9(0.72,0.69),F(768,736,[["HOY HAY",110,74,"titulo",N],["CAFÉ",262,78,800,N],["HIELO · PAN",388,66,800,"#dcd9b8"],["—",478],["REFRESCOS",572,60,700,O]]));D.position.set(-3.43,1.6,-2.33),D.rotation.z=0.025,J.add(D),Z(-3.43,1.245,-2.315,0.66,0.018,0.05,"#8a7a55"),Z(-3.28,1.262,-2.31,0.06,0.016,0.016,"#efeadb")}{let D=document.documentElement.lang==="en",L=new T9,I=Q("#6b4a2e",0.8);L.position.set(-2,0,-2.1),L.rotation.y=0.5,J.add(L);let d=new T0(new L9(0.56,0.72),F(560,720,[[D?"COMING":"YA",96,92,"titulo",q],[D?"SOON":"VIENE",206,92,"titulo",q],["—",282],[D?"1 vs 1":"1 contra 1",372,80,800,N],[D?"Online":"En línea",478,80,800,N],[D?"your people,":"tu gente,",576,50,600,O],[D?"from anywhere":"de donde sea",636,50,600,O]])),Q0=new T9;Q0.rotation.x=-0.2,L.add(Q0),d.position.set(0,0.44,0.012),Q0.add(d);{let y=new T0(new h9(0.56,0.72,0.012),I);y.position.set(0,0.44,0),Q0.add(y)}for(let[y,p,v,r]of[[-0.29,0.42000000000000004,0.035,0.88],[0.29,0.42000000000000004,0.035,0.88],[0,0.8500000000000001,0.62,0.035],[0,0.03,0.62,0.035]]){let l=new T0(new h9(v,r,0.022),I);l.position.set(y,p,0),Q0.add(l)}let f=new T9;f.position.z=-0.32,f.rotation.x=0.2,L.add(f);for(let y of[-0.27,0.27]){let p=new T0(new h9(0.03,0.8600000000000001,0.02),I);p.position.set(y,0.43000000000000005,-0.02),f.add(p)}L.traverse((y)=>{if(y.isMesh)y.castShadow=!0,y.receiveShadow=!0})}let B=[],R=z6.tope,E=z6.z;Z(-1.12,R+0.11,E+0.24,0.42,0.21,0.31,"#677761"),Z(-1.12,R+0.13,E+0.404,0.34,0.1,0.016,"#414b3d"),Z(-0.38,R+0.02,E+0.26,0.3,0.018,0.22,"#c5b887");for(let[D,L,I]of[[0.7,E+0.21,"#8b7747"],[0.98,E+0.17,"#637751"],[1.29,E+0.22,"#a88b50"]])K(D,R+0.12,L,0.07,0.075,0.25,I,14),K(D,R+0.259,L,0.077,0.077,0.028,"#aaa386",12);Z(0.2,R+0.03,E+0.23,0.4,0.07,0.28,"#6c5838");for(let D=0;D<4;D++){let L=new T0(new B6(1,10,6),Q(D%2?"#bca276":"#a98e61"));L.scale.set(0.055,0.035,0.115),L.position.set(0.07+D*0.085,R+0.09,E+0.24),L.rotation.y=(D-1.5)*0.13,J.add(L)}let z=new g9({transparent:!0,depthWrite:!1,map:$((D,L,I)=>{for(let i=0;i<90;i++)D.fillStyle=i%2?"#152c2110":"#3036230a",D.beginPath(),D.ellipse(L/2+(W()-0.5)*L*0.45,I/2+(W()-0.5)*I*0.45,W()*L*0.24,W()*I*0.18,W()*Math.PI,0,Math.PI*2),D.fill()},256,256)});for(let[D,L,I,i]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let h=new T0(new L9(I,i),z);h.rotation.x=-Math.PI/2,h.position.set(D,0.008,L),J.add(h)}for(let[D,L]of[[-3,-0.9],[3.3,-1.5]]){K(D,0.18,L,0.18,0.13,0.34,"#87553c",14),K(D,0.354,L,0.16,0.16,0.012,"#3f422d",12);let I=new T9;I.position.set(D,0.36,L),J.add(I);for(let i=0;i<7;i++){let h=new RQ;h.moveTo(0,0),h.quadraticCurveTo(-0.09,0.23,0,0.55+W()*0.12),h.quadraticCurveTo(0.09,0.23,0,0);let d=new T0(new VQ(h,5),new n0({color:i%2?"#597d4f":"#3c603e",roughness:1,side:a9}));d.rotation.set(0.3+W()*0.4,i*Math.PI*2/7,0),I.add(d)}B.push(I)}let M=new L9(0.55,1.3,5,9),V=new T0(M,new n0({color:"#b2a27c",roughness:1,side:a9}));V.position.set(-2.85,1.75,-3.05),J.add(V);let T=M.attributes.position,w=T.array.slice();return{update(D){B.forEach((L,I)=>L.rotation.z=Math.sin(D*0.53+I*2.1)*0.015);for(let L=0;L<T.count;L++){let I=w[L*3+1];T.setZ(L,Math.sin(D*1.17+I*3)*0.025*(0.65-I)/1.3)}T.needsUpdate=!0}}}function YN({scene:J,texture:$,mat:Q,box:Z,cylinder:K,staticGeo:W,random:X}){let Y=(C=0,x=0,n=0)=>new S(C,x,n),H=(C,x,n,K0,$0,D0,L0=5000)=>{C.fillStyle=K0,C.fillRect(0,0,x,n);for(let z0=0;z0<L0;z0++)C.fillStyle=X()>0.5?$0:D0,C.fillRect(X()*x,X()*n,1+X()*4,1+X()*3)},U=[];function G(C,{w:x=1024,h:n=256,fondo:K0="#efe3c4",tinta:$0="#24518a",sombra:D0="#c8402f",borde:L0=null,px:z0=0.62}={}){let V0=document.createElement("canvas");V0.width=x,V0.height=n;let u0=new b6(V0);u0.colorSpace=J6;let X9=()=>{let a0=V0.getContext("2d"),k9=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia";if(K0){a0.fillStyle=K0,a0.fillRect(0,0,x,n);for(let m9=0;m9<x*1.2;m9++)a0.fillStyle=m9%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",a0.fillRect(Math.random()*x,Math.random()*n,2+Math.random()*12,1+Math.random()*2)}else a0.clearRect(0,0,x,n);let S9=n*z0;a0.font=`${S9}px ${k9}`;let N9=a0.measureText(C).width;if(N9>x*0.9)S9*=x*0.9/N9,a0.font=`${S9}px ${k9}`;a0.textAlign="center",a0.textBaseline="middle";let m=S9*0.06;if(D0)a0.fillStyle=D0,a0.fillText(C,x/2+m,n/2+m+S9*0.04);if(a0.fillStyle=$0,a0.fillText(C,x/2,n/2+S9*0.04),L0)a0.strokeStyle=L0,a0.lineWidth=n*0.07,a0.strokeRect(a0.lineWidth/2,a0.lineWidth/2,x-a0.lineWidth,n-a0.lineWidth);for(let m9=0;m9<x*0.5;m9++)a0.fillStyle=K0?"rgba(239,227,196,.3)":"rgba(0,0,0,0)",a0.fillRect(Math.random()*x,Math.random()*n,1+Math.random()*3,1+Math.random()*2);u0.needsUpdate=!0};return X9(),U.push(X9),u0}document.fonts?.load?.("64px Shrikhand").then(()=>U.forEach((C)=>C())).catch(()=>{});let F=new n0({roughness:0.93,map:$((C,x,n)=>{H(C,x,n,"#e3d6b8","rgba(255,250,236,.10)","rgba(120,100,70,.08)");let K0=C.createLinearGradient(0,0,0,n);K0.addColorStop(0,"rgba(90,70,50,.12)"),K0.addColorStop(0.18,"rgba(90,70,50,0)"),K0.addColorStop(0.8,"rgba(90,70,50,0)"),K0.addColorStop(1,"rgba(90,70,50,.2)"),C.fillStyle=K0,C.fillRect(0,0,x,n);for(let $0=0;$0<22;$0++){let D0=X()*x,L0=n*(0.08+X()*0.3),z0=C.createLinearGradient(0,0,0,L0);z0.addColorStop(0,"rgba(80,70,55,.2)"),z0.addColorStop(1,"rgba(80,70,55,0)"),C.fillStyle=z0,C.fillRect(D0,0,3+X()*8,L0)}},512,512)}),N=new n0({roughness:0.9,map:$((C,x,n)=>{H(C,x,n,"#3f9a96","rgba(200,240,230,.10)","rgba(20,50,50,.10)");for(let K0=0;K0<50;K0++)C.fillStyle="rgba(225,218,195,.55)",C.beginPath(),C.ellipse(X()*x,X()*n,2+X()*9,1+X()*5,X()*3,0,Math.PI*2),C.fill()},256,256)});Z(-3.48,0.625,-2.355,0.702,1.25,0.012,N),Z(3.45,0.625,-2.355,0.802,1.25,0.012,N),Z(-3.906,0.625,-3.85,0.012,1.25,2.72,N),Z(3.906,0.625,-3.85,0.012,1.25,2.72,N);let q=22,O="#3d8a5c",B="#e8dfc8",R=$((C,x,n)=>{for(let $0=0;$0<q;$0++)C.fillStyle=$0%2?B:O,C.fillRect($0*x/q,0,Math.ceil(x/q),n);for(let $0=0;$0<2500;$0++)C.fillStyle=X()>0.5?"rgba(255,250,235,.06)":"rgba(20,30,20,.07)",C.fillRect(X()*x,X()*n,2,2);let K0=C.createLinearGradient(0,0,0,n);K0.addColorStop(0,"rgba(0,0,0,.14)"),K0.addColorStop(1,"rgba(40,30,20,0)"),C.fillStyle=K0,C.fillRect(0,0,x,n)},1024,128);W(new L9(7.3,0.86),new n0({map:R,roughness:0.95,side:a9}),[0,2.59,-1.955],[-1.237,0,0]);let E=$((C,x,n)=>{let K0=x/q;for(let $0=0;$0<q;$0++)C.fillStyle=$0%2?B:O,C.fillRect($0*K0,0,Math.ceil(K0),n*0.5),C.beginPath(),C.arc($0*K0+K0/2,n*0.5,K0/2-0.5,0,Math.PI),C.fill()},1024,64);W(new L9(7.3,0.2),new n0({map:E,roughness:0.95,side:a9,alphaTest:0.5}),[0,2.35,-1.548]);{let C=new n0({roughness:0.8,map:$((n,K0,$0)=>{n.fillStyle="#2a3332",n.fillRect(0,0,K0,$0);let D0=n.createLinearGradient(0,0,0,$0);D0.addColorStop(0,"#cfe8e0"),D0.addColorStop(1,"#8fb3aa"),n.fillStyle=D0,n.fillRect(14,14,K0-28,$0-28),n.strokeStyle="#1f2525",n.lineWidth=7;for(let L0=30;L0<K0-20;L0+=26)n.beginPath(),n.moveTo(L0,14),n.lineTo(L0,$0-14),n.stroke();for(let L0 of[$0*0.33,$0*0.66])n.beginPath(),n.moveTo(14,L0),n.lineTo(K0-14,L0),n.stroke();n.strokeStyle="#e8e0cc",n.lineWidth=12,n.strokeRect(6,6,K0-12,$0-12)},256,256),emissive:"#ffffff",emissiveIntensity:0.12});C.emissiveMap=C.map,W(new L9(1.1,1),C,[3.915,1.75,-4.3],[0,Math.PI/2,0]);let x=new T0(new L9(2.2,0.36),new n0({map:G("Víveres · Bebidas · Hielo",{w:1536,h:252,fondo:null,tinta:"#24518a",sombra:"#c8402f"}),transparent:!0,roughness:0.9}));x.position.set(3.915,2.55,-3.75),x.rotation.y=Math.PI/2,J.add(x)}let z=3.3,M=2.75,V=-2.7,T=z+M;Z(0,z+M/2,-5.2,8.2,M,0.2,F),Z(-4,z+M/2,-3.95,0.2,M,2.7,F),Z(4,z+M/2,-3.95,0.2,M,2.7,F),Z(0,z+M/2,V,8.2,M,0.2,F),Z(0,T-0.08,-3.95,8.44,0.16,2.95,"#d3c9b0"),Z(0,z+0.06,V+0.12,8.3,0.1,0.06,"#3d938e");let w=new n0({roughness:0.7,map:$((C,x,n)=>{C.fillStyle="#2d3a3a",C.fillRect(0,0,x,n);let K0=15,$0=(n-24)/K0;for(let D0=0;D0<K0;D0++){let L0=12+D0*$0;C.fillStyle="#7aa39d",C.fillRect(12,L0,x-24,$0*0.72),C.fillStyle="rgba(0,0,0,.25)",C.fillRect(12,L0+$0*0.62,x-24,$0*0.1)}C.strokeStyle="#e8e0cc",C.lineWidth=12,C.strokeRect(6,6,x-12,n-12)},256,256)});W(new L9(1.2,1.25),w,[-2.5,4.6,V+0.107]);let D=new n0({roughness:0.7,map:w.map,emissive:"#8fb0ff",emissiveMap:w.map,emissiveIntensity:0.25}),L=new T0(new L9(1.2,1.25),D);L.position.set(2.5,4.6,V+0.107),J.add(L);let I=new n0({roughness:0.8,emissive:"#ffffff",emissiveIntensity:0.55,map:$((C,x,n)=>{let K0=C.createLinearGradient(0,0,0,n);K0.addColorStop(0,"#f0c27f"),K0.addColorStop(1,"#b87a44"),C.fillStyle=K0,C.fillRect(0,0,x,n),C.strokeStyle="#1d2222",C.lineWidth=6;for(let $0=18;$0<x;$0+=22)C.beginPath(),C.moveTo($0,0),C.lineTo($0,n),C.stroke();for(let $0=n*0.2;$0<n;$0+=n*0.2)C.beginPath(),C.moveTo(0,$0),C.lineTo(x,$0),C.stroke();C.lineWidth=5;for(let $0=0;$0<4;$0++)C.beginPath(),C.arc(x/2,n*0.1+$0*n*0.2,18,0,Math.PI*2),C.stroke();C.strokeStyle="#e8e0cc",C.lineWidth=14,C.strokeRect(7,7,x-14,n-14)},128,256)});I.emissiveMap=I.map,W(new L9(1,2.1),I,[0,z+1.08,V+0.107]);let i="#262c2b";for(let C of[3.38,4.22])Z(0,C,-1.56,8,0.04,0.04,i);for(let C=-3.94;C<=3.95;C+=0.14)Z(C,3.8,-1.56,0.018,0.84,0.018,i);for(let C of[-3.97,3.97]){for(let x of[3.38,4.22])Z(C,x,-2.08,0.04,0.04,1.04,i);for(let x=-2.55;x<=-1.6;x+=0.14)Z(C,3.8,x,0.018,0.84,0.018,i)}for(let[C,x]of[[-3.3,-1.8],[3.25,-1.85],[1.5,-1.78]]){K(C,3.46,x,0.13,0.1,0.24,"#9a5a3c",12);for(let n=0;n<4;n++)W(new B6(1,8,6),Q(n%2?"#5b7f4f":"#44663e",0.95),[C+(n-1.5)*0.06,3.66+n%2*0.05,x+(n%3-1)*0.04],[0,0,0],[0.12,0.14,0.1])}K(2.5,T+0.52,-4.3,0.5,0.55,1,"#1f2322",18),K(2.5,T+1.06,-4.3,0.2,0.22,0.08,"#2b302f",12),K(-1.8,T+0.35,-4.6,0.035,0.035,0.7,"#8d8f89",8);for(let[C,x]of[[-3.95,-2.75],[3.95,-2.75],[-3.95,-5.15],[3.95,-5.15]])for(let[n,K0]of[[-0.05,-0.05],[0.05,-0.05],[-0.05,0.05],[0.05,0.05]])K(C+n,T+0.42,x+K0,0.007,0.007,0.84,"#6b4a35",4);let h=Q("#8a6a48",0.8),d=Q("#4f7f55",0.85);for(let C of[0.55,1,1.45,1.9,2.35,2.8])Z(-3.53,C,-3.85,0.34,0.04,2.2,d);for(let C of[-4.94,-2.76])Z(-3.53,1.65,C,0.34,2.3,0.04,d);let Q0=$((C,x,n)=>{C.fillStyle="#bdbdbd",C.fillRect(0,0,x,n),C.fillStyle="#ffffff",C.fillRect(0,n*0.34,x,n*0.34),C.fillStyle="#6a6a6a",C.fillRect(0,n*0.33,x,n*0.02),C.fillRect(0,n*0.67,x,n*0.02)},64,64),f=new n0({map:Q0,roughness:0.62}),y=["#c8402f","#e3ae55","#f3eee3","#2f6fa8","#3f8a5a","#e07a2e","#d65a7a","#f1d24a","#6fb7c9","#8a3b3b","#ffffff","#1f5f9e"],p=[],v=[],r=(C,x,n,K0,$0,D0)=>{let L0=C;while(L0<x){let z0=0.07+X()*0.12,V0=0.12+X()*0.17,u0=Math.min($0,0.1+X()*0.12),X9=X()<0.35,a0=new w0(y[Math.floor(X()*y.length)]).multiplyScalar(0.7+X()*0.22);if(L0+z0>x)break;let k9=D0==="x"?Y(L0+z0/2,n+V0/2,K0):Y(K0,n+V0/2,L0+z0/2);(X9?v:p).push({pos:k9,s:X9?Y(z0*0.85,V0*0.8,z0*0.85):D0==="x"?Y(z0,V0,u0):Y(u0,V0,z0),col:a0}),L0+=z0+0.012}};for(let C of[1.6125,2.5725])r(-3.4,2.2,C,-4.8,0.3,"x");for(let C of[0.57,1.02,1.47,1.92,2.37,2.82])r(-4.9,-2.8,C,-3.55,0.28,"z");for(let[C,x]of[[new h9(1,1,1),p],[new _9(0.5,0.5,1,10),v]]){let n=new v8(C,f,x.length),K0=new j9;x.forEach(($0,D0)=>{K0.position.copy($0.pos),K0.scale.copy($0.s),K0.rotation.set(0,(X()-0.5)*0.12,0),K0.updateMatrix(),n.setMatrixAt(D0,K0.matrix),n.setColorAt(D0,$0.col)}),n.frustumCulled=!1,J.add(n)}{let x=Math.round(1024*(z6.tope-0.1)/z6.ancho),n=[[0.05,0.47],[0.53,0.95]],K0=(V0,u0)=>{if(V0.fillStyle=u0?"#000":"#5b3b24",V0.fillRect(0,0,1024,x),!u0){for(let X9=0;X9<500;X9++)V0.fillStyle=X9%2?"rgba(150,100,60,.25)":"rgba(30,18,10,.25)",V0.fillRect(Math.random()*1024,Math.random()*x,20+Math.random()*80,1+Math.random()*2);V0.fillStyle="#3a2616",V0.fillRect(0,x*0.88,1024,x*0.12)}for(let[X9,a0]of n){let k9=X9*1024,S9=a0*1024,N9=x*0.12,m=x*0.82;V0.fillStyle=u0?"#6e6a60":"#d9d3c1",V0.fillRect(k9,N9,S9-k9,m-N9);for(let m9=0;m9<2;m9++){let P9=N9+(m9+0.5)*(m-N9)/2;V0.fillStyle=u0?"#6f6a60":"#b9b3a2",V0.fillRect(k9,P9+(m-N9)*0.2,S9-k9,4);let C9=P9+(m-N9)*0.2;V0.globalAlpha=u0?0.7:1;for(let _=k9+10;_<S9-60;){let P=Math.random()<0.3,u=y[Math.floor(Math.random()*y.length)];if(P){let W0=18+Math.random()*6;V0.fillStyle=u0?"#9a9a9a":"rgba(235,240,240,.9)",V0.fillRect(_,C9-W0*2.4,W0*2,W0*2.4),V0.fillStyle=u;for(let B0=0;B0<7;B0++)V0.beginPath(),V0.arc(_+5+Math.random()*(W0*2-10),C9-6-Math.random()*W0*1.8,5,0,Math.PI*2),V0.fill();V0.fillStyle="#c8402f",V0.fillRect(_-2,C9-W0*2.4-8,W0*2+4,9),_+=W0*2+8}else{let W0=46+Math.random()*34,B0=(m-N9)*(0.2+Math.random()*0.1);V0.fillStyle=u,V0.beginPath(),V0.moveTo(_,C9),V0.lineTo(_+3,C9-B0);for(let A0=0;A0<=6;A0++)V0.lineTo(_+3+A0*(W0-6)/6,C9-B0-(A0%2?5:0));V0.lineTo(_+W0,C9),V0.closePath(),V0.fill(),V0.fillStyle="rgba(255,255,255,.7)",V0.fillRect(_+W0*0.2,C9-B0*0.62,W0*0.6,B0*0.22),V0.fillStyle="rgba(255,255,255,.25)",V0.fillRect(_+4,C9-B0+8,5,B0-14),_+=W0+5}}V0.globalAlpha=1}if(!u0)V0.fillStyle="rgba(255,255,255,.22)",V0.beginPath(),V0.moveTo(k9+20,N9),V0.lineTo(k9+70,N9),V0.lineTo(k9+20,m),V0.lineTo(k9-10+20,m),V0.fill(),V0.strokeStyle="#3a2616",V0.lineWidth=10,V0.strokeRect(k9,N9,S9-k9,m-N9)}},$0=(V0)=>$((u0)=>K0(u0,V0),1024,x),D0=new n0({map:$0(!1),emissive:"#fff4de",emissiveMap:$0(!0),emissiveIntensity:0.2,roughness:0.55}),L0=z6.tope-0.1,z0=new T0(new L9(z6.ancho,L0),D0);z0.position.set(0,L0/2,z6.z+z6.fondo/2+0.006),J.add(z0)}let l=$((C,x,n)=>{let $0=n/7;C.fillStyle="#8a7a5a",C.fillRect(x/2-2,0,4,n);for(let D0=0;D0<7;D0++){let L0=D0*$0+4;C.fillStyle=y[(D0*5+3)%y.length],C.fillRect(6,L0,x-12,$0-8),C.fillStyle="rgba(255,255,255,.3)",C.fillRect(10,L0+6,x*0.16,$0-20),C.fillStyle="rgba(255,255,255,.75)",C.fillRect(x*0.3,L0+$0*0.36,x*0.4,$0*0.16)}},64,448),J0=new n0({map:l,roughness:0.45,alphaTest:0.5,side:a9});for(let C of[-1.74,-1.52,1.52,1.74])W(new L9(0.15,0.86),J0,[C,2.66,-3.86],[0,(X()-0.5)*0.5,0]);let Y0=new T0(new L9(0.8,1.5),new g9({color:new w0(1.05,1.08,1.1),map:$((C,x,n)=>{C.fillStyle="#dcecef",C.fillRect(0,0,x,n);let K0=5;for(let D0=0;D0<K0;D0++){let L0=n/K0,z0=D0*L0;C.fillStyle="rgba(140,160,165,.9)",C.fillRect(0,z0+L0*0.88,x,5);for(let V0=0;V0<8;V0++){let u0=(x-20)/8,X9=10+V0*u0;C.fillStyle=["#c8402f","#2c7a3f","#e3ae55","#7a3a1c","#2f6fa8","#f3eee3","#e07a2e"][(V0+D0*3)%7],C.fillRect(X9+u0*0.15,z0+L0*0.3,u0*0.7,L0*0.56),C.fillRect(X9+u0*0.36,z0+L0*0.12,u0*0.28,L0*0.2)}}let $0=C.createLinearGradient(0,0,x,0);$0.addColorStop(0,"rgba(255,255,255,.3)"),$0.addColorStop(0.35,"rgba(255,255,255,0)"),C.fillStyle=$0,C.fillRect(0,0,x,n),C.strokeStyle="#9aa8aa",C.lineWidth=10,C.strokeRect(0,0,x,n)},256,480)}));Y0.position.set(2.95,1.12,-4.09),J.add(Y0);let I0=new T0(new L9(0.9,0.2),new g9({map:G("Bien fría",{w:720,h:160,fondo:"#b8372b",tinta:"#f3eee3",sombra:null,px:0.62}),color:new w0(1.1,1.1,1.1)}));I0.position.set(2.95,2.17,-4.14),J.add(I0),Z(2.45,0.4,-1.86,1,0.8,0.6,"#e7ebe8"),Z(2.45,0.83,-1.86,1.04,0.06,0.64,"#d4dad8"),Z(2.45,0.12,-1.555,0.96,0.1,0.012,"#b9c0bd");{let C=new T0(new L9(0.62,0.19),new n0({map:G("HIELO",{w:640,h:196,fondo:null,tinta:"#1f5f9e",sombra:"#c8402f",px:0.7}),transparent:!0,roughness:0.8}));C.position.set(2.45,0.55,-1.553),J.add(C)}{let C=Q("#2d63a8",0.5),x=new n0({color:"#8cc0e6",roughness:0.12,transparent:!0,opacity:0.84});for(let $0=0;$0<2;$0++)for(let D0=0;D0<3;D0++){let L0=3.15+$0*0.4,z0=0.21+D0*0.4;W(new _9(0.155,0.155,0.4,16),x,[L0,z0,-2],[Math.PI/2,0,0]),W(new _9(0.05,0.05,0.1,10),x,[L0,z0,-2.25],[Math.PI/2,0,0])}for(let $0 of[0,0.4,0.8,1.2])Z(3.35,$0+0.012,-2,0.84,0.024,0.46,C);for(let $0 of[2.94,3.35,3.7600000000000002])Z($0,0.61,-2,0.03,1.22,0.46,C)}let j=(C,x,n,K0,$0)=>{let D0=Q($0,0.5),L0=(z0,V0,u0,X9,a0=0)=>{z0.rotateX(a0);let k9=Y(V0,u0,X9).applyAxisAngle(Y(0,1,0),K0);W(z0,D0,[C+k9.x,x+k9.y,n+k9.z],[0,K0,0])};L0(new P6(0.46,0.035,0.43,2,0.015),0,0.43,0),L0(new P6(0.44,0.42,0.03,2,0.012),0,0.71,-0.22,-0.16);for(let z0 of[-0.2,0.2])L0(new _9(0.018,0.024,0.43,6),z0,0.215,0.17,0.12),L0(new _9(0.018,0.024,0.45,6),z0,0.22,-0.19,-0.14),L0(new h9(0.03,0.18,0.3),z0*1.1,0.54,-0.02)};for(let C=0;C<4;C++)j(-3.42,C*0.075,-1.32-C*0.012,0.3,"#ecece6");j(3.55,0,0.55,-1.9,"#ecece6");{let K0=(V0,u0,X9,a0,k9,S9=0,N9=0)=>{V0.rotateX(S9),V0.rotateZ(N9);let m=Y(X9,a0,k9).applyAxisAngle(Y(0,1,0),0.3);W(V0,u0,[-3.25+m.x,m.y,2.85+m.z],[0,0.3,0])},$0=Q("#171b1b",0.8),D0=Q("#9aa3a0",0.35,0.6),L0=Q("#a8382c",0.45,0.1),z0=Q("#1e2222",0.7);for(let V0 of[-0.52,0.5])K0(new D8(0.26,0.055,8,18),$0,V0,0.3,0),K0(new _9(0.09,0.09,0.08,10),D0,V0,0.3,0,Math.PI/2);K0(new P6(0.6,0.22,0.24,2,0.05),L0,-0.02,0.53,0,0,-0.08),K0(new P6(0.55,0.08,0.26,2,0.03),z0,-0.28,0.68,0),K0(new P6(0.28,0.34,0.2,2,0.05),L0,0.37,0.64,0,0,-0.35),K0(new _9(0.018,0.018,0.62,6),D0,0.44,0.92,0,Math.PI/2),K0(new _9(0.02,0.02,0.62,6),D0,0.47,0.6,0,0,0.35),K0(new _9(0.03,0.035,0.45,8),D0,-0.35,0.3,0.13,0,Math.PI/2+0.1),K0(new P6(0.3,0.03,0.22,1,0.01),D0,-0.6,0.73,0)}for(let C=-9;C<4.4;C+=2)Z(C+0.5,-0.074,3.45,1,0.152,0.202,"#d6b24e");Z(8.3,-0.2,-4.575,7.4,0.1,15.85,"#2b3133"),Z(4.6,-0.075,-4.575,0.2,0.15,15.85,"#a8a391"),Z(12.3,-0.07,-4.575,1.2,0.16,15.85,"#8a8578");for(let C=-11;C<3;C+=1.8)Z(8.3,-0.146,C,0.06,0.008,0.7,"#b9ad83");{let C=new n0({color:"#ffd08a",emissive:"#ffb35a",emissiveIntensity:2.2}),x=Q("#2a3436",0.8),n=["#d8a25a","#8fb8a8","#e0d2b0","#c9897d","#b9c47a"],K0=-12,$0=0;while(K0<2.4){let D0=3+X()*1.6,L0=3+X()*2.6,z0=n[$0++%n.length];Z(14.4,L0/2,K0+D0/2,3,L0,D0,z0),Z(14.4,L0+0.08,K0+D0/2,3.1,0.16,D0+0.1,"#ddd4bf");let V0=Math.max(1,Math.floor(D0/1.5));for(let u0=0;u0<V0;u0++){let X9=K0+(u0+0.5)*D0/V0;if(W(new L9(0.75,0.95),X()<0.4?C:x,[12.885,1.55,X9],[0,-Math.PI/2,0]),L0>4.2)W(new L9(0.7,0.8),X()<0.35?C:x,[12.885,L0-1.1,X9],[0,-Math.PI/2,0])}K0+=D0+0.15}}{let C=new n0({roughness:0.6,metalness:0.3,map:$((n,K0,$0)=>{n.fillStyle="#8f9a94",n.fillRect(0,0,K0,$0);for(let D0=0;D0<$0;D0+=8)n.fillStyle="rgba(40,45,44,.35)",n.fillRect(0,D0,K0,2),n.fillStyle="rgba(230,235,230,.18)",n.fillRect(0,D0+3,K0,2);for(let D0=0;D0<40;D0++)n.fillStyle="rgba(120,70,40,.18)",n.fillRect(X()*K0,X()*$0,4+X()*20,2+X()*10)},256,256)});W(new L9(2.3,2.1),C,[-7,1.05,-1.365]),Z(-7,2.2,-1.33,2.45,0.2,0.1,"#6d7571");let x=new T0(new L9(1.7,0.42),new n0({map:G("Banca La Suerte",{w:1024,h:252,fondo:"#2f7a4d",tinta:"#f3eee3",sombra:"#1b2c22",borde:"#e3ae55",px:0.52}),roughness:0.85,emissive:"#ffffff",emissiveIntensity:0.08}));x.material.emissiveMap=x.material.map,x.position.set(-10.5,2.72,-1.36),J.add(x)}let a=Y(4.3,0,3);K(a.x,3.9,a.z,0.11,0.16,7.8,"#8e8a80",10),Z(a.x,7.25,a.z,0.1,0.1,1.7,"#5c574c"),K(a.x+0.28,6.3,a.z,0.2,0.2,0.62,"#6d7470",12);let U0=(C,x,n,K0="#141819",$0=0.011)=>{let D0=C.clone().lerp(x,0.5);D0.y-=n*2,W(new p6(new o6(C,D0,x),22,$0,4,!1),Q(K0),[0,0,0])};for(let C of[-0.6,0,0.6])U0(Y(a.x,7.3,a.z+C),Y(6,6.6,9.2+C*0.4),0.25);for(let C of[-0.5,0.5])U0(Y(a.x,7.3,a.z+C),Y(-5,4.2,-1+C*0.6),0.55);U0(Y(a.x,6.4,a.z),Y(3.95,5.7,-2.72),0.35),U0(Y(a.x,6.2,a.z),Y(3.95,5.5,-2.72),0.5,"#1d2121",0.008),U0(Y(a.x,5.9,a.z),Y(4.35,5.4,-9),0.4,"#1d2121",0.009),U0(Y(a.x,5.7,a.z),Y(4.35,5.2,-9),0.6,"#20241f",0.007);{let C=new e8(Array.from({length:14},(x,n)=>{let K0=n/13*Math.PI*4;return Y(a.x+0.16+Math.cos(K0)*0.14,5.2-n*0.018+Math.sin(K0)*0.14,a.z+Math.sin(K0)*0.05)}));W(new p6(C,60,0.008,4,!1),Q("#141819"),[0,0,0])}let b=0;return{update(C){if(C>b)b=C+0.25+Math.random()*1.4,D.emissiveIntensity=0.12+Math.random()*0.45,D.emissive.setHSL(0.58+Math.random()*0.08,0.5,0.55+Math.random()*0.2)}}}function HN({scene:J,random:$=Math.random}){let Q=$,Z=[],K=[],W=[],X=new w0,Y=(y,p,v=Z)=>{X.set(p);let r=y.attributes.position.count,l=new Float32Array(r*3);for(let J0=0;J0<r;J0++)l[J0*3]=X.r,l[J0*3+1]=X.g,l[J0*3+2]=X.b;return y.setAttribute("color",new t9(l,3)),y.deleteAttribute("uv"),v.push(y),y},H=(y,p,v,r,l,J0,Y0,I0=0,j)=>{let a=new h9(r,l,J0);if(I0)a.rotateY(I0);return a.translate(y,p,v),Y(a,Y0,j)},U=(y,p,v,r,l,J0,Y0=8)=>{let I0=new _9(r,r,l,Y0);return I0.translate(y,p,v),Y(I0,J0)},G=(y,p,v,r,l,J0,Y0,I0)=>{let j=new L9(r,l);return j.rotateY(J0),j.translate(y,p,v),Y(j,Y0,I0)},F=(y)=>y[Math.floor(Q()*y.length)],N=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0","#b7a4c9","#e0a58f","#9ec3b0"],q=["#9a968c","#8d8a80","#a39d90"],O="#8a8578",B="#a8a391",R="#2b3133",E="#b9ad83",z="#1b2224",M="#232c2e",V=(y)=>"#"+new w0(y).multiplyScalar(0.85).getHexString();function T(y,p,v,r,l,J0,{lejos:Y0=!1}={}){let j=J0*2.9+0.3,a=Q()<0.18?F(q):V(F(N)),U0=new S(Math.sin(v),0,Math.cos(v)),b=new S(U0.z,0,-U0.x),C=($0,D0,L0)=>new S(y,D0,p).addScaledVector(b,$0).addScaledVector(U0,L0),x=C(0,j/2,-l/2);H(x.x,x.y,x.z,r,j,l,a,v);let n=C(0,j+0.09,-l/2);H(n.x,n.y,n.z,r+0.12,0.18,l+0.12,"#d9d2bf",v);let K0=Math.max(1,Math.floor(r/1.6));for(let $0=0;$0<J0;$0++)for(let D0=0;D0<K0;D0++){let L0=-r/2+(D0+0.5)*r/K0,z0=$0*2.9+1.55,V0=C(L0,z0,Y0?0.04:0.012),u0=Q()<(Y0?0.3:0.38);if($0===0&&D0===Math.floor(K0/2)&&!Y0){let X9=C(L0,1.05,0.012);G(X9.x,X9.y,X9.z,0.95,2.1,v,Q()<0.3?"#7c8680":"#232c2e");continue}if(u0)G(V0.x,V0.y,V0.z,0.72,0.9,v,Q()<0.22?"#9fc3ff":F(["#ffd08a","#ffc27a","#ffe0a8"]),K);else G(V0.x,V0.y,V0.z,0.72,0.9,v,"#232c2e")}if(Y0){w(C,j,r,l);return}if(Q()<0.5){let $0=C(0,0.5,0.55);H($0.x,1,$0.z,r-0.1,0.05,0.05,"#1b2224",v);for(let L0 of[-0.5,-0.25,0,0.25,0.5]){let z0=C(L0*(r-0.1),0.5,0.55);H(z0.x,0.5,z0.z,0.05,1,0.05,"#1b2224",v)}let D0=C(0,2.75,0.6);H(D0.x,D0.y,D0.z,r,0.12,1.2,"#cfc6b2",v)}if(J0>1&&Q()<0.6){let $0=C(0,2.9499999999999997,0.45);H($0.x,$0.y,$0.z,r*0.7,0.12,0.9,"#cfc6b2",v);let D0=C(0,3.45,0.88);H(D0.x,D0.y,D0.z,r*0.7,0.05,0.05,"#1b2224",v);for(let L0=0;L0<=6;L0++){let z0=C((L0/6-0.5)*r*0.7,3.23,0.88);H(z0.x,z0.y,z0.z,0.03,0.5,0.03,"#1b2224",v)}}w(C,j,r,l)}function w(y,p,v,r){if(Q()<0.45){let l=y((Q()-0.5)*v*0.5,p+0.7,-r*(0.3+Q()*0.4));U(l.x,l.y,l.z,0.55,1.1,"#1f2324",10)}if(Q()<0.22)for(let l=0;l<4;l++){let J0=y((l%2-0.5)*(v-0.4),p+0.5,-(l<2?0.3:r-0.3));H(J0.x,J0.y,J0.z,0.04,1+Q()*0.4,0.04,"#5a4a3c")}if(Q()<0.15){let l=y(v*0.3,p+1.1,-r*0.5);H(l.x,l.y,l.z,0.03,2,0.03,"#3a3f40"),H(l.x,l.y+0.6,l.z,0.9,0.03,0.03,"#3a3f40")}}function D({eje:y,desde:p,hasta:v,fachada:r,ry:l,fondo:J0=[6,9],pisos:Y0=[1,3]}){let I0=p;while(I0<v-2){let j=Math.min(3.4+Q()*3.4,v-I0),a=I0+j/2,U0=r+(Q()-0.5)*0.5,b=Y0[0]+Math.floor(Q()*(Y0[1]-Y0[0]+1));if(y==="x")T(a,U0,l,j,J0[0]+Q()*(J0[1]-J0[0]),b);else T(U0,a,l,j,J0[0]+Q()*(J0[1]-J0[0]),b);I0+=j+0.12+(Q()<0.12?0.9+Q()*1.5:0)}}{let y=new L9(460,460);y.rotateX(-Math.PI/2),y.translate(0,-0.26,0),Y(y,"#35363a")}for(let[y,p]of[[-86,-20],[20,86]]){let v=(y+p)/2,r=p-y;H(v,-0.2,6.05,r,0.1,5.4,"#2b3133"),H(v,0.08,9.6,r,0.16,1.8,"#8a8578");for(let l=y+1;l<p;l+=3.6)H(l,-0.146,6.3,1.4,0.008,0.1,"#b9ad83")}H(-51,-0.1,0.97,70,0.2,4.76,"#8a8578"),H(-51,-0.075,3.45,70,0.15,0.2,"#a8a391"),H(49.45,-0.1,2.18,73.1,0.2,2.36,"#8a8578"),H(49.45,-0.075,3.45,73.1,0.15,0.2,"#a8a391"),D({eje:"x",desde:-84,hasta:-20.3,fachada:10.6,ry:Math.PI}),D({eje:"x",desde:20.3,hasta:84,fachada:10.6,ry:Math.PI}),D({eje:"x",desde:-84,hasta:-22.8,fachada:-1.4,ry:0}),D({eje:"x",desde:16.1,hasta:84,fachada:1,ry:0}),H(8.3,-0.2,-49.25,7.4,0.1,73.5,"#2b3133"),H(4.25,-0.1,-49.25,0.7,0.2,73.5,"#8a8578"),H(12.3,-0.07,-49.25,1.2,0.16,73.5,"#8a8578");for(let y=-13;y>-85;y-=3.6)H(8.3,-0.146,y,0.1,0.008,1.4,"#b9ad83");D({eje:"z",desde:-84,hasta:-5.5,fachada:3.9,ry:Math.PI/2,fondo:[7,9]}),D({eje:"z",desde:-84,hasta:-12.2,fachada:12.9,ry:-Math.PI/2,fondo:[7,9]});let L=(y,p,v)=>{let r=y.clone().lerp(p,0.5);r.y-=v*2;let l=new p6(new o6(y,r,p),14,0.014,3,!1);Y(l,"#101517")},I=(y,p)=>{U(y,3.5,p,0.1,7,"#6b6457",6),H(y,6.6,p,1.6,0.08,0.08,"#4f4a40")},i=(y,p,v)=>{H(y+v.x*0.55,6,p+v.z*0.55,Math.abs(v.x)?1.1:0.06,0.06,Math.abs(v.z)?1.1:0.06,"#4f4a40");let r=new B6(0.16,8,6);r.translate(y+v.x*1.1,5.9,p+v.z*1.1),Y(r,"#ffb866",W)};for(let y of[-1,1]){let p=y<0?-14:16;for(let v=1;v<=5;v++){let r=y<0?-14-v*12:16+v*12;if(I(r,9.2),v%2===0)i(r,9.2,new S(0,0,-1));for(let l of[0,-0.25,0.3])L(new S(p,6.6+l,9.2),new S(r,6.6+l,9.2),0.5);p=r}}{let y=-9;for(let p=1;p<=6;p++){let v=-9-p*12;if(I(12.4,v),p%2===1)i(12.4,v,new S(-1,0,0));for(let r of[0,0.3])L(new S(12.4,6.6+r,y),new S(12.4,6.6+r,v),0.5);y=v}}let h=(y,p,v)=>{let r=F(["#8b2f2a","#c9c6bd","#2f4a6b","#3b3f42","#b58a3a","#e2dfd6","#556b4f"]),l=new S(Math.sin(v),0,Math.cos(v));H(y,0.55,p,1.75,0.62,4.1,r,v);let J0=l.clone().multiplyScalar(-0.3);H(y+J0.x,1.1,p+J0.z,1.55,0.52,2.1,"#2a3236",v);let Y0=new S(l.z,0,-l.x);for(let[I0,j]of[[-0.8,1.3],[0.8,1.3],[-0.8,-1.3],[0.8,-1.3]]){let a=new _9(0.32,0.32,0.22,10);a.rotateZ(Math.PI/2),a.rotateY(v);let U0=new S(y,0.32,p).addScaledVector(Y0,I0).addScaledVector(l,j);a.translate(U0.x,U0.y,U0.z),Y(a,"#141718")}};for(let[y,p,v]of[[-31,4.4,Math.PI/2],[-47,4.4,Math.PI/2],[-72,4.4,-Math.PI/2],[27,4.4,Math.PI/2],[55,4.4,-Math.PI/2],[-58,7.9,Math.PI/2],[38,7.9,-Math.PI/2],[5.6,-24,0],[5.6,-41,Math.PI],[10.8,-31,0],[10.8,-62,Math.PI]])h(y,p,v);let d=(y,p)=>Math.abs(y)<30&&p>-22&&p<24||p>-14&&p<20||p<-10&&y>-12&&y<30;for(let y=-78;y<=78;y+=13)for(let p=-78;p<=78;p+=13){let v=y+(Q()-0.5)*6,r=p+(Q()-0.5)*6;if(d(v,r)||Math.hypot(v,r)>80)continue;let l=Math.hypot(v,r),J0=l>45&&Q()<0.07,Y0=Math.atan2(-v,-r),I0=Math.round(Y0/(Math.PI/2))*(Math.PI/2),j=J0?5+Math.floor(Q()*5):1+Math.floor(Q()*(r>0?2:3));if(T(v,r,I0,6+Q()*6,6+Q()*5,j,{lejos:!0}),Q()<0.35){let a=F(["#3f5a3c","#4a6443","#35503a"]),U0=v+(Q()-0.5)*8,b=r+(Q()-0.5)*8,C=2+Q()*2.5,x=new LQ(C,0);x.scale(1,0.8,1),x.translate(U0,C*0.6+2.5,b),Y(x,a),U(U0,1.4,b,0.25,2.8,"#4d4234",5)}}for(let y=0;y<14;y++){let p=Q()*Math.PI*2,v=32+Q()*44,r=Math.cos(p)*v,l=Math.sin(p)*v;if(d(r,l))continue;let J0=9+Q()*5,Y0=new _9(0.14,0.22,J0,5);Y0.translate(r,J0/2,l),Y(Y0,"#5d5445");for(let I0=0;I0<8;I0++){let j=new YJ(0.3,3,3,1);j.rotateZ(Math.PI/2+0.5),j.translate(1.5,0,0),j.rotateY(I0/8*Math.PI*2),j.translate(r,J0,l),Y(j,"#34503a")}}{let p=[],v=[];for(let l=0;l<=240;l++){let J0=l/240*Math.PI*2,Y0=86+Math.sin(J0*3.1)*1.5,I0=6+7*(0.5+0.5*Math.sin(J0*2.3+0.7))+3.5*Math.sin(J0*5.1+1)**2+1.2*Math.sin(J0*13.7+2)+0.5*Math.sin(J0*31.3);if(p.push(Math.cos(J0)*Y0,-1,Math.sin(J0)*Y0,Math.cos(J0)*Y0,Math.max(5,I0),Math.sin(J0)*Y0),l<240){let j=l*2;v.push(j,j+2,j+1,j+1,j+2,j+3)}}let r=new b9;r.setAttribute("position",new W9(p,3)),r.setIndex(v),r.computeVertexNormals(),Y(r,"#3d4552")}let Q0=[],f=(y,p)=>{if(!y.length)return;let v=y.map((J0)=>J0.index?J0.toNonIndexed():J0),r=V$(v,!1);if(v.forEach((J0)=>J0.dispose()),y.forEach((J0)=>J0.dispose()),!r)return;let l=new T0(r,p);l.matrixAutoUpdate=!1,J.add(l),Q0.push(l)};return f(Z,new n0({vertexColors:!0,roughness:0.92,side:a9})),f(K,new g9({vertexColors:!0,color:new w0(1.9,1.9,1.9)})),f(W,new g9({vertexColors:!0,color:new w0(5,5,5)})),{mallas:Q0}}var AL=["cafe","morir","presidente","presidente"];function TL(){let J=document.createElement("canvas");J.width=256,J.height=128;let $=J.getContext("2d");$.fillStyle="#f1ece0",$.fillRect(0,0,256,128),$.fillStyle="#b3262d",$.fillRect(0,10,256,14),$.fillRect(0,104,256,14),$.fillStyle="#1f5a36",$.beginPath(),$.ellipse(128,64,54,28,0,0,Math.PI*2),$.fill(),$.fillStyle="#f1ece0",$.beginPath(),$.ellipse(128,64,46,21,0,0,Math.PI*2),$.fill(),$.fillStyle="#b3262d",$.fillRect(92,58,72,12);let Q=new b6(J);return Q.colorSpace=J6,Q}function _L(){let J=new T9,$=(H,U)=>new O0(H,U),Q=[$(0,0),$(0.034,0),$(0.037,0.006),$(0.037,0.165),$(0.034,0.188),$(0.022,0.222),$(0.0145,0.252),$(0.0138,0.274),$(0.0158,0.279),$(0.0158,0.29),$(0.0112,0.29),$(0.0106,0.268),$(0.0112,0.24)],Z=new n0({color:"#2d5a26",roughness:0.18,metalness:0.05,envMapIntensity:1.4});J.add(new T0(new b8(Q,20),Z));let K=new T0(new b8(Q.slice(1,5).map((H)=>$(H.x+0.0006,H.y)),20),new n0({color:"#e8f0e4",roughness:0.9,transparent:!0,opacity:0.22,depthWrite:!1}));J.add(K);let W=new T0(new _9(0.0376,0.0376,0.075,24,1,!0),new n0({map:TL(),roughness:0.6}));W.position.y=0.095,J.add(W);let X=new T0(new _9(0.0149,0.0152,0.02,16,1,!0),new n0({color:"#b3262d",roughness:0.5}));X.position.y=0.262,J.add(X);let Y=new T0(new t8(0.0112,16),new g9({color:"#0d160c"}));return Y.rotation.x=-Math.PI/2,Y.position.y=0.245,J.add(Y),{g:J,alto:0.11,radio:0.037,inclina:1.25,boca:0.18}}function SL(){let J=document.createElement("canvas");J.width=J.height=128;let $=J.getContext("2d"),Q=64;$.fillStyle="#e07a16",$.beginPath(),$.arc(Q,Q,64,0,Math.PI*2),$.fill(),$.fillStyle="#f6e7c6",$.beginPath(),$.arc(Q,Q,56,0,Math.PI*2),$.fill();for(let K=0;K<10;K++){let W=K*Math.PI/5;$.fillStyle=K%2?"#f39a2c":"#f7a93f",$.beginPath(),$.moveTo(Q+Math.cos(W+0.05)*6,Q+Math.sin(W+0.05)*6),$.arc(Q,Q,51,W+0.05,W+Math.PI/5-0.05),$.closePath(),$.fill()}$.fillStyle="#fbe3b4",$.beginPath(),$.arc(Q,Q,5,0,Math.PI*2),$.fill();let Z=new b6(J);return Z.colorSpace=J6,Z}function wL(){let J=document.createElement("canvas");J.width=J.height=64;let $=J.getContext("2d");$.fillStyle="#f3efe6",$.fillRect(0,0,64,64),$.fillStyle="rgba(120,110,90,.16)",$.fillRect(31,0,2,64),$.fillRect(0,31,64,2),$.strokeStyle="rgba(120,110,90,.1)",$.lineWidth=1,$.strokeRect(3,3,58,58);let Q=new b6(J);Q.colorSpace=J6;let Z=new T0(new L9(0.1,0.1),new n0({map:Q,roughness:0.95}));Z.rotation.set(-Math.PI/2,0,0.35);let K=new T9;return K.add(Z),K}function jL(){let J=new T9,$=(V,T)=>new O0(V,T),Z=new n0({color:"#e4eef1",roughness:0.05,transparent:!0,opacity:0.18,depthWrite:!1,side:a9,envMapIntensity:1.6}),K=new T0(new b8([$(0,0.001),$(0.028,0),$(0.0295,0.004),$(0.034,0.14),$(0.0316,0.14),$(0.0272,0.012),$(0,0.012)],28),Z);K.renderOrder=2,J.add(K);let W=new T0(new D8(0.0328,0.0014,6,32),new n0({color:"#f4fbfd",roughness:0.05,transparent:!0,opacity:0.6,depthWrite:!1}));W.rotation.x=Math.PI/2,W.position.y=0.14,W.renderOrder=3,J.add(W);let X=0.118,Y=[$(0,0.012),$(0.0268,0.012),$(0.0312,X),$(0,X)],H=new b8(Y,28),U=[],G=new w0("#e5822f"),F=new w0("#f1b066"),N=new w0,q=H.attributes.position;for(let V=0;V<q.count;V++){let T=Math.min(1,Math.max(0,(q.getY(V)-0.012)/(X-0.012)));N.copy(G).lerp(F,T),U.push(N.r,N.g,N.b)}H.setAttribute("color",new W9(U,3)),J.add(new T0(H,new n0({vertexColors:!0,roughness:0.55})));let O=new T0(new _9(0.0312,0.0312,0.006,28),new n0({color:"#f6d6a2",roughness:0.8}));O.position.y=X+0.001,J.add(O);let B=new n0({color:"#eef6f9",roughness:0.12,transparent:!0,opacity:0.82});for(let[V,T,w]of[[0.011,0.007,0.4],[-0.008,-0.01,1.1],[0.003,0.013,2.2]]){let D=new T0(new P6(0.017,0.015,0.017,2,0.004),B);D.position.set(V,X+0.003,T),D.rotation.set(w*0.3,w,w*0.2),J.add(D)}let R=new n0({color:"#e07a16",roughness:0.6}),E=new n0({map:SL(),roughness:0.55}),z=new T0(new _9(0.023,0.023,0.005,24),[R,E,E]);z.rotation.set(Math.PI/2,0,0.2),z.position.set(0.036,0.136,0),J.add(z);let M=new T0(new _9(0.0032,0.0032,0.19,8),new n0({color:"#c8392e",roughness:0.45}));return M.position.set(-0.012,0.108,0.002),M.rotation.z=0.07,J.add(M),{g:J,alto:0.06,radio:0.034,inclina:0.3,boca:0.14,plato:wL(),sobrePlato:0.0012}}function yL(){let J=new T9,$=new n0({color:"#efe9da",roughness:0.22}),Q=new T0(new _9(0.053,0.047,0.008,28),$);Q.position.y=0.004,J.add(Q);let Z=new n0({color:"#efe9da",roughness:0.22,side:a9}),K=new T0(new _9(0.034,0.025,0.056,24,1,!0),Z),W=new T0(new t8(0.025,20),$);W.rotation.x=-Math.PI/2,W.position.y=0.0085,J.add(W),K.position.y=0.036,J.add(K);let X=new T0(new t8(0.0318,24),new n0({color:"#2a160c",roughness:0.15}));X.rotation.x=-Math.PI/2,X.position.y=0.056,J.add(X);let Y=new T0(new D8(0.014,0.004,6,12,Math.PI*1.3),$);return Y.position.set(0.036,0.038,0),Y.rotation.z=-Math.PI*0.65,J.add(Y),J.remove(Q),{g:J,alto:0.034,radio:0.034,inclina:0.9,boca:0.034,plato:Q,sobrePlato:0.008}}function UN(J){let $=[];for(let Q=0;Q<4;Q++){let Z=AL[Q],K=Z==="presidente"?_L():Z==="morir"?jL():yL(),[W,X,Y]=k8[Q],H=C0.tableWidth/2-0.055,U=C0.tableCenterY+C0.tableThickness/2,G=new S(-H,0,C0.seatDistance-H).applyAxisAngle(new S(0,1,0),Y).add(new S(W,0,X));if(G.y=U,K.g.traverse((F)=>{if(F.isMesh)F.castShadow=!0,F.receiveShadow=!0}),K.plato)G.y+=K.sobrePlato;if(K.g.position.copy(G),J.add(K.g),K.plato)K.plato.position.copy(G),K.plato.position.y=U+K.sobrePlato/2,K.plato.traverse((F)=>{if(F.isMesh)F.receiveShadow=!0}),J.add(K.plato);$.push({group:K.g,home:G,index:Q,tipo:Z,alto:K.alto,radio:K.radio,inclina:K.inclina,boca:K.boca,plato:K.plato||null})}return $}var fL=1.05;function bK(J){let $={};for(let Q of["Left","Right"]){let Z=J.getObjectByName(Q+"Dedos1"),K=J.getObjectByName(Q+"Dedos2"),W=Z?.userData?.eje;if(Z&&K&&Array.isArray(W))$[Q]={a:Z,b:K,eje:new S(...W).normalize(),x:0}}return $}function bQ(J,$){if(!J||J.x===$)return;J.x=$;let Q=-$*fL/2;J.a.quaternion.setFromAxisAngle(J.eje,Q),J.b.quaternion.setFromAxisAngle(J.eje,Q)}var M$={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class H8{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var vL=new K7(-1,1,1,-1,0,1);class NN extends b9{constructor(){super();this.setAttribute("position",new W9([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new W9([0,2,0,0,2,0],2))}}var bL=new NN;class BJ{constructor(J){this._mesh=new T0(bL,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,vL)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class hQ extends H8{constructor(J,$="tDiffuse"){super();if(this.textureID=$,this.uniforms=null,this.material=null,J instanceof $6)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=J7.clone(J.uniforms),this.material=new $6({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new BJ(this.material)}render(J,$,Q){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=Q.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget($),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class hK extends H8{constructor(J,$){super();this.scene=J,this.camera=$,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,$,Q){let Z=J.getContext(),K=J.state;K.buffers.color.setMask(!1),K.buffers.depth.setMask(!1),K.buffers.color.setLocked(!0),K.buffers.depth.setLocked(!0);let W,X;if(this.inverse)W=0,X=1;else W=1,X=0;if(K.buffers.stencil.setTest(!0),K.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),K.buffers.stencil.setFunc(Z.ALWAYS,W,4294967295),K.buffers.stencil.setClear(X),K.buffers.stencil.setLocked(!0),J.setRenderTarget(Q),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget($),this.clear)J.clear();J.render(this.scene,this.camera),K.buffers.color.setLocked(!1),K.buffers.depth.setLocked(!1),K.buffers.color.setMask(!0),K.buffers.depth.setMask(!0),K.buffers.stencil.setLocked(!1),K.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),K.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),K.buffers.stencil.setLocked(!0)}}class kY extends H8{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class MY{constructor(J,$){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),$===void 0){let Q=J.getSize(new O0);this._width=Q.width,this._height=Q.height,$=new X6(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:V6}),$.texture.name="EffectComposer.rt1"}else this._width=$.width,this._height=$.height;this.renderTarget1=$,this.renderTarget2=$.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hQ(M$),this.copyPass.material.blending=Q8,this.timer=new RK}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,$){this.passes.splice($,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let $=this.passes.indexOf(J);if($!==-1)this.passes.splice($,1)}isLastEnabledPass(J){for(let $=J+1;$<this.passes.length;$++)if(this.passes[$].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let $=this.renderer.getRenderTarget(),Q=!1;for(let Z=0,K=this.passes.length;Z<K;Z++){let W=this.passes[Z];if(W.enabled===!1)continue;if(W.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),W.render(this.renderer,this.writeBuffer,this.readBuffer,J,Q),W.needsSwap){if(Q){let X=this.renderer.getContext(),Y=this.renderer.state.buffers.stencil;Y.setFunc(X.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),Y.setFunc(X.EQUAL,1,4294967295)}this.swapBuffers()}if(hK!==void 0){if(W instanceof hK)Q=!0;else if(W instanceof kY)Q=!1}}this.renderer.setRenderTarget($)}reset(J){if(J===void 0){let $=this.renderer.getSize(new O0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=$.width,this._height=$.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,$){this._width=J,this._height=$;let Q=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize(Q,Z),this.renderTarget2.setSize(Q,Z);for(let K=0;K<this.passes.length;K++)this.passes[K].setSize(Q,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class CY extends H8{constructor(J,$,Q=null,Z=null,K=null){super();this.scene=J,this.camera=$,this.overrideMaterial=Q,this.clearColor=Z,this.clearAlpha=K,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new w0}render(J,$,Q){let Z=J.autoClear;J.autoClear=!1;let K,W;if(this.overrideMaterial!==null)W=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)K=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:Q),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(K);if(this.overrideMaterial!==null)this.scene.overrideMaterial=W;J.autoClear=Z}}var GN={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new w0(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class DJ extends H8{constructor(J,$=1,Q,Z){super();this.strength=$,this.radius=Q,this.threshold=Z,this.resolution=J!==void 0?new O0(J.x,J.y):new O0(256,256),this.clearColor=new w0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);this.renderTargetBright=new X6(K,W,{type:V6,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let G=new X6(K,W,{type:V6,depthBuffer:!1});G.texture.name="UnrealBloomPass.h"+U,G.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(G);let F=new X6(K,W,{type:V6,depthBuffer:!1});F.texture.name="UnrealBloomPass.v"+U,F.texture.generateMipmaps=!1,this.renderTargetsVertical.push(F),K=Math.round(K/2),W=Math.round(W/2)}let X=GN;this.highPassUniforms=J7.clone(X.uniforms),this.highPassUniforms.luminosityThreshold.value=Z,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new $6({uniforms:this.highPassUniforms,vertexShader:X.vertexShader,fragmentShader:X.fragmentShader}),this.separableBlurMaterials=[];let Y=[6,10,14,18,22];K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(Y[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new O0(1/K,1/W),K=Math.round(K/2),W=Math.round(W/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=$,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let H=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=H,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=J7.clone(M$.uniforms),this.blendMaterial=new $6({uniforms:this.copyUniforms,vertexShader:M$.vertexShader,fragmentShader:M$.fragmentShader,premultipliedAlpha:!0,blending:w8,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new w0,this._oldClearAlpha=1,this._basic=new g9,this._fsQuad=new BJ(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,$){let Q=Math.round(J/2),Z=Math.round($/2);this.renderTargetBright.setSize(Q,Z);for(let K=0;K<this.nMips;K++)this.renderTargetsHorizontal[K].setSize(Q,Z),this.renderTargetsVertical[K].setSize(Q,Z),this.separableBlurMaterials[K].uniforms.invSize.value=new O0(1/Q,1/Z),Q=Math.round(Q/2),Z=Math.round(Z/2)}render(J,$,Q,Z,K){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let W=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),K)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=Q.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=Q.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let X=this.renderTargetBright;for(let Y=0;Y<this.nMips;Y++)this._fsQuad.material=this.separableBlurMaterials[Y],this.separableBlurMaterials[Y].uniforms.colorTexture.value=X.texture,this.separableBlurMaterials[Y].uniforms.direction.value=DJ.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[Y]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[Y].uniforms.colorTexture.value=this.renderTargetsHorizontal[Y].texture,this.separableBlurMaterials[Y].uniforms.direction.value=DJ.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[Y]),J.clear(),this._fsQuad.render(J),X=this.renderTargetsVertical[Y];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,K)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget(Q),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=W}_getSeparableBlurMaterial(J){let $=[],Q=J/3;for(let W=0;W<J;W++)$.push(0.39894*Math.exp(-0.5*W*W/(Q*Q))/Q);let Z=[],K=[];for(let W=1;W<J;W+=2){let X=$[W],Y=W+1<J?$[W+1]:0,H=X+Y;Z.push((W*X+(W+1)*Y)/H),K.push(H)}return new $6({defines:{KERNEL_PAIRS:Z.length},uniforms:{colorTexture:{value:null},invSize:{value:new O0(0.5,0.5)},direction:{value:new O0(0.5,0.5)},centerWeight:{value:$[0]},gaussianOffsets:{value:Z},gaussianWeights:{value:K}},vertexShader:`

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

				}`})}_getCompositeMaterial(J){return new $6({defines:{NUM_MIPS:J},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}DJ.BlurDirectionX=new O0(1,0);DJ.BlurDirectionY=new O0(0,1);var xQ={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class IY extends H8{constructor(){super();this.isOutputPass=!0,this.uniforms=J7.clone(xQ.uniforms),this.material=new BQ({name:xQ.name,uniforms:this.uniforms,vertexShader:xQ.vertexShader,fragmentShader:xQ.fragmentShader}),this._fsQuad=new BJ(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,$,Q){if(this.uniforms.tDiffuse.value=Q.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},V9.getTransfer(this._outputColorSpace)===n9)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===JQ)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===$Q)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===QQ)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===o7)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===KQ)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===WQ)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===ZQ)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget($),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var y6=(()=>{let J=7;return()=>{return J=Math.imul(J,1664525)+1013904223>>>0,J/4294967296}})();function PY(J,$=256,Q=256){let Z=document.createElement("canvas");Z.width=$,Z.height=Q,J(Z.getContext("2d"),$,Q);let K=new b6(Z);return K.colorSpace=J6,K}function FN(J="255,214,150"){return PY(($,Q,Z)=>{let K=$.createRadialGradient(Q/2,Z/2,0,Q/2,Z/2,Q/2);K.addColorStop(0,`rgba(${J},1)`),K.addColorStop(0.18,`rgba(${J},.55)`),K.addColorStop(0.5,`rgba(${J},.12)`),K.addColorStop(1,`rgba(${J},0)`),$.fillStyle=K,$.fillRect(0,0,Q,Z)})}var EN=new S(-0.55,-0.035,-0.83).normalize();function hL(J){let $=new T9,Q=new T0(new B6(80,32,16),new $6({side:I6,depthWrite:!1,fog:!1,uniforms:{uSol:{value:EN}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 uSol;
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
   }`}));Q.renderOrder=-10,$.add(Q);let Z=220,K=new Float32Array(Z*3),W=new Float32Array(Z*3);for(let U=0;U<Z;U++){let G=y6(),F=y6()*Math.PI*2,N=0.45+G*0.55,q=Math.sqrt(1-N*N),O=0.25+0.55*y6()*N;K.set([Math.cos(F)*q*75,N*75,Math.sin(F)*q*75],U*3),W.set([O*0.85,O*0.9,O],U*3)}let X=new b9;X.setAttribute("position",new t9(K,3)),X.setAttribute("color",new t9(W,3)),$.add(new G$(X,new WJ({size:1.3,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0,opacity:0.45})));let Y=new T0(new t8(2.1,40),new g9({color:"#f6e7cc",fog:!1}));Y.position.set(26,11,58),Y.lookAt(0,1,0),$.add(Y);let H=new U$(new ZJ({map:FN("255,226,200"),fog:!1,transparent:!0,opacity:0.28,depthWrite:!1,blending:w8}));return H.scale.setScalar(13),H.position.copy(Y.position),$.add(H),J.add($),$}function xL(J){let $=new Map,Q=(F,N=0,q=0)=>{let O=F+N+q;if(!$.has(O))$.set(O,{m:new n0({color:N?F:new w0(F).multiplyScalar(0.85),roughness:0.9,emissive:N||"#000",emissiveIntensity:q}),g:[]});return $.get(O)},Z=(F,N,q,O,B,R=0)=>{F.rotateY(R),F.translate(q,O,B),N.g.push(F)},K=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0"],W=-20;while(W<20){let F=3.4+y6()*2.6,N=3+y6()*2.8,q=10.5+y6()*0.8,O=K[Math.floor(y6()*K.length)];Z(new h9(F,N,2.4),Q(O),W+F/2,N/2,q+1.2),Z(new h9(F+0.12,0.18,2.6),Q("#d9d2bf"),W+F/2,N+0.09,q+1.2);let B=Math.max(1,Math.floor(F/1.5));for(let R=0;R<B;R++){let E=W+(R+0.5)*F/B,z=y6()<0.4,M=y6()<0.2,V=z?Q(M?"#9fc3ff":"#ffd08a",M?"#6f9cff":"#ffb35a",M?1.6:2.2):Q("#2a3436");if(Z(new L9(0.75,0.95),V,E,1.55,q-0.005,Math.PI),N>4.2)Z(new L9(0.7,0.8),y6()<0.35?Q("#ffd08a","#ffb35a",1.5):Q("#2a3436"),E,N-1.1,q-0.005,Math.PI);Z(new h9(0.9,0.06,0.12),Q("#2c3432"),E,2.08,q-0.06)}for(let R=0;R<Math.floor(F/0.22);R++)Z(new h9(0.018,0.9,0.018),Q("#1b2224"),W+0.11+R*0.22,0.45,q-0.55);Z(new h9(F,0.04,0.04),Q("#1b2224"),W+F/2,0.9,q-0.55),W+=F+0.15}Z(new h9(44,0.16,1.8),Q("#8a8578"),0,0.08,9.6);let X=[-14,-4,6,16];for(let F of X)Z(new _9(0.09,0.12,7,8),Q("#6b6457"),F,3.5,9.2),Z(new h9(1.6,0.08,0.08),Q("#4f4a40"),F,6.6,9.2);for(let F=0;F<X.length-1;F++)for(let N of[0,-0.25,0.3]){let q=new S(X[F],6.6+N,9.2),O=new S(X[F+1],6.6+N,9.2),B=q.clone().lerp(O,0.5);B.y-=0.55,Z(new p6(new o6(q,B,O),16,0.012,4),Q("#101517"),0,0,0)}for(let[F,N,q]of[[-9,12.8,7.5],[11,13.1,8.4],[2.5,13.4,6.4]]){let O=new e8([new S(F,0,N),new S(F+0.3,q*0.5,N),new S(F+0.8,q,N-0.2)]);Z(new p6(O,12,0.16,6),Q("#5d5445"),0,0,0);for(let B=0;B<9;B++){let R=B/9*Math.PI*2,E=new YJ(0.28,2.6,4,1);E.rotateZ(Math.PI/2+0.55),E.translate(1.3,0,0),E.rotateY(R),Z(E,Q("#34503a"),F+0.8,q,N-0.2)}}let Y=[];for(let{m:F,g:N}of $.values()){let q=V$(N,!1);if(N.forEach((B)=>B.dispose()),!q)continue;let O=new T0(q,F);O.receiveShadow=!0,J.add(O),Y.push(O)}let H=new Z7("#ffa35c",6,14,1.8);H.position.set(6,5.9,8.6),J.add(H);let U=new T0(new B6(0.14,12,8),new n0({color:"#ffcf94",emissive:"#ff9a45",emissiveIntensity:5}));U.position.copy(H.position),J.add(U);let G=new T0(new _9(0.03,0.03,1.3,6),new n0({color:"#4f4a40"}));return G.rotation.z=Math.PI/2,G.position.set(6,6.05,8.9),J.add(G),{merged:Y,farol:H}}function gL(J,$){let Q=new T9;Q.position.copy($),J.add(Q);let Z=new T0(new B6(0.038,16,12),new n0({color:"#fff4d6",emissive:"#ffd08a",emissiveIntensity:9}));Z.scale.y=1.25,Q.add(Z);let K=new T0(new _9(0.018,0.02,0.05,10),new n0({color:"#2b2a26",roughness:0.6}));K.position.y=0.065,Q.add(K);let W=new T0(new _9(0.004,0.004,1.1,5),new n0({color:"#15181a"}));W.position.y=0.64,Q.add(W);let X=new U$(new ZJ({map:FN(),transparent:!0,opacity:0.55,depthWrite:!1,blending:w8}));X.scale.setScalar(0.75),Q.add(X);let Y=[],H=new ZJ({color:"#3b3026",transparent:!0,opacity:0.85,depthWrite:!1});for(let U=0;U<6;U++){let G=new U$(H);G.scale.setScalar(0.012+y6()*0.008),Q.add(G),Y.push({s:G,r:0.07+y6()*0.12,w:2+y6()*4,f:y6()*6,y:0.05+y6()*0.08,k:1.3+y6()})}return{g:Q,halo:X,polillas:Y}}function pL(){let J=new Y$;J.add(new T0(new B6(10,24,12),new $6({side:I6,uniforms:{uSol:{value:EN}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform vec3 uSol;void main(){float l=dot(normalize(vP.xz+vec2(1e-4)),normalize(uSol.xz))*.5+.5;vec3 hor=mix(vec3(.3,.25,.36),vec3(.85,.45,.25),pow(l,2.5));gl_FragColor=vec4(mix(hor,vec3(.05,.07,.17),smoothstep(-.05,.7,vP.y))*mix(.35,1.,smoothstep(-.3,0.,vP.y)),1.);}"})));let $=(Q,Z,K,W,X,Y)=>{let H=new T0(new L9(K,W),new g9({color:new w0(Q).multiplyScalar(Z),side:a9}));H.position.set(...X),H.lookAt(...Y),J.add(H)};return $("#ffcf94",6,1.2,1.2,[0,6,0],[0,0,0]),$("#dff3ea",2,5,2,[0,2.5,-8],[0,1,0]),J}function qN({scene:J,renderer:$,camera:Q,controls:Z,software:K,bulbLight:W}){function X(){let f=new AQ($),y=pL(),p=f.fromScene(y,0.02);J.environment?.dispose?.(),J.environment=p.texture,J.environmentIntensity=0.75,f.dispose(),y.traverse((v)=>{v.geometry?.dispose(),v.material?.dispose()})}X(),J.background=new w0("#2a2d4a"),J.fog=new QJ("#5a5670",0.017);let Y=hL(J),H=xL(J),U=new S(0,C0.surfaceY+1.3,0),G=gL(J,U),F=PY((f,y,p)=>{let v=f.createRadialGradient(y/2,p*0.62,0,y/2,p*0.62,y/2);v.addColorStop(0,"rgba(255,196,110,.95)"),v.addColorStop(0.45,"rgba(255,170,80,.35)"),v.addColorStop(1,"rgba(255,150,60,0)"),f.fillStyle=v,f.fillRect(0,0,y,p)},256,128),N=new T0(new L9(0.62,0.26),new g9({map:F,transparent:!0,opacity:0,depthWrite:!1,blending:w8,toneMapped:!1}));N.rotation.x=-Math.PI/2,N.position.y=C0.surfaceY+0.0012,N.renderOrder=3,J.add(N);let q={i:-1,ang:0,alfa:0,objetivo:0,pos:new S},O=(f)=>PY((y,p,v)=>{y.strokeStyle=`rgba(${f},1)`,y.lineWidth=p*0.09,y.beginPath(),y.arc(p/2,v/2,p*0.36,0,Math.PI*2),y.stroke();let r=y.createRadialGradient(p/2,v/2,0,p/2,v/2,p/2);r.addColorStop(0,`rgba(${f},.5)`),r.addColorStop(1,`rgba(${f},0)`),y.fillStyle=r,y.fillRect(0,0,p,v)},128,128),B=["227,174,85","111,183,201"].map((f)=>{let y=new T0(new L9(0.036,0.036),new g9({map:O(f),transparent:!0,opacity:0,depthWrite:!1,blending:w8,toneMapped:!1}));return y.rotation.x=-Math.PI/2,y.position.y=C0.surfaceY+0.0015,y.renderOrder=3,J.add(y),y}),R=null,E=Q.clone(),z=new S,M=new S,V=null,T=null,w=null,D=!1;function L(){if(V)return;let f=$.getDrawingBufferSize(new O0),y=new X6(f.x,f.y,{type:V6,samples:4});V=new MY($,y),V.addPass(new CY(J,E)),T=new DJ(new O0(f.x/2,f.y/2),0.4,0.5,3.2),w=new hQ({uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uVineta:{value:0.34},uGrano:{value:0.018}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uTiempo,uVineta,uGrano;varying vec2 vUv;
    float azar(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTiempo*43.7)*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     vec2 q=vUv-.5;float v=1.-uVineta*smoothstep(.25,.85,length(q*vec2(1.15,1.)));
     c.rgb*=v;
     // Sombras hacia el lila y luces cálidas: el atardecer con el bombillo ya prendido.
     float l=dot(c.rgb,vec3(.2126,.7152,.0722));
     c.rgb*=mix(vec3(.96,.95,1.06),vec3(1.04,1.,.93),smoothstep(.02,.4,l));
     c.rgb+=(azar(vUv*vec2(1920.,1080.))-.5)*uGrano*(.4+l);
     gl_FragColor=c;}`}),V.addPass(w),V.addPass(new IY)}function I(f){if(D=!K&&f==="high",D)L();G.halo.visible=!0,H.farol.visible=f==="high"}function i(f,y){if(V)V.setPixelRatio($.getPixelRatio()),V.setSize(f,y);E.aspect=Q.aspect,E.updateProjectionMatrix()}function h(f,y,{reduced:p,view:v,ends:r,temblor:l=0}){if(E.copy(Q),!p){if(z.set(Math.sin(f*0.11)*0.012+Math.sin(f*0.037)*0.008,Math.sin(f*0.083+1)*0.007,Math.cos(f*0.097)*0.01),l)z.add(M.set(Math.sin(f*97)*l,Math.sin(f*113)*l*0.6,Math.cos(f*89)*l));E.position.add(z),M.copy(Z.target).addScaledVector(z,0.35),E.lookAt(M)}if(E.updateMatrixWorld(),G.halo.material.opacity=0.5+0.05*Math.sin(f*23)*Math.sin(f*1.7)+(p?0:0.03*Math.sin(f*3.1)),!p)for(let Y0 of G.polillas){let I0=f*Y0.w+Y0.f;Y0.s.position.set(Math.cos(I0)*Y0.r,Y0.y+Math.sin(I0*Y0.k)*0.05,Math.sin(I0*1.3)*Y0.r)}let J0=v?.phase==="playing";if(J0&&v.turn!=null){let[Y0,I0,j]=k8[v.turn],a=C0.boardLimit+0.075;if(q.i!==v.turn)q.i=v.turn,q.destino=new S(Y0*a/C0.seatDistance,0,I0*a/C0.seatDistance),q.angDestino=j;q.pos.lerp(q.destino,1-Math.exp(-y*6));let U0=q.angDestino-q.ang;U0=Math.atan2(Math.sin(U0),Math.cos(U0)),q.ang+=U0*(1-Math.exp(-y*6)),q.objetivo=0.55+(p?0:0.08*Math.sin(f*2.2))}else q.objetivo=0;q.alfa+=(q.objetivo-q.alfa)*(1-Math.exp(-y*4)),N.material.opacity=q.alfa,N.visible=q.alfa>0.01,N.position.set(q.pos.x,C0.surfaceY+0.0012,q.pos.z),N.rotation.set(-Math.PI/2,0,q.ang);for(let Y0=0;Y0<2;Y0++){let I0=B[Y0],j=J0&&r?r[Y0]:null;if(!j){I0.material.opacity=Math.max(0,I0.material.opacity-y*3),I0.visible=I0.material.opacity>0.01;continue}I0.visible=!0,I0.position.set(j.x,C0.surfaceY+0.0015,j.z);let a=p?1:1+0.12*Math.sin(f*3.4+Y0*1.3);I0.scale.setScalar(a),I0.material.opacity=Math.min(0.7,I0.material.opacity+y*3)}if(w)w.uniforms.uTiempo.value=f%100}function d(){if(D&&V)V.render();else $.render(J,E)}function Q0(){V?.dispose()}return{vista:E,frame:h,render:d,resize:i,calidad:I,dispose:Q0,bulbPos:U,entorno:X}}class jY extends Q7{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function($){return new MN($)}),this.register(function($){return new CN($)}),this.register(function($){return new jN($)}),this.register(function($){return new yN($)}),this.register(function($){return new fN($)}),this.register(function($){return new PN($)}),this.register(function($){return new zN($)}),this.register(function($){return new AN($)}),this.register(function($){return new TN($)}),this.register(function($){return new kN($)}),this.register(function($){return new _N($)}),this.register(function($){return new IN($)}),this.register(function($){return new wN($)}),this.register(function($){return new SN($)}),this.register(function($){return new BN($)}),this.register(function($){return new _Y($,I9.EXT_MESHOPT_COMPRESSION)}),this.register(function($){return new _Y($,I9.KHR_MESHOPT_COMPRESSION)}),this.register(function($){return new vN($)})}load(J,$,Q,Z){let K=this,W;if(this.resourcePath!=="")W=this.resourcePath;else if(this.path!==""){let H=A7.extractUrlBase(J);W=A7.resolveURL(H,this.path)}else W=A7.extractUrlBase(J);this.manager.itemStart(J);let X=function(H){if(Z)Z(H);else console.error(H);K.manager.itemError(J),K.manager.itemEnd(J)},Y=new DQ(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(H){try{K.parse(H,W,function(U){$(U),K.manager.itemEnd(J)},X)}catch(U){X(U)}},Q,X)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,$,Q,Z){let K,W={},X={},Y=new TextDecoder;if(typeof J==="string")K=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===bN){try{W[I9.KHR_BINARY_GLTF]=new hN(J)}catch(G){if(Z)Z(G);return}K=JSON.parse(W[I9.KHR_BINARY_GLTF].content)}else K=JSON.parse(Y.decode(J));else K=J;if(K.asset===void 0||K.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let H=new lN(K,{path:$||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});H.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](H);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");X[G.name]=G,W[G.name]=!0}if(K.extensionsUsed)for(let U=0;U<K.extensionsUsed.length;++U){let G=K.extensionsUsed[U],F=K.extensionsRequired||[];switch(G){case I9.KHR_MATERIALS_UNLIT:W[G]=new DN;break;case I9.KHR_DRACO_MESH_COMPRESSION:W[G]=new xN(K,this.dracoLoader);break;case I9.KHR_TEXTURE_TRANSFORM:W[G]=new gN;break;case I9.KHR_MESH_QUANTIZATION:W[G]=new pN;break;default:if(F.indexOf(G)>=0&&X[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}H.setExtensions(W),H.setPlugins(X),H.parse(Q,Z)}parseAsync(J,$){let Q=this;return new Promise(function(Z,K){Q.parse(J,$,Z,K)})}}function mL(){let J={};return{get:function($){return J[$]},add:function($,Q){J[$]=Q},remove:function($){delete J[$]},removeAll:function(){J={}}}}function Y6(J,$,Q){let Z=J.json.materials[$];if(Z.extensions&&Z.extensions[Q])return Z.extensions[Q];return null}var I9={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BN{constructor(J){this.parser=J,this.name=I9.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,$=this.parser.json.nodes||[];for(let Q=0,Z=$.length;Q<Z;Q++){let K=$[Q];if(K.extensions&&K.extensions[this.name]&&K.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,K.extensions[this.name].light)}}_loadLight(J){let $=this.parser,Q="light:"+J,Z=$.cache.get(Q);if(Z)return Z;let K=$.json,Y=((K.extensions&&K.extensions[this.name]||{}).lights||[])[J],H,U=new w0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],i6);let G=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":H=new q$(U),H.target.position.set(0,0,-1),H.add(H.target);break;case"point":H=new Z7(U),H.distance=G;break;case"spot":H=new E$(U),H.distance=G,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,H.angle=Y.spot.outerConeAngle,H.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,H.target.position.set(0,0,-1),H.add(H.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(H.position.set(0,0,0),m8(H,Y),Y.intensity!==void 0)H.intensity=Y.intensity;return H.name=$.createUniqueName(Y.name||"light_"+J),Z=Promise.resolve(H),$.cache.add(Q,Z),Z}getDependency(J,$){if(J!=="light")return;return this._loadLight($)}createNodeAttachment(J){let $=this,Q=this.parser,K=Q.json.nodes[J],X=(K.extensions&&K.extensions[this.name]||{}).light;if(X===void 0)return null;return this._loadLight(X).then(function(Y){return Q._getNodeRef($.cache,X,Y)})}}class DN{constructor(){this.name=I9.KHR_MATERIALS_UNLIT}getMaterialType(){return g9}extendParams(J,$,Q){let Z=[];J.color=new w0(1,1,1),J.opacity=1;let K=$.pbrMetallicRoughness;if(K){if(Array.isArray(K.baseColorFactor)){let W=K.baseColorFactor;J.color.setRGB(W[0],W[1],W[2],i6),J.opacity=W[3]}if(K.baseColorTexture!==void 0)Z.push(Q.assignTexture(J,"map",K.baseColorTexture,J6))}return Promise.all(Z)}}class kN{constructor(J){this.parser=J,this.name=I9.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,$){let Q=Y6(this.parser,J,this.name);if(Q===null)return Promise.resolve();if(Q.emissiveStrength!==void 0)$.emissiveIntensity=Q.emissiveStrength;return Promise.resolve()}}class MN{constructor(J){this.parser=J,this.name=I9.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return Y6(this.parser,J,this.name)!==null?D6:null}extendMaterialParams(J,$){let Q=Y6(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.clearcoatFactor!==void 0)$.clearcoat=Q.clearcoatFactor;if(Q.clearcoatTexture!==void 0)Z.push(this.parser.assignTexture($,"clearcoatMap",Q.clearcoatTexture));if(Q.clearcoatRoughnessFactor!==void 0)$.clearcoatRoughness=Q.clearcoatRoughnessFactor;if(Q.clearcoatRoughnessTexture!==void 0)Z.push(this.parser.assignTexture($,"clearcoatRoughnessMap",Q.clearcoatRoughnessTexture));if(Q.clearcoatNormalTexture!==void 0){if(Z.push(this.parser.assignTexture($,"clearcoatNormalMap",Q.clearcoatNormalTexture)),Q.clearcoatNormalTexture.scale!==void 0){let K=Q.clearcoatNormalTexture.scale;$.clearcoatNormalScale=new O0(K,K)}}return Promise.all(Z)}}class CN{constructor(J){this.parser=J,this.name=I9.KHR_MATERIALS_DISPERSION}getMaterialType(J){return Y6(this.parser,J,this.name)!==null?D6:null}extendMaterialParams(J,$){let Q=Y6(this.parser,J,this.name);if(Q===null)return Promise.resolve();return $.dispersion=Q.dispersion!==void 0?Q.dispersion:0,Promise.resolve()}}class IN{constructor(J){this.parser=J,this.name=I9.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return Y6(this.parser,J,this.name)!==null?D6:null}extendMaterialParams(J,$){let Q=Y6(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.iridescenceFactor!==void 0)$.iridescence=Q.iridescenceFactor;if(Q.iridescenceTexture!==void 0)Z.push(this.parser.assignTexture($,"iridescenceMap",Q.iridescenceTexture));if(Q.iridescenceIor!==void 0)$.iridescenceIOR=Q.iridescenceIor;if($.iridescenceThicknessRange===void 0)$.iridescenceThicknessRange=[100,400];if(Q.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessRange[0]=Q.iridescenceThicknessMinimum;if(Q.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessRange[1]=Q.iridescenceThicknessMaximum;if(Q.iridescenceThicknessTexture!==void 0)Z.push(this.parser.assignTexture($,"iridescenceThicknessMap",Q.iridescenceThicknessTexture));return Promise.all(Z)}}class PN{constructor(J){this.parser=J,this.name=I9.KHR_MATERIALS_SHEEN}getMaterialType(J){return Y6(this.parser,J,this.name)!==null?D6:null}extendMaterialParams(J,$){let Q=Y6(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.sheenColor=new w0(0,0,0),$.sheenRoughness=0,$.sheen=1,Q.sheenColorFactor!==void 0){let K=Q.sheenColorFactor;$.sheenColor.setRGB(K[0],K[1],K[2],i6)}if(Q.sheenRoughnessFactor!==void 0)$.sheenRoughness=Q.sheenRoughnessFactor;if(Q.sheenColorTexture!==void 0)Z.push(this.parser.assignTexture($,"sheenColorMap",Q.sheenColorTexture,J6));if(Q.sheenRoughnessTexture!==void 0)Z.push(this.parser.assignTexture($,"sheenRoughnessMap",Q.sheenRoughnessTexture));return Promise.all(Z)}}class zN{constructor(J){this.parser=J,this.name=I9.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return Y6(this.parser,J,this.name)!==null?D6:null}extendMaterialParams(J,$){let Q=Y6(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.transmissionFactor!==void 0)$.transmission=Q.transmissionFactor;if(Q.transmissionTexture!==void 0)Z.push(this.parser.assignTexture($,"transmissionMap",Q.transmissionTexture));return Promise.all(Z)}}class AN{constructor(J){this.parser=J,this.name=I9.KHR_MATERIALS_VOLUME}getMaterialType(J){return Y6(this.parser,J,this.name)!==null?D6:null}extendMaterialParams(J,$){let Q=Y6(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.thickness=Q.thicknessFactor!==void 0?Q.thicknessFactor:0,Q.thicknessTexture!==void 0)Z.push(this.parser.assignTexture($,"thicknessMap",Q.thicknessTexture));$.attenuationDistance=Q.attenuationDistance||1/0;let K=Q.attenuationColor||[1,1,1];return $.attenuationColor=new w0().setRGB(K[0],K[1],K[2],i6),Promise.all(Z)}}class TN{constructor(J){this.parser=J,this.name=I9.KHR_MATERIALS_IOR}getMaterialType(J){return Y6(this.parser,J,this.name)!==null?D6:null}extendMaterialParams(J,$){let Q=Y6(this.parser,J,this.name);if(Q===null)return Promise.resolve();if($.ior=Q.ior!==void 0?Q.ior:1.5,$.ior===0)$.ior=1000;return Promise.resolve()}}class _N{constructor(J){this.parser=J,this.name=I9.KHR_MATERIALS_SPECULAR}getMaterialType(J){return Y6(this.parser,J,this.name)!==null?D6:null}extendMaterialParams(J,$){let Q=Y6(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.specularIntensity=Q.specularFactor!==void 0?Q.specularFactor:1,Q.specularTexture!==void 0)Z.push(this.parser.assignTexture($,"specularIntensityMap",Q.specularTexture));let K=Q.specularColorFactor||[1,1,1];if($.specularColor=new w0().setRGB(K[0],K[1],K[2],i6),Q.specularColorTexture!==void 0)Z.push(this.parser.assignTexture($,"specularColorMap",Q.specularColorTexture,J6));return Promise.all(Z)}}class SN{constructor(J){this.parser=J,this.name=I9.EXT_MATERIALS_BUMP}getMaterialType(J){return Y6(this.parser,J,this.name)!==null?D6:null}extendMaterialParams(J,$){let Q=Y6(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if($.bumpScale=Q.bumpFactor!==void 0?Q.bumpFactor:1,Q.bumpTexture!==void 0)Z.push(this.parser.assignTexture($,"bumpMap",Q.bumpTexture));return Promise.all(Z)}}class wN{constructor(J){this.parser=J,this.name=I9.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return Y6(this.parser,J,this.name)!==null?D6:null}extendMaterialParams(J,$){let Q=Y6(this.parser,J,this.name);if(Q===null)return Promise.resolve();let Z=[];if(Q.anisotropyStrength!==void 0)$.anisotropy=Q.anisotropyStrength;if(Q.anisotropyRotation!==void 0)$.anisotropyRotation=Q.anisotropyRotation;if(Q.anisotropyTexture!==void 0)Z.push(this.parser.assignTexture($,"anisotropyMap",Q.anisotropyTexture));return Promise.all(Z)}}class jN{constructor(J){this.parser=J,this.name=I9.KHR_TEXTURE_BASISU}loadTexture(J){let $=this.parser,Q=$.json,Z=Q.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let K=Z.extensions[this.name],W=$.options.ktx2Loader;if(!W)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return $.loadTextureImage(J,K.source,W)}}class yN{constructor(J){this.parser=J,this.name=I9.EXT_TEXTURE_WEBP}loadTexture(J){let $=this.name,Q=this.parser,Z=Q.json,K=Z.textures[J];if(!K.extensions||!K.extensions[$])return null;let W=K.extensions[$],X=Z.images[W.source],Y=Q.textureLoader;if(X.uri){let H=Q.options.manager.getHandler(X.uri);if(H!==null)Y=H}return Q.loadTextureImage(J,W.source,Y)}}class fN{constructor(J){this.parser=J,this.name=I9.EXT_TEXTURE_AVIF}loadTexture(J){let $=this.name,Q=this.parser,Z=Q.json,K=Z.textures[J];if(!K.extensions||!K.extensions[$])return null;let W=K.extensions[$],X=Z.images[W.source],Y=Q.textureLoader;if(X.uri){let H=Q.options.manager.getHandler(X.uri);if(H!==null)Y=H}return Q.loadTextureImage(J,W.source,Y)}}class _Y{constructor(J,$){this.name=$,this.parser=J}loadBufferView(J){let $=this.parser.json,Q=$.bufferViews[J];if(Q.extensions&&Q.extensions[this.name]){let Z=Q.extensions[this.name],K=this.parser.getDependency("buffer",Z.buffer),W=this.parser.options.meshoptDecoder;if(!W||!W.supported)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return K.then(function(X){let Y=Z.byteOffset||0,H=Z.byteLength||0,U=Z.count,G=Z.byteStride,F=new Uint8Array(X,Y,H);if(W.decodeGltfBufferAsync)return W.decodeGltfBufferAsync(U,G,F,Z.mode,Z.filter).then(function(N){return N.buffer});else return W.ready.then(function(){let N=new ArrayBuffer(U*G);return W.decodeGltfBuffer(new Uint8Array(N),U,G,F,Z.mode,Z.filter),N})})}else return null}}class vN{constructor(J){this.name=I9.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let $=this.parser.json,Q=$.nodes[J];if(!Q.extensions||!Q.extensions[this.name]||Q.mesh===void 0)return null;let Z=$.meshes[Q.mesh];for(let H of Z.primitives)if(H.mode!==U8.TRIANGLES&&H.mode!==U8.TRIANGLE_STRIP&&H.mode!==U8.TRIANGLE_FAN&&H.mode!==void 0)return null;let W=Q.extensions[this.name].attributes,X=[],Y={};for(let H in W)X.push(this.parser.getDependency("accessor",W[H]).then((U)=>{return Y[H]=U,Y[H]}));if(X.length<1)return null;return X.push(this.parser.createNodeMesh(J)),Promise.all(X).then((H)=>{let U=H.pop(),G=U.isGroup?U.children:[U],F=H[0].count,N=[];for(let q of G){let O=new $9,B=new S,R=new K9,E=new S(1,1,1),z=new v8(q.geometry,q.material,F);for(let V=0;V<F;V++){if(Y.TRANSLATION)B.fromBufferAttribute(Y.TRANSLATION,V);if(Y.ROTATION)R.fromBufferAttribute(Y.ROTATION,V);if(Y.SCALE)E.fromBufferAttribute(Y.SCALE,V);z.setMatrixAt(V,O.compose(B,R,E))}let M=null;for(let V in Y)if(V==="_COLOR_0"){let T=Y[V];z.instanceColor=new R7(T.array,T.itemSize,T.normalized)}else if(V!=="TRANSLATION"&&V!=="ROTATION"&&V!=="SCALE"){if(M===null){let w=z.geometry;M=new b9,M.name=w.name;for(let D in w.attributes)M.setAttribute(D,w.attributes[D]);for(let D in w.morphAttributes)M.morphAttributes[D]=w.morphAttributes[D];if(w.index!==null)M.setIndex(w.index);M.morphTargetsRelative=w.morphTargetsRelative;for(let D of w.groups)M.addGroup(D.start,D.count,D.materialIndex);if(w.boundingBox!==null)M.boundingBox=w.boundingBox.clone();if(w.boundingSphere!==null)M.boundingSphere=w.boundingSphere.clone();M.drawRange.start=w.drawRange.start,M.drawRange.count=w.drawRange.count,M.userData=Object.assign({},w.userData),z.geometry=M}let T=Y[V];M.setAttribute(V,new R7(T.array,T.itemSize,T.normalized))}j9.prototype.copy.call(z,q),this.parser.assignFinalMaterial(z),N.push(z)}if(U.isGroup)return U.clear(),U.add(...N),U;return N[0]})}}var bN="glTF",gQ=12,ON={JSON:1313821514,BIN:5130562};class hN{constructor(J){this.name=I9.KHR_BINARY_GLTF,this.content=null,this.body=null;let $=new DataView(J,0,gQ),Q=new TextDecoder;if(this.header={magic:Q.decode(new Uint8Array(J.slice(0,4))),version:$.getUint32(4,!0),length:$.getUint32(8,!0)},this.header.magic!==bN)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-gQ,K=new DataView(J,gQ),W=0;while(W<Z){let X=K.getUint32(W,!0);W+=4;let Y=K.getUint32(W,!0);if(W+=4,Y===ON.JSON){let H=new Uint8Array(J,gQ+W,X);this.content=Q.decode(H)}else if(Y===ON.BIN){let H=gQ+W;this.body=J.slice(H,H+X)}W+=X}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class xN{constructor(J,$){if(!$)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=I9.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=$,this.dracoLoader.preload()}decodePrimitive(J,$){let Q=this.json,Z=this.dracoLoader,K=J.extensions[this.name].bufferView,W=J.extensions[this.name].attributes,X={},Y={},H={};for(let U in W){let G=SY[U]||U.toLowerCase();X[G]=W[U]}for(let U in J.attributes){let G=SY[U]||U.toLowerCase();if(W[U]!==void 0){let F=Q.accessors[J.attributes[U]],N=C$[F.componentType];H[G]=N.name,Y[G]=F.normalized===!0}}return $.getDependency("bufferView",K).then(function(U){return new Promise(function(G,F){Z.decodeDracoFile(U,function(N){for(let q in N.attributes){let O=N.attributes[q],B=Y[q];if(B!==void 0)O.normalized=B}G(N)},X,H,i6,F)})})}}class gN{constructor(){this.name=I9.KHR_TEXTURE_TRANSFORM}extendTexture(J,$){if(($.texCoord===void 0||$.texCoord===J.channel)&&$.offset===void 0&&$.rotation===void 0&&$.scale===void 0)return J;if(J=J.clone(),$.texCoord!==void 0)J.channel=$.texCoord;if($.offset!==void 0)J.offset.fromArray($.offset);if($.rotation!==void 0)J.rotation=$.rotation;if($.scale!==void 0)J.repeat.fromArray($.scale);if($.rotation!==void 0){let Q=Math.cos(J.rotation),Z=Math.sin(J.rotation);J.matrix.set(J.repeat.x*Q,J.repeat.y*Z,J.offset.x,-J.repeat.x*Z,J.repeat.y*Q,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class pN{constructor(){this.name=I9.KHR_MESH_QUANTIZATION}}class yY extends $7{constructor(J,$,Q,Z){super(J,$,Q,Z)}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,K=J*Z*3+Z;for(let W=0;W!==Z;W++)$[W]=Q[K+W];return $}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=X*2,H=X*3,U=Z-$,G=(Q-$)/U,F=G*G,N=F*G,q=J*H,O=q-H,B=-2*N+3*F,R=N-F,E=1-B,z=R-F+G;for(let M=0;M!==X;M++){let V=W[O+M+X],T=W[O+M+Y]*U,w=W[q+M+X],D=W[q+M]*U;K[M]=E*V+z*T+B*w+R*D}return K}}var lL=new K9;class mN extends yY{interpolate_(J,$,Q,Z){let K=super.interpolate_(J,$,Q,Z);return lL.fromArray(K).normalize().toArray(K),K}}var U8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},C$={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},RN={9728:L8,9729:L6,9984:pZ,9985:K$,9986:r7,9987:j8},LN={33071:Z$,33648:gZ,10497:D7},zY={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},SY={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uL={CUBICSPLINE:void 0,LINEAR:sZ,STEP:RX},AY={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dL(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new n0({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:B7});return J.DefaultMaterial}function kJ(J,$,Q){for(let Z in Q.extensions)if(J[Z]===void 0)$.userData.gltfExtensions=$.userData.gltfExtensions||{},$.userData.gltfExtensions[Z]=Q.extensions[Z]}function m8(J,$){if($.extras!==void 0)if(typeof $.extras==="object")Object.assign(J.userData,$.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+$.extras)}function cL(J,$,Q){let Z=!1,K=!1,W=!1;for(let U=0,G=$.length;U<G;U++){let F=$[U];if(F.POSITION!==void 0)Z=!0;if(F.NORMAL!==void 0)K=!0;if(F.COLOR_0!==void 0)W=!0;if(Z&&K&&W)break}if(!Z&&!K&&!W)return Promise.resolve(J);let X=[],Y=[],H=[];for(let U=0,G=$.length;U<G;U++){let F=$[U];if(Z){let N=F.POSITION!==void 0?Q.getDependency("accessor",F.POSITION):J.attributes.position;X.push(N)}if(K){let N=F.NORMAL!==void 0?Q.getDependency("accessor",F.NORMAL):J.attributes.normal;Y.push(N)}if(W){let N=F.COLOR_0!==void 0?Q.getDependency("accessor",F.COLOR_0):J.attributes.color;H.push(N)}}return Promise.all([Promise.all(X),Promise.all(Y),Promise.all(H)]).then(function(U){let G=U[0],F=U[1],N=U[2];if(Z)J.morphAttributes.position=G;if(K)J.morphAttributes.normal=F;if(W)J.morphAttributes.color=N;return J.morphTargetsRelative=!0,J})}function nL(J,$){if(J.updateMorphTargets(),$.weights!==void 0)for(let Q=0,Z=$.weights.length;Q<Z;Q++)J.morphTargetInfluences[Q]=$.weights[Q];if($.extras&&Array.isArray($.extras.targetNames)){let Q=$.extras.targetNames;if(J.morphTargetInfluences.length===Q.length){J.morphTargetDictionary={};for(let Z=0,K=Q.length;Z<K;Z++)J.morphTargetDictionary[Q[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sL(J){let $,Q=J.extensions&&J.extensions[I9.KHR_DRACO_MESH_COMPRESSION];if(Q)$="draco:"+Q.bufferView+":"+Q.indices+":"+TY(Q.attributes);else $=J.indices+":"+TY(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,K=J.targets.length;Z<K;Z++)$+=":"+TY(J.targets[Z]);return $}function TY(J){let $="",Q=Object.keys(J).sort();for(let Z=0,K=Q.length;Z<K;Z++)$+=Q[Z]+":"+J[Q[Z]]+";";return $}function wY(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iL(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var oL=new $9;class lN{constructor(J={},$={}){this.json=J,this.extensions={},this.plugins={},this.options=$,this.cache=new mL,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let Q=!1,Z=-1,K=!1,W=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let X=navigator.userAgent;Q=/^((?!chrome|android).)*safari/i.test(X)===!0;let Y=X.match(/Version\/(\d+)/);Z=Q&&Y?parseInt(Y[1],10):-1,K=X.indexOf("Firefox")>-1,W=K?X.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||Q&&Z<17||K&&W<98)this.textureLoader=new FK(this.options.manager);else this.textureLoader=new OK(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new DQ(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,$){let Q=this,Z=this.json,K=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(W){return W._markDefs&&W._markDefs()}),Promise.all(this._invokeAll(function(W){return W.beforeRoot&&W.beforeRoot()})).then(function(){return Promise.all([Q.getDependencies("scene"),Q.getDependencies("animation"),Q.getDependencies("camera")])}).then(function(W){let X={scene:W[0][Z.scene||0],scenes:W[0],animations:W[1],cameras:W[2],asset:Z.asset,parser:Q,userData:{}};return kJ(K,X,Z),m8(X,Z),Promise.all(Q._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(X)})).then(function(){for(let Y of X.scenes)Y.updateMatrixWorld();J(X)})}).catch($)}_markDefs(){let J=this.json.nodes||[],$=this.json.skins||[],Q=this.json.meshes||[];for(let Z=0,K=$.length;Z<K;Z++){let W=$[Z].joints;for(let X=0,Y=W.length;X<Y;X++)J[W[X]].isBone=!0}for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];if(W.mesh!==void 0){if(this._addNodeRef(this.meshCache,W.mesh),W.skin!==void 0)Q[W.mesh].isSkinnedMesh=!0}if(W.camera!==void 0)this._addNodeRef(this.cameraCache,W.camera)}}_addNodeRef(J,$){if($===void 0)return;if(J.refs[$]===void 0)J.refs[$]=J.uses[$]=0;J.refs[$]++}_getNodeRef(J,$,Q){if(J.refs[$]<=1)return Q;let Z=Q.clone(),K=(W,X)=>{let Y=this.associations.get(W);if(Y!=null)this.associations.set(X,Y);for(let[H,U]of W.children.entries())K(U,X.children[H])};return K(Q,Z),Z.name+="_instance_"+J.uses[$]++,Z}_invokeOne(J){let $=Object.values(this.plugins);$.push(this);for(let Q=0;Q<$.length;Q++){let Z=J($[Q]);if(Z)return Z}return null}_invokeAll(J){let $=Object.values(this.plugins);$.unshift(this);let Q=[];for(let Z=0;Z<$.length;Z++){let K=J($[Z]);if(K)Q.push(K)}return Q}getDependency(J,$){let Q=J+":"+$,Z=this.cache.get(Q);if(!Z){switch(J){case"scene":Z=this.loadScene($);break;case"node":Z=this._invokeOne(function(K){return K.loadNode&&K.loadNode($)});break;case"mesh":Z=this._invokeOne(function(K){return K.loadMesh&&K.loadMesh($)});break;case"accessor":Z=this.loadAccessor($);break;case"bufferView":Z=this._invokeOne(function(K){return K.loadBufferView&&K.loadBufferView($)});break;case"buffer":Z=this.loadBuffer($);break;case"material":Z=this._invokeOne(function(K){return K.loadMaterial&&K.loadMaterial($)});break;case"texture":Z=this._invokeOne(function(K){return K.loadTexture&&K.loadTexture($)});break;case"skin":Z=this.loadSkin($);break;case"animation":Z=this._invokeOne(function(K){return K.loadAnimation&&K.loadAnimation($)});break;case"camera":Z=this.loadCamera($);break;default:if(Z=this._invokeOne(function(K){return K!=this&&K.getDependency&&K.getDependency(J,$)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add(Q,Z)}return Z}getDependencies(J){let $=this.cache.get(J);if(!$){let Q=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];$=Promise.all(Z.map(function(K,W){return Q.getDependency(J,W)})),this.cache.add(J,$)}return $}loadBuffer(J){let $=this.json.buffers[J],Q=this.fileLoader;if($.type&&$.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+$.type+" buffer type is not supported.");if($.uri===void 0&&J===0)return Promise.resolve(this.extensions[I9.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(K,W){Q.load(A7.resolveURL($.uri,Z.path),K,void 0,function(){W(Error('THREE.GLTFLoader: Failed to load buffer "'+$.uri+'".'))})})}loadBufferView(J){let $=this.json.bufferViews[J];return this.getDependency("buffer",$.buffer).then(function(Q){let Z=$.byteLength||0,K=$.byteOffset||0;return Q.slice(K,K+Z)})}loadAccessor(J){let $=this,Q=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let W=zY[Z.type],X=C$[Z.componentType],Y=Z.normalized===!0,H=new X(Z.count*W);return Promise.resolve(new t9(H,W,Y))}let K=[];if(Z.bufferView!==void 0)K.push(this.getDependency("bufferView",Z.bufferView));else K.push(null);if(Z.sparse!==void 0)K.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),K.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(K).then(function(W){let X=W[0],Y=zY[Z.type],H=C$[Z.componentType],U=H.BYTES_PER_ELEMENT,G=U*Y,F=Z.byteOffset||0,N=Z.bufferView!==void 0?Q.bufferViews[Z.bufferView].byteStride:void 0,q=Z.normalized===!0,O,B;if(N&&N!==G){let R=Math.floor(F/N),E="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+R+":"+Z.count,z=$.cache.get(E);if(!z)O=new H(X,R*N,Z.count*N/U),z=new H$(O,N/U),$.cache.add(E,z);B=new O7(z,Y,F%N/U,q)}else{if(X===null)O=new H(Z.count*Y);else O=new H(X,F,Z.count*Y);B=new t9(O,Y,q)}if(Z.sparse!==void 0){let R=zY.SCALAR,E=C$[Z.sparse.indices.componentType],z=Z.sparse.indices.byteOffset||0,M=Z.sparse.values.byteOffset||0,V=new E(W[1],z,Z.sparse.count*R),T=new H(W[2],M,Z.sparse.count*Y);if(X!==null)B=new t9(B.array.slice(),B.itemSize,B.normalized);B.normalized=!1;for(let w=0,D=V.length;w<D;w++){let L=V[w];if(B.setX(L,T[w*Y]),Y>=2)B.setY(L,T[w*Y+1]);if(Y>=3)B.setZ(L,T[w*Y+2]);if(Y>=4)B.setW(L,T[w*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}B.normalized=q}return B})}loadTexture(J){let $=this.json,Q=this.options,K=$.textures[J].source,W=$.images[K],X=this.textureLoader;if(W.uri){let Y=Q.manager.getHandler(W.uri);if(Y!==null)X=Y}return this.loadTextureImage(J,K,X)}loadTextureImage(J,$,Q){let Z=this,K=this.json,W=K.textures[J],X=K.images[$],Y=(X.uri||X.bufferView)+":"+W.sampler;if(this.textureCache[Y])return this.textureCache[Y];let H=this.loadImageSource($,Q).then(function(U){if(U.flipY=!1,U.name=W.name||X.name||"",U.name===""&&typeof X.uri==="string"&&X.uri.startsWith("data:image/")===!1)U.name=X.uri;let F=(K.samplers||{})[W.sampler]||{};return U.magFilter=RN[F.magFilter]||L6,U.minFilter=RN[F.minFilter]||j8,U.wrapS=LN[F.wrapS]||D7,U.wrapT=LN[F.wrapT]||D7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==L8&&U.minFilter!==L6,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=H,H}loadImageSource(J,$){let Q=this,Z=this.json,K=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let W=Z.images[J],X=self.URL||self.webkitURL,Y=W.uri||"",H=!1;if(W.bufferView!==void 0)Y=Q.getDependency("bufferView",W.bufferView).then(function(G){H=!0;let F=new Blob([G],{type:W.mimeType});return Y=X.createObjectURL(F),Y});else if(W.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(Y).then(function(G){return new Promise(function(F,N){let q=F;if($.isImageBitmapLoader===!0)q=function(O){let B=new W6(O);B.needsUpdate=!0,F(B)};$.load(A7.resolveURL(G,K.path),q,void 0,N)})}).then(function(G){if(H===!0)X.revokeObjectURL(Y);return m8(G,W),G.userData.mimeType=W.mimeType||iL(W.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),G});return this.sourceCache[J]=U,U}assignTexture(J,$,Q,Z){let K=this;return this.getDependency("texture",Q.index).then(function(W){if(!W)return null;if(Q.texCoord!==void 0&&Q.texCoord>0)W=W.clone(),W.channel=Q.texCoord;if(K.extensions[I9.KHR_TEXTURE_TRANSFORM]){let X=Q.extensions!==void 0?Q.extensions[I9.KHR_TEXTURE_TRANSFORM]:void 0;if(X){let Y=K.associations.get(W);W=K.extensions[I9.KHR_TEXTURE_TRANSFORM].extendTexture(W,X),K.associations.set(W,Y)}}if(Z!==void 0)W.colorSpace=Z;return J[$]=W,W})}assignFinalMaterial(J){let{geometry:$,material:Q}=J,Z=$.attributes.tangent===void 0,K=$.attributes.color!==void 0,W=$.attributes.normal===void 0;if(J.isPoints){let X="PointsMaterial:"+Q.uuid,Y=this.cache.get(X);if(!Y)Y=new WJ,g6.prototype.copy.call(Y,Q),Y.color.copy(Q.color),Y.map=Q.map,Y.sizeAttenuation=!1,this.cache.add(X,Y);Q=Y}else if(J.isLine){let X="LineBasicMaterial:"+Q.uuid,Y=this.cache.get(X);if(!Y)Y=new qQ,g6.prototype.copy.call(Y,Q),Y.color.copy(Q.color),Y.map=Q.map,this.cache.add(X,Y);Q=Y}if(Z||K||W){let X="ClonedMaterial:"+Q.uuid+":";if(Z)X+="derivative-tangents:";if(K)X+="vertex-colors:";if(W)X+="flat-shading:";let Y=this.cache.get(X);if(!Y){if(Y=Q.clone(),K)Y.vertexColors=!0;if(W)Y.flatShading=!0;if(Z){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(X,Y),this.associations.set(Y,this.associations.get(Q))}Q=Y}J.material=Q}getMaterialType(){return n0}loadMaterial(J){let $=this,Q=this.json,Z=this.extensions,K=Q.materials[J],W,X={},Y=K.extensions||{},H=[];if(Y[I9.KHR_MATERIALS_UNLIT]){let G=Z[I9.KHR_MATERIALS_UNLIT];W=G.getMaterialType(),H.push(G.extendParams(X,K,$))}else{let G=K.pbrMetallicRoughness||{};if(X.color=new w0(1,1,1),X.opacity=1,Array.isArray(G.baseColorFactor)){let F=G.baseColorFactor;X.color.setRGB(F[0],F[1],F[2],i6),X.opacity=F[3]}if(G.baseColorTexture!==void 0)H.push($.assignTexture(X,"map",G.baseColorTexture,J6));if(X.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,X.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)H.push($.assignTexture(X,"metalnessMap",G.metallicRoughnessTexture)),H.push($.assignTexture(X,"roughnessMap",G.metallicRoughnessTexture));W=this._invokeOne(function(F){return F.getMaterialType&&F.getMaterialType(J)}),H.push(Promise.all(this._invokeAll(function(F){return F.extendMaterialParams&&F.extendMaterialParams(J,X)})))}if(K.doubleSided===!0)X.side=a9;let U=K.alphaMode||AY.OPAQUE;if(U===AY.BLEND)X.transparent=!0,X.depthWrite=!1;else if(X.transparent=!1,U===AY.MASK)X.alphaTest=K.alphaCutoff!==void 0?K.alphaCutoff:0.5;if(K.normalTexture!==void 0&&W!==g9){if(H.push($.assignTexture(X,"normalMap",K.normalTexture)),X.normalScale=new O0(1,1),K.normalTexture.scale!==void 0){let G=K.normalTexture.scale;X.normalScale.set(G,G)}}if(K.occlusionTexture!==void 0&&W!==g9){if(H.push($.assignTexture(X,"aoMap",K.occlusionTexture)),K.occlusionTexture.strength!==void 0)X.aoMapIntensity=K.occlusionTexture.strength}if(K.emissiveFactor!==void 0&&W!==g9){let G=K.emissiveFactor;X.emissive=new w0().setRGB(G[0],G[1],G[2],i6)}if(K.emissiveTexture!==void 0&&W!==g9)H.push($.assignTexture(X,"emissiveMap",K.emissiveTexture,J6));return Promise.all(H).then(function(){let G=new W(X);if(K.name)G.name=K.name;if(m8(G,K),$.associations.set(G,{materials:J}),K.extensions)kJ(Z,G,K);return G})}createUniqueName(J){let $=v9.sanitizeNodeName(J||"");if($ in this.nodeNamesUsed)return $+"_"+ ++this.nodeNamesUsed[$];else return this.nodeNamesUsed[$]=0,$}loadGeometries(J){let $=this,Q=this.extensions,Z=this.primitiveCache;function K(X){return Q[I9.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(X,$).then(function(Y){return VN(Y,X,$)})}let W=[];for(let X=0,Y=J.length;X<Y;X++){let H=J[X],U=sL(H),G=Z[U];if(G)W.push(G.promise);else{let F;if(H.extensions&&H.extensions[I9.KHR_DRACO_MESH_COMPRESSION])F=K(H);else F=VN(new b9,H,$);if(H.mode===U8.TRIANGLE_STRIP)F=F.then((N)=>HY(N,HQ));else if(H.mode===U8.TRIANGLE_FAN)F=F.then((N)=>HY(N,X$));Z[U]={primitive:H,promise:F},W.push(F)}}return Promise.all(W)}loadMesh(J){let $=this,Q=this.json,Z=this.extensions,K=Q.meshes[J],W=K.primitives,X=[];for(let Y=0,H=W.length;Y<H;Y++){let U=W[Y].material===void 0?dL(this.cache):this.getDependency("material",W[Y].material);X.push(U)}return X.push($.loadGeometries(W)),Promise.all(X).then(async function(Y){let H=Y.slice(0,Y.length-1),U=Y[Y.length-1],G=[];for(let N=0,q=U.length;N<q;N++){let O=U[N],B=W[N],R,E=H[N];if(B.mode===U8.TRIANGLES||B.mode===U8.TRIANGLE_STRIP||B.mode===U8.TRIANGLE_FAN||B.mode===void 0){let z=K.isSkinnedMesh===!0,M=O.hasAttribute("skinIndex")&&O.hasAttribute("skinWeight");if(z&&M===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(R=z&&M?new JK(O,E):new T0(O,E),R.isSkinnedMesh===!0)R.normalizeSkinWeights()}else if(B.mode===U8.LINES)R=new $K(O,E);else if(B.mode===U8.LINE_STRIP)R=new N$(O,E);else if(B.mode===U8.LINE_LOOP)R=new QK(O,E);else if(B.mode===U8.POINTS)R=new G$(O,E);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+B.mode);if(Object.keys(R.geometry.morphAttributes).length>0)nL(R,K);if(R.name=$.createUniqueName(K.name||"mesh_"+J),m8(R,K),B.extensions)kJ(Z,R,B);$.assignFinalMaterial(R),G.push(R)}for(let N=0,q=G.length;N<q;N++)$.associations.set(G[N],{meshes:J,primitives:N});if(G.length===1){if(K.extensions)kJ(Z,G[0],K);return G[0]}let F=new T9;if(K.extensions)kJ(Z,F,K);$.associations.set(F,{meshes:J});for(let N=0,q=G.length;N<q;N++)F.add(G[N]);return F})}loadCamera(J){let $,Q=this.json.cameras[J],Z=Q[Q.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(Q.type==="perspective")$=new G6(f8.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if(Q.type==="orthographic")$=new K7(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if(Q.name)$.name=this.createUniqueName(Q.name);return m8($,Q),Promise.resolve($)}loadSkin(J){let $=this.json.skins[J],Q=[];for(let Z=0,K=$.joints.length;Z<K;Z++)Q.push(this._loadNodeShallow($.joints[Z]));if($.inverseBindMatrices!==void 0)Q.push(this.getDependency("accessor",$.inverseBindMatrices));else Q.push(null);return Promise.all(Q).then(function(Z){let K=Z.pop(),W=Z,X=[],Y=[];for(let H=0,U=W.length;H<U;H++){let G=W[H];if(G){X.push(G);let F=new $9;if(K!==null)F.fromArray(K.array,H*16);Y.push(F)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',$.joints[H])}return new EQ(X,Y)})}loadAnimation(J){let $=this.json,Q=this,Z=$.animations[J],K=Z.name?Z.name:"animation_"+J,W=[],X=[],Y=[],H=[],U=[];for(let G=0,F=Z.channels.length;G<F;G++){let N=Z.channels[G],q=Z.samplers[N.sampler],O=N.target,B=O.node,R=Z.parameters!==void 0?Z.parameters[q.input]:q.input,E=Z.parameters!==void 0?Z.parameters[q.output]:q.output;if(O.node===void 0)continue;W.push(this.getDependency("node",B)),X.push(this.getDependency("accessor",R)),Y.push(this.getDependency("accessor",E)),H.push(q),U.push(O)}return Promise.all([Promise.all(W),Promise.all(X),Promise.all(Y),Promise.all(H),Promise.all(U)]).then(function(G){let F=G[0],N=G[1],q=G[2],O=G[3],B=G[4],R=[];for(let z=0,M=F.length;z<M;z++){let V=F[z],T=N[z],w=q[z],D=O[z],L=B[z];if(V===void 0)continue;if(V.updateMatrix)V.updateMatrix();let I=Q._createAnimationTracks(V,T,w,D,L);if(I)for(let i=0;i<I.length;i++)R.push(I[i])}let E=new eJ(K,void 0,R);return m8(E,Z),E})}createNodeMesh(J){let $=this.json,Q=this,Z=$.nodes[J];if(Z.mesh===void 0)return null;return Q.getDependency("mesh",Z.mesh).then(function(K){let W=Q._getNodeRef(Q.meshCache,Z.mesh,K);if(Z.weights!==void 0)W.traverse(function(X){if(!X.isMesh)return;for(let Y=0,H=Z.weights.length;Y<H;Y++)X.morphTargetInfluences[Y]=Z.weights[Y]});return W})}loadNode(J){let $=this.json,Q=this,Z=$.nodes[J],K=Q._loadNodeShallow(J),W=[],X=Z.children||[];for(let H=0,U=X.length;H<U;H++)W.push(Q.getDependency("node",X[H]));let Y=Z.skin===void 0?Promise.resolve(null):Q.getDependency("skin",Z.skin);return Promise.all([K,Promise.all(W),Y]).then(function(H){let U=H[0],G=H[1],F=H[2];if(F!==null)U.traverse(function(N){if(!N.isSkinnedMesh)return;N.bind(F,oL)});for(let N=0,q=G.length;N<q;N++)U.add(G[N]);if(U.userData.pivot!==void 0&&G.length>0){let N=U.userData.pivot,q=G[0];U.pivot=new S().fromArray(N),U.position.x-=N[0],U.position.y-=N[1],U.position.z-=N[2],q.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let $=this.json,Q=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let K=$.nodes[J],W=K.name?Z.createUniqueName(K.name):"",X=[],Y=Z._invokeOne(function(H){return H.createNodeMesh&&H.createNodeMesh(J)});if(Y)X.push(Y);if(K.camera!==void 0)X.push(Z.getDependency("camera",K.camera).then(function(H){return Z._getNodeRef(Z.cameraCache,K.camera,H)}));return Z._invokeAll(function(H){return H.createNodeAttachment&&H.createNodeAttachment(J)}).forEach(function(H){X.push(H)}),this.nodeCache[J]=Promise.all(X).then(function(H){let U;if(K.isBone===!0)U=new GQ;else if(H.length>1)U=new T9;else if(H.length===1)U=H[0];else U=new j9;if(U!==H[0])for(let G=0,F=H.length;G<F;G++)U.add(H[G]);if(K.name)U.userData.name=K.name,U.name=W;if(m8(U,K),K.extensions)kJ(Q,U,K);if(K.matrix!==void 0){let G=new $9;G.fromArray(K.matrix),U.applyMatrix4(G)}else{if(K.translation!==void 0)U.position.fromArray(K.translation);if(K.rotation!==void 0)U.quaternion.fromArray(K.rotation);if(K.scale!==void 0)U.scale.fromArray(K.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(K.mesh!==void 0&&Z.meshCache.refs[K.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let $=this.extensions,Q=this.json.scenes[J],Z=this,K=new T9;if(Q.name)K.name=Z.createUniqueName(Q.name);if(m8(K,Q),Q.extensions)kJ($,K,Q);let W=Q.nodes||[],X=[];for(let Y=0,H=W.length;Y<H;Y++)X.push(Z.getDependency("node",W[Y]));return Promise.all(X).then(function(Y){for(let U=0,G=Y.length;U<G;U++){let F=Y[U];if(F.parent!==null)K.add(FJ(F));else K.add(F)}let H=(U)=>{let G=new Map;for(let[F,N]of Z.associations)if(F instanceof g6||F instanceof W6)G.set(F,N);return U.traverse((F)=>{let N=Z.associations.get(F);if(N!=null)G.set(F,N)}),G};return Z.associations=H(K),K})}_createAnimationTracks(J,$,Q,Z,K){let W=[],X=J.name?J.name:J.uuid,Y=[];function H(N){if(N.morphTargetInfluences)Y.push(N.name?N.name:N.uuid)}if(_7[K.path]===_7.weights){if(H(J),J.isGroup)J.children.forEach(H)}else Y.push(X);let U;switch(_7[K.path]){case _7.weights:U=I7;break;case _7.rotation:U=P7;break;case _7.translation:case _7.scale:U=UJ;break;default:switch(Q.itemSize){case 1:U=I7;break;case 2:case 3:default:U=UJ;break}break}let G=Z.interpolation!==void 0?uL[Z.interpolation]:sZ,F=this._getArrayFromAccessor(Q);for(let N=0,q=Y.length;N<q;N++){let O=new U(Y[N]+"."+_7[K.path],$.array,F,G);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(O);W.push(O)}return W}_getArrayFromAccessor(J){let $=J.array;if(J.normalized){let Q=wY($.constructor),Z=new Float32Array($.length);for(let K=0,W=$.length;K<W;K++)Z[K]=$[K]*Q;$=Z}return $}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function(Q){return new(this instanceof P7?mN:yY)(this.times,this.values,this.getValueSize()/3,Q)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aL(J,$,Q){let Z=$.attributes,K=new S6;if(Z.POSITION!==void 0){let Y=Q.json.accessors[Z.POSITION],H=Y.min,U=Y.max;if(H!==void 0&&U!==void 0){if(K.set(new S(H[0],H[1],H[2]),new S(U[0],U[1],U[2])),Y.normalized){let G=wY(C$[Y.componentType]);K.min.multiplyScalar(G),K.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let W=$.targets;if(W!==void 0){let Y=new S,H=new S;for(let U=0,G=W.length;U<G;U++){let F=W[U];if(F.POSITION!==void 0){let N=Q.json.accessors[F.POSITION],q=N.min,O=N.max;if(q!==void 0&&O!==void 0){if(H.setX(Math.max(Math.abs(q[0]),Math.abs(O[0]))),H.setY(Math.max(Math.abs(q[1]),Math.abs(O[1]))),H.setZ(Math.max(Math.abs(q[2]),Math.abs(O[2]))),N.normalized){let B=wY(C$[N.componentType]);H.multiplyScalar(B)}Y.max(H)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}K.expandByVector(Y)}J.boundingBox=K;let X=new v6;K.getCenter(X.center),X.radius=K.min.distanceTo(K.max)/2,J.boundingSphere=X}function VN(J,$,Q){let Z=$.attributes,K=[];function W(X,Y){return Q.getDependency("accessor",X).then(function(H){J.setAttribute(Y,H)})}for(let X in Z){let Y=SY[X]||X.toLowerCase();if(Y in J.attributes)continue;K.push(W(Z[X],Y))}if($.indices!==void 0&&!J.index){let X=Q.getDependency("accessor",$.indices).then(function(Y){J.setIndex(Y)});K.push(X)}if(V9.workingColorSpace!==i6&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${V9.workingColorSpace}" not supported.`);return m8(J,$),aL(J,$,Q),Promise.all(K).then(function(){return $.targets!==void 0?cL(J,$.targets,Q):J})}var fY={carmen:{Caminar:{duracion:1.3667,paso:0.995,cadera:0.9398},Esperar:{duracion:2.5333,paso:0.0068,cadera:0.9398},Saludar:{duracion:4.1333,paso:0.0016,cadera:0.9398},Conversar:{duracion:5.2,paso:0.0189,cadera:0.9398},SentadoHabla:{duracion:2.9667,paso:0,cadera:0.9398}},chela:{Caminar:{duracion:1.3667,paso:0.9454,cadera:0.8981},Esperar:{duracion:2.5333,paso:0.0057,cadera:0.8981},Saludar:{duracion:4.1333,paso:0.0021,cadera:0.8981},Conversar:{duracion:5.2,paso:0.0335,cadera:0.8981},SentadoHabla:{duracion:2.9667,paso:0,cadera:0.8981}},colmadero:{Caminar:{duracion:1.3667,paso:1.0021,cadera:0.9489},Esperar:{duracion:2.5333,paso:0.0045,cadera:0.9489},Saludar:{duracion:4.1333,paso:0.0023,cadera:0.9489},Conversar:{duracion:5.2,paso:0.0211,cadera:0.9489},Dar:{duracion:2.0333,paso:0.0057,cadera:0.9489},Recoger:{duracion:0.8667,paso:0.0278,cadera:0.9489}},"luis-upright":{Caminar:{duracion:1.3667,paso:0.9576,cadera:0.9064},Esperar:{duracion:2.5333,paso:0.0068,cadera:0.9064},Saludar:{duracion:4.1333,paso:0.0027,cadera:0.9064},Conversar:{duracion:5.2,paso:0.0373,cadera:0.9064},SentadoHabla:{duracion:2.9667,paso:0,cadera:0.9064}},marisol:{Caminar:{duracion:1.3667,paso:0.9726,cadera:0.9197},Esperar:{duracion:2.5333,paso:0.0066,cadera:0.9197},Saludar:{duracion:4.1333,paso:0.0015,cadera:0.9197},Conversar:{duracion:5.2,paso:0.0117,cadera:0.9197},SentadoHabla:{duracion:2.9667,paso:0.0001,cadera:0.9197}},nando:{Caminar:{duracion:4.2333,paso:3.015,cadera:0.9658},Esperar:{duracion:2.5333,paso:0.0064,cadera:0.9658},Saludar:{duracion:4.1333,paso:0.0015,cadera:0.9658},Conversar:{duracion:5.2,paso:0.0148,cadera:0.9658},SentadoHabla:{duracion:2.9667,paso:0,cadera:0.9658},Sentado:{duracion:0.0667,paso:0,cadera:0.9658}},papo:{Caminar:{duracion:1.3667,paso:1.0477,cadera:0.97},Esperar:{duracion:2.5333,paso:0.0077,cadera:0.97},Saludar:{duracion:4.1333,paso:0.0026,cadera:0.97},Conversar:{duracion:5.2,paso:0.0285,cadera:0.97},SentadoHabla:{duracion:2.9667,paso:0,cadera:0.97},Sentado:{duracion:0.0667,paso:0,cadera:0.97}},"rafa-upright":{Caminar:{duracion:4.2333,paso:2.7635,cadera:0.8817},Esperar:{duracion:2.5333,paso:0.0053,cadera:0.8817},Saludar:{duracion:4.1333,paso:0.0021,cadera:0.8817},Conversar:{duracion:5.2,paso:0.0259,cadera:0.8817},SentadoHabla:{duracion:2.9667,paso:0,cadera:0.8817}},tata:{Caminar:{duracion:1.3667,paso:0.8709,cadera:0.7855},Esperar:{duracion:2.5333,paso:0.0083,cadera:0.7855},Saludar:{duracion:4.1333,paso:0.0015,cadera:0.7855},Conversar:{duracion:5.2,paso:0.0495,cadera:0.7855},SentadoHabla:{duracion:2.9667,paso:0.0005,cadera:0.7855}},yari:{Caminar:{duracion:1.3667,paso:1.0157,cadera:0.9658},Esperar:{duracion:2.5333,paso:0.0066,cadera:0.9658},Saludar:{duracion:4.1333,paso:0.0017,cadera:0.9658},Conversar:{duracion:5.2,paso:0.0187,cadera:0.9658},SentadoHabla:{duracion:2.9667,paso:0,cadera:0.9658}},yuni:{Caminar:{duracion:1.3667,paso:0.9767,cadera:0.9424},Esperar:{duracion:2.5333,paso:0.0055,cadera:0.9424},Saludar:{duracion:4.1333,paso:0.0039,cadera:0.9424},Conversar:{duracion:5.2,paso:0.0794,cadera:0.9424},SentadoHabla:{duracion:2.9667,paso:0,cadera:0.9424},Sentado:{duracion:0.0667,paso:0,cadera:0.9424}}};var I$=[{id:"rafa",nombre:"Don Rafa",modelo:"rafa-upright",sexo:"m",mayor:!0},{id:"marisol",nombre:"Marisol",modelo:"marisol",sexo:"f"},{id:"luis",nombre:"Luis",modelo:"luis-upright",sexo:"m"},{id:"carmen",nombre:"Carmen",modelo:"carmen",sexo:"f",mayor:!0},{id:"yuni",nombre:"Yuni",modelo:"yuni",sexo:"m"},{id:"tata",nombre:"Doña Tata",modelo:"tata",sexo:"f",mayor:!0},{id:"papo",nombre:"Papo",modelo:"papo",sexo:"m"},{id:"yari",nombre:"Yari",modelo:"yari",sexo:"f"},{id:"nando",nombre:"Nando",modelo:"nando",sexo:"m"},{id:"chela",nombre:"Chela",modelo:"chela",sexo:"f"}],xK={id:"colmadero",nombre:"Kiko",modelo:"colmadero",sexo:"m"},vY=["rafa","marisol","luis","carmen"],pQ=0.3,tL=new Map([...I$,xK].map((J)=>[J.id,J])),uN=(J)=>tL.get(J)||null,mQ=(J)=>!!(J&&fY[J.modelo]?.Caminar),dN=(J)=>fY[J?.modelo]||{};function bY(J){return Array.isArray(J)&&J.length===4&&new Set(J).size===4&&J.every(($)=>I$.some((Q)=>Q.id===$))?J:vY.slice()}var o9=(J=0,$=0,Q=0)=>new S(J,$,Q),mY=(J)=>J<=0?0:J>=1?1:J*J*(3-2*J),gK=(J,$,Q)=>mY((J-$+Q)/(2*Q)),Q6=(J,$)=>J+Math.random()*($-J),hY=(J)=>J[Math.floor(Math.random()*J.length)];function cN(J,$){if($>3.3)return-0.15*gK($,3.5,0.12)+0.31*gK($,8.7,0.12);return-0.15*gK(J,4.65,0.12)+0.16*gK(J,11.7,0.12)}var nN=new jY,pK=new Map;function nQ(J){if(!pK.has(J.modelo))pK.set(J.modelo,Promise.all([nN.loadAsync(`/models/${J.modelo}.glb`),nN.loadAsync(`/models/anim/${J.modelo}.glb`)]).then(([$,Q])=>{let Z={};for(let K of Q.animations){K.tracks=K.tracks.filter((X)=>X.name.endsWith(".quaternion")||X.name==="Hips.position"),Z[K.name]=K;let W=K.name!=="Caminar"&&K.tracks.find((X)=>X.name==="Hips.position");if(W){let X=W.values;for(let Y=3;Y<X.length;Y+=3)X[Y]=X[0],X[Y+2]=X[2]}}return{p:J,gltf:$,acciones:Z,datos:dN(J)}}).catch(($)=>{throw pK.delete(J.modelo),$}));return pK.get(J.modelo)}var lQ=o9(),lK=o9(),S7=o9(),uQ=o9(),sN=o9(),iN=o9(),uK=new K9,QG=new K9,oN=new K9,aN=new K9,dQ=new K9;function dK(J,$){J.matrixWorld.decompose(sN,oN,iN),J.parent.matrixWorld.decompose(sN,aN,iN),J.quaternion.copy(aN.invert()).multiply($).multiply(oN),J.updateMatrixWorld(!0)}function rN(J,$,Q,Z){lQ.setFromMatrixPosition(J.matrixWorld),lK.setFromMatrixPosition($.matrixWorld),S7.subVectors(lK,lQ).normalize(),dK(J,QG.identity().slerp(uK.setFromUnitVectors(S7,Q),Z))}function eL(J,$){let Q=J.h;if(!Q.Head||!Q.headfront||$<=0)return;for(let[Z,K]of[[Q.neck,0.45],[Q.Head,1]]){if(!Z)continue;lQ.setFromMatrixPosition(Q.Head.matrixWorld),lK.setFromMatrixPosition(Q.headfront.matrixWorld),S7.subVectors(lK,lQ).normalize(),uQ.subVectors(J.mirar,lQ).normalize();let W=S7.angleTo(uQ);if(W<0.001)continue;dK(Z,QG.identity().slerp(uK.setFromUnitVectors(S7,uQ),$*K*Math.min(W,1.1)/W))}}function JV(J,$){let Q=IK($),Z=J.h;if(!Q||!Z.Head)return;if(J.holder.getWorldQuaternion(dQ),S7.set(1,0,0).applyQuaternion(dQ),Z.neck)dK(Z.neck,uK.setFromAxisAngle(S7,-Q*0.35));dK(Z.Head,uK.setFromAxisAngle(S7,-Q*0.65))}var tN=new Set(["Saludar","Dar","Recoger"]),$V=0.6,QV=1;function ZV(J){let $=mY(J.alcanza),Q=J.alcanzaAlto||0,Z=J.h;if($<=0||!Z.RightArm)return;J.holder.getWorldQuaternion(dQ),rN(Z.RightArm,Z.RightForeArm,uQ.set(-0.16,-0.3+0.85*Q,0.9).normalize().applyQuaternion(dQ),$),rN(Z.RightForeArm,Z.RightHand,uQ.set(-0.06,-0.05+0.75*Q,1).normalize().applyQuaternion(dQ),$)}var w7=(...J)=>J.map(([$,Q])=>o9($,0,Q)),xY=w7([10,-0.25],[6.5,-0.3],[4.6,-0.4],[3.3,-0.62],[2.25,-1.1],[1.2,-1.8]),KV=w7([1.2,-1.8],[0.35,-2.15],[-0.6,-2.05],[-1.35,-1.65]),gY=w7([-1.35,-1.65],[-2.35,-1],[-2.65,0.2],[-4.5,0.95],[-9,1.15],[-17,1.2]),WV=z6.z+0.04-(z6.fondo+0.16)/2,ZG=z6.z+0.04+(z6.fondo+0.16)/2,mK=o9(-0.6,0,WV-0.19),cQ=o9(-0.6,0,ZG+0.42),eN=w7([1.2,-1.8],[0.45,-2.4],[-0.2,cQ.z+0.2],[cQ.x,cQ.z]),JG=w7([cQ.x,cQ.z],[-1,-2.62],[-1.28,-2.1],[-1.35,-1.65]),pY=(...J)=>J.reduce(($,Q)=>$.concat($.length?Q.slice(1):Q),[]),MJ=(J)=>J.slice().reverse(),$G={enfrente:()=>{let J=Q6(9.45,10.05),$=w7([-34,J],[-12,J+Q6(-0.1,0.1)],[12,J+Q6(-0.1,0.1)],[34,J]);return Math.random()<0.5?$:MJ($)},lateral:()=>{let J=Q6(12.15,12.45),$=w7([J,-36],[J,-10],[J,1.2],[J+1.2,2.25],[20,2.3],[36,2.4]);return Math.random()<0.5?$:MJ($)}};function KG({scene:J,camera:$,enMesa:Q=()=>[],pocos:Z=!1}){let K=[],W=new Map,X=new KJ,Y=new $9,H=new v6(o9(),1.3),U=null,G=0,F=0,N=Q6(8,16),q=Q6(20,35),O=-1e9,B=null,R=!1,E=!1,z=!1;function M(j){let a=FJ(j.gltf.scene),U0=new T9;U0.add(a);let b={},C=null;if(a.traverse((z0)=>{if(z0.isBone)b[z0.name]=z0;if(z0.isSkinnedMesh)C=z0}),!C||!b.Hips)return null;C.material=C.material.clone(),C.material.roughness=0.83,C.material.specularIntensity=0.25,C.material.emissiveIntensity=pQ,C.castShadow=!1,C.receiveShadow=!0,C.morphTargetInfluences?.fill(0),U0.updateMatrixWorld(!0),C.computeBoundingBox();let x=C.boundingBox.clone().applyMatrix4(C.matrixWorld),n=o9().setFromMatrixPosition(b.Hips.matrixWorld);a.position.set(-n.x,-x.min.y,-n.z),U0.updateMatrixWorld(!0),C.computeBoundingSphere(),C.boundingSphere.radius*=1.3;let K0=new NJ(a),$0={};for(let[z0,V0]of Object.entries(j.acciones))$0[z0]=K0.clipAction(V0);let D0=j.datos.Caminar,L0=D0?D0.paso/D0.duracion:1.1;return{t:j,p:j.p,root:a,holder:U0,h:b,malla:C,mixer:K0,acc:$0,actual:null,vClip:L0,marcha:0,t:0,alcanza:0,alcanzaAlto:0,mirar:o9(0,1.4,5),mira:0,yaw:0,dedos:bK(a),gesto:null}}function V(j,a,U0=0.4){if(j.actual===a)return;let b=j.acc[a]||j.acc.Esperar;if(!b)return;if(b.reset(),b.setEffectiveTimeScale(1),b.setEffectiveWeight(1),tN.has(a))b.setLoop(OX,1),b.clampWhenFinished=!0;b.fadeIn(U0).play();let C=j.actual&&j.acc[j.actual];if(C&&C!==b)C.fadeOut(U0);j.actual=a}function T(){let j=new Set(Q()),a=new Set(K.map((U0)=>U0.p.id));return I$.filter((U0)=>mQ(U0)&&!j.has(U0.id)&&!a.has(U0.id))}function w(){let j=T(),a=j.filter((b)=>W.has(b.modelo)),U0=j.filter((b)=>!W.has(b.modelo));if(U0.length&&!z){z=!0;let b=hY(U0);nQ(b).then((C)=>W.set(b.modelo,C)).catch((C)=>console.warn("Transeúnte sin cargar",b.id,C)).finally(()=>{z=!1})}return a.length?W.get(hY(a).modelo):null}function D(){let j=w();if(!j)return null;let a=M(j);if(!a)return null;return a.velocidad=a.vClip*(a.p.mayor?Q6(0.8,0.9):Q6(0.95,1.08)),J.add(a.holder),a}function L(j){J.remove(j.holder),j.mixer.stopAllAction();let a=K.indexOf(j);if(a>=0)K.splice(a,1)}function I(j){let a=new e8(j,!1,"centripetal",0.5);return{tipo:"ruta",curva:a,largo:a.getLength(),d:0}}function i(j,a,U0){j.guion=a,j.i=0,j.zona=U0,j.malla.castShadow=U0==="patio";let b=a[0].curva,C=b.getPointAt(0),x=b.getTangentAt(0);j.yaw=Math.atan2(x.x,x.z),j.holder.position.set(C.x,cN(C.x,C.z),C.z),j.holder.rotation.y=j.yaw,V(j,"Caminar",0),j.acc.Caminar?.setEffectiveTimeScale(j.velocidad/j.vClip),K.push(j)}let h=(j,a,U0,b=2.6)=>{let C=a-j.yaw;return C=Math.atan2(Math.sin(C),Math.cos(C)),j.yaw+=Math.max(-b*U0,Math.min(b*U0,C)),j.holder.rotation.y=j.yaw,Math.abs(C)};function d(j,a,U0){let b=j.guion[j.i];if(!b){if(!j.fijo){L(j);return}j.guion=j===U?p():[y()],j.i=0,b=j.guion[0],b.t0=j.t}if(j.t+=a,b.tipo==="ruta"){let C=j.guion[j.i+1],x=C&&C.tipo!=="ruta",n=b.largo-b.d,K0=x?Math.min(1,n/0.6):1;j.marcha+=(K0-j.marcha)*Math.min(1,a*(K0<j.marcha?5:2.2));let $0=j.velocidad*Math.max(j.marcha,x?0.15:0.25);b.d=Math.min(b.largo,b.d+$0*a),V(j,"Caminar",0.35),j.acc.Caminar?.setEffectiveTimeScale(Math.max(0.3,$0/j.vClip));let D0=b.d/b.largo,L0=b.curva.getPointAt(D0),z0=b.curva.getTangentAt(D0);if(j.holder.position.set(L0.x,cN(L0.x,L0.z),L0.z),h(j,Math.atan2(z0.x,z0.z),a),j.mira=Math.max(0,j.mira-a*2),b.d>=b.largo-0.001){if(j.i++,j.guion[j.i])j.guion[j.i].t0=j.t}}else if(b.tipo==="quieto"){j.marcha=0;let C=j.t-(b.t0??j.t);if(b.saludo)Q0(j,b,C,U0);if(!b.empezo){if(b.empezo=!0,tN.has(b.clip)&&j.actual===b.clip)j.actual=null}if(V(j,b.clip||"Esperar",b.saludo?0.3:0.45),b.saludo&&b.clip==="Saludar"){let n=j.acc.Saludar,K0=aU(C);if(n)n.paused=!0,n.time=$V*K0;if(bQ(j.dedos.Right,0.85*K0),j.gesto=C,C>=b.dur-0.05)j.gesto=null,bQ(j.dedos.Right,0)}if(b.yaw!=null)h(j,b.yaw,a,2);if(b.miraA?.h?.Head)b.mira=b.miraA.h.Head.getWorldPosition(b.mira||o9());else if(b.vigila)b.mira=v(b,U0);if(b.mira)j.mirar.lerp(b.mira,1-Math.exp(-a*3)),j.mira=Math.min(1,j.mira+a*2);else j.mira=Math.max(0,j.mira-a*2);if(b.atender&&!b.pedido){if(b.pedido=!0,U)r(U,j)}if(b.brazo){let n=Math.min(1,C/0.6,(b.dur-C)/0.6);j.alcanza=Math.max(0,n),j.alcanzaAlto=b.brazo.alto;let K0=b.brazo.entrega;if(K0&&K.includes(K0))K0.alcanza=j.alcanza,K0.alcanzaAlto=0.1}let x=b.recibe;if(x&&K.includes(x))x.alcanza=Math.max(0,1-Math.abs(C-QV)/0.55),x.alcanzaAlto=0.1;if(C>=b.dur){if(j.i++,j.guion[j.i])j.guion[j.i].t0=j.t;if(b.brazo){if(j.alcanza=0,b.brazo.entrega)b.brazo.entrega.alcanza=0}if(x)x.alcanza=0}}}function Q0(j,a,U0,b){if(!a.decidido){a.decidido=!0;let C=b?.view,x=C&&(C.phase==="lobby"||C.phase==="playing")&&(E||!b.habla?.size&&F>60&&F-O>240);if(E=!1,!x){a.dur=0;return}let n=[0,1,2,3].filter((D0)=>C.bots?.[D0]&&C.names?.[D0]),K0=n.length&&Math.random()<0.8?hY(n):null;a.seat=K0,O=F;let $0=K0==null?o9(0,1.2,0):b.cabezas?.[K0]?.clone()||o9(0,1.2,0);a.mira=$0.clone(),a.yaw=Math.atan2($0.x-j.holder.position.x,$0.z-j.holder.position.z),a.clip="Saludar"}if(a.dur===0)return;if(!a.dicho&&U0>0.5){a.dicho=!0;let C=j.h.Head.getWorldPosition(o9());B={seat:a.seat,p:C,t0:F,hasta:F+5},dispatchEvent(new CustomEvent("mesa:saludo",{detail:{seat:a.seat==null?null:b.asiento?.(a.seat)??a.seat,voz:j.p.sexo,pos:C.toArray()}}))}}function f(j){let a=M(j);if(!a)return;a.fijo=!0,a.zona="colmado",U=a,a.malla.castShadow=!0,a.holder.position.copy(mK),a.yaw=0,a.holder.rotation.y=0,a.mirar.set(0,0.8,0),a.guion=p(),a.i=0,a.guion[0].t0=0,V(a,"Esperar",0),J.add(a.holder)}function y(){return{tipo:"quieto",dur:1e9,yaw:0,vigila:!0}}function p(){let j=(x,n)=>({tipo:"quieto",dur:x,...n}),a=Math.PI,U0=o9(mK.x+Q6(-0.6,0.6),Q6(1.2,1.6),-4.8),b=Math.random(),C=j(Q6(6,14),{yaw:0,vigila:!0});if(b<0.4)return[C,j(0.9,{yaw:a,mira:U0}),j(2.1,{yaw:a,mira:U0,clip:"Dar"}),j(1,{yaw:a+Q6(-0.35,0.35),mira:U0}),j(2.1,{yaw:a,mira:U0,clip:"Dar"}),j(0.9,{yaw:0})];if(b<0.75)return[C,j(0.9,{yaw:a,mira:o9(U0.x,0.8,-4.8)}),j(1.3,{yaw:a,mira:o9(U0.x,0.8,-4.8),clip:"Recoger"}),j(0.9,{yaw:0}),j(2.1,{yaw:0,mira:o9(mK.x+Q6(-0.5,0.5),1.1,ZG),clip:"Dar"})];return[C,j(Q6(4,8),{yaw:Q6(-0.4,0.4),vigila:!0})]}function v(j,a){if(j.cambio&&F<j.cambio)return j.mira;j.cambio=F+Q6(3,6.5);let U0=a?.view,b=Math.random(),C=a?.cabezas,x=K.find((n)=>n.zona==="patio");if(x&&b<0.25)return x.h.Head.getWorldPosition(o9());if(U0?.phase==="playing"&&b<0.55&&C?.[U0.turn])return C[U0.turn].clone();if(b<0.8)return o9(Q6(-0.3,0.3),0.8,Q6(-0.3,0.3));return o9(Q6(-4,4),1.5,6)}function r(j,a){let U0=(x,n)=>({tipo:"quieto",dur:x,...n}),b=o9(mK.x+Q6(-0.5,0.5),1.4,-4.8),C=j.acc.Dar?U0(2.1,{yaw:0,miraA:a,clip:"Dar",recibe:a}):U0(2.4,{yaw:0,miraA:a,brazo:{alto:0.15,entrega:a}});j.guion=[U0(1.4,{yaw:0,miraA:a}),U0(0.9,{yaw:Math.PI,mira:b}),j.acc.Dar?U0(2.1,{yaw:Math.PI,mira:b,clip:"Dar"}):U0(2.2,{yaw:Math.PI,mira:b,brazo:{alto:1}}),U0(0.9,{yaw:0,miraA:a}),C,U0(4,{yaw:0,miraA:a,clip:"Conversar"})],j.i=0,j.guion[0].t0=j.t}function l(){let j=Math.random()<0.6,a=Math.random()<0.5,U0=[];if(U0.push(I(j?xY:MJ(gY))),a)U0.push({tipo:"quieto",dur:3.6,saludo:!0});if(U0.push(I(j?eN:MJ(JG))),U0.push({tipo:"quieto",dur:Q6(14,24),yaw:Math.PI,clip:"Conversar",...U?{miraA:U,atender:!0}:{mira:o9(-0.6,1.35,-4.6)}}),Math.random()<0.6)U0.push(I(pY(JG,gY)));else U0.push(I(pY(MJ(eN),MJ(xY))));return U0}function J0(j=!1){let a=Math.random()<0.3333333333333333?$G.lateral():$G.enfrente();if(!j&&!(F>60&&F-O>240&&Math.random()<0.5))return[I(a)];if(a.length===4)a.splice(2,0,o9(0,0,(a[1].z+a[2].z)/2));let U0=1,b=1e9;for(let C=1;C<a.length-1;C++){let x=a[C].x**2+a[C].z**2;if(x<b)b=x,U0=C}return[I(a.slice(0,U0+1)),{tipo:"quieto",dur:3.6,saludo:!0},I(a.slice(U0))]}function Y0(){let j=pY(xY,KV,gY);return[I(Math.random()<0.5?j:MJ(j))]}setTimeout(()=>{if(!R&&mQ(xK))nQ(xK).then((j)=>{if(!R)f(j)}).catch((j)=>console.warn("Sin colmadero",j))},4000);function I0(j,a){if(R)return;if(j*=window.mesaPrisa||1,F+=j,B){if(B.e=F-B.t0,F>B.hasta)B=null}let U0=document.documentElement.classList.contains("reduced");if(!U0&&!Z&&F>N){if(N=F+Q6(14,32),K.filter((C)=>C.zona==="calle").length<2){let C=D();if(C)i(C,J0(),"calle")}}if(!U0&&F>q&&!K.some((C)=>C.zona==="patio")){let C=D();if(C)q=F+Q6(50,110),i(C,Math.random()<0.65?l():Y0(),"patio");else q=F+3}$.updateMatrixWorld(),X.setFromProjectionMatrix(Y.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse));let b=performance.now();for(let C of U?[U,...K]:K.slice()){if(d(C,j,a),!C.fijo&&!K.includes(C))continue;if(C.mixer.update(j),H.center.copy(C.holder.position).y+=0.9,X.intersectsSphere(H)){if(C.holder.updateMatrixWorld(!0),eL(C,mY(C.mira)),C.gesto!=null)JV(C,C.gesto);ZV(C)}}G+=(performance.now()-b-G)*0.05}return window.mesaTranseunte=(j="cliente",a,U0)=>{let b=D();if(!b)return!1;if(j==="posa"||j==="posa-saluda"){let[x,n,K0=0]=U0,$0=j==="posa-saluda";if($0)E=!0;return i(b,[I(w7([x-Math.sin(K0)*0.3,n-Math.cos(K0)*0.3],[x,n])),...$0?[{tipo:"quieto",dur:3.6,saludo:!0}]:[],{tipo:"quieto",dur:1e4}],"patio"),!0}let C=j==="calle"||j==="calle-saluda"?J0(j==="calle-saluda"):j==="cruza"?Y0():l();if(j==="saluda"){if(!C.some((x)=>x.saludo))C.splice(1,0,{tipo:"quieto",dur:3.6,saludo:!0});E=!0}if(j==="calle-saluda")E=!0;return i(b,C,j.startsWith("calle")?"calle":"patio"),!0},window.mesaServir=()=>{let j=K[K.length-1];if(!U||!j)return!1;return r(U,j),!0},window.mesaKiko=()=>U&&{clip:U.actual,tramo:U.i},window.mesaAlturaManos=(j,a)=>{let U0=K[K.length-1];if(!U0)return null;let b=U0.acc[j];if(!b)return null;U0.mixer.stopAllAction(),b.reset().play(),b.paused=!0,b.time=a,b.setEffectiveWeight(1),U0.mixer.update(0),U0.holder.updateMatrixWorld(!0);let C=U0.holder.position.y;return{dur:b.getClip().duration,izq:+(U0.h.LeftHand.getWorldPosition(o9()).y-C).toFixed(3),der:+(U0.h.RightHand.getWorldPosition(o9()).y-C).toFixed(3),quien:U0.p.id}},window.mesaGente=()=>K.map((j)=>({quien:j.p.id,gesto:j.gesto==null?null:+j.gesto.toFixed(2),pos:j.holder.position.toArray().map((a)=>+a.toFixed(2)),clip:j.actual,marcha:+j.marcha.toFixed(2),tramo:j.i})),{update:I0,get saludo(){return B},get ms(){return G},andando:()=>K.map((j)=>j.p.id),dispose(){R=!0;for(let j of K.slice())L(j);if(U)J.remove(U.holder)}}}var CJ=Math.PI*2,Q9=(J=0,$=0,Q=0)=>new S(J,$,Q),XV=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function PM(J,{onProgress:$=()=>{},cast:Q=vY}={}){let Z=new Y$;Z.background=new w0("#2a2d4a"),Z.fog=new QJ("#5a5670",0.017);let K=new G6(42,innerWidth/innerHeight,0.08,90);K.position.set(3.1,2.65,4.2);let W;try{W=new KY({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let X=new URLSearchParams(location.search).has("hq"),Y=!X&&/SwiftShader|llvmpipe|Software/i.test((()=>{let k=W.getContext(),g=k.getExtension("WEBGL_debug_renderer_info");return g?k.getParameter(g.UNMASKED_RENDERER_WEBGL):""})());W.setSize(innerWidth,innerHeight),W.setPixelRatio(Y?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),W.outputColorSpace=J6,W.toneMapping=o7,W.toneMappingExposure=1.24,W.shadowMap.enabled=!Y,W.shadowMap.type=i7,W.info.autoReset=!1,J.appendChild(W.domElement);let H=new YY(K,W.domElement);H.target.set(0,0.8,-0.15),H.enableDamping=!0,H.dampingFactor=0.065,H.enablePan=!1,H.minDistance=0.8,H.maxDistance=4.6,H.minPolarAngle=0.25,H.maxPolarAngle=Math.PI*0.48,H.update();let U=0.5,G=new EK("#a3a8d8","#6a4e3c",U);Z.add(G);let F=new q$("#ffa06a",0.55);F.position.set(-6,2.6,-9),Z.add(F);let N=new E$("#ffc98a",5.2,7,Math.PI*0.32,0.6,2);N.position.set(0,C0.surfaceY+1.26,0),N.target.position.set(0,0,0);let q=new Z7("#ffc07a",0.45,3.2,2);q.position.set(0,C0.surfaceY+1.2,0),Z.add(q),N.castShadow=!0,N.shadow.mapSize.set(Y?1024:2048,Y?1024:2048),N.shadow.focus=0.52,N.shadow.bias=-0.0002,N.shadow.normalBias=0.004,N.shadow.radius=3,N.shadow.camera.near=0.2,N.shadow.camera.far=4,Z.add(N,N.target);let O=new Z7("#cfeee0",13,9,2);O.position.set(0,2.5,-3.5),Z.add(O);{let k=new T0(new h9(1.2,0.03,0.03),new n0({color:"#e6fff4",emissive:"#e6fff4",emissiveIntensity:4}));k.position.set(0,3.12,-3.6),Z.add(k)}let B=new Map,R=new Map;function E(k,g=0.85,e=0){let c=k+","+g+","+e;if(!B.has(c))B.set(c,new n0({color:k,roughness:g,metalness:e}));return B.get(c)}function z(k,g,e,c=[0,0,0],F0=[1,1,1]){let q0=g.uuid;if(!R.has(q0))R.set(q0,{material:g,geos:[]});let Z0=new $9().compose(Q9(...e),new K9().setFromEuler(new O8(...c)),Q9(...F0));k.applyMatrix4(Z0),R.get(q0).geos.push(k)}function M(k,g,e,c,F0,q0,Z0,P0=0){z(new h9(c,F0,q0),typeof Z0==="string"?E(Z0):Z0,[k,g,e],[0,P0,0])}function V(k,g,e,c,F0,q0,Z0,P0=10,l0=[0,0,0]){z(new _9(c,F0,q0,P0),typeof Z0==="string"?E(Z0):Z0,[k,g,e],l0)}function T(k,g=512,e=512){let c=document.createElement("canvas");c.width=g,c.height=e,k(c.getContext("2d"),g,e);let F0=new b6(c);return F0.colorSpace=J6,F0.anisotropy=Math.min(8,W.capabilities.getMaxAnisotropy()),F0}let w=191,D=()=>{return w=Math.imul(w,1664525)+1013904223>>>0,w/4294967296},L=T((k,g,e)=>{k.fillStyle="#65432b",k.fillRect(0,0,g,e);for(let c=0;c<700;c++){k.strokeStyle=`rgba(${D()>0.5?"170,122,70":"35,22,14"},${0.08+D()*0.2})`,k.lineWidth=0.3+D()*2,k.beginPath();let F0=D()*e;k.moveTo(0,F0);for(let q0=0;q0<g;q0+=20)k.lineTo(q0,F0+Math.sin(q0*0.013+c)*3);k.stroke()}}),I=new n0({map:L,roughness:0.65,color:"#e7bc8c"}),i=E("#4c3022",0.75),h=E("#287770"),d=E("#d2c5a2"),Q0=E("#3d938e"),f=T((k,g,e)=>{let c=g/2;for(let l0=0;l0<2;l0++)for(let N0=0;N0<2;N0++){let _0=N0*c,e0=l0*c;k.save(),k.beginPath(),k.rect(_0,e0,c,c),k.clip(),k.fillStyle="#c4b99f",k.fillRect(_0,e0,c,c);for(let[G9,Z6]of[[_0,e0],[_0+c,e0],[_0,e0+c],[_0+c,e0+c]])k.strokeStyle="#8d6450",k.lineWidth=c*0.04,k.beginPath(),k.arc(G9,Z6,c*0.42,0,Math.PI*2),k.stroke(),k.fillStyle="#4f6763",k.beginPath(),k.arc(G9,Z6,c*0.13,0,Math.PI*2),k.fill(),k.strokeStyle="#c4b99f",k.lineWidth=c*0.02,k.beginPath(),k.arc(G9,Z6,c*0.11,0,Math.PI*2),k.stroke();let O9=_0+c/2,E9=e0+c/2,w9=(G9,Z6)=>{k.fillStyle=Z6,k.beginPath(),k.moveTo(O9,E9-G9),k.lineTo(O9+G9,E9),k.lineTo(O9,E9+G9),k.lineTo(O9-G9,E9),k.closePath(),k.fill()};w9(c*0.2,"#8d6450"),w9(c*0.13,"#c4b99f"),w9(c*0.07,"#3a3630"),k.restore(),k.strokeStyle="#7e7563",k.lineWidth=3,k.strokeRect(_0+1.5,e0+1.5,c-3,c-3)}for(let l0=0;l0<9000;l0++)k.fillStyle=D()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",k.fillRect(D()*g,D()*e,1+D()*2,1+D()*2);for(let l0=0;l0<40;l0++){let N0=k.createRadialGradient(0,0,0,0,0,1),_0=D()*g,e0=D()*e,O9=20+D()*90;k.save(),k.translate(_0,e0),k.scale(O9,O9),N0.addColorStop(0,"rgba(40,34,26,.10)"),N0.addColorStop(1,"rgba(40,34,26,0)"),k.fillStyle=N0,k.fillRect(-1,-1,2,2),k.restore()}},1024,1024);f.wrapS=f.wrapT=D7,f.repeat.set(22.88888888888889,27.77777777777778),M(-5.7,-0.1,-4.575,20.6,0.2,15.85,new n0({map:f,roughness:0.86,color:"#9d937f"})),M(0,-0.2,8.5,40,0.1,10.3,"#2b3133"),M(0,-0.075,3.45,40,0.15,0.2,"#a8a391");for(let k=-10;k<11;k++)M(k*1.8,-0.146,6.3,0.7,0.008,0.06,"#b9ad83");M(0,1.6,-5.1,7.5,3.4,0.2,h),M(-3.8,1.6,-3.85,0.2,3.4,2.7,h),M(3.8,1.6,-3.85,0.2,3.4,2.7,h),M(-3.48,1.1,-2.52,0.7,2.3,0.32,h),M(3.45,1.1,-2.52,0.8,2.3,0.32,h),M(0,2.95,-2.52,7.5,0.42,0.35,Q0),M(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let k=0;k<30;k++)M(-4+k*0.276,3.15,-3.7,0.028,0.055,4.6,"#82928a");{let k=z6,g=k.tope-0.1;M(0,g/2,k.z,k.ancho,g,k.fondo,I),M(0,k.tope-0.05,k.z+0.04,k.ancho+0.18,0.1,k.fondo+0.16,I)}for(let k=0;k<3;k++)M(-0.6,1.58+k*0.48,-4.78,5.8,0.065,0.38,I),M(-0.6,1.84+k*0.48,-4.98,5.8,0.48,0.065,"#443e30");M(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),M(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");let y=[];for(let k=0;k<29;k++)y.push({pos:[-3.18+k*0.182,2.095,-4.69],scale:0.7+k%5*0.07,color:["#566641","#b0762a","#2e5a45","#7a3024","#c9b36a","#3b4f7a"][k*7%6]});let p=new b8([new O0(0,0),new O0(0.036,0),new O0(0.043,0.025),new O0(0.043,0.17),new O0(0.019,0.205),new O0(0.017,0.285),new O0(0.021,0.29),new O0(0.021,0.305),new O0(0,0.31)],12);y.forEach((k)=>z(p.clone(),E(k.color,0.3),k.pos,[0,0,0],[k.scale,k.scale,k.scale]));for(let[k,g,e]of[[-3.1,-1.9,"#a8483a"]])for(let c=0;c<3;c++){M(k,0.19+c*0.34,g,0.52,0.3,0.4,e);for(let F0=0;F0<5;F0++)M(k-0.2+F0*0.1,0.18+c*0.34,g+0.204,0.055,0.16,0.015,"#2c3025")}for(let k=0;k<5;k++){let g=-7-k*3.5;M(g,1.5,-3,3.1,3,3.2,["#d9a35c","#7fb1a4","#d8c7a2","#c98d7c","#a6bf8e"][k]),M(g,2.2,-1.38,1,0.8,0.045,"#b59961"),M(g,2.2,-1.35,0.045,0.86,0.055,"#273e37"),M(g,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let k=0;k<4;k++)V(-5-k*5,2.3,-1,0.08,0.09,4.6,"#665443"),M(-5-k*5,4.2,-1,1.8,0.09,0.09,"#514b3d");function v(k,g,e,c="#202d28"){let F0=new o6(Q9(...k),Q9(...e),Q9(...g));z(new p6(F0,20,0.008,4,!1),E(c),[0,0,0])}let r=[];for(let k of[-1.95,1.95])V(k,1.45,2.55,0.035,0.045,2.9,"#5b4a38",8);for(let[k,g,e]of[[[-2.7,2.9,-2.45],[-1.95,2.85,2.55],0.5],[[2.7,2.9,-2.45],[1.95,2.85,2.55],0.5],[[-1.95,2.85,2.55],[1.95,2.85,2.55],0.32]]){let c=Q9(...k),F0=Q9(...g),q0=c.clone().lerp(F0,0.5);q0.y-=e*2;let Z0=new o6(c,q0,F0);z(new p6(Z0,24,0.006,4,!1),E("#1c2320"),[0,0,0]);let P0=Math.round(c.distanceTo(F0)/0.42);for(let l0=1;l0<P0;l0++){let N0=Z0.getPointAt(l0/P0);r.push(N0.setY(N0.y-0.035))}}{let k=new B6(0.022,10,8);k.scale(1,1.3,1);let g=["#ffd89a","#ffc27a","#ffe3a8"],e=new v8(k,new g9({color:new w0(4.5,4.5,4.5)}),r.length),c=new j9;r.forEach((F0,q0)=>{c.position.copy(F0),c.updateMatrix(),e.setMatrixAt(q0,c.matrix),e.setColorAt(q0,new w0(g[q0%g.length]))}),Z.add(e)}v([0,3.22,-1.6],[0,3.19,0],[0,3.02,-0.8]);let l=new T9;l.position.set(4.3,0,-1.7),Z.add(l);let J0=new T0(new _9(0.1,0.15,4.5,9),E("#696047"));J0.position.y=2.25,l.add(J0);for(let k=0;k<9;k++){let g=new T0(new B6(1,10,5),E(k%2?"#4a654c":"#344e3d"));g.scale.set(0.27,0.075,1.5),g.position.set(Math.sin(k*CJ/9)*0.72,4.35,Math.cos(k*CJ/9)*0.72),g.rotation.set(0.23,k*CJ/9,0),l.add(g)}let Y0=new D6({map:L,color:"#d9a877",roughness:0.5,clearcoat:0.55,clearcoatRoughness:0.28}),I0=new T0(new P6(C0.tableWidth,C0.tableThickness,C0.tableWidth,3,0.035),Y0);I0.position.y=C0.tableCenterY,I0.castShadow=!0,I0.receiveShadow=!0,Z.add(I0);let j=T((k,g,e)=>{k.fillStyle="#2f5b47",k.fillRect(0,0,g,e);for(let F0=0;F0<e;F0+=2)for(let q0=0;q0<g;q0+=2){let Z0=(D()-0.5)*14,P0=((q0>>1)+(F0>>1))%2?4:-4;k.fillStyle=`rgb(${47+Z0+P0},${91+Z0+P0},${71+Z0+P0})`,k.fillRect(q0,F0,2,2)}for(let F0=0;F0<4;F0++){let q0=F0*Math.PI/2,Z0=g/2+Math.sin(q0)*g*0.36,P0=e/2+Math.cos(q0)*e*0.36,l0=k.createRadialGradient(Z0,P0,0,Z0,P0,g*0.2);l0.addColorStop(0,"rgba(120,150,120,.16)"),l0.addColorStop(1,"rgba(120,150,120,0)"),k.fillStyle=l0,k.fillRect(0,0,g,e)}let c=k.createRadialGradient(g/2,e/2,g*0.1,g/2,e/2,g*0.62);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(0,0,0,.28)"),k.fillStyle=c,k.fillRect(0,0,g,e)},512,512),a=new T0(new P6(C0.feltWidth,0.012,C0.feltWidth,2,0.02),new D6({map:j,roughness:0.97,sheen:0.8,sheenRoughness:0.55,sheenColor:new w0("#9fc7a8")}));a.position.y=C0.feltCenterY,a.receiveShadow=!0,Z.add(a);let U0=C0.tableWidth/2-0.07;for(let k of[-U0,U0])for(let g of[-U0,U0])M(k,0.35,g,0.075,0.68,0.075,i);let b=["#C8402F","#6FB7C9"],C=[],x=[];for(let k=0;k<4;k++){let[g,e,c]=k8[k],F0=C0.feltWidth/2-0.012,q0=new T0(new L9(C0.feltWidth*0.72,0.009),new n0({color:b[k%2],roughness:0.9}));q0.rotation.set(-Math.PI/2,0,c),q0.position.set(g*F0/C0.seatDistance,C0.surfaceY+0.0006,e*F0/C0.seatDistance),q0.receiveShadow=!0,Z.add(q0),C.push(q0)}let n=new n0({roughness:0.92,map:T((k,g,e)=>{k.fillStyle="#8f7446",k.fillRect(0,0,g,e);let c=12,F0=g/c;for(let q0=0;q0<c;q0++)for(let Z0=0;Z0<c;Z0++){let P0=(Z0+q0)%2===0;for(let l0=0;l0<3;l0++){let N0=150+D()*45|0;k.fillStyle=`rgb(${N0+30},${N0+8},${N0-45})`;let _0=l0*F0/3+F0*0.04,e0=F0/3-F0*0.08;if(P0)k.fillRect(Z0*F0+1,q0*F0+_0,F0-2,e0);else k.fillRect(Z0*F0+_0,q0*F0+1,e0,F0-2)}}k.fillStyle="rgba(40,28,14,.18)";for(let q0=0;q0<=c;q0++)k.fillRect(q0*F0-1,0,2,e),k.fillRect(0,q0*F0-1,g,2)},256,256)});for(let k=0;k<4;k++){let[g,e,c]=k8[k],F0=new T9;F0.position.set(g,0,e),F0.rotation.y=c,Z.add(F0);let q0=new n0({color:k%2?"#5e9fb2":"#b53f2e",roughness:0.62});x.push(q0);let Z0=(P0,l0,N0,_0,e0,O9,E9=q0,w9=0.008)=>{let G9=Q9(_0,e0,O9).applyAxisAngle(Q9(0,1,0),c).add(Q9(g,0,e));z(new P6(P0,l0,N0,2,w9),E9,G9.toArray(),[0,c,0])};Z0(C0.chairSeatWidth-0.04,0.035,0.5,0,C0.chairSeatY,0,n,0.01);for(let P0 of[-1,1])Z0(0.04,0.05,0.54,P0*(C0.chairSeatWidth/2-0.02),C0.chairSeatY-0.005,0);for(let P0 of[-1,1])Z0(C0.chairSeatWidth,0.05,0.04,0,C0.chairSeatY-0.005,P0*0.25);for(let P0 of[-0.24,0.24])for(let l0 of[-0.21,0.21])Z0(0.04,C0.chairSeatY,0.04,P0,C0.chairSeatY/2,l0);for(let P0 of[-0.24,0.24])Z0(0.024,0.024,0.42,P0,0.15,0);Z0(0.48,0.024,0.024,0,0.15,0.21);for(let P0 of[-0.24,0.24])Z0(0.04,0.52,0.04,P0,C0.chairSeatY+0.26,-0.23);for(let P0 of[0.2,0.33,0.46])Z0(0.46,P0===0.46?0.07:0.045,0.022,0,C0.chairSeatY+P0,-0.23)}function K0(k,g,e,c,F0,q0=60){let Z0=T((P0,l0,N0)=>{P0.fillStyle=c,P0.fillRect(0,0,l0,N0),P0.fillStyle=F0,P0.textAlign="center",P0.textBaseline="middle",P0.font=`bold ${q0}px Georgia`,P0.fillText(k,l0/2,N0/2)},1024,256);return new T0(new L9(g,e),new g9({map:Z0}))}let $0=K0("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);$0.position.set(0,2.94,-2.33),Z.add($0);let D0=K0("MESA",0.11,0.029,"#284e3e","#81906b",77);{let k=document.createElement("canvas");k.width=512,k.height=136;let g=new b6(k);g.colorSpace=J6;let e=()=>{let c=k.getContext("2d");c.clearRect(0,0,512,136),c.font=`96px ${document.fonts?.check?.("96px Shrikhand")?"Shrikhand":"Georgia"}`,c.textAlign="center",c.textBaseline="middle",c.fillStyle="rgba(170,205,170,.42)",c.fillText("Mesa",256,72),g.needsUpdate=!0};e(),document.fonts?.load?.("96px Shrikhand").then(e).catch(()=>{}),D0.material=new n0({map:g,transparent:!0,depthWrite:!1,roughness:1})}D0.rotation.x=-Math.PI/2,D0.position.set(0,C0.surfaceY+0.001,0.3),Z.add(D0);let L0=new T9;L0.position.set(-0.9,2.62,-3.45),L0.rotation.x=-Math.PI/2,Z.add(L0),V(-0.9,2.9,-3.45,0.015,0.015,0.56,"#777a68",8),V(-0.9,3.16,-3.45,0.075,0.075,0.025,"#767763",12);let z0=new T0(new B6(0.075,12,8),E("#41493d"));L0.add(z0);for(let k=0;k<5;k++){let g=new T0(new h9(0.13,0.5,0.025),E("#85856e",0.88,0.05));g.position.set(Math.sin(k*CJ/5)*0.285,Math.cos(k*CJ/5)*0.285,0),g.rotation.z=-k*CJ/5,L0.add(g)}let V0=new T9;V0.position.set(-12,0.05,5.2),Z.add(V0);for(let k of[-0.36,0.36]){let g=new T0(new D8(0.19,0.038,7,14),E("#182221"));g.position.set(k,0.2,0),V0.add(g)}let u0=new T0(new P6(0.65,0.17,0.2,2,0.04),E("#823e2f",0.45,0.25));u0.position.y=0.49,V0.add(u0);let X9=new T0(new h9(0.35,0.06,0.22),E("#202725"));X9.position.set(-0.08,0.61,0),V0.add(X9);let a0=new T0(new _9(0.015,0.015,0.45,6),E("#8c9c96",0.4,0.5));a0.position.set(0.32,0.59,0),a0.rotation.z=-0.3,V0.add(a0);let k9=XN({scene:Z,texture:T,mat:E,box:M,cylinder:V,random:D,teal:h,wood:I,storeSign:$0}),S9=YN({scene:Z,texture:T,mat:E,box:M,cylinder:V,staticGeo:z,random:D,renderer:W});HN({scene:Z,random:D});for(let{material:k,geos:g}of R.values()){let e=V$(g.some((c)=>!c.index)?g.map((c)=>c.index?c.toNonIndexed():c):g,!1);if(e){let c=new T0(e,k);c.receiveShadow=!0,e.computeBoundingBox(),c.castShadow=e.boundingBox.distanceToPoint(Q9(0,0.8,0))<1.6&&e.boundingBox.getSize(Q9()).length()<8,Z.add(c)}g.forEach((c)=>c.dispose())}let N9=new T9,m=new T9;Z.add(N9,m);let m9=new P6(C0.tileLength,C0.tileThickness,C0.tileWidth,3,0.0024),P9=new D6({color:"#ede5d2",roughness:0.5,clearcoat:0.3,clearcoatRoughness:0.4}),C9=new D6({color:"#e2dac6",roughness:0.42,clearcoat:0.7,clearcoatRoughness:0.3}),_=new n0({color:"#b98b3e",roughness:0.28,metalness:1}),P=new _9(0.0019,0.0019,0.0009,12),u=new n0({color:"#0b0a09",roughness:0.55}),W0=new n0({color:"#2a2622",roughness:0.6}),B0=new _9(C0.pipRadius,C0.pipRadius,0.0007,14),A0=new h9(0.0014,0.0005,C0.tileWidth*0.8),b0=new Set([m9,B0,A0,P]),G0=new Set([P9,C9,u,W0,_]),R0=[Y0,a.material,P9,C9].map((k)=>[k,{clearcoat:k.clearcoat,sheen:k.sheen}]);function h0(k,g,e=!1){let c=new T9,F0=new T0(m9,e?C9:P9);if(F0.castShadow=!0,F0.receiveShadow=!0,c.add(F0),!e){let q0=[];if([k,g].forEach((l0,N0)=>XV[l0].forEach((_0)=>q0.push(Q9((N0===0?-1:1)*C0.tileLength/4+(_0%3-1)*C0.pipColumnSpacing,C0.tileThickness/2+0.0005,(Math.floor(_0/3)-1)*C0.pipRowSpacing)))),q0.length){let l0=new v8(B0,u,q0.length),N0=new $9;q0.forEach((_0,e0)=>l0.setMatrixAt(e0,N0.makeTranslation(_0.x,_0.y,_0.z))),c.add(l0)}let Z0=new T0(A0,W0);Z0.position.y=C0.tileThickness/2+0.0002,c.add(Z0);let P0=new T0(P,_);P0.position.y=C0.tileThickness/2+0.0004,c.add(P0)}return c}function r0(k){return Q9(k.x,C0.surfaceY+C0.tileThickness/2+0.001,k.z)}let j0=new T0(new D8(0.2,0.006,5,38),new g9({color:"#e8bf70",transparent:!0,opacity:0.7}));j0.rotation.x=-Math.PI/2,j0.position.y=0.027,Z.add(j0);let k0=[],d0=[],J9=[],z9=0,o=4,y0=[],E0=new Set;J9.push(...UN(Z));let v0=Q9(),m0=Q9(),M0=Q9(),f0=Q9(),Y9=new $9,l9=Q9(),y9=Q9();function r6(k){let g=null;if(k.root.traverse((O9)=>{if(O9.isSkinnedMesh&&O9.morphTargetDictionary&&!g)g=O9}),!g||g.morphTargetDictionary.parpadeo==null)return;k.cara={mesh:g,iP:g.morphTargetDictionary.parpadeo,iS:g.morphTargetDictionary.sonrisa};let e=g.geometry.attributes.position,c=g.userData?.boca;if(c){let O9=1e9,E9=0;for(let w9=0;w9<e.count;w9++){let G9=(e.getX(w9)-c[0])**2+(e.getY(w9)-c[1])**2+(e.getZ(w9)-c[2])**2;if(G9<O9)O9=G9,E9=w9}k.bocaMundo=(w9)=>{return g.skeleton.update(),g.getVertexPosition(E9,w9).applyMatrix4(g.matrixWorld)}}let F0=g.userData?.ojos,q0=g.userData?.parpado;if(!F0||!q0)return;let Z0=g.geometry.attributes.position,P0=(O9)=>{let E9=1e9,w9=0;for(let G9=0;G9<Z0.count;G9++){let Z6=(Z0.getX(G9)-O9[0])**2+(Z0.getY(G9)-O9[1])**2+(Z0.getZ(G9)-O9[2])**2;if(Z6<E9)E9=Z6,w9=G9}return w9},l0=new L9(0.027,0.0125,8,4);l0.translate(0,-0.00625,0);let N0=l0.attributes.position,_0=[];for(let O9=0;O9<N0.count;O9++){let E9=N0.getX(O9)/0.0135,w9=-N0.getY(O9)/0.0125;N0.setZ(O9,0.0032*Math.cos(E9*Math.PI/2)*(0.5+0.5*w9));let G9=w9>0.85?0.45:1;_0.push(G9,G9,G9)}l0.setAttribute("color",new W9(_0,3)),l0.computeVertexNormals();let e0=new n0({color:new w0().setRGB(...q0,J6),roughness:0.7,vertexColors:!0});k.parpados=F0.map((O9)=>{let E9=new T0(l0,e0);return E9.visible=!1,E9.frustumCulled=!1,Z.add(E9),{m:E9,k:P0(O9)}})}function N8(k){let g=k.parpados;if(!g||!k.cara)return;let e=k.parpadeo||0;if(e<0.03){for(let Z0 of g)Z0.m.visible=!1;return}let c=k.cara.mesh;c.skeleton.update();let F0=c.getVertexPosition(g[0].k,v0).applyMatrix4(c.matrixWorld).clone(),q0=c.getVertexPosition(g[1].k,v0).applyMatrix4(c.matrixWorld).clone();if(k.head.getWorldPosition(l9),k.front.getWorldPosition(y9),f0.subVectors(y9,l9).normalize(),m0.subVectors(q0,F0).normalize(),M0.crossVectors(f0,m0).normalize(),M0.y<0)M0.negate();m0.crossVectors(M0,f0).normalize(),Y9.makeBasis(m0,M0,f0);for(let[Z0,P0]of[[g[0],F0],[g[1],q0]])Z0.m.visible=!0,Z0.m.quaternion.setFromRotationMatrix(Y9),Z0.m.position.copy(P0).addScaledVector(M0,0.0052).addScaledVector(f0,0.0024),Z0.m.scale.set(1,e,1)}let sQ=0.605,Y7=bY(Q),j7=0,y7=[];async function P$(k,g,e){let c=uN(g);try{if(e===0)$(`Seating ${c.nombre}…`,z9/o);let F0=await nQ(c);if(e!==j7||w$)return;let q0=F0.gltf,Z0=FJ(q0.scene),P0=new T9;P0.add(Z0);let l0=new NJ(Z0),N0=F0.acciones.Sentado||q0.animations.find((q9)=>q9.name==="Seated")||q0.animations[0];if(N0)l0.clipAction(N0).play();l0.setTime(C0.neutralPoseTime),Z0.updateMatrixWorld(!0),Z0.traverse((q9)=>{if(q9.isSkinnedMesh)q9.computeBoundingBox();if(q9.isMesh)q9.castShadow=!0,q9.receiveShadow=!0,q9.frustumCulled=!1,q9.material.roughness=0.83,q9.material.specularIntensity=0.25,q9.material.emissiveIntensity=pQ});let _0=new S6().setFromObject(Z0),e0=Z0.getObjectByName("Hips"),O9=e0?.getWorldPosition(Q9())||_0.getCenter(Q9());Z0.position.set(-O9.x,Math.max(-_0.min.y,sQ-O9.y),-O9.z);let[E9,w9,G9]=k8[k];P0.position.set(E9,0,w9),P0.rotation.y=G9;let Z6=k0[k];if(Z6){Z.remove(Z6.holder);for(let q9 of Z6.parpados||[])Z.remove(q9.m),q9.m.geometry.dispose(),q9.m.material.dispose()}Z.add(P0),k0[k]={id:g,clipHabla:F0.acciones.SentadoHabla||null,root:Z0,holder:P0,index:k,pose:DY(Z0),head:Z0.getObjectByName("Head"),neck:Z0.getObjectByName("neck"),front:Z0.getObjectByName("headfront"),chest:Z0.getObjectByName("Spine"),hips:e0,lomo:Z0.getObjectByName("Spine02"),muslos:[Z0.getObjectByName("LeftUpLeg"),Z0.getObjectByName("RightUpLeg")],hombros:[[1,Z0.getObjectByName("LeftShoulder")],[-1,Z0.getObjectByName("RightShoulder")]],spine:Z0.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map((q9)=>({lado:q9,hombro:Z0.getObjectByName(q9+"Shoulder"),brazo:Z0.getObjectByName(q9+"Arm"),antebrazo:Z0.getObjectByName(q9+"ForeArm"),mano:Z0.getObjectByName(q9+"Hand")}))},k0[k].bebida=J9.find((q9)=>q9.index===k),r6(k0[k]),E0.add(k);{let q9=4-y7.length,QZ=Math.min(q9,[...E0].filter((OG)=>!y7.includes(OG)).length);z9=QZ,$(QZ>=q9?"The table is ready.":`${QZ} of ${q9} seats ready`,QZ/q9)}}catch(F0){if(y0.push(g),console.error("Character load failed",g,F0),e===0)$(`Could not load ${c?.nombre||g}. Reload to retry.`,z9/o)}}let z$=Promise.all(Y7.map((k,g)=>P$(g,k,0)));function l8(k){let g=k0[k];if(!g)return;Z.remove(g.holder);for(let e of g.parpados||[])Z.remove(e.m),e.m.geometry.dispose(),e.m.material.dispose();k0[k]=null,E0.delete(k)}function f7(k,g=[]){if(k=bY(k),k.join()+"|"+g.join()===Y7.join()+"|"+y7.join())return;Y7=k,y7=g;let e=++j7;for(let c of d0.splice(0))Z.remove(c.holder);for(let c of g)l8(c);J9.forEach((c)=>{let F0=!g.includes(c.index);if(c.group.visible=F0,c.plato)c.plato.visible=F0}),Promise.all(k.map((c,F0)=>g.includes(F0)||k0[F0]?.id===c?null:P$(F0,c,e))).then(()=>{if(e===j7&&A)H9(A,!0)})}let A$=()=>Y7.filter((k,g)=>!y7.includes(g)),u6=null;z$.then(()=>{if(!w$){if(u6=KG({scene:Z,camera:K,pocos:Y,enMesa:()=>[...A$(),...d0.map((k)=>k.id)]}),A)H9(A,!0)}});let v7=null,IJ=null,b7="",PJ=null,k6=qN({scene:Z,renderer:W,camera:K,controls:H,software:Y,bulbLight:N});k6.calidad("high");let zJ=new Set,iQ=new Map,cK=[0,1,2,3].map(()=>Q9()),oQ=(k)=>{let g=k.detail||{},e=iY(g.seat);if(g.active)zJ.add(e),iQ.set(e,g.type);else zJ.delete(e)};window.addEventListener("mesa:botvoice",oQ);let h7=null,A=0,s="",H0=0,X0="attract",t=null,S0=[],c0=0,x0=0;function s0(k){while(k.children.length){let g=k.children.pop();g.parent=null,g.traverse((e)=>{if(e.isMesh&&!b0.has(e.geometry))e.geometry.dispose();if(e.isMesh&&!G0.has(e.material))e.material.dispose()})}}let o0=0;function H9(k,g=!1){if(k===A&&!g)return;A=k;let e=++o0,c=Math.min(3,k);while(d0.length>c)Z.remove(d0.pop().holder);if(!u6)return;let F0=new Set([...A$(),...d0.map((Z0)=>Z0.id),...u6.andando()]),q0=I$.filter((Z0)=>mQ(Z0)&&!F0.has(Z0.id)).slice(0,c-d0.length);for(let Z0 of q0)nQ(Z0).then((P0)=>{if(e!==o0||w$||d0.length>=c||d0.some((q9)=>q9.id===Z0.id)||u6.andando().includes(Z0.id))return;let l0=d0.length,N0=P0.gltf,_0=FJ(N0.scene),e0=new T9;e0.add(_0);let O9=new NJ(_0),E9=P0.acciones.Sentado||N0.animations.find((q9)=>q9.name==="Seated")||N0.animations[0];if(E9)O9.clipAction(E9).play();O9.setTime(C0.neutralPoseTime),_0.updateMatrixWorld(!0),_0.traverse((q9)=>{if(q9.isSkinnedMesh)q9.computeBoundingBox();if(q9.isMesh)q9.castShadow=!1,q9.frustumCulled=!1,q9.material.roughness=0.83,q9.material.specularIntensity=0.25,q9.material.emissiveIntensity=pQ});let w9=new S6().setFromObject(_0),G9=_0.getObjectByName("Hips")?.getWorldPosition(Q9())||w9.getCenter(Q9());_0.position.set(-G9.x,Math.max(-w9.min.y,sQ-G9.y),-G9.z),e0.position.set(-2.5+l0*1.66,0,-2.5),e0.rotation.y=0,Z.add(e0);let Z6=new T0(new h9(0.56,0.06,0.54),d);Z6.position.set(0,C0.chairSeatY,0),e0.add(Z6),d0.push({id:Z0.id,root:_0,holder:e0,pose:DY(_0),head:_0.getObjectByName("Head"),neck:_0.getObjectByName("neck"),front:_0.getObjectByName("headfront"),chest:_0.getObjectByName("Spine"),spine:_0.getObjectByName("Spine01"),index:l0+4})}).catch((P0)=>console.warn("Mirón sin cargar",Z0.id,P0))}let B9=!1,i0=Q9();function f9(){let k=K.position,g=H.target;if(i0.subVectors(k,g),i0.length()>4.6)k.copy(g).addScaledVector(i0.normalize(),4.6);k.z=Math.max(k.z,-2.1),k.x=f8.clamp(k.x,-4.9,4.9),k.y=f8.clamp(k.y,0.35,5.2)}let r9=-1,M9=null,x9=H.minDistance,U6="table",p0=!1;function M6(k,g,e){if(document.documentElement.classList.contains("reduced"))return;let c=Q9(1,0,1).normalize(),F0=-9;for(let[Z0,P0]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let l0=Q9(Z0,0,P0).normalize(),N0=l0.x*k.x+l0.z*k.z;if(N0>F0)F0=N0,c=l0}let q0=k.clone().addScaledVector(c,0.3);if(q0.x=f8.clamp(q0.x,-0.4,0.4),q0.z=f8.clamp(q0.z,-0.4,0.4),q0.y=C0.surfaceY+(e?0.12:0.19),!M9)x9=H.minDistance;H.minDistance=0.1,p0=!0,M9={pos:M9?.pos||K.position.clone(),target:M9?.target||H.target.clone(),at:d6.elapsedTime+3.4},t={from:K.position.clone(),to:q0,fromTarget:H.target.clone(),toTarget:k.clone().setY(k.y+0.01),t:0,dur:0.45}}function A9(k="table"){if(U6=k,p0=!1,H.minDistance=k==="seat"||k==="close"?0.3:0.7,H.minPolarAngle=k==="overhead"?0.01:0.25,K.aspect<0.95&&k==="table")k="overhead";let g,e=Q9(0,0.8,0);if(k==="attract")g=Q9(0.75,1.3,4.4),e=Q9(-1,1.4,-1.2);else if(k==="overhead")g=Q9(0.001,1.86,0.34),e=Q9(0,C0.surfaceY,0.02);else if(k==="seat")g=Q9(0,1.36,0.74),e=Q9(0,0.82,-0.12);else if(k==="close")g=Q9(0.62,1.3,1),e=Q9(-0.03,0.85,-0.08);else g=Q9(0.8,1.89,1.24),e=Q9(0,0.9,-0.2);if(k!=="attract"&&k!=="seat"&&K.aspect<1.3){let c=Math.min(2.4,Math.pow(1.6/K.aspect,0.8));g=e.clone().add(g.clone().sub(e).multiplyScalar(c))}if(k0[0])k0[0].root.visible=k!=="seat";M9=null,H.minDistance=Math.min(H.minDistance,x9),t={from:K.position.clone(),to:g,fromTarget:H.target.clone(),toTarget:e,t:0}}let N6=Q9(0,1,0),t6=new K9().setFromAxisAngle(Q9(1,0,0),0.12),A8=new K9().setFromAxisAngle(N6,Math.PI/2),H7=new K9().setFromAxisAngle(Q9(0,0,1),Math.PI/2),p9=C0.tableCenterY+C0.tableThickness/2+C0.tileLength/2*Math.cos(0.12)+C0.tileThickness/2*Math.sin(0.12)+0.001;function i9(k,g,e){let c=k8[k][2];return e.quaternion.setFromAxisAngle(N6,c).multiply(t6).multiply(A8).multiply(H7),e.position.set(g,p9,-C0.rackRadius).applyAxisAngle(N6,c),e}let C6=new v8(m9,C9,28);C6.count=0,C6.castShadow=!0,C6.receiveShadow=!0,C6.frustumCulled=!1,m.add(C6);let u9=[[],[],[],[]],O6=new j9,T8=[0,0,0,0],AJ="",nK=new Set;function WG(k){let g=0;for(let e=0;e<4;e++){let c=nK.has(e)?0:Math.max(0,T8[e]-TJ[e]),F0=u9[e];while(F0.length<c)F0.push((F0.length-(c-1)/2)*C0.rackSpacing);F0.length=c;for(let q0=0;q0<c;q0++){let Z0=(q0-(c-1)/2)*C0.rackSpacing;F0[q0]+=(Z0-F0[q0])*(1-Math.exp(-k*10)),i9(e,F0[q0],O6),O6.updateMatrix(),C6.setMatrixAt(g++,O6.matrix)}}C6.count=g,C6.instanceMatrix.needsUpdate=!0}let T$=new T9;Z.add(T$);let u8=new T9;Z.add(u8);let TJ=[0,0,0,0],aQ=new Set,lY=()=>{s0(u8),aQ.clear(),TJ.fill(0)},uY=(k)=>Q9(0.322+k%2*0.056,C0.surfaceY+C0.tileThickness/2+0.0003,-0.093+Math.floor(k/2)*0.031);function XG(k){let g=k?.phase&&k.phase!=="lobby"?Math.max(0,k.restantes??0):0,e=u8.children.filter((Z0)=>!aQ.has(Z0)),c=e.length;if(!g){if(u8.children.length&&!S0.some((Z0)=>Z0.reparto&&!Z0.alFinal&&u8.children.includes(Z0.obj)))lY();return}if(g>c){if(S0.some((Z0)=>Z0.reparto))return;for(let Z0=c;Z0<g;Z0++){let P0=h0(0,0,!0);P0.position.copy(uY(Z0)),u8.add(P0)}return}if(g===c)return;let F0=[];for(let Z0=k.moves.length-1;Z0>=0&&F0.length<c-g&&k.moves[Z0].type==="draw";Z0--)F0.unshift(k.moves[Z0].seat);let q0=0;for(let Z0 of F0){let P0=e[e.length-1-q0],l0=T8[Z0]??0;if(!P0)break;aQ.add(P0);let N0=i9(Z0,(l0-TJ[Z0]-1-(l0-1)/2)*C0.rackSpacing,new j9);TJ[Z0]++;let _0={obj:P0,from:P0.position.clone(),to:N0.position.clone(),qFrom:P0.quaternion.clone(),qTo:N0.quaternion.clone(),elapsed:-q0*0.18,duration:0.6,reparto:!0,alFinal:()=>{u8.remove(P0),aQ.delete(P0),TJ[Z0]=Math.max(0,TJ[Z0]-1),dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{}}))}};S0.push(_0),q0++}for(let Z0=0;Z0<c-q0-g;Z0++)u8.remove(e[Z0])}let sK=new Map,dY="",cY="",nY=(()=>{let k=7,g=()=>(k=k*16807%2147483647)/2147483647,e=[],c=0.2;for(let F0=0;F0<28;F0++){let q0=!1;for(let Z0=0;Z0<600&&!q0;Z0++){let P0=g()*Math.PI*2,l0=Math.sqrt(g())*c,N0=Math.cos(P0)*l0,_0=Math.sin(P0)*l0*0.82;if(e.every((e0)=>Math.hypot(e0.x-N0,e0.z-_0)>=0.058))e.push({x:N0,z:_0,ry:g()*Math.PI}),q0=!0}if(!q0)c+=0.012,F0--}return e})(),sY=C0.surfaceY+C0.tileThickness/2+0.0003;function YG(){for(let k=0;k<28;k++){let g=h0(0,0,!0),e=nY[k];g.position.set(e.x,sY,e.z),g.rotation.y=e.ry,N9.add(g)}}let x7=(k)=>k*k*(3-2*k),HG=new K9().setFromAxisAngle(Q9(1,0,0),Math.PI),UG=new K9().setFromAxisAngle(N6,-Math.PI/2);function NG(k,g){k.revealed.forEach((e,c)=>{let F0=e.length,q0=k8[c][2];e.forEach((Z0,P0)=>{let l0=(P0-(F0-1)/2)*C0.rackSpacing,N0=h0(Z0.a,Z0.b);i9(c,l0,O6);let _0=O6.quaternion.clone().multiply(HG),e0=O6.position.clone(),O9=Q9(l0,C0.surfaceY+C0.tileThickness/2+0.001,-C0.rackRadius+0.047).applyAxisAngle(N6,q0),E9=new K9().setFromAxisAngle(N6,q0).multiply(UG);N0.position.copy(e0),N0.quaternion.copy(_0),N0.visible=!1,N9.add(N0),S0.push({obj:N0,from:e0,to:O9,qFrom:_0,qTo:E9,elapsed:-(g+c*0.3+P0*0.055),duration:0.42,revela:c,ultima:P0===F0-1})})})}let rQ=[0,2],g7=4;function iY(k){return g7===2&&Number.isInteger(k)&&k>=0?rQ[k]??k:k}function GG(k){if(!k||k.names?.length!==2)return k;let g=(c,F0)=>{if(!Array.isArray(c))return c;let q0=[F0,F0,F0,F0];return c.forEach((Z0,P0)=>{q0[rQ[P0]]=Z0}),q0},e=(c)=>Number.isInteger(c)&&c>=0?rQ[c]:c;return{...k,names:g(k.names,""),bots:g(k.bots,!0),counts:g(k.counts,0),turn:e(k.turn),opener:e(k.opener),seat:e(k.seat),event:k.event?{...k.event,seat:e(k.event.seat)}:k.event,result:k.result?{...k.result,seat:e(k.result.seat),pips:g(k.result.pips,0)}:k.result,chain:k.chain?.map((c)=>({...c,seat:e(c.seat)})),moves:k.moves?.map((c)=>({...c,seat:e(c.seat)})),revealed:g(k.revealed,[]),restantes:28-(k.chain?.length||0)-k.counts.reduce((c,F0)=>c+F0,0)}}function FG(k){if(k===g7)return;g7=k,x[2].color.set(k===2?"#5e9fb2":"#b53f2e"),C[2].material.color.set(b[k===2?1:0]);for(let g of[1,3])C[g].visible=k!==2}function oY(k,g=0){if(k)FG(k.names?.length===2?2:4);k=GG(k),h7=k;{let q0=k&&(k.phase==="handEnd"||k.phase==="seriesEnd")&&k.result,Z0=q0?k.handNo+":"+k.phase:"";if(Z0&&Z0!==b7)IJ={t:d6.elapsedTime+0.5,team:k.result.team??null};if(!q0)IJ=null;b7=Z0}if(A!==g)H9(g);if(k?.cast)g7===2?f7([k.cast[0],k.cast[2],k.cast[1],k.cast[3]],[1,3]):f7(k.cast);let e=!k||k.phase==="lobby"?"pila":"mano"+k.handNo;if(e!==dY){if(dY=e,p0)A9(U6);s0(N9),sK.clear(),S0=S0.filter((q0)=>q0.reparto);for(let q0 of k0)if(q0)q0.jugada=null;if(e==="pila")YG()}if(k&&k.chain?.length){let q0=nU(k.chain,k.moves),Z0=k.event,P0=["domino","capicua","tranque"].includes(Z0?.type),l0=k.moves[k.moves.length-1],N0=Z0?.type==="domino"||Z0?.type==="capicua",_0=Z0?.type==="play"?Z0.tile:P0&&l0?.type==="play"?l0.tile:null;k.chain.forEach((e0,O9)=>{if(sK.has(e0.id))return;let E9=h0(e0.x,e0.y),w9=r0(q0[O9]);if(E9.position.copy(w9),E9.rotation.y=q0[O9].yaw,E9.updateMatrix(),N9.add(E9),sK.set(e0.id,E9),e0.id!==_0||e0.seat==null)return;i9(e0.seat,0,O6);let G9={obj:E9,from:O6.position.clone(),to:w9.clone(),qFrom:O6.quaternion.clone(),qTo:E9.quaternion.clone(),elapsed:0,duration:N0?0.7:0.55,golpe:N0};if(E9.position.copy(G9.from),E9.quaternion.copy(G9.qFrom),S0.push(G9),P0)M6(w9,e0.seat,N0);c0=performance.now();let Z6=k0[e0.seat];if(v7={p:w9.clone(),t:d6.elapsedTime+G9.duration},Z6)Z6.reaction={time:d6.elapsedTime},Z6.jugada={t0:d6.elapsedTime,obj:E9,anim:G9,hasta:w9.clone()}})}if(k?.phase==="playing"&&k.handNo!==H0&&k.moves.length===0){H0=k.handNo,s0(T$),S0=S0.filter((Z0)=>!Z0.reparto),x0=performance.now()+3300;for(let Z0=0;Z0<4;Z0++)u9[Z0]=Array.from({length:7},(P0,l0)=>(l0-3)*C0.rackSpacing);lY();let q0=g7===2;for(let Z0=0;Z0<28;Z0++){let P0=h0(0,0,!0),l0=nY[Z0],N0=Q9(l0.x,sY,l0.z),_0=q0&&Z0>=14;P0.position.copy(N0),P0.rotation.y=l0.ry,(_0?u8:T$).add(P0);let e0=_0?{position:uY(Z0-14),quaternion:new K9}:q0?i9(rQ[Z0%2],(Math.floor(Z0/2)-3)*C0.rackSpacing,new j9):i9(Z0%4,(Math.floor(Z0/4)-3)*C0.rackSpacing,new j9);S0.push({obj:P0,from:N0,to:e0.position.clone(),qFrom:P0.quaternion.clone(),qTo:e0.quaternion.clone(),elapsed:-(_0?14+(Z0-14)*0.35:Z0)*0.065,duration:1.1,reparto:!0})}}let c=k?.moves?.[k.moves.length-1],F0=k?k.handNo+":"+k.moves.length:"";if(c?.type==="pass"&&cY!==F0){cY=F0;let q0=k0[c.seat];if(q0)q0.toque={t0:d6.elapsedTime}}{let q0=k&&(k.phase==="handEnd"||k.phase==="seriesEnd")&&k.revealed,Z0=q0?"r"+k.handNo:"";if(!q0)AJ="",nK.clear();else if(Z0!==AJ){AJ=Z0;let P0=k.result?.type;NG(k,P0==="domino"||P0==="capicua"?3.4:P0==="tranque"?2.5:1.2)}}T8=[0,1,2,3].map((q0)=>!k||k.phase==="lobby"?0:k.counts[q0]??0),XG(k),j0.visible=!1,PJ=k?.phase==="playing"&&k.chain?.length?sU(k.chain,k.moves):null}let d6=new LK,_$=0,iK=0,tQ=0,S$=60,w$=!1,eQ=!1,j$=null,_J="high",aY=null,JZ=performance.now(),$Z=0,rY=!1,EG=new URLSearchParams(location.search).has("debug"),tY=N.intensity,p7=Q9(),qG=Q9(0,C0.surfaceY,0);function oK(){if(w$||eQ){j$=null;return}j$=requestAnimationFrame(oK);let k=d6.getDelta(),g=Math.min(k,0.06),e=aY??d6.elapsedTime,c=performance.now();if(iK++,tQ+=k,tQ>1){if(S$=iK/tQ,iK=0,tQ=0,!X&&!$Z&&_J==="high"&&c-JZ>9000&&c-JZ<30000&&S$<30)$Z=c,aK.quality("low"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"low"}));else if(!X&&_J==="low"&&!rY&&c-($Z||JZ)>9000&&c-($Z||JZ)<40000&&S$<20)rY=!0,aK.quality("min"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"min"}))}_$++,W.info.reset();let F0=document.documentElement.classList.contains("reduced");if(M9&&d6.elapsedTime>M9.at)t={from:K.position.clone(),to:M9.pos,fromTarget:H.target.clone(),toTarget:M9.target,t:0,dur:1.2},M9=null,p0=!1,H.minDistance=x9;let q0=0;if(r9>=0){let N0=d6.elapsedTime-r9;if(N0<0.5){let _0=0.0045*Math.exp(-N0*8)*Math.sin(N0*CJ*18);N9.position.y=_0,m.position.y=_0,q0=F0?0:0.004*Math.exp(-N0*9),N.intensity=tY*(1+0.35*Math.exp(-N0*14))}else r9=-1,N9.position.y=0,m.position.y=0,N.intensity=tY}if(t){t.t=Math.min(1,t.t+g/(t.dur||1.1));let N0=x7(t.t);if(K.position.lerpVectors(t.from,t.to,N0),H.target.lerpVectors(t.fromTarget,t.toTarget,N0),t.t===1)t=null}if(!F0)L0.rotation.z=e*3.5,l.rotation.z=Math.sin(e*0.47)*0.009,k9.update(e),S9.update(e);let Z0=h7,P0={dt:g,jugando:Z0?.phase==="playing",turno:Z0?.turn,habla:zJ,hablaTipo:iQ,foco:v7,fin:IJ,equipos:g7===2?[0,null,1,null]:[0,1,0,1],cabezas:k0.map((N0,_0)=>N0?.head?N0.head.getWorldPosition(cK[_0]):null)};if(u6)u6.update(g,{view:Z0,habla:zJ,cabezas:P0.cabezas,asiento:(N0)=>g7===2?N0===0?0:N0===2?1:null:N0}),P0.saludo=u6.saludo;for(let N0 of k0){if(!N0)continue;vK(N0,e,F0,P0),N8(N0)}for(let N0=0;N0<d0.length;N0++)if((_$+N0)%2===0)vK(d0[N0],e,F0,P0);S0=S0.filter((N0)=>{if(N0.elapsed+=g,N0.elapsed<0)return!0;let _0=Math.min(1,N0.elapsed/N0.duration);if(_0>=1&&N0.alFinal){let e0=N0.alFinal;N0.alFinal=null,e0()}if(N0.revela!=null){N0.obj.visible=!0,nK.add(N0.revela);let e0=x7(_0);if(N0.obj.quaternion.slerpQuaternions(N0.qFrom,N0.qTo,e0),N0.obj.position.lerpVectors(N0.from,N0.to,e0),N0.obj.position.y+=Math.sin(_0*Math.PI)*0.012,_0>=1&&N0.ultima)dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{revela:!0}}));return _0<1}if(N0.reparto)return N0.obj.position.lerpVectors(N0.from,N0.to,x7(_0)),N0.obj.position.y+=Math.sin(_0*Math.PI)*0.035,N0.obj.quaternion.slerpQuaternions(N0.qFrom,N0.qTo,x7(Math.min(1,Math.max(0,(_0-0.3)/0.7)))),_0<1;if(N0.obj.quaternion.slerpQuaternions(N0.qFrom,N0.qTo,x7(Math.min(1,_0/0.4))),N0.golpe){let e0=Math.min(1,_0/0.62);N0.obj.position.lerpVectors(N0.from,N0.to,x7(e0)),N0.obj.position.y+=_0<0.62?Math.sin(e0*Math.PI/2)*0.17:0.17*(1-((_0-0.62)/0.38)**2)}else N0.obj.position.lerpVectors(N0.from,N0.to,x7(_0)),N0.obj.position.y+=Math.sin(_0*Math.PI)*0.07;if(_0>=1&&!N0.sono){if(N0.sono=!0,N0.golpe)r9=d6.elapsedTime;dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{golpe:!!N0.golpe}}))}return _0<1});let l0=c<x0;if(m.visible=!l0,!l0&&T$.children.length)s0(T$);if(WG(g),H.update(),!t&&!M9&&!B9)f9();if(k6.frame(e,g,{reduced:F0,view:Z0,ends:PJ,temblor:q0}),k6.render(),_$%2===0)for(let N0 of document.querySelectorAll("[data-seatlabel]")){let _0=iY(Number(N0.dataset.seatlabel)),[e0,O9]=k8[_0],E9=k0[_0]?.head,w9=E9&&E9.getWorldPosition(p7).distanceTo(k6.vista.position)<qG.distanceTo(k6.vista.position)-0.2;if(w9)p7.y-=0.3;else if(E9)p7.y+=0.23;else p7.set(e0,1.45,O9);let G9=p7.project(k6.vista),Z6=!1;if(!w9&&G9.y>0.8&&E9)E9.getWorldPosition(p7).y-=0.1,G9=p7.project(k6.vista),Z6=!0;let q9=Math.min(G9.y,0.8);N0.style.transform=`translate(${(G9.x*0.5+0.5)*innerWidth}px,${(-q9*0.5+0.5)*innerHeight}px) translate(-50%,${w9?"-50%":Z6?"0":"-100%"})`,N0.style.visibility=G9.z>1||Math.abs(G9.x)>1.1||G9.y<-1.15?"hidden":"visible"}if(_$%30===0||_$===1){if(window.mesaDiagnostics={cam:K.position.toArray().map((N0)=>+N0.toFixed(2)),fps:Math.round(S$),drawCalls:W.info.render.calls,triangles:W.info.render.triangles,characters:z9,crowd:A,gente:u6?+u6.ms.toFixed(2):null,visibleCrowd:d0.length,boardTiles:h7?.chain.length||0,quality:_J,modelErrors:y0},EG){window.mesaRigDebug=k0.filter(Boolean).map((_0)=>({index:_0.index,head:_0.head?.getWorldPosition(Q9()).toArray(),hip:_0.hips?.getWorldPosition(Q9()).toArray(),rootScale:_0.root.scale.toArray()}));let N0=document.querySelector("#perf");if(N0)N0.textContent=`${Math.round(S$)} fps · ${W.info.render.calls} draws`}}}window.mesaCamara=(k,g)=>{t=null,M9=null,B9=!0,H.minDistance=0.1,H.maxDistance=30,K.position.set(...k),H.target.set(...g),H.update()},window.mesaDedos=(k,g,e)=>{let c=k0[k];if(!c)return!1;c.dedos??=bK(c.root);for(let F0 of e?[e]:["Left","Right"])bQ(c.dedos[F0],g);return Object.keys(c.dedos).length},window.mesaCara=(k,g,e)=>{let c=k0[k];if(c)c.caraFija=g==null?null:{p:g,s:e??0}},window.mesaBeber=(k,g)=>{let e=k0[k];if(!e||!e.bebida||e.jugada)return;if(e.trago&&g!=null&&e.trago.fijo!=null)e.trago.fijo=g;else e.trago={t0:d6.elapsedTime,fijo:g}},window.mesaSentados=()=>k0.map((k)=>{if(!k)return null;let g=k.hips.getWorldPosition(Q9()),e=Q9(),c=9;return k.root.traverse((F0)=>{if(!F0.isSkinnedMesh)return;F0.skeleton.update();let q0=F0.geometry.attributes.position.count;for(let Z0=0;Z0<q0;Z0+=3)if(F0.getVertexPosition(Z0,e).applyMatrix4(F0.matrixWorld),Math.hypot(e.x-g.x,e.z-g.z)<0.12&&e.y<c)c=e.y}),{id:k.id,cadera:+g.y.toFixed(3),nalga:+c.toFixed(3),pies:+new S6().setFromObject(k.root).min.y.toFixed(3)}}),window.mesaMirones=(k)=>{return H9(k),()=>d0.map((g)=>g.id)},window.mesaBrazo=(k)=>{let g=k0[k],e=g?.brazos?.[1];if(!e)return null;let c=(F0)=>F0.getWorldPosition(new S).toArray();return{codo:c(e.antebrazo),muneca:c(e.mano),vaso:g.bebida?g.bebida.group.position.toArray():null}},oY(null),oK();let eY=()=>{if(K.aspect<0.95)K.setViewOffset(innerWidth,innerHeight*1.24,0,innerHeight*0.24,innerWidth,innerHeight);else K.clearViewOffset();K.updateProjectionMatrix()},JH=()=>Y?0.65:_J==="min"?Math.min(devicePixelRatio,1)*0.55:_J==="low"?Math.min(devicePixelRatio,1)*0.8:Math.min(devicePixelRatio,1.5,1920/innerWidth),$H=()=>{K.aspect=innerWidth/innerHeight,eY(),W.setPixelRatio(JH()),W.setSize(innerWidth,innerHeight),k6.resize(innerWidth,innerHeight)};eY(),window.addEventListener("resize",$H),H.addEventListener("start",()=>{if(t=null,!p0)M9=null}),W.domElement.addEventListener("webglcontextrestored",()=>k6.entorno?.());let aK={update:oY,setCrowd:H9,setCamera:A9,ready:z$,sentar:f7,get reparto(){return Y7.slice()},sampleTime(k){aY=k;for(let g of[...k0.filter(Boolean),...d0])vK(g,k,!1);k6.frame(k,0,{reduced:!1,view:h7,ends:PJ}),k6.render()},setMode(k){X0=k,A9(k==="attract"?"attract":"table")},quality(k){_J=k;let g=k!=="high";N.castShadow=!g&&!Y;for(let[e,c]of R0){let F0=g?0:c.clearcoat,q0=g?0:c.sheen;if(e.clearcoat!==F0||e.sheen!==q0)e.clearcoat=F0,e.sheen=q0,e.needsUpdate=!0}q.visible=!g,G.intensity=g?U+0.1:U,W.setPixelRatio(JH()),k6.calidad(k),k6.resize(innerWidth,innerHeight)},pause(){eQ=!0},resume(){if(!eQ)return;if(eQ=!1,d6.getDelta(),!j$)oK()},dispose(){if(w$=!0,u6?.dispose(),k6.dispose(),window.removeEventListener("mesa:botvoice",oQ),j$)cancelAnimationFrame(j$);window.removeEventListener("resize",$H),H.dispose(),W.dispose(),J.replaceChildren()}};return aK}export{PM as createWorld};

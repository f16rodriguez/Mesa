// Loudness integrada BS.1770-4 — la misma regla que usa loudnorm — para medir
// los clips viejos y los nuevos con el mismo metro.
const bq=(b0,b1,b2,a0,a1,a2)=>({b:[b0/a0,b1/a0,b2/a0],a:[a1/a0,a2/a0]});
function kFiltros(fs){
  const G=3.99984385397,Q1=0.7071752369554193,f1=1681.9744509555319;
  const A=10**(G/40),w=2*Math.PI*f1/fs,al=Math.sin(w)/(2*Q1),c=Math.cos(w),s=2*Math.sqrt(A)*al;
  const estante=bq(A*((A+1)+(A-1)*c+s),-2*A*((A-1)+(A+1)*c),A*((A+1)+(A-1)*c-s),(A+1)-(A-1)*c+s,2*((A-1)-(A+1)*c),(A+1)-(A-1)*c-s);
  const Q2=0.5003270373253953,f2=38.13547087613982,w2=2*Math.PI*f2/fs,al2=Math.sin(w2)/(2*Q2),c2=Math.cos(w2);
  return [estante,bq((1+c2)/2,-(1+c2),(1+c2)/2,1+al2,-2*c2,1-al2)];
}
function filtra(x,{b,a}){const y=new Float64Array(x.length);let x1=0,x2=0,y1=0,y2=0;
  for(let i=0;i<x.length;i++){const v=b[0]*x[i]+b[1]*x1+b[2]*x2-a[0]*y1-a[1]*y2;x2=x1;x1=x[i];y2=y1;y1=v;y[i]=v;}return y;}
export function lufs(x,fs){
  let y=x;for(const f of kFiltros(fs))y=filtra(y,f);
  const T=Math.round(.4*fs),paso=Math.round(.1*fs),z=[];
  if(y.length<T){let s=0;for(const v of y)s+=v*v;z.push(s/y.length);}
  else for(let i=0;i+T<=y.length;i+=paso){let s=0;for(let j=i;j<i+T;j++)s+=y[j]*y[j];z.push(s/T);}
  const L=v=>-0.691+10*Math.log10(v),media=a=>a.reduce((s,v)=>s+v,0)/a.length;
  let g=z.filter(v=>L(v)>-70);if(!g.length)return -Infinity;
  const rel=L(media(g))-10;g=g.filter(v=>L(v)>rel);return L(media(g));
}
export function picoDb(x){let m=0;for(const v of x)m=Math.max(m,Math.abs(v));return 20*Math.log10(m);}

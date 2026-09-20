import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
const base=process.env.MESA_URL||'http://localhost:8787';
await fs.mkdir('qa',{recursive:true});
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const ctx=await browser.newContext({viewport:{width:1440,height:1050}}),p=await ctx.newPage();
const errors=[];p.on('pageerror',e=>errors.push(e.message));
await p.goto(base);await p.getByRole('button',{name:'Start a table',exact:false}).waitFor();await p.waitForTimeout(1000);
await p.screenshot({path:'qa/mesa-home.png',fullPage:true});
await p.getByRole('button',{name:'Start a table',exact:false}).click();await p.locator('#qr svg').waitFor();
const url=new URL(p.url()),room=url.searchParams.get('room');
const mobileCtx=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true}),phone=await mobileCtx.newPage();phone.on('pageerror',e=>errors.push(e.message));
await phone.goto(`${base}/?room=${room}&role=player`);await phone.getByLabel('Your name').fill('Ana');await phone.getByRole('button',{name:'Take my seat'}).click();await phone.getByText('You’re at the table.').waitFor();
await p.getByText('Ana',{exact:true}).first().waitFor();await p.screenshot({path:'qa/mesa-lobby.png',fullPage:true});
await p.getByRole('button',{name:'Fill with bots & deal'}).click();await phone.locator('.hand-panel').waitFor();
await phone.screenshot({path:'qa/mesa-phone.png',fullPage:true});
if(await p.locator('.hand-panel').count())throw Error('Host received a private-hand UI');
await phone.reload();await phone.locator('.hand-panel').waitFor();
await p.waitForTimeout(3600);await p.screenshot({path:'qa/mesa-table.png',fullPage:true});
// A full hand, interacting only with visible legal controls.
let moves=0;
for(let i=0;i<140;i++){
 if(await p.locator('.end-card').count())break;
 const legal=phone.locator('.tile-button.legal');
 if(await legal.count()){await legal.first().click();await phone.locator('[data-play]').first().click();moves++;}
 else if(await phone.locator('[data-action="pass"]').count()){await phone.locator('[data-action="pass"]').click();moves++;}
 await p.waitForTimeout(700);
}
await p.locator('.end-card').waitFor({timeout:15000});
await p.getByRole('button',{name:'Deal the next hand'}).click();await p.waitForTimeout(500);
// Lesson safety and responsive layout.
const home=await ctx.newPage();await home.goto(base);await home.getByRole('button',{name:'La escuelita',exact:true}).click();await home.locator('[data-answer="1"]').click();await home.getByText('Eso es.',{exact:false}).waitFor();
const m=await mobileCtx.newPage();await m.goto(base);await m.screenshot({path:'qa/mesa-mobile-home.png',fullPage:true});
for(const page of [p,phone,home,m]){const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2);if(overflow)throw Error('Horizontal overflow at '+page.url());}
console.log(JSON.stringify({pass:true,playerMoves:moves,browserErrors:errors,room,verified:['desktop landing','QR generated','guest joins','private phone hand','host hidden hand','phone reload recovers seat','complete scored hand','next deal','lesson quiz','mobile no overflow']},null,2));
if(errors.length)throw Error(errors.join('\n'));
await browser.close();

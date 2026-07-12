const code=`> boot portfolio
✓ Loading SQL modules
✓ Connecting Gemini
✓ Starting AI Lab
System Ready.`;let i=0;const t=document.getElementById('typing');(function type(){if(i<code.length){t.textContent+=code[i++];setTimeout(type,28)}})();
const c=document.getElementById('bg'),x=c.getContext('2d');function r(){c.width=innerWidth;c.height=innerHeight}r();onresize=r;let dots=[...Array(80)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}));(function a(){x.clearRect(0,0,c.width,c.height);dots.forEach(d=>{d.x+=d.vx;d.y+=d.vy;if(d.x<0||d.x>c.width)d.vx*=-1;if(d.y<0||d.y>c.height)d.vy*=-1;x.fillStyle='#00f5d4';x.fillRect(d.x,d.y,2,2)});requestAnimationFrame(a)})();
document.getElementById('theme').onclick=()=>document.body.classList.toggle('light');

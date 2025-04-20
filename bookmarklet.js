let run;run=setInterval(()=>{if((document.documentElement.textContent||document.documentElement.innerText).indexOf("Unlock everything")>-1){clearInterval(run);let e=document.createElement("dialog"),o=document.createElement("h1");o.innerText="Reset Cookies?";let n=document.createElement("p");n.innerText="(Get more MCQs)",Object.assign(n.style,{fontSize:"0.8rem",color:"#555",marginTop:"-30px",marginBottom:"20px"});let t=document.createElement("button");t.innerText="Yes";let r=document.createElement("button");r.innerText="No",Object.assign(e.style,{width:"400px",padding:"30px",border:"none",borderRadius:"16px",background:"#ffffff",color:"#222",fontFamily:"'Segoe UI', sans-serif",fontSize:"18px",fontWeight:"500",boxShadow:"0 12px 30px rgba(0, 0, 0, 0.3)",animation:"fadeIn 0.4s ease-out"});let a=document.createElement("style");a.textContent=`
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
            }
            .fancy-button::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, rgba(255,255,255,0.2) 10%, transparent 10.01%);
                background-size: 10px 10px;
                animation: sparkle 2s linear infinite;
                z-index: 0;
            }
            .fancy-button:hover {
                transform: scale(1.08);
                background: linear-gradient(135deg, #2ecc71, #27ae60);
                box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
            }
            @keyframes sparkle {
                from { transform: translate(0, 0); }
                to { transform: translate(10px, 10px); }
            }
        `,document.head.appendChild(a),Object.assign(t.style,{backgroundColor:"#2ecc71",color:"white",border:"none",padding:"10px 20px",borderRadius:"8px",fontWeight:"600",fontSize:"16px",cursor:"pointer",transition:"background 0.3s",marginRight:"0.5rem",marginTop:"1rem"}),t.onmouseover=()=>t.style.backgroundColor="#27ae60",t.onmouseout=()=>t.style.backgroundColor="#2ecc71",Object.assign(r.style,{backgroundColor:"#e74c3c",color:"white",border:"none",padding:"10px 20px",borderRadius:"8px",fontWeight:"600",fontSize:"16px",cursor:"pointer",transition:"background 0.3s"}),r.onmouseover=()=>r.style.backgroundColor="#c0392b",r.onmouseout=()=>r.style.backgroundColor="#e74c3c";let i=()=>{localStorage.clear(),e.close(),e.remove(),window.location.reload()},l=()=>{e.close(),e.remove();let o=document.createElement("button");o.textContent="✨ Reset Site ✨",Object.assign(o.style,{position:"fixed",top:"20px",left:"20px",padding:"12px 24px",fontFamily:"'Segoe UI', sans-serif",fontSize:"18px",fontWeight:"600",color:"#fff",background:"linear-gradient(135deg, #32CD32, #2ecc71)",border:"none",borderRadius:"12px",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.2)",cursor:"pointer",zIndex:9999,transition:"all 0.3s ease-in-out",overflow:"hidden"}),o.classList.add("fancy-button"),o.onclick=()=>{localStorage.clear(),window.location.reload()},document.body.appendChild(o)};t.onclick=i,r.onclick=l,e.appendChild(o),e.appendChild(n),e.appendChild(t),e.appendChild(r),document.body.appendChild(e),e.showModal()}},50);

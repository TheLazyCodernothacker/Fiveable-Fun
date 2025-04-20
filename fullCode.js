let run;
run = setInterval(() => {
    if (
        (
            document.documentElement.textContent || document.documentElement.innerText
        ).indexOf('Unlock everything') > -1
    ) {
        clearInterval(run);

        const dialog = document.createElement("dialog");

        const h1 = document.createElement("h1");
        h1.innerText = "Reset Cookies?";

        const sub = document.createElement("p");
        sub.innerText = "(Get more MCQs)";
        Object.assign(sub.style, {
            fontSize: "0.8rem",
            color: "#555",
            marginTop: "-30px",
            marginBottom: "20px"
        });

        const yes = document.createElement("button");
        yes.innerText = "Yes";
        const no = document.createElement("button");
        no.innerText = "No";

        // Style the dialog
        Object.assign(dialog.style, {
            width: "400px",
            padding: "30px",
            border: "none",
            borderRadius: "16px",
            background: "#ffffff",
            color: "#222",
            fontFamily: "'Segoe UI', sans-serif",
            fontSize: "18px",
            fontWeight: "500",
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
            animation: "fadeIn 0.4s ease-out"
        });

        const styleTag = document.createElement("style");
        styleTag.textContent = `
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
        `;
        document.head.appendChild(styleTag);

        // Style Yes button (green)
        Object.assign(yes.style, {
            backgroundColor: "#2ecc71",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.3s",
          	marginRight: "0.5rem",
          	marginTop: "1rem"
        });
        yes.onmouseover = () => yes.style.backgroundColor = "#27ae60";
        yes.onmouseout = () => yes.style.backgroundColor = "#2ecc71";

        // Style No button (red)
        Object.assign(no.style, {
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.3s"
        });
        no.onmouseover = () => no.style.backgroundColor = "#c0392b";
        no.onmouseout = () => no.style.backgroundColor = "#e74c3c";

        let reset = () => {
            localStorage.clear();
            dialog.close();
            dialog.remove();
            window.location.reload();
        };

        let later = () => {
            dialog.close();
            dialog.remove();

            const button = document.createElement("button");
            button.textContent = "✨ Reset Site ✨";

            Object.assign(button.style, {
                position: "fixed",
                top: "20px",
                left: "20px",
                padding: "12px 24px",
                fontFamily: "'Segoe UI', sans-serif",
                fontSize: "18px",
                fontWeight: "600",
                color: "#fff",
                background: "linear-gradient(135deg, #32CD32, #2ecc71)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                zIndex: 9999,
                transition: "all 0.3s ease-in-out",
                overflow: "hidden"
            });

            button.classList.add("fancy-button");

            button.onclick = () => {
                localStorage.clear();
                window.location.reload();
            };

            document.body.appendChild(button);
        };

        yes.onclick = reset;
        no.onclick = later;

        dialog.appendChild(h1);
        dialog.appendChild(sub);
        dialog.appendChild(yes);
        dialog.appendChild(no);
        document.body.appendChild(dialog);
        dialog.showModal();
    }
}, 200);

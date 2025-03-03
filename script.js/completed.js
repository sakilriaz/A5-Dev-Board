const openModalBtns = document.querySelectorAll(".openModalBtn");
        const displayActivity = document.getElementById("activityContent");
        const clearActivityBtn = document.getElementById("clearActivityBtn");
        const countdownEl = document.getElementById("countdown");
        const incrementEl = document.getElementById("incrementCount");

        let countdown = 6;
        let incrementCount = 23;
        let buttonsClicked = 0;
        for (let i = 0; i < openModalBtns.length; i++) {
            openModalBtns[i].addEventListener("click", function () {
                alert("Board Updated Successfully");
               
                countdownEl.textContent = --countdown;
                incrementEl.textContent = ++incrementCount;

        const parentDiv = openModalBtns[i].closest("div").parentElement;
                const h2El = parentDiv.querySelector("h2");
                
                let h2Text;
                if (h2El) {
                    h2Text = h2El.textContent;  
                } else {
                    h2Text = "Not available";     
                }
                
                logAction(`${h2Text}`);
               
                openModalBtns[i].disabled = true;                
                buttonsClicked++;               
                if (buttonsClicked === openModalBtns.length) {
                    alert('Congrats!!! You have completed all the current tasks');
                }
            });
        }
        
        function logAction(text) {
            const timeStamp = new Date().toLocaleTimeString();
            const logMessage = document.createElement("div");
            logMessage.innerHTML = `<h1 class="bg-gray-100 p-4 my-4">You have completed the task ${text} at ${timeStamp}</h1>`;
            displayActivity.appendChild(logMessage);
        }
        
        clearActivityBtn.addEventListener("click", function () {
            displayActivity.innerHTML = "";  
        });
"use strict"



let parent = document.getElementById("spec-inner");
let userInput = document.getElementById("input");

userInput.onkeydown = function (e)
{
    if(e.keyCode === 13 && e.shiftKey === false)
    {
        let inputValue = userInput.value.trim();
        let icon = document.createElement("i"); // it is here because of line 40
        let tag = document.createElement("span"); // it is here because of line 42

        if(inputValue !== "")
        {
            // tag.innerText = inputValue;
            // tag.className = "spec-style";
            icon.className = "far fa-times-circle spec-icon";

            let allTags = document.querySelectorAll(".spec-style");
            let foundTag = [...allTags].find(el => el.innerText === inputValue);
            
            if(foundTag !== undefined)
            {
            //    parent.insertBefore(foundTag, userInput);
               userInput.value = "";
               return;
            
            }

            // parent.appendChild(tag);
            tag.innerText = inputValue;
            tag.className = "spec-style";
            parent.insertBefore(tag, userInput);
            tag.appendChild(icon);
            userInput.value = "";
        }

        

        icon.onclick = function()
        {
            this.parentElement.remove(tag);
        }
        
        userInput.value = "";
    }
    else if(e.keyCode === 27)
    {
        userInput.value = "";
    }
    else
    {
        return;
    }
}

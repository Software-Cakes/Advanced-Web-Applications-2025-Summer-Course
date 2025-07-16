if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready after DOMContentLoaded!");
    initializeCode();
  });
}

function initializeCode() {
    const userForm = document.getElementById("userForm");
    const getUsers = document.getElementById("getUsers");
    const userList = document.getElementById("userList");

    // task 4: front-end and back-end communication 
    userForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        if (!name || !email) {
            alert("Please enter valid inputs!");
            return;
        }

        try {
            const response = await fetch("/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({ name, email })
            });
            const result = await response.json();
            console.log(result.message);
            alert(result.message);
            userForm.reset();
        } catch (error) {
            console.error("ERROR: ", error);
        }
    });

    // task 5: render all users in front-end
    getUsers.addEventListener("click", async function(event) {
        try {
            const response = await fetch("/users");
            const users = await response.json();
            userList.innerHTML = "";
            users.forEach((user) => {
                const lst_item = document.createElement("li");
                lst_item.textContent = `${user.name} - ${user.email}`;
                userList.appendChild(lst_item);
            });
        } catch (error) {
            console.error("ERROR: ", error);
        }
    });

}
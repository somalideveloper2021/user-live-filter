const result = document.querySelector("#result");
const filter = document.querySelector("#filter");

let userList = [];
getUsers()
  .then((user) => {
    let li = "";
    result.innerHTML = "";
    user.forEach((user) => {
      const list = document.createElement("li");
      userList.push(list);
      list.innerHTML = `
        <img src="${user.picture.large}" alt="" />
        <div class="user_info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.location.city}, ${user.location.country}</p>
        </div>
      `;
      result.appendChild(list);
      //   li += `
      //   <li>
      //   <img src="${user.picture.large}" alt="" />
      //   <div class="user_info">
      //     <h4>${user.name.first} ${user.name.last}</h4>
      //     <p>${user.location.city}, ${user.location.country}</p>
      //   </div>
      // </li>
      //   `;
      //   userList.push(li);
    });
    // result.innerHTML = li;
  })
  .catch((error) => console.log(error));

// console.log(userList);

filter.addEventListener("input", (e) => filterUser(e.target.value));

async function getUsers() {
  const response = await fetch("https://randomuser.me/api/?results=40");
  const { results } = await response.json();
  return results;
}

function filterUser(searchUser) {
  console.log(searchUser);
  userList.forEach((user) => {
    if (user.innerText.toLowerCase().includes(searchUser.toLowerCase())) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
}

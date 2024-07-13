const img = document.getElementById("user-image");
const dataContainer = document.getElementById("data-container");

const renderUser = async () => {
  try {
    // set as defualt image
    img.src = "./src/images/Unknown_person.jpg";

    // show loading spinner while promis is loading
    loadingSpinner(dataContainer);

    // Catch data
    const res = await fetch("https://randomuser.me/api/");
    if (!res.ok) throw new Error("Some thing went wrong");
    const data = await res.json();
    const userData = data.results[0];
    console.log(userData);
    // Render data
    img.src = userData.picture.large;
    const markup = `
        <div class="space-y-3">
          <h1 class="text-primary-blue text-2xl">${userData.name.first} ${
      userData.name.last
    }</h1>
          <div class="text-gray-400">${userData.location.country}, ${
      userData.location.state
    }, ${userData.location.city}, ${userData.location.street.name}</div>
          <div
            class="flex justify-center items-center py-4 gap-20 text-gray-300 text-sm"
          >
            <div>Gender: ${userData.gender}</div>
            <div>Age: ${userData.dob.age}</div>
            <div>Born: ${userData.dob.date.split("T")[0]}</div>
          </div>
          <div class="text-xl">@${userData.login.username}</div>
          <div class="text-lg pb-4 text-gray-400">Password: ${
            userData.login.password
          }</div>
          <div class="text-xl pb-4">${userData.email}</div>
          <div
            class="flex justify-around items-center border-t-[1px] border-primary-blue pt-4"
          >
            <div>
              <i class="fas fa-phone fa-sm fa-fw"></i>
              <span>${userData.cell}</span>
            </div>
            <div>
              <i class="fas fa-mobile fa-sm fa-fw"></i>
              <span>${userData.phone}</span>
            </div>
          </div>
        </div>
      `;
    dataContainer.innerHTML = "";
    dataContainer.insertAdjacentHTML("afterbegin", markup);
  } catch (err) {
    dataContainer.innerHTML = err;
  }
};

const loadingSpinner = (container) => {
  // Render loading spinner
  const markup = `
    <div class="flex items-center justify-center">
      <div
        class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status">
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
        >
      </div>
    </div>`;
  container.innerHTML = "";
  container.insertAdjacentHTML("afterbegin", markup);
};

button.addEventListener("click", renderUser);

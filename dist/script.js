const fetchAPI = () => {
  const api = "https://randomuser.me/api/";
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      const userData = data.results[0];

      const { large } = userData.picture;
      const { first, last } = userData.name;
      const { country, city, state, street } = userData.location;
      const { age, date } = userData.dob;
      const { gender } = userData;
      const { username } = userData.login;
      const { email } = userData;
      const { cell } = userData;
      const { phone } = userData;

      user_image.setAttribute("src", large);
      user_address.textContent = `${country}, ${state}, ${city}, ${street.name}`;
      real_name.textContent = ` ${first} ${last}`;
      user_age.textContent = `Age: ${age}`;
      user_gender.textContent = `Gender: ${gender}`;
      user_birthDate.textContent = `Born: ${calcDate(date)}`;

      user_name.textContent = `@${username}`;
      user_email.textContent = email;

      phone1.textContent = cell;
      phone2.textContent = phone;

      contents.classList.remove("opacity-0");
    })
    .catch((err) => console.error(err));
};

const calcDate = (date) => {
  const convertDate = new Date();
  const userBirthDate = `${convertDate.getFullYear(date)}/${String(
    convertDate.getMonth(date)
  ).padStart(2, 0)}/${String(convertDate.getDay(date)).padStart(2, 0)}`;
  return userBirthDate;
};

button.addEventListener("click", fetchAPI);

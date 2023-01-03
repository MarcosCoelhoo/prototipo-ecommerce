export default function initAccountInfo() {}

fetch("https://fakestoreapi.com/users/5")
  .then((r) => r.json())
  .then((json) => {
    console.log(json);
    const nameUser = document.querySelector("[data-name]"),
      emailUser = document.querySelectorAll("[data-email]"),
      city = document.querySelector("[data-city]"),
      street = document.querySelector("[data-street]"),
      addressNum = document.querySelector("[data-num]"),
      zipCode = document.querySelector("[data-zip]"),
      phoneUser = document.querySelector("[data-phone]");

    nameUser.innerText = `${json.name.firstname} ${json.name.lastname}`;
    emailUser.forEach((item) => (item.innerText = json.email));
    city.innerText = json.address.city;
    street.innerText = json.address.street;
    addressNum.innerText = json.address.number;
    zipCode.innerText = json.address.zipcode;
    phoneUser.innerText = json.phone;
  });

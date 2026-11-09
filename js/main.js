const litres = document.querySelector("#litres");
const litresMessage = document.querySelector("#litres-message");

function checkLitres() {
  const value = litres.value.trim();
  const amount = Number(value);

  if (value === "") {
    litresMessage.textContent = "Litres is required";
    litres.classList.add("invalid");
    return false;
  } else if (isNaN(amount)) {
    litresMessage.textContent = "Litres must be a positive number";
    litres.classList.add("invalid");
    return false;
  } else if (amount <= 0) {
    litresMessage.textContent = "Litres must be more than 0";
    litres.classList.add("invalid");
    return false;
  } else {
    litresMessage.textContent = "";
    litres.classList.remove("invalid");
    return true;
  }
}

// Event listener for litres
litres.addEventListener("input", checkLitres);

const member = document.querySelector("#member");
const memberMessage = document.querySelector("#member-message");
const memberRegex = /^ER-[0-9]{4}$/;

function checkMember() {
  const typed = member.value.trim().toUpperCase();
  member.value = typed;

  if (typed === "") {
    memberMessage.textContent = "Member number is required";
    member.classList.add("invalid");
    return false;
  } else if (memberRegex.test(typed)) {
    memberMessage.textContent = "";
    member.classList.remove("invalid");
    return true;
  } else {
    memberMessage.textContent = "Enter a valid member number (e.g. ER-0001)";
    member.classList.add("invalid");
    return false;
  }
}

// Event listener for member
member.addEventListener("input", checkMember);

// Form submission handler
const deliveryForm = document.querySelector("#delivery-form");
if (deliveryForm) {
  deliveryForm.addEventListener("submit", function (event) {
    const isMemberValid = checkMember();
    const isLitresValid = checkLitres();

    if (!isMemberValid || !isLitresValid) {
      event.preventDefault();
    }
  });
}

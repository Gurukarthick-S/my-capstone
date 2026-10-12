
const form = document.getElementById("settingsForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const notificationsInput = document.getElementById("notifications");
const message = document.getElementById("message");

function showError(input, errorId, text) {
  const error = document.getElementById(errorId);
  error.textContent = text;
  error.hidden = !text;
  input.setAttribute("aria-invalid", text ? "true" : "false");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  showError(
    nameInput,
    "nameError",
    name ? "" : "Please enter your full name."
  );

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  showError(
    emailInput,
    "emailError",
    validEmail ? "" : "Please enter a valid email address."
  );

  if (!name || !validEmail) {
    message.textContent = "Please fix the errors above.";
    message.className = "message failure";
    return;
  }

  const settings = {
    name,
    email,
    notifications: notificationsInput.checked
  };

  try {
    localStorage.setItem("userSettings", JSON.stringify(settings));

    message.textContent = "Settings saved successfully!";
    message.className = "message success";
  } catch (error) {
    message.textContent = "Unable to save settings. Please try again.";
    message.className = "message failure";
  }
});

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim()) {
    showError(nameInput, "nameError", "");
  }
});

emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError(emailInput, "emailError", "");
  }
});

try {
  const saved = localStorage.getItem("userSettings");

  if (saved) {
    const settings = JSON.parse(saved);
    nameInput.value = settings.name || "";
    emailInput.value = settings.email || "";
    notificationsInput.checked = settings.notifications ?? true;
  }
} catch (error) {
  console.error("Could not load saved settings:", error);
}

function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3;

  const tryLogin = (usernameAttempt, passwordAttempt) => {
    if (attemptCount >= maxAttempts) {
      return "Account locked due to too many failed attempts.";
    }

    attemptCount++;

    if (usernameAttempt === userInfo.username && passwordAttempt === userInfo.password) {
      return "Login successful!";
    } else {
      return `Login failed. Attempt ${attemptCount} of ${maxAttempts}.`;
    }
  };

  return tryLogin;
}

const login = createLoginTracker({ username: "user1", password: "password123" });

console.log(login("user1", "wrongpass"));
console.log(login("user1", "wrongpass"));
console.log(login("user1", "password123"));
console.log(login("user1", "anypass"));



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
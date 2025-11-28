// index.js
function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const tryLogin = (passwordAttempt) => {
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    attemptCount++;

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Login failed. Attempt ${attemptCount} of 3.`;
    }
  };

  return tryLogin;
}

// Example usage for testing
const login = createLoginTracker({ username: "user1", password: "password123" });

console.log(login("wrong"));        // Login failed. Attempt 1 of 3.
console.log(login("wrong"));        // Login failed. Attempt 2 of 3.
console.log(login("password123"));  // Login successful
console.log(login("wrong"));        // Account locked due to too many failed login attempts





module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
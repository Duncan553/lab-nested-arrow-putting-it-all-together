function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    attemptCount += 1;

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    if (attemptCount < 3) {
      return `Login failed. Attempt ${attemptCount}`;
    }

    return "Account locked due to too many failed login attempts";
  };

  return loginAttempt;
}




module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
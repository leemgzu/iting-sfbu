// Part 1: callback - Simulated user data
// users data 
const userData = {
    userId1: { name: "John Cena", email: "johncena@example.com" },
    userId2: { name: "Sam Smith", email: "samsmith@example.com" },
  };
  
// Simulated function to fetch user data asynchronously
// getUserData takes two arguments: userID and a callback function.
function getUserData(userId, callback) {
setTimeout(() => { //an anonymous function is used here to fetch data asynchronously
    const user = userData[userId];
    if (user) {
    callback(null, user); // Call the callback with user data
    } else {
    callback("User not found"); // Call the callback with an error message
    }
}, 1000); // delay of 1 second
}

// Callback function to handle the user data or error
// It prints the user data if it's found and prints an error message if the user is not found.
function handleUserData(err, data) {
if (err) {
    console.error("Error:", err);
} else { 
    console.log("User Data:", data);
}
}

// testing the callbacks for part 1
getUserData("userId1", handleUserData); // Existing user
getUserData("userId3", handleUserData); // User not found

// Part 2: Promises - refactor the function above
// Simulated function to fetch user data asynchronously
function getUserData2(userId) {
    // getUserData returns a Promise that resolves with user data when found and rejects with an error message when not found.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = userData[userId];
        if (user) {
          resolve(user); // Resolve with user data
        } else {
          reject("User not found"); // Reject with an error message
        }
      }, 1000); // Simulate a delay of 1 second
    });
  }
  
// testing with .then() and .catch() for part 2
// The .then() method is used to handle resolved data, and the .catch() method is used to handle errors.

getUserData2("userId1")
    .then((data) => {
    console.log("User Data:", data);
})
    .catch((error) => {
    console.error("Error:", error);
});

getUserData2("userId3")
    .then((data) => {
    console.log("User Data:", data);
})
    .catch((error) => {
    console.error("Error:", error);
});

// Part 3: Error Handling
// getUserData: when the user ID is negative, it intentionally throws an error with the custom message "Invalid user ID." 
// The .catch() block is then updated to handle this custom error message when calling getUserData(-1).
function getUserData3(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId < 0) {
          reject("Invalid user ID"); // Reject with a custom error message
        }
  
        const user = userData[userId];
        if (user) {
          resolve(user); // Resolve with user data
        } else {
          reject("User not found"); // Reject with an error message
        }
      }, 1000); // Simulate a delay of 1 second
    });
  }
  

getUserData3("userId1")
    .then((data) => {
    console.log("User Data:", data);
})
    .catch((error) => {
    console.error("Error:", error);
});

getUserData3(-1) // Intentionally using a negative user ID
    .then((data) => {
    console.log("User Data:", data);
})
    .catch((error) => {
    console.error("Custom Error:", error); // Handle the custom error message
});

// // Part 4:  Async/Await
function getUserData4(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId < 0) {
          reject("Invalid user ID");
        }
  
        const user = userData[userId];
        if (user) {
          resolve(user);
        } else {
          reject("User not found");
        }
      }, 1000); // Simulate a delay of 1 second
    });
  }

// async/await and try/catch
async function fetchUserData(userId) {
try {
    const userData = await getUserData4(userId);
    console.log("User Data:", userData);
} catch (error) {
    console.error("Error:", error);
}
}

async function fetchInvalidUserData(userId) {
try {
    const userData = await getUserData4(userId);
    console.log("User Data:", userData);
} catch (error) {
    console.error("Custom Error:", error); // Handle the custom error message
}
}
// testing part 4
fetchUserData("userId1"); // Existing user
fetchUserData(-1); // User not found

fetchInvalidUserData(123); // Invalid user ID
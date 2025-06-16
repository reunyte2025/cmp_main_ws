/* <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script> */

  (function(){
    emailjs.init("umH0MmsSaxHluS8FY"); // Replace with your EmailJS user ID
  })();

  // function sendEmail() {
  //   emailjs.send("service_sxs743g", "template_kpwyuu", {
  //     to_name: "User name",
  //     from_name: "User email",
  //     message: "message"
  //   }).then(function(response) {
  //     alert("Email sent successfully!");
  //   }, function(error) {
  //     alert("Failed to send email: " + error);
  //   });
  // }

  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submit

    // Send form data to EmailJS
    emailjs.sendForm("service_sxs743g", "template_kpwyvuu", this)
      .then(function () {
        alert("Message sent successfully!");
      }, function (error) {
        alert("Failed to send message. Error: " + JSON.stringify(error));
      });
  });



{/* <button onclick="sendEmail()">Send Email</button> */}
function sendEmail(){
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  }

  emailjs.send("service_4t0wwm8", "template_kj2vlzk", params).then(alert("Message Send Successfully"));

  // emailjs.send("service_4t0wwm8", "template_kj2vlzk", params)
  //   .then((response) => {
  //     alert("Message Sent Successfully!");
  //     console.log("SUCCESS!", response.status, response.text);
  //   })
  //   .catch((error) => {
  //     alert("Failed to send the message. Please try again later.");
  //     console.error("FAILED...", error);
  //   });
}
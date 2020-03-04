<template>
  <div class="container-fluid" id="contact">
    <div class="row justify-content-center mb-5">
      <div class="col-6 mt-4 top">
        <h1>This is the contact page.</h1>
        <h5>This is where you can let them know how they can contact you; you can include your emails and office numbers or cellphones, or you could just have them fill out the form and let tell them you'll reach out to them.</h5>
        <p>Here you can also let them know what information they might need to have ready or knowledge of when they're talking to you. You could explain the process of how you'll reach out. You could explain how you want them to address you depending on the service they are inquiring about. This page can be as busy or empty as you want.</p>
      </div>
    </div>
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-sm-3">
        <div>
          <form id="contact-form" @submit.prevent="sendEmail">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Phone</label>
            <input type="text" name="user_phone" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message"></textarea>
            <button class="btn btn-sm" value="Send" type="submit">Sumbit</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 bottom">
        <p>This is where you can thank them for their interest or for reaching out and give them the general speel about getting back to them as soon as possible, if it's an emergency you could include hotline numbers etc. to have them call.</p>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "Contact",
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          "logan_gmail",
          "contact_form",
          e.target,
          "user_b2HN3DOB9yIkgddI73kwu"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
      e.target.reset();
    }
  }
};
</script>

<style>
#contact {
  /* background-color: gainsboro; */
  /* 116px is the height of the fixed navbar */
  min-height: calc(100vh - 116px);
}
h1,
h5,
p {
  margin-bottom: 20pt;
}
.top {
  border-bottom: 2pt solid rgb(24, 57, 98);
}
.bottom {
  border-top: 2pt solid rgb(24, 57, 98);
  padding-top: 10pt;
}

/* Styling the contact form */
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 30pt;
  border: 1pt solid black;
  padding: 10pt;
  border-radius: 5%;
  box-shadow: 5px 5px 4px grey;
}
form input {
  border: none;
  border-bottom: 1pt solid black;
  margin-bottom: 25pt;
  background: transparent;
}
form label {
  align-self: start;
  margin: 0;
}
textarea {
  background-color: rgba(255, 255, 255, 0.5);
}
.btn {
  border: 2pt solid rgb(253, 186, 20);
  background-color: rgb(24, 57, 98, 0.8);
  color: rgb(253, 186, 20);
  width: 30%;
  align-self: center;
  margin-top: 10pt;
}
.btn:hover {
  color: white;
  background-color: rgb(131, 196, 66);
  border: 2pt solid rgb(24, 57, 98);
  box-shadow: 0 0 20px rgb(131, 196, 66);
}
</style>

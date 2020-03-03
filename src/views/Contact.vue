<template>
  <div class="container-fluid" id="contact">
    <div class="row">
      <div class="col-12">
        <h1>This is the contact page.</h1>
      </div>
    </div>
    <div class="row justify-content-center align-items-center">
      <div class="col-3">
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
            <button class="btn" value="Send" type="submit">Sumbit</button>
          </form>
        </div>
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
form {
  display: flex;
  flex-direction: column;
}
form input {
  border: none;
  border-bottom: 1pt solid black;
  margin-bottom: 25pt;
}
form label {
  align-self: start;
  margin: 0;
}
</style>

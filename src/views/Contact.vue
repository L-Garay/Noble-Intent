<template>
  <div class="container-fluid" id="contact">
    <div class="row">
      <div class="col-12">
        <h1>This is the contact page.</h1>
      </div>
      <div class="col-4 offset-3">
        <div class="contact-form">
          <form @submit.prevent="sendEmail()">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Phone</label>
            <input type="text" name="user_phone" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message"></textarea>
            <button class="btn">Sumbit</button>
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
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          e.target,
          "YOUR_USER_ID"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
</style>

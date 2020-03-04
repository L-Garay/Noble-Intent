<template>
  <div class="container-fluid" id="about">
    <div class="row image mb-4">
      <div class="col-12">
        <h1>This could be your mission statement or core values</h1>
      </div>
    </div>
    <div class="row company">
      <div class="col-6 offset-3">
        <h1>Noble Intent, LLC</h1>
        <p>This is where you could put a brief summary of how the company came about, why you're doing this, how it helps people, what makes it unique, etc. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi expedita, veritatis eaque nihil voluptas, adipisci dolorem voluptate possimus ut consequuntur repudiandae recusandae blanditiis ab dolor, quae iure facere magni id.</p>
      </div>
    </div>
    <div class="row personal">
      <div class="col-5 d-flex align-items-center justify-content-center">
        <img src="../assets/Jena.jpg" alt="should be Jena" class="Img" />
      </div>
      <div class="col-6 Jena">
        <p>Jena graduated from the university of Idaho with a Bachelor’s Degree in Psychology and earned her Master’s degree in Social Work from Northwest Nazarene University. Jena is the President of the Idaho Juvenile Justice Association (IJJA), a member of the Association for the treatment of Sexual Abusers (ATSA) and a Senior level certified Juvenile Sexual Offender Treatment Provider (JSOTP). She has over 15 years of experience working with children and their families to address behavioral and mental health concerns. Jena has worked in a variety of settings including in-patient hospitalization, residential treatment, and community-based counseling.</p>
        <p>Jena is passionate about helping youth and their families. Her approach is unique, individualized and effective. She thinks it is important when working with youth to use creative types of therapy that they can relate to, have fun with and will actually help them make long term change. Jena believes that helping individuals make change requires more than focusing on their mental health and emotional well-being. She loves to step outside of the traditional therapy setting and help youth to connect with friends, family and activities that they enjoy which is also a crucial part of becoming healthy and happy.</p>
        <p>Jena has always had a passion for a healthy and active lifestyle. Jena’s husband and her dog, Ike are her adventure buddies and who she spends most of her time with. You will often find Jena exploring the outdoors while camping, running, hiking or snow shoeing. Jena also loves hot yoga, kick boxing and to run half marathons. During down time, Jena can be found meeting a friend for a cup of coffee or cuddled up by the fire place with a good book.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-1 Paula">
        <p>Jena graduated from the university of Idaho with a Bachelor’s Degree in Psychology and earned her Master’s degree in Social Work from Northwest Nazarene University. Jena is the President of the Idaho Juvenile Justice Association (IJJA), a member of the Association for the treatment of Sexual Abusers (ATSA) and a Senior level certified Juvenile Sexual Offender Treatment Provider (JSOTP). She has over 15 years of experience working with children and their families to address behavioral and mental health concerns. Jena has worked in a variety of settings including in-patient hospitalization, residential treatment, and community-based counseling.</p>
        <p>Jena is passionate about helping youth and their families. Her approach is unique, individualized and effective. She thinks it is important when working with youth to use creative types of therapy that they can relate to, have fun with and will actually help them make long term change. Jena believes that helping individuals make change requires more than focusing on their mental health and emotional well-being. She loves to step outside of the traditional therapy setting and help youth to connect with friends, family and activities that they enjoy which is also a crucial part of becoming healthy and happy.</p>
        <p>Jena has always had a passion for a healthy and active lifestyle. Jena’s husband and her dog, Ike are her adventure buddies and who she spends most of her time with. You will often find Jena exploring the outdoors while camping, running, hiking or snow shoeing. Jena also loves hot yoga, kick boxing and to run half marathons. During down time, Jena can be found meeting a friend for a cup of coffee or cuddled up by the fire place with a good book.</p>
      </div>
      <div class="col-5 d-flex align-items-center justify-content-center">
        <img src="../assets/Jena.jpg" alt="should be Paula" class="Img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
#about {
  overflow-x: hidden;
  /* max-width: 100vw; */
}
/* Styling background image */
.image {
  background-image: url("../assets/backgrounds/hills.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: calc(75vh - 116px);
  align-items: center;
  box-shadow: 0 5px 3px grey;
}
.image h1 {
  font-family: "Simonetta", cursive;
  font-size: 3.5rem;
  text-shadow: 0 0 10px black;
  /* color: rgb(253, 186, 20); */
  color: white;
}

/* Company Bio section */
.company div {
  border-bottom: 2pt solid rgb(24, 57, 98);
}

/* Personal bios section */
.personal {
  margin-top: 75pt;
}
.Jena p {
  text-align: left;
}
.Paula p {
  text-align: right;
}
.Img {
  height: 275px;
  width: 400px;
}
</style>

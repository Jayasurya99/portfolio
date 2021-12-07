<template>
  <div>
    <section
      class="contact py-5 "
      id="contact"
    >
      <div class="container">
        <div class="row wrap">

          <div class="col-lg-5 mr-lg-5 col-12">
            <div class="google-map w-100">
              <iframe
                src="https://maps.google.com/maps?q=madurai&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="400"
                height="300"
                frameborder="0"
                style="border:0"
                allowfullscreen
              ></iframe>
            </div>

            <div class="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
              <div class="contact-info-item">
                <h3 class="mb-3 text-white">Say hello</h3>
                <p class="footer-text mb-0">+91 99448 11497</p>
                <p>
                  <a href="mailto:hello@company.co">jayasurya.work@gmail.com</a>
                </p>
              </div>

              <ul class="social-links">
                <li>
                  <a
                    href="#"
                    class="uil uil-dribbble"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Dribbble"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    class="uil uil-instagram"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    class="uil uil-youtube"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Youtube"
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 col-12">
            <div class="contact-form">
              <h2 class="mb-4">Interested to work together? Let's talk</h2>

              <form
                action=""
                method="get"
              >
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      placeholder="Your Name"
                      id="name"
                    >
                  </div>

                  <div class="col-lg-6 col-12">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Email"
                      id="email"
                    >
                  </div>

                  <div class="col-12">
                    <textarea
                      name="message"
                      rows="6"
                      class="form-control"
                      id="message"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div class="ml-lg-auto col-lg-5 col-12">
                    <input
                      type="submit"
                      class="form-control submit-btn"
                      value="Send Button"
                    >
                  </div>
                </div>
                </form>
            </div>
          </div>

        </div>
      </div>
      </section>

  </div>
</template>

<script>
export default {};
</script>

<style >
.wrap{
  padding: 50px 0 125.5px 0;
}
</style>
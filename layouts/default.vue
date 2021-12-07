<template>
<div :class="[isActive ? '' : 'dark-mode']"  >
        <div >
        <nav class="navbar navbar-expand-sm navbar-light" >
        <div class="container">
            <nuxt-link to="About" class="navbar-brand"><i class='uil uil-user'></i> Portfolio</nuxt-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <nuxt-link to="About" class="nav-link"><span data-hover="About">About</span></nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="Project" class="nav-link"><span data-hover="Projects">Projects</span></nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="Resume" class="nav-link"><span data-hover="Resume">Resume</span></nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="Contact" class="nav-link"><span data-hover="Contact">Contact</span></nuxt-link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-lg-auto">
                    <div class="ml-lg-4">
                      <div class="color-mode d-lg-flex justify-content-center align-items-center" @click="dark()">
                        <i class="fa fa-adjust"></i>
                        Dark mode
                      </div>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    <Nuxt />
    <Footer />
</div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
  components: { Footer },
   data: () => {
    return {
      signUp: false,
      isActive: true
    };
  },
  methods: {
  dark() {
    this.isActive = !this.isActive;
    }
  }};
</script>

<style >
i{
  padding-right:5px;
  padding-top:1px;
}
</style>
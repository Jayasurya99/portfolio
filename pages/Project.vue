<template>
    <div id="app">
    <div id="information">
      <h1>Crazy Design's Starts Here</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at quasi officiis sunt. Nemo ut, dolorem fuga quae velit ullam natus minima tenetur deleniti sequi voluptates minus temporibus accusantium incidunt.</p>
    </div>

    <div id="artwork">
      <transition-group id="carousel" tag="div" name="slide">
        <img v-for="art in arts" :src="art.source" alt="" :key="art.id">
      </transition-group>
      <div id="btns">
        <button class="arrow" @click="prevArt">&lt;</button>
        <button class="arrow" @click="nextArt">&gt;</button>
     
        <transition name="fade">
          <p class="counter" :key="currentArt" v-cloak>{{ counter }} / 4</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
          
  data() {
      return{
        arts: [
        {id: '1', source: require('@/assets/images/project/Launch.png')},
        {id: '2', source: require('@/assets/images/project/Test.png')},
        {id: '3', source: require('@/assets/images/project/Updates.png')},
        {id: '4', source: require('@/assets/images/project/Contact.png')},
    ],
    hidden: [],
    counter: 1,
      }
    
  },

  methods: {
    nextArt() {
      if(this.arts.length > 1) {
        const hide = this.arts.shift();
        this.hidden.push(hide);
        this.counter++;
      }
    },
    prevArt() {
      if(this.hidden.length > 0) {
        const unhide = this.hidden.pop();
        this.arts.unshift(unhide);
        this.counter--;
      }
    },
  },
  
  computed: {
    currentArt() {
    return this.arts[0].id;
        
    }
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Cinzel');

:root {
  --timing: 500ms;
  --img-width: 1080px;
  --outer-width: 100vw;
  --center-padding: calc((var(--outer-width) - var(--img-width)) / 2);
}

[v-cloak] {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  height: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
  font-family: 'Cinzel', serif;
}

#information {
  max-width: 100vw;
  padding:180px 5px 0 5px;
  display: block;
}

#information h1 {
  width: 60%;
  font-size: calc(18px + 2vw);
  color: hsl(0, 0%, 20%);
  font-weight: 100;
}

#information p {
  margin-top: 1em;
  font-size: calc(10px + .5vw);
  color: hsl(0, 0%, 50%);
  font-family: sans-serif;
}

#artwork {
  display: inline-block;
}


#carousel {
  display: flex;
  margin-left: var(--center-padding);
  margin-top: 30px;
}

#carousel img {
  width: var(--img-width);
  margin-right: 10px;
  z-index: 2;
  border-radius:5px;
  box-shadow: 3px 5px 20px hsla(0, 0%, 0%, .5);
}

#btns {
  width: var(--img-width);
  margin-left: var(--center-padding);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1em 0;
  position: relative;
  margin-bottom:2.26rem;
}

button {
  border: 1px solid #ccc;
  background: none;
  padding: .5em 1.5em;
  font-size: calc(12px + .2vw);
  position: relative;
}

.counter {
  color: hsl(0, 0%, 70%);
  position: absolute;
  right: 10px;
  margin-top: 0px;
  font-size: 12px;
  font-size: calc(12px + .1vw);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity var(--timing);
  position: absolute;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: var(--timing);
}

.slide-leave-active {
  position: absolute;
  z-index: 1;
  transition: var(--timing);
}

.slide-enter, .slide-leave-to {
  transform: scale(0.7);
}

.slide-move {
  transition: var(--timing);
}


@media (min-width: 700px) {
  :root {
    --img-width: 80vw;
  }
}

@media (min-width: 850px) {
  :root {
    --img-width: 70vw;
  }
}

@media (min-width: 950px) {
  :root {
    --img-width: 60vw;
    --outer-width: 70vw;
  }

  #app {
    grid-template-rows: 1fr;
    grid-template-columns: 30vw 70vw;
  }

  #information {
    justify-content: center;
  }

  #information h1 {
    width: 60%;
    margin-left: 10%;
    font-size: calc(18px + 1.5vw);

  }

  #information p {
    width: 70%;
    margin-left: 10%;
    margin-top: 1em;
    font-size: calc(10px + .5vw);
  }

  #artwork {
    justify-content: start;
  }

  .artid-container {
    width: var(--outer-width);
  }
}
</style>
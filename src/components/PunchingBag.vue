<template>
  <div>

    <div v-bind:class="{burst: ended}" id="bag"></div>
    <h3 v-show="ended"> You Win!</h3>

<!-- create health bar by placing nested div with height -->
    <div id="bag-health">
      <div v-bind:style="{width: health + '%'}"></div>
    </div>

    <div id="controls">
      <button v-show="!ended" v-on:click="punchB"> Punch </button>
      <button v-on:click="restart"> Restart </button>
    </div>

  </div>
</template>

<script>
import sound from '../assets/jab.wav'

export default {
  name: 'PunchingBag',
  data () {
    return {
      health: 100,
      ended: false
    }
  },
  methods: {
    punchB: function () {
      this.health -= 10

      const audio = new Audio(sound)
      audio.play()

      if (this.health === 0) {
        this.ended = true
      }
    },
    restart: function () {
      this.health = 100
      this.ended = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#bag {
  width: 200px;
  height: 500px;
  background: url(../assets/bag.png) center no-repeat;
  background-size: 80%;
  margin: auto
}

#bag.burst {
  width: 200px;
  height: 500px;
  background: url(../assets/bag-burst.png) center no-repeat;
  background-size: 80%;
  margin: auto
}

#bag-health {
  width: 300px;
  border: 2px solid gray;
  margin: 0 auto 20px auto;
  background: gray;
}

#bag-health div {
  height: 20px;
  background: crimson;
}
</style>

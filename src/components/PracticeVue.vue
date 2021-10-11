<template>
  <div class="Test">
    <h1>{{ msg }}</h1>
    <div> "changing works pretty fast here" </div>
    <h1> Data & Methods </h1>
    <p> <strong>Use double curly brackets to output returned data </strong></p>
    <p>Job is: {{ job }}</p>
    <p> Use 'this' keyword when accessing data inside functions</p>
    <p>Function call: {{ greet('Evening') }}</p>

    <h1> Data Binding </h1>
    <p> <strong>v-bind: is used to bind data to attributes</strong></p>
    <a v-bind:href="website"> Binding a website to a href <br> </a>
    <p> Binding to input value </p>
    <input type="text" v-bind:value="job" />

    <h1> Events </h1>
     <p> <strong>v-on: is used to register event handlers to elements <br>
     event handlers can access data and methods within scope <br>
     shortcut for v-on: is @: </strong></p>
    <p> parantheses do not have to be used when calling a function in an event handler </p>
    <p> {{ age }} </p>
    <button v-on:click="add(1)"> Add a Year </button>
    <button v-on:click="age--"> Subtract a Year </button>
    <button v-on:dblclick="add(10)"> Add 10 Years </button>
    <button v-on:dblclick="subtract(10)"> Subtract 10 Years </button>

    <p> Tracking events with an event handler <br>
    'event' is automatically passed to function without needing to explicitly pass 'updateXY(event)' </p>
  <div id="canvas" v-on:mousemove="updateXY"> {{ X }}, {{ Y }}</div>

  </div>
</template>

<script>
export default {
  name: 'PracticeVue',
  data () {
    return {
      msg: 'Beginning Practice',
      job: 'Developer',
      website: 'http://www.google.ca',
      age: 27,
      X: 0,
      Y: 0
    }
  },
  methods: {
    greet: function (time) {
      return `Good ${time} ${this.job}`
    },
    add: function (inc) {
      this.age += inc
    },
    subtract: function (dec) {
      this.age -= dec
    },
    updateXY: function (event) {
      this.X = event.offsetX
      this.Y = event.offsetY
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#canvas {
  width: 300px;
  margin-left: 100px;
  padding: 200px 200px 200px 200px;
  text-align: center;
  border: 1px solid #333;
}
</style>

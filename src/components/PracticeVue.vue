<template>
  <div class="Practice">
    <h1>{{ msg }}</h1>
    <div> "changing works pretty fast here" </div>
    <h1> Data & Methods </h1>
    <p> <strong>Use double curly brackets to output
      returned data </strong></p>

    <p>Job is: {{ job }}</p>
    <p> Use 'this' keyword when accessing data inside functions <br>
    must use the 'return' keyword inside function definition to return values</p>
    <p>Function call: {{ greet('Evening') }}</p>

    <h1> Data Binding </h1>
    <p> <strong>v-bind: is used to bind data to attributes</strong></p>

    <a v-bind:href="website"> Binding a website to a href
      (remember to preface site with https//) <br> </a>
    <p> Binding to input value </p>
    <input type="text" v-bind:value="job" />

    <h1> Events </h1>
    <p> <strong>v-on: is used to register event handlers to elements <br>
     event handlers can access data and methods within scope <br>
     shortcut for v-on: is @: </strong></p>
    <p> parantheses do not have to be used when calling a function in an event handler </p>

    <p> Age: {{ age }} </p>
    <button v-on:click="add(1)"> Add a Year </button>
    <button v-on:click="age--"> Subtract a Year </button>
    <button v-on:dblclick="add(10)"> Add 10 Years </button>
    <button v-on:dblclick="subtract(10)"> Subtract 10 Years </button>

    <p> Tracking events with an event handler <br>
    'event' is automatically passed to function without needing to explicitly pass 'updateXY(event)' </p>
    <div id="canvas" v-on:mousemove="updateXY"> {{ X }}, {{ Y }}</div>

    <h1> Event Modifiers </h1>
    <p> <strong>Modifiers add extra functionality to events</strong></p>
    <p> An example is using the 'once' modifier to the button for adding 10 years below</p>
    <p> Age: {{ age }} </p>
    <button v-on:click.once="add(10)"> Add 10 Years </button>
    <p> Another example is using 'prevent' to stop the default functionality</p>
    <a v-on:click.prevent="prevent" v-bind:href="website"> The default will be prevented </a>

    <h1> Keyboard Events </h1>
    <p> <strong> Used to capture events when inputing keyboard values </strong></p>

    <label> Name: </label>
    <input type="text" v-on:keyup='logName'/>
    <label> Hobby: </label>
    <input type="text" v-on:keyup='logHobby'/>
    <p> My name is: {{ name }}. My hobby is: {{ hobby }} </p>
    <p> Modifiers can be added to keyboard events as well. <br>
    The example below uses 'enter' as the only way for the value to be outputted</p>
    <label> Name: </label>
    <input type="text" v-on:keyup.enter='logName'/>
    <p> My name is: {{ name }} </p>

    <h1> 2 Way Data Binding </h1>
    <p> <strong> v-model='variable' can be used instead of using functions and events to capture input values </strong></p>

    <label> Hobby: </label>
    <input type="text" v-model="hobby"/>
    <p> My hobby is: {{ hobby }} </p>
    <p> Submitting values can be done by below </p>
    <button v-on:click="passValue"> Submit </button>
    <p> Submitted Value: {{ pass }} </p>

    <h1> Computed Properties </h1>
    <p> <strong> Computed properties have cache and the ability to check if its dependencies have been changed
      before re-running a function<br>
      Wheras methods will re-run all the associated functions of a dependency if any change to the dependency occurs <br>
      This makes computed properties preferable for performance optimization <br>
      Computed properties do not need parantheses when executed </strong></p>
    <p>Example: if A is clicked, B will not run if it is a computed property,
      wheras in methods, B will be run as well since Age is a dependency for both. </p>

    <button v-on:click="a++"> A </button>
    <button v-on:click="b--"> B </button>
    <p> Age + A: {{ calculateAgeA }} </p>
    <p> Age - B: {{ calculateAgeB }} </p>
    <p> {{ age }}</p>

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
      Y: 0,
      name: '',
      hobby: '',
      pass: '',
      a: 0,
      b: 0
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
    },
    prevent: function () {
      alert('prevented')
    },
    logName: function (event) {
      this.name = event.target.value
    },
    logHobby: function (event) {
      this.hobby = event.target.value
    },
    passValue: function () {
      this.pass = this.hobby
    }
  },
  computed: {
    calculateAgeA: function () {
      return this.age + this.a
    },
    calculateAgeB: function () {
      return this.age + this.b
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

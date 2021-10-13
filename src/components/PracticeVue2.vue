<template>
  <div class="Practice">
    <h1>{{ msg }}</h1>
    <h1> Dynamic CSS </h1>
    <p> <strong>Use v-bind: for class attributes <br>
    For dynamic classes, we must pass an object
    with key-value pairs: v-bind:class="{class name: boolean}"</strong></p>

    <div v-on:click="available = !available" v-bind:class="{available: available}">
      <span> Dynamic </span>
    </div>

    <p> <strong>Multiple classes can be passed to
    v-bind through a function that
    contains an object of multiple key-value pairs
    <br> The function will not be passed as an object,
    it will be passed as a regular function to an
    event handler <br> v-bind:class="dynamClass"</strong></p>

    <button v-on:click="available = !available">available</button>
    <button v-on:click="nearby = !nearby">nearby</button>
    <div v-bind:class="dynamClass">
      <span> Dynamic </span>
    </div>

    <h1> Conditionals </h1>
    <p> <strong>v-if="boolean variable" is used to conditionally display
      elements in the DOM depending on if the boolean variable
      is set to true or false <br>
      v-else-if="boolean variable" can be used to chain multiple
      conditionals in the same way (else if) works in vanilla
      JavaScript
      </strong></p>

    <button v-on:click="error = !error"> Toggle Error </button>
    <button v-on:click="success = !success"> Toggle Success </button>
    <p v-if="error"> Error Clicked </p>
    <p v-else-if="success"> Success Achieved! </p>

    <p> <strong>v-show="boolean variable" can also be used for
      conditionally displaying DOM elements. <br> The
      differences between v-if and v-show are that v-show does
      not support v-else, and v-show sets the display style of
      the element to none, instead of destroying it completely
      like v-if does <br>
      v-show is the preferred option if multiple toggles of
      conditionals are necessary
      </strong></p>

    <h1> Looping with through lists </h1>
    <p> <strong>v-for="element in array name" is used to loop
      through arrays. The syntax is similiar to the shorthand
      of looping in vanilla JavaScript, however "in" is used
      instead of "of"<br>
      The index can be utilized as follows:
      v-for="(element, index) in array name"<br>
      For cleaner markup, a template tag can be used instead
      of a div or p to only display the markup contained
      within instead of displaying
      <!-- eslint-disable-next-line -->
      the tag in the DOM, i.e: (< template></ template>)
      </strong></p>
    <h3> List of Developers </h3>
    <ul>
      <!-- eslint-disable-next-line -->
      <li v-for="developer in developers"> {{developer.name}} - {{developer.age}} </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'PracticeVue2',
  data () {
    return {
      msg: 'Practice 2',
      available: false,
      nearby: false,
      error: false,
      success: false,
      developers: [
        {
          name: 'Mary',
          age: 23
        },
        {
          name: 'Adam',
          age: 25
        },
        {
          name: 'Xu',
          age: 29
        }
      ]
    }
  },
  methods: {

  },
  computed: {
    dynamClass: function () {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  background: red;
  display: inline-block;
  padding: 10px;
  color: #fff;
  margin: 10px 0;
}

.available span {
  background: green;
}

.nearby span::after {
  content: "nearby";
  margin-left: 10px;
}

h1, h2 {
  font-weight: normal;
}
/* ul {
  list-style-type: none;
  padding: 0;
} */
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>

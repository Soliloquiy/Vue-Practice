<template>
  <div class="Test">
    <h1>{{ msg }}</h1>
    <div> "changing works pretty fast here" </div>
    <p>Job is: {{ job }}</p>
    <p>Function call: {{ greet('Evening') }}</p>
  </div>
</template>

<script>
export default {
  name: 'PracticeVue',
  data () {
    return {
      msg: 'Beginning Practice',
      job: 'Developer'
    }
  },
  methods: {
    greet: function (time) {
      return `Good ${time} ${this.job}`
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
</style>

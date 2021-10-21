<template>
  <div>
    <h1> {{ msg }} </h1>
    <section class="main">
      <!-- eslint-disable-next-line -->
    <ul v-for="developer in developers">
      <li v-on:click="developer.show = !developer.show">
        <h2> {{ developer.name }}<br> </h2>
        <h3 v-show="developer.show">{{ developer.experience }}</h3>
      </li>
    </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    developers: {
      type: Array,
      required: true
    }},
  name: 'Props',
  data () {
    return {
      msg: 'Developers - Click to see Specialty'
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  display: flex;
  flex-flow: column;
  width: 100%;
}

h1 {
  background: teal;
  padding: 20px;
}

.main {
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  background: rgb(112, 148, 142);
  border-radius: 15px;
  color: yellow;
}

li {
  list-style: none;
  box-shadow: 0 5px 15px;
  width: 250px;
  height: 100px;
  padding-top: 10px;
}
</style>

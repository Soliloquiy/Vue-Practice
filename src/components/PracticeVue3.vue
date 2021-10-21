<template>
  <div>
    <h1> Props </h1>
    <p> <strong> The parent component will use a v-bind
      in the nested component tag to pass the prop <br>
      v-bind:random prop name="propname"<br>
      Nested component will receive the prop by creating
      a prop object and receiving the prop <br> The prop can
      take different attributes to verify if the right type
      is passed, and whether the prop is required<br>
      props: { propname: { type: Array, required: true }}
      </strong></p>

    <Props v-bind:developers="developers"></Props>
  </div>
</template>

<script>
import Props from './PropsPracticeVue3.vue'
export default {
  components: {
    'Props': Props
  },
  name: 'PracticeVue3',
  data () {
    return {
      developers: [
        {
          name: 'Mary',
          experience: 'React',
          show: false
        },
        {
          name: 'Adam',
          experience: 'Vue',
          show: false
        },
        {
          name: 'Xu',
          experience: 'Vanilla JavaScript',
          show: false
        },
        {
          name: 'Roshi',
          experience: 'Python',
          show: false
        },
        {
          name: 'Tanasha',
          experience: 'NodeJS',
          show: false
        },
        {
          name: 'Joseph',
          experience: 'Ruby on Rails',
          show: false
        }
      ]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

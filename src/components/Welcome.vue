<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <div class="game-controls">
      <button @click="startGame">开始游戏</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to island war'
    }
  },
  methods: {
    startGame() {
      this.$router.push({
        name: 'LevelMap'
      });
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

<template>
  <div>
    <Game />
    <ListenToSockets />
  </div>
</template>


<script>
import Game from '@/components/Game';
import ListenToSockets from '@/components/ListenToSockets';

export default {
  name: 'App',
  components: {
    Game,
    ListenToSockets
  }
}
</script>


<style lang="scss">
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>

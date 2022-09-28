<template>
  <div class="container">
      <div class="grid">
        <template v-for="pokemon in pokemons">
          <PokeCard v-bind:name="pokemon.name" />
        </template>
      </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PokeCard from './PokeCard.vue'

export default defineComponent({
  components: {PokeCard},
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped>
div.container {
  padding: 32px;
}
div.grid.single-row{
  grid-template-columns: repeat(auto-fit, 160px);
}
div.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 32px 24px;

}
</style>
<template>
  <div class="card">
    <div class="text-center">
      <h2 class="pokemon-name">{{name}}</h2>
      <p class="pokemon-number"># {{number}}</p>
      <img v-bind:src="image" v-bind:alt="name">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getPokemonDetail } from '../../api'

export default defineComponent({
  data() {
    return {
      number: undefined,
      image: undefined
  }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  mounted: async function(){
    const details = await getPokemonDetail(this.name)
    this.number = details.id.toString().padStart(3, "0")
    this.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${details.id.toString().padStart(3, "0")}.png`
  }
})
</script>

<style scoped>
div.card{
  transition: all .7s;
  background-color: #495057;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 14px 12px;
}
.text-center{
  text-align: center;
}
.pokemon-name{
  font-size: 20px;
  text-transform: capitalize;
  color: #fff;
  text-align: center;
  margin-top: 14px;
  font-weight: 700;
  letter-spacing: 2px;
}
.pokemon-number{
  margin-top: 4px;
  color: #f2f2f2;
}
</style>
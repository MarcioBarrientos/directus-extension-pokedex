<template>
	<private-view title="Pokedex">
    <template #headline>PokeAPI</template>

    <template #title-outer:prepend>
      <v-button class="header-icon" rounded disabled icon secondary>
        <v-icon name="build" />
      </v-button>
    </template>
    <!-- Loading -->
    <div v-if="loading" style="margin: 25px auto; max-width: 50px">
      <v-progress-circular indeterminate />
    </div>
    <!-- Setup Error -->
    <Message v-if="!loading && setupMessage"
             icon="settings" title="Error" v-bind:subtitle="setupTitle">
      {{ setupMessage }}
    </Message>

    <PokemonList v-if="!loading && !setupMessage" v-bind:pokemons="pokemons" />
  </private-view>
</template>

<script lang="ts">
import PokemonList from './components/Pokemon/PokemonList.vue'
import { defineComponent } from 'vue';
import {getPokemons} from './api'

export default defineComponent({
  components:{PokemonList},
  data(){
    return {
      loading: true,
      setupTitle: undefined,
      setupMessage: undefined,
      pokemons: undefined
    }
  },
  methods: {
    update: async function(){
      try{
        this.pokemons = await getPokemons()
      }
      catch (error){
        return this.displayError("No se pudo obtener la lista de pokemons", error)
      }
      this.loading = false;
    },
    displayError: function(title, message) {
      this.loading = false;
      this.setupTitle = title;
      this.setupMessage = message;
    }
  },
  mounted: async function() {
    this.loading = true;
    await this.update();
  }
});
</script>

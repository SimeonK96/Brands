<template>
  <div class="brands-grid">
    <BrandCard
      v-for="brand in brands"
      :key="brand.id"
      :brand="brand"
    />
  </div>
</template>

<script>
import BrandCard from '~/components/BrandCard.vue'

export default {
  name: 'BrandGrid',
  components: { BrandCard },
  props: {
    brands: { type: Array, required: true }
  }
}
</script>


-->
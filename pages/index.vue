<template>
  <div class="brands-page">

    <div class="container">

      <h1 class="page-title">
        Brands
      </h1>

      <BrandGrid :brands="brands" />

    </div>

  </div>
</template>


<script>
import { getBrands } from '~/services/brands'

export default {
  name: 'BrandsPage',

  data() {
    return {
      brands: getBrands()
    }
  }
}
</script>

<template>
  <NuxtLink :to="`/brands/${brand.id}`" class="brand-card">
    <div class="brand-image">
      <div class="brand-placeholder">
        {{ brand.name }}
      </div>
    </div>

    <div class="brand-info">
      <h2>{{ brand.name }}</h2>

      <span class="status" :class="{
        'status-active': brand.status === 'active',
        'status-inactive': brand.status === 'inactive'
      }">
        {{ brand.status }}
      </span>
    </div>

    <div class="brand-details">
      <div class="detail">
        <span>Country</span>
        <strong>{{ brand.featured_details?.country || brand.country || '—' }}</strong>
      </div>
      <div class="detail">
        <span>Products</span>
        <strong>{{ brand.featured_details?.products || brand.products || '—' }}</strong>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'BrandCard',

  props: {
    brand: {
      type: Object,
      required: true
    }
  }
}
</script>


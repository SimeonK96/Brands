<!-- Currently not used -->

<template>
  <section class="brand-details">
    <NuxtLink to="/brands" class="back-link">← Back to brands</NuxtLink>

    <div class="brand-details__header">
      <div class="brand-details__image">
        <img :src="brand.image" :alt="`${brand.name} logo`" />
      </div>

      <div class="brand-details__info">
        <h1>{{ brand.name }}</h1>

        <span class="status" :class="`status--${brand.status}`">{{ brand.status }}</span>

        <div class="brand-details__meta">
          <div>
            <span class="meta-label">Country</span>
            <span class="meta-value">{{ country }}</span>
          </div>

          <div>
            <span class="meta-label">Products</span>
            <span class="meta-value">{{ products }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="brand-details__form">
      <h2>Issue Gift Card</h2>
      <slot name="form" />
    </div>

    <div class="brand-details__info-extended">
      <div class="brand-information">
        <div class="information-row"><span>Id</span><strong>{{ brand.id }}</strong></div>
        <div class="information-row"><span>Company</span><strong>{{ company }}</strong></div>
        <div class="information-row"><span>Category</span><strong>{{ category }}</strong></div>
        <div class="information-row"><span>Phone</span><strong>{{ phone }}</strong></div>

        <div class="keywords-section">
          <span class="information-label">Keywords</span>
          <div class="keywords">
            <span v-for="(keyword, index) in visibleKeywords" :key="index" class="keyword">{{ keyword }}</span>
          </div>
          <button v-if="(brand.keywords || []).length > 5" type="button" class="expand-button" @click="showAllKeywords = !showAllKeywords">
            {{ showAllKeywords ? 'Show less' : 'Show more' }}
          </button>
        </div>
      </div>

      <div class="social-networks">
        <span v-for="network in brand.socialNetworks || []" :key="network.name" class="social-icon" :title="network.name">{{ network.icon }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BrandDetails',
  props: {
    brand: { type: Object, required: true }
  },
  data() {
    return { showAllKeywords: false }
  },
  computed: {
    country() {
      return this.brand.featured_details?.country || this.brand.country || '—'
    },
    products() {
      return this.brand.featured_details?.products || this.brand.products || '—'
    },
    company() {
      return this.brand.other_details?.company || this.brand.company || '—'
    },
    category() {
      return this.brand.other_details?.category || this.brand.category || '—'
    },
    phone() {
      return this.brand.other_details?.phone || this.brand.phone || '—'
    },
    visibleKeywords() {
      if (!this.brand) return []
      if (this.showAllKeywords) return this.brand.keywords || []
      return (this.brand.keywords || []).slice(0, 5)
    }
  }
}
</script>
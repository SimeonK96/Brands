<template>
  <div class="brand-details-page">

    <div class="container">

      <h1 class="page-title">
        Issue gift card
      </h1>


      <div
        v-if="brand"
        class="issue-layout"
      >
        

        <!-- =====================================
             LEFT: BRAND DETAILS
        ====================================== -->

        <div class="brand-details-card">

          <!-- Logo -->
          <div class="brand-logo">

            <div class="brand-logo-placeholder">
              {{ brand.name }}
            </div>

          </div>


          <!-- Name + status -->
          <div class="brand-name-section">

            <h2>
              {{ brand.name }}
            </h2>

            <span
              class="status"
              :class="{
                'status-active':
                  brand.status === 'active',

                'status-inactive':
                  brand.status === 'inactive'
              }"
            >
              {{ brand.status }}
            </span>

          </div>


          <!-- Country + products -->
          <div class="featured-details">

            <div class="featured-detail">

              <span>
                Country
              </span>

              <strong>
                {{ brand.country }}
              </strong>

            </div>


            <div class="featured-detail">

              <span>
                Products
              </span>

              <strong>
                {{ brand.products }}
              </strong>

            </div>

          </div>


          <!-- Additional information -->
          <div class="brand-information">

            <div class="information-row">

              <span>
                Id
              </span>

              <strong>
                {{ brand.id }}
              </strong>

            </div>


            <div class="information-row">

              <span>
                Company
              </span>

              <strong>
                {{ brand.company }}
              </strong>

            </div>


            <div class="information-row">

              <span>
                Category
              </span>

              <strong>
                {{ brand.category }}
              </strong>

            </div>


            <div class="information-row">

              <span>
                Phone
              </span>

              <strong>
                {{ brand.phone }}
              </strong>

            </div>


            <!-- Keywords -->
            <div class="keywords-section">

              <span class="information-label">
                Keywords
              </span>

              <div class="keywords">

                <span
                  v-for="(keyword, index) in visibleKeywords"
                  :key="index"
                  class="keyword"
                >
                  {{ keyword }}
                </span>

              </div>


              <button
                v-if="brand.keywords && brand.keywords.length > 5"
                type="button"
                class="expand-button"
                @click="showAllKeywords = !showAllKeywords"
              >
                {{ showAllKeywords
                  ? 'Show less'
                  : 'Show more'
                }}
              </button>

            </div>

          </div>


          <!-- Social networks -->
          <div class="social-networks">

            <span
              v-for="network in (brand.socialNetworks || [])"
              :key="network.name"
              class="social-icon"
              :title="network.name"
            >
              {{ network.icon }}
            </span>

          </div>

        </div>



        <!-- =====================================
            RIGHT: GIFT CARD FORM
        ====================================== -->

        <div class="gift-form">

            <!-- =====================================
                SECTION 1 - GIFT INFORMATION
            ====================================== -->

            <div class="form-card">

                <h2 class="section-title">
                Gift information
                </h2>


                <!-- Gift amount -->

                <div class="form-section">

                <label class="form-label">
                    Select gift amount
                </label>

                <div class="amount-options">

                    <button
                    v-for="amount in amounts"
                    :key="amount"
                    type="button"
                    class="amount-button"
                    :class="{
                        'amount-button-selected':
                        firstAmount === amount
                    }"
                    @click="selectFirstAmount(amount)"
                    >
                    ${{ amount }}
                    </button>

                    <button
                    type="button"
                    class="amount-button"
                    :class="{
                        'amount-button-selected':
                        firstAmount === 'custom'
                    }"
                    @click="selectFirstAmount('custom')"
                    >
                    Custom
                    </button>

                </div>

                </div>


                <!-- Delivery type -->

                <div class="form-section">

                <label class="form-label">
                    Delivery type
                </label>

                <div class="radio-group">

                    <label class="radio-option">

                    <input
                        v-model="firstDeliveryType"
                        type="radio"
                        value="personal"
                    >

                    <span>
                        Personal
                    </span>

                    </label>


                    <label class="radio-option">

                    <input
                        v-model="firstDeliveryType"
                        type="radio"
                        value="gift"
                    >

                    <span>
                        Send as gift
                    </span>

                    </label>

                </div>

                </div>


                <!-- Recipient -->

                <div class="recipient-grid">

                <!-- Email -->

                <div class="form-field">

                    <label>
                    Recipient email <span class="required">*</span>
                    </label>

                    <input
                    v-model.trim="firstRecipientEmail"
                    type="email"
                    placeholder="Enter recipient email"
                    :class="{
                        'input-error':
                        firstRecipientEmailError
                    }"
                    @input="validateFirstEmail"
                    @blur="validateFirstEmail"
                    >

                    <span
                    v-if="firstRecipientEmailError"
                    class="validation-error"
                    >
                    {{ firstRecipientEmailError }}
                    </span>

                </div>


                <!-- Phone -->

                <div class="form-field">

                    <label>
                    Recipient phone <span class="required">*</span>
                    </label>

                    <div
                    class="phone-input"
                    :class="{
                        'phone-input-error':
                        firstRecipientPhoneError
                    }"
                    >

                    <span class="phone-prefix">
                        +65
                    </span>

                    <input
                        v-model.trim="firstRecipientPhone"
                        type="tel"
                        placeholder="Enter recipient phone"
                        @input="validateFirstPhone"
                        @blur="validateFirstPhone"
                    >

                    </div>

                    <span
                    v-if="firstRecipientPhoneError"
                    class="validation-error"
                    >
                    {{ firstRecipientPhoneError }}
                    </span>

                </div>

                </div>


                <!-- Send -->

                <div class="send-row">

                <button
                    type="button"
                    class="send-button"
                    @click="validateFirstSection"
                >
                    Send
                </button>

                </div>

            </div>



            <!-- =====================================
                SECTION 2 - CUSTOM AMOUNT
            ====================================== -->

            <div class="form-card">

                <h2 class="section-title">
                Gift amount
                </h2>


                <div class="form-section">

                <label class="form-label">
                    Select gift amount
                </label>

                <div class="amount-options">

                    <button
                    v-for="amount in amounts"
                    :key="`custom-${amount}`"
                    type="button"
                    class="amount-button"
                    :class="{
                        'amount-button-selected':
                        customAmountSelection === amount
                    }"
                    @click="selectCustomAmount(amount)"
                    >
                    ${{ amount }}
                    </button>


                    <button
                    type="button"
                    class="amount-button"
                    :class="{
                        'amount-button-selected':
                        customAmountSelection === 'custom'
                    }"
                    @click="selectCustomAmount('custom')"
                    >
                    Custom
                    </button>

                </div>

                </div>


                <!-- Custom amount input -->

                <div class="custom-amount-row">

                <span class="currency-symbol">
                    $
                </span>

                <input
                    v-model.trim="customAmount"
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="Enter custom amount"
                    :class="{
                    'input-error':
                        customAmountError
                    }"
                    @input="validateCustomAmount"
                    @blur="validateCustomAmount"
                >

                </div>


                <span
                v-if="customAmountError"
                class="validation-error"
                >
                {{ customAmountError }}
                </span>

            </div>



            <!-- =====================================
                SECTION 3 - DELIVERY / RECIPIENT
            ====================================== -->

            <div class="form-card">

                <h2 class="section-title">
                Delivery information
                </h2>


                <!-- Delivery type -->

                <div class="form-section">

                <label class="form-label">
                    Delivery type
                </label>

                <div class="radio-group">

                    <label class="radio-option">

                    <input
                        v-model="deliveryType"
                        type="radio"
                        value="personal"
                    >

                    <span>
                        Personal
                    </span>

                    </label>


                    <label class="radio-option">

                    <input
                        v-model="deliveryType"
                        type="radio"
                        value="gift"
                    >

                    <span>
                        Send as gift
                    </span>

                    </label>

                </div>

                </div>


                <!-- Sender + Recipient -->

                <div class="recipient-grid">

                <!-- Sender name -->

                <div class="form-field">

                    <label>
                    Sender name <span class="required">*</span>
                    </label>

                    <input
                    v-model.trim="senderName"
                    type="text"
                    placeholder="Enter sender name"
                    :class="{
                        'input-error': senderNameError
                    }"
                    @input="senderNameError = ''"
                    @blur="validateSenderName"
                    >

                    <span
                    v-if="senderNameError"
                    class="validation-error"
                    >
                    {{ senderNameError }}
                    </span>

                </div>


                <!-- Recipient name -->

                <div class="form-field">

                    <label>
                    Recipient name <span class="required">*</span>
                    </label>

                    <input
                    v-model.trim="recipientName"
                    type="text"
                    placeholder="Enter recipient name"
                    :class="{
                        'input-error': recipientNameError
                    }"
                    @input="recipientNameError = ''"
                    @blur="validateRecipientName"
                    >

                    <span
                    v-if="recipientNameError"
                    class="validation-error"
                    >
                    {{ recipientNameError }}
                    </span>

                </div>


                <!-- Recipient email -->

                <div class="form-field">

                    <label>
                    Recipient email <span class="required">*</span>
                    </label>

                    <input
                    v-model.trim="recipientEmail"
                    type="email"
                    placeholder="Enter recipient email"
                    :class="{
                        'input-error': recipientEmailError
                    }"
                    @input="validateRecipientEmail"
                    @blur="validateRecipientEmail"
                    >

                    <span
                    v-if="recipientEmailError"
                    class="validation-error"
                    >
                    {{ recipientEmailError }}
                    </span>

                </div>


                <!-- Recipient phone -->

                <div class="form-field">

                    <label>
                    Recipient phone <span class="required">*</span>
                    </label>

                    <div
                    class="phone-input"
                    :class="{
                        'phone-input-error':
                        recipientPhoneError
                    }"
                    >

                    <span class="phone-prefix">
                        +65
                    </span>

                    <input
                        v-model.trim="recipientPhone"
                        type="tel"
                        placeholder="Enter recipient phone"
                        @input="validateRecipientPhone"
                        @blur="validateRecipientPhone"
                    >

                    </div>

                    <span
                    v-if="recipientPhoneError"
                    class="validation-error"
                    >
                    {{ recipientPhoneError }}
                    </span>

                </div>

                </div>


                <!-- Delivery time -->

                <div class="form-section delivery-time">

                <label class="form-label">
                    Delivery time
                </label>

                <div class="radio-group">

                    <label class="radio-option">

                    <input
                        v-model="deliveryTime"
                        type="radio"
                        value="immediate"
                    >

                    <span>
                        Immediately
                    </span>

                    </label>


                    <label class="radio-option">

                    <input
                        v-model="deliveryTime"
                        type="radio"
                        value="custom"
                    >

                    <span>
                        Custom
                    </span>

                    </label>

                </div>

                </div>


                <!-- Custom delivery date -->

                <div
                v-if="deliveryTime === 'custom'"
                class="delivery-custom"
                >

                <div class="delivery-date-field">

                    <label class="form-label">
                    Delivery date <span class="required">*</span>
                    </label>

                    <input
                    v-model="deliveryDate"
                    type="date"
                    :class="{
                        'input-error': deliveryDateError
                    }"
                    @change="validateDeliveryDate"
                    @blur="validateDeliveryDate"
                    >

                    <span
                    v-if="deliveryDateError"
                    class="validation-error"
                    >
                    {{ deliveryDateError }}
                    </span>

                </div>


                <div class="period-field">

                    <label class="form-label">
                    Period
                    </label>

                    <div class="period-options">

                    <button
                        v-for="period in periods"
                        :key="period"
                        type="button"
                        class="period-button"
                        :class="{
                        'period-button-selected':
                            deliveryPeriod === period
                        }"
                        @click="deliveryPeriod = period"
                    >
                        {{ period }}
                    </button>

                    </div>

                </div>

                </div>


                <!-- Gift message -->

                <div class="form-field gift-message-field">

                <label>
                    Gift message <span class="required">*</span>
                </label>

                <textarea
                    v-model.trim="giftMessage"
                    placeholder="Enter gift message"
                    :class="{
                    'input-error': giftMessageError
                    }"
                    @input="giftMessageError = ''"
                    @blur="validateGiftMessage"
                ></textarea>

                <span
                    v-if="giftMessageError"
                    class="validation-error"
                >
                    {{ giftMessageError }}
                </span>

                </div>


                <!-- Final send -->

                <div class="send-row">

                <button
                    type="button"
                    class="send-button"
                    @click="submitGiftCard"
                >
                    Send
                </button>

                </div>

            </div>

        </div>

      </div>


      <!-- Brand not found -->
      <div
        v-else
        class="not-found"
      >
        Brand not found.
      </div>

    </div>

  </div>
</template>


<script>
import { getBrandById } from '~/services/brands'

export default {
  name: 'BrandDetailsPage',

  data() {
    return {
      brand: null,

      showAllKeywords: false,

      amounts: [
        10,
        20,
        30,
        40
      ],

      firstAmount: 30,

      customAmountSelection: 'custom',

      customAmount: '',

      customAmountError: '',


      /* -----------------------------
         First delivery section
      ----------------------------- */

      firstDeliveryType: 'personal',

      firstRecipientEmail: '',

      firstRecipientPhone: '',

      firstRecipientEmailError: '',

      firstRecipientPhoneError: '',


      /* -----------------------------
         Delivery information
      ----------------------------- */

      deliveryType: 'gift',

      senderName: '',

      recipientName: '',

      recipientEmail: '',

      recipientPhone: '',

      senderNameError: '',

      recipientNameError: '',

      recipientEmailError: '',

      recipientPhoneError: '',


      /* -----------------------------
         Delivery time
      ----------------------------- */

      deliveryTime: 'immediate',

      deliveryDate: '',

      deliveryDateError: '',


      /* -----------------------------
         Period
      ----------------------------- */

      periods: [
        'Morning',
        'Afternoon',
        'Evening'
      ],

      deliveryPeriod: 'Afternoon',


      /* -----------------------------
         Gift message
      ----------------------------- */

      giftMessage: '',

      giftMessageError: ''
    }
  },

  computed: {

    visibleKeywords() {

      if (!this.brand) {
        return []
      }

      if (this.showAllKeywords) {
        return this.brand.keywords || []
      }

      return (this.brand.keywords || []).slice(0, 5)
    }

  },

  created() {

    this.brand = getBrandById(
      this.$route.params.id
    )

  },

  methods: {

    /* =====================================
       FIRST FORM
    ====================================== */

    selectFirstAmount(amount) {

      this.firstAmount = amount

      if (amount !== 'custom') {
        this.customAmount = ''
        this.customAmountError = ''
      }

    },


    validateFirstEmail() {

      if (!this.firstRecipientEmail) {

        this.firstRecipientEmailError =
          'Please enter recipient email'

        return false
      }

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailRegex.test(this.firstRecipientEmail)) {

        this.firstRecipientEmailError =
          'Please enter a valid email address'

        return false
      }

      this.firstRecipientEmailError = ''

      return true
    },


    validateFirstPhone() {

      if (!this.firstRecipientPhone) {

        this.firstRecipientPhoneError =
          'Please enter recipient phone'

        return false
      }

      const phoneRegex =
        /^[0-9]{7,15}$/

      if (!phoneRegex.test(this.firstRecipientPhone)) {

        this.firstRecipientPhoneError =
          'Please enter a valid phone number'

        return false
      }

      this.firstRecipientPhoneError = ''

      return true
    },


    validateFirstSection() {

      const emailValid =
        this.validateFirstEmail()

      const phoneValid =
        this.validateFirstPhone()

      if (!emailValid || !phoneValid) {
        return
      }

      console.log('First gift information:', {
        amount: this.firstAmount,
        deliveryType: this.firstDeliveryType,
        recipientEmail: this.firstRecipientEmail,
        recipientPhone: this.firstRecipientPhone
      })

    },


    /* =====================================
       CUSTOM AMOUNT
    ====================================== */

    selectCustomAmount(amount) {

      this.customAmountSelection = amount

      if (amount !== 'custom') {

        this.customAmount = amount

        this.customAmountError = ''

      } else {

        this.customAmount = ''
      }

    },


    validateCustomAmount() {

      if (
        this.customAmountSelection !== 'custom'
      ) {
        this.customAmountError = ''
        return true
      }


      if (!this.customAmount) {

        this.customAmountError =
          'Please enter custom amount'

        return false
      }


      if (Number(this.customAmount) <= 0) {

        this.customAmountError =
          'Amount must be greater than 0'

        return false
      }


      this.customAmountError = ''

      return true
    },


    /* =====================================
       SENDER / RECIPIENT
    ====================================== */

    validateSenderName() {

      if (!this.senderName) {

        this.senderNameError =
          'Please enter sender name'

        return false
      }

      this.senderNameError = ''

      return true
    },


    validateRecipientName() {

      if (!this.recipientName) {

        this.recipientNameError =
          'Please enter recipient name'

        return false
      }

      this.recipientNameError = ''

      return true
    },


    validateRecipientEmail() {

      if (!this.recipientEmail) {

        this.recipientEmailError =
          'Please enter recipient email'

        return false
      }


      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/


      if (!emailRegex.test(this.recipientEmail)) {

        this.recipientEmailError =
          'Please enter a valid email address'

        return false
      }


      this.recipientEmailError = ''

      return true
    },


    validateRecipientPhone() {

      if (!this.recipientPhone) {

        this.recipientPhoneError =
          'Please enter recipient phone'

        return false
      }


      const phoneRegex =
        /^[0-9]{7,15}$/


      if (!phoneRegex.test(this.recipientPhone)) {

        this.recipientPhoneError =
          'Please enter a valid phone number'

        return false
      }


      this.recipientPhoneError = ''

      return true
    },


    /* =====================================
       DELIVERY DATE
    ====================================== */

    validateDeliveryDate() {

      if (this.deliveryTime !== 'custom') {

        this.deliveryDateError = ''

        return true
      }


      if (!this.deliveryDate) {

        this.deliveryDateError =
          'Please select delivery date'

        return false
      }


      this.deliveryDateError = ''

      return true
    },


    /* =====================================
       GIFT MESSAGE
    ====================================== */

    validateGiftMessage() {

      if (!this.giftMessage) {

        this.giftMessageError =
          'Please enter gift message'

        return false
      }

      this.giftMessageError = ''

      return true
    },


    /* =====================================
       FINAL SUBMISSION
    ====================================== */

    submitGiftCard() {

      const customAmountValid =
        this.validateCustomAmount()


      const senderValid =
        this.validateSenderName()


      const recipientNameValid =
        this.validateRecipientName()


      const emailValid =
        this.validateRecipientEmail()


      const phoneValid =
        this.validateRecipientPhone()


      const dateValid =
        this.validateDeliveryDate()


      const messageValid =
        this.validateGiftMessage()


      if (
        !customAmountValid ||
        !senderValid ||
        !recipientNameValid ||
        !emailValid ||
        !phoneValid ||
        !dateValid ||
        !messageValid
      ) {
        return
      }


      const giftCard = {

        brand: {
          id: this.brand.id,
          name: this.brand.name
        },

        amount:
          this.customAmountSelection === 'custom'
            ? Number(this.customAmount)
            : this.customAmountSelection,

        deliveryType:
          this.deliveryType,

        senderName:
          this.senderName,

        recipientName:
          this.recipientName,

        recipientEmail:
          this.recipientEmail,

        recipientPhone:
          this.recipientPhone,

        deliveryTime:
          this.deliveryTime,

        deliveryDate:
          this.deliveryDate,

        deliveryPeriod:
          this.deliveryPeriod,

        giftMessage:
          this.giftMessage

      }


      console.log('Gift card submitted:', giftCard)

      // mark success and show confirmation UI
      this.submitSuccess = true

    }

  }
}
</script>
<script setup>
import { useMainStore } from '@/stores/main'
import { useForm, Head } from '@inertiajs/inertia-vue3'
import { ref } from 'vue'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormControl from '@/components/FormControl.vue'
import FormField from '@/components/FormField.vue'
import DividerHorizontal from '@/components/DividerHorizontal.vue'
import BaseButton from '@/components/BaseButton.vue'
import FormValidationErrors from '@/components/FormValidationErrors.vue'

useMainStore().fullScreenToggle(true)

const form = useForm({
  password: ''
})

const passwordInput = ref(null)

const submit = () => {
  form.post(route('password.confirm'), {
    onFinish: () => {
      form.reset()

      passwordInput.value?.focus()
    }
  })
}
</script>

<template>
  <Head title="Secure Area" />

  <SectionFullScreen
    v-slot="{ cardClass, cardRounded }"
    bg="login"
  >
    <CardBox
      :class="cardClass"
      :rounded="cardRounded"
      form
      @submit.prevent="submit"
    >
      <FormValidationErrors />

      <FormField>
        <div class="mb-4 text-sm text-gray-600">
          This is a secure area of the application. Please confirm your password before continuing.
        </div>
      </FormField>

      <FormField
        label="Password"
        label-for="password"
        help="Please enter your password to confirm"
      >
        <FormControl
          id="password"
          @set-ref="passwordInput = $event"
          v-model="form.password"
          type="password"
          required
          autocomplete="current-password"
        />
      </FormField>

      <DividerHorizontal />

      <BaseButton
        type="submit"
        color="info"
        label="Confirm"
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
      />
    </CardBox>
  </SectionFullScreen>
</template>

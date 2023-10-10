<template>
  <form @submit="onSubmit">
    <n-date-picker
      v-model:value="startDate.value"
      :ref="(startDate.ref as VNodeRef)"
    />
    <n-text
      v-if="errors.startDate"
      type="error"
      tag="p"
      >Start date is required</n-text
    >
    <n-date-picker
      v-model:value="endDate.value"
      :ref="(endDate.ref as VNodeRef)"
    />
    <n-text
      v-if="errors.endDate"
      type="error"
      tag="p"
      >Start date is required</n-text
    >
    <br />
    <br />
    <n-button attr-type="submit"> Make Reservation </n-button>
  </form>
</template>

<script lang="ts" setup>
import { toast } from 'vue-sonner'
import { useForm } from 'vue-hooks-form'
import useStore from '../store'
import { NDatePicker, NButton, NText } from 'naive-ui'
import type { Hotel, Dates } from './interfaces/components'
import { VNodeRef } from 'vue'

interface Props {
  hotel: Hotel
}

const props = defineProps<Props>()

const { useField, errors, handleSubmit } = useForm({
  defaultValues: {},
})

const store = useStore()
const startDate = useField('startDate', { rule: { required: true } })
const endDate = useField('endDate', { rule: { required: true } })
const submitData = (data: Dates) => {
  store.addReservation(props.hotel, data)
  toast.success('Reservation made!')
}

const onSubmit = handleSubmit(submitData as any)
</script>

<style lang="scss" scoped></style>

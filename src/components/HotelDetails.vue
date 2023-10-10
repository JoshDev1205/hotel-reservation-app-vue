<template>
  <div v-if="isLoading">Loading ...</div>
  <template v-else>
    <div v-if="error">Error fetching Hotels! {{ error.message }}</div>
    <template v-else>
      <n-h2> Booking App </n-h2>
      <n-space
        vertical
        size="large"
        :style="{ maxWidth: '345px' }"
      >
        <n-card
          title="Card with Cover"
          :content-style="{
            backgroundColor: '#e8e8e8',
          }"
          :header-style="{
            backgroundColor: '#e8e8e8',
          }"
        >
          <template #cover>
            <img :src="hotel?.image" />
          </template>
          <n-h5>
            {{ hotel?.name }}
          </n-h5>
          <n-text>
            {{ hotel?.description }}
          </n-text>
          <template #action>
            <BookingForm :hotel="(hotel as Hotel)" />
          </template>
        </n-card>
      </n-space>
    </template>
  </template>
</template>

<script lang="ts" setup>
import type { Hotel } from './interfaces/components'
import { useQuery } from '@tanstack/vue-query'
import { NH2, NSpace, NCard, NH5, NText } from 'naive-ui'
import { useRoute } from 'vue-router'
import BookingForm from './BookingForm.vue'

const fetchHotel = async (id: number) => {
  const response = await fetch(`/api/hotels/${id}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

const route = useRoute()

const {
  data: hotel,
  isLoading,
  error,
} = useQuery<Hotel, Error>({
  queryKey: ['hotel', route.params.id],
  queryFn: () => fetchHotel(route.params.id as any),
})
</script>

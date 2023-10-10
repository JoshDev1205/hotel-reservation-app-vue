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
        <router-link
          v-for="hotel in hotels"
          :key="hotel.id"
          :to="`/hotel/${hotel.id}`"
          custom
          #="{ navigate }"
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
              <img :src="hotel.image" />
            </template>
            <n-h5>
              {{ hotel.name }}
            </n-h5>
            <n-text>
              {{ hotel.description }}
            </n-text>
            <template #action>
              <n-button
                text
                type="info"
                @click="navigate"
                size="small"
                >See details</n-button
              >
            </template>
          </n-card>
        </router-link>
      </n-space>
    </template>
  </template>
</template>

<script lang="ts" setup>
import type { Hotel } from './interfaces/components'
import { useQuery } from '@tanstack/vue-query'
import { NH2, NSpace, NCard, NButton, NH5, NText } from 'naive-ui'
import { RouterLink } from 'vue-router'

const fetchHotels = async () => {
  const response = await fetch('/api/hotels')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

const {
  data: hotels,
  isLoading,
  error,
} = useQuery<Hotel[], Error>({ queryKey: ['hotels'], queryFn: fetchHotels })
</script>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import {
  mdiAccountMultiple,
  mdiReload,
  mdiChartTimelineVariant
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config.js'
import LineChart from '@/components/Charts/LineChart.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleBar from '@/components/SectionTitleBar.vue'
import SectionHeroBar from '@/components/SectionHeroBar.vue'
import CardBoxWidget from '@/components/CardBoxWidget.vue'
import CardBox from '@/components/CardBox.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import BaseButton from '@/components/BaseButton.vue'
import CardBoxTransaction from '@/components/CardBoxTransaction.vue'
import CardBoxClient from '@/components/CardBoxClient.vue'
import SectionTitleBarSub from '@/components/SectionTitleBarSub.vue'

const titleStack = ref(['Admin', 'Dashboard'])

const chartData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
}

onMounted(() => {
  fillChartData()
})

const mainStore = useMainStore()

const clientBarItems = computed(() => mainStore.clients.slice(0, 3))

const transactionBarItems = computed(() => mainStore.history.slice(0, 3))

const darkMode = computed(() => mainStore.darkMode)
</script>

<template>
  <SectionHeroBar>Dashboard</SectionHeroBar>
  <SectionMain>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
      <CardBoxWidget
        trend-type="up"
        color="text-emerald-500"
        :icon="mdiAccountMultiple"
        :number="512"
        label="Expected of Voters"
      />
      <CardBoxWidget
        trend-type="down"
        color="text-blue-500"
        :icon="mdiAccountMultiple"
        :number="216"
        label="Number of Votes"
      />
      <CardBoxWidget
        trend-type="alert"
        color="text-red-500"
        :icon="mdiChartTimelineVariant"
        :number="((216/512)*100).toFixed(2)"
        suffix='%'
        label="Votes Submitted "
      />
       <CardBoxWidget
        trend-type="alert"
        color="text-blue-500"
        :icon="mdiAccountMultiple"
        :number="28"
        label="Registered On Premise "
      />
       <CardBoxWidget
        trend-type="alert"
        color="text-yellow-500"
       :icon="mdiAccountMultiple"
        :number="188"
        label="Registered Online"
      />
       <CardBoxWidget
        trend-type="alert"
        color="text-purple-500"
        :icon="mdiAccountMultiple"
        :number="188+28"
        label="Number of Voters"
      />
    </div>

    <SectionTitleBarSub
      :icon="mdiAccountMultiple"
      title="Candidates"
    />
    <CardBox
      title=" "
      has-table
    >
      <TableSampleClients />
    </CardBox>
  </SectionMain>
</template>

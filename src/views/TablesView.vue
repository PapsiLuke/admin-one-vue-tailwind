<script setup>
import { ref } from 'vue'
import { mdiMonitorCellphone, mdiAccountMultiple, mdiTableBorder, mdiTableOff } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import CardBox from '@/components/CardBox.vue'
import SectionTitleBar from '@/components/SectionTitleBar.vue'
import SectionHeroBar from '@/components/SectionHeroBar.vue'
import SectionBottomOtherPages from '@/components/SectionBottomOtherPages.vue'
import SectionTitleBarSub from '@/components/SectionTitleBarSub.vue'

const titleStack = ref(['Admin', 'Tables'])
</script>

<template>
  <SectionHeroBar>Statistics</SectionHeroBar>
  <SectionMain>
       <SectionTitleBarSub
      :icon="mdiTableBorder"
      title="Board Of Directors"
    />

    <CardBox
      class="mb-6"
      title="Candidates"
      :icon="mdiAccountMultiple"
      has-table
    >
      <TableSampleClients checkable />
    </CardBox>

    <SectionTitleBarSub
      :icon="mdiTableBorder"
      title="Election Committee"
    />

    <CardBox
      class="mb-6"
      has-table
    >
      <TableSampleClients checkable />
    </CardBox>
    <SectionTitleBarSub
      :icon="mdiTableBorder"
      title="Audit & Supervisory Committee"
    />

    <CardBox
      class="mb-6"
      has-table
    >
      <TableSampleClients checkable />
    </CardBox>
  </SectionMain>
</template>

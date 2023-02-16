<script lang="ts" setup>
import { toggleDark } from '~/composables';
import { ref, onMounted } from 'vue';
import { toggleHtmlClass } from '~/theme/utils'

const list = ref(
  ['base', 'dark', 'china-red', 'custom']
)

onMounted(() => {
  toggleHtmlClass('custom')
})
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Element Plus</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height);">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
    <el-sub-menu index="6">
      <template #title>切换皮肤</template>
      <el-menu-item 
        v-for="item in list"
        :key="item"
        :index="item"
        @click="toggleHtmlClass(item)"
      >{{ item }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

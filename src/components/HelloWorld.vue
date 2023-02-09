<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from 'element-plus'
import { ArrowDown, Eleme } from '@element-plus/icons-vue'

defineProps<{ msg: string }>();

const count = ref(0);
const input = ref("element-plus");

const curDate = ref('')

const toast = (type: any) => {
  ElMessage({
    message: 'Congrats, this is a message.',
    type: type,
  })
}

const loading = ref(false)
</script>

<template>
  <!-- <h1>{{ msg }}</h1>

  <p>
    See
    <a href="https://element-plus.org" target="_blank">element-plus</a> for
    more information.
  </p> -->

  <!-- example components -->
  <div class="flex-content">
    <p>Normal：</p>
    <el-button>Button</el-button>
    <el-button type="primary">Button</el-button>
    <el-button type="success" @click="toast('success')">Button</el-button>
    <el-button type="warning" @click="toast('warning')">Button</el-button>
    <el-button type="danger" @click="toast('danger')">Button</el-button>
    <el-button type="info" @click="toast('info')">Button</el-button>
  </div>
  <div class="flex-content">
    <p>Plain：</p>
    <el-button plain>Plain</el-button>
    <el-button plain disabled>Plain - Disabled</el-button>
    <el-button type="primary" plain>Plain</el-button>
    <el-button type="primary" plain disabled>Plain - Disabled</el-button>
    <el-button type="success" plain>Plain</el-button>
    <el-button type="warning" plain>Plain</el-button>
    <el-button type="danger" plain>Plain</el-button>
    <el-button type="info" plain>Plain</el-button>
  </div>
  <div class="flex-content">
    <p>Disabled：</p>
    <el-button disabled>Disabled</el-button>
    <el-button type="primary" disabled>Disabled</el-button>
    <el-button type="success" disabled>Disabled</el-button>
    <el-button type="warning" disabled>Disabled</el-button>
    <el-button type="danger" disabled>Disabled</el-button>
    <el-button type="info" disabled>Disabled</el-button>
  </div>
  <div class="flex-content">
    <p>Text：</p>
    <el-button text bg>文字链接</el-button>
    <el-button type="primary" text bg>文字链接</el-button>
    <el-button type="success" text bg>文字链接</el-button>
    <el-button type="warning" text bg>文字链接</el-button>
    <el-button type="danger" text bg>文字链接</el-button>
    <el-button type="info" text bg>文字链接</el-button>
  </div>
  <div class="flex-content">
    <p @click="loading = !loading" style="cursor: pointer;">Loading：</p>
    <el-button loading :loading-icon="Eleme"></el-button>
    <el-button type="primary" :loading="loading">{{ loading ? '' : 'Loading' }}</el-button>
    <el-button type="success" loading>Loading</el-button>
    <el-button type="warning" loading></el-button>
    <el-button type="danger" loading></el-button>
    <el-button type="info" loading></el-button>
  </div>
  <div class="flex-content">
    <p>Dropdown：</p>
    <el-dropdown split-button type="primary">
      Dropdown List
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown split-button>
      Dropdown List
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown>
      <el-button-group>
        <el-button plain>Dropdown List</el-button>
        <el-button plain style="width: 32px;">
          <el-icon><arrow-down /></el-icon>
        </el-button>
      </el-button-group>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <div class="flex-content"></div>
 
  <!-- <el-input v-model="input" style="width: 200px; margin: 20px" />
  <el-tag>Tag 1</el-tag>

  <br />
  <el-date-picker v-model="curDate" type="date" placeholder="Pick a day"></el-date-picker>

  <p>For example, we can custom primary color to 'green'.</p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test components.
  </p>
  <p>
    Edit
    <code>styles/element/var.scss</code> to test scss variables.
  </p>

  <p>
    Full Example:
    <a
      href="https://github.com/element-plus/element-plus-vite-starter"
      target="_blank"
    >element-plus-vite-starter</a>
    | On demand Example:
    <a
      href="https://github.com/element-plus/unplugin-element-plus"
      target="_blank"
    >unplugin-element-plus/examples/vite</a>
  </p> -->
</template>

<style scoped>
.flex-content {
  display: flex;
  align-items: center;
}

.flex-content > p {
  width: 100px;
  text-align: right;
}

.ep-dropdown {
  margin-right: 12px;
}

.ep-button {
  width: 120px;
}
</style>

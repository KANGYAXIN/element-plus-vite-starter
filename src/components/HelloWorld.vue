<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from 'element-plus'

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
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    See
    <a href="https://element-plus.org" target="_blank">element-plus</a> for
    more information.
  </p>

  <!-- example components -->
  <p>Normal</p>
  <el-button>Button</el-button>
  <el-button type="primary">Button</el-button>
  <el-button type="success" @click="toast('success')">Button</el-button>
  <el-button type="warning" @click="toast('warning')">Button</el-button>
  <el-button type="danger" @click="toast('danger')">Button</el-button>
  <el-button type="info" @click="toast('info')">Button</el-button>
  <br />
  <p>Plain</p>
  <el-button plain>Plain</el-button>
  <el-button plain disabled>Plain</el-button>
  <el-button type="primary" plain>Plain</el-button>
  <el-button type="primary" plain disabled>Plain</el-button>
  <el-button type="success" plain>Plain</el-button>
  <el-button type="warning" plain>Plain</el-button>
  <el-button type="danger" plain>Plain</el-button>
  <el-button type="info" plain>Plain</el-button>
  <br />
  <p>Disabled</p>
  <el-button disabled>Disabled</el-button>
  <el-button type="primary" disabled>Disabled</el-button>
  <el-button type="success" disabled>Disabled</el-button>
  <el-button type="warning" disabled>Disabled</el-button>
  <el-button type="danger" disabled>Disabled</el-button>
  <el-button type="info" disabled>Disabled</el-button>
  <br />
  <p>Link</p>
  <el-button link>文字链接</el-button>
  <el-button type="primary" link>文字链接</el-button>
  <el-button type="success" link>文字链接</el-button>
  <el-button type="warning" link>文字链接</el-button>
  <el-button type="danger" link>文字链接</el-button>
  <el-button type="info" link>文字链接</el-button>
  <br />
  <p>Text</p>
  <el-button text bg>文字链接</el-button>
  <el-button type="primary" text bg>文字链接</el-button>
  <el-button type="success" text bg>文字链接</el-button>
  <el-button type="warning" text bg>文字链接</el-button>
  <el-button type="danger" text bg>文字链接</el-button>
  <el-button type="info" text bg>文字链接</el-button>
  <br />
  <p>Loading</p>
  <el-button loading>Loading</el-button>
  <el-button type="primary" loading>Loading</el-button>
  <el-button type="success" loading>Loading</el-button>
  <el-button type="warning" loading>Loading</el-button>
  <el-button type="danger" loading>Loading</el-button>
  <el-button type="info" loading>Loading</el-button>
  <br />
  <el-input v-model="input" style="width: 200px; margin: 20px" />
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
  </p>
</template>

<style>
.ep-button {
  margin: 4px;
}
</style>

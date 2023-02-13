<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from 'element-plus'
import { ArrowDown, Eleme } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'

defineProps<{ msg: string }>();

const toast = (type: any) => {
  ElMessage({
    message: 'Congrats, this is a message.',
    type: type,
  })
}

// 初始化
const loading = ref(false)
const inputValue = ref('啊啊啊啊')
const radioValue = ref(1)
const checkValue = ref([1, 5])
const checkList = ref(
  [
    {
      name: 'Option A',
      label: 1,
      indeterminate: false,
      disabled: false
    },
    {
      name: 'Option B',
      label: 2,
      indeterminate: true,
      disabled: false
    },
    {
      name: 'Option C',
      label: 3,
      indeterminate: true,
      disabled: true
    },
    {
      name: 'Option D',
      label: 4,
      indeterminate: false,
      disabled: true
    },
    {
      name: 'Disabled',
      label: 5,
      indeterminate: false,
      disabled: true
    },
    {
      name: 'Option E',
      label: 5,
      indeterminate: false,
      disabled: false
    },
  ]
)
const switchValue = ref(true)

const noticeHandle = (type: string) => {
  ElNotification({
    title: type,
    message: `This is a ${type} message`,
    duration: 0,
    type: type,
  });

  ElMessage({
    message: `Congrats, this is a ${type} message.`,
    duration: 0,
    type: type,
  })
}
const dialogVisible = ref(false)
const pagination = ref({
  currentPage: 1,
  pageSize: 20,
})
</script>

<template>
  <!-- example components -->
  <!-- Button -->
  <div class="flex-content">
    <p>Normal：</p>
    <el-button>Button</el-button>
    <el-button type="primary">Button</el-button>
    <el-button type="success" @click="toast('success')">Button</el-button>
    <el-button type="warning" @click="toast('warning')">Button</el-button>
    <el-button type="danger" @click="toast('danger')">Button</el-button>
    <el-button type="info" @click="toast('info')">Button</el-button>
    <el-button type="primary" disabled>Disabled</el-button>
    <el-button plain>Plain</el-button>
    <el-button plain disabled>Plain - Disabled</el-button>
    <el-button type="primary" plain>Plain</el-button>
    <el-button type="primary" plain disabled>Plain - Disabled</el-button>
    <el-button type="primary" text bg>文字链接</el-button>
  </div>
  <div class="flex-content">
    <p @click="loading = !loading" style="cursor: pointer;">Loading：</p>
    <el-button loading :loading-icon="Eleme"></el-button>
    <el-button type="primary" :loading="loading">{{ loading ? '' : 'Loading' }}</el-button>
  </div>
  <!-- Dropdown -->
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
  <!-- Input -->
  <div class="flex-content">
    <p>Input：</p>
    <el-input placeholder="暗提示" v-model="inputValue"></el-input>
    <el-input placeholder="暗提示" disabled v-model="inputValue"></el-input>
  </div>
  <!-- Radio -->
  <div class="flex-content">
    <p>Radio：</p>
    <el-radio-group v-model="radioValue">
      <el-radio :label="1">Option A</el-radio>
      <el-radio :label="2" disabled>Option B</el-radio>
      <el-radio :label="3">Option C</el-radio>
    </el-radio-group>

    <el-radio-group v-model="radioValue" style="margin-left: 12px;">
      <el-radio-button :label="1" disabled>Option A</el-radio-button>
      <el-radio-button :label="2">Option B</el-radio-button>
      <el-radio-button :label="3">Option C</el-radio-button>
    </el-radio-group>
  </div>
  <!-- Checkbox -->
  <div class="flex-content">
    <p>Checkbox：</p>
    <el-checkbox-group v-model="checkValue">
      <el-checkbox
        v-for="item in checkList"
        :key="item.label"
        :label="item.label"
        :indeterminate="item.indeterminate"
        :disabled="item.disabled"
      >{{ item.name }}</el-checkbox>
    </el-checkbox-group>

    <el-checkbox-group v-model="checkValue" style="margin-left: 12px;">
      <el-checkbox-button 
        v-for="item in checkList"
        :key="item.label"
        :label="item.label"
        :disabled="item.disabled"
      >{{ item.name }}</el-checkbox-button>
    </el-checkbox-group>
  </div>
  <!-- Switch -->
  <div class="flex-content">
    <p>Switch：</p>
    <el-switch v-model="switchValue" />
    <el-switch v-model="switchValue" disabled style="margin-left: 12px;" />
  </div>  
  <!-- Tooltip -->
  <div class="flex-content">
    <p>Tooltip：</p>
    <el-alert title="success alert" type="success" show-icon />
    <el-alert title="info alert" type="info" show-icon />
    <el-alert title="warning alert" type="warning" show-icon />
    <el-alert title="error alert" type="error" show-icon />
  </div>
  <!-- Message + Notification -->
  <div class="flex-content">
    <p>Message：</p>
    <el-button plain @click="noticeHandle('success')">Success</el-button>
    <el-button plain @click="noticeHandle('warning')">Warning</el-button>
    <el-button plain @click="noticeHandle('info')">Info</el-button>
    <el-button plain @click="noticeHandle('error')">Error</el-button>
  </div>
  <!-- Dialog -->
  <div class="flex-content">
    <p>Dialog：</p>
    <el-button plain @click="dialogVisible = true">Dialog</el-button>
    <el-dialog
      v-model="dialogVisible"
      title="提示"
      width="560px"
    >
      <div>内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域-内容区域</div>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确认</el-button>
      </template>
    </el-dialog>
  </div>
  <!-- Skeleton -->
  <div class="flex-content">
    <p>Skeleton：</p>
    <el-skeleton :rows="1" />
  </div>
  <!-- Pagination -->
  <div class="flex-content">
    <p>Pagination：</p>
    <el-pagination
      v-model:current-page="pagination.currentPage"
      v-model:page-size="pagination.pageSize"
      :page-sizes="[100, 200, 300, 400]"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </div>
</template>

<style scoped>
.flex-content {
  display: flex;
  align-items: center;
}

.flex-content > p {
  width: 140px;
  text-align: right;
}

.ep-dropdown {
  margin-right: 12px;
}

.ep-input,
.ep-select,
.ep-alert {
  width: 300px;
  margin-right: 12px;
}
</style>

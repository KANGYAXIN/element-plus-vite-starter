<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from 'element-plus'
import { ArrowDown, Eleme, Search } from '@element-plus/icons-vue'
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
const selectValue = ref('')
const selectList = ref([
  {
    label: 'Option A',
    value: 1,
    disabled: true
  },
  {
    label: 'Option B',
    value: 2,
    disabled: false
  },
  {
    label: 'Option C',
    value: 3,
    disabled: false
  },
  {
    label: 'Option D',
    value: 4,
    disabled: false
  }
])
const cascaderValue = ref([])
const cascaderOptions = ref([
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
])
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
const tableData = ref([
  {
    type: '淘宝',
    orderSn: '14556578340297',
    name: '荷叶边吊带裙开衫套装',
  },
  {
    type: '拼多多',
    orderSn: '14556578340297',
    name: '困惑的赫德森的小店铺',
  },
])
const stepValue = ref(0)
const stepHandle = () => {
  if (stepValue.value++ > 2) stepValue.value = 0
}
const dateValue1 = ref('')
const dateValue2 = ref('')
const dateValue3 = ref('')
const dateValue4 = ref('')
const dateValue5 = ref('')
const dataValue6 = ref('')
const disabledDate = (time: Date) => {
  return time.getTime() < Date.now()
}
const rateValue = ref()
const sliderValue = ref(0)
const sliderMarks = ref({
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
  100: '100',
})
</script>

<template>
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
    <el-button loading :loading-icon="Eleme"></el-button>
    <el-button type="primary" :loading="true">loading</el-button>
  </div>

  <!-- ------------------------------------------------------------ -->
  <!-- Breadcrumb -->
  <div class="flex-content">
    <p>Breadcrumb：</p>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">一级内容</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">二级内容</a></el-breadcrumb-item>
      <el-breadcrumb-item>三级内容</el-breadcrumb-item>
      <el-breadcrumb-item>当前页面</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <!-- Dropdown -->
  <div class="flex-content">
    <p>Dropdown：</p>
    <el-dropdown trigger="click" placement="bottom-start">
      <el-button-group>
        <el-button type="primary" @click.stop>Dropdown List</el-button>
        <el-button type="primary" style="width: 32px;">
          <el-icon><arrow-down /></el-icon>
        </el-button>
      </el-button-group>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1Action 1Action 1Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown trigger="click" placement="bottom-start" style="margin-left: 12px;">
      <el-button-group>
        <el-button plain type="primary" @click.stop>Dropdown List</el-button>
        <el-button plain type="primary" style="width: 32px;">
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
    <el-dropdown trigger="click" placement="bottom-start" style="margin-left: 12px;">
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
  <!-- Step -->
  <div class="flex-content">
    <p>Step：</p>
    <el-button plain @click="stepHandle">Step</el-button>
    <el-steps :active="stepValue" align-center finish-status="success" style="width: 800px;">
      <el-step title="状态文案" description="辅助说明" />
      <el-step title="状态文案" description="辅助说明" />
      <el-step title="状态文案" description="辅助说明" />
    </el-steps>
  </div>

  <!-- ------------------------------------------------------------ -->
  <!-- Input -->
  <div class="flex-content">
    <p>Input：</p>
    <el-input placeholder="暗提示" v-model="inputValue"></el-input>
    <el-input placeholder="暗提示" disabled v-model="inputValue" style="margin-left: 12px;"></el-input>
    <el-input placeholder="暗提示" disabled v-model="inputValue" style="margin-left: 12px;">
      <template #prepend>Http://</template>
      <template #append>.com</template>
    </el-input>
    <el-input
      v-model="inputValue"
      placeholder="暗提示"
      :prefix-icon="Search"
      :suffix-icon="Search"
      clearable
      style="margin-left: 12px;"
    />
    <el-input 
      placeholder="暗提示" 
      v-model="inputValue"
      :rows="3"
      type="textarea"
      style="margin-left: 12px;"
    />
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
      <el-radio-button :label="2" disabled>Option B</el-radio-button>
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
  <!-- Select -->
  <div class="flex-content">
    <p>Select：</p>
    <el-select 
      v-model="selectValue" 
      clearable 
      multiple
      collapse-tags
      collapse-tags-tooltip
    >
      <el-option
        v-for="item in selectList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></el-option>
    </el-select>
    <el-select v-model="selectValue" clearable disabled></el-select>
  </div>
  <!-- DatePicker -->
  <div class="flex-content">
    <p>DatePicker：</p>
    <el-date-picker
      v-model="dateValue1"
      type="year"
      placeholder="请选择年份"
      clearable
      :disabled-date="disabledDate"
    />
    <el-date-picker
      v-model="dateValue2"
      type="month"
      placeholder="请选择月份"
      :disabled-date="disabledDate"
      style="margin-left: 12px;"
    />
    <el-date-picker
      v-model="dateValue4"
      type="week"
      placeholder="请选择周"
      :disabled-date="disabledDate"
      style="margin-left: 12px;"
    />
    <el-date-picker
      v-model="dateValue3"
      type="dates"
      placeholder="请选择日期"
      :disabled-date="disabledDate"
      style="margin-left: 12px;"
    />
    <el-time-picker
      v-model="dataValue6"
      placeholder="请选择时间"
      style="margin-left: 12px;"
    ></el-time-picker>
    <el-date-picker
      v-model="dateValue5"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      style="margin-left: 12px;"
    />
  </div>
  <!-- Switch -->
  <div class="flex-content">
    <p>Switch：</p>
    <el-switch v-model="switchValue" />
    <el-switch v-model="switchValue" disabled style="margin-left: 12px;" />
  </div>  
  <!-- Cascader -->
  <div class="flex-content">
    <p>Cascader：</p>
    <el-cascader 
      v-model="cascaderValue" 
      :options="cascaderOptions" 
    ></el-cascader>
  </div>
  <!-- 颜色选择器 -->
  <!-- Rate -->
  <div class="flex-content">
    <p>Rate：</p>
    <el-rate
      v-model="rateValue"
      :texts="['1星', '2星', '3星', '4星', '5星']"
      show-text
    />
  </div>
  <!-- Slider -->
  <div class="flex-content">
    <p>Slider：</p>
    <el-slider 
      v-model="sliderValue" 
      :min="0"
      :max="100"
      :step="10"
      :marks="sliderMarks"
      :show-input="true"
      :show-input-controls="false"
      style="width: 700px;margin-left: 12px;"
    />
  </div>
  <!-- 树选择 -->
  <!-- 步进器 -->
  <!-- 穿梭框 -->
  <!-- 文件上传 -->

  <!-- ------------------------------------------------------------ -->
  <!-- 文字提示 -->
  <!-- 气泡提示 -->
  <!-- 微标数 -->
  <!-- 卡片 -->
  <!-- 走马灯 -->
  <!-- 折叠面板 -->
  <!-- Table -->
  <div class="flex-content">
    <p>Table：</p>
    <el-table
      :data="tableData"
      style="width: 50%"
      border
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="图片/商品名称" prop="name" header-align="center"></el-table-column>
      <el-table-column label="平台类型" prop="type" header-align="center"></el-table-column>
      <el-table-column label="订单编号" prop="orderSn" header-align="center" show-overflow-tooltip></el-table-column>
    </el-table>
  </div>
  <!-- 标签选择器（待定） -->
  <!-- 时间轴 -->
  <!-- Alert -->
  <div class="flex-content">
    <p>Alert：</p>
    <el-alert title="info alert" type="success" show-icon />
    <el-alert title="info alert" type="info" show-icon />
    <el-alert title="warning alert" type="warning" show-icon />
    <el-alert title="error alert" type="error" show-icon />
  </div>
  <!-- 默认图片 -->
  <!-- 标签 -->

  <!-- ------------------------------------------------------------ -->
  <!-- Message + Notification -->
  <div class="flex-content">
    <p>Message：</p>
    <el-button plain @click="noticeHandle('success')">Success</el-button>
    <el-button plain @click="noticeHandle('warning')">Warning</el-button>
    <el-button plain @click="noticeHandle('info')">Info</el-button>
    <el-button plain @click="noticeHandle('error')">Error</el-button>
  </div>
  <!-- Skeleton -->
  <div class="flex-content">
    <p>Skeleton：</p>
    <el-skeleton :rows="1" />
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
  <!-- 抽屉（待定） -->
  <!-- 全局Loading（待定） -->
  <!-- 进度条 -->
  <!-- ------------------------------------------------------------ -->
</template>

<style scoped>
.flex-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.flex-content:last-child {
  margin-bottom: 100px
}

.flex-content > p {
  width: 140px;
  text-align: right;
}

.ep-select,
.ep-alert {
  margin-right: 12px;
}

.ep-alert {
  width: 240px;
}
</style>

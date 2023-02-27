<script setup lang="ts">
import { ref, h } from "vue";
import { ElMessage, ElNotification, ElMessageBox } from 'element-plus'
import type { TagProps } from 'element-plus'
import { ArrowDown, ArrowUp, Eleme, Search, StarFilled, WarningFilled, ArrowRight, Picture } from '@element-plus/icons-vue'

defineProps<{ msg: string }>();

const toast = (type: any) => {
  ElMessage({
    message: 'Congrats, this is a message.',
    type: type,
  })
}

// 初始化
const loadingValue = ref(false)
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
const inputValue = ref('')
const radioValue = ref(2)
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
const arrowFlag1 = ref(true)
const arrowFlag2 = ref(true)
const arrowFlag3 = ref(true)
const selectValue1 = ref('')
const selectLoading1 = ref(false)
const remoteMethod = () => {
  selectLoading1.value = true
  setTimeout(() => {
    selectLoading1.value = false
  }, 2000)
}
const selectValue2 = ref([])
const selectLoading2 = ref(false)
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
const cascaderProp = ref({
  multiple: true,
})
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
  pageSize: 100,
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
const dateValue6 = ref('')
const dateValue7 = ref('')
const dateValue8 = ref('')
const dateValue9 = ref('')
const dateValue10 = ref('')
const dateValue11 = ref('')

const disabledDate = (time: Date) => {
  return time.getTime() < Date.now()
}
const shortcuts = ref([
  {
    text: '近一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '近一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '近三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
])
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
const colorValue = ref('')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
const treeSelectValue = ref()
const treeSelectData = ref([
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        disabled: true,
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
])
const inputNumValue = ref(1)
const transferValue = ref([])
interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
const transferData = ref<Option[]>(generateData())
const drawerValue = ref(false)
const handleMessageBox = () => {
  ElMessageBox({
    title: '提示',
    message: h('p', null, [
      h('span', null, '解除绑定，系统将停止与平台店铺的信息同步，停止自动抓单、订单信息回传、获取快递单号、库存同步等，'),
      h('span', { style: 'color: var(--ep-color-error)' }, '请谨慎解绑！'),
    ]),
    showCancelButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
  .then(() => {
    ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
  })
  .catch(() => {
    ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
  })
}
type Item = { type: TagProps['type']; label: string, size: string }
const tagItems = ref<Array<Item>>([
  { type: '', label: 'Tag 1', size: 'small' },
  { type: 'success', label: 'Tag 2', size: '' },
  { type: 'info', label: 'Tag 3', size: 'large' },
  { type: 'danger', label: 'Tag 4', size: '' },
  { type: 'warning', label: 'Tag 5', size: '' },
])
const collapseValue = ref([])
const tabValue = ref('first')
const imageValue = ref('../../assets/img.png')
</script>

<template>  
  <el-form
    label-width="140px"
    label-suffix="："
  >
    <el-form-item label="Button">
      <div class="flex-content">
        <div>
          <p>Normal</p>
          <el-button>Default</el-button>
          <el-button type="primary">Primary</el-button>
          <el-button type="success">success</el-button>
          <el-button type="warning">Warning</el-button>
          <el-button type="danger">Danger</el-button>
        </div>
        <div>
          <p>Size</p>
          <el-button size="small">Small</el-button>
          <el-button>Default</el-button>
          <el-button size="large">Large</el-button>
        </div>
        <div>
          <p>Plain</p>
          <el-button plain>Plain</el-button>
          <el-button type="primary" plain>Primary</el-button>
          <el-button type="success" plain>Success</el-button>
          <el-button type="warning" plain>Warning</el-button>
          <el-button type="danger" plain>Danger</el-button>
        </div>
        <div>
          <p>Disabled</p>
          <el-button disabled>Default</el-button>
          <el-button type="primary" disabled>Primary</el-button>
          <el-button type="success" disabled>Success</el-button>
          <el-button type="warning" disabled>Warning</el-button>
          <el-button type="danger" disabled>Danger</el-button>
          <el-button plain disabled>Default</el-button>
          <el-button type="primary" plain disabled>Primary</el-button>
          <el-button type="success" plain disabled>Success</el-button>
          <el-button type="warning" plain disabled>Warning</el-button>
          <el-button type="danger" plain disabled>Danger</el-button>
        </div>
        <div>
          <p>Text</p>
          <el-button type="primary" text bg>Primary</el-button>
          <el-button type="success" text bg>Success</el-button>
          <el-button type="warning" text bg>Warning</el-button>
          <el-button type="danger" text bg>Danger</el-button>
        </div>
        <div>
          <p>Loading</p>
          <el-button type="primary" loading>Primary</el-button>
        </div>
      </div>
    </el-form-item>
    <!-- ------------------------------------------------------------ -->
    <el-form-item label="Breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">一级内容</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">二级内容</a></el-breadcrumb-item>
        <el-breadcrumb-item>三级内容</el-breadcrumb-item>
        <el-breadcrumb-item>当前页面</el-breadcrumb-item>
      </el-breadcrumb>
    </el-form-item>
    <el-form-item label="Dropdown">
      <div class="flex-content">
        <div>
          <el-dropdown trigger="click" placement="bottom-start">
            <el-button-group>
              <el-button type="primary" @click.stop>Dropdown List</el-button>
              <el-button type="primary" style="width: 32px;" @click="arrowFlag1 = !arrowFlag1">
                <el-icon ><ArrowDown /></el-icon>
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
          <el-dropdown trigger="click" placement="bottom-start">
            <el-button-group>
              <el-button plain type="primary" @click.stop>Dropdown List</el-button>
              <el-button plain type="primary" style="width: 32px;"  @click="arrowFlag2 = !arrowFlag2">
                <el-icon><ArrowDown /></el-icon>
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
          <el-dropdown trigger="click" placement="bottom-start">
            <el-button-group>
              <el-button plain @click.stop>Dropdown List</el-button>
              <el-button plain style="width: 32px;" @click="arrowFlag3 = !arrowFlag3">
                <el-icon><ArrowDown /></el-icon>
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
        <div>
          <el-dropdown trigger="click" placement="bottom-start">
            <el-button type="primary">
              <span style="margin-right: 6px;">主按钮</span>
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1Action 1Action 1Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-dropdown trigger="click" placement="bottom-start">
            <el-button type="primary" plain>
              <span style="margin-right: 6px;">次按钮</span>
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1Action 1Action 1Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-dropdown trigger="click" placement="bottom-start">
            <el-button plain>
              <span style="margin-right: 6px;">次按钮</span>
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1Action 1Action 1Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="Pagination">
      <div class="flex-content">
        <div>
          <el-pagination
            v-model:current-page="pagination.currentPage"
            v-model:page-size="pagination.pageSize"
            background
            layout="prev, pager, next"
            :total="400"
          />
        </div>
        <div>
          <el-pagination
            v-model:current-page="pagination.currentPage"
            v-model:page-size="pagination.pageSize"
            :page-sizes="[100, 200, 300, 400]"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          />
        </div>
      </div>
    </el-form-item>
    <el-form-item label="Step">
      <el-button plain @click="stepHandle">Step</el-button>
      <el-steps :active="stepValue" align-center finish-status="success">
        <el-step title="状态文案" description="辅助说明" />
        <el-step title="状态文案" description="辅助说明" />
        <el-step title="状态文案" description="辅助说明" :status="stepValue === 3 ? 'error' : ''" />
      </el-steps>
    </el-form-item>
    <!-- ------------------------------------------------------------ -->
    <el-form-item label="Input">
      <div class="flex-content">
        <div>
          <el-input placeholder="请输入" v-model="inputValue" clearable></el-input>
          <el-input placeholder="请输入" v-model="inputValue" maxlength="10" show-word-limit></el-input>
          <el-input placeholder="请输入" disabled v-model="inputValue"></el-input>
        </div>
        <div>
          <el-input placeholder="请输入" v-model="inputValue" clearable>
            <template #prepend>￥</template>
          </el-input>
          <el-input placeholder="请输入" v-model="inputValue">
            <template #append>%</template>
          </el-input>
          <el-input
            v-model="inputValue"
            placeholder="请输入"
            :prefix-icon="Search"
            clearable
          />
        </div>
        <div>
          <el-input 
            placeholder="请输入" 
            v-model="inputValue"
            :rows="3"
            type="textarea"
            show-word-limit
            maxlength="50"
          />
        </div>
      </div>
    </el-form-item>
    <el-form-item label="Radio">
      <div class="flex-content">
        <div>
          <el-radio-group v-model="radioValue">
            <el-radio :label="1">Option A</el-radio>
            <el-radio :label="2" disabled>Option B</el-radio>
            <el-radio :label="3" disabled>Option <Cap></Cap></el-radio>
            <el-radio :label="4">Option D</el-radio>
          </el-radio-group>
        </div>
        <div>
          <el-radio-group v-model="radioValue">
            <el-radio-button :label="1" disabled>Option A</el-radio-button>
            <el-radio-button :label="2" disabled>Option B</el-radio-button>
            <el-radio-button :label="3">Option C</el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="Checkbox">
      <div class="flex-content">
        <div>
          <el-checkbox-group v-model="checkValue">
            <el-checkbox
              v-for="item in checkList"
              :key="item.label"
              :label="item.label"
              :indeterminate="item.indeterminate"
              :disabled="item.disabled"
            >{{ item.name }}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div>
          <el-checkbox-group v-model="checkValue">
            <el-checkbox-button 
              v-for="item in checkList"
              :key="item.label"
              :label="item.label"
              :disabled="item.disabled"
            >{{ item.name }}</el-checkbox-button>
          </el-checkbox-group>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="Select">
      <el-select 
        v-model="selectValue1" 
        clearable 
        filterable
        no-match-text="无搜索结果"
        loading-text="搜索中..."
        :loading="selectLoading1"
        :remote-method="remoteMethod"
      >
        <el-option
          v-for="item in selectList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        ></el-option>
      </el-select>
      <el-select 
        v-model="selectValue2" 
        clearable 
        filterable
        multiple
        collapse-tags
        collapse-tags-tooltip
        no-match-text="无搜索结果"
        loading-text="搜索中..."
        :loading="selectLoading2"
      >
        <el-option
          v-for="item in selectList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        ></el-option>
      </el-select>
      <el-select v-model="selectValue2" clearable disabled></el-select>
    </el-form-item>
    <el-form-item label="DatePicker">
      <div class="flex-content">
        <div>
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
          />
          <el-date-picker
            v-model="dateValue3"
            type="week"
            placeholder="请选择周"
            :disabled-date="disabledDate"
          />
          <el-date-picker
            v-model="dateValue4"
            type="date"
            placeholder="请选择日期"
            :disabled-date="disabledDate"
          />
          <el-date-picker
            v-model="dateValue11"
            type="dates"
            placeholder="请选择多个日期"
            :disabled-date="disabledDate"
          />
          <el-time-picker
            v-model="dateValue5"
            placeholder="请选择时间"
          />
        </div>
        <div>
          <el-date-picker
            v-model="dateValue6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
          <el-date-picker
            v-model="dateValue7"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="margin-left: 12px;"
          />
          <el-date-picker
            v-model="dateValue8"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :shortcuts="shortcuts"
            style="margin-left: 12px;"
          />
          <el-date-picker
            v-model="dateValue9"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :shortcuts="shortcuts"
            style="margin-left: 12px;"
          />
        </div>
        <div>
          <el-date-picker
            v-model="dateValue10"
            type="datetime"
            placeholder="请选择日期"
          />
          <el-date-picker
            v-model="dateValue10"
            type="datetime"
            placeholder="请选择日期"
            :shortcuts="shortcuts"
          />
        </div>
      </div>
    </el-form-item>
    <el-form-item label="Switch">
      <el-switch v-model="switchValue" />
      <el-switch v-model="switchValue" disabled />
    </el-form-item>
    <el-form-item label="Cascader">
      <el-cascader 
        v-model="cascaderValue" 
        :options="cascaderOptions" 
        clearable
        filterable
      ></el-cascader>
      <el-cascader
        :options="cascaderOptions"
        :props="cascaderProp"
        collapse-tags
        collapse-tags-tooltip
        clearable
        filterable
      />
    </el-form-item>
    <el-form-item label="ColorPicke">
      <el-color-picker v-model="colorValue" show-alpha :predefine="predefineColors" />
    </el-form-item>
    <el-form-item label="Rate">
      <el-rate
        v-model="rateValue"
        :void-icon="StarFilled"
        :texts="['1星', '2星', '3星', '4星', '5星']"
        show-text
      />
    </el-form-item>
    <el-form-item label="Slider">
      <el-slider 
        v-model="sliderValue" 
        :min="0"
        :max="100"
        :step="10"
        :marks="sliderMarks"
        :show-input="true"
        :show-input-controls="false"
      />
    </el-form-item>
    <el-form-item label="TreeSelect">
      <el-tree-select 
        v-model="treeSelectValue" 
        :data="treeSelectData" 
        :render-after-expand="false" 
        placeholder="请选择"
      />
      <el-tree-select 
        v-model="treeSelectValue" 
        :data="treeSelectData" 
        show-checkbox 
        :render-after-expand="false" 
        placeholder="请选择"
      />
    </el-form-item>
    <el-form-item label="InputNumber">
      <el-input-number v-model="inputNumValue" :min="1" :max="10" controls-position="right" />
    </el-form-item>
    <el-form-item label="Transfer">
      <el-transfer v-model="transferValue" :data="transferData" filterable />
    </el-form-item>
    <el-form-item label="文件上传" v-if="false"></el-form-item>
    <!-- ------------------------------------------------------------ -->
    <el-form-item label="Tooltip">
      <el-tooltip
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
        trigger="click"
      >
        <el-button>top-start</el-button>
      </el-tooltip>
      <el-tooltip
        effect="dark"
        content="Top Center prompts info"
        placement="top"
        trigger="click"
      >
        <el-button>top</el-button>
      </el-tooltip>
      <el-tooltip
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
        trigger="click"
      >
        <el-button>top-end</el-button>
      </el-tooltip>
      <el-tooltip
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
        trigger="click"
      >
        <el-button>left-start</el-button>
      </el-tooltip>
      <el-tooltip
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
        trigger="click"
      >
        <el-button>right-start</el-button>
      </el-tooltip>
      <el-tooltip
        effect="dark"
        content="Left Center prompts info"
        placement="left"
        trigger="click"
      >
        <el-button class="mt-3 mb-3">left</el-button>
      </el-tooltip>
      <el-tooltip
        effect="dark"
        content="Right Center prompts info"
        placement="right"
        trigger="click"
      >
        <el-button>right</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
        trigger="click"
      >
        <el-button>left-end</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
        trigger="click"
      >
        <el-button>right-end</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
        trigger="click"
      >
        <el-button>bottom-start</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
        trigger="click"
      >
        <el-button>bottom</el-button>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
        trigger="click"
      >
        <el-button>bottom-end</el-button>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="Popover">
      <el-popover
        placement="top-start"
        title="标题内容"
        trigger="click"
        content="需勾选表格项后进行批量删除文字文字中"
      >
        <template #reference>
          <el-button plain>click to activate</el-button>
        </template>
      </el-popover>
      <el-popconfirm
        confirm-button-text="确定"
        cancel-button-text="取消"
        :icon="WarningFilled"
        icon-color="#ED6A0C"
        title="确认解除绑定该店铺吗？"
      >
        <template #reference>
          <el-button plain>Delete</el-button>
        </template>
      </el-popconfirm>
    </el-form-item>
    <el-form-item label="Badge">
      <div class="flex-content">
        <div>
          <p>Number</p>
          <el-badge :value="9" :max="99" type="primary">
            <el-avatar shape="square" :size="40" :icon="Eleme" />
          </el-badge>
          <el-badge :value="99" :max="99" type="success">
            <el-avatar shape="square" :size="40" :icon="Eleme" />
          </el-badge>
          <el-badge :value="200" :max="99" type="warning">
            <el-avatar shape="square" :size="40" :icon="Eleme" />
          </el-badge>
          <el-badge :value="200" :max="99" type="danger">
            <el-avatar :icon="Eleme" />
          </el-badge>
        </div>
        <div>
          <p>Dot</p>
          <el-badge is-dot>
            <el-avatar shape="square" :size="40" :icon="Eleme" />
          </el-badge>
          <el-badge is-dot>
            <el-avatar :icon="Eleme" />
          </el-badge>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="Card">
      <el-card>
        <template #header>
          <div style="display: flex;justify-content: space-between;">
            <span>卡片标题</span>
            <span style="font-weight: 400;color: var(--ep-color-primary);cursor: pointer;">更多</span>
          </div>
        </template>
        <div>这里是卡片文字内容区域，用以承载文字信息。卡片组成元素有标题、支持操作的交互以及内容样式。</div>
      </el-card>
    </el-form-item>
    <el-form-item label="Carousel">
      <div class="flex-content">
        <div>
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div>
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="Collapse">
      <el-collapse v-model="collapseValue">
        <el-collapse-item title="折叠面板文字" name="1">
          <div>文字内容</div>
        </el-collapse-item>
        <el-collapse-item title="折叠面板文字" name="2">
          <div>文字内容</div>
        </el-collapse-item>
        <el-collapse-item title="折叠面板文字" name="3">
          <div>文字内容</div>
        </el-collapse-item>
        <el-collapse-item title="折叠面板文字" name="4">
          <div>文字内容</div>
        </el-collapse-item>
      </el-collapse>
    </el-form-item>
    <el-form-item label="Table">
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
    </el-form-item>
    <el-form-item label="Tabs">
      <div class="flex-content">
        <div>
          <el-tabs v-model="tabValue" class="demo-tabs">
            <el-tab-pane label="可选标签" name="first">可选标签</el-tab-pane>
            <el-tab-pane label="可选标签" name="second">可选标签</el-tab-pane>
            <el-tab-pane label="可选标签" name="third">可选标签</el-tab-pane>
            <el-tab-pane label="可选标签" name="fourth">可选标签</el-tab-pane>
          </el-tabs>
        </div>
        <div>
          <el-tabs v-model="tabValue" class="demo-tabs" type="border-card">
            <el-tab-pane label="可选标签" name="first">可选标签</el-tab-pane>
            <el-tab-pane label="可选标签" name="second">可选标签</el-tab-pane>
            <el-tab-pane label="可选标签" name="third">可选标签</el-tab-pane>
            <el-tab-pane label="可选标签" name="fourth">可选标签</el-tab-pane>
          </el-tabs>
        </div>
        <div>
          <el-tabs v-model="tabValue" class="demo-tabs" type="card">
            <el-tab-pane label="可选标签" name="first">可选标签</el-tab-pane>
            <el-tab-pane label="可选标签" name="second">可选标签</el-tab-pane>
            <el-tab-pane label="可选标签" name="third">可选标签</el-tab-pane>
            <el-tab-pane label="可选标签" name="fourth">可选标签</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="Timeline">
      <el-timeline>
        <el-timeline-item type='primary' :hollow="true">环节节点</el-timeline-item>
        <el-timeline-item type='success' :hollow="true">环节节点</el-timeline-item>
        <el-timeline-item type='warning' :hollow="true">环节节点</el-timeline-item>
        <el-timeline-item type='danger' :hollow="true">环节节点</el-timeline-item>
        <el-timeline-item>环节节点</el-timeline-item>
        <el-timeline-item>环节节点</el-timeline-item>
      </el-timeline>
    </el-form-item>
    <el-form-item label="Alert">
      <el-alert title="info alert" type="success" show-icon />
      <el-alert title="info alert" type="info" show-icon />
      <el-alert title="warning alert" type="warning" show-icon />
      <el-alert title="error alert" type="error" show-icon />
    </el-form-item>
    <el-form-item label="Image">
      <!-- <el-image src="imageValue">
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image> -->
    </el-form-item>
    <el-form-item label="Tag">
      <div class="flex-content">
        <div>
          <p>Dark</p>
          <el-tag
            v-for="item in tagItems"
            :key="item.label"
            :type="item.type"
            class="mx-1"
            effect="dark"
          >标签文本</el-tag>
          <el-tag
            v-for="item in tagItems"
            :key="item.label"
            :type="item.type"
            class="mx-1"
            effect="dark"
            closable
          >标签文本</el-tag>
        </div>
        <div>
          <p>Light</p>
          <el-tag
            v-for="item in tagItems"
            :key="item.label"
            class="mx-1"
            :type="item.type"
            effect="light"
          >标签文本</el-tag>
          <el-tag
            v-for="item in tagItems"
            :key="item.label"
            class="mx-1"
            :type="item.type"
            effect="light"
            closable
          >标签文本</el-tag>
        </div>
        <div>
          <p>Plain</p>
          <el-tag
            v-for="item in tagItems"
            :key="item.label"
            class="mx-1"
            :type="item.type"
            effect="plain"
          >标签文本</el-tag>
          <el-tag
            v-for="item in tagItems"
            :key="item.label"
            class="mx-1"
            :type="item.type"
            effect="plain"
            closable
          >标签文本</el-tag>
        </div>
        <div>
          <p>Size</p>
          <el-tag
            v-for="item in tagItems.slice(0, 3)"
            :key="item.label"
            class="mx-1"
            effect="dark"
            :size="item.size"
          >标签文本</el-tag>
        </div>
      </div>
    </el-form-item>
    <!-- ------------------------------------------------------------ -->
    <el-form-item label="Message">
      <el-button plain @click="noticeHandle('success')">Success</el-button>
      <el-button plain @click="noticeHandle('warning')">Warning</el-button>
      <el-button plain @click="noticeHandle('info')">Info</el-button>
      <el-button plain @click="noticeHandle('error')">Error</el-button>
    </el-form-item>
    <el-form-item label="Skeleton">
      <el-skeleton :rows="1" />
    </el-form-item>
    <el-form-item label="Dialog">
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
    </el-form-item>
    <el-form-item label="Drawer">
      <el-button plain @click="drawerValue = true">Drawer</el-button>
      <el-drawer
        v-model="drawerValue"
        title="提示"
        direction="rtl"
      >
        <span>内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域</span>
        <template #footer>
          <div style="flex: auto">
            <el-button>取消</el-button>
            <el-button type="primary">确定</el-button>
          </div>
        </template>
      </el-drawer>
    </el-form-item>
    <el-form-item label="Page Loading">
      <el-button plain @click="loadingValue = !loadingValue">Loading</el-button>
      <div 
        v-loading="loadingValue"
        element-loading-text="加载中"
        :element-loading-spinner="svg"
        element-loading-svg-view-box="-10, -10, 50, 50"
        element-loading-background="rgba(255, 255, 255, 0.9)"
        style="width: 600px;height: 200px;background: #E9E9EA;border: 1px solid #E9E9EA;margin-left: 12px;"
      ></div>
    </el-form-item>
    <el-form-item label="Progress">
      <el-progress :percentage="50" :stroke-width="2" />
      <el-progress :percentage="100" status="success" :stroke-width="2" />
      <el-progress :percentage="100" status="warning" :stroke-width="2" />
      <el-progress :percentage="50" status="exception" :stroke-width="2" />
    </el-form-item>
    <el-form-item label="MessageBox">
      <el-button plain @click="handleMessageBox">MessageBox</el-button>
    </el-form-item>
    <el-form-item label="TestSvg">
      <svg-icon 
        name="action" 
        color="#327de8"
      />
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss">
.ep-form {
  padding-top: 20px;
  padding-bottom: 100px;
}
:deep(.ep-form-item__content) {
  line-height: 1 !important;
}

.ep-steps {
  width: 800px;
}

.ep-slider {
  width: 700px;
}

.ep-alert {
  width: 240px;
}

.ep-progress {
  width: 240px;
}

.ep-collapse {
  width: 560px;
}

.ep-dropdown,
:deep(.ep-input),
.ep-switch,
.ep-alert,
.ep-radio-group,
.ep-checkbox-group {
  margin-right: 12px;
}

.ep-carousel-item {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
} 

.ep-image{
  width: 96px;
  height: 96px;
}

.ep-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.ep-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.flex-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0px;
    }

    > p {
      width: 70px;
      text-align: right;
      margin-right: 12px;
    }

    > .ep-badge {
      margin-right: 40px;
    }
  }
}

/* .ep-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.ep-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
} */
</style>

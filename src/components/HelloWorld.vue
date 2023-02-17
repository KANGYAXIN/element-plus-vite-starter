<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from 'element-plus'
import { ArrowDown, Eleme, Search, StarFilled, WarningFilled } from '@element-plus/icons-vue'
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
</script>

<template>
  <el-form
    label-width="140px"
    label-suffix="："
  >
    <el-form-item label="Button">
      <el-button size="small">按钮</el-button>
      <el-button type="primary">按钮</el-button>
      <el-button type="success" @click="toast('success')" size="large">按钮</el-button>
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
      <el-dropdown trigger="click" placement="bottom-start">
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
      <el-dropdown trigger="click" placement="bottom-start">
        <el-button-group>
          <el-button plain @click.stop>Dropdown List</el-button>
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
    </el-form-item>
    <el-form-item label="Pagination">
      <el-pagination
        v-model:current-page="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        :page-sizes="[100, 200, 300, 400]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      />
    </el-form-item>
    <el-form-item label="Step">
      <el-button plain @click="stepHandle">Step</el-button>
      <el-steps :active="stepValue" align-center finish-status="success">
        <el-step title="状态文案" description="辅助说明" />
        <el-step title="状态文案" description="辅助说明" />
        <el-step title="状态文案" description="辅助说明" />
      </el-steps>
    </el-form-item>
    <!-- ------------------------------------------------------------ -->
    <el-form-item label="Input">
      <el-input placeholder="暗提示" v-model="inputValue"></el-input>
      <el-input placeholder="暗提示" disabled v-model="inputValue"></el-input>
      <el-input placeholder="暗提示" disabled v-model="inputValue">
        <template #prepend>Http://</template>
        <template #append>.com</template>
      </el-input>
      <el-input
        v-model="inputValue"
        placeholder="暗提示"
        :prefix-icon="Search"
        :suffix-icon="Search"
        clearable
      />
      <el-input 
        placeholder="暗提示" 
        v-model="inputValue"
        :rows="3"
        type="textarea"
      />
    </el-form-item>
    <el-form-item label="Radio">
      <el-radio-group v-model="radioValue">
        <el-radio :label="1">Option A</el-radio>
        <el-radio :label="2" disabled>Option B</el-radio>
        <el-radio :label="3">Option C</el-radio>
      </el-radio-group>

      <el-radio-group v-model="radioValue">
        <el-radio-button :label="1" disabled>Option A</el-radio-button>
        <el-radio-button :label="2" disabled>Option B</el-radio-button>
        <el-radio-button :label="3">Option C</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Checkbox">
      <el-checkbox-group v-model="checkValue">
        <el-checkbox
          v-for="item in checkList"
          :key="item.label"
          :label="item.label"
          :indeterminate="item.indeterminate"
          :disabled="item.disabled"
        >{{ item.name }}</el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group v-model="checkValue">
        <el-checkbox-button 
          v-for="item in checkList"
          :key="item.label"
          :label="item.label"
          :disabled="item.disabled"
        >{{ item.name }}</el-checkbox-button>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Select">
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
    </el-form-item>
    <el-form-item label="DatePicker">
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
          v-model="dateValue4"
          type="week"
          placeholder="请选择周"
          :disabled-date="disabledDate"
        />
      </div>
      <div style="margin-top: 12px;">
        <el-date-picker
          v-model="dateValue3"
          type="dates"
          placeholder="请选择日期"
          :disabled-date="disabledDate"
        />
        <el-time-picker
          v-model="dataValue6"
          placeholder="请选择时间"
        ></el-time-picker>
        <el-date-picker
          v-model="dateValue5"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
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
      ></el-cascader>
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
    <el-form-item label="微标数" v-if="false"></el-form-item>
    <el-form-item label="卡片" v-if="false"></el-form-item>
    <el-form-item label="走马灯" v-if="false"></el-form-item>
    <el-form-item label="折叠面板" v-if="false"></el-form-item>
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
    <el-form-item label="标签选择器（待定）" v-if="false"></el-form-item>
    <el-form-item label="时间轴" v-if="false"></el-form-item>
    <el-form-item label="Alert">
      <el-alert title="info alert" type="success" show-icon />
      <el-alert title="info alert" type="info" show-icon />
      <el-alert title="warning alert" type="warning" show-icon />
      <el-alert title="error alert" type="error" show-icon />
    </el-form-item>
    <el-form-item label="默认图片" v-if="false"></el-form-item>
    <el-form-item label="标签" v-if="false"></el-form-item>
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
    <el-form-item label="抽屉（待定）" v-if="false"></el-form-item>
    <el-form-item label="全局Loading（待定）" v-if="false"></el-form-item>
    <el-form-item label="进度条" v-if="false"></el-form-item>
  </el-form>
</template>

<style scoped>
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

.ep-dropdown,
:deep(.ep-input),
.ep-switch,
.ep-alert,
.ep-radio-group,
.ep-checkbox-group {
  margin-right: 12px;
}


</style>

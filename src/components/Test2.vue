<template>
  <div :style="{width: '800px', margin: '0 auto'}">
    <div class="row mb-1">
      <p class="col-sm-8">Implement <strong>input</strong>, <strong>datepicker</strong>, and <strong>select/dropdown</strong> knowing that these component get initial data from server and be able to retrieve new data as user change it.</p>
      <p>Use <a href="http://element.eleme.io/?ref=madewithvuejs.com#/en-US" target="_blank">this</a> library</p>
    </div>
    <div class="row mb-1">
      <!-- Your components goes here!-->
      <el-input placeholder="Please input" v-model="inputData"></el-input>
    </div>

    <div class="row mb-1">
      <el-select v-model="selectedItem" placeholder="Select">
        <el-option
          v-for="item in selectBoxOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="row mb-1">
      <el-date-picker
        v-model="dateData"
        type="date"
        placeholder="Pick a day"
        format="yyyy/MM/dd">
      </el-date-picker>
    </div>
    <div>
    Result data: <br>
    Input Data : {{getInputData}} <br>
    Selected : {{getSelectedBox}}<br>
    Date: {{getNewDatetime}}<br>
    </div>
  </div>
</template>
<script>
import api from '../store/api'
export default {
  name: 'Test2',
  data () {
    return {
      inputData: '',
      dateData: '',
      selectedItem: '',
      comboboxData: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.inputData = 'This is initial data.'
      this.selectedItem = '#cdcdcd'
    }, 900)
  },
  methods: {
    handleChangeData (newValue) {
      console.log('new Value', newValue)
    }
  },
  computed: {
    selectBoxOptions () {
      return this.comboboxData
    },
    getInputData () {
      return this.inputData
    },
    getNewDatetime () {
      return this.dateData
    },
    getSelectedBox () {
      const result = this.comboboxData.find(item => {
        if (item.value === this.selectedItem) {
          return item
        }
      })
      return result ? result.label : ''
    }
  },
  created () {
    api.getModifier().then(entries => {
      this.comboboxData = entries.items
    })
  }
}
</script>

<style scoped>
  .mb-1, .my-1 {
    margin-bottom: 4px!important;
    margin-bottom: .25rem!important;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-sm-2 {
     -ms-flex: 0 0 16.666667%;
     flex: 0 0 16.666667%;
     max-width: 16.666667%;
   }
  .col-sm-2, .col-sm-10 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .pt-1, .py-1 {
    padding-top: 4px!important;
    padding-top: .25rem!important;
  }
  .col-sm-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .progress, .progress-bar {
    display: -ms-flexbox;
    display: flex;
  }
  .progress {
    height: 16px;
    height: 1rem;
    overflow: hidden;
    font-size: 12px;
    font-size: .75rem;
    background-selectedItem: #e9ecef;
    border-radius: .25rem;
  }
  .progress-bar {
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    selectedItem: #fff;
    text-align: center;
    white-space: nowrap;
    background-selectedItem: #007bff;
    transition: width .6s ease;
  }
  .progress, .progress-bar {
    display: -ms-flexbox;
    display: flex;
  }
  * {
    -webkit-font-smoothing: antialiased;
  }
  *, :after, :before {
    box-sizing: border-box;
  }

</style>

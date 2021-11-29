<template>
  <div class="w-full h-full">
    <div class="flex flex-row m-2">
      <div class="border rounded-full p-2 px-4 mr-2 bg-gray-200">
        내역서
      </div>
      <div class="border rounded-full p-2 px-4 mr-2 bg-gray-200">
        일위대가-호표
      </div>
      <div class="border rounded-full p-2 px-4 mr-2 bg-gray-200">
        일위대가-산근
      </div>
      <div class="border rounded-full p-2 px-4 mr-2 bg-gray-200">
        자재
      </div>
      <div class="border rounded-full p-2 px-4 mr-2 bg-gray-200">
        노임
      </div>
      <div class="border rounded-full p-2 px-4 mr-2 bg-gray-200">
        경비
      </div>
      <div class="border rounded-full p-2 px-4 mr-2 bg-gray-200">
        기계경비
      </div>
    </div>
    <div class="container-fluid">
      <p v-html="selectedItem" />
      <wj-flex-grid :items-source="data" :column-groups="columnGroups" />
    </div>
  </div>
</template>

<script>
import '@grapecity/wijmo.styles/wijmo.css'
import Vue from 'vue'
import '@grapecity/wijmo.vue2.grid'

export default Vue.extend({
  name: 'App',
  data () {
    return {
      data: this._getData(),
      selectedItem: ''
    }
  },

  computed: {
    columnGroups () {
      return [
        { binding: '순번', header: '순번', width: 60, align: 'center' },
        { binding: '자원코드', header: '자원코드', width: 80, align: 'center' },
        { binding: '', header: '공종레벨', width: 60, align: 'center' },
        { binding: '공종레벨', header: '공종번호', width: 60, align: 'center' },
        { binding: '공종레벨', header: '공종', width: 60, align: 'center' },
        { binding: '공종레벨', header: '규격', width: 60, align: 'center' },
        { binding: '공종레벨', header: '단위', width: 60, align: 'center' },
        { binding: '공종레벨', header: '수량', width: 60, align: 'center' },
        {
          header: '합계',
          align: 'center',
          columns: [
            { binding: 'perf.ytd', header: '단가', format: 'p2', width: 60 },
            { binding: 'perf.m1', header: '금액', format: 'p2', width: 60 }
          ]
        },
        {
          header: '재료비',
          align: 'center',
          columns: [
            { binding: 'perf.ytd', header: '단가', format: 'p2', width: 60 },
            { binding: 'perf.m1', header: '금액', format: 'p2', width: 60 }
          ]
        },
        {
          header: '노무비',
          align: 'center',
          columns: [
            { binding: 'perf.ytd', header: '단가', format: 'p2', width: 60 },
            { binding: 'perf.m1', header: '금액', format: 'p2', width: 60 }
          ]
        },
        {
          header: '경비',
          align: 'center',
          columns: [
            { binding: 'perf.ytd', header: '단가', format: 'p2', width: 60 },
            { binding: 'perf.m1', header: '금액', format: 'p2', width: 60 }
          ]
        },
        { binding: '비고', header: '비고', width: 60, align: 'center' },
        { binding: '자원구분', header: '자원구분', width: 60, align: 'center' },
        { binding: '메모', header: '메모', width: 60, align: 'center' },
        { binding: '관급', header: '관급', width: 60, align: 'center' },
        { binding: 'QDB', header: 'QDB', width: 60, align: 'center' }
      ]
    }
  },

  methods: {
    _getData () {
      // create some random data
      const countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',')
      const data = []
      for (let i = 0; i < countries.length; i++) {
        data.push({
          id: i,
          country: countries[i],
          sales: Math.random() * 10000,
          expenses: Math.random() * 5000
        })
      }

      return data
    }
  }
})
</script>

<style>
.wj-cell{
  font-size: 12px;
  text-align: center;

}
</style>

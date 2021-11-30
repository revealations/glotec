<template>
  <div class="w-full h-full border-t">
    <div class="flex flex-row m-4 pl-36 mt-8">
      <div
        v-for="(c, i) in categories"
        :key="i"
        class="border rounded-full p-2 px-4 m-1 cursor-pointer whitespace-nowrap"
        :class="{ 'bg-blue-500 text-white': category === i, 'bg-gray-200': category !== i }"
        @click="category = i"
      >
        {{ c.name }}
      </div>
    </div>
    <div class="flex h-3/4 w-5/6 mx-auto">
      <div class="border px-16">
        sfsf
      </div>
      <p v-html="selectedItem" />
      <wj-flex-grid :items-source="data" :column-groups="columnGroups" />
    </div>
  </div>
</template>

<script>
import '@grapecity/wijmo.styles/wijmo.css'
import Vue from 'vue'
import '@grapecity/wijmo.vue2.grid'
import * as wijmo from '@grapecity/wijmo'
wijmo.setLicenseKey('431917793822964#B08IKpjIEJCLi4TPBZFaZRzbhZEcUZlctREduJjbZl7KOVmU54mb6p6QXJXZGdEVHZ6N6EUUOlWaRFlaTNkSOl6UtJ6V8oEWDNDc4B5M9dGRzk4NI96KnhzUUlWVshTUmVzYZdjSy3EaRVFcRJ6V6NmMS3GTSZVUuhFVkNFakZzKVx6MptycDNFNzB5cthUaYZUdRxmZENVZ7NGSsZnewl4VaNWRohUZyEHOwFzZ4NnTatCVy2kVuhHMFRUVnxUea3SNmhlVNdmMkNDeXRlVzg6RxZnWuZ4TK3CdrQER5V4RKRVcoV6NygDR8FUM9ombDdDeOp6VxUzVrZmWFtyTyAXTlZkavcmaxUWeD9EMqVVRQhTWolXUHRFbqBDTThVMShmTwJHNtZjd7kWVIpXezoFcllGTPRWMS3iViRnVylVUUxmZ5JHUvNmZ63ie4M4QXRUNuVmexFjdWN4bulDWLRnSiojITJCLigTRycjMFJkI0ICSiwCO9YTO7AzM5ETM0IicfJye35XX3JSSwIjUiojIDJCLi86bpNnblRHeFBCI4VWZoNFelxmRg2Wbql6ViojIOJyes4nI5kkTRJiOiMkIsIibvl6cuVGd8VEIgIXZ7VWaWRncvBXZSBybtpWaXJiOi8kI1xSfis4N8gkI0IyQiwiIu3Waz9WZ4hXRgAydvJVa4xWdNBybtpWaXJiOi8kI1xSfiQjR6QkI0IyQiwiIu3Waz9WZ4hXRgACUBx4TgAybtpWaXJiOi8kI1xSfiMzQwIkI0IyQiwiIlJ7bDBybtpWaXJiOi8kI1xSfiUFO7EkI0IyQiwiIu3Waz9WZ4hXRgACdyFGaDxWYpNmbh9WaGBybtpWaXJiOi8kI1tlOiQmcQJCLicjMzUDNwASMzUDM9EDMyIiOiQncDJCLiEjLw8CMucjMxIiOiMXbEJCLi4YhtzZorDIuqLiOiEmTDJCLiQjN9IjM8MTO7cTM9EzM4IiOiQWSiwSfiIjd9EDMyIiOiIXZ6JCLlNHbhZmOiI7ckJye0IUbcF')

export default Vue.extend({
  name: 'App',
  data () {
    return {
      data: this._getData(),
      selectedItem: '',
      category: 0
    }
  },

  computed: {
    categories () {
      return [{
        name: '내역서'
      }, {
        name: '일위대가-호표'
      }, {
        name: '일위대가-산근'
      }, {
        name: '자재'
      }, {
        name: '노임'
      }, {
        name: '경비'
      }, {
        name: '기계경비'
      }]
    },

    columnGroups () {
      switch (this.category) {
        case 0:
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
        case 1:
          return [{ binding: '순번', header: '코드/순번', width: 60, align: 'center' },
            { binding: '자원코드', header: '*/S', width: 80, align: 'center' },
            { binding: '자원코드', header: '하위코드', width: 80, align: 'center' },
            { binding: '자원코드', header: '명칭', width: 80, align: 'center' },
            { binding: '자원코드', header: '규격', width: 80, align: 'center' },
            { binding: '자원코드', header: '수량', width: 80, align: 'center' },
            { binding: '자원코드', header: '단위', width: 80, align: 'center' },
            { binding: '자원코드', header: '합계', width: 80, align: 'center' },
            { binding: '자원코드', header: '재료비', width: 80, align: 'center' },
            { binding: '자원코드', header: '노무비', width: 80, align: 'center' },
            { binding: '자원코드', header: '경비', width: 80, align: 'center' },
            { binding: '자원코드', header: '비고', width: 80, align: 'center' }

          ]

        case 2:
          return [{ binding: '순번', header: '코드/순번', width: 60, align: 'center' },
            { binding: '자원코드', header: '*/S', width: 80, align: 'center' },
            { binding: '자원코드', header: '하위코드', width: 80, align: 'center' },
            { binding: '자원코드', header: '명칭', width: 80, align: 'center' },
            { binding: '자원코드', header: '규격', width: 80, align: 'center' },
            { binding: '자원코드', header: '수량', width: 80, align: 'center' },
            { binding: '자원코드', header: '단위', width: 80, align: 'center' },
            { binding: '자원코드', header: '합계', width: 80, align: 'center' },
            { binding: '자원코드', header: '재료비', width: 80, align: 'center' },
            { binding: '자원코드', header: '노무비', width: 80, align: 'center' },
            { binding: '자원코드', header: '경비', width: 80, align: 'center' },
            { binding: '자원코드', header: '비고', width: 80, align: 'center' }

          ]
        case 3:
          return [{ binding: '순번', header: '코드', width: 60, align: 'center' },
            { binding: '자원코드', header: 'U', width: 80, align: 'center' },
            { binding: '자원코드', header: '명칭', width: 80, align: 'center' },
            { binding: '자원코드', header: '규격', width: 80, align: 'center' },
            { binding: '자원코드', header: '단위', width: 80, align: 'center' },
            { binding: '자원코드', header: '단 가1', width: 80, align: 'center' },
            { binding: '자원코드', header: '단 가2', width: 80, align: 'center' },
            { binding: '자원코드', header: '단 가3', width: 80, align: 'center' },
            { binding: '자원코드', header: '비고', width: 80, align: 'center' }]

        case 4:
          return [{ binding: '순번', header: '코드', width: 60, align: 'center' },
            { binding: '자원코드', header: 'U', width: 80, align: 'center' },
            { binding: '자원코드', header: '명칭', width: 80, align: 'center' },
            { binding: '자원코드', header: '규격', width: 80, align: 'center' },
            { binding: '자원코드', header: '단위', width: 80, align: 'center' },
            { binding: '자원코드', header: '단 가1', width: 80, align: 'center' },
            { binding: '자원코드', header: '단 가2', width: 80, align: 'center' },
            { binding: '자원코드', header: '단 가3', width: 80, align: 'center' },
            { binding: '자원코드', header: '비고', width: 80, align: 'center' }]
        case 5:
          return [{ binding: '순번', header: '코드', width: 60, align: 'center' },
            { binding: '자원코드', header: '명칭', width: 80, align: 'center' },
            { binding: '자원코드', header: '규격', width: 80, align: 'center' },
            { binding: '자원코드', header: '단위', width: 80, align: 'center' },
            { binding: '자원코드', header: '재료비1', width: 80, align: 'center' },
            { binding: '자원코드', header: '노무비1', width: 80, align: 'center' },
            { binding: '자원코드', header: '경비1', width: 80, align: 'center' },
            { binding: '자원코드', header: '재료비2', width: 80, align: 'center' },
            { binding: '자원코드', header: '노무비2', width: 80, align: 'center' },
            { binding: '자원코드', header: '경비2', width: 80, align: 'center' },
            { binding: '자원코드', header: '재료비3', width: 80, align: 'center' },
            { binding: '자원코드', header: '노무비3', width: 80, align: 'center' },
            { binding: '자원코드', header: '경비3', width: 80, align: 'center' },
            { binding: '자원코드', header: '비고', width: 80, align: 'center' }]
        case 6:
          return [{ binding: '순번', header: '순번', width: 60, align: 'center' },
            { binding: '자원코드', header: '자원코드', width: 80, align: 'center' },
            { binding: '자원코드', header: '명칭', width: 80, align: 'center' },
            { binding: '자원코드', header: '규격', width: 80, align: 'center' },
            { binding: '자원코드', header: '수량', width: 80, align: 'center' },
            { binding: '자원코드', header: '단위', width: 80, align: 'center' },
            { binding: '자원코드', header: '재료비', width: 80, align: 'center' },
            { binding: '자원코드', header: '노무비', width: 80, align: 'center' },
            { binding: '자원코드', header: '경비', width: 80, align: 'center' },
            { binding: '자원코드', header: '합계', width: 80, align: 'center' },
            { binding: '자원코드', header: '비고', width: 80, align: 'center' },
            { binding: '자원코드', header: '적용일자', width: 80, align: 'center' }]

        default:
          break
      }

      return []
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

.wj-cell.wj-header {
  background-color: rgb(234, 238, 241);

}
.wj-cell{
  font-size: 12px;
  text-align: center;
  background: rgb(241, 247, 253);

}
.wj-cell.wj-alt{
  background : rgb(255, 255, 255)
}

</style>

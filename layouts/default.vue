<template>
  <div class="flex flex-col h-screen justify-between">
    <div>
      <div class="w-full border-b">
        <nav class="max-w-screen-xl h-12 mx-auto">
          <div class="flex m-8 justify-self-start">
            <p class="text-xs text-gray-500">
              &nbsp;로그인&nbsp;| &nbsp;회원가입&nbsp; | &nbsp;이용가이드&nbsp; | &nbsp;사이트맵&nbsp; | &nbsp;고객센터
            </p>
          </div>
          <div class="flex justify-center -mt-14 mx-auto">
            <nuxt-link to="/">
              <img class="w-18 h-6" src="@/static/ebsLogo.png">
            </nuxt-link>
          </div>
        </nav>
      </div>
      <div class="flex leading-none justify-center divide-x py-4 whitespace-nowrap">
        <div class="px-12 h-auto">
          <nuxt-link to="/viewer">
            EBS-pro
          </nuxt-link>
        </div>
        <div class="px-12">
          EBS-C
        </div>
        <div class="px-12">
          BIM솔루션
        </div>
        <div class="px-12">
          교육콘텐츠
        </div>
        <div class="px-12">
          구인구직
        </div>
        <div class="px-12">
          DB몰
        </div>
        <div class="px-12">
          고객센터
        </div>
      </div>
    </div>

    <Nuxt />
    <footer class="whitespace-nowrap">
      <nav class="flex justify-center flex-row w-full h-20 bg-black">
        <div class="flex justify-evenly flex-row p-4">
          <p class="text-base text-white pt-6">
            창조와 혁신의 중심
          </p>
          <p class="text-4xl text-white px-2">
            글로텍
          </p>
        </div>
        <div>
          <aside class="absolute ... border-r h-10 border-gray-500 mt-6 mr-5 border-opacity-50">
            &nbsp;
          </aside>
        </div>
        <div class="flex justify-evenly flex-col p-5">
          <p class="text-xs text-white">
            이용약관&nbsp;&nbsp;개인정보보호방침&nbsp;&nbsp;이메일주소무단수집거부
          </p>
          <p class="text-xxxs text-gray-300">
            152-777&nbsp;서울특별시&nbsp;구로구&nbsp;디지털로&nbsp;32길&nbsp;30,코오롱디지털타워빌란트&nbsp;611호&nbsp;(주)글로텍&nbsp;사업자번호:229-81-23001&nbsp;대표자:황희석
          </p>
          <div class="flex flex-row">
            <p class="text-xxxxs text-gray-500  border-r-0 border-gray-500 border-opacity-50 p-0.5">
              02)2103-2400(대)
            </p>
            <p class="text-xxxxs text-gray-500  border-r-0 border-gray-500 border-opacity-50 p-0.5">
              FAX:02)2103-2407
            </p>
            <p class="text-xxxxs text-gray-500 p-0.5">
              E-mail:salesman@glotechsoft.com&nbsp;Copyright(c)2013GLOTECH.,LTD&nbsp;ALL&nbsp;Rights&nbsp;Reserve
            </p>
          </div>
        </div>
        <div>
          <select name="site" class="mt-8 w-32 h-6 bg-gray-800 text-white text-xs text-center border border-white ">
            <option value="FAMILY SITE">
              FAMILY&nbsp;SITE
            </option>
          </select>
        </div>
      </nav>
    </footer>
  </div>
</template>

<style>
  .vertical{
    border-right: 1px;
    --tw-border-opacity :1;
    border-color: rgba(107, 114, 128, var(--tw-border-opacity));
    width: 0.1px;
    height : 50px;
  }
</style>

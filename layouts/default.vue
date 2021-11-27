<template>
  <div>
    <nav class="w-full h-30 bg-white border-b">
      <div class="flex mx-auto px-40">
        <p class="text-xs">
          로그인 | 회원가입 | 이용가이드 | 사이트맵 | 고객센터
        </p>
      </div>
      <div class="flex justify-center max-w-screen-xl mx-auto">
        <nuxt-link to="/">
          <img class="w-55 h-20 -mt-1" src="@/static/glotecLogo.png">
        </nuxt-link>
      </div>
    </nav>
    <Nuxt />
    <footer>
      사업자등록번호: 1234-5-6-7-6-34534
      카피라이트 2021
      <!-- //Tailwind css intellisense
        // Volar -->
    </footer>
  </div>
</template>

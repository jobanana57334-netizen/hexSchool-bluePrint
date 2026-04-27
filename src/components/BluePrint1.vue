<script setup>
import { ref } from 'vue';
//引入vueuse核心功能
import FadeInSection from './FadeInSection.vue';

// 1. 整合圖片資源
const assets = {
  fb: 'https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/singlePage/facebookIcon.png',
  twitter:
    'https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/singlePage/twitterIcon.png',
  logo: 'https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/singlePage/logo.png',
  banner: 'https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/singlePage/banner.png',
  html: 'https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/singlePage/html.png',
  rwd: 'https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/singlePage/rwd.png',
  jquery: 'https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/singlePage/jQuery.png',
  footerLogo:
    'https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/singlePage/footerLogo.png'
};

//選擇標籤

const navLinks = ['首頁', '產品介紹', '聯絡我們'];

//課程內容
const courses = [
  {
    title: 'HTML 5 基礎教學',
    img: assets.html,
    desc: '主流前端網站設計的基礎就在六角學院，在這裡不是在填鴨式教學，而是透過實際的範例，瞭解正確的網站開發流程。'
  },
  {
    title: '響應式網站設計',
    img: assets.rwd,
    desc: '目前大多使用者均是以手機瀏覽的情況下，響應式網站已經是必備的。六角學院將提供業界開發技巧。'
  },
  {
    title: 'jQuery 實戰教學',
    img: assets.jquery,
    list: ['瞭解變數的使用方法', '學習並操作 DOM', '學習基本數學運算方法', '套件的操作及運用']
  }
];

const formFields = [
  { id: 'name', label: '姓名', type: 'text', placeholder: '六角講師' },
  { id: 'phone', label: '電話', type: 'tel', placeholder: '0912345678' },
  { id: 'email', label: '信箱', type: 'email', placeholder: 'hexschool@mail.com' }
];

const tableData = [
  {
    title: '費用',
    hex: '較低',
    hexColor: 'text-emerald-500',
    general: '較低',
    generalColor: 'text-emerald-500',
    physical: '較高'
  },
  {
    title: '學習效果',
    hex: '一般',
    general: '較低',
    generalColor: 'text-emerald-500',
    physical: '很好',
    physicalColor: 'text-emerald-500'
  },
  {
    title: 'Code review',
    hex: '有',
    hexColor: 'text-emerald-500',
    general: '無',
    physical: '不一定'
  },
  {
    title: '課程更新速度',
    hex: '普通',
    hexColor: 'text-emerald-500',
    general: '普通',
    generalColor: 'text-emerald-500',
    physical: '較慢'
  },
  { title: '多次複習', hex: '可', hexColor: 'text-emerald-500', general: '可', physical: '不可' },
  { title: '字幕', hex: '有', hexColor: 'text-emerald-500', general: '不一定', physical: '板書' }
];
</script>
<template>
  <main class="min-h-screen font-jhenghei bg-white">
    <header class="bg-gray-200 flex justify-end p-1 pr-5 gap-4 items-center">
      <a
        v-for="(social, key) in {
          fb: { label: '粉絲團', color: 'text-blue-800' },
          twitter: { label: '追隨我們', color: 'text-[#4488ff]' }
        }"
        :key="key"
        href="#"
        class="flex items-center gap-1 hover:opacity-80"
      >
        <img :src="assets[key]" :alt="key" class="w-4 h-4" />
        <span class="text-sm font-semibold" :class="social.color">{{ social.label }}</span>
      </a>
    </header>

    <nav class="flex justify-between px-8 py-4 items-end">
      <img :src="assets.logo" alt="logo" class="h-10" />
      <ul class="flex gap-12">
        <li
          v-for="link in navLinks"
          :key="link"
          class="group relative cursor-pointer text-lg font-semibold text-[#00cc99] pb-2"
        >
          {{ link }}
          <span
            class="absolute bottom-0 left-0 h-1 w-0 bg-[#00cc99] transition-all group-hover:w-full"
          ></span>
        </li>
      </ul>
    </nav>
    <FadeInSection>
      <section
        :style="{ backgroundImage: `url(${assets.banner})` }"
        class="h-80 bg-cover bg-center flex items-center transition-all ease-linear duration-300"
      >
        <div class="w-full bg-black/50 py-10 px-10 text-white text-3xl font-bold">
          <h1>六角學院</h1>
          <p>讓您奠定良好的前端基礎</p>
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <section class="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div
          v-for="course in courses"
          :key="course.title"
          class="border border-gray-100 rounded-lg p-6 shadow-md"
        >
          <div class="h-40 flex items-center justify-center mb-4">
            <img :src="course.img" class="max-h-full" />
          </div>
          <h2 class="text-xl font-bold mb-4 text-center">{{ course.title }}</h2>
          <p v-if="course.desc" class="text-gray-600 leading-relaxed">{{ course.desc }}</p>
          <ul v-else class="list-disc list-inside text-gray-600">
            <li v-for="li in course.list" :key="li">{{ li }}</li>
          </ul>
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <section class="py-12 container mx-auto px-6">
        <h2 class="text-2xl font-bold text-center mb-8">線上及實體課程的差異</h2>
        <div class="overflow-x-auto rounded-lg border border-gray-100">
          <table class="w-full text-left bg-white">
            <thead class="bg-gray-50 border-b">
              <tr>
                <th
                  v-for="h in ['項目', 'Hex School 線上課程', '一般線上課程', '實體課程']"
                  :key="h"
                  class="px-6 py-4"
                >
                  {{ h }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="row in tableData" :key="row.title" class="hover:bg-gray-50">
                <td class="px-6 py-4 font-medium">{{ row.title }}</td>
                <td class="px-6 py-4" :class="row.hexColor">{{ row.hex }}</td>
                <td class="px-6 py-4" :class="row.generalColor">{{ row.general }}</td>
                <td class="px-6 py-4" :class="row.physicalColor">{{ row.physical }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </FadeInSection>
    <FadeInSection>
      <section class="bg-linear-to-b from-[#004d3a] to-[#008060] py-16 text-white">
        <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="bg-white rounded-sm h-64 lg:h-full"></div>
          <form class="flex flex-col gap-6">
            <div v-for="field in formFields" :key="field.id" class="flex flex-col gap-2">
              <label :for="field.id" class="text-lg">{{ field.label }}</label>
              <input
                :type="field.type"
                :id="field.id"
                :placeholder="field.placeholder"
                class="p-3 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>
            <button
              type="submit"
              class="self-end bg-[#00cc99] hover:bg-[#00b386] px-8 py-2 rounded-md transition-colors"
            >
              送出
            </button>
          </form>
        </div>
      </section>
    </FadeInSection>
    <footer>
      <div class="container mx-auto flex items-center justify-between px-6 py-8">
        <img :src="assets.footerLogo" alt="Hex School" class="h-10 justify-right" />
        <div class="text-left text-gray-700 justify-left">
          <p class="mb-1">聯絡我們：<span class="text-pink-500">hexschool@gmail.com</span></p>
          <p>電話：<span class="text-pink-500">0999123456</span></p>
        </div>
      </div>
    </footer>
  </main>
</template>

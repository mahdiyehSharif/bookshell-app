import { defineStore } from 'pinia'
import getters from './getters'

export const useBookStore = defineStore('books', {
  state: () => ({
    books: [
      {
        id: 'w1',
        writer: 'احمد محمود',
        name: 'زمین سوخته',
        rate: 4.5,
        photo: '@/images/zaminsookhte.webp',
      },
      {
        id: 'w2',
        writer: 'صادق هدایت',
        name: 'زنده به گور',
        rate: 3.7,
        photo: new URL('@/images/zendebegoor.JPEG', import.meta.url).href,
      },
      {
        id: 'w3',
        writer: 'صادق چوبک',
        name: 'تنگسیر',
        rate: 4.7,
        photo: '@/images/tangsir.jepg',
      },
      {
        id: 'w4',
        writer: 'رضا براهنی',
        name: 'روزگار دوزخی آقای ایاز',
        rate: 3.6,
        photo: '@/images/ayaz.jepg',
      },
      {
        id: 'w5',
        writer: 'فئودور داستایوفسکی',
        name: 'قمار باز',
        rate: 4.1,
        photo: '@/images/qomarbaz.jepg',
      },
      {
        id: 'w6',
        writer: 'لئوتولستوی',
        name: 'مرگ ایوان ایلیچ',
        rate: 3.9,
        photo: '@/images/evanilich.jepg',
      },
      {
        id: 'w7',
        writer: 'سیمین دانشور',
        name: 'سوووشون',
        rate: 3.2,
        photo: '@/images/soovashoon.jepg',
      },
      {
        id: 'w8',
        writer: 'ساموئل بکت',
        name: 'در انتظار گودو',
        rate: 4.8,
        photo: '@/images/darentezargodo.webp',
      },
      {
        id: 'w9',
        writer: 'جین آستین',
        name: 'اما',
        rate: 2.1,
        photo: '@/images/ema.webp',
      },
    ],
  }),
  getters,
})

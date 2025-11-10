import { defineStore } from 'pinia'
import getters from './getters'

export const useBookStore = defineStore('books', {
  state: () => ({
    books: [
      {
        id: 'w1',
        genrs: [' اجتماعی', ' جنگی', ' واقع گرایانه'],
        writer: 'احمد محمود',
        name: 'زمین سوخته',
        rate: 4.5,
        photo: '@/images/zaminsookhte.webp',
      },
      {
        id: 'w2',
        genrs: [' روانشناختی', ' فلسفی', ' تراژیک'],
        writer: 'صادق هدایت',
        name: 'زنده به گور',
        rate: 3.7,
        photo: new URL('@/images/zendebegoor.JPEG', import.meta.url).href,
      },
      {
        id: 'w3',
        genrs: [' اجتماعی', ' حماسی'],
        writer: 'صادق چوبک',
        name: 'تنگسیر',
        rate: 4.7,
        photo: '@/images/tangsir.jepg',
      },
      {
        id: 'w4',
        genrs: [' روان شناختی', ' سیاسی', ' سورئال'],
        writer: 'رضا براهنی',
        name: 'روزگار دوزخی آقای ایاز',
        rate: 3.6,
        photo: '@/images/ayaz.jepg',
      },
      {
        id: 'w5',
        genrs: [' روان شناختی', ' اجتماعی', ' واقع گرایانه'],
        writer: 'فئودور داستایوفسکی',
        name: 'قمار باز',
        rate: 4.1,
        photo: '@/images/qomarbaz.jepg',
      },
      {
        id: 'w6',
        genrs: [' فلسفی', ' روان شناختی', ' واقع گرایانه'],
        writer: 'لئوتولستوی',
        name: 'مرگ ایوان ایلیچ',
        rate: 3.9,
        photo: '@/images/evanilich.jepg',
      },
      {
        id: 'w7',
        genrs: [' اجتماعی', ' سیاسی', ' تاریخی'],
        writer: 'سیمین دانشور',
        name: 'سوووشون',
        rate: 3.2,
        photo: '@/images/soovashoon.jepg',
      },
      {
        id: 'w8',
        genrs: [' فلسفی', ' ابزورد'],
        writer: 'ساموئل بکت',
        name: 'در انتظار گودو',
        rate: 4.8,
        photo: '@/images/darentezargodo.webp',
      },
      {
        id: 'w9',
        genrs: [' عاشقانه', ' اجتماعی', ' طنزآمیز'],
        writer: 'جین آستین',
        name: 'اما',
        rate: 2.1,
        photo: '@/images/ema.webp',
      },
    ],
  }),
  getters,
})

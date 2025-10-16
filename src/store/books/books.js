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
      },
      {
        id: 'w2',
        writer: 'صادق هدایت',
        name: 'زنده به گور',
        rate: 3.7,
      },
      {
        id: 'w3',
        writer: 'صادق چوبک',
        name: 'تنگسیر',
        rate: 4.7,
      },
      {
        id: 'w4',
        writer: 'رضا براهنی',
        name: 'روزگار دوزخی آقای ایاز',
        rate: 3.6,
      },
      {
        id: 'w5',
        writer: 'فئودور داستایوفسکی',
        name: 'قمار باز',
        rate: 4.1,
      },
      {
        id: 'w6',
        writer: 'لئوتولستوی',
        name: 'مرگ ایوان ایلیچ',
        rate: 3.9,
      },
      {
        id: 'w7',
        writer: 'سیمین دانشور',
        name: 'سوووشون',
        rate: 3.2,
      },
      {
        id: 'w8',
        writer: 'ساموئل بکت',
        name: 'در انتظار گودو',
        rate: 4.8,
      },
      {
        id: 'w9',
        writer: 'جین آستین',
        name: 'اما',
        rate: 2.1,
      },
    ],
  }),
  getters,
})

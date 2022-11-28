import { defineStore } from 'pinia'


export const useUrldevStore = defineStore('url', () => {
  const urlMain = "http://127.0.0.1:3000/api/members"
  const ipMain = "127.0.0.1"
  const portMain = "3000"

  return {  urlMain, ipMain, portMain  }
})

export const useUrlprodStore = defineStore('url', () => {
    const urlMain = "https://fredgruwedev.com/api/members"
    const ipMain = "fredgruwedev.com"
    const portMain = "8001"
  
    return {  urlMain, ipMain, portMain  }
  })
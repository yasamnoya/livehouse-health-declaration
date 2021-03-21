<template>
  <v-container pa-5>
    <v-card pa-5>
      <v-card-title class="display-1">{{ title }}</v-card-title>
      <v-card-text>
        {{ info }}
      </v-card-text>
      <v-form>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="12"
            >
              <v-text-field
                v-model="data.name"
                label="姓名 Name"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="12"
            >
              <v-text-field
                v-model="data.phone"
                label="手機 Phone Number"
                required
              ></v-text-field>
            </v-col>

            <v-card-text class="body-1 text-center red--text">{{ remind }}</v-card-text>

            <v-col
              cols="12"
              md="12"
            >
              <v-btn
                block
                color="primary"
                elevation="4"
                v-on:click="submit"
              >送出 Submit</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
    <v-expand-transition>
      <v-card
        v-show="gotResponse"
        class="mt-5"
      >
        <v-card-title class="display-1">已成功送出！</v-card-title>
        <v-card-text>姓名 Name: {{ resData.name }}</v-card-text>
        <v-card-text>手機 Phone Number: {{ resData.phone }}</v-card-text>
      </v-card>
    </v-expand-transition>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DeclarationForm',

  metaInfo: {
    title: '入場實名表單'
  },

  data: () => ({
    title: '入場實名表單',
    info: '因配合防疫，請詳實填寫以下實聯制表單。\n所蒐集的個人資料將依據「傳染病防治法」相關規範辦理，\n未來必要時將提供執行傳染病防疫工作的政府單位。\n同時提醒您，如有出入公共場合、人群眾多的室內空間，敬請配戴口罩並勤加洗手。',
    remind: '請截圖表單送出後頁面以利工作人員查驗',
    data: {
      name: '',
      phone: ''
    },
    resData: {
      name: '',
      phone: ''
    },
    gotResponse: false
  }),

  methods: {
    submit () {
      this.gotResponse = false
      const URL = 'http://localhost:8000/declarations'

      axios.post(URL, this.data)
        .then((res) => {
          this.gotResponse = true
          this.resData = res.data
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

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
              md="4"
            >
              <v-text-field
                v-model="name"
                label="姓名 Name"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="phone"
                label="手機 Phone Number"
                required
              ></v-text-field>
            </v-col>

            <v-card-text class="body-1 text-center red--text">{{ remind }}</v-card-text>

            <v-col
              cols="12"
              md="4"
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
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DeclarationForm',

  data: () => ({
    title: '入場實名表單',
    info: '因配合防疫，請詳實填寫以下實聯制表單。\n所蒐集的個人資料將依據「傳染病防治法」相關規範辦理，\n未來必要時將提供執行傳染病防疫工作的政府單位。\n同時提醒您，如有出入公共場合、人群眾多的室內空間，敬請配戴口罩並勤加洗手。',
    remind: '請截圖表單送出後頁面以利工作人員查驗',
    name: '',
    phone: ''
  }),

  methods: {
    submit () {
      const URL = 'http://localhost:8000/declarations'
      const data = {
        name: this.name,
        phone: this.phone
      }

      axios.post(URL, data)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }
  }
}
</script>

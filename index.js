
const { createApp } = Vue;
// const url = 'https://vue3-course-api.hexschool.io/v2'; // 請加入站點
// const path = 'jasonfu-api-vuetest'; // 請加入個人 API Path

const app = createApp({
  data() {
    return {
      url : 'https://vue3-course-api.hexschool.io/v2', // 請加入站點
      path: 'jasonfu-api-vuetest' ,// 請加入個人 API Path
      user: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    getLogin() {  //call登入API
      // const loginBtn = document.querySelector('#login');
      // const emailInput = document.querySelector('#username');
      // const pwInput = document.querySelector('#password');

      // const user = {
      //   username: emailInput.value,
      //   password: pwInput.value
      // }
      axios.post(`${this.url}/admin/signin`, this.user)
        .then(res => {
          const { token, expired } = res.data;  //取得API回傳的token&expired
          document.cookie = `jasonToken=${token}; expires=${new Date(expired)};`;  //將token&expired儲存至cookie  
          alert(res.data.message);
          window.location.href = "./product.html";  //頁面跳轉
        })
        .catch(err => {
          alert(err.data.message)
          console.dir(err.data);
        })
    },

  },
  mounted() {
  }
});

app.mount('#app');


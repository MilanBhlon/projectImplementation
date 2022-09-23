      const Home = {
        template: `#home-template`,
        props: ['homemessage'],
      }
      const Program = {
        template: `#program-template`,
        data() {
          return {
            programs: [
              {value: 'Hypertrophy'},
              {value: 'Strength'},
              {value: 'Weight Loss'},
              {value: 'Nutrional Advice'},
              {value: 'Cardiovascular Fitness'},
            ]
          }
        }
      }

      const Login = {
        template:`#login-template`,
        data() {
          return {
            users: [
              {id:0, value:"Member"},
              {id:1, value:"Personal Trainer"}
            ]
          }
        },
      }

      const About = {
        template: `#about-template`,
      }

      const Contact = {
        template: `#contact-template`,
        data() {
          return {
            countries: [
              {id: 3, value: "Australia"},
              {id: 4, value: "Nepal"},
              {id: 5, value: "China"},
              {id: 6, value: "Russia"},
              {id: 7, value: "India"},
            ],
            firstname: '',
            lastname: '',
            email: ''
          }
        },
      }

      const Search = {
        template: `#search-template`,
      }

      Vue.component ('globalcomponent', {
        template: `
        <div>
        <h1><slot></slot></h1>
        </div>
        `,
        data() {
          return {
            aboutpage: 'This is about page'
          }
        }
      })

      //mixin concept
      const myMixin = {
        methods: {
          pressed(val) {
            alert(val)
          }
        }
       }
        const myComp1 = {
          template: `<div>
          <button @click="pressed('There is no bootcamp scheduled in your locality this week!')" 
          style="font-size: 30px;">Click to find out about the bootcamp this week!</button>
          </div>`,
          mixins: [myMixin]
        }
  
      

  
      const routes = [
        { path: "/", component: Home },
        { path: "/fitness", component: Program },
        { path: "/login", component: Login },
        { path: "/about", component: About },
        { path: "/contact", component: Contact },
        { path: "/search", component: Search },
      ];
      
      const router = new VueRouter({
        routes: routes,
      });

      var app = new Vue({
        el: "#app",
        data() {
          return {
            message: "Hello world",
            show: false
          };
        },
        //component registration
        components: {
          'myComp1': myComp1,
          
        },

        router: router,
      });

Vue.component('vInput',{
  props:{
    value:{
      type:[String,Number],
      default:""
    }
  },
  render(h){
    let _this = this;
    return h('div',[
      h('span','昵称：'),
      h('input',{
        attrs:{
          type:"text"
        },
        domProps:{
          value:this.value
        },
        on:{
          input(event){
            _this.value = event.target.value;
            _this.$emit('input',event.target.value)
          }
        }
      })
    ])
  }
})

Vue.component("vTextarea",{
  props:{
    value:{
      type:[String,Number],
      default:""
    }
  },
  render(h){
    let _this = this;
    return h('div',[
      h('span','留言内容'),
      h('textarea',{
        attrs:{
          placeholder:"请输入聊天内容",
          id:'textContent'
        },
        domProps:{
          value:this.value
        },
        ref:'message',
        on:{
          input(event){
            _this.value = event.target.value;
            _this.$emit('input',event.target.value)
          }
        }
      })
    ])
  }
})
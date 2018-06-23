Vue.component('list',{
  props:{
    list:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  render(h){
    let _this = this;
    let list = [];
    this.list.forEach( (msg,index) => {
      let node = h('div',{
        attrs:{
          class:"list-item"
        }
      },[
        h('span',msg.name + ":"),
        h('div',{
          attrs:{
            class:"list-msg"
          }
        },[
          h('p',msg.message),
          h("a",{
            attrs:{
              class:"list-del"
            },
            on:{
              click(){
                _this.handleDelete(index);
              }
            }
          },'删除'),
          h('a',{
            attrs:{
              class:"list-reply"
            },
            on:{
              click(){
                _this.handleReply(index);
              }
            }
          },'回复')
        ])
      ]);
      list.push(node);
    });
    if (this.list.length) {
      return h('div',{
        attrs:{
          class:"list"
        }
      },list)
    } else {
      return h('div',{
        attrs:{
          class:"list-nothing"
        }
      },'留言列表为空')
    }
  },
  methods:{
    handleReply(index){
      document.querySelector("#textContent").focus();
      this.$emit('reply',index);
    },
    handleDelete(index){
      this.$emit('del',index)
    }
  }
})
<script setup lang="ts">
import { ref } from 'vue'

const prop = defineProps({
  msg: {
    type: String,
    default: 'ddd'
  }
})
const emit = defineEmits(['increment'])
// const msg = '123'
/* const count = ref(0)
interface User {
      name:String
      age:Number
    } */
/* defineComponent({
  name: 'HelloWorld',
  props: {
    message: {
      type: String,
      required: true
    },
    abc: {
      type: Number,
      required: true
    },
    obj: {
      type: Object as PropType<User>,
      default: () => {}
    }
  },

  setup (props) {
    // props.abc
    // props.obj
    props.message.split('') // 正确, 'message' 被声明为字符串
  }
}) */
console.log('de', prop.msg)
const count = ref(100)
const increment = () => {
  count.value++
  emit('increment')
}
</script>

<template>
  <p>{{ count }}</p>
  <p>{{ prop.msg }}</p>
  <button @click="increment">
    increment
  </button>
  <h1>msg:{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VS Code</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Docs
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Docs</a>
  </p>

  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

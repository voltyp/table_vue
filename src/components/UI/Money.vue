<template>
  <input
    type="text"
    v-model="valueInput"
    v-money="valueInput"
    class="ui-money"
  />
</template>

<script>
export default {

  name: 'UiMoney',

  props: {
    value: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      valueInput: '',
    };
  },
  directives: {
    money: {
      update(el, binding, oldValue) {
        if (true) {
          const num = binding.value.replace(/\s/g, '');
          console.log('num', num);
          console.log('oldValue', oldValue);
          el.value = new Intl.NumberFormat().format(+num).replace(',', '.');
        }
      },
    },
  },
};
</script>

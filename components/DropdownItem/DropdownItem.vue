<template>
  <li :class="containerClass" role="button">
    <i
      class="w-6 h-6 text-2xl leading-6"
      v-if="prefix != ''"
      :class="prefix"
      aria-hidden="true"
    >
    </i>
    <div class="flex-1">
      <slot />
    </div>
    <i
      class="w-6 h-6 leading-6"
      v-if="postfix != ''"
      :class="postfix"
      aria-hidden="true"
    >
    </i>
  </li>
</template>

<script>
export default {
  name: 'y-dropdown-item',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    prefix: {
      type: String,
      default: '',
    },
    postfix: {
      type: String,
      default: '',
    },
  },
  computed: {
    containerClass() {
      return [
        'dropdown-item',
        'flex flex-row items-center justify-between gap-2',
        'pl-5 py-3 pr-2',
        'relative',
        'cursor-pointer',
        'hover:bg-GREY-3',
        {
          'bg-GREY-3': this.active,
        },
      ];
    },
  },
};
</script>

<style>
.dropdown-item:hover > div > .dropdown-inner-container {
  display: inline-block;
}
</style>

<template>
  <div :class="paginationClass">
    <div class="mr-6 text-sm font-semibold text-BLACK-2">
      {{ pageRange }}-{{ perPage }} of {{ total }}
    </div>
    <div class="mr-4">
      <button
        :class="paginationItemClass"
        @click.prevent="changePage(prevPage)"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            class="#9AA1B4"
            d="M10.4712 3.52729C10.2109 3.26694 9.78878 3.26694 9.52843 3.52729L5.52843 
            7.52729C5.26808 7.78764 5.26808 8.20975 5.52843 8.4701L9.52843 
            12.4701C9.78878 12.7305 10.2109 12.7305 10.4712 12.4701C10.7316 
            12.2098 10.7316 11.7876 10.4712 11.5273L6.94265 7.9987L10.4712 
            4.4701C10.7316 4.20975 10.7316 3.78764 10.4712 3.52729Z"
          />
        </svg>
      </button>
    </div>
    <button
      @click.prevent="changePage(1)"
      :class="[
        current === 1 ? 'bg-BLUE text-WHITE border-none hover:bg-BLUE' : '',
        paginationItemClass,
      ]"
    >
      1
    </button>
    <span class="px-3 text-GREY-1" v-if="hasFirst()">...</span>
    <button
      @click.prevent="changePage(item)"
      v-for="(item, index) in pages"
      :key="index"
      :class="[
        current === item ? 'bg-BLUE text-WHITE border-none hover:bg-BLUE' : '',
        paginationItemClass,
      ]"
    >
      {{ item }}
    </button>
    <span class="px-3 text-GREY-1" v-if="hasLast()">...</span>
    <button
      @click.prevent="changePage(totalPages)"
      :class="[
        current === totalPages
          ? 'bg-BLUE text-WHITE border-none hover:bg-BLUE'
          : '',
        paginationItemClass,
      ]"
    >
      {{ totalPages }}
    </button>
    <div class="ml-4">
      <button
        :class="paginationItemClass"
        @click.prevent="changePage(nextPage)"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.52876 3.52729C5.78911 3.26694 6.21122 3.26694 6.47157 3.52729L10.4716 7.52729C10.7319 7.78764 10.7319 8.20975 10.4716 8.4701L6.47157 12.4701C6.21122 12.7305 5.78911 12.7305 5.52876 12.4701C5.26841 12.2098 5.26841 11.7876 5.52876 11.5273L9.05735 7.9987L5.52876 4.4701C5.26841 4.20975 5.26841 3.78764 5.52876 3.52729Z"
            fill="#9AA1B4"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'y-pagination',
  props: {
    total: {
      type: Number,
      default: 10,
    },
    perPage: {
      type: Number,
      default: 2,
    },
    pageRange: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    hasFirst() {
      return this.rangeStart !== 1;
    },
    hasLast() {
      return this.rangeEnd < this.totalPages;
    },
    hasPrev() {
      return this.current > 1;
    },
    hasNext() {
      return this.current < this.totalPages;
    },
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.current = page;
        this.$emit('page-changed', page);
      }
    },
  },
  computed: {
    pages() {
      let pages = [];
      let i = 0;
      for (i = this.rangeStart + 1; i <= this.rangeEnd; i++) {
        if (i != this.totalPages) {
          pages.push(i);
        }
      }
      return pages;
    },
    rangeStart() {
      let start = this.current - this.pageRange;
      return start > 0 ? start : 1;
    },
    rangeEnd() {
      let end = this.current + this.pageRange;
      return end < this.totalPages ? end : this.totalPages;
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    nextPage() {
      return this.current + 1;
    },
    prevPage() {
      return this.current - 1;
    },
    paginationClass() {
      return ['flex', 'gap-1', 'items-center'];
    },
    paginationItemClass() {
      return [
        'w-9 h-9',
        'border border-BORDER rounded-full',
        'text-sm font-semibold text-BLACK-2',
        'inline-flex items-center justify-center',
        'hover:bg-GREY-3',
        'transition-all duration-300',
      ];
    },
  },
};
</script>

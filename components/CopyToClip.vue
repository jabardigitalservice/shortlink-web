<template>
  <div class="flex items-center justify-center">
    <div class="relative w-full">
      <input
        type="search"
        class="p-3 py-4 w-full inline-flex items-center gap-x-1 text-md font-medium bg-blue-100 text-blue-800 rounded"
        :value="url"
        disabled
      />
      <button
        @click="copyToClipboard()"
        title="Copy to Clipboard"
        class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full bg-blue-100 rounded flex flex-col items-center justify-center"
      >
        <IconSvg
          v-show="!copyNotification"
          class="flex-shrink-0 w-5 h-5 mb-1 stroke-current !bg-gray-900"
          icon="/icons/common/copy.svg"
          :size="22"
        />

        <IconSvg
          v-show="copyNotification"
          class="flex-shrink-0 w-5 h-5 mb-1 bg-green-500 stroke-current"
          icon="/icons/common/copied.svg"
          :size="22"
          fillColor="#3CB043"
        />

        <span
          v-show="!copyNotification"
          class="text-[10px] font-normal text-gray-900"
          >Copy</span
        >
        <span
          v-show="copyNotification"
          :class="{ 'text-green-500': copyNotification }"
          class="text-[10px] font-normal text-gray-500"
          >Copied</span
        >
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    default: "",
  },
});

const copyNotification = ref(false);
const copyToClipboard = () => {
  copyNotification.value = true;
  navigator.clipboard.writeText(props.url);
  setTimeout(function () {
    copyNotification.value = false;
  }, 2000);
};
</script>

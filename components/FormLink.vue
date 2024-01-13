<template>
  <form class="flex flex-wrap gap-3 w-full px-5">
    <div class="font-bold text-[32px] mb-0">
      <p>Shorten a long link</p>
    </div>

    <label
      class="relative w-full flex flex-col mb-2 text-[20px] font-medium text-gray-900"
    >
      <span class="font-bold mb-3">Paste a long URL</span>
      <input
        v-model="fields.longLink"
        class="rounded-md  pl-6 pr-2 py-2 border-2 border-gray-500 placeholder-gray-400"
        :class="{ isError: elongLink.length }"
        type="text"
        name="long-link"
        placeholder="Example: https://long-link.com/long"
      />
      <span
        v-for="(msg, index) in elongLink"
        :key="index"
        class="font-normal text-red-500 text-sm"
      >
        {{ msg }}
      </span>
    </label>

    <div
      class="relative flex-1 flex flex-col mb-0 text-[20px] font-medium text-gray-900 w-full"
    >

      <label class=" mb-2 font-bold text-gray-900">Domain</label>
      <div class="relative mb-6">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
        >
          <IconSvg icon="/icons/common/key.svg" :size="24" />
        </div>
        <input
          type="text"
          disabled
          class="rounded-md pl-12 pr-2 py-2 border-2 border-gray-500 placeholder-gray-900 bg-gray-400 w-full"
          placeholder="lnk.digiteam.id/"
        />
      </div>
    </div>
    

    <div
      class="relative flex-1 flex flex-col mb-0 text-[20px] font-medium text-gray-900"
    >
      <label class="font-bold flex items-center gap-3 mb-2">
        Enter a back-half
        <span class="font-normal">(optional)</span>
        <span class="relative group">
          <span
            class="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-[255px] top-1/2 bg-black text-white"
          >
            Add your own words at the end of a link (e.g.,
            “lnk.digiteam.id/twitter_bits” instead of
            “lnk.digiteam.id/2ZonlUz”)</span
          >
          <IconSvg icon="/icons/common/answer.svg" :size="16" />
        </span>
      </label>
      <input
        class="rounded-md  pl-6 pr-2 py-2 border-2 border-gray-500 placeholder-gray-400"
        type="text"
        name="short-link"
        v-model="fields.shortLink"
        placeholder="example: favorite-link"
        :class="{ isError: eshortLink.length }"
      />

      <span
        v-for="(msg, index) in eshortLink"
        :key="index"
        class="font-normal text-red-500 text-sm"
      >
        {{ msg }}
      </span>
    </div>
  </form>
</template>

<style scoped>
.isError {
  @apply border-red-500;
}
</style>

<script setup>
import { required, helpers, url } from "@vuelidate/validators";

const emit = defineEmits(["submit"]);

const fields = reactive({
  longLink: null,
  shortLink: null,
});

const v$ = useValidator(
  {
    longLink: {
      required: helpers.withMessage(
        "This value should not be blank.",
        required
      ),
      url: helpers.withMessage("Please enter a valid URL.", url),
    },
    shortLink: {
      required: helpers.withMessage(
        "This value should not be blank.",
        required
      ),
    },
  },
  fields
);

const elongLink = computed(() => v$.getError("longLink"));
const eshortLink = computed(() => v$.getError("shortLink"));

async function onSubmit() {
  const isValid = await v$.validator.$validate();
  if (!isValid) {
    return;
  }

  

  emit("submit", fields);
}

const submitFormRef = () => {
  onSubmit();
};

defineExpose({ submitFormRef });
</script>

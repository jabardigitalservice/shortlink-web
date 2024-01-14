<template>
  <form class="flex flex-wrap gap-3 w-full px-5">
    

    <label
      class="relative w-full flex flex-col mb-2 text-[20px] font-medium text-gray-900"
    >
      <span class="font-bold mb-3">Enter your QR Code destination</span>
      <input
        v-model="fields.longLink"
        class="rounded-md pl-6 pr-2 py-2 border-2 border-gray-500 placeholder-gray-400"
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
  },
  fields
);

const elongLink = computed(() => v$.getError("longLink"));

async function onSubmit() {
  const isValid = await v$.validator.$validate();
  if (!isValid) {
    return;
  }

  emit("submit", fields);
}

const submitFormQRRef = () => {
  onSubmit();
};

defineExpose({ submitFormQRRef });
</script>

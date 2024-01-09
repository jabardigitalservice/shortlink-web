<template>
  <span :style="computedStyle" role="img" />
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  size: {
    type: Number,
    default: 24,
  },
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
  fillColor: {
    type: String,
    default: "#000",
  },
  mode: {
    type: String,
    default: "mask",
    validator: (value) => ["mask", "image"].includes(value),
  },
});

const computedStyle = computed(() => {
  if (props.mode === "mask") {
    return {
      "mask-image": `url(${props.icon})`,
      "mask-repeat": "no-repeat",
      "mask-size": "100% 100%",
      "-webkit-mask-image": `url(${props.icon})`,
      "-webkit-mask-repeat": "no-repeat",
      "-webkit-mask-size": "100% 100%",
      "background-color": props.fillColor,
      height: `${props.size}px`,
      width: `${props.size}px`,
      display: "inline-block",
    };
  } else {
    return {
      background: `url(${props.icon}) 0% 0% / 100% 100% no-repeat`,
      "background-color": "transparent",
      "background-size": "100% 100%",
      height: `${props.height}px`,
      width: `${props.width}px`,
      display: "inline-block",
    };
  }
});
</script>

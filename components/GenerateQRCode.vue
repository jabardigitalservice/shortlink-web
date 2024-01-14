<template>
  <div class="text-center">
    <div class="my-4">
      <div v-if="qrCodeImage" class="relative inline-block">
        <img :src="qrCodeImage" alt="QR Code" class="mb-2" />
        <img
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16"
          src="~/public/logo-jds.png"
          alt="Centered Icon"
        />
      </div>
      <div class="relative inline-block" v-else>
        <IconSvg
          icon="/icons/common/qr-code-example.svg"
          :size="100"
          class="mb-2"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import QRCode from "qrcode";

const qrCodeImage = ref("");

const generateQrCode = async (value) => {
  try {
    const generatedQrCode = await QRCode.toDataURL(value);
    qrCodeImage.value = generatedQrCode;
  } catch (error) {
    console.error("Error generate QR code:", error);
  }
};

const downloadQrCode = () => {
  const link = document.createElement("a");
  link.href = qrCodeImage.value;
  link.download = "qr-code.png";
  link.click();
};

defineExpose({ generateQrCode, downloadQrCode });
</script>

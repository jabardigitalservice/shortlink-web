<template>
  <div class="h-screen flex items-center justify-center bg-[#F5F6F7]">
    <div class="flex flex-wrap w-[1120px] p-5">
      <div class="w-full">
        <ul class="flex mb-[-3px] list-none justify-center">
          <li class="tabs-title">
            <a
              class="px-4 text-gray-800 rounded-t-lg cursor-pointer group"
              :aria-selected="openTab === 1 ? 'true' : 'false'"
              @click="toggleTabs(1)"
              :class="{
                'text-black hover-active ': openTab !== 1,
                'text-green-600 border-active': openTab === 1,
              }"
            >
              <IconSvg
                class="mr-2"
                :class="{
                  ' group-hover:!bg-blue-600 ': openTab !== 1,
                  '!bg-green-600 ': openTab === 1,
                }"
                icon="/icons/common/link.svg"
                :size="24"
              />
              <span class="text-xl">Short Link</span>
            </a>
          </li>
          <li class="tabs-title">
            <a
              class="px-4 text-gray-800 rounded-t-lg cursor-pointer group"
              @click="toggleTabs(2)"
              :aria-selected="openTab === 2 ? 'true' : 'false'"
              :class="{
                'text-black hover-active ': openTab !== 2,
                'text-green-600 border-active': openTab === 2,
              }"
            >
              <IconSvg
                class="mr-2"
                :class="{
                  ' group-hover:!bg-blue-600 ': openTab !== 2,
                  '!bg-green-600 ': openTab === 2,
                }"
                icon="/icons/common/qr-code.svg"
                :size="24"
              />
              <span class="text-xl">QR Code</span>
            </a>
          </li>
        </ul>

        <!-- <div class="flex flex-col break-words shadow-none border-3 border-gray-300 border-solid rounded-16"> -->
        <div
          class="px-4 py-5 flex-auto border-[3px] border-gray-300 border-solid rounded-lg bg-white mt-0"
        >
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <form class="flex flex-wrap gap-3 w-full p-5">
                <div class="font-bold text-[32px] mb-0">
                  <p>Shorten a long link</p>
                </div>

                <label
                  class="relative w-full flex flex-col mb-2 text-[20px] font-medium text-gray-900"
                >
                  <span class="font-bold mb-3">Paste a long URL</span>
                  <input
                    class="rounded-md peer pl-6 pr-2 py-2 border-2 border-gray-500 placeholder-gray-400"
                    type="text"
                    name="long-link"
                    placeholder="Example: https://long-ling.com/long"
                  />
                </label>

                <label
                  class="relative flex-1 flex flex-col mb-2 text-[20px] font-medium text-gray-900"
                >
                  <span class="font-bold mb-3">Domain</span>
                  <input
                    class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-500 placeholder-gray-500"
                    type="text"
                    name="domain"
                    placeholder="MM/YY" disabled
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-900 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </label>

                <label
                  class="relative flex-1 flex flex-col mb-2 text-[20px] font-medium text-gray-900"
                >
                  <span class="font-bold flex items-center gap-3 mb-3">
                    Enter a back-half <span class="font-normal">(optional)</span>
                    <span class="relative group">
                      <span
                        class="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white"
                      >
                        Hey ceci est une infobulle !</span
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </span>
                  <input
                    class="rounded-md peer pl-6 pr-2 py-2 border-2 border-gray-500 placeholder-gray-400"
                    type="text"
                    name="short-link"
                    placeholder="example: favorite-link"
                  />
                
                </label>
              </form>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut
                a corrupti odit quos, nulla odio possimus error enim quae dolor
                velit deserunt adipisci, voluptatibus magnam. Enim tempore
                similique doloremque fugit laborum quod natus labore culpa
                dignissimos magni? Earum, expedita facere natus in sed magnam
                laborum exercitationem. Aliquam accusantium similique quibusdam
                officiis voluptatibus? Similique soluta autem vel labore animi,
                totam earum culpa iste officiis laborum ipsam accusantium est
                asperiores ad minima, nostrum doloremque aliquam quos impedit
                magni, explicabo laboriosam tempore. Tempore maiores quis iste
                repellendus fugiat velit non minima ipsam, consectetur ullam
                nostrum in omnis hic ratione ex! Quos, officia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>

<style>
.border-active {
  @apply border-t-[3px] border-l-[3px] border-r-[3px] bg-white border-gray-300;
}

.tabs-title > a {
  border-top: 3px transparent solid;
  border-left: 3px transparent solid;
  border-right: 3px transparent solid;
  border-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 16px 24px;
}

.tabs-title > a[aria-selected="true"] {
  box-shadow: none;
  border-color: #e8e9eb;
}

.tabs-title a {
  display: flex;
  align-items: center;
  font-size: 20px;
  position: relative;
}

.hover-active {
  @apply hover:text-blue-600 hover:bg-gray-400;
}
</style>

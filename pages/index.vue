<template>
  <div class="md:h-screen h-full flex items-center justify-center bg-[#F5F6F7]">
    <div class="flex flex-wrap w-[1120px] p-5 mt-[50px]">
      <div class="w-full">
        <ul class="flex mb-[-3px] list-none justify-center">
          <li class="tabs-title">
            <a
              class="px-4 text-gray-800 rounded-t-lg cursor-pointer group"
              :aria-selected="state.openTab === 1 ? 'true' : 'false'"
              @click="toggleTabs(1)"
              :class="{
                'text-black hover-active ': state.openTab !== 1,
                ' border-active font-bold': state.openTab === 1,
              }"
            >
              <IconSvg
                class="mr-2"
                :class="{
                  ' group-hover:!bg-blue-600 ': state.openTab !== 1,
                  '!bg-blue-600 ': state.openTab === 1,
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
              :aria-selected="state.openTab === 2 ? 'true' : 'false'"
              :class="{
                'text-black hover-active ': state.openTab !== 2,
                ' border-active font-bold': state.openTab === 2,
              }"
            >
              <IconSvg
                class="mr-2"
                :class="{
                  ' group-hover:!bg-blue-600 ': state.openTab !== 2,
                  '!bg-blue-600 ': state.openTab === 2,
                }"
                icon="/icons/common/qr-code.svg"
                :size="24"
              />
              <span class="text-xl">QR Code</span>
            </a>
          </li>
        </ul>

        <div
          class="px-4 py-5 flex-auto border-[3px] border-gray-300 border-solid rounded-lg bg-white mt-0"
        >
          <div class="tab-content tab-space">
            <div
              v-bind:class="{
                hidden: state.openTab !== 1,
                block: state.openTab === 1,
              }"
            >
              <FormLink ref="formLinkRef" @submit="handleSubmit" />

              <div class="mt-5 md:mt-0 px-5" v-if="!state.resultGenerateLink">
                <span
                  class="p-3 w-full inline-flex items-center gap-x-1 text-md font-medium bg-blue-100 text-blue-800 rounded"
                >
                  <IconSvg
                    class="mr-3 !bg-blue-800"
                    icon="/icons/common/stars.svg"
                    :size="24"
                  />
                  Make your link unique
                </span>
              </div>

              <div class="mt-5 md:mt-2 px-5" v-else>
                <CopyToClip
                  :url="state.resultGenerateLink"
                  
                />
              </div>

              <div class="px-5 mt-5">
                <button
                  type="button"
                  v-if="state.loading"
                  disabled
                  class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <span
                    class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                    role="status"
                    aria-label="loading"
                  ></span>
                  Loading...
                </button>
                <button
                  v-else
                  type="button"
                  @click="submitRef()"
                  class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <IconSvg
                    class="!bg-white"
                    icon="/icons/common/star-fall-2.svg"
                    :size="24"
                  />
                  Generate your unique link
                </button>
              </div>
            </div>
            <div
              v-bind:class="{
                hidden: state.openTab !== 2,
                block: state.openTab === 2,
              }"
            >
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

<script setup>
const runtimeConfig = useRuntimeConfig();
const state = reactive({
  openTab: 1,
  loading: false,
  resultGenerateLink: "",
});

function toggleTabs(tabNumber) {
  state.openTab = tabNumber;
}

const formLinkRef = ref(null);

function submitRef() {
  if (formLinkRef.value) {
    formLinkRef.value.submitFormRef();
  }
}

async function handleSubmit(fields) {
  state.loading = true;
  state.resultGenerateLink = "";
  try {
    const dataForm = {
      url: fields.longLink,
      short_link: fields.shortLink,
    };
    const { data } = await useFetch(runtimeConfig.public.apiBase + "/shorten", {
      method: "post",
      body: dataForm,
    });

    state.resultGenerateLink = data.value.data.short_link;

    state.loading = false;
  } catch (error) {
    console.error(error);
    state.loading = false;
  }
}
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

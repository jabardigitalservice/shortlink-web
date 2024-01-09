<template>
  <div class="h-screen flex items-center justify-center bg-[#F5F6F7]">
    <div class="flex flex-wrap">
      <div class="max-w-[1120px]">
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
                icon="/icons/common/copied.svg"
                :size="24"
              />
              <span class="text-xl">Short Link</span>
            </a>
          </li>
          <li class="tabs-title">
            <a
              class="px-4 text-gray-800 rounded-t-lg cursor-pointer"
              @click="toggleTabs(2)"
              :aria-selected="openTab === 2 ? 'true' : 'false'"
              :class="{
                'text-black hover-active ': openTab !== 2,
                'text-green-600 border-active': openTab === 2,
              }"
            >
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
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                nobis provident perferendis officiis minus sint, illum magni
                tempore, minima mollitia maiores optio voluptatum eveniet
                accusamus quibusdam nihil. Eligendi quis suscipit, quam
                provident modi aperiam soluta numquam dolor odit praesentium!
                Possimus temporibus saepe exercitationem officiis quasi tempore
                rerum iusto autem architecto ratione, ea quos, alias totam vero.
                Sed, facilis quisquam! Odio doloribus corporis rerum quia, saepe
                voluptas perferendis velit, fuga recusandae ad nihil est
                delectus nisi qui voluptates dicta unde maxime quasi voluptatem
                officia consequatur. Fugiat deleniti dolorem, eum ad sed, atque
                totam consequuntur in placeat aliquam asperiores vitae quo sunt?
              </p>
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
            <!-- </div> -->
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

<template>
  <div>
    <!-- Editing Mode Toggle -->
    <div class="actionsContainer no-print">
      <span style="margin-right: 2em">Editing Mode</span>
      <toggle-button v-model="editingMode" />
    </div>

    <!-- Header / Footer slots -->
    <div class="contentContainer">
      <div ref="headerContent">
        <slot name="header"></slot>
      </div>
      <div ref="footerContent">
        <slot name="footer"></slot>
      </div>
    </div>

    <!-- Editable content -->
    <div
      id="editContainer"
      class="sheet padding-10mm no-print"
      v-show="editingMode"
    >
      <div ref="mainContent">
        <slot></slot>
      </div>
    </div>

    <!-- Print container -->
    <div id="printContainer" ref="printContainer" v-show="!editingMode"></div>

    <!-- Debug view -->
    <div v-if="debugMode" class="sheet padding-10mm no-print">
      <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
import { last, isEmpty, head, isFunction, isUndefined } from "lodash";

export default {
  name: "default-print-layout",
  data() {
    return {
      editingMode: false,
    };
  },
  watch: {
    editingMode(newVal) {
      if (newVal) {
        this.sendUpdatedDOM();
      }
    },
  },
  mounted() {
    this.moveContentToPages();
  },
  updated() {
    this.moveContentToPages();
  },
  methods: {
    sendUpdatedDOM() {
      if (!isUndefined(window.ReactNativeWebView) && isFunction(window.ReactNativeWebView.postMessage)) {
        window.ReactNativeWebView.postMessage(
          document.getElementsByTagName("html")[0].outerHTML
        );
      }
    },
    createNewPage() {
      const headerContent = this.$refs.headerContent.cloneNode(true);
      const footerContent = this.$refs.footerContent.cloneNode(true);
      const newPage = document.createElement("div");
      const newPageContentContainer = document.createElement("div");

      newPageContentContainer.classList.add("pageContentContainer");
      newPage.classList.add("sheet", "padding-10mm");
      newPage.appendChild(headerContent);
      newPage.appendChild(newPageContentContainer);
      newPage.appendChild(footerContent);

      return newPage;
    },
    moveContentToPages() {
      const mainContent = this.$refs.mainContent.childNodes;
      const printContainer = this.$refs.printContainer;
      printContainer.innerHTML = "";

      let currentPage = last(printContainer.childNodes);
      if (isEmpty(currentPage)) {
        const newPage = this.createNewPage();
        printContainer.appendChild(newPage);
        currentPage = last(printContainer.childNodes);
      }

      const startingHeight = currentPage.scrollHeight;

      for (let i = 0; i < mainContent.length; i++) {
        const element = mainContent[i].cloneNode(true);
        let pageContentContainer = head(currentPage.getElementsByClassName("pageContentContainer"));
        pageContentContainer.appendChild(element);

        const currentHeight = currentPage.scrollHeight;
        if (currentHeight > startingHeight) {
          const newPage = this.createNewPage();
          printContainer.appendChild(newPage);
          currentPage = last(printContainer.childNodes);
          pageContentContainer = head(currentPage.getElementsByClassName("pageContentContainer"));
          pageContentContainer.appendChild(element);
        }
      }

      this.sendUpdatedDOM();
    },
  },
};
</script>

<style>
.actionsContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}
.contentContainer {
  display: none;
}
@media print {
  .no-print, .no-print * {
    display: none !important;
  }
}
</style>

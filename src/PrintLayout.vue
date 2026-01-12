<template>
    <div>
        <div class="actionsContainer no-print">
            <span style="margin-right: 2em">Editing Mode</span>
            <toggle-button
                v-model="editingMode"
            />
        </div>

        <div class="contentContainer">
            <div ref="headerContent">
                <slot name="header">
                    <DefaultHeader />
                </slot>
            </div>

            <div ref="footerContent">
                <slot name="footer">
                    <DefaultFooter />
                </slot>
            </div>
        </div>

        <div
            id="editContainer"
            class="sheet padding-10mm no-print"
            style="height: auto; overflow-x: none"
            v-show="editingMode"
        >
            <div ref="mainContent">
                <slot></slot>
            </div>
        </div>

        <div
            id="printContainer"
            ref="printContainer"
            v-show="!editingMode"
        ></div>

        <div
            v-if="debugMode"
            class="sheet padding-10mm no-print"
            style="height: auto; overflow-x: scroll"
        >
            <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
        </div>
    </div>
</template>

<style>
    .contentContainer { display: none }
    .actionsContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 1em;
    }
    input[type="text"] {
        border: none;
        border-bottom: #ccc solid 1px;
        margin-left: 1em;
        margin-right: 0.5em;
        font-size: 16px;
    }
    @media print
    {
        .no-print, .no-print *
        {
            display: none !important;
        }
    }
    #printContainer .no-print { display: none; }
    #editContainer .no-edit { display: none; }
</style>

<script>
import { last, isEmpty, head, isFunction, isUndefined } from 'lodash'

export default {
    name: 'default-print-layout',
    data() {
        return {
            editingMode: false,
        }
    },
    watch: {
        editingMode: function (newVal) {
            if (newVal) {
                this.sendUpdatedDOM();
            }
        }
    },
    mounted: function () {
        this.moveContentToPages()
    },
    updated: function() {
        this.moveContentToPages()
    },
    methods: {
        sendUpdatedDOM: function () {

            if (!isUndefined(window.ReactNativeWebView)
                && isFunction(window.ReactNativeWebView.postMessage)) {
                window
                    .ReactNativeWebView
                    .postMessage(
                        document.getElementsByTagName('html')[0].outerHTML
                    );
            }
        },
        createNewPage: function () {
            const headerContent = this.$refs.headerContent.cloneNode(true)
            const footerContent = this.$refs.footerContent.cloneNode(true)

            const newPage = document.createElement('div')
            const newPageContentContainer = document.createElement('div')

            newPageContentContainer.classList.add('pageContentContainer')

            newPage.classList.add('sheet', 'padding-10mm')
            newPage.appendChild(headerContent)
            newPage.appendChild(newPageContentContainer)
            newPage.appendChild(footerContent)

            return newPage
        },
        moveContentToPages: function () {
            const mainContent = this.$refs.mainContent.childNodes
            const printContainer = this.$refs.printContainer

            printContainer.innerHTML = ''

            let currentPage = last(printContainer.childNodes)

            if (isEmpty(currentPage)) {
                const newPage = this.createNewPage();

                printContainer.appendChild(newPage)
                currentPage = last(printContainer.childNodes)
            }

            const startingHeight = currentPage.scrollHeight

            for (let i = 0; i < mainContent.length; i++) {
                const element = mainContent[i].cloneNode(true)

                let pageContentContainer = head(
                    currentPage.getElementsByClassName('pageContentContainer')
                )

                pageContentContainer.appendChild(element)

                // Get the scroll height after adding element
                const currentHeight = currentPage.scrollHeight

                if (currentHeight > startingHeight) {
                    const newPage = this.createNewPage();

                    printContainer.appendChild(newPage)
                    currentPage = last(printContainer.childNodes)

                    let pageContentContainer = head(
                        currentPage.getElementsByClassName('pageContentContainer')
                    )

                    pageContentContainer.appendChild(element)
                }
            }

            printContainer.getElementsByTagName('INPUT').forEach(target => {
                target.readOnly = true
            })

            this.sendUpdatedDOM()
        }
    }
}
</script>
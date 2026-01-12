<template>
    <div>
        <textarea
            class="autoresize-textarea no-print"
            v-model="input"
            @keyup="$emit('update:value', input)"
            ref="textareaInput"
            v-bind:placeholder="placeholder"
            autocomplete="off"
        ></textarea>
        <div class="static-display no-edit">
            <p v-html="displayValue"></p>
        </div>
    </div>
</template>

<style scoped>
textarea.autoresize-textarea {
    margin-top: 1em;
    margin-bottom: 1em;
    width: 100%;
    min-height: 2em;
    border: #ccc 1px solid;
    margin: 1em 0;
}
div.static-display {
    width: 100%;
    border-bottom: #ccc 1px solid;
    margin: 1em 0;
    white-space: pre;
}
</style>

<script>
function resize() {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
}

export default {
    data() {
        return {
            input: this.value
        }
    },
    computed: {
        displayValue: function () {
            if (!this.value || (this.value && this.value.length === 0) && this.placeholder) {
                return this.placeholder
            }

            return this.value.replace(/(?:\r\n|\r|\n)/g, '<br />')
        }
    },
    props: ['value', 'placeholder'],
    mounted: function () {
        const target = this.$refs.textareaInput;

        if (target) {
            target.style.height = `${target.scrollHeight}px`
            target.style['min-height'] = '2em';

            target.addEventListener('input', resize)
            target.setAttribute('autocomplete', 'off')
        }

    }
}
</script>
<template>
  <div class="flex flex-col container mx-auto space-y-5">
    <label for="message">Morse code</label>
    <input
      id="message"
      type="text"
      class="p-3 text-lg border rounded border-blue-600"
      v-model="morseInput"
      @input="loadSentences"
    />

    <div class="border rounded p-2">
      <div v-for="sentence in sentences" :key="sentence">{{ sentence }}</div>
    </div>
  </div>
</template>

<script lang="ts">
const dico: Array<{ letter: string; code: string }> = [
  { letter: "a", code: ".-" },
  { letter: "b", code: "-..." },
  { letter: "c", code: "-.-." },
  { letter: "d", code: "-.." },
  { letter: "e", code: "." },
  { letter: "f", code: "..-." },
  { letter: "g", code: "--." },
  { letter: "h", code: "...." },
  { letter: "i", code: ".." },
  { letter: "j", code: ".---" },
  { letter: "k", code: "-.-" },
  { letter: "l", code: ".-.." },
  { letter: "m", code: "--" },
  { letter: "n", code: "-." },
  { letter: "o", code: "---" },
  { letter: "p", code: ".--." },
  { letter: "q", code: "--.-" },
  { letter: "r", code: ".-." },
  { letter: "s", code: "..." },
  { letter: "t", code: "-" },
  { letter: "u", code: "..-" },
  { letter: "v", code: "...-" },
  { letter: "w", code: ".--" },
  { letter: "x", code: "-..-" },
  { letter: "y", code: "-.--" },
  { letter: "z", code: "--.." },
];

export default {
  data() {
    return {
      morseInput: "...---...",
      sentences: [],
      tmp: [],
    };
  },
  mounted() {
    this.loadSentences();
  },
  methods: {
    loadSentences() {
      const array = [];
      this.recursivCheck(this.morseInput.replace(/\s/g, ""), array);
      this.sentences = array;
    },
    recursivCheck(
      currentText: string,
      sentencesArray: string[],
      currentSentence = ""
    ) {
      if (currentText.length === 0) sentencesArray.push(currentSentence);
      dico.forEach((dicoEl) => {
        if (currentText.startsWith(dicoEl.code)) {
          this.recursivCheck(
            currentText.substring(dicoEl.code.length),
            sentencesArray,
            currentSentence.concat(dicoEl.letter)
          );
        }
      });
    },
  },
};
</script>

<style>
</style>
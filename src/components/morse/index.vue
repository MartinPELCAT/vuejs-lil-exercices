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
const dico: Array<{ key: string; value: string }> = [
  { key: "a", value: ".-" },
  { key: "b", value: "-..." },
  { key: "c", value: "-.-." },
  { key: "d", value: "-.." },
  { key: "e", value: "." },
  { key: "f", value: "..-." },
  { key: "g", value: "--." },
  { key: "h", value: "...." },
  { key: "i", value: ".." },
  { key: "j", value: ".---" },
  { key: "k", value: "-.-" },
  { key: "l", value: ".-.." },
  { key: "m", value: "--" },
  { key: "n", value: "-." },
  { key: "o", value: "---" },
  { key: "p", value: ".--." },
  { key: "q", value: "--.-" },
  { key: "r", value: ".-." },
  { key: "s", value: "..." },
  { key: "t", value: "-" },
  { key: "u", value: "..-" },
  { key: "v", value: "...-" },
  { key: "w", value: ".--" },
  { key: "x", value: "-..-" },
  { key: "y", value: "-.--" },
  { key: "z", value: "--.." },
];

export default {
  data() {
    return {
      morseInput: "..-",
      //   sentences: ["ea", "eet", "it", "u"],
      sentences: ["ea", "eet", "it", "u"],
      tmp: [],
    };
  },
  mounted() {
    this.loadSentences();
  },
  methods: {
    loadSentences() {
      const sentences = this.recursiveCheck(this.morseInput);

      //   console.log(sentences[0]);
      this.sentences = [];
      sentences.forEach((element) => {
        const res = this.buildSentence(element);

        const result =
          typeof res === "string"
            ? res
            : res?.filter((e) => typeof e === "string");
        this.sentences = [...this.sentences, ...result];
      });
      //   console.log(sentences);
    },
    recursiveCheck(input: string, output: string[]): string[] {
      const elements = output || [];
      dico.forEach((el) => {
        const next = [];
        if (input.startsWith(el.value)) {
          next.push(el.key);
          const sin = input.substring(el.value.length);
          const retu = this.recursiveCheck(sin, next);
          elements.push(retu);
        }
      });
      return elements;
    },
    buildSentence(element, sentences, sentence = ""): string {
      const sents = sentences || [];
      const [letter, ...rest] = element;
      if (rest.length === 0) return sentence.concat(letter);

      rest.forEach((el) => {
        const test = this.buildSentence(el, sents, sentence.concat(letter));

        if (test !== null) {
          sents.push(test);
        }
      });

      return sents;
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="flex flex-col container mx-auto space-y-5">
    <label for="message">Text to convert to TapCode</label>
    <input
      id="message"
      type="text"
      class="p-3 text-lg border rounded border-blue-600"
      v-model="message"
      @input="loadTapCode"
    />
    <label>Tap Code</label>
    <div class="border flex flex-col p-3 rounded">
      <div>{{ tapCode }}</div>
    </div>
  </div>
</template>
  

<script lang="ts">
const tapCodeGrid = [
  ["a", "b", "c/k", "d", "e"],
  ["f", "g", "h", "i", "j"],
  ["l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z"],
];

export default {
  data() {
    return {
      message: "Hello",
      tapCode: "",
    };
  },
  mounted() {
    this.loadTapCode();
  },
  methods: {
    loadTapCode() {
      const input: string = this.message;
      const inputLength = input.length;
      const tapCodeOutput = [];
      for (let index = 0; index < inputLength; index++) {
        const char = input[index];
        tapCodeGrid.forEach((array, lineIndex) => {
          array.forEach((letter, columnIndex) => {
            if (letter.split("/").includes(char.toLowerCase())) {
              const linePoints = Array(lineIndex + 1)
                .fill(".")
                .join("");
              const columnPoints = Array(columnIndex + 1)
                .fill(".")
                .join("");
              tapCodeOutput.push(`${linePoints} ${columnPoints} `);
            }
          });
        });
      }
      this.tapCode = tapCodeOutput.join("");
    },
  },
};
</script>


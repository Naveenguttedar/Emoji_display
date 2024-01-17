console.log(emojiList);
const emojiContainer = document.getElementById("emoji_container");
const emoji_list = [];
for (let i = 0; i < 60; i++)emoji_list.push(emojiList[i]);
console.log(emoji_list);
const createEmojiCard = (emojiObj) => {
  let div = document.createElement("div");
  div.innerHTML = `
            <p class="emoji">${emojiObj.emoji}</p>
            <p class="name">${emojiObj.aliases[0].replaceAll('_', " ")}</p>
            <p class="description">${emojiObj.description}</p>
        `
  div.classList.add("emoji_card");
  return div;
}
//rendering emojisss
emoji_list.map(emojiObj => {
  console.log(emojiObj);
  const emoji_card = createEmojiCard(emojiObj);
  emojiContainer.appendChild(emoji_card);
})
const emojiContainer = document.getElementById("emoji_container");
const emoji_search_input = document.getElementById("serach_emoji_input");
const btn_search = document.getElementById("btn_search");
const emoji_list = [];
for (let i = 0; i < 120; i++)emoji_list.push(emojiList[i]);
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
  const emoji_card = createEmojiCard(emojiObj);
  emojiContainer.appendChild(emoji_card);
})
//seraching emoji
const searchEmoji = (input, emojiList) => {
  return emojiList.filter((value) => value.aliases[0].includes(input))
}
//rerendering filterd emojisss
btn_search.addEventListener("click", () => {
  const seacrchValue = emoji_search_input.value;
  if (!seacrchValue) alert("Seacrch value can not be Empty.");
  else {
    emojiContainer.innerHTML = "";
    const filterdEmojis = searchEmoji(seacrchValue, emoji_list);
    filterdEmojis.map(emojiObj => {
      const emoji_card = createEmojiCard(emojiObj);
      emojiContainer.appendChild(emoji_card);
    })
  }
})


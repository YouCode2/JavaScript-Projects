const EmojiName = document.getElementById('emoji-name');
const EmojiButton = document.getElementById('btn');

const emoji = [];

const url = "https://emoji-api.com/emojis?access_key=85e922a2246c61f26e1dac6bce2afdb29ced5900"

async function GetData() {
    const response = await fetch(url);

    const data = await response.json();

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }

}

GetData() ;



EmojiButton.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * emoji.length);

    EmojiButton.innerText = emoji[randomNum].emojiName;

    EmojiName.innerText = emoji[randomNum].emojiCode;

})
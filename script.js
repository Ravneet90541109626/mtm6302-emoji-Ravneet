document.addEventListener('DOMContentLoaded', () => {
    const emojis = [
        { char: '😎', code: '1f60e' },
        { char: '🥳', code: '1f973' },
        { char: '😍', code: '1f60d' },
        { char: '🎉', code: '1f389' },
        { char: '🌟', code: '1f31f' },
        { char: '🍕', code: '1f355' },
        { char: '🎈', code: '1f388' },
        { char: '🚀', code: '1f680' },
        { char: '🌈', code: '1f308' },
        { char: '⚡', code: '26a1' },
        { char: '🦄', code: '1f984' },
        { char: '🌺', code: '1f33a' }
    ];

    const gallery = document.getElementById('emoji-gallery');

    emojis.forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.classList.add('emoji-item');
        emojiItem.innerHTML = `
            <div class="emoji-char">${emoji.char}</div>
            <div class="emoji-code">${emoji.code}</div>
        `;
        gallery.appendChild(emojiItem);
    });
});

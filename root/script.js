fetch('mods.json')
    .then(response => response.json())
    .then(mods => {
        const container = document.getElementById('mod-list');
        mods.forEach(mod => {
            const card = document.createElement('div');
            card.classList.add('mod-card');
            card.innerHTML = `
                <img src="${mod.icon}" alt="${mod.name}">
                <h3>${mod.name}</h3>
                <p>${mod.description}</p>
                <a href="mods/${mod.file}" download>Tải xuống</a>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Lỗi tải danh sách mod:', error));

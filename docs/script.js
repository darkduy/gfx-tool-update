document.addEventListener("DOMContentLoaded", () => {
    const modList = document.getElementById("mod-list");

    // Danh sách mod sẽ tự cập nhật - bạn chỉ cần sửa ở đây hoặc tự động hóa
    const mods = [
        { name: "GFX Tool v1", file: "gfx-tool-v1.mcaddon", desc: "Tối ưu đồ họa Minecraft PE." },
        { name: "GFX Tool v2", file: "gfx-tool-v2.mcaddon", desc: "Bản nâng cấp hỗ trợ GPU mới." }
    ];

    mods.forEach(mod => {
        const card = document.createElement("div");
        card.classList.add("mod-card");

        card.innerHTML = `
            <h2>${mod.name}</h2>
            <p>${mod.desc}</p>
            <a class="download-btn" href="mods/${mod.file}" download>Tải xuống</a>
        `;

        modList.appendChild(card);
    });
});

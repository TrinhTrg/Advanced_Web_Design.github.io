document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("productTableBody");

  // Gọi API (bạn thay link JSON của bạn vào đây)
  fetch("https://68d602d7e29051d1c0b03552.mockapi.io/api/v7/product")
    .then(response => response.json())
    .then(data => {
      tableBody.innerHTML = "";

      data.forEach(product => {
        const row = `
          <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price} $</td>
            <td><img src="${product.image}" alt="${product.name}"></td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });
    })
    .catch(error => {
      console.error("Lỗi khi lấy dữ liệu:", error);
      tableBody.innerHTML = `<tr><td colspan="4">Không thể tải dữ liệu</td></tr>`;
    });
});

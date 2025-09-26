// Hàm fetchData để lấy dữ liệu từ API
function addData(url, data, callback) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => { // .then là hàm xử lý khi Promise được giải quyết thành công, dùng để gọi hàm callback
        if (!response.ok) {
            throw new Error('Lỗi khi thêm dữ liệu');
        }
        return response.json();
    })
    .then(result => {
        callback(null, result);
    })
    .catch(error => {
        callback(error, null);
    });
}
// Hàm callback để xử lý kết quả sau khi thêm dữ liệu thành công
function handleAddData(error, result) {
    if (error) {
        console.error('Lỗi khi thêm dữ liệu:', error);
    } 
    if (result) {
        console.log('Dữ liệu đã được thêm thành công:', result);
    }
}
// url của API thêm dữ liệu
const apiUrl = 'https://656d3ffbbcc5618d3c22ee91.mockapi.io/product';
// Dữ liệu mới cần thêm
const newData = {
    name: "TrinhDaLamBai",
    price: 10000,
    description: "Thay xem co duoc khong",
};
// Gọi hàm để thêm dữ liệu vào API từ URL và truyền hàm callback để xử lý kết quả
addData(apiUrl, newData, handleAddData);
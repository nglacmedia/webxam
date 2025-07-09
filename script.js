document.addEventListener('DOMContentLoaded', () => {
    // API Token của bạn từ ipinfo.io
    const API_TOKEN = '132a95f7782e0d'; 

    async function recordIpInfo() {
        try {
            // Gửi yêu cầu đến ipinfo.io để lấy thông tin IP của người truy cập
            const response = await fetch(`https://ipinfo.io/json?token=${API_TOKEN}`);
            if (!response.ok) {
                throw new Error(`Lỗi HTTP: ${response.status}`);
            }
            const data = await response.json();

            if (data.error) {
                console.error('Lỗi từ IPinfo API:', data.error.message);
                return;
            }

            // --- Đây là phần "ghi lại" thông tin IP một cách bí mật ---
            // Thông tin IP của khách truy cập sẽ được in ra trong Console của trình duyệt.
            // Người dùng thông thường sẽ không nhìn thấy nó nếu không mở Console (F12).
            console.log('Thông tin IP của khách truy cập (cho mục đích phân tích):', data);

            // Nếu bạn có một backend server, bạn có thể gửi dữ liệu 'data' này về server để lưu trữ.
            // Ví dụ: fetch('/api/log-ip', { method: 'POST', body: JSON.stringify(data) });

        } catch (error) {
            console.error('Không thể lấy thông tin IP:', error);
        }
    }

    // Gọi hàm để ghi lại thông tin IP ngay khi trang được tải xong
    recordIpInfo();

    // --- Tạo các tin nhắn "xàm xí" để đánh lạc hướng và làm trang web thêm đáng yêu ---
    const messages = [
        "Đang pha trà sữa cầu vồng...",
        "Đang đếm số hạt bụi trong không khí...",
        "Đang huấn luyện cá voi biết bay...",
        "Đang kiểm tra xem có con kì lân nào lạc vào đây không...",
        "Đang sạc pin cho mặt trăng...",
        "Đang xem lại công thức làm bánh mì từ đám mây...",
        "Vũ trụ đang gửi cho bạn một nụ cười đáng yêu...!",
        "Đang kiểm tra xem các vì sao có thẳng hàng không...",
        "Đang trồng cây kẹo bông gòn trong vườn...",
        "Tìm kiếm kho báu ẩn dưới gầm giường...",
        "Nghĩ xem tối nay ăn gì...",
        "Đang thì thầm bí mật với đám mây..."
    ];

    function showRandomMessage() {
        const tempMessageDiv = document.createElement('div');
        tempMessageDiv.className = 'random-message';
        tempMessageDiv.innerHTML = `<p>${messages[Math.floor(Math.random() * messages.length)]}</p>`;
        document.body.appendChild(tempMessageDiv);

        // Xóa thông báo sau 5 giây
        setTimeout(() => {
            tempMessageDiv.remove();
        }, 5000); 
    }

    // Gọi hàm tạo thông báo ngẫu nhiên sau 1.5 giây khi trang tải xong
    setTimeout(showRandomMessage, 1500); 

    // Có thể thiết lập để các tin nhắn xuất hiện định kỳ (ví dụ: mỗi 15-30 giây)
    // setInterval(showRandomMessage, 15000); 
});

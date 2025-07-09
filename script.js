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
        tempMessageDiv.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: rgba(255, 255, 255, 0.9);
            border: 1px solid #ff4081;
            padding: 10px 15px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            z-index: 1000;
            font-size: 0.9em;
            color: #e91e63;
            animation: fadeInOut 5s forwards; /* Hiệu ứng hiện ra và biến mất */
            pointer-events: none; /* Không cho người dùng click vào */
        `;
        tempMessageDiv.innerHTML = `<p>${messages[Math.floor(Math.random() * messages.length)]}</p>`;
        document.body.appendChild(tempMessageDiv);

        // Xóa thông báo sau 5 giây
        setTimeout(() => {
            tempMessageDiv.remove();
        }, 5000); 

        // Thêm CSS cho hiệu ứng animation vào head của tài liệu
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateY(20px); }
                20% { opacity: 1; transform: translateY(0); }
                80% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(20px); }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Gọi hàm tạo thông báo ngẫu nhiên sau 1.5 giây khi trang tải xong
    setTimeout(showRandomMessage, 1500); 

    // Có thể thiết lập để các tin nhắn xuất hiện định kỳ (ví dụ: mỗi 15-30 giây)
    // setInterval(showRandomMessage, 15000); 
});
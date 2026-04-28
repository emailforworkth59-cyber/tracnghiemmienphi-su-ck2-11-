const quizConfig = {
  shuffleQuestions: false, // trộn câu
  shuffleOptions: true, // trộn đáp án
  shuffleBlocks: false, // trộn đoạn đọc
};
window.questions = [
// //WR: Phần "Tìm hiểu thêm" (7 câu cuối bài) chỉ có câu hỏi, không có đáp án A/B/C/D → đã bỏ qua.
// //WR: Phần "II. ĐÚNG/SAI" trong đề ghi "giống tài liệu bài 9,10, thêm 1 câu ngoài tài liệu" nhưng không có nội dung cụ thể → đã bỏ qua.
// //WR: Phần "III. TỰ LUẬN" đã bỏ theo yêu cầu.
// //WR: Tất cả đáp án bên dưới do AI tự đưa ra — cần kiểm tra lạ

  // ===== BÀI 9: CUỘC CẢI CÁCH CỦA HỒ QUÝ LY VÀ TRIỀU HỒ =====

  {
    type: "mcq",
    q: "Nhằm tăng cường sức mạnh quân sự để đối phó với cuộc xâm lược của nhà Minh cuối thế kỉ XIV, Hồ Quý Ly đã tiến hành",
    options: [
      "A. cải cách văn hoá, xã hội, giáo dục.",
      "B. xây dựng toà thành Tây Đô kiên cố.",
      "C. buộc vua Trần nhường ngôi cho mình.",
      "D. ban hành chính sách hạn điền, hạn nô."
    ],
    answer: 1
    // B - Xây dựng thành Tây Đô là biện pháp quân sự - phòng thủ tiêu biểu
  },
  {
    type: "mcq",
    q: "Nửa sau thế kỉ XIV, cuộc khởi nghĩa nông dân nào sau đây đã diễn ra để chống lại nhà Trần?",
    options: [
      "A. Khởi nghĩa Ngô Bệ (Hải Dương).",
      "B. Khởi nghĩa Phan Bá Vành (Thái Bình).",
      "C. Khởi nghĩa Yên Thế (Bắc Giang).",
      "D. Khởi nghĩa Lam Sơn (Thanh Hoá)."
    ],
    answer: 0
    // A - Khởi nghĩa Ngô Bệ là cuộc khởi nghĩa nông dân chống nhà Trần nửa sau thế kỉ XIV
  },
  {
    type: "mcq",
    q: "Năm 1400, Hồ Quý Ly buộc vua Trần nhường ngôi và lập ra triều đại",
    options: [
      "A. nhà Lê sơ.",
      "B. nhà Nguyễn.",
      "C. nhà Hồ.",
      "D. nhà Lý."
    ],
    answer: 2
    // C - Hồ Quý Ly lập ra nhà Hồ năm 1400
  },
  {
    type: "mcq",
    q: "Sau khi lên ngôi và lập ra nhà Hồ, Hồ Quý Ly đã",
    options: [
      "A. tổ chức kháng chiến chống quân Xiêm.",
      "B. tạo ra cục diện chiến tranh Nam-Bắc triều.",
      "C. mở rộng lãnh thổ về phía Nam.",
      "D. tiến hành cuộc cải cách sâu rộng."
    ],
    answer: 3
    // D - Hồ Quý Ly tiến hành cải cách sâu rộng trên nhiều lĩnh vực
  },
  {
    type: "mcq",
    q: "Công cuộc cải cách của Hồ Quý Ly và triều đại nhà Hồ không đề cập đến lĩnh vực nào sau đây?",
    options: [
      "A. Văn hoá - giáo dục.",
      "B. Chính trị - quân sự.",
      "C. Kinh tế - xã hội.",
      "D. Thể thao - du lịch."
    ],
    answer: 3
    // D - Thể thao - du lịch không thuộc lĩnh vực cải cách của Hồ Quý Ly
  },
  {
    type: "mcq",
    q: "Cuộc cải cách của Hồ Quý Ly tiến hành trong bối cảnh lịch sử nào sau đây?",
    options: [
      "A. Nước Đại Việt lâm vào khủng hoảng trầm trọng.",
      "B. Nhà Trần đang giai đoạn phát triển thịnh đạt.",
      "C. Giặc Tống sang xâm lược nước ta lần thứ nhất.",
      "D. Chế độ phong kiến Việt Nam phát triển đỉnh cao."
    ],
    answer: 0
    // A - Đại Việt cuối thế kỉ XIV lâm vào khủng hoảng trầm trọng
  },
  {
    type: "mcq",
    q: "Về kinh tế - xã hội, nhằm hạn chế sự phát triển của chế độ sở hữu ruộng đất lớn trong các điền trang, thái ấp của quý tộc, Hồ Quý Ly đã",
    options: [
      "A. cho phát hành tiền giấy.",
      "B. ban hành chính sách hạn điền.",
      "C. cải cách chế độ giáo dục.",
      "D. thống nhất đơn vị đo lường."
    ],
    answer: 1
    // B - Chính sách hạn điền giới hạn diện tích ruộng tư nhân
  },
  {
    type: "mcq",
    q: "Trong cải cách của Hồ Quý Ly, việc quy định số lượng gia nô được sở hữu của các vương hầu, quý tộc, quan lại được gọi là",
    options: [
      "A. phép hạn gia nô.",
      "B. chính sách hạn điền.",
      "C. chính sách quân điền.",
      "D. bình quân gia nô."
    ],
    answer: 0
    // A - Phép hạn gia nô quy định số lượng gia nô được phép sở hữu
  },
  {
    type: "mcq",
    q: "Xây dựng nhiều thành luỹ kiên cố, chế tạo súng thần cơ, đóng thuyền chiến là nội dung cải cách của Hồ Quý Ly và triều Hồ về",
    options: [
      "A. kinh tế.",
      "B. văn hoá.",
      "C. quân sự.",
      "D. xã hội."
    ],
    answer: 2
    // C - Đây là các biện pháp cải cách quân sự
  },
  {
    type: "mcq",
    q: "Hạn chế sự phát triển của Phật giáo, chấn chỉnh lại chế độ thi cử, đề cao chữ Nôm là nội dung cải cách của Hồ Quý Ly và triều Hồ về",
    options: [
      "A. kinh tế, xã hội.",
      "B. văn hoá, giáo dục.",
      "C. chính trị, quân sự.",
      "D. hành chính, pháp luật."
    ],
    answer: 1
    // B - Đây là các biện pháp cải cách văn hoá, giáo dục
  },
  {
    type: "mcq",
    q: "Các biện pháp cải cách của Hồ Quý Ly và triều Hồ đã đề cao tư tưởng, tôn giáo nào sau đây?",
    options: [
      "A. Phật giáo.",
      "B. Đạo giáo.",
      "C. Nho giáo.",
      "D. Thiên chúa giáo."
    ],
    answer: 2
    // C - Cải cách của Hồ Quý Ly đề cao Nho giáo, hạn chế Phật giáo
  },
  {
    type: "mcq",
    q: "Trong cải cách về văn hoá, Hồ Quý Ly khuyến khích và đề cao chữ viết nào sau đây?",
    options: [
      "A. Chữ Nôm.",
      "B. Chữ Hán.",
      "C. Chữ Latinh.",
      "D. Chữ Quốc ngữ."
    ],
    answer: 0
    // A - Hồ Quý Ly đề cao chữ Nôm, dịch sách chữ Hán sang chữ Nôm
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây là một trong những nguyên nhân dẫn đến sự suy yếu của triều đại nhà Trần ở nửa sau thế kỉ XIV?",
    options: [
      "A. Giặc Minh lăm le sang xâm lược, quân Chăm-pa tấn công.",
      "B. Nhà nước không quan tâm sản xuất, quan lại ăn chơi hưởng lạc.",
      "C. Chu Văn An dâng sớ chém gian thần không được chấp thuận.",
      "D. Nhà Trần tiến hành nhiều cuộc chiến tranh xâm lược tốn kém."
    ],
    answer: 1
    // B - Quan lại ăn chơi, nhà nước không quan tâm sản xuất là nguyên nhân nội tại
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây không phải là khó khăn của triều đại nhà Trần ở nửa sau thế kỉ XIV?",
    options: [
      "A. Giặc Minh lăm le sang xâm lược, quân Chăm-pa tấn công.",
      "B. Hồ Quý Ly đã tiến hành cuộc cải cách trên nhiều lĩnh vực.",
      "C. Hạn hán, lũ lụt, mất mùa, đói kém xảy ra ở nhiều địa phương.",
      "D. Nhiều cuộc khởi nghĩa nông dân diễn ra chống lại triều đình."
    ],
    answer: 1
    // B - Cải cách của Hồ Quý Ly không phải khó khăn của nhà Trần
  },
  {
    type: "mcq",
    q: "Sự suy yếu của triều đại nhà Trần cuối thế kỉ XIV đã dẫn đến nguy cơ nào sau đây?",
    options: [
      "A. Đánh mất dần bản sắc văn hoá dân tộc.",
      "B. Mất độc lập bởi sự xâm lược của phương Tây.",
      "C. Không còn khả năng bảo vệ sự an toàn của đất nước.",
      "D. Các khởi nghĩa nông dân sẽ lật đổ được triều đình."
    ],
    answer: 2
    // C - Suy yếu dẫn đến mất khả năng bảo vệ đất nước, dễ bị xâm lược
  },
  {
    type: "mcq",
    q: "Trong bối cảnh đời sống sa sút nghiêm trọng, nhân dân Đại Việt cuối thế kỉ XIV đã",
    options: [
      "A. đồng loạt suy tôn Hồ Quý Ly lên ngôi vua.",
      "B. bán ruộng đất cho quý tộc, biến mình thành nô tì.",
      "C. nổi dậy khởi nghĩa ở nhiều nơi trong cả nước.",
      "D. bất lực trước thực trạng, không phản kháng."
    ],
    answer: 2
    // C - Nhân dân nổi dậy khởi nghĩa ở nhiều nơi
  },
  {
    type: "mcq",
    q: "Để khuyến khích và đề cao chữ Nôm, Hồ Quý Ly đã thực hiện biện pháp nào sau đây?",
    options: [
      "A. Dịch nhiều sách chữ Hán sang chữ Nôm.",
      "B. Chính thức đưa văn thơ Nôm vào nội dung thi cử.",
      "C. Bắt buộc tất cả sách biên soạn bằng chữ Nôm.",
      "D. Mở trường dạy học hoàn toàn bằng chữ Nôm."
    ],
    answer: 0
    // A - Hồ Quý Ly dịch sách chữ Hán sang chữ Nôm để phổ biến
  },
  {
    type: "mcq",
    q: "Năm 1397, Hồ Quý Ly đã đặt phép hạn điền nhằm mục đích nào sau đây?",
    options: [
      "A. Quy định số lượng gia nô được sở hữu của vương hầu, quý tộc.",
      "B. Thể hiện sự quan tâm đến sản xuất, giúp nông nghiệp phát triển.",
      "C. Giải quyết nhu cầu về ruộng đất cho những nông dân nghèo.",
      "D. Hạn chế sở hữu ruộng tư, đánh mạnh vào chế độ điền trang."
    ],
    answer: 3
    // D - Hạn điền nhằm hạn chế sở hữu ruộng tư của quý tộc
  },
  {
    type: "mcq",
    q: "Về kinh tế - xã hội, cuộc cải cách của Hồ Quý Ly không đề cập đến nội dung nào sau đây?",
    options: [
      "A. Ban hành tiền giấy thay thế tiền đồng.",
      "B. Hạn chế sở hữu ruộng tư của quý tộc.",
      "C. Thống nhất đơn vị đo lường cả nước.",
      "D. Chế tạo vũ khí, đóng thuyền chiến."
    ],
    answer: 3
    // D - Chế tạo vũ khí, đóng thuyền chiến thuộc lĩnh vực quân sự, không phải kinh tế - xã hội
  },
  {
    type: "mcq",
    q: "Để tăng cường khả năng bảo vệ đất nước, Hồ Quý Ly đã thực hiện biện pháp nào sau đây?",
    options: [
      "A. Gả các công chúa cho các tù trưởng miền núi.",
      "B. Thi hành chính sách thần phục nhà Minh.",
      "C. Tăng cường lực lượng quân đội chính quy.",
      "D. Quan hệ hoà hiếu với Chăm-pa, Chân Lạp."
    ],
    answer: 2
    // C - Tăng cường quân đội chính quy là biện pháp tăng cường quốc phòng
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây không phải yêu cầu đặt ra cho Đại Việt cuối thế kỉ XIV?",
    options: [
      "A. Giải quyết khủng hoảng kinh tế - xã hội.",
      "B. Thiết lập vương triều mới thay nhà Trần.",
      "C. Thủ tiêu yếu tố các cứ của quý tộc nhà Trần.",
      "D. Xây dựng, củng cố đất nước về mọi mặt."
    ],
    answer: 1
    // B - Thiết lập vương triều mới không phải là yêu cầu lịch sử tất yếu đặt ra
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây phản ánh đúng về nhận định: \"Hồ Quý Ly là một nhà cải cách lớn, kiên quyết và táo bạo\"?",
    options: [
      "A. Thực hiện cuộc cải cách trên nhiều lĩnh vực, phần nào đáp ứng được yêu cầu lịch sử.",
      "B. Tiến hành một số cải cách trên các lĩnh vực, chưa đáp ứng được yêu cầu lịch sử.",
      "C. Tiến hành cải cách, dù chưa đưa đất nước thoát khỏi khủng hoảng nhưng giữ được độc lập.",
      "D. Tiến hành cải cách nhưng chưa đưa đất nước thoát khỏi khủng hoảng và không giữ được độc lập."
    ],
    answer: 0
    // A - Cải cách toàn diện, táo bạo, phần nào đáp ứng yêu cầu lịch sử
  },
  {
    type: "mcq",
    q: "Cải cách của Hồ Quý Ly cuối thế kỉ XIV đầu thế kỉ XV có điểm tiến bộ nào sau đây?",
    options: [
      "A. Nho giáo trở thành tư tưởng chủ đạo trong xã hội.",
      "B. Nền giáo dục, khoa cử từng bước phát triển.",
      "C. Thể hiện tinh thần dân tộc, ý thức tự cường.",
      "D. Xác lập thể chế quân chủ trung ương tập quyền."
    ],
    answer: 2
    // C - Đề cao chữ Nôm, văn hóa dân tộc thể hiện tinh thần tự cường
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây không phải là ý nghĩa của chính sách hạn điền, hạn nô ở cuối thế kỉ XIV đầu thế kỉ XV?",
    options: [
      "A. Làm suy yếu tầng lớp quý tộc triều Trần.",
      "B. Tăng nguồn thu nhập cho Nhà nước.",
      "C. Tăng cường quyền lực của Nhà nước.",
      "D. Xác lập thể chế quân chủ trung ương tập quyền."
    ],
    answer: 3
    // D - Xác lập thể chế quân chủ trung ương tập quyền không phải ý nghĩa của hạn điền, hạn nô
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây phản ánh rõ nét tính đại chúng trong cải cách giáo dục của Hồ Quý Ly cuối thế kỉ XIV đầu thế kỉ XV?",
    options: [
      "A. Dạy văn chương chữ Nôm cho phi tần, cung nữ.",
      "B. Chú trọng tổ chức các kì thi, lấy đỗ gần 200 người.",
      "C. Mở trường học ở các lộ, phủ, châu, cử các quan trông coi.",
      "D. Sửa đổi chế độ thi cử, thêm kì thi viết chữ và làm toán."
    ],
    answer: 2
    // C - Mở trường ở nhiều nơi thể hiện tính đại chúng, mở rộng giáo dục cho nhiều tầng lớp
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây phản ánh không đúng kết quả cuộc cải cách của Hồ Quý Ly cuối thế kỉ XIV đầu thế kỉ XV?",
    options: [
      "A. Góp phần nâng cao tiềm lực quốc phòng.",
      "B. Giúp nông dân có thêm ruộng đất để sản xuất.",
      "C. Văn hoá dân tộc, nhất là chữ Nôm được đề cao.",
      "D. Giữ vững nền độc lập dài lâu cho dân tộc."
    ],
    answer: 3
    // D - Nhà Hồ bị quân Minh xâm lược và tiêu diệt năm 1407, không giữ được độc lập lâu dài
  },

  // ===== BÀI 10: CUỘC CẢI CÁCH CỦA LÊ THÁNH TÔNG (THẾ KỈ XV) =====

  {
    type: "mcq",
    q: "Năm 1460, vua Lê Thánh Tông lên ngôi trong bối cảnh tình hình chính trị, kinh tế, xã hội của đất nước",
    options: [
      "A. khủng hoảng, suy thoái.",
      "B. đã từng bước ổn định.",
      "C. khó khăn và bị chia cắt.",
      "D. rối ren, cát cứ khắp nơi."
    ],
    answer: 1
    // B - Tình hình đất nước đã từng bước ổn định sau khi Lê Thái Tổ lập triều
  },
  {
    type: "mcq",
    q: "Năm 1460, sau khi lên ngôi, vua Lê Thánh Tông đã tiến hành",
    options: [
      "A. cuộc cải cách trên nhiều lĩnh vực.",
      "B. mở cuộc tiến công sang Trung Quốc.",
      "C. công cuộc thống nhất đất nước.",
      "D. khuyến khích phát triển ngoại thương."
    ],
    answer: 0
    // A - Lê Thánh Tông tiến hành cải cách toàn diện ngay sau khi lên ngôi
  },
  {
    type: "mcq",
    q: "Nguyên tắc ban cấp ruộng đất của chế độ quân điền là",
    options: [
      "A. lấy ruộng đất công chia cho dân.",
      "B. ưu tiên phần nhiều cho quan lại.",
      "C. ruộng xã nào chia cho dân xã ấy.",
      "D. không chia cho trẻ em mồ coi."
    ],
    answer: 2
    // C - Nguyên tắc quân điền: ruộng công của xã nào thì chia cho dân xã đó
  },
  {
    type: "mcq",
    q: "Về cải cách hành chính, ở trung ương, vua Lê Thánh Tông cho xóa bỏ hầu hết các chức quan",
    options: [
      "A. đại thần.",
      "B. thừa ty.",
      "C. hiến ty.",
      "D. đô ty."
    ],
    answer: 0
    // A - Lê Thánh Tông xóa bỏ hầu hết các chức quan đại thần có quyền lực lớn
  },
  {
    type: "mcq",
    q: "Năm 1466, ở địa phương, vua Lê Thánh Tông chia đất nước thành",
    options: [
      "A. 10 đạo thừa tuyên và phủ Trung Đô.",
      "B. 11 đạo thừa tuyên và phủ Trung Đô.",
      "C. 12 đạo thừa tuyên và phủ Trung Đô.",
      "D. 13 đạo thừa tuyên và phủ Trung Đô."
    ],
    answer: 2
    // C - Năm 1466 chia thành 12 đạo thừa tuyên và phủ Trung Đô
  },
  {
    type: "mcq",
    q: "Trong bộ máy nhà nước dưới thời vua Lê Thánh Tông, quan lại được tuyển chọn chủ yếu thông qua",
    options: [
      "A. kế vị.",
      "B. đề cử.",
      "C. ứng cử.",
      "D. khoa cử."
    ],
    answer: 3
    // D - Quan lại được tuyển chọn chủ yếu qua thi cử (khoa cử)
  },
  {
    type: "mcq",
    q: "Năm 1483, vua Lê Thánh Tông cho ban hành",
    options: [
      "A. Hoàng Việt luật lệ.",
      "B. Quốc triều hình luật.",
      "C. Hình luật.",
      "D. Hình thư."
    ],
    answer: 1
    // B - Quốc triều hình luật (Luật Hồng Đức) được ban hành năm 1483
  },
  {
    type: "mcq",
    q: "Tổ chức bộ máy chính quyền địa phương thời Lê sơ từ sau cải cách của vua Lê Thánh Tông là",
    options: [
      "A. đạo thừa tuyên, phủ, huyện, châu, xã.",
      "B. phủ Thừa Thiên, châu, huyện, xã, làng.",
      "C. đạo thừa tuyên, phủ, châu, hương, xã.",
      "D. phủ Thừa Thiên, huyện, châu, xã, làng."
    ],
    answer: 0
    // A - Hệ thống: đạo thừa tuyên → phủ → huyện → châu → xã
  },
  {
    type: "mcq",
    q: "Quân đội dưới thời vua Lê Thánh Tông được gọi là",
    options: [
      "A. thân binh và tân binh.",
      "B. tân binh và ngoại binh.",
      "C. thủy binh và bộ binh.",
      "D. cấm binh và ngoại binh."
    ],
    answer: 3
    // D - Quân đội chia thành cấm binh (bảo vệ kinh thành) và ngoại binh (đóng ở địa phương)
  },
  {
    type: "mcq",
    q: "Để rèn luyện quân đội, nhà Lê sơ ngoài việc duyệt binh sĩ hàng năm còn có quy định nào sau đây?",
    options: [
      "A. Mua sắm vũ khí phương Tây trang bị cho quân đội.",
      "B. Thường xuyên huấn luyện theo kiểu phương Tây.",
      "C. Cứ 3 năm tổ chức một kỳ thi khảo võ nghệ.",
      "D. Mời võ sĩ phương Tây huấn luyện cho quân đội."
    ],
    answer: 2
    // C - 3 năm một lần tổ chức thi khảo võ nghệ
  },
  {
    type: "mcq",
    q: "Để phát triển kinh tế, vua Lê Thánh Tông đã ban hành các chính sách",
    options: [
      "A. lập quan Hà đê sứ và quan quân điền.",
      "B. cho đào kênh máng, đắp đê \"quai vạc\".",
      "C. lập quan Hà đê sứ và đắp đê \"quai vạc\".",
      "D. chế độ lộc điền và chế độ quân điền."
    ],
    answer: 3
    // D - Chế độ lộc điền (cấp cho quan lại) và quân điền (chia cho dân)
  },
  {
    type: "mcq",
    q: "Để tôn vinh những người đỗ đại khoa, vua Lê Thánh Tông đã",
    options: [
      "A. phong làm quan đại thần.",
      "B. dựng bia đá ở Văn Miếu.",
      "C. cấp bằng Thạc sĩ, Tiến sĩ.",
      "D. cử làm thầy đồ dạy học."
    ],
    answer: 1
    // B - Dựng bia Tiến sĩ ở Văn Miếu để tôn vinh người đỗ đại khoa
  },
  {
    type: "mcq",
    q: "Sau khi lên ngôi, vua Lê Thánh Tông từng bước tiến hành cải cách nhằm mục đích",
    options: [
      "A. tăng cường quyền lực của vua và bộ máy nhà nước.",
      "B. đưa nước ta trở thành một nước công nghiệp tiên tiến.",
      "C. tăng cường bình đẳng, dân chủ và hạn chế phân quyền.",
      "D. xóa bỏ tình trạng phân tán quyền lực, thống nhất đất nước."
    ],
    answer: 0
    // A - Mục đích chính là tăng cường quyền lực của vua và bộ máy nhà nước
  },
  {
    type: "mcq",
    q: "Khi lên ngôi, vua Lê Thánh Tông chủ trương xóa bỏ hầu hết các chức quan đại thần có quyền lực lớn ở triều đình trung ương nhằm",
    options: [
      "A. giảm cồng kềnh bộ máy hành chính.",
      "B. tập trung quyền lực vào tay nhà vua.",
      "C. làm mới lại tổ chức bộ máy nhà nước.",
      "D. để bộ máy hành chính không quan liêu."
    ],
    answer: 1
    // B - Xóa bỏ quan đại thần để tập trung quyền lực vào tay nhà vua
  },
  {
    type: "mcq",
    q: "Dưới thời vua Lê Thánh Tông, việc dựng bia Tiến sĩ ở Văn Miếu nhằm mục đích",
    options: [
      "A. khẳng định nền giáo dục Nho học của nước Đại Việt.",
      "B. ghi số lượng những người đỗ Tiến sĩ qua các kì thi Hội.",
      "C. đề cao Nho học và tôn vinh những người đỗ đại khoa.",
      "D. trùng tu, mở rộng, làm mới Văn Miếu – Quốc Tử Giám."
    ],
    answer: 2
    // C - Bia Tiến sĩ nhằm đề cao Nho học và tôn vinh người tài
  },
  {
    type: "mcq",
    q: "Trọng tâm trong công cuộc cải cách của vua Lê Thánh Tông (thế kỉ XV) là lĩnh vực",
    options: [
      "A. kinh tế.",
      "B. pháp luật.",
      "C. hành chính.",
      "D. giáo dục."
    ],
    answer: 2
    // C - Cải cách hành chính là trọng tâm của Lê Thánh Tông
  },
  {
    type: "mcq",
    q: "Bộ máy chính quyền thời Lê sơ được hoàn chỉnh dưới thời vua",
    options: [
      "A. Lê Thái Tổ.",
      "B. Lê Thái Tông.",
      "C. Lê Nhân Tông.",
      "D. Lê Thánh Tông."
    ],
    answer: 3
    // D - Lê Thánh Tông hoàn chỉnh bộ máy chính quyền Lê sơ
  },
  {
    type: "mcq",
    q: "Để tập trung quyền lực vào tay nhà vua, Lê Thánh Tông chủ trương",
    options: [
      "A. chia cả nước thành 12 đạo thừa tuyên.",
      "B. cho ban hành bộ Quốc triều hình luật.",
      "C. tăng cường lực lượng quân đội triều đình.",
      "D. xóa bỏ hầu hết quan đại thần có quyền lực lớn."
    ],
    answer: 3
    // D - Xóa bỏ quan đại thần là biện pháp tập trung quyền lực trực tiếp nhất
  },
  {
    type: "mcq",
    q: "Chính sách cải cách nào sau đây của vua Lê Thánh Tông đã góp phần khẳng định quyền sở hữu tối cao của Nhà nước tạo nền tảng cho kinh tế nông nghiệp phát triển?",
    options: [
      "A. Đồn điền.",
      "B. Đê điều.",
      "C. Ruộng đất.",
      "D. Khẩn hoang."
    ],
    answer: 2
    // C - Chính sách ruộng đất (quân điền, lộc điền) khẳng định quyền sở hữu của Nhà nước
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây là một trong những ý nghĩa về cuộc cải cách của vua Lê Thánh Tông ở thế kỉ XV?",
    options: [
      "A. Mở ra khả năng độc lập, tự chủ đầu tiên cho dân tộc ta.",
      "B. Làm chuyển biến toàn bộ các hoạt động của quốc gia.",
      "C. Tạo thế và lực cho ta đánh bại quân xâm lược Minh.",
      "D. Tạo tiền đề cho cuộc chiến tranh xâm lược phương Bắc."
    ],
    answer: 1
    // B - Cải cách làm chuyển biến toàn diện các hoạt động quốc gia, đất nước hưng thịnh
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây phản ánh đúng về chức năng của lục Bộ (sáu bộ) dưới thời vua Lê Thánh Tông?",
    options: [
      "A. Cơ quan giúp việc cho lục Tự (sáu tự).",
      "B. Theo dõi, giám sát hoạt động của lục Khoa.",
      "C. Cơ quan cao cấp chủ chốt trong triều đình.",
      "D. Phụ trách hoạt động quân sự của nhà nước."
    ],
    answer: 2
    // C - Lục Bộ là cơ quan cao cấp chủ chốt phụ trách các lĩnh vực quản lý nhà nước
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây phản ánh đúng về cuộc cải cách dưới triều vua Lê Thánh Tông?",
    options: [
      "A. Có tính kế thừa từ trung ương đến địa phương.",
      "B. Có sự nối tiếp từ trung ương đến địa phương.",
      "C. Có tính liên thông từ trung ương đến địa phương.",
      "D. Có tính đồng bộ từ trung ương đến địa phương."
    ],
    answer: 3
    // D - Cải cách có tính đồng bộ, nhất quán từ trung ương đến địa phương
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây không phải là cải cách hành chính ở trung ương của vua Lê Thánh Tông?",
    options: [
      "A. Chia đất nước thành 12 đạo thừa tuyên và phủ Trung Đô.",
      "B. Xóa bỏ hầu hết các chức quan đại thần có quyền lực lớn.",
      "C. Giữ lại một số ít quan đại thần cùng vua bàn việc khi cần.",
      "D. Tổ chức hoàn thiện cơ cấu, chức năng của lục Bộ (sáu bộ)."
    ],
    answer: 0
    // A - Chia thành 12 đạo thừa tuyên là cải cách hành chính địa phương, không phải trung ương
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây không phải là cải cách hành chính ở địa phương của vua Lê Thánh Tông?",
    options: [
      "A. Chia đất nước thành 12 đạo thừa tuyên và phủ Trung Đô.",
      "B. Xóa bỏ hầu hết các chức quan đại thần có quyền lực lớn.",
      "C. Đứng đầu Thừa tuyên là Đô ty, Thừa ty, Hiến ty.",
      "D. Dưới đạo thừa tuyên là phủ, huyện, châu và xã."
    ],
    answer: 1
    // B - Xóa bỏ quan đại thần là cải cách hành chính trung ương, không phải địa phương
  },
  {
    type: "mcq",
    q: "Điểm tương đồng về quan điểm xây dựng đội ngũ quan lại trong bộ máy nhà nước thời vua Lê Thánh Tông so với công tác xây dựng cán bộ của Đảng và Nhà nước ta hiện nay là",
    options: [
      "A. có năng lực và phẩm chất tốt.",
      "B. có năng lực, xuất thân dòng tộc.",
      "C. ưu tiên tuyển chọn con em quan lại.",
      "D. chỉ chú trọng con cháu người có công."
    ],
    answer: 0
    // A - Cả xưa và nay đều coi trọng năng lực và phẩm chất của cán bộ
  },
  {
    type: "mcq",
    q: "Nội dung nào sau đây không phải là kết quả về cải cách hành chính của vua Lê Thánh Tông (thế kỉ XV)?",
    options: [
      "A. Thống nhất cả nước theo hướng tinh gọn.",
      "B. Có sự phân cấp và phân nhiệm minh bạch.",
      "C. Hoàn thành thống nhất đất nước về mặt lãnh thổ.",
      "D. Đảm bảo sự chỉ đạo, tập trung quyền lực của vua."
    ],
    answer: 2
    // C - Thống nhất lãnh thổ không phải kết quả cải cách hành chính mà là kết quả quân sự
  },
  {
    type: "mcq",
    q: "Cuộc cải cách hành chính của vua Lê Thánh Tông đã khắc phục được hạn chế nào trong bộ máy nhà nước?",
    options: [
      "A. Tranh giành địa vị của các hoàng tử.",
      "B. Sự cấu kết của các chức quan đại thần.",
      "C. Bóc lột nông dân của quan địa phương.",
      "D. Sự chuyên quyền và nguy cơ cát cứ."
    ],
    answer: 3
    // D - Cải cách khắc phục tình trạng chuyên quyền và nguy cơ cát cứ
  },
  {
    type: "mcq",
    q: "Điểm giống nhau cơ bản giữa cuộc cải cách của vua Lê Thánh Tông và vua Minh Mạng là trọng tâm cải cách về",
    options: [
      "A. hành chính.",
      "B. giáo dục.",
      "C. pháp luật.",
      "D. quân đội."
    ],
    answer: 0
    // A - Cả hai vua đều lấy cải cách hành chính là trọng tâm
  },
  {
    type: "mcq",
    q: "Mô hình quân chủ chuyên chế thời Lê sơ đã ảnh hưởng như thế nào đến các nhà nước phong kiến ở Việt Nam ở giai đoạn sau?",
    options: [
      "A. Mô hình thử nghiệm cho các triều đại phong kiến.",
      "B. Trở thành khuôn mẫu cho các triều đại về sau.",
      "C. Đặt nền móng cho sự hình thành chế độ phong kiến.",
      "D. Hình mẫu thí điểm cho các triều đại phong kiến."
    ],
    answer: 1
    // B - Mô hình Lê sơ trở thành khuôn mẫu cho các triều đại phong kiến sau
  },

  // ===== BÀI 11: CUỘC CẢI CÁCH CỦA VUA MINH MẠNG (NỬA ĐẦU THẾ KỈ XIX) =====

  {
    type: "mcq",
    q: "Trọng tâm cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) là",
    options: [
      "A. kinh tế.",
      "B. chính trị.",
      "C. hành chính.",
      "D. quân sự."
    ],
    answer: 2
    // C - Cải cách hành chính là trọng tâm của Minh Mạng
  },
  {
    type: "mcq",
    q: "Trong bộ máy chính quyền trung ương thời Minh Mạng, các cơ quan Nội các và Cơ mật viện có vai trò tư vấn cho nhà vua về",
    options: [
      "A. kinh tế.",
      "B. quân sự.",
      "C. giáo dục.",
      "D. tài chính."
    ],
    answer: 1
    // B - Cơ mật viện tư vấn về quân sự và đối ngoại
    // //WR: Câu 2 và Câu 3 của bài 11 giống nhau hoàn toàn về nội dung câu hỏi, chỉ khác đáp án (B-quân sự và B-hành chính). Có thể là lỗi soạn đề. Đã giữ nguyên theo văn bản gốc.
  },
  {
    type: "mcq",
    q: "Trong bộ máy chính quyền trung ương thời Minh Mạng, các cơ quan Nội các và Cơ mật viện có vai trò tư vấn cho nhà vua về",
    options: [
      "A. kinh tế.",
      "B. hành chính.",
      "C. giáo dục.",
      "D. tài chính."
    ],
    answer: 1
    // B - Nội các tư vấn về hành chính, văn thư
    // //WR: Xem ghi chú câu trên - hai câu giống nhau, cần xác nhận lại với giáo viên.
  },
  {
    type: "mcq",
    q: "Ở địa phương, trong công cuộc cải cách hành chính, vua Minh Mạng đã chia cả nước thành",
    options: [
      "A. 30 tỉnh và phủ Thừa Thiên.",
      "B. Bắc Thành, Gia Định thành và trực doanh.",
      "C. từ phủ Thừa Thiên ra Bắc thành 18 tỉnh.",
      "D. từ phủ Thừa Thiên vào Nam thành 12 tỉnh."
    ],
    answer: 0
    // A - Minh Mạng chia cả nước thành 30 tỉnh và phủ Thừa Thiên
  },
  {
    type: "mcq",
    q: "Cuộc cải cách Minh Mạng (nửa đầu thế kỉ XIX) được thực hiện trong bối cảnh",
    options: [
      "A. tính phân quyền còn đậm nét với sự tồn tại Bắc Thành và Gia Định Thành.",
      "B. bộ máy hành chính nhà nước phong kiến cơ bản đã hoàn chỉnh.",
      "C. tình trạng phân quyền, thiếu thống nhất ở địa phương đã khắc phục.",
      "D. vua Gia Long đã tiến hành cuộc cải cách hành chính hoàn chỉnh."
    ],
    answer: 0
    // A - Trước cải cách vẫn còn Bắc Thành và Gia Định Thành, tính phân quyền đậm nét
  },
  {
    type: "mcq",
    q: "Cuộc cải cách hành chính của vua Minh Mạng (nửa đầu thế kỉ XIX) nhằm mục đích",
    options: [
      "A. hoàn thành cơ bản thống nhất đất nước về mặt lãnh thổ.",
      "B. tăng cường tính thống nhất và tiềm lực của đất nước.",
      "C. xóa bỏ tình trạng cát cứ của các thế lực phong kiến.",
      "D. xóa bỏ tình trạng \"bế quan tỏa cảng\" của đất nước."
    ],
    answer: 1
    // B - Mục đích: tăng cường thống nhất và tiềm lực đất nước
  },
  {
    type: "mcq",
    q: "Trong cuộc cải cách hành chính của vua Minh Mạng (nửa đầu thế kỉ XIX), quy định của chế độ \"hồi tỵ\" là gì?",
    options: [
      "A. Anh, em, cha, con, thầy, trò không được làm quan cùng một chỗ.",
      "B. Mở rộng phạm vi đưa quan lại triều đình đến địa phương cai trị.",
      "C. Người thân, tôn thất, dòng họ của vua không làm quan cùng chỗ.",
      "D. Đưa những người thi đỗ đạt về làm quan đứng đầu ở quê quán."
    ],
    answer: 0
    // A - Hồi tỵ: người thân thuộc (anh em, cha con, thầy trò) không được làm quan cùng nơi
  },
  {
    type: "mcq",
    q: "Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) đã mang lại kết quả nào sau đây?",
    options: [
      "A. Phân định cụ thể chức năng, nhiệm vụ của các cơ quan nhà nước.",
      "B. Đặt nền móng cho sự phát triển đỉnh cao của chế độ phong kiến.",
      "C. Chấm dứt hoàn toàn tình trạng bất mãn, chống đối trong xã hội.",
      "D. Giải quyết triệt để các mâu thuẫn trong xã hội, đất nước thái bình."
    ],
    answer: 0
    // A - Kết quả: phân định rõ chức năng, nhiệm vụ các cơ quan
  },
  {
    type: "mcq",
    q: "Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) có ý nghĩa quan trọng nào sau đây?",
    options: [
      "A. xóa bỏ tình trạng \"bế quan tỏa cảng\" của đất nước.",
      "B. xóa bỏ tình trạng cát cứ của các thế lực phong kiến.",
      "C. hoàn thành thống nhất đất nước về mặt hành chính.",
      "D. hoàn thành thống nhất đất nước về mặt lãnh thổ."
    ],
    answer: 2
    // C - Ý nghĩa: hoàn thành thống nhất đất nước về mặt hành chính
  },
  {
    type: "mcq",
    q: "Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) và cuộc cải cách của vua Lê Thánh Tông (thế kỉ XV) có điểm giống nhau nào sau đây?",
    options: [
      "A. Nâng cao vai trò quản lí của chính quyền ở trung ương.",
      "B. Khuyến khích, tạo điều kiện cho ngoại thương phát triển.",
      "C. Ưu tiên cho sự nghiệp thống nhất đất nước về lãnh thổ.",
      "D. Chú trọng phát triển kinh tế, xã hội theo hướng hiện đại."
    ],
    answer: 0
    // A - Cả hai đều nâng cao vai trò quản lí của chính quyền trung ương
  },
  {
    type: "mcq",
    q: "Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) và cuộc cải cách của vua Lê Thánh Tông (thế kỉ XV) có điểm giống nhau nào sau đây?",
    options: [
      "A. Khuyến khích, tạo điều kiện cho ngoại thương phát triển.",
      "B. Ưu tiên cho sự nghiệp thống nhất đất nước về lãnh thổ.",
      "C. Chú trọng phát triển kinh tế, xã hội theo hướng hiện đại.",
      "D. Tăng cường và tập trung quyền lực trong tay nhà vua."
    ],
    answer: 3
    // D - Cả hai đều tập trung quyền lực vào tay nhà vua
  },
  {
    type: "mcq",
    q: "Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) và cuộc cải cách của vua Lê Thánh Tông (thế kỉ XV) có điểm giống nhau nào sau đây?",
    options: [
      "A. Ưu tiên cho sự nghiệp thống nhất đất nước về lãnh thổ.",
      "B. Nội dung cải cách phù hợp với yêu cầu của đất nước.",
      "C. Khuyến khích, tạo điều kiện cho ngoại thương phát triển.",
      "D. Chú trọng phát triển kinh tế, xã hội theo hướng hiện đại."
    ],
    answer: 1
    // B - Cả hai đều phù hợp với yêu cầu lịch sử của đất nước
  },
  {
    type: "mcq",
    q: "Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) và cuộc cải cách của vua Lê Thánh Tông (thế kỉ XV) có điểm giống nhau nào sau đây?",
    options: [
      "A. Khuyến khích, tạo điều kiện cho ngoại thương phát triển.",
      "B. Ưu tiên cho sự nghiệp thống nhất đất nước về lãnh thổ.",
      "C. Chú trọng phát triển kinh tế, xã hội theo hướng hiện đại.",
      "D. Để lại nhiều bài học kinh nghiệm quý báu cho thế hệ sau."
    ],
    answer: 3
    // D - Cả hai để lại bài học kinh nghiệm quý báu cho hậu thế
  },
  {
    type: "mcq",
    q: "Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) và cuộc cải cách của vua Lê Thánh Tông (thế kỉ XV) có điểm khác biệt nào sau đây?",
    options: [
      "A. Thành lập lục Bộ để giúp việc cho nhà vua.",
      "B. Tăng cường quyền lực tuyệt đối của nhà vua.",
      "C. Củng cố chế độ quân chủ chuyên chế tập quyền.",
      "D. Chia cả nước thành 30 tỉnh và phủ Thừa Thiên."
    ],
    answer: 3
    // D - Chia 30 tỉnh và phủ Thừa Thiên là đặc trưng riêng của cải cách Minh Mạng
  },
];

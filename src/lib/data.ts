import type { Ending, SemesterEvent } from "./types";

/**
 * Nội dung bám theo khung chương trình ngành Kỹ thuật phần mềm (SE), Đại học FPT
 * (chương trình BIT_SE_K21C, QĐ 577/QĐ-ĐHFPT ngày 15/05/2026): Kì 0 là Tiếng Anh chuẩn bị,
 * sau đó 9 học kỳ chuyên ngành, trong đó Kì 6 là OJT và Kì 9 là đồ án tốt nghiệp.
 */

/** Năng lượng hồi lại mỗi kỳ. */
export const REC = 30;
export const GOAL = { gpa: 2.8, exp: 60 } as const;

export const EVENTS: SemesterEvent[] = [
  {
    title: "PRF192 lập trình C & MAE101 vs. CLB lập trình",
    tag: "Bước vào chuyên ngành",
    courses: [
      { code: "PRF192", name: "Cơ sở lập trình" },
      { code: "MAE101", name: "Toán cho ngành kỹ thuật" },
      { code: "CEA201", name: "Tổ chức và Kiến trúc máy tính" },
      { code: "CSI106", name: "Nhập môn khoa học máy tính" },
      { code: "SSA101", name: "Kỹ năng học thuật" },
    ],
    story:
      "Bạn vừa xong Kì 0 (OTP101 và Tiếng Anh chuẩn bị) và bước vào Kì 1 với PRF192 (lập trình C), MAE101, CEA201, CSI106 và SSA101. Tuần sinh hoạt công dân vừa kết thúc, các CLB lập trình đang tuyển thành viên. Slide PRF192 dày thêm mỗi tuần, còn thời gian của bạn thì có hạn.",
    choices: [
      { key: "A", title: "Cày điểm PRF192 & MAE101", desc: "Làm sạch bài lab C và bài tập Toán, học nhóm đều đặn.", gpa: 0.25, exp: -4, cost: 12,
        result: "Bạn không bỏ sót buổi lab nào, điểm PRF192 và MAE101 rất đẹp. Nhưng ngoài bài trên lớp, bạn chưa tự viết chương trình nào của riêng mình." },
      { key: "B", title: "Vào CLB lập trình, luyện code contest", desc: "Sinh hoạt CLB, luyện contest mỗi tối; bài tập trên lớp làm sau.", gpa: -0.32, exp: 12, cost: 38,
        result: "Bạn giải được vài bài contest và quen nhiều anh chị khóa trên. Nhưng bài PRF192 nộp muộn, còn MAE101 mất điểm giữa kỳ." },
      { key: "C", title: "Học C bằng mini-project trong CLB", desc: "Cùng nhóm CLB viết game console bằng C, đúng nội dung PRF192 nhưng làm lớn hơn.", gpa: 0.12, exp: 8, cost: 42, req: 47,
        result: "Con trỏ và mảng không còn khô khan khi chúng làm game của bạn chạy được. Điểm PRF192 tăng, kỹ năng làm việc nhóm cũng khá lên." },
    ],
  },
  {
    title: "MAD101 & OSG202 vs. Tự cày web frontend",
    tag: "Nền tảng vs. Kỹ năng",
    courses: [
      { code: "MAD101", name: "Toán rời rạc" },
      { code: "OSG202", name: "Hệ điều hành" },
      { code: "NWC204", name: "Mạng máy tính" },
      { code: "PRO192", name: "Lập trình hướng đối tượng" },
      { code: "WED201C", name: "Thiết kế web" },
    ],
    story:
      "Kì 2 có MAD101 (Toán rời rạc), OSG202 (Hệ điều hành), NWC204, PRO192 (OOP) và WED201c (Thiết kế web). Đề cương Toán rời rạc dày cộp, trong khi bạn vừa xem một video làm web bằng React và muốn tự dựng ngay một sản phẩm frontend.",
    choices: [
      { key: "A", title: "Dồn sức cho MAD101 & OSG202", desc: "Giải sạch đề cương, học nhóm về tiến trình, lập lịch CPU và bộ nhớ.", gpa: 0.28, exp: -4, cost: 15,
        result: "Bạn nắm vững quy nạp, đồ thị và lập lịch CPU trên giấy, điểm cao vút, nhưng chưa từng đưa thứ gì lên trình duyệt." },
      { key: "B", title: "Tự cày frontend ngoài giờ", desc: "Bỏ vài buổi lý thuyết, dựng 3 trang web bằng React và deploy lên mạng.", gpa: -0.4, exp: 14, cost: 40,
        result: "Trang web đầu tiên online khiến bạn phấn chấn, nhưng bài kiểm tra MAD101 là một thảm họa nhỏ." },
      { key: "C", title: "Biến bài WED201c thành sản phẩm thật", desc: "Làm web app có thật, dùng đồ thị và logic từ MAD101 để tối ưu.", gpa: 0.12, exp: 9, cost: 44, req: 49,
        result: "Bài WED201c vừa lấy điểm cao vừa có link demo để khoe. Toán rời rạc lần đầu tiên có ích ngay trong code thật." },
    ],
  },
  {
    title: "Hackathon vs. Thi cuối kỳ DBI202, MAS291 & LAB211",
    tag: "Cuối kỳ nước rút",
    courses: [
      { code: "DBI202", name: "Các hệ cơ sở dữ liệu" },
      { code: "MAS291", name: "Xác suất thống kê" },
      { code: "LAB211", name: "Thực hành OOP với Java" },
      { code: "SWE202C", name: "Nhập môn kỹ thuật phần mềm" },
      { code: "JPD113", name: "Tiếng Nhật sơ cấp 1 - A1.1" },
    ],
    story:
      "Kì 3 có DBI202 (Cơ sở dữ liệu), MAS291 (Xác suất thống kê), LAB211 (thực hành Java), SWE202c và tiếng Nhật JPD113. Hackathon 48 giờ của trường mở đăng ký, giải thưởng hấp dẫn, nhà tài trợ đến tận nơi tuyển người. Nhưng thi cuối kỳ DBI202 và bài thực hành LAB211 chỉ cách đó ba ngày.",
    choices: [
      { key: "A", title: "Ôn thi thâu đêm", desc: "Ôn truy vấn SQL, chuẩn hóa, phân phối xác suất và luyện lại bài Java Lab.", gpa: 0.3, exp: -4, cost: 18,
        result: "Điểm DBI202 và MAS291 gần như tuyệt đối. Tấm poster Hackathon, bạn chỉ dám ngắm từ xa." },
      { key: "B", title: "Lao vào Hackathon", desc: "48 giờ code, thuyết trình sản phẩm; ôn thi tính sau.", gpa: -0.48, exp: 16, cost: 45,
        result: "Nhóm bạn vào top 5! Đổi lại, bạn ngủ gật trong phòng thi và mất điểm nặng." },
      { key: "C", title: "Chia ca: code ban ngày, ôn ban đêm", desc: "Đi Hackathon nhưng giữ 3 tiếng mỗi ngày ôn thi; thiết kế CSDL theo chuẩn hóa vừa học.", gpa: 0.1, exp: 10, cost: 48, req: 53,
        result: "Cơ sở dữ liệu của sản phẩm chạy mượt vì bạn vừa học vừa áp dụng; điểm thi cũng không hề tệ." },
    ],
  },
  {
    title: "Lời mời part-time vs. PRJ301 & CSD201",
    tag: "Ngã ba giữa chừng",
    courses: [
      { code: "CSD201", name: "Cấu trúc dữ liệu và giải thuật" },
      { code: "PRJ301", name: "Phát triển ứng dụng Java web" },
      { code: "SWR302", name: "Yêu cầu phần mềm" },
      { code: "IOT102", name: "Internet vạn vật" },
      { code: "JPD123", name: "Tiếng Nhật sơ cấp 1 - A1.2" },
    ],
    story:
      "Kì 4 có CSD201 (Cấu trúc dữ liệu và giải thuật), PRJ301 (Java web), SWR302 (Yêu cầu phần mềm), IOT102 và JPD123. Một startup nhắn bạn: cần sinh viên làm part-time Java web, lương khá. Nhưng đồ án PRJ301 sắp tới hạn nộp, còn CSD201 là môn nền tảng quyết định cả bảng điểm.",
    choices: [
      { key: "A", title: "Tập trung PRJ301 & CSD201", desc: "Từ chối tạm thời, làm đồ án Servlet/JSP thật kỹ, giải sạch bài giải thuật.", gpa: 0.25, exp: -4, cost: 15,
        result: "PRJ301 đạt điểm xuất sắc, thầy cô khen thiết kế sạch. Nhưng bạn bè đã có kinh nghiệm làm việc với khách hàng thật." },
      { key: "B", title: "Nhận part-time 25 giờ/tuần", desc: "Đi làm ở startup, đồ án PRJ301 nộp sát giờ.", gpa: -0.4, exp: 15, cost: 42,
        result: "Bạn sống với deadline thật và nhận đồng lương đầu tiên. Đồ án PRJ301 thì nộp vội, nhiều lỗi." },
      { key: "C", title: "Part-time 10 giờ + PRJ301 từ bài toán thật", desc: "Lấy một vấn đề nhỏ của công ty làm đề tài PRJ301, chọn cấu trúc dữ liệu theo bài toán.", gpa: 0.1, exp: 9, cost: 45, req: 50,
        result: "Đồ án có bài toán thật, dữ liệu thật; công ty có thêm một module miễn phí. Cả hai bên cùng hưởng lợi." },
    ],
  },
  {
    title: "SWP391: Dự án nhóm vs. Freelance & SWT301",
    tag: "Kỳ dự án",
    courses: [
      { code: "SWP391", name: "Dự án phát triển phần mềm" },
      { code: "SWT301", name: "Kiểm thử phần mềm" },
      { code: "WDU203C", name: "Thiết kế trải nghiệm người dùng" },
      { code: "SSG105", name: "Kỹ năng giao tiếp và cộng tác" },
      { code: "SE_COM*1", name: "Học phần 1 của combo" },
    ],
    story:
      "Kì 5 là kỳ dự án: SWP391 (Dự án phát triển phần mềm) làm theo nhóm, cùng SWT301 (Kiểm thử), WDU203c (UI/UX), SSG105 và học phần đầu tiên của combo chuyên ngành. Nhóm SWP391 cần một người gánh phần lõi của hệ thống, đúng lúc một công ty ngoài rủ bạn nhận dự án freelance.",
    choices: [
      { key: "A", title: "Làm SWP391 đúng chuẩn tài liệu, ôn SWT301", desc: "Viết SRS, thiết kế, test plan đầy đủ, ưu tiên điểm theo rubric.", gpa: 0.25, exp: -4, cost: 14,
        result: "Bộ tài liệu SWP391 được giảng viên khen là mẫu mực, điểm SWT301 cao, nhưng phần code chỉ đủ để demo." },
      { key: "B", title: "Nhận freelance, chỉ làm tối thiểu cho nhóm", desc: "Nhận dự án ngoài, để nhóm tự lo phần lớn SWP391.", gpa: -0.32, exp: 16, cost: 45,
        result: "Dự án freelance mang về tiền và một khách hàng thật; nhóm SWP391 lại bất mãn, còn điểm SWT301 tụt vì bạn bỏ nhiều buổi." },
      { key: "C", title: "Biến SWP391 thành sản phẩm thật, có test tự động", desc: "Làm tech lead, áp dụng UI/UX từ WDU203c và viết test cho cả nhóm, chính là bài SWT301.", gpa: 0.12, exp: 10, cost: 48, req: 53,
        result: "Nhóm có sản phẩm chạy thật, có quy trình Scrum và kiểm thử, ăn điểm cả SWP391 lẫn SWT301. Một dự án đáng đưa lên CV." },
    ],
  },
  {
    title: "OJT202: Thực tập tại doanh nghiệp vs. ENW493c",
    tag: "Kỳ OJT",
    courses: [
      { code: "OJT202", name: "Đào tạo trong môi trường thực tế (10 tín chỉ)" },
      { code: "ENW493C", name: "Phương pháp nghiên cứu & Kỹ năng viết học thuật" },
    ],
    story:
      "Kì 6, bạn đã đạt đủ 90% tín chỉ để bước vào OJT202, kỳ đào tạo thực tế tại doanh nghiệp, cùng môn ENW493c (Phương pháp nghiên cứu & Kỹ năng viết học thuật). Một công ty outsource lớn nhận bạn vào dự án cho khách nước ngoài; báo cáo OJT và bài viết học thuật thì vẫn phải nộp đúng hạn.",
    choices: [
      { key: "A", title: "OJT nhẹ nhàng, đầu tư báo cáo & ENW493c", desc: "Chọn vị trí ít áp lực, dành thời gian viết báo cáo và bài học thuật thật chỉn chu.", gpa: 0.25, exp: -4, cost: 14,
        result: "Báo cáo OJT và bài ENW493c được chấm rất cao, nhưng bạn chưa từng chạy theo nhịp của một dự án thương mại thực sự." },
      { key: "B", title: "OJT toàn lực ở công ty outsource", desc: "Nhận task khó, làm thêm giờ theo yêu cầu khách hàng; báo cáo tính sau.", gpa: -0.32, exp: 16, cost: 45,
        result: "Bạn học được Git flow, code review, CI/CD trong dự án lớn, nhưng thiếu ngủ triền miên và báo cáo OJT nộp qua loa." },
      { key: "C", title: "OJT nghiêm túc + ghi lại thành bài học thuật", desc: "Mỗi tuần ghi bài toán, giải pháp và kết quả đo được thành tư liệu cho ENW493c.", gpa: 0.12, exp: 10, cost: 48, req: 53,
        result: "Trải nghiệm ở công ty trở thành tư liệu cho bài viết học thuật; ngược lại, phương pháp nghiên cứu giúp bạn làm việc bài bản hơn." },
    ],
  },
  {
    title: "Làn sóng AI: EXE101 & SWD392 vs. Học đối phó",
    tag: "Làn sóng AI",
    courses: [
      { code: "SWD392", name: "Kiến trúc và thiết kế phần mềm" },
      { code: "EXE101", name: "Trải nghiệm khởi nghiệp 1" },
      { code: "PMG201C", name: "Quản lý dự án" },
      { code: "SE_COM*2", name: "Học phần 2 của combo" },
      { code: "SE_COM*3", name: "Học phần 3 của combo" },
    ],
    story:
      "Kì 7 có EXE101 (Trải nghiệm khởi nghiệp 1), SWD392 (Kiến trúc và thiết kế phần mềm), PMG201c (Quản lý dự án) và hai học phần combo. Một làn sóng AI mới tràn vào ngành: mạng xã hội đầy demo, còn slide SWD392 vẫn dừng ở những mẫu kiến trúc của mấy năm trước. Nhóm EXE101 của bạn đang chọn ý tưởng.",
    choices: [
      { key: "A", title: "Bám slide, học sát đề", desc: "Học đối phó để giữ chắc điểm SWD392 và PMG201c, tạm gác trào lưu.", gpa: 0.22, exp: -4, cost: 12,
        result: "Điểm cao nhờ học sát đề, nhưng khi bạn bè bàn về LLM và RAG, bạn chỉ biết gật đầu. Kiến thức bắt đầu lỗi thời." },
      { key: "B", title: "Bỏ giờ, làm MVP startup tích hợp AI", desc: "Dồn thời gian dựng MVP cho EXE101, gọi mô hình AI qua API.", gpa: -0.4, exp: 15, cost: 42,
        result: "MVP gây chú ý trên mạng, nhưng SWD392 và PMG201c bị bỏ dở, giảng viên ghi nhận sự vắng mặt." },
      { key: "C", title: "Dùng kiến trúc SWD392 để dựng MVP có AI", desc: "Áp mẫu kiến trúc đã học vào MVP của EXE101, dùng AI có kiểm chứng thay vì chép nguyên.", gpa: 0.1, exp: 9, cost: 44, req: 49,
        result: "Sản phẩm của nhóm có kiến trúc rõ ràng, thêm AI đúng chỗ. Bạn không chạy theo trào lưu mà làm chủ nó." },
    ],
  },
  {
    title: "Offer Fresher sớm vs. MLN111, MLN122 & PRM393",
    tag: "Chặng nước rút",
    courses: [
      { code: "MLN111", name: "Triết học Mác - Lê-nin" },
      { code: "MLN122", name: "Kinh tế chính trị Mác - Lê-nin" },
      { code: "PRM393", name: "Lập trình di động" },
      { code: "EXE201", name: "Trải nghiệm khởi nghiệp 2" },
      { code: "ITE302C", name: "Đạo đức trong CNTT" },
      { code: "SE_COM*4", name: "Học phần 4 của combo" },
    ],
    story:
      "Kì 8 có EXE201, PRM393 (Lập trình di động), ITE302c (Đạo đức CNTT), MLN111 (Triết học Mác – Lênin), MLN122 (Kinh tế chính trị Mác – Lênin) và một học phần combo. Đúng lúc đó, một công ty công nghệ gửi offer Fresher full-time sớm, hạn trả lời chỉ còn vài ngày. Còn điểm danh và bài tập nhóm của các môn lý luận chính trị thì vẫn đều đặn mỗi tuần.",
    choices: [
      { key: "A", title: "Dồn sức cho các môn trong kỳ", desc: "Gác offer, đầu tư điểm MLN111, MLN122, PRM393 và chuẩn bị nền cho đồ án.", gpa: 0.28, exp: -4, cost: 18,
        result: "Điểm các môn cao, bài tiểu luận triết học của bạn được khen; nhưng suất Fresher đã thuộc về người khác. Bạn hơi lo về khoảng trống kinh nghiệm." },
      { key: "B", title: "Nhận offer Fresher full-time", desc: "Đi làm 5 ngày/tuần, các môn trên lớp học khi rảnh.", gpa: -0.48, exp: 16, cost: 48,
        result: "Lương đầu tiên rất thơm, nhưng bạn vắng nhiều buổi, bài tập nhóm MLN bị dồn lại và điểm PRM393 tụt." },
      { key: "C", title: "Làm bán thời gian, lấy app công ty làm bài PRM393", desc: "Thương lượng làm remote, biến bài toán di động của công ty thành đồ án PRM393.", gpa: 0.12, exp: 10, cost: 50, req: 55,
        result: "Bạn vừa có lương, vừa có đề tài với dữ liệu thật; bài tiểu luận triết học cũng có ví dụ sống động ngay từ công việc của bạn." },
    ],
  },
  {
    title: "Bảo vệ đồ án tốt nghiệp vs. Portfolio & mùa phỏng vấn",
    tag: "Học kỳ cuối",
    courses: [
      { code: "SE_GRA_ELE", name: "Đồ án tốt nghiệp (10 tín chỉ)" },
      { code: "HCM202", name: "Tư tưởng Hồ Chí Minh" },
      { code: "MLN131", name: "Chủ nghĩa xã hội khoa học" },
      { code: "VNR202", name: "Lịch sử Đảng Cộng sản Việt Nam" },
    ],
    story:
      "Kì 9 là học kỳ cuối: đồ án tốt nghiệp (10 tín chỉ) cùng ba môn HCM202, MLN131, VNR202. Mùa tuyển dụng đã mở, hàng chục JD đang chờ. Bảng điểm, hồ sơ và portfolio sẽ nói thay bạn trước nhà tuyển dụng, còn hội đồng bảo vệ thì chờ ở cuối kỳ.",
    choices: [
      { key: "A", title: "Dồn sức cho báo cáo & bảo vệ đồ án", desc: "Chăm chút báo cáo, slide bảo vệ và ôn thi HCM202, MLN131, VNR202.", gpa: 0.2, exp: -4, cost: 12,
        result: "Bạn bảo vệ xuất sắc, điểm các môn cuối kỳ rất đẹp, nhưng phần dự án cá nhân trong hồ sơ khá mỏng." },
      { key: "B", title: "Dồn sức cho Portfolio & apply hàng loạt", desc: "Refactor sản phẩm, dựng demo, nộp hồ sơ dồn dập; đồ án làm cho đủ.", gpa: -0.32, exp: 14, cost: 40,
        result: "Portfolio rực rỡ với nhiều demo chạy thật, nhưng điểm đồ án và các môn cuối kỳ tụt, bảng điểm thành gánh nặng." },
      { key: "C", title: "Đồ án chính là Portfolio + phỏng vấn thử", desc: "Trình bày đồ án như một case study: bài toán, kiến trúc, kết quả đo được; buổi bảo vệ cũng là buổi luyện phỏng vấn.", gpa: 0.1, exp: 9, cost: 45, req: 50,
        result: "Nhà tuyển dụng nhìn thấy cả tư duy lẫn hành động: mỗi phần của đồ án là một minh chứng lý thuyết đã được thực tiễn kiểm nghiệm." },
    ],
  },
];

export const ENDINGS: Record<1 | 2 | 3 | 4 | 5, Ending> = {
  1: { tone: "fail", kind: "Thất bại cực đoan I", name: "Hàn lâm cô lập",
    summary: "Bạn tốt nghiệp Thủ khoa/Xuất sắc, nhưng trượt toàn bộ 20 JD tuyển dụng vì hồ sơ thiếu dự án và kỹ năng thực chiến.",
    quote: "Bạn đã tuyệt đối hóa một mặt của mâu thuẫn: có “Cung” mà không có “Cầu”. Lý luận không được thực tiễn kiểm nghiệm thì chỉ là lý luận suông, còn thực tiễn, theo Lênin, cao hơn nhận thức lý luận. Mâu thuẫn không được giải quyết, sự phát triển bị đình trệ trong một trạng thái cô lập." },
  2: { tone: "fail", kind: "Thất bại cực đoan II", name: "Chệch hướng thực dụng",
    summary: "Code rất tốt, nhưng GPA quá thấp và nợ môn chồng chất: trường buộc thôi học/nợ bằng, bạn không đủ điều kiện nhận bằng cử nhân.",
    quote: "Bạn chỉ chạy theo “Cầu”, bỏ quên “Cung”. Thực tiễn thiếu nền tảng lý luận dẫn đường dễ trở thành mò mẫm và không bền vững. Một mặt đối lập bị phủ nhận hoàn toàn sẽ quay lại phá hủy chính nền móng của mặt còn lại." },
  3: { tone: "fail", kind: "Thất bại kiệt sức", name: "Quá tải (Burnout)",
    summary: "Năng lượng cạn về 0. Bạn nhập viện vì burnout và phải lưu ban 1 năm.",
    quote: "Sự tích lũy về lượng vượt quá “độ” thì tất yếu xảy ra bước nhảy, nhưng ở đây là bước nhảy theo chiều phá vỡ. Năng lượng là điều kiện vật chất để giải quyết mọi mâu thuẫn; kiệt quệ nó thì mâu thuẫn chưa kịp chuyển hóa, con người đã gục ngã trước." },
  4: { tone: "win", kind: "Chuyển hóa thành công", name: "Thống nhất của các mặt đối lập",
    summary: "Bạn tốt nghiệp loại Khá/Giỏi và nhận ngay offer Junior với mức lương mơ ước. Mâu thuẫn được chuyển hóa biện chứng.",
    quote: "Bạn không chọn phe mà nâng cả hai mặt lên. Lý thuyết dẫn đường cho thực hành, thực hành kiểm nghiệm lý thuyết. Sự tích lũy đều đặn về lượng ở cả hai phía đã tạo nên bước nhảy về chất: từ sinh viên thành kỹ sư. Đó là sự giải quyết mâu thuẫn bằng chuyển hóa lên trình độ cao hơn." },
  5: { tone: "meh", kind: "Tầm thường / Bế tắc", name: "Mâu thuẫn chưa được giải quyết",
    summary: "Bạn ra trường với tấm bằng trung bình, làm trái ngành hoặc thất nghiệp tạm thời.",
    quote: "Mâu thuẫn vẫn còn đó: hai mặt đối lập chưa đủ mạnh để đẩy sự vật lên một chất mới. Chưa đủ tích lũy về lượng nên chưa có bước nhảy về chất. Bạn chưa thất bại, nhưng cũng chưa chuyển hóa; mâu thuẫn ấy sẽ tiếp tục đòi được giải quyết ở giai đoạn sau." },
};

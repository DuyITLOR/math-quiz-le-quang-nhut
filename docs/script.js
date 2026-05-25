const frac = (top, bottom) => `<span class="frac"><span>${top}</span><span>${bottom}</span></span>`;
const angle = (name, index = "") => `<span class="angle-symbol"><span class="angle-hat"></span><span class="angle-name">${name}</span>${index ? `<sub>${index}</sub>` : ""}</span>`;

const chapters = [
  {
    id: 1,
    title: "Câu hỏi ôn tập Toán 7 - Chương 1",
    doc: "../Dethi/CHU%CC%9BO%CC%9BNG%201%20TOA%CC%81N%207.pdf",
    questions: [
      {
        text: `Trong các phân số sau, phân số nào không biểu diễn số hữu tỉ ${frac("-5", "9")}?`,
        options: [frac("-10", "18"), frac("-14", "16"), frac("15", "-27"), `-${frac("20", "27")}`],
        answer: "A"
      },
      {
        text: "Trong các số hữu tỉ sau, số nào là số hữu tỉ dương?",
        options: [frac("5", "12"), frac("0", "234"), "-0,32", `-3${frac("2", "5")}`],
        answer: "A"
      },
      {
        text: "Chọn đáp án đúng trong các đáp án sau:",
        options: ["Q ⊂ Z", "Z ⊂ N", "Q ⊂ N", "N ⊂ Q"],
        answer: "D"
      },
      {
        text: `Cho hai số hữu tỉ x = ${frac("25", "-35")} và y = ${frac("-444", "777")}. Khẳng định nào sau đây là đúng?`,
        options: ["x = y", "x < y", "x > y", "x ≥ y"],
        answer: "B"
      },
      {
        text: "Số x mà 2ˣ = (2²)³ là:",
        options: ["5", "6", "2⁶", "8"],
        answer: "B"
      },
      {
        text: `Kết quả của phép tính (${frac("1", "7")})² . 7² là:`,
        options: ["7", frac("1", "49"), frac("1", "7"), "1"],
        answer: "D"
      },
      {
        text: `Kết quả tìm được của x trong biểu thức ${frac("1", "2")} - x = ${frac("1", "2")} là:`,
        options: [`-${frac("1", "2")}`, frac("1", "4"), "0", frac("3", "2")],
        answer: "C"
      },
      {
        text: `Giá trị của phép tính ${frac("1", "4")} - (-${frac("3", "2")} + ${frac("1", "4")}) là:`,
        options: [frac("3", "2"), `-${frac("3", "2")}`, "1", "-1"],
        answer: "A"
      },
      {
        text: "Đối với biểu thức không có dấu ngoặc và có các phép cộng, trừ, nhân, chia, nâng lên lũy thừa, ta thực hiện:",
        options: [
          "Lũy thừa → Nhân và chia → Cộng và trừ",
          "Nhân và chia → Lũy thừa → Cộng và trừ",
          "Nhân và chia → Cộng và trừ → Lũy thừa",
          "Lũy thừa → Cộng và trừ → Nhân và chia"
        ],
        answer: "D"
      },
      {
        text: "Đối với biểu thức có dấu ngoặc, ta thực hiện theo thứ tự:",
        options: ["[ ] → ( ) → { }", "( ) → [ ] → { }", "( ) → { } → [ ]", "[ ] → { } → ( )"],
        answer: "B"
      }
    ]
  },
  {
    id: 2,
    title: "Câu hỏi ôn tập Toán 7 - Chương 2",
    doc: "../Dethi/CHU%CC%9BO%CC%9BNG%202%20TOA%CC%81N%207.pdf",
    questions: [
      {
        text: "Tập hợp các số thực kí hiệu là:",
        options: ["●", "I", "○", "ℤ"],
        answer: "C"
      },
      {
        text: "Chọn câu đúng.",
        options: [`${frac("11", "12")} ∈ ●`, `${frac("3", "4")} ∈ ℤ`, `-${frac("30", "17")} ∉ Q`, "0 ∈ ~"],
        answer: "D"
      },
      {
        text: "Số nào là số đối của số √2?",
        options: [frac("1", "√2"), `-${frac("1", "√2")}`, "-√2", "√(-2)"],
        answer: "C"
      },
      {
        text: "Chọn câu sai.",
        options: ["-√3 < 0", `${frac("3", "4")} > 1,2`, "√5 < π", "-2022 < 2020"],
        answer: "B"
      },
      {
        text: "Làm tròn số 12,3564 đến hàng phần trăm:",
        options: ["12,35", "12,36", "12,356", "12,4"],
        answer: "B"
      },
      {
        text: "Dân số thế giới tính đến 11/02/2020 là 7 762 912 358 người. Em hãy làm tròn dân số thế giới đến hàng trăm nghìn.",
        options: ["7 762 9", "7 763 000 000", "7 762 900 000", "7762912 400"],
        answer: "D"
      },
      {
        text: "Dùng số thập phân để viết 7 762 912 358 người theo đơn vị tỉ người, sau đó làm tròn đến hàng thập phân thứ nhất.",
        options: ["7,7 tỉ người", "7,8 tỉ người", "8 tỉ người", "7,76 tỉ người"],
        answer: "C"
      },
      {
        text: `Tìm x biết: ${frac("x", "2")} = ${frac("18", "x")}.`,
        options: ["x = -6", "x = 6", "x ∈ {-6; 6}", "Đáp án khác"],
        answer: "C"
      },
      {
        text: `Tìm số hữu tỉ x, biết: ${frac("1", "3")} + ${frac("2", "3")}x = ${frac("5", "6")}.`,
        options: [frac("3", "4"), `-${frac("3", "4")}`, frac("1", "2"), frac("1", "6")],
        answer: "A"
      },
      {
        text: `Kết quả của phép tính | -1 + ${frac("3", "4")} | - 3,5 . √${frac("9", "49")} + (-${frac("1", "2")})³ là:`,
        options: ["8", frac("8", "11"), `-${frac("11", "8")}`, `-${frac("21", "16")}`],
        answer: "C"
      }
    ]
  },
  {
    id: 3,
    title: "Câu hỏi ôn tập Toán 7 - Chương 3",
    doc: "../Dethi/CHU%CC%9BO%CC%9BNG%203%20TOA%CC%81N%207.pdf",
    questions: [
      {
        text: "Khẳng định nào dưới đây là sai?",
        options: [
          "Hình hộp chữ nhật có 12 cạnh",
          "Hình hộp chữ nhật có 6 mặt",
          "Hình hộp chữ nhật có 8 đỉnh",
          "Hình hộp chữ nhật có 3 đường chéo"
        ],
        answer: "D"
      },
      {
        text: "Phần bên trong của khuôn làm bánh dạng hình hộp chữ nhật có đáy 50cm, 20cm và chiều cao 10cm. Sơn phần bên trong với giá 450 000đ/m². Cần hết bao nhiêu tiền để sơn 50 cái khuôn?",
        image: "assets/questions/ch3-q2.png",
        options: ["5 400 000đ", "5 300 000đ", "5 500 000đ", "5 000 000đ"],
        answer: "A"
      },
      {
        text: "Trong hình lăng trụ đứng, mỗi mặt bên là hình gì?",
        options: ["Hình chữ nhật", "Hình thang", "Hình bình hành", "Hình thoi"],
        answer: "A"
      },
      {
        text: "Sử dụng hình vẽ: Mặt đáy của hình lăng trụ đứng đã cho là:",
        image: "assets/questions/ch3-prism.png",
        options: ["Tam giác ABC", "Tam giác ABE", "Tứ giác ABED", "Tứ giác ACFD"],
        answer: "A"
      },
      {
        text: "Sử dụng hình vẽ: Mặt bên của hình lăng trụ đứng đã cho là:",
        image: "assets/questions/ch3-prism.png",
        options: ["Tứ giác ACFD", "Tứ giác ABCD", "Tam giác ABC", "Tam giác ABE"],
        answer: "C"
      },
      {
        text: "Sử dụng hình vẽ: Cạnh BC bằng với cạnh nào?",
        image: "assets/questions/ch3-prism.png",
        options: ["FE", "AB", "AD", "BE"],
        answer: "A"
      },
      {
        text: "Sử dụng hình vẽ: Cạnh AD bằng với cạnh nào?",
        image: "assets/questions/ch3-prism.png",
        options: ["AD", "BE", "FE", "AB"],
        answer: "B"
      },
      {
        text: "Biết mỗi khối có đơn vị thể tích là 1cm³. Tính thể tích của khối trong hình vẽ sau:",
        image: "assets/questions/ch3-q8.png",
        options: ["4cm³", "5cm³", "6cm³", "7cm³"],
        answer: "C"
      },
      {
        text: "Một hồ cá có kích thước đáy là 30cm và 40cm, cao 35cm. Số lít nước tối đa hồ cá có thể chứa là:",
        image: "assets/questions/ch3-q9.png",
        options: ["42 lít", "42 000 lít", "49 lít", "4900 lít"],
        answer: "A"
      }
    ]
  },
  {
    id: 4,
    title: "Câu hỏi ôn tập Toán 7 - Chương 4",
    doc: "../Dethi/CHU%CC%9BO%CC%9BNG%204%20TOA%CC%81N%207.pdf",
    questions: [
      {
        text: "Tìm các cặp góc kề nhau trong hình trên.",
        image: "assets/questions/ch4-q1.png",
        options: [
          `${angle("O", "1")}; ${angle("O", "2")}`,
          `${angle("O", "1")}; ${angle("O", "3")}`,
          `${angle("O", "4")}; ${angle("O", "2")}`,
          `${angle("O", "2")}; ${angle("O", "4")}`
        ],
        answer: "A"
      },
      {
        text: "Tìm các cặp góc đối đỉnh trong hình trên.",
        image: "assets/questions/ch4-q2.png",
        options: [
          `${angle("O", "1")}; ${angle("O", "2")}`,
          `${angle("O", "1")}; ${angle("O", "3")}`,
          `${angle("O", "4")}; ${angle("O", "1")}`,
          `${angle("O", "2")}; ${angle("O", "1")}`
        ],
        answer: "B"
      },
      {
        text: `Tìm góc ${angle("O", "1")}, biết ${angle("O", "3")} = 120°.`,
        image: "assets/questions/ch4-q3.png",
        options: ["60°", "160°", "120°", "100°"],
        answer: "C"
      },
      {
        text: `Tìm góc ${angle("O", "1")}, biết ${angle("O", "3")} = 20°.`,
        image: "assets/questions/ch4-q4.png",
        options: ["60°", "160°", "120°", "20°"],
        answer: "D"
      },
      {
        text: `Tìm góc ${angle("O", "1")}, biết ${angle("O", "3")} = 70°.`,
        image: "assets/questions/ch4-q5.png",
        options: ["60°", "70°", "110°", "100°"],
        answer: "B"
      },
      {
        text: `Cho hình vẽ bên, biết BC là tia phân giác của ${angle("ABD")}, ${angle("ABC")} = 36°. Số đo ${angle("CBD")} là:`,
        image: "assets/questions/ch4-q6.png",
        options: ["60°", "36°", "72°", "18°"],
        answer: "B"
      },
      {
        text: `Cho hình vẽ bên, biết OB là tia phân giác của ${angle("AOC")}, ${angle("BOC")} = 65°. Số đo của ${angle("AOC")} là:`,
        image: "assets/questions/ch4-q7.png",
        options: ["65°", "32,5°", "130°", "18°"],
        answer: "C"
      },
      {
        text: `Cho hình vẽ dưới đây, biết At là tia phân giác của ${angle("xAy")}, ${angle("xAy")} = 60°. Số đo ${angle("tAm")} là:`,
        image: "assets/questions/ch4-q8.png",
        options: ["150°", "120°", "60°", "180°"],
        answer: "A"
      },
      {
        text: `Cho hình vẽ dưới đây, biết Ot là tia phân giác của ${angle("xOy")}, On là tia phân giác của ${angle("yOm")}. Số đo của ${angle("tOn")} là:`,
        image: "assets/questions/ch4-q9.png",
        options: ["30°", "60°", "90°", "120°"],
        answer: "C"
      }
    ]
  },
  {
    id: 5,
    title: "Câu hỏi ôn tập Toán 7 - Chương 5",
    doc: "../Dethi/CHU%CC%9BO%CC%9BNG%205%20TOA%CC%81N%207.pdf",
    questions: [
      {
        text: "Dãy dữ liệu sau là định tính hay định lượng: Số ca nhiễm Covid-19 trong ngày 08/5/2022 của một số địa phương: 630; 39; 222; 179; 121; 105; ...",
        options: ["Định tính", "Định lượng"],
        answer: "B"
      },
      {
        text: "Khả năng phát âm tiếng Anh của các bạn học sinh lớp 7A: chưa đạt, đạt, giỏi, xuất sắc. Dãy dữ liệu trên là định tính hay định lượng?",
        options: ["Định tính", "Định lượng"],
        answer: "A"
      },
      {
        text: "Khối 7 của một trường THCS có 4 lớp là 7A, 7B, 7C, 7D. Nhà trường cho học sinh khối lớp 7 đăng kí tham quan hai bảo tàng: Bảo tàng Lịch sử Quốc gia và Bảo tàng Dân tộc học Việt Nam. Mỗi học sinh chỉ đăng kí tham quan đúng một bảo tàng, bạn Thảo lập biểu đồ cột kép biểu diễn số lượng học sinh đăng kí tham quan hai bảo tàng trên của từng lớp. Qua biểu đồ hãy cho biết, số học sinh lớp 7C đăng kí tham quan Bảo tàng Lịch sử Quốc gia là bao nhiêu?",
        image: "assets/questions/ch5-q3.png",
        options: ["30", "15", "25", "10"],
        answer: "C"
      },
      {
        text: "Trong các phát biểu sau, dữ liệu nào không phải là định lượng?",
        options: [
          "Cân nặng của trẻ sơ sinh (đơn vị tính là gam)",
          "Chiều cao trung bình của học sinh lớp 6 (đơn vị tính là mét)",
          "Số học sinh yêu thích bộ môn toán",
          "Nơi sinh của mỗi học sinh trong một lớp"
        ],
        answer: "D"
      },
      {
        text: "Kiểm tra sức khỏe đầu năm của học sinh lớp 6 gồm: đo chiều cao, cân nặng, độ cận thị, viễn thị. Dữ liệu nào là định lượng?",
        options: [
          "Chiều cao, cân nặng",
          "Chiều cao",
          "Cân nặng",
          "Chiều cao, cân nặng, cận thị, viễn thị"
        ],
        answer: "A"
      },
      {
        text: "Điểm kiểm tra môn Toán của một nhóm học sinh được ghi lại theo bảng sau. Nhóm này có bao nhiêu học sinh?",
        table: `
          <table class="data-table compact-table">
            <tr>
              <th>Điểm</th>
              <td>5</td>
              <td>6</td>
              <td>8</td>
              <td>9</td>
            </tr>
            <tr>
              <th>Số học sinh</th>
              <td>2</td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
            </tr>
          </table>
        `,
        options: ["28", "11", "10", "Một số khác"],
        answer: "B"
      },
      {
        text: "Thu thập số liệu về hứng thú học tập các bộ môn được kết quả như sau. Học sinh yêu thích môn học nào nhất?",
        table: `
          <table class="data-table subject-table">
            <tr>
              <th>Toán</th>
              <th>Ngữ văn</th>
              <th>KHTN</th>
              <th>Lịch sử, địa lí</th>
              <th>Tin</th>
              <th>GDCD</th>
              <th>Ngoại ngữ</th>
              <th>Công nghệ</th>
              <th>Giáo dục thể chất</th>
              <th>Âm nhạc</th>
              <th>Mỹ thuật</th>
              <th>HĐ trải nghiệm HN</th>
            </tr>
            <tr>
              <td>50%</td>
              <td>30%</td>
              <td>45%</td>
              <td>30%</td>
              <td>30%</td>
              <td>40%</td>
              <td>60%</td>
              <td>30%</td>
              <td>70%</td>
              <td>20%</td>
              <td>10%</td>
              <td>100%</td>
            </tr>
          </table>
        `,
        options: ["Môn toán", "Môn HĐ trải nghiệm HN", "Môn giáo dục thể chất", "Môn ngoại ngữ"],
        answer: "B"
      },
      {
        text: "Số từ dùng sai trong các bài văn của một nhóm học sinh lớp 6 được ghi lại như bảng sau. Số bài có từ dùng sai nhiều nhất chiếm tỉ lệ bao nhiêu phần trăm so với tổng số bài của nhóm học sinh?",
        table: `
          <table class="data-table mistake-table">
            <tr>
              <th>Số từ sai của một bài</th>
              <td>0</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <th>Số bài có từ sai</th>
              <td>1</td>
              <td>3</td>
              <td>5</td>
              <td>3</td>
              <td>4</td>
              <td>2</td>
              <td>2</td>
            </tr>
          </table>
        `,
        options: ["5%", "10%", "30%", "Một số khác"],
        answer: "B"
      }
    ]
  }
];

const letters = ["A", "B", "C", "D"];
const storageKey = "le-quang-nhut-toan-7-results";
let activeChapterId = 1;
let submitted = false;

const chapterList = document.getElementById("chapterList");
const quizForm = document.getElementById("quizForm");
const chapterMeta = document.getElementById("chapterMeta");
const chapterTitle = document.getElementById("chapterTitle");
const docLink = document.getElementById("docLink");
const totalCount = document.getElementById("totalCount");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const scoreCount = document.getElementById("scoreCount");
const resultText = document.getElementById("resultText");
const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");

function getActiveChapter() {
  return chapters.find((chapter) => chapter.id === activeChapterId);
}

function optionLetter(index) {
  return letters[index] || String.fromCharCode(65 + index);
}

function getAnswers(question) {
  return Array.isArray(question.answer) ? question.answer : [question.answer];
}

function getStoredResults() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch (error) {
    return {};
  }
}

function setStoredResults(results) {
  localStorage.setItem(storageKey, JSON.stringify(results));
}

function getChapterStorageKey(chapterId) {
  return `chapter-${chapterId}`;
}

function getSavedAttempt(chapterId) {
  const results = getStoredResults();
  return results[getChapterStorageKey(chapterId)]?.latest || null;
}

function saveAttempt(chapter, stats, answers) {
  const results = getStoredResults();
  const key = getChapterStorageKey(chapter.id);
  const attempt = {
    chapterId: chapter.id,
    title: chapter.title,
    total: chapter.questions.length,
    correct: stats.correct,
    wrong: stats.wrong,
    score: Math.round((stats.correct / chapter.questions.length) * 100),
    answers,
    submittedAt: new Date().toISOString()
  };

  const chapterResults = results[key] || { history: [] };
  chapterResults.latest = attempt;
  chapterResults.history = [...(chapterResults.history || []), attempt];
  results[key] = chapterResults;
  setStoredResults(results);
}

function clearLatestAttempt(chapterId) {
  const results = getStoredResults();
  const key = getChapterStorageKey(chapterId);
  if (results[key]) {
    delete results[key].latest;
    setStoredResults(results);
  }
}

function collectAnswers(chapter) {
  return chapter.questions.map((_, index) => {
    const checked = quizForm.querySelector(`input[name="q${index}"]:checked`);
    return checked ? checked.value : null;
  });
}

function restoreAnswers(answers) {
  answers.forEach((answer, index) => {
    if (!answer) {
      return;
    }

    const input = quizForm.querySelector(`input[name="q${index}"][value="${answer}"]`);
    if (input) {
      input.checked = true;
    }
  });
}

function setQuizLocked(isLocked) {
  quizForm.querySelectorAll("input").forEach((input) => {
    input.disabled = isLocked;
  });

  submitButton.disabled = isLocked;
  submitButton.textContent = isLocked ? "Đã nộp bài" : "Nộp bài";
  quizForm.classList.toggle("locked", isLocked);
}

function formatDateTime(value) {
  return new Date(value).toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function renderChapters() {
  chapterList.innerHTML = chapters.map((chapter) => `
    <button class="chapter-button ${chapter.id === activeChapterId ? "active" : ""}" type="button" data-chapter="${chapter.id}">
      <span>Chương ${chapter.id}</span>
      <small>${chapter.questions.length} câu</small>
    </button>
  `).join("");
}

function renderQuiz() {
  const chapter = getActiveChapter();
  const savedAttempt = getSavedAttempt(chapter.id);
  submitted = false;
  chapterMeta.textContent = `Chương ${chapter.id}`;
  chapterTitle.textContent = chapter.title;
  docLink.href = chapter.doc;
  resultText.textContent = "Chọn đáp án rồi bấm nộp bài để xem kết quả.";

  quizForm.innerHTML = chapter.questions.map((question, questionIndex) => `
    <article class="question-card" data-question="${questionIndex}">
      <div class="question-body">
        <p class="question-title">Câu ${questionIndex + 1}. ${question.text}</p>
        ${question.image ? `<img class="question-image" src="${question.image}" alt="Hình minh họa câu ${questionIndex + 1}">` : ""}
        ${question.table ? `<div class="table-scroll">${question.table}</div>` : ""}
        ${question.note ? `<p class="question-note">${question.note}</p>` : ""}
        <div class="option-grid">
          ${question.options.map((option, optionIndex) => {
            const letter = optionLetter(optionIndex);
            return `
              <label class="option-label">
                <input type="radio" name="q${questionIndex}" value="${letter}">
                <span><strong>${letter}.</strong> ${option}</span>
              </label>
            `;
          }).join("")}
        </div>
        <div class="feedback" hidden></div>
      </div>
    </article>
  `).join("");

  if (savedAttempt) {
    restoreAnswers(savedAttempt.answers || []);
    gradeQuiz({ persist: false, message: `Đã nộp lúc ${formatDateTime(savedAttempt.submittedAt)}. Bấm Làm lại để làm lần mới.` });
  } else {
    updateSummary({ correct: 0, wrong: 0, total: chapter.questions.length });
    setQuizLocked(false);
  }

  renderChapters();
}

function updateSummary(stats) {
  totalCount.textContent = stats.total;
  correctCount.textContent = stats.correct;
  wrongCount.textContent = stats.wrong;

  const percent = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
  scoreCount.textContent = `${percent}%`;
}

function clearMarks() {
  quizForm.querySelectorAll(".question-card").forEach((card) => {
    card.classList.remove("correct", "wrong");
  });

  quizForm.querySelectorAll(".option-label").forEach((label) => {
    label.classList.remove("mark-correct", "mark-wrong");
  });

  quizForm.querySelectorAll(".feedback").forEach((feedback) => {
    feedback.hidden = true;
    feedback.textContent = "";
    feedback.className = "feedback";
  });
}

function gradeQuiz({ persist = true, message = "" } = {}) {
  if (submitted && persist) {
    resultText.textContent = "Bài đã nộp rồi. Bấm Làm lại nếu muốn làm lại từ đầu.";
    return;
  }

  const chapter = getActiveChapter();
  let correct = 0;
  let wrong = 0;

  clearMarks();

  chapter.questions.forEach((question, index) => {
    const card = quizForm.querySelector(`[data-question="${index}"]`);
    const checked = quizForm.querySelector(`input[name="q${index}"]:checked`);
    const feedback = card.querySelector(".feedback");
    const labels = [...card.querySelectorAll(".option-label")];
    const answers = getAnswers(question);

    answers.forEach((answer) => {
      const correctLabel = labels[letters.indexOf(answer)];
      if (correctLabel) {
        correctLabel.classList.add("mark-correct");
      }
    });

    if (checked && answers.includes(checked.value)) {
      correct += 1;
      card.classList.add("correct");
      feedback.hidden = false;
      feedback.textContent = "Đúng";
      feedback.classList.add("ok");
      return;
    }

    wrong += 1;
    card.classList.add("wrong");
    if (checked) {
      checked.closest(".option-label").classList.add("mark-wrong");
    }

    feedback.hidden = false;
    feedback.textContent = checked ? `Sai. Đáp án đúng là ${answers.join(" hoặc ")}.` : `Chưa chọn. Đáp án đúng là ${answers.join(" hoặc ")}.`;
    feedback.classList.add("bad");
  });

  submitted = true;
  const stats = { correct, wrong, total: chapter.questions.length };
  updateSummary(stats);

  if (persist) {
    saveAttempt(chapter, stats, collectAnswers(chapter));
  }

  setQuizLocked(true);
  resultText.textContent = message || `Kết quả: đúng ${correct}/${chapter.questions.length} câu. Kết quả đã được lưu.`;
}

chapterList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-chapter]");
  if (!button) {
    return;
  }

  activeChapterId = Number(button.dataset.chapter);
  renderQuiz();
});

submitButton.addEventListener("click", gradeQuiz);

resetButton.addEventListener("click", () => {
  const chapter = getActiveChapter();
  clearLatestAttempt(chapter.id);
  quizForm.reset();
  clearMarks();
  setQuizLocked(false);
  submitted = false;
  updateSummary({ correct: 0, wrong: 0, total: chapter.questions.length });
  resultText.textContent = "Đã xóa lựa chọn. Làm lại từ đầu nhé.";
});

quizForm.addEventListener("change", () => {
  if (submitted) {
    resultText.textContent = "Bài đã nộp và bị khóa. Bấm Làm lại nếu muốn làm lần mới.";
  }
});

renderQuiz();

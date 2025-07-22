const questions = [
    {
        q: "고단했던 한주의 끝, 힐링이 필요하다. 당신의 선택은?",
        a: [
            { text: "사람들이랑 노는것이 힐링이다.", type: "E" },
            { text: "혼자 누워서 에너지 충전!", type: "I" }
        ]
    },
    {
        q: "친구와 여행을 왔다. 밥을 먹고 난 후 어디로 갈까?",
        a: [
            { text: "정해져 있지 않아도 괜찮다.", type: "P" },
            { text: "계획이 없으면 불안하다.", type: "J" }
        ]
    },
    {
        q: "동료가 겪어보지 못한 고민을 털어놓는다.",
        a: [
            { text: "감정적으로 공감해준다.", type: "F" },
            { text: "경험이 없으면 공감이 어렵다.", type: "T" }
        ]
    },
    {
        q: "심리학/철학 등에 흥미가 있는가?",
        a: [
            { text: "예", type: "N" },
            { text: "아니오", type: "S" }
        ]
    },
    {
        q: "회식 마무리, 당신은?",
        a: [
            { text: "빨리 집에 가서 쉬고 싶다.", type: "I" },
            { text: "더 놀고 싶다.", type: "E" }
        ]
    },
    {
        q: "과제를 해야 한다. 당신은?",
        a: [
            { text: "계획부터 꼼꼼히!", type: "J" },
            { text: "일단 시작하고 본다.", type: "P" }
        ]
    },
    {
        q: "친한 친구가 울고 있다. 당신은?",
        a: [
            { text: "같이 울컥한다.", type: "F" },
            { text: "어떻게 도와줄까 고민한다.", type: "T" }
        ]
    },
    {
        q: "조금 더 공감가는 가치관은?",
        a: [
            { text: "지금 혹은 가까운 미래의 현실", type: "S" },
            { text: "조금 더 먼 미래의 가능성", type: "N" }
        ]
    }
];

const results = {

    "ISTJ": {
        title: "신중하고 책임감 있는 관리자",
        description: "조용하지만 결단력 있고, 체계적으로 문제를 해결하는 능력이 뛰어납니다.",
        image: "images/ISTJ.png"
    },
    "ISFJ": {
        title: "성실하고 배려심 깊은 수호자",
        description: "타인을 돕는 것을 좋아하며, 헌신적이고 책임감이 강한 성격입니다.",
        image: "images/ISFJ.png"
    },
    "INFJ": {
        title: "통찰력 있는 조용한 이상주의자",
        description: "깊이 있는 사고와 강한 직관력을 가진 조용한 리더형입니다.",
        image: "images/INFJ.png"
    },
    "INTJ": {
        title: "전략적인 사색가",
        description: "분석력과 전략적 사고에 능하며, 비전을 실현하려는 독립적인 성향입니다.",
        image: "images/INTJ.png"
    },
    "ISTP": {
        title: "과묵하고 유연한 문제 해결자",
        description: "직접적인 경험을 중시하며, 논리적이고 효율적인 방식으로 문제를 처리합니다.",
        image: "images/ISTP.png"
    },
    "ISFP": {
        title: "온순하고 예술적인 이상주의자",
        description: "감성적이고 조용하며, 예술적 감각이 뛰어나고 조화를 중시합니다.",
        image: "images/ISFP.png"
    },
    "INFP": {
        title: "열정적인 중재자",
        description: "이상과 가치를 중시하며, 창의적이고 감성적인 성향을 가지고 있습니다.",
        image: "images/INFP.png"
    },
    "INTP": {
        title: "논리적인 사색가",
        description: "지적 호기심이 강하고 독립적인 사고를 중시하는 이론가형입니다.",
        image: "images/INTP.png"
    },
    "ESTP": {
        title: "활동적인 모험가",
        description: "즉흥적이고 에너지 넘치는 성격으로, 현실 감각이 뛰어납니다.",
        image: "images/ESTP.png"
    },
    "ESFP": {
        title: "사교적이고 재치 있는 연예인",
        description: "다정하고 즐거움을 추구하며, 타인과의 교류를 즐깁니다.",
        image: "images/ESFP.png"
    },
    "ENFP": {
        title: "창의적이고 열정적인 활동가",
        description: "열정과 호기심으로 가득하며, 타인에게 영감을 주는 성향입니다.",
        image: "images/ENFP.png"
    },
    "ENTP": {
        title: "토론을 즐기는 혁신가",
        description: "풍부한 아이디어와 유연한 사고로 새로운 것을 추구합니다.",
        image: "images/ENTP.png"
    },
    "ESTJ": {
        title: "현실적이고 단호한 관리자",
        description: "체계적이고 조직적인 접근을 선호하며, 리더십이 강합니다.",
        image: "images/ESTJ.png"
    },
    "ESFJ": {
        title: "다정다감한 사교가",
        description: "타인의 감정을 잘 이해하고 배려하는 협력형 리더입니다.",
        image: "images/ESFJ.png"
    },
    "ENFJ": {
        title: "카리스마 있는 지도자",
        description: "이해심과 통찰력을 바탕으로 사람들을 이끄는 능력이 뛰어납니다.",
        image: "images/ENFJ.png"
    },
    "ENTJ": {
        title: "대담하고 효율적인 리더",
        description: "결단력과 추진력이 강하고 목표 달성을 중요시합니다.",
        image: "images/ENTJ.png"
    },
    "ISFJ": "성실하고 배려심 깊은 수호자",
    "INFJ": "통찰력 있는 조용한 이상주의자",
    "INTJ": "전략적인 사색가",
    "ISTP": "과묵하고 유연한 문제 해결자",
    "ISFP": "온순하고 예술적인 이상주의자",
    "INFP": "열정적인 중재자",
    "INTP": "논리적인 사색가",
    "ESTP": "활동적인 모험가",
    "ESFP": "사교적이고 재치 있는 연예인",
    "ENFP": "창의적이고 열정적인 활동가",
    "ENTP": "토론을 즐기는 혁신가",
    "ESTJ": "현실적이고 단호한 관리자",
    "ESFJ": "다정다감한 사교가",
    "ENFJ": "카리스마 있는 지도자",
    "ENTJ": "대담하고 효율적인 리더"
};

let current = 0;
let scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };

function showQuestion() {
    if (current >= questions.length) return showResult();
    const qBox = document.getElementById("question");
    const oBox = document.getElementById("options");
    qBox.innerHTML = questions[current].q;
    oBox.innerHTML = "";
    questions[current].a.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerHTML = opt.text;
        btn.onclick = () => {
            scores[opt.type]++;
            current++;
            showQuestion();
        };
        oBox.appendChild(btn);
    });
}

function showResult() {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";
    const type = (scores["E"] > scores["I"] ? "E" : "I")
               + (scores["S"] > scores["N"] ? "S" : "N")
               + (scores["T"] > scores["F"] ? "T" : "F")
               + (scores["J"] > scores["P"] ? "J" : "P");
    document.getElementById("result-type").innerText = type;
    document.getElementById("result-description").innerText = results[type];
}

window.onload = showQuestion;

    const img = document.createElement("img");
    img.src = results[type].image;
    img.alt = type + " 이미지";
    img.style.maxWidth = "100%";
    img.style.borderRadius = "10px";
    document.getElementById("result-type").innerText = type + " - " + results[type].title;
    document.getElementById("result-description").innerText = results[type].description;
    document.getElementById("result-box").prepend(img);

// 소셜 공유 버튼 생성
const shareBox = document.createElement("div");
shareBox.style.marginTop = "20px";

const kakaoBtn = document.createElement("button");
kakaoBtn.innerText = "📱 카카오톡 공유";
kakaoBtn.onclick = () => {
    const url = "https://sharer.kakao.com/talk/friends/picker/link?url=" + encodeURIComponent(window.location.href);
    window.open(url, "_blank");
};
shareBox.appendChild(kakaoBtn);

const twitterBtn = document.createElement("button");
twitterBtn.innerText = "🐦 트위터 공유";
twitterBtn.onclick = () => {
    const text = "나의 성향은 " + type + "! 당신도 테스트해보세요 👉 ";
    const twitterURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + encodeURIComponent(window.location.href);
    window.open(twitterURL, "_blank");
};
shareBox.appendChild(twitterBtn);

const instagramNote = document.createElement("p");
instagramNote.innerText = "📸 인스타그램은 이미지 캡처 후 업로드를 권장합니다.";
instagramNote.style.marginTop = "10px";
instagramNote.style.fontSize = "14px";
instagramNote.style.color = "#777";
shareBox.appendChild(instagramNote);

// 결과 저장
let savedResults = localStorage.getItem("mbti_results") || "[]";
let parsed = JSON.parse(savedResults);
parsed.push({ type: type, timestamp: new Date().toISOString() });
localStorage.setItem("mbti_results", JSON.stringify(parsed));

document.getElementById("result-box").appendChild(shareBox);

const emailNote = document.createElement("p");
emailNote.innerText = "📧 이메일로 결과를 받고 싶다면 화면 캡처 후 직접 전달해주세요.";
emailNote.style.marginTop = "10px";
emailNote.style.fontSize = "14px";
emailNote.style.color = "#777";
shareBox.appendChild(emailNote);

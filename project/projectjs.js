
window.onload = function() {
    showSection('health');
};

var textarea = document.querySelector('textarea');
        
textarea.addEventListener('input', (e) => {
    textarea.style.height = '230px';
    textarea.style.height = e.target.scrollHeight + 'px';
});


function smoothScroll(target) {
    const headerHeight = document.querySelector('header').offsetHeight;
    const element = document.querySelector(target);
    const offsetPosition = element.offsetTop - headerHeight;
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

let currentPage = 0;




function showSection(category) {    
    const articles = {
        health: [
            { title: "健康產業的轉型：挑戰與機遇", content: "人們對健康的關注不斷增加，促使健康產業迎來轉型。科技創新、個性化醫療等趨勢推動著行業發展，同時，提高醫療品質和普及醫療資源也是當前的重要任務。" },
            { title: "健康與生活：醫療科技的嶄新時代", content: "醫療科技的發展正在改變人們對健康的看法和生活方式。從智慧醫療到健康監測，技術正在成為健康管理的重要工具。" },
            {title:"健康風暴！知名製藥公司被爆造假藥品", content: "驚人的揭露！某知名製藥公司被揭發生產的藥品存在嚴重的品質問題。" },
            {title:"健康危機！某健身中心爆發嚴重感染事件", content: "令人震驚的消息！某知名健身中心被曝出嚴重的感染事件。"}
        ],
        politics: [
            { title: "政府推動下的社會變革：挑戰與機遇", content: "政府在推動社會變革方面扮演著關鍵角色。" },
            { title: "政治風波！知名台灣政治人物涉嫌貪腐醜聞曝光", content: "近日，消息指稱知名政治人物涉嫌卷入大規模貪腐醜聞。" }
        ],
        commerce: [
            { title: "新光景下的商業策略：創新與數據驅動", content: "在數字化時代，企業必須不斷創新。" },
            { title: "商業環境的轉變：挑戰與機遇", content: "全球化、技術革命等因素塑造了當今商業環境。" }
        ]
        // More categories can be added here...
    };

    // Display articles for the selected category
    const articlesSection = document.getElementById('articles');
    articlesSection.innerHTML = '';

    if (articles[category]) {
        articles[category].forEach((article, index) => {
            const articleId = `${category}-article-${index}`;
            const articleDiv = document.createElement('div');
            articleDiv.id = articleId;
            articleDiv.innerHTML = `<h2><a href="#${articleId}">${article.title}</a></h2><p>${article.content}</p>`;
            articlesSection.appendChild(articleDiv);
        });
    }

    // Remove 'active' class from all options
    const allLinks = document.querySelectorAll('.categories .type a');
    allLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked option
    const selectedLink = document.querySelector(`.categories .type a[onclick="showSection('${category}')"]`);
    if (selectedLink) {
        selectedLink.classList.add('active');
    }
}


function updatePage() {
    const articlesSection = document.getElementById('articles');
    const articles = articlesSection.children;
    const pageWidth = articlesSection.offsetWidth;
    const offset = currentPage * pageWidth;
    articlesSection.style.transform = `translateX(-${offset}px)`;
}


function openNewWindow() {
    window.open('outcome.html', '_blank'); 
}











window.onload = function() {
    showSection('health');
};

var textarea = document.querySelector('textarea');
        
textarea.addEventListener('input', (e) => {
    textarea.style.height = '300px';
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
            { title: "健康與生活：醫療科技的嶄新時代", content: "醫療科技的發展正在改變人們對健康的看法和生活方式。從智慧醫療到健康監測，技術正在成為健康管理的重要工具。這一變革帶來了更多的便利性和個性化選擇，同時也提高了人們對健康資訊和隱私的關注。" },
            {title:"健康風暴！知名製藥公司被爆造假藥品",content:"驚人的揭露！某知名製藥公司被揭發生產的藥品存在嚴重的品質問題。據報導，這些藥品中含有不合格成分，對患者的健康構成了嚴重威脅。此次爆料引發了對製藥行業監管的關注，並對該公司聲譽造成了沉重打擊。患者和醫療專家們紛紛呼籲加強對藥品品質的監管和檢測。"},
            {title:"健康危機！某健身中心爆發嚴重感染事件",content:"令人震驚的消息！某知名健身中心被曝出嚴重的感染事件。據報導，該健身中心內多名會員相繼出現感染症狀，懷疑是由於環境衛生不潔導致的病毒傳播。這一事件引發了公眾對健身中心衛生安全的擔憂，並對該品牌形象造成了重大影響。當局已展開調查並採取措施防止疫情擴散。"}
        ],
            // Add more articles here // {title:"",content:""}
    
        politics: [
            { title: "政府推動下的社會變革：挑戰與機遇", content: "政府在推動社會變革方面扮演著關鍵角色。通過政策制定和執行，政府可以引導經濟發展、改善社會福利、促進公共安全等。然而，面對著日益複雜的社會問題，政府也面臨著挑戰，需要不斷創新和改革以應對變化的需求。" },
            { title: "政治風波！知名台灣政治人物涉嫌貪腐醜聞曝光", content: "近日，消息指稱知名政治人物涉嫌卷入大規模貪腐醜聞，引發社會震撼。據悉，該政治人物涉嫌收受巨額賄款以換取政治利益，對此指控的調查正在進行中。此消息震驚了台灣政壇，引發了民眾對政治清廉的關注和討論。" },
            {title:"爆炸新聞！某政治人物竟涉嫌與外國勢力勾結",content:"最新消息顯示，某政治人物被指控與外國勢力有著不正當的勾結關係，引起了極大的震驚和爭議。據傳言，這些關係牽涉到敏感的國家安全問題，引發了對於該政治人物忠誠度的質疑。這一事件引發了政治界和公眾對於外國干預台灣政治的擔憂，也加劇了政治局勢的不穩定性。"},
            {title:"政治風波！知名政治家遭爆料涉嫌參與非法集會",content:"今日爆料顯示，某知名政治家被指控參與了一場被認為是非法的集會活動，引起了社會的廣泛關注和討論。據報導，這場集會被指為違反當地的集會法規，並引發了公眾對於政治家行為合法性的疑慮。該事件使政治家陷入了舆論的風暴中，也對其政治前途造成了影響。"}
            // Add more articles here
        ],
        commerce:[
            {title: "新光景下的商業策略：創新與數據驅動",content:"在數字化時代，企業必須不斷創新，利用數據洞察市場需求，構建個性化服務，以贏得客戶信任。同時，注重數據安全和隱私保護，是維持競爭優勢的關鍵。"},
            {title:"商業環境的轉變：挑戰與機遇",content:"全球化、技術革命等因素塑造了當今商業環境。企業需要靈活應對市場變化，並尋找新的增長機會。創新和數據分析成為成功的關鍵，同時，企業社會責任也受到越來越多的關注。"},
            {title:"獨家：知名企業CEO因財務不正被捕",content:"震驚商界！某知名企業的CEO被警方突擊搜查，據報導，該CEO涉嫌在公司財務報表上進行不正當操作，以掩蓋企業虧損。此舉引發了投資者和股東的恐慌，對公司未來發展造成了不確定性。該CEO目前正面臨著涉嫌詐欺等多項指控。"},
            {title:"爆料：知名零售連鎖企業涉嫌偷稅",content:"爆炸性消息！某知名零售連鎖企業被揭露涉嫌進行大規模偷稅行為。據報導，該企業利用虛報成本、漏報收入等手段進行偷稅，逃避大量稅負。這一消息震驚了消費者和政府部門，引發了對企業稅務透明度的擔憂，同時也對企業聲譽造成了重大影響。該企業目前正面臨著調查和法律追究。"}
        ],

        // Add more categories and articles here
    };

    const articlesSection = document.getElementById('articles');
    articlesSection.innerHTML = '';

    if (articles[category]) {
        articles[category].forEach((article, index) => {
            const articleId = `${category}-article-${index}`;
            const articleDiv = document.createElement('div');
            articleDiv.id = articleId;
            articleDiv.innerHTML = `<h2><a href="#${articleId}">${article.title}</a></h2><p><a href="#${articleId}">${article.content}</a></p>`;
            articlesSection.appendChild(articleDiv);
        });
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
    window.open('outcome.html', '_blank'); // 在此处替换为你想打开的新窗口的URL
}










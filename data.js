const LESSONS = [
            { id: 'L1', title: '第一課 在天晴了的時候', active: true },
            { id: 'L2', title: '第二課 珍珠鳥', active: true },
            { id: 'L3', title: '第三課 客至', active: true },
            { id: 'L4', title: '第四課 贏得喝采的輸家', active: true },
            { id: 'L5', title: '第五課 哇！原來如此', active: true },
            { id: 'L6', title: '第六課 登月先鋒', active: true }
        ];

        const QUESTION_BANK = [
            // ==================== 第一課 (L1) 題庫 ====================
            // L1 - 寫國字
            {
                id: 'q_l1_hw_char_1', lessonId: 'L1', type: 'handwriting', category: '寫國字', difficulty: 2,
                question: '給雨潤過的泥路，一下子洗淨了[[國字:ㄔㄣˊ:塵]][[國字:ㄍㄡˋ:垢]]。',
                correctAnswer: '塵垢', explanation: '【解說】「塵垢」指灰塵和汙垢。注意「垢」是土部，不要寫成水部喔！'
            },
            {
                id: 'q_l1_hw_char_2', lessonId: 'L1', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '美麗的[[國字:ㄈㄥˋ:鳳]]蝶兒，把智慧書[[國字:ㄧㄝˋ:頁]][[國字:ㄆㄨˋ:曝]]露在陽光下。',
                correctAnswer: '鳳、頁、曝', explanation: '【解說】「曝」指在陽光下晒，注意左邊是日部。'
            },
            {
                id: 'q_l1_hw_char_3', lessonId: 'L1', type: 'handwriting', category: '寫國字', difficulty: 4,
                question: '新陽推開了陰[[國字:ㄇㄞˊ:霾]]，我們[[國字:ㄕㄜˋ:涉]]過溪流，看見雲的腳[[國字:ㄐㄧ:跡]]。',
                correctAnswer: '霾、涉、跡', explanation: '【解說】「陰霾」的霾是雨部。「涉水」指從水裡走過去。「腳跡」就是足跡。'
            },
            {
                id: 'q_l1_hw_char_4', lessonId: 'L1', type: 'handwriting', category: '寫國字', difficulty: 2,
                question: '走在泥路上感覺十分涼[[國字:ㄕㄨㄤˇ:爽]]，溪水在微風中[[國字:ㄩㄣˋ:暈]]皺了。',
                correctAnswer: '爽、暈', explanation: '【解說】「爽」要注意筆順。「暈」皺是指水面產生了波紋，是日部。'
            },
            // L1 - 寫注音
            {
                id: 'q_l1_hw_py_1', lessonId: 'L1', type: 'handwriting', category: '寫注音', difficulty: 3,
                question: '溪水在微風中[[注音:暈:ㄩㄣˋ]]皺了。',
                correctAnswer: 'ㄩㄣˋ', explanation: '【解說】「暈皺」是指水面產生波紋，讀四聲「ㄩㄣˋ」。不要念成頭暈的「ㄩㄣ」！'
            },
            {
                id: 'q_l1_hw_py_2', lessonId: 'L1', type: 'handwriting', category: '寫注音', difficulty: 4,
                question: '把智慧書頁，[[注音:曝:ㄆㄨˋ]]著陽光一開一收。',
                correctAnswer: 'ㄆㄨˋ', explanation: '【解說】「曝」指在陽光下晒，讀作「ㄆㄨˋ」。很容易念錯成暴，要特別注意！'
            },
            {
                id: 'q_l1_hw_py_3', lessonId: 'L1', type: 'handwriting', category: '寫注音', difficulty: 3,
                question: '新陽推開了陰[[注音:霾:ㄇㄞˊ]]。',
                correctAnswer: 'ㄇㄞˊ', explanation: '【解說】「陰霾」讀作第二聲「ㄇㄞˊ」，形容天氣陰沉。'
            },
            {
                id: 'q_l1_hw_py_4', lessonId: 'L1', type: 'handwriting', category: '寫注音', difficulty: 2,
                question: '一下子洗淨了塵[[注音:垢:ㄍㄡˋ]]。',
                correctAnswer: 'ㄍㄡˋ', explanation: '【解說】「塵垢」讀作第四聲「ㄍㄡˋ」，指灰塵和汙垢。'
            },
            // L1 - 選擇題 (節錄幾題代表)
            {
                id: 'q_l1_mc_1', lessonId: 'L1', type: 'mcq', category: '改錯字', difficulty: 1,
                question: '下列哪個詞語的字形是「完全正確」的？',
                options: [
                    { text: '洗淨塵后', isCorrect: false, explanation: '錯誤。「后」應改為「垢」(土部)。' },
                    { text: '涼爽微風', isCorrect: true, explanation: '正確！「爽」字筆畫正確。' },
                    { text: '陰埋天氣', isCorrect: false, explanation: '錯誤。「埋」應改為「霾」(雨部)。' },
                    { text: '雲的腳積', isCorrect: false, explanation: '錯誤。「積」應改為「跡」(足部)。' }
                ]
            },
            {
                id: 'q_l1_mc_2', lessonId: 'L1', type: 'mcq', category: '課文理解', difficulty: 3,
                question: '「把牠的飾彩的智慧書頁，曝著陽光一開一收」，詩中的「智慧書頁」指的是什麼？',
                options: [
                    { text: '放在泥路上的書本', isCorrect: false, explanation: '這首詩描寫自然景物，沒有提到真正的書本。' },
                    { text: '樹上飄落的葉子', isCorrect: false, explanation: '葉子不會自己「一開一收」。' },
                    { text: '蝴蝶美麗的翅膀', isCorrect: true, explanation: '正確！作者發揮想像力，將鳳蝶有斑紋的翅膀比喻為裝飾著色彩的書頁。' },
                    { text: '地上的水窪', isCorrect: false, explanation: '水窪不會像書頁一樣開收。' }
                ]
            },
            {
                id: 'q_l1_mc_3', lessonId: 'L1', type: 'mcq', category: '意象比較', difficulty: 4,
                question: '比較「在天晴的時候」與「在天晴『了』的時候」，多了一個「了」字，帶給讀者什麼不同的感受？',
                options: [
                    { text: '感覺時間已經很晚了，天快黑了', isCorrect: false, explanation: '與時間早晚無關。' },
                    { text: '帶有「剛下過雨，才剛轉晴」的濕潤與新鮮感', isCorrect: true, explanation: '正確！「了」表現出狀態的轉變，充滿雨後初晴的驚喜。' },
                    { text: '表示天氣變得非常炎熱', isCorrect: false, explanation: '剛下過雨通常較涼爽。' },
                    { text: '沒有任何不同，只是為了押韻', isCorrect: false, explanation: '在詩詞中，一字之差往往意境大不相同。' }
                ]
            },

            
            {
                id: 'q_l1_mc_new_1', lessonId: 'L1', type: 'mcq', category: '語文常識', difficulty: 2, batch: '新題庫擴充',
                question: '「和天氣有關的四字語詞」中，哪一個最適合用來形容「夏天太陽猛烈，天氣非常炎熱」？',
                options: [
                    { text: '火傘高張', isCorrect: true, explanation: '正確！「火傘高張」形容烈日當空，非常炎熱。' },
                    { text: '碧空如洗', isCorrect: false, explanation: '形容天空非常晴朗，像洗過一樣乾淨。' },
                    { text: '滴水成冰', isCorrect: false, explanation: '形容天氣極度寒冷。' },
                    { text: '陰雨綿綿', isCorrect: false, explanation: '形容連續不斷地下雨。' }
                ]
            },
            {
                id: 'q_l1_mc_new_2', lessonId: 'L1', type: 'mcq', category: '語文常識', difficulty: 2, batch: '新題庫擴充',
                question: '「和天氣有關的四字語詞」中，「滴水成冰」適合用來形容什麼樣的天氣狀況？',
                options: [
                    { text: '下冰雹的惡劣天氣', isCorrect: false, explanation: '主要是形容溫度低，不一定是下冰雹。' },
                    { text: '氣候極度寒冷', isCorrect: true, explanation: '正確！水滴下去馬上結冰，形容非常寒冷。' },
                    { text: '雨水落在冰塊上', isCorrect: false, explanation: '字面上的誤解。' },
                    { text: '形容人很冷酷', isCorrect: false, explanation: '這是形容天氣，不是形容個性。' }
                ]
            },
            {
                id: 'q_l1_mc_new_3', lessonId: 'L1', type: 'mcq', category: '標點符號', difficulty: 3, batch: '新題庫擴充',
                question: '課文中「到小徑中去走走吧！在天晴了的時候：赤著腳，攜著手...」使用「冒號（：）」的主要功用是什麼？',
                options: [
                    { text: '表示說話的內容', isCorrect: false, explanation: '這裡沒有人講話。' },
                    { text: '總起下文，帶出後面一連串的行為列舉', isCorrect: true, explanation: '正確！冒號在這裡用來提示讀者，後面要列舉出「在天晴了的時候」可以做的各種動作。' },
                    { text: '表示聲音的延長', isCorrect: false, explanation: '那是破折號的功能。' },
                    { text: '補充說明前面的名詞', isCorrect: false, explanation: '那是夾注號的功能。' }
                ]
            },
            {
                id: 'q_l1_mc_new_4', lessonId: 'L1', type: 'mcq', category: '標點符號', difficulty: 4, batch: '新題庫擴充',
                question: '「看山間移動的暗綠 ——雲的腳跡—— 它也在閒遊。」句中的「—— ——」稱為什麼符號？有什麼功用？',
                options: [
                    { text: '破折號，表示語氣的轉折', isCorrect: false, explanation: '在這裡不是用來轉折。' },
                    { text: '夾注號，用來補充說明前面的「山間移動的暗綠」', isCorrect: true, explanation: '正確！夾在中間用來告訴讀者，暗綠就是雲的影子。' },
                    { text: '刪節號，表示話還沒說完', isCorrect: false, explanation: '刪節號是六個點。' },
                    { text: '私名號，標示特別的名稱', isCorrect: false, explanation: '私名號是一條直線。' }
                ]
            },
            {
                id: 'q_l1_mc_new_5', lessonId: 'L1', type: 'mcq', category: '修辭技巧', difficulty: 2, batch: '新題庫擴充',
                question: '「不再膽怯的小白菊，慢慢的抬起它們的頭」這句詩使用了哪一種修辭法？',
                options: [
                    { text: '擬人 (轉化)', isCorrect: true, explanation: '正確！把小白菊賦予了人類「膽怯」與「抬頭」的動作，讓它看起來更有生命力。' },
                    { text: '譬喻', isCorrect: false, explanation: '沒有使用「像」或「如」來比喻成其他東西。' },
                    { text: '誇飾', isCorrect: false, explanation: '沒有過度誇大。' },
                    { text: '類疊', isCorrect: false, explanation: '雖然有「慢慢的」，但主要考點是整句的擬人。' }
                ]
            },
            {
                id: 'q_l1_mc_new_6', lessonId: 'L1', type: 'mcq', category: '課文理解', difficulty: 3, batch: '新題庫擴充',
                question: '詩中提到「雲的腳跡」其實是指什麼自然現象？',
                options: [
                    { text: '天空中雲朵被風吹散的痕跡', isCorrect: false, explanation: '不是天空中的現象。' },
                    { text: '山間移動的暗綠，也就是雲的影子在山林間移動的樣子', isCorrect: true, explanation: '正確！雲遮住陽光在山上形成的陰影，被詩人浪漫地想像成雲的腳印。' },
                    { text: '地上的水窪倒映出雲的形狀', isCorrect: false, explanation: '雖然地上有水窪，但這不是雲的腳跡。' },
                    { text: '清晨山上的雲霧', isCorrect: false, explanation: '不是雲霧。' }
                ]
            },
            {
                id: 'q_l1_mc_new_7', lessonId: 'L1', type: 'mcq', category: '課文細節', difficulty: 2, batch: '新題庫擴充',
                question: '根據課本的插圖（圖片意象），以下哪一個事物**沒有**出現在課本的畫面中？',
                options: [
                    { text: '在水窪中玩耍的小狗', isCorrect: true, explanation: '正確！畫面中只有爺爺和小女孩，沒有畫小狗。' },
                    { text: '爺爺牽著小女孩', isCorrect: false, explanation: '這有出現在插圖中。' },
                    { text: '盛開的小白菊與飛舞的鳳蝶', isCorrect: false, explanation: '這有出現在插圖中。' },
                    { text: '閃爍著微藍色反光的水窪', isCorrect: false, explanation: '這有出現在插圖中。' }
                ]
            },
            {
                id: 'q_l1_mc_new_8', lessonId: 'L1', type: 'mcq', category: '字詞義測驗', difficulty: 2, batch: '新題庫擴充',
                question: '「一下子洗淨了塵垢」中，「塵垢」的意思為何？',
                options: [
                    { text: '心理的煩惱', isCorrect: false, explanation: '在這裡是具體的自然景物，不是抽象的心理狀態。' },
                    { text: '灰塵與汙垢', isCorrect: true, explanation: '正確！指雨水把草葉上的灰塵都洗乾淨了。' },
                    { text: '陳年的往事', isCorrect: false, explanation: '意思不對。' },
                    { text: '泥濘的道路', isCorrect: false, explanation: '塵垢指附著在物體上的髒污。' }
                ]
            },
            {
                id: 'q_l1_mc_new_9', lessonId: 'L1', type: 'mcq', category: '核心主旨', difficulty: 3, batch: '新題庫擴充',
                question: '《在天晴了的時候》這首詩主要想表達什麼情感？',
                options: [
                    { text: '感嘆時光飛逝，童年不再', isCorrect: false, explanation: '詩中充滿喜悅，沒有感嘆時光。' },
                    { text: '體會人與自然的關係，感受雨後大自然帶來的美好與生機', isCorrect: true, explanation: '正確！透過各種感官描寫，帶領讀者享受大自然雨過天晴的清新。' },
                    { text: '描述氣候變遷帶來的影響', isCorrect: false, explanation: '這是一首抒情詩，不是環境保育文章。' },
                    { text: '表達對鄉下生活的不適應', isCorrect: false, explanation: '詩人非常享受這種親近自然的時刻。' }
                ]
            },

            
            ,{
                id: 'q_l1_mc_new_10', lessonId: 'L1', type: 'mcq', category: '字詞義測驗', difficulty: 2, batch: '新題庫擴充',
                question: '「溪水在溫風中暈皺」句中的「暈皺」是什麼意思？',
                options: [
                    { text: '頭暈目眩', isCorrect: false, explanation: '不是形容人的身體狀況。' },
                    { text: '水面因為微風吹拂而產生波紋', isCorrect: true, explanation: '正確！形容風吹過水面引起的細小波浪。' },
                    { text: '衣服起了皺褶', isCorrect: false, explanation: '這是形容水面，不是衣服。' },
                    { text: '臉上長了皺紋', isCorrect: false, explanation: '與臉部無關。' }
                ]
            },
            {
                id: 'q_l1_mc_new_11', lessonId: 'L1', type: 'mcq', category: '字詞義測驗', difficulty: 3, batch: '新題庫擴充',
                question: '「新陽推開了陰霾」中，「陰霾」的意思為何？',
                options: [
                    { text: '指陰沉、昏暗的天氣或雲霧', isCorrect: true, explanation: '正確！陽光出來，驅散了原本陰暗的天氣。' },
                    { text: '被埋在土裡的東西', isCorrect: false, explanation: '字義錯誤。' },
                    { text: '下雪的天氣', isCorrect: false, explanation: '陰霾不一定是下雪。' },
                    { text: '傍晚的夕陽', isCorrect: false, explanation: '新陽是指初升或剛出現的太陽，陰霾是壞天氣。' }
                ]
            },
            {
                id: 'q_l1_mc_new_12', lessonId: 'L1', type: 'mcq', category: '課文細節', difficulty: 2, batch: '新題庫擴充',
                question: '在詩的第二段中，作者建議我們在天晴了的時候，可以做什麼事來親近大自然？',
                options: [
                    { text: '在樹下睡午覺', isCorrect: false, explanation: '詩中沒有提到睡覺。' },
                    { text: '赤著腳，攜著手，涉過溪流', isCorrect: true, explanation: '正確！這些動作充滿了親近大自然的快樂。' },
                    { text: '採集野花做成標本', isCorrect: false, explanation: '詩中沒有採花的動作。' },
                    { text: '抓幾隻蝴蝶回家養', isCorrect: false, explanation: '詩人只是欣賞蝴蝶閒遊，沒有去抓。' }
                ]
            },
            {
                id: 'q_l1_mc_new_13', lessonId: 'L1', type: 'mcq', category: '成語應用', difficulty: 2, batch: '新題庫擴充',
                question: '「陰雨綿綿」這個四字語詞適合用來形容什麼狀況？',
                options: [
                    { text: '連續不斷地下雨，天氣潮濕', isCorrect: true, explanation: '正確！形容雨下個不停的樣子。' },
                    { text: '雨滴結成冰塊', isCorrect: false, explanation: '這是「滴水成冰」。' },
                    { text: '天空非常晴朗', isCorrect: false, explanation: '這是「碧空如洗」或「晴空萬里」。' },
                    { text: '像火爐一樣熱', isCorrect: false, explanation: '這是「火傘高張」。' }
                ]
            },
            {
                id: 'q_l1_mc_new_14', lessonId: 'L1', type: 'mcq', category: '國學常識', difficulty: 3, batch: '新題庫擴充',
                question: '本課作者為「戴望舒」，《在天晴了的時候》是一首什麼體裁的文學作品？',
                options: [
                    { text: '絕句', isCorrect: false, explanation: '絕句只有四句，有嚴格字數限制。' },
                    { text: '現代詩 (新詩)', isCorrect: true, explanation: '正確！這是一首沒有嚴格格律限制的現代詩。' },
                    { text: '律詩', isCorrect: false, explanation: '律詩有八句，有嚴格對仗押韻。' },
                    { text: '文言文', isCorrect: false, explanation: '這是用白話文寫成的。' }
                ]
            },
            {
                id: 'q_l1_mc_new_15', lessonId: 'L1', type: 'mcq', category: '修辭技巧', difficulty: 2, batch: '新題庫擴充',
                question: '「新陽推開了陰霾」這句話使用了哪一種修辭？',
                options: [
                    { text: '譬喻', isCorrect: false, explanation: '沒有使用像或如。' },
                    { text: '擬人 (轉化)', isCorrect: true, explanation: '正確！賦予陽光人類「推開」的動作，讓畫面更有力量。' },
                    { text: '類疊', isCorrect: false, explanation: '沒有重複的字詞。' },
                    { text: '排比', isCorrect: false, explanation: '沒有相似句型排列。' }
                ]
            },
            {
                id: 'q_l1_mc_new_16', lessonId: 'L1', type: 'mcq', category: '寫作技巧', difficulty: 4, batch: '新題庫擴充',
                question: '為什麼作者要寫「試試寒，試試暖，然後一瓣瓣的綻透」？',
                options: [
                    { text: '強調天氣太冷，花朵快被凍死了', isCorrect: false, explanation: '天氣已經放晴了。' },
                    { text: '生動描寫出花朵在雨後小心翼翼、逐漸開放的美麗姿態', isCorrect: true, explanation: '正確！用「試試」兩個字，將小白菊開花的過程寫得生動又惹人憐愛。' },
                    { text: '形容作者在測試水溫', isCorrect: false, explanation: '這是描寫小白菊，不是作者。' },
                    { text: '表示花朵不知道該不該開花', isCorrect: false, explanation: '主要是在表現開花時細微的動態感。' }
                ]
            },
            {
                id: 'q_l1_mc_new_17', lessonId: 'L1', type: 'mcq', category: '語氣判斷', difficulty: 3, batch: '新題庫擴充',
                question: '「到小徑中去走走吧！」這句話帶有什麼樣的語氣？',
                options: [
                    { text: '命令與責備', isCorrect: false, explanation: '沒有強迫的意思。' },
                    { text: '期待與邀請的語氣', isCorrect: true, explanation: '正確！充滿了想與人分享大自然美好的熱情。' },
                    { text: '悲傷與無奈', isCorrect: false, explanation: '詩人心情很好。' },
                    { text: '驚訝與懷疑', isCorrect: false, explanation: '語意不符。' }
                ]
            },// ==================== 第二課 (L2) 題庫 ====================
            // L2 - 寫國字 (包含所有19個生字，分5題)
            {
                id: 'q_l2_hw_char_1', lessonId: 'L2', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '窗前[[國字:ㄗㄞ:栽]]種了異常[[國字:ㄇㄠˋ:茂]]盛的植栽，長長的串串[[國字:ㄊㄥˊ:藤]][[國字:ㄇㄢˋ:蔓]]遮蓋在鳥籠上。',
                correctAnswer: '栽、茂、藤、蔓', explanation: '【解說】這幾個字都跟植物有關。注意「栽」是木部，「藤」與「蔓」都是艸部。'
            },
            {
                id: 'q_l2_hw_char_2', lessonId: 'L2', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '我很少[[國字:ㄒㄧㄢ:掀]]開葉片，連[[國字:ㄊㄧㄢ:添]]食加水也不直視，以[[國字:ㄇㄧㄢˇ:免]]驚動牠們，我們便漸漸熟[[國字:ㄒㄧ:悉]]了。',
                correctAnswer: '掀、添、免、悉', explanation: '【解說】「掀」開(手部)、「添」加(水部)、「熟悉」的悉下面是心部。'
            },
            {
                id: 'q_l2_hw_char_3', lessonId: 'L2', type: 'handwriting', category: '寫國字', difficulty: 4,
                question: '小傢伙由籠子縫[[國字:ㄒㄧˋ:隙]]鑽出身，[[國字:ㄕㄤˋ:尚]]未生出白點，一會兒落在書[[國字:ㄍㄨㄟˋ:櫃]]頂上。',
                correctAnswer: '隙、尚、櫃', explanation: '【解說】「縫隙」的隙(阜部，左耳旁)筆畫多要小心。「櫃」是木部。'
            },
            {
                id: 'q_l2_hw_char_4', lessonId: 'L2', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '牠跳到[[國字:ㄍㄠˇ:稿]]紙上，啄著我[[國字:ㄓㄢˋ:顫]]動的筆尖。天色入[[國字:ㄇㄨˋ:暮]]，牠才飛回籠子。',
                correctAnswer: '稿、顫、暮', explanation: '【解說】「稿紙」的稿(禾部)、「顫動」的顫(頁部，筆畫非常多)、「日暮」的暮(日部)。'
            },
            {
                id: 'q_l2_hw_char_5', lessonId: 'L2', type: 'handwriting', category: '寫國字', difficulty: 4,
                question: '牠趴在我[[國字:ㄐㄧㄢ:肩]]上，紅腳被[[國字:ㄖㄨㄥˊ:絨]]毛蓋住，還[[國字:ㄗㄚ:咂]][[國字:ㄗㄚ:咂]]嘴。我筆尖一動流[[國字:ㄒㄧㄝˋ:瀉]]下感受：信[[國字:ㄌㄞˋ:賴]]能創造美好。',
                correctAnswer: '肩、絨、咂、瀉、賴', explanation: '【解說】「絨毛」(糸部)、「咂嘴」(口部)、「流瀉」(水部，像水一樣流下)、「信賴」(貝部)。'
            },

            // L2 - 寫注音 (挑選易錯字)
            {
                id: 'q_l2_hw_py_1', lessonId: 'L2', type: 'handwriting', category: '寫注音', difficulty: 3,
                question: '長長的串串藤[[注音:蔓:ㄇㄢˋ]]。',
                correctAnswer: 'ㄇㄢˋ', explanation: '【解說】藤「蔓」讀作「ㄇㄢˋ」，不要念成「ㄨㄢˋ」或「ㄇㄢˊ」喔！'
            },
            {
                id: 'q_l2_hw_py_2', lessonId: 'L2', type: 'handwriting', category: '寫注音', difficulty: 3,
                question: '由籠子縫[[注音:隙:ㄒㄧˋ]]鑽出身。',
                correctAnswer: 'ㄒㄧˋ', explanation: '【解說】縫「隙」讀作四聲「ㄒㄧˋ」，常常有人誤念成一聲，要特別注意。'
            },
            {
                id: 'q_l2_hw_py_3', lessonId: 'L2', type: 'handwriting', category: '寫注音', difficulty: 4,
                question: '啄著我[[注音:顫:ㄓㄢˋ]]動的筆尖。',
                correctAnswer: 'ㄓㄢˋ', explanation: '【解說】「顫」動讀作四聲「ㄓㄢˋ」，形容細微的抖動。'
            },
            {
                id: 'q_l2_hw_py_4', lessonId: 'L2', type: 'handwriting', category: '寫注音', difficulty: 3,
                question: '這小傢伙還[[注音:咂:ㄗㄚ]]咂嘴。',
                correctAnswer: 'ㄗㄚ', explanation: '【解說】「咂」嘴讀作一聲「ㄗㄚ」，形容嘴巴開合發出聲音的樣子。'
            },
            {
                id: 'q_l2_hw_py_5', lessonId: 'L2', type: 'handwriting', category: '寫注音', difficulty: 2,
                question: '流[[注音:瀉:ㄒㄧㄝˋ]]下一時的感受。',
                correctAnswer: 'ㄒㄧㄝˋ', explanation: '【解說】流「瀉」讀作四聲「ㄒㄧㄝˋ」。'
            },

            // L2 - 選擇題
            {
                id: 'q_l2_mc_1', lessonId: 'L2', type: 'mcq', category: '課外延伸', difficulty: 2,
                question: '根據課本知識補充，關於「珍珠鳥」的敘述，下列何者**錯誤**？',
                options: [
                    { text: '原產於澳洲東部和印尼東部', isCorrect: false, explanation: '這是正確的敘述。' },
                    { text: '學名為斑胸草雀', isCorrect: false, explanation: '這是正確的敘述。' },
                    { text: '因為眼睛長得像珍珠而得名', isCorrect: true, explanation: '錯誤！是因為「胸部下方兩側布有白色小圓點，狀如珍珠」而得名，不是因為眼睛。' },
                    { text: '現今已是常見的人工繁育鳥類', isCorrect: false, explanation: '這是正確的敘述。' }
                ]
            },
            {
                id: 'q_l2_mc_2', lessonId: 'L2', type: 'mcq', category: '改錯字', difficulty: 2,
                question: '下列哪一個句子中**沒有**錯別字？',
                options: [
                    { text: '小鳥躲進憂深的樹林裡。', isCorrect: false, explanation: '「憂」深應改為「幽」深。' },
                    { text: '這小傢伙竟趴在我的肩頭上睡著了。', isCorrect: true, explanation: '正確！沒有錯別字。' },
                    { text: '作者在槁紙上寫下感受。', isCorrect: false, explanation: '「槁」紙應改為「稿」紙(禾部)。' },
                    { text: '牠在書架上神氣十族。', isCorrect: false, explanation: '神氣十「族」應改為「足」。' }
                ]
            },
            {
                id: 'q_l2_mc_3', lessonId: 'L2', type: 'mcq', category: '字詞義測驗', difficulty: 2,
                question: '在「這小傢伙竟趴在我的肩頭上」一句中，「傢伙」在這裡的意思是什麼？',
                options: [
                    { text: '對人輕視或罵人的話', isCorrect: false, explanation: '在這裡作者是非常喜愛小鳥的，並無輕視之意。' },
                    { text: '對人或動物親密、開玩笑的稱呼', isCorrect: true, explanation: '正確！這是課本注釋的解釋，表示作者與小鳥關係非常親暱。' },
                    { text: '指武器或工具', isCorrect: false, explanation: '雖然「傢伙」有工具的意思，但在這句不通。' },
                    { text: '討厭的動物', isCorrect: false, explanation: '與文意完全相反。' }
                ]
            },
            {
                id: 'q_l2_mc_4', lessonId: 'L2', type: 'mcq', category: '寫作技巧', difficulty: 4,
                question: '課本「加油小站」提到「細膩的連續動作描寫」，這種寫作技巧的效果最接近下列哪一種比喻？',
                options: [
                    { text: '快轉播放', isCorrect: false, explanation: '快轉會忽略細節。' },
                    { text: '慢速播放', isCorrect: true, explanation: '正確！將連續動作切分為好幾個細微的畫面一一描寫(如：挨近→蹦上→俯下喝茶→偏臉看)，就像慢速播放，能讓內容更鮮活。' },
                    { text: '廣角鏡頭', isCorrect: false, explanation: '廣角鏡用於描寫大範圍風景。' },
                    { text: '倒敘法', isCorrect: false, explanation: '倒敘是時間順序的變化，與連續動作描寫無關。' }
                ]
            },
            {
                id: 'q_l2_mc_5', lessonId: 'L2', type: 'mcq', category: '空間與關係', difficulty: 4,
                question: '根據課本的「人與鳥的關係圖表」，小珍珠鳥的「活動空間變化」代表了什麼意義？',
                options: [
                    { text: '空間距離越近，代表牠越飢餓', isCorrect: false, explanation: '與飢餓無關。' },
                    { text: '鳥籠太小，想爭取自由空間', isCorrect: false, explanation: '文中提到作者打開窗，鳥也不飛走，可見不是為了爭取自由。' },
                    { text: '空間距離越靠近作者，代表彼此的關係越親近與信任', isCorrect: true, explanation: '正確！從鳥籠四周→書桌→稿紙→肩膀，空間上的拉近完美呼應了信任感的建立。' },
                    { text: '為了尋找築巢的材料', isCorrect: false, explanation: '文章沒有提到鳥兒在外面尋找築巢材料。' }
                ]
            },
            {
                id: 'q_l2_mc_6', lessonId: 'L2', type: 'mcq', category: '課文細節', difficulty: 1,
                question: '剛出生不久的小珍珠鳥，外表最大的特徵是什麼？',
                options: [
                    { text: '已經長出美麗的珍珠斑點', isCorrect: false, explanation: '課文說「尚未生出珍珠似的圓圓白點」。' },
                    { text: '羽毛是鮮豔的綠色', isCorrect: false, explanation: '珍珠鳥是灰藍色的毛。' },
                    { text: '尚未生出白點，整個身子像一顆鬆軟的球兒', isCorrect: true, explanation: '正確！這正是第七段中對幼鳥外型的生動描寫。' },
                    { text: '體型比成鳥還要大', isCorrect: false, explanation: '幼鳥體型小，所以能從籠子縫隙鑽出來。' }
                ]
            },
            {
                id: 'q_l2_mc_7', lessonId: 'L2', type: 'mcq', category: '深度推論', difficulty: 3,
                question: '作者說：「我沒有掀開葉片往裡看，連添食加水時，也不睜大好奇的眼睛直視」，這樣做的最主要目的是什麼？',
                options: [
                    { text: '因為藤蔓有毒，怕觸碰到', isCorrect: false, explanation: '無稽之談，文中未提。' },
                    { text: '作者對幼鳥一點都不感興趣', isCorrect: false, explanation: '作者其實充滿期待，所以才會有這些貼心的舉動。' },
                    { text: '怕光線太亮傷到鳥兒的眼睛', isCorrect: false, explanation: '跟光線無關。' },
                    { text: '給予鳥兒安全感，以免嚇到牠們', isCorrect: true, explanation: '正確！這顯示了作者對動物的尊重，也是建立「信賴」的第一步。' }
                ]
            },
            {
                id: 'q_l2_mc_8', lessonId: 'L2', type: 'mcq', category: '課文細節', difficulty: 2,
                question: '小珍珠鳥白天淘氣地陪伴作者，什麼時候才會飛回籠子裡？',
                options: [
                    { text: '肚子餓的時候', isCorrect: false, explanation: '文中並未特別強調因為肚子餓才回去。' },
                    { text: '天色入暮，在父母的再三呼喚中', isCorrect: true, explanation: '正確！第十一段清楚寫到「天色入暮，牠就在父母的再三呼喚中，飛向籠子」。' },
                    { text: '作者生氣趕牠的時候', isCorrect: false, explanation: '作者從未生氣趕牠，反而很享受牠的陪伴。' },
                    { text: '被窗外的聲音嚇到的時候', isCorrect: false, explanation: '小珍珠鳥後來膽子很大，甚至敢在肩膀睡著。' }
                ]
            },
            {
                id: 'q_l2_mc_9', lessonId: 'L2', type: 'mcq', category: '課文主旨', difficulty: 4,
                question: '《珍珠鳥》一文最後，作者流瀉下的一時感受，同時也是整篇課文的「主旨」是什麼？',
                options: [
                    { text: '養鳥需要極大的耐心與金錢', isCorrect: false, explanation: '文中沒有強調金錢。' },
                    { text: '信賴，往往能創造出美好的境界', isCorrect: true, explanation: '正確！這是全課的核心價值，點出人與自然、甚至人與人之間最珍貴的連結。' },
                    { text: '大自然是動物最好的家，不該把牠們關在籠子', isCorrect: false, explanation: '雖然這是很好的動保觀念，但並非本文作者要表達的主旨。' },
                    { text: '萬物靜觀皆自得', isCorrect: false, explanation: '這是另一個意境，本文強調的是「信賴」。' }
                ]
            },
            {
                id: 'q_l2_mc_10', lessonId: 'L2', type: 'mcq', category: '修辭技巧', difficulty: 2,
                question: '「整個身子好像一顆鬆軟的球兒」使用了什麼修辭法？',
                options: [
                    { text: '轉化 (擬人)', isCorrect: false, explanation: '沒有將物當作人來描寫。' },
                    { text: '譬喻', isCorrect: true, explanation: '正確！使用了「好像」這個喻詞，將鳥的身子比喻為鬆軟的球。' },
                    { text: '誇飾', isCorrect: false, explanation: '並未過度誇大。' },
                    { text: '頂真', isCorrect: false, explanation: '沒有使用上一句結尾作為下一句開頭的技巧。' }
                ]
            },
            {
                id: 'q_l2_mc_11', lessonId: 'L2', type: 'mcq', category: '詞語應用', difficulty: 3,
                question: '哪一個成語最適合形容作者寫作時，即使小鳥在旁邊跳躍、啄筆尖，他也保持平靜不驚擾小鳥的狀態？',
                options: [
                    { text: '不動聲色', isCorrect: true, explanation: '正確！指不說話，不流露感情，形容態度極為鎮靜。' },
                    { text: '手忙腳亂', isCorrect: false, explanation: '形容做事慌張。' },
                    { text: '暴跳如雷', isCorrect: false, explanation: '形容非常生氣。' },
                    { text: '恍然大悟', isCorrect: false, explanation: '形容突然明白過來。' }
                ]
            },

            
            {
                id: 'q_l2_mc_new_1', lessonId: 'L2', type: 'mcq', category: '課文細節', difficulty: 2, batch: '新題庫擴充',
                question: '作者最初把珍珠鳥養在哪裡？',
                options: [
                    { text: '掛在窗前，用茂盛的藤蔓植物遮蓋的竹籠裡', isCorrect: true, explanation: '正確！為了給小鳥安全感，作者特地用茂盛的綠葉藤蔓將鳥籠遮蓋起來。' },
                    { text: '放在書桌上的玻璃箱裡', isCorrect: false, explanation: '是用竹條編成的籠子。' },
                    { text: '養在院子裡的樹上', isCorrect: false, explanation: '是養在室內的窗前。' },
                    { text: '讓牠們在屋子裡自由飛翔，沒有關起來', isCorrect: false, explanation: '一開始是關在籠子裡的，後來才飛出來。' }
                ]
            },
            {
                id: 'q_l2_mc_new_2', lessonId: 'L2', type: 'mcq', category: '寫作技巧', difficulty: 4, batch: '新題庫擴充',
                question: '作者在描寫小珍珠鳥喝茶的過程時，使用了「挨近、蹦、俯下頭、偏過臉」等動詞。課本將這種寫作技巧稱為什麼？',
                options: [
                    { text: '誇飾法描寫', isCorrect: false, explanation: '這都是寫實的動作。' },
                    { text: '細膩的連續動作描寫（慢速播放）', isCorrect: true, explanation: '正確！將一連串的動作切分成好幾個畫面一一描寫，讓內容更鮮活生動。' },
                    { text: '心理狀態描寫', isCorrect: false, explanation: '這是外在的動作，不是內心。' },
                    { text: '靜態景物描寫', isCorrect: false, explanation: '這是動態的過程。' }
                ]
            },
            {
                id: 'q_l2_mc_new_3', lessonId: 'L2', type: 'mcq', category: '圖表分析', difficulty: 4, batch: '新題庫擴充',
                question: '根據課本的「人與鳥的關係圖表」，橫軸與縱軸分別代表什麼意思？',
                options: [
                    { text: '橫軸是鳥的體型，縱軸是食量', isCorrect: false, explanation: '與體型食量無關。' },
                    { text: '橫軸是時間，縱軸是關係由生疏到親近', isCorrect: true, explanation: '正確！隨著時間推移（橫軸往右），鳥與人的空間越來越近，關係也越來越親近（縱軸往上）。' },
                    { text: '橫軸是空間距離，縱軸是時間長短', isCorrect: false, explanation: '橫軸是時間。' },
                    { text: '橫軸是溫度，縱軸是心情好壞', isCorrect: false, explanation: '與溫度無關。' }
                ]
            },
            {
                id: 'q_l2_mc_new_4', lessonId: 'L2', type: 'mcq', category: '課文推論', difficulty: 3, batch: '新題庫擴充',
                question: '小珍珠鳥起先在籠子四周活動，後來會神氣十足地站在書架上，甚至到作者的稿紙上跳動。這空間的改變代表了什麼？',
                options: [
                    { text: '因為籠子太小，小鳥需要運動減肥', isCorrect: false, explanation: '這不是空間改變的主因。' },
                    { text: '小鳥對環境越來越放心，也對作者越來越信任', isCorrect: true, explanation: '正確！空間距離的縮短，象徵著心理防備的卸下與信賴的建立。' },
                    { text: '小鳥想要尋找更多的食物', isCorrect: false, explanation: '文中提到作者會定時添食加水。' },
                    { text: '小鳥想幫忙作者寫作', isCorrect: false, explanation: '小鳥並不會寫作。' }
                ]
            },
            {
                id: 'q_l2_mc_new_5', lessonId: 'L2', type: 'mcq', category: '課文細節', difficulty: 2, batch: '新題庫擴充',
                question: '當小珍珠鳥趴在作者肩上睡著時，作者有什麼反應？',
                options: [
                    { text: '馬上把牠抓回籠子裡，怕牠著涼', isCorrect: false, explanation: '作者沒有打擾牠。' },
                    { text: '大聲呼喚家人來看這溫馨的一幕', isCorrect: false, explanation: '作者保持安靜。' },
                    { text: '手中的筆不覺停了，生怕嚇跑牠，甚至輕輕抬肩也不敢太大動作', isCorrect: true, explanation: '正確！作者極度呵護這份難得的信任。' },
                    { text: '生氣地把牠趕走，覺得牠妨礙了寫作', isCorrect: false, explanation: '作者反而流瀉下了美好的感受。' }
                ]
            },
            {
                id: 'q_l2_mc_new_6', lessonId: 'L2', type: 'mcq', category: '課文理解', difficulty: 3, batch: '新題庫擴充',
                question: '為什麼小鳥在被藤蔓遮蓋的籠子裡，叫聲會變得「格外的輕盈自在」？',
                options: [
                    { text: '因為茂密的藤蔓提供了隱蔽，讓牠們覺得像躲在幽深樹林一樣安全', isCorrect: true, explanation: '正確！安全感讓原本「怕人」的珍珠鳥得以放鬆。' },
                    { text: '因為藤蔓會發出好聽的音樂', isCorrect: false, explanation: '植物不會發出音樂。' },
                    { text: '因為籠子裡放了特別好吃的飼料', isCorrect: false, explanation: '是環境帶來的安全感，不是食物。' },
                    { text: '因為牠們嘲笑作者看不到裡面', isCorrect: false, explanation: '這是不合理的推論。' }
                ]
            },
            {
                id: 'q_l2_mc_new_7', lessonId: 'L2', type: 'mcq', category: '課文細節', difficulty: 2, batch: '新題庫擴充',
                question: '小珍珠鳥在作者的肩膀上睡著時，出現了什麼可愛的動作？',
                options: [
                    { text: '不斷地打呼，聲音很大', isCorrect: false, explanation: '沒有打呼。' },
                    { text: '會咂咂嘴，好像在做夢一樣', isCorrect: true, explanation: '正確！這是一個非常細微且生動的觀察。' },
                    { text: '夢遊飛到天花板上', isCorrect: false, explanation: '牠安穩地睡在肩膀上。' },
                    { text: '用翅膀緊緊抱住作者的脖子', isCorrect: false, explanation: '鳥類無法做出這動作。' }
                ]
            },
            {
                id: 'q_l2_mc_new_8', lessonId: 'L2', type: 'mcq', category: '字詞義測驗', difficulty: 2, batch: '新題庫擴充',
                question: '作者用手輕輕摸小鳥「柔細」的短毛。「柔細」的意思是？',
                options: [
                    { text: '顏色非常鮮豔', isCorrect: false, explanation: '與顏色無關。' },
                    { text: '柔軟而細密', isCorrect: true, explanation: '正確！形容小鳥的羽毛摸起來很柔軟細緻。' },
                    { text: '粗糙且刺手', isCorrect: false, explanation: '完全相反的意思。' },
                    { text: '稀疏掉毛的樣子', isCorrect: false, explanation: '沒有掉毛的意思。' }
                ]
            },
            ,{
                id: 'q_l2_mc_new_9', lessonId: 'L2', type: 'mcq', category: '課文細節', difficulty: 2, batch: '新題庫擴充',
                question: '小傢伙（珍珠鳥）在屋裡飛來飛去，牠「絕不會」飛到哪裡去？',
                options: [
                    { text: '櫃子頂上', isCorrect: false, explanation: '課文提到牠一會兒落在櫃頂上。' },
                    { text: '窗外的樹上', isCorrect: true, explanation: '正確！作者說「即使打開窗子，牠最多只在窗框上站一會兒，絕不飛出去」。' },
                    { text: '作者的書桌', isCorrect: false, explanation: '課文提到牠會飛到書桌上喝茶。' },
                    { text: '書架上', isCorrect: false, explanation: '課文提到牠神氣十足站在書架上。' }
                ]
            },// ==================== 第三課 (L3) 題庫 ====================
            // L3 - 寫國字 (共19個生字，分5題)
            {
                id: 'q_l3_hw_char_1', lessonId: 'L3', type: 'handwriting', category: '寫國字', difficulty: 2,
                question: '這間房[[國字:ㄕㄜˋ:舍]][[國字:ㄐㄧㄝ:皆]]用木頭打造，因[[國字:ㄩㄢˊ:緣]]際會下，我們推開了這扇[[國字:ㄆㄥˊ:蓬]]草編的門。',
                correctAnswer: '舍、皆、緣、蓬', explanation: '【解說】「舍」指房屋；「皆」是都的意思；「緣」是糸部；「蓬門」指用蓬草編成的簡陋門戶(艸部)。'
            },
            {
                id: 'q_l3_hw_char_2', lessonId: 'L3', type: 'handwriting', category: '寫國字', difficulty: 4,
                question: '盤中的飯菜食物稱為盤[[國字:ㄙㄨㄣ:飧]]，因為無法[[國字:ㄐㄧㄢ:兼]]顧多種美味，只能端出[[國字:ㄗㄨㄣ:樽]][[國字:ㄐㄧㄡˇ:酒]]招待客人。',
                correctAnswer: '飧、兼、樽、酒', explanation: '【解說】「飧」指盤中食物(食部)，筆畫較難；「樽」是酒器(木部)。'
            },
            {
                id: 'q_l3_hw_char_3', lessonId: 'L3', type: 'handwriting', category: '寫國字', difficulty: 4,
                question: '我拿出存放已[[國字:ㄐㄧㄡˋ:舊]]、尚未過濾的舊[[國字:ㄆㄟ:醅]]，在竹[[國字:ㄌㄧˊ:籬]]笆旁的[[國字:ㄐㄧㄢˇ:簡]]陋桌椅上與你對飲。',
                correctAnswer: '舊、醅、籬、簡', explanation: '【解說】「醅」指沒過濾的酒(酉部)；「籬」和「簡」都是竹部。'
            },
            {
                id: 'q_l3_hw_char_4', lessonId: 'L3', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '這間簡[[國字:ㄌㄡˋ:陋]]的房屋離小[[國字:ㄓㄣˋ:鎮]]很遠，我們用布過[[國字:ㄌㄩˋ:濾]]著[[國字:ㄔㄢˊ:潺]]潺的溪水來泡茶。',
                correctAnswer: '陋、鎮、濾、潺', explanation: '【解說】「陋」是阜部(左耳旁)；「濾」和「潺」都是水部，潺潺用來形容水流聲。'
            },
            {
                id: 'q_l3_hw_char_5', lessonId: 'L3', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '隔著竹籬[[國字:ㄅㄚ:笆]]，原本孤[[國字:ㄐㄧˊ:寂]]的氣氛一掃而空，老翁向我們[[國字:ㄔㄣˊ:陳]]述著當年的故事。',
                correctAnswer: '笆、寂、陳', explanation: '【解說】「笆」是竹部；「寂」是宀部；「陳」是阜部(左耳旁)。'
            },

            // L3 - 寫注音 (挑選極易讀錯的字)
            {
                id: 'q_l3_hw_py_1', lessonId: 'L3', type: 'handwriting', category: '寫注音', difficulty: 4,
                question: '房舍南面北面都被[[注音:潺:ㄔㄢˊ]]潺溪水環繞。',
                correctAnswer: 'ㄔㄢˊ', explanation: '【解說】「潺」讀作「ㄔㄢˊ」，形容溪水流動的聲音，不要念成「ㄘㄢˊ」喔！'
            },
            {
                id: 'q_l3_hw_py_2', lessonId: 'L3', type: 'handwriting', category: '寫注音', difficulty: 4,
                question: '盤[[注音:飧:ㄙㄨㄣ]]市遠無兼味。',
                correctAnswer: 'ㄙㄨㄣ', explanation: '【解說】「飧」讀作「ㄙㄨㄣ」，指盤中的食物，是很容易讀錯的字！'
            },
            {
                id: 'q_l3_hw_py_3', lessonId: 'L3', type: 'handwriting', category: '寫注音', difficulty: 5,
                question: '樽酒家貧只舊[[注音:醅:ㄆㄟ]]。',
                correctAnswer: 'ㄆㄟ', explanation: '【解說】「醅」讀作「ㄆㄟ」，指沒有過濾的酒，不要有邊讀邊念成「陪」！'
            },
            {
                id: 'q_l3_hw_py_4', lessonId: 'L3', type: 'handwriting', category: '寫注音', difficulty: 3,
                question: '[[注音:舍:ㄕㄜˋ]]南舍北皆春水。',
                correctAnswer: 'ㄕㄜˋ', explanation: '【解說】「舍」在這裡指房屋(如宿舍)，讀作第四聲「ㄕㄜˋ」，不要念成捨棄的「ㄕㄜˇ」。'
            },

            // L3 - 選擇題 (共20題)
            {
                id: 'q_l3_mc_1', lessonId: 'L3', type: 'mcq', category: '詩句字義', difficulty: 2,
                question: '「但見群鷗日日來」中的「但」是什麼意思？',
                options: [
                    { text: '但是、可是', isCorrect: false, explanation: '在這裡不是作為轉折語氣。' },
                    { text: '僅、只', isCorrect: true, explanation: '正確！「但見」意思是「只看見」，表達出平時沒有客人，只有鳥兒來的孤寂感。' },
                    { text: '不但、而且', isCorrect: false, explanation: '意思不符。' },
                    { text: '早晨', isCorrect: false, explanation: '早晨的字是「旦」。' }
                ]
            },
            {
                id: 'q_l3_mc_2', lessonId: 'L3', type: 'mcq', category: '詩句字義', difficulty: 3,
                question: '「花徑不曾緣客掃」中的「緣」字，解釋為下列何者最恰當？',
                options: [
                    { text: '邊緣', isCorrect: false, explanation: '不是指道路的邊緣。' },
                    { text: '緣分', isCorrect: false, explanation: '這裡的「緣」不是指人與人之間的緣分。' },
                    { text: '因為、由於', isCorrect: true, explanation: '正確！整句意思是「花草小路還不曾『因為』有客人的到來而打掃」。' },
                    { text: '攀爬', isCorrect: false, explanation: '如「緣木求魚」，但在這裡意思不通。' }
                ]
            },
            {
                id: 'q_l3_mc_3', lessonId: 'L3', type: 'mcq', category: '詩句理解', difficulty: 2,
                question: '「蓬門今始為君開」詩中的「蓬門」暗示了詩人當時的居住環境如何？',
                options: [
                    { text: '豪華氣派', isCorrect: false, explanation: '這與「蓬」的意思相反。' },
                    { text: '簡陋貧窮', isCorrect: true, explanation: '正確！「蓬門」指用蓬草編成的門戶，形容房屋簡陋。' },
                    { text: '充滿神仙氣息', isCorrect: false, explanation: '雖然有「蓬萊仙島」一詞，但這裡純粹指草編的門。' },
                    { text: '防備森嚴', isCorrect: false, explanation: '草編的門無法防備森嚴。' }
                ]
            },
            {
                id: 'q_l3_mc_4', lessonId: 'L3', type: 'mcq', category: '詞語解析', difficulty: 4,
                question: '「盤飧市遠無兼味」中，「無兼味」指的是什麼情況？',
                options: [
                    { text: '食物沒有味道', isCorrect: false, explanation: '不是指沒有味道，是指種類。' },
                    { text: '菜色簡單，沒有多種菜餚', isCorrect: true, explanation: '正確！「兼」有多種的意思，「兼味」指多種菜色，無兼味就是菜色簡單。' },
                    { text: '忘記加調味料', isCorrect: false, explanation: '這跟市遠(離市場遠)沒有關係。' },
                    { text: '食物已經壞掉變味', isCorrect: false, explanation: '完全誤解字義。' }
                ]
            },
            {
                id: 'q_l3_mc_5', lessonId: 'L3', type: 'mcq', category: '詞語解析', difficulty: 3,
                question: '杜甫用「舊醅」來招待客人，請問「舊醅」是指什麼？',
                options: [
                    { text: '過期的劣質茶葉', isCorrect: false, explanation: '「醅」是指酒，不是茶。' },
                    { text: '放了很久的隔夜飯', isCorrect: false, explanation: '不是飯菜。' },
                    { text: '存放一段時間，沒有過濾的酒', isCorrect: true, explanation: '正確！因為「家貧」未釀新酒，只好拿出沒有過濾的舊酒。' },
                    { text: '破舊的酒杯', isCorrect: false, explanation: '酒器是前一句的「樽」。' }
                ]
            },
            {
                id: 'q_l3_mc_6', lessonId: 'L3', type: 'mcq', category: '文體知識', difficulty: 2,
                question: '杜甫的《客至》在中國古典詩歌中屬於哪一種體裁？',
                options: [
                    { text: '五言絕句', isCorrect: false, explanation: '絕句只有四句，且這首每句是七個字。' },
                    { text: '七言絕句', isCorrect: false, explanation: '這首詩共有八句，不是絕句。' },
                    { text: '五言律詩', isCorrect: false, explanation: '這首詩每句是七個字。' },
                    { text: '七言律詩', isCorrect: true, explanation: '正確！全詩共八句，每句七字，格式嚴謹，屬於七言律詩。' }
                ]
            },
            {
                id: 'q_l3_mc_7', lessonId: 'L3', type: 'mcq', category: '國學常識', difficulty: 3,
                question: '關於「律詩」的押韻規則，下列哪一個說明是**正確**的？',
                options: [
                    { text: '每一句都必須押韻', isCorrect: false, explanation: '奇數句通常不押韻。' },
                    { text: '只有奇數句(第1,3,5,7句)要押韻', isCorrect: false, explanation: '剛好說反了。' },
                    { text: '偶數句(第2,4,6,8句)必須押韻，第一句可押可不押', isCorrect: true, explanation: '正確！這是律詩非常嚴格的押韻規定。' },
                    { text: '只要最後兩句押韻即可', isCorrect: false, explanation: '律詩的規定比這個嚴格得多。' }
                ]
            },
            {
                id: 'q_l3_mc_8', lessonId: 'L3', type: 'mcq', category: '國學常識', difficulty: 4,
                question: '律詩規定必須「對仗」如同雙胞胎一樣，字數、詞性都要對齊。請問一首律詩中，規定哪幾句**必須**對仗？',
                options: [
                    { text: '第一、二句 和 第三、四句', isCorrect: false, explanation: '首聯(1,2)通常不要求對仗。' },
                    { text: '第三、四句 和 第五、六句', isCorrect: true, explanation: '正確！律詩的頷聯(3,4句)與頸聯(5,6句)必須嚴格對仗。' },
                    { text: '第五、六句 和 第七、八句', isCorrect: false, explanation: '尾聯(7,8)通常不要求對仗。' },
                    { text: '只要有其中兩句對仗就可以', isCorrect: false, explanation: '規定必須是中間這兩聯都要對仗。' }
                ]
            },
            {
                id: 'q_l3_mc_9', lessonId: 'L3', type: 'mcq', category: '對仗分析', difficulty: 4,
                question: '在《客至》中，「盤飧市遠無兼味」對仗「樽酒家貧只舊醅」。其中「盤飧」對「樽酒」的詞性是什麼？',
                options: [
                    { text: '動詞 對 動詞', isCorrect: false, explanation: '盤中的食物跟酒器中的酒都是物品。' },
                    { text: '形容詞 對 形容詞', isCorrect: false, explanation: '不是用來形容狀態的詞。' },
                    { text: '名詞 對 名詞', isCorrect: true, explanation: '正確！盤(名詞)飧(名詞) 對應 樽(名詞)酒(名詞)，對仗非常工整。' },
                    { text: '副詞 對 副詞', isCorrect: false, explanation: '副詞用來修飾動詞或形容詞，這裡不適用。' }
                ]
            },
            {
                id: 'q_l3_mc_10', lessonId: 'L3', type: 'mcq', category: '語音流變', difficulty: 4,
                question: '《客至》的韻腳字是「來(ㄌㄞˊ)、開(ㄎㄞ)、醅(ㄆㄟ)、杯(ㄅㄟ)」，現在讀起來好像沒有完全押韻，原因是什麼？',
                options: [
                    { text: '因為杜甫當時寫錯字了', isCorrect: false, explanation: '杜甫是唐代大詩人，以格律嚴謹著稱，不可能寫錯。' },
                    { text: '因為時代久遠，造成語音發生了改變', isCorrect: true, explanation: '正確！在唐代這幾個字讀起來是有押韻的，是現代語音改變了。' },
                    { text: '因為作者故意打破律詩規則', isCorrect: false, explanation: '杜甫非常遵守律詩規則。' },
                    { text: '因為這是絕句，本來就不用押韻', isCorrect: false, explanation: '這是律詩，且絕句也要押韻。' }
                ]
            },
            {
                id: 'q_l3_mc_11', lessonId: 'L3', type: 'mcq', category: '寫作手法', difficulty: 3,
                question: '詩的前兩句寫環境清幽但只有鷗鳥相伴，到了第三句客人到訪時，特別為客掃花徑。這種寫作手法達到了什麼效果？',
                options: [
                    { text: '使用「對比」營造出因為客人到來，一掃原本孤寂之感的驚喜', isCorrect: true, explanation: '正確！從「無客」的冷清，對比出「迎客」時的滿心歡喜。' },
                    { text: '使用「誇飾」凸顯房子非常髒亂', isCorrect: false, explanation: '花徑指的是長滿花草的小路，不是髒亂。' },
                    { text: '使用「擬人」讓鳥兒代替主人歡迎客人', isCorrect: false, explanation: '鳥兒只是日日飛來，沒有擬人的迎客動作。' },
                    { text: '表達詩人討厭被打擾的心情', isCorrect: false, explanation: '詩人非常期待且開心客人的到來。' }
                ]
            },
            {
                id: 'q_l3_mc_12', lessonId: 'L3', type: 'mcq', category: '詩句理解', difficulty: 3,
                question: '「花徑不曾緣客掃，蓬門今始為君開」是千古名句，這兩句話最主要表達出杜甫的什麼心意？',
                options: [
                    { text: '暗示客人太晚來，害他打掃很久', isCorrect: false, explanation: '完全錯誤。' },
                    { text: '凸顯這位客人在詩人心中的地位無與倫比，非常特別', isCorrect: true, explanation: '正確！「不曾」為別人掃，今天「才(始)」特地為你開門，凸顯客人的尊貴與友誼深厚。' },
                    { text: '抱怨自己居住的環境很差', isCorrect: false, explanation: '雖然環境簡陋，但這句重點在於迎接貴客的心意。' },
                    { text: '提醒客人進門前要把鞋子清乾淨', isCorrect: false, explanation: '與打掃的本意無關。' }
                ]
            },
            {
                id: 'q_l3_mc_13', lessonId: 'L3', type: 'mcq', category: '情意理解', difficulty: 4,
                question: '雖然「盤飧市遠無兼味，樽酒家貧只舊醅」，飯菜簡單且只有未過濾的酒，這展現了杜甫待客的什麼態度？',
                options: [
                    { text: '極度吝嗇，不想花錢請客', isCorrect: false, explanation: '是因為「市遠」跟「家貧」，並非吝嗇。' },
                    { text: '雖然物質貧乏，但仍盡其所能、真誠熱情地款待', isCorrect: true, explanation: '正確！好朋友相聚不在乎吃多好，而在於主人的誠意。' },
                    { text: '暗示客人下次自己帶食物來', isCorrect: false, explanation: '沒有這個意思。' },
                    { text: '覺得對客人很抱歉，希望客人早點離開', isCorrect: false, explanation: '後面還請鄰翁來一起喝，可見希望客人留下來盡興。' }
                ]
            },
            {
                id: 'q_l3_mc_14', lessonId: 'L3', type: 'mcq', category: '詩句理解', difficulty: 3,
                question: '「肯與鄰翁相對飲，隔籬呼取盡餘杯。」杜甫為什麼最後要隔著籬笆呼喊鄰居老翁過來？',
                options: [
                    { text: '因為酒菜太多吃不完', isCorrect: false, explanation: '前面才說「無兼味」，菜色不多。' },
                    { text: '想請鄰翁幫忙打掃花徑', isCorrect: false, explanation: '花徑已經為了客人打掃完了。' },
                    { text: '想為這場聚會添加熱鬧氣氛，希望客人更盡興', isCorrect: true, explanation: '正確！邀請鄰居共飲，從「待客」延伸到「陪客」，讓氣氛更熱絡。' },
                    { text: '因為鄰翁欠他錢', isCorrect: false, explanation: '無稽之談。' }
                ]
            },
            {
                id: 'q_l3_mc_15', lessonId: 'L3', type: 'mcq', category: '情節鋪陳', difficulty: 4,
                question: '《客至》整首詩的情節鋪陳是有層次的，請問順序為何？',
                options: [
                    { text: '無客 ➡️ 迎客 ➡️ 待客 ➡️ 陪客', isCorrect: true, explanation: '正確！群鷗日來(無客) -> 掃徑開門(迎客) -> 簡單酒菜(待客) -> 呼喚鄰翁(陪客)。' },
                    { text: '待客 ➡️ 無客 ➡️ 陪客 ➡️ 迎客', isCorrect: false, explanation: '順序錯誤。' },
                    { text: '迎客 ➡️ 待客 ➡️ 陪客 ➡️ 送客', isCorrect: false, explanation: '詩中最後停留在喝酒盡興，沒有寫到送客。' },
                    { text: '無客 ➡️ 迎客 ➡️ 吵架 ➡️ 送客', isCorrect: false, explanation: '這是一首充滿美好情誼的詩。' }
                ]
            },
            {
                id: 'q_l3_mc_16', lessonId: 'L3', type: 'mcq', category: '閱讀策略', difficulty: 2,
                question: '課本「加油小站」教導猜測生難字詞的步驟，請問第一步是什麼？',
                options: [
                    { text: '立刻查字典', isCorrect: false, explanation: '查字典是方法之一，但第一步要先界定範圍。' },
                    { text: '圈出難詞', isCorrect: true, explanation: '正確！先「圈出難詞」，再去猜測，最後放回原句檢視。' },
                    { text: '大聲朗讀三遍', isCorrect: false, explanation: '這不是猜字義的步驟。' },
                    { text: '問同學', isCorrect: false, explanation: '這不是課本教導的自主學習步驟。' }
                ]
            },
            {
                id: 'q_l3_mc_17', lessonId: 'L3', type: 'mcq', category: '閱讀策略', difficulty: 4,
                question: '在猜測字義的步驟中，當我們根據部首猜測「蓬」可能跟草有關，「蓬門」是草編的門。接下來最重要的「步驟三」是什麼？',
                options: [
                    { text: '把它抄寫在筆記本上十遍', isCorrect: false, explanation: '這是記憶的方法，不是理解的步驟。' },
                    { text: '放回原句中檢視意思合不合理', isCorrect: true, explanation: '正確！套回「這扇草編的小門今天為你打開」，覺得合理，代表猜對了！' },
                    { text: '上網搜尋其他人的翻譯', isCorrect: false, explanation: '這是最後的確認，不是課文教的步驟。' },
                    { text: '直接跳過看下一句', isCorrect: false, explanation: '這樣就失去學習的意義了。' }
                ]
            },
            {
                id: 'q_l3_mc_18', lessonId: 'L3', type: 'mcq', category: '課文背景', difficulty: 1,
                question: '《客至》的作者是誰？',
                options: [
                    { text: '李白', isCorrect: false, explanation: '李白是詩仙。' },
                    { text: '杜甫', isCorrect: true, explanation: '正確！本詩作者為唐朝詩聖杜甫。' },
                    { text: '白居易', isCorrect: false, explanation: '作者是杜甫。' },
                    { text: '王維', isCorrect: false, explanation: '王維是詩佛。' }
                ]
            },
            {
                id: 'q_l3_mc_19', lessonId: 'L3', type: 'mcq', category: '詞語解析', difficulty: 2,
                question: '「隔籬呼取盡餘杯」中的「呼取」是什麼意思？',
                options: [
                    { text: '大口呼吸', isCorrect: false, explanation: '不是呼吸的意思。' },
                    { text: '叫，招呼', isCorrect: true, explanation: '正確！招呼隔壁的老翁過來一起喝酒。' },
                    { text: '搶奪', isCorrect: false, explanation: '沒有搶奪的意思。' },
                    { text: '唱歌', isCorrect: false, explanation: '不是唱歌。' }
                ]
            },
            {
                id: 'q_l3_mc_20', lessonId: 'L3', type: 'mcq', category: '核心主旨', difficulty: 3,
                question: '學習這首詩，最主要能體會到什麼樣的情感？',
                options: [
                    { text: '戰爭帶來的流離失所與痛苦', isCorrect: false, explanation: '杜甫雖然很多這種詩，但《客至》不是。' },
                    { text: '大自然的偉大與人類的渺小', isCorrect: false, explanation: '這不是自然哲學詩。' },
                    { text: '人與人之間真摯的美好情誼', isCorrect: true, explanation: '正確！透過詩人滿心歡喜的迎客、待客，展現了最純粹珍貴的友誼。' },
                    { text: '懷才不遇的憤怒與悲傷', isCorrect: false, explanation: '這首詩充滿喜悅，沒有憤怒。' }
                ]
            },

            // ==================== 第四課 (L4) 題庫 ====================
            // L4 - 寫國字 (共19個生字)
            {
                id: 'q_l4_hw_char_1', lessonId: 'L4', type: 'handwriting', category: '寫國字', difficulty: 2,
                question: '十二月的寒風吹進運動[[國字:ㄕㄢ:衫]]，但我絲毫不覺得冷，因為我的[[國字:ㄐㄧ:肌]]膚發燙、熱血[[國字:ㄈㄟˋ:沸]][[國字:ㄊㄥˊ:騰]]。',
                correctAnswer: '衫、肌、沸、騰', explanation: '【解說】「衫」是衣部；「肌」是肉部(月)；「沸」是水部；「騰」是馬部，筆畫較多要注意。'
            },
            {
                id: 'q_l4_hw_char_2', lessonId: 'L4', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '他一路領先，[[國字:ㄨˋ:兀]]自把我拋在後頭，我[[國字:ㄨㄟˊ:唯]]一能做的就是盯著他的後腦[[國字:ㄕㄠˊ:勺]]。',
                correctAnswer: '兀、唯、勺', explanation: '【解說】「兀自」指逕自、獨自；「唯」是口部；「勺」是勹部，指後腦勺。'
            },
            {
                id: 'q_l4_hw_char_3', lessonId: 'L4', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '他誤以為氣球拱門是[[國字:ㄅㄢ:頒]]獎的位[[國字:ㄓˋ:置]]，觀眾在旁邊大聲[[國字:ㄋㄚˋ:吶]]喊。',
                correctAnswer: '頒、置、吶', explanation: '【解說】「頒獎」的頒是頁部；「位置」的置是网部；「吶喊」的吶是口部，不要寫成內。'
            },
            {
                id: 'q_l4_hw_char_4', lessonId: 'L4', type: 'handwriting', category: '寫國字', difficulty: 2,
                question: '他[[國字:ㄨㄛˋ:握]]拳以為自己已經[[國字:ㄉㄧˇ:抵]]達終點，[[國字:ㄍㄠˇ:搞]]錯的人是他，不是我。',
                correctAnswer: '握、抵、搞', explanation: '【解說】這三個字都是手部。「抵達」的抵下面有一點；「搞錯」的搞右邊是高。'
            },
            {
                id: 'q_l4_hw_char_5', lessonId: 'L4', type: 'handwriting', category: '寫國字', difficulty: 4,
                question: '[[國字:ㄧㄡˇ:黝]]黑的肌膚[[國字:ㄔㄣˋ:襯]]得白牙更亮眼。教練[[國字:ㄌㄡ:摟]]著我，沒有[[國字:ㄖㄜˇ:惹]]來責罵，這份[[國字:ㄖㄨㄥˊ:榮]]耀[[國字:ㄕㄨˇ:屬]]於我們。',
                correctAnswer: '黝、襯、摟、惹、榮、屬', explanation: '【解說】「黝黑」的黝是黑部(讀音ㄧㄡˇ)；「襯」是衣部；「摟」是手部；「惹」是心部；「榮」上面是火疊字；「屬」是尸部。'
            },

            // L4 - 寫注音 (挑選極易讀錯的字)
            {
                id: 'q_l4_hw_py_1', lessonId: 'L4', type: 'handwriting', category: '寫注音', difficulty: 4,
                question: '他[[注音:兀:ㄨˋ]]自把我拋在後頭。',
                correctAnswer: 'ㄨˋ', explanation: '【解說】「兀」讀作四聲「ㄨˋ」，指仍然、逕自的意思。'
            },
            {
                id: 'q_l4_hw_py_2', lessonId: 'L4', type: 'handwriting', category: '寫注音', difficulty: 4,
                question: '[[注音:黝:ㄧㄡˇ]]黑的肌膚。',
                correctAnswer: 'ㄧㄡˇ', explanation: '【解說】「黝」黑讀作三聲「ㄧㄡˇ」，形容顏色深黑，非常容易唸錯。'
            },
            {
                id: 'q_l4_hw_py_3', lessonId: 'L4', type: 'handwriting', category: '寫注音', difficulty: 3,
                question: '教練竟[[注音:摟:ㄌㄡ]]著我的肩膀。',
                correctAnswer: 'ㄌㄡ', explanation: '【解說】「摟」著肩膀在這裡讀作一聲「ㄌㄡ」，指用手臂攬住。'
            },
            {
                id: 'q_l4_hw_py_4', lessonId: 'L4', type: 'handwriting', category: '寫注音', difficulty: 2,
                question: '盯著穆太的後腦[[注音:勺:ㄕㄠˊ]]。',
                correctAnswer: 'ㄕㄠˊ', explanation: '【解說】後腦「勺」讀作二聲「ㄕㄠˊ」，指頭部的後方。'
            },

            // L4 - 選擇題 (共20題)
            {
                id: 'q_l4_mc_1', lessonId: 'L4', type: 'mcq', category: '課文理解', difficulty: 1,
                question: '安納亞在馬拉松比賽即將結束時，面臨了什麼兩難的抉擇？',
                options: [
                    { text: '要繼續跑還是停下來休息', isCorrect: false, explanation: '他體力雖然耗盡，但沒有想停下來。' },
                    { text: '要趁對方失誤超越他，還是提醒他終點在哪裡', isCorrect: true, explanation: '正確！這是整篇文章最核心的情節轉折與內心掙扎。' },
                    { text: '要跟教練求救還是靠自己', isCorrect: false, explanation: '比賽中無法跟教練求救。' },
                    { text: '要用西班牙語還是肯亞語跟對方說話', isCorrect: false, explanation: '他不會肯亞語，這不是他猶豫的重點。' }
                ]
            },
            {
                id: 'q_l4_mc_2', lessonId: 'L4', type: 'mcq', category: '課文細節', difficulty: 2,
                question: '肯亞選手穆太為什麼在終點前十公尺突然停下腳步？',
                options: [
                    { text: '因為他腳抽筋沒力氣了', isCorrect: false, explanation: '文中並未提到他受傷或沒力氣。' },
                    { text: '因為他想等安納亞一起過終點', isCorrect: false, explanation: '這是一場激烈的競賽，他沒有刻意要等。' },
                    { text: '因為他把主辦單位設置的頒獎氣球拱門誤認為是終點', isCorrect: true, explanation: '正確！他以為穿過拱門就是終點，所以停下來舉手慶祝。' },
                    { text: '因為教練在場邊叫他停下來', isCorrect: false, explanation: '教練沒有叫他停下。' }
                ]
            },
            {
                id: 'q_l4_mc_3', lessonId: 'L4', type: 'mcq', category: '課文情節', difficulty: 2,
                question: '當穆太停下來時，場邊的西班牙觀眾有什麼反應？',
                options: [
                    { text: '大聲嘲笑他犯了愚蠢的錯誤', isCorrect: false, explanation: '觀眾並沒有嘲笑他。' },
                    { text: '安靜無聲，不知道發生什麼事', isCorrect: false, explanation: '觀眾非常熱烈。' },
                    { text: '熱烈吶喊，用西班牙語要他繼續往前跑', isCorrect: true, explanation: '正確！觀眾雖然希望地主隊安納亞贏，但仍熱心提醒穆太，展現了良好的風度。' },
                    { text: '向大會抗議比賽不公平', isCorrect: false, explanation: '比賽沒有不公平，是選手自己搞錯。' }
                ]
            },
            {
                id: 'q_l4_mc_4', lessonId: 'L4', type: 'mcq', category: '寫作技巧', difficulty: 3,
                question: '課文第五段說：「搞錯的人是他，不是我，知道正確終點位置的我，不就應該是比賽的獲勝者嗎？」這段話呈現了主角的什麼狀態？',
                options: [
                    { text: '非常驕傲自大，覺得自己最聰明', isCorrect: false, explanation: '他不是在驕傲。' },
                    { text: '內心真實的掙扎，在「追求勝利」與「公平競爭」間拔河', isCorrect: true, explanation: '正確！作者誠實寫出自己差一點就被勝利誘惑的矛盾心理。' },
                    { text: '為自己的失敗找藉口', isCorrect: false, explanation: '他當時有機會贏，不是找藉口。' },
                    { text: '對大會標示不清感到極度憤怒', isCorrect: false, explanation: '他沒有抱怨大會。' }
                ]
            },
            {
                id: 'q_l4_mc_5', lessonId: 'L4', type: 'mcq', category: '人物行動', difficulty: 1,
                question: '因為語言不通，安納亞最後用什麼方式提醒穆太終點還在前面？',
                options: [
                    { text: '拿出手機用翻譯軟體給他看', isCorrect: false, explanation: '比賽中沒有手機。' },
                    { text: '用生氣的表情大聲對他吼叫', isCorrect: false, explanation: '安納亞態度很友善。' },
                    { text: '伸出手輕拍他的背，並伸長食指指向前方', isCorrect: true, explanation: '正確！透過肢體語言與手勢進行溝通。' },
                    { text: '直接推著他的肩膀把他推過終點線', isCorrect: false, explanation: '他只有輕拍和指引，沒有用推的。' }
                ]
            },
            {
                id: 'q_l4_mc_6', lessonId: 'L4', type: 'mcq', category: '意象推論', difficulty: 4,
                question: '課文結尾，教練對安納亞說：「比賽就是要贏，你沒有成為優秀的運動員，但成了一個更優秀的人。」這句話的深層涵義是什麼？',
                options: [
                    { text: '教練非常生氣，認為安納亞以後不能再當運動員了', isCorrect: false, explanation: '教練是笑著摟他，並非生氣。' },
                    { text: '雖然失去了比賽的獎牌，卻展現了比贏得比賽更高尚的品格與運動家精神', isCorrect: true, explanation: '正確！「優秀的人」指的是在道德與品格上獲得了真正的勝利。' },
                    { text: '教練覺得安納亞跑步技術太差，但人緣很好', isCorrect: false, explanation: '與技術或人緣無關。' },
                    { text: '暗示安納亞應該去當教練，不要再當選手了', isCorrect: false, explanation: '過度曲解文意。' }
                ]
            },
            {
                id: 'q_l4_mc_7', lessonId: 'L4', type: 'mcq', category: '修辭技巧', difficulty: 3,
                question: '「十二月的寒風一陣陣吹進運動衫，但我絲毫不覺得冷，因為我的肌膚發燙，內心正沸騰著。」這句話使用了什麼寫作技巧？',
                options: [
                    { text: '對比法 (映襯)', isCorrect: true, explanation: '正確！用外在的「寒冷」對比內心的「發燙、沸騰」，強烈凸顯出主角對勝利的渴望與激動。' },
                    { text: '擬人法 (轉化)', isCorrect: false, explanation: '沒有把物當作人寫。' },
                    { text: '設問法', isCorrect: false, explanation: '沒有丟出疑問。' },
                    { text: '排比法', isCorrect: false, explanation: '句型沒有重複排列。' }
                ]
            },
            {
                id: 'q_l4_mc_8', lessonId: 'L4', type: 'mcq', category: '寫作技巧', difficulty: 3,
                question: '本課一開頭就詳細描寫了寒風、肌膚發燙等感覺，課本稱之為「以摹寫法開頭」，這樣寫的最主要好處是什麼？',
                options: [
                    { text: '湊字數，讓文章看起來比較長', isCorrect: false, explanation: '不是為了湊字數。' },
                    { text: '營造畫面感，讓讀者彷彿身歷其境，立刻融入比賽緊張的氣氛中', isCorrect: true, explanation: '正確！像是搭建舞台一樣，讓讀者瞬間被拉進那個寒冷卻又激烈的賽道上。' },
                    { text: '只是為了炫耀作者的詞彙量很豐富', isCorrect: false, explanation: '是為了服務文章的情境。' },
                    { text: '暗示這場比賽最後會因為天氣太冷而取消', isCorrect: false, explanation: '比賽順利完成了。' }
                ]
            },
            {
                id: 'q_l4_mc_9', lessonId: 'L4', type: 'mcq', category: '修辭辨識', difficulty: 2,
                question: '「黝黑的肌膚襯得一口白牙，更顯亮眼」這句描寫主要使用了哪種感官的摹寫？',
                options: [
                    { text: '聽覺摹寫', isCorrect: false, explanation: '沒有聲音。' },
                    { text: '觸覺摹寫', isCorrect: false, explanation: '不是描寫摸起來的感覺。' },
                    { text: '嗅覺摹寫', isCorrect: false, explanation: '沒有味道。' },
                    { text: '視覺摹寫', isCorrect: true, explanation: '正確！「黝黑」、「白牙」、「亮眼」都是眼睛看到的色彩與畫面。' }
                ]
            },
            {
                id: 'q_l4_mc_10', lessonId: 'L4', type: 'mcq', category: '敘事視角', difficulty: 3,
                question: '關於這篇「課文」的寫作視角，下列敘述何者正確？',
                options: [
                    { text: '採用「第一人稱」，以「我」(安納亞) 的視角敘述，能深刻描寫內心的掙扎', isCorrect: true, explanation: '正確！讀者可以跟著主角一起經歷猶豫、抉擇到最後釋懷的心路歷程。' },
                    { text: '採用「第三人稱」，以「旁觀者」的角度記錄，非常客觀', isCorrect: false, explanation: '這是新聞報導的寫法，不是課文正文。' },
                    { text: '採用「第二人稱」，一直用「你」來跟讀者對話', isCorrect: false, explanation: '文中是以「我」自稱。' },
                    { text: '視角在安納亞和穆太之間不斷切換，讓人搞不清楚是誰在說話', isCorrect: false, explanation: '視角固定在安納亞身上。' }
                ]
            },
            {
                id: 'q_l4_mc_11', lessonId: 'L4', type: 'mcq', category: '敘事視角', difficulty: 3,
                question: '課本第43頁附了一篇「贏得世界掌聲的輸家」的新聞剪報，請問「新聞報導」通常採用哪一種敘事視角？',
                options: [
                    { text: '第一人稱 (主觀視角)', isCorrect: false, explanation: '記者通常不能把自己的主觀情緒放進新聞裡。' },
                    { text: '第二人稱 (對話視角)', isCorrect: false, explanation: '新聞不是寫給特定一個人的信。' },
                    { text: '第三人稱 (客觀視角)', isCorrect: true, explanation: '正確！以旁觀者的角度，客觀陳述「人、事、時、地、物」，讓讀者快速掌握事件全貌。' },
                    { text: '全知全能視角 (神明視角)', isCorrect: false, explanation: '新聞記者只能寫他們觀察或採訪到的事，無法全知。' }
                ]
            },
            {
                id: 'q_l4_mc_12', lessonId: 'L4', type: 'mcq', category: '詞語解析', difficulty: 2,
                question: '課文中安納亞說：「就剩幾十公尺，我想『大勢已去』了吧？」請問「大勢已去」是什麼意思？',
                options: [
                    { text: '指比賽現場的觀眾都已經離開了', isCorrect: false, explanation: '觀眾還在熱烈加油。' },
                    { text: '形容有利的局勢已經喪失，無法挽回', isCorrect: true, explanation: '正確！安納亞覺得剩下的距離太短，自己已經不可能追上對手贏得比賽了。' },
                    { text: '指風勢太大，把氣球拱門吹跑了', isCorrect: false, explanation: '與天氣無關。' },
                    { text: '形容對手的氣勢很弱', isCorrect: false, explanation: '是對手氣勢很強一路領先。' }
                ]
            },
            {
                id: 'q_l4_mc_13', lessonId: 'L4', type: 'mcq', category: '詞語解析', difficulty: 4,
                question: '「穆太一路領先，『兀自』把我拋在後頭。」句中的「兀自」意思最接近下列哪一個詞語？',
                options: [
                    { text: '害怕地', isCorrect: false, explanation: '穆太並不害怕。' },
                    { text: '生氣地', isCorrect: false, explanation: '穆太沒有生氣。' },
                    { text: '逕自、仍然', isCorrect: true, explanation: '正確！表示穆太自顧自地往前跑，不管後面的對手如何追趕。' },
                    { text: '突然', isCorrect: false, explanation: '是持續領先，不是突然。' }
                ]
            },
            {
                id: 'q_l4_mc_14', lessonId: 'L4', type: 'mcq', category: '核心主旨', difficulty: 2,
                question: '為什麼安納亞稱自己是「贏得喝采的輸家」？',
                options: [
                    { text: '因為觀眾可憐他跑太慢，所以給他安慰的掌聲', isCorrect: false, explanation: '掌聲是出於尊敬，不是可憐。' },
                    { text: '因為他雖然輸了比賽的獎牌，卻因為誠實與高尚的運動家精神贏得了世人的尊敬與喝采', isCorrect: true, explanation: '正確！這句話完美點出了整篇文章的精髓。' },
                    { text: '因為他是西班牙人，當地觀眾本來就會幫他拍手', isCorrect: false, explanation: '他贏得的是跨越國界的普世價值的喝采。' },
                    { text: '因為他最後跑輸了還在場邊搞笑，逗樂了觀眾', isCorrect: false, explanation: '這是一件非常嚴肅且令人感動的事。' }
                ]
            },
            {
                id: 'q_l4_mc_15', lessonId: 'L4', type: 'mcq', category: '語句推論', difficulty: 4,
                question: '安納亞心想：「若他知道終點的正確位置，我根本就不可能獲勝。」這句話透露出安納亞什麼樣的性格特質？',
                options: [
                    { text: '自卑懦弱', isCorrect: false, explanation: '他拼戰到最後一刻，並不懦弱。' },
                    { text: '喜歡推卸責任', isCorrect: false, explanation: '他沒有推卸責任。' },
                    { text: '誠實坦蕩，勇於承認對手在實力上優於自己', isCorrect: true, explanation: '正確！他不願意利用對手的失誤來取得「名不副實」的勝利，這展現了極高的道德感。' },
                    { text: '充滿嫉妒心', isCorrect: false, explanation: '如果嫉妒，他就會直接衝線搶走冠軍了。' }
                ]
            },
            {
                id: 'q_l4_mc_16', lessonId: 'L4', type: 'mcq', category: '成語應用', difficulty: 3,
                question: '根據新聞報導：「西班牙選手安納亞與冠軍寶座『失之交臂』」，請問『失之交臂』可以用下列哪一個詞語替換？',
                options: [
                    { text: '擦身而過', isCorrect: true, explanation: '正確！「失之交臂」形容錯失了當面的好機會，與擦身而過意思相近。' },
                    { text: '手到擒來', isCorrect: false, explanation: '意思是輕易取得，完全相反。' },
                    { text: '滿載而歸', isCorrect: false, explanation: '意思不符。' },
                    { text: '反敗為勝', isCorrect: false, explanation: '他最後並沒有勝利。' }
                ]
            },
            {
                id: 'q_l4_mc_17', lessonId: 'L4', type: 'mcq', category: '成語應用', difficulty: 4,
                question: '如果我們要用一句成語來形容安納亞最後選擇把冠軍讓給穆太的行為，哪一個最適合？',
                options: [
                    { text: '袖手旁觀', isCorrect: false, explanation: '形容在旁邊看，不幫忙。' },
                    { text: '落井下石', isCorrect: false, explanation: '形容趁人有危難時加以陷害，安納亞的行為剛好相反。' },
                    { text: '君子之爭', isCorrect: true, explanation: '正確！指以公正、光明磊落的態度參與競爭，不耍小手段，非常符合安納亞的風範。' },
                    { text: '不擇手段', isCorrect: false, explanation: '為了達到目的什麼方法都用，這是負面的形容。' }
                ]
            },
            {
                id: 'q_l4_mc_18', lessonId: 'L4', type: 'mcq', category: '細節觀察', difficulty: 3,
                question: '教練知道安納亞把冠軍拱手讓人後的反應，與安納亞一開始「預期」的反應有什麼不同？',
                options: [
                    { text: '安納亞以為會被稱讚，結果被教練大罵一頓', isCorrect: false, explanation: '完全相反。' },
                    { text: '安納亞以為會被罵，結果教練非常生氣的打了他', isCorrect: false, explanation: '教練沒有生氣。' },
                    { text: '安納亞以為會被罵，沒想到教練卻摟著他，高度肯定他的行為', isCorrect: true, explanation: '正確！這個反差也更加深了文章宣揚運動家精神的力道。' },
                    { text: '安納亞以為教練沒看見，結果教練早就回家了', isCorrect: false, explanation: '教練在終點等他。' }
                ]
            },
            {
                id: 'q_l4_mc_19', lessonId: 'L4', type: 'mcq', category: '課文主旨', difficulty: 1,
                question: '安納亞最後覺得，身為運動員，比獲得名次更重要的事情是什麼？',
                options: [
                    { text: '拿到豐厚的獎金', isCorrect: false, explanation: '文中完全沒提獎金。' },
                    { text: '對自己的要求與可貴的運動家精神', isCorrect: true, explanation: '正確！這是第九段也是全文的最高核心精神。' },
                    { text: '登上報紙頭條出名', isCorrect: false, explanation: '出名只是意外的結果，不是他的目的。' },
                    { text: '學會說肯亞語', isCorrect: false, explanation: '雖然語言不通，但無損於高尚的品格展現。' }
                ]
            },
            {
                id: 'q_l4_mc_20', lessonId: 'L4', type: 'mcq', category: '生活實踐', difficulty: 4,
                question: '學習完這課，如果下次你在大隊接力比賽中，看到別班選手在你面前跌倒掉棒，你覺得最符合「安納亞精神」的做法是什麼？',
                options: [
                    { text: '大聲嘲笑他，然後輕鬆跑過去贏得比賽', isCorrect: false, explanation: '這是落井下石，完全違背運動家精神。' },
                    { text: '故意踩他的棒子讓他找不到', isCorrect: false, explanation: '這是缺乏品格的惡劣行為。' },
                    { text: '不管他跌得多嚴重，只要不是自己班的都不關我的事', isCorrect: false, explanation: '缺乏同理心。' },
                    { text: '關心他的傷勢，雖然仍在競爭中，但保持尊重不取笑對手失誤，憑真實力比賽', isCorrect: true, explanation: '正確！這才是真正的「君子之爭」與運動家風度。' }
                ]
            },

            // ==================== 第五課 (L5) 題庫 ====================
            // L5 - 寫國字 (共19個生字，分5題)
            {
                id: 'q_l5_hw_char_1', lessonId: 'L5', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '偶像在舞臺上[[國字:ㄗㄞˋ:載]]歌載舞，配戴這[[國字:ㄈㄨˋ:副]][[國字:ㄐㄧㄢ:監]]聽耳機對表演大有助[[國字:ㄧˋ:益]]。',
                correctAnswer: '載、副、監、益', explanation: '【解說】「載」在這裡是動詞，指一邊唱歌一邊跳舞(車部)；「副」是量詞(刀部)；「監」是皿部；「益」是皿部。'
            },
            {
                id: 'q_l5_hw_char_2', lessonId: 'L5', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '為了避開現場[[國字:ㄗㄠˋ:噪]]音的干擾，歌手會戴上耳機來[[國字:ㄅㄧˋ:避]]免走音。',
                correctAnswer: '噪、避', explanation: '【解說】「噪音」的噪是口部，指吵雜的聲音；「避免」的避是辵(辶)部。'
            },
            {
                id: 'q_l5_hw_char_3', lessonId: 'L5', type: 'handwriting', category: '寫國字', difficulty: 2,
                question: '發生火災時，消防員會[[國字:ㄒㄩㄣˋ:迅]]速趕往現場撲[[國字:ㄇㄧㄝˋ:滅]]火勢，救[[國字:ㄩㄢˊ:援]]受困的民眾。',
                correctAnswer: '迅、滅、援', explanation: '【解說】「迅速」的迅是辵部；「撲滅」的滅是水部；「救援」的援是手部。'
            },
            {
                id: 'q_l5_hw_char_4', lessonId: 'L5', type: 'handwriting', category: '寫國字', difficulty: 4,
                question: '消防衣可以不怕火[[國字:ㄕㄠ:燒]]，中間的防水層還能防止有毒[[國字:ㄧㄝˋ:液]]體腐[[國字:ㄕˊ:蝕]]，內裡則能隔絕肌膚接[[國字:ㄔㄨˋ:觸]]高溫，至多能[[國字:ㄔㄥˊ:承]]受八百度。',
                correctAnswer: '燒、液、蝕、觸、承', explanation: '【解說】「燒」是火部；「液」是水部；「蝕」是虫部；「觸」是角部；「承」是手部。這題字都比較難，要特別小心！'
            },
            {
                id: 'q_l5_hw_char_5', lessonId: 'L5', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '大家對打板動作不[[國字:ㄇㄛˋ:陌]]生，它能幫助後製[[國字:ㄕㄜˋ:攝]]影與音效的同步。大量的影音[[國字:ㄉㄤˇ:檔]]案若沒有用場記板[[國字:ㄓㄨˋ:註]]明，找尋起來如同大海[[國字:ㄌㄠ:撈]]針。',
                correctAnswer: '陌、攝、檔、註、撈', explanation: '【解說】「陌生」的陌是阜(左耳旁)部；「攝影」的攝是手部；「檔案」的檔是木部；「註明」的註是言部；「撈針」的撈是手部。'
            },

            // L5 - 寫注音 (挑選易錯字)
            {
                id: 'q_l5_hw_py_1', lessonId: 'L5', type: 'handwriting', category: '寫注音', difficulty: 4,
                question: '偶像明星在舞臺上[[注音:載:ㄗㄞˋ]]歌載舞。',
                correctAnswer: 'ㄗㄞˋ', explanation: '【解說】「載歌載舞」讀作四聲「ㄗㄞˋ」，指一邊唱歌，一邊跳舞。不要念成三聲「ㄗㄞˇ」喔！'
            },
            {
                id: 'q_l5_hw_py_2', lessonId: 'L5', type: 'handwriting', category: '寫注音', difficulty: 3,
                question: '防止有毒液體腐[[注音:蝕:ㄕˊ]]。',
                correctAnswer: 'ㄕˊ', explanation: '【解說】腐「蝕」讀作二聲「ㄕˊ」。'
            },
            {
                id: 'q_l5_hw_py_3', lessonId: 'L5', type: 'handwriting', category: '寫注音', difficulty: 3,
                question: '產生大量的影音[[注音:檔:ㄉㄤˇ]]案。',
                correctAnswer: 'ㄉㄤˇ', explanation: '【解說】「檔」案讀作三聲「ㄉㄤˇ」，很多人會口語誤讀成四聲「ㄉㄤˋ」，要特別注意！'
            },
            {
                id: 'q_l5_hw_py_4', lessonId: 'L5', type: 'handwriting', category: '寫注音', difficulty: 2,
                question: '避免現場[[注音:噪:ㄗㄠˋ]]音干擾。',
                correctAnswer: 'ㄗㄠˋ', explanation: '【解說】「噪」音讀作四聲「ㄗㄠˋ」。'
            },

            // L5 - 選擇題 (共20題)
            {
                id: 'q_l5_mc_1', lessonId: 'L5', type: 'mcq', category: '課文理解', difficulty: 2,
                question: '根據課文，表演者在舞臺上配戴「入耳式監聽耳機」的最主要目的是什麼？',
                options: [
                    { text: '為了造型好看，增加舞臺魅力', isCorrect: false, explanation: '耳機主要是實用功能，並非為了造型。' },
                    { text: '一耳聽伴奏，一耳聽自己的聲音，藉此掌握實際演唱情況', isCorrect: true, explanation: '正確！這樣可以避免走音或與音樂不同步，並能阻絕現場噪音。' },
                    { text: '為了隨時聽取經紀人或導演在後臺的指示', isCorrect: false, explanation: '雖然有些耳機有此功能，但文中強調的是監聽「音樂與自己的聲音」。' },
                    { text: '因為舞臺上的音響壞掉了，只能戴耳機聽', isCorrect: false, explanation: '音響沒壞，是為了避免噪音干擾。' }
                ]
            },
            {
                id: 'q_l5_mc_2', lessonId: 'L5', type: 'mcq', category: '課外延伸', difficulty: 3,
                question: '「入耳式監聽耳機」最初被發明出來，是為了解決樂隊中哪一種樂手的困擾？',
                options: [
                    { text: '主唱', isCorrect: false, explanation: '最開始不是為了解決主唱的問題。' },
                    { text: '吉他手', isCorrect: false, explanation: '吉他手通常有自己的監聽喇叭。' },
                    { text: '爵士鼓手', isCorrect: true, explanation: '正確！根據補充知識，1995年是為了解決鼓手飽受舞臺噪音干擾的問題而設計的。' },
                    { text: '鍵盤手', isCorrect: false, explanation: '鍵盤手並非首要發明對象。' }
                ]
            },
            {
                id: 'q_l5_mc_3', lessonId: 'L5', type: 'mcq', category: '細節觀察', difficulty: 2,
                question: '消防衣之所以不怕火，是因為它有「三層保護」。請問最外面那一層（表面）的功能是什麼？',
                options: [
                    { text: '隔絕肌膚接觸到高溫', isCorrect: false, explanation: '這是最內裡「隔熱層」的功能。' },
                    { text: '防止有毒液體腐蝕', isCorrect: false, explanation: '這是中間「防水層」的功能。' },
                    { text: '含有金屬塗料，將大部分的熱輻射反射回去', isCorrect: true, explanation: '正確！最外層是「反射層」，用來反射熱能。' },
                    { text: '能夠自動噴出乾粉滅火', isCorrect: false, explanation: '消防衣沒有這種科幻的功能。' }
                ]
            },
            {
                id: 'q_l5_mc_4', lessonId: 'L5', type: 'mcq', category: '課文理解', difficulty: 3,
                question: '關於消防衣的特性，下列敘述何者**錯誤**？',
                options: [
                    { text: '這件衣服至多能承受攝氏八百度的高溫', isCorrect: false, explanation: '這是正確的敘述。' },
                    { text: '穿上這件衣服，消防員就可以在火場中待上無限長的時間', isCorrect: true, explanation: '錯誤！圖解說明「接觸火焰過久仍會燒毀」，它只是「爭取多一些時間」，不能無限期抵擋高溫。' },
                    { text: '中間的防水層可以防止有毒液體腐蝕', isCorrect: false, explanation: '這是正確的敘述。' },
                    { text: '能保護消防員的安全，爭取救援受困民眾的時間', isCorrect: false, explanation: '這是正確的敘述。' }
                ]
            },
            {
                id: 'q_l5_mc_5', lessonId: 'L5', type: 'mcq', category: '細節推論', difficulty: 2,
                question: '拍攝電影時，工作人員在鏡頭前「打板」的最主要功用是什麼？',
                options: [
                    { text: '為了叫現場的演員與工作人員保持安靜', isCorrect: false, explanation: '雖然打板會發出聲音，但主要目的不是為了管理秩序。' },
                    { text: '利用打板的聲音，提醒錄製的起始點，方便後製將影音同步', isCorrect: true, explanation: '正確！因為電影的影像和聲音是分開錄的，打板聲能幫助後製人員精準對齊聲軌與影像。' },
                    { text: '用來測量現場的燈光亮度是否足夠', isCorrect: false, explanation: '那是測光表的功能，不是場記板。' },
                    { text: '作為演員開始講臺詞的信號', isCorrect: false, explanation: '演員是聽導演喊「Action」才開始表演的。' }
                ]
            },
            {
                id: 'q_l5_mc_6', lessonId: 'L5', type: 'mcq', category: '詞語解析', difficulty: 3,
                question: '課文中提到「若沒有妥善安排，要找到同一幕的影音並將它們合在一起，無疑是『大海撈針』」，請問「大海撈針」是什麼意思？',
                options: [
                    { text: '形容東西掉進海裡，永遠找不回來', isCorrect: false, explanation: '不一定是掉進海裡，而是強調尋找的難度。' },
                    { text: '比喻東西很渺小，不值得去尋找', isCorrect: false, explanation: '不是因為不值得，是因為太難找。' },
                    { text: '比喻尋找的範圍很大，要找到目標極為困難', isCorrect: true, explanation: '正確！形容在浩瀚的檔案中尋找特定的一個檔案，非常費時費力。' },
                    { text: '形容做事情非常細心，連針都找得到', isCorrect: false, explanation: '這是一個形容困難的詞，不是稱讚細心。' }
                ]
            },
            {
                id: 'q_l5_mc_7', lessonId: 'L5', type: 'mcq', category: '文體分析', difficulty: 2,
                question: '《哇！原來如此》這篇文章，主要是運用哪一種寫作結構來介紹這三種職業的秘密？',
                options: [
                    { text: '按照時間發生的先後順序來寫', isCorrect: false, explanation: '這三個職業之間沒有時間先後關係。' },
                    { text: '提出現象 ➡️ 提出問題 ➡️ 解答問題 說明事理', isCorrect: true, explanation: '正確！每一段都是先描述一個常見現象，接著用問號提問，最後給出專業的解答。' },
                    { text: '運用第一人稱敘述一個感人的故事', isCorrect: false, explanation: '這是一篇說明文，不是抒情或記事故事。' },
                    { text: '正反兩面論述，最後得出一個結論', isCorrect: false, explanation: '這是議論文的結構，本課並未進行正反辯論。' }
                ]
            },
            {
                id: 'q_l5_mc_8', lessonId: 'L5', type: 'mcq', category: '修辭技巧', difficulty: 3,
                question: '課本「加油小站」介紹了「設問法」。請問「提到生活中常見的職業，你會想到什麼呢？」屬於哪一種設問？',
                options: [
                    { text: '懸問：作者內心也沒有確切答案，留給讀者思考', isCorrect: true, explanation: '正確！因為每個人的答案都不一樣，所以是一種開放式的懸問。' },
                    { text: '激問(反問)：答案就在問題的反面', isCorrect: false, explanation: '激問通常是「難道...不...嗎？」。' },
                    { text: '提問：作者自問自答', isCorrect: false, explanation: '作者後面並沒有列出所有常見職業。' },
                    { text: '疑問：單純因為不懂而發問', isCorrect: false, explanation: '這是一種修辭手法，作者並非真的不懂。' }
                ]
            },
            {
                id: 'q_l5_mc_9', lessonId: 'L5', type: 'mcq', category: '修辭技巧', difficulty: 4,
                question: '下列哪一句話使用了「提問 (自問自答)」的設問法？',
                options: [
                    { text: '難道消防員都不怕火嗎？', isCorrect: false, explanation: '這是激問，答案在反面(當然怕火)。' },
                    { text: '生活中常見的職業，是否有令人好奇的工作內容？答案是有的。', isCorrect: true, explanation: '正確！作者自己拋出問題，緊接著自己給出答案，這就是「提問」。' },
                    { text: '未來你想從事什麼職業呢？', isCorrect: false, explanation: '這是懸問，答案因人而異。' },
                    { text: '是誰把我的橡皮擦拿走了？', isCorrect: false, explanation: '這只是一般的疑問句，不是修辭。' }
                ]
            },
            {
                id: 'q_l5_mc_10', lessonId: 'L5', type: 'mcq', category: '修辭技巧', difficulty: 3,
                question: '為什麼作者在介紹每一個職業秘密之前，都要先用一個「問句（設問法）」作為開頭？',
                options: [
                    { text: '為了湊字數，讓文章看起來長一點', isCorrect: false, explanation: '這不是修辭的目的。' },
                    { text: '因為作者自己也不確定答案，希望讀者幫忙找', isCorrect: false, explanation: '作者在下一段都有詳細解答。' },
                    { text: '增強與讀者的互動，引發讀者的好奇心與閱讀動機', isCorrect: true, explanation: '正確！拋出一個生活常見但容易被忽略的問題，能成功勾起讀者想往下看的欲望。' },
                    { text: '為了考驗讀者有沒有專心看文章', isCorrect: false, explanation: '不是為了考試。' }
                ]
            },
            {
                id: 'q_l5_mc_11', lessonId: 'L5', type: 'mcq', category: '成語歸類', difficulty: 2,
                question: '「春風化雨、百年樹人」最適合用來形容下列哪一種職業？',
                options: [
                    { text: '醫師', isCorrect: false, explanation: '醫師通常用仁心仁術。' },
                    { text: '教師', isCorrect: true, explanation: '正確！這兩個成語都是用來讚揚師長對學生的教導與培育之恩。' },
                    { text: '農夫', isCorrect: false, explanation: '雖然有「樹」，但百年樹人是指培育人才。' },
                    { text: '園丁', isCorrect: false, explanation: '字面上的種植，但這成語專指教育。' }
                ]
            },
            {
                id: 'q_l5_mc_12', lessonId: 'L5', type: 'mcq', category: '成語歸類', difficulty: 2,
                question: '如果你要寫卡片感謝救了你一命的醫生，使用下列哪一個成語最恰當？',
                options: [
                    { text: '赴湯蹈火', isCorrect: false, explanation: '這是形容消防員不避危險。' },
                    { text: '天籟之音', isCorrect: false, explanation: '這是形容歌手聲音好聽。' },
                    { text: '妙手回春', isCorrect: true, explanation: '正確！稱讚醫生醫術高明，能把垂危的病人治好。' },
                    { text: '杏壇之光', isCorrect: false, explanation: '「杏壇」是指教育界，醫生應該用「杏林」。' }
                ]
            },
            {
                id: 'q_l5_mc_13', lessonId: 'L5', type: 'mcq', category: '成語應用', difficulty: 4,
                question: '課本中提到「杏壇」代表教育界，而「杏林」代表醫學界。請問下列哪個句子使用**正確**？',
                options: [
                    { text: '林醫師醫術精湛，真可說是「杏壇之光」。', isCorrect: false, explanation: '醫師應使用「杏林」。' },
                    { text: '張老師奉獻教育三十年，實為「杏林春暖」。', isCorrect: false, explanation: '老師應使用「杏壇」。' },
                    { text: '這位歌星的歌聲有如天籟，為「杏壇」增添光彩。', isCorrect: false, explanation: '歌星與杏壇(教育)無關。' },
                    { text: '孔子在「杏壇」講學，後人便以此代稱教育界。', isCorrect: true, explanation: '正確！這正是「杏壇」一詞的由來。' }
                ]
            },
            {
                id: 'q_l5_mc_14', lessonId: 'L5', type: 'mcq', category: '成語歸類', difficulty: 2,
                question: '「黃鶯出谷、餘音繞梁」是用來讚美哪一種職業的工作表現？',
                options: [
                    { text: '歌手', isCorrect: true, explanation: '正確！這兩個成語都是用來形容聲音清脆悅耳、歌聲優美動人。' },
                    { text: '配音員', isCorrect: false, explanation: '雖然也靠聲音，但這些成語多特指「歌聲」。' },
                    { text: '演說家', isCorrect: false, explanation: '演說家通常用「口若懸河」。' },
                    { text: '消防員', isCorrect: false, explanation: '完全無關。' }
                ]
            },
            {
                id: 'q_l5_mc_15', lessonId: 'L5', type: 'mcq', category: '字詞義測驗', difficulty: 3,
                question: '「有些職業我們耳熟能詳，能大致描繪出它們的樣貌，不足為奇。」句中的「不足為奇」意思為何？',
                options: [
                    { text: '數量太少，覺得很奇怪', isCorrect: false, explanation: '不是數量的意思。' },
                    { text: '事物很平常，沒有什麼覺得奇怪的地方', isCorrect: true, explanation: '正確！因為太常見了，所以覺得很普通、不奇怪。' },
                    { text: '腳力不夠，走不到神奇的地方', isCorrect: false, explanation: '「足」在這裡是「值得」的意思，不是腳。' },
                    { text: '非常神奇，令人嘆為觀止', isCorrect: false, explanation: '完全相反的意思。' }
                ]
            },
            {
                id: 'q_l5_mc_16', lessonId: 'L5', type: 'mcq', category: '常識推論', difficulty: 3,
                question: '電影場記板上面通常會寫著「SCENE: 5 / TAKE: 1」等英文字，你推測這有什麼作用？',
                options: [
                    { text: '提醒演員現在是第幾場戲的第幾次拍攝', isCorrect: true, explanation: '正確！SCENE是場次，TAKE是拍攝次數，方便後製對照劇本尋找檔案。' },
                    { text: '顯示今天的日期跟時間', isCorrect: false, explanation: '雖然板子上也會有日期，但 SCENE/TAKE 不是指時間。' },
                    { text: '告訴攝影師鏡頭要轉幾度', isCorrect: false, explanation: '不是角度。' },
                    { text: '記錄演員的薪水', isCorrect: false, explanation: '太扯了，完全無關。' }
                ]
            },
            {
                id: 'q_l5_mc_17', lessonId: 'L5', type: 'mcq', category: '成語應用', difficulty: 3,
                question: '消防員為了保護人民生命財產，常常出入危險的火場。我們可以用哪一個成語來形容他們？',
                options: [
                    { text: '赴湯蹈火', isCorrect: true, explanation: '正確！比喻奮不顧身，不避危險。「湯」指熱水，「火」指烈火，非常符合消防員的情境。' },
                    { text: '走馬看花', isCorrect: false, explanation: '形容略觀事物外象，不究其底蘊。' },
                    { text: '火上加油', isCorrect: false, explanation: '比喻使事態更加嚴重。' },
                    { text: '水深火熱', isCorrect: false, explanation: '形容處境非常艱難痛苦，通常指受災的災民，不是指救災的人。' }
                ]
            },
            {
                id: 'q_l5_mc_18', lessonId: 'L5', type: 'mcq', category: '字義辨析', difficulty: 4,
                question: '消防員「反其道而行」朝火場前進。「其道」在這裡指的是什麼？',
                options: [
                    { text: '消防車專用的車道', isCorrect: false, explanation: '不是指實際的道路。' },
                    { text: '一般人遇到火災時會「向外逃生」的常理路線', isCorrect: true, explanation: '正確！一般人往外逃，消防員卻往裡面衝，這就是「反其道而行」。' },
                    { text: '火勢蔓延的方向', isCorrect: false, explanation: '消防員是要去滅火，不是跟著火跑。' },
                    { text: '道德與法律的規範', isCorrect: false, explanation: '在這是指物理的行動方向常理。' }
                ]
            },
            {
                id: 'q_l5_mc_19', lessonId: 'L5', type: 'mcq', category: '寫作邏輯', difficulty: 4,
                question: '作者在寫這一課時，將「歌手、消防員、電影工作人員」放在一起介紹，他們之間的共同點是什麼？',
                options: [
                    { text: '他們都是薪水很高的職業', isCorrect: false, explanation: '文中未提薪水。' },
                    { text: '他們的工作都非常危險', isCorrect: false, explanation: '歌手跟打板人員並不危險。' },
                    { text: '他們的工作內容中，都有使用特定裝備來解決隱藏問題的秘密', isCorrect: true, explanation: '正確！這是貫穿全文的核心概念。' },
                    { text: '他們都需要經過國家考試才能錄取', isCorrect: false, explanation: '歌手跟電影人員不需要。' }
                ]
            },
            {
                id: 'q_l5_mc_20', lessonId: 'L5', type: 'mcq', category: '生活實踐', difficulty: 3,
                question: '讀完這課後，如果你在路上看到「郵差先生」，你想模仿作者寫一段「哇！原來如此」的文章，你應該先做什麼？',
                options: [
                    { text: '直接去問他一個月賺多少錢', isCorrect: false, explanation: '這是不禮貌且與主題無關的問題。' },
                    { text: '觀察他的裝備(例如郵差包、機車)，並找資料研究背後是否有特殊設計或秘密', isCorrect: true, explanation: '正確！這正是這課想要教導的：對常見事物保持好奇心，並主動探索原因。' },
                    { text: '幫他把信送完', isCorrect: false, explanation: '雖然熱心，但不能亂動別人的信件。' },
                    { text: '抱怨他送信太慢', isCorrect: false, explanation: '這完全不是學習這課的目的。' }
                ]
            },

            // ==================== 第六課 (L6) 題庫 ====================
            // L6 - 寫國字 (共19個生字，分5題)
            {
                id: 'q_l6_hw_char_1', lessonId: 'L6', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '阿姆斯壯駕駛登月小[[國字:ㄊㄧㄥˇ:艇]]，他冷靜的聲音[[國字:ㄏㄨㄚˋ:劃]]破了[[國字:ㄏㄨㄤ:荒]]涼寂靜，在無[[國字:ㄧㄣˊ:垠]]的太空中留下歷史。',
                correctAnswer: '艇、劃、荒、垠', explanation: '【解說】「小艇」的艇是舟部；「劃破」的劃是刀部；「荒涼」的荒是艸部；「無垠」的垠是土部，指沒有邊際。'
            },
            {
                id: 'q_l6_hw_char_2', lessonId: 'L6', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '這項創舉在[[國字:ㄩˇ:宇]][[國字:ㄓㄡˋ:宙]]探索史上翻開不[[國字:ㄒㄧㄡˇ:朽]]的一頁，許多航空雜[[國字:ㄓˋ:誌]]都有相關報導。',
                correctAnswer: '宇、宙、朽、誌', explanation: '【解說】「宇宙」都是宀部；「不朽」的朽是木部，指不會腐壞、磨滅；「雜誌」的誌是言部，指記錄的文字。'
            },
            {
                id: 'q_l6_hw_char_3', lessonId: 'L6', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '參加這一[[國字:ㄒㄧˋ:系]]列的太空[[國字:ㄒㄩㄣˋ:訓]]練，必須忍受各種機[[國字:ㄒㄧㄝˋ:械]]聲，並在狹小的指揮[[國字:ㄘㄤ:艙]]內進行任務。',
                correctAnswer: '系、訓、械、艙', explanation: '【解說】「系列」的系是糸部；「訓練」的訓是言部；「機械」的械是木部；「指揮艙」的艙是舟部。'
            },
            {
                id: 'q_l6_hw_char_4', lessonId: 'L6', type: 'handwriting', category: '寫國字', difficulty: 4,
                question: '兩位太空人[[國字:ㄐㄧㄚˋ:駕]]駛小艇，在[[國字:ㄌㄧㄥˊ:凌]]晨時分降落。月球表面充滿了[[國字:ㄩㄣˇ:隕]]石坑，極目遠[[國字:ㄊㄧㄠˋ:眺]]，一片寂靜。',
                correctAnswer: '駕、凌、隕、眺', explanation: '【解說】「駕駛」的駕是馬部；「凌晨」的凌是冫(冰)部；「隕石坑」的隕是阜(左耳)部；「遠眺」的眺是目部。'
            },
            {
                id: 'q_l6_hw_char_5', lessonId: 'L6', type: 'handwriting', category: '寫國字', difficulty: 3,
                question: '藍綠色的地球在太空中燦爛[[國字:ㄉㄨㄛˊ:奪]]目。這次遠[[國字:ㄓㄥ:征]]月球的壯舉，吸引了六[[國字:ㄧˋ:億]]人的關注。',
                correctAnswer: '奪、征、億', explanation: '【解說】「奪目」的奪是大部；「遠征」的征是彳部；「六億」的億是人部。'
            },

            // L6 - 寫注音
            {
                id: 'q_l6_hw_py_1', lessonId: 'L6', type: 'handwriting', category: '寫注音', difficulty: 4,
                question: '聲音[[注音:劃:ㄏㄨㄚˋ]]破荒涼寂靜。',
                correctAnswer: 'ㄏㄨㄚˋ', explanation: '【解說】「劃破」在這裡讀作四聲「ㄏㄨㄚˋ」，指分開、切開。'
            },
            {
                id: 'q_l6_hw_py_2', lessonId: 'L6', type: 'handwriting', category: '寫注音', difficulty: 3,
                question: '在無[[注音:垠:ㄧㄣˊ]]的宇宙。',
                correctAnswer: 'ㄧㄣˊ', explanation: '【解說】「無垠」讀作二聲「ㄧㄣˊ」，指沒有邊際。不要有邊讀邊念成「ㄍㄣ」喔！'
            },
            {
                id: 'q_l6_hw_py_3', lessonId: 'L6', type: 'handwriting', category: '寫注音', difficulty: 3,
                question: '脫離指揮[[注音:艙:ㄘㄤ]]。',
                correctAnswer: 'ㄘㄤ', explanation: '【解說】「艙」讀作一聲「ㄘㄤ」。'
            },
            {
                id: 'q_l6_hw_py_4', lessonId: 'L6', type: 'handwriting', category: '寫注音', difficulty: 4,
                question: '極目遠[[注音:眺:ㄊㄧㄠˋ]]。',
                correctAnswer: 'ㄊㄧㄠˋ', explanation: '【解說】「眺」讀作四聲「ㄊㄧㄠˋ」，指向遠處看。'
            },

            // L6 - 選擇題
            {
                id: 'q_l6_mc_1', lessonId: 'L6', type: 'mcq', category: '課文細節', difficulty: 1,
                question: '歷史上第一位踏上月球的太空人是誰？',
                options: [
                    { text: '麥可·柯林斯', isCorrect: false, explanation: '他負責留守指揮艙。' },
                    { text: '尼爾·阿姆斯壯', isCorrect: true, explanation: '正確！阿姆斯壯是第一位踏上月球的太空人。' },
                    { text: '伯茲·艾德林', isCorrect: false, explanation: '他是第二位踏上月球的太空人。' },
                    { text: '傑瑞·哈維', isCorrect: false, explanation: '這是發明監聽耳機的人（第五課）。' }
                ]
            },
            {
                id: 'q_l6_mc_2', lessonId: 'L6', type: 'mcq', category: '課外延伸', difficulty: 2,
                question: '阿波羅十一號任務中，負責留守指揮艙並繞月飛行，沒有踏上月球表面的太空人是誰？',
                options: [
                    { text: '尼爾·阿姆斯壯', isCorrect: false, explanation: '他登上了月球。' },
                    { text: '麥可·柯林斯', isCorrect: true, explanation: '正確！根據補充資料，柯林斯擔任指揮艙駕駛員，留守指揮艙繞月飛行。' },
                    { text: '伯茲·艾德林', isCorrect: false, explanation: '他登上了月球。' },
                    { text: '萊特兄弟', isCorrect: false, explanation: '他們發明了飛機。' }
                ]
            },
            {
                id: 'q_l6_mc_3', lessonId: 'L6', type: 'mcq', category: '寫作技巧', difficulty: 2,
                question: '課文一開頭引用了阿姆斯壯的名言：「這是我的一小步，卻是人類的一大步。」這樣的寫作手法稱為什麼？',
                options: [
                    { text: '摹寫法', isCorrect: false, explanation: '摹寫法是描寫感官感受。' },
                    { text: '引用法', isCorrect: true, explanation: '正確！在文章開頭直接引用名言，可以吸引讀者注意，並點出文章的核心事件。' },
                    { text: '擬人法', isCorrect: false, explanation: '沒有將物擬人。' },
                    { text: '譬喻法', isCorrect: false, explanation: '沒有使用譬喻。' }
                ]
            },
            {
                id: 'q_l6_mc_4', lessonId: 'L6', type: 'mcq', category: '句意推論', difficulty: 3,
                question: '「這是我的一小步，卻是人類的一大步。」句中的「一大步」代表什麼涵義？',
                options: [
                    { text: '太空人在月球上跳躍的距離很遠', isCorrect: false, explanation: '不是指實際的距離。' },
                    { text: '這項創舉代表了全人類在太空探索領域的重大突破', isCorrect: true, explanation: '正確！雖然只是個人跨出的一小步，對人類科學史卻是極具意義的里程碑。' },
                    { text: '登月小艇與地球的距離非常遙遠', isCorrect: false, explanation: '不是形容距離。' },
                    { text: '為了這次登月花費了非常多的金錢', isCorrect: false, explanation: '不是指金錢。' }
                ]
            },
            {
                id: 'q_l6_mc_5', lessonId: 'L6', type: 'mcq', category: '課文細節', difficulty: 2,
                question: '根據課文，阿姆斯壯為了成為太空人，必須接受許多嚴格的訓練，下列何者**不包括**在內？',
                options: [
                    { text: '不斷翻轉的無重力訓練', isCorrect: false, explanation: '課文中有提到。' },
                    { text: '學習用多國語言與外星人溝通', isCorrect: true, explanation: '錯誤！課文中沒有提到這項訓練。' },
                    { text: '火箭發射和衝進大氣層的衝擊訓練', isCorrect: false, explanation: '課文中有提到。' },
                    { text: '身穿沉重的太空衣走上幾個小時', isCorrect: false, explanation: '課文中有提到。' }
                ]
            },
            {
                id: 'q_l6_mc_6', lessonId: 'L6', type: 'mcq', category: '寫作技巧', difficulty: 3,
                question: '「倒數聲夾雜著震耳的響聲，『3、2、1、0』火箭伴隨濃濃白煙，拖著火紅的尾巴直衝雲霄。」這段文字屬於什麼樣的描寫？',
                options: [
                    { text: '靜態描寫', isCorrect: false, explanation: '火箭發射充滿了聲音與動作。' },
                    { text: '動態描寫', isCorrect: true, explanation: '正確！文字生動地寫出了火箭發射時聲音、動作與畫面的劇烈變化。' },
                    { text: '心理描寫', isCorrect: false, explanation: '沒有描寫人物的內心感受。' },
                    { text: '外貌描寫', isCorrect: false, explanation: '不是在描寫人物長相。' }
                ]
            },
            {
                id: 'q_l6_mc_7', lessonId: 'L6', type: 'mcq', category: '修辭技巧', difficulty: 2,
                question: '「一望無際的沙灰色就像沉睡中的巨人。」這句話使用了哪一種修辭法？',
                options: [
                    { text: '譬喻', isCorrect: true, explanation: '正確！使用「像」字，將沙灰色的月球表面比喻為沉睡中的巨人。' },
                    { text: '擬人', isCorrect: false, explanation: '「巨人」本身就是人，所以這是譬喻而非擬人。' },
                    { text: '設問', isCorrect: false, explanation: '沒有丟出問題。' },
                    { text: '誇飾', isCorrect: false, explanation: '主要是在比喻形狀與氛圍。' }
                ]
            },
            {
                id: 'q_l6_mc_8', lessonId: 'L6', type: 'mcq', category: '寫作技巧', difficulty: 3,
                question: '「太空一片象灰與濃黑，寂靜而神秘。」這段文字營造了什麼樣的視覺感受？',
                options: [
                    { text: '熱鬧繽紛的動態畫面', isCorrect: false, explanation: '「寂靜」與熱鬧相反。' },
                    { text: '荒涼冷清且靜止的靜態畫面', isCorrect: true, explanation: '正確！這是一段標準的「靜態描寫」，強調色彩的單調與氛圍的沉靜。' },
                    { text: '充滿危機的緊張感', isCorrect: false, explanation: '強調的是神祕，而非危機。' },
                    { text: '溫馨感人的親情', isCorrect: false, explanation: '與親情無關。' }
                ]
            },
            {
                id: 'q_l6_mc_9', lessonId: 'L6', type: 'mcq', category: '課文細節', difficulty: 2,
                question: '太空人在月球上漫步時，「像袋鼠輕巧的跳躍」，他們在月球表面進行了哪些工作？',
                options: [
                    { text: '尋找外星人的蹤跡', isCorrect: false, explanation: '沒有這項任務。' },
                    { text: '採集月球表面的樣本、拍照，安置研究設備', isCorrect: true, explanation: '正確！這是課文第七段提到的主要工作。' },
                    { text: '蓋了一座太空基地', isCorrect: false, explanation: '他們只待了兩個半小時。' },
                    { text: '和地球的家人視訊聊天', isCorrect: false, explanation: '課文未提及。' }
                ]
            },
            {
                id: 'q_l6_mc_10', lessonId: 'L6', type: 'mcq', category: '情緒推論', difficulty: 3,
                question: '當阿姆斯壯在月球上看著地球升起，心裡覺得「熟悉卻又如此陌生」，為什麼他會有這種矛盾的感覺？',
                options: [
                    { text: '因為他忘記地球長什麼樣子了', isCorrect: false, explanation: '不可能忘記家鄉。' },
                    { text: '因為那是他的家鄉(熟悉)，但他從未以這種從外太空遙望的視角看過地球(陌生)', isCorrect: true, explanation: '正確！這種距離感與全新視角帶來了強烈的震撼。' },
                    { text: '因為地球被外星人改造了', isCorrect: false, explanation: '無稽之談。' },
                    { text: '因為他得了太空病，產生幻覺', isCorrect: false, explanation: '課文未提及。' }
                ]
            },
            {
                id: 'q_l6_mc_11', lessonId: 'L6', type: 'mcq', category: '修辭技巧', difficulty: 3,
                question: '「彷彿黑絲絨上一顆滾圓的夜明珠，燦爛奪目。」這是用來形容什麼景物？',
                options: [
                    { text: '月球表面', isCorrect: false, explanation: '月球表面是象灰與濃黑。' },
                    { text: '太陽', isCorrect: false, explanation: '太陽不會像夜明珠。' },
                    { text: '從太空中看到的地球', isCorrect: true, explanation: '正確！黑絲絨比喻漆黑的太空，夜明珠比喻發出藍綠光芒的地球。' },
                    { text: '阿姆斯壯的眼睛', isCorrect: false, explanation: '不是形容眼睛。' }
                ]
            },
            {
                id: 'q_l6_mc_12', lessonId: 'L6', type: 'mcq', category: '課文細節', difficulty: 1,
                question: '這場人類首次遠征月球的旅程，大約有多少人參與，又吸引了多少人關注？',
                options: [
                    { text: '四百人參與，六十萬人關注', isCorrect: false, explanation: '數字不對。' },
                    { text: '四十萬人參與，六億人關注', isCorrect: true, explanation: '正確！這是一項集結了無數人心血，且備受全球矚目的超級任務。' },
                    { text: '四萬人參與，六千萬人關注', isCorrect: false, explanation: '數字不對。' },
                    { text: '四千人參與，六百萬人關注', isCorrect: false, explanation: '數字不對。' }
                ]
            },
            {
                id: 'q_l6_mc_13', lessonId: 'L6', type: 'mcq', category: '人物特質', difficulty: 3,
                question: '阿姆斯壯回地球後說：「有一天，人類會飛回月球，撿起我掉下的攝影機，順便把我的腳印擦掉。」這句話展現了他什麼樣的特質？',
                options: [
                    { text: '極度自大，認為別人都比不上他', isCorrect: false, explanation: '這句話沒有自大的成分。' },
                    { text: '健忘，連攝影機都忘在月球上', isCorrect: false, explanation: '這只是個幽默的比喻。' },
                    { text: '幽默風趣，且對人類未來的太空探索充滿信心與期待', isCorrect: true, explanation: '正確！他用輕鬆的話語，鼓勵後人繼續超越他所留下的紀錄。' },
                    { text: '非常生氣別人破壞月球的環境', isCorrect: false, explanation: '他沒有生氣。' }
                ]
            },
            {
                id: 'q_l6_mc_14', lessonId: 'L6', type: 'mcq', category: '字義測驗', difficulty: 2,
                question: '「極目遠眺」中的「極目」是什麼意思？',
                options: [
                    { text: '非常生氣地看', isCorrect: false, explanation: '跟生氣無關。' },
                    { text: '戴著眼鏡看', isCorrect: false, explanation: '沒有這個意思。' },
                    { text: '盡力用眼睛看', isCorrect: true, explanation: '正確！「極」有竭盡的意思，極目就是窮盡眼力望向遠方。' },
                    { text: '閉上眼睛', isCorrect: false, explanation: '完全相反的意思。' }
                ]
            },
            {
                id: 'q_l6_mc_15', lessonId: 'L6', type: 'mcq', category: '字詞義測驗', difficulty: 3,
                question: '課文提到無重力訓練與身穿沉重太空衣對阿姆斯壯來說都成了「家常便飯」。請問「家常便飯」在此處的意思為何？',
                options: [
                    { text: '指太空人在外太空吃的食物很簡單', isCorrect: false, explanation: '不是指真的吃飯。' },
                    { text: '比喻經常發生、習以為常的事情', isCorrect: true, explanation: '正確！表示他對這些嚴酷的訓練已經非常習慣了。' },
                    { text: '指他每天都要回家吃飯', isCorrect: false, explanation: '不合文意。' },
                    { text: '形容訓練過程非常輕鬆', isCorrect: false, explanation: '訓練非常辛苦，只是他已經適應了。' }
                ]
            },
            {
                id: 'q_l6_mc_16', lessonId: 'L6', type: 'mcq', category: '國語常識', difficulty: 2,
                question: '課本注釋中提到的「世界協調時間」，英文縮寫是什麼？',
                options: [
                    { text: 'UFO', isCorrect: false, explanation: '這是不明飛行物。' },
                    { text: 'USA', isCorrect: false, explanation: '這是美國。' },
                    { text: 'UTC', isCorrect: true, explanation: '正確！這是世界上調節時鐘和時間的主要時間標準。' },
                    { text: 'USB', isCorrect: false, explanation: '這是電腦傳輸介面。' }
                ]
            },
            {
                id: 'q_l6_mc_17', lessonId: 'L6', type: 'mcq', category: '課文結構', difficulty: 4,
                question: '這篇文章從阿姆斯壯登月寫起，接著回顧他小時候對飛行的熱愛，再寫到他加入太空計畫與登月過程。這種寫作順序稱為什麼？',
                options: [
                    { text: '順敘法', isCorrect: false, explanation: '沒有完全按照時間先後。' },
                    { text: '倒敘法', isCorrect: true, explanation: '正確！先寫出最具代表性的高潮事件（登月），再倒回過去說明事情的起因與經過。' },
                    { text: '插敘法', isCorrect: false, explanation: '主要結構是倒敘。' },
                    { text: '隨機排列', isCorrect: false, explanation: '文章是有邏輯結構的。' }
                ]
            },
            {
                id: 'q_l6_mc_18', lessonId: 'L6', type: 'mcq', category: '人物特質', difficulty: 3,
                question: '從阿姆斯壯六歲對飛行著迷，十六歲考取執照，到後來挺過艱難的太空訓練。這一段經歷最能用下列哪一句成語來形容他？',
                options: [
                    { text: '半途而廢', isCorrect: false, explanation: '他堅持到底。' },
                    { text: '得過且過', isCorrect: false, explanation: '他非常積極努力。' },
                    { text: '持之以恆', isCorrect: true, explanation: '正確！形容他長久堅持夢想，不曾放棄。' },
                    { text: '見異思遷', isCorrect: false, explanation: '形容意志不堅，他剛好相反。' }
                ]
            },
            {
                id: 'q_l6_mc_19', lessonId: 'L6', type: 'mcq', category: '字詞義測驗', difficulty: 3,
                question: '「他用輕描淡寫的幽默話語，鼓勵後人繼續探索宇宙。」句中的「輕描淡寫」是什麼意思？',
                options: [
                    { text: '用力畫圖', isCorrect: false, explanation: '不是畫圖。' },
                    { text: '用生氣的語氣說話', isCorrect: false, explanation: '不是生氣。' },
                    { text: '形容言論或描寫簡單、不費力地帶過，不加渲染', isCorrect: true, explanation: '正確！代表他不把自己登月的偉大成就掛在嘴邊炫耀，而是用輕鬆的態度看待。' },
                    { text: '講話聲音很小', isCorrect: false, explanation: '不是指音量。' }
                ]
            },
            {
                id: 'q_l6_mc_20', lessonId: 'L6', type: 'mcq', category: '綜合理解', difficulty: 4,
                question: '關於《登月先鋒》一文的主旨，下列何者說明最恰當？',
                options: [
                    { text: '說明月球的環境非常惡劣，不適合人類居住', isCorrect: false, explanation: '這不是文章主旨。' },
                    { text: '記錄阿姆斯壯實現夢想的過程，並讚頌人類探索未知的勇氣與成就', isCorrect: true, explanation: '正確！文章透過阿姆斯壯的故事，帶出了人類太空探索史上的偉大里程碑。' },
                    { text: '教導讀者如何製作飛機模型與考取飛行執照', isCorrect: false, explanation: '這只是他小時候的經歷。' },
                    { text: '警告人類不要輕易上太空，以免發生危險', isCorrect: false, explanation: '文章結尾是鼓勵後人繼續探索。' }
                ]
            }
        ];

        
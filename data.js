// ============================================================================
// 六年級國語科段考複習系統 2.0 - 核心題庫 (data.js)
// 包含：第一課～第六課完整題庫 (174題) + 114學年六校期中考真題 (131題)
// ============================================================================

const LESSONS = [
    {
        "id": "L1",
        "no": 1,
        "hue": 250,
        "pages": "現代詩・戴望舒",
        "title": "第一課 在天晴了的時候",
        "shortTitle": "在天晴了的時候",
        "active": true
    },
    {
        "id": "L2",
        "no": 2,
        "hue": 200,
        "pages": "記敘文・馮驥才",
        "title": "第二課 珍珠鳥",
        "shortTitle": "珍珠鳥",
        "active": true
    },
    {
        "id": "L3",
        "no": 3,
        "hue": 160,
        "pages": "七言律詩・杜甫",
        "title": "第三課 客至",
        "shortTitle": "客至",
        "active": true
    },
    {
        "id": "L4",
        "no": 4,
        "hue": 28,
        "pages": "記敘文・運動家精神",
        "title": "第四課 贏得喝采的輸家",
        "shortTitle": "贏得喝采的輸家",
        "active": true
    },
    {
        "id": "L5",
        "no": 5,
        "hue": 330,
        "pages": "說明文・職業祕密",
        "title": "第五課 哇！原來如此",
        "shortTitle": "哇！原來如此",
        "active": true
    },
    {
        "id": "L6",
        "no": 6,
        "hue": 275,
        "pages": "記敘文・阿姆斯壯",
        "title": "第六課 登月先鋒",
        "shortTitle": "登月先鋒",
        "active": true
    },
    {
        "id": "EXAM_MID1",
        "no": 7,
        "hue": 38,
        "pages": "六校期中真題",
        "title": "第一次段考真題",
        "shortTitle": "第一次段考真題",
        "active": true,
        "isExam": true
    }
];

// 相容數學網頁 2.0 欄位別名
const UNITS = LESSONS;

const QUESTION_BANK = [
    {
        "id": "q_l1_hw_char_1",
        "lessonId": "L1",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 2,
        "question": "給雨潤過的泥路，一下子洗淨了[[國字:ㄔㄣˊ:塵]][[國字:ㄍㄡˋ:垢]]。",
        "correctAnswer": "塵垢",
        "explanation": "【解說】「塵垢」指灰塵和汙垢。注意「垢」是土部，不要寫成水部喔！",
        "unitId": "L1",
        "batch": "寫國字",
        "trap": "「塵垢」指灰塵和汙垢。注意「垢」是土部，不要寫成水部喔！"
    },
    {
        "id": "q_l1_hw_char_2",
        "lessonId": "L1",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "美麗的[[國字:ㄈㄥˋ:鳳]]蝶兒，把智慧書[[國字:ㄧㄝˋ:頁]][[國字:ㄆㄨˋ:曝]]露在陽光下。",
        "correctAnswer": "鳳、頁、曝",
        "explanation": "【解說】「曝」指在陽光下晒，注意左邊是日部。",
        "unitId": "L1",
        "batch": "寫國字",
        "trap": "「曝」指在陽光下晒，注意左邊是日部。"
    },
    {
        "id": "q_l1_hw_char_3",
        "lessonId": "L1",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 4,
        "question": "新陽推開了陰[[國字:ㄇㄞˊ:霾]]，我們[[國字:ㄕㄜˋ:涉]]過溪流，看見雲的腳[[國字:ㄐㄧ:跡]]。",
        "correctAnswer": "霾、涉、跡",
        "explanation": "【解說】「陰霾」的霾是雨部。「涉水」指從水裡走過去。「腳跡」就是足跡。",
        "unitId": "L1",
        "batch": "寫國字",
        "trap": "「陰霾」的霾是雨部。「涉水」指從水裡走過去。「腳跡」就是足跡。"
    },
    {
        "id": "q_l1_hw_char_4",
        "lessonId": "L1",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 2,
        "question": "走在泥路上感覺十分涼[[國字:ㄕㄨㄤˇ:爽]]，溪水在溫風中[[國字:ㄩㄣˋ:暈]]皺了。",
        "correctAnswer": "爽、暈",
        "explanation": "【解說】「爽」要注意筆順。「暈」皺是指水面產生了波紋，是日部。",
        "unitId": "L1",
        "batch": "寫國字",
        "trap": "「爽」要注意筆順。「暈」皺是指水面產生了波紋，是日部。"
    },
    {
        "id": "q_l1_hw_py_1",
        "lessonId": "L1",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 3,
        "question": "溪水在溫風中[[注音:暈:ㄩㄣˋ]]皺了。",
        "correctAnswer": "ㄩㄣˋ",
        "explanation": "【解說】「暈皺」是指水面產生波紋，讀四聲「ㄩㄣˋ」。不要念成頭暈的「ㄩㄣ」！",
        "unitId": "L1",
        "batch": "寫注音",
        "trap": "「暈皺」是指水面產生波紋，讀四聲「ㄩㄣˋ」。不要念成頭暈的「ㄩㄣ」！"
    },
    {
        "id": "q_l1_hw_py_2",
        "lessonId": "L1",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 4,
        "question": "把智慧書頁，[[注音:曝:ㄆㄨˋ]]著陽光一開一收。",
        "correctAnswer": "ㄆㄨˋ",
        "explanation": "【解說】「曝」指在陽光下晒，讀作「ㄆㄨˋ」。很容易念錯成暴，要特別注意！",
        "unitId": "L1",
        "batch": "寫注音",
        "trap": "「曝」指在陽光下晒，讀作「ㄆㄨˋ」。很容易念錯成暴，要特別注意！"
    },
    {
        "id": "q_l1_hw_py_3",
        "lessonId": "L1",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 3,
        "question": "新陽推開了陰[[注音:霾:ㄇㄞˊ]]。",
        "correctAnswer": "ㄇㄞˊ",
        "explanation": "【解說】「陰霾」讀作第二聲「ㄇㄞˊ」，形容天氣陰沉。",
        "unitId": "L1",
        "batch": "寫注音",
        "trap": "「陰霾」讀作第二聲「ㄇㄞˊ」，形容天氣陰沉。"
    },
    {
        "id": "q_l1_hw_py_4",
        "lessonId": "L1",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 2,
        "question": "一下子洗淨了塵[[注音:垢:ㄍㄡˋ]]。",
        "correctAnswer": "ㄍㄡˋ",
        "explanation": "【解說】「塵垢」讀作第四聲「ㄍㄡˋ」，指灰塵和汙垢。",
        "unitId": "L1",
        "batch": "寫注音",
        "trap": "「塵垢」讀作第四聲「ㄍㄡˋ」，指灰塵和汙垢。"
    },
    {
        "id": "q_l1_mc_1",
        "lessonId": "L1",
        "type": "mcq",
        "category": "改錯字",
        "difficulty": 1,
        "question": "下列哪個詞語的字形是「完全正確」的？",
        "options": [
            {
                "text": "洗淨塵后",
                "isCorrect": false,
                "explanation": "錯誤。「后」應改為「垢」(土部)。"
            },
            {
                "text": "涼爽微風",
                "isCorrect": true,
                "explanation": "正確！「爽」字筆畫正確。"
            },
            {
                "text": "陰埋天氣",
                "isCorrect": false,
                "explanation": "錯誤。「埋」應改為「霾」(雨部)。"
            },
            {
                "text": "雲的腳積",
                "isCorrect": false,
                "explanation": "錯誤。「積」應改為「跡」(足部)。"
            }
        ],
        "unitId": "L1",
        "batch": "原本題庫",
        "trap": "「爽」字筆畫正確。"
    },
    {
        "id": "q_l1_mc_2",
        "lessonId": "L1",
        "type": "mcq",
        "category": "課文理解",
        "difficulty": 3,
        "question": "「把牠的飾彩的智慧書頁，曝著陽光一開一收」，詩中的「智慧書頁」指的是什麼？",
        "options": [
            {
                "text": "放在泥路上的書本",
                "isCorrect": false,
                "explanation": "這首詩描寫自然景物，沒有提到真正的書本。"
            },
            {
                "text": "樹上飄落的葉子",
                "isCorrect": false,
                "explanation": "葉子不會自己「一開一收」。"
            },
            {
                "text": "蝴蝶美麗的翅膀",
                "isCorrect": true,
                "explanation": "正確！作者發揮想像力，將鳳蝶有斑紋的翅膀比喻為裝飾著色彩的書頁。"
            },
            {
                "text": "地上的水窪",
                "isCorrect": false,
                "explanation": "水窪不會像書頁一樣開收。"
            }
        ],
        "unitId": "L1",
        "batch": "原本題庫",
        "trap": "作者發揮想像力，將鳳蝶有斑紋的翅膀比喻為裝飾著色彩的書頁。"
    },
    {
        "id": "q_l1_mc_3",
        "lessonId": "L1",
        "type": "mcq",
        "category": "意象比較",
        "difficulty": 4,
        "question": "比較「在天晴的時候」與「在天晴『了』的時候」，多了一個「了」字，帶給讀者什麼不同的感受？",
        "options": [
            {
                "text": "感覺時間已經很晚了，天快黑了",
                "isCorrect": false,
                "explanation": "與時間早晚無關。"
            },
            {
                "text": "帶有「剛下過雨，才剛轉晴」的濕潤與新鮮感",
                "isCorrect": true,
                "explanation": "正確！「了」表現出狀態的轉變，充滿雨後初晴的驚喜。"
            },
            {
                "text": "表示天氣變得非常炎熱",
                "isCorrect": false,
                "explanation": "剛下過雨通常較涼爽。"
            },
            {
                "text": "沒有任何不同，只是為了押韻",
                "isCorrect": false,
                "explanation": "在詩詞中，一字之差往往意境大不相同。"
            }
        ],
        "unitId": "L1",
        "batch": "原本題庫",
        "trap": "「了」表現出狀態的轉變，充滿雨後初晴的驚喜。"
    },
    {
        "id": "q_l1_mc_new_1",
        "lessonId": "L1",
        "type": "mcq",
        "category": "語文常識",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "「和天氣有關的四字語詞」中，哪一個最適合用來形容「夏天太陽猛烈，天氣非常炎熱」？",
        "options": [
            {
                "text": "火傘高張",
                "isCorrect": true,
                "explanation": "正確！「火傘高張」形容烈日當空，非常炎熱。"
            },
            {
                "text": "碧空如洗",
                "isCorrect": false,
                "explanation": "形容天空非常晴朗，像洗過一樣乾淨。"
            },
            {
                "text": "滴水成冰",
                "isCorrect": false,
                "explanation": "形容天氣極度寒冷。"
            },
            {
                "text": "陰雨綿綿",
                "isCorrect": false,
                "explanation": "形容連續不斷地下雨。"
            }
        ],
        "unitId": "L1",
        "trap": "「火傘高張」形容烈日當空，非常炎熱。"
    },
    {
        "id": "q_l1_mc_new_2",
        "lessonId": "L1",
        "type": "mcq",
        "category": "語文常識",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "「和天氣有關的四字語詞」中，「滴水成冰」適合用來形容什麼樣的天氣狀況？",
        "options": [
            {
                "text": "下冰雹的惡劣天氣",
                "isCorrect": false,
                "explanation": "主要是形容溫度低，不一定是下冰雹。"
            },
            {
                "text": "氣候極度寒冷",
                "isCorrect": true,
                "explanation": "正確！水滴下去馬上結冰，形容非常寒冷。"
            },
            {
                "text": "雨水落在冰塊上",
                "isCorrect": false,
                "explanation": "字面上的誤解。"
            },
            {
                "text": "形容人很冷酷",
                "isCorrect": false,
                "explanation": "這是形容天氣，不是形容個性。"
            }
        ],
        "unitId": "L1",
        "trap": "水滴下去馬上結冰，形容非常寒冷。"
    },
    {
        "id": "q_l1_mc_new_3",
        "lessonId": "L1",
        "type": "mcq",
        "category": "標點符號",
        "difficulty": 3,
        "batch": "新題庫擴充",
        "question": "課文中「到小徑中去走走吧！在天晴了的時候：赤著腳，攜著手...」使用「冒號（：）」的主要功用是什麼？",
        "options": [
            {
                "text": "表示說話的內容",
                "isCorrect": false,
                "explanation": "這裡沒有人講話。"
            },
            {
                "text": "總起下文，帶出後面一連串的行為列舉",
                "isCorrect": true,
                "explanation": "正確！冒號在這裡用來提示讀者，後面要列舉出「在天晴了的時候」可以做的各種動作。"
            },
            {
                "text": "表示聲音的延長",
                "isCorrect": false,
                "explanation": "那是破折號的功能。"
            },
            {
                "text": "補充說明前面的名詞",
                "isCorrect": false,
                "explanation": "那是夾注號的功能。"
            }
        ],
        "unitId": "L1",
        "trap": "冒號在這裡用來提示讀者，後面要列舉出「在天晴了的時候」可以做的各種動作。"
    },
    {
        "id": "q_l1_mc_new_4",
        "lessonId": "L1",
        "type": "mcq",
        "category": "標點符號",
        "difficulty": 4,
        "batch": "新題庫擴充",
        "question": "「看山間移動的暗綠 ——雲的腳跡—— 它也在閒遊。」句中的「—— ——」稱為什麼符號？有什麼功用？",
        "options": [
            {
                "text": "破折號，表示語氣的轉折",
                "isCorrect": false,
                "explanation": "在這裡不是用來轉折。"
            },
            {
                "text": "夾注號，用來補充說明前面的「山間移動的暗綠」",
                "isCorrect": true,
                "explanation": "正確！夾在中間用來告訴讀者，暗綠就是雲的影子。"
            },
            {
                "text": "刪節號，表示話還沒說完",
                "isCorrect": false,
                "explanation": "刪節號是六個點。"
            },
            {
                "text": "私名號，標示特別的名稱",
                "isCorrect": false,
                "explanation": "私名號是一條直線。"
            }
        ],
        "unitId": "L1",
        "trap": "夾在中間用來告訴讀者，暗綠就是雲的影子。"
    },
    {
        "id": "q_l1_mc_new_5",
        "lessonId": "L1",
        "type": "mcq",
        "category": "修辭技巧",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "「不再膽怯的小白菊，慢慢的抬起它們的頭」這句詩使用了哪一種修辭法？",
        "options": [
            {
                "text": "擬人 (轉化)",
                "isCorrect": true,
                "explanation": "正確！把小白菊賦予了人類「膽怯」與「抬頭」的動作，讓它看起來更有生命力。"
            },
            {
                "text": "譬喻",
                "isCorrect": false,
                "explanation": "沒有使用「像」或「如」來比喻成其他東西。"
            },
            {
                "text": "誇飾",
                "isCorrect": false,
                "explanation": "沒有過度誇大。"
            },
            {
                "text": "類疊",
                "isCorrect": false,
                "explanation": "雖然有「慢慢的」，但主要考點是整句的擬人。"
            }
        ],
        "unitId": "L1",
        "trap": "把小白菊賦予了人類「膽怯」與「抬頭」的動作，讓它看起來更有生命力。"
    },
    {
        "id": "q_l1_mc_new_6",
        "lessonId": "L1",
        "type": "mcq",
        "category": "課文理解",
        "difficulty": 3,
        "batch": "新題庫擴充",
        "question": "詩中提到「雲的腳跡」其實是指什麼自然現象？",
        "options": [
            {
                "text": "天空中雲朵被風吹散的痕跡",
                "isCorrect": false,
                "explanation": "不是天空中的現象。"
            },
            {
                "text": "山間移動的暗綠，也就是雲的影子在山林間移動的樣子",
                "isCorrect": true,
                "explanation": "正確！雲遮住陽光在山上形成的陰影，被詩人浪漫地想像成雲的腳印。"
            },
            {
                "text": "地上的水窪倒映出雲的形狀",
                "isCorrect": false,
                "explanation": "雖然地上有水窪，但這不是雲的腳跡。"
            },
            {
                "text": "清晨山上的雲霧",
                "isCorrect": false,
                "explanation": "不是雲霧。"
            }
        ],
        "unitId": "L1",
        "trap": "雲遮住陽光在山上形成的陰影，被詩人浪漫地想像成雲的腳印。"
    },
    {
        "id": "q_l1_mc_new_7",
        "lessonId": "L1",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "根據課本的插圖（圖片意象），以下哪一個事物**沒有**出現在課本的畫面中？",
        "options": [
            {
                "text": "在水窪中玩耍的小狗",
                "isCorrect": true,
                "explanation": "正確！畫面中只有爺爺和小女孩，沒有畫小狗。"
            },
            {
                "text": "爺爺牽著小女孩",
                "isCorrect": false,
                "explanation": "這有出現在插圖中。"
            },
            {
                "text": "盛開的小白菊與飛舞的鳳蝶",
                "isCorrect": false,
                "explanation": "這有出現在插圖中。"
            },
            {
                "text": "閃爍著微藍色反光的水窪",
                "isCorrect": false,
                "explanation": "這有出現在插圖中。"
            }
        ],
        "unitId": "L1",
        "trap": "畫面中只有爺爺和小女孩，沒有畫小狗。"
    },
    {
        "id": "q_l1_mc_new_8",
        "lessonId": "L1",
        "type": "mcq",
        "category": "字詞義測驗",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "「一下子洗淨了塵垢」中，「塵垢」的意思為何？",
        "options": [
            {
                "text": "心理的煩惱",
                "isCorrect": false,
                "explanation": "在這裡是具體的自然景物，不是抽象的心理狀態。"
            },
            {
                "text": "灰塵與汙垢",
                "isCorrect": true,
                "explanation": "正確！指雨水把草葉上的灰塵都洗乾淨了。"
            },
            {
                "text": "陳年的往事",
                "isCorrect": false,
                "explanation": "意思不對。"
            },
            {
                "text": "泥濘的道路",
                "isCorrect": false,
                "explanation": "塵垢指附著在物體上的髒污。"
            }
        ],
        "unitId": "L1",
        "trap": "指雨水把草葉上的灰塵都洗乾淨了。"
    },
    {
        "id": "q_l1_mc_new_9",
        "lessonId": "L1",
        "type": "mcq",
        "category": "核心主旨",
        "difficulty": 3,
        "batch": "新題庫擴充",
        "question": "《在天晴了的時候》這首詩主要想表達什麼情感？",
        "options": [
            {
                "text": "感嘆時光飛逝，童年不再",
                "isCorrect": false,
                "explanation": "詩中充滿喜悅，沒有感嘆時光。"
            },
            {
                "text": "體會人與自然的關係，感受雨後大自然帶來的美好與生機",
                "isCorrect": true,
                "explanation": "正確！透過各種感官描寫，帶領讀者享受大自然雨過天晴的清新。"
            },
            {
                "text": "描述氣候變遷帶來的影響",
                "isCorrect": false,
                "explanation": "這是一首抒情詩，不是環境保育文章。"
            },
            {
                "text": "表達對鄉下生活的不適應",
                "isCorrect": false,
                "explanation": "詩人非常享受這種親近自然的時刻。"
            }
        ],
        "unitId": "L1",
        "trap": "透過各種感官描寫，帶領讀者享受大自然雨過天晴的清新。"
    },
    {
        "id": "q_l1_mc_new_10",
        "lessonId": "L1",
        "type": "mcq",
        "category": "字詞義測驗",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "「溪水在溫風中暈皺」句中的「暈皺」是什麼意思？",
        "options": [
            {
                "text": "頭暈目眩",
                "isCorrect": false,
                "explanation": "不是形容人的身體狀況。"
            },
            {
                "text": "水面因為微風吹拂而產生波紋",
                "isCorrect": true,
                "explanation": "正確！形容風吹過水面引起的細小波浪。"
            },
            {
                "text": "衣服起了皺褶",
                "isCorrect": false,
                "explanation": "這是形容水面，不是衣服。"
            },
            {
                "text": "臉上長了皺紋",
                "isCorrect": false,
                "explanation": "與臉部無關。"
            }
        ],
        "unitId": "L1",
        "trap": "形容風吹過水面引起的細小波浪。"
    },
    {
        "id": "q_l1_mc_new_11",
        "lessonId": "L1",
        "type": "mcq",
        "category": "字詞義測驗",
        "difficulty": 3,
        "batch": "新題庫擴充",
        "question": "「新陽推開了陰霾」中，「陰霾」的意思為何？",
        "options": [
            {
                "text": "指陰沉、昏暗的天氣或雲霧",
                "isCorrect": true,
                "explanation": "正確！陽光出來，驅散了原本陰暗的天氣。"
            },
            {
                "text": "被埋在土裡的東西",
                "isCorrect": false,
                "explanation": "字義錯誤。"
            },
            {
                "text": "下雪的天氣",
                "isCorrect": false,
                "explanation": "陰霾不一定是下雪。"
            },
            {
                "text": "傍晚的夕陽",
                "isCorrect": false,
                "explanation": "新陽是指初升或剛出現的太陽，陰霾是壞天氣。"
            }
        ],
        "unitId": "L1",
        "trap": "陽光出來，驅散了原本陰暗的天氣。"
    },
    {
        "id": "q_l1_mc_new_12",
        "lessonId": "L1",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "在詩的第二段中，作者建議我們在天晴了的時候，可以做什麼事來親近大自然？",
        "options": [
            {
                "text": "在樹下睡午覺",
                "isCorrect": false,
                "explanation": "詩中沒有提到睡覺。"
            },
            {
                "text": "赤著腳，攜著手，涉過溪流",
                "isCorrect": true,
                "explanation": "正確！這些動作充滿了親近大自然的快樂。"
            },
            {
                "text": "採集野花做成標本",
                "isCorrect": false,
                "explanation": "詩中沒有採花的動作。"
            },
            {
                "text": "抓幾隻蝴蝶回家養",
                "isCorrect": false,
                "explanation": "詩人只是欣賞蝴蝶閒遊，沒有去抓。"
            }
        ],
        "unitId": "L1",
        "trap": "這些動作充滿了親近大自然的快樂。"
    },
    {
        "id": "q_l1_mc_new_13",
        "lessonId": "L1",
        "type": "mcq",
        "category": "成語應用",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "「陰雨綿綿」這個四字語詞適合用來形容什麼狀況？",
        "options": [
            {
                "text": "連續不斷地下雨，天氣潮濕",
                "isCorrect": true,
                "explanation": "正確！形容雨下個不停的樣子。"
            },
            {
                "text": "雨滴結成冰塊",
                "isCorrect": false,
                "explanation": "這是「滴水成冰」。"
            },
            {
                "text": "天空非常晴朗",
                "isCorrect": false,
                "explanation": "這是「碧空如洗」或「晴空萬里」。"
            },
            {
                "text": "像火爐一樣熱",
                "isCorrect": false,
                "explanation": "這是「火傘高張」。"
            }
        ],
        "unitId": "L1",
        "trap": "形容雨下個不停的樣子。"
    },
    {
        "id": "q_l1_mc_new_14",
        "lessonId": "L1",
        "type": "mcq",
        "category": "國學常識",
        "difficulty": 3,
        "batch": "新題庫擴充",
        "question": "本課作者為「戴望舒」，《在天晴了的時候》是一首什麼體裁的文學作品？",
        "options": [
            {
                "text": "絕句",
                "isCorrect": false,
                "explanation": "絕句只有四句，有嚴格字數限制。"
            },
            {
                "text": "現代詩 (新詩)",
                "isCorrect": true,
                "explanation": "正確！這是一首沒有嚴格格律限制的現代詩。"
            },
            {
                "text": "律詩",
                "isCorrect": false,
                "explanation": "律詩有八句，有嚴格對仗押韻。"
            },
            {
                "text": "文言文",
                "isCorrect": false,
                "explanation": "這是用白話文寫成的。"
            }
        ],
        "unitId": "L1",
        "trap": "這是一首沒有嚴格格律限制的現代詩。"
    },
    {
        "id": "q_l1_mc_new_15",
        "lessonId": "L1",
        "type": "mcq",
        "category": "修辭技巧",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "「新陽推開了陰霾」這句話使用了哪一種修辭？",
        "options": [
            {
                "text": "譬喻",
                "isCorrect": false,
                "explanation": "沒有使用像或如。"
            },
            {
                "text": "擬人 (轉化)",
                "isCorrect": true,
                "explanation": "正確！賦予陽光人類「推開」的動作，讓畫面更有力量。"
            },
            {
                "text": "類疊",
                "isCorrect": false,
                "explanation": "沒有重複的字詞。"
            },
            {
                "text": "排比",
                "isCorrect": false,
                "explanation": "沒有相似句型排列。"
            }
        ],
        "unitId": "L1",
        "trap": "賦予陽光人類「推開」的動作，讓畫面更有力量。"
    },
    {
        "id": "q_l1_mc_new_16",
        "lessonId": "L1",
        "type": "mcq",
        "category": "寫作技巧",
        "difficulty": 4,
        "batch": "新題庫擴充",
        "question": "為什麼作者要寫「試試寒，試試暖，然後一瓣瓣的綻透」？",
        "options": [
            {
                "text": "強調天氣太冷，花朵快被凍死了",
                "isCorrect": false,
                "explanation": "天氣已經放晴了。"
            },
            {
                "text": "生動描寫出花朵在雨後小心翼翼、逐漸開放的美麗姿態",
                "isCorrect": true,
                "explanation": "正確！用「試試」兩個字，將小白菊開花的過程寫得生動又惹人憐愛。"
            },
            {
                "text": "形容作者在測試水溫",
                "isCorrect": false,
                "explanation": "這是描寫小白菊，不是作者。"
            },
            {
                "text": "表示花朵不知道該不該開花",
                "isCorrect": false,
                "explanation": "主要是在表現開花時細微的動態感。"
            }
        ],
        "unitId": "L1",
        "trap": "用「試試」兩個字，將小白菊開花的過程寫得生動又惹人憐愛。"
    },
    {
        "id": "q_l1_mc_new_17",
        "lessonId": "L1",
        "type": "mcq",
        "category": "語氣判斷",
        "difficulty": 3,
        "batch": "新題庫擴充",
        "question": "「到小徑中去走走吧！」這句話帶有什麼樣的語氣？",
        "options": [
            {
                "text": "命令與責備",
                "isCorrect": false,
                "explanation": "沒有強迫的意思。"
            },
            {
                "text": "期待與邀請的語氣",
                "isCorrect": true,
                "explanation": "正確！充滿了想與人分享大自然美好的熱情。"
            },
            {
                "text": "悲傷與無奈",
                "isCorrect": false,
                "explanation": "詩人心情很好。"
            },
            {
                "text": "驚訝與懷疑",
                "isCorrect": false,
                "explanation": "語意不符。"
            }
        ],
        "unitId": "L1",
        "trap": "充滿了想與人分享大自然美好的熱情。"
    },
    {
        "id": "q_l2_hw_char_1",
        "lessonId": "L2",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "窗前[[國字:ㄗㄞ:栽]]種了異常[[國字:ㄇㄠˋ:茂]]盛的植栽，長長的串串[[國字:ㄊㄥˊ:藤]][[國字:ㄇㄢˋ:蔓]]遮蓋在鳥籠上。",
        "correctAnswer": "栽、茂、藤、蔓",
        "explanation": "【解說】這幾個字都跟植物有關。注意「栽」是木部，「藤」與「蔓」都是艸部。",
        "unitId": "L2",
        "batch": "寫國字",
        "trap": "這幾個字都跟植物有關。注意「栽」是木部，「藤」與「蔓」都是艸部。"
    },
    {
        "id": "q_l2_hw_char_2",
        "lessonId": "L2",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "我很少[[國字:ㄒㄧㄢ:掀]]開葉片，連[[國字:ㄊㄧㄢ:添]]食加水也不直視，以[[國字:ㄇㄧㄢˇ:免]]驚動牠們，我們便漸漸熟[[國字:ㄒㄧ:悉]]了。",
        "correctAnswer": "掀、添、免、悉",
        "explanation": "【解說】「掀」開(手部)、「添」加(水部)、「熟悉」的悉下面是心部。",
        "unitId": "L2",
        "batch": "寫國字",
        "trap": "「掀」開(手部)、「添」加(水部)、「熟悉」的悉下面是心部。"
    },
    {
        "id": "q_l2_hw_char_3",
        "lessonId": "L2",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 4,
        "question": "小傢伙由籠子縫[[國字:ㄒㄧˋ:隙]]鑽出身，[[國字:ㄕㄤˋ:尚]]未生出白點，一會兒落在書[[國字:ㄍㄨㄟˋ:櫃]]頂上。",
        "correctAnswer": "隙、尚、櫃",
        "explanation": "【解說】「縫隙」的隙(阜部，左耳旁)筆畫多要小心。「櫃」是木部。",
        "unitId": "L2",
        "batch": "寫國字",
        "trap": "「縫隙」的隙(阜部，左耳旁)筆畫多要小心。「櫃」是木部。"
    },
    {
        "id": "q_l2_hw_char_4",
        "lessonId": "L2",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "牠跳到[[國字:ㄍㄠˇ:稿]]紙上，啄著我[[國字:ㄓㄢˋ:顫]]動的筆尖。天色入[[國字:ㄇㄨˋ:暮]]，牠才飛回籠子。",
        "correctAnswer": "稿、顫、暮",
        "explanation": "【解說】「稿紙」的稿(禾部)、「顫動」的顫(頁部，筆畫非常多)、「日暮」的暮(日部)。",
        "unitId": "L2",
        "batch": "寫國字",
        "trap": "「稿紙」的稿(禾部)、「顫動」的顫(頁部，筆畫非常多)、「日暮」的暮(日部)。"
    },
    {
        "id": "q_l2_hw_char_5",
        "lessonId": "L2",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 4,
        "question": "牠趴在我[[國字:ㄐㄧㄢ:肩]]上，紅腳被[[國字:ㄖㄨㄥˊ:絨]]毛蓋住，還[[國字:ㄗㄚ:咂]][[國字:ㄗㄚ:咂]]嘴。我筆尖一動流[[國字:ㄒㄧㄝˋ:瀉]]下感受：信[[國字:ㄌㄞˋ:賴]]能創造美好。",
        "correctAnswer": "肩、絨、咂、瀉、賴",
        "explanation": "【解說】「絨毛」(糸部)、「咂嘴」(口部)、「流瀉」(水部，像水一樣流下)、「信賴」(貝部)。",
        "unitId": "L2",
        "batch": "寫國字",
        "trap": "「絨毛」(糸部)、「咂嘴」(口部)、「流瀉」(水部，像水一樣流下)、「信賴」(貝部)。"
    },
    {
        "id": "q_l2_hw_py_1",
        "lessonId": "L2",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 3,
        "question": "長長的串串藤[[注音:蔓:ㄇㄢˋ]]。",
        "correctAnswer": "ㄇㄢˋ",
        "explanation": "【解說】藤「蔓」讀作「ㄇㄢˋ」，不要念成「ㄨㄢˋ」或「ㄇㄢˊ」喔！",
        "unitId": "L2",
        "batch": "寫注音",
        "trap": "藤「蔓」讀作「ㄇㄢˋ」，不要念成「ㄨㄢˋ」或「ㄇㄢˊ」喔！"
    },
    {
        "id": "q_l2_hw_py_2",
        "lessonId": "L2",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 3,
        "question": "由籠子縫[[注音:隙:ㄒㄧˋ]]鑽出身。",
        "correctAnswer": "ㄒㄧˋ",
        "explanation": "【解說】縫「隙」讀作四聲「ㄒㄧˋ」，常常有人誤念成一聲，要特別注意。",
        "unitId": "L2",
        "batch": "寫注音",
        "trap": "縫「隙」讀作四聲「ㄒㄧˋ」，常常有人誤念成一聲，要特別注意。"
    },
    {
        "id": "q_l2_hw_py_3",
        "lessonId": "L2",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 4,
        "question": "啄著我[[注音:顫:ㄓㄢˋ]]動的筆尖。",
        "correctAnswer": "ㄓㄢˋ",
        "explanation": "【解說】「顫」動讀作四聲「ㄓㄢˋ」，形容細微的抖動。",
        "unitId": "L2",
        "batch": "寫注音",
        "trap": "「顫」動讀作四聲「ㄓㄢˋ」，形容細微的抖動。"
    },
    {
        "id": "q_l2_hw_py_4",
        "lessonId": "L2",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 3,
        "question": "這小傢伙還[[注音:咂:ㄗㄚ]]咂嘴。",
        "correctAnswer": "ㄗㄚ",
        "explanation": "【解說】「咂」嘴讀作一聲「ㄗㄚ」，形容嘴巴開合發出聲音的樣子。",
        "unitId": "L2",
        "batch": "寫注音",
        "trap": "「咂」嘴讀作一聲「ㄗㄚ」，形容嘴巴開合發出聲音的樣子。"
    },
    {
        "id": "q_l2_hw_py_5",
        "lessonId": "L2",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 2,
        "question": "流[[注音:瀉:ㄒㄧㄝˋ]]下一時的感受。",
        "correctAnswer": "ㄒㄧㄝˋ",
        "explanation": "【解說】流「瀉」讀作四聲「ㄒㄧㄝˋ」。",
        "unitId": "L2",
        "batch": "寫注音",
        "trap": "流「瀉」讀作四聲「ㄒㄧㄝˋ」。"
    },
    {
        "id": "q_l2_mc_1",
        "lessonId": "L2",
        "type": "mcq",
        "category": "課外延伸",
        "difficulty": 2,
        "question": "根據課本知識補充，關於「珍珠鳥」的敘述，下列何者**錯誤**？",
        "options": [
            {
                "text": "原產於澳洲東部和印尼東部",
                "isCorrect": false,
                "explanation": "這是正確的敘述。"
            },
            {
                "text": "學名為斑胸草雀",
                "isCorrect": false,
                "explanation": "這是正確的敘述。"
            },
            {
                "text": "因為眼睛長得像珍珠而得名",
                "isCorrect": true,
                "explanation": "錯誤！是因為「胸部下方兩側布有白色小圓點，狀如珍珠」而得名，不是因為眼睛。"
            },
            {
                "text": "現今已是常見的人工繁育鳥類",
                "isCorrect": false,
                "explanation": "這是正確的敘述。"
            }
        ],
        "unitId": "L2",
        "batch": "原本題庫",
        "trap": "錯誤！是因為「胸部下方兩側布有白色小圓點，狀如珍珠」而得名，不是因為眼睛。"
    },
    {
        "id": "q_l2_mc_2",
        "lessonId": "L2",
        "type": "mcq",
        "category": "改錯字",
        "difficulty": 2,
        "question": "下列哪一個句子中**沒有**錯別字？",
        "options": [
            {
                "text": "小鳥躲進憂深的樹林裡。",
                "isCorrect": false,
                "explanation": "「憂」深應改為「幽」深。"
            },
            {
                "text": "這小傢伙竟趴在我的肩頭上睡著了。",
                "isCorrect": true,
                "explanation": "正確！沒有錯別字。"
            },
            {
                "text": "作者在槁紙上寫下感受。",
                "isCorrect": false,
                "explanation": "「槁」紙應改為「稿」紙(禾部)。"
            },
            {
                "text": "牠在書架上神氣十族。",
                "isCorrect": false,
                "explanation": "神氣十「族」應改為「足」。"
            }
        ],
        "unitId": "L2",
        "batch": "原本題庫",
        "trap": "沒有錯別字。"
    },
    {
        "id": "q_l2_mc_3",
        "lessonId": "L2",
        "type": "mcq",
        "category": "字詞義測驗",
        "difficulty": 2,
        "question": "在「這小傢伙竟趴在我的肩頭上」一句中，「傢伙」在這裡的意思是什麼？",
        "options": [
            {
                "text": "對人輕視或罵人的話",
                "isCorrect": false,
                "explanation": "在這裡作者是非常喜愛小鳥的，並無輕視之意。"
            },
            {
                "text": "對人或動物親密、開玩笑的稱呼",
                "isCorrect": true,
                "explanation": "正確！這是課本注釋的解釋，表示作者與小鳥關係非常親暱。"
            },
            {
                "text": "指武器或工具",
                "isCorrect": false,
                "explanation": "雖然「傢伙」有工具的意思，但在這句不通。"
            },
            {
                "text": "討厭的動物",
                "isCorrect": false,
                "explanation": "與文意完全相反。"
            }
        ],
        "unitId": "L2",
        "batch": "原本題庫",
        "trap": "這是課本注釋的解釋，表示作者與小鳥關係非常親暱。"
    },
    {
        "id": "q_l2_mc_4",
        "lessonId": "L2",
        "type": "mcq",
        "category": "寫作技巧",
        "difficulty": 4,
        "question": "課本「加油小站」提到「細膩的連續動作描寫」，這種寫作技巧的效果最接近下列哪一種比喻？",
        "options": [
            {
                "text": "快轉播放",
                "isCorrect": false,
                "explanation": "快轉會忽略細節。"
            },
            {
                "text": "慢速播放",
                "isCorrect": true,
                "explanation": "正確！將連續動作切分為好幾個細微的畫面一一描寫(如：挨近→蹦上→俯下喝茶→偏臉看)，就像慢速播放，能讓內容更鮮活。"
            },
            {
                "text": "廣角鏡頭",
                "isCorrect": false,
                "explanation": "廣角鏡用於描寫大範圍風景。"
            },
            {
                "text": "倒敘法",
                "isCorrect": false,
                "explanation": "倒敘是時間順序的變化，與連續動作描寫無關。"
            }
        ],
        "unitId": "L2",
        "batch": "原本題庫",
        "trap": "將連續動作切分為好幾個細微的畫面一一描寫(如：挨近→蹦上→俯下喝茶→偏臉看)，就像慢速播放，能讓內容更鮮活。"
    },
    {
        "id": "q_l2_mc_5",
        "lessonId": "L2",
        "type": "mcq",
        "category": "空間與關係",
        "difficulty": 4,
        "question": "根據課本的「人與鳥的關係圖表」，小珍珠鳥的「活動空間變化」代表了什麼意義？",
        "options": [
            {
                "text": "空間距離越近，代表牠越飢餓",
                "isCorrect": false,
                "explanation": "與飢餓無關。"
            },
            {
                "text": "鳥籠太小，想爭取自由空間",
                "isCorrect": false,
                "explanation": "文中提到作者打開窗，鳥也不飛走，可見不是為了爭取自由。"
            },
            {
                "text": "空間距離越靠近作者，代表彼此的關係越親近與信任",
                "isCorrect": true,
                "explanation": "正確！從鳥籠四周→書桌→稿紙→肩膀，空間上的拉近完美呼應了信任感的建立。"
            },
            {
                "text": "為了尋找築巢的材料",
                "isCorrect": false,
                "explanation": "文章沒有提到鳥兒在外面尋找築巢材料。"
            }
        ],
        "unitId": "L2",
        "batch": "原本題庫",
        "trap": "從鳥籠四周→書桌→稿紙→肩膀，空間上的拉近完美呼應了信任感的建立。"
    },
    {
        "id": "q_l2_mc_6",
        "lessonId": "L2",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 1,
        "question": "剛出生不久的小珍珠鳥，外表最大的特徵是什麼？",
        "options": [
            {
                "text": "已經長出美麗的珍珠斑點",
                "isCorrect": false,
                "explanation": "課文說「尚未生出珍珠似的圓圓白點」。"
            },
            {
                "text": "羽毛是鮮豔的綠色",
                "isCorrect": false,
                "explanation": "珍珠鳥是灰藍色的毛。"
            },
            {
                "text": "尚未生出白點，整個身子像一顆鬆軟的球兒",
                "isCorrect": true,
                "explanation": "正確！這正是第七段中對幼鳥外型的生動描寫。"
            },
            {
                "text": "體型比成鳥還要大",
                "isCorrect": false,
                "explanation": "幼鳥體型小，所以能從籠子縫隙鑽出來。"
            }
        ],
        "unitId": "L2",
        "batch": "原本題庫",
        "trap": "這正是第七段中對幼鳥外型的生動描寫。"
    },
    {
        "id": "q_l2_mc_7",
        "lessonId": "L2",
        "type": "mcq",
        "category": "深度推論",
        "difficulty": 3,
        "question": "作者說：「我沒有掀開葉片往裡看，連添食加水時，也不睜大好奇的眼睛直視」，這樣做的最主要目的是什麼？",
        "options": [
            {
                "text": "因為藤蔓有毒，怕觸碰到",
                "isCorrect": false,
                "explanation": "無稽之談，文中未提。"
            },
            {
                "text": "作者對幼鳥一點都不感興趣",
                "isCorrect": false,
                "explanation": "作者其實充滿期待，所以才會有這些貼心的舉動。"
            },
            {
                "text": "怕光線太亮傷到鳥兒的眼睛",
                "isCorrect": false,
                "explanation": "跟光線無關。"
            },
            {
                "text": "給予鳥兒安全感，以免嚇到牠們",
                "isCorrect": true,
                "explanation": "正確！這顯示了作者對動物的尊重，也是建立「信賴」的第一步。"
            }
        ],
        "unitId": "L2",
        "batch": "原本題庫",
        "trap": "這顯示了作者對動物的尊重，也是建立「信賴」的第一步。"
    },
    {
        "id": "q_l2_mc_8",
        "lessonId": "L2",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 2,
        "question": "小珍珠鳥白天淘氣地陪伴作者，什麼時候才會飛回籠子裡？",
        "options": [
            {
                "text": "肚子餓的時候",
                "isCorrect": false,
                "explanation": "文中並未特別強調因為肚子餓才回去。"
            },
            {
                "text": "天色入暮，在父母的再三呼喚中",
                "isCorrect": true,
                "explanation": "正確！第十一段清楚寫到「天色入暮，牠就在父母的再三呼喚中，飛向籠子」。"
            },
            {
                "text": "作者生氣趕牠的時候",
                "isCorrect": false,
                "explanation": "作者從未生氣趕牠，反而很享受牠的陪伴。"
            },
            {
                "text": "被窗外的聲音嚇到的時候",
                "isCorrect": false,
                "explanation": "小珍珠鳥後來膽子很大，甚至敢在肩膀睡著。"
            }
        ],
        "unitId": "L2",
        "batch": "原本題庫",
        "trap": "第十一段清楚寫到「天色入暮，牠就在父母的再三呼喚中，飛向籠子」。"
    },
    {
        "id": "q_l2_mc_9",
        "lessonId": "L2",
        "type": "mcq",
        "category": "課文主旨",
        "difficulty": 4,
        "question": "《珍珠鳥》一文最後，作者流瀉下的一時感受，同時也是整篇課文的「主旨」是什麼？",
        "options": [
            {
                "text": "養鳥需要極大的耐心與金錢",
                "isCorrect": false,
                "explanation": "文中沒有強調金錢。"
            },
            {
                "text": "信賴，往往能創造出美好的境界",
                "isCorrect": true,
                "explanation": "正確！這是全課的核心價值，點出人與自然、甚至人與人之間最珍貴的連結。"
            },
            {
                "text": "大自然是動物最好的家，不該把牠們關在籠子",
                "isCorrect": false,
                "explanation": "雖然這是很好的動保觀念，但並非本文作者要表達的主旨。"
            },
            {
                "text": "萬物靜觀皆自得",
                "isCorrect": false,
                "explanation": "這是另一個意境，本文強調的是「信賴」。"
            }
        ],
        "unitId": "L2",
        "batch": "原本題庫",
        "trap": "這是全課的核心價值，點出人與自然、甚至人與人之間最珍貴的連結。"
    },
    {
        "id": "q_l2_mc_10",
        "lessonId": "L2",
        "type": "mcq",
        "category": "修辭技巧",
        "difficulty": 2,
        "question": "「整個身子好像一顆鬆軟的球兒」使用了什麼修辭法？",
        "options": [
            {
                "text": "轉化 (擬人)",
                "isCorrect": false,
                "explanation": "沒有將物當作人來描寫。"
            },
            {
                "text": "譬喻",
                "isCorrect": true,
                "explanation": "正確！使用了「好像」這個喻詞，將鳥的身子比喻為鬆軟的球。"
            },
            {
                "text": "誇飾",
                "isCorrect": false,
                "explanation": "並未過度誇大。"
            },
            {
                "text": "頂真",
                "isCorrect": false,
                "explanation": "沒有使用上一句結尾作為下一句開頭的技巧。"
            }
        ],
        "unitId": "L2",
        "batch": "原本題庫",
        "trap": "使用了「好像」這個喻詞，將鳥的身子比喻為鬆軟的球。"
    },
    {
        "id": "q_l2_mc_11",
        "lessonId": "L2",
        "type": "mcq",
        "category": "詞語應用",
        "difficulty": 3,
        "question": "哪一個成語最適合形容作者寫作時，即使小鳥在旁邊跳躍、啄筆尖，他也保持平靜不驚擾小鳥的狀態？",
        "options": [
            {
                "text": "不動聲色",
                "isCorrect": true,
                "explanation": "正確！指不說話，不流露感情，形容態度極為鎮靜。"
            },
            {
                "text": "手忙腳亂",
                "isCorrect": false,
                "explanation": "形容做事慌張。"
            },
            {
                "text": "暴跳如雷",
                "isCorrect": false,
                "explanation": "形容非常生氣。"
            },
            {
                "text": "恍然大悟",
                "isCorrect": false,
                "explanation": "形容突然明白過來。"
            }
        ],
        "unitId": "L2",
        "batch": "原本題庫",
        "trap": "指不說話，不流露感情，形容態度極為鎮靜。"
    },
    {
        "id": "q_l2_mc_new_1",
        "lessonId": "L2",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "作者最初把珍珠鳥養在哪裡？",
        "options": [
            {
                "text": "掛在窗前，用茂盛的藤蔓植物遮蓋的竹籠裡",
                "isCorrect": true,
                "explanation": "正確！為了給小鳥安全感，作者特地用茂盛的綠葉藤蔓將鳥籠遮蓋起來。"
            },
            {
                "text": "放在書桌上的玻璃箱裡",
                "isCorrect": false,
                "explanation": "是用竹條編成的籠子。"
            },
            {
                "text": "養在院子裡的樹上",
                "isCorrect": false,
                "explanation": "是養在室內的窗前。"
            },
            {
                "text": "讓牠們在屋子裡自由飛翔，沒有關起來",
                "isCorrect": false,
                "explanation": "一開始是關在籠子裡的，後來才飛出來。"
            }
        ],
        "unitId": "L2",
        "trap": "為了給小鳥安全感，作者特地用茂盛的綠葉藤蔓將鳥籠遮蓋起來。"
    },
    {
        "id": "q_l2_mc_new_2",
        "lessonId": "L2",
        "type": "mcq",
        "category": "寫作技巧",
        "difficulty": 4,
        "batch": "新題庫擴充",
        "question": "作者在描寫小珍珠鳥喝茶的過程時，使用了「挨近、蹦、俯下頭、偏過臉」等動詞。課本將這種寫作技巧稱為什麼？",
        "options": [
            {
                "text": "誇飾法描寫",
                "isCorrect": false,
                "explanation": "這都是寫實的動作。"
            },
            {
                "text": "細膩的連續動作描寫（慢速播放）",
                "isCorrect": true,
                "explanation": "正確！將一連串的動作切分成好幾個畫面一一描寫，讓內容更鮮活生動。"
            },
            {
                "text": "心理狀態描寫",
                "isCorrect": false,
                "explanation": "這是外在的動作，不是內心。"
            },
            {
                "text": "靜態景物描寫",
                "isCorrect": false,
                "explanation": "這是動態的過程。"
            }
        ],
        "unitId": "L2",
        "trap": "將一連串的動作切分成好幾個畫面一一描寫，讓內容更鮮活生動。"
    },
    {
        "id": "q_l2_mc_new_3",
        "lessonId": "L2",
        "type": "mcq",
        "category": "圖表分析",
        "difficulty": 4,
        "batch": "新題庫擴充",
        "question": "根據課本的「人與鳥的關係圖表」，橫軸與縱軸分別代表什麼意思？",
        "options": [
            {
                "text": "橫軸是鳥的體型，縱軸是食量",
                "isCorrect": false,
                "explanation": "與體型食量無關。"
            },
            {
                "text": "橫軸是時間，縱軸是關係由生疏到親近",
                "isCorrect": true,
                "explanation": "正確！隨著時間推移（橫軸往右），鳥與人的空間越來越近，關係也越來越親近（縱軸往上）。"
            },
            {
                "text": "橫軸是空間距離，縱軸是時間長短",
                "isCorrect": false,
                "explanation": "橫軸是時間。"
            },
            {
                "text": "橫軸是溫度，縱軸是心情好壞",
                "isCorrect": false,
                "explanation": "與溫度無關。"
            }
        ],
        "unitId": "L2",
        "trap": "隨著時間推移（橫軸往右），鳥與人的空間越來越近，關係也越來越親近（縱軸往上）。"
    },
    {
        "id": "q_l2_mc_new_4",
        "lessonId": "L2",
        "type": "mcq",
        "category": "課文推論",
        "difficulty": 3,
        "batch": "新題庫擴充",
        "question": "小珍珠鳥起先在籠子四周活動，後來會神氣十足地站在書架上，甚至到作者的稿紙上跳動。這空間的改變代表了什麼？",
        "options": [
            {
                "text": "因為籠子太小，小鳥需要運動減肥",
                "isCorrect": false,
                "explanation": "這不是空間改變的主因。"
            },
            {
                "text": "小鳥對環境越來越放心，也對作者越來越信任",
                "isCorrect": true,
                "explanation": "正確！空間距離的縮短，象徵著心理防備的卸下與信賴的建立。"
            },
            {
                "text": "小鳥想要尋找更多的食物",
                "isCorrect": false,
                "explanation": "文中提到作者會定時添食加水。"
            },
            {
                "text": "小鳥想幫忙作者寫作",
                "isCorrect": false,
                "explanation": "小鳥並不會寫作。"
            }
        ],
        "unitId": "L2",
        "trap": "空間距離的縮短，象徵著心理防備的卸下與信賴的建立。"
    },
    {
        "id": "q_l2_mc_new_5",
        "lessonId": "L2",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "當小珍珠鳥趴在作者肩上睡著時，作者有什麼反應？",
        "options": [
            {
                "text": "馬上把牠抓回籠子裡，怕牠著涼",
                "isCorrect": false,
                "explanation": "作者沒有打擾牠。"
            },
            {
                "text": "大聲呼喚家人來看這溫馨的一幕",
                "isCorrect": false,
                "explanation": "作者保持安靜。"
            },
            {
                "text": "手中的筆不覺停了，生怕嚇跑牠，甚至輕輕抬肩也不敢太大動作",
                "isCorrect": true,
                "explanation": "正確！作者極度呵護這份難得的信任。"
            },
            {
                "text": "生氣地把牠趕走，覺得牠妨礙了寫作",
                "isCorrect": false,
                "explanation": "作者反而流瀉下了美好的感受。"
            }
        ],
        "unitId": "L2",
        "trap": "作者極度呵護這份難得的信任。"
    },
    {
        "id": "q_l2_mc_new_6",
        "lessonId": "L2",
        "type": "mcq",
        "category": "課文理解",
        "difficulty": 3,
        "batch": "新題庫擴充",
        "question": "為什麼小鳥在被藤蔓遮蓋的籠子裡，叫聲會變得「格外的輕盈自在」？",
        "options": [
            {
                "text": "因為茂密的藤蔓提供了隱蔽，讓牠們覺得像躲在幽深樹林一樣安全",
                "isCorrect": true,
                "explanation": "正確！安全感讓原本「怕人」的珍珠鳥得以放鬆。"
            },
            {
                "text": "因為藤蔓會發出好聽的音樂",
                "isCorrect": false,
                "explanation": "植物不會發出音樂。"
            },
            {
                "text": "因為籠子裡放了特別好吃的飼料",
                "isCorrect": false,
                "explanation": "是環境帶來的安全感，不是食物。"
            },
            {
                "text": "因為牠們嘲笑作者看不到裡面",
                "isCorrect": false,
                "explanation": "這是不合理的推論。"
            }
        ],
        "unitId": "L2",
        "trap": "安全感讓原本「怕人」的珍珠鳥得以放鬆。"
    },
    {
        "id": "q_l2_mc_new_7",
        "lessonId": "L2",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "小珍珠鳥在作者的肩膀上睡著時，出現了什麼可愛的動作？",
        "options": [
            {
                "text": "不斷地打呼，聲音很大",
                "isCorrect": false,
                "explanation": "沒有打呼。"
            },
            {
                "text": "會咂咂嘴，好像在做夢一樣",
                "isCorrect": true,
                "explanation": "正確！這是一個非常細微且生動的觀察。"
            },
            {
                "text": "夢遊飛到天花板上",
                "isCorrect": false,
                "explanation": "牠安穩地睡在肩膀上。"
            },
            {
                "text": "用翅膀緊緊抱住作者的脖子",
                "isCorrect": false,
                "explanation": "鳥類無法做出這動作。"
            }
        ],
        "unitId": "L2",
        "trap": "這是一個非常細微且生動的觀察。"
    },
    {
        "id": "q_l2_mc_new_8",
        "lessonId": "L2",
        "type": "mcq",
        "category": "字詞義測驗",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "作者用手輕輕摸小鳥「柔細」的短毛。「柔細」的意思是？",
        "options": [
            {
                "text": "顏色非常鮮豔",
                "isCorrect": false,
                "explanation": "與顏色無關。"
            },
            {
                "text": "柔軟而細密",
                "isCorrect": true,
                "explanation": "正確！形容小鳥的羽毛摸起來很柔軟細緻。"
            },
            {
                "text": "粗糙且刺手",
                "isCorrect": false,
                "explanation": "完全相反的意思。"
            },
            {
                "text": "稀疏掉毛的樣子",
                "isCorrect": false,
                "explanation": "沒有掉毛的意思。"
            }
        ],
        "unitId": "L2",
        "trap": "形容小鳥的羽毛摸起來很柔軟細緻。"
    },
    {
        "id": "q_l2_mc_new_9",
        "lessonId": "L2",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 2,
        "batch": "新題庫擴充",
        "question": "小傢伙（珍珠鳥）在屋裡飛來飛去，牠「絕不會」飛到哪裡去？",
        "options": [
            {
                "text": "櫃子頂上",
                "isCorrect": false,
                "explanation": "課文提到牠一會兒落在櫃頂上。"
            },
            {
                "text": "窗外的樹上",
                "isCorrect": true,
                "explanation": "正確！作者說「即使打開窗子，牠最多只在窗框上站一會兒，絕不飛出去」。"
            },
            {
                "text": "作者的書桌",
                "isCorrect": false,
                "explanation": "課文提到牠會飛到書桌上喝茶。"
            },
            {
                "text": "書架上",
                "isCorrect": false,
                "explanation": "課文提到牠神氣十足站在書架上。"
            }
        ],
        "unitId": "L2",
        "trap": "作者說「即使打開窗子，牠最多只在窗框上站一會兒，絕不飛出去」。"
    },
    {
        "id": "q_l3_hw_char_1",
        "lessonId": "L3",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 2,
        "question": "這間房[[國字:ㄕㄜˋ:舍]][[國字:ㄐㄧㄝ:皆]]用木頭打造，因[[國字:ㄩㄢˊ:緣]]際會下，我們推開了這扇[[國字:ㄆㄥˊ:蓬]]草編的門。",
        "correctAnswer": "舍、皆、緣、蓬",
        "explanation": "【解說】「舍」指房屋；「皆」是都的意思；「緣」是糸部；「蓬門」指用蓬草編成的簡陋門戶(艸部)。",
        "unitId": "L3",
        "batch": "寫國字",
        "trap": "「舍」指房屋；「皆」是都的意思；「緣」是糸部；「蓬門」指用蓬草編成的簡陋門戶(艸部)。"
    },
    {
        "id": "q_l3_hw_char_2",
        "lessonId": "L3",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 4,
        "question": "盤中的飯菜食物稱為盤[[國字:ㄙㄨㄣ:飧]]，因為無法[[國字:ㄐㄧㄢ:兼]]顧多種美味，只能端出[[國字:ㄗㄨㄣ:樽]][[國字:ㄐㄧㄡˇ:酒]]招待客人。",
        "correctAnswer": "飧、兼、樽、酒",
        "explanation": "【解說】「飧」指盤中食物(食部)，筆畫較難；「樽」是酒器(木部)。",
        "unitId": "L3",
        "batch": "寫國字",
        "trap": "「飧」指盤中食物(食部)，筆畫較難；「樽」是酒器(木部)。"
    },
    {
        "id": "q_l3_hw_char_3",
        "lessonId": "L3",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 4,
        "question": "我拿出存放已[[國字:ㄐㄧㄡˋ:舊]]、尚未過濾的舊[[國字:ㄆㄟ:醅]]，在竹[[國字:ㄌㄧˊ:籬]]笆旁的[[國字:ㄐㄧㄢˇ:簡]]陋桌椅上與你對飲。",
        "correctAnswer": "舊、醅、籬、簡",
        "explanation": "【解說】「醅」指沒過濾的酒(酉部)；「籬」和「簡」都是竹部。",
        "unitId": "L3",
        "batch": "寫國字",
        "trap": "「醅」指沒過濾的酒(酉部)；「籬」和「簡」都是竹部。"
    },
    {
        "id": "q_l3_hw_char_4",
        "lessonId": "L3",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "這間簡[[國字:ㄌㄡˋ:陋]]的房屋離小[[國字:ㄓㄣˋ:鎮]]很遠，我們用布過[[國字:ㄌㄩˋ:濾]]著[[國字:ㄔㄢˊ:潺]]潺的溪水來泡茶。",
        "correctAnswer": "陋、鎮、濾、潺",
        "explanation": "【解說】「陋」是阜部(左耳旁)；「濾」和「潺」都是水部，潺潺用來形容水流聲。",
        "unitId": "L3",
        "batch": "寫國字",
        "trap": "「陋」是阜部(左耳旁)；「濾」和「潺」都是水部，潺潺用來形容水流聲。"
    },
    {
        "id": "q_l3_hw_char_5",
        "lessonId": "L3",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "隔著竹籬[[國字:ㄅㄚ:笆]]，原本孤[[國字:ㄐㄧˊ:寂]]的氣氛一掃而空，老翁向我們[[國字:ㄔㄣˊ:陳]]述著當年的故事。",
        "correctAnswer": "笆、寂、陳",
        "explanation": "【解說】「笆」是竹部；「寂」是宀部；「陳」是阜部(左耳旁)。",
        "unitId": "L3",
        "batch": "寫國字",
        "trap": "「笆」是竹部；「寂」是宀部；「陳」是阜部(左耳旁)。"
    },
    {
        "id": "q_l3_hw_py_1",
        "lessonId": "L3",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 4,
        "question": "房舍南面北面都被[[注音:潺:ㄔㄢˊ]]潺溪水環繞。",
        "correctAnswer": "ㄔㄢˊ",
        "explanation": "【解說】「潺」讀作「ㄔㄢˊ」，形容溪水流動的聲音，不要念成「ㄘㄢˊ」喔！",
        "unitId": "L3",
        "batch": "寫注音",
        "trap": "「潺」讀作「ㄔㄢˊ」，形容溪水流動的聲音，不要念成「ㄘㄢˊ」喔！"
    },
    {
        "id": "q_l3_hw_py_2",
        "lessonId": "L3",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 4,
        "question": "盤[[注音:飧:ㄙㄨㄣ]]市遠無兼味。",
        "correctAnswer": "ㄙㄨㄣ",
        "explanation": "【解說】「飧」讀作「ㄙㄨㄣ」，指盤中的食物，是很容易讀錯的字！",
        "unitId": "L3",
        "batch": "寫注音",
        "trap": "「飧」讀作「ㄙㄨㄣ」，指盤中的食物，是很容易讀錯的字！"
    },
    {
        "id": "q_l3_hw_py_3",
        "lessonId": "L3",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 5,
        "question": "樽酒家貧只舊[[注音:醅:ㄆㄟ]]。",
        "correctAnswer": "ㄆㄟ",
        "explanation": "【解說】「醅」讀作「ㄆㄟ」，指沒有過濾的酒，不要有邊讀邊念成「陪」！",
        "unitId": "L3",
        "batch": "寫注音",
        "trap": "「醅」讀作「ㄆㄟ」，指沒有過濾的酒，不要有邊讀邊念成「陪」！"
    },
    {
        "id": "q_l3_hw_py_4",
        "lessonId": "L3",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 3,
        "question": "[[注音:舍:ㄕㄜˋ]]南舍北皆春水。",
        "correctAnswer": "ㄕㄜˋ",
        "explanation": "【解說】「舍」在這裡指房屋(如宿舍)，讀作第四聲「ㄕㄜˋ」，不要念成捨棄的「ㄕㄜˇ」。",
        "unitId": "L3",
        "batch": "寫注音",
        "trap": "「舍」在這裡指房屋(如宿舍)，讀作第四聲「ㄕㄜˋ」，不要念成捨棄的「ㄕㄜˇ」。"
    },
    {
        "id": "q_l3_mc_1",
        "lessonId": "L3",
        "type": "mcq",
        "category": "詩句字義",
        "difficulty": 2,
        "question": "「但見群鷗日日來」中的「但」是什麼意思？",
        "options": [
            {
                "text": "但是、可是",
                "isCorrect": false,
                "explanation": "在這裡不是作為轉折語氣。"
            },
            {
                "text": "僅、只",
                "isCorrect": true,
                "explanation": "正確！「但見」意思是「只看見」，表達出平時沒有客人，只有鳥兒來的孤寂感。"
            },
            {
                "text": "不但、而且",
                "isCorrect": false,
                "explanation": "意思不符。"
            },
            {
                "text": "早晨",
                "isCorrect": false,
                "explanation": "早晨的字是「旦」。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "「但見」意思是「只看見」，表達出平時沒有客人，只有鳥兒來的孤寂感。"
    },
    {
        "id": "q_l3_mc_2",
        "lessonId": "L3",
        "type": "mcq",
        "category": "詩句字義",
        "difficulty": 3,
        "question": "「花徑不曾緣客掃」中的「緣」字，解釋為下列何者最恰當？",
        "options": [
            {
                "text": "邊緣",
                "isCorrect": false,
                "explanation": "不是指道路的邊緣。"
            },
            {
                "text": "緣分",
                "isCorrect": false,
                "explanation": "這裡的「緣」不是指人與人之間的緣分。"
            },
            {
                "text": "因為、由於",
                "isCorrect": true,
                "explanation": "正確！整句意思是「花草小路還不曾『因為』有客人的到來而打掃」。"
            },
            {
                "text": "攀爬",
                "isCorrect": false,
                "explanation": "如「緣木求魚」，但在這裡意思不通。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "整句意思是「花草小路還不曾『因為』有客人的到來而打掃」。"
    },
    {
        "id": "q_l3_mc_3",
        "lessonId": "L3",
        "type": "mcq",
        "category": "詩句理解",
        "difficulty": 2,
        "question": "「蓬門今始為君開」詩中的「蓬門」暗示了詩人當時的居住環境如何？",
        "options": [
            {
                "text": "豪華氣派",
                "isCorrect": false,
                "explanation": "這與「蓬」的意思相反。"
            },
            {
                "text": "簡陋貧窮",
                "isCorrect": true,
                "explanation": "正確！「蓬門」指用蓬草編成的門戶，形容房屋簡陋。"
            },
            {
                "text": "充滿神仙氣息",
                "isCorrect": false,
                "explanation": "雖然有「蓬萊仙島」一詞，但這裡純粹指草編的門。"
            },
            {
                "text": "防備森嚴",
                "isCorrect": false,
                "explanation": "草編的門無法防備森嚴。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "「蓬門」指用蓬草編成的門戶，形容房屋簡陋。"
    },
    {
        "id": "q_l3_mc_4",
        "lessonId": "L3",
        "type": "mcq",
        "category": "詞語解析",
        "difficulty": 4,
        "question": "「盤飧市遠無兼味」中，「無兼味」指的是什麼情況？",
        "options": [
            {
                "text": "食物沒有味道",
                "isCorrect": false,
                "explanation": "不是指沒有味道，是指種類。"
            },
            {
                "text": "菜色簡單，沒有多種菜餚",
                "isCorrect": true,
                "explanation": "正確！「兼」有多種的意思，「兼味」指多種菜色，無兼味就是菜色簡單。"
            },
            {
                "text": "忘記加調味料",
                "isCorrect": false,
                "explanation": "這跟市遠(離市場遠)沒有關係。"
            },
            {
                "text": "食物已經壞掉變味",
                "isCorrect": false,
                "explanation": "完全誤解字義。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "「兼」有多種的意思，「兼味」指多種菜色，無兼味就是菜色簡單。"
    },
    {
        "id": "q_l3_mc_5",
        "lessonId": "L3",
        "type": "mcq",
        "category": "詞語解析",
        "difficulty": 3,
        "question": "杜甫用「舊醅」來招待客人，請問「舊醅」是指什麼？",
        "options": [
            {
                "text": "過期的劣質茶葉",
                "isCorrect": false,
                "explanation": "「醅」是指酒，不是茶。"
            },
            {
                "text": "放了很久的隔夜飯",
                "isCorrect": false,
                "explanation": "不是飯菜。"
            },
            {
                "text": "存放一段時間，沒有過濾的酒",
                "isCorrect": true,
                "explanation": "正確！因為「家貧」未釀新酒，只好拿出沒有過濾的舊酒。"
            },
            {
                "text": "破舊的酒杯",
                "isCorrect": false,
                "explanation": "酒器是前一句的「樽」。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "因為「家貧」未釀新酒，只好拿出沒有過濾的舊酒。"
    },
    {
        "id": "q_l3_mc_6",
        "lessonId": "L3",
        "type": "mcq",
        "category": "文體知識",
        "difficulty": 2,
        "question": "杜甫的《客至》在中國古典詩歌中屬於哪一種體裁？",
        "options": [
            {
                "text": "五言絕句",
                "isCorrect": false,
                "explanation": "絕句只有四句，且這首每句是七個字。"
            },
            {
                "text": "七言絕句",
                "isCorrect": false,
                "explanation": "這首詩共有八句，不是絕句。"
            },
            {
                "text": "五言律詩",
                "isCorrect": false,
                "explanation": "這首詩每句是七個字。"
            },
            {
                "text": "七言律詩",
                "isCorrect": true,
                "explanation": "正確！全詩共八句，每句七字，格式嚴謹，屬於七言律詩。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "全詩共八句，每句七字，格式嚴謹，屬於七言律詩。"
    },
    {
        "id": "q_l3_mc_7",
        "lessonId": "L3",
        "type": "mcq",
        "category": "國學常識",
        "difficulty": 3,
        "question": "關於「律詩」的押韻規則，下列哪一個說明是**正確**的？",
        "options": [
            {
                "text": "每一句都必須押韻",
                "isCorrect": false,
                "explanation": "奇數句通常不押韻。"
            },
            {
                "text": "只有奇數句(第1,3,5,7句)要押韻",
                "isCorrect": false,
                "explanation": "剛好說反了。"
            },
            {
                "text": "偶數句(第2,4,6,8句)必須押韻，第一句可押可不押",
                "isCorrect": true,
                "explanation": "正確！這是律詩非常嚴格的押韻規定。"
            },
            {
                "text": "只要最後兩句押韻即可",
                "isCorrect": false,
                "explanation": "律詩的規定比這個嚴格得多。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "這是律詩非常嚴格的押韻規定。"
    },
    {
        "id": "q_l3_mc_8",
        "lessonId": "L3",
        "type": "mcq",
        "category": "國學常識",
        "difficulty": 4,
        "question": "律詩規定必須「對仗」如同雙胞胎一樣，字數、詞性都要對齊。請問一首律詩中，規定哪幾句**必須**對仗？",
        "options": [
            {
                "text": "第一、二句 和 第三、四句",
                "isCorrect": false,
                "explanation": "首聯(1,2)通常不要求對仗。"
            },
            {
                "text": "第三、四句 和 第五、六句",
                "isCorrect": true,
                "explanation": "正確！律詩的頷聯(3,4句)與頸聯(5,6句)必須嚴格對仗。"
            },
            {
                "text": "第五、六句 和 第七、八句",
                "isCorrect": false,
                "explanation": "尾聯(7,8)通常不要求對仗。"
            },
            {
                "text": "只要有其中兩句對仗就可以",
                "isCorrect": false,
                "explanation": "規定必須是中間這兩聯都要對仗。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "律詩的頷聯(3,4句)與頸聯(5,6句)必須嚴格對仗。"
    },
    {
        "id": "q_l3_mc_9",
        "lessonId": "L3",
        "type": "mcq",
        "category": "對仗分析",
        "difficulty": 4,
        "question": "在《客至》中，「盤飧市遠無兼味」對仗「樽酒家貧只舊醅」。其中「盤飧」對「樽酒」的詞性是什麼？",
        "options": [
            {
                "text": "動詞 對 動詞",
                "isCorrect": false,
                "explanation": "盤中的食物跟酒器中的酒都是物品。"
            },
            {
                "text": "形容詞 對 形容詞",
                "isCorrect": false,
                "explanation": "不是用來形容狀態的詞。"
            },
            {
                "text": "名詞 對 名詞",
                "isCorrect": true,
                "explanation": "正確！盤(名詞)飧(名詞) 對應 樽(名詞)酒(名詞)，對仗非常工整。"
            },
            {
                "text": "副詞 對 副詞",
                "isCorrect": false,
                "explanation": "副詞用來修飾動詞或形容詞，這裡不適用。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "盤(名詞)飧(名詞) 對應 樽(名詞)酒(名詞)，對仗非常工整。"
    },
    {
        "id": "q_l3_mc_10",
        "lessonId": "L3",
        "type": "mcq",
        "category": "語音流變",
        "difficulty": 4,
        "question": "《客至》的韻腳字是「來(ㄌㄞˊ)、開(ㄎㄞ)、醅(ㄆㄟ)、杯(ㄅㄟ)」，現在讀起來好像沒有完全押韻，原因是什麼？",
        "options": [
            {
                "text": "因為杜甫當時寫錯字了",
                "isCorrect": false,
                "explanation": "杜甫是唐代大詩人，以格律嚴謹著稱，不可能寫錯。"
            },
            {
                "text": "因為時代久遠，造成語音發生了改變",
                "isCorrect": true,
                "explanation": "正確！在唐代這幾個字讀起來是有押韻的，是現代語音改變了。"
            },
            {
                "text": "因為作者故意打破律詩規則",
                "isCorrect": false,
                "explanation": "杜甫非常遵守律詩規則。"
            },
            {
                "text": "因為這是絕句，本來就不用押韻",
                "isCorrect": false,
                "explanation": "這是律詩，且絕句也要押韻。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "在唐代這幾個字讀起來是有押韻的，是現代語音改變了。"
    },
    {
        "id": "q_l3_mc_11",
        "lessonId": "L3",
        "type": "mcq",
        "category": "寫作手法",
        "difficulty": 3,
        "question": "詩的前兩句寫環境清幽但只有鷗鳥相伴，到了第三句客人到訪時，特別為客掃花徑。這種寫作手法達到了什麼效果？",
        "options": [
            {
                "text": "使用「對比」營造出因為客人到來，一掃原本孤寂之感的驚喜",
                "isCorrect": true,
                "explanation": "正確！從「無客」的冷清，對比出「迎客」時的滿心歡喜。"
            },
            {
                "text": "使用「誇飾」凸顯房子非常髒亂",
                "isCorrect": false,
                "explanation": "花徑指的是長滿花草的小路，不是髒亂。"
            },
            {
                "text": "使用「擬人」讓鳥兒代替主人歡迎客人",
                "isCorrect": false,
                "explanation": "鳥兒只是日日飛來，沒有擬人的迎客動作。"
            },
            {
                "text": "表達詩人討厭被打擾的心情",
                "isCorrect": false,
                "explanation": "詩人非常期待且開心客人的到來。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "從「無客」的冷清，對比出「迎客」時的滿心歡喜。"
    },
    {
        "id": "q_l3_mc_12",
        "lessonId": "L3",
        "type": "mcq",
        "category": "詩句理解",
        "difficulty": 3,
        "question": "「花徑不曾緣客掃，蓬門今始為君開」是千古名句，這兩句話最主要表達出杜甫的什麼心意？",
        "options": [
            {
                "text": "暗示客人太晚來，害他打掃很久",
                "isCorrect": false,
                "explanation": "完全錯誤。"
            },
            {
                "text": "凸顯這位客人在詩人心中的地位無與倫比，非常特別",
                "isCorrect": true,
                "explanation": "正確！「不曾」為別人掃，今天「才(始)」特地為你開門，凸顯客人的尊貴與友誼深厚。"
            },
            {
                "text": "抱怨自己居住的環境很差",
                "isCorrect": false,
                "explanation": "雖然環境簡陋，但這句重點在於迎接貴客的心意。"
            },
            {
                "text": "提醒客人進門前要把鞋子清乾淨",
                "isCorrect": false,
                "explanation": "與打掃的本意無關。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "「不曾」為別人掃，今天「才(始)」特地為你開門，凸顯客人的尊貴與友誼深厚。"
    },
    {
        "id": "q_l3_mc_13",
        "lessonId": "L3",
        "type": "mcq",
        "category": "情意理解",
        "difficulty": 4,
        "question": "雖然「盤飧市遠無兼味，樽酒家貧只舊醅」，飯菜簡單且只有未過濾的酒，這展現了杜甫待客的什麼態度？",
        "options": [
            {
                "text": "極度吝嗇，不想花錢請客",
                "isCorrect": false,
                "explanation": "是因為「市遠」跟「家貧」，並非吝嗇。"
            },
            {
                "text": "雖然物質貧乏，但仍盡其所能、真誠熱情地款待",
                "isCorrect": true,
                "explanation": "正確！好朋友相聚不在乎吃多好，而在於主人的誠意。"
            },
            {
                "text": "暗示客人下次自己帶食物來",
                "isCorrect": false,
                "explanation": "沒有這個意思。"
            },
            {
                "text": "覺得對客人很抱歉，希望客人早點離開",
                "isCorrect": false,
                "explanation": "後面還請鄰翁來一起喝，可見希望客人留下來盡興。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "好朋友相聚不在乎吃多好，而在於主人的誠意。"
    },
    {
        "id": "q_l3_mc_14",
        "lessonId": "L3",
        "type": "mcq",
        "category": "詩句理解",
        "difficulty": 3,
        "question": "「肯與鄰翁相對飲，隔籬呼取盡餘杯。」杜甫為什麼最後要隔著籬笆呼喊鄰居老翁過來？",
        "options": [
            {
                "text": "因為酒菜太多吃不完",
                "isCorrect": false,
                "explanation": "前面才說「無兼味」，菜色不多。"
            },
            {
                "text": "想請鄰翁幫忙打掃花徑",
                "isCorrect": false,
                "explanation": "花徑已經為了客人打掃完了。"
            },
            {
                "text": "想為這場聚會添加熱鬧氣氛，希望客人更盡興",
                "isCorrect": true,
                "explanation": "正確！邀請鄰居共飲，從「待客」延伸到「陪客」，讓氣氛更熱絡。"
            },
            {
                "text": "因為鄰翁欠他錢",
                "isCorrect": false,
                "explanation": "無稽之談。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "邀請鄰居共飲，從「待客」延伸到「陪客」，讓氣氛更熱絡。"
    },
    {
        "id": "q_l3_mc_15",
        "lessonId": "L3",
        "type": "mcq",
        "category": "情節鋪陳",
        "difficulty": 4,
        "question": "《客至》整首詩的情節鋪陳是有層次的，請問順序為何？",
        "options": [
            {
                "text": "無客 ➡️ 迎客 ➡️ 待客 ➡️ 陪客",
                "isCorrect": true,
                "explanation": "正確！群鷗日來(無客) -> 掃徑開門(迎客) -> 簡單酒菜(待客) -> 呼喚鄰翁(陪客)。"
            },
            {
                "text": "待客 ➡️ 無客 ➡️ 陪客 ➡️ 迎客",
                "isCorrect": false,
                "explanation": "順序錯誤。"
            },
            {
                "text": "迎客 ➡️ 待客 ➡️ 陪客 ➡️ 送客",
                "isCorrect": false,
                "explanation": "詩中最後停留在喝酒盡興，沒有寫到送客。"
            },
            {
                "text": "無客 ➡️ 迎客 ➡️ 吵架 ➡️ 送客",
                "isCorrect": false,
                "explanation": "這是一首充滿美好情誼的詩。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "群鷗日來(無客) -> 掃徑開門(迎客) -> 簡單酒菜(待客) -> 呼喚鄰翁(陪客)。"
    },
    {
        "id": "q_l3_mc_16",
        "lessonId": "L3",
        "type": "mcq",
        "category": "閱讀策略",
        "difficulty": 2,
        "question": "課本「加油小站」教導猜測生難字詞的步驟，請問第一步是什麼？",
        "options": [
            {
                "text": "立刻查字典",
                "isCorrect": false,
                "explanation": "查字典是方法之一，但第一步要先界定範圍。"
            },
            {
                "text": "圈出難詞",
                "isCorrect": true,
                "explanation": "正確！先「圈出難詞」，再去猜測，最後放回原句檢視。"
            },
            {
                "text": "大聲朗讀三遍",
                "isCorrect": false,
                "explanation": "這不是猜字義的步驟。"
            },
            {
                "text": "問同學",
                "isCorrect": false,
                "explanation": "這不是課本教導的自主學習步驟。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "先「圈出難詞」，再去猜測，最後放回原句檢視。"
    },
    {
        "id": "q_l3_mc_17",
        "lessonId": "L3",
        "type": "mcq",
        "category": "閱讀策略",
        "difficulty": 4,
        "question": "在猜測字義的步驟中，當我們根據部首猜測「蓬」可能跟草有關，「蓬門」是草編的門。接下來最重要的「步驟三」是什麼？",
        "options": [
            {
                "text": "把它抄寫在筆記本上十遍",
                "isCorrect": false,
                "explanation": "這是記憶的方法，不是理解的步驟。"
            },
            {
                "text": "放回原句中檢視意思合不合理",
                "isCorrect": true,
                "explanation": "正確！套回「這扇草編的小門今天為你打開」，覺得合理，代表猜對了！"
            },
            {
                "text": "上網搜尋其他人的翻譯",
                "isCorrect": false,
                "explanation": "這是最後的確認，不是課文教的步驟。"
            },
            {
                "text": "直接跳過看下一句",
                "isCorrect": false,
                "explanation": "這樣就失去學習的意義了。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "套回「這扇草編的小門今天為你打開」，覺得合理，代表猜對了！"
    },
    {
        "id": "q_l3_mc_18",
        "lessonId": "L3",
        "type": "mcq",
        "category": "課文背景",
        "difficulty": 1,
        "question": "《客至》的作者是誰？",
        "options": [
            {
                "text": "李白",
                "isCorrect": false,
                "explanation": "李白是詩仙。"
            },
            {
                "text": "杜甫",
                "isCorrect": true,
                "explanation": "正確！本詩作者為唐朝詩聖杜甫。"
            },
            {
                "text": "白居易",
                "isCorrect": false,
                "explanation": "作者是杜甫。"
            },
            {
                "text": "王維",
                "isCorrect": false,
                "explanation": "王維是詩佛。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "本詩作者為唐朝詩聖杜甫。"
    },
    {
        "id": "q_l3_mc_19",
        "lessonId": "L3",
        "type": "mcq",
        "category": "詞語解析",
        "difficulty": 2,
        "question": "「隔籬呼取盡餘杯」中的「呼取」是什麼意思？",
        "options": [
            {
                "text": "大口呼吸",
                "isCorrect": false,
                "explanation": "不是呼吸的意思。"
            },
            {
                "text": "叫，招呼",
                "isCorrect": true,
                "explanation": "正確！招呼隔壁的老翁過來一起喝酒。"
            },
            {
                "text": "搶奪",
                "isCorrect": false,
                "explanation": "沒有搶奪的意思。"
            },
            {
                "text": "唱歌",
                "isCorrect": false,
                "explanation": "不是唱歌。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "招呼隔壁的老翁過來一起喝酒。"
    },
    {
        "id": "q_l3_mc_20",
        "lessonId": "L3",
        "type": "mcq",
        "category": "核心主旨",
        "difficulty": 3,
        "question": "學習這首詩，最主要能體會到什麼樣的情感？",
        "options": [
            {
                "text": "戰爭帶來的流離失所與痛苦",
                "isCorrect": false,
                "explanation": "杜甫雖然很多這種詩，但《客至》不是。"
            },
            {
                "text": "大自然的偉大與人類的渺小",
                "isCorrect": false,
                "explanation": "這不是自然哲學詩。"
            },
            {
                "text": "人與人之間真摯的美好情誼",
                "isCorrect": true,
                "explanation": "正確！透過詩人滿心歡喜的迎客、待客，展現了最純粹珍貴的友誼。"
            },
            {
                "text": "懷才不遇的憤怒與悲傷",
                "isCorrect": false,
                "explanation": "這首詩充滿喜悅，沒有憤怒。"
            }
        ],
        "unitId": "L3",
        "batch": "原本題庫",
        "trap": "透過詩人滿心歡喜的迎客、待客，展現了最純粹珍貴的友誼。"
    },
    {
        "id": "q_l4_hw_char_1",
        "lessonId": "L4",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 2,
        "question": "十二月的寒風吹進運動[[國字:ㄕㄢ:衫]]，但我絲毫不覺得冷，因為我的[[國字:ㄐㄧ:肌]]膚發燙、熱血[[國字:ㄈㄟˋ:沸]][[國字:ㄊㄥˊ:騰]]。",
        "correctAnswer": "衫、肌、沸、騰",
        "explanation": "【解說】「衫」是衣部；「肌」是肉部(月)；「沸」是水部；「騰」是馬部，筆畫較多要注意。",
        "unitId": "L4",
        "batch": "寫國字",
        "trap": "「衫」是衣部；「肌」是肉部(月)；「沸」是水部；「騰」是馬部，筆畫較多要注意。"
    },
    {
        "id": "q_l4_hw_char_2",
        "lessonId": "L4",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "他一路領先，[[國字:ㄨˋ:兀]]自把我拋在後頭，我[[國字:ㄨㄟˊ:唯]]一能做的就是盯著他的後腦[[國字:ㄕㄠˊ:勺]]。",
        "correctAnswer": "兀、唯、勺",
        "explanation": "【解說】「兀自」指逕自、獨自；「唯」是口部；「勺」是勹部，指後腦勺。",
        "unitId": "L4",
        "batch": "寫國字",
        "trap": "「兀自」指逕自、獨自；「唯」是口部；「勺」是勹部，指後腦勺。"
    },
    {
        "id": "q_l4_hw_char_3",
        "lessonId": "L4",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "他誤以為氣球拱門是[[國字:ㄅㄢ:頒]]獎的位[[國字:ㄓˋ:置]]，觀眾在旁邊大聲[[國字:ㄋㄚˋ:吶]]喊。",
        "correctAnswer": "頒、置、吶",
        "explanation": "【解說】「頒獎」的頒是頁部；「位置」的置是网部；「吶喊」的吶是口部，不要寫成內。",
        "unitId": "L4",
        "batch": "寫國字",
        "trap": "「頒獎」的頒是頁部；「位置」的置是网部；「吶喊」的吶是口部，不要寫成內。"
    },
    {
        "id": "q_l4_hw_char_4",
        "lessonId": "L4",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 2,
        "question": "他[[國字:ㄨㄛˋ:握]]拳以為自己已經[[國字:ㄉㄧˇ:抵]]達終點，[[國字:ㄍㄠˇ:搞]]錯的人是他，不是我。",
        "correctAnswer": "握、抵、搞",
        "explanation": "【解說】這三個字都是手部。「抵達」的抵下面有一點；「搞錯」的搞右邊是高。",
        "unitId": "L4",
        "batch": "寫國字",
        "trap": "這三個字都是手部。「抵達」的抵下面有一點；「搞錯」的搞右邊是高。"
    },
    {
        "id": "q_l4_hw_char_5",
        "lessonId": "L4",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 4,
        "question": "[[國字:ㄧㄡˇ:黝]]黑的肌膚[[國字:ㄔㄣˋ:襯]]得白牙更亮眼。教練[[國字:ㄌㄡ:摟]]著我，沒有[[國字:ㄖㄜˇ:惹]]來責罵，這份[[國字:ㄖㄨㄥˊ:榮]]耀[[國字:ㄕㄨˇ:屬]]於我們。",
        "correctAnswer": "黝、襯、摟、惹、榮、屬",
        "explanation": "【解說】「黝黑」的黝是黑部(讀音ㄧㄡˇ)；「襯」是衣部；「摟」是手部；「惹」是心部；「榮」上面是火疊字；「屬」是尸部。",
        "unitId": "L4",
        "batch": "寫國字",
        "trap": "「黝黑」的黝是黑部(讀音ㄧㄡˇ)；「襯」是衣部；「摟」是手部；「惹」是心部；「榮」上面是火疊字；「屬」是尸部。"
    },
    {
        "id": "q_l4_hw_py_1",
        "lessonId": "L4",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 4,
        "question": "他[[注音:兀:ㄨˋ]]自把我拋在後頭。",
        "correctAnswer": "ㄨˋ",
        "explanation": "【解說】「兀」讀作四聲「ㄨˋ」，指仍然、逕自的意思。",
        "unitId": "L4",
        "batch": "寫注音",
        "trap": "「兀」讀作四聲「ㄨˋ」，指仍然、逕自的意思。"
    },
    {
        "id": "q_l4_hw_py_2",
        "lessonId": "L4",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 4,
        "question": "[[注音:黝:ㄧㄡˇ]]黑的肌膚。",
        "correctAnswer": "ㄧㄡˇ",
        "explanation": "【解說】「黝」黑讀作三聲「ㄧㄡˇ」，形容顏色深黑，非常容易唸錯。",
        "unitId": "L4",
        "batch": "寫注音",
        "trap": "「黝」黑讀作三聲「ㄧㄡˇ」，形容顏色深黑，非常容易唸錯。"
    },
    {
        "id": "q_l4_hw_py_3",
        "lessonId": "L4",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 3,
        "question": "教練竟[[注音:摟:ㄌㄡ]]著我的肩膀。",
        "correctAnswer": "ㄌㄡ",
        "explanation": "【解說】「摟」著肩膀在這裡讀作一聲「ㄌㄡ」，指用手臂攬住。",
        "unitId": "L4",
        "batch": "寫注音",
        "trap": "「摟」著肩膀在這裡讀作一聲「ㄌㄡ」，指用手臂攬住。"
    },
    {
        "id": "q_l4_hw_py_4",
        "lessonId": "L4",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 2,
        "question": "盯著穆太的後腦[[注音:勺:ㄕㄠˊ]]。",
        "correctAnswer": "ㄕㄠˊ",
        "explanation": "【解說】後腦「勺」讀作二聲「ㄕㄠˊ」，指頭部的後方。",
        "unitId": "L4",
        "batch": "寫注音",
        "trap": "後腦「勺」讀作二聲「ㄕㄠˊ」，指頭部的後方。"
    },
    {
        "id": "q_l4_mc_1",
        "lessonId": "L4",
        "type": "mcq",
        "category": "課文理解",
        "difficulty": 1,
        "question": "安納亞在馬拉松比賽即將結束時，面臨了什麼兩難的抉擇？",
        "options": [
            {
                "text": "要繼續跑還是停下來休息",
                "isCorrect": false,
                "explanation": "他體力雖然耗盡，但沒有想停下來。"
            },
            {
                "text": "要趁對方失誤超越他，還是提醒他終點在哪裡",
                "isCorrect": true,
                "explanation": "正確！這是整篇文章最核心的情節轉折與內心掙扎。"
            },
            {
                "text": "要跟教練求救還是靠自己",
                "isCorrect": false,
                "explanation": "比賽中無法跟教練求救。"
            },
            {
                "text": "要用西班牙語還是肯亞語跟對方說話",
                "isCorrect": false,
                "explanation": "他不會肯亞語，這不是他猶豫的重點。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "這是整篇文章最核心的情節轉折與內心掙扎。"
    },
    {
        "id": "q_l4_mc_2",
        "lessonId": "L4",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 2,
        "question": "肯亞選手穆太為什麼在終點前十公尺突然停下腳步？",
        "options": [
            {
                "text": "因為他腳抽筋沒力氣了",
                "isCorrect": false,
                "explanation": "文中並未提到他受傷或沒力氣。"
            },
            {
                "text": "因為他想等安納亞一起過終點",
                "isCorrect": false,
                "explanation": "這是一場激烈的競賽，他沒有刻意要等。"
            },
            {
                "text": "因為他把主辦單位設置的頒獎氣球拱門誤認為是終點",
                "isCorrect": true,
                "explanation": "正確！他以為穿過拱門就是終點，所以停下來舉手慶祝。"
            },
            {
                "text": "因為教練在場邊叫他停下來",
                "isCorrect": false,
                "explanation": "教練沒有叫他停下。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "他以為穿過拱門就是終點，所以停下來舉手慶祝。"
    },
    {
        "id": "q_l4_mc_3",
        "lessonId": "L4",
        "type": "mcq",
        "category": "課文情節",
        "difficulty": 2,
        "question": "當穆太停下來時，場邊的西班牙觀眾有什麼反應？",
        "options": [
            {
                "text": "大聲嘲笑他犯了愚蠢的錯誤",
                "isCorrect": false,
                "explanation": "觀眾並沒有嘲笑他。"
            },
            {
                "text": "安靜無聲，不知道發生什麼事",
                "isCorrect": false,
                "explanation": "觀眾非常熱烈。"
            },
            {
                "text": "熱烈吶喊，用西班牙語要他繼續往前跑",
                "isCorrect": true,
                "explanation": "正確！觀眾雖然希望地主隊安納亞贏，但仍熱心提醒穆太，展現了良好的風度。"
            },
            {
                "text": "向大會抗議比賽不公平",
                "isCorrect": false,
                "explanation": "比賽沒有不公平，是選手自己搞錯。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "觀眾雖然希望地主隊安納亞贏，但仍熱心提醒穆太，展現了良好的風度。"
    },
    {
        "id": "q_l4_mc_4",
        "lessonId": "L4",
        "type": "mcq",
        "category": "寫作技巧",
        "difficulty": 3,
        "question": "課文第五段說：「搞錯的人是他，不是我，知道正確終點位置的我，不就應該是比賽的獲勝者嗎？」這段話呈現了主角的什麼狀態？",
        "options": [
            {
                "text": "非常驕傲自大，覺得自己最聰明",
                "isCorrect": false,
                "explanation": "他不是在驕傲。"
            },
            {
                "text": "內心真實的掙扎，在「追求勝利」與「公平競爭」間拔河",
                "isCorrect": true,
                "explanation": "正確！作者誠實寫出自己差一點就被勝利誘惑的矛盾心理。"
            },
            {
                "text": "為自己的失敗找藉口",
                "isCorrect": false,
                "explanation": "他當時有機會贏，不是找藉口。"
            },
            {
                "text": "對大會標示不清感到極度憤怒",
                "isCorrect": false,
                "explanation": "他沒有抱怨大會。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "作者誠實寫出自己差一點就被勝利誘惑的矛盾心理。"
    },
    {
        "id": "q_l4_mc_5",
        "lessonId": "L4",
        "type": "mcq",
        "category": "人物行動",
        "difficulty": 1,
        "question": "因為語言不通，安納亞最後用什麼方式提醒穆太終點還在前面？",
        "options": [
            {
                "text": "拿出手機用翻譯軟體給他看",
                "isCorrect": false,
                "explanation": "比賽中沒有手機。"
            },
            {
                "text": "用生氣的表情大聲對他吼叫",
                "isCorrect": false,
                "explanation": "安納亞態度很友善。"
            },
            {
                "text": "伸出手輕拍他的背，並伸長食指指向前方",
                "isCorrect": true,
                "explanation": "正確！透過肢體語言與手勢進行溝通。"
            },
            {
                "text": "直接推著他的肩膀把他推過終點線",
                "isCorrect": false,
                "explanation": "他只有輕拍和指引，沒有用推的。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "透過肢體語言與手勢進行溝通。"
    },
    {
        "id": "q_l4_mc_6",
        "lessonId": "L4",
        "type": "mcq",
        "category": "意象推論",
        "difficulty": 4,
        "question": "課文結尾，教練對安納亞說：「比賽就是要贏，你沒有成為優秀的運動員，但成了一個更優秀的人。」這句話的深層涵義是什麼？",
        "options": [
            {
                "text": "教練非常生氣，認為安納亞以後不能再當運動員了",
                "isCorrect": false,
                "explanation": "教練是笑著摟他，並非生氣。"
            },
            {
                "text": "雖然失去了比賽的獎牌，卻展現了比贏得比賽更高尚的品格與運動家精神",
                "isCorrect": true,
                "explanation": "正確！「優秀的人」指的是在道德與品格上獲得了真正的勝利。"
            },
            {
                "text": "教練覺得安納亞跑步技術太差，但人緣很好",
                "isCorrect": false,
                "explanation": "與技術或人緣無關。"
            },
            {
                "text": "暗示安納亞應該去當教練，不要再當選手了",
                "isCorrect": false,
                "explanation": "過度曲解文意。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "「優秀的人」指的是在道德與品格上獲得了真正的勝利。"
    },
    {
        "id": "q_l4_mc_7",
        "lessonId": "L4",
        "type": "mcq",
        "category": "修辭技巧",
        "difficulty": 3,
        "question": "「十二月的寒風一陣陣吹進運動衫，但我絲毫不覺得冷，因為我的肌膚發燙，內心正沸騰著。」這句話使用了什麼寫作技巧？",
        "options": [
            {
                "text": "對比法 (映襯)",
                "isCorrect": true,
                "explanation": "正確！用外在的「寒冷」對比內心的「發燙、沸騰」，強烈凸顯出主角對勝利的渴望與激動。"
            },
            {
                "text": "擬人法 (轉化)",
                "isCorrect": false,
                "explanation": "沒有把物當作人寫。"
            },
            {
                "text": "設問法",
                "isCorrect": false,
                "explanation": "沒有丟出疑問。"
            },
            {
                "text": "排比法",
                "isCorrect": false,
                "explanation": "句型沒有重複排列。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "用外在的「寒冷」對比內心的「發燙、沸騰」，強烈凸顯出主角對勝利的渴望與激動。"
    },
    {
        "id": "q_l4_mc_8",
        "lessonId": "L4",
        "type": "mcq",
        "category": "寫作技巧",
        "difficulty": 3,
        "question": "本課一開頭就詳細描寫了寒風、肌膚發燙等感覺，課本稱之為「以摹寫法開頭」，這樣寫的最主要好處是什麼？",
        "options": [
            {
                "text": "湊字數，讓文章看起來比較長",
                "isCorrect": false,
                "explanation": "不是為了湊字數。"
            },
            {
                "text": "營造畫面感，讓讀者彷彿身歷其境，立刻融入比賽緊張的氣氛中",
                "isCorrect": true,
                "explanation": "正確！像是搭建舞台一樣，讓讀者瞬間被拉進那個寒冷卻又激烈的賽道上。"
            },
            {
                "text": "只是為了炫耀作者的詞彙量很豐富",
                "isCorrect": false,
                "explanation": "是為了服務文章的情境。"
            },
            {
                "text": "暗示這場比賽最後會因為天氣太冷而取消",
                "isCorrect": false,
                "explanation": "比賽順利完成了。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "像是搭建舞台一樣，讓讀者瞬間被拉進那個寒冷卻又激烈的賽道上。"
    },
    {
        "id": "q_l4_mc_9",
        "lessonId": "L4",
        "type": "mcq",
        "category": "修辭辨識",
        "difficulty": 2,
        "question": "「黝黑的肌膚襯得一口白牙，更顯亮眼」這句描寫主要使用了哪種感官的摹寫？",
        "options": [
            {
                "text": "聽覺摹寫",
                "isCorrect": false,
                "explanation": "沒有聲音。"
            },
            {
                "text": "觸覺摹寫",
                "isCorrect": false,
                "explanation": "不是描寫摸起來的感覺。"
            },
            {
                "text": "嗅覺摹寫",
                "isCorrect": false,
                "explanation": "沒有味道。"
            },
            {
                "text": "視覺摹寫",
                "isCorrect": true,
                "explanation": "正確！「黝黑」、「白牙」、「亮眼」都是眼睛看到的色彩與畫面。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "「黝黑」、「白牙」、「亮眼」都是眼睛看到的色彩與畫面。"
    },
    {
        "id": "q_l4_mc_10",
        "lessonId": "L4",
        "type": "mcq",
        "category": "敘事視角",
        "difficulty": 3,
        "question": "關於這篇「課文」的寫作視角，下列敘述何者正確？",
        "options": [
            {
                "text": "採用「第一人稱」，以「我」(安納亞) 的視角敘述，能深刻描寫內心的掙扎",
                "isCorrect": true,
                "explanation": "正確！讀者可以跟著主角一起經歷猶豫、抉擇到最後釋懷的心路歷程。"
            },
            {
                "text": "採用「第三人稱」，以「旁觀者」的角度記錄，非常客觀",
                "isCorrect": false,
                "explanation": "這是新聞報導的寫法，不是課文正文。"
            },
            {
                "text": "採用「第二人稱」，一直用「你」來跟讀者對話",
                "isCorrect": false,
                "explanation": "文中是以「我」自稱。"
            },
            {
                "text": "視角在安納亞和穆太之間不斷切換，讓人搞不清楚是誰在說話",
                "isCorrect": false,
                "explanation": "視角固定在安納亞身上。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "讀者可以跟著主角一起經歷猶豫、抉擇到最後釋懷的心路歷程。"
    },
    {
        "id": "q_l4_mc_11",
        "lessonId": "L4",
        "type": "mcq",
        "category": "敘事視角",
        "difficulty": 3,
        "question": "課本第43頁附了一篇「贏得世界掌聲的輸家」的新聞剪報，請問「新聞報導」通常採用哪一種敘事視角？",
        "options": [
            {
                "text": "第一人稱 (主觀視角)",
                "isCorrect": false,
                "explanation": "記者通常不能把自己的主觀情緒放進新聞裡。"
            },
            {
                "text": "第二人稱 (對話視角)",
                "isCorrect": false,
                "explanation": "新聞不是寫給特定一個人的信。"
            },
            {
                "text": "第三人稱 (客觀視角)",
                "isCorrect": true,
                "explanation": "正確！以旁觀者的角度，客觀陳述「人、事、時、地、物」，讓讀者快速掌握事件全貌。"
            },
            {
                "text": "全知全能視角 (神明視角)",
                "isCorrect": false,
                "explanation": "新聞記者只能寫他們觀察或採訪到的事，無法全知。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "以旁觀者的角度，客觀陳述「人、事、時、地、物」，讓讀者快速掌握事件全貌。"
    },
    {
        "id": "q_l4_mc_12",
        "lessonId": "L4",
        "type": "mcq",
        "category": "詞語解析",
        "difficulty": 2,
        "question": "課文中安納亞說：「就剩幾十公尺，我想『大勢已去』了吧？」請問「大勢已去」是什麼意思？",
        "options": [
            {
                "text": "指比賽現場的觀眾都已經離開了",
                "isCorrect": false,
                "explanation": "觀眾還在熱烈加油。"
            },
            {
                "text": "形容有利的局勢已經喪失，無法挽回",
                "isCorrect": true,
                "explanation": "正確！安納亞覺得剩下的距離太短，自己已經不可能追上對手贏得比賽了。"
            },
            {
                "text": "指風勢太大，把氣球拱門吹跑了",
                "isCorrect": false,
                "explanation": "與天氣無關。"
            },
            {
                "text": "形容對手的氣勢很弱",
                "isCorrect": false,
                "explanation": "是對手氣勢很強一路領先。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "安納亞覺得剩下的距離太短，自己已經不可能追上對手贏得比賽了。"
    },
    {
        "id": "q_l4_mc_13",
        "lessonId": "L4",
        "type": "mcq",
        "category": "詞語解析",
        "difficulty": 4,
        "question": "「穆太一路領先，『兀自』把我拋在後頭。」句中的「兀自」意思最接近下列哪一個詞語？",
        "options": [
            {
                "text": "害怕地",
                "isCorrect": false,
                "explanation": "穆太並不害怕。"
            },
            {
                "text": "生氣地",
                "isCorrect": false,
                "explanation": "穆太沒有生氣。"
            },
            {
                "text": "逕自、仍然",
                "isCorrect": true,
                "explanation": "正確！表示穆太自顧自地往前跑，不管後面的對手如何追趕。"
            },
            {
                "text": "突然",
                "isCorrect": false,
                "explanation": "是持續領先，不是突然。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "表示穆太自顧自地往前跑，不管後面的對手如何追趕。"
    },
    {
        "id": "q_l4_mc_14",
        "lessonId": "L4",
        "type": "mcq",
        "category": "核心主旨",
        "difficulty": 2,
        "question": "為什麼安納亞稱自己是「贏得喝采的輸家」？",
        "options": [
            {
                "text": "因為觀眾可憐他跑太慢，所以給他安慰的掌聲",
                "isCorrect": false,
                "explanation": "掌聲是出於尊敬，不是可憐。"
            },
            {
                "text": "因為他雖然輸了比賽的獎牌，卻因為誠實與高尚的運動家精神贏得了世人的尊敬與喝采",
                "isCorrect": true,
                "explanation": "正確！這句話完美點出了整篇文章的精髓。"
            },
            {
                "text": "因為他是西班牙人，當地觀眾本來就會幫他拍手",
                "isCorrect": false,
                "explanation": "他贏得的是跨越國界的普世價值的喝采。"
            },
            {
                "text": "因為他最後跑輸了還在場邊搞笑，逗樂了觀眾",
                "isCorrect": false,
                "explanation": "這是一件非常嚴肅且令人感動的事。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "這句話完美點出了整篇文章的精髓。"
    },
    {
        "id": "q_l4_mc_15",
        "lessonId": "L4",
        "type": "mcq",
        "category": "語句推論",
        "difficulty": 4,
        "question": "安納亞心想：「若他知道終點的正確位置，我根本就不可能獲勝。」這句話透露出安納亞什麼樣的性格特質？",
        "options": [
            {
                "text": "自卑懦弱",
                "isCorrect": false,
                "explanation": "他拼戰到最後一刻，並不懦弱。"
            },
            {
                "text": "喜歡推卸責任",
                "isCorrect": false,
                "explanation": "他沒有推卸責任。"
            },
            {
                "text": "誠實坦蕩，勇於承認對手在實力上優於自己",
                "isCorrect": true,
                "explanation": "正確！他不願意利用對手的失誤來取得「名不副實」的勝利，這展現了極高的道德感。"
            },
            {
                "text": "充滿嫉妒心",
                "isCorrect": false,
                "explanation": "如果嫉妒，他就會直接衝線搶走冠軍了。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "他不願意利用對手的失誤來取得「名不副實」的勝利，這展現了極高的道德感。"
    },
    {
        "id": "q_l4_mc_16",
        "lessonId": "L4",
        "type": "mcq",
        "category": "成語應用",
        "difficulty": 3,
        "question": "根據新聞報導：「西班牙選手安納亞與冠軍寶座『失之交臂』」，請問『失之交臂』可以用下列哪一個詞語替換？",
        "options": [
            {
                "text": "擦身而過",
                "isCorrect": true,
                "explanation": "正確！「失之交臂」形容錯失了當面的好機會，與擦身而過意思相近。"
            },
            {
                "text": "手到擒來",
                "isCorrect": false,
                "explanation": "意思是輕易取得，完全相反。"
            },
            {
                "text": "滿載而歸",
                "isCorrect": false,
                "explanation": "意思不符。"
            },
            {
                "text": "反敗為勝",
                "isCorrect": false,
                "explanation": "他最後並沒有勝利。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "「失之交臂」形容錯失了當面的好機會，與擦身而過意思相近。"
    },
    {
        "id": "q_l4_mc_17",
        "lessonId": "L4",
        "type": "mcq",
        "category": "成語應用",
        "difficulty": 4,
        "question": "如果我們要用一句成語來形容安納亞最後選擇把冠軍讓給穆太的行為，哪一個最適合？",
        "options": [
            {
                "text": "袖手旁觀",
                "isCorrect": false,
                "explanation": "形容在旁邊看，不幫忙。"
            },
            {
                "text": "落井下石",
                "isCorrect": false,
                "explanation": "形容趁人有危難時加以陷害，安納亞的行為剛好相反。"
            },
            {
                "text": "君子之爭",
                "isCorrect": true,
                "explanation": "正確！指以公正、光明磊落的態度參與競爭，不耍小手段，非常符合安納亞的風範。"
            },
            {
                "text": "不擇手段",
                "isCorrect": false,
                "explanation": "為了達到目的什麼方法都用，這是負面的形容。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "指以公正、光明磊落的態度參與競爭，不耍小手段，非常符合安納亞的風範。"
    },
    {
        "id": "q_l4_mc_18",
        "lessonId": "L4",
        "type": "mcq",
        "category": "細節觀察",
        "difficulty": 3,
        "question": "教練知道安納亞把冠軍拱手讓人後的反應，與安納亞一開始「預期」的反應有什麼不同？",
        "options": [
            {
                "text": "安納亞以為會被稱讚，結果被教練大罵一頓",
                "isCorrect": false,
                "explanation": "完全相反。"
            },
            {
                "text": "安納亞以為會被罵，結果教練非常生氣的打了他",
                "isCorrect": false,
                "explanation": "教練沒有生氣。"
            },
            {
                "text": "安納亞以為會被罵，沒想到教練卻摟著他，高度肯定他的行為",
                "isCorrect": true,
                "explanation": "正確！這個反差也更加深了文章宣揚運動家精神的力道。"
            },
            {
                "text": "安納亞以為教練沒看見，結果教練早就回家了",
                "isCorrect": false,
                "explanation": "教練在終點等他。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "這個反差也更加深了文章宣揚運動家精神的力道。"
    },
    {
        "id": "q_l4_mc_19",
        "lessonId": "L4",
        "type": "mcq",
        "category": "課文主旨",
        "difficulty": 1,
        "question": "安納亞最後覺得，身為運動員，比獲得名次更重要的事情是什麼？",
        "options": [
            {
                "text": "拿到豐厚的獎金",
                "isCorrect": false,
                "explanation": "文中完全沒提獎金。"
            },
            {
                "text": "對自己的要求與可貴的運動家精神",
                "isCorrect": true,
                "explanation": "正確！這是第九段也是全文的最高核心精神。"
            },
            {
                "text": "登上報紙頭條出名",
                "isCorrect": false,
                "explanation": "出名只是意外的結果，不是他的目的。"
            },
            {
                "text": "學會說肯亞語",
                "isCorrect": false,
                "explanation": "雖然語言不通，但無損於高尚的品格展現。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "這是第九段也是全文的最高核心精神。"
    },
    {
        "id": "q_l4_mc_20",
        "lessonId": "L4",
        "type": "mcq",
        "category": "生活實踐",
        "difficulty": 4,
        "question": "學習完這課，如果下次你在大隊接力比賽中，看到別班選手在你面前跌倒掉棒，你覺得最符合「安納亞精神」的做法是什麼？",
        "options": [
            {
                "text": "大聲嘲笑他，然後輕鬆跑過去贏得比賽",
                "isCorrect": false,
                "explanation": "這是落井下石，完全違背運動家精神。"
            },
            {
                "text": "故意踩他的棒子讓他找不到",
                "isCorrect": false,
                "explanation": "這是缺乏品格的惡劣行為。"
            },
            {
                "text": "不管他跌得多嚴重，只要不是自己班的都不關我的事",
                "isCorrect": false,
                "explanation": "缺乏同理心。"
            },
            {
                "text": "關心他的傷勢，雖然仍在競爭中，但保持尊重不取笑對手失誤，憑真實力比賽",
                "isCorrect": true,
                "explanation": "正確！這才是真正的「君子之爭」與運動家風度。"
            }
        ],
        "unitId": "L4",
        "batch": "原本題庫",
        "trap": "這才是真正的「君子之爭」與運動家風度。"
    },
    {
        "id": "q_l5_hw_char_1",
        "lessonId": "L5",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "偶像在舞臺上[[國字:ㄗㄞˋ:載]]歌載舞，配戴這[[國字:ㄈㄨˋ:副]][[國字:ㄐㄧㄢ:監]]聽耳機對表演大有助[[國字:ㄧˋ:益]]。",
        "correctAnswer": "載、副、監、益",
        "explanation": "【解說】「載」在這裡是動詞，指一邊唱歌一邊跳舞(車部)；「副」是量詞(刀部)；「監」是皿部；「益」是皿部。",
        "unitId": "L5",
        "batch": "寫國字",
        "trap": "「載」在這裡是動詞，指一邊唱歌一邊跳舞(車部)；「副」是量詞(刀部)；「監」是皿部；「益」是皿部。"
    },
    {
        "id": "q_l5_hw_char_2",
        "lessonId": "L5",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "為了避開現場[[國字:ㄗㄠˋ:噪]]音的干擾，歌手會戴上耳機來[[國字:ㄅㄧˋ:避]]免走音。",
        "correctAnswer": "噪、避",
        "explanation": "【解說】「噪音」的噪是口部，指吵雜的聲音；「避免」的避是辵(辶)部。",
        "unitId": "L5",
        "batch": "寫國字",
        "trap": "「噪音」的噪是口部，指吵雜的聲音；「避免」的避是辵(辶)部。"
    },
    {
        "id": "q_l5_hw_char_3",
        "lessonId": "L5",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 2,
        "question": "發生火災時，消防員會[[國字:ㄒㄩㄣˋ:迅]]速趕往現場撲[[國字:ㄇㄧㄝˋ:滅]]火勢，救[[國字:ㄩㄢˊ:援]]受困的民眾。",
        "correctAnswer": "迅、滅、援",
        "explanation": "【解說】「迅速」的迅是辵部；「撲滅」的滅是水部；「救援」的援是手部。",
        "unitId": "L5",
        "batch": "寫國字",
        "trap": "「迅速」的迅是辵部；「撲滅」的滅是水部；「救援」的援是手部。"
    },
    {
        "id": "q_l5_hw_char_4",
        "lessonId": "L5",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 4,
        "question": "消防衣可以不怕火[[國字:ㄕㄠ:燒]]，中間的防水層還能防止有毒[[國字:ㄧㄝˋ:液]]體腐[[國字:ㄕˊ:蝕]]，內裡則能隔絕肌膚接[[國字:ㄔㄨˋ:觸]]高溫，至多能[[國字:ㄔㄥˊ:承]]受八百度。",
        "correctAnswer": "燒、液、蝕、觸、承",
        "explanation": "【解說】「燒」是火部；「液」是水部；「蝕」是虫部；「觸」是角部；「承」是手部。這題字都比較難，要特別小心！",
        "unitId": "L5",
        "batch": "寫國字",
        "trap": "「燒」是火部；「液」是水部；「蝕」是虫部；「觸」是角部；「承」是手部。這題字都比較難，要特別小心！"
    },
    {
        "id": "q_l5_hw_char_5",
        "lessonId": "L5",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "大家對打板動作不[[國字:ㄇㄛˋ:陌]]生，它能幫助後製[[國字:ㄕㄜˋ:攝]]影與音效的同步。大量的影音[[國字:ㄉㄤˇ:檔]]案若沒有用場記板[[國字:ㄓㄨˋ:註]]明，找尋起來如同大海[[國字:ㄌㄠ:撈]]針。",
        "correctAnswer": "陌、攝、檔、註、撈",
        "explanation": "【解說】「陌生」的陌是阜(左耳旁)部；「攝影」的攝是手部；「檔案」的檔是木部；「註明」的註是言部；「撈針」的撈是手部。",
        "unitId": "L5",
        "batch": "寫國字",
        "trap": "「陌生」的陌是阜(左耳旁)部；「攝影」的攝是手部；「檔案」的檔是木部；「註明」的註是言部；「撈針」的撈是手部。"
    },
    {
        "id": "q_l5_hw_py_1",
        "lessonId": "L5",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 4,
        "question": "偶像明星在舞臺上[[注音:載:ㄗㄞˋ]]歌載舞。",
        "correctAnswer": "ㄗㄞˋ",
        "explanation": "【解說】「載歌載舞」讀作四聲「ㄗㄞˋ」，指一邊唱歌，一邊跳舞。不要念成三聲「ㄗㄞˇ」喔！",
        "unitId": "L5",
        "batch": "寫注音",
        "trap": "「載歌載舞」讀作四聲「ㄗㄞˋ」，指一邊唱歌，一邊跳舞。不要念成三聲「ㄗㄞˇ」喔！"
    },
    {
        "id": "q_l5_hw_py_2",
        "lessonId": "L5",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 3,
        "question": "防止有毒液體腐[[注音:蝕:ㄕˊ]]。",
        "correctAnswer": "ㄕˊ",
        "explanation": "【解說】腐「蝕」讀作二聲「ㄕˊ」。",
        "unitId": "L5",
        "batch": "寫注音",
        "trap": "腐「蝕」讀作二聲「ㄕˊ」。"
    },
    {
        "id": "q_l5_hw_py_3",
        "lessonId": "L5",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 3,
        "question": "產生大量的影音[[注音:檔:ㄉㄤˇ]]案。",
        "correctAnswer": "ㄉㄤˇ",
        "explanation": "【解說】「檔」案讀作三聲「ㄉㄤˇ」，很多人會口語誤讀成四聲「ㄉㄤˋ」，要特別注意！",
        "unitId": "L5",
        "batch": "寫注音",
        "trap": "「檔」案讀作三聲「ㄉㄤˇ」，很多人會口語誤讀成四聲「ㄉㄤˋ」，要特別注意！"
    },
    {
        "id": "q_l5_hw_py_4",
        "lessonId": "L5",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 2,
        "question": "避免現場[[注音:噪:ㄗㄠˋ]]音干擾。",
        "correctAnswer": "ㄗㄠˋ",
        "explanation": "【解說】「噪」音讀作四聲「ㄗㄠˋ」。",
        "unitId": "L5",
        "batch": "寫注音",
        "trap": "「噪」音讀作四聲「ㄗㄠˋ」。"
    },
    {
        "id": "q_l5_mc_1",
        "lessonId": "L5",
        "type": "mcq",
        "category": "課文理解",
        "difficulty": 2,
        "question": "根據課文，表演者在舞臺上配戴「入耳式監聽耳機」的最主要目的是什麼？",
        "options": [
            {
                "text": "為了造型好看，增加舞臺魅力",
                "isCorrect": false,
                "explanation": "耳機主要是實用功能，並非為了造型。"
            },
            {
                "text": "一耳聽伴奏，一耳聽自己的聲音，藉此掌握實際演唱情況",
                "isCorrect": true,
                "explanation": "正確！這樣可以避免走音或與音樂不同步，並能阻絕現場噪音。"
            },
            {
                "text": "為了隨時聽取經紀人或導演在後臺的指示",
                "isCorrect": false,
                "explanation": "雖然有些耳機有此功能，但文中強調的是監聽「音樂與自己的聲音」。"
            },
            {
                "text": "因為舞臺上的音響壞掉了，只能戴耳機聽",
                "isCorrect": false,
                "explanation": "音響沒壞，是為了避免噪音干擾。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "這樣可以避免走音或與音樂不同步，並能阻絕現場噪音。"
    },
    {
        "id": "q_l5_mc_2",
        "lessonId": "L5",
        "type": "mcq",
        "category": "課外延伸",
        "difficulty": 3,
        "question": "「入耳式監聽耳機」最初被發明出來，是為了解決樂隊中哪一種樂手的困擾？",
        "options": [
            {
                "text": "主唱",
                "isCorrect": false,
                "explanation": "最開始不是為了解決主唱的問題。"
            },
            {
                "text": "吉他手",
                "isCorrect": false,
                "explanation": "吉他手通常有自己的監聽喇叭。"
            },
            {
                "text": "爵士鼓手",
                "isCorrect": true,
                "explanation": "正確！根據補充知識，1995年是為了解決鼓手飽受舞臺噪音干擾的問題而設計的。"
            },
            {
                "text": "鍵盤手",
                "isCorrect": false,
                "explanation": "鍵盤手並非首要發明對象。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "根據補充知識，1995年是為了解決鼓手飽受舞臺噪音干擾的問題而設計的。"
    },
    {
        "id": "q_l5_mc_3",
        "lessonId": "L5",
        "type": "mcq",
        "category": "細節觀察",
        "difficulty": 2,
        "question": "消防衣之所以不怕火，是因為它有「三層保護」。請問最外面那一層（表面）的功能是什麼？",
        "options": [
            {
                "text": "隔絕肌膚接觸到高溫",
                "isCorrect": false,
                "explanation": "這是最內裡「隔熱層」的功能。"
            },
            {
                "text": "防止有毒液體腐蝕",
                "isCorrect": false,
                "explanation": "這是中間「防水層」的功能。"
            },
            {
                "text": "含有金屬塗料，將大部分的熱輻射反射回去",
                "isCorrect": true,
                "explanation": "正確！最外層是「反射層」，用來反射熱能。"
            },
            {
                "text": "能夠自動噴出乾粉滅火",
                "isCorrect": false,
                "explanation": "消防衣沒有這種科幻的功能。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "最外層是「反射層」，用來反射熱能。"
    },
    {
        "id": "q_l5_mc_4",
        "lessonId": "L5",
        "type": "mcq",
        "category": "課文理解",
        "difficulty": 3,
        "question": "關於消防衣的特性，下列敘述何者**錯誤**？",
        "options": [
            {
                "text": "這件衣服至多能承受攝氏八百度的高溫",
                "isCorrect": false,
                "explanation": "這是正確的敘述。"
            },
            {
                "text": "穿上這件衣服，消防員就可以在火場中待上無限長的時間",
                "isCorrect": true,
                "explanation": "錯誤！圖解說明「接觸火焰過久仍會燒毀」，它只是「爭取多一些時間」，不能無限期抵擋高溫。"
            },
            {
                "text": "中間的防水層可以防止有毒液體腐蝕",
                "isCorrect": false,
                "explanation": "這是正確的敘述。"
            },
            {
                "text": "能保護消防員的安全，爭取救援受困民眾的時間",
                "isCorrect": false,
                "explanation": "這是正確的敘述。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "錯誤！圖解說明「接觸火焰過久仍會燒毀」，它只是「爭取多一些時間」，不能無限期抵擋高溫。"
    },
    {
        "id": "q_l5_mc_5",
        "lessonId": "L5",
        "type": "mcq",
        "category": "細節推論",
        "difficulty": 2,
        "question": "拍攝電影時，工作人員在鏡頭前「打板」的最主要功用是什麼？",
        "options": [
            {
                "text": "為了叫現場的演員與工作人員保持安靜",
                "isCorrect": false,
                "explanation": "雖然打板會發出聲音，但主要目的不是為了管理秩序。"
            },
            {
                "text": "利用打板的聲音，提醒錄製的起始點，方便後製將影音同步",
                "isCorrect": true,
                "explanation": "正確！因為電影的影像和聲音是分開錄的，打板聲能幫助後製人員精準對齊聲軌與影像。"
            },
            {
                "text": "用來測量現場的燈光亮度是否足夠",
                "isCorrect": false,
                "explanation": "那是測光表的功能，不是場記板。"
            },
            {
                "text": "作為演員開始講臺詞的信號",
                "isCorrect": false,
                "explanation": "演員是聽導演喊「Action」才開始表演的。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "因為電影的影像和聲音是分開錄的，打板聲能幫助後製人員精準對齊聲軌與影像。"
    },
    {
        "id": "q_l5_mc_6",
        "lessonId": "L5",
        "type": "mcq",
        "category": "詞語解析",
        "difficulty": 3,
        "question": "課文中提到「若沒有妥善安排，要找到同一幕的影音並將它們合在一起，無疑是『大海撈針』」，請問「大海撈針」是什麼意思？",
        "options": [
            {
                "text": "形容東西掉進海裡，永遠找不回來",
                "isCorrect": false,
                "explanation": "不一定是掉進海裡，而是強調尋找的難度。"
            },
            {
                "text": "比喻東西很渺小，不值得去尋找",
                "isCorrect": false,
                "explanation": "不是因為不值得，是因為太難找。"
            },
            {
                "text": "比喻尋找的範圍很大，要找到目標極為困難",
                "isCorrect": true,
                "explanation": "正確！形容在浩瀚的檔案中尋找特定的一個檔案，非常費時費力。"
            },
            {
                "text": "形容做事情非常細心，連針都找得到",
                "isCorrect": false,
                "explanation": "這是一個形容困難的詞，不是稱讚細心。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "形容在浩瀚的檔案中尋找特定的一個檔案，非常費時費力。"
    },
    {
        "id": "q_l5_mc_7",
        "lessonId": "L5",
        "type": "mcq",
        "category": "文體分析",
        "difficulty": 2,
        "question": "《哇！原來如此》這篇文章，主要是運用哪一種寫作結構來介紹這三種職業的秘密？",
        "options": [
            {
                "text": "按照時間發生的先後順序來寫",
                "isCorrect": false,
                "explanation": "這三個職業之間沒有時間先後關係。"
            },
            {
                "text": "提出現象 ➡️ 提出問題 ➡️ 解答問題 說明事理",
                "isCorrect": true,
                "explanation": "正確！每一段都是先描述一個常見現象，接著用問號提問，最後給出專業的解答。"
            },
            {
                "text": "運用第一人稱敘述一個感人的故事",
                "isCorrect": false,
                "explanation": "這是一篇說明文，不是抒情或記事故事。"
            },
            {
                "text": "正反兩面論述，最後得出一個結論",
                "isCorrect": false,
                "explanation": "這是議論文的結構，本課並未進行正反辯論。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "每一段都是先描述一個常見現象，接著用問號提問，最後給出專業的解答。"
    },
    {
        "id": "q_l5_mc_8",
        "lessonId": "L5",
        "type": "mcq",
        "category": "修辭技巧",
        "difficulty": 3,
        "question": "課本「加油小站」介紹了「設問法」。請問「提到生活中常見的職業，你會想到什麼呢？」屬於哪一種設問？",
        "options": [
            {
                "text": "懸問：作者內心也沒有確切答案，留給讀者思考",
                "isCorrect": true,
                "explanation": "正確！因為每個人的答案都不一樣，所以是一種開放式的懸問。"
            },
            {
                "text": "激問(反問)：答案就在問題的反面",
                "isCorrect": false,
                "explanation": "激問通常是「難道...不...嗎？」。"
            },
            {
                "text": "提問：作者自問自答",
                "isCorrect": false,
                "explanation": "作者後面並沒有列出所有常見職業。"
            },
            {
                "text": "疑問：單純因為不懂而發問",
                "isCorrect": false,
                "explanation": "這是一種修辭手法，作者並非真的不懂。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "因為每個人的答案都不一樣，所以是一種開放式的懸問。"
    },
    {
        "id": "q_l5_mc_9",
        "lessonId": "L5",
        "type": "mcq",
        "category": "修辭技巧",
        "difficulty": 4,
        "question": "下列哪一句話使用了「提問 (自問自答)」的設問法？",
        "options": [
            {
                "text": "難道消防員都不怕火嗎？",
                "isCorrect": false,
                "explanation": "這是激問，答案在反面(當然怕火)。"
            },
            {
                "text": "生活中常見的職業，是否有令人好奇的工作內容？答案是有的。",
                "isCorrect": true,
                "explanation": "正確！作者自己拋出問題，緊接著自己給出答案，這就是「提問」。"
            },
            {
                "text": "未來你想從事什麼職業呢？",
                "isCorrect": false,
                "explanation": "這是懸問，答案因人而異。"
            },
            {
                "text": "是誰把我的橡皮擦拿走了？",
                "isCorrect": false,
                "explanation": "這只是一般的疑問句，不是修辭。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "作者自己拋出問題，緊接著自己給出答案，這就是「提問」。"
    },
    {
        "id": "q_l5_mc_10",
        "lessonId": "L5",
        "type": "mcq",
        "category": "修辭技巧",
        "difficulty": 3,
        "question": "為什麼作者在介紹每一個職業秘密之前，都要先用一個「問句（設問法）」作為開頭？",
        "options": [
            {
                "text": "為了湊字數，讓文章看起來長一點",
                "isCorrect": false,
                "explanation": "這不是修辭的目的。"
            },
            {
                "text": "因為作者自己也不確定答案，希望讀者幫忙找",
                "isCorrect": false,
                "explanation": "作者在下一段都有詳細解答。"
            },
            {
                "text": "增強與讀者的互動，引發讀者的好奇心與閱讀動機",
                "isCorrect": true,
                "explanation": "正確！拋出一個生活常見但容易被忽略的問題，能成功勾起讀者想往下看的欲望。"
            },
            {
                "text": "為了考驗讀者有沒有專心看文章",
                "isCorrect": false,
                "explanation": "不是為了考試。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "拋出一個生活常見但容易被忽略的問題，能成功勾起讀者想往下看的欲望。"
    },
    {
        "id": "q_l5_mc_11",
        "lessonId": "L5",
        "type": "mcq",
        "category": "成語歸類",
        "difficulty": 2,
        "question": "「春風化雨、百年樹人」最適合用來形容下列哪一種職業？",
        "options": [
            {
                "text": "醫師",
                "isCorrect": false,
                "explanation": "醫師通常用仁心仁術。"
            },
            {
                "text": "教師",
                "isCorrect": true,
                "explanation": "正確！這兩個成語都是用來讚揚師長對學生的教導與培育之恩。"
            },
            {
                "text": "農夫",
                "isCorrect": false,
                "explanation": "雖然有「樹」，但百年樹人是指培育人才。"
            },
            {
                "text": "園丁",
                "isCorrect": false,
                "explanation": "字面上的種植，但這成語專指教育。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "這兩個成語都是用來讚揚師長對學生的教導與培育之恩。"
    },
    {
        "id": "q_l5_mc_12",
        "lessonId": "L5",
        "type": "mcq",
        "category": "成語歸類",
        "difficulty": 2,
        "question": "如果你要寫卡片感謝救了你一命的醫生，使用下列哪一個成語最恰當？",
        "options": [
            {
                "text": "赴湯蹈火",
                "isCorrect": false,
                "explanation": "這是形容消防員不避危險。"
            },
            {
                "text": "天籟之音",
                "isCorrect": false,
                "explanation": "這是形容歌手聲音好聽。"
            },
            {
                "text": "妙手回春",
                "isCorrect": true,
                "explanation": "正確！稱讚醫生醫術高明，能把垂危的病人治好。"
            },
            {
                "text": "杏壇之光",
                "isCorrect": false,
                "explanation": "「杏壇」是指教育界，醫生應該用「杏林」。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "稱讚醫生醫術高明，能把垂危的病人治好。"
    },
    {
        "id": "q_l5_mc_13",
        "lessonId": "L5",
        "type": "mcq",
        "category": "成語應用",
        "difficulty": 4,
        "question": "課本中提到「杏壇」代表教育界，而「杏林」代表醫學界。請問下列哪個句子使用**正確**？",
        "options": [
            {
                "text": "林醫師醫術精湛，真可說是「杏壇之光」。",
                "isCorrect": false,
                "explanation": "醫師應使用「杏林」。"
            },
            {
                "text": "張老師奉獻教育三十年，實為「杏林春暖」。",
                "isCorrect": false,
                "explanation": "老師應使用「杏壇」。"
            },
            {
                "text": "這位歌星的歌聲有如天籟，為「杏壇」增添光彩。",
                "isCorrect": false,
                "explanation": "歌星與杏壇(教育)無關。"
            },
            {
                "text": "孔子在「杏壇」講學，後人便以此代稱教育界。",
                "isCorrect": true,
                "explanation": "正確！這正是「杏壇」一詞的由來。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "這正是「杏壇」一詞的由來。"
    },
    {
        "id": "q_l5_mc_14",
        "lessonId": "L5",
        "type": "mcq",
        "category": "成語歸類",
        "difficulty": 2,
        "question": "「黃鶯出谷、餘音繞梁」是用來讚美哪一種職業的工作表現？",
        "options": [
            {
                "text": "歌手",
                "isCorrect": true,
                "explanation": "正確！這兩個成語都是用來形容聲音清脆悅耳、歌聲優美動人。"
            },
            {
                "text": "配音員",
                "isCorrect": false,
                "explanation": "雖然也靠聲音，但這些成語多特指「歌聲」。"
            },
            {
                "text": "演說家",
                "isCorrect": false,
                "explanation": "演說家通常用「口若懸河」。"
            },
            {
                "text": "消防員",
                "isCorrect": false,
                "explanation": "完全無關。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "這兩個成語都是用來形容聲音清脆悅耳、歌聲優美動人。"
    },
    {
        "id": "q_l5_mc_15",
        "lessonId": "L5",
        "type": "mcq",
        "category": "字詞義測驗",
        "difficulty": 3,
        "question": "「有些職業我們耳熟能詳，能大致描繪出它們的樣貌，不足為奇。」句中的「不足為奇」意思為何？",
        "options": [
            {
                "text": "數量太少，覺得很奇怪",
                "isCorrect": false,
                "explanation": "不是數量的意思。"
            },
            {
                "text": "事物很平常，沒有什麼覺得奇怪的地方",
                "isCorrect": true,
                "explanation": "正確！因為太常見了，所以覺得很普通、不奇怪。"
            },
            {
                "text": "腳力不夠，走不到神奇的地方",
                "isCorrect": false,
                "explanation": "「足」在這裡是「值得」的意思，不是腳。"
            },
            {
                "text": "非常神奇，令人嘆為觀止",
                "isCorrect": false,
                "explanation": "完全相反的意思。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "因為太常見了，所以覺得很普通、不奇怪。"
    },
    {
        "id": "q_l5_mc_16",
        "lessonId": "L5",
        "type": "mcq",
        "category": "常識推論",
        "difficulty": 3,
        "question": "電影場記板上面通常會寫著「SCENE: 5 / TAKE: 1」等英文字，你推測這有什麼作用？",
        "options": [
            {
                "text": "提醒演員現在是第幾場戲的第幾次拍攝",
                "isCorrect": true,
                "explanation": "正確！SCENE是場次，TAKE是拍攝次數，方便後製對照劇本尋找檔案。"
            },
            {
                "text": "顯示今天的日期跟時間",
                "isCorrect": false,
                "explanation": "雖然板子上也會有日期，但 SCENE/TAKE 不是指時間。"
            },
            {
                "text": "告訴攝影師鏡頭要轉幾度",
                "isCorrect": false,
                "explanation": "不是角度。"
            },
            {
                "text": "記錄演員的薪水",
                "isCorrect": false,
                "explanation": "太扯了，完全無關。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "SCENE是場次，TAKE是拍攝次數，方便後製對照劇本尋找檔案。"
    },
    {
        "id": "q_l5_mc_17",
        "lessonId": "L5",
        "type": "mcq",
        "category": "成語應用",
        "difficulty": 3,
        "question": "消防員為了保護人民生命財產，常常出入危險的火場。我們可以用哪一個成語來形容他們？",
        "options": [
            {
                "text": "赴湯蹈火",
                "isCorrect": true,
                "explanation": "正確！比喻奮不顧身，不避危險。「湯」指熱水，「火」指烈火，非常符合消防員的情境。"
            },
            {
                "text": "走馬看花",
                "isCorrect": false,
                "explanation": "形容略觀事物外象，不究其底蘊。"
            },
            {
                "text": "火上加油",
                "isCorrect": false,
                "explanation": "比喻使事態更加嚴重。"
            },
            {
                "text": "水深火熱",
                "isCorrect": false,
                "explanation": "形容處境非常艱難痛苦，通常指受災的災民，不是指救災的人。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "比喻奮不顧身，不避危險。「湯」指熱水，「火」指烈火，非常符合消防員的情境。"
    },
    {
        "id": "q_l5_mc_18",
        "lessonId": "L5",
        "type": "mcq",
        "category": "字義辨析",
        "difficulty": 4,
        "question": "消防員「反其道而行」朝火場前進。「其道」在這裡指的是什麼？",
        "options": [
            {
                "text": "消防車專用的車道",
                "isCorrect": false,
                "explanation": "不是指實際的道路。"
            },
            {
                "text": "一般人遇到火災時會「向外逃生」的常理路線",
                "isCorrect": true,
                "explanation": "正確！一般人往外逃，消防員卻往裡面衝，這就是「反其道而行」。"
            },
            {
                "text": "火勢蔓延的方向",
                "isCorrect": false,
                "explanation": "消防員是要去滅火，不是跟著火跑。"
            },
            {
                "text": "道德與法律的規範",
                "isCorrect": false,
                "explanation": "在這是指物理的行動方向常理。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "一般人往外逃，消防員卻往裡面衝，這就是「反其道而行」。"
    },
    {
        "id": "q_l5_mc_19",
        "lessonId": "L5",
        "type": "mcq",
        "category": "寫作邏輯",
        "difficulty": 4,
        "question": "作者在寫這一課時，將「歌手、消防員、電影工作人員」放在一起介紹，他們之間的共同點是什麼？",
        "options": [
            {
                "text": "他們都是薪水很高的職業",
                "isCorrect": false,
                "explanation": "文中未提薪水。"
            },
            {
                "text": "他們的工作都非常危險",
                "isCorrect": false,
                "explanation": "歌手跟打板人員並不危險。"
            },
            {
                "text": "他們的工作內容中，都有使用特定裝備來解決隱藏問題的秘密",
                "isCorrect": true,
                "explanation": "正確！這是貫穿全文的核心概念。"
            },
            {
                "text": "他們都需要經過國家考試才能錄取",
                "isCorrect": false,
                "explanation": "歌手跟電影人員不需要。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "這是貫穿全文的核心概念。"
    },
    {
        "id": "q_l5_mc_20",
        "lessonId": "L5",
        "type": "mcq",
        "category": "生活實踐",
        "difficulty": 3,
        "question": "讀完這課後，如果你在路上看到「郵差先生」，你想模仿作者寫一段「哇！原來如此」的文章，你應該先做什麼？",
        "options": [
            {
                "text": "直接去問他一個月賺多少錢",
                "isCorrect": false,
                "explanation": "這是不禮貌且與主題無關的問題。"
            },
            {
                "text": "觀察他的裝備(例如郵差包、機車)，並找資料研究背後是否有特殊設計或秘密",
                "isCorrect": true,
                "explanation": "正確！這正是這課想要教導的：對常見事物保持好奇心，並主動探索原因。"
            },
            {
                "text": "幫他把信送完",
                "isCorrect": false,
                "explanation": "雖然熱心，但不能亂動別人的信件。"
            },
            {
                "text": "抱怨他送信太慢",
                "isCorrect": false,
                "explanation": "這完全不是學習這課的目的。"
            }
        ],
        "unitId": "L5",
        "batch": "原本題庫",
        "trap": "這正是這課想要教導的：對常見事物保持好奇心，並主動探索原因。"
    },
    {
        "id": "q_l6_hw_char_1",
        "lessonId": "L6",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "阿姆斯壯駕駛登月小[[國字:ㄊㄧㄥˇ:艇]]，他冷靜的聲音[[國字:ㄏㄨㄚˋ:劃]]破了[[國字:ㄏㄨㄤ:荒]]涼寂靜，在無[[國字:ㄧㄣˊ:垠]]的太空中留下歷史。",
        "correctAnswer": "艇、劃、荒、垠",
        "explanation": "【解說】「小艇」的艇是舟部；「劃破」的劃是刀部；「荒涼」的荒是艸部；「無垠」的垠是土部，指沒有邊際。",
        "unitId": "L6",
        "batch": "寫國字",
        "trap": "「小艇」的艇是舟部；「劃破」的劃是刀部；「荒涼」的荒是艸部；「無垠」的垠是土部，指沒有邊際。"
    },
    {
        "id": "q_l6_hw_char_2",
        "lessonId": "L6",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "這項創舉在[[國字:ㄩˇ:宇]][[國字:ㄓㄡˋ:宙]]探索史上翻開不[[國字:ㄒㄧㄡˇ:朽]]的一頁，許多航空雜[[國字:ㄓˋ:誌]]都有相關報導。",
        "correctAnswer": "宇、宙、朽、誌",
        "explanation": "【解說】「宇宙」都是宀部；「不朽」的朽是木部，指不會腐壞、磨滅；「雜誌」的誌是言部，指記錄的文字。",
        "unitId": "L6",
        "batch": "寫國字",
        "trap": "「宇宙」都是宀部；「不朽」的朽是木部，指不會腐壞、磨滅；「雜誌」的誌是言部，指記錄的文字。"
    },
    {
        "id": "q_l6_hw_char_3",
        "lessonId": "L6",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "參加這一[[國字:ㄒㄧˋ:系]]列的太空[[國字:ㄒㄩㄣˋ:訓]]練，必須忍受各種機[[國字:ㄒㄧㄝˋ:械]]聲，並在狹小的指揮[[國字:ㄘㄤ:艙]]內進行任務。",
        "correctAnswer": "系、訓、械、艙",
        "explanation": "【解說】「系列」的系是糸部；「訓練」的訓是言部；「機械」的械是木部；「指揮艙」的艙是舟部。",
        "unitId": "L6",
        "batch": "寫國字",
        "trap": "「系列」的系是糸部；「訓練」的訓是言部；「機械」的械是木部；「指揮艙」的艙是舟部。"
    },
    {
        "id": "q_l6_hw_char_4",
        "lessonId": "L6",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 4,
        "question": "兩位太空人[[國字:ㄐㄧㄚˋ:駕]]駛小艇，在[[國字:ㄌㄧㄥˊ:凌]]晨時分降落。月球表面充滿了[[國字:ㄩㄣˇ:隕]]石坑，極目遠[[國字:ㄊㄧㄠˋ:眺]]，一片寂靜。",
        "correctAnswer": "駕、凌、隕、眺",
        "explanation": "【解說】「駕駛」的駕是馬部；「凌晨」的凌是冫(冰)部；「隕石坑」的隕是阜(左耳)部；「遠眺」的眺是目部。",
        "unitId": "L6",
        "batch": "寫國字",
        "trap": "「駕駛」的駕是馬部；「凌晨」的凌是冫(冰)部；「隕石坑」的隕是阜(左耳)部；「遠眺」的眺是目部。"
    },
    {
        "id": "q_l6_hw_char_5",
        "lessonId": "L6",
        "type": "handwriting",
        "category": "寫國字",
        "difficulty": 3,
        "question": "藍綠色的地球在太空中燦爛[[國字:ㄉㄨㄛˊ:奪]]目。這次遠[[國字:ㄓㄥ:征]]月球的壯舉，吸引了六[[國字:ㄧˋ:億]]人的關注。",
        "correctAnswer": "奪、征、億",
        "explanation": "【解說】「奪目」的奪是大部；「遠征」的征是彳部；「六億」的億是人部。",
        "unitId": "L6",
        "batch": "寫國字",
        "trap": "「奪目」的奪是大部；「遠征」的征是彳部；「六億」的億是人部。"
    },
    {
        "id": "q_l6_hw_py_1",
        "lessonId": "L6",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 4,
        "question": "聲音[[注音:劃:ㄏㄨㄚˋ]]破荒涼寂靜。",
        "correctAnswer": "ㄏㄨㄚˋ",
        "explanation": "【解說】「劃破」在這裡讀作四聲「ㄏㄨㄚˋ」，指分開、切開。",
        "unitId": "L6",
        "batch": "寫注音",
        "trap": "「劃破」在這裡讀作四聲「ㄏㄨㄚˋ」，指分開、切開。"
    },
    {
        "id": "q_l6_hw_py_2",
        "lessonId": "L6",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 3,
        "question": "在無[[注音:垠:ㄧㄣˊ]]的宇宙。",
        "correctAnswer": "ㄧㄣˊ",
        "explanation": "【解說】「無垠」讀作二聲「ㄧㄣˊ」，指沒有邊際。不要有邊讀邊念成「ㄍㄣ」喔！",
        "unitId": "L6",
        "batch": "寫注音",
        "trap": "「無垠」讀作二聲「ㄧㄣˊ」，指沒有邊際。不要有邊讀邊念成「ㄍㄣ」喔！"
    },
    {
        "id": "q_l6_hw_py_3",
        "lessonId": "L6",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 3,
        "question": "脫離指揮[[注音:艙:ㄘㄤ]]。",
        "correctAnswer": "ㄘㄤ",
        "explanation": "【解說】「艙」讀作一聲「ㄘㄤ」。",
        "unitId": "L6",
        "batch": "寫注音",
        "trap": "「艙」讀作一聲「ㄘㄤ」。"
    },
    {
        "id": "q_l6_hw_py_4",
        "lessonId": "L6",
        "type": "handwriting",
        "category": "寫注音",
        "difficulty": 4,
        "question": "極目遠[[注音:眺:ㄊㄧㄠˋ]]。",
        "correctAnswer": "ㄊㄧㄠˋ",
        "explanation": "【解說】「眺」讀作四聲「ㄊㄧㄠˋ」，指向遠處看。",
        "unitId": "L6",
        "batch": "寫注音",
        "trap": "「眺」讀作四聲「ㄊㄧㄠˋ」，指向遠處看。"
    },
    {
        "id": "q_l6_mc_1",
        "lessonId": "L6",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 1,
        "question": "歷史上第一位踏上月球的太空人是誰？",
        "options": [
            {
                "text": "麥可·柯林斯",
                "isCorrect": false,
                "explanation": "他負責留守指揮艙。"
            },
            {
                "text": "尼爾·阿姆斯壯",
                "isCorrect": true,
                "explanation": "正確！阿姆斯壯是第一位踏上月球的太空人。"
            },
            {
                "text": "伯茲·艾德林",
                "isCorrect": false,
                "explanation": "他是第二位踏上月球的太空人。"
            },
            {
                "text": "傑瑞·哈維",
                "isCorrect": false,
                "explanation": "這是發明監聽耳機的人（第五課）。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "阿姆斯壯是第一位踏上月球的太空人。"
    },
    {
        "id": "q_l6_mc_2",
        "lessonId": "L6",
        "type": "mcq",
        "category": "課外延伸",
        "difficulty": 2,
        "question": "阿波羅十一號任務中，負責留守指揮艙並繞月飛行，沒有踏上月球表面的太空人是誰？",
        "options": [
            {
                "text": "尼爾·阿姆斯壯",
                "isCorrect": false,
                "explanation": "他登上了月球。"
            },
            {
                "text": "麥可·柯林斯",
                "isCorrect": true,
                "explanation": "正確！根據補充資料，柯林斯擔任指揮艙駕駛員，留守指揮艙繞月飛行。"
            },
            {
                "text": "伯茲·艾德林",
                "isCorrect": false,
                "explanation": "他登上了月球。"
            },
            {
                "text": "萊特兄弟",
                "isCorrect": false,
                "explanation": "他們發明了飛機。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "根據補充資料，柯林斯擔任指揮艙駕駛員，留守指揮艙繞月飛行。"
    },
    {
        "id": "q_l6_mc_3",
        "lessonId": "L6",
        "type": "mcq",
        "category": "寫作技巧",
        "difficulty": 2,
        "question": "課文一開頭引用了阿姆斯壯的名言：「這是我的一小步，卻是人類的一大步。」這樣的寫作手法稱為什麼？",
        "options": [
            {
                "text": "摹寫法",
                "isCorrect": false,
                "explanation": "摹寫法是描寫感官感受。"
            },
            {
                "text": "引用法",
                "isCorrect": true,
                "explanation": "正確！在文章開頭直接引用名言，可以吸引讀者注意，並點出文章的核心事件。"
            },
            {
                "text": "擬人法",
                "isCorrect": false,
                "explanation": "沒有將物擬人。"
            },
            {
                "text": "譬喻法",
                "isCorrect": false,
                "explanation": "沒有使用譬喻。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "在文章開頭直接引用名言，可以吸引讀者注意，並點出文章的核心事件。"
    },
    {
        "id": "q_l6_mc_4",
        "lessonId": "L6",
        "type": "mcq",
        "category": "句意推論",
        "difficulty": 3,
        "question": "「這是我的一小步，卻是人類的一大步。」句中的「一大步」代表什麼涵義？",
        "options": [
            {
                "text": "太空人在月球上跳躍的距離很遠",
                "isCorrect": false,
                "explanation": "不是指實際的距離。"
            },
            {
                "text": "這項創舉代表了全人類在太空探索領域的重大突破",
                "isCorrect": true,
                "explanation": "正確！雖然只是個人跨出的一小步，對人類科學史卻是極具意義的里程碑。"
            },
            {
                "text": "登月小艇與地球的距離非常遙遠",
                "isCorrect": false,
                "explanation": "不是形容距離。"
            },
            {
                "text": "為了這次登月花費了非常多的金錢",
                "isCorrect": false,
                "explanation": "不是指金錢。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "雖然只是個人跨出的一小步，對人類科學史卻是極具意義的里程碑。"
    },
    {
        "id": "q_l6_mc_5",
        "lessonId": "L6",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 2,
        "question": "根據課文，阿姆斯壯為了成為太空人，必須接受許多嚴格的訓練，下列何者**不包括**在內？",
        "options": [
            {
                "text": "不斷翻轉的無重力訓練",
                "isCorrect": false,
                "explanation": "課文中有提到。"
            },
            {
                "text": "學習用多國語言與外星人溝通",
                "isCorrect": true,
                "explanation": "錯誤！課文中沒有提到這項訓練。"
            },
            {
                "text": "火箭發射和衝進大氣層的衝擊訓練",
                "isCorrect": false,
                "explanation": "課文中有提到。"
            },
            {
                "text": "身穿沉重的太空衣走上幾個小時",
                "isCorrect": false,
                "explanation": "課文中有提到。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "錯誤！課文中沒有提到這項訓練。"
    },
    {
        "id": "q_l6_mc_6",
        "lessonId": "L6",
        "type": "mcq",
        "category": "寫作技巧",
        "difficulty": 3,
        "question": "「倒數聲夾雜著震耳的響聲，『3、2、1、0』火箭伴隨濃濃白煙，拖著火紅的尾巴直衝雲霄。」這段文字屬於什麼樣的描寫？",
        "options": [
            {
                "text": "靜態描寫",
                "isCorrect": false,
                "explanation": "火箭發射充滿了聲音與動作。"
            },
            {
                "text": "動態描寫",
                "isCorrect": true,
                "explanation": "正確！文字生動地寫出了火箭發射時聲音、動作與畫面的劇烈變化。"
            },
            {
                "text": "心理描寫",
                "isCorrect": false,
                "explanation": "沒有描寫人物的內心感受。"
            },
            {
                "text": "外貌描寫",
                "isCorrect": false,
                "explanation": "不是在描寫人物長相。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "文字生動地寫出了火箭發射時聲音、動作與畫面的劇烈變化。"
    },
    {
        "id": "q_l6_mc_7",
        "lessonId": "L6",
        "type": "mcq",
        "category": "修辭技巧",
        "difficulty": 2,
        "question": "「一望無際的沙灰色就像沉睡中的巨人。」這句話使用了哪一種修辭法？",
        "options": [
            {
                "text": "譬喻",
                "isCorrect": true,
                "explanation": "正確！使用「像」字，將沙灰色的月球表面比喻為沉睡中的巨人。"
            },
            {
                "text": "擬人",
                "isCorrect": false,
                "explanation": "「巨人」本身就是人，所以這是譬喻而非擬人。"
            },
            {
                "text": "設問",
                "isCorrect": false,
                "explanation": "沒有丟出問題。"
            },
            {
                "text": "誇飾",
                "isCorrect": false,
                "explanation": "主要是在比喻形狀與氛圍。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "使用「像」字，將沙灰色的月球表面比喻為沉睡中的巨人。"
    },
    {
        "id": "q_l6_mc_8",
        "lessonId": "L6",
        "type": "mcq",
        "category": "寫作技巧",
        "difficulty": 3,
        "question": "「太空一片象灰與濃黑，寂靜而神秘。」這段文字營造了什麼樣的視覺感受？",
        "options": [
            {
                "text": "熱鬧繽紛的動態畫面",
                "isCorrect": false,
                "explanation": "「寂靜」與熱鬧相反。"
            },
            {
                "text": "荒涼冷清且靜止的靜態畫面",
                "isCorrect": true,
                "explanation": "正確！這是一段標準的「靜態描寫」，強調色彩的單調與氛圍的沉靜。"
            },
            {
                "text": "充滿危機的緊張感",
                "isCorrect": false,
                "explanation": "強調的是神祕，而非危機。"
            },
            {
                "text": "溫馨感人的親情",
                "isCorrect": false,
                "explanation": "與親情無關。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "這是一段標準的「靜態描寫」，強調色彩的單調與氛圍的沉靜。"
    },
    {
        "id": "q_l6_mc_9",
        "lessonId": "L6",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 2,
        "question": "太空人在月球上漫步時，「像袋鼠輕巧的跳躍」，他們在月球表面進行了哪些工作？",
        "options": [
            {
                "text": "尋找外星人的蹤跡",
                "isCorrect": false,
                "explanation": "沒有這項任務。"
            },
            {
                "text": "採集月球表面的樣本、拍照，安置研究設備",
                "isCorrect": true,
                "explanation": "正確！這是課文第七段提到的主要工作。"
            },
            {
                "text": "蓋了一座太空基地",
                "isCorrect": false,
                "explanation": "他們只待了兩個半小時。"
            },
            {
                "text": "和地球的家人視訊聊天",
                "isCorrect": false,
                "explanation": "課文未提及。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "這是課文第七段提到的主要工作。"
    },
    {
        "id": "q_l6_mc_10",
        "lessonId": "L6",
        "type": "mcq",
        "category": "情緒推論",
        "difficulty": 3,
        "question": "當阿姆斯壯在月球上看著地球升起，心裡覺得「熟悉卻又如此陌生」，為什麼他會有這種矛盾的感覺？",
        "options": [
            {
                "text": "因為他忘記地球長什麼樣子了",
                "isCorrect": false,
                "explanation": "不可能忘記家鄉。"
            },
            {
                "text": "因為那是他的家鄉(熟悉)，但他從未以這種從外太空遙望的視角看過地球(陌生)",
                "isCorrect": true,
                "explanation": "正確！這種距離感與全新視角帶來了強烈的震撼。"
            },
            {
                "text": "因為地球被外星人改造了",
                "isCorrect": false,
                "explanation": "無稽之談。"
            },
            {
                "text": "因為他得了太空病，產生幻覺",
                "isCorrect": false,
                "explanation": "課文未提及。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "這種距離感與全新視角帶來了強烈的震撼。"
    },
    {
        "id": "q_l6_mc_11",
        "lessonId": "L6",
        "type": "mcq",
        "category": "修辭技巧",
        "difficulty": 3,
        "question": "「彷彿黑絲絨上一顆滾圓的夜明珠，燦爛奪目。」這是用來形容什麼景物？",
        "options": [
            {
                "text": "月球表面",
                "isCorrect": false,
                "explanation": "月球表面是象灰與濃黑。"
            },
            {
                "text": "太陽",
                "isCorrect": false,
                "explanation": "太陽不會像夜明珠。"
            },
            {
                "text": "從太空中看到的地球",
                "isCorrect": true,
                "explanation": "正確！黑絲絨比喻漆黑的太空，夜明珠比喻發出藍綠光芒的地球。"
            },
            {
                "text": "阿姆斯壯的眼睛",
                "isCorrect": false,
                "explanation": "不是形容眼睛。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "黑絲絨比喻漆黑的太空，夜明珠比喻發出藍綠光芒的地球。"
    },
    {
        "id": "q_l6_mc_12",
        "lessonId": "L6",
        "type": "mcq",
        "category": "課文細節",
        "difficulty": 1,
        "question": "這場人類首次遠征月球的旅程，大約有多少人參與，又吸引了多少人關注？",
        "options": [
            {
                "text": "四百人參與，六十萬人關注",
                "isCorrect": false,
                "explanation": "數字不對。"
            },
            {
                "text": "四十萬人參與，六億人關注",
                "isCorrect": true,
                "explanation": "正確！這是一項集結了無數人心血，且備受全球矚目的超級任務。"
            },
            {
                "text": "四萬人參與，六千萬人關注",
                "isCorrect": false,
                "explanation": "數字不對。"
            },
            {
                "text": "四千人參與，六百萬人關注",
                "isCorrect": false,
                "explanation": "數字不對。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "這是一項集結了無數人心血，且備受全球矚目的超級任務。"
    },
    {
        "id": "q_l6_mc_13",
        "lessonId": "L6",
        "type": "mcq",
        "category": "人物特質",
        "difficulty": 3,
        "question": "阿姆斯壯回地球後說：「有一天，人類會飛回月球，撿起我掉下的攝影機，順便把我的腳印擦掉。」這句話展現了他什麼樣的特質？",
        "options": [
            {
                "text": "極度自大，認為別人都比不上他",
                "isCorrect": false,
                "explanation": "這句話沒有自大的成分。"
            },
            {
                "text": "健忘，連攝影機都忘在月球上",
                "isCorrect": false,
                "explanation": "這只是個幽默的比喻。"
            },
            {
                "text": "幽默風趣，且對人類未來的太空探索充滿信心與期待",
                "isCorrect": true,
                "explanation": "正確！他用輕鬆的話語，鼓勵後人繼續超越他所留下的紀錄。"
            },
            {
                "text": "非常生氣別人破壞月球的環境",
                "isCorrect": false,
                "explanation": "他沒有生氣。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "他用輕鬆的話語，鼓勵後人繼續超越他所留下的紀錄。"
    },
    {
        "id": "q_l6_mc_14",
        "lessonId": "L6",
        "type": "mcq",
        "category": "字義測驗",
        "difficulty": 2,
        "question": "「極目遠眺」中的「極目」是什麼意思？",
        "options": [
            {
                "text": "非常生氣地看",
                "isCorrect": false,
                "explanation": "跟生氣無關。"
            },
            {
                "text": "戴著眼鏡看",
                "isCorrect": false,
                "explanation": "沒有這個意思。"
            },
            {
                "text": "盡力用眼睛看",
                "isCorrect": true,
                "explanation": "正確！「極」有竭盡的意思，極目就是窮盡眼力望向遠方。"
            },
            {
                "text": "閉上眼睛",
                "isCorrect": false,
                "explanation": "完全相反的意思。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "「極」有竭盡的意思，極目就是窮盡眼力望向遠方。"
    },
    {
        "id": "q_l6_mc_15",
        "lessonId": "L6",
        "type": "mcq",
        "category": "字詞義測驗",
        "difficulty": 3,
        "question": "課文提到無重力訓練與身穿沉重太空衣對阿姆斯壯來說都成了「家常便飯」。請問「家常便飯」在此處的意思為何？",
        "options": [
            {
                "text": "指太空人在外太空吃的食物很簡單",
                "isCorrect": false,
                "explanation": "不是指真的吃飯。"
            },
            {
                "text": "比喻經常發生、習以為常的事情",
                "isCorrect": true,
                "explanation": "正確！表示他對這些嚴酷的訓練已經非常習慣了。"
            },
            {
                "text": "指他每天都要回家吃飯",
                "isCorrect": false,
                "explanation": "不合文意。"
            },
            {
                "text": "形容訓練過程非常輕鬆",
                "isCorrect": false,
                "explanation": "訓練非常辛苦，只是他已經適應了。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "表示他對這些嚴酷的訓練已經非常習慣了。"
    },
    {
        "id": "q_l6_mc_16",
        "lessonId": "L6",
        "type": "mcq",
        "category": "國語常識",
        "difficulty": 2,
        "question": "課本注釋中提到的「世界協調時間」，英文縮寫是什麼？",
        "options": [
            {
                "text": "UFO",
                "isCorrect": false,
                "explanation": "這是不明飛行物。"
            },
            {
                "text": "USA",
                "isCorrect": false,
                "explanation": "這是美國。"
            },
            {
                "text": "UTC",
                "isCorrect": true,
                "explanation": "正確！這是世界上調節時鐘和時間的主要時間標準。"
            },
            {
                "text": "USB",
                "isCorrect": false,
                "explanation": "這是電腦傳輸介面。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "這是世界上調節時鐘和時間的主要時間標準。"
    },
    {
        "id": "q_l6_mc_17",
        "lessonId": "L6",
        "type": "mcq",
        "category": "課文結構",
        "difficulty": 4,
        "question": "這篇文章從阿姆斯壯登月寫起，接著回顧他小時候對飛行的熱愛，再寫到他加入太空計畫與登月過程。這種寫作順序稱為什麼？",
        "options": [
            {
                "text": "順敘法",
                "isCorrect": false,
                "explanation": "沒有完全按照時間先後。"
            },
            {
                "text": "倒敘法",
                "isCorrect": true,
                "explanation": "正確！先寫出最具代表性的高潮事件（登月），再倒回過去說明事情的起因與經過。"
            },
            {
                "text": "插敘法",
                "isCorrect": false,
                "explanation": "主要結構是倒敘。"
            },
            {
                "text": "隨機排列",
                "isCorrect": false,
                "explanation": "文章是有邏輯結構的。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "先寫出最具代表性的高潮事件（登月），再倒回過去說明事情的起因與經過。"
    },
    {
        "id": "q_l6_mc_18",
        "lessonId": "L6",
        "type": "mcq",
        "category": "人物特質",
        "difficulty": 3,
        "question": "從阿姆斯壯六歲對飛行著迷，十六歲考取執照，到後來挺過艱難的太空訓練。這一段經歷最能用下列哪一句成語來形容他？",
        "options": [
            {
                "text": "半途而廢",
                "isCorrect": false,
                "explanation": "他堅持到底。"
            },
            {
                "text": "得過且過",
                "isCorrect": false,
                "explanation": "他非常積極努力。"
            },
            {
                "text": "持之以恆",
                "isCorrect": true,
                "explanation": "正確！形容他長久堅持夢想，不曾放棄。"
            },
            {
                "text": "見異思遷",
                "isCorrect": false,
                "explanation": "形容意志不堅，他剛好相反。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "形容他長久堅持夢想，不曾放棄。"
    },
    {
        "id": "q_l6_mc_19",
        "lessonId": "L6",
        "type": "mcq",
        "category": "字詞義測驗",
        "difficulty": 3,
        "question": "「他用輕描淡寫的幽默話語，鼓勵後人繼續探索宇宙。」句中的「輕描淡寫」是什麼意思？",
        "options": [
            {
                "text": "用力畫圖",
                "isCorrect": false,
                "explanation": "不是畫圖。"
            },
            {
                "text": "用生氣的語氣說話",
                "isCorrect": false,
                "explanation": "不是生氣。"
            },
            {
                "text": "形容言論或描寫簡單、不費力地帶過，不加渲染",
                "isCorrect": true,
                "explanation": "正確！代表他不把自己登月的偉大成就掛在嘴邊炫耀，而是用輕鬆的態度看待。"
            },
            {
                "text": "講話聲音很小",
                "isCorrect": false,
                "explanation": "不是指音量。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "代表他不把自己登月的偉大成就掛在嘴邊炫耀，而是用輕鬆的態度看待。"
    },
    {
        "id": "q_l6_mc_20",
        "lessonId": "L6",
        "type": "mcq",
        "category": "綜合理解",
        "difficulty": 4,
        "question": "關於《登月先鋒》一文的主旨，下列何者說明最恰當？",
        "options": [
            {
                "text": "說明月球的環境非常惡劣，不適合人類居住",
                "isCorrect": false,
                "explanation": "這不是文章主旨。"
            },
            {
                "text": "記錄阿姆斯壯實現夢想的過程，並讚頌人類探索未知的勇氣與成就",
                "isCorrect": true,
                "explanation": "正確！文章透過阿姆斯壯的故事，帶出了人類太空探索史上的偉大里程碑。"
            },
            {
                "text": "教導讀者如何製作飛機模型與考取飛行執照",
                "isCorrect": false,
                "explanation": "這只是他小時候的經歷。"
            },
            {
                "text": "警告人類不要輕易上太空，以免發生危險",
                "isCorrect": false,
                "explanation": "文章結尾是鼓勵後人繼續探索。"
            }
        ],
        "unitId": "L6",
        "batch": "原本題庫",
        "trap": "文章透過阿姆斯壯的故事，帶出了人類太空探索史上的偉大里程碑。"
    },
    {
        "id": "q_exam_dahua_hw_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 3,
        "question": "【大華國小・第一大題①】早餐後，大谷翔平[[國字:ㄉㄧˇ:抵]]達球場，陽光映照在他[[注音:黝:ㄧㄡˇ]]黑的頭髮上，[[注音:襯:ㄔㄣˋ]]著那件淨白清[[國字:ㄕㄨㄤˇ:爽]]的運動[[注音:衫:ㄕㄢ]]，更顯亮眼。",
        "correctAnswer": "抵、ㄧㄡˇ、ㄔㄣˋ、爽、ㄕㄢ",
        "explanation": "【解說】「抵達」的抵是手部；「黝黑」讀作「ㄧㄡˇ」（黑部）；「襯著」讀作四聲「ㄔㄣˋ」（衣部）；「清爽」注意爽的筆順；「運動衫」讀作一聲「ㄕㄢ」。",
        "trap": "易把「黝(ㄧㄡˇ)」誤讀為ㄧㄡ，或把「衫(ㄕㄢ)」加翹舌音失敗。"
    },
    {
        "id": "q_exam_dahua_hw_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 3,
        "question": "【大華國小・第一大題②】他靜靜望向手中球棒與手套——那是他[[注音:承:ㄔㄥˊ]]載夢想的工具。他相信自己能[[國字:ㄐㄧㄢ:兼]]任投手與打者兩個角色。他[[注音:悉:ㄒㄧ]]心的[[注音:訓:ㄒㄩㄣˋ]]練，即使手肘受傷、機[[國字:ㄒㄧㄝˋ:械]]式的復健，也在時間縫隙裡一點一滴找回力量。",
        "correctAnswer": "ㄔㄥˊ、兼、ㄒㄧ、ㄒㄩㄣˋ、械",
        "explanation": "【解說】「承載」的承讀作「ㄔㄥˊ」；「兼任」的兼注意中間兩豎；「悉心」讀作一聲「ㄒㄧ」；「訓練」讀作四聲「ㄒㄩㄣˋ」；「機械」為木部。",
        "trap": "「機械」的「械」右邊是戒，不要少寫一撇一橫；「悉」讀一聲ㄒㄧ而非二聲。"
    },
    {
        "id": "q_exam_dahua_hw_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 3,
        "question": "【大華國小・第一大題③】每一次揮棒、每一次投球，都像[[國字:ㄔㄨˋ:觸]]動心底那株[[國字:ㄇㄠˋ:茂]]盛的[[國字:ㄊㄥˊ:藤]]蔓，從痛楚中抽芽。失敗的[[注音:塵:ㄔㄣˊ]][[國字:ㄍㄡˋ:垢]]覆蓋著球鞋，[[國字:ㄐㄧㄢˇ:簡]]陋的宿舍牆上，仍貼著他高中時親手寫下的夢想表。",
        "correctAnswer": "觸、茂、藤、ㄔㄣˊ、垢、簡",
        "explanation": "【解說】「觸動」為角部＋蜀；「茂盛」與「藤蔓」皆為艸部；「塵垢」的塵讀「ㄔㄣˊ」、垢為土部；「簡陋」的簡為竹部。",
        "trap": "「藤」右下方是「氺」不是水或泰；「茂」下半部是戊，裡面沒有點。"
    },
    {
        "id": "q_exam_dahua_hw_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 4,
        "question": "【大華國小・第一大題④】當球在掌中[[國字:ㄓㄢˋ:顫]]動，[[國字:ㄒㄩㄣˋ:迅]]速飛越的瞬間，他明白那是每一次[[國字:ㄌㄧㄥˊ:凌]]越懼怕的信念。遠方的天空，一望無[[國字:ㄧㄣˊ:垠]]。他知道，夢想不會主[[國字:ㄉㄨㄥˋ:動]][[注音:添:ㄊㄧㄢ]]翼，唯有持續鍛鍊，讓意志不[[注音:蓬:ㄆㄥˊ]]亂，陽光終會穿透所有的陰[[國字:ㄇㄞˊ:霾]]。",
        "correctAnswer": "顫、迅、凌、垠、動、ㄊㄧㄢ、ㄆㄥˊ、霾",
        "explanation": "【解說】「顫動」左邊是亶、右邊是頁；「凌越」是冫部（二畫）；「一望無垠」的垠是土部；「陰霾」是雨部＋貍。",
        "trap": "「顫」與「霾」筆畫較多，注意「凌」左邊是兩點冰（冫）而非水部。"
    },
    {
        "id": "q_exam_dahua_hw_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考改錯字",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 3,
        "question": "【大華國小・第一大題⑤篇章改錯】請訂正文章中的六個錯別字：(1)「監」定的目光➔[[國字:ㄐㄧㄢ:堅]]定；(2)留下的痕「蹟」➔痕[[國字:ㄐㄧ:跡]]；(3)時間縫「繫」➔縫[[國字:ㄒㄧˋ:隙]]；(4)簡「漏」的宿舍➔簡[[國字:ㄌㄡˋ:陋]]；(5)「裁」種希望➔[[國字:ㄗㄞ:栽]]種；(6)「維」有持續鍛鍊➔[[國字:ㄨㄟˊ:唯]]有。",
        "correctAnswer": "堅、跡、隙、陋、栽、唯",
        "explanation": "【解說】堅定（土部）、痕跡（足部）、縫隙（阜部，右邊是小＋日＋小）、簡陋（阜部）、栽種（木部，與裁剪的衣部不同）、唯有（口部）。",
        "trap": "「栽種」裡面是「木」，「裁剪」裡面是「衣」，兩者是段考最常考的形近字！"
    },
    {
        "id": "q_exam_dahua_mc_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "字音辨析",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 3,
        "question": "【大華國小・選擇第1題】下列選項何者讀音兩兩相同？",
        "options": [
            {
                "text": "「暈」開 ／ 「暈」倒",
                "isCorrect": false,
                "explanation": "「暈」開讀ㄩㄣˋ；「暈」倒讀ㄩㄣ。"
            },
            {
                "text": "歷史記「載」 ／ 一年半「載」",
                "isCorrect": true,
                "explanation": "正確！歷史記「載」與一年半「載」（指年）皆讀作三聲「ㄗㄞˇ」。"
            },
            {
                "text": "「劃」過天際 ／ 計「劃」",
                "isCorrect": false,
                "explanation": "「劃」過天際讀ㄏㄨㄚˊ；計「劃」讀ㄏㄨㄚˋ。"
            },
            {
                "text": "歸「屬」 ／ 「屬」地",
                "isCorrect": false,
                "explanation": "多音字辨析中，本題標準答案為②「記載／一年半載」（皆讀ㄗㄞˇ）。"
            }
        ],
        "trap": "易誤以為「歷史記載」讀四聲ㄗㄞˋ，其實「記載、刊載、千載難逢、一年半載」皆讀三聲ㄗㄞˇ！"
    },
    {
        "id": "q_exam_dahua_mc_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文內容與修辭",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 2,
        "question": "【大華國小・選擇第2題】根據〈在天晴了的時候〉課文，提到「看山間移動的暗綠——雲的腳跡——它也在閒遊」，請問下列敘述何者正確？",
        "options": [
            {
                "text": "「暗綠」是指雲朵上投影著青色山巒的色澤",
                "isCorrect": false,
                "explanation": "相反了！是指天空的雲朵在山林間投下的陰影。"
            },
            {
                "text": "運用了破折號來補充說明「暗綠」就是雲的腳跡，且與「不再膽怯的小白菊」一樣運用擬人修辭",
                "isCorrect": true,
                "explanation": "正確！破折號表補充說明，「閒遊」與「不再膽怯」皆為轉化（擬人）修辭。"
            },
            {
                "text": "呈現出下雨後暗淡沉重的結局",
                "isCorrect": false,
                "explanation": "呈現出雨後放晴、悠閒自在的生機。"
            },
            {
                "text": "「雲的腳跡」指的是登山客踩踏出來的泥濘道路",
                "isCorrect": false,
                "explanation": "指的是雲朵移動時在山間留下的投影。"
            }
        ],
        "trap": "注意破折號在此處的作用是「補充說明（夾注）」，且「閒遊」是擬人法。"
    },
    {
        "id": "q_exam_dahua_mc_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "修辭辨析",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 3,
        "question": "【大華國小・選擇第3題】「把鳳蝶兒飾彩的智慧書頁，曝著陽光一開一收。」這句話主要運用了哪些修辭與感官描寫？",
        "options": [
            {
                "text": "擬人、類疊",
                "isCorrect": false,
                "explanation": "將翅膀比喻為書頁，且有視覺色彩描寫。"
            },
            {
                "text": "譬喻（借喻）、摹寫（視覺）",
                "isCorrect": true,
                "explanation": "正確！將鳳蝶彩色的翅膀比喻為「飾彩的智慧書頁」，並透過色彩與一開一收呈現視覺摹寫。"
            },
            {
                "text": "誇飾、設問",
                "isCorrect": false,
                "explanation": "無誇飾與設問。"
            },
            {
                "text": "排比、頂真",
                "isCorrect": false,
                "explanation": "無排比與頂真。"
            }
        ],
        "trap": "鳳蝶的翅膀被比喻成「智慧書頁」，加上「飾彩、一開一收」屬於視覺摹寫。"
    },
    {
        "id": "q_exam_dahua_mc_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "形近字辨析",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 2,
        "question": "【大華國小・選擇第4題】「□延、浪□、傲□」，□中應分別填入哪些字？",
        "options": [
            {
                "text": "漫、蔓、慢",
                "isCorrect": false,
                "explanation": "順序錯誤。"
            },
            {
                "text": "蔓、慢、漫",
                "isCorrect": false,
                "explanation": "浪「漫」是水部，傲「慢」是心部。"
            },
            {
                "text": "慢、漫、蔓",
                "isCorrect": false,
                "explanation": "順序錯誤。"
            },
            {
                "text": "蔓、漫、慢",
                "isCorrect": true,
                "explanation": "正確！「蔓延」像植物藤蔓延伸用艸部；「浪漫」用水部；「傲慢」與心理態度有關用心部。"
            }
        ],
        "trap": "記住部首口訣：藤「蔓」蔓延是草（艸），浪「漫」漫步是水（氵），傲「慢」緩慢是心（忄）。"
    },
    {
        "id": "q_exam_dahua_mc_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "句型辨析",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 3,
        "question": "【大華國小・選擇第5題】「只要大鳥在籠子裡生氣的叫一聲，牠立即飛回籠裡去。」所用的是條件複句，下列何者也是條件複句？",
        "options": [
            {
                "text": "起先牠在籠子四周活動，隨後就在屋裡飛來飛去",
                "isCorrect": false,
                "explanation": "這是承接複句（起先……隨後……）。"
            },
            {
                "text": "雖然看不清楚，牠們可愛的小嘴卻不時伸出來",
                "isCorrect": false,
                "explanation": "這是轉折複句（雖然……卻……）。"
            },
            {
                "text": "拱門不是終點，而是主辦單位設置的頒獎地點",
                "isCorrect": false,
                "explanation": "這是並列/對比複句（不是……而是……）。"
            },
            {
                "text": "每當發生火災時，消防人員總是前往救援",
                "isCorrect": true,
                "explanation": "正確！「每當……總是……」表示在特定條件下必然發生的結果，屬於條件複句。"
            }
        ],
        "trap": "區分四大句型：「起先…隨後…」（承接）、「雖然…卻…」（轉折）、「不是…而是…」（並列）、「只要…立即…／每當…總是…」（條件）。"
    },
    {
        "id": "q_exam_dahua_mc_6",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 1,
        "question": "【大華國小・選擇第6題】根據〈珍珠鳥〉一文中，作者為什麼用吊蘭的枝葉遮住鳥籠，下列何者最適切？",
        "options": [
            {
                "text": "為了裝飾房間",
                "isCorrect": false,
                "explanation": "並非單純裝飾。"
            },
            {
                "text": "為了讓鳥有安全感",
                "isCorrect": true,
                "explanation": "正確！珍珠鳥生性膽小，用吊蘭遮住鳥籠能讓牠們像在幽深的叢林裡一樣有安全感。"
            },
            {
                "text": "為了不讓人發現他養鳥",
                "isCorrect": false,
                "explanation": "與課文無關。"
            },
            {
                "text": "為了讓枝葉更茁壯",
                "isCorrect": false,
                "explanation": "是為了保護小鳥而非植物。"
            }
        ],
        "trap": "〈珍珠鳥〉的核心觀念：信賴是建立在「尊重與給予安全感」的基礎上。"
    },
    {
        "id": "q_exam_dahua_mc_7",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "國學常識",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 2,
        "question": "【大華國小・選擇第7題】關於杜甫的描述，下列何者敘述「錯誤」？",
        "options": [
            {
                "text": "杜甫字子美，自號少陵野老（少陵老人）",
                "isCorrect": false,
                "explanation": "此敘述正確。"
            },
            {
                "text": "杜甫的詩反映社會現實，被稱為「詩仙」，與「詩聖」李白齊名",
                "isCorrect": true,
                "explanation": "錯誤！杜甫被尊稱為「詩聖」（其詩稱為「詩史」），李白才是「詩仙」，兩者稱號顛倒了！"
            },
            {
                "text": "杜甫住在成都草堂時離城鎮較遠，屋前有浣花溪環繞",
                "isCorrect": false,
                "explanation": "此敘述正確（呼應「舍南舍北皆春水，盤飧市遠無兼味」）。"
            },
            {
                "text": "杜甫曾任工部員外郎，作品被集結成《杜工部集》",
                "isCorrect": false,
                "explanation": "此敘述正確。"
            }
        ],
        "trap": "必背國學常識：杜甫＝詩聖、詩史；李白＝詩仙；王維＝詩佛。千萬別把李白和杜甫的稱號搞混！"
    },
    {
        "id": "q_exam_dahua_mc_8",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 2,
        "question": "【大華國小・選擇第8題】根據〈客至〉一詩，下列何者敘述正確？",
        "options": [
            {
                "text": "「但見群鷗日日來」作者將朋友比喻成群鷗，每天都來找他",
                "isCorrect": false,
                "explanation": "錯誤！「但見群鷗日日來」反襯平日只有水鳥飛來，很少有客人造訪。"
            },
            {
                "text": "從「花徑、蓬門、美酒」，可以看出作者生活富裕奢華",
                "isCorrect": false,
                "explanation": "「蓬門、無兼味、只舊醅」看出生活簡樸清貧。"
            },
            {
                "text": "從「掃徑、敞開大門（花徑不曾緣客掃，蓬門今始為君開）」，可以得知作者已做好迎客準備，且十分重視貴客",
                "isCorrect": true,
                "explanation": "正確！特地為客人清掃花徑、敞開柴門，展現對客人的熱烈歡迎與重視。"
            },
            {
                "text": "「肯與鄰翁相對飲」，可見〈客至〉的「客」就是隔壁老翁",
                "isCorrect": false,
                "explanation": "錯誤！「客」是遠道而來的崔明府，鄰翁是杜甫邀請過來一起陪客飲酒的鄰居。"
            }
        ],
        "trap": "注意〈客至〉中有三個人物：主人（杜甫）、貴客（崔明府，君）、陪客（鄰翁）。"
    },
    {
        "id": "q_exam_dahua_mc_9",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "國學常識",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 3,
        "question": "【大華國小・選擇第9題】關於近體詩中「絕句」和「律詩」的共同敘述，何者正確？",
        "options": [
            {
                "text": "皆有五言和七言之分，所以是由五句或七句組成的詩",
                "isCorrect": false,
                "explanation": "錯誤！五言、七言是指「每句五個字或七個字」，絕句固定4句，律詩固定8句。"
            },
            {
                "text": "皆是偶數句押韻，第一句可押韻可不押韻",
                "isCorrect": true,
                "explanation": "正確！絕句（2、4句押韻）與律詩（2、4、6、8句押韻）都是偶數句必押韻，首句可押可不押，奇數句（除首句外）不押韻。"
            },
            {
                "text": "皆是第三、四句和第五、六句兩兩對仗",
                "isCorrect": false,
                "explanation": "絕句只有4句，沒有第五、六句，且絕句不強制對仗；只有律詩強制頷聯（3、4句）與頸聯（5、6句）對仗。"
            },
            {
                "text": "皆是盛行於宋朝的文學體裁",
                "isCorrect": false,
                "explanation": "近體詩（唐詩）盛行於唐朝，宋朝盛行的是「詞」。"
            }
        ],
        "trap": "律詩與絕句的異同：字數（五言/七言）與押韻規則（偶數句押韻、首句可押可不押）相同；句數（絕句4句、律詩8句）與對仗要求不同。"
    },
    {
        "id": "q_exam_dahua_mc_10",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "部首辨析",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p1.png",
        "difficulty": 3,
        "question": "【大華國小・選擇第10題】下列漢字與部首的配對，何者完全正確？",
        "options": [
            {
                "text": "置：四部",
                "isCorrect": false,
                "explanation": "「置」是网（罒）部，不是四部。"
            },
            {
                "text": "勺：勺部",
                "isCorrect": false,
                "explanation": "「勺」是勹（ㄅㄠ）部。"
            },
            {
                "text": "屬：尸部",
                "isCorrect": true,
                "explanation": "正確！「屬」是尸部（18畫）。"
            },
            {
                "text": "惹：艸部",
                "isCorrect": false,
                "explanation": "「惹」是心部（下面有個心）。"
            }
        ],
        "trap": "常考部首陷阱：「置」是网部、「勺」是勹部、「惹」是心部、「屬」是尸部、「舒」是舌部、「承」是手部。"
    },
    {
        "id": "q_exam_dahua_mc_11",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・選擇第11題】根據〈贏得喝采的輸家〉一文，文中「十二月的寒風，一陣陣吹進運動衫，但我絲毫不覺得冷」一句，最能凸顯什麼？",
        "options": [
            {
                "text": "作者體力很好，完全不怕冷",
                "isCorrect": false,
                "explanation": "重點不在體質。"
            },
            {
                "text": "內心對比賽的熱情與專注超越了外在的寒冷",
                "isCorrect": true,
                "explanation": "正確！透過外在寒風與內心不覺得冷的對比，凸顯主角全神貫注、熱血沸騰的投入狀態。"
            },
            {
                "text": "當天天氣其實並不冷",
                "isCorrect": false,
                "explanation": "文中已明言十二月的寒風一陣陣吹進運動衫。"
            },
            {
                "text": "作者穿的運動衫非常厚重保暖",
                "isCorrect": false,
                "explanation": "運動衫很薄，是不覺得冷而非衣服厚。"
            }
        ],
        "trap": "這是以「外在環境的冷」反襯「內心鬥志的熱」。"
    },
    {
        "id": "q_exam_dahua_mc_12",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "修辭與標題",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・選擇第12題】「贏得喝采的輸家」此標題運用的「映襯法」主要是強調什麼？",
        "options": [
            {
                "text": "輸家在現實中不可能被喝采",
                "isCorrect": false,
                "explanation": "與課文主旨相反。"
            },
            {
                "text": "雖然在名次上輸了比賽，但因展現運動家精神而贏得眾人的尊敬與掌聲",
                "isCorrect": true,
                "explanation": "正確！將「贏得喝采」與「輸家」兩個相反概念並置，凸顯誠實與運動家精神比金牌更可貴。"
            },
            {
                "text": "強調主角真的輸得很慘",
                "isCorrect": false,
                "explanation": "重點在於贏得尊敬。"
            },
            {
                "text": "觀眾搞錯了第一名是誰",
                "isCorrect": false,
                "explanation": "觀眾是因為感動而為他喝采。"
            }
        ],
        "trap": "「贏得喝采」vs「輸家」屬於映襯修辭（反襯／矛盾語法），能引發讀者好奇並凸顯主旨。"
    },
    {
        "id": "q_exam_dahua_mc_13",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "關聯詞運用",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・選擇第13題】「□平日沒有練習，想贏得冠軍，□天方夜譚。」□中最適合填入哪一個選項？",
        "options": [
            {
                "text": "如果……可以",
                "isCorrect": false,
                "explanation": "語意不通。"
            },
            {
                "text": "必須……還要",
                "isCorrect": false,
                "explanation": "語意不通。"
            },
            {
                "text": "若……無疑是",
                "isCorrect": true,
                "explanation": "正確！「若（如果）平日沒有練習，想贏得冠軍，無疑是（簡直就是）天方夜譚。」屬於假設兼推論句型。"
            },
            {
                "text": "雖然……但是",
                "isCorrect": false,
                "explanation": "前後非轉折關係。"
            }
        ],
        "trap": "第五課〈哇！原來如此〉重點句型：「若……無疑是……」（如果缺少某條件，簡直就像……一樣不可能或危險）。"
    },
    {
        "id": "q_exam_dahua_mc_14",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・選擇第14題】根據〈哇！原來如此〉一文，所提到的電影拍攝「場記板」的主要用途是什麼？",
        "options": [
            {
                "text": "標記場次鏡次並發出清脆聲響，幫助後製剪輯對齊影格與聲音，增加工作的效率與速度",
                "isCorrect": true,
                "explanation": "正確！場記板能記錄場次資訊並作為影音同步的基準點，大幅提升後製剪接工作的效率與準確度。"
            },
            {
                "text": "為了讓拍攝現場的工作更安全，防止火災",
                "isCorrect": false,
                "explanation": "保護安全的是消防員的消防衣。"
            },
            {
                "text": "為了向觀眾展示新科技的產品",
                "isCorrect": false,
                "explanation": "場記板是傳統而實用的幕後工具。"
            },
            {
                "text": "為了增加導演拍攝時的威嚴與氣勢",
                "isCorrect": false,
                "explanation": "並非為了擺氣勢。"
            }
        ],
        "trap": "第五課三種職業工具對照：消防衣＝保護安全；入耳式監聽耳機＝聽清伴奏與自己聲音；場記板＝方便後製影音同步與剪輯（提升工作效率）。"
    },
    {
        "id": "q_exam_dahua_mc_15",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語應用",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・選擇第15題】請選出最適合依序填入三個空格的成語組合：\nA. 老師用（　）的方式教導學生，讓學生改頭換面。\nB. 消防員願意（　）的救人，真讓人敬佩。\nC. 她的琴聲如（　），令人心情平靜。",
        "options": [
            {
                "text": "妙手回春 ／ 赴湯蹈火 ／ 餘音繞梁",
                "isCorrect": false,
                "explanation": "「妙手回春」是形容醫術高明，不能形容老師教導學生。"
            },
            {
                "text": "妙手回春 ／ 天籟之音 ／ 出生入死",
                "isCorrect": false,
                "explanation": "順序與對象皆錯。"
            },
            {
                "text": "春風化雨 ／ 赴湯蹈火 ／ 餘音繞梁",
                "isCorrect": true,
                "explanation": "正確！「春風化雨」形容師長良好的薰陶教育；「赴湯蹈火」形容不畏艱險救災；「餘音繞梁」形容音樂優美動聽。"
            },
            {
                "text": "仁心仁術 ／ 出生入死 ／ 天籟之音",
                "isCorrect": false,
                "explanation": "「仁心仁術」形容醫生心地仁慈、醫術高明，不適用於老師。"
            }
        ],
        "trap": "職業成語分類：教育類＝春風化雨、百年樹人；醫療類＝妙手回春、華佗再世、仁心仁術；音樂類＝餘音繞梁、天籟之音。"
    },
    {
        "id": "q_exam_dahua_mc_16",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "動靜態描寫",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・選擇第16題】「極目遠眺，太空一片象灰與濃黑，寂靜而神祕。」這句話屬於什麼描寫方式？",
        "options": [
            {
                "text": "動態描寫",
                "isCorrect": false,
                "explanation": "句中描寫的是太空的色彩與寧靜狀態，沒有動作變化。"
            },
            {
                "text": "靜態描寫",
                "isCorrect": true,
                "explanation": "正確！描繪太空象灰與濃黑的色澤以及寂靜神祕的靜止畫面，屬於靜態描寫。"
            },
            {
                "text": "聽覺描寫",
                "isCorrect": false,
                "explanation": "「寂靜」表示無聲，且前半句「象灰與濃黑」主要是視覺上的靜態景象。"
            },
            {
                "text": "味覺描寫",
                "isCorrect": false,
                "explanation": "無味覺描寫。"
            }
        ],
        "trap": "判斷動態 vs 靜態：看被描寫的景物本身有沒有「動作或移動」（如「火箭直衝雲霄」是動態，「太空一片象灰與濃黑」是靜態）。"
    },
    {
        "id": "q_exam_dahua_mc_17",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・選擇第17題】根據〈登月先鋒〉一文，下列敘述何者「不正確」？",
        "options": [
            {
                "text": "部分段落切換視角（或引用阿姆斯壯名言），能讓讀者更身臨其境",
                "isCorrect": false,
                "explanation": "此為正確寫作效果。"
            },
            {
                "text": "「眼前的天空已經無法滿足他」看出他有更遠大的理想，為之後成為太空人做鋪陳",
                "isCorrect": false,
                "explanation": "此敘述正確。"
            },
            {
                "text": "文章中使用精密的數字記錄事件（如年份、人數、距離），是為了突顯歷史性一刻的真實與精確",
                "isCorrect": false,
                "explanation": "此敘述正確。"
            },
            {
                "text": "阿姆斯壯要後來者幫他撿起留在月球上的攝影機，可以看出他非常重視環保與垃圾分類",
                "isCorrect": true,
                "explanation": "不正確！將攝影機留在月球是為了減輕登月小艇返航重量以帶回月球岩石樣本，期盼後人取回是象徵「人類持續探索太空的傳承」，而非環保問題！"
            }
        ],
        "trap": "阿姆斯壯留下攝影機的原因是「減輕返航重量」，希望後人取回則象徵「太空探索精神的傳承」。"
    },
    {
        "id": "q_exam_dahua_mc_18",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "修辭辨析",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 3,
        "question": "【大華國小・選擇第18題】下面哪個選項「沒有」用到轉化（擬人／擬物／形象化）的修辭？",
        "options": [
            {
                "text": "他冷靜的聲音劃破荒涼寂靜，在無限的宇宙，翻開不朽的一頁",
                "isCorrect": false,
                "explanation": "將抽象的寂靜與歷史具體化為可「劃破」、可「翻開的一頁」，屬於轉化（形象化）。"
            },
            {
                "text": "眼前盡是大大小小的隕石坑，一望無際的沙灰色就像沉睡的巨人",
                "isCorrect": false,
                "explanation": "「沉睡」亦帶有擬人色彩（兼具譬喻）。"
            },
            {
                "text": "我筆尖一動，流瀉下一時的感受：信賴，往往能創造出美好的境界",
                "isCorrect": true,
                "explanation": "本題多數選項中，④「炫耀著新綠的小草」為明顯擬人，①「劃破寂靜、翻開一頁」為形象化；若以純譬喻句來看，或依原卷設計，「流瀉下一時的感受」（或②「就像沉睡的巨人」為明喻）為考點。註：以修辭嚴格分類，「流瀉感受」亦含形象化，而②以「就像」構成典型明喻。"
            },
            {
                "text": "炫耀著新綠的小草，已一下子洗淨了塵垢",
                "isCorrect": false,
                "explanation": "「炫耀」把小草當作人來寫，是典型的轉化（擬人）。"
            }
        ],
        "trap": "辨別「轉化」與「譬喻」：有「像、如、彷彿」的是譬喻；把物當人寫（炫耀）或把抽象變具體（流瀉感受、翻開一頁）是轉化。"
    },
    {
        "id": "q_exam_dahua_idiom_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "語詞選填",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・語詞代號填充第1題】\n📖 語詞選項庫：\n[A] 野人獻曝　[B] 駕輕就熟　[C] 不動聲色　[D] 朝三暮四\n[E] 退避三舍　[F] 歡聲雷動　[G] 名副其實　[H] 家常便飯\n\n題目：這種小題對他來說只是【　　】，輕鬆就能解決。",
        "options": [
            {
                "label": "A",
                "text": "野人獻曝",
                "isCorrect": false,
                "explanation": "比喻平凡人貢獻微薄的心意（謙稱提供建議）。"
            },
            {
                "label": "B",
                "text": "駕輕就熟",
                "isCorrect": false,
                "explanation": "比喻技術熟練，做起來很輕鬆。"
            },
            {
                "label": "C",
                "text": "不動聲色",
                "isCorrect": false,
                "explanation": "態度鎮靜，不露痕跡。"
            },
            {
                "label": "D",
                "text": "朝三暮四",
                "isCorrect": false,
                "explanation": "比喻心意不定、反覆無常。"
            },
            {
                "label": "E",
                "text": "退避三舍",
                "isCorrect": false,
                "explanation": "比喻主動退讓迴避。"
            },
            {
                "label": "F",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼聲響徹雲霄。"
            },
            {
                "label": "G",
                "text": "名副其實",
                "isCorrect": false,
                "explanation": "名聲與實際相符合。"
            },
            {
                "label": "H",
                "text": "家常便飯",
                "isCorrect": true,
                "explanation": "正確！「家常便飯」比喻極為常見、習以為常或輕鬆平常的小事。"
            }
        ],
        "trap": "句中「只是……輕鬆就能解決」，最貼切的口語成語是「家常便飯」。"
    },
    {
        "id": "q_exam_dahua_idiom_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "語詞選填",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・語詞代號填充第2題】\n📖 語詞選項庫：\n[A] 野人獻曝　[B] 駕輕就熟　[C] 不動聲色　[D] 朝三暮四\n[E] 退避三舍　[F] 歡聲雷動　[G] 名副其實　[H] 家常便飯\n\n題目：他做事常常【　　】，讓人難以信任。",
        "options": [
            {
                "label": "A",
                "text": "野人獻曝",
                "isCorrect": false,
                "explanation": "謙稱微薄心意。"
            },
            {
                "label": "B",
                "text": "駕輕就熟",
                "isCorrect": false,
                "explanation": "做事熟練。"
            },
            {
                "label": "C",
                "text": "不動聲色",
                "isCorrect": false,
                "explanation": "鎮定沉著。"
            },
            {
                "label": "D",
                "text": "朝三暮四",
                "isCorrect": true,
                "explanation": "正確！「朝三暮四」比喻心意反覆不定、捉摸不定，讓人難以信任。"
            },
            {
                "label": "E",
                "text": "退避三舍",
                "isCorrect": false,
                "explanation": "主動退讓。"
            },
            {
                "label": "F",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼聲如雷。"
            },
            {
                "label": "G",
                "text": "名副其實",
                "isCorrect": false,
                "explanation": "名實相稱。"
            },
            {
                "label": "H",
                "text": "家常便飯",
                "isCorrect": false,
                "explanation": "常見平常的事。"
            }
        ],
        "trap": "「朝三暮四」出自《莊子・齊物論》，原本是養猴人分橡實的故事，後引申為「心意反覆無常」。"
    },
    {
        "id": "q_exam_dahua_idiom_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "語詞選填",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・語詞代號填充第3題】\n📖 語詞選項庫：\n[A] 野人獻曝　[B] 駕輕就熟　[C] 不動聲色　[D] 朝三暮四\n[E] 退避三舍　[F] 歡聲雷動　[G] 名副其實　[H] 家常便飯\n\n題目：這只是我粗淺的建議，算是【　　】，希望對大家有幫助。",
        "options": [
            {
                "label": "A",
                "text": "野人獻曝",
                "isCorrect": true,
                "explanation": "正確！「野人獻曝」（曝讀ㄆㄨˋ）為自謙詞，謙稱自己貢獻的意見或物品平凡微薄。"
            },
            {
                "label": "B",
                "text": "駕輕就熟",
                "isCorrect": false,
                "explanation": "做事熟練。"
            },
            {
                "label": "C",
                "text": "不動聲色",
                "isCorrect": false,
                "explanation": "冷靜沉著。"
            },
            {
                "label": "D",
                "text": "朝三暮四",
                "isCorrect": false,
                "explanation": "反覆無常。"
            },
            {
                "label": "E",
                "text": "退避三舍",
                "isCorrect": false,
                "explanation": "退讓避讓。"
            },
            {
                "label": "F",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡聲極大。"
            },
            {
                "label": "G",
                "text": "名副其實",
                "isCorrect": false,
                "explanation": "名實相稱。"
            },
            {
                "label": "H",
                "text": "家常便飯",
                "isCorrect": false,
                "explanation": "平常小事。"
            }
        ],
        "trap": "「野人獻曝」出自《列子》，農夫想把曬太陽的溫暖獻給國王，常用在「提出建議時的自謙詞」。"
    },
    {
        "id": "q_exam_dahua_idiom_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "語詞選填",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・語詞代號填充第4題】\n📖 語詞選項庫：\n[A] 野人獻曝　[B] 駕輕就熟　[C] 不動聲色　[D] 朝三暮四\n[E] 退避三舍　[F] 歡聲雷動　[G] 名副其實　[H] 家常便飯\n\n題目：面對突如其來的狀況，他依然【　　】，冷靜地處理。",
        "options": [
            {
                "label": "A",
                "text": "野人獻曝",
                "isCorrect": false,
                "explanation": "謙稱建議。"
            },
            {
                "label": "B",
                "text": "駕輕就熟",
                "isCorrect": false,
                "explanation": "做事熟練。"
            },
            {
                "label": "C",
                "text": "不動聲色",
                "isCorrect": true,
                "explanation": "正確！「不動聲色」形容態度鎮靜，言行舉止不露任何痕跡與慌亂。"
            },
            {
                "label": "D",
                "text": "朝三暮四",
                "isCorrect": false,
                "explanation": "心意不定。"
            },
            {
                "label": "E",
                "text": "退避三舍",
                "isCorrect": false,
                "explanation": "退讓不爭。"
            },
            {
                "label": "F",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼如雷。"
            },
            {
                "label": "G",
                "text": "名副其實",
                "isCorrect": false,
                "explanation": "名實相符。"
            },
            {
                "label": "H",
                "text": "家常便飯",
                "isCorrect": false,
                "explanation": "平常小事。"
            }
        ],
        "trap": "「不動聲色」配後文「冷靜地處理」，是描寫沉著冷靜的最佳成語。"
    },
    {
        "id": "q_exam_dahua_idiom_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "語詞選填",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・語詞代號填充第5題】\n📖 語詞選項庫：\n[A] 野人獻曝　[B] 駕輕就熟　[C] 不動聲色　[D] 朝三暮四\n[E] 退避三舍　[F] 歡聲雷動　[G] 名副其實　[H] 家常便飯\n\n題目：他是班上成績最好的學生，真是【　　】的學霸。",
        "options": [
            {
                "label": "A",
                "text": "野人獻曝",
                "isCorrect": false,
                "explanation": "自謙詞。"
            },
            {
                "label": "B",
                "text": "駕輕就熟",
                "isCorrect": false,
                "explanation": "技術熟練。"
            },
            {
                "label": "C",
                "text": "不動聲色",
                "isCorrect": false,
                "explanation": "神情自若。"
            },
            {
                "label": "D",
                "text": "朝三暮四",
                "isCorrect": false,
                "explanation": "反覆不定。"
            },
            {
                "label": "E",
                "text": "退避三舍",
                "isCorrect": false,
                "explanation": "退避避讓。"
            },
            {
                "label": "F",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼叫好。"
            },
            {
                "label": "G",
                "text": "名副其實",
                "isCorrect": true,
                "explanation": "正確！「名副其實」指名聲或名稱與實際完全相稱。"
            },
            {
                "label": "H",
                "text": "家常便飯",
                "isCorrect": false,
                "explanation": "平常小事。"
            }
        ],
        "trap": "「名副其實」的「副」是「相稱、符合」的意思，千萬不要寫成符號的「符」！"
    },
    {
        "id": "q_exam_dahua_read_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・閱讀理解《登高》第1題】\n📖 杜甫〈登高〉：\n「風急天高猿嘯哀，渚清沙白鳥飛迴。\n無邊落木蕭蕭下，不盡長江滾滾來。\n萬里悲秋常作客，百年多病獨登臺。\n艱難苦恨繁霜鬢，潦倒新停濁酒杯。」\n\n請問從詩文中可以看出詩人杜甫當時的心情如何？",
        "options": [
            {
                "text": "開心愉悅",
                "isCorrect": false,
                "explanation": "詩中有「哀、悲秋、苦恨、潦倒」，並非開心。"
            },
            {
                "text": "難過悲傷、孤獨感嘆",
                "isCorrect": true,
                "explanation": "正確！從「猿嘯哀、萬里悲秋常作客、百年多病獨登臺、艱難苦恨」可看出詩人漂泊異鄉、年老多病的悲傷與孤寂。"
            },
            {
                "text": "雀躍期待",
                "isCorrect": false,
                "explanation": "〈客至〉才是雀躍期待，〈登高〉是悲秋傷感。"
            },
            {
                "text": "依依不捨",
                "isCorrect": false,
                "explanation": "非送別詩。"
            }
        ],
        "trap": "比較杜甫兩首七言律詩：〈客至〉在成都草堂寫迎客之喜；〈登高〉在夔州寫漂泊悲秋之哀。"
    },
    {
        "id": "q_exam_dahua_read_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 3,
        "question": "【大華國小・閱讀理解《登高》第2題】「對仗」是指上下兩句詞性相同、結構相對。下列〈登高〉的詩句組合中，哪一組「沒有」對仗？",
        "options": [
            {
                "text": "風急天高猿嘯哀，渚清沙白鳥飛迴",
                "isCorrect": false,
                "explanation": "首聯對仗工整（風急對渚清、天高對沙白、猿嘯哀對鳥飛迴）。"
            },
            {
                "text": "無邊落木蕭蕭下，不盡長江滾滾來",
                "isCorrect": false,
                "explanation": "頷聯千古名句，對仗極為工整（無邊對不盡、落木對長江、蕭蕭下對滾滾來）。"
            },
            {
                "text": "不盡長江滾滾來。萬里悲秋常作客",
                "isCorrect": true,
                "explanation": "正確！這兩句分別是第四句（頷聯下句）和第五句（頸聯上句），跨聯之間不構成對仗！"
            },
            {
                "text": "艱難苦恨繁霜鬢，潦倒新停濁酒杯",
                "isCorrect": false,
                "explanation": "〈登高〉全詩四聯皆對仗，尾聯「艱難」對「潦倒」、「苦恨」對「新停」、「繁霜鬢」對「濁酒杯」亦對仗。"
            }
        ],
        "trap": "對仗只會發生在「同一聯的上下兩句」（第1-2句、第3-4句、第5-6句、第7-8句），第4句和第5句跨聯絕不會對仗！"
    },
    {
        "id": "q_exam_dahua_read_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "桃園市大華國小",
        "examPageImage": "images/exams/EXAM_MID1/dahua_p2.png",
        "difficulty": 2,
        "question": "【大華國小・閱讀理解《登高》第3題】「無邊落木蕭蕭下，不盡長江滾滾來」中，「不盡長江滾滾來」一句呈現出哪一種意境？",
        "options": [
            {
                "text": "江水平靜如鏡，象徵天下太平與和平",
                "isCorrect": false,
                "explanation": "「滾滾來」是波濤洶湧奔流，並非平靜如鏡。"
            },
            {
                "text": "江水滾滾奔流不止，象徵時間（歲月）流逝與歷史長河無窮無盡",
                "isCorrect": true,
                "explanation": "正確！落葉飄零、江水滾滾奔流不息，既寫壯闊秋景，也象徵歲月流逝與韶光易老。"
            },
            {
                "text": "江水枯竭乾涸，象徵生命終止",
                "isCorrect": false,
                "explanation": "「不盡」指源源不絕，並非枯竭。"
            },
            {
                "text": "江水狹窄曲折，象徵山路難行",
                "isCorrect": false,
                "explanation": "無此意涵。"
            }
        ],
        "trap": "古詩中「長江／流水滾滾不盡」常象徵「時間歲月的流逝不止」。"
    },
    {
        "id": "q_exam_tzj_hw_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 3,
        "question": "【桃子腳國中小・字詞測驗①~⑤】運動會那天，在烈日的①[[國字:ㄆㄨˋ:曝]]曬下，操場上的熱氣令人②[[注音:暈:ㄩㄣ]]頭轉向，但我們沒有退縮！比賽前，我們經過多次的③[[國字:ㄒㄩㄣˋ:訓]]練。從一開始的摸不著頭緒，到後來熟④[[國字:ㄒㄧ:悉]]接棒的節奏，我們知道這不只是一場⑤[[國字:ㄐㄧㄢˇ:簡]]單的比賽。",
        "correctAnswer": "曝、ㄩㄣ、訓、悉、簡",
        "explanation": "【解說】①「曝」曬（日部）；②「暈」頭轉向讀一聲「ㄩㄣ」（頭昏腦脹之意，與「暈開、日暈」讀四聲ㄩㄣˋ不同！）；③「訓」練（言部）；④熟「悉」（采＋心）；⑤「簡」單（竹部）。",
        "trap": "超級陷阱：「暈頭轉向、頭暈目眩」讀一聲「ㄩㄣ」；「溪水暈皺、月暈、暈開」才讀四聲「ㄩㄣˋ」！"
    },
    {
        "id": "q_exam_tzj_hw_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 3,
        "question": "【桃子腳國中小・字詞測驗⑥~⑩】大隊接力更⑥[[國字:ㄔㄥˊ:承]]⑦[[國字:ㄗㄞˋ:載]]著全班的希望。比賽快開始時，我的手不停⑧[[國字:ㄓㄢˋ:顫]]抖，心撲通撲通地狂跳。但老師說：「⑨[[注音:鎮:ㄓㄣˋ]]靜一點，你們可以的！」我深呼吸，⑩[[國字:ㄕㄨ:舒]]展身體，讓自己冷靜下來。",
        "correctAnswer": "承、載、顫、ㄓㄣˋ、舒",
        "explanation": "【解說】⑥「承」載（手部，中間三橫）；⑦承「載」（車部）；⑧「顫」抖（頁部）；⑨「鎮」靜讀四聲「ㄓㄣˋ」；⑩「舒」展（舌部＋予）。",
        "trap": "「舒」左邊是「舍」（舌部），右邊是「予」，千萬不要多一撇寫成矛！"
    },
    {
        "id": "q_exam_tzj_hw_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 3,
        "question": "【桃子腳國中小・字詞測驗⑪~⑮】四周傳來同學們的加油聲，那是我們最強大的後⑪[[國字:ㄩㄢˊ:援]]，讓我熱血⑫[[國字:ㄈㄟˋ:沸]]⑬[[國字:ㄊㄥˊ:騰]]，心裡充滿力量。班上的每一棒都用盡全力奔跑，每一次交棒⑭[[國字:ㄐㄧㄝ:皆]]是一種⑮[[國字:ㄔㄨˋ:觸]]動。",
        "correctAnswer": "援、沸、騰、皆、觸",
        "explanation": "【解說】⑪後「援」是手部（扌＋爰）；⑫「沸」騰是水部；⑬沸「騰」是馬部；⑭「皆」是白部（比＋白）；⑮「觸」動是角部。",
        "trap": "「後援」的「援」是手部（幫忙拉一把），不要寫成水部的潺湲或糸部的緩！"
    },
    {
        "id": "q_exam_tzj_hw_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 3,
        "question": "【桃子腳國中小・字詞測驗⑯~⑳】場上的對手攻勢⑯[[注音:凌:ㄌㄧㄥˊ]]厲，沒有想放棄的⑰[[國字:ㄐㄧ:跡]]象，一路緊追。最後一棒衝刺穿過終點，我們真的⑱[[國字:ㄉㄨㄛˊ:奪]]下了第一名！那份⑲[[國字:ㄕㄨˇ:屬]]於我們的⑳[[注音:榮:ㄖㄨㄥˊ]]耀，早已深深留在每個人的心中。",
        "correctAnswer": "ㄌㄧㄥˊ、跡、奪、屬、ㄖㄨㄥˊ",
        "explanation": "【解說】⑯「凌」厲讀二聲「ㄌㄧㄥˊ」；⑰「跡」象（足部）；⑱「奪」下（大＋隹＋寸）；⑲「屬」於（尸部）；⑳「榮」耀讀二聲「ㄖㄨㄥˊ」（翹舌音）。",
        "trap": "「奪」中間是「隹」（四橫），下面是「寸」，不要寫成衣！"
    },
    {
        "id": "q_exam_tzj_idiom_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語測驗",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・成語測驗第①題】\n📖 成語選項庫：\n[ㄅ] 一曝十寒　[ㄆ] 陳腔濫調　[ㄇ] 老當益壯　[ㄈ] 文情並茂\n[ㄉ] 賣友求榮　[ㄊ] 先聲奪人　[ㄋ] 面紅耳赤　[ㄌ] 名副其實\n\n題目：年過半百的老師，仍是【　　】，鳶峰登頂之路依舊健步如飛。",
        "options": [
            {
                "label": "ㄅ",
                "text": "一曝十寒",
                "isCorrect": false,
                "explanation": "比喻沒有恆心、間斷不持續。"
            },
            {
                "label": "ㄆ",
                "text": "陳腔濫調",
                "isCorrect": false,
                "explanation": "比喻陳舊空洞的言論。"
            },
            {
                "label": "ㄇ",
                "text": "老當益壯",
                "isCorrect": true,
                "explanation": "正確！形容年紀雖大但志氣豪壯、身體健朗。"
            },
            {
                "label": "ㄈ",
                "text": "文情並茂",
                "isCorrect": false,
                "explanation": "形容文章詞采與情感俱佳。"
            },
            {
                "label": "ㄉ",
                "text": "賣友求榮",
                "isCorrect": false,
                "explanation": "出賣朋友換取利益。"
            },
            {
                "label": "ㄊ",
                "text": "先聲奪人",
                "isCorrect": false,
                "explanation": "先張揚聲勢以壓倒對方。"
            },
            {
                "label": "ㄋ",
                "text": "面紅耳赤",
                "isCorrect": false,
                "explanation": "形容爭吵激烈或害羞臉紅。"
            },
            {
                "label": "ㄌ",
                "text": "名副其實",
                "isCorrect": false,
                "explanation": "名聲與實際相符。"
            }
        ],
        "trap": "「老當益壯」的「益」是「更加」的意思（年紀雖老，志氣更加豪壯）。"
    },
    {
        "id": "q_exam_tzj_idiom_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語測驗",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・成語測驗第②題】\n📖 成語選項庫：\n[ㄅ] 一曝十寒　[ㄆ] 陳腔濫調　[ㄇ] 老當益壯　[ㄈ] 文情並茂\n[ㄉ] 賣友求榮　[ㄊ] 先聲奪人　[ㄋ] 面紅耳赤　[ㄌ] 名副其實\n\n題目：為了彌補過錯，特地寫了一封【　　】的道歉信，祈求眾人的原諒。",
        "options": [
            {
                "label": "ㄅ",
                "text": "一曝十寒",
                "isCorrect": false,
                "explanation": "比喻做事缺乏恆心。"
            },
            {
                "label": "ㄆ",
                "text": "陳腔濫調",
                "isCorrect": false,
                "explanation": "道歉信絕不能用貶義的陳腔濫調。"
            },
            {
                "label": "ㄇ",
                "text": "老當益壯",
                "isCorrect": false,
                "explanation": "形容老人健朗，不合語意。"
            },
            {
                "label": "ㄈ",
                "text": "文情並茂",
                "isCorrect": true,
                "explanation": "正確！形容道歉信文辭優美、情感真摯深切。"
            },
            {
                "label": "ㄉ",
                "text": "賣友求榮",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄊ",
                "text": "先聲奪人",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄋ",
                "text": "面紅耳赤",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄌ",
                "text": "名副其實",
                "isCorrect": false,
                "explanation": "名聲與實際相符合。"
            }
        ],
        "trap": "「文情並茂」指文章的內容辭采與真摯情感都非常豐富出色。"
    },
    {
        "id": "q_exam_tzj_idiom_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語測驗",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・成語測驗第③題】\n📖 成語選項庫：\n[ㄅ] 一曝十寒　[ㄆ] 陳腔濫調　[ㄇ] 老當益壯　[ㄈ] 文情並茂\n[ㄉ] 賣友求榮　[ㄊ] 先聲奪人　[ㄋ] 面紅耳赤　[ㄌ] 名副其實\n\n題目：兄弟倆為了爭奪球場一哥的頭銜，兩人爭得【　　】，誰也不讓誰。",
        "options": [
            {
                "label": "ㄅ",
                "text": "一曝十寒",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄆ",
                "text": "陳腔濫調",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄇ",
                "text": "老當益壯",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄈ",
                "text": "文情並茂",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄉ",
                "text": "賣友求榮",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄊ",
                "text": "先聲奪人",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄋ",
                "text": "面紅耳赤",
                "isCorrect": true,
                "explanation": "正確！形容雙方爭辯激烈，情緒激動而滿臉通紅的樣子。"
            },
            {
                "label": "ㄌ",
                "text": "名副其實",
                "isCorrect": false,
                "explanation": "語意不合。"
            }
        ],
        "trap": "「面紅耳赤」形容因激動、發怒、羞愧或用力過度而臉色耳朵脹紅。"
    },
    {
        "id": "q_exam_tzj_idiom_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語測驗",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・成語測驗第④題】\n📖 成語選項庫：\n[ㄅ] 一曝十寒　[ㄆ] 陳腔濫調　[ㄇ] 老當益壯　[ㄈ] 文情並茂\n[ㄉ] 賣友求榮　[ㄊ] 先聲奪人　[ㄋ] 面紅耳赤　[ㄌ] 名副其實\n\n題目：想要舞藝精進需要持久練習，若只是【　　】，則難成大事，註定走向失敗之路。",
        "options": [
            {
                "label": "ㄅ",
                "text": "一曝十寒",
                "isCorrect": true,
                "explanation": "正確！「一曝十寒」（曬一天、凍十天）比喻求學或做事沒有恆心、時作時輟。"
            },
            {
                "label": "ㄆ",
                "text": "陳腔濫調",
                "isCorrect": false,
                "explanation": "指陳舊沒有新意的言論。"
            },
            {
                "label": "ㄇ",
                "text": "老當益壯",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄈ",
                "text": "文情並茂",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄉ",
                "text": "賣友求榮",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄊ",
                "text": "先聲奪人",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄋ",
                "text": "面紅耳赤",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄌ",
                "text": "名副其實",
                "isCorrect": false,
                "explanation": "語意不合。"
            }
        ],
        "trap": "成語出自《孟子》，「曝」指曬太陽（讀ㄆㄨˋ）。"
    },
    {
        "id": "q_exam_tzj_idiom_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語測驗",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・成語測驗第⑤題】\n📖 成語選項庫：\n[ㄅ] 一曝十寒　[ㄆ] 陳腔濫調　[ㄇ] 老當益壯　[ㄈ] 文情並茂\n[ㄉ] 賣友求榮　[ㄊ] 先聲奪人　[ㄋ] 面紅耳赤　[ㄌ] 名副其實\n\n題目：學校每年的防災演練，宣導內容雖然【　　】，一成不變，但是每當災害來臨時，卻是保命方針。",
        "options": [
            {
                "label": "ㄅ",
                "text": "一曝十寒",
                "isCorrect": false,
                "explanation": "比喻沒有恆心。"
            },
            {
                "label": "ㄆ",
                "text": "陳腔濫調",
                "isCorrect": true,
                "explanation": "正確！呼應後文「一成不變」，指老生常談、陳腐毫無新意的言詞說法。"
            },
            {
                "label": "ㄇ",
                "text": "老當益壯",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄈ",
                "text": "文情並茂",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄉ",
                "text": "賣友求榮",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄊ",
                "text": "先聲奪人",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄋ",
                "text": "面紅耳赤",
                "isCorrect": false,
                "explanation": "語意不合。"
            },
            {
                "label": "ㄌ",
                "text": "名副其實",
                "isCorrect": false,
                "explanation": "語意不合。"
            }
        ],
        "trap": "「陳腔濫調」指陳腐老舊、毫無新意的言論或文調。"
    },
    {
        "id": "q_exam_tzj_mc_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "字形辨析",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・綜合測驗第1題】下列「 」中的國字，哪一個使用正確？",
        "options": [
            {
                "text": "海「蝕」山洞",
                "isCorrect": true,
                "explanation": "正確！「海蝕」指海水侵蝕作用，用虫部「蝕」。"
            },
            {
                "text": "「樓樓」抱抱",
                "isCorrect": false,
                "explanation": "應為「摟摟」抱抱（手部）。"
            },
            {
                "text": "浩瀚宇「咒」",
                "isCorrect": false,
                "explanation": "應為浩瀚宇「宙」（宀部）。"
            },
            {
                "text": "貨車「戴」送",
                "isCorrect": false,
                "explanation": "應為貨車「載」送（車部）。"
            }
        ],
        "trap": "區分「載（車部：載運、承載）」與「戴（戈部：穿戴、愛戴）」。"
    },
    {
        "id": "q_exam_tzj_mc_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "字音辨析",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・綜合測驗第2題】下列「 」中的字，哪一組字讀音前後相同？",
        "options": [
            {
                "text": "「征」戰 ／ 「正」義超人",
                "isCorrect": false,
                "explanation": "「征」讀ㄓㄥ（一聲）；「正」義讀ㄓㄥˋ（四聲）。"
            },
            {
                "text": "「駕」駛 ／ 上「架」",
                "isCorrect": true,
                "explanation": "正確！「駕」與「架」皆讀作四聲「ㄐㄧㄚˋ」。"
            },
            {
                "text": "「掀」開 ／ 「欣欣」向榮",
                "isCorrect": false,
                "explanation": "「掀」讀ㄒㄧㄢ；「欣」讀ㄒㄧㄣ。"
            },
            {
                "text": "「捨」棄 ／ 農「舍」",
                "isCorrect": false,
                "explanation": "「捨」棄讀ㄕㄜˇ（三聲）；農「舍」讀ㄕㄜˋ（四聲）。"
            }
        ],
        "trap": "「掀（ㄒㄧㄢ）」韻母是ㄢ，「欣（ㄒㄧㄣ）」韻母是ㄣ，注意區分！"
    },
    {
        "id": "q_exam_tzj_mc_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "字音辨析",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 1,
        "question": "【桃子腳國中小・綜合測驗第3題】下列哪一個字「不是」讀作二聲？",
        "options": [
            {
                "text": "「陳」年",
                "isCorrect": false,
                "explanation": "「陳」讀ㄔㄣˊ（二聲）。"
            },
            {
                "text": "「熟」客",
                "isCorrect": false,
                "explanation": "「熟」讀ㄕㄨˊ（或ㄕㄡˊ，皆為二聲）。"
            },
            {
                "text": "「涉」水",
                "isCorrect": true,
                "explanation": "正確！「涉」水讀作四聲「ㄕㄜˋ」，不是二聲！"
            },
            {
                "text": "光「榮」",
                "isCorrect": false,
                "explanation": "「榮」讀ㄖㄨㄥˊ（二聲）。"
            }
        ],
        "trap": "「跋山涉水」的「涉」讀四聲「ㄕㄜˋ」。"
    },
    {
        "id": "q_exam_tzj_mc_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語應用",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p1.png",
        "difficulty": 1,
        "question": "【桃子腳國中小・綜合測驗第4題】「對於實力堅強的好棒棒球隊來說，奪得冠軍有如□□□□，不費吹灰之力。」□中最適合填入哪一個語詞？",
        "options": [
            {
                "text": "粗茶淡飯",
                "isCorrect": false,
                "explanation": "形容飲食簡單樸素。"
            },
            {
                "text": "家常便飯",
                "isCorrect": true,
                "explanation": "正確！「家常便飯」比喻極為常見、習以為常的事。"
            },
            {
                "text": "蛋糕一塊",
                "isCorrect": false,
                "explanation": "這是英文 a piece of cake 的直譯，非正式成語。"
            },
            {
                "text": "千辛萬苦",
                "isCorrect": false,
                "explanation": "與後文「不費吹灰之力」矛盾。"
            }
        ],
        "trap": "區分「家常便飯（比喻很普通、常有的事）」與「粗茶淡飯（形容生活飲食簡樸）」。"
    },
    {
        "id": "q_exam_tzj_mc_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "國學常識",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・綜合測驗第5題】下列對於「律詩」的描述，何者正確？",
        "options": [
            {
                "text": "內容為四句",
                "isCorrect": false,
                "explanation": "四句的是「絕句」，律詩固定為八句。"
            },
            {
                "text": "可分為五言與七言",
                "isCorrect": true,
                "explanation": "正確！律詩分為五言律詩（每句5字，共40字）與七言律詩（每句7字，共56字）。"
            },
            {
                "text": "每一句都需要押韻",
                "isCorrect": false,
                "explanation": "偶數句（2、4、6、8句）押韻，第一句可押可不押，3、5、7句不押韻。"
            },
            {
                "text": "「舍南舍北皆春水，但見群鷗日日來」為對仗句",
                "isCorrect": false,
                "explanation": "這是首聯（1、2句），「舍南舍北」與「但見群鷗」詞性結構不同，並未對仗（3、4句與5、6句才有對仗）。"
            }
        ],
        "trap": "〈客至〉對仗的是頷聯（第3、4句：花徑不曾緣客掃，蓬門今始為君開）與頸聯（第5、6句：盤飧市遠無兼味，樽酒家貧只舊醅）。"
    },
    {
        "id": "q_exam_tzj_mc_6",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語應用",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・綜合測驗第6題】下列對於「教師工作表現」的語詞描述，何項最為適切？",
        "options": [
            {
                "text": "華佗再世",
                "isCorrect": false,
                "explanation": "形容醫生醫術高明。"
            },
            {
                "text": "浴火鳳凰",
                "isCorrect": false,
                "explanation": "比喻歷經磨難後重生。"
            },
            {
                "text": "百年樹人",
                "isCorrect": true,
                "explanation": "正確！「十年樹木，百年樹人」比喻培育人才不容易，常用來讚揚教師培育英才的貢獻。"
            },
            {
                "text": "潘安再世",
                "isCorrect": false,
                "explanation": "形容男子容貌俊美。"
            }
        ],
        "trap": "「樹人」的「樹」是動詞「培育、種植」的意思。"
    },
    {
        "id": "q_exam_tzj_mc_7",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "形近字辨析",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・綜合測驗第7題】下面句子中的□，依序填入哪一個字最適當？\n「小時候放學，每當日□時分，夜如同漆黑的布□籠罩大地，須經過那一片雜草叢生的□地，總讓人心驚膽跳。心中不禁羨□起住在市區的同學們，免受這段萬聖節般的考驗。」",
        "options": [
            {
                "text": "墓 ／ 幕 ／ 慕 ／ 暮",
                "isCorrect": false,
                "explanation": "順序錯誤。"
            },
            {
                "text": "暮 ／ 募 ／ 墓 ／ 幕",
                "isCorrect": false,
                "explanation": "布「幕」是巾部，羨「慕」是心部。"
            },
            {
                "text": "暮 ／ 幕 ／ 墓 ／ 慕",
                "isCorrect": true,
                "explanation": "正確！日「暮」（日部，傍晚）、布「幕」（巾部，帳幕）、墳「墓」（土部）、羨「慕」（心部，小水）。"
            },
            {
                "text": "慕 ／ 幕 ／ 墓 ／ 募",
                "isCorrect": false,
                "explanation": "順序錯誤。"
            }
        ],
        "trap": "「莫」家族四大形近字：日暮（下為日）、布幕（下為巾）、墓地（下為土）、羨慕（下為小水，心部）、募款（下為力）。"
    },
    {
        "id": "q_exam_tzj_mc_8",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "形近字辨析",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・綜合測驗第8題】下面句子中的□，依序填入哪一個字最適當？\n「《西遊記》中，鐵扇公主手持□蕉扇，順手一揮，瞬間揚起颶風，孫悟空等人在泥□與土石交錯的狂風中奮力前進。此時，躲在籬□旁的沙悟淨，趁著鐵扇公主不注意，一□搶下手中的扇子。」",
        "options": [
            {
                "text": "巴 ／ 把 ／ 芭 ／ 疤",
                "isCorrect": false,
                "explanation": "順序錯誤。"
            },
            {
                "text": "笆 ／ 把 ／ 芭 ／ 巴",
                "isCorrect": false,
                "explanation": "順序錯誤。"
            },
            {
                "text": "芭 ／ 巴 ／ 八 ／ 把",
                "isCorrect": false,
                "explanation": "籬「笆」是竹部。"
            },
            {
                "text": "芭 ／ 巴 ／ 笆 ／ 把",
                "isCorrect": true,
                "explanation": "正確！「芭」蕉扇（艸部）、泥「巴」、籬「笆」（竹部）、一「把」搶下（手部）。"
            }
        ],
        "trap": "「芭蕉」是植物用艸部，「籬笆」用竹子編織所以用竹部！"
    },
    {
        "id": "q_exam_tzj_mc_9",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 1,
        "question": "【桃子腳國中小・綜合測驗第9題】〈在天晴了的時候〉一文中提到「看山間移動的暗綠——雲的腳跡——它也在閒遊」，請問雲的「腳跡」指的是？",
        "options": [
            {
                "text": "登山客踩踏的道路",
                "isCorrect": false,
                "explanation": "非登山客。"
            },
            {
                "text": "天空雲朵在山林間透光移動所留下的陰影（投影）",
                "isCorrect": true,
                "explanation": "正確！雲朵遮住陽光，在翠綠山林間投下深綠色的陰影，隨雲移動就像雲的腳印。"
            },
            {
                "text": "作者赤腳踩踏形成的腳印",
                "isCorrect": false,
                "explanation": "作者走的是小徑，山間暗綠是雲影。"
            },
            {
                "text": "蝴蝶抖去水珠落下的水漬",
                "isCorrect": false,
                "explanation": "與鳳蝶無關。"
            }
        ],
        "trap": "「移動的暗綠」＝雲朵投射在山林上的影子。"
    },
    {
        "id": "q_exam_tzj_mc_10",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文結構",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・綜合測驗第10題】在〈珍珠鳥〉一文中，作者與小珍珠鳥相處的關係變化，依序為何？",
        "options": [
            {
                "text": "親近 ➔ 信賴 ➔ 陌生 ➔ 好奇",
                "isCorrect": false,
                "explanation": "順序顛倒。"
            },
            {
                "text": "親近 ➔ 陌生 ➔ 好奇 ➔ 信賴",
                "isCorrect": false,
                "explanation": "一開始怕人（陌生），不會先親近。"
            },
            {
                "text": "信賴 ➔ 陌生 ➔ 好奇 ➔ 親近",
                "isCorrect": false,
                "explanation": "信賴是最後的最高境界。"
            },
            {
                "text": "陌生（怕人） ➔ 好奇（探頭） ➔ 親近（啄筆尖/手指） ➔ 信賴（在肩上熟睡）",
                "isCorrect": true,
                "explanation": "正確！由一開始躲在吊蘭裡（陌生），到探出小腦袋、在屋裡飛（好奇），再到跳上書桌啄筆尖（親近），最後趴在作者肩上熟睡（完全信賴）。"
            }
        ],
        "trap": "熟記〈珍珠鳥〉情感推進四部曲：陌生 ➔ 好奇 ➔ 親近 ➔ 信賴。"
    },
    {
        "id": "q_exam_tzj_mc_11",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・綜合測驗第11題】杜甫〈客至〉一詩內文中，哪一句最能窺見詩人「居家周遭的自然環境」？",
        "options": [
            {
                "text": "樽酒家貧只舊醅",
                "isCorrect": false,
                "explanation": "此句描寫家境清貧、待客的酒菜簡樸。"
            },
            {
                "text": "肯與鄰翁相對飲",
                "isCorrect": false,
                "explanation": "此句描寫主客相聚歡飲、邀鄰居同樂。"
            },
            {
                "text": "舍南舍北皆春水",
                "isCorrect": true,
                "explanation": "正確！「舍南舍北皆春水」描寫草堂南北四周皆被春水（浣花溪）環繞的居住環境。"
            },
            {
                "text": "蓬門今始為君開",
                "isCorrect": false,
                "explanation": "此句描寫開門迎客的喜悅。"
            }
        ],
        "trap": "首聯「舍南舍北皆春水，但見群鷗日日來」點出居住環境（草堂四周春水環繞、幽靜偏僻）。"
    },
    {
        "id": "q_exam_tzj_mc_12",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 1,
        "question": "【桃子腳國中小・綜合測驗第12題】在〈贏得喝采的輸家〉一文中，安納亞內心追求的真正榮耀是？",
        "options": [
            {
                "text": "夢寐以求的金牌",
                "isCorrect": false,
                "explanation": "他放棄了趁對手失誤奪金的機會。"
            },
            {
                "text": "遵循教練的指令",
                "isCorrect": false,
                "explanation": "他甚至一度擔心教練責罵，但仍堅持做對的事。"
            },
            {
                "text": "超越勝敗的價值（誠實與運動家精神）",
                "isCorrect": true,
                "explanation": "正確！名次不是唯一，身為運動員對自己的要求與可貴的運動家精神才是真正的榮耀。"
            },
            {
                "text": "成為穆太的好友",
                "isCorrect": false,
                "explanation": "並非為了交朋友。"
            }
        ],
        "trap": "〈贏得喝采的輸家〉核心主旨：真正的榮耀來自於堂堂正正的運動家精神，而非靠對手失誤得來的獎牌。"
    },
    {
        "id": "q_exam_tzj_mc_13",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "敘事人稱",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・綜合測驗第13題】寫作時使用不同「人稱」觀點帶給讀者感受亦不同，下列哪項為「第三人稱」觀點？",
        "options": [
            {
                "text": "只要再幾步，我就能反敗為勝。",
                "isCorrect": false,
                "explanation": "出現「我」，為第一人稱。"
            },
            {
                "text": "對於你來說，是否也能感同身受？",
                "isCorrect": false,
                "explanation": "出現「你」，為第二人稱。"
            },
            {
                "text": "操場上，阿綸飛快奔跑著，像隻出閘獵豹。",
                "isCorrect": true,
                "explanation": "正確！以旁觀者角度敘述「阿綸」的動作，屬於第三人稱觀點。"
            },
            {
                "text": "面對吵鬧不已的課堂，我雙拳緊握，不讓眼淚奪眶而出。",
                "isCorrect": false,
                "explanation": "出現「我」，為第一人稱。"
            }
        ],
        "trap": "人稱判斷速記：第一人稱（我、我們，主觀身歷其境）；第二人稱（你、你們，親切對話感）；第三人稱（他、她、人名，客觀全知）。"
    },
    {
        "id": "q_exam_tzj_mc_14",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 3,
        "question": "【桃子腳國中小・綜合測驗第14題】對於〈哇！原來如此〉一文的內容介紹，何者「有誤」？",
        "options": [
            {
                "text": "本課體裁為說明文。",
                "isCorrect": false,
                "explanation": "此敘述正確。"
            },
            {
                "text": "消防衣能保護消防員入火場救災，最外層功能為隔熱層。",
                "isCorrect": true,
                "explanation": "有誤！消防衣從外到裡共有三層：最外層耐火且耐磨、中間層防水透氣、最裡層才是「隔熱層」！"
            },
            {
                "text": "舞臺專用的耳機是入耳監聽式，能協助表演者專注演出。",
                "isCorrect": false,
                "explanation": "此敘述正確。"
            },
            {
                "text": "拍攝現場工作人員用場記板註記資訊，有利於影片後製剪接。",
                "isCorrect": false,
                "explanation": "此敘述正確。"
            }
        ],
        "trap": "必考細節！消防衣三層構造（由外而內）：①最外層（耐火耐磨）➔ ②中間層（防水透氣）➔ ③最裡層（隔熱層，保持舒適）。"
    },
    {
        "id": "q_exam_tzj_mc_15",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・綜合測驗第15題】下列關於〈登月先鋒〉一文的敘述，何者最為正確？",
        "options": [
            {
                "text": "本課採用倒敘法（從登月成功那一刻寫起，再回溯童年與訓練過程）敘事。",
                "isCorrect": true,
                "explanation": "正確！第一段先寫1969年阿姆斯壯踏上月球說出名言，第二段再回頭從他6歲初次搭飛機寫起，屬於倒敘法。"
            },
            {
                "text": "阿姆斯壯駕駛的先進太空船，能乘坐四十萬人。",
                "isCorrect": false,
                "explanation": "四十萬人是指「幕後參與阿波羅計畫的科學家、工程師等工作人員總數」，太空船只有3位太空人！"
            },
            {
                "text": "阿姆斯壯在月球上，望見火紅色的家鄉，並讚嘆它的美麗。",
                "isCorrect": false,
                "explanation": "地球是「藍綠圓滿豐潤的星球，像顆夜明珠」，不是火紅色（火紅色是火箭噴出的火焰）。"
            },
            {
                "text": "阿姆斯壯的心願是：有人能協助帶回他遺落在月球上的珍貴攝影機。",
                "isCorrect": false,
                "explanation": "攝影機並非不小心遺落，而是為了減輕小艇重量刻意留下的，且他的心願是人類未來能重返月球、延續探索精神。"
            }
        ],
        "trap": "第六課兩大常考陷阱：(1) 全文採「倒敘法」；(2)「四十萬人」是幕後團隊人數，不是太空船載客量！"
    },
    {
        "id": "q_exam_tzj_mc_16",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "修辭辨析",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・綜合測驗第16題】下列何者與「雲的腳跡——它也在閒遊」運用相同的寫作技巧（擬人法）？",
        "options": [
            {
                "text": "掌聲才如雷般響起。",
                "isCorrect": false,
                "explanation": "這是譬喻法兼誇飾法。"
            },
            {
                "text": "新陽推開了陰霾（烏雲）。",
                "isCorrect": true,
                "explanation": "正確！「推開」賦予太陽人的動作，與雲在「閒遊」一樣都是轉化中的「擬人法」。"
            },
            {
                "text": "踏著新泥，涉過溪流。",
                "isCorrect": false,
                "explanation": "這是人的實際動作（對偶／白描）。"
            },
            {
                "text": "牠跳上稿紙，繞著筆尖蹦來蹦去。",
                "isCorrect": false,
                "explanation": "這是珍珠鳥真實的跳躍動作，不是擬人。"
            }
        ],
        "trap": "注意：「小鳥跳上稿紙」是鳥原本就會做的動作（非擬人）；「新陽推開陰霾、小草炫耀新綠、小路溫柔」才是擬人！"
    },
    {
        "id": "q_exam_tzj_mc_17",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "修辭辨析",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p2.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・綜合測驗第17題】下列哪一個句子運用寫作手法的方式與其他三句不同？",
        "options": [
            {
                "text": "藍綠圓滿豐潤的星球，像顆夜明珠。",
                "isCorrect": true,
                "explanation": "正確！此句使用「像……」，屬於「譬喻法」；其餘三句（偷偷潛入、迎風跳舞、展開雙臂迎接）皆為「擬人法」。"
            },
            {
                "text": "陽光從窗外偷偷潛入，美麗的吊蘭色彩交雜。",
                "isCorrect": false,
                "explanation": "「偷偷潛入」為擬人法。"
            },
            {
                "text": "紅白藍三色相間的國旗，在三鶯大橋上迎風跳舞。",
                "isCorrect": false,
                "explanation": "「迎風跳舞」為擬人法。"
            },
            {
                "text": "一望無際的灰色沙漠展開雙臂，迎接我的冒險之旅。",
                "isCorrect": false,
                "explanation": "「展開雙臂、迎接」為擬人法。"
            }
        ],
        "trap": "選項②③④都是把無生物當作人來寫（擬人），只有①是把地球比喻成夜明珠（譬喻）。"
    },
    {
        "id": "q_exam_tzj_read1_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（白話文）",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p3.png",
        "difficulty": 1,
        "question": "【桃子腳國中小・閱讀（一）《視力與偏見》第1題】\n📖 節錄自李家同《讓高牆倒下吧・視力與偏見》：\n作者在從紐約到波士頓的火車上遇到一位白人老先生。老先生年輕時是美國南方人，對黑人充滿偏見，甚至不肯碰到黑人店員的手。後來老先生因車禍失明，在盲人重建院裡非常信賴一位心理輔導員，將他視為良師益友。有一天輔導員告訴他，自己其實就是黑人！從此老先生的偏見完全消失，說：「對我來講，我只知道他是好人，還是壞人；至於膚色，對我已絕對地無意義了。我失去了視力，也失去了偏見，多麼幸福的事！」下車時，作者赫然發現來接老先生的太太竟是一位滿頭銀髮的黑人，大吃一驚，感嘆：「我這才發現，我視力良好，因此我偏見猶在，多麼不幸的事！」\n\n請問：作者在火車上遇到的那位白人老先生，哪件事最先引起作者注意？",
        "options": [
            {
                "text": "他是一位盲人",
                "isCorrect": true,
                "explanation": "正確！文章首句即寫道：「在從紐約到波士頓的火車上，我發現我隔壁座的老先生是位盲人。」"
            },
            {
                "text": "他說話很大聲",
                "isCorrect": false,
                "explanation": "文中未提及。"
            },
            {
                "text": "他衣著非常特別",
                "isCorrect": false,
                "explanation": "文中未提及。"
            },
            {
                "text": "他戴著一副很奇怪的眼鏡",
                "isCorrect": false,
                "explanation": "文中未提及。"
            }
        ],
        "trap": "直接從文章第一句即可找到答案。"
    },
    {
        "id": "q_exam_tzj_read1_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（白話文）",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p3.png",
        "difficulty": 1,
        "question": "【桃子腳國中小・閱讀（一）《視力與偏見》第2題】那位老先生年輕時對黑人有什麼看法？",
        "options": [
            {
                "text": "覺得黑人能力比白人強",
                "isCorrect": false,
                "explanation": "他當時認為黑人低人一等。"
            },
            {
                "text": "沒有對黑人有特別的看法",
                "isCorrect": false,
                "explanation": "他年輕時有強烈的種族偏見。"
            },
            {
                "text": "認為黑人跟白人一樣平等",
                "isCorrect": false,
                "explanation": "這是失明之後才領悟的。"
            },
            {
                "text": "覺得黑人低人一等，不可與白人交往、參加活動",
                "isCorrect": true,
                "explanation": "正確！他年輕時辦野餐會拒絕黑人、付錢不碰黑人店員的手，認為白人與黑人結婚會使父母蒙辱。"
            }
        ],
        "trap": "注意題目問的是「年輕時（失明前）」的看法。"
    },
    {
        "id": "q_exam_tzj_read1_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（白話文）",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p3.png",
        "difficulty": 1,
        "question": "【桃子腳國中小・閱讀（一）《視力與偏見》第3題】老先生失明以後，他與哪一位黑人有深厚互動，使他的偏見開始改變？",
        "options": [
            {
                "text": "一位黑人商人",
                "isCorrect": false,
                "explanation": "非商人。"
            },
            {
                "text": "一位黑人律師",
                "isCorrect": false,
                "explanation": "非律師。"
            },
            {
                "text": "一位黑人鄰居",
                "isCorrect": false,
                "explanation": "非鄰居。"
            },
            {
                "text": "一位黑人心理輔導員",
                "isCorrect": true,
                "explanation": "正確！盲人重建院裡的心理輔導員耐心開導他，成為他的良師益友，後來才透露自己是黑人。"
            }
        ],
        "trap": "因為看不見膚色，老先生才能用「心」體會對方的善良與真誠。"
    },
    {
        "id": "q_exam_tzj_read1_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（白話文）",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p3.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・閱讀（一）《視力與偏見》第4題】在文章中，有一個轉折點是老先生說「至於膚色，對我已絕對地無意義了」。這句話的意思是什麼？",
        "options": [
            {
                "text": "他還是不能接受黑人",
                "isCorrect": false,
                "explanation": "他的偏見已經完全消失了。"
            },
            {
                "text": "他忘記自己說過什麼",
                "isCorrect": false,
                "explanation": "並非失憶。"
            },
            {
                "text": "他認為所有人都是白人",
                "isCorrect": false,
                "explanation": "他知道世上有不同膚色，但不再以此評判人。"
            },
            {
                "text": "他已不把膚色作為判斷人的標準，只看對方是好人還是壞人",
                "isCorrect": true,
                "explanation": "正確！他明白人的品格好壞與外在膚色毫無關係。"
            }
        ],
        "trap": "呼應前文：「對我來講，我只知道他是好人，還是壞人；至於膚色，對我已絕對地無意義了。」"
    },
    {
        "id": "q_exam_tzj_read1_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（白話文）",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p3.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・閱讀（一）《視力與偏見》第5題】作者寫這篇文章，最主要想讓讀者反思什麼？",
        "options": [
            {
                "text": "要盡量避免車禍與失明",
                "isCorrect": false,
                "explanation": "這不是文章主旨。"
            },
            {
                "text": "對所有不認識的人都要提高警覺",
                "isCorrect": false,
                "explanation": "與主旨無關。"
            },
            {
                "text": "眼睛看得到的就是最真實的世界",
                "isCorrect": false,
                "explanation": "恰恰相反！肉眼往往帶來膚淺的偏見。"
            },
            {
                "text": "偏見往往是因為「只看外在表面」造成的，唯有放下成見才能看見人心",
                "isCorrect": true,
                "explanation": "正確！結尾作者驚訝於老先生的黑人太太，反思自己「視力良好，因此偏見猶在」，點出外在視覺常蒙蔽心靈。"
            }
        ],
        "trap": "文章結尾的對比：「失去了視力，也失去了偏見（幸福）」vs「視力良好，偏見猶在（不幸）」。"
    },
    {
        "id": "q_exam_tzj_read2_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（現代詩）",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p4.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・閱讀（二）《雨巷》第1題】\n📖 戴望舒〈雨巷〉（節錄）：\n「撐著油紙傘，獨自／彷徨在悠長，悠長／又寂寥的雨巷，／我希望逢著／一個丁香一樣／結著愁怨的姑娘。\n她是有／丁香一樣的顏色，／丁香一樣的芬芳，／丁香一樣的憂愁，／在雨中哀怨，／哀怨又彷徨。\n……像夢中飄過／一枝丁香地，／我身旁飄過這女郎；／她靜靜地遠了，遠了，／到了頹圮的籬牆，／走盡這雨巷。」\n\n請問：詩中的「我」為什麼會在雨巷中走來走去（彷徨）？",
        "options": [
            {
                "text": "他迷路了找不到家",
                "isCorrect": false,
                "explanation": "非迷路。"
            },
            {
                "text": "他想找鄰居聊天說話",
                "isCorrect": false,
                "explanation": "詩中姑娘全程靜默飄過。"
            },
            {
                "text": "他正在等公車",
                "isCorrect": false,
                "explanation": "非等車。"
            },
            {
                "text": "他在尋找與期盼心中想見的人（或理想）",
                "isCorrect": true,
                "explanation": "正確！從「我希望逢著／一個丁香一樣／結著愁怨的姑娘」可知詩人內心有所追尋與期盼。"
            }
        ],
        "trap": "「我希望逢著……」點出詩人在雨巷中徘徊是為了追尋心中的美好理想與知音。"
    },
    {
        "id": "q_exam_tzj_read2_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（現代詩）",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p4.png",
        "difficulty": 1,
        "question": "【桃子腳國中小・閱讀（二）《雨巷》第2題】〈雨巷〉這首詩的場景是在什麼時候與地點？",
        "options": [
            {
                "text": "大晴天的下午",
                "isCorrect": false,
                "explanation": "詩題即為雨巷。"
            },
            {
                "text": "下雨的小巷子裡",
                "isCorrect": true,
                "explanation": "正確！「撐著油紙傘，獨自彷徨在悠長、悠長又寂寥的雨巷」。"
            },
            {
                "text": "星光閃爍的夜晚",
                "isCorrect": false,
                "explanation": "非晴朗夜晚。"
            },
            {
                "text": "冬天下雪的街道",
                "isCorrect": false,
                "explanation": "非下雪。"
            }
        ],
        "trap": "從「撐著油紙傘、雨巷、在雨中哀怨」即可判斷場景。"
    },
    {
        "id": "q_exam_tzj_read2_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（現代詩）",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p4.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・閱讀（二）《雨巷》第3題】詩人遇到的「丁香姑娘」是怎樣的形象？",
        "options": [
            {
                "text": "是他的青梅竹馬鄰居",
                "isCorrect": false,
                "explanation": "非真實鄰居。"
            },
            {
                "text": "真實存在並熱情跟他說話",
                "isCorrect": false,
                "explanation": "她「靜默地走近，像夢一般地飄過」。"
            },
            {
                "text": "是在巷口賣丁香花的小姐",
                "isCorrect": false,
                "explanation": "「丁香」是比喻姑娘的芬芳與愁怨，不是賣花。"
            },
            {
                "text": "如夢境般飄渺，是詩人心中想像與寄託的象徵形象",
                "isCorrect": true,
                "explanation": "正確！首尾皆寫「我希望逢著／我希望飄過」，中間寫「像夢一般地淒婉迷茫」，可見姑娘是詩人想像出來的理想象徵。"
            }
        ],
        "trap": "首段「我希望逢著」與末段「我希望飄過」首尾呼應，說明這是一場如夢似幻的想像與期盼。"
    },
    {
        "id": "q_exam_tzj_read2_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（現代詩）",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p4.png",
        "difficulty": 2,
        "question": "【桃子腳國中小・閱讀（二）《雨巷》第4題】詩中多次出現「彷徨」、「寂寥」、「惆悵」等詞，這樣的詞彙重複運用（類疊／反覆）有何效果？",
        "options": [
            {
                "text": "表示詩人詞彙貧乏、不知所措",
                "isCorrect": false,
                "explanation": "戴望舒素有「雨巷詩人」美譽，此為刻意的音樂美與氛圍營造。"
            },
            {
                "text": "使詩顯得歡快活潑",
                "isCorrect": false,
                "explanation": "這些詞皆為憂鬱感傷之詞。"
            },
            {
                "text": "單純為了湊足字數",
                "isCorrect": false,
                "explanation": "現代詩不限字數。"
            },
            {
                "text": "加強詩的悲傷、孤寂與迷茫氣氛",
                "isCorrect": true,
                "explanation": "正確！透過反覆吟詠「彷徨、寂寥、哀怨、惆悵」，營造出綿延不絕的憂愁與迷茫氛圍。"
            }
        ],
        "trap": "現代詩中的「類疊與反覆」能創造音樂節奏感，並強化特定情感氛圍。"
    },
    {
        "id": "q_exam_tzj_read2_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（現代詩）",
        "batch": "段考真題",
        "school": "新北市桃子腳國中小",
        "examPageImage": "images/exams/EXAM_MID1/taozijiao_p4.png",
        "difficulty": 1,
        "question": "【桃子腳國中小・閱讀（二）《雨巷》第5題】〈雨巷〉全詩的情感基調可以用什麼詞來形容？",
        "options": [
            {
                "text": "悲傷與思念（憂愁與期盼）",
                "isCorrect": true,
                "explanation": "正確！全詩充滿江南雨巷的淒清、憂愁與對美好事物的追尋思念。"
            },
            {
                "text": "生氣與抱怨",
                "isCorrect": false,
                "explanation": "無憤怒抱怨之情。"
            },
            {
                "text": "驚訝與害怕",
                "isCorrect": false,
                "explanation": "無恐懼之情。"
            },
            {
                "text": "快樂與開心",
                "isCorrect": false,
                "explanation": "與全詩氛圍相反。"
            }
        ],
        "trap": "古典詩詞中「丁香結」常象徵「愁思與憂怨」。"
    },
    {
        "id": "q_exam_neihu_hw_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p1.png",
        "difficulty": 3,
        "question": "【內湖國小・國字注音①~⑤】在一個小小村莊裡有一條小溪，溪水①[[注音:潺:ㄔㄢˊ]]潺從山壁的縫②[[國字:ㄒㄧˋ:隙]]流③[[注音:瀉:ㄒㄧㄝˋ]]而下，把一切④[[注音:塵:ㄔㄣˊ]]⑤[[國字:ㄍㄡˋ:垢]]都沖乾淨了。",
        "correctAnswer": "ㄔㄢˊ、隙、ㄒㄧㄝˋ、ㄔㄣˊ、垢",
        "explanation": "【解說】①「潺」潺讀二聲「ㄔㄢˊ」（翹舌音）；②縫「隙」（阜部，右邊是小＋日＋小）；③流「瀉」讀四聲「ㄒㄧㄝˋ」；④「塵」讀二聲「ㄔㄣˊ」；⑤塵「垢」（土部）。",
        "trap": "「潺（ㄔㄢˊ）」是翹舌音，不要念成ㄘㄢˊ；「隙」右邊上下都是「小」，不是水！"
    },
    {
        "id": "q_exam_neihu_hw_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p1.png",
        "difficulty": 3,
        "question": "【內湖國小・國字注音⑥~⑩】孩子們常常⑥[[注音:涉:ㄕㄜˋ]]水玩耍，用小⑦[[國字:ㄕㄠˊ:勺]]子⑧[[注音:撈:ㄌㄠ]]魚撈蝦，為村莊增⑨[[國字:ㄊㄧㄢ:添]]許多快樂。雖然村裡的屋⑩[[國字:ㄕㄜˋ:舍]]都有點簡陋，但大家覺得很幸福。",
        "correctAnswer": "ㄕㄜˋ、勺、ㄌㄠ、添、舍",
        "explanation": "【解說】⑥「涉」水讀四聲「ㄕㄜˋ」；⑦「勺」子（勹部，裡面一點）；⑧「撈」魚讀一聲「ㄌㄠ」（口語常讀ㄌㄠˊ，但審定音可注意一聲ㄌㄠ）；⑨增「添」（水部＋忝，右下是小水）；⑩屋「舍」（人＋舌）。",
        "trap": "「添」的右下方是「㣺」（心部變體，兩點），千萬不要少寫一點變成水！"
    },
    {
        "id": "q_exam_neihu_hw_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p1.png",
        "difficulty": 3,
        "question": "【內湖國小・國字注音⑪~⑮】雖然屋舍都有點簡⑪[[國字:ㄌㄡˋ:陋]]，村子口有一棵老樹⑫[[注音:兀:ㄨˋ]]自站著，像守護神一樣。一個暴風雨後的⑬[[國字:ㄌㄧㄥˊ:凌]]晨，老樹沙沙低語：「雖然我的枝葉會慢慢⑭[[注音:朽:ㄒㄧㄡˇ]]壞，但我的根卻⑮[[國字:ㄕㄨˇ:屬]]於大地。」",
        "correctAnswer": "陋、ㄨˋ、凌、ㄒㄧㄡˇ、屬",
        "explanation": "【解說】⑪簡「陋」（阜部）；⑫「兀」自讀四聲「ㄨˋ」；⑬「凌」晨（冫部）；⑭「朽」壞讀三聲「ㄒㄧㄡˇ」；⑮「屬」於（尸部）。",
        "trap": "「兀自」的「兀」讀作四聲「ㄨˋ」，不要跟光禿禿的「禿（ㄊㄨ）」搞混！"
    },
    {
        "id": "q_exam_neihu_hw_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p1.png",
        "difficulty": 3,
        "question": "【內湖國小・國字注音⑯~⑳】老樹說：「這是我的根存在過的痕⑯[[國字:ㄐㄧ:跡]]。而我身旁的⑰[[注音:荒:ㄏㄨㄤ]]地也會長出新的嫩芽，這就是生命的傳⑱[[國字:ㄔㄥˊ:承]]。」孩子們明白了，生命裡有新的東西來到，也會有⑲[[國字:ㄐㄧㄡˋ:舊]]的東西離開，⑳[[注音:唯:ㄨㄟˊ]]有合在一起才成為完整。",
        "correctAnswer": "跡、ㄏㄨㄤ、承、舊、ㄨㄟˊ",
        "explanation": "【解說】⑯痕「跡」（足部）；⑰「荒」地讀一聲「ㄏㄨㄤ」；⑱傳「承」（手部）；⑲「舊」（艸＋隹＋臼）；⑳「唯」有讀二聲「ㄨㄟˊ」。",
        "trap": "「舊」上面是艸，中間是「隹」（四橫），下面是「臼」，筆畫要寫清楚！"
    },
    {
        "id": "q_exam_neihu_mc_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "文體與表述方式",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p1.png",
        "difficulty": 2,
        "question": "【內湖國小・選擇第(1)題】下列哪一句以「說明」的方式來陳述「客觀事實」？",
        "options": [
            {
                "text": "消防衣從外到裡共有三層",
                "isCorrect": true,
                "explanation": "正確！客觀介紹消防衣的構造層數，不含個人主觀情緒，屬於「說明」陳述客觀事實。"
            },
            {
                "text": "比賽就是要贏",
                "isCorrect": false,
                "explanation": "這是個人主觀的想法與論點（議論／主觀看法）。"
            },
            {
                "text": "那是小鳥舒適而溫暖的巢",
                "isCorrect": false,
                "explanation": "含有作者溫馨的感受與描寫（記敘／抒情）。"
            },
            {
                "text": "我絲毫不覺得冷",
                "isCorrect": false,
                "explanation": "這是主角個人的主觀感覺。"
            }
        ],
        "trap": "區分「客觀事實（說明）」與「主觀感受（抒情）」：能用科學或實際數據驗證構造的是客觀事實。"
    },
    {
        "id": "q_exam_neihu_mc_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p1.png",
        "difficulty": 1,
        "question": "【內湖國小・選擇第(2)題】從下列哪一句可以看出安納亞最終還是選擇將「運動家精神」看得比名次重要？",
        "options": [
            {
                "text": "只要再幾步，我就能反敗為勝",
                "isCorrect": false,
                "explanation": "這是他當下可以超越對手的契機與內心掙扎。"
            },
            {
                "text": "這是一場公平公開的比賽，比賽不就是要求得勝利",
                "isCorrect": false,
                "explanation": "這是他內心一度猶豫的想法。"
            },
            {
                "text": "看著他高興的樣子，我伸出手，輕輕拍了他的背，伸長食指，指向前方（真正的終點）",
                "isCorrect": true,
                "explanation": "正確！他沒有趁對手認錯終點而超車奪金，反而主動拍背提醒對手跑向真正的終點，展現崇高的運動家精神。"
            },
            {
                "text": "這場比賽的勝利即將屬於我",
                "isCorrect": false,
                "explanation": "這是提醒對手之前的內心動念。"
            }
        ],
        "trap": "選項①②④都是安納亞在做出決定前的「內心天人交戰」，唯有③是他最終做出的「高尚行動」。"
    },
    {
        "id": "q_exam_neihu_mc_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p1.png",
        "difficulty": 1,
        "question": "【內湖國小・選擇第(3)題】從〈客至〉以下哪句可以看出詩人「很重視來客」？",
        "options": [
            {
                "text": "盤飧市遠無兼味",
                "isCorrect": false,
                "explanation": "說明離市集遠，菜色簡單，向客人表達歉意。"
            },
            {
                "text": "蓬門今始為君開",
                "isCorrect": true,
                "explanation": "正確！平時不隨便為人清掃花徑、敞開柴門，今天特地為了您（君）而打開，凸顯來客在詩人心中的重要地位。"
            },
            {
                "text": "但見群鷗日日來",
                "isCorrect": false,
                "explanation": "描寫平日環境幽僻，只有水鳥相伴。"
            },
            {
                "text": "肯與鄰翁相對飲",
                "isCorrect": false,
                "explanation": "表現主客率真隨和、邀鄰同飲的熱絡。"
            }
        ],
        "trap": "「不曾緣客掃」與「今始為君開」透過對比（平時不開 vs 今日為你而開），極力烘托對貴客的重視。"
    },
    {
        "id": "q_exam_neihu_mc_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p1.png",
        "difficulty": 1,
        "question": "【內湖國小・選擇第(4)題】從下列哪句可以看出小珍珠鳥最終「完全信賴」作者？",
        "options": [
            {
                "text": "我很少掀開葉蔓驚動牠們，牠們便漸漸敢伸出小腦袋看看我",
                "isCorrect": false,
                "explanation": "這只是剛開始卸下戒心。"
            },
            {
                "text": "三個月後，忽然有一個更小的腦袋從葉間探出來",
                "isCorrect": false,
                "explanation": "這是雛鳥剛出生好奇探頭。"
            },
            {
                "text": "我輕輕抬一抬肩，牠沒醒，睡得好熟！還咂咂嘴，難道在做夢？",
                "isCorrect": true,
                "explanation": "正確！鳥兒警戒心極強，竟然能在人類的肩膀上安心熟睡，連抬肩都沒醒，代表百分之百的完全信賴。"
            },
            {
                "text": "隨後就在屋裡飛來飛去",
                "isCorrect": false,
                "explanation": "這是活動範圍擴大，尚未到完全信賴的最高峰。"
            }
        ],
        "trap": "在肩膀上熟睡不醒，是〈珍珠鳥〉全篇「信賴」情感的最高潮。"
    },
    {
        "id": "q_exam_neihu_mc_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文結構",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p1.png",
        "difficulty": 2,
        "question": "【內湖國小・選擇第(5)題】下列哪句在詩中反覆出現，就像回音一樣呼應了題目「在天晴了的時候」？",
        "options": [
            {
                "text": "溪水在溫風中暈皺",
                "isCorrect": false,
                "explanation": "僅出現於詩中描寫景物段落。"
            },
            {
                "text": "新陽推開了陰霾了",
                "isCorrect": false,
                "explanation": "僅出現一次。"
            },
            {
                "text": "到小徑中去走走吧",
                "isCorrect": true,
                "explanation": "正確！「在天晴了的時候，請到小徑中去走走（走走吧）」在詩的首尾與段落間反覆出現，形成迴環往復的節奏並呼應詩題。"
            },
            {
                "text": "炫耀著新綠的小草",
                "isCorrect": false,
                "explanation": "為局部景物描寫。"
            }
        ],
        "trap": "〈在天晴了的時候〉全詩以「到小徑中去走走」貫穿前後，邀請讀者一同走入雨後初晴的大自然。"
    },
    {
        "id": "q_exam_neihu_mc_6",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p1.png",
        "difficulty": 2,
        "question": "【內湖國小・選擇第(6)題】從下列哪句話可以看出阿姆斯壯對「站上月球（探索太空）」的嚮往，已超越一般的飛行？",
        "options": [
            {
                "text": "他一頭栽進飛機模型的製作，閱讀飛行雜誌",
                "isCorrect": false,
                "explanation": "這是他童年對「飛機與飛行」的熱愛。"
            },
            {
                "text": "六歲的他初次搭上飛機，從此，對飛行著迷不已",
                "isCorrect": false,
                "explanation": "這是對「搭飛機」的啟蒙。"
            },
            {
                "text": "參與各種飛行測試，很快的，眼前的天空已經無法滿足他",
                "isCorrect": true,
                "explanation": "正確！「眼前的天空已經無法滿足他」象徵他的志向已從大氣層內的飛行，邁向更浩瀚的宇宙與月球！"
            },
            {
                "text": "鑽研航空學問，立志當飛行員",
                "isCorrect": false,
                "explanation": "這是立志當飛行員，尚未轉向太空人。"
            }
        ],
        "trap": "區分「對飛行的熱愛（①②④）」與「對太空月球的嚮往（③眼前的天空已經無法滿足他）」。"
    },
    {
        "id": "q_exam_neihu_mc_7",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "寫作技巧",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p1.png",
        "difficulty": 1,
        "question": "【內湖國小・選擇第(7)題】說明文（如〈哇！原來如此〉）以「為什麼……？」的疑問句開頭，主要可以達成怎樣的效果？",
        "options": [
            {
                "text": "引發出讀者想探究的好奇心與閱讀動機",
                "isCorrect": true,
                "explanation": "正確！以「設問（懸問／提問）」開頭能激發讀者的好奇心，引導讀者繼續往下讀尋找答案。"
            },
            {
                "text": "使讀者彷彿身歷其境看見風景",
                "isCorrect": false,
                "explanation": "那是視覺摹寫的效果。"
            },
            {
                "text": "為自己的觀點提供更有力的數據佐證",
                "isCorrect": false,
                "explanation": "問句本身不是數據佐證。"
            },
            {
                "text": "觸動讀者悲傷情緒的共鳴",
                "isCorrect": false,
                "explanation": "說明文以知識傳遞為主，非悲傷共鳴。"
            }
        ],
        "trap": "說明文開頭提問的三大作用：引發好奇心、激發閱讀動機、引出說明主題。"
    },
    {
        "id": "q_exam_neihu_mc_8",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "文體與表述方式",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・選擇第(8)題】下列哪一句以「抒情」的方式來表達「主觀感受」？",
        "options": [
            {
                "text": "給雨潤過的泥路，一定是涼爽又溫柔",
                "isCorrect": true,
                "explanation": "正確！「一定是涼爽又溫柔」帶有詩人對雨後泥路的喜愛與想像，屬於主觀感受的抒發。"
            },
            {
                "text": "你沒有成為優秀的運動員，但成了一個更優秀的人",
                "isCorrect": false,
                "explanation": "這是人物對話中的評論（議論／評價）。"
            },
            {
                "text": "每當發生火災時，消防人員總是迅速趕往現場撲滅火勢",
                "isCorrect": false,
                "explanation": "這是敘述客觀情況。"
            },
            {
                "text": "跳動的小紅爪子在紙上發出細微的ㄘㄚㄘㄚ聲響",
                "isCorrect": false,
                "explanation": "這是客觀的視覺與聽覺記敘描寫。"
            }
        ],
        "trap": "「一定是……溫柔」含有作者主觀的情感投射，屬於抒情感受。"
    },
    {
        "id": "q_exam_neihu_mc_9",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "感官摹寫",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・選擇第(9)題】「一望無際的沙灰色」和以下哪句運用了一樣的感官摹寫手法（視覺摹寫）？",
        "options": [
            {
                "text": "倒數聲夾雜震耳的巨響",
                "isCorrect": false,
                "explanation": "這是「聽覺摹寫」。"
            },
            {
                "text": "一片柔軟又溼潤的泥地",
                "isCorrect": false,
                "explanation": "「柔軟、溼潤」主要是「觸覺摹寫」。"
            },
            {
                "text": "幾顆大大小小的露珠，錯落在高高低低的荷葉上",
                "isCorrect": true,
                "explanation": "正確！描寫露珠與荷葉的大小、高低與空間分布畫面，與「一望無際的沙灰色」同屬「視覺摹寫」。"
            },
            {
                "text": "這一股嗆鼻的氣味",
                "isCorrect": false,
                "explanation": "這是「嗅覺摹寫」。"
            }
        ],
        "trap": "區分感官摹寫：①震耳巨響（聽覺）、②柔軟溼潤（觸覺）、③大小露珠錯落荷葉（視覺）、④嗆鼻氣味（嗅覺）。"
    },
    {
        "id": "q_exam_neihu_hw_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "四字語詞填空",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 3,
        "question": "【內湖國小・第三大題語詞填空】請補上四字語詞中所缺少的國字：①[[國字:ㄐㄧㄣˋ:盡]]其所能、④歡聲[[國字:ㄌㄟˊ:雷]]動、⑦大勢[[國字:ㄧˇ:已]]去、⑩天色入[[國字:ㄇㄨˋ:暮]]、⑬百年[[國字:ㄕㄨˋ:樹]]人。",
        "correctAnswer": "盡、雷、已、暮、樹",
        "explanation": "【解說】「盡其所能」指竭盡全力；「歡聲雷動」指歡呼聲如雷鳴；「大勢已去」（注意是已經的「已」，開口較小，不是己或巳）；「天色入暮」（日部）；「百年樹人」（木部）。",
        "trap": "「大勢已去」的「已」左上方要露出一點頭，千萬別寫成完全封口的「巳」或全開的「己」！"
    },
    {
        "id": "q_exam_neihu_cloze_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語篇章選填",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・篇章選填第(1)格】\n📖 語詞選項庫（15選1）：\n[①] 盡其所能　[②] 碧空如洗　[③] 不足為奇　[④] 歡聲雷動　[⑤] 反敗為勝\n[⑥] 妙手回春　[⑦] 大勢已去　[⑧] 秋高氣爽　[⑨] 如願以償　[⑩] 天色入暮\n[⑪] 輕描淡寫　[⑫] 反其道而行　[⑬] 百年樹人　[⑭] 動彈不得　[⑮] 無與倫比\n\n短文：「在這【　　】的午後，抬頭一片……操場上聚滿了人等看這即將……的歷史畫面。」",
        "options": [
            {
                "label": "①",
                "text": "盡其所能",
                "isCorrect": false,
                "explanation": "竭盡全力做能做的事。"
            },
            {
                "label": "②",
                "text": "碧空如洗",
                "isCorrect": false,
                "explanation": "藍天明淨如洗過一樣，形容天氣極好、天空晴朗。"
            },
            {
                "label": "③",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "普遍常見，不值得大驚小怪。"
            },
            {
                "label": "④",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼聲響徹雲霄，如同雷鳴般震撼。"
            },
            {
                "label": "⑤",
                "text": "反敗為勝",
                "isCorrect": false,
                "explanation": "扭轉劣勢轉化為勝利。"
            },
            {
                "label": "⑥",
                "text": "妙手回春",
                "isCorrect": false,
                "explanation": "形容醫生醫術高超，能起死回生。"
            },
            {
                "label": "⑦",
                "text": "大勢已去",
                "isCorrect": false,
                "explanation": "大局已經無法挽回，敗局已定。"
            },
            {
                "label": "⑧",
                "text": "秋高氣爽",
                "isCorrect": true,
                "explanation": "正確！形容秋天天高氣爽、氣候涼爽宜人。"
            },
            {
                "label": "⑨",
                "text": "如願以償",
                "isCorrect": false,
                "explanation": "願望得以實現。"
            },
            {
                "label": "⑩",
                "text": "天色入暮",
                "isCorrect": false,
                "explanation": "天色漸晚，太陽下山傍晚來臨。"
            },
            {
                "label": "⑪",
                "text": "輕描淡寫",
                "isCorrect": false,
                "explanation": "說話或作文時輕輕帶過，裝作不在意。"
            },
            {
                "label": "⑫",
                "text": "反其道而行",
                "isCorrect": false,
                "explanation": "採取與常理或一般做法完全相反的方法。"
            },
            {
                "label": "⑬",
                "text": "百年樹人",
                "isCorrect": false,
                "explanation": "培育人才是不易且長遠的教育大計。"
            },
            {
                "label": "⑭",
                "text": "動彈不得",
                "isCorrect": false,
                "explanation": "身體受阻無法活動。"
            },
            {
                "label": "⑮",
                "text": "無與倫比",
                "isCorrect": false,
                "explanation": "沒有能相比得上的，形容極為出色突出。"
            }
        ],
        "trap": "「午後」氣候涼爽宜人，配合秋天景色，最貼切的詞語是「秋高氣爽」。"
    },
    {
        "id": "q_exam_neihu_cloze_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語篇章選填",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・篇章選填第(2)格】\n📖 語詞選項庫（15選1）：\n[①] 盡其所能　[②] 碧空如洗　[③] 不足為奇　[④] 歡聲雷動　[⑤] 反敗為勝\n[⑥] 妙手回春　[⑦] 大勢已去　[⑧] 秋高氣爽　[⑨] 如願以償　[⑩] 天色入暮\n[⑪] 輕描淡寫　[⑫] 反其道而行　[⑬] 百年樹人　[⑭] 動彈不得　[⑮] 無與倫比\n\n短文：「在這秋高氣爽的午後，抬頭一片【　　】，操場上聚滿了人等看這即將……的歷史畫面。」",
        "options": [
            {
                "label": "①",
                "text": "盡其所能",
                "isCorrect": false,
                "explanation": "竭盡全力做能做的事。"
            },
            {
                "label": "②",
                "text": "碧空如洗",
                "isCorrect": true,
                "explanation": "正確！藍天明淨如洗過一樣，形容天氣極好、天空晴朗。"
            },
            {
                "label": "③",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "普遍常見，不值得大驚小怪。"
            },
            {
                "label": "④",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼聲響徹雲霄，如同雷鳴般震撼。"
            },
            {
                "label": "⑤",
                "text": "反敗為勝",
                "isCorrect": false,
                "explanation": "扭轉劣勢轉化為勝利。"
            },
            {
                "label": "⑥",
                "text": "妙手回春",
                "isCorrect": false,
                "explanation": "形容醫生醫術高超，能起死回生。"
            },
            {
                "label": "⑦",
                "text": "大勢已去",
                "isCorrect": false,
                "explanation": "大局已經無法挽回，敗局已定。"
            },
            {
                "label": "⑧",
                "text": "秋高氣爽",
                "isCorrect": false,
                "explanation": "形容秋天天高氣爽、氣候涼爽宜人。"
            },
            {
                "label": "⑨",
                "text": "如願以償",
                "isCorrect": false,
                "explanation": "願望得以實現。"
            },
            {
                "label": "⑩",
                "text": "天色入暮",
                "isCorrect": false,
                "explanation": "天色漸晚，太陽下山傍晚來臨。"
            },
            {
                "label": "⑪",
                "text": "輕描淡寫",
                "isCorrect": false,
                "explanation": "說話或作文時輕輕帶過，裝作不在意。"
            },
            {
                "label": "⑫",
                "text": "反其道而行",
                "isCorrect": false,
                "explanation": "採取與常理或一般做法完全相反的方法。"
            },
            {
                "label": "⑬",
                "text": "百年樹人",
                "isCorrect": false,
                "explanation": "培育人才是不易且長遠的教育大計。"
            },
            {
                "label": "⑭",
                "text": "動彈不得",
                "isCorrect": false,
                "explanation": "身體受阻無法活動。"
            },
            {
                "label": "⑮",
                "text": "無與倫比",
                "isCorrect": false,
                "explanation": "沒有能相比得上的，形容極為出色突出。"
            }
        ],
        "trap": "描寫天空蔚藍晴朗、潔淨無雲，專用語詞是「碧空如洗」。"
    },
    {
        "id": "q_exam_neihu_cloze_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語篇章選填",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・篇章選填第(3)格】\n📖 語詞選項庫（15選1）：\n[①] 盡其所能　[②] 碧空如洗　[③] 不足為奇　[④] 歡聲雷動　[⑤] 反敗為勝\n[⑥] 妙手回春　[⑦] 大勢已去　[⑧] 秋高氣爽　[⑨] 如願以償　[⑩] 天色入暮\n[⑪] 輕描淡寫　[⑫] 反其道而行　[⑬] 百年樹人　[⑭] 動彈不得　[⑮] 無與倫比\n\n短文：「……操場上聚滿了人等看這即將【　　】的歷史畫面。就在大家期待強強對決的一刻……」",
        "options": [
            {
                "label": "①",
                "text": "盡其所能",
                "isCorrect": false,
                "explanation": "竭盡全力做能做的事。"
            },
            {
                "label": "②",
                "text": "碧空如洗",
                "isCorrect": false,
                "explanation": "藍天明淨如洗過一樣，形容天氣極好、天空晴朗。"
            },
            {
                "label": "③",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "普遍常見，不值得大驚小怪。"
            },
            {
                "label": "④",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼聲響徹雲霄，如同雷鳴般震撼。"
            },
            {
                "label": "⑤",
                "text": "反敗為勝",
                "isCorrect": false,
                "explanation": "扭轉劣勢轉化為勝利。"
            },
            {
                "label": "⑥",
                "text": "妙手回春",
                "isCorrect": false,
                "explanation": "形容醫生醫術高超，能起死回生。"
            },
            {
                "label": "⑦",
                "text": "大勢已去",
                "isCorrect": false,
                "explanation": "大局已經無法挽回，敗局已定。"
            },
            {
                "label": "⑧",
                "text": "秋高氣爽",
                "isCorrect": false,
                "explanation": "形容秋天天高氣爽、氣候涼爽宜人。"
            },
            {
                "label": "⑨",
                "text": "如願以償",
                "isCorrect": true,
                "explanation": "正確！願望得以實現。"
            },
            {
                "label": "⑩",
                "text": "天色入暮",
                "isCorrect": false,
                "explanation": "天色漸晚，太陽下山傍晚來臨。"
            },
            {
                "label": "⑪",
                "text": "輕描淡寫",
                "isCorrect": false,
                "explanation": "說話或作文時輕輕帶過，裝作不在意。"
            },
            {
                "label": "⑫",
                "text": "反其道而行",
                "isCorrect": false,
                "explanation": "採取與常理或一般做法完全相反的方法。"
            },
            {
                "label": "⑬",
                "text": "百年樹人",
                "isCorrect": false,
                "explanation": "培育人才是不易且長遠的教育大計。"
            },
            {
                "label": "⑭",
                "text": "動彈不得",
                "isCorrect": false,
                "explanation": "身體受阻無法活動。"
            },
            {
                "label": "⑮",
                "text": "無與倫比",
                "isCorrect": false,
                "explanation": "沒有能相比得上的，形容極為出色突出。"
            }
        ],
        "trap": "大家期盼已久的願望終於達成，用「如願以償」。"
    },
    {
        "id": "q_exam_neihu_cloze_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語篇章選填",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・篇章選填第(4)格】\n📖 語詞選項庫（15選1）：\n[①] 盡其所能　[②] 碧空如洗　[③] 不足為奇　[④] 歡聲雷動　[⑤] 反敗為勝\n[⑥] 妙手回春　[⑦] 大勢已去　[⑧] 秋高氣爽　[⑨] 如願以償　[⑩] 天色入暮\n[⑪] 輕描淡寫　[⑫] 反其道而行　[⑬] 百年樹人　[⑭] 動彈不得　[⑮] 無與倫比\n\n短文：「……就在大家期待強強對決的一刻，沒想到教練卻【　　】，派上最年輕的選手先發。起初觀眾並不看好……」",
        "options": [
            {
                "label": "①",
                "text": "盡其所能",
                "isCorrect": false,
                "explanation": "竭盡全力做能做的事。"
            },
            {
                "label": "②",
                "text": "碧空如洗",
                "isCorrect": false,
                "explanation": "藍天明淨如洗過一樣，形容天氣極好、天空晴朗。"
            },
            {
                "label": "③",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "普遍常見，不值得大驚小怪。"
            },
            {
                "label": "④",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼聲響徹雲霄，如同雷鳴般震撼。"
            },
            {
                "label": "⑤",
                "text": "反敗為勝",
                "isCorrect": false,
                "explanation": "扭轉劣勢轉化為勝利。"
            },
            {
                "label": "⑥",
                "text": "妙手回春",
                "isCorrect": false,
                "explanation": "形容醫生醫術高超，能起死回生。"
            },
            {
                "label": "⑦",
                "text": "大勢已去",
                "isCorrect": false,
                "explanation": "大局已經無法挽回，敗局已定。"
            },
            {
                "label": "⑧",
                "text": "秋高氣爽",
                "isCorrect": false,
                "explanation": "形容秋天天高氣爽、氣候涼爽宜人。"
            },
            {
                "label": "⑨",
                "text": "如願以償",
                "isCorrect": false,
                "explanation": "願望得以實現。"
            },
            {
                "label": "⑩",
                "text": "天色入暮",
                "isCorrect": false,
                "explanation": "天色漸晚，太陽下山傍晚來臨。"
            },
            {
                "label": "⑪",
                "text": "輕描淡寫",
                "isCorrect": false,
                "explanation": "說話或作文時輕輕帶過，裝作不在意。"
            },
            {
                "label": "⑫",
                "text": "反其道而行",
                "isCorrect": true,
                "explanation": "正確！採取與常理或一般做法完全相反的方法。"
            },
            {
                "label": "⑬",
                "text": "百年樹人",
                "isCorrect": false,
                "explanation": "培育人才是不易且長遠的教育大計。"
            },
            {
                "label": "⑭",
                "text": "動彈不得",
                "isCorrect": false,
                "explanation": "身體受阻無法活動。"
            },
            {
                "label": "⑮",
                "text": "無與倫比",
                "isCorrect": false,
                "explanation": "沒有能相比得上的，形容極為出色突出。"
            }
        ],
        "trap": "不照常理出牌、採取與常人相反的奇策，用「反其道而行」。"
    },
    {
        "id": "q_exam_neihu_cloze_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語篇章選填",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・篇章選填第(5)格】\n📖 語詞選項庫（15選1）：\n[①] 盡其所能　[②] 碧空如洗　[③] 不足為奇　[④] 歡聲雷動　[⑤] 反敗為勝\n[⑥] 妙手回春　[⑦] 大勢已去　[⑧] 秋高氣爽　[⑨] 如願以償　[⑩] 天色入暮\n[⑪] 輕描淡寫　[⑫] 反其道而行　[⑬] 百年樹人　[⑭] 動彈不得　[⑮] 無與倫比\n\n短文：「……起初觀眾並不看好，但當小選手以【　　】的速度突破對手時，全場立刻……」",
        "options": [
            {
                "label": "①",
                "text": "盡其所能",
                "isCorrect": false,
                "explanation": "竭盡全力做能做的事。"
            },
            {
                "label": "②",
                "text": "碧空如洗",
                "isCorrect": false,
                "explanation": "藍天明淨如洗過一樣，形容天氣極好、天空晴朗。"
            },
            {
                "label": "③",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "普遍常見，不值得大驚小怪。"
            },
            {
                "label": "④",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼聲響徹雲霄，如同雷鳴般震撼。"
            },
            {
                "label": "⑤",
                "text": "反敗為勝",
                "isCorrect": false,
                "explanation": "扭轉劣勢轉化為勝利。"
            },
            {
                "label": "⑥",
                "text": "妙手回春",
                "isCorrect": false,
                "explanation": "形容醫生醫術高超，能起死回生。"
            },
            {
                "label": "⑦",
                "text": "大勢已去",
                "isCorrect": false,
                "explanation": "大局已經無法挽回，敗局已定。"
            },
            {
                "label": "⑧",
                "text": "秋高氣爽",
                "isCorrect": false,
                "explanation": "形容秋天天高氣爽、氣候涼爽宜人。"
            },
            {
                "label": "⑨",
                "text": "如願以償",
                "isCorrect": false,
                "explanation": "願望得以實現。"
            },
            {
                "label": "⑩",
                "text": "天色入暮",
                "isCorrect": false,
                "explanation": "天色漸晚，太陽下山傍晚來臨。"
            },
            {
                "label": "⑪",
                "text": "輕描淡寫",
                "isCorrect": false,
                "explanation": "說話或作文時輕輕帶過，裝作不在意。"
            },
            {
                "label": "⑫",
                "text": "反其道而行",
                "isCorrect": false,
                "explanation": "採取與常理或一般做法完全相反的方法。"
            },
            {
                "label": "⑬",
                "text": "百年樹人",
                "isCorrect": false,
                "explanation": "培育人才是不易且長遠的教育大計。"
            },
            {
                "label": "⑭",
                "text": "動彈不得",
                "isCorrect": false,
                "explanation": "身體受阻無法活動。"
            },
            {
                "label": "⑮",
                "text": "無與倫比",
                "isCorrect": true,
                "explanation": "正確！沒有能相比得上的，形容極為出色突出。"
            }
        ],
        "trap": "形容速度極快、沒有任何人能比得上，用「無與倫比」。"
    },
    {
        "id": "q_exam_neihu_cloze_6",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語篇章選填",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・篇章選填第(6)格】\n📖 語詞選項庫（15選1）：\n[①] 盡其所能　[②] 碧空如洗　[③] 不足為奇　[④] 歡聲雷動　[⑤] 反敗為勝\n[⑥] 妙手回春　[⑦] 大勢已去　[⑧] 秋高氣爽　[⑨] 如願以償　[⑩] 天色入暮\n[⑪] 輕描淡寫　[⑫] 反其道而行　[⑬] 百年樹人　[⑭] 動彈不得　[⑮] 無與倫比\n\n短文：「……但當小選手以無與倫比的速度突破對手時，全場立刻【　　】。」",
        "options": [
            {
                "label": "①",
                "text": "盡其所能",
                "isCorrect": false,
                "explanation": "竭盡全力做能做的事。"
            },
            {
                "label": "②",
                "text": "碧空如洗",
                "isCorrect": false,
                "explanation": "藍天明淨如洗過一樣，形容天氣極好、天空晴朗。"
            },
            {
                "label": "③",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "普遍常見，不值得大驚小怪。"
            },
            {
                "label": "④",
                "text": "歡聲雷動",
                "isCorrect": true,
                "explanation": "正確！歡呼聲響徹雲霄，如同雷鳴般震撼。"
            },
            {
                "label": "⑤",
                "text": "反敗為勝",
                "isCorrect": false,
                "explanation": "扭轉劣勢轉化為勝利。"
            },
            {
                "label": "⑥",
                "text": "妙手回春",
                "isCorrect": false,
                "explanation": "形容醫生醫術高超，能起死回生。"
            },
            {
                "label": "⑦",
                "text": "大勢已去",
                "isCorrect": false,
                "explanation": "大局已經無法挽回，敗局已定。"
            },
            {
                "label": "⑧",
                "text": "秋高氣爽",
                "isCorrect": false,
                "explanation": "形容秋天天高氣爽、氣候涼爽宜人。"
            },
            {
                "label": "⑨",
                "text": "如願以償",
                "isCorrect": false,
                "explanation": "願望得以實現。"
            },
            {
                "label": "⑩",
                "text": "天色入暮",
                "isCorrect": false,
                "explanation": "天色漸晚，太陽下山傍晚來臨。"
            },
            {
                "label": "⑪",
                "text": "輕描淡寫",
                "isCorrect": false,
                "explanation": "說話或作文時輕輕帶過，裝作不在意。"
            },
            {
                "label": "⑫",
                "text": "反其道而行",
                "isCorrect": false,
                "explanation": "採取與常理或一般做法完全相反的方法。"
            },
            {
                "label": "⑬",
                "text": "百年樹人",
                "isCorrect": false,
                "explanation": "培育人才是不易且長遠的教育大計。"
            },
            {
                "label": "⑭",
                "text": "動彈不得",
                "isCorrect": false,
                "explanation": "身體受阻無法活動。"
            },
            {
                "label": "⑮",
                "text": "無與倫比",
                "isCorrect": false,
                "explanation": "沒有能相比得上的，形容極為出色突出。"
            }
        ],
        "trap": "全場觀眾被精采表現震撼而爆發震耳欲聾的歡呼，用「歡聲雷動」。"
    },
    {
        "id": "q_exam_neihu_cloze_7",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語篇章選填",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・篇章選填第(7)格】\n📖 語詞選項庫（15選1）：\n[①] 盡其所能　[②] 碧空如洗　[③] 不足為奇　[④] 歡聲雷動　[⑤] 反敗為勝\n[⑥] 妙手回春　[⑦] 大勢已去　[⑧] 秋高氣爽　[⑨] 如願以償　[⑩] 天色入暮\n[⑪] 輕描淡寫　[⑫] 反其道而行　[⑬] 百年樹人　[⑭] 動彈不得　[⑮] 無與倫比\n\n短文：「此時，對手見【　　】，嘴上卻仍然……的說著：『哎喲小傢伙還不錯喔！』，意圖掩飾緊張。」",
        "options": [
            {
                "label": "①",
                "text": "盡其所能",
                "isCorrect": false,
                "explanation": "竭盡全力做能做的事。"
            },
            {
                "label": "②",
                "text": "碧空如洗",
                "isCorrect": false,
                "explanation": "藍天明淨如洗過一樣，形容天氣極好、天空晴朗。"
            },
            {
                "label": "③",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "普遍常見，不值得大驚小怪。"
            },
            {
                "label": "④",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼聲響徹雲霄，如同雷鳴般震撼。"
            },
            {
                "label": "⑤",
                "text": "反敗為勝",
                "isCorrect": false,
                "explanation": "扭轉劣勢轉化為勝利。"
            },
            {
                "label": "⑥",
                "text": "妙手回春",
                "isCorrect": false,
                "explanation": "形容醫生醫術高超，能起死回生。"
            },
            {
                "label": "⑦",
                "text": "大勢已去",
                "isCorrect": true,
                "explanation": "正確！大局已經無法挽回，敗局已定。"
            },
            {
                "label": "⑧",
                "text": "秋高氣爽",
                "isCorrect": false,
                "explanation": "形容秋天天高氣爽、氣候涼爽宜人。"
            },
            {
                "label": "⑨",
                "text": "如願以償",
                "isCorrect": false,
                "explanation": "願望得以實現。"
            },
            {
                "label": "⑩",
                "text": "天色入暮",
                "isCorrect": false,
                "explanation": "天色漸晚，太陽下山傍晚來臨。"
            },
            {
                "label": "⑪",
                "text": "輕描淡寫",
                "isCorrect": false,
                "explanation": "說話或作文時輕輕帶過，裝作不在意。"
            },
            {
                "label": "⑫",
                "text": "反其道而行",
                "isCorrect": false,
                "explanation": "採取與常理或一般做法完全相反的方法。"
            },
            {
                "label": "⑬",
                "text": "百年樹人",
                "isCorrect": false,
                "explanation": "培育人才是不易且長遠的教育大計。"
            },
            {
                "label": "⑭",
                "text": "動彈不得",
                "isCorrect": false,
                "explanation": "身體受阻無法活動。"
            },
            {
                "label": "⑮",
                "text": "無與倫比",
                "isCorrect": false,
                "explanation": "沒有能相比得上的，形容極為出色突出。"
            }
        ],
        "trap": "對手眼看大局已定、無法挽回敗局，用「大勢已去」。"
    },
    {
        "id": "q_exam_neihu_cloze_8",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語篇章選填",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・篇章選填第(8)格】\n📖 語詞選項庫（15選1）：\n[①] 盡其所能　[②] 碧空如洗　[③] 不足為奇　[④] 歡聲雷動　[⑤] 反敗為勝\n[⑥] 妙手回春　[⑦] 大勢已去　[⑧] 秋高氣爽　[⑨] 如願以償　[⑩] 天色入暮\n[⑪] 輕描淡寫　[⑫] 反其道而行　[⑬] 百年樹人　[⑭] 動彈不得　[⑮] 無與倫比\n\n短文：「……對手見大勢已去，嘴上卻仍然【　　】的說著：『哎喲小傢伙還不錯喔！』，意圖掩飾緊張。」",
        "options": [
            {
                "label": "①",
                "text": "盡其所能",
                "isCorrect": false,
                "explanation": "竭盡全力做能做的事。"
            },
            {
                "label": "②",
                "text": "碧空如洗",
                "isCorrect": false,
                "explanation": "藍天明淨如洗過一樣，形容天氣極好、天空晴朗。"
            },
            {
                "label": "③",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "普遍常見，不值得大驚小怪。"
            },
            {
                "label": "④",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼聲響徹雲霄，如同雷鳴般震撼。"
            },
            {
                "label": "⑤",
                "text": "反敗為勝",
                "isCorrect": false,
                "explanation": "扭轉劣勢轉化為勝利。"
            },
            {
                "label": "⑥",
                "text": "妙手回春",
                "isCorrect": false,
                "explanation": "形容醫生醫術高超，能起死回生。"
            },
            {
                "label": "⑦",
                "text": "大勢已去",
                "isCorrect": false,
                "explanation": "大局已經無法挽回，敗局已定。"
            },
            {
                "label": "⑧",
                "text": "秋高氣爽",
                "isCorrect": false,
                "explanation": "形容秋天天高氣爽、氣候涼爽宜人。"
            },
            {
                "label": "⑨",
                "text": "如願以償",
                "isCorrect": false,
                "explanation": "願望得以實現。"
            },
            {
                "label": "⑩",
                "text": "天色入暮",
                "isCorrect": false,
                "explanation": "天色漸晚，太陽下山傍晚來臨。"
            },
            {
                "label": "⑪",
                "text": "輕描淡寫",
                "isCorrect": true,
                "explanation": "正確！說話或作文時輕輕帶過，裝作不在意。"
            },
            {
                "label": "⑫",
                "text": "反其道而行",
                "isCorrect": false,
                "explanation": "採取與常理或一般做法完全相反的方法。"
            },
            {
                "label": "⑬",
                "text": "百年樹人",
                "isCorrect": false,
                "explanation": "培育人才是不易且長遠的教育大計。"
            },
            {
                "label": "⑭",
                "text": "動彈不得",
                "isCorrect": false,
                "explanation": "身體受阻無法活動。"
            },
            {
                "label": "⑮",
                "text": "無與倫比",
                "isCorrect": false,
                "explanation": "沒有能相比得上的，形容極為出色突出。"
            }
        ],
        "trap": "把關鍵慘敗裝作不在意、輕輕帶過以掩飾慌張，用「輕描淡寫」。"
    },
    {
        "id": "q_exam_neihu_cloze_9",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語篇章選填",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・篇章選填第(9)格】\n📖 語詞選項庫（15選1）：\n[①] 盡其所能　[②] 碧空如洗　[③] 不足為奇　[④] 歡聲雷動　[⑤] 反敗為勝\n[⑥] 妙手回春　[⑦] 大勢已去　[⑧] 秋高氣爽　[⑨] 如願以償　[⑩] 天色入暮\n[⑪] 輕描淡寫　[⑫] 反其道而行　[⑬] 百年樹人　[⑭] 動彈不得　[⑮] 無與倫比\n\n短文：「比賽結束後，校長語重心長的說：『一場比賽的勝負或許只是片刻，但教育卻是【　　】的工作。今天最值得被讚賞的，不只是技巧，更是孩子們的堅持與勇氣。』」",
        "options": [
            {
                "label": "①",
                "text": "盡其所能",
                "isCorrect": false,
                "explanation": "竭盡全力做能做的事。"
            },
            {
                "label": "②",
                "text": "碧空如洗",
                "isCorrect": false,
                "explanation": "藍天明淨如洗過一樣，形容天氣極好、天空晴朗。"
            },
            {
                "label": "③",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "普遍常見，不值得大驚小怪。"
            },
            {
                "label": "④",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼聲響徹雲霄，如同雷鳴般震撼。"
            },
            {
                "label": "⑤",
                "text": "反敗為勝",
                "isCorrect": false,
                "explanation": "扭轉劣勢轉化為勝利。"
            },
            {
                "label": "⑥",
                "text": "妙手回春",
                "isCorrect": false,
                "explanation": "形容醫生醫術高超，能起死回生。"
            },
            {
                "label": "⑦",
                "text": "大勢已去",
                "isCorrect": false,
                "explanation": "大局已經無法挽回，敗局已定。"
            },
            {
                "label": "⑧",
                "text": "秋高氣爽",
                "isCorrect": false,
                "explanation": "形容秋天天高氣爽、氣候涼爽宜人。"
            },
            {
                "label": "⑨",
                "text": "如願以償",
                "isCorrect": false,
                "explanation": "願望得以實現。"
            },
            {
                "label": "⑩",
                "text": "天色入暮",
                "isCorrect": false,
                "explanation": "天色漸晚，太陽下山傍晚來臨。"
            },
            {
                "label": "⑪",
                "text": "輕描淡寫",
                "isCorrect": false,
                "explanation": "說話或作文時輕輕帶過，裝作不在意。"
            },
            {
                "label": "⑫",
                "text": "反其道而行",
                "isCorrect": false,
                "explanation": "採取與常理或一般做法完全相反的方法。"
            },
            {
                "label": "⑬",
                "text": "百年樹人",
                "isCorrect": true,
                "explanation": "正確！培育人才是不易且長遠的教育大計。"
            },
            {
                "label": "⑭",
                "text": "動彈不得",
                "isCorrect": false,
                "explanation": "身體受阻無法活動。"
            },
            {
                "label": "⑮",
                "text": "無與倫比",
                "isCorrect": false,
                "explanation": "沒有能相比得上的，形容極為出色突出。"
            }
        ],
        "trap": "「十年樹木，百年樹人」形容培育人才需要長遠深耕，是教育工作的經典名句。"
    },
    {
        "id": "q_exam_neihu_cloze_10",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語篇章選填",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・篇章選填第(10)格】\n📖 語詞選項庫（15選1）：\n[①] 盡其所能　[②] 碧空如洗　[③] 不足為奇　[④] 歡聲雷動　[⑤] 反敗為勝\n[⑥] 妙手回春　[⑦] 大勢已去　[⑧] 秋高氣爽　[⑨] 如願以償　[⑩] 天色入暮\n[⑪] 輕描淡寫　[⑫] 反其道而行　[⑬] 百年樹人　[⑭] 動彈不得　[⑮] 無與倫比\n\n短文：「當【　　】，晚風輕拂，球場的熱情逐漸散去，留下的是，一段值得回味的記憶。」",
        "options": [
            {
                "label": "①",
                "text": "盡其所能",
                "isCorrect": false,
                "explanation": "竭盡全力做能做的事。"
            },
            {
                "label": "②",
                "text": "碧空如洗",
                "isCorrect": false,
                "explanation": "藍天明淨如洗過一樣，形容天氣極好、天空晴朗。"
            },
            {
                "label": "③",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "普遍常見，不值得大驚小怪。"
            },
            {
                "label": "④",
                "text": "歡聲雷動",
                "isCorrect": false,
                "explanation": "歡呼聲響徹雲霄，如同雷鳴般震撼。"
            },
            {
                "label": "⑤",
                "text": "反敗為勝",
                "isCorrect": false,
                "explanation": "扭轉劣勢轉化為勝利。"
            },
            {
                "label": "⑥",
                "text": "妙手回春",
                "isCorrect": false,
                "explanation": "形容醫生醫術高超，能起死回生。"
            },
            {
                "label": "⑦",
                "text": "大勢已去",
                "isCorrect": false,
                "explanation": "大局已經無法挽回，敗局已定。"
            },
            {
                "label": "⑧",
                "text": "秋高氣爽",
                "isCorrect": false,
                "explanation": "形容秋天天高氣爽、氣候涼爽宜人。"
            },
            {
                "label": "⑨",
                "text": "如願以償",
                "isCorrect": false,
                "explanation": "願望得以實現。"
            },
            {
                "label": "⑩",
                "text": "天色入暮",
                "isCorrect": true,
                "explanation": "正確！天色漸晚，太陽下山傍晚來臨。"
            },
            {
                "label": "⑪",
                "text": "輕描淡寫",
                "isCorrect": false,
                "explanation": "說話或作文時輕輕帶過，裝作不在意。"
            },
            {
                "label": "⑫",
                "text": "反其道而行",
                "isCorrect": false,
                "explanation": "採取與常理或一般做法完全相反的方法。"
            },
            {
                "label": "⑬",
                "text": "百年樹人",
                "isCorrect": false,
                "explanation": "培育人才是不易且長遠的教育大計。"
            },
            {
                "label": "⑭",
                "text": "動彈不得",
                "isCorrect": false,
                "explanation": "身體受阻無法活動。"
            },
            {
                "label": "⑮",
                "text": "無與倫比",
                "isCorrect": false,
                "explanation": "沒有能相比得上的，形容極為出色突出。"
            }
        ],
        "trap": "配合後文「晚風輕拂、逐漸散去」，指傍晚天色漸暗，用「天色入暮」。"
    },
    {
        "id": "q_exam_neihu_read_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 1,
        "question": "【內湖國小・閱讀測驗《春望》第1題】\n📖《春望》：\n「國破山河在，城春草木深。\n感時花濺淚，恨別鳥驚心。\n烽火連三月，家書抵萬金。\n白頭搔更短，渾欲不勝簪。」\n\n請問《春望》的詩歌形式（體裁）是什麼？",
        "options": [
            {
                "text": "五言絕句",
                "isCorrect": false,
                "explanation": "全詩有8句，非4句絕句。"
            },
            {
                "text": "八言律詩",
                "isCorrect": false,
                "explanation": "近體詩無八言律詩。"
            },
            {
                "text": "七言律詩",
                "isCorrect": false,
                "explanation": "每句只有5個字，非七言。"
            },
            {
                "text": "五言律詩",
                "isCorrect": true,
                "explanation": "正確！全詩共8句，每句5個字，共40字，屬於標準的「五言律詩」。"
            }
        ],
        "trap": "先數「總句數」（4句＝絕句，8句＝律詩），再數「每句字數」（5字＝五言，7字＝七言）。"
    },
    {
        "id": "q_exam_neihu_read_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・閱讀測驗《春望》第2題】下列哪個字在《春望》這首古詩格式裡是「不押韻」的？",
        "options": [
            {
                "text": "深（第2句末字）",
                "isCorrect": false,
                "explanation": "偶數句（第2句）押韻。"
            },
            {
                "text": "心（第4句末字）",
                "isCorrect": false,
                "explanation": "偶數句（第4句）押韻。"
            },
            {
                "text": "短（第7句末字）",
                "isCorrect": true,
                "explanation": "正確！「短」位於第7句（奇數句）句末，律詩奇數句（除首句外）絕對不押韻！"
            },
            {
                "text": "簪（第8句末字）",
                "isCorrect": false,
                "explanation": "偶數句（第8句）押韻（深、心、金、簪在平水韻中同押侵韻）。"
            }
        ],
        "trap": "秒殺技巧：不用懂平水韻，只要抓出哪一個字在「第3、5、7句（奇數句）句尾」，它就一定不押韻！"
    },
    {
        "id": "q_exam_neihu_read_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 1,
        "question": "【內湖國小・閱讀測驗《春望》第3題】從憂國憂民、反映安史之亂戰火現實的寫作風格，可看出《春望》的作者是下列哪位詩人？",
        "options": [
            {
                "text": "杜甫",
                "isCorrect": true,
                "explanation": "正確！《春望》是「詩聖」杜甫在安史之亂期間困居長安時所作的千古名篇。"
            },
            {
                "text": "李白",
                "isCorrect": false,
                "explanation": "李白詩風浪漫豪放。"
            },
            {
                "text": "王維",
                "isCorrect": false,
                "explanation": "王維以山水田園詩著稱。"
            },
            {
                "text": "戴望舒",
                "isCorrect": false,
                "explanation": "戴望舒是現代詩人。"
            }
        ],
        "trap": "看到「國破、感時、烽火、憂國憂民」就是詩聖杜甫的招牌風格！"
    },
    {
        "id": "q_exam_neihu_read_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・閱讀測驗《春望》第4題】在《春望》「國破山河在，城春草木深」的情境中，「草木深」傳達出詩人感受到了什麼？",
        "options": [
            {
                "text": "長安城土壤肥沃，草木繁茂值得讚賞",
                "isCorrect": false,
                "explanation": "此時長安淪陷，並非讚賞土壤。"
            },
            {
                "text": "春天到來，到處都欣欣向榮、熱鬧繁華",
                "isCorrect": false,
                "explanation": "這是以春景反襯戰亂後的淒涼。"
            },
            {
                "text": "詩人想隱居在樹林深處不問世事",
                "isCorrect": false,
                "explanation": "杜甫心繫國家與家人，並非想隱居。"
            },
            {
                "text": "戰亂之後長安城人煙稀少、雜草叢生，一片荒涼破敗",
                "isCorrect": true,
                "explanation": "正確！繁華的國都長安因為戰亂而百姓逃亡、無人整理，導致春天裡雜草樹木瘋長，凸顯滿目瘡痍的荒涼。"
            }
        ],
        "trap": "「城春草木深」表面寫春草茂密，實則反襯戰亂後城池荒蕪、人去樓空的淒涼！"
    },
    {
        "id": "q_exam_neihu_read_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・閱讀測驗《春望》第5題】「恨別鳥驚心」跟下列哪句是「對仗」的關係？",
        "options": [
            {
                "text": "感時花濺淚",
                "isCorrect": true,
                "explanation": "正確！「感時花濺淚，恨別鳥驚心」是頷聯（第3、4句），「感時」對「恨別」、「花」對「鳥」、「濺淚」對「驚心」，對仗極為工整。"
            },
            {
                "text": "烽火連三月",
                "isCorrect": false,
                "explanation": "「烽火連三月」是跟第6句「家書抵萬金」對仗。"
            },
            {
                "text": "城春草木深",
                "isCorrect": false,
                "explanation": "此為第2句。"
            },
            {
                "text": "家書抵萬金",
                "isCorrect": false,
                "explanation": "此為第6句。"
            }
        ],
        "trap": "第4句「恨別鳥驚心」必然與同一聯的第3句「感時花濺淚」構成對仗！"
    },
    {
        "id": "q_exam_neihu_read_6",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩語譯）",
        "batch": "段考真題",
        "school": "臺北市內湖國小",
        "examPageImage": "images/exams/EXAM_MID1/neihu_p2.png",
        "difficulty": 2,
        "question": "【內湖國小・閱讀測驗《春望》第6題】請選出「烽火連三月，家書抵萬金」最正確的白話文語譯：",
        "options": [
            {
                "text": "戰亂持續了好幾個月都沒有停息，家裡寄來的平安信簡直比萬兩黃金還要珍貴。",
                "isCorrect": true,
                "explanation": "正確！「烽火」借代戰亂，「連三月」指持續好幾個月，「抵萬金」誇飾家書在戰亂中的無比珍貴。"
            },
            {
                "text": "山上的狼煙在三月天特別旺盛，想要寄一封家書必須花費一萬兩黃金的郵資。",
                "isCorrect": false,
                "explanation": "「抵萬金」是比喻珍貴，不是郵資一萬兩；「連三月」是持續數月。"
            },
            {
                "text": "除夕的煙火連放了三個月，家裡的藏書價值超過萬兩黃金。",
                "isCorrect": false,
                "explanation": "「烽火」是戰火，「家書」是家信而非藏書。"
            },
            {
                "text": "戰火在三月結束了，家人寄來了一萬兩黃金幫助我度過難關。",
                "isCorrect": false,
                "explanation": "語譯完全錯誤。"
            }
        ],
        "trap": "注意兩個關鍵字：「烽火」＝戰亂（借代修辭）；「抵萬金」＝比得上萬兩黃金般珍貴（誇飾修辭）。"
    },
    {
        "id": "q_exam_heshun_hw_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p1.png",
        "difficulty": 3,
        "question": "【和順國小・第一大題第1題】房舍外竹[[國字:ㄌㄧˊ:籬]][[國字:ㄐㄧㄢˇ:簡]][[注音:陋:ㄌㄡˋ]]，桌上卻擺了一壺酒，他和朋友並[[國字:ㄐㄧㄢ:肩]]坐著，[[國字:ㄐㄧˊ:寂]]靜裡泛著溫柔的香氣。",
        "correctAnswer": "籬、簡、ㄌㄡˋ、肩、寂",
        "explanation": "【解說】竹「籬」為竹部＋離；「簡」陋為竹部；簡「陋」讀四聲「ㄌㄡˋ」；並「肩」上方是戶部、下方是肉（月）；「寂」靜為宀部＋叔。",
        "trap": "「籬」筆畫多，注意竹字頭下面左邊是「离」，右邊是「隹」（四橫）！"
    },
    {
        "id": "q_exam_heshun_hw_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p1.png",
        "difficulty": 3,
        "question": "【和順國小・第一大題第2題】她的運動[[注音:衫:ㄕㄢ]]貼著微汗的[[國字:ㄐㄧ:肌]]膚，手指緊[[國字:ㄨㄛˋ:握]]那枚比賽的[[國字:ㄖㄨㄥˊ:榮]]譽獎章，不敢輕易[[國字:ㄙㄨㄥ:鬆]]開。",
        "correctAnswer": "ㄕㄢ、肌、握、榮、鬆",
        "explanation": "【解說】運動「衫」讀一聲「ㄕㄢ」（翹舌音）；「肌」膚為肉（月）部＋几；緊「握」為手部＋屋；「榮」譽為木部；「鬆」開為髟部＋松。",
        "trap": "「鬆」上半部是「髟」（長＋彡），不要少寫右邊的三撇！"
    },
    {
        "id": "q_exam_heshun_hw_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考改錯字",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p1.png",
        "difficulty": 3,
        "question": "【和順國小・第二大題改錯字 1~2】請找出句中的錯別字並寫出正確國字：\n(1) 風吹起「辰」沙，「風」凰在陽光下羽毛閃閃發亮。➔ [[國字:ㄔㄣˊ:塵]]沙、[[國字:ㄈㄥˋ:鳳]]凰\n(2) 他站在小「挺」上，抬頭望向「守」宙，立志要「症」服未來。➔ 小[[國字:ㄊㄧㄥˇ:艇]]、[[國字:ㄩˇ:宇]]宙、[[國字:ㄓㄥ:征]]服",
        "correctAnswer": "塵、鳳、艇、宇、征",
        "explanation": "【解說】(1) 塵沙（鹿＋土）、鳳凰（几部，裡面是一橫＋鳥）；(2) 小艇（舟部，船隻）、宇宙（宀＋于）、征服（彳部）。",
        "trap": "「鳳」裡面是「一橫＋鳥」，千萬別漏掉鳥上面那一小橫！"
    },
    {
        "id": "q_exam_heshun_hw_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考改錯字",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p1.png",
        "difficulty": 3,
        "question": "【和順國小・第二大題改錯字 3~5】請找出句中的錯別字並寫出正確國字：\n(3) 對於助人，他總是抱著多多「愈」善的態度。➔ 多多[[國字:ㄧˋ:益]]善\n(4) 電影裡那些令人「獨」目驚心的鏡頭，讓「關」眾都嚇得幾乎無法呼吸。➔ [[國字:ㄔㄨˋ:觸]]目驚心、[[國字:ㄍㄨㄢ:觀]]眾\n(5) 如果能在文章中適當運用成語，會有錦上「填」花的效果。➔ 錦上[[國字:ㄊㄧㄢ:添]]花",
        "correctAnswer": "益、觸、觀、添",
        "explanation": "【解說】(3)「多多益善」（益是皿部，更加之意）；(4)「觸目驚心」（角部）、「觀眾」（見部）；(5)「錦上添花」（水部添，指增加美采，不是土部填補）。",
        "trap": "成語固定字形：「多多益善」不能寫成愈；「錦上添花」不能寫成填！"
    },
    {
        "id": "q_exam_heshun_rad_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "部首與造詞",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p1.png",
        "difficulty": 2,
        "question": "【和順國小・第三大題部首測驗】請問「舒」、「承」、「凌」三個字的正確部首依序是什麼？",
        "options": [
            {
                "text": "舒：舌部 ／ 承：手部 ／ 凌：冫（二）部",
                "isCorrect": true,
                "explanation": "正確！「舒」是舌部（6畫）、「承」是手部（4畫）、「凌」是冫部（二畫冰部，非三點水）。"
            },
            {
                "text": "舒：人部 ／ 承：水部 ／ 凌：水部",
                "isCorrect": false,
                "explanation": "全錯！「舒」非人部，「承」與「凌」皆非水部。"
            },
            {
                "text": "舒：予部 ／ 承：一部 ／ 凌：土部",
                "isCorrect": false,
                "explanation": "部首判斷錯誤。"
            },
            {
                "text": "舒：口部 ／ 承：手部 ／ 凌：夂部",
                "isCorrect": false,
                "explanation": "「舒」是舌部，「凌」是冫部。"
            }
        ],
        "trap": "段考超愛考這三個字的部首：舒＝舌部、承＝手部、凌＝冫部！"
    },
    {
        "id": "q_exam_heshun_mc_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "詞語應用",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p1.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第1題】「在工作上能遇到一名好□□，真是一件幸福又幸運的事情。」□中最適合填入哪一個語詞？",
        "options": [
            {
                "text": "搭檔",
                "isCorrect": true,
                "explanation": "正確！「搭檔」指互相配合、一起合作的人。"
            },
            {
                "text": "歸檔",
                "isCorrect": false,
                "explanation": "指將文件分類存放。"
            },
            {
                "text": "滿檔",
                "isCorrect": false,
                "explanation": "指行程排滿。"
            },
            {
                "text": "空檔",
                "isCorrect": false,
                "explanation": "指中間空閒的時間。"
            }
        ],
        "trap": "注意「搭檔」的「檔」是木部，不要寫成手部擋。"
    },
    {
        "id": "q_exam_heshun_mc_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "字音辨析",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p1.png",
        "difficulty": 2,
        "question": "【和順國小・選擇第2題】下列語詞「 」中的字，哪一個讀音與其他三個不同？",
        "options": [
            {
                "text": "月「暈」",
                "isCorrect": false,
                "explanation": "月「暈」讀四聲ㄩㄣˋ。"
            },
            {
                "text": "「暈」開",
                "isCorrect": false,
                "explanation": "「暈」開讀四聲ㄩㄣˋ。"
            },
            {
                "text": "頭「暈」",
                "isCorrect": true,
                "explanation": "正確！頭「暈」讀一聲「ㄩㄣ」；其餘三個（月暈、暈開、光暈）皆指光影或色彩向四周擴散，讀四聲「ㄩㄣˋ」。"
            },
            {
                "text": "光「暈」",
                "isCorrect": false,
                "explanation": "光「暈」讀四聲ㄩㄣˋ。"
            }
        ],
        "trap": "「暈」多音字口訣：頭昏眼花、暈車暈船讀一聲「ㄩㄣ」；光圈扩散、月暈、暈開、暈皺讀四聲「ㄩㄣˋ」。"
    },
    {
        "id": "q_exam_heshun_mc_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "動靜態描寫",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p1.png",
        "difficulty": 2,
        "question": "【和順國小・選擇第3題】下列哪一個句子和「給雨潤過的泥路，一定是涼爽又溫柔」一樣，都屬於「靜態描寫」？",
        "options": [
            {
                "text": "最後一片枯葉緩緩飄落",
                "isCorrect": false,
                "explanation": "「緩緩飄落」為動態描寫。"
            },
            {
                "text": "舍南舍北皆春水",
                "isCorrect": true,
                "explanation": "正確！描寫草堂南北皆是春水環繞的靜止景致，屬於靜態描寫。"
            },
            {
                "text": "牠們可愛的鮮紅小嘴兒卻不時從綠葉中伸出來",
                "isCorrect": false,
                "explanation": "「伸出來」為動態描寫。"
            },
            {
                "text": "十二月的寒風，一陣陣吹進運動衫",
                "isCorrect": false,
                "explanation": "「吹進」為動態描寫。"
            }
        ],
        "trap": "選項①飄落、③伸出來、④吹進都有明顯動作（動態），只有②「皆春水」是靜態畫面。"
    },
    {
        "id": "q_exam_heshun_mc_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "詞義辨析",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p1.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第4題】「那兒有一盆異常茂盛的法國吊蘭。」句中的「茂盛」換成下列哪一個語詞後，意思不變？",
        "options": [
            {
                "text": "盛大",
                "isCorrect": false,
                "explanation": "「盛大」形容規模或場面隆重，不形容植物。"
            },
            {
                "text": "茂密",
                "isCorrect": true,
                "explanation": "正確！「茂盛」與「茂密」皆可形容植物枝葉繁盛濃密。"
            },
            {
                "text": "凋零",
                "isCorrect": false,
                "explanation": "相反詞。"
            },
            {
                "text": "稀疏",
                "isCorrect": false,
                "explanation": "相反詞。"
            }
        ],
        "trap": "「茂盛」的近義詞是「茂密、繁茂」，反義詞是「凋零、枯萎、稀疏」。"
    },
    {
        "id": "q_exam_heshun_mc_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "狀聲詞與詞語",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p1.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第5題】下列何者用「潺潺」來形容最貼切？",
        "options": [
            {
                "text": "風吹聲",
                "isCorrect": false,
                "explanation": "風聲常用呼呼、颯颯、蕭蕭。"
            },
            {
                "text": "落葉聲",
                "isCorrect": false,
                "explanation": "落葉聲常用沙沙、簌簌。"
            },
            {
                "text": "流水聲",
                "isCorrect": true,
                "explanation": "正確！「潺潺」（水部）專門形容溪水緩緩流動的樣子或聲音。"
            },
            {
                "text": "鳥鳴聲",
                "isCorrect": false,
                "explanation": "鳥鳴常用啾啾、吱吱喳喳。"
            }
        ],
        "trap": "看到「潺」左邊是三點水（氵），就知道一定跟「流水」有關！"
    },
    {
        "id": "q_exam_heshun_mc_6",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "短語結構",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p1.png",
        "difficulty": 2,
        "question": "【和順國小・選擇第6題】下列哪一個選項和「大大小小的隕石坑」（AABB疊字形容詞＋的＋名詞）結構完全相同？",
        "options": [
            {
                "text": "開開心心的去打球",
                "isCorrect": false,
                "explanation": "「去打球」是動詞短語，不是名詞。"
            },
            {
                "text": "上上下下的爬樓梯",
                "isCorrect": false,
                "explanation": "「爬樓梯」是動賓短語，不是名詞。"
            },
            {
                "text": "寬寬鬆鬆的燕尾服",
                "isCorrect": true,
                "explanation": "正確！「寬寬鬆鬆（AABB疊字形容詞）＋的＋燕尾服（名詞）」，與「大大小小的隕石坑」結構完全一致！"
            },
            {
                "text": "香噴噴的蛋炒飯",
                "isCorrect": false,
                "explanation": "「香噴噴」是ABB結構，不是AABB結構。"
            }
        ],
        "trap": "這種短語結構題有兩個檢查點：(1) 前面必須是「AABB」四字疊詞（排除④香噴噴ABB）；(2) 後面必須是「名詞」（排除①去打球、②爬樓梯）。"
    },
    {
        "id": "q_exam_heshun_mc_7",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "句型辨析",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第7題】「西元一九六五年，阿姆斯壯加入一系列太空計畫。【然而】，要成為太空人並不容易……」根據框起來的「然而」判斷，本句的句型為何？",
        "options": [
            {
                "text": "並列句",
                "isCorrect": false,
                "explanation": "非並列。"
            },
            {
                "text": "因果句",
                "isCorrect": false,
                "explanation": "非因果。"
            },
            {
                "text": "轉折句",
                "isCorrect": true,
                "explanation": "正確！「然而」等同於「但是、可是、卻」，表示前後語意轉折，屬於轉折複句。"
            },
            {
                "text": "假設句",
                "isCorrect": false,
                "explanation": "非假設。"
            }
        ],
        "trap": "看到「然而、雖然……但是、卻、不過」就是標準的「轉折句」。"
    },
    {
        "id": "q_exam_heshun_mc_8",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "字音辨析",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 2,
        "question": "【和順國小・選擇第8題】下列哪一個「載」字讀作三聲（ㄗㄞˇ）？",
        "options": [
            {
                "text": "下「載」影片",
                "isCorrect": false,
                "explanation": "下「載」讀四聲ㄗㄞˋ。"
            },
            {
                "text": "滿「載」而歸",
                "isCorrect": false,
                "explanation": "滿「載」而歸（裝載）讀四聲ㄗㄞˋ。"
            },
            {
                "text": "千「載」難逢",
                "isCorrect": true,
                "explanation": "正確！「千載難逢」的「載」意思是「年」（一千年也難得遇到一次），讀作三聲「ㄗㄞˇ」！"
            },
            {
                "text": "怨聲「載」道",
                "isCorrect": false,
                "explanation": "怨聲「載」道（充滿道路）讀四聲ㄗㄞˋ。"
            }
        ],
        "trap": "「載」的多音字必考法則：只有當「年（千載難逢、一年半載）」或「記錄刊登（記載、刊載、轉載）」時讀三聲「ㄗㄞˇ」，其餘全部讀四聲「ㄗㄞˋ」！"
    },
    {
        "id": "q_exam_heshun_mc_9",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "詞義辨析",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第9題】下列哪一組語詞的意思「兩兩相似」？",
        "options": [
            {
                "text": "炫耀 ／ 誇讚",
                "isCorrect": false,
                "explanation": "「炫耀」是誇耀自己，「誇讚」是稱讚別人。"
            },
            {
                "text": "華佗再世 ／ 妙手回春",
                "isCorrect": true,
                "explanation": "正確！兩者皆用來讚美醫生醫術極為高明，能治好重病。"
            },
            {
                "text": "餘音繞梁 ／ 勇往直前",
                "isCorrect": false,
                "explanation": "前者形容音樂動聽，後者形容勇敢前進，毫無關係。"
            },
            {
                "text": "自在 ／ 拘束",
                "isCorrect": false,
                "explanation": "兩者為相反詞。"
            }
        ],
        "trap": "「華佗再世」與「妙手回春」都是語文天地中介紹「醫療行業」的同義褒義成語。"
    },
    {
        "id": "q_exam_heshun_mc_10",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "字義辨析",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 2,
        "question": "【和順國小・選擇第10題】下列「 」中的字，哪一個解釋「有誤」？",
        "options": [
            {
                "text": "「顫」動：物體搖動或晃動",
                "isCorrect": false,
                "explanation": "解釋正確。"
            },
            {
                "text": "「咂」嘴：用牙齒用力咬住不放",
                "isCorrect": true,
                "explanation": "有誤！「咂（ㄗㄚ）嘴」是指舌尖輕舔上下唇或吸吮發出細微聲音（小珍珠鳥睡覺做夢時的可愛動作），不是用牙齒用力咬住不放！"
            },
            {
                "text": "入「暮」：傍晚、太陽將落的時候",
                "isCorrect": false,
                "explanation": "解釋正確。"
            },
            {
                "text": "「櫃」頂：收藏物品的箱櫥",
                "isCorrect": false,
                "explanation": "解釋正確。"
            }
        ],
        "trap": "鳥類沒有牙齒，小珍珠鳥睡覺「咂咂嘴」是像嬰兒吸吮嘴唇一樣的動作。"
    },
    {
        "id": "q_exam_heshun_mc_11",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "古詩字義",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第11題】在〈客至〉一詩中，下列哪一個字是指「煮熟的飯菜（晚餐／菜餚）」的意思？",
        "options": [
            {
                "text": "「樽」酒",
                "isCorrect": false,
                "explanation": "「樽」是盛酒的器皿（酒杯／酒甕）。"
            },
            {
                "text": "「蓬」門",
                "isCorrect": false,
                "explanation": "「蓬門」是用蓬草編成的柴門。"
            },
            {
                "text": "舊「醅」",
                "isCorrect": false,
                "explanation": "「醅（ㄆㄟ）」是沒有過濾的隔年陳酒。"
            },
            {
                "text": "盤「飧」",
                "isCorrect": true,
                "explanation": "正確！「盤飧（ㄙㄨㄣ）」指盤中的菜餚，「飧」本義為晚飯、熟食。"
            }
        ],
        "trap": "〈客至〉字義必背：盤「飧（ㄙㄨㄣ）」＝熟食菜餚；舊「醅（ㄆㄟ）」＝未過濾的酒；「樽」＝酒器。"
    },
    {
        "id": "q_exam_heshun_mc_12",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "一詞多義",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第12題】下列句子中的「沸騰」，哪一個的意思和其他三個不同？",
        "options": [
            {
                "text": "週年慶現場人聲「沸騰」，看起來好熱鬧啊",
                "isCorrect": false,
                "explanation": "比喻情緒高漲、喧鬧熱烈。"
            },
            {
                "text": "一想到要比賽，我整個人就熱血「沸騰」了起來",
                "isCorrect": false,
                "explanation": "比喻情緒激動高昂。"
            },
            {
                "text": "演唱會上，歌迷的情緒「沸騰」到最高點",
                "isCorrect": false,
                "explanation": "比喻情緒激動高昂。"
            },
            {
                "text": "媽媽正在將「沸騰」的水倒進鍋子裡",
                "isCorrect": true,
                "explanation": "正確！此處指「液體加熱到攝氏100度冒泡翻滾」的物理本義；其餘三項皆為比喻「情緒或氣氛熱烈高漲」。"
            }
        ],
        "trap": "區分詞語的「本義（水燒開滾沸）」與「引申比喻義（情緒或場面熱烈激動）」。"
    },
    {
        "id": "q_exam_heshun_mc_13",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語解釋",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第13題】「家常便飯」是什麼意思？",
        "options": [
            {
                "text": "比喻常受朋友幫助",
                "isCorrect": false,
                "explanation": "無此意。"
            },
            {
                "text": "比喻很常見或很普通、習以為常的事情",
                "isCorrect": true,
                "explanation": "正確！原指家裡日常簡單的飯菜，後常用來比喻極為普遍、經常發生的事。"
            },
            {
                "text": "比喻很短或能輕易抵達的距離",
                "isCorrect": false,
                "explanation": "那是「近在咫尺」。"
            },
            {
                "text": "比喻家人相處和樂",
                "isCorrect": false,
                "explanation": "那是「天倫之樂／其樂融融」。"
            }
        ],
        "trap": "第五課課文例句：「進入火場救災對消防員來說是家常便飯。」"
    },
    {
        "id": "q_exam_heshun_mc_14",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "修辭辨析",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 2,
        "question": "【和順國小・選擇第14題】下列哪一個句子「不是」運用感官「摹寫」修辭？",
        "options": [
            {
                "text": "有些職業我們能大致描繪出它們的樣貌",
                "isCorrect": true,
                "explanation": "正確！這是一般說明陳述句，沒有針對視覺色彩、聽覺聲音或觸覺冷暖做具體感官描寫。"
            },
            {
                "text": "小鳥從鳥籠裡傳出又細又亮的叫聲",
                "isCorrect": false,
                "explanation": "「又細又亮的叫聲」屬於聽覺摹寫。"
            },
            {
                "text": "給雨潤過的泥路，一定是涼爽又溫柔",
                "isCorrect": false,
                "explanation": "「涼爽」屬於觸覺（膚覺）摹寫。"
            },
            {
                "text": "火箭拖著火紅的尾巴直衝雲霄",
                "isCorrect": false,
                "explanation": "「火紅的尾巴直衝雲霄」屬於視覺摹寫。"
            }
        ],
        "trap": "句子裡有「描繪、樣貌」的字眼不等於「摹寫修辭」！必須真的寫出顏色、聲音、味道或觸感才是摹寫。"
    },
    {
        "id": "q_exam_heshun_mc_15",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "修辭辨析",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第15題】下列哪一個選項運用的修辭（構詞方式）和其他三者不同？",
        "options": [
            {
                "text": "又大又圓",
                "isCorrect": false,
                "explanation": "重複「又」，屬於類疊。"
            },
            {
                "text": "緩慢冷靜",
                "isCorrect": true,
                "explanation": "正確！「緩慢冷靜」沒有重複的字（非類疊）；其餘三個（又大又圓、濃濃白煙、大大小小）皆使用了「類疊（疊字／類字）」。"
            },
            {
                "text": "濃濃白煙",
                "isCorrect": false,
                "explanation": "「濃濃」為疊字（類疊）。"
            },
            {
                "text": "大大小小",
                "isCorrect": false,
                "explanation": "「大大小小」為疊字（類疊）。"
            }
        ],
        "trap": "尋找哪一個詞語裡面沒有「重複出現的字」。"
    },
    {
        "id": "q_exam_heshun_mc_16",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "修辭辨析",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第16題】下列哪一個句子運用了「設問」修辭？",
        "options": [
            {
                "text": "小珍珠鳥睡得好熟！還咂咂嘴，難道在做夢？",
                "isCorrect": true,
                "explanation": "正確！「難道在做夢？」運用了疑問句的形式（設問），揣測小鳥熟睡的可愛模樣。"
            },
            {
                "text": "它是如此美麗！",
                "isCorrect": false,
                "explanation": "這是感嘆修辭。"
            },
            {
                "text": "有些職業我們耳熟能詳。",
                "isCorrect": false,
                "explanation": "一般直述句。"
            },
            {
                "text": "偶像明星在舞臺上載歌載舞。",
                "isCorrect": false,
                "explanation": "一般直述句。"
            }
        ],
        "trap": "看到「難道……？」「為什麼……？」「你會想到什麼呢？」都是設問修辭。"
    },
    {
        "id": "q_exam_heshun_mc_17",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "修辭辨析",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 2,
        "question": "【和順國小・選擇第17題】「對偶」修辭是指將字數相同、詞性一致的短語組成對稱的句子。「山高□□」若構成句中對（對偶），□□應為下列哪一個？",
        "options": [
            {
                "text": "難爬",
                "isCorrect": false,
                "explanation": "「難爬」是副詞＋動詞，與「山（名詞）高（形容詞）」詞性不對稱。"
            },
            {
                "text": "春水",
                "isCorrect": false,
                "explanation": "「春水」是偏正名詞，與「山高（主謂結構）」不同。"
            },
            {
                "text": "近雲",
                "isCorrect": false,
                "explanation": "詞性不對稱。"
            },
            {
                "text": "水長",
                "isCorrect": true,
                "explanation": "正確！「山（名詞）高（形容詞）」對「水（名詞）長（形容詞）」，字數相等、詞性相對，合為成語「山高水長」。"
            }
        ],
        "trap": "判斷對偶（對仗）必看「詞性」：山（名）對水（名），高（形）對長（形）。"
    },
    {
        "id": "q_exam_heshun_mc_18",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "修辭辨析",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第18題】「頂真」修辭是指以上一句的末字、末詞，做為下一句的首字、首詞。「我喜歡讀小說，□□的世界是如此美妙！」此句使用了「頂真」修辭，□□應為下列哪一個？",
        "options": [
            {
                "text": "小小",
                "isCorrect": false,
                "explanation": "上一句結尾是「小說」。"
            },
            {
                "text": "創作",
                "isCorrect": false,
                "explanation": "非頂真。"
            },
            {
                "text": "小說",
                "isCorrect": true,
                "explanation": "正確！上一句結尾是「小說」，下一句開頭緊接著用「小說」，構成頂真修辭（如第一課「已後了起來；後了起來的……」）。"
            },
            {
                "text": "歡喜",
                "isCorrect": false,
                "explanation": "非頂真。"
            }
        ],
        "trap": "頂真修辭就像文字接龍：前一句最後一個詞＝後一句第一個詞。"
    },
    {
        "id": "q_exam_heshun_mc_19",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "敘事人稱",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p2.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第19題】下面句子哪句使用「第三人稱」來敘述事件？",
        "options": [
            {
                "text": "我要成為第一個站在月球上的太空人",
                "isCorrect": false,
                "explanation": "「我」為第一人稱。"
            },
            {
                "text": "穆太做了個滿意的手勢，並望向群眾享受歡呼",
                "isCorrect": true,
                "explanation": "正確！以「穆太」為第三人稱主語進行客觀描述。"
            },
            {
                "text": "朋友送我一對珍珠鳥，我把牠們養在籠子裡",
                "isCorrect": false,
                "explanation": "「我」為第一人稱。"
            },
            {
                "text": "提到生活中常見的職業，你會想到什麼呢？",
                "isCorrect": false,
                "explanation": "「你」為第二人稱。"
            }
        ],
        "trap": "找沒有「我（第一人稱）」也沒有「你（第二人稱）」，而是直接寫人名或「他」的句子。"
    },
    {
        "id": "q_exam_heshun_mc_20",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p3.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第20題】在〈贏得喝采的輸家〉一文中，為什麼安納亞會擔心被教練責罵？",
        "options": [
            {
                "text": "因為他沒有成功抵達終點",
                "isCorrect": false,
                "explanation": "他有跑完比賽拿到第二名。"
            },
            {
                "text": "因為他自己搞錯終點而錯失金牌",
                "isCorrect": false,
                "explanation": "搞錯終點的是對手穆太。"
            },
            {
                "text": "因為他選擇提醒穆太而只得到第二名（放棄奪金機會）",
                "isCorrect": true,
                "explanation": "正確！教練賽前叮囑比賽就是要贏，而他卻主動提醒停下來的對手穆太，放棄了到手的第一名，所以擔心教練生氣。"
            },
            {
                "text": "因為他欠缺運動家精神",
                "isCorrect": false,
                "explanation": "他非常有運動家精神。"
            }
        ],
        "trap": "區分誰搞錯終點：「穆太」把氣球拱門誤認為終點；「安納亞」主動提醒穆太而屈居第二。"
    },
    {
        "id": "q_exam_heshun_mc_21",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p3.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第21題】在〈登月先鋒〉一文中，第一段開頭引用了阿姆斯壯踏上月球時所說的哪句千古名言？",
        "options": [
            {
                "text": "我要成為第一個站在月球上的太空人",
                "isCorrect": false,
                "explanation": "這是他心裡的志向。"
            },
            {
                "text": "它是如此美麗",
                "isCorrect": false,
                "explanation": "這是他從月球回望地球時的讚嘆。"
            },
            {
                "text": "這是我的一小步，卻是人類的一大步",
                "isCorrect": true,
                "explanation": "正確！第一段開頭直接引用：「這是我的一小步，卻是人類的一大步。」（引用＋映襯修辭）。"
            },
            {
                "text": "有一天，人類會飛回月球",
                "isCorrect": false,
                "explanation": "這是結尾段提到的期許。"
            }
        ],
        "trap": "「這是我的一小步，卻是人類的一大步」同時運用了「引用」與「映襯（一小步 vs 一大步）」修辭。"
    },
    {
        "id": "q_exam_heshun_mc_22",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p3.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第22題】在〈在天晴了的時候〉這一課中，「新陽推開了陰霾了，溪水在溫風中暈皺。」為什麼會有「暈皺」的畫面？",
        "options": [
            {
                "text": "微風（溫風）吹過溪水，使水面泛起圈圈波紋",
                "isCorrect": true,
                "explanation": "正確！溫和的微風吹拂溪面，使水面盪漾起細小的漣漪波紋，看起來就像暈開、皺了起來。"
            },
            {
                "text": "作者赤腳涉過溪流踩出的水花",
                "isCorrect": false,
                "explanation": "原句明確寫「在溫風中暈皺」。"
            },
            {
                "text": "溪水受到泥沙汙染",
                "isCorrect": false,
                "explanation": "與汙染無關。"
            },
            {
                "text": "雲的腳跡在山間閒遊",
                "isCorrect": false,
                "explanation": "雲的腳跡是在山林間。"
            }
        ],
        "trap": "「暈皺」形容微風吹拂水面時，波紋一圈圈擴散蕩漾的視覺美感。"
    },
    {
        "id": "q_exam_heshun_mc_23",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文主旨",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p3.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第23題】〈哇！原來如此〉一文的主旨為何？",
        "options": [
            {
                "text": "了解各種行業的薪資前景，並鼓勵大家投入這些高薪行業",
                "isCorrect": false,
                "explanation": "文中未談及薪資。"
            },
            {
                "text": "藉由對各種職業的介紹，讓人了解其數百年演變的歷史",
                "isCorrect": false,
                "explanation": "文中重在介紹工具裝備的科學原理與用途，而非歷史演變。"
            },
            {
                "text": "分析職業傷害的原因，並呼籲大家設法避免、及早預防",
                "isCorrect": false,
                "explanation": "非探討職業傷害。"
            },
            {
                "text": "透過探究各行各業工作內容與裝備背後的祕密，發現平凡中的不平凡學問",
                "isCorrect": true,
                "explanation": "正確！透過消防員、歌手、電影場記三個例子，引導讀者保持好奇心，發現各行各業背後的專業學問。"
            }
        ],
        "trap": "呼應課文結尾：只要留心觀察、主動探究，就能發出「哇！原來如此」的讚嘆，體會各行各業的不平凡。"
    },
    {
        "id": "q_exam_heshun_mc_24",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文主旨",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p3.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第24題】在〈珍珠鳥〉一文中，由作者和「小傢伙」互動的過程可知，信賴關係要建立在何者之上？",
        "options": [
            {
                "text": "安全感（尊重與不驚擾）",
                "isCorrect": true,
                "explanation": "正確！作者用吊蘭遮蔽鳥籠、不去掀開葉蔓驚動牠們，給予充足的安全感與尊重，才換來小鳥的主動親近與信賴。"
            },
            {
                "text": "成就感",
                "isCorrect": false,
                "explanation": "非成就感。"
            },
            {
                "text": "優越感",
                "isCorrect": false,
                "explanation": "非優越感。"
            },
            {
                "text": "第六感",
                "isCorrect": false,
                "explanation": "非第六感。"
            }
        ],
        "trap": "信賴的基石＝尊重對方的習性＋給予充足的安全感。"
    },
    {
        "id": "q_exam_heshun_mc_25",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p3.png",
        "difficulty": 1,
        "question": "【和順國小・選擇第25題】在〈客至〉一詩中，由「舍南舍北皆春水，但見群鷗日日來」一句，可推知下列何者？",
        "options": [
            {
                "text": "詩人與鄰翁非常熟識",
                "isCorrect": false,
                "explanation": "這是尾聯才提到的。"
            },
            {
                "text": "草堂地處偏僻，平時很少有客人來拜訪詩人",
                "isCorrect": true,
                "explanation": "正確！「但見（只見）群鷗日日來」說明每天只有水鳥飛來，平時罕有賓客造訪，藉此反襯今日貴客來訪的難得與喜悅。"
            },
            {
                "text": "詩人非常喜歡飼養海鷗",
                "isCorrect": false,
                "explanation": "群鷗是野生水鳥，並非飼養。"
            },
            {
                "text": "詩人家境非常貧窮買不起船",
                "isCorrect": false,
                "explanation": "家貧在頸聯才提及，首聯是寫環境幽僻少客。"
            }
        ],
        "trap": "「但見」的「但」意思是「只、僅」，每天只見鷗鳥飛來＝平時沒有客人來！"
    },
    {
        "id": "q_exam_heshun_punc_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "標點符號運用",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p3.png",
        "difficulty": 2,
        "question": "【和順國小・第五大題標點符號】請選出下列三句括號中最適當的標點符號組合：\n1. 看山間移動的暗綠（　）雲的腳跡（　）它也在閒遊（　）\n2. （　）花徑不曾緣客掃（　）蓬門今始為君開（　）是杜甫的名句。\n3. 我（　）艾文（　）費南德茲（　）安納亞（　）用我的方式讓家鄉為我感到榮耀，讓所有人都知道（　）名次不是唯一……",
        "options": [
            {
                "text": "1. 破折號（——）、破折號（——）、句號（。） ／ 2. 上下引號（「 ， 」） ／ 3. 破折號夾注、外國人名間隔號（・）、冒號（：）",
                "isCorrect": true,
                "explanation": "正確！(1)「——雲的腳跡——」與「——艾文・費南德茲・安納亞——」皆用破折號表補充說明（夾注）；(2)外國人名姓氏與名字之間用間隔號（音界號「・」）；(3)「讓所有人都知道：」後接總括說明用冒號。"
            },
            {
                "text": "1. 逗號、逗號、驚嘆號 ／ 2. 書名號（《 》） ／ 3. 頓號（、）、分號（；）",
                "isCorrect": false,
                "explanation": "引用詩句應用引號「 」而非書名號；外國人名中間應用間隔號「・」而非頓號。"
            },
            {
                "text": "1. 冒號、冒號、句號 ／ 2. 括號 ／ 3. 刪節號（……）、句號",
                "isCorrect": false,
                "explanation": "標點用法錯誤。"
            },
            {
                "text": "1. 分號、分號、問號 ／ 2. 引號 ／ 3. 逗號、頓號、問號",
                "isCorrect": false,
                "explanation": "標點用法錯誤。"
            }
        ],
        "trap": "第四課與第一課的兩大標點考點：(1) 夾注說明前後都用「破折號（——）」；(2) 外國人名之間用「間隔號（・）」，不能用頓號！"
    },
    {
        "id": "q_exam_heshun_idiom_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語選填",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p3.png",
        "difficulty": 2,
        "question": "【和順國小・成語選填第1題】\n📖 成語選項庫（一）：\n[勹] 東施效顰　[ㄆ] 刮目相看　[ㄇ] 退避三舍\n[ㄈ] 無遠弗屆　[ㄉ] 剛愎自用　[ㄊ] 咎由自取\n\n題目：看到那隻猛獸，路人紛紛【　　】，不敢靠近。",
        "options": [
            {
                "label": "勹",
                "text": "東施效顰",
                "isCorrect": false,
                "explanation": "盲目模仿出醜。"
            },
            {
                "label": "ㄆ",
                "text": "刮目相看",
                "isCorrect": false,
                "explanation": "對人的進步另眼相待。"
            },
            {
                "label": "ㄇ",
                "text": "退避三舍",
                "isCorrect": true,
                "explanation": "正確！「退避三舍」比喻主動退讓或迴避不與對方接觸。"
            },
            {
                "label": "ㄈ",
                "text": "無遠弗屆",
                "isCorrect": false,
                "explanation": "傳播廣遠。"
            },
            {
                "label": "ㄉ",
                "text": "剛愎自用",
                "isCorrect": false,
                "explanation": "固執自大。"
            },
            {
                "label": "ㄊ",
                "text": "咎由自取",
                "isCorrect": false,
                "explanation": "自作自受。"
            }
        ],
        "trap": "「退避三舍」的「舍」指古代行軍三十里（退避九十里），後比喻遇到強敵退讓避開。"
    },
    {
        "id": "q_exam_heshun_idiom_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語選填",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p3.png",
        "difficulty": 2,
        "question": "【和順國小・成語選填第2題】\n📖 成語選項庫（一）：\n[勹] 東施效顰　[ㄆ] 刮目相看　[ㄇ] 退避三舍\n[ㄈ] 無遠弗屆　[ㄉ] 剛愎自用　[ㄊ] 咎由自取\n\n題目：他長期以來沉迷於網路遊戲而疏於學業，以致成績一落千丈，這真是【　　】。",
        "options": [
            {
                "label": "勹",
                "text": "東施效顰",
                "isCorrect": false,
                "explanation": "胡亂模仿。"
            },
            {
                "label": "ㄆ",
                "text": "刮目相看",
                "isCorrect": false,
                "explanation": "另眼相看。"
            },
            {
                "label": "ㄇ",
                "text": "退避三舍",
                "isCorrect": false,
                "explanation": "主動退讓。"
            },
            {
                "label": "ㄈ",
                "text": "無遠弗屆",
                "isCorrect": false,
                "explanation": "傳播深遠。"
            },
            {
                "label": "ㄉ",
                "text": "剛愎自用",
                "isCorrect": false,
                "explanation": "固執自負。"
            },
            {
                "label": "ㄊ",
                "text": "咎由自取",
                "isCorrect": true,
                "explanation": "正確！「咎由自取」指所有的災難後果都是自己造成的（咎：災禍、罪過）。"
            }
        ],
        "trap": "因沉迷遊戲導致成績落後，惡果由自己承擔，故填「咎由自取」。"
    },
    {
        "id": "q_exam_heshun_idiom_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語選填",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p3.png",
        "difficulty": 2,
        "question": "【和順國小・成語選填第3題】\n📖 成語選項庫（一）：\n[勹] 東施效顰　[ㄆ] 刮目相看　[ㄇ] 退避三舍\n[ㄈ] 無遠弗屆　[ㄉ] 剛愎自用　[ㄊ] 咎由自取\n\n題目：一個不考慮自己條件而【　　】盲目模仿的人，只會弄巧成拙。",
        "options": [
            {
                "label": "勹",
                "text": "東施效顰",
                "isCorrect": true,
                "explanation": "正確！「東施效顰」（顰讀ㄆㄧㄣˊ，皺眉頭）比喻不知自己條件胡亂模仿他人，反而弄巧成拙。"
            },
            {
                "label": "ㄆ",
                "text": "刮目相看",
                "isCorrect": false,
                "explanation": "另眼相看。"
            },
            {
                "label": "ㄇ",
                "text": "退避三舍",
                "isCorrect": false,
                "explanation": "主動退讓。"
            },
            {
                "label": "ㄈ",
                "text": "無遠弗屆",
                "isCorrect": false,
                "explanation": "廣泛傳播。"
            },
            {
                "label": "ㄉ",
                "text": "剛愎自用",
                "isCorrect": false,
                "explanation": "固執己見。"
            },
            {
                "label": "ㄊ",
                "text": "咎由自取",
                "isCorrect": false,
                "explanation": "自作自受。"
            }
        ],
        "trap": "成語典故：春秋美女西施心痛捧心皺眉很美，醜婦東施也跟著皺眉反而嚇壞鄉親，比喻「胡亂盲目模仿」。"
    },
    {
        "id": "q_exam_heshun_idiom_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語選填",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p3.png",
        "difficulty": 2,
        "question": "【和順國小・成語選填第4題】\n📖 成語選項庫（二）：\n[ㄋ] 千鈞一髮　[ㄌ] 破鏡重圓　[ㄍ] 破釜沉舟\n[ㄎ] 韋編三絕　[ㄏ] 信誓旦旦　[ㄐ] 撥雲見日\n\n題目：選舉期間，候選人們都【　　】的向選民保證，當選後一定實現競選諾言。",
        "options": [
            {
                "label": "ㄋ",
                "text": "千鈞一髮",
                "isCorrect": false,
                "explanation": "情況危急。"
            },
            {
                "label": "ㄌ",
                "text": "破鏡重圓",
                "isCorrect": false,
                "explanation": "夫妻復合。"
            },
            {
                "label": "ㄍ",
                "text": "破釜沉舟",
                "isCorrect": false,
                "explanation": "下定決心拼搏到底。"
            },
            {
                "label": "ㄎ",
                "text": "韋編三絕",
                "isCorrect": false,
                "explanation": "讀書勤奮。"
            },
            {
                "label": "ㄏ",
                "text": "信誓旦旦",
                "isCorrect": true,
                "explanation": "正確！「信誓旦旦」（旦旦：誠懇確實）形容誓言誠懇信實。"
            },
            {
                "label": "ㄐ",
                "text": "撥雲見日",
                "isCorrect": false,
                "explanation": "轉危為安。"
            }
        ],
        "trap": "向選民「保證承諾」，搭配形容誓言的成語必然是「信誓旦旦」。"
    },
    {
        "id": "q_exam_heshun_idiom_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語選填",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p3.png",
        "difficulty": 2,
        "question": "【和順國小・成語選填第5題】\n📖 成語選項庫（二）：\n[ㄋ] 千鈞一髮　[ㄌ] 破鏡重圓　[ㄍ] 破釜沉舟\n[ㄎ] 韋編三絕　[ㄏ] 信誓旦旦　[ㄐ] 撥雲見日\n\n題目：眼看著女孩就要掉下樓，他在【　　】之際衝到樓下，用雙臂接住了她。",
        "options": [
            {
                "label": "ㄋ",
                "text": "千鈞一髮",
                "isCorrect": true,
                "explanation": "正確！「千鈞一髮」（三十斤為一鈞，千鈞重物繫在一根頭髮上）比喻情況萬分險急。"
            },
            {
                "label": "ㄌ",
                "text": "破鏡重圓",
                "isCorrect": false,
                "explanation": "夫妻團圓。"
            },
            {
                "label": "ㄍ",
                "text": "破釜沉舟",
                "isCorrect": false,
                "explanation": "決心拼搏。"
            },
            {
                "label": "ㄎ",
                "text": "韋編三絕",
                "isCorrect": false,
                "explanation": "刻苦讀書。"
            },
            {
                "label": "ㄏ",
                "text": "信誓旦旦",
                "isCorrect": false,
                "explanation": "誓言誠懇。"
            },
            {
                "label": "ㄐ",
                "text": "撥雲見日",
                "isCorrect": false,
                "explanation": "重見光明。"
            }
        ],
        "trap": "女孩墜樓在生死存亡的極危急瞬間，標準成語是「千鈞一髮之際」。"
    },
    {
        "id": "q_exam_heshun_read_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p4.png",
        "difficulty": 1,
        "question": "【和順國小・閱讀測驗《春夜喜雨》第1題】\n📖 杜甫〈春夜喜雨〉：\n「好雨知時節，當春乃發生。\n隨風潛入夜，潤物細無聲。\n野徑雲俱黑，江船火獨明。\n曉看紅溼處，花重錦官城。」\n\n請問這首詩的格式（體裁）為何？",
        "options": [
            {
                "text": "五言絕句",
                "isCorrect": false,
                "explanation": "全詩共8句，非絕句。"
            },
            {
                "text": "七言絕句",
                "isCorrect": false,
                "explanation": "非七言絕句。"
            },
            {
                "text": "五言律詩",
                "isCorrect": true,
                "explanation": "正確！全詩共8句，每句5字，共40字，為標準的「五言律詩」。"
            },
            {
                "text": "七言律詩",
                "isCorrect": false,
                "explanation": "每句5字而非7字。"
            }
        ],
        "trap": "8句×5字＝五言律詩！"
    },
    {
        "id": "q_exam_heshun_read_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p4.png",
        "difficulty": 1,
        "question": "【和順國小・閱讀測驗《春夜喜雨》第2題】這首詩偶數句句尾（生、聲、明、城）押什麼韻（以國語注音韻母看）？",
        "options": [
            {
                "text": "ㄝ",
                "isCorrect": false,
                "explanation": "「節、夜」是奇數句句尾，不押韻。"
            },
            {
                "text": "ㄥ",
                "isCorrect": true,
                "explanation": "正確！第2句「生（ㄕㄥ）」、第4句「聲（ㄕㄥ）」、第6句「明（ㄇㄧㄥˊ）」、第8句「城（ㄔㄥˊ）」的韻母皆為「ㄥ」（平水韻下平八庚韻）。"
            },
            {
                "text": "ㄨ",
                "isCorrect": false,
                "explanation": "「處」是第7句句尾，不押韻。"
            },
            {
                "text": "ㄕ",
                "isCorrect": false,
                "explanation": "ㄕ是聲母不是韻母。"
            }
        ],
        "trap": "找押韻永遠看「第2、4、6、8句（偶數句）的最後一個字」：生、聲、明、城 ➔ 韻母都是「ㄥ」！"
    },
    {
        "id": "q_exam_heshun_read_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p4.png",
        "difficulty": 2,
        "question": "【和順國小・閱讀測驗《春夜喜雨》第3題】在〈春夜喜雨〉這首詩中，下列哪兩句對仗最為工整明顯？",
        "options": [
            {
                "text": "一、三句",
                "isCorrect": false,
                "explanation": "一、三句不同聯，絕不對仗。"
            },
            {
                "text": "二、四句",
                "isCorrect": false,
                "explanation": "二、四句不同聯，絕不對仗。"
            },
            {
                "text": "五、六句（野徑雲俱黑，江船火獨明）",
                "isCorrect": true,
                "explanation": "正確！頸聯（第5、6句）「野徑」對「江船」、「雲」對「火」、「俱黑」對「獨明」，無論詞性、平仄與明暗色彩對比皆極為工整！（頷聯3、4句亦對仗，但選項中唯有「五、六」屬於同一聯！）"
            },
            {
                "text": "七、八句（曉看紅溼處，花重錦官城）",
                "isCorrect": false,
                "explanation": "尾聯（7、8句）不要求對仗，且此二句結構不同。"
            }
        ],
        "trap": "律詩強制對仗的是「三、四句（頷聯）」與「五、六句（頸聯）」！選項裡只有③「五、六」是同一聯。"
    },
    {
        "id": "q_exam_heshun_read_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p4.png",
        "difficulty": 1,
        "question": "【和順國小・閱讀測驗《春夜喜雨》第4題】「曉看紅溼處，花重錦官城」中的「曉」字，指的是什麼時候？",
        "options": [
            {
                "text": "傍晚",
                "isCorrect": false,
                "explanation": "傍晚是「暮、昏」。"
            },
            {
                "text": "清晨（天剛亮的時候）",
                "isCorrect": true,
                "explanation": "正確！「曉」指天亮、清晨（如「春曉、破曉」），承接前文春雨下了一整夜，想像隔天清晨花開滿城的美景。"
            },
            {
                "text": "中午",
                "isCorrect": false,
                "explanation": "中午是「午、晝」。"
            },
            {
                "text": "深夜",
                "isCorrect": false,
                "explanation": "深夜是前兩句的「夜」。"
            }
        ],
        "trap": "時間推進：隨風潛入「夜」（夜晚下雨）➔ 「曉」看紅溼處（隔天清晨賞花）。"
    },
    {
        "id": "q_exam_heshun_read_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（古詩）",
        "batch": "段考真題",
        "school": "臺南市和順國小",
        "examPageImage": "images/exams/EXAM_MID1/heshun_p4.png",
        "difficulty": 1,
        "question": "【和順國小・閱讀測驗《春夜喜雨》第5題】由詩題與末句「花重錦官城」（注釋：錦官城原址在今四川成都市），可知杜甫創作這首詩的時間與地點分別為何？",
        "options": [
            {
                "text": "春天、陝西長安",
                "isCorrect": false,
                "explanation": "錦官城在四川成都，非陝西。"
            },
            {
                "text": "夏天、四川成都",
                "isCorrect": false,
                "explanation": "詩題明言「春夜喜雨」，非夏天。"
            },
            {
                "text": "春天、四川成都",
                "isCorrect": true,
                "explanation": "正確！「春夜喜雨、當春乃發生」點出時間為春天；「錦官城」即四川成都（與第三課〈客至〉同為杜甫定居成都草堂時期的作品！）。"
            },
            {
                "text": "冬天、陝西長安",
                "isCorrect": false,
                "explanation": "時間地點皆錯。"
            }
        ],
        "trap": "〈春夜喜雨〉與課本第三課〈客至〉都是杜甫住在「四川成都浣花溪草堂」時寫的快樂詩篇！"
    },
    {
        "id": "q_exam_chongde_hw_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 3,
        "question": "【崇德國小・第一大題第1題】整理衣[[國字:ㄍㄨㄟˋ:櫃]]時，我發現一件滿是[[注音:皺:ㄓㄡˋ]]褶的舊襯衫。奶奶拿來了溫熱的舊[[國字:ㄆㄟ:醅]]，讓我嘗了一點，暖流瞬間在胃裡[[注音:暈:ㄩㄣˋ]]開。面對著桌上的盤[[注音:飧:ㄙㄨㄣ]]，聞到熟悉的菜香，那份感動讓我微微[[國字:ㄓㄢˋ:顫]]抖。",
        "correctAnswer": "櫃、ㄓㄡˋ、醅、ㄩㄣˋ、ㄙㄨㄣ、顫",
        "explanation": "【解說】衣「櫃」為木部＋匱；「皺」褶讀四聲「ㄓㄡˋ」（皮部）；舊「醅」為酉部＋咅；「暈」開讀四聲「ㄩㄣˋ」；盤「飧」讀一聲「ㄙㄨㄣ」（夕＋食）；「顫」抖為頁部。",
        "trap": "〈客至〉兩大難字：「醅（ㄆㄟ，酉部）」與「飧（ㄙㄨㄣ，食部）」千萬別把讀音搞混！"
    },
    {
        "id": "q_exam_chongde_hw_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 3,
        "question": "【崇德國小・第一大題第2題】爸爸工作很辛苦，常常忙到[[注音:凌:ㄌㄧㄥˊ]]晨。他的[[國字:ㄐㄧ:肌]]膚因長時間日曬而變得[[國字:ㄧㄡˇ:黝]]黑。有次夜裡，具有腐[[國字:ㄕˊ:蝕]]性的強酸[[注音:液:ㄧㄝˋ]]體不小心洩漏，尖叫聲立刻[[注音:劃:ㄏㄨㄚˋ]]破了夜晚的寧靜。",
        "correctAnswer": "ㄌㄧㄥˊ、肌、黝、蝕、ㄧㄝˋ、ㄏㄨㄚˋ",
        "explanation": "【解說】「凌」晨讀二聲「ㄌㄧㄥˊ」；「肌」膚為肉（月）部；「黝」黑為黑部＋幼；腐「蝕」為虫部（飠＋虫）；「液」體讀四聲「ㄧㄝˋ」；「劃」破讀四聲「ㄏㄨㄚˋ」（或二聲ㄏㄨㄚˊ，崇德卷課本音標示ㄏㄨㄚˋ破）。",
        "trap": "「黝黑」左邊是「黑」，右邊是「幼」；「腐蝕」左邊是「飠」，右邊是「虫」！"
    },
    {
        "id": "q_exam_chongde_hw_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考改錯字",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 3,
        "question": "【崇德國小・第二大題改錯字】請找出短文中的六個錯別字並寫出正確國字：\n「海邊的小屋十分簡『漏』，天空也被陰『埋』籠罩著。遠處一艘豪華遊『挺』駛過，發出巨大的『躁』音。爐上的水壺也正發出沸『謄』的聲響。我從牆壁的縫『細』望出去，雖然環境不盡理想，但能看見大海已足夠美好。」\n➔ 簡[[國字:ㄌㄡˋ:陋]]、陰[[國字:ㄇㄞˊ:霾]]、遊[[國字:ㄊㄧㄥˇ:艇]]、[[國字:ㄗㄠˋ:噪]]音、沸[[國字:ㄊㄥˊ:騰]]、縫[[國字:ㄒㄧˋ:隙]]",
        "correctAnswer": "陋、霾、艇、噪、騰、隙",
        "explanation": "【解說】簡「陋」（阜部）、陰「霾」（雨部）、遊「艇」（舟部）、「噪」音（口部，與聲音有關；足部躁是急躁）、沸「騰」（馬部，言部謄是謄寫）、縫「隙」（阜部）。",
        "trap": "必考形近字：「噪音」跟聲音有關用「口部」；「急躁、暴躁」跟跺腳有關用「足部」；「乾燥」跟火烤有關用「火部」！"
    },
    {
        "id": "q_exam_chongde_cloze_1_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "形近字選填",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・選詞填寫 1.❶】\n📖 選項庫：慕　暮　墓　幕\n\n題目：他們抵達目的地的時候，已經是遲【　】時分了。",
        "options": [
            {
                "label": "A",
                "text": "慕",
                "isCorrect": false,
                "explanation": "心部，仰慕羨慕。"
            },
            {
                "label": "B",
                "text": "暮",
                "isCorrect": true,
                "explanation": "正確！「遲暮」（日部）指太陽下山、天色傍晚，亦比喻晚年。"
            },
            {
                "label": "C",
                "text": "墓",
                "isCorrect": false,
                "explanation": "土部，墳墓。"
            },
            {
                "label": "D",
                "text": "幕",
                "isCorrect": false,
                "explanation": "巾部，布幕。"
            }
        ],
        "trap": "時間傍晚跟太陽有關，下方是「日」字部的「暮」！"
    },
    {
        "id": "q_exam_chongde_cloze_1_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "形近字選填",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・選詞填寫 1.❷】\n📖 選項庫：慕　暮　墓　幕\n\n題目：百貨公司為了慶祝開【　】，請來舞獅表演，現場熱鬧非凡。",
        "options": [
            {
                "label": "A",
                "text": "慕",
                "isCorrect": false,
                "explanation": "仰慕。"
            },
            {
                "label": "B",
                "text": "暮",
                "isCorrect": false,
                "explanation": "傍晚。"
            },
            {
                "label": "C",
                "text": "墓",
                "isCorrect": false,
                "explanation": "墳墓。"
            },
            {
                "label": "D",
                "text": "幕",
                "isCorrect": true,
                "explanation": "正確！「開幕」（巾部）原指拉開布幕開始演出，引申為商店或展覽開始營業。"
            }
        ],
        "trap": "拉開布幕跟布料有關，下方是「巾」字部的「幕」！"
    },
    {
        "id": "q_exam_chongde_cloze_1_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "形近字選填",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・選詞填寫 1.❸】\n📖 選項庫：慕　暮　墓　幕\n\n題目：由於哥哥辛苦的努力和奮鬥，才有今天令人羨【　】的成就。",
        "options": [
            {
                "label": "A",
                "text": "慕",
                "isCorrect": true,
                "explanation": "正確！「羨慕」（心部）指心中因看到他人好表現而欣羨嚮往。"
            },
            {
                "label": "B",
                "text": "暮",
                "isCorrect": false,
                "explanation": "傍晚。"
            },
            {
                "label": "C",
                "text": "墓",
                "isCorrect": false,
                "explanation": "墳墓。"
            },
            {
                "label": "D",
                "text": "幕",
                "isCorrect": false,
                "explanation": "布幕。"
            }
        ],
        "trap": "心中的情感投射，下方是「心（㣺）」字部的「慕」！"
    },
    {
        "id": "q_exam_chongde_cloze_1_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "形近字選填",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・選詞填寫 1.❹】\n📖 選項庫：慕　暮　墓　幕\n\n題目：那片【　】園種滿了松柏，四周被石牆環繞，顯得非常肅穆。",
        "options": [
            {
                "label": "A",
                "text": "慕",
                "isCorrect": false,
                "explanation": "羨慕。"
            },
            {
                "label": "B",
                "text": "暮",
                "isCorrect": false,
                "explanation": "傍晚。"
            },
            {
                "label": "C",
                "text": "墓",
                "isCorrect": true,
                "explanation": "正確！「墓園」（土部）指埋葬死者的土地場地。"
            },
            {
                "label": "D",
                "text": "幕",
                "isCorrect": false,
                "explanation": "布幕。"
            }
        ],
        "trap": "埋葬入土跟泥土有關，下方是「土」字部的「墓」！"
    },
    {
        "id": "q_exam_chongde_cloze_2_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語選填",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・選詞填寫 2.❶】\n📖 選項庫：盡其所能　無與倫比　大勢已去\n\n題目：這棟建築物宏偉華麗的風格【　　】。",
        "options": [
            {
                "label": "A",
                "text": "盡其所能",
                "isCorrect": false,
                "explanation": "竭盡全力，形容人的行動。"
            },
            {
                "label": "B",
                "text": "無與倫比",
                "isCorrect": true,
                "explanation": "正確！「無與倫比」指沒有任何事物能與之相比，形容建築無比宏偉出眾。"
            },
            {
                "label": "C",
                "text": "大勢已去",
                "isCorrect": false,
                "explanation": "局勢無法挽回。"
            }
        ],
        "trap": "「建築風格宏偉華麗」是客觀外觀讚美，適合用「無與倫比」。"
    },
    {
        "id": "q_exam_chongde_cloze_2_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語選填",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・選詞填寫 2.❷】\n📖 選項庫：盡其所能　無與倫比　大勢已去\n\n題目：眼見【　　】，他只好選擇三十六計走為上策。",
        "options": [
            {
                "label": "A",
                "text": "盡其所能",
                "isCorrect": false,
                "explanation": "竭盡全力。"
            },
            {
                "label": "B",
                "text": "無與倫比",
                "isCorrect": false,
                "explanation": "沒有能相比的。"
            },
            {
                "label": "C",
                "text": "大勢已去",
                "isCorrect": true,
                "explanation": "正確！「大勢已去」指整體局勢已經失敗無法挽回，故選擇撤退逃走。"
            }
        ],
        "trap": "「眼見……只好走為上策」，代表敗局已無力回天，故填「大勢已去」。"
    },
    {
        "id": "q_exam_chongde_cloze_2_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語選填",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・選詞填寫 2.❸】\n📖 選項庫：盡其所能　無與倫比　大勢已去\n\n題目：急診室裡，醫護人員【　　】的救治每一位傷患。",
        "options": [
            {
                "label": "A",
                "text": "盡其所能",
                "isCorrect": true,
                "explanation": "正確！「盡其所能」指竭盡自己所有的力量與本領全力救治。"
            },
            {
                "label": "B",
                "text": "無與倫比",
                "isCorrect": false,
                "explanation": "無法相比。"
            },
            {
                "label": "C",
                "text": "大勢已去",
                "isCorrect": false,
                "explanation": "局勢已敗。"
            }
        ],
        "trap": "醫護人員「……的救治傷患」，是修飾動作態度，填「盡其所能」。"
    },
    {
        "id": "q_exam_chongde_cloze_3_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語選填",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・選詞填寫 3.❶】\n📖 選項庫：燦爛奪目　如願以償　著迷不已　不足為奇\n\n題目：他自從接觸攝影後就【　　】，不斷練習提升技巧。",
        "options": [
            {
                "label": "A",
                "text": "燦爛奪目",
                "isCorrect": false,
                "explanation": "光彩明亮耀眼。"
            },
            {
                "label": "B",
                "text": "如願以償",
                "isCorrect": false,
                "explanation": "願望達成。"
            },
            {
                "label": "C",
                "text": "著迷不已",
                "isCorrect": true,
                "explanation": "正確！「著迷不已」指對某事物極度沉迷喜愛、停不下來。"
            },
            {
                "label": "D",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "平凡不奇怪。"
            }
        ],
        "trap": "「接觸攝影後就……不斷練習」，是形容對興趣的狂熱投入，填「著迷不已」。"
    },
    {
        "id": "q_exam_chongde_cloze_3_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語選填",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・選詞填寫 3.❷】\n📖 選項庫：燦爛奪目　如願以償　著迷不已　不足為奇\n\n題目：跨年夜時，美麗的煙火將整個天空點綴得【　　】。",
        "options": [
            {
                "label": "A",
                "text": "燦爛奪目",
                "isCorrect": true,
                "explanation": "正確！「燦爛奪目」指光芒絢爛耀眼，讓人目不暇給，常用來形容煙火或珠寶。"
            },
            {
                "label": "B",
                "text": "如願以償",
                "isCorrect": false,
                "explanation": "願望達成。"
            },
            {
                "label": "C",
                "text": "著迷不已",
                "isCorrect": false,
                "explanation": "沉迷喜愛。"
            },
            {
                "label": "D",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "平凡常見。"
            }
        ],
        "trap": "形容「美麗的煙火將夜空點綴得……」，最貼切的視覺成語是「燦爛奪目」。"
    },
    {
        "id": "q_exam_chongde_cloze_3_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語選填",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・選詞填寫 3.❸】\n📖 選項庫：燦爛奪目　如願以償　著迷不已　不足為奇\n\n題目：科技發達的今天，手機功能越來越多，一點也【　　】。",
        "options": [
            {
                "label": "A",
                "text": "燦爛奪目",
                "isCorrect": false,
                "explanation": "光彩奪目。"
            },
            {
                "label": "B",
                "text": "如願以償",
                "isCorrect": false,
                "explanation": "願望達成。"
            },
            {
                "label": "C",
                "text": "著迷不已",
                "isCorrect": false,
                "explanation": "深深入迷。"
            },
            {
                "label": "D",
                "text": "不足為奇",
                "isCorrect": true,
                "explanation": "正確！「不足為奇」指事情很普遍常見，不值得大驚小怪。"
            }
        ],
        "trap": "「一點也不足為奇」是雙重否定表肯定，意思是「非常普遍自然、毫不足怪」。"
    },
    {
        "id": "q_exam_chongde_cloze_3_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語選填",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・選詞填寫 3.❹】\n📖 選項庫：燦爛奪目　如願以償　著迷不已　不足為奇\n\n題目：經過多年的努力，他終於【　　】考上理想的大學。",
        "options": [
            {
                "label": "A",
                "text": "燦爛奪目",
                "isCorrect": false,
                "explanation": "光芒耀眼。"
            },
            {
                "label": "B",
                "text": "如願以償",
                "isCorrect": true,
                "explanation": "正確！「如願以償」指如心所願地達成目標或願望。"
            },
            {
                "label": "C",
                "text": "著迷不已",
                "isCorrect": false,
                "explanation": "沉醉入迷。"
            },
            {
                "label": "D",
                "text": "不足為奇",
                "isCorrect": false,
                "explanation": "平常不奇。"
            }
        ],
        "trap": "考上夢寐以求的理想大學，心願得遂，填「如願以償」。"
    },
    {
        "id": "q_exam_chongde_explain_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "說明事理方法",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・說明事理第❶題】\n📖 步驟代號庫：\n[①] 提出問題　[②] 整理資料　[③] 說明的順序　[④] 說明的方法\n\n題目：請判斷「透過數據和圖像使說明更清楚」屬於哪一個步驟？",
        "options": [
            {
                "label": "①",
                "text": "提出問題",
                "isCorrect": false,
                "explanation": "提出問題是提出疑問引起好奇。"
            },
            {
                "label": "②",
                "text": "整理資料",
                "isCorrect": false,
                "explanation": "整理資料是分類篩選資訊。"
            },
            {
                "label": "③",
                "text": "說明的順序",
                "isCorrect": false,
                "explanation": "順序是按時間或因果排列。"
            },
            {
                "label": "④",
                "text": "說明的方法",
                "isCorrect": true,
                "explanation": "正確！運用「數據、圖表、舉例、比較」讓讀者更容易理解，屬於「說明的方法」。"
            }
        ],
        "trap": "關鍵字「數據和圖像」＝「④ 說明的方法」。"
    },
    {
        "id": "q_exam_chongde_explain_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "說明事理方法",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・說明事理第❷題】\n📖 步驟代號庫：\n[①] 提出問題　[②] 整理資料　[③] 說明的順序　[④] 說明的方法\n\n題目：請判斷「他們為什麼可以不畏困難呢？」屬於哪一個步驟？",
        "options": [
            {
                "label": "①",
                "text": "提出問題",
                "isCorrect": true,
                "explanation": "正確！以「為什麼……」發問，激發讀者的好奇心與探究動機，屬於「提出問題」。"
            },
            {
                "label": "②",
                "text": "整理資料",
                "isCorrect": false,
                "explanation": "蒐集分類資料。"
            },
            {
                "label": "③",
                "text": "說明的順序",
                "isCorrect": false,
                "explanation": "篇章邏輯脈絡。"
            },
            {
                "label": "④",
                "text": "說明的方法",
                "isCorrect": false,
                "explanation": "數據圖表舉例。"
            }
        ],
        "trap": "看到疑問句「為什麼……呢？」＝「① 提出問題」。"
    },
    {
        "id": "q_exam_chongde_explain_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "說明事理方法",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・說明事理第❸題】\n📖 步驟代號庫：\n[①] 提出問題　[②] 整理資料　[③] 說明的順序　[④] 說明的方法\n\n題目：請判斷「按照選擇此行業的原因、經歷、結果依次說明」屬於哪一個步驟？",
        "options": [
            {
                "label": "①",
                "text": "提出問題",
                "isCorrect": false,
                "explanation": "發問引起動機。"
            },
            {
                "label": "②",
                "text": "整理資料",
                "isCorrect": false,
                "explanation": "蒐集整理材料。"
            },
            {
                "label": "③",
                "text": "說明的順序",
                "isCorrect": true,
                "explanation": "正確！按照「原因 ➔ 經歷 ➔ 結果」的時間或邏輯先後展開說明，屬於「說明的順序」。"
            },
            {
                "label": "④",
                "text": "說明的方法",
                "isCorrect": false,
                "explanation": "具體表達技巧。"
            }
        ],
        "trap": "「原因 ➔ 經歷 ➔ 結果依次說明」代表篇章的結構流程＝「③ 說明的順序」。"
    },
    {
        "id": "q_exam_chongde_explain_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "說明事理方法",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p1.png",
        "difficulty": 2,
        "question": "【崇德國小・說明事理第❹題】\n📖 步驟代號庫：\n[①] 提出問題　[②] 整理資料　[③] 說明的順序　[④] 說明的方法\n\n題目：請判斷「詢問當事人或搜尋相關網站」屬於哪一個步驟？",
        "options": [
            {
                "label": "①",
                "text": "提出問題",
                "isCorrect": false,
                "explanation": "提出疑問。"
            },
            {
                "label": "②",
                "text": "整理資料",
                "isCorrect": true,
                "explanation": "正確！訪談當事人或上網查閱資料屬於蒐集與「整理資料」。"
            },
            {
                "label": "③",
                "text": "說明的順序",
                "isCorrect": false,
                "explanation": "行文先後次序。"
            },
            {
                "label": "④",
                "text": "說明的方法",
                "isCorrect": false,
                "explanation": "圖表數據工具。"
            }
        ],
        "trap": "訪談、上網搜尋、調查都是在獲取素材＝「② 整理資料」。"
    },
    {
        "id": "q_exam_chongde_word_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "字義辨析",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p2.png",
        "difficulty": 2,
        "question": "【崇德國小・第五大題字詞義第1題】下列「 」中的「爽」字，哪一個解釋「有誤」？",
        "options": [
            {
                "text": "豪「爽」：豪邁、不拘小節的",
                "isCorrect": false,
                "explanation": "解釋正確。"
            },
            {
                "text": "神清氣「爽」：舒暢、愉快",
                "isCorrect": false,
                "explanation": "解釋正確。"
            },
            {
                "text": "秋高氣「爽」：陰沉、晦暗",
                "isCorrect": true,
                "explanation": "有誤！「秋高氣爽」形容秋天晴空高遠、氣候「涼爽宜人、明朗舒暢」，絕對不是陰沉晦暗（陰沉晦暗是「陰霾」）！"
            },
            {
                "text": "屢試不「爽」：差錯、違背",
                "isCorrect": false,
                "explanation": "解釋正確（「屢試不爽」指多次試驗都沒有差錯；「爽約」指違背約定）。"
            }
        ],
        "trap": "必考一字多義：「屢試不爽、毫釐不爽」的「爽」意思是「差錯」！千萬別解釋成心情很爽快！"
    },
    {
        "id": "q_exam_chongde_word_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "字義辨析",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p2.png",
        "difficulty": 2,
        "question": "【崇德國小・第五大題字詞義第2題】下列「 」中的「緣」字，哪一個解釋「有誤」？",
        "options": [
            {
                "text": "邊「緣」：器物的邊沿",
                "isCorrect": false,
                "explanation": "解釋正確。"
            },
            {
                "text": "無「緣」無故：原因、理由",
                "isCorrect": false,
                "explanation": "解釋正確。"
            },
            {
                "text": "「緣」木求魚：攀爬（沿著樹木爬上去）",
                "isCorrect": false,
                "explanation": "解釋正確。"
            },
            {
                "text": "花徑不曾「緣」客掃：順著、沿著",
                "isCorrect": true,
                "explanation": "有誤！杜甫〈客至〉「花徑不曾緣客掃」中的「緣」，意思是「因為、為了」（花間小路平時不曾「因為／為了」客人而打掃），不是順著沿著！"
            }
        ],
        "trap": "第三課核心字義：「花徑不曾『緣』客掃」的「緣」＝「因為、為了」！"
    },
    {
        "id": "q_exam_chongde_word_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "字義辨析",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p2.png",
        "difficulty": 2,
        "question": "【崇德國小・第五大題字詞義第3題】下列「 」中的「益」字，哪一個解釋「有誤」？",
        "options": [
            {
                "text": "精「益」求精：更加、越發",
                "isCorrect": false,
                "explanation": "解釋正確（已經很精湛了，還要更加追求精湛）。"
            },
            {
                "text": "利「益」：增加、助長",
                "isCorrect": true,
                "explanation": "有誤！「利益」的「益」是名詞「好處、利益」，而非動詞增加助長！"
            },
            {
                "text": "獲「益」良多：好處、幫助",
                "isCorrect": false,
                "explanation": "解釋正確。"
            },
            {
                "text": "良師「益」友：有好處的、有幫助的",
                "isCorrect": false,
                "explanation": "解釋正確。"
            }
        ],
        "trap": "「益」的兩大常考字義：(1) 更加（精益求精、多多益善、老當益壯）；(2) 好處（利益、獲益良多、有益健康）。"
    },
    {
        "id": "q_exam_chongde_mc_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "形近字辨析",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p2.png",
        "difficulty": 1,
        "question": "【崇德國小・第六大題第1題】「□裂」、「□光」、「□布」，□中應分別填入哪些字？",
        "options": [
            {
                "text": "曝 ／ 爆 ／ 瀑",
                "isCorrect": false,
                "explanation": "順序錯誤。"
            },
            {
                "text": "曝 ／ 瀑 ／ 爆",
                "isCorrect": false,
                "explanation": "順序錯誤。"
            },
            {
                "text": "爆 ／ 曝 ／ 瀑",
                "isCorrect": true,
                "explanation": "正確！「爆」裂（火部，炸裂）、「曝」光（日部，晒太陽或底片感光）、「瀑」布（水部，從高處直瀉的水流）。"
            },
            {
                "text": "瀑 ／ 爆 ／ 曝",
                "isCorrect": false,
                "explanation": "順序錯誤。"
            }
        ],
        "trap": "「暴」家族三兄弟：爆炸爆裂用「火（爆）」、曝晒曝光用「日（曝）」、瀑布飛瀑用「水（瀑）」。"
    },
    {
        "id": "q_exam_chongde_mc_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p2.png",
        "difficulty": 1,
        "question": "【崇德國小・第六大題第2題】根據〈珍珠鳥〉課文的敘述，下列何者對於「拉近與動物的距離」最有幫助？",
        "options": [
            {
                "text": "不停在鳥籠旁為牠大聲唱歌",
                "isCorrect": false,
                "explanation": "會驚嚇到膽小的珍珠鳥。"
            },
            {
                "text": "肯為牠花大錢買昂貴鳥籠",
                "isCorrect": false,
                "explanation": "物質價格無關信賴。"
            },
            {
                "text": "總是一刻不離地緊盯守在牠身邊",
                "isCorrect": false,
                "explanation": "緊盯會讓小鳥充滿壓迫感。"
            },
            {
                "text": "了解並尊重牠的習性（給予安全空間、不刻意驚擾）",
                "isCorrect": true,
                "explanation": "正確！作者了解珍珠鳥怕生的習性，用吊蘭遮掩且不隨意掀開驚動，才讓小鳥放下戒心主動親近。"
            }
        ],
        "trap": "愛護動物的最佳方式是「了解牠的習性並給予尊重」，而非過度打擾。"
    },
    {
        "id": "q_exam_chongde_mc_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p2.png",
        "difficulty": 1,
        "question": "【崇德國小・第六大題第3題】在〈客至〉一詩中，「肯與鄰翁相對飲，隔籬呼取盡餘杯。」這句展現出了詩人的何種態度與性格？",
        "options": [
            {
                "text": "膽小怕事",
                "isCorrect": false,
                "explanation": "無關膽小。"
            },
            {
                "text": "熱情好客、率真隨和、樂於與人分享同樂",
                "isCorrect": true,
                "explanation": "正確！邀請隔壁老翁隔著竹籬笆一起過來把剩下的酒喝光，展現主客不拘小節、熱情率真、樂於分享的性情。"
            },
            {
                "text": "重文輕武",
                "isCorrect": false,
                "explanation": "與文武無關。"
            },
            {
                "text": "知錯能改",
                "isCorrect": false,
                "explanation": "與認錯無關。"
            }
        ],
        "trap": "尾聯「隔籬呼取盡餘杯」把迎客的氣氛推向最熱絡歡快的高潮，表現杜甫率真好客、與鄰里和睦的性格。"
    },
    {
        "id": "q_exam_chongde_mc_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "寫作技巧",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p2.png",
        "difficulty": 2,
        "question": "【崇德國小・第六大題第4題】〈哇！原來如此〉使用問句作為開頭，這種寫作方法「沒有」下列哪一種效果？",
        "options": [
            {
                "text": "讓讀者有身臨其境（置身火災或演唱會現場）的感覺",
                "isCorrect": true,
                "explanation": "正確！問句開頭的作用是引發好奇心、增強互動、激發閱讀動機；而「讓讀者有身臨現場的感覺」是第一人稱敘事或生動感官摹寫的效果！"
            },
            {
                "text": "讓讀者產生好奇心",
                "isCorrect": false,
                "explanation": "此為問句開頭的效果。"
            },
            {
                "text": "增強和讀者的對話互動感",
                "isCorrect": false,
                "explanation": "此為問句開頭的效果。"
            },
            {
                "text": "引發讀者的閱讀動機",
                "isCorrect": false,
                "explanation": "此為問句開頭的效果。"
            }
        ],
        "trap": "區分寫作效果：「問句開頭」＝引發好奇、互動、閱讀動機；「第一人稱／摹寫」＝身臨其境！"
    },
    {
        "id": "q_exam_chongde_mc_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "病句修改與語法",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p2.png",
        "difficulty": 2,
        "question": "【崇德國小・第六大題第5題】以下哪一個句子的「語法（語序）有誤」？",
        "options": [
            {
                "text": "整場馬拉松比賽中，我唯一能做的，就是盯著穆太的後腦勺",
                "isCorrect": false,
                "explanation": "語法正確。"
            },
            {
                "text": "我知道那道氣球拱門不是終點，而是主辦單位設置的頒獎地點",
                "isCorrect": false,
                "explanation": "語法正確。"
            },
            {
                "text": "我們漸漸距離拉近了，我就要眼看追過他，這場比賽將屬於我的勝利",
                "isCorrect": true,
                "explanation": "語法有誤！語序顛倒了，應改為：「我們的距離漸漸拉近了，眼看我就要追過他，這場比賽的勝利將屬於我。」"
            },
            {
                "text": "這是一場公平公開的比賽，比賽不就是為了要求得勝利嗎",
                "isCorrect": false,
                "explanation": "語法正確。"
            }
        ],
        "trap": "抓語序病句：「漸漸距離拉近」➔「距離漸漸拉近」；「我就要眼看」➔「眼看我就要」；「比賽屬於勝利」➔「勝利屬於我」。"
    },
    {
        "id": "q_exam_chongde_mc_6",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "俗諺與名言應用",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p2.png",
        "difficulty": 1,
        "question": "【崇德國小・第六大題第6題】在〈登月先鋒〉一文中，太空人在登月前都要經歷種種艱難的訓練。如果我們要鼓勵他們歷經磨練終能成功，可以用下列哪一句話比較適當？",
        "options": [
            {
                "text": "一寸光陰一寸金，寸金難買寸光陰",
                "isCorrect": false,
                "explanation": "勸人珍惜時間。"
            },
            {
                "text": "書中自有黃金屋，書中自有顏如玉",
                "isCorrect": false,
                "explanation": "勸人讀書考取功名。"
            },
            {
                "text": "不經一番寒徹骨，焉得梅花撲鼻香",
                "isCorrect": true,
                "explanation": "正確！比喻人若不經歷一番艱苦嚴苛的磨練，怎麼能獲得最後甜美燦爛的成功果實。"
            },
            {
                "text": "踏破鐵鞋無覓處，得來全不費工夫",
                "isCorrect": false,
                "explanation": "比喻苦尋不得的事物卻在無意間輕鬆得到，與艱苦訓練不符。"
            }
        ],
        "trap": "「不經一番寒徹骨，焉得梅花撲鼻香」（黃檗禪師詩）最常用來形容「經歷嚴格訓練或挫折後獲得成功」。"
    },
    {
        "id": "q_exam_chongde_mc_7",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "字音辨析",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p2.png",
        "difficulty": 2,
        "question": "【崇德國小・第六大題第7題】下列哪一個「載」字，讀音與其他三個不同？",
        "options": [
            {
                "text": "「載」歌載舞",
                "isCorrect": false,
                "explanation": "「載」歌載舞（又歌又舞）讀四聲ㄗㄞˋ。"
            },
            {
                "text": "怨聲「載」道",
                "isCorrect": false,
                "explanation": "怨聲「載」道（充滿道路）讀四聲ㄗㄞˋ。"
            },
            {
                "text": "滿「載」而歸",
                "isCorrect": false,
                "explanation": "滿「載」而歸（裝滿）讀四聲ㄗㄞˋ。"
            },
            {
                "text": "千「載」難逢",
                "isCorrect": true,
                "explanation": "正確！「千載難逢」（指年）讀作三聲「ㄗㄞˇ」；其餘三個皆讀四聲「ㄗㄞˋ」。"
            }
        ],
        "trap": "六校段考出現率100%的考題！「載」字三聲（ㄗㄞˇ）只有「千載難逢、一年半載、記載、刊載、轉載」！"
    },
    {
        "id": "q_exam_chongde_mc_8",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "國學常識",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p2.png",
        "difficulty": 1,
        "question": "【崇德國小・第六大題第8題】下列關於「律詩」的敘述，何者正確？",
        "options": [
            {
                "text": "七言律詩有四十個字",
                "isCorrect": false,
                "explanation": "7字×8句＝56個字（五言律詩才是40個字）。"
            },
            {
                "text": "律詩的第三、四句（頷聯）及第五、六句（頸聯）必須對仗",
                "isCorrect": true,
                "explanation": "正確！律詩格律嚴謹，中間兩聯（3、4句與5、6句）強制要求對仗。"
            },
            {
                "text": "盛行於宋代",
                "isCorrect": false,
                "explanation": "律詩屬於近體詩（唐詩），盛行於唐代。"
            },
            {
                "text": "偶數句不一定要押韻",
                "isCorrect": false,
                "explanation": "偶數句（2、4、6、8句）規定一定要押韻！"
            }
        ],
        "trap": "律詩四大鐵則：(1) 共8句（五律40字、七律56字）；(2) 偶數句必押韻；(3) 3-4句、5-6句必對仗；(4) 盛行於唐代。"
    },
    {
        "id": "q_exam_chongde_read1_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（現代詩）",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p3.png",
        "difficulty": 2,
        "question": "【崇德國小・閱讀測驗1《偶然》第(1)題】\n📖 徐志摩〈偶然〉：\n「我是天空裡的一片雲，／偶爾投影在你的波心——／你不必訝異，／更無須歡喜——／在轉瞬間消滅了蹤影。\n你我相逢在黑夜的海上，／你有你的，我有我的，方向；／你記得也好，／最好你忘掉，／在這交會時互放的光亮！」\n\n請問：詩中提到「你有你的，我有我的，方向」，這句話最主要的暗示是什麼？",
        "options": [
            {
                "text": "彼此的人生目標和志向完全相同",
                "isCorrect": false,
                "explanation": "各有各的方向，並非相同。"
            },
            {
                "text": "雙方雖然在生命中偶然相遇，但仍是獨立的個體，終將各自前行",
                "isCorrect": true,
                "explanation": "正確！點出人與人之間各有自己的人生軌跡，短暫交會後仍須朝各自的方向前進。"
            },
            {
                "text": "只有在黑夜的海上才能看清方向",
                "isCorrect": false,
                "explanation": "黑夜的海上是比喻人生的旅途。"
            },
            {
                "text": "詩人正在勸導對方改換方向跟自己走",
                "isCorrect": false,
                "explanation": "詩人尊重彼此獨立的方向。"
            }
        ],
        "trap": "〈偶然〉的核心哲理：生命中的相逢雖美，但每個人都有各自的人生方向，不必強求執著。"
    },
    {
        "id": "q_exam_chongde_read1_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（現代詩）",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p3.png",
        "difficulty": 2,
        "question": "【崇德國小・閱讀測驗1《偶然》第(2)題】詩中「在這交會時互放的光亮！」指的是什麼樣的價值？",
        "options": [
            {
                "text": "雙方交換了昂貴的珠寶禮物",
                "isCorrect": false,
                "explanation": "非物質禮物。"
            },
            {
                "text": "彼此間金錢物質上的實質幫助",
                "isCorrect": false,
                "explanation": "非金錢幫助。"
            },
            {
                "text": "心靈相遇時互相啟發、照亮彼此、豐富生命的短暫美好體驗",
                "isCorrect": true,
                "explanation": "正確！雖然相逢短暫，但交會瞬間彼此心靈的共鳴、溫暖與火花（互放的光亮）本身就極具生命價值。"
            },
            {
                "text": "找到了未來永遠綁在一起走下去的承諾",
                "isCorrect": false,
                "explanation": "詩中強調「轉瞬間消滅了蹤影、各有方向」，並非永恆承諾。"
            }
        ],
        "trap": "「互放的光亮」象徵人際相遇時真摯美好的心靈火花。"
    },
    {
        "id": "q_exam_chongde_read1_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（現代詩）",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p3.png",
        "difficulty": 2,
        "question": "【崇德國小・閱讀測驗1《偶然》第(3)題】詩人建議「你記得也好，最好你忘掉」。從整首詩「偶然」的基調來看，哪一種態度最能體現詩人的灑脫？",
        "options": [
            {
                "text": "最好你忘掉（隨緣放下，不執著、不給對方負擔）",
                "isCorrect": true,
                "explanation": "正確！「最好你忘掉」展現出不強求、不羈絆、隨緣聚散的豁達與灑脫！"
            },
            {
                "text": "必須緊緊記得一輩子",
                "isCorrect": false,
                "explanation": "這是執著而非灑脫。"
            },
            {
                "text": "強迫對方做出選擇",
                "isCorrect": false,
                "explanation": "非強迫。"
            },
            {
                "text": "找尋長久不變的方向",
                "isCorrect": false,
                "explanation": "與此句無關。"
            }
        ],
        "trap": "從「不必訝異、無須歡喜」到「最好你忘掉」，處處體現揮一揮衣袖不帶走一片雲彩的「灑脫」。"
    },
    {
        "id": "q_exam_chongde_read1_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（現代詩）",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p3.png",
        "difficulty": 2,
        "question": "【崇德國小・閱讀測驗1《偶然》第(4)題】將「我」比喻為天空飄動的「雲影」，將「你」比喻為蕩漾的「波心」，這兩種流動的意象，最主要強調了相遇的何種特點？",
        "options": [
            {
                "text": "純粹童話般的魔幻特質",
                "isCorrect": false,
                "explanation": "重點不在童話魔幻。"
            },
            {
                "text": "相遇的永恆與長久不變",
                "isCorrect": false,
                "explanation": "恰恰相反，雲與波都是瞬息萬變的。"
            },
            {
                "text": "兩人相隔遙遠無法溝通的敵意",
                "isCorrect": false,
                "explanation": "已有「投影在你的波心」，並非無法交會。"
            },
            {
                "text": "相遇的偶然、短暫、易逝與不可強求",
                "isCorrect": true,
                "explanation": "正確！天上的雲隨風飄動，水面的波紋隨風生滅，雲影投映波心「在轉瞬間消滅了蹤影」，凸顯緣分的短暫易逝與偶然。"
            }
        ],
        "trap": "「雲」與「水波」都是自然界最流動不居、瞬息萬變的意象，用來烘托「偶然與短暫」。"
    },
    {
        "id": "q_exam_chongde_read2_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（成語故事）",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p3.png",
        "difficulty": 1,
        "question": "【崇德國小・閱讀測驗2《巧取豪奪》第(1)題】\n📖 成語故事〈巧取豪奪〉：\n宋朝書畫家米芾（音ㄈㄨˊ）個性顛狂，世稱「米顛」。他十分喜愛古畫，曾向人借古畫臨摹（複製），臨摹好了，再把假畫和真品一起送回去讓主人挑，主人往往分辨不出哪幅才是真品，他就用這種「巧取」手段得到許多古書畫。\n東晉桓玄也喜歡收集名畫。有一次，大畫家顧愷之將一箱珍貴畫作彌封後寄託給桓玄保管，桓玄卻偷偷從箱底撬開偷走裡面的畫，再把空箱子恢復原狀還給顧愷之。顧愷之發現畫作不翼而飛，不但不生氣，反而幽默地說：「我的畫太精妙，像仙人通靈一樣，羽化登仙飛走啦！」成語「巧取豪奪」便由此演變而出。\n\n請問：顧愷之發現自己寄放在桓玄那裡的畫作不翼而飛後，他如何解釋這件事？",
        "options": [
            {
                "text": "認為是運送途中出了差錯掉進水裡",
                "isCorrect": false,
                "explanation": "文中未提。"
            },
            {
                "text": "公開大罵並報官抓桓玄",
                "isCorrect": false,
                "explanation": "當時桓玄權傾朝野，顧愷之並未動怒拆穿。"
            },
            {
                "text": "說精妙的畫像仙人通靈一樣，幻化而去（羽化登仙了）",
                "isCorrect": true,
                "explanation": "正確！原文寫道：「顧愷之發現畫已不翼而飛，不但不生氣，反而說畫像仙人通靈，幻化而去。」展現其豁達與機智。"
            },
            {
                "text": "認為是自己老糊塗忘了把畫裝進箱子",
                "isCorrect": false,
                "explanation": "非忘記裝畫。"
            }
        ],
        "trap": "直接對照短文倒數第二句即可作答。"
    },
    {
        "id": "q_exam_chongde_read2_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（成語故事）",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p4.png",
        "difficulty": 1,
        "question": "【崇德國小・閱讀測驗2《巧取豪奪》第(2)題】根據故事內容，米芾之所以能成功用贗品（臨摹的假畫）換走真品，主要原因最可能是什麼？",
        "options": [
            {
                "text": "他擁有極高的皇室地位，主人不敢反抗",
                "isCorrect": false,
                "explanation": "主人是「分辨不出來」，而非不敢反抗。"
            },
            {
                "text": "他很擅長畫山水人物，臨摹（仿畫）技藝極為高超，幾可亂真",
                "isCorrect": true,
                "explanation": "正確！因為他「善於畫山水人物，自成一家」，臨摹出的畫作逼真到連原主人也分不出真假！"
            },
            {
                "text": "他與古畫主人關係非常好，主人主動送他",
                "isCorrect": false,
                "explanation": "是騙取而非贈送。"
            },
            {
                "text": "他拿了很多比真品更貴重的古畫去交換",
                "isCorrect": false,
                "explanation": "他是拿自己臨摹的複製品去混淆。"
            }
        ],
        "trap": "這就是「巧取豪奪」中「巧取（用巧妙計謀騙取）」的由來。"
    },
    {
        "id": "q_exam_chongde_read2_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（成語故事）",
        "batch": "段考真題",
        "school": "高雄市崇德國小",
        "examPageImage": "images/exams/EXAM_MID1/chongde_p4.png",
        "difficulty": 1,
        "question": "【崇德國小・閱讀測驗2《巧取豪奪》第(3)題】比較米芾與桓玄取得古畫的手段，兩者最大的共同點是什麼？",
        "options": [
            {
                "text": "都採用了拿刀威脅的武力強搶方式",
                "isCorrect": false,
                "explanation": "兩人都用了偷換或暗中竊取的伎倆。"
            },
            {
                "text": "都透過誠實付費的交易來達成目的",
                "isCorrect": false,
                "explanation": "皆非誠實交易。"
            },
            {
                "text": "都事先得到了原畫主人的同意",
                "isCorrect": false,
                "explanation": "皆未經主人同意。"
            },
            {
                "text": "都使用了欺騙或不正當的手段將別人的東西據為己有",
                "isCorrect": true,
                "explanation": "正確！無論是以假亂真騙取（巧取）還是暗中開箱竊取（豪奪），本質上都是用不正當手段奪取他人財物。"
            }
        ],
        "trap": "「巧取豪奪」為貶義成語，形容用各種不正當手段詐取或強奪他人財物與權利。"
    },
    {
        "id": "q_exam_zx_hw_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p1.png",
        "difficulty": 3,
        "question": "【忠孝國小・第一大題第1~2段】週末早晨，市政府舉辦了一場[[國字:ㄅㄢ:頒]]獎典禮，這份[[注音:榮:ㄖㄨㄥˊ]]耀是[[國字:ㄕㄨˇ:屬]]於自己的。典禮結束後，他們路過一處老舊社區，曾住著一位知名藝人，近日傳出他突然[[注音:隕:ㄩㄣˇ]]落的消息。聽說他被發現時，住處[[國字:ㄌㄧㄥˊ:凌]]亂，室內堆滿老舊的機[[注音:械:ㄒㄧㄝˋ]]與[[注音:朽:ㄒㄧㄡˇ]]壞的家電。午後太陽原本還[[國字:ㄆㄨˋ:曝]]曬著地面，不久便烏雲密布，空氣中瀰漫著陰[[注音:霾:ㄇㄞˊ]]。這些[[國字:ㄐㄧ:跡]]象都讓人擔心即將下起暴雨，他們決定不要[[注音:涉:ㄕㄜˋ]]水而行。",
        "correctAnswer": "頒、ㄖㄨㄥˊ、屬、ㄩㄣˇ、凌、ㄒㄧㄝˋ、ㄒㄧㄡˇ、曝、ㄇㄞˊ、跡、ㄕㄜˋ",
        "explanation": "【解說】「頒」獎（頁部，分＋頁）；「榮」耀讀「ㄖㄨㄥˊ」；「屬」於（尸部）；「隕」落讀三聲「ㄩㄣˇ」；「凌」亂（冫部）；機「械」讀「ㄒㄧㄝˋ」；「朽」壞讀「ㄒㄧㄡˇ」；「曝」曬（日部）；陰「霾」讀「ㄇㄞˊ」；「跡」象（足部）；「涉」水讀「ㄕㄜˋ」。",
        "trap": "「頒」左邊是「分」，右邊是「頁」；「隕」落讀三聲「ㄩㄣˇ」，不要念成員（ㄩㄢˊ）！"
    },
    {
        "id": "q_exam_zx_hw_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p1.png",
        "difficulty": 3,
        "question": "【忠孝國小・第一大題第3段】回家後，小芳開始進行化學作業。她知道實驗中若使用具有腐[[注音:蝕:ㄕˊ]]性的[[注音:液:ㄧㄝˋ]]體，必須小心謹慎。除了不能[[國字:ㄔㄨˋ:觸]]碰藥劑，她還特別戴上護目鏡與口罩，以[[國字:ㄅㄧˋ:避]]免發生危險。幸好弟弟住院時有值得信[[國字:ㄌㄞˋ:賴]]的醫師、媽媽的[[注音:悉:ㄒㄧ]]心照護，還有朋友送來的[[注音:絨:ㄖㄨㄥˊ]]毛娃娃陪伴，才能回到溫暖[[國字:ㄕㄨ:舒]]適的家。",
        "correctAnswer": "ㄕˊ、ㄧㄝˋ、觸、避、賴、ㄒㄧ、ㄖㄨㄥˊ、舒",
        "explanation": "【解說】腐「蝕」讀二聲「ㄕˊ」；「液」體讀四聲「ㄧㄝˋ」；「觸」碰（角部）；「避」免（辵部＋辟）；信「賴」（貝部，束＋刀＋貝）；「悉」心讀一聲「ㄒㄧ」；「絨」毛讀二聲「ㄖㄨㄥˊ」；「舒」適（舌部）。",
        "trap": "「信賴」的「賴」左邊是「束」，右邊上方是「刀（負的刀頭）」、下方是「貝」！"
    },
    {
        "id": "q_exam_zx_hw_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p1.png",
        "difficulty": 3,
        "question": "【忠孝國小・第一大題第4段（上）】隔壁鄰居小美在咖啡廳兼差時，認識了一位男士，以為對方是自己的姻[[注音:緣:ㄩㄢˊ]]。沒想到對方只是客氣寒暄，這段時間，她整日魂不守[[注音:舍:ㄕㄜˋ]]，甚至[[國字:ㄆㄥˊ:蓬]]頭[[國字:ㄍㄡˋ:垢]]面，讓父母十分擔憂。午後，小芳專注於文章[[注音:編:ㄅㄧㄢ]]輯。她將草[[國字:ㄍㄠˇ:稿]]書寫於[[國字:ㄍㄠˇ:稿]]紙上，不斷增[[國字:ㄊㄧㄢ:添]]內容，卻因久坐使[[注音:肩:ㄐㄧㄢ]]膀痠痛。",
        "correctAnswer": "ㄩㄢˊ、ㄕㄜˋ、蓬、垢、ㄅㄧㄢ、稿、稿、添、ㄐㄧㄢ",
        "explanation": "【解說】姻「緣」讀「ㄩㄢˊ」；魂不守「舍」（指心神離開軀殼屋舍）讀四聲「ㄕㄜˋ」；「蓬」頭（艸部）「垢」面（土部）；「編」輯讀「ㄅㄧㄢ」；草「稿」（禾部＋高）；增「添」（水部）；「肩」膀讀「ㄐㄧㄢ」。",
        "trap": "「魂不守舍」的「舍」指人的身體像靈魂居住的屋舍，所以讀四聲「ㄕㄜˋ」（名詞），不讀三聲ㄕㄜˇ！"
    },
    {
        "id": "q_exam_zx_hw_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "handwriting",
        "category": "段考國字注音",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p1.png",
        "difficulty": 3,
        "question": "【忠孝國小・第一大題第4段（下）】傍晚時分，社區活動場地出現小插曲。原本應放[[國字:ㄓˋ:置]]在門口的拱門，因工作人員[[國字:ㄍㄠˇ:搞]]錯位[[注音:置:ㄓˋ]]被放在出口，雖經一番折[[注音:騰:ㄊㄥˊ]]才順利改正，但仍[[國字:ㄖㄜˇ:惹]]得主辦單位啼笑皆非。",
        "correctAnswer": "置、搞、ㄓˋ、ㄊㄥˊ、惹",
        "explanation": "【解說】放「置」（网部＋直，直裡面三橫）；「搞」錯（手部＋高，與禾部的草「稿」區分！）；位「置」讀四聲「ㄓˋ」；折「騰」讀二聲「ㄊㄥˊ」（口語有時讀輕聲，課本標準音為二聲ㄊㄥˊ）；「惹」得（艸＋右＋心，心部）。",
        "trap": "忠孝國小這題超精彩：把「草稿（禾部）」跟「搞錯（手部）」、「放置（寫國字）」跟「位置（寫注音）」放在同一段對比考！"
    },
    {
        "id": "q_exam_zx_word_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "字義辨析",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p1.png",
        "difficulty": 1,
        "question": "【忠孝國小・字詞義第1題】「爽」字在不同語境中有不同意思，下列哪一個選項中的「爽」字，是指「舒適暢快、明朗清涼」？",
        "options": [
            {
                "text": "秋高氣「爽」",
                "isCorrect": true,
                "explanation": "正確！「秋高氣爽」的「爽」指氣候清涼舒適、使人感到暢快。"
            },
            {
                "text": "屢試不「爽」",
                "isCorrect": false,
                "explanation": "此處「爽」指差錯、偏差。"
            },
            {
                "text": "豪「爽」",
                "isCorrect": false,
                "explanation": "此處「爽」指豪邁不拘小節。"
            },
            {
                "text": "直「爽」",
                "isCorrect": false,
                "explanation": "此處「爽」指率直痛快。"
            }
        ],
        "trap": "「秋高氣爽、神清氣爽、涼爽」的「爽」皆指清涼舒適暢快。"
    },
    {
        "id": "q_exam_zx_word_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "古詩文意",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p1.png",
        "difficulty": 2,
        "question": "【忠孝國小・字詞義第2題】〈客至〉「但見群鷗日日來」句中，「但」見（只見）點出詩人平時的什麼處境或心境？",
        "options": [
            {
                "text": "詩人平日少有人探訪的孤獨僻靜感（藉此反襯今日客至的喜悅）",
                "isCorrect": true,
                "explanation": "正確！草堂四周春水環繞，平時「只見」鷗鳥天天飛來，卻沒有親友造訪，流露出幾分幽居孤寂，更凸顯今日客人來訪的驚喜。"
            },
            {
                "text": "有很多經常來訪的朋友或賓客",
                "isCorrect": false,
                "explanation": "恰恰相反，平時幾乎沒有客人。"
            },
            {
                "text": "外來的敵人很多，十分擔憂",
                "isCorrect": false,
                "explanation": "群鷗是溫馴的水鳥，並非敵人。"
            },
            {
                "text": "厭倦人類社會，完全不想見任何客人",
                "isCorrect": false,
                "explanation": "後文「蓬門今始為君開」表現出他非常渴望與歡迎朋友來訪。"
            }
        ],
        "trap": "「但見群鷗日日來」以每日唯有鷗鳥相伴的寂靜，反襯「蓬門今始為君開」的熱烈歡喜。"
    },
    {
        "id": "q_exam_zx_word_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "成語分類",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p1.png",
        "difficulty": 1,
        "question": "【忠孝國小・字詞義第3題】下列成語中，哪一個形容的對象與意思與其他三個不同？",
        "options": [
            {
                "text": "春風化雨",
                "isCorrect": true,
                "explanation": "正確！「春風化雨」是用來讚美「師長教育」的良善薰陶；其餘三個（華佗再世、仁心仁術、妙手回春）全都是讚美「醫生醫術與醫德」！"
            },
            {
                "text": "華佗再世",
                "isCorrect": false,
                "explanation": "讚美醫生醫術高超。"
            },
            {
                "text": "仁心仁術",
                "isCorrect": false,
                "explanation": "讚美醫生心地仁慈、醫術高明。"
            },
            {
                "text": "妙手回春",
                "isCorrect": false,
                "explanation": "讚美醫生將重病治好。"
            }
        ],
        "trap": "《語文天地二》職業成語必考題：春風化雨／百年樹人／作育英才＝老師；華佗再世／仁心仁術／妙手回春＝醫生。"
    },
    {
        "id": "q_exam_zx_word_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "詞義辨析",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p1.png",
        "difficulty": 1,
        "question": "【忠孝國小・字詞義第4題】「流瀉」一詞原本形容水或光線的流動，下列哪一個選項最接近它的意思？",
        "options": [
            {
                "text": "水流清澈見底的樣子",
                "isCorrect": false,
                "explanation": "那是「清澈、澄澈」。"
            },
            {
                "text": "水面平靜無波",
                "isCorrect": false,
                "explanation": "與流動相反。"
            },
            {
                "text": "氣勢驚人、波濤洶湧",
                "isCorrect": false,
                "explanation": "流瀉側重順暢地傾瀉而出。"
            },
            {
                "text": "流散、傾瀉（流暢地湧出或傾瀉而下）",
                "isCorrect": true,
                "explanation": "正確！「流瀉」指像水或光線一樣順暢地流散、傾瀉而出（第二課：「我筆尖一動，流瀉下一時的感受」）。"
            }
        ],
        "trap": "「瀉」本義即為水往下快速流動、傾瀉。"
    },
    {
        "id": "q_exam_zx_word_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "詞義辨析",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 1,
        "question": "【忠孝國小・字詞義第5題】「陰霾」多用來形容天氣或心情，下列哪一個意思最正確？",
        "options": [
            {
                "text": "形容人心險惡、歹毒",
                "isCorrect": false,
                "explanation": "那是「陰險」。"
            },
            {
                "text": "比喻心情由悲轉喜",
                "isCorrect": false,
                "explanation": "「掃除陰霾」才是由悲轉喜，「陰霾」本身是鬱悶沉重。"
            },
            {
                "text": "比喻情緒平靜，沒有起伏",
                "isCorrect": false,
                "explanation": "非平靜。"
            },
            {
                "text": "形容天氣陰沉、晦暗（亦比喻心境鬱悶沉重）",
                "isCorrect": true,
                "explanation": "正確！「陰霾」指空氣中懸浮大量煙塵水氣導致天氣陰暗混濁，也用來比喻內心沉重鬱悶的不快氣氛。"
            }
        ],
        "trap": "第一課「新陽推開了陰霾了」，陰霾指雨後尚未散盡的陰暗雲霧。"
    },
    {
        "id": "q_exam_zx_word_6",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "古詩字義",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 1,
        "question": "【忠孝國小・字詞義第6題】杜甫〈客至〉「舍南舍北皆春水」一句中的「春水」指的是什麼？",
        "options": [
            {
                "text": "春天剛落下的雨水",
                "isCorrect": false,
                "explanation": "指草堂周圍溪河裡的水，非空中的雨水。"
            },
            {
                "text": "春天感傷的淚水",
                "isCorrect": false,
                "explanation": "〈客至〉是歡喜之詩，非淚水。"
            },
            {
                "text": "春天暴漲充盈的溪流河水（指浣花溪流水）",
                "isCorrect": true,
                "explanation": "正確！杜甫成都草堂位於浣花溪畔，春天溪水豐沛，環繞屋舍南北，故稱「春水」。"
            },
            {
                "text": "春天花草上的露水",
                "isCorrect": false,
                "explanation": "露水不會有群鷗飛來。"
            }
        ],
        "trap": "因為有「春水（春天的溪流河水）」環繞，下一句才會有「群鷗（水鳥）日日來」！"
    },
    {
        "id": "q_exam_zx_text_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文主旨",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 1,
        "question": "【忠孝國小・課文文意第1題】你認為《贏得喝采的輸家》這篇文章想傳達的中心思想是什麼？",
        "options": [
            {
                "text": "運動員要耍花招努力爭取觀眾的掌聲",
                "isCorrect": false,
                "explanation": "非耍花招。"
            },
            {
                "text": "只要展現誠實與公平競爭的運動家精神，不管輸贏都值得尊敬與掌聲",
                "isCorrect": true,
                "explanation": "正確！安納亞雖然讓出第一名，但他正直無私的運動家精神贏得了全世界的喝采。"
            },
            {
                "text": "真正的運動家精神是不擇手段追求勝利",
                "isCorrect": false,
                "explanation": "與主旨完全相反。"
            },
            {
                "text": "沒有拿到金牌就不是國家的英雄",
                "isCorrect": false,
                "explanation": "文中強調名次不是唯一。"
            }
        ],
        "trap": "「你沒有成為這場比賽的贏家，但你成了一個更優秀的人。」點出運動家精神高於勝負名次。"
    },
    {
        "id": "q_exam_zx_text_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文內容",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 1,
        "question": "【忠孝國小・課文文意第2題】在《哇！原來如此》這篇文章中，有哪個職業的祕密「沒有」被提到？",
        "options": [
            {
                "text": "電影拍攝幕後團隊（場記板）",
                "isCorrect": false,
                "explanation": "課文第四段有介紹。"
            },
            {
                "text": "消防員的工作裝備（三層消防衣）",
                "isCorrect": false,
                "explanation": "課文第二段有介紹。"
            },
            {
                "text": "舞臺表演歌手的裝備（入耳式監聽耳機）",
                "isCorrect": false,
                "explanation": "課文第三段有介紹。"
            },
            {
                "text": "廚師的料理刀工技巧",
                "isCorrect": true,
                "explanation": "正確！課文只介紹了消防員、歌手、電影拍攝團隊三種職業，並未介紹廚師。"
            }
        ],
        "trap": "第五課三大職業：消防員（消防衣）、歌手（耳機）、電影幕後人員（場記板）。"
    },
    {
        "id": "q_exam_zx_text_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 1,
        "question": "【忠孝國小・課文文意第3題】讀完《珍珠鳥》後，關於「信賴」這個詞，你覺得下面哪一個說法是「不正確」的？",
        "options": [
            {
                "text": "建立信賴需要彼此理解、尊重與包容",
                "isCorrect": false,
                "explanation": "說法正確。"
            },
            {
                "text": "信賴往往能創造出美好的境界",
                "isCorrect": false,
                "explanation": "此為課文末段金句，說法正確。"
            },
            {
                "text": "與動物建立信賴關係完全不需花時間，第一天就能熟睡在肩上",
                "isCorrect": true,
                "explanation": "不正確！作者從掛上鳥籠、三個月後雛鳥出生，到小鳥敢一步步靠近、最後在肩上熟睡，經歷了長時間耐心的陪伴與等待。"
            },
            {
                "text": "給予對方安全感與不驚擾是信賴的基礎",
                "isCorrect": false,
                "explanation": "說法正確。"
            }
        ],
        "trap": "課文中運用許多表示時間與漸進的詞語（三個月後、起先、隨後、漸漸、再三），說明信賴需要「時間與耐心」慢慢培養。"
    },
    {
        "id": "q_exam_zx_text_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "寫作手法",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 2,
        "question": "【忠孝國小・課文文意第4題】下列哪一段文字所使用的開頭寫作手法，跟《登月先鋒》的第一段（「這是我的一小步，卻是人類的一大步。」……）很相似？",
        "options": [
            {
                "text": "「天下沒有不散的筵席。」這句話說明了我們應該珍惜每一次相聚的時光。（引用名言開頭法）",
                "isCorrect": true,
                "explanation": "正確！《登月先鋒》第一段開頭直接引用阿姆斯壯的名言：「這是我的一小步，卻是人類的一大步。」選項①同樣採用「引用名言／俗諺」作為開頭！"
            },
            {
                "text": "我一直在想，人和動物最大的不同是什麼？（提問開頭法）",
                "isCorrect": false,
                "explanation": "這是第五課〈哇！原來如此〉的疑問開頭法。"
            },
            {
                "text": "公車有專用道後，交通安全改善很多。（平敘開頭法）",
                "isCorrect": false,
                "explanation": "無引用。"
            },
            {
                "text": "賣東西的方法有很多種，像實體店、網路等。（列舉說明法）",
                "isCorrect": false,
                "explanation": "無引用。"
            }
        ],
        "trap": "比較各課開頭法：第五課用「設問（疑問）法」開頭；第六課用「引用名言＋倒敘法」開頭！"
    },
    {
        "id": "q_exam_zx_text_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 2,
        "question": "【忠孝國小・課文文意第5題】在《客至》這首詩裡，從客人到訪前（群鷗日日來、不曾緣客掃）到客人到訪後（今始為君開、隔籬呼取盡餘杯），詩人的心情有什麼變化？",
        "options": [
            {
                "text": "由孤寂期待變得熱烈喜悅",
                "isCorrect": true,
                "explanation": "正確！從平日水鳥相伴的清寂與期盼，轉變為貴客臨門、開門迎客、呼鄰共飲的無限喜悅與熱情！"
            },
            {
                "text": "從期待變成失望寂寞",
                "isCorrect": false,
                "explanation": "客人真的來了且把酒言歡，並非失望。"
            },
            {
                "text": "從生氣憤怒變成喜悅",
                "isCorrect": false,
                "explanation": "並無生氣憤怒。"
            },
            {
                "text": "從擔心害怕變成寂寞",
                "isCorrect": false,
                "explanation": "並無擔心害怕。"
            }
        ],
        "trap": "〈客至〉全詩情感脈絡：幽靜孤寂（首聯）➔ 驚喜迎客（頷聯）➔ 謙稱款待（頸聯）➔ 盡興歡飲（尾聯）。"
    },
    {
        "id": "q_exam_zx_text_6",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "課文文意",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 1,
        "question": "【忠孝國小・課文文意第6題】《在天晴了的時候》裡的「溪水在溫風中暈皺」，你認為這是什麼景象造成的？",
        "options": [
            {
                "text": "陽光和溪水互相拉扯",
                "isCorrect": false,
                "explanation": "非拉扯。"
            },
            {
                "text": "作者心情低落流淚",
                "isCorrect": false,
                "explanation": "作者心情愉悅。"
            },
            {
                "text": "溪水被泥土污染了",
                "isCorrect": false,
                "explanation": "非污染。"
            },
            {
                "text": "溫暖的輕風吹動水面，泛起陣陣漣漪波紋",
                "isCorrect": true,
                "explanation": "正確！溫和的微風吹拂溪水，使水面產生細微的波紋，看起來就像暈開皺起一樣。"
            }
        ],
        "trap": "「溫風」即溫和的微風，「暈皺」形容水波盪漾。"
    },
    {
        "id": "q_exam_zx_rhet_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "修辭辨析",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 1,
        "question": "【忠孝國小・修辭練習第1題】以下哪一句話使用了「設問」這種修辭手法？",
        "options": [
            {
                "text": "偶像明星在舞臺上載歌載舞。",
                "isCorrect": false,
                "explanation": "直述句。"
            },
            {
                "text": "你還想到哪些令你好奇的內容呢？",
                "isCorrect": true,
                "explanation": "正確！以疑問句向讀者發問，引發思考，屬於設問修辭。"
            },
            {
                "text": "有些職業我們耳熟能詳。",
                "isCorrect": false,
                "explanation": "直述句。"
            },
            {
                "text": "哇！原來如此。",
                "isCorrect": false,
                "explanation": "感嘆修辭。"
            }
        ],
        "trap": "注意句末標點與語氣：有問號「？」且提出問題的是設問；有驚嘆號「！」表達讚嘆的是感嘆。"
    },
    {
        "id": "q_exam_zx_rhet_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "短語結構",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 2,
        "question": "【忠孝國小・修辭練習第2題】下列哪一個選項和「大大小小的隕石坑」（AABB疊字形容詞＋的＋名詞）結構相同？",
        "options": [
            {
                "text": "高高興興的去打球",
                "isCorrect": false,
                "explanation": "「去打球」是動詞短語。"
            },
            {
                "text": "上上下下的爬樓梯",
                "isCorrect": false,
                "explanation": "「爬樓梯」是動詞短語。"
            },
            {
                "text": "寬寬鬆鬆的燕尾服",
                "isCorrect": true,
                "explanation": "正確！「寬寬鬆鬆（AABB）＋的＋燕尾服（名詞）」，與和順國小第6題考點完全一致！"
            },
            {
                "text": "香噴噴的異國料理",
                "isCorrect": false,
                "explanation": "「香噴噴」是ABB結構。"
            }
        ],
        "trap": "跨校必考題（和順國小與忠孝國小同時命題）：「大大小小的隕石坑」對「寬寬鬆鬆的燕尾服」！"
    },
    {
        "id": "q_exam_zx_rhet_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "修辭辨析",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 2,
        "question": "【忠孝國小・修辭練習第3題】以下句子「天色入暮，牠就在父母的再三呼喚聲中，飛向籠子，擺動滾圓的身子，擠開那些綠葉鑽進去。」主要使用了哪兩種修辭手法？",
        "options": [
            {
                "text": "擬人（父母的再三呼喚）、視覺摹寫（飛向籠子、擺動滾圓的身子、擠開綠葉鑽進去）",
                "isCorrect": true,
                "explanation": "正確！稱大鳥為「父母」並「再三呼喚」具有擬人色彩，而描寫小鳥「飛、擺動滾圓身子、擠開綠葉鑽進去」的一連串動作與外型則是生動的視覺摹寫（兼聽覺）。"
            },
            {
                "text": "誇飾、觸覺摹寫",
                "isCorrect": false,
                "explanation": "無誇飾與觸覺。"
            },
            {
                "text": "排比、味覺摹寫",
                "isCorrect": false,
                "explanation": "無排比與味覺。"
            },
            {
                "text": "誇飾、視覺摹寫",
                "isCorrect": false,
                "explanation": "無誇飾。"
            }
        ],
        "trap": "用刪去法即可秒殺：句中完全沒有「誇飾」也沒有「觸覺」，因此唯一正確的是①「擬人、視覺摹寫」！"
    },
    {
        "id": "q_exam_zx_contrast_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "映襯與對比句意",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 1,
        "question": "【忠孝國小・對比選詞第1題】\n題目：吃足苦頭後，攀上山頂的那瞬間，我被眼前華麗的萬縷金光吸引，身體像是被施了魔法般定格不動，內心卻在【　　】。（請填入適當詞語使句子具對比意涵）",
        "options": [
            {
                "label": "①",
                "text": "激動吶喊",
                "isCorrect": true,
                "explanation": "正確！句中「定格不動（外在身體的靜）」與轉折詞「卻」形成強烈映襯，內心是「激動吶喊（內在心理的動）」。"
            },
            {
                "label": "②",
                "text": "平靜無波",
                "isCorrect": false,
                "explanation": "「定格不動」與「平靜無波」同為平靜狀態，無法呼應「卻」所要求的對比轉折。"
            }
        ],
        "trap": "抓住轉折關鍵字「卻」：前半句「定格不動」，後半句就必須選對比的「激動吶喊」。"
    },
    {
        "id": "q_exam_zx_contrast_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "映襯與對比句意",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p2.png",
        "difficulty": 1,
        "question": "【忠孝國小・對比選詞第2題】\n題目：為了在雨季來臨前把工作完成，大家一有空就來幫忙，在豔陽底下揮汗如雨的工作著，而你卻總是一副【　　】的樣子，實在是不應該！",
        "options": [
            {
                "label": "①",
                "text": "暴跳如雷",
                "isCorrect": false,
                "explanation": "暴跳如雷形容非常生氣憤怒，與大家忙碌工作無合理對比關係。"
            },
            {
                "label": "②",
                "text": "悠閒自在",
                "isCorrect": true,
                "explanation": "正確！前半句「大家揮汗如雨忙碌工作」，由「而你卻」引出強烈對比，此處指「悠閒自在（偷懶閒適）」。"
            }
        ],
        "trap": "「大家揮汗如雨工作（勤勞忙碌）」vs「你悠閒自在（悠閒偷懶）」，構成鮮明對比。"
    },
    {
        "id": "q_exam_zx_read1_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（白話文）",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p3.png",
        "difficulty": 1,
        "question": "【忠孝國小・閱讀題組《小狗雪球》第1題】\n📖 短文：\n「自從家裡養了那隻米白色的小狗『雪球』後，生活變得熱鬧多了。每天放學回家，牠總會搖著尾巴來迎接我，好像在說：『你回來啦！』有時我心情不好，牠就靜靜地趴在我腳邊，彷彿在安慰我。雖然牠不會說話，但我總覺得牠能聽懂我的心情……」\n\n請問：「雪球」讓作者的生活有了什麼改變？",
        "options": [
            {
                "label": "①",
                "text": "變得更安靜",
                "isCorrect": false,
                "explanation": "與原文不符。"
            },
            {
                "label": "②",
                "text": "變得更忙碌",
                "isCorrect": false,
                "explanation": "文中首句明言更熱鬧。"
            },
            {
                "label": "③",
                "text": "變得更熱鬧",
                "isCorrect": true,
                "explanation": "正確！短文第一句明確寫道：「生活變得熱鬧多了」。"
            },
            {
                "label": "④",
                "text": "變得更孤單",
                "isCorrect": false,
                "explanation": "與原文相反。"
            }
        ],
        "trap": "直接看短文第一句：「生活變得熱鬧多了」。"
    },
    {
        "id": "q_exam_zx_read1_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（白話文）",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p3.png",
        "difficulty": 1,
        "question": "【忠孝國小・閱讀題組《小狗雪球》第2題】作者覺得小狗「雪球」能聽懂什麼？",
        "options": [
            {
                "label": "①",
                "text": "作者的話",
                "isCorrect": false,
                "explanation": "非具體的語言。"
            },
            {
                "label": "②",
                "text": "作者的心情",
                "isCorrect": true,
                "explanation": "正確！短文提到：「雖然牠不會說話，但我總覺得牠能聽懂我的心情。」"
            },
            {
                "label": "③",
                "text": "媽媽的命令",
                "isCorrect": false,
                "explanation": "文中未提及。"
            },
            {
                "label": "④",
                "text": "鄰居的聲音",
                "isCorrect": false,
                "explanation": "文中未提及。"
            }
        ],
        "trap": "短文第三句：「雖然牠不會說話，但我總覺得牠能聽懂我的心情。」"
    },
    {
        "id": "q_exam_zx_read1_3",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（白話文）",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p3.png",
        "difficulty": 1,
        "question": "【忠孝國小・閱讀題組《小狗雪球》第3題】作者從飼養寵物的過程中學到了什麼？",
        "options": [
            {
                "label": "①",
                "text": "要懂得節省時間",
                "isCorrect": false,
                "explanation": "照顧寵物反而要花時間梳毛洗澡散步。"
            },
            {
                "label": "②",
                "text": "要有責任心",
                "isCorrect": true,
                "explanation": "正確！媽媽常說：「飼養寵物不只是享受牠們的可愛，更重要的是要有責任心。」"
            },
            {
                "label": "③",
                "text": "要多玩遊戲",
                "isCorrect": false,
                "explanation": "非主旨。"
            },
            {
                "label": "④",
                "text": "要學會訓練動物",
                "isCorrect": false,
                "explanation": "非主旨。"
            }
        ],
        "trap": "媽媽的叮嚀：「更重要的是要有責任心」。"
    },
    {
        "id": "q_exam_zx_read1_4",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（白話文）",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p3.png",
        "difficulty": 1,
        "question": "【忠孝國小・閱讀題組《小狗雪球》第4題】短文中「牠們也想要被愛、被照顧」這句話最主要表達什麼意思？",
        "options": [
            {
                "label": "①",
                "text": "動物和人一樣需要關心",
                "isCorrect": true,
                "explanation": "正確！流浪動物和家寵一樣具有情感需求，渴望被人類關愛與照顧。"
            },
            {
                "label": "②",
                "text": "動物只想自由自在",
                "isCorrect": false,
                "explanation": "流浪動物也想擁有溫暖的家。"
            },
            {
                "label": "③",
                "text": "養寵物很辛苦",
                "isCorrect": false,
                "explanation": "偏離句意。"
            },
            {
                "label": "④",
                "text": "飼主應該嚴格訓練寵物",
                "isCorrect": false,
                "explanation": "偏離句意。"
            }
        ],
        "trap": "表達動物是有靈性與情感的生命，同樣需要人類的愛與尊重照顧。"
    },
    {
        "id": "q_exam_zx_read1_5",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（白話文）",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p3.png",
        "difficulty": 1,
        "question": "【忠孝國小・閱讀題組《小狗雪球》第5題】這篇短文最想傳達的中心理念是什麼？",
        "options": [
            {
                "label": "①",
                "text": "養寵物會讓人變得有錢",
                "isCorrect": false,
                "explanation": "荒謬選項。"
            },
            {
                "label": "②",
                "text": "養寵物只是為了好玩",
                "isCorrect": false,
                "explanation": "與媽媽說的「不能只享受可愛」相反。"
            },
            {
                "label": "③",
                "text": "要以領養代替購買",
                "isCorrect": false,
                "explanation": "文中有提到領養，但文章核心更宏觀在於責任心與用心照顧。"
            },
            {
                "label": "④",
                "text": "寵物是人類最好的朋友，要用心照顧牠們",
                "isCorrect": true,
                "explanation": "正確！飼養寵物要有持久的責任心，全心全意照顧並陪伴生命。"
            }
        ],
        "trap": "核心主旨：寵物是忠實的伴侶，飼養寵物是一輩子的責任與愛。"
    },
    {
        "id": "q_exam_zx_read2_1",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（跨域素養題）",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p3.png",
        "difficulty": 2,
        "question": "【忠孝國小・閱讀題組（二）《古人社群平臺發文》第1題】\n📱 想像古人也擁有社群平臺（FB／IG）：\n━━━━━━━━━━━━━━\n👤 **認真生活的中年郎**（星期六 上午10:24）\n「期待了很久，我的朋友就要來到家裡和我小聚！昨天花了一個下午清掃庭院和廊道，本來想到小鎮上的市集購買一些點心，但是路途太遠，只好作罷。於是我打開珍藏的酒甕，我朋友應該會喜歡，如果朋友願意，我也可約隔壁老鄰居一起同樂。」\n💬 **好友留言區**\n👉 **李大帥**：「下次約我一起！」\n━━━━━━━━━━━━━━\n\n請問貼文作者「認真生活的中年郎」與留言好友「李大帥」分別最可能是哪兩位唐代大詩人？",
        "options": [
            {
                "text": "李白 與 杜甫",
                "isCorrect": false,
                "explanation": "貼文內容是〈客至〉的白話改寫，作者應為杜甫而非李白。"
            },
            {
                "text": "孟浩然 與 李白",
                "isCorrect": false,
                "explanation": "〈客至〉非孟浩然所作。"
            },
            {
                "text": "杜甫 與 李白",
                "isCorrect": true,
                "explanation": "正確！貼文中「清掃庭院（花徑不曾緣客掃）、離市集太遠（盤飧市遠無兼味）、打開珍藏酒甕（樽酒家貧只舊醅）、約隔壁老鄰居同樂（肯與鄰翁相對飲）」完全就是第三課杜甫〈客至〉的內容！而杜甫最要好的詩仙好友正是「李白（李大帥）」！"
            },
            {
                "text": "杜甫 與 白居易",
                "isCorrect": false,
                "explanation": "留言者姓「李（李大帥）」，且白居易是中唐詩人，杜甫去世時白居易尚未出生。"
            }
        ],
        "trap": "超有創意的素養題！把第三課〈客至〉翻譯成現代 IG/FB 貼文，加上姓「李」的好友留言，秒推「杜甫與李白」！"
    },
    {
        "id": "q_exam_zx_read2_2",
        "lessonId": "EXAM_MID1",
        "unitId": "EXAM_MID1",
        "type": "mcq",
        "category": "閱讀理解（跨域素養題）",
        "batch": "段考真題",
        "school": "高雄市忠孝國小",
        "examPageImage": "images/exams/EXAM_MID1/zhongxiao_p3.png",
        "difficulty": 1,
        "question": "【忠孝國小・閱讀題組（二）《古人社群平臺發文》第2題】根據上一題社群動態的內容，「認真生活的中年郎」最有可能寫出下列哪一段詩句？",
        "options": [
            {
                "text": "黃沙百戰穿金甲，不破樓蘭終不還（王昌齡〈從軍行〉）",
                "isCorrect": false,
                "explanation": "這是邊塞征戰詩。"
            },
            {
                "text": "孤帆遠影碧山盡，唯見長江天際流（李白〈黃鶴樓送孟浩然之廣陵〉）",
                "isCorrect": false,
                "explanation": "這是送別詩。"
            },
            {
                "text": "花徑不曾緣客掃，蓬門今始為君開（杜甫〈客至〉）",
                "isCorrect": true,
                "explanation": "正確！貼文中「昨天花了一個下午清掃庭院和廊道，迎接期待已久的朋友」對應的正是「花徑不曾緣客掃，蓬門今始為君開」！"
            },
            {
                "text": "銀燭秋光冷畫屏，輕羅小扇撲流螢（杜牧〈秋夕〉）",
                "isCorrect": false,
                "explanation": "這是宮怨閨情詩。"
            }
        ],
        "trap": "貼文「清掃庭院迎接朋友」＝「花徑不曾緣客掃，蓬門今始為君開」。"
    }
];

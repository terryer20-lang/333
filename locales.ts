
export type LanguageCode = 'zh-MO';

export const LANGUAGE_LABELS: Record<LanguageCode, string> = {
  'zh-MO': '繁'
};

export const translations = {
  "zh-MO": {
    app: {
      title: "領事保護",
      copyright: "© 2024 澳門領事保護",
      placeholder: "內容建設中...",
      construction: "🚧",
      back: "返回"
    },
    menu: {
      title: "功能菜單",
      "star-challenge": "領保之星挑戰賽",
      "safety-test": "海外旅行安全指數",
      "going-abroad": "我即將出國",
      "overseas-help": "我在海外遇到困難",
      "emergency": "緊急求助專區",
      "consular-protection": "領事保護與協助",
      "resident-rights": "居民身份權利",
      "past-notifications": "往期推送",
      "graphics": "圖文包",
      "hot-knowledge": "領保燙知識",
      "events": "活動日程",
      "resources": "資源專區",
      "contact": "聯絡我們"
    },
    home: {
      hero: {
        protection: "領事保護",
        protection_sub: "Protection",
        rights: "居民權利",
        rights_sub: "Rights",
        alerts: "活動日程",
        alerts_sub: "Events",
        emergency: "資源專區",
        emergency_sub: "Resources",
        scroll: "下滑瀏覽更多"
      },
      quick: {
        help: "我在海外遇到困難",
        prepare: "我即將出國",
        test: "海外旅行安全指數小測試",
        graphics: "圖文包"
      },
      knowledge: {
        title: "領保燙知識",
        read: "閱讀",
        label: "知識"
      },
      notifications: {
        title: "通知",
        col_date: "日期",
        col_content: "標題",
        col_download: "詳情",
        more: "查看更多通知"
      }
    },
    help: {
      hero_title: "我在海外遇到困難",
      hero_desc: "在海外無論是留學、旅遊還是參加交流營，遇到困難時，請記住這些求助路徑與自身權益。",
      contacts_title: "救急必備：",
      contacts_desc: "遇到緊急情況（如人身安全受威脅、重大事故），請第一時間聯繫：",
      c_1: "中國外交部全球領事保護與服務應急呼叫中心熱線",
      c_1_sub: "24 小時開通，全方位支援",
      c_2: "中國外交部駐澳特派員公署領保熱線",
      c_3: "澳門特區治安警察局熱線",
      c_4: "澳門特區旅遊危機處理辦公室熱線",
      scenarios_title: "常見困境：行動指南",
      s_passport: "旅行證件遺失了？",
      s_accident: "生病或發生交通意外？",
      s_arrest: "被逮捕或拘留？",
      steps_passport: {
        1: { t: "報警", d: "立即向當地警察部門報案並取得報警證明。" },
        2: { t: "線上求助", d: "透過「一戶通」APP 的「海外求助—旅遊途中遺失證件」登記。" },
        3: { t: "補辦", d: "前往附近的中國駐外使領館申請補辦應急旅行證件。" }
      },
      steps_accident: {
        1: { t: "即時就醫", d: "撥打當地急救或火警電話，第一時間尋求救治。" },
        2: { t: "聯繫家人", d: "領事官員可協助聯繫在澳親屬。" },
        3: { t: "法律支援", d: "如涉及意外賠償，可請使領館提供當地律師名單（費用自理）。" }
      },
      steps_arrest: {
        1: { t: "要求見面", d: "你有權要求面見中國領事官員。" },
        2: { t: "權益保障", d: "領事官員可應要求進行領事探視，瞭解你的需求並保障人道待遇與公平待遇。" }
      },
      powers_title: "領事官員權力邊界",
      can_title: "✅ 可以為你做什麼？",
      cannot_title: "❌ 「不可以」做什麼？",
      can_list: [
        "突發事件：遇戰爭、災害時，敦促當地部門撤離或救助。",
        "經濟困難：財物失竊時，協助聯繫親友匯款。",
        "尋找親人：提供尋人管道與方式的資訊。"
      ],
      cannot_list: [
        "不介入糾紛：不介入私人財物、勞務或家庭糾紛。",
        "不代付費用：不代付醫療、交通、訴訟及任何個人費用。",
        "不干預司法：不干預駐在國的行政和司法行為，不為違法行為「買單」。",
        "不提供擔保：不為你購買商品、處理個人事務或租賃物品提供擔保。"
      ],
      tips_title: "求助小貼士",
      t_1_t: "如實告知",
      t_1_d: "求助時應如實提供個人資訊與事故經過，否則可能影響協助成效。",
      t_2_t: "保護隱私",
      t_2_d: "使領館在提供協助時會依法保護你的個人隱私。",
      t_3_t: "費用自理",
      t_3_d: "領事保護本身不收費，但求助期間產生的個人開支需由你承擔。"
    },
    protection: {
      hero_title: "領事保護與協助",
      hero_desc: "無論是留學、畢業旅行還是探親，當你遇到緊急情況時，祖國始終在你身後。",
      definition_title: "什麼是領事保護？",
      definition_desc: "當中國公民在海外正當權益受侵害或需幫助時，中國駐外使領館依法維護其權益的行為。",
      who_title: "誰能獲得幫助？",
      who_1_title: "澳門同胞",
      who_1_desc: "具有中國血統且出生在中國領土（含澳門）者，不論是否持有葡萄牙旅行證件，均為中國公民。",
      who_2_title: "中葡血統居民",
      who_2_desc: "可根據意願選擇國籍，選擇後享有相應權利。",
      scope_title: "領事官員能為你做什麼？",
      scope_subtitle: "職責範圍內的協助清單",
      tab_can: "✅ 可以做",
      tab_cannot: "❌ 不可以做",
      can_list: {
        1: { t: "緊急應變", d: "遇戰爭、災害時協助撤離或救助" },
        2: { t: "人身安全", d: "敦促當地警方公正處理案件" },
        3: { t: "探視權利", d: "被捕或拘留時進行領事探視" },
        4: { t: "文件補發", d: "遺失證件時協助簽發應急證件" },
        5: { t: "醫療法律", d: "提供當地醫生、律師翻譯名單" },
        6: { t: "聯繫家人", d: "協助聯絡在澳親屬" }
      },
      cannot_list: {
        1: { t: "經濟糾紛", d: "不可介入私人財務、勞務或合約糾紛" },
        2: { t: "代為報案", d: "不可代你報案或參與案件調查" },
        3: { t: "支付費用", d: "不可代付食宿、交通、醫療或訴訟費" },
        4: { t: "司法干預", d: "不可干預當地司法或為違法行為買單" },
        5: { t: "工作擔保", d: "不可為你找工作、申辦居留或擔保" }
      },
      checklist_title: "出發前必做 5 件事",
      checklist_items: {
        1: "檢查證件：確保護照有效期在 6 個月以上",
        2: "關注提醒：查詢「中國領事服務網」，留意安全預警",
        3: "備好保險：根據目的地風險購買合適保險",
        4: "留下日程：將行程發給家人，約定聯絡方式",
        5: "登記資訊：透過「中國領事」APP 登記個人資訊"
      },
      fraud_title: "警惕電信詐騙",
      fraud_subtitle: "留學生必看！",
      fraud_1_t: "假冒使領館",
      fraud_1_d: "聲稱涉刑事案或包裹被扣，要求轉賬至「安全賬戶」。使領館絕不會電話要求轉賬！",
      fraud_2_t: "虛擬綁架",
      fraud_2_d: "誘導切斷聯絡，再向家長索贖金。遇到此類情況應立即向警方核實。",
      footer_hotline: "外交部全球領保熱線"
    },
    rights: {
      hero_title: "澳門居民身份權利",
      hero_desc: "作為澳門居民，你的權利受到《中華人民共和國澳門特別行政區基本法》的全面保護。無論在本地生活或海外旅遊，了解自身權利是保護自己的第一步。",
      residents_title: "你是哪一類居民？",
      perm_title: "永久性居民",
      perm_desc: "享有澳門居留權，可自由進出澳門，不被施加逗留條件，不被驅逐出境。",
      non_perm_title: "非永久性居民",
      non_perm_desc: "不享有居留權，但依法領取澳門居民身份證。",
      core_title: "核心基本權利",
      core_subtitle: "基本法保障",
      rights_list: {
        freedom: { t: "人身與自由", d: "人身自由受保護，不受非法逮捕或搜查。" },
        speech: { t: "言論與結社", d: "享有言論、新聞、出版、集會及示威的自由。" },
        movement: { t: "遷徙與出入境", d: "享有遷徙自由，並可依法取得各種旅行證件（如特區護照），自由離開澳門無需特別批准。" },
        faith: { t: "信仰與文化", d: "享有宗教信仰自由，以及選擇職業、院校及出外求學的自由。" },
        judicial: { t: "司法保障", d: "有權訴諸法律，向法院提起訴訟並得到律師幫助。" },
        welfare: { t: "社會福利", d: "享有成立家庭、自願生育及依法享受社會福利與退休保障的權利。" }
      },
      overseas_title: "當你在海外：中國公民的身份權利",
      overseas_subtitle: "身份轉化：領事保護與協助",
      citizen_def: "誰是中國公民？",
      citizen_desc: "凡具有中國血統並出生在中國領土（含澳門）者，不論是否持有葡萄牙旅行證件，均為中國公民。",
      consular_right: "領事權利",
      consular_desc: "作為中國公民，你在海外享有請求中國政府提供領事保護的權利。",
      nationality_select: "國籍選擇",
      nationality_desc: "具中葡雙重血統的居民可根據意願選擇國籍，在選擇前享有基本法規定的權利（國籍限制者除外）。",
      passport_convenience: "旅行便利",
      passport_desc: "澳門居民有權領取特區護照，並在多國享有免簽證或落地簽證待遇。",
      duty_title: "權利與義務並行",
      duty_subtitle: "在享有廣泛權利的同時",
      duty_1: "遵守法律",
      duty_1_desc: "必須遵守澳门特别行政区实行的法律。",
      duty_2: "尊重他方",
      duty_2_desc: "在行使权利时，亦应尊重他人的合法权益。",
      tips_title: "溫馨提示：學生必知",
      tips_passport: "護照即身份",
      tips_passport_desc: "澳門特區護照是證明你中國國籍與澳門身份的重要證件。",
      tips_app: "海外聯繫",
      tips_app_desc: "建議出國前登錄「中國領事」APP 登記資訊，這是行使領事保護權利的便捷方式。"
    },
    emergency: {
      title: "外交部全球領事保護與服務\n應急熱線 (24小時)",
      call_btn: "一鍵呼叫",
      location_btn: "尋找附近使領館",
      locating: "正在獲取位置...",
      location_found: "位置已獲取",
      location_error: "無法獲取位置",
      location_unsupported: "您的瀏覽器不支持地理位置服務",
      tips_title: "求助須知",
      tip_1: "遭遇突發緊急情況時，請首先撥打當地報警電話。",
      tip_2: "如需領事協助，請撥打12308熱線。",
      tip_3: "丟失護照請立即向當地警方掛失並聯繫就近使領館補辦旅行證。",
      page_title: "緊急求助專區",
      page_subtitle: "海外遇險最強攻略",
      call_action: "點擊呼叫",
      copy_action: "複製",
      main_hotline_label: "中國外交部全球領事保護與服務應急呼叫中心熱線",
      main_hotline_desc: "24小時開通・全方位守護",
      local_hotlines_title: "澳門特區支援熱線",
      hotline_commissioner: "中國外交部駐澳特派員公署領保熱線",
      hotline_psp: "澳門特區治安警察局熱線",
      hotline_tourism: "澳門特區旅遊危機處理辦公室熱線",
      safety_kit_title: "安全工具包",
      kit_app_title: "中國領事 APP",
      kit_app_desc: "一鍵登記・緊急求助",
      kit_macau_title: "一戶通 APP",
      kit_macau_desc: "澳門居民・線上服務",
      lost_passport_title: "證件遺失處理流程",
      step_1_t: "立即報警",
      step_1_d: "取得報警證明備查",
      step_2_t: "線上求助",
      step_2_d: "一戶通「海外求助」登記",
      step_3_t: "前往使領館",
      step_3_d: "憑碼補辦旅行證件",
      step_4_t: "後續處理",
      step_4_d: "諮詢第三國簽證事宜"
    },
    events: {
      hero_label: "本月焦點",
      hero_title: "領保在職中",
      tab_all: "全部活動",
      tab_seminar: "講座",
      tab_online: "線上",
      tab_popup: "工作坊",
      status_hot: "熱門",
      status_new: "最新",
      btn_join: "立即報名",
      btn_full: "名額已滿",
      location: "地點",
      time: "時間",
      date: "日期"
    },
    challenge: {
      my_score: "我的積分",
      weekly_challenge: "每週挑戰",
      question_progress: "第 {{current}} / {{total}} 題",
      complete_title: "挑戰完成!",
      points_earned: "本次獲得積分",
      play_again: "再來一次",
      leaderboard_title: "本週排行榜",
      score_suffix: "分"
    },
    safety: {
      intro: "請勾選您已完成的準備事項，系統將評估您的出行安全指数。",
      generate_btn: "生成安全報告",
      result_title: "您的安全指数",
      subjects: {
        health: "健康準備",
        crime: "治安防範",
        political: "政策了解",
        contact: "緊急聯絡",
        docs: "證件備份"
      },
      suggestions: {
        passport: "⚠️ 強烈建議您備份護照首頁及簽證頁，並與原件分開存放。",
        insurance: "⚠️ 醫療費用在海外極其昂貴，請務必購買保險。",
        success: "🎉 您的準備工作非常充分，祝您旅途愉快！",
        title: "改進建議:"
      },
      retake_btn: "重新測試"
    },
    data: {
      notifications: {
        "1": "最新旅遊警示更新：東南亞地區",
        "2": "更換特區護照新規定說明會",
        "3": "2026年度領保之星招募計劃",
        "4": "聖誕假期海外出行安全提示"
      },
      knowledge: {
        "1": "如何遺失護照？",
        "2": "緊急聯絡方式",
        "3": "領事保護範圍"
      },
      quiz: {
        "1": {
          q: "在國外丟失護照，應該首先做什麼？",
          o: ["立即回國", "向當地警方報案並聯繫使領館", "在社交媒體發佈求助", "尋找當地華人社團"]
        },
        "2": {
          q: "外交部全球領事保護與服務應急熱線是多少？",
          o: ["12345", "110", "12308", "911"]
        }
      },
      safety_questions: {
        "1": "您是否購買了涵蓋醫療和意外的旅行保險？",
        "2": "您是否了解目的地的治安狀況和常見犯罪手段？",
        "3": "您是否了解目的地的急救電話和使領館聯繫方式？",
        "4": "您是否備份了護照和簽證複印件？",
        "5": "您是否登記了外交部'出國及海外中國公民自願登記'？"
      }
    },
    prepare: {
      hero_title: "平安出發，快樂回家！",
      hero_desc: "無論是畢業旅行還是海外升學，做好準備才能玩得開心、學得安心。這份清單請收好！",
      progress_title: "出行準備完成度",
      check_title: "出發前「必做」的 5 件事",
      check_1_t: "檢查證件",
      check_1_d: "確保護照有效期在 6 個月以上。複印護照首頁並拍照存檔。",
      check_2_t: "辦妥簽證",
      check_2_d: "確認目的地入境要求，確保簽證種類與目的相符，留意停留期限。",
      check_3_t: "備好保險",
      check_3_d: "國外醫療費昂貴，建議購買涵蓋海外醫療與人身意外的旅遊保險。",
      check_4_t: "查詢提醒",
      check_4_d: "登錄「中國領事服務網」查看目的地安全預警。",
      check_5_t: "留下聯繫",
      check_5_d: "將詳細行程發給家人，約定好聯繫方式，確保有人知道你在哪。",
      alerts_title: "目的地安全預警等級",
      alert_1: "注意安全",
      alert_2: "謹慎前往",
      alert_3: "暫勿前往",
      luggage_title: "海關小百科：別帶錯行李！",
      luggage_ok: "✅ 慎帶藥品",
      luggage_ok_desc: "攜帶處方藥入境建議帶備醫生處方或保留藥物原包裝。",
      luggage_no: "🚫 拒絕違禁",
      luggage_no_desc: "切勿為陌生人攜帶行李，嚴禁攜帶毒品、受保護動植物製品等。",
      fraud_title: "警惕電信詐騙",
      fraud_alert: "官方提醒",
      fraud_desc: "中國駐外使領館不會以電話通知你涉案，也不會要求轉賬匯款。接到此類電話請立即掛斷！"
    },
    resources: {
      hero_title: "領保資源庫",
      hero_subtitle: "你的海外安全數位背包",
      section_guide: "必備指南",
      guide_1_t: "2026 領保指南",
      guide_1_d: "海外出行聖經，一冊在手",
      guide_2_t: "應急聯絡卡",
      guide_2_d: "長按保存至相冊",
      guide_3_t: "求助流程圖",
      guide_3_d: "一圖看懂如何求助",
      section_visuals: "圖解領保",
      visual_1: "護照遺失怎麼辦？",
      visual_2: "遇到電信詐騙？",
      visual_3: "各國緊急電話",
      section_video: "影音專區",
      video_main_t: "平安回家：領保伴你行",
      video_sub: "觀看次數：1.2M",
      section_links: "官方傳送門",
      link_mfa: "外交部領事服務網",
      link_macau: "澳門身份證明局",
      link_tourism: "旅遊危機辦",
      download_btn: "立即下載",
      watch_btn: "點擊觀看"
    },
    graphics: {
      hero_title: "圖解領保",
      hero_subtitle: "複雜資訊，一張圖看懂",
      filter_all: "全部",
      filter_passport: "證件辦理",
      filter_safety: "安全提醒",
      filter_fraud: "防騙指南",
      filter_emergency: "緊急求助",
      item_1_title: "護照遺失全流程",
      item_1_desc: "別慌！跟著這張圖做，3步搞定補辦。",
      item_2_title: "海外電信詐騙圖鑑",
      item_2_desc: "這 5 種電話千萬別接！",
      item_3_title: "緊急求助電話壁紙",
      item_3_desc: "長按保存，關鍵時刻能救命。",
      item_4_title: "行李違禁品清單",
      item_4_desc: "出發前必看，避免海關扣留。",
      item_5_title: "領事官員能做什麼？",
      item_5_desc: "權力邊界一圖清。",
      item_6_title: "各國小費文化",
      item_6_desc: "避免尷尬，這份攻略請收好。",
      view_btn: "點擊查看",
      save_btn: "保存"
    },
    notifications_page: {
      hero_title: "往期推送",
      hero_subtitle: "安全資訊・隨時回溯",
      search_placeholder: "搜索關鍵詞...",
      stats_total: "累計推送",
      stats_alerts: "安全預警",
      stats_tips: "實用貼士",
      filter_all: "全部",
      filter_alert: "預警",
      filter_news: "新聞",
      filter_activity: "活動",
      empty_search: "未找到相關內容",
      read_more: "閱讀全文",
      heatmap_title: "發佈頻率",
      
      // Mock Data Titles/Snippets
      item_1_title: "關於防範電信詐騙的緊急提醒",
      item_1_desc: "近期針對留學生的新型電信詐騙頻發，請務必提高警惕，切勿輕信陌生來電。",
      item_2_title: "更換特區護照新規定說明會回顧",
      item_2_desc: "錯過了直播？點擊查看關於2025年特區護照更換的重點摘要及Q&A。",
      item_3_title: "2026年度「領保之星」招募計劃啟動",
      item_3_desc: "如果你熱愛傳播安全知識，歡迎加入我們，成為校園領保宣傳大使！",
      item_4_title: "聖誕假期海外出行安全提示",
      item_4_desc: "聖誕將至，歐洲多地人流密集，請注意保管財物並遠離示威區域。",
      item_5_title: "駐外使領館假期辦公時間調整",
      item_5_desc: "請留意春節期間各駐外使領館的證件辦理時間變動通知。",
      item_6_title: "日本地震災區安全指引",
      item_6_desc: "如身處受影響地區，請遵循當地政府指引，保持通訊暢通。"
    },
    hot_knowledge: {
      hero_title: "領保燙知識",
      hero_subtitle: "Freshly Served 🔥",
      deck_title: "知識翻轉牌",
      deck_desc: "點擊卡牌查看真相",
      myth_title: "真相探測器",
      myth_desc: "是真是假？測測你的直覺",
      myth_true: "真相 (True)",
      myth_false: "謠言 (Fake)",
      tags_title: "熱搜關鍵詞",
      
      // Flashcards
      card_1_q: "使館能幫我「撈人」嗎？",
      card_1_a: "No！🙅 領事官員可以探視，但不能干預當地司法程序。",
      card_2_q: "護照丟了能直接回國嗎？",
      card_2_a: "不行！🛂 必須先到使領館補辦「旅行證」才能登機。",
      card_3_q: "沒錢了使館能借錢嗎？",
      card_3_a: "通常不能。🚫 僅在極特殊情況下提供臨時墊付（需簽署還款協議）。",
      card_4_q: "能幫我找工作嗎？",
      card_4_a: "不能。💼 領事保護不包括介紹工作或申辦居留。",
      
      // Myth Busters
      myth_1_q: "「中國領事」APP 可以直接辦護照？",
      myth_1_ans: "沒錯！📱 現已支持線上申請，無需親自到場排隊。",
      myth_1_correct: "true",
      
      myth_2_q: "在國外犯法，躲進使館就沒事了？",
      myth_2_ans: "大錯特錯！🚫 使館不是法外之地，不能庇護犯罪嫌疑人。",
      myth_2_correct: "false",
      
      myth_3_q: "領事保護服務是完全免費的？",
      myth_3_ans: "是的！✨ 領事官員的服務不收費，但辦證規費或第三方費用（如律師）需自理。",
      myth_3_correct: "true"
    },
    contact: {
      hero_title: "保持聯絡",
      hero_subtitle: "Always Connected 🌐",
      emergency_title: "緊急求助",
      office_title: "辦公室資訊",
      social_title: "關注我們",
      feedback_title: "意見反饋",
      dept_name: "澳門特別行政區政府\n身份證明局",
      dept_address: "澳門南灣大馬路804號中華廣場1樓",
      office_hours: "辦公時間：週一至週五 09:00 - 18:00",
      phone_label: "電話",
      email_label: "電郵",
      fax_label: "傳真",
      form_name: "您的稱呼",
      form_email: "聯絡電郵",
      form_message: "想對我們說...",
      form_submit: "發送訊息",
      success_message: "收到您的訊息！我們會盡快回覆。",
      social_wechat: "微信公眾號",
      social_facebook: "Facebook 專頁",
      copy_success: "已複製"
    }
  }
};

const originalText = `최근 인공지능 과금 정책을 보면 예전 386-486 이 시대가 생각 난다. 고등학교때 친구 부모가 386DX 컴퓨터 사면서 티코 차 가격이다라고 하면서 사준적이 있다. 이때 나는 아직도 XT를 쓰면서 PC통신만하고 실제 작동 고사양 PC 는 친구 집에서 썼다.(컴퓨터 가르켜준다고 하면서) 최근 claude, chatgpt 등 높은 과금률로 경쟁하고 있다. 수요가 있으나 당연하지만 조금만 지나면 보편적 기술이 되면 일반인들이 대중적으로 쓸만한 보편화 된 환경이 조성 될거라 본다. 특히 cloud 기반이 아닌 온디바이스 환경에서 높은 성능을 발휘하는 생태계가 예상 된다. 구글도 과금 정책을 흉내내고는 있다. 단지 차이는 최근 Gemma4 처럼 온디바이스 환경과 자체 TPU 환경의 최적화 양자컴퓨팅의 접근이 두드려진다. 살아남느냐를 따지는 앤트로픽이나 openai와 다르게 구글은 기존 생태계를 천천히 이동하는 핵심적 전환을 모색하는게 눈에 보인다. 인공지능 시장은 아마도 이러한 움직의 변혁기이며 보다 혁신적인 방향이 나올시기임에 틀림 없다. 지금은 왠지 억지로 GPU 태우고 빠른 속도 높은 성능으로 경쟁하는 F1 레이스 같은 느낌이다. 빠른게 답이 아니고 좋은 퀄리티는 기름을 태우듯 사양에 의존하는 것이 아니다 이전에도 그랬고 지금도 알고리즘의 시대가 도래되고 있다. 지금의 AI는 소모성이 큰 생존이란 핑계의 소모적 경쟁일뿐이다. 깊은 호흡이 필요하면 보다 혁신적인 방향이 조만간 나올 것인다.`;

const generatedFullTexts = [
  {
    id: "A안",
    model: "Gemini 3.1 Pro",
    label: "A안 Gemini 3.1 Pro",
    title: "AI 과금 전쟁과 386 컴퓨터: 우리는 지금 GPU를 태우는 F1 레이스에 서 있다",
    accent: "#2f5fb8",
    blocks: [
      ["p", "최근 쏟아지는 인공지능(AI) 서비스들의 과금 정책을 보고 있노라면, 불현듯 나의 고등학교 시절 386, 486 컴퓨터 시대가 떠오른다."],
      ["p", "당시 친구 부모님이 386DX 컴퓨터를 사주셨는데, 그 가격이 무려 '티코(Tico)' 자동차 한 대 값과 맞먹었다. 나는 여전히 구형 XT 컴퓨터로 텍스트 기반의 PC통신만 겨우 하던 시절이었다. 그래서 \"컴퓨터 가르쳐 줄게!\"라는 핑계로 친구 집에 놀러 가, 그 비싸고 좋은 고사양 PC를 내 것처럼 썼던 기억이 선명하다."],
      ["p", "지금의 AI 시장이 딱 그 시절을 닮아 있다."],
      ["h4", "고비용 AI 시대, 대중화를 향한 과도기"],
      ["p", "최근 Claude, ChatGPT 등 내로라하는 AI 모델들이 높은 과금률을 무기로 경쟁하고 있다. 하지만 과거 엄청난 고가였던 386 컴퓨터가 결국 집집마다 보급되었듯, 이 높은 진입 장벽도 일시적인 현상일 뿐이다."],
      ["p", "수요가 폭발적인 만큼 조금만 시간이 지나면 AI도 보편적 기술이 될 것이고, 일반인들이 부담 없이 대중적으로 쓸 수 있는 환경이 반드시 조성될 것이다. 특히 무겁고 값비싼 클라우드 기반에서 벗어나, 내 기기 안에서 직접 구동되며 높은 성능을 발휘하는 온디바이스(On-Device) 생태계로의 전환이 그 핵심이 될 것으로 예상한다."],
      ["h4", "생존을 건 스타트업 vs 생태계를 옮기는 거인"],
      ["p", "구글(Google) 역시 겉으로는 이러한 구독형 과금 정책을 흉내 내는 것처럼 보인다. 하지만 그 속내와 전략의 결은 확실히 다르다."],
      ["p", "살아남느냐 마느냐의 기로에서 모델 성능 자체에 사활을 거는 앤트로픽(Anthropic)이나 오픈AI(OpenAI)와 달리, 구글은 기존의 거대한 생태계를 AI 중심으로 천천히, 그러나 확실하게 이동시키는 '핵심적 전환'을 모색하고 있다. 최근의 전략들을 살펴보면 온디바이스 환경의 최적화, 자체 AI 반도체인 TPU 인프라 활용, 나아가 양자컴퓨팅으로의 접근까지 그 움직임이 매우 두드러진다."],
      ["h4", "기름을 태우는 F1 레이스에서 '알고리즘의 시대'로"],
      ["p", "인공지능 시장은 지금 거대한 변혁기를 지나고 있으며, 조만간 보다 혁신적인 방향성이 등장할 시기임이 틀림없다. 지금의 AI 경쟁을 보고 있으면, 왠지 억지로 막대한 GPU를 태우며 오직 '빠른 속도'와 '높은 스펙'으로만 승부하려는 F1 레이스 같다는 인상을 지울 수 없다."],
      ["p", "하지만 빠른 것이 항상 정답은 아니며, 진정한 퀄리티는 기름을 태우듯 하드웨어 사양에만 의존해서 얻어지는 것이 아니다. 이전 컴퓨터 공학의 역사가 늘 그래왔듯, 무식한 체급 경쟁이 한계에 부딪히면 결국 '알고리즘의 시대'가 다시 도래한다."],
      ["h4", "마치며: 깊은 호흡이 필요한 시점"],
      ["p", "지금 AI 업계가 보여주는 모습은 거대한 자본이 동반된, 생존이라는 핑계 아래 벌어지는 소모적 경쟁에 가깝다. 이제는 얕은 숨을 헐떡이는 맹목적인 속도전에서 벗어나 '깊은 호흡'이 필요한 시점이다. 거품이 걷히고 효율과 알고리즘이 본질이 되는 순간, 우리가 진정으로 기다려온 혁신적인 AI의 미래가 눈앞에 펼쳐질 것이다."],
    ],
  },
  {
    id: "B안",
    model: "ChatGPT 5.5",
    label: "B안 ChatGPT 5.5",
    title: "지금의 AI 경쟁은 386 시대를 닮았다",
    accent: "#087a6a",
    blocks: [
      ["p", "최근 인공지능 서비스의 과금 정책을 보고 있으면, 문득 386과 486 컴퓨터가 막 보급되던 시절이 떠오른다. 고등학교 때 친구 부모님이 386DX 컴퓨터를 사주면서 “티코 한 대 값”이라고 말씀하셨던 기억이 난다. 나는 그때 아직 XT 컴퓨터로 PC통신을 하던 시절이었다. 고사양 프로그램을 제대로 돌려보려면 친구 집에 가야 했다. 겉으로는 “컴퓨터를 배운다”는 명분이었지만, 사실상 그곳이 당시 내가 접할 수 있는 최신 컴퓨팅 환경이었다."],
      ["p", "지금의 인공지능 시장도 어딘가 그 시절과 비슷해 보인다. Claude, ChatGPT 같은 주요 서비스들은 더 높은 성능과 더 많은 사용량을 내세우며 점점 비싼 요금제를 경쟁적으로 내놓고 있다. 수요가 있으니 자연스러운 흐름이다. 다만 이 장면이 영원히 지속되리라고 보기는 어렵다. 조금만 시간이 지나면, 지금 일부 사용자만 적극적으로 누리는 고성능 AI 환경도 결국은 더 넓은 대중이 일상적으로 쓰는 보편 기술로 내려올 가능성이 크다."],
      ["p", "특히 눈여겨볼 지점은 클라우드 중심 AI에서 온디바이스 AI로의 이동이다. 지금은 거대한 서버와 GPU를 바탕으로 인공지능을 호출하는 방식이 중심이지만, 앞으로는 개인의 기기 안에서 상당한 수준의 AI가 직접 작동하는 환경이 점점 강해질 것이다. 이는 단순한 편의성의 문제가 아니다. 비용, 속도, 보안, 접근성까지 모두 바꾸는 변화다."],
      ["p", "구글의 움직임은 이런 점에서 흥미롭다. 구글도 당연히 유료 AI 서비스를 확대하고 있다. 그러나 그것만 하고 있는 것은 아니다. Gemma 계열과 같은 경량 모델, 안드로이드 생태계, 자체 TPU 인프라, 그리고 장기적인 차세대 컴퓨팅 연구까지 함께 밀고 있다. 말하자면 단기 과금 경쟁에만 매달리기보다는, 자사의 기존 생태계를 인공지능 중심으로 천천히 재편하는 쪽에 가깝다."],
      ["p", "앤트로픽이나 오픈AI가 지금 당장의 수익성과 생존성, 압도적인 모델 성능 경쟁에 더 민감할 수밖에 없다면, 구글은 조금 다른 위치에 있다. 검색, 모바일 운영체제, 클라우드, 칩, 서비스 플랫폼까지 이미 거대한 생활권을 갖고 있기 때문이다. 그런 면에서 구글은 “AI 서비스를 하나 더 판다”기보다, 기존 생태계를 AI 시대에 맞게 이동시키는 전환 전략을 취하고 있다고 보는 편이 더 정확해 보인다."],
      ["p", "지금의 AI 시장은 분명 변혁기다. 그리고 이 변혁기의 풍경은 때로 지나치게 소모적이다. 거대한 GPU 자원을 태우고, 더 빠르게 답하고, 더 많은 파라미터를 동원하고, 더 높은 벤치마크 숫자를 내는 경쟁이 이어진다. 마치 F1 레이스 같다. 빠름이 곧 승리처럼 보이고, 연료를 얼마나 많이 태울 수 있는지가 곧 힘처럼 여겨진다."],
      ["p", "하지만 빠른 것이 언제나 정답은 아니다. 좋은 품질이 반드시 더 많은 연산 자원에만 의존하는 것도 아니다. 이전의 컴퓨팅 역사도 그랬다. 무식하게 자원을 늘리는 단계가 지나면, 결국 승부는 더 정교한 구조와 더 나은 알고리즘, 더 효율적인 설계로 넘어간다. 지금도 마찬가지다. 앞으로의 AI는 단지 더 거대해지는 방향이 아니라, 더 적은 자원으로 더 높은 가치를 만드는 방향으로 진화할 수밖에 없다."],
      ["p", "그래서 지금의 AI 경쟁이 때로는 “생존”이라는 이름을 내건 소모전처럼 보이기도 한다. 물론 현재의 경쟁이 무의미하다는 뜻은 아니다. 이 과열된 구간을 통과하며 기술은 빠르게 성숙하고 있다. 다만 이 흐름이 영원히 계속되지는 않을 것이다. 어느 순간 산업은 숨을 고를 것이고, 그때부터는 속도보다 방향, 규모보다 효율, 단기적 과금보다 장기적 생태계가 더 중요해질 가능성이 크다."],
      ["p", "인공지능은 이제 막 대중화의 입구를 지나고 있다. 지금은 아직 비싸고 거칠고, 때로는 과잉 경쟁의 냄새도 난다. 하지만 언젠가 고성능 PC가 생활 속으로 들어왔듯, AI 역시 더욱 자연스럽고 저렴하며, 기기 속에 스며든 보편적 지능 환경으로 자리 잡게 될 것이다."],
      ["p", "지금 필요한 것은 무작정 더 세게 달리는 일이 아니라, 조금 더 깊게 호흡하며 다음 시대의 방향을 보는 일인지도 모른다."],
    ],
  },
  {
    id: "C안",
    model: "Opus 4.6",
    label: "C안 Opus 4.6",
    title: "GPU를 태우는 시대, 그 너머를 본다",
    accent: "#b66a00",
    blocks: [
      ["h4", "386 시절 티코 값짜리 컴퓨터, 그리고 지금의 AI 구독료"],
      ["p", "고등학교 시절, 친구 부모님이 386DX 컴퓨터를 사 주셨다. 가격이 티코 한 대 값이었다. 당시 나는 여전히 XT를 쓰며 PC통신이나 하고 있었고, 실제로 고사양이 필요한 작업은 친구 집에 가서 해결했다. \"컴퓨터 가르쳐준다\"는 명목으로 말이다."],
      ["p", "지금의 AI 시장을 보면 묘하게 그 시절이 겹쳐 보인다."],
      ["p", "Claude, ChatGPT 등 주요 AI 서비스들은 높은 과금 정책으로 경쟁 중이다. 수요가 있으니 당연한 일이다. 그러나 조금만 시간이 지나면 이 기술도 결국 보편화될 것이다. 386이 그랬고, 인터넷이 그랬고, 스마트폰이 그랬다. 일반 사용자들이 부담 없이 쓸 수 있는 대중적 환경은 반드시 온다."],
      ["p", "특히 주목할 부분은 클라우드 기반이 아닌 온디바이스 환경이다. 서버에 의존하지 않고도 높은 성능을 발휘하는 생태계가 머지않아 현실이 될 것으로 본다."],
      ["h4", "구글은 왜 다르게 움직이는가"],
      ["p", "구글도 유료화 정책을 내놓고 있다. 겉보기엔 Anthropic이나 OpenAI와 비슷해 보인다. 그러나 속을 들여다보면 움직임의 결이 다르다."],
      ["p", "최근 Gemma 3, Gemma 4 시리즈에서 드러나듯, 구글은 온디바이스 최적화에 공을 들이고 있다. 자체 설계한 TPU 환경과의 긴밀한 통합, 그리고 양자컴퓨팅으로의 접근이 점점 뚜렷해지고 있다. \"살아남느냐 마느냐\"를 놓고 전력 질주하는 Anthropic이나 OpenAI와 달리, 구글은 검색·Android·Chrome·Cloud라는 기존 생태계를 AI 중심으로 천천히, 그러나 확실하게 전환하는 모습이다."],
      ["p", "이 차이는 작아 보이지만 본질적이다. 하나는 생존을 건 스프린트이고, 다른 하나는 체질 전환을 위한 마라톤이다."],
      ["h4", "F1 레이스 같은 AI 경쟁, 빠른 게 답일까"],
      ["p", "솔직히 지금의 AI 시장은 F1 레이스 같다. GPU를 최대한 태우고, 더 빠른 속도, 더 높은 벤치마크 점수를 내세우며 경쟁한다. 화려하고 빠르다. 그런데 빠른 것이 곧 좋은 것인가?"],
      ["p", "좋은 퀄리티는 기름을 들이붓듯 하드웨어 사양에 의존하는 것만으로 나오지 않는다. 이전에도 그랬다. 386 시대에도, 닷컴 버블 시절에도, 결국 살아남은 것은 더 큰 서버가 아니라 더 나은 알고리즘이었다."],
      ["p", "지금도 마찬가지다. MoE(Mixture of Experts), 지식 증류(Knowledge Distillation), 양자화(Quantization) 같은 효율화 기술이 빠르게 발전하고 있다. 같은 성능을 절반의 연산으로 달성하는 시대가 오고 있다. 알고리즘의 시대는 이미 문을 두드리고 있다."],
      ["h4", "소모적 경쟁을 넘어, 깊은 호흡이 필요한 때"],
      ["p", "지금의 AI 경쟁은 솔직히 말해 소모적이다. 생존이라는 명분 아래, 더 크고 더 비싼 모델을 내놓는 데 자원을 쏟아붓고 있다. 물론 이 과정에서 축적되는 기술 자산의 가치를 부정할 수는 없다. F1 레이스에서 개발된 기술이 결국 양산차에 내려오는 것처럼, 지금의 투자가 미래 효율화의 토대가 되는 측면은 분명 있다."],
      ["p", "그러나 방향 자체에 대한 질문은 해야 한다."],
      ["p", "인공지능 시장은 지금 분명 변혁기에 놓여 있다. 클라우드 종속에서 온디바이스로, 사양 경쟁에서 알고리즘 효율화로, 폐쇄적 고가 모델에서 보편적 접근으로. 이 전환은 이미 시작되었고, 깊은 호흡으로 바라보는 자가 결국 더 멀리 갈 것이다."],
      ["p", "더 빠른 차가 아니라, 더 좋은 길을 찾는 사람이 이기는 법이다."],
      ["p", "XT로 PC통신을 하던 그 시절, 386DX는 꿈의 기계였다. 지금의 GPT-4나 Claude Opus도 언젠가는 그런 추억이 될 것이다. 그때가 오면, 우리는 무엇으로 경쟁하고 있을까."],
    ],
  },
];

const rubricData = [
  { label: "구조 명확성", weight: 86, text: "평가표와 설명이 한눈에 읽히는지 확인합니다." },
  { label: "균형감", weight: 88, text: "원안 보존과 게시 적합성을 공정하게 함께 봅니다." },
  { label: "실행 가능성", weight: 91, text: "최종 게시본 선택과 수정 방향에 바로 쓸 수 있는지 봅니다." },
  { label: "뉘앙스 분석력", weight: 95, text: "화자의 어조, 문체 변화, 손실된 표현을 짚는지 봅니다." },
  { label: "설득력", weight: 91, text: "점수와 설명이 서로 일관되고 납득 가능한지 봅니다." },
];

const draftData = [
  {
    id: "A안",
    model: "Gemini 3.1 Pro",
    title: "AI 과금 전쟁과 386 컴퓨터",
    type: "핵심 요약형",
    accent: "#2f5fb8",
    tagBg: "#e9f0ff",
    tagInk: "#2f5fb8",
    summary: "소제목과 결론이 명확한 구조로 원안의 메시지를 빠르게 전달합니다. 대중 독자가 짧은 시간에 핵심을 파악하기 좋습니다.",
    tags: ["구조화", "강한 제목", "빠른 전달"],
    strengths: ["문단 구분과 제목이 뚜렷함", "F1 레이스 비유를 직관적으로 강조"],
    caveat: "원안의 거친 뉘앙스와 기술적 균형감은 상대적으로 단순화됩니다.",
  },
  {
    id: "B안",
    model: "ChatGPT 5.5",
    title: "지금의 AI 경쟁은 386 시대를 닮았다",
    type: "균형형 게시본",
    accent: "#087a6a",
    tagBg: "#e7f5f2",
    tagInk: "#087a6a",
    summary: "원안의 문제의식을 보존하면서 문장 호흡, 사실 보정, 논리 흐름을 안정적으로 다듬은 게시용 후보입니다.",
    tags: ["원안 보존", "논리 균형", "게시 적합"],
    strengths: ["회상에서 시장 진단으로 이어지는 흐름이 자연스러움", "과도한 단정을 줄이고 독자 신뢰를 높임"],
    caveat: "칼럼형 인상이나 마지막 문장의 강한 여운은 C안보다 약합니다.",
  },
  {
    id: "C안",
    model: "Opus 4.6",
    title: "GPU를 태우는 시대, 그 너머를 본다",
    type: "심층 칼럼형",
    accent: "#b66a00",
    tagBg: "#fff3df",
    tagInk: "#b66a00",
    summary: "기술 용어와 비유를 확장해 분석 칼럼처럼 읽히게 만든 결과물입니다. 제목과 결말의 인상이 강합니다.",
    tags: ["칼럼성", "기술 해설", "결말 여운"],
    strengths: ["온디바이스, TPU, 효율화 기술을 더 풍부하게 연결", "질문형 소제목과 마무리 문단의 흡입력이 좋음"],
    caveat: "해설이 확장되면서 원안의 직접적이고 거친 화자성이 일부 이동합니다.",
  },
];

const evaluationTables = [
  {
    title: "Gemini 3.1 Pro 평가표",
    subtitle: "구조화, 전문성, 결론의 힘을 중심으로 C안을 가장 높게 평가",
    tables: [
      {
        headers: ["평가 항목", "원안", "A안", "B안", "C안", "항목별 평가 기준"],
        rows: [
          ["가독성 및 구조화", "4", "9", "6", "9", "소제목 활용, 문단 나누기, 독자의 시선 유도 등 시각적 스캐닝의 용이성"],
          ["스토리텔링 (도입부)", "6", "8", "8", "9", "386 컴퓨터라는 과거의 경험을 현재의 AI로 자연스럽게 연결하는 서사적 몰입도"],
          ["인사이트 및 전문성", "7", "6", "8", "10", "현업의 구체적 기술 용어(Gemma, TPU 등) 사용 및 기업 간 전략 비교의 깊이"],
          ["메시지 전달력 (결론)", "6", "8", "7", "9", "'알고리즘과 효율의 시대'라는 핵심 주제가 결론에서 얼마나 강력하게 맺어지는가"],
          ["총점 (평균)", "5.75", "7.75", "7.25", "9.25", ""],
        ],
      },
    ],
    notes: [
      "원안은 핵심 인사이트가 응축된 훌륭한 초안이지만 단락 구분과 문장 정리가 부족하다고 평가했습니다.",
      "A안은 빠르고 강렬한 전달, B안은 부드러운 에세이형 전달, C안은 전문성과 논리 구조가 가장 강한 안으로 구분했습니다.",
    ],
  },
  {
    title: "ChatGPT 5.5 평가표",
    subtitle: "게시 적합성, 사실 보정, 논리 균형을 기준으로 B안을 최종 추천",
    tables: [
      {
        headers: ["평가 항목", "원안", "A안", "B안", "C안", "분석"],
        rows: [
          ["핵심 취지 반영", "10", "9", "9", "8", "원안이 문제의식의 원형을 가장 직접적으로 담고 있음. B안은 취지를 거의 훼손하지 않고 정리"],
          ["원문 뉘앙스 보존", "10", "9", "8", "8", "원안은 화자의 감정과 직설성이 그대로 살아 있음. A안이 가장 근접"],
          ["사실 보정의 적절성", "4", "5", "9", "7", "원안은 기술 개념들이 압축적으로 섞여 있어 보정 필요. B안이 가장 안정적"],
          ["문장 완성도", "5", "8", "9", "9", "원안은 구술체적 힘은 있으나 문장 호흡이 거칠음. B와 C는 게시용 완성도가 높음"],
          ["논리 전개의 균형", "6", "7", "9", "8", "B안이 회상→시장 진단→구글 전략→AI 경쟁 비판으로 가장 안정적"],
          ["블로그 독자 친화성", "6", "7", "9", "9", "B안은 편안하고 설득력 있게 읽힘. C안은 흡입력과 구성미가 강함"],
          ["칼럼성·인상도", "8", "8", "8", "9", "C안이 제목, 비유, 결말에서 가장 강한 인상을 남김"],
          ["최종 게시 적합성", "5", "6", "9", "8", "원안은 초안 가치가 크고, B안은 실제 게시본으로 가장 적합"],
          ["총점", "54/80", "59/80", "70/80", "66/80", ""],
          ["평균", "6.8", "7.4", "8.8", "8.3", ""],
        ],
      },
      {
        caption: "종합 순위",
        headers: ["순위", "안", "평가"],
        rows: [
          ["1", "B안", "화자의 취지를 살리면서도 사실 보정, 논리성, 게시 적합성이 가장 우수"],
          ["2", "C안", "칼럼성과 문장 인상도는 가장 좋지만, 원안보다 해설이 더 확장됨"],
          ["3", "A안", "원문의 열기와 직설성을 잘 보존했으나 보정이 상대적으로 약함"],
          ["4", "원안", "사유의 원형과 개성이 가장 강하지만, 게시용 글로는 정리와 사실 보정이 필요"],
        ],
      },
      {
        caption: "안별 성격 정리",
        headers: ["안", "성격"],
        rows: [
          ["원안", "날것의 문제의식과 직관이 살아 있는 최초 발화"],
          ["A안", "원안의 감정과 공격성을 최대한 유지한 정리본"],
          ["B안", "원안의 취지를 보존하면서 가장 정제된 블로그 게시본"],
          ["C안", "원안을 토대로 더 세련되게 확장한 칼럼형 버전"],
        ],
      },
    ],
    notes: [
      "B안은 원안의 핵심 논지를 가장 정확히 보존하면서 단정적인 표현을 줄였습니다.",
      "최종 게시본은 B안을 기본으로 삼고 C안의 제목 감각과 마지막 여운을 일부 차용하는 조합을 권장했습니다.",
    ],
  },
  {
    title: "Opus 4.6 평가표",
    subtitle: "원문 뉘앙스와 매체 적합성의 교환 관계를 가장 세밀하게 분석",
    tables: [
      {
        headers: ["평가 항목", "원안", "A안", "B안", "C안"],
        rows: [
          ["도입부 서사력 개인 경험의 흡인력", "7", "8", "9", "7"],
          ["원문 뉘앙스 보존 화자 고유의 어조 유지", "10", "6", "8", "7"],
          ["논리 구조 주장의 전개 흐름", "4", "8", "9", "8"],
          ["문장 완성도 문법·어휘·표현 정제도", "3", "9", "8", "8"],
          ["설득력 근거와 주장의 밀도", "5", "7", "9", "8"],
          ["블로그 적합성 매체 톤·포맷 부합", "2", "7", "8", "9"],
          ["독자 몰입도 읽히는 힘, 체류 유도", "5", "7", "9", "7"],
          ["결론 여운 마무리의 인상·잔향", "4", "7", "8", "9"],
          ["논점 균형감 일방적 단정 vs 양면 시각", "3", "5", "9", "8"],
          ["가독성 시각적 호흡·단락 배분", "2", "7", "8", "9"],
          ["총점 (100점 만점)", "45", "71", "85", "80"],
        ],
      },
    ],
    notes: [
      "원안은 화자 본인의 날것이기 때문에 뉘앙스 보존에서는 가장 강하지만, 블로그 포맷에서는 진입 장벽이 높다고 봤습니다.",
      "B안은 거친 톤을 부드럽게 다듬으면서도 비판적 시선을 유지해 원문 보존과 게시 적합성의 균형이 가장 좋다고 판단했습니다.",
    ],
  },
];

const commonPatterns = [
  {
    title: "원안은 원석, 생성안은 세공본",
    text: "세 평가 모두 원안의 문제의식과 화자성이 중요하다고 봅니다. 다만 게시용 글로는 단락, 문장, 사실 보정이 필요하다는 판단도 공통입니다.",
  },
  {
    title: "B안은 가장 안정적인 게시 후보",
    text: "ChatGPT 5.5와 Opus 4.6 모두 B안을 1순위로 봤습니다. 원안의 취지를 살리면서 독자 친화성과 논리 균형을 확보했기 때문입니다.",
  },
  {
    title: "C안은 인상과 전문성이 강함",
    text: "Gemini 3.1 Pro는 C안을 가장 높게 평가했습니다. 기술 해설, 제목 감각, 결말의 여운은 C안의 뚜렷한 강점입니다.",
  },
  {
    title: "A안은 구조화가 좋지만 균형은 약함",
    text: "A안은 빠르게 읽히는 제목과 소제목 구성이 좋습니다. 그러나 사실 보정과 원문 뉘앙스의 균형에서는 B안보다 낮게 평가되었습니다.",
  },
];

const draftScores = [
  {
    evaluator: "Gemini 3.1 Pro",
    winner: "C안",
    focus: "구조화·전문성",
    scores: { 원안: 5.75, A안: 7.75, B안: 7.25, C안: 9.25 },
    note: "소제목 구조, 전문 용어 사용, 결론의 힘을 높게 평가해 C안을 가장 우수하게 봤습니다.",
  },
  {
    evaluator: "ChatGPT 5.5",
    winner: "B안",
    focus: "게시 적합성",
    scores: { 원안: 6.8, A안: 7.4, B안: 8.8, C안: 8.3 },
    note: "사실 보정, 논리 흐름, 독자 친화성을 중시해 B안을 실제 게시본에 가장 가깝게 판단했습니다.",
  },
  {
    evaluator: "Opus 4.6",
    winner: "B안",
    focus: "문체·뉘앙스",
    scores: { 원안: 4.5, A안: 7.1, B안: 8.5, C안: 8.0 },
    note: "원안의 화자성과 편집 과정에서 생기는 손실을 추적했고, B안이 보존과 완성도의 균형이 좋다고 봤습니다.",
  },
];

const evaluationData = [
  {
    model: "Gemini 3.1 Pro",
    average: 7.4,
    label: "빠른 공유형",
    criteria: [["구조 명확성", 8.6], ["균형감", 7.0], ["실행 가능성", 7.5], ["뉘앙스 분석력", 6.8], ["설득력", 7.2]],
  },
  {
    model: "ChatGPT 5.5",
    average: 8.4,
    label: "실무 편집형",
    criteria: [["구조 명확성", 8.1], ["균형감", 8.8], ["실행 가능성", 9.1], ["뉘앙스 분석력", 7.8], ["설득력", 8.3]],
  },
  {
    model: "Opus 4.6",
    average: 8.6,
    label: "정밀 분석형",
    criteria: [["구조 명확성", 8.0], ["균형감", 8.2], ["실행 가능성", 8.4], ["뉘앙스 분석력", 9.5], ["설득력", 9.1]],
  },
];

const useCases = [
  { title: "빠른 비교 리포트", best: "Gemini 3.1 Pro", accent: "#2f5fb8", text: "표 중심 정리와 항목별 요약이 강해 공유용 문서에 적합합니다." },
  { title: "게시용 원고 선택", best: "ChatGPT 5.5", accent: "#087a6a", text: "원안 보존, 사실 보정, 독자 친화성을 함께 고려합니다." },
  { title: "문체·뉘앙스 분석", best: "Opus 4.6", accent: "#6750a4", text: "원문에서 무엇이 살아남고 무엇이 사라졌는지를 가장 잘 설명합니다." },
  { title: "최종 편집 전략", best: "B안 + C안 장치", accent: "#b66a00", text: "B안의 안정성에 C안의 제목 감각과 결말 여운을 결합합니다." },
];

function formatScore(score) {
  return score.toFixed(2).replace(/\.?0+$/, "");
}

function averageDraftScore(draftId) {
  const total = draftScores.reduce((sum, row) => sum + row.scores[draftId], 0);
  return total / draftScores.length;
}

function renderBlocks(blocks) {
  return blocks
    .map(([type, text]) => {
      if (type === "h4") return `<h4>${text}</h4>`;
      return `<p>${text}</p>`;
    })
    .join("");
}

function renderFullTexts() {
  const source = document.getElementById("fulltext-source");
  const generated = document.getElementById("generated-fulltexts");
  if (source) {
    source.innerHTML = `
      <article class="text-panel original-text-panel">
        <div class="text-panel-head">
          <span class="card-label">원안 baesic</span>
          <strong>작성자 초안 전문</strong>
        </div>
        <div class="text-box original-box">
          <p>${originalText}</p>
        </div>
      </article>
    `;
  }

  if (generated) {
    generated.innerHTML = generatedFullTexts
      .map(
        (item) => `
          <article class="text-panel generated-text-panel" style="--accent: ${item.accent}">
            <div class="text-panel-head">
              <span class="card-label">${item.label}</span>
              <strong>${item.title}</strong>
            </div>
            <div class="text-box scroll-box">
              ${renderBlocks(item.blocks)}
            </div>
          </article>
        `
      )
      .join("");
  }
}

function renderRubricCards() {
  const container = document.getElementById("rubric-grid");
  if (!container) return;
  container.innerHTML = rubricData
    .map(
      (item) => `
        <article class="rubric-card">
          <strong>${item.label}</strong>
          <p>${item.text}</p>
          <div class="rubric-bar" aria-hidden="true"><div style="width: ${item.weight}%"></div></div>
        </article>
      `
    )
    .join("");
}

function renderDraftCards() {
  const container = document.getElementById("draft-grid");
  if (!container) return;

  container.innerHTML = draftData
    .map((draft) => {
      const average = averageDraftScore(draft.id);
      return `
        <article class="draft-card" style="--accent: ${draft.accent}; --tag-bg: ${draft.tagBg}; --tag-ink: ${draft.tagInk}">
          <div>
            <span class="draft-meta">${draft.id} · ${draft.model} · ${draft.type}</span>
            <h3>${draft.title}</h3>
          </div>
          <p>${draft.summary}</p>
          <div class="draft-scoreline">
            <strong>${formatScore(average)}</strong>
            <div class="draft-scoretrack" aria-hidden="true"><div style="width: ${Math.min(100, average * 10)}%"></div></div>
          </div>
          <div class="draft-tags">${draft.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <ul class="draft-list">${draft.strengths.map((item) => `<li>${item}</li>`).join("")}</ul>
          <p><strong>유의점:</strong> ${draft.caveat}</p>
        </article>
      `;
    })
    .join("");
}

function renderEvaluationTables() {
  const container = document.getElementById("evaluation-tables");
  if (!container) return;

  container.innerHTML = evaluationTables
    .map(
      (group) => `
        <article class="evaluation-table-card">
          <div class="evaluation-table-head">
            <span class="card-label">Raw Evaluation</span>
            <h3>${group.title}</h3>
            <p>${group.subtitle}</p>
          </div>
          ${group.tables
            .map(
              (table) => `
                ${table.caption ? `<h4>${table.caption}</h4>` : ""}
                <div class="raw-table-wrap">
                  <table class="raw-table">
                    <thead>
                      <tr>${table.headers.map((header) => `<th>${header}</th>`).join("")}</tr>
                    </thead>
                    <tbody>
                      ${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
                    </tbody>
                  </table>
                </div>
              `
            )
            .join("")}
          <ul class="evaluation-notes">
            ${group.notes.map((note) => `<li>${note}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderCommonPatterns() {
  const container = document.getElementById("common-grid");
  if (!container) return;
  container.innerHTML = commonPatterns
    .map(
      (item) => `
        <article class="common-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderVerdictCards() {
  const container = document.getElementById("verdict-cards");
  if (!container) return;
  const columns = ["원안", "A안", "B안", "C안"];

  container.innerHTML = draftScores
    .map((row) => {
      const chips = columns
        .map((column) => {
          const score = row.scores[column];
          const intensity = Math.max(0.08, Math.min(0.38, (score / 10) * 0.38));
          const winnerClass = row.winner === column ? " is-winner" : "";
          return `
            <div class="score-chip${winnerClass}" style="--intensity: ${intensity.toFixed(2)}">
              <span>${column}</span>
              <strong>${formatScore(score)}</strong>
            </div>
          `;
        })
        .join("");

      return `
        <article class="verdict-card">
          <div class="verdict-head">
            <div>
              <span class="model-label">${row.focus}</span>
              <h3>${row.evaluator}</h3>
            </div>
            <div class="winner-badge">${row.winner}</div>
          </div>
          <div class="score-chips">${chips}</div>
          <p class="verdict-note">${row.note}</p>
        </article>
      `;
    })
    .join("");
}

function renderConsensusBars() {
  const container = document.getElementById("consensus-bars");
  if (!container) return;
  const generatedDrafts = ["A안", "B안", "C안"];
  const counts = generatedDrafts.map((draft) => ({
    draft,
    average: averageDraftScore(draft),
    count: draftScores.filter((row) => row.winner === draft).length,
  }));

  container.innerHTML = counts
    .sort((a, b) => b.count - a.count || b.average - a.average)
    .map((item) => {
      const percent = (item.count / draftScores.length) * 100;
      return `
        <article class="consensus-card">
          <strong>${item.draft}</strong>
          <p>1순위 선택 ${item.count}/${draftScores.length} · 평균 ${formatScore(item.average)}</p>
          <div class="consensus-track" aria-hidden="true"><div class="consensus-fill" style="width: ${percent}%"></div></div>
        </article>
      `;
    })
    .join("");
}

function renderScoreboard() {
  const container = document.getElementById("scoreboard");
  if (!container) return;
  container.innerHTML = evaluationData
    .map((entry) => {
      const rows = entry.criteria
        .map(([label, value]) => {
          const width = `${Math.max(0, Math.min(100, value * 10))}%`;
          return `
            <div class="quality-row">
              <label>${label}</label>
              <div class="quality-track" aria-hidden="true"><div class="quality-fill" style="width: ${width}"></div></div>
              <strong>${value.toFixed(1)}</strong>
            </div>
          `;
        })
        .join("");

      return `
        <article class="model-box">
          <div class="model-head">
            <div>
              <span class="model-label">${entry.label}</span>
              <h3>${entry.model}</h3>
            </div>
            <div class="metric">
              <span>Average</span>
              <strong>${entry.average.toFixed(1)}</strong>
            </div>
          </div>
          <div class="quality-list">${rows}</div>
        </article>
      `;
    })
    .join("");
}

function renderUseCases() {
  const container = document.getElementById("usecase-grid");
  if (!container) return;
  container.innerHTML = useCases
    .map(
      (item) => `
        <article class="usecase-card" style="--accent: ${item.accent}">
          <span>Recommended</span>
          <h3>${item.title}</h3>
          <strong>${item.best}</strong>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

renderFullTexts();
renderRubricCards();
renderDraftCards();
renderEvaluationTables();
renderCommonPatterns();
renderVerdictCards();
renderConsensusBars();
renderScoreboard();
renderUseCases();

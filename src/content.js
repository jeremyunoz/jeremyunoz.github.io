export const PROFILE = {
  email: "jmzheng688@gmail.com",
  github: "https://github.com/jeremyunoz",
  linkedin: "https://www.linkedin.com/in/jeremy-zheng-unoz",
  resume: "/assets/Jeremy_Zheng_EmbeddedFirmware_Resume.pdf",
};

export const projects = [
  {
    id: "aurabot",
    title: "AuraBot",
    year: "2026",
    categories: ["embedded", "ai"],
    image: "/assets/aurabot.webp",
    gallery: "/assets/aurabot-team.webp",
    stack: [
      "ESP32",
      "ESP-IDF",
      "FreeRTOS",
      "Raspberry Pi 5",
      "MQTT",
      "WebSocket",
    ],
    github: "https://github.com/jeremyunoz/AuraBot",
    external:
      "https://projects.eng.uci.edu/projects/2025-2026/aurabot-edge-ai-desk-wellness-companion",
    en: {
      subtitle: "A little robot. A distributed system.",
      description:
        "An edge-AI desk companion that connects real-time firmware, on-device vision, and voice interaction.",
      alt: "AuraBot robot prototype beside its UC Irvine senior design poster",
      galleryAlt:
        "The AuraBot team presenting the prototype at the UC Irvine design review",
      context: "UC Irvine senior design",
      dates: "September 2025 – March 2026",
      role: "Firmware & systems integration",
      overview:
        "AuraBot brings sensing, reminders, speech, and physical interaction into a desk wellness companion. The engineering problem is coordination: a robot should keep sensing and responding while the more expensive AI work runs elsewhere.",
      contribution:
        "I implemented ESP32 firmware in ESP-IDF, organized sensing and interaction with FreeRTOS, and connected the robot to Raspberry Pi edge compute through MQTT and WebSocket.",
      decisions: [
        [
          "Split the work at the hardware boundary",
          "The ESP32 handles sensing and actuation. The Raspberry Pi handles vision, speech, and orchestration. This keeps time-sensitive control separate from compute-heavy work.",
        ],
        [
          "Give events and audio different paths",
          "MQTT carries commands and system events. WebSocket carries streaming audio. The communication model follows the needs of each workload.",
        ],
        [
          "Keep interaction concurrent",
          "Separate FreeRTOS tasks and queues let sensing, timers, and interaction make progress without waiting for a complete speech response.",
        ],
      ],
      outcome:
        "An integrated desk-companion prototype combining embedded control, edge perception, and conversational interaction, presented at the UCI senior design review.",
      reflection:
        "This project sharpened how I think about system boundaries: where a task runs, what it can block, and how the hardware behaves when the software is busy.",
    },
    zh: {
      subtitle: "小机器人，分布式系统。",
      description: "融合实时固件、端侧视觉与语音交互的桌面健康机器人。",
      alt: "AuraBot 机器人原型与加州大学欧文分校毕业设计海报",
      galleryAlt: "AuraBot 团队在加州大学欧文分校设计评审中展示原型",
      context: "加州大学欧文分校毕业设计",
      dates: "2025 年 9 月至 2026 年 3 月",
      role: "固件开发与系统集成",
      overview:
        "AuraBot 将感知、提醒、语音和物理交互整合进桌面健康机器人。核心工程问题是协调：当较重的 AI 计算在其他节点运行时，机器人仍需要持续感知和响应。",
      contribution:
        "我使用 ESP-IDF 开发 ESP32 固件，以 FreeRTOS 组织感知和交互任务，并通过 MQTT 与 WebSocket 将机器人连接到树莓派边缘计算节点。",
      decisions: [
        [
          "按硬件特性划分任务",
          "ESP32 负责感知与执行，树莓派负责视觉、语音和任务编排，将时序敏感的控制与计算密集的工作分开。",
        ],
        [
          "为事件和音频选择不同通道",
          "MQTT 传输命令和系统事件，WebSocket 传输流式音频，通信方式由工作负载决定。",
        ],
        [
          "让交互保持并发",
          "利用独立的 FreeRTOS 任务和队列，让感知、计时和交互持续推进，无须等待完整的语音响应。",
        ],
      ],
      outcome:
        "完成了集嵌入式控制、端侧感知和语音交互于一体的桌面机器人原型，并在 UCI 毕业设计评审中展示。",
      reflection:
        "这个项目让我更深入地思考系统边界：任务应在哪里运行、会阻塞什么，以及软件繁忙时硬件如何表现。",
    },
  },
  {
    id: "bincredible",
    title: "Bincredible",
    year: "2025",
    categories: ["ai", "iot"],
    image: "/assets/bincredible.webp",
    gallery: "/assets/bincredible-team.webp",
    stack: [
      "Raspberry Pi 5",
      "TensorFlow Lite",
      "YOLO",
      "MQTT",
      "React Native",
      "Firebase",
    ],
    github: "https://github.com/jeremyunoz/bincredible-app",
    en: {
      subtitle: "Recycling, from camera to app.",
      description:
        "On-device waste classification connected to a mobile recycling experience through an edge-to-cloud pipeline.",
      alt: "Four Bincredible mobile app screens showing the recycling flow",
      galleryAlt:
        "The Bincredible prototype being demonstrated at BRDG pitch day",
      context: "BRDG Innovation Challenge",
      dates: "May – October 2025",
      role: "Edge AI & application integration",
      overview:
        "Bincredible connects a physical recycling action to a mobile experience. A Raspberry Pi classifies camera input on-device, then passes the result through a connected pipeline to the app.",
      contribution:
        "My work connected the Raspberry Pi inference pipeline with MQTT communication and Firebase-backed application state, alongside development of the React Native experience.",
      decisions: [
        [
          "Run inference near the camera",
          "TensorFlow Lite brings classification onto the Raspberry Pi. The vision loop does not need to send every camera frame to a remote inference service.",
        ],
        [
          "Connect events to application state",
          "MQTT carries classification events, while Firebase connects those events to the mobile experience. Each part has a clear role in the path from device to interface.",
        ],
        [
          "Treat integration as part of the product",
          "The classifier is one part of the experience. Camera capture, preprocessing, inference, messaging, and app updates need to work together.",
        ],
      ],
      outcome:
        "A working recycling prototype connecting Raspberry Pi edge inference to a React Native companion application, developed for the BRDG Innovation Challenge.",
      reflection:
        "Working across the device and application made the system boundaries visible: an inference result is useful only when it reaches the user in a form they understand.",
    },
    zh: {
      subtitle: "从摄像头到应用的回收体验。",
      description:
        "通过端云协同的数据链路，将设备端垃圾分类与移动端回收体验连接起来。",
      alt: "Bincredible 移动应用的四个回收流程界面",
      galleryAlt: "BRDG 路演现场的 Bincredible 原型演示",
      context: "BRDG 创新挑战赛",
      dates: "2025 年 5 月至 10 月",
      role: "端侧 AI 与应用集成",
      overview:
        "Bincredible 将现实中的回收行为连接到移动应用。树莓派在本地对摄像头输入进行分类，再通过联网链路将结果传递到应用。",
      contribution:
        "我将树莓派推理流程与 MQTT 通信及基于 Firebase 的应用状态连接起来，同时参与 React Native 移动端开发。",
      decisions: [
        [
          "在摄像头附近运行推理",
          "利用 TensorFlow Lite 在树莓派上完成分类，视觉流程无须将每一帧图像发送到远程推理服务。",
        ],
        [
          "连接事件与应用状态",
          "MQTT 传输分类事件，Firebase 将事件连接到移动端体验，每个环节都在设备到界面的路径中承担明确职责。",
        ],
        [
          "将集成视为产品的一部分",
          "分类器只是体验的一个环节，图像采集、预处理、推理、消息通信和应用更新需要协同工作。",
        ],
      ],
      outcome:
        "为 BRDG 创新挑战赛开发了可运行的回收原型，将树莓派端侧推理与 React Native 配套应用连接起来。",
      reflection:
        "跨越设备与应用的开发让我更清楚地看到系统边界：只有以用户能够理解的方式呈现，推理结果才有实际意义。",
    },
  },
  {
    id: "zotfitness",
    filterOnly: true,
    title: "ZotFitness",
    year: "2024",
    categories: ["embedded", "iot"],
    image: "/assets/zotfitness.webp",
    gallery: null,
    stack: ["ESP32-S3", "C/C++", "I²C", "MQTT", "AWS IoT Core", "DynamoDB"],
    github: "https://github.com/jeremyunoz/ZotFitness",
    external: "https://devpost.com/software/zotfitness",
    en: {
      subtitle: "Sensor data, beyond the breadboard.",
      description:
        "An ESP32 sensor prototype with a connected path from I²C acquisition to cloud telemetry.",
      alt: "ESP32 development board wired to sensors and a display on a breadboard",
      context: "Connected-device project",
      dates: "2024",
      role: "Embedded firmware & IoT pipeline",
      overview:
        "ZotFitness explores the complete path from a physical sensor to useful telemetry. The prototype combines microcontroller firmware, I²C sensor acquisition, wireless messaging, and cloud storage.",
      contribution:
        "I worked on embedded C/C++ firmware, sensor communication, and the MQTT path connecting the ESP32 prototype to AWS IoT Core and a DynamoDB backend.",
      decisions: [
        [
          "Start with reliable acquisition",
          "I²C connects the microcontroller to its sensors. Sampling and peripheral communication form the foundation for every downstream update.",
        ],
        [
          "Use messages to connect device and cloud",
          "MQTT provides the event path from ESP32 telemetry into AWS IoT Core, keeping the device side focused on sensing and publishing.",
        ],
        [
          "Debug where software meets hardware",
          "Serial tracing supports investigation of sensor and timing behavior while the device is running.",
        ],
      ],
      outcome:
        "A connected embedded prototype demonstrating a sensor-to-cloud telemetry pipeline across firmware, messaging, and storage.",
      reflection:
        "A small sensor project is a complete systems problem: electrical connections, peripheral behavior, firmware timing, network delivery, and the shape of the stored data all matter.",
    },
    zh: {
      subtitle: "让传感器数据走出面包板。",
      description:
        "以 ESP32 为核心，将 I²C 数据采集连接到云端遥测的传感器原型。",
      alt: "面包板上的 ESP32 开发板、传感器与显示屏",
      context: "物联网设备项目",
      dates: "2024 年",
      role: "嵌入式固件与物联网链路",
      overview:
        "ZotFitness 探索从物理传感器到有效遥测数据的完整路径，将微控制器固件、I²C 数据采集、无线消息通信和云端存储整合在一起。",
      contribution:
        "我参与嵌入式 C/C++ 固件、传感器通信，以及通过 MQTT 将 ESP32 原型连接到 AWS IoT Core 和 DynamoDB 后端的数据链路开发。",
      decisions: [
        [
          "从可靠采集开始",
          "I²C 连接微控制器与传感器，采样和外设通信为后续数据更新提供基础。",
        ],
        [
          "以消息连接设备和云端",
          "通过 MQTT 将 ESP32 遥测数据传入 AWS IoT Core，让设备端专注于感知和发布。",
        ],
        [
          "在软硬件交界处调试",
          "利用串口追踪，在设备运行时分析传感器表现与时序行为。",
        ],
      ],
      outcome:
        "完成了联网嵌入式原型，展示了跨越固件、消息通信和存储的传感器到云端遥测流程。",
      reflection:
        "一个小型传感器项目也是完整的系统问题：电气连接、外设行为、固件时序、网络传输和数据结构都很重要。",
    },
  },
];

export const filters = ["all", "embedded", "ai", "iot"];
export const toolkit = [
  "C/C++",
  "Python",
  "ESP-IDF",
  "FreeRTOS",
  "ESP32",
  "Raspberry Pi 5",
  "TensorFlow Lite",
  "MQTT",
];
export function filterProjects(filter) {
  return projects.filter((project) =>
    filter === "all"
      ? !project.filterOnly
      : project.categories.includes(filter),
  );
}

export const pipeline = [
  {
    id: "sense",
    label: { en: "Sense", zh: "感知" },
    hardware: "IMX500 + PIR",
    en: "Vision runs on the IMX500 camera sensor. A PIR sensor provides a complementary presence signal. Together, they inform the companion’s wellness logic.",
    zh: "IMX500 摄像头传感器运行视觉推理，PIR 传感器提供补充的人体存在信号，共同为健康提醒逻辑提供输入。",
  },
  {
    id: "think",
    label: { en: "Think", zh: "处理" },
    hardware: "Raspberry Pi 5",
    en: "The Raspberry Pi coordinates wellness logic and the speech-to-text, language-model, and text-to-speech pipeline, keeping heavier computation off the robot controller.",
    zh: "树莓派协调健康提醒逻辑，以及语音识别、语言模型与语音合成流程，将较重的计算任务从机器人控制器中分离。",
  },
  {
    id: "respond",
    label: { en: "Respond", zh: "响应" },
    hardware: "ESP32 + FreeRTOS",
    en: "FreeRTOS tasks on the ESP32 handle sensing, timers, motion, and audio. MQTT exchanges control events; WebSocket carries streaming audio between the two nodes.",
    zh: "ESP32 上的 FreeRTOS 任务负责感知、计时、运动与音频。MQTT 交换控制事件，WebSocket 在两个节点间传输流式音频。",
  },
];

export const copy = {
  en: {
    name: "Jeremy Zheng",
    otherName: "郑剑铭",
    home: "Home",
    work: "Work",
    about: "About",
    skills: "Expertise",
    contact: "Contact",
    resume: "Résumé",
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
    language: "切换到中文",
    theme: "Switch color theme",
    light: "Light",
    dark: "Dark",
    hero: ["Jeremy", "Zheng"],
    intro:
      "I build embedded firmware and edge-AI systems that sense, think, and respond.",
    heroDetail:
      "C/C++ on ESP32. Real-time work with FreeRTOS. Intelligence at the edge.",
    viewWork: "Explore my work",
    introLink: "A little about me",
    selected: "Selected work",
    workIntro:
      "From the first sensor reading to a system people can interact with. A selection of things I’ve built.",
    filters: {
      all: "All work",
      embedded: "Embedded",
      ai: "Edge AI",
      iot: "IoT",
    },
    projectCount: (count) => `${count} ${count === 1 ? "project" : "projects"}`,
    readCase: "Explore project",
    code: "Source code",
    projectSite: "Project page",
    back: "All projects",
    systemTitle: "Inside AuraBot",
    systemIntro:
      "One companion. Three responsibilities. Explore how the hardware shares the work.",
    systemCaption: "AuraBot at the UCI senior design review.",
    expertiseTitle: "Close to the hardware",
    expertiseIntro:
      "I’m interested in the places where software has to answer to the physical world.",
    expertise: [
      [
        "Embedded firmware",
        "C/C++, ESP-IDF, FreeRTOS, I²C, SPI, and UART. Connecting peripheral behavior to concurrent software.",
        "AuraBot / ZotFitness",
      ],
      [
        "Edge intelligence",
        "Python, TensorFlow Lite, and embedded vision. Bringing perception into systems with real compute constraints.",
        "AuraBot / Bincredible",
      ],
      [
        "Connected systems",
        "MQTT, WebSocket, AWS IoT Core, and Firebase. Carrying useful information from devices to applications.",
        "Bincredible / ZotFitness",
      ],
    ],
    personTitle: "The person behind the projects",
    personText:
      "I’m drawn to systems you can see, touch, and test. My work spans embedded firmware, edge perception, and the connections between them.",
    educationShort:
      "UC Irvine, B.S. Computer Science & Engineering. Incoming M.S. at Georgia Tech, Spring 2027.",
    storyLink: "More about me",
    contactTitle: "Let’s talk",
    contactText:
      "Have an embedded systems role, a research question, or a project in mind? I’d be glad to hear about it.",
    copyEmail: "Copy email",
    copied: "Email copied",
    copyFailed: "Could not copy. You can select the email address above.",
    download: "Download résumé",
    contactNote:
      "For opportunities in embedded systems, firmware, edge AI, and computer vision.",
    footer: "Embedded systems. Edge intelligence.",
    footerBack: "Back to top",
    aboutTitle: ["A bit", "about me."],
    aboutIntro:
      "I like the moment when code starts doing something in the real world.",
    backgroundIntro: "I work where software meets physical constraints.",
    toolkitTitle: "My toolkit",
    backgroundItems: [
      [
        "Embedded systems",
        "Firmware, timing, and the devices around us.",
        "I focus on embedded firmware and edge AI, from ESP32 control and FreeRTOS scheduling to camera pipelines and voice interaction.",
      ],
      [
        "From parts to systems",
        "Small devices, connected applications, and the boundaries between them.",
        "I enjoy bringing firmware, perception, messaging, and companion applications together, then testing how the pieces behave as a system.",
      ],
      [
        "Research perspective",
        "What happens when the inputs stop being ideal?",
        "At UC Irvine, I explored the effect of visual perturbations on embedded computer vision. That work shaped my interest in how perception behaves when inputs change and resources are limited.",
      ],
    ],
    background: "My background",
    educationTitle: "Education",
    researchTitle: "Research & teaching",
    education: [
      [
        "Georgia Institute of Technology",
        "Incoming M.S., Computational Science & Engineering",
        "Spring 2027",
      ],
      [
        "University of California, Irvine",
        "B.S., Computer Science & Engineering",
        "Graduated March 2026",
      ],
    ],
    experience: [
      [
        "Embedded & Cyber-Physical Systems Lab",
        "Undergraduate research, UC Irvine",
        "2025 – 2026",
        "Built Python tools for visual perturbation testing and evaluated embedded object detection under changing input conditions.",
      ],
      [
        "ICS 31 & ICS 45C",
        "Learning Assistant, UC Irvine",
        "2024",
        "Supported students with programming fundamentals and C++ concepts.",
      ],
      [
        "IEEE Open Project Space",
        "UC Irvine",
        "2022",
        "Hands-on hardware projects helped turn an interest in software into a focus on embedded systems.",
      ],
    ],
    photoCaption: "Away from the workbench.",
    beyond: "Beyond the workbench",
    beyondText:
      "Long walks, a good cup of milk tea, and time away from the screen. I’m also exploring Rust and the ways it changes how I think about memory and concurrency.",
    overview: "The project",
    contribution: "My contribution",
    decisions: "Engineering decisions",
    outcome: "What came together",
    reflection: "What I took from it",
    technology: "Built with",
    role: "My focus",
    context: "Context",
    timeline: "Timeline",
    next: "Next project",
    notFound: "Page not found",
    notFoundText:
      "This page may have moved. The projects are a good place to start.",
  },
  zh: {
    name: "郑剑铭",
    otherName: "Jeremy Zheng",
    home: "首页",
    work: "项目",
    about: "关于",
    skills: "技术方向",
    contact: "联系",
    resume: "简历",
    menu: "菜单",
    close: "关闭",
    skip: "跳转到正文",
    language: "Switch to English",
    theme: "切换配色主题",
    light: "浅色",
    dark: "深色",
    hero: ["郑剑铭", "Jeremy Zheng"],
    intro: "我构建能够感知、思考与响应的嵌入式固件和端侧 AI 系统。",
    heroDetail:
      "以 C/C++ 开发 ESP32 固件，以 FreeRTOS 协调实时任务，让智能运行在边缘。",
    viewWork: "探索我的项目",
    introLink: "认识一下我",
    selected: "精选项目",
    workIntro:
      "从第一次传感器读数，到可以与人交互的完整系统。这里记录了我参与构建的作品。",
    filters: {
      all: "全部项目",
      embedded: "嵌入式",
      ai: "端侧 AI",
      iot: "物联网",
    },
    projectCount: (count) => `${count} 个项目`,
    readCase: "探索项目",
    code: "源代码",
    projectSite: "项目页面",
    back: "全部项目",
    systemTitle: "走进 AuraBot",
    systemIntro: "一个机器人，三种职责。探索硬件如何分工协作。",
    systemCaption: "UCI 毕业设计评审现场的 AuraBot。",
    expertiseTitle: "贴近硬件",
    expertiseIntro: "我关注软件与物理世界相互影响的地方。",
    expertise: [
      [
        "嵌入式固件",
        "使用 C/C++、ESP-IDF、FreeRTOS、I²C、SPI 与 UART，将外设行为与并发软件连接起来。",
        "AuraBot / ZotFitness",
      ],
      [
        "端侧智能",
        "使用 Python、TensorFlow Lite 与嵌入式视觉，在实际计算资源约束下实现感知能力。",
        "AuraBot / Bincredible",
      ],
      [
        "互联系统",
        "使用 MQTT、WebSocket、AWS IoT Core 与 Firebase，让有效信息从设备传递到应用。",
        "Bincredible / ZotFitness",
      ],
    ],
    personTitle: "项目背后的我",
    personText:
      "我喜欢能够观察、触摸和验证的系统。我的工作涵盖嵌入式固件、端侧感知，以及它们之间的连接。",
    educationShort:
      "加州大学欧文分校计算机科学与工程学士。佐治亚理工学院计算科学与工程硕士在读。",
    storyLink: "更多关于我",
    contactTitle: "一起聊聊",
    contactText: "如果你有嵌入式系统岗位、研究问题或合作项目，欢迎联系我。",
    copyEmail: "复制邮箱",
    copied: "邮箱已复制",
    copyFailed: "复制失败，你可以直接选中上方邮箱地址。",
    download: "下载简历",
    contactNote: "关注嵌入式系统、固件、端侧 AI 与计算机视觉方向的机会。",
    footer: "嵌入式系统，端侧智能。",
    footerBack: "返回顶部",
    aboutTitle: ["你好，", "我是剑铭。"],
    aboutIntro: "我喜欢代码开始影响真实世界的那一刻。",
    backgroundIntro: "我关注软件与物理约束相遇的地方。",
    toolkitTitle: "常用工具",
    backgroundItems: [
      [
        "嵌入式系统",
        "固件、时序，以及身边的设备。",
        "我专注于嵌入式固件与端侧 AI，从 ESP32 控制和 FreeRTOS 调度，到摄像头处理流程与语音交互。",
      ],
      [
        "从部件到系统",
        "小型设备、联网应用，以及它们之间的边界。",
        "我喜欢将固件、感知、消息通信和配套应用连接起来，再验证各个部分如何作为一个系统协同运行。",
      ],
      [
        "研究视角",
        "当输入不再理想时，系统会怎样表现？",
        "在加州大学欧文分校，我探索了视觉扰动对嵌入式计算机视觉的影响。这段经历让我更加关注输入变化、资源受限时感知系统的表现。",
      ],
    ],
    background: "我的经历",
    educationTitle: "教育背景",
    researchTitle: "研究与教学",
    education: [
      ["佐治亚理工学院", "计算科学与工程硕士", "在读"],
      ["加州大学欧文分校", "计算机科学与工程学士", "2026 年 3 月毕业"],
    ],
    experience: [
      [
        "嵌入式与信息物理系统实验室",
        "本科生科研，加州大学欧文分校",
        "2025 – 2026",
        "开发用于视觉扰动测试的 Python 工具，并在输入条件变化时评估嵌入式目标检测。",
      ],
      [
        "ICS 31 与 ICS 45C",
        "课程学习助理，加州大学欧文分校",
        "2024",
        "帮助学生理解编程基础与 C++ 概念。",
      ],
      [
        "IEEE Open Project Space",
        "加州大学欧文分校",
        "2022",
        "通过动手实践硬件项目，将对软件的兴趣逐步发展为对嵌入式系统的关注。",
      ],
    ],
    photoCaption: "工作台之外。",
    beyond: "工作台之外",
    beyondText:
      "散步、一杯好喝的奶茶，以及暂时离开屏幕的时光。我也在学习 Rust，探索它如何改变我对内存与并发的思考。",
    overview: "项目介绍",
    contribution: "我的贡献",
    decisions: "工程决策",
    outcome: "实现成果",
    reflection: "项目收获",
    technology: "技术栈",
    role: "我的方向",
    context: "项目背景",
    timeline: "时间",
    next: "下一个项目",
    notFound: "页面未找到",
    notFoundText: "这个页面可能已移动，你可以从项目开始浏览。",
  },
};

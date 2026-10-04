// src/data/ProjectDataModel.js

import { text } from "motion/react-client";

export const PROJECTS = [
  {
    id: 'proj_1',
    type: 'leaf',
    title: 'Binary-to-Decimal Logic Circuit',
    name: 'Binary-to-Decimal Logic Circuit',
    domain: 'DISCRETE DIGITAL LOGIC',
    description: 'Discrete hardware logic circuit utilizing 7447 and 7448 decoders paired with common-cathode 7-segment displays for instantaneous numeric decode verification and timing analysis.',
    tags: ['Digital Logic', '7447 Decoders', 'Prototyping'],
    date: 'AUG 2025',
    role: 'Hardware Designer',
    stack: ['7447/7448 ICs', '7-Segment', 'Breadboard'],
    badge: 'COMPLETED',
    images: [
      { id: 'img1', src: '/projects/proj_1/binary-decimal.jpeg', alt: 'Breadboard prototype', fullWidth: true },
    //   { id: 'img2', src: '/projects/binary-circuit-2.jpg', alt: 'Logic diagram', fullWidth: false }
    ],
   content: [
      { type: 'section', title: 'Tools Used' },
      { type: 'paragraph', text: 'Discrete Logic ICs (7447 & 7448), 7-Segment Displays, Breadboards, Jumper Wires, and standard lab power supplies.' },
      { type: 'section', title: 'Project Overview' },
      { type: 'paragraph', text: 'Developed as part of a core academic logic circuit design course, this project demonstrates the practical application of combinational logic. The physical hardware translates 4-bit binary inputs into readable decimal outputs instantaneously, allowing for direct numeric decode verification and timing analysis without relying on microcontrollers or software.' },
      { type: 'section', title: 'Core Architecture & Component Selection' },
      { type: 'paragraph', text: 'Decoders: Implemented both the 7447 (active-low outputs) and 7448 (active-high outputs) BCD-to-7-segment decoders to process and translate the binary inputs.' },
      { type: 'paragraph', text: 'Displays: Carefully paired the 7447 ICs with common-anode 7-segment displays and the 7448 ICs with common-cathode displays to ensure proper current sourcing and sinking.' },
      { type: 'paragraph', text: 'Physical Implementation: The architecture was manually routed on breadboards. Strict attention was given to clean jumper wiring and power distribution to minimize noise and ensure consistent logic gate transitions.' }
    ]
  },
  {
    id: 'proj_2',
    type: 'leaf',
    title: 'Antigravity — Offline Audio Translator',
    name: 'Antigravity — Offline Audio Translator',
    domain: 'EDGE ML / INCEPTA HACKATHON',
    description: 'Air-gapped Kashmiri-to-English translation and security monitoring utility integrating Whisper ASR for voice capture and quantized NLLB models for local inferencing without cloud reliance.',
    tags: ['Python', 'Whisper ASR', 'NLLB', 'Edge ML'],
    date: 'FEB 2026',
    role: 'Software Developer',
    stack: ['Python', 'Whisper ASR', 'NLLB'],
    images: [
      // { id: 'img1', src: '/projects/antigravity-ui.jpg', alt: 'Antigravity user interface', fullWidth: true }
    ],
    content: [
      { type: 'section', title: 'Hackathon Build' },
      { type: 'paragraph', text: 'Built during the Incepta Hackathon, this tool focuses on providing high-accuracy, offline translation capabilities for secure environments.' }
    ]
  },
  {
    id: 'proj_3',
    type: 'leaf',
    title: 'Localized Flood Warning System',
    name: 'Localized Flood Warning System',
    domain: 'WIRELESS IOT / DISASTER TECH',
    description: 'Autonomous sensor network node combining ultrasonic river level telemetry with long-range LoRa packet broadcasts to provide zero-infrastructure early flood warnings for vulnerable riparian zones.',
    tags: ['ESP32', 'LoRa', 'Mesh Systems'],
    badge: 'IDEATION',
    date: 'SEP 2026',
    role: 'Systems Architect',
    stack: ['ESP32', 'LoRa', 'Wireless Comm'],
    images: [
      // { id: 'img1', src: '/projects/flood-architecture.jpg', alt: 'System architecture diagram', fullWidth: true }
    ],
    content: [
      { type: 'section', title: 'System Architecture' },
      { type: 'paragraph', text: 'A localized warning system architecture utilizing LoRa wireless communication and ESP32 hardware to deliver rapid flood alerts in vulnerable zones.' }
    ]
  },
  {
    id: 'proj_4',
    type: 'leaf',
    title: '5V Regulated Power Supply',
    name: '5V Regulated Power Supply',
    domain: 'POWER ELECTRONICS / MANUFACTURING',
    description: 'Designed a stable, noise-decoupled power supply circuit with comprehensive thermal dissipation calculations, ripple attenuation stages, and manufacturing-ready Gerber file generation.',
    tags: ['KiCad', 'Power Electronics', 'Gerber Files'],
    badge: 'COMPLETED',
    date: 'SEP 2026',
    role: 'Hardware Engineer',
    stack: ['KiCad', 'Gerber Files', 'Power Electronics'],
    images: [
  { id: 'img1', src: '/projects/proj_4/5v-power-pcb.png', alt: 'PCB render', fullWidth: false },
  // { id: 'img1', src: '/projects/proj_4/pcb-editor.png', alt: 'PCB render', fullWidth: false },
  
],

    content: [
      { type: 'section', title: 'Tools Used:' },
      { type: 'paragraph', text: 'KiCad 8.0, Schematic Capture, Gerber Generation' },
      { type: 'section', title: 'Project Overview' },
      { type: 'paragraph', text: 'Designed a foundational 5V linear regulated power supply board to provide stable DC power for downstream digital logic circuits. This project established the core PCB design workflow, from initial schematic capture to physical manufacturing file generation.' },
      { type: 'section', title: 'Core Architecture & Component Selection' },
      { type: 'paragraph', text: 'Voltage Regulation: Integrated a standard linear voltage regulator (e.g., LM7805) to step down variable input voltages to a clean, stable 5V output.' },
      { type: 'paragraph', text: 'Filtration: Calculated and implemented input smoothing capacitors to handle transient voltage spikes and output decoupling capacitors to ensure stable current delivery to dynamic loads.' },
      { type: 'paragraph', text: 'Protection: Included reverse-polarity protection diodes to safeguard the regulator and downstream components from incorrect power connections.' },
    ]
  },
  {
    id: 'proj_5',
    type: 'parent',
    title: 'Microcontroller Development Boards',
    name: 'Microcontroller Development Boards',
    domain: 'HARDWARE FABRICATION / PCB DESIGN',
    description: 'Custom PCB designs for STM32 and ATmega32 microcontrollers. Complete schematic capture, differential pair routing, impedance matching, power plane decoupling, and 3D verification in KiCad.',
    tags: ['STM32', 'ATmega32', 'KiCad', 'PCB Design'],
    badge: 'COMPLETED',
    subProjects: [
      {
        id: 'stm32-board',
        type: 'leaf',
        title: 'STM32 Development Board',
        domain: 'ARM CORTEX / PCB DESIGN',
        description: 'Advanced board design involving complete schematic capture and routing for STM32.',
        tags: ['STM32', 'KiCad', 'ARM'],
        date: 'SEP 2026',
        role: 'Hardware Engineer',
        stack: ['KiCad', 'STM32'],
        images: [
          { id: 'img1', src: '/projects/proj_5/STM_32.png', alt: 'STM32 development board top view', fullWidth: false},
          { id: 'img1', src: '/projects/proj_5/stm32_sch.png', alt: 'STM32 development board schematic', fullWidth: false }
        ],
        content: [
          { type: 'section', title: 'Tools Used:' },
          {type:'paragraph',text:'KiCad 8.0, ERC/DRC Validation, Gerber Generation'},
          { type: 'section', title: 'Project Overview:' },
          { type: 'paragraph', text: 'Designed a custom, manufacturing-ready 32-bit microcontroller development board based on the ARM Cortex-M architecture. This project serves as a leap from basic 8-bit logic to professional embedded hardware, focusing on strict power delivery networks, high-frequency crystal routing, and strict Design Rules Check (DRC) compliance.' },
          { type: 'section', title: 'Core Architecture & Component Selection' },
          {type: 'paragraph', text:`Microcontroller: STM32F103C8Tx (48-pin LQFP package).`},
          {type: 'paragraph', text:`Power Regulation: AMS1117-3.3 Low Dropout (LDO) linear regulator to step down 5V USB VBUS to a stable 3.3V rail.`},
          {type: 'paragraph', text:`Clocking: 16MHz external high-speed crystal oscillator with matched load capacitors.`},
          {type: 'paragraph', text:`Interfaces: USB Type-B Micro (with D+/D- differential pair), Serial Wire Debug (SWD) header for ARM programming, UART, and I2C breakout headers.`},
          { type: 'section', title: 'Manufacturing Verification' },
          {type: 'paragraph', text:`The layout successfully passed a strict Design Rules Check (0 Errors) verifying:`},
          {type: 'paragraph', text:`0.7mm via diameter / 0.3mm drill hole constraints.`},
          {type: 'paragraph', text:`Silkscreen edge clearance and component boundary keep-outs.`},
          {type: 'paragraph', text:`Generated finalized manufacturing files including Gerbers, Drill files, and Component Placement (CPL/BOM) lists ready for physical fabrication.`},
        ]
      },
      {
        id: 'atmega32-board',
        type: 'leaf',
        title: 'ATmega32 Development Board',
        domain: 'AVR / PCB DESIGN',
        description: 'Robust ATmega32 dev board for embedded testing and prototyping.',
        tags: ['ATmega32', 'KiCad', 'AVR'],
        date: 'SEP 2026',
        role: 'Hardware Engineer',
        stack: ['KiCad', 'ATmega32'],
        images: [
          { id: 'img1', src: '/projects/proj_5/Atmega32DevB_pcb.png', alt: 'ATmega32 board layout', fullWidth: false },
          { id: 'img1', src: '/projects/proj_5/Atmega32DevB_pcb_b.png', alt: 'ATmega32 board layout', fullWidth: false }
        ],
        content: [
          { type: 'section', title: 'Tools Used' },
          { type: 'paragraph', text: 'KiCad 8.0, SMD Routing, Design Rules Check (DRC)' },
          { type: 'section', title: 'Project Overview' },
          { type: 'paragraph', text: 'Architected a custom 8-bit AVR development board based on the ATmega32 microcontroller. This project represented a significant jump in complexity, requiring advanced surface-mount routing techniques, dense pin breakouts, and strict electrical validation.' },
          { type: 'section', title: 'Core Architecture & Component Selection' },
          { type: 'paragraph', text: 'Microcontroller: ATmega32 8-bit AVR MCU, acting as the central processing unit for peripheral control and logic execution.' },
          { type: 'paragraph', text: 'Peripheral Connectivity: Routed all standard GPIO ports to accessible, labeled breakout headers for rapid prototyping and sensor integration.' },
          { type: 'paragraph', text: 'Status Indicators: Implemented an onboard power LED and programmable user LEDs with appropriately calculated current-limiting resistors.' },
        ]
      }
    ]
  }
];
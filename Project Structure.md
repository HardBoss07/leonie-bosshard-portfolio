# Project Structure

```
leonie-bosshard-portfolio/
├── app/
│   ├── projects/
│   │   ├── bubbl/
│   │   │   └── page.tsx
│   │   ├── graphic-design/
│   │   │   └── page.tsx
│   │   ├── independent-photography/
│   │   │   └── page.tsx
│   │   ├── kaos-komplett/
│   │   │   └── page.tsx
│   │   ├── mora/
│   │   │   └── page.tsx
│   │   ├── pager-prototype/
│   │   │   └── page.tsx
│   │   ├── portrait-photography/
│   │   │   └── page.tsx
│   │   ├── product-photography/
│   │   │   └── page.tsx
│   │   ├── redent-app/
│   │   │   └── page.tsx
│   │   └── redent-kit/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Sections/
│   │   ├── About.tsx
│   │   ├── Hero.tsx
│   │   └── Projects.tsx
│   ├── UI/
│   │   ├── projects/
│   │   │   ├── ColorSwatch.tsx
│   │   │   ├── ImageDisplay.tsx
│   │   │   ├── Promise.tsx
│   │   │   └── VisualIdentity.tsx
│   │   ├── ButtonComponent.tsx
│   │   ├── Headshot.tsx
│   │   └── TestIcon.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── projects/
│   │   ├── different-projects/
│   │   │   ├── Bubbl.tsx
│   │   │   ├── GraphicDesign.tsx
│   │   │   ├── IndependentPhotography.tsx
│   │   │   ├── KaosKomplett.tsx
│   │   │   ├── Mora.tsx
│   │   │   ├── PagerPrototype.tsx
│   │   │   ├── PortraitPhotography.tsx
│   │   │   ├── ProductPhotography.tsx
│   │   │   ├── ReDentApp.tsx
│   │   │   └── ReDentKit.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   └── index.ts
│   └── skills/
│       ├── AdobePremiere.tsx
│       ├── SkillGroup.tsx
│       ├── SkillIndicator.tsx
│       └── index.ts
├── lib/
│   ├── constants/
│   │   ├── categories.ts
│   │   └── imagePrefix.ts
│   ├── projects/
│   │   └── projectInfo.ts
│   └── utils/
│       ├── cn.ts
│       └── get-lucide-icon.ts
├── public/
│   ├── icons/
│   │   ├── AdobePremiere.svg
│   │   ├── logo-zoom.svg
│   │   └── logo.svg
│   └── images/
│       ├── projects/
│       │   ├── bubbl/
│       │   │   ├── bubbl_1_4000x4000.png
│       │   │   ├── bubbl_2_4000x4000.png
│       │   │   ├── bubbl_3_4000x3000.png
│       │   │   ├── bubbl_4_3400x3200.png
│       │   │   ├── bubbl_5_4000x4000.png
│       │   │   └── bubbl_6_4000x4000.png
│       │   ├── graphic-design/
│       │   │   ├── graphic-design_1_842x1191.png
│       │   │   ├── graphic-design_2_842x1191.png
│       │   │   └── graphic-design_3_842x1191.png
│       │   ├── independent-photography/
│       │   │   ├── independent_photography_1_1066x1600.png
│       │   │   ├── independent_photography_2_2731x4096.png
│       │   │   ├── independent_photography_3_1066x1600.png
│       │   │   ├── independent_photography_4_2731x4096.png
│       │   │   ├── independent_photography_5_2731x4096.png
│       │   │   └── independent_photography_6_2731x4096.png
│       │   ├── kaos-komplett/
│       │   │   ├── kaos_komplett_1_2048x1365.png
│       │   │   ├── kaos_komplett_2_2048x1365.png
│       │   │   ├── kaos_komplett_3_2048x1365.png
│       │   │   └── kaos_komplett_4_2481x1654.png
│       │   ├── mora/
│       │   │   ├── mora_1_4000x3000.png
│       │   │   ├── mora_2_4000x3000.png
│       │   │   ├── mora_3_3400x3200.png
│       │   │   ├── mora_4_4000x2667.png
│       │   │   ├── mora_5_4000x3000.png
│       │   │   └── mora_6_4000x3000.png
│       │   ├── pager-prototype/
│       │   │   ├── pager_prototype_1_1198x804.png
│       │   │   ├── pager_prototype_2_1278x856.png
│       │   │   ├── pager_prototype_3_1208x810.png
│       │   │   └── pager_prototype_4_1208x808.png
│       │   ├── portrait-photography/
│       │   │   ├── portrait_photography_1_2296x2296.png
│       │   │   ├── portrait_photography_2_2296x2296.png
│       │   │   ├── portrait_photography_3_3843x2702.png
│       │   │   ├── portrait_photography_4_2873x3370.png
│       │   │   └── portrait_photography_5_3170x4795.png
│       │   ├── product-photography/
│       │   │   ├── product_photography_1_3078x4096.png
│       │   │   ├── product_photography_2_3317x4096.png
│       │   │   └── product_photography_3_2795x2820.png
│       │   ├── redent-app/
│       │   │   ├── redent_app_1_375x812.png
│       │   │   ├── redent_app_2_375x812.png
│       │   │   ├── redent_app_3_375x812.png
│       │   │   ├── redent_app_4_375x812.png
│       │   │   ├── redent_app_5_375x812.png
│       │   │   ├── redent_app_6_375x812.png
│       │   │   ├── redent_app_7_375x812.png
│       │   │   └── redent_app_8_375x812.png
│       │   └── redent-kit/
│       │       ├── redent_kit_1_4096x2731.png
│       │       ├── redent_kit_2_4096x2725.png
│       │       ├── redent_kit_3_4096x4064.png
│       │       ├── redent_kit_4_4096x2731.png
│       │       ├── redent_kit_5_4096x2731.png
│       │       └── redent_kit_6_4096x2731.png
│       ├── example.png
│       └── headshot.png
├── types/
│   ├── projects/
│   │   └── imageDisplay.ts
│   ├── headshot.ts
│   ├── imagePrefix.ts
│   ├── project.ts
│   └── skill.ts
├── GEMINI.md
├── Project Structure.md
├── README.md
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```
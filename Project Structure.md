# Project Structure

```
leonie-bosshard-portfolio/
├── app/
│   ├── projects/
│   │   ├── analog-projects/
│   │   │   └── page.tsx
│   │   ├── graphic-design/
│   │   │   └── page.tsx
│   │   ├── photography/
│   │   │   └── page.tsx
│   │   └── ui-ux-interface/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── Sections/
│   │   ├── About.tsx
│   │   ├── Hero.tsx
│   │   └── Projects.tsx
│   ├── UI/
│   │   ├── projects/
│   │   │   ├── brand-concept/
│   │   │   │   ├── ColorSwatch.tsx
│   │   │   │   ├── Essence.tsx
│   │   │   │   ├── List.tsx
│   │   │   │   ├── Promise.tsx
│   │   │   │   ├── System.tsx
│   │   │   │   └── VisualIdentity.tsx
│   │   │   ├── ImageDisplay.tsx
│   │   │   ├── MultiplePosters.tsx
│   │   │   └── Poster.tsx
│   │   ├── BackButton.tsx
│   │   ├── ButtonComponent.tsx
│   │   ├── Headshot.tsx
│   │   ├── PortraitMosiac.tsx
│   │   ├── ReDentKitImages.tsx
│   │   └── TestIcon.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── projects/
│   │   ├── different-projects/
│   │   │   ├── Bubbl.tsx
│   │   │   ├── Mora.tsx
│   │   │   ├── PortraitPhotography.tsx
│   │   │   ├── Posters.tsx
│   │   │   └── ReDentKit.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectTemplate.tsx
│   │   └── index.ts
│   └── skills/
│       ├── AdobeIcon.tsx
│       ├── SkillGroup.tsx
│       ├── SkillIndicator.tsx
│       └── index.ts
├── lib/
│   ├── constants/
│   │   ├── categories.ts
│   │   └── imagePrefix.ts
│   ├── projects/
│   │   ├── projectDetailInfo.ts
│   │   └── projectInfo.ts
│   ├── utils/
│   │   ├── cn.ts
│   │   └── get-lucide-icon.ts
│   └── images.ts
├── public/
│   ├── docs/
│   │   └── CV_LeonieBosshard.pdf
│   ├── icons/
│   │   ├── AdobeIllustrator.svg
│   │   ├── AdobeInDesign.svg
│   │   ├── AdobeLightroom.svg
│   │   ├── AdobePhotoshop.svg
│   │   ├── AdobePremiere.svg
│   │   ├── logo-zoom.svg
│   │   └── logo.svg
│   └── images/
│       ├── projects/
│       │   ├── bubbl/
│       │   │   ├── bubbl_1_4000x4000.avif
│       │   │   ├── bubbl_2_4000x4000.avif
│       │   │   ├── bubbl_3_4000x3000.avif
│       │   │   ├── bubbl_4_3400x3200.avif
│       │   │   ├── bubbl_5_4000x4000.avif
│       │   │   └── bubbl_6_4000x4000.avif
│       │   ├── graphic-design/
│       │   │   ├── graphic-design_1_842x1191.avif
│       │   │   ├── graphic-design_2_842x1191.avif
│       │   │   └── graphic-design_3_842x1191.avif
│       │   ├── independent-photography/
│       │   │   ├── independent_photography_1_1066x1600.avif
│       │   │   ├── independent_photography_2_2731x4096.avif
│       │   │   ├── independent_photography_3_1066x1600.avif
│       │   │   ├── independent_photography_4_2731x4096.avif
│       │   │   ├── independent_photography_5_2731x4096.avif
│       │   │   └── independent_photography_6_2731x4096.avif
│       │   ├── kaos-komplett/
│       │   │   ├── kaos_komplett_1_2048x1365.avif
│       │   │   ├── kaos_komplett_2_2048x1365.avif
│       │   │   ├── kaos_komplett_3_2048x1365.avif
│       │   │   └── kaos_komplett_4_2481x1654.avif
│       │   ├── mora/
│       │   │   ├── mora_1_4000x3000.avif
│       │   │   ├── mora_2_4000x3000.avif
│       │   │   ├── mora_3_3400x3200.avif
│       │   │   ├── mora_4_4000x2667.avif
│       │   │   ├── mora_5_4000x3000.avif
│       │   │   └── mora_6_4000x3000.avif
│       │   ├── pager-prototype/
│       │   │   ├── pager_prototype_1_1198x804.avif
│       │   │   ├── pager_prototype_2_1208x808.avif
│       │   │   ├── pager_prototype_3_1036x696.avif
│       │   │   └── pager_prototype_4_1024x683.avif
│       │   ├── portrait-photography/
│       │   │   ├── portrait_photography_1_2296x2296.avif
│       │   │   ├── portrait_photography_2_2296x2296.avif
│       │   │   ├── portrait_photography_3_3843x2702.avif
│       │   │   ├── portrait_photography_4_2873x3370.avif
│       │   │   └── portrait_photography_5_3170x4795.avif
│       │   ├── product-photography/
│       │   │   ├── product_photography_1_3078x4096.avif
│       │   │   ├── product_photography_2_3317x4096.avif
│       │   │   └── product_photography_3_2795x2820.avif
│       │   ├── redent-app/
│       │   │   ├── redent_app_1_375x812.avif
│       │   │   ├── redent_app_2_375x812.avif
│       │   │   ├── redent_app_3_375x812.avif
│       │   │   ├── redent_app_4_375x812.avif
│       │   │   ├── redent_app_5_375x812.avif
│       │   │   ├── redent_app_6_375x812.avif
│       │   │   ├── redent_app_7_375x812.avif
│       │   │   └── redent_app_8_375x812.avif
│       │   └── redent-kit/
│       │       ├── redent_kit_1_4096x2731.avif
│       │       ├── redent_kit_2_4096x2725.avif
│       │       ├── redent_kit_3_4096x4064.avif
│       │       ├── redent_kit_4_4096x2731.avif
│       │       ├── redent_kit_5_1900x1900.avif
│       │       └── redent_kit_6_2731x2731.avif
│       ├── example.avif
│       └── headshot.avif
├── types/
│   ├── projects/
│   │   ├── imageDisplay.ts
│   │   └── posterDisplay.ts
│   ├── adobeTool.ts
│   ├── headshot.ts
│   ├── image.ts
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
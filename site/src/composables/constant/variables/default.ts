import { PREVIEW_SELECTOR } from "./render";
import type { ResumeStyles } from "../../stores/style";

export const DEFAULT_STYLES = {
  marginV: 50,
  marginH: 45,
  lineHeight: 1.3,
  paragraphSpace: 5,
  themeColor: "#377bb5",
  fontCJK: {
    name: "华康宋体",
    fontFamily: "HKST"
  },
  fontEN: {
    name: "Minion Pro"
  },
  fontSize: 15,
  paper: "A4"
} as ResumeStyles;

export const DEFAULT_MD_CONTENT = `---
name: Haha Ha
header:
  - text: |
      <span style="font-size: 1.2em; font-weight: bold;">Applying for: Cooking Engineer</span>
  - text: <span class="iconify" data-icon="tabler:phone"></span> (+1) 123-456-7890
    newLine: true
  - text: <span class="iconify" data-icon="tabler:mail"></span> icancook@email.com
    link: mailto:icancook@email.com
  - text: <span class="iconify" data-icon="tabler:brand-github"></span> Renovamen
    link: https://github.com/Renovamen
  - text: <span class="iconify" data-icon="charm:person"></span> zxh.me
    link: https://zxh.me
---

<!-- Important: Replace all template content, especially contact details, with your own information. -->

<!-- Important: When updating your email address, remember to change both the "text" (visible text) and the "link" (underlying hyperlink) fields. -->


## Education

**Harvest University**
  ~ Cambridge, MA

M.S. in Cooking Science
  ~ 09/2021 - 01/2023

**Huangdu Institute of Tofu**
  ~ Shanghai, China

B.Eng. in Salad Engineering
  ~ 09/2016 - 07/2020


## Publications

[~P1]: **Eating is All You Need**

    <u>Haha Ha</u>, San Zhang

    *Conference on Nutritional Ingredients Processing Systems (NIPS), 2099*

[~P2]: **You Only Cook Once: Unified, Real-Time Mapo Tofu Recipe**

    <u>Haha Ha</u>, San Zhang, Si Li, Wu Wang

    *Culinary Visualization and Potato Roasting Conference (CVPR), 2077 **(Best Paper Honorable Mention)***


## Experience

**Cooking Engineer Intern**
  ~ Microwavesoft
  ~ 07/2021 - Present

- Developed an innovative, versatile cooking methodology applicable across diverse ingredients, incorporating and improving upon recent culinary trends
- Created a streamlined cream of mushroom soup recipe, achieving results comparable to complex state-of-the-art techniques through a novel mushroom-cutting approach; published in NIPS 2099 (see [~P1])
- Designed a specialized cooking pan that enhanced research efficiency for team members


**Engineering Chef Intern**
  ~ University of California, Berkebake
  ~ 08/2020 - Present

- Developed a precise mapo tofu quality assessment technique using thermometer-based measurements
- Invented a rapid stir-frying algorithm for tofu cooking, replacing vague instructions like "add as much as you can" with specific hot sauce measurements; published in CVPR 2077 (see [~P2])
- Outperformed SOTA cooking methods in both efficiency and quality across experiments with popular tofu types


**Student Chef**
  ~ Cabbage Melon University
  ~ 03/2020 - 06/2020

- Developed an innovative mapo tofu consumption framework utilizing a spoon-chopstick combination
- Engineered a filtering method for tofu dataset creation, inspired by bean grinding techniques
- Established two new metrics for evaluating eating plan novelty and diversity
- Significantly surpassed existing methods and baselines in diversity, novelty, and coherence


**Research Chef Intern**
  ~ Snapchopstick
  ~ 07/2018 - 08/2018

- Designed two novel sandwiches by repurposing breads and meat from traditional bacon cheeseburgers, maximizing resource efficiency
- Leveraged structure duality to boost cooking speed for two complementary tasks based on shared ingredients
- Surpassed strong baselines on QWE'15 and ASDF'14 dataset


## Awards and Honors

**Gold**, International Collegiate Catching Fish Contest (ICCFC)
  ~ 2018

**First Prize**, China National Scholarship for Outstanding Dragon Killers
  ~ 2017, 2018


## Skills

**Programming Languages:** <span class="iconify" data-icon="vscode-icons:file-type-python"></span> Frython, <span class="iconify" data-icon="vscode-icons:file-type-js-official"></span> JavaSauce / <span class="iconify" data-icon="vscode-icons:file-type-typescript-official"></span> TypeSauce, <span class="iconify" data-icon="vscode-icons:file-type-cpp2"></span> Cheese++, <span class="iconify" data-icon="logos:java" data-inline="false"></span> Java Bean

**Tools and Frameworks:** GrillHub, PanFlow, TensorFork, SpiceNet, $\\LaTeX$

**Languages:** Chinese (native), English (proficient)
`;

export const JAKE_STYLES = {
  marginV: 35,
  marginH: 48,
  lineHeight: 1.2,
  paragraphSpace: 6,
  themeColor: "#000000",
  fontCJK: {
    name: "华康宋体",
    fontFamily: "HKST"
  },
  fontEN: {
    name: "EB Garamond"
  },
  fontSize: 16,
  paper: "A4"
} as ResumeStyles;

export const JAKE_MD_CONTENT = `---
name: Jake Ryan
header:
  - text: 123-456-7890
  - text: jake@su.edu
    link: mailto:jake@su.edu
  - text: linkedin.com/in/jake
    link: https://linkedin.com/in/jake
  - text: github.com/jake
    link: https://github.com/jake
---

<!-- Replace all content below with your own information. -->


## Education

**Southwestern University**
  ~ Georgetown, TX

*Bachelor of Arts in Computer Science, Minor in Business*
  ~ Aug. 2018 -- May 2021

**Blinn College**
  ~ Bryan, TX

*Associate's in Liberal Arts*
  ~ Aug. 2014 -- May 2018


## Experience

**Undergraduate Research Assistant**
  ~ June 2020 -- Present

*Texas A&M University*
  ~ College Station, TX

- Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems
- Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data
- Explored ways to visualize GitHub collaboration in a classroom setting

**Information Technology Support Specialist**
  ~ Sep. 2018 -- Present

*Southwestern University*
  ~ Georgetown, TX

- Communicate with managers to set up campus computers used on campus
- Assess and troubleshoot computer problems brought by students, faculty and staff
- Maintain upkeep of computers, classroom equipment, and 200 printers across campus
- Resolved 30+ support tickets weekly, maintaining a 97% user satisfaction rating

**Artificial Intelligence Research Assistant**
  ~ May 2019 -- July 2019

*Southwestern University*
  ~ Georgetown, TX

- Explored methods to generate video game dungeons based off of *The Legend of Zelda*
- Developed a game in Java to test the generated dungeons
- Contributed 50K+ lines of code to an established codebase via Git
- Conducted a human subject study to determine which video game dungeon generation technique is enjoyable
- Wrote an 8-page paper and gave multiple presentations on-campus
- Presented virtually to the World Conference on Computational Intelligence
- Collaborated with a team of 4 researchers to design and evaluate novel procedural generation algorithms


## Projects

**Gitlytics** | *Python, Flask, React, PostgreSQL, Docker*
  ~ June 2020 -- Present

- Developed a full-stack web application using with Flask serving a REST API with React as the frontend
- Implemented GitHub OAuth to get data from user's repositories
- Visualized GitHub data to show collaboration
- Used Celery and Redis for asynchronous tasks

**Simple Paintball** | *Spigot API, Java, Maven, TravisCI, Git*
  ~ May 2018 -- May 2020

- Developed a Minecraft server plugin to entertain kids during free time for a previous job
- Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review
- Implemented continuous delivery using TravisCI to build the plugin upon new a release
- Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin


## Technical Skills

**Languages:** Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R

**Frameworks:** React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI

**Developer Tools:** Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse

**Libraries:** pandas, NumPy, Matplotlib
`;

export const JAKE_CSS_CONTENT = `/* Backbone CSS for Jake's Resume */

/* Basic */

${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: white;
  color: black;
  text-align: left;
}

${PREVIEW_SELECTOR} p,
${PREVIEW_SELECTOR} li,
${PREVIEW_SELECTOR} dl {
  margin: 0;
}

${PREVIEW_SELECTOR} :not(li) > p {
  padding-left: 15px;
  padding-right: 15px;
}

${PREVIEW_SELECTOR} strong {
  font-weight: 600;
}

/* Name — Huge, small-caps, bold, centered */

${PREVIEW_SELECTOR} h1 {
  font-size: 2.2em;
  font-variant: small-caps;
  font-weight: bold;
  line-height: 1;
}

/* Section headings — large, small-caps, NOT bold, with a full-width rule below */

${PREVIEW_SELECTOR} h2 {
  font-size: 1.15em;
  font-variant: small-caps;
  font-weight: normal;
  margin-bottom: 3px;
  border-bottom: .5px solid rgba(0,0,0,0.45) !important;
}


${PREVIEW_SELECTOR} h3 {
  font-size: 1em;
  font-weight: bold;
}

/* Lists */

${PREVIEW_SELECTOR} ul,
${PREVIEW_SELECTOR} ol {
  padding-left: 1.2em;
  margin: 0;
  margin-left: 30px;
  margin-right: 30px;
}

${PREVIEW_SELECTOR} ul {
  list-style-type: disc;
}

${PREVIEW_SELECTOR} ol {
  list-style-type: decimal;
}

${PREVIEW_SELECTOR} ul li {
  font-size: 0.925em;
  margin-top: 2px;
}

/* Definition lists — two-column: left label | right value */

${PREVIEW_SELECTOR} dl {
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
}

${PREVIEW_SELECTOR} dl dt,
${PREVIEW_SELECTOR} dl dd:not(:last-child) {
  flex: 1;
}

${PREVIEW_SELECTOR} dl dd:last-child {
  text-align: right;
  white-space: nowrap;
  padding-left: 8px;
}

/* Row 2 of a subheading: the dl immediately after a dl whose dt contains bold text.
   This matches degree/position rows (italic, slightly smaller). */

${PREVIEW_SELECTOR} dl:has(dt > strong) + dl {
  font-size: 0.9em;
}

${PREVIEW_SELECTOR} dl:has(dt > strong) + dl dt {
  font-style: italic;
}

${PREVIEW_SELECTOR} dl:has(dt > strong) + dl dd {
  font-style: italic;
}

/* Spacing: tight between a subheading row and its bullet list */

${PREVIEW_SELECTOR} dl + ul {
  margin-top: 2px;
}

/* Spacing: between entries when bullets precede the next subheading */

${PREVIEW_SELECTOR} ul + dl {
  margin-top: 6px;
}

/* Spacing: between Education entries (row2 dl → next row1 dl, no ul in between) */

${PREVIEW_SELECTOR} dl:has(dt > strong) + dl + dl {
  margin-top: 6px;
}

/* Tex */

${PREVIEW_SELECTOR} :not(span.katex-display) > span.katex {
  font-size: 1em !important;
}

/* SVG & Images */

${PREVIEW_SELECTOR} svg.iconify {
  vertical-align: -0.2em;
}

${PREVIEW_SELECTOR} img {
  max-width: 100%;
}

/* Header */

${PREVIEW_SELECTOR} .resume-header {
  text-align: center;
}

${PREVIEW_SELECTOR} .resume-header h1 {
  text-align: center;
  line-height: 1;
  margin-bottom: 4px;
}

${PREVIEW_SELECTOR} .resume-header-item {
  font-size: 0.875em;
}

${PREVIEW_SELECTOR} .resume-header-item:not(.no-separator)::after {
  content: " | ";
}

/* Header links are underlined black (matching LaTeX \\underline{}) */

${PREVIEW_SELECTOR} .resume-header-item a {
  color: black;
  text-decoration: underline;
  text-decoration-color: rgba(0,0,0,0.45) !important;
}

/* Body links have no underline (LaTeX [hidelinks]) */

${PREVIEW_SELECTOR} :not(.resume-header-item) > a {
  text-decoration: none;
}

/* Dark & print mode */
/* You might want to comment out the following lines if you change the background or text color. */

.dark ${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: hsl(213, 12%, 15%);
  color: hsl(216, 12%, 84%);
}

.dark ${PREVIEW_SELECTOR} .resume-header-item a {
  color: hsl(216, 12%, 84%);
}

@media print {
  .dark ${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
    background-color: white;
    color: black;
  }
}
`;

export const DEFAULT_CSS_CONTENT = `/* Backbone CSS for Resume Template 1 */

/* Basic */

${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: white;
  color: black;
  text-align: justify;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

${PREVIEW_SELECTOR} p,
${PREVIEW_SELECTOR} li,
${PREVIEW_SELECTOR} dl {
  margin: 0;
}

/* Headings */

${PREVIEW_SELECTOR} h1,
${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  font-weight: bold;
}

${PREVIEW_SELECTOR} h1 {
  font-size: 2.13em;
}

${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  margin-bottom: 5px;
  font-size: 1.2em;
}

${PREVIEW_SELECTOR} h2 {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

/* Lists */

${PREVIEW_SELECTOR} ul,
${PREVIEW_SELECTOR} ol {
  padding-left: 1.5em;
  margin: 0.2em 0;
}

${PREVIEW_SELECTOR} ul {
  list-style-type: circle;
}

${PREVIEW_SELECTOR} ol {
  list-style-type: decimal;
}

/* Definition Lists */

${PREVIEW_SELECTOR} dl {
  display: flex;
}

${PREVIEW_SELECTOR} dl dt,
${PREVIEW_SELECTOR} dl dd:not(:last-child) {
  flex: 1;
}

/* Tex */

${PREVIEW_SELECTOR} :not(span.katex-display) > span.katex {
  font-size: 1em !important;
}

/* SVG & Images */

${PREVIEW_SELECTOR} svg.iconify {
  vertical-align: -0.2em;
}

${PREVIEW_SELECTOR} img {
  max-width: 100%;
}

/* Header */

${PREVIEW_SELECTOR} .resume-header {
  text-align: center;
}

${PREVIEW_SELECTOR} .resume-header h1 {
  text-align: center;
  line-height: 1;
  margin-bottom: 8px;
}

${PREVIEW_SELECTOR} .resume-header-item:not(.no-separator)::after {
  content: " | ";
}

/* Citations */

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definitions"] {
  padding-left: 1.2em;
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definition"] p {
  margin-left: 0.5em;
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definition"]::marker {
  content: attr(data-label);
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="reference"] {
  font-size: 100%;
  top: 0;
}

/* Dark & print mode */
/* You might want to comment out the following lines if you change the background or text color. */

.dark ${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: hsl(213, 12%, 15%);
  color: hsl(216, 12%, 84%);
}

@media print {
  .dark ${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
    background-color: white;
    color: black;
  }
}
`;

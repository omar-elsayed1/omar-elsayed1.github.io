import type { Project } from '../types'

import globalSalesInterface from '../assets/projects/global-sales/interface.png'
import globalSalesPerformance from '../assets/projects/global-sales/sales-performance.png'
import globalMarketIntelligence from '../assets/projects/global-sales/market-intelligence.png'

import mtbLanding from '../assets/projects/mountain-bike/landing-page.png'
import mtbExecutive from '../assets/projects/mountain-bike/executive-sales.png'

import railwayTickets from '../assets/projects/uk-railway/ticket-sales.png'
import railwayJourney from '../assets/projects/uk-railway/journey-performance.png'
import railwayMl from '../assets/projects/uk-railway/ml-insights.png'

import marketOverview from '../assets/projects/market-store/market-overview.png'
import storesPerformance from '../assets/projects/market-store/stores-performance.png'

// Order matters: this is the exact order the projects should appear in.
// Global Sales Analytics is the flagship project (newest, most visually developed).
// GitHub URLs and screenshots are pulled directly from omar-elsayed1's public repos —
// stats below are copied from each repo's own README, not invented.
//
// caseStudy follows the Challenge -> Data -> Questions -> Approach -> Analysis ->
// Solution -> Outcome -> Learning structure, written in first person, to show the
// thinking behind each dashboard rather than just listing tools used.
export const projects: Project[] = [
  {
    id: 'global-sales-analytics',
    index: 1,
    name: 'Global Sales Analytics',
    tagline: 'An enterprise-style Power BI dashboard for exploring global sales performance.',
    description:
      'My newest and most visually developed Power BI project. It takes global sales data and turns it into an interactive, dark-themed dashboard split across a Sales Performance module and a Market Intelligence module.',
    tools: ['Power BI', 'Power Query', 'DAX', 'SQL', 'Excel', 'Data Modeling'],
    featured: true,
    githubUrl: 'https://github.com/omar-elsayed1/Global_Sales_Analytics',
    theme: { accentClass: 'gold' },
    highlights: [
      'Dark UI with a black base and a single gold accent for focus',
      'A landing navigation portal routing into two analysis modules',
      'Treemap, line chart and KPI cards across both report pages',
      'DAX measures built for filter-context-aware totals',
    ],
    stats: [
      { label: 'Total Sales', value: '$10.03M' },
      { label: 'Total Orders', value: '2.82K' },
      { label: 'Countries', value: '19' },
      { label: 'Customers', value: '92' },
    ],
    screenshots: [
      { src: globalSalesInterface, alt: 'Global Sales Analytics landing navigation portal' },
      { src: globalSalesPerformance, alt: 'Global Sales Analytics Sales Performance module' },
      { src: globalMarketIntelligence, alt: 'Global Sales Analytics Market Intelligence module' },
    ],
    caseStudy: {
      challenge:
        'Global sales data is only useful once someone can see it by region, product and customer at a glance. I wanted to build a dashboard a stakeholder could open and immediately understand where performance stands, without reading a spreadsheet.',
      data: 'A global sales dataset covering roughly 2.82K orders from 92 customers across 19 countries, which I loaded into Power BI as the source for the full model.',
      questions:
        'How is sales performance distributed across products and territories? Which product lines and countries contribute the most? What does customer behavior look like once you can filter by region, category or time?',
      approach:
        'I started in Power Query, standardizing inconsistent text fields, checking for duplicate and missing values, and correcting data types so numeric and date fields would behave properly in DAX. From there I built dimension tables for regions, products, customers and dates and connected them into a clean relational model.',
      analysis:
        'I wrote DAX measures for the core KPIs — total sales, order count, average order value, revenue per customer — instead of relying on static calculated columns, so every visual recalculates correctly as a viewer applies slicers.',
      solution:
        'The result is a dark, black-based dashboard with a gold accent for emphasis: a landing portal for navigation, a Sales Performance page covering product-line and territory breakdowns, and a Market Intelligence page for customer and country analysis, tied together with slicers and page-to-page navigation.',
      outcome:
        'The dashboard lets a viewer move from the landing portal into either module and immediately see where performance is concentrated. Across the dataset, Classic Cars leads all product lines, EMEA and North America carry the strongest territory revenue, sales peak in November, and Euro Shopping Channel is the top buyer — with the USA, Spain and France leading by country.',
      learned:
        'This project pushed me to think about dashboard design as its own skill — not just picking chart types, but deciding what a viewer needs to see first, and building the DAX model to support that.',
    },
  },
  {
    id: 'mountain-bike-sales-dashboard',
    index: 2,
    name: 'Mountain Bike Sales Analytics Dashboard',
    tagline: 'An executive Power BI report analyzing December 2021 mountain bike sales.',
    description:
      'A Power BI dashboard analyzing a month of mountain bike sales, combining product rankings, demographic breakdowns and a decomposition tree for exploring revenue drivers.',
    tools: ['Power BI', 'Power Query', 'DAX', 'SQL', 'Excel'],
    featured: false,
    githubUrl: 'https://github.com/omar-elsayed1/Mountain_Bike_Sales_Dashboard',
    theme: { accentClass: 'gold' },
    highlights: [
      'Decomposition tree for breaking revenue down by segment and geography',
      'Donut chart showing customer age-group contribution',
      'Daily profit trend line and top-6-products ranking',
      'Slicers for country, state and gender',
    ],
    stats: [
      { label: 'Total Revenue', value: '$366.1K' },
      { label: 'Total Profit', value: '$164.6K' },
      { label: 'Total Orders', value: '87' },
      { label: 'Profit Margin', value: '45.0%' },
    ],
    screenshots: [
      { src: mtbLanding, alt: 'Mountain Bike Sales Dashboard landing page' },
      { src: mtbExecutive, alt: 'Mountain Bike Sales Dashboard executive sales view' },
    ],
    caseStudy: {
      challenge:
        'A month of mountain bike sales data needed a dashboard that could support both a quick executive overview and a deeper breakdown of what was actually driving revenue and profit.',
      data: 'December 2021 mountain bike sales data, prepared in Excel/SQL and loaded into Power BI, covering orders across countries, states and customer demographics.',
      questions:
        'Which products contribute the most revenue and profit? How does performance vary by country, state and gender? Which customer age group is driving the most orders, and how does profit trend day to day?',
      approach:
        'Before building any visuals, I checked the data for inconsistent or duplicated category values — including several different text representations of "United States" being treated as separate countries — and corrected those in Power Query so totals by geography would be accurate.',
      analysis:
        'I built DAX measures for total revenue, profit and margin to power the KPI cards, and structured the model so a decomposition tree could break those totals down by any combination of product, geography and demographic attribute.',
      solution:
        'The final dashboard pairs a branded landing page with an executive view: KPI cards, a top-6-products ranking, a decomposition tree, a customer age-group donut chart, and a daily profit trend line, with slicers for country, state and gender.',
      outcome:
        'The dashboard shows the month generated $366.1K in revenue at a 45% profit margin across 87 orders, with adults aged 35–64 accounting for 53.93% of customers — the largest single age segment — giving a clear view of who the highest-value customers were that month.',
      learned:
        'I learned that a big share of "dashboard building" is actually data-quality work — a decomposition tree is only useful if the categories underneath it are clean.',
    },
  },
  {
    id: 'uk-railway-analytics-delay-prediction',
    index: 3,
    name: 'UK Railway Analytics & Delay Prediction System',
    tagline: 'My DEPI graduation project: a 3-page BI layer over ticket sales, journeys, and ML delay-risk output.',
    description:
      'My DEPI graduation project, built with a team of five. My contribution was the Power BI Business Intelligence layer: three interactive reporting pages covering ticket sales, journey performance, and machine-learning delay-risk insights.',
    tools: ['SQL', 'Power BI', 'DAX', 'Data Warehouse', 'Python', 'Random Forest'],
    featured: false,
    githubUrl: 'https://github.com/omar-elsayed1/UK_Train_Railway_-DEPI_Grad_Project-',
    theme: { accentClass: 'gold' },
    highlights: [
      '3-page reporting layer: Ticket Sales, Journey Performance, ML Insights',
      'Custom DAX measures for revenue, on-time rate and delay-risk KPIs',
      'ML model output (Random Forest) integrated into the BI layer',
      'Dynamic slicers and cross-filtering across all three pages',
    ],
    stats: [
      { label: 'Ticket Revenue', value: '£741.92K' },
      { label: 'Tickets Sold', value: '31.65K' },
      { label: 'On-Time Rate', value: '86.82%' },
      { label: 'Avg. Delay Probability', value: '13.62%' },
    ],
    screenshots: [
      { src: railwayTickets, alt: 'UK Railway Analytics Ticket Sales & Revenue dashboard' },
      { src: railwayJourney, alt: 'UK Railway Analytics Journey Performance dashboard' },
      { src: railwayMl, alt: 'UK Railway Analytics Machine Learning delay-risk insights dashboard' },
    ],
    caseStudy: {
      challenge:
        'As a five-person DEPI graduation project, our team needed to turn raw UK railway data into a structured analysis of ticket revenue, journey reliability, and delay risk — with my role being the BI and dashboard layer on top of the team\u2019s data pipeline.',
      data: 'UK railway ticketing and journey performance data, processed by the team through an ETL pipeline into a star-schema data warehouse before reaching the BI layer I built.',
      questions:
        'How much ticket revenue is coming from which stations and ticket types? What does on-time performance actually look like across journeys? And once a delay-prediction model exists, how do you make its output usable for someone planning around it?',
      approach:
        'I worked with data already cleaned and validated earlier in the team\u2019s ETL pipeline, connecting Power BI to the structured warehouse and verifying it modeled correctly before shaping it into the tables needed for three distinct reporting pages.',
      analysis:
        'I wrote custom DAX measures for ticket revenue, tickets sold, on-time rate, average delay, and delay-probability metrics, plus measures to surface our Random Forest model\u2019s output — high-risk versus low-risk trips — directly inside the BI layer.',
      solution:
        'I built three pages: Ticket Sales & Revenue (revenue by station and ticket type), Journey Performance (on-time rate, average delay, cancellations), and Machine Learning Insights (high-risk vs low-risk trip counts from the delay-prediction model), connected with dynamic slicers and cross-filtering.',
      outcome:
        'The BI layer shows the railway generated £741.92K in ticket revenue across 31.65K tickets, with an 86.82% on-time rate and a 3.06-minute average delay. The ML Insights page surfaces a 13.62% average delay probability across trips, letting a viewer move from ticketing questions to delay-risk questions without leaving the report.',
      learned:
        'Working alongside four teammates on the ETL and warehouse layers, while owning the BI layer myself, showed me what a full data workflow looks like end-to-end — raw data, through ETL, into a warehouse, through analysis and visualization, into predictive modeling — and gave me a first practical look at where data analysis and data engineering meet.',
    },
  },
  {
    id: 'market-store-dashboard',
    index: 4,
    name: 'Market & Store Performance Dashboard',
    tagline: 'A two-page Power BI report comparing startup market trends and individual store performance.',
    description:
      'A Power BI dashboard split into a Market Overview page for startup ecosystem trends and a Stores Performance page for store-level revenue and marketing ROI.',
    tools: ['Power BI', 'DAX', 'Data Modeling', 'Data Visualization'],
    featured: false,
    githubUrl: 'https://github.com/omar-elsayed1/Market-Store_Dashboard',
    theme: { accentClass: 'gold' },
    highlights: [
      'Market Overview page covering startup trends and business constraints',
      'Stores Performance page with ROI and top-10-states-by-revenue views',
      'Scatter analysis of marketing spend versus revenue',
      'Interactive slicers across strategy, challenge, state and city',
    ],
    stats: [
      { label: 'Store Revenue', value: '$70.23M' },
      { label: 'Average ROI', value: '12.76x' },
      { label: 'Marketing Spend', value: '$5.10M' },
      { label: 'Startups Tracked', value: '2,015+' },
    ],
    screenshots: [
      { src: marketOverview, alt: 'Market & Store Dashboard Market Overview page' },
      { src: storesPerformance, alt: 'Market & Store Dashboard Stores Performance page' },
    ],
    caseStudy: {
      challenge:
        'Stakeholders often need to see both the broader startup market and how individual stores are performing. I wanted one connected report that could support both views without feeling like two separate dashboards glued together.',
      data: 'Startup ecosystem data covering 2,015+ companies, alongside store-level revenue and marketing data, modeled together in Power BI.',
      questions:
        'Which startup types and business challenges show up most in the market data? How does store revenue compare to marketing spend, and which states and cities are performing best?',
      approach:
        'I cleaned the source data, addressing inconsistent formatting and preparing fields for modeling, then shaped it into the tables needed for both the market-level and store-level views so they could share a consistent structure.',
      analysis:
        'I wrote DAX measures for ROI, average company size, and regional spend aggregations, used consistently across both pages so numbers stay comparable no matter which page a viewer is on.',
      solution:
        'I designed a Market Overview page (startup count, average company size, revenue by business challenge) and a Stores Performance page (total revenue, average ROI, marketing spend, top-10 states, a marketing-spend-vs-revenue scatter view), with slicers for strategy, challenge type, startup type, state and city.',
      outcome:
        'The report shows that, across 2,015+ tracked startups, HealthTech leads by type with an average company size around 502 employees. On the store side, total revenue reached $70.23M against $5.10M in marketing spend — an average ROI of 12.76x — with Utah leading the top-10 states by revenue.',
      learned:
        'Designing two connected pages that had to feel like one report taught me a lot about keeping formatting, DAX measures and navigation consistent across a multi-page dashboard.',
    },
  },
]

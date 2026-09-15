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
      problem:
        'Global sales data is only useful once someone can see it by region, product and customer at a glance. The goal was a dashboard a stakeholder could open and immediately understand where performance stands, without reading a spreadsheet.',
      dataset:
        'A global sales dataset covering roughly 2.82K orders from 92 customers across 19 countries, loaded into Power BI as the source for the full model.',
      cleaning:
        'Standardized inconsistent text fields, checked for duplicate and missing values, and corrected data types so numeric and date fields would behave correctly in DAX calculations.',
      transformation:
        'Used Power Query to reshape the raw tables — filtering out unusable rows and preparing dimension tables for regions, products, customers and dates.',
      modeling:
        'Built a model with fact and dimension tables connected on clean relationships, so slicers and visuals filter consistently across both report pages.',
      measures:
        'Wrote DAX measures for core KPIs (total sales, order count, average order value, revenue per customer) rather than relying on static calculated columns, so every visual updates correctly when a slicer changes.',
      dashboard:
        'Designed a dark, black-based layout with a gold accent for emphasis: a landing portal for navigation, a Sales Performance page covering product-line and territory breakdowns, and a Market Intelligence page for customer and country analysis.',
      interactivity:
        'Added slicers and page-to-page navigation so a viewer can drill from the landing portal into either analytical module without losing context.',
      insights:
        'Across the dataset, Classic Cars leads all product lines, EMEA and North America carry the strongest territory revenue, and sales peak in November. On the customer side, Euro Shopping Channel is the top buyer, and the USA, Spain and France are the leading countries by contribution.',
    },
    learned:
      'This project pushed me to think about dashboard design as its own skill — not just picking chart types, but deciding what a viewer needs to see first, and building the DAX model to support that.',
  },
  {
    id: 'mountain-bike-sales-dashboard',
    index: 2,
    name: 'Mountain Bike Sales Dashboard',
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
      problem:
        'A month of mountain bike sales data needed a dashboard that could support both a quick executive overview and a deeper breakdown of what was driving revenue and profit.',
      dataset: 'December 2021 mountain bike sales data, prepared in Excel/SQL and loaded into Power BI.',
      cleaning:
        'Checked the sales data for inconsistent or duplicated category values and corrected formatting issues before building the model, so totals by product and geography would be accurate.',
      transformation:
        'Used Power Query to clean and reshape the sales data ahead of modeling, standardizing category and demographic fields.',
      modeling: 'Structured the cleaned tables into a model that supports slicing revenue and profit by product, geography, and customer demographics.',
      measures: 'Built DAX measures for total revenue, profit and margin to power the KPI cards and feed the decomposition tree with accurate, filter-aware totals.',
      dashboard:
        'Combined a branded landing page with an executive dashboard: KPI cards, a top-6-products ranking, a decomposition tree, a customer age-group donut chart, and a daily profit trend line.',
      interactivity:
        'Slicers for country, state and gender, plus a decomposition tree, let a viewer break total revenue down by their own combination of attributes.',
      insights:
        'The month generated $366.1K in revenue at a 45% profit margin across 87 orders, with adults aged 35–64 accounting for 53.93% of customers — the largest single age segment.',
    },
    learned:
      'I learned that a big share of "dashboard building" is actually data-quality work — a decomposition tree is only useful if the categories underneath it are clean.',
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
      problem:
        'As a five-person DEPI graduation project, the team needed to turn raw UK railway data into a structured analysis of ticket revenue, journey reliability, and delay risk — with my role being the BI and dashboard layer on top.',
      dataset: 'UK railway ticketing and journey performance data, processed by the team through an ETL pipeline before reaching the BI layer.',
      cleaning:
        'Worked with data already cleaned and validated earlier in the team\u2019s ETL pipeline, verifying it modeled correctly once connected to Power BI.',
      transformation: 'Shaped the structured data into the tables needed for three distinct reporting pages: ticket sales, journey performance, and ML insights.',
      modeling: 'Connected to the team\u2019s structured data warehouse to support consistent, repeatable reporting across all three pages.',
      measures:
        'Wrote custom DAX measures for ticket revenue, tickets sold, on-time rate, average delay, and delay-probability metrics, plus measures to surface the Random Forest model\u2019s output inside the BI layer.',
      dashboard:
        'Built three pages: Ticket Sales & Revenue (revenue by station and ticket type), Journey Performance (on-time rate, average delay, cancellations), and Machine Learning Insights (high-risk vs low-risk trip counts from the delay-prediction model).',
      interactivity: 'Added dynamic slicers and cross-filtering so a viewer can move between operational ticketing questions and delay-risk questions without leaving the report.',
      insights:
        'The railway generated £741.92K in ticket revenue across 31.65K tickets, with an 86.82% on-time rate and a 3.06-minute average delay. The delay-prediction layer showed a 13.62% average delay probability across trips, feeding into the high-risk/low-risk views used for planning.',
    },
    learned:
      'Working alongside four teammates on the ETL and modeling layers, while owning the BI layer myself, showed me what a full data workflow looks like end-to-end — and gave me a first practical look at where data analysis and data engineering meet.',
  },
  {
    id: 'market-store-dashboard',
    index: 4,
    name: 'Market & Store Dashboard',
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
      problem:
        'Stakeholders often need to see both the broader startup market and how individual stores are performing — this project set out to support both views in one connected report.',
      dataset: 'Startup ecosystem data (2,015+ companies) and store-level revenue and marketing data, modeled together in Power BI.',
      cleaning: 'Cleaned the source data, addressing inconsistent formatting and preparing fields for modeling.',
      transformation: 'Shaped the data into the tables needed for both the market-level and store-level views.',
      modeling: 'Modeled the data with defined relationships and fact-level metrics so the same underlying tables could power two distinct, purpose-built report pages.',
      measures:
        'Wrote DAX measures for ROI, average company size, and regional spend aggregations, used consistently across both pages.',
      dashboard:
        'Designed a Market Overview page (startup count, average company size, revenue by business challenge) and a Stores Performance page (total revenue, average ROI, marketing spend, top-10 states) with consistent formatting across both.',
      interactivity:
        'Added slicers for marketing strategy, challenge type, startup type, state, city and performance rating, so a viewer can filter either page to their specific question.',
      insights:
        'Across 2,015+ tracked startups, HealthTech leads by type and average company size sits around 502 employees. On the store side, total revenue reached $70.23M against $5.10M in marketing spend, for an average ROI of 12.76x, with Utah leading the top-10 states by revenue.',
    },
    learned:
      'Designing two connected pages that had to feel like one report taught me a lot about keeping formatting, DAX measures and navigation consistent across a multi-page dashboard.',
  },
]

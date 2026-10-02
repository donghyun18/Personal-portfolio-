export const projects = [
  {
    id: "energy-equity",
    title: "Energy Equity Dashboard",
    subtitle: "NYC Electric Consumption Analysis",
    badge: "🏆 Hackathon Finalist – Innovate4Cities 2025",
    description:
      "Identified borough-level disparities and overconsuming developments, built geospatial + time-series insights, and forecasted scenarios using Prophet.",
    bullets: [
      "Processed ~521k records; removed 9,980 duplicates",
      "Built Folium map + monthly time-series trends",
      "Simulated potential KWH savings and ROI scenarios (assumptions stated)",
      "Forecasted 36-month scenarios (Actual vs Reduced) using Prophet",
    ],
    tech: ["Python", "Pandas", "Folium", "Prophet", "NumPy", "Streamlit", "Plotly"],
    github: "https://github.com/donghyun18/innovate4cities-2025-energy-equity",
    images: ["/images/scenario forecast.png"],
    sections: {
      problem: [
        "NYC electricity usage varies across boroughs and housing developments, raising questions about equity and potential inefficiencies.",
        "Goal: identify disparities, detect overconsuming developments, and explore scenario-based reduction strategies.",
      ],
      data: [
        "NYC Open Data: electricity consumption and billing-related fields at development / borough level.",
        "Supplementary data: borough population for per-capita analysis (merge + standardization).",
        "Cleaning: removed duplicates, standardized time and borough fields.",
      ],
      method: [
        "EDA: monthly trends, borough comparisons, and per-capita normalization.",
        "Geospatial visualization: Folium map for latest full-year usage distribution.",
        "Overconsumption detection: compare developments against borough norms and compute expected usage.",
        "Scenario simulation: estimate potential kWh savings under normalization/reduction assumptions.",
        "Forecasting: 36-month projections (Actual vs Reduced) using Prophet.",
      ],
      results: [
        "Produced an equity-focused dashboard workflow (EDA → mapping → simulation → forecasting).",
        "Ranked top potential kWh savers based on expected vs actual usage gaps.",
        "Generated forward-looking scenarios to support transparent planning under stated assumptions.",
      ],
      implications: [
        "Proposed an equity-aware intervention strategy that prioritizes high-usage developments and vulnerable communities.",
        "Estimated potential energy and cost savings under explicitly stated normalization assumptions (scenario-based).",
        "Performed ROI / payback analysis to compare intervention scenarios and support transparent funding allocation.",
        "Framed ROI outputs as planning estimates rather than guaranteed real-world outcomes.",
      ],
    },
  },

  {
    id: "hdb-forecast",
    title: "HDB Resale Price Forecasting",
    subtitle: "Singapore Housing Price Forecasting",
    description:
      "Built an end-to-end ML pipeline from EDA to baseline models, iterative improvements, and time-series exploration.",
    bullets: [
      "EDA on price trends by town, flat type, and time",
      "Data prep pipeline separated from modeling workflows",
      "Trained baseline models (XGBoost, RF, MLP) and evaluated RMSE/MAE",
      "Iterative feature engineering to improve performance",
      "Explored time-series modeling for long-term trends",
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "Matplotlib", "Time Series"],
    github: "https://github.com/donghyun18/csci323-housing-price-prediction",
    images: ["/images/scenario forecast2.png"],
    sections: {
      problem: [
        "HDB resale prices vary by town, flat type, and market conditions, making it hard to estimate fair prices and future trends.",
        "Goal: build a forecasting pipeline that learns price patterns from historical transactions and evaluates predictive reliability.",
      ],
      data: [
        "Public HDB resale transaction data (historical records) with features like town, flat type, storey range, remaining lease, and transaction time.",
        "Preprocessing: handled missing values, encoded categorical fields, and separated data prep from modeling notebooks.",
      ],
      method: [
        "EDA: analyze distribution and trends across location and time.",
        "Feature engineering: derive structured predictors from flat attributes and temporal signals.",
        "Modeling: train baseline regressors (e.g., XGBoost, Random Forest, MLP) and compare RMSE/MAE.",
        "Iteration: improve performance through feature refinement and error-driven experimentation.",
        "Extension: explore time-series modeling as an alternative for longer-horizon trend forecasting.",
      ],
      results: [
        "Delivered an end-to-end ML workflow from cleaning → EDA → modeling → evaluation.",
        "Compared multiple models and tracked improvements across iterations.",
        "Demonstrated an experimental time-series approach to complement regression-based forecasting.",
      ],
      implications: [
        "Enabled more consistent price estimation by translating heterogeneous transaction records into structured predictive features.",
        "Used error metrics (RMSE/MAE) to compare model reliability and guide iterative improvements.",
        "Highlighted how time and location effects can influence pricing, supporting more informed decision-making under changing market conditions.",
      ],
    },
  },
];

export const additionalProjects = [
  {
  id: "mood-diary",
  title: "Mood Diary",
  subtitle: "React journaling app (AI-assisted)",
  description:
    "A journaling web app that helps users reflect on emotions and track mood patterns over time.",
  tech: ["TypeScript", "TailwindCSS", "UI/UX", "OpenAI GPT API", "Recharts"],

  github: "https://github.com/donghyun18/AI-Mood-Diary",
  demo: "https://ai-mood-diary-3j32.vercel.app/",

  showcase: {
    screenshots: [
      // 예: "/showcase/mood-1.png", "/showcase/mood-2.png"
    ],
    gif: "/showcase/mood-demo.gif",
    highlights: [
      "Input → JSON result (emotion, confidence, one-line advice)",
      "GPT prompt structured to return STRICT JSON",
      "React + TypeScript UI with clean journaling flow",
    ],
    note: "Live web app available. Media walkthrough also included below.",
  },
},

  {
    id: "pet-heaven",
    title: "Pet Heaven",
    subtitle: "Frontend and Backend website project",
    description:
      "A multi-page website project featuring adoption, volunteer, donation, and pet release flows.",

    tech: ["React", "JavaScript", "CSS", "MongoDB"],

    github: "https://github.com/donghyun18/React-Data-Management",
    demo: "https://react-project-alpha-topaz.vercel.app/",
  },
];

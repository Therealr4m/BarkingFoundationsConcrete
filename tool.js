
/* =========================================================
   FOUNDATION PROJECT PLANNER
   tool.js
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const button = document.getElementById("cfp-calculate");
  const results = document.getElementById("cfp-results");

  // Exit on pages without this planner.
  if (!button || !results) return;


  /* =========================================
     PROJECT ADVICE
  ========================================= */

  const projectAdvice = {

    extension:
      "For house extensions, foundation requirements depend on the building plans, existing property and ground conditions. Nearby drains, trees and existing footings may also need checking.",

    garage:
      "Garage and workshop foundations need to suit the intended building and loads, particularly where vehicles or heavy equipment are involved.",

    outbuilding:
      "For garden buildings, we check the structure's size, weight and supplier requirements before deciding what foundation arrangement is suitable.",

    commercial:
      "Commercial foundations need to be designed around the intended use, structural loads and ground conditions. The approved design should guide excavation and concrete work.",

    other:
      "The structure's intended use, loads and building plans will determine what foundation work is required."

  };


  /* =========================================
     FOUNDATION TYPE ADVICE
  ========================================= */

  const foundationAdvice = {

    unsure:
      "Not sure which foundation you need? That's common. Strip, trench fill and reinforced slab foundations serve different purposes. The correct option depends on the design and ground conditions.",

    strip:
      "Strip foundations use concrete beneath load-bearing walls. Trench width, depth and concrete specification must follow the approved design and site requirements.",

    trench:
      "Trench fill foundations use concrete to fill most of the excavated trench. They can reduce below-ground blockwork, but trench dimensions and depth still need to follow the design.",

    slab:
      "A reinforced concrete slab may be suitable for certain structures. Slab thickness, reinforcement, edge details and ground preparation must be specified for the loads involved.",

    other:
      "Where an engineer has specified a different foundation system, excavation and concrete installation must follow those drawings and requirements."

  };


  /* =========================================
     GROUND ADVICE
  ========================================= */

  const groundAdvice = {

    unknown:
      "Ground conditions need checking before excavation. What looks firm at the surface doesn't always tell us what's underneath.",

    level:
      "Level-looking ground is a good starting point, but soil type, bearing conditions and nearby structures still need checking.",

    sloping:
      "Sloping ground may need stepped foundations, different excavation levels or retaining measures, depending on the design.",

    soft:
      "Soft, filled or uncertain ground may need further investigation or a revised foundation design before concrete work begins."

  };


  /* =========================================
     ACCESS ADVICE
  ========================================= */

  const accessAdvice = {

    clear:
      "Clear side access should make excavation, spoil removal and concrete delivery easier to organise.",

    restricted:
      "Narrow passages, steps and obstacles can affect machinery access, spoil removal and how concrete reaches the trenches.",

    property:
      "Where access is through the property, material movement and protection of finished surfaces need careful planning.",

    open:
      "Open site access may allow mechanical excavation and direct concrete deliveries, depending on ground and site conditions."

  };


  /* =========================================
     HELPERS
  ========================================= */

  const getValue = (id) =>
    document.getElementById(id).value;

  const escapeHTML = (value) =>
    String(value).replace(/[&<>"']/g, function (char) {

      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };

      return entities[char];

    });


  /* =========================================
     GENERATE OVERVIEW
  ========================================= */

  button.addEventListener("click", function () {

    const lengthInput = getValue("cfp-length").trim();
    const widthInput = getValue("cfp-width").trim();

    const length = Number(lengthInput);
    const width = Number(widthInput);

    const project = getValue("cfp-project");
    const foundation = getValue("cfp-foundation");
    const ground = getValue("cfp-ground");
    const access = getValue("cfp-access");

    results.hidden = false;


    /* =====================================
       VALIDATION
    ===================================== */

    if (
      lengthInput === "" ||
      widthInput === "" ||
      !Number.isFinite(length) ||
      !Number.isFinite(width) ||
      length <= 0 ||
      width <= 0 ||
      length > 100 ||
      width > 100
    ) {

      results.innerHTML = `
        <p class="cfp-error">
          Please enter a valid length and width
          greater than 0 and no more than 100 metres.
        </p>
      `;

      return;

    }


    /* =====================================
       FOOTPRINT CALCULATION
    ===================================== */

    const footprint = length * width;

    const projectLabels = {
      extension: "House Extension",
      garage: "Garage / Workshop",
      outbuilding: "Garden Building",
      commercial: "Light Commercial Building",
      other: "Other Structure"
    };

    const foundationLabels = {
      unsure: "To Be Confirmed",
      strip: "Strip Foundations",
      trench: "Trench Fill",
      slab: "Reinforced Slab",
      other: "Engineer-Specified"
    };


    /* =====================================
       RESULTS
    ===================================== */

    results.innerHTML = `
      <h3>Your Foundation Project Overview</h3>

      <p class="cfp-result-intro">
        Here's what we'd consider for your
        ${escapeHTML(projectLabels[project])}
        project in Barking.
      </p>

      <div class="cfp-stats">

        <div class="cfp-stat">
          <span class="cfp-stat-label">
            Approximate Project Footprint
          </span>

          <strong class="cfp-stat-value">
            ${footprint.toFixed(2)} m²
          </strong>
        </div>

        <div class="cfp-stat">
          <span class="cfp-stat-label">
            Foundation Type Selected
          </span>

          <strong class="cfp-stat-value">
            ${escapeHTML(foundationLabels[foundation])}
          </strong>
        </div>

      </div>

      <h4 class="cfp-advice-title">
        What Matters For Your Project
      </h4>

      <ul class="cfp-advice-list">
        <li>${projectAdvice[project]}</li>
        <li>${foundationAdvice[foundation]}</li>
        <li>${groundAdvice[ground]}</li>
        <li>${accessAdvice[access]}</li>
      </ul>

      <p class="cfp-disclaimer">
        This is a general planning overview, not a
        structural design or foundation specification.
        The project footprint is not the concrete area
        or trench quantity. Foundation type, depth,
        width, reinforcement and concrete specification
        must be confirmed from the relevant plans,
        ground conditions and professional assessment.
      </p>
    `;


    /* =====================================
       SCROLL TO RESULTS
    ===================================== */

    results.scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches ? "auto" : "smooth",
      block: "nearest"
    });

  });

});

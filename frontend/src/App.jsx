import React, { useMemo, useState } from "react";
import "./App.css";

/* =========================================================
   CAMPUS DATA
   ========================================================= */

const places = [
  {
    id: "ratan-tata",
    name: "Ratan Tata Bhavan",
    category: "Blocks",
    short: "Ratan Tata",
    crowd: "Low",
    devices: 42,
    peak: "10:00 AM - 12:00 PM",
    low: "4:00 PM - 5:00 PM",
    node: "J1",
    x: 110,
    y: 90,
  },
  {
    id: "kl-rao",
    name: "K.L. Rao Bhavan",
    category: "Blocks",
    short: "K.L. Rao",
    crowd: "Moderate",
    devices: 91,
    peak: "11:00 AM - 1:00 PM",
    low: "4:00 PM - 5:00 PM",
    node: "J2",
    x: 245,
    y: 90,
  },
  {
    id: "b1-gates",
    name: "B1 Gates Bhavan",
    category: "Blocks",
    short: "B1 Gates",
    crowd: "High",
    devices: 164,
    peak: "9:00 AM - 11:00 AM",
    low: "3:00 PM - 4:00 PM",
    node: "J3",
    x: 380,
    y: 90,
  },
  {
    id: "visvesvaraya",
    name: "Visvesvaraya Bhavan",
    category: "Blocks",
    short: "Visvesvaraya",
    crowd: "Moderate",
    devices: 78,
    peak: "10:00 AM - 12:00 PM",
    low: "3:00 PM - 5:00 PM",
    node: "J4",
    x: 520,
    y: 90,
  },
  {
    id: "cv-raman",
    name: "C.V. Raman Bhavan",
    category: "Blocks",
    short: "C.V. Raman",
    crowd: "High",
    devices: 148,
    peak: "10:00 AM - 1:00 PM",
    low: "4:00 PM - 5:00 PM",
    node: "J5",
    x: 670,
    y: 90,
  },
  {
    id: "ramanjaneyam",
    name: "Ramanjaneyam Bhavan",
    category: "Blocks",
    short: "Ramanjaneyam",
    crowd: "Low",
    devices: 39,
    peak: "9:00 AM - 10:00 AM",
    low: "2:00 PM - 5:00 PM",
    node: "J6",
    x: 830,
    y: 90,
  },
  {
    id: "newton",
    name: "Newton Bhavan",
    category: "Blocks",
    short: "Newton",
    crowd: "Moderate",
    devices: 65,
    peak: "10:00 AM - 12:00 PM",
    low: "3:00 PM - 5:00 PM",
    node: "J7",
    x: 960,
    y: 90,
  },

  {
    id: "kl-ground",
    name: "K.L. Rao Ground",
    category: "Grounds",
    short: "K.L. Rao Ground",
    crowd: "Low",
    devices: 27,
    peak: "5:00 PM - 6:00 PM",
    low: "9:00 AM - 11:00 AM",
    node: "G1",
    x: 250,
    y: 235,
  },
  {
    id: "cv-ground",
    name: "C.V. Raman Ground",
    category: "Grounds",
    short: "C.V. Raman Ground",
    crowd: "Moderate",
    devices: 73,
    peak: "4:00 PM - 6:00 PM",
    low: "10:00 AM - 12:00 PM",
    node: "G2",
    x: 675,
    y: 230,
  },
  {
    id: "bus-ground",
    name: "Bus Ground",
    category: "Grounds",
    short: "Bus Ground",
    crowd: "High",
    devices: 171,
    peak: "8:00 AM - 9:30 AM",
    low: "11:00 AM - 2:00 PM",
    node: "G3",
    x: 700,
    y: 390,
  },
  {
    id: "3d-ground",
    name: "3D Ground",
    category: "Grounds",
    short: "3D Ground",
    crowd: "Low",
    devices: 22,
    peak: "5:00 PM - 6:00 PM",
    low: "10:00 AM - 3:00 PM",
    node: "G4",
    x: 700,
    y: 520,
  },

  {
    id: "football",
    name: "Football Ground",
    category: "Other",
    short: "Football Ground",
    crowd: "Moderate",
    devices: 83,
    peak: "4:00 PM - 6:00 PM",
    low: "10:00 AM - 12:00 PM",
    node: "G5",
    x: 405,
    y: 235,
  },
  {
    id: "mango",
    name: "Mango Garden",
    category: "Other",
    short: "Mango Garden",
    crowd: "Low",
    devices: 18,
    peak: "4:00 PM - 5:00 PM",
    low: "11:00 AM - 2:00 PM",
    node: "G6",
    x: 535,
    y: 235,
  },
  {
    id: "temple",
    name: "Temple",
    category: "Other",
    short: "Temple",
    crowd: "Moderate",
    devices: 54,
    peak: "7:00 AM - 9:00 AM",
    low: "1:00 PM - 3:00 PM",
    node: "G7",
    x: 535,
    y: 310,
  },
  {
    id: "water-pond",
    name: "Water Pond",
    category: "Other",
    short: "Water Pond",
    crowd: "Low",
    devices: 12,
    peak: "5:00 PM - 6:00 PM",
    low: "10:00 AM - 3:00 PM",
    node: "G8",
    x: 410,
    y: 355,
  },
  {
    id: "boys-hostel",
    name: "Boys Hostel",
    category: "Other",
    short: "Boys Hostel",
    crowd: "High",
    devices: 188,
    peak: "6:00 PM - 9:00 PM",
    low: "10:00 AM - 1:00 PM",
    node: "G9",
    x: 800,
    y: 235,
  },
  {
    id: "guest-house",
    name: "Guest House",
    category: "Other",
    short: "Guest House",
    crowd: "Low",
    devices: 16,
    peak: "10:00 AM - 12:00 PM",
    low: "2:00 PM - 5:00 PM",
    node: "G10",
    x: 970,
    y: 235,
  },
  {
    id: "girls-hostel",
    name: "Girls Hostel",
    category: "Other",
    short: "Girls Hostel",
    crowd: "High",
    devices: 176,
    peak: "6:00 PM - 9:00 PM",
    low: "10:00 AM - 1:00 PM",
    node: "G11",
    x: 220,
    y: 445,
  },
  {
    id: "pharmacy-college",
    name: "Aditya Pharmacy College",
    category: "Other",
    short: "Pharmacy College",
    crowd: "Moderate",
    devices: 68,
    peak: "10:00 AM - 1:00 PM",
    low: "3:00 PM - 5:00 PM",
    node: "G12",
    x: 350,
    y: 445,
  },
  {
    id: "college-pharmacy",
    name: "Aditya College of Pharmacy",
    category: "Other",
    short: "College of Pharmacy",
    crowd: "Moderate",
    devices: 62,
    peak: "10:00 AM - 1:00 PM",
    low: "3:00 PM - 5:00 PM",
    node: "G13",
    x: 350,
    y: 535,
  },
  {
    id: "polytechnic",
    name: "Aditya Polytechnic College",
    category: "Other",
    short: "Polytechnic College",
    crowd: "Moderate",
    devices: 59,
    peak: "10:00 AM - 1:00 PM",
    low: "3:00 PM - 5:00 PM",
    node: "G14",
    x: 350,
    y: 610,
  },
  {
    id: "abk",
    name: "A.B.K. Kalyan Bhavan",
    category: "Other",
    short: "A.B.K. Kalyan Bhavan",
    crowd: "Low",
    devices: 31,
    peak: "10:00 AM - 12:00 PM",
    low: "2:00 PM - 5:00 PM",
    node: "G15",
    x: 500,
    y: 445,
  },
  {
    id: "business-incubator",
    name: "Aditya Global Business Incubator",
    category: "Other",
    short: "Business Incubator",
    crowd: "Low",
    devices: 25,
    peak: "11:00 AM - 1:00 PM",
    low: "3:00 PM - 5:00 PM",
    node: "G16",
    x: 155,
    y: 315,
  },
];

/* =========================================================
   DIGITAL CAMPUS ROAD NETWORK
   ========================================================= */

const nodes = {
  START: { x: 70, y: 365 },

  J1: { x: 110, y: 150 },
  J2: { x: 245, y: 150 },
  J3: { x: 380, y: 150 },
  J4: { x: 520, y: 150 },
  J5: { x: 670, y: 150 },
  J6: { x: 830, y: 150 },
  J7: { x: 960, y: 150 },

  C1: { x: 380, y: 300 },
  C2: { x: 520, y: 300 },
  C3: { x: 670, y: 300 },

  B1: { x: 245, y: 380 },
  B2: { x: 380, y: 380 },
  B3: { x: 520, y: 380 },
  B4: { x: 670, y: 380 },

  D1: { x: 245, y: 500 },
  D2: { x: 380, y: 500 },
  D3: { x: 520, y: 500 },
  D4: { x: 670, y: 500 },

  E1: { x: 380, y: 625 },
  E2: { x: 670, y: 625 },

  G1: { x: 245, y: 235 },
  G2: { x: 670, y: 230 },
  G3: { x: 700, y: 390 },
  G4: { x: 700, y: 520 },
  G5: { x: 405, y: 235 },
  G6: { x: 535, y: 235 },
  G7: { x: 535, y: 310 },
  G8: { x: 410, y: 355 },
  G9: { x: 800, y: 235 },
  G10: { x: 970, y: 235 },
  G11: { x: 220, y: 445 },
  G12: { x: 350, y: 445 },
  G13: { x: 350, y: 535 },
  G14: { x: 350, y: 610 },
  G15: { x: 500, y: 445 },
  G16: { x: 155, y: 315 },
};

const graph = {
  START: ["J1", "G16"],
  J1: ["START", "J2"],
  J2: ["J1", "J3", "G1", "B1"],
  J3: ["J2", "J4", "G5", "C1"],
  J4: ["J3", "J5", "G6", "C2"],
  J5: ["J4", "J6", "G2", "C3"],
  J6: ["J5", "J7", "G9"],
  J7: ["J6", "G10"],

  C1: ["J3", "C2", "B2"],
  C2: ["J4", "C1", "C3", "G7", "B3"],
  C3: ["J5", "C2", "B4"],

  B1: ["J2", "B2", "G1", "G16", "D1"],
  B2: ["B1", "C1", "B3", "G8", "D2"],
  B3: ["B2", "C2", "B4", "G7", "G15", "D3"],
  B4: ["B3", "C3", "G3", "D4"],

  D1: ["B1", "D2", "G11", "G12"],
  D2: ["D1", "D3", "B2", "G12", "G13"],
  D3: ["D2", "D4", "B3", "G15"],
  D4: ["D3", "B4", "G3", "G4", "E2"],

  E1: ["D2", "E2", "G14"],
  E2: ["D4", "E1", "G4"],

  G1: ["J2", "B1"],
  G2: ["J5", "B4"],
  G3: ["B4", "D4"],
  G4: ["G3", "D4", "E2"],
  G5: ["J3"],
  G6: ["J4"],
  G7: ["C2", "B3"],
  G8: ["B2"],
  G9: ["J6"],
  G10: ["J7"],
  G11: ["D1"],
  G12: ["D1", "D2"],
  G13: ["D2"],
  G14: ["E1"],
  G15: ["D3"],
  G16: ["START", "B1"],
};

/* =========================================================
   A* PATHFINDING
   ========================================================= */

function distance(a, b) {
  const dx = nodes[a].x - nodes[b].x;
  const dy = nodes[a].y - nodes[b].y;
  return Math.sqrt(dx * dx + dy * dy);
}

function aStar(start, goal) {
  const open = [start];
  const cameFrom = {};

  const gScore = {};
  const fScore = {};

  Object.keys(nodes).forEach((node) => {
    gScore[node] = Infinity;
    fScore[node] = Infinity;
  });

  gScore[start] = 0;
  fScore[start] = distance(start, goal);

  while (open.length > 0) {
    open.sort((a, b) => fScore[a] - fScore[b]);
    const current = open.shift();

    if (current === goal) {
      const path = [];
      let temp = current;

      while (temp) {
        path.unshift(temp);
        temp = cameFrom[temp];
      }

      return path;
    }

    for (const neighbor of graph[current] || []) {
      const tentative = gScore[current] + distance(current, neighbor);

      if (tentative < gScore[neighbor]) {
        cameFrom[neighbor] = current;
        gScore[neighbor] = tentative;
        fScore[neighbor] =
          tentative + distance(neighbor, goal);

        if (!open.includes(neighbor)) {
          open.push(neighbor);
        }
      }
    }
  }

  return [];
}

/* =========================================================
   HELPERS
   ========================================================= */

function crowdColor(status) {
  if (status === "Low") return "#16a34a";
  if (status === "Moderate") return "#eab308";
  return "#dc2626";
}

function getPlace(id) {
  return places.find((place) => place.id === id);
}

function getDirections(path) {
  if (!path || path.length < 2) return [];

  const directions = [];

  for (let i = 1; i < path.length; i++) {
    if (i === 1) {
      directions.push("Start and continue along the campus road.");
    } else {
      const previous = nodes[path[i - 2]];
      const current = nodes[path[i - 1]];
      const next = nodes[path[i]];

      const v1x = current.x - previous.x;
      const v1y = current.y - previous.y;
      const v2x = next.x - current.x;
      const v2y = next.y - current.y;

      const cross = v1x * v2y - v1y * v2x;

      if (Math.abs(cross) < 1000) {
        directions.push("Continue straight.");
      } else if (cross > 0) {
        directions.push("Turn left at the junction.");
      } else {
        directions.push("Turn right at the junction.");
      }
    }
  }

  directions.push("You have reached your destination.");
  return directions;
}

/* =========================================================
   COMPONENT
   ========================================================= */

export default function App() {
  const [activeModule, setActiveModule] =
    useState("navigation");

  const [navCategory, setNavCategory] =
    useState("Blocks");

  const [startLocation, setStartLocation] =
    useState("START");

  const [destination, setDestination] =
    useState("");

  const [route, setRoute] = useState([]);

  const [searchText, setSearchText] =
    useState("");

  const [searchResult, setSearchResult] =
    useState(null);

  const [selectedCrowd, setSelectedCrowd] =
    useState(null);

  const [assistantQuestion, setAssistantQuestion] =
    useState("");

  const [assistantAnswer, setAssistantAnswer] =
    useState("");

  const filteredPlaces = useMemo(
    () =>
      places.filter(
        (place) => place.category === navCategory
      ),
    [navCategory]
  );

  const destinationPlace = getPlace(destination);

  const routeDistance = useMemo(() => {
    if (route.length < 2) return 0;

    let total = 0;

    for (let i = 1; i < route.length; i++) {
      total += distance(route[i - 1], route[i]);
    }

    // Demo map scale
    return Math.max(25, Math.round(total * 0.45));
  }, [route]);

 function findRoute() {
  if (!destination) return;

  const place = getPlace(destination);

  if (!place) return;

  const newRoute = aStar(
    startLocation,
    place.node
  );

  if (newRoute.length === 0) {
    setRoute([]);
    return;
  }

  // Show route preview first
  setRoute(newRoute);
}

  function handleSearch() {
    const query = searchText.toLowerCase().trim();

    if (!query) return;

    const result = places.find((place) => {
      const text =
        `${place.name} ${place.short}`.toLowerCase();

      return (
        text.includes(query) ||
        query.includes(place.short.toLowerCase()) ||
        query.includes(place.name.toLowerCase())
      );
    });

    if (result) {
      setSearchResult(result);

      setActiveModule("navigation");
      setDestination(result.id);

      const newRoute = aStar(
        startLocation,
        result.node
      );

      setRoute(newRoute);
    } else {
      setSearchResult({
        name: "Location not found",
        message:
          "Try a campus building, ground, hostel, temple, garden or other known location.",
      });
    }
  }

  function askAssistant() {
    const q = assistantQuestion.toLowerCase();

    let answer =
      "I can help with campus locations, navigation, crowd information and campus facilities.";

    if (q.includes("library")) {
      answer =
        "The library location can be added to the campus knowledge base with its timings and services.";
    } else if (
      q.includes("crowd") ||
      q.includes("busy")
    ) {
      answer =
        "CampusNav AI uses crowd prediction data to classify locations as Low, Moderate or High crowd.";
    } else if (
      q.includes("ratan") ||
      q.includes("canteen")
    ) {
      answer =
        "Ratan Tata Bhavan is available in Campus Navigation. You can select it as a destination and generate a route.";
    } else if (
      q.includes("ground")
    ) {
      answer =
        "CampusNav AI supports navigation to campus grounds including K.L. Rao Ground, C.V. Raman Ground, Bus Ground and 3D Ground.";
    } else if (
      q.includes("hostel")
    ) {
      answer =
        "The campus map contains Boys Hostel and Girls Hostel as navigable locations.";
    }

    setAssistantAnswer(answer);
  }

  return (
    <div className="campus-app">
      {/* =================================================
          HEADER
      ================================================= */}

      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">🧭</div>

          <div>
            <h1>CampusNav AI</h1>
            <p>Smart AI-powered campus navigation</p>
          </div>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Campus System Ready
        </div>
      </header>

      {/* =================================================
          MAIN NAVIGATION
      ================================================= */}

      <div className="module-tabs">
        <button
          className={
            activeModule === "navigation"
              ? "module-tab active"
              : "module-tab"
          }
          onClick={() =>
            setActiveModule("navigation")
          }
        >
          🗺️
          <span>Campus Navigation</span>
        </button>

        <button
          className={
            activeModule === "crowd"
              ? "module-tab active"
              : "module-tab"
          }
          onClick={() =>
            setActiveModule("crowd")
          }
        >
          👥
          <span>Smart Crowd Detection</span>
        </button>

        <button
          className={
            activeModule === "search"
              ? "module-tab active"
              : "module-tab"
          }
          onClick={() =>
            setActiveModule("search")
          }
        >
          🔎
          <span>Smart Search</span>
        </button>

        <button
          className={
            activeModule === "assistant"
              ? "module-tab active"
              : "module-tab"
          }
          onClick={() =>
            setActiveModule("assistant")
          }
        >
          🤖
          <span>AI Campus Assistant</span>
        </button>
      </div>

      <main className="content">

        {/* =================================================
            NAVIGATION MODULE
        ================================================= */}

        {activeModule === "navigation" && (
          <section>
            <div className="page-heading">
              <div>
                <h2>Campus Navigation</h2>
                <p>
                  Find an efficient route between
                  campus locations.
                </p>
              </div>

              <div className="map-legend">
                <span>
                  <i className="legend green"></i>
                  Low
                </span>

                <span>
                  <i className="legend yellow"></i>
                  Moderate
                </span>

                <span>
                  <i className="legend red"></i>
                  High
                </span>
              </div>
            </div>

            <div className="navigation-layout">

              {/* LEFT PANEL */}

              <aside className="control-panel">

                <label>Starting Location</label>

                <select
                  value={startLocation}
                  onChange={(e) => {
                    setStartLocation(
                      e.target.value
                    );
                    setRoute([]);
                  }}
                >
                  <option value="START">
                    📍 Current Location (Demo)
                  </option>

                  {places.map((place) => (
                    <option
                      key={place.id}
                      value={place.node}
                    >
                      {place.name}
                    </option>
                  ))}
                </select>

                <label>Destination Type</label>

                <div className="category-buttons">
                  {["Blocks", "Grounds", "Other"].map(
                    (category) => (
                      <button
                        key={category}
                        className={
                          navCategory === category
                            ? "category active"
                            : "category"
                        }
                        onClick={() => {
                          setNavCategory(
                            category
                          );
                          setDestination("");
                          setRoute([]);
                        }}
                      >
                        {category}
                      </button>
                    )
                  )}
                </div>

                <label>Destination</label>

                <select
                  value={destination}
                  onChange={(e) => {
                    setDestination(
                      e.target.value
                    );
                    setRoute([]);
                  }}
                >
                  <option value="">
                    Select destination
                  </option>

                  {filteredPlaces.map((place) => (
                    <option
                      key={place.id}
                      value={place.id}
                    >
                      {place.name}
                    </option>
                  ))}
                </select>

                <button
                  className="route-button"
                  onClick={findRoute}
                  disabled={!destination}
                >
                  🧭 Find Efficient Route
                </button>

                {destinationPlace && (
                  <div className="destination-card">
                    <div
                      className="crowd-dot"
                      style={{
                        background:
                          crowdColor(
                            destinationPlace.crowd
                          ),
                      }}
                    ></div>

                    <div>
                      <strong>
                        {destinationPlace.name}
                      </strong>

                      <small>
                        Crowd:{" "}
                        {destinationPlace.crowd}
                      </small>
                    </div>
                  </div>
                )}

                {route.length > 0 && (
                  <div className="route-summary">
                    <h3>Route Summary</h3>

                    <div className="summary-row">
                      <span>Distance</span>
                      <strong>
                        {routeDistance} m
                      </strong>
                    </div>

                    <div className="summary-row">
                      <span>Algorithm</span>
                      <strong>A*</strong>
                    </div>

                    <div className="summary-row">
                      <span>Route Nodes</span>
                      <strong>
                        {route.length}
                      </strong>
                    </div>
                  </div>
                )}
              </aside>

              {/* DIGITAL MAP */}

              <div className="map-card">

                <div className="map-header">
                  <div>
                    <strong>
                      Aditya University Digital Campus
                      Map
                    </strong>

                    <small>
                      Interactive campus navigation
                    </small>
                  </div>

                  <span className="map-badge">
                    A* Navigation
                  </span>
                </div>

                <div className="digital-map">

                  <svg
                    viewBox="0 0 1040 680"
                    className="campus-svg"
                  >
                    {/* ROADS */}

                    <g
                      className="roads"
                      fill="none"
                      stroke="#64748b"
                      strokeWidth="18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M70 365 L110 150 L245 150 L380 150 L520 150 L670 150 L830 150 L960 150" />

                      <path d="M245 150 L245 235 L245 380 L245 500" />

                      <path d="M380 150 L380 300 L380 380 L380 500 L380 625" />

                      <path d="M520 150 L520 300 L520 380 L520 500" />

                      <path d="M670 150 L670 300 L670 380 L670 500 L670 625" />

                      <path d="M245 380 L380 380 L520 380 L670 380" />

                      <path d="M245 500 L380 500 L520 500 L670 500" />

                      <path d="M380 300 L520 300 L670 300" />

                      <path d="M380 625 L670 625" />

                      <path d="M245 235 L380 235" />

                      <path d="M520 235 L670 235" />

                      <path d="M670 230 L800 235 L970 235" />
                    </g>

                    {/* ROAD CENTER */}

                    <g
                      fill="none"
                      stroke="#cbd5e1"
                      strokeWidth="2"
                      strokeDasharray="8 8"
                    >
                      <path d="M70 365 L110 150 L245 150 L380 150 L520 150 L670 150 L830 150 L960 150" />

                      <path d="M245 150 L245 500" />

                      <path d="M380 150 L380 625" />

                      <path d="M520 150 L520 500" />

                      <path d="M670 150 L670 625" />

                      <path d="M245 380 L670 380" />

                      <path d="M245 500 L670 500" />
                    </g>

                    {/* BUILDING BLOCKS */}

                    {places
                      .filter(
                        (place) =>
                          place.category ===
                          "Blocks"
                      )
                      .map((place) => (
                        <g
                          key={place.id}
                          transform={`translate(${place.x - 52}, ${
                            place.y - 32
                          })`}
                        >
                          <rect
                            width="104"
                            height="64"
                            rx="10"
                            className="building"
                          />

                          <circle
                            cx="92"
                            cy="12"
                            r="7"
                            fill={crowdColor(
                              place.crowd
                            )}
                          />

                          <text
                            x="52"
                            y="25"
                            textAnchor="middle"
                            className="building-title"
                          >
                            {place.short}
                          </text>

                          <text
                            x="52"
                            y="44"
                            textAnchor="middle"
                            className="building-type"
                          >
                            BLOCK
                          </text>
                        </g>
                      ))}

                    {/* GROUNDS */}

                    {places
                      .filter(
                        (place) =>
                          place.category ===
                          "Grounds"
                      )
                      .map((place) => (
                        <g
                          key={place.id}
                          transform={`translate(${place.x - 65}, ${
                            place.y - 38
                          })`}
                        >
                          <rect
                            width="130"
                            height="76"
                            rx="25"
                            className="ground"
                          />

                          <text
                            x="65"
                            y="38"
                            textAnchor="middle"
                            className="ground-title"
                          >
                            {place.short}
                          </text>

                          <circle
                            cx="115"
                            cy="14"
                            r="7"
                            fill={crowdColor(
                              place.crowd
                            )}
                          />
                        </g>
                      ))}

                    {/* OTHER PLACES */}

                    {places
                      .filter(
                        (place) =>
                          place.category ===
                          "Other"
                      )
                      .map((place) => (
                        <g
                          key={place.id}
                          transform={`translate(${place.x}, ${place.y})`}
                        >
                          <circle
                            r="23"
                            className="poi"
                          />

                          <circle
                            r="7"
                            fill={crowdColor(
                              place.crowd
                            )}
                          />

                          <text
                            y="38"
                            textAnchor="middle"
                            className="poi-label"
                          >
                            {place.short}
                          </text>
                        </g>
                      ))}

                    {/* ROUTE */}

                    {route.length > 1 && (
                      <>
                        <polyline
                          points={route
                            .map(
                              (node) =>
                                `${nodes[node].x},${nodes[node].y}`
                            )
                            .join(" ")}
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <polyline
                          points={route
                            .map(
                              (node) =>
                                `${nodes[node].x},${nodes[node].y}`
                            )
                            .join(" ")}
                          fill="none"
                          stroke="#60a5fa"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* START */}

                        <circle
                          cx={nodes[startLocation].x}
                          cy={nodes[startLocation].y}
                          r="14"
                          fill="#16a34a"
                          stroke="white"
                          strokeWidth="5"
                        />

                        {/* DESTINATION */}

                        <circle
                          cx={
                            nodes[
                              destinationPlace?.node
                            ]?.x
                          }
                          cy={
                            nodes[
                              destinationPlace?.node
                            ]?.y
                          }
                          r="14"
                          fill="#dc2626"
                          stroke="white"
                          strokeWidth="5"
                        />
                      </>
                    )}
                  </svg>
                </div>

                {/* DIRECTIONS */}

                {route.length > 0 && (
                  <div className="directions">
                    <h3>Turn-by-Turn Directions</h3>

                    {getDirections(route).map(
                      (direction, index) => (
                        <div
                          className="direction"
                          key={index}
                        >
                          <span>
                            {index + 1}
                          </span>

                          <p>{direction}</p>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* =================================================
            CROWD MODULE
        ================================================= */}

        {activeModule === "crowd" && (
          <section>
            <div className="page-heading">
              <div>
                <h2>Smart Crowd Detection</h2>
                <p>
                  ML-based campus crowd intelligence
                </p>
              </div>
            </div>

            <div className="crowd-grid">
              {places.map((place) => (
                <button
                  className="crowd-card"
                  key={place.id}
                  onClick={() =>
                    setSelectedCrowd(place)
                  }
                >
                  <div className="crowd-card-top">
                    <div
                      className="big-crowd-dot"
                      style={{
                        background:
                          crowdColor(
                            place.crowd
                          ),
                      }}
                    ></div>

                    <span
                      className="crowd-status"
                      style={{
                        color:
                          crowdColor(
                            place.crowd
                          ),
                      }}
                    >
                      {place.crowd}
                    </span>
                  </div>

                  <h3>{place.name}</h3>

                  <p>
                    Estimated active devices
                  </p>

                  <strong>
                    {place.devices}
                  </strong>
                </button>
              ))}
            </div>

            {selectedCrowd && (
              <div className="crowd-detail">
                <h2>
                  {selectedCrowd.name}
                </h2>

                <div className="analytics-grid">
                  <div>
                    <span>Current Status</span>
                    <strong
                      style={{
                        color: crowdColor(
                          selectedCrowd.crowd
                        ),
                      }}
                    >
                      {selectedCrowd.crowd}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Estimated Devices
                    </span>
                    <strong>
                      {selectedCrowd.devices}
                    </strong>
                  </div>

                  <div>
                    <span>Predicted Peak</span>
                    <strong>
                      {selectedCrowd.peak}
                    </strong>
                  </div>

                  <div>
                    <span>Predicted Low</span>
                    <strong>
                      {selectedCrowd.low}
                    </strong>
                  </div>
                </div>

                <p className="ml-note">
                  🧠 Crowd prediction is designed
                  to use historical campus activity,
                  time and location features with a
                  Machine Learning model.
                </p>
              </div>
            )}
          </section>
        )}

        {/* =================================================
            SMART SEARCH
        ================================================= */}

        {activeModule === "search" && (
          <section className="search-page">
            <div className="page-heading">
              <div>
                <h2>Smart Search</h2>
                <p>
                  Search campus locations using
                  natural language.
                </p>
              </div>
            </div>

            <div className="search-box">
              <input
                value={searchText}
                onChange={(e) =>
                  setSearchText(
                    e.target.value
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Try: Ratan Tata, K.L. Rao Ground, Boys Hostel..."
              />

              <button
                onClick={handleSearch}
              >
                🔎 Search
              </button>
            </div>

            <div className="search-examples">
              <span>Try:</span>

              <button
                onClick={() => {
                  setSearchText(
                    "Ratan Tata"
                  );
                }}
              >
                Ratan Tata
              </button>

              <button
                onClick={() => {
                  setSearchText(
                    "Boys Hostel"
                  );
                }}
              >
                Boys Hostel
              </button>

              <button
                onClick={() => {
                  setSearchText(
                    "K.L. Rao Ground"
                  );
                }}
              >
                K.L. Rao Ground
              </button>
            </div>

            {searchResult && (
              <div className="search-result">
                {searchResult.message ? (
                  <>
                    <h3>
                      ❌ {searchResult.name}
                    </h3>

                    <p>
                      {searchResult.message}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="result-icon">
                      📍
                    </div>

                    <div>
                      <h3>
                        {searchResult.name}
                      </h3>

                      <p>
                        Category:{" "}
                        {searchResult.category}
                      </p>

                      <button
                        className="small-route"
                        onClick={() => {
                          setDestination(
                            searchResult.id
                          );
                          setActiveModule(
                            "navigation"
                          );

                          const newRoute =
                            aStar(
                              startLocation,
                              searchResult.node
                            );

                          setRoute(
                            newRoute
                          );
                        }}
                      >
                        🧭 Start Navigation
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            <div className="nlp-card">
              <h3>🧠 NLP Layer</h3>

              <p>
                The Smart Search module is
                designed to understand natural
                language queries and map them to
                campus locations and navigation
                actions.
              </p>

              <div className="nlp-example">
                “Ratan Tata ki short route kavali”
                <span>→</span>
                Destination: Ratan Tata Bhavan
                <span>→</span>
                Navigation
              </div>
            </div>
          </section>
        )}

        {/* =================================================
            AI CAMPUS ASSISTANT
        ================================================= */}

        {activeModule === "assistant" && (
          <section className="assistant-page">
            <div className="page-heading">
              <div>
                <h2>AI Campus Assistant</h2>
                <p>
                  Ask questions about the campus.
                </p>
              </div>
            </div>

            <div className="assistant-card">
              <div className="assistant-icon">
                🤖
              </div>

              <h2>
                How can I help you?
              </h2>

              <p>
                Ask about campus locations,
                facilities, crowd information or
                navigation.
              </p>

              <div className="assistant-input">
                <input
                  value={assistantQuestion}
                  onChange={(e) =>
                    setAssistantQuestion(
                      e.target.value
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      askAssistant();
                    }
                  }}
                  placeholder="Ask something about the campus..."
                />

                <button
                  onClick={askAssistant}
                >
                  Ask AI
                </button>
              </div>

              <div className="assistant-examples">
                <button
                  onClick={() =>
                    setAssistantQuestion(
                      "Where is the library?"
                    )
                  }
                >
                  Where is the library?
                </button>

                <button
                  onClick={() =>
                    setAssistantQuestion(
                      "Which location has high crowd?"
                    )
                  }
                >
                  Which location has high crowd?
                </button>

                <button
                  onClick={() =>
                    setAssistantQuestion(
                      "Where are the hostels?"
                    )
                  }
                >
                  Where are the hostels?
                </button>
              </div>

              {assistantAnswer && (
                <div className="assistant-answer">
                  <strong>🤖 CampusNav AI</strong>

                  <p>
                    {assistantAnswer}
                  </p>
                </div>
              )}
            </div>

            <div className="assistant-features">
              <div>
                <span>📍</span>
                <h3>Location Knowledge</h3>
                <p>
                  Understand campus places and
                  facilities.
                </p>
              </div>

              <div>
                <span>🧠</span>
                <h3>AI Knowledge Layer</h3>
                <p>
                  Designed for updatable campus
                  information.
                </p>
              </div>

              <div>
                <span>🌐</span>
                <h3>Multi-language</h3>
                <p>
                  Natural-language interaction
                  can be extended to Telugu and
                  other languages.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer>
        <span>
          CampusNav AI • Aditya University
        </span>

        <span>
          ML + A* + NLP + AI Assistant
        </span>
      </footer>
    </div>
  );
}
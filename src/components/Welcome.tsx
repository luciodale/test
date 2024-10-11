import { useState } from "react";

export function Welcome() {
  const [showRequirements, setShowRequirements] = useState(
    !!localStorage.getItem("showRequirements")
  );

  const toggleRequirements = () => {
    setShowRequirements(!showRequirements);
    if (showRequirements) {
      localStorage.removeItem("showRequirements");
      return;
    }
    localStorage.setItem("showRequirements", "true");
  };

  return (
    <div className="welcome-container">
      {/* Navigation Bar */}

      {/* Main Content Area */}
      <div className="content">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <h2 className="heading">Project Requirements</h2>
          <button onClick={toggleRequirements}>
            {showRequirements ? "Hide" : "Show"}
          </button>
        </div>

        {showRequirements && (
          <ol className="requirements-list">
            <li>
              <strong>City Selection</strong>
              <p>
                The user should be able to select one of the cities returned by
                the <code style={{ color: "orange" }}>GET /api/cities</code>{" "}
                endpoint.
              </p>
            </li>
            <li>
              <strong>Weather Retrieval</strong>
              <p>
                The app can retrieve the weather information of the selected
                city by calling the{" "}
                <code style={{ color: "orange" }}>
                  GET /api/weather/:lat/:lng
                </code>{" "}
                endpoint.
              </p>
            </li>
            <li>
              <strong>Weather Display</strong>
              <p>
                Display the temperature, humidity, and condition in a nice
                widget.
              </p>
            </li>
            <li>
              <strong>Enhanced Data</strong>
              <p>
                The{" "}
                <code style={{ color: "orange" }}>
                  GET /api/weather/:lat/:lng
                </code>{" "}
                endpoint should only return additional weather information when
                the request includes a valid Authorization header with a bearer
                token. The token is{" "}
                <code style={{ color: "yellow" }}>
                  af6627ea-89de-4ac9-8e98-1d500dc85645
                </code>
              </p>
            </li>
          </ol>
        )}
      </div>
    </div>
  );
}

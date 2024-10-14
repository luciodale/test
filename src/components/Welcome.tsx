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
          <>
            <div
              style={{
                margin: "auto",
                maxWidth: 1000,
                paddingBottom: 20,
              }}
            >
              Build a weather widget that allows users to view the current
              weather for a selected city. The user should be able to choose
              from a list of cities, and upon selection, the widget should
              display the weather information for that specific city. Your task
              is to implement this functionality, ensuring that the city
              selection and weather display are intuitive and responsive.
            </div>
            <div className="requirements-list">
              <div>
                <strong>API</strong>
                <div>
                  <code style={{ color: "orange" }}>GET /api/cities</code>
                </div>
                <div>
                  <code style={{ color: "orange" }}>
                    GET /api/weather/:lat/:lng
                  </code>
                </div>
              </div>

              <div>
                <strong>Enhanced Data</strong>
                <div>
                  The{" "}
                  <code style={{ color: "orange" }}>
                    GET /api/weather/:lat/:lng
                  </code>{" "}
                  endpoint should only return additional weather information
                  when the request includes a valid Authorization header with a
                  bearer token. The token is{" "}
                  <code style={{ color: "yellow" }}>
                    af6627ea-89de-4ac9-8e98-1d500dc85645
                  </code>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

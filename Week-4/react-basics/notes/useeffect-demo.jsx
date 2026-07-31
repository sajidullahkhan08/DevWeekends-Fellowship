// ==========================================
// REACT CONCEPT 4: useEffect HOOK
// ==========================================

/*
 * WHAT IS useEffect?
 * useEffect lets us perform "side effects" in functional components.
 * Side effects are things that interact with the outside world:
 * - Fetching data from an API
 * - Setting up subscriptions
 * - Manually changing the DOM
 * - Setting timers
 *
 * SYNTAX:
 * useEffect(() => {
 *     // effect code here
 *     return () => {
 *         // cleanup code here (optional)
 *     };
 * }, [dependencies]);
 *
 * DEPENDENCY ARRAY:
 * - [] (empty): Runs ONCE after initial render (like componentDidMount)
 * - [value]: Runs when 'value' changes
 * - No array: Runs after EVERY render (usually not what you want)
 */

import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // This effect sets up a timer
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // CLEANUP FUNCTION: Runs when component unmounts or before effect runs again
    // This prevents memory leaks
    return () => {
      clearInterval(intervalId);
      console.log("Timer cleaned up!");
    };
  }, []); // Empty array = run only once on mount

  return <h2>Timer: {seconds} seconds</h2>;
}

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating an API call
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Simulate successful data fetch
        const mockData = {
          id: 1,
          title: "Sample Post",
          body: "This is content",
        };
        setData(mockData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch data");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

export { Timer, DataFetcher };

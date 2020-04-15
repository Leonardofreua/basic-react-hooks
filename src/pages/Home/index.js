import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <ul>
      <li>
        <Link to="/useStateHook">useState</Link>
      </li>
      <li>
        <Link to="/useEffectHook">useEffect</Link>
      </li>
      <li>
        <Link to="/useMemoHook">useMemo</Link>
      </li>
      <li>
        <Link to="useCallbackHook">useCallback</Link>
      </li>
    </ul>
  );
}

import { useState } from 'preact/hooks';

const PreactComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Preact Component {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreactComponent;

import { createSignal } from 'solid-js';

const SolidComponent = ({ message }) => {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);
  return (
    <div>
      <h1>
        {message} {count}
      </h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default SolidComponent;

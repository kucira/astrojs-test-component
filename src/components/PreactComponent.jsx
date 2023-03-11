import { useState } from 'preact/hooks';

const PreactComponent = () => {
  const [count, setCount] = useState(0);

  function foo() {
    console.log(this, 'oke');
  }

  return (
    <div>
      <h1>Preact Component {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(new foo());
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default PreactComponent;
